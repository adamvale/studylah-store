import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, Revision 2. Checkpoint over KB Chapter 09,
// sections t8.4 to t8.5: radiation and the three processes in everyday
// devices (vacuum flask, greenhouse, global warming). Question-only.
// Conceptual chapter: NO working, NO formula anywhere.

export const BOXES: Subconcept[] = [
  {
    id: "t8.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: radiation and everyday devices",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which statement about thermal radiation is correct?",
        options: [
          "It can only travel through a solid material",
          "It needs no medium and can travel through a vacuum",
          "It travels fastest through dense metals",
          "It stops as soon as it reaches empty space",
        ],
        correct: 1,
        ask: "Ask how the Sun's energy reaches us across the empty space between the Sun and the Earth. Which option fits that?",
        hints: [
          "Conduction and convection both need particles, but radiation is an electromagnetic wave.",
          "The Sun's energy crosses millions of kilometres of empty space to reach Earth, so radiation needs no medium.",
        ],
        explain: "Radiation needs no medium and can travel through a vacuum, which is exactly how the Sun's energy reaches the Earth across empty space.",
      },
      {
        kind: "choice",
        question: "A blackened bulb hangs inside a sealed glass tube from which all the air has been pumped out. By which process can it still gain thermal energy from a nearby lamp?",
        options: [
          "Conduction only",
          "Convection only",
          "Conduction and convection together",
          "Radiation only",
        ],
        correct: 3,
        ask: "With all the air pumped out there are no particles inside the tube. Which of the 3 processes does not need particles?",
        hints: [
          "Conduction and convection both rely on particles carrying or passing on energy.",
          "The tube holds a vacuum, so only the process that crosses a vacuum can reach the bulb.",
        ],
        explain: "Only radiation can cross the vacuum, because conduction and convection both need particles. The blackened bulb absorbs the radiation and warms up.",
      },
      {
        kind: "choice",
        question: "Two identical flasks of water, one with a black outer surface and one with a white outer surface, stand side by side in bright sunshine. After 10 minutes, which is warmer?",
        figure: "fig-09-12-radiation-flasks",
        options: [
          "The black flask, because a dark surface absorbs radiation faster",
          "The white flask, because a light surface absorbs radiation faster",
          "Both stay at exactly the same temperature",
          "The white flask, because it reflects radiation faster",
        ],
        correct: 0,
        ask: "Ask which colour of surface is the better absorber of radiation, then match that flask to the higher temperature.",
        hints: [
          "Dark, dull surfaces are the best absorbers of radiation; light, shiny surfaces are poor absorbers.",
          "The black flask absorbs the Sun's radiation faster, so its water warms up more.",
        ],
        explain: "The black flask is warmer, because a dark surface is a better absorber of radiation and so takes in the Sun's energy faster than the white one.",
      },
      {
        kind: "choice",
        question: "The double glass walls of a vacuum flask are silvered so they are shiny. Which type of energy transfer does this mainly reduce?",
        options: [
          "Conduction",
          "Convection",
          "Radiation",
          "Evaporation",
        ],
        correct: 2,
        ask: "Shiny silvered surfaces are poor emitters and good reflectors. Which of the 3 transfer processes does that affect?",
        hints: [
          "A shiny surface is a poor emitter of radiation and reflects radiation back.",
          "The silvered walls cut down the heat lost or gained as radiation.",
        ],
        explain: "The silvered shiny walls mainly reduce radiation, because a shiny surface is a poor emitter and a good reflector, so it reflects the radiation back instead of letting it pass.",
      },
      {
        kind: "choice",
        question: "How does a greenhouse stay warmer inside than the air outside?",
        options: [
          "The glass conducts heat inward from the cooler air outside",
          "Convection currents carry cool air in through the roof",
          "The glass reflects all of the sunlight straight back onto the plants",
          "Short-wavelength solar radiation passes in, but the longer-wavelength infrared re-emitted inside cannot easily get back out",
        ],
        correct: 3,
        ask: "Think about what the glass does to the short-wavelength radiation coming in and to the longer-wavelength infrared trying to leave.",
        hints: [
          "Short-wavelength radiation from the Sun passes through the glass and is absorbed inside.",
          "The warm surfaces re-emit longer-wavelength infrared, which cannot easily pass back out, so energy is trapped.",
        ],
        explain: "Short-wavelength solar radiation passes through the glass and is absorbed inside. The warm surfaces re-emit longer-wavelength infrared, which cannot easily escape through the glass, so energy is trapped and the inside stays warmer.",
      },
      {
        kind: "match",
        prompt: "Match each part of a vacuum flask to the transfer process it mainly reduces.",
        pairs: [
          { left: "Stopper on top", right: "reduces convection" },
          { left: "Trapped layer of air", right: "reduces conduction" },
          { left: "Vacuum between the walls", right: "reduces conduction and convection" },
          { left: "Silvered shiny walls", right: "reduces radiation" },
        ],
        ask: "For each part, ask which process needs particles and which needs a surface. Match the part to the process it blocks.",
        hints: [
          "The stopper traps warm air so it cannot circulate, and trapped still air is a poor conductor.",
          "The vacuum has no particles at all, so it stops both conduction and convection, while shiny walls tackle radiation.",
        ],
        explain: "The stopper cuts convection, the trapped air cuts conduction, the vacuum cuts both conduction and convection, and the silvered shiny walls cut radiation.",
      },
      {
        kind: "classify",
        prompt: "Sort each everyday example by the main process at work.",
        bins: ["Conduction", "Convection", "Radiation"],
        items: [
          { text: "a metal spoon left in a hot pan gets hot along its length", bin: 0 },
          { text: "heat passing through a metal saucepan base to the food", bin: 0 },
          { text: "the water at the top of a kettle warms up when the element is at the bottom", bin: 1 },
          { text: "a freezer's cooling unit placed at the top so cold air sinks", bin: 1 },
          { text: "the Sun's energy reaching Earth across empty space", bin: 2 },
          { text: "a survival blanket's shiny surface keeping body heat in", bin: 2 },
        ],
        ask: "For each one, ask whether energy passes through a solid, is carried by a moving fluid, or crosses as a wave. Drop it in that bin.",
        hints: [
          "Energy passing through a solid without the solid moving is conduction; a warmed fluid rising is convection.",
          "Energy crossing empty space, or a shiny surface reflecting or emitting heat, is radiation.",
        ],
        explain: "The hot spoon and the saucepan base are conduction through a solid. The kettle water and the freezer unit rely on convection currents in a fluid. The Sun's energy across space and the shiny survival blanket are radiation.",
      },
      {
        kind: "order",
        prompt: "Put the steps of how a greenhouse traps energy in the correct order.",
        items: [
          "Short-wavelength radiation from the Sun passes through the glass",
          "The surfaces inside absorb this radiation and warm up",
          "The warm surfaces re-emit energy as longer-wavelength infrared",
          "This infrared cannot easily pass back out through the glass",
          "Energy is trapped, so the inside stays warmer than outside",
        ],
        ask: "Start with the radiation arriving from the Sun and follow what happens to it once it is inside. Put the steps in order.",
        hints: [
          "The incoming sunlight is short-wavelength radiation that passes through the glass first.",
          "After being absorbed, the warm surfaces give out longer-wavelength infrared, which is what gets trapped.",
        ],
        explain: "First the short-wavelength solar radiation passes through the glass, then the inside surfaces absorb it and warm up, then they re-emit longer-wavelength infrared, which cannot easily escape, so energy is trapped and the inside stays warmer.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of how surfaces radiate.",
        segments: [
          "A dark, dull surface is the best ",
          " of radiation, while a light, shiny surface is the best ",
          ". A hotter surface also emits radiation ",
          " than a cooler one.",
        ],
        bank: ["absorber", "reflector", "faster", "slower", "insulator", "conductor"],
        answer: ["absorber", "reflector", "faster"],
        ask: "Recall which surface takes radiation in best, which bounces it away best, and whether a hotter surface emits more quickly or more slowly.",
        hints: [
          "Dark, dull surfaces are the best absorbers of radiation; light, shiny surfaces are the best reflectors.",
          "The hotter a surface is, the faster it emits radiation.",
        ],
        explain: "A dark, dull surface is the best absorber, a light, shiny surface is the best reflector, and a hotter surface emits radiation faster than a cooler one.",
      },
      {
        kind: "spoterror",
        prompt: "One line of this explanation of a vacuum flask is wrong. Find it.",
        lines: [
          "The stopper on top stops warm air escaping, cutting convection.",
          "The trapped layer of air is a poor conductor, so it cuts conduction.",
          "The vacuum between the walls cuts both conduction and convection.",
          "The shiny silvered walls are good emitters, so they cut radiation.",
        ],
        errorLine: 3,
        ask: "Check each line against what shiny surfaces actually do with radiation. One claim about the silvered walls is backwards.",
        hints: [
          "A shiny silvered surface is a poor emitter of radiation, not a good one.",
          "The silvered walls cut radiation because they emit poorly and reflect radiation back.",
        ],
        explain: "The last line is wrong. The shiny silvered walls are poor emitters of radiation, not good emitters. They cut radiation because they emit poorly and reflect it back.",
      },
      {
        kind: "open",
        prompt: "Explain how a vacuum flask keeps a hot drink hot. Refer to conduction, convection and radiation.",
        figure: "fig-09-11-vacuum-flask",
        modelAnswer: "The stopper on top traps the warm air so it cannot circulate and carry energy away, cutting convection. The vacuum between the double walls has no particles, so it stops conduction and convection through the sides. The glass walls are silvered and shiny, so they are poor emitters and good reflectors and reflect radiation back towards the drink, cutting radiation loss. Together these reduce all 3 processes, so the drink stays hot for a long time.",
        marks: [
          "Stopper cuts convection by trapping warm air.",
          "Vacuum stops conduction and convection through the walls.",
          "Silvered shiny walls are poor emitters and reflect radiation back, cutting radiation.",
        ],
        ask: "Go through the 3 processes one at a time and say which part of the flask reduces each: the stopper, the vacuum, and the silvered walls.",
      },
      {
        kind: "open",
        prompt: "In a sealed tube held at a slope, the water near the top is boiled and gives off steam, yet a piece of ice held at the bottom stays frozen. Explain why the ice does not melt.",
        figure: "fig-09-13-ice-tube",
        modelAnswer: "Water is a poor conductor of heat, so very little energy travels down through the water by conduction to reach the ice. Heat normally spreads through water by convection, but warmed water is less dense and rises, so it stays near the top and does not carry energy downward. Because the heat at the top cannot easily reach the bottom by either conduction or convection, the ice at the bottom stays frozen while the water above boils.",
        marks: [
          "Water is a poor conductor, so little energy reaches the ice by conduction.",
          "Warm water is less dense and rises, so convection carries energy up, not down.",
          "The ice at the bottom receives little energy, so it stays frozen.",
        ],
        ask: "Think about how well water conducts heat, and which way a convection current in water carries the warmed water, up or down.",
      },
    ],
  },
];
