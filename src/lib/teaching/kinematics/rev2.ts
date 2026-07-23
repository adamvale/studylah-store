import type { Subconcept } from "@/lib/teaching/subconcepts";

// Revision 2 checkpoint. Question-only box covering section 2.5 Acceleration:
// the definition, the three ways to accelerate, deceleration, zero acceleration,
// and the worked-example numbers (trolley, motorcycle, car, sprinter).

export const BOXES: Subconcept[] = [
  {
    id: "t2.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: acceleration",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "What is acceleration?",
        options: [
          "The distance travelled each second",
          "The rate of change of velocity",
          "The velocity at a single instant",
          "The total change in speed over a journey",
        ],
        correct: 1,
        ask: "Think about which word means how fast the velocity is changing, not the velocity itself. Which option says that?",
        hints: [
          "Acceleration is about change in velocity, not distance.",
          "It is the change of velocity for every second that passes.",
        ],
        explain:
          "Acceleration is the rate of change of velocity, which is the change of velocity per unit time. It is a vector, because velocity carries a direction.",
      },
      {
        kind: "cloze",
        prompt: "Complete the definition and unit of acceleration.",
        segments: [
          "Acceleration is the rate of change of ",
          " per unit ",
          ", and it is measured in ",
          ".",
        ],
        bank: ["velocity", "time", "m/s^2", "speed", "distance", "m/s"],
        answer: ["velocity", "time", "m/s^2"],
        ask: "Acceleration compares the change of one quantity against time. Which quantity changes, and what unit do we give the answer? Drag the words into the blanks.",
        hints: [
          "The quantity that changes is a vector, so it is velocity, not speed.",
          "The unit is the metre per second per second.",
        ],
        explain:
          "Acceleration is the rate of change of velocity per unit time, and its SI unit is the metre per second squared.",
      },
      {
        kind: "classify",
        prompt: "Sort each object as accelerating or not accelerating.",
        bins: ["Accelerating", "Not accelerating"],
        items: [
          { text: "A car speeding up on a straight road", bin: 0 },
          { text: "A ball whirled in a circle at steady speed", bin: 0 },
          { text: "A cyclist braking to a stop", bin: 0 },
          { text: "A van moving at a constant velocity of 15 m/s", bin: 1 },
        ],
        ask: "An object accelerates if its speed changes, its direction changes, or both. Only steady velocity means no acceleration. Tap each object, then its bin.",
        hints: [
          "Changing direction at a steady speed still counts as accelerating.",
          "Constant velocity means the velocity never changes, so the acceleration is zero.",
        ],
        explain:
          "Speeding up, changing direction, and slowing down are all acceleration. Only the van at constant velocity has zero acceleration.",
      },
      {
        kind: "choice",
        question:
          "A motorcycle speeds up from 54 km/h, which is 15 m/s, to 90 km/h, which is 25 m/s, in 5 s. Find its acceleration.",
        options: ["7.2 m/s^2", "0.5 m/s^2", "5 m/s^2", "2 m/s^2"],
        correct: 3,
        ask: "The velocities are already in metres per second: fifteen and twenty five. Subtract fifteen from twenty five, then divide by five seconds. Which option is that?",
        hints: [
          "Acceleration equals the change in velocity divided by the time.",
          "Twenty five minus fifteen is ten, and ten divided by five is two.",
        ],
        explain:
          "The acceleration is two metres per second squared, because twenty five minus fifteen is ten, and ten divided by five seconds is two.",
      },
      {
        kind: "spoterror",
        prompt:
          "A student works out the motorcycle acceleration. Tap the line with the mistake.",
        lines: [
          "u = 15 m/s, v = 25 m/s, t = 5 s",
          "a = (v - u) / t",
          "a = (25 - 15) / 5",
          "a = 10 / 5 = 5 m/s^2",
        ],
        errorLine: 3,
        ask: "Check the last line. Ten divided by five. Is that really five?",
        hints: [
          "Work out ten divided by five carefully.",
          "Ten divided by five is two, not five.",
        ],
        explain:
          "The last line is wrong: ten divided by five is two, so the acceleration is two metres per second squared, not five.",
      },
      {
        kind: "slider",
        prompt:
          "A trolley speeds up from 12 m/s to 20 m/s in 5 s. Set its acceleration in m/s^2.",
        min: 0,
        max: 4,
        step: 0.2,
        unit: "m/s^2",
        start: 0,
        targetMin: 1.6,
        targetMax: 1.6,
        ask: "Take twenty minus twelve, then divide by five seconds. Slide to that value.",
        hints: [
          "The change in velocity is twenty minus twelve, which is eight.",
          "Eight divided by five is one point six.",
        ],
        explain:
          "The acceleration is one point six metres per second squared, because twenty minus twelve is eight, and eight divided by five seconds is one point six.",
      },
      {
        kind: "choice",
        question:
          "A car travelling at 24 m/s is brought to rest in 6 s. What is its acceleration?",
        options: ["-4 m/s^2", "4 m/s^2", "-2 m/s^2", "24 m/s^2"],
        correct: 0,
        ask: "The final velocity is zero. Take zero minus twenty four, then divide by six. Watch the sign. Which option is that?",
        hints: [
          "Use acceleration equals final velocity minus initial velocity, over time.",
          "Zero minus twenty four is minus twenty four, and that divided by six is minus four.",
        ],
        explain:
          "The acceleration is minus four metres per second squared. The car is slowing down, so the value is negative, and we say it decelerates at four metres per second squared.",
      },
      {
        kind: "order",
        prompt: "Put the steps to calculate an acceleration in order.",
        items: [
          "Write down u, v and t",
          "Subtract the initial velocity from the final velocity",
          "Divide the change in velocity by the time",
          "State the answer in m/s^2",
        ],
        ask: "You need the change in velocity before you can divide by the time. Put the steps in order.",
        hints: [
          "Gather your values first, then find the change in velocity.",
          "Acceleration is the change in velocity divided by the time.",
        ],
        explain:
          "Write down the values, find the change in velocity by subtracting the initial from the final, divide that change by the time, then state the answer in metres per second squared.",
      },
      {
        kind: "choice",
        question:
          "A ball moves round a bend at a steady speed of 8 m/s. Is it accelerating?",
        options: [
          "No, its speed does not change",
          "Yes, because its direction changes",
          "No, only speeding up counts as acceleration",
          "There is not enough information",
        ],
        correct: 1,
        ask: "Velocity includes direction. If the direction changes, the velocity changes, even at a steady speed. So is it accelerating?",
        hints: [
          "Acceleration is the rate of change of velocity, and velocity has direction.",
          "Changing direction changes the velocity, even when the speed stays the same.",
        ],
        explain:
          "Yes, it is accelerating. Its direction is changing, so its velocity is changing, and any change of velocity is an acceleration.",
      },
      {
        kind: "choice",
        question: "Which object has zero acceleration?",
        options: [
          "A car speeding up on a straight road",
          "A cyclist slowing to a stop",
          "A van moving at a constant velocity of 15 m/s",
          "A stone falling and gaining speed",
        ],
        correct: 2,
        ask: "Zero acceleration means the velocity never changes at all. Which object keeps exactly the same velocity?",
        hints: [
          "If the velocity is constant, the acceleration is zero.",
          "Speeding up, slowing down, and falling all change the velocity.",
        ],
        explain:
          "The van at constant velocity has zero acceleration, because its velocity does not change. The others all change velocity, so they are accelerating.",
      },
      {
        kind: "open",
        prompt:
          "(a) Define acceleration. (b) State the three ways in which an object can experience an acceleration.",
        modelAnswer:
          "Acceleration is the rate of change of velocity, that is the change of velocity per unit time. An object accelerates in three ways: when its speed changes while its direction stays the same, when its direction changes while its speed stays the same, or when both its speed and its direction change.",
        marks: [
          "Acceleration = rate of change of velocity (change of velocity per unit time).",
          "Way 1: the speed changes while the direction stays the same.",
          "Way 2: the direction changes while the speed stays the same.",
          "Way 3: both the speed and the direction change.",
        ],
        ask: "For part a, remember acceleration is about how quickly the velocity changes, not the velocity itself. For part b, think about what can change: the speed, the direction, or both.",
      },
      {
        kind: "open",
        prompt:
          "A sprinter starts from rest and accelerates uniformly at 2.5 m/s^2 for the first 4 s of a 100 m run, then keeps that velocity for the rest. Find the total time for the 100 m. Show your working.",
        modelAnswer:
          "In the first four seconds the sprinter reaches a velocity of two point five times four, which is ten metres per second. The distance covered while accelerating is a half times two point five times four squared, which is twenty metres. That leaves eighty metres at a steady ten metres per second, which takes eighty divided by ten, that is eight seconds. So the total time is four plus eight, which is twelve seconds.",
        marks: [
          "Velocity after the acceleration phase: v = 2.5 x 4 = 10 m/s.",
          "Distance in the first 4 s: s = 1/2 x 2.5 x 4^2 = 20 m.",
          "Remaining distance 100 - 20 = 80 m at 10 m/s takes 80 / 10 = 8 s.",
          "Total time = 4 + 8 = 12 s.",
        ],
        ask: "Split the run into two parts. First find the velocity and the distance during the four seconds of acceleration, then work out how long the leftover distance takes at that steady velocity, and add the two times together.",
      },
    ],
  },
];
