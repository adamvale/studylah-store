import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, Revision 2. Checkpoint over KB Chapter 01, sections t1.4 to t1.5:
// precision of instruments, measuring time and the simple pendulum. Question-only.
// Figure colours: white object being measured, grey rulers/stands/guides, blue swing
// or motion arrow, green digital readout, amber precision note.

export const BOXES: Subconcept[] = [
  {
    id: "t1.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: precision of instruments, timing and the pendulum",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which instrument has the smallest division, making it the most precise?",
        figure: "fig-01-09-precision-scale",
        options: ["Digital micrometer screw gauge", "Digital calipers", "Metre rule", "Measuring tape"],
        correct: 0,
        ask: "The most precise instrument is the one with the smallest division. Compare 0.1 cm, 0.01 mm and 0.001 mm.",
        hints: [
          "The metre rule reads to 0.1 centimetres, which is 1 millimetre; the calipers to 0.01 millimetres; the micrometer to 0.001 millimetres.",
          "The smallest division of all is 0.001 millimetres, on the micrometer.",
        ],
        explain: "The digital micrometer screw gauge is most precise, because its smallest division, 0.001 millimetres, is smaller than the 0.01 millimetres of the calipers and the 1 millimetre of the metre rule.",
      },
      {
        kind: "choice",
        question: "A pendulum makes 20 complete oscillations in 30 s. What is its period?",
        figure: "fig-01-11-pendulum-swing",
        options: ["1.5 s", "15 s", "0.67 s", "600 s"],
        correct: 0,
        ask: "The period is the time for 1 oscillation, so divide the total time by the number of oscillations. Work out 30 ÷ 20.",
        hints: [
          "Use period equals total time divided by 20.",
          "30 ÷ 20 is 1.5, and the period is measured in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{30}{20}" },
          { label: "Answer", latex: "T = 1.5\\ \\text{s}" },
        ],
        explain: "The period is 1.5 seconds, because 30 seconds divided by 20 oscillations is 1.5 seconds for each oscillation.",
      },
      {
        kind: "order",
        prompt: "Order these instruments from least precise to most precise.",
        items: [
          "Metre rule (0.1 cm)",
          "Digital calipers (0.01 mm)",
          "Digital micrometer screw gauge (0.001 mm)",
        ],
        ask: "Least precise means the largest smallest-division. Compare 0.1 cm, which is 1 mm, with 0.01 mm and 0.001 mm, then order them.",
        hints: [
          "A metre rule reads to 1 millimetre, the calipers to 0.01 millimetres, the micrometer to 0.001 millimetres.",
          "The larger the smallest division, the less precise, so the metre rule is least precise and the micrometer is most precise.",
        ],
        explain: "From least to most precise the order is metre rule, then digital calipers, then digital micrometer, because their smallest divisions shrink from 1 millimetre to 0.01 millimetres to 0.001 millimetres.",
      },
      {
        kind: "choice",
        question: "A simple pendulum's period is made longer by which change?",
        figure: "fig-01-10-pendulum-setup",
        options: ["Making the string longer", "Using a heavier bob", "Using a lighter bob", "Pulling the bob back further before release"],
        correct: 0,
        ask: "The period of a pendulum is set by its length. Which option changes the length?",
        hints: [
          "The period does not depend on the mass of the bob or on the size of the swing.",
          "A longer string gives a longer period.",
        ],
        explain: "Making the string longer increases the period, because the period of a simple pendulum depends only on its length. The mass of the bob and the amplitude of the swing do not change the period.",
      },
      {
        kind: "slider",
        prompt: "A pendulum takes 40 s to complete 20 oscillations. Set the slider to its period, in seconds.",
        min: 0,
        max: 5,
        step: 0.1,
        unit: "s",
        start: 0,
        targetMin: 1.9,
        targetMax: 2.1,
        ask: "The period is the total time divided by the number of oscillations, so work out 40 ÷ 20.",
        hints: [
          "Use period equals total time divided by 20.",
          "40 ÷ 20 is 2, so slide to 2 seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{40}{20}" },
          { label: "Answer", latex: "T = 2\\ \\text{s}" },
        ],
        explain: "The period is 2 seconds, because 40 seconds divided by 20 oscillations is 2 seconds for each oscillation.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to its precision.",
        pairs: [
          { left: "Metre rule", right: "0.1 cm" },
          { left: "Digital calipers", right: "0.01 mm" },
          { left: "Digital micrometer screw gauge", right: "0.001 mm" },
        ],
        ask: "Recall the smallest division of each instrument. The metre rule is the coarsest and the micrometer is the finest.",
        hints: [
          "A metre rule reads to 0.1 centimetres, which is the same as 1 millimetre.",
          "The calipers read to 0.01 millimetres and the micrometer to 0.001 millimetres, the finest of the 3.",
        ],
        explain: "A metre rule is precise to 0.1 centimetres, digital calipers to 0.01 millimetres, and a digital micrometer to 0.001 millimetres, so the micrometer measures the smallest division.",
      },
      {
        kind: "choice",
        question: "Which instrument is the best choice for measuring the length of a table a few metres long?",
        options: ["Measuring tape", "Digital micrometer screw gauge", "Digital calipers", "Metre rule"],
        correct: 0,
        ask: "Think about which instrument can reach across several metres and bend along a large object.",
        hints: [
          "A micrometer and calipers open only a few centimetres, and a metre rule reaches about 1 metre.",
          "A measuring tape can stretch several metres, so it suits a table a few metres long.",
        ],
        explain: "A measuring tape is the best choice, because it can measure several metres, while a metre rule reaches only about 1 metre and the calipers and micrometer open just a few centimetres.",
      },
      {
        kind: "tiles",
        prompt: "A pendulum takes 36 s for 20 oscillations. Build the working line that gives the period T.",
        tiles: ["T =", "36", "\\div", "20", "=", "1.8", "s", "40"],
        answer: ["T =", "36", "\\div", "20", "=", "1.8", "s"],
        ask: "The period is the total time divided by the number of oscillations, so set up 36 ÷ 20.",
        hints: [
          "Use period equals total time divided by 20.",
          "36 ÷ 20 is 1.8, and the period is measured in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{36}{20}" },
          { label: "Answer", latex: "T = 1.8\\ \\text{s}" },
        ],
        explain: "The period is 1.8 seconds, because 36 seconds divided by 20 oscillations is 1.8 seconds for each oscillation.",
      },
      {
        kind: "classify",
        prompt: "Sort each measurement by the better instrument to use.",
        bins: ["Metre rule", "Digital micrometer screw gauge"],
        items: [
          { text: "the length of a pendulum string", bin: 0 },
          { text: "the height of a small stand", bin: 0 },
          { text: "the diameter of a thin wire", bin: 1 },
          { text: "the thickness of a coin", bin: 1 },
        ],
        ask: "A metre rule suits lengths up to about 1 metre, while a micrometer suits tiny widths measured to 0.001 millimetres. Tap each measurement and drop it in its bin.",
        hints: [
          "A pendulum string and a small stand are lengths of a few centimetres up to about 1 metre, which suit a metre rule.",
          "A thin wire and a coin are only a few millimetres or centimetres across and need the fine precision of a micrometer.",
        ],
        explain: "The pendulum string and the small stand are best measured with a metre rule, while the thin wire and the coin need the 0.001 millimetre precision of a micrometer screw gauge.",
      },
      {
        kind: "choice",
        question: "Why do we time 20 oscillations and then divide by 20, instead of timing a single oscillation?",
        options: [
          "To reduce the effect of reaction time, a random error",
          "To make the pendulum swing faster",
          "To change the length of the pendulum",
          "To increase the mass of the bob",
        ],
        correct: 0,
        ask: "Starting and stopping a stopwatch by hand carries a random error. Think about how spreading it over 20 swings helps.",
        hints: [
          "Human reaction time is a random error in every stopwatch reading.",
          "Timing 20 oscillations spreads that error over 20 swings, so dividing by 20 makes it much smaller for each period.",
        ],
        explain: "We time 20 oscillations and divide by 20 to reduce the effect of reaction time, which is a random error. Spread over 20 swings, the timing error in each period becomes much smaller.",
      },
      {
        kind: "open",
        prompt: "Describe how you would use a stopwatch to measure the period of a simple pendulum accurately.",
        figure: "fig-01-11-pendulum-swing",
        modelAnswer: "Start the pendulum swinging with a small amplitude. Using a stopwatch, measure the time for 20 complete oscillations rather than 1, so the reaction time is spread out. Divide that time by 20 to get the period, T = t / 20. Repeat the measurement and average the results to reduce the random error further.",
        marks: [
          "Time 20 complete oscillations, not just 1.",
          "Period T = t / 20, so divide the total time by 20.",
          "Repeat and average to reduce the random error from reaction time.",
        ],
        ask: "Think about how many oscillations to time, how to turn that into a period, and how repeating helps with reaction time.",
      },
      {
        kind: "open",
        prompt: "A student claims that a heavier bob always makes a pendulum swing with a longer period. State what the period of a simple pendulum actually depends on, and explain whether the student is correct.",
        modelAnswer: "The period of a simple pendulum depends only on its length: a longer pendulum has a longer period. It does not depend on the mass of the bob or on the amplitude of the swing. So the student is not correct, because changing the mass of the bob does not change the period. Only changing the length would change it.",
        marks: [
          "Period depends only on the length of the pendulum.",
          "Period does not depend on the mass of the bob or the amplitude.",
          "The student is wrong, because a heavier bob does not change the period.",
        ],
        ask: "Recall the 1 factor that sets a pendulum's period, and the 2 factors that do not. Then judge the claim.",
      },
    ],
  },
];
