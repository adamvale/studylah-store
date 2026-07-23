import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), section 1. Grounded in Practical Chapter 05 - Waves (properties of a wave).
// Figure colours follow the fig-pr5 key: the wave curve = blue, the rest line and guide/dimension lines = grey,
// labels = amber. A displacement-distance graph is a snapshot along the wave; a displacement-time graph follows one point.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.1",
    code: "TP5.1",
    title: "Wave properties and the wave equation",
    blurb: "Frequency, period, wavelength and amplitude, and the wave equation v = f lambda",
    steps: [
      {
        kind: "concept",
        heading: "A wave carries energy, not matter",
        body: "A *wave* transfers *energy* from place to place without moving the medium along. Each part of the medium only *vibrates* about a fixed point as the wave passes through.",
        say: "The key idea about a wave is that it carries energy, not material. When a water wave crosses a pond, a floating leaf just bobs up and down on the spot. The water itself does not travel across; only the energy moves along. Every part of the medium vibrates about its own fixed point.",
      },
      {
        kind: "concept",
        heading: "Frequency and period",
        body: "The *frequency* f is the number of complete waves passing a point each second, measured in *hertz*. The *period* T is the time for one full *cycle*, and the 2 are linked by f = 1/T.",
        formula: {
          latex: "f = \\dfrac{1}{T}",
          where: [
            { sym: "f", meaning: "frequency", unit: "Hz" },
            { sym: "T", meaning: "period", unit: "s" },
          ],
        },
        say: "Frequency counts how many whole waves sweep past a point every second, and its unit is the hertz. The period is the time for just one complete cycle. They are reciprocals of each other, so the frequency is 1 divided by the period. A wave of 25 hertz has a period of 1 divided by 25, which is 0.04 seconds.",
      },
      {
        kind: "concept",
        heading: "Wavelength: a snapshot",
        figure: "fig-pr5-01-wave-distance",
        body: "The *wavelength* lambda is the length of one whole wave, for example from one *crest* to the next crest. Read it only from a displacement-*distance* graph, which is a *snapshot* of the wave at one instant.",
        say: "In this figure a blue wave curve rises and falls across a grey horizontal rest line, with amber labels. This is a displacement-distance graph, a snapshot of the whole wave frozen at one moment. The wavelength is the distance for one complete wave, measured most easily from one crest across to the very next crest.",
      },
      {
        kind: "concept",
        heading: "Amplitude and energy",
        body: "The *amplitude* is the greatest *displacement* of the medium from its rest position, measured from the grey rest line up to a crest. A wave with a larger amplitude carries more *energy*.",
        say: "The amplitude is how far the medium swings from its rest line at the most, measured from the middle line up to the top of a crest. It is not the full height from crest to trough, just half of that. The bigger the amplitude, the more energy the wave carries.",
      },
      {
        kind: "concept",
        heading: "Period: follow one point",
        figure: "fig-pr5-02-wave-time",
        body: "To find the *period*, read a displacement-*time* graph, which follows one *point* of the medium as time passes. The period T is the time for that point to complete one full *cycle*.",
        say: "This figure shows a blue wave curve against a grey rest line, but now the bottom axis is time, not distance. A displacement-time graph tracks a single point of the medium as the seconds tick by. The period is the time that point takes to go through one complete cycle and return to where it started.",
      },
      {
        kind: "concept",
        heading: "The wave equation",
        body: "The *speed* of a wave equals its *frequency* multiplied by its *wavelength*. This is the wave equation, v = f lambda.",
        formula: {
          latex: "v = f\\lambda",
          where: [
            { sym: "v", meaning: "wave speed", unit: "m/s" },
            { sym: "f", meaning: "frequency", unit: "Hz" },
            { sym: "\\lambda", meaning: "wavelength", unit: "m" },
          ],
        },
        say: "The wave equation ties the 3 together. The speed of a wave is its frequency times its wavelength. So if 25 waves pass each second and each is 1.2 metres long, the wave travels 25 times 1.2, which is 30 metres every second.",
      },
      {
        kind: "insight",
        body: "To cut measuring error, measure across *several* whole waves and *divide* by the number of waves, rather than trusting a single *reading*.",
        say: "Here is a practical tip worth keeping. One wavelength is short and hard to measure accurately. So measure the length of several whole waves at once, say 5 of them, then divide by 5. Any small error in your reading is shared out and shrinks. The same trick works for the period using several cycles.",
      },
      {
        kind: "choice",
        question: "A wave travels across a lake and a cork floats on the surface. What does the wave carry across the lake?",
        options: ["The water, from one side to the other", "The cork, along with the water", "Nothing at all", "Energy, while the water only vibrates"],
        correct: 3,
        ask: "Think about what the cork does as the wave passes. Does it drift across the lake, or bob on the spot?",
        hints: [
          "The cork stays roughly in place and only bobs up and down.",
          "The medium vibrates about a fixed point while only energy is passed along.",
        ],
        explain: "The wave carries energy while the water only vibrates about a fixed point, which is why the cork bobs on the spot instead of drifting across the lake.",
      },
      {
        kind: "choice",
        question: "You want to measure the wavelength of a wave. Which graph should you read it from?",
        figure: "fig-pr5-01-wave-distance",
        options: ["A displacement-time graph", "A displacement-distance graph", "A speed-time graph", "A force-distance graph"],
        correct: 1,
        ask: "Wavelength is a length, one whole wave across space. Which graph has distance along the bottom?",
        hints: [
          "A displacement-distance graph is a snapshot of the wave along its length.",
          "The wavelength, a crest-to-crest distance, is read from the displacement-distance graph.",
        ],
        explain: "The wavelength is read from a displacement-distance graph, a snapshot showing the crest-to-crest distance. A displacement-time graph gives the period instead.",
      },
      {
        kind: "slider",
        prompt: "A wave has frequency f = 25 Hz and wavelength lambda = 1.2 m. Set the slider to the wave speed v, in m/s.",
        min: 0,
        max: 50,
        step: 0.5,
        unit: "m/s",
        start: 0,
        targetMin: 29.5,
        targetMax: 30.5,
        ask: "Use the wave equation, speed equals frequency times wavelength. Work out 25 times 1.2.",
        hints: [
          "The wave equation is v = f lambda.",
          "25 times 1.2 is 30, so slide to 30 metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 25 \\times 1.2" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "The wave speed is 30 metres per second, because 25 hertz times 1.2 metres is 30 metres per second.",
      },
      {
        kind: "choice",
        question: "A wave has a frequency of 25 Hz. What is its period T?",
        options: ["25 s", "2.5 s", "0.04 s", "0.4 s"],
        correct: 2,
        ask: "The period is 1 divided by the frequency. Work out 1 divided by 25.",
        hints: [
          "Use T = 1/f.",
          "1 divided by 25 is 0.04, and the period is in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{1}{f}" },
          { label: "Substitute", latex: "T = \\dfrac{1}{25}" },
          { label: "Answer", latex: "T = 0.04\\ \\text{s}" },
        ],
        explain: "The period is 0.04 seconds, because 1 divided by 25 hertz is 0.04 seconds.",
      },
      {
        kind: "choice",
        question: "A sound wave has frequency f = 500 Hz and wavelength lambda = 0.66 m. Find its speed v.",
        options: ["330 m/s", "758 m/s", "0.0013 m/s", "500 m/s"],
        correct: 0,
        ask: "Use the wave equation, speed equals frequency times wavelength. Work out 500 times 0.66.",
        hints: [
          "The wave equation is v = f lambda.",
          "500 times 0.66 is 330, in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 500 \\times 0.66" },
          { label: "Answer", latex: "v = 330\\ \\text{m/s}" },
        ],
        explain: "The speed is 330 metres per second, because 500 hertz times 0.66 metres is 330 metres per second, a typical speed of sound in air.",
      },
    ],
  },
];
