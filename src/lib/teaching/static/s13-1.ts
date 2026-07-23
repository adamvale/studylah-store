import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, section 1. Grounded in KB Chapter 15 (Static Electricity) sections 15.1, 15.2.
// Conceptual box: no calculations, no working, no formula fields anywhere.
// Figure colours follow the T13 colour key: positive charge = red, negative charge = blue,
// moving electrons and motion = amber, neutral objects = white (neutrons drawn grey in fig-15-01).

export const BOXES: Subconcept[] = [
  {
    id: "t13.1",
    code: "T13.1",
    title: "Electric charge and the atom",
    blurb: "What charge is, where it comes from inside the atom, and how charges push and pull",
    steps: [
      {
        kind: "concept",
        heading: "Inside the atom",
        figure: "fig-15-01-atom-structure",
        body: "Every atom has a tiny central *nucleus* holding *protons* (positive) and neutrons (no charge), with *electrons* (negative) moving around the outside.",
        say: "In the picture the atom has a small cluster at its centre, the nucleus. Inside it the red balls are protons, which carry positive charge, and the grey balls are neutrons, which carry no charge. Around the nucleus the blue balls are electrons, and each electron carries a negative charge. So all the positive charge sits packed in the middle, and the negative charge circles around the edge.",
      },
      {
        kind: "concept",
        heading: "Charge is measured in coulombs",
        body: "*Charge* is measured in *coulombs*, symbol C. A single *proton* carries a charge of positive 1.60 × 10 to the power negative 19 coulombs, and an *electron* carries the same size of charge but negative.",
        say: "We measure charge in units called coulombs. One proton carries a charge of 1.60 times 10 to the power negative 19 coulombs, and that value is positive. One electron carries exactly the same size of charge, 1.60 times 10 to the power negative 19 coulombs, but its charge is negative. Because the 2 are equal in size and opposite in sign, they cancel perfectly.",
      },
      {
        kind: "concept",
        heading: "Neutral means balanced",
        body: "A *neutral* atom has equal numbers of protons and electrons, so the positive and negative charges cancel. Charging an object moves *only electrons*: *gaining* electrons makes it negative, losing electrons makes it positive.",
        say: "An uncharged, or neutral, atom holds the same number of protons as electrons, so the positive and negative charges balance out to nothing. To charge an object we never move the protons, which stay locked in the nucleus. We only ever move electrons. If an object gains extra electrons it becomes negative, and if it loses electrons it is left positive.",
      },
      {
        kind: "concept",
        heading: "The law of charges",
        figure: "fig-15-02-charge-interaction",
        body: "*Unlike charges attract* and *like charges repel*. This is the basic *law* of electric charge.",
        say: "This figure has 2 panels. On the left, unlike charges attract: a red positive charge and a blue negative charge are pulled together. On the right, like charges repel: 2 red positive charges are pushed apart, and 2 blue negative charges are pushed apart as well. So opposite signs pull together, and matching signs push away.",
      },
      {
        kind: "choice",
        question: "Which particle in an atom carries a positive charge?",
        options: ["Proton", "Neutron", "Electron", "None of them"],
        correct: 0,
        ask: "Think about the 3 particles: 1 is positive, 1 is negative, and 1 has no charge. Which one is the positive one?",
        hints: [
          "The positive particles sit in the nucleus alongside the neutral neutrons.",
          "Electrons are negative and neutrons have no charge, so that leaves the proton.",
        ],
        explain: "The proton carries the positive charge. Electrons are negative and neutrons have no charge, so the proton is the only positive particle.",
      },
      {
        kind: "choice",
        question: "A neutral cloth is rubbed and gains extra electrons. What is its overall charge afterwards?",
        options: ["Positive", "Negative", "Neutral", "It has no charge"],
        correct: 1,
        ask: "Electrons are negative. If an object collects extra negative electrons, which way does its overall charge tip?",
        hints: [
          "Gaining electrons adds negative charge to the object.",
          "Extra electrons means extra negative charge, so the object ends up negative.",
        ],
        explain: "Gaining electrons makes the cloth negative, because each extra electron adds negative charge and the object no longer has equal positive and negative charge.",
      },
      {
        kind: "choice",
        question: "What is the charge on a single proton?",
        options: [
          "Zero, it is neutral",
          "1 C, positive",
          "1.60 x 10^-19 C, negative",
          "1.60 x 10^-19 C, positive",
        ],
        correct: 3,
        ask: "A proton is positive, and its charge has the same size as an electron's. Which option is positive with that value?",
        hints: [
          "The proton is positive, so rule out the neutral and the negative options.",
          "The proton charge is 1.60 × 10 to the power negative 19 coulombs, and it is positive.",
        ],
        explain: "The proton charge is 1.60 × 10 to the power negative 19 coulombs, and it is positive. An electron has the same size of charge but negative.",
      },
      {
        kind: "classify",
        prompt: "Sort each pair of charges by whether they attract or repel.",
        bins: ["Attract", "Repel"],
        items: [
          { text: "A positive charge near a negative charge", bin: 0 },
          { text: "A negative charge near a positive charge", bin: 0 },
          { text: "2 positive charges", bin: 1 },
          { text: "2 negative charges", bin: 1 },
        ],
        ask: "Use the law of charges: unlike signs attract, like signs repel. Tap each pair and drop it in the right bin.",
        hints: [
          "A positive next to a negative is an unlike pair, so they pull together.",
          "2 of the same sign, both positive or both negative, push apart.",
        ],
        explain: "Unlike charges attract, so a positive with a negative goes in Attract. Like charges repel, so 2 positives or 2 negatives go in Repel.",
      },
      {
        kind: "match",
        prompt: "Match each particle to the charge it carries.",
        pairs: [
          { left: "Proton", right: "Positive charge" },
          { left: "Neutron", right: "No charge" },
          { left: "Electron", right: "Negative charge" },
        ],
        ask: "Remember: the nucleus holds positive protons and neutral neutrons, while electrons on the outside are negative.",
        hints: [
          "Protons are positive and neutrons have no charge at all.",
          "The electron is the negative particle, so pair it with negative charge.",
        ],
        explain: "The proton is positive, the neutron has no charge, and the electron is negative. Protons and neutrons sit in the nucleus, and electrons circle around it.",
      },
      {
        kind: "insight",
        body: "Charge lives in the *atom*: the *nucleus* is positive and fixed, while light *electrons* can move. Move electrons and you create charge, and once charged, *unlike attracts, like repels*.",
        say: "Here is the idea to keep. All electric charge comes from inside the atom. The nucleus is positive and stays put, but the light electrons on the outside can move. Every static effect you will meet comes down to shifting electrons: gain them to become negative, lose them to become positive. And once things are charged, they obey 1 simple rule, unlike charges attract and like charges repel.",
      },
    ],
  },
];
