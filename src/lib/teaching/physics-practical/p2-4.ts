import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics (Practical Chapter 2), section 4. Authored from the source
// "techniques" material; sample numbers are verified BANK values (wire 45.0 mm / 50 turns -> 0.90 mm,
// 32.0 mm / 40 turns -> 0.80 mm, 20.0 g / 50 sheets -> 0.40 g, coin diameter = R2 - R1).
// Figure colours (house dark theme): apparatus outlines white/grey, a measured length arrow blue,
// a highlighted reading amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.4",
    code: "TP2.4",
    title: "Measuring small quantities accurately",
    blurb: "Spreading a tiny quantity's error over many items so one item can be read precisely",
    steps: [
      {
        kind: "concept",
        heading: "Why one small reading is unreliable",
        body: "A single reading of a *very small* quantity carries a large *fractional error*: if you misjudge a wire's diameter by 0.02 mm, that is a big slice of a 0.9 mm reading. The fix is to *spread* the measurement over *many identical items*.",
        say: "Suppose you try to measure the diameter of a thin wire with one reading. Any small slip, say 2 hundredths of a millimetre, is a large fraction of a reading that is under one millimetre. So a single reading of a tiny quantity is unreliable. The trick throughout this section is the same: instead of measuring one small item, measure many identical ones together, then share the result out.",
      },
      {
        kind: "concept",
        heading: "Coil a wire to get its diameter",
        figure: "fig-pr2-03-wire-coil",
        body: "Wind the wire into *n* tight touching *turns* and measure the *total length* d of the coil with a rule. One diameter is d divided by n, and the error is n times smaller than reading a single turn.",
        formula: {
          latex: "\\text{diameter} = \\dfrac{d}{n}",
          where: [
            { sym: "d", meaning: "total length of the close-wound coil", unit: "mm" },
            { sym: "n", meaning: "number of turns", unit: "" },
          ],
        },
        say: "In the picture a wire is wound in tight touching turns around a pencil, drawn in white. A blue arrow spans the whole coil and marks its total length d. If there are n turns packed side by side, then n diameters fit into that length, so one diameter is d divided by n. Because the reading error is shared across all n turns, it is n times smaller than measuring a single turn on its own.",
      },
      {
        kind: "concept",
        heading: "Average a rod at several positions",
        figure: "fig-pr2-02-micrometer-rod",
        body: "A rod is never perfectly uniform, so grip it with a *micrometer* at *several positions* along and around it and take the *average*. This cancels random slips and reveals any taper.",
        say: "Here a micrometer screw gauge grips a rod between its anvil and spindle, both drawn in white. A real rod is slightly thicker in some places than others, so you take a reading at several positions along it and around it, then average them. Averaging cancels the random ups and downs of individual readings and shows up any taper in the rod.",
      },
      {
        kind: "concept",
        heading: "A coin between 2 set squares",
        figure: "fig-pr2-04-coin-setsquares",
        body: "Stand a *coin* between 2 *set squares* on a ruler and read where each square meets the scale. The diameter is *R2 minus R1*, and you *average over orientations* because a coin is not perfectly round.",
        formula: {
          latex: "\\text{diameter} = R_2 - R_1",
          where: [
            { sym: "R_1", meaning: "ruler reading at the near set square", unit: "cm" },
            { sym: "R_2", meaning: "ruler reading at the far set square", unit: "cm" },
          ],
        },
        say: "A coin stands on a ruler, trapped between 2 set squares that keep the edges square to the scale, all drawn in white. One set square sits at reading R one on the near side, the other at reading R 2 on the far side. The gap between them is the diameter, so diameter equals R 2 minus R one. Because a coin is never perfectly round, you turn it and repeat, then average over the orientations.",
      },
      {
        kind: "concept",
        heading: "Time many swings; weigh many sheets",
        body: "Time a *large number* of oscillations, say *20*, and *divide by 20*, so human reaction time is shared out and matters far less per swing. Likewise weigh a stack of 50 sheets and divide by 50 for one sheet, after pressing tare to zero the balance.",
        say: "The same idea covers time and mass. Reaction time makes a single stopwatch timing early or late by a couple of tenths of a second, so time 20 full swings and divide by 20, and that error is shared across all 20. For a very light sheet of paper, stack 50 of them, weigh the stack, and divide by 50. Press the tare button first so the balance reads zero with the tray empty, then it shows only the paper's mass.",
      },
      {
        kind: "match",
        prompt: "Match each measuring technique to the small quantity it is used for.",
        pairs: [
          { left: "Coil in n turns, total length d, divide by n", right: "Diameter of a thin wire" },
          { left: "2 set squares on a ruler, R2 - R1", right: "Diameter of a coin" },
          { left: "Time 20 oscillations, divide by 20", right: "Period of a pendulum" },
          { left: "Weigh a stack of 50, tare first, divide by 50", right: "Mass of one paper sheet" },
        ],
        ask: "Each technique spreads a tiny quantity over many items. Ask what is being made small: a length, a time or a mass, then match it.",
        hints: [
          "Coiling and set squares both measure a small length; one is a wire, the other a coin.",
          "Counting 20 swings shares out reaction time; stacking 50 sheets shares out mass.",
        ],
        explain: "Coiling a wire gives its diameter, 2 set squares give a coin's diameter, timing 20 swings gives a pendulum's period, and weighing a stack of 50 gives one sheet's mass.",
      },
      {
        kind: "choice",
        question: "A wire is close-wound in 50 turns. The coil is 45.0 mm long. Find one diameter of the wire.",
        figure: "fig-pr2-03-wire-coil",
        options: ["0.045 mm", "1.8 mm", "0.90 mm", "45 mm"],
        correct: 2,
        ask: "One diameter is the total length divided by the number of turns, so work out 45.0 ÷ 50.",
        hints: [
          "Use diameter equals d divided by n.",
          "45.0 ÷ 50 is 0.90, a length in millimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\text{diameter} = \\dfrac{d}{n}" },
          { label: "Substitute", latex: "\\text{diameter} = \\dfrac{45.0}{50}" },
          { label: "Answer", latex: "\\text{diameter} = 0.90\\ \\text{mm}" },
        ],
        explain: "The diameter is 0.90 millimetres, because 45.0 millimetres shared over 50 turns is 0.90 millimetres per turn.",
      },
      {
        kind: "choice",
        question: "The balance is tared, then a stack of 50 identical sheets of paper is weighed as 20.0 g. Find the mass of one sheet.",
        options: ["0.40 g", "2.5 g", "20 g", "0.80 g"],
        correct: 0,
        ask: "One sheet's mass is the stack mass divided by the number of sheets, so work out 20.0 ÷ 50.",
        hints: [
          "Divide the total mass by 50.",
          "20.0 ÷ 50 is 0.40, a mass in grams.",
        ],
        working: [
          { label: "Formula", latex: "m_1 = \\dfrac{m}{n}" },
          { label: "Substitute", latex: "m_1 = \\dfrac{20.0}{50}" },
          { label: "Answer", latex: "m_1 = 0.40\\ \\text{g}" },
        ],
        explain: "One sheet is 0.40 grams, because 20.0 grams shared over 50 sheets is 0.40 grams each. Taring first ensures the 20.0 grams is the paper alone.",
      },
      {
        kind: "choice",
        question: "A different wire is close-wound in 40 turns and the coil measures 32.0 mm long. Find one diameter of this wire.",
        figure: "fig-pr2-03-wire-coil",
        options: ["0.32 mm", "0.80 mm", "1.25 mm", "40 mm"],
        correct: 1,
        ask: "Again one diameter is the total length divided by the number of turns, so work out 32.0 ÷ 40.",
        hints: [
          "Use diameter equals d divided by n.",
          "32.0 ÷ 40 is 0.80, a length in millimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\text{diameter} = \\dfrac{d}{n}" },
          { label: "Substitute", latex: "\\text{diameter} = \\dfrac{32.0}{40}" },
          { label: "Answer", latex: "\\text{diameter} = 0.80\\ \\text{mm}" },
        ],
        explain: "The diameter is 0.80 millimetres, because 32.0 millimetres shared over 40 turns is 0.80 millimetres per turn.",
      },
      {
        kind: "choice",
        question: "A coin is held between 2 set squares on a ruler. The near square reads R_1 = 4.0 cm and the far square reads R_2 = 6.4 cm. Find the coin's diameter.",
        figure: "fig-pr2-04-coin-setsquares",
        options: ["6.4 cm", "10.4 cm", "1.6 cm", "2.4 cm"],
        correct: 3,
        ask: "The diameter is the gap between the 2 set squares, so work out R_2 minus R_1, that is 6.4 - 4.0.",
        hints: [
          "Use diameter equals R_2 minus R_1.",
          "6.4 - 4.0 is 2.4, a length in centimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\text{diameter} = R_2 - R_1" },
          { label: "Substitute", latex: "\\text{diameter} = 6.4 - 4.0" },
          { label: "Answer", latex: "\\text{diameter} = 2.4\\ \\text{cm}" },
        ],
        explain: "The diameter is 2.4 centimetres, because the far reading 6.4 centimetres minus the near reading 4.0 centimetres is 2.4 centimetres.",
      },
      {
        kind: "insight",
        body: "Every technique here shares one small quantity over *many items*, so the *fractional error* falls by that number. Divide a *length*, a time or a mass by how many you measured.",
        say: "Here is the thread that ties the section together. Whether it is the diameter of a wire, the period of a pendulum, or the mass of a sheet, you never measure one tiny thing alone. You measure many together and divide by how many there were. The reading error stays the same size, but spread over 50 turns or 20 swings it becomes a tiny fraction of each result.",
      },
    ],
  },
];
