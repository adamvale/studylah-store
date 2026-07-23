import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical), Revision 1. Checkpoint over
// sections tp6.1 to tp6.3: resistance and Ohm's law, I-V characteristics,
// the potential divider and combining resistors. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: resistance, I-V characteristics and combining resistors",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A filament lamp carries a current of 0.50 A when the voltage across it is 12 V. What is its resistance at this point?",
        options: ["6.0 ohms", "0.042 ohms", "24 ohms", "12 ohms"],
        correct: 2,
        ask: "Resistance is voltage divided by current, so work out 12 divided by 0.50. Which option is that?",
        hints: [
          "Use R equals V divided by I.",
          "12 divided by 0.50 is 24, and resistance is measured in ohms.",
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
        question: "A metal wire has its cross-sectional area doubled while its length stays the same. What happens to its resistance?",
        figure: "fig-pr6-01",
        options: ["It halves", "It doubles", "It stays the same", "It quadruples"],
        correct: 0,
        ask: "In R = rho L / A the area A is on the bottom. If A doubles while L is fixed, what happens to R?",
        hints: [
          "Resistance is proportional to length and inversely proportional to cross-sectional area.",
          "A thicker wire gives charge more room to flow, so doubling the area halves the resistance.",
        ],
        explain: "The resistance halves, because resistance is inversely proportional to cross-sectional area. Doubling A, with L unchanged, gives half the resistance.",
      },
      {
        kind: "choice",
        question: "A potential divider has R_1 = 4.0 ohms and R_2 = 6.0 ohms in series across a 5.0 V supply. The output is taken across R_2. What is V_out?",
        figure: "fig-pr6-06",
        options: ["5.0 V", "2.0 V", "6.0 V", "3.0 V"],
        correct: 3,
        ask: "Use V_out equals R_2 divided by the sum R_1 plus R_2, all times the supply voltage. Work out 6.0 over 10.0 times 5.0.",
        hints: [
          "The output fraction is R_2 divided by the total resistance, 4.0 plus 6.0.",
          "6.0 divided by 10.0 is 0.6, and 0.6 times 5.0 is 3.0 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2}\\,V" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{6.0}{4.0 + 6.0}\\times 5.0" },
          { label: "Answer", latex: "V_{out} = 3.0\\ \\text{V}" },
        ],
        explain: "The output is 3.0 volts, because 6.0 divided by 10.0 is 0.6, and 0.6 times 5.0 volts is 3.0 volts. The larger share of the voltage sits across the larger resistor.",
      },
      {
        kind: "choice",
        question: "Resistors of 25 ohms, 50 ohms and 75 ohms are connected in series. What is their total resistance?",
        options: ["13.6 ohms", "150 ohms", "50 ohms", "75 ohms"],
        correct: 1,
        ask: "Resistors in series add up. Work out 25 plus 50 plus 75.",
        hints: [
          "For a series combination the total resistance is the sum of the separate resistances.",
          "25 plus 50 plus 75 is 150 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = R_1 + R_2 + R_3" },
          { label: "Substitute", latex: "R = 25 + 50 + 75" },
          { label: "Answer", latex: "R = 150\\ \\Omega" },
        ],
        explain: "The total resistance is 150 ohms, because resistors in series simply add and 25 plus 50 plus 75 is 150 ohms.",
      },
      {
        kind: "choice",
        question: "3 identical resistors can be wired in different ways. Which arrangement gives the LOWEST total resistance?",
        figure: "fig-pr6-05",
        options: ["all 3 in series", "one resistor on its own", "all 3 in parallel", "2 in series with the third alone"],
        correct: 2,
        ask: "Adding resistors in parallel opens up more paths for the current. Which arrangement lets the most current through for a given voltage?",
        hints: [
          "In parallel the total resistance is always less than the smallest single resistor.",
          "More parallel branches means more paths for charge, so the total resistance is lowest for all 3 in parallel.",
        ],
        explain: "All 3 in parallel gives the lowest total resistance, because each extra branch adds another path for current, and the parallel total is always smaller than the smallest single resistor. Series arrangements add up instead.",
      },
      {
        kind: "classify",
        prompt: "Sort each component by whether it obeys Ohm's law.",
        bins: ["Ohmic", "Non-ohmic"],
        items: [
          { text: "a metal wire at constant temperature", bin: 0 },
          { text: "a fixed resistor at constant temperature", bin: 0 },
          { text: "a filament lamp", bin: 1 },
          { text: "a semiconductor diode", bin: 1 },
        ],
        ask: "An ohmic component gives a straight line through the origin on an I-V graph, so its resistance stays constant. Tap each component and drop it in its bin.",
        hints: [
          "A metal wire and a fixed resistor at steady temperature keep a constant resistance, so current is proportional to voltage.",
          "A filament lamp heats up so its resistance rises, and a diode blocks the reverse direction, so both are non-ohmic.",
        ],
        explain: "A metal wire and a fixed resistor at constant temperature are ohmic, because their resistance stays constant. A filament lamp heats up and a diode conducts only one way, so both are non-ohmic.",
      },
      {
        kind: "match",
        prompt: "Match each component to the shape of its I-V characteristic.",
        pairs: [
          { left: "ohmic resistor", right: "a straight line through the origin" },
          { left: "filament lamp", right: "an S-shaped curve that flattens as it heats" },
          { left: "semiconductor diode", right: "almost no current until a turn-on voltage, then a steep rise" },
        ],
        ask: "Recall which component keeps a constant resistance, which one heats up, and which one conducts in only one direction.",
        hints: [
          "A constant resistance plots as a straight line through the origin, gradient 1 over R.",
          "The lamp's resistance rises as it heats, giving an S-shape, and the diode blocks current until its turn-on voltage.",
        ],
        explain: "An ohmic resistor gives a straight line through the origin, a filament lamp gives an S-shaped curve because its resistance rises as it heats, and a diode gives almost no current until its turn-on voltage, then a steep rise.",
      },
      {
        kind: "graphpick",
        prompt: "Which I-V graph belongs to an ohmic conductor at constant temperature?",
        xLabel: "V / V",
        yLabel: "I / A",
        options: [
          { points: [[0, 0], [1.5, 0.25], [3, 0.5]], caption: "straight line through the origin" },
          { points: [[0, 0], [0.5, 0.25], [1.5, 0.45], [3, 0.55]], caption: "curve that flattens" },
          { points: [[0, 0], [1, 0.02], [1.8, 0.1], [2.2, 0.6], [2.6, 1.4]], caption: "flat then a steep rise" },
        ],
        correct: 0,
        ask: "An ohmic conductor has a constant resistance, so equal steps in voltage give equal steps in current. Which line is straight and passes through the origin?",
        hints: [
          "For an ohmic conductor current is proportional to voltage.",
          "Only a straight line through the origin, with gradient 1 over R, shows a constant resistance.",
        ],
        explain: "The straight line through the origin is the ohmic one, because current is proportional to voltage there and the gradient, 1 over R, is constant. The flattening curve is a lamp and the flat-then-steep curve is a diode.",
      },
      {
        kind: "slider",
        prompt: "A potential divider has R_1 = 3.0 ohms and R_2 = 6.0 ohms across a 9.0 V supply, with the output across R_2. Set the slider to V_out, in V.",
        min: 0,
        max: 9,
        step: 0.1,
        unit: "V",
        start: 0,
        targetMin: 5.9,
        targetMax: 6.1,
        ask: "The output fraction is R_2 divided by the total, 3.0 plus 6.0. Work out 6.0 over 9.0 times 9.0.",
        hints: [
          "Use V_out equals R_2 over R_1 plus R_2, times the supply voltage.",
          "6.0 divided by 9.0 is 0.667, and 0.667 times 9.0 is 6.0 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2}\\,V" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{6.0}{3.0 + 6.0}\\times 9.0" },
          { label: "Answer", latex: "V_{out} = 6.0\\ \\text{V}" },
        ],
        explain: "The output is 6.0 volts, because 6.0 divided by 9.0 is 0.667, and 0.667 times 9.0 volts is 6.0 volts. 2 thirds of the resistance carries 2 thirds of the voltage.",
      },
      {
        kind: "tiles",
        prompt: "A lamp reads 9.30 V across it while 1.52 A flows. Build the working line that gives its resistance.",
        tiles: ["R =", "9.30", "\\div", "1.52", "=", "6.12", "ohms", "V"],
        answer: ["R =", "9.30", "\\div", "1.52", "=", "6.12", "ohms"],
        ask: "Resistance is voltage divided by current, so set up 9.30 divided by 1.52.",
        hints: [
          "Use R equals V divided by I.",
          "9.30 divided by 1.52 is 6.12, and resistance is measured in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{9.30}{1.52}" },
          { label: "Answer", latex: "R = 6.12\\ \\Omega" },
        ],
        explain: "The resistance is 6.12 ohms, because 9.30 volts divided by 1.52 amperes is 6.12 ohms.",
      },
      {
        kind: "open",
        prompt: "Explain how the resistance of a metal wire depends on its length and on its cross-sectional area.",
        figure: "fig-pr6-01",
        modelAnswer: "For a wire of one material at constant temperature, R = rho L / A. The resistance is proportional to the length, so a longer wire has more resistance, because the charge meets more opposition on its way through. The resistance is inversely proportional to the cross-sectional area, so a thicker wire has less resistance, because there is more room for the charge to flow. Doubling the length doubles the resistance; doubling the area halves it.",
        marks: [
          "Resistance is proportional to length, so a longer wire has more resistance.",
          "Resistance is inversely proportional to cross-sectional area, so a thicker wire has less resistance.",
          "States R = rho L / A, or that doubling length doubles R and doubling area halves R.",
        ],
        ask: "Think about the R = rho L / A relationship, and whether each of length and area sits on the top or the bottom.",
      },
      {
        kind: "open",
        prompt: "Compare how the current and the voltage behave in a series circuit with how they behave in a parallel circuit.",
        figure: "fig-pr6-05",
        modelAnswer: "In a series circuit there is one path, so the current is the same at every point, and the supply voltage is shared between the components in proportion to their resistances. In a parallel circuit each branch is connected across the same 2 points, so the voltage is the same across every branch, and the total current splits between the branches, with more current in the branch of lower resistance. So series shares voltage while keeping current the same, and parallel shares current while keeping voltage the same.",
        marks: [
          "Series: the current is the same everywhere; the voltage is shared (in proportion to resistance).",
          "Parallel: the voltage is the same across each branch; the current is shared (inversely to resistance).",
          "Contrasts the 2 clearly (series shares V, parallel shares I).",
        ],
        ask: "Think about which quantity stays the same and which one is shared, first when there is a single path and then when there are several branches.",
      },
    ],
  },
];
