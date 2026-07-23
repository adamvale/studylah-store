import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, section 2. Grounded in KB Chapter 06 (Pressure) section on density.
// Figure colours follow the T5 brief: liquid/water = blue, tanks/tubes/cylinders and dimension
// guides = grey, a solid object or block = white, weight/load = pink.

export const BOXES: Subconcept[] = [
  {
    id: "t5.2",
    code: "T5.2",
    title: "Density",
    blurb: "Mass packed into a volume, and why some things float while others sink",
    steps: [
      {
        kind: "concept",
        heading: "Density is mass per unit volume",
        body: "*Density* tells you how much *mass* is packed into each unit of *volume*. Its SI unit is the kilogram per cubic metre, though the gram per cubic centimetre is also common.",
        formula: {
          latex: "\\rho = \\dfrac{m}{V}",
          where: [
            { sym: "\\rho", meaning: "density", unit: "kg/m^3" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "V", meaning: "volume", unit: "m^3" },
          ],
        },
        say: "Density is a measure of how tightly matter is squeezed together. Take the mass of an object and divide by its volume, and you get its density. In SI units that is kilograms per cubic metre, but you will often meet grams per cubic centimetre too. One useful link is that 1 gram per cubic centimetre equals 1000 kilograms per cubic metre.",
      },
      {
        kind: "concept",
        heading: "Float, suspend or sink",
        figure: "fig-06-02-float-sink",
        body: "An object *floats* if its density is less than the liquid's, it *sinks* if its density is greater, and it *suspends* in the middle if the 2 densities are equal.",
        say: "This figure shows a tank of blue liquid, labelled L, with 3 white objects in it. Object P is less dense than the liquid, so it floats near the top. Object Q has exactly the same density as the liquid, so it hangs suspended in the middle, neither rising nor falling. Object R is denser than the liquid, so it sinks to the bottom. Comparing densities tells you at a glance what an object will do.",
      },
      {
        kind: "concept",
        heading: "Measuring an irregular solid",
        figure: "fig-06-03-measure-density",
        body: "To find the density of an *irregular* solid, weigh it on a *balance* for its mass, then read its *volume* from the liquid it displaces in a measuring cylinder.",
        say: "This figure shows how to measure density by displacement. On the left a white solid sits on a balance that reads 125.0 grams, giving its mass. On the right stands a grey measuring cylinder holding blue liquid. The liquid starts at volume V1. When the white solid is lowered in and fully submerged, the level rises to V2. The volume of the solid is simply V2 minus V1, the space the liquid was pushed aside to make.",
      },
      {
        kind: "choice",
        question: "A metal object weighs 4.5 N, so its mass is 0.45 kg (g = 10 N/kg). Lowered into a measuring cylinder, it raises the liquid from 45 cm^3 to 63 cm^3. Find its density.",
        options: ["2.5 x 10^4 kg/m^3", "2.5 x 10^3 kg/m^3", "0.025 kg/m^3", "40 kg/m^3"],
        correct: 0,
        ask: "The volume is 63 minus 45, in cubic centimetres. Change it to cubic metres by multiplying by 10^-6, then divide the mass by the volume.",
        hints: [
          "The displaced volume is 63 minus 45, which is 18 cm^3, and 18 cm^3 is 18 times 10 to the power -6 cubic metres.",
          "Density is 0.45 divided by 18 times 10 to the power -6, which is 2.5 times 10 to the power 4.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{0.45}{18 \\times 10^{-6}}" },
          { label: "Answer", latex: "\\rho = 2.5 \\times 10^{4}\\ \\text{kg/m}^3" },
        ],
        explain: "The density is 2.5 times 10 to the power 4 kilograms per cubic metre, because the displaced volume of 18 cubic centimetres is 18 times 10 to the power -6 cubic metres, and 0.45 divided by that is 2.5 times 10 to the power 4.",
      },
      {
        kind: "classify",
        prompt: "Water has a density of 1000 kg/m^3. Sort each object by whether it floats on water or sinks in it.",
        bins: ["Floats on water", "Sinks in water"],
        items: [
          { text: "Cork, 240 kg/m^3", bin: 0 },
          { text: "Ice, 920 kg/m^3", bin: 0 },
          { text: "Aluminium, 2700 kg/m^3", bin: 1 },
          { text: "Steel, 7900 kg/m^3", bin: 1 },
        ],
        ask: "Compare each density with the water's 1000. Anything less than 1000 floats, anything more than 1000 sinks. Tap each object and drop it in its bin.",
        hints: [
          "Cork at 240 and ice at 920 are both below 1000, so they float.",
          "Aluminium at 2700 and steel at 7900 are both above 1000, so they sink.",
        ],
        explain: "Cork and ice float because their densities, 240 and 920, are less than water's 1000. Aluminium and steel sink because 2700 and 7900 are greater than 1000.",
      },
      {
        kind: "tiles",
        prompt: "A liquid has a density of 1420 kg/m^3. Build the working line that converts it to g/cm^3.",
        tiles: ["1420", "\\div", "1000", "=", "1.42", "g/cm^3", "\\times", "kg/m^3"],
        answer: ["1420", "\\div", "1000", "=", "1.42", "g/cm^3"],
        ask: "To go from kilograms per cubic metre to grams per cubic centimetre, divide by 1000. Set up 1420 divided by 1000.",
        hints: [
          "Dividing by 1000 shifts the value down: 1420 divided by 1000.",
          "1420 divided by 1000 is 1.42, and the unit becomes grams per cubic centimetre.",
        ],
        working: [
          { label: "Formula", latex: "\\text{g/cm}^3 = \\dfrac{\\text{kg/m}^3}{1000}" },
          { label: "Substitute", latex: "= \\dfrac{1420}{1000}" },
          { label: "Answer", latex: "= 1.42\\ \\text{g/cm}^3" },
        ],
        explain: "1420 kilograms per cubic metre is 1.42 grams per cubic centimetre, because converting from kilograms per cubic metre to grams per cubic centimetre means dividing by 1000.",
      },
      {
        kind: "choice",
        question: "Cooking oil has a density of 0.680 g/cm^3. What is this in kg/m^3?",
        options: ["680 kg/m^3", "68 kg/m^3", "6800 kg/m^3", "0.00068 kg/m^3"],
        correct: 0,
        ask: "To go from grams per cubic centimetre to kilograms per cubic metre, multiply by 1000. Work out 0.680 times 1000.",
        hints: [
          "Multiplying by 1000 shifts the value up: 0.680 times 1000.",
          "0.680 times 1000 is 680, in kilograms per cubic metre.",
        ],
        working: [
          { label: "Formula", latex: "\\text{kg/m}^3 = \\text{g/cm}^3 \\times 1000" },
          { label: "Substitute", latex: "= 0.680 \\times 1000" },
          { label: "Answer", latex: "= 680\\ \\text{kg/m}^3" },
        ],
        explain: "0.680 grams per cubic centimetre is 680 kilograms per cubic metre, because converting from grams per cubic centimetre to kilograms per cubic metre means multiplying by 1000.",
      },
      {
        kind: "insight",
        body: "Whether something floats comes down to *density*, not *weight*: a heavy steel ship floats because its shape traps air and lowers its *average density* below the water's.",
        say: "Here is the idea to carry away. Floating is decided by density, not by how heavy something is. A steel ship weighs thousands of newtons, yet it floats, because its hull is mostly hollow and traps air. That drops the ship's average density below the density of water, and anything less dense than the liquid floats.",
      },
    ],
  },
];
