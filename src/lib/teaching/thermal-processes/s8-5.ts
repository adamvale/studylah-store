import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, section 5. Grounded in KB Chapter 09 (Thermal Processes) sections 9.2 to 9.4,
// applications. CONCEPTUAL section: no formula fields and no working blocks anywhere.
// Figure colours follow the T8 thermal key: hot region/liquid = red, cold region = blue,
// heat source/flame = amber, free electrons = green, structures/containers/gauze = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t8.5",
    code: "T8.5",
    title: "The three processes in everyday devices",
    blurb: "How real devices fight conduction, convection and radiation all at once",
    steps: [
      {
        kind: "concept",
        heading: "One flask, three defences",
        figure: "fig-09-11-vacuum-flask",
        body: "A *vacuum flask* is built to slow all 3 heat processes at once. The *stopper* and the *vacuum* cut convection and conduction, while the *silvered walls* reflect radiation back.",
        say: "This is a cross-section of a vacuum flask. Right at the top a grey stopper seals the neck, and that stopper cuts convection by trapping the warm air. Just inside there is a thin layer of trapped air, a poor conductor, which cuts conduction. Between the double glass walls is a vacuum, drawn as an empty gap, and with almost no particles it blocks both conduction and convection. The walls themselves are silvered, so they reflect infrared radiation back toward the drink. Inside sits the red hot liquid. So all 3 processes are fought together.",
      },
      {
        kind: "concept",
        heading: "Water is a poor conductor",
        figure: "fig-09-13-ice-tube",
        body: "Liquids and gases are poor *conductors*. In a tube of water the top can *boil* while *ice* at the bottom stays frozen, because energy is barely conducted downward and warm water only *rises*.",
        say: "This figure is an inclined tube of water. An amber heat source near the top boils the water there, shown red with steam coming off. A piece of ice sits at the sealed bottom, held by a grey wire gauze, and it is drawn blue because it stays frozen. Water conducts energy very poorly, so almost nothing reaches down to the ice. And convection cannot help either, because the warm, less dense water only rises upward, never sinking to the ice below.",
      },
      {
        kind: "concept",
        heading: "The greenhouse effect",
        body: "In a *greenhouse*, short-wavelength solar *radiation* passes through the glass and is absorbed inside. It is re-emitted as longer-wavelength *infrared* that cannot easily pass back out, so energy is *trapped*.",
        say: "A greenhouse works with radiation. Short-wavelength radiation from the Sun passes straight through the glass and is absorbed by the soil and plants inside. Those warm surfaces then re-emit the energy, but as longer-wavelength infrared, which the glass does not let through so easily. So more energy comes in than leaves, and the inside warms up. Adding more greenhouse gases to the atmosphere traps more of this re-emitted infrared, which is the idea behind global warming.",
      },
      {
        kind: "match",
        prompt: "Match each part of a vacuum flask to the process it mainly reduces.",
        pairs: [
          { left: "Stopper on top", right: "Convection" },
          { left: "Layer of trapped air", right: "Conduction" },
          { left: "Silvered walls", right: "Radiation" },
          { left: "Vacuum between the walls", right: "Conduction and convection" },
        ],
        ask: "For each part, ask which process needs what it removes: moving fluid for convection, touching particles for conduction, or a surface that emits or reflects for radiation.",
        hints: [
          "The stopper seals the fluid so it cannot circulate, and trapped air is a poor conductor.",
          "Silvered surfaces reflect radiation, and a vacuum has no particles for either conduction or convection.",
        ],
        explain: "The stopper cuts convection by sealing the neck, the trapped air cuts conduction, the silvered walls reflect radiation, and the vacuum, having almost no particles, cuts both conduction and convection.",
      },
      {
        kind: "classify",
        prompt: "Sort each everyday example by the heat process it mainly shows.",
        bins: ["Conduction", "Convection", "Radiation"],
        items: [
          { text: "A metal spoon left in hot soup grows warm along its length", bin: 0 },
          { text: "Warm water rising in a kettle heated from below", bin: 1 },
          { text: "The Sun warming your face on a clear day", bin: 2 },
          { text: "A freezer cooling unit placed at the top of the cabinet", bin: 1 },
          { text: "A metal pan handle becoming hot to touch", bin: 0 },
          { text: "A campfire warming you from across the flames", bin: 2 },
        ],
        ask: "Ask whether energy passes particle to particle through a solid (conduction), is carried by a moving fluid (convection), or crosses space as waves (radiation). Tap each one and drop it in its bin.",
        hints: [
          "Energy travelling along a solid metal object is conduction.",
          "A moving liquid or gas carries energy by convection, while heat felt across a gap arrives by radiation.",
        ],
        explain: "The spoon and the pan handle heat by conduction along a solid. The rising kettle water and the freezer's cold air circulating are convection in a fluid. The Sun and the campfire reach you by radiation across space.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this explanation of a vacuum flask is wrong. Find it.",
        lines: [
          "A vacuum flask keeps a drink hot by slowing all 3 heat processes.",
          "The stopper seals the neck, so warm air cannot rise out and carry energy away by convection.",
          "The vacuum between the walls has almost no particles, so it blocks conduction and convection.",
          "The silvered walls absorb the radiation, trapping the heat inside the flask.",
        ],
        errorLine: 3,
        ask: "Check the claim about the silvered walls. A shiny silver surface is a poor emitter and a good reflector, so ask whether it absorbs radiation or bounces it back.",
        hints: [
          "The first 3 lines correctly describe the stopper and the vacuum.",
          "Silvered walls do not absorb radiation, they reflect it back toward the drink.",
        ],
        explain: "The last line is wrong. The silvered walls do not absorb radiation, they reflect it. Because shiny surfaces are poor emitters and good reflectors, they bounce the infrared back toward the drink instead of soaking it up.",
      },
      {
        kind: "choice",
        question: "Inside a sealed flask the space between the walls is a vacuum with no particles. Which process can still carry energy across it?",
        options: ["Conduction", "Convection", "Radiation", "Conduction and convection together"],
        correct: 2,
        ask: "Conduction and convection both need particles to pass on or carry energy. Ask which of the 3 processes needs no medium at all.",
        hints: [
          "A vacuum has no particles, so anything that relies on particles cannot work.",
          "Radiation travels as electromagnetic waves and needs no medium, which is how the Sun's energy crosses space.",
        ],
        explain: "Only radiation can cross a vacuum. Conduction and convection both need particles, and a vacuum has none, so radiation is the sole way energy can pass across the gap.",
      },
      {
        kind: "choice",
        question: "A survival blanket has a shiny silver surface. Wrapped around a person in the cold, how does the shiny surface help keep them warm?",
        options: [
          "It is a good conductor that carries heat back to the body",
          "It absorbs the cold from the surroundings",
          "It speeds up convection currents around the body",
          "It is a poor emitter, so little of the body's heat radiates away",
        ],
        correct: 3,
        ask: "A shiny surface is a poor emitter and a good reflector of radiation. Ask what a poor emitter does to the heat the body radiates.",
        hints: [
          "Cold is not a substance that can be absorbed, and the blanket is not there to speed up convection.",
          "A shiny surface radiates very little energy away and reflects the body's heat back inward.",
        ],
        explain: "The shiny surface is a poor emitter, so it radiates very little of the body's heat away and reflects much of it back, keeping the person warm.",
      },
      {
        kind: "open",
        prompt: "Explain how the design of a vacuum flask keeps a hot drink hot for a long time. Refer to all 3 heat processes.",
        modelAnswer: "The stopper seals the neck so warm air cannot rise out and carry energy away by convection. The vacuum between the double walls has almost no particles, so it blocks both conduction and convection across the gap. The silvered walls are poor emitters and good reflectors, so they reflect the infrared radiation back toward the drink. Because all 3 processes are slowed together, the drink loses energy very slowly and stays hot.",
        marks: [
          "Stopper stops warm fluid escaping, cutting convection.",
          "Vacuum has no particles, so it blocks conduction and convection.",
          "Silvered walls reflect radiation back and are poor emitters.",
          "All 3 processes slowed, so energy is lost only slowly.",
        ],
        ask: "Take each feature in turn, the stopper, the vacuum, and the silvered walls, and say which of the 3 heat processes each one slows.",
      },
      {
        kind: "insight",
        body: "Real devices rarely fight just *one* process. A good insulator, whether a vacuum *flask* or a survival *blanket*, is clever because it blocks *conduction*, convection and radiation together.",
        say: "Here is the idea to keep. In real life the 3 heat processes act at the same time, so a well-designed device has to beat all of them together. A vacuum flask uses a stopper, a vacuum and silvered walls, and a survival blanket uses a shiny surface, each one closing off a different route for energy to escape.",
      },
    ],
  },
];
