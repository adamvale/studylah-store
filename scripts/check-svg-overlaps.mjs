// Heuristic lint for the physics diagram library: flags likely label overlaps
// and out-of-bounds text so a human (or agent) can eyeball just the suspects.
// Handles <g transform="translate(x,y)"> offsets, decodes numeric entities,
// and honours per-class font sizes, so its false-positive rate is low; still
// heuristic (no path geometry, no rotation), so verify flags visually.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "public/physics/images";
const files = readdirSync(DIR).filter((f) => f.endsWith(".svg")).sort();

function attrs(tag) {
  const out = {};
  for (const m of tag.matchAll(/([a-zA-Z-]+)="([^"]*)"/g)) out[m[1]] = m[2];
  return out;
}

// decode numeric entities to single chars so lengths are right
function decode(s) {
  return s.replace(/&#x?[0-9a-fA-F]+;/g, "x").replace(/&[a-z]+;/g, "x");
}

function classSizes(svg, base) {
  const sizes = {};
  for (const m of svg.matchAll(/\.([a-zA-Z][\w-]*)\s*{[^}]*font-size:\s*([\d.]+)px/g)) sizes[m[1]] = parseFloat(m[2]);
  return (cls) => {
    for (const c of (cls ?? "").split(/\s+/)) if (sizes[c]) return sizes[c];
    return base;
  };
}

function classAnchors(svg) {
  const anchors = {};
  for (const m of svg.matchAll(/\.([a-zA-Z][\w-]*)\s*{[^}]*text-anchor:\s*(\w+)/g)) anchors[m[1]] = m[2];
  return (cls) => {
    for (const c of (cls ?? "").split(/\s+/)) if (anchors[c]) return anchors[c];
    return null;
  };
}

// split into segments with translate offsets (top-level <g transform> only)
function segments(svg) {
  const segs = [];
  const re = /<g\b[^>]*transform="translate\(\s*([-\d.]+)[ ,]+([-\d.]+)\s*\)"[^>]*>([\s\S]*?)<\/g>/g;
  let rest = svg;
  let m;
  while ((m = re.exec(svg))) segs.push({ dx: parseFloat(m[1]), dy: parseFloat(m[2]), body: m[3] });
  rest = svg.replace(re, "");
  segs.push({ dx: 0, dy: 0, body: rest });
  return segs;
}

function collect(svg, baseSize) {
  const sizeFor = classSizes(svg, baseSize);
  const anchorFor = classAnchors(svg);
  const texts = [];
  const circs = [];
  const axes = { h: [], v: [] };
  for (const { dx, dy, body } of segments(svg)) {
    for (const m of body.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g)) {
      const a = attrs(m[1]);
      const content = decode(m[2].trim());
      if (!content) continue;
      if (/rotate\(/.test(a.transform ?? "")) continue; // rotation not modeled
      const size = parseFloat(a["font-size"]) || sizeFor(a.class);
      const w = content.length * size * 0.56;
      const x = parseFloat(a.x ?? "0") + dx;
      const y = parseFloat(a.y ?? "0") + dy;
      const anchor = a["text-anchor"] ?? anchorFor(a.class) ?? "start";
      const x0 = anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x;
      texts.push({ content, x0, x1: x0 + w, y0: y - size, y1: y + size * 0.25 });
    }
    for (const m of body.matchAll(/<circle\b([^>]*)\/?>(?:<\/circle>)?/g)) {
      const a = attrs(m[1]);
      circs.push({ cx: parseFloat(a.cx ?? "0") + dx, cy: parseFloat(a.cy ?? "0") + dy, r: parseFloat(a.r ?? "0") });
    }
    // axis lines: long, axis-aligned <line>s (used to detect graph-like figures)
    for (const m of body.matchAll(/<line\b([^>]*)\/?>(?:<\/line>)?/g)) {
      const a = attrs(m[1]);
      const x1 = parseFloat(a.x1 ?? "0") + dx, y1 = parseFloat(a.y1 ?? "0") + dy;
      const x2 = parseFloat(a.x2 ?? "0") + dx, y2 = parseFloat(a.y2 ?? "0") + dy;
      const len = Math.hypot(x2 - x1, y2 - y1);
      if (Math.abs(y2 - y1) <= 3 && len >= 60) axes.h.push({ x1, x2, y: y1 });
      if (Math.abs(x2 - x1) <= 3 && len >= 60) axes.v.push({ y1, y2, x: x1 });
    }
  }
  return { texts, circs, axes };
}

function overlap(a, b) {
  const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0);
  const oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
  return ox > 2 && oy > 2 ? ox * oy : 0;
}

