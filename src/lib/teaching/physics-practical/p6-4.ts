import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical Chapter 6), section 4: Electrical power and energy.
// Grounded in the TP6 build brief (p6-4.ts id tp6.4) and the power/energy CALCULATION BANK.
// Circuit colours (house dark theme): wires, resistors, LEDs and meters white/grey; the current amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.4",
    code: "TP6.4",
    title: "Electrical power and energy",
    blurb: "Power as the rate of energy transfer, and the heating form P = I^2 R",
    steps: [
      {
        kind: "concept",
        heading: "Power is the rate of energy transfer",
        body: "*Electrical power* is the *rate* at which a component *transfers energy*. For a component carrying current I across a voltage V, the power is *P = IV*, measured in watts.",
        formula: {
          latex: "P = IV",
          where: [
            { sym: "P", meaning: "electrical power", unit: "W" },
            { sym: "I", meaning: "current", unit: "A" },
            { sym: "V", meaning: "voltage across the component", unit: "V" },
          ],
        },
        say: "Power tells you how fast energy is being delivered. In an electrical component the power is the current multiplied by the voltage across it, and it is measured in watts. So a component passing 0.50 amperes across 12 volts transfers energy at 6.0 watts, meaning 6.0 joules every second.",
      },
      {
        kind: "concept",
        heading: "Energy transferred over time",
        body: "Since power is energy per unit *time*, the *energy transferred* in a time t is *E = VIt*. It is the power multiplied by how long the current flows, measured in joules.",
        formula: {
          latex: "E = VIt",
          where: [
            { sym: "E", meaning: "energy transferred", unit: "J" },
            { sym: "V", meaning: "voltage across the component", unit: "V" },
            { sym: "I", meaning: "current", unit: "A" },
            { sym: "t", meaning: "time", unit: "s" },
          ],
        },
        say: "If power is energy every second, then the total energy is just the power kept up over time. Multiply voltage by current by time, in seconds, and you get the energy in joules. For example, 12 volts times 0.50 amperes times 120 seconds is 720 joules.",
      },
      {
        kind: "concept",
        heading: "The heating form P = I^2 R",
        body: "Substituting *V = IR* into P = IV replaces the voltage, giving the *heating form* *P = I^2 R*. So in a fixed resistance the power is proportional to the square of the current.",
        formula: {
          latex: "P = I^2 R",
          where: [
            { sym: "P", meaning: "power dissipated", unit: "W" },
            { sym: "I", meaning: "current", unit: "A" },
            { sym: "R", meaning: "resistance", unit: "\\Omega" },
          ],
        },
        say: "Because the voltage across a resistor is its resistance times the current, you can swap V for I times R in the power equation. That leaves power equal to current squared times resistance. The key point is the square: in a fixed resistance, doubling the current makes the power 4 times as large, not twice.",
      },
      {
        kind: "choice",
        question: "A lamp carries a current of 0.50 A across a voltage of 12 V. What is its electrical power?",
        options: ["24 W", "0.60 W", "6.0 W", "12 W"],
        correct: 2,
        ask: "Power is current times voltage, so work out 0.50 times 12.",
        hints: [
          "Use P = IV.",
          "0.50 times 12 is 6.0, and the answer is a power in watts.",
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
        question: "A resistor of 5.0 ohms carries a current of 2.0 A. Using P = I^2 R, what power does it dissipate?",
        options: ["20 W", "10 W", "2.5 W", "40 W"],
        correct: 0,
        ask: "Square the current first, then multiply by the resistance. Work out 2.0 squared, then times 5.0.",
        hints: [
          "Use P = I^2 R, so square the current before multiplying.",
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
        kind: "slider",
        prompt: "A lamp runs at 12 V drawing 0.50 A for 2.0 minutes. Set the slider to the energy transferred, in joules. (2.0 minutes = 120 s.)",
        min: 0,
        max: 1000,
        step: 10,
        unit: "J",
        start: 0,
        targetMin: 710,
        targetMax: 730,
        ask: "Energy is voltage times current times time in seconds, so work out 12 times 0.50 times 120.",
        hints: [
          "Use E = VIt, and turn 2.0 minutes into 120 seconds first.",
          "12 times 0.50 is 6.0, and 6.0 times 120 is 720, so slide to 720 joules.",
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
        question: "In the circuit the LED sits in series with a resistor. As the current I through the LED rises, its power P_LED = I x V_LED is found not to be simply proportional to I. Why?",
        figure: "fig-pr6-18-led-circuit",
        options: [
          "The current I stays constant no matter what.",
          "The resistor in series has no effect on power.",
          "The formula P = I^2 R cannot be used at all.",
          "V_LED is not fixed but changes as I changes, so P depends on both I and a changing V_LED.",
        ],
        correct: 3,
        ask: "Power is proportional to current only if the voltage stays constant. Think about whether the voltage across an LED stays fixed as the current grows.",
        hints: [
          "An LED is non-ohmic, so its voltage does not stay in step with its current.",
          "Because V_LED changes as I changes, the product I times V_LED does not rise in simple proportion to I.",
        ],
        explain: "The power is not proportional to I because the LED's voltage V_LED is not constant. As the current changes, V_LED changes too, so the product I times V_LED does not scale simply with the current.",
      },
      {
        kind: "choice",
        question: "In the same circuit the LED current is 0.117 A and the voltage across it is V_LED = 0.36 V. What is the power dissipated in the LED?",
        options: ["0.36 W", "0.042 W", "0.12 W", "0.42 W"],
        correct: 1,
        ask: "The LED power is its current times its own voltage, so work out 0.117 times 0.36.",
        hints: [
          "Use P = I x V_LED.",
          "0.117 times 0.36 is about 0.042, and the answer is a power in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = I \\times V_{LED}" },
          { label: "Substitute", latex: "P = 0.117 \\times 0.36" },
          { label: "Answer", latex: "P = 0.042\\ \\text{W}" },
        ],
        explain: "The LED power is about 0.042 watts, because 0.117 amperes times 0.36 volts is roughly 0.042 watts.",
      },
      {
        kind: "insight",
        body: "*Power* can be written as *P = IV* or, using V = IR, as *P = I^2 R*. The squared form warns that in a fixed resistance the heating rises steeply with current, while energy is that power kept up over time, E = VIt.",
        say: "Here is the idea to keep. Power is current times voltage, and swapping voltage for current times resistance gives current squared times resistance. That square is a warning: in a fixed resistor, a small rise in current gives a much bigger rise in heating. And energy is simply that power sustained over time, voltage times current times time, in joules.",
      },
    ],
  },
];
