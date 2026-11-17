# PGEX — Program Envus Xenos

Veřejný web PGEX odděluje autoservis a tuning od automobilových technologií, výzkumných záměrů a projektů. Používá React, Vite a CSS s Tailwindem. Servisní poptávky obsluhuje samostatné serverové API.

## Spuštění

```bash
npm ci
npm run dev
```

## Kontroly a sestavení

```bash
npm run test:technology
npm run test:inquiry
node --test test-cookie-preferences.mjs
npm run build
```

## Struktura webu

- `/`: rozcestník Autoservis / Technologie.
- `/autoservis`, `/tuning`: služby a samostatné ceníky; `/autoservis/dokumenty` obsahuje dokumenty ke stažení.
- `/poptavka`: servisní poptávka přes `/api/inquiry`; přijetí zprávy není rezervací termínu.
- `/technologie`: přehled zaměření PGEX a technického přístupu.
- `/vyvoj`: sedm výzkumných oblastí ve skupinách Pohonné systémy, Konstrukce a podvozek, Elektronika a řízení. Detailní stránky mají zachované adresy `/technologie/...`.
- `/projekty`: PGEX Core, Revenant a samostatný záměr Sakura Corporation s uvedeným stavem.
- `/novinky`: články a aktualizace. Historická oznámení mají archivní upozornění.
- `/sakura-corporation`, `/luna`, `/xeno`, `/marika`: samostatný výzkumný záměr a koncepty asistentek. Původní veřejná aplikace PGEX AI byla ukončena.
- `/o-nas`, `/kontakt`: společné informace a kontakty; parametr `oblast` zachovává kontext části webu.

Vstup `src/main.jsx` vykresluje `src/Portal.jsx`. Obsah Technologií, Vývoje a projektů je rozdělený do samostatných komponent. Servis a tuning používají vlastní obsah, styly a data ceníků. Odkazy na sociální sítě jsou v `src/Portal.jsx`.

Původní HTML adresy a starší odkazy zůstávají kompatibilní. Směrování obsluhují `vite.config.js` při vývoji i preview a `vercel.json` při nasazení. Animace respektují omezení pohybu.

## Nasazení a lokální soubory

Produkční web používá Vercel se serverovou funkcí `api/inquiry.js`. Samotný statický hosting funkci nenahradí. Vite používá `base: "/"`; u jiného hostingu je potřeba zajistit odpovídající přepisy adres a backend.

Tajné klíče patří do serverového prostředí. Lokální konfigurace `.env*`, zdrojové obrázky v `assets-source/`, pracovní zprávy v `reports/` a výstupy sestavení se neukládají do Gitu. Publikované obrázky a dokumenty jsou v `public/`.

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
