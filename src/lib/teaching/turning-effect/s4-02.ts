import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, section 2. Grounded in KB Chapter 05 (Turning Effects of Forces) section 5.2.
// Figure colours follow the carry-over colour key: applied force/effort/tension = yellow, weight/load = pink,
// support/reaction = green, rotation/motion = blue, pivot/dimension/line-of-action guides = grey, beam/object = white.

export const BOXES: Subconcept[] = [
  {
    id: "t4.2",
    code: "T4.2",
    title: "The principle of moments",
    blurb: "How balanced things share their turning effects, and how to solve for an unknown",
    steps: [
      {
        kind: "concept",
        heading: "Balanced means not turning",
        body: "When an object is *balanced* and does not turn, we say it is in *equilibrium*. The turning effects on it must be pulling it both ways by exactly the *same* amount.",
        say: "Picture a see-saw sitting perfectly level, or a shelf that stays put. Nothing is turning, so the object is balanced, and we say it is in equilibrium. For that to happen, the turning effect trying to spin it one way has to be matched exactly by the turning effect trying to spin it the other way.",
      },
      {
        kind: "concept",
        heading: "The principle of moments",
        figure: "fig-05-06-principle-moments",
        body: "The *principle of moments* says that when an object is in equilibrium, the total *clockwise* moment about a pivot equals the total *anticlockwise* moment about the same *pivot*.",
        formula: {
          latex: "F_1 \\times d_1 = F_2 \\times d_2",
          where: [
            { sym: "F_1", meaning: "force on the anticlockwise side", unit: "N" },
            { sym: "d_1", meaning: "its perpendicular distance from the pivot", unit: "m" },
            { sym: "F_2", meaning: "force on the clockwise side", unit: "N" },
            { sym: "d_2", meaning: "its perpendicular distance from the pivot", unit: "m" },
          ],
        },
        say: "In the picture a white beam balances on a grey triangle, which is the pivot. On one side a yellow arrow labelled F 1 pushes down a grey distance line d 1 from the pivot, and a blue curved arrow shows that side turning anticlockwise. On the other side a second yellow arrow labelled F 2 pushes down its own grey distance line d 2 away, and a blue curved arrow shows it turning clockwise. The caption says it is balanced when F 1 times d 1 equals F 2 times d 2. So for a single force each side, one force times its distance equals the other force times its distance.",
      },
      {
        kind: "concept",
        heading: "A method that always works",
        body: "To find an unknown, first pick the *pivot*, then add up every *anticlockwise* moment and every *clockwise* moment, set the 2 totals equal, and solve. Every distance must be in *metres*.",
        say: "Here is a method that never lets you down. Step 1, choose the pivot. Step 2, work out every anticlockwise moment, each one a force times its perpendicular distance. Step 3, do the same for every clockwise moment. Step 4, set the total anticlockwise moment equal to the total clockwise moment. Then solve for whatever is missing. Just make sure every distance is in metres before you multiply.",
      },
      {
        kind: "choice",
        question: "On a see-saw, a 30 N force acts 0.40 m from the pivot and balances a weight W acting 0.20 m from the pivot on the other side. Find W.",
        figure: "fig-05-07-seesaw-balance",
        options: ["60 N", "15 N", "6 N", "12 N"],
        correct: 0,
        ask: "Balanced means the 2 moments are equal, so set 30 × 0.4 equal to W times 0.2, then divide to get W.",
        hints: [
          "The anticlockwise moment is 30 × 0.4, which is 12 newton metres.",
          "12 ÷ 0.2 is 60, and W is a force in newtons.",
        ],
        working: [
          { label: "Formula", latex: "F_1 \\times d_1 = F_2 \\times d_2" },
          { label: "Substitute", latex: "30 \\times 0.40 = W \\times 0.20" },
          { label: "Answer", latex: "W = 60\\ \\text{N}" },
        ],
        explain: "The weight is 60 newtons, because 30 newtons times 0.4 metres is 12 newton metres, and 12 ÷ 0.2 metres is 60 newtons.",
      },
      {
        kind: "order",
        prompt: "Put the steps for solving a balanced-beam problem into the correct order.",
        items: [
          "Identify the pivot",
          "Work out every anticlockwise moment as force times perpendicular distance",
          "Work out every clockwise moment as force times perpendicular distance",
          "Set the total anticlockwise moment equal to the total clockwise moment",
          "Solve for the unknown force or distance",
        ],
        ask: "Start by fixing the point everything turns about, then deal with the 2 turning directions before you can set them equal.",
        hints: [
          "You cannot work out a moment until you have chosen the pivot.",
          "The principle of moments is used only after you have both totals, so setting them equal comes near the end.",
        ],
        explain: "First choose the pivot, then find the anticlockwise and clockwise moments, then set the 2 totals equal, and finally solve for the unknown.",
      },
      {
        kind: "slider",
        prompt: "An automatic barrier pivots at one end. A counterweight force P acts 0.40 m from the pivot and balances a 400 N load acting 1.50 m from the pivot. Set the slider to P, in newtons.",
        min: 0,
        max: 2000,
        step: 10,
        unit: "N",
        start: 0,
        targetMin: 1490,
        targetMax: 1510,
        ask: "Balanced means P times 0.4 equals 400 × 1.5, so work out the load's moment first, then divide by 0.4.",
        hints: [
          "The load's moment is 400 × 1.5, which is 600 newton metres.",
          "600 ÷ 0.4 is 1500, so slide to 1500 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F_1 \\times d_1 = F_2 \\times d_2" },
          { label: "Substitute", latex: "P \\times 0.40 = 400 \\times 1.50" },
          { label: "Answer", latex: "P = 1500\\ \\text{N}" },
        ],
        explain: "The counterweight force is 1500 newtons, because 400 newtons times 1.5 metres is 600 newton metres, and 600 ÷ 0.4 metres is 1500 newtons. That force is the weight of a 150 kilogram mass.",
      },
      {
        kind: "tiles",
        prompt: "A hinged board is held by a string. The string tension T acts 2.5 m from the hinge and balances a 500 N load acting 6.0 m from the hinge. Build the working line that gives T.",
        tiles: ["T =", "3000", "\\div", "2.5", "=", "1200", "N", "N m"],
        answer: ["T =", "3000", "\\div", "2.5", "=", "1200", "N"],
        ask: "The load's moment is 500 × 6, and that equals T times 2.5, so divide the load's moment by 2.5.",
        hints: [
          "The clockwise moment is 500 × 6, which is 3000 newton metres.",
          "3000 ÷ 2.5 is 1200, and the tension is a force in newtons.",
        ],
        working: [
          { label: "Formula", latex: "T \\times d_1 = F \\times d_2" },
          { label: "Substitute", latex: "T \\times 2.5 = 500 \\times 6.0" },
          { label: "Answer", latex: "T = 1200\\ \\text{N}" },
        ],
        explain: "The string tension is 1200 newtons, because 500 newtons times 6 metres is 3000 newton metres, and 3000 ÷ 2.5 metres is 1200 newtons.",
      },
      {
        kind: "choice",
        question: "A beam is turned anticlockwise by 2 forces: 20 N at 0.30 m from the pivot and 12 N at 0.20 m from the pivot. A weight W at 0.10 m on the other side balances it. Find W.",
        figure: "fig-05-18-uniform-beam-multi",
        options: ["84 N", "32 N", "8.4 N", "42 N"],
        correct: 0,
        ask: "There are 2 anticlockwise moments, so add them first, then set the total equal to W times 0.1.",
        hints: [
          "20 × 0.3 is 6, and 12 × 0.2 is 2.4, so the total anticlockwise moment is 8.4 newton metres.",
          "8.4 ÷ 0.1 is 84, and W is a force in newtons.",
        ],
        working: [
          { label: "Formula", latex: "(F_1 \\times d_1) + (F_2 \\times d_2) = W \\times d_3" },
          { label: "Substitute", latex: "(20 \\times 0.30) + (12 \\times 0.20) = W \\times 0.10" },
          { label: "Answer", latex: "W = 84\\ \\text{N}" },
        ],
        explain: "The weight is 84 newtons, because the 2 anticlockwise moments add to 6 + 2.4, which is 8.4 newton metres, and 8.4 ÷ 0.1 metres is 84 newtons.",
      },
      {
        kind: "insight",
        body: "Because the *clockwise* and *anticlockwise* moments must match when an object *balances*, one unknown force or distance can always be found once everything else is known.",
        say: "Here is the idea to keep. Whenever something is balanced, its clockwise and anticlockwise moments are equal, and that single equation is powerful. As long as you know every force and distance but one, you can always rearrange the principle of moments to find the missing force or the missing distance.",
      },
    ],
  },
];
