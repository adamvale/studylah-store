import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics (Practical Chapter 2), section 1.
// Grounded in Practical Chapter 02: instruments, range and precision.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.1",
    code: "TP2.1",
    title: "Instruments for length, time and mass; range and precision",
    blurb: "The 3 basic quantities, their SI units, and how to pick and read an instrument",
    steps: [
      {
        kind: "concept",
        heading: "3 quantities, 3 SI units",
        body: "The 3 quantities you measure most in the lab are *length*, *time* and *mass*. Their SI units are the metre, the second and the kilogram.",
        say: "Almost every practical comes down to measuring 3 basic quantities: length, time and mass. Each has its own SI unit. Length is measured in metres, time in seconds, and mass in kilograms. Fix that pairing in your mind before you touch any instrument.",
      },
      {
        kind: "concept",
        heading: "Range versus precision",
        body: "An instrument's *measuring range* is the span it can read, from its smallest to its largest value. Its *precision* is the *smallest division* on the scale: a smaller division lets you record more *significant figures*.",
        say: "2 different ideas describe an instrument. The range is how far the scale stretches, from the smallest value it can read up to the largest. The precision is the size of its smallest division. The finer that smallest division, the more significant figures you can record, so the more precise the reading.",
      },
      {
        kind: "concept",
        heading: "Instruments for length",
        body: "For *length*, a measuring tape or metre rule reads to *0.1 cm*, *vernier calipers* read to 0.01 cm, and a micrometer screw gauge reads to 0.01 mm, the most precise of the 3.",
        say: "For length there is a ladder of precision. A metre rule or measuring tape reads to 0.1 centimetres. Vernier calipers do better, reading to 0.01 centimetres. Best of all is the micrometer screw gauge, reading to 0.01 millimetres. As the smallest division shrinks, the precision climbs.",
      },
      {
        kind: "concept",
        heading: "Instruments for time and mass",
        figure: "fig-pr2-01-stopwatches",
        body: "For *time*, a *digital stopwatch* reads to *0.01 s* while an analogue one reads only to 1 s. For mass, an electronic balance reads to 0.01 g and has a tare button to zero off a container.",
        say: "Here you can see 2 stopwatches side by side: on the left an analogue stopwatch with a hand sweeping the outer scale, on the right a digital one. The digital stopwatch reads to 0.01 seconds, far finer than the analogue one at 1 second. For mass, an electronic balance reads to 0.01 grams, and its tare button resets the display to zero so a container's mass is not counted.",
      },
      {
        kind: "insight",
        body: "Choose the *most precise* instrument whose *range* still covers the quantity, then record to the *instrument's precision*, so write *4.0 cm* on a metre rule, not 4 cm.",
        say: "2 habits mark a careful experimenter. First, pick the most precise instrument whose range can still cover the whole quantity, because a micrometer is useless if the object is bigger than its 25 millimetre jaws. Second, always record to the instrument's precision. On a metre rule that reads to 0.1 centimetres, write 4.0 centimetres, not just 4, because the extra digit shows the precision you actually measured to.",
      },
      {
        kind: "choice",
        question: "Which quantity is correctly paired with its SI unit?",
        options: ["Length, metre", "Mass, newton", "Time, hertz", "Length, gram"],
        correct: 0,
        ask: "Run through the 3 base pairings: length goes with one unit, time with another, mass with a third. Which option matches?",
        hints: [
          "The SI unit of mass is the kilogram, not the newton.",
          "Length is measured in metres, time in seconds, mass in kilograms.",
        ],
        explain: "Length pairs with the metre. Mass is measured in kilograms not newtons, time in seconds not hertz, so those pairings are wrong.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to the quantity and precision it reads.",
        pairs: [
          { left: "Metre rule", right: "Length to 0.1 cm" },
          { left: "Vernier calipers", right: "Length to 0.01 cm" },
          { left: "Micrometer screw gauge", right: "Length to 0.01 mm" },
          { left: "Digital stopwatch", right: "Time to 0.01 s" },
          { left: "Electronic balance", right: "Mass to 0.01 g" },
        ],
        ask: "First decide what each tool measures: length, time or mass. Then recall how fine its smallest division is.",
        hints: [
          "3 of these measure length, but each to a different precision: 0.1 cm, 0.01 cm, 0.01 mm.",
          "The micrometer is the finest length tool; the stopwatch measures time; the balance measures mass.",
        ],
        explain: "The metre rule reads length to 0.1 cm, vernier calipers to 0.01 cm and the micrometer to 0.01 mm. The digital stopwatch reads time to 0.01 s and the electronic balance reads mass to 0.01 g.",
      },
      {
        kind: "classify",
        prompt: "Sort each length instrument by its precision (smallest division).",
        bins: ["0.1 cm", "0.01 cm", "0.01 mm"],
        items: [
          { text: "metre rule", bin: 0 },
          { text: "measuring tape", bin: 0 },
          { text: "vernier calipers", bin: 1 },
          { text: "micrometer screw gauge", bin: 2 },
        ],
        ask: "For each instrument, recall the size of its smallest division, then drop it into the matching bin.",
        hints: [
          "The metre rule and the measuring tape share the same smallest division.",
          "Vernier calipers read to 0.01 cm; the micrometer is finer still at 0.01 mm.",
        ],
        explain: "The metre rule and measuring tape both read to 0.1 cm. Vernier calipers read to 0.01 cm, and the micrometer screw gauge is the most precise at 0.01 mm.",
      },
      {
        kind: "choice",
        question: "You need the diameter of a thin wire as precisely as possible, and it fits inside a 25 mm gap. Which instrument is best?",
        options: ["Measuring tape", "Metre rule", "Micrometer screw gauge", "Vernier calipers"],
        correct: 2,
        ask: "The wire is small enough to fit every option's range, so choose the one with the smallest division.",
        hints: [
          "Rank the precisions: 0.1 cm, 0.01 cm, 0.01 mm. Which is finest?",
          "The micrometer reads to 0.01 mm and its 25 mm range covers a thin wire.",
        ],
        explain: "The micrometer screw gauge is best: its 0.01 mm precision is the finest, and its 0 to 25 mm range still covers the thin wire.",
      },
      {
        kind: "choice",
        question: "A length is measured on a metre rule that reads to 0.1 cm. Which recording is correct?",
        options: ["4 cm", "4.0 cm", "4.00 cm", "4 mm"],
        correct: 1,
        ask: "The reading must show the precision of the rule, no more digits and no fewer. How many decimal places does 0.1 cm give?",
        hints: [
          "Record to the instrument's precision: a rule reading to 0.1 cm gives 1 decimal place.",
          "Writing 4 cm hides the precision; writing 4.00 cm claims more than the rule can give.",
        ],
        explain: "4.0 cm is correct, because the rule reads to 0.1 cm, which is 1 decimal place. Writing 4 cm hides that precision, and 4.00 cm claims a precision the rule does not have.",
      },
      {
        kind: "choice",
        question: "Why would a micrometer screw gauge be the wrong choice for measuring the length of a 30 cm pencil?",
        options: ["Its precision is too coarse", "It reads in the wrong unit", "It cannot measure length", "The pencil is outside its measuring range"],
        correct: 3,
        ask: "Think about the 2 things an instrument must offer: enough precision and enough range. Which one fails here?",
        hints: [
          "A micrometer's range is only about 0 to 25 mm.",
          "A 30 cm pencil is far longer than the gap between the anvil and spindle.",
        ],
        explain: "The pencil is outside the micrometer's range, whose jaws span only about 0 to 25 mm. Precision is not the problem; the quantity is simply too big to fit, so a metre rule is used instead.",
      },
    ],
  },
];
