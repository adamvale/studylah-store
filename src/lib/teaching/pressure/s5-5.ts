import type { Subconcept } from "@/lib/teaching/subconcepts";

// T5 Pressure, section 5. Grounded in KB Chapter 06 (Pressure) section on atmospheric pressure and the barometer.
// Figure colours follow the T5 colour key: atmospheric-pressure arrows = yellow, mercury/liquid = blue,
// tube/reservoir/height guides = grey, the vacuum at the sealed top is an empty gap (no colour).

export const BOXES: Subconcept[] = [
  {
    id: "t5.5",
    code: "T5.5",
    title: "Atmospheric pressure and the barometer",
    blurb: "How the air presses down, and how a mercury barometer measures it",
    steps: [
      {
        kind: "concept",
        heading: "The air has weight",
        body: "The *atmosphere* has weight, so it presses down on everything as *atmospheric pressure*. At sea level 1 atmosphere balances a column of *mercury* 76 cm tall.",
        formula: {
          latex: "1\\ \\text{atm} = 76\\ \\text{cm Hg} = 1.013 \\times 10^5\\ \\text{Pa}",
        },
        say: "The air around us is not weightless. It stacks up many kilometres high, and all that air has weight, so it presses down on every surface as atmospheric pressure. At sea level 1 atmosphere is enough to hold up a column of mercury 76 centimetres tall, which works out to 1.013 times 10 to the power 5 pascals.",
      },
      {
        kind: "concept",
        heading: "The mercury barometer",
        figure: "fig-06-10-barometer",
        body: "A *barometer* is a glass tube full of mercury, turned upside down into a reservoir. The mercury falls until *atmospheric pressure* holds up a 76 cm column, leaving a *vacuum* at the sealed top.",
        say: "In the picture a grey glass tube stands upright with its lower end dipping into a grey reservoir, and both are filled with blue mercury. At the sealed top of the tube there is an empty gap, the vacuum, because the mercury has fallen away from it. Yellow arrows press down on the mercury in the reservoir to show atmospheric pressure, and a grey guide marks the 76 centimetre vertical height of the column. Mercury is used because it is very dense, so a short column only 76 centimetres tall is enough to balance the air. Water is about 14 times less dense, so a water barometer would need a tube roughly 10 metres tall.",
      },
      {
        kind: "concept",
        heading: "Tilting changes nothing",
        figure: "fig-06-11-tilted-barometer",
        body: "*Tilting* the tube does not change the *vertical height* of the mercury. The column still measures 76 cm straight up, because only the vertical height balances the *atmospheric pressure*.",
        say: "This figure shows the same barometer leaning over to one side. The grey tube is tilted, and blue mercury now fills more of its length, but a grey vertical guide shows that the height measured straight up is still 76 centimetres. The empty vacuum sits at the sealed upper end. You can tilt it as far as you like, but only the vertical height balances the air, so the reading stays at 76 centimetres of mercury.",
      },
      {
        kind: "concept",
        heading: "Pressure at a point",
        figure: "fig-06-15-barometer-points",
        body: "The *pressure* at any point equals the *vertical height* of mercury standing above it. Move *down* and you add that height; move *up* and you subtract it.",
        formula: {
          latex: "P = h\\rho g",
          where: [
            { sym: "P", meaning: "pressure at the point", unit: "Pa" },
            { sym: "h", meaning: "vertical height of mercury above the point", unit: "m" },
            { sym: "\\rho", meaning: "density of mercury", unit: "kg/m^3" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "Here the barometer is marked with 3 points on the blue mercury. Point A sits high up, 22 centimetres below the top surface of the column, shown by a grey guide. Point B is level with the mercury in the reservoir, 76 centimetres below the top. Point C is 4 centimetres below the reservoir surface, deeper still, marked by another grey guide. The empty vacuum is at the top. To find the pressure at a point, read the vertical height of mercury above it. Going down you add the extra height, and going up you subtract it.",
      },
      {
        kind: "choice",
        question: "Why is mercury, and not water, used in a barometer?",
        figure: "fig-06-10-barometer",
        options: [
          "Mercury is very dense, so a short 76 cm column balances the atmosphere",
          "Mercury is lighter than water, so it climbs higher up the tube",
          "Water cannot leave a vacuum above it",
          "Mercury boils away and that is what forms the vacuum",
        ],
        correct: 0,
        ask: "Think about density. A denser liquid needs a shorter column to push back against the same air pressure.",
        hints: [
          "Mercury is about 14 times denser than water.",
          "A water barometer would need a tube about 10 metres tall, but mercury needs only 76 centimetres.",
        ],
        explain: "Mercury is chosen because it is very dense, so a column only 76 centimetres tall balances the atmosphere. Water is far less dense, so it would need a tube about 10 metres tall.",
      },
      {
        kind: "choice",
        question: "Point C is 4 cm below the reservoir level, where the pressure is 76 cm Hg. What is the pressure at C?",
        figure: "fig-06-15-barometer-points",
        options: ["80 cm Hg", "72 cm Hg", "76 cm Hg", "4 cm Hg"],
        correct: 0,
        ask: "Going down from the reservoir level, add the extra vertical height. Work out 76 plus 4.",
        hints: [
          "Moving deeper into the mercury raises the pressure, so you add the depth.",
          "76 plus 4 is 80, measured in centimetres of mercury.",
        ],
        working: [
          { label: "Formula", latex: "P_C = P_B + h" },
          { label: "Substitute", latex: "P_C = 76 + 4" },
          { label: "Answer", latex: "P_C = 80\\ \\text{cm Hg}" },
        ],
        explain: "The pressure at C is 80 cm Hg, because C is 4 centimetres below the reservoir level, so you add 4 to the 76 centimetres there. For comparison, point A reads 22 cm Hg and point B reads 76 cm Hg.",
      },
      {
        kind: "tiles",
        prompt: "1 atmosphere is a 76 cm (0.76 m) column of mercury, density 1.36 x 10^4 kg/m^3, with g = 10 N/kg. Build the working line for the pressure in pascals.",
        tiles: ["P =", "0.76", "\\times", "1.36 \\times 10^4", "\\times", "10", "=", "1.03 \\times 10^5", "Pa", "cm Hg"],
        answer: ["P =", "0.76", "\\times", "1.36 \\times 10^4", "\\times", "10", "=", "1.03 \\times 10^5", "Pa"],
        ask: "Use P equals h times rho times g, with h equal to 0.76 metres. Multiply 0.76 by 1.36 times 10 to the power 4, then by 10.",
        hints: [
          "The height must be in metres, so 76 centimetres is 0.76 metres.",
          "0.76 times 1.36 times 10 to the power 4 times 10 is 1.03 times 10 to the power 5 pascals.",
        ],
        working: [
          { label: "Formula", latex: "P = h\\rho g" },
          { label: "Substitute", latex: "P = 0.76 \\times (1.36 \\times 10^4) \\times 10" },
          { label: "Answer", latex: "P = 1.03 \\times 10^5\\ \\text{Pa}" },
        ],
        explain: "The atmospheric pressure is 1.03 times 10 to the power 5 pascals, because 0.76 metres times 1.36 times 10 to the power 4 kilograms per cubic metre times 10 newtons per kilogram is 1.03 times 10 to the power 5 pascals.",
      },
      {
        kind: "match",
        prompt: "Match each point in the barometer to its pressure in cm Hg.",
        pairs: [
          { left: "Point A, 22 cm below the top surface", right: "22 cm Hg" },
          { left: "Point B, level with the reservoir", right: "76 cm Hg" },
          { left: "Point C, 4 cm below the reservoir", right: "80 cm Hg" },
        ],
        ask: "The pressure at a point is the vertical height of mercury standing above it, so read the height for each point.",
        hints: [
          "Point A has 22 centimetres of mercury above it, and point B has the full 76 centimetres.",
          "Point C is 4 centimetres below the reservoir, so add 4 to 76 to get 80.",
        ],
        explain: "Point A reads 22 cm Hg, point B reads 76 cm Hg at reservoir level, and point C reads 80 cm Hg because it is 4 centimetres deeper.",
      },
      {
        kind: "choice",
        question: "A mercury barometer reads 76 cm Hg. The tube is then tilted to one side. What is the new reading?",
        options: [
          "76 cm Hg, because the vertical height is unchanged",
          "More than 76 cm Hg",
          "Less than 76 cm Hg",
          "Zero, because the mercury runs out of the tube",
        ],
        correct: 0,
        ask: "Only the vertical height of the column balances the atmosphere. Tilting changes the length along the tube, not the height straight up.",
        hints: [
          "More mercury enters the tilted tube, but you measure the height straight up.",
          "The vertical height stays 76 centimetres, so the reading does not change.",
        ],
        explain: "The reading is still 76 cm Hg, because atmospheric pressure balances the vertical height of the column, and tilting does not change that vertical height.",
      },
      {
        kind: "insight",
        body: "A barometer measures the *atmosphere* by balancing it against a *vertical* mercury column, so the reading falls if *air* is trapped above the mercury or at higher *altitude*.",
        say: "Here is the idea to keep. A barometer weighs the atmosphere by letting it hold up a column of mercury, and only the vertical height matters. So the reading drops if air gets trapped above the mercury, because that trapped air presses down and shortens the column. It also drops at high altitude, where there is less air above you pushing down.",
      },
    ],
  },
];
