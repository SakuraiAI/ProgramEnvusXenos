import React from "react";
import SakuraAssistants from "./SakuraAssistants";
import "./technology.css";

export default function SakuraCorporation() {
  return (
    <div className="tech-page sakura-page">
      <a className="ai-back" href="/projekty">← Zpět na projekty</a>
      <section className="tech-hero">
        <div>
          <p className="portal-eyebrow">SAMOSTATNÝ VÝZKUMNÝ PROJEKT</p>
          <h1>Sakura Corporation</h1>
          <span className="tech-status">Připravujeme</span>
          <p className="tech-lead">Sakura Corporation připravujeme jako samostatnou technologickou a výzkumnou společnost. Jejím záměrem je širší výzkum a vývoj vlastních technologií s možností budoucí spolupráce s automobilovou značkou PGEX.</p>
          <p><span lang="en">Website in Development</span> — samostatný web se připravuje. Tato stránka je stručným představením na webu PGEX.</p>
          <p>Vyobrazení představuje vizuální koncept projektu.</p>
          <div className="contact-actions">
            <a className="gateway-button outline" href="#mira">Mira / KAGEON AI ↓</a>
            <a className="gateway-button outline" href="#asistentky">Luna, Xeno a Marika ↓</a>
          </div>
        </div>
        <img className="tech-hero-image sakura-hero-image" src="/projects/sakura-corporation.png" width="1448" height="1086" alt="Vizuální koncept Sakura Corporation s logem a návrhem sídla" />
      </section>

      <section className="tech-section">
        <p className="portal-eyebrow">ZAMĚŘENÍ PROJEKTU</p>
        <h2>Prostor pro vlastní výzkum.</h2>
        <p className="tech-lead">Zaměření Sakura Corporation přesahuje automobilový vývoj. Současnou experimentální práci KAGEON AI odlišujeme od připravovaných záměrů a dlouhodobých vizí v dalších oborech.</p>
        <div className="tech-process">
          <article>
            <h3>Zázemí pro výzkum</h3>
            <p>Mezi dlouhodobé směry patří Computing &amp; Hardware, Robotics &amp; Automation, Space Research a Advanced Research. Vlastní CPU, GPU, roboty ani kosmické systémy zde nepředstavujeme jako hotové výrobky.</p>
          </article>
          <article>
            <h3>KAGEON AI</h3>
            <p>KAGEON AI je specializovaná výzkumná oblast pod připravovanou Sakura Corporation. KAGEON MODEL LAB již pracuje s experimentálními modely Mira. Podrobnosti, dokumentace a experimenty budou mít místo na samostatné platformě, až bude připravena.</p>
          </article>
          <article>
            <h3>Propojení s PGEX</h3>
            <p>PGEX zůstává samostatným projektem a automobilovou značkou pro servis, tuning a vývoj vlastních automobilových technologií. Se Sakura Corporation počítáme s budoucí technologickou spoluprací; nejde o potvrzenou mateřskou a dceřinou společnost.</p>
          </article>
        </div>
      </section>

      <section id="mira" className="tech-section mira-project">
        <div>
          <p className="portal-eyebrow">SAKURA CORPORATION / KAGEON AI</p>
          <h2>Mira.</h2>
          <span className="tech-status">Experimentální vývoj</span>
          <p className="tech-lead">Vlastní rodina jazykových modelů v rámci výzkumu KAGEON AI.</p>
          <p>KAGEON MODEL LAB pracuje s experimentální modelovou rodinou Mira s označením M-0001 a M-0002. Konkrétní parametry, výsledky a omezení mají vycházet z doložené dokumentace výzkumu.</p>
          <ul className="project-tags" aria-label="Experimentální modely Mira">
            <li>Mira M-0001</li>
            <li>Mira M-0002</li>
          </ul>
          <p>Mira zatím není hotovou konverzační asistentkou a není připravena pro veřejný provoz.</p>
          <div className="contact-actions">
            <a className="gateway-button outline" href="/novinky/pgex-nova-etapa-vlastni-vyvoj-ai">Více o výzkumu KAGEON AI →</a>
          </div>
        </div>
        <figure>
          <img className="mira-portrait" src="/characters/mira.jpg" alt="Mira se stříbrnými vlasy a červenými technologickými prvky" width="1024" height="1280" loading="lazy" />
          <figcaption>Vizuální podoba Miry.</figcaption>
        </figure>
      </section>

      <SakuraAssistants />

      <section className="tech-section">
        <p className="portal-eyebrow">STAV PROJEKTU</p>
        <h2>Další kroky připravujeme.</h2>
        <p>Organizační a technická podoba projektu se teprve utváří. Následující body vymezují směr další práce; konkrétní rozsah bude vycházet z podkladů a výsledků jednotlivých etap.</p>
        <ol className="ai-example-steps">
          <li><strong>Upřesnit záměr.</strong> Vymezit širší výzkumné oblasti a konkrétní podobu budoucí spolupráce s PGEX.</li>
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
