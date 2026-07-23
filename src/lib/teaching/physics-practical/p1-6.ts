import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, section 6. Grounded in Practical Chapter 01 (sources 1.10, 1.11): drawing a
// straight-line graph, taking the gradient and intercept, and evaluating an experiment.
// Figure colours follow the house dark-theme key: plotted-point crosses and labels = white/grey;
// grid lines and guides = grey; the line of best fit = blue; the gradient triangle = amber;
// a good/correct marker = green; an anomalous point or a poor line = red.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.6",
    code: "TP1.6",
    title: "Drawing graphs; gradient, intercept and evaluation",
    blurb: "Plot a clean straight line, read its gradient and intercept, and judge the experiment",
    steps: [
      {
        kind: "concept",
        heading: "Draw the graph cleanly",
        body: "Plot with a *sharp pencil*, *label both axes* with the quantity and its unit, and choose *sensible scales* so the points fill at least half the grid. Mark each point with a small *cross*.",
        say: "A graph only earns its marks if it is drawn cleanly. Use a sharp pencil so a point is a thin cross, not a blob. Label both axes with the quantity and its unit, for example T squared in seconds squared going up and length in centimetres going across. Pick scales that let the points fill at least half the grid, and keep them easy to read. Avoid scales that go up in 3s or 7s to a square, because you will misplot points. Mark every plotted point with a small cross, not a dot, so its exact position is clear.",
      },
      {
        kind: "concept",
        heading: "One line of best fit",
        figure: "fig-pr1-08-bestfit-good-bad",
        body: "Draw ONE straight *line of best fit* with the points spread *evenly on both sides*. Never join the dots and never force the line through a particular point. Stay *within the data*: do not extrapolate unless the question asks.",
        say: "The figure shows 2 graphs side by side. On the left is a good line: a single blue straight line with the white point crosses scattered evenly above and below it, roughly the same number on each side. On the right is a poor attempt: a red line that zig-zags from dot to dot, or is dragged to pass exactly through the first point. Aim for the good one. Draw one straight ruled line that balances the scatter, ignore no reading but do not chase any single one, and keep the line inside the range of your points unless you are told to extend it.",
      },
      {
        kind: "concept",
        heading: "The straight-line equation",
        body: "A straight graph obeys *y = mx + c*, where the *gradient* m is the steepness and the *intercept* c is the value of y where the line crosses the axis at x = 0.",
        formula: {
          latex: "y = mx + c",
          where: [
            { sym: "y", meaning: "quantity on the vertical axis" },
            { sym: "x", meaning: "quantity on the horizontal axis" },
            { sym: "m", meaning: "gradient (rise over run)" },
            { sym: "c", meaning: "intercept, the value of y at x = 0" },
          ],
        },
        say: "Any straight-line graph follows the equation y equals m x plus c. The letter m is the gradient, which tells you how steep the line is. The letter c is the intercept, the value of y where the line crosses the vertical axis, that is where x is 0. Once you can read m and c off the graph, you have described the whole relationship.",
      },
      {
        kind: "concept",
        heading: "Gradient from a large triangle",
        figure: "fig-pr1-07-graph-bestfit",
        body: "Find the *gradient* from a *large triangle*, at least half the length of the line, and quote it to *2 or 3 significant figures*. The gradient is the rise divided by the run.",
        formula: {
          latex: "m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}",
          where: [
            { sym: "m", meaning: "gradient of the line" },
            { sym: "\\Delta y", meaning: "rise, the change in the vertical quantity" },
            { sym: "\\Delta x", meaning: "run, the change in the horizontal quantity" },
          ],
        },
        say: "This figure plots T squared going up against length going across. The white crosses are the readings and the blue line is the best fit. To get the gradient, draw an amber triangle under the line that is large, at least half the line's length, because a big triangle makes the read-off far more accurate. Read the rise up the vertical side and the run along the horizontal side, then divide the rise by the run. Give the answer to 2 or 3 significant figures with its unit.",
      },
      {
        kind: "insight",
        body: "A good *evaluation* ties each comment to a *specific measurement*, reads the trend off the graph, and attacks the *biggest error* first. To cut reaction-time error, *time more oscillations* and divide.",
        say: "Evaluation is where marks are won or lost. Do not write vague lines like human error. Instead, name the measurement that limits you and go after the biggest source of error first. In a pendulum experiment the largest random error is usually your reaction time on the stopwatch, about 0.2 seconds each time you start and stop. The fix is simple and specific: time 20 oscillations instead of 1, then divide by 20. The same reaction-time error is now spread over 20 swings, so its share of each period shrinks. Tie every comment to a real number from your experiment.",
      },
      {
        kind: "choice",
        question: "Which describes a correct line of best fit?",
        figure: "fig-pr1-08-bestfit-good-bad",
        options: [
          "A line joining each point to the next",
          "A line dragged to pass exactly through the first point",
          "One straight line with points spread evenly on both sides",
          "A line extended far beyond the last reading",
        ],
        correct: 2,
        ask: "A best-fit line balances the scatter. It is one straight line, not a dot-to-dot, and it is not forced through any single point.",
        hints: [
          "Joining the dots and forcing the line through one point are both wrong.",
          "The right line is a single ruled line with roughly equal numbers of points above and below it.",
        ],
        explain: "The best fit is one straight line with the points spread evenly on both sides. Joining the dots, forcing the line through a chosen point, or extending it well past the data are all wrong.",
      },
      {
        kind: "graphpick",
        prompt: "The crosses are the readings. Pick the correct line of best fit.",
        xLabel: "l / cm",
        yLabel: "T^2 / s^2",
        options: [
          { points: [[0, 1], [6, 13]], caption: "Straight line, points spread evenly both sides" },
          { points: [[1, 2.6], [2, 5.6], [3, 6.8], [4, 9.4], [5, 10.6]], caption: "Joins each point to the next" },
          { points: [[1, 2.6], [6, 15]], caption: "Forced through the first point, too steep" },
          { points: [[0, -1], [6, 9]], caption: "Sits below every point" },
        ],
        correct: 0,
        ask: "You want one straight line with the crosses balanced above and below it, not a line that joins the dots or is dragged through one point.",
        hints: [
          "Rule out the zig-zag that joins each point, and the line forced through the first point.",
          "The best line has roughly equal numbers of crosses above and below it along its whole length.",
        ],
        explain: "The first line is the best fit: it is one straight ruled line with the readings scattered evenly on both sides. The others join the dots, are forced through the first point, or sit below every reading.",
      },
      {
        kind: "choice",
        question: "A best-fit line passes through (0, 2.0) and (5.0, 12.0). Using this large triangle, what is the gradient?",
        figure: "fig-pr1-07-graph-bestfit",
        options: ["0.50", "2.0", "10", "14"],
        correct: 1,
        ask: "The gradient is the rise divided by the run. The rise is 12.0 - 2.0, and the run is 5.0 - 0.",
        hints: [
          "Rise is 12.0 - 2.0, which is 10.0. Run is 5.0 - 0, which is 5.0.",
          "10.0 ÷ 5.0 is 2.0.",
        ],
        working: [
          { label: "Formula", latex: "m = \\dfrac{y_2 - y_1}{x_2 - x_1}" },
          { label: "Substitute", latex: "m = \\dfrac{12.0 - 2.0}{5.0 - 0}" },
          { label: "Answer", latex: "m = 2.0" },
        ],
        explain: "The gradient is 2.0, because the rise of 12.0 - 2.0 is 10.0, the run of 5.0 - 0 is 5.0, and 10.0 ÷ 5.0 is 2.0.",
      },
      {
        kind: "choice",
        question: "A straight graph of best fit passes through (2.0, 5.0) and (6.0, 13.0) and has gradient 2.0. What is the intercept c?",
        options: ["2.0", "5.0", "0", "1.0"],
        correct: 3,
        ask: "Use y equals m x plus c. Put in one point and the gradient 2.0, then solve for c.",
        hints: [
          "At the point (2.0, 5.0): 5.0 equals 2.0 × 2.0 plus c.",
          "2.0 × 2.0 is 4.0, so c is 5.0 - 4.0, which is 1.0.",
        ],
        working: [
          { label: "Formula", latex: "y = mx + c" },
          { label: "Substitute", latex: "5.0 = (2.0)(2.0) + c" },
          { label: "Answer", latex: "c = 1.0" },
        ],
        explain: "The intercept is 1.0, because at the point 2.0 comma 5.0 we have 5.0 equals 2.0 × 2.0 plus c, and 5.0 - 4.0 is 1.0.",
      },
      {
        kind: "open",
        prompt: "A student times 1 swing of a pendulum with a stopwatch and finds the periods scatter a lot. Explain the dominant error and how to reduce it.",
        modelAnswer: "The dominant error is a random error from reaction time: the student's hand takes about 0.2 seconds to start and stop the stopwatch each time, and this scatters the single-swing readings both ways. Timing only 1 swing makes this reaction time a large fraction of the measured time. To reduce it, time many oscillations, for example 20, and divide the total time by 20. The same reaction-time error is now shared over 20 swings, so its effect on each period is about 20 times smaller. Repeating and averaging further cuts the random scatter.",
        marks: [
          "Identifies the dominant error as random error from reaction time (about 0.2 s per start/stop).",
          "Explains timing 1 swing makes this error a large fraction of the reading.",
          "Improvement: time many oscillations (e.g. 20) and divide by the number, so the reaction-time error is shared out.",
          "Repeat and average to reduce the random scatter further.",
        ],
        ask: "Name the biggest error by its type and tie it to a real number, then give a specific method that shares that error over many swings.",
      },
    ],
  },
];
