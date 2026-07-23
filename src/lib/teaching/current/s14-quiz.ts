import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, topical quiz. Whole-topic check across KB Chapter 16:
// electric current and Q = I t, e.m.f. and potential difference, resistance and R = V/I,
// resistors in series and parallel, the resistance of a wire (R = rho l / A), and Ohm's
// law with I-V characteristics. Question-only; calculations carry a working block using
// the checked bank values; figures appear only on choice and open steps.

export const BOXES: Subconcept[] = [
  {
    id: "t14.quiz",
    code: "Quiz",
    title: "Current of electricity topical quiz",
    blurb: "Whole-topic check: current, e.m.f. and p.d., resistance, series and parallel, R = rho l / A, Ohm's law",
    kind: "quiz",
    steps: [
      // 1 of 10 choice ------------------------------------------------------
      {
        kind: "choice",
        question: "In a metal wire connected to a cell, how do the conventional current and the electron flow compare in direction?",
        figure: "fig-16-03-conventional-vs-electron",
        options: [
          "They both flow from the negative terminal to the positive terminal",
          "They both flow from the positive terminal to the negative terminal",
          "They flow in opposite directions",
          "Neither of them has a definite direction",
        ],
        correct: 2,
        ask: "Conventional current runs from positive to negative, while the electrons drift from negative to positive. Compare those 2 directions.",
        hints: [
          "Conventional current is taken as a flow of positive charge, from the positive terminal to the negative.",
          "The electrons actually move the other way, from negative to positive, so the 2 directions are opposite.",
        ],
        explain: "The 2 point in opposite directions. Conventional current is defined from the positive terminal to the negative, while the real electron flow is from the negative terminal to the positive.",
      },
      // 2 of 10 choice (calc: Q = I t) --------------------------------------
      {
        kind: "choice",
        question: "A current of 4 A flows in a wire for 3 minutes. How much charge passes a point in the wire?",
        options: ["720 C", "12 C", "45 C", "1.3 C"],
        correct: 0,
        ask: "Charge is current times time, but first change 3 minutes into seconds. What is 3 times 60?",
        hints: [
          "3 minutes is 3 times 60, which is 180 seconds.",
          "Use Q equals I times t: 4 times 180 is 720.",
        ],
        working: [
          { label: "Formula", latex: "Q = It" },
          { label: "Substitute", latex: "Q = 4 \\times 180" },
          { label: "Answer", latex: "Q = 720\\ \\text{C}" },
        ],
        explain: "The charge is 720 coulombs. 3 minutes is 180 seconds, and 4 amperes times 180 seconds is 720 coulombs.",
      },
      // 3 of 10 choice (concept: emf vs pd) ---------------------------------
      {
        kind: "choice",
        question: "Which statement about e.m.f. and potential difference is correct?",
        options: [
          "Both of them are measured in amperes",
          "The p.d. is a property of the source and is present with no current",
          "The e.m.f. is the energy transferred to a single component per coulomb",
          "The e.m.f. is the energy given to each coulomb by the source around the whole circuit",
        ],
        correct: 3,
        ask: "The e.m.f. belongs to the source and drives charge round the whole loop; the p.d. is about energy given to one component. Which option says that of the e.m.f.?",
        hints: [
          "e.m.f. and p.d. are both measured in volts, not amperes.",
          "e.m.f. is the work done per coulomb by the source around the whole circuit; p.d. is the energy delivered to one component per coulomb.",
        ],
        explain: "The e.m.f. is the energy given to each coulomb by the source as it drives the charge around the whole circuit. It is a property of the source, present even with no current, and is measured in volts.",
      },
      // 4 of 10 choice (calc: E = W / Q) ------------------------------------
      {
        kind: "choice",
        question: "A source does 2100 J of work in driving 300 C of charge around a circuit. Find the e.m.f. of the source.",
        options: ["0.14 V", "7 V", "700 V", "2400 V"],
        correct: 1,
        ask: "The e.m.f. is the work done per coulomb, so divide the energy by the charge: 2100 divided by 300.",
        hints: [
          "Use E equals W divided by Q.",
          "2100 divided by 300 is 7.",
        ],
        working: [
          { label: "Formula", latex: "E = \\dfrac{W}{Q}" },
          { label: "Substitute", latex: "E = \\dfrac{2100}{300}" },
          { label: "Answer", latex: "E = 7\\ \\text{V}" },
        ],
        explain: "The e.m.f. is 7 volts, because 2100 joules divided by 300 coulombs is 7 joules per coulomb, which is 7 volts.",
      },
      // 5 of 10 choice (calc: R = V / I) ------------------------------------
      {
        kind: "choice",
        question: "A component has a potential difference of 12 V across it and a current of 0.5 A through it. Find its resistance.",
        options: ["6 ohms", "0.04 ohms", "24 ohms", "12.5 ohms"],
        correct: 2,
        ask: "Resistance is the p.d. divided by the current, so work out 12 divided by 0.5.",
        hints: [
          "Use R equals V divided by I.",
          "12 divided by 0.5 is 24.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{12}{0.5}" },
          { label: "Answer", latex: "R = 24\\ \\Omega" },
        ],
        explain: "The resistance is 24 ohms, because 12 volts divided by 0.5 amperes is 24 ohms.",
      },
      // 6 of 10 choice (concept: temperature and resistance) ----------------
      {
        kind: "choice",
        question: "A metal wire is heated while the potential difference across it is kept fixed. What happens?",
        options: [
          "Its resistance rises, so the current through it falls",
          "Its resistance falls, so the current through it rises",
          "Its resistance and the current both stay the same",
          "The current stays the same but the p.d. rises",
        ],
        correct: 0,
        ask: "Heating makes the metal ions vibrate more and collide with the electrons more often. What does that do to the resistance, and then to the current at fixed p.d.?",
        hints: [
          "More vibration of the ions means more collisions, which raises the resistance.",
          "At a fixed p.d., a larger resistance gives a smaller current, since I equals V divided by R.",
        ],
        explain: "Its resistance rises, so the current falls. Heating makes the ions vibrate more, so the electrons collide with them more often, and at a fixed p.d. a larger resistance means a smaller current.",
      },
      // 7 of 10 choice (calc: series 3+5+2) ---------------------------------
      {
        kind: "choice",
        question: "Resistors of 3 ohms, 5 ohms and 2 ohms are joined in series. Find the effective resistance.",
        options: ["2 ohms", "10 ohms", "0.97 ohms", "30 ohms"],
        correct: 1,
        ask: "Resistors in series simply add up, so work out 3 plus 5 plus 2.",
        hints: [
          "Use R_E equals R_1 plus R_2 plus R_3 for series resistors.",
          "3 plus 5 plus 2 is 10.",
        ],
        working: [
          { label: "Formula", latex: "R_E = R_1 + R_2 + R_3" },
          { label: "Substitute", latex: "R_E = 3 + 5 + 2" },
          { label: "Answer", latex: "R_E = 10\\ \\Omega" },
        ],
        explain: "The effective resistance is 10 ohms, because series resistors add up and 3 plus 5 plus 2 is 10 ohms. The total is always larger than any single resistor.",
      },
      // 8 of 10 choice (concept: parallel is smaller) -----------------------
      {
        kind: "choice",
        question: "Several resistors are connected in parallel. How does the effective resistance compare with the individual resistors?",
        options: [
          "It equals the sum of all the resistors",
          "It equals the largest of the resistors",
          "It lies between the smallest and the largest resistor",
          "It is smaller than the smallest of the resistors",
        ],
        correct: 3,
        ask: "Adding a parallel path gives the current more routes to flow through. Does that make it easier or harder for current to pass, and so is the combined resistance more or less than any one resistor?",
        hints: [
          "Parallel resistors combine by reciprocals: 1 over R_E equals the sum of 1 over each resistor.",
          "The result always comes out below the smallest single resistor.",
        ],
        explain: "The effective resistance of a parallel combination is smaller than the smallest single resistor. Each extra parallel path gives the current another route, so the charge flows more easily overall.",
      },
      // 9 of 10 choice (calc: iron wire, length doubled) --------------------
      {
        kind: "choice",
        question: "An iron wire has a resistance of 6 ohms. Its length is doubled while the cross-sectional area and the material stay the same. Find the new resistance.",
        options: ["6 ohms", "3 ohms", "12 ohms", "36 ohms"],
        correct: 2,
        ask: "Resistance is proportional to the length of the wire. If the length doubles, what happens to the 6 ohms?",
        hints: [
          "R equals rho times l divided by A, so R is proportional to the length l.",
          "Doubling the length doubles the resistance: 2 times 6 is 12.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{\\rho l}{A}" },
          { label: "Substitute", latex: "R_{new} = 2 \\times 6" },
          { label: "Answer", latex: "R_{new} = 12\\ \\Omega" },
        ],
        explain: "The new resistance is 12 ohms. Resistance is proportional to length, so doubling the length doubles the resistance from 6 ohms to 12 ohms.",
      },
      // 10 of 10 choice (concept: Ohm's law) --------------------------------
      {
        kind: "choice",
        question: "Which statement describes an ohmic conductor kept at a constant temperature?",
        options: [
          "The current through it is proportional to the p.d. across it",
          "Its resistance rises as the current through it rises",
          "It conducts in one direction only",
          "Its I-V graph is a curve through the origin",
        ],
        correct: 0,
        ask: "For an ohmic conductor the ratio of p.d. to current stays fixed. What does that mean about how the current changes when you change the p.d.?",
        hints: [
          "If V divided by I is constant, then I rises in step with V.",
          "That gives a straight-line I-V graph through the origin, which is Ohm's law.",
        ],
        explain: "For an ohmic conductor at constant temperature, the current is proportional to the p.d., so V divided by I is constant. Its I-V graph is a straight line through the origin, which is Ohm's law.",
      },

      // ===================== INTERACTIVE (10) ==============================
      // 1 of 10 interactive: slider (calc I = Q / t) ------------------------
      {
        kind: "slider",
        prompt: "A charge of 960 C flows past a point in a wire in 16 s. Set the slider to the current, in amperes.",
        min: 0,
        max: 100,
        step: 1,
        unit: "A",
        start: 0,
        targetMin: 59,
        targetMax: 61,
        ask: "Current is charge divided by time, so work out 960 divided by 16.",
        hints: [
          "Rearrange Q equals I times t into I equals Q divided by t.",
          "960 divided by 16 is 60, so slide to 60 amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{Q}{t}" },
          { label: "Substitute", latex: "I = \\dfrac{960}{16}" },
          { label: "Answer", latex: "I = 60\\ \\text{A}" },
        ],
        explain: "The current is 60 amperes, because 960 coulombs divided by 16 seconds is 60 coulombs per second, which is 60 amperes.",
      },
      // 2 of 10 interactive: slider (calc parallel 3,6,6) -------------------
      {
        kind: "slider",
        prompt: "Resistors of 3 ohms, 6 ohms and 6 ohms are joined in parallel. Set the slider to the effective resistance, in ohms.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "ohms",
        start: 0,
        targetMin: 1.4,
        targetMax: 1.6,
        ask: "Add the reciprocals: 1 over 3 plus 1 over 6 plus 1 over 6. Then turn that reciprocal back into a resistance.",
        hints: [
          "1 over 3 is 2 over 6, so the total is 2 over 6 plus 1 over 6 plus 1 over 6, which is 4 over 6.",
          "1 over R_E is 4 over 6, so R_E is 6 over 4, which is 1.5 ohms.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{R_E} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dfrac{1}{R_3}" },
          { label: "Substitute", latex: "\\dfrac{1}{R_E} = \\dfrac{1}{3} + \\dfrac{1}{6} + \\dfrac{1}{6} = \\dfrac{4}{6}" },
          { label: "Answer", latex: "R_E = 1.5\\ \\Omega" },
        ],
        explain: "The effective resistance is 1.5 ohms. The reciprocals add to 4 over 6, so R_E is 6 over 4, which is 1.5 ohms, smaller than any single resistor.",
      },
      // 3 of 10 interactive: slider (calc 2+6 across 8 V) -------------------
      {
        kind: "slider",
        prompt: "A 2 ohm and a 6 ohm resistor are joined in series across an 8.0 V supply. Set the slider to the current in the circuit, in amperes.",
        min: 0,
        max: 5,
        step: 0.1,
        unit: "A",
        start: 0,
        targetMin: 0.9,
        targetMax: 1.1,
        ask: "First add the series resistors to get the total resistance, then divide the 8 volts by it.",
        hints: [
          "The total resistance is 2 plus 6, which is 8 ohms.",
          "I equals V divided by R, so 8 divided by 8 is 1 ampere.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V}{R_E}" },
          { label: "Substitute", latex: "I = \\dfrac{8}{2 + 6}" },
          { label: "Answer", latex: "I = 1\\ \\text{A}" },
        ],
        explain: "The current is 1 ampere. The series resistors give a total of 8 ohms, and 8 volts divided by 8 ohms is 1 ampere.",
      },
      // 4 of 10 interactive: graphpick (I-V shapes) -------------------------
      {
        kind: "graphpick",
        prompt: "Which I-V graph shows an ohmic conductor kept at a constant temperature?",
        xLabel: "p.d. V / V",
        yLabel: "current I / A",
        options: [
          { points: [[0, 0], [1, 1.4], [2, 2.2], [3, 2.7], [4, 3.0]], caption: "Rises, then bends over and flattens" },
          { points: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]], caption: "Straight line through the origin" },
          { points: [[0, 0], [1, 0], [2, 0.1], [3, 1.5], [4, 3.5]], caption: "Almost flat, then rises sharply one way" },
          { points: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]], caption: "Constant, a horizontal line" },
        ],
        correct: 1,
        ask: "An ohmic conductor has current proportional to p.d., so the graph should be a straight line that passes through the origin. Which one is that?",
        hints: [
          "A curve that bends over is a filament lamp; a line that only rises one way is a diode.",
          "Proportional means a straight line through the origin, so pick that graph.",
        ],
        explain: "The straight line through the origin is the ohmic conductor. Its current is proportional to the p.d., so V divided by I stays constant. The bending curve is a filament lamp and the one-way graph is a diode.",
      },
      // 5 of 10 interactive: order (combine mixed circuit) ------------------
      {
        kind: "order",
        prompt: "A mixed circuit has a 4 ohm resistor in series with a parallel pair of 6 ohm and 3 ohm resistors. Put the steps to find the total resistance in the correct order.",
        items: [
          "Pick out the 6 ohm and 3 ohm resistors that are in parallel",
          "Combine that parallel pair into a single resistance using the reciprocal rule",
          "Add the combined value to the 4 ohm series resistor",
          "State the total effective resistance of the whole circuit",
        ],
        ask: "Always deal with the parallel part on its own first, then bring in the series resistor. Which step must come before you can add anything on?",
        hints: [
          "You cannot add the series resistor until the parallel pair has been reduced to one value.",
          "So combine the parallel pair first, then add the 4 ohm resistor, then state the total.",
        ],
        explain: "For a mixed circuit you reduce the parallel part first, turning the 6 ohm and 3 ohm pair into a single resistance, then add the 4 ohm series resistor, and finally state the total.",
      },
      // 6 of 10 interactive: classify (I-V behaviour) -----------------------
      {
        kind: "classify",
        prompt: "Sort each description by the component whose I-V behaviour it fits.",
        bins: ["Ohmic conductor", "Filament lamp", "Diode"],
        items: [
          { text: "a straight line through the origin on its I-V graph", bin: 0 },
          { text: "V/I stays constant at a fixed temperature", bin: 0 },
          { text: "an I-V curve that bends over as it heats up", bin: 1 },
          { text: "its resistance rises as the current grows", bin: 1 },
          { text: "conducts in one direction only", bin: 2 },
          { text: "very high resistance in the reverse direction", bin: 2 },
        ],
        ask: "An ohmic conductor keeps a constant resistance, a filament lamp heats up and gains resistance, and a diode lets current pass one way only. Tap each description and drop it in the right bin.",
        hints: [
          "A constant ratio of p.d. to current, a straight line through the origin, is the ohmic conductor.",
          "A curve that bends as it heats is the filament lamp; a one-way behaviour is the diode.",
        ],
        explain: "The straight line and the constant V over I are the ohmic conductor. The curve that bends over and the rising resistance are the filament lamp. Conducting one way only and a high reverse resistance are the diode.",
      },
      // 7 of 10 interactive: cloze (current definition) ---------------------
      {
        kind: "cloze",
        prompt: "Complete the sentence about electric current.",
        segments: [
          "An electric current is the rate of flow of electric ",
          ". It is measured in ",
          ", where one ampere is one coulomb per ",
          ".",
        ],
        bank: ["charge", "amperes", "second", "voltage", "minute"],
        answer: ["charge", "amperes", "second"],
        ask: "Think about what current is the flow of, the unit it is measured in, and how an ampere is defined in terms of a coulomb.",
        hints: [
          "Current is the rate of flow of electric charge, measured in amperes.",
          "One ampere is one coulomb per second.",
        ],
        explain: "An electric current is the rate of flow of electric charge. It is measured in amperes, where one ampere is one coulomb per second.",
      },
      // 8 of 10 interactive: match (terms to definitions) -------------------
      {
        kind: "match",
        prompt: "Match each electrical term to the statement that defines it.",
        pairs: [
          { left: "Electric current", right: "the rate of flow of electric charge, measured in amperes" },
          { left: "e.m.f.", right: "the energy the source gives each coulomb around the whole circuit" },
          { left: "Potential difference", right: "the energy transferred to a component per unit charge" },
          { left: "Resistance", right: "the ratio of p.d. to current, measured in ohms" },
        ],
        ask: "One term is about flow of charge, 2 are about energy per coulomb (one for the source, one for a component), and one is a ratio of p.d. to current. Match each to its statement.",
        hints: [
          "e.m.f. belongs to the source and covers the whole circuit; p.d. is the energy given to one component per coulomb.",
          "Resistance is p.d. divided by current, and current is the rate of flow of charge.",
        ],
        explain: "Electric current is the rate of flow of charge in amperes. The e.m.f. is the energy the source gives each coulomb around the whole circuit. The p.d. is the energy transferred to a component per unit charge. Resistance is the ratio of p.d. to current, in ohms.",
      },
      // 9 of 10 interactive: spoterror (parallel added like series) ---------
      {
        kind: "spoterror",
        prompt: "A student combines 2 6 ohm resistors that are in parallel. Tap the line with the mistake.",
        lines: [
          "R_E = R_1 + R_2 for resistors in parallel",
          "R_E = 6 + 6",
          "R_E = 12\\ \\Omega",
        ],
        errorLine: 0,
        ask: "Check the very first line: is adding the resistors the rule for series or for parallel? Parallel resistors do not simply add.",
        hints: [
          "Parallel resistors combine by reciprocals: 1 over R_E equals 1 over R_1 plus 1 over R_2.",
          "The first line uses the series rule by mistake; 2 6 ohm resistors in parallel actually give 3 ohms, not 12.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{R_E} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}" },
          { label: "Substitute", latex: "\\dfrac{1}{R_E} = \\dfrac{1}{6} + \\dfrac{1}{6} = \\dfrac{2}{6}" },
          { label: "Answer", latex: "R_E = 3\\ \\Omega" },
        ],
        explain: "The mistake is on the first line, which adds the resistors as if they were in series. Parallel resistors combine by reciprocals, so 2 6 ohm resistors give 3 ohms, not 12 ohms.",
      },
      // 10 of 10 interactive: tiles (calc W = E Q) --------------------------
      {
        kind: "tiles",
        prompt: "A source of e.m.f. 6.0 V drives 40 C of charge around a circuit. Build the working line for the energy W it transfers.",
        tiles: ["W =", "6", "\\times", "40", "=", "240", "J", "C"],
        answer: ["W =", "6", "\\times", "40", "=", "240", "J"],
        ask: "The energy is the e.m.f. times the charge, so set up 6 times 40.",
        hints: [
          "Rearrange E equals W divided by Q into W equals E times Q.",
          "6 times 40 is 240, and energy is measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "W = EQ" },
          { label: "Substitute", latex: "W = 6 \\times 40" },
          { label: "Answer", latex: "W = 240\\ \\text{J}" },
        ],
        explain: "The energy transferred is 240 joules, because 6 volts times 40 coulombs is 240 joules.",
      },

      // ========================= OPEN (5) ==================================
      // 1 of 5 open (current, Q = I t) --------------------------------------
      {
        kind: "open",
        prompt: "Define electric current and state the equation that links charge, current and time.",
        modelAnswer: "Electric current is the rate of flow of electric charge. It is measured in amperes, where one ampere is one coulomb per second. The charge that flows is given by Q = I t, where Q is the charge in coulombs, I is the current in amperes, and t is the time in seconds.",
        marks: [
          "Current is the rate of flow of electric charge.",
          "It is measured in amperes (one ampere is one coulomb per second).",
          "Q = I t stated, with the quantities named.",
        ],
        ask: "Say what current measures the flow of, the unit it is measured in, and how charge, current and time are related.",
      },
      // 2 of 5 open (emf vs pd) ---------------------------------------------
      {
        kind: "open",
        prompt: "Explain the difference between the e.m.f. of a source and the potential difference across a component.",
        modelAnswer: "The e.m.f. of a source is the work done in driving each unit charge around the whole circuit, so it is the energy given to every coulomb by the source. It is a property of the source and is present even when no current flows. The potential difference across a component is the energy transferred to that component per unit charge as charge passes through it. Both are measured in volts, where one volt is one joule per coulomb.",
        marks: [
          "e.m.f. is the energy given to each coulomb by the source around the whole circuit.",
          "p.d. is the energy transferred to a component per unit charge.",
          "Both are measured in volts (one joule per coulomb).",
        ],
        ask: "For each quantity, say where the energy is transferred and whether it is a property of the source or of a component.",
      },
      // 3 of 5 open (temperature and resistance) ----------------------------
      {
        kind: "open",
        prompt: "Explain, in terms of the particles in a metal, why its resistance increases when it gets hotter.",
        modelAnswer: "In a metal the current is carried by free electrons that drift through a lattice of positive ions. As the metal gets hotter, the ions vibrate more strongly, so the moving electrons collide with them more often. These extra collisions oppose the flow of charge more, so the resistance increases. At a fixed p.d. the larger resistance gives a smaller current.",
        marks: [
          "Current is carried by free electrons moving past the metal ions.",
          "A higher temperature makes the ions vibrate more, causing more collisions.",
          "More collisions mean greater resistance (and a smaller current at fixed p.d.).",
        ],
        ask: "Think about the free electrons, the vibrating ions, and how heating changes how often they collide.",
      },
      // 4 of 5 open (filament lamp curve) -----------------------------------
      {
        kind: "open",
        prompt: "The I-V graph of a filament lamp is a curve rather than a straight line. Explain why.",
        figure: "fig-16-13-iv-filament",
        modelAnswer: "As the current through the filament increases, the filament heats up. The hotter filament has a greater resistance, because its ions vibrate more and cause more collisions. So the ratio of p.d. to current is not constant: each extra volt produces less extra current. This makes the I-V graph bend over into a curve instead of a straight line, so the lamp does not obey Ohm's law.",
        marks: [
          "A larger current heats up the filament.",
          "The hotter filament has a greater resistance.",
          "Because the resistance is not constant, the graph curves and the lamp is non-ohmic.",
        ],
        ask: "Link the rising current to the filament's temperature, then to its resistance, and then to the shape of the graph.",
      },
      // 5 of 5 open (length and area of a wire) -----------------------------
      {
        kind: "open",
        prompt: "Describe how the resistance of a metal wire depends on its length and on its cross-sectional area.",
        modelAnswer: "The resistance of a wire increases with its length, because a longer wire gives the electrons more collisions with the ions, so doubling the length doubles the resistance. The resistance decreases with a larger cross-sectional area, because a wider wire gives the charge more room to flow, so doubling the area halves the resistance. These are summed up by R = rho l / A, where rho is the resistivity of the material.",
        marks: [
          "Resistance increases with length (a longer wire has more resistance).",
          "Resistance decreases with cross-sectional area (a wider wire has less resistance).",
          "R = rho l / A, or R proportional to l and to 1 over A.",
        ],
        ask: "State what happens to the resistance as the wire is made longer, and what happens as it is made thicker.",
      },
    ],
  },
];
