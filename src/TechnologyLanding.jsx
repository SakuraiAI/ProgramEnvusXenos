import { automotiveResearch } from "./automotiveResearch";
import "./technology-landing.css";

export function DevelopmentStatus({ stage, children }) {
  return <span className="tech-status development-status" data-stage={stage}>{children}</span>;
}

function ResearchCard({ area, index }) {
  const vehicle = area.id === "future-vehicles";
  const mechanicalSystem = ["engine-development", "chassis-development", "transmission-development"].includes(area.id);
  return <article className={`automotive-research-card${vehicle ? " technology-vehicle-card" : ""}${mechanicalSystem ? " technology-system-card" : ""}`} id={area.id} aria-labelledby={`${area.id}-title`}>
    {vehicle && <span id="revenant" className="technology-anchor-alias" aria-hidden="true" />}
    <a className="technology-area-link" href={area.href} aria-labelledby={`${area.id}-title`}>
      <div className="technology-card-image"><img src={area.image} alt={area.imageAlt} width={area.width} height={area.height} loading="lazy" decoding="async" /><span className="technology-image-label">{vehicle ? "VIZUÁLNÍ KONCEPT" : "KONCEPČNÍ ILUSTRACE"}</span></div>
      <div className="technology-card-content">
        <div className="automotive-card-meta"><span className="technology-direction-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><DevelopmentStatus stage={area.stage}>{area.status}</DevelopmentStatus></div>
        <p className="automotive-card-label">{vehicle ? "BUDOUCÍ VOZIDLA PGEX" : area.name}</p><h3 id={`${area.id}-title`}>{vehicle ? "Revenant." : area.label}</h3><p>{area.description}</p>
        <ul className="project-tags" aria-label={`Zaměření: ${area.name}`}>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
        <span className="technology-card-cta">{area.linkLabel}<span aria-hidden="true">↗</span></span>
      </div>
    </a>
  </article>;
}

