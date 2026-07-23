import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, section 4. Grounded in KB Chapter 01 (Physical Quantities and Measurement) section on precision.
// Apparatus/scale diagram: grey ruler and scale, blue brace as the division indicator, amber note callout. No forces.

export const BOXES: Subconcept[] = [
  {
    id: "t1.4",
    code: "T1.4",
    title: "Precision of an instrument",
    blurb: "What precision means, and how to pick an instrument fine enough for the job",
    steps: [
      {
        kind: "concept",
        heading: "What precision means",
        body: "The *precision* of an instrument is the *smallest division* it can measure. The smaller that division, the more *precise* the instrument.",
        say: "Precision is all about the finest step an instrument can read. The precision of an instrument is its smallest division, the smallest gap you can tell apart on its scale. The smaller that division, the more precise the instrument, so it can pin a length down more exactly.",
      },
      {
        kind: "concept",
        heading: "Reading the smallest division",
        figure: "fig-01-09-precision-scale",
        body: "On a *metre rule*, each *centimetre* is split into 10 equal parts, so the *smallest division* is 0.1 cm, which is 1 mm.",
        say: "The picture is a single grey ruler with the scale running from 4 to 5 centimetres. A blue brace stretches across that 1 centimetre gap and labels it, 1 centimetre equals 10 divisions. An amber note points to one of the tiny steps and reads, smallest division equals 0.1 centimetres. So each little mark is 0.1 centimetres, the same as 1 millimetre.",
      },
      {
        kind: "concept",
        heading: "Some instruments are finer",
        body: "Different instruments have different precisions. A *metre rule* reads to 0.1 cm, *digital calipers* read to 0.01 mm, and a *digital micrometer* reads to 0.001 mm.",
        say: "The 3 length instruments do not all read to the same fineness. A metre rule measures down to 0.1 centimetres, which is 1 millimetre. Digital calipers do far better, reading to 0.01 millimetres. A digital micrometer is the finest of the 3, reading all the way down to 0.001 millimetres. The smaller the smallest division, the more precise the tool.",
      },
      {
        kind: "order",
        prompt: "Order these length instruments from least precise to most precise.",
        items: [
          "Metre rule (0.1 cm)",
          "Digital calipers (0.01 mm)",
          "Digital micrometer (0.001 mm)",
        ],
        ask: "Least precise means the largest smallest division, so start with the instrument whose divisions are widest apart. Remember 0.1 centimetres is 1 millimetre.",
        hints: [
          "0.1 centimetres is 1 millimetre, far bigger than 0.01 or 0.001 millimetres.",
          "The metre rule is least precise, then the calipers, then the micrometer is most precise.",
        ],
        explain: "From least to most precise the order is metre rule, then digital calipers, then digital micrometer. The metre rule's 0.1 centimetre division is 1 millimetre, larger than the calipers' 0.01 millimetres and the micrometer's 0.001 millimetres.",
      },
      {
        kind: "choice",
        question: "Which choice best matches the instrument to the job: measuring the diameter of a small coin, and measuring the length of a table?",
        options: [
          "Micrometer for the coin, metre rule for the table",
          "Metre rule for the coin, micrometer for the table",
          "Micrometer for both",
          "Metre rule for both",
        ],
        correct: 0,
        ask: "A tiny coin needs a very fine division, while a table is about 1 metre long and only needs the everyday centimetre marks.",
        hints: [
          "The coin's diameter is small, so it needs the more precise instrument.",
          "A metre rule easily spans a table, but is far too coarse for a small coin.",
        ],
        explain: "The micrometer suits the coin, because its diameter is small and needs a fine 0.001 millimetre division. The metre rule suits the table, because a table is about 1 metre long and its 0.1 centimetre marks are precise enough.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to its smallest division.",
        pairs: [
          { left: "Metre rule", right: "0.1 cm" },
          { left: "Digital calipers", right: "0.01 mm" },
          { left: "Digital micrometer", right: "0.001 mm" },
        ],
        ask: "The finer the instrument, the smaller its smallest division. Pair each one with its reading.",
        hints: [
          "The metre rule is the coarsest, reading to 0.1 centimetres.",
          "The micrometer is the finest, reading to 0.001 millimetres.",
        ],
        explain: "A metre rule reads to 0.1 centimetres, digital calipers read to 0.01 millimetres, and a digital micrometer reads to 0.001 millimetres.",
      },
      {
        kind: "choice",
        question: "A length falls between two smallest divisions on a metre rule. What should you do?",
        options: [
          "Estimate the reading to the nearest division",
          "Record only the lower division",
          "Record only the higher division",
          "Report that no reading is possible",
        ],
        correct: 0,
        ask: "The mark sits between 2 lines. Think about which single division it is closest to.",
        hints: [
          "You should still give a reading, not give up on it.",
          "Judge which of the 2 nearest lines the mark is closer to, and read to that one.",
        ],
        explain: "You estimate the reading to the nearest division. When a length falls between 2 smallest divisions, you judge which one it is closer to rather than refusing to read it.",
      },
      {
        kind: "insight",
        body: "To pick an instrument, match its *precision* to the job: a *tiny* object needs a fine division, while a *long* object can use a coarser scale.",
        say: "Here is the idea to keep. Always match the instrument to the size of what you are measuring. Something tiny, like the thickness of a wire or the diameter of a coin, needs a fine division such as a micrometer or calipers. Something long, like a table, is fine with the coarser 0.1 centimetre marks of a metre rule.",
      },
    ],
  },
];
