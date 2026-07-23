import type { Subconcept } from "@/lib/teaching/subconcepts";

// T15 D.C. Circuits, section 5. Grounded in KB Chapter 17 (D.C. Circuits) section 17.6, thermistor part.
// Colour key: current / graph lines = blue; wires, resistors, cells, the thermistor and meters = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t15.5",
    code: "T15.5",
    title: "Thermistors",
    blurb: "A resistor that senses temperature, and how it drives a divider output",
    steps: [
      {
        kind: "concept",
        heading: "A transducer changes energy",
        body: "A *transducer* is a device that converts one form of *energy* into another. An *input transducer* turns a change in its surroundings into a change of *resistance*, which a circuit can then read.",
        say: "Start with the word transducer. It just means a device that turns one form of energy into another. The special ones we care about here are input transducers. They sense something about the world around them, like how hot or how bright it is, and turn that change into a change of resistance. Once the resistance changes, an ordinary circuit can measure it.",
      },
      {
        kind: "concept",
        heading: "A thermistor senses heat",
        figure: "fig-17-12-thermistor-graph",
        body: "A *thermistor* is an input transducer that responds to *temperature*. Its *resistance decreases* as the temperature rises, and rises again as it cools.",
        say: "A thermistor is an input transducer that reacts to temperature. Watch the blue curve on the graph. The upright axis is resistance in ohms, running from 0 up to 20, and the flat axis is temperature in degrees Celsius, from 0 to 100. As you move to the right and the thermistor gets hotter, the blue curve falls, steeply at first and then more gently. So heating it lowers its resistance, and cooling it raises the resistance back up.",
      },
      {
        kind: "concept",
        heading: "Driving a divider output",
        figure: "fig-17-10-thermistor-divider",
        body: "Put a *thermistor* at the top of a *potential divider* with a fixed resistor R below and take the *output* across R. A temperature rise lowers the thermistor's resistance, so it takes a *smaller share* of the p.d. and the output across R rises.",
        formula: {
          latex: "V_{out} = \\dfrac{R}{R + R_{thermistor}} \\times V_{in}",
          where: [
            { sym: "V_out", meaning: "output p.d. across R", unit: "V" },
            { sym: "R", meaning: "fixed resistor (lower)", unit: "\\Omega" },
            { sym: "R_thermistor", meaning: "thermistor resistance (upper)", unit: "\\Omega" },
            { sym: "V_in", meaning: "input p.d. across the pair", unit: "V" },
          ],
        },
        say: "Here is the divider. A white thermistor sits at the top and a fixed white resistor R sits below it, joined in series, with the output taken across R at the bottom. The 2 resistances share the input p.d. in proportion to their sizes. When the thermistor gets hotter its resistance drops, so it grabs a smaller slice of the voltage, which leaves a bigger slice for R. That is why the output across R climbs as the temperature rises.",
      },
      {
        kind: "concept",
        heading: "Where thermistors are used",
        body: "Because a thermistor turns *temperature* into a usable *signal*, it is the sensing part in *oven controllers*, in engine temperature sensors, and in fan switches that cut in when a circuit gets too warm.",
        say: "These sensors are everywhere heat needs watching. An oven controller uses a thermistor to hold the temperature steady. A car engine uses one to warn when it is overheating. A cooling fan switch uses one to turn the fan on only when things get too warm. In every case the thermistor is the part that feels the heat and passes on the signal.",
      },
      {
        kind: "choice",
        question: "A thermistor is in series with a fixed 8 ohm resistor across 4.0 V. The output across the 8 ohm resistor reads 1.0 V. What is the thermistor's resistance R_t?",
        options: ["16 ohms", "8 ohms", "24 ohms", "32 ohms"],
        correct: 2,
        ask: "Use V_out = R divided by (R plus R_t), all times V_in. Put in 1.0 = 8 divided by (8 plus R_t), times 4.0, and solve for R_t.",
        hints: [
          "Rearrange to 8 plus R_t = 8 times 4.0 divided by 1.0, which is 32.",
          "8 plus R_t is 32, so R_t is 32 minus 8, which is 24.",
        ],
        working: [
          { label: "Formula", latex: "V_{out} = \\dfrac{R}{R + R_t} \\times V_{in}" },
          { label: "Substitute", latex: "1.0 = \\dfrac{8}{8 + R_t} \\times 4.0" },
          { label: "Answer", latex: "8 + R_t = 32,\\ R_t = 24\\ \\Omega" },
        ],
        explain: "The thermistor is 24 ohms, because 1.0 volt equals 8 divided by 8 plus R_t times 4.0 volts, giving 8 plus R_t equals 32, so R_t is 24 ohms.",
      },
      {
        kind: "choice",
        question: "In a divider with the thermistor on top and a fixed resistor R below (output across R), what happens to the output when the thermistor gets hotter?",
        options: [
          "The output falls, because the thermistor's resistance rises",
          "The output rises, because the thermistor's resistance falls",
          "The output stays the same, because R is fixed",
          "The output falls, because R takes a bigger share",
        ],
        correct: 1,
        ask: "Heating a thermistor lowers its resistance. In a divider a smaller upper resistance takes a smaller share of the p.d., so think about what that leaves for R.",
        hints: [
          "A hotter thermistor has a lower resistance, so it takes a smaller slice of the input p.d.",
          "A smaller slice for the thermistor leaves a bigger slice for R, so the output across R rises.",
        ],
        explain: "The output rises. Heating the thermistor lowers its resistance, so it takes a smaller share of the p.d., leaving a larger share across the fixed resistor R.",
      },
      {
        kind: "graphpick",
        prompt: "Pick the graph that shows how a thermistor's resistance changes as its temperature rises.",
        xLabel: "temperature / degrees C",
        yLabel: "resistance / ohms",
        options: [
          { points: [[0, 18], [20, 12], [40, 8], [60, 5], [80, 3], [100, 2]], caption: "Falls as temperature rises" },
          { points: [[0, 2], [20, 5], [40, 8], [60, 12], [80, 15], [100, 18]], caption: "Rises as temperature rises" },
          { points: [[0, 10], [20, 10], [40, 10], [60, 10], [80, 10], [100, 10]], caption: "Stays constant" },
        ],
        correct: 0,
        ask: "A thermistor's resistance decreases as it gets hotter, steeply at first and then more gently. Look for the curve that goes downhill from left to right.",
        hints: [
          "As temperature rises the resistance should get smaller, not bigger.",
          "The correct curve starts high on the left and falls towards the right, levelling off.",
        ],
        explain: "The first graph is correct: the resistance is high when cold and falls as the temperature rises, steeply at first and then more gently.",
      },
      {
        kind: "insight",
        body: "A *thermistor* is an *input transducer* that trades heat for resistance: hotter means *lower resistance*, which in a divider lifts the output across the fixed resistor and lets a circuit react to temperature on its own.",
        say: "Here is the idea to keep. A thermistor swaps a change in temperature for a change in resistance. Hotter gives lower resistance. Drop it into a divider above a fixed resistor and a rise in temperature lifts the output voltage across that resistor. That single trick lets ovens, engines and fans sense heat and respond to it without a person watching.",
      },
    ],
  },
];
