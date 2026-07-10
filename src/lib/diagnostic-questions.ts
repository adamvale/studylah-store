// "Am I Ready?" question bank. One 5-question set per subject, mixed across
// that subject's VERY HIGH topics (see forecast-tables.ts), sourced from the
// subject's own Sure Questions Vault. Adding a subject = adding one entry
// here — no component changes.
//
// SECURITY: this module must ONLY be imported from server code. `correctKey`
// and `workedSolution` must never reach the client before submission; pages
// send the client a sanitized shape via sanitizeSet().

export type DiagnosticProduct = "companion" | "vault" | "master";

export interface DiagnosticQuestion {
  id: string;
  type: "mcq" | "short";
  // Which VERY HIGH topic this question belongs to (shown to the student).
  topic: string;
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
  // Display name for what the check covers.
  topicLabel: string;
  questions: DiagnosticQuestion[];
}

// ---------------------------------------------------------------------------
// O-LEVEL CHEMISTRY (PURE) — reference set.
// One question per VERY HIGH topic, ADAPTED FROM THE SUBJECT'S OWN SURE
// QUESTIONS VAULT (vault.pdf warm-up/core items + their mark schemes), so the
// quiz previews real product content.
//
// ⚠️ REVIEW BEFORE LAUNCH: stems/answers follow the Vault's answer keys, but
// confirm the adaptation (especially the short-answer variants) yourself.
// ---------------------------------------------------------------------------
const CHEMISTRY_PURE_O: DiagnosticSet = {
  level: "o-level",
  slug: "chemistry-pure",
  topicLabel: "Mixed — the five VERY HIGH topics",
  questions: [
    {
      id: "cp-c4-mr",
      type: "short",
      topic: "C4 Chemical Calculations",
      stem: "What is the relative formula mass, Mr, of ammonium sulfate, (NH₄)₂SO₄? (Ar: N = 14, H = 1, S = 32, O = 16)",
      correctKey: ["132"],
      marks: 2,
      workedSolution:
        "The brackets multiply everything inside them: 2 × (14 + 4) for the two NH₄ groups gives 36, plus 32 for sulfur and 4 × 16 = 64 for oxygen — total 132. Counting only one NH₄ group gives the classic wrong answer 114; doubling the whole formula gives 264.",
      misconceptionTag: "Mr with brackets",
      mapsToProduct: "vault",
    },
    {
      id: "cp-c11-isomers",
      type: "mcq",
      topic: "C11 Organic Chemistry",
      stem: "Which pair of compounds are isomers of each other?",
      options: [
        "ethanol and ethanoic acid",
        "propanoic acid and methyl ethanoate",
        "butane and but-1-ene",
        "methanol and ethanol",
      ],
      correctKey: ["1"],
      marks: 1,
      workedSolution:
        "Isomers share one molecular formula but differ in structure. Propanoic acid (CH₃CH₂COOH) and methyl ethanoate (CH₃COOCH₃) are both C₃H₆O₂ — one a carboxylic acid, the other an ester. Every other pair differs in molecular formula, so they cannot be isomers. Count every atom before judging structures.",
      misconceptionTag: "isomer definition",
      mapsToProduct: "vault",
    },
    {
      id: "cp-c3-conduct",
      type: "mcq",
      topic: "C3 Chemical Bonding & Structure",
      stem: "Which substance conducts electricity when molten but not when solid?",
      options: ["copper", "graphite", "sodium chloride", "silicon dioxide"],
      correctKey: ["2"],
      marks: 1,
      workedSolution:
        "Sodium chloride is a giant ionic lattice: in the solid the ions are locked in fixed positions and cannot carry charge, but melting frees them to move, so the liquid conducts. Copper and graphite conduct in BOTH states (delocalised electrons); silicon dioxide conducts in neither. Always answer conductivity questions by naming the mobile charge carrier.",
      misconceptionTag: "structure → conductivity reasoning",
      mapsToProduct: "companion",
    },
    {
      id: "cp-c7-bleach",
      type: "mcq",
      topic: "C7 Redox Chemistry & Electrochemistry",
      stem: "Household bleach is made by passing chlorine into cold aqueous sodium hydroxide: Cl₂(g) + 2NaOH(aq) → NaCl(aq) + NaOCl(aq) + H₂O(l). Which statement about the chlorine is correct?",
      options: [
        "It is oxidised only.",
        "It is reduced only.",
        "It is both oxidised and reduced.",
        "Its oxidation state does not change.",
      ],
      correctKey: ["2"],
      marks: 1,
      workedSolution:
        "Assign oxidation states element by element: chlorine starts at 0 in Cl₂, falls to −1 in NaCl (reduced) and rises to +1 in NaOCl (oxidised). The same element moving both up and down is a disproportionation — a favourite setter's twist. The method to bank: write the oxidation state of the element in EVERY species before judging.",
      misconceptionTag: "oxidation-state method",
      mapsToProduct: "companion",
    },
    {
      id: "cp-c5-oxides",
      type: "mcq",
      topic: "C5 Acid-Base Chemistry",
      stem: "Which oxide reacts with both dilute hydrochloric acid and aqueous sodium hydroxide?",
      options: ["calcium oxide", "zinc oxide", "carbon dioxide", "copper(II) oxide"],
      correctKey: ["1"],
      marks: 1,
      workedSolution:
        "Zinc oxide is amphoteric — it neutralises hydrochloric acid (forming zinc chloride) and also dissolves in aqueous sodium hydroxide. Calcium oxide and copper(II) oxide are basic (react with acid only); carbon dioxide is acidic (reacts with alkali only). The amphoteric trio to memorise: ZnO, Al₂O₃, PbO.",
      misconceptionTag: "oxide classification",
      mapsToProduct: "vault",
    },
  ],
};

// Register new sets here. Subjects without a set are hidden from the picker
// and their deep links show a friendly "coming soon".
const SETS: DiagnosticSet[] = [CHEMISTRY_PURE_O];

export function getDiagnosticSet(level: string, slug: string): DiagnosticSet | undefined {
  return SETS.find((s) => s.level === level && s.slug === slug);
}

export function listDiagnosticSets(): {
  level: string;
  slug: string;
  topicLabel: string;
}[] {
  return SETS.map((s) => ({ level: s.level, slug: s.slug, topicLabel: s.topicLabel }));
}

// What the browser is allowed to see before submission.
export interface PublicQuestion {
  id: string;
  type: "mcq" | "short";
  topic: string;
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
    questions: set.questions.map(({ id, type, topic, stem, options, marks }) => ({
      id,
      type,
      topic,
      stem,
      options,
      marks,
    })),
    totalMarks: set.questions.reduce((sum, q) => sum + q.marks, 0),
  };
}
