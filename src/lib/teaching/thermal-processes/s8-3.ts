import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, section 3. Grounded in KB Chapter 09 (Thermal Processes) section 9.3.
// Conceptual section: no formula fields, no working blocks. Thermal colour key:
// hotter/warm/rising fluid = red, cooler/sinking fluid = blue, heat source/burner = amber,
// beakers/containers/structures = grey/white; breeze figures are drawn left/right (warmer = red, cooler = blue).

export const BOXES: Subconcept[] = [
  {
    id: "t8.3",
    code: "T8.3",
    title: "Convection",
    blurb: "How heated fluids circulate and carry thermal energy by convection currents",
    steps: [
      {
        kind: "concept",
        heading: "Convection carries energy through fluids",
        figure: "fig-09-04-convection-beaker",
        body: "*Convection* is the transfer of thermal energy through a *fluid* (a liquid or a gas) by *convection currents*. Unlike conduction, the *particles themselves move*, carrying the energy with them, so convection cannot happen in a solid.",
        say: "The picture shows a grey beaker of blue fluid sitting on an amber heat source. Numbers 1, 2 and 3 trace a loop: fluid warmed at the bottom rises as a red stream, and cooler blue fluid sinks around the sides to take its place. That circulating loop is a convection current. In convection the particles actually travel and carry the energy, which is why it works in liquids and gases but never in a solid, where the particles are locked in place.",
      },
      {
        kind: "concept",
        heading: "Less dense rises, denser sinks",
        body: "When a fluid is heated it *expands*, so its *density decreases* and it *rises*. The cooler, denser fluid around it sinks to replace it, and this repeating flow is the convection current.",
        say: "Here is the rule that drives every convection current. Warm the fluid and it spreads out, so the same mass now fills a bigger space and its density drops. Being less dense than its surroundings, it floats upward. Meanwhile the cooler fluid nearby is denser, so it sinks to fill the gap. Warming, rising, cooling and sinking repeat over and over, and that endless circulation is the current.",
      },
      {
        kind: "concept",
        heading: "Convection at work",
        figure: "fig-09-05-hot-air-balloon",
        body: "Convection lifts a *hot-air balloon*: the burner warms the air, the air becomes *less dense* than the air outside, so the balloon *rises*. The same idea explains breezes at the coast and how a kettle heats all its water.",
        say: "In this figure a grey balloon envelope has an amber burner at the bottom. A convection current loops inside, warm air rising as red and cooler air sinking as blue. The burner keeps the trapped air less dense than the cooler air outside, so the whole balloon floats up. The same principle is at work by the sea, where warmed air rises over the land, and inside a kettle, where the heated water at the bottom rises to warm the rest.",
      },
      {
        kind: "choice",
        question: "What actually drives a convection current in a fluid?",
        options: [
          "A change in the colour of the fluid",
          "A change in the mass of the fluid",
          "A change in the density of the fluid",
          "A change in the shape of the container",
        ],
        correct: 2,
        ask: "Think about why warmed fluid floats up and cooler fluid sinks. It is because heating changes one property of the fluid.",
        hints: [
          "Heating makes a fluid expand, which changes how much mass sits in a given volume.",
          "Warm fluid rises because it becomes less dense; cooler fluid sinks because it is denser.",
        ],
        explain: "A convection current is driven by a change in density. Warming a fluid makes it expand and become less dense, so it rises, while cooler denser fluid sinks to replace it.",
      },
      {
        kind: "cloze",
        prompt: "Complete the rule that describes a convection current.",
        segments: [
          "When a fluid is heated it becomes ",
          ", so it ",
          ". The cooler, ",
          " fluid then ",
          " to take its place, and this repeating flow is a convection ",
          ".",
        ],
        bank: ["less dense", "rises", "denser", "sinks", "current", "solid", "falls"],
        answer: ["less dense", "rises", "denser", "sinks", "current"],
        ask: "Follow one parcel of fluid: heating changes its density first, and that decides whether it goes up or down.",
        hints: [
          "Heated fluid expands, so it becomes less dense and floats upward.",
          "The fluid replacing it is cooler and denser, so it moves the opposite way.",
        ],
        explain: "Heated fluid becomes less dense and rises; the cooler, denser fluid sinks to take its place, and the repeating loop is a convection current.",
      },
      {
        kind: "order",
        prompt: "Put the stages of a convection current in a heated beaker of water in order, starting the moment the water is heated.",
        items: [
          "The heat source warms the water at the bottom",
          "The warmed water expands and becomes less dense",
          "The less dense water rises through the beaker",
          "Cooler, denser water sinks to take its place",
          "The sunken water is warmed and the cycle repeats",
        ],
        ask: "Start with the very first thing the heat does to the water, then follow the warmed parcel as its density changes.",
        hints: [
          "Warming comes first, and it changes the density before anything moves.",
          "Less dense water goes up, and the cooler denser water that sinks is next in line to be heated.",
        ],
        explain: "The water is warmed, expands and becomes less dense, rises, and is replaced by cooler denser water sinking, which is then warmed in turn, so the cycle keeps repeating.",
      },
      {
        kind: "classify",
        prompt: "Sort each device by where its working part is placed so that convection circulates the whole fluid.",
        bins: ["Placed at the bottom", "Placed at the top"],
        items: [
          { text: "The heating element of an electric kettle", bin: 0 },
          { text: "A Bunsen burner under a beaker of water", bin: 0 },
          { text: "The heating coil in a hot water tank", bin: 0 },
          { text: "The freezer unit of a refrigerator", bin: 1 },
          { text: "An air-conditioning unit high on a wall", bin: 1 },
        ],
        ask: "A heater must sit where the warmed fluid can rise through everything above it; a cooler must sit where the chilled fluid can sink through everything below it.",
        hints: [
          "Warm fluid rises, so a heating part works best at the bottom to warm the whole body of fluid.",
          "Cold fluid sinks, so a cooling part works best near the top so the cold air or water can fall and circulate.",
        ],
        explain: "Heaters go at the bottom because warm fluid rises and carries energy upward through the whole fluid; coolers go at the top because cold dense fluid sinks and circulates downward.",
      },
      {
        kind: "choice",
        question: "During the day the land warms faster than the sea. Which way does the sea breeze blow?",
        figure: "fig-09-06-sea-breeze",
        options: [
          "From the land out to the sea",
          "From the sea in to the land",
          "Straight upward with no sideways flow",
          "There is no breeze during the day",
        ],
        correct: 1,
        ask: "The warm air is over the land, so it rises there. Something has to flow in underneath to replace it, and it comes from over the sea.",
        hints: [
          "Warm air rising over the land leaves a gap that cooler air rushes in to fill.",
          "The cooler, denser air sits over the sea, so it flows toward the land.",
        ],
        explain: "By day the land is warmer, so warm air rises over the land and cooler, denser air flows in from over the sea. The sea breeze blows from the sea to the land.",
      },
      {
        kind: "insight",
        body: "Every convection current comes from the same rule: heating lowers a fluid's *density* so warm fluid *rises* and cooler, denser fluid *sinks*, and this single idea explains kettles, balloons and coastal breezes alike.",
        say: "Here is the idea to keep. Convection is not about heat magically climbing; it is about density. Warm the fluid, it spreads out and becomes less dense, so it floats up, and the cooler denser fluid drops to replace it. Hold on to that one rule and you can explain a boiling kettle, a rising hot-air balloon, and the sea breeze on a warm afternoon, all with the same reasoning.",
      },
    ],
  },
];
