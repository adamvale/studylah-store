import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), section 5. Grounded in the practical KB (thin converging lens).
// Figure colours (fig-pr5-07-lens-ray): the lens body is a pale-blue solid, the light rays are blue,
// the object arrow is green and the real image arrow is amber; guide lines and dimensions are grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.5",
    code: "TP5.5",
    title: "The converging lens and the lens equation",
    blurb: "How a convex lens forms an image, and the thin lens equation",
    steps: [
      {
        kind: "concept",
        heading: "The converging lens",
        figure: "fig-pr5-07-lens-ray",
        body: "A *converging (convex) lens* bends parallel rays inwards so they meet at the *principal focus* F. The distance from the lens to F is the *focal length* f.",
        say: "In the picture a pale blue lens stands upright in the middle. Blue rays come in from a green object arrow on the left, pass through the lens, and cross over to form an amber image arrow on the right. When rays arrive parallel, the lens brings them together at a single point called the principal focus F. The distance from the lens to that focus is the focal length f, a fixed property of the lens.",
      },
      {
        kind: "concept",
        heading: "Object and image distances",
        body: "The *object distance* u and the *image distance* v are both measured from the *optical centre* of the lens. A screen catches a sharp *real image* at the distance v.",
        say: "2 distances describe where things sit. The object distance u runs from the object to the middle of the lens, and the image distance v runs from the middle of the lens to the image. Both are measured from the optical centre, the point at the very centre of the lens. Slide a screen until the image is sharp, and its distance from the lens is v.",
      },
      {
        kind: "concept",
        heading: "The thin lens equation",
        body: "For a *thin lens*, the *focal length*, object distance and image distance are linked. Work out 1 over f, then take the *reciprocal* to get f.",
        formula: {
          latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}",
          where: [
            { sym: "f", meaning: "focal length", unit: "cm" },
            { sym: "u", meaning: "object distance", unit: "cm" },
            { sym: "v", meaning: "image distance", unit: "cm" },
          ],
        },
        say: "The thin lens equation ties the 3 distances together. One over f equals one over u plus one over v. Notice it gives you one over f first, so you must take the reciprocal of that total to get the focal length itself. For example, one over 30 plus one over 60 is 0.0500 per centimetre, and the reciprocal of 0.0500 is 20.0 centimetres.",
      },
      {
        kind: "concept",
        heading: "Magnification",
        body: "The *magnification* m tells you how many times *bigger* the image is than the object. It equals the ratio of the distances and the ratio of the *heights*.",
        formula: {
          latex: "m = \\dfrac{v}{u} = \\dfrac{h_i}{h_o}",
          where: [
            { sym: "m", meaning: "magnification (no unit)" },
            { sym: "v", meaning: "image distance", unit: "cm" },
            { sym: "u", meaning: "object distance", unit: "cm" },
            { sym: "h_i", meaning: "image height", unit: "cm" },
            { sym: "h_o", meaning: "object height", unit: "cm" },
          ],
        },
        say: "Magnification compares sizes. It is the image distance divided by the object distance, and that is also equal to the image height divided by the object height. If v is twice u, then m is 2, and the image is twice as tall as the object. A magnification of 1 would mean the image is the same size as the object.",
      },
      {
        kind: "insight",
        body: "A *real image*, the kind you can catch on a *screen*, is always *inverted*: it is turned upside down compared with the object.",
        say: "Here is the point to remember. Any real image that a converging lens throws onto a screen is inverted, meaning it is turned upside down relative to the object. That is why the amber image arrow in the diagram points down while the green object arrow points up.",
      },
      {
        kind: "choice",
        question: "A convex lens brings parallel rays to a focus. Which distance is the focal length f of the lens?",
        options: [
          "The distance from the lens to the principal focus F",
          "The object distance u",
          "The image distance v",
          "The image height h_i",
        ],
        correct: 0,
        ask: "The focal length is fixed by the lens itself and does not depend on where the object sits. Which distance uses the principal focus F?",
        hints: [
          "Parallel rays meet at the principal focus F.",
          "The focal length runs from the lens to F, not from the object.",
        ],
        explain: "The focal length f is the distance from the lens to the principal focus F, where parallel rays are brought together. The distances u and v change with the object, but f does not.",
      },
      {
        kind: "choice",
        question: "A converging lens forms a sharp image on a screen. How does that real image compare with the object?",
        figure: "fig-pr5-07-lens-ray",
        options: [
          "It is upright and the same size",
          "It is inverted",
          "It is upright and magnified",
          "It cannot be caught on a screen",
        ],
        correct: 1,
        ask: "A real image is one you can catch on a screen. Think about which way up it is compared with the object.",
        hints: [
          "In the diagram the green object arrow points up and the amber image arrow points down.",
          "A real image is turned upside down, that is, inverted.",
        ],
        explain: "A real image caught on a screen is inverted, turned upside down compared with the object. In the figure the amber image arrow points the opposite way to the green object arrow.",
      },
      {
        kind: "slider",
        prompt: "An object at u = 30 cm forms a sharp image at v = 60 cm. Working out 1/f = 1/30 + 1/60 = 0.0500 cm^-1 first, set the slider to the focal length f, in centimetres.",
        min: 0,
        max: 30,
        step: 0.5,
        unit: "cm",
        start: 0,
        targetMin: 19.5,
        targetMax: 20.5,
        ask: "Add one over 30 and one over 60 to get one over f, then take the reciprocal to get f.",
        hints: [
          "One over 30 is 0.0333 and one over 60 is 0.0167, and they add to 0.0500 per centimetre.",
          "The reciprocal of 0.0500 is 20.0, so slide to 20 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}" },
          { label: "Substitute", latex: "\\dfrac{1}{f} = \\dfrac{1}{30} + \\dfrac{1}{60} = 0.0500\\ \\text{cm}^{-1}" },
          { label: "Answer", latex: "f = 20.0\\ \\text{cm}" },
        ],
        explain: "The focal length is 20.0 centimetres, because one over 30 plus one over 60 is 0.0500 per centimetre, and the reciprocal of 0.0500 is 20.0 centimetres.",
      },
      {
        kind: "choice",
        question: "An object at u = 25.0 cm gives a sharp image at v = 75.0 cm, so 1/f = 1/25.0 + 1/75.0 = 0.0533 cm^-1. What is the focal length f?",
        options: ["50.0 cm", "0.0533 cm", "100 cm", "18.8 cm"],
        correct: 3,
        ask: "You already have one over f as 0.0533 per centimetre. Take the reciprocal to get f.",
        hints: [
          "One over 25.0 is 0.0400 and one over 75.0 is 0.0133, adding to 0.0533 per centimetre.",
          "The reciprocal of 0.0533 is about 18.8, so f is 18.8 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}" },
          { label: "Substitute", latex: "\\dfrac{1}{f} = \\dfrac{1}{25.0} + \\dfrac{1}{75.0} = 0.0533\\ \\text{cm}^{-1}" },
          { label: "Answer", latex: "f = 18.8\\ \\text{cm}" },
        ],
        explain: "The focal length is 18.8 centimetres, because one over 25.0 plus one over 75.0 is 0.0533 per centimetre, and the reciprocal of 0.0533 is 18.8 centimetres.",
      },
      {
        kind: "choice",
        question: "An object at u = 30 cm forms an image at v = 60 cm. What is the magnification m?",
        options: ["0.5", "90", "2.0", "30"],
        correct: 2,
        ask: "Magnification is the image distance divided by the object distance, so work out 60 divided by 30.",
        hints: [
          "Use m = v divided by u.",
          "60 divided by 30 is 2.0, and magnification has no unit.",
        ],
        working: [
          { label: "Formula", latex: "m = \\dfrac{v}{u}" },
          { label: "Substitute", latex: "m = \\dfrac{60}{30}" },
          { label: "Answer", latex: "m = 2.0" },
        ],
        explain: "The magnification is 2.0, because the image distance 60 centimetres divided by the object distance 30 centimetres is 2.0, so the image is twice as tall as the object.",
      },
    ],
  },
];
