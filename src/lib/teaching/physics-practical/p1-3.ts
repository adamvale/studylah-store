import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP1 Practical Skills, section 3. Grounded in Practical Chapter 01 (sources 1.5, 1.6):
// recording readings, significant figures vs decimal places, and standard form / prefixes.
// No figure. Sig-fig and standard-form facts sit in `formula`; calculation-style questions carry `working`.

export const BOXES: Subconcept[] = [
  {
    id: "tp1.3",
    code: "TP1.3",
    title: "Recording readings, significant figures and standard form",
    blurb: "Write a number as carefully as you read it, then quote sensible figures",
    steps: [
      {
        kind: "concept",
        heading: "Read it, repeat it, average it",
        body: "Take each reading as carefully as you can, then *repeat* it and *average* the results to cut down random scatter. Always attach the correct *unit* to the number.",
        say: "A single reading can be thrown off by a slip of the eye or the hand. So take the reading, then repeat it 2 or 3 times and work out the average. Averaging smooths out the small random errors that push a value up one time and down the next. And a number without a unit is meaningless, so always write the unit next to it.",
      },
      {
        kind: "concept",
        heading: "Match the instrument's precision",
        body: "Record to the precision the *instrument* allows: to the nearest *millimetre* on a metre rule, to the nearest *0.1 second* on a stopwatch. Then *estimate the last figure* by eye between the smallest marks.",
        say: "Every instrument has a finest scale division, and your reading should go down to that division. A metre rule is marked in millimetres, so you read to the nearest millimetre. A stopwatch ticks in tenths of a second, so you read to the nearest 0 point 1 second. Where the pointer sits between 2 marks, you estimate that final figure by eye. That last digit is uncertain, but it still carries information.",
      },
      {
        kind: "concept",
        heading: "Keep the trailing zeros",
        body: "A *trailing zero* states precision, so do not drop it. Exactly 8 centimetres measured on a *millimetre rule* is written *8.0 cm*, showing you read to the nearest 0.1 cm. Keep every reading to the *same decimal places*.",
        say: "Zeros at the end of a reading are not decoration, they report how finely you measured. If a length comes out at exactly 8 centimetres on a rule marked in millimetres, you write it as 8 point 0 centimetres. That extra zero tells the reader you measured to the nearest tenth of a centimetre, not just to the nearest whole centimetre. Keep a whole column of readings to the same number of decimal places.",
      },
      {
        kind: "concept",
        heading: "Significant figures vs decimal places",
        body: "*Significant figures* count the meaningful digits starting from the *first non-zero* digit, so 0.0450 has 3 significant figures. *Decimal places* count the digits after the point, so 1.415 has 3 decimal places. A calculated value carries no more sig figs than the *least precise* raw value.",
        formula: {
          latex: "0.0450 \\rightarrow 3\\ \\text{s.f.} \\qquad 1.415 \\rightarrow 3\\ \\text{d.p.}",
        },
        say: "These 2 ideas are easy to mix up. Significant figures count the digits that carry meaning, starting from the first non-zero digit. In 0 point 0 4 5 0 the leading zeros do not count, but the 4, the 5 and the final 0 do, giving 3 significant figures. Decimal places are simpler, just count the digits after the point. The number 1 point 4 1 5 has 3 decimal places. When you calculate a result, quote it to no more significant figures than the least precise measurement you started with.",
      },
      {
        kind: "concept",
        heading: "Prefixes and standard form",
        body: "Very large or very small numbers use a *prefix* or *standard form*. One millimetre is 1 x 10^-3 metre. Always convert every quantity to a *common unit* before you substitute into a formula.",
        formula: {
          latex: "1\\ \\text{mm} = 0.001\\ \\text{m} = 1 \\times 10^{-3}\\ \\text{m}",
        },
        say: "Numbers that are awkwardly big or small are tidied up with a prefix, like milli or kilo, or written in standard form as a digit times a power of 10. One millimetre is 1 times 10 to the minus 3 metres. Before you put numbers into an equation, convert them all to the same base unit, usually metres, kilograms and seconds, so the units work out cleanly.",
      },
      {
        kind: "choice",
        question: "How many significant figures does the reading 0.0450 have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        ask: "Start counting from the first non-zero digit. The leading zeros do not count, but the final zero does.",
        hints: [
          "Ignore the 2 leading zeros before the 4.",
          "The digits 4, 5 and the trailing 0 are significant, giving 3.",
        ],
        working: [
          { label: "Rule", latex: "\\text{count from the first non-zero digit}" },
          { label: "Count", latex: "\\underline{4},\\ \\underline{5},\\ \\underline{0}" },
          { label: "Answer", latex: "3\\ \\text{significant figures}" },
        ],
        explain: "0.0450 has 3 significant figures, because counting starts at the 4, and the 4, the 5 and the trailing 0 are all meaningful while the leading zeros are not.",
      },
      {
        kind: "choice",
        question: "How many significant figures does the reading 1.007 have?",
        options: ["4", "3", "2", "5"],
        correct: 0,
        ask: "Zeros trapped between non-zero digits always count. Count every digit here.",
        hints: [
          "The 2 zeros sit between the 1 and the 7.",
          "All 4 digits are significant, so the answer is 4.",
        ],
        working: [
          { label: "Rule", latex: "\\text{zeros between non-zero digits count}" },
          { label: "Count", latex: "\\underline{1},\\ \\underline{0},\\ \\underline{0},\\ \\underline{7}" },
          { label: "Answer", latex: "4\\ \\text{significant figures}" },
        ],
        explain: "1.007 has 4 significant figures, because the 2 zeros are trapped between the 1 and the 7, so every digit counts.",
      },
      {
        kind: "choice",
        question: "How many significant figures does the value 3200 have (as normally written)?",
        options: ["4", "3", "2", "1"],
        correct: 2,
        ask: "Trailing zeros with no decimal point are treated as not significant. Count only the digits you are sure of.",
        hints: [
          "The 2 zeros at the end are just placeholders here.",
          "Only the 3 and the 2 are significant, so the answer is 2.",
        ],
        working: [
          { label: "Rule", latex: "\\text{trailing zeros (no point) are placeholders}" },
          { label: "Count", latex: "\\underline{3},\\ \\underline{2},\\ 0,\\ 0" },
          { label: "Answer", latex: "2\\ \\text{significant figures}" },
        ],
        explain: "3200 has 2 significant figures, because with no decimal point the 2 trailing zeros only mark place value, leaving just the 3 and the 2.",
      },
      {
        kind: "choice",
        question: "A length reads exactly 8 cm on a rule marked in millimetres. How should it be recorded?",
        options: ["8 cm", "80 cm", "8.0 cm", "0.8 cm"],
        correct: 2,
        ask: "A millimetre rule reads to the nearest 0.1 cm, so the record must show a digit in the first decimal place.",
        hints: [
          "The rule is precise to a tenth of a centimetre.",
          "Add a trailing zero to show that precision: 8.0 cm.",
        ],
        working: [
          { label: "Rule", latex: "1\\ \\text{mm rule reads to } 0.1\\ \\text{cm}" },
          { label: "Reading", latex: "8\\ \\text{cm exactly}" },
          { label: "Answer", latex: "8.0\\ \\text{cm}" },
        ],
        explain: "It is recorded as 8.0 centimetres, because a millimetre rule reads to the nearest 0.1 centimetre, and the trailing zero states that precision.",
      },
      {
        kind: "choice",
        question: "The reading 1.415 is written to how many decimal places?",
        options: ["4 decimal places", "2 decimal places", "5 decimal places", "3 decimal places"],
        correct: 3,
        ask: "Decimal places count only the digits after the point, not the total number of significant figures.",
        hints: [
          "Count the digits to the right of the decimal point.",
          "There are 3 digits after the point: 4, 1 and 5.",
        ],
        working: [
          { label: "Rule", latex: "\\text{d.p. = digits after the point}" },
          { label: "Count", latex: "1.\\underline{4}\\underline{1}\\underline{5}" },
          { label: "Answer", latex: "3\\ \\text{decimal places}" },
        ],
        explain: "1.415 has 3 decimal places, because there are 3 digits after the point. It has 4 significant figures, which is why decimal places and significant figures must not be confused.",
      },
      {
        kind: "choice",
        question: "Written in standard form, 1 mm expressed in metres is:",
        options: ["1 x 10^-3 m", "1 x 10^-2 m", "1 x 10^3 m", "1000 m"],
        correct: 0,
        ask: "One millimetre is one thousandth of a metre. Write one thousandth as a power of 10.",
        hints: [
          "1 mm = 0.001 m.",
          "0.001 is 1 times 10 to the minus 3.",
        ],
        working: [
          { label: "Relation", latex: "1\\ \\text{mm} = 0.001\\ \\text{m}" },
          { label: "Standard form", latex: "0.001 = 1 \\times 10^{-3}" },
          { label: "Answer", latex: "1 \\times 10^{-3}\\ \\text{m}" },
        ],
        explain: "1 millimetre is 1 x 10^-3 metre, because a millimetre is one thousandth of a metre, and one thousandth written as a power of 10 is 1 times 10 to the minus 3.",
      },
      {
        kind: "classify",
        prompt: "Sort each reading by how many significant figures it has.",
        bins: ["2 significant figures", "3 significant figures", "4 significant figures"],
        items: [
          { text: "3200", bin: 0 },
          { text: "0.0450", bin: 1 },
          { text: "0.0308", bin: 1 },
          { text: "12.0", bin: 1 },
          { text: "0.00120", bin: 1 },
          { text: "1.007", bin: 2 },
        ],
        ask: "Count from the first non-zero digit. Leading zeros never count, trailing zeros after a decimal point do count, and zeros between digits count. Tap each number and drop it in its bin.",
        hints: [
          "3200 has just 2 significant figures; 1.007 has 4 because the trapped zeros count.",
          "0.0450, 0.0308, 12.0 and 0.00120 each have exactly 3 significant figures.",
        ],
        explain: "3200 has 2 significant figures, 1.007 has 4 because the trapped zeros count, and 0.0450, 0.0308, 12.0 and 0.00120 each have 3 because leading zeros are ignored while trailing and trapped zeros are kept.",
      },
      {
        kind: "insight",
        body: "Quote a result to no more *significant figures* than your *least precise* reading, and never confuse *significant figures* with *decimal places*.",
        say: "Here is the idea to keep. Your answer can only be as trustworthy as your roughest measurement, so round a calculated result to match the least precise reading that went into it, usually 2 or 3 significant figures. And remember the 2 counts are different, significant figures start at the first non-zero digit, while decimal places just count the digits after the point.",
      },
    ],
  },
];
