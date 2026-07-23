import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics (Practical Chapter 2), Revision 1.
// Checkpoint over sections tp2.1 to tp2.3: instruments, range and precision;
// reading vernier calipers and the micrometer; zero error; errors. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: instruments, reading scales and errors",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which instrument measures length to the smallest division, giving the most significant figures?",
        options: ["Metre rule", "Measuring tape", "Micrometer screw gauge", "Vernier calipers"],
        correct: 2,
        ask: "Compare the smallest division of each. Which one can read down to 0.01 mm? That is the most precise.",
        hints: [
          "The metre rule and tape read to 0.1 cm, and the vernier calipers to 0.01 cm.",
          "0.01 cm is 0.1 mm, but the micrometer screw gauge reads to 0.01 mm, 10 times finer.",
        ],
        explain: "The micrometer screw gauge is the most precise, because its smallest division is 0.01 mm. The vernier calipers read to 0.01 cm, which is 0.1 mm, and the metre rule and tape only to 0.1 cm.",
      },
      {
        kind: "choice",
        question: "The main scale of a vernier caliper reads 4.2 cm and vernier division 3 lines up with the main scale. What is the reading?",
        options: ["4.23 cm", "4.03 cm", "4.5 cm", "7.2 cm"],
        correct: 0,
                ask: "Add the main-scale value to the coinciding division times 0.01 cm. Work out 4.2 plus 3 times 0.01.",
        hints: [
          "Each vernier division is worth 0.01 cm, so division 3 adds 0.03 cm.",
          "4.2 plus 0.03 is 4.23 cm.",
        ],
        working: [
          { label: "Formula", latex: "\\text{reading} = \\text{main} + n \\times 0.01\\ \\text{cm}" },
          { label: "Substitute", latex: "\\text{reading} = 4.2 + 3 \\times 0.01" },
          { label: "Answer", latex: "\\text{reading} = 4.23\\ \\text{cm}" },
        ],
        explain: "The reading is 4.23 centimetres, because the main scale gives 4.2 centimetres and vernier division 3 adds 3 times 0.01, which is 0.03 centimetres.",
      },
      {
        kind: "choice",
        question: "A micrometer sleeve shows 7.5 mm and the thimble reads 32. What is the micrometer reading?",
        figure: "fig-pr2-02-micrometer-rod",
        options: ["7.32 mm", "8.20 mm", "10.7 mm", "7.82 mm"],
        correct: 3,
                ask: "Add the sleeve reading to the thimble reading times 0.01 mm. Work out 7.5 plus 32 times 0.01.",
        hints: [
          "Each thimble division is worth 0.01 mm, so a thimble reading of 32 adds 0.32 mm.",
          "7.5 plus 0.32 is 7.82 mm.",
        ],
        working: [
          { label: "Formula", latex: "\\text{reading} = \\text{sleeve} + n \\times 0.01\\ \\text{mm}" },
          { label: "Substitute", latex: "\\text{reading} = 7.5 + 32 \\times 0.01" },
          { label: "Answer", latex: "\\text{reading} = 7.82\\ \\text{mm}" },
        ],
        explain: "The reading is 7.82 millimetres, because the sleeve gives 7.5 millimetres and the thimble reading of 32 adds 32 times 0.01, which is 0.32 millimetres.",
      },
      {
        kind: "choice",
        question: "A micrometer has a zero error of -0.03 mm. It gives an observed reading of 8.46 mm on a rod. What is the corrected diameter?",
        options: ["8.43 mm", "8.49 mm", "8.46 mm", "8.13 mm"],
        correct: 1,
                ask: "Subtract the zero error from the observed reading. Because the zero error is negative, work out 8.46 minus negative 0.03.",
        hints: [
          "Corrected equals observed minus the zero error, and subtracting a negative adds it back.",
          "8.46 minus negative 0.03 is 8.46 plus 0.03, which is 8.49 mm.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "\\text{corrected} = 8.46 - (-0.03)" },
          { label: "Answer", latex: "\\text{corrected} = 8.49\\ \\text{mm}" },
        ],
        explain: "The corrected diameter is 8.49 millimetres, because corrected equals observed minus the zero error, and 8.46 minus negative 0.03 is 8.46 plus 0.03, which is 8.49 millimetres.",
      },
      {
        kind: "choice",
        question: "How should you position your eye to avoid a parallax error when reading a scale?",
        figure: "fig-pr2-06-parallax",
        options: ["From a slight angle so the numbers look larger", "As far from the scale as possible", "With the line of sight perpendicular to the scale", "Below the level of the mark"],
        correct: 2,
        ask: "A parallax error comes from viewing the scale at a slant. Where must your line of sight point to read the true value?",
        hints: [
          "Viewing from any angle shifts the apparent reading along the scale.",
          "Keep the line of sight perpendicular to the scale and the scale in contact with the object.",
        ],
        explain: "You should keep the line of sight perpendicular to the scale, so the mark lines up truly. Reading from a slant shifts the apparent value and causes a parallax error.",
      },
      {
        kind: "classify",
        prompt: "Sort each measurement error into the correct type.",
        bins: ["Random", "Systematic"],
        items: [
          { text: "the reaction time when you start and stop a stopwatch", bin: 0 },
          { text: "reading a scale at a slightly different angle each time", bin: 0 },
          { text: "guessing the last figure differently on repeated tries", bin: 0 },
          { text: "a worn zero end on an old metre rule", bin: 1 },
          { text: "a micrometer that does not read zero when closed", bin: 1 },
          { text: "always viewing a scale from the same slanted angle", bin: 1 },
        ],
        ask: "Ask whether the error changes size and direction each time (random) or shifts every reading the same way (systematic). Tap each one and drop it in its bin.",
        hints: [
          "Reaction time and a wobbling viewing angle vary each try, so they scatter readings both ways.",
          "A worn end, a zero error or a fixed slant pushes every reading the same way, so they are systematic.",
        ],
        explain: "Reaction time, a changing viewing angle and guessing the last figure differently are random, because they vary each try. A worn zero end, a micrometer zero error and a fixed slant are systematic, because each shifts every reading the same way.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to the measurement it is best suited for.",
        pairs: [
          { left: "Micrometer screw gauge", right: "diameter of a thin wire" },
          { left: "Vernier calipers", right: "internal diameter of a tube" },
          { left: "Metre rule", right: "length of a laboratory bench" },
          { left: "Electronic balance", right: "mass of a coin" },
          { left: "Digital stopwatch", right: "time for 20 swings of a pendulum" },
        ],
        ask: "Pick the most precise instrument whose range still covers each quantity. A thin wire needs the finest instrument; a whole bench needs the longest.",
        hints: [
          "The micrometer suits the smallest lengths and the metre rule the largest; the vernier calipers reach inside a tube.",
          "Mass goes with the electronic balance and time with the digital stopwatch.",
        ],
        explain: "The micrometer measures a thin wire, the vernier calipers reach inside a tube, and the metre rule spans a bench. The electronic balance gives the mass of a coin and the digital stopwatch times the swings.",
      },
      {
        kind: "slider",
        prompt: "A micrometer has a zero error of +0.03 mm and shows an observed reading of 12.40 mm. Set the slider to the corrected reading, in mm.",
        min: 12.0,
        max: 12.8,
        step: 0.01,
        unit: "mm",
        start: 12.0,
        targetMin: 12.36,
        targetMax: 12.38,
                ask: "Subtract the zero error from the observed reading. Work out 12.40 minus 0.03.",
        hints: [
          "Corrected equals observed minus the zero error, and here the zero error is positive.",
          "12.40 minus 0.03 is 12.37, so slide to 12.37 mm.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "\\text{corrected} = 12.40 - 0.03" },
          { label: "Answer", latex: "\\text{corrected} = 12.37\\ \\text{mm}" },
        ],
        explain: "The corrected reading is 12.37 millimetres, because corrected equals observed minus the zero error, and 12.40 minus 0.03 is 12.37 millimetres. A positive zero error is subtracted.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of reading scales and zero error.",
        segments: [
          "The vernier calipers read to 0.01 ",
          " while the micrometer screw gauge reads to 0.01 ",
          ". A zero error shifts every reading the same way, so it is a ",
          " error, and the corrected reading equals the observed reading ",
          " the zero error.",
        ],
        bank: ["cm", "mm", "systematic", "minus", "random", "plus"],
        answer: ["cm", "mm", "systematic", "minus"],
        ask: "Recall the unit each instrument reads to, whether a zero error is random or systematic, and whether you add or subtract it.",
        hints: [
          "The vernier calipers read in centimetres and the micrometer in millimetres.",
          "A zero error is systematic, and corrected equals observed minus the zero error.",
        ],
        explain: "The vernier calipers read to 0.01 cm and the micrometer to 0.01 mm. A zero error is systematic, and the corrected reading equals the observed reading minus the zero error.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this method for correcting a micrometer reading is wrong. Find it.",
        lines: [
          "Read the observed diameter from the micrometer.",
          "Close the jaws fully and read the zero error.",
          "corrected = observed + zero error",
          "So a positive zero error is subtracted from the observed reading.",
        ],
        errorLine: 2,
        ask: "Check the correction equation against how a positive zero error is handled. Does adding the zero error agree with subtracting it?",
        hints: [
          "The last line says a positive zero error is subtracted, so the equation should also subtract.",
          "The correct rule is corrected equals observed minus zero error, not plus.",
        ],
        explain: "The wrong line is corrected = observed + zero error. The correction is corrected = observed minus zero error, which is why a positive zero error is subtracted from the reading.",
      },
      {
        kind: "open",
        prompt: "Explain what a zero error is and how you correct a measurement for it.",
        modelAnswer: "A zero error is the reading an instrument gives when it should read zero, for example when the jaws of a micrometer are fully closed. Because it shifts every reading by the same amount, it is a systematic error. You correct a measurement by taking corrected equals observed minus the zero error, so a positive zero error is subtracted and a negative one is added back.",
        marks: [
          "A zero error is the non-zero reading when the instrument should read zero (jaws closed).",
          "It is systematic because it shifts every reading the same way.",
          "Corrected = observed minus zero error (subtract a positive, add back a negative).",
        ],
        ask: "Think about what the instrument reads when it should read zero, why that error is the same on every reading, and the equation you use to remove it.",
      },
      {
        kind: "open",
        prompt: "A student uses a stopwatch to time one swing of a pendulum and gets a slightly different answer each time. Explain why this is a random error and give one way to reduce it.",
        modelAnswer: "The differences come from the student's human reaction time, about 0.2 to 0.3 seconds, when starting and stopping the stopwatch. It makes each timing slightly early or late by an amount that varies each try, so it is a random error rather than a fixed shift. It can be reduced by timing a large number of oscillations, such as 20 swings, and dividing by 20, or by repeating the timing and averaging.",
        marks: [
          "The scatter is caused by human reaction time when starting and stopping the stopwatch.",
          "It varies in size and direction each time, so it is random, not systematic.",
          "Reduce it by timing many oscillations and dividing, or by averaging repeats.",
        ],
        ask: "Think about what part of the timing the student cannot control exactly, why it changes from try to try, and how timing more swings helps.",
      },
    ],
  },
];
