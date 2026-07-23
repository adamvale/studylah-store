import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, section 5. Grounded in KB Chapter 21 (Electromagnetic Induction) section 21.5.
// Figure colours follow the T19 key: induced current/output line = blue, field lines = grey, magnet N pole = red,
// S pole = blue; coils, wires, cores, transformer bodies = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t19.5",
    code: "T19.5",
    title: "Transmission of electrical power",
    blurb: "Why power is sent across the country at high voltage and low current",
    steps: [
      {
        kind: "concept",
        heading: "Cables lose energy as heat",
        body: "The long *cables* that carry power across the country have *resistance*, so as the current passes it wastes some *energy* as *heat*.",
        formula: {
          latex: "P_{\\text{loss}} = I^2 R",
          where: [
            { sym: "P_{loss}", meaning: "power wasted as heat in the cable", unit: "W" },
            { sym: "I", meaning: "current in the cable", unit: "A" },
            { sym: "R", meaning: "resistance of the cable", unit: "\\Omega" },
          ],
        },
        say: "Power stations sit far from the towns they serve, so the electricity travels down many kilometres of cable. No cable is perfect, each one has some resistance, and when a current pushes through resistance it heats the wire. That heat is energy leaking away before it ever reaches a home. The power wasted is the current squared times the resistance.",
      },
      {
        kind: "concept",
        heading: "The loss depends on the square of the current",
        body: "Because the waste follows the *square* of the current, halving the current cuts the loss to a *quarter*. So we keep the *current small* by sending the power at a *high voltage*.",
        formula: {
          latex: "I = \\dfrac{P}{V}",
          where: [
            { sym: "I", meaning: "current in the cable", unit: "A" },
            { sym: "P", meaning: "power transmitted", unit: "W" },
            { sym: "V", meaning: "transmission voltage", unit: "V" },
          ],
        },
        say: "Look closely at the loss formula: the current is squared. That means the current matters far more than the resistance. Double the current and the waste goes up 4 times; halve it and the waste drops to a quarter. For a fixed amount of power, the current equals the power divided by the voltage, so if we push the voltage up high, the current drops right down, and the squared loss shrinks sharply.",
      },
      {
        kind: "concept",
        heading: "Thick cables help only a little",
        body: "Using *thicker* cables lowers the *resistance* and so trims the loss, but thick copper is heavy and *costly*, so raising the *voltage* does far more for far less.",
        say: "You might think the fix is simply fatter wires. A thicker cable does have lower resistance, so it wastes a little less. But copper is expensive and heavy, and the towers must hold it up, so you can only go so far. Raising the transmission voltage attacks the current instead, and because the loss depends on the current squared, that buys a much bigger saving for much less money.",
      },
      {
        kind: "concept",
        heading: "Transformers step the voltage up then down",
        figure: "fig-21-08-power-transmission",
        body: "A *step-up* transformer at the station raises the voltage for the cables; near the town a *step-down* transformer lowers it again to the *240 volts* used in homes.",
        say: "This diagram traces the journey. On the left is the power station with its step-up transformer, drawn as white coils on a grey core, lifting the voltage high for the long grey transmission cables strung between towers. On the right, a step-down transformer brings the voltage back down to the 240 volts that the houses use safely. High voltage for the long haul, low voltage for the home.",
      },
      {
        kind: "choice",
        question: "A cable of resistance 0.5 ohm carries 8 kW of power at 400 V. How much power is wasted as heat in the cable?",
        options: ["20 W", "80 W", "200 W", "3200 W"],
        correct: 2,
        ask: "First find the current with I = P / V, so 8000 divided by 400. Then put that current into P_loss = I^2 R.",
        hints: [
          "8000 divided by 400 is 20, so the current is 20 amperes.",
          "P_loss is 20 squared times 0.5, and 20 squared is 400.",
        ],
        working: [
          { label: "Current", latex: "I = \\dfrac{P}{V} = \\dfrac{8000}{400} = 20\\ \\text{A}" },
          { label: "Formula", latex: "P_{\\text{loss}} = I^2 R" },
          { label: "Substitute", latex: "P_{\\text{loss}} = 20^2 \\times 0.5" },
          { label: "Answer", latex: "P_{\\text{loss}} = 200\\ \\text{W}" },
        ],
        explain: "The waste is 200 watts. The current is 8000 divided by 400, which is 20 amperes, and 20 squared times 0.5 ohm is 200 watts.",
      },
      {
        kind: "choice",
        question: "The same 8 kW is now sent down the same 0.5 ohm cable at 4000 V instead. How much power is wasted as heat?",
        options: ["200 W", "2 W", "20 W", "0.5 W"],
        correct: 1,
        ask: "Find the new current with I = P / V, so 8000 divided by 4000. Then use P_loss = I^2 R with the same 0.5 ohm.",
        hints: [
          "8000 divided by 4000 is 2, so the current is only 2 amperes now.",
          "P_loss is 2 squared times 0.5, and 2 squared is 4.",
        ],
        working: [
          { label: "Current", latex: "I = \\dfrac{P}{V} = \\dfrac{8000}{4000} = 2\\ \\text{A}" },
          { label: "Formula", latex: "P_{\\text{loss}} = I^2 R" },
          { label: "Substitute", latex: "P_{\\text{loss}} = 2^2 \\times 0.5" },
          { label: "Answer", latex: "P_{\\text{loss}} = 2\\ \\text{W}" },
        ],
        explain: "The waste is just 2 watts. Raising the voltage 10 times cut the current from 20 amperes to 2 amperes, and because the loss follows the current squared, the waste fell from 200 watts to 2 watts.",
      },
      {
        kind: "choice",
        question: "Why is electrical power sent along transmission cables at a very high voltage?",
        options: [
          "A higher voltage makes the cables carry more current",
          "A higher voltage lowers the resistance of the cables",
          "A higher voltage heats the cables so less energy is lost",
          "A higher voltage means a smaller current, so far less energy is lost as I^2 R heat",
        ],
        correct: 3,
        ask: "For a fixed power, a higher voltage gives a smaller current. Think about what a smaller current does to the I^2 R loss.",
        hints: [
          "The current equals the power divided by the voltage, so raising V lowers I.",
          "The loss follows the current squared, so a smaller current wastes far less energy.",
        ],
        explain: "High voltage is used because, for a fixed power, it means a smaller current. Since the loss is the current squared times the resistance, a smaller current wastes far less energy as heat.",
      },
      {
        kind: "open",
        prompt: "The National Grid transmits power at hundreds of thousands of volts and uses transformers along the way. Explain why such a high voltage is used and what the transformers do.",
        figure: "fig-21-08-power-transmission",
        modelAnswer: "The cables have resistance, so they waste power as heat given by P_loss = I^2 R. For a fixed power, I = P / V, so a high transmission voltage gives a small current. Because the loss depends on the current squared, a small current cuts the wasted heat sharply. A step-up transformer at the station raises the voltage for the cables, and a step-down transformer near the homes lowers it back to the 240 V used safely.",
        marks: [
          "Cables have resistance and waste power as heat, P_loss = I^2 R.",
          "High voltage gives a small current since I = P / V, and the loss depends on I^2.",
          "A step-up transformer raises the voltage for the cables; a step-down transformer lowers it to 240 V for homes.",
        ],
        ask: "Bring in the loss formula P_loss = I^2 R, explain how high voltage keeps the current small, and say what the step-up and step-down transformers each do.",
      },
      {
        kind: "insight",
        body: "The trick is the *square*: since the waste is the current squared times the resistance, cutting the *current* by raising the *voltage* saves far more energy than any thickening of the *cables* could.",
        say: "Here is the idea to keep. The wasted power depends on the current squared, so the current is the thing to beat. Raising the voltage drops the current for the same power, and squaring that smaller current makes the loss tumble. That single trick, high voltage and low current, is why the grid can carry power across a whole country without losing most of it on the way.",
      },
    ],
  },
];
