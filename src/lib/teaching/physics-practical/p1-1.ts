import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, section 1. Grounded in Practical Chapter 01 sections 1.1 and 1.2.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.1",
    code: "TP1.1",
    title: "The 4 skill stages and laboratory safety",
    blurb: "The chain of skills a practical marks, and the safety habits behind them",
    steps: [
      {
        kind: "concept",
        heading: "A chain of skills",
        figure: "fig-pr1-01-skills-flow",
        body: "A practical marks a *chain* of skills, not just the final number. It is assessed in 4 ordered *stages* that flow from a plan to a judged conclusion.",
        say: "A practical exam does not just check your last answer. It marks a whole chain of skills. On screen is a flow chart of 4 stages drawn in white boxes joined by grey arrows, each box feeding into the next: first planning, then manipulation and measurement, then presentation of data, then analysis, conclusions and evaluation. Work through them in that order.",
      },
      {
        kind: "concept",
        heading: "Stage 1: Planning",
        body: "In *planning* you decide the *variables*, write an ordered *method*, and flag the *hazards* before you touch any apparatus.",
        say: "The first stage is planning. Here you choose which quantity you will change and which you will measure, you write a clear step by step method, and you flag any hazards, all before you pick up a single piece of apparatus.",
      },
      {
        kind: "concept",
        heading: "Stage 2: Manipulation and measurement",
        body: "In *manipulation and measurement* you set up the *apparatus*, use each *instrument* correctly, and read to a sensible *precision*.",
        say: "The second stage is manipulation and measurement. This is the hands on part: you set up the apparatus, handle each instrument the right way, and take each reading to a sensible precision, for example the nearest millimetre on a metre rule.",
      },
      {
        kind: "concept",
        heading: "Stage 3: Presentation",
        body: "In *presentation* you record every reading in a neat *table*, *process* the data, and quote sensible *figures*.",
        say: "The third stage is presentation. You record every reading in a neat, well laid out table, process the numbers, for example by averaging repeats, and quote them to a sensible number of figures.",
      },
      {
        kind: "concept",
        heading: "Stage 4: Analysis and evaluation",
        body: "In *analysis and evaluation* you interpret the data against the *aim*, usually with a *graph*, draw an evidence-based conclusion, and judge the errors.",
        say: "The fourth stage is analysis and evaluation. You interpret your results against the aim of the experiment, usually by plotting a graph, draw a conclusion backed by that evidence, then judge the errors and suggest realistic improvements.",
      },
      {
        kind: "insight",
        body: "Behind every stage sit safety habits: stay *calm*, follow the given *instructions*, and treat *live circuits* and *heating apparatus* with care.",
        say: "Running through all 4 stages are safety habits. Behave calmly, follow the instructions you are given, handle a sharp knife edge with care, never touch the bare metal of a live circuit, do not leave heating apparatus unattended, wear goggles when told to, and put any broken glass in the glass bin.",
      },
      {
        kind: "choice",
        question: "A student sets up the apparatus and reads a thermometer to the nearest 0.5 degrees Celsius. Which stage is this?",
        options: ["Planning", "Manipulation and measurement", "Presentation", "Analysis and evaluation"],
        correct: 1,
        ask: "This is the hands-on part, where apparatus is used and readings are taken. Which of the 4 stages fits that?",
        hints: [
          "Nothing is being planned or graphed here; a real reading is being taken from an instrument.",
          "Setting up apparatus and reading an instrument to a sensible precision is the second stage.",
        ],
        explain: "This is manipulation and measurement. Setting up the apparatus and reading an instrument to a sensible precision is exactly what the second stage covers.",
      },
      {
        kind: "order",
        prompt: "Put the 4 assessed stages of a practical in the order they are carried out.",
        items: [
          "Planning: choose variables and method, flag hazards",
          "Manipulation and measurement: set up and take readings",
          "Presentation: record and process the data in a table",
          "Analysis and evaluation: graph, conclude, judge errors",
        ],
        ask: "Start with what you do before touching the apparatus, and finish with judging your results. Drag the stages into that flow.",
        hints: [
          "You must plan the method before you can take any readings.",
          "You can only analyse and evaluate once the data has been recorded and presented.",
        ],
        explain: "The order is planning, then manipulation and measurement, then presentation, then analysis and evaluation. Each stage feeds the next: a plan guides the readings, the readings fill the table, and the table drives the graph and conclusion.",
      },
      {
        kind: "classify",
        prompt: "Sort each laboratory action into safe or unsafe.",
        bins: ["Safe", "Unsafe"],
        items: [
          { text: "wearing goggles when told to", bin: 0 },
          { text: "putting broken glass in the glass bin", bin: 0 },
          { text: "following the given instructions", bin: 0 },
          { text: "touching the bare metal of a live circuit", bin: 1 },
          { text: "leaving heating apparatus unattended", bin: 1 },
          { text: "rushing and behaving carelessly", bin: 1 },
        ],
        ask: "For each action, ask whether it protects you and others or invites an accident. Drop it in the matching bin.",
        hints: [
          "Goggles, the glass bin and following instructions are all careful, protective habits.",
          "Bare live metal, unattended heaters and careless rushing all lead to shocks, fires or breakages.",
        ],
        explain: "Wearing goggles, binning broken glass and following instructions are safe habits. Touching a live circuit, leaving heating apparatus unattended and rushing carelessly are unsafe, because each one risks a shock, a fire or an injury.",
      },
      {
        kind: "choice",
        question: "In which stage do you decide the variables, write an ordered method, and flag the hazards?",
        options: ["Planning", "Presentation", "Manipulation and measurement", "Analysis and evaluation"],
        correct: 0,
        ask: "This all happens before any apparatus is touched or any reading is taken. Which stage comes first?",
        hints: [
          "Choosing variables and writing the method is groundwork done in advance.",
          "The first stage of the chain is where the whole experiment is planned.",
        ],
        explain: "This is planning, the first stage. Deciding the variables, writing an ordered method and flagging the hazards is all done before any apparatus is set up.",
      },
    ],
  },
];
