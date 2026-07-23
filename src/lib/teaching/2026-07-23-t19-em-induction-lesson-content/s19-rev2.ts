import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, Revision 2. Checkpoint over KB sections
// t19.4 to t19.5: the transformer and the transmission of electrical power.
// Question-only. Calculation values taken only from the T19 CALCULATION BANK.

export const BOXES: Subconcept[] = [
  {
    id: "t19.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: transformers and power transmission",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A transformer has a primary of 1200 turns at 240 V and a secondary of 60 turns. What is the secondary voltage?",
        figure: "fig-21-07-transformer",
        options: ["24 V", "12 V", "48 V", "4800 V"],
        correct: 1,
        ask: "The voltages share the turns ratio, so work out 240 times 60, then divide by 1200. Which option is that?",
        hints: [
          "Use V_s over V_p equals N_s over N_p, so V_s equals V_p times N_s divided by N_p.",
          "240 times 60 is 14400, and 14400 divided by 1200 is 12.",
        ],
        working: [
          { label: "Formula", latex: "V_s = V_p \\times \\dfrac{N_s}{N_p}" },
          { label: "Substitute", latex: "V_s = 240 \\times \\dfrac{60}{1200}" },
          { label: "Answer", latex: "V_s = 12\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 12 volts, because 240 volts times 60 divided by 1200 is 12 volts. Fewer secondary turns means a lower voltage, so this is a step-down transformer.",
      },
      {
        kind: "choice",
        question: "Why must the supply to a transformer be alternating current rather than direct current?",
        options: [
          "Because a direct current would melt the primary coil",
          "Because a direct current cannot travel along a wire",
          "Because a transformer stores charge like a battery",
          "Because only a changing field induces an e.m.f. in the secondary",
        ],
        correct: 3,
        ask: "A transformer induces a voltage in the secondary. Think about what a magnetic field has to be doing for any e.m.f. to be induced.",
        hints: [
          "Induction needs a changing magnetic flux through the secondary coil.",
          "An alternating current makes a field that keeps changing, but a steady direct current gives a steady field that induces nothing.",
        ],
        explain: "A transformer works only on alternating current, because only a changing magnetic field induces an e.m.f. in the secondary. A steady direct current gives an unchanging field, so no voltage appears.",
      },
      {
        kind: "choice",
        question: "A transformer has a primary of 800 turns at 240 V and a secondary of 200 turns. What is the secondary voltage?",
        options: ["60 V", "30 V", "120 V", "6 V"],
        correct: 0,
        ask: "Use the turns ratio again, so work out 240 times 200, then divide by 800. Which option matches?",
        hints: [
          "V_s equals V_p times N_s divided by N_p.",
          "240 times 200 is 48000, and 48000 divided by 800 is 60.",
        ],
        working: [
          { label: "Formula", latex: "V_s = V_p \\times \\dfrac{N_s}{N_p}" },
          { label: "Substitute", latex: "V_s = 240 \\times \\dfrac{200}{800}" },
          { label: "Answer", latex: "V_s = 60\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 60 volts, because 240 volts times 200 divided by 800 is 60 volts. The secondary has fewer turns, so the voltage steps down.",
      },
      {
        kind: "choice",
        question: "Why is electrical power sent along the grid at very high voltage?",
        options: [
          "To make the cables carry a larger current",
          "To increase the resistance of the cables",
          "To give a smaller current and so a smaller I^2 R heat loss",
          "To store more energy inside the cables",
        ],
        correct: 2,
        ask: "For a fixed power, P equals I times V. Think about what a higher voltage does to the current, and how the heat loss depends on that current.",
        hints: [
          "The power lost as heat is I squared times R, so it depends on the square of the current.",
          "For a fixed power, a higher voltage means a smaller current, and squaring a smaller current makes the loss much smaller.",
        ],
        explain: "High voltage is used so the current is small, because the heat loss is I squared times R. Since the loss depends on the square of the current, cutting the current sharply cuts the wasted heat.",
      },
      {
        kind: "choice",
        question: "An ideal transformer steps 230 V down to 46 V. The primary current is 1.2 A. What is the secondary current?",
        options: ["0.24 A", "1.2 A", "1.5 A", "6.0 A"],
        correct: 3,
        ask: "For an ideal transformer the power is unchanged, so V_p times I_p equals V_s times I_s. Work out 230 times 1.2, then divide by 46.",
        hints: [
          "Rearrange V_p I_p equals V_s I_s to get I_s equals V_p times I_p divided by V_s.",
          "230 times 1.2 is 276, and 276 divided by 46 is 6.0.",
        ],
        working: [
          { label: "Formula", latex: "I_s = \\dfrac{V_p I_p}{V_s}" },
          { label: "Substitute", latex: "I_s = \\dfrac{230 \\times 1.2}{46}" },
          { label: "Answer", latex: "I_s = 6.0\\ \\text{A}" },
        ],
        explain: "The secondary current is 6.0 amperes, because 230 volts times 1.2 amperes divided by 46 volts is 6.0 amperes. Stepping the voltage down steps the current up, so the power stays the same.",
      },
      {
        kind: "slider",
        prompt: "A step-up transformer runs from 120 V with a primary current of 0.30 A and a secondary current of 0.015 A. Set the slider to the secondary voltage, in V.",
        min: 0,
        max: 3000,
        step: 10,
        unit: "V",
        start: 0,
        targetMin: 2390,
        targetMax: 2410,
        ask: "The power is unchanged, so V_p times I_p equals V_s times I_s. Work out 120 times 0.30, then divide by 0.015.",
        hints: [
          "Rearrange V_p I_p equals V_s I_s to get V_s equals V_p times I_p divided by I_s.",
          "120 times 0.30 is 36, and 36 divided by 0.015 is 2400.",
        ],
        working: [
          { label: "Formula", latex: "V_s = \\dfrac{V_p I_p}{I_s}" },
          { label: "Substitute", latex: "V_s = \\dfrac{120 \\times 0.30}{0.015}" },
          { label: "Answer", latex: "V_s = 2400\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 2400 volts, because 120 volts times 0.30 amperes divided by 0.015 amperes is 2400 volts. The current steps down as the voltage steps up.",
      },
      {
        kind: "spoterror",
        prompt: "One line about transformers is wrong. Tap the mistake.",
        lines: [
          "A transformer changes the size of an alternating voltage.",
          "It has a primary coil and a secondary coil wound on a soft-iron core.",
          "A transformer works on a steady d.c. supply.",
          "The core is laminated to reduce heating by eddy currents.",
        ],
        errorLine: 2,
        ask: "Check each line against how a transformer induces its voltage. Which statement describes a supply that could not induce anything?",
        hints: [
          "Induction needs a changing magnetic field through the secondary.",
          "A steady direct current gives a field that never changes, so a transformer cannot work on it. It needs alternating current.",
        ],
        explain: "The wrong line says a transformer works on a steady direct current. It does not, because a steady current gives an unchanging field and induces no e.m.f. A transformer needs alternating current.",
      },
      {
        kind: "tiles",
        prompt: "8 kW is sent down a 0.5 ohm cable at a current of 20 A. Build the working line for the power lost in the cable.",
        tiles: ["P_loss =", "20^2", "\\times", "0.5", "=", "200", "W", "2"],
        answer: ["P_loss =", "20^2", "\\times", "0.5", "=", "200", "W"],
        ask: "The heat loss is the current squared times the resistance, so square 20 first, then multiply by 0.5.",
        hints: [
          "Use P_loss equals I squared times R, with I equal to 20 and R equal to 0.5.",
          "20 squared is 400, and 400 times 0.5 is 200.",
        ],
        working: [
          { label: "Formula", latex: "P_{loss} = I^2 R" },
          { label: "Substitute", latex: "P_{loss} = 20^2 \\times 0.5" },
          { label: "Answer", latex: "P_{loss} = 200\\ \\text{W}" },
        ],
        explain: "The power lost is 200 watts, because 20 squared is 400 and 400 times 0.5 is 200 watts. Sending the same 8 kilowatts at 4000 volts instead drops the current to 2 amperes, and 2 squared times 0.5 is only 2 watts.",
      },
      {
        kind: "classify",
        prompt: "Sort each feature into the correct type of transformer.",
        bins: ["Step-up transformer", "Step-down transformer"],
        items: [
          { text: "more turns on the secondary than the primary", bin: 0 },
          { text: "output voltage higher than the input voltage", bin: 0 },
          { text: "used at the power station to raise the grid voltage", bin: 0 },
          { text: "fewer turns on the secondary than the primary", bin: 1 },
          { text: "output voltage lower than the input voltage", bin: 1 },
          { text: "used near homes to give the 240 V mains supply", bin: 1 },
        ],
        ask: "A step-up raises the voltage, a step-down lowers it. For each feature, decide whether it raises or lowers the voltage, then drop it in that bin.",
        hints: [
          "More secondary turns give a higher output voltage, which is a step-up.",
          "Fewer secondary turns give a lower output voltage, which is a step-down, like the one that feeds homes at 240 volts.",
        ],
        explain: "A step-up transformer has more secondary turns, a higher output voltage, and raises the grid voltage at the station. A step-down transformer has fewer secondary turns, a lower output voltage, and gives the 240 volt supply used in homes.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of power transmission.",
        segments: [
          "Cables have resistance, so power is lost as ",
          " at a rate I^2 R. To cut this loss we send the power at high ",
          " and low ",
          ", because the loss depends on the square of the ",
          ".",
        ],
        bank: ["heat", "voltage", "current", "resistance", "light", "power"],
        answer: ["heat", "voltage", "current", "current"],
        ask: "Recall what form the wasted energy takes, and whether we want the transmission voltage high or low to keep the current small.",
        hints: [
          "The wasted energy leaves the cables as heat, and the loss formula is the current squared times the resistance.",
          "We transmit at high voltage so the current is low, because the loss grows with the square of the current.",
        ],
        explain: "Power is lost as heat at a rate I squared times R. We send it at high voltage and low current, because the loss depends on the square of the current, so a smaller current wastes far less energy.",
      },
      {
        kind: "open",
        prompt: "Explain how a transformer changes an alternating voltage, and say why it will not work with a steady direct current.",
        modelAnswer: "The alternating current in the primary coil makes a magnetic field that keeps changing. The soft-iron core carries this changing field to the secondary coil, so a changing flux links the secondary and induces an alternating e.m.f. in it. The voltages are in the same ratio as the turns, V_s / V_p = N_s / N_p. A steady direct current gives a steady, unchanging field, so there is no change of flux and no e.m.f. is induced in the secondary.",
        marks: [
          "Alternating current in the primary makes a changing magnetic field.",
          "The changing flux in the core links the secondary and induces an e.m.f.",
          "Voltages follow the turns ratio, V_s / V_p = N_s / N_p.",
          "A steady d.c. gives an unchanging field, so no e.m.f. is induced.",
        ],
        ask: "Think about what the changing primary current does in the iron core, and why a steady direct current field would induce nothing in the secondary.",
      },
      {
        kind: "open",
        prompt: "The grid sends power over long cables using a step-up transformer at the station and a step-down transformer near homes. Explain why this reduces the energy wasted in the cables.",
        figure: "fig-21-08-power-transmission",
        modelAnswer: "The cables have resistance, so they lose power as heat at a rate P = I^2 R. For a fixed power P = I V, the step-up transformer raises the voltage, which makes the current smaller. Because the loss depends on the square of the current, a smaller current cuts the I^2 R loss sharply. Near homes a step-down transformer lowers the voltage again to the 240 V used in houses.",
        marks: [
          "Cables have resistance and lose power as heat, P = I^2 R.",
          "For fixed power P = I V, a higher voltage gives a smaller current.",
          "The loss depends on the current squared, so a smaller current cuts it sharply.",
          "A step-down transformer lowers the voltage to 240 V for homes.",
        ],
        ask: "Start from the fact that the loss is the current squared times R, then think about what a higher transmission voltage does to the current.",
      },
    ],
  },
];
