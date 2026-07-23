import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, section 2. Grounded in Practical Chapter 01 sections 1.3, 1.4.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.2",
    code: "TP1.2",
    title: "Variables and apparatus",
    blurb: "Sorting quantities into fair-test roles and choosing the right instrument",
    steps: [
      {
        kind: "concept",
        heading: "The 3 variable roles",
        figure: "fig-pr1-02-variables",
        body: "To plan a *fair test*, sort every quantity into 3 roles: the *independent variable* is the one you deliberately change, and the *dependent variable* is the one you measure in response.",
        say: "Before you touch any apparatus, sort the quantities into roles. In the diagram the independent variable, on the left, is the one you deliberately change. An arrow points across to the dependent variable, on the right, which is the one you measure as it responds. The grey box of controlled variables sits around them, held steady.",
      },
      {
        kind: "concept",
        heading: "Controlled variables",
        body: "Every other quantity is a *controlled variable*, kept *constant* throughout. Only then can any change in the dependent variable be caused by the *independent variable* alone.",
        say: "Everything else is a controlled variable, and you hold each one constant from start to finish. This matters because if a second quantity were allowed to drift, you could not tell which one caused the result. Keeping them constant leaves the independent variable as the only possible cause.",
      },
      {
        kind: "concept",
        heading: "A worked example: the pendulum",
        body: "For a swinging *pendulum* you change the *length* of the string and measure the *period*. The mass of the bob and the release *angle* are held constant.",
        say: "Take a swinging pendulum. You deliberately change the length of the string, so length is the independent variable. You measure the period, the time for one swing, so period is the dependent variable. The mass of the bob and the angle you release it from are kept the same every time, so they are the controlled variables.",
      },
      {
        kind: "concept",
        heading: "Choosing an instrument, part 1",
        body: "Match the *instrument* to the quantity. A *newton-meter* reads force in newtons, while *vernier calipers* and a *micrometer* screw gauge read small lengths.",
        say: "Half of good measurement is picking the right tool. A newton-meter, a spring balance, reads a force in newtons. For a small length, such as the diameter of a rod or a wire, you reach for vernier calipers, or a micrometer screw gauge for the finest measurements.",
      },
      {
        kind: "concept",
        heading: "Choosing an instrument, part 2",
        body: "For a circuit, an *ammeter* reads the current and a *voltmeter* reads the p.d., while a *rheostat* is a variable resistance used to change the current.",
        say: "In an electric circuit, an ammeter reads the current through a component, and a voltmeter reads the potential difference across it. A rheostat is a variable resistor: you slide it to change the current, which is handy when the current is your independent variable.",
      },
      {
        kind: "concept",
        heading: "Choosing an instrument, part 3",
        body: "Everyday tools finish the set: a *stopwatch* times periods, a *thermometer* reads temperature, a *measuring cylinder* reads a volume, and a *protractor* reads angles.",
        say: "A few everyday instruments complete the kit. A stopwatch times periods, reading to the nearest tenth of a second. A thermometer reads temperature in degrees Celsius, a measuring cylinder reads a volume of liquid, and a protractor reads angles, such as the angle of incidence or refraction of a ray.",
      },
      {
        kind: "choice",
        question: "In a pendulum experiment you time the swing for several different string lengths. Which quantity is the independent variable?",
        figure: "fig-pr1-02-variables",
        options: ["The period of the swing", "The length of the string", "The mass of the bob", "The release angle"],
        correct: 1,
        ask: "The independent variable is the one you deliberately set and change from run to run. Which quantity are you choosing yourself here?",
        hints: [
          "You choose the string lengths yourself before each timing.",
          "The period is what you measure in response, so it is not the independent variable.",
        ],
        explain: "The length of the string is the independent variable, because it is the quantity you deliberately change from one run to the next.",
      },
      {
        kind: "choice",
        question: "In the same pendulum experiment, which quantity is the dependent variable?",
        options: ["The length of the string", "The mass of the bob", "The period of the swing", "The release angle"],
        correct: 2,
        ask: "The dependent variable is the one you measure, which responds to your change. What are you reading off the stopwatch?",
        hints: [
          "You change the length, then wait to see how the timing responds.",
          "The mass and angle are kept constant, so neither is the dependent variable.",
        ],
        explain: "The period is the dependent variable, because it is the quantity you measure and it responds to the change in length.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to a sensible use.",
        pairs: [
          { left: "Newton-meter", right: "Measuring a force in newtons" },
          { left: "Vernier calipers", right: "Measuring a small length" },
          { left: "Voltmeter", right: "Measuring p.d. across a component" },
          { left: "Protractor", right: "Measuring an angle" },
        ],
        ask: "For each instrument, ask what quantity it is built to read, then find the matching use.",
        hints: [
          "A newton-meter is a spring balance, so it reads a force.",
          "A voltmeter reads potential difference; a protractor reads angles.",
        ],
        explain: "A newton-meter reads a force in newtons, vernier calipers read a small length, a voltmeter reads the p.d. across a component, and a protractor reads an angle.",
      },
      {
        kind: "classify",
        prompt: "In the pendulum experiment, sort each quantity into its variable role.",
        bins: ["Independent", "Dependent", "Controlled"],
        items: [
          { text: "length of the string", bin: 0 },
          { text: "period of the swing", bin: 1 },
          { text: "mass of the bob", bin: 2 },
          { text: "release angle", bin: 2 },
        ],
        ask: "Ask of each quantity: do I change it, measure it, or hold it constant? Tap each one into its bin.",
        hints: [
          "You change the length and you measure the period.",
          "The mass of the bob and the release angle are both kept constant, so both are controlled.",
        ],
        explain: "Length is the independent variable you change, the period is the dependent variable you measure, and the mass of the bob and the release angle are controlled variables held constant.",
      },
      {
        kind: "choice",
        question: "Why are the controlled variables held constant during an experiment?",
        options: ["So any change in the measured quantity is caused by the independent variable alone", "So the experiment finishes more quickly", "So the independent variable never has to be changed", "So that no readings need to be taken"],
        correct: 0,
        ask: "Think about what would happen if a second quantity were also allowed to change at the same time.",
        hints: [
          "If 2 quantities changed at once, you could not tell which one caused the result.",
          "Holding the others constant is what makes the test fair.",
        ],
        explain: "Holding the controlled variables constant keeps the test fair, so that any change in the measured, dependent variable can be caused by the independent variable alone.",
      },
      {
        kind: "choice",
        question: "Which instrument would you choose to measure the diameter of a thin wire?",
        options: ["A newton-meter", "A measuring cylinder", "A protractor", "A micrometer screw gauge"],
        correct: 3,
        ask: "You need a very small length measured precisely. Which instrument is built for the finest lengths?",
        hints: [
          "A newton-meter reads force and a measuring cylinder reads volume, so neither fits a length.",
          "A micrometer screw gauge is designed for the smallest, most precise lengths.",
        ],
        explain: "A micrometer screw gauge is the right choice, because it measures a very small length such as the diameter of a thin wire to high precision.",
      },
      {
        kind: "insight",
        body: "The point of holding the *controlled variables* constant is a *fair test*: only then does the dependent variable respond to a single *cause*, the independent variable you chose.",
        say: "Hold on to one idea from this section. You change one thing, you measure one thing, and you keep everything else constant. That is what makes a test fair, because it leaves the dependent variable with a single possible cause: the independent variable you deliberately chose.",
      },
    ],
  },
];
