import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 3. Grounded in KB Chapter 03 (Mass and Weight) sections 3.3 and 3.4.

export const BOXES: Subconcept[] = [
  {
    id: "t3.3",
    code: "T3.3",
    title: "Gravitational field and field strength",
    blurb: "How masses pull on one another, and how we measure that pull",
    steps: [
      {
        kind: "concept",
        heading: "Masses attract",
        figure: "fig-03-03-two-masses-attract",
        body: "Every *mass* attracts every other mass with a *gravitational force*. It is a *non-contact force*, so the 2 masses need not be touching.",
        say: "Start with a simple truth. Every mass pulls on every other mass. In the picture, 2 round masses sit apart with a gap between them, and a pink arrow on each one points toward the other, showing that they pull one another closer. Nothing links them and nothing touches, so this gravitational pull is a non-contact force.",
      },
      {
        kind: "concept",
        heading: "A gravitational field",
        figure: "fig-03-04-gravitational-field",
        body: "A *gravitational field* is a region in which a mass feels a *force* because of gravitational *attraction*.",
        say: "A gravitational field is just the region around a mass where its pull can be felt. In the diagram, the large mass X sits in the middle, with grey field lines reaching in toward it from every side. A smaller object Y, placed inside that field, is tugged by a pink arrow pointing straight toward X. Anywhere in that region, a mass will be pulled toward X.",
      },
      {
        kind: "concept",
        heading: "Field strength g",
        body: "*Gravitational field strength* g at a point is the gravitational *force* acting per unit *mass* placed there. Its unit is the *newton per kilogram*.",
        formula: {
          latex: "g = \\dfrac{F}{m}",
          where: [
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
            { sym: "F", meaning: "gravitational force", unit: "N" },
            { sym: "m", meaning: "mass", unit: "kg" },
          ],
        },
        say: "Field strength tells us how strong a gravitational field is at some point. It is the gravitational force felt by each kilogram of mass placed there. So you take the force in newtons and divide it by the mass in kilograms, which gives an answer in newtons per kilogram.",
      },
      {
        kind: "concept",
        heading: "g near the Earth",
        body: "Near the Earth's surface g is about 10, so every 1 kilogram feels about 10 newtons of pull. The field is *strongest* at the *surface* and grows *weaker* with height, and gravity is only noticeable for *enormous* masses.",
        say: "Near the Earth's surface, g is about 10 newtons per kilogram. That means every 1 kilogram of mass feels a pull of about 10 newtons. The field is strongest right at the surface and gets weaker the higher you go. And because gravity is only noticeable for enormous masses like planets and stars, the pull between everyday objects is far too tiny to feel.",
      },
      {
        kind: "choice",
        question: "What does a gravitational field strength of 10 N/kg tell you?",
        options: [
          "Each 1 kg of mass feels a pull of 10 N",
          "Every object weighs 10 kg",
          "The field reaches 10 m out",
          "Gravity acts only on 10 kg masses",
        ],
        correct: 0,
        ask: "Field strength is the force felt by each kilogram. So what force does a single 1 kilogram mass feel here? Which option says that?",
        hints: [
          "g is the gravitational force per unit mass, in newtons per kilogram.",
          "10 newtons per kilogram means every 1 kilogram is pulled with 10 newtons.",
        ],
        explain: "It tells you that each 1 kilogram of mass feels a pull of 10 newtons, because field strength is the gravitational force acting on every kilogram placed at that point.",
      },
      {
        kind: "choice",
        question: "A 3 kg mass rests near the Earth's surface, where g = 10 N/kg. Find the gravitational force F on it.",
        options: ["30 N", "3 N", "13 N", "0.3 N"],
        correct: 0,
        ask: "The force is mass times g, so work out 3 × 10. Which option matches?",
        hints: [
          "Rearrange g equals F divided by m into F equals m times g.",
          "3 × 10 is 30, and the unit of force is the newton.",
        ],
        working: [
          { label: "Formula", latex: "F = mg" },
          { label: "Substitute", latex: "F = 3 \\times 10" },
          { label: "Answer", latex: "F = 30\\ \\text{N}" },
        ],
        explain: "The force is 30 newtons, because 3 kilograms times 10 newtons per kilogram gives 30 newtons of gravitational pull.",
      },
      {
        kind: "slider",
        prompt: "A 5 kg mass sits near the Earth, where g = 10 N/kg. Set the slider to the gravitational force F on it, in newtons.",
        min: 0,
        max: 100,
        step: 1,
        unit: "N",
        start: 0,
        targetMin: 49,
        targetMax: 51,
        ask: "The pull is mass times g, so work out 5 × 10 and slide to that value.",
        hints: [
          "Use F equals m times g, with g equal to 10 newtons per kilogram.",
          "5 × 10 is 50, so slide to 50 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F = mg" },
          { label: "Substitute", latex: "F = 5 \\times 10" },
          { label: "Answer", latex: "F = 50\\ \\text{N}" },
        ],
        explain: "The force is 50 newtons, because 5 kilograms times 10 newtons per kilogram is 50 newtons.",
      },
      {
        kind: "cloze",
        prompt: "Complete the description of gravitational field strength.",
        segments: [
          "Field strength is the gravitational force per unit ",
          ", and its unit is the newton per ",
          ". Near the Earth's surface g is about ",
          " N/kg.",
        ],
        bank: ["mass", "weight", "kilogram", "newton", "10", "1.6"],
        answer: ["mass", "kilogram", "10"],
        ask: "Think about what g is divided by, what unit that gives, and the value of g at the Earth's surface. Fill each blank from the bank.",
        hints: [
          "g equals F divided by m, so it is force per unit mass.",
          "Force in newtons divided by mass in kilograms gives newtons per kilogram, and near Earth g is about 10.",
        ],
        explain: "Field strength is the force per unit mass, measured in newtons per kilogram, and near the Earth's surface g is about 10 newtons per kilogram.",
      },
      {
        kind: "insight",
        body: "Field strength g links *force* and *mass*: multiply a mass in *kilograms* by g in *newtons per kilogram* to get the pull in newtons.",
        say: "Hold on to one working idea. Field strength g is the bridge between mass and force. Take any mass in kilograms, multiply it by g in newtons per kilogram, and you get the gravitational pull on it in newtons. Near the Earth's surface that g is about 10.",
      },
    ],
  },
];