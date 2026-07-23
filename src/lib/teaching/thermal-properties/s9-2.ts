import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, section 2. Grounded in KB Chapter 10 (sections 10.2, 10.3).
// Figure colours follow the T9 key: graph curves and cool regions = blue; axes/gridlines/guides = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t9.2",
    code: "T9.2",
    title: "Heat capacity and specific heat capacity",
    blurb: "How much energy it takes to warm a body, and why water is so slow to heat",
    steps: [
      {
        kind: "concept",
        heading: "Heat capacity",
        body: "The *heat capacity* C of a *body* is the energy needed to raise its *temperature* by 1 degree Celsius. A larger body needs more energy for the same rise, so it has a bigger heat capacity.",
        formula: {
          latex: "C = \\dfrac{Q}{\\theta}",
          where: [
            { sym: "C", meaning: "heat capacity", unit: "J/C" },
            { sym: "Q", meaning: "energy transferred", unit: "J" },
            { sym: "\\theta", meaning: "temperature change", unit: "C" },
          ],
        },
        say: "Heat capacity tells you how much energy a particular object needs to get 1 degree Celsius warmer. Divide the energy transferred by the temperature change and you get the heat capacity, in joules per degree Celsius. A heavy iron block needs far more energy for that 1 degree than a small nail, so the block has the larger heat capacity.",
      },
      {
        kind: "concept",
        heading: "Specific heat capacity",
        body: "The *specific heat capacity* c is the energy to raise *1 kilogram* of a *material* by 1 degree Celsius. It belongs to the material itself, not to how much you have, so it lets you predict the energy for any mass.",
        formula: {
          latex: "Q = m c \\theta",
          where: [
            { sym: "Q", meaning: "energy transferred", unit: "J" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "c", meaning: "specific heat capacity", unit: "J/(kg C)" },
            { sym: "\\theta", meaning: "temperature change", unit: "C" },
          ],
        },
        say: "Specific heat capacity fixes the size problem. It is the energy to warm just 1 kilogram of a material by 1 degree Celsius, measured in joules per kilogram per degree Celsius. Because it is a property of the material, water is always 4200 whether you have a cup or a bucket. To find the energy for a real object, multiply the mass, the specific heat capacity, and the temperature change together.",
      },
      {
        kind: "concept",
        heading: "Why water heats slowly",
        figure: "fig-10-03-cooling-curves-AB",
        body: "*Water* has a very high specific heat capacity of 4200, so it warms and cools *slowly*. A material with a *higher* c changes temperature more gradually, giving a *gentler* heating or cooling curve.",
        say: "This graph plots temperature against time for 2 equal masses cooled in the same way, drawn as 2 blue curves against grey axes. Curve A is the gentler, less steep one, so it changes temperature slowly and has the higher specific heat capacity. Curve B is steeper, dropping faster, so it has the lower specific heat capacity. Water behaves like curve A, which is why the sea stays mild long after the land has cooled.",
      },
      {
        kind: "choice",
        question: "2.0 kg of water is warmed from 20 C to 70 C. The specific heat capacity of water is 4200 J/(kg C). How much energy is transferred?",
        options: [
          "8.4 x 10^5 J",
          "2.1 x 10^5 J",
          "4.2 x 10^5 J",
          "4.2 x 10^4 J",
        ],
        correct: 2,
        ask: "Use Q equals m c theta. The temperature change is 70 minus 20, which is 50. Work out 2.0 times 4200 times 50.",
        hints: [
          "First find the temperature change: 70 minus 20 is 50.",
          "2.0 times 4200 times 50 is 420000, which is 4.2 times 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = m c \\theta" },
          { label: "Substitute", latex: "Q = 2.0 \\times 4200 \\times 50" },
          { label: "Answer", latex: "Q = 4.2 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The energy transferred is 4.2 times 10 to the power 5 joules, because 2.0 kilograms times 4200 times a 50 degree change is 420000 joules.",
      },
      {
        kind: "slider",
        prompt: "0.50 kg of aluminium is warmed from 25 C to 85 C. Its specific heat capacity is 900 J/(kg C). Set the slider to the energy transferred, in joules.",
        min: 0,
        max: 40000,
        step: 500,
        unit: "J",
        start: 0,
        targetMin: 26500,
        targetMax: 27500,
        ask: "Use Q equals m c theta. The temperature change is 85 minus 25, which is 60. Work out 0.50 times 900 times 60.",
        hints: [
          "The temperature change is 85 minus 25, which is 60.",
          "0.50 times 900 times 60 is 27000, which is 2.7 times 10 to the power 4 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = m c \\theta" },
          { label: "Substitute", latex: "Q = 0.50 \\times 900 \\times 60" },
          { label: "Answer", latex: "Q = 2.7 \\times 10^{4}\\ \\text{J}" },
        ],
        explain: "The energy transferred is 2.7 times 10 to the power 4 joules, because 0.50 kilograms times 900 times a 60 degree change is 27000 joules.",
      },
      {
        kind: "choice",
        question: "3000 J of energy raises the temperature of a metal block by 25 C. What is the heat capacity of the block?",
        options: [
          "75 J/C",
          "120 J/C",
          "3000 J/C",
          "0.0083 J/C",
        ],
        correct: 1,
        ask: "Heat capacity is energy divided by temperature change, so work out 3000 divided by 25.",
        hints: [
          "Use C equals Q divided by theta.",
          "3000 divided by 25 is 120, in joules per degree Celsius.",
        ],
        working: [
          { label: "Formula", latex: "C = \\dfrac{Q}{\\theta}" },
          { label: "Substitute", latex: "C = \\dfrac{3000}{25}" },
          { label: "Answer", latex: "C = 120\\ \\text{J/}^{\\circ}\\text{C}" },
        ],
        explain: "The heat capacity is 120 joules per degree Celsius, because 3000 joules divided by a 25 degree change is 120.",
      },
      {
        kind: "choice",
        question: "The same metal block has a heat capacity of 120 J/C and a mass of 0.40 kg. What is its specific heat capacity?",
        options: [
          "48 J/(kg C)",
          "0.0033 J/(kg C)",
          "480 J/(kg C)",
          "300 J/(kg C)",
        ],
        correct: 3,
        ask: "Specific heat capacity is the heat capacity divided by the mass, so work out 120 divided by 0.40.",
        hints: [
          "Use c equals C divided by m.",
          "120 divided by 0.40 is 300, in joules per kilogram per degree Celsius.",
        ],
        working: [
          { label: "Formula", latex: "c = \\dfrac{C}{m}" },
          { label: "Substitute", latex: "c = \\dfrac{120}{0.40}" },
          { label: "Answer", latex: "c = 300\\ \\text{J/(kg}\\,^{\\circ}\\text{C)}" },
        ],
        explain: "The specific heat capacity is 300 joules per kilogram per degree Celsius, because 120 divided by 0.40 kilograms is 300.",
      },
      {
        kind: "slider",
        prompt: "63000 J of energy is given to 1.5 kg of water (c = 4200 J/(kg C)). Set the slider to the temperature rise, in degrees Celsius.",
        min: 0,
        max: 30,
        step: 0.5,
        unit: "C",
        start: 0,
        targetMin: 9.5,
        targetMax: 10.5,
        ask: "Rearrange Q equals m c theta to get theta equals Q divided by m c. Work out 63000 divided by 1.5 times 4200.",
        hints: [
          "First find m times c: 1.5 times 4200 is 6300.",
          "63000 divided by 6300 is 10 degrees Celsius.",
        ],
        working: [
          { label: "Formula", latex: "\\theta = \\dfrac{Q}{m c}" },
          { label: "Substitute", latex: "\\theta = \\dfrac{63000}{1.5 \\times 4200}" },
          { label: "Answer", latex: "\\theta = 10\\ ^{\\circ}\\text{C}" },
        ],
        explain: "The temperature rise is 10 degrees Celsius, because 63000 joules divided by 6300 (that is 1.5 times 4200) is 10.",
      },
      {
        kind: "choice",
        question: "Two equal masses are cooled in the same way. Curve A is gentler (less steep) than curve B. Why does curve A have the higher specific heat capacity?",
        options: [
          "Curve A loses its heat faster, so it must store less energy per degree",
          "Curve A cools more slowly, so more energy leaves per degree of change, meaning a higher specific heat capacity",
          "Curve A must have a smaller mass than curve B",
          "Curve A starts at a higher temperature than curve B",
        ],
        correct: 1,
        ask: "A gentler curve means the temperature falls slowly for the energy lost. Think about how much energy each degree of change is worth.",
        hints: [
          "A less steep curve means the temperature changes slowly even as energy is transferred.",
          "Slower change per unit of energy means each degree costs more energy, which is a higher specific heat capacity.",
        ],
        explain: "Curve A is gentler because each degree of temperature change involves more energy, so its specific heat capacity is higher. The masses and starting conditions are the same, so only c differs.",
      },
      {
        kind: "insight",
        body: "The *same* energy makes a *small* temperature change in a *high* c material but a large change in a low c one, so materials with a high specific heat capacity are the *slow movers* of the thermal world.",
        say: "Here is the idea to keep. Pour the same energy into 2 objects of equal mass and the one with the higher specific heat capacity barely warms, while the low c one shoots up in temperature. That is why water, with its very high c of 4200, is used in cooling systems and warms slowly in the sun, while metals heat and cool in a flash.",
      },
    ],
  },
];
