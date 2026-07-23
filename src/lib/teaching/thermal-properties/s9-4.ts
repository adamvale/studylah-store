import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, section 4. Grounded in KB Chapter 10 (Thermal Properties of Matter) section 10.5.
// Figure colours follow the fig-10 colour key: particles and cool regions and graph curves = blue; escaping
// fast particles / kinetic-energy highlight = green; hot region / hot liquid = red or amber; axes, gridlines,
// dimension guides and container outlines = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t9.4",
    code: "T9.4",
    title: "Latent heat",
    blurb: "The hidden energy that changes state without changing temperature",
    steps: [
      {
        kind: "concept",
        heading: "Energy with no temperature change",
        figure: "fig-10-02-heat-vs-latent",
        body: "*Latent heat* is the energy absorbed or released when a substance *changes state* at *constant temperature*. The energy changes the particles' *potential energy*, not their kinetic energy, so a thermometer shows no change.",
        say: "Latent heat is the hidden energy a substance takes in or gives out while it changes state, and the surprising thing is that the temperature holds steady the whole time. This figure is a split panel. On the heat-capacity side, energy raises the average kinetic energy of the particles, and a red hot region shows the temperature rising. On the latent-heat side, energy only pulls the particles apart, so it raises their potential energy while the temperature stays constant. Grey outlines frame the 2 halves.",
      },
      {
        kind: "concept",
        heading: "Fusion and vaporisation",
        figure: "fig-10-06-heating-curve",
        body: "Latent heat of *fusion* L_f is for *melting or solidifying* (solid to liquid), and latent heat of *vaporisation* L_v is for *boiling or condensing* (liquid to gas). The total energy is the specific latent heat times the mass.",
        formula: {
          latex: "L_f = l_f\\, m",
          where: [
            { sym: "L_f", meaning: "latent heat of fusion", unit: "J" },
            { sym: "l_f", meaning: "specific latent heat of fusion", unit: "J/kg" },
            { sym: "m", meaning: "mass changing state", unit: "kg" },
          ],
        },
        say: "There are 2 kinds of latent heat. Fusion is the melting or freezing between solid and liquid. Vaporisation is the boiling or condensing between liquid and gas. This figure is a temperature-against-time heating curve drawn in blue against grey axes. It rises through the solid, then flattens into a melting plateau where the temperature holds still, rises again through the liquid, and flattens into a longer boiling plateau, before rising through the gas. Each flat plateau is a change of state. To find the energy for a change of state, multiply the specific latent heat by the mass.",
      },
      {
        kind: "concept",
        heading: "Why boiling needs far more energy",
        figure: "fig-10-01-internal-energy-states",
        body: "For water l_v (2.26 × 10 to the power 6 J/kg) is *much larger* than l_f (3.36 × 10 to the power 5 J/kg), because *boiling* pulls the particles *completely apart* while melting only loosens them.",
        say: "The specific latent heat of vaporisation of water, 2.26 times 10 to the power 6 joules per kilogram, is far bigger than the specific latent heat of fusion, 3.36 times 10 to the power 5 joules per kilogram. This figure has 3 panels drawn left to right with blue particles. On the left the solid has particles locked in a tight pattern. In the middle the liquid has particles close but sliding. On the right the gas has particles flung far apart and moving fast. Melting only frees the particles to slide, but boiling has to drag them fully apart, and that takes much more energy.",
        formula: {
          latex: "L_v = l_v\\, m",
          where: [
            { sym: "L_v", meaning: "latent heat of vaporisation", unit: "J" },
            { sym: "l_v", meaning: "specific latent heat of vaporisation", unit: "J/kg" },
            { sym: "m", meaning: "mass changing state", unit: "kg" },
          ],
        },
      },
      {
        kind: "concept",
        heading: "Combining heating and change of state",
        body: "When a problem has both a *temperature change* and a *change of state*, add the energy for each step: use m c theta_change for every *heating step* and l m for every *state-change step*.",
        formula: {
          latex: "Q = l\\, m + m\\, c\\, \\theta",
          where: [
            { sym: "Q", meaning: "total energy", unit: "J" },
            { sym: "l\\, m", meaning: "energy for a change of state", unit: "J" },
            { sym: "m\\, c\\, \\theta", meaning: "energy for a temperature change", unit: "J" },
          ],
        },
        say: "Real problems often mix the 2 ideas. Say you melt ice and then warm the meltwater. First the ice changes state at 0 degrees, which needs the latent heat term l times m. Then the water warms up, which needs the heat-capacity term m times c times the temperature change. Work out the energy for each step on its own, then add them together for the total.",
      },
      {
        kind: "choice",
        question: "How much energy melts 2.0 kg of ice at 0 C? (l_f = 3.36 x 10^5 J/kg)",
        options: ["3.36 x 10^5 J", "1.68 x 10^5 J", "6.72 x 10^5 J", "1.34 x 10^6 J"],
        correct: 2,
        ask: "The energy for melting is the specific latent heat of fusion times the mass, so work out 3.36 × 10 to the power 5 × 2.0.",
        hints: [
          "Use L_f equals l_f times m.",
          "3.36 × 10 to the power 5 × 2.0 is 6.72 × 10 to the power 5.",
        ],
        working: [
          { label: "Formula", latex: "L_f = l_f\\, m" },
          { label: "Substitute", latex: "L_f = (3.36 \\times 10^{5}) \\times 2.0" },
          { label: "Answer", latex: "L_f = 6.72 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The energy is 6.72 × 10 to the power 5 joules, because 3.36 × 10 to the power 5 joules per kilogram times 2.0 kilograms is 6.72 × 10 to the power 5 joules.",
      },
      {
        kind: "choice",
        question: "How much energy boils away 0.50 kg of water at 100 C? (l_v = 2.26 x 10^6 J/kg)",
        options: ["1.13 x 10^6 J", "2.26 x 10^6 J", "5.65 x 10^5 J", "4.52 x 10^6 J"],
        correct: 0,
        ask: "The energy for boiling is the specific latent heat of vaporisation times the mass, so work out 2.26 × 10 to the power 6 × 0.50.",
        hints: [
          "Use L_v equals l_v times m.",
          "2.26 × 10 to the power 6 × 0.50 is 1.13 × 10 to the power 6.",
        ],
        working: [
          { label: "Formula", latex: "L_v = l_v\\, m" },
          { label: "Substitute", latex: "L_v = (2.26 \\times 10^{6}) \\times 0.50" },
          { label: "Answer", latex: "L_v = 1.13 \\times 10^{6}\\ \\text{J}" },
        ],
        explain: "The energy is 1.13 × 10 to the power 6 joules, because 2.26 × 10 to the power 6 joules per kilogram times 0.50 kilograms is 1.13 × 10 to the power 6 joules.",
      },
      {
        kind: "choice",
        question: "0.20 kg of steam condenses at 100 C and releases 452000 J. Find the specific latent heat of vaporisation l_v.",
        options: ["9.04 x 10^4 J/kg", "4.52 x 10^5 J/kg", "1.13 x 10^6 J/kg", "2.26 x 10^6 J/kg"],
        correct: 3,
        ask: "Rearrange L_v equals l_v times m to get l_v equals the energy divided by the mass, so work out 452000 ÷ 0.20.",
        hints: [
          "The specific latent heat is the energy divided by the mass.",
          "452000 ÷ 0.20 is 2260000, which is 2.26 × 10 to the power 6.",
        ],
        working: [
          { label: "Formula", latex: "l_v = \\dfrac{L_v}{m}" },
          { label: "Substitute", latex: "l_v = \\dfrac{452000}{0.20}" },
          { label: "Answer", latex: "l_v = 2.26 \\times 10^{6}\\ \\text{J/kg}" },
        ],
        explain: "The specific latent heat is 2.26 × 10 to the power 6 joules per kilogram, because 452000 joules divided by 0.20 kilograms is 2260000 joules per kilogram.",
      },
      {
        kind: "choice",
        question: "You melt 1.0 kg of ice at 0 C, then warm the meltwater to 20 C. Find the total energy. (l_f = 3.36 x 10^5 J/kg, c = 4200 J/(kg C))",
        options: ["3.36 x 10^5 J", "4.2 x 10^5 J", "8.4 x 10^4 J", "3.36 x 10^6 J"],
        correct: 1,
        ask: "Add the melting energy l_f times m to the heating energy m times c times the temperature change. Work out 336000 + 84000.",
        hints: [
          "The melting step is 3.36 × 10 to the power 5 × 1.0, and the heating step is 1.0 × 4200 × 20.",
          "336000 + 84000 is 420000, which is 4.2 × 10 to the power 5.",
        ],
        working: [
          { label: "Formula", latex: "Q = l_f\\, m + m\\, c\\, \\theta" },
          { label: "Substitute", latex: "Q = (3.36 \\times 10^{5} \\times 1.0) + (1.0 \\times 4200 \\times 20)" },
          { label: "Answer", latex: "Q = 4.2 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The total energy is 4.2 × 10 to the power 5 joules, because the melting step gives 336000 joules and the heating step gives 84000 joules, and their sum is 420000 joules.",
      },
      {
        kind: "choice",
        question: "Why does the temperature stay constant while a substance changes state?",
        figure: "fig-10-02-heat-vs-latent",
        options: [
          "The energy is all lost to the surroundings, so none reaches the particles",
          "The particles stop moving completely during the change",
          "The energy raises the particles' potential energy, not their kinetic energy",
          "The thermometer reacts too slowly to show the change",
        ],
        correct: 2,
        ask: "Temperature measures the average kinetic energy of the particles. Ask which energy the latent heat is changing during a change of state.",
        hints: [
          "During a change of state the energy pulls the particles apart rather than speeding them up.",
          "Potential energy rises while kinetic energy stays the same, so the temperature does not change.",
        ],
        explain: "The temperature stays constant because the latent heat raises the particles' potential energy, not their kinetic energy. Temperature depends on the average kinetic energy, so it is unchanged.",
      },
      {
        kind: "insight",
        body: "Every change of state runs on *latent heat*, and *vaporisation* always demands far more energy than *fusion* because it separates the particles completely.",
        say: "Here is the idea to keep. Whenever a substance melts, freezes, boils or condenses, latent heat is flowing in or out while the temperature holds steady. And boiling always costs far more than melting, because turning a liquid into a gas has to pull the particles fully apart. That is why a steam burn is so much worse than the same mass of boiling water.",
      },
    ],
  },
];
