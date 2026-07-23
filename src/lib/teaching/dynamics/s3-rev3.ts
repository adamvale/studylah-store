import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, Revision 3. Checkpoint over sections t3.11 to t3.12 (friction, air
// resistance and terminal velocity). Question-only: 5 choice, 5 interactive, 2 open.

export const BOXES: Subconcept[] = [
  {
    id: "t3.rev3",
    code: "R3",
    title: "Revision 3",
    blurb: "Checkpoint: friction, air resistance and terminal velocity",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A box slides to the right across a rough floor. In which direction does the friction on the box act?",
        options: [
          "To the left, opposite to the motion",
          "To the right, with the motion",
          "Straight up, away from the floor",
          "Straight down, into the floor",
        ],
        correct: 0,
        ask: "Friction acts along the surfaces and always pushes back against the way the object is moving. The box moves right, so which way does friction point?",
        hints: [
          "Friction acts parallel to the surfaces, not up or down.",
          "It always opposes the motion, so it points opposite to the way the box slides.",
        ],
        explain: "Friction acts to the left, opposite to the motion. It is a contact force along the surfaces that always opposes the direction the box slides.",
      },
      {
        kind: "choice",
        question: "A crate is pulled steadily across a floor at constant velocity by a force of 25 N. How large is the friction on the crate?",
        options: ["25 N", "0 N", "50 N", "12.5 N"],
        correct: 0,
        ask: "At constant velocity the resultant force is 0, so friction must exactly balance the 25 newton pull. Which option is that?",
        hints: [
          "Constant velocity means no acceleration, so the resultant force is 0.",
          "For the forces to cancel, friction must equal the 25 newton pull.",
        ],
        working: [
          { label: "Formula", latex: "F_{\\text{friction}} = F_{\\text{applied}}" },
          { label: "Substitute", latex: "F_{\\text{friction}} = 25\\ \\text{N}" },
          { label: "Answer", latex: "F_{\\text{friction}} = 25\\ \\text{N}" },
        ],
        explain: "The friction is 25 newtons. The crate moves at constant velocity, so the resultant force is 0 and friction exactly balances the 25 newton pull.",
      },
      {
        kind: "choice",
        question: "Which change does NOT increase the air resistance on a falling object?",
        options: [
          "A greater mass",
          "A higher speed",
          "A larger surface area",
          "Denser air",
        ],
        correct: 0,
        ask: "Air resistance depends on 3 things: speed, surface area and air density. Which option is not one of them?",
        hints: [
          "Faster movement, more surface area and denser air all raise air resistance.",
          "The mass of the object does not change how hard the air pushes back.",
        ],
        explain: "A greater mass does not increase air resistance. Air resistance grows only with higher speed, larger surface area and denser air, not with mass.",
      },
      {
        kind: "choice",
        question: "A skydiver is falling at a steady terminal velocity. What is the resultant force on the skydiver?",
        options: [
          "0 N",
          "Equal to the weight, acting down",
          "Equal to the weight, acting up",
          "Twice the weight",
        ],
        correct: 0,
        ask: "At terminal velocity the air resistance has grown until it matches the weight. Balance an upward force against an equal downward force. What is left?",
        hints: [
          "Terminal velocity means the speed is steady, so there is no acceleration.",
          "If air resistance equals weight, the up and down forces cancel to give 0.",
        ],
        explain: "The resultant force is 0. At terminal velocity the upward air resistance has grown until it exactly equals the downward weight, so the forces cancel and the speed stays steady.",
      },
      {
        kind: "choice",
        question: "A stone is dropped from rest. Ignoring air resistance, with g = 10 m/s^2, find its speed after 3 s.",
        options: ["30 m/s", "13 m/s", "3 m/s", "300 m/s"],
        correct: 0,
        ask: "The starting speed is 0, so the speed is just g times the time. Work out 10 × 3.",
        hints: [
          "Use v = u + a t, with u equal to 0 and a equal to g, which is 10.",
          "10 × 3 is 30, and the speed is in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + 10 \\times 3" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "The speed is 30 metres per second. Starting from rest, the velocity grows by 10 metres per second every second, and 10 × 3 is 30.",
      },
      {
        kind: "slider",
        prompt: "A 5 kg block already has 12 N of friction on it. The pull is raised to 42 N. Set the slider to its acceleration, in m/s^2.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "m/s^2",
        start: 0,
        targetMin: 5.9,
        targetMax: 6.1,
        ask: "First find the resultant force, 42 - 12, then divide by the 5 kilogram mass.",
        hints: [
          "The resultant force is 42 - 12, which is 30 newtons.",
          "Acceleration is resultant force divided by mass, so 30 ÷ 5 is 6.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{F_{\\text{resultant}}}{m}" },
          { label: "Substitute", latex: "a = \\dfrac{42 - 12}{5}" },
          { label: "Answer", latex: "a = 6\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is 6 metres per second squared. The resultant force is 42 - 12, which is 30 newtons, and 30 divided by the 5 kilogram mass gives 6 metres per second squared.",
      },
      {
        kind: "order",
        prompt: "Put the stages of a parachute jump in order, from leaving the plane to landing.",
        items: [
          "Accelerate from rest, because the weight is greater than the air resistance",
          "Air resistance grows and the acceleration eases off",
          "Reach the first terminal velocity and fall at a steady speed",
          "The parachute opens, so air resistance jumps above the weight",
          "Decelerate to a new, lower terminal velocity",
          "Land at the lower terminal velocity",
        ],
        ask: "Follow the speed through the jump: it rises, steadies, drops when the parachute opens, then steadies again lower down. Put the stages in that order.",
        hints: [
          "At the start there is almost no air resistance, so the weight wins and the diver speeds up.",
          "Opening the parachute adds a large surface area, so air resistance briefly beats the weight and the diver slows.",
        ],
        explain: "The diver speeds up from rest, the acceleration eases as air resistance grows, and at the first terminal velocity the speed is steady. The parachute then opens, air resistance beats the weight so the diver decelerates, and finally lands at a new, lower terminal velocity.",
      },
      {
        kind: "match",
        prompt: "Match each situation to the smart friction choice.",
        pairs: [
          { left: "A stiff, sticking door hinge", right: "Add a lubricant" },
          { left: "A rock climber's grip on a hold", right: "Rub on chalk" },
          { left: "A car tyre on an icy road", right: "Cut deep treads" },
          { left: "A heavy machine part that must slide", right: "Fit ball bearings" },
        ],
        ask: "For each case, decide whether you want less friction to ease sliding or more friction to grip, then pick the matching trick.",
        hints: [
          "A sticking hinge and a sliding machine part both need friction reduced.",
          "A climber's hands and an icy tyre both need friction increased for grip.",
        ],
        explain: "A lubricant and ball bearings cut unwanted friction on the hinge and the machine part. Chalk and deep treads add wanted friction so the climber and the tyre grip firmly.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it increases the air resistance on a falling object.",
        bins: ["Increases air resistance", "No effect on air resistance"],
        items: [
          { text: "moving faster", bin: 0 },
          { text: "opening a parachute", bin: 0 },
          { text: "falling through denser air", bin: 0 },
          { text: "carrying a heavier load", bin: 1 },
          { text: "painting it a darker colour", bin: 1 },
        ],
        ask: "Air resistance depends on 3 things: the speed, the surface area, and how dense the air is. Tap each change and drop it in the correct bin.",
        hints: [
          "Higher speed, more surface area and denser air all make the air push back harder.",
          "The object's mass and its colour do not change how hard the air resists.",
        ],
        explain: "Moving faster, opening a parachute for more surface area, and denser air all increase air resistance. A heavier load and a darker colour have no effect, because air resistance depends only on speed, surface area and air density.",
      },
      {
        kind: "graphpick",
        prompt: "An object falls from rest with no air resistance, with g = 10 m/s^2. Pick the velocity-time graph for its motion.",
        xLabel: "time / s",
        yLabel: "velocity / m/s",
        options: [
          {
            points: [
              [0, 0],
              [1, 10],
              [2, 20],
              [3, 30],
              [4, 40],
              [5, 50],
            ],
            caption: "Straight line from the origin, gradient 10",
          },
          {
            points: [
              [0, 0],
              [1, 16],
              [2, 25],
              [3, 30],
              [4, 32],
              [5, 33],
            ],
            caption: "Rising curve that levels off",
          },
          {
            points: [
              [0, 25],
              [5, 25],
            ],
            caption: "Horizontal line, constant velocity",
          },
          {
            points: [
              [0, 15],
              [5, 40],
            ],
            caption: "Straight line starting above the origin",
          },
        ],
        correct: 0,
        ask: "In free fall the velocity keeps rising by the same amount each second from a standing start. Which graph is a straight line climbing from the origin?",
        hints: [
          "A constant acceleration gives a straight line, not a curve that flattens.",
          "Starting from rest means the line must begin at the origin, at 0.",
        ],
        explain: "The correct graph is the straight line rising from the origin. Its constant gradient of 10 shows the steady acceleration of free fall, and starting at the origin shows the object began from rest.",
      },
      {
        kind: "open",
        prompt: "Friction can be both useful and a nuisance. Give 1 useful effect and 1 nuisance effect of friction, and describe 1 way to reduce unwanted friction.",
        modelAnswer: "Friction is useful because it lets us walk without slipping and lets tyres grip so a car can brake. It is a nuisance because it wears away moving parts and wastes energy as heat, which lowers the efficiency of machines. Unwanted friction can be reduced using ball bearings, wheels, an air cushion, a lubricant such as oil, or by polishing the surfaces.",
        marks: [
          "1 useful effect of friction, such as walking, gripping or braking.",
          "1 nuisance effect, such as wear, wasted heat or lower efficiency.",
          "1 way to reduce friction, such as ball bearings, a lubricant or polishing.",
        ],
        ask: "Think about jobs friction does for us, the costs it brings to machines, and the tricks that make surfaces slide more easily.",
      },
      {
        kind: "open",
        prompt: "A skydiver jumps from a plane and soon reaches a steady terminal velocity. Explain, in terms of the forces, why the skydiver stops accelerating and falls at a constant speed.",
        modelAnswer: "At first the weight is much greater than the air resistance, so there is a large downward resultant force and the skydiver accelerates. As the speed rises, the air resistance grows. Eventually the air resistance grows until it exactly equals the weight, so the resultant force becomes 0. With no resultant force there is no acceleration, so the skydiver falls at a constant terminal velocity.",
        marks: [
          "Weight starts greater than air resistance, giving a downward resultant force and acceleration.",
          "Air resistance grows as the speed increases.",
          "At terminal velocity air resistance equals weight, so the resultant force is 0 and there is no acceleration.",
        ],
        ask: "Compare the size of the weight and the air resistance as the speed rises, and think about what the resultant force becomes when they are equal.",
      },
    ],
  },
];