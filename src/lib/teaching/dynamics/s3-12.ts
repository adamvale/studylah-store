import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 12. Grounded in KB Chapter 04 (Forces and Motion), falling objects and terminal velocity.

export const BOXES: Subconcept[] = [
  {
    id: "t3.12",
    code: "T3.12",
    title: "Falling objects and terminal velocity",
    blurb: "The 2 forces on a falling object, why it reaches a steady speed, and how it falls with none",
    steps: [
      {
        kind: "concept",
        heading: "Two forces on a falling object",
        figure: "fig-04-24-air-resistance-freebody",
        body: "A falling object feels 2 forces: its *weight* acting *down*, and *air resistance*, a form of friction, acting up to oppose its motion. Taking down as positive, the *resultant force* is the weight minus the air resistance.",
        formula: {
          latex: "W = mg",
          where: [
            { sym: "W", meaning: "weight", unit: "N" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "Look at the free-body diagram. A single object is falling, with a long pink arrow pointing straight down labelled weight, W equals m g, and a shorter blue arrow pointing straight up labelled air resistance. Air resistance always points opposite to the motion, so on the way down it points up. Taking down as positive, the resultant force is the weight minus the air resistance, and that resultant equals mass times acceleration.",
      },
      {
        kind: "concept",
        heading: "What makes air resistance grow",
        body: "Air resistance is not fixed. It grows when the object moves *faster*, when it has a larger *surface area*, and when the surrounding *air* is *denser*.",
        say: "3 things make air resistance bigger. First, higher speed: the faster you fall, the harder the air pushes back. Second, a larger surface area, which is exactly why a parachute works so well. Third, denser air, because more air packed into each cubic metre means more particles to push against. Notice that the mass of the object is not on that list.",
      },
      {
        kind: "concept",
        heading: "Terminal velocity",
        figure: "fig-04-25-terminal-velocity-graph",
        body: "As the object speeds up, *air resistance* grows until it exactly *balances* the weight. Now the *resultant force* is 0, so it stops accelerating and falls at a steady *terminal velocity*.",
        say: "This velocity-time graph tells the whole story of a parachute jump. The blue line first climbs steeply as the skydiver accelerates, then bends and flattens to a steady value, the first terminal velocity, where air resistance has grown to equal the weight. When the parachute opens, its huge surface area makes air resistance jump above the weight, so the line drops as the diver decelerates, then flattens again at a new, lower terminal velocity, before the final step down to landing.",
      },
      {
        kind: "concept",
        heading: "Falling with no air resistance",
        figure: "fig-04-26-free-fall-graph",
        body: "Take *air resistance* away and every object falls the same way. Because m g minus 0 equals m a, the *mass* cancels and each object gains the same *acceleration of free fall* g, about 10 m/s^2, whatever its mass.",
        formula: {
          latex: "v = u + at",
          where: [
            { sym: "v", meaning: "final velocity", unit: "m/s" },
            { sym: "u", meaning: "starting velocity", unit: "m/s" },
            { sym: "a", meaning: "acceleration, here equal to g", unit: "m/s^2" },
            { sym: "t", meaning: "time", unit: "s" },
          ],
        },
        say: "The graph here is a single straight line rising from the origin, a velocity-time graph for free fall with no air resistance. Its gradient is 10, meaning the velocity climbs by 10 metres per second every second: 10 after 1 second, 20 after 2 seconds, 30 after 3 seconds. Because the line is straight, the acceleration is constant, and because it starts at the origin, the object began from rest. The mass never enters the sum, so a feather and a hammer would fall together.",
      },
      {
        kind: "choice",
        question: "A raindrop is falling at its terminal velocity. What is the resultant force on it?",
        options: ["0 N", "Equal to its weight", "Twice its weight", "Bigger than its weight"],
        correct: 0,
        ask: "At terminal velocity the air resistance has grown until it matches the weight. Add an upward force that equals a downward force. What is left over?",
        hints: [
          "Terminal velocity means the speed is no longer changing, so there is no acceleration.",
          "If air resistance equals weight, the up and down forces cancel to give 0.",
        ],
        explain: "The resultant force is 0, because at terminal velocity the upward air resistance has grown until it exactly equals the downward weight, so the 2 forces cancel and the drop falls at a steady speed.",
      },
      {
        kind: "choice",
        question: "A brick is dropped from rest. Ignoring air resistance, g = 10 m/s^2. Find its speed after 5 s.",
        options: ["50 m/s", "2 m/s", "15 m/s", "500 m/s"],
        correct: 0,
        ask: "The starting speed is 0, so the speed is simply g times the time. Work out 10 × 5.",
        hints: [
          "Use v = u + a t, with u equal to 0 and a equal to g, which is 10.",
          "10 × 5 is 50, and the speed here is in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = u + at" },
          { label: "Substitute", latex: "v = 0 + 10 \\times 5" },
          { label: "Answer", latex: "v = 50\\ \\text{m/s}" },
        ],
        explain: "The speed is 50 metres per second, because starting from rest the velocity grows by 10 metres per second every second, and 10 × 5 is 50.",
      },
      {
        kind: "graphpick",
        prompt: "An object falls from rest with no air resistance. Pick the velocity-time graph for its motion.",
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
              [0, 30],
              [5, 30],
            ],
            caption: "Horizontal line, constant velocity",
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
              [0, 20],
              [5, 45],
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
        kind: "order",
        prompt: "Put the stages of a parachute jump in order, from the jump to the landing.",
        items: [
          "Accelerate from rest, because the weight is bigger than the air resistance",
          "Air resistance grows until it equals the weight",
          "Fall at the first terminal velocity, a constant speed",
          "The parachute opens, so air resistance jumps above the weight",
          "Decelerate to a new, lower terminal velocity",
          "Land at the lower terminal velocity",
        ],
        ask: "Follow the speed through the jump: it rises, steadies, drops when the parachute opens, then steadies again. Put the stages in that order.",
        hints: [
          "At the start there is almost no air resistance, so the weight wins and the diver speeds up.",
          "Opening the parachute adds a large surface area, so air resistance briefly beats the weight and the diver slows down.",
        ],
        explain: "The diver accelerates from rest, air resistance grows until it equals the weight to give the first terminal velocity, then the parachute opens and air resistance beats the weight, so the diver decelerates to a new, lower terminal velocity and lands at it.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it increases the air resistance on a falling object.",
        bins: ["Increases air resistance", "No effect on air resistance"],
        items: [
          { text: "moving faster", bin: 0 },
          { text: "a larger surface area", bin: 0 },
          { text: "denser air", bin: 0 },
          { text: "a greater mass", bin: 1 },
          { text: "a brighter colour", bin: 1 },
        ],
        ask: "Air resistance depends on 3 things: the speed, the surface area, and how dense the air is. Tap each change and drop it in the correct bin.",
        hints: [
          "Higher speed, more surface area and denser air all make the air push back harder.",
          "The object's mass and its colour do not change how hard the air resists.",
        ],
        explain: "Moving faster, a larger surface area and denser air all increase air resistance. A greater mass and a brighter colour have no effect on it, because air resistance depends only on speed, surface area and air density.",
      },
      {
        kind: "insight",
        body: "With *air resistance*, a falling object settles at a steady *terminal velocity*; with none, every object speeds up together at *g*, about 10 m/s^2.",
        say: "Hold on to the 2 endings. When air resistance can grow, it climbs until it matches the weight, the resultant force becomes 0, and the object falls at a steady terminal velocity. When there is no air resistance, the mass cancels out of the sum, so every object, heavy or light, gains speed together at g, about 10 metres per second every second.",
      },
    ],
  },
];