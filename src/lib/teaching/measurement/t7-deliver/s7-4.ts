import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, section 4. Grounded in KB Chapter 08 (8.6), Brownian motion.
// Conceptual section: no formula fields, no working blocks. Figure colours follow the Ch08 key:
// particles (atoms/molecules and the large smoke speck) = blue; glass cell, lamp, microscope
// bodies and guide lines = grey or plain outline; the microscope field of view is a bright disc.

export const BOXES: Subconcept[] = [
  {
    id: "t7.4",
    code: "T7.4",
    title: "Brownian motion",
    blurb: "The jerky dance of tiny suspended specks, and what it reveals about particles",
    steps: [
      {
        kind: "concept",
        heading: "A jerky, random dance",
        figure: "fig-08-03-brownian-smoke",
        body: "*Brownian motion* is the random, jerky movement of small particles *suspended* in a fluid, either a liquid or a gas. We see it by watching visible specks, such as smoke in air, through a microscope.",
        say: "In the picture you are looking down a microscope at its bright circular field of view. A single blue smoke particle traces a short jerky zigzag path across it, changing direction sharply at every corner. That restless, random darting of a small speck floating in a fluid is what we call Brownian motion.",
      },
      {
        kind: "concept",
        heading: "How we watch it",
        figure: "fig-08-05-brownian-setup",
        body: "To observe it we shine bright *light* into a small *smoke cell* and view the lit specks from the side through a *microscope*. The specks show up as tiny bright points of light that never sit still.",
        say: "This figure shows the apparatus in a row. On the left is a grey lamp. In the middle sits a grey glass smoke cell holding blue smoke particles. On the right a microscope points at the cell. The lamp lights up the smoke from the side so each blue speck glows as a bright point, and through the microscope you watch those points jiggle about.",
      },
      {
        kind: "concept",
        heading: "What is really doing the pushing",
        figure: "fig-08-04-brownian-collisions",
        body: "The jerky path is caused by *collisions* with the much smaller, faster *fluid particles* you cannot see. These invisible particles move rapidly and randomly, striking the big speck from every side at once.",
        say: "Here the view is enlarged. One large blue smoke particle sits in the middle, and it is surrounded by many tiny blue air molecules, so small they are really invisible, hammering into it from all sides. Because those hits come at random from every direction, they never quite balance at any one instant.",
      },
      {
        kind: "concept",
        heading: "Why the path zigzags",
        body: "At any moment the collisions on one side outnumber those on the other, so there is an *unbalanced* net push. That push keeps changing direction, so the speck is knocked this way then that, tracing the *zigzag*.",
        say: "Think about all those tiny hits arriving at once. Sometimes a few more land on the left, sometimes a few more on the right. The pushes do not cancel out, so there is always a small net force, and that net force keeps swinging to a new direction. Each change of direction jerks the speck onto a new leg of its zigzag.",
      },
      {
        kind: "concept",
        heading: "Evidence for the particle model",
        body: "Brownian motion is strong *evidence* for the kinetic particle model. Only unseen *particles* in *constant random motion* could batter the speck about, so matter must be made of moving particles.",
        say: "This is why the effect matters so much. The big speck acts like a visible flag, waving because of the battering it takes from particles far too small to see. Watching it tells us 2 things at once, that matter is made of separate particles, and that those particles are in constant random motion.",
      },
      {
        kind: "choice",
        question: "Smoke specks are watched darting about in air under a microscope. What DIRECTLY causes this Brownian motion?",
        figure: "fig-08-04-brownian-collisions",
        options: [
          "The bright light pushing the specks along",
          "The specks bouncing off the walls of the cell",
          "Collisions with tiny fast-moving air particles",
          "The smoke specks colliding with one another",
        ],
        correct: 2,
        ask: "The specks are large and visible, but something too small to see is knocking them. Which option names those tiny fluid particles?",
        hints: [
          "The cause is the rapid random motion of the air particles, not the light or the container.",
          "The invisible air particles strike the big speck from all sides, so the answer is the collisions with the tiny air particles.",
        ],
        explain: "The direct cause is collisions with the tiny, fast-moving air particles. They are invisible but strike the big speck from every side, giving an unbalanced push that keeps changing direction. It is not the specks hitting each other, not the light, and not the walls.",
      },
      {
        kind: "order",
        prompt: "Put the reasoning for Brownian motion in the correct order, from cause to what we observe.",
        items: [
          "Invisible fluid particles move rapidly and randomly",
          "They strike the large speck from all sides",
          "At each instant the collisions do not balance",
          "An unbalanced net push acts on the speck",
          "The net push keeps changing direction",
          "The speck follows a jerky zigzag path",
        ],
        ask: "Start with the tiny particles you cannot see and finish with the path you actually watch through the microscope.",
        hints: [
          "Begin with the rapid random motion of the fluid particles, and end with the zigzag you observe.",
          "The middle steps go collisions from all sides, then an unbalanced push, then a push that keeps changing direction.",
        ],
        explain: "The chain runs from cause to observation. The fluid particles move randomly, strike the speck from all sides, the hits do not balance, so there is a net push, that push keeps changing direction, and the speck traces a jerky zigzag.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement about Brownian motion as true or false.",
        bins: ["True", "False"],
        items: [
          { text: "The specks we see are much larger than the fluid particles hitting them", bin: 0 },
          { text: "The motion is random and keeps changing direction", bin: 0 },
          { text: "It is evidence that particles are in constant motion", bin: 0 },
          { text: "The specks move because the light pushes them", bin: 1 },
          { text: "The fluid particles are large enough to see through the microscope", bin: 1 },
          { text: "The specks follow smooth, straight paths", bin: 1 },
        ],
        ask: "Recall that the big visible speck is knocked by tiny invisible particles, and its path is jerky and random. Tap each statement into True or False.",
        hints: [
          "The visible speck is far bigger than the unseen fluid particles, and the light only lets us see the specks, it does not push them.",
          "A random, jerky, ever-changing path that gives evidence of moving particles is true; smooth straight paths and visible fluid particles are false.",
        ],
        explain: "True: the visible specks dwarf the fluid particles, the motion is random and ever-changing, and it shows particles are in constant motion. False: the light only illuminates the specks, the fluid particles are far too small to see, and the path is jerky, not smooth and straight.",
      },
      {
        kind: "choice",
        question: "The smoke cell is warmed so the air inside is hotter. How does the movement of the smoke specks change?",
        options: [
          "They all drift steadily in one direction",
          "They move faster and more erratically",
          "They move slower and more smoothly",
          "They stop moving altogether",
        ],
        correct: 1,
        ask: "Heating makes the air particles move faster. Think about how harder, more frequent collisions would change the jerky dance of the specks.",
        hints: [
          "Faster fluid particles strike the speck harder and more often.",
          "More forceful, more frequent hits make the specks dart faster and more erratically.",
        ],
        explain: "They move faster and more erratically. Heating speeds up the air particles, so they strike the specks harder and more often, and the net push changes more violently, making the jerky dance more vigorous.",
      },
      {
        kind: "insight",
        body: "The large *speck* is just a visible flag for the *battering* it takes from unseen particles, so Brownian motion lets us see the effects of *particles* far too small to observe directly.",
        say: "Here is the idea to keep. You can never see a single air particle, yet by watching a smoke speck jiggle you are watching the direct effects of those particles. The big blue speck is a flag waving in a storm of tiny invisible hits, and that storm is the constant random motion of matter itself.",
      },
    ],
  },
];
