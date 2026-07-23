import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), section 4. Grounded in Practical Chapter 05 - Waves
// (critical angle and total internal reflection). Figure colours: light rays and the ray inside
// the glass = blue, the glass block = pale blue, the normal (dashed) and guide lines = grey,
// the angle arcs (i, r, c) and labels = amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.4",
    code: "TP5.4",
    title: "Critical angle and total internal reflection",
    blurb: "When light trapped in glass bounces back instead of escaping",
    steps: [
      {
        kind: "concept",
        heading: "Bigger incidence, bigger refraction",
        body: "When light travels in a *denser* medium and meets the boundary with a less dense one, some of it refracts out. As the *angle of incidence* grows, the *angle of refraction* grows too, and it grows faster because the ray bends *away* from the normal.",
        say: "Picture light inside a glass block trying to escape into the air. Some of it bends out at the surface. As you make the angle of incidence inside the glass bigger, the angle of refraction in the air gets bigger as well, and it opens out even faster because the ray bends away from the normal on the way out.",
      },
      {
        kind: "concept",
        heading: "The critical angle",
        figure: "fig-pr5-06-critical-angle",
        body: "Keep increasing the angle and you reach the *critical angle* c. Here the *refracted ray* runs *along the boundary*, so its refraction angle is 90 degrees. The critical angle depends only on the *refractive index*.",
        formula: {
          latex: "\\sin c = \\dfrac{1}{n}",
          where: [
            { sym: "c", meaning: "critical angle", unit: "degrees" },
            { sym: "n", meaning: "refractive index of the denser medium" },
          ],
        },
        say: "In the picture a blue ray travels up through the pale blue glass and meets the top surface. The grey dashed line is the normal. At this special angle, marked c in amber, the refracted ray no longer escapes upward. Instead it skims straight along the boundary, so its refraction angle is a full 90 degrees. This angle is called the critical angle. To find it, take 1 divided by the refractive index and that gives the sine of c.",
      },
      {
        kind: "concept",
        heading: "Total internal reflection",
        body: "If the angle of incidence goes *beyond* the critical angle, no light escapes at all. Every bit of it is *reflected* back into the denser medium. This is *total internal reflection*, and the surface acts like a perfect mirror.",
        say: "Push the angle just past the critical angle and something dramatic happens. No light leaks out into the air any more. All of it bounces back down into the glass, obeying the ordinary law of reflection. We call this total internal reflection, because the light is reflected completely and stays inside the denser medium.",
      },
      {
        kind: "insight",
        body: "Total internal reflection needs *2* conditions at once: the ray must go from a *denser* medium to a *less dense* one, AND the angle of incidence must be *greater than* the critical angle.",
        say: "Here is the key thing to remember. Total internal reflection only happens when both conditions are met together. First, the light must be trying to go from a denser medium into a less dense one, such as glass into air. Second, the angle of incidence must be bigger than the critical angle. Miss either condition and the light simply refracts out as normal.",
      },
      {
        kind: "choice",
        question: "A glass block has refractive index n = 1.5. Find its critical angle c.",
        figure: "fig-pr5-06-critical-angle",
        options: ["28 degrees", "34 degrees", "42 degrees", "49 degrees"],
        correct: 2,
        ask: "The critical angle comes from sin c = 1 divided by n. Work out 1 divided by 1.5, then take the inverse sine.",
        hints: [
          "First find sin c = 1 divided by 1.5, which is 0.667.",
          "The angle whose sine is 0.667 is about 42 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.5} = 0.667" },
          { label: "Answer", latex: "c = 42\\ \\text{degrees}" },
        ],
        explain: "The critical angle is 42 degrees, because 1 divided by 1.5 is 0.667, and the angle whose sine is 0.667 is about 42 degrees.",
      },
      {
        kind: "choice",
        question: "Water has refractive index n = 1.33. Find the critical angle c for the water-to-air boundary.",
        options: ["49 degrees", "42 degrees", "38 degrees", "61 degrees"],
        correct: 0,
        ask: "Use sin c = 1 divided by n with n equal to 1.33, then take the inverse sine.",
        hints: [
          "First find sin c = 1 divided by 1.33, which is 0.752.",
          "The angle whose sine is 0.752 is about 49 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.33} = 0.752" },
          { label: "Answer", latex: "c = 49\\ \\text{degrees}" },
        ],
        explain: "The critical angle for water is 49 degrees, because 1 divided by 1.33 is 0.752, and the angle whose sine is 0.752 is about 49 degrees.",
      },
      {
        kind: "choice",
        question: "Which pair of conditions is needed for total internal reflection to occur?",
        options: [
          "Light goes from less dense to denser, and the angle is less than c",
          "Light goes from denser to less dense, and the angle is less than c",
          "Light goes from less dense to denser, and the angle is greater than c",
          "Light goes from denser to less dense, and the angle is greater than c",
        ],
        correct: 3,
        ask: "Total internal reflection traps light inside the denser medium. Think about which way the light must be travelling and how the angle compares with the critical angle.",
        hints: [
          "The light must be leaving a denser medium for a less dense one, such as glass into air.",
          "On top of that, the angle of incidence must be greater than the critical angle.",
        ],
        explain: "Total internal reflection needs both conditions: the ray goes from a denser medium to a less dense one, and the angle of incidence is greater than the critical angle.",
      },
      {
        kind: "choice",
        question: "At exactly the critical angle, what is the angle of refraction of the ray leaving the glass?",
        options: ["0 degrees", "90 degrees", "42 degrees", "45 degrees"],
        correct: 1,
        ask: "At the critical angle the refracted ray no longer rises off the surface. Picture where it goes.",
        hints: [
          "The refracted ray runs along the boundary itself.",
          "A ray lying flat along the surface makes a 90 degree angle with the normal.",
        ],
        explain: "At the critical angle the refracted ray runs along the boundary, so its angle of refraction is 90 degrees measured from the normal.",
      },
      {
        kind: "classify",
        prompt: "A ray inside glass (critical angle c = 42 degrees) meets the top surface. Sort each case by what happens to the light.",
        bins: ["Ordinary refraction (light escapes)", "Total internal reflection (light stays in)"],
        items: [
          { text: "Angle of incidence 30 degrees, glass to air", bin: 0 },
          { text: "Angle of incidence 40 degrees, glass to air", bin: 0 },
          { text: "Angle of incidence 55 degrees, glass to air", bin: 1 },
          { text: "Angle of incidence 60 degrees, glass to air", bin: 1 },
        ],
        ask: "Compare each angle of incidence with the critical angle of 42 degrees. Below it the light refracts out; above it the light is totally internally reflected. Tap each case and drop it in a bin.",
        hints: [
          "Angles below 42 degrees are less than the critical angle, so the light refracts and escapes.",
          "Angles above 42 degrees are greater than the critical angle, so all the light reflects back inside.",
        ],
        explain: "At 30 and 40 degrees the incidence angle is below the critical angle of 42 degrees, so the light refracts out. At 55 and 60 degrees it is above 42 degrees, so total internal reflection keeps all the light inside the glass.",
      },
    ],
  },
];
