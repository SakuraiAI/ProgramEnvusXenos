# Tuningový ceník

Aktuální verze byla schválena provozovatelem v konverzaci 19. 10. 2026 pokynem „Schvaluji ceny, dej je na web.“ Navazuje na návrh `PGEX_navrh_tuning_ceniku_ke_kontrole.pdf`: 13 úprav, 6 doplnění a 96 nezměněných položek. Návrh vznikl porovnáním dodaného `PGEX_tuning_katalog_a_pruzkum_V2.pdf`, původního katalogu V1 a přímých ceníků konkurence. Konkurenční průzkum ani interní návrh se veřejně nevystavují.

`src/tuning-prices.json` obsahuje 115 položek v 12 kategoriích. Názvy, rozsahy, částky a způsob účtování odpovídají schválenému návrhu. Zachované identifikátory a `sourcePage` odkazují na původní V1; nové položky jsou doplnění schváleného návrhu. Telefonická domluva 01.01 zůstává odstraněná.

`src/tuning-rates.json` je společný zdroj hodinových sazeb pro web a zákaznické PDF: mechanika 990 Kč/h, odborná diagnostika a data 1 290 Kč/h, motorářina 1 490 Kč/h a zakázková autoelektrika 1 490 Kč/h. Sazba za čas se nepřičítá ke stejné práci již zahrnuté v položce. Stejně se znovu neúčtuje zahrnuté měření ECU ani analýza vážení v balíčku s nastavením. Přesný rozsah a dostupnost konkrétní úpravy se potvrzuje v nabídce.

Web a zákaznické PDF používají stejné JSON údaje. Po změně cen obnovte PDF příkazem `python scripts/generate_tuning_pdf.py` (Python s ReportLab, Windows s fonty Segoe UI). Výstup: `public/dokumenty/pgex-tuning-cenik.pdf`. Datum v PDF odpovídá schválené verzi; při vydání nového ceníku aktualizujte i toto datum. Po změně ověřte stránkování, obsah a čitelnost PDF. Úvodní dvě strany obsahují sazby a obsah, následuje jedna strana pro každou kategorii.

Z archivu `PGEX_nejnovejsi_dokumenty.zip` byly aktualizovány obchodní podmínky a protokol o přijetí reklamace. V podmínkách jsou doplněné stávající kontakty webu a údaje v patičce. Návrhové označení, chybějící datum účinnosti a odkaz na informace o osobních údajích zůstávají zachované. Interní evidence, tiskové podklady a ostatní provozní šablony nejsou veřejně vystavené.
