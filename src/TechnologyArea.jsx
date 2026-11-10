import { automotiveResearch } from "./automotiveResearch";
import { DevelopmentStatus } from "./TechnologyLanding";
import "./technology-landing.css";

export const getTechnologyArea = pathname => automotiveResearch.find(area => area.detailSlug && area.href === pathname);

export default function TechnologyArea({ area }) {
  if (!area?.detail) return <div className="tech-page technology-landing"><p className="portal-eyebrow">PGEX / VÝVOJ TECHNOLOGIÍ</p><h1>Oblast nebyla nalezena.</h1><p>Vraťte se na přehled automobilového vývoje a vyberte jednu z dostupných oblastí.</p><a className="gateway-button outline" href="/technologie">Zpět na vývoj technologií →</a></div>;
  const { detail } = area;
  const related = automotiveResearch.filter(item => item.id !== area.id);
  return <div className="tech-page technology-landing technology-detail">
    <nav className="technology-breadcrumb" aria-label="Drobečková navigace"><a href="/technologie">Vývoj technologií</a><span aria-hidden="true">/</span><span aria-current="page">{area.label}</span></nav>
    <section className="technology-landing-hero" aria-labelledby="technology-area-title"><div className="technology-hero-copy"><p className="portal-eyebrow">PGEX / {area.name}</p><DevelopmentStatus stage={area.stage}>{area.status}</DevelopmentStatus><h1 id="technology-area-title">{area.label}</h1><p className="tech-lead">{area.description}</p><a className="technology-text-link" href="#zamereni">Poznat zaměření <span aria-hidden="true">↓</span></a></div><figure className="technology-hero-visual"><img src={area.image} alt={area.imageAlt} width={area.width} height={area.height} fetchpriority="high" decoding="async" /><figcaption className="technology-detail-caption">Koncepční ilustrace výzkumné oblasti PGEX</figcaption></figure></section>
    <nav className="technology-detail-nav" aria-label="Obsah výzkumné oblasti"><a href="#zamereni">Zaměření</a><a href="#technicka-temata">Technická témata</a><a href="#vyzkumne-otazky">Výzkumné otázky</a><a href="#stav">Stav a další kroky</a></nav>
    <section id="zamereni" className="tech-section technology-detail-intro" aria-labelledby="area-scope-title"><div><p className="portal-eyebrow">O OBLASTI</p><h2 id="area-scope-title">Co chceme<br /><span>prozkoumat.</span></h2></div><div>{detail.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section id="technicka-temata" className="tech-section" aria-labelledby="area-focus-title"><p className="portal-eyebrow">TECHNICKÉ SOUVISLOSTI</p><h2 id="area-focus-title">Na čem návrh závisí.</h2><div className="technology-detail-focus">{detail.focus.map((item, index) => <article key={item.title}><span className="tech-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section id="vyzkumne-otazky" className="tech-section technology-detail-questions" aria-labelledby="area-questions-title"><div><p className="portal-eyebrow">VÝZKUMNÉ OTÁZKY</p><h2 id="area-questions-title">Začít konkrétně.</h2></div><ol>{detail.questions.map(question => <li key={question}>{question}</li>)}</ol></section>
    <section id="stav" className="tech-section technology-detail-state" aria-labelledby="area-state-title"><div><p className="portal-eyebrow">SOUČASNÝ STAV</p><h2 id="area-state-title">Záměr a jeho hranice.</h2><DevelopmentStatus stage={area.stage}>{area.status}</DevelopmentStatus><p>{detail.limits}</p><p>{area.scope}</p></div><div><h3>Možné výstupy výzkumu</h3><ul>{detail.outputs.map(output => <li key={output}>{output}</li>)}</ul><h3>Další krok</h3><p>{detail.nextStep}</p></div></section>
    <nav className="tech-section technology-related" aria-label="Další oblasti vývoje"><div><p className="portal-eyebrow">SOUVISEJÍCÍ SMĚRY</p><h2>Automobil jako celek.</h2></div><div>{related.map(item => <a key={item.id} href={item.href}>{item.id === "future-vehicles" ? "Revenant — koncept vozidla" : item.label}<span aria-hidden="true">↗</span></a>)}</div></nav>
  </div>;
}
