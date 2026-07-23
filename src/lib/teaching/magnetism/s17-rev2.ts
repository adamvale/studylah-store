import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, Revision 2. Checkpoint over KB Chapter 19, sections t17.4 to
// t17.6: soft and hard materials and storing magnets, the field lines of a bar
// magnet, and fields between magnets with plotting. Question-only. Conceptual:
// NO working, NO formula.

export const BOXES: Subconcept[] = [
  {
    id: "t17.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: soft and hard materials, field lines and plotting",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which material is best for the core of an electromagnet?",
        options: [
          "Steel, because it keeps its magnetism",
          "Soft iron, because it magnetises and loses its magnetism easily",
          "Copper, because it carries the current well",
          "Aluminium, because it is light",
        ],
        correct: 1,
        ask: "An electromagnet must switch its magnetism on and off with the current. Which material gains and loses magnetism most easily?",
        hints: [
          "Soft magnetic materials are easily magnetised and lose it just as easily; hard ones like steel hold onto it.",
          "Copper and aluminium are not magnetic materials at all, so they cannot be magnetised.",
        ],
        explain: "Soft iron is chosen, because it magnetises the moment the current flows and loses its magnetism the moment the current stops. Steel would stay magnetised, and copper and aluminium are not magnetic materials.",
      },
      {
        kind: "choice",
        question: "In which direction do the field lines around a bar magnet point?",
        figure: "fig-19-10-bar-field-lines",
        options: [
          "Into the N pole and out of the S pole",
          "From one S pole across to another S pole",
          "Around the magnet in a closed circle, with no start or end at the poles",
          "Out of the N pole and into the S pole",
        ],
        correct: 3,
        ask: "Recall the agreed rule for the arrows on a field line at each pole. Where do they leave the magnet and where do they enter it?",
        hints: [
          "The arrows always leave from the north pole.",
          "Outside the magnet the lines run from N round to S; they enter the magnet at the S pole.",
        ],
        explain: "The field lines point out of the N pole and into the S pole. In the figure the grey arrows leave the red N pole, curve round, and enter the blue S pole.",
      },
      {
        kind: "choice",
        question: "Two like poles face each other. At the point midway between them the fields from the 2 magnets...",
        options: [
          "cancel out, giving a neutral point with no net field",
          "add together to give the strongest field of all",
          "cross over to make the lines form a loop there",
          "both point straight into one of the magnets",
        ],
        correct: 0,
        ask: "The 2 magnets push their field in opposite directions at that middle point. What is the total field when 2 equal, opposite pushes meet?",
        hints: [
          "Between like poles the fields oppose each other.",
          "Where 2 equal and opposite fields meet, they cancel, leaving no field line.",
        ],
        explain: "The fields cancel, giving a neutral point. There the 2 equal and opposite fields add to zero, so a compass placed there feels no net force and no field line passes through it.",
      },
      {
        kind: "choice",
        question: "Why are soft iron keepers laid across the ends of stored bar magnets?",
        options: [
          "To make the magnets heavier so they do not slide",
          "To turn the bar magnets into electromagnets",
          "So the poles join in a closed N-S-N-S loop and the magnets keep their strength",
          "To swap the north and south poles around each week",
        ],
        correct: 2,
        ask: "The keepers link the free poles of the magnets together. What does joining every pole to an opposite one do for the stored magnets?",
        hints: [
          "The keepers let the poles run N to S to N to S all the way round.",
          "With no free poles left exposed, the magnets do not gradually weaken.",
        ],
        explain: "The keepers let the poles form a closed N-S-N-S loop, so there are no free poles exposed and the magnets keep their strength while stored.",
      },
      {
        kind: "choice",
        question: "Why is a plotting compass usually preferred over iron filings for mapping a magnetic field?",
        options: [
          "Iron filings are magnetic but a plotting compass is not",
          "A plotting compass is always cheaper than iron filings",
          "Iron filings give the direction of the field but not its shape",
          "The compass shows the direction of the field, while iron filings show only its shape",
        ],
        correct: 3,
        ask: "Think about what each method actually tells you. Which one gives you an arrow you can follow, and which only outlines the pattern?",
        hints: [
          "Iron filings line up along the field but do not tell you which way it points.",
          "The compass needle has a north-seeking tip that points along the field, so it gives direction as well as shape.",
        ],
        explain: "The compass is preferred because its red north-seeking tip shows the direction of the field as well as its shape. Iron filings only reveal the shape of the pattern, not which way the field points.",
      },
      {
        kind: "classify",
        prompt: "Sort each item into soft (temporary) or hard (permanent) magnetic behaviour.",
        bins: ["Soft (temporary)", "Hard (permanent)"],
        items: [
          { text: "soft iron", bin: 0 },
          { text: "an electromagnet core", bin: 0 },
          { text: "the electromagnet in an electric bell", bin: 0 },
          { text: "steel", bin: 1 },
          { text: "the magnet in a loudspeaker", bin: 1 },
          { text: "a fridge door catch", bin: 1 },
        ],
        ask: "For each item, ask whether its magnetism needs to switch on and off (soft) or stay on for good (hard). Tap each one and drop it in its bin.",
        hints: [
          "Soft materials like soft iron magnetise and demagnetise easily, so they suit electromagnets, relays and bells.",
          "Hard materials like steel keep their magnetism, so they suit loudspeakers, motors and door catches.",
        ],
        explain: "Soft iron, the electromagnet core and the bell's electromagnet are soft: their magnetism switches on and off. Steel, the loudspeaker magnet and the door catch are hard: they keep their magnetism as permanent magnets.",
      },
      {
        kind: "match",
        prompt: "Match each item to what it does.",
        pairs: [
          { left: "Plotting compass", right: "shows the direction of the field" },
          { left: "Iron filings", right: "show only the shape of the field" },
          { left: "Soft iron", right: "loses its magnetism easily" },
          { left: "Steel", right: "keeps its magnetism" },
        ],
        ask: "Pair up each tool or material with its one defining property. Think about direction versus shape, and about which material holds its magnetism.",
        hints: [
          "One method gives you an arrow to follow; the other only outlines the pattern.",
          "Soft means the magnetism is easily changed; hard means it is kept.",
        ],
        explain: "A plotting compass shows the field's direction, while iron filings show only its shape. Soft iron loses its magnetism easily, whereas steel keeps its magnetism.",
      },
      {
        kind: "cloze",
        prompt: "Complete the rules for the field lines of a bar magnet.",
        segments: [
          "Field lines come out of the ",
          " pole and go into the S pole. Two field lines never ",
          ", and where the lines are close together the field is ",
          ".",
        ],
        bank: ["N", "cross", "strong", "S", "meet", "weak"],
        answer: ["N", "cross", "strong"],
        ask: "Recall the pole the arrows leave from, the one rule about lines touching, and what close spacing tells you about the field.",
        hints: [
          "The arrows leave from the north pole and enter the south pole.",
          "Lines can never cross, and lines packed close together mean a strong field.",
        ],
        explain: "Field lines come out of the N pole and into the S pole. They never cross, and where they are close together the field is strong, which is why a bar magnet is strongest at its poles.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this description of a magnetic field is wrong. Find it.",
        lines: [
          "A magnetic field is the region where a magnetic material feels a force.",
          "Field lines point out of the S pole and into the N pole.",
          "The lines never cross and form continuous closed loops.",
          "Where the lines are close together, the field is strongest.",
        ],
        errorLine: 1,
        ask: "Check each line against the agreed rules. Look hard at the line that states which pole the arrows leave from.",
        hints: [
          "The arrows on a field line always leave the north pole, not the south pole.",
          "Line 2 has the poles the wrong way round.",
        ],
        explain: "Line 2 is wrong. Field lines point out of the N pole and into the S pole, not the other way round. The other 3 lines are correct.",
      },
      {
        kind: "order",
        prompt: "Put these steps for plotting a field line with a compass in the correct order.",
        items: [
          "Place the plotting compass near the N pole of the magnet",
          "Mark a dot on the paper at the red north-seeking tip of the needle",
          "Move the compass so its tail sits on that dot",
          "Mark a new dot at the tip, and repeat step by step toward the S pole",
          "Join the dots into a smooth line and add an arrow from N to S",
        ],
        ask: "Think about how you build a line one dot at a time, always following where the tip points. Put the steps in order.",
        hints: [
          "You start at the N pole and step the compass along, dot by dot, toward the S pole.",
          "Only at the end do you join the dots and add the arrow showing the direction.",
        ],
        explain: "Start the compass by the N pole, mark a dot at its tip, shift the compass onto that dot, mark the next dot, and repeat toward the S pole. Finally join the dots and add an arrow from N to S to show the field's direction.",
      },
      {
        kind: "open",
        prompt: "Explain why bar magnets are stored with soft iron keepers, and why soft iron is the right material to use.",
        figure: "fig-19-09-soft-iron-keepers",
        modelAnswer: "The keepers are laid across the opposite poles of a pair of magnets so the poles join in a closed N-S-N-S loop. With no free poles left exposed, the magnets do not slowly weaken, so they keep their strength in storage. Soft iron is used because it magnetises easily by induction to complete the loop, and it does not become a permanent magnet itself.",
        marks: [
          "Keepers join opposite poles into a closed N-S-N-S loop.",
          "No free poles are exposed, so the magnets keep their strength.",
          "Soft iron is chosen because it magnetises easily by induction and does not stay magnetised.",
        ],
        ask: "Think about what the keepers do to the free poles, and why a material that is easily magnetised but does not stay magnetised suits the job.",
      },
      {
        kind: "open",
        prompt: "Describe how to use a plotting compass to trace a magnetic field line around a bar magnet, and give one advantage of the compass over iron filings.",
        modelAnswer: "Place the plotting compass near one pole and mark a dot on the paper at the red north-seeking tip of the needle. Move the compass so its tail lines up with that dot, then mark a new dot at the tip. Repeat this step by step until you reach the other pole, then join the dots into a smooth line and add an arrow. The advantage over iron filings is that the compass shows the direction of the field, not just its shape.",
        marks: [
          "Mark a dot at the compass tip, then step the compass along dot by dot.",
          "Join the dots and add an arrow to show the line and its direction.",
          "Advantage: the compass shows the field's direction, while iron filings show only the shape.",
        ],
        ask: "Think about how each new dot follows the tip of the needle, and about what the compass tells you that iron filings cannot.",
      },
    ],
  },
];
