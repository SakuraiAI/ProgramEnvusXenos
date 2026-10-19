from pathlib import Path
from xml.sax.saxutils import escape
import json
import argparse
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--output', type=Path, required=True, help='Private PDF output path outside public/ and dist/.')
parser.add_argument('--draft', action='store_true')
args = parser.parse_args()
OUT = args.output.expanduser().resolve()
if any(folder == OUT or folder in OUT.parents for folder in ((ROOT / 'public').resolve(), (ROOT / 'dist').resolve())):
    parser.error('Tuning PDFs are private exports; choose an output outside public/ and dist/.')
DATA = json.loads((ROOT / 'src/tuning-prices.json').read_text(encoding='utf-8'))
RATES = json.loads((ROOT / 'src/tuning-rates.json').read_text(encoding='utf-8'))
POLICY = json.loads((ROOT / 'src/tuning-pricing-policy.json').read_text(encoding='utf-8'))
INTRO_PAGES = 2
pdfmetrics.registerFont(TTFont('Segoe', r'C:\Windows\Fonts\segoeui.ttf'))
pdfmetrics.registerFont(TTFont('SegoeBold', r'C:\Windows\Fonts\segoeuib.ttf'))
pdfmetrics.registerFontFamily('Segoe', normal='Segoe', bold='SegoeBold')
ink = colors.HexColor('#242628')
muted = colors.HexColor('#555b60')
styles = {
    'title': ParagraphStyle('title', fontName='SegoeBold', fontSize=25, leading=31, textColor=ink, spaceAfter=16),
    'h2': ParagraphStyle('h2', fontName='SegoeBold', fontSize=15, leading=21, textColor=ink, spaceBefore=17, spaceAfter=10),
    'body': ParagraphStyle('body', fontName='Segoe', fontSize=10, leading=15, textColor=ink, spaceAfter=11),
    'small': ParagraphStyle('small', fontName='Segoe', fontSize=9, leading=13, textColor=muted, spaceAfter=12),
    'cell': ParagraphStyle('cell', fontName='Segoe', fontSize=9, leading=12.5, textColor=ink),
    'name': ParagraphStyle('name', fontName='SegoeBold', fontSize=9, leading=12.5, textColor=ink),
    'price': ParagraphStyle('price', fontName='SegoeBold', fontSize=9, leading=12.5, textColor=ink, alignment=TA_RIGHT),
    'thead': ParagraphStyle('thead', fontName='SegoeBold', fontSize=8, leading=12, textColor=colors.white),
}

def p(text, style='body'):
    return Paragraph(escape(text.replace('–', '-').replace('—', '-').replace('‑', '-')), styles[style])

def price(item):
    if item['priceType'] not in ('fixed', 'hourly'):
        raise ValueError(f"Unsupported price type: {item['priceType']}")
    amount = f"{item['price']:,}".replace(',', '\u00a0') + '\u00a0Kč'
    return amount + '/h' if item['priceType'] == 'hourly' else amount

def styled_table(rows, widths, padding=7):
    table = Table(rows, colWidths=widths, repeatRows=1, hAlign='LEFT')
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#202426')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f5f4f0')]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 9), ('RIGHTPADDING', (0, 0), (-1, -1), 9),
        ('TOPPADDING', (0, 0), (-1, -1), padding), ('BOTTOMPADDING', (0, 0), (-1, -1), padding),
        ('LINEBELOW', (0, 0), (-1, -1), .4, colors.HexColor('#d9d8d1')),
    ]))
    return table

