// Render every physics SVG the way a student sees it: at phone width (~340px)
// flattened onto the app's dark background, as a PNG. Feed the PNGs to a vision
// pass (your own eyes, or a review agent) to catch what the text linter cannot:
// swapped labels, wrong curves, arrows pointing the wrong way, clutter.
//
// Requires sharp:  npm i -D sharp
// Usage:  node scripts/render-svgs.mjs [globPrefix]
//   node scripts/render-svgs.mjs            # all fig-*.svg
//   node scripts/render-svgs.mjs fig-02     # just chapter 02
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SRC = "public/physics/images";
const OUT = "scratch/svg-previews";
const WIDTH = 340; // the width a figure occupies on a phone
const BG = { r: 36, g: 27, b: 58, alpha: 1 }; // the app's dark purple screen

const prefix = process.argv[2] ?? "fig-";
mkdirSync(OUT, { recursive: true });
const files = readdirSync(SRC).filter((f) => f.endsWith(".svg") && f.startsWith(prefix)).sort();

let ok = 0;
for (const f of files) {
  try {
    const svg = readFileSync(join(SRC, f));
    // scale so the rendered width is WIDTH regardless of the SVG's viewBox
    const meta = await sharp(svg).metadata();
    const scale = meta.width ? WIDTH / meta.width : 2;
    const png = await sharp(svg, { density: Math.round(72 * scale * 2) })
      .resize({ width: WIDTH })
      .flatten({ background: BG })
      .png()
      .toBuffer();
    writeFileSync(join(OUT, f.replace(/\.svg$/, ".png")), png);
    ok++;
  } catch (e) {
    console.log(`FAILED ${f}: ${e.message}`);
  }
}
console.log(`Rendered ${ok}/${files.length} previews into ${OUT}/ at ${WIDTH}px on the dark app background.`);
