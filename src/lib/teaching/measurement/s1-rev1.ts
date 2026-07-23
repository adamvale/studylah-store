import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, Revision 1. Checkpoint over KB Chapter 01 (Measurement),
// sections t1.1 to t1.3: physical quantities and units, prefixes and standard
// form, measuring length. Question-only. Figures follow the apparatus colour
// note: white object, grey rulers/leaders, green correct tick, red wrong cross.

export const BOXES: Subconcept[] = [
  {
    id: "t1.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: physical quantities and units, prefixes and standard form, measuring length",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A student writes '4.5' as the result of a measurement. Why is this not yet a complete physical quantity?",
        options: [
          "It has a magnitude but no unit",
          "It is too small to measure",
          "It has a unit but no magnitude",
          "It is a derived quantity",
        ],
        correct: 0,
        ask: "A physical quantity has 2 parts. Which part is missing when you write 4.5 on its own?",
        hints: [
          "A physical quantity is a numerical magnitude together with a unit.",
          "The number 4.5 gives the magnitude, but with no unit you cannot tell 4.5 of what.",
        ],
        explain: "A measurement needs both a magnitude and a unit, so 4.5 on its own is incomplete, because the unit tells you the standard, such as metres or kilograms.",
      },
      {
        kind: "choice",
        question: "Which of these is an SI base unit?",
        options: ["kilogram", "newton", "m/s", "kg/m^3"],
        correct: 0,
        ask: "A base unit belongs to one of the 5 base quantities, not something built by multiplying or dividing units. Which option is that?",
        hints: [
          "The 5 base units include the metre, the kilogram, the second, the ampere and the kelvin.",
          "The newton, metres per second and kilograms per cubic metre are all built from other units, so they are derived.",
        ],
        explain: "The kilogram is a base unit, the base unit of mass. The newton, m/s and kg/m^3 are derived units, because each is built from base units by multiplying or dividing.",
      },
      {
        kind: "choice",
        question: "Express 0.08 m in nanometres, in standard form. (1 m = 10^9 nm)",
        options: ["8 x 10^7 nm", "8 x 10^9 nm", "8 x 10^-7 nm", "0.8 x 10^8 nm"],
        correct: 0,
        ask: "To go from metres to nanometres you multiply by 10^9, so work out 0.08 times 10^9.",
        hints: [
          "There are 10 to the power 9 nanometres in 1 metre, so multiply 0.08 by 10 to the power 9.",
          "0.08 times 10 to the power 9 is 8 times 10 to the power 7.",
        ],
        working: [
          { label: "Formula", latex: "1\\ \\text{m} = 10^{9}\\ \\text{nm}" },
          { label: "Substitute", latex: "0.08 \\times 10^{9}" },
          { label: "Answer", latex: "8 \\times 10^{7}\\ \\text{nm}" },
        ],
        explain: "0.08 metres is 8 times 10 to the power 7 nanometres, because multiplying 0.08 by 10 to the power 9 gives 8 times 10 to the power 7. Note that 0.8 times 10 to the power 8 is the same size but is not standard form, since A must be at least 1.",
      },
      {
        kind: "choice",
        question: "Express 32 mm in kilometres, in standard form. (1 km = 10^6 mm)",
        options: ["3.2 x 10^-5 km", "3.2 x 10^5 km", "32 x 10^-6 km", "3.2 x 10^-4 km"],
        correct: 0,
        ask: "To go from millimetres to kilometres you divide by 10^6, so work out 32 divided by 10^6.",
        hints: [
          "There are 10 to the power 6 millimetres in 1 kilometre, so divide 32 by 10 to the power 6.",
          "32 divided by 10 to the power 6 is 3.2 times 10 to the power minus 5.",
        ],
        working: [
          { label: "Formula", latex: "1\\ \\text{km} = 10^{6}\\ \\text{mm}" },
          { label: "Substitute", latex: "32 \\div 10^{6}" },
          { label: "Answer", latex: "3.2 \\times 10^{-5}\\ \\text{km}" },
        ],
        explain: "32 millimetres is 3.2 times 10 to the power minus 5 kilometres, because 32 divided by 10 to the power 6 is 3.2 times 10 to the power minus 5.",
      },
      {
        kind: "choice",
        question: "The figure shows an eye reading a scale. To avoid parallax error, where should the eye be?",
        figure: "fig-01-02-parallax-error",
        options: [
          "Directly above the mark, at 90 degrees to the scale",
          "At a shallow angle to the left",
          "At a shallow angle to the right",
          "As far from the scale as possible",
        ],
        correct: 0,
        ask: "Parallax error comes from viewing the scale at an angle. Which eye position looks straight down onto the mark?",
        hints: [
          "Reading from an angle lines the mark up with the wrong value on the scale.",
          "The line of sight should meet the scale at 90 degrees, straight above the mark.",
        ],
        explain: "To avoid parallax error the eye must be directly above the mark, at 90 degrees to the scale, because viewing from an angle lines the mark up with the wrong reading. In the figure the green tick marks that correct position and the red crosses mark the angled ones.",
      },
      {
        kind: "slider",
        prompt: "A block lies along a ruler with its left end at the 3.0 cm mark and its right end at the 5.4 cm mark. Set the slider to the length of the block, in cm.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "cm",
        start: 0,
        targetMin: 2.3,
        targetMax: 2.5,
        ask: "Measuring from a mark other than 0 means you subtract the 2 readings, so work out 5.4 minus 3.0.",
        hints: [
          "The length is the right-hand reading minus the left-hand reading.",
          "5.4 minus 3.0 is 2.4, so slide to 2.4 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "L = x_2 - x_1" },
          { label: "Substitute", latex: "L = 5.4 - 3.0" },
          { label: "Answer", latex: "L = 2.4\\ \\text{cm}" },
        ],
        explain: "The block is 2.4 centimetres long, because 5.4 centimetres minus 3.0 centimetres is 2.4 centimetres. Measuring from the 3.0 mark rather than 0 avoids any worn end of the rule.",
      },
      {
        kind: "tiles",
        prompt: "Build the working that writes 5 280 000 J in standard form.",
        tiles: ["5.28", "x", "10^6", "J", "52.8", "10^5"],
        answer: ["5.28", "x", "10^6", "J"],
        ask: "Standard form is A times 10^n with A between 1 and 10, so move the decimal point to just after the first digit and count the places.",
        hints: [
          "Put the decimal point after the first digit to get 5.28, then count how many places it moved.",
          "The point moves 6 places, so the number is 5.28 times 10 to the power 6 joules.",
        ],
        working: [
          { label: "Formula", latex: "A \\times 10^{n},\\ 1 \\le A < 10" },
          { label: "Substitute", latex: "5\\,280\\,000 = 5.28 \\times 10^{6}" },
          { label: "Answer", latex: "5.28 \\times 10^{6}\\ \\text{J}" },
        ],
        explain: "5 280 000 joules is 5.28 times 10 to the power 6 joules, because moving the decimal point 6 places to the left gives 5.28 times 10 to the power 6.",
      },
      {
        kind: "match",
        prompt: "Match each base quantity to its SI base unit.",
        pairs: [
          { left: "length", right: "metre (m)" },
          { left: "mass", right: "kilogram (kg)" },
          { left: "time", right: "second (s)" },
          { left: "electric current", right: "ampere (A)" },
        ],
        ask: "Recall the SI base quantities and the base unit that goes with each one.",
        hints: [
          "Length is measured in metres and mass in kilograms.",
          "Time is measured in seconds and electric current in amperes.",
        ],
        explain: "Length pairs with the metre, mass with the kilogram, time with the second and electric current with the ampere. These are 4 of the 5 SI base quantities.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of prefixes and standard form.",
        segments: [
          "The prefix kilo stands for a factor of ",
          ", and the prefix milli stands for ",
          ". Standard form writes a number as A times ",
          ", with 1 <= A < 10.",
        ],
        bank: ["10^3", "10^-3", "10^n", "10^6", "10^-6"],
        answer: ["10^3", "10^-3", "10^n"],
        ask: "Recall the factor for kilo, the factor for milli, and the general power of 10 used in standard form.",
        hints: [
          "Kilo means a factor of 10 to the power 3; milli means 10 to the power minus 3.",
          "Standard form always uses 10 to the power n, where A is at least 1 and less than 10.",
        ],
        explain: "Kilo stands for 10 to the power 3 and milli for 10 to the power minus 3. Standard form writes a number as A times 10 to the power n, with A at least 1 and less than 10.",
      },
      {
        kind: "classify",
        prompt: "Sort each quantity as a base quantity or a derived quantity.",
        bins: ["Base quantity", "Derived quantity"],
        items: [
          { text: "length", bin: 0 },
          { text: "mass", bin: 0 },
          { text: "time", bin: 0 },
          { text: "speed", bin: 1 },
          { text: "density", bin: 1 },
          { text: "volume", bin: 1 },
        ],
        ask: "A base quantity is one of the 5 SI basics; a derived quantity is built from them by multiplying or dividing. Tap each one and drop it in its bin.",
        hints: [
          "Length, mass and time are 3 of the 5 base quantities.",
          "Speed is distance divided by time, volume is length times width times height, and density is mass divided by volume, so all 3 are derived.",
        ],
        explain: "Length, mass and time are base quantities. Speed, density and volume are derived, because each is built from base quantities by multiplying or dividing.",
      },
      {
        kind: "open",
        prompt: "State the 2 parts that make up any physical quantity, and give one example of a physical quantity written correctly.",
        modelAnswer: "A physical quantity is written as a numerical magnitude together with a unit. The magnitude says how much and the unit says the standard. For example, a mass of 10 kilograms, where 10 is the magnitude and the kilogram is the unit.",
        marks: [
          "A physical quantity has a numerical magnitude and a unit.",
          "The magnitude says how much; the unit says the standard.",
          "A correct example is given, such as 10 kg.",
        ],
        ask: "Think about why a bare number like 4.5 is not enough, and what you must add to it.",
      },
      {
        kind: "open",
        prompt: "The figure shows a ruler with a zero error. Explain what zero error means, and state one way to reduce errors when measuring length with a rule.",
        figure: "fig-01-04-zero-error",
        modelAnswer: "Zero error means the scale does not read 0 where the object actually starts, so every reading is shifted. A positive zero error reads too large and a negative zero error reads too small. To reduce errors you can measure from a mark other than 0, such as 3.0 cm, and subtract, or repeat the measurement and take an average.",
        marks: [
          "Zero error: the scale does not start at 0 where the object sits, so readings are shifted.",
          "Positive zero error reads too large; negative zero error reads too small.",
          "One valid reduction: measure from a mark other than 0 and subtract, or repeat and average.",
        ],
        ask: "Think about what goes wrong if the scale does not line up with 0 at the object's edge, and a trick to avoid relying on the 0 mark.",
      },
    ],
  },
];
