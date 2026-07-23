import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.quiz",
    code: "Quiz",
    title: "Topical practice",
    blurb: "The whole topic: exam-style practice",
    kind: "quiz",
    steps: [
      // ---- 10 choice (MCQ) ----
      // 1 (distance from speed) correct = 3
      {
        kind: "choice",
        question: "A runner keeps a constant speed of 4.0 m/s. What distance does he cover in 3 minutes?",
        options: ["1.3 m", "12 m", "72 m", "720 m"],
        correct: 3,
        ask: "First change three minutes into seconds, then multiply by the speed. Four times one hundred and eighty. Which option is that?",
        hints: [
          "Three minutes is one hundred and eighty seconds.",
          "Distance is speed times time, so four times one hundred and eighty.",
        ],
        working: [
          { label: "Formula", latex: "d = v \\times t" },
          { label: "Substitute", latex: "t = 3 \\times 60 = 180\\ \\text{s}" },
          { label: "Substitute", latex: "d = 4 \\times 180" },
          { label: "Answer", latex: "d = 720\\ \\text{m}" },
        ],
        explain: "The distance is seven hundred and twenty metres, because four metres per second times one hundred and eighty seconds is seven hundred and twenty.",
      },
      // 2 (speed vs velocity) correct = 0
      {
        kind: "choice",
        question: "What is the difference between speed and velocity?",
        options: [
          "Velocity is speed in a stated direction.",
          "Velocity is the change of speed per unit time.",
          "Speed is velocity in a stated direction.",
          "Speed is the gradient of a velocity-time graph.",
        ],
        correct: 0,
        ask: "Both are measured in metres per second, but one of them carries a direction. Which statement matches that?",
        hints: [
          "Speed is a scalar, so it has size only.",
          "Velocity is a vector, so it is speed with a direction.",
        ],
        explain: "Velocity is speed in a stated direction. Speed is a scalar with size only, while velocity is a vector, because it carries a direction.",
      },
      // 3 (unit of acceleration) correct = 1
      {
        kind: "choice",
        question: "What is the unit of acceleration?",
        options: [
          "metre per second",
          "metre per second squared",
          "metre second",
          "metre second squared",
        ],
        correct: 1,
        ask: "Acceleration is the change of velocity each second, so its unit is the unit of velocity divided again by seconds. Which one is that?",
        hints: [
          "Velocity is measured in metres per second.",
          "Dividing metres per second by seconds gives metres per second squared.",
        ],
        explain: "The unit is the metre per second squared, written m/s^2, because acceleration is a change of velocity, in metres per second, during each second.",
      },
      // 4 (v = u + at, from rest) correct = 2
      {
        kind: "choice",
        question: "A cyclist starts from rest and accelerates uniformly at 0.4 m/s^2. What is his velocity after 5 s?",
        options: ["0.4 m/s", "1.5 m/s", "2.0 m/s", "2.5 m/s"],
        correct: 2,
        ask: "Use final velocity equals starting velocity plus acceleration times time. He starts from rest, so nought plus nought point four times five. Which option is that?",
        hints: [
          "Starting from rest means the initial velocity is zero.",
          "Nought point four times five is two.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + 0.4 \\times 5" },
          { label: "Answer", latex: "v = 2\\ \\text{m/s}" },
        ],
        explain: "His velocity is two metres per second, because starting from rest the velocity is nought point four times five, which is two.",
      },
      // 5 (velocity is gradient of d-t graph) correct = 1
      {
        kind: "choice",
        question: "Which statement about velocity is correct?",
        options: [
          "Velocity is the area under a displacement-time graph.",
          "Velocity is the gradient of a displacement-time graph.",
          "Velocity is the area under a velocity-time graph.",
          "Velocity is the gradient of a velocity-time graph.",
        ],
        correct: 1,
        ask: "On a displacement-time graph, the slope tells you how fast the displacement is changing. What is that slope called?",
        hints: [
          "The gradient of a displacement-time graph is the velocity.",
          "The gradient of a velocity-time graph is the acceleration, not the velocity.",
        ],
        explain: "Velocity is the gradient of a displacement-time graph. The gradient of a velocity-time graph gives acceleration, and the area under a velocity-time graph gives displacement.",
      },
      // 6 (straight d-t line through origin) correct = 3
      {
        kind: "choice",
        question: "A displacement-time graph is a straight line through the origin. Which statement is true of this graph?",
        options: [
          "The object is accelerating.",
          "The object has an increasing velocity at a decreasing rate.",
          "The object has a negative acceleration.",
          "The object moves with a constant velocity.",
        ],
        correct: 3,
        ask: "A straight line has the same slope everywhere, and the slope of a displacement-time graph is the velocity. So what stays the same?",
        hints: [
          "The gradient of a displacement-time graph is the velocity.",
          "A straight line has a constant gradient.",
        ],
        explain: "The object moves with a constant velocity, because a straight displacement-time line has a constant gradient, and that gradient is the velocity.",
      },
      // 7 (displacement of constant part, self-contained numbers) correct = 0
      {
        kind: "choice",
        question: "A velocity-time graph shows an object speed up from rest to 12 m/s in 4 s, then travel at a constant 12 m/s for 6 s, then slow to rest in 2 s. What is the displacement during the constant-velocity part?",
        options: ["72 m", "48 m", "120 m", "24 m"],
        correct: 0,
        ask: "During the constant part the displacement is the area of a rectangle, which is velocity times time. Twelve times six. Which option is that?",
        hints: [
          "Area under a velocity-time graph is the displacement.",
          "For the flat part, area is twelve times six.",
        ],
        working: [
          { label: "Formula", latex: "d = v \\times t" },
          { label: "Substitute", latex: "d = 12 \\times 6" },
          { label: "Answer", latex: "d = 72\\ \\text{m}" },
        ],
        explain: "The displacement is seventy two metres, because during the constant part the area is twelve metres per second times six seconds, which is seventy two.",
      },
      // 8 (average speed of whole journey, same object) correct = 2
      {
        kind: "choice",
        question: "For the same object, it speeds up from rest to 12 m/s in 4 s, holds 12 m/s for 6 s, then slows to rest in 2 s. What is the average speed of the whole journey?",
        options: ["7.0 m/s", "8.0 m/s", "9.0 m/s", "12 m/s"],
        correct: 2,
        ask: "Find the total distance as the whole area, then divide by the total time of twelve seconds. The total area is one hundred and eight metres. What is one hundred and eight over twelve?",
        hints: [
          "Total distance is twenty four plus seventy two plus twelve, which is one hundred and eight.",
          "Average speed is total distance over total time, so one hundred and eight over twelve.",
        ],
        working: [
          { label: "Formula", latex: "\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}" },
          { label: "Substitute", latex: "= \\dfrac{24 + 72 + 12}{4 + 6 + 2}" },
          { label: "Substitute", latex: "= \\dfrac{108}{12}" },
          { label: "Answer", latex: "= 9\\ \\text{m/s}" },
        ],
        explain: "The average speed is nine metres per second, because the total distance of one hundred and eight metres divided by the total time of twelve seconds is nine.",
      },
      // 9 (free fall velocity) correct = 3
      {
        kind: "choice",
        question: "A ball is dropped from rest and falls freely. Taking g as 10 m/s^2, what is its velocity after 3 s?",
        options: ["10 m/s", "15 m/s", "20 m/s", "30 m/s"],
        correct: 3,
        ask: "In free fall the velocity grows by ten metres per second every second. After three seconds, ten times three. Which option is that?",
        hints: [
          "A freely falling object gains ten metres per second each second.",
          "Ten times three is thirty.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + 10 \\times 3" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "The velocity is thirty metres per second, because a freely falling object gains ten metres per second every second, and ten times three is thirty.",
      },
      // 10 (which v-t graph, worded shapes) correct = 1
      {
        kind: "choice",
        question: "A car accelerates from rest until it reaches a constant velocity. Which velocity-time shape best represents how its velocity changes with time?",
        options: [
          "A horizontal line above zero the whole time.",
          "A line sloping up from zero, then becoming horizontal.",
          "A line that slopes down to zero.",
          "A curve that keeps getting steeper the whole time.",
        ],
        correct: 1,
        ask: "First the velocity rises steadily from zero, then it stops changing. What two shapes joined together show that?",
        hints: [
          "Accelerating from rest is a line sloping up from zero.",
          "Reaching a constant velocity is a horizontal line.",
        ],
        explain: "It is a line sloping up from zero, then becoming horizontal: the slope shows the acceleration from rest, and the flat part shows the constant velocity that follows.",
      },

      // ---- 10 interactive ----
      // 1 slider (acceleration, worked example 3a)
      {
        kind: "slider",
        prompt: "A trolley moving at 12 m/s increases its velocity to 20 m/s in 5 s. Find its acceleration.",
        min: 0,
        max: 3,
        step: 0.1,
        unit: " m/s^2",
        start: 0.4,
        targetMin: 1.5,
        targetMax: 1.7,
        ask: "Use change in velocity over time. Twenty take away twelve, then divide by five. Slide to the value.",
        hints: [
          "The change in velocity is twenty minus twelve, which is eight.",
          "Eight divided by five is one point six.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{v-u}{t}" },
          { label: "Substitute", latex: "a = \\dfrac{20-12}{5}" },
          { label: "Answer", latex: "a = 1.6\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is one point six metres per second squared, because the velocity gains eight metres per second over five seconds, and eight divided by five is one point six.",
      },
      // 2 order (steps to find acceleration)
      {
        kind: "order",
        prompt: "Put the steps to find an acceleration in the correct order.",
        items: [
          "Write down the values of u, v and t",
          "Subtract u from v to get the change in velocity",
          "Divide the change in velocity by the time",
          "State the answer in m/s^2",
        ],
        ask: "Think about what you need before you can divide. Put the steps in order.",
        hints: [
          "You need the change in velocity before you can divide by time.",
          "Acceleration is the change in velocity divided by the time taken.",
        ],
        explain: "Write down u, v and t, subtract u from v for the change in velocity, divide that change by the time, then state the answer in metres per second squared.",
      },
      // 3 match (d-t graph shapes to motion)
      {
        kind: "match",
        prompt: "Match each displacement-time shape to the motion it shows.",
        pairs: [
          { left: "Horizontal line", right: "Object at rest" },
          { left: "Straight line sloping up", right: "Constant velocity away from the origin" },
          { left: "Curve getting steeper", right: "Increasing velocity away from the origin" },
          { left: "Straight line sloping down", right: "Constant velocity towards the origin" },
        ],
        ask: "Remember the gradient of a displacement-time graph is the velocity. Match each shape to its motion.",
        hints: [
          "A flat line means the displacement is not changing.",
          "A steeper line means a greater velocity.",
        ],
        explain: "A horizontal line is at rest, a straight sloping line is constant velocity, a curve getting steeper is an increasing velocity, and a line sloping down is constant velocity back towards the origin.",
      },
      // 4 tiles (build v^2 = u^2 + 2ad)
      {
        kind: "tiles",
        prompt: "Build the equation of motion that leaves out time. Tap the tiles in order.",
        tiles: ["v^2", "=", "u^2", "+", "2ad", "t", "-"],
        answer: ["v^2", "=", "u^2", "+", "2ad"],
        ask: "This equation links final velocity, starting velocity, acceleration and displacement, with no time in it. Build it from the tiles.",
        hints: [
          "It starts with the final velocity squared.",
          "The right side is the starting velocity squared plus two times acceleration times displacement.",
        ],
        explain: "The equation is v^2 = u^2 + 2ad. It links final velocity, starting velocity, acceleration and displacement, and it is the one that leaves out time.",
      },
      // 5 cloze (free fall)
      {
        kind: "cloze",
        prompt: "Complete the sentence about free fall by dragging in the right value.",
        segments: [
          "Near the Earth, a freely falling object gains ",
          " of velocity every second, so its free fall acceleration is about ",
          " .",
        ],
        bank: ["10 m/s", "10 m/s^2", "1 m/s", "5 m/s^2"],
        answer: ["10 m/s", "10 m/s^2"],
        ask: "A falling object speeds up by the same amount each second. That amount each second is the acceleration. Fill the two blanks.",
        hints: [
          "The velocity gained each second is ten metres per second.",
          "The acceleration of free fall is about ten metres per second squared.",
        ],
        explain: "A freely falling object gains ten metres per second of velocity every second, so its free fall acceleration is about ten metres per second squared.",
      },
      // 6 spoterror (deceleration, worked example 3b)
      {
        kind: "spoterror",
        prompt: "A student finds the deceleration of a car going from 24 m/s to rest in 6 s. Tap the line with the mistake.",
        lines: [
          "u = 24 m/s, v = 0 m/s, t = 6 s",
          "a = (v - u) / t",
          "a = (0 - 24) / 6",
          "a = -24 / 6 = -6 m/s^2",
        ],
        errorLine: 3,
        ask: "Check the last line. Twenty four divided by six. Is that six?",
        hints: [
          "Work out twenty four divided by six.",
          "Twenty four divided by six is four, not six.",
        ],
        explain: "The last line is wrong: twenty four divided by six is four, so the acceleration is minus four metres per second squared, a deceleration of four metres per second squared.",
      },
      // 7 classify (v-t shapes by acceleration)
      {
        kind: "classify",
        prompt: "Sort each velocity-time shape by the acceleration it shows.",
        bins: ["Zero acceleration", "Uniform acceleration", "Non-uniform acceleration"],
        items: [
          { text: "Horizontal line above zero", bin: 0 },
          { text: "Straight line sloping up", bin: 1 },
          { text: "Curve getting steeper", bin: 2 },
          { text: "Flat line along zero", bin: 0 },
        ],
        ask: "The gradient of a velocity-time graph is the acceleration. Tap each shape, then the bin it belongs in.",
        hints: [
          "A flat line has no gradient, so the acceleration is zero.",
          "A straight sloping line has a constant gradient, so the acceleration is uniform.",
        ],
        explain: "Flat lines mean zero acceleration, a straight sloping line means uniform acceleration, and a curve getting steeper means a non-uniform, changing acceleration.",
      },
      // 8 graphpick (v-t uniform acceleration from rest)
      {
        kind: "graphpick",
        prompt: "Which velocity-time graph shows uniform acceleration from rest?",
        yLabel: "v",
        xLabel: "t",
        options: [
          { points: [[0, 0], [4, 8]], caption: "straight line up from zero" },
          { points: [[0, 4], [4, 4]], caption: "flat line above zero" },
          { points: [[0, 0], [2, 1], [4, 8]], caption: "curve getting steeper" },
        ],
        correct: 0,
        ask: "Uniform acceleration means the velocity climbs by the same amount each second, and from rest means it starts at zero. What shape is that?",
        hints: [
          "Uniform acceleration is a straight, sloping line.",
          "From rest means it begins at zero velocity.",
        ],
        explain: "A straight line sloping up from zero shows uniform acceleration from rest: the velocity gains the same amount every second. The curve would be a changing acceleration, and the flat line would be zero acceleration.",
      },
      // 9 plot (velocity of free fall after 2 s)
      {
        kind: "plot",
        prompt: "A ball falls from rest. On the velocity-time grid, plot its velocity after 2 s. Take g as 10 m/s^2.",
        xLabel: "t",
        yLabel: "v",
        xMax: 5,
        yMax: 50,
        targetX: 2,
        targetY: 20,
        tolerance: 2,
        ask: "In free fall the velocity grows by ten metres per second each second. After two seconds, ten times two. Plot the point at that time and velocity.",
        hints: [
          "The time is two seconds along the bottom.",
          "After two seconds the velocity is ten times two, which is twenty.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + 10 \\times 2" },
          { label: "Answer", latex: "v = 20\\ \\text{m/s}" },
        ],
        explain: "The point is at two seconds and twenty metres per second, because a freely falling object gains ten metres per second each second, and ten times two is twenty.",
      },
      // 10 graphpick (d-t constant velocity)
      {
        kind: "graphpick",
        prompt: "Which displacement-time graph shows an object moving at constant velocity away from the origin?",
        yLabel: "d",
        xLabel: "t",
        options: [
          { points: [[0, 0], [4, 0]], caption: "flat line along the bottom" },
          { points: [[0, 2], [4, 2]], caption: "flat line held above zero" },
          { points: [[0, 0], [4, 8]], caption: "straight line sloping up" },
        ],
        correct: 2,
        ask: "Constant velocity means the displacement grows by the same amount each second, so the graph has a steady slope. Which shape is that?",
        hints: [
          "The gradient of a displacement-time graph is the velocity.",
          "A flat line means the displacement is not changing, so the object is at rest.",
        ],
        explain: "A straight line sloping up shows constant velocity away from the origin, because the displacement grows by the same amount every second. The flat lines show an object at rest.",
      },

      // ---- 5 open ----
      // 1 (ball from 80 m, 4 s)
      {
        kind: "open",
        prompt: "A ball is held at rest 80 m above the ground, then released and accelerates uniformly as it falls. It reaches the ground in 4.0 s. Calculate (a) the average speed of the ball as it falls, (b) the maximum velocity of the ball.",
        modelAnswer: "For part a, the average speed is the total distance divided by the total time, which is eighty divided by four, giving twenty metres per second. For part b, take downward as positive with g equal to ten metres per second squared, starting from rest. Using final velocity equals starting velocity plus acceleration times time, the velocity is nought plus ten times four, which is forty metres per second, reached just as it lands.",
        marks: [
          "Average speed = total distance / total time = 80 / 4 = 20 m/s.",
          "Maximum velocity using v = u + at with u = 0, a = 10 m/s^2, t = 4 s.",
          "v = 0 + 10 x 4 = 40 m/s just before landing.",
        ],
        ask: "For the average speed, divide the eighty metres by the four seconds. For the maximum velocity, the ball starts from rest and gains ten metres per second every second, so use final velocity equals starting velocity plus acceleration times time.",
      },
      // 2 (car from rest, 30 m in 10 s)
      {
        kind: "open",
        prompt: "A car accelerates uniformly from rest and travels 30 m during the first 10.0 s of its motion. Calculate (a) the average speed over this period, (b) the velocity at the end of this period, (c) the acceleration.",
        modelAnswer: "For part a, the average speed is thirty divided by ten, which is three metres per second. For part b, because the acceleration is uniform and it starts from rest, the average speed is half of the final velocity, so the final velocity is two times three, which is six metres per second. For part c, the acceleration is the change in velocity over time, which is six over ten, giving nought point six metres per second squared.",
        marks: [
          "Average speed = 30 / 10 = 3 m/s.",
          "Uniform acceleration from rest: average speed = half of final velocity, so v = 2 x 3 = 6 m/s.",
          "Acceleration = (v - u) / t = 6 / 10 = 0.6 m/s^2.",
        ],
        ask: "First find the average speed as thirty over ten. Because it starts from rest with uniform acceleration, the average speed is half the final velocity, so double it to get the final velocity. Then find the acceleration as the change in velocity divided by the time.",
      },
      // 3 (trolley 2.4 m in 1.5 s)
      {
        kind: "open",
        prompt: "In an experiment, a trolley is pushed from rest and accelerates uniformly. It moves a displacement of 2.4 m in 1.5 s. (a) Determine the average velocity of the trolley. (b) If the acceleration is constant, calculate its velocity after 1.5 s. (c) What is the acceleration of the trolley?",
        modelAnswer: "For part a, the average velocity is the displacement over the time, which is two point four divided by one point five, giving one point six metres per second. For part b, starting from rest with uniform acceleration the average velocity is half of the final velocity, so the final velocity is two times one point six, which is three point two metres per second. For part c, the acceleration is the change in velocity over time, which is three point two divided by one point five, giving about two point one metres per second squared.",
        marks: [
          "Average velocity = 2.4 / 1.5 = 1.6 m/s.",
          "From rest with uniform acceleration: v = 2 x 1.6 = 3.2 m/s.",
          "Acceleration = 3.2 / 1.5 = 2.1 m/s^2 (about 2.13 m/s^2).",
        ],
        ask: "The average velocity is the displacement over the time. Since it starts from rest, the final velocity is double the average velocity. Then the acceleration is the change in velocity divided by the time.",
      },
      // 4 (multi-stage journey, distance and average speed)
      {
        kind: "open",
        prompt: "An object has an initial velocity of 10 m/s. It accelerates uniformly to 25 m/s in 5 s, moves at 25 m/s for another 5 s, then decelerates uniformly to rest over 15 s. Calculate (a) the acceleration in the first 5 s, (b) the deceleration in the last 15 s, (c) the total distance travelled, (d) the average speed for the journey.",
        modelAnswer: "For part a, the acceleration is the change in velocity over time, which is twenty five minus ten over five, giving three metres per second squared. For part b, the deceleration is nought minus twenty five over fifteen, giving minus one point six seven metres per second squared, a deceleration of about one point six seven metres per second squared. For part c, the total distance is the area under the velocity-time graph. The first part is a trapezium, half of ten plus twenty five times five, which is eighty seven point five metres. The middle part is twenty five times five, which is one hundred and twenty five metres. The last part is half of twenty five times fifteen, which is one hundred and eighty seven point five metres. The total is four hundred metres. For part d, the total time is twenty five seconds, so the average speed is four hundred divided by twenty five, which is sixteen metres per second.",
        marks: [
          "Acceleration = (25 - 10) / 5 = 3 m/s^2.",
          "Deceleration = (0 - 25) / 15 = about -1.67 m/s^2.",
          "Distance = 0.5 x (10 + 25) x 5 + 25 x 5 + 0.5 x 25 x 15 = 87.5 + 125 + 187.5 = 400 m.",
          "Average speed = total distance / total time = 400 / 25 = 16 m/s.",
        ],
        ask: "Find each acceleration as the change in velocity over its time. For the distance, add up the areas under the velocity-time graph: a trapezium, then a rectangle, then a triangle. Finally divide the total distance by the total time of twenty five seconds.",
      },
      // 5 (ball thrown up, worked example 9, equations of motion + free fall)
      {
        kind: "open",
        prompt: "A ball is thrown vertically upwards with an initial velocity of 40 m/s. Take g as 10 m/s^2 and ignore air resistance. Calculate (a) the time taken to reach maximum height, (b) the maximum height reached, (c) the total time for the whole up-and-down journey.",
        modelAnswer: "Take upward as positive, so the acceleration is minus ten metres per second squared, and at the highest point the velocity is momentarily zero. For part a, using final velocity equals starting velocity plus acceleration times time, nought equals forty minus ten times the time, so the time is four seconds. For part b, using final velocity squared equals starting velocity squared plus two times acceleration times displacement, nought equals forty squared minus twenty times the displacement, so twenty times the displacement is one thousand six hundred, giving eighty metres. For part c, the way up and the way down take equal times, so the total time is two times four, which is eight seconds.",
        marks: [
          "Take up as positive, a = -10 m/s^2, v = 0 at the top.",
          "Time up using v = u + at: 0 = 40 - 10t, so t = 4 s.",
          "Maximum height using v^2 = u^2 + 2ad: 0 = 40^2 - 20d, so d = 80 m.",
          "Total time = 2 x 4 = 8 s (up and down take equal times).",
        ],
        ask: "Take upward as positive so the acceleration is minus ten. At the top the velocity is zero. Use final velocity equals starting velocity plus acceleration times time for the time up, then final velocity squared equals starting velocity squared plus two times acceleration times displacement for the height. The total time is twice the time up.",
      },
    ],
  },
];
