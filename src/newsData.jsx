import React from "react";

const closureSlug = "ukonceni-verejneho-provozu-pgex-ai";

function ArchiveNotice() {
  return (
    <p className="news-archive-note">
      Archivní článek zachycuje stav v době vydání. Veřejný provoz PGEX AI byl ukončen.{' '}
      <a href={`/novinky/${closureSlug}`}>Aktuální informace o ukončení provozu →</a>
    </p>
  );
}

function PublicClosureContent() {
  return (
    <>
      <p>Aplikace již není veřejně dostupná. Původní koncepty Luny, Xeny a Mariky na webu zůstávají. Starší články v Novinkách zachycují stav v době svého vydání.</p>
      <p><a href="/technologie#pgex-ai">Aktuální stav projektu →</a></p>
    </>
  );
}

function NovemberProgressContent() {
  return (
    <>
      <ArchiveNotice />
      <p>PGEX postupně propojuje zkušenosti ze servisu s vývojem vlastního softwaru. Na webu jsme zpřehlednili informace pro zákazníky a doplnili, na čem chceme pracovat dál.</p>
      <h2 id="co-se-zmenilo">Co se změnilo</h2>
      <p>Obchodní podmínky a reklamační protokol mají vlastní stránku <a href="/autoservis/dokumenty">Dokumenty ke stažení</a>, dostupnou z menu autoservisu. Z úvodní stránky servisu jsme je přesunuli, aby byla přehlednější.</p>
      <p>Kontaktní telefon jsme sjednotili na <a href="tel:+420737781046">737 781 046</a>. Nové číslo najdete v kontaktech, tlačítkách pro zavolání, potvrzovacím e-mailu servisní poptávky i v dokumentu s obchodními podmínkami.</p>
      <p>Doplnili jsme informace o <a href="/ochrana-osobnich-udaju.html">zpracování osobních údajů</a> a <a href="/cookies.html">cookies</a>. Vložená mapa servisu se načítá až po vašem svolení; volbu můžete změnit v nastavení cookies.</p>
      <h2 id="kam-pgex-smeruje">Kam PGEX směřuje</h2>
      <p>Do <a href="/projekty#servisni-aplikace">přehledu projektů</a> jsme přidali Servisní aplikaci PGEX. Připravujeme návrh pracovního prostoru pro zakázky, vozidla a organizaci dílny. Cílem je mít průběh opravy přehledně od přijetí vozu až po jeho předání. Aplikace zatím není veřejně dostupná.</p>
      <p><a href="/technologie#pgex-ai">PGEX AI</a> můžete používat jako webovou beta verzi s Lunou, Xenou a Marikou. Dalším směrem jsou samostatné aplikace pro Windows, macOS a mobilní zařízení. Ty zatím nejsou veřejně ke stažení; nyní je k dispozici verze v prohlížeči.</p>
      <p><a href="/revenant">Revenant</a> zůstává konceptem vlastního supersportu. Konkrétní technické parametry a termín realizace zatím zveřejněné nejsou.</p>
      <h2 id="co-bude-nasledovat">Co bude následovat</h2>
      <p>Další práci chceme soustředit na spolehlivost a pohodlné používání PGEX AI, přípravu dalších platforem a rozpracování servisní aplikace. U ní chceme nejprve upřesnit průchod jednou zakázkou a potřebné údaje, aby návrh odpovídal každodenní práci v dílně.</p>
      <p>U autoservisu pokračuje dokončování obchodních podmínek. Dokument ke stažení je stále pracovní návrh; zbývá doplnit datum účinnosti a dokončit právní kontrolu.</p>
      <p>Ukázky, ověřené výsledky a dostupnost dalších verzí budeme postupně zveřejňovat tady v Novinkách. Termíny vydání připravovaných aplikací zatím nestanovujeme.</p>
    </>
  );
}

function PublicBetaContent() {
  return (
    <>
      <ArchiveNotice />
      <p>Lunu, Xenu a Mariku si nyní můžete vyzkoušet v jedné webové aplikaci. Přihlásíte se přes Google nebo GitHub a můžete začít rovnou v prohlížeči.</p>
      <p>Beta nabízí chat s přílohami, projekty, vyhledávání na webu, tvorbu obrázků a hlasový rozhovor. Dostupnost nástrojů závisí na zvoleném modelu, službách a denních limitech beta verze.</p>
      <p><a href="/technologie#pgex-ai">Aktuální stav projektu →</a></p>
    </>
  );
}

function TechnologySpaceContent() {
  return (
    <p>Web PGEX nově odděluje autoservis od technologických projektů. Představení vývoje a přehled projektů jsou nyní v češtině.</p>
  );
}

export const categoryLabels = {
  technologie: "Technologie",
  pgex: "PGEX",
};

export const newsArticles = [
  {
    slug: closureSlug,
    date: "2026-11-09",
    dateLabel: "9. listopadu 2026",
    category: "technologie",
    title: "Veřejný provoz PGEX AI byl ukončen.",
    excerpt: "PGEX AI již není veřejně dostupné. Původní koncepty Luny, Xeny a Mariky zůstávají součástí webu.",
    image: "/pgex-wordmark.svg",
    imageAlt: "Logo PGEX — Program Envus Xenos",
    Content: PublicClosureContent,
  },
  {
    slug: "prehlednejsi-web-a-dalsi-smer-projektu",
    date: "2026-11-02",
    dateLabel: "2. listopadu 2026",
    category: "pgex",
    title: "Přehlednější web a další směr projektů PGEX",
    excerpt: "Dokumenty autoservisu, kontakty, soukromí a tehdejší plán dalších projektů v listopadovém přehledu změn.",
    image: "/workshop/workshop-hero.jpg",
    imageAlt: "Ilustrace práce na vozidle v dílně",
    Content: NovemberProgressContent,
    sections: [
      { id: "co-se-zmenilo", title: "Co se změnilo" },
      { id: "kam-pgex-smeruje", title: "Kam PGEX směřuje" },
      { id: "co-bude-nasledovat", title: "Co bude následovat" },
    ],
    legacyHash: "prehled-listopad-2026",
  },
  {
    slug: "pgex-ai-verejna-beta",
    date: "2026-10-26",
    dateLabel: "26. října 2026",
    category: "technologie",
    title: "PGEX AI spouští veřejnou beta verzi",
    excerpt: "Archivní oznámení o spuštění webové beta verze s Lunou, Xenou a Marikou a přehledem jejích tehdejších funkcí.",
    image: "/technology/development-workspace.jpg",
    imageAlt: "Ilustrace vývojářského pracoviště pro původní projekt PGEX AI",
    Content: PublicBetaContent,
  },
  {
    slug: "samostatny-prostor-pro-technologie",
    date: "2026-10-16",
    dateLabel: "16. října 2026",
    category: "pgex",
    title: "Samostatný prostor pro technologie",
    excerpt: "Web PGEX odděluje autoservis od technologických projektů. Představení vývoje a přehled projektů jsou v češtině.",
    image: "/technology/development-workspace.jpg",
    imageAlt: "Ilustrace pracoviště pro vývoj softwaru",
    Content: TechnologySpaceContent,
  },
];

export function getNewsArticle(slug) {
  return newsArticles.find((article) => article.slug === slug);
}
