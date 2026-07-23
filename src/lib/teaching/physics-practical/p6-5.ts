import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical Chapter 6), section 5. Grounded in Practical Chapter 06,
// Experiments A, C and D (measuring resistance). Figure colours follow the house dark-theme key:
// circuit wires, meters (ammeter A, voltmeter V), components and the metre rule = white/grey; the
// current = amber; on an R/L or I-V graph the best-fit line = blue, guides and gradient triangle = grey,
// axis labels amber, axes white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.5",
    code: "TP6.5",
    title: "Measuring resistance experiments",
    blurb: "Finding a resistance from R = V/I, and using straight-line graphs for a wire and a component",
    steps: [
      {
        kind: "concept",
        heading: "Resistance from R = V/I",
        figure: "fig-pr6-09-lamp-circuit",
        body: "To measure a resistance, put an *ammeter in series* to read the current and a *voltmeter across* the component to read the voltage, then use *R = V/I*.",
        formula: {
          latex: "R = \\dfrac{V}{I}",
          where: [
            { sym: "R", meaning: "resistance", unit: "ohms" },
            { sym: "V", meaning: "voltage across the component", unit: "V" },
            { sym: "I", meaning: "current through the component", unit: "A" },
          ],
        },
        say: "In this circuit the white wires carry an amber current round the loop. A meter marked A, the ammeter, sits in series in the main line so the same current passes through it and through the lamp. A second meter marked V, the voltmeter, is connected across the lamp, between the points A and B, to read the voltage over just that component. Divide the voltage by the current and you have the resistance in ohms.",
      },
      {
        kind: "insight",
        body: "*Open the switch between readings* so the current does not keep flowing. A current *heats* the wire, and a hotter wire has a higher resistance, so leaving it on would make the resistance *drift*.",
        say: "Here is a habit that keeps your readings honest. Only close the switch long enough to take each pair of readings, then open it again. If the current flows the whole time, it warms the component, and warming a metal raises its resistance. By opening the switch between readings you stop that heating, so the resistance you measure stays steady instead of drifting upward.",
      },
      {
        kind: "concept",
        heading: "A wire in series with resistor X",
        figure: "fig-pr6-13-wire-circuit",
        body: "In the *wire-length* experiment a length L of resistance wire sits in *series* with a fixed resistor X. The total resistance is the wire's part *plus R_X*, so R = (rho/A) L + R_X.",
        formula: {
          latex: "\\dfrac{R}{L} = R_X\\left(\\dfrac{1}{L}\\right) + \\dfrac{\\rho}{A}",
          where: [
            { sym: "R", meaning: "total resistance measured", unit: "ohms" },
            { sym: "L", meaning: "tapped length of wire", unit: "m" },
            { sym: "R_X", meaning: "resistance of the fixed resistor X", unit: "ohms" },
            { sym: "rho/A", meaning: "resistivity divided by area", unit: "ohm/m" },
          ],
        },
        say: "The white metre rule carries a resistance wire, and a sliding contact taps off a length L of it, shown by the amber current path. That tapped wire is in series with a fixed resistor labelled X, so the resistance you read is the wire's share plus the resistor's share, R equals rho over A times L, plus R X. Divide the whole equation by L and you get R over L equals R X times one over L, plus rho over A.",
      },
      {
        kind: "concept",
        heading: "Plot R/L against 1/L",
        figure: "fig-pr6-14-wire-graph",
        body: "Because R/L = R_X (1/L) + rho/A is a *straight line*, plotting *R/L against 1/L* gives a line whose *gradient is R_X* and whose *intercept is rho/A*.",
        say: "That rearranged equation has the shape of a straight line, so we plot R over L up the vertical axis against one over L along the horizontal axis. The blue best-fit line rises steadily, with a grey gradient triangle drawn against it. The slope of that line is R X, the resistance of the fixed resistor, and where the line meets the vertical axis, the intercept, is rho over A for the wire.",
      },
      {
        kind: "concept",
        heading: "Testing an unknown component X",
        figure: "fig-pr6-16-component-iv",
        body: "For an unknown *component X*, plot *I against V*. A *straight line through the origin* means the component is ohmic, and the gradient is 1/R.",
        formula: {
          latex: "\\text{gradient} = \\dfrac{1}{R}",
          where: [
            { sym: "gradient", meaning: "slope of the I against V line", unit: "A/V" },
            { sym: "R", meaning: "resistance of component X", unit: "ohms" },
          ],
        },
        say: "To find out what an unknown component X does, vary the voltage across it, record the current each time, and plot current up against voltage along. Here the blue best-fit line is straight and passes through the origin, which tells us X is ohmic, its resistance stays constant. The gradient of that line is one over R, so once you measure the slope you take its reciprocal to get the resistance.",
      },
      {
        kind: "choice",
        question: "A voltmeter across a lamp reads 9.30 V while the ammeter in series reads 1.52 A. Find the resistance of the lamp.",
        figure: "fig-pr6-09-lamp-circuit",
        options: ["14.1 ohms", "0.163 ohms", "6.12 ohms", "10.8 ohms"],
        correct: 2,
        ask: "Resistance is voltage divided by current, so work out 9.30 ÷ 1.52.",
        hints: [
          "Use R = V/I with V of 9.30 volts and I of 1.52 amperes.",
          "9.30 ÷ 1.52 is about 6.12.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V}{I}" },
          { label: "Substitute", latex: "R = \\dfrac{9.30}{1.52}" },
          { label: "Answer", latex: "R = 6.12\\ \\text{ohms}" },
        ],
        explain: "The resistance is 6.12 ohms, because 9.30 volts divided by 1.52 amperes is 6.12 ohms.",
      },
      {
        kind: "open",
        prompt: "In an experiment to measure the resistance of a wire, explain why the switch should be opened between taking readings.",
        modelAnswer: "A current flowing through the wire heats it, and the resistance of a metal wire rises as its temperature rises. If the switch is left closed the wire keeps heating, so its resistance drifts upward and the readings become inconsistent. Opening the switch between readings stops the current, lets the wire stay near room temperature, and keeps the resistance steady so R = V/I gives reliable values.",
        marks: [
          "A current heats the wire (raises its temperature).",
          "A hotter metal wire has a higher resistance, so leaving it on makes R drift.",
          "Opening the switch limits heating and keeps the resistance steady for reliable readings.",
        ],
        ask: "Think about what a flowing current does to the temperature of the wire, and how the resistance of a metal changes with temperature.",
      },
      {
        kind: "choice",
        question: "On a graph of R/L against 1/L the line passes through (1.0, 1.7) and (5.0, 6.5). The gradient equals R_X. Find R_X.",
        figure: "fig-pr6-14-wire-graph",
        options: ["4.8 ohms", "1.20 ohms", "0.50 ohms", "3.2 ohms"],
        correct: 1,
        ask: "The gradient is the change in R/L divided by the change in 1/L, so work out (6.5 - 1.7) divided by (5.0 - 1.0).",
        hints: [
          "Gradient is rise over run: (6.5 - 1.7) over (5.0 - 1.0).",
          "4.8 ÷ 4.0 is 1.20.",
        ],
        working: [
          { label: "Formula", latex: "R_X = \\dfrac{\\Delta(R/L)}{\\Delta(1/L)}" },
          { label: "Substitute", latex: "R_X = \\dfrac{6.5 - 1.7}{5.0 - 1.0}" },
          { label: "Answer", latex: "R_X = 1.20\\ \\text{ohms}" },
        ],
        explain: "R_X is 1.20 ohms, because 6.5 - 1.7 is 4.8, and 5.0 - 1.0 is 4.0, and 4.8 ÷ 4.0 is 1.20 ohms.",
      },
      {
        kind: "choice",
        question: "For component X the I against V line has a gradient of (0.25 - 0.10)/(5.0 - 2.0) A V^-1. The gradient equals 1/R. Find the resistance R.",
        figure: "fig-pr6-16-component-iv",
        options: ["0.050 ohms", "6.7 ohms", "0.15 ohms", "20 ohms"],
        correct: 3,
        ask: "First find the gradient, (0.25 - 0.10) over (5.0 - 2.0), then take R as 1 divided by that gradient.",
        hints: [
          "The gradient is 0.15 ÷ 3.0, which is 0.050 amperes per volt.",
          "R is 1 ÷ 0.050, which is 20.",
        ],
        working: [
          { label: "Formula", latex: "\\text{gradient} = \\dfrac{1}{R} = \\dfrac{0.25 - 0.10}{5.0 - 2.0}" },
          { label: "Substitute", latex: "R = \\dfrac{1}{0.050}" },
          { label: "Answer", latex: "R = 20\\ \\text{ohms}" },
        ],
        explain: "The gradient is 0.15 ÷ 3.0, which is 0.050 amperes per volt, and R is 1 ÷ 0.050, which is 20 ohms.",
      },
      {
        kind: "graphpick",
        prompt: "Which graph shows the expected result for the wire experiment, a plot of R/L against 1/L?",
        xLabel: "1/L",
        yLabel: "R/L",
        options: [
          { points: [[1.0, 1.7], [3.0, 4.1], [5.0, 6.5]], caption: "Straight line, positive intercept" },
          { points: [[1.0, 0.0], [3.0, 1.5], [5.0, 3.0]], caption: "Straight line through the origin" },
          { points: [[1.0, 6.5], [3.0, 4.1], [5.0, 1.7]], caption: "Straight line sloping down" },
          { points: [[1.0, 1.0], [3.0, 3.5], [5.0, 8.5]], caption: "Upward curve" },
        ],
        correct: 0,
        ask: "The equation R/L = R_X (1/L) + rho/A is a straight line with a positive gradient R_X and a positive intercept rho/A. Which graph matches that?",
        hints: [
          "The line must be straight, not curved, because the equation is linear.",
          "The intercept rho/A of 0.50 ohm per metre is positive, so the line does not pass through the origin, and the gradient is positive so it slopes up.",
        ],
        explain: "The correct graph is the straight line that slopes up and cuts the vertical axis above the origin, because R/L = R_X (1/L) + rho/A has a positive gradient R_X and a positive intercept rho/A.",
      },
      {
        kind: "order",
        prompt: "Put the steps to measure the resistance of a component with an ammeter and voltmeter in the correct order.",
        items: [
          "Connect the ammeter in series and the voltmeter across the component",
          "Close the switch",
          "Record the voltmeter reading V and the ammeter reading I",
          "Open the switch again",
          "Calculate the resistance from R = V/I",
        ],
        ask: "Think about building the circuit first, taking a paired reading with the current briefly on, then working out the resistance.",
        hints: [
          "Wire up the meters before any current flows, then close the switch to take the readings.",
          "Open the switch straight after reading so heating does not drift the resistance, then use R = V/I.",
        ],
        explain: "You wire the ammeter in series and voltmeter across the component, close the switch, read V and I together, open the switch to stop heating, then calculate R = V/I.",
      },
    ],
  },
];
