import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, Revision 1. Checkpoint over KB Chapter 14, sections t12.1 to t12.3:
// properties of light and reflection, the image in a plane mirror, and refraction
// and refractive index. Question-only (no teach cards).

export const BOXES: Subconcept[] = [
  {
    id: "t12.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: reflection, plane mirrors and refraction",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A ray strikes a plane mirror at 55 degrees to the mirror surface. What is the angle of incidence?",
        options: ["90 degrees", "55 degrees", "35 degrees", "45 degrees"],
        correct: 2,
        ask: "The angle of incidence is measured from the normal, not the surface. The normal is at 90 degrees to the surface, so take 90 minus 55.",
        hints: [
          "The normal sits at 90 degrees to the mirror, so a ray at 55 degrees to the surface is 90 minus 55 from the normal.",
          "90 minus 55 is 35, so the angle of incidence is 35 degrees.",
        ],
        working: [
          { label: "Formula", latex: "i = 90^{\\circ} - \\theta" },
          { label: "Substitute", latex: "i = 90^{\\circ} - 55^{\\circ}" },
          { label: "Answer", latex: "i = r = 35^{\\circ}" },
        ],
        explain: "The angle of incidence is 35 degrees, because angles are always measured from the normal. 90 minus 55 is 35, and by the law of reflection the reflected ray also leaves at 35 degrees.",
      },
      {
        kind: "choice",
        question: "A ray enters glass from air at an angle of incidence of 40 degrees. The glass has n = 1.52. Find the angle of refraction.",
        options: ["25 degrees", "40 degrees", "61 degrees", "15 degrees"],
        correct: 0,
        ask: "Rearrange n = sin i / sin r to get sin r = sin i divided by n. Work out sin 40 divided by 1.52.",
        hints: [
          "From n = sin i / sin r, the angle in the glass gives sin r = sin i / n.",
          "sin r = sin 40 divided by 1.52 gives r = 25 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin r = \\dfrac{\\sin i}{n}" },
          { label: "Substitute", latex: "\\sin r = \\dfrac{\\sin 40^{\\circ}}{1.52}" },
          { label: "Answer", latex: "r = 25^{\\circ}" },
        ],
        explain: "The angle of refraction is 25 degrees. Entering the denser glass the ray bends toward the normal, so r is smaller than i, and sin 40 divided by 1.52 gives 25 degrees.",
      },
      {
        kind: "choice",
        question: "A ray of light passes from air into a glass block. Which way does it bend at the surface?",
        options: [
          "It bends away from the normal",
          "It travels straight on without bending",
          "It reflects back into the air",
          "It bends toward the normal",
        ],
        correct: 3,
        ask: "Glass is optically denser than air, so light slows down entering it. A ray slowing down bends toward the normal. Which option says that?",
        hints: [
          "Going from a less dense medium to a denser one, light slows and bends toward the normal.",
          "So the angle of refraction is smaller than the angle of incidence, meaning it bends toward the normal.",
        ],
        explain: "The ray bends toward the normal, because glass is denser than air and light slows down entering it. That makes the angle of refraction smaller than the angle of incidence.",
      },
      {
        kind: "choice",
        question: "Which statement describes regular reflection?",
        figure: "fig-14-02-regular-diffuse",
        options: [
          "Parallel rays hit a rough wall and scatter in many directions",
          "Parallel rays hit a smooth mirror and stay parallel after reflecting",
          "The angle of incidence is always larger than the angle of reflection",
          "Light passes into the surface and bends toward the normal",
        ],
        correct: 1,
        ask: "Regular reflection happens on a smooth surface. Think about what happens to a set of parallel rays reflecting off a mirror.",
        hints: [
          "On a smooth surface the normals are all parallel, so parallel rays stay parallel.",
          "Scattering in many directions is diffuse reflection off a rough surface, not regular reflection.",
        ],
        explain: "Regular reflection is parallel rays staying parallel after bouncing off a smooth mirror. Scattering in many directions is diffuse reflection, which happens on a rough surface.",
      },
      {
        kind: "choice",
        question: "Light travels at 3.0 x 10^8 m/s in a vacuum. In glass of refractive index n = 1.5, what is the speed of light?",
        options: ["3.0 x 10^8 m/s", "4.5 x 10^8 m/s", "2.0 x 10^8 m/s", "1.5 x 10^8 m/s"],
        correct: 2,
        ask: "Use n = c divided by v, so v = c divided by n. Work out 3.0 times 10 to the power 8 divided by 1.5.",
        hints: [
          "Rearrange n = c / v to get v = c / n.",
          "3.0 times 10 to the power 8 divided by 1.5 is 2.0 times 10 to the power 8 metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{c}{n}" },
          { label: "Substitute", latex: "v = \\dfrac{3.0 \\times 10^{8}}{1.5}" },
          { label: "Answer", latex: "v = 2.0 \\times 10^{8}\\ \\text{m/s}" },
        ],
        explain: "The speed in glass is 2.0 times 10 to the power 8 metres per second, because 3.0 times 10 to the power 8 divided by 1.5 is 2.0 times 10 to the power 8. Light always travels slower in a denser medium.",
      },
      {
        kind: "tiles",
        prompt: "A ray enters medium X from air at i = 60 degrees and refracts to r = 36 degrees. Build the working line that gives the refractive index n.",
        tiles: ["n =", "\\sin 60", "\\div", "\\sin 36", "=", "1.47", "\\times", "1.31"],
        answer: ["n =", "\\sin 60", "\\div", "\\sin 36", "=", "1.47"],
        ask: "Use n = sin i / sin r with i in air. Divide sin 60 by sin 36.",
        hints: [
          "The refractive index is sin of the angle in air divided by sin of the angle in the medium.",
          "sin 60 divided by sin 36 is 1.47.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 60^{\\circ}}{\\sin 36^{\\circ}}" },
          { label: "Answer", latex: "n = 1.47" },
        ],
        explain: "The refractive index is 1.47, because sin 60 divided by sin 36 is 1.47. A refractive index has no unit.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement about the image in a plane mirror as true or false.",
        bins: ["True of the image", "False for the image"],
        items: [
          { text: "same size as the object", bin: 0 },
          { text: "upright", bin: 0 },
          { text: "laterally inverted", bin: 0 },
          { text: "as far behind as the object is in front", bin: 0 },
          { text: "can be caught on a screen", bin: 1 },
          { text: "smaller than the object", bin: 1 },
        ],
        ask: "Recall the 5 features of a plane-mirror image: virtual, upright, same size, laterally inverted, and equal distance behind. Tap each statement into the right bin.",
        hints: [
          "The image is the same size, upright, laterally inverted, and as far behind the mirror as the object is in front.",
          "It is virtual, so it cannot be caught on a screen, and it is never smaller than the object.",
        ],
        explain: "The image is the same size, upright, laterally inverted, and equal distance behind the mirror. It is virtual, so it cannot be caught on a screen, and it is never diminished.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of refraction into glass.",
        segments: [
          "Refraction happens when light changes ",
          " as it crosses into a new medium. Entering denser glass it slows and bends ",
          " the normal, so the angle i is greater than the angle ",
          ".",
        ],
        bank: ["speed", "toward", "r", "away", "colour", "i"],
        answer: ["speed", "toward", "r"],
        ask: "Refraction is a change of speed at the boundary. Recall which way the ray bends going into a denser medium, and which angle then becomes the smaller one.",
        hints: [
          "Light bends because its speed changes crossing the boundary.",
          "Entering denser glass it slows and bends toward the normal, so i is greater than r.",
        ],
        explain: "Refraction is a change of speed at a boundary. Entering denser glass the light slows and bends toward the normal, so the angle of incidence i is greater than the angle of refraction r.",
      },
      {
        kind: "slider",
        prompt: "An object stands 2.5 m in front of a plane mirror. Set the slider to the distance between the object and its image, in m.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "m",
        start: 0,
        targetMin: 4.9,
        targetMax: 5.1,
        ask: "The image is as far behind the mirror as the object is in front. Add the object distance and the image distance.",
        hints: [
          "The image forms 2.5 metres behind the mirror, matching the 2.5 metres in front.",
          "2.5 plus 2.5 is 5.0, so the object and image are 5.0 metres apart.",
        ],
        working: [
          { label: "Formula", latex: "d = d_{o} + d_{i}" },
          { label: "Substitute", latex: "d = 2.5 + 2.5" },
          { label: "Answer", latex: "d = 5.0\\ \\text{m}" },
        ],
        explain: "The object and image are 5.0 metres apart, because the image sits 2.5 metres behind the mirror to match the 2.5 metres in front, and 2.5 plus 2.5 is 5.0.",
      },
      {
        kind: "spoterror",
        prompt: "A student works out the angle of incidence for a ray drawn at 30 degrees to a mirror. Find the line with the mistake.",
        lines: [
          "The normal is drawn at 90 degrees to the mirror surface.",
          "The angle of incidence is measured from the surface, so i = 30 degrees.",
          "The law of reflection says the angle of reflection equals the angle of incidence.",
          "So the reflected ray leaves at the same angle on the other side of the normal.",
        ],
        errorLine: 1,
        ask: "One line measures the angle from the wrong reference. Angles in optics are measured from the normal, not the surface.",
        hints: [
          "The angle of incidence is always taken from the normal, never from the surface.",
          "A ray at 30 degrees to the surface is 90 minus 30, so i is 60 degrees, not 30 degrees.",
        ],
        explain: "The mistake is measuring the angle from the surface. Angles are measured from the normal, so a ray at 30 degrees to the surface has an angle of incidence of 90 minus 30, which is 60 degrees.",
      },
      {
        kind: "open",
        prompt: "Explain the difference between regular reflection and diffuse reflection.",
        modelAnswer: "Regular reflection happens on a smooth surface such as a mirror: the normals are all parallel, so a set of parallel incident rays stays parallel after reflecting and a clear image forms. Diffuse reflection happens on a rough surface: the normals point in many directions, so parallel incident rays scatter and no clear image forms. In both cases each ray still obeys the law of reflection, i = r.",
        marks: [
          "Regular reflection is off a smooth surface; parallel rays stay parallel.",
          "Diffuse reflection is off a rough surface; parallel rays scatter.",
          "Each individual ray still obeys i = r in both cases.",
        ],
        ask: "Think about the surface in each case, what happens to a set of parallel rays, and whether the law of reflection still holds for each ray.",
      },
      {
        kind: "open",
        prompt: "Describe the image formed in a plane mirror, listing its main features.",
        figure: "fig-14-05-plane-mirror-image",
        modelAnswer: "The image in a plane mirror is virtual, meaning it cannot be caught on a screen because no light actually passes through it. It is upright and the same size as the object. It is laterally inverted, so left and right are swapped. It forms the same distance behind the mirror as the object is in front, along a line at 90 degrees to the mirror.",
        marks: [
          "Virtual (cannot be formed on a screen).",
          "Upright and same size as the object.",
          "Laterally inverted; same distance behind as the object is in front.",
        ],
        ask: "Recall the 5 standard features: whether it is real or virtual, its orientation, its size, whether left and right swap, and where it sits relative to the mirror.",
      },
    ],
  },
];
