import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, Revision 2. Checkpoint over KB Chapter 11,
// sections t10.4 to t10.6: period and frequency, wavelength and wave speed,
// and reading wave graphs. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t10.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: period, frequency, wavelength, wave speed and reading graphs",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A wave has a period of 0.25 s. What is its frequency?",
        options: ["0.25 Hz", "4 Hz", "40 Hz", "0.04 Hz"],
        correct: 1,
        ask: "Frequency is 1 divided by the period, so work out 1 ÷ 0.25. Which option is that?",
        hints: [
          "Use f equals 1 divided by T.",
          "1 ÷ 0.25 is 4, and frequency is measured in hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{1}{T}" },
          { label: "Substitute", latex: "f = \\dfrac{1}{0.25}" },
          { label: "Answer", latex: "f = 4\\ \\text{Hz}" },
        ],
        explain: "The frequency is 4 hertz, because 1 ÷ 0.25 seconds is 4. So 4 complete oscillations happen every second.",
      },
      {
        kind: "choice",
        question: "A vibrating source has a frequency of 25 Hz. What is the period of the wave?",
        options: ["25 s", "2.5 s", "0.25 s", "0.04 s"],
        correct: 3,
        ask: "The period is 1 divided by the frequency, so work out 1 ÷ 25. Which option matches?",
        hints: [
          "Use T equals 1 divided by f.",
          "1 ÷ 25 is 0.04, and the period is measured in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{1}{f}" },
          { label: "Substitute", latex: "T = \\dfrac{1}{25}" },
          { label: "Answer", latex: "T = 0.04\\ \\text{s}" },
        ],
        explain: "The period is 0.04 seconds, because 1 ÷ 25 hertz is 0.04 seconds. That is the time for a single oscillation.",
      },
      {
        kind: "choice",
        question: "A wave passes from one medium into another where it travels more slowly. Which quantity is fixed by the source and stays the same?",
        options: ["The frequency", "The wavelength", "The wave speed", "The amplitude"],
        correct: 0,
        ask: "Think about which property is set by the vibrating source rather than by the medium the wave moves through.",
        hints: [
          "The source decides how many oscillations happen each second, and that number does not change at a boundary.",
          "The speed is set by the medium, and because the frequency stays fixed the wavelength changes to match the new speed.",
        ],
        explain: "The frequency stays the same, because it is fixed by the source. The speed is set by the new medium, so the wavelength changes to fit, but the frequency does not.",
      },
      {
        kind: "choice",
        question: "A wave crest travels 18 m in 12 s. What is the wave speed?",
        options: ["216 m/s", "0.67 m/s", "1.5 m/s", "6 m/s"],
        correct: 2,
        ask: "Speed is distance divided by time, so work out 18 ÷ 12. Which option is that?",
        hints: [
          "Use v equals d divided by t.",
          "18 ÷ 12 is 1.5, and speed is measured in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{d}{t}" },
          { label: "Substitute", latex: "v = \\dfrac{18}{12}" },
          { label: "Answer", latex: "v = 1.5\\ \\text{m/s}" },
        ],
        explain: "The wave speed is 1.5 metres per second, because 18 metres divided by 12 seconds is 1.5 metres per second.",
      },
      {
        kind: "choice",
        question: "2 wave graphs can look identical. What must you check to decide which one shows the wavelength?",
        figure: "fig-11-14-interpret-graphs",
        options: ["The height of the crests", "The colour of the curve", "The number of crests drawn", "The label on the horizontal axis"],
        correct: 3,
        ask: "The 2 curves have the same shape. Look at what each horizontal axis is measuring to tell them apart.",
        hints: [
          "A wavelength is a distance, so it can only be read from a graph whose horizontal axis is distance.",
          "If the horizontal axis is time, the graph gives the period instead, not the wavelength.",
        ],
        explain: "You must check the label on the horizontal axis. Wavelength is read from a displacement-distance graph, where the horizontal axis is distance. If that axis is time, the graph gives the period instead.",
      },
      {
        kind: "tiles",
        prompt: "A wave has frequency 8 Hz and wavelength 0.15 m. Build the working line that gives its speed.",
        tiles: ["v =", "8", "\\times", "0.15", "\\div", "=", "1.2", "m/s", "Hz"],
        answer: ["v =", "8", "\\times", "0.15", "=", "1.2", "m/s"],
        ask: "Wave speed is frequency times wavelength, so set up 8 × 0.15.",
        hints: [
          "Use v equals f times lambda.",
          "8 × 0.15 is 1.2, and speed is measured in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 8 \\times 0.15" },
          { label: "Answer", latex: "v = 1.2\\ \\text{m/s}" },
        ],
        explain: "The wave speed is 1.2 metres per second, because 8 hertz times 0.15 metres is 1.2 metres per second.",
      },
      {
        kind: "spoterror",
        prompt: "This solution finds the speed of a wave with period 0.5 s and wavelength 3 m. Find the line with the mistake.",
        lines: ["T = 0.5 s", "f = 1 / 0.5 = 2 Hz", "v = f / lambda = 2 / 3 = 0.7 m/s"],
        errorLine: 2,
        ask: "Check the step that combines frequency and wavelength. Should you multiply them or divide them to get a speed?",
        hints: [
          "Wave speed is v equals f times lambda, a multiplication.",
          "The last line divides 2 by 3, but it should multiply 2 by 3 to give 6 metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 2 \\times 3" },
          { label: "Answer", latex: "v = 6\\ \\text{m/s}" },
        ],
        explain: "The mistake is on the last line, line 2, which divides the frequency by the wavelength. Wave speed is frequency times wavelength, so v equals 2 × 3, which is 6 metres per second.",
      },
      {
        kind: "slider",
        prompt: "A wave travels at 1.5 m/s and has a wavelength of 3.0 m. Set the slider to its frequency, in Hz.",
        min: 0,
        max: 2,
        step: 0.1,
        unit: "Hz",
        start: 0,
        targetMin: 0.45,
        targetMax: 0.55,
        ask: "Rearrange v equals f times lambda to get frequency, so work out 1.5 ÷ 3.0.",
        hints: [
          "From v equals f lambda, the frequency is v divided by lambda.",
          "1.5 ÷ 3.0 is 0.5, so slide to 0.5 hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{v}{\\lambda}" },
          { label: "Substitute", latex: "f = \\dfrac{1.5}{3.0}" },
          { label: "Answer", latex: "f = 0.5\\ \\text{Hz}" },
        ],
        explain: "The frequency is 0.5 hertz, because 1.5 metres per second divided by 3.0 metres is 0.5 hertz. So half an oscillation passes each second.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of period and frequency.",
        segments: [
          "The period T is the time for one complete ",
          ", and it is measured in ",
          ". The frequency f counts the oscillations in each ",
          ", measured in ",
          ". The 2 are linked by f = 1/T.",
        ],
        bank: ["oscillation", "seconds", "second", "hertz", "metres", "amplitude"],
        answer: ["oscillation", "seconds", "second", "hertz"],
        ask: "Recall what one period measures and its unit, then what frequency counts and its unit.",
        hints: [
          "The period is the time for one oscillation and is measured in seconds.",
          "The unit of frequency is the hertz, which means oscillations per second.",
        ],
        explain: "The period is the time for one complete oscillation, measured in seconds. The frequency counts the oscillations in each second, measured in hertz. They are linked by f equals 1 divided by T.",
      },
      {
        kind: "graphpick",
        prompt: "The horizontal axis of each graph is time in seconds. Pick the graph of a wave whose period is 0.5 s, that is 2 complete cycles in 1 second.",
        xLabel: "time / s",
        yLabel: "displacement / m",
        options: [
          {
            points: [[0, 0], [0.25, 1], [0.5, 0], [0.75, -1], [1, 0]],
            caption: "1 cycle each second",
          },
          {
            points: [[0, 0], [0.125, 1], [0.25, 0], [0.375, -1], [0.5, 0], [0.625, 1], [0.75, 0], [0.875, -1], [1, 0]],
            caption: "2 cycles each second",
          },
          {
            points: [[0, 0], [0.0625, 1], [0.125, 0], [0.1875, -1], [0.25, 0], [0.3125, 1], [0.375, 0], [0.4375, -1], [0.5, 0], [0.5625, 1], [0.625, 0], [0.6875, -1], [0.75, 0], [0.8125, 1], [0.875, 0], [0.9375, -1], [1, 0]],
            caption: "4 cycles each second",
          },
        ],
        correct: 1,
        ask: "The period is the time for one full cycle. Count how many complete cycles fit into 1 second on each graph.",
        hints: [
          "A period of 0.5 seconds means 2 complete cycles fit into every 1 second.",
          "Pick the graph that shows exactly 2 full waves across the 1 second shown.",
        ],
        explain: "The correct graph shows 2 complete cycles in 1 second, so each cycle takes 0.5 seconds. That matches a period of 0.5 seconds.",
      },
      {
        kind: "open",
        prompt: "The figure shows a displacement-distance graph of a wave, frozen at one instant. State the 2 quantities you can read from it, and explain how it differs from a displacement-time graph.",
        figure: "fig-11-13-displacement-distance",
        modelAnswer: "A displacement-distance graph is a snapshot of the whole wave at one instant. From it you can read the amplitude, the maximum displacement from the rest line, and the wavelength, the distance between 2 successive points in phase such as crest to crest. A displacement-time graph instead follows one particle over time, so from it you read the amplitude and the period, and then the frequency from f = 1/T. The 2 curves can look the same, so you tell them apart by the label on the horizontal axis, distance for one and time for the other.",
        marks: [
          "Distance graph gives amplitude and wavelength.",
          "Time graph gives amplitude and period (then f = 1/T).",
          "Tell them apart by the horizontal axis label (distance vs time).",
        ],
        ask: "Think about what the horizontal axis measures on this graph, and what a graph with time on that axis would give you instead.",
      },
      {
        kind: "open",
        prompt: "A water wave passes from deep water into shallow water, where it travels more slowly. Explain what happens to its frequency, its speed and its wavelength, using v = f lambda.",
        modelAnswer: "The frequency is fixed by the source, so it stays the same as the wave crosses into the shallow water. The wave speed is set by the medium, and in the shallow water it is smaller. Since v = f lambda and the frequency f is unchanged, a smaller speed v means the wavelength lambda must also become smaller. So the frequency stays the same, the speed drops and the wavelength shortens.",
        marks: [
          "Frequency is fixed by the source, so it stays the same.",
          "Speed is set by the medium and decreases in shallow water.",
          "From v = f lambda with f constant, a smaller v gives a smaller wavelength.",
        ],
        ask: "Decide which property the source fixes and which the medium fixes, then use v = f lambda to see what the third one must do.",
      },
    ],
  },
];
