import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, section 5. Grounded in KB Chapter 14 (Light) section 14.8 part 1.
// CONCEPTUAL section (no calculation). Figure colours follow the light colour key:
// light rays = blue lines; the lens body = pale grey; the principal axis = grey line;
// the principal focus F and optical centre C = grey labels.

export const BOXES: Subconcept[] = [
  {
    id: "t12.5",
    code: "T12.5",
    title: "Lenses: converging and diverging",
    blurb: "How the two shapes of lens bend parallel light, and the words we use to describe them",
    steps: [
      {
        kind: "concept",
        heading: "A lens bends light to form an image",
        body: "A *lens* is a shaped piece of glass or plastic that *refracts* light as it passes through, changing the direction of each ray. By bending the rays in a controlled way, a lens can gather light to *form an image*.",
        say: "A lens is a curved piece of glass or clear plastic. As light passes through it, the light refracts, which just means each ray bends. By bending every ray in a careful way, a lens can gather the light and form an image, the way a camera or your own eye does.",
      },
      {
        kind: "concept",
        heading: "Converging and diverging lenses",
        figure: "fig-14-15-converging-diverging",
        body: "A *converging (convex)* lens is *thicker in the middle* and brings parallel rays together to a point. A *diverging (concave)* lens is *thinner in the middle* and spreads parallel rays apart.",
        say: "This figure has 2 side panels, both drawn with the lens body in pale grey and the light rays in blue. On the left is a converging, or convex, lens, fatter in the middle than at its edges. Parallel blue rays go in and are squeezed together to a single point marked F. On the right is a diverging, or concave, lens, thinner in the middle. The same parallel blue rays go in and fan outwards, as if they had come from a point F behind the lens.",
      },
      {
        kind: "concept",
        heading: "The words for a lens",
        figure: "fig-14-16-lens-focal-point",
        body: "The *principal axis* is the grey line straight through the middle of the lens. The optical *centre* C sits at the middle, and a ray through it is undeviated. Parallel rays meet at the *principal focus* F, and the *focal length* f is the distance from C to F.",
        say: "This figure labels a converging lens drawn in pale grey. A grey line runs straight through its middle, and that is the principal axis. The very centre of the lens is the optical centre, marked C, and any blue ray passing through C carries straight on without bending, so we say it is undeviated. The blue parallel rays are brought to the point marked F, the principal focus. The distance from C out to F, along the axis, is the focal length f. A fatter lens has a shorter focal length because it bends the light more.",
      },
      {
        kind: "choice",
        question: "Which type of lens brings parallel rays of light together to a single focus?",
        figure: "fig-14-15-converging-diverging",
        options: [
          "A diverging (concave) lens",
          "A converging (convex) lens",
          "Neither lens changes the rays",
          "Both lenses spread the rays apart",
        ],
        correct: 1,
        ask: "Look at which panel of the figure squeezes the blue rays down to a point rather than fanning them out.",
        hints: [
          "The lens that gathers rays is thicker in the middle.",
          "A convex lens converges the light; a concave lens diverges it.",
        ],
        explain: "A converging, or convex, lens brings parallel rays together to the principal focus F. The diverging lens spreads them apart instead.",
      },
      {
        kind: "match",
        prompt: "Match each lens term to its meaning.",
        pairs: [
          { left: "Principal axis", right: "The line straight through the middle of the lens, at 90 degrees to it" },
          { left: "Optical centre C", right: "The centre of the lens; a ray through it passes on undeviated" },
          { left: "Principal focus F", right: "The point where parallel rays meet after a converging lens" },
          { left: "Focal length f", right: "The distance from C to F" },
        ],
        ask: "Start with the one you are surest of. The axis is a line, the centre and focus are points, and the focal length is a distance between 2 of them.",
        hints: [
          "The principal focus is where the rays are actually brought together.",
          "Focal length runs from the optical centre C out to the principal focus F.",
        ],
        explain: "The principal axis is the central line, the optical centre C is the middle of the lens where rays pass undeviated, the principal focus F is where parallel rays meet, and the focal length f is the distance from C to F.",
      },
      {
        kind: "classify",
        prompt: "Sort each description into the type of lens it fits.",
        bins: ["Converging (convex)", "Diverging (concave)"],
        items: [
          { text: "Thicker in the middle than at the edges", bin: 0 },
          { text: "Brings parallel rays to a real focus", bin: 0 },
          { text: "Thinner in the middle than at the edges", bin: 1 },
          { text: "Spreads parallel rays out from a virtual focus", bin: 1 },
        ],
        ask: "A converging lens gathers light, a diverging lens spreads it. Match each phrase to the one it describes, then drop it in that bin.",
        hints: [
          "Fatter in the middle means it converges the rays.",
          "Thinner in the middle means it diverges the rays outwards.",
        ],
        explain: "A converging (convex) lens is thicker in the middle and brings rays to a real focus. A diverging (concave) lens is thinner in the middle and makes the rays spread out from a virtual focus.",
      },
      {
        kind: "choice",
        question: "Parallel rays of light travel along the axis and strike a convex lens. What does the lens do to them?",
        figure: "fig-14-16-lens-focal-point",
        options: [
          "Lets them pass straight through unchanged",
          "Reflects them straight back the way they came",
          "Brings them together at the principal focus F",
          "Spreads them apart as if from a point behind the lens",
        ],
        correct: 2,
        ask: "A convex lens is a converging lens. Think about where the blue parallel rays end up in the focal point figure.",
        hints: [
          "A convex lens gathers parallel rays rather than spreading them.",
          "They all cross at one point on the axis, the principal focus.",
        ],
        explain: "A convex lens converges the parallel rays, bringing them together at the principal focus F. Spreading the rays apart would be the job of a concave lens.",
      },
      {
        kind: "insight",
        body: "Both lenses refract light, but the shape decides the effect: a *convex* lens *converges* rays to a focus, while a *concave* lens *diverges* them. The converging lens is the one that can focus a camera and correct long-sightedness.",
        say: "Here is the idea to keep. Both lenses simply refract light, but their shape sets what happens. A convex lens, fat in the middle, converges rays to a focus. A concave lens, thin in the middle, diverges them. Because it gathers light, the converging lens is the useful one for focusing a camera and for correcting long-sightedness, where the eye cannot bring near objects to a focus on its own.",
      },
    ],
  },
];
