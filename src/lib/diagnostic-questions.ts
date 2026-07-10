// "Am I Ready?" question bank. One 5-question set per subject, on that
// subject's #1 VERY HIGH topic (see forecast-tables.ts). Adding a subject =
// adding one entry here — no component changes.
//
// SECURITY: this module must ONLY be imported from server code. `correctKey`
// and `workedSolution` must never reach the client before submission; pages
// send the client a sanitized shape via sanitizeSet().

export type DiagnosticProduct = "companion" | "vault" | "master";

export interface DiagnosticQuestion {
  id: string;
  type: "mcq" | "short";
  stem: string;
  // MCQ options; omitted for short-answer.
  options?: string[];
  // MCQ: the correct option's index as a string (e.g. "2").
  // Short: every accepted answer, compared case/space-insensitively.
  correctKey: string[];
  marks: number;
  workedSolution: string;
  // What a wrong answer here signals — drives the tailored CTA.
  misconceptionTag: string;
  mapsToProduct: DiagnosticProduct;
}

export interface DiagnosticSet {
  level: "o-level" | "na-level";
  slug: string;
  // Display name for the topic — should match the Forecast PDF's naming.
  topicLabel: string;
  questions: DiagnosticQuestion[];
}

// ---------------------------------------------------------------------------
// O-LEVEL CHEMISTRY (PURE) — reference set.
// Topic: C4 Chemical Calculations (Mole Concept & Stoichiometry).
//
// ⚠️ PLACEHOLDER CONTENT — DRAFTED FOR OWNER REVIEW, per the build brief
// ("leave a clearly marked placeholder set if I haven't yet [supplied one]").
// Review every stem, answer and worked solution before pushing live; replace
// with your own five questions at any time — same shape.
// ---------------------------------------------------------------------------
const CHEMISTRY_PURE_O: DiagnosticSet = {
  level: "o-level",
  slug: "chemistry-pure",
  topicLabel: "C4 Chemical Calculations — Mole Concept & Stoichiometry",
  questions: [
    {
      id: "cp-moles-1",
      type: "mcq",
      stem: "What is the relative molecular mass (Mr) of carbon dioxide, CO₂? (Ar: C = 12, O = 16)",
      options: ["28", "44", "56", "22"],
      correctKey: ["1"],
      marks: 1,
      workedSolution:
        "Mr of CO₂ = 12 + (2 × 16) = 12 + 32 = 44. One carbon atom plus two oxygen atoms — add every atom in the formula once.",
      misconceptionTag: "Mr from formula",
      mapsToProduct: "vault",
    },
    {
      id: "cp-moles-2",
      type: "short",
      stem: "How many moles are there in 8.8 g of carbon dioxide, CO₂? (Mr = 44) Give your answer as a number of moles.",
      correctKey: ["0.2", "0.20", "0.2 mol", "0.20 mol"],
      marks: 2,
      workedSolution:
        "moles = mass ÷ Mr = 8.8 ÷ 44 = 0.2 mol. The mass–mole conversion is the single most-used line of working in Paper 2 calculations.",
      misconceptionTag: "mass-to-mole conversion",
      mapsToProduct: "vault",
    },
    {
      id: "cp-moles-3",
      type: "mcq",
      stem: "Magnesium burns in oxygen: 2Mg + O₂ → 2MgO. How many moles of MgO are produced from 0.4 mol of magnesium (excess oxygen)?",
      options: ["0.2 mol", "0.4 mol", "0.8 mol", "1.0 mol"],
      correctKey: ["1"],
      marks: 2,
      workedSolution:
        "The ratio of Mg : MgO in the equation is 2 : 2, i.e. 1 : 1. So 0.4 mol Mg → 0.4 mol MgO. Always take the ratio from the balanced equation, not from the masses.",
      misconceptionTag: "mole ratio from equation",
      mapsToProduct: "companion",
    },
    {
      id: "cp-moles-4",
      type: "mcq",
      stem: "What is the volume of 0.5 mol of hydrogen gas at room temperature and pressure (r.t.p.)? (Molar volume at r.t.p. = 24 dm³/mol)",
      options: ["6 dm³", "12 dm³", "24 dm³", "48 dm³"],
      correctKey: ["1"],
      marks: 2,
      workedSolution:
        "volume = moles × 24 dm³ = 0.5 × 24 = 12 dm³ at r.t.p. Watch the units — questions switch between dm³ and cm³ (1 dm³ = 1000 cm³) to catch rushed working.",
      misconceptionTag: "gas volume at r.t.p.",
      mapsToProduct: "vault",
    },
    {
      id: "cp-moles-5",
      type: "short",
      stem: "25.0 cm³ of 0.100 mol/dm³ sodium hydroxide is neutralised by hydrochloric acid: NaOH + HCl → NaCl + H₂O. How many moles of HCl are needed? Give your answer in mol.",
      correctKey: ["0.0025", "0.0025 mol", "2.5e-3", "2.5x10-3", "2.5 x 10-3", "0.00250"],
      marks: 3,
      workedSolution:
        "moles NaOH = concentration × volume in dm³ = 0.100 × (25.0 ÷ 1000) = 0.0025 mol. The equation ratio NaOH : HCl is 1 : 1, so moles HCl = 0.0025 mol. Structure your working as: convert volume → find known moles → apply ratio.",
      misconceptionTag: "titration working structure",
      mapsToProduct: "companion",
    },
  ],
};

// Register new sets here. Subjects without a set are hidden from the picker
// and their deep links show a friendly "coming soon".
const SETS: DiagnosticSet[] = [CHEMISTRY_PURE_O];

export function getDiagnosticSet(level: string, slug: string): DiagnosticSet | undefined {
  return SETS.find((s) => s.level === level && s.slug === slug);
}

export function listDiagnosticSets(): { level: string; slug: string }[] {
  return SETS.map((s) => ({ level: s.level, slug: s.slug }));
}

// What the browser is allowed to see before submission.
export interface PublicQuestion {
  id: string;
  type: "mcq" | "short";
  stem: string;
  options?: string[];
  marks: number;
}

export function sanitizeSet(set: DiagnosticSet): {
  topicLabel: string;
  questions: PublicQuestion[];
  totalMarks: number;
} {
  return {
    topicLabel: set.topicLabel,
    questions: set.questions.map(({ id, type, stem, options, marks }) => ({
      id,
      type,
      stem,
      options,
      marks,
    })),
    totalMarks: set.questions.reduce((sum, q) => sum + q.marks, 0),
  };
}
