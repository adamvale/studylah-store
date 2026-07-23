import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, section 2. Grounded in KB Chapter 09 (Thermal Processes) section 9.2.
// Conceptual section: no formula fields, no working blocks. Figure colours follow the T8 thermal key:
// hot end/region = red, cool end/region and vibrating particles = blue, heat source (burner) = amber,
// free electrons = green, rod/structures = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t8.2",
    code: "T8.2",
    title: "Conduction",
    blurb: "How thermal energy travels through solids, particle by particle",
    steps: [
      {
        kind: "concept",
        heading: "What conduction is",
        figure: "fig-09-02-conduction-rod",
        body: "*Conduction* is the transfer of thermal energy through a material by passing on *vibrational motion* from *particle to particle*, without the material itself moving. It is the main way energy travels through *solids*.",
        say: "In the picture a grey metal rod is heated at its left end by an amber Bunsen burner. That heated end glows red because it is hottest, and the far end stays blue because it is still cool. Energy spreads along the rod from the red hot end toward the blue cool end. Notice the rod itself does not go anywhere. The particles simply hand energy to their neighbours, and that passing along is what we call conduction.",
      },
      {
        kind: "concept",
        heading: "Passing energy by vibration",
        figure: "fig-09-03-conduction-particles",
        body: "Heated particles *vibrate* harder and *collide* with their *neighbours*, handing energy along the material one particle at a time. This happens in *all solids*.",
        say: "Here the particles of the rod are drawn as blue circles held in place. Where the amber heat source warms them, on that side they vibrate more strongly, and red arrows show energy being passed to the cooler particles next door. Each particle stays roughly in its own spot but shakes harder, nudges its neighbour, and so energy travels along without any particle making the whole journey. Every solid can pass energy this way.",
      },
      {
        kind: "concept",
        heading: "Free electrons in metals",
        body: "Metals also contain *free electrons*. At the hot end these electrons gain energy, *travel fast* to the cool end and collide there, delivering energy quickly. Metals conduct by *both* methods, so they are the *best conductors*.",
        say: "Metals have an extra trick. Look back at the green free electrons in the particle picture. They are not tied to one spot, so when they gain energy at the hot end they zip all the way to the cool end and drop that energy off. Because a metal moves energy by vibrating particles and by these fast free electrons at the same time, it carries heat far quicker than a material that only has vibration. That is why metals are the best conductors.",
      },
      {
        kind: "concept",
        heading: "Conductors and insulators",
        body: "A good *conductor*, such as copper or steel, transfers energy quickly. A thermal *insulator*, such as wood, plastic, glass, wool or *trapped air*, transfers it slowly. Conduction is poor in *liquids and gases* because their particles are far apart, so energy-passing collisions are rare.",
        say: "Materials split into 2 camps. Good conductors like copper and steel let energy through fast, which is why a cooking-pot base is metal. Insulators like wood, plastic, glass, wool and trapped air are slow, which is why a pan handle is plastic and warm clothing traps air. Liquids and gases conduct badly because their particles sit too far apart to collide often, so they hardly pass energy along at all.",
      },
      {
        kind: "choice",
        question: "Which statement best describes conduction?",
        options: [
          "Thermal energy is carried by a fluid that flows and circulates",
          "Thermal energy passes from particle to particle through a material, without the material itself moving",
          "Thermal energy travels as waves that need no material at all",
          "Thermal energy always flows from a colder object to a hotter one",
        ],
        correct: 1,
        ask: "Conduction is the process that works through solids by particles nudging their neighbours. Which option describes energy moving along without the material travelling?",
        hints: [
          "A flowing, circulating fluid describes convection, not conduction.",
          "In conduction the material stays put and energy is handed from one particle to the next.",
        ],
        explain: "Conduction is energy passing from particle to particle through a material while the material stays put. A circulating fluid is convection, waves with no medium are radiation, and energy always flows from hot to cold, not cold to hot.",
      },
      {
        kind: "choice",
        question: "Why are metals the best thermal conductors?",
        options: [
          "Their particles are so far apart that energy passes easily between them",
          "They pass energy only by free electrons and never by vibration",
          "They are always at a higher temperature than other materials",
          "They pass energy by both vibrating particles and fast-moving free electrons",
        ],
        correct: 3,
        ask: "A metal has 2 ways of moving energy at once. Think about what a metal has that wood does not.",
        hints: [
          "All solids pass energy by vibrating particles, so that alone cannot make metals special.",
          "Metals add free electrons that race energy to the cool end, on top of the usual vibration.",
        ],
        explain: "Metals conduct by 2 methods together: vibrating particles like every solid, plus free electrons that carry energy quickly to the cool end. Using both at once is why metals beat other materials. Far-apart particles actually conduct worse, and being a good conductor has nothing to do with being warmer.",
      },
      {
        kind: "classify",
        prompt: "Sort each material by how well it conducts thermal energy.",
        bins: ["Good conductor", "Insulator"],
        items: [
          { text: "copper", bin: 0 },
          { text: "steel", bin: 0 },
          { text: "wood", bin: 1 },
          { text: "plastic", bin: 1 },
          { text: "glass", bin: 1 },
          { text: "wool", bin: 1 },
          { text: "trapped air", bin: 1 },
        ],
        ask: "Metals move energy quickly, so they are good conductors. Everything else here is slow. Tap each material and drop it in its bin.",
        hints: [
          "Copper and steel are metals, so they conduct energy fast.",
          "Wood, plastic, glass, wool and trapped air all pass energy slowly, so they are insulators.",
        ],
        explain: "Copper and steel are metals and are good conductors. Wood, plastic, glass, wool and trapped air are all insulators, passing energy slowly, which is why they are used to keep heat in or out.",
      },
      {
        kind: "spoterror",
        prompt: "A student explains how a metal rod conducts energy. Tap the line with the mistake.",
        lines: [
          "The heated end gains energy, so its particles vibrate more strongly",
          "These particles collide with their neighbours and pass energy along",
          "Free electrons also carry energy quickly to the cooler end",
          "The particles themselves travel along the rod, carrying the energy with them",
        ],
        errorLine: 3,
        ask: "Check what actually moves in conduction. Do the particles of the solid make the whole journey, or do they stay put and pass energy on?",
        hints: [
          "The first 3 lines correctly describe vibration and free electrons.",
          "In conduction the particles stay in place; they do not travel along the rod. Particles moving through the material is convection.",
        ],
        explain: "The mistake is the last line. In conduction the particles stay in their places and only pass energy to their neighbours; they do not travel along the rod. Particles moving through a material carrying energy would be convection, which happens in fluids, not in a solid rod.",
      },
      {
        kind: "order",
        prompt: "Put the steps of conduction along a heated rod in the correct order, from the heat source to the cool end.",
        items: [
          "The heated end of the rod gains thermal energy",
          "Particles at that end vibrate more strongly",
          "They collide with neighbouring particles",
          "The neighbours gain energy and vibrate harder too",
          "Energy is passed along, particle to particle, toward the cooler end",
        ],
        ask: "Start with the end nearest the flame gaining energy, and finish with energy reaching the far, cooler end.",
        hints: [
          "The very first thing is the heated end receiving energy from the source.",
          "Vibration comes before collision, and only after neighbours are set vibrating does energy travel on toward the cool end.",
        ],
        explain: "The heated end gains energy first, so its particles vibrate harder. They collide with their neighbours, which then vibrate harder too, and step by step energy is handed along the rod toward the cooler end.",
      },
      {
        kind: "choice",
        question: "A metal spoon and a wooden spoon have both sat in a 20 degree room for hours, so both are at 20 degrees. Why does the metal spoon feel colder to your hand?",
        options: [
          "The metal spoon is actually at a lower temperature than the wooden one",
          "The wooden spoon is giving your hand extra energy",
          "The metal conducts energy away from your hand faster than the wood does",
          "Metal is unable to store any thermal energy at all",
        ],
        correct: 2,
        ask: "Both spoons are at the same 20 degrees, so temperature is not the difference. Think about which one draws energy out of your warm hand more quickly.",
        hints: [
          "The spoons are at equal temperature, so one is not really colder than the other.",
          "Your hand is warmer than 20 degrees, so energy flows from your hand into the spoon. Metal, a good conductor, pulls it away fast, so that spoon feels colder.",
        ],
        explain: "Both spoons are at 20 degrees, so neither is truly colder. Your hand is warmer, so energy flows from your hand into the spoon. Metal is a good conductor and carries that energy away from your hand quickly, so it feels colder, while wood, an insulator, barely does.",
      },
      {
        kind: "insight",
        body: "Conduction hands energy from *particle to particle* while the material stays *still*. Metals add *free electrons*, so they conduct best; trapped *air* and other insulators conduct worst.",
        say: "Here is the idea to keep. Conduction moves energy by particles passing it to their neighbours without the material going anywhere. Metals do this and send free electrons racing across as well, so they are the top conductors. Materials full of trapped air, like wool and foam, are the poorest, which is exactly why we wrap up warm.",
      },
    ],
  },
];
