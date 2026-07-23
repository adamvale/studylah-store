import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, section 5. Grounded in KB Chapter 05 (Turning Effects of Forces) section 5.5.
// Figure colours follow the carry-over colour key: object/lamina = white, weight/centre-of-gravity = pink,
// pivot edge/ground/base and dimension guides = grey, rotation/turning arrows = blue.

export const BOXES: Subconcept[] = [
  {
    id: "t4.5",
    code: "T4.5",
    title: "Stability",
    blurb: "Why some objects tip over easily and others always settle back upright",
    steps: [
      {
        kind: "concept",
        heading: "What stability means",
        body: "*Stability* is a measure of how well an object can *return* to its original position after being *tilted*. Two things decide it: the position of the centre of gravity and the size of the base area.",
        say: "Stability is all about what happens after you tip an object a little. A stable object swings back to where it started, while an unstable one keeps going and falls over. Just 2 things set how stable an object is: how low its centre of gravity sits, and how wide its base is.",
      },
      {
        kind: "concept",
        heading: "A lower centre of gravity",
        figure: "fig-05-13-stability-cg",
        body: "The *lower* the *centre of gravity*, the more *stable* the object. A tall container topples easily, but pouring a little water into its base lowers the centre of gravity and steadies it.",
        say: "This figure stacks 2 objects. In the top half, white object A has its pink centre-of-gravity dot low down near its base, so it is hard to tip over. In the bottom half, white object B carries its pink dot high up, so it topples much more easily. A is the more stable of the 2 simply because its centre of gravity is lower. It is why a racing car is built low and why adding water to the base of a tall bottle steadies it.",
      },
      {
        kind: "concept",
        heading: "A wider base",
        figure: "fig-05-14-stability-base",
        body: "The *larger* the *base area*, the more *stable* the object. A shoe with a broad heel stands far more steadily than one balanced on a thin heel.",
        say: "Here 2 more objects are stacked. In the top half, white object C sits on a wide grey base, spreading its weight over a broad footprint. In the bottom half, white object D rests on a narrow grey base. C is the more stable one because its base area is greater, so it takes a much bigger tilt before it will tip.",
      },
      {
        kind: "concept",
        heading: "Tilting and toppling",
        figure: "fig-05-15-stability-tilt",
        body: "When an object is tilted, its lowest edge becomes the *pivot*. If the vertical line through the *centre of gravity* falls *inside* the base, the weight turns it back upright; if that line falls *outside* the base, the weight topples it over.",
        say: "This figure has 3 stacked panels, each showing a white object tilted on its grey pivot edge. In the top half it is stable: the grey vertical line through the centre of gravity falls inside the base, so the weight makes a moment that rights it, shown by a blue arrow turning it back. In the middle half it is unstable: the grey line falls outside the base, so a blue arrow shows the weight turning it further over until it topples. In the bottom half it just balances: the grey line passes straight through the grey pivot edge, so the weight has 0 perpendicular distance and there is no turning effect at all.",
      },
      {
        kind: "classify",
        prompt: "Sort each change to a tall box by its effect on the box's stability.",
        bins: ["Increases stability", "Decreases stability"],
        items: [
          { text: "Add sand to the base", bin: 0 },
          { text: "Widen the base", bin: 0 },
          { text: "Stack heavy books on top", bin: 1 },
          { text: "Stand it on a narrow foot", bin: 1 },
        ],
        ask: "Stability grows when the centre of gravity drops or the base widens. Weigh each change against those 2 rules, then tap it into its bin.",
        hints: [
          "Adding sand low down and widening the base both make the box steadier.",
          "Loading the top raises the centre of gravity, and a narrow foot shrinks the base, so both make it less stable.",
        ],
        explain: "Adding sand to the base lowers the centre of gravity and widening the base enlarges the base area, so both increase stability. Stacking books on top raises the centre of gravity and a narrow foot shrinks the base, so both decrease it.",
      },
      {
        kind: "choice",
        question: "Why does pouring a little water into a tall empty bottle make it harder to knock over?",
        options: [
          "It lowers the centre of gravity",
          "It raises the centre of gravity",
          "It shrinks the base area",
          "It removes the pivot edge",
        ],
        correct: 0,
        ask: "The water settles at the bottom. Think about which way that shifts the centre of gravity, and remember a lower centre of gravity means more stability.",
        hints: [
          "The water collects in the base, adding weight down low.",
          "Weight sitting low pulls the centre of gravity downward, and a lower centre of gravity is more stable.",
        ],
        explain: "The water sits in the base, so it lowers the centre of gravity. A lower centre of gravity makes the bottle more stable, so it is harder to knock over.",
      },
      {
        kind: "match",
        prompt: "Match each change to its effect on an object's stability.",
        pairs: [
          { left: "Lower the centre of gravity", right: "More stable" },
          { left: "Widen the base area", right: "More stable" },
          { left: "Raise the centre of gravity", right: "Less stable" },
          { left: "Narrow the base area", right: "Less stable" },
        ],
        ask: "Keep the 2 rules in mind: a low centre of gravity and a wide base both mean more stability. Match each change to what it does.",
        hints: [
          "Lowering the centre of gravity and widening the base both steady an object.",
          "Raising the centre of gravity and narrowing the base both make it easier to topple.",
        ],
        explain: "Lowering the centre of gravity and widening the base both make an object more stable. Raising the centre of gravity or narrowing the base both make it less stable.",
      },
      {
        kind: "choice",
        question: "A tilted crate is about to be released. In which case does it settle back upright rather than topple?",
        options: [
          "The vertical line through the centre of gravity falls inside the base",
          "The vertical line through the centre of gravity falls outside the base",
          "The vertical line passes exactly through the pivot edge",
          "The centre of gravity is above the pivot edge",
        ],
        correct: 0,
        ask: "Picture the grey vertical line dropping from the centre of gravity. Where must it land, relative to the base, for the weight to turn the crate back?",
        hints: [
          "If the line lands outside the base, the weight carries the crate over; if it lands on the edge, the crate just balances.",
          "Only when the line falls inside the base does the weight make a moment that rights the crate.",
        ],
        explain: "The crate settles back upright when the vertical line through the centre of gravity falls inside the base, because then the weight makes a moment that turns it back. Outside the base it topples, and on the edge it balances.",
      },
      {
        kind: "insight",
        body: "Keep an object *stable* by keeping its *centre of gravity low* and its *base wide*, so that when it tilts, the weight still acts *inside* the base and rights it.",
        say: "Here is the idea to hold on to. Build low and build wide. A low centre of gravity and a broad base mean that even when the object tips, the vertical line from its centre of gravity still falls inside the base, so its own weight swings it back upright instead of tipping it over.",
      },
    ],
  },
];
