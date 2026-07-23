import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism, topical quiz. Whole-topic check across the Practical
// Chapter 6 material: resistance and resistivity, Ohm's law, series and parallel circuits,
// I-V characteristics, the potential divider, electrical power and energy, measuring
// resistance experiments, and the magnetic effect of a current with induction.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.quiz",
    code: "Quiz",
    title: "Electricity and magnetism topical quiz",
    blurb: "Whole-topic check: resistance, Ohm's law, circuits, I-V graphs, power, magnetism",
    kind: "quiz",
    steps: [
      // 1 - choice, correct 2 (Ohm's law R = V/I calc)
      {
        kind: "choice",
        question: "A filament lamp carries a current of 0.50 A when the voltage across it is 12 V. Find its resistance R.",
        options: ["6.0 ohms", "0.042 ohms", "24 ohms", "2.4 ohms"],
        correct: 2,
        ask: "Resistance is voltage divided by current, so work out 12 ÷ 0.50. Which option matches?",
        hints: [
          "Use R equals V divided by I.",
          "12 ÷ 0.50 is 24, measured in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{12}{0.50}" },
          { label: "Answer", latex: "R = 24\\ \\text{ohms}" },
        ],
        explain: "The resistance is 24 ohms, because 12 volts divided by 0.50 amperes is 24 ohms.",
      },
      // 2 - choice, correct 0 (resistivity: longer wire has more resistance)
      {
        kind: "choice",
        question: "4 wires are made of the same material. Which one has the largest resistance?",
        options: [
          "a long, thin wire",
          "a short, thin wire",
          "a long, thick wire",
          "a short, thick wire",
        ],
        correct: 0,
        ask: "Resistance grows with length and falls as the cross-sectional area gets bigger. Which wire is both long and thin?",
        hints: [
          "A longer wire has more resistance; a thicker wire has less.",
          "The largest resistance comes from the longest and thinnest wire.",
        ],
        explain: "The long, thin wire has the largest resistance, because R equals rho times L divided by A. A longer length raises the resistance and a smaller cross-sectional area raises it further.",
      },
      // 3 - choice, correct 3 (ohmic conductor: straight line through origin)
      {
        kind: "choice",
        question: "Which component gives a straight line through the origin on an I-V graph?",
        options: [
          "a filament lamp",
          "a semiconductor diode",
          "a light-emitting diode",
          "a metal wire at constant temperature",
        ],
        correct: 3,
        ask: "A straight line through the origin means the resistance stays constant, which is what an ohmic conductor does. Which of these keeps a fixed resistance?",
        hints: [
          "The filament lamp and the diodes all curve, so they are non-ohmic.",
          "A metal wire kept at constant temperature obeys Ohm's law and gives a straight line through the origin.",
        ],
        explain: "A metal wire at constant temperature is ohmic, so it gives a straight line through the origin with gradient 1 divided by R. The filament lamp and the 2 diodes are all non-ohmic and give curves.",
      },
      // 4 - choice, correct 1 (potential divider V_out = 3.0 V)
      {
        kind: "choice",
        question: "In a potential divider, R_1 = 4.0 ohms and R_2 = 6.0 ohms are in series across a 5.0 V supply, with the output taken across R_2. Find V_out.",
        figure: "fig-pr6-06-potential-divider",
        options: ["5.0 V", "3.0 V", "2.0 V", "0.6 V"],
        correct: 1,
        ask: "The output is the supply voltage times R_2 divided by the total resistance, so work out 6.0 ÷ 10.0, then times 5.0.",
        hints: [
          "Use V_out equals R_2 divided by the sum of R_1 and R_2, all times V.",
          "6.0 ÷ 10.0 is 0.6, and 0.6 × 5.0 is 3.0 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2}\\,V" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{6.0}{4.0 + 6.0}\\times 5.0" },
          { label: "Answer", latex: "V_{out} = 3.0\\ \\text{V}" },
        ],
        explain: "The output is 3.0 volts, because 6.0 ÷ 10.0 is 0.6, and 0.6 × 5.0 volts is 3.0 volts.",
      },
      // 5 - choice, correct 2 (power P = IV = 6.0 W)
      {
        kind: "choice",
        question: "A lamp carries a current of 0.50 A at a voltage of 12 V. Find the power it transfers.",
        options: ["24 W", "0.042 W", "6.0 W", "12 W"],
        correct: 2,
        ask: "Power is current times voltage, so work out 0.50 × 12. Which option matches?",
        hints: [
          "Use P equals I times V.",
          "0.50 × 12 is 6.0, measured in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = IV" },
          { label: "Substitute", latex: "P = 0.50 \\times 12" },
          { label: "Answer", latex: "P = 6.0\\ \\text{W}" },
        ],
        explain: "The power is 6.0 watts, because 0.50 amperes times 12 volts is 6.0 watts.",
      },
      // 6 - choice, correct 0 (series total resistance 150 ohms)
      {
        kind: "choice",
        question: "3 resistors of 25 ohms, 50 ohms and 75 ohms are connected in series. Find the total resistance.",
        figure: "fig-pr6-05-series-parallel",
        options: ["150 ohms", "13.6 ohms", "50 ohms", "16.7 ohms"],
        correct: 0,
        ask: "Resistors in series simply add up, so work out 25 + 50 + 75.",
        hints: [
          "For a series circuit the total resistance is the sum of the separate resistances.",
          "25 + 50 + 75 is 150 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = R_1 + R_2 + R_3" },
          { label: "Substitute", latex: "R = 25 + 50 + 75" },
          { label: "Answer", latex: "R = 150\\ \\text{ohms}" },
        ],
        explain: "The total is 150 ohms, because resistors in series add: 25 + 50 + 75 is 150 ohms.",
      },
      // 7 - choice, correct 3 (field out of page -> anticlockwise)
      {
        kind: "choice",
        question: "A straight wire carries a current directly out of the page toward you. What is the pattern of its magnetic field?",
        figure: "fig-pr6-07-straight-wire-field",
        options: [
          "clockwise circles round the wire",
          "straight lines running along the wire",
          "no magnetic field at all",
          "anticlockwise circles round the wire",
        ],
        correct: 3,
        ask: "Use the right-hand grip rule with the thumb pointing out of the page toward you. Which way do the fingers curl?",
        hints: [
          "The field forms circles round the wire, not straight lines.",
          "With the current out of the page the field circles run anticlockwise.",
        ],
        explain: "The field is anticlockwise circles round the wire. By the right-hand grip rule, a current out of the page gives an anticlockwise field, while a current into the page would give a clockwise one.",
      },
      // 8 - choice, correct 1 (Fleming left-hand rule = motor force)
      {
        kind: "choice",
        question: "Which rule gives the direction of the force on a current-carrying wire placed in a magnetic field (the motor effect)?",
        options: [
          "Fleming's right-hand rule",
          "Fleming's left-hand rule",
          "the right-hand grip rule",
          "Lenz's law",
        ],
        correct: 1,
        ask: "The motor effect uses the hand where the thumb is the force, the first finger the field and the second finger the current. Which hand is that?",
        hints: [
          "The right-hand rule is for the induced current in a generator, not the motor force.",
          "Fleming's left-hand rule gives the force: thumb for motion, first finger for field, second finger for current.",
        ],
        explain: "Fleming's left-hand rule gives the motor force. The thumb points along the force, the first finger along the field, and the second finger along the current. The right-hand rule is used instead for the induced current in a generator.",
      },
      // 9 - choice, correct 0 (P = I^2 R = 20 W)
      {
        kind: "choice",
        question: "A current of 2.0 A flows through a 5.0 ohm resistor. Find the power dissipated using P = I^2 R.",
        options: ["20 W", "10 W", "40 W", "2.0 W"],
        correct: 0,
        ask: "Square the current first, then multiply by the resistance: work out 2.0^2, then times 5.0.",
        hints: [
          "Use P equals I^2 times R.",
          "2.0^2 is 4.0, and 4.0 × 5.0 is 20 watts.",
        ],
        working: [
          { label: "Formula", latex: "P = I^2 R" },
          { label: "Substitute", latex: "P = 2.0^2 \\times 5.0" },
          { label: "Answer", latex: "P = 20\\ \\text{W}" },
        ],
        explain: "The power is 20 watts, because 2.0^2 is 4.0, and 4.0 × 5.0 ohms is 20 watts.",
      },
      // 10 - choice, correct 2 (diode current I = V_x / R = 1.00 A)
      {
        kind: "choice",
        question: "A diode is in series with a 22.0 ohm resistor X. The voltmeter reads 22.0 V across X. Find the current in the circuit.",
        options: ["0.60 A", "22 A", "1.00 A", "0.50 A"],
        correct: 2,
        ask: "The current through the resistor is the same as through the diode, so use I equals V_x divided by R: 22.0 ÷ 22.0.",
        hints: [
          "In series the current is the same everywhere, so find it from the resistor.",
          "22.0 ÷ 22.0 is 1.00 ampere.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V_x}{R}" },
          { label: "Substitute", latex: "I = \\dfrac{22.0}{22.0}" },
          { label: "Answer", latex: "I = 1.00\\ \\text{A}" },
        ],
        explain: "The current is 1.00 ampere, because 22.0 volts across the 22.0 ohm resistor gives 22.0 ÷ 22.0, which is 1.00 ampere, and that same current flows through the diode in series.",
      },
      // INTERACTIVE 1 - classify (ohmic vs non-ohmic)
      {
        kind: "classify",
        prompt: "Sort each component by whether it is ohmic or non-ohmic.",
        bins: ["Ohmic (straight line through origin)", "Non-ohmic (curved I-V)"],
        items: [
          { text: "a metal wire at constant temperature", bin: 0 },
          { text: "a fixed resistor at constant temperature", bin: 0 },
          { text: "a filament lamp", bin: 1 },
          { text: "a semiconductor diode", bin: 1 },
          { text: "a light-emitting diode", bin: 1 },
        ],
        ask: "An ohmic component keeps a constant resistance and gives a straight line through the origin. Tap each component and drop it in its bin.",
        hints: [
          "A metal wire and a fixed resistor at constant temperature both obey Ohm's law.",
          "A filament lamp heats up and the diodes block one direction, so all 3 are non-ohmic.",
        ],
        explain: "A metal wire and a fixed resistor at constant temperature are ohmic and give a straight line through the origin. A filament lamp, a diode and an LED are all non-ohmic, giving curved I-V graphs.",
      },
      // INTERACTIVE 2 - match (quantity to unit)
      {
        kind: "match",
        prompt: "Match each electrical quantity to its unit.",
        pairs: [
          { left: "resistance", right: "ohms" },
          { left: "potential difference", right: "volts" },
          { left: "current", right: "amperes" },
          { left: "power", right: "watts" },
          { left: "energy", right: "joules" },
        ],
        ask: "Match each quantity to the unit it is measured in. Think of the symbol you would write after the number.",
        hints: [
          "Resistance is in ohms and current is in amperes.",
          "Power is the rate of energy transfer, measured in watts, while energy is measured in joules.",
        ],
        explain: "Resistance is measured in ohms, potential difference in volts, current in amperes, power in watts, and energy in joules.",
      },
      // INTERACTIVE 3 - order (steps to measure resistance)
      {
        kind: "order",
        prompt: "Put these steps for measuring the resistance of a component in the correct order.",
        items: [
          "Connect the ammeter in series and the voltmeter across the component",
          "Close the switch to pass a current",
          "Read the voltmeter value V and the ammeter value I",
          "Open the switch again so the component does not heat up",
          "Calculate the resistance from R = V/I",
        ],
        ask: "Start by wiring the meters correctly and finish with the calculation. Put the steps in order.",
        hints: [
          "The ammeter goes in series and the voltmeter goes across the component before you close the switch.",
          "Open the switch between readings so heating does not drift the resistance, then work out R = V/I.",
        ],
        explain: "First wire the ammeter in series and the voltmeter across the component. Close the switch, read V and I, then open the switch so the component does not heat up, and finally calculate R = V/I.",
      },
      // INTERACTIVE 4 - slider (E = VIt = 720 J)
      {
        kind: "slider",
        prompt: "A lamp carries 0.50 A at 12 V for 2.0 minutes (120 s). Set the slider to the energy transferred E, in joules.",
        min: 0,
        max: 1000,
        step: 10,
        unit: "J",
        start: 0,
        targetMin: 715,
        targetMax: 725,
        ask: "Energy is voltage times current times time. Turn 2.0 minutes into 120 seconds, then work out 12 × 0.50 × 120.",
        hints: [
          "Use E equals V times I times t, with t equal to 120 seconds.",
          "12 × 0.50 is 6.0, and 6.0 × 120 is 720 joules.",
        ],
        working: [
          { label: "Formula", latex: "E = VIt" },
          { label: "Substitute", latex: "E = 12 \\times 0.50 \\times 120" },
          { label: "Answer", latex: "E = 720\\ \\text{J}" },
        ],
        explain: "The energy is 720 joules, because 12 volts times 0.50 amperes is 6.0 watts, and 6.0 watts times 120 seconds is 720 joules.",
      },
      // INTERACTIVE 5 - cloze (series vs parallel)
      {
        kind: "cloze",
        prompt: "Complete the sentences about series and parallel circuits.",
        segments: [
          "In a ",
          " circuit the current is the same everywhere and the separate voltages ",
          " up. In a parallel circuit the ",
          " is the same across every branch.",
        ],
        bank: ["series", "add", "voltage", "parallel", "current"],
        answer: ["series", "add", "voltage"],
        ask: "In one arrangement the current is shared and the voltage is the same; in the other the current is the same and the voltages add. Fill each blank from the bank.",
        hints: [
          "In a series circuit the current is the same everywhere, so the voltages must add up.",
          "In a parallel circuit each branch has the same voltage across it.",
        ],
        explain: "In a series circuit the current is the same everywhere and the separate voltages add up. In a parallel circuit the voltage is the same across every branch.",
      },
      // INTERACTIVE 6 - spoterror (filament lamp is ohmic -> wrong)
      {
        kind: "spoterror",
        prompt: "Here are 4 statements about I-V characteristics. Tap the line with the mistake.",
        lines: [
          "a metal wire at constant temperature is an ohmic conductor",
          "an ohmic conductor gives a straight line through the origin",
          "a filament lamp is an ohmic conductor",
          "a semiconductor diode is non-ohmic",
        ],
        errorLine: 2,
        ask: "An ohmic conductor keeps a constant resistance and a straight-line I-V graph. Which component actually changes its resistance as it heats up?",
        hints: [
          "A metal wire at constant temperature and a straight line through the origin are both correct ohmic descriptions.",
          "A filament lamp heats up and its resistance rises, so it is non-ohmic, not ohmic.",
        ],
        explain: "The mistake is the line that calls a filament lamp an ohmic conductor. A filament lamp heats up as the current rises, so its resistance increases and its I-V graph curves. It is non-ohmic.",
      },
      // INTERACTIVE 7 - graphpick (ohmic straight line)
      {
        kind: "graphpick",
        prompt: "Which I-V graph shows an ohmic conductor at constant temperature?",
        xLabel: "V / V",
        yLabel: "I / A",
        options: [
          { points: [[0, 0], [1, 0.17], [2, 0.33], [3, 0.50], [4, 0.67]], caption: "A straight line through the origin" },
          { points: [[0, 0], [1, 0.30], [2, 0.45], [3, 0.53], [4, 0.58]], caption: "A curve that flattens as V rises" },
          { points: [[0, 0], [1, 0], [2, 0.02], [3, 0.30], [4, 1.00]], caption: "Almost flat, then a steep rise" },
          { points: [[0, 0.60], [1, 0.45], [2, 0.30], [3, 0.15], [4, 0]], caption: "A line falling to zero" },
        ],
        correct: 0,
        ask: "An ohmic conductor has a constant resistance, so the current is proportional to the voltage. Which graph is a straight line through the origin?",
        hints: [
          "The flattening curve is a filament lamp and the almost-flat-then-steep curve is a diode.",
          "The ohmic conductor gives a straight line through the origin, with gradient equal to 1 divided by R.",
        ],
        explain: "The correct graph is the straight line through the origin. For an ohmic conductor the current is proportional to the voltage, so the resistance stays constant and the gradient equals 1 divided by R.",
      },
      // INTERACTIVE 8 - tiles (R = V/I = 6.12 ohms)
      {
        kind: "tiles",
        prompt: "A lamp reads 9.30 V and 1.52 A. Build the working line for its resistance R, using R = V/I.",
        tiles: ["R =", "9.30", "\\div", "1.52", "=", "6.12", "ohms", "A"],
        answer: ["R =", "9.30", "\\div", "1.52", "=", "6.12", "ohms"],
        ask: "Resistance is voltage divided by current, so set up 9.30 ÷ 1.52.",
        hints: [
          "Use R equals V divided by I.",
          "9.30 ÷ 1.52 is 6.12, measured in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{9.30}{1.52}" },
          { label: "Answer", latex: "R = 6.12\\ \\text{ohms}" },
        ],
        explain: "The resistance is 6.12 ohms, because 9.30 volts divided by 1.52 amperes is 6.12 ohms.",
      },
      // INTERACTIVE 9 - slider (R from gradient = 1/0.050 = 20 ohms)
      {
        kind: "slider",
        prompt: "Component X gives a straight I-V line with gradient 0.050 A V^-1. Set the slider to its resistance R, in ohms.",
        min: 0,
        max: 50,
        step: 1,
        unit: "ohms",
        start: 0,
        targetMin: 19,
        targetMax: 21,
        ask: "For an ohmic component the gradient of the I-V line equals 1 divided by R, so R is 1 divided by the gradient: work out 1 ÷ 0.050.",
        hints: [
          "The gradient is 1 divided by R, so R equals 1 divided by the gradient.",
          "1 ÷ 0.050 is 20 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{1}{\\text{gradient}}" },
          { label: "Substitute", latex: "R = \\dfrac{1}{0.050}" },
          { label: "Answer", latex: "R = 20\\ \\text{ohms}" },
        ],
        explain: "The resistance is 20 ohms, because the gradient of the I-V line is 1 divided by R, and 1 ÷ 0.050 is 20 ohms.",
      },
      // INTERACTIVE 10 - classify (Faraday vs Lenz)
      {
        kind: "classify",
        prompt: "Sort each statement about electromagnetic induction under the correct law.",
        bins: ["Faraday's law", "Lenz's law"],
        items: [
          { text: "the induced e.m.f. is proportional to the rate of change of flux", bin: 0 },
          { text: "a faster change of magnetic flux gives a bigger induced e.m.f.", bin: 0 },
          { text: "the induced current opposes the change that produces it", bin: 1 },
          { text: "the induced current acts to keep the flux from changing", bin: 1 },
        ],
        ask: "One law is about the size of the induced voltage; the other is about the direction the induced current takes. Tap each statement and drop it in its bin.",
        hints: [
          "Faraday's law links the size of the e.m.f. to how fast the flux changes.",
          "Lenz's law is about direction: the induced current always opposes the change causing it.",
        ],
        explain: "Faraday's law says the induced e.m.f. is proportional to the rate of change of flux, so a faster change gives a bigger e.m.f. Lenz's law fixes the direction: the induced current opposes the change that produces it.",
      },
      // OPEN 1 - Ohm's law and ohmic conductors
      {
        kind: "open",
        prompt: "State Ohm's law and explain what makes a conductor ohmic.",
        modelAnswer: "Ohm's law states that for an ohmic conductor at constant temperature the current is directly proportional to the voltage across it, so V = IR with R constant. A conductor is ohmic when its resistance stays the same as the voltage changes, which gives a straight-line I-V graph through the origin. A metal wire kept at constant temperature behaves this way.",
        marks: [
          "Ohm's law: current is proportional to voltage at constant temperature (V = IR).",
          "An ohmic conductor has a constant resistance.",
          "This gives a straight line through the origin on an I-V graph.",
        ],
        ask: "Say how current relates to voltage, name the condition of constant temperature, and describe the shape of the I-V graph.",
      },
      // OPEN 2 - resistance of a wire (R = rho L / A)
      {
        kind: "open",
        prompt: "Explain how the resistance of a wire depends on its length and its cross-sectional area.",
        figure: "fig-pr6-01-resistance-factors",
        modelAnswer: "The resistance of a wire is given by R = rho L / A, where rho is the resistivity, L is the length and A is the cross-sectional area. Resistance is directly proportional to length, so doubling the length doubles the resistance. Resistance is inversely proportional to the cross-sectional area, so a thicker wire has less resistance, and doubling the area halves the resistance.",
        marks: [
          "R = rho L / A stated.",
          "Resistance increases with length (proportional to L).",
          "Resistance decreases as the cross-sectional area increases (inversely proportional to A).",
        ],
        ask: "Use R = rho L / A and describe what happens to the resistance when the length grows and when the wire gets thicker.",
      },
      // OPEN 3 - why open the switch between readings
      {
        kind: "open",
        prompt: "When measuring the resistance of a component with an ammeter and voltmeter, explain why the switch should be opened between readings.",
        figure: "fig-pr6-09-lamp-circuit",
        modelAnswer: "Leaving the current flowing heats the component, and for many components the resistance changes with temperature. Opening the switch between readings lets the component cool, so it does not heat up and drift during the experiment. This keeps the resistance steady and makes the R = V/I values reliable and repeatable.",
        marks: [
          "A continuous current heats the component.",
          "Heating changes the temperature and so the resistance.",
          "Opening the switch prevents drift and gives reliable readings.",
        ],
        ask: "Think about what a steady current does to the temperature of the component, and how temperature affects its resistance.",
      },
      // OPEN 4 - series vs parallel
      {
        kind: "open",
        prompt: "Compare how current and voltage behave in a series circuit and in a parallel circuit.",
        modelAnswer: "In a series circuit the current is the same at every point, and the supply voltage is shared between the components in proportion to their resistances, so the separate voltages add up to the supply voltage. In a parallel circuit the voltage across each branch is the same and equal to the supply voltage, while the total current is shared between the branches and the branch currents add up to the supply current.",
        marks: [
          "Series: current is the same everywhere; voltages add up.",
          "Parallel: voltage is the same across each branch; currents add up.",
          "Voltage is shared in series and current is shared in parallel.",
        ],
        ask: "For each circuit say what stays the same everywhere and what gets shared out among the components.",
      },
      // OPEN 5 - electromagnetic induction (generator)
      {
        kind: "open",
        prompt: "Explain how moving a conductor through a magnetic field induces a voltage, and name the laws that describe the size and direction of the effect.",
        figure: "fig-pr6-08-solenoid",
        modelAnswer: "Moving a conductor through a magnetic field changes the magnetic flux linking it, and this changing flux induces a voltage (an e.m.f.) across the conductor. Faraday's law says the induced e.m.f. is proportional to the rate of change of flux, so moving faster or using a stronger field gives a bigger e.m.f. Lenz's law says the induced current flows in the direction that opposes the change producing it. This is the basis of the a.c. generator, and Fleming's right-hand rule gives the direction of the induced current.",
        marks: [
          "A changing magnetic flux through the conductor induces an e.m.f.",
          "Faraday's law: the e.m.f. is proportional to the rate of change of flux.",
          "Lenz's law: the induced current opposes the change (generator basis).",
        ],
        ask: "Link the movement to a change in magnetic flux, then name the law for the size of the e.m.f. and the law for its direction.",
      },
    ],
  },
];
