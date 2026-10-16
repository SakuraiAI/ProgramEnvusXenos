import { useEffect, useState } from "react";
import { TechnologyPage, ProjectsPage, MarikaPage } from "./App";
import "./portal.css";
import Workshop, { WorkshopLocation, WorkshopDocuments } from "./Workshop";

const aliases = { home: "home", systems: "auto", portfolio: "tech", "portfolio-unreal": "projects", marika: "marika", "portfolio-blender": "about", contact: "contact", "portfolio-vscode": "booking" };
const routes = { "/services": "auto", "/systems": "auto", "/technology": "tech", "/portfolio": "tech", "/projects": "projects", "/about": "about", "/contact": "contact", "/book-service": "booking", "/marika": "marika", "/": "home", "/index.html": "home", "/autoservis": "auto", "/technologie": "tech", "/projekty": "projects", "/o-nas": "about", "/kontakt": "contact", "/poptavka": "booking" };
const links = {
 auto: [["Autoservis", "/autoservis"], ["Ceník", "/autoservis#cenik"], ["Poptat servis", "/poptavka"], ["Kontakt", "/kontakt?oblast=autoservis"]],
 tech: [["Technologie", "/technologie"], ["Projekty", "/projekty"], ["Marika", "/marika.html"], ["Kontakt", "/kontakt?oblast=technologie"]],
 shared: [["O nás", "/o-nas"], ["Kontakt", "/kontakt"]],
};
const titles = { home: "Vyberte si svou cestu", auto: "Autoservis", tech: "Vývoj a technologie", projects: "Projekty", marika: "Marika", about: "O nás", contact: "Kontakt", booking: "Poptat servis" };
// Add only real, verified profile URLs here. Social links belong on About only.
const socials = [{ name: "Discord", href: "https://discord.gg/DaNX74Tneb", detail: "Připojte se ke komunitě PGEX" }];

