import React from "react";
import SakuraAssistants from "./SakuraAssistants";
import "./technology.css";

export default function SakuraCorporation() {
  return (
    <div className="tech-page sakura-page">
      <a className="ai-back" href="/projekty">← Zpět na projekty</a>
      <section className="tech-hero">
        <div>
          <p className="portal-eyebrow">PGEX / VÝZKUM A TECHNOLOGIE</p>
          <h1>Sakura Corporation</h1>
          <span className="tech-status">Připravujeme</span>
          <p className="tech-lead">Sakura Corporation připravujeme jako technologickou a výzkumnou značku propojenou s PGEX. Jejím zaměřením má být dlouhodobější vývoj vlastních technologií, jejich dokumentace a ověřování v praxi.</p>
          <p>Vyobrazení představuje vizuální koncept projektu.</p>
          <div className="contact-actions">
            <a className="gateway-button outline" href="#asistentky">Luna, Xeno a Marika ↓</a>
          </div>
        </div>
        <img className="tech-hero-image sakura-hero-image" src="/projects/sakura-corporation.png" width="1448" height="1086" alt="Vizuální koncept Sakura Corporation s logem a návrhem sídla" />
      </section>

      <section className="tech-section">
        <p className="portal-eyebrow">ZAMĚŘENÍ PROJEKTU</p>
        <h2>Prostor pro vlastní výzkum.</h2>
        <p className="tech-lead">Projekt navazuje na zkušenosti PGEX s mechanikou, softwarem a umělou inteligencí. Chceme vytvořit prostředí, ve kterém se tyto zkušenosti mohou doplňovat a postupně přecházet do konkrétních, ověřitelných návrhů.</p>
        <div className="tech-process">
          <article>
            <h3>Zázemí pro výzkum</h3>
            <p>Sakura Corporation má soustředit specializovanější technologickou práci a dát jí vlastní směr. Důležitou součástí záměru je zaznamenávat experimenty, jejich výsledky i známá omezení, aby bylo možné na předchozí práci navazovat a porovnávat další postupy.</p>
          </article>
          <article>
            <h3>KAGEON AI</h3>
            <p>Jednou z oblastí je vlastní výzkum umělé inteligence KAGEON AI a experimentální rodina modelů Mira. Tyto modely slouží k získávání zkušeností s trénováním a vyhodnocováním; jejich další rozvoj vyžaduje průběžné ověřování schopností i spolehlivosti.</p>
          </article>
          <article>
            <h3>Propojení s PGEX</h3>
            <p>PGEX se nadále věnuje autoservisu, automobilovým technologiím a vlastním projektům. Sakura Corporation má nabídnout prostor pro soustředěnější výzkum při zachování této návaznosti. Praktické zkušenosti a otázky z jednotlivých oborů mohou pomáhat určovat další témata.</p>
          </article>
        </div>
      </section>

      <SakuraAssistants />

      <section className="tech-section">
        <p className="portal-eyebrow">STAV PROJEKTU</p>
        <h2>Další kroky připravujeme.</h2>
        <p>Organizační a technická podoba projektu se teprve utváří. Následující body vymezují směr další práce; konkrétní rozsah bude vycházet z podkladů a výsledků jednotlivých etap.</p>
        <ol className="ai-example-steps">
          <li><strong>Upřesnit záměr.</strong> Vymezit zaměření Sakura Corporation a způsob jejího propojení s jednotlivými projekty PGEX.</li>
          <li><strong>Připravovat dokumentaci.</strong> Srozumitelně zachycovat postupy, podmínky experimentů, dosažené výsledky a otevřené otázky.</li>
          <li><strong>Ověřovat další návrhy.</strong> Posuzovat technickou připravenost, bezpečnost a praktickou využitelnost před případným veřejným zpřístupněním.</li>
        </ol>
        <a className="gateway-button outline" href="/novinky/pgex-nova-etapa-vlastni-vyvoj-ai">Souvislosti dalšího vývoje →</a>
      </section>

      <section className="tech-collaboration">
        <div>
          <p className="portal-eyebrow">KONTAKT A SPOLUPRÁCE</p>
          <h2>Zajímá vás projekt?</h2>
          <p>Napište nám, které téma vás oslovuje nebo v jaké oblasti vidíte možnost spolupráce. Konkrétní podněty pomohou vést další rozhovor.</p>
        </div>
        <a className="gateway-button" href="/kontakt?oblast=technologie">Ozvat se →</a>
      </section>
    </div>
  );
}
