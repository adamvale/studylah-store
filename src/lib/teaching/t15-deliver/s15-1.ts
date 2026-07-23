import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, section 1. Grounded in KB Chapter 17 (D.C. Circuits) section 17.1.
// Figure colours follow the chapter colour key: the current and moving charge = blue;
// wires, resistors, cells/battery and meters (ammeter A, voltmeter V) = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t15.1",
    code: "T15.1",
    title: "Series circuits",
    blurb: "One loop, one current, and voltages that add up",
    steps: [
      {
        kind: "concept",
        heading: "A single loop",
        body: "Components joined in *series* sit one after another along a *single loop*, so there is just *one path* for the current to follow from one end of the source to the other.",
        say: "In a series circuit the components are strung end to end, like beads on one string. There is a single loop and only one path, so whatever current leaves the cell must pass through every component in turn before it returns. There are no branches and no choices of route.",
      },
      {
        kind: "concept",
        heading: "The same current everywhere",
        figure: "fig-17-01-series-current",
        body: "Because there is only one path, the *current is the same* at every point in a *series* circuit. Charge is not used up, so I_1 = I_2 = I_3 all the way round.",
        say: "This figure shows a single white and grey loop with a cell and a white and grey ammeter marked A. Blue arrows label the current I at 3 points around the loop, points 1, 2 and 3, and every one of them is the same size. Since charge only has one route to take, the current that flows through the first component is exactly the current that flows through the next. The reading would be the same wherever you put the ammeter.",
      },
      {
        kind: "concept",
        heading: "The voltage is shared",
        figure: "fig-17-02-series-pd",
        body: "The source p.d. is *shared* between the components. The supply voltage equals the *sum* of the p.d.s across the separate parts.",
        formula: {
          latex: "V = V_1 + V_2",
          where: [
            { sym: "V", meaning: "source p.d. (supply voltage)", unit: "V" },
            { sym: "V_1", meaning: "p.d. across the first component", unit: "V" },
            { sym: "V_2", meaning: "p.d. across the second component", unit: "V" },
          ],
        },
        say: "In this figure a white and grey cell drives a blue current one way round a single loop through 2 white and grey components. A voltmeter reads the p.d. across each one. The 2 component voltages, V one and V 2, always add up to the voltage of the supply. The source shares its push between the parts, so if you know the supply and one component's p.d., you can find the other by subtracting.",
      },
      {
        kind: "concept",
        heading: "Resistances add up",
        figure: "fig-17-03-series-we1",
        body: "In series the *effective resistance* is simply the resistances *added* together. Adding another resistor in series always makes the total *larger*.",
        formula: {
          latex: "R_{\\text{eff}} = R_1 + R_2",
          where: [
            { sym: "R_{\\text{eff}}", meaning: "effective (total) resistance", unit: "ohm" },
            { sym: "R_1", meaning: "resistance of the first component", unit: "ohm" },
            { sym: "R_2", meaning: "resistance of the second component", unit: "ohm" },
          ],
        },
        say: "This figure shows a 12 volt supply pushing a blue current through a white and grey 3 ohm resistor and a white and grey 9 ohm resistor in series, with an ammeter A and 2 voltmeters. Because the charge must fight its way through both resistors one after the other, their resistances simply add. Here 3 ohms plus 9 ohms gives 12 ohms, and adding any resistor in series can only make the total bigger.",
      },
      {
        kind: "choice",
        question: "A 3 ohm resistor and a 9 ohm resistor are joined in series. What is the effective resistance?",
        figure: "fig-17-03-series-we1",
        options: ["3 ohms", "6 ohms", "12 ohms", "27 ohms"],
        correct: 2,
        ask: "In series the resistances just add, so work out 3 plus 9.",
        hints: [
          "Use R_eff = R_1 + R_2.",
          "3 plus 9 is 12, and the answer is a resistance in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R_{\\text{eff}} = R_1 + R_2" },
          { label: "Substitute", latex: "R_{\\text{eff}} = 3 + 9" },
          { label: "Answer", latex: "R_{\\text{eff}} = 12\\ \\Omega" },
        ],
        explain: "The effective resistance is 12 ohms, because in series you simply add 3 ohms and 9 ohms.",
      },
      {
        kind: "choice",
        question: "A 12 V supply drives a current through the 3 ohm and 9 ohm resistors in series (total 12 ohms). What is the current?",
        options: ["1 A", "0.75 A", "4 A", "12 A"],
        correct: 0,
        ask: "The current is the supply voltage divided by the total resistance, so work out 12 divided by 12.",
        hints: [
          "Use I = V / R_eff with R_eff = 12 ohms.",
          "12 divided by 12 is 1, and the answer is a current in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_{\\text{eff}}}" },
          { label: "Substitute", latex: "I = \\dfrac{12}{12}" },
          { label: "Answer", latex: "I = 1\\ \\text{A}" },
        ],
        explain: "The current is 1 ampere, because 12 volts divided by the total 12 ohms is 1 ampere, and that same current flows through both resistors.",
      },
      {
        kind: "choice",
        question: "In the same 12 V series circuit the voltmeter across the 3 ohm resistor reads 3 V. What is the p.d. across the 9 ohm resistor?",
        figure: "fig-17-03-series-we1",
        options: ["3 V", "6 V", "15 V", "9 V"],
        correct: 3,
        ask: "The 2 component voltages add up to the supply, so work out 12 minus 3.",
        hints: [
          "Use V = V_1 + V_2, rearranged to V_2 = V - V_1.",
          "12 minus 3 is 9, and the answer is a p.d. in volts.",
        ],
        working: [
          { label: "Formula", latex: "V_2 = V - V_1" },
          { label: "Substitute", latex: "V_2 = 12 - 3" },
          { label: "Answer", latex: "V_2 = 9\\ \\text{V}" },
        ],
        explain: "The p.d. across the 9 ohm resistor is 9 volts, because the 2 component voltages must add to the 12 volt supply, and 12 minus 3 is 9.",
      },
      {
        kind: "choice",
        question: "An 18 V supply is connected across a 3 ohm and a 6 ohm resistor in series. What is the current in the circuit?",
        options: ["6 A", "9 A", "3 A", "2 A"],
        correct: 3,
        ask: "First add the resistances to get the total, then divide the voltage by it. Work out 18 divided by 9.",
        hints: [
          "The total resistance is 3 plus 6, which is 9 ohms.",
          "18 divided by 9 is 2, and the answer is a current in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_1 + R_2}" },
          { label: "Substitute", latex: "I = \\dfrac{18}{3 + 6}" },
          { label: "Answer", latex: "I = 2\\ \\text{A}" },
        ],
        explain: "The current is 2 amperes, because the resistors add to 9 ohms, and 18 volts divided by 9 ohms is 2 amperes.",
      },
      {
        kind: "choice",
        question: "A current of 0.4 A flows through a 5 ohm resistor in a series circuit. What is the p.d. across it?",
        options: ["1.25 V", "2 V", "12.5 V", "0.08 V"],
        correct: 1,
        ask: "The p.d. across a resistor is the current times its resistance, so work out 0.4 times 5.",
        hints: [
          "Use V = I R.",
          "0.4 times 5 is 2, and the answer is a p.d. in volts.",
        ],
        working: [
          { label: "Formula", latex: "V = I R" },
          { label: "Substitute", latex: "V = 0.4 \\times 5" },
          { label: "Answer", latex: "V = 2\\ \\text{V}" },
        ],
        explain: "The p.d. is 2 volts, because 0.4 amperes times 5 ohms is 2 volts.",
      },
      {
        kind: "choice",
        question: "Several lamps are wired in series as a string of decorations. One lamp breaks and its filament snaps. What happens?",
        figure: "fig-17-01-series-current",
        options: ["Only the broken lamp goes out", "All the lamps go out", "The other lamps get brighter", "Nothing changes"],
        correct: 1,
        ask: "A series circuit has just one path. Think about what a break in that single loop does to the current everywhere.",
        hints: [
          "There is only one route, so the current is the same at every point.",
          "A break anywhere in the loop stops the current in the whole circuit.",
        ],
        explain: "All the lamps go out, because a series circuit is a single loop. One break stops the current everywhere, so every lamp loses its current at once.",
      },
      {
        kind: "insight",
        body: "In a series circuit the *current is the same* throughout, the p.d.s *add* to the supply, and the resistances *add* to a *larger* total. The trade-off is that a single break stops everything.",
        say: "Hold on to these 3 rules. In series the current is the same at every point, the component voltages add up to the supply voltage, and the resistances add to give a bigger total. The catch is the single path: because there is only one loop, one break anywhere leaves the whole circuit dead.",
      },
    ],
  },
];
