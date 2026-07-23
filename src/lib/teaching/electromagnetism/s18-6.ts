import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, section 6. Grounded in KB Chapter 20 (Electromagnetism) section 20.7.
// Conceptual chapter: no calculations, no working blocks, no formula fields.
// Colour key: current (I) and moving charge = blue; force (F) = yellow; magnet N pole = red,
// S pole = blue; field lines = grey; coil, soft-iron core, split-ring commutator, brushes,
// axle and magnet body = white/grey. Spoken numbers as digits.

export const BOXES: Subconcept[] = [
  {
    id: "t18.6",
    code: "T18.6",
    title: "The d.c. motor",
    blurb: "How a coil, a commutator and a pair of brushes turn electricity into steady spin",
    steps: [
      {
        kind: "concept",
        heading: "Turning electricity into spin",
        figure: "fig-20-12-dc-motor",
        body: "A *d.c. motor* changes *electrical energy* into *rotation*. It works by using the *turning effect* on a current-carrying coil sitting between the poles of a magnet.",
        say: "In the picture a white rectangular coil is wound on a grey soft-iron cylinder that spins on a central axle. It sits between 2 magnet poles, a red north on one side and a blue south on the other. A battery drives a blue current round the coil, and because a current-carrying coil in a magnetic field feels a turning effect, the coil rotates. That is the whole point of a motor: it turns electrical energy into steady spinning motion.",
      },
      {
        kind: "concept",
        heading: "The split-ring commutator",
        body: "Left alone, the coil would only rock back and forth. A *split-ring commutator* fixes this: it *reverses the current* in the coil every *half-turn*, so the turning force always pushes the coil the *same way*.",
        say: "Think about what happens without help. Once the coil passes its upright point, the same current would try to turn it back again, and it would just rock. The split-ring commutator is a ring cut into 2 halves that turns with the coil. Every half-turn it swaps which half touches which brush, and so it flips the direction of the current in the coil. Flipping the current flips the force at just the right moment, so the push is always in the same sense and the coil keeps spinning one way.",
      },
      {
        kind: "concept",
        heading: "Brushes and the soft-iron core",
        body: "2 *carbon brushes* press lightly on the commutator to *carry current* into the spinning coil. The coil is wound on a *soft-iron cylinder*, which concentrates the magnetic field and makes the turning effect stronger.",
        say: "Current cannot flow along a wire into something that is spinning, so 2 carbon brushes are held against the rotating commutator. They rub along it and feed current into the coil while it turns. The coil itself is wound onto a grey soft-iron cylinder. Soft iron concentrates the magnetic field through the coil, which strengthens the force on it and makes the motor turn more powerfully.",
      },
      {
        kind: "concept",
        heading: "Getting past the upright point",
        figure: "fig-20-13-motor-cycle",
        body: "When the coil lies *horizontal* the turning effect is a *maximum*. When it stands *vertical* the gaps in the split ring meet the brushes, so the current is briefly cut off, but the coil's momentum carries it past.",
        say: "This figure shows 2 cases. On the left the coil lies flat, horizontal, the blue current is flowing and the yellow force gives the biggest turning effect. On the right the coil stands upright, vertical, and here the gaps between the 2 halves of the split ring line up with the brushes. For that instant the circuit is broken and no current flows, so there is no force at all. The coil does not stop, though, because it is already moving and its own momentum carries it through the upright point. Just past it the commutator reconnects with the current reversed, and the push starts again.",
      },
      {
        kind: "match",
        prompt: "Match each part of a d.c. motor to the job it does.",
        pairs: [
          { left: "Split-ring commutator", right: "Reverses the current every half-turn" },
          { left: "Carbon brushes", right: "Carry current to the spinning coil" },
          { left: "Soft-iron cylinder", right: "Concentrates the field and strengthens the turn" },
          { left: "Coil", right: "Feels the turning effect and rotates" },
        ],
        ask: "Go part by part: one part flips the current, one part feeds current in, one part strengthens the field, and one part actually turns.",
        hints: [
          "The brushes rub on the commutator, and the commutator is the ring that is split into 2 halves.",
          "The soft iron is there to boost the field, while the coil is the piece that spins.",
        ],
        explain: "The split-ring commutator reverses the current every half-turn, the carbon brushes carry current to the coil, the soft-iron cylinder concentrates the field to strengthen the turn, and the coil is the part that feels the turning effect and rotates.",
      },
      {
        kind: "choice",
        question: "What is the job of the split-ring commutator in a d.c. motor?",
        options: [
          "To hold the coil firmly onto the axle",
          "To make the magnet stronger",
          "To reverse the current in the coil every half-turn so it keeps turning one way",
          "To store charge while the motor spins",
        ],
        correct: 2,
        ask: "Without it the coil would only rock back and forth. Ask what has to change every half-turn to keep the push in the same direction.",
        hints: [
          "The turning force depends on the direction of the current in the coil.",
          "If you flip the current every half-turn, the force always pushes the coil the same way.",
        ],
        explain: "Its job is to reverse the current in the coil every half-turn, so the turning force always acts in the same sense and the coil keeps spinning one way instead of rocking.",
      },
      {
        kind: "choice",
        question: "As the coil reaches the vertical position, the gaps in the split ring line up with the brushes. How does the coil keep going?",
        options: [
          "The current stays on and pushes it even harder",
          "Its momentum carries it past while the current is briefly cut off",
          "The magnet pulls it round the rest of the way",
          "The brushes give it an extra push",
        ],
        correct: 1,
        ask: "At the upright point the circuit is broken for an instant, so there is no force. Think about what keeps a moving object going when nothing is pushing it.",
        hints: [
          "When the gaps meet the brushes the current, and so the force, drops to 0 for a moment.",
          "A moving coil keeps moving on its own momentum until the current switches back on.",
        ],
        explain: "At the vertical the gaps cut the current off, so there is no turning force for an instant. The coil keeps going because of its own momentum, and just past the upright point the current switches back on reversed.",
      },
      {
        kind: "order",
        prompt: "Put the stages of one motor cycle in order, starting from the coil lying flat.",
        items: [
          "The coil lies horizontal and the current gives it the maximum turning effect",
          "The coil rotates towards the vertical position",
          "At the vertical the gaps in the split ring meet the brushes and the current is cut off",
          "The coil's momentum carries it past the vertical",
          "The commutator reconnects with the current reversed, so the force keeps it turning the same way",
        ],
        ask: "Start where the push is strongest, follow the coil up to the upright point, then think about what carries it through and what happens just after.",
        hints: [
          "The turning effect is biggest when the coil is horizontal, and the current is cut off when it is vertical.",
          "Momentum carries the coil through the upright point, and then the commutator flips the current so the push continues the same way.",
        ],
        explain: "The push is greatest with the coil horizontal, it turns towards the vertical, the gaps cut the current off at the upright point, momentum carries it past, and then the commutator reconnects the current reversed so the coil keeps turning the same way.",
      },
      {
        kind: "open",
        prompt: "Explain how the split-ring commutator keeps a d.c. motor turning in one direction.",
        figure: "fig-20-13-motor-cycle",
        modelAnswer: "The turning force on the coil depends on the direction of the current in it. Without help, the same current would push the coil back once it passed the upright point, so it would only rock. The split-ring commutator turns with the coil and, every half-turn, swaps which half touches each brush. This reverses the current in the coil at the moment it passes the vertical. Reversing the current reverses the force, so the coil is always pushed in the same sense and keeps rotating one way.",
        marks: [
          "The direction of the turning force depends on the direction of the current in the coil.",
          "The commutator reverses the current in the coil every half-turn.",
          "Reversing the current keeps the force acting the same way, so the coil turns continuously in one direction.",
        ],
        ask: "Link 3 things: what the force direction depends on, what the commutator does every half-turn, and why that keeps the spin in one direction.",
      },
      {
        kind: "insight",
        body: "A d.c. motor spins faster with more *turns* on the coil, a larger *current*, or a *stronger* magnet, and a *rheostat* sets the current and so controls the speed.",
        say: "Here is the takeaway. The motor turns harder and faster if you add more turns to the coil, push a bigger current through it, or use a stronger magnet, and the soft-iron core helps too. In practice you control the speed with a rheostat, a variable resistor that sets how much current flows, so a bigger current means a faster motor.",
      },
    ],
  },
];
