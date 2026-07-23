import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, section 4. Grounded in KB Chapter 17 (D.C. Circuits) section 17.5.
// Circuit figure colours follow the house palette: current and moving charge = blue;
// wires, resistors, cells and meters = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t15.4",
    code: "T15.4",
    title: "The potential divider",
    blurb: "Using 2 series resistors to tap off a chosen fraction of the supply voltage",
    steps: [
      {
        kind: "concept",
        heading: "Splitting a voltage",
        figure: "fig-17-09-potential-divider",
        body: "A *potential divider* uses 2 resistors in *series* to tap off a *fraction* of the input voltage. The output is taken across just one of them.",
        say: "The figure shows 2 white resistors wired in a single vertical line. The top resistor is labelled R1 and the bottom one R2. The full input voltage V in is applied across the pair, and a pair of output terminals connects across the bottom resistor R2 only. Because the 2 resistors share the input, tapping across one of them gives you a chosen slice of the supply.",
      },
      {
        kind: "concept",
        heading: "Sharing in proportion",
        figure: "fig-17-09-potential-divider",
        body: "The input is *shared* between the resistors *in proportion* to their resistances. The output across R2 is R2 over R1 plus R2, all times the input.",
        formula: {
          latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}",
          where: [
            { sym: "V_out", meaning: "output voltage across R2", unit: "V" },
            { sym: "V_in", meaning: "input voltage across both resistors", unit: "V" },
            { sym: "R_1", meaning: "top resistance", unit: "ohm" },
            { sym: "R_2", meaning: "bottom resistance (output taken across this)", unit: "ohm" },
          ],
        },
        say: "The same current flows through both series resistors, so each one takes a share of the voltage set by its resistance. The bigger a resistor's share of the total resistance, the bigger its share of the voltage. To find the output across R2, work out R2 divided by the total R1 plus R2, then multiply that fraction by the input voltage.",
      },
      {
        kind: "concept",
        heading: "A variable divider",
        body: "A *variable* divider, or *potentiometer*, uses a *sliding contact* along a resistor so the output adjusts *smoothly* from zero up to the full input, like a volume control.",
        say: "Instead of 2 fixed resistors, a potentiometer is one length of resistance with a slider that moves along it. Sliding the contact changes how much resistance sits below the tap, so the output voltage rises or falls smoothly. At one end the output is zero, at the other it is the full input. That is exactly how a volume knob turns the sound from silent up to loud.",
      },
      {
        kind: "choice",
        question: "A 6 V supply is across a divider with R_1 = 2 ohm on top and R_2 = 4 ohm below. Find V_out across R_2.",
        options: ["2 V", "3 V", "4 V", "6 V"],
        correct: 2,
        ask: "The output is R2 over R1 plus R2, times the input. Work out 4 ÷ 6, then times 6.",
        hints: [
          "The total resistance is 2 + 4, which is 6 ohms.",
          "4 ÷ 6, × 6 volts, is 4 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{4}{2 + 4} \\times 6" },
          { label: "Answer", latex: "V_{out} = 4\\ \\text{V}" },
        ],
        explain: "The output is 4 volts, because 4 ohms out of a total of 6 ohms is the fraction 4 over 6, and 4 over 6 of 6 volts is 4 volts.",
      },
      {
        kind: "choice",
        question: "A 12 V supply is across a divider with R_1 = 9 ohm on top and R_2 = 3 ohm below. Find V_out across R_2.",
        options: ["3 V", "9 V", "4 V", "6 V"],
        correct: 0,
        ask: "Use the output equals R2 over R1 plus R2, times the input. Work out 3 ÷ 12, then times 12.",
        hints: [
          "The total resistance is 9 + 3, which is 12 ohms.",
          "3 ÷ 12, × 12 volts, is 3 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{3}{9 + 3} \\times 12" },
          { label: "Answer", latex: "V_{out} = 3\\ \\text{V}" },
        ],
        explain: "The output is 3 volts, because 3 ohms out of a total of 12 ohms is one quarter, and one quarter of 12 volts is 3 volts.",
      },
      {
        kind: "choice",
        question: "A 12 V supply is across a divider with R_1 = 4 ohm on top and R_2 = 16 ohm below. Find V_out across R_2.",
        options: ["2.4 V", "6 V", "12 V", "9.6 V"],
        correct: 3,
        ask: "Use the output equals R2 over R1 plus R2, times the input. Work out 16 ÷ 20, then times 12.",
        hints: [
          "The total resistance is 4 + 16, which is 20 ohms.",
          "16 ÷ 20, × 12 volts, is 9.6 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{16}{4 + 16} \\times 12" },
          { label: "Answer", latex: "V_{out} = 9.6\\ \\text{V}" },
        ],
        explain: "The output is 9.6 volts, because 16 ohms out of a total of 20 ohms is 0.8, and 0.8 of 12 volts is 9.6 volts.",
      },
      {
        kind: "choice",
        question: "What does a potential divider do to the input voltage?",
        figure: "fig-17-09-potential-divider",
        options: [
          "It increases the voltage above the input",
          "It shares the voltage in proportion to the resistances",
          "It keeps the same voltage across each resistor",
          "It stores the voltage for later use",
        ],
        correct: 1,
        ask: "The 2 resistors carry the same current, so each takes a slice of the input set by its resistance.",
        hints: [
          "A divider cannot make the output bigger than the input.",
          "The bigger a resistor's share of the total resistance, the bigger its share of the voltage.",
        ],
        explain: "A potential divider shares the input voltage between the resistors in proportion to their resistances, so a larger resistance takes a larger share.",
      },
      {
        kind: "insight",
        body: "A *potential divider* turns a *fixed* supply into a *chosen* fraction just by picking the 2 resistances, so a large R2 keeps most of the voltage and a small R2 keeps only a little.",
        say: "Here is the idea to keep. You do not need a special power supply to get an odd voltage. Put 2 resistors in series across a fixed supply and tap across one of them, and the ratio of the resistances sets the fraction you get. Make the output resistor large and it keeps most of the voltage. Make it small and it keeps only a sliver.",
      },
    ],
  },
];
