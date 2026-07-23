import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical Chapter 3), Revision 2. Checkpoint over sections
// tp3.4 to tp3.6: moments, finding a mass by moments, density and friction.
// Question-only: 5 choice + 5 interactive + 2 open.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: moments, finding a mass and friction",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A uniform metre rule rests on a knife-edge at the 40 cm mark. A weight of 2.0 N hangs at the 20 cm mark, and the rule's own weight acts at its centre, the 50 cm mark. What is the weight W of the rule?",
        figure: "fig-pr3-04-principle-of-moments",
        options: ["2.0 N", "4.0 N", "10 N", "40 N"],
        correct: 1,
        ask: "The 2.0 N weight sits 20 centimetres from the pivot and the rule's weight sits 10 centimetres from it on the other side. Balance the 2 moments and solve for W.",
        hints: [
          "Clockwise moment equals anticlockwise moment: 2.0 × 20 on one side, W times 10 on the other.",
          "2.0 × 20 is 40, and 40 ÷ 10 is 4.0 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F_1 d_1 = W d_2" },
          { label: "Substitute", latex: "2.0 \\times 20 = W \\times 10" },
          { label: "Answer", latex: "W = 4.0\\ \\text{N}" },
        ],
        explain: "The rule's weight is 4.0 newtons. The 2.0 newton weight gives an anticlockwise moment of 2.0 × 20, which is 40; setting this equal to W times 10 gives W equal to 4.0 newtons.",
      },
      {
        kind: "choice",
        question: "A rectangular block has a mass of 384 g and a volume of 480 cm^3. What is its density?",
        options: ["1.25 g/cm^3", "0.60 g/cm^3", "480 g/cm^3", "0.80 g/cm^3"],
        correct: 3,
        ask: "Density is mass divided by volume, so work out 384 ÷ 480.",
        hints: [
          "Use density equals mass divided by volume.",
          "384 ÷ 480 is 0.80 grams per cubic centimetre.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{384}{480}" },
          { label: "Answer", latex: "\\rho = 0.80\\ \\text{g/cm}^3" },
        ],
        explain: "The density is 0.80 grams per cubic centimetre, because 384 grams divided by 480 cubic centimetres is 0.80. As this is less than 1.0, the block would float on water.",
      },
      {
        kind: "choice",
        question: "A block is pulled along a bench at constant velocity by a string over a pulley carrying a mass M of 0.300 kg (g = 10 N/kg). The pull W equals the hanging weight Mg. What is the friction force on the block?",
        figure: "fig-pr3-14-friction-apparatus",
        options: ["3.0 N", "0.30 N", "30 N", "0.030 N"],
        correct: 0,
        ask: "At constant velocity the resultant force is zero, so the friction equals the pull, which equals the hanging weight Mg. Work out 0.300 × 10.",
        hints: [
          "Constant velocity means the pull equals the friction, and the pull equals Mg.",
          "0.300 × 10 is 3.0 newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = Mg" },
          { label: "Substitute", latex: "W = 0.300 \\times 10" },
          { label: "Answer", latex: "W = 3.0\\ \\text{N}" },
        ],
        explain: "The friction is 3.0 newtons. Because the block moves at constant velocity the resultant force is zero, so the friction equals the pull, and the pull equals 0.300 kilograms times 10, which is 3.0 newtons.",
      },
      {
        kind: "choice",
        question: "In the graphical method a metre rule is balanced between a 100 g and a 50 g mass, and a graph of r/p against q/p is a straight line. Its gradient is 0.5. What does this gradient represent?",
        figure: "fig-pr3-11-rp-qp-graph",
        options: ["The unknown mass M of the rule", "The length of the rule", "The ratio of the 50 g mass to the 100 g mass", "The friction on the knife-edge"],
        correct: 2,
        ask: "The moments equation is 100 r = 50 q + M p. Rearranged to r/p = 0.5 (q/p) + M/100, which part of it becomes the gradient?",
        hints: [
          "Dividing the moments equation through gives r/p = 0.5 times q/p plus M over 100.",
          "The number in front of q/p is 50 ÷ 100, which is 0.5, the ratio of the 2 masses.",
        ],
        explain: "The gradient of 0.5 is the ratio of the 50 gram mass to the 100 gram mass. In r/p = 0.5 times q/p plus M over 100, the gradient comes from 50 ÷ 100, while the unknown mass M appears in the intercept M over 100.",
      },
      {
        kind: "choice",
        question: "In the friction experiment the coefficient of friction mu is found from the gradient of a pull-load graph. Which statement about mu is correct?",
        options: ["mu is a force measured in newtons", "mu is a distance measured in metres", "mu is an area measured in square metres", "mu is a dimensionless ratio of forces"],
        correct: 3,
        ask: "The gradient is a force divided by a force. Think about what unit is left after the newtons cancel.",
        hints: [
          "mu is found as one force divided by another force.",
          "When a force is divided by a force the newtons cancel, leaving a pure number with no unit.",
        ],
        explain: "mu is a dimensionless ratio of forces. It is a force divided by a force, so the newtons cancel and mu has no unit at all.",
      },
      {
        kind: "order",
        prompt: "Put these steps for finding the coefficient of friction mu in the correct order.",
        items: [
          "Pull the block along the bench at a steady, constant velocity",
          "Record the pull W for that load",
          "Add extra loads L on top of the block and repeat to get pairs of W and L",
          "Plot a graph of pull W against load L",
          "Take the gradient of the best-fit line as mu",
        ],
        ask: "You need several readings of pull and load before you can draw a graph, and the gradient comes last. Put the steps in order.",
        hints: [
          "You must be moving at constant velocity before the pull equals the friction.",
          "Gather the pairs of W and L first, plot them, then read off the gradient as mu.",
        ],
        explain: "First pull the block at constant velocity, then record the pull, then repeat with extra loads to get many pairs of W and L, then plot pull against load, and finally read the gradient of the line as mu.",
      },
      {
        kind: "match",
        prompt: "Match each graph feature to what it represents.",
        pairs: [
          { left: "gradient of the pull-load graph", right: "the coefficient of friction mu" },
          { left: "intercept of the pull-load graph", right: "mu m g" },
          { left: "gradient of the r/p vs q/p graph", right: "0.5" },
          { left: "intercept of the r/p vs q/p graph", right: "M/100" },
        ],
        ask: "One graph comes from the friction experiment and one from the graphical balancing method. Recall what the gradient and intercept mean in each.",
        hints: [
          "For friction, W = mu L + mu m g, so the gradient is mu and the intercept is mu m g.",
          "For balancing, r/p = 0.5 times q/p plus M over 100, so the gradient is 0.5 and the intercept is M over 100.",
        ],
        explain: "On the pull-load graph the gradient is mu and the intercept is mu m g. On the r/p against q/p graph the gradient is 0.5, the ratio of the masses, and the intercept is M over 100, which gives the unknown mass.",
      },
      {
        kind: "graphpick",
        prompt: "In the friction experiment the pull W is plotted against the load L on top of the block. There is friction even with no load. Which graph fits the data?",
        xLabel: "load L (N)",
        yLabel: "pull W (N)",
        options: [
          { points: [[0, 0], [1, 1], [2, 2], [3, 3]], caption: "straight line through the origin" },
          { points: [[0, 2], [1, 2.5], [2, 3], [3, 3.5]], caption: "straight line with a positive intercept" },
          { points: [[0, 4], [1, 3], [2, 2], [3, 1]], caption: "straight line sloping down" },
          { points: [[0, 2], [1, 2], [2, 2], [3, 2]], caption: "horizontal line" },
        ],
        correct: 1,
        ask: "Even with no load there is still some friction, so the pull is not zero when the load is zero. And adding load increases the friction. Which line rises but starts above the origin?",
        hints: [
          "At zero load the pull equals mu m g, which is not zero, so the line must cut the axis above the origin.",
          "More load means more friction, so the line slopes upwards from that positive intercept.",
        ],
        explain: "The correct graph is the straight line with a positive intercept. At zero load the pull already equals mu m g, so the line starts above the origin, and it rises with a gradient of mu as load is added.",
      },
      {
        kind: "slider",
        prompt: "A block is pulled at constant velocity with a pull W = 3.0 N. The load and the rule together give L + mg = 6.214 N. Set the slider to the coefficient of friction mu = W / (L + mg).",
        min: 0,
        max: 1,
        step: 0.01,
        start: 0,
        targetMin: 0.47,
        targetMax: 0.49,
        ask: "Divide the pull W by the total force L + mg, so work out 3.0 ÷ 6.214.",
        hints: [
          "Use mu equals W divided by the quantity L plus mg.",
          "3.0 ÷ 6.214 is about 0.48.",
        ],
        working: [
          { label: "Formula", latex: "\\mu = \\dfrac{W}{L + mg}" },
          { label: "Substitute", latex: "\\mu = \\dfrac{3.0}{6.214}" },
          { label: "Answer", latex: "\\mu = 0.48" },
        ],
        explain: "The coefficient of friction is about 0.48, because 3.0 newtons divided by 6.214 newtons is 0.48. As a ratio of forces it has no unit.",
      },
      {
        kind: "spoterror",
        prompt: "A student writes about the friction experiment. Tap the line that is wrong.",
        lines: [
          "The block is pulled so that it moves at a steady, constant velocity.",
          "Because the velocity is constant, the resultant force on the block is zero.",
          "This means the pull is greater than the friction force.",
          "So the pull can be read from the balance and taken as the friction.",
        ],
        errorLine: 2,
        ask: "Think about what a zero resultant force requires of the pull and the friction when they act in opposite directions.",
        hints: [
          "If the resultant force is zero, the 2 opposing forces must be equal in size.",
          "At constant velocity the pull does not beat the friction; it exactly balances it.",
        ],
        explain: "The wrong line says the pull is greater than the friction. At constant velocity the resultant force is zero, so the pull equals the friction, which is why the pull can be recorded as the friction force.",
      },
      {
        kind: "open",
        prompt: "In the friction experiment the block is pulled at constant velocity. Explain why the pull W can then be taken as equal to the friction force.",
        modelAnswer: "At constant velocity there is no acceleration, so by Newton's first law the resultant force on the block is zero. The pull of the string acts forwards and the friction acts backwards. For the resultant to be zero these 2 forces must be equal in size and opposite in direction, so the pull equals the friction. This is why the pull is read at steady speed, taking values just above and just below and averaging them.",
        marks: [
          "Constant velocity means zero acceleration, so the resultant force is zero.",
          "Pull and friction are the 2 opposing horizontal forces.",
          "Zero resultant requires pull equal to friction in size.",
        ],
        ask: "Start from what constant velocity tells you about the acceleration and the resultant force, then balance the forwards and backwards forces.",
      },
      {
        kind: "open",
        prompt: "A half-metre rule is balanced on a knife-edge against a known mass. Using the principle of moments, explain how this lets you find the unknown mass M of the rule.",
        figure: "fig-pr3-09-halfrule-knife-edge",
        modelAnswer: "At balance the rule is in equilibrium, so by the principle of moments the clockwise moment about the knife-edge equals the anticlockwise moment. The known mass m gives a moment m times its distance x from the pivot, and the rule's weight acts at its centre of gravity a distance y from the pivot on the other side, giving a moment M times y. Setting these equal gives m x = M y, so M = m times x divided by y. Measuring x and y and knowing m gives the unknown mass M.",
        marks: [
          "At balance the clockwise and anticlockwise moments about the pivot are equal.",
          "m x = M y, taking moments about the knife-edge.",
          "M = m (x/y), so measuring x, y and m gives M.",
        ],
        ask: "At balance the 2 moments about the knife-edge are equal. Write each moment as a force times its distance from the pivot, then rearrange for M.",
      },
    ],
  },
];
