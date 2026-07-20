export type Level = "o-level" | "na-level";
/**
 * Every subject sells the same four products. The "companion" is the one that
 * varies: a Practical Prediction for the sciences, an SBQ & Skills Prediction
 * for the humanities, a Playbook for maths and POA. Its name, tagline and file
 * live in that subject's spec.
 */
export type ProductKey = "forecast" | "companion" | "vault" | "rehearsal";
export type Tier = "essential" | "strategic" | "master";
export type TopicFamily =
  | "chemistry"
  | "physics"
  | "biology"
  | "geography"
  | "history"
  | "social-studies"
  | "poa"
  | "emath"
  | "amath"
  | "fnn";

export interface Subject {
  slug: string;
  name: string;
  level: Level;
  family: TopicFamily;
}

export const LEVELS: Record<
  Level,
  {
    name: string;
    shortName: string;
    code: string;
    blurb: string;
    /**
     * Unpublished levels are hidden from the storefront and rejected by
     * checkout. N(A) stays unpublished until its real PDFs replace the seed
     * placeholders, a buyer must never pay for a placeholder.
     */
    published: boolean;
  }
> = {
  "o-level": {
    name: "O-Level (G3)",
    shortName: "O-Level",
    code: "G3",
    blurb: "Singapore-Cambridge O-Level, 14 subjects covered.",
    published: true,
  },
  "na-level": {
    name: "N(A)-Level (G2)",
    shortName: "N(A)-Level",
    code: "G2",
    blurb: "Singapore-Cambridge N(A)-Level, 8 subjects covered.",
    published: true,
  },
};

export const LEVEL_ORDER: Level[] = ["o-level", "na-level"];

export function isLevelPublished(level: Level): boolean {
  return LEVELS[level].published;
}

/** Levels a shopper may browse and buy. Admin still sees every level. */
export const PUBLISHED_LEVELS: Level[] = LEVEL_ORDER.filter(isLevelPublished);

export const SUBJECTS: Subject[] = [
  { slug: "chemistry-pure", name: "Chemistry (Pure)", level: "o-level", family: "chemistry" },
  { slug: "chemistry-science", name: "Chemistry (Science)", level: "o-level", family: "chemistry" },
  { slug: "physics-pure", name: "Physics (Pure)", level: "o-level", family: "physics" },
  { slug: "physics-science", name: "Physics (Science)", level: "o-level", family: "physics" },
  { slug: "biology-pure", name: "Biology (Pure)", level: "o-level", family: "biology" },
  { slug: "biology-science", name: "Biology (Science)", level: "o-level", family: "biology" },
  { slug: "geography-pure", name: "Geography (Pure)", level: "o-level", family: "geography" },
  { slug: "geography-elective", name: "Geography (Elective)", level: "o-level", family: "geography" },
  { slug: "history-pure", name: "History (Pure)", level: "o-level", family: "history" },
  { slug: "history-elective", name: "History (Elective)", level: "o-level", family: "history" },
  { slug: "social-studies", name: "Social Studies", level: "o-level", family: "social-studies" },
  { slug: "principles-of-accounts", name: "Principles of Accounts", level: "o-level", family: "poa" },
  { slug: "e-math", name: "Mathematics (Elementary)", level: "o-level", family: "emath" },
  { slug: "a-math", name: "Mathematics (Additional)", level: "o-level", family: "amath" },
  // N(A) Geography and Social Studies are omitted: no source PDFs exist for
  // them. Re-add here (and to SUBJECT_SPECS) once the content is produced.
  // Display names match the syllabus students search for. Slugs are frozen:
  // they are in live URLs and in every ProductFile.filePath on the volume.
  { slug: "chemistry", name: "Chemistry", level: "na-level", family: "chemistry" },
  { slug: "physics", name: "Physics", level: "na-level", family: "physics" },
  { slug: "biology", name: "Biology", level: "na-level", family: "biology" },
  { slug: "history", name: "History (Elective)", level: "na-level", family: "history" },
  { slug: "principles-of-accounts", name: "Principles of Accounts", level: "na-level", family: "poa" },
  { slug: "e-math", name: "Mathematics (Elementary)", level: "na-level", family: "emath" },
  { slug: "a-math", name: "Mathematics (Additional)", level: "na-level", family: "amath" },
  { slug: "food-and-nutrition", name: "Nutrition & Food Science", level: "na-level", family: "fnn" },
];

