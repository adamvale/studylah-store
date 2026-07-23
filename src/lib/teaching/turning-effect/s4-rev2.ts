import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, Revision 2. Checkpoint over KB Chapter 05
// sections 5.4 (Centre of gravity) and 5.5 (Stability). Question-only.
// The only figure used, fig-05-23-lamina-loaded, follows the carry-over colour key:
// the lamina is white, the centre-of-gravity dot and the weight are pink, the pivot
// and the distance guide are grey.

export const BOXES: Subconcept[] = [
  {
    id: "t4.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: centre of gravity and stability",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "What is the centre of gravity of an object?",
        options: [
          "The single point at which the whole weight of the object may be taken to act",
          "The point on the surface where the material feels heaviest",
          "The exact middle of the object's base",
          "The point where the object touches the ground",
        ],
        correct: 0,
        ask: "Think about the 1 point where gravity behaves as though all the weight is concentrated. Which option is that?",
        hints: [
          "Gravity acts as though the entire weight sits at a single point.",
          "That point is the centre of gravity, wherever the object is placed or turned.",
        ],
        explain: "The centre of gravity is the single point at which the whole weight of the object may be taken to act. Gravity behaves as though all the weight is concentrated there.",
      },
      {
        kind: "choice",
        question: "Where is the centre of gravity of a uniform metal ring?",
        options: [
          "In the empty space at the middle of the ring",
          "On the metal, at the top of the ring",
          "On the metal, at the bottom of the ring",
          "Spread evenly all the way around the metal",
        ],
        correct: 0,
        ask: "A regular shape balances at its geometric centre. For a ring, ask where that centre actually is.",
        hints: [
          "The geometric centre of a ring is its middle.",
          "For a hollow shape the centre of gravity can fall outside the material, in the empty middle.",
        ],
        explain: "The centre of gravity of a ring is at the empty space in its middle. For a hollow shape the balance point can lie outside the material itself.",
      },
      {
        kind: "choice",
        question: "Which change makes an object more stable?",
        options: [
          "Lowering its centre of gravity",
          "Raising its centre of gravity",
          "Making its base area smaller",
          "Standing it on a single point",
        ],
        correct: 0,
        ask: "Recall the 2 things that improve stability: something about the centre of gravity, and something about the base. Which option matches?",
        hints: [
          "A lower centre of gravity gives more stability.",
          "A larger base area also gives more stability, so shrinking the base would do the opposite.",
        ],
        explain: "Lowering the centre of gravity makes an object more stable. A larger base area helps too, so making the base smaller or balancing on a point would make it less stable.",
      },
      {
        kind: "choice",
        question: "An object is tilted. The vertical line through its centre of gravity falls inside its base. What happens when it is released?",
        options: [
          "It rights itself and returns to its original position",
          "It topples over",
          "It stays balanced on the tilted edge forever",
          "Its centre of gravity moves outside the object",
        ],
        correct: 0,
        ask: "When tilted, the lowest edge is the pivot. Ask what the weight's moment does when the line of the weight is still inside the base.",
        hints: [
          "If the vertical line through the centre of gravity falls inside the base, the weight's moment turns the object back down.",
          "It only topples when that line falls outside the base.",
        ],
        explain: "The object rights itself, because the vertical line through the centre of gravity falls inside the base. The weight's moment about the lowest edge turns it back to its original position.",
      },
      {
        kind: "choice",
        question: "A 5 N iron piece is fixed at Y, a distance 0.15 m from the centre of gravity C. Using this distance, what is the moment of the iron's weight about the pivot X?",
        figure: "fig-05-23-lamina-loaded",
        options: ["0.75 N m", "0.30 N m", "5.15 N m", "33 N m"],
        correct: 0,
        ask: "Moment is force times distance, so work out 5 times 0.15. Which option is that?",
        hints: [
          "Use moment equals force times perpendicular distance.",
          "5 times 0.15 is 0.75, and the moment is measured in newton metres.",
        ],
        working: [
          { label: "Formula", latex: "M = F \\times d" },
          { label: "Substitute", latex: "M = 5 \\times 0.15" },
          { label: "Answer", latex: "M = 0.75\\ \\text{N m}" },
        ],
        explain: "The moment is 0.75 newton metres, because 5 newtons times 0.15 metres is 0.75 newton metres.",
      },
      {
        kind: "match",
        prompt: "Match each idea to its correct description.",
        pairs: [
          { left: "Centre of gravity", right: "The single point where the whole weight acts" },
          { left: "Stability", right: "The ability to return to the original position after tilting" },
          { left: "Larger base area", right: "Makes an object more stable" },
          { left: "Higher centre of gravity", right: "Makes an object less stable" },
        ],
        ask: "Take each term on the left and pair it with the phrase that defines or describes it on the right.",
        hints: [
          "The centre of gravity is about where the weight acts; stability is about returning after a tilt.",
          "A wider base adds stability, while raising the centre of gravity takes stability away.",
        ],
        explain: "The centre of gravity is the single point where the whole weight acts, and stability is the ability to return after tilting. A larger base area adds stability, while a higher centre of gravity reduces it.",
      },
      {
        kind: "order",
        prompt: "Put the plumb-line steps for finding the centre of gravity of a lamina in the right order.",
        items: [
          "Make a few small holes near the edge of the lamina",
          "Hang the lamina freely from one of the holes",
          "Hang a plumb line from the same hole and mark its vertical line",
          "Repeat from a second hole and mark that vertical line too",
          "Mark where the 2 lines cross as the centre of gravity",
        ],
        ask: "Start by preparing the lamina, then take a reading from 1 hole before you can take a second and combine them.",
        hints: [
          "You need small holes before you can hang the lamina from anything.",
          "One hole gives 1 vertical line; a second hole gives another, and the crossing point is the answer.",
        ],
        explain: "Make the holes, hang the lamina from 1 and mark the plumb line, then repeat from a second hole. Where the 2 marked vertical lines cross is the centre of gravity.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of stability.",
        segments: [
          "An object is more stable when its centre of gravity is ",
          " and its base is ",
          ". When tilted, it rights itself only if the vertical line through its centre of gravity stays ",
          " the base.",
        ],
        bank: ["lower", "wider", "inside", "higher", "narrower", "outside"],
        answer: ["lower", "wider", "inside"],
        ask: "Recall the 2 changes that improve stability, then recall where the weight's line must fall for the object to return.",
        hints: [
          "A lower centre of gravity and a wider base both add stability.",
          "It only rights itself while the vertical line through the centre of gravity stays inside the base.",
        ],
        explain: "An object is more stable when its centre of gravity is lower and its base is wider. It rights itself only while the vertical line through the centre of gravity stays inside the base.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this explanation of stability is wrong. Tap it.",
        lines: [
          "The centre of gravity is the single point where the whole weight acts.",
          "A lower centre of gravity makes an object more stable.",
          "A larger base area makes an object more stable.",
          "An object topples when the vertical line through its centre of gravity stays inside its base.",
          "When tilted, the lowest edge of the base acts as the pivot.",
        ],
        errorLine: 3,
        ask: "Check the line about toppling. Ask whether the weight's line should be inside or outside the base for the object to fall over.",
        hints: [
          "An object rights itself while the line through the centre of gravity is inside the base.",
          "It topples only when that vertical line falls outside the base, not inside it.",
        ],
        explain: "The fourth line is wrong. An object topples when the vertical line through its centre of gravity falls outside the base; while it stays inside, the object rights itself.",
      },
      {
        kind: "classify",
        prompt: "A tilted object is released. Sort each case by what it does.",
        bins: ["Rights itself", "Topples over"],
        items: [
          { text: "The vertical line through the centre of gravity stays inside the base", bin: 0 },
          { text: "A bus with a low centre of gravity, tilted a little", bin: 0 },
          { text: "A wide based cone tilted only slightly", bin: 0 },
          { text: "The vertical line through the centre of gravity falls outside the base", bin: 1 },
          { text: "A tall thin lamp pushed past its balancing edge", bin: 1 },
        ],
        ask: "For each case, ask whether the vertical line through the centre of gravity is still inside the base or has passed outside it. Tap each one and drop it in its bin.",
        hints: [
          "A low centre of gravity or a wide base keeps the line inside the base, so the object returns.",
          "Once the line passes outside the base, the weight's moment carries the object over.",
        ],
        explain: "While the vertical line through the centre of gravity stays inside the base, the object rights itself, which is why the bus and the wide cone return. Once that line falls outside the base, as for the tall lamp, the object topples.",
      },
      {
        kind: "open",
        prompt: "Describe how you would use a plumb line to find the centre of gravity of an irregular card lamina.",
        modelAnswer: "Make a few small holes near the edge of the card. Hang the card freely from 1 hole so it can swing. Hang a plumb line from the same hole and, once it is still, mark the vertical line it shows on the card. Repeat from a second hole and mark that vertical line too. The centre of gravity is the point where the 2 marked lines cross.",
        marks: [
          "Make holes near the edge and hang the card freely from 1 of them.",
          "Use a plumb line from the same point to mark the vertical.",
          "Repeat from a second hole; the centre of gravity is where the 2 lines cross.",
        ],
        ask: "Think about why the card hangs with its centre of gravity below the hole, and how 2 vertical lines let you pin down 1 point.",
      },
      {
        kind: "open",
        prompt: "A bus is built with a low centre of gravity and a wide base. Explain, in terms of stability, why this makes it hard to topple.",
        modelAnswer: "Stability is the ability to return to the original position after tilting. A low centre of gravity and a wide base both increase stability. When the bus tilts, the lowest edge acts as the pivot. Because the centre of gravity is low and the base is wide, the vertical line through the centre of gravity stays inside the base over a large tilt, so the weight's moment turns the bus back down instead of over. It would only topple if it tilted far enough for that line to fall outside the base.",
        marks: [
          "A low centre of gravity and a wide base both increase stability.",
          "When tilted, the vertical line through the centre of gravity stays inside the wide base.",
          "The weight's moment about the lowest edge then returns the bus, so it does not topple.",
        ],
        ask: "Think about where the vertical line through the centre of gravity falls as the bus tilts, and what the weight's moment does while that line is still inside the base.",
      },
    ],
  },
];
