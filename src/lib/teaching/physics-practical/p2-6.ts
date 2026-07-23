import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP2 Measurements and Kinematics, practical section 6 (id tp2.6). Authored from Practical Chapter 02.
// Figure colours: ramp and cylinder outlines = grey/white, slope-distance and height arrows and the
// motion/best-fit line = blue, the release angle theta and the gradient triangle = amber.

export const BOXES: Subconcept[] = [
  {
    id: "tp2.6",
    code: "TP2.6",
    title: "A cylinder down a ramp; speed and g",
    blurb: "Timing a cylinder down a slope to find its speed and measure g",
    steps: [
      {
        kind: "concept",
        heading: "Speed is distance over time",
        body: "The *speed* of the cylinder is the *distance* it travels divided by the *time* taken. Measure a slope distance with a rule and the time with a stopwatch.",
        formula: {
          latex: "\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}",
          where: [
            { sym: "distance", meaning: "length travelled along the slope", unit: "m" },
            { sym: "time", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Start with the simplest idea in kinematics. A cylinder rolls a measured distance down a slope, and a stopwatch gives the time it takes. Divide the distance in metres by the time in seconds and you have its speed in metres per second.",
      },
      {
        kind: "concept",
        heading: "From rest, d against t squared is a straight line",
        figure: "fig-pr2-08-distance-time2-graph",
        body: "Released from *rest* with constant acceleration a, the distance grows as *d = (1/2) a t^2*, so d is proportional to *t^2*. Plotting d against t^2 gives a *straight line* through the origin.",
        formula: {
          latex: "d = \\tfrac{1}{2} a t^{2}",
          where: [
            { sym: "d", meaning: "distance from the start", unit: "m" },
            { sym: "a", meaning: "acceleration down the slope", unit: "m/s^2" },
            { sym: "t", meaning: "time from release", unit: "s" },
          ],
        },
        say: "When the cylinder starts from rest and speeds up steadily, distance is not proportional to time, it is proportional to time squared. The figure plots distance up the axis against time squared along the axis. White crosses mark the readings and a blue best-fit line runs straight through the origin. A straight line means the equation d equals a half a t squared holds.",
      },
      {
        kind: "insight",
        body: "That straight line is *linearising*: the gradient of d against t^2 is (1/2)a, so the acceleration is *a = 2 x gradient*. Turning a curve into a line lets you read a quantity from a *gradient*.",
        say: "Here is the trick worth keeping. The raw graph of distance against time is a curve, which is hard to read. By plotting against time squared instead, we straighten it out. The gradient of that straight line equals a half of the acceleration, so the acceleration is simply twice the gradient. Straightening a curve so you can read a value from its gradient is called linearising.",
      },
      {
        kind: "concept",
        heading: "The slope angle",
        figure: "fig-pr2-11-ramp",
        body: "The ramp is tilted at angle *theta*. Measure the *slope distance* s and the *height* h; then *sin theta = h / s*. This sets how steep the ramp is.",
        formula: {
          latex: "\\sin\\theta = \\dfrac{h}{s}",
          where: [
            { sym: "h", meaning: "height of the raised end", unit: "m" },
            { sym: "s", meaning: "distance along the slope", unit: "m" },
            { sym: "\\theta", meaning: "angle of the ramp", unit: "degrees" },
          ],
        },
        say: "The figure shows a grey ramp with a grey cylinder resting on it. A blue arrow runs up the slope marking the slope distance s, and a second blue arrow marks the vertical height h of the raised end. The amber angle at the foot of the ramp is theta. The sine of theta is the height divided by the slope distance, and that single number fixes how steep the ramp is.",
      },
      {
        kind: "concept",
        heading: "Final speed is twice the average",
        body: "Starting from rest at constant acceleration, the *average* speed over the run is x / t, and the *final* speed is *twice* that average: *v = 2x / t_ave*.",
        formula: {
          latex: "v = \\dfrac{2x}{t_{\\text{ave}}}",
          where: [
            { sym: "v", meaning: "speed at the bottom", unit: "m/s" },
            { sym: "x", meaning: "distance down the slope", unit: "m" },
            { sym: "t_{\\text{ave}}", meaning: "mean time for the run", unit: "s" },
          ],
        },
        say: "The cylinder starts at zero speed and finishes fast, so its average speed over the whole slope is halfway between, which is x over t. Because speed rises steadily, the final speed at the bottom is exactly twice that average. So the speed at the bottom equals 2 times x divided by the mean time.",
      },
      {
        kind: "concept",
        heading: "A graph of v squared against x gives g",
        figure: "fig-pr2-12-speed2-distance-graph",
        body: "Since *v^2 = 2 a x*, a graph of *v^2 against x* is a straight line of gradient *G = 2a*. With a = g sin theta down the slope, *g = G / (2 sin theta)*.",
        formula: {
          latex: "v^{2} = 2 a x, \\quad g = \\dfrac{G}{2\\sin\\theta}",
          where: [
            { sym: "v", meaning: "speed at distance x", unit: "m/s" },
            { sym: "G", meaning: "gradient of the v^2 against x line", unit: "m/s^2" },
            { sym: "\\theta", meaning: "ramp angle", unit: "degrees" },
          ],
        },
        say: "Square the final speed and it equals 2 times the acceleration times the distance. So if you plot speed squared against distance, you get a straight line, and the figure shows exactly that, white crosses on a blue best-fit line with an amber gradient triangle. The gradient equals 2 times the acceleration. The acceleration down the slope is g times sine theta, so g is the gradient divided by 2 sine theta.",
      },
      {
        kind: "choice",
        question: "A ramp is raised so its height is h = 0.139 m over a slope distance s = 0.800 m. Find sin theta.",
        figure: "fig-pr2-11-ramp",
        options: ["0.800", "1.74", "0.174", "5.76"],
        correct: 2,
        ask: "Sine theta is the height divided by the slope distance, so work out 0.139 divided by 0.800.",
        hints: [
          "Use sin theta equals h over s.",
          "0.139 divided by 0.800 is 0.174.",
        ],
        working: [
          { label: "Formula", latex: "\\sin\\theta = \\dfrac{h}{s}" },
          { label: "Substitute", latex: "\\sin\\theta = \\dfrac{0.139}{0.800}" },
          { label: "Answer", latex: "\\sin\\theta = 0.174" },
        ],
        explain: "Sine theta is 0.174, because 0.139 metres divided by 0.800 metres is 0.174, and a sine has no unit.",
      },
      {
        kind: "choice",
        question: "The cylinder runs x = 0.900 m down the slope in a mean time t_ave = 1.036 s, starting from rest. Find the speed v at the bottom.",
        options: ["1.74 m/s", "0.87 m/s", "0.90 m/s", "1.04 m/s"],
        correct: 0,
        ask: "The final speed is twice the average, so use v equals 2x over t. Work out 2 times 0.900 divided by 1.036.",
        hints: [
          "Use v equals 2x divided by t_ave.",
          "2 times 0.900 is 1.8, and 1.8 divided by 1.036 is about 1.74.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{2x}{t_{\\text{ave}}}" },
          { label: "Substitute", latex: "v = \\dfrac{2 \\times 0.900}{1.036}" },
          { label: "Answer", latex: "v = 1.74\\ \\text{m/s}" },
        ],
        explain: "The speed at the bottom is 1.74 metres per second, because 2 times 0.900 metres is 1.8 metres, and 1.8 divided by 1.036 seconds is 1.74 metres per second.",
      },
      {
        kind: "choice",
        question: "For that run the final speed is v = 1.74 m/s. Find v^2, the value plotted up the axis.",
        options: ["0.87 (m/s)^2", "3.48 (m/s)^2", "1.74 (m/s)^2", "3.02 (m/s)^2"],
        correct: 3,
        ask: "Square the speed: multiply 1.74 by itself.",
        hints: [
          "v squared means v times v.",
          "1.74 times 1.74 is about 3.02.",
        ],
        working: [
          { label: "Formula", latex: "v^{2} = v \\times v" },
          { label: "Substitute", latex: "v^{2} = 1.74 \\times 1.74" },
          { label: "Answer", latex: "v^{2} = 3.02\\ (\\text{m/s})^{2}" },
        ],
        explain: "v squared is 3.02, because 1.74 times 1.74 is 3.02, in units of metres per second all squared.",
      },
      {
        kind: "slider",
        prompt: "On a gentler run the cylinder covers x = 0.60 m in a mean time t_ave = 0.83 s from rest. Set the slider to the final speed v, in m/s.",
        min: 0,
        max: 3,
        step: 0.01,
        unit: "m/s",
        start: 0,
        targetMin: 1.42,
        targetMax: 1.48,
        ask: "The final speed is twice the average, so use v equals 2x over t. Work out 2 times 0.60 divided by 0.83.",
        hints: [
          "Use v equals 2x divided by t_ave.",
          "2 times 0.60 is 1.20, and 1.20 divided by 0.83 is about 1.45.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{2x}{t_{\\text{ave}}}" },
          { label: "Substitute", latex: "v = \\dfrac{2 \\times 0.60}{0.83}" },
          { label: "Answer", latex: "v = 1.45\\ \\text{m/s}" },
        ],
        explain: "The final speed is 1.45 metres per second, because 2 times 0.60 metres is 1.20 metres, and 1.20 divided by 0.83 seconds is 1.45 metres per second. Squaring it gives v squared of 2.1.",
      },
      {
        kind: "graphpick",
        prompt: "The cylinder starts from rest and accelerates down the slope. Pick the graph of v^2 against x that matches v^2 = 2ax.",
        xLabel: "x (m)",
        yLabel: "v^2 ((m/s)^2)",
        options: [
          {
            points: [
              [0, 1.5],
              [0.3, 1.5],
              [0.6, 1.5],
              [0.9, 1.5],
            ],
            caption: "Flat, horizontal line",
          },
          {
            points: [
              [0, 0],
              [0.3, 1.0],
              [0.6, 2.0],
              [0.9, 3.0],
            ],
            caption: "Straight line through the origin",
          },
          {
            points: [
              [0, 0],
              [0.3, 0.3],
              [0.6, 1.2],
              [0.9, 2.7],
            ],
            caption: "Curve bending upward",
          },
          {
            points: [
              [0, 1.2],
              [0.3, 2.0],
              [0.6, 2.8],
              [0.9, 3.6],
            ],
            caption: "Straight line with an intercept",
          },
        ],
        correct: 1,
        ask: "v squared equals 2 a x, so v squared is proportional to x. What shape is a proportional relationship, and where must it start when x is 0?",
        hints: [
          "Proportional means a straight line through the origin.",
          "When x is 0 the speed is 0, so v squared is 0 there. The line must pass through the origin.",
        ],
        explain: "The correct graph is a straight line through the origin, because v squared equals 2 a x makes v squared proportional to x, so at x equals 0 the value is 0 and the gradient is 2a.",
      },
      {
        kind: "choice",
        question: "The v^2 against x line has gradient G = 3.40 m/s^2, and sin theta = 0.174. Find g using g = G / (2 sin theta).",
        options: ["19.5 m/s^2", "9.8 m/s^2", "0.59 m/s^2", "3.40 m/s^2"],
        correct: 1,
        ask: "Divide the gradient by 2 times sine theta. Work out 3.40 divided by 0.348.",
        hints: [
          "First find 2 times 0.174, which is 0.348.",
          "3.40 divided by 0.348 is about 9.8.",
        ],
        working: [
          { label: "Formula", latex: "g = \\dfrac{G}{2\\sin\\theta}" },
          { label: "Substitute", latex: "g = \\dfrac{3.40}{2 \\times 0.174}" },
          { label: "Answer", latex: "g = 9.8\\ \\text{m/s}^{2}" },
        ],
        explain: "g is 9.8 metres per second squared, because 2 times 0.174 is 0.348, and 3.40 divided by 0.348 is 9.8.",
      },
      {
        kind: "open",
        prompt: "State and explain one precaution that makes the measurement of the height h (or the slope length) accurate.",
        figure: "fig-pr2-11-ramp",
        modelAnswer: "Measure the height with a set square so the rule is truly vertical, and read the scale with your eye level with the mark to avoid parallax. Take the reading at a defined point (the underside of the raised end) and repeat it, averaging the values, so a single misjudged reading does not bias the result.",
        marks: [
          "A named precaution: rule vertical (use a set square) or line of sight perpendicular to the scale to avoid parallax.",
          "A clear reason: it removes a systematic offset or reading error in h.",
          "Repeat and average, or read at a defined fixed point, to reduce random error.",
        ],
        ask: "Think about how a tilted rule or an eye viewed at an angle would shift the reading, and what you would do to keep h consistent between runs.",
      },
      {
        kind: "insight",
        body: "The whole experiment turns a *stopwatch* and a *rule* into a value for *g*: time the run for v = 2x/t, plot *v^2 against x* for the gradient, then divide by 2 sin theta.",
        say: "Step back and see the chain. You only ever measure lengths with a rule and times with a stopwatch. From the times you get the final speed as 2 x over t. Plotting speed squared against distance gives a straight line whose gradient is twice the acceleration. Divide that gradient by 2 sine theta and out comes g, about 9.8 metres per second squared, from nothing more than a ramp, a cylinder, a rule and a stopwatch.",
      },
    ],
  },
];
