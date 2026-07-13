import type { TopicFamily } from "@/lib/catalogue";

// ─────────────────────────────────────────────────────────────────────────
// Subject-specific practice content for the dashboard "Practice" tab.
//
// ⚠️  FOR OWNER REVIEW. This is a conservative STARTER set authored in-house
// (not extracted from any paper). Every item is factual O/N-level material,
// but expand and verify against the current syllabus before leaning on it.
// Chemistry uses proper Unicode notation (H₂SO₄, Fe²⁺), see the
// diagnostic-chem-notation note; never regex it.
// ─────────────────────────────────────────────────────────────────────────

// 1. Keyword-precision trainer (sciences), the exact marker phrasing ---------
export interface PrecisionCard {
  topic: string;
  prompt: string;
  modelAnswer: string;
  keywords: string[]; // the words a marker looks for
}

export const PRECISION: Partial<Record<TopicFamily, PrecisionCard[]>> = {
  chemistry: [
    {
      topic: "Rate of reaction",
      prompt: "Explain, in terms of particles, why a higher temperature increases the rate of reaction.",
      modelAnswer:
        "At a higher temperature particles have more kinetic energy and move faster, so there are more frequent collisions AND a greater proportion of collisions have energy above the activation energy, so the frequency of effective collisions increases.",
      keywords: ["kinetic energy", "frequency", "effective collisions", "activation energy"],
    },
    {
      topic: "Rate of reaction",
      prompt: "Why does increasing the concentration of a reactant increase the rate?",
      modelAnswer:
        "There are more reactant particles per unit volume, so collisions are more frequent and the frequency of effective collisions increases.",
      keywords: ["per unit volume", "frequent", "effective collisions"],
    },
    {
      topic: "Energetics",
      prompt: "Define an exothermic reaction in energy terms.",
      modelAnswer:
        "A reaction that transfers energy to the surroundings, so the temperature of the surroundings rises; the products have less energy than the reactants.",
      keywords: ["to the surroundings", "products", "less energy than the reactants"],
    },
    {
      topic: "Electrolysis",
      prompt: "Why is the reaction at the cathode a reduction?",
      modelAnswer: "Cations gain electrons at the cathode, and reduction is gain of electrons.",
      keywords: ["gain", "electrons", "cathode", "reduction"],
    },
    {
      topic: "Acids & bases",
      prompt: "Describe what happens to the pH as a strong acid is neutralised by an alkali.",
      modelAnswer:
        "The H⁺ ions are removed as they react with OH⁻ to form water, so the pH rises towards 7 at the neutralisation point.",
      keywords: ["H⁺", "OH⁻", "water", "pH rises", "7"],
    },
  ],
  physics: [
    {
      topic: "Newton's laws",
      prompt: "State the relationship between resultant force, mass and acceleration.",
      modelAnswer:
        "The resultant force equals mass × acceleration; the acceleration is in the direction of the resultant force.",
      keywords: ["resultant force", "mass", "acceleration", "direction"],
    },
    {
      topic: "Thermal physics",
      prompt: "Explain, using particles, why a gas exerts a pressure on the walls of its container.",
      modelAnswer:
        "Gas particles are in constant random motion and collide with the walls; each collision exerts a force, and the force per unit area is the pressure.",
      keywords: ["random motion", "collide", "force", "per unit area"],
    },
    {
      topic: "Electromagnetic induction",
      prompt: "State the condition for an e.m.f. to be induced in a coil.",
      modelAnswer:
        "The magnetic flux linkage through the coil must change; the faster the rate of change of flux, the larger the induced e.m.f.",
      keywords: ["magnetic flux", "change", "rate of change", "induced e.m.f."],
    },
    {
      topic: "Waves",
      prompt: "Define the frequency of a wave.",
      modelAnswer: "The number of complete waves (oscillations) passing a point per unit time (per second).",
      keywords: ["number of complete waves", "per unit time"],
    },
  ],
  biology: [
    {
      topic: "Enzymes",
      prompt: "Explain why an enzyme stops working at high temperature.",
      modelAnswer:
        "The high temperature denatures the enzyme: the active site changes shape, so the substrate no longer fits and enzyme-substrate complexes cannot form.",
      keywords: ["denatured", "active site", "changes shape", "substrate", "no longer fits"],
    },
    {
      topic: "Transport in humans",
      prompt: "Describe how red blood cells are adapted for carrying oxygen.",
      modelAnswer:
        "They are biconcave, giving a large surface area to volume ratio for diffusion, contain haemoglobin to bind oxygen, and have no nucleus so there is more room for haemoglobin.",
      keywords: ["biconcave", "surface area", "haemoglobin", "no nucleus"],
    },
    {
      topic: "Diffusion",
      prompt: "Define diffusion.",
      modelAnswer:
        "The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient.",
      keywords: ["net movement", "higher concentration", "lower concentration", "gradient"],
    },
    {
      topic: "Photosynthesis",
      prompt: "State what happens to the products of photosynthesis.",
      modelAnswer:
        "Glucose is used in respiration, converted to starch for storage, or used to make cellulose and other molecules; oxygen is released as a by-product.",
      keywords: ["glucose", "respiration", "starch", "oxygen"],
    },
  ],
  fnn: [
    {
      topic: "Proteins",
      prompt: "Explain why protein is described as a body-building nutrient.",
      modelAnswer:
        "Protein provides amino acids used for the growth and repair of body tissues, and for making enzymes and antibodies.",
      keywords: ["amino acids", "growth", "repair", "enzymes"],
    },
    {
      topic: "Vitamins",
      prompt: "Explain one reason to avoid overcooking vegetables.",
      modelAnswer:
        "Vitamin C is water-soluble and heat-sensitive, so prolonged cooking in water destroys it and leaches it out, lowering the nutritional value.",
      keywords: ["water-soluble", "heat-sensitive", "destroyed", "nutritional value"],
    },
  ],
};

