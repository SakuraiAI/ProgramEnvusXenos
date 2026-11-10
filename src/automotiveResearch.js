export const automotiveResearch = [
  {
    "id": "automotive-engineering",
    "name": "Automotive Engineering",
    "label": "Konstrukce a mechanické systémy",
    "status": "Výzkumný záměr",
    "stage": "planned",
    "description": "Dlouhodobý směr vlastní konstrukce automobilů: od mechanických celků a pohonných jednotek po jejich uspořádání ve vozidle.",
    "topics": [
      "Konstrukční návrhy",
      "Mechanické systémy",
      "Pohonné jednotky"
    ],
    "scope": "Nejde o nabídku hotového automobilu ani vlastního motoru.",
    "detailSlug": "konstrukce",
    "href": "/technologie/konstrukce",
    "image": "/technology/pgex-engineering.webp",
    "imageAlt": "Koncepční vizualizace konstrukce a mechanických celků automobilu",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Konstrukce automobilu propojuje nosné části, mechanické celky, pohon a jejich uspořádání. Každý návrh musí vycházet z účelu vozu, zatížení, prostorových omezení a způsobu údržby. Samotný vzhled ani výběr jednotlivých součástí tyto vztahy nevyřeší.",
        "V PGEX chceme tento směr rozvíjet prostřednictvím konkrétních technických zadání. Nejprve potřebujeme popsat požadovanou funkci a rozhraní mezi celky; teprve podle dostupných podkladů lze rozhodovat o výpočtech, konstrukční studii nebo pozdějším prototypu."
      ],
      "focus": [
        {
          "title": "Architektura a uspořádání",
          "text": "Zkoumat umístění mechanických celků, prostor pro jejich pohyb a návaznost na okolní části. Součástí návrhu má být také přístup při montáži, kontrole a případné výměně."
        },
        {
          "title": "Zatížení a konstrukční vazby",
          "text": "Popsat, kudy se přenášejí síly a které provozní situace jsou pro návrh rozhodující. Uvažované materiály a spoje posuzovat společně s geometrií, nikoli podle jediné tabulkové vlastnosti."
        },
        {
          "title": "Propojení mechaniky a elektroniky",
          "text": "Vymezit napájení, senzory a informační rozhraní potřebná pro zamýšlenou funkci. Změnu mechanického celku hodnotit i podle vlivu na chlazení, kabeláž a navazující systémy."
        }
      ],
      "questions": [
        "Jakou konkrétní potřebu vozu má konstrukční návrh vyřešit?",
        "Které zatížení a prostorové omezení nejvíce ovlivňují jeho podobu?",
        "Jaké podklady chybějí pro posouzení funkce a dlouhodobého chování?"
      ],
      "outputs": [
        "Technické zadání s účelem, podmínkami použití a hranicemi návrhu.",
        "Konstrukční studie s popisem uspořádání a systémových rozhraní.",
        "Seznam neověřených předpokladů a plán dalšího odborného posouzení."
      ],
      "limits": "Jde o výzkumný záměr. Neuvádíme hotový automobil, vlastní motor ani potvrzené konstrukční parametry. Servis a zákaznický tuning jsou samostatné aktuální služby, nikoli důkaz dokončeného vlastního vývoje.",
      "nextStep": "Vybrat jednu konstrukční otázku a připravit pro ni konkrétní zadání. Výzkumná oblast se může změnit v projekt až po vymezení rozsahu, potřebných podkladů a způsobu ověřování."
    }
  },
  {
    "id": "performance-development",
    "name": "Performance Development",
    "label": "Výkon jako souhra celého vozu",
    "status": "Vývojový záměr",
    "stage": "planned",
    "description": "Zamýšlený výzkum výkonových úprav v souvislostech: přeplňování, chlazení, brzdy, podvozek a aerodynamika mají tvořit vyvážený celek.",
    "topics": [
      "Výkon a chlazení",
      "Brzdy a podvozek",
      "Aerodynamika"
    ],
    "scope": "Vývojový záměr vyžaduje konkrétní zadání a ověření souhry jednotlivých systémů.",
    "detailSlug": "vykon-a-chlazeni",
    "href": "/technologie/vykon-a-chlazeni",
    "image": "/technology/pgex-performance.webp",
    "imageAlt": "Koncepční vizualizace výkonového systému a chlazení automobilu",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Výkon vozu nelze hodnotit pouze jedním číslem motoru. Zrychlení, opakované zatížení i ovladatelnost souvisejí s chlazením, přenosem síly, brzdami, podvozkem a prouděním vzduchu. Důležitý je zamýšlený způsob použití a souhra těchto částí.",
        "Tento směr má v PGEX sloužit k budoucím technickým studiím vyváženého celku. Výchozím bodem má být popsaný provozní scénář a požadované chování, nikoli předem slíbený přírůstek výkonu nebo seznam namontovaných dílů."
      ],
      "focus": [
        {
          "title": "Pohon a provozní zatížení",
          "text": "Porovnávat požadavky na pohon při krátkodobém a trvalejším zatížení. Změny přeplňování či přenosu síly posuzovat společně s návaznými omezeními a předpoklady o stavu vozidla."
        },
        {
          "title": "Chlazení a tepelné vazby",
          "text": "Popsat zdroje tepla, cestu jeho odvádění a prostorové nároky. Zamýšlené řešení hodnotit i podle proudění vzduchu, okolních součástí a podmínek, které výpočet zatím nezahrnuje."
        },
        {
          "title": "Brzdy, podvozek a aerodynamika",
          "text": "Sledovat, zda změna jedné části nevytvoří nepřiměřený požadavek na ostatní. Rozlišovat návrhový předpoklad, výsledek simulace a vlastnost, kterou by bylo nutné ověřit měřením."
        }
      ],
      "questions": [
        "Pro jaký způsob použití má být budoucí řešení navrženo?",
        "Která část omezuje opakovatelnost požadovaného chování celého vozu?",
        "Jak se změna výkonu promítne do teplot, brzdění a ovladatelnosti?"
      ],
      "outputs": [
        "Popis provozního scénáře a vzájemně sladěných technických požadavků.",
        "Studie výkonových a tepelných vazeb se zaznamenanými předpoklady.",
        "Návrh porovnání variant a dalšího ověřování navazujících systémů."
      ],
      "limits": "Vývojový záměr neznamená naměřené výkonové zisky, dokončené CFD studie ani ověřenou závodní techniku. Aktuální tuningové služby mají vlastní rozsah; tento výzkum není jejich rozšířeným ceníkem.",
      "nextStep": "Připravit konkrétní zadání pro jeden vůz nebo vymezený systém. Teprve s doloženými vstupy lze určit smysluplný rozsah studie a rozhodnout o samostatném vývojovém projektu."
    }
  },
  {
    "id": "automotive-electronics",
    "name": "Automotive Electronics",
    "label": "Elektronika a řízení vozidel",
    "status": "Dlouhodobý záměr",
    "stage": "vision",
    "description": "Budoucí vývoj řídicích jednotek, senzorových systémů a elektroniky pro inteligentní funkce vozidel. Základem má být vlastní technické zadání a ověřování.",
    "topics": [
      "Řídicí elektronika",
      "Senzory",
      "Inteligentní funkce"
    ],
    "scope": "Vlastní jednotky ani senzorové systémy zatím nenabízíme jako hotové výrobky.",
    "detailSlug": "elektronika",
    "href": "/technologie/elektronika",
    "image": "/technology/pgex-electronics.webp",
    "imageAlt": "Koncepční vizualizace automobilové elektroniky a senzorových rozhraní",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Elektronika vozidla propojuje měření, zpracování údajů a reakci jednotlivých systémů. Užitečný výstup závisí na kvalitě senzorového signálu, časování i tom, co má zařízení udělat při chybě nebo neúplné informaci.",
        "Dlouhodobým záměrem PGEX je zkoumat vlastní elektronické a senzorové koncepty pro konkrétní automobilové funkce. Návrh jednotky má začínat požadavkem a popisem okolních rozhraní, nikoli předpokladem, že libovolný hardware lze bezpečně zapojit do řízení vozu."
      ],
      "focus": [
        {
          "title": "Senzory a kvalita informace",
          "text": "Vymezit sledovanou veličinu, potřebné časování a způsob rozpoznání neplatného údaje. Zpracování signálu má zachovat informaci o nejistotě, výpadku nebo omezení použitého snímače."
        },
        {
          "title": "Řídicí elektronika a rozhraní",
          "text": "Popsat napájení, datové vstupy, výstupy a hranice oprávnění zařízení. Zkoumat také souvislost mezi elektronikou, mechanickým umístěním, teplotou a možností diagnostiky."
        },
        {
          "title": "Software a chybové stavy",
          "text": "Navrhovat přehledné stavy spuštění, běžné činnosti a zotavení po chybě. Oddělit informování uživatele od zásahu do vozidla a stanovit, co musí zůstat pod jeho kontrolou."
        }
      ],
      "questions": [
        "Jaká funkce vyžaduje vlastní elektroniku místo existujícího řešení?",
        "Které údaje a časové souvislosti jsou pro tuto funkci nezbytné?",
        "Jak má zařízení reagovat na výpadek senzoru nebo napájení?"
      ],
      "outputs": [
        "Funkční zadání s požadavky na signály, časování a napájení.",
        "Návrh elektronických rozhraní a stavového chování softwaru.",
        "Plán posouzení měření, poruchových situací a systémových hranic."
      ],
      "limits": "Vlastní řídicí jednotku ani senzorový systém zatím nenabízíme jako výrobek. Popsané možnosti nejsou potvrzením přesnosti, spolehlivosti či způsobilosti k řízení vozidla a nenahrazují potřebné odborné ověření.",
      "nextStep": "Vymezit jednu měřicí nebo podpůrnou funkci a její rozhraní. Samostatný projekt může vzniknout až s konkrétním zadáním, dostupnými podklady a přiměřeným plánem technického ověřování."
    }
  },
  {
    "id": "custom-components",
    "name": "Custom Parts & Components",
    "label": "Vlastní díly od návrhu",
    "status": "Dlouhodobý záměr",
    "stage": "vision",
    "description": "Dlouhodobě chceme navrhovat, vyvíjet a případně vyrábět vlastní automobilové díly. Další kroky musí vycházet z požadavků konkrétního použití.",
    "topics": [
      "Návrh komponentů",
      "Volba materiálů",
      "Budoucí prototypy"
    ],
    "scope": "Jde o směr dalšího rozvoje, nikoli o současný výrobní katalog.",
    "detailSlug": "vlastni-komponenty",
    "href": "/technologie/vlastni-komponenty",
    "image": "/technology/pgex-components.webp",
    "imageAlt": "Koncepční vizualizace návrhu vlastních automobilových komponentů",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Vlastní automobilový díl potřebuje více než tvarový návrh. Jeho funkce souvisí s materiálem, rozměrovými vazbami, způsobem výroby, montáží a kontrolou. Změna výrobního postupu může ovlivnit vlastnosti, které samotný digitální model neukáže.",
        "PGEX chce dlouhodobě připravovat vlastní komponenty podle konkrétních potřeb vozidel. Smyslem tohoto směru je propojit návrh s vyrobitelností a ověřováním ještě před rozhodnutím o prototypu, nikoli sestavit katalog dosud neexistujících výrobků."
      ],
      "focus": [
        {
          "title": "Funkce a návazné rozměry",
          "text": "Popsat účel dílu, okolní součásti a požadavky na montáž. Rozměry a tolerance odvozovat od potřebné funkce, včetně prostoru pro pohyb, kontrolu a servisní přístup."
        },
        {
          "title": "Materiál a výrobní cesta",
          "text": "Porovnávat materiálové možnosti společně s uvažovaným zpracováním a prostředím. Zaznamenat, které vlastnosti pocházejí z podkladů a které by vyžadovaly ověření pro konkrétní díl."
        },
        {
          "title": "Kontrola a budoucí prototyp",
          "text": "Navrhnout, jak by se posuzovaly rozhodující rozměry a funkce. Zohlednit dostupnost měřených míst, opakovatelnost a změny návrhu, aby případný prototyp odpovídal známému technickému zadání."
        }
      ],
      "questions": [
        "Jakou funkci má vlastní komponent přinést oproti dostupným možnostem?",
        "Které rozměrové a materiálové vlastnosti rozhodují o jeho použitelnosti?",
        "Jaké důkazy by byly potřeba před případným použitím ve vozidle?"
      ],
      "outputs": [
        "Zadání komponentu s funkčními požadavky a konstrukčními vazbami.",
        "Studie materiálu a možné výroby s označenými nejistotami.",
        "Návrh kontroly a podmínek pro rozhodnutí o budoucím prototypu."
      ],
      "limits": "Zatím nejde o výrobní katalog, hotové prototypy ani potvrzení vlastních slitin či certifikovaných dílů. Výzkumný záměr také neznamená, že je navržená součást způsobilá pro provoz na silnici.",
      "nextStep": "Vybrat jeden konkrétní díl a doložit jeho potřebu. Teprve po stanovení funkce, rozhraní a ověřitelného zadání lze rozhodnout, zda má vzniknout samostatný projekt jeho vývoje."
    }
  },
  {
    "id": "future-vehicles",
    "name": "Future Vehicle Projects",
    "label": "Budoucí automobily PGEX",
    "status": "Koncept",
    "stage": "concept",
    "description": "Prostor pro vlastní automobilové koncepty a zkoumání jejich konstrukce. Revenant představuje vizuální směr supersportu a témata pro další technické rozpracování.",
    "topics": [
      "Vlastní vozidla",
      "Design a uspořádání",
      "Revenant"
    ],
    "scope": "Vizuální koncept neznamená postavený ani technicky ověřený automobil.",
    "href": "/revenant",
    "linkLabel": "Prozkoumat koncept Revenant",
    "image": "/vehicles/xenos-x2.jpg",
    "imageAlt": "Designový koncept supersportu Revenant",
    "width": 1536,
    "height": 1024
  }
];

export const sakuraResearch = [
  { name: "KAGEON AI", description: "Vlastní jazykové modely a AI výzkum. Experimentální práce probíhá v KAGEON MODEL LAB; specializovaná platforma se připravuje.", status: "Experimentální výzkum" },
  { name: "Computing & Hardware", description: "Dlouhodobý výzkumný směr CPU, GPU, serverů a počítačových komponent.", status: "Dlouhodobá vize" },
  { name: "Robotics & Automation", description: "Budoucí robotické systémy, elektronika a automatizace.", status: "Dlouhodobá vize" },
  { name: "Space Research", description: "Dlouhodobý výhled kosmonautiky a vesmírných technologií.", status: "Dlouhodobá vize" },
  { name: "Advanced Research", description: "Prostor pro další technologická témata podle konkrétních zadání a podkladů.", status: "Dlouhodobá vize" },
];
