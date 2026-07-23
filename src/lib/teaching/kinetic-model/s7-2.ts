import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, section 2. Grounded in KB Chapter 08 (8.3, 8.4).
// Conceptual chapter: no calculations, so no formula fields and no working blocks anywhere.
// Figure colour key for Ch08: particles = blue; attractive-force dashed bonds = grey dashed;
// vibration arcs = green; container walls and guide lines = grey or plain outline.

export const BOXES: Subconcept[] = [
  {
    id: "t7.2",
    code: "T7.2",
    title: "Arrangement, motion and properties of the three states",
    blurb: "How spacing, pattern and movement of particles decide the shape, volume and compressibility of each state",
    steps: [
      {
        kind: "concept",
        heading: "Four linked features",
        body: "The three states differ in four features that go together: the *attractive force* between particles, their *arrangement*, their *separation* and their *motion*. Change one across the states and the others change with it.",
        say: "Every difference between a solid, a liquid and a gas comes down to 4 linked features. First, how strongly the particles attract one another. Second, their arrangement, meaning the pattern they sit in. Third, their separation, meaning how far apart they are. And fourth, their motion, meaning how freely they move. These 4 always shift together as you go from solid to liquid to gas.",
      },
      {
        kind: "concept",
        heading: "Solid, liquid and gas particles",
        figure: "fig-08-02-states-particles",
        body: "In a *solid* the force is very strong, particles are closely packed in a regular pattern and only vibrate about fixed positions. In a *liquid* the force is moderate, particles touch in an irregular jumble and slide past one another. In a *gas* the force is very weak, particles are widely scattered and move rapidly and randomly.",
        say: "This figure has 3 panels drawn side by side. The left panel is the solid: blue particles sit in a neat regular pattern, packed close together in fixed positions, only vibrating on the spot. The middle panel is the liquid: the same blue particles are still close and touching but jumbled in an irregular way, sliding past one another. The right panel is the gas: the blue particles are far apart with no pattern at all, moving freely in every direction.",
      },
      {
        kind: "concept",
        heading: "Shape, volume and compressibility",
        body: "These arrangements set the *bulk properties*. A solid keeps a definite *shape* and volume; a liquid keeps its volume but takes the container's shape; a gas has neither, filling any space. Solids and liquids barely *compress* because their particles already touch, but a gas compresses easily because of the wide empty gaps between its particles.",
        say: "The way particles are arranged decides how the whole material behaves. A solid holds its own shape and its own volume. A liquid keeps a fixed volume but flows to take the shape of its container. A gas has no fixed shape and no fixed volume, so it spreads out to fill whatever holds it. Because solid and liquid particles are already close and touching, you can barely squash them, but a gas squashes easily since there is lots of empty space between its particles.",
      },
      {
        kind: "classify",
        prompt: "Sort each description into the state it best fits.",
        bins: ["Solid", "Liquid", "Gas"],
        items: [
          { text: "Keeps a definite shape of its own", bin: 0 },
          { text: "Particles only vibrate about fixed positions", bin: 0 },
          { text: "Keeps its volume but takes the container's shape", bin: 1 },
          { text: "Particles touch but slide past one another", bin: 1 },
          { text: "Spreads out to fill any container completely", bin: 2 },
          { text: "Particles are far apart and easily compressed", bin: 2 },
        ],
        ask: "Fixed shape and vibrating on the spot point to 1 state, flowing while still touching to another, and filling all the space to the third. Tap each card and drop it in its bin.",
        hints: [
          "A definite shape and vibration about fixed points both describe the tightly packed state.",
          "Only 1 state fills its container and squashes easily, because its particles are far apart.",
        ],
        explain: "A solid keeps its own shape and its particles only vibrate. A liquid keeps its volume but takes the container's shape as particles slide past each other. A gas fills any space and compresses easily because its particles are far apart.",
      },
      {
        kind: "match",
        prompt: "Match each state to how its particles are arranged and how they move.",
        pairs: [
          { left: "Solid", right: "Regular fixed pattern; particles vibrate on the spot" },
          { left: "Liquid", right: "Irregular but touching; particles slide past one another" },
          { left: "Gas", right: "Widely scattered; particles move rapidly in all directions" },
        ],
        ask: "Start from the most ordered state. Which description has a regular pattern with particles fixed in place?",
        hints: [
          "A regular pattern with vibration on the spot is the solid; free rapid movement is the gas.",
          "The liquid is the in-between case: particles still touch but slide, with no fixed pattern.",
        ],
        explain: "Solid particles hold a regular pattern and vibrate in place. Liquid particles keep touching but slide past one another in an irregular jumble. Gas particles are widely spaced and move rapidly and randomly.",
      },
      {
        kind: "choice",
        question: "Why can a gas be compressed into a much smaller volume, while a liquid can hardly be compressed at all?",
        options: [
          "Gas particles are lighter than liquid particles, so they push together more easily",
          "A gas contains far fewer particles than a liquid of the same size",
          "Gas particles have large empty spaces between them, but liquid particles are already close and touching",
          "Gas particles shrink when squeezed, but liquid particles cannot shrink",
        ],
        correct: 2,
        ask: "Compressing means pushing particles closer. Think about which state already has its particles touching and which has wide gaps between them.",
        hints: [
          "Squashing a material just closes the gaps between its particles.",
          "A liquid's particles are already in contact, so there is almost no gap left to close.",
        ],
        explain: "A gas compresses because its particles are widely separated, so there is plenty of empty space to close up. A liquid barely compresses because its particles are already close and touching, leaving almost no space. Particles themselves do not shrink.",
      },
      {
        kind: "cloze",
        prompt: "Complete the description of particle arrangement and motion.",
        segments: [
          "In a solid, particles sit in a ",
          " pattern and only ",
          " about fixed positions. In a gas, particles are ",
          " apart and move ",
          " in all directions.",
        ],
        bank: ["regular", "vibrate", "far", "randomly", "irregular", "slide", "close"],
        answer: ["regular", "vibrate", "far", "randomly"],
        ask: "Picture the neat, tightly packed solid first, then the widely spread, fast gas. Which word fits the pattern of a solid?",
        hints: [
          "A solid's pattern is orderly, and its particles move only by shaking on the spot.",
          "A gas has big gaps, and its particles move with no set direction.",
        ],
        explain: "Solid particles sit in a regular pattern and vibrate about fixed positions. Gas particles are far apart and move randomly in all directions.",
      },
      {
        kind: "insight",
        body: "One rule ties it together: the closer and more *ordered* the particles, the more *fixed* the shape and volume, and the harder it is to *compress*. Loosen the arrangement and free the motion, and the material flows and squashes.",
        say: "Here is the single idea to carry away. The tighter and more ordered the particles, the more the material holds a fixed shape and volume, and the less you can compress it. As you loosen that arrangement and let the particles move more freely, going solid to liquid to gas, the material flows more easily and becomes easier to squash.",
      },
    ],
  },
];
