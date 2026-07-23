import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, Revision 1. Checkpoint over KB Chapter 07 (Energy, Work and Power),
// sections t6.1 to t6.3: systems and energy stores, energy transfer and pathways,
// and the kinetic and gravitational potential stores. Question-only.
// Figures on choice/open follow the carry-over colour key: lifting force = yellow,
// weight and the gravitational potential store = pink, motion and the kinetic store = blue,
// objects (apple, crate) = white, ground / height guides / arrows = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t6.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: systems, energy stores, transfers and the kinetic and gravitational potential stores",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "In the waterfall shown, which energy store does the water at the top of the fall mainly hold?",
        figure: "fig-07-02-energy-stores-waterfall",
        options: ["Gravitational potential store", "Kinetic store", "Elastic potential store", "Internal (thermal) store"],
        correct: 0,
        ask: "The water at the top has been raised up high above the pool below. Which store does a raised object hold? Which option is that?",
        hints: [
          "A raised object holds a gravitational potential store because of its height.",
          "The falling water is the part that holds a kinetic store; the water still at the top is raised up, not yet rushing down.",
        ],
        explain: "The water at the top holds a gravitational potential store, because it has been raised up high. As it falls, that store empties into a kinetic store, which then spins the wheel.",
      },
      {
        kind: "choice",
        question: "What is the SI unit of energy?",
        options: ["The joule (J)", "The newton (N)", "The watt (W)", "The second (s)"],
        correct: 0,
        ask: "Energy is the capacity to do work, and work and energy share the same unit. Which option is that unit?",
        hints: [
          "The newton measures force, the watt measures power and the second measures time.",
          "Energy and work are both measured in joules, with the symbol J.",
        ],
        explain: "Energy is measured in joules, symbol J. The newton is the unit of force, the watt is the unit of power, and the second is the unit of time.",
      },
      {
        kind: "choice",
        question: "The apple falls from the branch to the ground. Energy is transferred from store A to store B. What are store A and store B?",
        figure: "fig-07-04-store-boxes-transfer",
        options: [
          "Gravitational potential store to kinetic store",
          "Kinetic store to gravitational potential store",
          "Chemical store to kinetic store",
          "Elastic potential store to internal store",
        ],
        correct: 0,
        ask: "On the branch the apple is raised up high; near the ground it is moving fast. Which store empties and which one fills? Which option matches?",
        hints: [
          "Store A, up on the branch, is the store a raised object holds.",
          "As the apple speeds up on the way down, its kinetic store grows, so store B is the kinetic store.",
        ],
        explain: "As the apple falls, its gravitational potential store (store A) empties into its kinetic store (store B), so it speeds up. Energy is transferred, not created.",
      },
      {
        kind: "choice",
        question: "A ball of mass 0.80 kg moves at a speed of 2.0 m/s. Calculate its kinetic energy E_k, using E_k = 1/2 m v^2.",
        options: ["1.6 J", "0.8 J", "3.2 J", "1.6 N"],
        correct: 0,
        ask: "Use kinetic energy equals a half times mass times speed squared. First square the speed, then multiply by the mass and by a half.",
        hints: [
          "Square the speed first: 2.0 squared is 4.0.",
          "A half times 0.80 times 4.0 is 1.6, and energy is measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "E_k = \\tfrac{1}{2} m v^2" },
          { label: "Substitute", latex: "E_k = \\tfrac{1}{2} \\times 0.80 \\times 2.0^2" },
          { label: "Answer", latex: "E_k = 1.6\\ \\text{J}" },
        ],
        explain: "The kinetic energy is 1.6 joules. Squaring 2.0 metres per second gives 4.0, and a half times 0.80 kilograms times 4.0 is 1.6 joules. The answer is an energy in joules, not a force in newtons.",
      },
      {
        kind: "choice",
        question: "A block of weight 30 N is lifted through a vertical height of 3 m. Using E_p = W h, calculate its gain in gravitational potential energy.",
        figure: "fig-07-05-lifting-pe",
        options: ["90 J", "10 J", "33 J", "270 J"],
        correct: 0,
        ask: "When you already know the weight, the gravitational potential energy is weight times height. Work out 30 times 3.",
        hints: [
          "The weight is already the mass times g part, so E_p equals weight times height.",
          "30 times 3 is 90, and energy is measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "E_p = Wh" },
          { label: "Substitute", latex: "E_p = 30 \\times 3" },
          { label: "Answer", latex: "E_p = 90\\ \\text{J}" },
        ],
        explain: "The gain in gravitational potential energy is 90 joules, because the weight of 30 newtons times the vertical height of 3 metres is 90 joules.",
      },
      {
        kind: "classify",
        prompt: "Sort each example by the main energy store it holds.",
        bins: ["Kinetic store", "Gravitational potential store", "Chemical store"],
        items: [
          { text: "a car driving along a road", bin: 0 },
          { text: "a bird flying through the air", bin: 0 },
          { text: "a book resting on a high shelf", bin: 1 },
          { text: "a diver standing on a high board", bin: 1 },
          { text: "petrol in a fuel tank", bin: 2 },
          { text: "a charged battery", bin: 2 },
        ],
        ask: "For each one, ask what the object is doing. Is it moving, is it raised up high, or does it hold energy in its chemical bonds? Tap each one and drop it in its bin.",
        hints: [
          "A moving object holds a kinetic store; a raised object holds a gravitational potential store.",
          "Fuel and a battery both hold a chemical store in their bonds.",
        ],
        explain: "A moving car and a flying bird hold kinetic stores. A book on a high shelf and a diver on a high board hold gravitational potential stores. Petrol and a charged battery hold chemical stores.",
      },
      {
        kind: "match",
        prompt: "Match each situation to the pathway that transfers the energy.",
        pairs: [
          { left: "A hand pushes a box across the floor", right: "Mechanically" },
          { left: "A hot pan warms the water inside it", right: "By heating" },
          { left: "A lamp lights up a dark room", right: "By waves" },
          { left: "A cell drives a small motor", right: "Electrically" },
        ],
        ask: "For each one, ask how the energy actually travels: a force moving something, a flow from hot to cold, light or sound spreading out, or a current in a circuit. Join each situation to its pathway.",
        hints: [
          "A pushing force acting over a distance is the mechanical pathway; a current in a circuit is the electrical pathway.",
          "Energy flowing from a hotter object to a cooler one is heating; light and sound travel by waves.",
        ],
        explain: "Pushing a box is a mechanical pathway, a hot pan warming water is heating, a lamp lighting a room is by waves, and a cell driving a motor is electrical.",
      },
      {
        kind: "tiles",
        prompt: "A 0.40 kg apple is lifted 12 m. Take g = 10 N/kg. Build the working line that gives its gravitational potential energy E_p.",
        tiles: ["E_p =", "0.40", "\\times", "10", "\\times", "12", "=", "48", "J", "N", "24"],
        answer: ["E_p =", "0.40", "\\times", "10", "\\times", "12", "=", "48", "J"],
        ask: "Gravitational potential energy is mass times g times height. Set up 0.40 times 10 times 12.",
        hints: [
          "Use E_p equals mass times g times height, with g equal to 10.",
          "0.40 times 10 is 4, and 4 times 12 is 48, measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "E_p = mgh" },
          { label: "Substitute", latex: "E_p = 0.40 \\times 10 \\times 12" },
          { label: "Answer", latex: "E_p = 48\\ \\text{J}" },
        ],
        explain: "The gravitational potential energy is 48 joules, because 0.40 kilograms times 10 newtons per kilogram times 12 metres is 48 joules.",
      },
      {
        kind: "order",
        prompt: "Put these steps for finding an object's gravitational potential energy in order.",
        items: [
          "Write down the mass, in kg",
          "Note the value of g, in N/kg",
          "Measure the vertical height raised, in m",
          "Multiply mass by g by height to get E_p, in J",
        ],
        ask: "Think about which quantities you must gather before you can multiply them together. Put the steps in order.",
        hints: [
          "You need the mass, the value of g and the vertical height before you can multiply.",
          "E_p equals mass times g times height, and the answer is an energy in joules.",
        ],
        explain: "First write the mass in kilograms, then note g in newtons per kilogram, then measure the vertical height in metres, and finally multiply all 3 together to get E_p in joules.",
      },
      {
        kind: "cloze",
        prompt: "Complete this summary of systems, stores and transfers.",
        segments: [
          "The object or group of objects we choose to study is called the ",
          ". Energy is held in an energy ",
          ", and when a system changes, energy is ",
          " from one store to another along a ",
          ".",
        ],
        bank: ["system", "store", "transferred", "pathway", "surroundings", "created"],
        answer: ["system", "store", "transferred", "pathway"],
        ask: "Recall the name for what we choose to study, the name for a way energy is held, what happens to energy when a system changes, and the route it needs to travel. Fill each blank from the bank.",
        hints: [
          "What we choose to study is the system; a way energy is held is a store.",
          "Energy is transferred, never created, and it needs a pathway to travel along.",
        ],
        explain: "The object we study is the system, energy is held in a store, and when the system changes energy is transferred from one store to another along a pathway.",
      },
      {
        kind: "open",
        prompt: "A student says that 'work is done' and 'energy is transferred' describe 2 different things. Explain why the student is wrong, and state what a pathway is.",
        modelAnswer: "The phrases 'work is done' and 'energy is transferred' describe the same event, just in different words: whenever energy moves from one store to another, work has been done. A pathway is the route by which energy is transferred, such as mechanically by a force moving through a distance, by heating from hot to cold, by waves such as light or sound, or electrically by a current in a circuit.",
        marks: [
          "'Work is done' and 'energy is transferred' mean the same event.",
          "A pathway is the route or way by which energy is transferred.",
          "Names at least one pathway (mechanical, heating, waves or electrical).",
        ],
        ask: "Think about what happens to energy each time work is done, and how energy gets from one store to another.",
      },
      {
        kind: "open",
        prompt: "A box is dragged up a long ramp onto a shelf. Explain why only the vertical height gained, not the distance along the ramp, is used to work out the gain in gravitational potential energy.",
        modelAnswer: "Gravitational potential energy is E_p = m g h, where h is the vertical height raised. Gravity acts straight down, so only the change in height in that direction changes the gravitational potential store. The extra distance moved sideways along the ramp does not raise the box against gravity, so it does not add to E_p. 2 boxes lifted to the same shelf gain the same E_p, even if one is dragged up a longer, gentler ramp.",
        marks: [
          "E_p = m g h uses the vertical height h.",
          "Gravity acts vertically, so only the vertical rise changes the store.",
          "The same final height gives the same E_p, whatever the path.",
        ],
        ask: "Think about the direction gravity acts, and which part of the box's movement is against that direction.",
      },
    ],
  },
];
