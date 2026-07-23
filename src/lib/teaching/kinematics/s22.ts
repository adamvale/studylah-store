import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.2",
    code: "T2.2",
    title: "Speed",
    blurb: "Distance covered each second, a scalar measured in m/s",
    steps: [
      {
        kind: "concept",
        heading: "What speed is",
        body: "Speed is the *distance* travelled per unit *time*. It is a *scalar*, so it has size only, with no *direction*.",
        formula: {
          latex: "v = \\dfrac{d}{t}",
          where: [
            { sym: "v", meaning: "speed", unit: "m/s" },
            { sym: "d", meaning: "distance", unit: "m" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Speed just tells you how much ground you cover each second. It is distance divided by time, and it carries no direction at all, so it is a scalar. We measure it in metres per second.",
      },
      {
        kind: "concept",
        heading: "Uniform speed",
        body: "An object moves at *uniform*, or *constant*, speed when it covers *equal distances* in *equal intervals* of time. A ball rolling at a uniform 12 m/s moves exactly 12 m during every second.",
        say: "Uniform speed means steady speed. In each second the object covers exactly the same distance as in the second before. So a ball rolling at a uniform twelve metres per second moves twelve metres in every single second.",
      },
      {
        kind: "choice",
        question: "A car travels 90 m in 6 s at a steady speed. What is its speed?",
        options: ["540 m/s", "96 m/s", "15 m/s", "0.067 m/s"],
        correct: 2,
        ask: "Use speed equals distance over time. Ninety divided by six. Which option is that?",
        hints: [
          "Speed is distance divided by time.",
          "Ninety divided by six is fifteen.",
        ],
        explain: "The speed is fifteen metres per second, because ninety metres divided by six seconds is fifteen.",
      },
      {
        kind: "slider",
        prompt: "A runner covers 24 m in 3 s at a steady pace. Set the slider to her speed in m/s.",
        min: 0,
        max: 20,
        step: 1,
        unit: "m/s",
        start: 0,
        targetMin: 8,
        targetMax: 8,
        ask: "Speed is distance over time. Twenty four divided by three. Slide to that value.",
        hints: [
          "Divide the distance by the time.",
          "Twenty four divided by three is eight.",
        ],
        explain: "Her speed is eight metres per second, because twenty four metres divided by three seconds is eight.",
      },
      {
        kind: "cloze",
        prompt: "Complete the definition of speed.",
        segments: ["Speed is the ", " travelled per unit ", ". It is a ", " quantity."],
        bank: ["distance", "time", "scalar", "displacement", "vector"],
        answer: ["distance", "time", "scalar"],
        ask: "Speed uses distance, not displacement. It has size only, so what kind of quantity is it? Fill each blank.",
        hints: [
          "Speed is distance divided by the time taken.",
          "A quantity with size but no direction is a scalar.",
        ],
        explain: "Speed is the distance travelled per unit time, and it is a scalar quantity, because it has size only with no direction.",
      },
      {
        kind: "insight",
        body: "*Steady speed* means *equal distances* in *equal times*: at 12 m/s you cover 12 m in the first second, 12 m in the next, and so on.",
        say: "Here is the picture to hold onto. If the speed is steady, then every second looks the same as the last. At twelve metres per second you cover twelve metres this second, twelve the next, and twelve the one after that.",
      },
    ],
  },
];
