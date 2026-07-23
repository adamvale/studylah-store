import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), section 6: Measuring focal length. Source: Exp 3, 4, 5.
// Figure colours (house dark theme): lens body and rays = blue, object arrow = green, image arrow
// = amber, focal length / bench rule / dimension and gradient guides = grey, axis = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.6",
    code: "TP5.6",
    title: "Measuring focal length",
    blurb: "3 lab methods to find the focal length f of a converging lens",
    steps: [
      {
        kind: "concept",
        heading: "3 ways to find f",
        body: "You can measure the *focal length* of a converging lens in 3 ways: a single sharp-image *reading*, the *magnification* method, and the *displacement* method. The graph methods repeat readings to cut random error.",
        say: "There are 3 practical ways to pin down the focal length of a converging lens. The quickest is a single reading of a sharp image. The other 2 take many readings and draw a straight-line graph, which averages out the random errors in judging when the image is sharpest. We will meet all 3.",
      },
      {
        kind: "concept",
        heading: "Method 1: single reading",
        figure: "fig-pr5-08-lens-bench",
        body: "Form a *sharp* image of a cross-wire on a *screen*, read the object distance u and image distance v off the bench, then use the *lens equation*. Approach the sharp point from *both sides* and average, since the image looks sharp over a small range.",
        formula: {
          latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}",
          where: [
            { sym: "f", meaning: "focal length", unit: "cm" },
            { sym: "u", meaning: "object distance", unit: "cm" },
            { sym: "v", meaning: "image distance", unit: "cm" },
          ],
        },
        say: "In the picture there is an optical bench laid along a grey metre rule. On the left a light source lights up a cross-wire object, then blue rays pass through a pale-blue lens in a holder and meet on a white screen at the right. You slide the screen until the image is sharpest, read the object distance u and the image distance v off the rule, and put them into 1 over f equals 1 over u plus 1 over v. Because the image stays sharp over a small range, slide in from both sides and take the average position to reduce the error.",
      },
      {
        kind: "concept",
        heading: "Method 2: magnification graph",
        figure: "fig-pr5-07-lens-ray",
        body: "Take *many* pairs of image distance v and magnification m. A graph of *m against v* is a straight line whose *gradient is 1/f*. Many points average out random error.",
        formula: {
          latex: "m = \\dfrac{1}{f}\\,v - 1",
          where: [
            { sym: "m", meaning: "magnification (image height over object height)" },
            { sym: "v", meaning: "image distance", unit: "cm" },
            { sym: "f", meaning: "focal length; gradient of the graph is 1/f", unit: "cm" },
          ],
        },
        say: "This diagram shows a pale-blue converging lens with blue rays from a green object arrow forming a real, inverted amber image. For each object position you measure the image distance v and the magnification m, which is the image height over the object height. Rearranging the lens equation gives m equals 1 over f times v, minus 1. So if you plot m up the vertical axis against v along the horizontal axis, you get a straight line, and its gradient is 1 over f. Taking many readings and drawing the best-fit line is what beats down the random error.",
      },
      {
        kind: "concept",
        heading: "Method 3: displacement",
        body: "Fix the object-to-screen distance D at more than 4 focal lengths. There are then *2* lens positions giving a sharp image, a distance d apart. From D and this *displacement* d you get f directly. A graph of *D^2 - d^2 against D* has a gradient of *4f*.",
        formula: {
          latex: "f = \\dfrac{D^2 - d^2}{4D}",
          where: [
            { sym: "f", meaning: "focal length", unit: "cm" },
            { sym: "D", meaning: "fixed object-to-screen distance (greater than 4f)", unit: "cm" },
            { sym: "d", meaning: "displacement between the 2 sharp-image lens positions", unit: "cm" },
          ],
        },
        say: "Here you clamp the object and the screen a fixed distance D apart, chosen bigger than 4 focal lengths. Now slide the lens between them: you find 2 separate positions that both throw a sharp image on the screen, one giving a large image and one a small image. The gap between those 2 positions is the displacement d. Then f equals D squared minus d squared, all over 4 D. If you repeat for several separations, a graph of D squared minus d squared against D is a straight line of gradient 4 f.",
      },
      {
        kind: "choice",
        question: "Single-reading method: a sharp image forms when u = 25.0 cm and v = 75.0 cm. Find the focal length f.",
        options: ["50.0 cm", "100 cm", "18.8 cm", "0.0533 cm"],
        correct: 2,
        ask: "Use 1/f = 1/u + 1/v. Work out 1 ÷ 25.0, then 1 ÷ 75.0, add them, then take the reciprocal.",
        hints: [
          "1 over 25.0 is 0.0400 and 1 over 75.0 is 0.0133.",
          "0.0400 + 0.0133 is 0.0533, and 1 ÷ 0.0533 is about 18.8.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}" },
          { label: "Substitute", latex: "\\dfrac{1}{f} = \\dfrac{1}{25.0} + \\dfrac{1}{75.0} = 0.0533\\ \\text{cm}^{-1}" },
          { label: "Answer", latex: "f = 18.8\\ \\text{cm}" },
        ],
        explain: "The focal length is 18.8 centimetres, because 1 over 25.0 + 1 over 75.0 is 0.0533 per centimetre, and 1 ÷ 0.0533 is 18.8. The trap 0.0533 is the value of 1 over f, not f itself.",
      },
      {
        kind: "graphpick",
        prompt: "In the magnification method m = (1/f) v - 1. 2 readings are (v = 44.2, m = 7.5) and (v = 94.6, m = 17.1). Pick the graph of m against v that these readings should give.",
        xLabel: "v / cm",
        yLabel: "m",
        options: [
          { points: [[0, 6], [50, 6], [100, 6]], caption: "A flat horizontal line" },
          { points: [[0, 0], [50, 9], [100, 18]], caption: "A rising straight line through the origin" },
          { points: [[0, 18], [50, 9], [100, 0]], caption: "A falling straight line" },
          { points: [[44.2, 7.5], [94.6, 17.1]], caption: "A rising straight line of gradient about 0.19" },
        ],
        correct: 3,
        ask: "m increases as v increases, so the line must rise. Its gradient is 1 over f, and both given points must sit on it.",
        hints: [
          "Between the 2 points m rises from 7.5 to 17.1 as v rises from 44.2 to 94.6, so the line slopes up.",
          "The gradient is 17.1 - 7.5 over 94.6 - 44.2, which is 9.6 over 50.4, about 0.19.",
        ],
        explain: "The correct line rises straight through both readings with a gradient of about 0.19 per centimetre. A line through the origin would ignore the minus 1 intercept, and a flat or falling line does not fit rising data.",
      },
      {
        kind: "choice",
        question: "Magnification method: the best-fit line of m against v has gradient G = (17.1 - 7.5)/(94.6 - 44.2) = 0.190 cm^-1. Find the focal length f.",
        options: ["5.3 cm", "0.190 cm", "19.0 cm", "10.5 cm"],
        correct: 0,
        ask: "The gradient equals 1 over f, so f is 1 divided by the gradient. Work out 1 ÷ 0.190.",
        hints: [
          "The gradient of m against v is 1 over f, so f = 1 divided by the gradient.",
          "1 ÷ 0.190 is about 5.3.",
        ],
        working: [
          { label: "Formula", latex: "\\text{gradient} = \\dfrac{1}{f}\\ \\Rightarrow\\ f = \\dfrac{1}{G}" },
          { label: "Substitute", latex: "f = \\dfrac{1}{0.190}" },
          { label: "Answer", latex: "f = 5.3\\ \\text{cm}" },
        ],
        explain: "The focal length is 5.3 centimetres, because the gradient 0.190 per centimetre equals 1 over f, and 1 ÷ 0.190 is 5.3. The value 0.190 is the gradient itself, not f.",
      },
      {
        kind: "choice",
        question: "Displacement method: the object and screen are D = 100.0 cm apart, and the 2 sharp-image lens positions are d = 58.8 cm apart. Find the focal length f.",
        options: ["6543 cm", "16.4 cm", "41.2 cm", "65.4 cm"],
        correct: 1,
        ask: "Use f = (D^2 - d^2)/(4D). Square 100.0, square 58.8, subtract, then divide by 4 × 100.0.",
        hints: [
          "100.0^2 is 10000 and 58.8^2 is 3457, so the top is 6543.",
          "4 × 100.0 is 400, and 6543 ÷ 400 is about 16.4.",
        ],
        working: [
          { label: "Formula", latex: "f = \\dfrac{D^2 - d^2}{4D}" },
          { label: "Substitute", latex: "f = \\dfrac{100.0^2 - 58.8^2}{4 \\times 100.0} = \\dfrac{10000 - 3457}{400}" },
          { label: "Answer", latex: "f = 16.4\\ \\text{cm}" },
        ],
        explain: "The focal length is 16.4 centimetres, because 10000 - 3457 is 6543, and 6543 ÷ 400 is 16.4. The trap 41.2 is D minus d, and 6543 is only the numerator before dividing.",
      },
      {
        kind: "open",
        prompt: "Explain why a graph method (magnification or displacement) gives a more reliable value of f than a single sharp-image reading.",
        modelAnswer: "A single reading depends on judging one sharp-image position, but the image looks sharp over a small range, so one u and v pair carries a random error that passes straight into f. A graph method takes many readings and plots them; the best-fit straight line averages out the random scatter, so its gradient gives f more reliably. Anomalous points also show up as points off the line and can be rejected.",
        marks: [
          "A single reading relies on one sharp-image judgement, which has random error (the image is sharp over a range).",
          "The graph uses many readings and a best-fit line, averaging out random error / scatter.",
          "The gradient (1/f, or 4f) gives f, and outliers show up off the line and can be ignored.",
        ],
        ask: "Think about how many judgements each method rests on, and what a best-fit line does to random scatter.",
      },
      {
        kind: "insight",
        body: "All 3 methods return the *same* f; the graph methods just trade extra readings for *smaller random error*, and the displacement method needs no object or image distance from the lens *centre* at all.",
        say: "Keep this in mind. Whichever method you use, you are measuring the same focal length. The single reading is fastest, but the magnification and displacement graphs pay for extra readings with a smaller random error. The displacement method has a neat bonus: it only needs the fixed separation D and the gap d between 2 lens positions, so you never have to locate the awkward optical centre of the lens.",
      },
    ],
  },
];
