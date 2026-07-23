import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.rev5",
    code: "R5",
    title: "Revision 5",
    blurb: "Checkpoint: equations of motion and free fall",
    kind: "revision",
    steps: [
      // 1 (choice) which equation leaves out displacement
      {
        kind: "choice",
        question: "In the equations of uniformly accelerated motion, which one leaves out the displacement d?",
        options: [
          "d = 1/2 (u + v) t",
          "v^2 = u^2 + 2ad",
          "v = u + at",
          "d = ut + 1/2 a t^2",
        ],
        correct: 2,
        ask: "Look for the equation that has no d in it at all. Which one links only the two velocities, the acceleration and the time?",
        hints: [
          "The equation that leaves out displacement links v, u, a and t.",
          "It is velocity equals u plus a times t.",
        ],
        explain: "The equation v equals u plus a t leaves out the displacement, because it links only the two velocities, the acceleration and the time.",
      },
      // 2 (choice) free fall final velocity
      {
        kind: "choice",
        question: "A ball falls freely from rest for 3.5 s. Take g = 10 m/s^2. What is its final velocity?",
        options: ["3.5 m/s", "35 m/s", "61.25 m/s", "350 m/s"],
        correct: 1,
        ask: "Use v equals u plus a t, starting from rest. Ten times three point five. Which option is that?",
        hints: [
          "Start from rest, so u is zero, and use v equals u plus a t.",
          "Ten metres per second squared times three point five seconds is thirty five.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + 10 \\times 3.5" },
          { label: "Answer", latex: "v = 35\\ \\text{m/s}" },
        ],
        explain: "The final velocity is thirty five metres per second, because starting from rest, ten times three point five is thirty five.",
      },
      // 3 (choice) velocity gained each second in free fall
      {
        kind: "choice",
        question: "As an object falls freely, by how much does its velocity increase during each second?",
        options: ["1 m/s", "2 m/s", "5 m/s", "10 m/s"],
        correct: 3,
        ask: "A freely falling object gains the same amount of velocity every second, equal to g. Taking g as ten, how much is that each second?",
        hints: [
          "Free fall means the velocity rises by g each second.",
          "Taking g as ten metres per second squared, that is ten metres per second gained each second.",
        ],
        explain: "The velocity increases by about ten metres per second each second, because a freely falling object accelerates at g, which we take as ten metres per second squared.",
      },
      // 4 (choice) which equation to find d from u, v, t
      {
        kind: "choice",
        question: "You know the initial velocity, the final velocity and the time, but not the acceleration. Which equation finds the displacement?",
        options: [
          "d = 1/2 (u + v) t",
          "v = u + at",
          "v^2 = u^2 + 2ad",
          "a = (v - u) / t",
        ],
        correct: 0,
        ask: "You want the equation that leaves out acceleration. Which one uses only the two velocities and the time?",
        hints: [
          "Pick the equation with no a in it.",
          "It is displacement equals a half times u plus v, all times t.",
        ],
        explain: "Use d equals a half times u plus v times t, because it leaves out the acceleration and uses the two velocities and the time you already know.",
      },
      // 5 (choice) car braking distance
      {
        kind: "choice",
        question: "A car travelling at 18 m/s brakes to a stop in 2.4 s at constant deceleration. What is its braking distance?",
        options: ["43.2 m", "7.5 m", "21.6 m", "18 m"],
        correct: 2,
        ask: "Use displacement equals a half times u plus v times t. Here v is zero, so it is a half times eighteen times two point four. What is that?",
        hints: [
          "The car stops, so the final velocity v is zero.",
          "A half times eighteen times two point four is twenty one point six.",
        ],
        working: [
          { label: "Formula", latex: "d = \\tfrac{1}{2}(u+v)t" },
          { label: "Substitute", latex: "d = \\tfrac{1}{2}(18+0)(2.4)" },
          { label: "Answer", latex: "d = 21.6\\ \\text{m}" },
        ],
        explain: "The braking distance is twenty one point six metres, because a half times eighteen plus zero, times two point four seconds, is twenty one point six.",
      },
      // 6 (interactive: match) equation to quantity it leaves out
      {
        kind: "match",
        prompt: "Match each equation of motion to the quantity it leaves out.",
        pairs: [
          { left: "v = u + at", right: "displacement d" },
          { left: "d = 1/2 (u + v) t", right: "acceleration a" },
          { left: "d = ut + 1/2 a t^2", right: "final velocity v" },
          { left: "v^2 = u^2 + 2ad", right: "time t" },
        ],
        ask: "Each equation is missing exactly one of the five quantities. For each one, find the quantity that does not appear.",
        hints: [
          "Look at what each equation does not contain.",
          "The equation v equals u plus a t has no displacement in it.",
        ],
        explain: "The equation v equals u plus a t leaves out displacement, d equals a half times u plus v times t leaves out acceleration, d equals u t plus a half a t squared leaves out final velocity, and v squared equals u squared plus two a d leaves out time.",
      },
      // 7 (interactive: order) steps to find braking distance
      {
        kind: "order",
        prompt: "Put the steps to find the braking distance of a car that brakes to a stop in order.",
        items: [
          "Write down u, v and t, with v = 0 for a stop",
          "Choose d = 1/2 (u + v) t, which leaves out acceleration",
          "Substitute the values into the equation",
          "Work out the displacement and state it with its unit",
        ],
        ask: "Think about what you list first, which equation you pick, then what you do with the numbers. Put the steps in order.",
        hints: [
          "List your known quantities before choosing an equation.",
          "You substitute the numbers only after you have chosen the equation.",
        ],
        explain: "First list u, v and t with v equal to zero, then choose the equation that leaves out acceleration, substitute the values, and finally work out the displacement and state its unit.",
      },
      // 8 (interactive: spoterror) free fall distance calculation
      {
        kind: "spoterror",
        prompt: "A student finds how far a ball falls freely from rest in 3.5 s, with g = 10 m/s^2. Tap the line with the mistake.",
        lines: [
          "u = 0, a = 10 m/s^2, t = 3.5 s",
          "d = ut + 1/2 a t^2",
          "d = 0 + 1/2 (10)(3.5)^2",
          "d = 1/2 (10)(7) = 35 m",
        ],
        errorLine: 3,
        ask: "Check the last line. Three point five squared is not three point five times two. What is three point five squared?",
        hints: [
          "Squaring means multiply the number by itself.",
          "Three point five squared is twelve point two five, not seven.",
        ],
        explain: "The last line is wrong: three point five squared is twelve point two five, so the distance is a half times ten times twelve point two five, which is sixty one point two five metres.",
      },
      // 9 (interactive: classify) true or false statements
      {
        kind: "classify",
        prompt: "Sort each statement as true or false.",
        bins: ["True", "False"],
        items: [
          { text: "An object can have constant speed while its velocity changes", bin: 0 },
          { text: "An object can have constant velocity while its speed changes", bin: 1 },
          { text: "An object can still be accelerating when its velocity is zero", bin: 0 },
          { text: "A freely falling object has constant velocity", bin: 1 },
        ],
        ask: "Remember velocity carries a direction but speed does not. Decide whether each statement is true or false, then tap it into a bin.",
        hints: [
          "Turning a corner at steady speed changes the direction, so the velocity changes.",
          "At the top of its flight a thrown ball has zero velocity but is still accelerating.",
        ],
        explain: "Constant speed with a changing velocity is true, since the direction can change. Constant velocity with a changing speed is false, since velocity already includes the speed. Accelerating at zero velocity is true, as at the top of a throw. A freely falling object speeds up, so constant velocity is false.",
      },
      // 10 (interactive: graphpick) v-t graph of free fall from rest
      {
        kind: "graphpick",
        prompt: "Which velocity-time graph shows a freely falling object released from rest?",
        yLabel: "v",
        xLabel: "t",
        options: [
          { points: [[0, 0], [4, 8]], caption: "straight line rising from zero" },
          { points: [[0, 4], [4, 4]], caption: "flat horizontal line" },
          { points: [[0, 8], [4, 0]], caption: "straight line falling to zero" },
        ],
        correct: 0,
        ask: "Free fall from rest starts at zero velocity and gains the same amount every second. What shape is that?",
        hints: [
          "Released from rest means it starts at zero velocity.",
          "Constant acceleration is a straight sloping line.",
        ],
        explain: "A straight line rising from zero shows free fall from rest, because the velocity starts at zero and increases by the same amount every second.",
      },
      // 11 (open) free fall: final velocity and distance
      {
        kind: "open",
        prompt: "A ball falls freely from rest for 3.5 s. Take g = 10 m/s^2. Find (a) its final velocity and (b) how far it falls, showing your working.",
        modelAnswer: "Take downward as positive, so u is zero and a is ten metres per second squared. For part a, use v equals u plus a t: v equals zero plus ten times three point five, which is thirty five metres per second. For part b, use d equals u t plus a half a t squared: d equals zero plus a half times ten times three point five squared, which is a half times ten times twelve point two five, giving sixty one point two five metres.",
        marks: [
          "u = 0, a = 10 m/s^2, t = 3.5 s (downward taken as positive).",
          "(a) v = u + at = 0 + 10 x 3.5 = 35 m/s.",
          "(b) d = ut + 1/2 a t^2 = 1/2 (10)(3.5)^2 = 61.25 m.",
        ],
        ask: "Start from rest, so u is zero. Use v equals u plus a t for the velocity, then d equals u t plus a half a t squared for the distance. Remember to square the time.",
      },
      // 12 (open) ball thrown up from a cliff
      {
        kind: "open",
        prompt: "A ball is thrown vertically upwards at 7 m/s from the edge of a cliff and takes 5.0 s to reach the ground. Take g = 10 m/s^2. Find (a) the height of the cliff and (b) the velocity of the ball as it hits the ground, showing your working.",
        figure: "fig-02-35-cliff-throw",
        modelAnswer: "Take upward as positive, so u is seven metres per second and a is minus ten metres per second squared. For part a, the displacement from the cliff edge is d equals u t plus a half a t squared: d equals seven times five plus a half times minus ten times five squared, which is thirty five minus one hundred and twenty five, giving minus ninety metres. The minus sign means the ball lands ninety metres below the edge, so the cliff is ninety metres high. For part b, use v equals u plus a t: v equals seven plus minus ten times five, which is seven minus fifty, giving minus forty three metres per second. So the ball hits the ground at forty three metres per second, directed downward.",
        marks: [
          "Upward taken as positive: u = 7 m/s, a = -10 m/s^2, t = 5.0 s.",
          "(a) d = ut + 1/2 a t^2 = 7(5) + 1/2 (-10)(5)^2 = 35 - 125 = -90 m, so the cliff is 90 m high.",
          "(b) v = u + at = 7 + (-10)(5) = -43 m/s, that is 43 m/s downward.",
        ],
        ask: "Take upward as positive, so the initial velocity is positive seven and the acceleration is minus ten. Use d equals u t plus a half a t squared for the displacement, and a negative result means below the edge. Then use v equals u plus a t for the landing velocity.",
      },
    ],
  },
];
