import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, section 3. Grounded in KB Chapter 07 (Energy, Work and Power) section on the
// kinetic and gravitational potential stores. Figure colours follow the carry-over colour key:
// lifting / applied force = yellow, the kinetic store and motion = blue, weight and the
// gravitational potential store = pink, objects (crate, block) = white, slope and height guides = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t6.3",
    code: "T6.3",
    title: "Kinetic and gravitational potential stores",
    blurb: "How much energy a moving object holds, and how much a raised object holds",
    steps: [
      {
        kind: "concept",
        heading: "The kinetic store",
        body: "A *moving* object holds energy in its *kinetic* store. The faster it goes and the more *mass* it has, the more energy it holds, measured in joules.",
        formula: {
          latex: "E_k = \\tfrac{1}{2} m v^2",
          where: [
            { sym: "E_k", meaning: "kinetic energy", unit: "J" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "v", meaning: "speed", unit: "m/s" },
          ],
        },
        say: "A moving object stores energy just because it is moving, and we call that the kinetic store. To find it, take half of the mass times the speed squared. Notice the speed is squared, so doubling the speed gives 4 times the kinetic energy, while doubling the mass only doubles it. The answer comes out in joules.",
      },
      {
        kind: "concept",
        heading: "The gravitational potential store",
        figure: "fig-07-05-lifting-pe",
        body: "When an object is *raised*, work is done against gravity and energy goes into its *gravitational potential* store. It depends on the *mass*, on g, and on the *height* raised.",
        formula: {
          latex: "E_p = mgh",
          where: [
            { sym: "E_p", meaning: "gravitational potential energy", unit: "J" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
            { sym: "h", meaning: "height raised", unit: "m" },
          ],
        },
        say: "In the picture a yellow arrow points up and lifts a white crate, and that is the lifting force. A grey guide on the side marks the height h that the crate rises. As the force raises the crate, the work done is stored in the gravitational potential store. To find it, multiply the mass by g, about 10 newtons per kilogram, and by the height raised, and you get the energy in joules.",
      },
      {
        kind: "concept",
        heading: "Only the vertical height counts",
        figure: "fig-07-06-block-slope-pe",
        body: "For the *gravitational potential* store, only the *vertical* height matters, not the distance along a *slope*. Since weight is m g, you can also write it as *weight* times height.",
        formula: {
          latex: "E_p = Wh",
          where: [
            { sym: "E_p", meaning: "gravitational potential energy", unit: "J" },
            { sym: "W", meaning: "weight", unit: "N" },
            { sym: "h", meaning: "vertical height raised", unit: "m" },
          ],
        },
        say: "In this figure a white block is pushed up a grey slope by a yellow push. The slope itself is 5 metres long, but the block only rises a vertical height of 3 metres. For the gravitational potential store, the 5 metres along the slope does not count, only the 3 metre vertical rise. And because weight is mass times g, you can find the energy just as weight times height.",
      },
      {
        kind: "choice",
        question: "A ball of mass 0.80 kg moves at 2.0 m/s. Find its kinetic energy E_k.",
        options: ["1.6 J", "0.80 J", "3.2 J", "1.6 m/s"],
        correct: 0,
        ask: "Kinetic energy is half the mass times the speed squared, so square the 2.0 first, then multiply by 0.80 and by a half.",
        hints: [
          "Use E_k equals a half times m times v^2.",
          "2.0^2 is 4.0, and a half times 0.80 × 4.0 is 1.6.",
        ],
        working: [
          { label: "Formula", latex: "E_k = \\tfrac{1}{2} m v^2" },
          { label: "Substitute", latex: "E_k = \\tfrac{1}{2} \\times 0.80 \\times 2.0^2" },
          { label: "Answer", latex: "E_k = 1.6\\ \\text{J}" },
        ],
        explain: "The kinetic energy is 1.6 joules, because 2.0^2 is 4.0, and a half times 0.80 kilograms times 4.0 is 1.6 joules.",
      },
      {
        kind: "slider",
        prompt: "A 0.40 kg book is lifted 12 m up onto a high shelf. Take g = 10 N/kg. Set the slider to the gravitational potential energy gained, in joules.",
        min: 0,
        max: 100,
        step: 1,
        unit: "J",
        start: 0,
        targetMin: 47.5,
        targetMax: 48.5,
        ask: "The gravitational potential energy is mass times g times height, so work out 0.40 × 10 × 12.",
        hints: [
          "Use E_p equals m times g times h.",
          "0.40 × 10 is 4.0, and 4.0 × 12 is 48, so slide to 48 joules.",
        ],
        working: [
          { label: "Formula", latex: "E_p = mgh" },
          { label: "Substitute", latex: "E_p = 0.40 \\times 10 \\times 12" },
          { label: "Answer", latex: "E_p = 48\\ \\text{J}" },
        ],
        explain: "The gravitational potential energy is 48 joules, because 0.40 kilograms times 10 newtons per kilogram times 12 metres is 48 joules.",
      },
      {
        kind: "tiles",
        prompt: "A crate of weight 30 N is raised through a vertical height of 3 m. Build the working line that gives its gravitational potential energy E_p.",
        tiles: ["E_p =", "30", "\\times", "3", "5", "=", "90", "J", "N"],
        answer: ["E_p =", "30", "\\times", "3", "=", "90", "J"],
        ask: "When the weight is given, the gravitational potential energy is weight times height, so set up 30 × 3.",
        hints: [
          "Use E_p equals W times h, because weight already includes the mass and g.",
          "30 × 3 is 90, and energy is measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "E_p = Wh" },
          { label: "Substitute", latex: "E_p = 30 \\times 3" },
          { label: "Answer", latex: "E_p = 90\\ \\text{J}" },
        ],
        explain: "The gravitational potential energy is 90 joules, because a weight of 30 newtons times a vertical height of 3 metres is 90 joules.",
      },
      {
        kind: "choice",
        question: "A block is pushed up a slope 5 m long that rises to a vertical height of 3 m. Which distance is used in E_p = mgh?",
        options: ["The 3 m vertical height", "The 5 m slope length", "5 m plus 3 m, which is 8 m", "5 m minus 3 m, which is 2 m"],
        correct: 0,
        ask: "The gravitational potential store depends on how high the object is lifted straight up, not how far it travels along the slope.",
        hints: [
          "Only the vertical rise changes the height above the ground.",
          "The slope is 5 metres long, but the block only rises 3 metres vertically.",
        ],
        explain: "You use the 3 metre vertical height, because the gravitational potential store depends only on how high the object is raised, not on the distance travelled along the slope.",
      },
      {
        kind: "insight",
        body: "For the *gravitational potential* store, always use the *vertical* height gained. A longer *slope* does not add energy if the object ends up at the same height.",
        say: "Here is the idea to keep. Gravitational potential energy depends only on the vertical height an object is raised. A gentle ramp may be long, but if it lifts the object to the same height as a steep one, the energy stored is exactly the same. Always measure the height straight up.",
      },
    ],
  },
];
