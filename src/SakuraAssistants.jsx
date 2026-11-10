import React from "react";
import "./technology.css";

const aiProfiles = {
  luna: {
    name: "Luna",
    genitive: "Luny",
    accusative: "Lunu",
    image: "/characters/luna.jpg",
    imageHeight: 1535,
    role: "Komunikace a spolupráce",
    status: "Koncept",
    lead: "Srozumitelný dialog mezi vámi a světem technologií.",
    intro: "Luna je koncept komunikační asistentky pod Sakura Corporation. Jejím zaměřením je pomoci převést otázku, nápad nebo složitější zadání do podoby, se kterou se dá dál pracovat. Její návrh propojuje konverzaci s texty, podporovanými přílohami a tématy jednotlivých projektů.",
    heading: "Od první otázky ke konkrétním krokům",
    description: "Dobrá spolupráce začíná porozuměním zadání. U Luny klademe důraz na srozumitelné vysvětlení, možnost navázat doplňující otázkou a postupné zpřesňování výsledku. Důležitý je kontext: pro koho text vzniká, co už víte a jaký výstup potřebujete.",
    pillars: [
      ["Texty a vysvětlování", "Příprava návrhů textů, jejich přeformulování a vysvětlování pojmů. Zadání může určit tón, rozsah i cílového čtenáře."],
      ["Plánování práce", "Rozdělení většího úkolu na menší části, ujasnění priorit a příprava postupu, ke kterému se můžete v rozhovoru vracet."],
      ["Souvislosti projektu", "Koncept konverzací uspořádaných podle projektů a práce s podporovanými přílohami má pomoci držet jednotlivá témata pohromadě."],
    ],
    exampleTitle: "Modelový postup: připravit zadání webu",
    steps: [
      "Popíšete, komu má web sloužit a co na něm návštěvník potřebuje najít.",
      "S Lunou projdete strukturu stránek, texty a nejasné části zadání.",
      "Výsledný návrh zkontrolujete a upravíte podle skutečných potřeb projektu.",
    ],
    summary: "Luna představuje komunikační směr asistentek Sakura Corporation. Jejím zaměřením je srozumitelný dialog: pomoci ujasnit zadání, vysvětlit složité téma a převést nápad do konkrétního postupu.",
    detail: "Koncept spojuje rozhovor nad texty, plánování práce a konzultaci přiloženého kódu. Konverzace mají být organizované podle projektů, aby související témata zůstala pohromadě.",
    focusTitle: "Na co se zaměřuje",
    focus: [
      "Psaní, úpravy a vysvětlování textů.",
      "Plánování úkolů a rozdělení problému na kroky.",
      "Rozhovor nad podporovanými přílohami.",
    ],
  },
  xeno: {
    name: "Xeno",
    genitive: "Xeny",
    accusative: "Xenu",
    image: "/characters/xeno-character.jpg",
    imageHeight: 1535,
    role: "Programování a technická analýza",
    status: "Koncept",
    lead: "Rozebrat problém. Porovnat možnosti. Ověřit řešení.",
    intro: "Xeno je koncept technické a analytické asistentky pod Sakura Corporation. Jejím zaměřením je práce s problémy, které vyžadují logický postup, porozumění souvislostem a ověřování předpokladů. Tento směr rozvíjíme zejména v souvislosti s programováním a návrhem technických řešení.",
    heading: "Technický problém potřebuje jasný postup",
    description: "Základem vize Xeny je oddělit známá fakta od předpokladů. Nejprve porozumět zadání a jeho omezením, potom navrhnout možnosti a určit, jak poznat správný výsledek. Součástí takového postupu je i vysvětlení, proč určitá varianta dává smysl a co ještě zbývá ověřit.",
    pillars: [
      ["Analýza problému", "Rozdělení složitého zadání na menší části, hledání závislostí a formulování možných příčin chyby."],
      ["Kód a návrh řešení", "Směr zaměřený na porozumění kódu, porovnávání návrhů a vysvětlování technických souvislostí."],
      ["Kontrola výsledku", "Návrh ověřovacích kroků a testovacích případů, které pomohou zjistit, zda řešení splňuje původní zadání."],
    ],
    exampleTitle: "Modelový postup: hledání chyby v aplikaci",
    steps: [
      "Popsat očekávané chování, skutečný výsledek a podmínky, za kterých chyba nastává.",
      "Projít možné příčiny a navrhnout změnu s vysvětlením jejího dopadu.",
      "Ověřit opravu na konkrétních případech a zaznamenat zbývající omezení.",
    ],
    summary: "Xeno představuje technický a analytický směr asistentek Sakura Corporation. Jejím zaměřením je rozebrat problém, porovnat možné postupy a hledat řešení, které lze následně ověřit.",
    detail: "Vize Xeny zahrnuje pomoc při práci s kódem a technickými návrhy: od porozumění zadání přes hledání souvislostí až po návrh testů a kontrolu výsledku.",
    focusTitle: "Směr rozvoje",
    focus: [
      "Analýza problémů a jejich příčin.",
      "Podpora programování a návrhu řešení.",
      "Porovnání variant a ověřování předpokladů.",
    ],
  },
  marika: {
    name: "Marika",
    genitive: "Mariky",
    accusative: "Mariku",
    image: "/characters/marika.jpg",
    imageHeight: 1536,
    role: "Plánování, paměť a koordinace",
    status: "Koncept",
    lead: "Jednotlivé kroky propojené v promyšlený celek.",
    intro: "Marika je koncept asistentky pod Sakura Corporation zaměřené na propojení plánování, paměti a koordinace nástrojů. Její návrh zkoumá, jak navazovat jednotlivé úlohy tak, aby systém sledoval širší zadání, uchovával důležité souvislosti a dokázal vyhodnotit výsledek jednotlivých kroků.",
    heading: "Udržet směr i u složitějšího zadání",
    description: "U delší práce nestačí pouze odpovědět na jednu otázku. Je potřeba vědět, co je cílem, které kroky už proběhly a co ještě chybí. Marika představuje vizi takového propojení: plán určuje postup, paměť zachovává potřebný kontext a nástroje umožňují konkrétní akce.",
    pillars: [
      ["Plánování", "Rozdělení cíle na navazující kroky, sledování jejich závislostí a úprava postupu podle průběžných výsledků."],
      ["Paměť a kontext", "Koncept uchování důležitých rozhodnutí a souvislostí, aby další práce mohla navázat na to, co už bylo vyřešeno."],
      ["Koordinace nástrojů", "Směr propojení jednotlivých nástrojů s plánem práce, přehledem prováděných akcí a kontrolou jejich výsledků."],
    ],
    exampleTitle: "Modelový postup: úkol s více navazujícími částmi",
    steps: [
      "Ujasnit cíl, dostupné podklady a omezení. Sestavit pořadí jednotlivých kroků.",
      "Ke každému kroku přiřadit potřebný kontext a vhodný nástroj. Zaznamenávat průběžné výsledky.",
      "Porovnat výsledek s původním cílem a určit, zda je úkol dokončený, nebo potřebuje další práci.",
    ],
    summary: "Marika představuje koncept asistentky Sakura Corporation pro plánování, paměť a koordinaci. Jejím cílem je navazovat jednotlivé kroky práce tak, aby dávaly smysl v rámci širšího zadání.",
    detail: "V tomto konceptu má plán určit postup, paměť uchovat důležité souvislosti a nástroje umožnit konkrétní akce. Důraz klademe na přehled o tom, co systém dělá a jaký výsledek přináší.",
    focusTitle: "Směr rozvoje",
    focus: [
      "Plánování úloh s více navazujícími kroky.",
      "Práce s kontextem a dlouhodobými souvislostmi.",
      "Koordinace nástrojů a kontrola výsledků.",
    ],
  },
};

