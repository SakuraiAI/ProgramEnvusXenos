import "./workshop.css";
import "./tuning.css";
import prices from "./tuning-prices.json";

const inquiryHref = `/poptavka?sluzba=${encodeURIComponent("Tuning a individuální úpravy")}`;
const formatPrice = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 2 });
const steps = [
  ["Představa a auto", "Napište, jaké auto máte a co na něm chcete změnit. Pomůže také motorizace, rok výroby a představa o rozpočtu."],
  ["Možnosti provedení", "Probereme zadání a podle konkrétního vozidla domluvíme, co lze provést a co bude potřeba nejprve ověřit."],
  ["Cena a termín", "Před zahájením prací si odsouhlasíme rozsah úpravy, díly, cenu a termín. Poptávka sama o sobě termín nerezervuje."],
  ["Dohodnutá úprava", "Práce probíhají podle domluveného rozsahu. Případné další práce a změny ceny s vámi nejprve probereme."],
];
const questions = [
  ["Co mám napsat do poptávky?", "Uveďte značku, model, rok výroby a motorizaci. Popište požadovanou změnu a výsledek, kterého chcete dosáhnout. Pokud už máte vybrané díly, přidejte jejich název nebo označení."],
  ["Můžu se ozvat, i když ještě nemám vybrané díly?", "Ano. Začněte popisem svého záměru. Konkrétní díly a další postup probereme podle vašeho auta a požadovaného rozsahu úpravy."],
  ["Můžu přivézt vlastní díly?", "Domluvte se s námi předem a pošlete označení dílů. Možnost jejich použití a montáže potvrdíme až podle konkrétního vozidla a domluvené práce."],
  ["Proč je u ceny uvedeno „na dotaz“?", "Rozsah práce se liší podle vozu, zvolených dílů a požadované úpravy. Cenu práce, materiál a další potřebné kroky proto domluvíme pro konkrétní zakázku před jejím zahájením."],
];

