import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical Chapter 3), section 2. Grounded in the practical KB: mass/weight, density,
// centre of gravity. Figure colours follow the fig-pr3 house key: weight W = red, normal reaction = green,
// tension/applied pull = amber, friction/motion = blue; object = pale blue; ground/rule/stand/string = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.2",
    code: "TP3.2",
    title: "Mass, weight and density",
    blurb: "Telling mass from weight, working out density, and finding the centre of gravity",
    steps: [
      {
        kind: "concept",
        heading: "Mass is the amount of matter",
        body: "*Mass* is the amount of *matter* in an object. It is a *scalar*, measured in kilograms, and it is the *same everywhere* because moving the object does not add or remove any matter.",
        say: "Mass tells you how much stuff, how much matter, an object contains. It is a scalar, so it has size but no direction, and we measure it in kilograms. Crucially, mass does not change when you carry the object about. A 2 kilogram bag is still 2 kilograms on the Moon, because the amount of matter has not changed.",
      },
      {
        kind: "concept",
        heading: "Weight is the pull of gravity",
        body: "*Weight* is the *gravitational force* on an object's mass. It is a *vector* pointing straight down, measured in newtons, and you find it with W = mg.",
        formula: {
          latex: "W = mg",
          where: [
            { sym: "W", meaning: "weight", unit: "N" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "Weight is different from mass. It is the pull of gravity on the object's mass, so it is a force, a vector, and it points straight down. We measure it in newtons. Multiply the mass in kilograms by g, which is about 10 newtons per kilogram in the lab, and you get the weight in newtons. Because g is smaller on the Moon, the same object weighs less there even though its mass is unchanged.",
      },
      {
        kind: "concept",
        heading: "Density is mass per unit volume",
        body: "*Density* tells you how much mass is packed into each unit of *volume*, rho = m / V. It is measured in *kilograms per cubic metre* or *grams per cubic centimetre*.",
        formula: {
          latex: "\\rho = \\dfrac{m}{V}",
          where: [
            { sym: "\\rho", meaning: "density", unit: "kg/m^3 or g/cm^3" },
            { sym: "m", meaning: "mass", unit: "kg or g" },
            { sym: "V", meaning: "volume", unit: "m^3 or cm^3" },
          ],
        },
        say: "Density compares how much mass is squeezed into a given volume. Divide the mass by the volume and you get the density. We often use grams per cubic centimetre for small solids, or kilograms per cubic metre for larger objects. A dense object carries a lot of mass in a small space.",
      },
      {
        kind: "insight",
        body: "An object *less dense* than water, below 1.0 grams per cubic centimetre, *floats*; an object *denser* than water *sinks*.",
        say: "Here is a handy rule. Water has a density of 1.0 grams per cubic centimetre. Anything less dense than that floats, and anything denser sinks. So a block of density 0.80 grams per cubic centimetre floats, while a metal of density 8 grams per cubic centimetre drops straight to the bottom.",
      },
      {
        kind: "concept",
        heading: "The centre of gravity",
        figure: "fig-pr3-03-centre-of-gravity",
        body: "The *centre of gravity* is the single point where all of the object's *weight* seems to act. For a flat *lamina* you find it with a *plumb line*.",
        say: "The centre of gravity is the one point where you can treat the whole weight as acting. This figure shows an irregular flat shape, a lamina, hung in turn from 3 small holes near its edge. Each time it hangs from a white stand, a plumb line, a string with a weight, drops straight down and a line is drawn along it. The lines cross at one point, and that crossing point is the centre of gravity.",
      },
      {
        kind: "choice",
        question: "An astronaut carries a toolbox from Earth to the Moon, where g is smaller. Which statement is correct?",
        options: [
          "Mass is a vector and weight is a scalar.",
          "Both the mass and the weight stay the same on the Moon.",
          "The mass is the same on the Moon but the weight is smaller there.",
          "The weight of the toolbox is measured in kilograms.",
        ],
        correct: 2,
        ask: "Mass is the amount of matter, so it does not change. Weight is m times g, and g is smaller on the Moon. Which option matches both facts?",
        hints: [
          "Mass is a scalar in kilograms and stays the same everywhere.",
          "Weight is a force in newtons, and a smaller g gives a smaller weight.",
        ],
        explain: "The mass is unchanged because the amount of matter is the same, but the weight is smaller on the Moon because g is smaller, and weight is m times g.",
      },
      {
        kind: "choice",
        question: "A mass of 0.650 kg hangs from a spring balance. Take g = 10 N/kg. What is its weight?",
        options: ["0.065 N", "6.50 N", "65.0 N", "0.650 N"],
        correct: 1,
        ask: "Weight is mass times g, so work out 0.650 × 10.",
        hints: [
          "Use W = m g with g equal to 10 newtons per kilogram.",
          "0.650 × 10 is 6.50, and the answer is a force in newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 0.650 \\times 10" },
          { label: "Answer", latex: "W = 6.50\\ \\text{N}" },
        ],
        explain: "The weight is 6.50 newtons, because 0.650 kilograms times 10 newtons per kilogram is 6.50 newtons.",
      },
      {
        kind: "choice",
        question: "A box of mass 2.5 kg rests on a bench (g = 10 N/kg). What is its weight on Earth?",
        options: ["0.25 N", "2.5 N", "12.5 N", "25 N"],
        correct: 3,
        ask: "Weight is mass times g, so work out 2.5 × 10.",
        hints: [
          "Use W = m g with g equal to 10 newtons per kilogram.",
          "2.5 × 10 is 25, and the answer is a force in newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 2.5 \\times 10" },
          { label: "Answer", latex: "W = 25\\ \\text{N}" },
        ],
        explain: "The weight is 25 newtons, because 2.5 kilograms times 10 newtons per kilogram is 25 newtons.",
      },
      {
        kind: "slider",
        prompt: "A rectangular block has mass 384 g and volume 12.0 x 8.0 x 5.0 = 480 cm^3. Set the slider to its density, in g/cm^3.",
        min: 0,
        max: 2,
        step: 0.01,
        unit: "g/cm^3",
        start: 0,
        targetMin: 0.79,
        targetMax: 0.81,
        ask: "Density is mass divided by volume, so work out 384 ÷ 480.",
        hints: [
          "Use rho equals mass divided by volume.",
          "384 ÷ 480 is 0.80, so slide to 0.80 grams per cubic centimetre.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{384}{480}" },
          { label: "Answer", latex: "\\rho = 0.80\\ \\text{g/cm}^3" },
        ],
        explain: "The density is 0.80 grams per cubic centimetre, because 384 grams divided by 480 cubic centimetres is 0.80.",
      },
      {
        kind: "choice",
        question: "The block above has a density of 0.80 g/cm^3. Water has a density of 1.0 g/cm^3. What happens when the block is placed in water?",
        options: [
          "It floats, because 0.80 g/cm^3 is less than 1.0 g/cm^3.",
          "It sinks, because 0.80 g/cm^3 is more than 1.0 g/cm^3.",
          "It stays exactly halfway, because the densities are equal.",
          "Its density changes to 1.0 g/cm^3 in the water.",
        ],
        correct: 0,
        ask: "Compare the block's density with the density of water. Less dense than water means it floats.",
        hints: [
          "An object less dense than water floats; a denser one sinks.",
          "0.80 is less than 1.0, so the block floats.",
        ],
        explain: "The block floats, because its density of 0.80 grams per cubic centimetre is less than the 1.0 grams per cubic centimetre of water.",
      },
    ],
  },
];
