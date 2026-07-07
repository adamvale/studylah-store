import type { TopicFamily } from "./catalogue";

// Representative syllabus topics per subject family. Used for the hero
// forecast card, the free heatmap teaser, and placeholder accuracy data.
export const TOPIC_POOLS: Record<TopicFamily, string[]> = {
  chemistry: [
    "Electrolysis",
    "Mole concept and stoichiometry",
    "Acids, bases and salts",
    "Qualitative analysis",
    "Redox reactions",
    "Organic chemistry: alkenes and alcohols",
    "Metals and the reactivity series",
    "Rate of reaction",
    "Chemical bonding",
    "Air and the environment",
  ],
  physics: [
    "Electromagnetic induction",
    "D.C. circuits",
    "Kinematics graphs",
    "Thermal properties of matter",
    "Waves and sound",
    "Light: refraction and lenses",
    "Forces and moments",
    "Pressure",
    "Radioactivity",
    "Static electricity",
  ],
  biology: [
    "Homeostasis",
    "Transport in humans",
    "Photosynthesis and plant nutrition",
    "Cell structure and organisation",
    "Enzymes",
    "Respiration",
    "Reproduction in plants",
    "Inheritance",
    "Ecology and food chains",
    "Excretion",
  ],
  geography: [
    "Coastal processes and landforms",
    "Plate tectonics and volcanoes",
    "Weather and climate",
    "Tourism development",
    "Food resources",
    "Health and diseases",
    "Population dynamics",
    "Water resources",
  ],
  history: [
    "Rise of authoritarian regimes",
    "World War II in the Asia-Pacific",
    "Origins of the Cold War",
    "The Korean War",
    "The Cuban Missile Crisis",
    "End of the Cold War",
    "The League of Nations",
    "Singapore's road to independence",
  ],
  "social-studies": [
    "Citizenship and governance",
    "Trade-offs in resource management",
    "Living in a diverse society",
    "Globalisation's impact on Singapore",
    "Source-based case study skills",
    "Being part of Singapore",
  ],
  poa: [
    "Financial statements preparation",
    "Bank reconciliation",
    "Depreciation of non-current assets",
    "Trial balance and correction of errors",
    "Accruals and prepayments",
    "Inventory valuation",
    "Capital and revenue expenditure",
    "Ratio analysis",
  ],
  emath: [
    "Quadratic functions and graphs",
    "Trigonometry: sine and cosine rules",
    "Circle properties",
    "Statistics: cumulative frequency",
    "Probability",
    "Vectors",
    "Similarity and congruence",
    "Financial arithmetic",
  ],
  amath: [
    "Differentiation and its applications",
    "Integration",
    "Trigonometric identities and equations",
    "Binomial theorem",
    "Logarithmic and exponential functions",
    "Coordinate geometry of circles",
    "Polynomials and partial fractions",
    "Kinematics with calculus",
  ],
  fnn: [
    "Macronutrients and health",
    "Food safety and hygiene",
    "Meal planning for dietary needs",
    "Food science: raising agents",
    "Consumer food choices",
    "Food waste and sustainability",
  ],
};

// Deterministic hash so placeholder data is stable across renders/builds.
export function seededHash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export interface TopicForecast {
  topic: string;
  probability: number;
}

// Top-5 forecast for a subject: descending probabilities with small
// deterministic per-subject variation.
export function topForecast(family: TopicFamily, seedKey: string): TopicForecast[] {
  const pool = TOPIC_POOLS[family];
  const base = [86, 74, 61, 48, 33];
  const h = seededHash(seedKey);
  const start = h % Math.max(1, pool.length - 5);
  return base.map((p, i) => ({
    topic: pool[(start + i) % pool.length],
    probability: Math.min(94, Math.max(20, p + ((h >> (i * 3)) % 7) - 3)),
  }));
}
