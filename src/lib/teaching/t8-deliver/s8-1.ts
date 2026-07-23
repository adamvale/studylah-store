import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, section 1. Grounded in KB Chapter 09 (Thermal Processes) section 9.1.
// Conceptual chapter: no formula fields and no working blocks anywhere.
// Thermal colour key: hotter region = red, cooler region = blue, heat source/flame = amber,
// free electrons = green, structures/containers/guides = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t8.1",
    code: "T8.1",
    title: "Energy transfer by heating and thermal equilibrium",
    blurb: "Why thermal energy flows from hot to cold, and when it stops",
    steps: [
      {
        kind: "concept",
        heading: "Energy flows from hot to cold",
        figure: "fig-09-01-energy-transfer-arrow",
        body: "When two regions are at *different temperatures*, thermal energy always flows from the *hotter* region to the *cooler* region. It never travels the other way on its own.",
        say: "This picture shows the rule in one glance. On the left is a red block, the hotter region, and on the right is a blue block, the cooler region. A big arrow runs from the red side across to the blue side, labelled energy transfer by heating. Energy leaves the hot region and moves into the cold one, never the reverse by itself.",
      },
      {
        kind: "concept",
        heading: "Coldness is not a substance",
        body: "It only feels like *cold* spreads into a warm object. In truth nothing cold moves in; *energy* simply moves out of the warmer object, and what remains is what we call *coldness*, the *absence* of that energy.",
        say: "Watch out for a common trap. When ice cools your drink, no coldness flows into the drink. Instead energy flows out of the drink and into the ice. Coldness is not a thing that travels. It is just what is left behind once energy has moved away.",
      },
      {
        kind: "concept",
        heading: "Flow stops at thermal equilibrium",
        body: "Energy keeps flowing until both regions reach the *same temperature*. Then there is *no net transfer* and the objects are in *thermal equilibrium*. Energy still passes both ways, but the two amounts *balance*.",
        say: "The flow does not go on forever. Once the hot and cold regions settle at one shared temperature, they are in thermal equilibrium. Energy still crosses in both directions, but equal amounts go each way, so there is no net transfer and neither temperature changes any more.",
      },
      {
        kind: "concept",
        heading: "Three ways energy travels",
        body: "Thermal energy can move by *three* mechanisms: *conduction*, *convection*, and *radiation*. Whichever route it takes, the flow is always from the hotter place to the cooler place.",
        say: "There are exactly 3 ways this heating happens, and you will meet each one soon: conduction, convection, and radiation. They work in different ways, but they all obey the same rule, energy going from the warmer region to the cooler region.",
      },
      {
        kind: "choice",
        question: "Two blocks touch: one at 80 degrees C and one at 30 degrees C. Which way does thermal energy flow between them?",
        options: [
          "From the 30 degree block to the 80 degree block",
          "In neither direction, because they touch",
          "From the 80 degree block to the 30 degree block",
          "Equally both ways from the very start",
        ],
        correct: 2,
        ask: "Thermal energy always leaves the hotter object first. Which block is hotter, and which way does that send the energy?",
        hints: [
          "Energy flows from the higher temperature to the lower temperature.",
          "The 80 degree block is hotter, so energy flows out of it into the 30 degree block.",
        ],
        explain: "Energy flows from the 80 degree block to the 30 degree block, because thermal energy always travels from the hotter region to the cooler region.",
      },
      {
        kind: "choice",
        question: "A metal sphere at 140 degrees C is placed in a room at 22 degrees C. When is there no net transfer of thermal energy between the sphere and the room?",
        options: [
          "When the sphere cools to 22 degrees C, the same as the room",
          "As soon as the sphere is placed in the room",
          "When the sphere reaches 0 degrees C",
          "When the sphere is still at 140 degrees C",
        ],
        correct: 0,
        ask: "No net transfer means both are at the same temperature. What temperature must the sphere reach to match the room?",
        hints: [
          "Net flow stops only at thermal equilibrium, when the temperatures are equal.",
          "The room is 22 degrees, so the sphere must fall to 22 degrees for the transfer to balance.",
        ],
        explain: "There is no net transfer once the sphere cools to 22 degrees C, matching the room. At that point the 2 are in thermal equilibrium, so energy still passes both ways but the 2 amounts balance.",
      },
      {
        kind: "classify",
        prompt: "Sort each object by whether it warms up or cools down in its surroundings.",
        bins: ["Object warms up", "Object cools down"],
        items: [
          { text: "A cold drink left out on a hot day", bin: 0 },
          { text: "A hot mug of tea sitting on a table", bin: 1 },
          { text: "A frozen pea dropped into warm soup", bin: 0 },
          { text: "A hot potato taken out of the oven", bin: 1 },
        ],
        ask: "Compare each object with its surroundings. If the surroundings are warmer the object gains energy and warms; if the surroundings are cooler the object loses energy and cools. Tap each one into its bin.",
        hints: [
          "An object colder than its surroundings takes in energy and warms up.",
          "An object hotter than its surroundings loses energy and cools down.",
        ],
        explain: "A cold drink and a frozen pea are colder than their warm surroundings, so they gain energy and warm up. A hot mug of tea and a hot potato are hotter than their surroundings, so they lose energy and cool down.",
      },
      {
        kind: "cloze",
        prompt: "Complete the rule of energy transfer by heating.",
        segments: [
          "Thermal energy flows from the ",
          " region to the ",
          " region until both reach the same temperature and are in ",
          ".",
        ],
        bank: ["hotter", "cooler", "thermal equilibrium", "colder", "boiling"],
        answer: ["hotter", "cooler", "thermal equilibrium"],
        ask: "Start with the direction of flow. Energy leaves the warmer side first, so which word fills the first blank?",
        hints: [
          "Energy flows from the hotter region toward the cooler region.",
          "When the temperatures become equal the objects are in thermal equilibrium.",
        ],
        explain: "Thermal energy flows from the hotter region to the cooler region until both reach the same temperature and are in thermal equilibrium, where there is no net transfer.",
      },
      {
        kind: "insight",
        body: "Heating is really *energy* moving from *hot* to *cold*, and it stops only at *thermal equilibrium*, when the temperatures are equal and the flows balance.",
        say: "Here is the idea to keep. Every heating story is energy moving from a hotter place to a cooler place. It carries on until both sit at one temperature, thermal equilibrium, where energy still crosses both ways but the amounts cancel out, so nothing changes any more.",
      },
    ],
  },
];
