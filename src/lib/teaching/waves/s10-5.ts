import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, section 5. Grounded in KB Chapter 11 (11.9, 11.10).
// CALCULATION section: every calculation question carries `working` [Formula/Substitute/Answer-with-unit].
// Figure colours follow the T10 colour key: the wave curve = blue; the rest line and dimension markers
// = grey; axes = white/light. lambda = wavelength; spoken fields say "wavelength".

export const BOXES: Subconcept[] = [
  {
    id: "t10.5",
    code: "T10.5",
    title: "Wavelength and wave speed",
    blurb: "Measuring a wavelength, and using v = f lambda and v = d/t to find the speed",
    steps: [
      {
        kind: "concept",
        heading: "What a wavelength is",
        figure: "fig-11-13-displacement-distance",
        body: "The *wavelength* lambda is the shortest distance between 2 successive points that are *in phase*, such as one crest to the very next crest. You read it from a *displacement-distance* graph and measure it in metres.",
        say: "This graph is a snapshot of the whole wave frozen at one instant. The wave itself is the blue curve, with displacement in metres up the vertical axis and distance in metres along the horizontal axis. A grey marker spans one full wavelength, from one crest across to the next crest. That shortest distance between 2 points doing exactly the same thing is the wavelength, measured in metres.",
      },
      {
        kind: "concept",
        heading: "Wave speed as distance per second",
        body: "The *wave speed* v is the *distance* a wavefront travels each second. If it covers a distance d in a time t, then v = d/t, measured in *metres per second*.",
        formula: {
          latex: "v = \\dfrac{d}{t}",
          where: [
            { sym: "v", meaning: "wave speed", unit: "m/s" },
            { sym: "d", meaning: "distance travelled", unit: "m" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Wave speed just tells you how far the wave gets in each second. Track a single wavefront, measure how far it moves and how long it takes, then divide the distance by the time. The answer comes out in metres per second.",
      },
      {
        kind: "concept",
        heading: "The wave equation",
        body: "The *wave speed* also equals the *frequency* multiplied by the *wavelength*. This is the wave equation, and it links how often the source vibrates to how far apart the waves sit.",
        formula: {
          latex: "v = f\\lambda",
          where: [
            { sym: "v", meaning: "wave speed", unit: "m/s" },
            { sym: "f", meaning: "frequency", unit: "Hz" },
            { sym: "\\lambda", meaning: "wavelength", unit: "m" },
          ],
        },
        say: "There is a second way to get the speed. Every second the source sends out f whole waves, and each one is lambda metres long, so the wave advances f times lambda metres each second. Multiply the frequency by the wavelength and you have the speed in metres per second.",
      },
      {
        kind: "concept",
        heading: "Crossing into a new medium",
        body: "The wave speed is set by the *medium* the wave travels through. Because the *frequency* is fixed by the source, entering a new medium changes the *wavelength*: a faster speed gives a longer wavelength, a slower speed gives a shorter one.",
        say: "What sets the speed is the material the wave moves through, not the source. The source only fixes the frequency, which stays the same as the wave crosses into a new medium. So if the wave speeds up, the wavelength stretches out to keep the wave equation true, and if it slows down, the wavelength shrinks.",
      },
      {
        kind: "choice",
        question: "A wave has a frequency of 8 Hz and a wavelength of 0.15 m. What is its speed?",
        options: ["53 m/s", "0.019 m/s", "1.2 m/s", "0.15 m/s"],
        correct: 2,
        ask: "The wave speed is frequency times wavelength, so work out 8 times 0.15.",
        hints: [
          "Use v equals f times lambda.",
          "8 times 0.15 is 1.2, a speed in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 8 \\times 0.15" },
          { label: "Answer", latex: "v = 1.2\\ \\text{m/s}" },
        ],
        explain: "The speed is 1.2 metres per second, because 8 hertz times 0.15 metres is 1.2 metres per second.",
      },
      {
        kind: "slider",
        prompt: "A wave has a frequency of 200 Hz and a wavelength of 0.80 m. Set the slider to the wave speed, in metres per second.",
        min: 0,
        max: 250,
        step: 5,
        unit: "m/s",
        start: 0,
        targetMin: 158,
        targetMax: 162,
        ask: "The speed is frequency times wavelength, so work out 200 times 0.80.",
        hints: [
          "Use v equals f times lambda.",
          "200 times 0.80 is 160, so slide to 160 metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 200 \\times 0.80" },
          { label: "Answer", latex: "v = 160\\ \\text{m/s}" },
        ],
        explain: "The speed is 160 metres per second, because 200 hertz times 0.80 metres is 160 metres per second.",
      },
      {
        kind: "choice",
        question: "A wavefront travels 18 m along a rope in 12 s. What is the wave speed?",
        options: ["216 m/s", "1.5 m/s", "0.67 m/s", "6 m/s"],
        correct: 1,
        ask: "The speed is the distance divided by the time, so work out 18 divided by 12.",
        hints: [
          "Use v equals d divided by t.",
          "18 divided by 12 is 1.5, a speed in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{d}{t}" },
          { label: "Substitute", latex: "v = \\dfrac{18}{12}" },
          { label: "Answer", latex: "v = 1.5\\ \\text{m/s}" },
        ],
        explain: "The speed is 1.5 metres per second, because 18 metres divided by 12 seconds is 1.5 metres per second.",
      },
      {
        kind: "choice",
        question: "A wave travels at 1.5 m/s and has a wavelength of 3.0 m. What is its frequency?",
        options: ["4.5 Hz", "2 Hz", "3 Hz", "0.5 Hz"],
        correct: 3,
        ask: "Rearrange v equals f times lambda to get frequency, so work out 1.5 divided by 3.0.",
        hints: [
          "The frequency is the speed divided by the wavelength.",
          "1.5 divided by 3.0 is 0.5, a frequency in hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{v}{\\lambda}" },
          { label: "Substitute", latex: "f = \\dfrac{1.5}{3.0}" },
          { label: "Answer", latex: "f = 0.5\\ \\text{Hz}" },
        ],
        explain: "The frequency is 0.5 hertz, because 1.5 metres per second divided by 3.0 metres is 0.5 hertz.",
      },
      {
        kind: "choice",
        question: "A water wave passes from deep water into shallow water, where it travels more slowly. What happens to its frequency and wavelength?",
        options: [
          "The frequency stays the same and the wavelength gets shorter.",
          "The wavelength stays the same and the frequency gets smaller.",
          "Both the frequency and the wavelength stay the same.",
          "Both the frequency and the wavelength get larger.",
        ],
        correct: 0,
        ask: "The source sets the frequency, so that does not change. In v equals f times lambda, a smaller speed with the same frequency means a smaller wavelength.",
        hints: [
          "Frequency is fixed by the source, so it stays the same across the boundary.",
          "A slower speed with the same frequency means a shorter wavelength.",
        ],
        explain: "The frequency stays the same because it is fixed by the source, and the wavelength gets shorter because the wave slows down while the frequency is unchanged.",
      },
      {
        kind: "insight",
        body: "Across a boundary the *frequency* stays fixed by the source, so any change in *wave speed* forces the *wavelength* to change to match, keeping the wave equation true.",
        say: "Here is the idea to keep. Only the frequency is locked in by the source, so it carries across a boundary unchanged. The medium decides the speed, and once the speed is set the wavelength has to adjust to fit: faster means a longer wavelength, slower means a shorter one.",
      },
    ],
  },
];
