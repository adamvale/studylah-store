import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical Chapter 3), section 6. Grounded in Practical Chapter 03 - Dynamics, Exp 7.
// Figure colours (house dark-theme): weight W = red; normal reaction N = green; tension / applied pull = amber;
// friction f and motion / velocity = blue; block = pale blue; bench, string, pulley, masses = white/grey.
// On graphs: best-fit line = blue; gradient triangle = amber; plotted crosses = white; axes/grid = grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.6",
    code: "TP3.6",
    title: "Density and friction of a block",
    blurb: "Measuring a block's density, then finding friction by sliding it at steady speed",
    steps: [
      {
        kind: "concept",
        heading: "Density from mass and volume",
        body: "Find the *density* of the block from its *mass* and its *volume*: measure the length, width and thickness, and the mass, and *average* repeated readings to cut random error. The volume is length times width times thickness.",
        formula: {
          latex: "\\rho = \\dfrac{m}{V} = \\dfrac{m}{l\\,w\\,t}",
          where: [
            { sym: "\\rho", meaning: "density", unit: "g/cm^3" },
            { sym: "m", meaning: "mass of the block", unit: "g" },
            { sym: "V", meaning: "volume (length times width times thickness)", unit: "cm^3" },
          ],
        },
        say: "Start with density. Weigh the block on a balance, then measure its length, width and thickness with a ruler or calipers. Because a single reading can be off, take each measurement a few times and average. Multiply length by width by thickness to get the volume, then divide the mass by that volume to get the density.",
      },
      {
        kind: "concept",
        heading: "Friction at constant velocity",
        figure: "fig-pr3-14-friction-apparatus",
        body: "To measure *friction*, pull the block so it slides at *constant velocity*. Then the *resultant force* is zero, so the *pull* equals the friction. Take readings just above and just below steady speed and average them.",
        say: "Now the friction. In the picture a pale blue block sits on a white bench. A white string runs from the block over a grey pulley to a hanging mass, and the amber arrow along the string is the pull. A blue arrow under the block shows the friction opposing the motion, and a blue arrow shows the direction it slides. Add mass to the hanger until the block just slides at a steady speed. At that steady speed the resultant force is zero, so the pull exactly balances the friction. In practice you find the load that is a touch too small and the load that is a touch too big, then average.",
      },
      {
        kind: "concept",
        heading: "The pull equals the hanging weight",
        body: "The horizontal *pull* that keeps the block moving equals the *weight* of the hanging mass, W = Mg. Keep the string *horizontal* and in line with the motion so the whole pull acts along the bench.",
        formula: {
          latex: "W = Mg",
          where: [
            { sym: "W", meaning: "pull on the block (equals the friction)", unit: "N" },
            { sym: "M", meaning: "hanging mass", unit: "kg" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "The pull is just the weight of the hanging mass, its mass M times g, about 10 newtons per kilogram. For this to work the string must stay horizontal and point straight along the direction of sliding. If the string tilts, only part of the tension pulls the block along and your reading is wrong.",
      },
      {
        kind: "concept",
        heading: "Adding a load on top",
        figure: "fig-pr3-14-friction-apparatus",
        body: "Placing a *load* L on top presses the block down harder, so the friction rises. The model is W = mu L + mu m g, where mu is a *ratio of forces*, so it is *dimensionless*.",
        formula: {
          latex: "W = \\mu L + \\mu m g",
          where: [
            { sym: "W", meaning: "pull at steady speed", unit: "N" },
            { sym: "\\mu", meaning: "coefficient of friction (a ratio, no unit)" },
            { sym: "L", meaning: "weight of the load on top", unit: "N" },
            { sym: "m", meaning: "mass of the block itself", unit: "kg" },
          ],
        },
        say: "Now stack extra weights on top of the block. The heavier the load, the harder the surfaces press together, and the more friction you must overcome. The pull needed follows the rule W equals mu times L, plus mu times m g. Here mu, the coefficient of friction, is just a ratio of 2 forces, so it has no units at all.",
      },
      {
        kind: "insight",
        figure: "fig-pr3-15-friction-load-graph",
        body: "Plot *pull W against load L*: the line is straight, its *gradient* is mu and its *intercept* is mu m g. Because mu is a *ratio*, it has no units.",
        say: "The neat trick is a graph. Plot the pull W up the side against the load L along the bottom. This figure shows white crosses climbing in a straight blue best-fit line that starts above the origin, at a positive value on the W axis. An amber triangle on the line marks the gradient. That gradient is mu, and the positive intercept where the line meets the W axis is mu times m g. Reading mu off as a gradient averages out all your points.",
      },
      {
        kind: "choice",
        question: "A block has mass 384 g and measures 12.0 cm by 8.0 cm by 5.0 cm, a volume of 480 cm^3. What is its density?",
        options: ["0.80 g/cm^3", "1.25 g/cm^3", "8.0 g/cm^3", "480 g/cm^3"],
        correct: 0,
        ask: "Density is mass divided by volume. The volume is 480 cubic centimetres, so work out 384 divided by 480.",
        hints: [
          "The volume is length times width times thickness, which is 480 cubic centimetres.",
          "384 divided by 480 is 0.80.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{384}{480}" },
          { label: "Answer", latex: "\\rho = 0.80\\ \\text{g/cm}^3" },
        ],
        explain: "The density is 0.80 grams per cubic centimetre, because 384 grams divided by 480 cubic centimetres is 0.80. That is less than 1.0, so the block would float on water.",
      },
      {
        kind: "choice",
        question: "The block slides at constant velocity when a 0.300 kg mass hangs from the string (g = 10 N/kg). What is the friction force? (pull W = Mg)",
        options: ["30 N", "0.30 N", "3.0 N", "0.030 N"],
        correct: 2,
        ask: "At steady speed the friction equals the pull, and the pull is the hanging weight Mg. Work out 0.300 times 10.",
        hints: [
          "Use W = Mg with g = 10 newtons per kilogram.",
          "0.300 times 10 is 3.0.",
        ],
        working: [
          { label: "Formula", latex: "W = Mg" },
          { label: "Substitute", latex: "W = 0.300 \\times 10" },
          { label: "Answer", latex: "W = 3.0\\ \\text{N}" },
        ],
        explain: "The friction is 3.0 newtons, because at constant velocity it equals the pull, and 0.300 kilograms times 10 newtons per kilogram is 3.0 newtons.",
      },
      {
        kind: "open",
        prompt: "The block slides steadily at constant velocity. Explain why the string's pull is equal to the friction force on the block.",
        figure: "fig-pr3-14-friction-apparatus",
        modelAnswer: "At constant (steady) velocity the block is not accelerating, so by Newton's first law the resultant force on it is zero. The only 2 horizontal forces are the forward pull of the string and the backward friction. For their resultant to be zero they must be equal in size and act in opposite directions, so the pull equals the friction.",
        marks: [
          "Constant velocity means no acceleration, so the resultant force is zero.",
          "The horizontal pull and the friction are the only 2 horizontal forces and act in opposite directions.",
          "Equal and opposite, so pull = friction.",
        ],
        ask: "Think about the acceleration at steady speed, what that tells you about the resultant force, and which 2 horizontal forces act on the block.",
      },
      {
        kind: "graphpick",
        prompt: "The block is pulled at constant velocity with different loads L on top. Which graph of pull W against load L fits the model W = mu L + mu m g?",
        xLabel: "load L /N",
        yLabel: "pull W /N",
        options: [
          { points: [[0, 0], [4, 2]], caption: "Rises from the origin" },
          { points: [[0, 4], [4, 1]], caption: "Falls as load rises" },
          { points: [[0, 3], [4, 3]], caption: "Flat, no change" },
          { points: [[0, 2], [4, 4]], caption: "Rises from a positive intercept" },
        ],
        correct: 3,
        ask: "The model is a straight line. Its gradient mu is positive and its intercept mu m g is positive, so where does the line cross the W axis?",
        hints: [
          "The line must slope upwards, because more load means more friction and a bigger pull.",
          "When the load L is zero the pull is still mu m g, a positive value, so the line starts above the origin.",
        ],
        explain: "The correct line rises with a positive gradient mu and starts at a positive intercept mu m g on the W axis, because even with no load on top the block still has its own weight to overcome.",
      },
      {
        kind: "choice",
        question: "For one block the pull at steady speed is W = 3.0 N when the load L = 2.00 N and the block's own weight m g = 4.214 N. Find the coefficient mu, where mu = W / (L + m g).",
        options: ["0.21", "0.48", "1.5", "2.07"],
        correct: 1,
        ask: "The coefficient is the pull divided by the total downward push, which is the load plus the block's own weight. Add 2.00 and 4.214, then divide 3.0 by the total.",
        hints: [
          "Add the load and the block's weight: 2.00 plus 4.214 is 6.214 newtons.",
          "3.0 divided by 6.214 is 0.48.",
        ],
        working: [
          { label: "Formula", latex: "\\mu = \\dfrac{W}{L + mg}" },
          { label: "Substitute", latex: "\\mu = \\dfrac{3.0}{2.00 + 4.214}" },
          { label: "Answer", latex: "\\mu = 0.48" },
        ],
        explain: "The coefficient is 0.48, because 2.00 newtons plus 4.214 newtons is 6.214 newtons, and 3.0 divided by 6.214 is 0.48. Being a ratio of 2 forces, it has no unit.",
      },
    ],
  },
];
