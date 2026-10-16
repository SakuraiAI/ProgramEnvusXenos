import "./technology.css";

const features = [
 ["01", "Chat s Lunou", "Pomoc s texty, plánováním a vysvětlením kódu v jednom konverzačním prostředí."],
 ["02", "Přílohy a souvislosti", "Práce s textovými soubory, kódem a obrázky. Podpora závisí na zvoleném modelu a formátu přílohy."],
 ["03", "Projekty na jednom místě", "Uspořádání konverzací podle projektů, aby se jednotlivá témata nemíchala."],
 ["04", "Propojení s počítačem", "Vyhledání a otevření podporovaných aplikací. Další automatizaci ověřujeme na konkrétních úlohách."],
];

function Collaboration() {
 return <section className="tech-collaboration"><div><p className="portal-eyebrow">KONTAKT A SPOLUPRÁCE</p><h2>Chcete se zapojit?</h2><p>Zajímá vás PGEX AI, máte nápad na funkci nebo chcete nabídnout zpětnou vazbu? Napište nám.</p></div><a className="gateway-button" href="/kontakt?oblast=technologie">Ozvat se →</a></section>;
}

export function TechnologyPage() {
 return <div className="tech-page">
  <section className="tech-hero"><div><p className="portal-eyebrow">PGEX / VÝVOJ A TECHNOLOGIE</p><h1>Vlastní software.<br/><span>Praktické využití AI.</span></h1><p className="tech-lead">Vyvíjíme PGEX AI — desktopovou aplikaci s asistentkou Lunou pro práci s texty, soubory a projekty.</p><p>Postupujeme od konkrétních funkcí k jejich ověření v každodenní práci. Tady najdete, na čem pracujeme a v jakém je to stavu.</p><div className="contact-actions"><a className="gateway-button" href="#pgex-ai">Poznat PGEX AI →</a><a className="gateway-button outline" href="/projekty">Všechny projekty</a></div></div><img className="tech-hero-image" src="/technology/development-workspace.jpg" width="1536" height="1024" alt="Ilustrace pracoviště pro vývoj softwaru"/></section>
  <section id="postavy" className="tech-section"><p className="portal-eyebrow">TVÁŘE PGEX</p><h2>Luna, Xeno a Marika.</h2><p className="tech-lead">Tři směry našeho projektu: komunikace, technické řešení a propojení systémů.</p><div className="tech-characters">
   <article><img src="/characters/luna.jpg" alt="Luna" loading="lazy"/><div><p className="portal-eyebrow">KOMUNIKACE A SPOLUPRÁCE</p><h3>Luna</h3><p>Asistentka pro konverzaci, vysvětlování a plánování. Uživatelská tvář aplikace PGEX AI.</p><a href="#pgex-ai">Luna v PGEX AI →</a></div></article>
   <article><img src="/characters/xeno-character.jpg" alt="Xeno" loading="lazy"/><div><p className="portal-eyebrow">LOGIKA A TECHNICKÉ ŘEŠENÍ</p><h3>Xeno</h3><p>Technická část projektu zaměřená na rozbor problémů, práci s kódem a návrh postupu řešení.</p><a href="/projekty">Prohlédnout projekty →</a></div></article>
   <article><img src="/characters/marika.jpg" alt="Marika" loading="lazy"/><div><p className="portal-eyebrow">PROPOJENÍ SYSTÉMŮ</p><h3>Marika</h3><p>Koncept propojení plánování, paměti a nástrojů. Součást dlouhodobého směru vývoje PGEX.</p><a href="/marika">Poznat Mariku →</a></div></article>
  </div></section>
  <section id="pgex-ai" className="tech-section"><div className="tech-section-heading"><div><p className="portal-eyebrow">HLAVNÍ PROJEKT</p><h2>PGEX AI</h2></div><span className="tech-status">Ve vývoji</span></div><p className="tech-lead">Asistentka Luna, vaše soubory a projekty v jedné aplikaci.</p><div className="tech-feature-grid">{features.map(([number,title,text])=><article key={number}><span className="tech-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="tech-project-note"><h3>Co je potřeba pro použití</h3><p>Aplikace je ve vývoji. Odpovědi AI vyžadují nakonfigurovaného poskytovatele a vlastní API klíč. Integrace zahrnují NVIDIA a OpenAI; dostupné funkce závisí na nastavení. PDF a kancelářské dokumenty zatím nemají plnou podporu.</p><a href="/kontakt?oblast=technologie">Mám zájem o testování ↗</a></div></section>
  <Collaboration/>
 </div>;
}

export function ProjectsPage() {
 return <div className="tech-page"><section className="tech-project-intro"><p className="portal-eyebrow">PROJEKTY PGEX</p><h1>Co právě vzniká.</h1><p className="tech-lead">Přehled projektů a jejich aktuálního stavu.</p></section><div className="tech-project-grid"><article><span className="tech-status">Ve vývoji</span><h2>PGEX AI</h2><p>Desktopová aplikace s asistentkou Lunou. Chat, přílohy, organizace projektů a propojení s podporovanými aplikacemi.</p><p className="tech-project-meta">AI · Desktopová aplikace</p><a className="gateway-button" href="/technologie#pgex-ai">Prozkoumat PGEX AI →</a></article><article><span className="tech-status">Ve vývoji</span><h2>Web PGEX</h2><p>Jeden web se dvěma jasnými cestami: autoservis a vývoj technologií. Pracujeme na obsahu, přehlednosti a kontaktech.</p><p className="tech-project-meta">Web · Prezentace projektů</p><a className="gateway-button outline" href="/">Otevřít rozcestník →</a></article></div><Collaboration/></div>;
}

export function MarikaPage() {
 return <div className="tech-page"><section className="tech-hero"><div><p className="portal-eyebrow">KONCEPT PGEX</p><h1>Marika.</h1><p className="tech-lead">Původní koncept propojení plánování, paměti a nástrojů v rámci PGEX.</p><p>Marika zatím není představena jako samostatný produkt k vyzkoušení. Aktuální vývoj aplikace najdete u projektu PGEX AI.</p><a className="gateway-button" href="/technologie#pgex-ai">Přejít na PGEX AI →</a></div><img className="tech-hero-image tech-marika-image" src="/characters/marika.jpg" alt="Marika"/></section><Collaboration/></div>;
}
export function NewsPage() { return <div className="tech-page"><header className="tech-project-intro"><p className="portal-eyebrow">PGEX</p><h1>Novinky z vývoje.</h1><p className="tech-lead">Aktualizace projektů a zprávy z vývoje na jednom místě.</p></header>  <section id="novinky" className="tech-section"><p className="portal-eyebrow">NOVINKY Z VÝVOJE</p><h2>Na čem právě pracujeme.</h2><div className="tech-updates"><article><span>Průběžný vývoj</span><h3>PGEX AI: chat, projekty a lokální akce</h3><p>Současná práce se soustředí na přehledné ovládání, přílohy a propojení asistenta s podporovanými aplikacemi v počítači.</p></article><article><time dateTime="2026-10-16">16. října 2026</time><h3>Samostatný prostor pro technologie</h3><p>Web PGEX nově odděluje autoservis od technologických projektů. Představení vývoje a přehled projektů jsou nyní v češtině.</p></article></div></section>
<Collaboration/></div>; }
