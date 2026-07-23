import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, section 4. Grounded in KB Chapter 06 (Pressure) section on transmission of pressure.
// Figure colours follow the T5 colour key: input/applied force = yellow, output force F2 = green,
// liquid = blue, pistons/cylinders/containers = grey, solid block = white, load/weight = pink.

export const BOXES: Subconcept[] = [
  {
    id: "t5.4",
    code: "T5.4",
    title: "Transmission and the hydraulic press",
    blurb: "How a liquid passes pressure on equally, and multiplies a force",
    steps: [
      {
        kind: "concept",
        heading: "Pressure passes through a liquid",
        figure: "fig-06-08-pascal",
        body: "A liquid is almost *incompressible*, so a *pressure* applied to it is *transmitted* *equally* to every part of the liquid. This is Pascal's principle.",
        say: "In the picture a yellow arrow presses down on a piston at the top, and that is the applied force F. The container below is full of blue liquid, and short blue arrows point outward in all directions to show the pressure reaching every part equally. Because a liquid barely squashes, any pressure you add is passed on undimmed to every corner of it. That is Pascal's principle.",
      },
      {
        kind: "concept",
        heading: "A hydraulic press multiplies force",
        figure: "fig-06-09-hydraulic-press",
        body: "A *hydraulic press* is a *force multiplier*: the same pressure acting on a *larger* piston gives a larger force, so a small input force gives a large output force.",
        formula: {
          latex: "\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}",
          where: [
            { sym: "F_1", meaning: "input force on the small piston", unit: "N" },
            { sym: "A_1", meaning: "area of the small piston", unit: "m^2" },
            { sym: "F_2", meaning: "output force on the large piston", unit: "N" },
            { sym: "A_2", meaning: "area of the large piston", unit: "m^2" },
          ],
        },
        say: "This figure shows 2 grey pistons joined by blue liquid. On the left a small grey piston M has a yellow input arrow F1 pushing down on its small area A1. On the right a larger grey piston N carries a green output arrow F2 on its large area A2. The input force sets up a pressure in the blue liquid, and that same pressure acts on the bigger piston. A bigger area times the same pressure means a bigger force, so a gentle push on the small side lifts a heavy load on the large side.",
      },
      {
        kind: "concept",
        heading: "Trapped air spoils it",
        body: "*Trapped air* in the liquid makes a hydraulic system *inefficient*, because air is easily *compressible*, so the push squashes the air instead of moving the load.",
        say: "There is one thing that ruins a hydraulic press. If a bubble of air gets trapped in the liquid, the system turns spongy. Air, unlike the liquid, is easily compressed, so when you push the small piston the trapped air simply squashes down and swallows the effort, instead of that pressure passing straight through to lift the load. That is why hydraulic brakes and jacks must be bled to remove any air.",
      },
      {
        kind: "choice",
        question: "A sealed liquid is squeezed by a piston. What happens to the extra pressure?",
        options: [
          "It is transmitted equally to every part of the liquid",
          "It stays only in the liquid just under the piston",
          "It acts only in the downward direction",
          "It makes the liquid shrink to a much smaller volume",
        ],
        correct: 0,
        ask: "A liquid is almost incompressible, and Pascal's principle tells you where an applied pressure ends up.",
        hints: [
          "Think about whether the pressure stays local or reaches all of the liquid.",
          "By Pascal's principle the pressure is passed on equally in every direction.",
        ],
        explain: "The extra pressure is transmitted equally to every part of the liquid, because the liquid is almost incompressible and Pascal's principle applies.",
      },
      {
        kind: "slider",
        prompt: "In a hydraulic press an input force of 30 N acts on a small piston of area 3.0 cm^2. The large piston has area 60 cm^2. Set the slider to the output force, in newtons.",
        min: 0,
        max: 800,
        step: 10,
        unit: "N",
        start: 0,
        targetMin: 595,
        targetMax: 605,
        ask: "First find the pressure, which is 30 divided by 3.0. Then multiply that pressure by the large area, 60.",
        hints: [
          "The pressure is 30 divided by 3.0, which is 10 newtons per square centimetre.",
          "The output force is 10 times 60, which is 600, so slide to 600 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F_2 = \\dfrac{F_1}{A_1} \\times A_2" },
          { label: "Substitute", latex: "F_2 = \\dfrac{30}{3.0} \\times 60" },
          { label: "Answer", latex: "F_2 = 600\\ \\text{N}" },
        ],
        explain: "The output force is 600 newtons, because the pressure is 30 newtons divided by 3.0 square centimetres, which is 10 newtons per square centimetre, and 10 times 60 square centimetres is 600 newtons.",
      },
      {
        kind: "order",
        prompt: "Put the steps of a hydraulic press in order, from the input push to the lifted load.",
        items: [
          "A small input force pushes down on the small piston",
          "This sets up a pressure in the trapped liquid",
          "The pressure is transmitted equally through the liquid",
          "The same pressure acts on the large piston",
          "The large area gives a bigger output force that lifts the load",
        ],
        ask: "Start with the force you supply, follow the pressure through the liquid, and finish with the load being lifted.",
        hints: [
          "The chain begins with the small input force and the pressure it makes.",
          "The same pressure on the larger area is what produces the bigger output force at the end.",
        ],
        explain: "The small input force makes a pressure, that pressure is transmitted equally through the liquid to the large piston, and the large area turns it into a bigger output force that lifts the load.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement about a hydraulic system as true or false.",
        bins: ["True", "False"],
        items: [
          { text: "The liquid is almost incompressible, so it passes pressure on well", bin: 0 },
          { text: "Trapped air is compressible, so it makes the press inefficient", bin: 0 },
          { text: "A larger output piston gives a larger output force for the same pressure", bin: 0 },
          { text: "Trapped air makes a hydraulic press work better", bin: 1 },
        ],
        ask: "Recall that the liquid should be incompressible, while air is easily squashed. Tap each statement and drop it in its bin.",
        hints: [
          "An incompressible liquid passes pressure on well, and a bigger piston gives a bigger force.",
          "Air is compressible, so trapped air always harms a hydraulic press, never helps it.",
        ],
        explain: "The liquid being incompressible and a larger piston giving a larger force are both true, and trapped air makes the press inefficient because air is compressible, so the claim that air helps is false.",
      },
      {
        kind: "insight",
        body: "A hydraulic press wins because the *same pressure* acts on a *larger area*, turning a small *input force* into a large *output force*.",
        say: "Here is the idea to keep. A hydraulic press does not create energy from nothing. It simply lets one pressure act on 2 different areas. The small piston sets the pressure, and the same pressure pressing on the larger piston gives a much larger force. Keep the liquid free of air, and that small input force lifts a heavy load.",
      },
    ],
  },
];
