import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (Practical Chapter 4), section 3. Grounded in Practical Chapter 04 - Heat (latent heat, changes of state).
// Figure colours follow the fig-pr4 key: the temperature curve = blue, melting/boiling labels = amber,
// solid/liquid/gas state labels = green, axes and grid = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.3",
    code: "TP4.3",
    title: "Latent heat and changes of state",
    blurb: "Why the temperature holds steady while a solid melts or a liquid boils",
    steps: [
      {
        kind: "concept",
        heading: "The temperature holds still",
        body: "During a *change of state*, melting or boiling, the temperature stays *constant* even though heat is still being supplied. A thermometer in melting ice reads 0 degrees the whole time it melts.",
        say: "Here is the surprising part. While a solid melts or a liquid boils, you keep pouring heat in, yet the temperature does not budge. Dip a thermometer into a beaker of melting ice and it sits at 0 degrees Celsius the whole time, right up until the last of the ice has turned to water.",
      },
      {
        kind: "concept",
        heading: "Where the energy goes",
        body: "The supplied energy raises the particles' *potential energy* by *breaking* or loosening the *bonds* between them, not their *kinetic energy*, so the temperature does not rise.",
        say: "So where does all that heat go if the temperature stays flat? It goes into pulling the particles apart. The energy raises their potential energy by breaking or loosening the bonds that hold them together. It does not speed the particles up, and since temperature measures their average kinetic energy, the reading stays put.",
      },
      {
        kind: "concept",
        heading: "Latent heat",
        body: "*Latent* heat is this hidden energy taken in during a change of state. The *specific latent heat* l is the energy needed to change the state of one kilogram, measured in joules per kilogram.",
        formula: {
          latex: "L = l\\,m",
          where: [
            { sym: "L", meaning: "latent heat supplied", unit: "J" },
            { sym: "l", meaning: "specific latent heat", unit: "J/kg" },
            { sym: "m", meaning: "mass changing state", unit: "kg" },
          ],
        },
        say: "The word latent means hidden, and that is a good name for this energy, because it goes in without showing up as a temperature rise. The specific latent heat, small l, is the energy needed to change the state of one kilogram, in joules per kilogram. Multiply it by the mass and you get the total latent heat L, in joules.",
      },
      {
        kind: "concept",
        heading: "Fusion and vaporisation",
        body: "The specific latent heat of *fusion* l_f melts *1 kg* of solid into liquid; the specific latent heat of *vaporisation* l_v boils 1 kg of liquid into gas. Both are measured in joules per kilogram.",
        say: "There are 2 kinds. The specific latent heat of fusion, l with a small f, is the energy to melt one kilogram of solid into liquid. The specific latent heat of vaporisation, l with a small v, is the energy to boil one kilogram of liquid into gas. For water, fusion is 3.34 times 10 to the power 5 joules per kilogram, and vaporisation is 2.26 times 10 to the power 6 joules per kilogram.",
      },
      {
        kind: "insight",
        body: "*Vaporisation* needs *far more* energy than *fusion*, because the particles must be pulled *completely apart*, not just loosened.",
        say: "Notice how much bigger the vaporisation figure is. Boiling needs far more energy per kilogram than melting. That is because melting only loosens the particles enough to let them slide past each other, whereas boiling has to tear them completely apart into a gas, and that costs a great deal more energy.",
      },
      {
        kind: "concept",
        heading: "Reading a heating curve",
        figure: "fig-pr4-02-heating-curve",
        body: "On a *heating curve* the *sloping* parts are Q = mc DeltaTheta as the substance warms, and the *flat plateaus* are L = lm as it changes state.",
        say: "This graph plots temperature against time as a solid is heated steadily. The blue curve climbs, then levels off at an amber melting line, climbs again, then levels off at an amber boiling line. The green labels mark solid, then liquid, then gas. On the sloping parts the temperature is rising, so those follow Q equals m c delta theta. On the 2 flat plateaus the state is changing at constant temperature, so those follow L equals l m.",
      },
      {
        kind: "choice",
        question: "Ice at 0 degrees C is heated and slowly melts, yet the temperature stays at 0 degrees C. Why?",
        options: [
          "The heater is not actually supplying any energy",
          "The energy is escaping to the surroundings as fast as it arrives",
          "The energy raises the particles' potential energy, breaking bonds, not their kinetic energy",
          "Water cannot get warmer than 0 degrees C",
        ],
        correct: 2,
        ask: "The temperature reflects the particles' kinetic energy. During melting the incoming energy is doing a different job. What is it breaking?",
        hints: [
          "The heat is not lost and the heater is still on, so the energy must be going somewhere useful.",
          "It goes into potential energy, pulling the particles apart, so the kinetic energy and the temperature stay the same.",
        ],
        explain: "The temperature stays at 0 degrees Celsius because the energy raises the particles' potential energy, breaking the bonds of the solid, rather than their kinetic energy.",
      },
      {
        kind: "choice",
        question: "Find the heat needed to melt 0.20 kg of ice at 0 degrees C. For water l_f = 3.34 x 10^5 J/kg.",
        options: [
          "6.68 x 10^6 J",
          "6.68 x 10^4 J",
          "1.67 x 10^6 J",
          "3.34 x 10^5 J",
        ],
        correct: 1,
        ask: "Use L equals l f times m. Multiply 3.34 times 10 to the power 5 by 0.20.",
        hints: [
          "The latent heat is the specific latent heat of fusion times the mass.",
          "3.34 times 10 to the power 5, times 0.20, is 6.68 times 10 to the power 4.",
        ],
        working: [
          { label: "Formula", latex: "L = l_f\\,m" },
          { label: "Substitute", latex: "L = 3.34 \\times 10^{5} \\times 0.20" },
          { label: "Answer", latex: "L = 6.68 \\times 10^{4}\\ \\text{J}" },
        ],
        explain: "The heat needed is 6.68 times 10 to the power 4 joules, because 3.34 times 10 to the power 5 joules per kilogram times 0.20 kilograms is 6.68 times 10 to the power 4 joules.",
      },
      {
        kind: "choice",
        question: "Per kilogram of water, which change of state needs far more energy?",
        options: [
          "Vaporisation, because the particles are pulled completely apart into a gas",
          "Fusion, because the particles must be loosened from the solid",
          "They need exactly the same energy per kilogram",
          "Neither, because a change of state needs no energy",
        ],
        correct: 0,
        ask: "Compare loosening particles so they can slide past each other with tearing them completely apart. Which takes more energy?",
        hints: [
          "Boiling separates the particles fully; melting only loosens them.",
          "For water, vaporisation is 2.26 times 10 to the power 6 joules per kilogram, far above fusion at 3.34 times 10 to the power 5.",
        ],
        explain: "Vaporisation needs far more energy per kilogram, because boiling pulls the particles completely apart into a gas, while melting only loosens them.",
      },
      {
        kind: "graphpick",
        prompt: "A solid is heated steadily until it melts and then boils. Pick the temperature-time graph that matches: a rise, a flat plateau, a rise, then a flat plateau.",
        xLabel: "time / s",
        yLabel: "temperature / ^oC",
        options: [
          { points: [[0, -20], [2, 10], [4, 40], [6, 80], [8, 120]], caption: "A steady rise with no flat parts" },
          { points: [[0, -20], [1, 0], [3, 0], [5, 50], [7, 110]], caption: "A rise, one flat plateau, then a rise" },
          { points: [[0, -20], [2, 40], [4, 100], [6, 100], [8, 100]], caption: "A rise, a rise, then one flat plateau" },
          { points: [[0, -20], [1, 0], [3, 0], [5, 60], [6, 100], [8, 100]], caption: "A rise, a flat plateau, a rise, then a flat plateau" },
        ],
        correct: 3,
        ask: "You need 2 flat plateaus, one for melting and one for boiling, with a sloping warm-up between and before them.",
        hints: [
          "Each change of state shows up as a flat plateau, so the correct graph has 2 flat parts.",
          "The shape is rise, flat at the melting point, rise, then flat at the boiling point.",
        ],
        explain: "The correct graph rises, flattens while the solid melts, rises again as the liquid warms, then flattens while the liquid boils, giving 2 plateaus at constant temperature.",
      },
      {
        kind: "tiles",
        prompt: "Build the calculation for the heat needed to freeze 0.30 kg of water at 0 degrees C. For water l_f = 3.34 x 10^5 J/kg.",
        tiles: ["3.34 x 10^5", "0.30", "x", "=", "1.0 x 10^5 J", "6.68 x 10^4 J", "0.20"],
        answer: ["3.34 x 10^5", "x", "0.30", "=", "1.0 x 10^5 J"],
        ask: "Freezing releases the same latent heat as melting, so use L equals l f times m with the mass 0.30 kilograms.",
        hints: [
          "The latent heat is 3.34 times 10 to the power 5 times 0.30.",
          "3.34 times 10 to the power 5, times 0.30, is 1.0 times 10 to the power 5.",
        ],
        working: [
          { label: "Formula", latex: "L = l_f\\,m" },
          { label: "Substitute", latex: "L = 3.34 \\times 10^{5} \\times 0.30" },
          { label: "Answer", latex: "L = 1.0 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The heat released is 1.0 times 10 to the power 5 joules, because 3.34 times 10 to the power 5 joules per kilogram times 0.30 kilograms is 1.0 times 10 to the power 5 joules.",
      },
    ],
  },
];
