// ── Formula bank ────────────────────────────────────────────────────────────
// The formulas a Singapore-Cambridge O-Level / N(A)-Level student must be able
// to produce from memory, keyed by subject FAMILY (both levels share a family,
// the drill filters by what the student owns). Formulas are written in real
// mathematical notation (Unicode: ½, ², ρ, λ, Δ, √, ±) so they render the way
// a textbook prints them, and every card carries a symbol legend with SI
// units where they apply. ids are stable, they key the spaced-repetition
// cards. Do not renumber.

export interface FormulaSymbol {
  sym: string;
  meaning: string;
  unit?: string; // SI unit; omitted where units don't apply (ratios, maths)
}

export interface FormulaCard {
  id: string;
  family: string; // matches Subject.family in catalogue.ts
  name: string; // what to ask for, e.g. "Kinetic energy"
  prompt: string; // the question shown to the student
  formula: string; // the formula in mathematical notation
  symbols: FormulaSymbol[];
  note?: string; // a use hint or memory hook
}

export const FORMULA_BANK: FormulaCard[] = [
  // ── Physics ──────────────────────────────────────────────────────────────
  {
    id: "phy-speed", family: "physics", name: "Average speed",
    prompt: "State the formula for average speed.",
    formula: "v = d ÷ t",
    symbols: [
      { sym: "v", meaning: "speed", unit: "m/s" },
      { sym: "d", meaning: "distance travelled", unit: "m" },
      { sym: "t", meaning: "time taken", unit: "s" },
    ],
  },
  {
    id: "phy-acc", family: "physics", name: "Acceleration",
    prompt: "State the formula for acceleration.",
    formula: "a = (v − u) ÷ t",
    symbols: [
      { sym: "a", meaning: "acceleration", unit: "m/s²" },
      { sym: "v", meaning: "final velocity", unit: "m/s" },
      { sym: "u", meaning: "initial velocity", unit: "m/s" },
      { sym: "t", meaning: "time taken", unit: "s" },
    ],
  },
  {
    id: "phy-density", family: "physics", name: "Density",
    prompt: "State the formula for density.",
    formula: "ρ = m ÷ V",
    symbols: [
      { sym: "ρ", meaning: "density", unit: "kg/m³" },
      { sym: "m", meaning: "mass", unit: "kg" },
      { sym: "V", meaning: "volume", unit: "m³" },
    ],
    note: "also g/cm³ with mass in g and volume in cm³",
  },
  {
    id: "phy-f-ma", family: "physics", name: "Newton's second law",
    prompt: "State the equation linking resultant force, mass and acceleration.",
    formula: "F = m × a",
    symbols: [
      { sym: "F", meaning: "resultant force", unit: "N" },
      { sym: "m", meaning: "mass", unit: "kg" },
      { sym: "a", meaning: "acceleration", unit: "m/s²" },
    ],
  },
  {
    id: "phy-weight", family: "physics", name: "Weight",
    prompt: "State the equation for weight.",
    formula: "W = m × g",
    symbols: [
      { sym: "W", meaning: "weight", unit: "N" },
      { sym: "m", meaning: "mass", unit: "kg" },
      { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
    ],
    note: "g = 10 N/kg at the Earth's surface",
  },
  {
    id: "phy-moment", family: "physics", name: "Moment of a force",
    prompt: "State the formula for the moment of a force.",
    formula: "moment = F × d⊥",
    symbols: [
      { sym: "moment", meaning: "turning effect of the force", unit: "N m" },
      { sym: "F", meaning: "force", unit: "N" },
      { sym: "d⊥", meaning: "perpendicular distance from the pivot to the line of action", unit: "m" },
    ],
  },
  {
    id: "phy-pressure", family: "physics", name: "Pressure",
    prompt: "State the formula for pressure.",
    formula: "p = F ÷ A",
    symbols: [
      { sym: "p", meaning: "pressure", unit: "Pa" },
      { sym: "F", meaning: "force acting normally", unit: "N" },
      { sym: "A", meaning: "area of contact", unit: "m²" },
    ],
    note: "1 Pa = 1 N/m²",
  },
  {
    id: "phy-liquid-pressure", family: "physics", name: "Pressure in a liquid",
    prompt: "State the formula for the pressure due to a liquid column.",
    formula: "p = ρ × g × h",
    symbols: [
      { sym: "p", meaning: "pressure due to the liquid", unit: "Pa" },
      { sym: "ρ", meaning: "density of the liquid", unit: "kg/m³" },
      { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
      { sym: "h", meaning: "depth below the surface", unit: "m" },
    ],
  },
  {
    id: "phy-work", family: "physics", name: "Work done",
    prompt: "State the formula for work done by a force.",
    formula: "W = F × d",
    symbols: [
      { sym: "W", meaning: "work done", unit: "J" },
      { sym: "F", meaning: "force", unit: "N" },
      { sym: "d", meaning: "distance moved in the direction of the force", unit: "m" },
    ],
  },
  {
    id: "phy-ke", family: "physics", name: "Kinetic energy",
    prompt: "State the formula for kinetic energy.",
    formula: "Eₖ = ½ m v²",
    symbols: [
      { sym: "Eₖ", meaning: "kinetic energy", unit: "J" },
      { sym: "m", meaning: "mass", unit: "kg" },
      { sym: "v", meaning: "speed", unit: "m/s" },
    ],
    note: "doubling the speed quadruples the kinetic energy",
  },
  {
    id: "phy-gpe", family: "physics", name: "Gravitational potential energy",
    prompt: "State the formula for gravitational potential energy gained.",
    formula: "Eₚ = m g h",
    symbols: [
      { sym: "Eₚ", meaning: "gravitational potential energy", unit: "J" },
      { sym: "m", meaning: "mass", unit: "kg" },
      { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
      { sym: "h", meaning: "vertical height gained", unit: "m" },
    ],
  },
  {
    id: "phy-power", family: "physics", name: "Power",
    prompt: "State the formula for power.",
    formula: "P = W ÷ t",
    symbols: [
      { sym: "P", meaning: "power", unit: "W" },
      { sym: "W", meaning: "work done (energy transferred)", unit: "J" },
      { sym: "t", meaning: "time taken", unit: "s" },
    ],
    note: "1 W = 1 J/s",
  },
  {
    id: "phy-efficiency", family: "physics", name: "Efficiency",
    prompt: "State the formula for efficiency.",
    formula: "efficiency = (useful energy output ÷ total energy input) × 100%",
    symbols: [
      { sym: "efficiency", meaning: "fraction of input energy usefully transferred, as a percentage" },
    ],
  },
  {
    id: "phy-heat", family: "physics", name: "Specific heat capacity",
    prompt: "State the formula for thermal energy needed to change temperature.",
    formula: "Q = m c Δθ",
    symbols: [
      { sym: "Q", meaning: "thermal energy transferred", unit: "J" },
      { sym: "m", meaning: "mass", unit: "kg" },
      { sym: "c", meaning: "specific heat capacity", unit: "J/(kg °C)" },
      { sym: "Δθ", meaning: "change in temperature", unit: "°C" },
    ],
  },
  {
    id: "phy-latent", family: "physics", name: "Specific latent heat",
    prompt: "State the formula for thermal energy needed to change state.",
    formula: "Q = m × l",
    symbols: [
      { sym: "Q", meaning: "thermal energy transferred", unit: "J" },
      { sym: "m", meaning: "mass changing state", unit: "kg" },
      { sym: "l", meaning: "specific latent heat", unit: "J/kg" },
    ],
    note: "no temperature change during a change of state",
  },
  {
    id: "phy-wave", family: "physics", name: "Wave equation",
    prompt: "State the wave equation linking speed, frequency and wavelength.",
    formula: "v = f λ",
    symbols: [
      { sym: "v", meaning: "wave speed", unit: "m/s" },
      { sym: "f", meaning: "frequency", unit: "Hz" },
      { sym: "λ", meaning: "wavelength", unit: "m" },
    ],
  },
  {
    id: "phy-period", family: "physics", name: "Period and frequency",
    prompt: "State the equation linking period and frequency.",
    formula: "T = 1 ÷ f",
    symbols: [
      { sym: "T", meaning: "period (time for one complete wave)", unit: "s" },
      { sym: "f", meaning: "frequency", unit: "Hz" },
    ],
  },
  {
    id: "phy-charge", family: "physics", name: "Charge",
    prompt: "State the equation linking charge, current and time.",
    formula: "Q = I × t",
    symbols: [
      { sym: "Q", meaning: "electric charge", unit: "C" },
      { sym: "I", meaning: "current", unit: "A" },
      { sym: "t", meaning: "time", unit: "s" },
    ],
  },
  {
    id: "phy-ohm", family: "physics", name: "Ohm's law",
    prompt: "State the equation linking voltage, current and resistance.",
    formula: "V = I × R",
    symbols: [
      { sym: "V", meaning: "potential difference (voltage)", unit: "V" },
      { sym: "I", meaning: "current", unit: "A" },
      { sym: "R", meaning: "resistance", unit: "Ω" },
    ],
  },
  {
    id: "phy-epower", family: "physics", name: "Electrical power",
    prompt: "State two formulas for electrical power.",
    formula: "P = V I = I² R",
    symbols: [
      { sym: "P", meaning: "electrical power", unit: "W" },
      { sym: "V", meaning: "potential difference", unit: "V" },
      { sym: "I", meaning: "current", unit: "A" },
      { sym: "R", meaning: "resistance", unit: "Ω" },
    ],
    note: "also P = V² ÷ R",
  },
  {
    id: "phy-eenergy", family: "physics", name: "Electrical energy",
    prompt: "State the formula for electrical energy transferred.",
    formula: "E = V I t",
    symbols: [
      { sym: "E", meaning: "electrical energy transferred", unit: "J" },
      { sym: "V", meaning: "potential difference", unit: "V" },
      { sym: "I", meaning: "current", unit: "A" },
      { sym: "t", meaning: "time", unit: "s" },
    ],
  },

  // ── Chemistry ────────────────────────────────────────────────────────────
  {
    id: "chem-mole-mass", family: "chemistry", name: "Moles from mass",
    prompt: "State the formula linking moles, mass and molar mass.",
    formula: "n = m ÷ Mᵣ",
    symbols: [
      { sym: "n", meaning: "amount of substance", unit: "mol" },
      { sym: "m", meaning: "mass", unit: "g" },
      { sym: "Mᵣ", meaning: "relative molecular (molar) mass", unit: "g/mol" },
    ],
  },
  {
    id: "chem-mole-gas", family: "chemistry", name: "Moles of a gas",
    prompt: "State the formula for moles of a gas at room temperature and pressure.",
    formula: "n = V ÷ 24 dm³",
    symbols: [
      { sym: "n", meaning: "amount of gas", unit: "mol" },
      { sym: "V", meaning: "volume of gas at r.t.p.", unit: "dm³" },
    ],
    note: "one mole of any gas occupies 24 dm³ (24000 cm³) at r.t.p.",
  },
  {
    id: "chem-conc-mol", family: "chemistry", name: "Concentration (mol/dm³)",
    prompt: "State the formula for concentration in mol/dm³.",
    formula: "c = n ÷ V",
    symbols: [
      { sym: "c", meaning: "concentration", unit: "mol/dm³" },
      { sym: "n", meaning: "amount of solute", unit: "mol" },
      { sym: "V", meaning: "volume of solution", unit: "dm³" },
    ],
  },
  {
    id: "chem-conc-g", family: "chemistry", name: "Concentration (g/dm³)",
    prompt: "State the formula for concentration in g/dm³.",
    formula: "c = m ÷ V",
    symbols: [
      { sym: "c", meaning: "concentration", unit: "g/dm³" },
      { sym: "m", meaning: "mass of solute", unit: "g" },
      { sym: "V", meaning: "volume of solution", unit: "dm³" },
    ],
    note: "g/dm³ = mol/dm³ × Mᵣ",
  },
  {
    id: "chem-yield", family: "chemistry", name: "Percentage yield",
    prompt: "State the formula for percentage yield.",
    formula: "% yield = (actual yield ÷ theoretical yield) × 100%",
    symbols: [
      { sym: "actual yield", meaning: "mass (or moles) actually obtained" },
      { sym: "theoretical yield", meaning: "mass (or moles) predicted from the equation" },
    ],
  },
  {
    id: "chem-purity", family: "chemistry", name: "Percentage purity",
    prompt: "State the formula for percentage purity.",
    formula: "% purity = (mass of pure substance ÷ total mass of sample) × 100%",
    symbols: [
      { sym: "pure substance", meaning: "mass of the wanted compound in the sample", unit: "g" },
      { sym: "sample", meaning: "total mass of the impure sample", unit: "g" },
    ],
  },
  {
    id: "chem-composition", family: "chemistry", name: "Percentage composition",
    prompt: "State the formula for the percentage by mass of an element in a compound.",
    formula: "% by mass = (mass of element in formula ÷ Mᵣ of compound) × 100%",
    symbols: [
      { sym: "Mᵣ", meaning: "relative molecular mass of the compound", unit: "g/mol" },
    ],
  },

  // ── Biology ──────────────────────────────────────────────────────────────
  {
    id: "bio-magnification", family: "biology", name: "Magnification",
    prompt: "State the formula for magnification of a drawing.",
    formula: "magnification = image size ÷ actual size",
    symbols: [
      { sym: "image size", meaning: "measured size of the drawing or image", unit: "mm" },
      { sym: "actual size", meaning: "true size of the specimen", unit: "mm" },
    ],
    note: "same units top and bottom; magnification itself has NO unit",
  },
  {
    id: "bio-percent-change", family: "biology", name: "Percentage change",
    prompt: "State the formula for percentage change (e.g. in mass of a potato strip).",
    formula: "% change = ((final − initial) ÷ initial) × 100%",
    symbols: [
      { sym: "final", meaning: "value after the experiment", unit: "g" },
      { sym: "initial", meaning: "value before the experiment", unit: "g" },
    ],
  },

  // ── E-Math ───────────────────────────────────────────────────────────────
  {
    id: "em-pythagoras", family: "emath", name: "Pythagoras' theorem",
    prompt: "State Pythagoras' theorem for a right-angled triangle.",
    formula: "c² = a² + b²",
    symbols: [
      { sym: "c", meaning: "hypotenuse (side opposite the right angle)" },
      { sym: "a, b", meaning: "the two shorter sides" },
    ],
  },
  {
    id: "em-trig-ratios", family: "emath", name: "Trigonometric ratios",
    prompt: "State the three trigonometric ratios (SOH CAH TOA).",
    formula: "sin θ = opp ÷ hyp,  cos θ = adj ÷ hyp,  tan θ = opp ÷ adj",
    symbols: [
      { sym: "opp", meaning: "side opposite the angle θ" },
      { sym: "adj", meaning: "side adjacent to the angle θ" },
      { sym: "hyp", meaning: "hypotenuse" },
    ],
  },
  {
    id: "em-sine-rule", family: "emath", name: "Sine rule",
    prompt: "State the sine rule.",
    formula: "a ÷ sin A = b ÷ sin B = c ÷ sin C",
    symbols: [
      { sym: "a, b, c", meaning: "sides of the triangle" },
      { sym: "A, B, C", meaning: "angles opposite those sides" },
    ],
  },
  {
    id: "em-cosine-rule", family: "emath", name: "Cosine rule",
    prompt: "State the cosine rule.",
    formula: "a² = b² + c² − 2bc cos A",
    symbols: [
      { sym: "a", meaning: "side opposite angle A" },
      { sym: "b, c", meaning: "the other two sides" },
    ],
  },
  {
    id: "em-area-sine", family: "emath", name: "Area of a triangle (sine)",
    prompt: "State the area of a triangle using two sides and the included angle.",
    formula: "Area = ½ a b sin C",
    symbols: [
      { sym: "a, b", meaning: "two sides of the triangle" },
      { sym: "C", meaning: "the angle BETWEEN those two sides" },
    ],
  },
  {
    id: "em-arc", family: "emath", name: "Arc length",
    prompt: "State the formula for arc length (angle in degrees).",
    formula: "arc length = (θ ÷ 360°) × 2πr",
    symbols: [
      { sym: "θ", meaning: "angle at the centre", unit: "°" },
      { sym: "r", meaning: "radius", unit: "cm" },
    ],
  },
  {
    id: "em-sector", family: "emath", name: "Sector area",
    prompt: "State the formula for the area of a sector (angle in degrees).",
    formula: "sector area = (θ ÷ 360°) × πr²",
    symbols: [
      { sym: "θ", meaning: "angle at the centre", unit: "°" },
      { sym: "r", meaning: "radius", unit: "cm" },
    ],
  },
  {
    id: "em-compound", family: "emath", name: "Compound interest",
    prompt: "State the compound interest total amount formula.",
    formula: "A = P (1 + r/100)ⁿ",
    symbols: [
      { sym: "A", meaning: "total amount after n periods", unit: "$" },
      { sym: "P", meaning: "principal (starting amount)", unit: "$" },
      { sym: "r", meaning: "interest rate per period", unit: "%" },
      { sym: "n", meaning: "number of periods" },
    ],
  },
  {
    id: "em-speed", family: "emath", name: "Speed, distance, time",
    prompt: "State the relationship between speed, distance and time.",
    formula: "speed = distance ÷ time",
    symbols: [
      { sym: "speed", meaning: "how fast", unit: "km/h or m/s" },
      { sym: "distance", meaning: "how far", unit: "km or m" },
      { sym: "time", meaning: "how long", unit: "h or s" },
    ],
  },
  {
    id: "em-gradient", family: "emath", name: "Gradient of a line",
    prompt: "State the formula for the gradient of a line through two points.",
    formula: "m = (y₂ − y₁) ÷ (x₂ − x₁)",
    symbols: [
      { sym: "m", meaning: "gradient (steepness)" },
      { sym: "(x₁, y₁), (x₂, y₂)", meaning: "the two points on the line" },
    ],
  },
  {
    id: "em-cone-vol", family: "emath", name: "Volume of a cone",
    prompt: "State the volume of a cone.",
    formula: "V = ⅓ πr²h",
    symbols: [
      { sym: "V", meaning: "volume", unit: "cm³" },
      { sym: "r", meaning: "radius of the base", unit: "cm" },
      { sym: "h", meaning: "perpendicular height", unit: "cm" },
    ],
  },
  {
    id: "em-sphere-vol", family: "emath", name: "Volume of a sphere",
    prompt: "State the volume of a sphere.",
    formula: "V = 4⁄3 πr³",
    symbols: [
      { sym: "V", meaning: "volume", unit: "cm³" },
      { sym: "r", meaning: "radius", unit: "cm" },
    ],
  },

  // ── A-Math ───────────────────────────────────────────────────────────────
  {
    id: "am-quadratic", family: "amath", name: "Quadratic formula",
    prompt: "State the quadratic formula for ax² + bx + c = 0.",
    formula: "x = (−b ± √(b² − 4ac)) ÷ 2a",
    symbols: [
      { sym: "a, b, c", meaning: "coefficients of the quadratic (a ≠ 0)" },
    ],
  },
  {
    id: "am-discriminant", family: "amath", name: "Discriminant",
    prompt: "State the discriminant and what its sign tells you.",
    formula: "b² − 4ac",
    symbols: [
      { sym: "> 0", meaning: "two distinct real roots" },
      { sym: "= 0", meaning: "one repeated (equal) root" },
      { sym: "< 0", meaning: "no real roots" },
    ],
  },
  {
    id: "am-log-laws", family: "amath", name: "Logarithm laws",
    prompt: "State the three logarithm laws (product, quotient, power).",
    formula: "log(ab) = log a + log b,  log(a÷b) = log a − log b,  log(aⁿ) = n log a",
    symbols: [
      { sym: "a, b", meaning: "positive numbers" },
      { sym: "n", meaning: "any real power" },
    ],
  },
  {
    id: "am-log-change", family: "amath", name: "Change of base",
    prompt: "State the change-of-base formula for logarithms.",
    formula: "logₐ b = log b ÷ log a",
    symbols: [
      { sym: "a", meaning: "the old base (a > 0, a ≠ 1)" },
      { sym: "b", meaning: "the number whose log you want" },
    ],
  },
  {
    id: "am-identity-1", family: "amath", name: "Pythagorean identity",
    prompt: "State the basic Pythagorean trigonometric identity.",
    formula: "sin²A + cos²A = 1",
    symbols: [{ sym: "A", meaning: "any angle" }],
    note: "divide by cos²A to get tan²A + 1 = sec²A",
  },
  {
    id: "am-tan", family: "amath", name: "Tangent identity",
    prompt: "Express tan A in terms of sin A and cos A.",
    formula: "tan A = sin A ÷ cos A",
    symbols: [{ sym: "A", meaning: "any angle where cos A ≠ 0" }],
  },
  {
    id: "am-double-sin", family: "amath", name: "Double angle (sine)",
    prompt: "State the double angle formula for sin 2A.",
    formula: "sin 2A = 2 sin A cos A",
    symbols: [{ sym: "A", meaning: "any angle" }],
  },
  {
    id: "am-double-cos", family: "amath", name: "Double angle (cosine)",
    prompt: "State the double angle formulas for cos 2A.",
    formula: "cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A",
    symbols: [{ sym: "A", meaning: "any angle" }],
  },
  {
    id: "am-rformula", family: "amath", name: "R-formula",
    prompt: "State the R-formula form for a sin x + b cos x.",
    formula: "a sin x + b cos x = R sin(x + α),  R = √(a² + b²),  tan α = b ÷ a",
    symbols: [
      { sym: "R", meaning: "amplitude, always positive" },
      { sym: "α", meaning: "the phase angle (acute)" },
    ],
  },
  {
    id: "am-diff-power", family: "amath", name: "Power rule (differentiation)",
    prompt: "State the derivative of xⁿ.",
    formula: "d/dx (xⁿ) = n xⁿ⁻¹",
    symbols: [{ sym: "n", meaning: "any real power" }],
  },
  {
    id: "am-chain", family: "amath", name: "Chain rule",
    prompt: "State the chain rule.",
    formula: "dy/dx = dy/du × du/dx",
    symbols: [{ sym: "u", meaning: "the inner function y is written in terms of" }],
  },
  {
    id: "am-product", family: "amath", name: "Product rule",
    prompt: "State the product rule for differentiation.",
    formula: "d/dx (uv) = u dv/dx + v du/dx",
    symbols: [{ sym: "u, v", meaning: "functions of x" }],
  },
  {
    id: "am-quotient", family: "amath", name: "Quotient rule",
    prompt: "State the quotient rule for differentiation.",
    formula: "d/dx (u÷v) = (v du/dx − u dv/dx) ÷ v²",
    symbols: [{ sym: "u, v", meaning: "functions of x (v ≠ 0)" }],
  },
  {
    id: "am-integrate-power", family: "amath", name: "Power rule (integration)",
    prompt: "State the integral of xⁿ (n ≠ −1).",
    formula: "∫ xⁿ dx = xⁿ⁺¹ ÷ (n + 1) + c",
    symbols: [
      { sym: "n", meaning: "any real power except −1" },
      { sym: "c", meaning: "the constant of integration, never forget it" },
    ],
  },

  // ── Principles of Accounts ───────────────────────────────────────────────
  {
    id: "poa-equation", family: "poa", name: "Accounting equation",
    prompt: "State the accounting equation.",
    formula: "Assets = Liabilities + Owner's equity",
    symbols: [
      { sym: "Assets", meaning: "resources the business owns", unit: "$" },
      { sym: "Liabilities", meaning: "amounts the business owes", unit: "$" },
      { sym: "Owner's equity", meaning: "owner's claim on the business", unit: "$" },
    ],
  },
  {
    id: "poa-cogs", family: "poa", name: "Cost of sales",
    prompt: "State the formula for cost of sales.",
    formula: "cost of sales = opening inventory + net purchases − closing inventory",
    symbols: [
      { sym: "net purchases", meaning: "purchases less returns outwards, plus carriage inwards", unit: "$" },
    ],
  },
  {
    id: "poa-gross", family: "poa", name: "Gross profit",
    prompt: "State the formula for gross profit.",
    formula: "gross profit = net sales revenue − cost of sales",
    symbols: [
      { sym: "net sales revenue", meaning: "sales less returns inwards", unit: "$" },
    ],
  },
  {
    id: "poa-gp-margin", family: "poa", name: "Gross profit margin",
    prompt: "State the formula for gross profit margin.",
    formula: "gross profit margin = (gross profit ÷ net sales revenue) × 100%",
    symbols: [
      { sym: "margin", meaning: "profit made per dollar of sales", unit: "%" },
    ],
  },
  {
    id: "poa-current-ratio", family: "poa", name: "Current ratio",
    prompt: "State the formula for the current ratio.",
    formula: "current ratio = current assets ÷ current liabilities",
    symbols: [
      { sym: "current assets", meaning: "cash and assets convertible within a year", unit: "$" },
      { sym: "current liabilities", meaning: "debts due within a year", unit: "$" },
    ],
  },
];

export function formulasForFamilies(families: Set<string>): FormulaCard[] {
  return FORMULA_BANK.filter((f) => families.has(f.family));
}

export function formulaById(id: string): FormulaCard | undefined {
  return FORMULA_BANK.find((f) => f.id === id);
}
