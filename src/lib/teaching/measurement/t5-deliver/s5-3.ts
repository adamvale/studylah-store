import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, section 3. Grounded in KB Chapter 06 (Pressure) section 6.3 (Pressure in a liquid).
// Figure colours follow the T5 brief: liquid and water jets = blue; tanks, vessels and depth/dimension
// guides = grey; atmospheric-pressure arrows = yellow; a solid object = white; a weight = pink.

export const BOXES: Subconcept[] = [
  {
    id: "t5.3",
    code: "T5.3",
    title: "Pressure in a liquid",
    blurb: "How pressure builds with depth in a liquid, whatever the container's shape",
    steps: [
      {
        kind: "concept",
        heading: "A liquid presses at every depth",
        figure: "fig-06-04-liquid-depth",
        body: "A *liquid* pushes on whatever it touches, because the liquid above any point has *weight*. This *pressure* grows with *depth* and acts equally in all directions.",
        formula: {
          latex: "P = h\\rho g",
          where: [
            { sym: "P", meaning: "pressure due to the liquid", unit: "Pa" },
            { sym: "h", meaning: "depth below the surface", unit: "m" },
            { sym: "\\rho", meaning: "density of the liquid", unit: "kg/m^3" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "In the picture, blue liquid fills a grey container. A grey guide line runs straight down from the surface to a point inside the liquid, marking the depth h. The column of blue liquid above that point has weight and presses down, and small blue arrows at the point fan out in every direction, showing the pressure acts all around, not just downward. Multiply the depth, the density and g, and you get that pressure, in pascals.",
      },
      {
        kind: "concept",
        heading: "Depth matters, shape does not",
        figure: "fig-06-05-same-level-pressure",
        body: "Liquid *pressure* depends only on the *depth*, not on the *shape* or *width* of the container.",
        say: "This figure shows several grey containers of different shapes, a wide one, a narrow one and a bent one, all joined at the base. The same blue liquid fills them and settles to exactly the same level in every one, marked by a grey dashed line across the top. At that level the pressure is identical, because the depth is the same, no matter how wide or oddly shaped the vessel is.",
      },
      {
        kind: "concept",
        heading: "Deeper holes, longer jets",
        figure: "fig-06-06-tank-jets",
        body: "The *deeper* a hole in a tank, the *greater* the *pressure*, so the water jet shoots out *faster* and reaches further.",
        say: "Here a tall grey tank is full of blue water, with 3 holes punched down one side. Hole A sits near the top, hole B in the middle, and hole C near the bottom. Blue jets of water spurt from all 3. From the shallow hole A the jet is short and weak and lands close to the tank. From the middle hole B the jet is stronger and reaches further. From the deepest hole C the jet is the fastest and longest, arcing out the farthest of all, because the pressure is greatest where the water is deepest.",
      },
      {
        kind: "concept",
        heading: "Total pressure adds the air",
        figure: "fig-06-07-total-pressure",
        body: "In an open liquid the *total pressure* adds the *atmospheric pressure* pushing on the surface to the liquid's own pressure.",
        formula: {
          latex: "P_{\\text{total}} = P_{\\text{atm}} + h\\rho g",
          where: [
            { sym: "P_{\\text{total}}", meaning: "total pressure on the object", unit: "Pa" },
            { sym: "P_{\\text{atm}}", meaning: "atmospheric pressure on the surface", unit: "Pa" },
            { sym: "h\\rho g", meaning: "pressure from the liquid above", unit: "Pa" },
          ],
        },
        say: "In this picture yellow arrows press straight down on the blue liquid surface, standing for the atmospheric pressure of the air above. A white object labelled X sits down in the liquid, and a grey guide marks its depth h below the surface. The total pressure squeezing object X is the yellow atmospheric pressure added to the liquid pressure, h times rho times g.",
      },
      {
        kind: "choice",
        question: "A flat plate lies 4.0 m below the surface of water of density 1000 kg/m^3 (g = 10 N/kg). Find the pressure the water exerts on the plate.",
        options: ["40000 Pa", "4000 Pa", "400 Pa", "50 Pa"],
        correct: 0,
        ask: "The liquid pressure is depth times density times g, so work out 4.0 times 1000 times 10.",
        hints: [
          "Use P equals h times rho times g.",
          "4.0 times 1000 times 10 is 40000, and pressure is in pascals.",
        ],
        working: [
          { label: "Formula", latex: "P = h\\rho g" },
          { label: "Substitute", latex: "P = 4.0 \\times 1000 \\times 10" },
          { label: "Answer", latex: "P = 40000\\ \\text{Pa}" },
        ],
        explain: "The pressure is 40000 pascals, because 4.0 metres times 1000 kilograms per cubic metre times 10 newtons per kilogram is 40000 pascals.",
      },
      {
        kind: "slider",
        prompt: "A liquid has density 900 kg/m^3 (g = 10 N/kg). Set the slider to the depth, in metres, at which the liquid pressure reaches 45000 Pa.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "m",
        start: 0,
        targetMin: 4.9,
        targetMax: 5.1,
        ask: "Rearrange P equals h times rho times g to get depth, so divide 45000 by 900 times 10, that is 45000 divided by 9000.",
        hints: [
          "The depth is the pressure divided by rho times g.",
          "900 times 10 is 9000, and 45000 divided by 9000 is 5.0, so slide to 5.0 metres.",
        ],
        working: [
          { label: "Formula", latex: "h = \\dfrac{P}{\\rho g}" },
          { label: "Substitute", latex: "h = \\dfrac{45000}{900 \\times 10}" },
          { label: "Answer", latex: "h = 5.0\\ \\text{m}" },
        ],
        explain: "The depth is 5.0 metres, because 45000 pascals divided by 9000, that is 900 times 10, is 5.0 metres.",
      },
      {
        kind: "choice",
        question: "Several connected vessels of different shapes and widths hold the same liquid, joined at the base. Compared at the same depth below the surface, the liquid pressure is:",
        figure: "fig-06-05-same-level-pressure",
        options: [
          "the same in every vessel",
          "greatest in the widest vessel",
          "greatest in the narrowest vessel",
          "greatest in the vessel holding the most liquid",
        ],
        correct: 0,
        ask: "Liquid pressure depends only on the depth, the density and g, not on the shape or width of the container.",
        hints: [
          "P equals h times rho times g has no term for shape or width.",
          "At the same depth in the same liquid the pressure is identical, whatever the vessel looks like.",
        ],
        explain: "The pressure is the same in every vessel, because P equals h times rho times g depends only on depth, density and g, not on the shape, width or amount of liquid.",
      },
      {
        kind: "order",
        prompt: "A tall tank of water has 3 holes: hole A near the top, hole B in the middle, and hole C near the bottom. Put the holes in order of the pressure at the hole, from smallest to largest.",
        items: [
          "Hole A near the top",
          "Hole B in the middle",
          "Hole C near the bottom",
        ],
        ask: "Pressure grows with depth, so the shallowest hole has the least pressure and the deepest hole has the most.",
        hints: [
          "Use P equals h times rho times g, where a deeper hole means a larger h.",
          "Hole A is shallowest so it has the smallest pressure, and hole C is deepest so it has the largest.",
        ],
        explain: "In order of increasing pressure it is A, then B, then C, because pressure rises with depth, and the deepest hole C also shoots out the longest, fastest jet.",
      },
      {
        kind: "cloze",
        prompt: "Complete the rule for the total pressure on an object at a depth in an open liquid.",
        segments: [
          "The total pressure is the ",
          " pressure pushing down on the surface plus the pressure from the ",
          " of liquid above the object.",
        ],
        bank: ["atmospheric", "weight", "shape", "width"],
        answer: ["atmospheric", "weight"],
        ask: "In an open liquid you add 2 pressures: the air pressing on the surface and the liquid pressure h times rho times g.",
        hints: [
          "The air above the surface adds atmospheric pressure.",
          "The term h times rho times g comes from the weight of the liquid column above the point.",
        ],
        explain: "The total pressure is the atmospheric pressure plus the pressure from the weight of the liquid above, which is h times rho times g.",
      },
      {
        kind: "insight",
        body: "Only *depth*, *density* and *g* set the liquid pressure, so a narrow tube and a wide tank feel the *same pressure* at the same level.",
        say: "Here is the takeaway. The pressure in a liquid is set by just 3 things, the depth, the density and g. Shape, width and the amount of liquid do not appear, so the pressure at a point is the same in a thin pipe as in a broad tank, as long as the depth matches. And in the open air, remember to add atmospheric pressure on top to get the total.",
      },
    ],
  },
];
