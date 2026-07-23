import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics (Practical Chapter 2), section 3.
// Grounded in the Practical KB Chapter 02, "errors in measurement". Conceptual: no formula, no working.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.3",
    code: "TP2.3",
    title: "Errors: parallax, zero and reaction",
    blurb: "3 everyday measuring errors, and whether each is random or systematic",
    steps: [
      {
        kind: "concept",
        heading: "Parallax error",
        figure: "fig-pr2-06-parallax",
        body: "A *parallax error* is the apparent shift of a reading when the scale is viewed from the *wrong angle*. Avoid it by keeping your *line of sight perpendicular* to the scale and the scale *in contact* with the object.",
        say: "Parallax error is the apparent shift you get when you read a scale from the wrong angle. In the picture the grey dashed line is the correct line of sight, straight on and at right angles to the scale, and it gives the true mark. The red slanted eye on the side reads the pointer against a different mark, so the value looks shifted. Keep your eye directly in front, looking perpendicular to the scale, and press the scale right up against the object, and the shift disappears.",
      },
      {
        kind: "concept",
        heading: "Is parallax random or systematic?",
        body: "If your viewing angle *varies* from reading to reading, the parallax error is *random*. If you always lean the *same slant* every time, it becomes *systematic*, pushing every reading the same way.",
        say: "Parallax can be either kind, and it depends on your habit. If you tilt your head a little differently each time, sometimes left, sometimes right, the error scatters both ways and it is random. But if you always sit at the same slant, for example always reading from a chair to one side, the shift is the same direction every time, and that makes it systematic.",
      },
      {
        kind: "concept",
        heading: "Zero error",
        figure: "fig-pr2-05-zero-error",
        body: "A *zero error* is a reading the instrument gives when it should read zero. It shifts *every* reading by the same amount, so it is *systematic*. Correct it by *subtracting* the zero error from each reading.",
        say: "A zero error is what an instrument shows when it ought to show zero, for example a worn ruler end or a micrometer that does not read zero when its jaws are closed. In the picture the top ruler A is worn at its end, so its zero mark is set back and every length it gives is too big by the same amount. Because it shifts every reading the same way, a zero error is systematic, not random. You cannot average it away. You remove it by subtracting the zero error from each reading.",
      },
      {
        kind: "concept",
        heading: "Human reaction time",
        body: "*Human reaction time* is about 0.2 to 0.3 seconds. Starting and stopping a stopwatch late or early makes each timing slightly off, in *either* direction, so it is a *random* error. Cut it down by averaging repeats or timing a longer interval.",
        say: "When you time something by hand, there is a delay of about 0.2 to 0.3 seconds between seeing the event and pressing the button. Sometimes you press a touch early, sometimes a touch late, so each timing is off in either direction. Because it scatters both ways, reaction time is a random error. You reduce its effect by repeating the timing and taking an average, or by timing a longer interval, such as 20 swings of a pendulum instead of one, so the delay is a much smaller fraction of the total.",
      },
      {
        kind: "insight",
        body: "*Random* errors scatter *both ways* and shrink when you *average*. Systematic errors push every reading the same way and averaging never removes them.",
        say: "Here is the idea that ties it together. A random error scatters readings above and below the true value, so taking more readings and averaging pulls you closer to the truth. A systematic error shifts every single reading in the same direction by the same amount, so no amount of averaging helps. You have to find its cause, such as a zero error, and correct for it.",
      },
      {
        kind: "classify",
        prompt: "Sort each error into random or systematic.",
        bins: ["Random", "Systematic"],
        items: [
          { text: "human reaction time when timing by hand", bin: 0 },
          { text: "a worn zero end on a ruler", bin: 1 },
          { text: "always reading a scale from the same slant", bin: 1 },
          { text: "tilting your head a little differently each reading", bin: 0 },
          { text: "a micrometer that does not read zero when closed", bin: 1 },
        ],
        ask: "For each one ask whether it scatters readings both ways, which is random, or shifts every reading the same way, which is systematic. Tap each and drop it in its bin.",
        hints: [
          "Reaction time and a head that tilts differently each time both scatter readings above and below, so they are random.",
          "A worn zero end, a fixed slant and a micrometer that does not read zero all shift every reading the same way, so they are systematic.",
        ],
        explain: "Reaction time and a differently tilted head are random, because they push readings either way and average out. A worn zero end, a constant slant and a non-zeroing micrometer are systematic, because each shifts every reading the same way and averaging cannot remove them.",
      },
      {
        kind: "choice",
        question: "What is the correct way to avoid a parallax error when reading a scale?",
        figure: "fig-pr2-06-parallax",
        options: [
          "Read the scale from a slight angle so you can see it better",
          "Hold the scale a few centimetres away from the object",
          "Keep your line of sight perpendicular to the scale, with the scale touching the object",
          "Take one quick reading and never repeat it",
        ],
        correct: 2,
        ask: "Parallax comes from viewing at the wrong angle and from a gap between the scale and the object. Which option removes both of those?",
        hints: [
          "Viewing from an angle is exactly what causes parallax, so that cannot be the fix.",
          "Look straight on, perpendicular to the scale, and press the scale against the object.",
        ],
        explain: "You avoid parallax by keeping your line of sight perpendicular to the scale and keeping the scale in contact with the object. Reading from an angle or leaving a gap is what causes the error in the first place.",
      },
      {
        kind: "choice",
        question: "Why is the error from human reaction time when using a stopwatch a random error, and how is it best reduced?",
        options: [
          "It shifts every timing the same way; correct it by subtracting a fixed amount",
          "Each timing is early or late in either direction; reduce it by averaging repeats or timing a longer interval",
          "It only affects the first reading; reduce it by ignoring that reading",
          "It comes from a worn stopwatch; reduce it by buying a new one",
        ],
        correct: 1,
        ask: "Think about whether your button presses are always late, or sometimes early and sometimes late. That tells you which kind of error it is and how to handle it.",
        hints: [
          "Reaction time makes some timings early and some late, so it scatters both ways, which is the mark of a random error.",
          "Random errors shrink when you average repeats, or when the timed interval is long so the delay is a small fraction of it.",
        ],
        explain: "Reaction time makes each timing slightly early or late in either direction, so it scatters both ways and is random. Averaging repeated timings, or timing a longer interval such as 20 oscillations, reduces its effect.",
      },
      {
        kind: "choice",
        question: "A micrometer reads +0.03 mm when its jaws are fully closed. What kind of error is this, and how do you deal with it?",
        options: [
          "Random; reduce it by repeating and averaging",
          "Random; ignore it because it averages out",
          "Systematic; it varies unpredictably so it cannot be corrected",
          "Systematic; subtract the zero error from every reading",
        ],
        correct: 3,
        ask: "The jaws are closed, so the true reading should be zero. The instrument shifts every reading by the same 0.03 millimetres. Is that scatter, or a fixed shift?",
        hints: [
          "A fixed shift on every reading is systematic, not random, so averaging will not remove it.",
          "The reading with the jaws closed is the zero error; corrected reading equals observed reading minus the zero error.",
        ],
        explain: "A non-zero reading with the jaws closed is a zero error, which shifts every reading the same way, so it is systematic. You correct it by subtracting the zero error from each reading, not by averaging.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this student's summary of errors is wrong. Tap the incorrect line.",
        lines: [
          "A parallax error comes from viewing a scale at the wrong angle.",
          "A zero error is removed by repeating the reading and averaging.",
          "Human reaction time gives a random error of about 0.2 to 0.3 s.",
          "A random error can be reduced by taking the average of many readings.",
        ],
        errorLine: 1,
        ask: "Check each line against whether the error is random or systematic. A zero error shifts every reading the same way, so ask whether averaging could ever remove it.",
        hints: [
          "Averaging only helps errors that scatter both ways, which are random.",
          "A zero error is systematic, so averaging leaves the same shift on every reading; you subtract it instead.",
        ],
        explain: "The wrong line says a zero error is removed by repeating and averaging. A zero error is systematic, so it shifts every reading the same way and averaging never removes it. You correct it by subtracting the zero error. The other 3 lines are correct.",
      },
    ],
  },
];