def frame(canvas, doc):
    w, h = A4
    canvas.saveState()
    canvas.setFillColor(colors.HexColor('#111315'))
    canvas.rect(0, h - 70, w, 70, fill=1, stroke=0)
    canvas.setFont('SegoeBold', 25)
    canvas.setFillColor(colors.HexColor('#d4b375'))
    canvas.drawString(42, h - 44, 'PGEX')
    canvas.setFont('Segoe', 10)
    canvas.setFillColor(colors.white)
    canvas.drawRightString(w - 42, h - 40, 'CUSTOM & PERFORMANCE')
    canvas.setStrokeColor(colors.HexColor('#c8a465'))
    canvas.setLineWidth(1.3)
    canvas.line(0, h - 70, w, h - 70)
    canvas.setStrokeColor(colors.HexColor('#d7d7d2'))
    canvas.setLineWidth(.5)
    canvas.line(42, 44, w - 42, 44)
    canvas.setFillColor(muted)
    canvas.setFont('Segoe', 8)
    canvas.drawString(42, 29, ('NAVRH K ODSOUHLASENI | ' if args.draft else '') + 'programenvusxenos.com/tuning | 19. 10. 2026')
    canvas.drawRightString(w - 42, 29, f'{doc.page} / {len(DATA) + INTRO_PAGES}')
    canvas.restoreState()

story = [
    p('Pevné ceny práce - návrh' if args.draft else 'Pevné ceny práce', 'title'),
    p(POLICY['lead']),
    p('Sazby pro další dohodnutou práci', 'h2'),
]
rate_rows = [[p('PRÁCE', 'thead'), p('SAZBA', 'thead'), p('ROZSAH', 'thead')]]
for rate in RATES:
    rate_rows.append([p(rate['name'], 'name'), p(price({**rate, 'priceType': 'hourly'}), 'price'), p(rate['description'], 'cell')])
story.extend([
    styled_table(rate_rows, [154, 94, 263], padding=10),
    Spacer(1, 10),
    p('Jak číst ceny', 'h2'),
    p(POLICY['scope']),
    p(POLICY['extras']),
    p(POLICY['approval']),
    PageBreak(),
    p('Přehled služeb', 'title'),
    p(f'{sum(len(group["items"]) for group in DATA)} položek ve {len(DATA)} kategoriích. Vyberte oblast podle zamýšlené úpravy.', 'small'),
])
for index, group in enumerate(DATA):
    row = Table([[p(group['category'], 'cell'), p(str(index + INTRO_PAGES + 1), 'price')]], colWidths=[470, 41])
    row.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 8), ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LINEBELOW', (0, 0), (-1, -1), .3, colors.HexColor('#e3e3df')),
    ]))
    story.append(row)
story.extend([
    Spacer(1, 15), p('Domluva zakázky', 'h2'),
    p('Napište značku, model, rok, motorizaci, současné úpravy a požadovaný výsledek. Termín z poptávky platí až po potvrzení. Před zahájením si odsouhlasíme práci, díly, rozpočet a potřebné ověření.'),
    p('Suchdolská 710, Horoměřice | +420 731 990 599 | programenvus@gmail.com', 'small'),
])
for index, group in enumerate(DATA):
    title = p(group['category'], 'title')
    description = p(group['description'], 'small')
    rows = [[p('SLUŽBA', 'thead'), p('ROZSAH', 'thead'), p('CENA PRÁCE', 'thead')]]
    for item in group['items']:
        unit = f"za blok {item['workHours']} h" if item.get('workHours') else 'za uvedený úkon'
        price_cell = Paragraph(escape(price(item)) + '<br/><font size=8>' + escape(unit) + '</font>', styles['price'])
        rows.append([p(item['name'], 'name'), p(item['scope'], 'cell'), price_cell])
    ending = [Spacer(1, 15), p(group['note'], 'small')]
    if index == len(DATA) - 1:
        ending.append(p('Montáž sama o sobě nepotvrzuje schválení vozidla pro silniční provoz. Potřebnou dokumentaci a podmínky použití domluvíme pro konkrétní projekt.', 'small'))
    # Keep the category and its note on one page, so the contents stays accurate.
    for padding in (7, 6, 5):
        table = styled_table(rows, [160, 248, 103], padding=padding)
        block = [title, description, table, *ending]
        height = sum(flow.wrap(511, 1000)[1] + flow.getSpaceBefore() + flow.getSpaceAfter() for flow in block)
        if height <= 672:
            break
    else:
        raise ValueError(f'Category needs a new page layout: {group["category"]} ({height:.1f} pt)')
    story.extend([PageBreak(), *block])

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=94, bottomMargin=61,
                        title='PGEX Ceník tuningu', author='PGEX', pageCompression=1)
doc.build(story, onFirstPage=frame, onLaterPages=frame)
print(OUT)