export default function TechnologyLanding() {
  return <div className="tech-page technology-landing">
    <section className="technology-landing-hero" aria-labelledby="technology-title">
      <div className="technology-hero-copy"><p className="portal-eyebrow">PGEX / AUTOMOBILOVÝ VÝZKUM A VÝVOJ</p><h1 id="technology-title">Vlastní cesta<br />k automobilovým<br /><span>technologiím.</span></h1><p className="tech-lead">Motor, podvozek, převodovka i vlastní elektronika. Zkoumáme jejich souhru a směry, ze kterých mohou vzniknout konkrétní automobilové projekty PGEX.</p><div className="contact-actions"><a className="gateway-button" href="#automotive-vyvoj">Prozkoumat vývoj <span aria-hidden="true">↓</span></a><a className="technology-text-link" href="/projekty">Projekty PGEX <span aria-hidden="true">↗</span></a></div><p className="technology-hero-note"><span aria-hidden="true" />Výzkumné záměry a automobilové koncepty</p></div>
      <figure className="technology-hero-visual"><img src="/vehicles/xenos-x2.jpg" width="1536" height="1024" alt="Černozlatý supersport — vizuální koncept budoucího vozidla PGEX Revenant" fetchpriority="high" decoding="async" /><figcaption className="technology-hero-caption"><div><span>FUTURE VEHICLE CONCEPT</span><strong>PGEX Revenant</strong></div><a href="/revenant">Poznat koncept <span aria-hidden="true">↗</span></a></figcaption></figure>
    </section>
    <nav className="technology-direction-nav" aria-label="Obsah vývoje technologií">
      <a href="#automotive-vyvoj"><span className="technology-direction-number">01</span><div><strong>Oblasti vývoje</strong><span>Od konstrukce po elektroniku</span></div><span aria-hidden="true">↓</span></a>
      <a href="#revenant"><span className="technology-direction-number">02</span><div><strong>Revenant</strong><span>Vize vlastního automobilu</span></div><span aria-hidden="true">↓</span></a>
      <a href="#pristup"><span className="technology-direction-number">03</span><div><strong>Jak postupujeme</strong><span>Výzkum, zadání a ověřování</span></div><span aria-hidden="true">↓</span></a>
    </nav>
    <section id="automotive-vyvoj" className="tech-section" aria-labelledby="automotive-research-title">
      <span id="vyzkum" className="technology-anchor-alias" aria-hidden="true" /><span id="software" className="technology-anchor-alias" aria-hidden="true" />
      <div className="technology-block-heading"><div><p className="portal-eyebrow">ZAMĚŘENÍ PGEX</p><h2 id="automotive-research-title">Od motoru po podvozek.<br /><span>Jeden automobilový celek.</span></h2></div><p>Každá oblast má vlastní otázky a technické souvislosti. Otevřete si detail a poznejte její zaměření, možné výstupy i současný stav.</p></div>
      <div className="automotive-research-grid">{automotiveResearch.map((area, index) => <ResearchCard key={area.id} area={area} index={index} />)}</div>
      <p className="technology-research-note"><strong>Výzkum dnes. Konkrétní projekty postupně.</strong> Oblasti představují naše výzkumné a vývojové záměry. Návrhy s vlastním zadáním a konkrétními podklady budou mít místo v <a href="/projekty">Projektech</a>. Parametry a výsledky zveřejníme podle skutečného stavu.</p>
    </section>
    <section id="pristup" className="tech-section" aria-labelledby="development-process-title">
      <div className="technology-block-heading"><div><p className="portal-eyebrow">PŘÍSTUP K VÝVOJI</p><h2 id="development-process-title">Od otázky<br /><span>k ověřenému podkladu.</span></h2></div><p>Konstrukce, výkon i elektronika se navzájem ovlivňují. Další krok proto musí mít jasný účel a srozumitelný způsob ověření.</p></div>
      <ol className="technology-process"><li><span className="tech-number">01 / VÝZKUM</span><h3>Najít správnou otázku</h3><p>Vymezit problém, souvislosti a dostupné podklady. Pojmenovat, co potřebujeme zjistit.</p></li><li><span className="tech-number">02 / NÁVRH</span><h3>Dát řešení konkrétní podobu</h3><p>Připravit zadání, porovnat varianty a zaznamenat konstrukční rozhodnutí.</p></li><li><span className="tech-number">03 / OVĚŘOVÁNÍ</span><h3>Opřít další krok o důkazy</h3><p>Podle povahy návrhu připravit výpočet, simulaci nebo zkoušku a popsat její omezení.</p></li></ol>
    </section>
    <aside id="sakura" className="technology-research-partner" aria-labelledby="technology-partner-title"><span id="postavy" className="technology-anchor-alias" aria-hidden="true" /><span id="pgex-ai" className="technology-anchor-alias" aria-hidden="true" /><div><p className="portal-eyebrow">SAMOSTATNÝ VÝZKUM / BUDOUCÍ SPOLUPRÁCE</p><h2 id="technology-partner-title">Sakura Corporation</h2><p>Širší výzkum AI, výpočetní techniky a dalších oborů má vlastní prostor. PGEX zůstává nezávislým automobilovým projektem; propojení představuje možnost budoucí technologické spolupráce.</p></div><a className="technology-text-link" href="/sakura-corporation">O výzkumném projektu <span aria-hidden="true">↗</span></a></aside>
    <section className="tech-collaboration" aria-labelledby="technology-contact-title"><div><p className="portal-eyebrow">PGEX / SPOLUPRÁCE</p><h2 id="technology-contact-title">Máte technické téma?</h2><p>Napište, která automobilová oblast vás zajímá a co byste chtěli společně prozkoumat.</p></div><a className="gateway-button outline" href="/kontakt?oblast=technologie">Kontakt <span aria-hidden="true">→</span></a></section>
  </div>;
}
