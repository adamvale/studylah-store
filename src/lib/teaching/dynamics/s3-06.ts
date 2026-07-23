import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 6. Grounded in KB Chapter 04 (Forces) sections 4.1 and 4.2.

export const BOXES: Subconcept[] = [
  {
    id: "t3.6",
    code: "T3.6",
    title: "How forces change motion; balanced and unbalanced",
    blurb: "What a force does to motion, and when forces cancel or win",
    steps: [
      {
        kind: "concept",
        heading: "What a force does",
        figure: "fig-04-01-push-pull",
        body: "A *force* is a *push* or a *pull* of one object on another. Its unit is the *newton*, and we measure it with a spring balance.",
        say: "A force is just a push or a pull of one object on another. In the top half the yellow arrow presses the box from behind, and that is a push. In the bottom half the yellow arrow tugs the box from the front, and that is a pull. Both drive the box the same way; what changes is where the force is applied. We measure the size of a force in newtons, using a spring balance that stretches more as the pull grows.",
      },
      {
        kind: "concept",
        heading: "Forces change motion in four ways",
        body: "A force can *start* a stationary object moving, *speed it up*, *slow it down*, or *change its direction*. Those are the only 4 things a force does to motion.",
        say: "A force can do 4 things to how an object moves. It can start a still object moving, it can make a moving object go faster, it can make it go slower, or it can turn it and change its direction of travel. Every effect a force has on motion is one of those 4.",
      },
      {
        kind: "concept",
        heading: "Balanced forces",
        figure: "fig-04-02-balanced-forces",
        body: "Forces are *balanced* when they are *equal* and *opposite*, so the resultant is *zero*. A still object stays still, and a moving object keeps a constant velocity.",
        say: "Look at the 2 yellow arrows. They are the same length but point opposite ways, so they cancel. That is what balanced means: equal in size, opposite in direction, and their resultant is 0. When forces balance, a stationary object stays exactly where it is, and an object already moving keeps the same speed in the same direction, a constant velocity.",
      },
      {
        kind: "concept",
        heading: "Unbalanced forces",
        figure: "fig-04-03-unbalanced-forces",
        body: "Force is a *vector*, so along a line take one direction as *positive* and the other as negative; the *resultant* is the signed sum. When forces are *unequal* the resultant is not zero, so the velocity changes.",
        formula: {
          latex: "F = F_1 + F_2",
          where: [
            { sym: "F", meaning: "resultant force", unit: "N" },
            { sym: "F_1", meaning: "first force, with its sign", unit: "N" },
            { sym: "F_2", meaning: "second force, with its sign", unit: "N" },
          ],
        },
        say: "Here the 2 yellow arrows are not the same length, so they do not cancel. Because force is a vector, pick one direction along the line as positive and the opposite as negative, then add the forces with their signs. Say 12 newtons act to the right and 8 newtons act to the left. Taking right as positive, the resultant is 12 plus negative 8, which is 4 newtons to the right. A resultant that is not zero changes the velocity: the speed, the direction, or both.",
      },
      {
        kind: "order",
        prompt: "A force can change an object's motion. Put these 4 effects in the order given in the lesson.",
        items: [
          "Start a stationary object moving",
          "Increase its speed",
          "Decrease its speed",
          "Change its direction",
        ],
        ask: "The lesson listed the 4 effects starting from a still object, then the 2 speed changes, then the turn. Drag them into that order.",
        hints: [
          "Begin with getting a still object to move, then deal with speeding up and slowing down.",
          "The last of the 4 is turning the object so it travels a different way.",
        ],
        explain: "A force can start a stationary object moving, increase its speed, decrease its speed, or change its direction. Those 4 are the only ways a force changes motion.",
      },
      {
        kind: "choice",
        question: "A crate is pushed with 15 N to the right and 9 N to the left. Taking right as positive, find the resultant force.",
        options: ["6 N to the right", "24 N to the right", "6 N to the left", "24 N to the left"],
        correct: 0,
        ask: "Add the 2 forces with their signs: right is positive, so the left force counts as negative. Work out 15 plus negative 9.",
        hints: [
          "The resultant is the signed sum, so use 15 plus negative 9.",
          "15 minus 9 is 6, and because the larger force points right, the resultant points right.",
        ],
        working: [
          { label: "Formula", latex: "F = F_1 + F_2" },
          { label: "Substitute", latex: "F = (+15) + (-9)" },
          { label: "Answer", latex: "F = +6\\ \\text{N}" },
        ],
        explain: "The resultant is 6 newtons to the right, because 15 plus negative 9 is 6, a positive value, and positive was chosen as the right direction.",
      },
      {
        kind: "classify",
        prompt: "Sort each pair of forces on an object as balanced or unbalanced.",
        bins: ["Balanced", "Unbalanced"],
        items: [
          { text: "10 N right and 10 N left", bin: 0 },
          { text: "7 N up and 7 N down", bin: 0 },
          { text: "12 N right and 8 N left", bin: 1 },
          { text: "20 N right and 5 N left", bin: 1 },
          { text: "6 N left and 6 N right", bin: 0 },
          { text: "9 N up and 4 N down", bin: 1 },
        ],
        ask: "Forces are balanced only when they are equal in size and opposite in direction. Tap each pair and drop it in its bin.",
        hints: [
          "Equal and opposite forces cancel, so the resultant is 0 and they are balanced.",
          "If the 2 sizes differ, one force wins, the resultant is not 0, and they are unbalanced.",
        ],
        explain: "Pairs of equal and opposite forces, such as 10 newtons each way, are balanced with a resultant of 0. Pairs of different sizes, such as 12 newtons against 8 newtons, are unbalanced, so the velocity changes.",
      },
      {
        kind: "slider",
        prompt: "Two forces act along a line on a box: 20 N to the right and 14 N to the left. Taking right as positive, set the slider to the resultant force, in newtons.",
        min: -30,
        max: 30,
        step: 1,
        unit: "N",
        start: 0,
        targetMin: 6,
        targetMax: 6,
        ask: "Add the forces with their signs: 20 for the right force and negative 14 for the left force.",
        hints: [
          "The resultant is 20 plus negative 14.",
          "20 minus 14 is 6, so slide to positive 6 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F = F_1 + F_2" },
          { label: "Substitute", latex: "F = (+20) + (-14)" },
          { label: "Answer", latex: "F = +6\\ \\text{N}" },
        ],
        explain: "The resultant is 6 newtons to the right, because 20 plus negative 14 is 6. The forces are unbalanced, so the box's velocity changes.",
      },
      {
        kind: "choice",
        question: "A car travels along a straight road at a steady speed, and the forces on it are balanced. What happens to its velocity?",
        options: [
          "It stays constant",
          "It increases steadily",
          "It decreases to zero",
          "It changes direction",
        ],
        correct: 0,
        ask: "Balanced forces have a resultant of 0. Think about what a zero resultant does to an object that is already moving.",
        hints: [
          "With balanced forces the resultant is 0, so there is nothing to change the motion.",
          "A moving object under balanced forces keeps the same speed and the same direction.",
        ],
        explain: "The velocity stays constant. Because the forces are balanced, the resultant is 0, so the car keeps the same speed in the same direction.",
      },
      {
        kind: "insight",
        body: "*Balanced* forces leave motion unchanged: still stays still, moving stays at *constant velocity*. Only an *unbalanced* force, a resultant that is not zero, can change how an object moves.",
        say: "Hold on to this one idea. When forces are balanced the resultant is 0, so nothing about the motion changes: a still object stays still and a moving object keeps a constant velocity. Only an unbalanced force, a resultant that is not zero, can start, speed up, slow down, or turn an object.",
      },
    ],
  },
];