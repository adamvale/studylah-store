import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP4 Heat (Practical Chapter 4), section 6. Grounded in Practical Chapter 04 - Heat (Exp 4, 5).
// Figure colours follow the fig-pr4 house palette: heater/hot region = red, lagging = amber dashed,
// water/liquid/melt and the best-fit line = blue, ice/metal block = pale blue, funnel/balance/beaker/
// apparatus outlines and labels = white/grey, plotted-point crosses = amber, gradient triangle = green dashed.

export const BOXES: Subconcept[] = [
  {
    id: "tp4.6",
    code: "TP4.6",
    title: "Specific latent heat by electrical methods",
    blurb: "Measuring the specific latent heat of fusion and of vaporisation with a heater and a balance",
    steps: [
      {
        kind: "concept",
        heading: "Melting ice to find l_f",
        figure: "fig-pr4-08-latent-fusion",
        body: "To measure *l_f*, pack *crushed ice* at 0 degrees C into a funnel with a heater and collect the *melt* dripping into a beaker on a balance.",
        say: "This figure has 2 identical funnels side by side, each packed with pale blue crushed ice at 0 degrees Celsius. A red heater sits inside the left funnel, and both funnels drip melt water into white beakers standing on balances. The heater pours energy into the ice and turns solid into liquid without changing the temperature, so the mass collected tells us how much ice the heater melted.",
      },
      {
        kind: "concept",
        heading: "A control funnel corrects for the room",
        figure: "fig-pr4-08-latent-fusion",
        body: "The warm *room* also melts some ice, so an identical *control* funnel with its heater switched *off* measures that unwanted melting, which is then subtracted.",
        formula: {
          latex: "Pt = l_f\\,(m_1 - m_2)",
          where: [
            { sym: "P", meaning: "heater power", unit: "W" },
            { sym: "t", meaning: "time", unit: "s" },
            { sym: "l_f", meaning: "specific latent heat of fusion", unit: "J/kg" },
            { sym: "m_1", meaning: "mass melted in the heated funnel", unit: "kg" },
            { sym: "m_2", meaning: "mass melted in the control funnel", unit: "kg" },
          ],
        },
        say: "Look again at the right hand funnel, the control. Its heater is off, so anything it collects was melted only by the warm room, not by a heater. Whatever mass drips into the control also dripped into the heated funnel from the room. So if we take the heated mass and subtract the control mass, m one minus m 2, we are left with just the ice the heater melted. The heater energy, power times time, equals l f times that corrected mass.",
      },
      {
        kind: "insight",
        figure: "fig-pr4-09-fusion-graph",
        body: "Plot the *corrected mass* against *time*: a straight line of *gradient P/l_f*, so *l_f = P/gradient*.",
        formula: {
          latex: "l_f = \\dfrac{P}{\\text{gradient}}",
          where: [
            { sym: "l_f", meaning: "specific latent heat of fusion", unit: "J/kg" },
            { sym: "P", meaning: "heater power", unit: "W" },
            { sym: "gradient", meaning: "slope of corrected mass against time", unit: "kg/s" },
          ],
        },
        say: "This graph plots the corrected melted mass, m one minus m 2, up the side against time along the bottom. The amber crosses are the readings, and a blue best fit line runs straight through them. A green dashed triangle on the line shows its gradient. Because power times time equals l f times mass, that gradient is power over l f, so l f is simply the power divided by the gradient.",
      },
      {
        kind: "concept",
        heading: "Boiling water to find l_v",
        figure: "fig-pr4-10-latent-vaporisation",
        body: "To measure *l_v*, boil water *steadily* at 100 degrees C on a balance so all the energy goes into *vaporising* it.",
        formula: {
          latex: "Pt = l_v\\,m",
          where: [
            { sym: "P", meaning: "heater power", unit: "W" },
            { sym: "t", meaning: "time", unit: "s" },
            { sym: "l_v", meaning: "specific latent heat of vaporisation", unit: "J/kg" },
            { sym: "m", meaning: "mass of water boiled away", unit: "kg" },
          ],
        },
        say: "Here a red immersion heater boils blue water in a white beaker that sits on a top pan balance. Once the water is boiling steadily at 100 degrees Celsius its temperature no longer rises, so every joule from the heater goes into turning liquid into steam. Fit a lid with a small steam hole to cut heat loss, and take readings only after the boiling has settled. The heater energy, power times time, equals l v times the mass boiled away.",
      },
      {
        kind: "insight",
        figure: "fig-pr4-11-vaporisation-graph",
        body: "Plot the *mass evaporated* against *time*: a straight line of *gradient P/l_v*, so *l_v = P/gradient*.",
        formula: {
          latex: "l_v = \\dfrac{P}{\\text{gradient}}",
          where: [
            { sym: "l_v", meaning: "specific latent heat of vaporisation", unit: "J/kg" },
            { sym: "P", meaning: "heater power", unit: "W" },
            { sym: "gradient", meaning: "slope of mass evaporated against time", unit: "kg/s" },
          ],
        },
        say: "This graph plots the mass evaporated up the side against time along the bottom. Again the amber crosses are the readings and a blue best fit line runs straight through them, with a green dashed triangle marking the gradient. The steady slope confirms energy is arriving at a constant rate. The gradient equals power over l v, so l v is the power divided by the gradient.",
      },
      {
        kind: "choice",
        question: "In the fusion experiment, why is a second identical funnel of ice set up with its heater switched off?",
        figure: "fig-pr4-08-latent-fusion",
        options: [
          "To melt twice as much ice with the heater",
          "To keep the ice colder than 0 degrees C",
          "To measure the ice the warm room melts, so it can be subtracted",
          "To store a spare heater in case the first one fails",
        ],
        correct: 2,
        ask: "The heated funnel collects melt from 2 sources: the heater and the warm room. What does the control funnel, with no heater, measure on its own?",
        hints: [
          "The control funnel has no heater, so anything it collects was melted only by the room.",
          "Subtracting the control mass removes the room's melting and leaves just the heater's share.",
        ],
        explain: "The control funnel measures the ice melted by the warm room alone. Subtracting that from the heated funnel leaves only the ice the heater melted, so the corrected mass m1 minus m2 is used.",
      },
      {
        kind: "choice",
        question: "A fusion experiment gives a corrected mass-time graph of gradient 2.99 x 10^-4 kg s^-1 with a heater of power 100 W. Find l_f.",
        options: [
          "3.3 x 10^5 J/kg",
          "3.3 x 10^-5 J/kg",
          "2.99 x 10^4 J/kg",
          "3.0 x 10^7 J/kg",
        ],
        correct: 0,
        ask: "The specific latent heat of fusion is the power divided by the gradient. Work out 100 ÷ 2.99 × 10 to the power negative 4.",
        hints: [
          "Use l_f equals P divided by the gradient.",
          "100 ÷ 2.99 × 10 to the power negative 4 is about 3.3 × 10 to the power 5.",
        ],
        working: [
          { label: "Formula", latex: "l_f = \\dfrac{P}{\\text{gradient}}" },
          { label: "Substitute", latex: "l_f = \\dfrac{100}{2.99 \\times 10^{-4}}" },
          { label: "Answer", latex: "l_f = 3.3 \\times 10^{5}\\ \\text{J/kg}" },
        ],
        explain: "l_f is 3.3 × 10 to the power 5 joules per kilogram, because 100 watts divided by 2.99 × 10 to the power negative 4 kilograms per second is about 3.3 × 10 to the power 5.",
      },
      {
        kind: "choice",
        question: "If the control funnel is ignored and the total melted mass is used instead of the corrected mass, what happens to the value of l_f?",
        options: [
          "It comes out exactly right",
          "It comes out too small",
          "It comes out too large",
          "It does not change",
        ],
        correct: 1,
        ask: "Using the total mass makes the mass-time gradient bigger than it should be. Since l_f equals P divided by the gradient, what does a bigger gradient do to l_f?",
        hints: [
          "The room's extra melting adds mass that the heater did not supply, so the gradient is too big.",
          "l_f equals P divided by the gradient, so a gradient that is too big makes l_f too small.",
        ],
        explain: "l_f comes out too small. The room's melting adds extra mass, making the gradient too big, and since l_f equals power divided by gradient, a bigger gradient gives a smaller l_f.",
      },
      {
        kind: "order",
        prompt: "Put the steps of the steady-boiling l_v experiment in order.",
        items: [
          "Fit a lid with a steam hole and switch on the heater",
          "Wait until the water is boiling steadily at 100 degrees C",
          "Start the stopwatch and note the balance reading",
          "Record the falling mass at regular time intervals as steam escapes",
          "Plot mass evaporated against time and measure the gradient",
          "Calculate l_v as the power divided by the gradient",
        ],
        ask: "Readings only count once the boiling is steady, so heat the water first and let it settle before you start timing and recording masses.",
        hints: [
          "Switch on and wait for steady boiling before taking any readings.",
          "Time and record the falling mass, then plot mass against time and use l_v equals P divided by the gradient.",
        ],
        explain: "Switch on and reach steady boiling first, then time and record the falling mass, plot mass evaporated against time, and finally take l_v as the power divided by the gradient.",
      },
      {
        kind: "choice",
        question: "Steady boiling gives a mass-time graph of gradient 4.39 x 10^-5 kg s^-1 at a heater power of 100 W. Find l_v.",
        options: [
          "4.39 x 10^-5 J/kg",
          "2.3 x 10^5 J/kg",
          "4.4 x 10^6 J/kg",
          "2.3 x 10^6 J/kg",
        ],
        correct: 3,
        ask: "The specific latent heat of vaporisation is the power divided by the gradient. Work out 100 ÷ 4.39 × 10 to the power negative 5.",
        hints: [
          "Use l_v equals P divided by the gradient.",
          "100 ÷ 4.39 × 10 to the power negative 5 is about 2.3 × 10 to the power 6.",
        ],
        working: [
          { label: "Formula", latex: "l_v = \\dfrac{P}{\\text{gradient}}" },
          { label: "Substitute", latex: "l_v = \\dfrac{100}{4.39 \\times 10^{-5}}" },
          { label: "Answer", latex: "l_v = 2.3 \\times 10^{6}\\ \\text{J/kg}" },
        ],
        explain: "l_v is 2.3 × 10 to the power 6 joules per kilogram, because 100 watts divided by 4.39 × 10 to the power negative 5 kilograms per second is about 2.3 × 10 to the power 6.",
      },
      {
        kind: "slider",
        prompt: "A 60 W heater boils water steadily and the balance loses mass at 2.67 x 10^-5 kg s^-1. Set the slider to l_v, in units of x 10^6 J/kg.",
        min: 0,
        max: 3,
        step: 0.1,
        unit: "x 10^6 J/kg",
        start: 0,
        targetMin: 2.2,
        targetMax: 2.4,
        ask: "l_v is the power divided by the gradient, so work out 60 ÷ 2.67 × 10 to the power negative 5, then read it in units of 10 to the power 6.",
        hints: [
          "Use l_v equals P divided by the gradient.",
          "60 ÷ 2.67 × 10 to the power negative 5 is about 2.3 × 10 to the power 6, so slide to 2.3.",
        ],
        working: [
          { label: "Formula", latex: "l_v = \\dfrac{P}{\\text{gradient}}" },
          { label: "Substitute", latex: "l_v = \\dfrac{60}{2.67 \\times 10^{-5}}" },
          { label: "Answer", latex: "l_v = 2.3 \\times 10^{6}\\ \\text{J/kg}" },
        ],
        explain: "l_v is about 2.3 × 10 to the power 6 joules per kilogram, because 60 watts divided by 2.67 × 10 to the power negative 5 kilograms per second is about 2.3 × 10 to the power 6.",
      },
    ],
  },
];
