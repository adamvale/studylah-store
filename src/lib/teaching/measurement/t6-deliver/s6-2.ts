import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, Work and Power, section 2. Grounded in KB Chapter 07 (Energy, Work and Power) section 7.2.
// Figure colours follow the T6 colour key: lifting/applied force = yellow, weight and gravitational
// potential store = pink, motion and the kinetic store = blue, objects (apple, water) = white,
// container/system boundary/ground/arrows = grey. NEW to lock: a flame or heat source = amber/orange.

export const BOXES: Subconcept[] = [
  {
    id: "t6.2",
    code: "T6.2",
    title: "Energy transfer and pathways",
    blurb: "How energy moves between stores, and the four pathways that carry it",
    steps: [
      {
        kind: "concept",
        heading: "Energy moves when a system changes",
        body: "When a system *changes*, energy is *transferred* from one store to another. If nothing changes, no energy moves at all. Every transfer needs a *pathway* to carry it.",
        say: "Energy only shifts when something about the system actually changes. Speed something up, heat it up, or lift it, and energy moves from one store to another. If nothing changes, none of it moves. And every transfer has to travel along some route, which we call a pathway.",
      },
      {
        kind: "concept",
        heading: "Heating as a pathway",
        figure: "fig-07-03-energy-transfer-heating",
        body: "*Heating* is one pathway. When a *hotter* object meets a *cooler* one, energy flows from the hotter to the cooler until the change is done.",
        say: "This figure stacks 2 panels. In the top half a grey container of blue water sits over an amber Bunsen burner that is not lit, so nothing changes and no energy is transferred. In the bottom half the amber flame is burning under the same grey container, the blue water heats up, and energy moves from the chemical store of the fuel to the internal store of the water.",
      },
      {
        kind: "concept",
        heading: "The four pathways",
        body: "Energy can travel by 4 pathways: *mechanically* when a force moves an object, by *heating* from hot to cold, by *waves* such as sound or light, and *electrically* when a current flows.",
        say: "There are 4 ways energy can travel. Mechanically means a force moves an object through a distance. Heating carries energy from a hotter place to a cooler one. Waves carry it as sound, or as electromagnetic waves like light and infrared. And electrically means a current carries energy round a circuit. You pick the pathway by asking what actually does the carrying.",
      },
      {
        kind: "concept",
        heading: "A mechanical transfer",
        figure: "fig-07-04-store-boxes-transfer",
        body: "When a *force* moves an object through a *distance*, energy is transferred *mechanically*. A falling apple is a clear example.",
        say: "In this picture a white apple hangs on the branch at store A, its pink gravitational potential store, high above the grey ground. Just above the ground the same apple is drawn again at store B, its blue kinetic store. A grey arrow between them reads energy transferred as the apple falls. Gravity is the force, the apple moves through a distance, so this transfer is mechanical.",
      },
      {
        kind: "match",
        prompt: "Match each situation to the pathway that carries the energy.",
        pairs: [
          { left: "A crane lifts a steel beam", right: "Mechanically" },
          { left: "A kettle warms the water inside it", right: "By heating" },
          { left: "A torch bulb lights up a room", right: "By waves" },
          { left: "A current rings a doorbell", right: "Electrically" },
        ],
        ask: "For each one, ask what actually carries the energy: a moving force, a temperature difference, a wave, or a current. Then pair it up.",
        hints: [
          "A lifting force acting through a distance is mechanical; a flow from hot to cold is heating.",
          "Light leaving a bulb travels as waves; energy carried round a circuit travels electrically.",
        ],
        explain: "The crane lifts by a force through a distance, so mechanically. The kettle passes energy from hot to cold by heating. The bulb sends light out as waves. The current carries energy to the doorbell electrically.",
      },
      {
        kind: "classify",
        prompt: "Sort each transfer by the pathway that carries the energy.",
        bins: ["Mechanically", "By heating", "By waves", "Electrically"],
        items: [
          { text: "A hammer drives a nail into wood", bin: 0 },
          { text: "A person pushes a trolley along", bin: 0 },
          { text: "A radiator warms a cold room", bin: 1 },
          { text: "The Sun warms your face", bin: 2 },
          { text: "A speaker fills a hall with sound", bin: 2 },
          { text: "A battery drives a current through a motor", bin: 3 },
        ],
        ask: "For each one, ask what does the carrying: a force moving an object, a temperature difference, a wave, or a current. Tap each item and drop it in its bin.",
        hints: [
          "A hammer and a push both move an object with a force, so mechanically.",
          "The Sun and a speaker both send out waves; a radiator works by heating; a battery works electrically.",
        ],
        explain: "The hammer and the push move objects with a force, so mechanically. The radiator passes energy from hot to cold by heating. The Sun and the speaker send energy out as waves. The battery drives a current, so electrically.",
      },
      {
        kind: "choice",
        question: "An apple falls from a branch to the ground. Which best describes the energy transfer?",
        figure: "fig-07-04-store-boxes-transfer",
        options: [
          "Gravitational potential store to kinetic store, mechanically",
          "Kinetic store to gravitational potential store, mechanically",
          "Chemical store to internal store, by heating",
          "Internal store to kinetic store, by waves",
        ],
        correct: 0,
        ask: "Name the store the energy leaves, the store it arrives in, and the pathway. The apple starts up high and speeds up as it falls.",
        hints: [
          "High up the apple has a full gravitational potential store; as it falls it gains speed, so a kinetic store.",
          "Gravity is a force moving the apple through a distance, so the pathway is mechanical.",
        ],
        explain: "As the apple falls, energy moves from its gravitational potential store to its kinetic store, and the pathway is mechanical because gravity moves it through a distance.",
      },
      {
        kind: "choice",
        question: "An unlit Bunsen burner sits under a beaker of water and nothing changes. How much energy is transferred?",
        figure: "fig-07-03-energy-transfer-heating",
        options: [
          "None, because nothing changes",
          "A large amount, by heating",
          "Some, mechanically",
          "Some, electrically",
        ],
        correct: 0,
        ask: "Energy is only transferred when a system changes. Check whether anything about this system is changing.",
        hints: [
          "The burner is not lit, so the water is not heating up and nothing is changing.",
          "If nothing changes, no energy is transferred by any pathway.",
        ],
        explain: "No energy is transferred, because nothing about the system is changing. Only once the flame is lit and the water starts to heat does energy move, from the chemical store to the internal store.",
      },
      {
        kind: "insight",
        body: "\"*Work is done*\" and \"*energy is transferred*\" describe the very same event. Name the *pathway* and the 2 *stores*, and you have described any transfer.",
        say: "Here is the idea to keep. Saying work is done and saying energy is transferred are 2 descriptions of one and the same event. To describe any transfer, name its pathway and the 2 stores it runs between, the store the energy leaves and the store it arrives in.",
      },
    ],
  },
];
