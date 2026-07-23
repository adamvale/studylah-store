// Stamp build steps into every figure, so the player can draw them on in
// teaching order instead of showing the finished diagram at once.
//
// The steps are mostly not invented here. These SVGs were hand-authored with
// section comments that already say what each group draws and in what order:
//
//   <!-- 1. the axes -->            <!-- beaker -->
//   <!-- 2. the readings -->        <!-- convection loop -->
//   <!-- 3. the best fit line -->   <!-- heat source arrow -->
//
// So a section comment starts a step and everything up to the next comment
// belongs to it: the author's own drawing order, recovered rather than guessed.
// That covers 340 of the 413 figures.
//
// The other 73 have no sections, and there position alone is a bad guide. In
// fig-02-01a the caption "distance = length of the whole path" is authored
// first, so building in file order labels the path before drawing it. For
// those, shapes are revealed before the text that describes them: nothing is
// labelled before it exists.
//
// This is why data-step is an ATTRIBUTE and not a wrapper. Reveal order and
// paint order are different things, and reordering elements to fix the first
// would change the second. Stamping attributes in place leaves every figure
// rendering exactly as it did.
//
// <defs>, <style>, <title> and <desc> are structural, never drawn, never
// stamped.
//
// Idempotent: a file that already has data-step is left alone, so this can be
// re-run when new figures land. --force restamps, --dry previews.
//
//   node scripts/stamp-svg-steps.mjs [--dry] [--force] [file.svg ...]

import fs from "node:fs";
import path from "node:path";

const DIR = "public/physics/images";
const dry = process.argv.includes("--dry");
const force = process.argv.includes("--force");
const only = process.argv
  .slice(2)
  .filter((a) => a.endsWith(".svg"))
  .map((f) => path.basename(f));

// Enough steps to read as building, few enough that it does not crawl.
const MAX_STEPS = 9;
const FALLBACK_STEPS = 4;

const STRUCTURAL = new Set(["defs", "style", "title", "desc", "metadata"]);
// Elements that carry words rather than draw the thing itself.
const TEXTISH = new Set(["text", "tspan"]);

/** Split the SVG body into top-level comments and elements. */
function splitTopLevel(body) {
  const pieces = [];
  let i = 0;
  while (i < body.length) {
    if (body.startsWith("<!--", i)) {
      const end = body.indexOf("-->", i);
      if (end === -1) break;
      pieces.push({ type: "comment", start: i, end: end + 3 });
      i = end + 3;
      continue;
    }
    if (body[i] === "<") {
      const m = /^<([a-zA-Z][\w:-]*)/.exec(body.slice(i));
      if (!m) {
        i++;
        continue;
      }
      const end = matchElement(body, i, m[1]);
      if (end === -1) break;
      pieces.push({ type: "element", tag: m[1], start: i, end });
      i = end;
      continue;
    }
    const next = body.indexOf("<", i);
    i = next === -1 ? body.length : next;
  }
  return pieces;
}

