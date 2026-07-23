import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, section 6. Grounded in KB Chapter 17 (17.6, LDR part).
// Figure colours follow the chapter key: current and moving charge = blue; wires, resistors,
// cells, the LDR and the meters = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t15.6",
    code: "T15.6",
    title: "Light-dependent resistors (LDRs)",
    blurb: "A resistor whose value drops in bright light, and how it switches lamps on and off",
    steps: [
      {
        kind: "concept",
        heading: "Light changes its resistance",
        body: "A *light-dependent resistor* (LDR) is an *input transducer* that responds to *light intensity*. Its *resistance decreases* as the light falling on it gets brighter, and it rises again in the dark.",
        say: "An LDR is a resistor that senses light. When bright light shines on it, its resistance drops to a low value, around 300 ohms. Put it in the dark and its resistance climbs to about 5000 ohms. So the brighter the light, the lower the resistance.",
      },
      {
        kind: "concept",
        heading: "An LDR in a potential divider",
        figure: "fig-17-11-ldr-divider",
        body: "Place the *LDR* at the top of a divider with a *fixed resistor* R below and take the output across R. Brighter light lowers the LDR's resistance, so it takes a *smaller share* of the p.d. and the *output across R increases*.",
        formula: {
          latex: "V_{LDR} = \\dfrac{R_{LDR}}{R_{LDR} + R} \\times V_{in}",
          where: [
            { sym: "V_{LDR}", meaning: "p.d. across the LDR", unit: "V" },
            { sym: "R_{LDR}", meaning: "resistance of the LDR", unit: "\\Omega" },
            { sym: "R", meaning: "fixed resistor", unit: "\\Omega" },
            { sym: "V_{in}", meaning: "supply p.d.", unit: "V" },
          ],
        },
        say: "In the picture the LDR sits at the top of a single loop drawn in white, with a fixed resistor R below it, also white. The output is taken across R at the bottom. The supply drives a current, shown in blue, round the loop. When the light gets brighter the LDR's resistance falls, so it keeps a smaller share of the supply p.d. and the voltage across R rises. The p.d. across the LDR itself is its own resistance divided by the total resistance, all times the supply voltage.",
      },
      {
        kind: "concept",
        heading: "What LDRs are used for",
        body: "Because an LDR turns a change of *light* into a change of *voltage*, it can switch other circuits automatically. Common uses are *automatic street lamps* that come on at dusk and *burglar alarms* triggered when a beam of light is broken.",
        say: "An LDR lets a circuit react to light without anyone watching. A street lamp uses one to switch itself on when the sky darkens at dusk and off again at dawn. A burglar alarm can watch a beam of light across a doorway, and the sudden change when someone blocks the beam sets off the alarm.",
      },
      {
        kind: "choice",
        question: "As the light falling on an LDR gets brighter, its resistance:",
        options: ["increases", "decreases", "stays the same", "drops to zero then rises"],
        correct: 1,
        ask: "Recall the rule for an LDR: more light means the resistance goes one way, less light the other. Which way for brighter light?",
        hints: [
          "In the dark an LDR has a high resistance, thousands of ohms.",
          "Shine bright light on it and the resistance falls to a low value.",
        ],
        explain: "The resistance decreases. More light on the LDR means fewer ohms, so bright light gives a low resistance and darkness gives a high one.",
      },
      {
        kind: "choice",
        question: "An LDR of 300 ohm in daylight is in series with a 2000 ohm resistor across a 20 V supply. What is the p.d. across the LDR?",
        figure: "fig-17-11-ldr-divider",
        options: ["1.4 V", "17.4 V", "2.6 V", "20 V"],
        correct: 2,
        ask: "The p.d. across the LDR is its resistance over the total resistance, times the supply. Work out 300 ÷ 2300, then times 20.",
        hints: [
          "The total resistance is 300 + 2000, which is 2300 ohms.",
          "300 ÷ 2300 is about 0.13, and 0.13 × 20 is about 2.6.",
        ],
        working: [
          { label: "Formula", latex: "V_{LDR} = \\dfrac{R_{LDR}}{R_{LDR} + R} \\times V_{in}" },
          { label: "Substitute", latex: "V_{LDR} = \\dfrac{300}{300 + 2000} \\times 20" },
          { label: "Answer", latex: "V_{LDR} = 2.6\\ \\text{V}" },
        ],
        explain: "The p.d. across the LDR is 2.6 volts, because 300 ÷ 2300 is about 0.13, and 0.13 × 20 volts is 2.6 volts. In daylight the LDR's low resistance keeps only a small share of the supply.",
      },
      {
        kind: "choice",
        question: "The same LDR rises to 5000 ohm at night, still in series with the 2000 ohm resistor across 20 V. What is the p.d. across the LDR now?",
        options: ["14.3 V", "5.7 V", "10 V", "2.6 V"],
        correct: 0,
        ask: "Use the same divider rule with the night value. The total is now 5000 + 2000, so work out 5000 ÷ 7000, then times 20.",
        hints: [
          "The total resistance at night is 5000 + 2000, which is 7000 ohms.",
          "5000 ÷ 7000 is about 0.71, and 0.71 × 20 is about 14.3.",
        ],
        working: [
          { label: "Formula", latex: "V_{LDR} = \\dfrac{R_{LDR}}{R_{LDR} + R} \\times V_{in}" },
          { label: "Substitute", latex: "V_{LDR} = \\dfrac{5000}{5000 + 2000} \\times 20" },
          { label: "Answer", latex: "V_{LDR} = 14.3\\ \\text{V}" },
        ],
        explain: "The p.d. across the LDR is 14.3 volts, because 5000 ÷ 7000 is about 0.71, and 0.71 × 20 volts is 14.3 volts. In the dark the LDR's high resistance takes most of the supply.",
      },
      {
        kind: "choice",
        question: "A lamp is wired to switch on when the p.d. across this LDR reaches 10 V. Given 2.6 V in daylight and 14.3 V at night, when does the lamp come on?",
        options: ["in daylight only", "all the time", "never", "at night only"],
        correct: 3,
        ask: "Compare each p.d. with the 10 volt switching level. The lamp comes on only when the LDR's p.d. is above 10 volts.",
        hints: [
          "In daylight the p.d. is 2.6 volts, which is below 10 volts.",
          "At night the p.d. is 14.3 volts, which is above 10 volts.",
        ],
        explain: "The lamp comes on at night only. The 2.6 volts in daylight is below the 10 volt level, but the 14.3 volts at night is above it, so the lamp switches on when it gets dark.",
      },
      {
        kind: "open",
        prompt: "Explain how a potential divider containing an LDR can switch a street lamp on automatically at dusk.",
        figure: "fig-17-11-ldr-divider",
        modelAnswer: "The LDR is placed in a potential divider with a fixed resistor. As dusk falls the light dims, so the LDR's resistance rises. Its share of the supply p.d. therefore rises, and this changing voltage is fed to a switching circuit. When the p.d. crosses the set level the switch turns the lamp on. At dawn the light brightens, the LDR's resistance drops, the p.d. falls back and the lamp switches off.",
        marks: [
          "The LDR is in a potential divider with a fixed resistor.",
          "As it gets darker the LDR's resistance rises (or in daylight it falls).",
          "This changes the p.d. across part of the divider.",
          "The changing p.d. drives a switch that turns the lamp on at dusk and off at dawn.",
        ],
        ask: "Think about what happens to the LDR's resistance as the light fades, how that changes the voltage in the divider, and how that voltage can control a switch.",
      },
      {
        kind: "insight",
        body: "An LDR turns *light* into a change of *resistance*, and a *potential divider* turns that into a change of *voltage* a circuit can act on, which is why a street lamp can decide for itself when to switch on.",
        say: "Here is the idea to keep. An LDR by itself only changes its resistance. Put it in a potential divider and that change becomes a change in voltage, and a voltage is something a switching circuit can respond to. That 2 step chain, light to resistance to voltage, is how a street lamp senses the dusk and turns itself on.",
      },
    ],
  },
];
