import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, section 2. Grounded in KB Chapter 22 (sections 22.4, 22.5).
// Conceptual box: NO formula fields, NO working. Figure colours follow the house palette:
// an alpha particle/ray = red, a beta particle/ray = blue, a gamma ray = green; a proton = red,
// a neutron = grey, an electron = blue; nucleus outline, plates, labels, foil and detector = white/grey;
// field lines and guide lines = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t20.2",
    code: "T20.2",
    title: "Nuclear decay: alpha, beta and gamma",
    blurb: "Why unstable nuclei give out radiation, and the nature of the 3 emissions",
    steps: [
      {
        kind: "concept",
        heading: "Unstable nuclei decay",
        body: "An *unstable* nucleus has too much energy, so it gives out radiation to become more stable. This giving out of radiation is called *nuclear decay* (radioactive decay).",
        say: "Some nuclei are unstable, carrying more energy than they can hold on to. To settle down, an unstable nucleus throws out radiation. We call that process nuclear decay, or radioactive decay. The nucleus changes as it happens.",
      },
      {
        kind: "concept",
        heading: "Spontaneous and random",
        body: "Nuclear decay is *spontaneous*, so it is not triggered by temperature or pressure, and it is *random*, so you cannot predict when a given nucleus will decay.",
        say: "2 words describe how decay happens. It is spontaneous, meaning nothing sets it off. Heating, cooling, squeezing or any chemical change makes no difference at all. It is also random, so even though a nucleus will decay sooner or later, you can never say exactly when a particular one will go.",
      },
      {
        kind: "concept",
        heading: "The alpha particle",
        figure: "fig-22-03-penetrating-power",
        body: "An *alpha* particle is 2 protons and 2 neutrons, a *helium nucleus*, with charge plus 2. It is *very highly ionising* but very weakly penetrating, and is stopped by a sheet of paper.",
        say: "The first emission is the alpha particle, drawn in red. It is 2 protons and 2 neutrons locked together, which is a helium nucleus, so it carries a charge of plus 2. Being heavy and highly charged it rips electrons off atoms as it goes, so it is very highly ionising. But it loses its energy quickly, so it is very weakly penetrating and a single sheet of paper stops it.",
      },
      {
        kind: "concept",
        heading: "The beta particle",
        figure: "fig-22-06-beta-emission",
        body: "A *beta* particle is a fast *electron*, made when a *neutron turns into a proton* inside the nucleus. Its charge is minus 1. It is medium ionising and medium penetrating, and is stopped by a few millimetres of aluminium.",
        say: "The second emission is the beta particle, drawn in blue. Inside the nucleus a grey neutron changes into a red proton, which stays behind, and a blue electron that is flung out at high speed. That fast electron is the beta particle, with a charge of minus 1. It is middling on both counts, medium ionising and medium penetrating, and a few millimetres of aluminium will stop it.",
      },
      {
        kind: "concept",
        heading: "The gamma ray",
        body: "A *gamma* ray is a high-energy *electromagnetic wave* with *no charge*. It is very weakly ionising but very highly penetrating, and is only reduced by several centimetres of lead.",
        say: "The third emission is the gamma ray, drawn in green. It is not a particle at all but a burst of high-energy electromagnetic wave, so it carries no charge. It barely ionises the atoms it passes, so it is very weakly ionising, yet it is very highly penetrating. Nothing stops it completely, and it takes several centimetres of lead just to cut it down.",
      },
      {
        kind: "concept",
        heading: "Bending in a field",
        figure: "fig-22-04-deflection-field",
        body: "Between charged plates the *alpha* bends toward the *negative* plate, the *beta* bends the opposite way toward the positive plate and further, and the gamma passes straight through undeflected.",
        say: "Send the 3 emissions between 2 charged plates and their charges show. In the picture the top plate is positive and the bottom plate is negative, with grey field lines between them. The red alpha, being positive, curves down toward the negative plate. The blue beta, being negative and much lighter, curves the opposite way toward the positive plate, and bends further. The green gamma has no charge, so it sails straight through undeflected.",
      },
      {
        kind: "choice",
        question: "You warm a radioactive source and then cool it. What happens to its decay?",
        options: [
          "It decays faster when warm",
          "It stops decaying when cool",
          "Its decay is unchanged, because decay is spontaneous",
          "It only decays under high pressure",
        ],
        correct: 2,
        ask: "Recall the 2 words that describe decay. One of them, spontaneous, tells you what temperature and pressure do.",
        hints: [
          "Decay is spontaneous, so it is not triggered by outside conditions.",
          "Heating, cooling and pressure make no difference to the rate of decay.",
        ],
        explain: "The decay is unchanged, because nuclear decay is spontaneous. It is not triggered by temperature or pressure, so warming or cooling the source does nothing to it.",
      },
      {
        kind: "choice",
        question: "Which emission is the most strongly ionising and the least penetrating?",
        options: [
          "Alpha",
          "Beta",
          "Gamma",
          "They are all equal",
        ],
        correct: 0,
        ask: "Think about the heavy, highly charged emission that a sheet of paper can stop.",
        hints: [
          "The most ionising emission also loses its energy fastest.",
          "It is the helium nucleus, stopped by paper.",
        ],
        explain: "Alpha is the answer, because it is very highly ionising but very weakly penetrating. A single sheet of paper stops it.",
      },
      {
        kind: "choice",
        question: "Which emission is the most penetrating, needing centimetres of lead to reduce it?",
        options: [
          "Alpha",
          "Beta",
          "An electron",
          "Gamma",
        ],
        correct: 3,
        ask: "Think about the emission that is an electromagnetic wave with no charge.",
        hints: [
          "The most penetrating emission is the one that is barely ionising.",
          "It is a high-energy electromagnetic wave, only cut down by lead.",
        ],
        explain: "Gamma is the answer, because it is very highly penetrating and only reduced by several centimetres of lead.",
      },
      {
        kind: "choice",
        question: "A source sits between a positive top plate and a negative bottom plate. Which row is correct?",
        options: [
          "Alpha bends to the positive plate; gamma bends to the negative plate",
          "Alpha bends to the negative plate; beta bends to the positive plate; gamma goes straight",
          "All 3 bend the same way",
          "Beta is undeflected; gamma bends to the positive plate",
        ],
        correct: 1,
        ask: "A positive alpha is pulled toward the opposite charge, and gamma has no charge at all.",
        hints: [
          "Opposite charges attract, so positive alpha goes to the negative plate.",
          "Beta is negative and goes the other way; gamma has no charge, so it is undeflected.",
        ],
        explain: "The alpha, being positive, bends to the negative plate. The beta, being negative, bends the opposite way to the positive plate. The gamma has no charge, so it passes straight through.",
      },
      {
        kind: "classify",
        prompt: "Sort each emission by the charge it carries.",
        bins: ["Positive charge", "Negative charge", "No charge"],
        items: [
          { text: "Alpha", bin: 0 },
          { text: "Beta", bin: 1 },
          { text: "Gamma", bin: 2 },
        ],
        ask: "Alpha is a helium nucleus, beta is an electron, and gamma is an electromagnetic wave. Match each to its charge and drop it in the bin.",
        hints: [
          "Alpha is 2 protons and 2 neutrons, so it is positive; beta is an electron, so it is negative.",
          "Gamma is a wave, not a particle, so it carries no charge.",
        ],
        explain: "Alpha has charge plus 2, so it is positive. Beta is an electron with charge minus 1, so it is negative. Gamma is an electromagnetic wave, so it has no charge.",
      },
      {
        kind: "match",
        prompt: "Match each emission to the material that stops or reduces it.",
        pairs: [
          { left: "Alpha", right: "A sheet of paper" },
          { left: "Beta", right: "A few millimetres of aluminium" },
          { left: "Gamma", right: "Several centimetres of lead" },
        ],
        ask: "The weaker the penetration, the thinner the stopping material. Start with the emission that paper alone can stop.",
        hints: [
          "Alpha is very weakly penetrating, so paper stops it.",
          "Beta needs a few millimetres of aluminium; gamma is only reduced by centimetres of lead.",
        ],
        explain: "Alpha is stopped by paper, beta by a few millimetres of aluminium, and gamma is only reduced by several centimetres of lead, matching their rising penetrating power.",
      },
      {
        kind: "spoterror",
        prompt: "One line about the 3 emissions is wrong. Find it.",
        lines: [
          "Alpha, beta and gamma are all given out by unstable nuclei.",
          "Alpha is a helium nucleus, stopped by a sheet of paper.",
          "Beta is a fast electron, stopped by a few millimetres of aluminium.",
          "Gamma is deflected toward the positive plate.",
        ],
        errorLine: 3,
        ask: "Check each line against what you know. The charge of gamma is the giveaway.",
        hints: [
          "Only charged emissions bend in a field.",
          "Gamma is an electromagnetic wave with no charge.",
        ],
        explain: "The fourth line is wrong. Gamma has no charge, so it is not deflected toward either plate. It passes straight through undeflected.",
      },
      {
        kind: "insight",
        body: "The 3 emissions run in a clear pattern: from *alpha* to *beta* to *gamma* the ionising power falls while the penetrating power rises.",
        say: "Hold on to one pattern. Going from alpha to beta to gamma, the ionising power drops steadily while the penetrating power climbs. Alpha ionises hardest but is stopped by paper, gamma barely ionises but slices through almost anything. Their charges, plus 2, minus 1 and none, also decide how each one bends in a field.",
      },
    ],
  },
];
