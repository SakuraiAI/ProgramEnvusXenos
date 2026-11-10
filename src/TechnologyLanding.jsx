import React from "react";
import { automotiveResearch, sakuraResearch } from "./automotiveResearch";
import "./technology-landing.css";

function DevelopmentStatus({ stage, children }) {
  return <span className="tech-status development-status" data-stage={stage}>{children}</span>;
}

function ResearchCard({ area, index }) {
  return (
    <article className="automotive-research-card" id={area.id} aria-labelledby={`${area.id}-title`}>
      <div className="automotive-card-meta">
        <span className="technology-direction-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <DevelopmentStatus stage={area.stage}>{area.status}</DevelopmentStatus>
      </div>
      <p className="automotive-card-label">{area.label}</p>
      <h3 id={`${area.id}-title`}>{area.name}</h3>
      <p>{area.description}</p>
      <ul className="project-tags" aria-label={`Témata: ${area.name}`}>
        {area.topics.map(topic => <li key={topic}>{topic}</li>)}
      </ul>
      <p className="automotive-card-scope">{area.scope}</p>
      {area.href && <a className="technology-text-link" href={area.href}>{area.linkLabel} <span aria-hidden="true">→</span></a>}
    </article>
  );
}

export default function TechnologyLanding() {
  return (
    <div className="tech-page technology-landing">
      <section className="technology-landing-hero" aria-labelledby="technology-title">
        <div className="technology-hero-copy">
          <p className="portal-eyebrow">PGEX / VÝVOJ TECHNOLOGIÍ</p>
          <h1 id="technology-title">Vývoj automobilových<br /><span>technologií.</span></h1>
          <p className="tech-lead">Od konstrukčních návrhů k vlastním komponentům a budoucím vozidlům. Naším záměrem je postupný návrh a vývoj vlastních pohonných systémů, elektroniky a automobilových technologií.</p>
          <div className="contact-actions">
            <a className="gateway-button" href="/projekty">Projekty <span aria-hidden="true">→</span></a>
            <a className="gateway-button outline" href="#automotive-vyvoj">Oblasti vývoje <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure className="technology-hero-visual">
          <img src="/vehicles/xenos-x2.jpg" width="1536" height="1024" alt="Černozlatý supersport — vizuální koncept budoucího vozidla PGEX Revenant" fetchpriority="high" />
          <figcaption className="technology-hero-caption">
            <div><strong>PGEX Revenant</strong><small>Vizuální koncept budoucího vozidla</small></div>
            <span>Future Vehicle Projects</span>
          </figcaption>
        </figure>
      </section>

      <nav className="technology-direction-nav" aria-label="Obsah vývoje technologií">
        <a href="#automotive-vyvoj"><span className="technology-direction-number">01</span><div><strong>Automobilový vývoj</strong><span>Konstrukce, výkon a vlastní komponenty</span></div><span aria-hidden="true">↓</span></a>
        <a href="#revenant"><span className="technology-direction-number">02</span><div><strong>Revenant</strong><span>Koncept budoucího automobilu PGEX</span></div><span aria-hidden="true">↓</span></a>
        <a href="#sakura"><span className="technology-direction-number">03</span><div><strong>Beyond Automotive</strong><span>Sakura Corporation a širší výzkum</span></div><span aria-hidden="true">↓</span></a>
      </nav>

      <section id="automotive-vyvoj" className="tech-section" aria-labelledby="automotive-research-title">
        <span id="vyzkum" className="technology-anchor-alias" aria-hidden="true" />
        <span id="software" className="technology-anchor-alias" aria-hidden="true" />
        <div className="technology-block-heading"><div><p className="portal-eyebrow">AUTOMOTIVE RESEARCH & DEVELOPMENT</p><h2 id="automotive-research-title">Vlastní technologie začínají<br />vlastním zadáním.</h2></div></div>
        <p className="tech-lead">Chceme postupně navrhovat a vyvíjet vlastní řešení, nikoli pouze přeznačovat hotové produkty. Každá oblast má proto jasně pojmenovaný záměr i hranice toho, co je dnes připravené.</p>
        <div className="automotive-status-guide" role="group" aria-label="Jak číst stav projektů">
          <p><strong>Výzkumný / vývojový záměr</strong><span>Zaměření připravované technické práce.</span></p>
          <p><strong>Dlouhodobý záměr</strong><span>Budoucí směr vyžadující další návrh a ověření.</span></p>
          <p><strong>Koncept</strong><span>Vize automobilu před technickým rozpracováním.</span></p>
        </div>
        <div className="automotive-research-grid">{automotiveResearch.map((area, index) => <ResearchCard key={area.id} area={area} index={index} />)}</div>
      </section>

      <section id="revenant" className="tech-section technology-revenant-card" aria-labelledby="revenant-title">
        <div className="technology-revenant-copy"><p className="portal-eyebrow">FUTURE VEHICLE PROJECTS</p><DevelopmentStatus stage="concept">Vizuální koncept</DevelopmentStatus><h2 id="revenant-title">Revenant.</h2><p className="tech-lead">Vlastní cesta k supersportu.</p><p>Automobilový koncept PGEX otevírá otázky designu, konstrukce a technického uspořádání. Obrazová podoba ukazuje zamýšlený charakter, nikoli hotový nebo ověřený automobil.</p></div>
        <a className="gateway-button outline" href="/revenant">Prozkoumat Revenant <span aria-hidden="true">→</span></a>
      </section>

      <section id="pristup" className="tech-section" aria-labelledby="development-process-title">
        <div className="technology-block-heading"><div><p className="portal-eyebrow">PŘÍSTUP K VLASTNÍMU VÝVOJI</p><h2 id="development-process-title">Od otázky k návrhu.<br />Od návrhu k ověření.</h2></div></div>
        <div className="tech-process"><article><span className="tech-number">01 / ZADÁNÍ</span><h3>Určit skutečnou potřebu</h3><p>Vymezit použití, požadavky a omezení. Oddělit nápad od vlastností, které bude nutné teprve ověřit.</p></article><article><span className="tech-number">02 / NÁVRH</span><h3>Rozpracovat vlastní řešení</h3><p>Posoudit konstrukční varianty a návaznosti mezi jednotlivými systémy. Zaznamenat důvody zvoleného postupu.</p></article><article><span className="tech-number">03 / OVĚŘENÍ</span><h3>Postupovat podle podkladů</h3><p>Další vývoj opírat o konkrétní zkoušky a jejich výsledky. Schopnosti a parametry zveřejňovat až s odpovídajícími podklady.</p></article></div>
      </section>

      <section id="sakura" className="tech-section technology-beyond" aria-labelledby="beyond-title">
        <span id="postavy" className="technology-anchor-alias" aria-hidden="true" /><span id="pgex-ai" className="technology-anchor-alias" aria-hidden="true" />
        <div className="technology-beyond-intro"><div><p className="portal-eyebrow">BEYOND AUTOMOTIVE</p><h2 id="beyond-title">Sakura Corporation.</h2><DevelopmentStatus stage="preparation">Společnost v přípravě</DevelopmentStatus><p>Sakura Corporation je připravovaná samostatná technologická a výzkumná společnost. S PGEX počítá do budoucna s technologickou spoluprací; širší výzkum má vlastní zaměření i identitu.</p><p>PGEX zůstává samostatným automobilovým projektem a značkou. Toto propojení nevyjadřuje mateřskou a dceřinou společnost.</p></div><figure><img src="/projects/sakura-corporation.png" width="1448" height="1086" alt="Logo Sakura Corporation ve vizuálním konceptu budoucího sídla" loading="lazy" /><figcaption>Vizuální koncept · nejde o fotografii skutečného sídla</figcaption></figure></div>
        <ul className="technology-beyond-areas" aria-label="Výzkumné směry Sakura Corporation">{sakuraResearch.map(area => <li key={area.name}><div><strong>{area.name}</strong><span>{area.status}</span></div><p>{area.description}</p></li>)}</ul>
        <div className="technology-platform-note"><div><h3>Vlastní prostor pro širší výzkum.</h3><p>Podrobnosti AI experimentů, modelová dokumentace a výsledky budou patřit na web Sakura Corporation a specializovanou platformu KAGEON AI. Veřejný odkaz přidáme po jejich skutečném zpřístupnění.</p></div><div className="technology-platform-action"><button className="gateway-button outline" type="button" disabled aria-describedby="sakura-web-status" lang="en">Discover Sakura Corporation</button><span id="sakura-web-status" lang="en">Website in Development</span><a className="technology-text-link" href="/sakura-corporation">Představení na webu PGEX <span aria-hidden="true">→</span></a></div></div>
      </section>

      <section className="tech-collaboration" aria-labelledby="technology-contact-title"><div><p className="portal-eyebrow">KONTAKT A SPOLUPRÁCE</p><h2 id="technology-contact-title">Máte technický dotaz?</h2><p>Napište nám, která automobilová oblast nebo projekt vás zajímá, a přidejte potřebné souvislosti.</p></div><a className="gateway-button" href="/kontakt?oblast=technologie">Kontakt <span aria-hidden="true">→</span></a></section>
    </div>
  );
}
