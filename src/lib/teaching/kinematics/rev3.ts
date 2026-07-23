import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.rev3",
    code: "R3",
    title: "Revision 3",
    blurb: "Checkpoint: displacement-time graphs",
    kind: "revision",
    steps: [
      // 1 (choice)
      {
        kind: "choice",
        question: "On a displacement-time graph, what does the gradient of the line represent?",
        options: ["The acceleration", "The velocity", "The distance from the origin", "The total time"],
        correct: 1,
        ask: "On a displacement-time graph, the slope tells you how fast the displacement is changing. What quantity is that?",
        hints: [
          "Gradient is the change in displacement divided by the change in time.",
          "Displacement over time gives velocity.",
        ],
        explain: "The gradient of a displacement-time graph is the velocity, because it is the change in displacement divided by the change in time.",
      },
      // 2 (choice) velocity-as-gradient calculation
      {
        kind: "choice",
        question: "A displacement-time graph rises in a straight line from 0 to 5 m during the first 2 s. What is the velocity in that interval?",
        options: ["10 m/s", "0.4 m/s", "2.5 m/s", "3 m/s"],
        correct: 2,
        ask: "Velocity is the gradient. Take the rise of five metres and divide by the two seconds. What do you get?",
        hints: [
          "Velocity equals change in displacement over change in time.",
          "Five metres divided by two seconds.",
        ],
        explain: "The velocity is two point five metres per second, because five metres divided by two seconds is two point five.",
      },
      // 3 (choice) horizontal line
      {
        kind: "choice",
        question: "A displacement-time graph is a flat horizontal line for several seconds. What is the object doing?",
        options: ["At rest", "Moving at constant velocity", "Speeding up", "Moving back to the origin"],
        correct: 0,
        ask: "A flat line means the displacement is not changing at all. If the displacement stays the same, how fast is the object moving?",
        hints: [
          "No change in displacement means no movement.",
          "A gradient of zero means zero velocity.",
        ],
        explain: "The object is at rest, because a horizontal line has zero gradient, so the displacement stays the same and the velocity is zero.",
      },
      // 4 (choice) negative gradient
      {
        kind: "choice",
        question: "On a displacement-time graph, what does a negative gradient tell you?",
        options: ["The object is at rest", "The object is speeding up", "The object is moving back towards the origin", "The object has zero displacement"],
        correct: 2,
        ask: "A line sloping downwards means the displacement is getting smaller. If the displacement shrinks, which way is the object heading?",
        hints: [
          "Falling displacement means the object returns towards its start.",
          "A negative gradient means a negative velocity.",
        ],
        explain: "A negative gradient means the object is moving backward, towards the origin, so its velocity is negative.",
      },
      // 5 (choice) touches time-axis again
      {
        kind: "choice",
        question: "On a displacement-time graph, the line comes back down and touches the time-axis again. What does this tell you?",
        options: ["The object has stopped forever", "The object is back at the origin", "The velocity is at its greatest", "The object is at rest"],
        correct: 1,
        ask: "The height of the line is the distance from the origin. When the height drops back to zero, where is the object?",
        hints: [
          "The vertical height gives the distance from the origin.",
          "A height of zero means the displacement is zero.",
        ],
        explain: "The object is back at the origin, because the displacement has returned to zero when the line touches the time-axis again.",
      },
      // 6 (interactive: graphpick) at rest
      {
        kind: "graphpick",
        prompt: "Which displacement-time graph shows an object that is at rest?",
        yLabel: "d",
        xLabel: "t",
        options: [
          { points: [[0, 3], [4, 3]], caption: "flat horizontal line" },
          { points: [[0, 0], [4, 8]], caption: "straight line sloping up" },
          { points: [[0, 0], [2, 1], [4, 8]], caption: "curve getting steeper" },
        ],
        correct: 0,
        ask: "At rest means the displacement does not change. Which graph stays at the same height the whole time?",
        hints: [
          "A resting object keeps the same displacement.",
          "Look for the flat, horizontal line.",
        ],
        explain: "The flat horizontal line shows an object at rest, because its displacement stays the same, so its velocity is zero.",
      },
      // 7 (interactive: graphpick) constant velocity forward
      {
        kind: "graphpick",
        prompt: "Which displacement-time graph shows constant velocity away from the origin?",
        yLabel: "d",
        xLabel: "t",
        options: [
          { points: [[0, 6], [4, 2]], caption: "straight line sloping down" },
          { points: [[0, 0], [4, 8]], caption: "straight line sloping up" },
          { points: [[0, 0], [2, 1], [4, 8]], caption: "curve getting steeper" },
        ],
        correct: 1,
        ask: "Constant velocity forward means the displacement grows by the same amount each second. What shape does that make?",
        hints: [
          "Uniform velocity is a straight, sloping line.",
          "Away from the origin means the displacement increases.",
        ],
        explain: "A straight line sloping up shows constant velocity away from the origin, because the displacement increases by the same amount every second.",
      },
      // 8 (interactive: graphpick) non-uniform increasing
      {
        kind: "graphpick",
        prompt: "Which displacement-time graph shows a non-uniform, increasing velocity away from the origin?",
        yLabel: "d",
        xLabel: "t",
        options: [
          { points: [[0, 2], [4, 2]], caption: "flat horizontal line" },
          { points: [[0, 0], [4, 8]], caption: "straight line sloping up" },
          { points: [[0, 0], [2, 1], [4, 8]], caption: "curve getting steeper" },
        ],
        correct: 2,
        ask: "Increasing velocity means the line gets steeper as time goes on. Which graph curves upward, getting steeper?",
        hints: [
          "A curve that steepens means the velocity is rising.",
          "A straight line would mean the velocity is constant, not increasing.",
        ],
        explain: "The curve getting steeper shows a non-uniform, increasing velocity, because the displacement increases at an increasing rate.",
      },
      // 9 (interactive: classify)
      {
        kind: "classify",
        prompt: "Sort each displacement-time shape by the motion it shows.",
        bins: ["At rest", "Constant velocity", "Increasing velocity"],
        items: [
          { text: "Horizontal line", bin: 0 },
          { text: "Straight line, positive slope", bin: 1 },
          { text: "Curve getting steeper", bin: 2 },
          { text: "Straight line, negative slope", bin: 1 },
        ],
        ask: "Flat means at rest, a straight slope means constant velocity, and a steepening curve means increasing velocity. Tap each shape, then its bin.",
        hints: [
          "A flat line has zero gradient, so the object is at rest.",
          "A straight sloping line, up or down, means a constant velocity.",
        ],
        explain: "A horizontal line is at rest, any straight slope is a constant velocity, and a curve getting steeper is an increasing velocity.",
      },
      // 10 (interactive: spoterror) gradient calculation mistake
      {
        kind: "spoterror",
        prompt: "A student finds the velocity from a displacement-time graph that rises from 0 to 12 m in 4 s. Tap the line with the mistake.",
        lines: [
          "d_1 = 0 m, d_2 = 12 m, t = 4 s",
          "velocity = gradient = (d_2 - d_1) / t",
          "velocity = (12 - 0) / 4",
          "velocity = 12 / 4 = 4 m/s",
        ],
        errorLine: 3,
        ask: "Check the last line. Twelve divided by four. Is that four?",
        hints: [
          "Work out twelve divided by four.",
          "Twelve divided by four is three, not four.",
        ],
        explain: "The last line is wrong: twelve divided by four is three, so the velocity is three metres per second.",
      },
      // 11 (open) describe the motion
      {
        kind: "open",
        prompt: "A displacement-time graph shows this motion: from 0 to 2 s the line rises straight from 0 to 5 m; from 2 to 6 s it stays flat at 5 m; from 6 to 10 s it falls straight back to 0 m. Describe the motion in each stage.",
        modelAnswer: "From zero to two seconds the displacement increases uniformly, so the object moves with a constant velocity away from the origin. From two to six seconds the displacement stays at five metres, so the object is at rest. From six to ten seconds the displacement decreases uniformly back to zero, so the object moves with a constant velocity towards the origin and ends back at the origin.",
        marks: [
          "0 to 2 s: displacement increases uniformly, so constant velocity away from the origin.",
          "2 to 6 s: displacement stays at 5 m, so the object is at rest.",
          "6 to 10 s: displacement decreases uniformly to 0, so constant velocity towards the origin, back at the origin.",
        ],
        ask: "Take each stage in turn. A straight rising line is constant velocity forward, a flat line is at rest, and a straight falling line is constant velocity back towards the origin.",
      },
      // 12 (open) velocity calculation with working
      {
        kind: "open",
        prompt: "During a jog, a displacement-time graph rises in a straight line from 4 m at 10 s to 14 m at 15 s. Calculate the velocity over this interval, showing your working.",
        modelAnswer: "The velocity is the gradient of the line. The change in displacement is fourteen minus four, which is ten metres. The change in time is fifteen minus ten, which is five seconds. So the velocity is ten divided by five, which is two metres per second away from the origin.",
        marks: [
          "Change in displacement = 14 - 4 = 10 m.",
          "Change in time = 15 - 10 = 5 s.",
          "Velocity = gradient = 10 / 5 = 2 m/s (away from the origin).",
        ],
        ask: "Velocity is the gradient. Work out the rise in displacement, then the change in time, then divide the rise by the time.",
      },
    ],
  },
];
