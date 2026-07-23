import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, section 4. Grounded in KB Chapter 11 (11.7, 11.8): period and frequency.
// Figure colours follow the carry-over key: wave curve/waveform = blue; direction-of-travel arrow = yellow;
// vibration-direction arrow = green; rest line and dimension markers = grey; axes light; particles/source = white.

export const BOXES: Subconcept[] = [
  {
    id: "t10.4",
    code: "T10.4",
    title: "Period and frequency",
    blurb: "The time for one oscillation, the number per second, and how they link",
    steps: [
      {
        kind: "concept",
        heading: "The period of a wave",
        figure: "fig-11-11-displacement-time",
        body: "The *period* T is the *time for one complete oscillation*, measured in *seconds*. You read it from a *displacement-time* graph as the time for one full cycle.",
        say: "The picture is a displacement-time graph. The vertical axis is displacement in metres, the horizontal axis is time in seconds, and a blue curve rises and falls. This graph follows just one particle as time passes. One full up-and-down cycle of that blue curve is marked with a grey label, period T. So the period is simply the time taken for one complete oscillation, measured in seconds.",
      },
      {
        kind: "concept",
        heading: "The frequency of a wave",
        figure: "fig-11-12-frequency",
        body: "The *frequency* f is the number of complete oscillations *per second*, measured in *hertz*. Frequency is *fixed by the source* and does not change when the wave enters a new medium.",
        say: "This figure stacks 2 panels over the same 1 second. The top panel shows a blue wave making 2 waves in that second, a lower frequency. The bottom panel shows a blue wave making 5 waves in the same second, a higher frequency. Frequency counts how many complete oscillations happen each second, and its unit is the hertz. It is set by whatever is making the wave, the source, so it stays the same even when the wave passes into a new material.",
      },
      {
        kind: "concept",
        heading: "Linking period and frequency",
        body: "The *period* and the *frequency* are *reciprocals* of each other: a shorter period means a higher frequency. This gives one short *formula*.",
        formula: {
          latex: "f = \\dfrac{1}{T}",
          where: [
            { sym: "f", meaning: "frequency", unit: "Hz" },
            { sym: "T", meaning: "period", unit: "s" },
          ],
        },
        say: "Period and frequency are 2 sides of the same coin. If 1 oscillation takes a time T, then the number of oscillations in a second is 1 divided by T. So frequency equals 1 over the period. Turn it around and the period equals 1 over the frequency. A short period means many waves per second, a high frequency.",
      },
      {
        kind: "choice",
        question: "A pendulum takes 0.25 s for one complete swing. What is its frequency?",
        options: ["0.25 Hz", "2 Hz", "4 Hz", "40 Hz"],
        correct: 2,
        ask: "Frequency is 1 divided by the period, so work out 1 divided by 0.25.",
        hints: [
          "Use f equals 1 over T with T of 0.25 seconds.",
          "1 divided by 0.25 is 4, so the frequency is 4 hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{1}{T}" },
          { label: "Substitute", latex: "f = \\dfrac{1}{0.25}" },
          { label: "Answer", latex: "f = 4\\ \\text{Hz}" },
        ],
        explain: "The frequency is 4 hertz, because 1 divided by 0.25 seconds is 4 oscillations per second.",
      },
      {
        kind: "choice",
        question: "A sound source vibrates at a frequency of 25 Hz. What is its period?",
        options: ["2.5 s", "0.04 s", "0.4 s", "0.025 s"],
        correct: 1,
        ask: "The period is 1 divided by the frequency, so work out 1 divided by 25.",
        hints: [
          "Rearrange f equals 1 over T to get T equals 1 over f.",
          "1 divided by 25 is 0.04, so the period is 0.04 seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{1}{f}" },
          { label: "Substitute", latex: "T = \\dfrac{1}{25}" },
          { label: "Answer", latex: "T = 0.04\\ \\text{s}" },
        ],
        explain: "The period is 0.04 seconds, because 1 divided by 25 hertz is 0.04 seconds for one oscillation.",
      },
      {
        kind: "choice",
        question: "A wave passes from air into water. What happens to its frequency?",
        options: [
          "It doubles as the wave speeds up",
          "It halves as the wave slows down",
          "It drops to zero at the boundary",
          "It stays the same because it is fixed by the source",
        ],
        correct: 3,
        ask: "Think about what sets the frequency. It is decided by the source making the wave, not by the material the wave travels through.",
        hints: [
          "Frequency is fixed by the source, not by the medium.",
          "Crossing into a new medium does not change how many waves the source sends each second.",
        ],
        explain: "The frequency stays the same, because frequency is fixed by the source. Only quantities set by the medium can change at the boundary.",
      },
      {
        kind: "choice",
        question: "A wave has a frequency of 4 Hz. How many complete waves are produced in 60 s?",
        options: ["240", "64", "15", "4"],
        correct: 0,
        ask: "Frequency is waves per second, so multiply the frequency by the time. Work out 4 times 60.",
        hints: [
          "Number of waves is frequency times time.",
          "4 times 60 is 240, so 240 complete waves are made.",
        ],
        working: [
          { label: "Formula", latex: "N = f \\times t" },
          { label: "Substitute", latex: "N = 4 \\times 60" },
          { label: "Answer", latex: "N = 240\\ \\text{waves}" },
        ],
        explain: "There are 240 complete waves, because 4 waves per second for 60 seconds gives 4 times 60, which is 240.",
      },
      {
        kind: "slider",
        prompt: "A vibrating string completes 3 full cycles in 1.2 s. Set the slider to its frequency, in hertz.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "Hz",
        start: 0,
        targetMin: 2.4,
        targetMax: 2.6,
        ask: "First find the period: divide the total time by the number of cycles. Then take 1 over that period.",
        hints: [
          "The period is 1.2 divided by 3, which is 0.4 seconds.",
          "1 divided by 0.4 is 2.5, so slide to 2.5 hertz.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{t}{N},\\quad f = \\dfrac{1}{T}" },
          { label: "Substitute", latex: "T = \\dfrac{1.2}{3} = 0.4\\ \\text{s},\\quad f = \\dfrac{1}{0.4}" },
          { label: "Answer", latex: "f = 2.5\\ \\text{Hz}" },
        ],
        explain: "The frequency is 2.5 hertz, because 3 cycles in 1.2 seconds is a period of 0.4 seconds, and 1 divided by 0.4 is 2.5.",
      },
      {
        kind: "insight",
        body: "*Period* and *frequency* describe the same timing from opposite ends: one measures *seconds per wave*, the other *waves per second*, and f = 1/T links them.",
        say: "Here is the idea to keep. Period and frequency are just 2 ways of describing the same rhythm. The period tells you the seconds for 1 wave, the frequency tells you the waves in 1 second, and the 2 are always reciprocals through f equals 1 over T. And remember, the frequency belongs to the source, so it rides along unchanged even when the wave enters a new material.",
      },
    ],
  },
];
