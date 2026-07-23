import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 4. Grounded in KB Chapter 03 (Mass and Weight) sections 3.5 and 3.6.

export const BOXES: Subconcept[] = [
  {
    id: "t3.4",
    code: "T3.4",
    title: "Weight and W = mg",
    blurb: "Weight as the pull of gravity, and why g works two ways",
    steps: [
      {
        kind: "concept",
        heading: "Weight",
        body: "*Weight* is the *gravitational force* that acts on an object because it has mass. It is a *vector*, and its unit is the newton.",
        formula: {
          latex: "W = mg",
          where: [
            { sym: "W", meaning: "weight", unit: "N" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "Weight is the pull of gravity on an object's mass. To find it, multiply the mass by g, the gravitational field strength, which is about 10 newtons per kilogram on Earth. Because weight is a force with a direction, toward the planet's centre, it is a vector, and we measure it in newtons.",
      },
      {
        kind: "concept",
        heading: "Weight changes with place",
        body: "*Mass* stays the same everywhere, but *weight* depends on *g*, so the same object weighs less where the gravitational field is weaker.",
        say: "Here is the idea that trips people up. Mass never changes, but weight does, because weight depends on g. On Earth g is about 10 newtons per kilogram, but on the Moon it is only about 1.6. So a 1 kilogram mass weighs 10 newtons on Earth and just 1.6 newtons on the Moon, even though it is the very same lump of matter.",
      },
      {
        kind: "insight",
        body: "The *gravitational field strength* and the *acceleration of free fall* are the same quantity: on Earth both are about 10, because 1 N/kg equals 1 m/s^2.",
        formula: {
          latex: "1\\ \\text{N/kg} = 1\\ \\text{m/s}^2",
        },
        say: "Here is a neat link. The gravitational field strength, 10 newtons per kilogram, and the acceleration of free fall, 10 metres per second squared, are really the same quantity. That is because 1 newton per kilogram works out to be exactly 1 metre per second squared. So the number 10 does double duty in this topic.",
      },
      {
        kind: "choice",
        question: "A 3 kg mass rests on the Earth, where g = 10 N/kg. Find its weight W.",
        options: ["30 N", "3 N", "0.3 N", "13 N"],
        correct: 0,
        ask: "Weight is mass times g, so work out 3 times 10. Which option matches?",
        hints: [
          "Use W equals m times g.",
          "3 times 10 is 30, and the unit of weight is the newton.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 3 \\times 10" },
          { label: "Answer", latex: "W = 30\\ \\text{N}" },
        ],
        explain: "The weight is 30 newtons, because 3 kilograms times 10 newtons per kilogram gives 30 newtons.",
      },
      {
        kind: "slider",
        prompt: "A 6 kg mass sits on the Moon, where g is 1.6 N/kg. Set the slider to its weight, in newtons.",
        min: 0,
        max: 60,
        step: 0.1,
        unit: "N",
        start: 0,
        targetMin: 9.5,
        targetMax: 9.7,
        ask: "On the Moon the weight is still mass times g, so work out 6 times 1.6.",
        hints: [
          "Use W equals m times g, with g equal to 1.6 on the Moon.",
          "6 times 1.6 is 9.6, so slide to 9.6 newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 6 \\times 1.6" },
          { label: "Answer", latex: "W = 9.6\\ \\text{N}" },
        ],
        explain: "The weight on the Moon is 9.6 newtons, because 6 kilograms times 1.6 newtons per kilogram is 9.6 newtons. The same mass would weigh 60 newtons on Earth.",
      },
      {
        kind: "choice",
        question: "A camera weighs 84 N on the Earth, where g = 10 N/kg. Find its mass.",
        options: ["8.4 kg", "840 kg", "94 kg", "8.4 N"],
        correct: 0,
        ask: "Rearrange weight equals mass times g to get mass, so work out 84 divided by 10.",
        hints: [
          "From W equals m g, the mass is W divided by g.",
          "84 divided by 10 is 8.4, and mass is measured in kilograms.",
        ],
        working: [
          { label: "Formula", latex: "m = \\dfrac{W}{g}" },
          { label: "Substitute", latex: "m = \\dfrac{84}{10}" },
          { label: "Answer", latex: "m = 8.4\\ \\text{kg}" },
        ],
        explain: "The mass is 8.4 kilograms, because 84 newtons divided by 10 newtons per kilogram is 8.4 kilograms. Note the answer is a mass in kilograms, not a weight in newtons.",
      },
      {
        kind: "tiles",
        prompt: "A spring balance reads a crate's weight as 108 N. Its mass is 45 kg. Build the working line that gives g.",
        tiles: ["g =", "108", "\\div", "45", "=", "2.4", "N/kg", "kg"],
        answer: ["g =", "108", "\\div", "45", "=", "2.4", "N/kg"],
        ask: "To find g, divide the weight by the mass, so set up 108 divided by 45.",
        hints: [
          "Rearranging W equals m g gives g equal to W divided by m.",
          "108 divided by 45 is 2.4, and g is measured in newtons per kilogram.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{W}{m}" },
          { label: "Substitute", latex: "g = \\dfrac{108}{45}" },
          { label: "Answer", latex: "g = 2.4\\ \\text{N/kg}" },
        ],
        explain: "The gravitational field strength is 2.4 newtons per kilogram, because 108 newtons divided by 45 kilograms is 2.4 newtons per kilogram.",
      },
      {
        kind: "insight",
        body: "To use *W = mg*, put mass in *kilograms* and g in *newtons per kilogram*, and the weight comes out in newtons.",
        say: "One habit will keep your weight calculations clean. Always put the mass in kilograms and g in newtons per kilogram before you multiply. Do that, and the weight always comes out in newtons.",
      },
    ],
  },
];