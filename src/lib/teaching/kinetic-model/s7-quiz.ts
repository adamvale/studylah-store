import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, topical quiz. Whole-topic check across KB Chapter 08:
// states of matter and the kinetic particle model, arrangement and properties of the 3 states,
// explaining everyday properties, Brownian motion, and temperature and gas pressure.
// Conceptual chapter: no working blocks and no formula fields anywhere.

export const BOXES: Subconcept[] = [
  {
    id: "t7.quiz",
    code: "Quiz",
    title: "Kinetic particle model topical quiz",
    blurb: "Whole-topic check: states, arrangement, everyday properties, Brownian motion, temperature and pressure",
    kind: "quiz",
    steps: [
      // 1 choice (s7-1 model)
      {
        kind: "choice",
        question: "In the kinetic particle model, what does the word kinetic tell you about the particles?",
        options: [
          "They all carry an electric charge",
          "They are all exactly the same size",
          "They are in continuous motion and never stop",
          "They are perfectly still until heated",
        ],
        correct: 2,
        ask: "The word kinetic is linked to movement. What does the model say about how the particles behave at all times?",
        hints: [
          "Kinetic energy is the energy of a moving object.",
          "The model says every particle is always moving, even in a solid where it only vibrates.",
        ],
        explain: "Kinetic means the particles are in continuous motion and never stop. Even in a solid the particles are still vibrating about fixed positions, so they are never completely still.",
      },
      // 2 choice (s7-1 model)
      {
        kind: "choice",
        question: "According to the model, how does the attractive force between 2 neighbouring particles change as they move further apart?",
        options: [
          "It changes into a pushing force at once",
          "It gets weaker",
          "It gets stronger",
          "It stays exactly the same",
        ],
        correct: 1,
        ask: "The attractive forces are strongest when particles are close together. What happens to that force as the gap between them grows?",
        hints: [
          "The forces between particles act like a pull that is strongest when they are near.",
          "As 2 particles separate, the attractive force between them weakens.",
        ],
        explain: "The attractive force gets weaker as the particles move further apart. It is strongest when they are close together and fades as the separation grows.",
      },
      // 3 interactive: cloze (s7-1 model)
      {
        kind: "cloze",
        prompt: "Complete the sentence about the internal energy store of a substance.",
        segments: [
          "The internal energy store is the total of the ",
          " store, from the motion of the particles, and the ",
          " energy store, from the ",
          " forces between the particles.",
        ],
        bank: ["kinetic", "potential", "attractive", "chemical", "elastic"],
        answer: ["kinetic", "potential", "attractive"],
        ask: "The internal store adds together 2 things: an energy store linked to how the particles move, and one linked to the forces holding them. Which words fill the gaps?",
        hints: [
          "The energy of motion is the kinetic store; the energy tied up in the forces is the potential energy store.",
          "The forces between neighbouring particles are the attractive forces.",
        ],
        explain: "The internal energy store is the total of the kinetic store, from the motion of the particles, and the potential energy store, from the attractive forces between the particles.",
      },
      // 4 interactive: classify (s7-2 arrangement/properties)
      {
        kind: "classify",
        prompt: "Sort each description into the state of matter it best fits.",
        bins: ["Solid", "Liquid", "Gas"],
        items: [
          { text: "keeps a fixed shape and a fixed volume", bin: 0 },
          { text: "particles only vibrate about fixed positions", bin: 0 },
          { text: "keeps its volume but takes the container's shape", bin: 1 },
          { text: "particles slide past one another", bin: 1 },
          { text: "fills any container completely", bin: 2 },
          { text: "particles are far apart and move freely in all directions", bin: 2 },
        ],
        ask: "A solid keeps both shape and volume, a liquid keeps only its volume, and a gas keeps neither. Match each description to the right state.",
        hints: [
          "Fixed shape and only vibrating on the spot points to a solid.",
          "Taking the container's shape while keeping volume is a liquid; spreading to fill the container is a gas.",
        ],
        explain: "A solid keeps a fixed shape and volume with particles that only vibrate in place. A liquid keeps its volume but takes the container's shape as its particles slide past one another. A gas fills any container because its particles are far apart and move freely.",
      },
      // 5 interactive: match (s7-2 arrangement/properties)
      {
        kind: "match",
        prompt: "Match each state of matter to the way its particles are arranged and move.",
        pairs: [
          { left: "Solid", right: "regular fixed pattern, closely packed, only vibrating on the spot" },
          { left: "Liquid", right: "close together but in an irregular jumble, sliding past one another" },
          { left: "Gas", right: "far apart with no pattern, moving rapidly in all directions" },
        ],
        ask: "Think about how closely packed the particles are and how much they can move in each state, then pair them up.",
        hints: [
          "The most ordered and least mobile arrangement is the solid.",
          "The liquid is close but jumbled and sliding; the gas is widely spread and fast.",
        ],
        explain: "In a solid the particles sit in a regular fixed pattern and only vibrate. In a liquid they are close but jumbled and slide past one another. In a gas they are far apart with no pattern and move rapidly in all directions.",
      },
      // 6 choice (s7-2 arrangement/properties)
      {
        kind: "choice",
        question: "Why can a gas be compressed much more easily than a liquid?",
        options: [
          "Gas particles are much larger than liquid particles",
          "Gas particles are much heavier than liquid particles",
          "Gas particles attract each other very strongly",
          "Gas particles have large empty spaces between them, but liquid particles are already close",
        ],
        correct: 3,
        ask: "Compressing means pushing the particles closer. Which state already has its particles packed close together with little room to squeeze?",
        hints: [
          "In a liquid the particles are touching, so there is almost no space to close up.",
          "In a gas there is a lot of empty space between the particles, so they can be pushed much closer.",
        ],
        explain: "A gas compresses easily because its particles are far apart with large empty spaces between them. A liquid barely compresses because its particles are already close together and touching.",
      },
      // 7 choice (s7-3 everyday properties)
      {
        kind: "choice",
        question: "A syringe is sealed at the nozzle. It is much easier to push the plunger in when the syringe holds air than when it holds water. Why?",
        options: [
          "Air particles are far apart with empty space, but water particles are already close and touching",
          "Air particles are heavier than water particles",
          "Water is not made of particles",
          "Air particles attract each other more strongly than water particles",
        ],
        correct: 0,
        ask: "One syringe holds a gas and the other a liquid. Think about how much empty space there is between the particles in each.",
        hints: [
          "A gas has plenty of space between its particles, so they can be squeezed closer.",
          "A liquid has its particles already close and touching, so it is almost incompressible.",
        ],
        explain: "The air compresses because its particles are far apart with empty space between them. The water barely moves because its particles are already close and touching, so a liquid is almost incompressible.",
      },
      // 8 interactive: match (s7-3 everyday properties)
      {
        kind: "match",
        prompt: "Match each observation to the particle feature that best explains it.",
        pairs: [
          { left: "A solid keeps a fixed shape but a liquid does not", right: "arrangement of the particles" },
          { left: "A gas can be compressed but a liquid cannot", right: "separation between the particles" },
          { left: "Solids have higher melting points than most liquids", right: "strength of the attractive forces" },
          { left: "Diffusion is much faster in a gas than in a liquid", right: "motion of the particles" },
        ],
        ask: "Each fact traces back to one feature: arrangement, separation, attractive force, or motion. Match each observation to its cause.",
        hints: [
          "A fixed shape is about the fixed arrangement; easy compression is about the spacing.",
          "Melting points depend on how strong the attractive forces are; fast diffusion depends on how the particles move.",
        ],
        explain: "Fixed shape comes from the fixed arrangement of particles. Easy compression comes from the wide separation in a gas. Higher melting points come from stronger attractive forces. Faster diffusion comes from the rapid free motion of gas particles.",
      },
      // 9 interactive: spoterror (s7-3 everyday properties)
      {
        kind: "spoterror",
        prompt: "A student explains why a gas can be squashed into a smaller space. Tap the line that is wrong.",
        lines: [
          "A gas can be compressed easily.",
          "This is because the gas particles are far apart with empty space between them.",
          "When you push the plunger, the particles themselves get bigger to fill the gap.",
          "The particles are simply pushed closer together into the empty spaces.",
        ],
        errorLine: 2,
        ask: "When a gas is compressed, is it the particles that change size, or the spaces between them that get smaller?",
        hints: [
          "Compressing a gas closes up the empty gaps between particles.",
          "The particles do not change size; the line that says they get bigger is wrong.",
        ],
        explain: "The wrong line says the particles get bigger to fill the gap. Particles do not change size. A gas compresses because the particles are simply pushed closer together into the empty spaces between them.",
      },
      // 10 choice (s7-4 Brownian) with figure on a choice
      {
        kind: "choice",
        question: "The figure shows dust specks suspended in still air under a microscope, drifting along jerky random paths. What directly causes this motion?",
        figure: "fig-08-08-dust-suspended",
        options: [
          "The light from the microscope lamp pushing the specks",
          "The glass slide slowly vibrating",
          "The dust specks attracting one another",
          "Collisions with the tiny, fast-moving air particles",
        ],
        correct: 3,
        ask: "The specks are much bigger than the invisible air particles around them. What are those unseen air particles doing to the specks?",
        hints: [
          "The air is made of tiny particles in rapid random motion that you cannot see.",
          "These invisible particles strike the visible speck from all sides, knocking it about.",
        ],
        explain: "The motion is caused by collisions with the tiny, fast-moving air particles. They strike the much larger speck from every side, and because the pushes do not cancel, the speck darts along a jerky path.",
      },
      // 11 interactive: order (s7-4 Brownian)
      {
        kind: "order",
        prompt: "Put the steps that explain Brownian motion into the correct order.",
        items: [
          "Tiny air particles are invisible but move quickly in random directions.",
          "These fast particles collide with the much larger smoke particle from all sides.",
          "At each instant the collisions do not cancel, so there is a changing net push.",
          "The net push keeps changing size and direction.",
          "The smoke particle is seen to dart along a jerky zigzag path.",
        ],
        ask: "Start with what the invisible air particles are doing, and finish with what you actually see under the microscope. Put the steps in order.",
        hints: [
          "Begin with the fast random motion of the unseen air particles.",
          "The uneven collisions give a changing net push, which finally shows up as the visible zigzag.",
        ],
        explain: "First the tiny air particles move quickly and randomly. They collide with the larger smoke particle from all sides. The collisions do not cancel, giving a changing net push. That push keeps changing, so the smoke particle is seen to dart along a jerky zigzag path.",
      },
      // 12 interactive: classify (s7-4 Brownian) true/false
      {
        kind: "classify",
        prompt: "Sort each statement about Brownian motion as true or false.",
        bins: ["True", "False"],
        items: [
          { text: "It is caused by collisions with tiny fluid particles", bin: 0 },
          { text: "It supports the idea that matter is made of particles", bin: 0 },
          { text: "The visible speck is pushed about by particles you cannot see", bin: 0 },
          { text: "The smoke particle moves smoothly in a straight line", bin: 1 },
          { text: "It happens because the light beam heats the smoke", bin: 1 },
        ],
        ask: "Recall what really moves the speck and what path it traces. Decide which statements are true and which are false.",
        hints: [
          "The motion is random and jerky, driven by unseen particle collisions.",
          "Statements about smooth straight lines or the light beam causing it are false.",
        ],
        explain: "It is true that Brownian motion comes from collisions with tiny fluid particles, that it supports matter being made of particles, and that unseen particles push the speck. It is false that the speck moves smoothly in a straight line or that the light beam causes the motion.",
      },
      // 13 choice (s7-4 Brownian)
      {
        kind: "choice",
        question: "A smoke cell is warmed so the air inside is hotter. How does the Brownian motion of the smoke particles change?",
        options: [
          "The motion stops completely",
          "The specks move faster and more erratically",
          "The specks slow down and settle",
          "The specks move in smooth circles",
        ],
        correct: 1,
        ask: "Warming the air makes its particles move faster. What does that do to the collisions battering each smoke speck?",
        hints: [
          "Hotter air particles move faster and strike the speck harder and more often.",
          "Stronger, more frequent collisions make the specks jump about more.",
        ],
        explain: "The specks move faster and more erratically. Warming the air makes its particles move faster, so they strike each smoke speck harder and more often, and the jerky motion becomes more vigorous.",
      },
      // 14 choice (s7-5 temperature)
      {
        kind: "choice",
        question: "What does the temperature of a substance measure?",
        options: [
          "The size of the particles",
          "The mass of the substance",
          "The average kinetic energy of its particles",
          "The total number of particles present",
        ],
        correct: 2,
        ask: "Temperature is linked to how fast the particles move on average. Which quantity does that describe?",
        hints: [
          "Faster-moving particles have more kinetic energy.",
          "Temperature is a measure of the average kinetic energy of the particles.",
        ],
        explain: "Temperature is a measure of the average kinetic energy of the particles. When a substance is heated the particles move faster on average, so the temperature rises.",
      },
      // 15 interactive: graphpick (s7-5 pressure)
      {
        kind: "graphpick",
        prompt: "A fixed mass of gas is kept at constant temperature while its volume is changed. Which graph best shows how its pressure depends on its volume?",
        xLabel: "volume",
        yLabel: "pressure",
        options: [
          { points: [[1, 12], [2, 6], [3, 4], [4, 3]], caption: "Pressure falls as volume rises" },
          { points: [[1, 2], [2, 4], [3, 6], [4, 8]], caption: "Pressure rises as volume rises" },
          { points: [[1, 6], [2, 6], [3, 6], [4, 6]], caption: "Pressure stays the same" },
          { points: [[1, 2], [2, 4], [3, 8], [4, 16]], caption: "Pressure rises ever more steeply" },
        ],
        correct: 0,
        ask: "A larger volume spreads the same particles through more space, so the walls are struck less often. Does the pressure go up or down as the volume grows?",
        hints: [
          "Fewer particles per unit volume means fewer collisions with each part of the wall.",
          "As the volume rises the pressure falls, so the correct graph slopes downward.",
        ],
        explain: "The correct graph shows the pressure falling as the volume rises. A larger volume spreads the same particles through more space, so the walls are hit less often and the pressure decreases.",
      },
      // 16 choice (s7-5 pressure)
      {
        kind: "choice",
        question: "A fixed mass of gas at constant temperature is squeezed into a smaller volume. What happens to its pressure?",
        options: [
          "It increases",
          "It decreases",
          "It stays exactly the same",
          "It falls to zero",
        ],
        correct: 0,
        ask: "A smaller volume packs the same particles into less space. How often will they now strike each part of the walls?",
        hints: [
          "In a smaller space the particles hit the walls more often.",
          "More frequent collisions per unit area mean a higher pressure.",
        ],
        explain: "The pressure increases. Squeezing the same particles into a smaller volume makes them strike the walls more often, so the force per unit area, the pressure, goes up.",
      },
      // 17 interactive: order (s7-5 pressure chain)
      {
        kind: "order",
        prompt: "Put the steps that explain how a gas produces pressure on its container walls into order.",
        items: [
          "Gas particles move quickly and randomly inside the container.",
          "Each particle strikes a wall and rebounds off it.",
          "As it rebounds it exerts a small force on the wall.",
          "Huge numbers of these collisions happen every second.",
          "The total force spread over the wall area gives the gas pressure.",
        ],
        ask: "Begin with how the particles move and finish with the pressure on the wall. Put the steps in order.",
        hints: [
          "Start with the fast random motion, then a single collision and its small force.",
          "Many collisions per second add up to a steady force, and force per unit area is the pressure.",
        ],
        explain: "The particles move quickly and randomly, each striking a wall and rebounding. Each rebound exerts a small force on the wall. Huge numbers of collisions happen every second, and the total force spread over the wall area gives the gas pressure.",
      },
      // 18 interactive: tiles (s7-5 temperature)
      {
        kind: "tiles",
        prompt: "Build the sentence that defines temperature from the tiles.",
        tiles: [
          "Temperature",
          "is a measure of",
          "the average",
          "kinetic energy",
          "of the particles",
          "the total mass",
          "of the container",
        ],
        answer: [
          "Temperature",
          "is a measure of",
          "the average",
          "kinetic energy",
          "of the particles",
        ],
        ask: "Temperature is about the energy of motion of the particles, taken as an average. Pick the tiles that build that definition.",
        hints: [
          "The key idea is the average kinetic energy, not the mass.",
          "Leave out the mass and the container tiles.",
        ],
        explain: "Temperature is a measure of the average kinetic energy of the particles. It describes how much energy of motion the particles have on average, not the mass of the substance or the container.",
      },
      // 19 open (s7-1 model)
      {
        kind: "open",
        prompt: "Explain what is meant by the internal energy store of a substance, in terms of its particles.",
        modelAnswer: "The internal energy store is the total energy stored in the particles of a substance. It is made of 2 parts. The kinetic store comes from the motion of the particles, since every particle is always moving or vibrating. The potential energy store comes from the attractive forces between the particles across the gaps between them. Adding the kinetic store and the potential energy store together gives the internal energy store.",
        marks: [
          "The internal store is the total energy stored in the particles.",
          "The kinetic store comes from the motion of the particles.",
          "The potential energy store comes from the attractive forces between the particles.",
        ],
        ask: "Name the 2 stores that add up to the internal store, and say what each one comes from.",
      },
      // 20 open (s7-2 arrangement) with figure on an open
      {
        kind: "open",
        prompt: "The figure shows the particles in a solid, a liquid and a gas. Using the model, explain why a gas can be compressed easily but a liquid cannot.",
        figure: "fig-08-02-states-particles",
        modelAnswer: "In a gas, shown on the right, the particles are far apart with large empty spaces between them. When the gas is squeezed, the particles are pushed closer into these spaces, so the volume falls a lot and the gas is easily compressed. In a liquid, shown in the middle, the particles are already close together and touching, with almost no space between them. There is nowhere for them to move closer, so a liquid is almost incompressible.",
        marks: [
          "Gas particles are far apart with empty space between them.",
          "Squeezing a gas pushes its particles closer into that space, so it compresses easily.",
          "Liquid particles are already close and touching, so a liquid barely compresses.",
        ],
        ask: "Compare how much empty space there is between the particles in the gas and in the liquid, and link that to how far each can be squeezed.",
      },
      // 21 open (s7-3 everyday properties)
      {
        kind: "open",
        prompt: "Explain, in terms of particles, why a solid keeps a fixed shape but a liquid does not.",
        modelAnswer: "In a solid the particles are held in a regular fixed arrangement by strong attractive forces, and they can only vibrate about fixed positions. Because they cannot move away from their places, the solid keeps a fixed shape. In a liquid the forces are weaker and the particles are not in a fixed arrangement, so they can slide past one another. This lets a liquid flow and take the shape of its container instead of keeping a shape of its own.",
        marks: [
          "Solid particles are in a fixed arrangement and only vibrate in place, so the shape is fixed.",
          "Liquid particles are not in a fixed arrangement and can slide past one another.",
          "Because liquid particles can move around, a liquid flows and takes the container's shape.",
        ],
        ask: "Think about whether the particles in each state are locked in place or free to slide past one another.",
      },
      // 22 open (s7-4 Brownian)
      {
        kind: "open",
        prompt: "Explain what Brownian motion is and how it provides evidence for the kinetic particle model.",
        modelAnswer: "Brownian motion is the random, jerky movement of small particles suspended in a fluid, such as smoke specks in air. It is seen under a microscope as bright specks darting along a zigzag path. It happens because the tiny, invisible particles of the fluid are in rapid random motion and strike the visible speck from all sides. At any instant the collisions do not cancel, so there is a changing net push. This supports the model in 2 ways: only unseen particles could knock the speck about, showing matter is made of particles, and the constant jerky motion shows those particles are in continuous random motion.",
        marks: [
          "Brownian motion is the random jerky movement of small particles suspended in a fluid.",
          "It is caused by collisions with the tiny fast-moving particles of the fluid, which do not cancel out.",
          "It shows that matter is made of particles and that they are in continuous random motion.",
        ],
        ask: "Describe the motion you see, say what causes it, and link both to what the model claims about particles.",
      },
      // 23 open (s7-5 pressure)
      {
        kind: "open",
        prompt: "A sealed rigid metal cylinder of gas is left in the sun and warms up. Explain, in terms of particles, why the gas pressure inside increases.",
        modelAnswer: "Warming the gas transfers energy to its particles, so they move faster. Because the cylinder is rigid the volume stays the same, but the faster particles strike the walls more often and hit them harder each time. This means a greater total force on each unit area of the wall, so the gas pressure increases.",
        marks: [
          "Heating makes the particles move faster.",
          "The faster particles hit the walls more often and harder, with the volume unchanged.",
          "More frequent and harder collisions per unit area mean the pressure increases.",
        ],
        ask: "Link the higher temperature to the speed of the particles, then to how they collide with the fixed walls.",
      },
      // 24 choice (s7-5 gas pressure origin)
      {
        kind: "choice",
        question: "How does a gas exert a pressure on the walls of its container?",
        options: [
          "The particles heat the walls until they push outward",
          "Its particles collide with the walls and rebound, each exerting a small force",
          "Its particles stick to the walls and pull them inward",
          "The gas as a whole presses down under its own weight only",
        ],
        correct: 1,
        ask: "Pressure comes from the particles hitting the walls. Think about what each particle does when it reaches a wall.",
        hints: [
          "A gas particle rebounds off a wall it strikes.",
          "As it rebounds it exerts a small force on the wall, and huge numbers of collisions add up.",
        ],
        explain: "The particles collide with the walls and rebound, each exerting a small force. A huge number of these collisions every second give a steady total force, and the force per unit area is the gas pressure.",
      },
      // 25 choice (s7-1 / whole model)
      {
        kind: "choice",
        question: "The same particles make up ice, water and steam. When ice melts and then boils, which of these does NOT change?",
        options: [
          "How the particles are arranged",
          "How far apart the particles are",
          "How fast the particles move",
          "The particles themselves, their size and nature",
        ],
        correct: 3,
        ask: "The 3 states are made of the same particles. Think about which feature stays fixed while arrangement, spacing and motion all change.",
        hints: [
          "Melting and boiling change the arrangement, the spacing and the motion of the particles.",
          "The particles themselves are the same throughout; only how they are arranged and move changes.",
        ],
        explain: "The particles themselves, their size and nature, do not change. What changes between ice, water and steam is how the particles are arranged, how far apart they are, how strongly they attract and how they move.",
      },
    ],
  },
];
