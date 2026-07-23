import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, section 6. Grounded in KB Chapter 06 (Pressure) section on the manometer.
// Figure colours follow the T5 colour key: liquid/mercury/oil/water = blue, atmospheric-pressure
// arrows = yellow, U-tube/reservoir/height and dimension guides = grey, points and labels on the tube = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t5.6",
    code: "T5.6",
    title: "The manometer",
    blurb: "Using a U-tube of liquid to measure a gas pressure against the atmosphere",
    steps: [
      {
        kind: "concept",
        heading: "What a manometer is",
        body: "A *manometer* is a *U-tube* of liquid that measures the pressure of a *gas* by balancing it against the *atmosphere*.",
        say: "A manometer is one of the simplest pressure gauges there is: just a U-shaped tube part filled with liquid. One end connects to the gas you want to measure, the other is open to the air. By reading how far the liquid moves, you compare the gas pressure with atmospheric pressure.",
      },
      {
        kind: "concept",
        heading: "Reading the gas pressure",
        figure: "fig-06-12-manometer",
        body: "*Points at the same level* in the connected liquid have *equal pressure*, so the gas pressure equals atmospheric pressure plus the pressure of the *height difference* h.",
        formula: {
          latex: "P_{gas} = P_{atm} + h\\rho g",
          where: [
            { sym: "P_gas", meaning: "pressure of the gas", unit: "Pa" },
            { sym: "P_atm", meaning: "atmospheric pressure", unit: "Pa" },
            { sym: "h", meaning: "height difference between the 2 surfaces", unit: "m" },
            { sym: "rho", meaning: "density of the liquid", unit: "kg/m^3" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "The picture shows a grey U-tube holding blue liquid. The left limb connects to a gas supply whose pressure we want; the right limb is open to the air, with yellow arrows showing atmospheric pressure pressing down on the surface. The gas pushes the liquid down on its own side and up the open side, and a grey bracket marks the height difference h between the 2 surfaces. Point X in the left limb sits level with point Y in the right limb, and because they are at the same level in the connected liquid they feel equal pressure. That is why the gas pressure equals atmospheric pressure plus h rho g.",
      },
      {
        kind: "concept",
        heading: "Above or below atmospheric",
        body: "If the gas is *above atmospheric* it pushes the liquid up the open side; if it is *below atmospheric* the open side sits lower. A *denser liquid* needs a shorter height difference.",
        say: "The gas can be at a higher or a lower pressure than the air outside. If the gas is above atmospheric pressure, it shoves the liquid down its own limb and up the open limb, so you add h rho g to atmospheric. If the gas is below atmospheric, the open side drops lower instead, and you subtract h rho g. Choosing a denser liquid, like mercury, means a much shorter height difference gives the same pressure, and the width of the tube makes no difference at all.",
      },
      {
        kind: "concept",
        heading: "Two liquids balance",
        figure: "fig-06-13-manometer-two-liquids",
        body: "With 2 *immiscible liquids* the *denser* liquid sinks. Taking the points at the *boundary level*, the two pressures must be equal.",
        formula: {
          latex: "h_1 \\rho_1 = h_2 \\rho_2",
          where: [
            { sym: "h_1", meaning: "height of the less dense column", unit: "m" },
            { sym: "rho_1", meaning: "density of the less dense liquid", unit: "kg/m^3" },
            { sym: "h_2", meaning: "height of the denser column", unit: "m" },
            { sym: "rho_2", meaning: "density of the denser liquid", unit: "kg/m^3" },
          ],
        },
        say: "This U-tube holds 2 liquids that do not mix, both drawn blue. A less dense liquid forms a column of height h1 in one limb, floating on top of a denser liquid that fills the bottom and rises up the other limb to height h2. Point A and point B sit at the same level, right at the boundary where the 2 liquids meet, so they share the same pressure. Setting those pressures equal gives h1 times rho1 equals h2 times rho2.",
      },
      {
        kind: "choice",
        question: "In a manometer, points X and Y lie at the same level in the connected liquid. What is true of the pressure at X and at Y?",
        figure: "fig-06-12-manometer",
        options: [
          "The pressures are equal",
          "The pressure at X is greater",
          "The pressure at Y is greater",
          "Neither point has any pressure",
        ],
        correct: 0,
        ask: "Think about the rule for a connected liquid: what do 2 points at the same depth or level share?",
        hints: [
          "In a single connected liquid, the same level means the same depth of liquid above.",
          "Points at the same level in a connected liquid always have equal pressure.",
        ],
        explain: "The pressures are equal, because points at the same level in a connected liquid always have the same pressure. This is the rule the whole manometer reading rests on.",
      },
      {
        kind: "choice",
        question: "A gas pushes the liquid down its own limb and up the open limb of a manometer. Compared with the air, the gas is:",
        options: [
          "above atmospheric, so P_gas = P_atm + h rho g",
          "below atmospheric, so P_gas = P_atm - h rho g",
          "exactly equal to atmospheric pressure",
          "at zero pressure",
        ],
        correct: 0,
        ask: "Ask which side the liquid rises on. If the open side is pushed up, the gas is stronger than the air.",
        hints: [
          "The liquid moves away from the higher pressure and rises on the lower-pressure side.",
          "The open side is raised, so the gas beats the atmosphere and you add h rho g.",
        ],
        explain: "The gas is above atmospheric, because it drives the liquid up the open side. You therefore add the height difference, so P_gas equals P_atm plus h rho g.",
      },
      {
        kind: "slider",
        prompt: "A gas connected to a mercury manometer raises the open side by 9.0 cm. Atmospheric pressure is 76 cm Hg. Set the slider to the gas pressure P_gas, in cm Hg.",
        min: 0,
        max: 100,
        step: 0.5,
        unit: "cm Hg",
        start: 0,
        targetMin: 84.5,
        targetMax: 85.5,
        ask: "The gas is above atmospheric, so add the height difference to atmospheric pressure. Work out 76 plus 9.0.",
        hints: [
          "Use P_gas equals P_atm plus the height difference measured in cm Hg.",
          "76 plus 9.0 is 85, so slide to 85 cm Hg.",
        ],
        working: [
          { label: "Formula", latex: "P_{gas} = P_{atm} + h" },
          { label: "Substitute", latex: "P_{gas} = 76 + 9.0" },
          { label: "Answer", latex: "P_{gas} = 85\\ \\text{cm Hg} = 1.16 \\times 10^5\\ \\text{Pa}" },
        ],
        explain: "The gas pressure is 85 cm Hg, because 76 plus 9.0 is 85. Converting, 0.85 metres of mercury times its density 1.36 times 10 to the power 4 kilograms per cubic metre times 10 gives 1.16 times 10 to the power 5 pascals.",
      },
      {
        kind: "tiles",
        prompt: "A column of oil 20 cm tall, density 800 kg/m^3, balances a column of water, density 1000 kg/m^3, in a U-tube. Build the working line for the height h of the water column, in cm.",
        tiles: ["h =", "20", "\\times", "800", "\\div", "1000", "=", "16", "18", "cm"],
        answer: ["h =", "20", "\\times", "800", "\\div", "1000", "=", "16", "cm"],
        ask: "The pressures balance at the boundary, so h1 rho1 equals h2 rho2. Rearrange for the water height and work out 20 times 800 divided by 1000.",
        hints: [
          "From h1 rho1 equals h2 rho2, the water height is 20 times 800 divided by 1000.",
          "20 times 800 is 16000, and 16000 divided by 1000 is 16.",
        ],
        working: [
          { label: "Formula", latex: "h_1 \\rho_1 = h_2 \\rho_2" },
          { label: "Substitute", latex: "h = \\dfrac{20 \\times 800}{1000}" },
          { label: "Answer", latex: "h = 16\\ \\text{cm}" },
        ],
        explain: "The water column is 16 centimetres tall, because 20 times 800 divided by 1000 is 16. The denser water needs a shorter column to balance the taller column of lighter oil.",
      },
      {
        kind: "insight",
        body: "*Points at the same level* in a connected liquid share the same *pressure*, and that one rule drives every *manometer* reading, whether you balance a gas against the *atmosphere* or one liquid against another.",
        say: "Here is the idea to keep. Everything a manometer does comes from a single rule: 2 points at the same level in a connected liquid are at the same pressure. Use it against the open air and you measure a gas pressure. Use it at the boundary of 2 liquids and you compare their densities with h1 rho1 equals h2 rho2. One rule, both results.",
      },
    ],
  },
];
