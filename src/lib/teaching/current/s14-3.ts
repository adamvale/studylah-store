import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, section 3. Grounded in KB Chapter 16 (16.6, 16.7).
// Colour key (from the current SVGs): electron flow = blue; conventional current = amber;
// graph lines on a V-I graph = blue, axes = white/grey; wires, resistors, cells, meters = white/grey
// (ammeter labelled A, voltmeter labelled V). Every calculation carries a Formula/Substitute/Answer
// working block and uses only the CALCULATION BANK values.

export const BOXES: Subconcept[] = [
  {
    id: "t14.3",
    code: "T14.3",
    title: "Resistance and R = V/I",
    blurb: "What resistance is, why it happens, and how to measure it",
    steps: [
      {
        kind: "concept",
        heading: "Resistance is p.d. over current",
        figure: "fig-16-09-vi-gradient",
        body: "The *resistance* of a component is the *ratio* of the *p.d.* across it to the *current* through it. It is measured in ohms, and it tells you how strongly the component opposes the current.",
        formula: {
          latex: "R = \\dfrac{V}{I}",
          where: [
            { sym: "R", meaning: "resistance", unit: "\\Omega" },
            { sym: "V", meaning: "potential difference", unit: "V" },
            { sym: "I", meaning: "current", unit: "A" },
          ],
        },
        say: "Resistance is simply the potential difference across a component divided by the current through it. In this figure a blue straight line climbs across a graph with p.d. up the side and current along the bottom, both axes drawn in white. The steeper the blue line, the larger the resistance. One ohm means one volt is needed to drive one ampere through the component.",
      },
      {
        kind: "concept",
        heading: "Why a metal resists",
        figure: "fig-16-06-resistance-collisions",
        body: "Resistance arises because the moving *electrons* keep *colliding* with the vibrating metal *ions*. Each collision slows the electrons down, so the ions get in the way of the flow.",
        say: "Resistance is not magic, it comes from tiny collisions. In this picture blue electrons drift across a component and keep bumping into the metal ions, which are drawn as fixed white circles. Every collision transfers a little energy and holds the electrons back. The more often they collide, the harder it is for charge to flow, and the greater the resistance.",
      },
      {
        kind: "concept",
        heading: "Hotter metal, more resistance",
        figure: "fig-16-07-resistance-temperature",
        body: "Raising the *temperature* of a metal makes its ions *vibrate* more, causing *more collisions*, so the resistance *rises*. At a fixed p.d. the current then falls.",
        say: "Heat a metal and its ions jiggle more strongly, so the electrons collide with them more often. This graph plots resistance up the side against temperature along the bottom, and the lines for lead, aluminium and copper all climb steadily to the right. Because resistance goes up, the same potential difference now pushes a smaller current through the metal.",
      },
      {
        kind: "concept",
        heading: "Measuring resistance",
        figure: "fig-16-08-resistance-experiment",
        body: "To find the resistance you connect an *ammeter in series* with the conductor and a *voltmeter in parallel* across it. Plot *V against I*, and the *gradient* of the straight line is the resistance.",
        say: "Here is the standard experiment. The circuit has cells, a variable resistor and the metallic conductor, all drawn in white. The ammeter, labelled A, sits in series so the same current flows through it and the conductor. The voltmeter, labelled V, sits in parallel across the conductor to read the potential difference. Change the current with the variable resistor, record several pairs of readings, then plot p.d. against current. The gradient of that line, the p.d. divided by the current, is the resistance.",
      },
      {
        kind: "choice",
        question: "A component has a p.d. of 12 V across it and a current of 0.5 A through it. Find its resistance.",
        options: ["6 ohms", "24 ohms", "0.04 ohms", "12.5 ohms"],
        correct: 1,
        ask: "Resistance is p.d. divided by current, so work out 12 ÷ 0.5.",
        hints: [
          "Use R = V / I.",
          "12 ÷ 0.5 is 24, and the answer is a resistance in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{12}{0.5}" },
          { label: "Answer", latex: "R = 24\\ \\Omega" },
        ],
        explain: "The resistance is 24 ohms, because 12 volts divided by 0.5 amperes is 24 ohms.",
      },
      {
        kind: "choice",
        question: "A resistor carries a current of 0.03 A when the p.d. across it is 4.5 V. What is its resistance?",
        options: ["0.135 ohms", "1.5 ohms", "150 ohms", "15 ohms"],
        correct: 2,
        ask: "Divide the p.d. by the current, so work out 4.5 ÷ 0.03.",
        hints: [
          "Use R = V / I.",
          "4.5 ÷ 0.03 is 150, and the answer is a resistance in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{4.5}{0.03}" },
          { label: "Answer", latex: "R = 150\\ \\Omega" },
        ],
        explain: "The resistance is 150 ohms, because 4.5 volts divided by 0.03 amperes is 150 ohms.",
      },
      {
        kind: "choice",
        question: "A wire has a p.d. of 4.0 V across it and carries a current of 0.8 A. Calculate its resistance.",
        options: ["3.2 ohms", "0.2 ohms", "8 ohms", "5 ohms"],
        correct: 3,
        ask: "Resistance is p.d. divided by current, so work out 4.0 ÷ 0.8.",
        hints: [
          "Use R = V / I.",
          "4.0 ÷ 0.8 is 5, and the answer is a resistance in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{4.0}{0.8}" },
          { label: "Answer", latex: "R = 5\\ \\Omega" },
        ],
        explain: "The resistance is 5 ohms, because 4.0 volts divided by 0.8 amperes is 5 ohms.",
      },
      {
        kind: "choice",
        question: "A current of 4 A flows through a 12 ohm resistor. What is the p.d. across it?",
        options: ["48 V", "3 V", "16 V", "0.33 V"],
        correct: 0,
        ask: "Rearrange R = V / I to get V = I R, so work out 4 × 12.",
        hints: [
          "Multiply the current by the resistance.",
          "4 × 12 is 48, and the answer is a p.d. in volts.",
        ],
        working: [
          { label: "Formula", latex: "V = I R" },
          { label: "Substitute", latex: "V = 4 \\times 12" },
          { label: "Answer", latex: "V = 48\\ \\text{V}" },
        ],
        explain: "The p.d. is 48 volts, because 4 amperes times 12 ohms is 48 volts.",
      },
      {
        kind: "choice",
        question: "A metal wire is kept at a fixed p.d. As the wire gets hotter, what happens to the current through it?",
        figure: "fig-16-07-resistance-temperature",
        options: [
          "The current rises, because the resistance falls",
          "The current falls, because the resistance rises",
          "The current stays the same, because temperature has no effect",
          "The current falls, because the p.d. drops",
        ],
        correct: 1,
        ask: "Think about what heating does to the ions and to the number of collisions, then use R = V / I with V fixed.",
        hints: [
          "Hotter ions vibrate more, so electrons collide more often and the resistance rises.",
          "With the p.d. held fixed, a larger resistance means a smaller current.",
        ],
        explain: "The current falls, because heating the metal makes its ions vibrate more, so there are more collisions and the resistance rises. At a fixed p.d., a larger resistance means a smaller current.",
      },
      {
        kind: "insight",
        body: "Resistance is just *p.d.* divided by *current*, and it grows whenever the electrons meet *more collisions*, whether from a hotter metal or a component that opposes the flow more strongly.",
        say: "Here is the idea to keep. Resistance is nothing more than the potential difference divided by the current, measured in ohms. It rises whenever the electrons face more collisions with the metal ions, which is why a hotter wire resists more and carries less current at the same p.d. On a plot of p.d. against current, the gradient of the line is that resistance.",
      },
    ],
  },
];
