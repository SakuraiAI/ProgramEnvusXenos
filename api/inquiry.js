import { createHmac } from "node:crypto";
import { isIP } from "node:net";

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
 let data;
 try { data = typeof req.body === "string" ? JSON.parse(req.body) : req.body; } catch { return fail(400, "Neplatné údaje."); }
 if (!data || typeof data !== "object" || JSON.stringify(data).length > 6000) return fail(400, "Poptávka je příliš dlouhá nebo neplatná.");
 if (data.website) return fail(400, "Poptávku nelze odeslat.");
 const fields = {};
 for (const [key, max, required] of [["name",100,true],["phone",40,true],["vehicle",120,true],["service",100,false],["date",10,false],["description",1500,true]]) {
  const value = data[key] ?? "";
  if (typeof value !== "string" || value.length > max || (required && !value.trim())) return fail(400, "Vyplňte správně povinné údaje.");
  fields[key] = value.trim();
 }
 if (!/^[+()\d\s.-]{7,40}$/.test(fields.phone) || fields.phone.replace(/\D/g, "").length < 7) return fail(400, "Zkontrolujte telefonní číslo.");
 if (fields.date && (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date) || !Number.isFinite(Date.parse(fields.date)))) return fail(400, "Zkontrolujte datum.");
 // Support the existing project variable as well as the standard name.
 const configuredKey = process.env.RESEND_API_KEY?.trim();
 const projectKey = process.env.ProgramEnvusXenos?.trim();
 const apiKey = configuredKey || (/^re_[A-Za-z0-9_-]+$/.test(projectKey || "") ? projectKey : "");
 if (!apiKey) return fail(503, "Odesílání není dostupné. Zavolejte nám nebo napište e-mail.");
 const text = [`Jméno: ${fields.name}`, `Telefon: ${fields.phone}`, `Vozidlo: ${fields.vehicle}`, `Služba: ${fields.service || "Dle popisu"}`, `Požadovaný termín: ${fields.date || "Dle domluvy"}`, "", fields.description].join("\n");
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
   body: JSON.stringify({ from: "PGEX Autoservis <poptavky@programenvusxenos.com>", to: ["programenvus@gmail.com"], reply_to: "programenvus@gmail.com", subject: "Nová servisní poptávka z webu PGEX", text })
  });
  const response = await result.json();
  if (result.status === 409 && response?.name === "invalid_idempotent_request") {
   return throttled(retryAfter(), "Poptávky odesíláte příliš rychle. Počkejte prosím na dokončení odpočtu.");
  }
  if (result.status === 409 && response?.name === "concurrent_idempotent_requests") {
   return throttled(3, "Předchozí odeslání se ještě zpracovává. Za chvíli můžete zkusit znovu.");
  }
  if (!result.ok || !response?.id) { console.error("Inquiry delivery rejected", result.status); return fail(502, "Poptávku se nepodařilo odeslat. Zkuste to znovu nebo nám zavolejte."); }
  return res.status(200).json({ ok: true, retryAfter: retryAfter() });
 } catch { console.error("Inquiry delivery unavailable"); return fail(502, "Odeslání se nepodařilo potvrdit. Zkuste to znovu nebo nám zavolejte."); }
}
