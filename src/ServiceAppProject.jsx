import React from "react";
import "./technology.css";

export default function ServiceAppProject() {
  return (
    <div className="tech-page service-app-page">
      <a className="ai-back" href="/projekty">← Zpět na projekty</a>
      <section className="tech-hero">
        <div>
          <p className="portal-eyebrow">PGEX / SOFTWARE PRO AUTOSERVIS</p>
          <h1>Servisní aplikace PGEX</h1>
          <span className="tech-status">Připravujeme</span>
          <p className="tech-lead">Od přijetí vozu po dokončení zakázky. Navrhujeme pracovní prostor pro přehlednější každodenní chod dílny.</p>
          <p>Důležité údaje o vozidle, domluvené práci a stavu zakázky mají být na jednom místě. Cílem je usnadnit návaznost jednotlivých kroků a orientaci v tom, co servis právě řeší.</p>
        </div>
        <img className="tech-hero-image service-app-hero-image" src="/workshop/workshop-hero.jpg" alt="Ilustrace autoservisu — zázemí pro návrh servisní aplikace PGEX" width="1536" height="1024" />
      </section>

      <section className="tech-section">
        <p className="portal-eyebrow">PLÁNOVANÉ ZAMĚŘENÍ</p>
        <h2>Zakázky, vozidla a chod dílny.</h2>
        <div className="tech-process">
          <article>
            <span className="tech-number">01 / ZAKÁZKY</span>
            <h3>Přehled o každé opravě</h3>
            <p>Plánujeme evidenci přijatých zakázek, popisu závady a dohodnutého rozsahu práce. Záznam má provázet zakázku od prvního zadání až po předání vozu a pomáhat udržet přehled o jejím průběhu.</p>
          </article>
          <article>
            <span className="tech-number">02 / VOZIDLA</span>
            <h3>Podklady a servisní historie</h3>
            <p>Cílem je propojit údaje o voze s jeho zakázkami a historií provedených prací. Při další návštěvě by tak bylo možné navázat na předchozí servis a dohledat, co se na vozidle řešilo.</p>
          </article>
          <article>
            <span className="tech-number">03 / CHOD DÍLNY</span>
            <h3>Organizace práce</h3>
            <p>Chceme usnadnit plánování termínů a sledování rozpracovaných úkolů. Obsluha má rychle poznat, co je domluvené, co právě probíhá a co je potřeba vyřešit před dokončením zakázky.</p>
          </article>
        </div>
      </section>

      <section className="tech-section">
        <p className="portal-eyebrow">UKÁZKOVÝ POSTUP</p>
        <h2>Jedna zakázka, navazující kroky.</h2>
        <p>Následující postup ukazuje zamýšlenou práci s aplikací a slouží jako podklad pro její návrh.</p>
        <ol className="ai-example-steps">
          <li><strong>Přijetí vozu.</strong> Zaznamenat vozidlo, popis potíží a dohodnutý rozsah servisních prací.</li>
          <li><strong>Naplánování práce.</strong> Zařadit zakázku do přehledu termínů a určit úkoly, které mají následovat.</li>
          <li><strong>Průběh opravy.</strong> Průběžně zachycovat stav práce, aby bylo zřejmé, které úkoly jsou hotové a které zbývají.</li>
          <li><strong>Dokončení zakázky.</strong> Shrnout provedené práce a zachovat jejich návaznost na historii vozidla pro příští servis.</li>
        </ol>
      </section>

      <section className="tech-section">
        <p className="portal-eyebrow">STAV PROJEKTU</p>
        <h2>Projekt připravujeme.</h2>
        <p>Popis představuje zamýšlené funkce. Aplikace zatím není veřejně dostupná; konkrétní podoba a termín vydání budou upřesněny během vývoje.</p>
        <p>Zajímá vás projekt nebo máte zkušenost z provozu dílny, která by mohla pomoci při návrhu? Napište nám, jaké situace při evidenci zakázek a organizaci práce řešíte.</p>
        <div className="contact-actions">
          <a className="gateway-button outline" href="/kontakt?oblast=technologie">Dotazy k servisní aplikaci →</a>
        </div>
      </section>
    </div>
  );
}