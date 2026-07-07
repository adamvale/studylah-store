export type Level = "o-level" | "na-level";
export type ProductKey = "forecast" | "vault" | "rehearsal";
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
  { name: string; shortName: string; code: string; blurb: string }
> = {
  "o-level": {
    name: "O-Level (G3)",
    shortName: "O-Level",
    code: "G3",
    blurb: "Singapore-Cambridge O-Level, 14 subjects covered.",
  },
  "na-level": {
    name: "N(A)-Level (G2)",
    shortName: "N(A)-Level",
    code: "G2",
    blurb: "Singapore-Cambridge N(A)-Level, 10 subjects covered.",
  },
};

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
  { slug: "chemistry", name: "Chemistry", level: "na-level", family: "chemistry" },
  { slug: "physics", name: "Physics", level: "na-level", family: "physics" },
  { slug: "biology", name: "Biology", level: "na-level", family: "biology" },
  { slug: "geography", name: "Geography", level: "na-level", family: "geography" },
  { slug: "history", name: "History", level: "na-level", family: "history" },
  { slug: "social-studies", name: "Social Studies", level: "na-level", family: "social-studies" },
  { slug: "principles-of-accounts", name: "Principles of Accounts", level: "na-level", family: "poa" },
  { slug: "e-math", name: "Mathematics (Elementary)", level: "na-level", family: "emath" },
  { slug: "a-math", name: "Mathematics (Additional)", level: "na-level", family: "amath" },
  { slug: "food-and-nutrition", name: "Food and Nutrition", level: "na-level", family: "fnn" },
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
    day: "Day 14",
    blurb:
      "Topic-by-topic probability analysis for your upcoming paper, so your last two weeks go where the marks are most likely to be.",
  },
  vault: {
    name: "Sure Questions Vault",
    tagline: "Practise where the marks are.",
    day: "Day 7",
    blurb:
      "Original exam-style questions with full worked answers, weighted toward the forecast's hottest topics.",
  },
  rehearsal: {
    name: "Final Rehearsal",
    tagline: "Sit the exam before the exam.",
    day: "Exam day",
    blurb:
      "A full-length, timed Paper 1 and Paper 2 with mark scheme — walk in having already done it once.",
  },
};

export const PRODUCT_ORDER: ProductKey[] = ["forecast", "vault", "rehearsal"];

export const TIER_PRODUCTS: Record<Tier, ProductKey[]> = {
  essential: ["forecast"],
  strategic: ["forecast", "vault"],
  master: ["forecast", "vault", "rehearsal"],
};

export const TIER_NAMES: Record<Tier, string> = {
  essential: "Essential",
  strategic: "Strategic",
  master: "Master",
};

export const TIER_ORDER: Tier[] = ["essential", "strategic", "master"];

export interface LevelPricing {
  alacarte: Record<ProductKey, number>;
  tiers: Record<Tier, number>;
  earlyBird: Partial<Record<Tier, number>>;
}

export const PRICING: Record<Level, LevelPricing> = {
  "o-level": {
    alacarte: { forecast: 24, vault: 34, rehearsal: 34 },
    tiers: { essential: 24, strategic: 48, master: 68 },
    earlyBird: { essential: 19, master: 58 },
  },
  "na-level": {
    alacarte: { forecast: 19, vault: 27, rehearsal: 27 },
    tiers: { essential: 19, strategic: 38, master: 54 },
    earlyBird: { essential: 15, master: 46 },
  },
};

// Phase 3 exposes this as an admin toggle. Flip to true to preview early-bird
// pricing site-wide.
export const EARLY_BIRD_ACTIVE = false;

// Mega-Bundle: any 3 Master subjects. Ratio chosen so 3 O-Level Masters price
// at exactly S$168 (brief). Applied to each subject's own level pricing, so
// N(A) and mixed-level carts derive naturally.
export const MEGA_RATIO = 168 / 204;

// All-In: flat price covering 5 or 6 Master subjects. N(A) flat derived at the
// same discount depth as O-Level's S$268 (268/408 of six Masters).
export const ALLIN_FLAT: Record<Level, number> = {
  "o-level": 268,
  "na-level": 213,
};

export const MAX_SUBJECTS = 6;

export const COMING_SOON = [
  { slug: "nt-level", name: "N(T)-Level", eta: "2026" },
  { slug: "igcse", name: "IGCSE (CAIE)", eta: "2026" },
  { slug: "a-level", name: "A-Level (Singapore)", eta: "2026" },
];

export function sgd(amount: number): string {
  return `S$${amount}`;
}
