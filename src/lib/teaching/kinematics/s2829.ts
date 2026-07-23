import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.8",
    code: "T2.8",
    title: "Equations of motion",
    blurb: "Four equations for constant acceleration, each leaving out one quantity",
    steps: [
      {
        kind: "concept",
        heading: "Only when a is constant",
        body: "The *equations of motion* link five quantities: acceleration a, initial velocity u, final velocity v, displacement d and time t. They only work when the *acceleration* is *constant*. If the acceleration changes during the motion, you cannot use them.",
        say: "Before you touch these equations, remember the one rule that decides everything. They only work when the acceleration stays the same the whole way through. They tie together 5 things: the acceleration, the starting velocity, the final velocity, the displacement, and the time. If the acceleration is changing, these equations simply do not apply.",
      },
      {
        kind: "concept",
        heading: "The four equations",
        figure: "fig-02-32-vt-worked-formulae",
        body: "There are *four equations*, and each one leaves out exactly one quantity (shown on the right). The second is just the *area* of the *trapezium* under a straight *velocity-time graph*.",
        formula: {
          latex:
            "\\begin{array}{ll} v = u + at & \\text{(no } d) \\\\[4pt] d = \\tfrac{1}{2}(u + v)\\,t & \\text{(no } a) \\\\[4pt] d = ut + \\tfrac{1}{2}at^{2} & \\text{(no } v) \\\\[4pt] v^{2} = u^{2} + 2ad & \\text{(no } t) \\end{array}",
          where: [
            { sym: "a", meaning: "acceleration (constant)", unit: "m/s^2" },
            { sym: "u", meaning: "initial velocity", unit: "m/s" },
            { sym: "v", meaning: "final velocity", unit: "m/s" },
            { sym: "d", meaning: "displacement", unit: "m" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Look at the diagram. The blue line on the velocity time graph climbs from a starting velocity u up to a final velocity v after a time t, and the shaded blue area underneath it forms a trapezium. Keep that picture in mind. There are 4 equations, and here is the neat pattern. Each equation quietly leaves out one of the 5 quantities. The first, v equals u plus a t, has no displacement in it. The second, d equals a half times u plus v, all times t, has no acceleration in it. The third, d equals u t plus a half a t squared, has no final velocity. And the fourth, v squared equals u squared plus 2 a d, has no time in it. That second one is really just the area of the trapezium under a straight velocity-time graph.",
      },
      {
        kind: "concept",
        heading: "Choosing the right one",
        body: "List the three quantities you know and the one you want. Then pick the *equation* that contains those four and leaves out the *quantity* you were not given. That way you never need a fifth unknown.",
        say: "So how do you choose? Write down the 3 things you are given and the one thing you are chasing. Then reach for the equation that leaves out the quantity you do not have. That is the whole trick: pick the equation missing the one value you were never told.",
      },
      {
        kind: "choice",
        question: "Which equation would you use to find v when you know u, a and t, but not d?",
        options: ["d = 1/2 (u + v) t", "v = u + at", "v^2 = u^2 + 2ad", "d = ut + 1/2 a t^2"],
        correct: 1,
        ask: "You know the starting velocity, the acceleration and the time, and you want the final velocity. Pick the equation that leaves out displacement. Which one is that?",
        hints: [
          "You want the equation with no displacement in it.",
          "The final velocity equals the starting velocity plus a t.",
        ],
        explain: "Use v equals u plus a t, because it links final velocity, starting velocity, acceleration and time, and leaves out the displacement you were not given.",
      },
      {
        kind: "tiles",
        prompt: "Build the equation that finds displacement d from u, a and t.",
        tiles: ["d =", "ut", "+", "1/2 a t^2", "v^2", "2ad"],
        answer: ["d =", "ut", "+", "1/2 a t^2"],
        explain: "The equation is d equals u t plus a half a t squared. It uses the starting velocity, the acceleration and the time, and leaves out the final velocity.",
        ask: "You are given the starting velocity, the acceleration and the time. Drag the tiles to build the displacement equation that leaves out final velocity.",
        hints: [
          "Start with d equals, then the u t term.",
          "Add a half a t squared. There is no v squared in this one.",
        ],
      },
      {
        kind: "choice",
        question: "An object moving at 50 m/s accelerates uniformly at 4 m/s^2 for 8 s. Using d = ut + 1/2 a t^2, what displacement does it travel?",
        options: ["400 m", "528 m", "128 m", "464 m"],
        correct: 1,
        ask: "Work out u times t, that is 50 times 8. Then a half times 4 times 8 squared. Add the 2 parts. Which option is that?",
        hints: [
          "The first part is 50 times 8, which is 400.",
          "The second part is a half times 4 times 64, which is 128. Now add them.",
        ],
        working: [
          { label: "Formula", latex: "d = ut + \\tfrac{1}{2}at^{2}" },
          { label: "Substitute", latex: "d = (50)(8) + \\tfrac{1}{2}(4)(8)^{2}" },
          { label: "Answer", latex: "d = 528\\ \\text{m}" },
        ],
        explain: "The displacement is 528 metres. 50 times 8 is 400, and a half times 4 times 8 squared is 128, and 400 plus 128 is 528.",
      },
      {
        kind: "spoterror",
        prompt: "A student finds v when u = 6 m/s, a = 2 m/s^2 and t = 5 s. Tap the line with the mistake.",
        lines: ["u = 6 m/s, a = 2 m/s^2, t = 5 s", "v = u + at", "v = 6 + 2 x 5", "v = 6 + 10 = 26 m/s"],
        errorLine: 3,
        ask: "Check the last line. 6 plus 10. Is that 26?",
        hints: [
          "Work out 6 plus 10 carefully.",
          "6 plus 10 is 16, not 26.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 6 + (2)(5)" },
          { label: "Answer", latex: "v = 16\\ \\text{m/s}" },
        ],
        explain: "The last line is wrong: 6 plus 10 is 16, so the final velocity is 16 metres per second.",
      },
      {
        kind: "insight",
        body: "Pick the *equation* by what it leaves out, not by what it puts in. Match the *missing quantity* to the one value you were never given.",
        say: "Here is the one idea to carry away. Do not hunt for the equation that has your answer in it. Instead, spot the quantity you were never given, and choose the equation that leaves that one out. Do that and the right equation almost picks itself.",
      },
    ],
  },
  {
    id: "t2.9",
    code: "T2.9",
    title: "Free fall",
    blurb: "Near Earth everything falls with the same acceleration g of about 10 m/s^2",
    steps: [
      {
        kind: "concept",
        heading: "Same g for every mass",
        body: "Near the Earth, any object released from a height accelerates downwards. If air resistance is negligible, every object falls with the same *constant acceleration*, whatever its mass. This acceleration of *free fall*, *g*, is about 10 m/s^2.",
        say: "Drop a heavy stone and a light pebble together, with no air resistance, and they hit the ground at the same moment. Near the Earth every falling object speeds up at the same rate, no matter how heavy it is. We call that rate g, the acceleration of free fall, and we take it as about 10 metres per second squared.",
      },
      {
        kind: "concept",
        heading: "Ten more every second",
        figure: "fig-02-34-freefall-ball",
        body: "A freely falling object gains 10 m/s of velocity during every second of the fall. Because the velocity increases by the same amount each second, its *velocity-time graph* is a *straight line* with a *constant gradient*.",
        say: "Look at the diagram. The blue ball is drawn falling down a dashed line, and the gaps between its positions grow wider and wider, while the yellow labels count its speed: 0 at the start, 10 metres per second after 1 second, 20 after 2, 30 after 3, with the green arrow showing the velocity climbing all the way down. That widening spacing is the giveaway. The ball gains the same 10 metres per second every single second, so it covers more ground each second than the last. Because the gain is steady, the velocity-time graph is a straight, sloping line.",
      },
      {
        kind: "concept",
        heading: "Signs when it goes up",
        body: "You must pick a *positive direction* first. If you take upward as positive, then g points the other way, so the acceleration is *negative*, about -10 m/s^2. Keep the *sign* the same all the way through the working.",
        say: "Once an object also travels upward, you have to choose a positive direction before you start. If you call upward positive, then gravity, which pulls down, becomes negative, about minus 10 metres per second squared. The key is to stick with that choice for the whole calculation and never switch it halfway.",
      },
      {
        kind: "slider",
        prompt: "A ball is dropped from rest. What is its velocity after 3 s, taking g as 10 m/s^2?",
        min: 0,
        max: 50,
        step: 5,
        unit: "m/s",
        start: 0,
        targetMin: 30,
        targetMax: 30,
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + (10)(3)" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "After 3 seconds the velocity is 30 metres per second, because it gains 10 metres per second every second, and 10 times 3 is 30.",
        ask: "It starts from rest and gains 10 metres per second each second. Slide to its velocity after 3 seconds.",
        hints: [
          "Each second adds another 10 metres per second.",
          "10 times 3 seconds is 30 metres per second.",
        ],
      },
      {
        kind: "choice",
        question: "A stone is dropped from rest at the top of a 45 m cliff and falls at 10 m/s^2. Using d = ut + 1/2 a t^2, how long does it take to reach the ground?",
        options: ["4.5 s", "9 s", "3 s", "2 s"],
        correct: 2,
        ask: "With u = 0, 45 = 1/2 × 10 × t^2. So 5t^2 = 45, and t^2 = 9. What is the square root of 9?",
        hints: [
          "Since it starts from rest, 45 = 1/2 × 10 × t^2.",
          "That gives t^2 = 9, so t is the square root of 9.",
        ],
        working: [
          { label: "Formula", latex: "d = ut + \\tfrac{1}{2}at^{2}" },
          { label: "Substitute", latex: "45 = (0)(t) + \\tfrac{1}{2}(10)t^{2}" },
          { label: "Answer", latex: "t = 3\\ \\text{s}" },
        ],
        explain: "The time is 3 seconds. With u = 0, 45 = 1/2 × 10 × t^2, so t^2 = 9, and the square root of 9 is 3.",
      },
      {
        kind: "choice",
        question: "For that same stone, using v = u + at, what is its velocity just before it lands after 3 s?",
        options: ["30 m/s", "15 m/s", "45 m/s", "10 m/s"],
        correct: 0,
        ask: "It starts from rest, so v equals 0 plus 10 times 3. Which option is that?",
        hints: [
          "Start from v equals u plus a t, with u equal to 0.",
          "10 times 3 seconds is 30 metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + (10)(3)" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "The velocity is 30 metres per second, because starting from rest, v equals 0 plus 10 times 3, which is 30.",
      },
      {
        kind: "order",
        prompt: "Put the steps to find a dropped stone's landing speed in order.",
        items: [
          "Take downward as positive, so a is +10 m/s^2 and u is 0",
          "Find the time to fall using d = ut + 1/2 a t^2",
          "Put that time into v = u + at",
          "State the velocity with its unit",
        ],
        explain: "First set the positive direction and note u is 0, then find the fall time from the displacement equation, then use v equals u plus a t, and finally state the answer in metres per second.",
        ask: "Think about what you need before you can find the speed. Put the steps in order.",
        hints: [
          "You need the time before you can find the final velocity.",
          "Set the signs first, then find t, then find v.",
        ],
      },
      {
        kind: "insight",
        body: "Free fall is just *constant acceleration* with a = g. The same four *equations of motion* apply once you fix which direction is *positive*.",
        say: "So free fall is nothing new. It is simply constant acceleration where the acceleration is g. The very same 4 equations of motion work here, as long as you decide which way is positive and keep the sign of g consistent with that choice.",
      },
    ],
  },
];
