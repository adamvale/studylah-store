import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, Revision 1. Checkpoint over KB Chapter 22, sections
// t20.1 to t20.3: the atom and isotopes, the 3 emissions, and nuclide
// equations. Question-only: 5 choice, 5 interactive, 2 open.

export const BOXES: Subconcept[] = [
  {
    id: "t20.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: the atom, alpha-beta-gamma and nuclide equations",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which of these particles carries no charge?",
        options: ["A proton", "An electron", "A neutron", "An alpha particle"],
        correct: 2,
        ask: "Recall the charge on each one. The proton is positive and the electron is negative. Which particle has no charge at all?",
        hints: [
          "A proton carries a charge of plus 1 and an electron a charge of minus 1.",
          "The neutron is the neutral particle, with no charge, and it sits in the nucleus.",
        ],
        explain: "The neutron carries no charge. A proton is positive, an electron is negative and an alpha particle is positive, so the neutron is the only neutral particle here.",
      },
      {
        kind: "choice",
        question: "A vanadium 51 nucleus has proton number 23. How many neutrons does it contain?",
        options: ["28", "23", "51", "74"],
        correct: 0,
        ask: "The number of neutrons is the nucleon number minus the proton number. Take 23 away from 51.",
        hints: [
          "Number of neutrons equals the nucleon number minus the proton number.",
          "51 - 23 is 28, so there are 28 neutrons.",
        ],
        working: [
          { label: "Formula", latex: "N = A - Z" },
          { label: "Substitute", latex: "N = 51 - 23" },
          { label: "Answer", latex: "N = 28" },
        ],
        explain: "There are 28 neutrons, because the nucleon number 51 minus the proton number 23 leaves 28 neutrons.",
      },
      {
        kind: "choice",
        question: "2 isotopes of the same element always have the same...",
        options: ["number of neutrons", "nucleon number", "mass of each atom", "number of protons"],
        correct: 3,
        ask: "Isotopes are atoms of the same element. What single number stays fixed for every atom of one element?",
        hints: [
          "Isotopes have the same proton number but different numbers of neutrons.",
          "Because they are the same element, the number of protons is unchanged, while the neutron count and nucleon number differ.",
        ],
        explain: "Isotopes always have the same number of protons, because that is what makes them the same element. Their neutron numbers, nucleon numbers and atomic masses differ.",
      },
      {
        kind: "choice",
        question: "Uranium 238, with proton number 92, decays by alpha emission. Which nuclide is produced?",
        figure: "fig-22-02-nuclide-notation",
        options: ["uranium 234", "thorium 234", "thorium 238", "radium 234"],
        correct: 1,
        ask: "In alpha decay the nucleon number falls by 4 and the proton number falls by 2. Start from uranium 238 with proton number 92.",
        hints: [
          "An alpha particle is a helium nucleus, so the nucleon number drops by 4 and the proton number drops by 2.",
          "238 - 4 is 234, and 92 - 2 is 90, which is the element thorium.",
        ],
        working: [
          { label: "Formula", latex: "^{A}_{Z}\\text{U} \\rightarrow \\ ^{A-4}_{Z-2}\\text{X} + \\ ^{4}_{2}\\text{He}" },
          { label: "Substitute", latex: "^{238}_{92}\\text{U} \\rightarrow \\ ^{234}_{90}\\text{X} + \\ ^{4}_{2}\\text{He}" },
          { label: "Answer", latex: "^{234}_{90}\\text{Th}" },
        ],
        explain: "Uranium 238 emits an alpha particle, so the nucleon number falls by 4 to 234 and the proton number falls by 2 to 90. The element with proton number 90 is thorium, giving thorium 234.",
      },
      {
        kind: "choice",
        question: "Which radiation is the most strongly ionising but is stopped by a sheet of paper?",
        figure: "fig-22-03-penetrating-power",
        options: ["Gamma radiation", "Beta radiation", "Alpha radiation", "X-radiation"],
        correct: 2,
        ask: "Think about which radiation ionises most strongly yet cannot even get through a sheet of paper.",
        hints: [
          "Alpha is the most strongly ionising and the least penetrating of the 3.",
          "Beta passes through paper, and gamma passes through paper and aluminium, so the one stopped by paper is alpha.",
        ],
        explain: "Alpha radiation is the most strongly ionising and the least penetrating, so a sheet of paper stops it. Beta and gamma are far more penetrating.",
      },
      {
        kind: "match",
        prompt: "Match each type of radiation to the material that stops it.",
        pairs: [
          { left: "Alpha", right: "a sheet of paper" },
          { left: "Beta", right: "a few millimetres of aluminium" },
          { left: "Gamma", right: "a few centimetres of lead" },
        ],
        ask: "Rank the 3 by how easily they are stopped. Alpha is stopped most easily and gamma the hardest.",
        hints: [
          "Alpha is stopped by paper, beta needs a few millimetres of aluminium, and gamma needs a few centimetres of lead.",
          "The more penetrating the radiation, the denser and thicker the material needed to stop it.",
        ],
        explain: "Alpha is stopped by a sheet of paper, beta by a few millimetres of aluminium, and gamma only by a few centimetres of lead, in order of increasing penetrating power.",
      },
      {
        kind: "classify",
        prompt: "Sort each particle or ray by its charge.",
        bins: ["Positive charge", "Negative charge", "No charge"],
        items: [
          { text: "proton", bin: 0 },
          { text: "alpha particle", bin: 0 },
          { text: "electron", bin: 1 },
          { text: "beta particle", bin: 1 },
          { text: "neutron", bin: 2 },
          { text: "gamma ray", bin: 2 },
        ],
        ask: "Recall the charge on each one. A proton and an alpha particle are positive, and an electron and a beta particle are negative. Which 2 carry no charge?",
        hints: [
          "The proton and the alpha particle are positive, while the electron and the beta particle are negative.",
          "The neutron and the gamma ray both carry no charge.",
        ],
        explain: "The proton and alpha particle are positive, the electron and beta particle are negative, and the neutron and gamma ray have no charge.",
      },
      {
        kind: "order",
        prompt: "Put the 3 emissions in order from least penetrating to most penetrating.",
        items: [
          "Alpha, stopped by a sheet of paper",
          "Beta, stopped by a few millimetres of aluminium",
          "Gamma, reduced only by a few centimetres of lead",
        ],
        ask: "Start with the one a sheet of paper can stop, and end with the one that needs thick lead.",
        hints: [
          "Alpha is the least penetrating and gamma is the most penetrating.",
          "The order of increasing penetration is alpha, then beta, then gamma.",
        ],
        explain: "From least to most penetrating the order is alpha, then beta, then gamma, matching paper, then aluminium, then lead.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of what changes in each type of decay.",
        segments: [
          "In alpha decay the nucleon number falls by ",
          ", while in beta decay the nucleon number stays ",
          " and the proton number rises by ",
          ".",
        ],
        bank: ["4", "the same", "1", "2", "larger"],
        answer: ["4", "the same", "1"],
        ask: "Recall that an alpha particle carries away 4 nucleons, and that beta decay turns a neutron into a proton without changing the nucleon count.",
        hints: [
          "Alpha decay removes 2 protons and 2 neutrons, so the nucleon number drops by 4.",
          "In beta decay the nucleon number is unchanged while the proton number goes up by 1.",
        ],
        explain: "In alpha decay the nucleon number falls by 4. In beta decay the nucleon number stays the same and the proton number rises by 1, because a neutron turns into a proton.",
      },
      {
        kind: "spoterror",
        prompt: "Here are four statements about the 3 emissions. Tap the statement that is wrong.",
        lines: [
          "Alpha radiation is a helium nucleus with charge +2",
          "Beta radiation is a fast-moving electron",
          "Gamma radiation is a charged particle",
          "Gamma radiation is stopped only by thick lead",
        ],
        errorLine: 2,
        ask: "Check the charge on each emission. Alpha and beta are charged, but think about whether gamma, an electromagnetic wave, carries any charge.",
        hints: [
          "Gamma radiation is a high-energy electromagnetic wave.",
          "An electromagnetic wave carries no charge, so calling gamma a charged particle is the mistake.",
        ],
        explain: "The wrong statement is that gamma radiation is a charged particle. Gamma is a high-energy electromagnetic wave with no charge, which is why it is not deflected in a field.",
      },
      {
        kind: "open",
        prompt: "Describe the structure of an atom. Name the particles found in the nucleus and their charges, and state where almost all of the atom's mass is located.",
        figure: "fig-22-01-atom-structure",
        modelAnswer: "An atom has a tiny central nucleus containing protons, each with a charge of plus 1, and neutrons, which have no charge. Protons and neutrons together are called nucleons. Electrons, each with a charge of minus 1, move around the nucleus in outer shells. Almost all of the atom's mass is in the nucleus, because an electron is only about 1 ÷ 1840 as heavy as a nucleon. A neutral atom has equal numbers of protons and electrons.",
        marks: [
          "Nucleus contains protons (charge +1) and neutrons (no charge).",
          "Electrons (charge -1) move in shells outside the nucleus.",
          "Almost all the mass is in the nucleus.",
        ],
        ask: "Think about the 3 particles, the charge on each, and which of them are packed into the central nucleus.",
      },
      {
        kind: "open",
        prompt: "Explain what is meant by isotopes. State one way in which 2 isotopes of the same element are the same, and one way in which they differ.",
        modelAnswer: "Isotopes are atoms of the same element, so they have the same proton number, but they have different numbers of neutrons and so different nucleon numbers. Because they are the same element with the same number of protons, they have the same chemical properties. They differ in the number of neutrons, which changes the nucleon number and the mass of each atom.",
        marks: [
          "Isotopes have the same proton number (same element).",
          "They have different numbers of neutrons, so different nucleon numbers.",
          "Same chemical properties; different atomic mass.",
        ],
        ask: "Isotopes are the same element. Think about which number that fixes, and which number is free to change.",
      },
    ],
  },
];
