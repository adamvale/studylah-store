import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.rev4",
    code: "R4",
    title: "Revision 4",
    blurb: "Checkpoint: velocity-time graphs",
    kind: "revision",
    steps: [
      // 1 choice: acceleration as gradient
      {
        kind: "choice",
        question: "On a velocity-time graph a straight line rises from 0 to 30 m/s in 15 s. What is the acceleration?",
        options: ["0.5 m/s^2", "2 m/s^2", "45 m/s^2", "450 m/s^2"],
        correct: 1,
        ask: "On a velocity-time graph the gradient is the acceleration. Take the change in velocity, thirty, and divide by the time, fifteen. What do you get?",
        hints: [
          "The gradient of a velocity-time graph is the acceleration.",
          "Thirty divided by fifteen is two.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{v-u}{t}" },
          { label: "Substitute", latex: "a = \\dfrac{30-0}{15}" },
          { label: "Answer", latex: "a = 2\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is two metres per second squared, because the gradient is the change in velocity, thirty, divided by the time, fifteen.",
      },
      // 2 choice: displacement as area (constant velocity section)
      {
        kind: "choice",
        question: "A car holds a constant velocity of 30 m/s for 30 s. On its velocity-time graph, what is the displacement over that time?",
        options: ["1 m", "60 m", "900 m", "0 m"],
        correct: 2,
        ask: "The area under a velocity-time graph is the displacement. Here it is a rectangle, thirty tall and thirty wide. What is that area?",
        hints: [
          "The area under a velocity-time graph is the displacement.",
          "A rectangle area is height times width, thirty times thirty.",
        ],
        working: [
          { label: "Formula", latex: "d = v \\times t" },
          { label: "Substitute", latex: "d = 30 \\times 30" },
          { label: "Answer", latex: "d = 900\\ \\text{m}" },
        ],
        explain: "The displacement is nine hundred metres, because the area under the graph is a rectangle, thirty metres per second times thirty seconds.",
      },
      // 3 choice: touching the time-axis
      {
        kind: "choice",
        question: "On a velocity-time graph, what does it mean when the line touches the time-axis?",
        options: [
          "The object is momentarily at rest.",
          "The acceleration is zero.",
          "The object is moving at top speed.",
          "The displacement is at its largest.",
        ],
        correct: 0,
        ask: "The height of the line is the velocity. When the line reaches the time-axis, the velocity has fallen to zero. What does a velocity of zero mean?",
        hints: [
          "The height above the axis is the velocity.",
          "A velocity of zero means the object has stopped for that instant.",
        ],
        explain: "When the line touches the time-axis the velocity is zero, so the object is momentarily at rest at that instant.",
      },
      // 4 choice: negative velocity / speed vs velocity
      {
        kind: "choice",
        question: "A ball is thrown straight up, taking up as positive, then falls back. Which is true on the way down?",
        options: [
          "Both the speed and the velocity are negative.",
          "The speed is negative but the velocity is positive.",
          "The speed stays positive while the velocity is negative.",
          "Both the speed and the velocity are zero.",
        ],
        correct: 2,
        ask: "Speed is a scalar and can never be negative. Velocity is a vector, so it turns negative when the motion reverses. On the way down the ball moves the opposite way to the throw. Which option fits?",
        hints: [
          "Speed is always zero or positive.",
          "Velocity goes negative when the direction reverses.",
        ],
        explain: "On the way down the speed stays positive, because speed is a scalar, while the velocity is negative, because the ball now moves opposite to the upward direction taken as positive.",
      },
      // 5 choice: total displacement of a trapezium (worked example 6)
      {
        kind: "choice",
        question: "A train speeds up from rest to 30 m/s in 15 s, holds 30 m/s for 30 s, then slows to rest in 15 s. What is its total displacement?",
        options: ["900 m", "450 m", "1800 m", "1350 m"],
        correct: 3,
        ask: "The displacement is the whole area under the velocity-time graph, a trapezium. Add the two triangles, each two hundred and twenty five, to the middle rectangle of nine hundred. What is the total?",
        hints: [
          "Each triangle area is half times fifteen times thirty, which is two hundred and twenty five.",
          "The middle rectangle is thirty times thirty, which is nine hundred.",
        ],
        working: [
          { label: "Formula", latex: "d = \\tfrac{1}{2}(a+b)h" },
          { label: "Substitute", latex: "d = \\tfrac{1}{2}(30+60)(30)" },
          { label: "Answer", latex: "d = 1350\\ \\text{m}" },
        ],
        explain: "The total displacement is one thousand three hundred and fifty metres: two hundred and twenty five for each triangle plus nine hundred for the rectangle in the middle.",
      },
      // 6 interactive: graphpick, constant acceleration from rest
      {
        kind: "graphpick",
        prompt: "Which velocity-time graph shows uniform (constant) acceleration from rest?",
        yLabel: "v",
        xLabel: "t",
        options: [
          { points: [[0, 0], [4, 8]], caption: "straight line up from zero" },
          { points: [[0, 4], [4, 4]], caption: "flat line above zero" },
          { points: [[0, 0], [2, 1], [4, 8]], caption: "curve getting steeper" },
          { points: [[0, 8], [4, 0]], caption: "straight line down to zero" },
        ],
        correct: 0,
        ask: "Uniform acceleration means the velocity climbs by the same amount each second, so the line is straight. From rest means it starts at zero. Which shape is that?",
        hints: [
          "Uniform acceleration is a straight, sloping line.",
          "From rest means it begins at zero velocity.",
        ],
        explain: "A straight line sloping up from zero shows uniform acceleration from rest: the velocity gains the same amount every second.",
      },
      // 7 interactive: graphpick, the trapezium journey (accelerate, hold, decelerate)
      {
        kind: "graphpick",
        prompt: "A car accelerates from rest to 20 m/s in 4 s, holds 20 m/s for 8 s, then slows uniformly to rest. Which velocity-time graph shows this?",
        yLabel: "v",
        xLabel: "t",
        options: [
          { points: [[0, 0], [4, 20], [12, 20], [17, 0]], caption: "up, flat, then down to zero" },
          { points: [[0, 0], [4, 20], [12, 0]], caption: "up then straight down" },
          { points: [[0, 20], [12, 20], [17, 0]], caption: "flat then down" },
          { points: [[0, 0], [8, 20], [17, 20]], caption: "up then flat" },
        ],
        correct: 0,
        ask: "The motion has three parts: a rising line while speeding up, a flat line while holding steady, then a falling line while slowing to rest. Which graph has all three?",
        hints: [
          "Speeding up from rest is a line rising from zero.",
          "Holding a constant velocity is a flat line, then slowing to rest falls back to the axis.",
        ],
        explain: "The correct graph rises from zero to twenty, stays flat at twenty, then falls back to the axis, matching the accelerate, hold, then decelerate motion.",
      },
      // 8 interactive: classify v-t shapes by acceleration type
      {
        kind: "classify",
        prompt: "Sort each velocity-time shape by the acceleration it shows.",
        bins: ["Uniform acceleration", "Zero acceleration", "Non-uniform acceleration"],
        items: [
          { text: "Straight line sloping up", bin: 0 },
          { text: "Horizontal line above the axis", bin: 1 },
          { text: "Curve getting steeper", bin: 2 },
          { text: "Straight line sloping down to the axis", bin: 0 },
          { text: "Curve getting less steep", bin: 2 },
        ],
        ask: "A straight sloping line means constant acceleration, up or down. A flat line means no acceleration. A curve means the acceleration is changing. Sort each shape.",
        hints: [
          "Straight sloping lines mean the gradient, and so the acceleration, is constant.",
          "Any curve means the gradient is changing, so the acceleration is non-uniform.",
        ],
        explain: "Straight sloping lines show uniform acceleration, a flat line shows zero acceleration, and curves show non-uniform acceleration, because a changing gradient means a changing acceleration.",
      },
      // 9 interactive: spoterror on the gradient calculation
      {
        kind: "spoterror",
        prompt: "A student finds the acceleration from a velocity-time graph rising from 0 to 30 m/s in 15 s. Tap the line with the mistake.",
        lines: [
          "u = 0 m/s, v = 30 m/s, t = 15 s",
          "a = (v - u) / t",
          "a = (30 - 0) / 15",
          "a = 30 / 15 = 3 m/s^2",
        ],
        errorLine: 3,
        ask: "Check the last line. Thirty divided by fifteen. Is that three?",
        hints: [
          "Work out thirty divided by fifteen.",
          "Thirty divided by fifteen is two, not three.",
        ],
        explain: "The last line is wrong: thirty divided by fifteen is two, so the acceleration is two metres per second squared.",
      },
      // 10 interactive: order the steps to find displacement from area
      {
        kind: "order",
        prompt: "Put the steps to find a displacement from a velocity-time graph in order.",
        items: [
          "Split the area under the graph into simple shapes",
          "Find the area of each shape",
          "Add the areas together",
          "State the displacement with its unit",
        ],
        ask: "The displacement is the area under the graph. Think about how you would work out an odd shaped area on paper. Put the steps in order.",
        hints: [
          "Break a trapezium into triangles and a rectangle first.",
          "You add the separate areas before you can state the total.",
        ],
        explain: "Split the area into simple shapes, find each area, add them together, then state the displacement in metres.",
      },
      // 11 open: describe the motion and sketch (question 3)
      {
        kind: "open",
        prompt: "A car accelerates uniformly from rest at 5 m/s^2 for 4 s. It then holds that velocity for 8 s, then slows to rest with a uniform deceleration of 4 m/s^2. Find the velocity after the first 4 s, the time it takes to stop, the total displacement, and sketch the velocity-time graph.",
        modelAnswer: "After the first four seconds the velocity is the acceleration times time, five times four, which is twenty metres per second. To stop from twenty metres per second at four metres per second squared takes twenty divided by four, which is five seconds. For the displacement, find the area under the graph. The first triangle is half times four times twenty, which is forty metres. The middle rectangle is twenty times eight, which is one hundred and sixty metres. The last triangle is half times five times twenty, which is fifty metres. The total displacement is forty plus one hundred and sixty plus fifty, which is two hundred and fifty metres. The sketch is a line rising from zero to twenty over the first four seconds, then flat at twenty for eight seconds, then falling back to zero over the last five seconds.",
        marks: [
          "Velocity after 4 s = a x t = 5 x 4 = 20 m/s.",
          "Deceleration time = 20 / 4 = 5 s.",
          "Areas: triangle 1/2 x 4 x 20 = 40 m, rectangle 20 x 8 = 160 m, triangle 1/2 x 5 x 20 = 50 m.",
          "Total displacement = 40 + 160 + 50 = 250 m.",
          "Sketch: rises from 0 to 20 m/s over 4 s, flat at 20 m/s for 8 s, falls to 0 over 5 s.",
        ],
        ask: "First find the velocity after the first four seconds using acceleration times time. Then find the stopping time by dividing that velocity by the deceleration. For the displacement, split the area under the graph into a triangle, a rectangle and a triangle, then add them. Finally sketch the three parts of the motion.",
      },
      // 12 open: ball thrown up, speed-time vs velocity-time, distance vs displacement
      {
        kind: "open",
        prompt: "A ball leaves a hand at 5 m/s straight up, taking 10 s to reach the top, then returns to the hand in another 10 s. Taking up as positive, describe how its speed-time graph differs from its velocity-time graph, and find the total distance and the total displacement.",
        modelAnswer: "On the way up both the speed and the velocity fall from five to zero. On the way down the speed rises again from zero back to five, staying positive, so the speed-time graph is a V shape that never goes below the axis. The velocity, though, goes negative on the way down, because the ball now moves opposite to the upward direction, so the velocity-time graph carries straight down through zero into the negative region. For the distances, each part is a triangle of area half times five times ten, which is twenty five metres. The total distance is twenty five plus twenty five, which is fifty metres. The displacement adds a positive twenty five going up and a negative twenty five coming down, so the total displacement is zero, because the ball returns to the hand.",
        marks: [
          "Speed-time graph stays positive, a V shape, because speed is a scalar.",
          "Velocity-time graph goes negative on the way down, because the direction reverses.",
          "Each triangle area = 1/2 x 5 x 10 = 25 m; total distance = 50 m.",
          "Displacement = 25 + (-25) = 0 m, because the ball returns to the hand.",
        ],
        ask: "Think about what happens to the direction of motion when the ball turns at the top. Speed can never be negative, but velocity can. For the distance and displacement, work out each triangle area, then add them for distance but combine the signs for displacement.",
      },
    ],
  },
];
