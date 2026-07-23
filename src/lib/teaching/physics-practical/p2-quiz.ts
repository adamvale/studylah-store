import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics, topical quiz. Whole-topic check across the
// practical chapter: instruments (range and precision), reading vernier calipers
// and the micrometer, zero error, parallax and reaction errors, small-quantity
// techniques, the simple pendulum and g, and a cylinder down a ramp.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.quiz",
    code: "Quiz",
    title: "Measurements and Kinematics topical quiz",
    blurb: "Whole-topic check: instruments, vernier and micrometer, zero error, errors, small quantities, pendulum and ramp",
    kind: "quiz",
    steps: [
      // -------- CHOICE 1 (correct 2) --------
      {
        kind: "choice",
        question: "You need the diameter of a thin wire to the nearest hundredth of a millimetre. Which instrument should you choose?",
        options: [
          "A metre rule reading to 0.1 cm",
          "Vernier calipers reading to 0.01 cm",
          "A micrometer screw gauge reading to 0.01 mm",
          "A measuring tape reading to 0.1 cm",
        ],
        correct: 2,
        ask: "Pick the most precise instrument whose range still covers a thin wire. Which one has the smallest division?",
        hints: [
          "Precision is the smallest division; a smaller division reads more decimal places.",
          "The micrometer screw gauge reads to 0.01 millimetres, finer than the calipers or the rule.",
        ],
        explain: "The micrometer screw gauge is the right choice, because it reads to 0.01 millimetres, the finest division of the 4, and its range covers a thin wire. You always choose the most precise instrument whose range still fits the quantity.",
      },
      // -------- CHOICE 2 (correct 0) CALC vernier --------
      {
        kind: "choice",
        question: "On vernier calipers the main scale reads 4.2 cm and vernier division 3 lines up with a main-scale mark. What is the reading?",
        options: ["4.23 cm", "4.20 cm", "4.53 cm", "7.2 cm"],
        correct: 0,
        ask: "Add the main scale value to the coinciding vernier division times 0.01 centimetres. What is 4.2 plus 0.03?",
        hints: [
          "The vernier part is the coinciding division times 0.01 centimetres.",
          "Division 3 gives 0.03 centimetres, and 4.2 plus 0.03 is 4.23.",
        ],
        working: [
          { label: "Formula", latex: "R = \\text{main} + (\\text{division} \\times 0.01\\ \\text{cm})" },
          { label: "Substitute", latex: "R = 4.2 + (3 \\times 0.01)" },
          { label: "Answer", latex: "R = 4.23\\ \\text{cm}" },
        ],
        explain: "The reading is 4.23 centimetres, because the main scale gives 4.2 centimetres and division 3 adds 3 times 0.01, which is 0.03 centimetres.",
      },
      // -------- CHOICE 3 (correct 3) CALC micrometer --------
      {
        kind: "choice",
        question: "A micrometer grips a rod. The sleeve reads 7.5 mm and the thimble reads 32. What is the measurement?",
        figure: "fig-pr2-02-micrometer-rod",
        options: ["7.5 mm", "32 mm", "7.32 mm", "7.82 mm"],
        correct: 3,
        ask: "Add the sleeve reading to the thimble reading times 0.01 millimetres. What is 7.5 plus 0.32?",
        hints: [
          "The thimble part is its reading times 0.01 millimetres.",
          "32 gives 0.32 millimetres, and 7.5 plus 0.32 is 7.82.",
        ],
        working: [
          { label: "Formula", latex: "R = \\text{sleeve} + (\\text{thimble} \\times 0.01\\ \\text{mm})" },
          { label: "Substitute", latex: "R = 7.5 + (32 \\times 0.01)" },
          { label: "Answer", latex: "R = 7.82\\ \\text{mm}" },
        ],
        explain: "The measurement is 7.82 millimetres, because the sleeve gives 7.5 millimetres and the thimble adds 32 times 0.01, which is 0.32 millimetres.",
      },
      // -------- CHOICE 4 (correct 1) CALC zero error --------
      {
        kind: "choice",
        question: "A micrometer has a zero error of -0.03 mm. It reads 8.46 mm for a ball bearing. What is the corrected diameter?",
        options: ["8.46 mm", "8.49 mm", "8.43 mm", "8.13 mm"],
        correct: 1,
        ask: "Corrected equals observed minus the zero error. Subtracting a negative zero error adds it back, so work out 8.46 minus negative 0.03.",
        hints: [
          "Use corrected = observed - zero error, and a negative zero error is added back.",
          "8.46 minus negative 0.03 is 8.46 plus 0.03, which is 8.49.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "\\text{corrected} = 8.46 - (-0.03)" },
          { label: "Answer", latex: "\\text{corrected} = 8.49\\ \\text{mm}" },
        ],
        explain: "The corrected diameter is 8.49 millimetres, because 8.46 minus negative 0.03 is 8.46 plus 0.03, which is 8.49 millimetres.",
      },
      // -------- CHOICE 5 (correct 2) CALC zero error positive --------
      {
        kind: "choice",
        question: "A micrometer has a zero error of +0.03 mm. It reads 12.40 mm for a rod. What is the corrected reading?",
        figure: "fig-pr2-05-zero-error",
        options: ["12.43 mm", "12.40 mm", "12.37 mm", "12.03 mm"],
        correct: 2,
        ask: "Corrected equals observed minus the zero error. A positive zero error is subtracted, so work out 12.40 minus 0.03.",
        hints: [
          "Use corrected = observed - zero error.",
          "12.40 minus 0.03 is 12.37.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "\\text{corrected} = 12.40 - 0.03" },
          { label: "Answer", latex: "\\text{corrected} = 12.37\\ \\text{mm}" },
        ],
        explain: "The corrected reading is 12.37 millimetres, because a positive zero error is subtracted, and 12.40 minus 0.03 is 12.37 millimetres.",
      },
      // -------- CHOICE 6 (correct 0) parallax conceptual --------
      {
        kind: "choice",
        question: "How do you avoid a parallax error when reading a scale?",
        figure: "fig-pr2-06-parallax",
        options: [
          "Keep the line of sight perpendicular to the scale, with the scale touching the object",
          "View the scale from a slight angle so more of it is visible",
          "Hold the scale a little away from the object",
          "Read the scale as quickly as possible",
        ],
        correct: 0,
        ask: "Parallax is the apparent shift of a reading when the scale is viewed from the wrong angle. What eye position removes that shift?",
        hints: [
          "The line of sight should meet the scale at a right angle.",
          "Keeping the scale in contact with the object and looking straight on removes the shift.",
        ],
        explain: "You keep the line of sight perpendicular to the scale, with the scale in contact with the object. Looking straight on, at a right angle, removes the apparent shift that causes a parallax error.",
      },
      // -------- CHOICE 7 (correct 3) reaction error conceptual --------
      {
        kind: "choice",
        question: "Human reaction time makes each stopwatch timing slightly early or late. Because this error is random, how is it best reduced?",
        options: [
          "By using a stopwatch with a finer division",
          "By reading the stopwatch from directly above",
          "By subtracting a fixed zero error each time",
          "By timing many oscillations and dividing to get one period",
        ],
        correct: 3,
        ask: "A random error varies each time and averages out. What can you do so one reaction delay is spread over a long interval?",
        hints: [
          "Random errors are reduced by averaging or by timing a longer interval.",
          "Timing 20 oscillations and dividing spreads one reaction delay over the whole set.",
        ],
        explain: "It is best reduced by timing many oscillations and dividing to get one period. Reaction time is a random error, so spreading a single delay over 20 swings, and averaging repeats, makes each period much more accurate.",
      },
      // -------- CHOICE 8 (correct 1) CALC wire diameter --------
      {
        kind: "choice",
        question: "A wire is wound in 50 tight touching turns of total length 45.0 mm. What is the diameter of the wire?",
        figure: "fig-pr2-03-wire-coil",
        options: ["9.0 mm", "0.90 mm", "0.45 mm", "1.1 mm"],
        correct: 1,
        ask: "One diameter is the total length divided by the number of turns. What is 45.0 divided by 50?",
        hints: [
          "Use diameter = total length / number of turns.",
          "45.0 divided by 50 is 0.90.",
        ],
        working: [
          { label: "Formula", latex: "d = \\dfrac{\\text{total length}}{n}" },
          { label: "Substitute", latex: "d = \\dfrac{45.0}{50}" },
          { label: "Answer", latex: "d = 0.90\\ \\text{mm}" },
        ],
        explain: "The diameter is 0.90 millimetres, because 45.0 millimetres divided by 50 turns is 0.90 millimetres. Coiling many turns makes the error 50 times smaller than a single reading.",
      },
      // -------- CHOICE 9 (correct 0) pendulum conceptual --------
      {
        kind: "choice",
        question: "For a simple pendulum swinging through a small angle, which change does NOT affect the period?",
        figure: "fig-pr2-07-pendulum-apparatus",
        options: [
          "Increasing the mass of the bob",
          "Increasing the length of the string",
          "Moving to a place with a different gravitational field strength",
          "Every one of these changes the period",
        ],
        correct: 0,
        ask: "The period depends on the length and on g, but think about whether a heavier bob swings any slower.",
        hints: [
          "The period rises with length and depends on g.",
          "For small angles the period does not depend on the mass of the bob.",
        ],
        explain: "Increasing the mass of the bob does not affect the period. For a small angle the period depends only on the length and on the gravitational field strength, not on the mass or the amplitude.",
      },
      // -------- CHOICE 10 (correct 2) CALC pendulum g --------
      {
        kind: "choice",
        question: "A graph of T^2 against l for a pendulum is a straight line through the origin with a gradient of 4.02 s^2/m. Find g. (4 pi^2 = 39.48)",
        figure: "fig-pr2-09-period2-length-graph",
        options: ["4.02 m/s^2", "39.48 m/s^2", "9.8 m/s^2", "0.10 m/s^2"],
        correct: 2,
        ask: "The gradient equals 4 pi squared divided by g, so g equals 4 pi squared divided by the gradient. What is 39.48 divided by 4.02?",
        hints: [
          "Rearrange to g = 4 pi^2 / gradient.",
          "39.48 divided by 4.02 is about 9.8.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{4\\pi^2}{\\text{gradient}}" },
          { label: "Substitute", latex: "g = \\dfrac{39.48}{4.02}" },
          { label: "Answer", latex: "g = 9.8\\ \\text{m/s}^2" },
        ],
        explain: "The value of g is 9.8 metres per second squared, because 39.48 divided by the gradient 4.02 is about 9.8 metres per second squared.",
      },
      // ============ INTERACTIVE (10) ============
      // -------- INTERACTIVE 1: classify (random vs systematic) --------
      {
        kind: "classify",
        prompt: "Sort each cause of error into random or systematic.",
        bins: ["Random error", "Systematic error"],
        items: [
          { text: "human reaction time when starting a stopwatch", bin: 0 },
          { text: "misjudging the last digit differently each time", bin: 0 },
          { text: "small varying delays in stopping a timer", bin: 0 },
          { text: "a worn zero end on a metre rule", bin: 1 },
          { text: "a micrometer that reads 0.03 mm with its jaws closed", bin: 1 },
          { text: "always viewing the scale from the same slant", bin: 1 },
        ],
        ask: "A random error changes size and direction each time and averages out; a systematic error shifts every reading the same way. Tap each cause and drop it in its bin.",
        hints: [
          "Reaction time and last-digit guesses vary each time, so they are random.",
          "A worn end, a zero error, and a fixed slant shift every reading the same way, so they are systematic.",
        ],
        explain: "Reaction time, varying last-digit guesses, and varying stop delays are random, because they change each time and average out. A worn zero end, a micrometer zero error, and a fixed slant are systematic, because they shift every reading the same way.",
      },
      // -------- INTERACTIVE 2: match (instrument to precision) --------
      {
        kind: "match",
        prompt: "Match each instrument to its precision, the smallest division it can read.",
        pairs: [
          { left: "Micrometer screw gauge", right: "reads to 0.01 mm" },
          { left: "Vernier calipers", right: "reads to 0.01 cm" },
          { left: "Metre rule", right: "reads to 0.1 cm" },
          { left: "Electronic balance", right: "reads to 0.01 g" },
        ],
        ask: "Match each instrument to its smallest division. 2 are for length in different units, one is coarser, and one is for mass.",
        hints: [
          "The micrometer is the finest length instrument, then the vernier calipers, then the metre rule.",
          "The electronic balance is the mass instrument, reading to 0.01 grams.",
        ],
        explain: "The micrometer screw gauge reads to 0.01 millimetres, the vernier calipers to 0.01 centimetres, the metre rule to 0.1 centimetres, and the electronic balance to 0.01 grams.",
      },
      // -------- INTERACTIVE 3: order (steps to find g from pendulum) --------
      {
        kind: "order",
        prompt: "Put the steps for finding g with a simple pendulum in the correct order.",
        items: [
          "Measure the length l from the support to the centre of the bob",
          "Time 20 oscillations and divide by 20 to get the period T",
          "Repeat for several lengths and plot T^2 against l",
          "Find the gradient of the straight line through the origin",
          "Calculate g as 4 pi^2 divided by the gradient",
        ],
        ask: "Start with measuring a length and finish with the calculation of g. Which measurement comes first, and what must you plot before finding the gradient?",
        hints: [
          "You need the length and the period before you can plot anything.",
          "Plot T^2 against l, find the gradient, then divide 4 pi^2 by it to get g.",
        ],
        explain: "First measure the length to the centre of the bob, then time 20 oscillations for the period, repeat for several lengths and plot T^2 against l, find the gradient of the line through the origin, and finally calculate g as 4 pi squared divided by that gradient.",
      },
      // -------- INTERACTIVE 4: graphpick (T^2 vs l) --------
      {
        kind: "graphpick",
        prompt: "Which graph of T^2 against l is expected for a simple pendulum?",
        xLabel: "l / m",
        yLabel: "T^2 / s^2",
        options: [
          { points: [[0, 0], [0.2, 0.8], [0.4, 1.6], [0.6, 2.4], [0.8, 3.2]], caption: "Straight line through the origin" },
          { points: [[0, 1.0], [0.2, 1.4], [0.4, 1.8], [0.6, 2.2], [0.8, 2.6]], caption: "Straight line with a positive intercept" },
          { points: [[0, 0], [0.2, 1.4], [0.4, 2.0], [0.6, 2.4], [0.8, 2.6]], caption: "Curve that bends over" },
          { points: [[0, 2.0], [0.2, 2.0], [0.4, 2.0], [0.6, 2.0], [0.8, 2.0]], caption: "Horizontal line" },
        ],
        correct: 0,
        ask: "The theory gives T^2 equal to 4 pi squared over g times l. That is a straight line, and there is no constant added on. Which graph fits?",
        hints: [
          "T^2 is proportional to l, so doubling l doubles T^2.",
          "A direct proportion is a straight line passing through the origin.",
        ],
        explain: "The correct graph is the straight line through the origin, because T^2 equals 4 pi squared over g times l. T^2 is proportional to l, so the line is straight and passes through the origin with no intercept.",
      },
      // -------- INTERACTIVE 5: slider (g from gradient 4.05) CALC --------
      {
        kind: "slider",
        prompt: "A pendulum's T^2 against l graph has a gradient of 4.05 s^2/m. Set the slider to g, in m/s^2. (4 pi^2 = 39.48)",
        min: 0,
        max: 12,
        step: 0.1,
        unit: "m/s^2",
        start: 0,
        targetMin: 9.6,
        targetMax: 9.8,
        ask: "Divide 4 pi squared by the gradient, so work out 39.48 divided by 4.05.",
        hints: [
          "Use g = 4 pi^2 / gradient.",
          "39.48 divided by 4.05 is about 9.7, so slide to 9.7.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{4\\pi^2}{\\text{gradient}}" },
          { label: "Substitute", latex: "g = \\dfrac{39.48}{4.05}" },
          { label: "Answer", latex: "g = 9.7\\ \\text{m/s}^2" },
        ],
        explain: "The value of g is about 9.7 metres per second squared, because 39.48 divided by the gradient 4.05 is about 9.7 metres per second squared.",
      },
      // -------- INTERACTIVE 6: tiles (sin theta ramp) CALC --------
      {
        kind: "tiles",
        prompt: "A ramp has height h = 0.139 m over a slope distance s = 0.800 m. Build the working line for sin theta = h / s.",
        tiles: ["\\sin\\theta =", "0.139", "\\div", "0.800", "=", "0.174", "\\times", "0.278"],
        answer: ["\\sin\\theta =", "0.139", "\\div", "0.800", "=", "0.174"],
        ask: "The sine of the angle is the height divided by the slope distance, so set up 0.139 divided by 0.800.",
        hints: [
          "Use sin theta = h / s.",
          "0.139 divided by 0.800 is 0.174.",
        ],
        working: [
          { label: "Formula", latex: "\\sin\\theta = \\dfrac{h}{s}" },
          { label: "Substitute", latex: "\\sin\\theta = \\dfrac{0.139}{0.800}" },
          { label: "Answer", latex: "\\sin\\theta = 0.174" },
        ],
        explain: "The sine of the angle is 0.174, because 0.139 metres divided by 0.800 metres is 0.174. It has no unit because it is a ratio of 2 lengths.",
      },
      // -------- INTERACTIVE 7: cloze (vernier + zero error) --------
      {
        kind: "cloze",
        prompt: "Complete the sentences about reading calipers and correcting a zero error.",
        segments: [
          "To read vernier calipers, add the main scale value to the coinciding vernier ",
          " times 0.01 cm. A zero error is the reading with the jaws fully ",
          ". The corrected reading is the observed reading ",
          " the zero error.",
        ],
        bank: ["division", "closed", "minus", "plus", "open"],
        answer: ["division", "closed", "minus"],
        ask: "Recall how the vernier part is read, when a zero error is taken, and whether you add or subtract it.",
        hints: [
          "The vernier part is the coinciding division times 0.01 centimetres, and a zero error is read with the jaws shut.",
          "Corrected = observed - zero error, so the last blank is minus.",
        ],
        explain: "You add the coinciding vernier division times 0.01 centimetres. A zero error is the reading with the jaws fully closed, and the corrected reading is the observed reading minus the zero error.",
      },
      // -------- INTERACTIVE 8: spoterror (corrected = observed + zero error) --------
      {
        kind: "spoterror",
        prompt: "Here are a student's notes about zero error. Tap the line that is wrong.",
        lines: [
          "A zero error shifts every reading by the same amount",
          "It is a systematic error",
          "corrected = observed + zero error",
          "A positive zero error is subtracted from the reading",
        ],
        errorLine: 2,
        ask: "Check the rule that connects the corrected and observed readings. Do you add the zero error or subtract it?",
        hints: [
          "A zero error is systematic and shifts every reading the same way.",
          "The rule is corrected = observed - zero error, so the line with a plus is wrong.",
        ],
        explain: "The wrong line writes corrected = observed + zero error. The correct rule subtracts the zero error, corrected = observed - zero error, which is why a positive zero error is taken off the reading.",
      },
      // -------- INTERACTIVE 9: slider (period T = mean t / 20) CALC --------
      {
        kind: "slider",
        prompt: "A pendulum takes 40.12 s for 20 oscillations. Set the slider to the period T, in seconds.",
        min: 0,
        max: 5,
        step: 0.001,
        unit: "s",
        start: 0,
        targetMin: 2.004,
        targetMax: 2.008,
        ask: "The period is the total time divided by the number of oscillations, so work out 40.12 divided by 20.",
        hints: [
          "Use T = mean t / 20.",
          "40.12 divided by 20 is 2.006, so slide to 2.006.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{\\text{mean } t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{40.12}{20}" },
          { label: "Answer", latex: "T = 2.006\\ \\text{s}" },
        ],
        explain: "The period is 2.006 seconds, because 40.12 seconds divided by 20 oscillations is 2.006 seconds. Timing 20 swings makes reaction time much less important.",
      },
      // -------- INTERACTIVE 10: tiles (ramp v = 2x / t) CALC --------
      {
        kind: "tiles",
        prompt: "A cylinder starts from rest and covers x = 0.900 m on a ramp in t_ave = 1.036 s. Build the working line for the final speed v = 2x / t.",
        tiles: ["v =", "2 \\times 0.900", "\\div", "1.036", "=", "1.74", "m/s", "s"],
        answer: ["v =", "2 \\times 0.900", "\\div", "1.036", "=", "1.74", "m/s"],
        ask: "From rest the final speed is twice the average speed, so it is 2 times the distance divided by the time. Set up 2 times 0.900 divided by 1.036.",
        hints: [
          "Use v = 2x / t, because the final speed is twice the average speed from rest.",
          "2 times 0.900 is 1.800, and 1.800 divided by 1.036 is about 1.74.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{2x}{t}" },
          { label: "Substitute", latex: "v = \\dfrac{2 \\times 0.900}{1.036}" },
          { label: "Answer", latex: "v = 1.74\\ \\text{m/s}" },
        ],
        explain: "The final speed is 1.74 metres per second, because 2 times 0.900 metres is 1.800 metres, and 1.800 divided by 1.036 seconds is about 1.74 metres per second.",
      },
      // ============ OPEN (5) ============
      {
        kind: "open",
        prompt: "Describe how you would find the diameter of a thin wire accurately, and explain why the method is better than a single reading.",
        figure: "fig-pr2-03-wire-coil",
        modelAnswer: "Wind the wire in a number of tight, touching turns around a pencil, with no gaps or overlaps. Measure the total length of the coil with a rule, then divide that length by the number of turns to get one diameter. This is better than a single reading because spreading the measurement over many turns makes the fractional error many times smaller than measuring one thin wire once.",
        marks: [
          "Wind the wire in n tight touching turns and measure the total length.",
          "Divide the total length by the number of turns to get one diameter.",
          "Spreading over many turns reduces the fractional error compared with one reading.",
        ],
        ask: "Describe how you set up the coil, what you measure, how you get one diameter, and why many turns help.",
      },
      {
        kind: "open",
        prompt: "Explain the difference between a random error and a systematic error. Give one example of each and state how each can be reduced.",
        modelAnswer: "A random error changes size and direction each time a reading is taken, such as the delay from reaction time when using a stopwatch; it is reduced by averaging repeated readings or by timing a longer interval. A systematic error shifts every reading the same way, such as a zero error on a micrometer or a worn end on a rule; it is reduced by finding and correcting it, for example subtracting the zero error, not by averaging.",
        marks: [
          "Random error varies each time; example such as reaction time; reduced by averaging or timing longer.",
          "Systematic error shifts every reading the same way; example such as a zero error.",
          "A systematic error is corrected, not removed by averaging.",
        ],
        ask: "For each type say how the error behaves across readings, give an example, and state the way to reduce it.",
      },
      {
        kind: "open",
        prompt: "Describe an experiment to find the gravitational field strength g using a simple pendulum.",
        figure: "fig-pr2-07-pendulum-apparatus",
        modelAnswer: "Clamp a bob on a light string in a split cork on a stand and measure the length l from the support to the centre of the bob with the rule vertical. Release the bob through a small angle and time 20 oscillations, then divide by 20 to find the period T. Repeat for several lengths, then plot a graph of T^2 against l, which is a straight line through the origin. Find the gradient, which equals 4 pi squared divided by g, and calculate g as 4 pi squared divided by the gradient.",
        marks: [
          "Measure length to the centre of the bob and time 20 oscillations for the period T.",
          "Repeat for several lengths and plot T^2 against l.",
          "Gradient equals 4 pi^2 / g, so g = 4 pi^2 / gradient.",
        ],
        ask: "Say what you measure, how you get the period accurately, what you plot, and how the gradient gives g.",
      },
      {
        kind: "open",
        prompt: "In the ramp experiment you must measure the vertical height h of the ramp accurately. State one precaution and explain why it improves the result.",
        figure: "fig-pr2-11-ramp",
        modelAnswer: "Measure the height with the rule held vertical and read the scale with the line of sight perpendicular to it, keeping the rule in contact with the surfaces. This avoids a parallax error and stops the height being measured along a slant, so the value of sin theta, and therefore g, is more accurate.",
        marks: [
          "A sensible precaution, such as holding the rule vertical and reading perpendicular to the scale.",
          "It avoids parallax or a slanted measurement.",
          "This makes h, and so sin theta and g, more accurate.",
        ],
        ask: "Name one precaution for reading the height, then link it to the error it removes and to the final value of g.",
      },
      {
        kind: "open",
        prompt: "Explain why timing 20 oscillations and dividing by 20 gives a more accurate period than timing a single oscillation.",
        modelAnswer: "A single oscillation is short, so the reaction time when starting and stopping the stopwatch is a large fraction of the measured time and causes a big percentage error. Timing 20 oscillations makes the total time much longer, so the same reaction delay is a much smaller fraction of it. Dividing by 20 then gives a period with a far smaller percentage error, because the random reaction error has been spread over many swings.",
        marks: [
          "Reaction time is a large fraction of one short oscillation.",
          "Timing 20 oscillations makes the total time much longer, so the delay is a smaller fraction.",
          "Dividing by 20 gives a period with a much smaller percentage error.",
        ],
        ask: "Compare the size of the reaction delay against one swing and against 20 swings, and link this to the percentage error.",
      },
    ],
  },
];