export function subjectsForLevel(level: Level): Subject[] {
  return SUBJECTS.filter((s) => s.level === level);
}

export function getSubject(level: Level, slug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.level === level && s.slug === slug);
}

export const PRODUCTS: Record<
  ProductKey,
  { name: string; tagline: string; day: string; blurb: string }
> = {
  forecast: {
    name: "Exam Forecast",
    tagline: "See what's likely. Revise what matters.",
    day: "Day 30",
    blurb:
      "Topic-by-topic probability analysis for your upcoming paper, so your final month goes where the marks are most likely to be.",
  },
  // Generic fallback. Real name/tagline come from the subject's spec below.
  companion: {
    name: "Companion Prediction",
    tagline: "The strand everyone under-rehearses.",
    day: "Day 30",
    blurb:
      "A dedicated forecast for the paper or skill strand that decides the most marks, built from the same ten-year, question-level model as the Exam Forecast.",
  },
  vault: {
    name: "Sure Questions Vault",
    tagline: "Practise where the marks are.",
    day: "Day 20",
    blurb:
      "Original exam-style questions weighted to the forecast's tiers, each with a full answer key: worked answer, mark-scheme breakdown, technique, and the common mistake that loses the marks.",
  },
  rehearsal: {
    name: "Final Rehearsal",
    tagline: "Sit the exam before the exam.",
    day: "Day 10",
    // Never name specific papers here: subjects differ (N(A) Biology sits
    // Paper 5 and 6; O-Level Chemistry (Science) sits Paper 1 and 3).
    // `rehearsalBlurbFor` names the real ones.
    blurb:
      "A complete original mock in the exact 2026 format, with the full mark scheme, so you walk in having already sat it once.",
  },
};

// Sales order. Every subject sells all four.
export const PRODUCT_ORDER: ProductKey[] = ["forecast", "companion", "vault", "rehearsal"];

// The Day 14 -> Day 7 -> Exam Day story. The companion sits alongside the
// Forecast, so it isn't a stage of the revision journey.
export const JOURNEY_ORDER: ProductKey[] = ["forecast", "vault", "rehearsal"];

export interface ProductFileSpec {
  key: string;
  label: string;
}

/** The Final Rehearsal's shape depends on how the subject's papers are set. */
const REHEARSAL_P1_P2: ProductFileSpec[] = [
  { key: "paper1", label: "Final Rehearsal, Paper 1" },
  { key: "paper2", label: "Final Rehearsal, Paper 2" },
  { key: "markscheme", label: "Final Rehearsal, Mark Scheme" },
];
/** Combined-Science Chemistry sits Paper 1 and Paper 3, not Paper 2. */
const REHEARSAL_P1_P3: ProductFileSpec[] = [
  { key: "paper1", label: "Final Rehearsal, Paper 1" },
  { key: "paper3", label: "Final Rehearsal, Paper 3" },
  { key: "markscheme", label: "Final Rehearsal, Mark Scheme" },
];
/** Single-paper subjects (Elective Geography/History, Social Studies). */
const REHEARSAL_SINGLE: ProductFileSpec[] = [
  { key: "paper", label: "Final Rehearsal, Paper" },
  { key: "markscheme", label: "Final Rehearsal, Mark Scheme" },
];

/**
 * N(A) sciences sit an MCQ paper and a structured paper, but the paper numbers
 * differ by subject: Physics 1/2, Chemistry 3/4, Biology 5/6.
 */
const REHEARSAL_MCQ_STRUCTURED = (mcq: number, structured: number): ProductFileSpec[] => [
  { key: `paper${mcq}`, label: `Final Rehearsal, Paper ${mcq} (MCQ)` },
  { key: `paper${structured}`, label: `Final Rehearsal, Paper ${structured} (Structured)` },
  { key: "markscheme", label: "Final Rehearsal, Mark Scheme" },
];

/** N(A) Nutrition & Food Science sits a single written Paper 1. */
const REHEARSAL_P1_ONLY: ProductFileSpec[] = [
  { key: "paper1", label: "Final Rehearsal, Paper 1" },
  { key: "markscheme", label: "Final Rehearsal, Mark Scheme" },
];

export interface SubjectSpec {
  /** The companion product's name for this subject. */
  companionName: string;
  companionTagline: string;
  rehearsalFiles: ProductFileSpec[];
}

