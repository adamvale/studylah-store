import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, section 6. Grounded in KB Chapter 16 section 16.11.
// Figure colours follow the carry-over key: graph lines on an I-V graph = blue; axes = white/grey;
// components (lamps, diodes, meters) = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t14.6",
    code: "T14.6",
    title: "Ohm's law and I-V characteristics",
    blurb: "Reading the current-voltage graphs of an ohmic conductor, a filament lamp and a diode",
    steps: [
      {
        kind: "concept",
        heading: "The ohmic conductor",
        figure: "fig-16-12-iv-ohmic",
        body: "An *ohmic conductor* at constant temperature has a current that is *proportional* to the p.d. across it, so the ratio V/I stays *constant*. This rule is *Ohm's law*.",
        say: "This graph plots current up the side against p.d. along the bottom, on white axes. The blue line is dead straight and passes through the origin, the point 0, 0. A straight line through the origin means the current rises in step with the p.d., doubling the voltage doubles the current. Because they rise together, the ratio of p.d. to current, which is the resistance, never changes. That constant ratio is Ohm's law.",
      },
      {
        kind: "concept",
        heading: "The filament lamp",
        figure: "fig-16-13-iv-filament",
        body: "A *filament lamp* does not obey Ohm's law. Its I-V graph is a *curve* that bends over, because the filament grows hot and its *resistance rises* as more current flows.",
        say: "Here the blue line starts straight from the origin but soon bends over, flattening as the p.d. grows. As the current increases the metal filament heats up, its ions vibrate harder, and its resistance climbs. A bigger resistance means the current rises more and more slowly, so the line curves over instead of staying straight. The ratio of p.d. to current is no longer constant.",
      },
      {
        kind: "concept",
        heading: "The diode",
        figure: "fig-16-14-iv-diode",
        body: "A *diode* conducts in one *direction only*. In the *forward* direction its resistance is low and current flows; in the *reverse* direction its resistance is high and almost no current flows.",
        say: "This blue line shows current rising once the p.d. is applied the forward way, where the diode has a low resistance. Turn the p.d. the other way and the line sits flat along the axis at almost zero, because in reverse the diode has a very high resistance and blocks the current. So a diode acts like a one-way gate for current.",
      },
      {
        kind: "graphpick",
        prompt: "Pick the I-V graph of an ohmic conductor kept at constant temperature.",
        xLabel: "p.d. V / V",
        yLabel: "current I / A",
        options: [
          {
            points: [
              [0, 0],
              [1, 4],
              [2, 7],
              [3, 9],
              [4, 10],
              [5, 10.5],
            ],
            caption: "Curve that bends over and flattens",
          },
          {
            points: [
              [0, 0],
              [1, 1],
              [2, 2.5],
              [3, 4.5],
              [4, 7],
              [5, 10],
            ],
            caption: "Curve that gets steeper",
          },
          {
            points: [
              [0, 0],
              [1, 2],
              [2, 4],
              [3, 6],
              [4, 8],
              [5, 10],
            ],
            caption: "Straight line through the origin",
          },
          {
            points: [
              [0, 3],
              [5, 10],
            ],
            caption: "Straight line starting above the origin",
          },
        ],
        correct: 2,
        ask: "An ohmic conductor has current proportional to p.d., so equal steps of voltage give equal steps of current. Which graph is a straight line that also passes through 0, 0?",
        hints: [
          "Proportional means a straight line, not a curve that bends.",
          "Proportional also means the line must go through the origin, starting at 0, 0.",
        ],
        explain: "The straight line through the origin is correct. A constant ratio of p.d. to current gives a straight line, and passing through 0, 0 shows the current is proportional to the p.d., which is Ohm's law.",
      },
      {
        kind: "choice",
        question: "For an ohmic conductor kept at constant temperature, which statement is Ohm's law?",
        options: [
          "The current is proportional to the p.d., so the resistance V/I stays constant",
          "The current is proportional to the p.d., so the resistance keeps rising",
          "The p.d. is zero however large the current",
          "The resistance is proportional to the current",
        ],
        correct: 0,
        ask: "Ohm's law links current and p.d. in the simplest way. If one doubles, what happens to the other, and what does that do to the ratio V/I?",
        hints: [
          "Proportional means doubling the p.d. doubles the current.",
          "If current and p.d. rise together, their ratio, the resistance, does not change.",
        ],
        explain: "Ohm's law says the current is proportional to the p.d. at constant temperature, so the ratio V divided by I, the resistance, stays constant. That is why the graph is a straight line through the origin.",
      },
      {
        kind: "choice",
        question: "A diode is connected in a circuit. Which statement best describes how it behaves?",
        figure: "fig-16-15-diode-direction",
        options: [
          "It has the same low resistance in both directions",
          "It has the same high resistance in both directions",
          "It conducts well in reverse but blocks the forward direction",
          "It conducts in the forward direction only, blocking current the other way",
        ],
        correct: 3,
        ask: "A diode is a one-way component. Think about which direction has a low resistance and lets current through, and which has a high resistance that stops it.",
        hints: [
          "In the forward direction the resistance is low, so current flows.",
          "In the reverse direction the resistance is very high, so almost no current flows.",
        ],
        explain: "A diode conducts in the forward direction only, where its resistance is low, and blocks current in the reverse direction, where its resistance is very high. It acts as a one-way gate for current.",
      },
      {
        kind: "classify",
        prompt: "Sort each component by the shape of its I-V graph.",
        bins: ["Straight line through the origin", "Curve that bends over", "Current in one direction only"],
        items: [
          { text: "Ohmic conductor at constant temperature", bin: 0 },
          { text: "Fixed resistor at constant temperature", bin: 0 },
          { text: "Filament lamp", bin: 1 },
          { text: "Diode", bin: 2 },
        ],
        ask: "Match each component to its graph: a constant resistance gives a straight line, a rising resistance bends the curve over, and a one-way component conducts in a single direction. Tap each one into its bin.",
        hints: [
          "An ohmic conductor and a fixed resistor at constant temperature both keep the same resistance, so both give a straight line through the origin.",
          "The filament lamp heats up and its resistance rises, so its curve bends over; the diode conducts only one way.",
        ],
        explain: "An ohmic conductor and a fixed resistor at constant temperature give a straight line through the origin, because their resistance is constant. A filament lamp gives a curve that bends over, because its resistance rises as it heats. A diode passes current in one direction only.",
      },
      {
        kind: "open",
        prompt: "Explain why the I-V graph of a filament lamp curves over instead of staying a straight line.",
        modelAnswer: "As the current increases, the filament heats up. The hotter metal has more strongly vibrating ions, so the electrons collide with them more often and the resistance rises. A larger resistance means the current increases less for each extra volt, so the graph bends over rather than staying straight. The filament lamp therefore does not obey Ohm's law.",
        marks: [
          "A larger current makes the filament hotter.",
          "The higher temperature raises the resistance (more collisions with vibrating ions).",
          "A rising resistance makes the current increase more slowly, so the line curves over.",
        ],
        ask: "Think about what happens to the filament's temperature as the current grows, how that changes its resistance, and what a changing resistance does to the shape of the line.",
      },
      {
        kind: "insight",
        body: "The *shape* of an I-V graph tells you the component: a *straight line through the origin* is ohmic, a *curve that bends over* is a heating filament, and a line that only rises *one way* is a diode.",
        say: "Hold on to one idea. You can name a component just from the shape of its current-voltage graph. A straight line through the origin means a constant resistance, an ohmic conductor obeying Ohm's law. A curve that bends over means a resistance that climbs as things heat up, like a filament lamp. And a line that only rises in one direction means a diode, the one-way gate for current.",
      },
    ],
  },
];
