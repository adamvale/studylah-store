import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical Chapter 3), section 3. Grounded in the TP3 brief: spring balance, Hooke's law, Exp 1.
// Figure colours follow the house dark-theme key: a spring's force / an applied pull = amber; the spring body,
// clamp, stand, masses and rule = white/grey; on graphs the best-fit line = blue, the gradient triangle = amber,
// plotted crosses = white, axes and grid = grey.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.3",
    code: "TP3.3",
    title: "Hooke's law and the spring balance",
    blurb: "Why a spring balance reads force, and how extension grows with load",
    steps: [
      {
        kind: "concept",
        heading: "The spring balance reads force",
        figure: "fig-pr3-02-spring-balance",
        body: "A *spring balance* (newton-meter) reads a *force* straight off a scale because a spring's *extension* is proportional to the *load* hung on it.",
        say: "This figure shows a spring balance, also called a newton-meter. A load hangs from the hook at the bottom and the white spring inside stretches. Because the amount the spring stretches grows in step with the pull on it, the pointer moves down an evenly spaced scale, so you can read the force directly in newtons.",
      },
      {
        kind: "concept",
        heading: "Hooke's law",
        body: "*Hooke's law* says the *force* stretching a spring is proportional to its *extension*: double the load and you double the stretch.",
        formula: {
          latex: "F = ke",
          where: [
            { sym: "F", meaning: "stretching force (load)", unit: "N" },
            { sym: "k", meaning: "spring constant", unit: "N/m" },
            { sym: "e", meaning: "extension", unit: "m" },
          ],
        },
        say: "Hooke's law is the rule behind the balance. The stretching force equals the spring constant times the extension. Because they are proportional, if you double the load the spring stretches twice as far, and if you triple the load it stretches 3 times as far.",
      },
      {
        kind: "concept",
        heading: "Extension is the change in length",
        figure: "fig-pr3-05-hookes-law-apparatus",
        body: "The *extension* is how much *longer* the spring has become, not its total length: subtract the *natural length* from the *stretched length*.",
        formula: {
          latex: "e = L - L_0",
          where: [
            { sym: "e", meaning: "extension", unit: "m" },
            { sym: "L", meaning: "stretched length", unit: "m" },
            { sym: "L_0", meaning: "natural (unstretched) length", unit: "m" },
          ],
        },
        say: "This figure shows the Hooke's law apparatus: a white spring hangs from a clamp on a stand, slotted masses hang from its lower end, and a vertical rule beside it measures the length. Extension is the change in length, not the whole length. Take the stretched length and subtract the natural length the spring had with no load, and what is left is the extension.",
      },
      {
        kind: "concept",
        heading: "The spring constant",
        body: "The *spring constant* k, in *newtons per metre*, tells you how stiff a spring is: a *stiffer* spring needs more force for the same stretch, so it has a *larger* k.",
        say: "The spring constant k is measured in newtons per metre and it describes stiffness. A stiff spring resists stretching, so it takes a large force to extend it even a little, and that gives a large k. A floppy spring stretches easily and has a small k.",
      },
      {
        kind: "concept",
        heading: "The limit of proportionality",
        body: "Hooke's law only holds up to the *limit of proportionality*. Stretch a spring *past* this point and the extension is *no longer* proportional to the load, so you must not *over-stretch* it.",
        say: "There is a catch. The straight-line relationship only lasts up to a point called the limit of proportionality. If you hang too heavy a load and pull the spring beyond that limit, extension is no longer proportional to force and the spring may not spring back. So in the experiment you avoid over-stretching and keep the loads modest.",
      },
      {
        kind: "concept",
        heading: "The load-extension graph",
        figure: "fig-pr3-06-load-extension-graph",
        body: "Plot *load against extension* and, up to the limit, the points lie on a *straight line through the origin*. The *gradient* of that line is the *spring constant* k.",
        say: "This graph plots load in newtons up the side against extension in centimetres along the bottom. The plotted points are white crosses, and a blue best-fit line runs straight through the origin. An amber triangle on the line marks the gradient. Because load equals k times extension, that gradient is the spring constant k.",
      },
      {
        kind: "choice",
        question: "A spring has a natural length L_0 = 4.0 cm. With a load it stretches to L = 9.0 cm. What is the extension e?",
        options: ["9.0 cm", "13.0 cm", "5.0 cm", "0.44 cm"],
        correct: 2,
        ask: "Extension is the stretched length minus the natural length, so work out 9.0 - 4.0.",
        hints: [
          "Use e = L minus L_0.",
          "9.0 - 4.0 is 5.0, and the answer is a length in centimetres.",
        ],
        working: [
          { label: "Formula", latex: "e = L - L_0" },
          { label: "Substitute", latex: "e = 9.0 - 4.0" },
          { label: "Answer", latex: "e = 5.0\\ \\text{cm}" },
        ],
        explain: "The extension is 5.0 centimetres, because the spring grew from a natural length of 4.0 centimetres to a stretched length of 9.0 centimetres, and 9.0 - 4.0 is 5.0.",
      },
      {
        kind: "choice",
        question: "The same spring stretches by e = 5.0 cm = 0.050 m under a load of F = 2.0 N. Find the spring constant k.",
        options: ["40 N/m", "10 N/m", "0.025 N/m", "2.5 N/m"],
        correct: 0,
        ask: "Rearrange F = ke to get k = F over e, then divide 2.0 by 0.050.",
        hints: [
          "The spring constant is the force divided by the extension in metres.",
          "2.0 ÷ 0.050 is 40, in newtons per metre.",
        ],
        working: [
          { label: "Formula", latex: "k = \\dfrac{F}{e}" },
          { label: "Substitute", latex: "k = \\dfrac{2.0}{0.050}" },
          { label: "Answer", latex: "k = 40\\ \\text{N/m}" },
        ],
        explain: "The spring constant is 40 newtons per metre, because 2.0 newtons divided by an extension of 0.050 metres is 40 newtons per metre. Remember to change the 5.0 centimetres to 0.050 metres first.",
      },
      {
        kind: "graphpick",
        prompt: "Which load-extension graph obeys Hooke's law for a spring below its limit of proportionality?",
        xLabel: "extension e (cm)",
        yLabel: "load W (N)",
        options: [
          { points: [[0, 1.0], [1, 1.5], [2, 2.0], [3, 2.5], [4, 3.0]], caption: "Straight line, but starts above the origin" },
          { points: [[0, 0], [1, 0.5], [2, 1.0], [3, 1.5], [4, 2.0]], caption: "Straight line through the origin" },
          { points: [[0, 0], [1, 0.2], [2, 0.6], [3, 1.2], [4, 2.0]], caption: "Curve bending upwards" },
          { points: [[0, 2.0], [1, 2.0], [2, 2.0], [3, 2.0], [4, 2.0]], caption: "Flat horizontal line" },
        ],
        correct: 1,
        ask: "Hooke's law makes load proportional to extension, so zero load must give zero extension. Look for a straight line that passes through the origin.",
        hints: [
          "Proportional means the line is straight and starts at the origin (0, 0).",
          "A curve or a line with a gap at the bottom is not proportional.",
        ],
        explain: "The correct graph is a straight line through the origin, because Hooke's law makes the load proportional to the extension: no load means no extension, and the gradient of that line is the spring constant k.",
      },
      {
        kind: "slider",
        prompt: "On a load-extension graph the best-fit line rises by 2.0 N for every 4.0 cm (0.040 m) of extension. Set the slider to the spring constant k, in N/m.",
        min: 0,
        max: 100,
        step: 1,
        unit: "N/m",
        start: 0,
        targetMin: 49,
        targetMax: 51,
        ask: "The spring constant is the gradient, the rise in load divided by the run in extension in metres, so work out 2.0 ÷ 0.040.",
        hints: [
          "Gradient equals rise over run: load divided by extension in metres.",
          "2.0 ÷ 0.040 is 50, so slide to 50 newtons per metre.",
        ],
        working: [
          { label: "Formula", latex: "k = \\dfrac{\\Delta F}{\\Delta e}" },
          { label: "Substitute", latex: "k = \\dfrac{2.0}{0.040}" },
          { label: "Answer", latex: "k = 50\\ \\text{N/m}" },
        ],
        explain: "The spring constant is 50 newtons per metre, because the gradient is 2.0 newtons divided by 0.040 metres, which is 50 newtons per metre. That is the same as 0.50 newtons per centimetre.",
      },
      {
        kind: "choice",
        question: "Which is the best precaution when doing the load-extension experiment?",
        options: [
          "Hang the largest mass first to save time",
          "Read the pointer from well above the scale",
          "Use a spring that is already permanently stretched",
          "Do not over-stretch the spring past its limit of proportionality",
        ],
        correct: 3,
        ask: "Hooke's law only holds up to one point on the graph. Think about what happens to the spring if the load gets too big.",
        hints: [
          "Past the limit of proportionality the line stops being straight and the spring may not return to shape.",
          "The safe precaution is to keep the loads small enough to stay below that limit.",
        ],
        explain: "You must not over-stretch the spring past its limit of proportionality, because beyond that point the extension is no longer proportional to the load and the spring can be permanently deformed, which would spoil the readings.",
      },
      {
        kind: "insight",
        body: "A spring balance works only because a spring obeys *Hooke's law*: the *even scale* comes from extension being *proportional* to force, and it stays accurate only *below* the limit of proportionality.",
        say: "Here is the idea to keep. The reason a spring balance has a neat, evenly spaced scale is that a spring obeys Hooke's law, so equal steps in force give equal steps in stretch. Push the load too high, past the limit of proportionality, and that neat proportional behaviour breaks down and the readings can no longer be trusted.",
      },
    ],
  },
];
