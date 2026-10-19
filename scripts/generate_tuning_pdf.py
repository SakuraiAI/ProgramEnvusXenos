from pathlib import Path
from xml.sax.saxutils import escape
import json
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/dokumenty/pgex-tuning-cenik.pdf'
DATA = json.loads((ROOT / 'src/tuning-prices.json').read_text(encoding='utf-8'))
pdfmetrics.registerFont(TTFont('Segoe', r'C:\Windows\Fonts\segoeui.ttf'))
pdfmetrics.registerFont(TTFont('SegoeBold', r'C:\Windows\Fonts\segoeuib.ttf'))
pdfmetrics.registerFontFamily('Segoe', normal='Segoe', bold='SegoeBold')
ink = colors.HexColor('#242628')
gold = colors.HexColor('#a17b37')
muted = colors.HexColor('#555b60')
styles = {
    'title': ParagraphStyle('title', fontName='SegoeBold', fontSize=27, leading=34, textColor=ink, spaceAfter=17),
    'h2': ParagraphStyle('h2', fontName='SegoeBold', fontSize=15, leading=21, textColor=ink, spaceBefore=17, spaceAfter=10),
    'body': ParagraphStyle('body', fontName='Segoe', fontSize=10, leading=15, textColor=ink, spaceAfter=11),
    'small': ParagraphStyle('small', fontName='Segoe', fontSize=9, leading=13, textColor=muted, spaceAfter=12),
    'cell': ParagraphStyle('cell', fontName='Segoe', fontSize=9, leading=13, textColor=ink),
    'name': ParagraphStyle('name', fontName='SegoeBold', fontSize=9, leading=13, textColor=ink),
    'price': ParagraphStyle('price', fontName='SegoeBold', fontSize=9, leading=13, textColor=ink, alignment=TA_RIGHT),
    'thead': ParagraphStyle('thead', fontName='SegoeBold', fontSize=8, leading=12, textColor=colors.white),
}

def p(text, style='body'):
    return Paragraph(escape(text.replace('–', '-').replace('—', '-').replace('‑', '-')), styles[style])

def price(item):
    if item['priceType']=='free': return 'Zdarma'
    if item['priceType']=='individual': return 'Individuálně'
    amount=f"{item['price']:,}".replace(',', '\u00a0')+'\u00a0Kč'
    return amount+'/h' if item['priceType']=='hourly' else 'od '+amount

def frame(canvas, doc):
    w,h=A4
    canvas.saveState()
    canvas.setFillColor(colors.HexColor('#111315'))
    canvas.rect(0,h-70,w,70,fill=1,stroke=0)
    canvas.setFont('SegoeBold',25);canvas.setFillColor(colors.HexColor('#d4b375'))
    canvas.drawString(42,h-44,'PGEX')
    canvas.setFont('Segoe',10);canvas.setFillColor(colors.white)
    canvas.drawRightString(w-42,h-40,'CUSTOM & PERFORMANCE')
    canvas.setStrokeColor(colors.HexColor('#c8a465'));canvas.setLineWidth(1.3)
    canvas.line(0,h-70,w,h-70)
    canvas.setStrokeColor(colors.HexColor('#d7d7d2'));canvas.setLineWidth(.5)
    canvas.line(42,44,w-42,44)
    canvas.setFillColor(muted);canvas.setFont('Segoe',8)
    canvas.drawString(42,29,'programenvusxenos.com/tuning  |  19. 10. 2026')
    canvas.drawRightString(w-42,29,f'{doc.page} / {len(DATA) + 1}')
    canvas.restoreState()

story=[p('Ceník tuningu','title'),p('PGEX Custom & Performance nabízí úpravy motoru, podvozku, brzd, karoserie i interiéru. Tento ceník uvádí cenu práce a rozsah jednotlivých služeb. Konkrétní provedení a konečnou nabídku domluvíme podle vozidla.'),
       p('Jak číst ceny','h2'),p('Mechanická práce: 990 Kč/h. U samostatných montáží je uvedená cena „od“ za popsaný rozsah. Specializované úpravy a stavby oceňujeme individuálně. Pevná položka a hodinová sazba jsou alternativní způsoby účtování stejné práce; automaticky se nesčítají.'),
       p('Ceny „od“ předpokládají kompatibilní vůz, běžný přístup, funkční spoje a vhodnou montážní sadu. Díly, kapaliny, montážní materiál, licence, externí měření a schvalovací úkony nejsou zahrnuté, pokud položka výslovně neuvádí jinak. Vícepráce a změny ceny nejprve odsouhlasíme.'),
       p('Obsah ceníku','h2')]
for idx,g in enumerate(DATA):
    t=Table([[p(g['category'],'cell'),p(str(idx+2),'price')]],colWidths=[470,41])
    t.setStyle(TableStyle([('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4),('LINEBELOW',(0,0),(-1,-1),.3,colors.HexColor('#e3e3df'))]))
    story.append(t)
story.extend([Spacer(1,15),p('Domluva zakázky','h2'),p('Napište značku, model, rok, motorizaci, současné úpravy a požadovaný výsledek. Termín z poptávky platí až po potvrzení. Před zahájením si odsouhlasíme práci, díly, rozpočet a potřebné ověření.'),p('Suchdolská 710, Horoměřice\n+420 731 990 599 | programenvus@gmail.com','small')])
for index,g in enumerate(DATA):
    story.extend([PageBreak(),p(g['category'],'title'),p(g['description'],'small')])
    rows=[[p('SLUŽBA','thead'),p('ROZSAH PRÁCE','thead'),p('CENA PRÁCE','thead')]]
    for item in g['items']:
        rows.append([p(item['name'],'name'),p(item['scope'],'cell'),p(price(item),'price')])
    table=Table(rows,colWidths=[160,248,103],repeatRows=1,hAlign='LEFT')
    table.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),colors.HexColor('#202426')),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#f5f4f0')]),
        ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),
        ('TOPPADDING',(0,0),(-1,-1),10),('BOTTOMPADDING',(0,0),(-1,-1),10),
        ('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#d9d8d1')),
    ]))
    story.extend([table,Spacer(1,18),p(g['note'],'small')])
    if index==11:
        story.append(p('Montáž sama o sobě nepotvrzuje schválení vozidla pro silniční provoz. Potřebnou dokumentaci a podmínky použití domluvíme pro konkrétní projekt.','small'))
doc=SimpleDocTemplate(str(OUT),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=94,bottomMargin=61,title='PGEX Ceník tuningu',author='PGEX',pageCompression=1)
doc.build(story,onFirstPage=frame,onLaterPages=frame)
print(OUT)
