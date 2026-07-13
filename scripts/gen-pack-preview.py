"""Render blurred "see inside" preview images for a subject's 4 product PDFs.

Run from the repo root:  python3 scripts/gen-pack-preview.py
Needs:  python3 -m pip install pypdfium2 Pillow

Reads the real PDFs from private/pdfs/<SRC> and writes watermarked JPEGs to
public/previews/<OUT>. NOTHING from private/ is ever shipped, only these
lossy, blurred, watermarked previews. Sellable content stays blurred:
the Forecast's inner pages are FULL-blurred (they hold the 2026 prediction
table); the practice products keep a thin title strip sharp (keep_top).

To preview another subject: point SRC/OUT at it, adjust PRODUCTS (page indices
+ keep_top per page), run, eyeball every image, then add a manifest entry to
src/lib/pack-previews.ts.
"""
import os
import pypdfium2 as pdfium
from PIL import Image, ImageFilter, ImageDraw, ImageFont

SRC = "private/pdfs/o-level/chemistry-pure"
OUT = "public/previews/o-level/chemistry-pure"
os.makedirs(OUT, exist_ok=True)
TARGET_W = 800
SCALE = 2.0

def render(pdf, idx):
    img = pdf[idx].render(scale=SCALE).to_pil().convert("RGB")
    w, h = img.size
    return img.resize((TARGET_W, int(h * TARGET_W / w)), Image.LANCZOS)

def font(px):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf",
              "/System/Library/Fonts/Helvetica.ttc"]:
        try: return ImageFont.truetype(p, px)
        except Exception: pass
    return ImageFont.load_default()

def watermark(img):
    w, h = img.size
    ov = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    f = font(int(w * 0.05))
    for y in range(-int(h*0.1), h, int(h * 0.20)):
        for x in range(-w, w * 2, int(w * 0.44)):
            d.text((x, y), "PREVIEW", fill=(255, 255, 255, 32), font=f)
    return Image.alpha_composite(img.convert("RGBA"), ov).convert("RGB")

def blur(img, keep_top=0.0, radius=15):
    w, h = img.size
    out = img.filter(ImageFilter.GaussianBlur(radius))
    if keep_top > 0:
        t = int(h * keep_top)
        out.paste(img.crop((0, 0, w, t)), (0, 0))
    return out

# product: (file, [(pageIndex, keep_top | None=cover-sharp)])
PRODUCTS = {
    "forecast":  ("forecast.pdf",         [(0, None), (2, 0.0), (10, 0.0), (16, 0.0)]),
    "companion": ("companion.pdf",        [(0, None), (2, 0.10), (8, 0.10)]),
    "vault":     ("vault.pdf",            [(0, None), (2, 0.10), (8, 0.10)]),
    "rehearsal": ("rehearsal-paper1.pdf", [(0, None), (1, 0.10), (2, 0.10)]),
}

# clear old
for old in os.listdir(OUT):
    os.remove(os.path.join(OUT, old))

for key, (fname, specs) in PRODUCTS.items():
    pdf = pdfium.PdfDocument(os.path.join(SRC, fname))
    n = len(pdf)
    for i, (pidx, keep) in enumerate(specs):
        if pidx >= n:
            continue
        img = render(pdf, pidx)
        out = watermark(img if keep is None else blur(img, keep_top=keep))
        path = os.path.join(OUT, f"{key}-{i+1}.jpg")
        out.save(path, quality=70, optimize=True)
        print(f"{key}-{i+1}.jpg  p{pidx}  {os.path.getsize(path)//1024}KB")
    pdf.close()
