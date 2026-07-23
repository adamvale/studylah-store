import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, topical quiz. Whole-topic check across KB Chapter 22: the atom and
// nuclide notation, isotopes, spontaneous and random decay, alpha/beta/gamma nature, charge,
// ionising and penetrating power and deflection, nuclide equations, background radiation,
// activity, count rate and half-life, nuclear fission and fusion, and uses, hazards and safety.

export const BOXES: Subconcept[] = [
  {
    id: "t20.quiz",
    code: "Quiz",
    title: "Radioactivity topical quiz",
    blurb: "Whole-topic check: the atom, the 3 emissions, nuclide equations, half-life, fission and fusion, uses and safety",
    kind: "quiz",
    steps: [
      // 1 CHOICE (correct 2)
      {
        kind: "choice",
        question: "In a neutral atom, which statement is always true?",
        options: [
          "The number of neutrons equals the number of protons",
          "The number of electrons equals the number of neutrons",
          "The number of electrons equals the number of protons",
          "The nucleus contains electrons as well as protons",
        ],
        correct: 2,
        ask: "A neutral atom carries no overall charge. Compare the positive charges in the nucleus with the negative charges outside it.",
        hints: [
          "Protons carry charge plus 1 and electrons carry charge minus 1.",
          "For zero overall charge the number of electrons must match the number of protons.",
        ],
        explain: "In a neutral atom the number of electrons equals the number of protons, so the positive and negative charges cancel. The number of neutrons can be different, and electrons are found in the outer shells, not in the nucleus.",
      },
      // 2 CHOICE (correct 0)
      {
        kind: "choice",
        question: "2 isotopes of the same element always have...",
        options: [
          "the same proton number but different numbers of neutrons",
          "the same number of neutrons but different proton numbers",
          "the same nucleon number but different proton numbers",
          "completely different chemical properties",
        ],
        correct: 0,
        ask: "Isotopes are atoms of the same element. Think about which number fixes the element and which number is allowed to change.",
        hints: [
          "The proton number decides which element an atom is, so it is the same for isotopes.",
          "Isotopes differ in their number of neutrons, so their nucleon numbers differ.",
        ],
        explain: "Isotopes of an element have the same proton number but different numbers of neutrons, so they have different nucleon numbers. They share the same chemical properties because those depend on the number of electrons.",
      },
      // 3 CHOICE (correct 3)
      {
        kind: "choice",
        question: "Which type of radiation is the most strongly ionising and is stopped by just a sheet of paper?",
        options: [
          "gamma radiation",
          "beta radiation",
          "an X-ray",
          "alpha radiation",
        ],
        correct: 3,
        ask: "The most strongly ionising radiation is also the least penetrating. Which one is stopped most easily?",
        hints: [
          "Alpha is a slow, heavy, doubly charged particle, so it ionises strongly but does not travel far.",
          "Alpha radiation is stopped by a sheet of paper, while beta and gamma pass through it.",
        ],
        explain: "Alpha radiation is the most strongly ionising and the least penetrating, so it is stopped by a sheet of paper. Beta is stopped by a few millimetres of aluminium and gamma is only reduced by centimetres of lead.",
      },
      // 4 CHOICE (correct 1)
      {
        kind: "choice",
        question: "A source sends alpha, beta and gamma radiation between 2 charged plates, with the top plate positive and the bottom plate negative. Which describes the paths?",
        options: [
          "All 3 bend toward the positive plate",
          "Beta bends toward the positive plate, alpha bends the opposite way, and gamma goes straight through",
          "Gamma bends the most and beta passes straight through",
          "Alpha bends toward the positive plate and beta is undeflected",
        ],
        correct: 1,
        ask: "Opposite charges attract. Alpha is positive, beta is negative, and gamma has no charge. Which way does each move, and which is undeflected?",
        hints: [
          "Beta is negative, so it curves up toward the positive plate; alpha is positive, so it curves the opposite way.",
          "Gamma has no charge, so it is not deflected and passes straight through.",
        ],
        explain: "Beta is negative and curves toward the positive plate, and being light it bends the most. Alpha is positive and curves the opposite way toward the negative plate. Gamma has no charge and passes straight through undeflected.",
      },
      // 5 CHOICE calc, nuclide equation (correct 2)
      {
        kind: "choice",
        question: "A uranium 238 nucleus decays by emitting an alpha particle. Which nuclide completes the equation?",
        options: [
          "_{92}^{238}U",
          "_{88}^{234}Ra",
          "_{90}^{234}Th",
          "_{92}^{234}U",
        ],
        correct: 2,
        ask: "In alpha decay the nucleon number falls by 4 and the proton number falls by 2. Work out the new numbers from uranium 238.",
        hints: [
          "Take 4 off the nucleon number 238 and 2 off the proton number 92.",
          "The nucleon number becomes 234 and the proton number becomes 90, which is thorium.",
        ],
        working: [
          { label: "Formula", latex: "^{A}_{Z}\\text{U} \\rightarrow\\ ^{A-4}_{Z-2}\\text{X} + ^{4}_{2}\\text{He}" },
          { label: "Substitute", latex: "^{238}_{92}\\text{U} \\rightarrow\\ ^{234}_{90}\\text{X} + ^{4}_{2}\\text{He}" },
          { label: "Answer", latex: "\\text{X} = \\ ^{234}_{90}\\text{Th}" },
        ],
        explain: "In alpha decay the nucleon number falls by 4 and the proton number falls by 2, so uranium 238 becomes thorium 234. The nucleon numbers balance as 238 equals 234 + 4, and the proton numbers balance as 92 equals 90 + 2.",
      },
      // 6 CHOICE calc, counting (correct 0)
      {
        kind: "choice",
        question: "A vanadium 51 nucleus has a proton number of 23. How many neutrons does it contain?",
        options: ["28", "23", "51", "74"],
        correct: 0,
        ask: "The number of neutrons is the nucleon number minus the proton number. Work out 51 - 23.",
        hints: [
          "Neutrons equal the nucleon number minus the proton number.",
          "51 - 23 is 28 neutrons.",
        ],
        working: [
          { label: "Formula", latex: "N = A - Z" },
          { label: "Substitute", latex: "N = 51 - 23" },
          { label: "Answer", latex: "N = 28" },
        ],
        explain: "The number of neutrons is the nucleon number minus the proton number, so 51 - 23 is 28 neutrons.",
      },
      // 7 CHOICE calc, half-life (correct 3)
      {
        kind: "choice",
        question: "A source has a count rate of 24000 counts/s and a half-life of 5 s. What is the count rate after 30 s?",
        options: ["1500 counts/s", "750 counts/s", "3000 counts/s", "375 counts/s"],
        correct: 3,
        ask: "First find how many half-lives fit into 30 seconds, then halve the count rate that many times.",
        hints: [
          "30 seconds divided by the 5 second half-life is 6 half-lives.",
          "Halving 24000 6 times gives 375 counts per second.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{t}{t_{1/2}}" },
          { label: "Substitute", latex: "n = \\dfrac{30}{5} = 6\\ \\text{half-lives}" },
          { label: "Answer", latex: "24000 \\div 2^{6} = 375\\ \\text{counts/s}" },
        ],
        explain: "30 seconds is 6 half-lives of 5 seconds, so the count rate halves 6 times: 24000 to 12000 to 6000 to 3000 to 1500 to 750 to 375 counts per second.",
      },
      // 8 CHOICE conceptual, fission (correct 1)
      {
        kind: "choice",
        question: "Nuclear fission is started by firing a neutron at a heavy nucleus. Why is a neutron used?",
        options: [
          "It is very heavy and smashes the nucleus apart by force",
          "It has no charge, so it is not repelled by the nucleus",
          "It is positively charged and is pulled into the nucleus",
          "It carries a large negative charge that attracts protons",
        ],
        correct: 1,
        ask: "The nucleus is positively charged. Think about what would happen to a charged particle approaching it, compared with a neutral one.",
        hints: [
          "A positive particle would be repelled by the positive nucleus.",
          "A neutron has no charge, so it is not repelled and can reach the nucleus.",
        ],
        explain: "A neutron is used because it has no charge, so it is not repelled by the positive nucleus and can get close enough to be absorbed and split it. A charged particle would be pushed away.",
      },
      // 9 CHOICE conceptual, conservation (correct 0)
      {
        kind: "choice",
        question: "In any nuclear (nuclide) equation, what must be the same on both sides?",
        options: [
          "The total nucleon number and the total proton number",
          "Only the total mass measured in kilograms",
          "The number of atoms of each named element",
          "The total number of electrons in the shells",
        ],
        correct: 0,
        ask: "Balancing a nuclear equation means 2 totals stay equal on each side. Which 2 numbers are they?",
        hints: [
          "Add up the top numbers on each side, then the bottom numbers on each side.",
          "The total nucleon number and the total proton number are both conserved.",
        ],
        explain: "In every nuclear equation the total nucleon number and the total proton number are conserved, so they are equal on both sides. This is how you find a missing nuclide or particle.",
      },
      // 10 CHOICE conceptual, safety (correct 2)
      {
        kind: "choice",
        question: "Which is the safest way to handle a radioactive source in the laboratory?",
        options: [
          "Heat the source so that it decays more slowly",
          "Hold the source in bare hands for only a short time",
          "Use shielding, keep your distance with tongs, and limit the time of exposure",
          "Store the source in an open dish on the bench",
        ],
        correct: 2,
        ask: "The 3 main safety ideas are shielding, distance and time. Which option uses all 3?",
        hints: [
          "Reduce exposure by putting a barrier in the way, staying further off, and spending less time near it.",
          "Shielding, distance and limiting the time together give the safest handling.",
        ],
        explain: "The safest approach uses shielding, distance and time: keep the source behind lead or in a lead-lined box, handle it with tongs to stay further away, and limit how long you are exposed. Heating does not change the decay rate.",
      },
      // 11 INTERACTIVE classify: fission vs fusion
      {
        kind: "classify",
        prompt: "Sort each statement by whether it describes nuclear fission or nuclear fusion.",
        bins: ["Nuclear fission", "Nuclear fusion"],
        items: [
          { text: "a heavy nucleus splits into 2 lighter nuclei", bin: 0 },
          { text: "the reaction is started by a neutron striking the nucleus", bin: 0 },
          { text: "used to release energy in nuclear power reactors on Earth", bin: 0 },
          { text: "2 light nuclei join to form one heavier nucleus", bin: 1 },
          { text: "the process that releases energy in the Sun", bin: 1 },
          { text: "needs very high temperature and pressure to happen", bin: 1 },
        ],
        ask: "Fission is a heavy nucleus breaking apart; fusion is light nuclei joining together. Tap each statement and drop it in its bin.",
        hints: [
          "If a big nucleus splits or a neutron starts it, that is fission.",
          "If small nuclei join, or it powers the Sun and needs huge temperature and pressure, that is fusion.",
        ],
        explain: "Fission is a heavy nucleus splitting into 2 lighter ones, started by a neutron, and used in reactors. Fusion is 2 light nuclei joining into a heavier one, the process in the Sun, which needs very high temperature and pressure.",
      },
      // 12 INTERACTIVE match: emission to nature and charge
      {
        kind: "match",
        prompt: "Match each type of radiation to its correct description.",
        pairs: [
          { left: "alpha radiation", right: "2 protons and 2 neutrons, charge +2" },
          { left: "beta radiation", right: "a fast-moving electron, charge -1" },
          { left: "gamma radiation", right: "a high-energy electromagnetic wave, no charge" },
          { left: "stops gamma radiation", right: "a few centimetres of lead" },
        ],
        ask: "Recall what each emission is made of and the charge it carries, then match the last item to what stops the most penetrating ray.",
        hints: [
          "Alpha is a helium nucleus with charge plus 2; beta is an electron with charge minus 1.",
          "Gamma is an electromagnetic wave with no charge and is only reduced by centimetres of lead.",
        ],
        explain: "Alpha is 2 protons and 2 neutrons with charge plus 2, beta is a fast electron with charge minus 1, and gamma is a high-energy electromagnetic wave with no charge. Gamma is the most penetrating and is only reduced by a few centimetres of lead.",
      },
      // 13 INTERACTIVE order: fission chain reaction
      {
        kind: "order",
        prompt: "Put these stages of a nuclear chain reaction in the correct order.",
        items: [
          "A slow neutron strikes a uranium 235 nucleus",
          "The nucleus becomes unstable and splits into 2 daughter nuclei",
          "2 or 3 more neutrons and energy are released",
          "These neutrons strike further uranium 235 nuclei",
          "The reaction spreads and continues as a chain reaction",
        ],
        ask: "Start from the first neutron hitting a nucleus and finish with the reaction spreading. Put the stages in order.",
        hints: [
          "A neutron must first be absorbed before the nucleus can split.",
          "The neutrons released by one split go on to cause further splits, which keeps the chain going.",
        ],
        explain: "A slow neutron strikes a uranium 235 nucleus, which becomes unstable and splits into 2 daughter nuclei. This releases 2 or 3 more neutrons and energy, and those neutrons strike further uranium nuclei, so the reaction spreads as a chain reaction.",
      },
      // 14 INTERACTIVE cloze: emissions
      {
        kind: "cloze",
        prompt: "Complete the passage about the 3 types of radiation.",
        segments: [
          "The most strongly ionising radiation, stopped by paper, is ",
          " radiation. A fast electron thrown out of the nucleus is a ",
          " particle. The radiation that has no charge and needs lead to reduce it is ",
          " radiation.",
        ],
        bank: ["alpha", "beta", "gamma", "proton"],
        answer: ["alpha", "beta", "gamma"],
        ask: "Match each description to its emission: which is stopped by paper, which is a fast electron, and which has no charge.",
        hints: [
          "The one stopped by paper and strongly ionising is alpha; the fast electron is beta.",
          "The uncharged ray that only lead reduces is gamma.",
        ],
        explain: "Alpha is the strongly ionising radiation stopped by paper, beta is the fast electron from the nucleus, and gamma is the uncharged radiation that needs lead to reduce it.",
      },
      // 15 INTERACTIVE spoterror: decay speeds up if heated
      {
        kind: "spoterror",
        prompt: "Here are 3 statements about radioactive decay. Tap the line that is wrong.",
        lines: [
          "Radioactive decay is a spontaneous process.",
          "Radioactive decay speeds up if you heat the source.",
          "Decay is random, so you cannot say when a given nucleus will decay.",
        ],
        errorLine: 1,
        ask: "Think about whether anything you do to a source, such as heating it, changes how fast it decays.",
        hints: [
          "Radioactive decay is not affected by temperature, pressure or chemical changes.",
          "The line that says heating speeds up the decay is wrong.",
        ],
        explain: "The wrong line says that heating speeds up the decay. Radioactive decay is spontaneous and random, and its rate is not changed by heating, cooling or pressure.",
      },
      // 16 INTERACTIVE slider calc: half-life mass
      {
        kind: "slider",
        prompt: "A radioactive sample has a mass of 240 g and a half-life of 6 years. Set the slider to the mass remaining after 18 years, in grams.",
        min: 0,
        max: 240,
        step: 1,
        unit: "g",
        start: 240,
        targetMin: 29,
        targetMax: 31,
        ask: "First find how many half-lives fit into 18 years, then halve the mass that many times.",
        hints: [
          "18 years divided by the 6 year half-life is 3 half-lives.",
          "Halving 240 3 times gives 30 grams.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{t}{t_{1/2}}" },
          { label: "Substitute", latex: "n = \\dfrac{18}{6} = 3\\ \\text{half-lives}" },
          { label: "Answer", latex: "240 \\div 2^{3} = 30\\ \\text{g}" },
        ],
        explain: "18 years is 3 half-lives of 6 years, so the mass halves 3 times: 240 to 120 to 60 to 30 grams.",
      },
      // 17 INTERACTIVE tiles calc: alpha decay equation
      {
        kind: "tiles",
        prompt: "A polonium 210 nucleus (proton number 84) decays by alpha emission to lead 206. Build the balanced nuclide equation.",
        tiles: [
          "^{210}_{84}\\text{Po}",
          "\\rightarrow",
          "^{206}_{82}\\text{Pb}",
          "+",
          "^{4}_{2}\\text{He}",
          "^{214}_{86}\\text{Rn}",
          "^{206}_{84}\\text{Po}",
        ],
        answer: [
          "^{210}_{84}\\text{Po}",
          "\\rightarrow",
          "^{206}_{82}\\text{Pb}",
          "+",
          "^{4}_{2}\\text{He}",
        ],
        ask: "The alpha particle is a helium 4 nucleus. Take 4 off the nucleon number and 2 off the proton number to get the lead nuclide.",
        hints: [
          "The alpha particle is helium 4, with nucleon number 4 and proton number 2.",
          "Lead 206 has nucleon number 206 and proton number 82, so the numbers balance.",
        ],
        working: [
          { label: "Formula", latex: "^{A}_{Z}\\text{Po} \\rightarrow\\ ^{A-4}_{Z-2}\\text{X} + ^{4}_{2}\\text{He}" },
          { label: "Substitute", latex: "^{210}_{84}\\text{Po} \\rightarrow\\ ^{206}_{82}\\text{X} + ^{4}_{2}\\text{He}" },
          { label: "Answer", latex: "^{210}_{84}\\text{Po} \\rightarrow\\ ^{206}_{82}\\text{Pb} + ^{4}_{2}\\text{He}" },
        ],
        explain: "In alpha decay polonium 210 loses 4 from its nucleon number and 2 from its proton number, becoming lead 206 plus a helium 4 nucleus. The nucleon numbers balance as 210 equals 206 + 4, and the proton numbers as 84 equals 82 + 2.",
      },
      // 18 INTERACTIVE graphpick: halving decay curve
      {
        kind: "graphpick",
        prompt: "Which graph shows how the count rate of a radioactive source changes with time?",
        xLabel: "time / half-lives",
        yLabel: "count rate / counts per second",
        options: [
          { points: [[0, 80], [1, 60], [2, 40], [3, 20], [4, 0]], caption: "Falls steadily in a straight line to zero" },
          { points: [[0, 40], [1, 40], [2, 40], [3, 40], [4, 40]], caption: "Stays constant with time" },
          { points: [[0, 80], [1, 40], [2, 20], [3, 10], [4, 5]], caption: "Halves in each equal time interval, never reaching zero" },
          { points: [[0, 5], [1, 10], [2, 20], [3, 40], [4, 80]], caption: "Rises with time" },
        ],
        correct: 2,
        ask: "After each half-life the count rate halves, and the curve gets closer to zero without ever reaching it. Which graph does that?",
        hints: [
          "The count rate does not fall by the same amount each time; it halves each half-life.",
          "The right graph drops quickly at first, then flattens as it approaches but never reaches zero.",
        ],
        explain: "The correct graph halves in each half-life, from 80 to 40 to 20 to 10 to 5, so it falls steeply at first and then flattens, getting closer to zero without ever reaching it. A radioactive source does not decay in a straight line.",
      },
      // 19 INTERACTIVE classify: natural vs artificial background
      {
        kind: "classify",
        prompt: "Sort each source of background radiation by whether it is natural or artificial (man-made).",
        bins: ["Natural source", "Artificial (man-made) source"],
        items: [
          { text: "rocks and soil in the ground", bin: 0 },
          { text: "cosmic rays from space", bin: 0 },
          { text: "radon gas in the air", bin: 0 },
          { text: "medical X-rays", bin: 1 },
          { text: "waste from nuclear power stations", bin: 1 },
          { text: "fallout from nuclear weapons testing", bin: 1 },
        ],
        ask: "Natural sources are always there in the environment; artificial sources come from human activity. Tap each source and drop it in its bin.",
        hints: [
          "Rocks, soil, radon and cosmic rays are all natural background.",
          "X-rays, nuclear waste and weapons fallout come from human activity, so they are artificial.",
        ],
        explain: "Rocks and soil, cosmic rays and radon gas are natural sources of background radiation. Medical X-rays, waste from power stations and weapons fallout are artificial, man-made sources.",
      },
      // 20 INTERACTIVE spoterror: nucleon number in beta decay
      {
        kind: "spoterror",
        prompt: "Here are 3 statements about beta decay. Tap the line that is wrong.",
        lines: [
          "In beta decay a neutron changes into a proton.",
          "In beta decay the proton number rises by 1.",
          "In beta decay the nucleon number rises by 1.",
        ],
        errorLine: 2,
        ask: "In beta decay a neutron turns into a proton. Think about whether the total number of nucleons changes when that happens.",
        hints: [
          "A neutron becoming a proton keeps the total number of nucleons the same.",
          "The line that says the nucleon number rises by 1 is wrong; it stays unchanged.",
        ],
        explain: "The wrong line says the nucleon number rises by 1. In beta decay a neutron turns into a proton, so the proton number rises by 1 but the nucleon number is unchanged.",
      },
      // 21 OPEN: 3 emissions
      {
        kind: "open",
        prompt: "Describe alpha, beta and gamma radiation. For each, state what it is, the charge it carries, and how easily it is stopped.",
        figure: "fig-22-03-penetrating-power",
        modelAnswer: "Alpha radiation is a helium nucleus of 2 protons and 2 neutrons, charge plus 2. It is very strongly ionising but very weakly penetrating, and is stopped by a sheet of paper. Beta radiation is a fast electron from the nucleus, charge minus 1. It is moderately ionising and penetrating, and is stopped by a few millimetres of aluminium. Gamma radiation is a high-energy electromagnetic wave with no charge. It is weakly ionising but very penetrating, and is only reduced by a few centimetres of lead.",
        marks: [
          "Alpha is a helium nucleus, charge plus 2, stopped by paper.",
          "Beta is a fast electron, charge minus 1, stopped by a few millimetres of aluminium.",
          "Gamma is an electromagnetic wave, no charge, reduced only by centimetres of lead.",
        ],
        ask: "For each radiation say what it is made of, the charge it carries, and the material that stops or reduces it.",
      },
      // 22 OPEN: spontaneous and random
      {
        kind: "open",
        prompt: "Explain what is meant by saying that radioactive decay is both spontaneous and random.",
        modelAnswer: "Spontaneous means the decay happens on its own and is not triggered or affected by outside conditions such as temperature, pressure or chemical changes. Random means you cannot predict which nucleus will decay next or exactly when a particular nucleus will decay; you can only give the probability that a nucleus decays in a certain time.",
        marks: [
          "Spontaneous: decay is not affected by temperature, pressure or chemistry.",
          "Random: you cannot predict when a given nucleus will decay.",
          "You can only give the chance or probability of decay in a time.",
        ],
        ask: "Explain one word at a time: what does spontaneous tell you about outside conditions, and what does random tell you about predicting a single nucleus?",
      },
      // 23 OPEN: fission vs fusion
      {
        kind: "open",
        prompt: "Explain the difference between nuclear fission and nuclear fusion, and state one place each happens.",
        modelAnswer: "In nuclear fission a heavy nucleus, such as uranium 235, splits into 2 lighter daughter nuclei when it absorbs a neutron, releasing more neutrons and energy. This happens in nuclear power reactors. In nuclear fusion 2 light nuclei, such as hydrogen 2 and hydrogen 3, join together to form a heavier nucleus, releasing energy. It needs very high temperature and pressure and happens in the Sun and other stars. Both release energy from the nuclear store.",
        marks: [
          "Fission is a heavy nucleus splitting into 2 lighter nuclei, releasing energy.",
          "Fusion is 2 light nuclei joining into a heavier nucleus, releasing energy.",
          "Fission occurs in reactors; fusion occurs in the Sun and needs very high temperature and pressure.",
        ],
        ask: "Say whether each process splits a nucleus or joins nuclei, and name one place each one takes place.",
      },
      // 24 OPEN: thickness gauge use
      {
        kind: "open",
        prompt: "A factory uses a radioactive source and a detector to keep sheets of aluminium foil at a constant thickness. Explain how this thickness gauge works and why a beta source is chosen.",
        figure: "fig-22-09-thickness-monitoring",
        modelAnswer: "A beta source is placed on one side of the moving foil and a detector on the other side. The detector measures the count rate of the radiation passing through. If the foil gets thicker, more beta is absorbed and the count rate falls; if it gets thinner, less is absorbed and the count rate rises. The reading controls the rollers to keep the thickness constant. Beta is chosen because alpha would be stopped completely by the foil and gamma would pass straight through almost unchanged, so only beta gives a count rate that varies with the thickness.",
        marks: [
          "The count rate through the foil is measured; thicker foil gives a lower count, thinner foil a higher count.",
          "The reading adjusts the rollers to keep the thickness constant.",
          "Beta is used because alpha would be fully absorbed and gamma would pass through with little change.",
        ],
        ask: "Describe what happens to the count rate as the foil gets thicker or thinner, and explain why beta suits thin foil better than alpha or gamma.",
      },
      // 25 OPEN: safety precautions
      {
        kind: "open",
        prompt: "Ionising radiation can damage living cells. State and explain 3 precautions a worker should take when handling a radioactive source.",
        modelAnswer: "First, use shielding: keep the source in a lead-lined box or behind a lead screen so that the radiation is absorbed before it reaches people. Second, keep your distance: handle the source with long tongs and stand further away, because the radiation spreads out and its effect is much weaker at a greater distance. Third, limit the time: spend as little time as possible near the source, because a shorter exposure means a smaller dose. Workers may also wear a dose badge to monitor how much radiation they receive.",
        marks: [
          "Shielding: keep the source behind lead or in a lead-lined box.",
          "Distance: use tongs and stay further away so the radiation is weaker.",
          "Time: limit the time of exposure to reduce the dose.",
        ],
        ask: "Think about the 3 ways to cut the dose you receive: putting something in the way, increasing the gap, and shortening the exposure.",
      },
    ],
  },
];
