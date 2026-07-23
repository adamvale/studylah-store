import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (Practical Chapter 4), section 5. Grounded in Practical Chapter 04 - Heat (Exp 2, 3).
// Figure colours follow the fig-pr4 key: heater/hot region = red, lagging = amber (dashed),
// water/liquid = blue, metal block = pale blue, calorimeter/joulemeter/stirrer/thermometer/apparatus = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.5",
    code: "TP4.5",
    title: "Specific heat capacity: joulemeter and method of mixtures",
    blurb: "2 better ways to measure c, accounting for the calorimeter and using conservation of energy",
    steps: [
      {
        kind: "concept",
        heading: "The joulemeter method",
        figure: "fig-pr4-06-calorimeter-joulemeter",
        body: "A *joulemeter* reads the electrical *energy* delivered by an *immersion heater* straight in joules. The heater sits in water inside a metal *calorimeter*.",
        say: "In this picture a red immersion heater dips into blue water held in a metal calorimeter, drawn in white. The calorimeter is wrapped in amber dashed lagging to slow heat loss, and a white stirrer and thermometer poke through the lid. To the side sits a white box, the joulemeter, which reads the electrical energy the heater delivers straight in joules. That saves you working out energy from voltage, current and time.",
      },
      {
        kind: "concept",
        heading: "The energy warms both",
        body: "The delivered *energy* does not only warm the water. It also warms the metal *calorimeter* that holds it, so the *energy balance* shares the heat between the 2.",
        formula: {
          latex: "E = (m_w c_w + m_c c_c)\\,\\Delta\\theta \\;\\Rightarrow\\; c_w = \\dfrac{E - m_c c_c\\,\\Delta\\theta}{m_w\\,\\Delta\\theta}",
          where: [
            { sym: "E", meaning: "energy from the joulemeter", unit: "J" },
            { sym: "m_w", meaning: "mass of water", unit: "kg" },
            { sym: "c_w", meaning: "specific heat capacity of water", unit: "J/(kg degC)" },
            { sym: "m_c", meaning: "mass of calorimeter", unit: "kg" },
            { sym: "c_c", meaning: "specific heat capacity of the calorimeter", unit: "J/(kg degC)" },
            { sym: "\\Delta\\theta", meaning: "temperature rise", unit: "degC" },
          ],
        },
        say: "The joulemeter energy does 2 jobs. It warms the water, needing mass of water times its specific heat capacity times the temperature rise, and it also warms the copper calorimeter, needing mass of calorimeter times its specific heat capacity times the same rise. Add those 2 and they equal the energy delivered. Rearrange, subtracting the calorimeter's share first, and you can solve for the specific heat capacity of the water.",
      },
      {
        kind: "insight",
        body: "Losses still creep in, so you *stir* the water to spread the heat evenly and fit a *lid* to trap warm air and cut *heat loss* to the room.",
        say: "Even with lagging, some heat escapes. Stirring keeps the water at one even temperature so the thermometer reads the true value, not just the hot layer near the heater. A lid traps the warm air above the water and cuts heat loss to the room, so more of the delivered energy actually shows up as a temperature rise.",
      },
      {
        kind: "concept",
        heading: "The method of mixtures",
        figure: "fig-pr4-07-method-of-mixtures",
        body: "To find the c of a metal, heat a metal block in boiling water, then drop it *quickly* into cool water in a calorimeter. By *conservation of energy*, the *heat lost* by the hot metal equals the *heat gained* by the water and calorimeter.",
        formula: {
          latex: "m_m c_m\\,(\\theta_{hot} - \\theta_f) = (m_w c_w + m_c c_c)\\,(\\theta_f - \\theta_{cold})",
          where: [
            { sym: "m_m", meaning: "mass of metal", unit: "kg" },
            { sym: "c_m", meaning: "specific heat capacity of the metal", unit: "J/(kg degC)" },
            { sym: "\\theta_{hot}", meaning: "temperature of the hot metal", unit: "degC" },
            { sym: "\\theta_f", meaning: "final mixture temperature", unit: "degC" },
            { sym: "\\theta_{cold}", meaning: "starting temperature of the cool water", unit: "degC" },
          ],
        },
        say: "In this picture a pale blue metal block hangs on the left in a beaker of boiling blue water, so it starts at about 100 degrees Celsius. On the right the same block is being lowered into cool blue water in a white calorimeter. Because energy is conserved, the heat the hot block gives out as it cools equals the heat the cool water and its calorimeter take in as they warm. Set those 2 amounts equal and you can solve for the metal's specific heat capacity.",
      },
      {
        kind: "insight",
        body: "Transfer the metal *quickly* so little heat is lost on the way, and *stir* the mixture so it reaches one *final temperature* before you read it.",
        say: "2 habits keep this fair. Move the block from the boiling water to the calorimeter fast, so it loses very little heat to the air in transit. Then stir the mixture so the whole lot settles to one steady final temperature before you take the reading, rather than a warm patch near the block.",
      },
      {
        kind: "choice",
        question: "In both methods you keep the water stirred during heating. Why does stirring matter?",
        options: [
          "It spreads the heat so the whole sample reaches one even temperature",
          "It speeds up the chemical reaction in the water",
          "It increases the energy the heater delivers",
          "It lowers the specific heat capacity of the water",
        ],
        correct: 0,
        ask: "Think about what the thermometer would read if the water near the heater were hotter than the rest.",
        hints: [
          "Without stirring, a hot layer forms near the heater or block.",
          "Stirring evens out the temperature so the thermometer reads the true value for the whole sample.",
        ],
        explain: "Stirring spreads the heat so the whole sample sits at one even temperature, which lets the thermometer read the true value rather than just the hot layer.",
      },
      {
        kind: "slider",
        prompt: "A joulemeter delivers E = 17400 J. It warms 0.200 kg of water and a 0.080 kg copper calorimeter (c_c = 385 J/(kg degC)) by DeltaTheta = 20.0 degC. The calorimeter takes 616 J. Set the slider to c_w, in J/(kg degC).",
        min: 0,
        max: 6000,
        step: 50,
        unit: "J/(kg degC)",
        start: 0,
        targetMin: 4150,
        targetMax: 4250,
        ask: "Take the calorimeter's 616 joules off the energy first, then divide by mass of water times the temperature rise.",
        hints: [
          "The water gets 17400 minus 616, which is 16784 joules.",
          "Divide 16784 by 0.200 times 20.0, that is by 4, to get 4200.",
        ],
        working: [
          { label: "Formula", latex: "c_w = \\dfrac{E - m_c c_c\\,\\Delta\\theta}{m_w\\,\\Delta\\theta}" },
          { label: "Substitute", latex: "c_w = \\dfrac{17400 - 616}{0.200 \\times 20.0}" },
          { label: "Answer", latex: "c_w = 4.2 \\times 10^{3}\\ \\text{J/(kg\\,}^\\circ\\text{C)}" },
        ],
        explain: "The specific heat capacity of the water is 4.2 times 10 to the power 3 joules per kilogram per degree Celsius, because 17400 minus 616 is 16784 joules, and dividing by 0.200 times 20.0, which is 4, gives 4200.",
      },
      {
        kind: "choice",
        question: "In a method of mixtures, the water and calorimeter gain (0.200 x 4200 + 0.080 x 385)(28.6 - 24.0) = 4006 J. A 0.150 kg metal block cooled from 99.0 degC to the final 28.6 degC. Find c_m of the metal.",
        options: [
          "3.8 x 10^3 J/(kg degC)",
          "3.8 x 10^1 J/(kg degC)",
          "3.8 x 10^2 J/(kg degC)",
          "1.1 x 10^3 J/(kg degC)",
        ],
        correct: 2,
        ask: "Heat lost by the metal equals the 4006 joules gained. Divide 4006 by mass of metal times its temperature drop.",
        hints: [
          "The metal's temperature drop is 99.0 minus 28.6, which is 70.4 degrees Celsius.",
          "Divide 4006 by 0.150 times 70.4, that is by 10.56, to get about 380.",
        ],
        working: [
          { label: "Formula", latex: "c_m = \\dfrac{(m_w c_w + m_c c_c)(\\theta_f - \\theta_{cold})}{m_m(\\theta_{hot} - \\theta_f)}" },
          { label: "Substitute", latex: "c_m = \\dfrac{4006}{0.150 \\times (99.0 - 28.6)}" },
          { label: "Answer", latex: "c_m = 3.8 \\times 10^{2}\\ \\text{J/(kg\\,}^\\circ\\text{C)}" },
        ],
        explain: "The metal's specific heat capacity is 3.8 times 10 to the power 2 joules per kilogram per degree Celsius, because 4006 joules divided by 0.150 times 70.4, which is 10.56, is about 380.",
      },
      {
        kind: "choice",
        question: "In the method of mixtures we write heat lost by the metal = heat gained by the water and calorimeter. Which principle is this?",
        options: [
          "Newton's third law of motion",
          "The metal and water have equal specific heat capacities",
          "The metal always cools to exactly room temperature",
          "Conservation of energy",
        ],
        correct: 3,
        ask: "Think about where the energy the hot block loses actually goes.",
        hints: [
          "Energy is not created or destroyed, only transferred.",
          "The heat the block gives out is exactly the heat the water and calorimeter take in.",
        ],
        explain: "It is conservation of energy: the heat the hot metal loses is transferred to the water and calorimeter, so heat lost equals heat gained.",
      },
    ],
  },
];