/** Index just past the end of the element starting at `start`. */
function matchElement(body, start, tag) {
  const open = body.indexOf(">", start);
  if (open === -1) return -1;
  if (body[open - 1] === "/") return open + 1;
  let depth = 1;
  let i = open + 1;
  const openRe = new RegExp(`<${tag}(\\s|>|/)`, "g");
  const closeRe = new RegExp(`</${tag}\\s*>`, "g");
  while (depth > 0 && i < body.length) {
    openRe.lastIndex = i;
    closeRe.lastIndex = i;
    const o = openRe.exec(body);
    const c = closeRe.exec(body);
    if (!c) return -1;
    if (o && o.index < c.index) {
      const oEnd = body.indexOf(">", o.index);
      if (oEnd !== -1 && body[oEnd - 1] !== "/") depth++;
      i = oEnd + 1;
    } else {
      depth--;
      i = c.index + c[0].length;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/** Does this element (or anything in it) actually draw? */
function isTextOnly(body, piece) {
  if (TEXTISH.has(piece.tag)) return true;
  if (piece.tag !== "g") return false;
  const inner = body.slice(piece.start, piece.end);
  return !/<(path|line|circle|rect|ellipse|polygon|polyline|image|use)\b/.test(inner);
}

/**
 * Decide which step each drawable element belongs to.
 * Returns a Map from piece -> step number (1-based).
 */
function assignSteps(body, pieces) {
  const drawable = pieces.filter((p) => p.type === "element" && !STRUCTURAL.has(p.tag));
  const comments = pieces.filter((p) => p.type === "comment");
  const steps = new Map();
  if (drawable.length < 2) return steps;

  // Author sections: a comment opens a step, elements after it belong to it.
  const sectionStarts = comments.map((c) => c.start);
  if (sectionStarts.length >= 2) {
    const sectionOf = (el) => {
      let k = -1;
      for (let i = 0; i < sectionStarts.length; i++) if (sectionStarts[i] < el.start) k = i;
      return k;
    };
    // Anything before the first comment joins the first section.
    const used = [];
    for (const el of drawable) used.push(Math.max(sectionOf(el), 0));
    const distinct = [...new Set(used)].sort((a, b) => a - b);
    if (distinct.length >= 2) {
      const rank = new Map(distinct.map((v, i) => [v, i + 1]));
      drawable.forEach((el, i) => steps.set(el, rank.get(used[i])));
      return capSteps(steps, drawable);
    }
  }

  // No usable sections: the drawing appears, then the words about it. Each
  // side is chunked separately so a step never straddles the two, which would
  // pair the second half of a shape with the caption for the first.
  const shapes = drawable.filter((p) => !isTextOnly(body, p));
  const labels = drawable.filter((p) => isTextOnly(body, p));
  const half = Math.max(1, Math.floor(FALLBACK_STEPS / 2));

  let step = 0;
  const chunk = (list) => {
    if (!list.length) return;
    const n = Math.min(half, list.length);
    const per = Math.ceil(list.length / n);
    const base = step;
    list.forEach((el, i) => {
      const s = base + Math.floor(i / per) + 1;
      steps.set(el, s);
      step = Math.max(step, s);
    });
  };
  chunk(shapes);
  chunk(labels);
  return capSteps(steps, drawable);
}

/** Merge the tail so no figure has more steps than it can carry. */
function capSteps(steps, drawable) {
  let max = 0;
  for (const v of steps.values()) max = Math.max(max, v);
  if (max <= MAX_STEPS) return steps;
  for (const el of drawable) {
    steps.set(el, Math.min(steps.get(el), MAX_STEPS));
  }
  return steps;
}

function stamp(src) {
  const headEnd = src.indexOf(">");
  const closeAt = src.lastIndexOf("</svg>");
  if (headEnd === -1 || closeAt === -1) return null;
  const body = src.slice(headEnd + 1, closeAt);

  const pieces = splitTopLevel(body);
  const steps = assignSteps(body, pieces);
  if (steps.size < 2) return null;
  const distinct = new Set(steps.values());
  if (distinct.size < 2) return null;

  // Insert attributes back to front so earlier offsets stay valid.
  const marks = [...steps.entries()].sort((a, b) => b[0].start - a[0].start);
  let out = body;
  for (const [el, step] of marks) {
    const tagEnd = el.start + 1 + el.tag.length;
    out = out.slice(0, tagEnd) + ` data-step="${step}"` + out.slice(tagEnd);
  }

  return src.slice(0, headEnd + 1) + out + src.slice(closeAt);
}

const files = (only.length ? only : fs.readdirSync(DIR).filter((f) => f.endsWith(".svg"))).sort();

let stamped = 0;
let skipped = 0;
let single = 0;
const stepCounts = {};

for (const f of files) {
  const p = path.join(DIR, f);
  const src = fs.readFileSync(p, "utf8");
  if (src.includes("data-step=") && !force) {
    skipped++;
    continue;
  }
  const clean = force ? src.replace(/ data-step="\d+"/g, "") : src;
  const out = stamp(clean);
  if (!out) {
    single++;
    continue;
  }
  const n = new Set([...out.matchAll(/data-step="(\d+)"/g)].map((m) => m[1])).size;
  stepCounts[n] = (stepCounts[n] || 0) + 1;
  stamped++;
  if (!dry) fs.writeFileSync(p, out);
}

console.log(`${files.length} figures`);
console.log(`  stamped        ${stamped}${dry ? " (dry run, nothing written)" : ""}`);
console.log(`  already done   ${skipped}`);
console.log(`  too simple     ${single} (one step, left as a still)`);
console.log(`  steps per figure ${JSON.stringify(stepCounts)}`);
