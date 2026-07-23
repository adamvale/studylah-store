import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, section 3. Grounded in KB Chapter 19 (Magnetism) sections 19.5 and 19.6.
// Conceptual: no calculations, no formula fields, no working blocks. Spoken counts as digits.
// Figure colour key: north pole N = red, south pole S = blue, the bar and the solenoid = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t17.3",
    code: "T17.3",
    title: "Magnetising and demagnetising",
    blurb: "How to turn a bar into a magnet, and how to take that magnetism away",
    steps: [
      {
        kind: "concept",
        heading: "Magnetising lines up the domains",
        body: "To *magnetise* a material you make its tiny *domains* line up the *same way*, so their little fields add together instead of cancelling. Do that and the bar behaves as one magnet, with a north pole at one end and a south pole at the other.",
        say: "Remember that a magnetic material is made of countless tiny magnets grouped into domains. In an unmagnetised bar these domains point every which way, so their fields cancel out. To magnetise the bar you simply line the domains up so they all face the same way. Once they agree, their fields add together and the whole bar acts as a single magnet.",
      },
      {
        kind: "concept",
        heading: "The solenoid method",
        figure: "fig-19-06-solenoid-dc",
        body: "A coil carrying a steady *direct current* makes a *bar-magnet field* down its middle. A *soft* material, like soft iron, becomes a temporary magnet. A hard material, like steel, becomes a permanent one.",
        say: "In the picture a white steel bar sits inside a coil of wire called a solenoid, carrying a steady direct current. The current makes a magnetic field just like a bar magnet, with a red north pole at one end and a blue south pole at the other. If the bar is soft iron it becomes a magnet only while the current flows, a temporary magnet. If it is hard steel it stays magnetised after the current stops, a permanent magnet.",
      },
      {
        kind: "concept",
        heading: "Which end is north",
        figure: "fig-19-06-solenoid-dc",
        body: "Look straight into one *end* of the solenoid. If the current runs *anticlockwise* that end is a *north* pole; if it runs clockwise that end is a south pole. This is the right-hand grip rule, with the thumb pointing to the north pole.",
        say: "To find the poles, look end-on into the solenoid. If the current appears to flow anticlockwise as you look at it, that end is a red north pole. If it flows clockwise, that end is a blue south pole. A neat shortcut is the right-hand grip rule: curl the fingers of your right hand the way the current flows round the coil, and your thumb points to the north pole.",
      },
      {
        kind: "concept",
        heading: "Stroking, and taking magnetism away",
        figure: "fig-19-07-stroking",
        body: "You can also *magnetise* by *stroking*: single-touch strokes one pole along the bar one way only, and double-touch strokes outward from the *centre* with 2 magnets. To demagnetise, use an alternating current solenoid and slowly withdraw the magnet, or hammer or heat it.",
        say: "The figure shows stroking. On one side a single magnet strokes the bar in one direction only, over and over, always lifting away at the far end, which is single-touch. On the other side 2 magnets stroke outward from the centre toward the ends, which is double-touch. To undo magnetism you scramble the domains again: place the magnet in a solenoid carrying an alternating current and draw it slowly out, so the field keeps reversing and leaves the domains random. Hammering it or heating it strongly does the same job.",
      },
      {
        kind: "choice",
        question: "A bar of soft iron is held inside a solenoid that carries a steady direct current. What kind of magnet does it become?",
        options: ["A permanent magnet", "A temporary magnet", "It stays completely unmagnetised", "A non-magnetic material"],
        correct: 1,
        ask: "Soft materials magnetise easily but do not hold on to it. Does it keep its magnetism after the current stops?",
        hints: [
          "Soft iron only acts as a magnet while the current is flowing.",
          "A magnet that lasts only while the current flows is a temporary magnet.",
        ],
        explain: "The soft iron becomes a temporary magnet, because soft materials magnetise while the current flows but lose it almost at once when the current stops. Steel, being hard, would become a permanent magnet instead.",
      },
      {
        kind: "choice",
        question: "You look straight into one end of a d.c. solenoid and the current runs anticlockwise. Which pole is that end?",
        options: ["A south pole", "A neutral point with no pole", "A north pole", "It changes pole every second"],
        correct: 2,
        ask: "Use the rule for the ends of a solenoid: anticlockwise current seen end-on marks one particular pole.",
        hints: [
          "Anticlockwise current viewed end-on gives a north pole, clockwise gives a south pole.",
          "Curl your right hand the way the current flows and the thumb points to north.",
        ],
        explain: "That end is a north pole, because an anticlockwise current viewed end-on makes a north pole. The right-hand grip rule agrees, with the thumb pointing to the north pole.",
      },
      {
        kind: "choice",
        question: "You want to demagnetise a steel magnet using a solenoid that carries an alternating current. What should you do?",
        options: ["Slowly withdraw the magnet from the solenoid", "Switch the current off the instant it is inside", "Push it in fast and leave it at the centre", "Cool the magnet in a freezer first"],
        correct: 0,
        ask: "The alternating current makes the field keep reversing. To leave the domains random you must move the magnet away from the field gradually.",
        hints: [
          "As you draw the magnet out slowly, the reversing field keeps flipping the domains.",
          "Withdrawing it slowly leaves the domains pointing every which way, so it is demagnetised.",
        ],
        explain: "You slowly withdraw the magnet from the solenoid. The alternating current reverses the field many times a second, and drawing the magnet out gradually leaves the domains pointing at random, so the magnetism is gone.",
      },
      {
        kind: "classify",
        prompt: "Sort each action by whether it magnetises a material or demagnetises a magnet.",
        bins: ["Magnetises a material", "Demagnetises a magnet"],
        items: [
          { text: "Place it in a solenoid carrying a direct current", bin: 0 },
          { text: "Stroke it one way with a single pole", bin: 0 },
          { text: "Double-touch it with 2 magnets outward from the centre", bin: 0 },
          { text: "Slowly withdraw it from an alternating current solenoid", bin: 1 },
          { text: "Hammer it hard", bin: 1 },
          { text: "Heat it strongly", bin: 1 },
        ],
        ask: "Ask whether each action lines the domains up the same way, which magnetises, or scrambles them at random, which demagnetises. Tap each one and drop it in its bin.",
        hints: [
          "A d.c. solenoid and stroking both line the domains up, so they magnetise.",
          "An a.c. solenoid, hammering and heating all jumble the domains, so they demagnetise.",
        ],
        explain: "A d.c. solenoid, single-touch stroking and double-touch stroking all line the domains up, so they magnetise. Withdrawing slowly from an a.c. solenoid, hammering and heating all scramble the domains, so they demagnetise.",
      },
      {
        kind: "order",
        prompt: "Put the steps for demagnetising a magnet with an alternating current solenoid into the right order.",
        items: [
          "Pass an alternating current through the solenoid",
          "Place the magnet inside the solenoid, in the reversing field",
          "The rapidly reversing field keeps flipping the domains back and forth",
          "Slowly withdraw the magnet far away from the solenoid",
          "The domains are left pointing at random, so the bar is demagnetised",
        ],
        ask: "Start by switching on the alternating current, then work through where the magnet goes, what the field does, and how it ends up.",
        hints: [
          "The current and the magnet must be in place before the field can act on the domains.",
          "Withdrawing the magnet slowly comes near the end, and the random domains are the final result.",
        ],
        explain: "First the alternating current flows, then the magnet sits inside the reversing field, which keeps flipping the domains. Drawing the magnet slowly away leaves the domains random, so it ends up demagnetised.",
      },
      {
        kind: "insight",
        body: "It all comes down to the *domains*: line them up the *same way* and you *magnetise*, jumble them at random and you demagnetise.",
        say: "Here is the one idea to carry away. Everything in this section is really about the domains. Line them up so they all point the same way, with a direct current, stroking, and you magnetise the bar. Scramble them back to random, with an alternating current, a hammer or heat, and you demagnetise it. Magnetising and demagnetising are just ordering and disordering the same tiny magnets.",
      },
    ],
  },
];
