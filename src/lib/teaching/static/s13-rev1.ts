import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, Revision 1. Checkpoint over KB Chapter 15,
// sections t13.1 to t13.3: charge and the atom, electric fields and their
// direction, and field patterns of 2 charges and plates. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t13.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: charge, fields and field patterns",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which particle in an atom carries a negative charge?",
        figure: "fig-15-01-atom-structure",
        options: ["The proton", "The neutron", "The electron", "The nucleus"],
        correct: 2,
        ask: "One particle sits in a shell around the nucleus and is the one that moves when things are charged. Which option is that?",
        hints: [
          "The nucleus holds the protons and neutrons, so the negative particle is the one outside it.",
          "Electrons are the light, negative particles that orbit the nucleus.",
        ],
        explain: "The electron carries the negative charge, because it is the negative particle in the shell around the nucleus. Protons are positive, and neutrons carry no charge.",
      },
      {
        kind: "choice",
        question: "Which particle in an atom carries no charge at all?",
        options: ["The neutron", "The proton", "The electron", "Every particle is charged"],
        correct: 0,
        ask: "Its name is a clue that it is neither positive nor negative. Which particle is that?",
        hints: [
          "Protons are positive and electrons are negative, so the neutral one is the third kind.",
          "The neutron sits in the nucleus and has zero charge.",
        ],
        explain: "The neutron carries no charge, because it is neutral. The proton is positive and the electron is negative.",
      },
      {
        kind: "choice",
        question: "The field lines drawn around an isolated positive charge point in which direction?",
        figure: "fig-15-05-field-lines-isolated",
        options: ["In a circle around the charge", "Toward the charge", "Straight downward", "Away from the charge"],
        correct: 3,
        ask: "A positive test charge placed nearby would be pushed off the charge, and the lines follow that push. Which way is that?",
        hints: [
          "Like charges repel, so a small positive charge is pushed outward.",
          "Field lines radiate outward from a positive charge and inward to a negative one.",
        ],
        explain: "The lines point away from the charge, because a positive test charge is repelled outward. Lines point away from a positive charge and toward a negative charge.",
      },
      {
        kind: "choice",
        question: "2 negative charges are brought close together. What do they do?",
        figure: "fig-15-02-charge-interaction",
        options: ["They attract", "They repel", "They do nothing", "They swap electrons"],
        correct: 1,
        ask: "Both charges are the same sign, so recall the law of charges for 2 of a kind. What do they do?",
        hints: [
          "2 of the same sign are like charges.",
          "Like charges repel, while unlike charges attract.",
        ],
        explain: "They repel, because 2 negative charges are like charges, and like charges repel. Only unlike charges, one positive and one negative, attract.",
      },
      {
        kind: "choice",
        question: "The electric field between 2 parallel charged plates is described as uniform. Which picture matches that?",
        figure: "fig-15-08-parallel-plates",
        options: ["Lines that curve outward and spread apart", "Lines that meet at a single point", "Evenly spaced straight lines running across the gap", "Lines that cross one another"],
        correct: 2,
        ask: "Uniform means the field has the same strength everywhere, so the spacing of the lines does not change. Which picture shows that?",
        hints: [
          "The closer the lines, the stronger the field, so equal spacing means equal strength.",
          "Between parallel plates the lines run straight across and stay evenly spaced.",
        ],
        explain: "A uniform field is drawn as evenly spaced straight lines across the gap, because equal spacing means the same strength everywhere. Field lines also never cross.",
      },
      {
        kind: "classify",
        prompt: "Sort each pair of charges into what they do when brought near each other.",
        bins: ["Attract", "Repel"],
        items: [
          { text: "a positive charge and a negative charge", bin: 0 },
          { text: "2 positive charges", bin: 1 },
          { text: "2 negative charges", bin: 1 },
          { text: "a negative charge and a positive charge", bin: 0 },
        ],
        ask: "For each pair, ask whether the 2 signs are the same or different, then use the law of charges. Drop each pair in its bin.",
        hints: [
          "Different signs are unlike charges; the same sign twice is a like pair.",
          "Unlike charges attract, and like charges repel.",
        ],
        explain: "A positive with a negative is an unlike pair, so they attract. 2 positives or 2 negatives are like pairs, so they repel.",
      },
      {
        kind: "match",
        prompt: "Match each particle to the charge it carries.",
        pairs: [
          { left: "Proton", right: "Positive" },
          { left: "Electron", right: "Negative" },
          { left: "Neutron", right: "No charge" },
        ],
        ask: "Recall which particle is positive, which is negative, and which is neutral. Then join each one to its charge.",
        hints: [
          "The proton and electron carry opposite charges of the same size.",
          "The neutron is the neutral particle in the nucleus.",
        ],
        explain: "The proton is positive, the electron is negative, and the neutron carries no charge. The proton and electron are equal in size but opposite in sign.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of electric field direction.",
        segments: [
          "A field line points ",
          " from a positive charge and ",
          " a negative charge. To find this direction we imagine a small ",
          " test charge.",
        ],
        bank: ["away", "toward", "positive", "negative", "north"],
        answer: ["away", "toward", "positive"],
        ask: "Recall which way lines leave a positive charge, which way they go for a negative charge, and the sign of the test charge we use.",
        hints: [
          "Lines leave a positive charge and head into a negative charge.",
          "The test charge we imagine is always a positive one.",
        ],
        explain: "Lines point away from a positive charge and toward a negative charge. We use a positive test charge, and the field line follows the direction of the force on it.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this set of field statements is wrong. Tap the line that is incorrect.",
        lines: [
          "An electric field is a region where a charge feels a force.",
          "The field is stronger near the charge and weaker further away.",
          "Field lines point toward a positive charge.",
          "Field lines never cross one another.",
        ],
        errorLine: 2,
        ask: "Check each line against the field rules. Focus on the one that states which way the lines go for a positive charge.",
        hints: [
          "A positive test charge near a positive charge is pushed outward.",
          "Lines point away from a positive charge, not toward it.",
        ],
        explain: "The wrong line is the one saying field lines point toward a positive charge. They actually point away from a positive charge and toward a negative charge.",
      },
      {
        kind: "order",
        prompt: "Put these steps in order for finding the direction of an electric field at a point.",
        items: [
          "Place a small positive test charge at the point",
          "Work out the direction of the electric force on it",
          "Draw the field line pointing that way",
          "Check it points away from positive charges and toward negative ones",
        ],
        ask: "Think about what you must place at the point first, and what you read off from it before drawing the line. Put the steps in order.",
        hints: [
          "You need a test charge in place before you can talk about a force on it.",
          "The field line direction is just the direction of the force on a positive test charge.",
        ],
        explain: "First place a positive test charge, then find the force on it, then draw the field line that way, and finally check it leaves positive charges and enters negative ones.",
      },
      {
        kind: "open",
        prompt: "Using the idea of electrons, explain how an object becomes negatively charged and how it becomes positively charged.",
        figure: "fig-15-01-atom-structure",
        modelAnswer: "Only electrons move when an object is charged. If an object gains extra electrons it has more negative charge than positive, so it becomes negatively charged. If an object loses electrons it is left with more protons than electrons, so it becomes positively charged. The protons and neutrons in the nucleus do not move.",
        marks: [
          "Charging moves electrons only; protons stay put.",
          "Gaining electrons makes an object negative.",
          "Losing electrons makes an object positive.",
        ],
        ask: "Think about which particle is free to move, and whether the object ends up with more or fewer of them for each case.",
      },
      {
        kind: "open",
        prompt: "Describe how the field pattern between 2 unlike charges differs from the field pattern between 2 like charges.",
        figure: "fig-15-06-field-unlike",
        modelAnswer: "Between 2 unlike charges the field lines run from the positive charge across the gap to the negative charge, curving over and packed tightest in the gap. This is an attraction picture. Between 2 like charges the lines bend away from each other and never join, with a point midway where the field cancels. This is a repulsion picture.",
        marks: [
          "Unlike charges: lines link across the gap from positive to negative (attraction).",
          "Like charges: lines bend away and never join (repulsion).",
          "Like charges have a cancellation point midway between them.",
        ],
        ask: "Think about whether the lines join the 2 charges or turn away from each other, and what that tells you about attraction or repulsion.",
      },
    ],
  },
];
