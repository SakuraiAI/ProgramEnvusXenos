# Tuningový ceník

Zdroj: uživatelem dodaný `PGEX_kompletni_tuning_cenik_V1.pdf`, 19. 10. 2026, tabulky na stranách 4–15. Ceny a dostupnost všech služeb potvrdil provozovatel v konverzaci 19. 10. 2026. Zdrojový pracovní dokument se veřejně nevystavuje.

`src/tuning-prices.json` obsahuje 110 položek v 12 kategoriích. Zachovává kód a stranu zdroje, přesný rozsah práce, cenu a druh účtování. Hodinová cena, cena od, bezplatná domluva a individuální kalkulace se zobrazují samostatně. Metadata realizace jsou převzatá ze zdroje; na webu se nevypisují.

Web a zákaznické PDF používají stejné JSON údaje. Po změně cen obnovte PDF příkazem `python scripts/generate_tuning_pdf.py` (Python s ReportLab, Windows s fonty Segoe UI). Výstup: `public/dokumenty/pgex-tuning-cenik.pdf`. Datum v PDF odpovídá schválené verzi; při vydání nového ceníku aktualizujte i toto datum. Po změně ověřte stránkování a čitelnost PDF.

Z archivu `PGEX_nejnovejsi_dokumenty.zip` byly aktualizovány obchodní podmínky a protokol o přijetí reklamace. V podmínkách jsou doplněné stávající kontakty webu a údaje v patičce. Návrhové označení, chybějící datum účinnosti a odkaz na informace o osobních údajích zůstávají zachované. Interní evidence, tiskové podklady a ostatní provozní šablony nejsou veřejně vystavené.
