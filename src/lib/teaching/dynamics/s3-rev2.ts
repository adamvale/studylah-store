import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, Revision 2. Question-only checkpoint over sections t3.6 to t3.10:
// forces and Newton's three laws. Grounded in KB Chapter 04 (Forces).

export const BOXES: Subconcept[] = [
  {
    id: "t3.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: forces and Newton's three laws",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A resultant force can change an object's motion in several ways. Which of these is NOT one of those ways?",
        options: [
          "Change the object's mass",
          "Start it moving from rest",
          "Slow it down",
          "Change its direction",
        ],
        correct: 0,
        ask: "A force acts on the motion, not on the amount of matter. Which option changes something other than how the object moves?",
        hints: [
          "A force can start motion, speed it up, slow it down, or change its direction.",
          "The mass is the amount of matter; a push or pull does not change it.",
        ],
        explain: "Changing the mass is not an effect of a force. A resultant force changes motion in 4 ways: it can start an object moving, speed it up, slow it down, or change its direction.",
      },
      {
        kind: "choice",
        question: "A box is pushed forward with 25 N while friction drags back with 13 N. The box has a mass of 4 kg. Find its acceleration.",
        figure: "fig-04-11-we-box-push",
        options: ["3.0 m/s^2", "9.5 m/s^2", "12 m/s^2", "0.33 m/s^2"],
        correct: 0,
        ask: "First combine the forces along the line: 25 minus 13 gives the resultant. Then divide by the 4 kilogram mass.",
        hints: [
          "The resultant force is 25 minus 13, which is 12 newtons.",
          "12 divided by 4 is 3.0, in metres per second squared.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{F}{m}" },
          { label: "Substitute", latex: "a = \\dfrac{25 - 13}{4}" },
          { label: "Answer", latex: "a = 3.0\\ \\text{m/s}^2" },
        ],
        explain: "The resultant force is 25 minus 13, which is 12 newtons, so the acceleration is 12 divided by 4, giving 3.0 metres per second squared.",
      },
      {
        kind: "choice",
        question: "A swimmer pushes the water backward and is pushed forward in return. Which statement about this Newton's third law pair is correct?",
        options: [
          "They are equal in size, opposite in direction, and act on 2 different objects",
          "They act on the same object and cancel out",
          "The forward force on the swimmer is larger than the backward push on the water",
          "They act on the same object and add together",
        ],
        correct: 0,
        ask: "Think about which object each force acts on. A third law pair never sits on the same object.",
        hints: [
          "Newton's third law forces are always equal in size and opposite in direction.",
          "One force acts on the water and the other acts on the swimmer, so they are on 2 different objects and cannot cancel.",
        ],
        explain: "The 2 forces are equal in size, opposite in direction, and act on 2 different objects: one on the water, one on the swimmer. Because they act on different objects, they never cancel.",
      },
      {
        kind: "choice",
        question: "A resultant force of 18 N acts on a mass of 6 kg. Find its acceleration.",
        options: ["3.0 m/s^2", "0.33 m/s^2", "24 m/s^2", "108 m/s^2"],
        correct: 0,
        ask: "Acceleration is the resultant force divided by the mass, so work out 18 divided by 6. Which option matches?",
        hints: [
          "Rearrange F equals m a into a equals F divided by m.",
          "18 divided by 6 is 3.0, in metres per second squared.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{F}{m}" },
          { label: "Substitute", latex: "a = \\dfrac{18}{6}" },
          { label: "Answer", latex: "a = 3.0\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is 3.0 metres per second squared, because 18 newtons divided by 6 kilograms is 3.0 metres per second squared.",
      },
      {
        kind: "choice",
        question: "A ball rolls across the floor at constant velocity. What is true about the forces on it?",
        figure: "fig-04-05-ball-constant-velocity",
        options: [
          "The resultant force is 0, so the driving force equals the friction",
          "There is a large resultant force pushing it forward",
          "The friction on the ball is 0",
          "The driving force is bigger than the friction",
        ],
        correct: 0,
        ask: "Constant velocity means the motion is not changing. Think about what the forces must add up to for that.",
        hints: [
          "A change in velocity always needs a resultant force.",
          "If the velocity stays constant, the resultant force is 0, so the forward force balances the friction.",
        ],
        explain: "At constant velocity the resultant force is 0, so the driving force forward is exactly balanced by the friction backward. A resultant force is only needed to change velocity, never to keep it steady.",
      },
      {
        kind: "slider",
        prompt: "A tugboat pulls a raft with 12 N east while a current pushes it with 9 N north. These forces are at right angles. Set the slider to the size of the resultant force, in N.",
        min: 0,
        max: 30,
        step: 0.1,
        unit: "N",
        start: 0,
        targetMin: 14.9,
        targetMax: 15.1,
        ask: "The 2 forces are at right angles, so combine them with Pythagoras: square each force, add, then take the square root.",
        hints: [
          "12 squared is 144 and 9 squared is 81, and 144 plus 81 is 225.",
          "The square root of 225 is 15, so slide to 15 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F = \\sqrt{F_x^{\\,2} + F_y^{\\,2}}" },
          { label: "Substitute", latex: "F = \\sqrt{12^2 + 9^2}" },
          { label: "Answer", latex: "F = 15\\ \\text{N}" },
        ],
        explain: "The 2 forces are at right angles, so the resultant is the square root of 12 squared plus 9 squared, which is the square root of 225, giving 15 newtons.",
      },
      {
        kind: "match",
        prompt: "Match each of Newton's laws to the statement that describes it.",
        pairs: [
          { left: "Newton's first law", right: "An object stays at rest or at constant velocity unless a resultant force acts" },
          { left: "Newton's second law", right: "The resultant force equals mass times acceleration" },
          { left: "Newton's third law", right: "Every force has an equal and opposite force acting on a different object" },
        ],
        ask: "The first law is about staying the same, the second links force to acceleration, and the third is about force pairs. Match each one.",
        hints: [
          "Only the first law mentions staying at rest or at constant velocity.",
          "F equals m a is the second law; equal and opposite pairs on 2 objects is the third law.",
        ],
        explain: "Newton's first law is about staying at rest or constant velocity unless a resultant force acts. The second law says resultant force equals mass times acceleration. The third law says every force has an equal and opposite partner on a different object.",
      },
      {
        kind: "classify",
        prompt: "Sort each situation by whether the forces on the object are balanced or unbalanced.",
        bins: ["Balanced, resultant 0", "Unbalanced, resultant not 0"],
        items: [
          { text: "A car parked on a level road", bin: 0 },
          { text: "A skydiver falling at constant velocity", bin: 0 },
          { text: "A car speeding up along a road", bin: 1 },
          { text: "A ball being slowed by friction", bin: 1 },
        ],
        ask: "If the motion is steady, at rest or at constant velocity, the forces balance to 0. If the motion is changing, they do not. Tap each one and drop it in its bin.",
        hints: [
          "Steady motion, whether stopped or at constant velocity, means a zero resultant force.",
          "Speeding up or slowing down is a change in motion, so the resultant force is not 0.",
        ],
        explain: "The parked car and the skydiver at constant velocity both have balanced forces, so the resultant is 0. The car speeding up and the ball slowing down are changing their motion, so their forces are unbalanced.",
      },
      {
        kind: "cloze",
        prompt: "Complete the statement of Newton's third law.",
        segments: [
          "When object A pushes on object B, object B pushes back on A with a force that is",
          "in size and",
          "in direction. The 2 forces act on",
          "objects, so they never cancel.",
        ],
        bank: ["equal", "opposite", "different", "the same", "larger"],
        answer: ["equal", "opposite", "different"],
        ask: "The first 2 blanks describe how the pair compares in size and in direction. The last blank explains why they cannot cancel.",
        hints: [
          "A third law pair is equal in size and opposite in direction.",
          "The 2 forces act on 2 different objects, which is why they never cancel.",
        ],
        explain: "The reaction force is equal in size and opposite in direction to the action force, and the 2 forces act on different objects, so they never cancel.",
      },
      {
        kind: "tiles",
        prompt: "A 4 kg mass accelerates at 3 m/s^2. Build the working line that gives the resultant force F.",
        tiles: ["F =", "4", "\\times", "3", "=", "12", "N", "m/s^2"],
        answer: ["F =", "4", "\\times", "3", "=", "12", "N"],
        ask: "The resultant force is mass times acceleration, so set up 4 times 3.",
        hints: [
          "Use F equals m times a.",
          "4 times 3 is 12, and force is measured in newtons.",
        ],
        working: [
          { label: "Formula", latex: "F = ma" },
          { label: "Substitute", latex: "F = 4 \\times 3" },
          { label: "Answer", latex: "F = 12\\ \\text{N}" },
        ],
        explain: "The resultant force is 12 newtons, because 4 kilograms times 3 metres per second squared is 12 newtons.",
      },
      {
        kind: "open",
        prompt: "Explain why the two forces in a Newton's third law pair never cancel each other out.",
        modelAnswer: "A Newton's third law pair is equal in size and opposite in direction, but the 2 forces act on 2 different objects, one on each. Forces only cancel when they act on the same object and add to a zero resultant. Because a third law pair is split across 2 objects, there is one force on each object, so neither object feels a cancelling pair, and the forces never cancel.",
        marks: [
          "The 2 forces are equal in size and opposite in direction.",
          "They act on 2 different objects, one force on each.",
          "Forces can only cancel when they act on the same object, so a third law pair never cancels.",
        ],
        ask: "Think about which object each force in the pair acts on, and what has to be true for 2 forces to cancel.",
      },
      {
        kind: "open",
        prompt: "State what a free-body diagram shows, and explain how a vector diagram tells you that an object is in equilibrium.",
        modelAnswer: "A free-body diagram shows all the forces acting on one single object, each drawn as an arrow from the object in the direction the force acts. To find the resultant you add the force arrows head to tail in a vector diagram. If the arrows form a closed shape, ending back at the start, the resultant is 0 and the object is in equilibrium, so it stays at rest or moves at constant velocity.",
        marks: [
          "A free-body diagram shows all the forces on one single object.",
          "Forces are added head to tail in a vector diagram to find the resultant.",
          "A closed vector diagram means the resultant is 0, so the object is in equilibrium.",
        ],
        ask: "Think about how many objects a free-body diagram is about, and what shape the added force arrows make when the resultant is 0.",
      },
    ],
  },
];