import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, section 2. Grounded in KB Chapter 01 (Measurement) prefixes and standard form.
// No figure in this section: it is calculation-heavy, so every conversion question carries working.

export const BOXES: Subconcept[] = [
  {
    id: "t1.2",
    code: "T1.2",
    title: "Prefixes and standard form",
    blurb: "Prefixes for powers of ten, and writing numbers in standard form",
    steps: [
      {
        kind: "concept",
        heading: "Prefixes",
        figure: "fig-01-02a-prefix-ladder",
        body: "A *prefix* is a factor placed in front of a *unit* so we can write very large or very small numbers neatly. Each prefix stands for a fixed power of *ten*.",
        formula: {
          latex: "\\text{kilo } k = 10^{3}, \\quad \\text{milli } m = 10^{-3}, \\quad \\text{mega } M = 10^{6}, \\quad \\text{nano } n = 10^{-9}",
        },
        say: "A prefix is a shorthand factor we stick in front of a unit so we do not have to write out long strings of zeros. Kilo means 10 to the power 3, so a kilometre is 1000 metres. Milli means 10 to the power minus 3, mega means 10 to the power 6, and nano means 10 to the power minus 9. Each prefix always stands for the same power of 10. In the picture the prefixes sit on a ladder, giga at the top down to nano at the bottom, each rung giving the name, the symbol and the power of 10, with the plain unit picked out in amber in the middle. A grey arrow down the left says divide, and a grey arrow up the right says multiply.",
      },
      {
        kind: "concept",
        heading: "Divide one way, multiply the other",
        body: "To change a *plain* unit into a *prefixed* unit, *divide* by the prefix factor. To change a prefixed unit back into a plain unit, *multiply* by that factor.",
        say: "The direction of the swap decides whether you multiply or divide. Going from a plain unit to a prefixed unit, you divide by the factor. For example, 2000 metres divided by 1000 is 2 kilometres. Going the other way, from a prefixed unit back to a plain unit, you multiply by the factor, so 3 kilometres times 1000 is 3000 metres.",
      },
      {
        kind: "concept",
        heading: "Standard form",
        figure: "fig-01-03a-standard-form",
        body: "*Standard form* writes any value as a *number* A times a *power of 10*, where A is at least 1 and less than 10.",
        formula: {
          latex: "A \\times 10^{n}, \\quad 1 \\le A < 10",
          where: [
            { sym: "A", meaning: "a number from 1 up to but not including 10" },
            { sym: "n", meaning: "a whole number, the power of 10" },
          ],
        },
        say: "Standard form is a tidy way to write very big or very small numbers. You write one number, called A, times 10 to the power n. The rule is that A must be at least 1 and less than 10, so there is exactly one digit before the decimal point. The power n tells you how many places the decimal point has moved. A positive n means a large number, and a negative n means a small number. The picture works one through. 5 280 000 sits at the top, a grey dashed arrow shows the decimal point hopping 6 places to the left, and underneath you get 5.28 times 10 to the power 6, with the 5.28 picked out in amber. An amber note repeats the rule that A must be at least 1 and less than 10.",
      },
      {
        kind: "choice",
        question: "Write the length 0.0000473 m in standard form.",
        options: ["4.73 x 10^-5 m", "4.73 x 10^-4 m", "47.3 x 10^-6 m", "4.73 x 10^5 m"],
        correct: 0,
        ask: "Move the decimal point to just after the first non-zero digit, then count how many places it moved. Moving to the right gives a negative power.",
        hints: [
          "The first non-zero digit is 4, so A is 4.73.",
          "The decimal point moves 5 places to the right, so the power is minus 5.",
        ],
        working: [
          { label: "Formula", latex: "A \\times 10^{n},\\ 1 \\le A < 10" },
          { label: "Substitute", latex: "0.0000473 = 4.73 \\times 10^{-5}" },
          { label: "Answer", latex: "0.0000473\\ \\text{m} = 4.73 \\times 10^{-5}\\ \\text{m}" },
        ],
        explain: "In standard form 0.0000473 becomes 4.73 times 10 to the power minus 5, because the decimal point moves 5 places to the right to sit just after the first non-zero digit. Note that 47.3 times 10 to the power minus 6 is the same size but is not standard form, since A must be less than 10.",
      },
      {
        kind: "tiles",
        prompt: "Build the working that writes 5 280 000 J in standard form.",
        tiles: ["5 280 000", "=", "5.28", "\\times", "10^6", "J", "10^7", "52.8"],
        answer: ["5 280 000", "=", "5.28", "\\times", "10^6", "J"],
        ask: "Put the decimal point just after the first digit, 5, then count how many places it moved to find the power.",
        hints: [
          "The number becomes 5.28, and the decimal point moves 6 places to the left.",
          "Moving 6 places to the left gives 10 to the power 6, so it is 5.28 times 10 to the power 6.",
        ],
        working: [
          { label: "Formula", latex: "A \\times 10^{n},\\ 1 \\le A < 10" },
          { label: "Substitute", latex: "5\\,280\\,000 = 5.28 \\times 10^{6}" },
          { label: "Answer", latex: "5\\,280\\,000\\ \\text{J} = 5.28 \\times 10^{6}\\ \\text{J}" },
        ],
        explain: "5 280 000 joules is 5.28 times 10 to the power 6 joules, because the decimal point moves 6 places to the left to sit just after the 5.",
      },
      {
        kind: "slider",
        prompt: "0.08 m can be written as 8 x 10^n nm. Set the slider to the power n.",
        min: 0,
        max: 12,
        step: 1,
        start: 0,
        targetMin: 6.5,
        targetMax: 7.5,
        ask: "First write 1 metre as 10 to the power 9 nanometres, then convert 0.08 metres and read off the power of 10.",
        hints: [
          "1 metre is 10 to the power 9 nanometres, so 0.08 metres is 0.08 times 10 to the power 9 nanometres.",
          "0.08 times 10 to the power 9 is 8 times 10 to the power 7, so the power n is 7.",
        ],
        working: [
          { label: "Formula", latex: "1\\ \\text{m} = 10^{9}\\ \\text{nm}" },
          { label: "Substitute", latex: "0.08\\ \\text{m} = 0.08 \\times 10^{9}\\ \\text{nm}" },
          { label: "Answer", latex: "= 8 \\times 10^{7}\\ \\text{nm}" },
        ],
        explain: "The power n is 7, because 0.08 times 10 to the power 9 nanometres is 8 times 10 to the power 7 nanometres.",
      },
      {
        kind: "spoterror",
        prompt: "A student converts 32 mm to km. Find the line with the mistake.",
        lines: [
          "32 mm = 32 x 10^-3 m",
          "= 0.032 m",
          "0.032 m = 0.032 x 10^-3 km",
          "= 3.2 x 10^-4 km",
        ],
        errorLine: 3,
        ask: "Check the last line. Work out 0.032 times 10 to the power minus 3 and compare the power of 10.",
        hints: [
          "0.032 is 3.2 times 10 to the power minus 2.",
          "3.2 times 10 to the power minus 2, times 10 to the power minus 3, is 3.2 times 10 to the power minus 5, not minus 4.",
        ],
        working: [
          { label: "Formula", latex: "1\\ \\text{km} = 10^{3}\\ \\text{m}" },
          { label: "Substitute", latex: "0.032\\ \\text{m} = 0.032 \\times 10^{-3}\\ \\text{km}" },
          { label: "Answer", latex: "= 3.2 \\times 10^{-5}\\ \\text{km}" },
        ],
        explain: "The last line is wrong. 0.032 times 10 to the power minus 3 is 3.2 times 10 to the power minus 5 kilometres, not 3.2 times 10 to the power minus 4.",
      },
      {
        kind: "insight",
        body: "*Prefixes* and *standard form* do the same job in 2 ways: both replace long runs of zeros with a *power of 10*, so numbers stay short and easy to compare.",
        say: "Here is the thread that ties this together. Prefixes and standard form are 2 tools for the same problem, taming numbers with lots of zeros. A prefix hides the power of 10 inside the unit, while standard form writes the power of 10 out in the open. Pick whichever keeps your working clearest.",
      },
    ],
  },
];
