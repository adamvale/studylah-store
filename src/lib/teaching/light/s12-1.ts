import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, section 1. Grounded in KB Chapter 14 (Light), sections 14.1 and 14.2.
// Figure colours follow the T12 colour key: light rays (incident, reflected, refracted) = blue lines;
// the normal = a grey dashed line at 90 degrees to the surface; angles i and r marked at the normal;
// mirrors, glass and other surfaces = pale grey.

export const BOXES: Subconcept[] = [
  {
    id: "t12.1",
    code: "T12.1",
    title: "Properties of light and reflection",
    blurb: "What light is, how it travels, and the rules it obeys when it bounces off a surface",
    steps: [
      {
        kind: "concept",
        heading: "What light is and how it travels",
        figure: "fig-14-01-reflect-refract",
        body: "Light is a form of *electromagnetic* energy that your eye detects. It travels in *straight lines* called rays and carries energy from place to place. When it meets a surface it is *reflected* by opaque objects or *refracted* into transparent ones.",
        formula: {
          latex: "c = 3.0 \\times 10^{8}\\ \\text{m/s}",
          where: [
            { sym: "c", meaning: "speed of light in a vacuum", unit: "m/s" },
          ],
        },
        say: "Light is electromagnetic energy that our eyes pick up, and in a vacuum it races along at 3.0 times 10 to the power 8 metres per second. It always travels in straight lines, which we draw as rays. In this picture a blue ray comes in and hits a pale grey surface. Part of it bounces off the shiny opaque surface as a blue reflected ray, and where the surface is transparent a blue ray passes into it and bends, which we call refraction. So a surface either reflects light or lets it refract inside.",
      },
      {
        kind: "concept",
        heading: "Regular and diffuse reflection",
        figure: "fig-14-02-regular-diffuse",
        body: "*Regular* reflection happens on a smooth surface, where parallel rays stay parallel and give a clear image. *Diffuse* reflection happens on a rough surface, where parallel rays *scatter* in many directions, so no clear image forms.",
        say: "This figure has 2 side panels. On the left, several blue rays arrive parallel to each other and strike a smooth pale grey surface, and they leave still parallel. That neat, mirror-like bounce is regular reflection. On the right, the same parallel blue rays hit a rough, bumpy pale grey surface, and they scatter off at all sorts of angles. That messy bounce is diffuse reflection, and it is why a sheet of paper does not act like a mirror.",
      },
      {
        kind: "concept",
        heading: "The language and laws of reflection",
        figure: "fig-14-03-laws-reflection",
        body: "The ray arriving is the *incident ray* and the ray leaving is the *reflected ray*. The line drawn at 90 degrees to the surface is the *normal*. Two laws hold: the angle of incidence i equals the angle of reflection r, and the incident ray, reflected ray and normal all lie in one plane.",
        say: "In this diagram a blue ray comes down and hits a pale grey surface; that incoming ray is the incident ray. It bounces off as the blue reflected ray. Standing straight up from the surface at 90 degrees is a grey dashed line called the normal. The angle between the incident ray and the normal is i, and the angle between the reflected ray and the normal is r. The 2 laws of reflection say that i equals r, so the angles are always equal, and that the incident ray, the reflected ray and the normal all sit in the same flat plane.",
      },
      {
        kind: "concept",
        heading: "Measure angles from the normal",
        figure: "fig-14-04-reflection-angle-method",
        body: "In physics, angles of *incidence* and *reflection* are always measured from the *normal*, never from the surface. If a ray makes an angle with the surface, subtract it from 90 degrees to get the angle from the normal.",
        say: "Here a blue ray strikes a pale grey surface, but this time the angle is drawn to the surface itself, at 55 degrees. The grey dashed normal stands at 90 degrees to the surface. Because we always measure from the normal, the angle of incidence is 90 minus 55, which is 35 degrees. The reflected blue ray leaves at the same 35 degrees on the other side of the normal. Always start counting from the dashed normal, not from the surface.",
      },
      {
        kind: "choice",
        question: "A ray hits a plane mirror with an angle of incidence of 30 degrees, measured from the normal. What is the angle of reflection?",
        options: ["15 degrees", "60 degrees", "30 degrees", "90 degrees"],
        correct: 2,
        ask: "Recall the first law of reflection: the angle of reflection equals the angle of incidence.",
        hints: [
          "The angle of incidence and the angle of reflection are always equal.",
          "If i is 30 degrees, then r is also 30 degrees.",
        ],
        explain: "The angle of reflection is 30 degrees, because the first law of reflection says the angle of reflection equals the angle of incidence, and both are measured from the normal.",
      },
      {
        kind: "choice",
        question: "Parallel rays of light strike a smooth, polished metal sheet. What happens?",
        options: [
          "Diffuse reflection; the rays scatter in many directions",
          "Regular reflection; the parallel rays stay parallel",
          "Diffuse reflection; the rays stay parallel",
          "No reflection; the rays pass straight through the metal",
        ],
        correct: 1,
        ask: "Think about whether the surface is smooth or rough, and what that does to parallel rays.",
        hints: [
          "A smooth surface gives regular reflection, not diffuse.",
          "In regular reflection off a smooth surface, parallel rays stay parallel.",
        ],
        explain: "A smooth, polished surface gives regular reflection, so the parallel rays stay parallel and a clear image can form. Scattering only happens on a rough surface, which gives diffuse reflection.",
      },
      {
        kind: "classify",
        prompt: "Sort each observation by the type of reflection it describes.",
        bins: ["Regular reflection (smooth surface)", "Diffuse reflection (rough surface)"],
        items: [
          { text: "Parallel rays stay parallel after bouncing off", bin: 0 },
          { text: "A polished mirror gives a clear image", bin: 0 },
          { text: "Rays scatter in many directions", bin: 1 },
          { text: "Light bounces off a sheet of paper with no image", bin: 1 },
        ],
        ask: "A smooth surface keeps parallel rays parallel and forms an image; a rough surface scatters the rays. Tap each observation and drop it in its bin.",
        hints: [
          "Staying parallel and forming a clear image are signs of regular reflection off a smooth surface.",
          "Scattering rays and no clear image are signs of diffuse reflection off a rough surface.",
        ],
        explain: "Regular reflection keeps parallel rays parallel and forms a clear image on a smooth surface, while diffuse reflection scatters the rays off a rough surface so no image forms.",
      },
      {
        kind: "choice",
        question: "A ray of light strikes a mirror at 55 degrees to the mirror surface. What is the angle of incidence, measured from the normal?",
        options: ["55 degrees", "145 degrees", "90 degrees", "35 degrees"],
        correct: 3,
        ask: "The angle of incidence is measured from the normal, not the surface. Subtract the surface angle from 90.",
        hints: [
          "The normal is at 90 degrees to the surface, so add or subtract to switch between them.",
          "90 - 55 is 35, so the angle from the normal is 35 degrees.",
        ],
        working: [
          { label: "Formula", latex: "i = 90^\\circ - \\theta_{\\text{surface}}" },
          { label: "Substitute", latex: "i = 90^\\circ - 55^\\circ" },
          { label: "Answer", latex: "i = 35^\\circ" },
        ],
        explain: "The angle of incidence is 35 degrees, because angles are measured from the normal, and 90 - 55 is 35 degrees.",
      },
      {
        kind: "insight",
        body: "Every reflection question starts at the *normal*: measure both angles from that grey dashed line, and the angle of *incidence* equals the angle of *reflection*.",
        say: "Here is the idea to keep. In reflection, always measure from the normal, that grey dashed line at 90 degrees to the surface, never from the surface itself. Once you do that, the rule is simple: the angle of incidence equals the angle of reflection. Get those 2 habits right and reflection problems fall into place.",
      },
    ],
  },
];
