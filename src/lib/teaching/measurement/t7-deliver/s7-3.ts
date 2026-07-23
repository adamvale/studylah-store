import type { Subconcept } from "@/lib/teaching/subconcepts";

// T7 Kinetic Particle Model of Matter, section 3. Grounded in KB Chapter 08 (Kinetic Particle Model) section 8.5.
// Conceptual section: no formulae, no calculations, no working blocks.
// Figure colour key (Ch08): particles = blue; attractive-force dashed bonds = grey dashed;
// vibration arcs and force-on-wall arrow = green; rebound/reaction arrow = pink; walls/cylinder/piston = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t7.3",
    code: "T7.3",
    title: "Explaining everyday properties with the model",
    blurb: "Tracing each observable property back to a single feature of the particles",
    steps: [
      {
        kind: "concept",
        heading: "Every property traces to one feature",
        body: "Each everyday property you can observe traces back to just one feature of the particles: their *motion*, their *arrangement*, the *attractive force* between them, or their *separation* (distance apart). Name the right feature and you have explained the property.",
        say: "Here is the whole trick of this section. Anything you can see or measure about a solid, a liquid or a gas comes down to 1 of just 4 features of the particles: how they move, how they are arranged, how strongly they attract, and how far apart they sit. To explain a property, you point to the 1 feature behind it.",
      },
      {
        kind: "concept",
        heading: "Matching properties to features",
        body: "Fixed volume of solids and liquids but not gases comes from *motion*: solid and liquid particles cannot travel away, while gas particles move freely and spread out. Fixed shape of solids comes from *arrangement*: a solid holds a regular pattern, while liquids and gases have none and flow. Higher melting and boiling points come from stronger *attractive forces*, which need more energy to overcome.",
        say: "Let us pin down the links. A fixed volume for solids and liquids, but not gases, is about motion: the particles in a solid or liquid cannot wander off, but gas particles move freely and fill any space. A fixed shape belongs to arrangement: solids keep a regular pattern, while liquids and gases have no fixed arrangement, so they flow. And a high melting or boiling point points to strong attractive forces, because it takes more energy to pull those particles apart.",
      },
      {
        kind: "concept",
        heading: "The syringe: air against water",
        body: "Seal a syringe and push the plunger. *Air* compresses a lot because gas particles are far apart with empty space between them to close up. *Water* barely moves because its particles are already close and touching, so a liquid is almost incompressible. The difference is *separation*, the distance between particles.",
        say: "Picture 2 sealed syringes, 1 full of air and 1 full of water. Push each plunger. The air one squashes right down because gas particles are spread out with plenty of empty space to close up. The water one hardly budges, because liquid particles are already packed close and touching, with almost no gaps to remove. The single feature that explains the difference is separation, how far apart the particles sit.",
      },
      {
        kind: "match",
        prompt: "Match each observation to the key feature that explains it.",
        pairs: [
          { left: "Solids and liquids keep a fixed volume, but a gas does not", right: "Motion" },
          { left: "A solid keeps a fixed shape, but a liquid flows to fit its container", right: "Arrangement" },
          { left: "A solid has a much higher melting point than a similar liquid substance", right: "Attractive force" },
          { left: "A gas compresses easily, but a liquid barely compresses at all", right: "Distance between particles" },
        ],
        ask: "For each observation, ask which single feature it depends on: how the particles move, how they are arranged, how strongly they attract, or how far apart they are.",
        hints: [
          "Spreading out or staying put is about motion; keeping or losing a shape is about arrangement.",
          "Needing lots of energy to break apart is about attractive force; squashing into empty gaps is about distance.",
        ],
        explain: "Fixed volume is explained by motion, a fixed shape by arrangement, a high melting point by strong attractive forces, and easy compression by the large distance between gas particles.",
      },
      {
        kind: "choice",
        question: "You seal the nozzle of a syringe and push the plunger. An air-filled syringe compresses a lot, but a water-filled syringe barely moves. Why?",
        options: [
          "Water particles repel the plunger, but air particles do not",
          "Air weighs less than water, so any gas will always compress",
          "Air particles are far apart with empty space to close up, while water particles are already close and touching",
          "Air particles shrink under the push, but water particles are too hard to shrink",
        ],
        correct: 2,
        ask: "Think about the separation of the particles. In which one is there empty space between particles for the plunger to close up?",
        hints: [
          "A gas has large empty gaps between its particles; a liquid has almost none.",
          "The water hardly moves because its particles are already close and touching, so there is nothing to squash out.",
        ],
        explain: "The air compresses because gas particles are far apart with empty space to close up, while the water barely moves because its particles are already close and touching. Particles do not shrink; only the spaces between them change.",
      },
      {
        kind: "spoterror",
        prompt: "A student explains why a gas spreads out to fill its whole container. One line contains a mistake. Which line is wrong?",
        lines: [
          "A gas is made of tiny particles with only very weak attractive forces between them.",
          "The particles are in continuous, rapid, random motion in all directions.",
          "Because the forces are too weak to hold them together, the particles move freely and spread out.",
          "As they spread, the gas particles themselves grow bigger to fill all the space.",
          "So the gas ends up taking the shape and the whole volume of its container.",
        ],
        errorLine: 3,
        ask: "Particles never change their own size. Find the line that claims a particle itself gets bigger rather than just moving further apart.",
        hints: [
          "Spreading out means the particles move into the empty spaces, not that each particle swells up.",
          "Look closely at the line that says the particles grow bigger.",
        ],
        explain: "The wrong line is the 1 saying the gas particles grow bigger to fill the space. Particles keep the same size; the gas fills the container because the particles move apart into the empty spaces between them.",
      },
      {
        kind: "open",
        prompt: "Explain, in terms of particles, why a solid keeps a fixed shape while a liquid flows and takes the shape of its container.",
        modelAnswer:
          "In a solid the particles are held in a regular, fixed arrangement by strong attractive forces, so they only vibrate about fixed positions and cannot move past one another; this fixed arrangement gives the solid a definite shape. In a liquid the forces are weaker and there is no fixed arrangement, so the particles can slide past one another; because they can move around, the liquid has no fixed shape and flows to take the shape of its container.",
        marks: [
          "Solid particles are in a fixed, regular arrangement and only vibrate in place, so the shape is fixed.",
          "Liquid particles have no fixed arrangement and can slide past one another.",
          "Because liquid particles can move around, the liquid flows and takes the container's shape.",
        ],
        ask: "Compare the arrangement and movement of the particles in each state, and link a fixed arrangement to a fixed shape and free sliding to flowing.",
      },
      {
        kind: "insight",
        body: "To explain any property, first pick the one feature behind it: *motion*, *arrangement*, *attractive force* or *separation*. Then say how that feature makes the property happen.",
        say: "Keep this method. Whenever you are asked why a solid, liquid or gas behaves a certain way, first decide which 1 of the 4 features is doing the work: motion, arrangement, attractive force or separation. Then explain, in a sentence, how that feature produces what you observe. That 2 step habit answers almost every question in this topic.",
      },
    ],
  },
];
