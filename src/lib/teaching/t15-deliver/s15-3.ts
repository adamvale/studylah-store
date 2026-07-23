import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, section 3. Grounded in KB Chapter 17 (D.C. Circuits) sections 17.3 and 17.4.
// Figure colours follow the chapter key: current and branch currents = blue; wires, resistors,
// cells, meters = white/grey. CALCULATION section: every calc question carries a working block and
// uses only the CALCULATION BANK values.

export const BOXES: Subconcept[] = [
  {
    id: "t15.3",
    code: "T15.3",
    title: "Comparing series and parallel; combined circuits",
    blurb: "The 2 sets of rules side by side, and how to solve a mixed circuit",
    steps: [
      {
        kind: "concept",
        heading: "The 2 sets of rules",
        figure: "fig-17-08-summary",
        body: "In a *series* circuit the current is the same everywhere and the p.d.s add, so the resistance adds and grows larger. In a *parallel* circuit the branch currents add and every branch shares the same p.d., so the resistance is *smaller* than the smallest branch.",
        formula: {
          latex: "R_{\\text{series}} = R_1 + R_2 \\qquad \\dfrac{1}{R_{\\text{parallel}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}",
          where: [
            { sym: "R_1, R_2", meaning: "the 2 resistances", unit: "\\Omega" },
            { sym: "R_{\\text{series}}", meaning: "effective resistance in series", unit: "\\Omega" },
            { sym: "R_{\\text{parallel}}", meaning: "effective resistance in parallel", unit: "\\Omega" },
          ],
        },
        say: "This figure sets the 2 arrangements side by side. On the left a series loop carries one blue current through white resistors drawn end to end, and its formula adds the resistances. On the right the blue current splits between 2 white resistors joined across the same 2 points, and its formula adds the reciprocals. Series resistance always grows larger; parallel resistance always ends up smaller than the smallest branch.",
      },
      {
        kind: "concept",
        heading: "What a fault does",
        body: "In *series* a break anywhere leaves *one path* broken, so the whole circuit stops. In *parallel* each branch is a separate path, so a fault in one branch *does not stop* the others working.",
        say: "The 2 arrangements also fail very differently. A series circuit is a single loop, so one break anywhere leaves no path and everything switches off, the way old fairy lights all died together. A parallel circuit gives each device its own branch, so if one blows the rest keep their own path and carry on. That is why the lamps in a house are wired in parallel.",
      },
      {
        kind: "concept",
        heading: "A combined circuit",
        figure: "fig-17-07-combined-we",
        body: "A *combined* circuit mixes both arrangements. Here a resistor P sits in *series* with a *parallel group* of 2 more resistors. You cannot use one simple rule, because part of it is series and part of it is parallel.",
        say: "This circuit is a mixture. A grey 6 volt cell drives a blue current through a single white resistor P of 2 ohms. The current then reaches a parallel group where it splits between a 6 ohm branch and a 3 ohm branch, before joining again to return to the cell. So P is in series with the pair, and the pair itself is in parallel.",
      },
      {
        kind: "concept",
        heading: "Reduce it in stages",
        body: "To solve a combined circuit, *collapse the parallel group* into its single effective resistance first. That turns the whole thing into a simple *series* circuit, which you then solve for the main current and share the p.d. back out.",
        formula: {
          latex: "\\dfrac{1}{R_{\\text{pair}}} = \\dfrac{1}{6} + \\dfrac{1}{3} = \\dfrac{1}{2} \\;\\Rightarrow\\; R_{\\text{pair}} = 2\\ \\Omega",
          where: [
            { sym: "R_{\\text{pair}}", meaning: "resistance of the parallel group", unit: "\\Omega" },
          ],
        },
        say: "The trick is to work in stages. First replace the tricky parallel group with the one resistance that behaves the same. For the 6 ohm and 3 ohm branches, one over the pair is one sixth plus one third, which is a half, so the pair is worth 2 ohms. Now the messy circuit is just a plain series circuit, a 2 ohm resistor and a 2 ohm equivalent in a line, and the rest is easy.",
      },
      {
        kind: "match",
        prompt: "Match each rule to the arrangement it describes.",
        pairs: [
          { left: "Current is the same at every point", right: "Series" },
          { left: "The p.d.s add up to the source p.d.", right: "Series" },
          { left: "The branch currents add to the source current", right: "Parallel" },
          { left: "Every branch has the same p.d.", right: "Parallel" },
        ],
        ask: "Ask whether the quantity is shared out or kept the same. In series the current is shared by no one but the p.d. is split; in parallel the p.d. is shared by all but the current is split.",
        hints: [
          "One path means one current all the way round, so a single current belongs to series.",
          "Separate branches across the same 2 points must all feel the same p.d., so equal p.d. belongs to parallel.",
        ],
        explain: "In series there is one current everywhere and the p.d.s add. In parallel the branch currents add and every branch shares the same p.d.",
      },
      {
        kind: "order",
        prompt: "Put the steps for solving a combined circuit into the right order.",
        items: [
          "Combine the parallel group into one effective resistance",
          "Add that to the series resistor to get R_eff",
          "Find the main current with I = V / R_eff",
          "Work out the p.d. across each part of the series circuit",
          "Share the group's p.d. between its branches to get each branch current",
        ],
        ask: "You have to simplify before you can calculate. Deal with the awkward parallel part first, then treat what is left as a plain series circuit, then go back into the branches last.",
        hints: [
          "Nothing else can be found until the parallel group is a single resistance, so that comes first.",
          "Only once you know the main current can you find p.d.s, and only then can you split the current back into the branches.",
        ],
        explain: "You collapse the parallel group first, add it to the series resistor for R_eff, find the main current, then work out the p.d.s and finally the branch currents.",
      },
      {
        kind: "choice",
        question: "A 6 V cell drives P = 2 ohm in series with a parallel pair (6 ohm and 3 ohm) that reduces to 2 ohm. What is the effective resistance of the whole circuit?",
        figure: "fig-17-07-combined-we",
        options: ["6 ohm", "4 ohm", "8 ohm", "2 ohm"],
        correct: 1,
        ask: "The parallel pair already counts as 2 ohms, and it sits in series with P. Add the 2 series resistances.",
        hints: [
          "Once the pair is a single 2 ohm resistance, the circuit is just 2 resistors in series.",
          "2 plus 2 is 4, so the effective resistance is 4 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R_{\\text{eff}} = R_P + R_{\\text{pair}}" },
          { label: "Substitute", latex: "R_{\\text{eff}} = 2 + 2" },
          { label: "Answer", latex: "R_{\\text{eff}} = 4\\ \\Omega" },
        ],
        explain: "The effective resistance is 4 ohms, because the parallel pair reduces to 2 ohms and adds in series to the 2 ohm resistor P.",
      },
      {
        kind: "choice",
        question: "The same circuit has R_eff = 4 ohm across a 6 V cell. What is the main current from the cell?",
        figure: "fig-17-07-combined-we",
        options: ["1.5 A", "0.5 A", "3 A", "2 A"],
        correct: 0,
        ask: "The main current is the source p.d. divided by the effective resistance. Work out 6 divided by 4.",
        hints: [
          "Use I equals V divided by R_eff.",
          "6 divided by 4 is 1.5, so the main current is 1.5 amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_{\\text{eff}}}" },
          { label: "Substitute", latex: "I = \\dfrac{6}{4}" },
          { label: "Answer", latex: "I = 1.5\\ \\text{A}" },
        ],
        explain: "The main current is 1.5 amperes, because 6 volts divided by 4 ohms is 1.5 amperes.",
      },
      {
        kind: "choice",
        question: "In that circuit the main current of 1.5 A flows through P = 2 ohm. What is the p.d. across P?",
        figure: "fig-17-07-combined-we",
        options: ["1.5 V", "6 V", "3 V", "0.5 V"],
        correct: 2,
        ask: "P carries the whole main current, so its p.d. is the current times its resistance. Work out 1.5 times 2.",
        hints: [
          "Use V equals I times R for the resistor P.",
          "1.5 times 2 is 3, so the p.d. across P is 3 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_P = I \\times R_P" },
          { label: "Substitute", latex: "V_P = 1.5 \\times 2" },
          { label: "Answer", latex: "V_P = 3\\ \\text{V}" },
        ],
        explain: "The p.d. across P is 3 volts, because 1.5 amperes through 2 ohms is 3 volts. That leaves 3 volts across the parallel pair.",
      },
      {
        kind: "choice",
        question: "The parallel pair has 3 V across it. What current flows in the 6 ohm branch (Q)?",
        figure: "fig-17-07-combined-we",
        options: ["1 A", "1.5 A", "0.5 A", "3 A"],
        correct: 2,
        ask: "Every branch of the pair feels the same 3 volts. The branch current is that p.d. divided by the branch resistance, so work out 3 divided by 6.",
        hints: [
          "Use I_Q equals the pair's p.d. divided by 6 ohms.",
          "3 divided by 6 is 0.5, so the 6 ohm branch carries 0.5 amperes.",
        ],
        working: [
          { label: "Formula", latex: "I_Q = \\dfrac{V_{\\text{pair}}}{R_Q}" },
          { label: "Substitute", latex: "I_Q = \\dfrac{3}{6}" },
          { label: "Answer", latex: "I_Q = 0.5\\ \\text{A}" },
        ],
        explain: "The 6 ohm branch carries 0.5 amperes, because 3 volts across 6 ohms is 0.5 amperes. The 3 ohm branch takes the other 1 ampere, and 0.5 plus 1 gives back the 1.5 ampere main current.",
      },
      {
        kind: "choice",
        question: "A 9 V cell drives a 4 ohm resistor in series with a parallel pair (3 ohm and 6 ohm) that reduces to 2 ohm. What is the effective resistance?",
        options: ["4 ohm", "5 ohm", "9 ohm", "6 ohm"],
        correct: 3,
        ask: "The parallel pair is worth 2 ohms and sits in series with the 4 ohm resistor. Add the 2 series resistances.",
        hints: [
          "3 ohm and 6 ohm in parallel give 2 ohms, so the circuit is a 4 ohm and a 2 ohm in series.",
          "4 plus 2 is 6, so the effective resistance is 6 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R_{\\text{eff}} = R + R_{\\text{pair}}" },
          { label: "Substitute", latex: "R_{\\text{eff}} = 4 + 2" },
          { label: "Answer", latex: "R_{\\text{eff}} = 6\\ \\Omega" },
        ],
        explain: "The effective resistance is 6 ohms, because the 3 ohm and 6 ohm branches reduce to 2 ohms, which adds in series to the 4 ohm resistor.",
      },
      {
        kind: "choice",
        question: "In that 9 V circuit the main current is 1.5 A and it all flows through the 4 ohm resistor. What is the p.d. across the 4 ohm resistor?",
        options: ["3 V", "6 V", "9 V", "1.5 V"],
        correct: 1,
        ask: "The 4 ohm resistor carries the whole main current, so its p.d. is the current times its resistance. Work out 1.5 times 4.",
        hints: [
          "Use V equals I times R for the 4 ohm resistor.",
          "1.5 times 4 is 6, so the p.d. across it is 6 volts.",
        ],
        working: [
          { label: "Formula", latex: "V = I \\times R" },
          { label: "Substitute", latex: "V = 1.5 \\times 4" },
          { label: "Answer", latex: "V = 6\\ \\text{V}" },
        ],
        explain: "The p.d. across the 4 ohm resistor is 6 volts, because 1.5 amperes through 4 ohms is 6 volts. The remaining 3 volts sits across the parallel pair.",
      },
      {
        kind: "insight",
        body: "Never fight a combined circuit whole. *Collapse the parallel group* to one resistance, solve the *simple series* circuit it becomes, then step back into the branches to find each *branch current*.",
        say: "Here is the habit to keep. A combined circuit looks hard only because you try to swallow it in one bite. Shrink the parallel group down to its single equivalent resistance, and what remains is an ordinary series circuit you already know how to solve. Find the main current, share out the p.d.s, and only at the end step back into the branches. Reduce, solve, then split.",
      },
    ],
  },
];
