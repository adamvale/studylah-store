import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, Revision 1. Checkpoint over KB Chapter 06, sections t5.1 to t5.3:
// pressure P = F / A, density, and pressure in a liquid P = h rho g. Question-only.
// Figures follow the T5 colour key (applied force = yellow, weight/load = pink,
// liquid/water/jets = blue, tanks/tubes/depth guides = grey, solid block = white)
// and appear only on choice/open steps.

export const BOXES: Subconcept[] = [
  {
    id: "t5.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: pressure, density and pressure in a liquid",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "The same weight rests on 2 blocks. Block P sits on a large contact area and block Q sits on a small contact area. Which block exerts the greater pressure on the ground?",
        figure: "fig-06-01-force-area-blocks",
        options: ["Block Q, on the smaller area", "Block P, on the larger area", "Both exert equal pressure", "Neither exerts any pressure"],
        correct: 0,
        ask: "Pressure is force divided by area, so for the same force, ask which block spreads that force over the smaller area. Which option is that?",
        hints: [
          "Use P equals F divided by A, with the same force F on each block.",
          "A smaller area in the bottom of the fraction gives a larger pressure, so the small area wins.",
        ],
        explain: "Block Q exerts the greater pressure, because the same force acts over a smaller area. In P equals F divided by A, a smaller area gives a larger pressure.",
      },
      {
        kind: "choice",
        question: "A crate weighs 540 N and rests on a base 1.5 m by 0.60 m, an area of 0.90 m^2. What pressure does it exert on the floor?",
        options: ["600 Pa", "6000 Pa", "486 Pa", "900 Pa"],
        correct: 0,
        ask: "Pressure is force divided by area, so work out 540 ÷ 0.90.",
        hints: [
          "Use P equals F divided by A, with F of 540 newtons and A of 0.90 metres squared.",
          "540 ÷ 0.90 is 600, and pressure is measured in pascals.",
        ],
        working: [
          { label: "Formula", latex: "P = \\dfrac{F}{A}" },
          { label: "Substitute", latex: "P = \\dfrac{540}{0.90}" },
          { label: "Answer", latex: "P = 600\\ \\text{Pa}" },
        ],
        explain: "The pressure is 600 pascals, because 540 newtons divided by 0.90 metres squared is 600 pascals.",
      },
      {
        kind: "choice",
        question: "Two cubes are cut from the same metal. The larger cube has edges twice as long as the smaller. How does the density of the larger cube compare with the smaller?",
        figure: "fig-06-14-cubes-scaling",
        options: ["It is the same", "It is 2 times as large", "It is 8 times as large", "It is half as large"],
        correct: 0,
        ask: "Density is a property of the material itself. Ask whether cutting a bigger piece of the same metal changes its mass per unit volume.",
        hints: [
          "The larger cube has 8 times the volume, but it also has 8 times the mass.",
          "Mass divided by volume gives the same value for both, because they are the same metal.",
        ],
        explain: "The density is the same, because density depends on the material, not on the size or shape. The larger cube has 8 times the mass and 8 times the volume, so mass divided by volume is unchanged.",
      },
      {
        kind: "choice",
        question: "A plate lies 4.0 m below the surface of water of density 1000 kg/m^3, where g = 10 N/kg. What is the water pressure on the plate?",
        options: ["40000 Pa", "4000 Pa", "400000 Pa", "50000 Pa"],
        correct: 0,
        ask: "The pressure in a liquid is depth times density times g, so work out 4.0 × 1000 × 10.",
        hints: [
          "Use P equals h times rho times g.",
          "4.0 × 1000 is 4000, and 4000 × 10 is 40000.",
        ],
        working: [
          { label: "Formula", latex: "P = h\\rho g" },
          { label: "Substitute", latex: "P = 4.0 \\times 1000 \\times 10" },
          { label: "Answer", latex: "P = 40000\\ \\text{Pa}" },
        ],
        explain: "The pressure is 40000 pascals, because 4.0 metres times 1000 kilograms per metre cubed times 10 newtons per kilogram is 40000 pascals.",
      },
      {
        kind: "choice",
        question: "In the same liquid, object R sinks while object P floats. What does this tell you about their densities compared with the liquid?",
        figure: "fig-06-02-float-sink",
        options: ["R is denser than the liquid; P is less dense", "R is less dense than the liquid; P is denser", "Both are denser than the liquid", "Both are less dense than the liquid"],
        correct: 0,
        ask: "An object sinks when it is denser than the liquid and floats when it is less dense. Match each object to its case.",
        hints: [
          "R goes to the bottom, so its density must be greater than the liquid's.",
          "P stays up, so its density must be less than the liquid's.",
        ],
        explain: "R is denser than the liquid, which is why it sinks, and P is less dense than the liquid, which is why it floats. An object that suspends in the middle would have a density equal to the liquid's.",
      },
      {
        kind: "slider",
        prompt: "A metal object has mass 0.45 kg and volume 18 x 10^-6 m^3. Set the slider to its density, in kg/m^3.",
        min: 0,
        max: 40000,
        step: 500,
        unit: "kg/m^3",
        start: 0,
        targetMin: 24500,
        targetMax: 25500,
        ask: "Density is mass divided by volume, so work out 0.45 ÷ 18 × 10 to the power negative 6.",
        hints: [
          "Use density equals mass divided by volume.",
          "0.45 ÷ 18 × 10 to the power negative 6 is 25000, which is 2.5 × 10 to the power 4.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{0.45}{18 \\times 10^{-6}}" },
          { label: "Answer", latex: "\\rho = 2.5 \\times 10^{4}\\ \\text{kg/m}^3" },
        ],
        explain: "The density is 2.5 × 10 to the power 4 kilograms per metre cubed, because 0.45 kilograms divided by 18 × 10 to the power negative 6 metres cubed is 25000.",
      },
      {
        kind: "tiles",
        prompt: "A metal has density 1420 kg/m^3. Build the working line that converts this to g/cm^3.",
        tiles: ["1420", "\\div", "1000", "\\times", "=", "1.42", "g/cm^3", "kg/m^3"],
        answer: ["1420", "\\div", "1000", "=", "1.42", "g/cm^3"],
        ask: "To change kilograms per metre cubed into grams per centimetre cubed, divide by 1000, so set up 1420 ÷ 1000.",
        hints: [
          "1 gram per centimetre cubed equals 1000 kilograms per metre cubed.",
          "1420 ÷ 1000 is 1.42, and the answer is in grams per centimetre cubed.",
        ],
        working: [
          { label: "Formula", latex: "\\text{g/cm}^3 = \\text{kg/m}^3 \\div 1000" },
          { label: "Substitute", latex: "1420 \\div 1000" },
          { label: "Answer", latex: "1.42\\ \\text{g/cm}^3" },
        ],
        explain: "The density is 1.42 grams per centimetre cubed, because 1420 ÷ 1000 is 1.42. You divide by 1000 to go from kilograms per metre cubed to grams per centimetre cubed.",
      },
      {
        kind: "classify",
        prompt: "For the same force, sort each situation by the pressure it puts on the ground.",
        bins: ["Greater pressure", "Smaller pressure"],
        items: [
          { text: "A sharp knife edge", bin: 0 },
          { text: "Football boot studs", bin: 0 },
          { text: "A pair of skis", bin: 1 },
          { text: "Wide tractor tyres", bin: 1 },
        ],
        ask: "Pressure is force divided by area, so for the same force a smaller contact area gives a greater pressure. Tap each one and drop it in its bin.",
        hints: [
          "A knife edge and boot studs each press through a tiny area, so the pressure is large.",
          "Skis and wide tyres spread the force over a large area, so the pressure is small.",
        ],
        explain: "A knife edge and boot studs give a greater pressure, because the same force acts over a tiny area. Skis and wide tyres give a smaller pressure, because they spread the force over a large area.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of pressure in a liquid.",
        segments: [
          "The pressure in a liquid increases with ",
          ", and at a given depth it pushes in ",
          " directions. It does not depend on the ",
          " of the container, and it is found from ",
          ".",
        ],
        bank: ["depth", "all", "shape", "h rho g", "width", "area"],
        answer: ["depth", "all", "shape", "h rho g"],
        ask: "Recall what makes liquid pressure grow, which way it acts at a point, and the quantity that has no effect on it.",
        hints: [
          "Liquid pressure grows with depth and acts in every direction at a point.",
          "It is set by depth, density and g, so the container's shape does not matter.",
        ],
        explain: "Pressure in a liquid increases with depth and acts in all directions at a point. It does not depend on the shape of the container, and it is found from P equals h times rho times g.",
      },
      {
        kind: "order",
        prompt: "Put these steps for finding the density of a small irregular solid in order.",
        items: [
          "Measure the mass of the solid on a balance",
          "Note the starting water level in a measuring cylinder",
          "Lower the solid in and note the new water level",
          "Subtract the levels for the volume, then divide mass by volume",
        ],
        ask: "You need both a mass and a volume before you can divide. Think about how displacement gives the volume, then order the steps.",
        hints: [
          "Find the mass first, then use the change in water level to get the volume.",
          "The rise in level is the volume of the solid, and density is mass divided by that volume.",
        ],
        explain: "First measure the mass, then read the starting water level, then lower the solid in and read the new level. The rise in level is the volume, so finally divide the mass by that volume to get the density.",
      },
      {
        kind: "open",
        prompt: "Explain, using the idea of pressure, why the sharp edge of a knife cuts easily while a wide ski stops you from sinking into snow.",
        modelAnswer: "Pressure is force divided by area, P = F / A. A knife edge has a very small contact area, so for the same force the pressure is very large, large enough to cut. A ski has a large contact area, so the same weight is spread out and the pressure on the snow is small, so the ski does not sink in.",
        marks: [
          "Pressure is force divided by area, P = F / A.",
          "A small area (knife edge) gives a large pressure for the same force.",
          "A large area (ski) gives a small pressure, so it does not sink.",
        ],
        ask: "Think about the contact area in each case, and how a change in area changes the pressure when the force is the same.",
      },
      {
        kind: "open",
        prompt: "A tall tank of water has 3 holes at different depths. Explain why the water spurts out fastest and furthest from the lowest hole.",
        figure: "fig-06-06-tank-jets",
        modelAnswer: "The pressure in a liquid is P = h rho g, so it increases with depth h. The lowest hole is at the greatest depth, so the water pressure there is the greatest. A greater pressure pushes the water out faster, so the jet from the lowest hole travels the furthest. The pressure depends on the depth, not on the width or shape of the tank.",
        marks: [
          "Pressure in a liquid increases with depth, P = h rho g.",
          "The lowest hole is deepest, so the pressure there is greatest.",
          "A greater pressure gives a faster, longer jet.",
        ],
        ask: "Think about how the water pressure changes as you go deeper, and what a greater pressure does to the speed of the jet.",
      },
    ],
  },
];
