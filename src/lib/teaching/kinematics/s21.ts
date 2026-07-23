import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.1",
    code: "T2.1",
    title: "Describing motion",
    blurb: "What motion is, and the words we use to describe it",
    steps: [
      {
        kind: "concept",
        heading: "Kinematics",
        body: "Kinematics is the study of how things move. It describes motion using distance, displacement, speed, velocity and acceleration. It does not ask why an object moves.",
        say: "Let us begin with the word kinematics. It just means the study of how things move. We describe that motion with a small set of words: distance, displacement, speed, velocity and acceleration. Notice that kinematics never asks why something moves. The forces behind the motion come much later.",
      },
      {
        kind: "concept",
        heading: "In motion",
        body: "An object is in motion when its position changes over time. If its position stays the same, it is at rest.",
        say: "So when do we say an object is in motion? Simply when its position changes as time passes. If nothing about its position changes, then it is at rest. That is the whole idea of motion in one line.",
      },
      {
        kind: "concept",
        heading: "Distance",
        figure: "fig-02-01a-distance-only",
        body: "Distance is the total length of the path actually travelled, no matter which way you go. It is always positive or zero, and never negative.",
        say: "Look at the diagram. The blue wavy line is a walk from A to B, with every bend and detour included. Distance is the length of that whole blue path, adding up every part of the journey, whichever way you turn. Because it only counts ground covered, distance is always positive or zero. It can never be negative.",
      },
      {
        kind: "concept",
        heading: "Displacement",
        figure: "fig-02-01b-displacement-only",
        body: "Displacement is the straight-line distance from start to finish, measured in a stated direction. It can be positive, negative or zero.",
        say: "Now look at this diagram. The yellow arrow is the straight line from A directly to B, and the arrowhead shows its direction. That arrow is the displacement. It ignores the actual route and only cares about where you finished compared to where you started. Because it comes with a direction, displacement can be positive, negative or even zero.",
      },
      {
        kind: "concept",
        heading: "Scalar and vector",
        figure: "fig-02-01-distance-displacement",
        body: "A scalar has size only. A vector has size and a direction. Distance is a scalar; displacement is a vector.",
        say: "Now see the two together in one picture. The blue wavy path is the distance, and the straight yellow arrow underneath is the displacement. The blue path has size only, so distance is a scalar. The yellow arrow points a definite way, so displacement is a vector. The same pattern will return for speed and velocity later.",
      },
      {
        kind: "choice",
        question: "A cyclist rides 200 m north, then 200 m back south to where she started. What is her displacement?",
        options: ["400 m", "200 m north", "0 m", "200 m south"],
        correct: 2,
        ask: "She finishes exactly where she began. So how far is she from her starting point in a straight line? Which option is that?",
        hints: [
          "Displacement is measured from the start point to the finish point.",
          "She ends where she began, so the straight line between them has no length.",
        ],
        explain: "Her displacement is zero, because she finishes exactly where she started. Her distance, the whole path, is four hundred metres.",
      },
      {
        kind: "classify",
        prompt: "Sort each quantity as scalar or vector.",
        bins: ["Scalar", "Vector"],
        items: [
          { text: "distance", bin: 0 },
          { text: "displacement", bin: 1 },
          { text: "path length", bin: 0 },
          { text: "displacement north", bin: 1 },
        ],
        ask: "If a quantity needs a direction to make full sense, it is a vector. Tap each quantity, then drop it in its bin.",
        hints: [
          "A scalar has size only, with no direction.",
          "Distance and path length carry no direction; displacement always carries one.",
        ],
        explain: "Distance and path length are scalars because they have size only. Displacement, in any stated direction, is a vector because it carries a direction.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of how we describe motion.",
        segments: ["An object is in motion when its ", " changes. Distance is a ", ", but displacement is a ", "."],
        bank: ["position", "vector", "scalar", "colour", "mass"],
        answer: ["position", "scalar", "vector"],
        ask: "Think about what must change for motion to happen, then recall which quantity has size only and which has a direction.",
        hints: [
          "Motion means the object's position is changing over time.",
          "Distance has size only; displacement has size and a direction.",
        ],
        explain: "An object is in motion when its position changes. Distance is a scalar, with size only, but displacement is a vector, with size and a direction.",
      },
      {
        kind: "order",
        prompt: "Put these steps for finding a displacement in order.",
        items: [
          "Choose a positive direction",
          "Mark the start point and the finish point",
          "Measure the straight line between them",
          "State the answer with its direction",
        ],
        ask: "Think about what you must decide before you can call a displacement positive or negative. Put the steps in order.",
        hints: [
          "You need a positive direction before any sign can mean anything.",
          "Displacement is the straight line from start to finish, stated with a direction.",
        ],
        explain: "First choose a positive direction, then mark the start and finish points, measure the straight line between them, and state the answer with its direction.",
      },
      {
        kind: "insight",
        body: "If you finish where you started, your displacement is zero, even though your distance is not.",
        say: "Hold on to this one idea. If you come back to where you began, your displacement is zero, even though you really did cover a distance along the way. Distance and displacement are simply answering two different questions.",
      },
    ],
  },
];
