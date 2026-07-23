import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, section 4. Grounded in KB Chapter 14 (Light), sections 14.6 and 14.7.
// Figure colours follow the topic key: light rays (incident, reflected, refracted) = blue;
// the normal = grey dashed at 90 degrees; glass blocks, prisms and optical-fibre bodies = pale grey.

export const BOXES: Subconcept[] = [
  {
    id: "t12.4",
    code: "T12.4",
    title: "Critical angle and total internal reflection",
    blurb: "When light trapped inside a denser medium bounces back instead of escaping",
    steps: [
      {
        kind: "concept",
        heading: "The critical angle",
        figure: "fig-14-12-critical-angle",
        body: "Going from a *denser* to a *less dense* medium, the ray bends away from the normal. As the angle of incidence grows, the refracted ray bends further until it runs *along the boundary*. The angle that makes the refracted angle 90 degrees is the *critical angle* c.",
        formula: {
          latex: "\\sin c = \\dfrac{1}{n}",
          where: [
            { sym: "c", meaning: "critical angle" },
            { sym: "n", meaning: "refractive index of the denser medium" },
          ],
        },
        say: "In this picture a blue ray travels up inside a pale grey glass block and meets the top surface. A grey dashed normal stands at 90 degrees to that surface. As you tilt the ray to a bigger angle of incidence, the blue refracted ray in the air bends further and further from the normal, until at one special angle it skims exactly along the boundary at 90 degrees. That angle of incidence is the critical angle c, and you find it from sine of c equals 1 divided by the refractive index n.",
      },
      {
        kind: "concept",
        heading: "Total internal reflection",
        figure: "fig-14-13-total-internal-reflection",
        body: "If the angle of incidence is *greater* than the critical angle, no light escapes: it is all *reflected* back inside. This is *total internal reflection*. It needs *two conditions*: the light must go from a denser to a less dense medium, AND the angle of incidence must be greater than the critical angle.",
        say: "Once the angle of incidence passes the critical angle, none of the light can leave. The blue ray hits the top surface of the pale grey block and, instead of refracting out, it is reflected straight back down into the glass, obeying the law of reflection about the grey dashed normal. We call this total internal reflection. Remember it needs 2 things at once: the light must be heading from the denser medium into the less dense one, and the angle of incidence must be bigger than the critical angle.",
      },
      {
        kind: "concept",
        heading: "Optical fibres",
        figure: "fig-14-14-optical-fibre",
        body: "An *optical fibre* has a *core* of high refractive index inside a *cladding* of lower index, so light striking the wall always exceeds the critical angle and is repeatedly totally internally reflected along the fibre. Fibres carry signals faster, with less loss, and are lighter than copper; they also let doctors see inside the body with an endoscope.",
        say: "A blue ray of light enters the end of a long thin fibre. The core is drawn in pale grey with a slightly darker pale grey cladding around it. Because the core has a higher refractive index than the cladding, every time the light meets the wall it hits beyond the critical angle, so it totally internally reflects, zig-zagging thousands of times all the way along without leaking out. That is why optical fibres send signals faster and with less loss than copper wires, and why a bundle of them in an endoscope can carry a picture from inside a patient's body.",
      },
      {
        kind: "concept",
        heading: "Reflecting prisms",
        figure: "fig-14-21-prism-tir",
        body: "A right-angled glass *prism* can bend light by total internal reflection. Light hitting the sloping face at 45 degrees is beyond the critical angle of glass, so it reflects cleanly through 90 degrees. Such prisms steer light in *periscopes* and *binoculars*, and a rain sensor uses the loss of total internal reflection when water sits on the glass.",
        say: "Here a blue ray enters a pale grey triangular prism and strikes the long sloping face from the inside at 45 degrees. Since the critical angle of glass is only about 41 degrees, 45 degrees is beyond it, so the ray is totally internally reflected and turns through 90 degrees before leaving. Prisms like this fold the light path in periscopes and binoculars, giving a brighter image than a silvered mirror. A car rain sensor works the other way round: when raindrops touch the glass, the total internal reflection breaks down and the light leaks out.",
      },
      {
        kind: "choice",
        question: "The refractive index of a glass block is n = 1.52. Find its critical angle c.",
        options: ["49 degrees", "66 degrees", "41 degrees", "33 degrees"],
        correct: 2,
        ask: "Use sine of c equals 1 divided by n. Work out 1 divided by 1.52, then take the inverse sine.",
        hints: [
          "Start from sin c = 1 / n with n = 1.52.",
          "1 divided by 1.52 is about 0.66, and the inverse sine of that is 41 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.52}" },
          { label: "Answer", latex: "c = 41^{\\circ}" },
        ],
        explain: "The critical angle is 41 degrees, because 1 divided by 1.52 is about 0.66, and the inverse sine of 0.66 is 41 degrees.",
      },
      {
        kind: "choice",
        question: "Perspex has a refractive index n = 1.49. What is its critical angle c?",
        options: ["48 degrees", "42 degrees", "58 degrees", "24 degrees"],
        correct: 1,
        ask: "Use sine of c equals 1 divided by n with n equal to 1.49, then take the inverse sine.",
        hints: [
          "Substitute n = 1.49 into sin c = 1 / n.",
          "1 divided by 1.49 is about 0.67, and its inverse sine is 42 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.49}" },
          { label: "Answer", latex: "c = 42^{\\circ}" },
        ],
        explain: "The critical angle is 42 degrees, because 1 divided by 1.49 is about 0.67, and the inverse sine of 0.67 is 42 degrees.",
      },
      {
        kind: "choice",
        question: "Diamond has a very high refractive index, n = 2.42. Find its critical angle c.",
        options: ["41 degrees", "49 degrees", "42 degrees", "24 degrees"],
        correct: 3,
        ask: "Use sine of c equals 1 divided by n. A larger n gives a smaller critical angle. Work out 1 divided by 2.42.",
        hints: [
          "Put n = 2.42 into sin c = 1 / n.",
          "1 divided by 2.42 is about 0.41, and the inverse sine of that is 24 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{2.42}" },
          { label: "Answer", latex: "c = 24^{\\circ}" },
        ],
        explain: "The critical angle is 24 degrees, because 1 divided by 2.42 is about 0.41, and the inverse sine of 0.41 is 24 degrees. The small critical angle is why a diamond traps and sparkles with so much light.",
      },
      {
        kind: "choice",
        question: "Inside a perspex block the critical angle is 42 degrees. A ray inside the perspex hits the surface at 45 degrees. What happens?",
        figure: "fig-14-13-total-internal-reflection",
        options: [
          "Total internal reflection, because 45 degrees is greater than 42 degrees and the light goes from denser to less dense",
          "The ray refracts out into the air, because 45 degrees is less than the critical angle",
          "Nothing special, because total internal reflection only happens going from less dense to denser",
          "The ray splits equally, half refracting and half reflecting",
        ],
        correct: 0,
        ask: "Check the 2 conditions for total internal reflection: is the light going from denser to less dense, and is 45 degrees bigger than the critical angle of 42 degrees?",
        hints: [
          "Perspex is denser than air, so the light is heading from denser to less dense.",
          "45 degrees is greater than the critical angle of 42 degrees, so both conditions are met and total internal reflection occurs.",
        ],
        explain: "Total internal reflection occurs, because both conditions hold: the light travels from the denser perspex to less dense air, and 45 degrees is greater than the critical angle of 42 degrees.",
      },
      {
        kind: "insight",
        body: "*Total internal reflection* traps light with no mirror at all, but only when light goes from *denser to less dense* AND the angle beats the *critical angle*. A high refractive index gives a *small* critical angle, so more rays stay trapped.",
        say: "Here is the idea to carry away. Total internal reflection lets us bounce light perfectly without any silvered mirror, which is how optical fibres and prisms work. But it only happens when both conditions are met: the light must be leaving a denser medium for a less dense one, and its angle of incidence must be bigger than the critical angle. And notice the pattern, a higher refractive index means a smaller critical angle, so denser materials like diamond trap light very easily.",
      },
    ],
  },
];
