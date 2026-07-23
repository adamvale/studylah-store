import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (Practical Chapter 4), section 4. Grounded in Practical Chapter 04 - Heat, Experiment 1.
// Figure colours: heater/hot region = red, lagging = amber (dashed), block/water = pale blue,
// best-fit line = blue, plotted-point crosses = amber, gradient triangle = green dashed,
// thermometer/meters/wires/apparatus = white/grey, grid = grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.4",
    code: "TP4.4",
    title: "Specific heat capacity by electrical heating",
    blurb: "Finding c with an immersion heater, P = VI and a temperature-time graph",
    steps: [
      {
        kind: "concept",
        heading: "Heating a block electrically",
        figure: "fig-pr4-03-immersion-heater-block",
        body: "An *immersion heater* pushes energy into a metal block at a *steady* rate. If the block is well *lagged*, almost all that energy stays inside it, so the electrical energy supplied equals the heat gained by the block.",
        formula: {
          latex: "Q = Pt = mc\\Delta\\theta",
          where: [
            { sym: "Q", meaning: "heat energy supplied", unit: "J" },
            { sym: "P", meaning: "power of the heater", unit: "W" },
            { sym: "t", meaning: "heating time", unit: "s" },
            { sym: "m", meaning: "mass of the block", unit: "kg" },
            { sym: "c", meaning: "specific heat capacity", unit: "J/(kg degC)" },
            { sym: "\\Delta\\theta", meaning: "temperature rise", unit: "degC" },
          ],
        },
        say: "The picture shows a pale blue aluminium block. A red immersion heater sits down inside it, and a white thermometer stands in a second hole to read the temperature. Amber dashed lagging is wrapped all around the block to keep heat in. The heater delivers energy steadily, and because the lagging traps it, the energy supplied, power times time, equals the heat gained by the block, mass times c times the temperature rise.",
      },
      {
        kind: "concept",
        heading: "Power from the circuit",
        figure: "fig-pr4-04-heater-circuit",
        body: "The heater's power is the voltage across it times the current through it. An *ammeter* goes in *series* with the heater to read the current, and a *voltmeter* goes in *parallel* across it to read the voltage.",
        formula: {
          latex: "P = VI",
          where: [
            { sym: "P", meaning: "power of the heater", unit: "W" },
            { sym: "V", meaning: "voltage across the heater", unit: "V" },
            { sym: "I", meaning: "current through the heater", unit: "A" },
          ],
        },
        say: "This circuit shows a low voltage supply driving the red heater. A white ammeter sits in the same loop, in series with the heater, so the same current passes through both, and it reads the current I. A white voltmeter is connected in parallel, straight across the heater, and reads the voltage V. Multiply the voltage by the current and you get the power in watts.",
      },
      {
        kind: "concept",
        heading: "Reading c from the gradient",
        figure: "fig-pr4-05-shc-block-graph",
        body: "Rearranging shows that a graph of *temperature* against *time* is a straight *line*, and its gradient depends only on the power, the mass and c. Read the gradient off the line and you can work out c.",
        formula: {
          latex: "c = \\dfrac{P}{m \\times \\text{gradient}}",
          where: [
            { sym: "c", meaning: "specific heat capacity", unit: "J/(kg degC)" },
            { sym: "P", meaning: "power of the heater", unit: "W" },
            { sym: "m", meaning: "mass of the block", unit: "kg" },
            { sym: "\\text{gradient}", meaning: "slope of the temperature-time line, equal to P/(mc)", unit: "degC/s" },
          ],
        },
        say: "The graph plots temperature in degrees Celsius up the side against time in seconds along the bottom. The amber crosses are the measured points, and a blue best fit line runs straight through them. A green dashed triangle sits on the line to show its gradient, the rise over the run. That gradient equals the power divided by mass times c, so c is the power divided by the mass times the gradient.",
      },
      {
        kind: "slider",
        prompt: "The heater runs at 12.0 V and draws a current of 4.0 A. Set the slider to the electrical power, in watts.",
        min: 0,
        max: 100,
        step: 1,
        unit: "W",
        start: 0,
        targetMin: 47,
        targetMax: 49,
        ask: "Power is the voltage times the current, so work out 12.0 × 4.0.",
        hints: [
          "Use power equals voltage times current.",
          "12.0 × 4.0 is 48, so slide to 48 watts.",
        ],
        working: [
          { label: "Formula", latex: "P = VI" },
          { label: "Substitute", latex: "P = 12.0 \\times 4.0" },
          { label: "Answer", latex: "P = 48\\ \\text{W}" },
        ],
        explain: "The power is 48 watts, because 12.0 volts times 4.0 amps is 48 watts.",
      },
      {
        kind: "choice",
        question: "An aluminium block of mass 1.00 kg is heated at a power of 48 W. The temperature-time line is straight with a gradient of 0.056 degC/s. Find c.",
        figure: "fig-pr4-05-shc-block-graph",
        options: [
          "8.6 x 10^1 J/(kg degC)",
          "2.7 J/(kg degC)",
          "8.6 x 10^2 J/(kg degC)",
          "8.6 x 10^3 J/(kg degC)",
        ],
        correct: 2,
        ask: "Divide the power by the mass times the gradient, so work out 48 ÷ 1.00 × 0.056.",
        hints: [
          "Use c equals power divided by mass times gradient.",
          "48 ÷ 0.056 is about 860, which is 8.6 × 10 to the power 2.",
        ],
        working: [
          { label: "Formula", latex: "c = \\dfrac{P}{m \\times \\text{gradient}}" },
          { label: "Substitute", latex: "c = \\dfrac{48}{1.00 \\times 0.056}" },
          { label: "Answer", latex: "c \\approx 8.6 \\times 10^{2}\\ \\text{J/(kg}\\,^{\\circ}\\text{C)}" },
        ],
        explain: "The specific heat capacity is about 8.6 × 10 to the power 2 joules per kilogram per degree Celsius, because 48 watts divided by 1.00 kilogram times 0.056 degrees Celsius per second is roughly 860. That sits just below the accepted aluminium value of 900, a little low because of heat loss.",
      },
      {
        kind: "choice",
        question: "Why is the gradient of the temperature-time line a better way to find c than taking one start reading and one finish reading?",
        figure: "fig-pr4-05-shc-block-graph",
        options: [
          "A single pair is quicker, so it must be more accurate",
          "The gradient uses only the first 2 points on the graph",
          "The gradient ignores the power supplied by the heater",
          "The gradient averages many points, reducing the effect of random reading errors",
        ],
        correct: 3,
        ask: "Think about how many readings each method uses, and what a best-fit line through many points does to random errors.",
        hints: [
          "A single start-and-finish pair rests on just 2 readings, so one bad reading throws it off.",
          "The best-fit line uses every plotted point, so random errors tend to cancel out.",
        ],
        explain: "The gradient of the best-fit line uses many points, so random errors in individual readings tend to average out. One start reading and one finish reading depend on just 2 measurements, so a single mistake changes the answer a lot.",
      },
      {
        kind: "choice",
        question: "How should the meters be connected to measure the heater's power?",
        figure: "fig-pr4-04-heater-circuit",
        options: [
          "Ammeter in parallel with the heater, voltmeter in series",
          "Ammeter in series with the heater, voltmeter in parallel across it",
          "Both meters in series with the heater",
          "Both meters in parallel with the heater",
        ],
        correct: 1,
        ask: "The ammeter must carry the same current as the heater, and the voltmeter must read the voltage across it.",
        hints: [
          "An ammeter measures current, so it goes in the same loop as the heater, in series.",
          "A voltmeter measures voltage across a component, so it goes in parallel across the heater.",
        ],
        explain: "The ammeter goes in series so the same current flows through it and the heater, and the voltmeter goes in parallel across the heater so it reads the voltage. Multiplying the 2 readings gives the power.",
      },
      {
        kind: "insight",
        body: "The biggest error is *heat loss* to the cooler surroundings. Not all the heater's energy warms the block, yet the sum credits *all* of the supplied energy to it, so the measured c comes out *too high*. Lag the block well and start near room temperature to cut the loss.",
        say: "Here is the key limitation. Even with lagging, a little heat always leaks out to the cooler room, so some of the heater's energy never warms the block. But the calculation still counts all of the supplied energy as going into the block, so the value of c you work out ends up a bit higher than the true value. 2 fixes help: wrap the block well in insulation, and start it close to room temperature so less heat escapes.",
      },
      {
        kind: "choice",
        question: "During the experiment some heat leaks from the block to the cooler room. What does this do to the value of c found from the results?",
        options: [
          "It makes c come out too low",
          "It makes c come out too high",
          "It has no effect on c",
          "It doubles the value of c",
        ],
        correct: 1,
        ask: "The calculation credits all the supplied energy to the block, but some leaks away. Compare the measured c with the true value.",
        hints: [
          "If heat is lost, only part of the supplied energy actually warms the block.",
          "You still divide the full supplied energy by the rise, so c works out higher than the true value.",
        ],
        explain: "Some of the supplied energy is lost to the room, but the calculation credits all of it to the block, so the value of c comes out too high compared with the true value. Lagging and starting near room temperature reduce this error.",
      },
      {
        kind: "open",
        prompt: "In this experiment the block loses some heat to the cooler surroundings. Explain how this affects the measured value of c, and state 2 ways to reduce the error.",
        modelAnswer: "Some of the heater's energy is lost to the cooler surroundings instead of warming the block, but the calculation still credits all of the supplied energy to the block. Dividing the full supplied energy by the smaller real temperature rise makes the value of c found from the experiment come out higher than the true value. The error can be reduced by lagging the block well with insulation to cut the heat loss, and by starting the block near room temperature so that less heat escapes during the heating.",
        marks: [
          "Heat loss makes the measured c come out too high (all the supplied energy is credited to the block).",
          "Lag the block well with insulation to reduce heat loss.",
          "Start near room temperature to reduce the temperature difference that drives the loss.",
        ],
        ask: "Think about whether heat loss makes the measured c too high or too low, then give practical ways to keep the heat in the block.",
      },
    ],
  },
];
