import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, section 4. Grounded in KB Chapter 21 (Electromagnetic Induction) section 21.4.
// Figure colours follow the T19 key: coils, wires and the soft-iron core = white/grey; induced current = blue;
// field lines = grey. fig-21-07-transformer shows primary and secondary coils on a closed laminated soft-iron core.

export const BOXES: Subconcept[] = [
  {
    id: "t19.4",
    code: "T19.4",
    title: "The transformer",
    blurb: "How a pair of coils on an iron core changes an a.c. voltage up or down",
    steps: [
      {
        kind: "concept",
        heading: "What a transformer is",
        figure: "fig-21-07-transformer",
        body: "A *transformer* changes the size of an a.c. voltage. It has a *primary* coil and a *secondary* coil wound on a closed *laminated soft-iron core*.",
        say: "In the diagram a grey rectangular loop is the closed soft-iron core, drawn as many thin stacked layers, or laminations. Around the left limb white wire is wound as the primary coil, and around the right limb more white wire forms the secondary coil. The 2 coils never touch each other; the shared iron core is all that links them.",
      },
      {
        kind: "concept",
        heading: "How it induces a voltage",
        body: "The *alternating* current in the primary makes a *changing magnetic field* in the core. That changing field threads the secondary and *induces* an alternating e.m.f. in it, with no wire joining the 2 coils.",
        say: "The primary current is alternating, so it builds a magnetic field in the core that keeps changing direction. The core guides that changing field round to the secondary coil. Because the field through the secondary is always changing, it induces an alternating e.m.f. there, even though no wire connects the input side to the output side.",
      },
      {
        kind: "concept",
        heading: "Turns decide the voltage",
        body: "The voltages are in the same ratio as the *turns*. More turns on the secondary give a *step-up* to a higher voltage; fewer secondary turns give a *step-down* to a lower voltage.",
        formula: {
          latex: "\\dfrac{V_s}{V_p} = \\dfrac{N_s}{N_p}",
          where: [
            { sym: "V_s", meaning: "secondary voltage", unit: "V" },
            { sym: "V_p", meaning: "primary voltage", unit: "V" },
            { sym: "N_s", meaning: "turns on the secondary", unit: "turns" },
            { sym: "N_p", meaning: "turns on the primary", unit: "turns" },
          ],
        },
        say: "The secondary voltage divided by the primary voltage equals the secondary turns divided by the primary turns. So if the secondary has more turns than the primary, its voltage is higher, and we call it a step-up transformer. If it has fewer turns, the voltage is lower, and it is a step-down transformer.",
      },
      {
        kind: "concept",
        heading: "Why the core is laminated",
        body: "The soft-iron core is *laminated*, built from thin sheets, to cut down wasteful *eddy currents* that would swirl in solid iron and *heat* the core.",
        say: "A changing field would drive little swirling currents, called eddy currents, round inside a solid iron core, and those currents waste energy as heat. So the core is not one solid block but a stack of thin iron sheets, each with an insulating coat, so current cannot swirl freely across it. That keeps the transformer cooler and more efficient.",
      },
      {
        kind: "choice",
        question: "A transformer has 1200 turns on its primary and 60 turns on its secondary. The primary is connected to a 240 V a.c. supply. What is the secondary voltage V_s?",
        options: ["4800 V", "12 V", "48 V", "20 V"],
        correct: 1,
        ask: "Use V_s over V_p equals N_s over N_p, so V_s is 240 times 60 divided by 1200. Which option is that?",
        hints: [
          "Multiply 240 volts by the turns ratio, 60 over 1200.",
          "240 times 60 is 14400, and divided by 1200 that is 12.",
        ],
        working: [
          { label: "Formula", latex: "V_s = V_p \\times \\dfrac{N_s}{N_p}" },
          { label: "Substitute", latex: "V_s = 240 \\times \\dfrac{60}{1200}" },
          { label: "Answer", latex: "V_s = 12\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 12 volts, because 240 volts times 60 over 1200 is 12 volts. Fewer turns on the secondary give a lower voltage, so this is a step-down transformer.",
      },
      {
        kind: "slider",
        prompt: "A transformer has 800 turns on its primary and 200 turns on its secondary, with 240 V across the primary. Set the slider to the secondary voltage V_s, in volts.",
        min: 0,
        max: 120,
        step: 5,
        unit: "V",
        start: 0,
        targetMin: 55,
        targetMax: 65,
        ask: "The secondary voltage is 240 times 200 divided by 800. Work that out and slide to it.",
        hints: [
          "Multiply 240 volts by the turns ratio, 200 over 800, which is one quarter.",
          "240 times 200 divided by 800 is 60, so slide to 60 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_s = V_p \\times \\dfrac{N_s}{N_p}" },
          { label: "Substitute", latex: "V_s = 240 \\times \\dfrac{200}{800}" },
          { label: "Answer", latex: "V_s = 60\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 60 volts, because 240 volts times 200 over 800 is 60 volts. This is a step-down transformer.",
      },
      {
        kind: "choice",
        question: "An ideal step-down transformer takes 230 V and delivers 46 V. The primary current is 1.2 A. What is the secondary current I_s?",
        options: ["0.24 A", "5.0 A", "6.0 A", "1.2 A"],
        correct: 2,
        ask: "Power is conserved, so V_p I_p equals V_s I_s. That makes I_s equal to 230 times 1.2 divided by 46. Which option is that?",
        hints: [
          "Rearrange V_p I_p equals V_s I_s to get I_s equals V_p I_p over V_s.",
          "230 times 1.2 is 276, and divided by 46 that is 6.0.",
        ],
        working: [
          { label: "Formula", latex: "I_s = \\dfrac{V_p I_p}{V_s}" },
          { label: "Substitute", latex: "I_s = \\dfrac{230 \\times 1.2}{46}" },
          { label: "Answer", latex: "I_s = 6.0\\ \\text{A}" },
        ],
        explain: "The secondary current is 6.0 amperes, because 230 volts times 1.2 amperes is 276 watts, and 276 divided by 46 volts is 6.0 amperes. Stepping the voltage down steps the current up.",
      },
      {
        kind: "choice",
        question: "An ideal transformer has a primary at 120 V drawing 0.30 A. The secondary current is 0.015 A. What is the secondary voltage V_s?",
        options: ["6 V", "240 V", "800 V", "2400 V"],
        correct: 3,
        ask: "Power is conserved, so V_p I_p equals V_s I_s, giving V_s equal to 120 times 0.30 divided by 0.015. Which option is that?",
        hints: [
          "Rearrange V_p I_p equals V_s I_s to get V_s equals V_p I_p over I_s.",
          "120 times 0.30 is 36, and divided by 0.015 that is 2400.",
        ],
        working: [
          { label: "Formula", latex: "V_s = \\dfrac{V_p I_p}{I_s}" },
          { label: "Substitute", latex: "V_s = \\dfrac{120 \\times 0.30}{0.015}" },
          { label: "Answer", latex: "V_s = 2400\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 2400 volts, because 120 volts times 0.30 amperes is 36 watts, and 36 divided by 0.015 amperes is 2400 volts. A small secondary current goes with a large secondary voltage, so this is a step-up transformer.",
      },
      {
        kind: "choice",
        question: "Why must a transformer be supplied with a.c. rather than d.c.?",
        figure: "fig-21-07-transformer",
        options: [
          "A.c. keeps changing, so the primary's magnetic field keeps changing and induces an e.m.f. in the secondary; a steady d.c. field would not change and would induce nothing.",
          "A.c. carries more energy than d.c., so only a.c. is strong enough to cross the iron core.",
          "D.c. cannot flow through a coil of wire, so it never reaches the primary.",
          "The laminations only let a.c. pass between the 2 coils.",
        ],
        correct: 0,
        ask: "Induction needs a changing magnetic field. Think about which supply keeps the primary's field changing.",
        hints: [
          "A steady current makes a steady, unchanging field, and an unchanging field induces no e.m.f.",
          "Only an alternating current keeps the field changing, so only a.c. induces a voltage in the secondary.",
        ],
        explain: "A transformer needs a.c. because induction depends on a changing magnetic field. Alternating current keeps the primary's field changing, so it induces an e.m.f. in the secondary. A steady d.c. gives an unchanging field and induces nothing.",
      },
      {
        kind: "insight",
        body: "A transformer makes no energy: in an *ideal* one the *power* out equals the power in, so a *step-up* in voltage must bring a step-down in current.",
        formula: {
          latex: "V_p I_p = V_s I_s",
          where: [
            { sym: "V_p", meaning: "primary voltage", unit: "V" },
            { sym: "I_p", meaning: "primary current", unit: "A" },
            { sym: "V_s", meaning: "secondary voltage", unit: "V" },
            { sym: "I_s", meaning: "secondary current", unit: "A" },
          ],
        },
        say: "Here is the key trade to remember. A transformer does not create energy, so for an ideal one the power delivered by the secondary equals the power fed to the primary. Multiply voltage by current on each side and the 2 match. That is why raising the voltage by some factor must lower the current by the same factor.",
      },
    ],
  },
];
