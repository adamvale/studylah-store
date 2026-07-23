import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 1. Grounded in KB Chapter 03 (Mass and Weight) section 3.1.

export const BOXES: Subconcept[] = [
  {
    id: "t3.1",
    code: "T3.1",
    title: "Forces: contact and non-contact",
    blurb: "What a force is, and the two families every force belongs to",
    steps: [
      {
        kind: "concept",
        heading: "What a force is",
        figure: "fig-04-01-push-pull",
        body: "A *force* is a *push* or a *pull* that one object exerts on another. A force is measured in *newtons*.",
        say: "A force is simply a push or a pull of one object on another. In the top half the yellow arrow presses the box from behind, and that is a push. In the bottom half the yellow arrow tugs the box from the front, and that is a pull. Both drive the box the same way; what changes is where the force is applied. Both are forces, and we measure their size in newtons.",
      },
      {
        kind: "concept",
        heading: "Two families of force",
        body: "Every force belongs to one of 2 families. A *contact force* acts only while the two objects are *touching*. A *non-contact force* reaches across an empty *gap*, with no touching at all.",
        say: "Every force falls into one of 2 families. A contact force only acts while the 2 objects are actually touching. A non-contact force is different: it reaches across an empty gap and pulls or pushes without any touching. That single question, does anything have to touch, is how you tell them apart.",
      },
      {
        kind: "concept",
        heading: "Contact forces",
        figure: "fig-03-01-normal-force",
        body: "*Contact forces* act only where surfaces meet. The common ones are *friction*, the *normal force* that a surface pushes back with, and *tension* in a stretched string.",
        say: "Here is a block resting on a surface. The upward green arrow is the normal force, the support the surface pushes back with, always at right angles to the surface. Friction and tension are contact forces too. Each one needs the objects to be touching before it can act.",
      },
      {
        kind: "concept",
        heading: "Non-contact forces",
        figure: "fig-03-03-two-masses-attract",
        body: "*Non-contact forces* act across empty space. The three you must know are the *gravitational force*, the *magnetic force*, and the *electrostatic force*.",
        say: "In this diagram 2 masses pull on each other across a gap, with no string and no contact between them. That pull is the gravitational force, a non-contact force. Magnetism and the force between electric charges work the same way, reaching across space without touching.",
      },
      {
        kind: "choice",
        question: "Which of the following is a non-contact force?",
        options: ["Friction", "Tension", "The normal force", "The gravitational force"],
        correct: 3,
        ask: "Ask yourself which one can still act when the 2 objects have a gap between them and are not touching.",
        hints: [
          "Friction, tension and the normal force all need surfaces to be in contact.",
          "Gravity pulls the Moon toward the Earth across empty space, with nothing touching.",
        ],
        explain: "The gravitational force is the non-contact force here. Friction, tension and the normal force can only act while surfaces are touching, so all 3 are contact forces.",
      },
      {
        kind: "classify",
        prompt: "Sort each force into the correct family.",
        bins: ["Contact", "Non-contact"],
        items: [
          { text: "friction", bin: 0 },
          { text: "tension", bin: 0 },
          { text: "normal force", bin: 0 },
          { text: "gravitational force", bin: 1 },
          { text: "magnetic force", bin: 1 },
          { text: "electrostatic force", bin: 1 },
        ],
        ask: "For each force, ask whether the objects must be touching for it to act. If they must, it is a contact force. Tap each one and drop it in its bin.",
        hints: [
          "Friction, tension and the normal force all rely on surfaces meeting.",
          "Gravity, magnetism and the force between charges all reach across a gap.",
        ],
        explain: "Friction, tension and the normal force are contact forces, because they only act where surfaces meet. The gravitational, magnetic and electrostatic forces are non-contact forces, because each one acts across empty space.",
      },
      {
        kind: "choice",
        question: "A magnet lifts a steel pin without touching it. What does this show about the magnetic force?",
        options: ["It is a contact force", "It is a non-contact force", "It is a kind of friction", "It is not a real force"],
        correct: 1,
        ask: "The magnet does its work through a gap, without touching the pin. Which family does that put it in?",
        hints: [
          "A contact force would need the magnet and pin to be touching.",
          "Acting across a gap with no touching is the mark of a non-contact force.",
        ],
        explain: "It shows the magnetic force is a non-contact force, because it acts across the gap between the magnet and the pin without them touching.",
      },
      {
        kind: "match",
        prompt: "Match each force to the correct family.",
        pairs: [
          { left: "Friction", right: "Contact" },
          { left: "Tension", right: "Contact" },
          { left: "Gravitational force", right: "Non-contact" },
          { left: "Electrostatic force", right: "Non-contact" },
        ],
        ask: "Sort by the touching test: does the force need the objects to be in contact, or can it act across a gap?",
        hints: [
          "Friction and tension both need surfaces to be touching.",
          "The gravitational and electrostatic forces both act across empty space.",
        ],
        explain: "Friction and tension are contact forces that need touching. The gravitational and electrostatic forces are non-contact forces that act across a gap.",
      },
      {
        kind: "insight",
        body: "The test is simple: if the objects must *touch* for the force to act, it is a *contact force*. If it works across a *gap*, it is a *non-contact force*.",
        say: "Hold on to one quick test. If the 2 objects have to be touching, the force is a contact force. If the force can reach across an empty gap, it is a non-contact force. That one question sorts every force you will meet in this topic.",
      },
    ],
  },
];