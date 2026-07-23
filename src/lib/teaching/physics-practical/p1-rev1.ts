import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, Revision 1. Checkpoint over sections tp1.1 to tp1.3:
// the 4 skill stages and safety, variables and apparatus, and recording
// readings, significant figures and standard form. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: skill stages, variables, apparatus and recording readings",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "In which stage do you decide the variables and write an ordered method before touching any apparatus?",
        figure: "fig-pr1-01-skills-flow",
        options: ["Presentation of data", "Manipulation and measurement", "Planning", "Analysis and evaluation"],
        correct: 2,
        ask: "Ask which stage happens first, before any reading is taken. Which option names the stage where the method is written?",
        hints: [
          "This stage comes before you set up any apparatus.",
          "Planning is where you pick the variables, order the method and flag the hazards.",
        ],
        explain: "Planning is the stage where you choose the variables, write an ordered method and note the hazards. Manipulation, presentation and analysis all come afterwards.",
      },
      {
        kind: "choice",
        question: "A student changes the length of a pendulum and measures its period. Which quantity is the independent variable?",
        figure: "fig-pr1-02-variables",
        options: ["The length of the pendulum", "The period of the swing", "The mass of the bob", "The angle of release"],
        correct: 0,
        ask: "The independent variable is the one the student deliberately changes. Which quantity is being changed here?",
        hints: [
          "The independent variable is the one you set yourself, not the one you measure.",
          "The student changes the length and then measures the period that results.",
        ],
        explain: "The length of the pendulum is the independent variable, because it is the quantity the student deliberately changes. The period is the dependent variable, and the mass and angle are controlled.",
      },
      {
        kind: "choice",
        question: "How many significant figures does the reading 0.0450 have?",
        options: ["5", "2", "4", "3"],
        correct: 3,
        ask: "Count from the first non-zero digit, and remember that a trailing zero after the decimal point counts. How many digits is that?",
        hints: [
          "Leading zeros before the 4 do not count.",
          "The meaningful digits are 4, 5 and 0, which is 3 figures.",
        ],
        working: [
          { label: "Count from first non-zero digit", latex: "0.0450 \\to 4,\\,5,\\,0" },
          { label: "Answer", latex: "3\\ \\text{s.f.}" },
        ],
        explain: "The reading has 3 significant figures. The leading zeros only fix the decimal place, while the 4, the 5 and the trailing 0 are the meaningful digits.",
      },
      {
        kind: "choice",
        question: "Written in standard form, a length of 1 mm expressed in metres is...",
        options: ["1 x 10^3 m", "1 x 10^-3 m", "1 x 10^-2 m", "1 x 10^2 m"],
        correct: 1,
        ask: "One millimetre is one thousandth of a metre. Which power of 10 gives 0.001?",
        hints: [
          "1 millimetre equals 0.001 metres.",
          "0.001 is 1 times 10 to the power negative 3.",
        ],
        working: [
          { label: "Convert", latex: "1\\ \\text{mm} = 0.001\\ \\text{m}" },
          { label: "Answer", latex: "1 \\times 10^{-3}\\ \\text{m}" },
        ],
        explain: "1 millimetre is 0.001 metres, which is 1 times 10 to the negative 3 metres. The negative index shows the number is smaller than 1.",
      },
      {
        kind: "choice",
        question: "Why are the controlled variables kept constant during the experiment?",
        options: ["To make the experiment finish faster", "To use up all the apparatus", "So any change in the result is caused by the independent variable alone", "To make the readings larger"],
        correct: 2,
        ask: "Think about what a fair test needs. If more than one quantity changed, could you say what caused the result to change?",
        hints: [
          "A fair test changes only one quantity at a time.",
          "If the controls drifted, you could not tell whether the independent variable caused the change.",
        ],
        explain: "The controlled variables are held constant so that any change in the dependent variable must be caused by the independent variable alone. That is what makes the test fair.",
      },
      {
        kind: "order",
        prompt: "Put the 4 assessed stages of a practical in the order they happen.",
        items: [
          "Planning",
          "Manipulation and measurement",
          "Presentation of data",
          "Analysis and evaluation",
        ],
        ask: "Think about what you do before touching apparatus, then while taking readings, then with the numbers, and finally with the finished results. Put the stages in that order.",
        hints: [
          "You plan the method before you set anything up.",
          "You can only analyse and evaluate once the data is recorded and presented.",
        ],
        explain: "First you plan, then you manipulate the apparatus and take measurements, then you present the data in a table, and finally you analyse and evaluate the results.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to what it measures.",
        pairs: [
          { left: "newton-meter", right: "measures a force in newtons" },
          { left: "stopwatch", right: "times the period of a swing" },
          { left: "ammeter", right: "measures the current in a circuit" },
          { left: "protractor", right: "measures an angle of incidence" },
        ],
        ask: "For each instrument, recall the single quantity it is designed to read. Match each one to its use.",
        hints: [
          "The name of the newton-meter tells you its unit.",
          "An ammeter reads current, while a protractor reads angles.",
        ],
        explain: "A newton-meter measures force, a stopwatch times a period, an ammeter measures current, and a protractor measures an angle. Each instrument reads one kind of quantity.",
      },
      {
        kind: "classify",
        prompt: "Sort each quantity in the pendulum experiment by its role.",
        bins: ["Independent", "Dependent", "Controlled"],
        items: [
          { text: "the length of the pendulum", bin: 0 },
          { text: "the period of the swing", bin: 1 },
          { text: "the mass of the bob", bin: 2 },
          { text: "the angle of release", bin: 2 },
        ],
        ask: "Ask which quantity is deliberately changed, which is measured in response, and which are held constant. Drop each one in its bin.",
        hints: [
          "You change one quantity and measure one quantity; the rest are kept the same.",
          "The length is changed, the period is measured, and the mass and angle are held constant.",
        ],
        explain: "The length is the independent variable that is changed, the period is the dependent variable that is measured, and the mass of the bob and the angle of release are controlled variables held constant for a fair test.",
      },
      {
        kind: "cloze",
        prompt: "Complete the rules for recording a reading.",
        segments: [
          "Significant figures are counted from the first ",
          " digit, so 0.0450 has ",
          " significant figures. Its trailing ",
          " is kept to show the precision of the reading.",
        ],
        bank: ["non-zero", "3", "zero", "decimal", "2", "unit"],
        answer: ["non-zero", "3", "zero"],
        ask: "Recall where the counting of significant figures starts, how many 0.0450 has, and which digit at the end states the precision.",
        hints: [
          "Leading zeros only fix the decimal place; counting starts at the 4.",
          "0.0450 has 3 significant figures, and the last figure is a trailing zero.",
        ],
        explain: "You count from the first non-zero digit, so 0.0450 has 3 significant figures, and the trailing zero is kept because it states that the reading was taken to that precision.",
      },
      {
        kind: "spoterror",
        prompt: "One line below states a variable rule wrongly. Find it.",
        lines: [
          "The independent variable is the one you deliberately change.",
          "The dependent variable is the one you change to a new value each time.",
          "The controlled variables are kept constant so the test is fair.",
        ],
        errorLine: 1,
        ask: "Ask which variable you set yourself and which one you only measure. Which line has swapped those 2 roles?",
        hints: [
          "You change only one variable yourself; the dependent one just responds.",
          "The dependent variable is the one you measure, not the one you change.",
        ],
        explain: "The second line is wrong. The dependent variable is the one you measure as it responds; it is the independent variable that you change to a new value each time.",
      },
      {
        kind: "open",
        prompt: "Name the 4 stages assessed in a practical experiment, in the order they happen, and say briefly what each stage involves.",
        modelAnswer: "First is planning, where you choose the variables, write an ordered method and flag the hazards. Second is manipulation and measurement, where you set up the apparatus and read each instrument to a sensible precision. Third is presentation of data, where you record every reading in a neat table and process it. Fourth is analysis and evaluation, where you interpret the results, usually with a graph, draw an evidence-based conclusion and judge the errors.",
        marks: [
          "Planning: choose variables, order the method, flag hazards.",
          "Manipulation and measurement: set up apparatus and read instruments to a sensible precision.",
          "Presentation of data: record readings in a neat table and process them.",
          "Analysis and evaluation: interpret, conclude and judge the errors.",
        ],
        ask: "Think about what you do before you touch any apparatus, then while taking readings, then with the numbers, and finally with the finished results.",
      },
      {
        kind: "open",
        prompt: "A length is exactly 8 cm when measured on a millimetre rule. Explain how you should record it and why.",
        modelAnswer: "Record it as 8.0 cm. A millimetre rule can be read to the nearest 0.1 centimetre, so the trailing zero after the decimal point states that precision. Writing just 8 cm would suggest a coarser reading and would hide the precision of the instrument.",
        marks: [
          "Recorded as 8.0 cm.",
          "The trailing zero shows the precision (nearest 0.1 cm, or 1 mm).",
          "Writing 8 cm alone understates the precision of the reading.",
        ],
        ask: "Think about the smallest division on a millimetre rule, and what a trailing zero after the decimal point tells the reader about the precision.",
      },
    ],
  },
];
