import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, section 1. Grounded in KB Chapter 08 (sections 8.1, 8.2).
// Conceptual chapter: no formula fields and no working blocks anywhere.
// Figure colours follow the T7 colour key: particles = blue, attractive-force lines = grey dashed,
// vibration arcs = green, container walls/lead lines = grey or plain white outline.

export const BOXES: Subconcept[] = [
  {
    id: "t7.1",
    code: "T7.1",
    title: "States of matter and the kinetic particle model",
    blurb: "The tiny particles behind solids, liquids and gases, and the energy they store",
    steps: [
      {
        kind: "concept",
        heading: "Matter is made of particles",
        body: "All matter is built from enormous numbers of tiny *particles*, either atoms or molecules. The same particles can make a solid, a liquid or a gas; these are the three *states of matter*.",
        say: "Everything around you, this desk, the water in a glass, the air you breathe, is made of huge numbers of tiny particles that are far too small to see. The particles themselves do not change when a substance melts or boils. What changes between a solid, a liquid and a gas is how the particles are spaced out, how they are arranged, how they move, and how strongly they pull on each other.",
      },
      {
        kind: "concept",
        heading: "The kinetic particle model",
        body: "The *kinetic particle model* says every particle is in *continuous motion* and never truly still. There are *attractive forces* between neighbouring particles, strongest when the particles are close and weaker as they move apart.",
        say: "The word kinetic means moving, and that is the heart of this model. Every particle is always jiggling, sliding or flying about, even in a solid that looks perfectly still. Between neighbouring particles there are attractive forces that act like tiny invisible springs pulling them together. Those forces are strongest when the particles sit close together, and they fade as the particles are pulled further apart.",
      },
      {
        kind: "concept",
        heading: "The internal energy store",
        figure: "fig-08-01-internal-store",
        body: "Because particles move, they fill a *kinetic store*. Because particles attract across the gaps between them, the substance also has a *potential energy store*. Added together these give the *internal energy store*.",
        say: "In the picture 4 blue particles sit in a small square. Grey dashed lines join every pair of particles, and those dashed lines stand for the attractive force between them. Beside each particle a small green arc shows it vibrating on the spot. The caption reads internal store equals kinetic store plus potential energy store. So the motion of the particles gives the kinetic store, the attractive forces across the gaps give the potential energy store, and the 2 added together are the internal energy store. Heating a substance raises this internal store: the particles speed up, gain kinetic energy, and can also be pulled further apart.",
      },
      {
        kind: "choice",
        question: "In the kinetic particle model, what does the word kinetic tell you about the particles?",
        options: [
          "They are electrically charged",
          "They are all the same size",
          "They are always moving",
          "They are perfectly still",
        ],
        correct: 2,
        ask: "Kinetic is the word physicists use for motion. Which option describes particles that are moving?",
        hints: [
          "A kinetic store is an energy store to do with movement.",
          "The model says particles are in continuous motion, never at rest.",
        ],
        explain: "Kinetic means to do with motion, so the model claims the particles are in continuous motion and never truly still.",
      },
      {
        kind: "match",
        prompt: "Match each energy store to the feature of the particles that gives rise to it.",
        pairs: [
          { left: "Kinetic store", right: "The motion of the particles" },
          { left: "Potential energy store", right: "The attractive forces across the gaps" },
          { left: "Internal energy store", right: "The kinetic store plus the potential store" },
        ],
        ask: "The kinetic store comes from movement. Which store comes from the attractive forces pulling particles together?",
        hints: [
          "Kinetic goes with motion, and potential goes with the attractive forces.",
          "The internal store is the total, the kinetic store added to the potential store.",
        ],
        explain: "The kinetic store comes from the motion of the particles, the potential energy store comes from the attractive forces across the gaps, and the internal store is the 2 added together.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of the energy stores in a substance.",
        segments: ["The ", " store comes from motion, the ", " store comes from attractive forces, and their total is the ", " store."],
        bank: ["kinetic", "potential", "internal", "elastic"],
        answer: ["kinetic", "potential", "internal"],
        ask: "Start with the store that comes from movement, then the one from the attractive forces, then the grand total of the 2.",
        hints: [
          "Motion gives the kinetic store; the pulling forces give the potential store.",
          "The kinetic store plus the potential store is called the internal store.",
        ],
        explain: "Motion gives the kinetic store, the attractive forces give the potential store, and adding the 2 gives the internal store.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement by whether the kinetic particle model says it is true or false.",
        bins: ["True in the model", "False in the model"],
        items: [
          { text: "Particles are in continuous motion", bin: 0 },
          { text: "There are attractive forces between neighbouring particles", bin: 0 },
          { text: "Solids, liquids and gases are made of the same kind of particles", bin: 0 },
          { text: "Particles sit perfectly still until a substance is heated", bin: 1 },
          { text: "The attractive forces get stronger as particles move apart", bin: 1 },
        ],
        ask: "The model insists particles are always moving and always attract their neighbours. Tap each statement and drop it in the matching bin.",
        hints: [
          "Continuous motion and attractive forces are both true in the model.",
          "The attractive force is strongest when particles are close, so it weakens, not strengthens, as they separate.",
        ],
        explain: "The model says particles are always moving, always attract their neighbours, and are the same particles in all 3 states. It is false that they sit still until heated, and false that the force grows as they separate, because that force actually weakens with distance.",
      },
      {
        kind: "insight",
        body: "The same *particles* build every state of matter; what differs is their *spacing, arrangement and motion*, and the *internal store* is simply the kinetic store from motion plus the potential store from the attractive forces.",
        say: "Here is the idea to carry forward. You do not need different particles for solids, liquids and gases; the very same particles make all 3, and only their spacing, arrangement and movement change. And whenever you think about the energy of a substance, remember it is stored in 2 ways, a kinetic store from the particles moving and a potential store from the attractive forces between them, and together they make the internal store.",
      },
    ],
  },
];
