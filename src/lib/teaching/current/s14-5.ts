import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, section 5. Grounded in KB Chapter 16 (16.9, 16.10).
// Colour key: wires, resistors, cells and other components = white/grey; the sliding contact and
// wire of the rheostat = white/grey; spoken powers as digits, resistance spoken as "ohms".

export const BOXES: Subconcept[] = [
  {
    id: "t14.5",
    code: "T14.5",
    title: "Resistance of a wire; R = rho l / A",
    blurb: "How length, thickness and material set the resistance of a wire",
    steps: [
      {
        kind: "concept",
        heading: "Longer wire, more resistance",
        body: "The *resistance* of a wire grows with its *length*. A longer wire is a longer path, so the electrons meet more *collisions* with the metal ions on the way through.",
        say: "Resistance depends on how far the electrons have to travel. Make the wire longer and you give the drifting electrons a longer road, so they collide with the vibrating metal ions more often on the way. More collisions means more opposition, so a longer wire of the same metal has a larger resistance. Double the length and you double the resistance.",
      },
      {
        kind: "concept",
        heading: "Wider wire, less resistance",
        body: "The resistance *falls* when the wire has a larger *cross-sectional area*. A wider wire is a wider path, so more electrons can flow side by side and the current passes more easily.",
        say: "Now think about how wide the wire is. A thick wire has a large cross-sectional area, a wider channel for the electrons, so more of them can drift through side by side and the charge passes more easily. That means less opposition. Double the area and you halve the resistance. Resistance is inversely proportional to the area.",
      },
      {
        kind: "concept",
        heading: "Resistivity and R = rho l / A",
        body: "Different materials oppose current by different amounts, set by the *resistivity* rho of the material. A *lower resistivity* means a *better conductor*. Length, area and resistivity combine in one formula.",
        formula: {
          latex: "R = \\dfrac{\\rho\\, l}{A}",
          where: [
            { sym: "\\rho", meaning: "resistivity of the material", unit: "ohm m" },
            { sym: "l", meaning: "length of the wire", unit: "m" },
            { sym: "A", meaning: "cross-sectional area", unit: "m^2" },
          ],
        },
        say: "2 wires of the same size can still have different resistance if they are made of different metals. That property of the material is its resistivity, the Greek letter rho, measured in ohm metres. A low resistivity means a good conductor like copper. Put it all together: resistance equals resistivity times length divided by cross-sectional area. Long and thin and high resistivity all push the resistance up.",
      },
      {
        kind: "concept",
        heading: "Fixed and variable resistors",
        figure: "fig-16-16-variable-resistor",
        body: "A *fixed resistor* has a single value. A *variable resistor*, or *rheostat*, uses a *sliding contact* to change how much of the resistance wire is in the circuit, and so change the resistance.",
        say: "In the picture a long white resistance wire is coiled between 2 terminals, and a grey sliding contact rests on top of it. Current enters at one terminal and leaves through the slider. Slide the contact along and you change the length of wire the current must pass through, so you change the resistance. That is a rheostat, a variable resistor. A fixed resistor, by contrast, is built to give one value that you cannot adjust.",
      },
      {
        kind: "choice",
        question: "A wire has R = 2.5 ohms, length l = 5 m and cross-sectional area A = 2.5 x 10^-7 m^2. Find the resistivity of the material.",
        options: [
          "1.25 x 10^-6 ohm m",
          "1.25 x 10^-7 ohm m",
          "6.25 x 10^-7 ohm m",
          "2.0 x 10^-7 ohm m",
        ],
        correct: 1,
        ask: "Rearrange R = rho l / A to rho = R A / l, then work out 2.5 × 2.5 × 10 to the power negative 7, ÷ 5.",
        hints: [
          "The resistivity is R times A divided by l.",
          "2.5 × 2.5 × 10 to the power negative 7 is 6.25 × 10 to the power negative 7, and dividing by 5 gives 1.25 × 10 to the power negative 7.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{R\\,A}{l}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{2.5 \\times 2.5 \\times 10^{-7}}{5}" },
          { label: "Answer", latex: "\\rho = 1.25 \\times 10^{-7}\\ \\text{ohm m}" },
        ],
        explain: "The resistivity is 1.25 × 10 to the power negative 7 ohm metres, because 2.5 × 2.5 × 10 to the power negative 7 is 6.25 × 10 to the power negative 7, and that divided by 5 is 1.25 × 10 to the power negative 7.",
      },
      {
        kind: "choice",
        question: "An iron wire has a resistance of 6 ohms. It is replaced by a wire of the same metal and thickness but twice the length. What is the new resistance?",
        options: ["3 ohms", "6 ohms", "12 ohms", "24 ohms"],
        correct: 2,
        ask: "Resistance is proportional to length, so doubling the length doubles the resistance. Work out 2 × 6.",
        hints: [
          "R is proportional to l, so if l doubles then R doubles.",
          "2 × 6 is 12.",
        ],
        working: [
          { label: "Formula", latex: "R \\propto l" },
          { label: "Substitute", latex: "R = 2 \\times 6" },
          { label: "Answer", latex: "R = 12\\ \\text{ohms}" },
        ],
        explain: "The new resistance is 12 ohms, because resistance is proportional to length, so doubling the length doubles the resistance from 6 ohms to 12 ohms.",
      },
      {
        kind: "slider",
        prompt: "The same 6 ohm iron wire is instead replaced by one of the same metal and length but double the cross-sectional area. Set the slider to its new resistance, in ohms.",
        min: 0,
        max: 12,
        step: 0.5,
        unit: "ohms",
        start: 0,
        targetMin: 2.5,
        targetMax: 3.5,
        ask: "Resistance is inversely proportional to area, so doubling the area halves the resistance. Work out 6 ÷ 2.",
        hints: [
          "R is proportional to 1 over A, so if A doubles then R halves.",
          "6 ÷ 2 is 3, so slide to 3 ohms.",
        ],
        working: [
          { label: "Formula", latex: "R \\propto \\dfrac{1}{A}" },
          { label: "Substitute", latex: "R = \\dfrac{6}{2}" },
          { label: "Answer", latex: "R = 3\\ \\text{ohms}" },
        ],
        explain: "The new resistance is 3 ohms, because resistance is inversely proportional to area, so doubling the area halves the resistance from 6 ohms to 3 ohms.",
      },
      {
        kind: "choice",
        question: "Four wires are made of the same metal. Which one has the greatest resistance?",
        options: [
          "A short, thick wire",
          "A short, thin wire",
          "A long, thick wire",
          "A long, thin wire",
        ],
        correct: 3,
        ask: "Resistance grows with length and falls with area, so look for the wire that is both longest and thinnest.",
        hints: [
          "A long path gives more resistance, and a thin wire has the smallest area.",
          "The long, thin wire has both the greatest length and the smallest cross-sectional area.",
        ],
        explain: "The long, thin wire has the greatest resistance, because resistance increases with length and increases as the cross-sectional area gets smaller, so longest plus thinnest gives the most resistance.",
      },
      {
        kind: "insight",
        body: "Resistance rises with *length*, falls with *area*, and depends on the material through its *resistivity*, all captured by R = rho l / A. A rheostat just uses a sliding contact to vary the length in the circuit.",
        say: "Here is the idea to keep. 3 things set the resistance of a wire: how long it is, how thick it is, and what it is made of. Longer means more resistance, wider means less, and each material has its own resistivity. That is the whole of R equals rho l over A. And a rheostat is simply this rule in action, sliding a contact to change the length of wire in the circuit and so dial the resistance up or down.",
      },
    ],
  },
];
