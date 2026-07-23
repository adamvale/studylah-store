import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, topical quiz. Whole-topic check across Practical Chapter 01:
// the 4 skill stages and safety, variables and apparatus, recording readings,
// significant figures and standard form, accuracy vs precision, random vs systematic
// errors, table layout, graph drawing, gradient and intercept, and evaluation.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.quiz",
    code: "Quiz",
    title: "Practical skills topical quiz",
    blurb: "Whole-topic check: stages, safety, variables, errors, tables, graphs and evaluation",
    kind: "quiz",
    steps: [
      // 1 (choice, correct 2)
      {
        kind: "choice",
        question: "In which stage do you decide the variables, plan an ordered method, and flag the hazards?",
        figure: "fig-pr1-01-skills-flow",
        options: [
          "Manipulation and measurement",
          "Presentation of data",
          "Planning",
          "Analysis and evaluation",
        ],
        correct: 2,
        ask: "One stage happens before you touch any apparatus, when you decide what to change, what to measure, and what could go wrong. Which stage is that?",
        hints: [
          "This stage comes first, before any readings are taken.",
          "Deciding the variables and the method, and spotting the hazards, is the planning stage.",
        ],
        explain: "Planning is the first stage, where you choose the variables, set out an ordered method, and identify the hazards before starting.",
      },
      // 2 (interactive: order, 4 skill stages)
      {
        kind: "order",
        prompt: "Put the 4 skill stages of a practical assessment in the order you meet them.",
        items: [
          "Planning",
          "Manipulation and measurement",
          "Presentation of data",
          "Analysis, conclusions and evaluation",
        ],
        ask: "Start with what you do before touching any apparatus, and finish with making sense of the results. Put the 4 stages in order.",
        hints: [
          "You plan first and analyse last.",
          "The order is planning, then manipulation and measurement, then presentation of data, then analysis and evaluation.",
        ],
        explain: "The order is planning, then manipulation and measurement, then presentation of data, then analysis, conclusions and evaluation.",
      },
      // 3 (choice, correct 0)
      {
        kind: "choice",
        question: "Which of these is the safe thing to do in the laboratory?",
        options: [
          "Put broken glass in the special glass bin",
          "Touch the bare metal of a live circuit to test it",
          "Leave heating apparatus running while you go out",
          "Rush around the bench to save time",
        ],
        correct: 0,
        ask: "3 of these put you or others at risk. Which one is a careful, safe habit?",
        hints: [
          "A safe habit protects you and the people around you.",
          "Broken glass goes in the special glass bin, not the ordinary bin.",
        ],
        explain: "Putting broken glass in the special glass bin is safe. Touching a live circuit, leaving heating apparatus unattended, and rushing around the bench are all unsafe.",
      },
      // 4 (choice, correct 3)
      {
        kind: "choice",
        question: "A student changes the length of a pendulum and measures its period, keeping the mass and the swing angle fixed. What is the independent variable?",
        figure: "fig-pr1-02-variables",
        options: [
          "The period",
          "The mass of the bob",
          "The swing angle",
          "The length of the pendulum",
        ],
        correct: 3,
        ask: "The independent variable is the ONE quantity you deliberately change. What is the student changing on purpose?",
        hints: [
          "The independent variable is set by you; the dependent one responds to it.",
          "The student deliberately changes the length, so the length is the independent variable.",
        ],
        explain: "The length is the independent variable, because it is the one quantity the student deliberately changes. The period is the dependent variable, and the mass and angle are the controlled variables.",
      },
      // 5 (interactive: match, apparatus to use)
      {
        kind: "match",
        prompt: "Match each instrument to the quantity it measures.",
        pairs: [
          { left: "Newton-meter", right: "measures a force in newtons" },
          { left: "Micrometer screw gauge", right: "measures a small thickness" },
          { left: "Stopwatch", right: "times the period of a pendulum" },
          { left: "Protractor", right: "measures an angle of incidence" },
          { left: "Measuring cylinder", right: "measures a volume of liquid" },
        ],
        ask: "Match each item to its use. Think about which quantity each instrument reads: a force, a length, a time, an angle, or a volume.",
        hints: [
          "A newton-meter reads a force, and a micrometer reads a tiny thickness.",
          "A stopwatch times, a protractor measures angles, and a measuring cylinder measures volume.",
        ],
        explain: "A newton-meter measures force, a micrometer screw gauge measures a small thickness, a stopwatch times a period, a protractor measures an angle, and a measuring cylinder measures a volume.",
      },
      // 6 (choice, correct 1)
      {
        kind: "choice",
        question: "Which instrument is the best choice for measuring the small diameter of a wire?",
        options: [
          "A metre rule",
          "A micrometer screw gauge",
          "A measuring cylinder",
          "A newton-meter",
        ],
        correct: 1,
        ask: "You need to measure a very small length to a high precision. Which instrument is designed for that?",
        hints: [
          "A metre rule only reads to the nearest millimetre, which is too coarse for a thin wire.",
          "A micrometer screw gauge measures small thicknesses to a fraction of a millimetre.",
        ],
        explain: "A micrometer screw gauge is best for the small diameter of a wire, because it measures tiny lengths far more precisely than a metre rule.",
      },
      // 7 (choice, correct 2, calc sig figs 0.0450 -> 3)
      {
        kind: "choice",
        question: "How many significant figures does the reading 0.0450 have?",
        options: [
          "2 significant figures",
          "4 significant figures",
          "3 significant figures",
          "5 significant figures",
        ],
        correct: 2,
        ask: "Leading zeros do not count, but a trailing zero after the point does. Count the meaningful digits starting from the first non-zero one.",
        hints: [
          "Start counting at the 4; the 2 zeros before it just fix the place value.",
          "The meaningful digits are 4, 5 and 0, which is 3 significant figures.",
        ],
        working: [
          { label: "Formula", latex: "\\text{count from the first non-zero digit; keep trailing zeros}" },
          { label: "Substitute", latex: "0.0\\,\\mathbf{450} \\rightarrow 4,\\ 5,\\ 0" },
          { label: "Answer", latex: "3\\ \\text{s.f.}" },
        ],
        explain: "The reading 0.0450 has 3 significant figures. Counting starts at the first non-zero digit, the 4, and the trailing zero counts, giving the digits 4, 5 and 0.",
      },
      // 8 (choice, correct 0, calc sig figs 3200 -> 2)
      {
        kind: "choice",
        question: "How many significant figures does the value 3200 have, with no decimal point shown?",
        options: [
          "2 significant figures",
          "3 significant figures",
          "4 significant figures",
          "1 significant figure",
        ],
        correct: 0,
        ask: "The 2 zeros at the end, with no decimal point, only mark the size of the number. Which digits are the meaningful ones?",
        hints: [
          "The meaningful digits are the 3 and the 2.",
          "Trailing zeros without a decimal point are not counted, so 3200 has 2 significant figures.",
        ],
        working: [
          { label: "Formula", latex: "\\text{trailing zeros with no decimal point are not significant}" },
          { label: "Substitute", latex: "3200 \\rightarrow 3,\\ 2" },
          { label: "Answer", latex: "2\\ \\text{s.f.}" },
        ],
        explain: "The value 3200 has 2 significant figures. The 3 and the 2 are significant, but the trailing zeros with no decimal point are not.",
      },
      // 9 (interactive: cloze, accuracy vs precision; 3 segments -> 2 blanks)
      {
        kind: "cloze",
        prompt: "Complete the sentence about a set of repeated readings.",
        segments: [
          "Accuracy is how close a reading is to the ",
          " value, while precision is how close the ",
          " are to one another.",
        ],
        bank: ["true", "repeats", "average", "random"],
        answer: ["true", "repeats"],
        ask: "One word describes the target a reading is compared with; the other describes what repeated readings are compared with. Choose from the bank.",
        hints: [
          "Accuracy compares a reading with the correct, or true, value.",
          "Precision compares the repeated readings, the repeats, with each other.",
        ],
        explain: "Accuracy is how close a reading is to the true value, while precision is how close the repeats are to one another.",
      },
      // 10 (choice, correct 3, accuracy vs precision)
      {
        kind: "choice",
        question: "A set of repeated readings is tightly grouped but all sit well to one side of the true value. How are they best described?",
        figure: "fig-pr1-03-accuracy-precision",
        options: [
          "Accurate and precise",
          "Accurate but not precise",
          "Neither accurate nor precise",
          "Precise but not accurate",
        ],
        correct: 3,
        ask: "Tight grouping tells you about one quality; sitting away from the true value tells you about the other. Which pair fits?",
        hints: [
          "Precision is how close the repeats are to one another; accuracy is how close they are to the true value.",
          "Tight grouping means precise; sitting off the true value means not accurate.",
        ],
        explain: "The readings are precise but not accurate. They agree closely with one another, which is precision, but they sit away from the true value, so they are not accurate.",
      },
      // 11 (interactive: classify, random vs systematic)
      {
        kind: "classify",
        prompt: "Sort each source of error into random or systematic.",
        bins: ["Random error", "Systematic error"],
        items: [
          { text: "reaction time when starting a stopwatch", bin: 0 },
          { text: "estimating between the millimetre marks", bin: 0 },
          { text: "inconsistent parallax when reading a scale", bin: 0 },
          { text: "a balance that reads 2 g with nothing on the pan", bin: 1 },
          { text: "a scale that is wrongly calibrated by a fixed amount", bin: 1 },
          { text: "a rule with a worn end that has lost the first millimetre", bin: 1 },
        ],
        ask: "A random error scatters readings both ways and changes each time; a systematic error shifts every reading the same way by a fixed amount. Tap each item and drop it in its bin.",
        hints: [
          "Reaction time, estimating between marks, and parallax vary each time, so they are random.",
          "A zero error, a mis-calibrated scale, and a worn rule end shift every reading the same way, so they are systematic.",
        ],
        explain: "Reaction time, estimating between marks, and inconsistent parallax are random errors, because they scatter readings both ways. A zero error on a balance, a wrongly calibrated scale, and a worn rule end are systematic errors, because they shift every reading the same way.",
      },
      // 12 (choice, correct 1, which error)
      {
        kind: "choice",
        question: "A balance shows 2 g when nothing is on the pan, so every mass reading is 2 g too high. What kind of error is this, and what does it spoil?",
        options: [
          "A random error that spoils precision",
          "A systematic error that spoils accuracy",
          "A random error that spoils accuracy",
          "A systematic error that spoils precision",
        ],
        correct: 1,
        ask: "The same fixed offset is added to every reading in the same direction. Is that random or systematic, and does it move readings away from the true value or just scatter them?",
        hints: [
          "An error that shifts every reading by the same fixed amount is systematic.",
          "A fixed offset moves every reading away from the true value, so it spoils accuracy.",
        ],
        explain: "This is a systematic error that spoils accuracy. A zero error adds the same fixed amount to every reading, shifting them all away from the true value, and averaging cannot remove it.",
      },
      // 13 (interactive: spoterror, errorLine 0-based)
      {
        kind: "spoterror",
        prompt: "One of these statements about errors is wrong. Tap the line with the mistake.",
        lines: [
          "Random errors scatter readings both above and below the true value",
          "Repeating and averaging reduces the effect of random errors",
          "Averaging removes a systematic error",
          "A zero error is an example of a systematic error",
        ],
        errorLine: 2,
        ask: "Averaging helps with errors that scatter both ways. Does it help with an error that shifts every reading the same way?",
        hints: [
          "A systematic error shifts every reading the same way, so the average is shifted too.",
          "The wrong line claims averaging removes a systematic error; it cannot, because the offset is in every reading.",
        ],
        explain: "The mistake is the line that says averaging removes a systematic error. Averaging only reduces random scatter. A systematic error shifts every reading the same way, so the average is shifted too and the error remains.",
      },
      // 14 (open, accuracy vs precision)
      {
        kind: "open",
        prompt: "Explain the difference between the accuracy and the precision of a set of readings.",
        modelAnswer: "Accuracy is how close a reading is to the true value. Precision is how close repeated readings are to one another. The 2 are independent: readings can be precise but not accurate if they agree closely yet all sit away from the true value, and they can be accurate on average but not precise if they scatter widely around the true value.",
        marks: [
          "Accuracy is closeness to the true value.",
          "Precision is closeness of the repeats to one another.",
          "The 2 are independent: readings can be precise without being accurate.",
        ],
        ask: "Say what each word compares a reading with, and note that a reading can have one quality without the other.",
      },
      // 15 (open, systematic error)
      {
        kind: "open",
        prompt: "Explain what a systematic error is and why repeating and averaging cannot remove it.",
        modelAnswer: "A systematic error shifts every reading in the same direction by the same fixed amount, for example a zero error or a wrongly calibrated scale. Because every reading is shifted the same way, the average is shifted by that amount too, so repeating and averaging cannot remove it. It is corrected by changing the method or instrument, or by subtracting the known offset.",
        marks: [
          "A systematic error shifts every reading the same way by a fixed amount.",
          "Because the shift is in every reading, the average is shifted too.",
          "It is corrected by changing the method or instrument, not by averaging.",
        ],
        ask: "Think about which direction a systematic error moves the readings, and what happens to the average when every reading is shifted the same way.",
      },
      // 16 (interactive: order, table columns left to right)
      {
        kind: "order",
        prompt: "Put the columns of a pendulum results table in the correct order, from left to right.",
        items: [
          "Length l / cm (independent variable)",
          "Trial times t_1, t_2, t_3 / s",
          "Average time t-bar / s",
          "Period T / s",
          "T^2 / s^2 (for the graph)",
        ],
        ask: "The independent variable goes on the left and the calculated columns furthest right. Put the columns in that order.",
        hints: [
          "The quantity you change, the length, goes in the leftmost column.",
          "The raw trial times come next, then the average, the period, and finally the calculated T^2.",
        ],
        explain: "The independent variable, the length, goes leftmost, then the raw trial times, then the average, then the period, and finally the calculated T^2 column on the right.",
      },
      // 17 (choice, correct 2, table units)
      {
        kind: "choice",
        question: "Where should the unit of a measured quantity be written in a results table?",
        figure: "fig-pr1-06-results-table",
        options: [
          "Beside every number in the column",
          "In a separate note under the table",
          "Once, in the column heading",
          "It does not need to be written at all",
        ],
        correct: 2,
        ask: "A neat table states each unit only once, in a fixed place, so the numbers stay uncluttered. Where does the unit belong?",
        hints: [
          "Repeating the unit next to every number clutters the table.",
          "The unit is written once, in the column heading, such as l over centimetres.",
        ],
        explain: "The unit is written once, in the column heading, for example l over centimetres. The numbers in the column are then written without units.",
      },
      // 18 (interactive: slider, average 30.2, 30.5, 30.2 -> 30.3 s)
      {
        kind: "slider",
        prompt: "3 timing repeats are 30.2 s, 30.5 s and 30.2 s. Set the slider to their average, in seconds.",
        min: 30,
        max: 31,
        step: 0.1,
        unit: "s",
        start: 30,
        targetMin: 30.25,
        targetMax: 30.35,
        ask: "Add the 3 times and divide by 3. Work out 30.2 + 30.5 + 30.2, then divide by 3.",
        hints: [
          "The 3 times add up to 90.9 seconds.",
          "90.9 ÷ 3 is 30.3, so slide to 30.3 seconds.",
        ],
        working: [
          { label: "Formula", latex: "\\bar{t} = \\dfrac{t_1 + t_2 + t_3}{3}" },
          { label: "Substitute", latex: "\\bar{t} = \\dfrac{30.2 + 30.5 + 30.2}{3} = \\dfrac{90.9}{3}" },
          { label: "Answer", latex: "\\bar{t} = 30.3\\ \\text{s}" },
        ],
        explain: "The average is 30.3 seconds, because 30.2 + 30.5 + 30.2 is 90.9 seconds, and 90.9 ÷ 3 is 30.3 seconds.",
      },
      // 19 (interactive: tiles, T = 30.0 / 20 = 1.5 s)
      {
        kind: "tiles",
        prompt: "The time for 20 oscillations is 30.0 s. Build the working line for the period T, using T = t / 20.",
        tiles: ["T =", "30.0", "\\div", "20", "=", "1.5", "s", "cm"],
        answer: ["T =", "30.0", "\\div", "20", "=", "1.5", "s"],
        ask: "The period is the total time divided by the number of oscillations, so set up 30.0 ÷ 20.",
        hints: [
          "Use T equals the total time divided by 20.",
          "30.0 ÷ 20 is 1.5, and the period is measured in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{n}" },
          { label: "Substitute", latex: "T = \\dfrac{30.0}{20}" },
          { label: "Answer", latex: "T = 1.5\\ \\text{s}" },
        ],
        explain: "The period is 1.5 seconds, because the time for 20 oscillations is 30.0 seconds, and 30.0 ÷ 20 is 1.5 seconds.",
      },
      // 20 (choice, correct 0, gradient 2.0)
      {
        kind: "choice",
        question: "A straight-line graph passes through the points (0, 2.0) and (5.0, 12.0). What is its gradient?",
        options: ["2.0", "10.0", "0.5", "5.0"],
        correct: 0,
        ask: "The gradient is the rise divided by the run. Work out the change in y over the change in x between the 2 points.",
        hints: [
          "Rise is 12.0 - 2.0; run is 5.0 - 0.",
          "10.0 ÷ 5.0 is 2.0.",
        ],
        working: [
          { label: "Formula", latex: "m = \\dfrac{y_2 - y_1}{x_2 - x_1}" },
          { label: "Substitute", latex: "m = \\dfrac{12.0 - 2.0}{5.0 - 0} = \\dfrac{10.0}{5.0}" },
          { label: "Answer", latex: "m = 2.0" },
        ],
        explain: "The gradient is 2.0. The rise is 12.0 - 2.0, which is 10.0, and the run is 5.0 - 0, which is 5.0, and 10.0 ÷ 5.0 is 2.0.",
      },
      // 21 (interactive: slider, intercept c = 1.0 from (2.0,5.0)&(6.0,13.0))
      {
        kind: "slider",
        prompt: "A best-fit line passes through (2.0, 5.0) and (6.0, 13.0), and its gradient is 2.0. Set the slider to the intercept c, in the same units as y.",
        min: 0,
        max: 5,
        step: 0.1,
        unit: "",
        start: 0,
        targetMin: 0.95,
        targetMax: 1.05,
        ask: "Use y = mx + c at one known point. Put in y equals 5.0, m equals 2.0 and x equals 2.0, then find c.",
        hints: [
          "At the point (2.0, 5.0): 5.0 equals 2.0 × 2.0 plus c.",
          "2.0 × 2.0 is 4.0, so c is 5.0 - 4.0, which is 1.0.",
        ],
        working: [
          { label: "Formula", latex: "c = y - mx" },
          { label: "Substitute", latex: "c = 5.0 - 2.0 \\times 2.0" },
          { label: "Answer", latex: "c = 1.0" },
        ],
        explain: "The intercept is 1.0. Using the point (2.0, 5.0) with a gradient of 2.0, c equals 5.0 - 2.0 × 2.0, which is 5.0 - 4.0, giving 1.0.",
      },
      // 22 (interactive: graphpick, best-fit line)
      {
        kind: "graphpick",
        prompt: "Which line is drawn as a correct straight line of best fit through the plotted points?",
        xLabel: "l / cm",
        yLabel: "T^2 / s^2",
        options: [
          { points: [[1, 2.2], [2, 4.1], [3, 5.8], [4, 8.2], [5, 9.9]], caption: "One straight line with points spread evenly on both sides" },
          { points: [[1, 2.2], [2, 4.1], [3, 5.8], [4, 8.2], [5, 9.9], [1, 2.2]], caption: "Joins the points dot to dot" },
          { points: [[0, 0], [5, 9.9]], caption: "Forced through the origin" },
          { points: [[1, 3.0], [2, 5.0], [3, 7.0], [4, 9.0], [5, 11.0]], caption: "Line drawn above every point" },
        ],
        correct: 0,
        ask: "A good best-fit line is one straight line with the points balanced on both sides. It is not dot to dot, not forced through a point, and not sitting to one side of the points.",
        hints: [
          "Rule out the zig-zag that joins the points and the line forced through the origin.",
          "The correct line is a single straight line with roughly equal numbers of points above and below it.",
        ],
        explain: "The correct line is a single straight line with the points spread evenly on both sides. Joining dot to dot, forcing the line through the origin, and drawing it above every point are all wrong.",
      },
      // 23 (open, best-fit rules)
      {
        kind: "open",
        prompt: "State the rules for drawing a good straight line of best fit on a graph.",
        figure: "fig-pr1-08-bestfit-good-bad",
        modelAnswer: "Use a sharp pencil and a ruler to draw one straight line. Position it so the plotted points are spread evenly on both sides of the line, rather than joining the points dot to dot or forcing the line through any particular point such as the origin. Keep the line within the range of the data, and take the gradient from a large triangle. A good line balances the scatter of the points.",
        marks: [
          "One straight line drawn with a sharp pencil and a ruler.",
          "Points spread evenly on both sides of the line.",
          "Do not join dot to dot or force the line through a point; stay within the data.",
        ],
        ask: "Think about how many lines you draw, how the points should sit relative to the line, and what you must not do.",
      },
      // 24 (open, evaluation)
      {
        kind: "open",
        prompt: "In a pendulum experiment the main error comes from human reaction time when starting and stopping the stopwatch. Explain how you would reduce its effect on the period.",
        modelAnswer: "Reaction time adds a random error each time the stopwatch is started and stopped. To reduce its effect, time many oscillations, for example 20, in one go and divide the total time by the number of oscillations to find the period, so the fixed timing error is shared over many swings. Repeating the whole measurement and averaging reduces the random scatter further.",
        marks: [
          "Reaction time is a random error at the start and the stop.",
          "Time many oscillations and divide by the number to find the period.",
          "Repeat and average to reduce the random scatter.",
        ],
        ask: "Think about timing many swings at once rather than one, and what dividing by the number of oscillations does to the timing error.",
      },
      // 25 (open, 4 skill stages)
      {
        kind: "open",
        prompt: "Describe the 4 skill stages that a physics practical assessment tests, in the order you would meet them.",
        modelAnswer: "First is planning, where you choose the variables, plan an ordered method, and identify the hazards. Second is manipulation and measurement, where you set up the apparatus, use each instrument correctly, and read to a sensible precision. Third is presentation of data, where you record every reading in a neat table and process it. Fourth is analysis and evaluation, where you draw a graph, reach an evidence-based conclusion, judge the errors, and suggest improvements.",
        marks: [
          "Planning: choose the variables and method and identify hazards.",
          "Manipulation and measurement: set up apparatus and take readings to a sensible precision.",
          "Presentation: record readings in a neat table and process them.",
          "Analysis and evaluation: draw a graph, conclude, and judge the errors.",
        ],
        ask: "Think about what you do before touching apparatus, while taking readings, when writing them down, and when making sense of them.",
      },
    ],
  },
];
