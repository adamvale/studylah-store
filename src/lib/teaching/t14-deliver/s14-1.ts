import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, section 1. Grounded in KB Chapter 16 (sections 16.1, 16.2, 16.3).
// Figure colours follow the carry-over colour key: electron flow (drifting electrons) = blue,
// conventional current = amber (yellow); wires, cells and components = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t14.1",
    code: "T14.1",
    title: "Electric current and Q = It",
    blurb: "What an electric current really is, and how charge, current and time are linked",
    steps: [
      {
        kind: "concept",
        heading: "Current is a flow of charge",
        figure: "fig-16-02-electron-flow-wire",
        body: "An *electric current* is the *rate of flow* of *electric charge* through a conductor. It is measured in *amperes*, where one ampere is one coulomb of charge passing a point each second.",
        say: "An electric current is simply charge on the move. In this picture a white wire carries tiny blue dots, the free electrons, and they drift steadily along the wire. Count how much charge slips past a point each second and you have the current. We measure it in amperes, and one ampere means one coulomb of charge passes by every second.",
      },
      {
        kind: "concept",
        heading: "Charge, current and time",
        body: "The *charge* that flows equals the *current* multiplied by the *time* it flows for. This gives the charge in *coulombs* when the current is in amperes and the time in seconds.",
        formula: {
          latex: "Q = I\\,t",
          where: [
            { sym: "Q", meaning: "charge", unit: "C" },
            { sym: "I", meaning: "current", unit: "A" },
            { sym: "t", meaning: "time", unit: "s" },
          ],
        },
        say: "Charge, current and time are tied together by one neat relationship. The charge that flows is the current multiplied by the time. So a current of 2 amperes flowing for 10 seconds delivers 20 coulombs of charge. Keep the time in seconds and the current in amperes, and the charge comes out in coulombs.",
      },
      {
        kind: "concept",
        heading: "Two ways to talk about direction",
        figure: "fig-16-03-conventional-vs-electron",
        body: "*Conventional current* is taken to flow from the *positive* terminal to the negative, as if positive charge moves. The real *electron flow* runs the *opposite* way, from negative to positive. Circuit analysis still uses conventional current.",
        say: "There are 2 ways to describe which way current goes, and they point opposite ways. In this figure a charge travels between a positive terminal and a negative terminal. The amber arrow is the conventional current, which we imagine flowing from the positive terminal to the negative terminal. The blue arrow is the true electron flow, and the electrons actually drift the other way, from negative to positive. Both describe the same circuit, and we still do our circuit sums with conventional current.",
      },
      {
        kind: "choice",
        question: "A current of 4 A flows for 3 minutes. How much charge passes through the wire?",
        options: ["12 C", "45 C", "720 C", "180 C"],
        correct: 2,
        ask: "First turn 3 minutes into seconds, then use charge equals current times time, so work out 4 times 180.",
        hints: [
          "3 minutes is 3 times 60, which is 180 seconds.",
          "4 times 180 is 720, and the answer is a charge in coulombs.",
        ],
        working: [
          { label: "Formula", latex: "Q = I\\,t" },
          { label: "Substitute", latex: "Q = 4 \\times 180" },
          { label: "Answer", latex: "Q = 720\\ \\text{C}" },
        ],
        explain: "The charge is 720 coulombs, because 3 minutes is 180 seconds, and 4 amperes times 180 seconds is 720 coulombs.",
      },
      {
        kind: "choice",
        question: "A charge of 450 C is delivered by a steady current of 2.5 A. For how long does the current flow?",
        options: ["1125 s", "180 s", "452.5 s", "90 s"],
        correct: 1,
        ask: "Rearrange charge equals current times time to make time the subject, so work out 450 divided by 2.5.",
        hints: [
          "The time is the charge divided by the current.",
          "450 divided by 2.5 is 180, and the answer is a time in seconds.",
        ],
        working: [
          { label: "Formula", latex: "t = \\dfrac{Q}{I}" },
          { label: "Substitute", latex: "t = \\dfrac{450}{2.5}" },
          { label: "Answer", latex: "t = 180\\ \\text{s}" },
        ],
        explain: "The current flows for 180 seconds, because 450 coulombs divided by 2.5 amperes is 180 seconds.",
      },
      {
        kind: "choice",
        question: "A charge of 960 C passes through a car starter motor in just 16 s. What is the current?",
        options: ["15360 A", "0.017 A", "944 A", "60 A"],
        correct: 3,
        ask: "Rearrange charge equals current times time to make current the subject, so work out 960 divided by 16.",
        hints: [
          "The current is the charge divided by the time.",
          "960 divided by 16 is 60, and the answer is a current in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{Q}{t}" },
          { label: "Substitute", latex: "I = \\dfrac{960}{16}" },
          { label: "Answer", latex: "I = 60\\ \\text{A}" },
        ],
        explain: "The current is 60 amperes, because 960 coulombs divided by 16 seconds is 60 amperes.",
      },
      {
        kind: "choice",
        question: "In a simple circuit, how do the conventional current and the electron flow compare in direction?",
        figure: "fig-16-03-conventional-vs-electron",
        options: [
          "They point in opposite directions",
          "They point in the same direction",
          "The electrons do not move at all",
          "Only the conventional current is a real flow",
        ],
        correct: 0,
        ask: "Conventional current is drawn from the positive terminal to the negative, but electrons are negative and drift the other way.",
        hints: [
          "Conventional current runs from positive to negative; electron flow runs from negative to positive.",
          "Those 2 directions are opposite to each other.",
        ],
        explain: "They point in opposite directions, because conventional current is taken from positive to negative, while the real electrons drift from negative to positive.",
      },
      {
        kind: "insight",
        body: "*Current* is charge counted per second, and *Q = I t* ties the charge to the current and time, so a big current or a long time both deliver more charge.",
        say: "Here is the idea to hold on to. Current is nothing more than charge counted each second, and the relationship charge equals current times time links the 3 together. Push a bigger current, or let it flow for longer, and either way more coulombs of charge are delivered. And remember, the amber conventional current and the blue electron flow describe the very same circuit going opposite ways.",
      },
    ],
  },
];