export default function Portal({ page }) {
 const pathname = window.location.pathname.replace(/\/$/, "") || "/";
 const current = routes[pathname] || aliases[page] || "home";
 const context = new URLSearchParams(window.location.search).get("oblast");
 const area = ["auto", "booking"].includes(current) || (current === "contact" && context === "autoservis") ? "auto" : ["tech", "projects", "marika"].includes(current) || (current === "contact" && context === "technologie") ? "tech" : "shared";
 const [intro] = useState(() => {
   if (current !== "home" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
   try { return sessionStorage.getItem("pgex-intro-gold-v2-seen") !== "1"; } catch { return false; }
 });
 useEffect(() => {
   document.title = `${titles[current]} | PGEX`;
   document.documentElement.lang = ["tech", "projects", "marika"].includes(current) ? "en" : "cs";
   if (current === "home") { try { sessionStorage.setItem("pgex-intro-gold-v2-seen", "1"); } catch { /* Storage is optional. */ } }
 }, [current]);
 return <div className={`portal ${current === "home" ? "portal-home" : ""} ${intro ? "portal-intro" : ""}`}>
   <a className="skip-link" href="#content">Přejít na obsah</a>
   <header className="portal-header">
     <a className="portal-brand" href="/" aria-label="PGEX — úvodní rozcestník"><img src="/infinity-logo.png" alt=""/><span><strong>PGEX</strong><small>PROGRAM ENVUS XENOS</small></span></a>
     {area !== "shared" && <span className="area-label">{area === "auto" ? "AUTOSERVIS" : "VÝVOJ A TECHNOLOGIE"}</span>}
     <nav aria-label="Hlavní navigace">{links[area].map(([label, href]) => <a key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</a>)}</nav>
   </header>
   <main id="content" className={current === "home" ? "gateway-main" : "portal-content"}>
     {current === "home" && <>
       <div className="gateway-heading"><p className="portal-eyebrow">PROGRAM ENVUS XENOS</p><h1>Vyberte si svou cestu.</h1></div>
       <div className="gateway-grid">
         <a className="gateway-card" href="/autoservis"><div className="gateway-art garage-art"><img src="/workshop/workshop-hero.jpg" alt="Ilustrace auta s otevřenou kapotou v dílně" width="1536" height="1024"/><span className="image-note">AI ilustrace</span></div><div className="gateway-copy"><h2>Autoservis</h2><p>Diagnostika, údržba a opravy vozidel.</p><span className="gateway-button">Přejít na autoservis <span aria-hidden="true">→</span></span></div></a>
         <a className="gateway-card" href="/technologie"><div className="gateway-art development-art"><img src="/technology/development-workspace.jpg" alt="Ilustrace vývojářského pracoviště s kódem a vizualizací AI na monitorech" width="1536" height="1024"/><span className="image-note">AI ilustrace</span></div><div className="gateway-copy"><h2>Vývoj a technologie</h2><p>AI, software a vlastní projekty.</p><span className="gateway-button outline">Prozkoumat projekty <span aria-hidden="true">→</span></span></div></a>
       </div>
     </>}
     {current === "auto" && <Workshop/>}
     {current === "tech" && <TechnologyPage/>}
     {current === "projects" && <ProjectsPage/>}
     {current === "marika" && <MarikaPage/>}
     {current === "about" && <section className="portal-document"><p className="portal-eyebrow">PROGRAM ENVUS XENOS</p><h1>Jedna značka.<br/>Dva směry.</h1><p className="portal-lead">PGEX propojuje zájem o auta a technologie. Každému směru dáváme vlastní prostor, abyste snadno našli to, co vás zajímá.</p><div className="about-directions"><article><h2>Autoservis</h2><p>Služby, údržba a opravy vozidel na jednom místě.</p><a href="/autoservis">Přejít na autoservis →</a></article><article><h2>Vývoj a technologie</h2><p>AI, software a vlastní projekty. Prostor pro vývoj, experimenty i nové nápady.</p><a href="/technologie">Prozkoumat technologie →</a></article></div><section className="social-section"><h2>Sledujte PGEX</h2><p>Novinky a prostor pro společnou diskuzi.</p>{socials.map(s => <a className="social-link" key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"><strong>{s.name} ↗</strong><span>{s.detail}</span></a>)}</section></section>}
     {["contact", "booking"].includes(current) && <Contact area={area} booking={current === "booking"}/>}
   </main>
   <footer className="portal-footer">{area === "auto" && <a href="/autoservis#reklamace">Obchodní podmínky a reklamace</a>}<span>© {new Date().getFullYear()} PGEX · Program Envus Xenos</span>{current !== "home" && <a href="/">Zpět na rozcestník ↗</a>}</footer>
 </div>;
}

function Contact({ area, booking }) {
 const selectedService = booking ? new URLSearchParams(window.location.search).get("sluzba")?.slice(0, 100) : "";
 const subject = selectedService ? `Poptávka autoservisu: ${selectedService}` : booking || area === "auto" ? "Poptávka autoservisu" : area === "tech" ? "Vývoj a technologie" : "Kontakt PGEX";
 return <section className="portal-document"><p className="portal-eyebrow">{area === "auto" ? "PGEX AUTOSERVIS" : area === "tech" ? "PGEX TECHNOLOGIE" : "PGEX"}</p><h1>{booking ? "Poptat servis." : "Pojďme se spojit."}</h1><p className="portal-lead">{booking ? "Napište nám značku a model vozidla, co potřebujete vyřešit a jaký termín vám vyhovuje. Dostupnost a cenu si společně potvrdíme." : "Máte dotaz nebo nápad na spolupráci? Napište nám a uveďte, zda se zpráva týká autoservisu, nebo technologií."}</p>{selectedService && <p className="portal-lead">Vybraná služba: <strong>{selectedService}</strong></p>}<div className="contact-actions"><a className="gateway-button" href={`mailto:programenvus@gmail.com?subject=${encodeURIComponent(subject)}`}>Napsat e-mail →</a><a className="gateway-button outline" href="tel:+420731990599">Zavolat: +420 731 990 599</a></div><p className="contact-note">programenvus@gmail.com · Tlačítko otevře váš e-mailový program.</p>{area === "auto" && <><WorkshopLocation/><WorkshopDocuments/></>}{area === "shared" && <div className="about-directions"><a href="/kontakt?oblast=autoservis">Kontakt pro autoservis →</a><a href="/kontakt?oblast=technologie">Kontakt pro technologie →</a></div>}</section>;
}
