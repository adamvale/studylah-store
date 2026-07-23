import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, Revision 2. Checkpoint over KB Chapter 22, sections t20.4 to
// t20.6: background radiation and half-life, fission and fusion, uses and safety.
// Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t20.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: half-life, fission and fusion, uses and safety",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which of these is an artificial (man-made) source of background radiation?",
        options: ["Radon gas seeping from rocks", "Medical X-ray machines", "Cosmic rays from space", "Radioactive potassium in food"],
        correct: 1,
        ask: "Ask which source is built by people rather than found in nature. Which option is that?",
        hints: [
          "Radon from rocks, cosmic rays and the potassium in food are all natural sources.",
          "X-ray machines in hospitals are built by people, so they are an artificial source.",
        ],
        explain: "Medical X-ray machines are an artificial source, because they are made by people. Radon from rocks, cosmic rays and the potassium in food are all natural background sources.",
      },
      {
        kind: "choice",
        question: "A source gives 24000 counts/s and has a half-life of 5 s. What is its count rate after 30 s?",
        options: ["4000 counts/s", "750 counts/s", "1500 counts/s", "375 counts/s"],
        correct: 3,
        ask: "First find how many half-lives fit in 30 seconds by dividing 30 by 5. Then halve the count rate that many times.",
        hints: [
          "30 divided by 5 is 6, so 6 half-lives pass.",
          "Halve 24000 6 times: 12000, then 6000, 3000, 1500, 750, and finally 375 counts per second.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{t}{t_{1/2}} = \\dfrac{30}{5} = 6" },
          { label: "Substitute", latex: "24000 \\to 12000 \\to 6000 \\to 3000 \\to 1500 \\to 750 \\to 375" },
          { label: "Answer", latex: "375\\ \\text{counts/s}" },
        ],
        explain: "The count rate is 375 counts per second. In 30 seconds there are 6 half-lives, and halving 24000 6 times gives 375.",
      },
      {
        kind: "choice",
        question: "Nuclear fission is best described as...",
        figure: "fig-22-07",
        options: ["a heavy nucleus splitting into 2 lighter nuclei", "2 light nuclei joining into a heavier one", "a nucleus giving out only a gamma ray", "an electron being thrown out of the nucleus"],
        correct: 0,
        ask: "Think about what happens to a large nucleus such as uranium when a neutron strikes it. Does it split or join?",
        hints: [
          "Fission means splitting; fusion means joining.",
          "In fission a heavy nucleus such as uranium 235 splits into 2 lighter daughter nuclei and releases more neutrons and energy.",
        ],
        explain: "Fission is a heavy nucleus splitting into 2 lighter nuclei, started by a neutron and releasing more neutrons and energy. 2 light nuclei joining together is fusion instead.",
      },
      {
        kind: "choice",
        question: "A rock holds 240 g of a radioactive isotope with a half-life of 6 years. What mass remains after 18 years?",
        options: ["120 g", "60 g", "30 g", "15 g"],
        correct: 2,
        ask: "Find how many half-lives are in 18 years by dividing 18 by 6. Then halve the mass that many times.",
        hints: [
          "18 divided by 6 is 3, so 3 half-lives pass.",
          "Halve 240 grams 3 times: 120, then 60, then 30 grams.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{t}{t_{1/2}} = \\dfrac{18}{6} = 3" },
          { label: "Substitute", latex: "240 \\to 120 \\to 60 \\to 30" },
          { label: "Answer", latex: "30\\ \\text{g}" },
        ],
        explain: "The mass left is 30 grams. In 18 years there are 3 half-lives, and halving 240 grams 3 times gives 30 grams.",
      },
      {
        kind: "choice",
        question: "Which type of radiation is used inside a household smoke detector?",
        options: ["Gamma rays", "X-rays", "Beta particles", "Alpha particles"],
        correct: 3,
        ask: "Think which radiation ionises the air strongly but is easily blocked, so smoke can disturb it. Which option is that?",
        hints: [
          "The source only needs to ionise the air in a small gap, and it must not escape the box.",
          "Alpha particles ionise the air strongly and are stopped by a few centimetres of air, so they suit a smoke detector.",
        ],
        explain: "Alpha particles are used in a smoke detector, because they strongly ionise the air in the gap. When smoke absorbs them the current drops and the alarm sounds, and they are safely stopped inside the box.",
      },
      {
        kind: "graphpick",
        prompt: "Pick the graph that shows how the number of undecayed nuclei changes with time.",
        xLabel: "time",
        yLabel: "number of nuclei",
        options: [
          { points: [[0, 800], [6, 400], [12, 200], [18, 100], [24, 50]], caption: "halves every half-life" },
          { points: [[0, 800], [6, 600], [12, 400], [18, 200], [24, 0]], caption: "falls by the same amount each step" },
          { points: [[0, 100], [6, 200], [12, 400], [18, 800]], caption: "rises with time" },
        ],
        correct: 0,
        ask: "The number of nuclei should halve after each half-life, getting smaller and smaller but never quite reaching zero. Which graph does that?",
        hints: [
          "A radioactive sample loses the same fraction, one half, each half-life, not the same number.",
          "Look for a curve that drops from 800 to 400 to 200 to 100, flattening towards zero.",
        ],
        explain: "The correct graph halves each half-life, from 800 to 400 to 200 to 100, curving down and approaching but never reaching zero. A straight line would mean losing the same number each time, which is wrong.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement into fission or fusion.",
        bins: ["Fission", "Fusion"],
        items: [
          { text: "A heavy nucleus is split by a neutron", bin: 0 },
          { text: "2 light nuclei join into a heavier one", bin: 1 },
          { text: "The process that powers the Sun", bin: 1 },
          { text: "A chain reaction can build up", bin: 0 },
          { text: "Needs very high temperature and pressure", bin: 1 },
          { text: "Used in nuclear power reactors today", bin: 0 },
        ],
        ask: "For each statement, ask whether a nucleus is being split apart or joined together. Splitting is fission; joining is fusion.",
        hints: [
          "Fission splits a heavy nucleus and can run as a chain reaction in a reactor.",
          "Fusion joins 2 light nuclei, needs very high temperature and pressure, and powers the Sun.",
        ],
        explain: "Splitting a heavy nucleus, the chain reaction and today's reactors are all fission. Joining 2 light nuclei, the need for very high temperature and pressure, and the Sun are all fusion.",
      },
      {
        kind: "match",
        prompt: "Match each radioactive source to the job it is best suited to.",
        pairs: [
          { left: "Alpha source (americium 241)", right: "a smoke detector" },
          { left: "Beta source", right: "monitoring the thickness of thin foil" },
          { left: "Gamma source (cobalt 60)", right: "treating tumours and sterilising equipment" },
          { left: "Uranium 238 in rock", right: "dating very old rocks" },
        ],
        ask: "Match each source by its property: how strongly it ionises, how far it penetrates, and how long its half-life is.",
        hints: [
          "Alpha is easily stopped and ionises the air, good for a smoke detector; beta passes through thin foil so it can gauge thickness.",
          "Gamma penetrates deeply and sterilises or treats tumours; uranium 238 decays very slowly, so it dates ancient rocks.",
        ],
        explain: "Alpha suits a smoke detector, beta gauges the thickness of thin foil, gamma treats tumours and sterilises equipment, and slow uranium 238 decay dates very old rocks. Each use matches the property of the radiation.",
      },
      {
        kind: "spoterror",
        prompt: "One line about radioactive decay is wrong. Find it.",
        lines: [
          "Radioactive decay is a random process, so you cannot predict when a given nucleus will decay.",
          "It is also spontaneous, meaning it is not caused by temperature or pressure.",
          "So the decay speeds up if you heat the source.",
          "The half-life is the time taken for half the nuclei in a sample to decay.",
        ],
        errorLine: 2,
        ask: "Check each line against what spontaneous means. Which claim contradicts it?",
        hints: [
          "Spontaneous decay is not triggered or changed by outside conditions.",
          "Heating a source does not change its decay rate, so the line about heating speeding it up is the error.",
        ],
        explain: "The error is the claim that heating speeds up the decay. Radioactive decay is spontaneous, so its rate is not changed by temperature or pressure.",
      },
      {
        kind: "slider",
        prompt: "A source falls from 480 counts/s to 60 counts/s in 18 h. Set the slider to its half-life, in hours.",
        min: 0,
        max: 12,
        step: 0.5,
        unit: "h",
        start: 0,
        targetMin: 5.5,
        targetMax: 6.5,
        ask: "First count how many times you must halve 480 to reach 60. Then divide the 18 hours by that number of half-lives.",
        hints: [
          "480 halves to 240, then 120, then 60, which is 3 halvings.",
          "3 half-lives take 18 hours, so one half-life is 18 divided by 3, which is 6 hours.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{t}{t_{1/2}}" },
          { label: "Substitute", latex: "480 \\to 240 \\to 120 \\to 60\\ \\ (3\\ \\text{halvings in}\\ 18\\ \\text{h})" },
          { label: "Answer", latex: "t_{1/2} = \\dfrac{18}{3} = 6\\ \\text{h}" },
        ],
        explain: "The half-life is 6 hours. It takes 3 halvings to fall from 480 to 60 counts per second, and 18 hours divided by 3 is 6 hours.",
      },
      {
        kind: "open",
        prompt: "A factory rolls out metal foil over a beta source, with a detector above the foil. Explain how this arrangement keeps the foil at a constant thickness.",
        figure: "fig-22-09",
        modelAnswer: "A beta source sits below the moving foil and a detector reads the count rate above it. Beta radiation passes through thin foil but is partly absorbed by thicker foil, so the count rate depends on the thickness. If the foil gets too thick the count rate drops, and if it gets too thin the count rate rises. The reading is compared with the value for the correct thickness, and the rollers are adjusted so the count rate, and therefore the thickness, is brought back to the right value.",
        marks: [
          "Beta is partly absorbed by the foil, so the count rate depends on the thickness.",
          "Thicker foil gives a lower count and thinner foil a higher count.",
          "The count rate is used to adjust the rollers and keep the thickness constant.",
        ],
        ask: "Think about how much beta radiation gets through thick foil compared with thin foil, and what the detector does when the count changes.",
      },
      {
        kind: "open",
        prompt: "Explain why nuclear fusion can only happen at very high temperature and pressure.",
        figure: "fig-22-08",
        modelAnswer: "Fusion joins 2 light nuclei into a heavier one. Nuclei are positively charged, so they repel one another strongly. To fuse they must be pushed very close together against this repulsion. A very high temperature gives the nuclei very high speeds, and a very high pressure packs them close together, so they can collide hard enough to overcome the repulsion and join. This is why fusion happens in the Sun but is very hard to achieve on Earth.",
        marks: [
          "Nuclei are positively charged and repel each other.",
          "High temperature gives high speeds; high pressure packs the nuclei close.",
          "This overcomes the repulsion so the nuclei can join, as in the Sun.",
        ],
        ask: "Nuclei carry positive charge. Think about what that does when 2 of them approach, and how heat and pressure help them get close enough to join.",
      },
    ],
  },
];