// 2. Definitions bank (flashcards), the verbatim-worthy definitions ----------
export interface DefinitionCard {
  term: string;
  definition: string;
  topic: string;
}

export const DEFINITIONS: Partial<Record<TopicFamily, DefinitionCard[]>> = {
  physics: [
    { term: "Speed", definition: "The distance travelled per unit time.", topic: "Kinematics" },
    { term: "Velocity", definition: "The rate of change of displacement (speed in a stated direction).", topic: "Kinematics" },
    { term: "Acceleration", definition: "The rate of change of velocity.", topic: "Kinematics" },
    { term: "Moment of a force", definition: "The product of the force and the perpendicular distance from the pivot to the line of action of the force.", topic: "Moments" },
    { term: "Density", definition: "Mass per unit volume.", topic: "Mass, weight, density" },
    { term: "Pressure", definition: "Force acting per unit area, normal to the surface.", topic: "Pressure" },
    { term: "Work done", definition: "The product of the force and the distance moved in the direction of the force.", topic: "Energy, work, power" },
    { term: "Power", definition: "The rate of doing work, or the rate of transfer of energy.", topic: "Energy, work, power" },
  ],
  biology: [
    { term: "Osmosis", definition: "The net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.", topic: "Movement in and out of cells" },
    { term: "Active transport", definition: "The movement of particles against a concentration gradient, using energy from respiration.", topic: "Movement in and out of cells" },
    { term: "Enzyme", definition: "A biological catalyst that speeds up a reaction and is not used up in the process.", topic: "Enzymes" },
    { term: "Respiration", definition: "The chemical reactions that break down nutrient molecules in living cells to release energy.", topic: "Respiration" },
    { term: "Photosynthesis", definition: "The process by which plants make glucose using carbon dioxide and water, in the presence of light and chlorophyll.", topic: "Nutrition in plants" },
    { term: "Homeostasis", definition: "The maintenance of a constant internal environment.", topic: "Homeostasis" },
    { term: "Transpiration", definition: "The loss of water vapour from the leaves of a plant by evaporation and diffusion through the stomata.", topic: "Transport in plants" },
  ],
  chemistry: [
    { term: "Element", definition: "A substance made of only one type of atom, which cannot be broken down into anything simpler by chemical means.", topic: "Atomic structure" },
    { term: "Compound", definition: "A substance containing two or more elements chemically combined in a fixed ratio.", topic: "Atomic structure" },
    { term: "Isotopes", definition: "Atoms of the same element with the same number of protons but a different number of neutrons.", topic: "Atomic structure" },
    { term: "Oxidation", definition: "The gain of oxygen, loss of hydrogen, or loss of electrons (increase in oxidation state).", topic: "Redox" },
    { term: "Reduction", definition: "The loss of oxygen, gain of hydrogen, or gain of electrons (decrease in oxidation state).", topic: "Redox" },
    { term: "Endothermic reaction", definition: "A reaction that takes in energy from the surroundings, so the temperature of the surroundings falls.", topic: "Energetics" },
  ],
};

