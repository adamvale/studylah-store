import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 9. Grounded in KB Chapter 04 (Forces) on Newton's third law.

export const BOXES: Subconcept[] = [
  {
    id: "t3.9",
    code: "T3.9",
    title: "Newton's third law",
    blurb: "Why every force comes with an equal and opposite partner",
    steps: [
      {
        kind: "concept",
        heading: "Newton's third law",
        body: "*Newton's third law* says that if body A exerts a force on body B, then body B exerts a force on body A that is *equal* in magnitude and *opposite* in direction. This matched pair is called an *action-reaction pair*.",
        say: "Newton's third law is about pairs. If body A pushes or pulls on body B, then body B pushes or pulls back on body A. That partner force is exactly equal in size and points in exactly the opposite direction. We call these 2 forces an action-reaction pair, and neither one can exist without the other.",
      },
      {
        kind: "concept",
        heading: "A ball on the floor",
        figure: "fig-04-13-newton-third-floor",
        body: "A ball rests on the floor. The floor pushes *up* on the ball with the *normal force*, and the ball pushes *down* on the floor with an equal and opposite force.",
        say: "Look at the ball sitting on the floor. The green arrow pointing up from the floor into the ball is the normal force, the floor pushing back on the ball. The pink arrow pointing down from the ball into the floor is the ball pressing on the floor. The 2 arrows are the same length, one up and one down, because the forces are equal in size and opposite in direction.",
      },
      {
        kind: "concept",
        heading: "The ball and the Earth",
        figure: "fig-04-14-newton-third-earth",
        body: "The Earth pulls the ball *down* with the force of *gravity*. At the same instant the ball pulls the Earth *up* with a force that is equal in magnitude and opposite in direction.",
        say: "Now zoom out to the ball and the whole Earth. The long pink arrow pointing down from the ball toward the Earth's centre is gravity, the Earth pulling the ball. The green arrow pointing up from the Earth toward the ball is the ball pulling the Earth. It surprises people, but those 2 pulls are equal in size. The ball tugs the Earth upward just as hard as the Earth tugs the ball downward.",
      },
      {
        kind: "concept",
        heading: "The 4 features of a pair",
        body: "Every action-reaction pair has 4 features: the forces come in a *pair*, they are *equal* in magnitude, they point in *opposite* directions, and they act on 2 *different* objects.",
        say: "Every action-reaction pair passes the same 4 checks. First, the forces always come as a pair, never alone. Second, they are equal in magnitude. Third, they point in opposite directions. And fourth, the most important one, they act on 2 different objects, never on the same object.",
      },
      {
        kind: "choice",
        question: "A book rests on a table. The table pushes up on the book with a force of 6 N. By Newton's third law, what force does the book exert on the table?",
        options: ["6 N downward", "6 N upward", "0 N", "60 N downward"],
        correct: 0,
        ask: "The reaction is equal in magnitude and opposite in direction, and it acts back on the table. Which option is that?",
        hints: [
          "The pair is equal in magnitude, so the size is still 6 newtons.",
          "The table pushes up on the book, so the book pushes down on the table.",
        ],
        explain: "The book pushes down on the table with 6 newtons, because the reaction force is equal in magnitude and opposite in direction to the table's 6 newton push up.",
      },
      {
        kind: "classify",
        prompt: "Decide whether each description is a true action-reaction pair.",
        bins: ["Action-reaction pair", "Not a pair"],
        items: [
          { text: "The floor pushes a ball up; the ball pushes the floor down", bin: 0 },
          { text: "A swimmer pushes the water back; the water pushes the swimmer forward", bin: 0 },
          { text: "The Earth pulls a ball down; the floor pushes the same ball up", bin: 1 },
          { text: "A ball's weight pulls it down; the floor's push holds the same ball up", bin: 1 },
        ],
        ask: "A true pair has the 2 forces acting on 2 different objects. If both forces act on the same object, it is not a pair. Tap each one and drop it in its bin.",
        hints: [
          "In a real pair, A acts on B and B acts back on A.",
          "If both forces act on the very same object, they cannot be an action-reaction pair.",
        ],
        explain: "The floor-and-ball and swimmer-and-water cases each have A acting on B and B acting back on A, so they are action-reaction pairs. The other 2 both have their forces acting on the same ball, so they are not pairs.",
      },
      {
        kind: "match",
        prompt: "Match each action force to its reaction force.",
        pairs: [
          { left: "The Earth pulls the ball down", right: "The ball pulls the Earth up" },
          { left: "A foot pushes down on the ground", right: "The ground pushes up on the foot" },
          { left: "A swimmer pushes the water backward", right: "The water pushes the swimmer forward" },
          { left: "A rocket pushes hot gas downward", right: "The gas pushes the rocket upward" },
        ],
        ask: "For each action, the reaction acts back on the other object, equal in magnitude and opposite in direction. Match each left force to its partner.",
        hints: [
          "Swap the 2 objects around: if A pushes B, the reaction is B pushing A.",
          "The reaction always points the opposite way to the action.",
        ],
        explain: "In each pair, the reaction acts back on the other object, equal in size and opposite in direction: the ball pulls the Earth up, the ground pushes the foot up, the water pushes the swimmer forward, and the gas pushes the rocket upward.",
      },
      {
        kind: "cloze",
        prompt: "Complete the statement of Newton's third law.",
        segments: [
          "If body A exerts a force on body B, then body B exerts a force on body A that is ",
          " in magnitude and ",
          " in direction. The 2 forces always act on ",
          " objects.",
        ],
        bank: ["equal", "opposite", "different", "same", "zero"],
        answer: ["equal", "opposite", "different"],
        ask: "Recall the 4 features of a pair: same size, opposite way, and acting on 2 separate bodies. Drag a word into each blank.",
        hints: [
          "The 2 forces are matched in size and point against each other.",
          "The last blank is the feature that keeps the pair from cancelling: they act on 2 separate bodies.",
        ],
        explain: "The reaction is equal in magnitude and opposite in direction, and the 2 forces act on different objects, which is why they never cancel.",
      },
      {
        kind: "insight",
        body: "Because a *third-law* pair acts on 2 *different* objects, the 2 forces never cancel. Whether a single object is balanced depends only on the forces acting on *that* object, which is the *first law*, where the forces act on 1 body.",
        say: "Keep the 2 laws apart. Newton's third law pairs act on 2 different objects, so they can never cancel each other out. The first law is a different question entirely: it looks at just 1 object and asks whether the forces acting on that one object are balanced. So do not add up an action and its reaction and expect zero, because they are not even on the same body.",
      },
    ],
  },
];