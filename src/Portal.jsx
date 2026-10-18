import { useEffect, useRef, useState } from "react";
import { TechnologyPage, ProjectsPage, AIProfilePage, RevenantPage, NewsPage } from "./Technology";
import "./portal.css";
import Workshop, { WorkshopLocation } from "./Workshop";

const aliases = { home: "home", systems: "auto", portfolio: "tech", "portfolio-unreal": "projects", marika: "marika", "portfolio-blender": "about", contact: "contact", "portfolio-vscode": "booking" };
const routes = { "/revenant": "revenant", "/luna": "luna", "/xeno": "xeno", "/novinky": "news", "/services": "auto", "/systems": "auto", "/technology": "tech", "/portfolio": "tech", "/projects": "projects", "/about": "about", "/contact": "contact", "/book-service": "booking", "/marika": "marika", "/": "home", "/index.html": "home", "/autoservis": "auto", "/technologie": "tech", "/projekty": "projects", "/o-nas": "about", "/kontakt": "contact", "/poptavka": "booking" };
const links = {
 auto: [["Autoservis", "/autoservis"], ["Ceník", "/autoservis#cenik"], ["Servisní poptávka", "/poptavka"], ["Kontakt", "/kontakt?oblast=autoservis"]],
 tech: [["Technologie", "/technologie"], ["Projekty", "/projekty"], ["Novinky", "/novinky"], ["Kontakt", "/kontakt?oblast=technologie"]],
 shared: [["O nás", "/o-nas"], ["Kontakt", "/kontakt"]],
};
const titles = { revenant: "Revenant", luna: "Luna", xeno: "Xeno", news: "Novinky", home: "Vyberte si svou cestu", auto: "Autoservis", tech: "Vývoj a technologie", projects: "Projekty", marika: "Marika", about: "O nás", contact: "Kontakt", booking: "Servisní poptávka" };
// Add only real, verified profile URLs here. Social links belong on About only.
const socials = [{ name: "Instagram", href: "https://www.instagram.com/programenvusxenos_/", detail: "Fotky a dění kolem PGEX" }, { name: "TikTok", href: "https://www.tiktok.com/@programenvusxenos", detail: "Videa ze světa PGEX" }, { name: "X", href: "https://x.com/PGEnvus", detail: "Příspěvky ze světa PGEX" }, { name: "Reddit", href: "https://www.reddit.com/user/CicadaSensitive9928/", detail: "Profil u/CicadaSensitive9928" }, { name: "LinkedIn", href: "https://www.linkedin.com/in/program-envus-xenos-946294366/", detail: "Program Envus Xenos" }, { name: "Twitch", href: "https://www.twitch.tv/programenvusxenos", detail: "Kanál programenvusxenos" }, { name: "Kick", href: "https://kick.com/programenvusxenos", detail: "Kanál programenvusxenos" }, { name: "Discord", href: "https://discord.gg/DaNX74Tneb", detail: "Připojte se ke komunitě PGEX" }];

