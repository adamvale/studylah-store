import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 5. Grounded in KB Chapter 03 (Mass and Weight), the mass versus weight contrast.

export const BOXES: Subconcept[] = [
  {
    id: "t3.5",
    code: "T3.5",
    title: "Mass versus weight",
    blurb: "Two quantities that are easy to confuse, and how to tell them apart",
    steps: [
      {
        kind: "concept",
        heading: "Mass",
        body: "*Mass* is a measure of the amount of *matter* in a body. It is a *scalar*, its unit is the *kilogram*, and it stays the same wherever the body goes.",
        say: "Mass tells you how much matter a body is made of. It has size only, with no direction, so mass is a scalar, and we measure it in kilograms. The key point is that mass never changes: a 2 kilogram brick holds the same 2 kilograms of matter on Earth, on the Moon, or drifting in space. To measure it you use a beam balance or an electronic balance.",
      },
      {
        kind: "concept",
        heading: "Weight",
        body: "*Weight* is a measure of the *gravitational force* on a body. It is a *vector* pointing toward the planet's centre, its unit is the *newton*, and it depends on the gravitational field strength g.",
        say: "Weight is different. It is the gravitational force acting on a body, so it is a force with a direction, always toward the centre of the planet, which makes it a vector. We measure weight in newtons, using a spring balance. And because weight is the pull of gravity, it depends on g, the gravitational field strength. Change g and the weight changes with it.",
      },
      {
        kind: "concept",
        heading: "Same body, two places",
        body: "The *same* body keeps one *mass* everywhere, but its *weight* is smaller on the Moon, because *g* there is weaker: about 10 newtons per kilogram on Earth against about 1.6 on the Moon.",
        say: "Now put the 2 ideas together. Take one body to the Moon. Its mass is unchanged, because the amount of matter has not changed. But its weight drops, because g on the Moon is only about 1.6 newtons per kilogram, compared with about 10 on Earth. Same matter, same mass, but a weaker pull, so less weight.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement under the quantity it describes.",
        bins: ["Mass", "Weight"],
        items: [
          { text: "amount of matter in a body", bin: 0 },
          { text: "gravitational force on a body", bin: 1 },
          { text: "measured in kilograms", bin: 0 },
          { text: "measured in newtons", bin: 1 },
          { text: "the same everywhere", bin: 0 },
          { text: "changes with g", bin: 1 },
        ],
        ask: "For each statement, ask whether it is about the matter in the body or about the pull of gravity on it. Tap each one and drop it in its bin.",
        hints: [
          "Mass is the amount of matter, a scalar in kilograms, the same everywhere.",
          "Weight is the gravitational force, a vector in newtons, and it changes with g.",
        ],
        explain: "Mass is the amount of matter, measured in kilograms, and it is the same everywhere. Weight is the gravitational force, measured in newtons, and it changes with g.",
      },
      {
        kind: "match",
        prompt: "Match each item to the quantity it belongs with.",
        pairs: [
          { left: "Kilogram", right: "Mass" },
          { left: "Newton", right: "Weight" },
          { left: "Beam balance", right: "Mass" },
          { left: "Spring balance", right: "Weight" },
        ],
        ask: "Sort by unit and instrument: kilograms and a beam balance go with the amount of matter, newtons and a spring balance go with the gravitational force.",
        hints: [
          "Mass is measured in kilograms with a beam or electronic balance.",
          "Weight is a force, measured in newtons with a spring balance.",
        ],
        explain: "Mass uses the kilogram and is found with a beam balance. Weight is a force, so it uses the newton and is found with a spring balance.",
      },
      {
        kind: "choice",
        question: "An astronaut travels from the Earth to the Moon, where g is smaller. What happens to the astronaut's mass and weight?",
        options: [
          "Both stay the same",
          "Mass stays the same, weight decreases",
          "Mass decreases, weight stays the same",
          "Both decrease",
        ],
        correct: 1,
        ask: "Ask which quantity depends on the amount of matter and which depends on g. Only one of them cares about the weaker gravity on the Moon.",
        hints: [
          "Mass is the amount of matter, so travelling cannot change it.",
          "Weight depends on g, and g is smaller on the Moon, so the weight falls.",
        ],
        explain: "Mass stays the same, because the amount of matter does not change. Weight decreases, because weight depends on g, and g is smaller on the Moon.",
      },
      {
        kind: "choice",
        question: "A 2 kg object weighs 20 N on the Earth (g = 10 N/kg). Find its weight on the Moon, where g = 1.6 N/kg.",
        options: ["3.2 N", "20 N", "2 N", "12.5 N"],
        correct: 0,
        ask: "Weight is still mass times g, but use the Moon's g of 1.6. Work out 2 × 1.6.",
        hints: [
          "Use W equals m times g, with g equal to 1.6 on the Moon.",
          "2 × 1.6 is 3.2, and the unit of weight is the newton.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 2 \\times 1.6" },
          { label: "Answer", latex: "W = 3.2\\ \\text{N}" },
        ],
        explain: "The weight on the Moon is 3.2 newtons, because 2 kilograms times 1.6 newtons per kilogram is 3.2 newtons. The mass is still 2 kilograms, exactly as on Earth.",
      },
      {
        kind: "cloze",
        prompt: "Complete the contrast between the two quantities.",
        segments: ["Mass is a ", " measured in ", ", while weight is a ", " measured in ", "."],
        bank: ["scalar", "kilograms", "vector", "newtons", "constant"],
        answer: ["scalar", "kilograms", "vector", "newtons"],
        ask: "Mass has size only and uses the kilogram; weight is a force with a direction and uses the newton. Fill the blanks from the bank.",
        hints: [
          "A quantity with size only is a scalar; a quantity with a direction is a vector.",
          "Mass is measured in kilograms, and weight is measured in newtons.",
        ],
        explain: "Mass is a scalar measured in kilograms, while weight is a vector measured in newtons. The leftover word, constant, describes mass but is not the unit asked for.",
      },
      {
        kind: "insight",
        body: "Ask 2 questions to tell them apart: does it change when *g* changes, and what *unit* is it in? *Mass* is constant and in kilograms; *weight* changes with g and is in newtons.",
        say: "Hold on to a simple 2 part test. First, does the quantity change when g changes? If it does, it is weight; if it does not, it is mass. Second, what unit is used? Kilograms mean mass, newtons mean weight. Those 2 questions will sort mass from weight every time.",
      },
    ],
  },
];