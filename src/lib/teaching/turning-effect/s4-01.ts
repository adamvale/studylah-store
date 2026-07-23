import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, section 1. Grounded in KB Chapter 05 (Turning Effects of Forces) section 5.1.
// Figure colours follow the carry-over colour key: applied force/effort = yellow, weight/load = pink,
// support/reaction = green, rotation/motion = blue, pivot/dimension/line-of-action guides = grey, beam/object = white.

export const BOXES: Subconcept[] = [
  {
    id: "t4.1",
    code: "T4.1",
    title: "The moment of a force",
    blurb: "How a force turns things, and how to measure that turning effect",
    steps: [
      {
        kind: "concept",
        heading: "A force can turn things",
        figure: "fig-05-01a-everyday-turning",
        body: "A force does not only push an object along, it can also make it *turn* about a fixed point called the *pivot* (or fulcrum). The *moment of a force* measures the size of that *turning effect*.",
        say: "A force can do more than shove something in a straight line. Push a door, loosen a nut with a spanner, or sit on a see-saw, and the object swings about a fixed point we call the pivot. The moment of a force is just our measure of how strong that turning effect is. The picture stacks the 3 everyday examples. In the top panel a yellow effort arrow swings a white door about its grey hinge. In the middle a yellow arrow turns a white spanner about the grey nut. In the bottom panel a yellow arrow presses down on one end of a white see-saw, which turns about the grey pivot underneath.",
      },
      {
        kind: "concept",
        heading: "Moment equals force times distance",
        figure: "fig-05-01-moment-basics",
        body: "The *moment* is the *force* multiplied by the *perpendicular distance* from the pivot to the line of action of the force. Its unit is the newton metre.",
        formula: {
          latex: "M = F \\times d",
          where: [
            { sym: "M", meaning: "moment of the force", unit: "N m" },
            { sym: "F", meaning: "force", unit: "N" },
            { sym: "d", meaning: "perpendicular distance from the pivot", unit: "m" },
          ],
        },
        say: "In the picture a white beam rests on a grey pivot at the left end. A yellow arrow points down at the far end, and that is the force F. A grey line runs from the pivot out to the force, marking the perpendicular distance d, and a small grey square shows the 2 are at 90 degrees. Multiply the force by that distance and you get the moment, measured in newton metres.",
      },
      {
        kind: "concept",
        heading: "Clockwise or anticlockwise",
        figure: "fig-05-02-clockwise-anticlockwise",
        body: "A moment always has a *direction*: it turns the object either *clockwise* or *anticlockwise* about the pivot.",
        say: "A turning effect has a direction, just like a clock. This figure has 2 stacked panels. In the top half, a yellow force swings the white beam one way about the grey pivot, and a blue curved arrow shows it turning clockwise. In the bottom half the force acts the other way, and the blue arrow shows it turning anticlockwise.",
      },
      {
        kind: "concept",
        heading: "Further out, bigger turn",
        figure: "fig-05-03-moment-distance",
        body: "For the *same force*, a *larger* perpendicular distance from the pivot gives a *larger moment*, so the object is easier to turn.",
        say: "The distance matters as much as the force. This figure stacks 2 panels, each with the same yellow 10 newton force on a white beam. In the top half the force acts far from the grey pivot and makes a large moment. In the bottom half the same 10 newtons acts close to the pivot and makes only a small moment. That is why a longer spanner loosens a stiff nut so much more easily.",
      },
      {
        kind: "choice",
        question: "A door needs a moment of 36 N m to swing open. A person pushes with a force of 30 N at right angles to the door. How far from the hinge must the push act?",
        options: ["1.2 m", "0.83 m", "6 m", "66 m"],
        correct: 0,
        ask: "Rearrange moment equals force times distance to get the distance, so work out 36 divided by 30.",
        hints: [
          "The distance is the moment divided by the force.",
          "36 divided by 30 is 1.2, and the answer is a distance in metres.",
        ],
        working: [
          { label: "Formula", latex: "d = \\dfrac{M}{F}" },
          { label: "Substitute", latex: "d = \\dfrac{36}{30}" },
          { label: "Answer", latex: "d = 1.2\\ \\text{m}" },
        ],
        explain: "The push must act 1.2 metres from the hinge, because 36 newton metres divided by 30 newtons is 1.2 metres.",
      },
      {
        kind: "slider",
        prompt: "You loosen a bolt with a spanner, pushing with 60 N at a perpendicular distance of 0.25 m from the bolt. Set the slider to the moment, in newton metres.",
        min: 0,
        max: 50,
        step: 0.5,
        unit: "N m",
        start: 0,
        targetMin: 14.5,
        targetMax: 15.5,
        ask: "The moment is the force times the perpendicular distance, so work out 60 times 0.25.",
        hints: [
          "Use moment equals force times distance.",
          "60 times 0.25 is 15, so slide to 15 newton metres.",
        ],
        working: [
          { label: "Formula", latex: "M = F \\times d" },
          { label: "Substitute", latex: "M = 60 \\times 0.25" },
          { label: "Answer", latex: "M = 15\\ \\text{N m}" },
        ],
        explain: "The moment is 15 newton metres, because 60 newtons times 0.25 metres is 15 newton metres.",
      },
      {
        kind: "choice",
        question: "Two forces turn a beam the same way about a pivot: 20 N acts 2 m from the pivot and 10 N acts 5 m from the pivot. What is the total moment?",
        options: ["90 N m", "30 N m", "10 N m", "50 N m"],
        correct: 0,
        ask: "When 2 forces turn the same way, add their moments. Work out 20 times 2, then 10 times 5, then add.",
        hints: [
          "Find each moment separately with force times distance.",
          "20 times 2 is 40, and 10 times 5 is 50, and 40 plus 50 is 90.",
        ],
        working: [
          { label: "Formula", latex: "M = F_1 d_1 + F_2 d_2" },
          { label: "Substitute", latex: "M = (20 \\times 2) + (10 \\times 5)" },
          { label: "Answer", latex: "M = 90\\ \\text{N m}" },
        ],
        explain: "The total moment is 90 newton metres, because the 2 forces turn the same way, so you add 40 newton metres and 50 newton metres.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by its effect on the turning effect of a spanner on a bolt.",
        bins: ["Increases the moment", "Decreases the moment"],
        items: [
          { text: "Use a longer spanner", bin: 0 },
          { text: "Push harder", bin: 0 },
          { text: "Grip closer to the bolt", bin: 1 },
          { text: "Push with a smaller force", bin: 1 },
        ],
        ask: "The moment is force times perpendicular distance, so anything that raises the force or the distance raises the moment. Tap each change and drop it in its bin.",
        hints: [
          "A longer spanner and a harder push both make the turning effect bigger.",
          "Gripping closer to the bolt shortens the distance, so the moment falls.",
        ],
        explain: "A longer spanner or a harder push increases the moment, because moment is force times distance. Gripping closer to the bolt or pushing more gently decreases it.",
      },
      {
        kind: "insight",
        body: "A *moment* grows with both the *force* and the *distance* from the pivot, so a small force acting far out can beat a large force acting close in.",
        say: "Here is the idea to keep. A moment depends on 2 things multiplied together, the force and its distance from the pivot. That means a gentle force a long way out can out-turn a big force pressed close to the pivot. It is exactly why door handles sit far from the hinges.",
      },
    ],
  },
];
