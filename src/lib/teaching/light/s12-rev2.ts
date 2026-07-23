import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, Revision 2. Checkpoint over KB Chapter 14, sections t12.4 to t12.6:
// critical angle and total internal reflection, lenses, and lens images.
// Question-only. Calculation values come only from the T12 CALCULATION BANK.

export const BOXES: Subconcept[] = [
  {
    id: "t12.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: critical angle, TIR and lens images",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "For total internal reflection to happen, the light must be going from a denser medium into a less dense one, and the angle of incidence must be...",
        options: [
          "less than the critical angle",
          "greater than the critical angle",
          "exactly 0 degrees",
          "equal to the angle of refraction",
        ],
        correct: 1,
        ask: "At the critical angle the refracted ray runs along the surface. To trap all the light inside, should the incidence angle be bigger or smaller than that? Which option is that?",
        hints: [
          "At the critical angle the ray just grazes the boundary at 90 degrees.",
          "Push the angle past the critical angle and no ray can escape, so all the light reflects back in.",
        ],
        explain: "The angle of incidence must be greater than the critical angle. Only then does the refracted ray disappear and all the light reflect back into the denser medium.",
      },
      {
        kind: "choice",
        question: "Light travels inside glass of refractive index 1.52. Find the critical angle c, given sin c = 1/n.",
        figure: "fig-14-12-critical-angle",
        options: ["24 degrees", "49 degrees", "42 degrees", "41 degrees"],
        correct: 3,
        ask: "Work out 1 ÷ 1.52, then take the inverse sine to get the angle. Which option matches?",
        hints: [
          "Use sin c equals 1 divided by n, with n equal to 1.52.",
          "1 ÷ 1.52 is about 0.66, and the angle whose sine is 0.66 is 41 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.52}" },
          { label: "Answer", latex: "c = 41^\\circ" },
        ],
        explain: "The critical angle is 41 degrees, because 1 ÷ 1.52 is about 0.66, and the inverse sine of 0.66 is 41 degrees. The other values belong to diamond, water and perspex.",
      },
      {
        kind: "choice",
        question: "Inside perspex the critical angle is 42 degrees. A ray strikes the inside of the surface at 45 degrees. What happens to it?",
        figure: "fig-14-13-total-internal-reflection",
        options: [
          "It is totally internally reflected back into the perspex",
          "It passes straight out without bending",
          "It refracts and bends toward the normal",
          "Half reflects and half refracts in equal amounts",
        ],
        correct: 0,
        ask: "Compare the 45 degree angle with the 42 degree critical angle, and remember the ray is going from perspex to air. Which option fits?",
        hints: [
          "The light is inside the denser medium heading for the less dense air, so both TIR conditions are in play.",
          "45 degrees is greater than the 42 degree critical angle, so no ray can escape.",
        ],
        explain: "It is totally internally reflected, because 45 degrees is greater than the 42 degree critical angle and the ray is passing from the denser perspex toward the less dense air. Both conditions for TIR are met.",
      },
      {
        kind: "choice",
        question: "An object is placed closer to a converging lens than its focal length, inside F, as in a magnifying glass. What is the image like?",
        figure: "fig-14-19-lens-virtual-image",
        options: [
          "Real, inverted, diminished",
          "Real, inverted, same size",
          "Virtual, upright, enlarged",
          "Virtual, inverted, diminished",
        ],
        correct: 2,
        ask: "A magnifying glass makes things look bigger and the right way up, and the image cannot be caught on a screen. Which option is that?",
        hints: [
          "When the object is inside F the rays spread apart after the lens, so they only appear to come from an image.",
          "That image is upright, larger than the object, and virtual.",
        ],
        explain: "The image is virtual, upright and enlarged. With the object inside the focal length the emerging rays diverge, so the image cannot be projected and appears larger and the right way up.",
      },
      {
        kind: "choice",
        question: "An object stands well beyond 2F in front of a converging lens, as in a camera. Describe its image.",
        figure: "fig-14-18-lens-real-image",
        options: [
          "Virtual, upright, enlarged",
          "Real, upright, same size",
          "Virtual, inverted, enlarged",
          "Real, inverted, diminished",
        ],
        correct: 3,
        ask: "A camera shrinks a distant scene onto its sensor, and the picture can be captured. Real images are inverted. Which option fits?",
        hints: [
          "Beyond 2F the rays cross after the lens, forming an image that can land on a screen, so it is real.",
          "A real image here is inverted and smaller than the object.",
        ],
        explain: "The image is real, inverted and diminished. With the object beyond 2F the rays meet close behind the lens, giving a small upside-down image that a camera sensor can record.",
      },
      {
        kind: "tiles",
        prompt: "Diamond has a refractive index of 2.42. Build the working line that gives its critical angle c.",
        tiles: ["\\sin c =", "1", "\\div", "2.42", "=", "0.413", "so\\ c =", "24^\\circ", "41^\\circ"],
        answer: ["\\sin c =", "1", "\\div", "2.42", "=", "0.413", "so\\ c =", "24^\\circ"],
        ask: "Start from sin c equals 1 over n, put in 2.42, then take the inverse sine. Lay the tiles in that order.",
        hints: [
          "Use sin c equals 1 divided by n, with n equal to 2.42.",
          "1 ÷ 2.42 is 0.413, and the inverse sine of 0.413 is 24 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{2.42}" },
          { label: "Answer", latex: "c = 24^\\circ" },
        ],
        explain: "The critical angle of diamond is 24 degrees, because 1 ÷ 2.42 is 0.413, and the inverse sine of 0.413 is 24 degrees. This small critical angle is why diamonds sparkle so much.",
      },
      {
        kind: "slider",
        prompt: "Perspex has a refractive index of 1.49. Set the slider to its critical angle c, in degrees, using sin c = 1/n.",
        min: 0,
        max: 90,
        step: 1,
        unit: "degrees",
        start: 0,
        targetMin: 41,
        targetMax: 43,
        ask: "Work out 1 ÷ 1.49, then take the inverse sine, and slide to that angle.",
        hints: [
          "Use sin c equals 1 divided by n, with n equal to 1.49.",
          "1 ÷ 1.49 is about 0.67, and the inverse sine of 0.67 is 42 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.49}" },
          { label: "Answer", latex: "c = 42^\\circ" },
        ],
        explain: "The critical angle of perspex is 42 degrees, because 1 ÷ 1.49 is about 0.67, and the inverse sine of 0.67 is 42 degrees.",
      },
      {
        kind: "classify",
        prompt: "For each ray trapped inside a medium, decide whether total internal reflection occurs.",
        bins: ["TIR occurs (i greater than c)", "Light refracts out (i less than c)"],
        items: [
          { text: "inside glass, c = 41 degrees, ray hits at 50 degrees", bin: 0 },
          { text: "inside perspex, c = 42 degrees, ray hits at 45 degrees", bin: 0 },
          { text: "inside glass, c = 41 degrees, ray hits at 30 degrees", bin: 1 },
          { text: "inside water, c = 49 degrees, ray hits at 40 degrees", bin: 1 },
        ],
        ask: "For each case compare the ray's angle with the critical angle. Bigger than c means TIR; smaller than c means the light escapes. Drop each into its bin.",
        hints: [
          "The ray is already in the denser medium, so the only test left is the angle against the critical angle.",
          "50 is greater than 41 and 45 is greater than 42, so those reflect; 30 is less than 41 and 40 is less than 49, so those refract out.",
        ],
        explain: "TIR happens when the angle beats the critical angle: 50 is greater than 41 and 45 is greater than 42, so those rays reflect. 30 is less than 41 and 40 is less than 49, so those rays refract out of the surface.",
      },
      {
        kind: "match",
        prompt: "Match each object position in front of a converging lens to the image it forms.",
        pairs: [
          { left: "Object beyond 2F", right: "Real, inverted, diminished (camera)" },
          { left: "Object at 2F", right: "Real, inverted, same size (photocopier)" },
          { left: "Object between F and 2F", right: "Real, inverted, enlarged (projector)" },
          { left: "Object between F and the lens", right: "Virtual, upright, enlarged (magnifying glass)" },
        ],
        ask: "As the object moves in from far away toward the lens, the image grows and finally flips to upright and virtual once the object is inside F. Pair each position with its image.",
        hints: [
          "Every position outside F gives a real, inverted image; only the object inside F gives a virtual, upright one.",
          "At 2F the image is the same size; between F and 2F it is enlarged; beyond 2F it is diminished.",
        ],
        explain: "Beyond 2F the image is diminished (camera), at 2F it is the same size (photocopier), between F and 2F it is enlarged (projector), and inside F it becomes virtual, upright and enlarged (magnifying glass).",
      },
      {
        kind: "spoterror",
        prompt: "Find the one wrong statement about the conditions for total internal reflection.",
        lines: [
          "Total internal reflection needs 2 conditions to be satisfied.",
          "The light must be travelling from a less dense medium into a denser medium.",
          "The angle of incidence must be greater than the critical angle.",
          "When both hold, all the light reflects back inside and none emerges.",
        ],
        errorLine: 1,
        ask: "Picture light in glass meeting air. Which way across the boundary must it be heading for TIR? Check the statement about density order.",
        hints: [
          "TIR only works when the light is trying to leave a slow, dense medium for a faster, less dense one.",
          "The second line has the density order backwards.",
        ],
        explain: "The second line is wrong. Total internal reflection needs the light to go from the denser medium into the less dense one, not the other way round. If it were entering a denser medium it would simply refract inward.",
      },
      {
        kind: "open",
        prompt: "State the 2 conditions needed for total internal reflection, and name one everyday use that depends on it.",
        figure: "fig-14-14-optical-fibre",
        modelAnswer: "First, the light must be travelling from a denser medium into a less dense one. Second, the angle of incidence at the boundary must be greater than the critical angle. When both are met, no light refracts out and all of it reflects back inside. A common use is the optical fibre, where light is repeatedly totally internally reflected along a high refractive index core so it carries signals with little loss. Reflecting prisms in binoculars and periscopes are another use.",
        marks: [
          "Light must go from a denser medium to a less dense medium.",
          "Angle of incidence must be greater than the critical angle.",
          "One valid use named, such as optical fibres or reflecting prisms.",
        ],
        ask: "Think about the density order at the boundary, how the incidence angle compares with the critical angle, and where engineers put this effect to work.",
      },
      {
        kind: "open",
        prompt: "An object is placed well beyond 2F in front of a converging lens, as in a camera. Describe the image formed and explain how you would locate it on a ray diagram.",
        modelAnswer: "The image is real, inverted and diminished, and it forms between F and 2F on the far side of the lens. To locate it, draw 2 rays from the top of the object: one parallel to the principal axis that then passes through the far principal focus F, and one straight through the optical centre C without bending. The point where these 2 rays cross fixes the top of the image, which sits below the axis because it is inverted.",
        marks: [
          "Image is real, inverted and diminished.",
          "Image forms between F and 2F on the far side of the lens.",
          "Locate it by crossing 2 standard rays: parallel-then-through-F and straight-through-C.",
        ],
        ask: "Recall the image nature for an object beyond 2F, then think about which 2 of the standard construction rays are easiest to draw and where they meet.",
      },
    ],
  },
];
