// ── Formula bank ────────────────────────────────────────────────────────────
// The formulas a Singapore-Cambridge O-Level / N(A)-Level student must be able
// to produce from memory, keyed by subject FAMILY (both levels share a family,
// the drill filters by what the student owns). Standard textbook forms only;
// worded prompts ask for the formula the way an exam question would need it.
// ids are stable, they key the spaced-repetition cards. Do not renumber.

export interface FormulaCard {
  id: string;
  family: string; // matches Subject.family in catalogue.ts
  name: string; // what to ask for, e.g. "Kinetic energy"
  prompt: string; // the question shown to the student
  answer: string; // the formula, plain text
  note?: string; // symbols legend or a use hint
}

export const FORMULA_BANK: FormulaCard[] = [
  // ── Physics ──────────────────────────────────────────────────────────────
  { id: "phy-speed", family: "physics", name: "Average speed", prompt: "State the formula for average speed.", answer: "speed = distance / time", note: "v in m/s when distance is in m and time in s" },
  { id: "phy-acc", family: "physics", name: "Acceleration", prompt: "State the formula for acceleration.", answer: "a = (v - u) / t", note: "u = initial velocity, v = final velocity" },
  { id: "phy-density", family: "physics", name: "Density", prompt: "State the formula for density.", answer: "density = mass / volume", note: "kg/m3 or g/cm3" },
  { id: "phy-f-ma", family: "physics", name: "Newton's second law", prompt: "State the equation linking resultant force, mass and acceleration.", answer: "F = m x a", note: "F in newtons, m in kg, a in m/s2" },
  { id: "phy-weight", family: "physics", name: "Weight", prompt: "State the equation for weight.", answer: "W = m x g", note: "g = 10 N/kg at the surface of the Earth" },
  { id: "phy-moment", family: "physics", name: "Moment of a force", prompt: "State the formula for the moment of a force.", answer: "moment = force x perpendicular distance from the pivot", note: "unit: N m" },
  { id: "phy-pressure", family: "physics", name: "Pressure", prompt: "State the formula for pressure.", answer: "p = F / A", note: "pascals when F is in N and A in m2" },
  { id: "phy-liquid-pressure", family: "physics", name: "Pressure in a liquid", prompt: "State the formula for the pressure due to a liquid column.", answer: "p = density x g x h", note: "h = depth of the liquid" },
  { id: "phy-work", family: "physics", name: "Work done", prompt: "State the formula for work done by a force.", answer: "W = F x d", note: "d = distance moved in the direction of the force" },
  { id: "phy-ke", family: "physics", name: "Kinetic energy", prompt: "State the formula for kinetic energy.", answer: "KE = 1/2 x m x v^2", note: "doubling speed quadruples KE" },
  { id: "phy-gpe", family: "physics", name: "Gravitational potential energy", prompt: "State the formula for gravitational potential energy gained.", answer: "GPE = m x g x h", note: "h = vertical height gained" },
  { id: "phy-power", family: "physics", name: "Power", prompt: "State the formula for power.", answer: "P = W / t", note: "watts when work is in joules and time in seconds" },
  { id: "phy-efficiency", family: "physics", name: "Efficiency", prompt: "State the formula for efficiency.", answer: "efficiency = (useful energy output / total energy input) x 100%" },
  { id: "phy-heat", family: "physics", name: "Specific heat capacity", prompt: "State the formula for thermal energy needed to change temperature.", answer: "Q = m x c x change in temperature", note: "c = specific heat capacity" },
  { id: "phy-latent", family: "physics", name: "Specific latent heat", prompt: "State the formula for thermal energy needed to change state.", answer: "Q = m x l", note: "no temperature change during a change of state" },
  { id: "phy-wave", family: "physics", name: "Wave equation", prompt: "State the wave equation linking speed, frequency and wavelength.", answer: "v = f x wavelength", note: "wavelength symbol: lambda" },
  { id: "phy-period", family: "physics", name: "Period and frequency", prompt: "State the equation linking period and frequency.", answer: "T = 1 / f" },
  { id: "phy-charge", family: "physics", name: "Charge", prompt: "State the equation linking charge, current and time.", answer: "Q = I x t", note: "coulombs when I is in amperes and t in seconds" },
  { id: "phy-ohm", family: "physics", name: "Ohm's law", prompt: "State the equation linking voltage, current and resistance.", answer: "V = I x R" },
  { id: "phy-epower", family: "physics", name: "Electrical power", prompt: "State two formulas for electrical power.", answer: "P = V x I = I^2 x R", note: "also P = V^2 / R" },
  { id: "phy-eenergy", family: "physics", name: "Electrical energy", prompt: "State the formula for electrical energy transferred.", answer: "E = V x I x t" },

  // ── Chemistry ────────────────────────────────────────────────────────────
  { id: "chem-mole-mass", family: "chemistry", name: "Moles from mass", prompt: "State the formula linking moles, mass and molar mass.", answer: "n = m / Mr", note: "n in mol, m in g, Mr = relative molecular mass in g/mol" },
  { id: "chem-mole-gas", family: "chemistry", name: "Moles of a gas", prompt: "State the formula for moles of a gas at room temperature and pressure.", answer: "n = volume / 24 dm3", note: "24 dm3 (24000 cm3) per mole at r.t.p." },
  { id: "chem-conc-mol", family: "chemistry", name: "Concentration (mol/dm3)", prompt: "State the formula for concentration in mol/dm3.", answer: "concentration = moles / volume in dm3" },
  { id: "chem-conc-g", family: "chemistry", name: "Concentration (g/dm3)", prompt: "State the formula for concentration in g/dm3.", answer: "concentration = mass in g / volume in dm3", note: "g/dm3 = mol/dm3 x Mr" },
  { id: "chem-yield", family: "chemistry", name: "Percentage yield", prompt: "State the formula for percentage yield.", answer: "% yield = (actual yield / theoretical yield) x 100%" },
  { id: "chem-purity", family: "chemistry", name: "Percentage purity", prompt: "State the formula for percentage purity.", answer: "% purity = (mass of pure substance / total mass of sample) x 100%" },
  { id: "chem-composition", family: "chemistry", name: "Percentage composition", prompt: "State the formula for the percentage by mass of an element in a compound.", answer: "% by mass = (mass of element in formula / Mr of compound) x 100%" },

  // ── Biology ──────────────────────────────────────────────────────────────
  { id: "bio-magnification", family: "biology", name: "Magnification", prompt: "State the formula for magnification of a drawing.", answer: "magnification = image size / actual size", note: "same units top and bottom" },
  { id: "bio-percent-change", family: "biology", name: "Percentage change", prompt: "State the formula for percentage change (e.g. in mass of a potato strip).", answer: "% change = ((final - initial) / initial) x 100%" },

  // ── E-Math ───────────────────────────────────────────────────────────────
  { id: "em-pythagoras", family: "emath", name: "Pythagoras' theorem", prompt: "State Pythagoras' theorem for a right-angled triangle.", answer: "c^2 = a^2 + b^2", note: "c = hypotenuse" },
  { id: "em-trig-ratios", family: "emath", name: "Trigonometric ratios", prompt: "State the three trigonometric ratios (SOH CAH TOA).", answer: "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent" },
  { id: "em-sine-rule", family: "emath", name: "Sine rule", prompt: "State the sine rule.", answer: "a/sin A = b/sin B = c/sin C" },
  { id: "em-cosine-rule", family: "emath", name: "Cosine rule", prompt: "State the cosine rule.", answer: "a^2 = b^2 + c^2 - 2bc cos A" },
  { id: "em-area-sine", family: "emath", name: "Area of a triangle (sine)", prompt: "State the area of a triangle using two sides and the included angle.", answer: "Area = 1/2 x a x b x sin C" },
  { id: "em-arc", family: "emath", name: "Arc length", prompt: "State the formula for arc length (angle in degrees).", answer: "arc length = (angle/360) x 2 x pi x r" },
  { id: "em-sector", family: "emath", name: "Sector area", prompt: "State the formula for the area of a sector (angle in degrees).", answer: "sector area = (angle/360) x pi x r^2" },
  { id: "em-compound", family: "emath", name: "Compound interest", prompt: "State the compound interest total amount formula.", answer: "A = P x (1 + r/100)^n", note: "P = principal, r = rate per period, n = periods" },
  { id: "em-speed", family: "emath", name: "Speed, distance, time", prompt: "State the relationship between speed, distance and time.", answer: "speed = distance / time" },
  { id: "em-gradient", family: "emath", name: "Gradient of a line", prompt: "State the formula for the gradient of a line through two points.", answer: "m = (y2 - y1) / (x2 - x1)" },
  { id: "em-cone-vol", family: "emath", name: "Volume of a cone", prompt: "State the volume of a cone.", answer: "V = 1/3 x pi x r^2 x h" },
  { id: "em-sphere-vol", family: "emath", name: "Volume of a sphere", prompt: "State the volume of a sphere.", answer: "V = 4/3 x pi x r^3" },

  // ── A-Math ───────────────────────────────────────────────────────────────
  { id: "am-quadratic", family: "amath", name: "Quadratic formula", prompt: "State the quadratic formula for ax^2 + bx + c = 0.", answer: "x = (-b +/- sqrt(b^2 - 4ac)) / 2a" },
  { id: "am-discriminant", family: "amath", name: "Discriminant", prompt: "State the discriminant and what its sign tells you.", answer: "b^2 - 4ac; positive = two real roots, zero = one repeated root, negative = no real roots" },
  { id: "am-log-laws", family: "amath", name: "Logarithm laws", prompt: "State the three logarithm laws (product, quotient, power).", answer: "log(ab) = log a + log b; log(a/b) = log a - log b; log(a^n) = n log a" },
  { id: "am-log-change", family: "amath", name: "Change of base", prompt: "State the change-of-base formula for logarithms.", answer: "log_a b = log b / log a" },
  { id: "am-identity-1", family: "amath", name: "Pythagorean identity", prompt: "State the basic Pythagorean trigonometric identity.", answer: "sin^2 A + cos^2 A = 1", note: "divide by cos^2 A to get tan^2 A + 1 = sec^2 A" },
  { id: "am-tan", family: "amath", name: "Tangent identity", prompt: "Express tan A in terms of sin A and cos A.", answer: "tan A = sin A / cos A" },
  { id: "am-double-sin", family: "amath", name: "Double angle (sine)", prompt: "State the double angle formula for sin 2A.", answer: "sin 2A = 2 sin A cos A" },
  { id: "am-double-cos", family: "amath", name: "Double angle (cosine)", prompt: "State the double angle formulas for cos 2A.", answer: "cos 2A = cos^2 A - sin^2 A = 2cos^2 A - 1 = 1 - 2sin^2 A" },
  { id: "am-rformula", family: "amath", name: "R-formula", prompt: "State the R-formula form for a sin x + b cos x.", answer: "a sin x + b cos x = R sin(x + alpha), where R = sqrt(a^2 + b^2) and tan alpha = b/a" },
  { id: "am-diff-power", family: "amath", name: "Power rule (differentiation)", prompt: "State the derivative of x^n.", answer: "d/dx (x^n) = n x^(n-1)" },
  { id: "am-chain", family: "amath", name: "Chain rule", prompt: "State the chain rule.", answer: "dy/dx = dy/du x du/dx" },
  { id: "am-product", family: "amath", name: "Product rule", prompt: "State the product rule for differentiation.", answer: "d/dx (uv) = u dv/dx + v du/dx" },
  { id: "am-quotient", family: "amath", name: "Quotient rule", prompt: "State the quotient rule for differentiation.", answer: "d/dx (u/v) = (v du/dx - u dv/dx) / v^2" },
  { id: "am-integrate-power", family: "amath", name: "Power rule (integration)", prompt: "State the integral of x^n (n not equal to -1).", answer: "integral of x^n dx = x^(n+1) / (n+1) + c" },

  // ── Principles of Accounts ───────────────────────────────────────────────
  { id: "poa-equation", family: "poa", name: "Accounting equation", prompt: "State the accounting equation.", answer: "Assets = Liabilities + Owner's equity" },
  { id: "poa-cogs", family: "poa", name: "Cost of sales", prompt: "State the formula for cost of sales.", answer: "cost of sales = opening inventory + net purchases - closing inventory" },
  { id: "poa-gross", family: "poa", name: "Gross profit", prompt: "State the formula for gross profit.", answer: "gross profit = net sales revenue - cost of sales" },
  { id: "poa-gp-margin", family: "poa", name: "Gross profit margin", prompt: "State the formula for gross profit margin.", answer: "gross profit margin = (gross profit / net sales revenue) x 100%" },
  { id: "poa-current-ratio", family: "poa", name: "Current ratio", prompt: "State the formula for the current ratio.", answer: "current ratio = current assets / current liabilities" },
];

export function formulasForFamilies(families: Set<string>): FormulaCard[] {
  return FORMULA_BANK.filter((f) => families.has(f.family));
}

export function formulaById(id: string): FormulaCard | undefined {
  return FORMULA_BANK.find((f) => f.id === id);
}
