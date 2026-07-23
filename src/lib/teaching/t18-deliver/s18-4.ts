import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, section 4. Grounded in KB Chapter 20 (Electromagnetism) section 20.4.
// Conceptual chapter: NO working blocks, NO formula fields. Spoken numbers as digits.
// Colour key: force F = yellow, magnetic field B = grey (N pole red, S pole blue),
// current I / current dot-cross = blue, wires and magnet body = white/grey.
// Fleming's LEFT hand: thumb (Force) = yellow, first finger (Field) = grey, second finger (Current) = blue.

export const BOXES: Subconcept[] = [
  {
    id: "t18.4",
    code: "T18.4",
    title: "Fleming's left-hand rule",
    blurb: "Using your left hand to find the direction of the motor force",
    steps: [
      {
        kind: "concept",
        heading: "3 quantities at right angles",
        figure: "fig-20-09-motor-effect-experiment",
        body: "When a current-carrying wire sits in a magnetic field, 3 things point in 3 different directions, each at *right angles* to the other 2: the *force* F on the wire, the *magnetic field* B, and the *current* I.",
        say: "In this experiment a straight wire hangs between the poles of a magnet. The magnet's north pole is drawn red and its south pole blue, and the grey field runs across the gap from north to south. The blue current flows along the white wire. Switch the current on and the wire swings aside, pushed by a yellow force. The key point is that these 3 directions, the force, the field and the current, all lie at 90 degrees to one another.",
      },
      {
        kind: "concept",
        heading: "Point your left-hand fingers",
        figure: "fig-20-08-flemings-lhr",
        body: "*Fleming's left-hand rule* links the 3 directions. Hold the *thumb*, first finger and second finger of your *left hand* so they are all at right angles, and each one stands for a quantity.",
        say: "Hold up your left hand and stick out the thumb, first finger and second finger so they point in 3 different directions, all at right angles like the corner of a box. In the picture the yellow thumb is the force, the grey first finger is the field, and the blue second finger is the current. It has to be the left hand, not the right.",
      },
      {
        kind: "concept",
        heading: "thuMb, First, seCond",
        body: "Read the fingers in order: the *thuMb* gives the *Motion* or force, the *First finger* gives the Field (pointing north to south), and the seCond finger gives the conventional Current. Knowing any 2 lets you find the third.",
        say: "There is a neat memory trick hidden in the words. The thuMb has an M in it, and M is for Motion, the force. The First finger is for Field, running from north to south. The seCond finger has a C in it, and C is for Current, the conventional current. Set any 2 of them and your hand shows you the third automatically.",
      },
      {
        kind: "concept",
        heading: "Reversing a direction",
        body: "The force *reverses* if you reverse the *current* on its own, or the *field* on its own. But if you reverse both together, the force is unchanged.",
        say: "Watch what flipping a direction does. Turn the current the other way and the force flips to the opposite direction. Turn the field the other way instead and again the force flips. But reverse both at the same time and the 2 flips cancel out, so the force ends up pointing exactly where it started.",
      },
      {
        kind: "choice",
        question: "On Fleming's left-hand rule, which quantity does the thumb point along?",
        figure: "fig-20-08-flemings-lhr",
        options: ["The magnetic field", "The current", "The force on the wire", "The voltage"],
        correct: 2,
        ask: "Remember the memory trick built into the words: the thuMb hides an M, and M stands for one of the quantities.",
        hints: [
          "thuMb has an M in it, for Motion.",
          "Motion means the movement of the wire, which is caused by the force.",
        ],
        explain: "The thumb points along the force. The trick is that thuMb contains an M for Motion, the first finger is the Field, and the seCond finger is the Current.",
      },
      {
        kind: "choice",
        question: "A wire carries current straight out of the page. The magnetic field points to the left. Using Fleming's left-hand rule, which way is the force on the wire?",
        figure: "fig-20-08-flemings-lhr",
        options: ["Upward", "Downward", "Into the page", "To the right"],
        correct: 1,
        ask: "Point your left first finger to the left for the field, and your second finger out of the page toward you for the current. See where the thumb ends up.",
        hints: [
          "First finger to the left, second finger pointing out at you, both at right angles.",
          "With the fingers set that way, the thumb points down.",
        ],
        explain: "The force is downward. With the left first finger pointing left (field) and the second finger pointing out of the page (current), the thumb points down, which is the force.",
      },
      {
        kind: "choice",
        question: "In a motor effect experiment the magnetic field is reversed, but the current is kept the same. What happens to the force on the wire?",
        options: ["It stays exactly the same", "It becomes zero", "It doubles in size", "It reverses its direction"],
        correct: 3,
        ask: "Reversing just one of the 2 directions, the field or the current, flips the force. Reversing both would cancel out.",
        hints: [
          "Only 1 direction has been reversed here, the field.",
          "Reversing the field on its own flips the force to the opposite direction.",
        ],
        explain: "The force reverses its direction. Reversing the field alone, or the current alone, flips the force; only reversing both together would leave it unchanged.",
      },
      {
        kind: "match",
        prompt: "Match each finger of the left hand to the quantity it shows in Fleming's rule.",
        pairs: [
          { left: "Thumb", right: "Force (motion)" },
          { left: "First finger", right: "Magnetic field" },
          { left: "Second finger", right: "Current" },
        ],
        ask: "Use the letters hidden in the words: thuMb for Motion, First for Field, seCond for Current.",
        hints: [
          "The thumb is the odd one out: it shows the movement, the force.",
          "First finger and Field both start with F; that leaves the second finger for the current.",
        ],
        explain: "The thumb shows the force (motion), the first finger shows the field, and the second finger shows the current. The capital letters in thuMb, First and seCond spell out Motion, Field and Current.",
      },
      {
        kind: "spoterror",
        prompt: "One line below is wrong. Find it.",
        lines: [
          "To find the force on a current-carrying wire we use Fleming's right-hand rule.",
          "The thumb, first finger and second finger are held at right angles to each other.",
          "The first finger points along the field, from north to south.",
          "The second finger points along the conventional current.",
        ],
        errorLine: 0,
        ask: "Fleming has 2 rules, one for each hand. Which hand gives the motor force on a wire?",
        hints: [
          "One hand is used for the motor effect, the other for the generator effect.",
          "The motor force uses the LEFT hand, not the right.",
        ],
        explain: "Line 1 is wrong: the motor force is found with Fleming's LEFT-hand rule, not the right-hand rule. The other 3 lines correctly describe the fingers.",
      },
      {
        kind: "insight",
        body: "Fleming's *left-hand rule* turns a tricky 3-dimensional problem into a hand gesture: set any *2* of force, field and current, and your *thumb* and fingers reveal the *third*.",
        say: "Here is what to hold on to. Whenever a current sits in a magnetic field, you do not have to picture the whole thing in your head. Just raise your left hand, line up 2 of the 3 directions you already know, and the remaining finger or thumb points straight to the answer. It is one of the most useful hand tricks in all of physics.",
      },
    ],
  },
];
