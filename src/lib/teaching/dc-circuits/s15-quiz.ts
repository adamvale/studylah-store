import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, topical quiz. Whole-topic check across KB Chapter 17:
// series circuits, parallel circuits, comparing and combining them, the potential
// divider, thermistors, and light-dependent resistors (LDRs).

export const BOXES: Subconcept[] = [
  {
    id: "t15.quiz",
    code: "Quiz",
    title: "D.C. circuits topical quiz",
    blurb: "Whole-topic check: series, parallel, combined circuits, potential dividers, thermistors, LDRs",
    kind: "quiz",
    steps: [
      // 1 - CHOICE - series calculation (fig-17-03)
      {
        kind: "choice",
        question: "The circuit shows a 12 V supply with a 3 ohm and a 9 ohm resistor in series. Find the current I.",
        figure: "fig-17-03-series-we1",
        options: ["1 A", "4 A", "0.5 A", "12 A"],
        correct: 0,
        ask: "In series the resistances add, so first find the total resistance, then use I equals V divided by R.",
        hints: [
          "The effective resistance is 3 plus 9, which is 12 ohms.",
          "12 volts divided by 12 ohms is 1 ampere.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_{eff}}" },
          { label: "Substitute", latex: "I = \\dfrac{12}{3 + 9}" },
          { label: "Answer", latex: "I = 1\\ \\text{A}" },
        ],
        explain: "The current is 1 ampere. In series the resistances add to 12 ohms, and 12 volts divided by 12 ohms is 1 ampere. The same current flows at every point in the loop.",
      },
      // 2 - CHOICE - series concept
      {
        kind: "choice",
        question: "3 identical lamps are connected in series to a battery. What is true about the current through them?",
        options: [
          "It is largest in the lamp nearest the battery",
          "It is the same in every lamp",
          "It splits equally between the lamps",
          "It is zero in the middle lamp",
        ],
        correct: 1,
        ask: "A series circuit is a single loop with just one path. Think about where the charge can go once it leaves the battery.",
        hints: [
          "There is only one path, so the charge cannot split up.",
          "The same current passes through each lamp, one after another.",
        ],
        explain: "The current is the same in every lamp. A series circuit is a single loop with one path, so the charge flows through each lamp in turn without splitting.",
      },
      // 3 - INTERACTIVE (slider) - series calculation
      {
        kind: "slider",
        prompt: "An 18 V supply is connected across a 3 ohm and a 6 ohm resistor in series. Set the slider to the current I, in amperes.",
        min: 0,
        max: 5,
        step: 0.1,
        unit: "A",
        start: 0,
        targetMin: 1.9,
        targetMax: 2.1,
        ask: "The resistances add in series. Find the total, then divide the supply p.d. by it.",
        hints: [
          "The total resistance is 3 plus 6, which is 9 ohms.",
          "18 divided by 9 is 2, so slide to 2 amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_{eff}}" },
          { label: "Substitute", latex: "I = \\dfrac{18}{3 + 6}" },
          { label: "Answer", latex: "I = 2\\ \\text{A}" },
        ],
        explain: "The current is 2 amperes, because the resistances add to 9 ohms and 18 volts divided by 9 ohms is 2 amperes.",
      },
      // 4 - CHOICE - parallel calculation
      {
        kind: "choice",
        question: "A 12 V supply is connected across a 4 ohm resistor and a 12 ohm resistor in parallel. Find the effective resistance.",
        options: ["16 ohm", "3 ohm", "8 ohm", "48 ohm"],
        correct: 1,
        ask: "For a parallel pair the reciprocals of the resistances add. The result is always smaller than the smallest branch.",
        hints: [
          "1 over R equals 1 over 4 plus 1 over 12, which is 4 over 12.",
          "So R is 12 divided by 4, which is 3 ohms.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{R_{eff}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}" },
          { label: "Substitute", latex: "\\dfrac{1}{R_{eff}} = \\dfrac{1}{4} + \\dfrac{1}{12} = \\dfrac{4}{12}" },
          { label: "Answer", latex: "R_{eff} = 3\\ \\Omega" },
        ],
        explain: "The effective resistance is 3 ohms. Adding the reciprocals gives 1 over 4 plus 1 over 12, which is 4 over 12, so R is 3 ohms, smaller than either branch.",
      },
      // 5 - INTERACTIVE (tiles) - parallel calculation
      {
        kind: "tiles",
        prompt: "The parallel pair above has an effective resistance of 3 ohms across the 12 V supply. Build the working line for the total current I, using I = V/R.",
        tiles: ["I =", "12", "\\div", "3", "=", "4", "A", "V"],
        answer: ["I =", "12", "\\div", "3", "=", "4", "A"],
        ask: "The total current is the supply p.d. divided by the effective resistance, so set up 12 divided by 3.",
        hints: [
          "Use I equals V divided by R, with R equal to 3 ohms.",
          "12 divided by 3 is 4, and current is measured in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_{eff}}" },
          { label: "Substitute", latex: "I = \\dfrac{12}{3}" },
          { label: "Answer", latex: "I = 4\\ \\text{A}" },
        ],
        explain: "The total current is 4 amperes, because 12 volts divided by the effective resistance of 3 ohms is 4 amperes.",
      },
      // 6 - CHOICE - parallel concept
      {
        kind: "choice",
        question: "2 resistors are connected in parallel across a battery. Which quantity is the same for both resistors?",
        options: [
          "The current through them",
          "The power in each one",
          "The p.d. across them",
          "Nothing is shared",
        ],
        correct: 2,
        ask: "Parallel components are joined between the same 2 points. Think about what those shared connection points fix for every branch.",
        hints: [
          "Each branch is connected directly across the same 2 points.",
          "So every branch has the same p.d., even though the currents can differ.",
        ],
        explain: "The p.d. across them is the same. Parallel branches connect between the same 2 points, so each feels the full supply p.d., while more current flows in the branch of lower resistance.",
      },
      // 7 - INTERACTIVE (slider) - junction current (conservation of charge)
      {
        kind: "slider",
        prompt: "At a junction P, one wire brings in 5 A and another brings in 4 A. A third wire carries 6 A away. Set the slider to the current in the fourth wire Y, which also carries charge away, in amperes.",
        min: 0,
        max: 10,
        step: 0.5,
        unit: "A",
        start: 0,
        targetMin: 2.9,
        targetMax: 3.1,
        ask: "Charge is conserved at a junction, so the total current flowing in equals the total flowing out. Add the currents in, then subtract the current already leaving.",
        hints: [
          "The current in is 5 plus 4, which is 9 amperes.",
          "6 amperes already leaves, so wire Y carries 9 minus 6, which is 3 amperes.",
        ],
        working: [
          { label: "Formula", latex: "\\sum I_{in} = \\sum I_{out}" },
          { label: "Substitute", latex: "5 + 4 = 6 + I_Y" },
          { label: "Answer", latex: "I_Y = 3\\ \\text{A}" },
        ],
        explain: "Wire Y carries 3 amperes. By conservation of charge the 9 amperes flowing in must equal the current flowing out, and 9 minus the 6 amperes already leaving gives 3 amperes.",
      },
      // 8 - OPEN - parallel advantage
      {
        kind: "open",
        prompt: "Give one advantage of connecting the lamps in a house in parallel rather than in series.",
        modelAnswer: "In parallel each lamp is on its own branch, connected directly across the full supply p.d., so each lamp can be switched on or off on its own without affecting the others. Also, if one lamp fails and its branch breaks, the other branches are still complete, so the other lamps keep working.",
        marks: [
          "Each lamp is on its own branch across the full supply p.d.",
          "Each lamp can be switched independently.",
          "If one lamp fails, the others keep working because their branches are unbroken.",
        ],
        ask: "Think about what happens to the other lamps when 1 lamp is switched off or fails.",
      },
      // 9 - CHOICE - combined calculation (fig-17-07)
      {
        kind: "choice",
        question: "The circuit shows a 6 V cell, a 2 ohm resistor P in series with a parallel pair of a 6 ohm and a 3 ohm resistor. Find the effective resistance of the whole circuit.",
        figure: "fig-17-07-combined-we",
        options: ["11 ohm", "8 ohm", "4 ohm", "2 ohm"],
        correct: 2,
        ask: "Reduce the circuit in stages. First replace the parallel pair with a single resistance, then add the series resistor.",
        hints: [
          "6 ohm in parallel with 3 ohm gives 1 over 6 plus 1 over 3, which is 3 over 6, so 2 ohms.",
          "Add the 2 ohm resistor P in series: 2 plus 2 is 4 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R_{eff} = R_P + \\left(\\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\right)^{-1}" },
          { label: "Substitute", latex: "R_{eff} = 2 + \\left(\\dfrac{1}{6} + \\dfrac{1}{3}\\right)^{-1} = 2 + 2" },
          { label: "Answer", latex: "R_{eff} = 4\\ \\Omega" },
        ],
        explain: "The effective resistance is 4 ohms. The 6 ohm and 3 ohm branches combine to 2 ohms, and adding the 2 ohm resistor P in series gives 4 ohms.",
      },
      // 10 - INTERACTIVE (slider) - combined calculation
      {
        kind: "slider",
        prompt: "That combined circuit has an effective resistance of 4 ohms across the 6 V cell. Set the slider to the main current I from the cell, in amperes.",
        min: 0,
        max: 3,
        step: 0.1,
        unit: "A",
        start: 0,
        targetMin: 1.4,
        targetMax: 1.6,
        ask: "Once the circuit is reduced to a single effective resistance, use I equals V divided by R for the whole circuit.",
        hints: [
          "Use I equals V divided by R, with R equal to 4 ohms.",
          "6 divided by 4 is 1.5, so slide to 1.5 amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_{eff}}" },
          { label: "Substitute", latex: "I = \\dfrac{6}{4}" },
          { label: "Answer", latex: "I = 1.5\\ \\text{A}" },
        ],
        explain: "The main current is 1.5 amperes, because 6 volts divided by the effective resistance of 4 ohms is 1.5 amperes.",
      },
      // 11 - INTERACTIVE (order) - reducing a combined circuit
      {
        kind: "order",
        prompt: "Put these steps for working out the current from a combined circuit into the correct order.",
        items: [
          "Identify the group of resistors that are in parallel",
          "Replace that parallel group with its single effective resistance",
          "Redraw the circuit with the group in series with the other resistors",
          "Add the series resistances to get the effective resistance of the whole circuit",
          "Use I equals V divided by the effective resistance to find the main current",
        ],
        ask: "Start by simplifying the trickiest part of the circuit, the parallel group, and finish by finding the current for the whole circuit.",
        hints: [
          "Deal with the parallel group first, turning it into one resistance.",
          "Once everything is in series you can add the resistances and then use I equals V divided by R.",
        ],
        explain: "First find the parallel group and replace it with its single resistance. Redraw the circuit so that group is in series with the rest, add the series resistances for the whole circuit, and finally use I equals V divided by R to find the main current.",
      },
      // 12 - INTERACTIVE (match) - series vs parallel rules
      {
        kind: "match",
        prompt: "Match each rule to the circuit it describes.",
        pairs: [
          { left: "Current is the same at every point", right: "Series circuit" },
          { left: "Branch currents add up to the source current", right: "Parallel circuit" },
          { left: "Effective resistance is larger than either resistor", right: "Series circuit" },
          { left: "Effective resistance is smaller than the smallest branch", right: "Parallel circuit" },
        ],
        ask: "Recall the 2 sets of rules. In one, the current is shared but the p.d. is the same; in the other, the current is the same but the p.d. is shared.",
        hints: [
          "In series there is one path, so the current is the same and the resistances add to a larger total.",
          "In parallel the branches share the current and the total resistance is smaller than the smallest branch.",
        ],
        explain: "In a series circuit the current is the same at every point and the resistances add to a larger total. In a parallel circuit the branch currents add up to the source current and the effective resistance is smaller than the smallest branch.",
      },
      // 13 - OPEN - series fault
      {
        kind: "open",
        prompt: "Explain why switching off one lamp in a series circuit makes all the other lamps in that circuit go out.",
        modelAnswer: "Series components form a single loop with only one path for the current. Switching off or removing one lamp opens a gap in that loop, so the circuit is broken. With a break there is no complete path, the current stops everywhere, and every lamp in the loop goes out.",
        marks: [
          "A series circuit is a single loop with one path.",
          "Switching off one lamp breaks the loop.",
          "With the path broken the current stops everywhere, so all lamps go out.",
        ],
        ask: "Think about how many paths the current has in a series circuit and what a single break does to that path.",
      },
      // 14 - CHOICE - potential divider calculation
      {
        kind: "choice",
        question: "A 6 V supply is connected across a 2 ohm resistor (R1) and a 4 ohm resistor (R2) in series, with the output taken across the 4 ohm resistor. Find the output voltage.",
        options: ["2 V", "6 V", "3 V", "4 V"],
        correct: 3,
        ask: "The output is the fraction of the input set by the divider rule, V_out equals R2 over R1 plus R2, times V_in.",
        hints: [
          "R2 over R1 plus R2 is 4 over 6.",
          "4 over 6 times 6 volts is 4 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{4}{2 + 4} \\times 6" },
          { label: "Answer", latex: "V_{out} = 4\\ \\text{V}" },
        ],
        explain: "The output is 4 volts. The divider shares the 6 volts in proportion, and the 4 ohm resistor takes 4 over 6 of the input, which is 4 volts.",
      },
      // 15 - INTERACTIVE (slider) - potential divider calculation
      {
        kind: "slider",
        prompt: "A 12 V supply is across a 9 ohm resistor (R1) and a 3 ohm resistor (R2) in series, with the output taken across the 3 ohm resistor. Set the slider to the output voltage, in volts.",
        min: 0,
        max: 12,
        step: 0.1,
        unit: "V",
        start: 0,
        targetMin: 2.9,
        targetMax: 3.1,
        ask: "Use the divider rule: the output equals R2 over R1 plus R2, times the input voltage.",
        hints: [
          "R2 over R1 plus R2 is 3 over 12.",
          "3 over 12 times 12 volts is 3, so slide to 3 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{3}{9 + 3} \\times 12" },
          { label: "Answer", latex: "V_{out} = 3\\ \\text{V}" },
        ],
        explain: "The output is 3 volts, because the 3 ohm resistor takes 3 over 12 of the 12 volt input, which is 3 volts.",
      },
      // 16 - CHOICE - potential divider concept
      {
        kind: "choice",
        question: "What does a potential divider made of 2 series resistors do?",
        options: [
          "It increases the supply voltage",
          "It stores charge like a battery",
          "It measures the current directly",
          "It shares the input voltage in proportion to the resistances",
        ],
        correct: 3,
        ask: "The 2 resistors are in series across the input. Think about how the input p.d. is split between them.",
        hints: [
          "The input p.d. is shared between the 2 resistors.",
          "The larger the share of the resistance, the larger the share of the voltage across it.",
        ],
        explain: "A potential divider shares the input voltage in proportion to the resistances. The output, taken across one resistor, is always a fraction of the input, given by R2 over R1 plus R2 times V_in.",
      },
      // 17 - OPEN - potential divider explanation
      {
        kind: "open",
        prompt: "Describe how a potential divider made of 2 fixed resistors provides an output voltage that is smaller than the input voltage.",
        modelAnswer: "The 2 resistors are connected in series across the input, so the input p.d. is shared between them in proportion to their resistances. The output is taken across just one of the resistors, so it is only that resistor's share of the input, given by V_out = R2/(R1 + R2) x V_in. Because R2 is only part of the total resistance, the output is always a fraction of the input, and so it is smaller.",
        marks: [
          "The 2 resistors share the input p.d. in proportion to their resistances.",
          "The output is taken across one resistor only.",
          "V_out = R2/(R1 + R2) x V_in, so the output is a fraction of the input.",
        ],
        ask: "Explain how the input is shared between the resistors and which resistor the output is measured across.",
      },
      // 18 - CHOICE - thermistor calculation
      {
        kind: "choice",
        question: "A thermistor is in series with a fixed 8 ohm resistor across a 4.0 V supply, with the output taken across the 8 ohm resistor. The output reads 1.0 V. Find the resistance of the thermistor.",
        options: ["24 ohm", "8 ohm", "32 ohm", "2 ohm"],
        correct: 0,
        ask: "Use the divider rule with the output across the 8 ohm resistor: 1.0 equals 8 over 8 plus R_t, times 4.0. Rearrange for R_t.",
        hints: [
          "1.0 equals 8 over 8 plus R_t, times 4.0, so 8 plus R_t equals 32.",
          "R_t is 32 minus 8, which is 24 ohms.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R}{R + R_t} \\times V_{in}" },
          { label: "Substitute", latex: "1.0 = \\dfrac{8}{8 + R_t} \\times 4.0" },
          { label: "Answer", latex: "R_t = 24\\ \\Omega" },
        ],
        explain: "The thermistor's resistance is 24 ohms. The output rule gives 8 plus R_t equals 32, so R_t is 32 minus 8, which is 24 ohms.",
      },
      // 19 - INTERACTIVE (cloze) - thermistor concept
      {
        kind: "cloze",
        prompt: "Complete the sentences about a thermistor in a potential divider.",
        segments: [
          "A thermistor is an input ",
          " whose resistance ",
          " as the temperature rises. With the thermistor on top of a divider, the output across the fixed resistor below then ",
          ".",
        ],
        bank: ["transducer", "decreases", "increases", "conductor", "stays the same"],
        answer: ["transducer", "decreases", "increases"],
        ask: "Recall what a thermistor converts, what its resistance does when it gets hotter, and how that changes the share of the p.d. across the fixed resistor.",
        hints: [
          "A component that turns a change in the surroundings into a change of resistance is an input transducer.",
          "When it gets hotter the thermistor's resistance falls, so it takes a smaller share of the p.d. and the output across the fixed resistor rises.",
        ],
        explain: "A thermistor is an input transducer whose resistance decreases as the temperature rises. It then takes a smaller share of the p.d., so the output across the fixed resistor increases.",
      },
      // 20 - CHOICE - thermistor concept
      {
        kind: "choice",
        question: "A thermistor sits at the top of a divider and the output is taken across the fixed resistor below it. What happens to the output when the thermistor gets hotter?",
        options: [
          "It stays exactly the same",
          "It increases",
          "It falls to zero",
          "It reverses direction",
        ],
        correct: 1,
        ask: "A hotter thermistor has a lower resistance. Think about the share of the p.d. it then takes, and what is left across the fixed resistor.",
        hints: [
          "When hotter, the thermistor's resistance falls, so it takes a smaller share of the p.d.",
          "The remaining share across the fixed resistor therefore grows.",
        ],
        explain: "The output increases. A hotter thermistor has a lower resistance, so it takes a smaller share of the p.d. and a larger share is left across the fixed resistor.",
      },
      // 21 - INTERACTIVE (spoterror) - conceptual, no working
      {
        kind: "spoterror",
        prompt: "Here are 4 statements about circuit components. Tap the one statement that is wrong.",
        lines: [
          "In a series circuit the current is the same at every point",
          "Every branch of a parallel circuit has the same p.d.",
          "A thermistor's resistance rises when it gets hotter",
          "An LDR's resistance falls when the light gets brighter",
        ],
        errorLine: 2,
        ask: "3 of these statements are correct rules. Check the direction of the change described for the temperature-sensitive component.",
        hints: [
          "The series and parallel rules given here are both correct, and so is the LDR statement.",
          "A thermistor's resistance actually decreases as it gets hotter, so that line is the wrong one.",
        ],
        explain: "The wrong statement is that a thermistor's resistance rises when it gets hotter. In fact a thermistor's resistance decreases as the temperature rises.",
      },
      // 22 - OPEN - thermistor application
      {
        kind: "open",
        prompt: "Explain how a thermistor in a potential divider can be used to switch on a cooling fan when a room gets too hot.",
        modelAnswer: "As the room gets hotter the thermistor's resistance decreases, so it takes a smaller share of the p.d. and the output voltage across the fixed resistor increases. When this output rises high enough it triggers a switching circuit, such as a transistor or a relay, which turns the cooling fan on. When the room cools, the thermistor's resistance rises again, the output falls, and the fan switches off.",
        marks: [
          "A rise in temperature lowers the thermistor's resistance.",
          "The output voltage across the fixed resistor then increases.",
          "The rising output triggers a switch that turns the fan on.",
        ],
        ask: "Link the temperature to the thermistor's resistance, then to the output voltage, then to the switch that runs the fan.",
      },
      // 23 - INTERACTIVE (graphpick) - LDR resistance vs light
      {
        kind: "graphpick",
        prompt: "Which graph best shows how the resistance of an LDR changes as the light falling on it gets brighter?",
        xLabel: "light intensity",
        yLabel: "resistance / ohm",
        options: [
          { points: [[0, 2], [1, 6], [2, 10], [3, 14], [4, 18]], caption: "Rises as the light increases" },
          { points: [[0, 18], [1, 10], [2, 5], [3, 2], [4, 1]], caption: "Falls as the light increases" },
          { points: [[0, 10], [1, 10], [2, 10], [3, 10], [4, 10]], caption: "Stays constant" },
          { points: [[0, 1], [1, 2], [2, 5], [3, 10], [4, 18]], caption: "Rises steeply as the light increases" },
        ],
        correct: 1,
        ask: "An LDR responds to light. Recall whether its resistance goes up or down as the light gets brighter, then pick the matching shape.",
        hints: [
          "Brighter light lowers the resistance of an LDR.",
          "The correct graph starts high in the dark and falls as the light intensity increases.",
        ],
        explain: "The correct graph falls as the light increases. An LDR has a high resistance in the dark and a low resistance in bright light, so its resistance decreases as the light gets brighter.",
      },
      // 24 - CHOICE - LDR concept
      {
        kind: "choice",
        question: "How does the resistance of an LDR change as the light falling on it gets brighter?",
        options: ["It rises", "It stays constant", "It falls", "It becomes infinite"],
        correct: 2,
        ask: "An LDR is a light-dependent resistor. Recall which way its resistance moves when more light reaches it.",
        hints: [
          "In the dark an LDR has a high resistance, around 5000 ohms.",
          "In bright light its resistance drops to around 300 ohms, so brighter light lowers the resistance.",
        ],
        explain: "Its resistance falls. An LDR has a high resistance in the dark and a much lower resistance in bright light, so brighter light lowers its resistance.",
      },
      // 25 - OPEN - LDR application (fig-17-11)
      {
        kind: "open",
        prompt: "The circuit shows an LDR at the top of a potential divider with a fixed resistor below and the output taken across the fixed resistor. Explain how this makes a street lamp switch on at dusk.",
        figure: "fig-17-11-ldr-divider",
        modelAnswer: "In daylight the LDR has a low resistance, so it takes only a small share of the p.d. and the output across the fixed resistor is high, which keeps the lamp off. As it gets dark at dusk the LDR's resistance rises sharply, so it takes a larger share of the p.d. and the output across the fixed resistor falls. The control circuit is set to switch the street lamp on when this output drops low enough, so the lamp comes on as darkness falls.",
        marks: [
          "In daylight the LDR resistance is low, so the output across the fixed resistor is high and the lamp stays off.",
          "As it gets dark the LDR resistance rises, so the output across the fixed resistor falls.",
          "The circuit switches the lamp on when the output drops low enough, at dusk.",
        ],
        ask: "Compare the LDR's resistance in daylight and in the dark, and link it to the output voltage that triggers the lamp.",
      },
    ],
  },
];
