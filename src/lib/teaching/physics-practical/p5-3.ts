import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), section 3. Grounded in Practical Chapter 05 - Waves (law of refraction).
// Figure colours follow the fig-pr5 key: light rays = blue, glass block = pale-blue solid, the normal (dashed)
// and guide/gradient lines = grey, angle arcs (i, r) and labels = amber; on the sin i vs sin r graph the
// plotted-point crosses = red and the best-fit line = blue, axes = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.3",
    code: "TP5.3",
    title: "Refraction and Snell's law",
    blurb: "Why light bends at a boundary, and how the refractive index measures it",
    steps: [
      {
        kind: "concept",
        heading: "Light bends when its speed changes",
        body: "*Refraction* is the bending of light when its *speed* changes at a *boundary* between media of different *optical density*.",
        say: "When light crosses from one material into another, its speed changes, and that change of speed makes the ray bend. We call this bending refraction. It only happens at the boundary between 2 media that have different optical densities, such as air and glass.",
      },
      {
        kind: "concept",
        heading: "Towards or away from the normal",
        figure: "fig-pr5-04-refraction-block",
        body: "Into a *denser* medium light *slows* and bends *towards* the normal, so r is less than i. Into a *less dense* medium it speeds up and bends away.",
        say: "In the picture a blue ray comes down through the air and strikes a pale-blue glass block. The dashed grey line standing at right angles to the surface is the normal. In the air the amber arc marks the angle of incidence i, and once inside the glass the amber arc marks a smaller angle of refraction r. Going into the denser glass the light slows and bends towards the normal, so r is less than i. Going the other way, out into the less dense air, it speeds up and bends away from the normal.",
      },
      {
        kind: "concept",
        heading: "Snell's law",
        body: "*Snell's law* for air into a material is written below, where *n* is the *refractive index*. For air itself n is 1.0.",
        formula: {
          latex: "n = \\dfrac{\\sin i}{\\sin r}",
          where: [
            { sym: "n", meaning: "refractive index of the material" },
            { sym: "sin i", meaning: "sine of the angle of incidence in air" },
            { sym: "sin r", meaning: "sine of the angle of refraction in the material" },
          ],
        },
        say: "Snell's law ties the 2 angles together. The refractive index n equals the sine of the angle of incidence divided by the sine of the angle of refraction, with the light going from air into the material. Because a denser material bends light more, its refractive index is larger. Air barely bends light at all, so the refractive index of air is 1.0.",
      },
      {
        kind: "concept",
        heading: "Reading n from a graph",
        figure: "fig-pr5-05-sini-sinr-graph",
        body: "Plotting *sin i* against *sin r* gives a straight line through the origin, and its *gradient* is *n*.",
        say: "In the lab you measure several pairs of angles, then plot the sine of i up the vertical axis against the sine of r along the horizontal axis. In the graph the red crosses are the measured points and the blue best-fit line runs straight through the origin. A grey dashed triangle on the line shows how to read its gradient, and that gradient is the refractive index n.",
      },
      {
        kind: "choice",
        question: "A ray of light passes from air into a glass block. Which best describes what happens to the ray at the surface?",
        figure: "fig-pr5-04-refraction-block",
        options: [
          "It bends away from the normal",
          "It carries straight on without bending",
          "It bends towards the normal",
          "It reflects back into the air",
        ],
        correct: 2,
        ask: "Glass is denser than air, so the light slows down. Does slowing down bend the ray towards the normal or away from it?",
        hints: [
          "Into a denser medium the ray bends towards the normal, so r is less than i.",
          "The angle inside the glass is smaller than the angle in the air.",
        ],
        explain: "Glass is optically denser than air, so the light slows and bends towards the normal, making the angle of refraction smaller than the angle of incidence.",
      },
      {
        kind: "choice",
        question: "In an experiment the angle of incidence in air is 45 degrees and the angle of refraction in the glass is 28 degrees. Find the refractive index n. (sin 45 = 0.707, sin 28 = 0.469)",
        options: ["1.3", "1.5", "0.66", "2.0"],
        correct: 1,
        ask: "Use n equals sin i divided by sin r, so work out 0.707 divided by 0.469.",
        hints: [
          "Put sin i on top and sin r on the bottom.",
          "0.707 divided by 0.469 is about 1.5.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 45}{\\sin 28} = \\dfrac{0.707}{0.469}" },
          { label: "Answer", latex: "n = 1.5" },
        ],
        explain: "The refractive index is 1.5, because the sine of 45 degrees, 0.707, divided by the sine of 28 degrees, 0.469, is 1.5.",
      },
      {
        kind: "graphpick",
        prompt: "A student plots sin i (vertical) against sin r (horizontal) for a glass block. Which graph should the results give?",
        xLabel: "sin r",
        yLabel: "sin i",
        options: [
          { points: [[0, 0.25], [0.2, 0.45], [0.4, 0.65], [0.6, 0.85]], caption: "Straight line, but cutting the axis above the origin" },
          { points: [[0, 0], [0.2, 0.15], [0.4, 0.35], [0.6, 0.9]], caption: "A curve that steepens" },
          { points: [[0, 0], [0.2, 0.2], [0.4, 0.4], [0.6, 0.6]], caption: "Straight line through the origin, gradient 1" },
          { points: [[0, 0], [0.2, 0.3], [0.4, 0.6], [0.6, 0.9]], caption: "Straight line through the origin, gradient 1.5" },
        ],
        correct: 3,
        ask: "Snell's law makes sin i proportional to sin r, so the line must pass through the origin, and its gradient equals the refractive index of about 1.5.",
        hints: [
          "A proportional relationship gives a straight line through the origin, not a curve and not one cutting the axis above zero.",
          "The gradient is the refractive index, about 1.5, so sin i climbs faster than sin r.",
        ],
        explain: "Snell's law makes sin i directly proportional to sin r, so the correct graph is a straight line through the origin whose gradient is the refractive index, about 1.5.",
      },
      {
        kind: "slider",
        prompt: "On a sin i against sin r graph the best-fit line rises from the point (0.10, 0.15) to the point (0.60, 0.90). Set the slider to the refractive index n read from its gradient.",
        min: 1.0,
        max: 2.0,
        step: 0.05,
        start: 1.0,
        targetMin: 1.45,
        targetMax: 1.55,
        ask: "The gradient is the rise in sin i divided by the run in sin r, so work out 0.90 minus 0.15, over 0.60 minus 0.10.",
        hints: [
          "Rise is 0.90 minus 0.15, which is 0.75. Run is 0.60 minus 0.10, which is 0.50.",
          "0.75 divided by 0.50 is 1.50, so slide to 1.5.",
        ],
        working: [
          { label: "Formula", latex: "n = \\text{gradient} = \\dfrac{\\Delta \\sin i}{\\Delta \\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{0.90 - 0.15}{0.60 - 0.10} = \\dfrac{0.75}{0.50}" },
          { label: "Answer", latex: "n = 1.50" },
        ],
        explain: "The gradient is 0.75 divided by 0.50, which is 1.50, so the refractive index read from the graph is 1.5.",
      },
      {
        kind: "choice",
        question: "For a second block the angle of incidence in air is 40 degrees and the angle of refraction is 25.3 degrees. Find the refractive index n. (sin 40 = 0.643, sin 25.3 = 0.428)",
        options: ["1.5", "0.67", "1.3", "2.5"],
        correct: 0,
        ask: "Use n equals sin i divided by sin r, so work out 0.643 divided by 0.428.",
        hints: [
          "Sin i is on top, sin r on the bottom.",
          "0.643 divided by 0.428 is about 1.5.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 40}{\\sin 25.3} = \\dfrac{0.643}{0.428}" },
          { label: "Answer", latex: "n = 1.5" },
        ],
        explain: "The refractive index is 1.5, because the sine of 40 degrees, 0.643, divided by the sine of 25.3 degrees, 0.428, is 1.5. The same block gives the same n whatever the incidence angle.",
      },
      {
        kind: "insight",
        body: "The *refractive index* is a fixed number for a material: it always equals *sin i divided by sin r*, and it is the *gradient* of the sin i against sin r graph.",
        say: "Here is the idea to keep. A given material has one refractive index. Whether you find it from a single pair of angles or from the gradient of a whole graph, you get the same value, because n is always the sine of the angle of incidence divided by the sine of the angle of refraction.",
      },
    ],
  },
];