let flagged = 0;
for (const f of files) {
  const svg = readFileSync(join(DIR, f), "utf8");
  const vb = /viewBox="([\d.\s-]+)"/.exec(svg)?.[1].split(/\s+/).map(Number) ?? [0, 0, 9999, 9999];
  const [vx, vy, vw, vh] = vb;
  const styleSize = parseFloat(/text\s*{[^}]*font-size:\s*([\d.]+)px/.exec(svg)?.[1] ?? "13");
  const { texts, circs, axes } = collect(svg, styleSize);
  const problems = [];

  for (let i = 0; i < texts.length; i++)
    for (let j = i + 1; j < texts.length; j++)
      if (overlap(texts[i], texts[j]) > 30)
        problems.push(`text/text: "${texts[i].content.slice(0, 24)}" vs "${texts[j].content.slice(0, 24)}"`);

  for (const t of texts) {
    if (t.content.length <= 2) continue;
    for (const c of circs) {
      const box = { x0: c.cx - c.r, x1: c.cx + c.r, y0: c.cy - c.r, y1: c.cy + c.r };
      if (c.r >= 5 && overlap(t, box) > 20) problems.push(`text/circle: "${t.content.slice(0, 24)}" hits circle @${c.cx},${c.cy}`);
    }
  }

  for (const t of texts)
    if (t.x0 < vx - 2 || t.x1 > vx + vw + 2 || t.y0 < vy - 2 || t.y1 > vy + vh + 2)
      problems.push(`overflow: "${t.content.slice(0, 24)}" outside viewBox`);

  if (styleSize < 12 && vw >= 500) problems.push(`tiny-font: base ${styleSize}px on ${vw}-wide viewBox`);

  // Axis-label check: a graph (>=1 long horizontal AND >=1 long vertical axis)
  // must name both axes. Heuristic: a label near the foot of a vertical axis
  // (the x-axis name) and one near the top of a vertical axis (the y-axis name).
  const wordy = texts.filter((t) => t.content.length >= 3 && /[a-zA-Z]/.test(t.content));
  if (axes.h.length && axes.v.length) {
    for (const v of axes.v) {
      const yTop = Math.min(v.y1, v.y2), yBot = Math.max(v.y1, v.y2);
      const near = (t, cx, cy, rx, ry) => Math.abs((t.x0 + t.x1) / 2 - cx) < rx && Math.abs((t.y0 + t.y1) / 2 - cy) < ry;
      const hasYlabel = wordy.some((t) => near(t, v.x, yTop, 90, 34));
      const hasXlabel = wordy.some((t) => near(t, v.x + 120, yBot, 220, 40));
      if (!hasYlabel) problems.push(`axis-label: y-axis near (${v.x|0},${yTop|0}) has no label`);
      if (!hasXlabel) problems.push(`axis-label: x-axis at foot (${v.x|0},${yBot|0}) has no label`);
      break; // one representative axis pair is enough to warn
    }
  }

  if (problems.length) {
    flagged++;
    console.log(`\n${f}`);
    for (const p of [...new Set(problems)].slice(0, 6)) console.log(`  - ${p}`);
  }
}
console.log(`\n${files.length} files scanned, ${flagged} flagged.`);
