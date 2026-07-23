import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, section 4. Grounded in KB Chapter 22, sections 22.7, 22.8, 22.9
// (background radiation, activity and half-life). CALCULATION box.
// Figure colours: the half-life decay curve is amber; the detector, source and axes are white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t20.4",
    code: "T20.4",
    title: "Background radiation, activity and half-life",
    blurb: "Background counts, activity in becquerel, and how half-life times decay",
    steps: [
      {
        kind: "concept",
        heading: "Background radiation",
        body: "*Background radiation* is the low-level radiation always around us. Most comes from *natural* sources such as rocks, soil, cosmic rays, radon gas and food, and some from *artificial* sources such as medical X-rays and nuclear waste.",
        say: "Radiation is not just something in a laboratory. A weak level of it is around us all the time, and we call it background radiation. Most of it is natural, coming from rocks, soil, cosmic rays that reach us from space, radon gas that seeps out of the ground, and even the food we eat. A smaller part is artificial, made by people, such as medical X-rays and the waste from nuclear power stations.",
      },
      {
        kind: "concept",
        heading: "Activity in becquerel",
        body: "The *activity* of a source is how many nuclei decay each second. It is measured in the *becquerel*, where 1 becquerel is *1 decay per second*.",
        formula: {
          latex: "1\\ \\text{Bq} = 1\\ \\text{decay per second}",
          where: [
            { sym: "Bq", meaning: "becquerel, the unit of activity" },
          ],
        },
        say: "Every radioactive source is decaying, and the activity tells us how fast. It is the number of nuclei that break down each second. The unit is the becquerel. One becquerel just means one decay every second, so a source of 200 becquerel has 200 nuclei decaying every second.",
      },
      {
        kind: "concept",
        heading: "Count rate and the Geiger-Muller tube",
        body: "A *Geiger-Muller tube* detects the radiation and gives a *count rate*, the counts per second or per minute. The count rate *falls with distance* from the source, because the radiation spreads out.",
        say: "We do not usually catch every single decay. Instead a Geiger-Muller tube, held near the source, clicks each time radiation enters it, and gives a count rate in counts per second or counts per minute. Move the tube further away and the count rate drops, because the radiation spreads out in all directions and less of it reaches the tube.",
      },
      {
        kind: "concept",
        heading: "Corrected count rate",
        body: "Background radiation adds to every reading, so before any calculation you *subtract* the *background count rate* from the *measured count rate*. This gives the *corrected count rate* due to the source alone.",
        formula: {
          latex: "\\text{corrected count rate} = \\text{measured count rate} - \\text{background count rate}",
        },
        say: "The tube always picks up a little background as well as the source, so a raw reading is slightly too high. To get the count rate from the source alone, take the measured count rate and subtract the background count rate. That result is the corrected count rate, and it is what we use in a half-life calculation.",
      },
      {
        kind: "concept",
        heading: "Half-life",
        figure: "fig-22-05-half-life-curve",
        body: "The *half-life* is the *time for half* the nuclei, or the count rate, or the mass, to decay. After each half-life the amount *halves* again, following a curve that *never reaches zero*.",
        formula: {
          latex: "N \\to \\tfrac{N}{2} \\to \\tfrac{N}{4} \\to \\tfrac{N}{8}",
          where: [
            { sym: "N", meaning: "number of nuclei (or count rate, or mass) at the start" },
          ],
        },
        say: "Decay is random, but a large sample thins out at a steady pace. The half-life is the time taken for half of it to decay, whether we measure the number of nuclei, the count rate, or the mass. The figure shows an amber curve of the number of nuclei falling with time. It drops to a half, then a quarter, then an eighth, each step taking one half-life. The curve keeps getting closer to the axis but never quite touches zero.",
      },
      {
        kind: "concept",
        heading: "Number of half-lives",
        body: "To work out how much is left, find the *number of half-lives* by dividing the *total time* by the *half-life*, then *halve* the amount that many times.",
        formula: {
          latex: "\\text{number of half-lives} = \\dfrac{\\text{total time}}{\\text{half-life}}",
        },
        say: "The key step is counting the half-lives. Divide the total time that has passed by the length of one half-life. If that gives 3, the amount has halved 3 times, so it is one half, then one quarter, then one eighth of what you started with. Halve it once for each half-life and you have the amount remaining.",
      },
      {
        kind: "classify",
        prompt: "Sort each source of background radiation as natural or artificial.",
        bins: ["Natural", "Artificial"],
        items: [
          { text: "Radon gas from the ground", bin: 0 },
          { text: "Cosmic rays from space", bin: 0 },
          { text: "Rocks and soil", bin: 0 },
          { text: "Medical X-rays", bin: 1 },
          { text: "Nuclear waste", bin: 1 },
        ],
        ask: "Natural sources are there without people, like rocks, soil, cosmic rays and radon. Artificial sources are made by people, like X-ray machines and reactor waste. Tap each one and drop it in its bin.",
        hints: [
          "Radon, cosmic rays and rocks are all natural.",
          "Medical X-rays and nuclear waste are produced by people, so they are artificial.",
        ],
        explain: "Radon, cosmic rays, and rocks and soil are natural background sources, while medical X-rays and nuclear waste are artificial, because they are produced by people.",
      },
      {
        kind: "choice",
        question: "A source has a count rate of 24000 counts/s and a half-life of 5 s. What is the count rate after 30 s?",
        options: ["750 counts/s", "1500 counts/s", "375 counts/s", "187.5 counts/s"],
        correct: 2,
        ask: "First find the number of half-lives, 30 ÷ 5. Then halve 24000 that many times.",
        hints: [
          "30 ÷ 5 is 6 half-lives.",
          "Halving 24000 6 times gives 12000, 6000, 3000, 1500, 750, then 375.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\text{total time}}{\\text{half-life}}" },
          { label: "Substitute", latex: "n = \\dfrac{30}{5} = 6" },
          { label: "Answer", latex: "24000 \\to 375\\ \\text{counts/s}" },
        ],
        explain: "The count rate is 375 counts per second, because 30 ÷ 5 is 6 half-lives, and halving 24000 6 times gives 375.",
      },
      {
        kind: "choice",
        question: "A source falls from 480 counts/s to 60 counts/s in 18 h. What is its half-life?",
        options: ["3 h", "6 h", "9 h", "18 h"],
        correct: 1,
        ask: "Count how many times you halve 480 to reach 60. Then divide the 18 hours by that number of half-lives.",
        hints: [
          "480 to 240 to 120 to 60 is 3 half-lives.",
          "18 hours divided by 3 half-lives is 6 hours each.",
        ],
        working: [
          { label: "Formula", latex: "\\text{half-life} = \\dfrac{\\text{total time}}{n}" },
          { label: "Substitute", latex: "480 \\to 240 \\to 120 \\to 60,\\ n = 3;\\ \\text{half-life} = \\dfrac{18}{3}" },
          { label: "Answer", latex: "\\text{half-life} = 6\\ \\text{h}" },
        ],
        explain: "The half-life is 6 hours, because 480 halves to 60 in 3 steps, and 18 hours divided by 3 is 6 hours.",
      },
      {
        kind: "choice",
        question: "A source drops from 6400 counts/s to 100 counts/s in 6 min. What is its half-life?",
        options: ["6 min", "3 min", "2 min", "1 min"],
        correct: 3,
        ask: "Halve 6400 down to 100 and count the steps, then divide the 6 minutes by that number.",
        hints: [
          "6400 to 3200 to 1600 to 800 to 400 to 200 to 100 is 6 half-lives.",
          "6 minutes divided by 6 half-lives is 1 minute each.",
        ],
        working: [
          { label: "Formula", latex: "\\text{half-life} = \\dfrac{\\text{total time}}{n}" },
          { label: "Substitute", latex: "6400 \\to 100,\\ n = 6;\\ \\text{half-life} = \\dfrac{6}{6}" },
          { label: "Answer", latex: "\\text{half-life} = 1\\ \\text{min}" },
        ],
        explain: "The half-life is 1 minute, because 6400 halves to 100 in 6 steps, and 6 minutes divided by 6 is 1 minute.",
      },
      {
        kind: "choice",
        question: "A radioactive sample has a mass of 72 mg and a half-life of 15 years. What mass remains after 30 years?",
        options: ["18 mg", "36 mg", "9 mg", "4.5 mg"],
        correct: 0,
        ask: "Find the number of half-lives, 30 ÷ 15. Then halve the mass that many times.",
        hints: [
          "30 ÷ 15 is 2 half-lives.",
          "72 halves to 36, then to 18.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\text{total time}}{\\text{half-life}}" },
          { label: "Substitute", latex: "n = \\dfrac{30}{15} = 2" },
          { label: "Answer", latex: "72 \\to 36 \\to 18\\ \\text{mg}" },
        ],
        explain: "The mass remaining is 18 milligrams, because 30 ÷ 15 is 2 half-lives, and 72 halved twice is 18.",
      },
      {
        kind: "choice",
        question: "The background count rate is 25 counts/min. A source reads a measured count rate of 825 counts/min. What is the corrected count rate?",
        options: ["800 counts/min", "850 counts/min", "825 counts/min", "775 counts/min"],
        correct: 0,
        ask: "The corrected count rate is the measured count rate minus the background. Work out 825 - 25.",
        hints: [
          "Use corrected count rate equals measured minus background.",
          "825 - 25 is 800.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{measured} - \\text{background}" },
          { label: "Substitute", latex: "\\text{corrected} = 825 - 25" },
          { label: "Answer", latex: "\\text{corrected} = 800\\ \\text{counts/min}" },
        ],
        explain: "The corrected count rate is 800 counts per minute, because 825 measured minus 25 background is 800.",
      },
      {
        kind: "choice",
        question: "With a background of 25 counts/min, a source reads 825 counts/min, and 30 min later it reads 225 counts/min. Using corrected count rates, what is the half-life?",
        options: ["30 min", "15 min", "10 min", "20 min"],
        correct: 1,
        ask: "First correct both readings by subtracting 25. Then count how many times 800 halves to reach 200, and divide 30 minutes by that.",
        hints: [
          "Corrected readings are 800 and 200; 800 to 400 to 200 is 2 half-lives.",
          "30 minutes divided by 2 half-lives is 15 minutes each.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{measured} - \\text{background};\\ \\text{half-life} = \\dfrac{\\text{total time}}{n}" },
          { label: "Substitute", latex: "825-25=800,\\ 225-25=200,\\ 800 \\to 400 \\to 200,\\ n=2;\\ \\dfrac{30}{2}" },
          { label: "Answer", latex: "\\text{half-life} = 15\\ \\text{min}" },
        ],
        explain: "The half-life is 15 minutes, because the corrected count rate falls from 800 to 200 in 2 half-lives, and 30 minutes divided by 2 is 15 minutes.",
      },
      {
        kind: "graphpick",
        prompt: "Which graph shows how the count rate of a radioactive source changes with time?",
        xLabel: "time",
        yLabel: "count rate",
        options: [
          { points: [[0, 100], [1, 75], [2, 50], [3, 25], [4, 0]], caption: "Straight line falling to zero" },
          { points: [[0, 100], [1, 50], [2, 25], [3, 12.5], [4, 6.25]], caption: "Halving each step, nearing zero" },
          { points: [[0, 10], [1, 30], [2, 55], [3, 80], [4, 100]], caption: "Rising with time" },
          { points: [[0, 60], [1, 60], [2, 60], [3, 60], [4, 60]], caption: "Constant" },
        ],
        correct: 1,
        ask: "The count rate halves in each equal time interval and gets closer to zero without ever reaching it. Which curve does that?",
        hints: [
          "Radioactive decay does not fall in a straight line and does not stay constant.",
          "Look for the curve that halves each step, 100, 50, 25, and flattens towards zero.",
        ],
        explain: "The correct graph halves in each equal time interval, dropping from 100 to 50 to 25, and approaches but never reaches zero, which is the shape of radioactive decay.",
      },
    ],
  },
];
