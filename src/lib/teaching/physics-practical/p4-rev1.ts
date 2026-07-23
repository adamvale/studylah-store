import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (Practical), Revision 1. Checkpoint over sections TP4.1 to TP4.3:
// heat transfer and thermometry, heat capacity and Q = mcDeltaTheta, latent
// heat and changes of state. Question-only. No `formula` fields anywhere.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: heat transfer, thermometry, heat capacity and latent heat",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which method of heat transfer needs no medium and can cross an empty vacuum?",
        options: ["Conduction", "Convection", "Radiation", "Thermal equilibrium"],
        correct: 2,
        ask: "Ask which transfer carries energy as infra-red waves, so it can reach us across empty space. Which option is that?",
        hints: [
          "Conduction needs particles or free electrons, and convection needs a moving fluid, so both need a medium.",
          "Radiation travels as infra-red waves, which is how the Sun's energy crosses the vacuum of space to reach Earth.",
        ],
        explain: "Radiation needs no medium, because it travels as infra-red waves that can cross a vacuum. Conduction and convection both rely on particles, so they need a solid, liquid or gas to carry the energy.",
      },
      {
        kind: "choice",
        question: "A resistance thermometer has resistance 50 ohm at the ice point and 95 ohm at the steam point. At some temperature its resistance is 77 ohm. What is that temperature?",
        options: ["60 degC", "27 degC", "45 degC", "77 degC"],
        correct: 0,
        ask: "Put the readings into theta = (X_theta minus X_0) over (X_100 minus X_0), all times 100. Work out 77 - 50 over 95 - 50.",
        hints: [
          "The gap above the ice point is 77 - 50, which is 27. The full gap is 95 - 50, which is 45.",
          "27 ÷ 45 is 0.6, and 0.6 × 100 is 60 degrees Celsius.",
        ],
        working: [
          { label: "Formula", latex: "\\theta = \\dfrac{X_\\theta - X_0}{X_{100} - X_0} \\times 100" },
          { label: "Substitute", latex: "\\theta = \\dfrac{77 - 50}{95 - 50} \\times 100" },
          { label: "Answer", latex: "\\theta = 60\\ ^{\\circ}\\text{C}" },
        ],
        explain: "The temperature is 60 degrees Celsius, because 77 - 50 is 27, 95 - 50 is 45, and 27 ÷ 45 × 100 gives 60.",
      },
      {
        kind: "choice",
        question: "How much heat is needed to raise 0.50 kg of water by 60 degC? Take c = 4200 J/(kg degC).",
        options: ["1.26 x 10^4 J", "2.10 x 10^5 J", "6.30 x 10^4 J", "1.26 x 10^5 J"],
        correct: 3,
        ask: "Use Q equals m times c times DeltaTheta. Work out 0.50 × 4200 × 60.",
        hints: [
          "0.50 × 4200 is 2100 joules for every 1 degree Celsius of rise.",
          "2100 × 60 is 126000 joules, which is 1.26 × 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = mc\\Delta\\theta" },
          { label: "Substitute", latex: "Q = 0.50 \\times 4200 \\times 60" },
          { label: "Answer", latex: "Q = 1.26 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The heat needed is 1.26 × 10 to the power 5 joules, because 0.50 × 4200 × 60 is 126000 joules.",
      },
      {
        kind: "choice",
        question: "Which quantity depends only on the material, and not on how large the object is?",
        options: ["heat capacity C", "specific heat capacity c", "the total heat Q supplied", "the object's mass m"],
        correct: 1,
        ask: "Ask which quantity is defined for exactly 1 kilogram of a substance, so the size of the object cannot change it. Which option is that?",
        hints: [
          "Heat capacity C is the heat to warm the whole object by 1 degree Celsius, so a bigger object has a bigger C.",
          "Specific heat capacity c is the heat to warm 1 kilogram by 1 degree Celsius, a fixed property of the material itself.",
        ],
        explain: "Specific heat capacity depends only on the material, because it is defined per kilogram. Heat capacity depends on size through C equals m times c, so a larger object has a larger heat capacity.",
      },
      {
        kind: "choice",
        question: "Ice at 0 degC is melted. If the specific latent heat of fusion is 3.34 x 10^5 J/kg, how much heat melts 0.20 kg of the ice?",
        options: ["3.34 x 10^5 J", "1.67 x 10^5 J", "6.68 x 10^4 J", "6.68 x 10^5 J"],
        correct: 2,
        ask: "Use L equals l_f times m. Work out 3.34 × 10 to the power 5, × 0.20.",
        hints: [
          "Multiply the specific latent heat by the mass, so 3.34 × 10 to the power 5 × 0.20.",
          "3.34 × 0.20 is 0.668, so the answer is 6.68 × 10 to the power 4 joules.",
        ],
        working: [
          { label: "Formula", latex: "L = l_f m" },
          { label: "Substitute", latex: "L = 3.34 \\times 10^{5} \\times 0.20" },
          { label: "Answer", latex: "L = 6.68 \\times 10^{4}\\ \\text{J}" },
        ],
        explain: "The heat needed is 6.68 × 10 to the power 4 joules, because 3.34 × 10 to the power 5 × 0.20 is 66800 joules.",
      },
      {
        kind: "classify",
        prompt: "Sort each description into the method of heat transfer it describes.",
        bins: ["Conduction", "Convection", "Radiation"],
        items: [
          { text: "vibrations pass energy along a metal spoon", bin: 0 },
          { text: "free electrons carry energy through a metal", bin: 0 },
          { text: "warm, less dense water rises and cool water sinks", bin: 1 },
          { text: "a convection current forms in a heated fluid", bin: 1 },
          { text: "infra-red waves cross a vacuum from the Sun", bin: 2 },
          { text: "energy reaches Earth through empty space", bin: 2 },
        ],
        ask: "For each one, ask whether energy passes by particles touching (conduction), by a fluid moving in bulk (convection), or by waves that need no medium (radiation). Tap each and drop it in its bin.",
        hints: [
          "Conduction happens in solids as particles vibrate and free electrons drift; nothing moves in bulk.",
          "Convection needs a fluid that rises and sinks; radiation needs no medium at all and can cross a vacuum.",
        ],
        explain: "Conduction passes energy by vibrating particles and free electrons in a solid. Convection carries it in a moving fluid as warm fluid rises. Radiation carries it as infra-red waves that cross empty space.",
      },
      {
        kind: "match",
        prompt: "Match each quantity to its correct unit.",
        pairs: [
          { left: "specific heat capacity c", right: "J/(kg degC)" },
          { left: "heat capacity C", right: "J/degC" },
          { left: "specific latent heat l", right: "J/kg" },
          { left: "heat energy Q", right: "J" },
        ],
        ask: "Think about what each quantity is defined per. Specific quantities are per kilogram, and a temperature-based capacity is per degree Celsius. Draw each link.",
        hints: [
          "Specific heat capacity is joules per kilogram per degree Celsius, while heat capacity drops the per kilogram.",
          "Specific latent heat is joules per kilogram, and a raw amount of heat is just joules.",
        ],
        explain: "Specific heat capacity is measured in joules per kilogram per degree Celsius, heat capacity in joules per degree Celsius, specific latent heat in joules per kilogram, and heat energy in joules.",
      },
      {
        kind: "graphpick",
        prompt: "Which temperature-time graph shows a solid being warmed, melted, warmed as a liquid, then boiled?",
        xLabel: "time",
        yLabel: "temperature (degC)",
        options: [
          { points: [[0, 0], [1, 20], [2, 40], [3, 60], [4, 80], [5, 100]], caption: "A steady straight rise throughout" },
          { points: [[0, 10], [1, 30], [2, 30], [3, 55], [4, 55], [5, 75]], caption: "Rise, flat plateau, rise, flat plateau, rise" },
          { points: [[0, 80], [1, 60], [2, 60], [3, 40], [4, 40], [5, 20]], caption: "Falling with plateaus" },
          { points: [[0, 20], [1, 20], [2, 20], [3, 40], [4, 60], [5, 80]], caption: "Flat, then a steady rise" },
        ],
        correct: 1,
        ask: "The sloping parts are where Q = mc DeltaTheta warms one state, and the flat plateaus are where L = lm changes the state at constant temperature. Which graph rises, flattens, rises, flattens, then rises?",
        hints: [
          "During melting and boiling the temperature stays constant, so those parts must be flat plateaus.",
          "Warming the solid, the liquid and the gas each make the line slope upward, so look for rise, plateau, rise, plateau, rise.",
        ],
        explain: "The correct curve rises, then flattens while the solid melts, rises again through the liquid, then flattens while it boils. The plateaus are the changes of state, where added heat raises potential energy at constant temperature.",
      },
      {
        kind: "slider",
        prompt: "A 2.0 kg copper block absorbs Q = 18000 J of heat with no loss. Copper has c = 385 J/(kg degC). Set the slider to the temperature rise DeltaTheta, in degC.",
        min: 0,
        max: 40,
        step: 1,
        unit: "degC",
        start: 0,
        targetMin: 22,
        targetMax: 24,
        ask: "Rearrange Q equals m times c times DeltaTheta to get DeltaTheta equals Q over m times c. Work out 18000 ÷ 2.0 × 385.",
        hints: [
          "First find m times c, which is 2.0 × 385, equal to 770 joules per degree Celsius.",
          "18000 ÷ 770 is about 23, so slide to 23 degrees Celsius.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{Q}{mc}" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{18000}{2.0 \\times 385}" },
          { label: "Answer", latex: "\\Delta\\theta = 23\\ ^{\\circ}\\text{C}" },
        ],
        explain: "The temperature rise is about 23 degrees Celsius, because 2.0 × 385 is 770 joules per degree Celsius, and 18000 ÷ 770 is roughly 23.",
      },
      {
        kind: "tiles",
        prompt: "Build the working line that gives the heat to freeze 0.30 kg of water, with l_f = 3.34 x 10^5 J/kg.",
        tiles: ["L =", "3.34 x 10^5", "\\times", "0.30", "=", "1.0 x 10^5", "J", "6.68 x 10^4"],
        answer: ["L =", "3.34 x 10^5", "\\times", "0.30", "=", "1.0 x 10^5", "J"],
        ask: "Use L equals l_f times m, so multiply 3.34 × 10 to the power 5 by 0.30.",
        hints: [
          "Freezing releases the same latent heat that melting would absorb, so use L equals l_f times m.",
          "3.34 × 0.30 is about 1.0, so the answer is 1.0 × 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "L = l_f m" },
          { label: "Substitute", latex: "L = 3.34 \\times 10^{5} \\times 0.30" },
          { label: "Answer", latex: "L = 1.0 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The heat released is 1.0 × 10 to the power 5 joules, because 3.34 × 10 to the power 5 × 0.30 is about 100000 joules.",
      },
      {
        kind: "open",
        prompt: "During melting, ice is still being heated yet its temperature does not rise. Explain why, in terms of the energy of the particles.",
        modelAnswer: "While a solid melts, the heat supplied does not increase the kinetic energy of the particles, so the temperature stays constant. Instead the energy raises the particles' potential energy, breaking or loosening the bonds that hold them in the solid structure. This hidden energy is the latent heat of fusion. Only once all the ice has melted does further heating raise the kinetic energy again, so the temperature starts to rise.",
        marks: [
          "During melting the temperature stays constant.",
          "The heat raises potential energy, not kinetic energy.",
          "The energy breaks or loosens the bonds between particles (latent heat of fusion).",
        ],
        ask: "Temperature is linked to the kinetic energy of the particles. During a change of state, which kind of energy is the heat increasing instead?",
      },
      {
        kind: "open",
        prompt: "Explain the difference between the heat capacity of an object and the specific heat capacity of its material, and state how they are linked.",
        modelAnswer: "The heat capacity C of an object is the heat needed to raise the whole object's temperature by 1 degree Celsius, measured in joules per degree Celsius, so it depends on both the size of the object and the material. The specific heat capacity c is the heat needed to raise 1 kilogram of the material by 1 degree Celsius, measured in joules per kilogram per degree Celsius, and it depends only on the material. They are linked by C = mc, where m is the mass.",
        marks: [
          "Heat capacity C is per object (J/degC) and depends on size.",
          "Specific heat capacity c is per kilogram (J/(kg degC)) and depends only on the material.",
          "They are linked by C = mc.",
        ],
        ask: "Think about what each quantity is defined per, its unit, and whether making the object bigger changes it. Then recall the equation joining C, m and c.",
      },
    ],
  },
];
