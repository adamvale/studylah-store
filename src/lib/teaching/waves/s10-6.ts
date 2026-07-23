import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, section 6. Grounded in KB Chapter 11 (General Wave Properties) section 11.11.
// Figure colours follow the carry-over colour key: the wave curve = blue; the rest line and the
// wavelength/period/amplitude dimension markers = grey; axes = white/light.

export const BOXES: Subconcept[] = [
  {
    id: "t10.6",
    code: "T10.6",
    title: "Reading wave graphs",
    blurb: "Telling a distance graph from a time graph, and what each one reveals",
    steps: [
      {
        kind: "concept",
        heading: "The snapshot graph",
        figure: "fig-11-13-displacement-distance",
        body: "A *displacement-distance* graph is a *snapshot* of the whole wave frozen at one instant. From it you read the *amplitude* and the *wavelength*.",
        say: "Picture freezing the whole wave at one instant, then plotting displacement up the vertical axis against distance along the horizontal axis. In the figure the blue curve waves up and down across a grey dashed rest line, and one full wavelength is marked in grey along the bottom. From this snapshot you can read 2 things: the amplitude, the height from the rest line to a crest, and the wavelength, the distance from one crest to the next.",
      },
      {
        kind: "concept",
        heading: "The one-particle graph",
        figure: "fig-11-11-displacement-time",
        body: "A *displacement-time* graph follows just *one particle* through time. From it you read the *amplitude* and the *period* T, then the frequency from f = 1/T.",
        formula: {
          latex: "f = \\dfrac{1}{T}",
          where: [
            { sym: "f", meaning: "frequency", unit: "Hz" },
            { sym: "T", meaning: "period", unit: "s" },
          ],
        },
        say: "This graph is different. Instead of the whole wave, it watches a single particle and plots its displacement against time. In the figure the blue curve rises and falls, and 1 full cycle is marked in grey as the period T, the time for one complete oscillation. Read the period off the time axis, then divide 1 by the period to get the frequency in hertz.",
      },
      {
        kind: "concept",
        heading: "Check the bottom axis",
        figure: "fig-11-14-interpret-graphs",
        body: "The two curves can look *identical*, so never guess. Always check the *horizontal axis label*: *distance* means a snapshot giving wavelength, while *time* means one particle giving the period.",
        say: "Here is the trap. This figure stacks 2 graphs. The top one has a wavelength marked and the bottom one has a period T marked, yet the blue curves look the same. Only the bottom axis tells them apart. If the horizontal axis reads distance in metres, you are looking at a snapshot and the repeat is a wavelength. If it reads time in seconds, you are following one particle and the repeat is a period.",
      },
      {
        kind: "concept",
        heading: "Shifting the wave along",
        body: "To draw the wave at a *later* time, slide the whole *waveform* along by a distance d = v t in the *direction of travel*. If that shift is a whole number of *wavelengths*, the graph looks unchanged.",
        formula: {
          latex: "d = v\\,t",
          where: [
            { sym: "d", meaning: "distance the waveform moves", unit: "m" },
            { sym: "v", meaning: "wave speed", unit: "m/s" },
            { sym: "t", meaning: "time elapsed", unit: "s" },
          ],
        },
        say: "Sometimes a question asks what the snapshot looks like a few seconds later. The whole waveform simply shifts along in the direction the wave travels, by a distance equal to speed times time. Here is a neat twist: if that shift works out to be a whole number of wavelengths, every crest lands exactly where a crest was before, so the new snapshot looks identical to the old one.",
      },
      {
        kind: "choice",
        question: "You are handed two wave graphs whose curves look identical. Which one lets you read off the wavelength?",
        options: [
          "The one whose horizontal axis is time",
          "The one whose horizontal axis is distance",
          "Either graph, since the curves are identical",
          "Neither graph can show a wavelength",
        ],
        correct: 1,
        ask: "Wavelength is a distance between crests, so it can only be read where the horizontal axis measures distance.",
        hints: [
          "A time axis gives you the period, not the wavelength.",
          "Look for the graph whose bottom axis is distance in metres.",
        ],
        explain: "The graph with distance on its horizontal axis gives the wavelength, because wavelength is the distance between successive crests. The time-axis graph would give the period instead.",
      },
      {
        kind: "match",
        prompt: "Match each thing you want to find to the graph you read it from.",
        pairs: [
          { left: "Wavelength", right: "Displacement-distance graph" },
          { left: "Period", right: "Displacement-time graph" },
          { left: "A snapshot of the whole wave", right: "Displacement-distance graph" },
          { left: "One particle followed through time", right: "Displacement-time graph" },
        ],
        ask: "Distance on the bottom axis means a snapshot giving wavelength; time on the bottom axis means one particle giving the period.",
        hints: [
          "Wavelength is a distance, so it comes from the distance graph.",
          "Period is a time, so it comes from the time graph.",
        ],
        explain: "Wavelength and the whole-wave snapshot come from the displacement-distance graph. Period and one particle followed through time come from the displacement-time graph.",
      },
      {
        kind: "choice",
        question: "From a displacement-time graph a wave has period T = 0.5 s. Its displacement-distance graph shows lambda = 3 m. Find the wave speed v.",
        options: ["1.5 m/s", "0.5 m/s", "6 m/s", "12 m/s"],
        correct: 2,
        ask: "First turn the period into a frequency with f = 1 divided by T, then multiply that frequency by the wavelength.",
        hints: [
          "1 divided by 0.5 is 2, so the frequency is 2 hertz.",
          "Then v = f times lambda, so 2 times 3 is 6.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{1}{T}, \\quad v = f\\lambda" },
          { label: "Substitute", latex: "f = \\dfrac{1}{0.5} = 2\\ \\text{Hz}, \\quad v = 2 \\times 3" },
          { label: "Answer", latex: "v = 6\\ \\text{m/s}" },
        ],
        explain: "The speed is 6 metres per second. A period of 0.5 seconds gives a frequency of 2 hertz, because 1 divided by 0.5 is 2, and then 2 hertz times 3 metres is 6 metres per second.",
      },
      {
        kind: "slider",
        prompt: "A wave travels at v = 2 m/s. On its displacement-distance snapshot, how far, in metres, has the whole waveform moved after 6 s? Set the slider.",
        min: 0,
        max: 20,
        step: 0.5,
        unit: "m",
        start: 0,
        targetMin: 11.5,
        targetMax: 12.5,
        ask: "The waveform slides along by distance equals speed times time, so work out 2 times 6.",
        hints: [
          "Use d = v times t.",
          "2 times 6 is 12, so slide to 12 metres.",
        ],
        working: [
          { label: "Formula", latex: "d = v\\,t" },
          { label: "Substitute", latex: "d = 2 \\times 6" },
          { label: "Answer", latex: "d = 12\\ \\text{m}" },
        ],
        explain: "The waveform moves 12 metres, because 2 metres per second times 6 seconds is 12 metres. If the wavelength were 4 metres, that shift would be exactly 3 wavelengths, so the new snapshot would look unchanged.",
      },
      {
        kind: "graphpick",
        prompt: "Both wave graphs have the same blue curve. Pick the one you would read a wavelength from, judging only by its horizontal axis.",
        xLabel: "horizontal axis",
        yLabel: "displacement / m",
        options: [
          {
            points: [
              [0, 0],
              [1, 2],
              [2, 0],
              [3, -2],
              [4, 0],
              [5, 2],
              [6, 0],
              [7, -2],
              [8, 0],
            ],
            caption: "horizontal axis: distance / m",
          },
          {
            points: [
              [0, 0],
              [1, 2],
              [2, 0],
              [3, -2],
              [4, 0],
              [5, 2],
              [6, 0],
              [7, -2],
              [8, 0],
            ],
            caption: "horizontal axis: time / s",
          },
        ],
        correct: 0,
        ask: "Ignore the curve shape, since both are the same. Read only the horizontal axis label and find the one measuring distance.",
        hints: [
          "Wavelength is a distance, so its axis must be in metres of distance.",
          "The graph labelled distance is the snapshot; the one labelled time gives a period instead.",
        ],
        explain: "The first graph is the one to use, because its horizontal axis is distance in metres, so the repeat length is a wavelength. The second graph has a time axis, so its repeat is a period.",
      },
      {
        kind: "insight",
        body: "A wave graph is only half-labelled until you read the *horizontal axis*: *distance* gives you the wavelength, *time* gives you the period. The curve alone never tells you which one.",
        say: "Hold on to one habit. Before you read anything off a wave graph, glance at the bottom axis. Distance in metres means a snapshot, and the repeat is a wavelength. Time in seconds means one particle over time, and the repeat is a period. The blue curve looks the same either way, so the axis label is the only thing that settles it.",
      },
    ],
  },
];
