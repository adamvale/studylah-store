import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, section 6. Grounded in KB Chapter 19 (Magnetism) sections 19.10 and 19.11.
// Conceptual chapter: no calculations, no working, no formula fields. Colour key: a north pole N = red,
// a south pole S = blue, magnet bodies and bars = white/grey, field lines and their arrows = grey,
// a plotting compass red tip = the north-seeking end (points along the field toward S).

export const BOXES: Subconcept[] = [
  {
    id: "t17.6",
    code: "T17.6",
    title: "Fields between magnets; plotting a field",
    blurb: "The field between two magnets, and how to trace a field line with a compass",
    steps: [
      {
        kind: "concept",
        heading: "Unlike poles: straight across the gap",
        figure: "fig-19-12-unlike-poles-field",
        body: "When a *north* pole faces a *south* pole, the field lines run *straight across the gap* from the N into the S. The 2 magnets *attract*.",
        say: "In this picture a red north pole on one side faces a blue south pole on the other. The grey field lines run almost straight across the gap between them, leaving the red N pole and entering the blue S pole. Because the lines carry straight from one magnet into the other, the 2 poles pull together, so unlike poles attract.",
      },
      {
        kind: "concept",
        heading: "Like poles: a neutral point",
        figure: "fig-19-13-like-poles-field",
        body: "When 2 *like* poles face each other, their fields push the opposite way and *cancel* midway at a *neutral point*. There is no net force and no field line through that point.",
        say: "Here 2 like poles face each other, so both are pushing their field the same direction into the middle. Right in the centre, at the point marked X, the 2 fields are equal and opposite, so they cancel completely. We call X a neutral point. No grey field line passes through it, and a magnetic material placed exactly there feels no net force.",
      },
      {
        kind: "concept",
        heading: "Flat poles: a uniform field",
        figure: "fig-19-14-uniform-flat-magnets",
        body: "Two *flat* opposite poles held close but *not touching* give a *uniform* field between them: the grey lines are parallel and evenly spaced, curving only at the edges.",
        say: "In this figure 2 flat opposite poles sit close together, a red N face opposite a blue S face. Between them the grey field lines are parallel and equally spaced, which means the field has the same strength and direction everywhere in the middle. That is a uniform field. Only near the edges do the lines bend and spread out.",
      },
      {
        kind: "concept",
        heading: "Plotting with a compass",
        figure: "fig-19-15-plotting-compass",
        body: "A *plotting compass* is a tiny pivoted magnet. Its *red north-seeking tip* lines up along the field, pointing toward the *S* pole, so moving it dot by dot traces a field line *with its direction*.",
        say: "A plotting compass is just a small pivoted magnet. In the picture, several compasses sit around a bar magnet, and each red north-seeking tip points along a grey field line, away from the red N pole and toward the blue S pole. Because the tip shows which way the field points, you can move the compass step by step and trace a whole field line, arrow and all. Iron filings, by contrast, only reveal the shape of the field, not its direction, so the compass is preferred when you need the direction too.",
      },
      {
        kind: "choice",
        question: "Two like poles face each other. Midway between them is a point X where a plotting compass feels no turning force at all. What is happening at X?",
        options: [
          "The field is strongest there",
          "The two field lines cross each other there",
          "The two fields are equal and opposite, so they cancel and there is no net force",
          "One of the poles has flipped to become the opposite pole",
        ],
        correct: 2,
        ask: "The 2 like poles push their fields the opposite way into the middle. Think about what happens where 2 equal, opposite fields meet.",
        hints: [
          "Point X is called a neutral point.",
          "Equal and opposite fields add to zero, so nothing is left to turn the compass.",
        ],
        explain: "At X the 2 fields are equal and opposite, so they cancel to give no net field and no net force. That is why X is called a neutral point, and no field line passes through it.",
      },
      {
        kind: "choice",
        question: "In the diagram the grey field lines run straight across the gap from a red N pole into a blue S pole. Which arrangement does this show?",
        figure: "fig-19-12-unlike-poles-field",
        options: [
          "Two like poles facing, which repel",
          "Two unlike poles facing, which attract",
          "A single isolated north pole on its own",
          "Two flat poles giving a neutral point",
        ],
        correct: 1,
        ask: "Look at the poles at each end of the lines. One is a red N and the other is a blue S. Are those the same or different?",
        hints: [
          "Field lines leave an N pole and enter an S pole.",
          "A red N facing a blue S means unlike poles, which attract, and the lines carry straight across.",
        ],
        explain: "This shows 2 unlike poles facing, an N and an S. The field lines run straight across the gap from the N into the S, and unlike poles attract.",
      },
      {
        kind: "choice",
        question: "Both iron filings and a plotting compass can be used to reveal a magnetic field. Why is the plotting compass usually preferred?",
        options: [
          "It is far cheaper than iron filings",
          "It can detect a field with no magnet present",
          "It only works for uniform fields",
          "It shows the direction of the field as well as its shape",
        ],
        correct: 3,
        ask: "Think about what iron filings can and cannot tell you, then about what the red compass tip adds.",
        hints: [
          "Iron filings scatter to reveal the shape of the field, but they carry no arrow.",
          "The red north-seeking tip points along the field, so the compass adds direction.",
        ],
        explain: "The compass is preferred because its red north-seeking tip shows the direction of the field as well as its shape. Iron filings reveal only the shape, with no sense of which way the field points.",
      },
      {
        kind: "match",
        prompt: "Match each method or feature to what it reveals about a magnetic field.",
        pairs: [
          { left: "Iron filings", right: "The shape of the field, but not its direction" },
          { left: "Plotting compass", right: "The shape and the direction of the field" },
          { left: "Spacing of the field lines", right: "How strong the field is" },
          { left: "A neutral point", right: "Where two fields cancel to zero" },
        ],
        ask: "For each item, ask what information it actually gives you: a shape, a direction, a strength, or a place where the field is zero.",
        hints: [
          "Iron filings have no arrow, so they give shape only, while the compass tip adds direction.",
          "Close lines mean a strong field, and a neutral point is where the fields cancel.",
        ],
        explain: "Iron filings show only the shape of the field. A plotting compass shows the shape and the direction. The spacing of the lines shows the strength, close together meaning strong. A neutral point marks where 2 fields cancel to zero.",
      },
      {
        kind: "open",
        prompt: "A student places a bar magnet on a sheet of paper and has a plotting compass. Describe how to use the compass to plot one magnetic field line of the magnet, including its direction.",
        modelAnswer: "Place the compass near one pole of the magnet and mark a dot at each end of the needle. Move the compass so its tail sits on the dot the tip pointed to, then mark a new dot at the tip again. Repeat this, working across the paper until you reach the other pole. Join the dots into a smooth curve to give the field line. The arrow points the way the red north-seeking tip pointed, from the N pole toward the S pole.",
        marks: [
          "Place the compass near a pole and mark a dot at each end of the needle.",
          "Move the compass so its tail is on the previous dot, then mark the new tip position.",
          "Repeat dot by dot across to the other pole, then join the dots into a smooth line.",
          "Add an arrow in the direction the red tip pointed, from N to S.",
        ],
        ask: "Think about marking dots at the ends of the needle, then stepping the compass along so each dot follows the last, and how the red tip fixes the direction.",
      },
      {
        kind: "insight",
        body: "Between *unlike* poles the field runs *straight across* and they attract; between *like* poles it cancels at a neutral point. A plotting compass traces the line and its direction; iron filings show only the shape.",
        say: "Hold on to 3 ideas. Between unlike poles the field lines run straight across the gap and the magnets attract. Between like poles the fields cancel at a neutral point, where nothing turns a compass. And to map a field with direction, use a plotting compass dot by dot, because iron filings reveal only the shape.",
      },
    ],
  },
];
