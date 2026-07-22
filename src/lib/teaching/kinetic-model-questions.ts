// kinetic-model-questions.ts
// Teaching question bank for O-Level Physics, Kinetic Particle Model of Matter
// (topicKey "t7-kinetic-particle-model-of-matter"). Every wrong option maps to the
// misconception it reveals (see kinetic-model-misconceptions.ts), so the tutor can
// respond to exactly why the student erred.
// Grounded in Physics-Study-Notes / Chapter 08 - Kinetic Particle Model of Matter.md
// walkthrough and explain are spoken by Gugu, so they use plain words, no symbols.
// stem and options are shown on screen, so they may use _ and ^ notation.

import type { TeachQuestion } from "@/lib/teaching/types";

export const KINETIC_QUESTIONS: TeachQuestion[] = [
  {
    id: "kin-q-01",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "states-of-matter",
    stem: "Ice, water and steam are the same substance in three different states. Which statement is correct?",
    figure: "fig-08-02-states-particles.svg",
    options: [
      "The particles are the same in all three; only their arrangement, spacing and motion differ.",
      "Each state is made of a different kind of particle.",
      "The particles themselves grow larger as ice melts and then boils.",
      "In steam the gaps between the particles are filled with air."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-states-3", 2: "kin-states-1", 3: "kin-states-2" },
    walkthrough: [
      "Ice, water and steam are all the very same substance.",
      "So the particles are identical in every state.",
      "What changes is how they are arranged, how far apart they sit, and how they move.",
      "The particles do not change kind or size, and the gaps between them are empty, not filled with air."
    ],
    explain: "The three states share the same particles. Going from ice to water to steam changes only the arrangement, the spacing and the motion of those particles. The particles are not a different kind, they do not swell in size, and the spaces between them are empty rather than filled with air."
  },
  {
    id: "kin-q-02",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "internal-energy",
    stem: "What is meant by the internal energy store of a substance?",
    figure: "fig-08-01-internal-store.svg",
    options: [
      "The total of the kinetic store and the potential energy store of all its particles.",
      "Only the kinetic energy of its particles as they move.",
      "The energy each particle would gain by growing larger when heated.",
      "The energy stored in the air between the particles."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-internal-1", 2: "kin-states-1", 3: "kin-states-2" },
    walkthrough: [
      "Every particle stores energy in two ways.",
      "It has a kinetic store because it is always moving.",
      "It has a potential store because the particles attract one another across the gaps.",
      "The internal energy store is the total of both, kinetic plus potential."
    ],
    explain: "Internal energy is the sum of two stores, the kinetic store from the moving particles and the potential store from the attractions between them. Leaving out the potential part misses half of it. Particles do not grow when heated, and the gaps hold empty space, not air, so those ideas are not part of it either."
  },
  {
    id: "kin-q-03",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-arrangement",
    stem: "How do the particles in a solid behave?",
    figure: "fig-08-02-states-particles.svg",
    options: [
      "They vibrate about fixed positions.",
      "They are completely still, and only start to move when the solid melts.",
      "They are spread far apart with large gaps between them.",
      "They grow larger and vibrate harder at the same time."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-arrange-1", 2: "kin-arrange-2", 3: "kin-states-1" },
    walkthrough: [
      "Strong forces lock the particles of a solid into fixed positions.",
      "They cannot travel around, but they are not still.",
      "Each particle vibrates on the spot the whole time.",
      "They stay close together and keep their size, they do not spread out or grow."
    ],
    explain: "In a solid the particles vibrate about fixed positions. They are held in place but never stop vibrating, so they are not completely still. They are also close together, not far apart, and they keep their size, since particles do not grow when heated."
  },
  {
    id: "kin-q-04",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-arrangement",
    stem: "Which statement best describes the particles in a gas?",
    figure: "fig-08-02-states-particles.svg",
    options: [
      "Far apart, randomly scattered, and moving quickly in all directions.",
      "Arranged in a regular, orderly pattern.",
      "Close together and touching, just moving faster than in a liquid.",
      "Filling the space, with air in the gaps between them."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-arrange-3", 2: "kin-arrange-4", 3: "kin-states-2" },
    walkthrough: [
      "In a gas the forces between particles are almost nothing.",
      "So the particles are far apart and scattered at random.",
      "They travel quickly in every direction.",
      "There is no orderly pattern, they are not close together, and the gaps are empty space."
    ],
    explain: "Gas particles are far apart, random, and fast moving in all directions. A regular pattern belongs to a solid, gas particles are widely separated rather than touching like a liquid, and the gaps between them are empty space, not air."
  },
  {
    id: "kin-q-05",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "compressibility",
    stem: "A sealed syringe of air is easy to push in, but a sealed syringe of water is almost impossible. Why?",
    figure: null,
    options: [
      "Air particles are far apart with empty space to close up; water particles are already close together with almost none.",
      "Pushing the plunger squashes the air particles into smaller particles.",
      "Water particles are hard and rigid, so they cannot be compressed.",
      "Water particles are far apart, so they slip away from the plunger."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-compress-2", 2: "kin-compress-1", 3: "kin-arrange-2" },
    walkthrough: [
      "A gas has its particles far apart with lots of empty space.",
      "Pushing the plunger just moves those particles closer together, so the air compresses.",
      "In water the particles are already close and touching, with almost no space to remove.",
      "So the water plunger barely moves, because there is nowhere for the particles to go."
    ],
    explain: "Compressibility is about the empty space between particles. Air has plenty, so it squashes easily as its particles move closer. Water has almost none, so it hardly compresses. The particles themselves are not crushed smaller, water particles are not specially rigid, and they are close together, not far apart."
  },
  {
    id: "kin-q-06",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-forces",
    stem: "Solids usually have higher melting points than liquids and gases. In terms of particles, why?",
    figure: "fig-08-02-states-particles.svg",
    options: [
      "The attractive forces between the particles are very strong, so more energy is needed to overcome them.",
      "The particles in a solid are larger and heavier.",
      "The particles in a solid are completely still, so they must be heated before they can move.",
      "The particles in a solid are far apart, so they take longer to join up."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-force-1", 2: "kin-arrange-1", 3: "kin-arrange-2" },
    walkthrough: [
      "In a solid the attractive forces between particles are very strong.",
      "Melting means shaking the particles free of one another.",
      "Strong forces need a lot of energy to overcome, which means a high temperature.",
      "So the high melting point comes from the strength of the forces, not the size or spacing of the particles."
    ],
    explain: "A high melting point comes from strong attractive forces between the particles, so more energy is needed to break them apart. It is not because the particles are bigger or heavier, and the particles in a solid are already vibrating and close together, not still or far apart."
  },
  {
    id: "kin-q-07",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "brownian-motion",
    stem: "Smoke particles in air are watched through a microscope and seen to move along jerky, zigzag paths. What are we actually seeing?",
    figure: "fig-08-03-brownian-smoke.svg",
    options: [
      "Large smoke particles being knocked about by tiny, invisible, fast-moving air particles.",
      "The tiny air particles themselves moving about.",
      "Smoke particles bumping into one another and into the cell walls.",
      "The lamp light pushing the smoke particles around."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-brownian-1", 2: "kin-brownian-2", 3: "kin-brownian-3" },
    walkthrough: [
      "The bright specks are large smoke particles, big enough to see.",
      "The air particles are far too small to see, even under the microscope.",
      "Those tiny air particles crash into the smoke particles from every side.",
      "The uneven hits knock each smoke particle along a jerky, random path."
    ],
    explain: "We see large smoke particles being battered by tiny, invisible air particles. The air particles are too small to see directly. The motion is not the smoke particles colliding with each other, and the lamp only lights the specks up, it does not push them."
  },
  {
    id: "kin-q-08",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "brownian-motion",
    stem: "What directly causes the Brownian motion of a pollen grain floating in water?",
    figure: "fig-08-04-brownian-collisions.svg",
    options: [
      "Collisions with the tiny, fast-moving water particles.",
      "Collisions between one pollen grain and another.",
      "The water particles being large enough to be seen moving.",
      "Rays of light striking the pollen grain."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-brownian-2", 2: "kin-brownian-1", 3: "kin-brownian-3" },
    walkthrough: [
      "The water is full of tiny, invisible particles in rapid random motion.",
      "These water particles collide with the much larger pollen grain from all sides.",
      "At any instant the collisions do not cancel, so there is a changing net push.",
      "That push knocks the pollen grain about, which is the Brownian motion."
    ],
    explain: "The pollen grain is knocked about by the tiny, fast-moving water particles hitting it unevenly. It is not caused by pollen grains colliding with each other, the water particles are far too small to see, and light only makes the grain visible rather than moving it."
  },
  {
    id: "kin-q-09",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "brownian-motion",
    stem: "The Brownian motion of smoke in air is strong evidence for which idea?",
    figure: "fig-08-05-brownian-setup.svg",
    options: [
      "Matter is made of tiny particles that are in constant, random motion.",
      "Air particles are large enough to be seen directly.",
      "Light can push small particles into random paths.",
      "The smoke particles collide only with the walls of the cell."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-brownian-1", 2: "kin-brownian-3", 3: "kin-brownian-2" },
    walkthrough: [
      "A visible speck darting about at random needs a cause.",
      "It can only be explained if unseen particles are striking it.",
      "The ever changing path is exactly what random particle collisions would produce.",
      "So it is evidence that matter is made of particles in constant, random motion."
    ],
    explain: "The erratic dancing of the specks shows that matter is made of particles in constant, random motion, since only unseen particles striking the speck could produce it. The air particles stay invisible, the light only lets us watch, and the specks are struck by fluid particles, not just by the walls."
  },
  {
    id: "kin-q-10",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    stem: "In the kinetic particle model, the temperature of a substance is a measure of what?",
    figure: null,
    options: [
      "The average kinetic energy of its particles.",
      "The total kinetic energy of all its particles added together.",
      "The total internal energy of the substance, kinetic and potential.",
      "The energy of the single fastest particle."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-temp-1", 2: "kin-internal-1", 3: "kin-temp-1" },
    walkthrough: [
      "Temperature is about the energy of a typical particle, not the whole sample.",
      "That is why we use the word average.",
      "The total kinetic energy depends on how many particles there are, so it is not temperature.",
      "So temperature measures the average kinetic energy of the particles."
    ],
    explain: "Temperature measures the average kinetic energy per particle. The total kinetic energy depends on how many particles there are, so it is not temperature. The full internal energy also includes the potential store, and one fastest particle is not the average, so those choices miss the meaning of average."
  },
  {
    id: "kin-q-11",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    stem: "Equal masses of copper and water are given the same amount of heat. Which statement about their particles is correct?",
    figure: null,
    options: [
      "The particles of both substances gain kinetic energy and move faster.",
      "Only the copper particles gain kinetic energy.",
      "The particles stop moving once the substances are hot.",
      "The particles grow larger as they gain energy."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-temp-3", 2: "kin-temp-2", 3: "kin-states-1" },
    walkthrough: [
      "Supplying heat raises the internal store of each substance.",
      "So the particles of both the copper and the water gain kinetic energy.",
      "Gaining kinetic energy means they move or vibrate faster.",
      "Particles never stop while a substance is above absolute zero, and they do not change size."
    ],
    explain: "Heat is given to both substances, so the particles of both gain kinetic energy and move faster. It is not only the copper that gains energy, the particles do not stop once hot, since they always move above absolute zero, and particles do not grow larger as they gain energy."
  },
  {
    id: "kin-q-12",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    stem: "A metal block is cooled to a very low temperature. What happens to its particles?",
    figure: null,
    options: [
      "They slow down but keep moving, as long as the block is above absolute zero.",
      "They stop moving completely.",
      "They shrink and take up less space.",
      "Only the particles at the surface slow down; the inside particles keep their speed."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-temp-2", 2: "kin-states-1", 3: "kin-temp-3" },
    walkthrough: [
      "Cooling takes energy away from the particles.",
      "So they lose kinetic energy and slow down.",
      "But they never stop completely, not until absolute zero.",
      "And this happens to all the particles right through the block, not just those at the surface."
    ],
    explain: "Cooling makes the particles slow down, but they keep moving until absolute zero, so they never come to a complete stop at everyday temperatures. The particles do not shrink in size, and cooling affects all the particles, not only the ones at the surface."
  },
  {
    id: "kin-q-13",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    stem: "A gas exerts a pressure on the walls of its container. What causes this pressure?",
    figure: "fig-08-06-gas-pressure-wall.svg",
    options: [
      "The gas particles constantly colliding with the walls and rebounding, each giving a tiny force.",
      "The gas particles pushing and repelling one another against the walls.",
      "The weight of the gas particles pressing down on the walls.",
      "The particles being packed tightly and pressing outward like a solid."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-pressure-1", 2: "kin-pressure-4", 3: "kin-arrange-4" },
    walkthrough: [
      "Gas particles move rapidly and randomly inside the container.",
      "Each time one strikes a wall it gives the wall a tiny force as it rebounds.",
      "Huge numbers of particles hit the walls every second.",
      "All those tiny forces add up to the steady push we call pressure."
    ],
    explain: "Pressure comes from countless particles colliding with the walls and rebounding, each giving a small force that adds up. It is not the particles pushing on each other, it is not the weight of the particles, and gas particles are far apart rather than packed tightly like a solid."
  },
  {
    id: "kin-q-14",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    stem: "A gas is squeezed into a smaller volume while the temperature is kept constant. Why does the pressure increase?",
    figure: "fig-08-07-piston.svg",
    options: [
      "The particles are more crowded, so they hit each part of the wall more often.",
      "The particles speed up when they are squeezed together.",
      "Each particle is crushed smaller and so pushes harder.",
      "The particles pack into a regular pattern that presses on the walls."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-pressure-2", 2: "kin-compress-2", 3: "kin-arrange-3" },
    walkthrough: [
      "The temperature is kept constant, so the particle speed does not change.",
      "In a smaller volume the same particles are packed into less space.",
      "So there are more particles in each unit of space near the wall.",
      "They strike each part of the wall more often, and that raises the pressure."
    ],
    explain: "At constant temperature the particles keep the same speed. Squeezing them into a smaller volume crowds them, so they hit the walls more often, which raises the pressure. The particles do not speed up, they are not crushed smaller, and they do not form an orderly pattern."
  },
  {
    id: "kin-q-15",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    stem: "A fixed mass of gas is sealed in a rigid steel cylinder and heated. Why does the pressure increase?",
    figure: "fig-08-06-gas-pressure-wall.svg",
    options: [
      "The particles move faster, so they hit the walls more often and with greater force.",
      "The particles swell to a larger size and press harder on the walls.",
      "Heating creates more gas particles inside the cylinder.",
      "The particles stop moving and pile up against the walls."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-states-1", 2: "kin-pressure-3", 3: "kin-temp-2" },
    walkthrough: [
      "Heating gives the particles more average kinetic energy.",
      "So they move faster inside the cylinder.",
      "Faster particles strike the walls more often and hit harder.",
      "The volume is fixed, so this greater force per unit area is a higher pressure."
    ],
    explain: "Heating makes the particles move faster, so they hit the fixed walls more often and with greater force, raising the pressure. The particles do not swell in size, no new particles are created in a sealed cylinder, and the particles never stop, they speed up."
  },
  {
    id: "kin-q-16",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    stem: "The same fixed mass of gas is allowed to expand into a larger volume at constant temperature. What happens to the pressure, and why?",
    figure: "fig-08-07-piston.svg",
    options: [
      "It decreases, because the particles hit each part of the wall less often.",
      "It decreases, because the particles slow down in the bigger space.",
      "It increases, because the particles spread out and push the walls harder.",
      "It increases, because each particle grows to fill the space."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-pressure-2", 2: "kin-pressure-1", 3: "kin-states-1" },
    walkthrough: [
      "The temperature is constant, so the particle speed does not change.",
      "In a larger volume the same particles are spread through more space.",
      "So there are fewer particles in each unit of space near the wall.",
      "They strike each part of the wall less often, so the pressure falls."
    ],
    explain: "Spreading the same particles through a bigger volume at constant temperature means fewer of them near each part of the wall, so the wall is struck less often and the pressure decreases. The particles do not slow down, they are not pushing each other harder, and they do not grow to fill the space."
  },
  {
    id: "kin-q-17",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "diffusion",
    stem: "A drop of perfume is opened at one side of a still room and is soon smelled across the room. Which statement best explains this?",
    figure: null,
    options: [
      "The perfume particles move randomly in all directions and spread out among the air particles.",
      "A draught blows the perfume particles across the room.",
      "The perfume particles grow larger in the warm air.",
      "Gravity pulls the perfume particles across the room."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-diffusion-1", 2: "kin-states-1", 3: "kin-diffusion-1" },
    walkthrough: [
      "The perfume particles are in constant, random motion.",
      "They move off in every direction, mixing among the air particles.",
      "This happens even in still air with no draught at all.",
      "So the smell spreads by the random motion of the particles."
    ],
    explain: "The perfume spreads because its particles are in constant random motion, mixing among the air particles until they reach across the room, even in still air. It is not carried by a draught, the particles do not grow larger, and gravity does not pull them sideways across the room."
  },
  {
    id: "kin-q-18",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "states-of-matter",
    stem: "Water poured into a jug takes the shape of the jug, but a copper block keeps its own shape. Why?",
    figure: "fig-08-02-states-particles.svg",
    options: [
      "The liquid particles have no fixed arrangement and slide past one another, while the solid particles are held in a fixed pattern.",
      "The liquid particles are far apart, so they fall into the shape of the jug.",
      "The liquid particles are a different, larger kind of particle that can flow.",
      "The solid keeps its shape only because its particles are completely still."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-arrange-2", 2: "kin-states-3", 3: "kin-arrange-1" },
    walkthrough: [
      "In a solid the particles are held in a fixed, regular pattern, so the shape stays.",
      "In a liquid the particles are still close together but have no fixed pattern.",
      "So the liquid particles can slide past one another and flow.",
      "That lets a liquid take the shape of its container while the solid keeps its own shape."
    ],
    explain: "A liquid flows because its particles have no fixed arrangement and can slide past one another, while a solid keeps its shape because its particles are locked in a fixed pattern. Liquid particles are close together, not far apart, they are the same kind of particle as any other state, and the solid holds its shape by its fixed arrangement, not by its particles being still."
  },
  {
    id: "kin-q-19",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "compressibility",
    stem: "Why do a solid and a liquid keep a fixed volume, while a gas does not?",
    figure: "fig-08-02-states-particles.svg",
    options: [
      "In a solid and liquid the particles are close together and not free to travel away; in a gas they move freely and spread out.",
      "In a solid and liquid the particles are far apart but heavy, so they stay put.",
      "Gas particles keep growing until they fill the whole container.",
      "Gas particles repel one another, and that is what fills the container."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-arrange-2", 2: "kin-states-1", 3: "kin-pressure-1" },
    walkthrough: [
      "In a solid and a liquid the particles are close together and cannot travel away.",
      "So the substance keeps the same volume.",
      "In a gas the particles move freely in every direction.",
      "So they spread out to fill whatever container they are given, with no fixed volume."
    ],
    explain: "Solids and liquids keep a fixed volume because their particles are close together and not free to travel away, while a gas fills its container because its particles move freely and spread out. The particles of a solid and liquid are close, not far apart, gas particles do not grow, and a gas fills the space by its random motion, not by particles repelling each other."
  },
  {
    id: "kin-q-20",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "diffusion",
    stem: "Why does diffusion happen much faster in a gas than in a liquid?",
    figure: null,
    options: [
      "Gas particles move quickly and freely, so they mix and spread far faster.",
      "Gas particles are a larger kind of particle, so they travel further.",
      "Gravity pulls the gas particles along faster.",
      "Gas particles are packed close together and push one another along."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-states-3", 2: "kin-diffusion-1", 3: "kin-arrange-4" },
    walkthrough: [
      "Diffusion is the spreading of particles by their random motion.",
      "Gas particles move quickly and freely in every direction.",
      "Liquid particles are slower and more crowded.",
      "So a gas mixes and spreads far faster than a liquid."
    ],
    explain: "Diffusion is faster in a gas because its particles move quickly and freely, mixing rapidly, while liquid particles are slower and closer packed. Gas particles are not a larger kind of particle, they are not driven by gravity, and they are far apart rather than packed close and pushing each other."
  },
  {
    id: "kin-q-21",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "internal-energy",
    stem: "Heating a substance raises its internal energy store. What can this extra energy do to the particles?",
    figure: "fig-08-01-internal-store.svg",
    options: [
      "Make them move faster, or pull them further apart against the attractive forces, or both.",
      "Make each particle grow to a larger size.",
      "Only speed the particles up, since the potential store is not part of internal energy.",
      "Make the particles stop and settle into fixed places."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-states-1", 2: "kin-internal-1", 3: "kin-temp-2" },
    walkthrough: [
      "Internal energy has a kinetic part and a potential part.",
      "Raising the kinetic part makes the particles move faster.",
      "Raising the potential part pulls the particles further apart against their attractions.",
      "Heating can do either or both, but it never changes the size of a particle or stops it moving."
    ],
    explain: "The extra energy can make the particles move faster, or pull them further apart against the attractions, or both, because internal energy has a kinetic and a potential part. The particles do not grow in size, the potential store really is part of internal energy, and heating never makes particles stop, it makes them move more."
  },
  {
    id: "kin-q-22",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    stem: "Two sealed flasks hold the same gas at the same temperature. Flask X holds twice as many particles as flask Y. How do the average kinetic energies of the particles compare?",
    figure: null,
    options: [
      "They are equal, because temperature sets the average kinetic energy per particle.",
      "Flask X is greater, because it has more particles.",
      "Flask Y is greater, because fewer particles each move faster.",
      "Flask X is greater, because more particles store more total energy, so each is hotter."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "kin-temp-1", 2: "kin-temp-1", 3: "kin-temp-1" },
    walkthrough: [
      "Temperature measures the average kinetic energy of one particle.",
      "Both flasks are at the same temperature.",
      "So the average kinetic energy per particle is the same in each.",
      "The number of particles changes the total energy, but not the average, and not the temperature."
    ],
    explain: "Both flasks are at the same temperature, so the average kinetic energy per particle is equal, no matter how many particles there are. Having more particles raises the total energy, not the average, so it does not make each particle hotter. Temperature is about the average, not the total."
  }
];
