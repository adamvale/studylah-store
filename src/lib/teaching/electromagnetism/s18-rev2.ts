import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, Revision 2. Checkpoint over KB Chapter 20,
// sections t18.4 to t18.6: Fleming's left-hand rule, the force on charged
// particles and the turning coil, and the d.c. motor. Question-only.
// Conceptual: no working, no formulas.

export const BOXES: Subconcept[] = [
  {
    id: "t18.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: Fleming's left-hand rule, the turning coil and the d.c. motor",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "In Fleming's left-hand rule, which finger points along the magnetic field?",
        options: ["The thumb", "The first finger", "The second finger", "The palm"],
        correct: 1,
        ask: "Recall the saying: thuMb is Motion, First finger is Field, seCond finger is Current. Which finger stands for the field?",
        hints: [
          "The 3 are held at right angles on the LEFT hand.",
          "First finger and Field both start with the letter F.",
        ],
        explain: "The first finger points along the magnetic field, from N to S. The thumb gives the force (motion) and the second finger gives the conventional current.",
      },
      {
        kind: "choice",
        question: "A wire carries current OUT of the page in a magnetic field that points to the left. Using Fleming's left-hand rule, in which direction is the force on the wire?",
        figure: "fig-20-08-flemings-lhr",
        options: ["To the right", "To the left", "Upward", "Downward"],
        correct: 3,
        ask: "Point your left first finger to the left for the field and your second finger out of the page for the current. Where does your thumb point?",
        hints: [
          "Line up the field along the first finger and the current along the second finger.",
          "With current out of the page and the field to the left, the thumb points downward.",
        ],
        explain: "The force is downward. With the field to the left along the first finger and the current out of the page along the second finger, the thumb of the left hand points down.",
      },
      {
        kind: "choice",
        question: "A current-carrying wire feels a force in a magnetic field. If only the current is reversed, what happens to the force?",
        options: ["It reverses direction", "It stays exactly the same", "It grows twice as large", "It falls to zero"],
        correct: 0,
        ask: "Swap the direction of the second finger on your left hand while keeping the first finger fixed. Which way does the thumb turn?",
        hints: [
          "Reversing the current OR the field flips the force.",
          "Only if you reverse BOTH the current and the field does the force stay the same.",
        ],
        explain: "The force reverses. Reversing either the current or the field on its own flips the direction of the force; reversing both together would leave it unchanged.",
      },
      {
        kind: "choice",
        question: "What is the job of the split-ring commutator in a d.c. motor?",
        figure: "fig-20-12-dc-motor",
        options: [
          "It carries current from the battery to the brushes",
          "It keeps the current in the coil perfectly steady",
          "It reverses the current in the coil every half-turn",
          "It stores charge to smooth out the motor",
        ],
        correct: 2,
        ask: "Think about what has to happen to the current just as the coil passes the vertical, so the coil keeps turning the same way.",
        hints: [
          "The carbon brushes, not the commutator, carry current in from the battery.",
          "Reversing the current each half-turn keeps the turning couple acting the same way round.",
        ],
        explain: "The split-ring commutator reverses the current in the coil every half-turn. This keeps the couple pushing the coil the same way round, so the motor spins continuously.",
      },
      {
        kind: "choice",
        question: "A proton and an electron both travel to the right through a magnetic field that points into the page. In which directions are they deflected?",
        figure: "fig-20-10-charged-particles",
        options: [
          "Both are deflected upward",
          "Both are deflected downward",
          "The proton downward and the electron upward",
          "The proton upward and the electron downward",
        ],
        correct: 3,
        ask: "A moving positive charge is a conventional current to the right; a moving electron is a conventional current to the left. Apply the left-hand rule to each.",
        hints: [
          "For the proton the conventional current is to the right, so its force is upward.",
          "The electron's conventional current is the opposite way, so it deflects the opposite way.",
        ],
        explain: "The proton deflects upward and the electron downward. The proton's conventional current is to the right, giving an upward force, and the electron, whose conventional current runs the opposite way, is pushed the opposite way.",
      },
      {
        kind: "order",
        prompt: "Put the stages of one turn of a d.c. motor's coil into the correct order.",
        items: [
          "The coil lies horizontal and the brushes press on the split ring",
          "Current flows, so the couple gives the coil its maximum turning effect",
          "The coil reaches the vertical, where the gaps in the ring meet the brushes",
          "The current is cut off, but the coil's momentum carries it past the vertical",
          "The commutator reconnects with the current reversed, so the coil turns on the same way",
        ],
        ask: "Start with the coil flat, where the turning effect is largest, and follow it round to the vertical and beyond.",
        hints: [
          "The turning effect is greatest when the coil is horizontal and the current is flowing.",
          "At the vertical the gaps cut the current off, and momentum plus the reversed current carry the coil on.",
        ],
        explain: "The coil starts horizontal with the brushes on the ring, the couple gives maximum turning, the coil reaches the vertical where the gaps cut the current, momentum carries it past, and the commutator reconnects with the current reversed so it keeps turning the same way.",
      },
      {
        kind: "match",
        prompt: "Match each finger of Fleming's left hand to the quantity it represents.",
        pairs: [
          { left: "Thumb", right: "Force (motion)" },
          { left: "First finger", right: "Field, from N to S" },
          { left: "Second finger", right: "Conventional current" },
        ],
        ask: "Use the saying: thuMb is Motion, First finger is Field, seCond finger is Current. Pair each finger with its quantity.",
        hints: [
          "The thumb and the word motion share a link, and the force acts along the motion.",
          "First finger goes with Field, second finger with Current.",
        ],
        explain: "The thumb gives the force or motion, the first finger the field from N to S, and the second finger the conventional current. All 3 are held at right angles.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by its effect on a d.c. motor's coil.",
        bins: ["Makes the coil turn faster", "Reverses the direction it turns"],
        items: [
          { text: "using more turns of wire", bin: 0 },
          { text: "using a larger current", bin: 0 },
          { text: "using a stronger magnet", bin: 0 },
          { text: "winding the coil on a soft-iron core", bin: 0 },
          { text: "swapping the battery connections", bin: 1 },
          { text: "swapping the magnet poles over", bin: 1 },
        ],
        ask: "A bigger force gives a faster spin, while flipping the current or the field flips which way the coil turns. Drop each change in its bin.",
        hints: [
          "More turns, more current, a stronger magnet and a soft-iron core all increase the force.",
          "Reversing the current or reversing the field on its own reverses the turning direction.",
        ],
        explain: "More turns, more current, a stronger magnet and a soft-iron core all raise the force, so the coil turns faster. Swapping the battery or the magnet poles reverses the current or the field, so the coil turns the other way.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of the left-hand rule and reversing the force.",
        segments: [
          "Fleming's ",
          " hand rule finds the force on a current in a field. Reversing the current or the field ",
          " the force, but reversing ",
          " of them leaves it unchanged.",
        ],
        bank: ["left", "right", "reverses", "keeps", "both", "one"],
        answer: ["left", "reverses", "both"],
        ask: "Recall which hand gives the motor force, what one reversal does, and what happens when 2 things are reversed together.",
        hints: [
          "It is the LEFT hand that gives the motor effect force.",
          "One reversal flips the force; reversing both the current and the field cancels out.",
        ],
        explain: "Fleming's left-hand rule gives the force. Reversing the current or the field reverses the force, but reversing both of them leaves it unchanged.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this account of a d.c. motor is wrong. Find it.",
        lines: [
          "A d.c. motor spins because of the motor effect force on its coil.",
          "The split-ring commutator keeps the current in the coil steady.",
          "Carbon brushes carry the current from the battery to the commutator.",
          "At the vertical the coil's momentum carries it past the dead spot.",
        ],
        errorLine: 1,
        ask: "Check the claim about the split ring. Does it hold the current steady, or does it do something to the current each half-turn?",
        hints: [
          "Ask what would happen after half a turn if the current never changed direction.",
          "The commutator reverses the current every half-turn so the coil keeps turning the same way.",
        ],
        explain: "The wrong line says the commutator keeps the current steady. In fact it reverses the current in the coil every half-turn, which is what keeps the coil spinning the same way.",
      },
      {
        kind: "open",
        prompt: "Explain how the split-ring commutator keeps a d.c. motor turning in the same direction.",
        figure: "fig-20-13-motor-cycle",
        modelAnswer: "As the coil turns, the couple would push each side up or down and, after half a turn, that would try to send the coil back the other way. The split-ring commutator turns with the coil and swaps which brush each half of the ring touches every half-turn. This reverses the current in the coil each half-turn, so each side always feels a force the correct way round and the coil keeps turning the same way. At the vertical the gaps in the ring meet the brushes and the current is cut off, but the coil's momentum carries it past this dead spot.",
        marks: [
          "The commutator reverses the current in the coil every half-turn.",
          "This keeps the couple, and so the turning, in the same direction.",
          "At the vertical the current is cut off but momentum carries the coil past.",
        ],
        ask: "Think about what would happen without the commutator after half a turn, and what the split ring does to the current each half-turn.",
      },
      {
        kind: "open",
        prompt: "Explain why a rectangular current-carrying coil in a magnetic field experiences a turning effect.",
        figure: "fig-20-11-turning-coil",
        modelAnswer: "The 2 long sides of the coil carry current in opposite directions. In the magnetic field each side feels a force from the motor effect, given by Fleming's left-hand rule. Because the currents are opposite, one side is pushed up and the other is pushed down. These 2 equal and opposite forces act on opposite sides of the coil, so they form a couple that makes the coil rotate. The turning effect is larger with more turns, a larger current or a stronger magnet.",
        marks: [
          "The 2 sides carry current in opposite directions.",
          "Each side feels a force (motor effect / left-hand rule), one up and one down.",
          "The equal and opposite forces form a couple that turns the coil.",
        ],
        ask: "Consider the direction of the current in each long side and the force the left-hand rule gives on each. What do 2 opposite forces on opposite sides do?",
      },
    ],
  },
];
