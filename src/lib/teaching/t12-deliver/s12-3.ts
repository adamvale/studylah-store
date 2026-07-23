import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, section 3. Grounded in KB Chapter 14 (Light) sections 14.4 and 14.5.
// Figure colours follow the T12 colour key: light rays (incident, refracted, emergent) = blue;
// the normal = a grey dashed line at 90 degrees to the surface; glass, water and blocks = pale grey;
// angles i and r marked in grey at the normal. Refractive index n has NO unit.

export const BOXES: Subconcept[] = [
  {
    id: "t12.3",
    code: "T12.3",
    title: "Refraction and refractive index",
    blurb: "Why light bends crossing into glass or water, and how to measure that bending",
    steps: [
      {
        kind: "concept",
        heading: "Light bends when its speed changes",
        figure: "fig-14-08-refraction-boundary",
        body: "*Refraction* is the bending of light as it crosses into a medium of different *optical density*. Light travels *faster* in a less dense medium like air and *slower* in a denser one like glass, and that change of speed is what bends the ray.",
        say: "Refraction is what happens when light passes from one clear material into another and changes speed. In the picture a blue ray travels down through the air, hits the flat top of a pale grey glass block, and bends as it enters. A grey dashed line drawn at 90 degrees to the surface is the normal, and the angles on either side of it are marked i in the air and r in the glass. Light moves faster in the less dense air and slower in the denser glass, and it is that change of speed at the boundary that bends the ray.",
      },
      {
        kind: "concept",
        heading: "Toward or away from the normal",
        figure: "fig-14-09-bending-normal",
        body: "Entering a *denser* medium the ray bends *toward* the normal, so the angle of incidence is bigger than the angle of refraction (i > r). Entering a *less dense* medium it bends *away* from the normal (i < r). A ray travelling along the normal is not bent at all.",
        say: "Which way the ray bends depends on which way the density changes. This figure shows 2 cases. On the left a blue ray goes from air into a denser pale grey block, and it bends toward the grey dashed normal, so the angle i in the air is larger than the angle r inside. On the right a blue ray leaves the denser block into the less dense air and bends away from the normal, so now i is the smaller angle. If a ray travels straight along the normal, hitting the surface head on, it carries on with no bending at all.",
      },
      {
        kind: "concept",
        heading: "Refractive index from the angles",
        figure: "fig-14-11-semicircular-block",
        body: "The *refractive index* n compares the bending: for a ray entering from air it is the *sine* of the angle of incidence divided by the sine of the angle of refraction. A larger n bends light *more*. It is a ratio, so it has no unit.",
        formula: {
          latex: "n = \\dfrac{\\sin i}{\\sin r}",
          where: [
            { sym: "n", meaning: "refractive index of the medium" },
            { sym: "i", meaning: "angle of incidence in air" },
            { sym: "r", meaning: "angle of refraction in the medium" },
          ],
        },
        say: "We measure the bending with a number called the refractive index, written n. In the picture a blue ray enters the flat face of a pale grey semicircular glass block at 40 degrees to the grey dashed normal and refracts to 25 degrees inside. Take the sine of the angle in the air, 40 degrees, and divide by the sine of the angle in the glass, 25 degrees, and you get a refractive index of about 1.52. The bigger this number, the more the material bends light. Water is about 1.33, glass about 1.5, and diamond about 2.42. Because it is one length divided by another, n has no unit.",
      },
      {
        kind: "concept",
        heading: "Refractive index from the speed",
        body: "You can also find n from *speed*: it is the speed of light in a *vacuum* divided by the speed of light in the *medium*. A denser medium slows light more, giving a bigger n. This matches the angle definition exactly.",
        formula: {
          latex: "n = \\dfrac{c}{v}",
          where: [
            { sym: "n", meaning: "refractive index of the medium" },
            { sym: "c", meaning: "speed of light in a vacuum", unit: "m/s" },
            { sym: "v", meaning: "speed of light in the medium", unit: "m/s" },
          ],
        },
        say: "There is a second way to get the same refractive index, straight from speeds. Take the speed of light in a vacuum, c, which is 3.0 times 10 to the power 8 metres per second, and divide it by the slower speed v the light has inside the material. The more a medium slows light down, the larger the refractive index. Both ways of working out n, from the angles or from the speeds, always give the same value for a given material.",
      },
      {
        kind: "choice",
        question: "A ray of light passes from air into a glass block. Which way does it bend at the surface?",
        figure: "fig-14-09-bending-normal",
        options: [
          "Away from the normal, so i < r",
          "Straight through with no bending",
          "Toward the normal, so i > r",
          "It reflects straight back into the air",
        ],
        correct: 2,
        ask: "Glass is denser than air, and a ray entering a denser medium slows down and bends toward the normal. Which option says that?",
        hints: [
          "Into a denser medium means bending toward the normal.",
          "Toward the normal means the angle in the air, i, is bigger than the angle in the glass, r.",
        ],
        explain: "The ray bends toward the normal, so i is greater than r. Glass is denser than air, the light slows down as it enters, and that always bends the ray toward the normal.",
      },
      {
        kind: "choice",
        question: "A ray hits a glass block of refractive index 1.52 at an angle of incidence i = 40 degrees. Find the angle of refraction r.",
        options: ["61 degrees", "25 degrees", "40 degrees", "15 degrees"],
        correct: 1,
        ask: "Rearrange n = sin i / sin r to sin r = sin i / n, then work out sin 40 divided by 1.52 and take the inverse sine.",
        hints: [
          "sin r = sin 40 divided by 1.52.",
          "That gives a sine of about 0.42, and the angle with that sine is 25 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin r = \\dfrac{\\sin i}{n}" },
          { label: "Substitute", latex: "\\sin r = \\dfrac{\\sin 40^\\circ}{1.52}" },
          { label: "Answer", latex: "r = 25^\\circ" },
        ],
        explain: "The angle of refraction is 25 degrees, because sin 40 degrees divided by 1.52 is about 0.42, and the angle whose sine is 0.42 is 25 degrees. The ray bends toward the normal, so r is smaller than i.",
      },
      {
        kind: "slider",
        prompt: "A ray enters a transparent medium from air with i = 60 degrees and refracts to r = 36 degrees. Set the slider to the refractive index (sin 60 = 0.87, sin 36 = 0.59).",
        min: 1,
        max: 2,
        step: 0.01,
        start: 1,
        targetMin: 1.46,
        targetMax: 1.48,
        ask: "The refractive index is sin i divided by sin r, so work out sin 60 divided by sin 36.",
        hints: [
          "Use n = sin i / sin r with i = 60 degrees and r = 36 degrees.",
          "0.87 divided by 0.59 is about 1.47, so slide to 1.47.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 60^\\circ}{\\sin 36^\\circ}" },
          { label: "Answer", latex: "n = 1.47" },
        ],
        explain: "The refractive index is 1.47, because the sine of 60 degrees, about 0.87, divided by the sine of 36 degrees, about 0.59, is 1.47. Refractive index is a ratio, so it has no unit.",
      },
      {
        kind: "choice",
        question: "Glass has a refractive index of 1.5. The speed of light in a vacuum is 3.0 x 10^8 m/s. Find the speed of light in the glass.",
        options: [
          "4.5 x 10^8 m/s",
          "1.5 x 10^8 m/s",
          "6.0 x 10^8 m/s",
          "2.0 x 10^8 m/s",
        ],
        correct: 3,
        ask: "Rearrange n = c / v to v = c / n, then divide 3.0 times 10 to the power 8 by 1.5.",
        hints: [
          "The speed in the glass is c divided by n.",
          "3.0 times 10 to the power 8 divided by 1.5 is 2.0 times 10 to the power 8.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{c}{n}" },
          { label: "Substitute", latex: "v = \\dfrac{3.0 \\times 10^8}{1.5}" },
          { label: "Answer", latex: "v = 2.0 \\times 10^8\\ \\text{m/s}" },
        ],
        explain: "The speed in the glass is 2.0 times 10 to the power 8 metres per second, because 3.0 times 10 to the power 8 divided by 1.5 is 2.0 times 10 to the power 8. Light is slower in the denser glass than in a vacuum.",
      },
      {
        kind: "choice",
        question: "Light passes from a liquid into the air. The angle in the air is 41 degrees and the angle in the liquid is 30 degrees. Find the refractive index of the liquid (sin 41 = 0.66, sin 30 = 0.50).",
        options: ["0.65", "1.00", "1.31", "1.52"],
        correct: 2,
        ask: "The refractive index is the sine of the angle in air divided by the sine of the angle in the liquid, so work out sin 41 divided by sin 30.",
        hints: [
          "Use n = sin i / sin r, with the angle in air on top.",
          "0.66 divided by 0.50 is about 1.31.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 41^\\circ}{\\sin 30^\\circ}" },
          { label: "Answer", latex: "n = 1.31" },
        ],
        explain: "The refractive index of the liquid is 1.31, because sin 41 degrees, about 0.66, divided by sin 30 degrees, 0.50, is 1.31. The angle measured in the air always goes on top.",
      },
      {
        kind: "insight",
        body: "Because a denser medium *slows* light and bends it *toward* the normal, an object under water looks *shallower* than it really is: its light bends away from the normal on the way out, so the *image* appears raised. The same refractive index n describes both the bending and the slowing.",
        say: "Here is the idea to hold on to. Refraction is really one thing seen 2 ways. A denser material slows light down and bends the ray toward the normal, and the single number n captures both. This is why a swimming pool looks shallower than it is, and why a straw in a glass of water looks bent at the surface. Light from the object underwater bends away from the normal as it leaves the water, so your eye traces it back to an image that sits higher than the object really is. That raised image is called the apparent depth.",
      },
    ],
  },
];
