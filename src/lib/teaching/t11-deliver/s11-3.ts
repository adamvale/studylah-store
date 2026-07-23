import type { Subconcept } from "@/lib/teaching/subconcepts";

// T11 Electromagnetic Waves, section 3. Grounded in KB Chapter 13 (Electromagnetic Waves) section 13.3.
// Figure colours follow the T11 carry-over key: fig-13-03 shows a yellow beam of mixed light
// ("all colours arrive") striking a green leaf, with a green beam ("only green is reflected") to the eye.

export const BOXES: Subconcept[] = [
  {
    id: "t11.3",
    code: "T11.3",
    title: "Common properties and the wave equation",
    blurb: "What every EM wave shares, and using v = f lambda to swap between frequency and wavelength",
    steps: [
      {
        kind: "concept",
        heading: "What every EM wave shares",
        body: "Every electromagnetic wave shares the same core behaviour: each one is *transverse*, *transfers energy* without dragging matter along, travels through empty space at the *speed of light*, and obeys the same *wave equation* as any other wave.",
        formula: {
          latex: "v = f\\lambda",
          where: [
            { sym: "v", meaning: "wave speed", unit: "m/s" },
            { sym: "f", meaning: "frequency", unit: "Hz" },
            { sym: "\\lambda", meaning: "wavelength", unit: "m" },
          ],
        },
        say: "Every electromagnetic wave behaves the same way in these respects. It is a transverse wave, it carries energy from place to place without moving matter with it, and in a vacuum it races along at 3.0 times 10 to the power 8 metres per second, the speed of light. Like any wave it also follows v equals f lambda, and it can be reflected off surfaces and refracted when it crosses into a new material.",
      },
      {
        kind: "concept",
        heading: "Why a leaf looks green",
        figure: "fig-13-03-leaf-reflection",
        body: "The *colour* of a surface is simply the range of *wavelengths* it *reflects* back to your eye, while the rest are *absorbed*. A leaf looks green because it reflects green light and soaks up the other colours.",
        say: "In the picture a yellow arrow of mixed light, labelled all colours arrive, strikes a green leaf. The leaf absorbs most of the colours, and a single green arrow, labelled only green is reflected, travels on to the eye. So the colour you see is whatever the surface bounces back to you rather than swallows.",
      },
      {
        kind: "concept",
        heading: "Crossing into a new material",
        body: "When an EM wave passes from a vacuum into a transparent material, its *speed decreases* and its *wavelength decreases*, but its *frequency stays the same* because it is fixed by the source. That sudden drop in speed is what bends the wave, causing *refraction*.",
        say: "Picture light leaving empty space and entering glass or water. It slows down, and because it is now slower the waves bunch closer together, so the wavelength shrinks as well. The frequency, though, does not change, because that is set by whatever is producing the wave. This change of speed at the boundary is exactly what makes the wave bend, which we call refraction.",
      },
      {
        kind: "choice",
        question: "Orange light has a wavelength of 6.0 times 10^{-7} m. EM waves travel at 3.0 times 10^{8} m/s. What is its frequency?",
        options: [
          "1.8 times 10^{2} Hz",
          "5.0 times 10^{14} Hz",
          "5.0 times 10^{15} Hz",
          "2.0 times 10^{-15} Hz",
        ],
        correct: 1,
        ask: "Frequency is speed divided by wavelength, so work out 3.0 times 10 to the power 8 divided by 6.0 times 10 to the power negative 7.",
        hints: [
          "Rearrange v equals f lambda into f equals v over lambda.",
          "3.0 divided by 6.0 is 0.5, and 10 to the power 8 divided by 10 to the power negative 7 is 10 to the power 15, giving 5.0 times 10 to the power 14 hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{v}{\\lambda}" },
          { label: "Substitute", latex: "f = \\dfrac{3.0 \\times 10^{8}}{6.0 \\times 10^{-7}}" },
          { label: "Answer", latex: "f = 5.0 \\times 10^{14}\\ \\text{Hz}" },
        ],
        explain: "The frequency is 5.0 times 10 to the power 14 hertz, because 3.0 times 10 to the power 8 divided by 6.0 times 10 to the power negative 7 is 5.0 times 10 to the power 14.",
      },
      {
        kind: "slider",
        prompt: "An FM radio station broadcasts at a frequency of 9.0 times 10^{7} Hz. EM waves travel at 3.0 times 10^{8} m/s. Set the slider to the wavelength, in metres.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "m",
        start: 0,
        targetMin: 3.2,
        targetMax: 3.4,
        ask: "Wavelength is speed divided by frequency, so work out 3.0 times 10 to the power 8 divided by 9.0 times 10 to the power 7.",
        hints: [
          "Rearrange v equals f lambda into lambda equals v over f.",
          "3.0 times 10 to the power 8 divided by 9.0 times 10 to the power 7 is about 3.3, so slide to 3.3 metres.",
        ],
        working: [
          { label: "Formula", latex: "\\lambda = \\dfrac{v}{f}" },
          { label: "Substitute", latex: "\\lambda = \\dfrac{3.0 \\times 10^{8}}{9.0 \\times 10^{7}}" },
          { label: "Answer", latex: "\\lambda = 3.3\\ \\text{m}" },
        ],
        explain: "The wavelength is about 3.3 metres, because 3.0 times 10 to the power 8 divided by 9.0 times 10 to the power 7 is 3.3.",
      },
      {
        kind: "choice",
        question: "An X-ray has a frequency of 1.5 times 10^{18} Hz. EM waves travel at 3.0 times 10^{8} m/s. What is its wavelength?",
        options: [
          "2.0 times 10^{-10} m",
          "2.0 times 10^{10} m",
          "5.0 times 10^{9} m",
          "4.5 times 10^{26} m",
        ],
        correct: 0,
        ask: "Wavelength is speed divided by frequency, so work out 3.0 times 10 to the power 8 divided by 1.5 times 10 to the power 18.",
        hints: [
          "Rearrange v equals f lambda into lambda equals v over f.",
          "3.0 divided by 1.5 is 2.0, and 10 to the power 8 divided by 10 to the power 18 is 10 to the power negative 10, giving 2.0 times 10 to the power negative 10 metres.",
        ],
        working: [
          { label: "Formula", latex: "\\lambda = \\dfrac{v}{f}" },
          { label: "Substitute", latex: "\\lambda = \\dfrac{3.0 \\times 10^{8}}{1.5 \\times 10^{18}}" },
          { label: "Answer", latex: "\\lambda = 2.0 \\times 10^{-10}\\ \\text{m}" },
        ],
        explain: "The wavelength is 2.0 times 10 to the power negative 10 metres, because 3.0 times 10 to the power 8 divided by 1.5 times 10 to the power 18 is 2.0 times 10 to the power negative 10.",
      },
      {
        kind: "choice",
        question: "A ray of light passes from a vacuum into a glass block. Which statement correctly describes what happens to the light?",
        options: [
          "Its speed stays the same, but its frequency and wavelength both fall",
          "Its speed, frequency and wavelength all stay the same",
          "Its frequency and speed fall, but its wavelength stays the same",
          "Its frequency stays the same, but its speed and wavelength both fall",
        ],
        correct: 3,
        ask: "The source fixes one of the 3 quantities, so that one cannot change. Decide which of speed, frequency and wavelength must stay the same.",
        hints: [
          "Frequency is set by whatever produces the wave, so it is unchanged inside the glass.",
          "The wave slows down in glass, and because v equals f lambda with frequency fixed, the wavelength must fall too.",
        ],
        explain: "Only the frequency stays the same, because it is fixed by the source. The light slows down in the glass, and with the frequency unchanged the wavelength must shrink as well, which is what bends the ray.",
      },
      {
        kind: "insight",
        body: "Because *frequency* is fixed by the source, a wave that *slows down* in a new material must also shorten its *wavelength*, and this change of speed is the very cause of *refraction*.",
        say: "Here is the key link to remember. The frequency of a wave is set by its source and travels with it unchanged. So when the wave enters glass or water and slows down, something has to give, and it is the wavelength that shrinks to keep the wave equation balanced. That change of speed at the boundary is what bends the wave, the effect we call refraction.",
      },
    ],
  },
];
