import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, section 1. Grounded in KB Chapter 18 (Practical Electricity) section 18.1.
// Figure/colour key from the current SVGs: the current/charge = blue; the resistance-scale bar,
// appliances and casings = white/grey. Describe only what is drawn; numbers agree with the figure.

export const BOXES: Subconcept[] = [
  {
    id: "t16.1",
    code: "T16.1",
    title: "Electrical power",
    blurb: "How a current heats things, and how to work out electrical power and energy",
    steps: [
      {
        kind: "concept",
        heading: "A current has a heating effect",
        body: "When a *current* flows through a conductor, the moving charges *collide* with the vibrating atoms of the metal *lattice*. Every collision hands over a little energy, so the atoms vibrate harder and the conductor warms up. This is the *heating effect* of a current.",
        say: "As charge drifts along a wire it keeps bumping into the fixed atoms that make up the metal lattice. Each bump passes over a little energy, the atoms jiggle harder, and the wire heats up. That warming is the heating effect of an electric current, and it is why any wire carrying a current gets hot.",
      },
      {
        kind: "concept",
        heading: "What a heating element needs",
        figure: "fig-18-01-resistance-scale",
        body: "A *heating element*, like the one in a kettle, is made from a metal with a high *resistance* and a high *melting point*. *Nichrome* fits both: it resists the current strongly and stays solid even when it glows red hot.",
        say: "The picture is a scale of metals lined up by how much they resist a current, from low on one side to high on the other. Silver and copper sit at the low-resistance end, tungsten is higher, and nichrome sits right at the high-resistance end. A heating element wants that high resistance so it turns plenty of electrical energy into heat, and it also needs a high melting point so it does not melt while glowing, which is why nichrome is chosen.",
      },
      {
        kind: "concept",
        heading: "Power is the rate of transfer",
        body: "*Power* is the *rate* of transferring *energy*: the number of joules delivered each second. It is measured in *watts*, where 1 watt is 1 joule per second.",
        formula: {
          latex: "P = \\dfrac{W}{t}",
          where: [
            { sym: "P", meaning: "power", unit: "W" },
            { sym: "W", meaning: "energy transferred", unit: "J" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Power tells you how fast energy is moving, not how much. It is the energy transferred divided by the time taken. One watt means one joule delivered every second, so a 60 watt lamp turns 60 joules into light and heat each second.",
      },
      {
        kind: "concept",
        heading: "Electrical power",
        body: "For an electrical component, the *power* is the *voltage* across it times the *current* through it. Using Ohm's law the same power can also be written with the *resistance*.",
        formula: {
          latex: "P = VI = I^2 R = \\dfrac{V^2}{R}",
          where: [
            { sym: "P", meaning: "power", unit: "W" },
            { sym: "V", meaning: "voltage (p.d.)", unit: "V" },
            { sym: "I", meaning: "current", unit: "A" },
            { sym: "R", meaning: "resistance", unit: "ohm" },
          ],
        },
        say: "For anything electrical, multiply the voltage across it by the current through it and you get the power in watts. If instead you know the resistance, Ohm's law lets you swap in current squared times resistance, or voltage squared divided by resistance. All 3 give the same power.",
      },
      {
        kind: "choice",
        question: "A 12 V supply drives a current of 3.0 A through a resistor. What is the power transferred?",
        options: ["4.0 W", "0.25 W", "36 W", "15 W"],
        correct: 2,
        ask: "Power is voltage times current, so work out 12 times 3.0.",
        hints: [
          "Use P = V I.",
          "12 times 3.0 is 36, and power is measured in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = VI" },
          { label: "Substitute", latex: "P = 12 \\times 3.0" },
          { label: "Answer", latex: "P = 36\\ \\text{W}" },
        ],
        explain: "The power is 36 watts, because 12 volts times 3.0 amperes is 36 watts.",
      },
      {
        kind: "choice",
        question: "A lamp is marked 240 V, 60 W. What current does it draw at its rated voltage?",
        options: ["0.25 A", "4.0 A", "0.5 A", "14400 A"],
        correct: 0,
        ask: "Rearrange power equals voltage times current to get the current, so work out 60 divided by 240.",
        hints: [
          "The current is the power divided by the voltage.",
          "60 divided by 240 is 0.25, an answer in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{P}{V}" },
          { label: "Substitute", latex: "I = \\dfrac{60}{240}" },
          { label: "Answer", latex: "I = 0.25\\ \\text{A}" },
        ],
        explain: "The lamp draws 0.25 amperes, because 60 watts divided by 240 volts is 0.25 amperes.",
      },
      {
        kind: "choice",
        question: "A generator delivers 90 kW of power at a voltage of 3000 V. What current flows in the cables?",
        options: ["270 A", "30 A", "3.0 A", "0.033 A"],
        correct: 1,
        ask: "Current is power divided by voltage. Write 90 kW as 90000 W, then divide by 3000.",
        hints: [
          "Use I = P / V with the power in watts.",
          "90000 divided by 3000 is 30, an answer in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{P}{V}" },
          { label: "Substitute", latex: "I = \\dfrac{90000}{3000}" },
          { label: "Answer", latex: "I = 30\\ \\text{A}" },
        ],
        explain: "The current is 30 amperes, because 90000 watts divided by 3000 volts is 30 amperes.",
      },
      {
        kind: "choice",
        question: "The generator's current of 30 A flows through cables of total resistance 5.0 ohm. How much power is wasted heating the cables?",
        options: ["150 W", "750 W", "900 W", "4.5 x 10^3 W"],
        correct: 3,
        ask: "The power lost in the cables is current squared times resistance, so work out 30 squared times 5.0.",
        hints: [
          "Use P = I^2 R.",
          "30 squared is 900, and 900 times 5.0 is 4500, which is 4.5 times 10 to the power 3 watts.",
        ],
        working: [
          { label: "Formula", latex: "P = I^2 R" },
          { label: "Substitute", latex: "P = 30^2 \\times 5.0" },
          { label: "Answer", latex: "P = 4.5 \\times 10^3\\ \\text{W}" },
        ],
        explain: "The wasted power is 4.5 times 10 to the power 3 watts, because 30 squared is 900, and 900 times 5.0 ohms is 4500 watts.",
      },
      {
        kind: "choice",
        question: "A current of 3.0 A flows from a 12 V supply for 8 minutes (480 s). How much energy is transferred?",
        options: ["3.6 x 10^4 J", "1.73 x 10^4 J", "36 J", "5.76 x 10^3 J"],
        correct: 1,
        ask: "Energy is voltage times current times time. Work out 12 times 3.0 times 480, keeping the time in seconds.",
        hints: [
          "Use E = V I t, with the time in seconds.",
          "12 times 3.0 is 36, and 36 times 480 is about 1.73 times 10 to the power 4.",
        ],
        working: [
          { label: "Formula", latex: "E = VIt" },
          { label: "Substitute", latex: "E = 12 \\times 3.0 \\times 480" },
          { label: "Answer", latex: "E = 1.73 \\times 10^4\\ \\text{J}" },
        ],
        explain: "The energy is about 1.73 times 10 to the power 4 joules, because 12 volts times 3.0 amperes times 480 seconds is 17280 joules.",
      },
      {
        kind: "choice",
        question: "What pair of properties does a good heating element need?",
        figure: "fig-18-01-resistance-scale",
        options: [
          "Low resistance and a low melting point",
          "High resistance but a low melting point",
          "Low resistance but a high melting point",
          "High resistance and a high melting point",
        ],
        correct: 3,
        ask: "The element must resist the current strongly to make heat, and it must survive glowing hot without melting.",
        hints: [
          "High resistance means more electrical energy is turned into heat.",
          "A high melting point stops the wire melting when it glows, which is why nichrome is used.",
        ],
        explain: "A heating element needs both high resistance, to turn plenty of energy into heat, and a high melting point, so it does not melt when hot. Nichrome has both.",
      },
      {
        kind: "insight",
        body: "The *energy* delivered is just the *power* multiplied by the *time* it runs, so a device rated in watts steadily piles up *joules*.",
        formula: {
          latex: "E = Pt = VIt",
          where: [
            { sym: "E", meaning: "energy transferred", unit: "J" },
            { sym: "P", meaning: "power", unit: "W" },
            { sym: "V", meaning: "voltage (p.d.)", unit: "V" },
            { sym: "I", meaning: "current", unit: "A" },
            { sym: "t", meaning: "time", unit: "s" },
          ],
        },
        say: "Here is the idea to carry away. Once you know the power, the energy is simply power times time. A 3 ampere current at 12 volts running for 480 seconds delivers 12 times 3 times 480, about 1.73 times 10 to the power 4 joules. Bigger power or a longer time both mean more energy transferred.",
      },
    ],
  },
];
