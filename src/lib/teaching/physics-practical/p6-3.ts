import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical Chapter 6), section 3. Grounded in the practical KB
// (potential divider, series and parallel resistor combinations).
// Figure colours follow the house dark-theme key: circuit wires, resistors and meters = white/grey,
// the current and coil/conductor = amber, magnetic field lines (dashed) = blue.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.3",
    code: "TP6.3",
    title: "The potential divider and combining resistors",
    blurb: "How a resistor ratio splits a voltage, and how resistors add in series and in parallel",
    steps: [
      {
        kind: "concept",
        heading: "The potential divider",
        figure: "fig-pr6-06-potential-divider",
        body: "2 resistors in *series* across a supply form a *potential divider*. The supply voltage splits between them, and we take the *output* across the second resistor, R2.",
        formula: {
          latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2}\\, V",
          where: [
            { sym: "V_out", meaning: "output voltage across R_2", unit: "V" },
            { sym: "R_1", meaning: "first resistor", unit: "ohm" },
            { sym: "R_2", meaning: "second resistor (output taken across it)", unit: "ohm" },
            { sym: "V", meaning: "supply voltage", unit: "V" },
          ],
        },
        say: "In the picture 2 white resistors, R1 and R2, sit one above the other in series across the supply. The amber current runs through both. We tap the output across the lower resistor, R2. The supply voltage divides between the 2 resistors, and the output is the R2 slice of it. Multiply the supply voltage by R2 over the sum of R1 and R2, and you get the output.",
      },
      {
        kind: "concept",
        heading: "The ratio sets the fraction",
        body: "The output is the *fraction* of the supply that R2 takes. A *bigger* R2 (or smaller R1) gives a *larger* output, because the resistor ratio alone sets how the voltage is shared.",
        say: "Notice there is no current in the formula. Only the ratio of the resistors decides the output fraction. If R2 is the larger share of the total resistance, it keeps the larger share of the voltage. Make R2 bigger, or R1 smaller, and the output climbs toward the full supply.",
      },
      {
        kind: "concept",
        heading: "Resistors in series add",
        body: "Resistors joined *in series* carry the *same current*, and their resistances simply *add* to give the total. More resistors in a line always mean *more* resistance.",
        formula: {
          latex: "R = R_1 + R_2 + \\ldots",
          where: [
            { sym: "R", meaning: "total resistance", unit: "ohm" },
            { sym: "R_1", meaning: "first resistor", unit: "ohm" },
            { sym: "R_2", meaning: "second resistor", unit: "ohm" },
          ],
        },
        say: "When resistors sit one after another in a single loop, the same current threads through every one, and the total resistance is just their sum. Add a 25, a 50 and a 75 ohm resistor in series and you get 150 ohms. Adding more in series always raises the total.",
      },
      {
        kind: "concept",
        heading: "Resistors in parallel",
        figure: "fig-pr6-17-max-min-resistance",
        body: "Resistors *in parallel* share the *same voltage*, and you add the *reciprocals* to find the total. The combined resistance is always *less than the smallest* branch.",
        formula: {
          latex: "\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\ldots",
          where: [
            { sym: "1/R", meaning: "reciprocal of the total resistance", unit: "1/ohm" },
            { sym: "R_1", meaning: "first branch", unit: "ohm" },
            { sym: "R_2", meaning: "second branch", unit: "ohm" },
          ],
        },
        say: "The figure shows the same 3 white resistors 2 ways: stacked in a line for series, giving the maximum resistance, and side by side in parallel branches, giving the minimum. In parallel each branch feels the same voltage, and the current has several paths, so charge flows more easily. Add the reciprocals to get 1 over R, then flip it. The answer always comes out smaller than the smallest single branch.",
      },
      {
        kind: "choice",
        question: "A potential divider has R_1 = 4.0 ohm and R_2 = 6.0 ohm across a 5.0 V supply. The output is taken across R_2. Find V_out.",
        figure: "fig-pr6-06-potential-divider",
        options: ["5.0 V", "2.0 V", "3.0 V", "1.5 V"],
        correct: 2,
        ask: "The output is R2 over the sum of R1 and R2, all times the supply. Work out 6.0 divided by 10.0, then times 5.0.",
        hints: [
          "The total resistance is 4.0 plus 6.0, which is 10.0 ohms.",
          "6.0 over 10.0 is 0.6, and 0.6 times 5.0 is 3.0.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2}\\, V" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{6.0}{4.0 + 6.0} \\times 5.0" },
          { label: "Answer", latex: "V_{out} = 3.0\\ \\text{V}" },
        ],
        explain: "The output is 3.0 volts, because R2 takes 6.0 over 10.0 of the supply, and 0.6 times 5.0 volts is 3.0 volts.",
      },
      {
        kind: "choice",
        question: "Resistors of 25 ohm, 50 ohm and 75 ohm are joined in series. What is the total resistance?",
        options: ["150 ohm", "50 ohm", "13.6 ohm", "75 ohm"],
        correct: 0,
        ask: "In series the resistances simply add. Work out 25 plus 50 plus 75.",
        hints: [
          "Series resistances add straight up: R = R_1 + R_2 + R_3.",
          "25 plus 50 is 75, and 75 plus 75 is 150.",
        ],
        working: [
          { label: "Formula", latex: "R = R_1 + R_2 + R_3" },
          { label: "Substitute", latex: "R = 25 + 50 + 75" },
          { label: "Answer", latex: "R = 150\\ \\Omega" },
        ],
        explain: "The total is 150 ohms, because in series the resistances add: 25 plus 50 plus 75 is 150.",
      },
      {
        kind: "choice",
        question: "The same 25 ohm, 50 ohm and 75 ohm resistors are available. Which connection gives the MAXIMUM total resistance?",
        figure: "fig-pr6-17-max-min-resistance",
        options: [
          "All 3 in parallel",
          "2 in parallel with one in series",
          "One resistor used on its own",
          "All 3 in series",
        ],
        correct: 3,
        ask: "Series adds the resistances so the total climbs, while parallel always gives less than the smallest branch. Which arrangement piles them all up?",
        hints: [
          "Parallel connections lower the total below the smallest branch.",
          "Adding every resistance in a single line gives the largest possible total.",
        ],
        explain: "All 3 in series gives the maximum, 150 ohms, because series resistances add. Any parallel arrangement gives less than the smallest branch, so parallel gives the minimum.",
      },
      {
        kind: "slider",
        prompt: "A potential divider has R_1 = 3.0 ohm and R_2 = 6.0 ohm across a 9.0 V supply, with V_out taken across R_2. Set the slider to V_out, in volts.",
        min: 0,
        max: 9,
        step: 0.5,
        unit: "V",
        start: 0,
        targetMin: 5.5,
        targetMax: 6.5,
        ask: "The output is R2 over the sum of R1 and R2, all times the supply. Work out 6.0 divided by 9.0, then times 9.0.",
        hints: [
          "The total resistance is 3.0 plus 6.0, which is 9.0 ohms.",
          "6.0 over 9.0 times 9.0 leaves just 6.0, so slide to 6.0 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2}\\, V" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{6.0}{3.0 + 6.0} \\times 9.0" },
          { label: "Answer", latex: "V_{out} = 6.0\\ \\text{V}" },
        ],
        explain: "The output is 6.0 volts, because R2 takes 6.0 over 9.0 of the supply, and that fraction of 9.0 volts is 6.0 volts.",
      },
      {
        kind: "choice",
        question: "The 25 ohm, 50 ohm and 75 ohm resistors are now all connected in parallel. What is the total resistance? (1/R = 1/25 + 1/50 + 1/75)",
        options: ["150 ohm", "13.6 ohm", "25 ohm", "50 ohm"],
        correct: 1,
        ask: "Add the reciprocals to get 1 over R, then flip it. Work out 1 over 25 plus 1 over 50 plus 1 over 75.",
        hints: [
          "1 over 25 is 0.04, 1 over 50 is 0.02, and 1 over 75 is about 0.0133.",
          "Those add to 0.0733, and 1 divided by 0.0733 is about 13.6.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dfrac{1}{R_3}" },
          { label: "Substitute", latex: "\\dfrac{1}{R} = \\dfrac{1}{25} + \\dfrac{1}{50} + \\dfrac{1}{75}" },
          { label: "Answer", latex: "R = 13.6\\ \\Omega" },
        ],
        explain: "The total is about 13.6 ohms, because the reciprocals add to 0.0733 per ohm, and 1 divided by that is 13.6 ohms, which is less than the smallest branch of 25 ohms.",
      },
      {
        kind: "insight",
        body: "A potential divider *shares voltage by the resistor ratio*; joining resistors in *series raises* the total, while joining them in *parallel lowers* it below the smallest branch.",
        say: "Here is the idea to keep. A potential divider hands each resistor a share of the voltage set purely by the resistor ratio, so R2 over the total times the supply gives the output. Line resistors up in series and the total grows by simple addition. Split them into parallel branches and the total shrinks below even the smallest one, because you have opened extra paths for the current.",
      },
    ],
  },
];
