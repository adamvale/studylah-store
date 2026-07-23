import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism, Revision 2. Checkpoint over sections TP6.4 to
// TP6.6: electrical power and energy, measuring resistance experiments, and the
// magnetic effect of a current and induction. Question-only (no teach cards).

export const BOXES: Subconcept[] = [
  {
    id: "tp6.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: power and energy, measuring resistance, magnetism",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A lamp draws a current of 0.50 A from a 12 V supply. What is the electrical power in the lamp?",
        options: ["3.0 W", "6.0 W", "12 W", "24 W"],
        correct: 1,
        ask: "Power is current times voltage, so work out 0.50 times 12. Which option matches?",
        hints: [
          "Use P equals I times V.",
          "0.50 times 12 is 6.0, and power is measured in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = IV" },
          { label: "Substitute", latex: "P = 0.50 \\times 12" },
          { label: "Answer", latex: "P = 6.0\\ \\text{W}" },
        ],
        explain: "The power is 6.0 watts, because 0.50 amperes times 12 volts is 6.0 watts.",
      },
      {
        kind: "choice",
        question: "A fixed resistor of 5.0 ohms carries a current of 2.0 A. Using P = I^2 R, what power is dissipated?",
        options: ["5.0 W", "10 W", "40 W", "20 W"],
        correct: 3,
        ask: "Square the current first, then multiply by the resistance. Work out 2.0 squared times 5.0. Which option is that?",
        hints: [
          "Use P equals the current squared times the resistance.",
          "2.0 squared is 4.0, and 4.0 times 5.0 is 20.",
        ],
        working: [
          { label: "Formula", latex: "P = I^2 R" },
          { label: "Substitute", latex: "P = 2.0^2 \\times 5.0" },
          { label: "Answer", latex: "P = 20\\ \\text{W}" },
        ],
        explain: "The power is 20 watts, because 2.0 amperes squared is 4.0, and 4.0 times 5.0 ohms is 20 watts.",
      },
      {
        kind: "choice",
        question: "A current flows out of the page along a straight wire. What is the pattern of the magnetic field around it?",
        figure: "fig-pr6-07",
        options: ["Anticlockwise circles round the wire", "Clockwise circles round the wire", "Straight lines running along the wire", "Lines pointing radially outward"],
        correct: 0,
        ask: "Use the right-hand grip rule for a current coming out of the page. Do the field circles run clockwise or anticlockwise?",
        hints: [
          "The field lines form complete circles around the wire, not straight lines.",
          "For a current out of the page the right-hand grip rule gives an anticlockwise field.",
        ],
        explain: "The field forms anticlockwise circles round the wire, because a current out of the page gives an anticlockwise field by the right-hand grip rule. Into the page it would be clockwise.",
      },
      {
        kind: "choice",
        question: "A lamp runs at 12 V drawing 0.50 A for 2.0 minutes. How much electrical energy is transferred? (2.0 minutes = 120 s)",
        options: ["60 J", "360 J", "720 J", "1440 J"],
        correct: 2,
        ask: "Energy is voltage times current times time in seconds, so work out 12 times 0.50 times 120. Which option matches?",
        hints: [
          "Use E equals V times I times t, with the time in seconds.",
          "12 times 0.50 is 6.0, and 6.0 times 120 is 720.",
        ],
        working: [
          { label: "Formula", latex: "E = VIt" },
          { label: "Substitute", latex: "E = 12 \\times 0.50 \\times 120" },
          { label: "Answer", latex: "E = 720\\ \\text{J}" },
        ],
        explain: "The energy transferred is 720 joules, because 12 volts times 0.50 amperes times 120 seconds is 720 joules.",
      },
      {
        kind: "choice",
        question: "Fleming's left-hand rule is used to find which quantity?",
        options: ["The direction of the induced current in a generator", "The direction of the magnetic field around a wire", "The position of the north pole of a solenoid", "The direction of the force on a current (the motor effect)"],
        correct: 3,
        ask: "Fleming's left-hand rule belongs to the motor effect. Which option describes what it gives?",
        hints: [
          "The left hand is for the motor effect: thumb force, first finger field, second finger current.",
          "The induced current in a generator uses the right-hand rule, not the left.",
        ],
        explain: "Fleming's left-hand rule gives the direction of the force on a current-carrying conductor, which is the motor effect. The right-hand rule is the one used for the induced current in a generator.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement under the law it describes.",
        bins: ["Faraday's law", "Lenz's law"],
        items: [
          { text: "the induced e.m.f. is proportional to the rate of change of magnetic flux", bin: 0 },
          { text: "a faster change of flux gives a larger induced e.m.f.", bin: 0 },
          { text: "the induced current opposes the change that produces it", bin: 1 },
          { text: "the induced current sets up a field that resists the incoming magnet", bin: 1 },
        ],
        ask: "Faraday's law is about how big the induced e.m.f. is; Lenz's law is about which way the induced current flows. Sort each statement.",
        hints: [
          "Faraday links the size of the e.m.f. to the rate of change of flux.",
          "Lenz says the induced current always opposes the change that causes it.",
        ],
        explain: "Faraday's law fixes the size of the induced e.m.f. from the rate of change of flux, so the first 2 statements are Faraday. Lenz's law fixes the direction, always opposing the change, so the last 2 are Lenz.",
      },
      {
        kind: "match",
        prompt: "Match each electrical quantity to its unit.",
        pairs: [
          { left: "power", right: "watt (W)" },
          { left: "energy", right: "joule (J)" },
          { left: "resistance", right: "ohm" },
          { left: "current", right: "ampere (A)" },
        ],
        ask: "Recall the unit for each quantity: power, energy, resistance and current. Pair each one up.",
        hints: [
          "Power is the rate of energy transfer, measured in watts; energy is measured in joules.",
          "Resistance is measured in ohms and current in amperes.",
        ],
        explain: "Power is measured in watts, energy in joules, resistance in ohms and current in amperes.",
      },
      {
        kind: "order",
        prompt: "Put the steps for measuring a component's resistance from R = V/I in order.",
        items: [
          "Connect the ammeter in series and the voltmeter across the component",
          "Close the switch and read the current I and the voltage V",
          "Open the switch so the component does not heat up between readings",
          "Calculate the resistance from R = V/I",
        ],
        ask: "Think about the safe order: build the circuit, take the readings, protect the component, then compute. Put the steps in order.",
        hints: [
          "You must wire the ammeter in series and voltmeter across before any reading is taken.",
          "Open the switch after reading so heating does not drift the resistance, then work out R = V/I.",
        ],
        explain: "First wire the ammeter in series and the voltmeter across the component, then close the switch to read I and V, then open the switch so it does not heat up, and finally calculate R = V/I.",
      },
      {
        kind: "graphpick",
        prompt: "In the wire-length experiment R/L = R_X (1/L) + rho/A. Which graph of R/L against 1/L fits gradient R_X = 1.20 ohms and intercept rho/A = 0.50 ohm/m?",
        xLabel: "1/L",
        yLabel: "R/L",
        options: [
          { points: [[1, 1.7], [3, 4.1], [5, 6.5]], caption: "straight line, intercept 0.50" },
          { points: [[0, 0], [3, 3.6], [5, 6.0]], caption: "straight line through the origin" },
          { points: [[1, 6.5], [3, 4.1], [5, 1.7]], caption: "straight line sloping down" },
        ],
        correct: 0,
        ask: "The line is straight, rises to the right, and cuts the vertical axis at the intercept 0.50, not at zero. Which graph is that?",
        hints: [
          "A positive intercept of 0.50 means the line does not pass through the origin.",
          "A positive gradient R_X of 1.20 means R/L rises as 1/L rises.",
        ],
        explain: "The correct graph is a straight line rising to the right with a positive intercept of 0.50, because R/L = R_X (1/L) + rho/A has gradient R_X of 1.20 ohms and intercept rho/A of 0.50 ohm per metre. A line through the origin would have no intercept, and a falling line would give a negative gradient.",
      },
      {
        kind: "tiles",
        prompt: "A lamp runs at 12 V drawing 0.50 A for 120 s. Build the working line for the energy transferred E.",
        tiles: ["E =", "12", "\\times", "0.50", "\\times", "120", "=", "720", "J", "6.0"],
        answer: ["E =", "12", "\\times", "0.50", "\\times", "120", "=", "720", "J"],
        ask: "Energy is voltage times current times time. Multiply 12 by 0.50 by 120 to get the joules.",
        hints: [
          "Use E equals V times I times t.",
          "12 times 0.50 is 6.0, and 6.0 times 120 is 720 joules.",
        ],
        working: [
          { label: "Formula", latex: "E = VIt" },
          { label: "Substitute", latex: "E = 12 \\times 0.50 \\times 120" },
          { label: "Answer", latex: "E = 720\\ \\text{J}" },
        ],
        explain: "The energy transferred is 720 joules, because 12 volts times 0.50 amperes times 120 seconds is 720 joules.",
      },
      {
        kind: "open",
        prompt: "When measuring a lamp's resistance from R = V/I, explain why the switch is opened between readings.",
        modelAnswer: "A current through the lamp heats the filament, and a hotter filament has a higher resistance. If the switch is left closed the lamp keeps heating and its resistance drifts, so the readings are not taken at a steady temperature. Opening the switch between readings lets the filament cool back to a fair, steady temperature so each pair of V and I values is taken under the same conditions.",
        marks: [
          "A current heats the lamp filament.",
          "A hotter filament has a higher resistance, so the value drifts.",
          "Opening the switch lets it cool so readings are taken at a fair, steady temperature.",
        ],
        ask: "Think about what happens to the filament's temperature while current flows, and how that temperature changes its resistance.",
      },
      {
        kind: "open",
        prompt: "State and explain 2 ways to increase the strength of an electromagnet made from a solenoid.",
        modelAnswer: "Increase the current through the coil, because a larger current makes a stronger magnetic field. Increase the number of turns on the coil, because more turns per length add their fields together to give a stronger field. A third way is to add a soft-iron core, which becomes strongly magnetised and greatly increases the field.",
        marks: [
          "Increase the current (larger current gives a stronger field).",
          "Increase the number of turns (more turns add their fields).",
          "Add a soft-iron core to concentrate and strengthen the field.",
        ],
        ask: "Think about the current, the coil itself, and what you could place inside the coil to boost the field.",
      },
    ],
  },
];