export default function Portal({ page }) {
 const pathname = window.location.pathname.replace(/\/$/, "") || "/";
 const current = routes[pathname] || aliases[page] || "home";
 const context = new URLSearchParams(window.location.search).get("oblast");
 const area = ["auto", "booking"].includes(current) || (current === "contact" && context === "autoservis") ? "auto" : ["tech", "projects", "marika", "luna", "xeno", "news", "revenant"].includes(current) || (current === "contact" && context === "technologie") ? "tech" : "shared";
 const [intro] = useState(() => {
   if (current !== "home" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
   try { return sessionStorage.getItem("pgex-intro-gold-v2-seen") !== "1"; } catch { return false; }
 });
 useEffect(() => {
   document.title = `${titles[current]} | PGEX`;
   document.documentElement.lang = "cs";
   if (current === "home") { try { sessionStorage.setItem("pgex-intro-gold-v2-seen", "1"); } catch { /* Storage is optional. */ } }
 }, [current]);
 return <div className={`portal page-${current} ${current === "home" ? "portal-home" : ""} ${intro ? "portal-intro" : ""}`}>
   <a className="skip-link" href="#content">Přejít na obsah</a>
   <header className="portal-header">
     <a className="portal-brand" href="/" aria-label="PGEX — úvodní rozcestník"><span className="portal-wordmark"><img src="/pgex-wordmark.svg" alt="PGEX" width="230" height="44"/></span></a>
     {area !== "shared" && <span className="area-label">{area === "auto" ? "AUTOSERVIS" : "VÝVOJ A TECHNOLOGIE"}</span>}
     <nav aria-label="Hlavní navigace">{links[area].map(([label, href]) => <a key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</a>)}</nav>
   </header>
   <main id="content" className={current === "home" ? "gateway-main" : "portal-content"}>
     {current === "home" && <>
       <div className="gateway-heading"><p className="portal-eyebrow">PROGRAM ENVUS XENOS</p><h1>Vyberte si svou cestu.</h1></div>
       <div className="gateway-grid">
         <a className="gateway-card" href="/autoservis"><div className="gateway-art garage-art"><img src="/workshop/workshop-hero.jpg" alt="Ilustrace auta s otevřenou kapotou v dílně" width="1536" height="1024"/></div><div className="gateway-copy"><h2>Autoservis</h2><p>Diagnostika, údržba a opravy vozidel.</p><span className="gateway-button">Přejít na autoservis <span aria-hidden="true">→</span></span></div></a>
         <a className="gateway-card" href="/technologie"><div className="gateway-art development-art"><img src="/technology/development-workspace.jpg" alt="Ilustrace vývojářského pracoviště s kódem a vizualizací AI na monitorech" width="1536" height="1024"/></div><div className="gateway-copy"><h2>Vývoj a technologie</h2><p>AI, software a vlastní projekty.</p><span className="gateway-button outline">Prozkoumat projekty <span aria-hidden="true">→</span></span></div></a>
       </div>
     </>}
     {current === "auto" && <Workshop/>}
     {current === "tech" && <TechnologyPage/>}
     {current === "projects" && <ProjectsPage/>}
     {["luna", "xeno", "marika"].includes(current) && <AIProfilePage profile={current}/>}
     {current === "news" && <NewsPage/>}
     {current === "revenant" && <RevenantPage/>}
     {current === "about" && <About/>}
     {current === "contact" && <Contact area={area}/>}
     {current === "booking" && <ServiceInquiry/>}
   </main>
   <footer className="portal-footer">{area === "auto" && <a href="/autoservis#reklamace">Obchodní podmínky a reklamace</a>}<span>© {new Date().getFullYear()} PGEX · Program Envus Xenos</span>{current !== "home" && <a href="/">Zpět na rozcestník ↗</a>}</footer>
 </div>;
}

function About() {
 return <section className="portal-document about-page"><header><p className="portal-eyebrow">O NÁS / PROGRAM ENVUS XENOS</p><h1>Zájem o techniku.<br/>Prostor pro vlastní cestu.</h1><p className="portal-lead">PGEX spojuje péči o auta s vývojem softwaru a vlastních technických projektů. Dva směry, které mají společný zájem: porozumět tomu, jak věci fungují, a hledat možnosti, jak je zlepšit.</p></header><div className="about-directions about-picture-cards"><article><img src="/workshop/workshop-hero.jpg" alt="Ilustrace práce na vozidle v dílně" width="1536" height="1024" loading="lazy"/><div><p className="portal-eyebrow">AUTOSERVIS / HOROMĚŘICE</p><h2>Péče o vaše vozidlo</h2><p>Diagnostika, údržba a opravy s jasnou domluvou o dalším postupu. Na webu najdete přehled služeb, ceník i možnost připravit servisní poptávku.</p><a href="/autoservis">Poznat autoservis →</a></div></article><article><img src="/technology/development-workspace.jpg" alt="Ilustrace pracoviště pro vývoj softwaru" width="1536" height="1024" loading="lazy"/><div><p className="portal-eyebrow">VÝVOJ A TECHNOLOGIE</p><h2>Od nápadu k projektu</h2><p>Vyvíjíme PGEX AI a rozvíjíme směry spojené s Lunou, Xenem a Marikou. Mezi vlastní technické projekty patří také supersport Revenant.</p><a href="/technologie">Poznat technologie →</a></div></article></div><section className="about-principles"><p className="portal-eyebrow">NA ČEM NÁM ZÁLEŽÍ</p><h2>Srozumitelně. Postupně. S jasným cílem.</h2><div className="info-grid"><article><h3>Jasná domluva</h3><p>U servisu je důležité vědět, co se bude řešit, jaký je další postup a na čem jsme se dohodli.</p></article><article><h3>Praktický smysl</h3><p>U technologií hledáme využití v konkrétních úlohách. Nápady rozdělujeme na kroky, které lze postupně ověřovat.</p></article><article><h3>Prostor pro dialog</h3><p>Dotazy, zkušenosti a zpětná vazba pomáhají zpřesnit zadání i další směr práce.</p></article></div></section><section className="social-section"><p className="portal-eyebrow">KOMUNITA PGEX</p><h2>Buďte součástí diskuze</h2><p>Prostor pro otázky, nápady a setkávání kolem PGEX. Zprávy z vývoje najdete samostatně v <a href="/novinky">Novinkách</a>.</p>{socials.map(s => <a className="social-link" key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"><strong>{s.name} ↗</strong><span>{s.detail}</span></a>)}<p><a className="about-contact-link" href="/kontakt">Kontakty na PGEX →</a></p></section></section>;
}

function Contact({ area }) {
 const tech = area === "tech";
 const email = (subject) => `mailto:programenvus@gmail.com?subject=${encodeURIComponent(subject)}`;
 return <section className="portal-document contact-page contact-refined">
  <header><p className="portal-eyebrow">{tech ? "PGEX / TECHNOLOGIE" : area === "auto" ? "PGEX / AUTOSERVIS" : "PGEX"}</p><h1>Kontakty</h1><p className="portal-lead">{tech ? "Dotazy k projektům, zpětná vazba a spolupráce. Napište nám, co vás zajímá." : "Domluvte si servis nebo se ozvěte k našim projektům. Všechny důležité údaje najdete tady."}</p></header>
  <nav className="contact-selector" aria-label="Oblast kontaktu"><a href="/kontakt?oblast=autoservis" aria-current={area === "auto" ? "page" : undefined}><span>01</span> Autoservis <small>Návštěva, opravy a údržba</small></a><a href="/kontakt?oblast=technologie" aria-current={tech ? "page" : undefined}><span>02</span> Technologie <small>Projekty a spolupráce</small></a></nav>
  <div className="contact-card-grid"><a className="contact-action-card" href={tech ? email("Vývoj a technologie") : "tel:+420731990599"}><span className="portal-eyebrow">{tech ? "NAPIŠTE NÁM" : "ZAVOLEJTE NÁM"}</span><strong>{tech ? "programenvus@gmail.com" : "+420 731 990 599"}</strong><span>{tech ? "Dotazy k vývoji a spolupráci" : "Domluva termínu a dotazy k servisu"}</span><span className="contact-action-label">{tech ? "Otevřít e-mail" : "Zavolat"} <span aria-hidden="true">↗</span></span></a><a className="contact-action-card" href={tech ? "tel:+420731990599" : email("Dotaz k autoservisu")}><span className="portal-eyebrow">{tech ? "TELEFON" : "E-MAIL"}</span><strong>{tech ? "+420 731 990 599" : "programenvus@gmail.com"}</strong><span>{tech ? "Pokud dáváte přednost hovoru" : "Podrobnější dotazy a informace"}</span><span className="contact-action-label">{tech ? "Zavolat" : "Otevřít e-mail"} <span aria-hidden="true">↗</span></span></a></div>
  {tech ? <section className="contact-topic"><p className="portal-eyebrow">VYBERTE TÉMA ZPRÁVY</p><h2>O čem si napíšeme?</h2><div className="contact-topics">{[["PGEX AI", "Aplikace, Luna a zpětná vazba"],["Revenant", "Dotazy k projektu supersportu"],["Spolupráce s PGEX", "Váš nápad nebo nabídka spolupráce"]].map(([title,description])=><a key={title} href={email(title)}><strong>{title} ↗</strong><span>{description}</span></a>)}</div><p>Vybrané téma předvyplní předmět e-mailu. Do zprávy přidejte svůj dotaz a potřebné souvislosti; u chyby v aplikaci také postup, při kterém nastala.</p></section> : <><section className="contact-visit"><div><p className="portal-eyebrow">KDY NÁS ZASTIHNETE</p><h2>Otevírací doba servisu</h2><dl><div><dt>Pondělí–pátek</dt><dd>7:00–20:00</dd></div><div><dt>Sobota–neděle</dt><dd>9:00–18:30</dd></div></dl><p>Návštěvu si prosím domluvte předem telefonicky.</p></div><div className="contact-booking-card"><p className="portal-eyebrow">DOMLUVENÍ OPRAVY</p><h2>Co potřebuje vaše auto?</h2><p>Připravte si značku a model vozu, stručný popis závady a termín, který by vám vyhovoval.</p><a className="gateway-button" href="/poptavka">Servisní poptávka →</a><p className="contact-note">Termín a cenu potvrdíme po domluvě.</p></div></section><WorkshopLocation/></>}
  <div className="contact-bottom-note"><p>{tech ? "Chcete nejprve poznat, na čem pracujeme?" : "Hledáte informace o vývoji a projektech PGEX?"}</p><a href={tech ? "/projekty" : "/kontakt?oblast=technologie"}>{tech ? "Prohlédnout projekty →" : "Kontakty pro technologie →"}</a></div>
 </section>;
}

function ServiceInquiry() {
 const selectedService = new URLSearchParams(window.location.search).get("sluzba")?.slice(0, 100) || "";
 const [sending, setSending] = useState(false);
 const [sent, setSent] = useState(false);
 const [error, setError] = useState("");
 const [retryAt, setRetryAt] = useState(0);
 const [retrySeconds, setRetrySeconds] = useState(0);
 const pending = useRef(false);
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
  pending.current = true;
  setSending(true); setError("");
  try {
   const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), signal: AbortSignal.timeout(25000) });
   const result = await response.json().catch(() => ({}));
   if (response.status === 429) {
    const supplied = Number(result.retryAfter || response.headers.get("Retry-After"));
    const seconds = Number.isFinite(supplied) && supplied > 0 ? Math.min(60, Math.ceil(supplied)) : 60;
    setRetryAt(Date.now() + seconds * 1000);
    setRetrySeconds(seconds);
    throw new Error(result.error || "Poptávky odesíláte příliš rychle. Počkejte prosím na dokončení odpočtu.");
   }
   if (!response.ok || !result.ok) throw new Error(result.error || "Odeslání není dostupné.");
   setSent(true);
  } catch (failure) { setError(failure instanceof SyntaxError || failure.name === "TimeoutError" ? "Odeslání se nepodařilo potvrdit. Zkuste to znovu nebo nám zavolejte." : failure.message || "Poptávku se nepodařilo odeslat."); }
  finally { pending.current = false; setSending(false); }
 }
 return <section className="portal-document"><p className="portal-eyebrow">PGEX AUTOSERVIS</p><h1>Servisní poptávka</h1><p className="portal-lead">Řekněte nám, co vaše auto potřebuje. Společně domluvíme další postup.</p><ol className="inquiry-process"><li><span>01</span><strong>Popíšete požadavek</strong><p>Vozidlo, závada a termín, který vám vyhovuje.</p></li><li><span>02</span><strong>Domluvíme podrobnosti</strong><p>Upřesníme rozsah práce a dostupný termín.</p></li><li><span>03</span><strong>Potvrdíme návštěvu</strong><p>Samotná poptávka ještě není rezervací.</p></li></ol><form className="service-inquiry" onSubmit={sendInquiry} aria-busy={sending}><div className="inquiry-trap" aria-hidden="true"><label>Web<input name="website" tabIndex={-1} autoComplete="off"/></label></div><h2>Údaje k poptávce</h2><p className="inquiry-required">Povinné údaje jsou označené hvězdičkou.</p><div className="inquiry-grid"><label>Vaše jméno *<input name="name" autoComplete="name" required maxLength={100}/></label><label>Telefon *<input name="phone" type="tel" autoComplete="tel" required maxLength={40}/></label><label>Značka a model vozidla *<input name="vehicle" placeholder="Např. Škoda Octavia, 2018" required maxLength={120}/></label><label>Služba (nepovinné)<input name="service" defaultValue={selectedService} placeholder="Např. výměna oleje" maxLength={100}/></label><label>Požadovaný termín (nepovinné)<input name="date" type="date"/></label></div><label>Co potřebujete vyřešit? *<textarea name="description" rows={5} required maxLength={1500} placeholder="Popište závadu, její projevy nebo požadovanou údržbu."/></label><p className="contact-note">Údaje z formuláře použijeme k vyřízení vaší poptávky. Odesláním ještě nevzniká rezervace termínu.</p><button className="gateway-button" type="submit" disabled={sending || sent || retrySeconds > 0}>{sending ? "Odesílání…" : sent ? "Poptávka odeslána" : retrySeconds > 0 ? `Zkusit znovu za ${retrySeconds} s` : "Odeslat servisní poptávku →"}</button>{sent && <p role="status">Děkujeme, zpráva byla přijata k odeslání do servisu. Ozveme se na uvedený telefon a domluvíme podrobnosti.</p>}{error && <p role="alert">{error} Údaje zůstaly ve formuláři. Kontakt: <a href="mailto:programenvus@gmail.com">programenvus@gmail.com</a> · <a href="tel:+420731990599">+420 731 990 599</a></p>}</form><aside className="inquiry-help"><div><h2>Raději to proberete po telefonu?</h2><p>Pondělí–pátek 7:00–20:00 · Sobota–neděle 9:00–18:30</p><a href="/kontakt?oblast=autoservis">Adresa a navigace do servisu →</a></div><a className="gateway-button outline" href="tel:+420731990599">Zavolat +420 731 990 599</a></aside></section>;
}
