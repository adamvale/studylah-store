import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical Chapter 6), section 1. Grounded in the TP6 build brief
// (resistance, resistivity, Ohm's law) and the pre-checked CALCULATION BANK.
// Figure colours follow the fig-pr6 house palette: circuit wires, resistors and meters = white/grey;
// the current = amber; magnetic field lines = blue.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.1",
    code: "TP6.1",
    title: "Resistance, resistivity and Ohm's law",
    blurb: "What sets a conductor's resistance, and how current, voltage and resistance link up",
    steps: [
      {
        kind: "concept",
        heading: "Resistance opposes the current",
        body: "*Resistance* measures how strongly a component *opposes* the flow of charge. It is measured in *ohms*: the bigger the resistance, the smaller the current for a given voltage.",
        say: "Resistance is how hard a component makes it for charge to flow through it. We measure it in ohms. For the same push of voltage, a large resistance lets only a small current through, while a small resistance lets a large current through.",
      },
      {
        kind: "concept",
        heading: "What sets a wire's resistance",
        figure: "fig-pr6-01-resistance-factors",
        body: "For a wire the resistance depends on 3 things through *R = rho L / A*: a *longer* wire has more resistance, and a *thicker* wire (bigger cross-sectional area) has less.",
        formula: {
          latex: "R = \\dfrac{\\rho L}{A}",
          where: [
            { sym: "R", meaning: "resistance", unit: "ohms" },
            { sym: "rho", meaning: "resistivity of the material", unit: "ohm m" },
            { sym: "L", meaning: "length of the wire", unit: "m" },
            { sym: "A", meaning: "cross-sectional area", unit: "m^2" },
          ],
        },
        say: "The picture shows a single white conductor lying on its side. Its length L is labelled along the bar, the shaded end face marks the cross-sectional area A, and the material's resistivity rho is labelled on the body. Resistance is resistivity times length divided by area. So a longer wire has more resistance, and a fatter wire, with a bigger area, has less. Doubling the length doubles the resistance; doubling the area halves it.",
      },
      {
        kind: "concept",
        heading: "Ohm's law",
        body: "*Ohm's law* says *V = IR*. For an *ohmic conductor* at constant temperature the current is proportional to the voltage, so the resistance stays the same.",
        formula: {
          latex: "V = IR",
          where: [
            { sym: "V", meaning: "voltage across the component", unit: "V" },
            { sym: "I", meaning: "current through it", unit: "A" },
            { sym: "R", meaning: "resistance", unit: "ohms" },
          ],
        },
        say: "Ohm's law links the 3 quantities: voltage equals current times resistance. For an ohmic conductor kept at a constant temperature, doubling the voltage doubles the current, so the current is proportional to the voltage and the resistance is unchanged. Rearranged, resistance equals voltage divided by current.",
      },
      {
        kind: "concept",
        heading: "Series and parallel",
        figure: "fig-pr6-05-series-parallel",
        body: "In *series* the *current is the same* everywhere and the voltage splits in proportion to R. In *parallel* the *voltage is the same* across each branch and the current splits inversely to R.",
        say: "The figure sets 2 circuits side by side, drawn in white with the current shown in amber. On the left the components sit in a single series loop, so the same current flows through every one and the voltage shares out in proportion to each resistance, with the bigger resistor taking the bigger share. On the right the components sit in parallel branches, so every branch feels the same voltage and the current splits between them inversely to their resistance, with the smaller resistor carrying the larger current.",
      },
      {
        kind: "choice",
        question: "A lamp carries a current of 1.52 A when the voltage across it is 9.30 V. Find its resistance.",
        options: ["0.16 ohms", "14.1 ohms", "6.12 ohms", "10.8 ohms"],
        correct: 2,
        ask: "Resistance is voltage divided by current, so work out 9.30 ÷ 1.52.",
        hints: [
          "Rearrange V = IR to R = V/I.",
          "9.30 ÷ 1.52 is about 6.12.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{9.30}{1.52}" },
          { label: "Answer", latex: "R = 6.12\\ \\Omega" },
        ],
        explain: "The resistance is 6.12 ohms, because 9.30 volts divided by 1.52 amperes is 6.12 ohms.",
      },
      {
        kind: "choice",
        question: "A wire is replaced by another of the same length and material but double the cross-sectional area. What happens to its resistance?",
        options: ["It doubles", "It halves", "It stays the same", "It quadruples"],
        correct: 1,
        ask: "In R = rho L / A the area A is on the bottom, so a bigger area means a smaller resistance. What does doubling the bottom do?",
        hints: [
          "Resistance is inversely proportional to the cross-sectional area.",
          "Doubling the denominator halves the value, so the resistance halves.",
        ],
        explain: "The resistance halves, because R = rho L / A has the area on the bottom, so doubling the area halves the resistance.",
      },
      {
        kind: "classify",
        prompt: "Sort each change to a wire by its effect on the wire's resistance.",
        bins: ["Raises the wire's resistance", "Lowers the wire's resistance"],
        items: [
          { text: "Making the wire longer", bin: 0 },
          { text: "Using a thinner wire (smaller area)", bin: 0 },
          { text: "Using a thicker wire (larger area)", bin: 1 },
          { text: "Making the wire shorter", bin: 1 },
        ],
        ask: "Use R = rho L / A. Length is on top, so more length means more resistance. Area is on the bottom, so more area means less resistance. Tap each change and drop it in its bin.",
        hints: [
          "A longer wire or a thinner wire both raise the resistance.",
          "A shorter wire or a thicker wire both lower the resistance.",
        ],
        explain: "A longer or thinner wire raises the resistance, because length is on top of R = rho L / A and area is on the bottom. A shorter or thicker wire lowers it.",
      },
      {
        kind: "choice",
        question: "A lamp draws a current of 0.50 A when connected to a 12 V supply. What is its resistance?",
        options: ["6.0 ohms", "0.042 ohms", "12 ohms", "24 ohms"],
        correct: 3,
        ask: "Resistance is voltage divided by current, so work out 12 ÷ 0.50.",
        hints: [
          "Use R = V/I.",
          "12 ÷ 0.50 is 24.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{12}{0.50}" },
          { label: "Answer", latex: "R = 24\\ \\Omega" },
        ],
        explain: "The resistance is 24 ohms, because 12 volts divided by 0.50 amperes is 24 ohms.",
      },
      {
        kind: "choice",
        question: "3 resistors are joined in series in a single loop. Which quantity is the same through every one of them?",
        options: ["The current", "The voltage across each", "The resistance", "The power in each"],
        correct: 0,
        ask: "In a series loop there is only one path, so think about what has to be the same all the way round.",
        hints: [
          "In series there is a single path for the charge.",
          "The current is the same everywhere; it is the voltage that splits between the resistors.",
        ],
        explain: "The current is the same through every resistor in series, because there is only one path. The voltage, not the current, splits in proportion to each resistance.",
      },
      {
        kind: "insight",
        body: "Resistance is set by the *wire itself* through *R = rho L / A*, while *Ohm's law V = IR* then fixes how current and voltage relate for that resistance.",
        say: "Here is the idea to keep. 2 separate things are going on. The wire's own shape and material fix its resistance through R equals rho L over A. Once that resistance is set, Ohm's law, V equals I R, tells you how much current a given voltage will push through it. Remember too that in series the current is shared equally and the voltage splits, while in parallel the voltage is shared equally and the current splits.",
      },
    ],
  },
];
