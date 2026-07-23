import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical Chapter 6), section 2. Grounded in Practical Chapter 06,
// I-V characteristics. Figure colours (house dark theme): on an I-V graph the best-fit LINE is blue,
// the guides and gradient triangle grey, the axis labels amber, the axes white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.2",
    code: "TP6.2",
    title: "Current-voltage characteristics",
    blurb: "Reading the I-V graph of a resistor, a filament lamp and a diode",
    steps: [
      {
        kind: "concept",
        heading: "What an I-V characteristic shows",
        body: "An *I-V characteristic* is a graph of the *current* through a component plotted against the *voltage* across it. Its shape tells you how the component's resistance behaves.",
        say: "An I-V characteristic is simply a graph. You put the voltage across a component on the horizontal axis and the current through it on the vertical axis, then plot how they change together. The shape of the line is what matters, because it reveals whether the resistance stays fixed or shifts as the voltage rises.",
      },
      {
        kind: "concept",
        heading: "The ohmic conductor",
        figure: "fig-pr6-02-ohmic-iv",
        body: "An *ohmic conductor* at constant temperature gives a *straight line through the origin*. The resistance is *constant*, and the *gradient* of the line equals 1 over R.",
        formula: {
          latex: "\\text{gradient} = \\dfrac{1}{R}",
          where: [
            { sym: "gradient", meaning: "slope of the I against V line", unit: "A V^-1" },
            { sym: "R", meaning: "resistance (constant for an ohmic conductor)", unit: "ohm" },
          ],
        },
        say: "This graph shows an ohmic conductor. The axes are white, the amber labels read I against V, and the blue best-fit line runs dead straight from the origin up to the top right, with a grey gradient triangle drawn against it. Because the line is straight and passes through zero, the resistance never changes. The steeper the line, the smaller the resistance, since the gradient equals 1 divided by R.",
      },
      {
        kind: "concept",
        heading: "The filament lamp",
        figure: "fig-pr6-03-filament-iv",
        body: "A *filament lamp* gives an *S-shaped* curve that *flattens* as the voltage rises. The filament heats up, so its resistance rises, making it non-ohmic.",
        say: "This is a filament lamp. The blue curve starts steep near the origin but bends over and flattens as the voltage grows, giving that S shape. The reason is heating. As more current flows the metal filament gets hotter, and a hotter metal has a higher resistance, so the current climbs more and more slowly. A component whose resistance changes like this is called non-ohmic.",
      },
      {
        kind: "concept",
        heading: "The semiconductor diode",
        figure: "fig-pr6-04-diode-iv",
        body: "A *semiconductor diode* passes almost *no current* until a small *turn-on voltage*, then the current rises steeply. In the reverse direction it blocks the current, so it is strongly non-ohmic.",
        say: "This is a diode. Along the blue curve the current sits almost flat at zero until the voltage reaches a small turn-on value, roughly 0 point 7 volts for silicon, and then it shoots up steeply. Push the voltage the other way and the diode blocks it, so the current stays near zero in reverse. A diode only lets current through one way, which makes it strongly non-ohmic.",
      },
      {
        kind: "graphpick",
        prompt: "Which graph is the I-V characteristic of an ohmic conductor at constant temperature?",
        xLabel: "V / V",
        yLabel: "I / A",
        options: [
          {
            points: [[0, 0], [1, 1.3], [2, 2.3], [3, 3.0], [4, 3.5]],
            caption: "Curve that flattens as V rises",
          },
          {
            points: [[0, 0], [1, 0.05], [2, 0.1], [2.5, 0.4], [3, 1.6], [3.5, 3.5]],
            caption: "Almost flat, then a steep rise",
          },
          {
            points: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]],
            caption: "Straight line through the origin",
          },
        ],
        correct: 2,
        ask: "An ohmic conductor has a constant resistance, so its I-V line is straight and passes through the origin. Which option looks like that?",
        hints: [
          "A curve that bends is non-ohmic; a straight line is ohmic.",
          "Look for the graph that goes straight from zero with a steady gradient.",
        ],
        explain: "The straight line through the origin is the ohmic conductor, because a constant resistance gives a constant gradient equal to 1 over R.",
      },
      {
        kind: "choice",
        question: "Which one of these components is ohmic?",
        options: [
          "A filament lamp glowing brightly",
          "A fixed metal resistor kept at constant temperature",
          "A semiconductor diode",
          "A lamp filament as it heats up",
        ],
        correct: 1,
        ask: "An ohmic component obeys Ohm's law: the current stays proportional to the voltage because the resistance does not change. Which option keeps a fixed resistance?",
        hints: [
          "A filament lamp and a diode both change their resistance, so they are non-ohmic.",
          "A metal resistor held at constant temperature keeps a fixed resistance.",
        ],
        explain: "The fixed metal resistor at constant temperature is ohmic, because its resistance stays constant, so the current is proportional to the voltage. The lamp and the diode both change resistance, so they are non-ohmic.",
      },
      {
        kind: "choice",
        question: "An ohmic conductor has a resistance R = 6.00 ohms. What is the gradient of its I against V graph?",
        options: [
          "6 A V^-1",
          "0.6 A V^-1",
          "0.06 A V^-1",
          "0.167 A V^-1",
        ],
        correct: 3,
        ask: "For an ohmic conductor the gradient of the I against V line is 1 divided by R. Work out 1 ÷ 6 point 0 0.",
        hints: [
          "The gradient equals 1 over R.",
          "1 ÷ 6 point 0 0 is 0 point 1 6 7.",
        ],
        working: [
          { label: "Formula", latex: "\\text{gradient} = \\dfrac{1}{R}" },
          { label: "Substitute", latex: "\\text{gradient} = \\dfrac{1}{6.00}" },
          { label: "Answer", latex: "\\text{gradient} = 0.167\\ \\text{A V}^{-1}" },
        ],
        explain: "The gradient is 0 point 1 6 7 amperes per volt, because 1 ÷ 6 point 0 0 ohms is 0 point 1 6 7.",
      },
      {
        kind: "choice",
        question: "A diode is in series with resistor X of resistance 22.0 ohms. The voltmeter reads V_x = 22.0 V across X. What is the current in the diode?",
        options: [
          "1.00 A",
          "0.60 A",
          "0.50 A",
          "2.00 A",
        ],
        correct: 0,
        ask: "The diode and resistor X are in series, so the same current flows through both. Find that current from X using I equals V_x divided by R.",
        hints: [
          "In a series circuit the current is the same everywhere.",
          "22 point 0 ÷ 22 point 0 is 1 point 0 0.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{V_x}{R}" },
          { label: "Substitute", latex: "I = \\dfrac{22.0}{22.0}" },
          { label: "Answer", latex: "I = 1.00\\ \\text{A}" },
        ],
        explain: "The current is 1 point 0 0 amperes, because X and the diode are in series, so the current through X, 22 point 0 volts divided by 22 point 0 ohms, is the current in the diode.",
      },
      {
        kind: "insight",
        body: "Read the *shape*: a *straight line* through the origin means *ohmic* (steady R), while any curve means non-ohmic (R changes as the voltage changes).",
        say: "Here is the takeaway. Let the shape of the I-V graph do the talking. A straight line through the origin is ohmic, with a resistance that stays put. Any curve, whether it flattens like a lamp or kinks like a diode, is non-ohmic, telling you the resistance shifts as the voltage changes.",
      },
    ],
  },
];
