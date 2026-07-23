import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, section 4. Grounded in KB Chapter 05 (Turning Effects of Forces) section 5.4.
// Figure colours follow the carry-over colour key: the object (lamina, shape) = white; centre-of-gravity dots
// and the weight arrow = pink; pivots, dimension guides, the line of action and the plumb line = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t4.4",
    code: "T4.4",
    title: "Centre of gravity",
    blurb: "The single point where an object's whole weight acts, and how to find it",
    steps: [
      {
        kind: "concept",
        heading: "One point for the whole weight",
        figure: "fig-05-09-cg-regular",
        body: "The *centre of gravity* is the single point at which the entire *weight* of an object may be taken to act, wherever the object is placed or turned. For a regular shape of uniform material it sits at the *geometric centre*, but for an irregular or hollow object it can lie outside the material, so the centre of gravity of a ring is at its empty middle.",
        say: "The picture shows 4 white shapes, a triangle, a circle, a square and a rectangle. Each one carries a single pink dot right at its middle, and that dot marks the centre of gravity. For a regular shape made of the same material throughout, the centre of gravity sits at the geometric centre. For a hollow shape like a ring it can even fall outside the material, in the empty space at the centre.",
      },
      {
        kind: "concept",
        heading: "Why it hangs below the pivot",
        figure: "fig-05-10-cg-suspended",
        body: "A *freely suspended* object always settles with its centre of gravity directly below the point of suspension. There the weight's line of action passes straight through the pivot, so the perpendicular distance is 0 and the *moment* of the weight is 0. With no turning effect left, the object rests in *equilibrium*.",
        say: "A white lamina hangs from a grey pivot at the top. The pink dot, the centre of gravity, sits directly below that pivot. A grey dashed vertical line, the line of action of the weight, runs straight down from the pivot through the pink dot. Because the weight acts along that line through the pivot, the perpendicular distance is 0, so the moment of the weight is 0 and the lamina hangs still.",
      },
      {
        kind: "concept",
        heading: "What happens when you tilt it",
        figure: "fig-05-11-cg-not-below",
        body: "If the object is *displaced*, its centre of gravity is no longer below the pivot, so the weight now acts at a *perpendicular distance* from the pivot. That gives a *moment* which turns the object back, again and again, until the centre of gravity hangs below the pivot once more.",
        say: "Now the same white lamina has been tilted so the pink centre of gravity swings out to one side of the grey pivot. A pink arrow labelled W points straight down from that dot, the weight. A grey line marks the perpendicular distance d from the pivot across to the weight's line of action. That distance is no longer 0, so the weight makes a moment that turns the lamina back until the centre of gravity settles below the pivot again.",
      },
      {
        kind: "concept",
        heading: "Finding it with a plumb line",
        figure: "fig-05-12-plumb-experiment",
        body: "To find the centre of gravity of a *lamina*, a thin flat sheet, make a few small holes near the edge. Hang it from one hole and drop a *plumb line* from the same point to mark the vertical, then repeat from a second hole. The centre of gravity is where the *marked lines cross*.",
        say: "A white lamina hangs from a grey pin pushed through a small hole near its edge. A grey plumb line, weighted by its bob, dangles vertically from the same pin so you can mark the true vertical on the sheet. The 2 vertical lines marked from 2 different holes cross at the single pink dot, and that crossing point is the centre of gravity.",
      },
      {
        kind: "choice",
        question: "A freely suspended object always comes to rest with its centre of gravity directly below the point of suspension. Why?",
        options: [
          "There the weight's line of action passes through the pivot, so the moment of the weight is 0",
          "There the weight of the object becomes 0",
          "There the object no longer has a centre of gravity",
          "The pivot actively pulls the centre of gravity downwards",
        ],
        correct: 0,
        ask: "Think about the perpendicular distance from the pivot to the weight's line of action when the centre of gravity is directly below the pivot.",
        hints: [
          "When the centre of gravity is below the pivot, the weight acts straight down through the pivot itself.",
          "A perpendicular distance of 0 means the moment of the weight is 0, so there is no turning effect and the object is in equilibrium.",
        ],
        explain: "With the centre of gravity below the pivot, the weight's line of action passes through the pivot. The perpendicular distance is 0, so the moment of the weight is 0 and the object rests in equilibrium.",
      },
      {
        kind: "choice",
        question: "A hanging lamina is pushed so its centre of gravity is no longer below the pivot. What happens next?",
        options: [
          "It swings back until the centre of gravity is below the pivot again",
          "It stays exactly where it is put, in equilibrium",
          "It keeps turning the same way without stopping",
          "Its weight disappears while it is tilted",
        ],
        correct: 0,
        ask: "Once the centre of gravity is off to one side, the weight acts at a perpendicular distance from the pivot. Ask what that distance does.",
        hints: [
          "A perpendicular distance from the pivot means the weight now has a moment.",
          "That moment turns the object back toward the position where the centre of gravity hangs below the pivot.",
        ],
        explain: "Displaced, the weight acts at a perpendicular distance from the pivot, so it now has a moment. That moment turns the lamina back until the centre of gravity is below the pivot again.",
      },
      {
        kind: "classify",
        prompt: "Sort each object by where its centre of gravity lies.",
        bins: ["At its geometric centre", "Outside the solid material"],
        items: [
          { text: "A uniform square sheet", bin: 0 },
          { text: "A uniform circular disc", bin: 0 },
          { text: "A uniform triangular lamina", bin: 0 },
          { text: "A metal ring", bin: 1 },
          { text: "An L-shaped bracket", bin: 1 },
        ],
        ask: "A regular shape of uniform material balances at its geometric centre. A hollow or irregular shape can have its balance point in empty space. Tap each object and drop it in its bin.",
        hints: [
          "The square, disc and triangle are all regular and uniform, so the centre of gravity is at the middle.",
          "A ring is hollow and an L-shape is uneven, so the centre of gravity falls outside the material itself.",
        ],
        explain: "The uniform square, disc and triangle have their centre of gravity at the geometric centre. A ring and an L-shaped bracket have theirs outside the solid material, in the empty space.",
      },
      {
        kind: "order",
        prompt: "Put the plumb-line steps for finding the centre of gravity of a lamina in the right order.",
        items: [
          "Make a few small holes near the edge of the lamina",
          "Hang the lamina from one of the holes and let it hang still",
          "Hang a plumb line from the same hole and mark its vertical line",
          "Repeat from a second hole and mark that vertical line too",
          "Mark where the 2 lines cross as the centre of gravity",
        ],
        ask: "Start by preparing the lamina, then take a reading from one hole before you can take a second and combine them.",
        hints: [
          "You need small holes before you can hang the lamina from anything.",
          "One hole gives one vertical line; you need a second line from another hole, and the crossing point is the answer.",
        ],
        explain: "Make the holes, hang the lamina from one and mark the plumb line, then repeat from a second hole. Where the 2 marked vertical lines cross is the centre of gravity.",
      },
      {
        kind: "insight",
        body: "The centre of gravity is really the object's *balance point*: gravity acts as though the whole *weight* sits there. That is why a hanging object always turns until that point rests directly below its *support*.",
        say: "Here is the idea to keep. Wherever an object is and however it is turned, gravity behaves as though its entire weight is squeezed into 1 point, the centre of gravity. Support the object above that point and it hangs in balance. Nudge it, and the weight makes a moment that swings it back, until the centre of gravity settles below the support once more.",
      },
    ],
  },
];
