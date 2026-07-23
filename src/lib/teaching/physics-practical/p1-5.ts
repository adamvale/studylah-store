import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, section 5. Grounded in Practical Chapter 01 source 1.9 (presenting data in a table).
// Figure colours follow the house dark-theme key: table rules, headings and raw entries = white/grey (#EAEAEA);
// guide/leader lines = grey (#9AA0A6); a highlighted calculated column = amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.5",
    code: "TP1.5",
    title: "Presenting data in a table",
    blurb: "The fixed conventions for laying out a neat results table",
    steps: [
      {
        kind: "concept",
        heading: "Units go in the heading",
        figure: "fig-pr1-06-results-table",
        body: "In a results table the *unit* is written once, in the *column heading*, as a quantity divided by its unit (l / cm). You then write the *bare numbers* in the cells, never a unit beside each one.",
        say: "This figure shows a tidy results table. The top row of headings is in white, and each heading is written as the quantity over its unit, like l over cm or T over seconds. Below, every cell holds just a plain number with no unit stuck to it. Writing the unit once in the heading keeps the table clean and tells the reader that l over cm equals a pure number.",
      },
      {
        kind: "concept",
        heading: "Independent variable on the left",
        body: "The *independent variable*, the one you deliberately change, goes in the *leftmost* column, listed in a clear *order* such as smallest to largest. Its column sets out the plan of the experiment.",
        say: "Read a good table left to right like a story. The very first column on the left is the independent variable, the quantity you chose to change, for example the length of a pendulum. List its values in a sensible order, usually increasing, so the reader sees your plan at a glance before any measurements appear.",
      },
      {
        kind: "concept",
        heading: "Repeats then calculated columns",
        body: "Next come the *repeat* readings of the dependent variable, trial by trial, and then any *calculated* quantities go in the columns *furthest right*. So raw data sits on the left and processed data on the right.",
        say: "After the left hand column of what you changed, place the readings you measured. If you timed something 3 times, give a column for each trial, t 1, t 2 and t 3. Then, on the far right, put anything you worked out from those readings, such as an average or a period. Raw data on the left, processed numbers on the right.",
      },
      {
        kind: "concept",
        heading: "Keep the precision fixed",
        body: "Every raw reading of a quantity keeps the *same precision*, so you keep *trailing zeros*: write 100.0, not 100, if you measured to a tenth. A *calculated* value follows the *decimal placing* of the raw data it came from.",
        say: "Be consistent down a column. If your stopwatch reads to a tenth of a second, then a time of exactly 100 seconds is written 100 point 0, because that trailing zero states the precision you actually worked to. When you then calculate a value from those readings, keep the same number of decimal places as the raw data, so the table does not pretend to be more precise than the measurements.",
      },
      {
        kind: "concept",
        heading: "A pendulum table",
        body: "A typical *pendulum* table runs: length l, 3 trials t1 t2 t3, the *average* t-bar, the period T from *T = t-bar / 20*, then T^2 for the graph. Left to right it moves from what you set to what you plot.",
        formula: {
          latex: "T = \\dfrac{\\bar{t}}{20}",
          where: [
            { sym: "T", meaning: "period, the time for one oscillation", unit: "s" },
            { sym: "\\bar{t}", meaning: "average time for 20 oscillations", unit: "s" },
          ],
        },
        say: "Here is the whole shape. On the left, the length l that you chose. Then 3 columns of timing, t 1, t 2 and t 3, one per trial. Next the average of those 3, called t bar. Then the period T, found by dividing t bar by 20 because you timed 20 swings. Finally T squared, the column you will plot on your graph. The table walks from the quantity you set on the left to the quantity you plot on the right.",
      },
      {
        kind: "choice",
        question: "In a results table, where should the unit of a measured length be written?",
        figure: "fig-pr1-06-results-table",
        options: [
          "Beside every number in the column",
          "Only in the very first cell of the column",
          "Once, in the column heading, as l / cm",
          "In a footnote below the table",
        ],
        correct: 2,
        ask: "A tidy table states each unit only once, at the top of its column, so the cells hold plain numbers.",
        hints: [
          "The unit belongs with the heading, not repeated in every cell.",
          "The heading is written as the quantity over its unit, like l / cm, and the cells then hold bare numbers.",
        ],
        explain: "The unit goes once in the column heading, written as l / cm. The cells below then contain only the bare numbers, which keeps the table clean and unambiguous.",
      },
      {
        kind: "choice",
        question: "A student times how the period of a pendulum depends on its length. Which quantity belongs in the leftmost column of the table?",
        options: [
          "The length l, the independent variable",
          "The period T, the dependent variable",
          "T^2, a calculated quantity",
          "The average time t-bar",
        ],
        correct: 0,
        ask: "The leftmost column holds the variable you deliberately change, listed in order.",
        hints: [
          "The one you set yourself is the independent variable.",
          "Here you choose the length and then measure how the period responds, so length goes on the far left.",
        ],
        explain: "The length l is the independent variable, the quantity the student chooses and changes, so it goes in the leftmost column. The period and the calculated columns follow to its right.",
      },
      {
        kind: "choice",
        question: "A stopwatch reads to 0.1 s and a time comes out as exactly 100 seconds. How should it be recorded in the table?",
        options: [
          "100",
          "1 x 10^2",
          "100 s in the cell",
          "100.0",
        ],
        correct: 3,
        ask: "Keep the same precision as the instrument, so hold the trailing zero that a tenth of a second gives you.",
        hints: [
          "The stopwatch works to one decimal place, so the reading needs one too.",
          "Writing 100.0 keeps the trailing zero that states the precision; the unit stays in the heading, not the cell.",
        ],
        explain: "It should be written 100.0, because the stopwatch reads to a tenth of a second. The trailing zero states that precision, and the unit stays in the column heading rather than the cell.",
      },
      {
        kind: "order",
        prompt: "Put the columns of a pendulum results table in the correct order, left to right.",
        items: [
          "l / cm",
          "t_1 / s",
          "t_2 / s",
          "t_3 / s",
          "average t / s",
          "T / s",
          "T^2 / s^2",
        ],
        ask: "Start with the variable you set on the left, then the raw timing trials, then the quantities you calculate from them on the right.",
        hints: [
          "The independent variable l comes first, and the calculated columns T and T^2 come last.",
          "Order is: length, then the 3 trials, then their average, then the period, then T squared.",
        ],
        explain: "The table runs from what you set to what you plot: length l first, then the 3 timing trials, then their average, then the period T, and finally T^2 on the far right for the graph.",
      },
      {
        kind: "choice",
        question: "3 timings for 20 oscillations are 30.2 s, 30.5 s and 30.2 s. What average time t-bar goes in the calculated column?",
        options: [
          "90.9 s",
          "30.3 s",
          "30.2 s",
          "30.30 s",
        ],
        correct: 1,
        ask: "Add the 3 times and divide by 3, then keep the same one decimal place as the raw readings.",
        hints: [
          "Add 30.2, 30.5 and 30.2, which is 90.9, then divide by 3.",
          "90.9 divided by 3 is 30.3, and it keeps one decimal place like the raw data.",
        ],
        working: [
          { label: "Formula", latex: "\\bar{t} = \\dfrac{t_1 + t_2 + t_3}{3}" },
          { label: "Substitute", latex: "\\bar{t} = \\dfrac{30.2 + 30.5 + 30.2}{3} = \\dfrac{90.9}{3}" },
          { label: "Answer", latex: "\\bar{t} = 30.3\\ \\text{s}" },
        ],
        explain: "The average is 30.3 seconds, because 30.2 plus 30.5 plus 30.2 is 90.9, and 90.9 divided by 3 is 30.3. It keeps one decimal place to match the raw timings.",
      },
      {
        kind: "slider",
        prompt: "The average time for 20 oscillations is 30.0 s. Set the slider to the period T, in seconds, where T = t-bar / 20.",
        min: 0,
        max: 3,
        step: 0.1,
        unit: "s",
        start: 0,
        targetMin: 1.4,
        targetMax: 1.6,
        ask: "The period is the average time divided by the number of oscillations, so work out 30.0 divided by 20.",
        hints: [
          "Use T equals t-bar divided by 20.",
          "30.0 divided by 20 is 1.5, so slide to 1.5 seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{\\bar{t}}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{30.0}{20}" },
          { label: "Answer", latex: "T = 1.5\\ \\text{s}" },
        ],
        explain: "The period is 1.5 seconds, because 30.0 seconds divided by 20 oscillations is 1.5 seconds. This T column sits to the right of the average, and T^2 is calculated from it for the graph.",
      },
    ],
  },
];
