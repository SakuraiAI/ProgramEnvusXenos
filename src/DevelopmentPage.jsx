import { automotiveResearch } from "./automotiveResearch";
import ResearchCard from "./ResearchCard";
import "./technology-landing.css";
import "./development-page.css";

const developmentGroups = [
  {
    id: "pohonne-systemy",
    number: "01",
    title: "Pohonné systémy",
    subtitle: "Od zdroje výkonu k jeho přenosu.",
    description: "Motor, převodovka a řízení tepelného zatížení. Tři související směry, které zkoumají vznik výkonu, jeho přenos a souhru celého vozidla.",
    areas: ["engine-development", "transmission-development", "performance-development"],
  },
  {
    id: "konstrukce-podvozek",
    number: "02",
    title: "Konstrukce a podvozek",
    subtitle: "Základ vozu a jeho chování na silnici.",
    description: "Zavěšení kol, mechanická architektura a vlastní komponenty. Od požadavků na jednotlivý díl po jeho místo v konstrukci automobilu.",
    areas: ["chassis-development", "automotive-engineering", "custom-components"],
  },
  {
    id: "elektronika-rizeni",
    number: "03",
    title: "Elektronika a řízení",
    subtitle: "Propojit měření, rozhodování a mechaniku.",
    description: "Samostatný směr pro senzory, řídicí jednotky a systémová rozhraní. Elektronika má vycházet z požadované funkce vozidla a navazovat na jeho mechanické celky.",
    areas: ["automotive-electronics"],
  },
];

const areasById = new Map(automotiveResearch.map(area => [area.id, area]));

export default function DevelopmentPage() {
  let cardIndex = 0;

  return <div id="automotive-vyvoj" className="tech-page technology-landing technology-development">
    <span id="vyzkum" className="technology-anchor-alias" aria-hidden="true" />
    <span id="software" className="technology-anchor-alias" aria-hidden="true" />
    <header className="development-intro">
      <div><p className="portal-eyebrow">PGEX / VÝVOJ</p><h1>Vývoj automobilových<br /><span>systémů.</span></h1></div>
      <div className="development-intro-copy"><p>Motor, přenos výkonu, podvozek a elektronika ve třech přehledných celcích. Vyberte si téma a otevřete jeho technické zaměření, výzkumné otázky a možné výstupy.</p><p className="development-state"><span aria-hidden="true" />Výzkumné a vývojové záměry · stav uvedený u každé oblasti</p></div>
    </header>

    <nav className="development-group-nav" aria-label="Oblasti automobilového vývoje">
      {developmentGroups.map(group => <a key={group.id} href={`#${group.id}`}><span>{group.number}</span><strong>{group.title}</strong><span aria-hidden="true">↓</span></a>)}
    </nav>

    {developmentGroups.map(group => <section key={group.id} id={group.id} className="tech-section development-group" aria-labelledby={`${group.id}-title`}>
      <div className="technology-block-heading"><div><p className="portal-eyebrow">{group.number} / OBLAST VÝVOJE</p><h2 id={`${group.id}-title`}>{group.title}</h2><p className="development-group-subtitle">{group.subtitle}</p></div><p>{group.description}</p></div>
      <div className={`development-group-grid${group.areas.length === 1 ? " development-group-grid--single" : ""}`}>
        {group.areas.map(id => <ResearchCard key={id} area={areasById.get(id)} index={cardIndex++} />)}
      </div>
    </section>)}

    <section id="pristup" className="tech-section development-method" aria-labelledby="development-process-title">
      <div className="technology-block-heading"><div><p className="portal-eyebrow">JAK POSTUPUJEME</p><h2 id="development-process-title">Od otázky<br /><span>k ověřenému podkladu.</span></h2></div><p>Každý směr začíná konkrétní potřebou. Rozsah návrhu, podklady a způsob ověření mají určit, zda je připravený další krok.</p></div>
      <ol className="technology-process">
        <li><span className="tech-number">01 / VÝZKUM</span><h3>Vymezit technickou otázku</h3><p>Popsat účel, dostupné podklady a předpoklady, které je potřeba prověřit.</p></li>
        <li><span className="tech-number">02 / NÁVRH</span><h3>Porovnat možnosti řešení</h3><p>Připravit zadání, konstrukční vazby a varianty odpovídající zamýšlenému použití.</p></li>
        <li><span className="tech-number">03 / OVĚŘOVÁNÍ</span><h3>Naplánovat potřebné důkazy</h3><p>Podle povahy řešení stanovit výpočty, simulace nebo zkoušky a jejich omezení.</p></li>
      </ol>
    </section>

    <aside className="development-project-link" aria-labelledby="development-projects-title"><div><p className="portal-eyebrow">DALŠÍ KROK</p><h2 id="development-projects-title">Konkrétní zadání patří do projektů.</h2><p>Automobilové koncepty a záměry s vlastním zadáním mají samostatný přehled. Jejich stav i další postup uvádíme podle skutečného vývoje.</p></div><a className="gateway-button outline" href="/projekty">Projekty PGEX <span aria-hidden="true">↗</span></a></aside>
  </div>;
}