// 3. Qualitative-analysis driller (chemistry), observation → conclusion ------
export interface QaDrill {
  test: string;
  observation: string;
  conclusion: string;
}

export const QA_DRILLS: QaDrill[] = [
  { test: "Add aqueous sodium hydroxide, then excess", observation: "Light blue precipitate, insoluble in excess", conclusion: "Cu²⁺" },
  { test: "Add aqueous sodium hydroxide, then excess", observation: "Green precipitate, insoluble in excess", conclusion: "Fe²⁺" },
  { test: "Add aqueous sodium hydroxide, then excess", observation: "Red-brown precipitate, insoluble in excess", conclusion: "Fe³⁺" },
  { test: "Add aqueous sodium hydroxide, then excess", observation: "White precipitate, soluble in excess (colourless solution)", conclusion: "Al³⁺ or Zn²⁺" },
  { test: "Add aqueous sodium hydroxide, then excess", observation: "White precipitate, insoluble in excess", conclusion: "Ca²⁺" },
  { test: "Add aqueous ammonia, then excess", observation: "Light blue precipitate, soluble in excess giving a dark blue solution", conclusion: "Cu²⁺" },
  { test: "Warm with aqueous sodium hydroxide; test the gas", observation: "Pungent gas turns damp red litmus paper blue", conclusion: "NH₄⁺" },
  { test: "Add dilute acid", observation: "Effervescence; the gas turns limewater milky", conclusion: "CO₃²⁻ (gas is CO₂)" },
  { test: "Acidify with dilute nitric acid, then add aqueous silver nitrate", observation: "White precipitate", conclusion: "Cl⁻" },
  { test: "Acidify with dilute nitric acid, then add aqueous barium nitrate", observation: "White precipitate", conclusion: "SO₄²⁻" },
  { test: "Insert a lighted splint", observation: "Burns with a 'pop'", conclusion: "H₂ gas" },
  { test: "Insert a glowing splint", observation: "The splint relights", conclusion: "O₂ gas" },
  { test: "Hold damp litmus paper in the gas", observation: "Damp blue litmus turns red, then is bleached white", conclusion: "Cl₂ gas" },
];

// 4. Careless-error checklist (maths), check before you move on ---------------
export interface CarelessItem {
  topic: string;
  checks: string[];
}

export const CARELESS: Partial<Record<TopicFamily, CarelessItem[]>> = {
  emath: [
    { topic: "Algebra", checks: ["Did the sign change when you moved a term across the =?", "Did you expand both terms in the bracket?", "Did you apply the power to the coefficient AND the variable?"] },
    { topic: "Indices", checks: ["Add powers when multiplying, subtract when dividing.", "Anything to the power 0 is 1.", "A negative power means reciprocal, not a negative number."] },
    { topic: "Trigonometry", checks: ["Is the calculator in DEGREES, not radians?", "Did you use the correct ratio (SOH-CAH-TOA)?", "For obtuse angles, remember the second solution."] },
    { topic: "Mensuration", checks: ["Are all lengths in the same unit before substituting?", "Did you use radius, not diameter, in the formula?", "Did you include units (cm², cm³) in the final answer?"] },
    { topic: "Statistics", checks: ["Did you order the data before finding the median?", "Mean = total ÷ frequency, not ÷ number of classes.", "Read the axis scale carefully, it may not go up in 1s."] },
    { topic: "Rounding", checks: ["Round only at the FINAL step, not mid-working.", "3 significant figures unless told otherwise.", "Money to 2 decimal places."] },
  ],
  amath: [
    { topic: "Differentiation", checks: ["Chain rule: × the derivative of the inside.", "Product/quotient rule, don't just differentiate each part.", "Set dy/dx = 0 for stationary points, then test the nature."] },
    { topic: "Integration", checks: ["Add + c for indefinite integrals.", "Increase the power by 1, then divide by the new power.", "Swap limits → change the sign."] },
    { topic: "Trigonometric identities", checks: ["Quote the identity before using it.", "Watch the range for the number of solutions.", "Convert everything to sin/cos before simplifying."] },
    { topic: "Logarithms & exponentials", checks: ["log a + log b = log(ab), not log(a+b).", "Check the base of the log.", "e^(ln x) = x and ln(e^x) = x."] },
    { topic: "Binomial theorem", checks: ["The general term uses (n choose r), check r.", "Powers of the two terms add to n.", "Include the sign of a negative term."] },
  ],
};

