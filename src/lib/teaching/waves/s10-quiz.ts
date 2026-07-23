import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, topical quiz. Whole-topic check across KB Chapter 11:
// energy not matter, wavefronts, transverse vs longitudinal, amplitude and phase,
// period and frequency (f = 1/T), wavelength and wave speed (v = f lambda, v = d/t),
// and reading displacement-distance and displacement-time graphs.

export const BOXES: Subconcept[] = [
  {
    id: "t10.quiz",
    code: "Quiz",
    title: "General wave properties topical quiz",
    blurb: "Whole-topic check: energy not matter, wave types, amplitude, period, frequency, wavelength, wave speed, graphs",
    kind: "quiz",
    steps: [
      // 1. CHOICE - energy not matter (s10-1), correct 1
      {
        kind: "choice",
        question: "A water wave passes a floating cork. What does the wave actually transfer from place to place?",
        options: [
          "The water itself, carried along with the wave",
          "Energy, while the water only moves up and down about a fixed point",
          "Both the water and the cork, over a long distance",
          "Nothing, because a wave keeps all its energy in one place",
        ],
        correct: 1,
        ask: "A wave moves energy along, but the medium is left behind. Think about what the cork does as the wave goes past.",
        hints: [
          "The cork bobs up and down but does not travel to the shore.",
          "A wave carries energy from place to place without carrying the water with it.",
        ],
        explain: "A wave transfers energy while the water only moves up and down about a fixed point. The cork bobs but is not carried along, because a wave moves energy, not matter.",
      },
      // 2. CHOICE - particle returns to rest (s10-1), correct 2
      {
        kind: "choice",
        question: "As a wave passes through a medium, how does a single particle of the medium move?",
        options: [
          "It travels along with the wave all the way to the shore",
          "It stays completely still and does nothing",
          "It is temporarily displaced from its rest position and then returns",
          "It speeds up steadily in the direction the wave travels",
        ],
        correct: 2,
        ask: "The particle vibrates but is not carried along. Think about where it ends up after the wave has passed.",
        hints: [
          "Each particle moves away from its rest position and then comes back.",
          "The particle is only temporarily displaced; it is not carried forward with the wave.",
        ],
        explain: "The particle is temporarily displaced from its rest position and then returns. It vibrates about a fixed point rather than being carried along with the wave.",
      },
      // 3. CHOICE - transverse vibration direction (s10-2), correct 0
      {
        kind: "choice",
        question: "In a transverse wave, how do the particles vibrate compared with the direction the wave travels?",
        options: [
          "At right angles (perpendicular) to the direction of travel",
          "Along the same line as the direction of travel",
          "In complete circles around the source",
          "They do not vibrate at all",
        ],
        correct: 0,
        ask: "A transverse wave has crests and troughs. Picture a rope shaken up and down while the wave moves sideways.",
        hints: [
          "The vibration and the travel are in different directions in a transverse wave.",
          "The particles move at 90 degrees to the direction the wave travels.",
        ],
        explain: "In a transverse wave the particles vibrate at right angles to the direction of travel. This is what gives the wave its crests and troughs, as in water waves and light.",
      },
      // 4. CHOICE - amplitude definition (s10-3), correct 3
      {
        kind: "choice",
        question: "What does the amplitude of a wave measure?",
        options: [
          "The distance between 2 neighbouring crests",
          "The number of complete waves passing a point each second",
          "The time taken for one complete oscillation",
          "The maximum displacement of a particle from its rest position",
        ],
        correct: 3,
        ask: "Amplitude is measured from the rest line. Think about how far a particle gets from the middle, not how often it vibrates.",
        hints: [
          "The other options describe wavelength, frequency and period.",
          "Amplitude is the largest distance a particle moves away from its rest position, to a crest or a trough.",
        ],
        explain: "Amplitude is the maximum displacement of a particle from its rest position. The distance to a crest and the distance to a trough are equal, and both give the amplitude.",
      },
      // 5. CHOICE - frequency fixed by source across boundary (s10-5), correct 1
      {
        kind: "choice",
        question: "A wave passes from one medium into another and slows down. Which quantity is fixed by the source and stays the same?",
        options: [
          "The wavelength",
          "The frequency",
          "The wave speed",
          "The amplitude only",
        ],
        correct: 1,
        ask: "One quantity is set by whatever makes the wave, not by the medium. Think about which one that is.",
        hints: [
          "The wave speed is set by the medium, so it changes at the boundary.",
          "The frequency is fixed by the source, so it stays the same, and the wavelength changes instead.",
        ],
        explain: "The frequency is fixed by the source, so it stays the same across the boundary. Because the speed falls, the wavelength shortens to match, using v = f lambda.",
      },
      // 6. CHOICE - CALC f = 1/T, T=0.25 -> 4 Hz (s10-4), correct 2
      {
        kind: "choice",
        question: "A wave has a period of 0.25 s. Find its frequency.",
        options: ["0.25 Hz", "40 Hz", "4 Hz", "2.5 Hz"],
        correct: 2,
        ask: "Frequency is 1 divided by the period, so work out 1 ÷ 0.25. Which option matches?",
        hints: [
          "Use f equals 1 divided by T.",
          "1 ÷ 0.25 is 4, measured in hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{1}{T}" },
          { label: "Substitute", latex: "f = \\dfrac{1}{0.25}" },
          { label: "Answer", latex: "f = 4\\ \\text{Hz}" },
        ],
        explain: "The frequency is 4 hertz, because 1 ÷ 0.25 seconds is 4 hertz.",
      },
      // 7. CHOICE - CALC v = f lambda, 200 x 0.80 -> 160 (s10-5), correct 0
      {
        kind: "choice",
        question: "A wave has a frequency of 200 Hz and a wavelength of 0.80 m. Find its speed.",
        options: ["160 m/s", "250 m/s", "16 m/s", "0.004 m/s"],
        correct: 0,
        ask: "Wave speed is frequency times wavelength, so work out 200 × 0.80. Which option matches?",
        hints: [
          "Use v equals f times lambda.",
          "200 × 0.80 is 160, in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 200 \\times 0.80" },
          { label: "Answer", latex: "v = 160\\ \\text{m/s}" },
        ],
        explain: "The speed is 160 metres per second, because 200 hertz times 0.80 metres is 160 metres per second.",
      },
      // 8. CHOICE - CALC v = d/t, 18/12 -> 1.5 (s10-5), correct 3
      {
        kind: "choice",
        question: "A wave crest travels 18 m in 12 s. Find the wave speed.",
        options: ["216 m/s", "0.67 m/s", "6 m/s", "1.5 m/s"],
        correct: 3,
        ask: "Speed is distance divided by time, so work out 18 ÷ 12. Which option matches?",
        hints: [
          "Use v equals d divided by t.",
          "18 ÷ 12 is 1.5, in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{d}{t}" },
          { label: "Substitute", latex: "v = \\dfrac{18}{12}" },
          { label: "Answer", latex: "v = 1.5\\ \\text{m/s}" },
        ],
        explain: "The speed is 1.5 metres per second, because 18 metres divided by 12 seconds is 1.5 metres per second.",
      },
      // 9. CHOICE - CALC f = v/lambda, 1.5/3.0 -> 0.5 Hz (s10-5), correct 1
      {
        kind: "choice",
        question: "A wave travels at 1.5 m/s with a wavelength of 3.0 m. Find its frequency.",
        options: ["4.5 Hz", "0.5 Hz", "2 Hz", "1.5 Hz"],
        correct: 1,
        ask: "Rearrange v equals f lambda into f equals v divided by lambda, so work out 1.5 ÷ 3.0.",
        hints: [
          "Use f equals v divided by lambda.",
          "1.5 ÷ 3.0 is 0.5, in hertz.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{v}{\\lambda}" },
          { label: "Substitute", latex: "f = \\dfrac{1.5}{3.0}" },
          { label: "Answer", latex: "f = 0.5\\ \\text{Hz}" },
        ],
        explain: "The frequency is 0.5 hertz, because 1.5 metres per second divided by 3.0 metres is 0.5 hertz.",
      },
      // 10. CHOICE - reading graphs, check the axis (s10-6), correct 2
      {
        kind: "choice",
        question: "2 wave graphs look identical. How can you tell which one gives the wavelength?",
        options: [
          "The one with displacement on the vertical axis",
          "The one with the larger amplitude",
          "The one with distance on the horizontal axis",
          "The one with time on the horizontal axis",
        ],
        correct: 2,
        ask: "The 2 graphs only differ by their horizontal axis. Wavelength is a distance, so which axis must it be read against?",
        hints: [
          "Both graphs have displacement up the vertical axis, so that does not tell them apart.",
          "Wavelength is read from a displacement-distance graph, where distance is on the horizontal axis.",
        ],
        explain: "The graph with distance on the horizontal axis gives the wavelength. A displacement-distance graph is a snapshot of the whole wave, while a displacement-time graph, with time along the bottom, gives the period.",
      },
      // 11. INTERACTIVE classify - mechanical vs electromagnetic (s10-1)
      {
        kind: "classify",
        prompt: "Sort each wave by whether it is mechanical (needs a medium) or electromagnetic (needs no medium).",
        bins: ["Mechanical (needs a medium)", "Electromagnetic (needs no medium)"],
        items: [
          { text: "sound travelling through air", bin: 0 },
          { text: "ripples on a pond", bin: 0 },
          { text: "a wave sent along a rope", bin: 0 },
          { text: "radio waves", bin: 1 },
          { text: "visible light", bin: 1 },
          { text: "X-rays", bin: 1 },
        ],
        ask: "A mechanical wave needs particles of a medium to pass through; an electromagnetic wave can cross empty space. Tap each wave and drop it in its bin.",
        hints: [
          "Sound, water ripples and rope waves all need a material to travel through.",
          "Radio waves, light and X-rays are electromagnetic and can travel through a vacuum.",
        ],
        explain: "Sound, ripples and a rope wave are mechanical, because they need a medium. Radio waves, visible light and X-rays are electromagnetic and can cross a vacuum with no medium.",
      },
      // 12. INTERACTIVE cloze - energy not matter (s10-1)
      {
        kind: "cloze",
        prompt: "Complete the sentence about what a wave does.",
        segments: [
          "A wave carries ",
          " from one place to another without transferring ",
          ". Each particle of the medium is only ",
          " displaced before returning to its rest position.",
        ],
        bank: ["energy", "matter", "temporarily", "permanently", "speed"],
        answer: ["energy", "matter", "temporarily"],
        ask: "Think about what a wave moves along, what it leaves behind, and whether the particles stay displaced or come back.",
        hints: [
          "A wave transfers energy but not the material it passes through.",
          "The particles are only temporarily displaced, then they return to rest.",
        ],
        explain: "A wave carries energy without transferring matter, and each particle is only temporarily displaced before returning to its rest position.",
      },
      // 13. INTERACTIVE classify - transverse vs longitudinal (s10-2)
      {
        kind: "classify",
        prompt: "Sort each wave by whether it is transverse or longitudinal.",
        bins: ["Transverse", "Longitudinal"],
        items: [
          { text: "water waves", bin: 0 },
          { text: "visible light", bin: 0 },
          { text: "a rope shaken up and down", bin: 0 },
          { text: "sound in air", bin: 1 },
          { text: "a push-pull wave on a spring", bin: 1 },
          { text: "a compression sent along a slinky end-on", bin: 1 },
        ],
        ask: "In a transverse wave the particles vibrate across the travel direction; in a longitudinal wave they vibrate along it. Tap each wave and drop it in its bin.",
        hints: [
          "Water, light and an up-and-down rope wave have vibrations at right angles to the travel, so they are transverse.",
          "Sound and push-pull spring waves have vibrations along the travel direction, so they are longitudinal.",
        ],
        explain: "Water waves, light and an up-and-down rope wave are transverse. Sound and push-pull spring or slinky waves are longitudinal, because their particles vibrate along the direction of travel.",
      },
      // 14. INTERACTIVE cloze - compression and rarefaction (s10-2)
      {
        kind: "cloze",
        prompt: "Complete the sentence about a longitudinal wave.",
        segments: [
          "In a longitudinal wave the particles bunch together in a ",
          " and spread apart in a ",
          ". The wave travels ",
          " to the direction in which the particles vibrate.",
        ],
        bank: ["compression", "rarefaction", "parallel", "perpendicular", "crest"],
        answer: ["compression", "rarefaction", "parallel"],
        ask: "Picture particles bunched up and then spread out. Then recall whether a longitudinal wave travels along or across the vibration.",
        hints: [
          "The bunched region is a compression; the spread-out region is a rarefaction.",
          "In a longitudinal wave the travel is parallel to the vibration.",
        ],
        explain: "The particles bunch into a compression and spread into a rarefaction, and the wave travels parallel to the direction in which the particles vibrate.",
      },
      // 15. INTERACTIVE match - amplitude and phase (s10-3)
      {
        kind: "match",
        prompt: "Match each term to its correct meaning.",
        pairs: [
          { left: "Amplitude", right: "The maximum displacement of a particle from its rest position" },
          { left: "2 points in phase", right: "They are the same distance from the rest line and moving the same way" },
          { left: "One wavelength apart", right: "The shortest distance between 2 points that are in phase" },
          { left: "A larger amplitude", right: "The wave carries more energy" },
        ],
        ask: "Match each item to its meaning. One is about height from the rest line, one is about moving in step, one is a distance, and one is about energy.",
        hints: [
          "Amplitude is a maximum displacement; 2 crests are in phase.",
          "Points one wavelength apart are in phase, and a bigger amplitude means more energy.",
        ],
        explain: "Amplitude is the maximum displacement from rest. 2 points in phase are the same distance from the rest line and moving the same way, and the nearest such points are one wavelength apart. A larger amplitude means the wave carries more energy.",
      },
      // 16. INTERACTIVE order - by frequency (s10-4)
      {
        kind: "order",
        prompt: "Put these waves in order, from the lowest frequency to the highest frequency.",
        items: [
          "a wave with a period of 1 s",
          "a wave with a period of 0.5 s",
          "a wave with a period of 0.25 s",
          "a wave with a period of 0.1 s",
        ],
        ask: "Frequency is 1 divided by the period, so a longer period means a lower frequency. Start with the longest period.",
        hints: [
          "The longer the period, the lower the frequency, since f equals 1 divided by T.",
          "A period of 1 second gives 1 hertz, and a period of 0.1 seconds gives 10 hertz, the highest here.",
        ],
        explain: "The longer the period, the lower the frequency. A period of 1 second gives 1 hertz, 0.5 seconds gives 2 hertz, 0.25 seconds gives 4 hertz, and 0.1 seconds gives 10 hertz, so that is the order of increasing frequency.",
      },
      // 17. INTERACTIVE tiles - CALC T = 1/f, f=25 -> 0.04 s (s10-4)
      {
        kind: "tiles",
        prompt: "A wave has a frequency of 25 Hz. Build the working line for its period T, using T = 1/f.",
        tiles: ["T =", "1", "\\div", "25", "=", "0.04", "s", "Hz"],
        answer: ["T =", "1", "\\div", "25", "=", "0.04", "s"],
        ask: "Period is 1 divided by the frequency, so set up 1 ÷ 25.",
        hints: [
          "Use T equals 1 divided by f.",
          "1 ÷ 25 is 0.04, and period is measured in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{1}{f}" },
          { label: "Substitute", latex: "T = \\dfrac{1}{25}" },
          { label: "Answer", latex: "T = 0.04\\ \\text{s}" },
        ],
        explain: "The period is 0.04 seconds, because 1 ÷ 25 hertz is 0.04 seconds.",
      },
      // 18. INTERACTIVE tiles - CALC v = f lambda, 8 x 0.15 -> 1.2 (s10-5)
      {
        kind: "tiles",
        prompt: "A wave has a frequency of 8 Hz and a wavelength of 0.15 m. Build the working line for the wave speed v, using v = f lambda.",
        tiles: ["v =", "8", "\\times", "0.15", "=", "1.2", "m/s", "Hz"],
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
      // 19. INTERACTIVE spoterror - CALC v = f lambda, divide instead of multiply (s10-5)
      {
        kind: "spoterror",
        prompt: "A wave has a frequency of 50 Hz and a wavelength of 0.06 m. Here is a student's working for the wave speed. Tap the line with the mistake.",
        lines: ["v = f \\lambda", "v = f \\div \\lambda", "v = 50 \\times 0.06", "v = 3.0\\ \\text{m/s}"],
        errorLine: 1,
        ask: "Check how wave speed depends on frequency and wavelength. In v equals f lambda, do you multiply or divide the 2?",
        hints: [
          "Wave speed is frequency times wavelength, written v equals f lambda.",
          "The line that divides f by lambda is wrong; it should multiply, giving 50 × 0.06.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 50 \\times 0.06" },
          { label: "Answer", latex: "v = 3.0\\ \\text{m/s}" },
        ],
        explain: "The mistake is the line that writes v equals f divided by lambda. Wave speed is frequency times wavelength, so v equals 50 × 0.06, which is 3.0 metres per second.",
      },
      // 20. INTERACTIVE graphpick - identify displacement-distance graph (s10-6)
      {
        kind: "graphpick",
        prompt: "A displacement-distance graph is a snapshot of the whole wave, and the distance from one crest to the next is the wavelength. Which graph shows a wave with a wavelength of 2 m?",
        xLabel: "distance / m",
        yLabel: "displacement / m",
        options: [
          { points: [[0, 0], [1, 3], [2, 0], [3, -3], [4, 0]], caption: "one wavelength is 4 m" },
          { points: [[0, 0], [0.5, 3], [1, 0], [1.5, -3], [2, 0]], caption: "one wavelength is 2 m" },
          { points: [[0, 0], [0.25, 3], [0.5, 0], [0.75, -3], [1, 0]], caption: "one wavelength is 1 m" },
          { points: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], caption: "a flat line, no wave" },
        ],
        correct: 1,
        ask: "The wavelength is the distance from one crest to the next crest. Look for the curve that completes one full wave over 2 metres.",
        hints: [
          "Follow the curve from a crest to the next crest and read off the distance between them.",
          "The correct graph rises to a crest, falls to a trough, and returns to the axis over 2 metres.",
        ],
        explain: "The second graph has a wavelength of 2 metres, because it completes one full wave, from crest to next crest, over a distance of 2 metres.",
      },
      // 21. OPEN - energy not matter (s10-1), figure allowed on open
      {
        kind: "open",
        prompt: "Explain what is meant by saying that a wave transfers energy without transferring matter. Use a rope wave to help your answer.",
        figure: "fig-11-04-energy-transfer-rope",
        modelAnswer: "A wave is a disturbance that travels and carries energy from one place to another. When a rope is shaken at one end, the wave moves energy along the rope to the far end, but the rope itself stays where it is. Each part of the rope only vibrates about its rest position and returns, so the material is not carried along; only the energy is passed on.",
        marks: [
          "A wave carries energy from one place to another.",
          "The medium (the rope) only vibrates about its rest position and is not carried along.",
          "So energy is transferred but matter is not.",
        ],
        ask: "Say what the wave passes along the rope, and what happens to the rope itself as the wave travels.",
      },
      // 22. OPEN - transverse vs longitudinal (s10-2)
      {
        kind: "open",
        prompt: "Describe the difference between a transverse wave and a longitudinal wave, and give one example of each.",
        modelAnswer: "In a transverse wave the particles vibrate at right angles to the direction the wave travels, and the wave has crests and troughs; water waves and light are examples. In a longitudinal wave the particles vibrate along the same line as the direction of travel, and the wave has compressions and rarefactions; sound is an example.",
        marks: [
          "Transverse: particles vibrate perpendicular to the travel, with crests and troughs.",
          "Longitudinal: particles vibrate parallel to the travel, with compressions and rarefactions.",
          "A correct example of each, such as light (transverse) and sound (longitudinal).",
        ],
        ask: "For each type, compare the vibration direction with the travel direction, and name what features it has.",
      },
      // 23. OPEN - amplitude and energy (s10-3)
      {
        kind: "open",
        prompt: "Explain what the amplitude of a wave is and how it is related to the energy the wave carries.",
        modelAnswer: "The amplitude is the maximum displacement of a particle from its rest position, measured to a crest or a trough, which both give the same value. The larger the amplitude, the more energy the wave carries, so a wave with a bigger amplitude transfers more energy.",
        marks: [
          "Amplitude is the maximum displacement from the rest position.",
          "It is the same to a crest as to a trough.",
          "A larger amplitude means the wave carries more energy.",
        ],
        ask: "Say what amplitude is measured from, and whether more amplitude means more or less energy.",
      },
      // 24. OPEN - period and frequency (s10-4)
      {
        kind: "open",
        prompt: "Define the period and the frequency of a wave, and state the equation that links them.",
        modelAnswer: "The period is the time taken for one complete oscillation, measured in seconds. The frequency is the number of complete oscillations per second, measured in hertz. They are linked by f = 1/T, so the frequency is 1 divided by the period.",
        marks: [
          "Period is the time for one complete oscillation, in seconds.",
          "Frequency is the number of complete oscillations per second, in hertz.",
          "The equation f = 1/T is stated.",
        ],
        ask: "Say what each quantity counts or times, give its unit, and write the equation that connects them.",
      },
      // 25. OPEN - reading graphs (s10-6), figure allowed on open
      {
        kind: "open",
        prompt: "A displacement-distance graph and a displacement-time graph can look identical. Explain how you can tell them apart, and state one quantity you can read from each.",
        figure: "fig-11-14-interpret-graphs",
        modelAnswer: "The 2 graphs are told apart by the label on the horizontal axis. A displacement-distance graph has distance along the bottom and is a snapshot of the whole wave at one instant, giving the wavelength (and the amplitude). A displacement-time graph has time along the bottom and follows one particle over time, giving the period (and the amplitude), from which f = 1/T.",
        marks: [
          "They are told apart by the horizontal axis label (distance or time).",
          "The displacement-distance graph gives the wavelength.",
          "The displacement-time graph gives the period.",
        ],
        ask: "Look at what each horizontal axis measures, and match distance to wavelength and time to period.",
      },
    ],
  },
];
