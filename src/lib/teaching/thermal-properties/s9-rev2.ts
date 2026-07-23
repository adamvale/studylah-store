import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, Revision 2. Checkpoint over KB Chapter 10,
// sections t9.4 to t9.6: latent heat, changes of state and heating/cooling
// curves, boiling and evaporation. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t9.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: latent heat, changes of state, boiling and evaporation",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "How much energy is needed to melt 2.0 kg of ice at 0 C? (l_f = 3.36 x 10^5 J/kg)",
        options: ["3.36 x 10^5 J", "6.72 x 10^5 J", "1.68 x 10^5 J", "6.72 x 10^6 J"],
        correct: 1,
        ask: "Latent heat of fusion is l_f times the mass, so work out 3.36 × 10 to the power 5, × 2.0. Which option is that?",
        hints: [
          "Use L_f equals l_f times m.",
          "3.36 × 10 to the power 5, × 2.0, is 6.72 × 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "L_f = l_f\\,m" },
          { label: "Substitute", latex: "L_f = 3.36 \\times 10^{5} \\times 2.0" },
          { label: "Answer", latex: "L_f = 6.72 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The energy needed is 6.72 × 10 to the power 5 joules, because 3.36 × 10 to the power 5 joules per kilogram, times 2.0 kilograms, is 6.72 × 10 to the power 5 joules. The temperature stays at 0 degrees the whole time.",
      },
      {
        kind: "choice",
        question: "How much energy is needed to boil away 0.50 kg of water that is already at 100 C? (l_v = 2.26 x 10^6 J/kg)",
        options: ["4.52 x 10^6 J", "2.26 x 10^6 J", "1.13 x 10^5 J", "1.13 x 10^6 J"],
        correct: 3,
        ask: "Latent heat of vaporisation is l_v times the mass, so work out 2.26 × 10 to the power 6, × 0.50. Which option matches?",
        hints: [
          "Use L_v equals l_v times m.",
          "2.26 × 10 to the power 6, × 0.50, is 1.13 × 10 to the power 6 joules.",
        ],
        working: [
          { label: "Formula", latex: "L_v = l_v\\,m" },
          { label: "Substitute", latex: "L_v = 2.26 \\times 10^{6} \\times 0.50" },
          { label: "Answer", latex: "L_v = 1.13 \\times 10^{6}\\ \\text{J}" },
        ],
        explain: "The energy needed is 1.13 × 10 to the power 6 joules, because 2.26 × 10 to the power 6 joules per kilogram, times 0.50 kilograms, is 1.13 × 10 to the power 6 joules.",
      },
      {
        kind: "choice",
        question: "On a heating curve the temperature stays constant along the flat melting plateau. Why?",
        figure: "fig-10-06-heating-curve",
        options: [
          "The absorbed energy increases the particles' potential energy, not their kinetic energy",
          "The absorbed energy increases the particles' average kinetic energy",
          "No energy is being absorbed while the solid melts",
          "The thermometer stops working at the melting point",
        ],
        correct: 0,
        ask: "During a change of state, the energy going in does not speed the particles up. Ask which kind of energy it changes instead.",
        hints: [
          "Temperature measures the average kinetic energy, and here it does not change.",
          "During melting the energy pulls the particles apart, raising their potential energy, so the kinetic energy and temperature stay the same.",
        ],
        explain: "The plateau is flat because the absorbed energy raises the particles' potential energy as they break out of the solid pattern, not their kinetic energy. Temperature tracks the average kinetic energy, so it stays constant.",
      },
      {
        kind: "choice",
        question: "Which statement is true of evaporation but NOT of boiling?",
        options: [
          "It turns liquid into gas",
          "It happens at the fixed boiling point",
          "It can happen at any temperature below the boiling point",
          "It needs energy from the surroundings",
        ],
        correct: 2,
        ask: "Both processes turn liquid into gas. Ask which one is not tied to the boiling point.",
        hints: [
          "Boiling only happens at the boiling point, throughout the whole liquid.",
          "Evaporation happens at any temperature below the boiling point, and only at the surface.",
        ],
        explain: "Only evaporation can happen at any temperature below the boiling point, taking place at the surface. Boiling is fixed at the boiling point and happens throughout the whole liquid. Both turn liquid to gas and both need energy.",
      },
      {
        kind: "choice",
        question: "1.0 kg of ice at 0 C is melted, then the water is warmed to 20 C. What total energy is needed? (l_f = 3.36 x 10^5 J/kg, c of water = 4200 J/(kg C))",
        options: ["3.36 x 10^5 J", "8.4 x 10^4 J", "3.44 x 10^5 J", "4.2 x 10^5 J"],
        correct: 3,
        ask: "Add the melting energy, l_f times m, to the warming energy, m times c times the 20 degree rise. Which option is the total?",
        hints: [
          "Melting takes l_f m equals 3.36 × 10 to the power 5 joules; warming takes m c theta equals 1.0 × 4200 × 20, which is 84000 joules.",
          "336000 + 84000 is 420000, which is 4.2 × 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = l_f\\,m + m\\,c\\,\\theta" },
          { label: "Substitute", latex: "Q = (3.36 \\times 10^{5} \\times 1.0) + (1.0 \\times 4200 \\times 20)" },
          { label: "Answer", latex: "Q = 4.2 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The total is 4.2 × 10 to the power 5 joules, because melting the ice takes 3.36 × 10 to the power 5 joules and warming the water by 20 degrees takes 84000 joules, and 336000 + 84000 is 420000 joules.",
      },
      {
        kind: "tiles",
        prompt: "0.20 kg of steam condenses and releases 452000 J. Build the working line that gives l_v.",
        tiles: ["l_v =", "452000", "\\div", "0.20", "=", "2.26 x 10^6", "J/kg", "0.50"],
        answer: ["l_v =", "452000", "\\div", "0.20", "=", "2.26 x 10^6", "J/kg"],
        ask: "Specific latent heat is the energy divided by the mass, so set up 452000 ÷ 0.20.",
        hints: [
          "Rearranging L_v equals l_v m gives l_v equals L divided by m.",
          "452000 ÷ 0.20 is 2.26 × 10 to the power 6, and the unit is joules per kilogram.",
        ],
        working: [
          { label: "Formula", latex: "l_v = \\dfrac{L}{m}" },
          { label: "Substitute", latex: "l_v = \\dfrac{452000}{0.20}" },
          { label: "Answer", latex: "l_v = 2.26 \\times 10^{6}\\ \\text{J/kg}" },
        ],
        explain: "The specific latent heat of vaporisation is 2.26 × 10 to the power 6 joules per kilogram, because 452000 joules divided by 0.20 kilograms is 2.26 × 10 to the power 6 joules per kilogram.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this account of melting is wrong. Tap the mistake.",
        lines: [
          "Melting turns a solid into a liquid at the melting point.",
          "During melting the temperature rises steadily.",
          "The absorbed energy increases the particles' potential energy.",
          "The latent heat of fusion is given by L_f = l_f m.",
        ],
        errorLine: 1,
        ask: "Check the line about what the temperature does while the solid is melting. Is that what a change of state does?",
        hints: [
          "A change of state happens at constant temperature.",
          "During melting the temperature stays constant at the melting point, it does not rise.",
        ],
        explain: "The wrong line is the one saying the temperature rises steadily during melting. During any change of state the temperature stays constant, because the energy raises potential energy, not kinetic energy. The other 3 lines are correct.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement into the process it describes.",
        bins: ["Boiling", "Evaporation"],
        items: [
          { text: "happens throughout the whole liquid", bin: 0 },
          { text: "occurs only at the fixed boiling point", bin: 0 },
          { text: "is usually fast", bin: 0 },
          { text: "happens only at the surface", bin: 1 },
          { text: "occurs at any temperature below the boiling point", bin: 1 },
          { text: "causes a cooling effect on the liquid", bin: 1 },
        ],
        ask: "For each statement, ask whether it is tied to the fixed boiling point and the whole liquid, or to the surface at any temperature. Tap each one and drop it in its bin.",
        hints: [
          "Boiling is fast, at the fixed boiling point, throughout the whole liquid.",
          "Evaporation is slow, at the surface only, at any temperature below the boiling point, and it cools the liquid.",
        ],
        explain: "Boiling happens throughout the whole liquid, only at the fixed boiling point, and is fast. Evaporation happens only at the surface, at any temperature below the boiling point, and it cools the liquid left behind.",
      },
      {
        kind: "match",
        prompt: "Match each change of state to its description.",
        pairs: [
          { left: "Melting", right: "solid to liquid, absorbs energy" },
          { left: "Freezing", right: "liquid to solid, releases energy" },
          { left: "Boiling", right: "liquid to gas, absorbs energy" },
          { left: "Condensation", right: "gas to liquid, releases energy" },
        ],
        ask: "For each change, decide whether it moves toward a more spread-out state (absorbs energy) or a more packed state (releases energy).",
        hints: [
          "Going from solid toward gas spreads the particles out and absorbs energy.",
          "Going from gas toward solid packs the particles closer and releases energy.",
        ],
        explain: "Melting is solid to liquid and boiling is liquid to gas, both absorbing energy. Freezing is liquid to solid and condensation is gas to liquid, both releasing energy.",
      },
      {
        kind: "order",
        prompt: "A block of ice is heated steadily until it becomes hot steam. Put the stages in order.",
        items: [
          "Solid ice warming up",
          "Melting at the melting point",
          "Liquid water warming up",
          "Boiling at the boiling point",
          "Steam warming up",
        ],
        ask: "Follow a heating curve from left to right: sloping parts warm the substance, flat plateaus are changes of state. Put the 5 stages in order.",
        hints: [
          "The solid must reach its melting point before it can melt.",
          "The liquid must reach its boiling point before it can boil into gas.",
        ],
        explain: "The order is the solid warming, then melting, then the liquid warming, then boiling, then the gas warming. The sloping parts change the temperature and the 2 flat plateaus are the changes of state.",
      },
      {
        kind: "open",
        prompt: "Compare boiling and evaporation. Give 3 differences between them.",
        figure: "fig-10-09-evaporation",
        modelAnswer: "Boiling happens only at the fixed boiling point, while evaporation happens at any temperature below the boiling point. Boiling takes place throughout the whole liquid, while evaporation takes place only at the surface. Boiling is fast and keeps the temperature constant, while evaporation is slow and cools the liquid because the fastest surface particles escape. Both turn liquid into gas and both need energy.",
        marks: [
          "Boiling at the fixed boiling point; evaporation at any temperature below it.",
          "Boiling throughout the whole liquid; evaporation at the surface only.",
          "Evaporation causes cooling (and is slow); boiling is fast at constant temperature.",
        ],
        ask: "Think about the temperature each happens at, where in the liquid it happens, and the effect on the temperature of the liquid.",
      },
      {
        kind: "open",
        prompt: "Explain why the temperature of a substance stays constant while it changes state, even though energy is still being supplied.",
        modelAnswer: "During a change of state the supplied energy is used to change the particles' potential energy, by pulling them apart against the forces between them, rather than to speed them up. Temperature is a measure of the average kinetic energy of the particles. Because the kinetic energy is not changing, the temperature stays constant until the change of state is complete. The energy involved is the latent heat.",
        marks: [
          "Temperature measures the average kinetic energy of the particles.",
          "The supplied energy raises potential energy (pulling particles apart), not kinetic energy.",
          "So the kinetic energy, and hence the temperature, stays constant (this energy is the latent heat).",
        ],
        ask: "Recall what temperature actually measures, then think about which kind of energy the supplied energy is changing during the change of state.",
      },
    ],
  },
];
