import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, section 5. Grounded in KB Chapter 10 (Thermal Properties of Matter) section 10.6.
// Figure colours follow the carry-over colour key: graph curves and cool regions = blue; escaping
// fast particles / kinetic-energy highlight = green; hot region = red or amber; axes, gridlines and
// container outlines = grey/white. Figures are drawn as labelled regions A B C / P Q R.

export const BOXES: Subconcept[] = [
  {
    id: "t9.5",
    code: "T9.5",
    title: "Changes of state and heating/cooling curves",
    blurb: "Naming the four changes of state, and reading the sloping and flat parts of heating and cooling curves",
    steps: [
      {
        kind: "concept",
        heading: "The four changes of state",
        body: "There are four changes of state. *Melting* turns a solid to a liquid at the melting point and absorbs energy. *Freezing* turns a liquid to a solid at the freezing point and releases energy. *Boiling* turns a liquid to a gas at the boiling point and absorbs energy. *Condensation* turns a gas to a liquid and releases energy.",
        say: "There are 4 changes of state to know. Melting takes a solid to a liquid at the melting point and soaks up energy. Freezing, or solidification, is the reverse, liquid to solid at the freezing point, giving energy out. Boiling takes a liquid to a gas at the boiling point and soaks up energy. Condensation is its reverse, gas back to liquid, giving energy out. So melting and boiling absorb energy, while freezing and condensation release it.",
      },
      {
        kind: "concept",
        heading: "Flat plateaus: temperature holds steady",
        figure: "fig-10-06-heating-curve",
        body: "Heat a substance steadily and its *temperature* rises, then holds level at a flat *plateau* during each change of state. On a plateau the *temperature stays constant*, because the energy raises the particles' *potential energy* rather than their kinetic energy.",
        say: "This is a temperature against time graph for steady heating, drawn as a blue curve on grey axes. It climbs through the solid, then flattens into a short flat step, the melting plateau, at the melting point. It climbs again through the liquid, then flattens into a longer flat step, the boiling plateau, at the boiling point, before rising once more as a gas. On each flat plateau the temperature stays constant, because the energy is pulling the particles apart, raising their potential energy, not speeding them up.",
      },
      {
        kind: "concept",
        heading: "Sloping means kinetic, flat means state",
        figure: "fig-10-08-heating-cooling-regions",
        body: "Reading a curve is simple. A *sloping* part means the *kinetic energy* is changing, so the temperature changes, which links to heat capacity. A *flat* plateau means a change of state, where the temperature is constant and the energy is the *latent heat*.",
        say: "This figure shows 2 graphs on grey axes, a blue heating curve and an amber cooling curve. On the heating curve, region A B is sloping, so the kinetic energy is rising and the temperature changes, linked to heat capacity. Region B C is a flat plateau, so the potential energy is rising and the temperature stays constant, linked to latent heat. On the cooling curve, region P Q slopes down as kinetic energy falls and the temperature drops, while region Q R is flat as potential energy falls and the temperature holds constant.",
      },
      {
        kind: "concept",
        heading: "Cooling curves run in reverse",
        figure: "fig-10-07-cooling-curve",
        body: "Cool a gas steadily and the *cooling curve* falls, with a *condensation* plateau where the gas becomes a liquid, then a *freezing* plateau where the liquid becomes a solid. Both plateaus *release* energy while the temperature holds constant.",
        say: "This is a temperature against time graph for steady cooling, a blue curve falling across grey axes. It drops through the gas, then flattens at the condensation plateau where the gas turns to liquid. It falls again through the liquid, then flattens at the freezing plateau where the liquid turns to solid, before dropping once more as a solid. Both flat steps give energy out while the temperature stays constant.",
      },
      {
        kind: "graphpick",
        prompt: "A solid is heated steadily until it has all boiled away to gas. Pick the temperature-time graph for this.",
        xLabel: "time / s",
        yLabel: "temperature / C",
        options: [
          {
            points: [
              [0, -20],
              [8, 120],
            ],
            caption: "A straight rising line, no flat steps",
          },
          {
            points: [
              [0, 120],
              [8, -20],
            ],
            caption: "A straight line falling all the way",
          },
          {
            points: [
              [0, -20],
              [1, 0],
              [2, 0],
              [4, 100],
              [7, 100],
              [8, 120],
            ],
            caption: "Rises, a short flat step, rises, a longer flat step, rises",
          },
          {
            points: [
              [0, -20],
              [1, 0],
              [4, 0],
              [5, 100],
              [6, 100],
              [8, 120],
            ],
            caption: "Rises, a long flat step, rises, a short flat step, rises",
          },
        ],
        correct: 2,
        ask: "Heating a solid to gas passes through 2 changes of state, so look for 2 flat plateaus, and remember the boiling plateau is the longer one.",
        hints: [
          "A change of state shows as a flat plateau, so the graph needs 2 of them, not a plain straight line.",
          "Boiling takes more energy than melting, so the boiling plateau must be longer than the melting plateau.",
        ],
        explain: "The correct graph rises through the solid, holds level at a short melting plateau, rises through the liquid, holds level at a longer boiling plateau, then rises as a gas. The boiling plateau is the longer one because boiling needs more energy than melting.",
      },
      {
        kind: "choice",
        question: "A solid is melting. Its temperature stays the same until all of it has melted. Why does the temperature not rise?",
        options: [
          "No energy is being supplied to the solid",
          "The energy goes into the particles' potential energy, pulling them apart, not into kinetic energy",
          "The thermometer stops working at the melting point",
          "The energy is all lost to the surroundings",
        ],
        correct: 1,
        ask: "Temperature measures the average kinetic energy. During melting the energy is used to separate the particles instead, so think about which energy store is filling up.",
        hints: [
          "Energy is still flowing in during melting, so it is not that the supply has stopped.",
          "Temperature only rises when the average kinetic energy rises, and here the energy is raising the potential energy instead.",
        ],
        explain: "The temperature holds constant because the supplied energy raises the particles' potential energy, pulling them apart, rather than their kinetic energy. Since temperature measures average kinetic energy, it does not change until the melting is complete.",
      },
      {
        kind: "choice",
        question: "On a heating curve, which region involves a change in the average kinetic energy of the particles?",
        options: [
          "A sloping part where the temperature is rising",
          "A flat plateau at the melting point",
          "A flat plateau at the boiling point",
          "There is no such region",
        ],
        correct: 0,
        ask: "Average kinetic energy is what the temperature measures, so find the part of the graph where the temperature is actually changing.",
        hints: [
          "On a flat plateau the temperature is constant, so the average kinetic energy is not changing there.",
          "A sloping part shows the temperature changing, which means the average kinetic energy is changing.",
        ],
        explain: "A sloping part, where the temperature rises, is where the average kinetic energy changes. On the flat plateaus the temperature is constant, so there the energy changes the potential energy instead.",
      },
      {
        kind: "order",
        prompt: "Put these stages in order as a solid is heated steadily until it becomes a hot gas.",
        items: [
          "Solid warms up, temperature rising",
          "Melting at the melting point, temperature constant",
          "Liquid warms up, temperature rising",
          "Boiling at the boiling point, temperature constant",
          "Gas warms up, temperature rising",
        ],
        ask: "Follow the substance from cold solid to hot gas, and remember a change of state sits between each warming stage. Put the stages in that order.",
        hints: [
          "The solid must reach its melting point before it can melt, and the liquid must reach its boiling point before it can boil.",
          "The order alternates: warm up, change state, warm up, change state, warm up.",
        ],
        explain: "The solid warms to its melting point, melts at constant temperature, the liquid warms to its boiling point, boils at constant temperature, then the gas warms further. Each change of state sits between 2 warming stages.",
      },
      {
        kind: "match",
        prompt: "Match each feature of a heating or cooling curve to what it tells you.",
        pairs: [
          { left: "A sloping part", right: "Kinetic energy changes (heat capacity)" },
          { left: "A flat plateau", right: "Potential energy changes (latent heat)" },
          { left: "A rising temperature", right: "Average kinetic energy is rising" },
          { left: "A constant temperature", right: "A change of state is happening" },
        ],
        ask: "Sloping parts and flat parts mean different things. Ask whether the temperature is changing, and which energy store is filling.",
        hints: [
          "A slope means the temperature is changing, which is a change in kinetic energy, linked to heat capacity.",
          "A flat plateau means the temperature is constant, which is a change in potential energy, linked to latent heat.",
        ],
        explain: "A sloping part is a change in kinetic energy, linked to heat capacity, so the temperature rises or falls. A flat plateau is a change in potential energy, linked to latent heat, so the temperature stays constant during a change of state.",
      },
      {
        kind: "classify",
        prompt: "Sort each stage by what happens to the temperature.",
        bins: ["Temperature changes", "Temperature constant"],
        items: [
          { text: "A solid warming below its melting point", bin: 0 },
          { text: "Ice melting into water", bin: 1 },
          { text: "Water warming from 20 C to 80 C", bin: 0 },
          { text: "Water boiling into steam", bin: 1 },
          { text: "Steam getting hotter above 100 C", bin: 0 },
        ],
        ask: "A change of state happens at a fixed temperature, so its stage keeps the temperature constant. Any plain warming stage changes the temperature. Tap each one and drop it in its bin.",
        hints: [
          "Melting and boiling are changes of state, so the temperature stays constant during them.",
          "Simply warming a solid, a liquid or a gas raises its temperature.",
        ],
        explain: "Warming a solid, a liquid or a gas changes the temperature, because the kinetic energy rises. Melting and boiling are changes of state at a fixed temperature, so the temperature stays constant while they happen.",
      },
      {
        kind: "choice",
        question: "On a heating curve for water, the boiling plateau is longer than the melting plateau. What is the main reason?",
        options: [
          "The boiling point is at a higher temperature than the melting point",
          "A thermometer reads more slowly when it is hot",
          "Water boils faster than it melts",
          "The specific latent heat of vaporisation is much bigger than that of fusion, so boiling needs more energy",
        ],
        correct: 3,
        ask: "The plateau length shows how much energy the change of state needs at a steady heating rate. Compare the energy to boil with the energy to melt.",
        hints: [
          "The higher boiling point sets where the plateau sits, not how long it lasts.",
          "For the same heating rate, a change that needs more energy takes longer, and boiling needs far more energy per kilogram than melting.",
        ],
        explain: "The boiling plateau is longer because the specific latent heat of vaporisation is much bigger than the specific latent heat of fusion, so boiling absorbs far more energy. At a steady heating rate, more energy means more time.",
      },
      {
        kind: "insight",
        body: "The *boiling* plateau is longer than the *melting* plateau because the specific latent heat of vaporisation is much *bigger* than that of fusion, so boiling takes more energy and more time.",
        say: "Here is the idea to keep. For water the specific latent heat of vaporisation is about 2.26 times 10 to the power 6 joules per kilogram, while the specific latent heat of fusion is only about 3.36 times 10 to the power 5 joules per kilogram, roughly 7 times smaller. So at a steady heating rate the boiling plateau lasts much longer than the melting plateau. Whenever you read a heating or cooling curve, slopes mean the temperature is changing and flat plateaus mean a change of state.",
      },
    ],
  },
];
