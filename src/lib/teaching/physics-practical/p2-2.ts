import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics (Practical Chapter 2), section 2.
// Reading vernier calipers and the micrometer screw gauge; correcting a zero error.
// Figure colours (house dark theme): apparatus outlines white/grey; a highlighted READING amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.2",
    code: "TP2.2",
    title: "Reading vernier calipers and the micrometer; zero error",
    blurb: "Adding the main scale to the fine scale, then correcting a zero error",
    steps: [
      {
        kind: "concept",
        heading: "Reading vernier calipers",
        body: "Read *vernier calipers* as the *main-scale* value to 0.1 cm, then add the *coinciding vernier division* multiplied by 0.01 cm.",
        formula: {
          latex: "\\text{reading} = \\text{main} + n \\times 0.01\\ \\text{cm}",
          where: [
            { sym: "main", meaning: "main-scale value just before the vernier zero", unit: "cm" },
            { sym: "n", meaning: "number of the vernier division that lines up with a main mark" },
          ],
        },
        say: "Vernier calipers give you 2 scales. First read the main scale to the nearest 0.1 centimetre, at the mark just before the vernier zero. Then look along the sliding vernier scale for the one division that lines up exactly with a main-scale mark. Multiply that division number by 0.01 centimetre and add it on. So a main reading of 4 point 2 centimetres, with division 3 coinciding, gives 4 point 2 plus 0 point 0 3, which is 4 point 2 3 centimetres.",
      },
      {
        kind: "concept",
        heading: "Reading a micrometer",
        figure: "fig-pr2-02-micrometer-rod",
        body: "Read a *micrometer screw gauge* as the *sleeve* value to 0.5 mm, then add the *thimble* value multiplied by 0.01 mm.",
        formula: {
          latex: "\\text{reading} = \\text{sleeve} + n \\times 0.01\\ \\text{mm}",
          where: [
            { sym: "sleeve", meaning: "main sleeve value, read to 0.5 mm", unit: "mm" },
            { sym: "n", meaning: "thimble division lined up with the centre line" },
          ],
        },
        say: "In the picture a white micrometer screw gauge grips a rod between its anvil and spindle. Read the sleeve, the fixed scale along the barrel, to the nearest 0 point 5 millimetre. Then read the thimble, the rotating scale, where it meets the centre line, and multiply that number by 0 point 0 1 millimetre. Add the 2. A sleeve reading of 7 point 5 millimetres with thimble 32 gives 7 point 5 plus 0 point 3 2, which is 7 point 8 2 millimetres.",
      },
      {
        kind: "concept",
        heading: "Zero error",
        body: "A *zero error* is the reading shown when the jaws are *fully closed*. A positive one is *subtracted*; a negative one is *added back*.",
        formula: {
          latex: "\\text{corrected} = \\text{observed} - \\text{zero error}",
          where: [
            { sym: "observed", meaning: "reading taken from the scales" },
            { sym: "zero error", meaning: "reading when the jaws are closed (may be + or -)" },
          ],
        },
        say: "Before you trust any reading, close the jaws fully and see what the scale says. If it does not read zero, that offset is the zero error, and it shifts every reading the same way. To fix it, take corrected equals observed minus the zero error. A positive zero error is subtracted off. A negative zero error, because you are subtracting a negative, is effectively added back on.",
      },
      {
        kind: "choice",
        question: "Vernier calipers show a main-scale reading of 4.2 cm, and vernier division 3 coincides with a main mark. What is the reading?",
        options: ["4.05 cm", "4.5 cm", "4.23 cm", "4.26 cm"],
        correct: 2,
        ask: "Take the main-scale value of 4.2, then add 3 times 0.01 centimetre.",
        hints: [
          "The fine part is the coinciding division times 0.01 centimetre.",
          "3 times 0.01 is 0.03, and 4.2 plus 0.03 is 4.23.",
        ],
        working: [
          { label: "Formula", latex: "\\text{reading} = \\text{main} + n \\times 0.01\\ \\text{cm}" },
          { label: "Substitute", latex: "= 4.2 + 3 \\times 0.01" },
          { label: "Answer", latex: "= 4.23\\ \\text{cm}" },
        ],
        explain: "The reading is 4.23 centimetres, because the main scale gives 4.2 centimetres and division 3 adds 0.03 centimetre.",
      },
      {
        kind: "slider",
        prompt: "Vernier calipers read 2.1 cm on the main scale, and vernier division 6 coincides with a main mark. Set the slider to the reading, in cm.",
        min: 2,
        max: 3,
        step: 0.01,
        unit: "cm",
        start: 2,
        targetMin: 2.15,
        targetMax: 2.17,
        ask: "Add the main-scale value of 2.1 to 6 times 0.01 centimetre.",
        hints: [
          "The fine part is 6 times 0.01 centimetre.",
          "6 times 0.01 is 0.06, and 2.1 plus 0.06 is 2.16, so slide to 2.16 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\text{reading} = \\text{main} + n \\times 0.01\\ \\text{cm}" },
          { label: "Substitute", latex: "= 2.1 + 6 \\times 0.01" },
          { label: "Answer", latex: "= 2.16\\ \\text{cm}" },
        ],
        explain: "The reading is 2.16 centimetres, because 2.1 centimetres plus 0.06 centimetre from division 6 is 2.16 centimetres.",
      },
      {
        kind: "choice",
        question: "A micrometer screw gauge reads 7.5 mm on the sleeve, and the thimble reads 32. What is the reading?",
        figure: "fig-pr2-02-micrometer-rod",
        options: ["7.82 mm", "7.32 mm", "8.02 mm", "10.7 mm"],
        correct: 0,
        ask: "Add the sleeve value of 7.5 to 32 times 0.01 millimetre.",
        hints: [
          "The thimble part is 32 times 0.01 millimetre.",
          "32 times 0.01 is 0.32, and 7.5 plus 0.32 is 7.82.",
        ],
        working: [
          { label: "Formula", latex: "\\text{reading} = \\text{sleeve} + n \\times 0.01\\ \\text{mm}" },
          { label: "Substitute", latex: "= 7.5 + 32 \\times 0.01" },
          { label: "Answer", latex: "= 7.82\\ \\text{mm}" },
        ],
        explain: "The reading is 7.82 millimetres, because the sleeve gives 7.5 millimetres and the thimble adds 0.32 millimetre.",
      },
      {
        kind: "slider",
        prompt: "A micrometer reads 11.0 mm on the sleeve, and the thimble reads 8. Set the slider to the reading, in mm.",
        min: 10,
        max: 12,
        step: 0.01,
        unit: "mm",
        start: 10,
        targetMin: 11.07,
        targetMax: 11.09,
        ask: "Add the sleeve value of 11.0 to 8 times 0.01 millimetre.",
        hints: [
          "The thimble part is 8 times 0.01 millimetre.",
          "8 times 0.01 is 0.08, and 11.0 plus 0.08 is 11.08, so slide to 11.08 millimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\text{reading} = \\text{sleeve} + n \\times 0.01\\ \\text{mm}" },
          { label: "Substitute", latex: "= 11.0 + 8 \\times 0.01" },
          { label: "Answer", latex: "= 11.08\\ \\text{mm}" },
        ],
        explain: "The reading is 11.08 millimetres, because 11.0 millimetres plus 0.08 millimetre from thimble 8 is 11.08 millimetres.",
      },
      {
        kind: "choice",
        question: "A micrometer gives an observed reading of 8.46 mm. Closing the jaws shows a zero error of -0.03 mm. What is the corrected reading?",
        options: ["8.43 mm", "8.13 mm", "8.46 mm", "8.49 mm"],
        correct: 3,
        ask: "Use corrected equals observed minus zero error, and remember subtracting a negative adds it back on.",
        hints: [
          "Corrected is 8.46 minus negative 0.03.",
          "Subtracting negative 0.03 is the same as adding 0.03, so 8.46 plus 0.03 is 8.49.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "= 8.46 - (-0.03)" },
          { label: "Answer", latex: "= 8.49\\ \\text{mm}" },
        ],
        explain: "The corrected reading is 8.49 millimetres, because a negative zero error is added back, so 8.46 plus 0.03 is 8.49.",
      },
      {
        kind: "tiles",
        prompt: "An observed reading is 5.72 mm with a zero error of +0.04 mm. Build the correction: corrected = observed - zero error.",
        tiles: ["5.72", "-", "0.04", "=", "5.68", "+", "5.76"],
        answer: ["5.72", "-", "0.04", "=", "5.68"],
        ask: "A positive zero error is subtracted, so take 5.72 minus 0.04.",
        hints: [
          "Use corrected equals observed minus zero error.",
          "5.72 minus 0.04 is 5.68.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "= 5.72 - 0.04" },
          { label: "Answer", latex: "= 5.68\\ \\text{mm}" },
        ],
        explain: "The corrected reading is 5.68 millimetres, because a positive zero error of 0.04 is subtracted from 5.72.",
      },
      {
        kind: "choice",
        question: "An observed reading is 12.40 mm and the zero error is +0.03 mm. What is the corrected reading?",
        options: ["12.43 mm", "12.37 mm", "12.40 mm", "12.34 mm"],
        correct: 1,
        ask: "A positive zero error is subtracted, so take 12.40 minus 0.03.",
        hints: [
          "Use corrected equals observed minus zero error.",
          "12.40 minus 0.03 is 12.37.",
        ],
        working: [
          { label: "Formula", latex: "\\text{corrected} = \\text{observed} - \\text{zero error}" },
          { label: "Substitute", latex: "= 12.40 - 0.03" },
          { label: "Answer", latex: "= 12.37\\ \\text{mm}" },
        ],
        explain: "The corrected reading is 12.37 millimetres, because a positive zero error of 0.03 is subtracted from 12.40.",
      },
      {
        kind: "insight",
        body: "Always take the *reading* first, then apply the *zero-error correction* - skip it and every value is *shifted* the same way.",
        say: "Here is the habit to keep. Reading the scales and correcting the zero error are 2 separate steps, and both matter. A zero error is systematic, so if you forget it, every single measurement is wrong by the same amount in the same direction. Check the closed jaws, note the offset, and correct it every time.",
      },
    ],
  },
];
