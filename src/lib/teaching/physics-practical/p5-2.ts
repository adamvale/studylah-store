import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves (Practical Chapter 5), section 2. Grounded in KB Chapter 05 (Waves), law of reflection.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.2",
    code: "TP5.2",
    title: "The law of reflection",
    blurb: "How light reflects off a plane mirror, and how to fix a ray with pins",
    steps: [
      {
        kind: "concept",
        heading: "The law of reflection",
        figure: "fig-pr5-03-reflection-pins",
        body: "When light reflects off a plane mirror it obeys the *law of reflection*: the *incident ray*, the *reflected ray* and the *normal* all lie in one flat plane.",
        say: "In the picture a blue ray comes in from the left, strikes the mirror at the point O, and a second blue ray leaves to the right. The dashed grey line standing straight up at O is the normal. The law of reflection says these 3, the incoming ray, the outgoing ray and the normal, all sit in one flat plane.",
      },
      {
        kind: "concept",
        heading: "Both angles from the normal",
        figure: "fig-pr5-03-reflection-pins",
        body: "The *angle of incidence* equals the *angle of reflection*, and both are measured from the *normal*, never from the mirror surface. In symbols, *theta_i = theta_r*.",
        say: "Look at the 2 amber arcs at O. The first is the angle of incidence, measured between the incoming ray and the dashed normal. The second is the angle of reflection, measured between the normal and the outgoing ray. The law says these 2 angles are always equal, and both are counted from the normal, not from the mirror. So theta i equals theta r.",
      },
      {
        kind: "concept",
        heading: "Marking a ray with pins",
        figure: "fig-pr5-03-reflection-pins",
        body: "To fix a ray's path you place 2 *optical pins* upright and *sight them in line* by eye. The pins must be at least *5.0 cm apart* so the direction is well defined.",
        say: "The 4 upright pins in the figure, labelled P1 to P4, mark the rays. You line up 2 pins by eye until the nearer one hides the farther one, and that line of sight is the ray. Keep the 2 pins at least 5.0 centimetres apart. If they sit too close together, a tiny wobble swings the line a lot, so the direction is much less certain.",
      },
      {
        kind: "concept",
        heading: "A set square for a clean edge",
        body: "When you finally draw the ray, run your pencil along a *set square* rather than a loose ruler. Its firm *straight edge* gives a cleaner, straighter line through the pin marks.",
        say: "Once the pin holes are marked on the paper, draw the ray by sliding your pencil along a set square. Its rigid straight edge holds the line steady and gives a cleaner, straighter ray than a wobbling ruler, so the angle you then measure is more reliable.",
      },
      {
        kind: "choice",
        question: "Which statement is the law of reflection?",
        figure: "fig-pr5-03-reflection-pins",
        options: [
          "The reflected ray bends towards the mirror surface",
          "The angle of incidence is always larger than the angle of reflection",
          "The angle of incidence equals the angle of reflection, both measured from the normal",
          "The incident ray and reflected ray lie on the same side of the normal",
        ],
        correct: 2,
        ask: "Think about the 2 amber arcs at O and what line each one is measured from.",
        hints: [
          "Both angles are taken from the dashed normal, not from the mirror surface.",
          "The law makes the 2 angles equal to each other.",
        ],
        explain: "The angle of incidence equals the angle of reflection, and both are measured from the normal. The rays are equally inclined to the normal but on opposite sides of it.",
      },
      {
        kind: "choice",
        question: "A ray hits a plane mirror at an angle of incidence of 40 degrees. What is the angle of reflection?",
        figure: "fig-pr5-03-reflection-pins",
        options: ["50 degrees", "40 degrees", "20 degrees", "80 degrees"],
        correct: 1,
        ask: "The law of reflection links the angle of reflection directly to the angle of incidence.",
        hints: [
          "Angle of incidence equals angle of reflection.",
          "If the incidence angle is 40 degrees, the reflection angle matches it.",
        ],
        explain: "The angle of reflection is 40 degrees, because the law of reflection makes it equal to the angle of incidence of 40 degrees.",
      },
      {
        kind: "choice",
        question: "Why are the 2 optical pins placed at least 5.0 cm apart?",
        options: [
          "So they do not fall over",
          "So the mirror does not crack",
          "So the pins cast no shadow",
          "So the direction of the ray is well defined",
        ],
        correct: 3,
        ask: "Think about how a small sideways error in one pin affects the line through both pins when they are close together versus far apart.",
        hints: [
          "A line drawn through 2 far-apart points is less sensitive to a small error in either point.",
          "Pins too close together let the line swing a lot for a tiny wobble.",
        ],
        explain: "A wider spacing makes the direction of the ray well defined, because a small sideways error in a pin twists the line far less when the 2 pins are far apart.",
      },
      {
        kind: "choice",
        question: "In the pin method, how do you line up 2 optical pins along a ray?",
        options: [
          "Sight along them by eye until the near pin hides the far pin",
          "Measure the gap between them with a ruler only",
          "Shine a torch between the 2 pins",
          "Place both pins touching the mirror",
        ],
        correct: 0,
        ask: "The method uses your line of sight along the pins, not a measurement.",
        hints: [
          "You look along the pins so that one lines up exactly behind the other.",
          "When the near pin blocks your view of the far pin, your eye is on the ray.",
        ],
        explain: "You sight along the pins by eye until the nearer pin hides the farther one. That line of sight is the ray direction, which you then mark and draw.",
      },
      {
        kind: "order",
        prompt: "Put the steps of the plane-mirror pin method in order.",
        items: [
          "Stand a plane mirror on a drawn line and mark the point O where the ray meets it",
          "Draw the normal at 90 degrees to the mirror at O",
          "Stick 2 pins in the incident ray at least 5.0 cm apart and 2 more in the reflected ray",
          "Remove the pins and draw both rays through the marks using a set square",
          "Measure the angle of incidence and the angle of reflection from the normal",
        ],
        ask: "You have to set up the mirror and normal before any pins go in, and you can only measure the angles once the rays are drawn.",
        hints: [
          "The normal is drawn before the pins are placed.",
          "The pins are removed and the rays drawn before you measure any angle.",
        ],
        explain: "Set up the mirror and mark O, draw the normal, place the sighting pins at least 5.0 cm apart, draw the rays with a set square, then measure the 2 angles from the normal.",
      },
      {
        kind: "spoterror",
        prompt: "One line of this method is wrong. Find it.",
        lines: [
          "Aim a ray at the plane mirror and mark the point O where it meets the mirror.",
          "Draw the normal, a line at 90 degrees to the mirror surface at O.",
          "The angle of incidence is measured from the mirror surface.",
          "The angle of reflection is measured from the normal to the reflected ray.",
          "The law of reflection gives angle of incidence = angle of reflection.",
        ],
        errorLine: 2,
        ask: "Check what line each angle is measured from. One of them names the wrong reference line.",
        hints: [
          "Both angles in reflection use the same reference line.",
          "The angle of incidence is taken from the normal, not from the mirror surface.",
        ],
        explain: "The angle of incidence is measured from the normal, not from the mirror surface. Measuring from the surface would give the complementary angle, so the line is wrong.",
      },
      {
        kind: "insight",
        body: "2 habits keep reflection results reliable: always measure angles from the *normal*, and set your sighting *pins* far enough apart that the ray direction is *well defined*.",
        say: "Hold on to 2 habits. First, always measure the angle of incidence and the angle of reflection from the normal, never from the mirror surface. Second, keep your 2 sighting pins well apart, at least 5.0 centimetres, so the ray direction is clear. Get those right and your angle of incidence will match your angle of reflection.",
      },
    ],
  },
];
