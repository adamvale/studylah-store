import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, Revision 1. Checkpoint over KB Chapter 21,
// sections t19.1 to t19.3: electromagnetic induction and Faraday's law,
// Lenz's law, and the a.c. generator. Question-only, conceptual (no working).

export const BOXES: Subconcept[] = [
  {
    id: "t19.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: induction, Lenz's law and the a.c. generator",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A bar magnet and a coil joined to a galvanometer are used in 4 ways. Which one induces an e.m.f. in the coil?",
        figure: "fig-21-01-magnet-solenoid",
        options: [
          "A bar magnet held still inside the coil",
          "A bar magnet resting on the bench near the coil",
          "A bar magnet pushed toward the coil",
          "2 bar magnets taped together beside the coil",
        ],
        correct: 2,
        ask: "An e.m.f. appears only while the magnetic flux through the coil is changing. Which option actually changes the flux?",
        hints: [
          "A magnet that is not moving keeps the flux through the coil steady, so nothing is induced.",
          "Pushing the magnet toward the coil makes the flux grow, and it is that change that induces the e.m.f.",
        ],
        explain: "Pushing the magnet toward the coil induces an e.m.f., because the flux through the coil is changing. A magnet held still or resting nearby gives a steady flux, so the galvanometer reads zero.",
      },
      {
        kind: "choice",
        question: "Lenz's law tells you the direction of the induced current. The induced current always flows so that its magnetic effect...",
        options: [
          "opposes the change that produces it",
          "boosts the change that produces it",
          "points along the field lines",
          "is unrelated to the magnet's motion",
        ],
        correct: 0,
        ask: "Think about the direction that keeps energy from being created out of nothing. Does the induced effect help or fight the change?",
        hints: [
          "If the induced current helped the change, the motion would speed up on its own and give free energy.",
          "The induced current sets up a magnetic effect that pushes back against whatever is changing the flux.",
        ],
        explain: "The induced current opposes the change that produces it. That opposition is why you must do work to move the magnet, and that work becomes the electrical energy of the induced current.",
      },
      {
        kind: "choice",
        question: "As a coil is spun steadily in the a.c. generator, at which position is the induced e.m.f. at its maximum?",
        options: [
          "When the coil is vertical and cutting no field lines",
          "When the coil has stopped spinning",
          "When the magnet has been removed",
          "When the coil is horizontal and cutting field lines fastest",
        ],
        correct: 3,
        ask: "The e.m.f. is largest when the coil sides sweep across the field lines most quickly. Which position is that?",
        hints: [
          "When the coil is vertical its sides move along the field lines and cut none, so the e.m.f. is zero there.",
          "When the coil is horizontal its sides slice straight across the field lines at the greatest rate.",
        ],
        explain: "The e.m.f. is a maximum when the coil is horizontal, because its sides are then cutting field lines fastest. When the coil is vertical it cuts no lines and the e.m.f. is zero.",
      },
      {
        kind: "choice",
        question: "The north pole of a magnet is pushed toward one end of a coil. What does the near end of the coil become, and why?",
        options: [
          "An induced south pole, so it attracts the magnet inward",
          "An induced north pole, so it repels the approaching magnet",
          "No pole at all, because the magnet is only approaching",
          "A pole that pulls the magnet in faster",
        ],
        correct: 1,
        ask: "By Lenz's law the coil must fight the magnet's approach. What kind of pole would push a north pole away?",
        hints: [
          "Like poles repel, so to oppose an approaching north pole the coil end must also be a north pole.",
          "Repelling the magnet means you must push harder, and that work becomes the induced electrical energy.",
        ],
        explain: "The near end becomes an induced north pole, because like poles repel and that opposes the magnet coming in. This is Lenz's law, which follows from the conservation of energy.",
      },
      {
        kind: "choice",
        question: "In the a.c. generator the coil ends press against 2 slip rings and carbon brushes. What is the job of the slip rings?",
        options: [
          "They reverse the current every half turn like a motor's split ring",
          "They store electric charge for later use",
          "They keep a sliding contact so the output leads do not twist up",
          "They make the magnet's field stronger",
        ],
        correct: 2,
        ask: "The coil turns nonstop, so the connection to the outside circuit must slide. What do the rings do that a fixed wire could not?",
        hints: [
          "Each slip ring is a complete ring, unlike the single split ring of a motor's commutator.",
          "The brushes press on the rings so current flows out while the leads stay still and untangled.",
        ],
        explain: "The slip rings keep a sliding contact with the brushes so the output leads do not twist as the coil spins. Because each is a complete ring, the generator's output stays alternating rather than being reversed.",
      },
      {
        kind: "graphpick",
        prompt: "The coil of an a.c. generator is spun steadily. Pick the graph that shows how its output e.m.f. varies with time.",
        xLabel: "time",
        yLabel: "e.m.f.",
        options: [
          {
            points: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3]],
            caption: "A constant, unchanging level",
          },
          {
            points: [[0, 0], [1, 2.8], [2, 4], [3, 2.8], [4, 0], [5, -2.8], [6, -4], [7, -2.8], [8, 0]],
            caption: "A smooth curve that rises, falls, reverses and repeats",
          },
          {
            points: [[0, 0], [1, 0.5], [2, 1], [3, 1.5], [4, 2], [5, 2.5], [6, 3], [7, 3.5], [8, 4]],
            caption: "A straight line rising steadily",
          },
          {
            points: [[0, 0], [1, 2.8], [2, 4], [3, 2.8], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]],
            caption: "One hump, then flat at zero",
          },
        ],
        correct: 1,
        ask: "The e.m.f. is zero when the coil is vertical and a maximum when horizontal, and it reverses every half turn. Which shape does that over and over?",
        hints: [
          "The output must swing above and below zero, because the current reverses direction every half turn.",
          "A smooth wave that rises to a peak, drops through zero to a trough, and repeats is the sine output.",
        ],
        explain: "The output is a smooth sine curve that swings above and below zero. It is zero when the coil is vertical, a maximum when the coil is horizontal, and it reverses every half turn.",
      },
      {
        kind: "classify",
        prompt: "Sort each action by whether it raises the size of the induced e.m.f. in a coil-and-magnet setup.",
        bins: ["Raises the induced e.m.f.", "Does not raise it"],
        items: [
          { text: "moving the magnet faster", bin: 0 },
          { text: "using a stronger magnet", bin: 0 },
          { text: "winding more turns on the coil", bin: 0 },
          { text: "holding the magnet still inside the coil", bin: 1 },
          { text: "painting the coil a different colour", bin: 1 },
        ],
        ask: "A bigger e.m.f. comes from a faster change of flux or more turns. Which actions do that, and which change nothing? Tap each one into its bin.",
        hints: [
          "Faster motion, a stronger magnet and more turns each increase the induced e.m.f.",
          "A magnet held still makes no change of flux, and the coil's colour has no effect at all.",
        ],
        explain: "Moving the magnet faster, using a stronger magnet and adding more turns all raise the induced e.m.f. Holding the magnet still gives no change of flux, and the coil's colour makes no difference.",
      },
      {
        kind: "order",
        prompt: "Put these steps in order to tell the energy story of pushing a magnet into a coil.",
        items: [
          "You push the magnet toward the coil",
          "The magnetic flux through the coil changes",
          "An e.m.f. is induced and drives a current",
          "The induced current opposes your push",
          "Your work becomes the electrical energy of the current",
        ],
        ask: "Start with what you do to the magnet and follow the cause and effect through to where the energy ends up. Put the steps in order.",
        hints: [
          "Nothing is induced until the flux through the coil starts to change.",
          "By Lenz's law the current fights your push, so the work you do turns into electrical energy.",
        ],
        explain: "You push the magnet, which changes the flux, which induces an e.m.f. and current. That current opposes your push, so the work you do becomes the electrical energy of the current. This is why Lenz's law obeys the conservation of energy.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of the a.c. generator.",
        segments: [
          "A generator changes rotation into ",
          " energy. The induced e.m.f. is zero when the coil is ",
          " and largest when the coil is ",
          ", so the output over time is a ",
          " curve.",
        ],
        bank: ["electrical", "vertical", "horizontal", "sine", "chemical", "flat"],
        answer: ["electrical", "vertical", "horizontal", "sine"],
        ask: "Recall the kind of energy a generator makes, the 2 coil positions for zero and maximum e.m.f., and the shape of the output.",
        hints: [
          "A generator makes electrical energy, and its e.m.f. is zero when the coil is vertical.",
          "The e.m.f. is largest when the coil is horizontal, and the output traces a sine curve.",
        ],
        explain: "A generator changes rotation into electrical energy. The e.m.f. is zero when the coil is vertical and largest when it is horizontal, so the output is a sine curve.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this account of electromagnetic induction is wrong. Find it.",
        lines: [
          "A magnet moving into a coil changes the flux through the coil.",
          "That changing flux induces an e.m.f. and drives a current.",
          "A stationary magnet inside a coil induces a steady current.",
          "Only a change of flux can induce an e.m.f. in the coil.",
        ],
        errorLine: 2,
        ask: "Induction needs the flux to be changing. Which line describes a magnet that is not moving yet still claims a current?",
        hints: [
          "A magnet that just sits inside the coil keeps the flux constant.",
          "With no change of flux there is no induced e.m.f., so a still magnet drives no current.",
        ],
        explain: "The wrong line is the one that says a stationary magnet induces a steady current. A still magnet gives a constant flux, so nothing is induced. Only a changing flux can induce an e.m.f.",
      },
      {
        kind: "open",
        prompt: "State Lenz's law and explain how it follows from the conservation of energy.",
        modelAnswer: "Lenz's law says the induced current always flows so that its magnetic effect opposes the change that produces it. For example, when a north pole approaches a coil, the near end becomes an induced north pole and repels it. Because the current opposes the motion, you must do work to keep the magnet moving. That work is what becomes the electrical energy of the induced current. If instead the current helped the motion, the magnet would speed up on its own and you would be getting energy from nothing, which breaks the conservation of energy.",
        marks: [
          "Lenz's law: the induced current opposes the change that produces it.",
          "You must do work against the opposition to move the magnet.",
          "That work becomes the electrical energy of the induced current.",
          "A helping current would give energy from nothing, breaking conservation of energy.",
        ],
        ask: "Say which way the induced current acts, then explain where the electrical energy comes from and why the opposite direction would break energy conservation.",
      },
      {
        kind: "open",
        prompt: "Explain why the output of an a.c. generator is a sine curve, referring to the position of the spinning coil.",
        figure: "fig-21-06-generator-output",
        modelAnswer: "As the coil spins, the rate at which its sides cut the field lines keeps changing. When the coil is vertical its sides move along the field lines and cut none, so the e.m.f. is zero. When the coil is horizontal its sides slice across the field lines fastest, so the e.m.f. is a maximum. Between these the e.m.f. changes smoothly, and every half turn the sides move the opposite way through the field, so the e.m.f. reverses. This steady rise and fall with reversal each half turn traces out a sine curve.",
        marks: [
          "e.m.f. is zero when the coil is vertical (cuts no field lines).",
          "e.m.f. is a maximum when the coil is horizontal (cuts fastest).",
          "The e.m.f. reverses every half turn.",
          "The smooth rise, fall and reversal give a sine curve.",
        ],
        ask: "Link the coil's position to how fast it cuts field lines, and say what happens to the e.m.f. every half turn.",
      },
    ],
  },
];
