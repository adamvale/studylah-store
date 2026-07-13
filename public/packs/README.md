# Homepage featured pack art

Drop real pack PNGs here and the homepage "Smarter … final-exam prep" band
(src/app/page.tsx → FeaturedPacks) swaps them in automatically. Until a file
exists, that pack falls back to the styled gradient card, so the section never
breaks.

## Naming (must match exactly)

    public/packs/<level>/<slug>.png

- `<level>` is `o-level` or `na-level`
- `<slug>` is the subject slug from src/lib/catalogue.ts (SUBJECTS)

The three subjects currently featured (edit FEATURED_PACKS to change them):

    public/packs/o-level/physics-pure.png
    public/packs/o-level/chemistry-pure.png
    public/packs/o-level/biology-pure.png

## Image guidance

- Square canvas, transparent background (the section is dark; a white
  background will show as a white tile).
- ~800×800 px is plenty; keep each file well under ~300 KB.
- The PNG carries all its own text (subject, code, level, year, line name),
  so the code renders the image only, no overlay.
