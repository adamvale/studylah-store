import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics, Practical Chapter 2, section 5. Grounded in the source chapter (pendulum).
// Figure colours follow the house key: apparatus outlines (stand, rule, bob, string) and plotted crosses = white/grey;
// grid and dashed guides = grey; a measured length arrow and the best-fit line = blue; the gradient triangle = amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.5",
    code: "TP2.5",
    title: "The simple pendulum: finding g",
    blurb: "Timing a swinging bob to measure the acceleration of free fall",
    steps: [
      {
        kind: "concept",
        heading: "A simple pendulum",
        body: "A *simple pendulum* is a small heavy *bob* hung on a light string from a fixed support, free to swing to and fro in one vertical plane.",
        say: "A simple pendulum is about as basic as apparatus gets. It is just a small heavy bob tied to a light string and hung from a fixed support, so it can swing back and forth in one flat vertical plane. Pull the bob a little to one side, let go, and it swings to and fro. That steady swing is what lets us measure gravity.",
      },
      {
        kind: "concept",
        heading: "The period T",
        body: "The *period* T is the time for *one complete oscillation*, there and back. To measure it you time *20 oscillations* and divide by 20, because one swing is too quick to time by hand.",
        say: "The period, capital T, is the time for one complete oscillation, all the way over and all the way back to the start. A single swing is far too fast to time accurately by hand, and your reaction time would swamp it. So you time 20 whole oscillations with a stopwatch and divide the total by 20. Averaging over 20 swings shrinks the reaction-time error to a twentieth of its size.",
      },
      {
        kind: "concept",
        heading: "Measuring the length",
        figure: "fig-pr2-07-pendulum-apparatus",
        body: "The *length* l runs from the *support* down to the *centre of the bob*. Hold the rule *vertical* and read it eye-level to the mark, to avoid a parallax error.",
        say: "In the picture the string is clamped in a split cork at the top of a white retort stand, and the bob hangs at the bottom. A blue arrow marks the length l, and notice it runs from the support all the way down to the centre of the bob, not to its top or bottom. A white metre rule stands vertically beside it. Keep the rule truly vertical and read it square-on at eye level, so you do not pick up a parallax error.",
      },
      {
        kind: "concept",
        heading: "The pendulum equation",
        body: "For *small* swings the period depends only on the *length* and on *g*, the acceleration of free fall. A longer string gives a longer period.",
        formula: {
          latex: "T = 2\\pi\\sqrt{\\dfrac{l}{g}}",
          where: [
            { sym: "T", meaning: "period, time for one oscillation", unit: "s" },
            { sym: "l", meaning: "length to the centre of the bob", unit: "m" },
            { sym: "g", meaning: "acceleration of free fall", unit: "m/s^2" },
          ],
        },
        say: "Here is the law of the pendulum. The period equals 2 pi times the square root of the length divided by g, where g is the acceleration of free fall, about 9 point 8 metres per second squared. Read it off and you can see a longer string makes a longer period, but nothing in this equation depends on how heavy the bob is or how far you pull it back.",
      },
      {
        kind: "concept",
        heading: "Squaring makes a straight line",
        figure: "fig-pr2-09-period2-length-graph",
        body: "*Squaring* the equation *linearises* it: T^2 = (4 pi^2 / g) l. So a graph of *T^2 against l* is a straight line through the origin, and its *gradient* is 4 pi^2 / g.",
        formula: {
          latex: "T^2 = \\dfrac{4\\pi^2}{g}\\,l",
          where: [
            { sym: "T^2", meaning: "period squared", unit: "s^2" },
            { sym: "l", meaning: "length", unit: "m" },
            { sym: "g", meaning: "acceleration of free fall", unit: "m/s^2" },
          ],
        },
        say: "That square root is awkward to work with, so we square both sides. Squaring turns it into T squared equals 4 pi squared over g, all times l. That is the equation of a straight line. So if you plot T squared up the side against length l along the bottom, the points fall on a straight line that passes through the origin. In the graph the white crosses lie on a blue best-fit line rising from the corner, and an amber triangle on the line marks the gradient. The gradient equals 4 pi squared divided by g.",
      },
      {
        kind: "insight",
        body: "Rearranging the gradient gives *g = 4 pi^2 / gradient*. The period grows with *length* but does NOT depend on the bob's *mass* or, for small swings, the *amplitude*.",
        say: "Here is the payoff to remember. Because the gradient is 4 pi squared over g, you just flip it round: g equals 4 pi squared divided by the gradient of your line. And note what the period ignores. It rises with the length of the string, but it does not care about the mass of the bob or, as long as the angle stays small, how far you pulled it back. Length is the only thing that changes the period.",
      },
      {
        kind: "choice",
        question: "A stopwatch reads 40.12 s for 20 complete oscillations. What is the period T?",
        options: ["40.12 s", "0.4988 s", "2.006 s", "20.06 s"],
        correct: 2,
        ask: "The period is the total time for 20 oscillations divided by 20. Work out 40.12 ÷ 20.",
        hints: [
          "Use T equals total time divided by the number of oscillations.",
          "40.12 ÷ 20 is 2.006, a time in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{40.12}{20}" },
          { label: "Answer", latex: "T = 2.006\\ \\text{s}" },
        ],
        explain: "The period is 2.006 seconds, because 40.12 seconds shared over 20 oscillations is 2.006 seconds each.",
      },
      {
        kind: "slider",
        prompt: "For a length l of 1.000 m the period T is 2.006 s. Set the slider to the value of T^2 / l, in s^2/m.",
        min: 0,
        max: 6,
        step: 0.01,
        unit: "s^2/m",
        start: 0,
        targetMin: 3.95,
        targetMax: 4.1,
        ask: "Square the period, then divide by the length. Work out 2.006 squared, then divide by 1.000.",
        hints: [
          "T^2 over l is the gradient of the T^2 against l line.",
          "2.006 squared is about 4.02, and dividing by 1.000 leaves 4.02.",
        ],
        working: [
          { label: "Formula", latex: "k = \\dfrac{T^2}{l}" },
          { label: "Substitute", latex: "k = \\dfrac{(2.006)^2}{1.000}" },
          { label: "Answer", latex: "k = 4.02\\ \\text{s}^2/\\text{m}" },
        ],
        explain: "The value is 4.02 s^2 per metre, because 2.006 squared is 4.02 and dividing by a length of 1.000 metre leaves 4.02.",
      },
      {
        kind: "choice",
        question: "A graph of T^2 against l has a gradient of 4.02 s^2/m. Taking 4 pi^2 = 39.48, find g.",
        options: ["4.02 m/s^2", "9.8 m/s^2", "39.48 m/s^2", "0.10 m/s^2"],
        correct: 1,
        ask: "The value of g is 4 pi squared divided by the gradient. Work out 39.48 ÷ 4.02.",
        hints: [
          "Use g equals 4 pi squared divided by the gradient.",
          "39.48 ÷ 4.02 is about 9.8, an acceleration.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{4\\pi^2}{\\text{gradient}}" },
          { label: "Substitute", latex: "g = \\dfrac{39.48}{4.02}" },
          { label: "Answer", latex: "g = 9.8\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration of free fall is 9.8 metres per second squared, because 39.48 divided by the gradient 4.02 is 9.8.",
      },
      {
        kind: "choice",
        question: "Another student's best-fit line has a gradient of 4.05 s^2/m. Taking 4 pi^2 = 39.48, find g.",
        options: ["9.7 m/s^2", "10.2 m/s^2", "4.05 m/s^2", "20.0 m/s^2"],
        correct: 0,
        ask: "Again g is 4 pi squared divided by the gradient. Work out 39.48 ÷ 4.05.",
        hints: [
          "Use g equals 4 pi squared divided by the gradient.",
          "39.48 ÷ 4.05 is about 9.7.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{4\\pi^2}{\\text{gradient}}" },
          { label: "Substitute", latex: "g = \\dfrac{39.48}{4.05}" },
          { label: "Answer", latex: "g = 9.7\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration of free fall is 9.7 metres per second squared, because 39.48 divided by the gradient 4.05 is 9.7.",
      },
      {
        kind: "choice",
        question: "A single pendulum has l = 0.90 m and T = 1.90 s. Using g = 4 pi^2 l / T^2 with 4 pi^2 = 39.48, find g.",
        options: ["8.5 m/s^2", "3.61 m/s^2", "19.6 m/s^2", "9.8 m/s^2"],
        correct: 3,
        ask: "Multiply 4 pi squared by the length, then divide by the period squared. Work out 39.48 × 0.90, then divide by 1.90 squared.",
        hints: [
          "First square the period: 1.90 squared is 3.61.",
          "39.48 × 0.90 is 35.53, and 35.53 ÷ 3.61 is about 9.8.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{4\\pi^2 l}{T^2}" },
          { label: "Substitute", latex: "g = \\dfrac{39.48 \\times 0.90}{(1.90)^2}" },
          { label: "Answer", latex: "g = 9.8\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration of free fall is 9.8 metres per second squared, because 39.48 × 0.90 is 35.53, and dividing by 1.90 squared, which is 3.61, gives 9.8.",
      },
      {
        kind: "choice",
        question: "Which change does NOT alter the period of a simple pendulum swinging through a small angle?",
        options: ["Making the string longer", "Using a heavier bob", "Moving to a planet with a different g", "Shortening the string"],
        correct: 1,
        ask: "The period depends on the length and on g only. Which listed change touches neither of those?",
        hints: [
          "Length changes the period; g changes the period.",
          "The mass of the bob cancels out of the equation, so a heavier bob makes no difference.",
        ],
        explain: "Using a heavier bob does not change the period, because mass does not appear in the pendulum equation. Only the length and g affect the period.",
      },
      {
        kind: "order",
        prompt: "Put the steps for finding g from a pendulum in the correct order.",
        items: [
          "Measure the length l from the support to the centre of the bob",
          "Time 20 oscillations and divide by 20 to get the period T",
          "Repeat for several lengths and plot T^2 against l",
          "Draw the best-fit line and find its gradient",
          "Calculate g from g = 4 pi^2 / gradient",
        ],
        ask: "You need a length and a period before you can plot anything, and you need the whole line before you can take its gradient.",
        hints: [
          "Start by measuring a length, then time the swings for that length.",
          "Only once the T^2 against l line is drawn can you read its gradient and work out g.",
        ],
        explain: "First measure l, then time 20 oscillations for T, repeat and plot T^2 against l, take the gradient of the best-fit line, and finally get g from 4 pi squared divided by the gradient.",
      },
      {
        kind: "graphpick",
        prompt: "Which graph shows the expected relationship between T^2 and l for a simple pendulum?",
        xLabel: "l (m)",
        yLabel: "T^2 (s^2)",
        options: [
          { points: [[0, 2], [1, 6], [2, 10]], caption: "a straight line with a positive intercept" },
          { points: [[0, 0], [1, 1], [2, 4]], caption: "an upward curve" },
          { points: [[0, 0], [1, 4], [2, 8]], caption: "a straight line through the origin" },
          { points: [[0, 8], [1, 4], [2, 0]], caption: "a line sloping downwards" },
        ],
        correct: 2,
        ask: "T^2 equals 4 pi squared over g times l, which is a straight line. When l is 0, what is T^2?",
        hints: [
          "The equation has no added constant, so the line must pass through the origin.",
          "A bigger length gives a bigger period, so the line rises from the origin, not falls.",
        ],
        explain: "The correct graph is a straight line through the origin, because T^2 equals a constant times l with no intercept, so when the length is 0 so is T^2.",
      },
    ],
  },
];
