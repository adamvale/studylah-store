import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, Work and Power, section 1. Grounded in KB Chapter 07 (Energy, Work and Power).
// Figure colours follow the T6 colour key: lifting/applied force = yellow, weight and the
// gravitational potential store = pink, motion/speed/kinetic store = blue, objects (container,
// wheel) = white, boundary/container/ground/height guides = grey, and the NEW lock for this
// topic, a flame or heat source (the Bunsen burner) = amber/orange.
// Handoff note: please lock "amber = heat source / flame" for Coddy Code.

export const BOXES: Subconcept[] = [
  {
    id: "t6.1",
    code: "T6.1",
    title: "Systems and energy stores",
    blurb: "What a system is, what energy is, and the stores that energy is held in",
    steps: [
      {
        kind: "concept",
        heading: "A system and its surroundings",
        figure: "fig-07-01-energy-system",
        body: "A *system* is the object, or group of objects, we choose to study. Everything outside it is the *surroundings*, and a *boundary* marks where one ends and the other begins.",
        say: "In the picture a grey dashed boundary is drawn around what we have chosen to study. Inside sits a grey metal container holding blue water, and underneath it an amber Bunsen-burner flame heats the water. The container and the water are the system. The flame and the air outside the grey boundary are the surroundings. Choosing the system is just deciding where to draw that boundary.",
      },
      {
        kind: "concept",
        heading: "Energy and the joule",
        body: "*Energy* is the capacity to do *work*. Its SI unit is the *joule*, written with the symbol J.",
        say: "Energy is what lets a system do work, whether that means lifting, heating or moving something. We measure it in joules. 1 joule is a small amount, roughly the energy needed to lift a small apple by 1 metre, so everyday situations often run into thousands of joules.",
      },
      {
        kind: "concept",
        heading: "Energy stores",
        figure: "fig-07-02-energy-stores-waterfall",
        body: "An *energy store* is a way that energy is *held*. A moving object has a *kinetic store*, and an object raised up high has a *gravitational potential store*.",
        say: "This figure shows a waterfall. The blue water resting at the top holds a gravitational potential store, because it has been raised up. As it drops, the blue falling water speeds up and holds a kinetic store. At the bottom a grey wheel spins, and its turning holds a kinetic store too. The other stores you must know are the elastic potential store in a stretched, squashed or twisted object, the internal or thermal store in a hot object, the chemical potential store in food, fuel or a battery, and the nuclear store in the nucleus.",
      },
      {
        kind: "choice",
        question: "A beaker of water is heated over a flame. If we choose the water as our system, what are the flame and the air around it?",
        figure: "fig-07-01-energy-system",
        options: ["The surroundings", "Part of the system", "Also the water", "The boundary"],
        correct: 0,
        ask: "A system is only the part we choose to study. Everything outside its boundary has another name.",
        hints: [
          "We chose the water as the system, so anything outside it is not part of the system.",
          "Everything outside the boundary of a system is called the surroundings.",
        ],
        explain: "The flame and the air are the surroundings, because a system is only the part we choose to study, here the water, and everything outside its boundary is the surroundings.",
      },
      {
        kind: "choice",
        question: "What is the SI unit of energy?",
        options: ["The joule (J)", "The newton (N)", "The watt (W)", "The second (s)"],
        correct: 0,
        ask: "Energy is the capacity to do work, and its unit is named after the scientist James Joule.",
        hints: [
          "The newton measures force and the watt measures power.",
          "The unit of energy shares its name with James Joule.",
        ],
        explain: "Energy is measured in joules, symbol J. The newton measures force, the watt measures power, and the second measures time.",
      },
      {
        kind: "classify",
        prompt: "Sort each example into the energy store it mainly fills.",
        bins: ["Kinetic store", "Gravitational potential store", "Chemical potential store"],
        items: [
          { text: "A car driving along a road", bin: 0 },
          { text: "A running athlete", bin: 0 },
          { text: "A book resting on a high shelf", bin: 1 },
          { text: "A diver standing on a high board", bin: 1 },
          { text: "The petrol in a fuel tank", bin: 2 },
          { text: "A charged battery", bin: 2 },
        ],
        ask: "A moving object fills a kinetic store, a raised object fills a gravitational potential store, and fuel, food or a battery holds a chemical potential store. Tap each example and drop it in its bin.",
        hints: [
          "Anything that is moving belongs in the kinetic store.",
          "Petrol and a battery both hold energy in chemical bonds.",
        ],
        explain: "A driving car and a running athlete are moving, so they fill kinetic stores. A book on a high shelf and a diver on a high board have been raised up, so they fill gravitational potential stores. The petrol and the battery hold chemical potential stores.",
      },
      {
        kind: "match",
        prompt: "Match each energy store to an object that fills it.",
        pairs: [
          { left: "Kinetic store", right: "A moving car" },
          { left: "Gravitational potential store", right: "A book on a high shelf" },
          { left: "Elastic potential store", right: "A stretched spring" },
          { left: "Internal (thermal) store", right: "A hot cup of tea" },
        ],
        ask: "Match by what each store depends on: movement, height, stretch or temperature.",
        hints: [
          "A moving object fills a kinetic store, and a raised object fills a gravitational potential store.",
          "A stretched spring holds an elastic potential store, and a hot drink holds an internal store.",
        ],
        explain: "A moving car fills a kinetic store, a raised book fills a gravitational potential store, a stretched spring fills an elastic potential store, and a hot cup of tea fills an internal, or thermal, store.",
      },
      {
        kind: "insight",
        body: "An object can hold energy in *several stores at once*: a hot, moving, raised ball fills its *internal*, *kinetic* and *gravitational potential* stores together.",
        say: "Keep one idea in mind. Stores are not exclusive. A single object can fill several of them at the same time. A hot ball thrown upward holds an internal store because it is warm, a kinetic store because it is moving, and a gravitational potential store because it is high up, all at once.",
      },
    ],
  },
];
