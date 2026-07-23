import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, section 5. Grounded in KB Chapter 19 (Magnetism) section 19.9.
// Conceptual: no calculations, no working, no formula. Figure colours follow the T17 key:
// a north pole N = red, a south pole S = blue, the magnet body = white/grey, and the
// magnetic field lines and their arrows = grey (out of the N pole, into the S pole).

export const BOXES: Subconcept[] = [
  {
    id: "t17.5",
    code: "T17.5",
    title: "Magnetic field lines of a bar magnet",
    blurb: "How field lines map the direction, shape and strength of a magnet's field",
    steps: [
      {
        kind: "concept",
        heading: "The field and its field lines",
        figure: "fig-19-10-bar-field-lines",
        body: "A *magnetic field* is the region around a magnet where a magnetic material feels a *force*. We draw *field lines* to show the field's direction, and by agreement they point out of the N pole and into the S pole.",
        say: "A magnetic field is just the space around a magnet where a magnetic material would feel a force. We cannot see it, so we draw field lines to picture it. In this figure a white bar magnet has a red N pole on one end and a blue S pole on the other. The grey field lines curve out from the red N pole, loop around, and dive back into the blue S pole. That direction, out of north and into south, is the agreed rule for every field line.",
      },
      {
        kind: "concept",
        heading: "The rules field lines obey",
        figure: "fig-19-10-bar-field-lines",
        body: "Field lines *never cross* one another and form continuous *closed loops*. Their *spacing shows the strength*: where the lines are close together the field is strong, and where they spread out it is weak.",
        say: "Field lines follow a few strict rules. They never cross, and each one is a continuous closed loop running right through the magnet. The spacing tells you the strength. Look again at the grey lines: near the red N pole and the blue S pole they are crowded close together, so the field is strongest there. Out at the sides of the white bar the lines are spread far apart, so the field is weak. That is why a bar magnet is strongest at its 2 poles.",
      },
      {
        kind: "concept",
        heading: "Uniform and non-uniform fields",
        figure: "fig-19-11-uniform-nonuniform",
        body: "A *uniform* field has *parallel*, equally spaced lines, so the force is the *same everywhere*. A non-uniform field, like the field of a single bar magnet, has unequal spacing, so the force changes from place to place.",
        say: "Fields come in 2 shapes. This figure has 2 panels. On the left is a uniform field: the grey lines are parallel and equally spaced, like the lines on ruled paper, so a magnetic material feels the same force at every point. On the right is a non-uniform field: the grey lines are not parallel and the gaps between them change, so the force is different from place to place. The field around one bar magnet is non-uniform, because its lines crowd at the poles and spread out at the sides.",
      },
      {
        kind: "choice",
        question: "In the field pattern of a bar magnet, which way do the field lines point?",
        figure: "fig-19-10-bar-field-lines",
        options: [
          "Out of the S pole and into the N pole",
          "Into both poles",
          "Out of the N pole and into the S pole",
          "Out of both poles",
        ],
        correct: 2,
        ask: "Recall the agreed direction for a field line. It starts at one named pole and ends at the other.",
        hints: [
          "By convention a field line leaves the north pole and returns to the south pole.",
          "In the figure the grey arrows come out of the red N pole and go into the blue S pole.",
        ],
        explain: "Field lines point out of the N pole and into the S pole. That is the agreed convention, shown by the grey arrows leaving the red N pole and entering the blue S pole.",
      },
      {
        kind: "choice",
        question: "On a field-line diagram, what does it mean where the lines are drawn close together?",
        options: [
          "The field is weak there",
          "The field is strong there",
          "There is no field there",
          "The lines are about to cross",
        ],
        correct: 1,
        ask: "The spacing of the lines codes the strength of the field. Think about what crowded lines say.",
        hints: [
          "Close lines mean a strong field; spread-out lines mean a weak field.",
          "Lines crowd near the poles, and that is exactly where a bar magnet is strongest.",
        ],
        explain: "Close-together lines mean a strong field. The spacing shows strength, so crowded lines near the poles mark the strongest part of the field, while spread-out lines mark a weak field.",
      },
      {
        kind: "choice",
        question: "Which description matches a uniform magnetic field?",
        options: [
          "Lines that spread out more and more away from the poles",
          "Lines that meet and cross at a point",
          "A single curved loop around one pole",
          "Parallel lines that are equally spaced",
        ],
        correct: 3,
        ask: "A uniform field gives the same force at every point. Picture what equal spacing everywhere looks like.",
        hints: [
          "Uniform means the same everywhere, so the lines must be evenly spaced.",
          "Equal spacing and parallel lines are the signature of a uniform field.",
        ],
        explain: "A uniform field has parallel, equally spaced lines, so the force is the same everywhere. Unequal spacing, as around a single bar magnet, is a non-uniform field.",
      },
      {
        kind: "classify",
        prompt: "Sort each feature by the kind of field it describes.",
        bins: ["Uniform field", "Non-uniform field"],
        items: [
          { text: "Parallel field lines", bin: 0 },
          { text: "Lines that are equally spaced", bin: 0 },
          { text: "Same force at every point", bin: 0 },
          { text: "Lines with unequal spacing", bin: 1 },
          { text: "The field around a single bar magnet", bin: 1 },
          { text: "Lines crowded at the poles and spread out at the sides", bin: 1 },
        ],
        ask: "A uniform field has parallel, evenly spaced lines and the same force everywhere. Anything with changing spacing is non-uniform. Tap each feature and drop it in its bin.",
        hints: [
          "Parallel, equally spaced lines and a constant force all describe a uniform field.",
          "Unequal spacing, and the pattern of one bar magnet, both mean a non-uniform field.",
        ],
        explain: "Parallel, equally spaced lines that give the same force everywhere describe a uniform field. Unequal spacing, including the field of a single bar magnet with its crowded poles, describes a non-uniform field.",
      },
      {
        kind: "spoterror",
        prompt: "A student writes 4 statements about the field lines of a bar magnet. Find the line that is wrong.",
        lines: [
          "A magnetic field is the region where a magnetic material feels a force.",
          "Field lines point out of the S pole and into the N pole.",
          "The field lines never cross one another.",
          "Where the lines are close together the field is strong.",
        ],
        errorLine: 1,
        ask: "3 of the lines are correct rules. Check the one that names the direction against the agreed convention.",
        hints: [
          "Reread the line about which pole the lines leave and which they enter.",
          "Field lines point out of the N pole and into the S pole, not the other way round.",
        ],
        explain: "The wrong line says the lines point out of the S pole and into the N pole. In fact field lines point out of the N pole and into the S pole. The other 3 statements are all correct.",
      },
      {
        kind: "insight",
        body: "Field lines carry 3 messages at once: their *arrows* give the field's *direction* (out of N, into S), their *spacing* gives its strength, and the fact that they never cross keeps every point's direction single and clear.",
        say: "Here is the idea to keep. A single set of grey field lines tells you 3 things at the same time. The arrows give the direction, always out of the red north pole and into the blue south pole. The spacing gives the strength, crowded means strong and spread out means weak. And because 2 lines never cross, the field at any point has just 1 clear direction. Read those 3 clues and you can describe any magnetic field from its picture.",
      },
    ],
  },
];
