// Structural + compliance check for an authored subconcept tree.
// Run after all section .ts files are in place and wired into subconcepts.ts.
//   node scripts/validate-kinematics.mjs [topicKey]   (default t2-kinematics)
import { subconceptsFor } from "../src/lib/teaching/subconcepts.ts";
import { stepText } from "../src/lib/lesson-steps.ts";
import { readdirSync } from "node:fs";

const figs = new Set(
  readdirSync("public/physics/images")
    .filter((f) => f.endsWith(".svg"))
    .map((f) => f.replace(/\.svg$/, "")),
);

const TOPIC = process.argv[2] ?? "t2-kinematics";
const boxes = subconceptsFor(TOPIC) ?? [];
const fail = [];
const warn = [];
const ids = new Set();
const dash = /[–—]/; // en dash, em dash

const INTERACTIVE = new Set(["slider", "order", "match", "tiles", "plot", "circuit", "cloze", "spoterror", "classify", "graphpick"]);

for (const b of boxes) {
  if (ids.has(b.id)) fail.push(`duplicate box id ${b.id}`);
  ids.add(b.id);
  const kind = b.kind ?? "lesson";
  const counts = { choice: 0, open: 0, interactive: 0, concept: 0, insight: 0 };
  for (const s of b.steps) {
    if (s.kind === "choice") counts.choice++;
    else if (s.kind === "open") counts.open++;
    else if (s.kind === "concept") counts.concept++;
    else if (s.kind === "insight") counts.insight++;
    else if (INTERACTIVE.has(s.kind)) counts.interactive++;
    // figure references must exist
    if ("figure" in s && s.figure && !figs.has(s.figure)) warn.push(`${b.code}: figure not yet in repo: ${s.figure}`);
    // notation/dash check on on-screen strings (skip spoken-only fields)
    for (const t of stepText(s)) {
      if (dash.test(t)) fail.push(`${b.code}: en/em dash in "${String(t).slice(0, 40)}"`);
    }
    // choice correctness bounds
    if (s.kind === "choice" && (s.correct < 0 || s.correct >= s.options.length)) fail.push(`${b.code}: choice correct out of range`);
    if (s.kind === "classify") for (const it of s.items) if (it.bin < 0 || it.bin >= s.bins.length) fail.push(`${b.code}: classify bin out of range`);
    if (s.kind === "cloze" && s.answer.length !== s.segments.length - 1) fail.push(`${b.code}: cloze answer/segment mismatch`);
  }
  // per-kind requirements
  if (kind === "revision") {
    if (counts.choice !== 5) fail.push(`${b.code}: revision needs 5 choice, has ${counts.choice}`);
    if (counts.interactive !== 5) fail.push(`${b.code}: revision needs 5 interactive, has ${counts.interactive}`);
    if (counts.open < 2) fail.push(`${b.code}: revision needs >=2 open, has ${counts.open}`);
  } else if (kind === "quiz") {
    if (counts.choice !== 10) fail.push(`${b.code}: quiz needs 10 choice, has ${counts.choice}`);
    if (counts.interactive !== 10) fail.push(`${b.code}: quiz needs 10 interactive, has ${counts.interactive}`);
    if (counts.open !== 5) fail.push(`${b.code}: quiz needs 5 open, has ${counts.open}`);
  } else {
    const q = counts.choice + counts.open + counts.interactive;
    if (counts.concept < 1) fail.push(`${b.code}: lesson needs >=1 concept, has ${counts.concept}`);
    if (q < 3) fail.push(`${b.code}: lesson needs >=3 questions, has ${q}`);
    // every concept/insight should speak
    for (const s of b.steps) if ((s.kind === "concept" || s.kind === "insight") && !("say" in s && s.say)) fail.push(`${b.code}: ${s.kind} without say`);
  }
  console.log(`${b.code.padEnd(7)} ${kind.padEnd(9)} ${b.steps.length} steps  (choice ${counts.choice}, interactive ${counts.interactive}, open ${counts.open}, concept ${counts.concept})`);
}

console.log(`\n${boxes.length} boxes total for "${TOPIC}".`);
if (warn.length) {
  const uniq = [...new Set(warn.map((w) => w.split(": figure not yet in repo: ")[1]))];
  console.log(`\nFIGURES NOT YET IN REPO (${uniq.length} distinct): ${uniq.join(", ")}`);
}
if (fail.length) {
  console.log(`\nFAILURES (${fail.length}):`);
  for (const f of fail) console.log("  - " + f);
  process.exit(1);
} else {
  console.log("All checks passed.");
}
