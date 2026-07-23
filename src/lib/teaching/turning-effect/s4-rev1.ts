import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, Revision 1. Checkpoint over KB Chapter 05, sections
// t4.1 to t4.3: the moment of a force, the principle of moments, and the 2 conditions
// for equilibrium. Question-only (5 choice, 5 interactive, 2 open). All values recomputed.

export const BOXES: Subconcept[] = [
  {
    id: "t4.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: moments, the principle of moments, equilibrium",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A beam balances on a central pivot. A 6 N force acts 6 m from the pivot on one side, and a weight W acts 2 m from the pivot on the other. Find W.",
        figure: "fig-05-21-mcq-beam",
        options: ["18 N", "36 N", "2 N", "12 N"],
        correct: 0,
        ask: "The beam is balanced, so the 2 moments are equal. Work out 6 × 6, then divide by 2 to get W.",
        hints: [
          "By the principle of moments, 6 × 6 equals W times 2.",
          "6 × 6 is 36, and 36 ÷ 2 is 18.",
        ],
        working: [
          { label: "Formula", latex: "F_1 d_1 = W d_2" },
          { label: "Substitute", latex: "6 \\times 6 = W \\times 2" },
          { label: "Answer", latex: "W = 18\\ \\text{N}" },
        ],
        explain: "The weight is 18 newtons, because 6 newtons times 6 metres is 36 newton metres, and dividing that by the 2 metre distance gives 18 newtons.",
      },
      {
        kind: "choice",
        question: "A metre rule is pivoted at one mark. An 80 N block hangs 0.75 m from the pivot, and a spring balance holds the rule level 1.0 m from the pivot. What does the spring balance read?",
        figure: "fig-05-24-metre-rule-spring",
        options: ["60 N", "80 N", "60 N m", "107 N"],
        correct: 0,
        ask: "The rule is balanced, so the block's moment equals the spring's moment. Work out 80 × 0.75, then divide by 1.0.",
        hints: [
          "By the principle of moments, 80 × 0.75 equals the reading times 1.0.",
          "80 × 0.75 is 60, and dividing by 1.0 leaves 60 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F = \\dfrac{W d_1}{d_2}" },
          { label: "Substitute", latex: "F = \\dfrac{80 \\times 0.75}{1.0}" },
          { label: "Answer", latex: "F = 60\\ \\text{N}" },
        ],
        explain: "The spring balance reads 60 newtons, because 80 newtons times 0.75 metres is 60 newton metres, and dividing by the 1.0 metre distance gives a force of 60 newtons.",
      },
      {
        kind: "choice",
        question: "A car-park barrier is pivoted at one end. A load of 400 N acts 1.50 m from the pivot. A downward force P acts 0.40 m from the pivot on the other side to keep the barrier level. Find P.",
        options: ["1500 N", "600 N", "150 N", "240 N"],
        correct: 0,
        ask: "The barrier is in equilibrium, so the 2 moments are equal. Work out 400 × 1.50, then divide by 0.40.",
        hints: [
          "By the principle of moments, P times 0.40 equals 400 × 1.50.",
          "400 × 1.50 is 600, and 600 ÷ 0.40 is 1500.",
        ],
        working: [
          { label: "Formula", latex: "P d_1 = F d_2" },
          { label: "Substitute", latex: "P \\times 0.40 = 400 \\times 1.50" },
          { label: "Answer", latex: "P = 1500\\ \\text{N}" },
        ],
        explain: "The force P is 1500 newtons, because 400 newtons times 1.50 metres is 600 newton metres, and dividing that by the 0.40 metre distance gives 1500 newtons.",
      },
      {
        kind: "choice",
        question: "What is the moment of a force about a pivot?",
        options: [
          "The force times the perpendicular distance from the pivot",
          "The force divided by the distance from the pivot",
          "The force added to the distance from the pivot",
          "The force times the mass of the object",
        ],
        correct: 0,
        ask: "Recall the equation for a turning effect. Which of the options multiplies a force by a perpendicular distance?",
        hints: [
          "A moment measures a turning effect, and its unit is the newton metre.",
          "Moment equals force times perpendicular distance, so a force in newtons times a distance in metres gives newton metres.",
        ],
        explain: "The moment is the force times the perpendicular distance from the pivot to the line of action of the force. Because it is a force times a distance, its unit is the newton metre.",
      },
      {
        kind: "choice",
        question: "A body is in equilibrium. Which pair of conditions must both hold?",
        options: [
          "No resultant force and no resultant moment",
          "No resultant force only",
          "No resultant moment only",
          "A large clockwise moment and no resultant force",
        ],
        correct: 0,
        ask: "Equilibrium needs 2 separate things to balance: the pushes and pulls, and the turning effects. Which option names both?",
        hints: [
          "One condition stops the body accelerating in a straight line.",
          "The other condition stops the body starting to rotate, so there must be no resultant force AND no resultant moment.",
        ],
        explain: "For equilibrium there must be no resultant force and no resultant moment. The first keeps the body from accelerating, and the second keeps it from turning, so both are needed together.",
      },
      {
        kind: "slider",
        prompt: "A beam balances on a pivot. On one side a 20 N force acts 0.30 m from the pivot and a 12 N force acts 0.20 m from the pivot. On the other side a weight W acts 0.10 m from the pivot. Set the slider to W, in N.",
        min: 0,
        max: 150,
        step: 1,
        unit: "N",
        start: 0,
        targetMin: 83,
        targetMax: 85,
        ask: "Add the 2 moments on the first side, then divide by 0.10 to get W. Start with 20 × 0.30 and 12 × 0.20.",
        hints: [
          "The total clockwise moment is 20 × 0.30 + 12 × 0.20.",
          "20 × 0.30 is 6, and 12 × 0.20 is 2.4, so the total is 8.4, and 8.4 ÷ 0.10 is 84.",
        ],
        working: [
          { label: "Formula", latex: "W = \\dfrac{F_1 d_1 + F_2 d_2}{d}" },
          { label: "Substitute", latex: "W = \\dfrac{(20 \\times 0.30) + (12 \\times 0.20)}{0.10}" },
          { label: "Answer", latex: "W = 84\\ \\text{N}" },
        ],
        explain: "The weight is 84 newtons, because 20 newtons times 0.30 metres is 6 newton metres and 12 newtons times 0.20 metres is 2.4 newton metres, giving 8.4 newton metres in total, and dividing by the 0.10 metre distance gives 84 newtons.",
      },
      {
        kind: "tiles",
        prompt: "On a see-saw, a 30 N weight sits 0.40 m from the pivot and balances a weight W at 0.20 m on the other side. Build the working line that gives W.",
        tiles: ["W =", "30", "\\times", "0.40", "\\div", "0.20", "=", "60", "N", "N m"],
        answer: ["W =", "30", "\\times", "0.40", "\\div", "0.20", "=", "60", "N"],
        ask: "The see-saw is balanced, so 30 × 0.40 equals W times 0.20. Rearrange to divide the moment by 0.20.",
        hints: [
          "By the principle of moments, W equals 30 × 0.40 ÷ 0.20.",
          "30 × 0.40 is 12, and 12 ÷ 0.20 is 60, and the weight is a force in newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = \\dfrac{F_1 d_1}{d_2}" },
          { label: "Substitute", latex: "W = \\dfrac{30 \\times 0.40}{0.20}" },
          { label: "Answer", latex: "W = 60\\ \\text{N}" },
        ],
        explain: "The weight is 60 newtons, because 30 newtons times 0.40 metres is 12 newton metres, and dividing by the 0.20 metre distance gives 60 newtons. The answer is a force, so its unit is the newton, not the newton metre.",
      },
      {
        kind: "cloze",
        prompt: "Complete the statement of the principle of moments.",
        segments: [
          "When an object is in equilibrium, the total ",
          " moment about a pivot equals the total ",
          " moment about the same pivot. This is the principle of ",
          ".",
        ],
        bank: ["clockwise", "anticlockwise", "moments", "forces", "energy", "distance"],
        answer: ["clockwise", "anticlockwise", "moments"],
        ask: "A balanced object has its 2 opposite turning effects equal. Name the 2 directions a moment can turn, then name the principle itself.",
        hints: [
          "A moment turns an object either clockwise or anticlockwise.",
          "In balance the clockwise moment equals the anticlockwise moment, which is the principle of moments.",
        ],
        explain: "In equilibrium the total clockwise moment about a pivot equals the total anticlockwise moment about the same pivot. This rule is called the principle of moments.",
      },
      {
        kind: "order",
        prompt: "Put these steps for using the principle of moments to find an unknown in order.",
        items: [
          "Choose the pivot to take moments about",
          "Work out each clockwise moment as force times distance",
          "Work out each anticlockwise moment as force times distance",
          "Set the total clockwise moment equal to the total anticlockwise moment",
          "Solve for the unknown force or distance",
        ],
        ask: "Think about what you must fix first before any moment has meaning, and what you can only do once both sides are written down. Put the steps in order.",
        hints: [
          "Every moment is measured about a chosen pivot, so that choice comes first.",
          "You can only set the 2 totals equal after you have worked out the moments on both sides.",
        ],
        explain: "First choose the pivot, then work out the clockwise moments and the anticlockwise moments about it, then set the 2 totals equal, and finally solve for the unknown force or distance.",
      },
      {
        kind: "spoterror",
        prompt: "A student loosens a bolt with a spanner, pushing 60 N at 0.25 m from the bolt. Spot the line with the mistake.",
        lines: [
          "Moment = force x perpendicular distance",
          "Moment = 60 x 0.25",
          "Moment = 15 N",
        ],
        errorLine: 2,
        ask: "The arithmetic 60 × 0.25 is fine. Check the unit written on the final line against what a moment is measured in.",
        hints: [
          "A moment is a force times a distance, so its unit cannot be the plain newton.",
          "60 × 0.25 is 15, but the unit should be N m, not N.",
        ],
        working: [
          { label: "Formula", latex: "M = F \\times d" },
          { label: "Substitute", latex: "M = 60 \\times 0.25" },
          { label: "Answer", latex: "M = 15\\ \\text{N m}" },
        ],
        explain: "The last line is wrong: the moment is 15 newton metres, not 15 newtons. The value 15 is correct, but a moment is measured in newton metres because it is a force times a distance.",
      },
      {
        kind: "open",
        prompt: "State the 2 conditions for a body to be in equilibrium, and explain what each one means.",
        modelAnswer: "For a body in equilibrium there must be no resultant force and no resultant moment. No resultant force means all the forces balance, so the body does not accelerate in any direction. No resultant moment means the total clockwise moment equals the total anticlockwise moment about any pivot, so the body does not start to turn. Both conditions must hold at the same time.",
        marks: [
          "No resultant force (the forces balance, so no linear acceleration).",
          "No resultant moment (clockwise moments equal anticlockwise moments, so no turning).",
          "Both conditions must hold together for equilibrium.",
        ],
        ask: "One condition is about forces adding to zero, the other is about turning effects. Say what each one prevents the body from doing.",
      },
      {
        kind: "open",
        prompt: "A uniform plank of weight 300 N rests on 2 supports, P and Q. A load of weight 60 N sits on the plank. The support forces are found to be T_P = 170 N and T_Q = 190 N. Explain how the 2 conditions for equilibrium are met.",
        modelAnswer: "There is no resultant force, because the 2 upward support forces add to 170 + 190, which is 360 newtons, and this balances the total downward weight of the plank plus the load, 300 + 60, which is also 360 newtons. There is also no resultant moment, because if you take moments about either support, the total clockwise moment equals the total anticlockwise moment. Those balances are exactly what fix the support forces at 170 newtons and 190 newtons.",
        marks: [
          "Upward forces balance downward forces: 170 + 190 is 360 N, equal to 300 + 60.",
          "Taking moments about a support, clockwise moments equal anticlockwise moments.",
          "Both conditions together give the values 170 N and 190 N.",
        ],
        ask: "Check the up-and-down forces first, then the turning effects. Add the 2 support forces and compare with the total weight, then think about moments about a support.",
      },
    ],
  },
];
