import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, Revision 2. Checkpoint over sections TP1.4 to TP1.6:
// accuracy and precision, random vs systematic errors, results tables, and
// graphs (gradient, intercept, evaluation). Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: errors, tables and graphs",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "What is the difference between accuracy and precision?",
        figure: "fig-pr1-03-accuracy-precision",
        options: [
          "Accuracy is how close repeats are to each other; precision is closeness to the true value",
          "Accuracy is how close a reading is to the true value; precision is how close repeats are to each other",
          "Accuracy and precision mean exactly the same thing",
          "Precision is how close a single reading is to the true value",
        ],
        correct: 1,
        ask: "One term compares your reading with the correct answer; the other compares your repeats with one another. Which option pairs them correctly?",
        hints: [
          "Accuracy is measured against the true value.",
          "Precision is about how tightly your repeated readings agree with each other, whether or not they are centred on the true value.",
        ],
        explain: "Accuracy is how close a reading is to the true value, while precision is how close repeated readings are to one another. A tight cluster of readings can be precise yet sit off-centre, so precise but not accurate.",
      },
      {
        kind: "choice",
        question: "A best-fit line of T^2 against l passes through (0, 2.0) and (5.0, 12.0). What is its gradient?",
        figure: "fig-pr1-07-graph-bestfit",
        options: [
          "0.4 s^2/cm",
          "5.0 s^2/cm",
          "12 s^2/cm",
          "2.0 s^2/cm",
        ],
        correct: 3,
        ask: "Gradient is the rise divided by the run over a large triangle. Work out 12.0 minus 2.0, then divide by 5.0 minus 0.",
        hints: [
          "The gradient m is the change in the vertical divided by the change in the horizontal.",
          "12.0 minus 2.0 is 10.0, and 5.0 minus 0 is 5.0, so 10.0 divided by 5.0 is 2.0.",
        ],
        working: [
          { label: "Formula", latex: "y = mx + c,\\quad m = \\dfrac{y_2 - y_1}{x_2 - x_1}" },
          { label: "Substitute", latex: "m = \\dfrac{12.0 - 2.0}{5.0 - 0}" },
          { label: "Answer", latex: "m = 2.0\\ \\text{s}^2/\\text{cm}" },
        ],
        explain: "The gradient is 2.0 seconds squared per centimetre, because the rise of 10.0 seconds squared divided by the run of 5.0 centimetres is 2.0. Taking the triangle over a large part of the line keeps the value reliable.",
      },
      {
        kind: "choice",
        question: "A student times an oscillation 3 times and gets 30.2 s, 30.5 s and 30.2 s. What is the average time?",
        options: [
          "30.3 s",
          "30.5 s",
          "90.9 s",
          "10.1 s",
        ],
        correct: 0,
        ask: "Add the 3 times together, then divide the total by 3. Work out 30.2 plus 30.5 plus 30.2, then divide by 3.",
        hints: [
          "The mean is the sum of the readings divided by how many there are.",
          "30.2 plus 30.5 plus 30.2 is 90.9, and 90.9 divided by 3 is 30.3.",
        ],
        working: [
          { label: "Formula", latex: "\\bar{t} = \\dfrac{t_1 + t_2 + t_3}{3}" },
          { label: "Substitute", latex: "\\bar{t} = \\dfrac{30.2 + 30.5 + 30.2}{3}" },
          { label: "Answer", latex: "\\bar{t} = 30.3\\ \\text{s}" },
        ],
        explain: "The average is 30.3 seconds, because the 3 readings add to 90.9 seconds and 90.9 divided by 3 is 30.3. Averaging repeats like this reduces the random error.",
      },
      {
        kind: "choice",
        question: "In a well-laid-out results table, where should the unit of each quantity be written?",
        options: [
          "Beside every number in that column",
          "Only in the very last row",
          "In the column heading, once",
          "Units are not needed in a table",
        ],
        correct: 2,
        ask: "Think about the neat heading style l / cm. How many times does the unit appear for a whole column?",
        hints: [
          "A tidy table avoids repeating the unit next to each reading.",
          "The unit is written once, in the column heading, such as l / cm or T^2 / s^2.",
        ],
        explain: "The unit belongs in the column heading, written once as something like l / cm. Each cell below then holds only the number, which keeps the table clear and easy to read.",
      },
      {
        kind: "choice",
        question: "Which statement about a line of best fit is correct?",
        figure: "fig-pr1-08-bestfit-good-bad",
        options: [
          "Join the plotted points dot-to-dot",
          "Force the line to pass through the first data point",
          "Extend the line well beyond the measured data",
          "Draw one straight line with points spread evenly on both sides",
        ],
        correct: 3,
        ask: "A best-fit line is a single straight line judged by the balance of the points. Which option describes that?",
        hints: [
          "You never zigzag between points, and you never force the line through one particular point.",
          "The aim is a single straight line with roughly equal numbers of points above and below it.",
        ],
        explain: "A line of best fit is one straight line drawn so the points are spread evenly on both sides. You do not join the points dot-to-dot, force it through one point, or extend it beyond the data unless asked.",
      },
      {
        kind: "classify",
        prompt: "Sort each source of error into the correct type.",
        bins: ["Random error", "Systematic error"],
        items: [
          { text: "reaction time when starting a stopwatch", bin: 0 },
          { text: "estimating between the smallest scale marks", bin: 0 },
          { text: "parallax that shifts from reading to reading", bin: 0 },
          { text: "a zero error on an ammeter", bin: 1 },
          { text: "a wrongly calibrated scale", bin: 1 },
          { text: "a rule with a worn, broken end", bin: 1 },
        ],
        ask: "Ask whether each source scatters readings both ways, or shifts every reading the same way by a fixed amount. Tap each one and drop it in its bin.",
        hints: [
          "Random errors scatter readings both above and below the true value, so repeating and averaging helps.",
          "Systematic errors, such as a zero error or a wrong calibration, shift every reading the same way, and averaging cannot remove them.",
        ],
        explain: "Reaction time, estimating between marks and shifting parallax are random errors, because they scatter readings both ways. A zero error, a wrong calibration and a broken-ended rule are systematic errors, because each offsets every reading in the same direction.",
      },
      {
        kind: "graphpick",
        prompt: "Which graph shows the correct line of best fit through the plotted points?",
        xLabel: "l / cm",
        yLabel: "T^2 / s^2",
        options: [
          {
            points: [[1, 4], [2, 5], [3, 9], [4, 10]],
            caption: "A line that bends to touch every point",
          },
          {
            points: [[1, 4], [2, 6], [3, 8], [4, 10]],
            caption: "One straight line with points balanced on both sides",
          },
          {
            points: [[1, 5], [2, 7], [3, 9], [4, 11]],
            caption: "A straight line pushed to one side of the points",
          },
        ],
        correct: 1,
        ask: "A best-fit line is a single straight line, not a curve that touches every point and not one pushed to one side. Which option is that?",
        hints: [
          "Rule out any line that zigzags to hit each point.",
          "The correct line is straight and leaves roughly equal numbers of points above and below it.",
        ],
        explain: "The correct choice is the single straight line with the points spread evenly on both sides. A line that bends through every point or sits to one side of the data is not a valid line of best fit.",
      },
      {
        kind: "order",
        prompt: "Put the columns of a pendulum results table in order, from left to right.",
        items: [
          "length l / cm",
          "t_1 / s",
          "t_2 / s",
          "average t / s",
          "T = t / 20 / s",
          "T^2 / s^2",
        ],
        ask: "The independent variable goes on the far left and the calculated quantities on the far right. Which quantity do you set first, and which do you work out last?",
        hints: [
          "The length is the quantity you choose, so it leads on the left.",
          "The repeat times come next, then the average, then the period, and the T^2 column you calculate for the graph goes last.",
        ],
        explain: "The independent variable, length, goes first, then the repeat times, then their average, then the period T, and finally the calculated T^2 column on the far right.",
      },
      {
        kind: "match",
        prompt: "Match each term to its correct meaning.",
        pairs: [
          { left: "accuracy", right: "closeness of a reading to the true value" },
          { left: "precision", right: "closeness of repeats to one another" },
          { left: "random error", right: "reduced by repeating and averaging" },
          { left: "systematic error", right: "a fixed offset such as a zero error" },
        ],
        ask: "2 terms describe how good a reading is, and 2 describe a type of error. Pair each with the phrase that defines it.",
        hints: [
          "Accuracy points to the true value, while precision points to the agreement of repeats.",
          "A random error is cut down by averaging, while a systematic error is a fixed offset that averaging cannot remove.",
        ],
        explain: "Accuracy is closeness to the true value and precision is closeness of repeats. A random error is reduced by repeating and averaging, while a systematic error is a fixed offset such as a zero error.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this note about errors is wrong. Find it.",
        lines: [
          "Random errors scatter readings both ways about the true value.",
          "You reduce random error by repeating a reading and averaging.",
          "Averaging also removes a systematic error such as a zero error.",
          "A systematic error is corrected by changing the method or instrument.",
        ],
        errorLine: 2,
        ask: "Averaging balances out scatter that goes both ways. Ask which kind of error it cannot touch, then find the line that claims otherwise.",
        hints: [
          "Averaging only helps with errors that are as likely to be too high as too low.",
          "A systematic error shifts every reading the same way, so averaging leaves the offset in place.",
        ],
        explain: "The wrong line is the third one. Averaging cannot remove a systematic error, because that error offsets every reading in the same direction. You correct it by changing the method or instrument, or by subtracting the known offset.",
      },
      {
        kind: "open",
        prompt: "In a pendulum experiment, reaction time when starting and stopping the stopwatch is the biggest error. State what type of error this is and give one realistic way to reduce it.",
        figure: "fig-pr1-04-random-error",
        modelAnswer: "Reaction time is a random error, because it makes each reading a little too early or too late in an unpredictable way, scattering the times both above and below the true value. One realistic way to reduce its effect is to time many oscillations, for example 20, and divide the total time by 20 to find one period. Because the fixed reaction-time uncertainty is spread over 20 swings, its effect on each period is much smaller. Repeating the whole timing and averaging also helps.",
        marks: [
          "Reaction time is a random error.",
          "It scatters the timing both ways about the true value.",
          "Time many oscillations (e.g. 20) and divide, and/or repeat and average, to reduce its effect.",
        ],
        ask: "Think about whether reaction time pushes the reading the same way every time or varies both ways, then about a timing method that spreads that uncertainty over many swings.",
      },
      {
        kind: "open",
        prompt: "Explain the difference between accuracy and precision, and name the type of error that spoils each.",
        modelAnswer: "Accuracy is how close a reading is to the true value, and it is spoiled by systematic error, which shifts every reading the same way by a fixed amount. Precision is how close repeated readings are to one another, and it is spoiled by random error, which scatters the readings both ways. A set of readings can be precise, tightly grouped, yet inaccurate if a systematic error has shifted the whole group off the true value.",
        marks: [
          "Accuracy is closeness to the true value; systematic error spoils it.",
          "Precision is closeness of repeats to each other; random error spoils it.",
          "Readings can be precise but not accurate if a systematic error shifts them.",
        ],
        ask: "One quality compares readings with the true value, the other compares repeats with each other. Match each to the error, random or systematic, that harms it.",
      },
    ],
  },
];