// 5. SBQ skill ladder (humanities), shared across geog/hist/social studies ---
export interface SbqRung {
  rung: string;
  what: string;
  how: string;
}

export const SBQ_LADDER: SbqRung[] = [
  { rung: "Comprehension / inference", what: "Draw a valid message from the source, go beyond copying.", how: "Start 'This source suggests that…' then support it with a detail you quote from the source." },
  { rung: "Purpose", what: "Explain WHY the source was produced.", how: "Link provenance (who, when, why) to the intended effect on the audience. 'The author wanted the reader to…'" },
  { rung: "Comparison", what: "Compare two sources by content AND message.", how: "Match a point from A with a point from B; say whether they agree or disagree, and quote both." },
  { rung: "Reliability / utility", what: "Judge how far a source can be trusted or used.", how: "Weigh provenance and tone against your own knowledge, not 'it's biased so it's useless'." },
  { rung: "Evaluation / 'How far do you agree'", what: "Reach a supported judgement using several sources.", how: "Group sources for and against, cross-reference them, then give a reasoned final stand." },
];

export const COMMAND_WORDS: { word: string; means: string }[] = [
  { word: "Describe", means: "Say what you see, the key features, no reasons needed." },
  { word: "Explain", means: "Give reasons, why or how, with a 'because'." },
  { word: "Compare", means: "Point out similarities AND differences, side by side." },
  { word: "Assess / Evaluate", means: "Weigh both sides and reach a judgement." },
  { word: "How far do you agree", means: "Argue for and against, then take a clear, supported stand." },
];

export const PEEL_TEMPLATE = [
  { letter: "P", label: "Point", detail: "State your argument directly, answering the question." },
  { letter: "E", label: "Evidence", detail: "Give specific facts, dates, statistics or a source detail." },
  { letter: "E", label: "Explain", detail: "Link the evidence back to the point, why does it matter?" },
  { letter: "L", label: "Link", detail: "Tie back to the question, or lead to your next point." },
];

// 6. POA statement-format templates -------------------------------------------
export interface PoaTemplate {
  name: string;
  lines: string[];
  note?: string;
}

export const POA_TEMPLATES: PoaTemplate[] = [
  {
    name: "Income Statement (Statement of Financial Performance)",
    lines: [
      "Revenue (Sales − Sales returns)",
      "Less: Cost of sales",
      "= Gross profit",
      "Add: Other income (e.g. discount received, commission)",
      "Less: Expenses (wages, rent, utilities, depreciation…)",
      "= Profit for the year",
    ],
    note: "Format marks are free marks, get the headings and the order right every time.",
  },
  {
    name: "Statement of Financial Position (Balance Sheet)",
    lines: [
      "Non-current assets (at net book value)",
      "Current assets (inventory, trade receivables, cash)",
      "Less: Current liabilities (trade payables, bank overdraft)",
      "= Net current assets (working capital)",
      "Less: Non-current liabilities (long-term loan)",
      "= Net assets  →  must equal Total equity",
      "Equity: Capital + Profit − Drawings",
    ],
  },
  {
    name: "Trial Balance (checkpoint)",
    lines: [
      "Debit column: assets, expenses, drawings, purchases",
      "Credit column: liabilities, income, capital, sales",
      "Totals of both columns must be equal",
    ],
    note: "A quick memory aid: DEAD-CLIC, Debits: Expenses, Assets, Drawings; Credits: Liabilities, Income, Capital.",
  },
];

// Which tools a set of owned subject families unlocks. Keeps the Practice tab
// showing only what's relevant to what the student bought.
export type PracticeTool =
  | "precision"
  | "definitions"
  | "qa"
  | "careless"
  | "sbq"
  | "poa";

export function toolsForFamilies(families: Set<TopicFamily>): PracticeTool[] {
  const tools: PracticeTool[] = [];
  const sciences: TopicFamily[] = ["chemistry", "physics", "biology", "fnn"];
  if (sciences.some((f) => families.has(f))) tools.push("precision");
  if (["physics", "biology", "chemistry"].some((f) => families.has(f as TopicFamily)))
    tools.push("definitions");
  if (families.has("chemistry")) tools.push("qa");
  if (families.has("emath") || families.has("amath")) tools.push("careless");
  if (["geography", "history", "social-studies"].some((f) => families.has(f as TopicFamily)))
    tools.push("sbq");
  if (families.has("poa")) tools.push("poa");
  return tools;
}
