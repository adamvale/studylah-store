import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Practical Dynamics, section 5. Grounded in Practical Chapter 03 (Dynamics), Experiments 3, 4, 5.
// Figure colours (house dark-theme): weight W = red; an applied pull/spring force = amber; force arrows
// on a moments diagram = blue and the turning arc = amber; the rule, knife-edge pivot, masses and stand =
// white/grey; on graphs the best-fit line = blue, the gradient triangle = amber, plotted crosses = white,
// axes and grid = grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.5",
    code: "TP3.5",
    title: "Finding a mass by moments: knife-edge and graphical methods",
    blurb: "Balance a rule against a known mass, then use moments to get an unknown mass",
    steps: [
      {
        kind: "concept",
        heading: "Balance against a known mass",
        figure: "fig-pr3-09-halfrule-knife-edge",
        body: "To find the mass of a rule, *balance* it on a *knife-edge* against a *known mass* P and take *moments* about the pivot.",
        say: "The picture shows a white half-metre rule resting across a white knife-edge pivot. A known mass, labelled P, hangs near the left end, and its red weight arrow points straight down. The rule's own weight, also red, acts down at its centre of gravity. When the rule balances, the mass P turns it one way and the rule's own weight turns it the other, and the 2 turning effects are equal. Measuring 2 distances is then enough to find the unknown mass.",
      },
      {
        kind: "concept",
        heading: "The knife-edge equation",
        body: "At balance the *clockwise* and *anticlockwise* moments are equal, so m x = M y. Rearranged, this gives the *rule's mass* M directly from the *known mass* m and 2 lengths.",
        formula: {
          latex: "M = m\\,\\dfrac{x}{y}",
          where: [
            { sym: "M", meaning: "mass of the rule (unknown)", unit: "kg" },
            { sym: "m", meaning: "known mass P", unit: "kg" },
            { sym: "x", meaning: "distance from the centre of P to the pivot", unit: "cm" },
            { sym: "y", meaning: "distance from the pivot to the rule's centre of gravity", unit: "cm" },
          ],
        },
        say: "Because the weights balance, the known mass m times its distance x equals the rule's mass M times its distance y. So m times x equals M times y. Rearranging, M equals m times x over y. Here x is measured from the centre of the known mass P to the pivot, and y is measured from the pivot to the rule's own centre of gravity. The 2 distances can be in the same unit, centimetres, because only their ratio matters.",
      },
      {
        kind: "concept",
        heading: "The graphical method",
        figure: "fig-pr3-10-metre-rule-2-masses",
        body: "A neater version balances a *metre rule* between a *100 gram* mass and a *50 gram* mass, taking *moments* about the knife-edge.",
        formula: {
          latex: "100\\,r = 50\\,q + M\\,p",
          where: [
            { sym: "M", meaning: "mass of the rule", unit: "g" },
            { sym: "p", meaning: "distance from the pivot to the rule's centre of gravity", unit: "cm" },
            { sym: "q", meaning: "distance from the pivot to the 50 gram mass", unit: "cm" },
            { sym: "r", meaning: "distance from the pivot to the 100 gram mass", unit: "cm" },
          ],
        },
        say: "This time a white metre rule sits on the white knife-edge with a 100 gram mass hung near the left end and a 50 gram mass near the right end, each drawn with a red weight arrow. Taking moments about the pivot, the 100 gram mass turns the rule one way while the 50 gram mass and the rule's own weight turn it the other way. So 100 times r equals 50 times q plus M times p. You repeat this for several balance positions and collect pairs of readings.",
      },
      {
        kind: "insight",
        figure: "fig-pr3-11-rp-qp-graph",
        body: "Dividing the balance equation by 100 p turns it into a *straight line*: a graph of r/p against q/p has *gradient 0.5* and *intercept M/100*.",
        formula: {
          latex: "\\dfrac{r}{p} = 0.5\\,\\dfrac{q}{p} + \\dfrac{M}{100}",
          where: [
            { sym: "gradient", meaning: "the 50 over 100 ratio", unit: "0.5" },
            { sym: "intercept", meaning: "M over 100, giving the rule's mass", unit: "g" },
          ],
        },
        say: "Here is the trick. Divide the whole balance equation by 100 times p and it becomes the equation of a straight line. r over p equals 0.5 times q over p, plus M over 100. So if you plot r over p up the vertical axis against q over p along the horizontal axis, the points fall on a straight blue line. The amber gradient triangle gives a slope of 0.5, which is just the 50 gram over 100 gram ratio, one half. Where the line meets the vertical axis, the intercept equals M over 100, so multiplying the intercept by 100 gives the rule's mass in grams.",
      },
      {
        kind: "choice",
        question: "A half-metre rule balances on a knife-edge against a known mass m = 0.050 kg. The centre of P is x = 6.05 cm from the pivot and the rule's centre of gravity is y = 6.10 cm from the pivot. Find the rule's mass M.",
        figure: "fig-pr3-09-halfrule-knife-edge",
        options: ["0.050 kg", "0.500 kg", "0.061 kg", "0.005 kg"],
        correct: 0,
        ask: "Use M = m times x over y. Work out 0.050 × 6.05 ÷ 6.10.",
        hints: [
          "The 2 distances share a unit, so just use their ratio 6.05 over 6.10.",
          "6.05 ÷ 6.10 is very close to 1, so 0.050 times that is about 0.050 kilograms.",
        ],
        working: [
          { label: "Formula", latex: "M = m\\,\\dfrac{x}{y}" },
          { label: "Substitute", latex: "M = 0.050 \\times \\dfrac{6.05}{6.10}" },
          { label: "Answer", latex: "M = 0.050\\ \\text{kg}" },
        ],
        explain: "The rule's mass is 0.050 kilograms, because 6.05 ÷ 6.10 is almost exactly 1, so 0.050 times that ratio stays at 0.050 kilograms.",
      },
      {
        kind: "choice",
        question: "In the graphical method a graph of r/p against q/p is a straight line. What does its gradient of 0.5 represent?",
        figure: "fig-pr3-11-rp-qp-graph",
        options: [
          "The mass of the metre rule",
          "The distance from the pivot to the 50 g mass",
          "The ratio of the 2 masses, 50 g over 100 g",
          "The intercept on the vertical axis",
        ],
        correct: 2,
        ask: "Look at where the 0.5 comes from in r/p = 0.5(q/p) + M/100. It sits in front of the q/p term.",
        hints: [
          "The 0.5 came from dividing the 50 gram term by the 100 gram term.",
          "50 ÷ 100 is 0.5, so the gradient is the ratio of the 2 masses.",
        ],
        explain: "The gradient 0.5 is the ratio of the 2 masses, 50 grams over 100 grams, which is one half. The rule's mass appears in the intercept, not the gradient.",
      },
      {
        kind: "choice",
        question: "For the same line, what does the intercept on the r/p axis tell you?",
        figure: "fig-pr3-11-rp-qp-graph",
        options: [
          "It equals the gradient 0.5",
          "It equals M/100, so the rule's mass is 100 times the intercept",
          "It equals the 100 g mass",
          "It equals the distance p",
        ],
        correct: 1,
        ask: "Compare r/p = 0.5(q/p) + M/100 with the straight-line form y = m x + c. Which part is the intercept c?",
        hints: [
          "In y = m x + c the intercept is the constant term.",
          "The constant term here is M over 100, so M is 100 times the intercept.",
        ],
        explain: "The intercept equals M over 100, so multiplying the intercept by 100 gives the rule's mass M in grams. The gradient, not the intercept, is fixed at 0.5.",
      },
      {
        kind: "choice",
        question: "A graph of r/p against q/p gives a straight line with intercept 0.98. What is the mass M of the metre rule?",
        figure: "fig-pr3-11-rp-qp-graph",
        options: ["0.98 g", "9.8 g", "9800 g", "98 g"],
        correct: 3,
        ask: "The intercept equals M over 100, so M is 100 times the intercept. Work out 100 × 0.98.",
        hints: [
          "Multiply the intercept by 100 to undo the divide by 100.",
          "100 × 0.98 is 98, in grams.",
        ],
        working: [
          { label: "Formula", latex: "\\text{intercept} = \\dfrac{M}{100}" },
          { label: "Substitute", latex: "M = 100 \\times 0.98" },
          { label: "Answer", latex: "M = 98\\ \\text{g}" },
        ],
        explain: "The rule's mass is 98 grams, because the intercept 0.98 equals M over 100, so M is 100 × 0.98.",
      },
      {
        kind: "slider",
        prompt: "Another metre rule gives a graph of r/p against q/p with intercept 0.90. Set the slider to the rule's mass M, in grams.",
        min: 0,
        max: 150,
        step: 1,
        unit: "g",
        start: 0,
        targetMin: 89,
        targetMax: 91,
        ask: "The intercept equals M over 100, so multiply the intercept by 100. Work out 100 × 0.90.",
        hints: [
          "M is 100 times the intercept.",
          "100 × 0.90 is 90, so slide to 90 grams.",
        ],
        working: [
          { label: "Formula", latex: "\\text{intercept} = \\dfrac{M}{100}" },
          { label: "Substitute", latex: "M = 100 \\times 0.90" },
          { label: "Answer", latex: "M = 90\\ \\text{g}" },
        ],
        explain: "The rule's mass is 90 grams, because the intercept 0.90 equals M over 100, so M is 100 × 0.90.",
      },
    ],
  },
];
