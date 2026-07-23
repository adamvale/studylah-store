import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 10. Grounded in KB Chapter 04 (Forces) sections on free-body and vector diagrams.

export const BOXES: Subconcept[] = [
  {
    id: "t3.10",
    code: "T3.10",
    title: "Free-body and vector diagrams",
    blurb: "Drawing every force on one object, and adding forces to a scale",
    steps: [
      {
        kind: "concept",
        heading: "Free-body diagram",
        figure: "fig-04-16-freebody-crate",
        body: "A *free-body diagram* shows *all* the forces acting on *one* chosen object, so you can find the *resultant* and decide whether the forces are balanced.",
        say: "Look at the crate in the diagram. We have drawn it as a simple box, and every coloured arrow is one force acting on it. The green arrow pointing up is the normal force from the floor, the pink arrow pointing down is the weight, the yellow sideways arrow is the applied push, and the short blue arrow against it is friction. A free-body diagram gathers all of those forces onto the one object, so you can add them up and see if they balance.",
      },
      {
        kind: "concept",
        heading: "Length and direction",
        body: "On a free-body diagram, draw the object as a simple *box* and one *arrow* for each force. The arrow's *length* shows the force's size, and the way it *points* shows the force's direction.",
        say: "Each arrow does 2 jobs at once. Its length tells you how big the force is, so a longer arrow means a stronger force, and the direction it points tells you which way that force acts. Draw one arrow per force, all starting from the box, and you have a clear picture of everything pushing and pulling on that object.",
      },
      {
        kind: "concept",
        heading: "Common forces",
        figure: "fig-04-17-force-types",
        body: "The forces you meet are the *applied force*, the *normal force* (always at 90 degrees to the surface), tension, thrust, *upthrust*, friction, air resistance and *weight*.",
        say: "This chart lays out the usual forces with a labelled arrow for each. The applied force is any push or pull you give. The normal force always points straight out of the surface, at 90 degrees to it. Tension is the pull in a string, thrust drives something forward, and upthrust is the upward push from a fluid, the buoyancy that floats a boat. Friction and air resistance, which is drag, oppose motion, and weight points down toward the ground.",
      },
      {
        kind: "concept",
        heading: "Vector diagrams",
        figure: "fig-04-22-vector-diagrams",
        body: "To add forces, draw them *head to tail* to a *scale*. In *equilibrium* the resultant is 0 and the arrows form a *closed* figure; if not, the figure stays open and the resultant runs from the tail of the first arrow to the head of the last.",
        say: "In this diagram the force arrows are joined head to tail, each one starting where the last one ended, and all drawn to the same scale. In the top half the arrows come right back to the start, so they form a closed shape. That closed figure means the resultant is zero and the object is in equilibrium. In the bottom half the arrows do not close, and the gap from the tail of the first arrow to the head of the last is the resultant force.",
      },
      {
        kind: "order",
        prompt: "Put these steps for drawing a free-body diagram in order.",
        items: [
          "Choose the single object to study",
          "Draw it as a simple box",
          "Draw one arrow for each force acting on that object",
          "Match each arrow's length to the force's size and label it",
        ],
        ask: "Think about what you must decide before you can draw a single arrow. Put the 4 steps in order.",
        hints: [
          "You cannot draw forces until you have picked the one object they act on.",
          "The box comes first, then one arrow per force, then the lengths and labels.",
        ],
        explain: "First choose the single object, then draw it as a box, then add one arrow for every force acting on it, and finally match each arrow's length to the size of its force and label it.",
      },
      {
        kind: "classify",
        prompt: "A person pushes a crate along the floor. Sort each force by whether it belongs on a free-body diagram of the CRATE.",
        bins: ["Belongs", "Does not belong"],
        items: [
          { text: "weight of the crate", bin: 0 },
          { text: "normal force from the floor on the crate", bin: 0 },
          { text: "friction on the crate", bin: 0 },
          { text: "push the crate exerts back on the person", bin: 1 },
          { text: "push the crate exerts on the floor", bin: 1 },
        ],
        ask: "A free-body diagram shows only forces acting ON the crate. Any force the crate exerts on something else belongs on that other object. Tap each force and drop it in its bin.",
        hints: [
          "The weight, the normal force and friction all act on the crate itself.",
          "A force the crate exerts on the person or the floor is an action-reaction partner that acts on a different object, so it does not belong.",
        ],
        explain: "The weight, the normal force and friction all act on the crate, so they belong. The push the crate exerts back on the person, and the push it exerts on the floor, act on other objects, so they never belong on the crate's free-body diagram.",
      },
      {
        kind: "choice",
        question: "A box is pulled with 12 N east and 9 N north at the same time. These 2 forces are at right angles. Find the resultant force.",
        options: ["15 N", "21 N", "3 N", "10.5 N"],
        correct: 0,
        ask: "The 2 forces are at 90 degrees, so use Pythagoras. Work out the square root of 12 squared plus 9 squared. Which option is that?",
        hints: [
          "For 2 forces at right angles, the resultant is the square root of the sum of their squares.",
          "12 squared is 144 and 9 squared is 81. 144 plus 81 is 225, and the square root of 225 is 15.",
        ],
        working: [
          { label: "Formula", latex: "F = \\sqrt{F_1^2 + F_2^2}" },
          { label: "Substitute", latex: "F = \\sqrt{12^2 + 9^2}" },
          { label: "Answer", latex: "F = 15\\ \\text{N}" },
        ],
        explain: "The resultant is 15 newtons, because 12 squared plus 9 squared is 225, and the square root of 225 is 15. This is a 3, 4, 5 right-angled triangle scaled up by 3.",
      },
      {
        kind: "match",
        prompt: "Match each force to what it is.",
        pairs: [
          { left: "Normal force", right: "Push at 90 degrees to the surface" },
          { left: "Upthrust", right: "Upward push from a fluid" },
          { left: "Tension", right: "Pull in a stretched string" },
          { left: "Air resistance", right: "Drag that opposes motion" },
        ],
        ask: "Think about which way each force points and where it comes from. Match each force to its description.",
        hints: [
          "The normal force always leaves the surface at a right angle, while upthrust is the buoyancy push from a fluid.",
          "Tension is a pull along a string, and air resistance is the drag that acts against motion.",
        ],
        explain: "The normal force pushes at 90 degrees to the surface, upthrust is the upward push from a fluid, tension is the pull in a stretched string, and air resistance is the drag that opposes motion.",
      },
      {
        kind: "choice",
        question: "In a vector diagram of the forces on an object, the arrows are drawn head to tail and form a closed figure. What does this tell you?",
        options: ["The object is in equilibrium", "The resultant is the largest force", "The object is speeding up", "One force is missing"],
        correct: 0,
        ask: "A closed figure means the arrows return to the start, so the resultant has no length. What does a resultant of 0 mean for the object?",
        hints: [
          "If the head-to-tail arrows close up, there is no gap left over, so the resultant is 0.",
          "A resultant of 0 means the forces are balanced.",
        ],
        explain: "The object is in equilibrium. A closed figure means the arrows come back to the start, so the resultant is 0 and the forces are balanced.",
      },
      {
        kind: "insight",
        body: "A *free-body diagram* shows the forces on *one* object only. Never draw a force's action-reaction *partner*, because that partner acts on a *different* object.",
        say: "Hold on to one rule. A free-body diagram is about a single object, and it shows only the forces acting on that object. Never add the action-reaction partner of a force, because that partner always acts on a different object. Keep the picture to one object at a time and it stays clear.",
      },
    ],
  },
];