import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, section 3. Grounded in KB Chapter 15 (Static Electricity) section 15.5.
// Conceptual only: NO working, NO formula. Colour key: positive charge/plate = red,
// negative charge/plate = blue, electric field lines = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t13.3",
    code: "T13.3",
    title: "Field patterns of two charges and plates",
    blurb: "Reading the field between unlike charges, like charges and parallel plates",
    steps: [
      {
        kind: "concept",
        heading: "Unlike charges: lines link across the gap",
        figure: "fig-15-06-field-unlike",
        body: "Between *unlike* charges the grey field lines run from the positive charge across to the negative charge, an *attraction* picture. The lines are *tightest* in the gap, where the field is strongest.",
        say: "In this picture a red plus charge sits on one side and a blue minus charge on the other. The grey field lines curve across the gap and link the 2 charges together, leaving the positive and arriving at the negative. Notice how the lines are packed closest in the gap between them, which tells you the field is strongest there. That linking pattern is the signature of unlike charges attracting.",
      },
      {
        kind: "concept",
        heading: "Like charges: lines bend away",
        figure: "fig-15-07-field-like",
        body: "Between *like* charges the grey field lines bend away from each other and *never join*, a *repulsion* picture. Midway between them is a point where the field cancels to zero.",
        say: "Here 2 charges of the same sign face each other, drawn as 2 red plus charges. Their grey field lines push away from one another and never meet or cross in the gap. Because both charges shove a test charge the same way, there is a point right in the middle where the 2 fields cancel out to nothing. Lines bending apart and never joining is the mark of like charges repelling.",
      },
      {
        kind: "concept",
        heading: "Parallel plates: a uniform field",
        figure: "fig-15-08-parallel-plates",
        body: "Between two oppositely charged *parallel plates* the grey field lines run *straight* across and are *evenly spaced*. Equal spacing everywhere means the field is *uniform*, the same strength at every point in the gap.",
        say: "Now picture a red positive plate facing a blue negative plate. The grey field lines run straight from the red plate to the blue plate, all parallel and all the same distance apart. Because the lines are evenly spaced everywhere between the plates, the field has the same strength at every point. We call that a uniform field, and it only bends a little right at the edges.",
      },
      {
        kind: "choice",
        question: "The grey field lines curve across the gap from a red positive charge to a blue negative charge, packed tightest in the gap. What field is this?",
        figure: "fig-15-06-field-unlike",
        options: [
          "Two like charges repelling",
          "A pair of unlike charges attracting",
          "A single isolated charge",
          "Two parallel plates",
        ],
        correct: 1,
        ask: "The lines actually join the 2 charges together and are strongest in the gap. Which pairing pulls together like that?",
        hints: [
          "Lines that link a positive charge to a negative charge show attraction.",
          "Attraction happens between unlike charges, one positive and one negative.",
        ],
        explain: "This is a pair of unlike charges attracting. The lines link the positive charge to the negative charge and are tightest in the gap, which is the attraction pattern.",
      },
      {
        kind: "classify",
        prompt: "Sort each description into the field pattern it belongs to.",
        bins: ["Field between unlike charges", "Field between like charges"],
        items: [
          { text: "Lines link one charge straight to the other", bin: 0 },
          { text: "Lines are tightest in the gap between the charges", bin: 0 },
          { text: "Lines bend away and never join", bin: 1 },
          { text: "A point midway where the field cancels to zero", bin: 1 },
        ],
        ask: "Ask whether the lines join the 2 charges together, which means attraction, or push apart, which means repulsion. Tap each description and drop it in its bin.",
        hints: [
          "Unlike charges attract, so their lines link across the gap and crowd tightest there.",
          "Like charges repel, so their lines bend apart, never join, and cancel at a midpoint.",
        ],
        explain: "Linking lines that are tightest in the gap belong to unlike charges attracting. Lines that bend away, never join and cancel midway belong to like charges repelling.",
      },
      {
        kind: "choice",
        question: "Between two parallel plates the field is uniform. Which pattern of field lines shows a uniform field?",
        figure: "fig-15-08-parallel-plates",
        options: [
          "Lines that curve and meet at a point",
          "Lines that fan outward in every direction",
          "Straight lines that are evenly spaced",
          "Lines packed tightest near the middle",
        ],
        correct: 2,
        ask: "Uniform means the same strength everywhere, and the spacing of the lines shows the strength. What spacing would keep the strength constant?",
        hints: [
          "Closer lines mean a stronger field, so equal spacing means equal strength.",
          "A uniform field is drawn as straight, parallel lines that stay evenly spaced.",
        ],
        explain: "A uniform field is shown by straight, evenly spaced lines. Equal spacing everywhere means the field has the same strength at every point, which is exactly what happens between parallel plates.",
      },
      {
        kind: "match",
        prompt: "Match each field-line description to the arrangement that produces it.",
        pairs: [
          { left: "Lines linking a positive to a negative, tightest in the gap", right: "Unlike charges" },
          { left: "Lines that bend away and never join", right: "Like charges" },
          { left: "Straight lines that are evenly spaced across a gap", right: "Parallel plates" },
        ],
        ask: "Decide first whether the lines join up, push apart, or run straight and even, then pick the matching arrangement.",
        hints: [
          "Linking lines mean attraction; lines bending apart mean repulsion.",
          "Straight, evenly spaced lines are the uniform field between parallel plates.",
        ],
        explain: "Linking lines that are tightest in the gap come from unlike charges. Lines that bend away and never join come from like charges. Straight, evenly spaced lines come from parallel plates.",
      },
      {
        kind: "insight",
        body: "Read the pattern to name the field: lines that *link* mean unlike charges attracting, lines that *bend away* mean like charges repelling, and straight, evenly spaced lines mean a *uniform* field between plates.",
        say: "Here is the takeaway. You can name any of these fields just by reading the lines. If the lines link 2 charges together and crowd in the gap, that is unlike charges attracting. If the lines bend apart and never meet, that is like charges repelling. And if the lines are straight and evenly spaced, that is the uniform field between parallel plates. One glance at the pattern tells you the whole story.",
      },
    ],
  },
];
