import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import { MAX_REQUEST_BYTES, validEmail } from "../shared/inquiry.js";
import { emailAttachments } from "../server/inquiry-photos.js";

const SEND_WINDOW_MS = 60_000;

function clientAddress(req) {
 // Only Vercel's overwritten header is trusted in production, never a form field.
 const raw = process.env.VERCEL === "1" ? req.headers["x-vercel-forwarded-for"] : req.socket?.remoteAddress;
 if (typeof raw !== "string" || !isIP(raw.trim())) return null;
 const ip = raw.trim();
 return isIP(ip) === 6 ? new URL(`http://[${ip}]`).hostname : ip;
}

export default async function handler(req, res) {
 res.setHeader("Cache-Control", "no-store");
 const fail = (code, error) => res.status(code).json({ error });
 if (req.method !== "POST") { res.setHeader("Allow", "POST"); return fail(405, "Použijte formulář poptávky."); }
 const allowed = new Set(["https://programenvusxenos.com", "https://www.programenvusxenos.com", "https://program-envus-xenos.vercel.app"]);
 if (!allowed.has(req.headers.origin)) return fail(403, "Odešlete poptávku z webu PGEX.");
 if (!req.headers["content-type"]?.startsWith("application/json")) return fail(415, "Neplatný formát.");
 if (Number(req.headers["content-length"]) > MAX_REQUEST_BYTES || (typeof req.body === "string" && Buffer.byteLength(req.body) > MAX_REQUEST_BYTES)) return fail(413, "Přílohy jsou příliš velké. Odeberte některou fotku.");
 let data;
 try { data = typeof req.body === "string" ? JSON.parse(req.body) : req.body; } catch { return fail(400, "Neplatné údaje."); }
 if (!data || typeof data !== "object" || Array.isArray(data)) return fail(400, "Neplatné údaje.");
 if (Buffer.byteLength(JSON.stringify(data)) > MAX_REQUEST_BYTES) return fail(413, "Přílohy jsou příliš velké. Odeberte některou fotku.");
 if (data.website) return fail(400, "Poptávku nelze odeslat.");
 const fields = {};
 for (const [key, max, required] of [["name",100,true],["phone",40,true],["email",254,false],["vehicle",120,true],["service",100,false],["date",10,false],["description",1500,true]]) {
  const value = data[key] ?? "";
  if (typeof value !== "string" || value.length > max || (required && !value.trim())) return fail(400, "Vyplňte správně povinné údaje.");
  fields[key] = value.trim();
 }
 if (!/^[+()\d\s.-]{7,40}$/.test(fields.phone) || fields.phone.replace(/\D/g, "").length < 7) return fail(400, "Zkontrolujte telefonní číslo.");
 if (fields.date && (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date) || (!Number.isFinite(Date.parse(fields.date)) || new Date(fields.date).toISOString().slice(0, 10) !== fields.date))) return fail(400, "Zkontrolujte datum.");
 if (fields.email && !validEmail(fields.email)) return fail(400, "Zkontrolujte e-mailovou adresu.");
 // Support the existing project variable as well as the standard name.
 const configuredKey = process.env.RESEND_API_KEY?.trim();
 const projectKey = process.env.ProgramEnvusXenos?.trim();
 const apiKey = configuredKey || (/^re_[A-Za-z0-9_-]+$/.test(projectKey || "") ? projectKey : "");
 if (!apiKey) return fail(503, "Odesílání není dostupné. Zavolejte nám nebo napište e-mail.");
 let attachments;
 try { attachments = await emailAttachments(data.photos); }
 catch (error) { return fail(400, error.message); }
 const summary = [`Jméno: ${fields.name}`, `Telefon: ${fields.phone}`, `E-mail: ${fields.email || "Neuveden"}`, `Vozidlo: ${fields.vehicle}`, `Služba: ${fields.service || "Dle popisu"}`, `Požadovaný termín: ${fields.date ? fields.date.split("-").reverse().join(". ") : "Dle domluvy"}`, `Počet fotek: ${attachments.length}`, "", "Popis požadavku:", fields.description].join("\n");
 const text = `${summary}\n\nOdeslání poptávky ani automatické potvrzení není rezervací termínu.`;
 const address = clientAddress(req);
 if (!address) return fail(503, "Odesílání není dostupné. Zavolejte nám nebo napište e-mail.");
 const window = Math.floor(Date.now() / SEND_WINDOW_MS);
 // Resend atomically accepts one payload per key, across all function instances.
 // Replays of that payload succeed without another email; changed payloads get 409.
 // This limits delivered emails, not incoming HTTP traffic (which needs a WAF rule).
 const key = createHmac("sha256", apiKey).update(`inquiry-slot-v1:${address}:${window}`).digest("hex");
 const retryAfter = () => Math.max(1, Math.ceil(((window + 1) * SEND_WINDOW_MS - Date.now()) / 1000));
 const throttled = (seconds, error) => {
  res.setHeader("Retry-After", String(seconds));
  return res.status(429).json({ error, retryAfter: seconds });
 };
 try {
  const result = await fetch("https://api.resend.com/emails", {
   method: "POST", signal: AbortSignal.timeout(15000),
   headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `inquiry-${key}` },
   body: JSON.stringify({ from: "PGEX Autoservis <poptavky@programenvusxenos.com>", to: ["programenvus@gmail.com"], reply_to: fields.email || "programenvus@gmail.com", subject: "Nová servisní poptávka z webu PGEX", text, ...(attachments.length ? { attachments } : {}) })
  });
  const response = await result.json();
  if (result.status === 409 && response?.name === "invalid_idempotent_request") {
   return throttled(retryAfter(), "Poptávky odesíláte příliš rychle. Počkejte prosím na dokončení odpočtu.");
  }
  if (result.status === 409 && response?.name === "concurrent_idempotent_requests") {
   return throttled(3, "Předchozí odeslání se ještě zpracovává. Za chvíli můžete zkusit znovu.");
  }
  if (!result.ok || !response?.id) { console.error("Inquiry delivery rejected", result.status); return fail(502, "Poptávku se nepodařilo odeslat. Zkuste to znovu nebo nám zavolejte."); }
  // The workshop copy is the primary delivery. A failed receipt must never
  // report the whole inquiry as failed and encourage a duplicate submission.
  let confirmation = "not_requested";
  if (fields.email) {
   confirmation = "unavailable";
   try {
    const receipt = await fetch("https://api.resend.com/emails", {
     method: "POST", signal: AbortSignal.timeout(8000),
     headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `inquiry-receipt-${response.id}` },
     body: JSON.stringify({
      from: "PGEX Autoservis <poptavky@programenvusxenos.com>", to: [fields.email], reply_to: "programenvus@gmail.com",
      subject: "PGEX Autoservis — přijetí servisní poptávky",
      text: ["Dobrý den,", "", "děkujeme za servisní poptávku. Přijali jsme ji k vyřízení a ozveme se vám na uvedený telefon.", "", "TOTO NENÍ POTVRZENÍ REZERVACE. Požadovaný termín i rozsah práce s vámi teprve domluvíme. Termín platí až po našem osobním potvrzení.", "", "Přehled údajů z formuláře:", summary, "", "Přiložené fotky byly odeslány pouze do servisu; v tomto potvrzení nejsou přiloženy.", "", "Potřebujete něco upřesnit? Odpovězte na tento e-mail nebo zavolejte +420 731 990 599.", "PGEX Autoservis · Suchdolská 710, Horoměřice", "https://programenvusxenos.com/autoservis", "", "Jde o automatické potvrzení požadavku z našeho webu. Pokud jste jej neodeslali, tuto zprávu ignorujte."].join("\n")
     })
    });
    const accepted = await receipt.json();
    if (receipt.ok && accepted?.id) confirmation = "accepted";
    else console.error("Inquiry receipt rejected", receipt.status);
   } catch { console.error("Inquiry receipt unavailable"); }
  }
  return res.status(200).json({ ok: true, confirmation, retryAfter: retryAfter() });
 } catch { console.error("Inquiry delivery unavailable"); return fail(502, "Odeslání se nepodařilo potvrdit. Zkuste to znovu nebo nám zavolejte."); }
}
