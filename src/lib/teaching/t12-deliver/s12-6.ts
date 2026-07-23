import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, section 6. Grounded in KB Chapter 14 (Light) section 14.8 part 2.
// Conceptual: ray-diagram reasoning for a converging lens, no lens-formula arithmetic.
// Figure colours follow the topic key: light rays = blue, lens body = pale grey, object = white
// arrow, image = white arrow (dashed when virtual), F, 2F, C and the principal axis = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t12.6",
    code: "T12.6",
    title: "Lens images and ray diagrams",
    blurb: "Locating an image with 2 rays, and reading off its nature from the object's position",
    steps: [
      {
        kind: "concept",
        heading: "2 rays find the image",
        figure: "fig-14-17-lens-construction",
        body: "To locate an image you draw any 2 of the 3 *standard rays* from the top of the object; the image forms where the drawn rays cross. The rays are: parallel to the axis then bent through the far *F*, straight through the centre *C*, or through the near F then out parallel.",
        say: "In this diagram a white arrow object stands on the left of the pale grey lens. 2 blue rays leave the top of the object. One travels parallel to the grey principal axis and then bends through the principal focus F on the far side. The other goes straight through the centre C of the lens without bending. Where those 2 blue rays cross, the top of the image sits, drawn as a white arrow pointing downwards. You only ever need 2 of the 3 standard rays to fix the image.",
      },
      {
        kind: "concept",
        heading: "Where the object sits decides everything",
        figure: "fig-14-18-lens-real-image",
        body: "For an object *beyond 2F* the image is *real*, *inverted* and diminished, the way a camera works. Bring the object to 2F and the image is real, inverted and the same size; between F and 2F it is real, inverted and enlarged, as in a *projector*.",
        say: "Here the white arrow object stands beyond the point 2F, marked in grey. The blue rays cross on the far side of the pale grey lens and form a white arrow image that points downwards, so it is inverted, and it is smaller than the object, so it is diminished. Because the rays really meet, the image is real and could land on a screen. This is exactly how a camera makes a small sharp picture of a distant scene. Slide the object inwards toward F and the real inverted image grows larger.",
      },
      {
        kind: "concept",
        heading: "Inside F: the magnifying glass",
        figure: "fig-14-19-lens-virtual-image",
        body: "Move the object between F and the lens and the rays leaving the lens spread apart; they never meet in front, so you trace them back to a *virtual*, *upright*, *enlarged* image on the same side as the object.",
        say: "In this picture the white arrow object sits close in, between the principal focus F and the pale grey lens. The 2 blue rays leave the lens spreading apart and never cross in front of it. Tracing them backwards as dashed blue lines, they meet behind the object, giving a white dashed arrow image that stands upright and is much bigger than the object. A dashed arrow means the image is virtual, so it cannot be caught on a screen. That is a magnifying glass. Remember the rule: a real image is inverted, a virtual image is upright.",
      },
      {
        kind: "match",
        prompt: "Match each object position to the nature of the image a converging lens forms.",
        pairs: [
          { left: "Object beyond 2F", right: "Real, inverted, diminished" },
          { left: "Object at 2F", right: "Real, inverted, same size" },
          { left: "Object between F and 2F", right: "Real, inverted, enlarged" },
          { left: "Object between F and the lens", right: "Virtual, upright, enlarged" },
        ],
        ask: "Work outwards from the lens. Anything outside F gives a real inverted image; only an object inside F gives a virtual upright one. The size grows as the object nears F.",
        hints: [
          "Beyond 2F the image is smaller than the object; between F and 2F it is bigger.",
          "Only the object inside F, between F and the lens, gives a virtual upright enlarged image.",
        ],
        explain: "Outside F the image is always real and inverted: diminished beyond 2F, same size at 2F, enlarged between F and 2F. Inside F the image is virtual, upright and enlarged.",
      },
      {
        kind: "choice",
        question: "You hold a converging lens close to small print so the object lies between F and the lens. What is the image like?",
        figure: "fig-14-19-lens-virtual-image",
        options: [
          "Real, inverted and diminished",
          "Real, inverted and enlarged",
          "Virtual, upright and enlarged",
          "Virtual, inverted and diminished",
        ],
        correct: 2,
        ask: "The object is inside the focal point. Rays leaving the lens spread out, so ask whether they can meet in front or must be traced back.",
        hints: [
          "Rays that spread apart never cross in front, so the image is virtual, and a virtual image is upright.",
          "A magnifying glass makes the print look bigger, so the image is enlarged.",
        ],
        explain: "With the object between F and the lens the image is virtual, upright and enlarged, which is why the lens works as a magnifying glass. A virtual image is always upright, never inverted.",
      },
      {
        kind: "classify",
        prompt: "Sort each image a converging lens can form by whether it is real or virtual.",
        bins: ["Real and inverted", "Virtual and upright"],
        items: [
          { text: "Object beyond 2F (camera)", bin: 0 },
          { text: "Object at 2F (photocopier)", bin: 0 },
          { text: "Object between F and 2F (projector)", bin: 0 },
          { text: "Object between F and the lens (magnifying glass)", bin: 1 },
        ],
        ask: "Use the rule that real images are inverted and virtual images are upright. Only the object inside F gives a virtual image; every position outside F gives a real one.",
        hints: [
          "The camera, photocopier and projector all form real inverted images on the far side of the lens.",
          "Only the magnifying glass, with the object inside F, gives a virtual upright image.",
        ],
        explain: "Objects at or beyond F give real inverted images, so the camera, photocopier and projector go in the first bin. Only the object inside F gives a virtual upright image, the magnifying glass.",
      },
      {
        kind: "choice",
        question: "Which pair of rays from the top of the object can be drawn to locate the image?",
        figure: "fig-14-17-lens-construction",
        options: [
          "A ray straight down the principal axis and a ray parallel to it",
          "A ray parallel to the axis then through F, and a ray straight through the centre C",
          "A ray through the near F only, drawn on its own",
          "2 rays that both pass straight through the centre C",
        ],
        correct: 1,
        ask: "You need 2 different standard rays that actually cross. One useful pair is the parallel-then-through-F ray together with the undeviated ray through the centre.",
        hints: [
          "A single ray, or 2 copies of the same ray, cannot fix a crossing point.",
          "The ray parallel to the axis bends through F; the ray through the centre C goes straight on. Those 2 cross at the image.",
        ],
        explain: "The parallel ray that bends through F and the undeviated ray through the centre C are 2 different standard rays, and where they cross locates the image. A single ray, or 2 identical rays, cannot pin down a crossing point.",
      },
      {
        kind: "open",
        prompt: "An object is placed well beyond 2F from a converging lens, as in a camera. Describe the image formed and explain how a ray diagram shows it.",
        modelAnswer: "The image is real, inverted and diminished, and it forms on the far side of the lens between F and 2F. 2 standard rays from the top of the object are drawn: one parallel to the axis that bends through the far F, and one straight through the centre C. They actually cross on the other side of the lens, and because real rays meet there the image is real and could be caught on a screen. It points the opposite way to the object, so it is inverted, and it is smaller than the object, so it is diminished.",
        marks: [
          "Image is real, inverted and diminished.",
          "Image forms on the far side of the lens, between F and 2F.",
          "2 standard rays drawn (parallel-then-through-F and straight-through-C) that cross to locate it.",
          "Rays actually meet, so the image is real and can fall on a screen.",
        ],
        ask: "Cover 3 things: the nature of the image (real or virtual, upright or inverted, bigger or smaller), where it forms, and which 2 rays you would draw to find it.",
      },
      {
        kind: "insight",
        body: "One rule ties it together: *real* images are *inverted* and form where rays truly cross; *virtual* images are *upright* and appear only when you trace spreading rays back.",
        say: "Keep hold of one rule and the ray diagrams look after themselves. If the object sits outside the focal point F, the rays meet on the far side and you get a real, inverted image, the kind a camera or projector uses. If the object sits inside F, the rays spread out and you trace them back to a virtual, upright, enlarged image, the magnifying glass. Real means inverted, virtual means upright, every single time.",
      },
    ],
  },
];
