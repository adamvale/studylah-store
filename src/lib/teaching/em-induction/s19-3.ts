import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, section 3. Grounded in KB Chapter 21 (Electromagnetic Induction) section 21.3.
// Figure colours follow the house palette: induced current and the a.c. output line = blue, field lines = grey,
// magnet north pole = red, south pole = blue; for Fleming's right-hand rule the thumb (motion) = yellow,
// first finger (field) = grey, second finger (induced current) = blue; coils, slip rings, brushes = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t19.3",
    code: "T19.3",
    title: "The a.c. generator",
    blurb: "How spinning a coil in a magnetic field makes alternating current",
    steps: [
      {
        kind: "concept",
        heading: "Rotation makes electricity",
        figure: "fig-21-04-ac-generator",
        body: "A *generator* turns rotation into electrical energy. A coil spun in a magnetic field *cuts field lines* and so has an *e.m.f.* induced across it. This is the generator effect.",
        say: "A generator is really an electric motor run backwards: instead of feeding in current to make it spin, you spin it to make current. In the picture a white rectangular coil turns between the poles of a magnet, red for north and blue for south, with grey field lines running across the gap. As the coil sweeps round it cuts those grey lines, and cutting field lines induces an e.m.f. across the coil. So mechanical turning becomes electrical energy.",
      },
      {
        kind: "concept",
        heading: "Slip rings and brushes",
        body: "The 2 ends of the coil are joined to 2 *slip rings*, each a complete ring, unlike the single *split ring* of a motor. *Carbon brushes* press on the rings to carry the current out while the leads never twist.",
        say: "The coil is spinning, so how do you get the current off it without the wires winding up? Each end of the coil is joined to its own slip ring, and a slip ring is a full unbroken ring, not the split ring you find in a motor. 2 carbon brushes rest against the rings and slide over them as they turn, passing the current out to the circuit. Because each ring stays joined to the same brush all the way round, the leads keep a steady sliding contact and never twist up.",
      },
      {
        kind: "concept",
        heading: "Fleming's right-hand rule",
        figure: "fig-21-05-fleming-rhr",
        body: "The *direction* of the induced current is given by *Fleming's right-hand rule*: hold the right hand with thumb, first finger and second finger at *right angles*.",
        say: "For a generator you use the right hand, not the left. Hold the thumb, first finger and second finger of your right hand so all 3 point at right angles to one another. The yellow thumb points the way the wire moves, the grey first finger points along the field from north to south, and the blue second finger then points the way the induced current flows. Turn the coil the other way and the current reverses.",
      },
      {
        kind: "concept",
        heading: "The output is a sine curve",
        figure: "fig-21-06-generator-output",
        body: "The e.m.f. is *zero* when the coil is vertical, cutting no lines, and *maximum* when it is horizontal, cutting fastest. So the output is a *sine* curve that *reverses* every half turn.",
        say: "The e.m.f. does not stay steady as the coil spins. When the coil is vertical it slides along the field lines for a moment and cuts none of them, so the e.m.f. drops to 0. A quarter turn later, when the coil is horizontal, it slices across the lines fastest and the e.m.f. is at its peak. In the graph the blue line rises smoothly to a peak, falls back through 0, dips to an equal negative peak, and repeats. Every half turn the coil cuts the lines the opposite way, so the current reverses. That is alternating current.",
      },
      {
        kind: "choice",
        question: "Each half turn the spinning coil cuts the field lines in the opposite direction. What does this tell you about the generator's output?",
        figure: "fig-21-06-generator-output",
        options: [
          "It is a steady direct current in one direction",
          "It grows larger on every turn without limit",
          "It is alternating, reversing direction every half turn",
          "It stays fixed at its maximum value",
        ],
        correct: 2,
        ask: "If the coil cuts the lines one way, then the opposite way, then back again, think about what the current direction does each half turn.",
        hints: [
          "A current that keeps swapping direction is not a steady one-way current.",
          "Reversing every half turn is exactly what alternating current means.",
        ],
        explain: "The output is alternating current, because the coil cuts the field lines the opposite way each half turn, so the induced current reverses direction over and over, giving a sine curve.",
      },
      {
        kind: "choice",
        question: "As the coil spins, when is the induced e.m.f. at its maximum?",
        options: [
          "When the coil is vertical, momentarily cutting no field lines",
          "When the coil is horizontal, cutting field lines fastest",
          "Only at the very moment the coil starts from rest",
          "The e.m.f. is the same at every position",
        ],
        correct: 1,
        ask: "The e.m.f. depends on how fast the coil cuts field lines. Ask which position cuts them fastest and which cuts none.",
        hints: [
          "When the coil is vertical it slides along the lines and cuts none, so the e.m.f. there is 0.",
          "The e.m.f. peaks where the coil slices across the lines fastest, when it is horizontal.",
        ],
        explain: "The e.m.f. is greatest when the coil is horizontal, because there it cuts the field lines fastest. When the coil is vertical it cuts no lines, so the e.m.f. is 0.",
      },
      {
        kind: "choice",
        question: "Why does an a.c. generator use 2 complete slip rings instead of the split ring used in a motor?",
        figure: "fig-21-04-ac-generator",
        options: [
          "To reverse the connections every half turn like a motor does",
          "To make the coil spin faster on its own",
          "To add extra turns of wire to the coil",
          "To keep a sliding contact so the alternating current passes out without the leads twisting",
        ],
        correct: 3,
        ask: "The coil is turning all the time. Think about what the rings and brushes have to do to get the current out of a spinning coil.",
        hints: [
          "A split ring would swap the connections each half turn and straighten the current out, but a generator wants a.c.",
          "2 full rings each stay with their own brush, so the current slides out and the leads never wind up.",
        ],
        explain: "The 2 complete slip rings keep a steady sliding contact with the carbon brushes, so the alternating current passes out to the circuit without the leads twisting. A split ring would reverse the connections each half turn, which is what a motor needs, not a generator.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by its effect on the peak e.m.f. of the generator.",
        bins: ["Raises the peak e.m.f.", "Does not raise the peak e.m.f."],
        items: [
          { text: "Spin the coil faster", bin: 0 },
          { text: "Use a stronger magnet", bin: 0 },
          { text: "Wind more turns onto the coil", bin: 0 },
          { text: "Slow the rotation down", bin: 1 },
          { text: "Remove some turns from the coil", bin: 1 },
        ],
        ask: "The peak e.m.f. rises when the coil cuts field lines faster or links more of them. Tap each change and drop it in its bin.",
        hints: [
          "Faster spinning, a stronger magnet and more turns all give a bigger peak e.m.f.",
          "Slowing the rotation or taking turns off makes the peak smaller, not bigger.",
        ],
        explain: "Spinning faster, using a stronger magnet and adding more turns all raise the peak e.m.f. Note that faster spinning also raises the frequency, while adding turns leaves the frequency unchanged. Slowing down or removing turns lowers the peak, so neither raises it.",
      },
      {
        kind: "graphpick",
        prompt: "Pick the graph that shows how the e.m.f. from an a.c. generator changes with time.",
        xLabel: "time / s",
        yLabel: "e.m.f. / V",
        options: [
          {
            points: [
              [0, 0],
              [1, 3],
              [2, 4.2],
              [4, 4.8],
              [8, 5],
            ],
            caption: "A curve that rises and then levels off, staying positive",
          },
          {
            points: [
              [0, 3],
              [8, 3],
            ],
            caption: "A flat horizontal line at the same value throughout",
          },
          {
            points: [
              [0, 0],
              [1, 5],
              [2, 0],
              [3, 5],
              [4, 0],
              [5, 5],
              [6, 0],
              [7, 5],
              [8, 0],
            ],
            caption: "Repeated humps all rising to the same peak but never going below zero",
          },
          {
            points: [
              [0, 0],
              [1, 5],
              [2, 0],
              [3, -5],
              [4, 0],
              [5, 5],
              [6, 0],
              [7, -5],
              [8, 0],
            ],
            caption: "A smooth wave rising to a peak, back to zero, down to an equal negative peak, and repeating",
          },
        ],
        correct: 3,
        ask: "The output reverses every half turn, so the graph must go both above and below zero. Look for the one that swings up and down equally.",
        hints: [
          "A steady line or a curve that stays positive cannot show a current that reverses direction.",
          "Alternating current swings to a positive peak and an equal negative peak, giving a sine wave.",
        ],
        explain: "The correct graph is the sine wave that rises to a positive peak, returns to 0, dips to an equal negative peak and repeats. It is 0 when the coil is vertical and peaks when horizontal, and it crosses below zero because the current reverses every half turn.",
      },
      {
        kind: "insight",
        body: "A generator gives *alternating* current because a spinning coil cuts field lines *both ways*. The peak rises with faster *rotation*, a stronger magnet or more turns, but only faster rotation also raises the frequency.",
        say: "Here is the idea to keep. Spinning a coil in a field makes it cut the field lines first one way, then the other, so the induced current keeps reversing and the output is alternating current shaped like a sine wave. You can push the peak higher 3 ways: spin faster, use a stronger magnet, or add more turns. Just remember that spinning faster also speeds up the reversals and so raises the frequency, while a stronger magnet or extra turns raise the peak but leave the frequency alone.",
      },
    ],
  },
];
