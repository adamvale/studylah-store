import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, section 3. Grounded in KB Chapter 20 (Electromagnetism) section 20.3.
// Conceptual: NO working, NO formula. Figure colours follow the house key: force/thrust F = yellow,
// magnetic field B = grey, current I and current dot/cross = blue, magnet N pole = red, S pole = blue,
// wires and magnet body = white/grey. Spoken numbers and angles as digits ("90 degrees").

export const BOXES: Subconcept[] = [
  {
    id: "t18.3",
    code: "T18.3",
    title: "Force on a current-carrying conductor",
    blurb: "Why a wire carrying current is pushed sideways by a magnet",
    steps: [
      {
        kind: "concept",
        heading: "A wire in a field feels a force",
        body: "A current-carrying conductor placed in a *magnetic field* feels a sideways *force* that pushes it out of the field. This is called the *motor effect*, or the *catapult effect*.",
        say: "Run a current through a wire that sits between the poles of a magnet, and the wire is shoved sideways, straight out of the gap. It is not pulled by gravity and the magnet is not tugging on the metal itself. The current makes the wire jump. We call this push the motor effect, or the catapult effect, because the wire is flung out like a stone from a catapult.",
      },
      {
        kind: "concept",
        heading: "2 fields add on one side, cancel on the other",
        figure: "fig-20-06-catapult-field",
        body: "The wire's own field and the magnet's field *add* on one side, making it *strong*, and *cancel* on the other side, leaving a weak spot called a *neutral point*. The wire is pushed from the strong side toward the weak side.",
        say: "In the picture the magnet's field is drawn in grey, running from the red north pole across to the blue south pole. The wire's own circular field wraps around it. On one side the 2 fields point the same way and add up, so the field there is strong and the lines bunch together. On the other side they point in opposite ways and cancel, leaving a gap we call the neutral point. Nature pushes the wire away from the crowded strong side toward the empty weak side, and a yellow arrow F marks that force.",
      },
      {
        kind: "concept",
        heading: "Bigger current or stronger magnet, bigger push",
        body: "The force grows if you use a larger *current* or a stronger magnetic *field*. Making the length of wire in the field longer also increases the *force*.",
        say: "How hard is the wire pushed? Turn up the current and the push grows. Swap in a stronger magnet and the push grows again. Feed a longer stretch of wire through the gap and, once more, the force is bigger. More current, a stronger field, more wire in the field: each one turns up the force.",
      },
      {
        kind: "concept",
        heading: "Angle matters: perpendicular for maximum",
        figure: "fig-20-07-force-orientation",
        body: "The force is a *maximum* when the conductor is *perpendicular* to the field, and it drops to *zero* when the conductor lies *parallel* to the field.",
        say: "The angle between the wire and the field decides everything. This figure has 2 cases. On the left the wire crosses the grey field at 90 degrees, perpendicular to it, and the yellow force arrow is at its longest: the force is a maximum. On the right the wire lies along the field, parallel to it, and there is no force arrow at all: the force is zero. So aim the wire across the field, not along it, to get the strongest push.",
      },
      {
        kind: "choice",
        question: "A wire carrying a current sits between the poles of a magnet and is pushed sideways. What causes this push?",
        figure: "fig-20-06-catapult-field",
        options: [
          "The current heats the wire until it bends",
          "The magnet pulls on the metal of the wire itself",
          "The wire's own magnetic field interacts with the magnet's field",
          "Gravity pulls the wire down through the gap",
        ],
        correct: 2,
        ask: "A current always makes its own magnetic field. Think about what happens when that field meets the magnet's field in the gap.",
        hints: [
          "The push is not heat, not gravity, and not the magnet grabbing the metal.",
          "The wire's field and the magnet's field combine, adding on one side and cancelling on the other.",
        ],
        explain: "The wire carries a current, so it has its own magnetic field. That field and the magnet's field combine, adding on one side and cancelling on the other, and the wire is pushed from the strong side to the weak side.",
      },
      {
        kind: "choice",
        question: "A straight wire carries a current between the poles of a magnet. In which position is the force on the wire a MAXIMUM?",
        figure: "fig-20-07-force-orientation",
        options: [
          "When the wire is perpendicular to the field",
          "When the wire is parallel to the field",
          "When the wire is at 45 degrees to the field",
          "The force is the same at every angle",
        ],
        correct: 0,
        ask: "Compare the 2 cases in the diagram: the wire across the field at 90 degrees, and the wire lying along the field.",
        hints: [
          "The force is zero when the wire lies parallel to the field.",
          "The push is strongest when the wire cuts straight across the field at 90 degrees.",
        ],
        explain: "The force is a maximum when the wire is perpendicular to the field, that is at 90 degrees to it. When the wire lies parallel to the field the force falls to zero.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it increases the force on the current-carrying wire.",
        bins: ["Increases the force", "Does not increase the force"],
        items: [
          { text: "Turn up the current", bin: 0 },
          { text: "Use a stronger magnet", bin: 0 },
          { text: "Put a longer length of wire in the field", bin: 0 },
          { text: "Paint the wire a brighter colour", bin: 1 },
          { text: "Lay the wire parallel to the field", bin: 1 },
        ],
        ask: "The force grows with more current, a stronger field, or more wire in the field. Anything that leaves those unchanged, or lines the wire up along the field, does not increase it.",
        hints: [
          "A larger current, a stronger magnet, and more wire in the field all make the push bigger.",
          "The colour of the wire does nothing, and lying parallel to the field drops the force toward zero.",
        ],
        explain: "A larger current, a stronger magnet, and a longer length of wire in the field all increase the force. Painting the wire changes nothing, and setting it parallel to the field reduces the force to zero rather than increasing it.",
      },
      {
        kind: "choice",
        question: "What name is given to the force that pushes a current-carrying wire out of a magnetic field?",
        options: [
          "The induction effect",
          "The heating effect",
          "The grip effect",
          "The motor, or catapult, effect",
        ],
        correct: 3,
        ask: "It is the same effect that makes an electric motor spin, and it flings the wire out like a stone.",
        hints: [
          "It is not about heat, and not about gripping.",
          "The push drives motors, and flings the wire out like a catapult.",
        ],
        explain: "The push on a current-carrying wire in a magnetic field is the motor effect, also called the catapult effect. It is the effect that makes electric motors turn.",
      },
      {
        kind: "insight",
        body: "A current-carrying wire is pushed sideways because its *field* and the magnet's *field* combine, strong on one side and weak on the other; the push is largest when the wire is *perpendicular* to the field and *zero* when it is parallel.",
        say: "Here is the idea to keep. A wire carrying a current makes its own magnetic field. Set it in a magnet's field and the 2 combine, crowding on one side and cancelling on the other, so the wire is catapulted from strong to weak. Turn up the current or the magnet and the push grows. Aim the wire across the field at 90 degrees for the biggest force, and along the field for none at all.",
      },
    ],
  },
];
