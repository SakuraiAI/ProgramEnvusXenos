import { useEffect, useRef, useState } from "react";
import { MAX_REQUEST_BYTES, validEmail } from "../shared/inquiry.js";

export default function ServiceInquiry() {
 const selectedService = new URLSearchParams(window.location.search).get("sluzba")?.slice(0, 100) || "";
 const [requestedDate, setRequestedDate] = useState("");
 const [sending, setSending] = useState(false);
 const [sent, setSent] = useState(null);
 const [error, setError] = useState("");
 const [retryAt, setRetryAt] = useState(0);
 const [retrySeconds, setRetrySeconds] = useState(0);
 const pending = useRef(false);
 const resultRef = useRef(null);
 useEffect(() => {
  if (sent || error) resultRef.current?.focus();
 }, [sent, error]);
 useEffect(() => {
  if (!retryAt) return;
  const update = () => {
   const seconds = Math.max(0, Math.ceil((retryAt - Date.now()) / 1000));
   setRetrySeconds(seconds);
   if (seconds === 0) setRetryAt(0);
  };
  update();
  const timer = window.setInterval(update, 1000);
  return () => window.clearInterval(timer);
 }, [retryAt]);
 async function sendInquiry(event) {
  event.preventDefault();
  if (pending.current || sent || Date.now() < retryAt) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  data.email = data.email.trim();
  if (data.email && !validEmail(data.email)) { setError("Zkontrolujte e-mailovou adresu, nebo ji nechte prázdnou."); return; }
  const body = JSON.stringify(data);
  if (new Blob([body]).size > MAX_REQUEST_BYTES) { setError("Poptávka je příliš dlouhá. Zkraťte prosím popis a zkuste to znovu."); return; }
  pending.current = true;
  setSending(true); setError("");
  try {
   const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body, signal: AbortSignal.timeout(45000) });
   const result = await response.json().catch(() => ({}));
   if (response.status === 429) {
    const supplied = Number(result.retryAfter || response.headers.get("Retry-After"));
    const seconds = Number.isFinite(supplied) && supplied > 0 ? Math.min(60, Math.ceil(supplied)) : 60;
    setRetryAt(Date.now() + seconds * 1000);
    setRetrySeconds(seconds);
    throw new Error(result.error || "Poptávky odesíláte příliš rychle. Počkejte prosím na dokončení odpočtu.");
   }
   if (response.status === 413) throw new Error("Poptávka je příliš dlouhá. Zkraťte prosím popis a zkuste to znovu.");
   if (!response.ok || !result.ok) throw new Error(result.error || "Odeslání není dostupné.");
   setSent({ confirmation: result.confirmation, email: data.email });
  } catch (failure) { setError(failure instanceof SyntaxError || failure.name === "TimeoutError" ? "Odeslání se nepodařilo potvrdit. Zkuste to znovu nebo nám zavolejte." : failure.message || "Poptávku se nepodařilo odeslat."); }
  finally { pending.current = false; setSending(false); }
 }
 return <section className="portal-document">
  <p className="portal-eyebrow">PGEX AUTOSERVIS</p><h1>Servisní poptávka</h1><p className="portal-lead">Řekněte nám, co vaše auto potřebuje. Společně domluvíme další postup.</p>
  <ol className="inquiry-process"><li><span>01</span><strong>Popíšete požadavek</strong><p>Vozidlo, závada a termín, který vám vyhovuje.</p></li><li><span>02</span><strong>Domluvíme podrobnosti</strong><p>Upřesníme rozsah práce a dostupný termín.</p></li><li><span>03</span><strong>Potvrdíme návštěvu</strong><p>Samotná poptávka ještě není rezervací.</p></li></ol>
  <form className="service-inquiry" onSubmit={sendInquiry} aria-busy={sending}>
   <h2>Údaje k poptávce</h2><p className="inquiry-required">Povinné údaje jsou označené hvězdičkou.</p>
   <fieldset disabled={sending || Boolean(sent)}>
    <legend className="workshop-sr-only">Kontaktní údaje a požadavek na servis</legend>
    <div className="inquiry-trap" aria-hidden="true"><label>Web<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <div className="inquiry-grid">
     <label>Vaše jméno *<input name="name" autoComplete="name" required maxLength={100}/></label>
     <label>Telefon *<input name="phone" type="tel" autoComplete="tel" required maxLength={40}/></label>
     <label>E-mail (nepovinné)<input name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={254} placeholder="vas@email.cz" aria-describedby="inquiry-email-hint"/><small id="inquiry-email-hint">Pošleme vám potvrzení přijetí a přehled poptávky.</small></label>
     <label>Značka a model vozidla *<input name="vehicle" placeholder="Např. Škoda Octavia, 2018" required maxLength={120}/></label>
     <label>Služba (nepovinné)<input name="service" defaultValue={selectedService} placeholder="Např. výměna oleje" maxLength={100}/></label>
     <label>Požadovaný termín (nepovinné)<span className="inquiry-date-field" data-empty={!requestedDate}><input name="date" type="date" value={requestedDate} onChange={event => setRequestedDate(event.target.value)}/><span className="inquiry-date-placeholder" aria-hidden="true">Vyberte datum</span></span></label>
    </div>
    <label>Co potřebujete vyřešit? *<textarea name="description" rows={5} required maxLength={1500} placeholder="Popište závadu, její projevy nebo požadovanou údržbu."/></label>
   </fieldset>
   <p className="contact-note">Údaje použijeme k vyřízení vaší poptávky. Odesláním ani e-mailovým potvrzením ještě nevzniká rezervace termínu.</p>
   <button className="gateway-button" type="submit" disabled={sending || Boolean(sent) || retrySeconds > 0}>{sending ? "Odesílání…" : sent ? "Poptávka odeslána" : retrySeconds > 0 ? `Zkusit znovu za ${retrySeconds} s` : "Odeslat servisní poptávku →"}</button>
   {sent && <div className="inquiry-success" role="status" tabIndex={-1} ref={resultRef}><strong>Děkujeme, poptávka byla přijata k odeslání do servisu.</strong><p>Ozveme se na uvedený telefon a domluvíme podrobnosti. Termín platí až po našem potvrzení.</p>{sent.email && <p>{sent.confirmation === "accepted" ? `Potvrzení přijetí jsme předali k odeslání na ${sent.email}. Pokud nedorazí, zkontrolujte i složku spam.` : "Potvrzovací e-mail se nepodařilo potvrdit, ale poptávka pro servis už byla přijata. Znovu ji neposílejte; ozveme se vám telefonicky."}</p>}</div>}
   {error && <p role="alert" tabIndex={-1} ref={resultRef}>{error} Údaje zůstaly ve formuláři. Kontakt: <a href="mailto:programenvus@gmail.com">programenvus@gmail.com</a> · <a href="tel:+420731990599">+420 731 990 599</a></p>}
  </form>
  <aside className="inquiry-help inquiry-help-refined" aria-labelledby="inquiry-help-title"><div><p className="portal-eyebrow">TELEFONICKÁ DOMLUVA</p><h2 id="inquiry-help-title">Zavolejte do servisu</h2><p>Poradíme s dalším postupem a domluvíme návštěvu.</p><dl className="inquiry-help-hours"><div><dt>Pondělí–pátek</dt><dd>7:00–20:00</dd></div><div><dt>Sobota–neděle</dt><dd>9:00–18:30</dd></div></dl></div><div className="inquiry-help-actions"><a className="gateway-button outline" href="tel:+420731990599">Zavolat +420 731 990 599</a><a href="/kontakt?oblast=autoservis">Adresa a navigace do servisu →</a></div></aside>
 </section>;
}
