import "./technology-overview-content.css";

const foundations = [
  {
    title: "Souhra celého vozu",
    text: "Výkon motoru má smysl posuzovat společně s přenosem síly, chlazením, brzdami a chováním podvozku. Například změna provozního zatížení může ovlivnit požadavky na odvod tepla i konstrukční uložení. Chceme proto vycházet z popsaného způsobu použití a sledovat, co úprava jednoho systému znamená pro ostatní. Důležitá je také opakovatelnost chování v různých podmínkách, nejen jedna příznivá situace.",
  },
  {
    title: "Vlastní díly a jasná rozhraní",
    text: "Vlastní komponenta začíná otázkou, jakou funkci má splnit a s čím se musí propojit. Zajímají nás rozměry, upevnění, zatížení, materiál i možnost montáže a údržby. U elektroniky k tomu přibývá napájení, signály a způsob řízení. Takto popsaná rozhraní umožňují porovnávat varianty a postupně vytvářet návrhy, které mají jasné místo v celém automobilu.",
  },
  {
    title: "Rozhodnutí opřená o podklady",
    text: "Každý návrh obsahuje předpoklady, které je potřeba pojmenovat. Výkres, výpočet, simulace a měření poskytují různé druhy podkladů a každý má své meze. Zamýšlený postup má určit, co lze z dostupných informací vyvodit a které otázky zůstávají otevřené. U případného prototypu bude důležité předem stanovit sledované veličiny, podmínky zkoušky a kritéria pro další rozhodnutí.",
  },
];

export default function TechnologyOverviewContent() {
  return <div className="overview-content">
    <section id="technology-system" className="tech-section overview-system" aria-labelledby="technology-system-title">
      <div className="overview-system-copy"><p className="portal-eyebrow">ZAMĚŘENÍ PGEX</p><h2 id="technology-system-title">Automobil jako<br /><span>propojený systém.</span></h2><p>Automobil vzniká souhrou mechaniky, pohonu, podvozku a elektroniky. Jejich návrh ovlivňuje, jak vůz přenáší výkon, reaguje na pokyny řidiče, odvádí teplo a zvládá provozní zatížení. Technologický směr PGEX chceme stavět na porozumění těmto vazbám a na hledání řešení pro konkrétní účel vozidla.</p><p>Zájem o vlastní motor, převodovku nebo komponenty je součástí dlouhodobé ambice rozvíjet automobilové technologie. Jednotlivé oblasti potřebují společné zadání a srozumitelné návaznosti. Od prvních konstrukčních otázek tak může postupně vznikat podklad pro ucelenější návrh, jeho porovnání s jinými možnostmi a rozhodnutí o dalším postupu. Součástí takového uvažování je i přístupnost při údržbě, prostor pro kabeláž a možnost pozdějšího rozšíření bez zbytečného přepracování navazujících částí.</p></div>
      <figure className="overview-system-visual"><img src="/technology/pgex-chassis.webp" alt="Koncepční technická ilustrace podvozku ukazující prostorové vazby rámu, zavěšení a kol" width="1600" height="900" loading="lazy" decoding="async" /><figcaption>Koncepční ilustrace uspořádání automobilových systémů</figcaption></figure>
    </section>

    <section id="technology-foundations" className="tech-section overview-foundations" aria-labelledby="technology-foundations-title">
      <div className="technology-block-heading"><div><p className="portal-eyebrow">TECHNICKÝ PŘÍSTUP</p><h2 id="technology-foundations-title">Na čem<br /><span>chceme stavět.</span></h2></div><p>Směr vývoje má vycházet z funkce, konstrukčních souvislostí a podkladů, které umožní návrh posoudit. Tyto principy propojují naše jednotlivé výzkumné oblasti.</p></div>
      <ol className="overview-foundation-list">{foundations.map((foundation, index) => <li key={foundation.title}><span className="tech-number" aria-hidden="true">0{index + 1}</span><h3>{foundation.title}</h3><p>{foundation.text}</p></li>)}</ol>
    </section>

    <section id="technology-direction" className="tech-section overview-direction" aria-labelledby="technology-direction-title">
      <div><p className="portal-eyebrow">DLOUHODOBÝ SMĚR</p><h2 id="technology-direction-title">Od výzkumu<br /><span>ke konkrétnímu projektu.</span></h2></div>
      <div className="overview-direction-copy"><p>Výzkumná oblast vymezuje téma, otázky a možnosti další práce. Konkrétní projekt pak potřebuje vlastní účel, rozsah, vstupní podklady a plán ověřování. Takto chceme postupně rozvíjet jednotlivé systémy i širší automobilové koncepty PGEX, mezi které patří Revenant.</p><p>Současné zaměření představuje výzkumné a vývojové záměry. Jejich další rozpracování bude záviset na dostupných podkladech a možnostech odborného ověření. Stav jednotlivých oblastí a projektů uvádíme na jejich stránkách; konkrétní technické parametry a výsledky budou následovat podle skutečně doloženého postupu.</p><div className="overview-content-links"><a className="technology-text-link" href="/vyvoj#pristup">Přístup k vývoji <span aria-hidden="true">↗</span></a><a className="technology-text-link" href="/projekty">Konkrétní projekty <span aria-hidden="true">↗</span></a></div></div>
    </section>
  </div>;
}
