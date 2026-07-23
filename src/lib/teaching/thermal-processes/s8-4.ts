import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, section 4. Grounded in KB Chapter 09 (Thermal energy transfer) section 9.4.
// Conceptual section: no formula fields and no working blocks. Figure colours follow the T8 thermal key:
// heat source / the Sun's radiation = amber, hotter regions / hot liquid = red, cooler regions = blue,
// the "good reflector" highlight = green, flask bodies / bars / structures / guide lines = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t8.4",
    code: "T8.4",
    title: "Radiation",
    blurb: "The transfer of thermal energy by waves that need no medium",
    steps: [
      {
        kind: "concept",
        heading: "Radiation needs no medium",
        body: "*Radiation* is the transfer of thermal energy by *electromagnetic (infrared) waves*. Unlike conduction and convection, it needs *no medium* and can travel through a *vacuum*, which is how the Sun's energy reaches Earth.",
        say: "Radiation is the odd one out of the 3 processes. It carries thermal energy as electromagnetic waves, mostly infrared, so it does not need any particles to pass energy along. That is why it can cross the empty vacuum of space, and it is the only way the Sun's energy can reach us across roughly 150 million kilometres of nothing.",
      },
      {
        kind: "concept",
        heading: "Every object emits and absorbs",
        body: "Every object above absolute zero both *emits* radiation and *absorbs* radiation from its surroundings. If it emits more than it absorbs its temperature falls; if it *absorbs* more than it emits its temperature rises. A surface can also act as a *reflector*, bouncing radiation away.",
        say: "Every object warmer than absolute zero is glowing with infrared and soaking up infrared at the same time. It is a balance. Emit more than you absorb and you cool down; absorb more than you emit and you warm up. 3 words to keep straight: an emitter gives radiation off, an absorber takes it in, and a reflector bounces it away.",
      },
      {
        kind: "concept",
        heading: "Colour and texture matter",
        figure: "fig-09-09-radiation-surfaces",
        body: "*Dark, dull, rough* surfaces are the best *absorbers* and emitters of radiation and the worst reflectors. *Light, shiny, smooth* surfaces are poor absorbers and emitters but the best *reflectors*.",
        say: "This figure sets the 2 kinds of surface side by side in a table. The left column shows a dark, dull, rough surface, with its 3 grey swatches getting darker and rougher down the column, and it is marked Good, because it is the best absorber and also the best emitter. The right column shows a light-coloured, shiny, smooth surface, with pale swatches, and it is marked Poor, because it absorbs and emits only weakly, though it reflects well. So colour and texture control how fast a surface trades radiation.",
      },
      {
        kind: "concept",
        heading: "Bigger surface area radiates faster",
        figure: "fig-09-10-radiation-surface-area",
        body: "A larger *surface area* emits and absorbs radiation *faster*. Two objects of the same volume can have very different areas, and the one with the bigger area loses heat by radiation more quickly.",
        say: "This figure sets 2 grey objects side by side that hold exactly the same volume, 64 cubic centimetres. Object A is a compact cube 4 centimetres on each side, with a surface area of 96 square centimetres. Object B is a long thin bar, 1 by 1 by 64 centimetres, with a surface area of 258 square centimetres. Same volume, but B exposes far more area, so B radiates its energy away faster.",
      },
      {
        kind: "choice",
        question: "How does energy from the Sun reach the Earth across the empty space between them?",
        options: [
          "By conduction through the particles of space",
          "By convection currents rising through space",
          "By radiation, which needs no medium and crosses a vacuum",
          "By equal amounts of all three processes",
        ],
        correct: 2,
        ask: "Space between the Sun and Earth is a vacuum with almost no particles. Which of the 3 processes can still work with no particles to pass energy along?",
        hints: [
          "Conduction and convection both need particles, so neither can cross empty space.",
          "Only radiation travels as waves and needs no medium, so it can cross a vacuum.",
        ],
        explain: "Energy from the Sun reaches Earth by radiation, because radiation travels as electromagnetic waves and needs no medium, so it is the only process that can cross the vacuum of space.",
      },
      {
        kind: "classify",
        prompt: "Sort each surface by how well it emits thermal radiation.",
        bins: ["Good emitter", "Poor emitter"],
        items: [
          { text: "A dark, dull, rough surface", bin: 0 },
          { text: "A matt black kettle", bin: 0 },
          { text: "A shiny silver teapot", bin: 1 },
          { text: "A white, smooth wall", bin: 1 },
          { text: "A polished chrome surface", bin: 1 },
        ],
        ask: "Remember the rule: dark, dull and matt surfaces radiate well, while light, white, shiny and polished surfaces radiate poorly. Tap each surface and drop it in its bin.",
        hints: [
          "Anything dark, dull or matt black is a good emitter.",
          "Anything shiny, silvered, white or polished is a poor emitter.",
        ],
        explain: "Dark, dull, matt surfaces are good emitters, while shiny, silvered, white and polished surfaces are poor emitters, because colour and texture control how fast a surface radiates.",
      },
      {
        kind: "match",
        prompt: "Match each surface term to what it means.",
        pairs: [
          { left: "Emitter", right: "Gives off thermal radiation" },
          { left: "Absorber", right: "Takes in thermal radiation" },
          { left: "Reflector", right: "Bounces thermal radiation away" },
        ],
        ask: "Think about the everyday meaning of each word: to emit, to absorb, to reflect. Pair each term with the matching description.",
        hints: [
          "An emitter gives energy out, and an absorber takes energy in.",
          "A reflector does neither of those; it simply bounces the radiation away.",
        ],
        explain: "An emitter gives off radiation, an absorber takes it in, and a reflector bounces it away, so the same surface can behave differently depending on the situation.",
      },
      {
        kind: "choice",
        question: "Two identical flasks, one with a black outer surface and one with a white outer surface, each with a thermometer, are stood in the sun. What happens?",
        figure: "fig-09-12-radiation-flasks",
        options: [
          "The white flask warms up faster and reaches a higher temperature",
          "The black flask warms up faster and reaches a higher temperature",
          "Both flasks stay at exactly the same temperature",
          "Neither flask changes temperature at all",
        ],
        correct: 1,
        ask: "The black surface is a better absorber of the Sun's radiation than the white one. Which flask therefore takes in energy faster and gets hotter?",
        hints: [
          "A dark, dull surface absorbs radiation faster than a light, shiny one.",
          "The black flask absorbs the Sun's energy faster, so it warms up more and reaches a higher temperature.",
        ],
        explain: "The black flask warms up faster and reaches a higher temperature, because a dark surface is the better absorber of the Sun's radiation. If the flasks were later left in the dark, that same black surface would also emit fastest and cool quickest.",
      },
      {
        kind: "insight",
        body: "Radiation is the only process that crosses a *vacuum*, and its rate depends on the *surface*: dark, dull, rough surfaces with a large *area* trade energy fastest.",
        say: "Here is the takeaway. Radiation is the lone process that can cross empty space, which is why the Sun can warm us. And once radiation is happening, the surface decides the pace: dark, dull, rough and large surfaces both absorb and emit the fastest, while light, shiny, smooth surfaces hold their energy longest. Same physics runs a solar panel and a survival blanket.",
      },
    ],
  },
];
