import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, section 5. Grounded in KB Chapter 01 (Measurement) section on measuring time.
// Apparatus/scale diagrams, not force diagrams: white for the object measured (the bob),
// grey for the stand, clamp, string guide and dimension leaders, blue for the swing/motion arc and arrow.

export const BOXES: Subconcept[] = [
  {
    id: "t1.5",
    code: "T1.5",
    title: "Measuring time",
    blurb: "The second, the simple pendulum, and finding its period",
    steps: [
      {
        kind: "concept",
        heading: "Measuring time",
        body: "*Time* is a base quantity, and its SI unit is the *second*. We measure short times with a *stopwatch* or clock, but a person's *reaction time* adds a random error to each reading.",
        say: "Time is one of the base quantities, and its SI unit is the second. For short intervals we use a stopwatch or a clock. The catch is that a person cannot start and stop a stopwatch exactly on cue, so reaction time adds a small random error to every reading.",
      },
      {
        kind: "concept",
        heading: "The simple pendulum",
        figure: "fig-01-10-pendulum-setup",
        body: "A *simple pendulum* is a small *bob* hanging from a *string* that is fixed at the top. Pull the bob to one side and let go, and it swings back and forth about its rest position.",
        say: "In the picture a grey retort stand and clamp hold the top of a string. At the bottom of the string hangs a white bob, the small weight that swings. A grey guide runs down beside the string, labelled length of pendulum. A blue arc near the bottom shows how far the bob is pulled to one side, labelled amplitude, the angle of swing.",
      },
      {
        kind: "concept",
        heading: "The period of a pendulum",
        figure: "fig-01-11-pendulum-swing",
        body: "The *period* is the time for one complete *oscillation*, one full swing across and back. To reduce the *random error* from timing, measure 20 oscillations and divide by 20.",
        formula: {
          latex: "T = \\dfrac{t}{20}",
          where: [
            { sym: "T", meaning: "period, the time for one oscillation", unit: "s" },
            { sym: "t", meaning: "time for 20 oscillations", unit: "s" },
          ],
        },
        say: "This picture shows the same white bob swinging from side to side. It travels between 2 points, marked P on one side and Q on the other, and a blue arrow traces its motion. One complete oscillation is the bob going from P across to Q and all the way back to P. To find one period, time 20 full swings and divide that total time by 20.",
      },
      {
        kind: "choice",
        question: "A pendulum makes 20 complete oscillations in 30 s. What is its period?",
        options: ["1.5 s", "600 s", "0.67 s", "15 s"],
        correct: 0,
        ask: "The period is the total time divided by the number of oscillations, so work out 30 divided by 20.",
        hints: [
          "Use period equals total time divided by 20.",
          "30 divided by 20 is 1.5, and the period is a time in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{30}{20}" },
          { label: "Answer", latex: "T = 1.5\\ \\text{s}" },
        ],
        explain: "The period is 1.5 seconds, because 30 seconds divided by 20 oscillations is 1.5 seconds for one swing.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it changes the period of a simple pendulum.",
        bins: ["Changes the period", "Does not change the period"],
        items: [
          { text: "Use a longer string", bin: 0 },
          { text: "Use a shorter string", bin: 0 },
          { text: "Use a heavier bob", bin: 1 },
          { text: "Start with a larger amplitude", bin: 1 },
        ],
        ask: "The period of a pendulum is set by its length alone, so ask whether each change alters the length. Tap each change and drop it in its bin.",
        hints: [
          "A longer or shorter string changes the length, so it changes the period.",
          "A heavier bob or a wider swing leaves the length unchanged, so the period stays the same.",
        ],
        explain: "Changing the string length changes the period, but a heavier bob or a larger amplitude does not, because the period of a simple pendulum depends only on its length.",
      },
      {
        kind: "slider",
        prompt: "A pendulum makes 20 complete oscillations in 34 s. Set the slider to its period, in seconds.",
        min: 0,
        max: 5,
        step: 0.1,
        unit: "s",
        start: 0,
        targetMin: 1.65,
        targetMax: 1.75,
        ask: "The period is the total time divided by 20, so work out 34 divided by 20.",
        hints: [
          "Use period equals total time divided by 20.",
          "34 divided by 20 is 1.7, so slide to 1.7 seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{20}" },
          { label: "Substitute", latex: "T = \\dfrac{34}{20}" },
          { label: "Answer", latex: "T = 1.7\\ \\text{s}" },
        ],
        explain: "The period is 1.7 seconds, because 34 seconds divided by 20 oscillations is 1.7 seconds.",
      },
      {
        kind: "choice",
        question: "Why do we time 20 oscillations and divide by 20, instead of timing a single oscillation?",
        options: [
          "It reduces the effect of reaction time, a random error",
          "It makes the pendulum swing faster",
          "It increases the period of the pendulum",
          "It removes the need for a stopwatch",
        ],
        correct: 0,
        ask: "Think about the error a person adds each time they start and stop a stopwatch, and how spreading it over many swings helps.",
        hints: [
          "Starting or stopping the stopwatch a little late or early is a random reaction-time error.",
          "Sharing that one error over 20 swings makes each period much more accurate.",
        ],
        explain: "Timing 20 oscillations and dividing shares the reaction-time error over many swings, so each period is far more accurate. It does not change how the pendulum actually swings.",
      },
      {
        kind: "insight",
        body: "The *period* of a simple pendulum depends only on its *length*: a longer pendulum has a longer period. It does not depend on the *mass* of the bob or on the *amplitude* of the swing.",
        say: "Here is the idea to keep. The one thing that sets a pendulum's period is its length. Make the string longer and each swing takes more time. Surprisingly, the period does not care about the mass of the bob or how wide the swing is. A heavy bob and a light bob on strings of equal length keep exactly the same time.",
      },
    ],
  },
];
