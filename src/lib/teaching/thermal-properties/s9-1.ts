import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, section 1. Grounded in KB Chapter 10 (Thermal Properties of Matter) section 10.1.
// Mostly conceptual: internal energy as total KE + total PE, the state comparison, and temperature as average KE.
// Figure colours follow the fig-10 key: particles and cool regions = blue; escaping fast particles / kinetic-energy
// highlight = green; hot region = red or amber; container outlines, axes and guides = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t9.1",
    code: "T9.1",
    title: "Internal energy",
    blurb: "What internal energy is, and how it splits between the motion and the arrangement of particles",
    steps: [
      {
        kind: "concept",
        heading: "Internal energy is stored in the particles",
        body: "*Internal energy* is the total energy stored in all the *particles* of a body. It is the total *kinetic energy* of their motion added to the total *potential energy* that comes from the forces between them.",
        formula: {
          latex: "U = KE_{\\text{total}} + PE_{\\text{total}}",
          where: [
            { sym: "U", meaning: "internal energy", unit: "J" },
            { sym: "KE_{\\text{total}}", meaning: "total kinetic energy of all particles", unit: "J" },
            { sym: "PE_{\\text{total}}", meaning: "total potential energy from forces between particles", unit: "J" },
          ],
        },
        say: "Every body is made of countless particles, and each one carries energy. Some of that is kinetic energy, the energy of the particles moving about, and some is potential energy, stored in the attractive forces that hold the particles apart. Add up both kinds over all the particles and you get the internal energy of the body, measured in joules.",
      },
      {
        kind: "concept",
        heading: "How the split changes with state",
        figure: "fig-10-01-internal-energy-states",
        body: "In a *solid* the particles are held tightly, so the potential energy is large and the kinetic energy is small. In a *gas* the particles are far apart and fast, so the potential energy is *negligible* and the kinetic energy is large.",
        say: "This figure has 3 panels drawn left to right. On the left is a solid, with blue particles vibrating in a fixed pattern, so it has large potential energy and small kinetic energy. In the middle is a liquid, with blue particles still close together but sliding past one another, so some potential energy and moderate kinetic energy. On the right is a gas, with blue particles far apart and moving fast, so almost no potential energy and large kinetic energy.",
      },
      {
        kind: "concept",
        heading: "Temperature tracks the average kinetic energy",
        body: "*Temperature* is a measure of the *average kinetic energy* of the particles. A higher *average* kinetic energy means a higher temperature, whatever the total internal energy happens to be.",
        say: "Temperature is not the same as internal energy. Temperature only reflects how fast the particles move on average, that is their average kinetic energy. Warm a body and its particles speed up, so the average kinetic energy rises and the thermometer reading climbs. A bucket of warm water and a cup of warm water can share the same temperature, yet the bucket holds far more internal energy because it has many more particles.",
      },
      {
        kind: "concept",
        heading: "A preview: 2 ways to add energy",
        figure: "fig-10-02-heat-vs-latent",
        body: "Adding energy can raise the *kinetic energy*, which changes the *temperature*, or it can raise the *potential energy* only, which changes the state at *constant temperature*.",
        say: "This figure is a split panel. On the heat capacity side, energy goes into the average kinetic energy of the particles, so the temperature changes. On the latent heat side, energy goes into the potential energy only, pulling the particles apart as the state changes, so the temperature stays constant. Keep this preview in mind, because the rest of the topic separates these 2 effects.",
      },
      {
        kind: "choice",
        question: "Which statement best describes the internal energy of a body?",
        options: [
          "The total kinetic energy of its particles only",
          "The total kinetic energy plus the total potential energy of its particles",
          "The total potential energy of its particles only",
          "The heat that flows out of the body",
        ],
        correct: 1,
        ask: "Internal energy counts 2 stores added together: the motion of the particles and the forces between them. Which option keeps both?",
        hints: [
          "Kinetic energy comes from the particles moving; potential energy comes from the forces between them.",
          "Internal energy is the sum of both, not just one of them.",
        ],
        explain: "Internal energy is the total kinetic energy plus the total potential energy of the particles, so it includes both the motion of the particles and the forces between them.",
      },
      {
        kind: "classify",
        prompt: "Sort each description by the energy split it belongs to.",
        bins: ["Large potential energy, small kinetic energy", "Negligible potential energy, large kinetic energy"],
        items: [
          { text: "A solid, with particles vibrating in fixed positions", bin: 0 },
          { text: "Particles held by strong attractive forces in a fixed pattern", bin: 0 },
          { text: "A gas, with particles far apart and moving fast", bin: 1 },
          { text: "Particles with almost no attractive forces between them", bin: 1 },
        ],
        ask: "Strong forces holding particles in place store a lot of potential energy; particles that fly about freely carry a lot of kinetic energy. Tap each description and drop it in the matching bin.",
        hints: [
          "A solid locks its particles together, so its potential energy is large and its kinetic energy is small.",
          "A gas lets its particles spread out and move fast, so its potential energy is negligible and its kinetic energy is large.",
        ],
        explain: "A solid has large potential energy and small kinetic energy because its particles are held in a fixed pattern, while a gas has negligible potential energy and large kinetic energy because its particles are far apart and fast.",
      },
      {
        kind: "choice",
        question: "Temperature is a measure of which quantity for the particles of a body?",
        options: [
          "The total internal energy",
          "The total potential energy",
          "The average kinetic energy",
          "The number of particles",
        ],
        correct: 2,
        ask: "Temperature does not depend on how many particles there are, only on how fast they move on average. Which option matches that?",
        hints: [
          "A cup and a bucket of water at the same temperature share the same average particle motion.",
          "Temperature tracks the average kinetic energy, not the total energy.",
        ],
        explain: "Temperature is a measure of the average kinetic energy of the particles, so a higher average kinetic energy always means a higher temperature.",
      },
      {
        kind: "match",
        prompt: "Match each state to its energy split.",
        pairs: [
          { left: "Solid", right: "Large potential energy, small kinetic energy" },
          { left: "Liquid", right: "Some potential energy, moderate kinetic energy" },
          { left: "Gas", right: "Negligible potential energy, large kinetic energy" },
        ],
        ask: "Work from how tightly each state holds its particles: the tighter the hold, the more potential energy and the less kinetic energy. Pair each state with its split.",
        hints: [
          "A solid holds its particles tightest, a gas holds them loosest, and a liquid sits between the 2.",
          "As you go from solid to liquid to gas the potential energy falls and the kinetic energy rises.",
        ],
        explain: "A solid has large potential energy and small kinetic energy, a liquid has some potential energy and moderate kinetic energy, and a gas has negligible potential energy and large kinetic energy.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of internal energy.",
        segments: [
          "Internal energy is the total ",
          " energy plus the total ",
          " energy of the particles, and temperature measures their ",
          " kinetic energy.",
        ],
        bank: ["kinetic", "potential", "average", "total", "chemical"],
        answer: ["kinetic", "potential", "average"],
        ask: "The first 2 blanks are the 2 stores that add up to internal energy; the last blank says what kind of kinetic energy temperature tracks.",
        hints: [
          "Internal energy is the motion store plus the forces store.",
          "Temperature does not track the total kinetic energy, only the average one.",
        ],
        explain: "Internal energy is the total kinetic energy plus the total potential energy of the particles, and temperature measures their average kinetic energy.",
      },
      {
        kind: "insight",
        body: "Internal energy adds up *both* stores, motion and forces, but *temperature* only tracks the *kinetic* part, so 2 bodies at the same temperature can hold very different amounts of internal energy.",
        say: "Here is the idea to keep. Internal energy is the whole picture, the total kinetic energy plus the total potential energy of every particle. Temperature is narrower, reflecting only the average kinetic energy. That is why a swimming pool and a cup of tea can sit at the same temperature while the pool stores vastly more internal energy, simply because it has far more particles.",
      },
    ],
  },
];
