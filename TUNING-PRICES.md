# Tuningový ceník

## Schválené pevné ceny práce

Provozovatel 19. 10. 2026 schválil celý předložený ceník pokynem „Schvaluji ceny i bloky hodin, zveřejni je“. Ceník má 88 položek: 45 pevných cen za vymezený úkon a 43 pevných cen za pracovní blok s uvedenými hodinami. Díly a další náklady se hradí zvlášť. Schválení navazuje na požadavek „chci pevnou cenu“ a upřesnění „za práci, díly zvlášť“. Podklad, výpočty, původní ceny, čitelný přehled a záznam schválení jsou v D:/ProgramEnvusXenos-podklady/pevne-ceny-prace-2026-10-19.

Nové částky za bloky jsou přesný součin navržených hodin a schválené sazby. Nové montážní ceny jsou schválené pro vymezený rozsah; počty hodin u bloků nejsou normy výrobců ani záruka dokončení celého projektu. Částky dříve označené „od“ jsou zachované a nově pevné pro popsaný rozsah. U ECU 7 900 Kč a DSG 4 490 Kč se mění obsah: licence a externí měření jsou nyní zvlášť. Cena za blok není cenou celé dokončené přestavby.

Veřejné položky používají priceType fixed, pricingKind service nebo work-package a u bloků workHours. Jednotku ceny zobrazuje web i PDF. Společný text k rozsahu a samostatně placeným nákladům je v src/tuning-pricing-policy.json. Generátor podporuje --draft a --output pro soukromý návrh PDF.

## Vývoj ceníku před zavedením pevných cen

Ceny byly schváleny provozovatelem v konverzaci 19. 10. 2026 pokynem „Schvaluji ceny, dej je na web.“ Výchozí publikace obsahovala 115 položek podle interního návrhu. Následný pokyn „takže tam dej jenom tuning nic jiného“ odděluje tuning od klasického servisu.

Po oddělení běžného servisu zůstalo 88 položek v 11 kategoriích. Obsahuje výkonové a vzhledové úpravy, sportovní podvozky, kalibrace a měření při ladění, zakázkové stavby a motorsport. Běžná diagnostika závad, pneuservis, běžná geometrie, opravy a repase, ochrana povrchu a montáž palubní kamery byly odstraněny. Klasický autoservis se tím nemění.

Odstraněná ID: 01.02, 01.03, 01.04, 01.05, 01.06, 01.07, 02.10, 04.09, 05.06, 07.07, 08.02, 08.03, 08.07, 09.01, 09.02, 09.03, 09.04, 09.05, 09.06, 09.09, 09.10, 09.11, 09.12, 10.05, 10.07, 10.10, 11.07. Návrh úpravy 01.08 je u kompletních staveb, výchozí měření výkonu 01.09 u ECU/TCU a měření. Upřesněné názvy vymezují sportovní a tuningové provedení. Při tomto kroku zůstaly částky a způsob účtování ponechaných položek zachované. Následně byly nahrazeny schválenými pevnými cenami a rozsahy popsanými výše. Okruhová příprava zahrnuje úpravy místo běžné údržby.

Zdrojový návrh vznikl porovnáním dodaného PGEX_tuning_katalog_a_pruzkum_V2.pdf, původního katalogu V1 a přímých ceníků konkurence. Konkurenční průzkum ani interní návrh se veřejně nevystavují. Identifikátory a sourcePage zachovávají vazbu na původní V1; nové položky pocházejí ze schváleného návrhu. Telefonická domluva 01.01 zůstává odstraněná.

src/tuning-rates.json je společný zdroj hodinových sazeb pro web a zákaznické PDF: montáž tuningových dílů 990 Kč/h, měření a rozbor dat 1 290 Kč/h, stavba a úpravy motoru 1 490 Kč/h a elektroinstalace pro tuning 1 490 Kč/h. Sazby se vztahují k tuningovým úpravám. Stejná práce zahrnutá v položce se znovu neúčtuje; totéž platí pro analýzu vážení v balíčku s nastavením. Licence a externí válcové měření ECU se podle nové cenové politiky hradí zvlášť. Přesný rozsah a dostupnost úpravy se potvrzuje v nabídce.

Web a zákaznické PDF používají stejné JSON údaje. Po změně cen obnovte PDF příkazem python scripts/generate_tuning_pdf.py (Python s ReportLab, Windows s fonty Segoe UI). Výstup: public/dokumenty/pgex-tuning-cenik.pdf. Datum v PDF odpovídá schválené verzi; při vydání nového ceníku aktualizujte i toto datum. Po změně ověřte stránkování, obsah a čitelnost PDF. Úvodní dvě strany obsahují sazby a obsah, následuje jedna strana pro každou kategorii.

Z archivu `PGEX_nejnovejsi_dokumenty.zip` byly aktualizovány obchodní podmínky a protokol o přijetí reklamace. V podmínkách jsou doplněné stávající kontakty webu a údaje v patičce. Návrhové označení, chybějící datum účinnosti a odkaz na informace o osobních údajích zůstávají zachované. Interní evidence, tiskové podklady a ostatní provozní šablony nejsou veřejně vystavené.
