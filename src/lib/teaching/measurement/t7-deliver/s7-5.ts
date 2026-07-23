import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, section 5. Grounded in KB Chapter 08 (8.7, 8.8).
// CONCEPTUAL section: no formula fields, no working blocks, no numeric calculation.
// Figure colour key (Ch08): particles = blue; force a particle exerts ON the wall = green;
// rebound / reaction-force-on-particle = pink; container walls = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t7.5",
    code: "T7.5",
    title: "Temperature and the pressure of a gas",
    blurb: "What temperature really measures, and where a gas gets its pressure",
    steps: [
      {
        kind: "concept",
        heading: "Temperature measures average kinetic energy",
        body: "*Temperature* is a measure of the *average kinetic energy* of the particles in a substance. The particles never all move at one speed, so we average over the whole *population*: some are faster, some slower.",
        say: "Temperature is not the same as heat. It is a measure of the average kinetic energy of the particles. Picture a huge crowd of particles, some darting quickly and some drifting slowly. Temperature tells you the average of all that motion energy, not the speed of any single particle.",
      },
      {
        kind: "concept",
        heading: "Heating speeds the particles up",
        body: "*Heating* transfers energy to the *internal store*, so the particles gain kinetic energy and *move* or vibrate faster, and the temperature *rises*. Cooling does the reverse and slows them down.",
        say: "When you heat something, energy flows into its internal store and the particles speed up. Faster particles mean a higher average kinetic energy, so the temperature rises. This is why a liquid-in-glass thermometer works, the warmer particles jostle a little further apart and the liquid climbs up the tube. Cooling slows the particles and the temperature falls.",
      },
      {
        kind: "concept",
        heading: "Where gas pressure comes from",
        figure: "fig-08-06-gas-pressure-wall",
        body: "Gas particles move rapidly and randomly. Each *collision* with a wall exerts a small *force* as the particle rebounds, and by *Newton's third law* the wall pushes back equally on the particle.",
        say: "In the picture a grey container holds several blue gas particles bouncing about. Follow one particle: it flies at the right wall along a green arrow, which is the force it pushes on the wall with. It then rebounds back along a pink arrow, the reaction force the wall pushes on it. The 2 forces are equal and opposite, which is Newton's third law in action.",
      },
      {
        kind: "concept",
        heading: "Many collisions make a steady pressure",
        body: "One strike is tiny, but there are *huge numbers* of collisions every second. Together they add up to a steady *force* on the wall, and the force on each unit of *area* is the *pressure*.",
        say: "A single particle striking the wall is far too weak to feel. But billions of particles hit every second, and their many small pushes add to a steady overall force. Spread that force over each unit of area of the wall and you have the gas pressure.",
      },
      {
        kind: "concept",
        heading: "Volume and temperature change the pressure",
        body: "With mass fixed, a *smaller volume* packs the particles closer, so the walls are struck more often and the *pressure increases*. Heating at fixed volume makes particles *faster*, hitting harder and more often, so the pressure also rises.",
        say: "2 things change gas pressure here. First, squeeze the same particles into a smaller volume and they crowd together, striking the walls more often each second, so the pressure goes up. Second, heat the gas while the volume is fixed and the particles move faster, so they hit the walls harder and more frequently, and again the pressure rises. Cooling or expanding does the opposite.",
      },
      {
        kind: "choice",
        question: "The temperature of a substance is best described as a measure of what?",
        options: [
          "The size of each particle",
          "The strength of the forces between particles",
          "The average kinetic energy of its particles",
          "The total number of particles present",
        ],
        correct: 2,
        ask: "Temperature is about how much motion energy the particles have on average, not how many there are or how big they are.",
        hints: [
          "Think about what changes when particles speed up.",
          "Faster particles carry more kinetic energy, and temperature averages that over all of them.",
        ],
        explain: "Temperature is a measure of the average kinetic energy of the particles. The number and size of particles do not set the temperature, and the attractive forces are a separate idea.",
      },
      {
        kind: "spoterror",
        prompt: "A student explains why squeezing a gas into a smaller space raises its pressure. One line is wrong. Tap the mistake.",
        lines: [
          "The mass of gas and its temperature stay the same.",
          "The particles are now packed into a smaller volume.",
          "The particles grow larger to fill the smaller space.",
          "So the walls are struck more often each second.",
          "The extra collisions mean the pressure increases.",
        ],
        errorLine: 2,
        ask: "Squeezing a gas changes how far apart the particles are, not the particles themselves. Look for the line that changes a particle's own size.",
        hints: [
          "Particles do not swell or shrink when a gas is compressed.",
          "The 3rd line claims the particles grow larger, which is false.",
        ],
        explain: "Particles do not change size when a gas is compressed. The volume they share gets smaller, so they are closer together and strike the walls more often, and that is what raises the pressure.",
      },
      {
        kind: "classify",
        prompt: "A fixed mass of gas is changed in different ways. Sort each change by its effect on the gas pressure.",
        bins: ["Pressure increases", "Pressure decreases"],
        items: [
          { text: "Squeeze the gas into a smaller volume", bin: 0 },
          { text: "Heat the gas while keeping the volume fixed", bin: 0 },
          { text: "Let the gas expand into a larger volume", bin: 1 },
          { text: "Cool the gas while keeping the volume fixed", bin: 1 },
        ],
        ask: "More frequent or harder collisions with the walls raise the pressure. Ask whether each change makes the particles crowd closer or move faster.",
        hints: [
          "A smaller volume or a higher temperature means more collisions on the walls.",
          "Expanding spreads the particles out and cooling slows them, so both lower the pressure.",
        ],
        explain: "Anything that makes particles hit the walls more often or harder raises the pressure, so squeezing or heating increases it. Expanding or cooling means fewer or gentler collisions, so the pressure decreases.",
      },
      {
        kind: "order",
        prompt: "Put these steps in order to explain how gas particles produce pressure on a container wall.",
        items: [
          "Gas particles move rapidly in all directions.",
          "A particle collides with the wall and rebounds.",
          "Each rebound exerts a small force on the wall.",
          "Huge numbers of collisions add to a steady force.",
          "That force on each unit of area is the pressure.",
        ],
        ask: "Start with how the particles are moving, then follow one collision, and build up to the force and finally the pressure.",
        hints: [
          "The chain runs from motion, to a single collision, to the force, to the pressure.",
          "Pressure is the last idea, because it is force spread over area.",
        ],
        explain: "Fast-moving particles collide with the wall and rebound, each giving a small force. Billions of these collisions add to a steady force, and that force on each unit of area is the pressure.",
      },
      {
        kind: "cloze",
        prompt: "Complete the account of how heating a fixed volume of gas changes its pressure.",
        segments: [
          "Heating gives the particles more ",
          " energy, so they move ",
          ". They then strike the walls more ",
          ", and the pressure ",
          ".",
        ],
        bank: ["kinetic", "faster", "often", "increases", "slower", "decreases"],
        answer: ["kinetic", "faster", "often", "increases"],
        ask: "Heating always speeds particles up. Work through what faster particles do to the collisions and then to the pressure.",
        hints: [
          "The energy of motion is called kinetic energy.",
          "Faster particles hit the walls more often, so the pressure goes up.",
        ],
        explain: "Heating raises the particles' kinetic energy so they move faster. Faster particles strike the walls more often and harder, so the pressure increases.",
      },
      {
        kind: "open",
        prompt: "A sealed rigid metal cylinder of gas is left in strong sunshine and warms up. Its volume cannot change. Explain, in terms of particles, why the gas pressure increases.",
        modelAnswer: "The sunshine heats the gas, so its particles gain kinetic energy and move faster. Because the cylinder is rigid the volume stays fixed. The faster particles collide with the walls more often and hit them harder, so the total force on each unit of area of the wall rises, which means the gas pressure increases.",
        marks: [
          "Heating gives the particles more kinetic energy so they move faster.",
          "The rigid cylinder keeps the volume fixed.",
          "Faster particles hit the walls more often and harder.",
          "Greater force on each unit of area means higher pressure.",
        ],
        ask: "Link the warming to the speed of the particles, remember the volume is fixed, and then think about how the collisions with the walls change.",
      },
      {
        kind: "insight",
        body: "*Temperature* tracks the *average kinetic energy* of the particles, and gas *pressure* is just the pile-up of countless particle *collisions* on the walls, so heating or squeezing a gas raises its pressure.",
        say: "Here is the whole section in one idea. Temperature measures the average kinetic energy of the particles, and pressure is the combined effect of countless collisions battering the walls. Speed the particles up by heating, or crowd them by squeezing, and both send the pressure up.",
      },
    ],
  },
];
