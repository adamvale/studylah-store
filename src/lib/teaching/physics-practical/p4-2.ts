import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (O-Level Practical, Paper 3), section 2. Grounded in Practical Chapter 04 (Heat), heat capacity.
// No figure is essential for this section. Numbers taken from the pre-checked calculation bank and recomputed.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.2",
    code: "TP4.2",
    title: "Heat capacity, specific heat capacity and Q = mcDeltaTheta",
    blurb: "How much heat warms an object, and the formula Q = mc DeltaTheta",
    steps: [
      {
        kind: "concept",
        heading: "Heating warms the particles",
        body: "When an object is heated *without* a change of state, the energy raises the *kinetic energy* of its particles, so they move faster and the *temperature* rises.",
        say: "Start with what heating actually does. When you warm something and it does not melt or boil, the energy you supply speeds up its particles. Faster particles mean more kinetic energy, and that is exactly what a rising temperature measures. No bonds are broken here, the particles simply jiggle harder.",
      },
      {
        kind: "concept",
        heading: "Heat capacity C",
        body: "The *heat capacity* C of an object is the heat needed to raise *its* temperature by 1 degree Celsius. It is measured in joules per degree Celsius and depends on both the *size* and the *material* of the object.",
        formula: {
          latex: "Q = C\\,\\Delta\\theta",
          where: [
            { sym: "Q", meaning: "heat supplied", unit: "J" },
            { sym: "C", meaning: "heat capacity of the object", unit: "J/degC" },
            { sym: "\\Delta\\theta", meaning: "temperature change", unit: "degC" },
          ],
        },
        say: "Heat capacity is a property of a whole object. It is the number of joules you must pour in to warm that object by 1 degree Celsius, so its unit is joules per degree Celsius. A big kettle of water has a larger heat capacity than a cup, because there is more of it, so heat capacity depends on both the size of the object and what it is made of.",
      },
      {
        kind: "concept",
        heading: "Specific heat capacity c",
        body: "The *specific heat capacity* c is the heat needed to raise *1 kg* of a substance by 1 degree Celsius. It is measured in joules per kilogram per degree Celsius and depends *only* on the material.",
        formula: {
          latex: "C = mc",
          where: [
            { sym: "C", meaning: "heat capacity of the object", unit: "J/degC" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "c", meaning: "specific heat capacity", unit: "J/(kg degC)" },
          ],
        },
        say: "Specific heat capacity strips out the size. It is the joules needed to warm just 1 kilogram of a material by 1 degree Celsius, so its unit is joules per kilogram per degree Celsius. Because it is fixed for a given substance, water always has a specific heat capacity of 4200, whatever the amount. To get the heat capacity of a real object, multiply its mass by its specific heat capacity, so C equals m times c.",
      },
      {
        kind: "concept",
        heading: "The heating formula",
        body: "The heat needed for a *temperature change* is the mass times the *specific heat capacity* times the *temperature rise*. This is the key equation, *Q = mc DeltaTheta*.",
        formula: {
          latex: "Q = mc\\,\\Delta\\theta",
          where: [
            { sym: "Q", meaning: "heat supplied", unit: "J" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "c", meaning: "specific heat capacity", unit: "J/(kg degC)" },
            { sym: "\\Delta\\theta", meaning: "temperature change", unit: "degC" },
          ],
        },
        say: "Here is the workhorse formula for heating. The heat Q equals the mass, times the specific heat capacity c, times the temperature change delta theta. Bigger mass, higher specific heat capacity, or a larger temperature rise all mean more heat is needed. Rearranged, the temperature change equals Q divided by m times c, which lets you find how many degrees a given amount of energy will raise something.",
      },
      {
        kind: "choice",
        question: "You heat some water and it gets hotter, but does not boil. What happens to its particles?",
        options: [
          "Their kinetic energy rises, so the temperature rises",
          "Their potential energy rises as bonds break",
          "They lose energy and slow down",
          "Nothing changes about them",
        ],
        correct: 0,
        ask: "There is no change of state here, so think about whether the particles speed up or their bonds break.",
        hints: [
          "Rising temperature is a sign of faster particles.",
          "Without melting or boiling, the energy goes into kinetic energy, not into breaking bonds.",
        ],
        explain: "The energy raises the kinetic energy of the particles, so they move faster and the temperature rises. Bonds only break during a change of state.",
      },
      {
        kind: "choice",
        question: "Which statement correctly distinguishes heat capacity from specific heat capacity?",
        options: [
          "Heat capacity is the heat to raise 1 kg by 1 degC; specific heat capacity is for the whole object",
          "Both depend only on the material, not the size",
          "Heat capacity is the heat to raise the whole object by 1 degC; specific heat capacity is the heat to raise 1 kg by 1 degC",
          "Specific heat capacity is measured in J/degC and heat capacity in J/(kg degC)",
        ],
        correct: 2,
        ask: "One quantity is about a whole object and depends on its size; the other is per kilogram and depends only on the material.",
        hints: [
          "Heat capacity C is for the actual object, so it depends on size.",
          "Specific heat capacity c is per kilogram, so it depends only on the material. They link by C = mc.",
        ],
        explain: "Heat capacity is the heat to raise the whole object by 1 degree Celsius and depends on size and material. Specific heat capacity is the heat to raise 1 kilogram by 1 degree Celsius and depends only on the material.",
      },
      {
        kind: "slider",
        prompt: "0.50 kg of water (c = 4200 J/(kg degC)) is heated from 20 degC to 80 degC. Set the slider to the heat needed, Q, in J.",
        min: 0,
        max: 200000,
        step: 1000,
        unit: "J",
        start: 0,
        targetMin: 125000,
        targetMax: 127000,
        ask: "Use Q equals m times c times the temperature change. The rise is 80 - 20, which is 60 degrees Celsius.",
        hints: [
          "First find the temperature change: 80 - 20 is 60.",
          "Q is 0.50 × 4200 × 60, which is 126000 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = mc\\,\\Delta\\theta" },
          { label: "Substitute", latex: "Q = 0.50 \\times 4200 \\times 60" },
          { label: "Answer", latex: "Q = 126000\\ \\text{J} = 1.26 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The heat needed is 126000 joules, which is 1.26 × 10 to the power 5 joules, because 0.50 × 4200 × 60 is 126000.",
      },
      {
        kind: "choice",
        question: "A 2.0 kg copper block (c = 385 J/(kg degC)) is heated by a 60 W heater for 300 s. All the energy warms the block. Find the temperature rise, DeltaTheta.",
        options: [
          "46 degC",
          "23 degC",
          "12 degC",
          "77 degC",
        ],
        correct: 1,
        ask: "First find the heat from Q equals power times time, then use DeltaTheta equals Q divided by m times c.",
        hints: [
          "Q is 60 × 300, which is 18000 joules.",
          "DeltaTheta is 18000 ÷ 2.0 × 385, which is 18000 ÷ 770, about 23.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{Q}{mc},\\quad Q = Pt" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{60 \\times 300}{2.0 \\times 385} = \\dfrac{18000}{770}" },
          { label: "Answer", latex: "\\Delta\\theta = 23\\ \\text{degC}" },
        ],
        explain: "The heat supplied is 60 × 300, which is 18000 joules. Dividing by 2.0 × 385, which is 770, gives a temperature rise of about 23 degrees Celsius.",
      },
      {
        kind: "choice",
        question: "In an experiment, 9400 J of energy is supplied to 0.10 kg of oil and a calorimeter of heat capacity 40 J/degC. Both rise by 40 degC. Find the specific heat capacity of the oil.",
        options: [
          "2350 J/(kg degC)",
          "1600 J/(kg degC)",
          "780 J/(kg degC)",
          "1950 J/(kg degC)",
        ],
        correct: 3,
        ask: "First take off the heat that warms the calorimeter, its heat capacity times the temperature rise, then divide the rest by the oil's mass times the rise.",
        hints: [
          "Heat to the calorimeter is 40 × 40, which is 1600 joules, so the oil gets 9400 - 1600, which is 7800 joules.",
          "c is 7800 ÷ 0.10 × 40, which is 7800 ÷ 4, which is 1950.",
        ],
        working: [
          { label: "Formula", latex: "c = \\dfrac{Q - C\\,\\Delta\\theta}{m\\,\\Delta\\theta}" },
          { label: "Substitute", latex: "c = \\dfrac{9400 - (40 \\times 40)}{0.10 \\times 40} = \\dfrac{7800}{4}" },
          { label: "Answer", latex: "c = 1950\\ \\text{J/(kg degC)}" },
        ],
        explain: "The calorimeter takes 40 × 40, which is 1600 joules, leaving 7800 joules for the oil. Dividing by 0.10 × 40, which is 4, gives 1950 joules per kilogram per degree Celsius.",
      },
      {
        kind: "insight",
        body: "*Heat capacity* belongs to a whole object and grows with its size, while *specific heat capacity* belongs to the material alone; combine mass, c and temperature rise in *Q = mc DeltaTheta*.",
        say: "Here is the idea to keep. Heat capacity is about a particular object, so a larger object has a larger heat capacity. Specific heat capacity is a fixed property of the material, the same for any amount. Whenever you heat something without changing its state, reach for Q equals m times c times the temperature change.",
      },
    ],
  },
];
