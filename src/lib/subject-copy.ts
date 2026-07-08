import type { Level, ProductKey } from "./catalogue";

// Per-subject marketing copy, taken verbatim from the subject's Marketing Hooks
// & Product Copy pack. Subjects without a pack fall back to the generic product
// blurbs in catalogue.ts.

export interface ProductCopy {
  /** 40-60 word blurb — paste whole. */
  blurb: string;
  bullets: string[];
  whoFor: string;
  crossSell: string;
}

export interface HeadlineCall {
  title: string;
  body: string;
}

export interface SubjectCopy {
  /** e.g. "6091" */
  syllabusCode: string;
  /** Full exam name to use on the site. */
  examName: string;
  /** Stops buyers landing on the wrong syllabus. */
  syllabusChecker: string;
  /**
   * A single quantified hook to lead the page with. One per page: a single
   * quantified claim reads as analysis; five stacked claims read as advertising.
   */
  heroHook: string;
  /** The model's headline calls for the year — analysis, not advertising. */
  headlineCalls: HeadlineCall[];
  /** Copy for the Master tier / complete pack. */
  completePack: string;
  products: Partial<Record<ProductKey, ProductCopy>>;
}

const PHYSICS_PURE_6091: SubjectCopy = {
  syllabusCode: "6091",
  examName: "O-Level Physics (Pure) 6091",
  syllabusChecker:
    "Not sure which syllabus your child takes? Physics as a single pure subject is 6091 (this pack); Physics inside combined Science is 5086 / 5087.",
  heroHook:
    "Radioactivity was invisible for eight years. Then it anchored the data-based question two papers running.",
  headlineCalls: [
    {
      title: "Radioactivity anchors the paper again.",
      body: "Near-invisible for eight years, it took the 10–11 mark data-based question in both 2024 and 2025 and opened a four-question Paper 1 block in 2025. Its new weight is structural.",
    },
    {
      title: "Dynamics returns to full weight after a light 2025.",
      body: "The core mechanics topic scored 8–9 marks in 2023–2024, then only 4 in 2025 — the dip that has preceded every rebound of the decade. A full F = ma question is the strongest single structured-question call.",
    },
    {
      title: "Light stays the decade's banker.",
      body: "The highest Paper 2 total of any topic (87 marks) and 10 marks in 2025. Ray diagrams, n = sin i / sin r and total-internal-reflection conditions fund more marks than any other single skill set.",
    },
    {
      title: "EM Induction holds its Section B transformer franchise.",
      body: "Marks climbed 7 then 11 across 2024–2025 with transformer content in Section B two years running. Prepare the Faraday / Lenz wording and the ratio arithmetic.",
    },
    {
      title: "Magnetism rebounds from a double blank.",
      body: "Zero Paper 2 marks in both 2024 and 2025 — the sharpest new-era blank of any recurring core, which historically precedes a rebound. Induced magnetism and field patterns are loaded for 2026.",
    },
    {
      title: "Paper 3 keeps its Q1(10) / Q2(10) / Q3(20) shape.",
      body: "A timing / oscillation experiment is likely (eight of nine years); specific-heat-capacity calorimetry (last 2021) and a lens / refraction study (last 2023) are the overdue Section-B major candidates.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the Paper 3 companion covering the practical's 40 marks. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of O-Level Pure Physics papers — 2016 to 2025 — classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All 20 syllabus topics get a deep dive: mark history, evidence, question angles and what changed at the 2024 format reset — so revision starts where the marks are likeliest.",
      bullets: [
        "Ranked prediction table for all 20 topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "20 topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "Forecasts for the Paper 2 data-based question and the choose-one Section B pairing",
        "Syllabus-change briefing: the new-in-2026 emphases plus the deletions, so no one revises removed content",
        "Niche watchlist of rarely-tested, cheap-to-earn marks most students never spot",
      ],
      whoFor:
        "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    paper3: {
      blurb:
        "Paper 3 is 20% of the grade in 1 h 50, sat first — and the most predictable paper on the timetable. This companion maps ten years of experiment rotation, ranks the 2026 slots, and drills the marking grammar through three original experiment briefs with model full-credit graph exhibits.",
      bullets: [
        "All five 2026 slot families ranked with last-set years: oscillation, thermal, optics, electrical, moments",
        "The strongest call: an oscillation / timing experiment — eight of the last nine papers (tier VERY HIGH)",
        "Three original briefs with full-credit exhibits: T²-vs-m spring; a specific-heat-capacity temperature–time graph; a sin i vs sin r refraction graph",
        "The mark-scheme-style playbook: time-twenty-and-divide, best-fit lines, gradient triangles, s.f. discipline, circled anomalies",
        "The 5-move planning template, with a model find-g-from-a-pendulum plan",
      ],
      whoFor:
        "Any candidate whose school under-rehearses the practical — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — radioactivity, light, dynamics, EM induction and the electricity block carry the heaviest coverage. Every question ships the full answer key: point-by-point answer, mark-scheme breakdown table, why it is correct, answering technique, and the common mistake that loses the marks.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a machine-checked mark-scheme breakdown table",
        "Every calculation independently computed before print; stores-and-pathways energy language throughout",
        "Strictly the 2026 syllabus — nothing from the deleted-content list",
      ],
      whoFor:
        "Students who know the physics but lose marks on definitions, working and units.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format, weighted to the forecast so the rehearsal doubles as targeted revision. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 40 original MCQs, 1 h, with a balanced answer key and full explanations",
        "Paper 2 — 80 marks in 1 h 45: Section A's 70 compulsory marks with the data-based question, then the Section B choice of two 10-markers",
        "Mark Scheme — the five-part answer-key standard on every question, with breakdown tables, technique notes, common-mistake flags and indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const SUBJECT_COPY: Record<string, SubjectCopy> = {
  "o-level::physics-pure": PHYSICS_PURE_6091,
};

export function subjectCopy(level: Level, slug: string): SubjectCopy | null {
  return SUBJECT_COPY[`${level}::${slug}`] ?? null;
}

/** True when a subject has its real marketing pack loaded (vs placeholders). */
export function hasRealCopy(level: Level, slug: string): boolean {
  return subjectCopy(level, slug) !== null;
}
