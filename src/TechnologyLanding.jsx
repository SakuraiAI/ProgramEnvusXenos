import React from "react";
import "./technology-landing.css";

const assistants = [
  { slug: "luna", name: "Luna", role: "Komunikace a spolupráce", image: "/characters/luna.jpg", height: 1535 },
  { slug: "xeno", name: "Xeno", role: "Programování a analýza", image: "/characters/xeno-character.jpg", height: 1535 },
  { slug: "marika", name: "Marika", role: "Plánování, paměť a koordinace", image: "/characters/marika.jpg", height: 1536 },
];

export default function TechnologyLanding() {
  return (
    <div className="tech-page technology-landing">
      <section className="technology-landing-hero">
        <div className="technology-hero-copy">
          <p className="portal-eyebrow">PGEX TECHNOLOGIE</p>
          <h1>Vlastní výzkum.<br /><span>Vlastní cesta.</span></h1>
          <p className="tech-lead">Rozvíjíme vlastní směry v umělé inteligenci, softwaru a automobilových projektech. Od prvních experimentů a návrhů postupujeme k ověřování toho, co může mít praktické využití.</p>
          <div className="contact-actions">
            <a className="gateway-button" href="/projekty">Projekty <span aria-hidden="true">→</span></a>
            <a className="gateway-button outline" href="#pristup">O vývoji <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <a className="technology-hero-visual" href="/sakura-corporation">
          <img src="/projects/sakura-corporation.png" width="1448" height="1086" alt="Vizuální koncept Sakura Corporation s logem a návrhem sídla" />
          <div className="technology-hero-caption">
            <div>
              <strong>Sakura Corporation</strong>
              <small>Připravujeme · Vizuální koncept</small>
            </div>
            <span>Poznat projekt <span aria-hidden="true">→</span></span>
          </div>
        </a>
      </section>

      <nav className="technology-direction-nav" aria-label="Směry vývoje">
        <a href="#vyzkum">
          <span className="technology-direction-number">01</span>
          <div><strong>Výzkum a AI</strong><span>Sakura Corporation a KAGEON AI</span></div>
          <span aria-hidden="true">↓</span>
        </a>
        <a href="#software">
          <span className="technology-direction-number">02</span>
          <div><strong>Vlastní software</strong><span>Návrh nástrojů pro chod servisu</span></div>
          <span aria-hidden="true">↓</span>
        </a>
        <a href="#revenant">
          <span className="technology-direction-number">03</span>
          <div><strong>Automobilový projekt</strong><span>Design a technické rozpracování</span></div>
          <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <section id="vyzkum" className="tech-section technology-research">
        <div className="technology-block-heading">
          <div>
            <p className="portal-eyebrow">SAKURA CORPORATION</p>
            <h2>Výzkum AI a vlastní identita.</h2>
          </div>
          <a className="technology-text-link" href="/sakura-corporation">Poznat Sakura Corporation <span aria-hidden="true">→</span></a>
        </div>
        <div className="technology-research-grid">
          <article className="technology-mira-card">
            <a className="technology-mira-art" href="/sakura-corporation#mira" aria-label="Poznat výzkum Miry">
              <img src="/characters/mira.jpg" width="1024" height="1280" alt="Vizuální podoba Miry se stříbrnými vlasy a červenými technologickými prvky" loading="lazy" />
            </a>
            <div className="technology-mira-copy">
              <p className="portal-eyebrow">KAGEON AI</p>
              <h3>Mira</h3>
              <span className="tech-status">Experimentální vývoj</span>
              <p>Mira je experimentální rodina jazykových modelů KAGEON AI. První prototyp M-0001 sloužil k ověřování základních principů trénování neuronové sítě. M-0002 s přibližně 20,3 milionu parametrů prošel trénovacími experimenty a testováním práce s textem a kontextem.</p>
              <p>Výzkum se zabývá také omezeními při generování souvislého textu a komunikaci. Mira zatím není hotovou konverzační asistentkou a není připravena pro veřejný provoz.</p>
              <ul className="project-tags" aria-label="Experimentální modely Mira">
                <li>Mira M-0001</li>
                <li>Mira M-0002</li>
              </ul>
              <a className="technology-text-link" href="/sakura-corporation#mira">Poznat výzkum Miry <span aria-hidden="true">→</span></a>
            </div>
          </article>
          <article className="technology-assistants-card">
            <p className="portal-eyebrow">KONCEPTY ASISTENTEK</p>
            <h3>Luna, Xeno a Marika.</h3>
            <p>Tři AI asistentky pod Sakura Corporation, každá s vlastním zaměřením. Jejich veřejná aplikace zatím není dostupná.</p>
            <div className="technology-assistant-list">
              {assistants.map(assistant => (
                <a key={assistant.slug} href={`/${assistant.slug}`}>
                  <img src={assistant.image} width="1024" height={assistant.height} alt={`Portrét: ${assistant.name}`} loading="lazy" />
                  <div><strong>{assistant.name}</strong><span>{assistant.role}</span></div>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
            <a className="technology-text-link" href="/sakura-corporation#asistentky">Společné představení <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <section id="software" className="tech-section">
        <div className="technology-block-heading">
          <div>
            <p className="portal-eyebrow">VLASTNÍ SOFTWARE</p>
            <h2>Technologie pro každodenní práci.</h2>
          </div>
        </div>
        <article className="technology-service-card">
          <a className="technology-service-art" href="/servisni-aplikace" aria-label="Poznat servisní aplikaci PGEX">
            <img src="/workshop/workshop-hero.jpg" width="1536" height="1024" alt="Ilustrace autoservisu — zázemí pro návrh servisní aplikace PGEX" loading="lazy" />
          </a>
          <div className="technology-service-copy">
            <span className="tech-status">Připravujeme</span>
            <h3>Servisní aplikace PGEX</h3>
            <p>Navrhujeme pracovní prostor pro přehlednější chod dílny. Důležité údaje mají navazovat od přijetí vozu přes průběh opravy až po dokončení zakázky.</p>
            <ul className="technology-feature-list">
              <li><strong>Zakázky</strong><span>Popis závady, dohodnutá práce a její průběh.</span></li>
              <li><strong>Vozidla</strong><span>Údaje o voze a návaznost na servisní historii.</span></li>
              <li><strong>Organizace</strong><span>Plánování termínů a přehled rozpracovaných úkolů.</span></li>
            </ul>
            <a className="technology-text-link" href="/servisni-aplikace">Poznat servisní aplikaci <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </section>

      <section id="revenant" className="tech-section technology-revenant-card">
        <div className="technology-revenant-copy">
          <p className="portal-eyebrow">AUTOMOBILOVÝ PROJEKT PGEX</p>
          <span className="tech-status">Koncept</span>
          <h2>Revenant.</h2>
          <p className="tech-lead">Vlastní cesta k supersportu.</p>
          <p>Revenant propojuje vizuální návrh automobilu s otázkami designu, konstrukce a technického uspořádání. Další podoba projektu bude vycházet z rozpracování a ověřování návrhu.</p>
          <div className="contact-actions">
            <a className="gateway-button outline" href="/revenant">Prozkoumat Revenant <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <a className="technology-revenant-art" href="/revenant" aria-label="Prozkoumat projekt Revenant">
          <img src="/vehicles/xenos-x2.jpg" width="1536" height="1024" alt="Černozlatý supersport představující vizuální koncept Revenant" loading="lazy" />
        </a>
      </section>

      <section id="pristup" className="tech-section">
        <div className="technology-block-heading">
          <div>
            <p className="portal-eyebrow">JAK PŘEMÝŠLÍME O VÝVOJI</p>
            <h2>Od zadání k ověřenému výsledku.</h2>
          </div>
        </div>
        <p className="tech-lead">Každý projekt má jiné zaměření. Společný je důraz na jasný účel, postupné kroky a ověřování v praxi.</p>
        <div className="tech-process">
          <article>
            <span className="tech-number">01 / ZÁMĚR</span>
            <h3>Ujasnit, co řešíme</h3>
            <p>Začínáme konkrétní potřebou. Určíme, komu má řešení sloužit a jak poznáme, že je užitečné.</p>
          </article>
          <article>
            <span className="tech-number">02 / NÁVRH</span>
            <h3>Rozdělit práci na kroky</h3>
            <p>Od celkové myšlenky přecházíme k menším částem, které lze navrhnout, vyzkoušet a postupně propojit.</p>
          </article>
          <article>
            <span className="tech-number">03 / OVĚŘENÍ</span>
            <h3>Testovat a zpřesňovat</h3>
            <p>Výsledky porovnáváme se zadáním. Zkušenosti z používání pomáhají určit, co upravit a co má smysl rozvíjet dál.</p>
          </article>
        </div>
      </section>

      <aside id="pgex-ai" className="technology-archive-note">
        <strong>Původní PGEX AI</strong>
        <p>Veřejný provoz původní aplikace byl ukončen. Luna, Xeno a Marika nyní patří pod Sakura Corporation.</p>
        <a className="technology-text-link" href="/sakura-corporation#asistentky">Aktuální představení asistentek <span aria-hidden="true">→</span></a>
      </aside>

      <section className="tech-collaboration">
        <div>
          <p className="portal-eyebrow">KONTAKT A SPOLUPRÁCE</p>
          <h2>Máte dotaz?</h2>
          <p>Zajímají vás naše technologické projekty nebo možnosti spolupráce? Napište nám, které téma vás oslovuje.</p>
        </div>
        <div className="contact-actions">
          <a className="gateway-button" href="/kontakt?oblast=technologie">Ozvat se <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </div>
  );
}
