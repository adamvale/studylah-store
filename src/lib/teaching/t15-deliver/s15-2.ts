import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, section 2. Grounded in KB Chapter 17 (D.C. Circuits) section 17.2.
// Circuit figure colours follow the chapter key: the current and branch currents (moving charge) = blue;
// wires, resistors, cells/battery and meters (ammeter A, voltmeter V) = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t15.2",
    code: "T15.2",
    title: "Parallel circuits",
    blurb: "Branches across the same 2 points: currents add, the p.d. stays the same",
    steps: [
      {
        kind: "concept",
        heading: "More than one branch",
        figure: "fig-17-04-parallel-current",
        body: "*Parallel* components are joined across the *same 2 points*, giving more than one branch for the current. The main current splits, then the branch currents *add* back to the source current, because charge is conserved.",
        formula: {
          latex: "I = I_1 + I_2",
          where: [
            { sym: "I", meaning: "current from the source", unit: "A" },
            { sym: "I_1", meaning: "current in branch 1", unit: "A" },
            { sym: "I_2", meaning: "current in branch 2", unit: "A" },
          ],
        },
        say: "In the picture the white wires leave the cell and reach a junction, where the blue main current I splits into 2 blue branch currents, I one and I 2, through the 2 white resistors. Further along the branches meet again. No charge is lost at a junction, so the branch currents add straight back up to the source current: I equals I one plus I 2.",
      },
      {
        kind: "concept",
        heading: "The same p.d. across each branch",
        figure: "fig-17-05-parallel-pd",
        body: "Every *branch* connects the *same 2 points*, so each branch has the *same p.d.*, equal to the source voltage. The branch with lower resistance carries the larger current.",
        formula: {
          latex: "V = V_1 = V_2",
          where: [
            { sym: "V", meaning: "source p.d.", unit: "V" },
            { sym: "V_1", meaning: "p.d. across branch 1", unit: "V" },
            { sym: "V_2", meaning: "p.d. across branch 2", unit: "V" },
          ],
        },
        say: "Here the white cell drives current through 2 white resistor branches side by side. Because both branches are wired across the very same 2 points, they must have the same p.d. across them, equal to the source voltage: V equals V one equals V 2. With the same p.d. pushing on each branch, the branch of lower resistance lets a bigger blue current flow.",
      },
      {
        kind: "concept",
        heading: "The effective resistance is smaller",
        body: "Adding a *parallel* branch gives the current another path, so more current flows for the same p.d. The *effective resistance* is therefore *smaller than the smallest branch*, and you find it by adding reciprocals.",
        formula: {
          latex: "\\frac{1}{R_{eff}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
          where: [
            { sym: "R_{eff}", meaning: "effective (combined) resistance", unit: "\\Omega" },
            { sym: "R_1", meaning: "resistance of branch 1", unit: "\\Omega" },
            { sym: "R_2", meaning: "resistance of branch 2", unit: "\\Omega" },
          ],
        },
        say: "Opening a second branch is like opening a second checkout lane: the charge has an extra way through, so more current flows for the same push. That means the combined resistance drops below even the smallest single branch. To work it out, add the reciprocals: 1 over R effective equals 1 over R one plus 1 over R 2, then flip the result.",
      },
      {
        kind: "choice",
        question: "A 12 V supply is connected across 2 parallel branches, P = 4 ohm and Q = 12 ohm. Find the total current I from the supply.",
        figure: "fig-17-06-parallel-we1",
        options: ["3 A", "4 A", "16 A", "48 A"],
        correct: 1,
        ask: "First combine the branches: 1 over R equals 1 over 4 plus 1 over 12, which is 4 over 12, so R is 3 ohms. Then the current is 12 divided by 3.",
        hints: [
          "1 over 4 plus 1 over 12 is 4 over 12, so the effective resistance is 3 ohms.",
          "The total current is 12 divided by 3, which is 4.",
        ],
        working: [
          { label: "Formula", latex: "\\frac{1}{R_{eff}} = \\frac{1}{R_1} + \\frac{1}{R_2},\\quad I = \\frac{V}{R_{eff}}" },
          { label: "Substitute", latex: "\\frac{1}{R_{eff}} = \\frac{1}{4} + \\frac{1}{12} = \\frac{4}{12},\\quad I = \\frac{12}{3}" },
          { label: "Answer", latex: "I = 4\\ \\text{A}" },
        ],
        explain: "The total current is 4 amperes, because the branches combine to 3 ohms and 12 volts divided by 3 ohms is 4 amperes.",
      },
      {
        kind: "choice",
        question: "A 6 V battery drives 2 parallel branches, one of 6 ohm and one of 3 ohm. Find the total current from the battery.",
        options: ["1 A", "2 A", "3 A", "9 A"],
        correct: 2,
        ask: "Each branch has the full 6 volts across it. Find each branch current with I equals V over R, then add them.",
        hints: [
          "The 6 ohm branch carries 6 divided by 6, which is 1 ampere; the 3 ohm branch carries 6 divided by 3, which is 2 amperes.",
          "Add the branch currents: 1 plus 2 is 3.",
        ],
        working: [
          { label: "Formula", latex: "I = I_1 + I_2 = \\frac{V}{R_1} + \\frac{V}{R_2}" },
          { label: "Substitute", latex: "I = \\frac{6}{6} + \\frac{6}{3} = 1 + 2" },
          { label: "Answer", latex: "I = 3\\ \\text{A}" },
        ],
        explain: "The total current is 3 amperes, because the branches carry 1 ampere and 2 amperes, and the branch currents add to the source current.",
      },
      {
        kind: "choice",
        question: "A 6 ohm resistor and a 12 ohm resistor are connected in parallel. What is their effective resistance?",
        options: ["4 ohms", "18 ohms", "2 ohms", "9 ohms"],
        correct: 0,
        ask: "Add the reciprocals: 1 over 6 plus 1 over 12. Put them over 12, then flip the total.",
        hints: [
          "1 over 6 is 2 over 12, so 1 over 6 plus 1 over 12 is 3 over 12, which is 1 over 4.",
          "Flip 1 over 4 to get 4 ohms. The answer must be smaller than the smallest branch, 6 ohms.",
        ],
        working: [
          { label: "Formula", latex: "\\frac{1}{R_{eff}} = \\frac{1}{R_1} + \\frac{1}{R_2}" },
          { label: "Substitute", latex: "\\frac{1}{R_{eff}} = \\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}" },
          { label: "Answer", latex: "R_{eff} = 4\\ \\text{ohms}" },
        ],
        explain: "The effective resistance is 4 ohms, because the reciprocals add to 1 over 4, and the combined value is smaller than the smallest branch of 6 ohms.",
      },
      {
        kind: "choice",
        question: "2 lamps are connected in parallel across a 6 V battery. What is the p.d. across each lamp?",
        options: ["2 V", "3 V", "12 V", "6 V"],
        correct: 3,
        ask: "Both lamps are wired across the same 2 points, so think about what that means for the voltage across each one.",
        hints: [
          "Parallel branches share the same 2 points, so they have the same p.d.",
          "That p.d. equals the source voltage, 6 volts, not a share of it.",
        ],
        explain: "Each lamp has 6 volts across it, because every parallel branch connects the same 2 points and so has the same p.d. as the source. The voltage is not shared out the way it is in a series circuit.",
      },
      {
        kind: "insight",
        body: "In *parallel*, every branch runs on the *full source p.d.* and works *independently*, so a *fault in one branch* leaves the others still working. This is why the lights and sockets in a house are wired in parallel.",
        say: "Here is the idea to keep. Because parallel branches each get the full source voltage and each has its own path, they run independently. If one branch breaks, current still flows through the others, so they keep working. That is exactly why house lighting is wired in parallel: switch off or blow one bulb, and the rest stay on.",
      },
    ],
  },
];
