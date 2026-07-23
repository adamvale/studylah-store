import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.4",
    code: "T2.4",
    title: "Velocity",
    blurb: "Speed in a stated direction, a vector measured in m/s",
    steps: [
      {
        kind: "concept",
        heading: "What velocity is",
        body: "Velocity is the *displacement* per unit time. It is speed in a stated *direction*, so it is a *vector*.",
        formula: {
          latex: "v = \\dfrac{d}{t}",
          where: [
            { sym: "v", meaning: "velocity", unit: "m/s" },
            { sym: "d", meaning: "displacement", unit: "m" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Velocity is just speed with a direction attached. It is displacement divided by time, so it tells you how fast you move and which way. Because direction is part of it, velocity is a vector, measured in metres per second.",
      },
      {
        kind: "concept",
        heading: "Average velocity",
        figure: "fig-02-04-uturn-journey",
        body: "*Average velocity* uses *displacement*, not *distance*, so it is often smaller than the *average speed*.",
        formula: {
          latex: "\\text{average velocity} = \\dfrac{\\text{total displacement}}{\\text{total time taken}}",
          where: [
            { sym: "\\text{displacement}", meaning: "straight line from start to finish", unit: "m" },
            { sym: "\\text{time}", meaning: "total time taken", unit: "s" },
          ],
        },
        say: "Look at the diagram. The blue arrows trace the actual journey along the track, 600 metres from A to B and then 240 metres back to C, but the yellow arrow shows the displacement, only 360 metres from A to C. For a whole journey, average velocity is the total displacement over the total time. Watch the trap here: it uses displacement, not distance. If you double back, your displacement shrinks, so your average velocity comes out smaller than your average speed.",
      },
      {
        kind: "concept",
        heading: "Signs for direction",
        body: "When motion goes both ways, pick one *direction* as + and the opposite as -. Add the parts with their *signs* to get the *displacement*. A journey 600 m east then 240 m west gives (+600) + (-240) = +360 m.",
        say: "When something moves both ways, choose one direction to be positive and the other negative. Then add the pieces with their signs. 600 metres east and 240 metres west gives plus 360 metres, which means 360 metres due east.",
      },
      {
        kind: "choice",
        question: "Which statement about velocity is correct?",
        options: [
          "Velocity is a scalar with size only.",
          "Velocity is speed in a stated direction, a vector.",
          "Velocity is always equal to the average speed.",
          "Velocity has no unit.",
        ],
        correct: 1,
        ask: "Think about whether velocity needs a direction. Which option matches that?",
        hints: [
          "Velocity is displacement divided by time.",
          "A quantity that carries a direction is a vector.",
        ],
        explain: "Velocity is speed in a stated direction, so it is a vector, and its unit is the metre per second.",
      },
      {
        kind: "open",
        prompt: "A jogger runs 600 m east then 240 m west in 12 min. Find her average velocity, showing your working.",
        modelAnswer: "Take east as positive. The displacement is 600 - 240, which is 360 m due east. The time is 12 × 60, which is 720 s. Average velocity is 360 ÷ 720, which is 0.5 m/s due east.",
        marks: [
          "Displacement = 600 - 240 = 360 m due east (east taken as positive).",
          "Time converted to 720 s.",
          "Average velocity = 360 / 720 = 0.5 m/s due east, stated with direction.",
        ],
        ask: "Average velocity uses displacement, not distance. Work out the displacement first, taking east as positive, then divide by the time in seconds.",
      },
      {
        kind: "slider",
        prompt: "A cyclist has a displacement of 360 m due north in 90 s. Set the slider to her average velocity in m/s.",
        min: 0,
        max: 10,
        step: 1,
        unit: "m/s",
        start: 0,
        targetMin: 4,
        targetMax: 4,
        ask: "Average velocity is displacement over time. 360 ÷ 90. Slide to that value.",
        hints: [
          "Divide the displacement by the time.",
          "360 ÷ 90 is 4.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{d}{t}" },
          { label: "Substitute", latex: "v = \\dfrac{360}{90}" },
          { label: "Answer", latex: "v = 4\\ \\text{m/s}" },
        ],
        explain: "Her average velocity is 4 metres per second due north, because 360 m divided by 90 s is 4.",
      },
      {
        kind: "order",
        prompt: "Put the steps to find average velocity in order.",
        items: [
          "Choose a positive direction",
          "Add the parts with their signs to get the displacement",
          "Find the total time taken",
          "Divide displacement by time",
          "State the answer with its direction",
        ],
        explain: "Choose a positive direction, add the signed parts for the displacement, find the total time, divide displacement by time, then state the answer with its direction.",
        ask: "You need a sign convention before you can add the parts. Put the steps in order.",
        hints: [
          "Fix a positive direction before adding the parts.",
          "Average velocity is total displacement over total time.",
        ],
      },
      {
        kind: "insight",
        body: "If a journey ends where it started, the *displacement* is 0, so the *average velocity* is 0 m/s even though the *average speed* is not.",
        say: "Here is the idea to hold onto. If you finish exactly where you began, your displacement is 0, so your average velocity is 0, no matter how far or how fast you ran. Your average speed, though, is not 0, and that gap between them is what velocity is really about.",
      },
    ],
  },
];
