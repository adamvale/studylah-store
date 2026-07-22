// kinetic-model-misconceptions.ts
// Topic: O-Level Physics, Kinetic Particle Model of Matter (topicKey "t7-kinetic-particle-model-of-matter").
// The tutor's diagnostic brain: the classic ways students go wrong on the kinetic
// particle model, with the exact re-explanation for each. Grounded in
// StudyLah-HQ Physics-Study-Notes / Chapter 08 - Kinetic Particle Model of Matter.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in plain
// words for reading aloud. On-screen fields (label, belief, microExample) may use _ and ^.

import type { Misconception } from "@/lib/teaching/types";

export const KINETIC_MISCONCEPTIONS: Misconception[] = [
  {
    id: "kin-internal-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "internal-energy",
    label: "Internal energy treated as kinetic only",
    belief: "The internal energy store of a substance is just the kinetic energy of its moving particles.",
    tell: "The student defines internal energy as the movement energy of the particles and leaves out the potential store.",
    whyItHappens: "The kinetic part is easy to picture because the particles are clearly moving, while the potential store, which comes from the attractions across the gaps, is invisible and gets forgotten.",
    reteach: "The internal store of a substance is the total of two things. There is the kinetic store, because the particles are always moving, and there is the potential store, because the particles attract one another across the gaps between them. So internal energy is kinetic plus potential, not kinetic on its own. When you heat something, you can raise either part, by making the particles move faster or by pulling them further apart against those attractions.",
    microExample: "internal store = kinetic store + potential energy store (both parts, not just the moving part).",
    figure: "fig-08-01-internal-store.svg",
    check: {
      question: "The internal energy store of a substance is made of two parts. What are they?",
      answer: "The kinetic store, from the moving particles, and the potential store, from the attractions between the particles."
    }
  },
  {
    id: "kin-states-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "states-of-matter",
    label: "Particles themselves grow when heated",
    belief: "When a substance is heated, each of its particles swells to a larger size.",
    tell: "The student explains expansion, or a pressure rise, by saying the individual particles get bigger.",
    whyItHappens: "We can see objects expand when heated, so students assume the particles inside must be expanding too, when it is really the spacing and the speed that change.",
    reteach: "A single particle never changes size when you heat or cool a substance. What changes is how fast the particles move and how far apart they sit. Heating gives the particles more energy, so they move faster and push each other a little further apart, and that is why the whole object expands. The particles stay exactly the same size the whole time.",
    microExample: "Heat a metal bar: it expands because the particles move faster and spread apart, not because each particle grows.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "When a metal block is heated and expands, what has happened to the size of each particle?",
      answer: "Nothing. Each particle stays the same size. The block expands because the particles move faster and spread a little further apart."
    }
  },
  {
    id: "kin-states-2",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "states-of-matter",
    label: "Gaps between particles filled with air",
    belief: "The spaces between the particles of a substance are filled with air.",
    tell: "The student says there is air, or some other stuff, sitting in the gaps between the particles.",
    whyItHappens: "Empty space feels strange, so students fill the gaps with the most familiar thing they know, which is air, forgetting that air is itself made of particles.",
    reteach: "The gaps between particles are truly empty, they are not filled with air or anything else. Air is itself made of particles, so it cannot be the thing sitting in the gaps between other particles. In a gas the particles are far apart with nothing but empty space between them, and that empty space is exactly why a gas can be squeezed into a smaller volume.",
    microExample: "In a gas the wide gaps between particles are empty space, not air.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "What is in the gaps between the particles of a gas?",
      answer: "Nothing, the gaps are empty space. Air cannot be there, because air is itself just more particles."
    }
  },
  {
    id: "kin-states-3",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "states-of-matter",
    label: "Different states made of different particles",
    belief: "A solid, a liquid and a gas of the same substance are made of different kinds of particle.",
    tell: "The student says the particles in steam are different from the particles in ice, or that gas particles are larger than liquid ones.",
    whyItHappens: "Ice, water and steam look and feel so different that students assume the particles must be different, when only the arrangement and motion have changed.",
    reteach: "Ice, water and steam are all the same substance, made of exactly the same particles. What changes from one state to the next is not the particles themselves but how they are arranged, how far apart they sit, how freely they move, and how strongly they attract. So the particles in steam are the very same particles that were in the ice, just spread out and moving much faster.",
    microExample: "Ice, water and steam: same particles throughout; only the spacing, pattern and motion differ.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "Are the particles in steam different from the particles in the ice it came from?",
      answer: "No, they are the same particles. Only their arrangement, spacing and motion have changed."
    }
  },
  {
    id: "kin-arrange-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-arrangement",
    label: "Solid particles are completely still",
    belief: "The particles in a solid do not move at all.",
    tell: "The student says solid particles are frozen in place and only begin to move when the solid melts.",
    whyItHappens: "A solid looks perfectly still from the outside, so students assume the particles inside are also motionless, missing that they are vibrating on the spot.",
    reteach: "Even in a solid the particles are moving. They are locked into fixed positions by strong attractions, so they cannot travel around, but they do vibrate on the spot the whole time. They never stop, as long as the solid is above absolute zero. So a solid keeps its shape not because the particles are still, but because each one only vibrates about its own fixed place instead of wandering off.",
    microExample: "Solid particles vibrate about fixed positions, they are not motionless.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "Are the particles in a solid completely still?",
      answer: "No. They vibrate about fixed positions. They are held in place but never stop vibrating."
    }
  },
  {
    id: "kin-arrange-2",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-arrangement",
    label: "Liquid and solid particles far apart",
    belief: "The particles in a liquid, or even a solid, are far apart with large gaps between them.",
    tell: "The student draws or describes wide spaces between the particles of a liquid or a solid.",
    whyItHappens: "Students learn that gases have big gaps and then spread that picture to liquids and solids as well, forgetting that only gases have particles that are far apart.",
    reteach: "In a solid and in a liquid the particles are actually close together and touching. The difference is only in the pattern. A solid holds its particles in a fixed, regular arrangement, while a liquid lets them slide past one another with no fixed pattern. It is only in a gas that the particles are far apart with large empty gaps. So liquids and solids are packed close, and gases are spread out.",
    microExample: "Solid and liquid: particles touching and close. Gas: particles far apart. Only the gas has large gaps.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "In a liquid, are the particles close together or far apart?",
      answer: "Close together and touching. Only in a gas are the particles far apart with large gaps."
    }
  },
  {
    id: "kin-arrange-3",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-arrangement",
    label: "Gas particles in a regular pattern",
    belief: "The particles in a gas sit in a regular, orderly pattern.",
    tell: "The student describes gas particles as neatly arranged or lined up in a pattern.",
    whyItHappens: "The tidy lattice drawing of a solid is memorable, so students carry that orderly picture over to gases too.",
    reteach: "It is the solid that has the regular, orderly pattern, because strong forces lock its particles into fixed places. In a gas the forces are almost nothing, so the particles are scattered completely at random and fly about in every direction. There is no pattern at all in a gas. So keep the neat, ordered arrangement for the solid, and picture the gas as random and widely scattered.",
    microExample: "Solid: regular pattern. Gas: random, no pattern, widely scattered.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "Are the particles in a gas arranged in a regular pattern?",
      answer: "No. They are scattered completely at random. It is the solid that has a regular, orderly pattern."
    }
  },
  {
    id: "kin-arrange-4",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-arrangement",
    label: "Gas particles close together",
    belief: "The particles in a gas are close together and touching, just moving faster than in a liquid.",
    tell: "The student pictures gas particles as packed close, with the only difference from a liquid being their speed.",
    whyItHappens: "Students know that heating a liquid into a gas speeds the particles up, and they change the speed in their picture but forget to spread the particles out.",
    reteach: "In a gas the particles are not close together. They are far apart, with large empty spaces between them, which is why a gas can be squeezed so much and why it spreads out to fill any container. A liquid has its particles touching, but a gas has them widely separated. So going from liquid to gas changes both things, the particles move faster and they also move much further apart.",
    microExample: "Gas particles are far apart with big empty gaps, not touching like a liquid.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "In a gas, are the particles close together like in a liquid?",
      answer: "No. Gas particles are far apart with large empty spaces between them, which is why a gas is easy to compress."
    }
  },
  {
    id: "kin-force-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "particle-forces",
    label: "High melting point blamed on big particles",
    belief: "A solid melts at a high temperature because its particles are large and heavy.",
    tell: "The student explains a high melting or boiling point by the size or weight of the particles rather than the forces holding them.",
    whyItHappens: "It feels natural that something hard to melt must have big, heavy building blocks, so students reach for size instead of the strength of the attractions.",
    reteach: "What makes a solid hard to melt is the strength of the attractive forces between its particles, not the size of the particles. In a solid these forces are very strong, so a lot of energy is needed to shake the particles free of one another, and that means a high melting point. The particles are not larger or heavier than in other states, they are simply held together far more tightly.",
    microExample: "High melting point comes from strong attractive forces between particles, not from bigger particles.",
    figure: "fig-08-02-states-particles.svg",
    check: {
      question: "Why does a solid usually have a higher melting point than a liquid or gas?",
      answer: "Because the attractive forces between its particles are very strong, so more energy is needed to overcome them. It is not about the size of the particles."
    }
  },
  {
    id: "kin-compress-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "compressibility",
    label: "Liquids incompressible because particles are hard",
    belief: "A liquid cannot be compressed because its particles are hard and rigid.",
    tell: "The student says a liquid resists squashing because the particles themselves are solid or unbreakable.",
    whyItHappens: "Squashing something usually means crushing the material, so students think about crushing the particles rather than about the space between them.",
    reteach: "A liquid is hard to compress not because its particles are tough, but because they are already close together and touching, with almost no empty space left to remove. There is simply nowhere for them to go. A gas, on the other hand, has its particles far apart with plenty of empty space, so you can push them closer and the gas squashes easily. Compressibility is about the space between particles, not the hardness of the particles.",
    microExample: "A water-filled syringe barely moves: the particles are already touching, with no empty space to close up.",
    figure: null,
    check: {
      question: "Why can a liquid hardly be compressed?",
      answer: "Because its particles are already close together and touching, so there is almost no empty space to remove."
    }
  },
  {
    id: "kin-compress-2",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "compressibility",
    label: "Compressing a gas shrinks the particles",
    belief: "When a gas is compressed, its particles are squashed into smaller particles.",
    tell: "The student explains compression by saying each particle is crushed to a smaller size.",
    whyItHappens: "When you squeeze a squishy object it gets smaller, so students imagine the particles doing the same, instead of just moving closer together.",
    reteach: "When you compress a gas, the particles themselves do not change size at all. What happens is that the particles are pushed closer together, into the large empty spaces that were between them. A gas has so much empty space that there is plenty of room to close up, which is why it squashes easily. The particles keep their size, they just end up nearer to one another.",
    microExample: "Compressing a gas removes the empty space between particles; the particles stay the same size.",
    figure: null,
    check: {
      question: "When a gas is compressed, what happens to its particles?",
      answer: "They are pushed closer together into the empty space between them. Each particle stays the same size."
    }
  },
  {
    id: "kin-brownian-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "brownian-motion",
    label: "The visible specks are the fluid particles",
    belief: "The moving specks seen under the microscope are the air or water particles themselves.",
    tell: "The student says Brownian motion lets us watch the actual molecules of the air or water moving.",
    whyItHappens: "Something is clearly moving under the microscope, so students assume it must be the particles of the fluid, not realising those are far too small to see.",
    reteach: "The specks you can see, the smoke or the pollen, are large particles, thousands of times bigger than the fluid particles. The air or water particles are far too small to see even with a microscope. What you are really watching is those large visible specks being knocked about by the tiny, invisible fluid particles crashing into them. The specks are just a visible flag that lets us detect the unseen particles we can never watch directly.",
    microExample: "You see the large smoke speck; the tiny air particles hitting it stay invisible.",
    figure: "fig-08-04-brownian-collisions.svg",
    check: {
      question: "In a Brownian motion experiment, are the moving specks you see the actual air particles?",
      answer: "No. The specks are large smoke or pollen particles. The air particles are far too small to see, and they are the ones knocking the specks about."
    }
  },
  {
    id: "kin-brownian-2",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "brownian-motion",
    label: "Jerky motion blamed on the wrong collisions",
    belief: "The jerky path is caused by the visible specks bumping into each other or into draughts and currents.",
    tell: "The student says the smoke particles collide with one another, or that a draught in the room pushes them along.",
    whyItHappens: "Students look for a cause among the things they can see, the specks and the air currents, and miss the invisible fluid particles doing the real work.",
    reteach: "The jerky, random path comes from the tiny, invisible fluid particles striking the visible speck from every side. At any instant the hits do not perfectly cancel, so there is a net push one way, and a moment later the push is in a new direction. That is what makes the speck dart this way and that. It is not the specks colliding with each other, and it is not a draught, it is the constant battering by the unseen fluid particles.",
    microExample: "Uneven hits from invisible fluid particles give a changing net push, so the speck zigzags.",
    figure: "fig-08-03-brownian-smoke.svg",
    check: {
      question: "What causes the jerky, zigzag path of a smoke particle in air?",
      answer: "The tiny, invisible air particles striking it unevenly from all sides, giving a net push that keeps changing direction."
    }
  },
  {
    id: "kin-brownian-3",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "brownian-motion",
    label: "The light makes the specks move",
    belief: "The lamp or the microscope light is what makes the specks move around.",
    tell: "The student says the specks move because the light is shining on them or pushing them.",
    whyItHappens: "The lamp is an obvious, visible cause and the specks only appear when the light is on, so students credit the light with the motion.",
    reteach: "The lamp is only there to light up the specks so we can see them, it does not make them move. The specks would be jiggling about whether the light was on or not. Their motion comes from the invisible fluid particles crashing into them from all sides. So think of the light as a torch that lets you watch, not as a force that pushes the specks around.",
    microExample: "The lamp only makes the specks visible; the motion is caused by particle collisions.",
    figure: "fig-08-05-brownian-setup.svg",
    check: {
      question: "Does the lamp light cause the smoke particles to move?",
      answer: "No. The light only lets us see them. The movement is caused by invisible air particles colliding with the specks."
    }
  },
  {
    id: "kin-temp-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    label: "Temperature read as total energy",
    belief: "Temperature measures the total kinetic energy of all the particles added together.",
    tell: "The student says a larger sample at the same temperature has a higher temperature because it has more particles and so more total energy.",
    whyItHappens: "Students hear that temperature is about kinetic energy and reach for the total, missing the word average, so more particles seems to mean a higher temperature.",
    reteach: "Temperature measures the average kinetic energy of the particles, not the total. Average means we look at the typical energy of one particle, so it does not depend on how many particles there are. Two cups of the same water at the same temperature have particles with the same average energy, even though the bigger cup has far more particles and so more total energy. So temperature is about the energy per particle, not the whole sum.",
    microExample: "Same substance, same temperature: same average kinetic energy per particle, however many particles there are.",
    figure: null,
    check: {
      question: "Does a larger amount of water at the same temperature have particles with more average kinetic energy?",
      answer: "No. The average kinetic energy per particle is the same. Temperature measures the average, not the total energy."
    }
  },
  {
    id: "kin-temp-2",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    label: "Particles can stop moving",
    belief: "The particles of a substance can stop moving completely, when it is very cold or once it settles.",
    tell: "The student says the particles come to a complete standstill when cooled, or that they stop once a substance is hot enough.",
    whyItHappens: "In everyday life moving things eventually stop, so students expect particles to do the same, forgetting that particles keep moving at every temperature above absolute zero.",
    reteach: "The particles of a substance never stop moving, as long as the substance is above absolute zero. Cooling makes them slow down, and heating makes them speed up, but they always keep some motion. Even in a very cold solid the particles are still vibrating on the spot. So there is no ordinary temperature at which the particles come to a complete standstill.",
    microExample: "Cool a substance: the particles slow down but keep moving, never a full stop above absolute zero.",
    figure: null,
    check: {
      question: "Can the particles of a substance stop moving completely when it is cooled?",
      answer: "No. They slow down but keep moving. Particles only stop at absolute zero, which is far colder than everyday temperatures."
    }
  },
  {
    id: "kin-temp-3",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "temperature-and-kinetic-energy",
    label: "Only some particles gain energy when heated",
    belief: "When a substance is heated, only some of its particles gain energy, not all of them.",
    tell: "The student says only one of two heated substances gains kinetic energy, or that only the particles nearest the heat speed up.",
    whyItHappens: "Students picture heat reaching only the part it touches, so they imagine some particles warming while the rest stay as they were.",
    reteach: "When you supply heat to a substance, the energy goes into the internal store and the particles gain kinetic energy and move faster. This happens to the particles right through the substance, not just to a chosen few. If you heat two substances equally, the particles of both gain energy. So heating raises the average energy of all the particles, it does not pick out only some of them.",
    microExample: "Heat copper and water equally: the particles of both gain kinetic energy, not just one substance.",
    figure: null,
    check: {
      question: "If you give equal heat to copper and to water, do the particles of both gain kinetic energy?",
      answer: "Yes. The particles of both gain kinetic energy and move faster. Heating does not affect only one of them."
    }
  },
  {
    id: "kin-pressure-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    label: "Gas pressure from particles pushing each other",
    belief: "Gas pressure comes from the particles pushing or repelling one another against the walls.",
    tell: "The student explains pressure by particles shoving each other outward rather than colliding with the container walls.",
    whyItHappens: "Pressure feels like a steady push, so students imagine the particles pressing on each other, and they overlook that the push comes from countless separate collisions.",
    reteach: "Gas pressure comes from the particles colliding with the walls of the container. Each particle that strikes a wall gives it a tiny force as it rebounds, and because huge numbers of particles hit the walls every second, those tiny forces add up to a steady push. The particles are far apart and barely attract, so they are not pushing on each other, the pressure is the force per unit area from all those wall collisions.",
    microExample: "Pressure = force per unit area from countless particles colliding with the walls, not particles pushing each other.",
    figure: "fig-08-06-gas-pressure-wall.svg",
    check: {
      question: "What causes the pressure a gas exerts on its container?",
      answer: "The gas particles constantly colliding with the walls and rebounding. Each collision gives a small force, and together they make a steady pressure."
    }
  },
  {
    id: "kin-pressure-2",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    label: "Volume change confused with a speed change",
    belief: "Squeezing a gas into a smaller volume makes its particles speed up, and that is why the pressure rises.",
    tell: "The student says a gas compressed at constant temperature has faster particles, or that expanding it slows them down.",
    whyItHappens: "Students know faster particles mean more pressure, so when the pressure rises on compression they assume the speed must have gone up, missing that at constant temperature the speed is unchanged.",
    reteach: "At a constant temperature the particles keep the same average speed, whether the gas is squeezed or spread out. What changes when you compress a gas is how crowded the particles are. In a smaller volume there are more particles in each unit of space, so they strike each part of the wall more often, and that more frequent hitting is what raises the pressure. The speed only changes if you change the temperature.",
    microExample: "Compress a gas at constant temperature: same particle speed, but more frequent wall hits, so higher pressure.",
    figure: "fig-08-07-piston.svg",
    check: {
      question: "When a gas is compressed at constant temperature, do its particles move faster?",
      answer: "No. Their speed is unchanged. The pressure rises because the particles are more crowded and hit the walls more often."
    }
  },
  {
    id: "kin-pressure-3",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    label: "Heating thought to make more gas particles",
    belief: "Heating a sealed gas raises the pressure because there are now more particles inside.",
    tell: "The student says warming a fixed mass of gas creates extra particles, which then push harder on the walls.",
    whyItHappens: "A rising pressure suggests more of something, so students imagine new particles appearing, forgetting that a sealed container keeps the number of particles fixed.",
    reteach: "Heating a sealed gas does not make any new particles, the number stays exactly the same. What changes is the speed of the particles. With more heat they gain kinetic energy and move faster, so they hit the walls more often and with greater force. That greater force per unit area is the higher pressure. So the pressure rises because the same particles move faster, not because there are more of them.",
    microExample: "Heat a sealed gas: same number of particles, but faster, so they hit harder and more often, raising pressure.",
    figure: "fig-08-06-gas-pressure-wall.svg",
    check: {
      question: "When a sealed gas is heated and its pressure rises, are there more particles inside?",
      answer: "No. The number of particles stays the same. The pressure rises because the particles move faster and hit the walls harder and more often."
    }
  },
  {
    id: "kin-pressure-4",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "gas-pressure",
    label: "Gas pressure blamed on the weight of particles",
    belief: "Gas pressure is caused by the weight of the particles pressing down on the walls.",
    tell: "The student says the pressure comes from the particles being heavy and pressing down, so they expect it only on the bottom wall.",
    whyItHappens: "Pressure from a solid or a liquid resting on a surface is due to weight, so students carry that idea over to a gas.",
    reteach: "Gas pressure is not caused by the weight of the particles. It comes from the particles moving rapidly and randomly and colliding with the walls in every direction. Because they move every way at once, they strike the top, the sides and the bottom of the container alike, so the pressure acts on all the walls, not just the base. It is the motion and the collisions that make the pressure, not the pull of gravity on the particles.",
    microExample: "Gas pressure acts on every wall, top and sides too, because it comes from random collisions, not from weight.",
    figure: "fig-08-06-gas-pressure-wall.svg",
    check: {
      question: "Does gas pressure come from the weight of the particles pressing down?",
      answer: "No. It comes from the fast, random particles colliding with the walls in all directions, so it acts on every wall equally."
    }
  },
  {
    id: "kin-diffusion-1",
    topicKey: "t7-kinetic-particle-model-of-matter",
    subtopic: "diffusion",
    label: "Diffusion blamed on draughts or gravity",
    belief: "A smell spreads across a room because a draught blows it or gravity carries the particles along.",
    tell: "The student explains diffusion by air currents, by gravity, or by the particles growing, rather than by their own random motion.",
    whyItHappens: "In real life a breeze does carry smells, so students reach for a draught or gravity instead of the random motion that spreads a smell even in perfectly still air.",
    reteach: "A smell spreads because its particles are in constant, random motion and move off in every direction, mixing in among the moving air particles until they reach right across the room. This happens even in perfectly still air with no draught at all. Gravity does not pull them sideways across the room, and the particles do not grow. It is the ceaseless random movement of the particles, spreading and mixing, that carries the smell.",
    microExample: "Perfume spreads in still air by the random motion of its particles mixing among the air particles.",
    figure: null,
    check: {
      question: "In perfectly still air, why does a smell still spread across a room?",
      answer: "Because the smell particles are in constant random motion and spread out in all directions, mixing among the air particles."
    }
  }
];
