import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, section 2. Grounded in KB Chapter 21 (Electromagnetic Induction) section 21.2.
// Figure colours follow the topic key: a magnet's north pole = red, south pole = blue; the induced
// current = blue; magnetic field lines = grey; the coil and wires = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t19.2",
    code: "T19.2",
    title: "Direction of the induced e.m.f.: Lenz's law",
    blurb: "Which way the induced current flows, and the energy rule behind it",
    steps: [
      {
        kind: "concept",
        heading: "The induced current fights the change",
        figure: "fig-21-03-lenz-law",
        body: "*Lenz's law* says the *induced current* always flows in the direction whose *magnetic effect* opposes the *change* that is producing it.",
        say: "Faraday's law told us how big the induced e.m.f. is; Lenz's law tells us which way it drives the current. The rule is that the induced current always sets up a magnetic effect that fights the very change causing it. In the figure a red north pole of a bar magnet is pushed toward a white coil, and the coil responds in a way that resists what the magnet is doing. Nature never lets you get the current for free.",
      },
      {
        kind: "concept",
        heading: "A pole moving in is pushed back",
        figure: "fig-21-03-lenz-law",
        body: "When the *north pole approaches* the coil, the *near end* of the coil becomes an induced *north pole*, so like poles *repel* and the coil pushes back against the incoming magnet.",
        say: "Look at the left of the figure. The red north pole is moving toward the white coil, so the induced current flows to make the near end of the coil an induced north pole, drawn in red. 2 north poles repel, so the coil pushes back and opposes the magnet coming in. That resistance is exactly what Lenz's law predicts.",
      },
      {
        kind: "concept",
        heading: "A pole moving out is pulled back",
        figure: "fig-21-03-lenz-law",
        body: "When the *north pole leaves*, the near end becomes an induced *south pole*, so unlike poles *attract* and the coil tries to *pull the magnet back*, again opposing the motion.",
        say: "Now the right of the figure. The red north pole is being pulled away, so the induced current reverses and the near end of the coil becomes an induced south pole, drawn in blue. A north pole and a south pole attract, so the coil tugs the magnet back and resists it leaving. Whether the magnet comes or goes, the coil always opposes the movement.",
      },
      {
        kind: "concept",
        heading: "Why the rule must be true",
        body: "Lenz's law follows from the *conservation of energy*. You must do *work* against the opposition, and that work becomes the *electrical energy* of the induced current. If the current instead *helped* the motion, you would be getting energy from nothing.",
        say: "There is a deep reason behind all of this. Because the coil pushes back, you have to do work to keep the magnet moving, and that work is exactly what turns into the electrical energy of the induced current. Energy is just being converted, not created. Imagine the opposite, that the coil helped the magnet along. The magnet would speed up on its own and still make a current, giving you energy out of nothing. That would break conservation of energy, so the induced current must always oppose the change.",
      },
      {
        kind: "choice",
        question: "Lenz's law states that an induced current flows in the direction that:",
        figure: "fig-21-03-lenz-law",
        options: [
          "increases the change that produces it",
          "is always clockwise in the coil",
          "opposes the change that produces it",
          "has no magnetic effect at all",
        ],
        correct: 2,
        ask: "Lenz's law is about the current fighting whatever is causing it. Which option describes opposing the change?",
        hints: [
          "The induced current always resists the motion or change of field that makes it.",
          "The magnetic effect of the current works against the change producing it, not with it.",
        ],
        explain: "The induced current flows so its magnetic effect opposes the change that produces it. This is Lenz's law, and it is why you always have to do work to keep inducing a current.",
      },
      {
        kind: "choice",
        question: "A north pole is pushed toward one end of a coil. What does the near end of the coil become, and what happens?",
        options: [
          "An induced north pole, so it repels the magnet",
          "An induced south pole, so it attracts the magnet",
          "A neutral end, so nothing happens",
          "An induced south pole, so it repels the magnet",
        ],
        correct: 0,
        ask: "By Lenz's law the coil must oppose the magnet coming in. Which pole on the near end would push an approaching north pole away?",
        hints: [
          "To oppose a magnet moving in, the coil must push it back rather than pull it in.",
          "Like poles repel, so a north pole meeting an induced north pole is pushed away.",
        ],
        explain: "The near end becomes an induced north pole, so like poles repel and the coil pushes the incoming magnet back. Opposing the approach is exactly what Lenz's law requires.",
      },
      {
        kind: "choice",
        question: "Why must the induced current oppose the motion of the magnet, rather than help it?",
        options: [
          "Because the coil has no resistance",
          "Because the magnet is always a north pole",
          "Because the field lines are grey",
          "Because a helping current would create energy from nothing",
        ],
        correct: 3,
        ask: "Think about where the electrical energy comes from. What rule would be broken if the current pushed the magnet along?",
        hints: [
          "You do work against the opposition, and that work becomes the current's electrical energy.",
          "If the current helped the motion, energy would appear from nowhere, breaking conservation of energy.",
        ],
        explain: "If the induced current helped the magnet move, the magnet would gain speed and still deliver a current, producing energy from nothing. That breaks the conservation of energy, so the current must oppose the change.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this account of Lenz's law is wrong. Find it.",
        lines: [
          "A magnet is pushed toward a coil connected in a circuit.",
          "The changing field through the coil induces a current.",
          "The induced current helps the magnet's motion, pulling it in faster.",
          "So you would have to do work against the coil to keep pushing.",
        ],
        errorLine: 2,
        ask: "By Lenz's law the induced current must fight the change, not assist it. Which line has the current helping the magnet?",
        hints: [
          "The induced current always opposes the motion producing it, never speeds it up.",
          "Line 4 only makes sense if the coil resists the magnet, which contradicts line 3.",
        ],
        explain: "Line 3 is wrong. The induced current opposes the magnet's motion, so the coil pushes back and you must do work to keep the magnet moving. A current that helped the motion would break the conservation of energy.",
      },
      {
        kind: "insight",
        body: "One rule covers every case: the coil always *opposes the change*. A pole moving *in* is repelled, a pole moving *out* is attracted, and either way you do *work* that becomes the induced current's energy.",
        say: "Keep hold of this single idea. Whatever the magnet does, the coil does the opposite to resist it. Push a pole in and the coil repels it; pull a pole out and the coil attracts it back. Because the coil always fights the change, you always have to do work, and that work is what becomes the electrical energy of the induced current. Lenz's law is really just conservation of energy in disguise.",
      },
    ],
  },
];
