# ProgramEnvusXenos Landing

Dark 3D landing page built with React, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The project is ready for:

- Vercel
- GitHub Pages (static pages only; the inquiry API requires Vercel or another backend)

`vite.config.js` uses `base: "/"`. Clean routes require the rewrites in `vercel.json` or equivalent host configuration.

## Notes

- Replace the GitHub link in `src/App.jsx`
- Replace the contact email in `src/App.jsx`

# ProgramEnvusXenos

## PGEX rozcestník

- `/`: čistý vstup do obou částí; úvodní animace jednou za relaci, respektuje reduced motion.
- `/autoservis`: servisní část s vlastním menu; `/poptavka` odesílá poptávku přes serverové API a nabízí záložní e-mail a telefon.
- `/technologie`, `/projekty`: technologická část, bez nabídky autoservisu v menu.
- `/o-nas`: společné informace a sociální sítě (ověřené odkazy v `src/Portal.jsx`).
- `/kontakt`: společný kontakt; parametr `oblast` zachová kontext vybrané části.

Původní HTML adresy zůstávají dostupné. Vercel rewrites směrují nové adresy na společný vstup.
Rozcestník, autoservis, technologie, projekty, O nás i kontakt jsou česky. Technologickou část spravuje `src/Technology.jsx`; starší adresa Mariky zůstává jako stránka konceptu.
Poptávkový formulář odesílá zprávy přes `/api/inquiry` a Resend. Úspěch znamená přijetí poskytovatelem k odeslání, nikoli potvrzenou rezervaci.

Autoservis obsahuje přehled služeb, postup opravy a mobilní kontaktní lištu. Odkazy z přehledu služeb předávají výběr do pole Služba v poptávce. Položky ceníku obsahují pouze název a cenu; pod ceníkem je společné tlačítko Servisní poptávka. Ceník je rozdělený do kategorií. Při otevření stránky jsou všechny sbalené; zákazník si rozbalí vybranou kategorii.

Technologie: PGEX AI je označený jako projekt ve vývoji. Funkce vycházejí z místního projektu PGEX-AI-01. Úvodní obrázek je ilustrace vývojářského pracoviště, nikoliv snímek aplikace. Novinky jsou ručně udržovaný obsah.

## Servisní poptávky a omezení opakování

Server potřebuje `RESEND_API_KEY` v prostředí Production na Vercelu. Klíč nesmí mít prefix `VITE_`, být v klientském kódu ani v Gitu. Změna prostředí se projeví novým nasazením. Z důvodu kompatibility lze použít i původní `ProgramEnvusXenos`, pokud obsahuje klíč Resendu; standardní název má přednost.

- Maximálně jedna nová poptávka pro servis z jedné veřejné IP v každém pevném 60sekundovém UTC okně. Stejný obsah v témže okně vrací původní úspěch bez dalšího e-mailu.
- Vercel nastavuje `x-vercel-forwarded-for`; ostatní klientské hlavičky ani telefon limit neovlivňují. Lokálně se použije adresa socketu. Chybějící důvěryhodná adresa na Vercelu zastaví odeslání.
- Klíč pro Resend je HMAC adresy a časového okna. IP není v e-mailu ani ve veřejném klíči v čitelné podobě. Resend atomicky uchovává první obsah pod tímto klíčem napříč souběžnými funkcemi. Jiný obsah se stejným klíčem odmítne jako `invalid_idempotent_request`; API vrátí 429 a `Retry-After`.
- Formulář zachová údaje a ukáže odpočet. Současné zpracování vyvolá krátké čekání; tlačítko neposílá více požadavků zároveň. Honeypot a validace zůstávají aktivní.

Toto je limit poptávek pro servis (každá může mít ještě jeden potvrzovací e-mail), nikoliv firewallový limit HTTP požadavků: každý platný pokus stále kontaktuje Resend. Pevné okno dovoluje dva e-maily těsně kolem hranice minuty; po změně okna může vzniknout další e-mail i se stejným obsahem (také při opakování po nejasném výsledku). Sdílená veřejná IP sdílí limit, změna IP nebo rotace klíče vytváří nový limit. Nejde o ochranu proti distribuovanému spamu. Při větším provozu doplnit skutečné počítání požadavků ve Vercel WAF nebo sdíleném úložišti.

Ověření bez skutečných e-mailů: `npm run test:inquiry` a `npm run build`. Testy simulují zdokumentované odpovědi Resendu, včetně opakování, souběhu a jiné instance. Samotný Vite dev server `/api/inquiry` nespouští.

Dokumentace: [Resend idempotency keys](https://resend.com/docs/dashboard/emails/idempotency-keys), [Vercel request headers](https://vercel.com/docs/headers/request-headers).

## Potvrzení přijetí

- E-mail je nepovinný. Zůstává povinný telefon pro domluvu termínu. U zprávy pro servis je `reply_to` zákazníkův ověřený formát adresy (jinak servisní schránka).
- Po přijetí zprávy pro servis Resendem se na zadanou adresu odešle samostatný přehled požadavku. Potvrzení výslovně není rezervací. API rozlišuje `confirmation: accepted / unavailable / not_requested`; chyba potvrzení nezneplatní již přijatou poptávku.
- Při e-mailu se čerpají **dvě odeslané zprávy** z limitu Resendu, bez něj jedna. Přijetí API není zárukou doručení do schránky. Zprávy se odesílají postupně; potvrzení zákazníkovi následuje až po přijetí zprávy pro servis.
- Potvrzení má vlastní idempotency key odvozený z ID zprávy pro servis. Ochrana proti duplicitní hlavní zprávě je stále omezená na výše popsané časové okno. Bez databáze nebo fronty nemáme trvalou záruku ani automatické doručení potvrzení po výpadku.
- Testy mockují pouze externí Resend; skutečný handler ověřuje validaci, příjemce, opakování, částečné selhání a odmítnutí fotek ze staršího formuláře. Testy neposílají žádné skutečné e-maily.


Formulář přijímá pouze textové údaje (JSON nejvýše 16 000 B). Fotky lze poslat samostatně e-mailem. Starší otevřený formulář s přílohami dostane vysvětlení, aby nedošlo k jejich tichému zahození.
