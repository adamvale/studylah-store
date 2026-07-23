import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, Revision 1. Checkpoint over KB Chapter 08,
// sections t7.1 to t7.3: states of matter, the kinetic particle model, the internal
// store, arrangement/motion/properties of the three states, and explaining everyday
// properties. Question-only. Conceptual chapter: NO working blocks, NO formula fields.

export const BOXES: Subconcept[] = [
  {
    id: "t7.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: states of matter and the kinetic particle model",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "In the kinetic particle model, a particle's kinetic store is due to which of the following?",
        options: [
          "The attractive forces pulling on it",
          "Its distance from its neighbours",
          "Its continuous motion",
          "The container it is held in",
        ],
        correct: 2,
        ask: "The word kinetic points to one particular idea. Ask which option is about a particle moving. Which one is that?",
        hints: [
          "Every particle in the model is in continuous motion and is never still.",
          "The attractive forces feed the potential energy store, not the kinetic store. The kinetic store comes from motion.",
        ],
        explain: "The kinetic store is due to the particle's continuous motion, because kinetic energy is energy of movement. The attractive forces between particles feed the separate potential energy store.",
      },
      {
        kind: "choice",
        question: "Which statement about the three states of matter is correct?",
        options: [
          "The same particles make up the solid, liquid and gas of one substance",
          "Each state is built from a completely different kind of particle",
          "Only gases are made of particles",
          "Solids contain no particles, only solid matter",
        ],
        correct: 0,
        ask: "Think about what actually changes when ice melts to water and then boils to steam. Do the particles themselves change, or only their arrangement and motion?",
        hints: [
          "All matter is made of enormous numbers of tiny particles, in every state.",
          "When a substance changes state, the particles stay the same. What differs is their spacing, pattern, motion and how strongly they attract.",
        ],
        explain: "The same particles make up the solid, liquid and gas of one substance. What differs between the states is the spacing, pattern, motion and strength of attraction, not the particles themselves.",
      },
      {
        kind: "choice",
        question: "Why can a gas be compressed easily while a liquid can barely be compressed at all?",
        options: [
          "Gas particles are much smaller than liquid particles",
          "A gas has stronger attractive forces than a liquid",
          "Gas particles are heavier, so they squash together",
          "Gas particles have large empty spaces between them, while liquid particles are already close and touching",
        ],
        correct: 3,
        ask: "Compression means squeezing the particles into a smaller space. Ask which state has room to spare between its particles. Which option says that?",
        hints: [
          "A gas has its particles widely scattered with large gaps between them.",
          "In a liquid the particles are already close together and touching, so there is almost no empty space to squeeze out.",
        ],
        explain: "A gas compresses easily because its particles have large empty spaces between them, so they can be pushed closer together. Liquid particles are already close and touching, leaving almost no space to remove.",
      },
      {
        kind: "choice",
        question: "A solid keeps a fixed shape. Which feature of its particles best explains this?",
        options: [
          "The particles move rapidly in all directions",
          "The particles are held in a regular fixed pattern",
          "The particles are far apart with large gaps",
          "There are no attractive forces between the particles",
        ],
        correct: 1,
        ask: "A fixed shape means the particles cannot rearrange or flow. Ask which option describes particles locked in place. Which one is that?",
        hints: [
          "In a solid the attractive forces are very strong, holding the particles in a regular fixed pattern.",
          "The particles only vibrate about fixed positions, so they cannot move to new places and the shape stays fixed.",
        ],
        explain: "A solid keeps its shape because its particles are held in a regular fixed pattern, only vibrating about fixed positions. They cannot move to new places, so the shape does not change.",
      },
      {
        kind: "choice",
        question: "The figure shows particles in the three states of matter. Which description matches the right-hand panel?",
        figure: "fig-08-02-states-particles",
        options: [
          "Particles packed in a regular pattern, only vibrating on the spot",
          "Particles close together but jumbled, sliding past one another",
          "Particles far apart with no pattern, moving freely in all directions",
          "Particles fixed in place with no motion at all",
        ],
        correct: 2,
        ask: "Look at the right-hand panel and check how far apart the particles are and whether they follow any pattern. Which option matches that panel?",
        hints: [
          "The figure has 3 panels: left is a solid, middle is a liquid, right is a gas.",
          "In the right-hand gas panel the blue particles are far apart with no pattern, moving freely in all directions.",
        ],
        explain: "The right-hand panel is a gas, so its particles are far apart with no pattern and move freely in all directions. The left panel is the regular solid and the middle is the jumbled liquid.",
      },
      {
        kind: "classify",
        prompt: "Sort each description into the state of matter it fits best.",
        bins: ["Solid", "Liquid", "Gas"],
        items: [
          { text: "Keeps a fixed shape and a fixed volume", bin: 0 },
          { text: "Particles only vibrate about fixed positions", bin: 0 },
          { text: "Keeps its volume but takes the container's shape", bin: 1 },
          { text: "Particles slide past one another", bin: 1 },
          { text: "Fills any container completely", bin: 2 },
          { text: "Particles move rapidly and randomly in all directions", bin: 2 },
        ],
        ask: "For each card, picture how tightly the particles are held and whether they can move around. Then drop it into solid, liquid or gas.",
        hints: [
          "A solid holds both its shape and volume; a liquid keeps its volume but flows to fit the container.",
          "A gas has no fixed shape or volume, so it spreads out to fill whatever space it is in.",
        ],
        explain: "A solid keeps a fixed shape and volume with particles vibrating in place. A liquid keeps its volume but takes the container's shape as particles slide past one another. A gas fills any container as its particles move rapidly and randomly.",
      },
      {
        kind: "match",
        prompt: "Match each energy store to what it is due to.",
        pairs: [
          { left: "Kinetic store", right: "The motion of the particles" },
          { left: "Potential energy store", right: "The attractive forces between the particles" },
          { left: "Internal store", right: "The total of the kinetic and potential stores" },
        ],
        ask: "Think about what each store depends on: is it about particles moving, particles attracting, or the whole total added together? Match each one.",
        hints: [
          "Kinetic always means motion, so the kinetic store links to the moving particles.",
          "The internal store is the whole amount of energy inside the substance, which is the kinetic store plus the potential energy store.",
        ],
        explain: "The kinetic store is due to the motion of the particles, and the potential energy store is due to the attractive forces between them. The internal store is the total of these 2 stores added together.",
      },
      {
        kind: "cloze",
        prompt: "Complete this summary of how the particles behave in each state.",
        segments: [
          "In a solid the particles vibrate about ",
          " positions. In a liquid the particles ",
          " past one another. In a gas the particles are widely ",
          " and move in all ",
          " directions.",
        ],
        bank: ["fixed", "slide", "spaced", "random", "regular", "still"],
        answer: ["fixed", "slide", "spaced", "random"],
        ask: "Work through the states one at a time: recall what solid particles do on the spot, how liquid particles move, and how spread out and directed a gas is.",
        hints: [
          "Solid particles cannot leave their places, so they vibrate about fixed positions.",
          "Gas particles are widely spaced and move in all random directions, filling the container.",
        ],
        explain: "Solid particles vibrate about fixed positions, liquid particles slide past one another, and gas particles are widely spaced and move in all random directions.",
      },
      {
        kind: "order",
        prompt: "Order the three states by the strength of the attractive forces between their particles, from strongest to weakest.",
        items: [
          "Solid: very strong attractive forces",
          "Liquid: moderate attractive forces",
          "Gas: very weak attractive forces",
        ],
        ask: "Think about which state holds its particles most tightly locked together, and which lets them fly apart most freely. Put them in order from strongest to weakest.",
        hints: [
          "The stronger the forces, the more tightly packed and fixed the particles are.",
          "A solid holds its particles most strongly and a gas holds them most weakly, with the liquid in between.",
        ],
        explain: "The attractive forces are strongest in the solid, which locks its particles in place, moderate in the liquid, whose particles slide but stay touching, and weakest in the gas, whose particles fly apart.",
      },
      {
        kind: "spoterror",
        prompt: "A student explains why a gas can be compressed. One line is wrong. Tap it.",
        lines: [
          "A gas is made of particles that move freely in all directions.",
          "There are large empty spaces between the gas particles.",
          "When the gas is compressed, the particles are pushed closer into those spaces.",
          "The gas particles shrink and get smaller, so the gas takes up less room.",
        ],
        errorLine: 3,
        ask: "Compression works by closing the gaps between particles, not by changing the particles themselves. Ask which line changes the particles instead of the gaps.",
        hints: [
          "The first 3 lines correctly describe the empty spaces closing up.",
          "Particles never shrink or grow. Compressing a gas only pushes the same particles closer together.",
        ],
        explain: "The wrong line says the particles shrink and get smaller. Particles keep the same size. A gas is compressed by pushing the same particles closer together into the empty spaces between them.",
      },
      {
        kind: "open",
        prompt: "Using the particle model, explain why a solid keeps a fixed shape and volume but a gas fills its container.",
        modelAnswer: "In a solid the attractive forces are very strong, so the particles are held in a regular fixed pattern, closely packed, and only vibrate about fixed positions. Because the particles cannot move to new places, the solid keeps a fixed shape and a fixed volume. In a gas the attractive forces are very weak, so the particles are widely spaced with no fixed arrangement and move rapidly and randomly in all directions. They spread out until they fill whatever container they are in, so a gas has no fixed shape or volume.",
        marks: [
          "Solid: strong forces, regular fixed pattern, particles only vibrate in place, so fixed shape and volume.",
          "Gas: very weak forces, widely spaced with no pattern, particles move freely.",
          "Gas particles spread out to fill the container, so no fixed shape or volume.",
        ],
        ask: "Compare the 2 states on how strong the forces are, whether the particles can move to new places, and what that means for shape and volume.",
      },
      {
        kind: "open",
        prompt: "The internal store of a substance is made of 2 parts. Using the figure, name the 2 parts and state what each one is due to.",
        figure: "fig-08-01-internal-store",
        modelAnswer: "The internal store is the total of the kinetic store and the potential energy store. The kinetic store is due to the motion of the particles, which are in continuous motion and, in a solid like the one shown, vibrate on the spot. The potential energy store is due to the attractive forces between the particles across the gaps between them. Adding the kinetic store and the potential energy store together gives the internal store.",
        marks: [
          "2 parts named: kinetic store and potential energy store.",
          "Kinetic store is due to the motion of the particles.",
          "Potential energy store is due to the attractive forces between the particles.",
        ],
        ask: "One part comes from the particles moving and the other from the forces pulling them together. Name each part and say which cause it belongs to.",
      },
    ],
  },
];
