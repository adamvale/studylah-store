import type { Metadata } from "next";
import { LEVELS, subjectCode, type Subject } from "@/lib/catalogue";

// Search-facing copy for every subject page, centralised so the O-Level and
// N(A)-Level routes stay thin. Two goals: rank for the terms students and
// parents actually type ("O level chemistry 2026 topics", "N level physics
// revision Singapore"), and give AI answer engines clean, quotable Q&A.
//
// COMPLIANCE (non-negotiable, see docs/PROJECT-STATE.md): probabilistic
// language only. Never "guaranteed", "confirmed", "leaked", "insider",
// "sure-win", "100%". No grade promises. No em/en dashes in copy.

// How searchers type each level. The official name is N(A)-Level but nobody
// searches that string; "N Level" is the query. Both appear in copy.
const SEARCH_LEVEL: Record<Subject["level"], string> = {
  "o-level": "O Level",
  "na-level": "N Level",
};

const SCIENCE_FAMILIES = new Set(["chemistry", "physics", "biology"]);

function isScience(subject: Subject): boolean {
  return SCIENCE_FAMILIES.has(subject.family);
}

// "Chemistry" from "Chemistry (Pure)" / "Chemistry (Science)" / "Chemistry".
function coreName(subject: Subject): string {
  return subject.name.replace(/\s*\(.*\)$/, "");
}

function isCombinedScience(subject: Subject): boolean {
  return subject.level === "o-level" && subject.slug.endsWith("-science");
}

// ── Metadata ────────────────────────────────────────────────────────────────

export function subjectSeoMeta(subject: Subject): Metadata {
  const lvl = SEARCH_LEVEL[subject.level];
  const code = subjectCode(subject.level, subject.slug);
  const core = coreName(subject);
  const codeSuffix = code ? ` (${code})` : "";

  const title = isCombinedScience(subject)
    ? `${lvl} Combined Science ${core}${codeSuffix} 2026: Predicted Topics & Practice`
    : subject.slug.endsWith("-pure")
      ? `${lvl} ${core} Pure${codeSuffix} 2026: Predicted Topics & Practice`
      : `${lvl} ${subject.name}${codeSuffix} 2026: Predicted Topics & Practice`;

  const description = isScience(subject)
    ? `Revise ${lvl} ${subject.name}${codeSuffix} for 2026 the smart way: every syllabus topic ranked by likelihood, original practice questions with answers, and a full timed mock paper. Singapore-Cambridge ${LEVELS[subject.level].shortName}.`
    : `${lvl} ${subject.name}${codeSuffix} 2026 revision, Singapore: every syllabus topic ranked by likelihood, original practice questions with answers, and a full timed mock paper.`;

  const keywords = [
    `${lvl} ${core}`,
    `${lvl} ${core} 2026`,
    `${lvl} ${core} topics`,
    `${lvl} ${core} practice questions`,
    `${lvl} ${core} revision`,
    `${lvl} ${core} Singapore`,
    ...(code ? code.split(" / ").map((c) => `${c.trim()} ${core}`) : []),
    ...(isCombinedScience(subject) ? [`combined science ${core.toLowerCase()}`] : []),
    "Singapore-Cambridge",
    "exam forecast",
    "predicted topics 2026",
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/${subject.level}/${subject.slug}` },
    openGraph: {
      title: `${title} · StudyLah`,
      description,
      url: `https://www.studylah.education/${subject.level}/${subject.slug}`,
      type: "website",
    },
  };
}

// ── On-page FAQ (rendered + FAQPage JSON-LD) ───────────────────────────────

export interface SubjectFaqEntry {
  q: string;
  a: string;
}

// Family-specific revision detail, general syllabus knowledge phrased
// honestly. These strings are quotable by AI answer engines, so each one
// stands alone and names the subject in full.
const SCIENCE_REVISION_DETAIL: Record<string, string> = {
  chemistry:
    "prioritise the calculation chains (the mole, stoichiometry, energy changes) and the explain questions (bonding, acids and bases, organic chemistry). Chemistry mark schemes award specific keywords, so practise writing answers that name the particles, the forces, and the change, not vague descriptions.",
  physics:
    "prioritise the formula-driven topics (kinematics, forces, energy, electricity) and rehearse showing your working line by line, because method marks survive a wrong final answer. Then drill the explain questions (waves, thermal physics, electromagnetism) where mark schemes award precise physics vocabulary.",
  biology:
    "prioritise the process questions (enzymes, transport, respiration, photosynthesis) where examiners award marks for naming the exact structure and process. Biology mark schemes are keyword driven, so a correct idea in vague words often scores zero. Practise writing the examiner's terms, not your own paraphrase.",
};

export function subjectFaqEntries(subject: Subject): SubjectFaqEntry[] {
  const lvl = SEARCH_LEVEL[subject.level];
  const code = subjectCode(subject.level, subject.slug);
  const full = `${lvl} ${subject.name}${code ? ` (${code})` : ""}`;
  const entries: SubjectFaqEntry[] = [];

  entries.push({
    q: `What topics are most likely in the 2026 ${lvl} ${subject.name} paper?`,
    a: `Nobody outside the exam board knows the paper, and anyone claiming otherwise should worry you. What can be done honestly: StudyLah classifies ten years of past ${full} papers question by question, then ranks every syllabus topic into four confidence tiers (VERY HIGH, HIGH, MODERATE, WATCH) for the 2026 sitting. Revising the top tiers first puts your hours where the marks are statistically likeliest. These are probabilistic forecasts, and the hits and misses of past forecasts are published openly on the accuracy scorecard.`,
  });

  if (isScience(subject)) {
    const detail = SCIENCE_REVISION_DETAIL[subject.family];
    entries.push({
      q: `How should I revise ${lvl} ${coreName(subject)} in the final weeks?`,
      a: `Work topics in order of likelihood rather than syllabus order, and ${detail} Finish with at least one full timed mock in the real 2026 paper format so exam day feels familiar.`,
    });
    entries.push({
      q: `How are marks awarded in ${lvl} ${coreName(subject)}?`,
      a: `Marks are awarded for answers that match the mark scheme, not for general understanding. Most students lose marks four ways: missing the exact keywords, vague phrasing, the wrong answer format, and incomplete logic. StudyLah FastTrack teaches the examiner keywords, a 3 to 4 step answer structure, and how to read what a question is testing within the first few seconds, for ${lvl} Chemistry, Physics and Biology.`,
    });
  }

  entries.push({
    q: `Is this the actual 2026 ${subject.name} exam paper?`,
    a: `No. StudyLah sells data-driven forecasts and original practice material, never leaked or actual exam content. StudyLah is an independent Singapore publisher and is not affiliated with, endorsed by, or connected to SEAB, MOE, or Cambridge (UCLES). Forecast accuracy, including the misses, is published after every sitting.`,
  });

  entries.push({
    q: `What do I get when I buy the ${subject.name} pack?`,
    a: `Instant PDF downloads: the 2026 Exam Forecast with every topic tiered, a subject companion for the paper or skill strand most students under-rehearse, original practice questions with full answers, and a complete timed mock paper with mark scheme. The Ultra tier also unlocks StudyLand, a daily study system with three targeted questions a day, a self-maintaining mistake notebook, drills and exam timers.`,
  });

  return entries;
}

export function subjectFaqSchema(subject: Subject) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: subjectFaqEntries(subject).map((e) => ({
      "@type": "Question",
      name: e.q,
      acceptedAnswer: { "@type": "Answer", text: e.a },
    })),
  };
}
