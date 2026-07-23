import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, section 4. Grounded in KB Chapter 16 (Current of Electricity) section 16.8.
// Figure colours follow the carry-over colour key: electron flow = blue, conventional current = amber,
// wires, resistors, cells, lamps and meters = white/grey; the ammeter is labelled A and the voltmeter V.

export const BOXES: Subconcept[] = [
  {
    id: "t14.4",
    code: "T14.4",
    title: "Resistors in series and parallel",
    blurb: "Adding resistors up in series, and combining them by reciprocals in parallel",
    steps: [
      {
        kind: "concept",
        heading: "Series resistors add up",
        figure: "fig-16-10-series-resistors",
        body: "Resistors joined end to end are in *series*. The same *current* passes through each one, and their resistances simply *add* to give the *effective resistance*, which is always LARGER than any single resistor.",
        formula: {
          latex: "R_E = R_1 + R_2 + R_3",
          where: [
            { sym: "R_E", meaning: "effective (total) resistance", unit: "ohm" },
            { sym: "R_1, R_2, R_3", meaning: "the separate resistances", unit: "ohm" },
          ],
        },
        say: "In the picture 3 white resistors labelled R1, R2 and R3 sit in a single line, one after the other, along the wire. Because there is only one path, the same current flows through all 3. To find the total resistance you just add them up, and the answer is always bigger than any one of the resistors on its own.",
      },
      {
        kind: "concept",
        heading: "Parallel resistors combine by reciprocals",
        figure: "fig-16-11-parallel-resistors",
        body: "Resistors joined side by side across the same 2 points are in *parallel*. The current *splits* between them, and you add the *reciprocals* to get the effective resistance, which is always SMALLER than any single resistor.",
        formula: {
          latex: "\\frac{1}{R_E} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}",
          where: [
            { sym: "R_E", meaning: "effective (total) resistance", unit: "ohm" },
            { sym: "R_1, R_2, R_3", meaning: "the separate resistances", unit: "ohm" },
          ],
        },
        say: "Here 3 white resistors labelled R1, R2 and R3 sit side by side, like the rungs of a ladder, each bridging the same 2 points in the wire. The current now has more than one path, so it splits between them. You add up one over each resistance to get one over the total, then flip it. Opening extra paths always makes it easier for current to flow, so the combined resistance comes out smaller than the smallest single resistor.",
      },
      {
        kind: "concept",
        heading: "Mixed circuits: parallel part first",
        figure: "fig-16-19-eff-mixed",
        body: "A *mixed* circuit has both kinds. Always combine the *parallel* group into one resistance first, then *add* that to the resistors that are in *series* with it.",
        say: "This figure shows a 4 ohm resistor in a line with a pair of resistors, a 6 ohm and a 3 ohm, that sit side by side in parallel. The trick is to deal with the parallel pair first, replacing them with a single equivalent resistor, and only then add on the 4 ohm that is in series. Work from the inside out and a messy circuit becomes 2 easy steps.",
      },
      {
        kind: "choice",
        question: "3 resistors of 3 ohm, 5 ohm and 2 ohm are connected in series. What is the effective resistance?",
        options: ["16 ohm", "3 ohm", "10 ohm", "0.97 ohm"],
        correct: 2,
        ask: "Series resistors just add, so work out 3 + 5 + 2.",
        hints: [
          "Use R_E = R_1 + R_2 + R_3 for a series chain.",
          "3 + 5 + 2 is 10, and the total must be larger than any single resistor.",
        ],
        working: [
          { label: "Formula", latex: "R_E = R_1 + R_2 + R_3" },
          { label: "Substitute", latex: "R_E = 3 + 5 + 2" },
          { label: "Answer", latex: "R_E = 10\\ \\Omega" },
        ],
        explain: "The effective resistance is 10 ohms, because resistors in series carry the same current and simply add: 3 + 5 + 2 is 10.",
      },
      {
        kind: "choice",
        question: "3 resistors of 3 ohm, 6 ohm and 6 ohm are connected in parallel. What is the effective resistance?",
        options: ["15 ohm", "1.5 ohm", "6 ohm", "5 ohm"],
        correct: 1,
        ask: "Add the reciprocals: 1/3 + 1/6 + 1/6, which is 2/6 + 1/6 + 1/6.",
        hints: [
          "Use 1/R_E = 1/R_1 + 1/R_2 + 1/R_3.",
          "1/3 + 1/6 + 1/6 is 4/6, so R_E is 6 ÷ 4, which is 1.5 ohms.",
        ],
        working: [
          { label: "Formula", latex: "\\frac{1}{R_E} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}" },
          { label: "Substitute", latex: "\\frac{1}{R_E} = \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{6} = \\frac{4}{6}" },
          { label: "Answer", latex: "R_E = 1.5\\ \\Omega" },
        ],
        explain: "The effective resistance is 1.5 ohms, because one over the total is 4 over 6, and flipping that gives 6 over 4, which is 1.5. Notice it is smaller than the 3 ohm resistor.",
      },
      {
        kind: "choice",
        question: "2 8 ohm resistors are connected in parallel, and this pair is joined in series with a 4 ohm resistor. What is the effective resistance of the whole circuit?",
        options: ["20 ohm", "4 ohm", "12 ohm", "8 ohm"],
        correct: 3,
        ask: "Combine the parallel pair first: 2 equal 8 ohm resistors in parallel give 4 ohm. Then add the series 4 ohm.",
        hints: [
          "2 equal resistors in parallel give half their value, so 8 ohm and 8 ohm give 4 ohm.",
          "Then add the series resistor: 4 + 4 is 8 ohms.",
        ],
        working: [
          { label: "Formula", latex: "\\frac{1}{R_P} = \\frac{1}{8} + \\frac{1}{8},\\quad R_E = R_P + 4" },
          { label: "Substitute", latex: "R_P = 4,\\quad R_E = 4 + 4" },
          { label: "Answer", latex: "R_E = 8\\ \\Omega" },
        ],
        explain: "The effective resistance is 8 ohms. The 2 8 ohm resistors in parallel combine to 4 ohms, and adding the series 4 ohm gives 8 ohms.",
      },
      {
        kind: "choice",
        question: "A 12 ohm resistor and a 6 ohm resistor are connected in parallel, and this pair is in series with a 6 ohm resistor. Find the effective resistance.",
        options: ["10 ohm", "24 ohm", "4 ohm", "18 ohm"],
        correct: 0,
        ask: "Do the parallel pair first: 12 and 6 in parallel give 4 ohm. Then add the series 6 ohm.",
        hints: [
          "For the parallel pair, 1/12 + 1/6 is 1/12 + 2/12, which is 3/12, so R is 4 ohm.",
          "Then add the series resistor: 4 + 6 is 10 ohms.",
        ],
        working: [
          { label: "Formula", latex: "\\frac{1}{R_P} = \\frac{1}{12} + \\frac{1}{6},\\quad R_E = R_P + 6" },
          { label: "Substitute", latex: "R_P = 4,\\quad R_E = 4 + 6" },
          { label: "Answer", latex: "R_E = 10\\ \\Omega" },
        ],
        explain: "The effective resistance is 10 ohms. The 12 ohm and 6 ohm in parallel give 4 ohms, and adding the series 6 ohm gives 10 ohms.",
      },
      {
        kind: "choice",
        question: "Which statement about resistors connected in parallel is correct?",
        options: [
          "The effective resistance equals the sum of the separate resistances.",
          "The effective resistance is larger than the largest single resistor.",
          "The effective resistance is smaller than the smallest single resistor.",
          "The effective resistance equals the average of the separate resistances.",
        ],
        correct: 2,
        ask: "Adding a parallel path opens another route for current, so does the combined resistance go up or down?",
        hints: [
          "Series resistors add up, but parallel resistors do not.",
          "More paths make it easier for current to flow, so the parallel total drops below the smallest resistor.",
        ],
        explain: "A parallel combination always has an effective resistance smaller than the smallest single resistor, because each extra path gives the current another route and lowers the overall opposition.",
      },
      {
        kind: "insight",
        body: "*Series* resistors add and give a total LARGER than any one; *parallel* resistors combine by reciprocals and give a total SMALLER than any one. For a *mixed* circuit, collapse the parallel group first, then add the series parts.",
        say: "Here is the idea to keep. Series means one path, so the resistances add and the total is bigger than any single resistor. Parallel means several paths, so you add the reciprocals and the total is smaller than the smallest resistor. When a circuit mixes the 2, always squash the parallel group into one value first, then add on whatever is in series with it.",
      },
    ],
  },
];
