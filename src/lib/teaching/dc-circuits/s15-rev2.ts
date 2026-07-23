import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, Revision 2. Checkpoint over KB Chapter 17, sections
// t15.4 to t15.6: the potential divider, thermistors and LDRs. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t15.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: potential dividers, thermistors and LDRs",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "What does a potential divider do to the input voltage?",
        options: [
          "It doubles the input voltage",
          "It shares the input voltage in proportion to the 2 resistances",
          "It turns the voltage into a current",
          "It stores the voltage for use later",
        ],
        correct: 1,
        ask: "A divider is just 2 resistors in series across the supply. Ask what the 2 resistors do to the p.d. between them. Which option says that?",
        hints: [
          "In a series pair the source p.d. is shared between the 2 resistors.",
          "The larger resistor takes the larger share, so the output is a fraction set by the resistances.",
        ],
        explain: "A potential divider shares the input voltage in proportion to the 2 resistances. The output is taken across one resistor and equals R_2 divided by the total resistance, times the input.",
      },
      {
        kind: "choice",
        question: "A 6 V supply is connected across a 2 ohm resistor (R1) and a 4 ohm resistor (R2) in series. What is the output V_out taken across the 4 ohm resistor?",
        figure: "fig-17-09-potential-divider",
        options: ["2 V", "6 V", "3 V", "4 V"],
        correct: 3,
        ask: "Use V_out equals R_2 divided by the total resistance, times the input. The total is 2 + 4, which is 6 ohms. Which option matches?",
        hints: [
          "V_out is 4 ÷ 6, × 6 volts.",
          "4 ÷ 6 × 6 is 4, so the output is 4 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{4}{2 + 4} \\times 6" },
          { label: "Answer", latex: "V_{out} = 4\\ \\text{V}" },
        ],
        explain: "The output is 4 volts, because 4 ohms out of the total 6 ohms takes 4 sixths of the 6 volt supply, and 4 sixths of 6 is 4.",
      },
      {
        kind: "choice",
        question: "What happens to a thermistor's resistance as its temperature rises?",
        options: ["It decreases", "It increases", "It stays the same", "It falls to zero"],
        correct: 0,
        ask: "A thermistor is an input transducer that senses temperature. Ask which way its resistance moves when it is heated. Which option is that?",
        hints: [
          "A thermistor's resistance and its temperature change in opposite directions.",
          "As it gets hotter the resistance gets smaller, and as it cools the resistance rises again.",
        ],
        explain: "A thermistor's resistance decreases as its temperature rises. It does not reach zero; it simply becomes smaller the hotter the thermistor gets.",
      },
      {
        kind: "choice",
        question: "What happens to an LDR's resistance as the light falling on it gets brighter?",
        options: ["It increases", "It stays the same", "It decreases", "It becomes infinite"],
        correct: 2,
        ask: "An LDR is a light-dependent resistor. Ask which way its resistance moves when the light gets brighter. Which option is that?",
        hints: [
          "An LDR's resistance and the brightness change in opposite directions.",
          "Bright light lowers the resistance, and in the dark the resistance rises.",
        ],
        explain: "An LDR's resistance decreases as the light gets brighter. In the dark it is high, around 5000 ohms, and in daylight it drops to around 300 ohms.",
      },
      {
        kind: "choice",
        question: "An LDR of 300 ohms in daylight is in series with a 2000 ohm resistor across a 20 V supply. What is the p.d. across the LDR in daylight?",
        figure: "fig-17-11-ldr-divider",
        options: ["20 V", "17.4 V", "10 V", "2.6 V"],
        correct: 3,
        ask: "The p.d. across the LDR is its resistance, 300, divided by the total, 300 + 2000, × 20 volts. Which option matches?",
        hints: [
          "The total resistance is 300 + 2000, which is 2300 ohms.",
          "300 ÷ 2300 × 20 is about 2.6, so the p.d. is 2.6 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{LDR} = \\dfrac{R_{LDR}}{R_{LDR} + R} \\times V_{in}" },
          { label: "Substitute", latex: "V_{LDR} = \\dfrac{300}{300 + 2000} \\times 20" },
          { label: "Answer", latex: "V_{LDR} = 2.6\\ \\text{V}" },
        ],
        explain: "The p.d. across the LDR is 2.6 volts, because 300 ohms out of the total 2300 ohms takes only a small share of the 20 volt supply.",
      },
      {
        kind: "slider",
        prompt: "A 12 V supply is across a 4 ohm resistor (R1) and a 16 ohm resistor (R2) in series. Set the slider to the output V_out taken across the 16 ohm resistor, in V.",
        min: 0,
        max: 12,
        step: 0.1,
        unit: "V",
        start: 0,
        targetMin: 9.5,
        targetMax: 9.7,
        ask: "Use V_out equals R_2 divided by the total, times the input. The total is 4 + 16, which is 20 ohms. Work out 16 ÷ 20 × 12.",
        hints: [
          "V_out is 16 ÷ 20, × 12 volts.",
          "16 ÷ 20 × 12 is 9.6, so slide to 9.6 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R_2}{R_1 + R_2} \\times V_{in}" },
          { label: "Substitute", latex: "V_{out} = \\dfrac{16}{4 + 16} \\times 12" },
          { label: "Answer", latex: "V_{out} = 9.6\\ \\text{V}" },
        ],
        explain: "The output is 9.6 volts, because 16 ohms out of the total 20 ohms takes 16 twentieths of the 12 volt supply, and that is 9.6 volts.",
      },
      {
        kind: "tiles",
        prompt: "A thermistor is in series with a fixed 8 ohm resistor across 4.0 V. The output across the 8 ohm resistor reads 1.0 V. Build the working line that gives the thermistor's resistance R_t.",
        tiles: ["R_t =", "32", "-", "8", "=", "24", "ohms", "16"],
        answer: ["R_t =", "32", "-", "8", "=", "24", "ohms"],
        ask: "The output across the 8 ohm resistor is 8 divided by the total, times 4.0. Since 1.0 is a quarter of 4.0, the total must be 4 × 8, which is 32 ohms. Take the 8 ohm resistor off that total.",
        hints: [
          "From 1.0 equals 8 over the total times 4.0, the total resistance is 32 ohms.",
          "The thermistor is 32 - 8, which is 24 ohms.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R}{R + R_t} \\times V_{in}" },
          { label: "Substitute", latex: "1.0 = \\dfrac{8}{8 + R_t} \\times 4.0" },
          { label: "Answer", latex: "R_t = 24\\ \\Omega" },
        ],
        explain: "The thermistor is 24 ohms. The output of 1.0 volt is a quarter of 4.0 volts, so the 8 ohm resistor is a quarter of the total 32 ohms, leaving 24 ohms for the thermistor.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of the 2 sensing components.",
        segments: [
          "A thermistor responds to a change in ",
          ", while an LDR responds to a change in ",
          ". In each case the resistance ",
          " as the input increases.",
        ],
        bank: ["temperature", "light", "falls", "rises", "current"],
        answer: ["temperature", "light", "falls"],
        ask: "Recall what each component senses: one reacts to heat and one to brightness. Then recall which way the resistance moves as that input grows.",
        hints: [
          "A thermistor senses temperature; an LDR senses light.",
          "For both, more input means less resistance, so the resistance falls.",
        ],
        explain: "A thermistor responds to temperature and an LDR responds to light. For both, the resistance falls as the input increases, hotter for the thermistor and brighter for the LDR.",
      },
      {
        kind: "spoterror",
        prompt: "One line about thermistors is wrong. Find it.",
        lines: [
          "A thermistor is an input transducer that senses temperature.",
          "Its resistance rises when it gets hotter.",
          "It can be used to switch a fan on when a room gets too warm.",
        ],
        errorLine: 1,
        ask: "2 of the lines are correct. Check the middle line carefully: think about which way a thermistor's resistance moves when it is heated.",
        hints: [
          "A thermistor's resistance does not rise with heat.",
          "As a thermistor gets hotter its resistance falls, so the middle line is wrong.",
        ],
        explain: "The wrong line is the second one. A thermistor's resistance falls, not rises, when it gets hotter, so line 2 states the opposite of the truth.",
      },
      {
        kind: "classify",
        prompt: "Sort each fact or use into the correct component.",
        bins: ["Thermistor", "LDR"],
        items: [
          { text: "responds to temperature", bin: 0 },
          { text: "used in an oven controller", bin: 0 },
          { text: "used in an engine temperature sensor", bin: 0 },
          { text: "responds to light intensity", bin: 1 },
          { text: "switches a street lamp on at dusk", bin: 1 },
          { text: "used in a burglar alarm that fires when a beam is broken", bin: 1 },
        ],
        ask: "For each item ask whether it is about heat or about light. Heat items belong to the thermistor and light items belong to the LDR. Tap each one into its bin.",
        hints: [
          "A thermistor senses temperature, so ovens and engine heat are its jobs.",
          "An LDR senses light, so street lamps and light beams are its jobs.",
        ],
        explain: "The thermistor handles temperature, so it suits oven controllers and engine sensors. The LDR handles light, so it suits automatic street lamps and beam-based alarms.",
      },
      {
        kind: "open",
        prompt: "Explain how a potential divider produces an output voltage that is only a fraction of the input voltage.",
        modelAnswer: "A potential divider is 2 resistors, R1 and R2, connected in series across the supply. Because they are in series the same current flows through both, and the source p.d. is shared between them in proportion to their resistances. The output is taken across one resistor, R2, so V_out = R2/(R1 + R2) x V_in. Since R2 is only part of the total resistance, the output is only a fraction of the input, and choosing the resistances sets that fraction.",
        marks: [
          "2 resistors in series across the supply, sharing the source p.d.",
          "The p.d. is shared in proportion to the resistances.",
          "V_out = R2/(R1 + R2) x V_in, so the output is a set fraction of the input.",
        ],
        ask: "Start with how the 2 resistors are connected, then explain how a series pair shares the supply p.d., and finish with the fraction taken across one resistor.",
      },
      {
        kind: "open",
        prompt: "An LDR and a fixed resistor form a potential divider that switches a street lamp on at dusk. Explain how it works as the light fades.",
        figure: "fig-17-11-ldr-divider",
        modelAnswer: "The LDR and a fixed resistor are in series across the supply, with the output taken across one of them. In bright daylight the LDR's resistance is low, so it takes only a small share of the p.d. and the output is small. As dusk falls the light gets dimmer, so the LDR's resistance rises and it takes a larger share of the p.d., so the output voltage rises. When the output reaches the switching level of the control circuit, it turns the street lamp on. So the lamp comes on only when it is dark enough.",
        marks: [
          "LDR and fixed resistor form a divider; output depends on the LDR's resistance.",
          "As light fades the LDR's resistance rises, changing the share of the p.d.",
          "The output voltage reaches the switching level and turns the lamp on in the dark.",
        ],
        ask: "Think about how the LDR's resistance changes as the light fades, how that changes the share of the p.d. in the divider, and what happens when the output reaches the switching level.",
      },
    ],
  },
];
