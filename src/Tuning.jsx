import "./workshop.css";
import "./tuning.css";
import prices from "./tuning-prices.json";
import rates from "./tuning-rates.json";

const [mechanicalRate, ...specialistRates] = rates;

const inquiryHref = `/poptavka?sluzba=${encodeURIComponent("Tuning a individuální úpravy")}`;
const formatPrice = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 2 });
function priceLabel(item) {
  if (item.priceType === "free") return "Zdarma";
  if (item.priceType === "individual") return "Individuálně";
  const amount = `${formatPrice.format(item.price)} Kč`;
  return item.priceType === "hourly" ? `${amount}/h` : `od ${amount}`;
}
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
  ["Co znamená cena „od“ a individuální kalkulace?", "Cena „od“ platí pro popsaný rozsah na kompatibilním voze při běžném přístupu a funkčních spojích. U složitějších úprav sestavíme individuální nabídku. Díly, materiál, kalibrace a další nezahrnuté práce rozepíšeme zvlášť; konečnou cenu si odsouhlasíme předem."],
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
        <article><span className="workshop-number">01 / VÝKON</span><h3>Motor a pohon</h3><p>Sání, chlazení, výfuk, přeplňování i stavby motorů. Řešíme návaznost mechanických úprav, převodovky, kalibrace a měření podle konkrétního vozu.</p></article>
        <article><span className="workshop-number">02 / JÍZDNÍ VLASTNOSTI</span><h3>Podvozek, brzdy a kola</h3><p>Sportovní pružiny, tlumiče, stavitelné podvozky, brzdové sady a vhodná kola. Při domluvě řešíme rozměry, vůle i potřebné nastavení geometrie.</p></article>
        <article><span className="workshop-number">03 / VLASTNÍ PODOBA</span><h3>Karoserie a interiér</h3><p>Vnější doplňky, bodykity, povrchové úpravy, čalounění a elektronika. U jednotlivých dílů i kompletní stavby domluvíme provedení, kompatibilitu a rozpočet.</p></article>
      </div>
    </section>
    <section id="cenik" className="workshop-section tuning-pricing" aria-labelledby="tuning-pricing-title">
      <div>
        <p className="portal-eyebrow">SAMOSTATNÝ CENÍK</p>
        <h2 id="tuning-pricing-title">Ceník tuningu.</h2>
        <p className="tuning-copy">Rozbalte oblast, která vás zajímá. U každé položky najdete cenu a přesný rozsah služby. Díly a další náklady uvedeme v nabídce zvlášť, pokud už nejsou zahrnuté v položce.</p>
        <div className="tuning-price-groups">
          {prices.map(group => <details key={group.category}>
            <summary><span>{group.category}</span><span className="tuning-category-count" aria-hidden="true">{group.items.length} položek</span></summary>
            <p className="tuning-category-description">{group.description}</p>
            <table className="tuning-price-table">
              <caption className="workshop-sr-only">{group.category} — ceny služeb a rozsah</caption>
              <thead><tr><th scope="col">Služba a rozsah</th><th scope="col">Cena</th></tr></thead>
              <tbody>{group.items.map(item => <tr key={item.id} data-price-id={item.id}>
                <th scope="row">{item.name}<span className="tuning-item-scope">{item.scope}</span></th>
                <td>{priceLabel(item)}</td>
              </tr>)}</tbody>
            </table>
            <p className="tuning-category-note">{group.note}</p>
          </details>)}
        </div>
        <p className="tuning-price-note">Ceny „od“ platí pro popsaný rozsah při běžném přístupu a funkčních spojích. Díly, kapaliny, materiál, licence, externí měření a schvalovací úkony nejsou zahrnuté, pokud položka neuvádí jinak. Pevnou položku a hodinovou sazbu za stejnou práci nesčítáme. Případné vícepráce nejprve odsouhlasíme.</p>
        <a className="tuning-pdf-link" href="/dokumenty/pgex-tuning-cenik.pdf" download>Stáhnout kompletní ceník <span>PDF ↓</span></a>
        <a className="gateway-button" href={inquiryHref}>Poptat tuning <span aria-hidden="true">→</span></a>
      </div>
      <div className="tuning-pricing-sidebar">
        <aside className="tuning-price-factors" aria-labelledby="tuning-factors-title">
          <p className="portal-eyebrow">MECHANICKÁ PRÁCE</p>
          <p className="tuning-hourly-rate">{formatPrice.format(mechanicalRate.price)} <span>Kč/h</span></p>
          <p className="tuning-rate-description">{mechanicalRate.description}</p>
          <dl className="tuning-specialist-rates" aria-label="Odborné hodinové sazby">
            {specialistRates.map(rate => <div key={rate.id} data-rate-id={rate.id}><dt>{rate.name}</dt><dd>{formatPrice.format(rate.price)} Kč/h</dd></div>)}
          </dl>
          <p className="tuning-rate-note">Odbornou práci účtujeme podle předem dohodnutého rozsahu a času. Kompletní stavby mají individuální rozpočet.</p>
          <h3 id="tuning-factors-title">Co ovlivňuje cenu?</h3>
          <dl><div><dt>Konkrétní vozidlo</dt><dd>Model, motorizace, technický stav a přístup k upravovaným částem.</dd></div><div><dt>Rozsah práce</dt><dd>Domluvené úpravy, jejich návaznost a čas potřebný k provedení.</dd></div><div><dt>Díly a materiál</dt><dd>Zvolená varianta, dostupnost a vhodnost pro vaše vozidlo.</dd></div></dl>
          <a href="/autoservis#cenik">Hledáte ceník běžného servisu? →</a>
        </aside>
        <figure className="workshop-photo tuning-detail-photo"><img src="/workshop/tuning-suspension.webp" width="1536" height="1024" alt="Ilustrace nastavení sportovního podvozku v tuningové dílně" loading="lazy" decoding="async"/></figure>
      </div>
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
