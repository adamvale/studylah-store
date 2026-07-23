import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, topical quiz. Whole-topic check across KB Chapter 10:
// internal energy, heat capacity and specific heat capacity, energy conservation,
// latent heat, changes of state and heating/cooling curves, boiling and evaporation.

export const BOXES: Subconcept[] = [
  {
    id: "t9.quiz",
    code: "Quiz",
    title: "Thermal properties topical quiz",
    blurb: "Whole-topic check: internal energy, heat capacity, latent heat, changes of state, boiling and evaporation",
    kind: "quiz",
    steps: [
      // 1 -- choice, internal energy (correct 2)
      {
        kind: "choice",
        question: "What is the internal energy of a substance?",
        figure: "fig-10-01-internal-energy-states",
        options: [
          "The energy stored in its chemical bonds only",
          "Only the kinetic energy of its particles",
          "The total kinetic energy plus the total potential energy of all its particles",
          "Its temperature measured in joules",
        ],
        correct: 2,
        ask: "Internal energy adds up 2 stores for every particle: the energy of motion and the energy from the forces between them. Which option names both?",
        hints: [
          "Kinetic energy comes from the particles moving; potential energy comes from the forces and spacing between them.",
          "Internal energy is the total of the kinetic energy and the potential energy of all the particles.",
        ],
        explain: "Internal energy is the total kinetic energy plus the total potential energy of all the particles. The kinetic part is from their motion and the potential part is from the attractive forces and their separation.",
      },
      // 2 -- choice, specific heat capacity calc, Q water = 4.2e5 (correct 1)
      {
        kind: "choice",
        question: "2.0 kg of water is warmed from 20 C to 70 C. Take c of water as 4200 J/(kg C). How much energy Q is supplied?",
        options: [
          "1.7 x 10^5 J",
          "4.2 x 10^5 J",
          "4.2 x 10^4 J",
          "8.4 x 10^3 J",
        ],
        correct: 1,
        ask: "Energy is mass times specific heat capacity times temperature change. The change is 70 minus 20, which is 50. Work out 2.0 times 4200 times 50.",
        hints: [
          "Use Q equals m times c times the temperature change.",
          "2.0 times 4200 times 50 is 420000, which is 4.2 times 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = mc\\,\\Delta\\theta" },
          { label: "Substitute", latex: "Q = 2.0 \\times 4200 \\times 50" },
          { label: "Answer", latex: "Q = 4.2 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The energy is 4.2 times 10 to the power 5 joules, because 2.0 kilograms times 4200 joules per kilogram per degree times a 50 degree rise is 420000 joules.",
      },
      // 3 -- choice, specific heat capacity from C, c = 300 (correct 0)
      {
        kind: "choice",
        question: "A block has a heat capacity of 120 J/C and a mass of 0.40 kg. Find its specific heat capacity c.",
        options: [
          "300 J/(kg C)",
          "48 J/(kg C)",
          "0.40 J/(kg C)",
          "3000 J/(kg C)",
        ],
        correct: 0,
        ask: "Specific heat capacity is the heat capacity divided by the mass. Work out 120 divided by 0.40.",
        hints: [
          "Use c equals C divided by m.",
          "120 divided by 0.40 is 300 joules per kilogram per degree.",
        ],
        working: [
          { label: "Formula", latex: "c = \\dfrac{C}{m}" },
          { label: "Substitute", latex: "c = \\dfrac{120}{0.40}" },
          { label: "Answer", latex: "c = 300\\ \\text{J/(kg\\,C)}" },
        ],
        explain: "The specific heat capacity is 300 joules per kilogram per degree, because 120 joules per degree divided by 0.40 kilograms is 300.",
      },
      // 4 -- choice, energy conservation heater, theta = 20 (correct 3)
      {
        kind: "choice",
        question: "A 1400 W heater warms 1.0 kg of water for 60 s. Take c of water as 4200 J/(kg C). Find the temperature rise.",
        options: [
          "84 C",
          "5.0 C",
          "40 C",
          "20 C",
        ],
        correct: 3,
        ask: "First find the energy the heater gives: power times time. Then the temperature rise is that energy divided by mass times specific heat capacity.",
        hints: [
          "The energy is 1400 times 60, which is 84000 joules.",
          "The temperature rise is 84000 divided by 1.0 times 4200, which is 20 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{Pt}{mc}" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{1400 \\times 60}{1.0 \\times 4200}" },
          { label: "Answer", latex: "\\Delta\\theta = 20\\ \\text{C}" },
        ],
        explain: "The temperature rises by 20 degrees. The heater supplies 1400 times 60, which is 84000 joules, and 84000 divided by 1.0 times 4200 is 20 degrees.",
      },
      // 5 -- choice, latent heat melt ice, 6.72e5 (correct 2)
      {
        kind: "choice",
        question: "How much energy is needed to melt 2.0 kg of ice at 0 C? Take l_f of ice as 3.36 x 10^5 J/kg.",
        options: [
          "1.68 x 10^5 J",
          "3.36 x 10^5 J",
          "6.72 x 10^5 J",
          "6.72 x 10^6 J",
        ],
        correct: 2,
        ask: "The energy to melt is the specific latent heat of fusion times the mass. Work out 3.36 times 10 to the power 5 times 2.0.",
        hints: [
          "Use L equals l_f times m.",
          "3.36 times 10 to the power 5 times 2.0 is 6.72 times 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "L = l_f\\,m" },
          { label: "Substitute", latex: "L = 3.36 \\times 10^{5} \\times 2.0" },
          { label: "Answer", latex: "L = 6.72 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The energy is 6.72 times 10 to the power 5 joules, because 3.36 times 10 to the power 5 joules per kilogram times 2.0 kilograms is 672000 joules.",
      },
      // 6 -- choice, latent heat boil water, 1.13e6 (correct 0)
      {
        kind: "choice",
        question: "How much energy is needed to boil away 0.50 kg of water already at 100 C? Take l_v of water as 2.26 x 10^6 J/kg.",
        options: [
          "1.13 x 10^6 J",
          "2.26 x 10^6 J",
          "4.52 x 10^6 J",
          "1.13 x 10^5 J",
        ],
        correct: 0,
        ask: "The energy to boil is the specific latent heat of vaporisation times the mass. Work out 2.26 times 10 to the power 6 times 0.50.",
        hints: [
          "Use L equals l_v times m.",
          "2.26 times 10 to the power 6 times 0.50 is 1.13 times 10 to the power 6 joules.",
        ],
        working: [
          { label: "Formula", latex: "L = l_v\\,m" },
          { label: "Substitute", latex: "L = 2.26 \\times 10^{6} \\times 0.50" },
          { label: "Answer", latex: "L = 1.13 \\times 10^{6}\\ \\text{J}" },
        ],
        explain: "The energy is 1.13 times 10 to the power 6 joules, because 2.26 times 10 to the power 6 joules per kilogram times 0.50 kilograms is 1130000 joules.",
      },
      // 7 -- choice, latent heat conceptual (correct 3)
      {
        kind: "choice",
        question: "While ice melts at 0 C, the temperature stays constant even though energy is still supplied. Why?",
        options: [
          "The thermometer stops working at the melting point",
          "No energy is actually absorbed during melting",
          "The energy raises the average kinetic energy of the particles",
          "The energy increases the particles' potential energy, not their kinetic energy",
        ],
        correct: 3,
        ask: "Temperature tracks the average kinetic energy. During a change of state, ask which store of energy the supplied energy is going into.",
        hints: [
          "During melting the energy pulls the particles apart against their forces.",
          "That energy goes into potential energy, not kinetic energy, so the average kinetic energy and the temperature stay the same.",
        ],
        explain: "During melting the supplied energy increases the particles' potential energy as it pulls them apart, not their kinetic energy. Temperature measures the average kinetic energy, so it stays constant.",
      },
      // 8 -- choice, heating curve region (correct 1)
      {
        kind: "choice",
        question: "A heating curve rises through the solid, has a short flat plateau, rises through the liquid, has a longer flat plateau, then rises through the gas. Which part shows boiling?",
        figure: "fig-10-06-heating-curve",
        options: [
          "The first sloping part, through the solid",
          "The longer flat plateau, at the higher temperature",
          "The short flat plateau, at the lower temperature",
          "The last sloping part, through the gas",
        ],
        correct: 1,
        ask: "Boiling is a change of state, so it is a flat plateau, and it happens at a higher temperature than melting. Which plateau fits?",
        hints: [
          "Sloping parts are temperature changes; flat plateaus are changes of state.",
          "Boiling happens at the boiling point, which is higher than the melting point, so it is the longer plateau higher up.",
        ],
        explain: "Boiling is the longer flat plateau at the higher temperature. It is flat because the temperature stays constant during a change of state, and it is longer than the melting plateau because l_v is much bigger than l_f.",
      },
      // 9 -- choice, boiling vs evaporation (correct 2)
      {
        kind: "choice",
        question: "Which statement describes evaporation but not boiling?",
        options: [
          "It happens at one fixed temperature only",
          "It occurs throughout the whole body of the liquid",
          "It happens only at the surface and at any temperature below the boiling point",
          "It forms bubbles rapidly all through the liquid",
        ],
        correct: 2,
        ask: "Think about where each process happens and at what temperature. Evaporation is a surface effect that does not need the boiling point.",
        hints: [
          "Boiling needs the fixed boiling point and happens all through the liquid.",
          "Evaporation happens only at the surface and at any temperature below the boiling point.",
        ],
        explain: "Evaporation happens only at the surface and at any temperature below the boiling point. Boiling, by contrast, happens throughout the liquid and only at the fixed boiling point.",
      },
      // 10 -- choice, cooling curves A/B specific heat (correct 0)
      {
        kind: "choice",
        question: "2 equal masses are cooled in the same way. Curve A is gentler (less steep) than curve B. What does this tell you about their specific heat capacities?",
        figure: "fig-10-03-cooling-curves-AB",
        options: [
          "The material of curve A has the higher specific heat capacity",
          "The material of curve B has the higher specific heat capacity",
          "Both materials have the same specific heat capacity",
          "Specific heat capacity cannot be compared from cooling curves",
        ],
        correct: 0,
        ask: "A high specific heat capacity means a material gives out a lot of energy for each degree, so its temperature changes slowly. Which curve changes more slowly?",
        hints: [
          "A gentler, less steep curve means the temperature changes slowly.",
          "Changing slowly for the same energy loss means a higher specific heat capacity, so curve A has the higher value.",
        ],
        explain: "Curve A has the higher specific heat capacity. Its gentler slope means its temperature falls more slowly for the same cooling, which is what a high specific heat capacity does.",
      },
      // 11 -- interactive classify, temperature changes vs constant (changes of state)
      {
        kind: "classify",
        prompt: "Sort each change by whether the temperature changes or stays constant.",
        bins: ["Temperature changes", "Temperature stays constant"],
        items: [
          { text: "warming ice from -10 C up to 0 C", bin: 0 },
          { text: "melting ice at 0 C", bin: 1 },
          { text: "warming water from 20 C to 80 C", bin: 0 },
          { text: "boiling water at 100 C", bin: 1 },
          { text: "condensing steam back to water at 100 C", bin: 1 },
          { text: "cooling steam from 120 C down to 100 C", bin: 0 },
        ],
        ask: "A change of state at a fixed point keeps the temperature constant; warming or cooling within one state changes it. Tap each item and drop it in its bin.",
        hints: [
          "Melting, boiling and condensing all happen at a fixed temperature, so the temperature stays constant.",
          "Warming or cooling within one state, such as ice getting colder or steam getting hotter, changes the temperature.",
        ],
        explain: "Melting, boiling and condensing are changes of state at a fixed point, so the temperature stays constant. Warming ice, warming water, and cooling steam all change the temperature because the substance stays in one state.",
      },
      // 12 -- interactive classify, boiling vs evaporation
      {
        kind: "classify",
        prompt: "Sort each statement by whether it describes boiling or evaporation.",
        bins: ["Boiling", "Evaporation"],
        items: [
          { text: "happens only at the boiling point", bin: 0 },
          { text: "can happen at any temperature below the boiling point", bin: 1 },
          { text: "takes place throughout the whole liquid", bin: 0 },
          { text: "takes place only at the surface", bin: 1 },
          { text: "cools the liquid that is left behind", bin: 1 },
          { text: "forms bubbles rapidly throughout the liquid", bin: 0 },
        ],
        ask: "Boiling is fast, needs the boiling point, and happens all through the liquid; evaporation is slow, happens at the surface, and cools the liquid. Sort each one.",
        hints: [
          "If it needs the fixed boiling point or happens through the whole liquid, it is boiling.",
          "If it happens at the surface, below the boiling point, or cools the liquid, it is evaporation.",
        ],
        explain: "Boiling happens only at the boiling point, throughout the whole liquid, forming bubbles quickly. Evaporation happens at the surface, at any temperature below the boiling point, and cools the liquid that is left.",
      },
      // 13 -- interactive match, terms to definitions
      {
        kind: "match",
        prompt: "Match each term to its correct definition.",
        pairs: [
          { left: "Heat capacity", right: "The energy needed to change a body's temperature by 1 degree" },
          { left: "Specific heat capacity", right: "The energy needed to change the temperature of 1 kg of a material by 1 degree" },
          { left: "Latent heat of fusion", right: "The energy needed to melt a solid at constant temperature" },
          { left: "Latent heat of vaporisation", right: "The energy needed to boil a liquid at constant temperature" },
        ],
        ask: "2 of these are about raising temperature and 2 are about changing state. Watch for the word specific, which means per kilogram.",
        hints: [
          "Heat capacity is for a whole body; specific heat capacity is the same idea but per kilogram of material.",
          "Fusion is melting a solid and vaporisation is boiling a liquid, both at constant temperature.",
        ],
        explain: "Heat capacity is the energy to change a body's temperature by 1 degree; specific heat capacity is the same for 1 kilogram. Latent heat of fusion melts a solid and latent heat of vaporisation boils a liquid, both at constant temperature.",
      },
      // 14 -- interactive order, heating a solid to a gas
      {
        kind: "order",
        prompt: "Put these stages of heating a solid until it becomes a gas in the correct order.",
        items: [
          "the solid warms up and its temperature rises",
          "the solid melts at its melting point",
          "the liquid warms up and its temperature rises",
          "the liquid boils at its boiling point",
          "the gas warms up and its temperature rises",
        ],
        ask: "Start with the cold solid and follow the energy in. Melting comes before boiling because the melting point is lower.",
        hints: [
          "First the solid warms, then it melts, then the liquid warms.",
          "After the liquid warms it boils, and finally the gas warms up.",
        ],
        explain: "The solid warms, then melts, then the liquid warms, then it boils, and finally the gas warms. Warming stages change the temperature and the melting and boiling stages are changes of state.",
      },
      // 15 -- interactive cloze, evaporation cooling
      {
        kind: "cloze",
        prompt: "Complete the sentence about why evaporation cools a liquid.",
        segments: [
          "During evaporation the fastest particles at the ",
          " escape, so the average kinetic energy of those left behind ",
          ", which means the temperature of the liquid ",
          ".",
        ],
        bank: ["surface", "falls", "drops", "centre", "rises"],
        answer: ["surface", "falls", "drops"],
        ask: "Only the highest-energy particles at the top break free. Think about what happens to the average energy, and so the temperature, of the rest.",
        hints: [
          "Evaporation happens at the surface, where the fastest particles escape.",
          "Losing the fastest particles lowers the average kinetic energy, so the temperature of the liquid drops.",
        ],
        explain: "The fastest particles at the surface escape, so the average kinetic energy of those left behind falls, which means the temperature of the liquid drops. That is the cooling effect of evaporation.",
      },
      // 16 -- interactive tiles, heat capacity C = 120
      {
        kind: "tiles",
        prompt: "3000 J raises a block's temperature by 25 C. Build the working line for its heat capacity C, using C = Q / theta.",
        tiles: ["C =", "3000", "\\div", "25", "=", "120", "J/C", "J"],
        answer: ["C =", "3000", "\\div", "25", "=", "120", "J/C"],
        ask: "Heat capacity is the energy divided by the temperature change, so set up 3000 divided by 25.",
        hints: [
          "Use C equals Q divided by the temperature change.",
          "3000 divided by 25 is 120, and heat capacity is measured in joules per degree.",
        ],
        working: [
          { label: "Formula", latex: "C = \\dfrac{Q}{\\Delta\\theta}" },
          { label: "Substitute", latex: "C = \\dfrac{3000}{25}" },
          { label: "Answer", latex: "C = 120\\ \\text{J/C}" },
        ],
        explain: "The heat capacity is 120 joules per degree, because 3000 joules divided by a 25 degree rise is 120 joules per degree.",
      },
      // 17 -- interactive tiles, combined melt + warm = 4.2e5
      {
        kind: "tiles",
        prompt: "1.0 kg of ice at 0 C is melted, then the water is warmed to 20 C. Melting needs 3.36 x 10^5 J and warming needs 8.4 x 10^4 J. Build the working line for the total energy Q.",
        tiles: ["Q =", "3.36 x 10^5", "+", "8.4 x 10^4", "=", "4.2 x 10^5", "J", "6.72 x 10^5"],
        answer: ["Q =", "3.36 x 10^5", "+", "8.4 x 10^4", "=", "4.2 x 10^5", "J"],
        ask: "The total is the melting energy plus the warming energy. Add 3.36 times 10 to the power 5 and 8.4 times 10 to the power 4.",
        hints: [
          "Add the change-of-state energy and the temperature-change energy.",
          "336000 plus 84000 is 420000, which is 4.2 times 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = l_f\\,m + mc\\,\\Delta\\theta" },
          { label: "Substitute", latex: "Q = 3.36 \\times 10^{5} + 8.4 \\times 10^{4}" },
          { label: "Answer", latex: "Q = 4.2 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The total energy is 4.2 times 10 to the power 5 joules, because 3.36 times 10 to the power 5 joules to melt the ice plus 8.4 times 10 to the power 4 joules to warm the water is 420000 joules.",
      },
      // 18 -- interactive spoterror, wrong latent heat value (l_v used for melting)
      {
        kind: "spoterror",
        prompt: "A student finds the energy to melt 2.0 kg of ice at 0 C, using l_f = 3.36 x 10^5 J/kg. Tap the line with the mistake.",
        lines: [
          "L = l_f m",
          "L = 2.26 x 10^6 \\times 2.0",
          "L = 4.52 x 10^6 J",
        ],
        errorLine: 1,
        ask: "Check the number that was put in for the specific latent heat. Melting uses l_f, not the much larger vaporisation value.",
        hints: [
          "The formula line is correct, so look at the number substituted for l.",
          "The student used 2.26 times 10 to the power 6, which is l_v for boiling; melting should use 3.36 times 10 to the power 5.",
        ],
        working: [
          { label: "Formula", latex: "L = l_f\\,m" },
          { label: "Substitute", latex: "L = 3.36 \\times 10^{5} \\times 2.0" },
          { label: "Answer", latex: "L = 6.72 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The mistake is on the substitution line, which uses 2.26 times 10 to the power 6, the value for boiling. Melting uses l_f equal to 3.36 times 10 to the power 5, giving 6.72 times 10 to the power 5 joules.",
      },
      // 19 -- interactive graphpick, heating curve shape (correct 1)
      {
        kind: "graphpick",
        prompt: "Which temperature-time graph best shows a solid being heated steadily until it melts and then becomes a warmer liquid?",
        xLabel: "time / s",
        yLabel: "temperature / C",
        options: [
          { points: [[0, 0], [1, 20], [2, 40], [3, 60], [4, 80]], caption: "Rises steadily with no flat part" },
          { points: [[0, 0], [1, 20], [2, 40], [3, 40], [4, 40], [5, 60], [6, 80]], caption: "Rises, flattens at the melting point, then rises again" },
          { points: [[0, 20], [1, 20], [2, 20], [3, 40], [4, 60]], caption: "Flat at first, then rises" },
          { points: [[0, 80], [1, 60], [2, 40], [3, 20], [4, 0]], caption: "Falls steadily to zero" },
        ],
        correct: 1,
        ask: "Warming changes the temperature (a slope) and melting keeps it constant (a flat plateau). The graph should rise, flatten, then rise again.",
        hints: [
          "As the solid warms, the temperature rises; while it melts, the temperature holds steady.",
          "The correct graph rises, has a flat plateau at the melting point, then rises again as the liquid warms.",
        ],
        explain: "The correct graph rises, flattens at the melting point, then rises again. The sloping parts are the solid and then the liquid warming up, and the flat plateau is the melting, where the temperature stays constant.",
      },
      // 20 -- interactive classify, factors that speed up / slow down evaporation
      {
        kind: "classify",
        prompt: "Sort each change by whether it speeds up or slows down evaporation.",
        bins: ["Speeds up evaporation", "Slows down evaporation"],
        items: [
          { text: "raising the temperature of the liquid", bin: 0 },
          { text: "increasing the surface area", bin: 0 },
          { text: "more wind blowing across the surface", bin: 0 },
          { text: "higher humidity in the surrounding air", bin: 1 },
          { text: "higher surrounding pressure", bin: 1 },
          { text: "lowering the temperature of the liquid", bin: 1 },
        ],
        ask: "Anything that helps the fastest surface particles escape speeds evaporation up. Warmth, wind, and a bigger surface all help; damp, still, high-pressure air holds them back.",
        hints: [
          "A higher temperature, a bigger surface area, and more wind all speed evaporation up.",
          "Higher humidity, higher pressure, and a lower temperature all slow evaporation down.",
        ],
        explain: "Raising the temperature, increasing the surface area, and more wind all speed evaporation up by helping particles escape. Higher humidity, higher pressure, and a lower temperature all slow it down.",
      },
      // 21 -- open, internal energy
      {
        kind: "open",
        prompt: "Explain what is meant by the internal energy of a substance, and describe how a gas differs from a solid in terms of the particles' kinetic and potential energy.",
        figure: "fig-10-01-internal-energy-states",
        modelAnswer: "Internal energy is the total kinetic energy plus the total potential energy of all the particles in a substance. The kinetic energy comes from the motion of the particles and the potential energy comes from the forces between them and their separation. In a solid the particles vibrate slowly about fixed positions, so they have small kinetic energy and large potential energy. In a gas the particles move fast and are far apart, so they have large kinetic energy and almost no potential energy.",
        marks: [
          "Internal energy is the total kinetic energy plus the total potential energy of all the particles.",
          "Kinetic energy is from the particles' motion; potential energy is from the forces and separation.",
          "A gas has large kinetic energy and negligible potential energy; a solid has small kinetic energy and large potential energy.",
        ],
        ask: "Define internal energy as a total of 2 stores, then compare how fast the particles move and how far apart they are in a solid and a gas.",
      },
      // 22 -- open, specific heat capacity
      {
        kind: "open",
        prompt: "Explain what is meant by the specific heat capacity of a material, and why water, which has a high specific heat capacity, heats up and cools down slowly.",
        modelAnswer: "The specific heat capacity of a material is the energy needed to change the temperature of 1 kilogram of it by 1 degree. Water has a high specific heat capacity of about 4200 joules per kilogram per degree, so a lot of energy must be supplied to raise its temperature and a lot must be removed to lower it. This is why water heats up slowly and cools down slowly compared with a material with a lower specific heat capacity.",
        marks: [
          "Specific heat capacity is the energy to change the temperature of 1 kilogram by 1 degree.",
          "Water has a high specific heat capacity, about 4200 joules per kilogram per degree.",
          "A lot of energy is needed for each degree, so water heats and cools slowly.",
        ],
        ask: "State what specific heat capacity measures for 1 kilogram, then link a high value to needing a lot of energy per degree.",
      },
      // 23 -- open, energy conservation / mixing
      {
        kind: "open",
        prompt: "A cup of hot water is mixed with an equal mass of cold water. Explain, using energy, why they reach the same final temperature.",
        modelAnswer: "Energy is conserved, so the energy released by the hot water as it cools is absorbed by the cold water as it warms. The hot water loses energy and its temperature falls, while the cold water gains energy and its temperature rises. This continues until both are at the same temperature, called thermal equilibrium. Because the masses are equal and it is the same material, the final temperature is the average of the 2 starting temperatures.",
        marks: [
          "Energy released by the hot water equals the energy absorbed by the cold water.",
          "The hot water cools and the cold water warms until they reach the same temperature.",
          "This equal state is thermal equilibrium, and for equal masses it is the average of the 2 temperatures.",
        ],
        ask: "Follow the energy from the hot water to the cold water, and say what stops the transfer.",
      },
      // 24 -- open, latent heat / constant temperature
      {
        kind: "open",
        prompt: "Explain why the temperature of a substance stays constant while it is changing state, even though energy is still being supplied.",
        modelAnswer: "During a change of state the supplied energy is used to change the potential energy of the particles by pulling them apart against the forces between them, not to speed them up. Temperature measures the average kinetic energy of the particles, and because the kinetic energy is not changing, the temperature stays constant. The energy absorbed at constant temperature is the latent heat. Once the change of state is complete, further energy raises the kinetic energy again and the temperature rises.",
        marks: [
          "The energy goes into the particles' potential energy, separating them, not into kinetic energy.",
          "Temperature measures the average kinetic energy, which is not changing, so the temperature stays constant.",
          "The energy absorbed at constant temperature is the latent heat.",
        ],
        ask: "Say which store of energy the supplied energy goes into during a change of state, and link temperature to kinetic energy.",
      },
      // 25 -- open, boiling vs evaporation
      {
        kind: "open",
        prompt: "Compare boiling and evaporation, giving 2 ways they are different.",
        figure: "fig-10-09-evaporation",
        modelAnswer: "Boiling and evaporation both change a liquid into a gas, but they differ in several ways. Boiling happens only at the fixed boiling point, while evaporation happens at any temperature below the boiling point. Boiling takes place throughout the whole liquid and is fast, while evaporation takes place only at the surface and is slow. Evaporation also causes a cooling effect because the fastest particles escape, whereas boiling keeps the temperature constant.",
        marks: [
          "Boiling occurs only at the boiling point; evaporation occurs at any temperature below it.",
          "Boiling happens throughout the whole liquid; evaporation happens only at the surface.",
          "Evaporation causes a cooling effect, and it is slower than boiling.",
        ],
        ask: "Contrast the 2 on temperature, on where in the liquid they happen, and on speed. Give at least 2 clear differences.",
      },
    ],
  },
];
