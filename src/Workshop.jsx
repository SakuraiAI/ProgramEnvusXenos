import "./workshop.css";

const services = [
  ["01", "Diagnostika", "Svítí kontrolka nebo se auto chová jinak než obvykle? Začneme zjištěním příčiny a domluvíme další postup."],
  ["02", "Brzdy", "Kontrola brzdových destiček, kotoučů a dalších částí brzdové soustavy. Rozsah opravy podle stavu vozidla."],
  ["03", "Olej a filtry", "Pravidelná výměna motorového oleje a filtrů podle potřeb a servisních intervalů vašeho vozu."],
  ["04", "Podvozek", "Kontrola tlumičů, zavěšení kol a vůlí. Pomůžeme najít příčinu klepání nebo neobvyklého chování auta."],
  ["05", "Elektroinstalace", "Hledání elektrických závad, kontrola baterie a dobíjení. Další práce po domluvě podle výsledku kontroly."],
];
const steps = [
  ["Popíšete problém", "Zavolejte nebo napište. Pomůže značka, model a stručný popis toho, co potřebujete vyřešit."],
  ["Domluvíme kontrolu", "Společně vybereme termín a prohlédneme vozidlo."],
  ["Odsouhlasíte cenu", "Vysvětlíme navržené práce a domluvíme cenu i rozsah opravy před jejím zahájením."],
  ["Provedeme opravu", "Po dokončení vám předáme vůz a přehled provedených prací."],
];

export function WorkshopVisual() {
 return <div className="workshop-visual" aria-hidden="true"><span className="workshop-visual-label">PGEX / AUTOSERVIS</span><svg viewBox="0 0 600 270" fill="none"><g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M62 177 80 134l91-18 62-61h147l70 63 71 22 21 37v30h-45m-80 0H205m-80 0H62v-30Z"/><path d="m187 117 56-48h53v48h-109Zm123-48h60l52 48H310V69ZM88 145h61l-13 19H76m410-21h32l11 21h-47M225 137h28m77 0h28"/><circle cx="165" cy="199" r="40"/><circle cx="165" cy="199" r="19"/><circle cx="457" cy="199" r="40"/><circle cx="457" cy="199" r="19"/><path opacity=".4" d="M40 247h520M300 14v22M30 199h18m507 0h18"/></g></svg><div className="workshop-visual-tags"><span>DIAGNOSTIKA</span><span>ÚDRŽBA</span><span>OPRAVY</span></div></div>;
}

export default function Workshop() {
 return <div className="workshop-page">
   <section className="workshop-hero" aria-labelledby="workshop-title">
     <div><p className="portal-eyebrow">PGEX AUTOSERVIS</p><h1 id="workshop-title">Péče o auto.<br/><span>Jasná domluva.</span></h1><p className="workshop-lead">Diagnostika, údržba a opravy vašeho vozu.</p><p className="workshop-intro">Řekněte nám, co vaše auto potřebuje. Domluvíme kontrolu a další postup — cenu i rozsah prací budete znát před opravou.</p><div className="contact-actions"><a className="gateway-button" href="/poptavka">Poptat servis <span aria-hidden="true">→</span></a><a className="gateway-button outline" href="tel:+420731990599">Zavolat</a></div><a className="workshop-text-link" href="#sluzby">Prohlédnout služby ↓</a></div>
     <figure className="workshop-photo workshop-hero-photo"><img src="/workshop/workshop-hero.jpg" width="1536" height="1024" alt="Ilustrace auta s otevřenou kapotou v dílně" fetchPriority="high"/><figcaption>Ilustrační obrázek vytvořený pomocí AI</figcaption></figure>
   </section>
   <section id="sluzby" className="workshop-section" aria-labelledby="services-title"><p className="portal-eyebrow">S ČÍM POMŮŽEME</p><h2 id="services-title">Servis podle potřeb vašeho vozu.</h2><div className="workshop-services">{services.map(([number,title,text]) => <article key={number}><span className="workshop-number">{number}</span><h3>{title}</h3><p>{text}</p><a href={`/poptavka?sluzba=${encodeURIComponent(title)}`}>Poptat službu <span aria-hidden="true">↗</span><span className="workshop-sr-only">: {title}</span></a></article>)}<article className="workshop-service-help"><span className="workshop-number">?</span><h3>Nevíte, čím začít?</h3><p>Nemusíte znát přesný název závady. Popište, co slyšíte, vidíte nebo cítíte při jízdě.</p><a href="tel:+420731990599">Probrat problém po telefonu ↗</a></article></div></section>
   <section id="cenik" className="workshop-section workshop-pricing" aria-labelledby="pricing-title">
     <div><p className="portal-eyebrow">CENA PODLE ROZSAHU PRÁCE</p><h2 id="pricing-title">Ceník servisu.</h2><p className="workshop-price-intro">Konkrétní nabídku připravíme podle vašeho vozu a potřebných prací. Cenu si odsouhlasíme před opravou.</p><dl className="workshop-price-list">{["Diagnostika vozidla", "Servisní práce / hodina", "Výměna oleje a filtrů", "Servis brzd", "Kontrola podvozku"].map(name => <div key={name}><dt>{name}</dt><dd>Cena po domluvě</dd></div>)}</dl><p className="workshop-price-note">Díly a materiál upřesníme v nabídce podle konkrétního vozidla.</p><a className="gateway-button" href="/poptavka">Získat cenovou nabídku →</a></div>
     <figure className="workshop-photo workshop-detail-photo"><img src="/workshop/brake-service.jpg" width="1536" height="1024" alt="Ilustrace kontroly brzdového kotouče a třmenu" loading="lazy"/><figcaption>Ilustrační obrázek vytvořený pomocí AI</figcaption></figure>
   </section>
   <section className="workshop-section" aria-labelledby="process-title"><p className="portal-eyebrow">OD PRVNÍHO KONTAKTU K OPRAVĚ</p><h2 id="process-title">Jak to u nás probíhá.</h2><ol className="workshop-steps">{steps.map(([title,text],i)=><li key={title}><span className="workshop-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
   <section id="servis-kontakt" className="workshop-contact workshop-section" aria-labelledby="contact-title"><div><p className="portal-eyebrow">DOMLUVME SE</p><h2 id="contact-title">Co potřebuje vaše auto?</h2><p>Termín návštěvy si prosím domluvte předem.</p><a className="workshop-phone" href="tel:+420731990599">+420 731 990 599</a><a className="workshop-email" href="mailto:programenvus@gmail.com?subject=Popt%C3%A1vka%20autoservisu">programenvus@gmail.com</a></div><div className="workshop-hours"><h3>Otevírací doba</h3><dl><div><dt>Pondělí–pátek</dt><dd>9:00–18:00</dd></div><div><dt>Sobota</dt><dd>Po domluvě</dd></div></dl><a className="gateway-button" href="/poptavka">Poptat servis →</a></div></section>
   <div className="workshop-mobile-contact"><a href="tel:+420731990599">Zavolat do servisu</a><a href="/poptavka">Poptat servis ↗</a></div>
 </div>;
}
