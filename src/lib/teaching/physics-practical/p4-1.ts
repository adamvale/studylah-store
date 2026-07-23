import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (Practical Chapter 4), section 1. Grounded in Practical Chapter 04 - Heat: heat transfer and thermometry.
// Figure colours follow the fig-pr4 key: heater/hot region = red, lagging = amber dashed, water/liquid/curve = blue,
// metal block or ice = pale blue, thermometer/apparatus/labels = white/grey, grid and dashed guides = grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.1",
    code: "TP4.1",
    title: "Heat transfer and thermometry",
    blurb: "How heat moves, and how a thermometer turns a property into a temperature",
    steps: [
      {
        kind: "concept",
        heading: "Heat flows from hot to cold",
        body: "*Heat* is energy that flows from a *hotter* region to a *cooler* one. It keeps flowing until both regions reach the same temperature, a state called *thermal equilibrium*.",
        say: "Heat is a form of energy on the move. It always drains from the hotter place to the cooler place, never the other way on its own. The flow only stops once the 2 places sit at the same temperature. We call that balanced state thermal equilibrium.",
      },
      {
        kind: "concept",
        heading: "Conduction",
        body: "In *conduction*, energy passes along without the material flowing. Vibrating *particles* jostle their neighbours, and in metals free *electrons* carry energy fast. It works best in *solids*.",
        say: "Conduction is how heat creeps along a solid. The hot particles vibrate harder and knock the energy on to their cooler neighbours, particle by particle. In a metal there are also free electrons that dart through and spread the energy quickly, which is why a metal spoon in hot tea soon warms right up the handle.",
      },
      {
        kind: "concept",
        heading: "Convection",
        body: "In *convection*, the heated fluid itself moves. Warm fluid is less *dense* so it *rises*, cooler fluid sinks to take its place, and this loop is a *convection current*.",
        say: "Convection happens in liquids and gases, where the stuff can actually flow. Heat the fluid and it expands, becomes less dense, and floats upward. Cooler, denser fluid sinks down to replace it, gets heated in turn, and rises. That circulating loop is a convection current.",
      },
      {
        kind: "concept",
        heading: "Radiation",
        body: "*Radiation* carries energy as *infra-red* waves. It needs *no medium* at all, so it can cross a *vacuum*, which is how the Sun's heat reaches us through empty space.",
        say: "Radiation is different from the other 2. It travels as infra-red waves and needs nothing to travel through. That means it can cross a vacuum, empty space with no particles. It is the only way the Sun's heat can reach Earth across the emptiness between us.",
      },
      {
        kind: "choice",
        question: "Which method of heat transfer can carry energy across a vacuum, where there are no particles?",
        options: ["Conduction", "Convection", "Both conduction and convection", "Radiation"],
        correct: 3,
        ask: "Conduction and convection both need particles or a moving fluid. Which method travels as waves and needs no medium?",
        hints: [
          "A vacuum has no particles, so any method that relies on particles is ruled out.",
          "Radiation travels as infra-red waves and needs no medium, so it alone crosses a vacuum.",
        ],
        explain: "Radiation is the answer, because it travels as infra-red waves and needs no medium, so it can cross a vacuum. Conduction needs particles and convection needs a moving fluid.",
      },
      {
        kind: "classify",
        prompt: "Sort each example by the method of heat transfer it shows.",
        bins: ["Conduction", "Convection", "Radiation"],
        items: [
          { text: "A metal spoon warms along its handle in hot tea", bin: 0 },
          { text: "Free electrons carry energy through a metal bar", bin: 0 },
          { text: "Warm water rises in a beaker heated from below", bin: 1 },
          { text: "Less dense fluid rises and denser fluid sinks in a loop", bin: 1 },
          { text: "Heat from the Sun reaches Earth across empty space", bin: 2 },
          { text: "Infra-red waves warm your face from a glowing fire", bin: 2 },
        ],
        ask: "Conduction passes energy through a solid by particles and electrons. Convection moves the fluid itself in a current. Radiation travels as infra-red waves. Drop each example in its bin.",
        hints: [
          "If the material itself flows and circulates, that is convection.",
          "If energy crosses empty space as waves, that is radiation; if it creeps through a solid, that is conduction.",
        ],
        explain: "The spoon handle and the free electrons show conduction through a solid. The rising water and the circulating fluid show convection currents. The Sun's heat and the infra-red from a fire show radiation crossing space as waves.",
      },
      {
        kind: "concept",
        heading: "Thermometric property",
        body: "A *thermometric property* is a physical quantity that changes *steadily* with *temperature*, such as the length of a liquid column, the *resistance* of a wire, or the pressure of a gas.",
        say: "To measure temperature we need something that changes in a smooth, reliable way as things get hotter. That something is a thermometric property. Good examples are the length of a liquid thread in a glass tube, the electrical resistance of a wire or thermistor, and the pressure of a fixed amount of gas.",
      },
      {
        kind: "concept",
        heading: "2 fixed points",
        figure: "fig-pr4-01-thermometer",
        body: "A thermometer is calibrated at 2 *fixed points*: the *ice point*, melting ice at 0 degrees Celsius, and the *steam point*, steam over boiling water at 100 degrees Celsius.",
        say: "This figure shows a liquid-in-glass thermometer standing upright, drawn in white and grey. Near the bottom of the scale a mark reads 0, the ice point, set by pure melting ice. Near the top a mark reads 100, the steam point, set by steam above boiling water. Those 2 fixed points anchor the whole scale between them.",
      },
      {
        kind: "concept",
        heading: "From property to temperature",
        body: "Reading the property at the 2 fixed points and at the unknown temperature lets you scale the *temperature* by simple *proportion* between the *ice* and *steam* points.",
        formula: {
          latex: "\\theta = \\dfrac{X_\\theta - X_0}{X_{100} - X_0} \\times 100",
          where: [
            { sym: "\\theta", meaning: "the unknown temperature", unit: "degrees C" },
            { sym: "X_\\theta", meaning: "property value at the unknown temperature" },
            { sym: "X_0", meaning: "property value at the ice point" },
            { sym: "X_{100}", meaning: "property value at the steam point" },
          ],
        },
        say: "Here is the rule that turns a property reading into a temperature. Take the property at the unknown temperature, subtract its value at the ice point, and divide by the value at the steam point minus the value at the ice point. Multiply by 100 and you have the temperature in degrees Celsius. It just measures how far the property has moved from ice toward steam, as a percentage of the full gap.",
      },
      {
        kind: "choice",
        question: "A thermistor has resistance 510 ohm at an unknown temperature, with X_0 = 820 ohm at the ice point and X_100 = 200 ohm at the steam point. Find the temperature.",
        options: ["30 degrees C", "50 degrees C", "62 degrees C", "82 degrees C"],
        correct: 1,
        ask: "Put the values into the thermometry formula. Work out 510 minus 820 on top, then 200 minus 820 on the bottom, divide, and multiply by 100.",
        hints: [
          "The top is 510 minus 820, which is negative 310; the bottom is 200 minus 820, which is negative 620.",
          "Negative 310 divided by negative 620 is 0.5, and 0.5 times 100 is 50.",
        ],
        working: [
          { label: "Formula", latex: "\\theta = \\dfrac{X_\\theta - X_0}{X_{100} - X_0} \\times 100" },
          { label: "Substitute", latex: "\\theta = \\dfrac{510 - 820}{200 - 820} \\times 100" },
          { label: "Answer", latex: "\\theta = 50\\ \\text{degrees C}" },
        ],
        explain: "The temperature is 50 degrees Celsius, because 510 minus 820 is negative 310, and 200 minus 820 is negative 620, and negative 310 divided by negative 620 is 0.5, times 100 is 50.",
      },
      {
        kind: "choice",
        question: "A resistance wire reads 77 ohm at an unknown temperature, with X_0 = 50 ohm at the ice point and X_100 = 95 ohm at the steam point. Find the temperature.",
        options: ["60 degrees C", "45 degrees C", "27 degrees C", "77 degrees C"],
        correct: 0,
        ask: "Use the thermometry formula. The top is 77 minus 50, the bottom is 95 minus 50, then divide and multiply by 100.",
        hints: [
          "The top is 77 minus 50, which is 27; the bottom is 95 minus 50, which is 45.",
          "27 divided by 45 is 0.6, and 0.6 times 100 is 60.",
        ],
        working: [
          { label: "Formula", latex: "\\theta = \\dfrac{X_\\theta - X_0}{X_{100} - X_0} \\times 100" },
          { label: "Substitute", latex: "\\theta = \\dfrac{77 - 50}{95 - 50} \\times 100" },
          { label: "Answer", latex: "\\theta = 60\\ \\text{degrees C}" },
        ],
        explain: "The temperature is 60 degrees Celsius, because 77 minus 50 is 27, and 95 minus 50 is 45, and 27 divided by 45 is 0.6, times 100 is 60.",
      },
      {
        kind: "insight",
        body: "Every liquid, resistance or gas thermometer works the same way: pin down 2 *fixed points*, then read the *thermometric property* and scale by *proportion* to the unknown temperature.",
        say: "Keep this big picture. No matter what the thermometer measures, length, resistance, or pressure, the recipe is always the same. Fix the scale at the ice point and the steam point, read how far the property has shifted at the unknown temperature, and scale by simple proportion. That is all a temperature reading really is.",
      },
    ],
  },
];
