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
    "id": "engine-development",
    "name": "Engine Development",
    "label": "Motor",
    "status": "Plánovaný výzkum",
    "stage": "planned",
    "description": "Výzkumný směr zaměřený na motor jako zdroj výkonu: jeho konstrukci, výměnu energie, mazání, chlazení a chování při různém zatížení.",
    "topics": [
      "Konstrukce motoru",
      "Účinnost a zatížení",
      "Mazání a chlazení"
    ],
    "scope": "Plánovaný výzkum motorových systémů bez deklarovaných parametrů vlastního motoru.",
    "detailSlug": "motor",
    "href": "/technologie/motor",
    "image": "/technology/pgex-engine.webp",
    "imageAlt": "Koncepční technická ilustrace motoru a jeho vnitřních mechanických částí",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Motor převádí vstupní energii na mechanickou práci. Jeho návrh propojuje geometrii, pevnost pohyblivých částí, tření, výměnu tepla a řízení provozních stavů. U spalovacího motoru do těchto vazeb vstupují také plnění válců, spalovací proces a emise; posouzení vyžaduje popsané provozní podmínky.",
        "PGEX chce tuto oblast rozvíjet od technických podkladů a porovnávání konstrukčních variant. Motor zde řešíme jako samostatný zdroj výkonu. Převod výkonu na kola patří do oblasti převodovek, zatímco souhru s ostatními částmi vozu sleduje výkonový vývoj. Konkrétní typ a rozsah případného vlastního návrhu určí až samostatné zadání."
      ],
      "focus": [
        {
          "title": "Mechanická konstrukce a pohyb",
          "text": "Zkoumat uspořádání hlavních částí, přenos sil a požadavky na uložení. U pohyblivých součástí porovnávat zatížení, vyvážení, tření a výrobní možnosti společně s nároky na montáž a údržbu."
        },
        {
          "title": "Energetické a tepelné souvislosti",
          "text": "Popsat vstupní energii, užitečnou práci a hlavní ztráty. Chlazení i mazání hodnotit podle rozsahu zatížení a teplotních stavů, včetně zahřívání a opakovaných změn výkonu."
        },
        {
          "title": "Řízení provozu a budoucí měření",
          "text": "Stanovit potřebné snímané veličiny a podmínky pro porovnání variant. Výpočtové předpoklady oddělovat od naměřených hodnot; případné motorové zkoušky připravovat až podle dostupného vybavení a odborného posouzení."
        }
      ],
      "questions": [
        "Jaký provozní rozsah a účel má uvažovaný motor pokrývat?",
        "Které mechanické, tepelné a třecí ztráty nejvíce ovlivňují návrh?",
        "Jaké vstupní údaje a zkoušky by umožnily věrohodně porovnat varianty?"
      ],
      "outputs": [
        "Zadání motorového systému s provozními stavy a konstrukčními rozhraními.",
        "Porovnání koncepčních variant s popisem energetických a tepelných vazeb.",
        "Plán potřebných výpočtů, měření a podmínek pro případný prototyp."
      ],
      "limits": "Oblast je plánovaným dlouhodobým výzkumem. PGEX zde nepředstavuje hotový vlastní motor, schválenou pohonnou jednotku ani naměřený výkon, spotřebu nebo životnost. Případné provozní použití by vyžadovalo samostatné technické i legislativní posouzení.",
      "nextStep": "Vymezit jeden motorový systém a shromáždit doložitelné vstupy pro jeho studii. O samostatném projektu lze rozhodnout po stanovení účelu, rozsahu a způsobu ověření."
    }
  },
  {
    "id": "chassis-development",
    "name": "Chassis Development",
    "label": "Podvozek",
    "status": "Plánovaný výzkum",
    "stage": "planned",
    "description": "Plánovaný výzkum zavěšení kol, odpružení, tlumení a řízení. Cílem je porozumět kontaktu pneumatik s vozovkou a chování celého vozidla.",
    "topics": [
      "Geometrie zavěšení",
      "Odpružení a tlumení",
      "Jízdní dynamika"
    ],
    "scope": "Koncepční výzkum podvozku, nikoli nabídka vyvinutého nebo schváleného podvozkového kompletu.",
    "detailSlug": "podvozek",
    "href": "/technologie/podvozek",
    "image": "/technology/pgex-chassis.webp",
    "imageAlt": "Koncepční technická ilustrace automobilového podvozku se zavěšením kol a pružicími jednotkami",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Podvozek určuje, jak se síly mezi vozovkou a vozidlem přenášejí při zatáčení, brzdění i přejezdu nerovností. Geometrie zavěšení, pneumatiky, pružiny, tlumiče a řízení tvoří provázaný systém. Úprava jedné hodnoty může změnit komfort, odezvu řízení i dostupnou přilnavost v odlišných situacích.",
        "Výzkumný záměr PGEX se soustředí na tato konkrétní rozhraní mezi kolem, zavěšením a karoserií. Oproti obecné konstrukční oblasti jde především o pohyb kola a dynamiku vozu. Budoucí návrhy mají vycházet z účelu vozidla, jeho hmotností a popsaných podmínek použití."
      ],
      "focus": [
        {
          "title": "Kinematika a geometrie zavěšení",
          "text": "Zkoumat vedení kola při propružení a zatáčení, prostorová omezení a návaznost na řízení. Posuzovat změny geometrie v celém rozsahu pohybu, nikoli pouze v jedné statické poloze."
        },
        {
          "title": "Pružení, tlumení a zatížení",
          "text": "Popsat souvislost mezi rozložením hmotnosti, pohybem karoserie a zatížením pneumatik. Varianty pružení a tlumení porovnávat podle jízdních situací i přenosu sil do konstrukce."
        },
        {
          "title": "Modelování a ověřování chování",
          "text": "Připravit postupné srovnání kinematických a dynamických modelů. Pro případné měření určit sledované veličiny a opakovatelné podmínky, aby šlo odlišit vlastnost návrhu od vlivu pneumatik, povrchu nebo řidiče."
        }
      ],
      "questions": [
        "Jaké jízdní situace a zatížení mají určovat návrh podvozku?",
        "Jak se geometrie a změny zatížení promítají do kontaktu pneumatik s vozovkou?",
        "Které předpoklady modelu je nutné ověřit před rozhodnutím o konstrukci?"
      ],
      "outputs": [
        "Zadání podvozku s hmotnostními, prostorovými a jízdními požadavky.",
        "Koncepční studie zavěšení a porovnání variant pružení a tlumení.",
        "Plán simulací a budoucího měření s popisem omezení použitých modelů."
      ],
      "limits": "Jde o plánovaný dlouhodobý výzkum bez hotového vlastního podvozku a doložených jízdních výsledků. Popsané směry nepředstavují potvrzení bezpečnosti ani schválení změn pro silniční provoz. Zásahy do řízení, zavěšení a brzd vyžadují odborné posouzení konkrétního vozidla.",
      "nextStep": "Připravit zadání jedné nápravy nebo vybrané jízdní otázky. Konkrétní projekt má následovat až po zajištění potřebných rozměrů, zatížení a realistického postupu ověřování."
    }
  },
  {
    "id": "transmission-development",
    "name": "Transmission Development",
    "label": "Převodovka",
    "status": "Plánovaný výzkum",
    "stage": "planned",
    "description": "Výzkumný směr přenosu výkonu mezi motorem a koly: převodové poměry, ozubené soukolí, řazení, mazání a návaznost na celé hnací ústrojí.",
    "topics": [
      "Převodové poměry",
      "Soukolí a řazení",
      "Přenos točivého momentu"
    ],
    "scope": "Plánovaná studie převodových systémů bez nabídky hotové vlastní převodovky.",
    "detailSlug": "prevodovka",
    "href": "/technologie/prevodovka",
    "image": "/technology/pgex-transmission.webp",
    "imageAlt": "Koncepční technická ilustrace převodovky s ozubenými soukolími a hřídeli",
    "width": 1600,
    "height": 900,
    "linkLabel": "Prozkoumat oblast",
    "detail": {
      "intro": [
        "Převodovka mění vztah mezi otáčkami a točivým momentem a přizpůsobuje práci motoru požadavkům vozidla. Výběr převodů souvisí s rozjezdem, zrychlením, ustálenou jízdou i tepelnými ztrátami. Mechanický návrh zároveň musí řešit zatížení zubů, hřídelů, ložisek a skříně.",
        "PGEX chce tuto oblast zkoumat jako vlastní technický celek s jasnými vstupy od motoru a výstupy do hnacího ústrojí. Výzkum má oddělit volbu převodového uspořádání od detailní konstrukce a řízení řazení. Nejde o příslib určitého počtu stupňů, únosnosti ani konkrétního typu dosud nevyvinuté převodovky."
      ],
      "focus": [
        {
          "title": "Převodové uspořádání a provozní rozsah",
          "text": "Odvozovat převodové poměry od charakteristiky motoru, kol a zamýšleného provozu. Porovnávat návaznost stupňů, možnosti rozjezdu a účinnost spolu s prostorovými a hmotnostními omezeními."
        },
        {
          "title": "Soukolí, uložení a mazání",
          "text": "Popsat zatěžovací stavy ozubení, hřídelů a ložisek včetně proměnlivého zatížení. Uvažované mazání a odvod tepla posuzovat společně se skříní, provozními otáčkami a údržbou."
        },
        {
          "title": "Řazení a systémová rozhraní",
          "text": "Zkoumat přerušení či přenos momentu při změně převodu a návaznost na spojku, ovládání a případnou elektroniku. Stanovit chování při neprovedeném řazení a podmínky pro budoucí ověřování funkce."
        }
      ],
      "questions": [
        "Jaký rozsah otáček a momentu má zamýšlený převodový systém přenášet?",
        "Které uspořádání nejlépe odpovídá účelu vozu a jeho zástavbovým možnostem?",
        "Jak by se ověřovala účinnost, tepelné chování a opakovatelnost řazení?"
      ],
      "outputs": [
        "Funkční zadání převodovky s provozními stavy a rozhraními hnacího ústrojí.",
        "Koncepční porovnání převodů, mechanického uspořádání a způsobu ovládání.",
        "Přehled potřebných pevnostních a tepelných výpočtů a budoucích zkoušek."
      ],
      "limits": "Oblast je plánovaným dlouhodobým výzkumem. Vlastní převodovka PGEX není představena jako hotový výrobek a nemá zde deklarovanou únosnost, účinnost ani životnost. Údaje pro konkrétní návrh a jeho použitelnost by musely vzniknout samostatným výpočtem a ověřováním.",
      "nextStep": "Popsat požadavky jednoho hnacího ústrojí a připravit porovnání převodových variant. Samostatný projekt může navázat po vymezení vstupních zatížení, konstrukčních rozhraní a ověřovacích kritérií."
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
