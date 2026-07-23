import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), Revision 2. Checkpoint over sections tp5.4 to
// tp5.6: critical angle and total internal reflection, the converging lens and the
// lens equation, and measuring focal length. Question-only. No `formula` fields.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: critical angle, converging lens and focal length",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A glass block has refractive index n = 1.5. Using sin c = 1/n, what is its critical angle c?",
        options: ["49 degrees", "42 degrees", "34 degrees", "90 degrees"],
        correct: 1,
        ask: "Work out sin c as 1 ÷ 1.5, then take the inverse sine. Which option is that angle?",
        hints: [
          "sin c is 1 divided by n, so 1 ÷ 1.5 is 0.667.",
          "The angle whose sine is 0.667 is about 42 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.5} = 0.667" },
          { label: "Answer", latex: "c = 42^\\circ" },
        ],
        explain: "The critical angle is about 42 degrees, because 1 ÷ 1.5 is 0.667, and the angle whose sine is 0.667 is 42 degrees.",
      },
      {
        kind: "choice",
        question: "An object at u = 25.0 cm gives a sharp image at v = 75.0 cm. Using 1/f = 1/u + 1/v, find the focal length f.",
        options: ["20.0 cm", "50.0 cm", "100 cm", "18.8 cm"],
        correct: 3,
        ask: "Add 1 ÷ 25.0 to 1 ÷ 75.0 to get 1/f, then take the reciprocal. Which option matches?",
        hints: [
          "1 ÷ 25.0 is 0.0400 and 1 ÷ 75.0 is 0.0133, so 1/f is 0.0533 per centimetre.",
          "The focal length is 1 ÷ 0.0533, which is about 18.8 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}" },
          { label: "Substitute", latex: "\\dfrac{1}{f} = \\dfrac{1}{25.0} + \\dfrac{1}{75.0} = 0.0533" },
          { label: "Answer", latex: "f = 18.8\\ \\text{cm}" },
        ],
        explain: "The focal length is about 18.8 centimetres, because 0.0400 + 0.0133 is 0.0533 per centimetre, and 1 ÷ 0.0533 is 18.8 centimetres.",
      },
      {
        kind: "choice",
        question: "Total internal reflection can occur only when...",
        options: [
          "light travels from a denser to a less dense medium and the angle of incidence is greater than the critical angle",
          "light travels from a less dense to a denser medium at any angle of incidence",
          "the angle of incidence is exactly equal to the critical angle",
          "light travels from air into glass above the critical angle",
        ],
        correct: 0,
        ask: "Recall that total internal reflection needs 2 things at once: a direction of travel and an angle condition. Which option states both correctly?",
        hints: [
          "The light must be going from the denser medium into the less dense one, such as glass into air.",
          "The angle of incidence must be larger than the critical angle, not equal to it.",
        ],
        explain: "Total internal reflection needs light going from a denser to a less dense medium and an angle of incidence greater than the critical angle. Going from air into glass, or sitting exactly at the critical angle, will not do it.",
      },
      {
        kind: "choice",
        question: "Water has refractive index n = 1.33. Using sin c = 1/n, what is its critical angle c?",
        options: ["34 degrees", "42 degrees", "49 degrees", "58 degrees"],
        correct: 2,
        ask: "Work out sin c as 1 ÷ 1.33, then take the inverse sine. Which option is that angle?",
        hints: [
          "1 ÷ 1.33 is 0.752.",
          "The angle whose sine is 0.752 is about 49 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.33} = 0.752" },
          { label: "Answer", latex: "c = 49^\\circ" },
        ],
        explain: "The critical angle for water is about 49 degrees, because 1 ÷ 1.33 is 0.752, and the angle whose sine is 0.752 is 49 degrees. It is larger than the 42 degrees for glass because water is less optically dense.",
      },
      {
        kind: "choice",
        question: "The figure shows parallel rays passing through a converging lens. Which distance is the focal length f?",
        figure: "fig-pr5-07",
        options: [
          "the distance between the object and the lens",
          "the distance between the 2 curved surfaces of the lens",
          "the height of the image formed on the screen",
          "the distance from the lens to the point F where the rays meet",
        ],
        correct: 3,
        ask: "The focal length is measured to the principal focus F. Which distance ends at the point where the parallel rays are brought together?",
        hints: [
          "Parallel rays entering a converging lens all pass through the principal focus F.",
          "The focal length runs from the optical centre of the lens to that focus F.",
        ],
        explain: "The focal length is the distance from the lens to the principal focus F, where the converging lens brings the parallel rays together. The other distances describe the object, the lens thickness or the image, not f.",
      },
      {
        kind: "classify",
        prompt: "Sort each case into ordinary refraction or total internal reflection.",
        bins: ["Ordinary refraction", "Total internal reflection"],
        items: [
          { text: "A ray in glass hits the boundary at 30 degrees, below the critical angle", bin: 0 },
          { text: "A ray passes from air into glass and bends towards the normal", bin: 0 },
          { text: "A ray goes from glass into air at 20 degrees to the normal", bin: 0 },
          { text: "A ray in glass strikes the boundary at 50 degrees, above the 42 degree critical angle", bin: 1 },
          { text: "Light stays trapped inside an optical fibre, reflecting along it", bin: 1 },
          { text: "A ray in glass hits the boundary at 60 degrees, above the critical angle", bin: 1 },
        ],
        ask: "For each case, ask whether the ray goes denser to less dense AND meets the boundary above the critical angle. If both hold, it is total internal reflection. Tap each one into its bin.",
        hints: [
          "If the angle in the denser medium is below the critical angle, the light still refracts out.",
          "Total internal reflection needs a denser to less dense ray and an angle greater than the critical angle.",
        ],
        explain: "Rays below the critical angle, or entering the denser medium, simply refract. Rays travelling glass to air above the critical angle, like those in an optical fibre, are totally internally reflected.",
      },
      {
        kind: "match",
        prompt: "Match each method of finding the focal length to what it plots or reads.",
        pairs: [
          { left: "Magnification method", right: "m against v, gradient 1/f" },
          { left: "Displacement method", right: "D^2 - d^2 against D, gradient 4f" },
          { left: "Single reading method", right: "one pair of u and v, no graph" },
        ],
        ask: "Think about which method uses many readings on a straight line and which uses just one sharp image. Match each to what it plots or reads.",
        hints: [
          "The magnification method plots m against v so the gradient gives 1 divided by f.",
          "The displacement method uses a fixed object-screen distance D and the separation d of the 2 lens positions.",
        ],
        explain: "The magnification method plots m against v with gradient 1 over f. The displacement method plots D^2 minus d^2 against D with gradient 4 times f. The single reading method just takes one pair of u and v.",
      },
      {
        kind: "order",
        prompt: "Put the single-reading steps for finding a lens focal length in order.",
        items: [
          "Place the lit object at a measured distance u from the lens",
          "Move the screen until the image is sharp",
          "Measure the image distance v from the lens to the screen",
          "Substitute u and v into 1/f = 1/u + 1/v",
          "Calculate the focal length f",
        ],
        ask: "You need both u and v in hand before you can use the lens equation. Put the steps in the order you would actually carry them out.",
        hints: [
          "First fix the object distance u, then find where the sharp image forms.",
          "Only once you have measured v can you substitute into the lens equation and work out f.",
        ],
        explain: "Set the object at distance u, move the screen to a sharp image, measure v, substitute u and v into 1 over f equals 1 over u plus 1 over v, then calculate f.",
      },
      {
        kind: "graphpick",
        prompt: "In the magnification method, m = (1/f) v - 1. Which graph of m against v is correct?",
        xLabel: "v/cm",
        yLabel: "m",
        options: [
          { points: [[44, 7.5], [70, 12.3], [95, 17.1]], caption: "A straight line rising to the right" },
          { points: [[44, 17.1], [70, 12.3], [95, 7.5]], caption: "A straight line falling to the right" },
          { points: [[44, 12], [70, 12], [95, 12]], caption: "A horizontal straight line" },
          { points: [[44, 2], [60, 5], [75, 11], [95, 20]], caption: "An upward curve that steepens" },
        ],
        correct: 0,
        ask: "The equation m equals 1 over f times v minus 1 is a straight line with a positive gradient. Which graph rises in a straight line as v increases?",
        hints: [
          "Because 1 over f is positive, m increases steadily as v increases.",
          "The relation is linear, so the graph is a straight line, not a curve.",
        ],
        explain: "The correct graph is a straight line rising to the right, because m equals 1 over f times v minus 1 is linear with a positive gradient of 1 over f.",
      },
      {
        kind: "tiles",
        prompt: "For a fixed object-screen distance D = 100.0 cm the 2 sharp-image positions are separated by d = 58.8 cm. Build the working line for f.",
        tiles: ["f =", "(100.0^2 - 58.8^2)", "\\div", "(4 \\times 100.0)", "=", "16.4", "cm", "(2 \\times 100.0)"],
        answer: ["f =", "(100.0^2 - 58.8^2)", "\\div", "(4 \\times 100.0)", "=", "16.4", "cm"],
        ask: "Use f equals D^2 minus d^2, all divided by 4 times D. Substitute D as 100.0 and d as 58.8.",
        hints: [
          "100.0^2 is 10000 and 58.8^2 is 3457, so the top is 6543.",
          "Divide 6543 by 4 × 100.0, which is 400, to get about 16.4 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{D^2 - d^2}{4D}" },
          { label: "Substitute", latex: "f = \\dfrac{100.0^2 - 58.8^2}{4 \\times 100.0}" },
          { label: "Answer", latex: "f = 16.4\\ \\text{cm}" },
        ],
        explain: "The focal length is about 16.4 centimetres, because 10000 - 3457 is 6543, and 6543 ÷ 400 is 16.4 centimetres.",
      },
      {
        kind: "open",
        prompt: "Explain why plotting a graph to find a lens focal length is better than taking a single reading of u and v.",
        figure: "fig-pr5-08",
        modelAnswer: "A single reading depends on one pair of u and v, so any random error in judging the sharpest image or in measuring a distance passes straight into the answer. A graph method, such as m against v, uses many readings. The best-fit straight line averages out the random errors, and its gradient gives 1 over f from all the points together, so the focal length is more reliable. Anomalous points also show up clearly against the line.",
        marks: [
          "A single reading carries the full random error of one measurement.",
          "A graph uses many readings and a best-fit line averages random error.",
          "The gradient gives f from all points, and anomalies are easy to spot.",
        ],
        ask: "Think about how random error affects one reading, and what a best-fit line through many readings does to that error.",
      },
      {
        kind: "open",
        prompt: "A ray of light travels inside a glass block towards a boundary with air. State the 2 conditions needed for total internal reflection, and explain what is meant by the critical angle.",
        figure: "fig-pr5-06",
        modelAnswer: "Total internal reflection needs 2 conditions. First, the light must travel from the denser medium to the less dense one, here from glass into air. Second, the angle of incidence at the boundary must be greater than the critical angle. The critical angle c is the angle of incidence in the denser medium for which the refracted ray runs along the boundary, meaning the angle of refraction is 90 degrees. It is given by sin c = 1/n, so for glass of n = 1.5 the critical angle is about 42 degrees.",
        marks: [
          "Condition 1: light goes from a denser to a less dense medium (glass to air).",
          "Condition 2: the angle of incidence is greater than the critical angle.",
          "The critical angle is where the refraction angle is 90 degrees, with sin c = 1/n.",
        ],
        ask: "Recall the direction the light must travel and how its angle compares with the critical angle. Then describe what happens to the refracted ray exactly at the critical angle.",
      },
    ],
  },
];
