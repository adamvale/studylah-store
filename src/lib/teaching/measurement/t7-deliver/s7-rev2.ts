import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, Revision 2. Checkpoint over KB Chapter 08,
// sections t7.4 to t7.5: Brownian motion, temperature as average kinetic energy,
// and gas pressure from particle collisions. Question-only. Conceptual: no working,
// no formula fields.

export const BOXES: Subconcept[] = [
  {
    id: "t7.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: Brownian motion, temperature and gas pressure",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Smoke specks watched under a microscope dart along a jerky, zigzag path. What directly causes this Brownian motion?",
        options: [
          "Light from the lamp pushing the specks along",
          "Collisions with the tiny, fast-moving particles of the air",
          "The specks bumping into the walls of the smoke cell",
          "The specks attracting one another across the gap",
        ],
        correct: 1,
        ask: "Ask what is small enough and fast enough to knock a visible speck about from every side. Which option is that?",
        hints: [
          "The lamp only lights the specks up so you can see them; it does not shove them around.",
          "The invisible air particles are in rapid random motion and strike the speck unevenly, so the net push keeps changing.",
        ],
        explain: "The motion is caused by collisions with the tiny, fast-moving air particles. They hit the visible speck from all sides, and because the collisions do not cancel at any instant, the changing net push traces the zigzag.",
      },
      {
        kind: "choice",
        question: "In the kinetic particle model, the temperature of a substance is a measure of what?",
        options: [
          "The total number of particles present",
          "The size of each particle",
          "The strength of the attractive forces between particles",
          "The average kinetic energy of the particles",
        ],
        correct: 3,
        ask: "Think about what rises when you heat a substance and its particles speed up. Which option describes that?",
        hints: [
          "Heating a substance does not change how many particles it has or how big they are.",
          "Faster particles carry more kinetic energy, and temperature tracks the average of that energy over the whole population.",
        ],
        explain: "Temperature is a measure of the average kinetic energy of the particles. Some move faster and some slower, but the average rises when the substance is heated and the particles speed up.",
      },
      {
        kind: "choice",
        question: "A fixed mass of gas is squeezed into a smaller volume while its temperature is held constant. What happens to its pressure?",
        options: [
          "It increases, because the particles strike the walls more often",
          "It decreases, because the particles slow down",
          "It stays the same, because the number of particles is unchanged",
          "It falls to zero once the gas is squeezed",
        ],
        correct: 0,
        ask: "The same particles now share less space. Ask how often each patch of wall gets hit. Which option follows?",
        hints: [
          "Temperature is fixed, so the particles keep the same average speed; only the spacing changes.",
          "Packing the same particles into less space means more of them per unit volume, so the walls are struck more often.",
        ],
        explain: "The pressure increases. Squeezing the gas crowds the same particles into less space, so they hit each unit area of wall more often, and more frequent collisions mean a greater pressure.",
      },
      {
        kind: "choice",
        question: "The diagram shows gas particles bouncing inside a sealed rigid container. The container is heated but its volume cannot change. What happens to the gas pressure?",
        figure: "fig-08-06-gas-pressure-wall",
        options: [
          "It decreases, because the particles move more slowly",
          "It stays the same, because the volume is fixed",
          "It increases, because the particles hit the walls more often and harder",
          "It becomes zero once the container is hot",
        ],
        correct: 2,
        ask: "Heating raises the average kinetic energy, so the particles move faster. Ask how that changes the collisions with the walls.",
        hints: [
          "A fixed volume does not stop the particles speeding up when energy is added.",
          "Faster particles reach each wall more often and rebound with a bigger force each time.",
        ],
        explain: "The pressure increases. Heating speeds the particles up, so they strike the walls both more often and harder. In the figure the blue particle drives into the wall along the green arrow and rebounds along the pink arrow, and hotter particles do this more forcefully.",
      },
      {
        kind: "choice",
        question: "The fluid holding some suspended specks is gently warmed. How does the Brownian motion of the specks change?",
        options: [
          "The specks stop moving",
          "The specks move more slowly and smoothly",
          "The specks line up in a straight row",
          "The specks move faster and more erratically",
        ],
        correct: 3,
        ask: "Warming the fluid raises the average kinetic energy of its particles. Ask what harder, more frequent hits do to the speck.",
        hints: [
          "The specks move because fluid particles batter them; warming those particles makes the battering stronger.",
          "Faster fluid particles deliver bigger, more frequent kicks, so the speck is jostled more violently.",
        ],
        explain: "The specks move faster and more erratically. Warming the fluid gives its particles more kinetic energy, so they strike the specks harder and more often, making the zigzag quicker and sharper.",
      },
      {
        kind: "order",
        prompt: "Put these steps in order to explain how a gas produces pressure on a wall.",
        items: [
          "Gas particles move rapidly and randomly inside the container",
          "A particle collides with a wall and rebounds",
          "By Newton's 3rd law the wall pushes back equally on the particle",
          "Countless collisions each second add up to a steady force on the wall",
          "The force on each unit area of the wall is the pressure",
        ],
        ask: "Start with how the particles move, then follow a single collision, then build up to what all the collisions together produce.",
        hints: [
          "Nothing can strike a wall until the particles are already moving about.",
          "One collision gives a tiny force; the pressure is what you get when huge numbers of them act on each unit area.",
        ],
        explain: "The particles move randomly, a particle hits a wall and rebounds, the wall pushes back by Newton's 3rd law, the many collisions each second add to a steady force, and that force spread over each unit area of wall is the pressure.",
      },
      {
        kind: "classify",
        prompt: "Sort each change to a fixed mass of gas by what it does to the pressure.",
        bins: ["Pressure increases", "Pressure decreases"],
        items: [
          { text: "The gas is squeezed into a smaller volume at constant temperature", bin: 0 },
          { text: "The gas is heated while its volume is kept fixed", bin: 0 },
          { text: "A piston is pushed inward at constant temperature", bin: 0 },
          { text: "The gas expands into a larger volume at constant temperature", bin: 1 },
          { text: "The gas is cooled while its volume is kept fixed", bin: 1 },
          { text: "The container is made bigger at constant temperature", bin: 1 },
        ],
        ask: "For each change ask whether the walls end up being struck more often or harder, or less often or more gently. Drop each into its bin.",
        hints: [
          "Less space or faster particles means more forceful, more frequent collisions, so higher pressure.",
          "More space or slower particles means fewer or gentler collisions, so lower pressure.",
        ],
        explain: "Squeezing the gas, heating it at fixed volume, and pushing a piston in all raise the pressure by making collisions more frequent or harder. Expanding the gas, cooling it at fixed volume, and enlarging the container all lower the pressure.",
      },
      {
        kind: "cloze",
        prompt: "Complete the definition of Brownian motion.",
        segments: [
          "Brownian motion is the random, jerky movement of small particles ",
          " in a fluid, caused by ",
          " with the much smaller, fast-moving ",
          " of the fluid.",
        ],
        bank: ["suspended", "collisions", "particles", "dissolved", "light", "walls"],
        answer: ["suspended", "collisions", "particles"],
        ask: "Recall where the visible speck sits in the fluid, what keeps hitting it, and what those unseen hitters are.",
        hints: [
          "The speck floats within the fluid rather than being broken up into it, so it is suspended.",
          "It is knocked about by collisions with the tiny particles of the surrounding fluid.",
        ],
        explain: "Brownian motion is the random, jerky movement of small particles suspended in a fluid, caused by collisions with the much smaller, fast-moving particles of the fluid.",
      },
      {
        kind: "match",
        prompt: "Match each idea to its correct description.",
        pairs: [
          { left: "Temperature", right: "A measure of the average kinetic energy of the particles" },
          { left: "Heating a gas at fixed volume", right: "Pressure increases" },
          { left: "Enlarging the volume at fixed temperature", right: "Pressure decreases" },
          { left: "Brownian motion", right: "Evidence that particles are in constant random motion" },
        ],
        ask: "Take each term on the left and ask what it measures or what result it leads to. Then find its partner on the right.",
        hints: [
          "Temperature tracks how much kinetic energy the particles have on average.",
          "Faster or more crowded particles raise the pressure; giving them more room lowers it.",
        ],
        explain: "Temperature measures the average kinetic energy of the particles. Heating a gas at fixed volume raises the pressure, while enlarging the volume lowers it. Brownian motion is evidence that particles are in constant random motion.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this explanation of gas pressure is wrong. Tap the mistake.",
        lines: [
          "Gas particles move rapidly and randomly inside the container.",
          "Each particle that reaches a wall rebounds and exerts a small force on it.",
          "When the gas is heated at fixed volume, the particles grow larger and fill the space.",
          "The many collisions each second add up to the steady pressure on the walls.",
        ],
        errorLine: 2,
        ask: "Read each line and ask whether it matches the model. Which one describes the particles doing something they never do?",
        hints: [
          "In the kinetic model, particles keep the same size no matter how hot the gas gets.",
          "Heating raises the particles' speed, not their size; faster particles are what raise the pressure.",
        ],
        explain: "The wrong line is the 3rd one. Heating a gas does not make the particles larger. It makes them move faster, so they strike the walls more often and harder, and that is what raises the pressure.",
      },
      {
        kind: "open",
        prompt: "The figure shows dust specks suspended in still air, seen magnified under a microscope. Explain why the specks are seen to move, and what this tells us about matter.",
        figure: "fig-08-08-dust-suspended",
        modelAnswer: "The air is made of tiny, invisible particles in rapid random motion. These particles constantly collide with each dust speck from every side. At any instant the collisions do not balance, so there is a changing net force that pushes the speck first one way then another, giving the random jerky path. This shows that matter is made of very small moving particles, and that they are in continuous random motion, since only unseen moving particles could knock a visible speck about like this.",
        marks: [
          "Air is made of tiny particles in rapid random motion.",
          "The particles collide with the speck from all sides; the collisions are unbalanced at any instant, giving a changing net push.",
          "This is evidence that matter is made of particles that are in constant random motion.",
        ],
        ask: "Think about what is in the air around each speck, how those unseen particles are moving, and why their effect on the speck keeps changing direction.",
      },
      {
        kind: "open",
        prompt: "A sealed rigid metal cylinder of gas is left in the sun and warms up. Its volume cannot change. Explain, in terms of particles, why the gas pressure increases.",
        modelAnswer: "The gas particles move rapidly and randomly, striking the walls and rebounding, and by Newton's 3rd law the walls are pushed back. As the gas warms, the average kinetic energy of the particles increases, so they move faster. Because the volume is fixed, faster particles reach the walls more often and hit them harder each time. More frequent and more forceful collisions mean a greater total force on each unit area of wall, so the pressure increases.",
        marks: [
          "Gas pressure comes from particles colliding with and rebounding off the walls.",
          "Warming raises the average kinetic energy, so the particles move faster.",
          "At fixed volume they hit the walls more often and harder, so the pressure increases.",
        ],
        ask: "Recall what causes gas pressure in the first place, then think about what warming does to the speed of the particles while the volume stays the same.",
      },
    ],
  },
];
