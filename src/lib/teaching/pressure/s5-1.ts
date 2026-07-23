import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, section 1. Grounded in KB Chapter 06 (Pressure) section 6.1.
// Figure colours follow the T5 colour key: applied force / downward push F = yellow,
// weight or load = pink, liquid = blue, tanks/pistons/dimension guides = grey, solid block = white.

export const BOXES: Subconcept[] = [
  {
    id: "t5.1",
    code: "T5.1",
    title: "Pressure",
    blurb: "How the same force spreads over an area, and why area decides the pressure",
    steps: [
      {
        kind: "concept",
        heading: "What pressure means",
        body: "*Pressure* is the *force* acting at *right angles* on each unit of *area*. Its SI unit is the pascal, where 1 pascal is 1 newton per square metre.",
        formula: {
          latex: "P = \\dfrac{F}{A}",
          where: [
            { sym: "P", meaning: "pressure", unit: "Pa" },
            { sym: "F", meaning: "force acting at right angles to the area", unit: "N" },
            { sym: "A", meaning: "area the force acts on", unit: "m^2" },
          ],
        },
        say: "Pressure tells you how concentrated a force is. Take the force pressing straight onto a surface and divide it by the area it presses on. The answer is in pascals, and 1 pascal is just 1 newton spread over 1 square metre.",
      },
      {
        kind: "concept",
        heading: "Same force, different area",
        figure: "fig-06-01-force-area-blocks",
        body: "For the *same force*, a *smaller* contact area gives a *greater* pressure, and a *larger* area gives a smaller pressure.",
        say: "This picture has 2 white blocks standing on grey ground. The block labelled P sits on a wide base, so the same yellow force F pressing down on it is spread over a large area and the pressure is small. The block labelled Q sits on a narrow base, so that identical yellow force is squeezed onto a tiny area and the pressure is much greater. Same force, but the area decides the pressure.",
      },
      {
        kind: "concept",
        heading: "Sharp or wide on purpose",
        body: "We *shrink* the area to raise pressure, as with a *knife edge* or boot studs, and we *spread* the area to lower it, as with *skis* or wide foundations.",
        say: "Engineers pick the area on purpose. A knife edge or a pair of boot studs press on a tiny area, so even a modest force makes a huge pressure that cuts or grips. Skis, camel feet and wide building foundations do the opposite: they spread the weight over a big area so the pressure stays low and nothing sinks in.",
      },
      {
        kind: "concept",
        heading: "Keep the area in square metres",
        body: "To get pressure in *pascals*, the area must be in *square metres*. Remember that 1 square centimetre is a tiny fraction of a square metre.",
        formula: {
          latex: "1\\ \\text{cm}^2 = 10^{-4}\\ \\text{m}^2",
        },
        say: "One trap catches many students: the units of area. To end up with pascals you must put the area in square metres. A square centimetre is small, only 10 to the power minus 4 square metres, so always convert before you divide.",
      },
      {
        kind: "choice",
        question: "For the same pushing force, why does a sharp knife cut more easily than a blunt one?",
        options: [
          "The sharp edge has a smaller area, so the pressure is greater",
          "The sharp edge has a larger area, so the pressure is greater",
          "The sharp edge has a smaller area, so the force is greater",
          "The sharp edge changes the size of the force",
        ],
        correct: 0,
        ask: "The force is the same for both knives. Think about which one puts that force on the smaller area, and what a smaller area does to the pressure.",
        hints: [
          "Pressure is force divided by area, so the same force on a smaller area gives more pressure.",
          "A sharp edge touches along a very thin line, a much smaller area than a blunt edge.",
        ],
        explain: "The sharp edge presses the same force onto a much smaller area, so the pressure is greater and it cuts more easily. The force itself does not change, only the pressure.",
      },
      {
        kind: "choice",
        question: "A crate weighs 540 N and stands on a base 1.5 m by 0.60 m, an area of 0.90 m^2. Find the pressure on the floor.",
        options: ["600 Pa", "486 Pa", "60 Pa", "6000 Pa"],
        correct: 0,
        ask: "Use pressure equals force divided by area, so work out 540 ÷ 0.90.",
        hints: [
          "The base area is already 0.90 square metres, so divide the weight by it.",
          "540 ÷ 0.90 is 600, and pressure is measured in pascals.",
        ],
        working: [
          { label: "Formula", latex: "P = \\dfrac{F}{A}" },
          { label: "Substitute", latex: "P = \\dfrac{540}{0.90}" },
          { label: "Answer", latex: "P = 600\\ \\text{Pa}" },
        ],
        explain: "The pressure is 600 pascals, because 540 newtons divided by 0.90 square metres is 600 pascals.",
      },
      {
        kind: "slider",
        prompt: "A cabinet weighs 84 N and rests on 4 feet. Each foot touches the floor over 0.00070 m^2. Set the slider to the pressure under one foot, in pascals.",
        min: 0,
        max: 40000,
        step: 1000,
        unit: "Pa",
        start: 0,
        targetMin: 29500,
        targetMax: 30500,
        ask: "First share the 84 newtons between the 4 feet, so each foot carries 84 ÷ 4. Then divide that force by the area of one foot.",
        hints: [
          "84 ÷ 4 is 21, so each foot presses down with 21 newtons.",
          "21 ÷ 0.0007 is 30000, so slide to 30000 pascals.",
        ],
        working: [
          { label: "Formula", latex: "P = \\dfrac{F}{A}" },
          { label: "Substitute", latex: "P = \\dfrac{21}{0.00070}" },
          { label: "Answer", latex: "P = 30000\\ \\text{Pa}" },
        ],
        explain: "Each foot carries a quarter of the weight, 21 newtons, on 0.0007 square metres, so the pressure is 21 ÷ 0.0007, which is 30000 pascals. That is far more than the whole cabinet on a wide base would give.",
      },
      {
        kind: "classify",
        prompt: "Sort each situation by the pressure it puts on the ground, for the same weight.",
        bins: ["Greater pressure", "Less pressure"],
        items: [
          { text: "Standing in stiletto heels", bin: 0 },
          { text: "A drawing pin pushed by its point", bin: 0 },
          { text: "Standing on skis", bin: 1 },
          { text: "A camel's wide feet on sand", bin: 1 },
        ],
        ask: "The weight is fixed, so pressure depends only on the contact area. A small area means greater pressure. Tap each situation and drop it in its bin.",
        hints: [
          "Heels and a pin point touch a tiny area, so they make a large pressure.",
          "Skis and wide feet spread the weight over a big area, so the pressure is small.",
        ],
        explain: "Stiletto heels and a pin point press on a tiny area, so the pressure is greater. Skis and wide camel feet spread the same weight over a large area, so the pressure is less.",
      },
      {
        kind: "insight",
        body: "Because *pressure* is *force* divided by *area*, you can change the pressure without changing the force at all, just by choosing the *area* the force acts on.",
        say: "Here is the idea to keep. Pressure is force divided by area, so the area is a lever in your hands. Keep the force the same but shrink the area and the pressure shoots up, like a knife edge. Spread the area and the pressure drops, like a ski. The force never had to change.",
      },
    ],
  },
];
