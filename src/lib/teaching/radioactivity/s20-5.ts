import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, section 5. Grounded in KB Chapter 22 (sections 22.10, 22.11, 22.12).
// Figure colours follow the house palette: a neutron = grey, the nucleus = grey,
// energy released = amber. Colour each element by name; describe only what is drawn; digits.

export const BOXES: Subconcept[] = [
  {
    id: "t20.5",
    code: "T20.5",
    title: "Nuclear fission and nuclear fusion",
    blurb: "Splitting heavy nuclei and joining light ones, and the energy each releases",
    steps: [
      {
        kind: "concept",
        heading: "What nuclear fission is",
        figure: "fig-22-07-nuclear-fission",
        body: "*Nuclear fission* is a *heavy nucleus splitting* into 2 lighter *daughter nuclei*, releasing a large amount of *energy*.",
        say: "In the picture a small grey neutron on the left flies into a large grey uranium 235 nucleus. The nucleus splits into 2 lighter grey daughter nuclei that fly apart, and an amber burst shows the energy released. Nuclear fission is that splitting of one heavy nucleus into 2 lighter ones, and it gives out a large amount of energy.",
      },
      {
        kind: "concept",
        heading: "A neutron starts it off",
        body: "Fission is triggered when a *neutron* hits the heavy nucleus. A neutron is *neutral*, so it is *not repelled* and can reach the nucleus. The split then throws out 2 or 3 *more neutrons*.",
        formula: {
          latex:
            "^{1}_{0}\\text{n} + ^{235}_{92}\\text{U} \\rightarrow ^{89}_{36}\\text{Kr} + ^{144}_{56}\\text{Ba} + 3\\,^{1}_{0}\\text{n}",
        },
        say: "To start fission you fire a neutron at the heavy nucleus. Because a neutron carries no charge it is not repelled by the positive nucleus, so it can get right in. When uranium 235 splits it throws out 2 or 3 fresh neutrons, as well as the 2 daughter nuclei. Notice the nucleon numbers add to 236 on each side and the proton numbers add to 92 on each side.",
      },
      {
        kind: "concept",
        heading: "A chain reaction, kept controlled",
        body: "Each spare *neutron* can split another nucleus, which frees more neutrons, and so on: a *chain reaction*. In a nuclear *reactor* this is kept controlled, using uranium or plutonium fuel.",
        say: "Those spare neutrons are the key. Each one can strike another nucleus and split it, releasing yet more neutrons, so the reaction grows on itself. That is a chain reaction. In a power station reactor the chain reaction is held steady and controlled, using uranium or plutonium as the fuel, so the energy is released at a safe steady rate.",
      },
      {
        kind: "concept",
        heading: "What nuclear fusion is",
        figure: "fig-22-08-nuclear-fusion",
        body: "*Nuclear fusion* is *2 light nuclei joining* into one heavier nucleus, also releasing *energy*. For example, deuterium and tritium fuse into helium and a neutron.",
        formula: {
          latex:
            "^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\rightarrow ^{4}_{2}\\text{He} + ^{1}_{0}\\text{n}",
        },
        say: "In this picture a hydrogen 2 nucleus, called deuterium, and a hydrogen 3 nucleus, called tritium, rush together and merge. They form a single heavier helium 4 nucleus plus a spare grey neutron, and an amber burst shows the energy released. Fusion is the opposite of fission: instead of splitting a heavy nucleus, you join 2 light nuclei into one.",
      },
      {
        kind: "concept",
        heading: "Fusion needs extreme conditions",
        body: "Both nuclei are *positive*, so they *repel*. To force them close enough to fuse needs *very high temperature and pressure*, as in the Sun. This makes fusion harder to achieve than fission.",
        say: "There is a catch with fusion. Both nuclei are positively charged, so they push each other away. To drive them close enough to join you need enormous temperature and pressure, the kind found in the core of the Sun, where fusion powers the star. Those extreme conditions are why fusion is much harder to bring about on Earth than fission.",
      },
      {
        kind: "insight",
        body: "In *both* processes the *nucleon number* and the *charge* are conserved, and the released energy comes from the nuclear store of the atom.",
        say: "Here is the idea to keep. Whether a nucleus splits or 2 nuclei join, the total nucleon number and the total charge are the same before and after, so nothing is lost from the bookkeeping. The energy that pours out in either case comes from the nuclear store inside the atom.",
      },
      {
        kind: "choice",
        question: "Which statement describes nuclear fission?",
        options: [
          "2 light nuclei join to form a heavier nucleus.",
          "A heavy nucleus splits into 2 lighter nuclei.",
          "A nucleus emits a gamma ray and keeps the same nucleons.",
          "An electron is thrown out when a neutron becomes a proton.",
        ],
        correct: 1,
        ask: "Fission means splitting. Which option starts with one heavy nucleus and ends with 2 lighter ones?",
        hints: [
          "Fission breaks a heavy nucleus apart; fusion joins light nuclei.",
          "Look for the option about a heavy nucleus splitting into 2 lighter nuclei.",
        ],
        explain: "Fission is a heavy nucleus splitting into 2 lighter daughter nuclei. Joining light nuclei is fusion instead.",
      },
      {
        kind: "choice",
        question: "Why is a neutron, rather than a proton, fired at the nucleus to start fission?",
        options: [
          "A neutron is heavier, so it hits harder.",
          "A neutron travels faster than a proton.",
          "A neutron has no charge, so it is not repelled by the nucleus.",
          "A neutron is already part of the daughter nuclei.",
        ],
        correct: 2,
        ask: "The nucleus is positively charged. Think about which particle it would push away and which it would let through.",
        hints: [
          "A proton is positive, so the positive nucleus repels it.",
          "A neutron is neutral, so there is no repulsion to stop it reaching the nucleus.",
        ],
        explain: "A neutron is neutral, so it is not repelled by the positive nucleus and can reach it. A positive proton would be pushed away.",
      },
      {
        kind: "choice",
        question: "Complete the fission: ^{1}_{0}n + ^{235}_{92}U -> ^{140}_{54}Xe + ^{94}_{38}Sr + ? neutrons. How many neutrons?",
        options: ["1 neutron", "2 neutrons", "3 neutrons", "0 neutrons"],
        correct: 1,
        ask: "The nucleon numbers must balance. The left side totals 236, so work out what the 2 named daughters leave over.",
        hints: [
          "Add the nucleon numbers on the left: 1 + 235 is 236.",
          "140 + 94 is 234, so 2 nucleons remain, which is 2 neutrons.",
        ],
        working: [
          { label: "Balance nucleon number", latex: "1 + 235 = 140 + 94 + n" },
          { label: "Substitute", latex: "236 = 234 + n" },
          { label: "Answer", latex: "n = 2\\ \\text{neutrons}" },
        ],
        explain: "The left side has 236 nucleons and the 2 daughters take 234, so 2 neutrons are released. The proton numbers also balance: 92 equals 54 + 38.",
      },
      {
        kind: "choice",
        question: "Why does nuclear fusion need very high temperature and pressure?",
        options: [
          "The nuclei are positive and repel, so they must be forced close together.",
          "A neutron must be slowed down before it can join the nuclei.",
          "The daughter nuclei need heating before they will split.",
          "Gamma rays are only released when the fuel is hot.",
        ],
        correct: 0,
        ask: "Both nuclei carry the same sign of charge. Think about what that does when you try to push them together.",
        hints: [
          "2 positive nuclei repel each other.",
          "You need very high temperature and pressure to overcome that repulsion and force them to touch.",
        ],
        explain: "Both nuclei are positive and repel each other, so very high temperature and pressure are needed to force them close enough to fuse.",
      },
      {
        kind: "choice",
        question: "The Sun releases its energy mainly by which process?",
        options: [
          "Alpha decay of heavy nuclei",
          "Nuclear fission of uranium",
          "Chemical burning of gas",
          "Nuclear fusion of light nuclei",
        ],
        correct: 3,
        ask: "The Sun joins light nuclei together at enormous temperature. Which process is that?",
        hints: [
          "The Sun is not burning fuel chemically and is not splitting uranium.",
          "It joins light nuclei such as hydrogen, which is fusion.",
        ],
        explain: "The Sun shines by nuclear fusion, joining light nuclei at very high temperature and pressure. Fission splits heavy nuclei instead.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement under the process it describes.",
        bins: ["Nuclear fission", "Nuclear fusion"],
        items: [
          { text: "A heavy nucleus splits into 2 lighter nuclei", bin: 0 },
          { text: "Started by a neutron striking the nucleus", bin: 0 },
          { text: "Spare neutrons cause a chain reaction", bin: 0 },
          { text: "2 light nuclei join into a heavier nucleus", bin: 1 },
          { text: "Powers the Sun", bin: 1 },
          { text: "Needs very high temperature and pressure to overcome repulsion", bin: 1 },
        ],
        ask: "Fission splits a heavy nucleus and runs as a chain reaction; fusion joins light nuclei and needs extreme heat. Tap each statement and drop it in its bin.",
        hints: [
          "Anything about splitting, neutrons and chain reactions is fission.",
          "Anything about joining light nuclei, the Sun, or extreme temperature is fusion.",
        ],
        explain: "Fission is splitting a heavy nucleus, started by a neutron, with a chain reaction. Fusion is joining light nuclei, needs very high temperature and pressure, and powers the Sun.",
      },
      {
        kind: "spoterror",
        prompt: "One line about fusion is wrong. Find it.",
        lines: [
          "Nuclear fusion joins 2 light nuclei into one heavier nucleus.",
          "Fusion splits a heavy nucleus into 2 lighter nuclei.",
          "Fusion needs very high temperature and pressure to overcome repulsion.",
          "Fusion releases energy and powers the Sun.",
        ],
        errorLine: 1,
        ask: "Check which line describes splitting rather than joining. That is the opposite of what fusion does.",
        hints: [
          "Fusion means joining, not splitting.",
          "The line saying fusion splits a heavy nucleus is really describing fission.",
        ],
        explain: "The wrong line says fusion splits a heavy nucleus. Fusion joins 2 light nuclei into a heavier one; it is fission that splits a heavy nucleus.",
      },
    ],
  },
];
