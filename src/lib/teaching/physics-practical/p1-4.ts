import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, section 4. Grounded in Practical Chapter 01, sections 1.7 and 1.8.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.4",
    code: "TP1.4",
    title: "Accuracy, precision, and random vs systematic errors",
    blurb: "Closeness to the true value versus closeness of repeats, and the 2 error types behind them",
    steps: [
      {
        kind: "concept",
        heading: "Accuracy and precision",
        figure: "fig-pr1-03-accuracy-precision",
        body: "*Accuracy* is how close a reading is to the *true value*. *Precision* is how close the *repeats* are to one another. They are not the same thing.",
        say: "Look at the 4 targets. The red crosses are the shots, and the green and grey rings are the bullseye that marks the true value. Top left, the crosses sit in a tight bunch right on the bullseye: that set is both accurate and precise. Top right, they are still tightly bunched but off to one side: precise, because they agree with each other, but not accurate, because they miss the true value. A loose scatter spread evenly around the centre is accurate on average but not precise. So accuracy is about hitting the true value, and precision is about the repeats agreeing.",
      },
      {
        kind: "concept",
        heading: "Random errors",
        figure: "fig-pr1-04-random-error",
        body: "*Random errors* scatter readings *both ways* around the true value. They come from reaction time, *estimating* between marks, and inconsistent parallax, and they spoil *precision*.",
        say: "This picture spreads the readings out along a grey true-value line. A random error nudges each reading a little, sometimes above the true value and sometimes below, with no fixed pattern. It comes from things like your reaction time on a stopwatch, judging where a pointer sits between 2 marks, or looking at a scale from a slightly different angle each time. A narrow spread means a small random error, so the readings are precise. A wide spread means a large random error.",
      },
      {
        kind: "insight",
        body: "Because a random error pushes readings *both ways*, *repeating and averaging* pulls the scatter back toward the true value. More repeats means a *smaller* random error.",
        say: "Here is why repeating helps. A random error is just as likely to push a reading up as down, so when you take several readings and average them, the high ones and the low ones tend to cancel. The average lands closer to the true value than most single readings do. That is why you always repeat and average to beat down a random error.",
      },
      {
        kind: "concept",
        heading: "Systematic errors",
        figure: "fig-pr1-05-systematic-error",
        body: "*Systematic errors* shift *every* reading the *same way* by a fixed amount. A zero error, a wrongly calibrated scale, or a rule with a broken end all do this, and they spoil accuracy.",
        say: "Notice how the whole spread of readings has slid to one side of the grey true-value line by a fixed offset. That is a systematic error. It might be a zero error, where the instrument does not read 0 when it should, or a scale that is calibrated wrongly, or a rule worn away at the end. Every reading is off by the same amount in the same direction. Averaging cannot help here, because there are no high readings to cancel the low ones. You fix it by changing the method or the instrument, or by subtracting the known offset from each reading.",
      },
      {
        kind: "choice",
        question: "A student takes 5 readings that all agree closely with each other but all sit well away from the true value. How are the readings best described?",
        options: [
          "Accurate but not precise",
          "Precise but not accurate",
          "Both accurate and precise",
          "Neither accurate nor precise",
        ],
        correct: 1,
        ask: "Split the 2 ideas apart: do the readings agree with each other, and do they land on the true value?",
        hints: [
          "Agreeing closely with each other is precision.",
          "Sitting away from the true value means they are not accurate.",
        ],
        explain: "The readings are precise but not accurate. They agree closely with one another, which is precision, but they all miss the true value, so they are not accurate.",
      },
      {
        kind: "choice",
        question: "A voltmeter reads 0.2 V when nothing is connected, so every measured p.d. is 0.2 V too high. What kind of error is this?",
        options: [
          "A random error, removed by averaging",
          "A parallax error that scatters both ways",
          "A reaction-time error",
          "A systematic error from a zero error",
        ],
        correct: 3,
        ask: "Every reading is shifted by the same fixed amount in the same direction. Does that scatter, or shift?",
        hints: [
          "A fixed offset on every reading is not random scatter.",
          "An instrument that does not read 0 when it should has a zero error.",
        ],
        explain: "It is a systematic error caused by a zero error. The meter adds the same 0.2 volts to every reading, shifting them all the same way, which spoils accuracy and cannot be averaged out.",
      },
      {
        kind: "classify",
        prompt: "Sort each source of error into random or systematic.",
        bins: ["Random error", "Systematic error"],
        items: [
          { text: "reaction time when starting a stopwatch", bin: 0 },
          { text: "estimating a reading between the smallest marks", bin: 0 },
          { text: "looking at the scale from a different angle each time", bin: 0 },
          { text: "a zero error on the instrument", bin: 1 },
          { text: "a scale that is wrongly calibrated", bin: 1 },
          { text: "a rule with a worn, broken end", bin: 1 },
        ],
        ask: "For each one, ask whether it scatters readings both ways, or shifts every reading the same way by a fixed amount.",
        hints: [
          "Scatter that changes each time, sometimes high and sometimes low, is a random error.",
          "A fixed offset on every reading, always the same way, is a systematic error.",
        ],
        explain: "Reaction time, estimating between marks and inconsistent parallax all scatter readings both ways, so they are random errors. A zero error, a wrongly calibrated scale and a broken-end rule shift every reading the same way, so they are systematic errors.",
      },
      {
        kind: "choice",
        question: "Which action best reduces a random error in a set of readings?",
        options: [
          "Repeat the reading several times and take the average",
          "Subtract a fixed offset from every reading",
          "Take one very careful reading only",
          "Swap to a scale that reads slightly high",
        ],
        correct: 0,
        ask: "A random error pushes readings both ways. Which action lets the high and low readings cancel?",
        hints: [
          "Subtracting a fixed offset is the fix for a systematic error, not a random one.",
          "Repeating lets the scatter above and below the true value cancel out on average.",
        ],
        explain: "Repeating and averaging is the best way to reduce a random error, because the readings above and below the true value tend to cancel, leaving the average closer to the true value.",
      },
      {
        kind: "spoterror",
        prompt: "One line about errors is wrong. Tap the mistake.",
        lines: [
          "Accuracy is how close a reading is to the true value.",
          "Precision is how close repeated readings are to one another.",
          "A random error scatters readings both above and below the true value.",
          "Repeating and averaging reduces the effect of a random error.",
          "Averaging also removes a systematic error.",
        ],
        errorLine: 4,
        ask: "Check the last claim. Averaging works by cancelling scatter, so which kind of error can it not touch?",
        hints: [
          "Averaging only helps when readings fall both above and below the true value.",
          "A systematic error shifts every reading the same way, so there is nothing to cancel.",
        ],
        explain: "Averaging does not remove a systematic error. A systematic error offsets every reading in the same direction, so there are no high and low readings to cancel; only a random error is reduced by averaging.",
      },
    ],
  },
];