export default function SakuraAssistants() {
  return (
    <section id="asistentky" className="tech-section sakura-assistants">
      <p className="portal-eyebrow">SAKURA CORPORATION / AI ASISTENTKY</p>
      <h2>Luna, Xeno a Marika.</h2>
      <p className="tech-lead">Tři asistentky pod Sakura Corporation: Luna pro komunikaci, Xeno pro kód a analýzu, Marika pro plánování, paměť a koordinaci.</p>
      <p>Představujeme jejich koncepty a zamýšlené role. Veřejná aplikace zatím není dostupná.</p>
      <div className="tech-characters">
        {Object.entries(aiProfiles).map(([slug, info]) => (
          <article key={slug}>
            <details className="tech-character-details">
              <summary>
                <img src={info.image} alt={`Portrét asistentky ${info.genitive}`} width="1024" height={info.imageHeight} loading="lazy" />
                <div className="tech-character-summary">
                  <p className="portal-eyebrow">{info.role.toLocaleUpperCase("cs-CZ")}</p>
                  <h3>{info.name}</h3>
                  <span className="tech-status">{info.status}</span>
                  <p>{info.summary}</p>
                  <span className="tech-character-toggle">
                    <span className="when-closed">Poznat {info.accusative}</span>
                    <span className="when-open">Sbalit podrobnosti</span>
                    <span className="toggle-symbol" aria-hidden="true">+</span>
                  </span>
                </div>
              </summary>
              <div className="tech-character-body">
                <p>{info.detail}</p>
                <h4>{info.focusTitle}</h4>
                <ul>{info.focus.map(item => <li key={item}>{item}</li>)}</ul>
                <p className="tech-role-note">Koncept asistentky pod Sakura Corporation. Veřejná aplikace zatím není dostupná.</p>
                <div className="contact-actions">
                  <a href={`/${slug}`}>Samostatná stránka {info.genitive} →</a>
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AIProfilePage({ profile }) {
  const info = aiProfiles[profile];
  if (!info) return null;

  return (
    <div className="tech-page ai-profile sakura-ai-profile">
      <a className="ai-back" href="/sakura-corporation#asistentky">← Zpět k asistentkám Sakura Corporation</a>
      <section className="tech-hero">
        <div>
          <p className="portal-eyebrow">SAKURA CORPORATION / AI ASISTENTKY</p>
          <h1>{info.name}</h1>
          <span className="tech-status">{info.status}</span>
          <p className="portal-eyebrow">{info.role.toLocaleUpperCase("cs-CZ")}</p>
          <p className="tech-lead">{info.lead}</p>
          <p>{info.intro}</p>
        </div>
        <img className="tech-hero-image tech-marika-image" src={info.image} alt={`Portrét asistentky ${info.genitive}`} width="1024" height={info.imageHeight} />
      </section>
      <section className="tech-section">
        <p className="portal-eyebrow">ZAMĚŘENÍ</p>
        <h2>{info.heading}</h2>
        <p className="tech-lead">{info.description}</p>
        <div className="tech-process">
          {info.pillars.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="tech-section">
        <p className="portal-eyebrow">PŘEDSTAVA V PRAXI</p>
        <h2>{info.exampleTitle}</h2>
        <p>Ukázka popisuje zamýšlené použití asistentky v rámci jejího konceptu.</p>
        <ol className="ai-example-steps">
          {info.steps.map(step => <li key={step}>{step}</li>)}
        </ol>
      </section>
      <section className="tech-section">
        <p className="portal-eyebrow">STAV A DOSTUPNOST</p>
        <h2>Koncept pod Sakura Corporation</h2>
        <p className="tech-lead">{info.name} patří mezi koncepty AI asistentek Sakura Corporation. Veřejná aplikace zatím není dostupná.</p>
        <p>Popis představuje její zaměření a zamýšlené způsoby práce. Konkrétní podoba a schopnosti budou vycházet z dalšího návrhu a ověřování.</p>
        <p className="tech-role-note">Asistentky původně vznikaly v rámci PGEX AI, jehož veřejný provoz byl ukončen.</p>
      </section>
      <nav className="tech-section-nav" aria-label="Další asistentky Sakura Corporation">
        {Object.entries(aiProfiles).filter(([slug]) => slug !== profile).map(([slug, item]) => (
          <a key={slug} href={`/${slug}`}>{item.name} — {item.role} →</a>
        ))}
      </nav>
      <section className="tech-collaboration">
        <div>
          <p className="portal-eyebrow">SAKURA CORPORATION / KONTAKT</p>
          <h2>Zajímají vás naše asistentky?</h2>
          <p>Máte dotaz k jejich zaměření nebo podnět k dalšímu návrhu? Napište nám, které téma vás zajímá.</p>
        </div>
        <div className="contact-actions">
          <a className="gateway-button" href="/kontakt?oblast=technologie">Ozvat se →</a>
        </div>
      </section>
    </div>
  );
}