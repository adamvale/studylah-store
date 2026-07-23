import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical), section 1. Grounded in Practical Chapter 03: forces and Newton's laws.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.1",
    code: "TP3.1",
    title: "Forces and Newton's laws",
    blurb: "What a force is, the contact and non-contact families, and Newton's 3 laws",
    steps: [
      {
        kind: "concept",
        heading: "What a force is",
        body: "A *force* is a *push* or a *pull*. A force can change an object's shape or its motion, and it is measured in newtons with a spring balance.",
        say: "A force is just a push or a pull that one object exerts on another. Give it a big enough push or pull and you can change the object's shape, squashing or stretching it, or change its motion, speeding it up, slowing it down or turning it. We measure force in newtons, and the everyday tool for reading a force directly is a spring balance, also called a newton-meter.",
      },
      {
        kind: "concept",
        heading: "Contact and non-contact forces",
        body: "A *contact force* acts only while the 2 objects are *touching*. A *non-contact force* reaches across an empty *gap*: gravitational, magnetic and electrostatic forces are the 3 you must know.",
        say: "Every force falls into one of 2 families. A contact force only acts while the 2 objects are actually touching, like the normal reaction, tension and friction. A non-contact force reaches across an empty gap with no touching at all. The 3 non-contact forces to remember are the gravitational force, the magnetic force and the electrostatic force between charges.",
      },
      {
        kind: "concept",
        heading: "3 contact forces and their directions",
        figure: "fig-pr3-01-contact-forces",
        body: "The *normal reaction* acts *perpendicular* to a surface. *Tension* pulls along a string, away from the object. Friction opposes the relative sliding between surfaces.",
        say: "Look at the pale blue block resting on a grey bench. The red arrow pointing straight down is its weight. The green arrow pointing straight up is the normal reaction, and notice it is perpendicular, at right angles to the surface. The amber arrow is the tension in the rope, pulling along the string and away from the block. The blue arrow is friction, and it points backwards, opposing the direction the block is being dragged. So remember: normal reaction is perpendicular, tension pulls along the string away from the object, and friction opposes the relative sliding.",
      },
      {
        kind: "concept",
        heading: "Newton's first law",
        body: "An object stays at *rest*, or keeps moving at *constant velocity*, unless a *resultant force* acts on it. This reluctance to change motion is called *inertia*.",
        say: "Newton's first law says that an object left alone will not change what it is doing. If it is at rest it stays at rest, and if it is moving it keeps going at constant velocity, in a straight line at steady speed, unless a resultant force acts on it. That built-in reluctance to change its motion is called inertia, and more massive objects have more of it.",
      },
      {
        kind: "concept",
        heading: "Newton's second law",
        body: "A *resultant force* makes an object *accelerate* in the *direction* of that force. The bigger the force or the smaller the mass, the larger the acceleration.",
        formula: {
          latex: "F = ma",
          where: [
            { sym: "F", meaning: "resultant force", unit: "N" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "a", meaning: "acceleration", unit: "m/s^2" },
          ],
        },
        say: "Newton's second law tells us what a resultant force actually does: it makes the object accelerate in the same direction as the force. The link is force equals mass times acceleration. So for a given mass, a bigger resultant force gives a bigger acceleration, and for a given force, a heavier object accelerates less. One newton is the force that gives a mass of 1 kilogram an acceleration of 1 metre per second squared.",
      },
      {
        kind: "insight",
        body: "Newton's third law: every *action* has an *equal* and *opposite* reaction. The 2 forces act on different objects, so they never cancel out.",
        say: "Newton's third law says that if object A pushes on object B, then B pushes back on A with a force that is equal in size and opposite in direction. The key point students miss is that the 2 forces act on different objects, one on A and one on B, so they do not cancel each other out. When you step forward, your foot pushes the ground backwards, and the ground pushes you forwards.",
      },
      {
        kind: "choice",
        question: "A spring balance is used to measure which quantity?",
        options: ["Force, in newtons", "Mass, in kilograms", "Density, in g/cm^3", "Time, in seconds"],
        correct: 0,
        ask: "Think about what a force is measured in, and the tool you would read it off directly.",
        hints: [
          "A spring balance stretches more when you pull it harder.",
          "The scale on a spring balance is marked in newtons.",
        ],
        explain: "A spring balance measures force, in newtons. Its spring stretches in proportion to the pull, so the scale can be marked directly in newtons.",
      },
      {
        kind: "classify",
        prompt: "Sort each force into the correct family.",
        bins: ["Contact", "Non-contact"],
        items: [
          { text: "friction", bin: 0 },
          { text: "tension", bin: 0 },
          { text: "normal reaction", bin: 0 },
          { text: "gravitational force", bin: 1 },
          { text: "magnetic force", bin: 1 },
          { text: "electrostatic force", bin: 1 },
        ],
        ask: "For each force, ask whether the objects must be touching for it to act. If they must, it is a contact force. Tap each one and drop it in its bin.",
        hints: [
          "Friction, tension and the normal reaction all rely on surfaces meeting.",
          "The gravitational, magnetic and electrostatic forces all reach across a gap.",
        ],
        explain: "Friction, tension and the normal reaction are contact forces, because they only act where surfaces touch. The gravitational, magnetic and electrostatic forces are non-contact forces, because each one acts across empty space.",
      },
      {
        kind: "match",
        prompt: "Match each contact force to the direction in which it acts.",
        pairs: [
          { left: "Normal reaction", right: "Perpendicular to the surface" },
          { left: "Tension", right: "Along the string, away from the object" },
          { left: "Friction", right: "Opposes the relative sliding" },
        ],
        ask: "Picture the block on the bench: which way does each arrow point? One is at right angles to the surface, one runs along the rope, and one points backwards against the sliding.",
        hints: [
          "The normal reaction is always at right angles to the surface it pushes on.",
          "Friction always points the opposite way to the sliding, never with it.",
        ],
        explain: "The normal reaction acts perpendicular to the surface. Tension acts along the string, away from the object. Friction acts to oppose the relative sliding between the surfaces.",
      },
      {
        kind: "choice",
        question: "A trolley is moving along a smooth level track with no resultant force on it. What does Newton's first law predict?",
        options: ["It speeds up steadily", "It slows down and stops", "It keeps moving at constant velocity", "It changes direction"],
        correct: 2,
        ask: "With no resultant force, the object's motion does not change. It was already moving, so what happens next?",
        hints: [
          "Newton's first law says motion only changes when a resultant force acts.",
          "No resultant force means no change: same speed, same direction.",
        ],
        explain: "It keeps moving at constant velocity. With no resultant force, Newton's first law says the motion does not change, so the trolley carries on at the same speed in the same direction.",
      },
      {
        kind: "choice",
        question: "A swimmer pushes backwards on the water and moves forwards. Which of Newton's laws best explains this?",
        options: ["First law (inertia)", "Second law (F = ma)", "Third law (equal and opposite)", "None of Newton's laws"],
        correct: 2,
        ask: "There are 2 forces here on 2 different objects: the swimmer on the water, and the water on the swimmer. Which law pairs those?",
        hints: [
          "The swimmer pushes the water back; the water pushes the swimmer forward.",
          "Equal and opposite forces on 2 different objects is the third law.",
        ],
        explain: "This is Newton's third law. The swimmer pushes the water backwards, and the water pushes the swimmer forwards with an equal and opposite force. The 2 forces act on different objects.",
      },
    ],
  },
];
