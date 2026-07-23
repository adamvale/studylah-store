import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, section 2. Grounded in KB Chapter 15 (Static Electricity) sections 15.3, 15.4.
// CONCEPTUAL: no calculations, NO working, NO formula. Figure colour key: a positive charge = red,
// a negative charge = blue, electric field lines and their arrows = grey, the positive test charge = amber.

export const BOXES: Subconcept[] = [
  {
    id: "t13.2",
    code: "T13.2",
    title: "Electric fields and their direction",
    blurb: "Where a charge feels a force, and how field lines show its direction",
    steps: [
      {
        kind: "concept",
        heading: "A region where a charge feels a force",
        figure: "fig-15-03-electric-field-region",
        body: "An *electric field* is a region of space where another charge feels an electric *force*. The field is *stronger near* the charge and weaker further away.",
        say: "An electric field is simply any region where a charge would feel a push or a pull. In this picture a single charge sits in the middle with its grey field spreading out around it. Notice the field is packed tight and strong close to the charge, and it thins out and weakens the further away you go. So the closer a second charge sits, the bigger the force it feels.",
      },
      {
        kind: "concept",
        heading: "A positive test charge shows the direction",
        figure: "fig-15-04-positive-test-charge",
        body: "To find the *direction* of a field we imagine a tiny *positive test charge* placed in it. The way that positive charge is pushed is the direction of the *field* at that point.",
        say: "How do we give the field a direction? We drop in an imaginary tiny positive charge, drawn here in amber, and watch which way it is pushed. This figure has 2 side panels. On the left the amber test charge sits near a red positive charge and is pushed away, because like charges repel. On the right the same amber charge sits near a blue negative charge and is pulled toward it, because unlike charges attract. The direction it moves is the direction of the field.",
      },
      {
        kind: "concept",
        heading: "Which way the lines point",
        figure: "fig-15-05-field-lines-isolated",
        body: "Field lines point *away from* a positive charge and *toward* a negative charge. They *never cross*, and where the lines are *closer* together the field is stronger.",
        say: "We draw the field as grey lines with arrows. This figure shows 2 isolated charges side by side. Around the red positive charge on the left, the grey lines shoot straight outward, away from it. Around the blue negative charge on the right, the grey lines point inward, toward it. 2 rules always hold: field lines never cross one another, and wherever the lines crowd close together the field there is stronger.",
      },
      {
        kind: "choice",
        question: "What is an electric field?",
        figure: "fig-15-03-electric-field-region",
        options: [
          "A wire that carries current between 2 charges",
          "The total charge stored on an object",
          "A region where a charge feels an electric force",
          "A metal surface that blocks all charge",
        ],
        correct: 2,
        ask: "Think about what happens to another charge placed near a charged object. What does it feel?",
        hints: [
          "A field is not the charge itself, it is the space around it.",
          "In that space a second charge experiences a push or a pull.",
        ],
        explain: "An electric field is a region where a charge feels an electric force. It is the space around a charge, not a wire or the charge itself.",
      },
      {
        kind: "choice",
        question: "Which way do electric field lines point?",
        figure: "fig-15-05-field-lines-isolated",
        options: [
          "Toward a positive charge and away from a negative charge",
          "Away from a positive charge and toward a negative charge",
          "Always from left to right across the page",
          "In a circle around every charge",
        ],
        correct: 1,
        ask: "Recall the picture of the red positive charge and the blue negative charge. Which way did each set of grey lines point?",
        hints: [
          "A positive test charge is pushed away from a positive charge.",
          "The same test charge is pulled toward a negative charge.",
        ],
        explain: "Field lines point away from a positive charge and toward a negative charge, which is just the direction a positive test charge would be pushed.",
      },
      {
        kind: "choice",
        question: "A tiny positive test charge is placed close to a large positive charge. What does it do?",
        figure: "fig-15-04-positive-test-charge",
        options: [
          "It moves away from the positive charge",
          "It moves toward the positive charge",
          "It stays perfectly still",
          "It spins in a circle without moving",
        ],
        correct: 0,
        ask: "Both charges are positive. Remember the rule for 2 charges of the same sign.",
        hints: [
          "Like charges repel one another.",
          "So the test charge is pushed away, which sets the field direction there.",
        ],
        explain: "The positive test charge moves away from the positive charge, because like charges repel. That is why field lines around a positive charge point outward.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement about a single charge into the correct bin.",
        bins: ["Field points away", "Field points toward"],
        items: [
          { text: "The lines around a positive charge", bin: 0 },
          { text: "A positive test charge near a positive charge", bin: 0 },
          { text: "The lines around a negative charge", bin: 1 },
          { text: "A positive test charge near a negative charge", bin: 1 },
        ],
        ask: "Field lines and a positive test charge always agree. Away from positive, toward negative. Drop each statement in its bin.",
        hints: [
          "Anything to do with a positive charge sends the field outward, away.",
          "Anything to do with a negative charge draws the field inward, toward it.",
        ],
        explain: "The field points away from a positive charge and toward a negative charge. A positive test charge is pushed away from positive and pulled toward negative, matching the lines exactly.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of an electric field.",
        segments: [
          "An electric field is a region where a charge feels a ",
          ". The field is ",
          " near the charge. Field lines point ",
          " from a positive charge, and the lines never ",
          ".",
        ],
        bank: ["force", "stronger", "away", "cross", "weaker", "toward", "join"],
        answer: ["force", "stronger", "away", "cross"],
        ask: "Work through it in order: what a charge feels, how the field changes close in, which way lines leave a positive charge, and one thing lines never do.",
        hints: [
          "A field is where a charge feels a force, and it is strongest close to the charge.",
          "Lines leave a positive charge going away, and no 2 field lines ever cross.",
        ],
        explain: "An electric field is a region where a charge feels a force. It is stronger near the charge, its lines point away from a positive charge, and field lines never cross.",
      },
      {
        kind: "insight",
        body: "A positive *test charge* is the key: the way it is pushed gives the *field direction*, so lines run *away from* positive and *toward* negative, and crowd closer where the field is stronger.",
        say: "Here is the idea to keep. If you ever forget which way the arrows go, just imagine a tiny positive charge and ask which way it would be shoved. It is pushed away from a positive charge and pulled toward a negative one, and that is exactly how the field lines run. And wherever those lines bunch up close together, the field is at its strongest.",
      },
    ],
  },
];
