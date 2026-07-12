import type { Level, TopicFamily } from "@/lib/catalogue";
import {
  PRECISION,
  DEFINITIONS,
  QA_DRILLS,
  CARELESS,
  SBQ_LADDER,
  COMMAND_WORDS,
  POA_TEMPLATES,
} from "@/lib/study/practice-content";
import { IMPORTED_TEACHING, type ImportedCard } from "@/lib/generated/game-bank";

// ─────────────────────────────────────────────────────────────────────────
// The Subject Guru's lesson deck. Each owned subject has a Guru who TEACHES
// a short, level-appropriate lesson (drawn from the original in-house
// teaching library — never scraped from any paper) and then sets a
// check-question from that subject's own bank. Content is selected by the
// subject's TopicFamily; the check-question (server-side, elsewhere) comes
// from the exact level+slug set, so O-Level Pure, O-Level Science and
// N(A)-Level each stay at their own depth.
// ─────────────────────────────────────────────────────────────────────────

export interface LessonBeat {
  tag: string; // short kicker, e.g. "DEFINITION", "MARKER'S PHRASING"
  title: string;
  body: string;
}

function pick<T>(arr: readonly T[], n: number): T[] {
  if (arr.length <= n) return [...arr];
  const copy = [...arr];
  const out: T[] = [];
  for (let i = 0; i < n && copy.length; i++) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

const LEVEL_LABEL: Record<Level, string> = {
  "o-level": "O-Level",
  "na-level": "N(A)-Level",
};

// Every family that owns teaching content. Humanities share the SBQ ladder.
const HUMANITIES: TopicFamily[] = ["geography", "history", "social-studies"];

export function familyCanTeach(family: TopicFamily): boolean {
  return (
    Boolean(PRECISION[family]?.length) ||
    Boolean(DEFINITIONS[family]?.length) ||
    Boolean(CARELESS[family]?.length) ||
    family === "chemistry" ||
    family === "poa" ||
    HUMANITIES.includes(family)
  );
}

// Convert an imported teaching card (from the author's content file) into a
// lesson beat. Imported content is subject-exact, so it's preferred over the
// family library when present.
function importedBeat(card: ImportedCard): LessonBeat | null {
  const s = (v: unknown) => (typeof v === "string" ? v : "");
  const arr = (v: unknown) => (Array.isArray(v) ? v.map((x) => String(x)) : []);
  switch (card.kind) {
    case "definition":
      return { tag: "DEFINITION", title: s(card.term), body: `${s(card.body)}  ·  ${s(card.topic)}` };
    case "precision": {
      const kw = arr(card.keywords);
      return {
        tag: "MARKER'S PHRASING",
        title: s(card.prompt),
        body: `${s(card.model)}${kw.length ? `\n\nKey words the marker looks for: ${kw.join(", ")}.` : ""}`,
      };
    }
    case "qa":
      return {
        tag: "IN THE LAB",
        title: s(card.test),
        body: `Observation: ${s(card.observation)}\nConclusion: ${s(card.conclusion)}`,
      };
    case "careless":
      return {
        tag: "BEFORE YOU MOVE ON",
        title: s(card.topic),
        body: arr(card.checks).map((x) => `• ${x}`).join("\n"),
      };
    case "sbq":
      return { tag: "SOURCE SKILL", title: s(card.rung), body: `${s(card.what)}\n\nHow: ${s(card.how)}` };
    case "poa":
      return {
        tag: "FORMAT MARKS",
        title: s(card.name),
        body: arr(card.lines).map((x) => `• ${x}`).join("\n") + (card.note ? `\n\n${s(card.note)}` : ""),
      };
    default:
      return null;
  }
}

// Build a fresh short lesson (2–3 beats) for a subject's Guru. Imported author
// content for the exact level+slug wins; otherwise the shared family library
// is used. Either way the paired check-question enforces the depth.
export function guruLesson(family: TopicFamily, level: Level, slug?: string): LessonBeat[] {
  // Prefer the subject's own imported teaching cards.
  const imported = slug ? IMPORTED_TEACHING[`${level}/${slug}`] : undefined;
  if (imported && imported.length) {
    const shuffled = [...imported].sort(() => Math.random() - 0.5);
    const picked = shuffled.map(importedBeat).filter((b): b is LessonBeat => b !== null);
    if (picked.length) return picked.slice(0, 3);
  }

  const beats: LessonBeat[] = [];
  const band = LEVEL_LABEL[level];

  // A definition to know verbatim (sciences).
  for (const d of pick(DEFINITIONS[family] ?? [], 1)) {
    beats.push({
      tag: "DEFINITION",
      title: d.term,
      body: `${d.definition}  ·  ${d.topic}`,
    });
  }
  // The marker's exact phrasing (sciences).
  for (const p of pick(PRECISION[family] ?? [], 1)) {
    beats.push({
      tag: "MARKER'S PHRASING",
      title: p.prompt,
      body: `${p.modelAnswer}\n\nKey words the marker looks for: ${p.keywords.join(", ")}.`,
    });
  }
  // Chemistry: a qualitative-analysis observation → conclusion.
  if (family === "chemistry") {
    for (const q of pick(QA_DRILLS, 1)) {
      beats.push({
        tag: "IN THE LAB",
        title: q.test,
        body: `Observation: ${q.observation}\nConclusion: ${q.conclusion}`,
      });
    }
  }
  // Maths: a careless-error checklist for one topic.
  for (const c of pick(CARELESS[family] ?? [], 1)) {
    beats.push({
      tag: "BEFORE YOU MOVE ON",
      title: c.topic,
      body: c.checks.map((x) => `• ${x}`).join("\n"),
    });
  }
  // Humanities: one rung of the source-based-question ladder + a command word.
  if (HUMANITIES.includes(family)) {
    for (const r of pick(SBQ_LADDER, 1)) {
      beats.push({ tag: "SOURCE SKILL", title: r.rung, body: `${r.what}\n\nHow: ${r.how}` });
    }
    for (const w of pick(COMMAND_WORDS, 1)) {
      beats.push({ tag: "COMMAND WORD", title: w.word, body: w.means });
    }
  }
  // POA: a statement format — the free format marks.
  if (family === "poa") {
    for (const t of pick(POA_TEMPLATES, 1)) {
      beats.push({
        tag: "FORMAT MARKS",
        title: t.name,
        body: t.lines.map((x) => `• ${x}`).join("\n") + (t.note ? `\n\n${t.note}` : ""),
      });
    }
  }

  // Fallback so no owned subject is ever left speechless.
  if (beats.length === 0) {
    beats.push({
      tag: "STUDY HABIT",
      title: `${band} revision, done right`,
      body: "Retrieve before you re-read: cover the notes and try to say the answer aloud first. The struggle is what makes it stick.",
    });
  }
  return beats.slice(0, 3);
}
