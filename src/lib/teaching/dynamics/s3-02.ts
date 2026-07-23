import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 2. Grounded in KB Chapter 03 (Mass and Weight) sections 3.2 to 3.4.

export const BOXES: Subconcept[] = [
  {
    id: "t3.2",
    code: "T3.2",
    title: "Mass and inertia",
    blurb: "How much matter an object holds, and why more of it is harder to move",
    steps: [
      {
        kind: "concept",
        heading: "Mass",
        body: "*Mass* is a measure of the amount of *matter* in an object. It is a *scalar*, so it has size only and no direction. Its SI unit is the *kilogram*.",
        say: "Mass tells you how much matter an object is made of. It is a scalar, which means it has a size but no direction attached. We measure mass in kilograms, and in the lab you find it with a beam balance or an electronic balance.",
      },
      {
        kind: "concept",
        heading: "Mass is the same everywhere",
        body: "The *mass* of an object stays the *same* wherever you take it. It does not depend on *location*, and it is not changed by the *gravitational field strength*.",
        say: "Here is a point worth holding on to. Mass does not change when you move an object around. Take it up a mountain, out to the Moon, or into deep space, and the mass stays exactly the same. That is because the amount of matter has not changed, and mass does not care about the gravitational field strength at all.",
      },
      {
        kind: "concept",
        heading: "Inertia",
        body: "*Inertia* is the *reluctance* of an object to change its state of *rest* or *motion*. An object at rest resists being moved, and a moving object resists being stopped.",
        say: "Inertia is an object's reluctance to change how it is moving. If it is sitting still, it resists being made to move. If it is already moving, it resists being slowed, stopped, or turned. Inertia is not a force. It is just this built in stubbornness that every object has.",
      },
      {
        kind: "concept",
        heading: "More mass, more inertia",
        body: "The greater the *mass*, the greater the *inertia*. A more massive object is harder to *start* moving, harder to stop, and harder to *turn*.",
        say: "Mass and inertia go hand in hand. The more massive an object is, the more inertia it has, so it is harder to get moving, harder to bring to a stop, and harder to turn. Think of a fully loaded trolley next to an empty one. The loaded trolley has far more mass, so it takes much more effort to push off and much more effort to stop.",
      },
      {
        kind: "choice",
        question: "Which statement about mass is correct?",
        options: [
          "It is a vector with both size and direction",
          "It is a measure of the amount of matter, in kilograms",
          "It is measured in newtons",
          "It becomes smaller when the object is taken to the Moon",
        ],
        correct: 1,
        ask: "Think about what mass actually measures and the unit you use for it. Which option fits both?",
        hints: [
          "Mass is the amount of matter, and it is a scalar with size only.",
          "The SI unit of mass is the kilogram, not the newton.",
        ],
        explain: "Mass is a measure of the amount of matter in an object, and it is measured in kilograms. It is a scalar, and it stays the same everywhere, including on the Moon.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement into the correct bin.",
        bins: ["True of mass", "Not true of mass"],
        items: [
          { text: "It is the amount of matter in an object", bin: 0 },
          { text: "It is measured in kilograms", bin: 0 },
          { text: "It stays the same everywhere", bin: 0 },
          { text: "It changes with the gravitational field strength", bin: 1 },
          { text: "It is a vector with a direction", bin: 1 },
        ],
        ask: "For each statement, ask whether it matches mass as the amount of matter, a scalar in kilograms that never changes. Tap each one and drop it in its bin.",
        hints: [
          "Mass is a scalar, measured in kilograms, and it is the same everywhere.",
          "Mass does not depend on the gravitational field strength, and it carries no direction.",
        ],
        explain: "Mass is the amount of matter, measured in kilograms, and it stays the same everywhere. It is not a vector, and it does not change with the gravitational field strength.",
      },
      {
        kind: "cloze",
        prompt: "Complete the definition of inertia.",
        segments: [
          "Inertia is the ",
          " of an object to change its state of ",
          " or motion. The greater the ",
          ", the greater the inertia.",
        ],
        bank: ["reluctance", "rest", "mass", "speed", "eagerness", "weight"],
        answer: ["reluctance", "rest", "mass"],
        ask: "Recall that inertia is how strongly an object resists a change to its rest or motion, and which property decides how large it is. Fill each blank from the bank.",
        hints: [
          "Inertia is the reluctance to change a state of rest or motion.",
          "A larger mass means a larger inertia.",
        ],
        explain: "Inertia is the reluctance of an object to change its state of rest or motion, and the greater the mass, the greater the inertia.",
      },
      {
        kind: "choice",
        question: "A fully loaded trolley is much harder to push off and to stop than an empty one. Why?",
        options: [
          "The loaded trolley has less mass",
          "The loaded trolley has more mass, so it has more inertia",
          "The empty trolley has more inertia",
          "Inertia does not depend on mass",
        ],
        correct: 1,
        ask: "Loading the trolley adds matter, which adds mass. Think about how that changes its inertia.",
        hints: [
          "Adding a load adds matter, so it adds mass.",
          "The greater the mass, the greater the inertia, so it is harder to start and to stop.",
        ],
        explain: "The loaded trolley has more mass, so it has more inertia. That extra inertia makes it harder to start moving and harder to stop.",
      },
      {
        kind: "insight",
        body: "*Mass* and *inertia* rise together: more mass means more inertia, so a heavier object resists any change to its *motion* more strongly.",
        say: "Keep one idea from this section. Mass and inertia grow together. Pile on more mass and you get more inertia, so the object fights any change to its motion more strongly, whether you are trying to start it, stop it, or turn it.",
      },
    ],
  },
];