export default function Tuning() {
  return <div className="tuning-page">
    <a className="tuning-back" href="/autoservis">← Zpět na autoservis</a>
    <section className="workshop-hero tuning-hero" aria-labelledby="tuning-title">
      <div>
        <p className="portal-eyebrow">PGEX AUTOSERVIS / HOROMĚŘICE</p>
        <h1 id="tuning-title">Tuning.<br/><span>Úpravy s jasným plánem.</span></h1>
        <p className="workshop-lead">Vaše představa. Konkrétní auto. Individuální řešení.</p>
        <p className="workshop-intro">Chcete svému vozu dát vlastní podobu nebo změnit některou z jeho vlastností? Popište nám svůj záměr. Společně probereme možnosti provedení, potřebné díly a rozsah práce.</p>
        <div className="contact-actions">
          <a className="gateway-button" href={inquiryHref}>Poptat tuning <span aria-hidden="true">→</span></a>
          <a className="gateway-button outline" href="#cenik">Ceník tuningu ↓</a>
        </div>
      </div>
      <figure className="workshop-photo tuning-hero-photo"><img src="/workshop/tuning-coupe.webp" width="1536" height="1024" alt="Ilustrace upraveného černého sportovního kupé s bronzovými koly v tuningové dílně" fetchPriority="high"/></figure>
    </section>
    <nav className="tuning-section-nav" aria-label="Obsah stránky tuningu">
      <a href="#upravy">Individuální úpravy</a><a href="#cenik">Ceník</a><a href="#postup">Postup domluvy</a><a href="#dotazy">Časté dotazy</a>
    </nav>
    <section id="upravy" className="workshop-section tuning-overview" aria-labelledby="tuning-overview-title">
      <p className="portal-eyebrow">OD NÁPADU K DOMLUVENÉ ÚPRAVĚ</p>
      <h2 id="tuning-overview-title">Začínáme tím, co od auta očekáváte.</h2>
      <p className="tuning-lead">Každá úprava má mít konkrétní smysl pro vaše auto i způsob, jakým ho používáte. Proto nejprve probíráme požadovaný výsledek a teprve potom jednotlivé práce a díly.</p>
      <div className="tuning-overview-grid">
        <article><span className="workshop-number">01 / ZÁMĚR</span><h3>Co chcete změnit</h3><p>Popište svoji představu a důvod úpravy. Nemusíte mít hotový seznam dílů; důležité je vědět, jaký výsledek od úpravy očekáváte.</p></article>
        <article><span className="workshop-number">02 / VOZIDLO</span><h3>Co dává smysl pro váš vůz</h3><p>Možnosti řešení závisí na modelu, motorizaci, stavu vozidla a již provedených úpravách. Tyto souvislosti projdeme při domluvě zakázky.</p></article>
        <article><span className="workshop-number">03 / ROZSAH</span><h3>Na čem se předem shodneme</h3><p>Vyjasníme rozsah práce, potřebné díly i rozpočet. Konkrétní provedení a cenu potvrdíme před zahájením úpravy.</p></article>
      </div>
    </section>
    <section id="cenik" className="workshop-section tuning-pricing" aria-labelledby="tuning-pricing-title">
      <div>
        <p className="portal-eyebrow">SAMOSTATNÝ CENÍK</p>
        <h2 id="tuning-pricing-title">Ceník tuningu.</h2>
        <p className="tuning-copy">Cenu připravíme podle konkrétního vozu a domluveného rozsahu úpravy.</p>
        <table className="tuning-price-table">
          <caption className="workshop-sr-only">Ceník práce pro tuning a individuální úpravy</caption>
          <thead><tr><th scope="col">Služba</th><th scope="col">Cena práce</th></tr></thead>
          <tbody>{prices.map(item => <tr key={item.name}><th scope="row">{item.name}</th><td>{item.onRequest ? "Cena na dotaz" : `od ${formatPrice.format(item.price)} Kč`}</td></tr>)}</tbody>
        </table>
        <p className="tuning-price-note">Díly a materiál se účtují zvlášť podle dohodnutého výběru. Celkovou cenu i případné změny rozsahu práce si předem odsouhlasíme.</p>
        <a className="gateway-button" href={inquiryHref}>Poptat tuning <span aria-hidden="true">→</span></a>
      </div>
      <aside className="tuning-price-factors" aria-labelledby="tuning-factors-title">
        <h3 id="tuning-factors-title">Co ovlivňuje cenu?</h3>
        <dl><div><dt>Konkrétní vozidlo</dt><dd>Model, motorizace, technický stav a přístup k upravovaným částem.</dd></div><div><dt>Rozsah práce</dt><dd>Domluvené úpravy, jejich návaznost a čas potřebný k provedení.</dd></div><div><dt>Díly a materiál</dt><dd>Zvolená varianta, dostupnost a vhodnost pro vaše vozidlo.</dd></div></dl>
        <a href="/autoservis#cenik">Hledáte ceník běžného servisu? →</a>
      </aside>
    </section>
    <section id="postup" className="workshop-section" aria-labelledby="tuning-process-title">
      <p className="portal-eyebrow">JAK TO PROBÍHÁ</p><h2 id="tuning-process-title">Nejdřív domluva. Potom úprava.</h2>
      <ol className="workshop-steps">{steps.map(([title,text], index) => <li key={title}><span className="workshop-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
    <section id="dotazy" className="workshop-section tuning-faq" aria-labelledby="tuning-faq-title">
      <p className="portal-eyebrow">PŘED PRVNÍ POPTÁVKOU</p><h2 id="tuning-faq-title">Časté dotazy.</h2>
      {questions.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
    </section>
    <section className="workshop-section tuning-contact" aria-labelledby="tuning-contact-title">
      <div><p className="portal-eyebrow">DOMLUVME VAŠI ÚPRAVU</p><h2 id="tuning-contact-title">Co chcete na autě změnit?</h2><p>Pošlete nám popis záměru a údaje o vozidle. Probereme možnosti a další postup.</p><a className="tuning-contact-link" href="/kontakt?oblast=autoservis">Kontakty a cesta do servisu →</a></div>
      <div className="tuning-contact-actions"><a className="gateway-button" href={inquiryHref}>Poptat tuning <span aria-hidden="true">→</span></a><a className="gateway-button outline" href="tel:+420731990599">Zavolat: +420 731 990 599</a></div>
    </section>
  </div>;
}
