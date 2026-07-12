// Shared parser for the authored content files (content/game-bank/*.md).
// Used by the DB seeder (prisma/seed.ts). Pure: reads files, returns data,
// throws on malformed input.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const VALID_KINDS = new Set(["definition", "precision", "qa", "careless", "sbq", "poa"]);

function fencedYamlBlocks(md) {
  const blocks = [];
  const re = /```ya?ml\s*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(md))) blocks.push(m[1]);
  return blocks;
}

function parseFrontmatter(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) throw new Error("missing frontmatter");
  return yaml.load(m[1]);
}

// Parse one file → { level, slug, subjectName, family, questions[], teaching[] }.
export function parseGameBankFile(md, file = "?") {
  const fm = parseFrontmatter(md);
  const { level, slug, subjectName, family } = fm;
  if (!level || !slug || !family) throw new Error(`${file}: frontmatter needs level, slug, family`);

  const questions = [];
  const teaching = [];
  const errors = [];
  let qn = 0;
  let tn = 0;

  for (const raw of fencedYamlBlocks(md)) {
    let doc;
    try {
      doc = yaml.load(raw);
    } catch (e) {
      errors.push(`${file}: bad yaml block — ${e.message}`);
      continue;
    }
    if (!doc || typeof doc !== "object") continue;

    if (doc.type === "mcq" || doc.type === "short") {
      qn += 1;
      // Level-qualified: a-math / e-math / principles-of-accounts share a slug
      // across O- and N(A)-Level, so the id must include the level to stay a
      // unique primary key. Ids are opaque to the client (echoed back only).
      const id = `${level}-${slug}-g${qn}`;
      if (!doc.topic || !doc.stem) {
        errors.push(`${file} ${id}: question needs topic + stem`);
        continue;
      }
      let correctKey;
      let options = null;
      if (doc.type === "mcq") {
        options = (doc.options ?? []).map((o) => String(o));
        if (options.length < 2) {
          errors.push(`${file} ${id}: mcq needs >=2 options`);
          continue;
        }
        if (typeof doc.answer !== "number" || doc.answer < 0 || doc.answer >= options.length) {
          errors.push(`${file} ${id}: mcq answer index out of range`);
          continue;
        }
        correctKey = [String(doc.answer)];
      } else {
        const accepted = (doc.accepted ?? []).map((a) => String(a));
        if (accepted.length === 0) {
          errors.push(`${file} ${id}: short needs accepted[]`);
          continue;
        }
        correctKey = accepted;
      }
      questions.push({
        id,
        ord: qn,
        type: doc.type,
        topic: String(doc.topic),
        stem: String(doc.stem),
        options,
        correctKey,
        marks: Number(doc.marks ?? 1),
        workedSolution: String(doc.worked ?? "").trim(),
        misconceptionTag: String(doc.misconception ?? "unset"),
      });
      continue;
    }

    if (typeof doc.kind === "string") {
      if (!VALID_KINDS.has(doc.kind)) {
        errors.push(`${file}: unknown teaching kind "${doc.kind}"`);
        continue;
      }
      tn += 1;
      teaching.push({ ord: tn, kind: doc.kind, data: doc });
      continue;
    }
  }

  if (errors.length) throw new Error(errors.join("\n"));
  if (questions.length === 0) throw new Error(`${file}: no questions parsed`);

  return { level, slug, subjectName, family, questions, teaching };
}

// Parse every file in a directory.
export function parseGameBankDir(dir) {
  const files = readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("._"))
    .sort();
  return files.map((f) => parseGameBankFile(readFileSync(join(dir, f), "utf8"), f));
}
