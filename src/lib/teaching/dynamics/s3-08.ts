import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 8. Grounded in KB Chapter 04 (Forces) on Newton's second law, F = ma.

export const BOXES: Subconcept[] = [
  {
    id: "t3.8",
    code: "T3.8",
    title: "Newton's second law, F = ma",
    blurb: "How resultant force, mass and acceleration are linked, and how to use it",
    steps: [
      {
        kind: "concept",
        heading: "Resultant force and acceleration",
        figure: "fig-04-09-newton-second-law",
        body: "When a *resultant force* acts on an object of constant *mass*, the object *accelerates* in the same *direction* as that force.",
        say: "Look at the diagram. A single yellow arrow pushes the block to the right, and a green arrow beneath it shows the block speeding up the same way. When the forces on an object do not cancel, there is a leftover push we call the resultant force. That resultant force makes the object accelerate, and the acceleration always points the same way as the force. With no resultant force, there is no acceleration at all.",
      },
      {
        kind: "concept",
        heading: "The size of the acceleration",
        body: "The *acceleration* an object gains is set by 2 things: the *resultant force* on it and its *mass*. A bigger force gives more acceleration, while a bigger mass gives less.",
        formula: {
          latex: "F = ma",
          where: [
            { sym: "F", meaning: "resultant force", unit: "N" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "a", meaning: "acceleration", unit: "m/s^2" },
          ],
        },
        say: "This is the second law, in words and in symbols. The acceleration depends on 2 things: the resultant force and the mass. A larger resultant force on the same mass gives a bigger acceleration. For a fixed force, a larger mass gives a smaller acceleration, because the same push is shared over more matter. And the units tie together neatly: a resultant force of 1 newton gives a mass of 1 kilogram an acceleration of 1 metre per second squared.",
      },
      {
        kind: "concept",
        heading: "Combine the forces first",
        figure: "fig-04-11-we-box-push",
        body: "Before using the law, find the *resultant force*. Forces in the *same direction* add together, while forces in *opposite directions* subtract.",
        say: "The picture shows a box on the ground. A yellow arrow pushes it forward with 25 newtons, and a blue friction arrow drags backward with 13 newtons. These point opposite ways, so they subtract: 25 minus 13 leaves a resultant of 12 newtons forward. The box has a mass of 4 kilograms, so its acceleration is 12 divided by 4, which is 3 metres per second squared. Always combine the forces into a single resultant before you work out the acceleration.",
      },
      {
        kind: "choice",
        question: "A resultant force of 12 N acts on a 3.0 kg mass. Find its acceleration.",
        options: ["4.0 m/s^2", "36 m/s^2", "0.25 m/s^2", "9.0 m/s^2"],
        correct: 0,
        ask: "Acceleration is the resultant force divided by the mass, so work out 12 ÷ 3.0. Which option matches?",
        hints: [
          "Rearrange F equals m a into a equals F divided by m.",
          "12 ÷ 3.0 is 4.0, in metres per second squared.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{F}{m}" },
          { label: "Substitute", latex: "a = \\dfrac{12}{3.0}" },
          { label: "Answer", latex: "a = 4.0\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is 4.0 metres per second squared, because 12 newtons divided by 3.0 kilograms is 4.0 metres per second squared.",
      },
      {
        kind: "slider",
        prompt: "A 2.0 kg block is pushed with 18 N while friction pulls back with 6.0 N. Set the slider to the block's acceleration, in m/s^2.",
        min: 0,
        max: 20,
        step: 0.1,
        unit: "m/s^2",
        start: 0,
        targetMin: 5.9,
        targetMax: 6.1,
        ask: "First combine the forces: 18 - 6.0 gives the resultant. Then divide by the 2.0 kilogram mass.",
        hints: [
          "The resultant force is 18 - 6.0, which is 12 newtons.",
          "12 ÷ 2.0 is 6.0, so slide to 6.0 metres per second squared.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{F}{m}" },
          { label: "Substitute", latex: "a = \\dfrac{18 - 6.0}{2.0}" },
          { label: "Answer", latex: "a = 6.0\\ \\text{m/s}^2" },
        ],
        explain: "The resultant force is 18 - 6.0, which is 12 newtons, so the acceleration is 12 ÷ 2.0, giving 6.0 metres per second squared.",
      },
      {
        kind: "tiles",
        prompt: "A 4.0 kg mass accelerates at 2.5 m/s^2. Build the working line that gives the resultant force F.",
        tiles: ["F =", "4.0", "\\times", "2.5", "=", "10", "N", "m/s^2"],
        answer: ["F =", "4.0", "\\times", "2.5", "=", "10", "N"],
        ask: "The resultant force is mass times acceleration, so set up 4.0 × 2.5.",
        hints: [
          "Use F equals m times a.",
          "4.0 × 2.5 is 10, and force is measured in newtons.",
        ],
        working: [
          { label: "Formula", latex: "F = ma" },
          { label: "Substitute", latex: "F = 4.0 \\times 2.5" },
          { label: "Answer", latex: "F = 10\\ \\text{N}" },
        ],
        explain: "The resultant force is 10 newtons, because 4.0 kilograms times 2.5 metres per second squared is 10 newtons.",
      },
      {
        kind: "spoterror",
        prompt: "A resultant force of 20 N gives a mass an acceleration of 5.0 m/s^2. Here is a student's working to find the mass. Tap the line with the mistake.",
        lines: ["F = ma", "m = F \\times a", "m = 20 \\times 5.0", "m = 100\\ \\text{kg}"],
        errorLine: 1,
        ask: "Check the rearrangement. To make mass the subject of F equals m a, should you multiply by a or divide by a?",
        hints: [
          "Rearranging F equals m a for mass gives m equals F divided by a.",
          "The line that multiplies F by a is wrong; it should divide, giving 20 ÷ 5.0.",
        ],
        working: [
          { label: "Formula", latex: "m = \\dfrac{F}{a}" },
          { label: "Substitute", latex: "m = \\dfrac{20}{5.0}" },
          { label: "Answer", latex: "m = 4.0\\ \\text{kg}" },
        ],
        explain: "The mistake is on the line that writes m equals F times a. Rearranging F equals m a for mass gives m equals F divided by a, so the mass is 20 ÷ 5.0, which is 4.0 kilograms, not 100 kilograms.",
      },
      {
        kind: "insight",
        body: "When an object moves at *constant velocity*, the *resultant force* is *zero*, so the applied force exactly balances the *friction*.",
        say: "Here is the case that seems strange at first. If an object keeps moving at a steady, constant velocity, its acceleration is zero, so the resultant force on it must be zero too. That means the force pushing it forward is exactly equal to the friction pushing back. A resultant force is only needed to change velocity, never just to keep it steady.",
      },
    ],
  },
];