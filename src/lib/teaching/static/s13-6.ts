import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, section 6. Grounded in KB Chapter 15 (Static Electricity) sections 15.9, 15.10.
// Conceptual only: no calculations, no working, no formula. Figure colours follow the T13 key:
// positive charge/plate = red, negative charge/grid = blue, earth wire/moving electrons = amber,
// neutral metal (panel, chain, pipe) = white, field guides = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t13.6",
    code: "T13.6",
    title: "Hazards and useful applications",
    blurb: "When static charge is dangerous, and how engineers put it to work",
    steps: [
      {
        kind: "concept",
        heading: "Why flowing fuel is dangerous",
        figure: "fig-15-15-fuelling-hazard",
        body: "When *fuel* or a fine *powder* rushes through a pipe it rubs the walls and builds up *static charge* by friction. If enough charge collects, a sudden *spark* can jump and set the fuel alight.",
        say: "Look at the fuel flowing through the white pipe. As it rushes past the walls it rubs against them, and friction charges the fuel and the pipe oppositely, shown by the red plus signs and the blue minus signs. That trapped charge is dangerous, because if it grows large enough a spark can jump across a gap and ignite the fuel or the fumes.",
      },
      {
        kind: "concept",
        heading: "Draining the charge away",
        figure: "fig-15-15-fuelling-hazard",
        body: "The cure is to *earth* the equipment: a metal *chain* or wire links it to the ground so the charge leaks safely away before it can *spark*. Vehicles and aircraft also charge up moving through *dry air*, so carbon tyres and trailing discharge rods let that charge escape.",
        say: "The safety trick is earthing. In the picture an amber earthing chain runs from the metal down to the ground. It gives the charge an easy path to Earth, so it drains away steadily instead of building up until it sparks. A car or an aircraft charges up as it moves through dry air, so its tyres contain carbon and it carries discharge rods, letting the charge leak away quietly.",
      },
      {
        kind: "concept",
        heading: "Spray painting a smooth coat",
        figure: "fig-15-16-spray-painting",
        body: "In *spray painting* the gun gives every droplet the *same charge*, so the droplets *repel* one another and spread into an *even mist*. The panel is earthed so it attracts the droplets, wrapping paint even onto the hidden sides with little waste.",
        say: "Here the spray gun gives every paint droplet the same charge, drawn as red plus signs. Because like charges repel, the droplets push apart and fan out into an even mist instead of clumping. The white metal panel is earthed, so it pulls the charged droplets towards it, even curving them round to coat the back. The result is a smooth, even layer with very little paint wasted.",
      },
      {
        kind: "concept",
        heading: "Cleaning smoke with charge",
        figure: "fig-15-17-precipitator",
        body: "An *electrostatic precipitator* cleans chimney smoke. A *negative grid* charges the passing *dust*, and large *positive plates* then attract and collect it, so the gas leaving the top is clean.",
        say: "This is a precipitator inside a chimney. The dirty gas rises past a blue negative grid, which charges the dust particles. Those charged specks are then pulled onto the big red positive collecting plates and stick there. Every so often the plates are shaken so the dust falls into a hopper, and the gas that escapes from the top is clean.",
      },
      {
        kind: "match",
        prompt: "Match each situation to whether static charge is a hazard or a useful application.",
        pairs: [
          { left: "Fuel flowing through a refuelling pipe", right: "Hazard" },
          { left: "A powder pouring down a chute", right: "Hazard" },
          { left: "Spray painting a car panel", right: "Useful application" },
          { left: "An electrostatic precipitator in a chimney", right: "Useful application" },
        ],
        ask: "Decide whether the charge could cause a spark and start a fire, or whether it is being used on purpose to do a job.",
        hints: [
          "Fuel and powder rushing through a pipe charge up by friction, and a spark there is dangerous.",
          "Spray painting and the precipitator both put charge to work deliberately.",
        ],
        explain: "Fuel and powder flowing through pipes charge up by friction and risk a spark, so they are hazards. Spray painting and the precipitator use charge on purpose, so they are useful applications.",
      },
      {
        kind: "choice",
        question: "Why is a tanker earthed with a metal chain before fuel is pumped into it?",
        options: [
          "To cool the fuel as it flows",
          "To make the fuel flow faster",
          "To drain the static charge away so no spark can form",
          "To add extra charge to the fuel",
        ],
        correct: 2,
        ask: "Earthing gives the charge a path to the ground. Think about what you are trying to stop from happening.",
        hints: [
          "The flowing fuel builds up static charge by friction.",
          "If that charge is drained safely to Earth, it cannot build up and spark.",
        ],
        explain: "The chain earths the tanker so the static charge drains safely to the ground. That stops the charge building up until a spark jumps and ignites the fuel.",
      },
      {
        kind: "choice",
        question: "In spray painting, why do the paint droplets spread out into an even mist?",
        options: [
          "They carry opposite charges and attract each other",
          "They all carry the same charge, and like charges repel",
          "They have no charge, so they drift apart on their own",
          "The earthed panel pushes them apart",
        ],
        correct: 1,
        ask: "The gun gives every droplet the same kind of charge. Think about how 2 charges of the same sign behave.",
        hints: [
          "Every droplet leaves the gun with the same charge.",
          "Like charges repel, so the droplets push away from each other.",
        ],
        explain: "The gun charges every droplet the same, so the droplets repel one another, because like charges repel. That pushes them apart into an even mist.",
      },
      {
        kind: "order",
        prompt: "Put the steps of an electrostatic precipitator in the correct order.",
        items: [
          "Dirty gas carrying dust rises up the chimney",
          "The negative grid gives the dust particles a charge",
          "The charged dust is attracted to the positive collecting plates",
          "Clean gas leaves the top of the chimney",
        ],
        ask: "Follow one dust particle from the moment it enters the chimney to the moment the gas is clean.",
        hints: [
          "The dust must first be charged before a plate can attract it.",
          "Only once the dust is collected on the plates can the gas leave clean.",
        ],
        explain: "The dirty gas rises, the negative grid charges the dust, the positive plates attract and collect the charged dust, and then clean gas leaves the top.",
      },
      {
        kind: "open",
        prompt: "Explain how giving paint droplets an electric charge helps produce a smooth, even coat with little waste when spray painting a metal panel.",
        figure: "fig-15-16-spray-painting",
        modelAnswer: "The spray gun gives every droplet the same charge. Because like charges repel, the droplets push apart and spread into an even mist rather than clumping. The metal panel is earthed, so it attracts the charged droplets and even pulls them round to coat the hidden sides. This gives a smooth, even layer and wastes very little paint because most droplets land on the panel.",
        marks: [
          "All droplets are given the same charge.",
          "Like charges repel, so the droplets spread into an even mist.",
          "The panel is earthed, so it attracts the charged droplets.",
          "This gives a smooth even coat with little waste.",
        ],
        ask: "Talk about the charge on the droplets, how like charges behave, and why the earthed panel attracts them.",
      },
      {
        kind: "insight",
        body: "The same idea underlies both sides: uncontrolled charge on flowing *fuel* is a *spark* hazard you must *earth* away, while controlled charge is a tool that spreads *paint* evenly and traps dust from smoke.",
        say: "Here is the thread to hold on to. Static charge is neither purely good nor purely bad. Left uncontrolled on flowing fuel or powder it can spark and start a fire, so you earth it away. Controlled on purpose, the very same repulsion and attraction spread paint into an even coat and pull dust out of chimney smoke. Same physics, opposite outcomes.",
      },
    ],
  },
];