// Companion straplines are the subject's own, taken from its marketing pack.
const PRACTICAL_P3 = "Forty marks. Three questions. Know the rotation.";
const PRACTICAL_P5_EXPERIMENT = "Fifteen marks. One experiment. Know the shortlist.";
const PRACTICAL_P5_QUESTION = "Fifteen marks. One question. Know the shortlist.";
const PRACTICAL_PLAIN = "The dedicated forecast for the practical paper.";
const SBQ_SOURCE = "The source-skills forecast.";
const SBQ_FIELDWORK = "The fieldwork forecast.";
const METHOD_LAYER = "The method layer.";
const FORMATS_LAYER = "The formats and workings layer.";
const SKILLS_DATA_RESPONSE = "The data-response and skills forecast.";
const SKILLS_EXTENDED_RESPONSE = "The extended-response and skills forecast.";

// Derived from the actual 2026 product folders, see the per-subject packs.
const SUBJECT_SPECS: Record<string, SubjectSpec> = {
  "o-level::physics-pure": { companionName: "Paper 3 Practical Prediction", companionTagline: PRACTICAL_P3, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::chemistry-pure": { companionName: "Paper 3 Practical Prediction", companionTagline: PRACTICAL_P3, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::biology-pure": { companionName: "Paper 3 Practical Prediction", companionTagline: PRACTICAL_P3, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::physics-science": { companionName: "Paper 5 Practical Prediction", companionTagline: PRACTICAL_P5_EXPERIMENT, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::chemistry-science": { companionName: "Paper 5 Practical Prediction", companionTagline: PRACTICAL_P5_QUESTION, rehearsalFiles: REHEARSAL_P1_P3 },
  "o-level::biology-science": { companionName: "Practical Prediction", companionTagline: PRACTICAL_PLAIN, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::geography-pure": { companionName: "SBQ & Skills Prediction", companionTagline: SBQ_FIELDWORK, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::geography-elective": { companionName: "SBQ & Skills Prediction", companionTagline: SBQ_FIELDWORK, rehearsalFiles: REHEARSAL_SINGLE },
  "o-level::history-pure": { companionName: "SBQ Skills Prediction", companionTagline: SBQ_SOURCE, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::history-elective": { companionName: "SBQ Skills Prediction", companionTagline: SBQ_SOURCE, rehearsalFiles: REHEARSAL_SINGLE },
  "o-level::social-studies": { companionName: "SBQ Skills Prediction", companionTagline: SBQ_SOURCE, rehearsalFiles: REHEARSAL_SINGLE },
  "o-level::e-math": { companionName: "Formula & Method Playbook", companionTagline: METHOD_LAYER, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::a-math": { companionName: "Formula & Method Playbook", companionTagline: METHOD_LAYER, rehearsalFiles: REHEARSAL_P1_P2 },
  "o-level::principles-of-accounts": { companionName: "Formats & Workings Playbook", companionTagline: FORMATS_LAYER, rehearsalFiles: REHEARSAL_P1_P2 },

  // N(A) (G2). Paper numbers and companion names taken from the 2026 G2 packs.
  "na-level::physics": { companionName: "Skills & Data-Response Prediction", companionTagline: SKILLS_DATA_RESPONSE, rehearsalFiles: REHEARSAL_MCQ_STRUCTURED(1, 2) },
  "na-level::chemistry": { companionName: "Skills & Data-Response Prediction", companionTagline: SKILLS_DATA_RESPONSE, rehearsalFiles: REHEARSAL_MCQ_STRUCTURED(3, 4) },
  "na-level::biology": { companionName: "Skills & Data-Response Prediction", companionTagline: SKILLS_DATA_RESPONSE, rehearsalFiles: REHEARSAL_MCQ_STRUCTURED(5, 6) },
  "na-level::food-and-nutrition": { companionName: "Skills & Extended-Response Prediction", companionTagline: SKILLS_EXTENDED_RESPONSE, rehearsalFiles: REHEARSAL_P1_ONLY },
  "na-level::history": { companionName: "SBQ Skills Prediction", companionTagline: SBQ_SOURCE, rehearsalFiles: REHEARSAL_SINGLE },
  "na-level::e-math": { companionName: "Formula & Method Playbook", companionTagline: METHOD_LAYER, rehearsalFiles: REHEARSAL_P1_P2 },
  "na-level::a-math": { companionName: "Formula & Method Playbook", companionTagline: METHOD_LAYER, rehearsalFiles: REHEARSAL_P1_P2 },
  "na-level::principles-of-accounts": { companionName: "Formats & Workings Playbook", companionTagline: FORMATS_LAYER, rehearsalFiles: REHEARSAL_P1_P2 },
};

// N(A)-Level packs aren't wired yet; fall back to a sensible companion by
// family so those pages still sell a complete four-product set.
const COMPANION_BY_FAMILY: Record<TopicFamily, { name: string; tagline: string }> = {
  physics: { name: "Practical Prediction", tagline: PRACTICAL_PLAIN },
  chemistry: { name: "Practical Prediction", tagline: PRACTICAL_PLAIN },
  biology: { name: "Practical Prediction", tagline: PRACTICAL_PLAIN },
  fnn: { name: "Practical Prediction", tagline: PRACTICAL_PLAIN },
  geography: { name: "SBQ & Skills Prediction", tagline: SBQ_FIELDWORK },
  history: { name: "SBQ Skills Prediction", tagline: SBQ_SOURCE },
  "social-studies": { name: "SBQ Skills Prediction", tagline: SBQ_SOURCE },
  emath: { name: "Formula & Method Playbook", tagline: METHOD_LAYER },
  amath: { name: "Formula & Method Playbook", tagline: METHOD_LAYER },
  poa: { name: "Formats & Workings Playbook", tagline: FORMATS_LAYER },
};

export function subjectSpec(subject: Subject): SubjectSpec {
  const declared = SUBJECT_SPECS[`${subject.level}::${subject.slug}`];
  if (declared) return declared;
  const fallback = COMPANION_BY_FAMILY[subject.family];
  return {
    companionName: fallback.name,
    companionTagline: fallback.tagline,
    rehearsalFiles: REHEARSAL_P1_P2,
  };
}

/**
 * Every product this subject sells, in sales order. Today that's all four for
 * every subject; the parameter stays so a subject can drop one later without
 * touching call sites.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function productsForSubject(subject: Subject): ProductKey[] {
  return PRODUCT_ORDER;
}

/** The PDFs a product ships for this subject. */
export function productFilesFor(subject: Subject, key: ProductKey): ProductFileSpec[] {
  if (key === "rehearsal") return subjectSpec(subject).rehearsalFiles;
  return [{ key: "main", label: productNameFor(subject, key) }];
}

export function productNameFor(subject: Subject, key: ProductKey): string {
  return key === "companion" ? subjectSpec(subject).companionName : PRODUCTS[key].name;
}

export function productTaglineFor(subject: Subject, key: ProductKey): string {
  return key === "companion"
    ? subjectSpec(subject).companionTagline
    : PRODUCTS[key].tagline;
}

/**
 * Names the papers this subject actually sits, rather than assuming 1 and 2.
 * "Paper 5 (MCQ), Paper 6 (Structured), and the full mark scheme".
 */
export function rehearsalBlurbFor(subject: Subject): string {
  const papers = subjectSpec(subject)
    .rehearsalFiles.filter((f) => f.key !== "markscheme")
    .map((f) => f.label.replace(/^Final Rehearsal, /, ""));
  const list =
    papers.length > 1
      ? `${papers.slice(0, -1).join(", ")} and ${papers[papers.length - 1]}`
      : papers[0];
  return `A complete original mock in the exact 2026 format, ${list}, plus the full mark scheme, so you walk in having already sat it once.`;
}

/** The subject-accurate blurb for a product, falling back to the generic one. */
export function productBlurbFor(subject: Subject, key: ProductKey): string {
  return key === "rehearsal" ? rehearsalBlurbFor(subject) : PRODUCTS[key].blurb;
}

/** Products a tier unlocks for a subject with no practical paper. */
export const BASE_TIER_PRODUCTS: Record<Tier, ProductKey[]> = {
  essential: ["forecast"],
  strategic: ["forecast", "vault"],
  master: ["forecast", "vault", "rehearsal"],
};

/** What a tier unlocks. Ultra is the complete pack: everything the subject has. */
export function tierProducts(tier: Tier, subject: Subject): ProductKey[] {
  if (tier === "master") return productsForSubject(subject);
  return BASE_TIER_PRODUCTS[tier];
}

export const TIER_NAMES: Record<Tier, string> = {
  essential: "Starter",
  strategic: "Plus",
  master: "Ultra",
};

// OrderItem.tier stores the DISPLAY name at checkout time. Orders placed
// before the v2.20 rename (Essential/Strategic/Master -> Starter/Plus/Ultra)
// hold the old names forever, so every entitlement check that matches the
// top tier by its stored string must accept BOTH.
export const ULTRA_DB_TIERS = ["Ultra", "Master"] as const;

export const TIER_ORDER: Tier[] = ["essential", "strategic", "master"];

export interface LevelPricing {
  alacarte: Record<ProductKey, number>;
  tiers: Record<Tier, number>;
  earlyBird: Partial<Record<Tier, number>>;
}

export const PRICING: Record<Level, LevelPricing> = {
  "o-level": {
    alacarte: { forecast: 24, companion: 24, vault: 34, rehearsal: 34 },
    tiers: { essential: 24, strategic: 48, master: 68 },
    earlyBird: { essential: 19, master: 58 },
  },
  "na-level": {
    alacarte: { forecast: 19, companion: 19, vault: 27, rehearsal: 27 },
    tiers: { essential: 19, strategic: 38, master: 54 },
    earlyBird: { essential: 15, master: 46 },
  },
};

// Phase 3 exposes this as an admin toggle. Flip to true to preview early-bird
// pricing site-wide.
export const EARLY_BIRD_ACTIVE = false;

// Mega-Bundle: any 3 Ultra subjects. Ratio chosen so 3 O-Level Ultras price
// at exactly S$168 (brief). Applied to each subject's own level pricing, so
// N(A) and mixed-level carts derive naturally.
export const MEGA_RATIO = 168 / 204;

// All-In: flat price covering up to 6 Ultra subjects. N(A) flat derived at the
// same discount depth as O-Level's S$268 (268/408 of six Ultras).
export const ALLIN_FLAT: Record<Level, number> = {
  "o-level": 268,
  "na-level": 213,
};

// Each subject beyond the 6th is added at the All-In per-subject rate (≈ flat /
// 6), so 7- and 8-subject bundles scale up instead of giving the extra subjects
// away free. O-Level: 7 = S$312, 8 = S$356. N(A): 7 = S$249, 8 = S$285.
export const ALLIN_EXTRA: Record<Level, number> = {
  "o-level": 44,
  "na-level": 36,
};

export const MAX_SUBJECTS = 8;

// Syllabus codes, mirrored verbatim from the authoritative `syllabusCode` field
// in subject-copy.ts (taken from each subject's Marketing Hooks pack, the same
// code shown on the subject page title). Kept as a small standalone map so the
// client bundle builder can show codes without importing the whole (large)
// subject-copy module. If a code changes, update it in BOTH places.
// Keyed by `${level}::${slug}`.
export const SUBJECT_CODES: Record<string, string> = {
  // O-Level (G3)
  "o-level::physics-pure": "6091",
  "o-level::physics-science": "5086 / 5087",
  "o-level::chemistry-pure": "6092",
  "o-level::chemistry-science": "5086 / 5088",
  "o-level::biology-pure": "6093",
  "o-level::biology-science": "5088",
  "o-level::geography-pure": "2279",
  "o-level::geography-elective": "2260",
  "o-level::history-pure": "2174",
  "o-level::history-elective": "2261",
  "o-level::social-studies": "2260 / 2261",
  "o-level::principles-of-accounts": "7087",
  "o-level::e-math": "4052",
  "o-level::a-math": "4049",
  // N(A)-Level (G2)
  "na-level::physics": "5105 / 5106",
  "na-level::chemistry": "5105 / 5107",
  "na-level::biology": "5106 / 5107",
  "na-level::food-and-nutrition": "6073",
  "na-level::history": "2126",
  "na-level::principles-of-accounts": "7086",
  "na-level::e-math": "4045",
  "na-level::a-math": "4051",
};

export function subjectCode(level: Level, slug: string): string | undefined {
  return SUBJECT_CODES[`${level}::${slug}`];
}

export const COMING_SOON = [
  { slug: "nt-level", name: "N(T)-Level", eta: "2026" },
  { slug: "igcse", name: "IGCSE (CAIE)", eta: "2026" },
  { slug: "a-level", name: "A-Level (Singapore)", eta: "2026" },
];

export function sgd(amount: number): string {
  return `S$${amount}`;
}
