import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.5-1",
    code: "T2.5a",
    title: "Acceleration defined",
    blurb: "Rate of change of velocity, a vector in m/s^2",
    steps: [
      {
        kind: "concept",
        heading: "Acceleration",
        body: "*Acceleration* is the *rate of change of velocity*: how much the velocity changes each second.",
        formula: {
          latex: "a = \\dfrac{v - u}{t}",
          where: [
            { sym: "a", meaning: "acceleration", unit: "m/s^2" },
            { sym: "v", meaning: "final velocity", unit: "m/s" },
            { sym: "u", meaning: "initial velocity", unit: "m/s" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Acceleration tells you how quickly the velocity is changing every second. You take the final velocity, subtract the starting velocity, and divide by the time taken. We measure it in metres per second squared.",
      },
      {
        kind: "concept",
        heading: "A vector",
        body: "Because velocity is a *vector*, acceleration is a vector too. It has both a *size* and a *direction*. A *positive* value speeds an object up in the direction of motion.",
        say: "Here is a key point. Since velocity carries a direction, acceleration does too. So acceleration is a vector, with a size and a direction, not just a number.",
      },
      {
        kind: "concept",
        heading: "Three ways to accelerate",
        figure: "fig-02-07-accel-change-direction",
        body: "An object accelerates whenever any one of these happens: its *speed changes*, its *direction changes*, or both change together. Even at steady speed, changing direction is still *acceleration*.",
        say: "Look at the diagram. The blue ball is drawn at three moments in time, and the yellow arrows show its velocity: at the start the arrow points straight ahead at 4 metres per second, and one second later it is still 4 metres per second but the arrow now points a different way. This surprises a lot of students. You accelerate if your speed changes, if your direction changes, or if both change. The ball in the picture kept the same speed, yet it accelerated, because its direction changed. So a car going round a bend at a steady speed is still accelerating too.",
      },
      {
        kind: "choice",
        question: "A trolley speeds up from 12 m/s to 20 m/s in 5 s. What is its acceleration?",
        options: ["1.6 m/s^2", "6.4 m/s^2", "4 m/s^2", "0.625 m/s^2"],
        correct: 0,
        ask: "Use acceleration equals final velocity minus starting velocity, all over time. 20 - 12 is 8, then divide by 5. Which option is that?",
        hints: [
          "Acceleration is the change in velocity divided by the time.",
          "20 - 12 is 8, and 8 ÷ 5 is 1.6.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{v - u}{t}" },
          { label: "Substitute", latex: "a = \\dfrac{20 - 12}{5}" },
          { label: "Answer", latex: "a = 1.6\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is 1.6 metres per second squared, because 20 - 12 is 8, and 8 ÷ 5 is 1.6.",
      },
      {
        kind: "choice",
        question: "Which situation involves acceleration?",
        options: [
          "A car parked with its engine off",
          "A car turning a corner at a steady speed",
          "A car moving in a straight line at constant velocity",
          "A car resting on a flat road",
        ],
        correct: 1,
        ask: "Ask yourself whether the velocity is changing. Does the speed or the direction change in any of these?",
        hints: [
          "Changing direction alone counts as acceleration.",
          "A car turning a corner keeps changing its direction.",
        ],
        explain: "The car turning a corner is accelerating, because its direction keeps changing even though its speed stays the same.",
      },
      {
        kind: "tiles",
        prompt: "Build the equation for acceleration.",
        tiles: ["a", "=", "(v - u)", "/ t", "v x t", "+ u"],
        answer: ["a", "=", "(v - u)", "/ t"],
        explain: "Acceleration equals the final velocity minus the starting velocity, all divided by the time taken.",
        ask: "Acceleration is the change in velocity over the time. Put the tiles together to show that.",
        hints: [
          "Start with a equals.",
          "The change in velocity is the final velocity minus the starting velocity, then you divide by the time.",
        ],
      },
      {
        kind: "insight",
        body: "*Acceleration* is about the *change in velocity*, not how fast you are going. A *slow object* can accelerate hard, and a fast one may not accelerate at all.",
        say: "Remember this. Acceleration is not about how fast you are moving. It is about how quickly that motion is changing. A slow car can accelerate hard, while a fast car at steady speed is not accelerating at all.",
      },
    ],
  },
  {
    id: "t2.5-2",
    code: "T2.5b",
    title: "Deceleration and zero acceleration",
    blurb: "Constant velocity means zero, slowing down is negative",
    steps: [
      {
        kind: "concept",
        heading: "Zero acceleration",
        body: "When an object moves at *constant velocity*, its velocity does not change. So its *acceleration* is *zero*. Steady speed in a straight line means no acceleration.",
        say: "If the velocity is not changing at all, then there is nothing to accelerate. So an object moving at constant velocity, steady speed in a straight line, has 0 acceleration.",
      },
      {
        kind: "concept",
        heading: "Deceleration",
        body: "*Deceleration*, or *retardation*, is a decrease in velocity over time. The object slows down while still moving the same way. Because the velocity is dropping, the acceleration has a *negative* sign.",
        say: "When something slows down, we call it deceleration. The object is still moving the same way, but losing velocity. Since the velocity is falling, the acceleration comes out negative.",
      },
      {
        kind: "choice",
        question: "A car travelling at 24 m/s is brought to rest in 6 s. What is its acceleration?",
        options: ["4 m/s^2", "-4 m/s^2", "-144 m/s^2", "0 m/s^2"],
        correct: 1,
        ask: "The car ends at rest, so the final velocity is 0. Work out 0 - 24, then divide by 6. Watch the sign. Which option is that?",
        hints: [
          "At rest the final velocity is 0.",
          "0 - 24 is -24, and that divided by 6 is -4.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{v - u}{t}" },
          { label: "Substitute", latex: "a = \\dfrac{0 - 24}{6}" },
          { label: "Answer", latex: "a = -4\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is -4 metres per second squared, because 0 - 24 is -24, and that divided by 6 is -4. The car decelerates at 4 metres per second squared.",
      },
      {
        kind: "choice",
        question: "A bus moves along a straight road at a steady 15 m/s for one minute. What is its acceleration?",
        options: ["15 m/s^2", "0.25 m/s^2", "900 m/s^2", "0 m/s^2"],
        correct: 3,
        ask: "The velocity stays the same the whole time. If the velocity does not change, what is the acceleration?",
        hints: [
          "Constant velocity means no change in velocity.",
          "If the change in velocity is 0, the acceleration is 0.",
        ],
        explain: "The acceleration is 0, because the velocity stays constant, so there is no change in velocity at all.",
      },
      {
        kind: "classify",
        prompt: "Sort each motion by its acceleration.",
        bins: ["Positive", "Zero", "Negative"],
        items: [
          { text: "A car speeding up from 10 m/s to 18 m/s", bin: 0 },
          { text: "A train cruising at a steady 30 m/s", bin: 1 },
          { text: "A cyclist braking from 8 m/s to 2 m/s", bin: 2 },
          { text: "A lorry slowing to a stop at a red light", bin: 2 },
        ],
        explain: "Speeding up gives positive acceleration, steady velocity gives 0, and slowing down gives negative acceleration.",
        ask: "If the velocity rises it is positive, if it stays the same it is 0, and if it falls it is negative. Sort each one.",
        hints: [
          "Steady velocity means 0 acceleration.",
          "Braking and slowing down both give a negative acceleration.",
        ],
      },
      {
        kind: "insight",
        body: "A *negative acceleration* is not a special new quantity. It is just an acceleration pointing *opposite* to the motion, which is why it *slows the object down*.",
        say: "One last idea. A negative acceleration is nothing exotic. It simply points the opposite way to the motion, and that is exactly why the object slows down.",
      },
    ],
  },
  {
    id: "t2.5-3",
    code: "T2.5c",
    title: "Uniform vs non-uniform acceleration",
    blurb: "Same change each second, or a changing change",
    steps: [
      {
        kind: "concept",
        heading: "Uniform acceleration",
        body: "Acceleration is *uniform* when the velocity changes by the *same amount* in every second. On a velocity-time graph this gives a *straight, sloping line* of *constant gradient*.",
        say: "Uniform acceleration means the velocity gains the same amount every single second, like 10, 20, 30. On a velocity against time graph that draws a straight sloping line.",
      },
      {
        kind: "concept",
        heading: "Non-uniform acceleration",
        body: "Acceleration is *non-uniform* when the *velocity change* is not the same each second. The gain grows or shrinks over time, so the velocity-time graph is a *curve*.",
        say: "Non-uniform acceleration means the velocity change is different each second, maybe 5, then 8, then 12. Because the slope keeps changing, the velocity against time graph bends into a curve.",
      },
      {
        kind: "classify",
        prompt: "Sort each description as uniform or non-uniform acceleration.",
        bins: ["Uniform", "Non-uniform"],
        items: [
          { text: "Velocity rises by 3 m/s every second", bin: 0 },
          { text: "Velocity gains 2 m/s, then 5 m/s, then 9 m/s in each second", bin: 1 },
          { text: "A velocity-time graph that is a straight sloping line", bin: 0 },
          { text: "A velocity-time graph that curves and gets steeper", bin: 1 },
        ],
        explain: "The same change each second, or a straight line, is uniform. A changing change, or a curved graph, is non-uniform.",
        ask: "Same gain every second, or a straight line, is uniform. A changing gain, or a curve, is non-uniform. Sort each one.",
        hints: [
          "Uniform means the same velocity change in every second.",
          "A curved velocity-time graph shows a changing acceleration.",
        ],
      },
      {
        kind: "graphpick",
        prompt: "Which velocity-time graph shows uniform acceleration from rest?",
        yLabel: "v",
        xLabel: "t",
        options: [
          { points: [[0, 0], [4, 8]], caption: "straight line up from zero" },
          { points: [[0, 2], [4, 2]], caption: "flat line" },
          { points: [[0, 0], [2, 1], [4, 8]], caption: "curve getting steeper" },
        ],
        correct: 0,
        ask: "Uniform acceleration adds the same velocity each second, and from rest it starts at 0. What shape is that?",
        hints: [
          "Uniform acceleration is a straight sloping line.",
          "From rest means the line starts at 0 velocity.",
        ],
        explain: "A straight line sloping up from 0 shows uniform acceleration: the velocity gains the same amount every second.",
      },
      {
        kind: "choice",
        question: "A velocity-time graph is a curve that gets steeper over time. What does this tell you?",
        options: [
          "The acceleration is zero",
          "The velocity is constant",
          "The acceleration is non-uniform",
          "The object is at rest",
        ],
        correct: 2,
        ask: "A straight line means uniform acceleration. What does a curve, where the slope keeps changing, mean instead?",
        hints: [
          "A changing slope means a changing acceleration.",
          "Non-uniform acceleration draws a curve, not a straight line.",
        ],
        explain: "The acceleration is non-uniform, because the changing slope of the curve shows the velocity gains a different amount each second.",
      },
      {
        kind: "insight",
        body: "The shape of a velocity-time graph tells the whole story: a *straight slope* is *uniform acceleration*, and a *curve* is *non-uniform acceleration*.",
        say: "So keep this picture in mind. On a velocity against time graph, a straight slope means uniform acceleration, and a curve means non-uniform acceleration. The shape tells you everything.",
      },
    ],
  },
];
