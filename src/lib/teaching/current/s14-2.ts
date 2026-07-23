import type { Subconcept } from "@/lib/teaching/subconcepts";

// T14 Current of Electricity, section 2. Grounded in KB Chapter 16 (sections 16.4, 16.5).
// Figure colours follow the carry-over colour key for this chapter: conventional current = amber,
// electron flow = blue; wires, cells, lamps, resistors and meters = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t14.2",
    code: "T14.2",
    title: "e.m.f. and potential difference",
    blurb: "The energy a source gives each coulomb, and the energy each coulomb hands to a component",
    steps: [
      {
        kind: "concept",
        heading: "Electromotive force of a source",
        figure: "fig-16-04-emf-source",
        body: "The *electromotive force* (e.m.f.) of a source is the *work done* in driving each unit charge *around the whole circuit*. It is the energy the source gives to every coulomb.",
        formula: {
          latex: "E = \\dfrac{W}{Q}",
          where: [
            { sym: "E", meaning: "e.m.f. of the source", unit: "V" },
            { sym: "W", meaning: "work done (energy given)", unit: "J" },
            { sym: "Q", meaning: "charge driven round the circuit", unit: "C" },
          ],
        },
        say: "In this picture a white cell sits in a complete loop of grey wire. A single unit of charge travels all the way around the loop, pushed on by the amber conventional current. The e.m.f. is the energy the cell hands to each coulomb to drive it around that whole circuit. Divide the work done by the charge and you get the e.m.f. in volts.",
      },
      {
        kind: "concept",
        heading: "e.m.f. belongs to the source",
        body: "e.m.f. is a property of the *source* itself. It is *present even with no current* flowing, because it measures the energy the source is ready to give each coulomb, not the flow.",
        say: "Here is a key point about e.m.f. It is a property of the source, like a cell or a battery. You can measure it before you switch anything on, because the source is always ready to give each coulomb the same energy. So e.m.f. is present even when no current flows at all.",
      },
      {
        kind: "concept",
        heading: "Potential difference across a component",
        figure: "fig-16-05-pd-component",
        body: "The *potential difference* (p.d.) across a component is the energy *transferred* to that *component* per unit charge. It is *zero with no current*, since nothing is being delivered.",
        formula: {
          latex: "V = \\dfrac{W}{Q}",
          where: [
            { sym: "V", meaning: "potential difference across the component", unit: "V" },
            { sym: "W", meaning: "energy transferred to the component", unit: "J" },
            { sym: "Q", meaning: "charge passing through it", unit: "C" },
          ],
        },
        say: "In this picture a single unit of charge moves across one white component, carried by the amber current. As it crosses, it hands over some of its energy to that component. The potential difference is that energy transfer per coulomb. Divide the energy given up by the charge and you get the p.d. in volts. With no current, no charge crosses, so the p.d. is zero.",
      },
      {
        kind: "concept",
        heading: "Both measured in volts",
        body: "Both e.m.f. and p.d. are measured in *volts*. One *volt* is one *joule per coulomb*, so a source or component rated at 1 volt handles 1 joule of energy for every coulomb.",
        say: "e.m.f. and potential difference are both measured in the same unit, the volt. One volt means one joule per coulomb. So a 1 volt source gives 1 joule to each coulomb, and a 1 volt p.d. means each coulomb hands over 1 joule to the component. The difference is only where the energy is counted: e.m.f. is over the whole circuit for the source, p.d. is across one component.",
      },
      {
        kind: "choice",
        question: "A source drives 1 C of charge around a circuit and does 4.5 J of work on it. What is the e.m.f. of the source?",
        options: ["9.0 V", "2.25 V", "4.5 V", "0.22 V"],
        correct: 2,
        ask: "The e.m.f. is the work done divided by the charge, so work out 4.5 ÷ 1.",
        hints: [
          "Use E equals W divided by Q.",
          "4.5 ÷ 1 is 4.5, and the answer is in volts.",
        ],
        working: [
          { label: "Formula", latex: "E = \\dfrac{W}{Q}" },
          { label: "Substitute", latex: "E = \\dfrac{4.5}{1}" },
          { label: "Answer", latex: "E = 4.5\\ \\text{V}" },
        ],
        explain: "The e.m.f. is 4.5 volts, because 4.5 joules of work done on 1 coulomb is 4.5 joules per coulomb, which is 4.5 volts.",
      },
      {
        kind: "choice",
        question: "A source of e.m.f. 6.0 V drives a charge of 40 C around a circuit. How much work does it do on that charge?",
        options: ["240 J", "46 J", "6.7 J", "0.15 J"],
        correct: 0,
        ask: "Rearrange E equals W divided by Q to get W equals E times Q, so work out 6.0 × 40.",
        hints: [
          "The work done is the e.m.f. multiplied by the charge.",
          "6.0 × 40 is 240, and the answer is in joules.",
        ],
        working: [
          { label: "Formula", latex: "W = E\\,Q" },
          { label: "Substitute", latex: "W = 6.0 \\times 40" },
          { label: "Answer", latex: "W = 240\\ \\text{J}" },
        ],
        explain: "The work done is 240 joules, because 6.0 volts means 6.0 joules per coulomb, and 6.0 × 40 coulombs is 240 joules.",
      },
      {
        kind: "choice",
        question: "A battery does 2100 J of work driving 300 C of charge around a circuit. What is its e.m.f.?",
        options: ["70 V", "0.14 V", "630000 V", "7 V"],
        correct: 3,
        ask: "The e.m.f. is the work done divided by the charge, so work out 2100 ÷ 300.",
        hints: [
          "Use E equals W divided by Q.",
          "2100 ÷ 300 is 7, and the answer is in volts.",
        ],
        working: [
          { label: "Formula", latex: "E = \\dfrac{W}{Q}" },
          { label: "Substitute", latex: "E = \\dfrac{2100}{300}" },
          { label: "Answer", latex: "E = 7\\ \\text{V}" },
        ],
        explain: "The e.m.f. is 7 volts, because 2100 joules shared over 300 coulombs is 7 joules per coulomb, which is 7 volts.",
      },
      {
        kind: "choice",
        question: "A source of e.m.f. 15 V drives 60 C of charge around a circuit. How much energy does it give to that charge?",
        options: ["75 J", "900 J", "4 J", "0.25 J"],
        correct: 1,
        ask: "Rearrange E equals W divided by Q to get W equals E times Q, so work out 15 × 60.",
        hints: [
          "The energy given is the e.m.f. multiplied by the charge.",
          "15 × 60 is 900, and the answer is in joules.",
        ],
        working: [
          { label: "Formula", latex: "W = E\\,Q" },
          { label: "Substitute", latex: "W = 15 \\times 60" },
          { label: "Answer", latex: "W = 900\\ \\text{J}" },
        ],
        explain: "The energy is 900 joules, because 15 volts means 15 joules per coulomb, and 15 × 60 coulombs is 900 joules.",
      },
      {
        kind: "choice",
        question: "Which statement correctly describes the difference between the e.m.f. of a source and the p.d. across a component?",
        options: [
          "e.m.f. is measured in amperes, while p.d. is measured in volts.",
          "e.m.f. and p.d. are the same quantity under 2 different names.",
          "e.m.f. is the energy a source gives each coulomb driven around the whole circuit, while p.d. is the energy each coulomb transfers to one component.",
          "e.m.f. is zero when no current flows, while p.d. is present even with no current.",
        ],
        correct: 2,
        ask: "Think about where the energy is counted: over the whole circuit for the source, or across one component.",
        hints: [
          "Both are measured in volts, so the unit is not the difference.",
          "e.m.f. is the energy the source gives each coulomb around the whole loop; p.d. is the energy each coulomb hands to a single component.",
        ],
        explain: "e.m.f. is the energy the source gives to each coulomb driven around the whole circuit, and it is present even with no current. p.d. is the energy each coulomb transfers to one component, and it is zero with no current. Both are in volts.",
      },
      {
        kind: "insight",
        body: "e.m.f. counts the energy a *source* gives each coulomb around the *whole circuit*; p.d. counts the energy each coulomb hands to a *component*. Same unit, the *volt*, but different places in the loop.",
        say: "Here is the idea to keep. Both e.m.f. and potential difference answer the same kind of question, how much energy per coulomb, and both are measured in volts. The difference is only where you count. e.m.f. is the energy the source gives each coulomb to send it around the entire circuit. Potential difference is the energy each coulomb gives up at one component along the way.",
      },
    ],
  },
];
