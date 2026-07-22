// thermal-processes-questions.ts
// Teaching question bank for O-Level Physics, Thermal Processes (topicKey "t8-thermal-processes").
// Every wrong option maps to the misconception it reveals (see thermal-processes-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 09 - Thermal Processes.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const THERMAL_PROCESSES_QUESTIONS: TeachQuestion[] = [
  {
    id: "tp-q-01",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    stem: "You hold an ice cube and your hand feels cold. What has actually happened?",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    options: [
      "Energy has flowed from your warm hand into the cold ice.",
      "Coldness has flowed from the ice into your hand.",
      "Energy has flowed from the object that stores more energy into the other.",
      "Nothing moves once your hand and the ice touch."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-heatflow-1", 2: "tp-heatflow-2", 3: "tp-equilibrium-1" },
    walkthrough: [
      "Thermal energy always flows from the hotter place to the cooler place.",
      "Your hand is warmer than the ice.",
      "So energy leaves your hand and passes into the ice.",
      "Your hand feels cold because it has lost some of its energy, not because cold moved in."
    ],
    explain: "Only thermal energy moves, and it moves from your warm hand to the cold ice. Cold is not a substance, so nothing cold flowed into you. Your hand feels colder simply because it has lost energy to the ice."
  },
  {
    id: "tp-q-02",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    stem: "A tiny nail at 200 degrees Celsius is dropped into a large tank of water at 20 degrees Celsius. Which way does thermal energy flow at first?",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    options: [
      "From the nail to the water.",
      "From the water to the nail, because the tank holds far more energy.",
      "No energy flows, because the two are already touching.",
      "Coldness flows from the water into the nail."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-heatflow-2", 2: "tp-equilibrium-1", 3: "tp-heatflow-1" },
    walkthrough: [
      "The direction of transfer is set by temperature, not by how much energy is stored.",
      "The nail is at the higher temperature, even though it is small.",
      "So energy flows from the hot nail to the cooler water.",
      "It keeps flowing until both reach the same temperature."
    ],
    explain: "Temperature decides the direction, so energy flows from the hot nail to the cooler water even though the tank stores much more energy in total. The large store of the water does not reverse the flow, and coldness is not something that travels."
  },
  {
    id: "tp-q-03",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    stem: "Two metal blocks sit touching, both at 25 degrees Celsius. What is happening between them?",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    options: [
      "Energy passes both ways in equal amounts, so there is no net transfer.",
      "All energy movement between them has stopped completely.",
      "Energy flows steadily from the block with more energy to the other.",
      "Coldness passes between them until one becomes warmer."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-equilibrium-1", 2: "tp-heatflow-2", 3: "tp-heatflow-1" },
    walkthrough: [
      "The blocks are at the same temperature, so they are in thermal equilibrium.",
      "Energy still passes both ways between them all the time.",
      "But the amount going each way is now equal.",
      "So the two flows balance and there is no net transfer, and neither block changes temperature."
    ],
    explain: "At the same temperature the blocks are in thermal equilibrium. Energy still crosses both ways, but in equal amounts, so it balances and there is no net transfer. It is not that everything stops, and the amount of energy stored does not set up a one-way flow."
  },
  {
    id: "tp-q-04",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    stem: "One end of a metal rod is heated. How does thermal energy travel to the cool end?",
    figure: "fig-09-03-conduction-particles.svg",
    options: [
      "Particles vibrate harder and pass energy to their neighbours by collisions.",
      "The heated particles travel down the rod to the cool end, carrying the energy.",
      "A convection current carries warm particles along the rod.",
      "The rod radiates the energy along its length as waves."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-conduction-travel-1", 2: "tp-convection-solid-1", 3: "tp-radiation-medium-1" },
    walkthrough: [
      "In a solid the particles are held in fixed positions and can only vibrate on the spot.",
      "The heated particles vibrate more strongly and bump into their neighbours.",
      "Each collision passes energy along to the next particle.",
      "So the vibration and the energy travel down the rod, while the particles stay put."
    ],
    explain: "This is conduction. The particles stay in their fixed positions and only vibrate harder, passing energy along by colliding with their neighbours. They do not travel down the rod, that would be convection, which cannot happen in a solid anyway."
  },
  {
    id: "tp-q-05",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    stem: "Why does a copper rod conduct thermal energy far better than a wooden one?",
    figure: "fig-09-02-conduction-rod.svg",
    options: [
      "Copper has free electrons that carry energy quickly, as well as passing it by vibration.",
      "Copper is heavier and denser, and that is what makes it conduct well.",
      "Warm particles flow along the copper as a convection current.",
      "Copper takes in more radiation than wood does."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-conduction-metals-1", 2: "tp-convection-solid-1", 3: "tp-radiation-absorb-1" },
    walkthrough: [
      "All solids can pass energy by particle vibration.",
      "Metals like copper have an extra pathway: free electrons.",
      "These free electrons pick up energy and travel quickly to the cool end.",
      "Having two pathways at once makes metals the best conductors."
    ],
    explain: "Copper conducts by two methods at once, particle vibration like any solid, plus free electrons that move through it and carry energy quickly. It is those free electrons, not simply being heavy or dense, that make metals the best conductors. Convection cannot happen in a solid."
  },
  {
    id: "tp-q-06",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    stem: "A metal spoon and a wooden spoon have been in the same drawer all day. The metal one feels colder. Why?",
    figure: "fig-09-02-conduction-rod.svg",
    options: [
      "The metal conducts energy away from your hand faster, though both are at the same temperature.",
      "The metal spoon really is at a lower temperature than the wooden one.",
      "Coldness flows out of the metal spoon and into your hand.",
      "The metal spoon is a better absorber of radiation."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-conductor-feel-1", 2: "tp-heatflow-1", 3: "tp-radiation-absorb-1" },
    walkthrough: [
      "Both spoons have been in the same drawer, so they are at the same temperature.",
      "Your skin senses how quickly energy leaves it, not the real temperature.",
      "Metal is a good conductor, so it draws energy from your hand quickly.",
      "That rapid loss of energy is what feels cold, even though the spoons are equally warm."
    ],
    explain: "Both spoons are at the same room temperature. The metal only feels colder because it is a good conductor and pulls energy away from your hand quickly. Your skin reads that fast energy loss as cold. Nothing cold flowed into you, and this is about conduction, not radiation."
  },
  {
    id: "tp-q-07",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    stem: "Water is heated near the top of a tall tube while ice is held at the bottom. The top boils but the ice barely melts. Why?",
    figure: "fig-09-13-ice-tube.svg",
    options: [
      "Water is a poor conductor, so little energy reaches the bottom.",
      "Water conducts energy just as well as a metal, so the ice should have melted.",
      "The warm water sank to the bottom and refroze.",
      "Radiation from the top could not reach the ice."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-liquid-conduction-1", 2: "tp-convection-density-1", 3: "tp-radiation-medium-1" },
    walkthrough: [
      "Water is a poor conductor because its particles are spaced far apart.",
      "With the heat at the top, the warm water stays at the top, so convection does not carry it down.",
      "Energy can only creep down to the ice slowly by conduction.",
      "That is far too slow to melt the ice before the top boils."
    ],
    explain: "Water is a poor conductor, so with the heat applied at the top the energy travels down to the ice only very slowly by conduction. Warm water does not sink, so no convection helps, and the ice stays frozen while the top boils. This shows just how weak conduction is in a liquid."
  },
  {
    id: "tp-q-08",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    stem: "How does a thick woolly jumper keep you warm on a cold day?",
    figure: "fig-09-02-conduction-rod.svg",
    options: [
      "It traps air and is a poor conductor, so it slows the loss of your body's energy.",
      "It gives off heat of its own and adds warmth to your body.",
      "It sets up convection currents that carry warm air to your skin.",
      "It is a good absorber of radiation from the surroundings."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-insulator-warms-1", 2: "tp-convection-heatrises-1", 3: "tp-radiation-absorb-1" },
    walkthrough: [
      "A jumper makes no energy of its own.",
      "Wool traps pockets of air, and both wool and air are poor conductors.",
      "This insulating layer slows the escape of the energy your body produces.",
      "So you stay warm because your own heat is kept in."
    ],
    explain: "The jumper adds no heat. It works because wool traps air and both are poor conductors, forming an insulating layer that slows your body's energy from escaping. You stay warm from your own heat being kept in, not from the clothing making or absorbing energy."
  },
  {
    id: "tp-q-09",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    stem: "A double-glazed window keeps a room warmer than a single pane. What mainly does the insulating?",
    figure: null,
    options: [
      "The layer of trapped air between the two panes, a poor conductor.",
      "The two panes being thicker glass than one.",
      "Convection currents circulating between the panes.",
      "The glass reflecting radiation back into the room."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-doubleglazing-1", 2: "tp-convection-heatrises-1", 3: "tp-radiation-absorb-1" },
    walkthrough: [
      "The useful part is the gap between the two panes.",
      "That gap holds a layer of trapped air.",
      "Air is a poor conductor, so it slows energy passing between inside and outside.",
      "The glass mainly holds the air gap in place."
    ],
    explain: "The trapped air between the panes does the insulating, because air is a poor conductor and slows the transfer of energy. The extra thickness of glass is not the main reason, the air gap is. The gap is thin and sealed, so no real convection current runs in it."
  },
  {
    id: "tp-q-10",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    stem: "Which statement about convection is correct?",
    figure: "fig-09-04-convection-beaker.svg",
    options: [
      "It transfers energy in fluids, where particles are free to move and carry energy.",
      "It can also happen in solids, where fixed particles form currents.",
      "It needs no medium and can cross a vacuum.",
      "It works by particles vibrating on the spot without moving."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-convection-solid-1", 2: "tp-radiation-medium-1", 3: "tp-conduction-travel-1" },
    walkthrough: [
      "Convection needs the particles themselves to move about.",
      "That can only happen in a fluid, a liquid or a gas.",
      "The moving particles carry their energy with them, setting up a current.",
      "In a solid the particles are fixed, so convection cannot occur there."
    ],
    explain: "Convection happens in fluids, where particles are free to move and carry energy along as a current. It cannot happen in a solid, because those particles are locked in place. It does need a medium, unlike radiation, and it is not the vibrate-on-the-spot process, which is conduction."
  },
  {
    id: "tp-q-11",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    stem: "Why does the warm air just above a heater rise?",
    figure: "fig-09-05-hot-air-balloon.svg",
    options: [
      "It has expanded and become less dense, so it floats up through the cooler air.",
      "Heat naturally travels upward on its own.",
      "Heating the air makes it denser, so it is pushed up.",
      "The warm air is a better emitter of radiation."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-convection-heatrises-1", 2: "tp-convection-density-1", 3: "tp-radiation-emitter-1" },
    walkthrough: [
      "When the air is heated it expands, so the same particles spread over a bigger volume.",
      "Spreading out makes the warm air less dense than the cooler air around it.",
      "Being less dense, it floats upward, like a cork rising through water.",
      "So it is a density difference that lifts the warm air."
    ],
    explain: "The warm air rises because it has expanded and become less dense than the cooler air around it, so it floats up. Heat has no built-in direction, and heating a fluid lowers its density rather than raising it. This is convection, not radiation."
  },
  {
    id: "tp-q-12",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    stem: "When a region of water is heated, what happens to its density?",
    figure: "fig-09-04-convection-beaker.svg",
    options: [
      "It decreases, because the water expands while its mass stays the same.",
      "It increases, because heating packs the particles together.",
      "It stays exactly the same, so the water does not move.",
      "It increases, because heating adds extra particles."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-convection-density-1", 2: "tp-convection-solid-1", 3: "tp-convection-density-1" },
    walkthrough: [
      "Heating the water adds no new particles, so its mass stays the same.",
      "The particles move more and spread further apart, so the water expands.",
      "Density is mass divided by volume.",
      "The same mass in a larger volume gives a smaller density, so density decreases."
    ],
    explain: "Heating makes the water expand, so the same mass now fills a larger volume. Since density is mass divided by volume, a bigger volume means a lower density. No particles are added, so the mass does not change, and the drop in density is exactly why the warm water rises."
  },
  {
    id: "tp-q-13",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    stem: "Why is the heating element of an electric kettle placed at the bottom?",
    figure: "fig-09-04-convection-beaker.svg",
    options: [
      "So warm water rises and cool water sinks, setting up a current that heats it all.",
      "It does not matter where it goes, the water heats evenly from any position.",
      "So the warm water can sink and stay at the bottom.",
      "So the element can radiate energy up through the water."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-convection-heatposition-1", 2: "tp-convection-density-1", 3: "tp-radiation-medium-1" },
    walkthrough: [
      "Heated at the bottom, the warm water becomes less dense and rises.",
      "Cooler, denser water sinks to take its place and is heated in turn.",
      "This keeps the water turning over as a convection current.",
      "So the whole body of water is heated, not just the part near the element."
    ],
    explain: "With the element at the bottom, warm water rises through the cooler water and cool water sinks to be heated, setting up a convection current that heats it all. Heated at the top, the warm water would just stay there. Warm water rises rather than sinks, and this works by convection, not radiation."
  },
  {
    id: "tp-q-14",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    stem: "During the day at the coast, a breeze blows in off the sea. Why?",
    figure: "fig-09-06-sea-breeze.svg",
    options: [
      "The land warms faster, so air over it rises and cool air flows in from the sea.",
      "The breeze always blows from the warm land out to the cooler sea.",
      "Heat rises straight up from the sea and pushes air toward the land.",
      "The sea absorbs more radiation than the land during the day."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-seabreeze-1", 2: "tp-convection-heatrises-1", 3: "tp-radiation-absorb-1" },
    walkthrough: [
      "In the daytime the land warms up faster than the sea.",
      "The air above the warm land is heated, becomes less dense and rises.",
      "Cooler, denser air then flows in from over the sea to replace it.",
      "That incoming air from the sea is the sea breeze."
    ],
    explain: "During the day the land heats faster than the sea, so the air over the land rises and cooler denser air flows in from the sea to replace it. That sea-to-land air is the sea breeze. It works by convection driven by density, and the land, not the sea, is the faster-warming surface."
  },
  {
    id: "tp-q-15",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    stem: "At night, a breeze blows out from the land towards the sea. Why does it reverse from the daytime?",
    figure: "fig-09-07-land-breeze.svg",
    options: [
      "At night the sea stays warmer, so air rises over the sea and cool air flows out from the land.",
      "At night the breeze still blows from the sea to the land, as in the daytime.",
      "The cold night air sinks straight down and cannot move sideways.",
      "The land is a better emitter of radiation, which pushes the air seaward."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-seabreeze-1", 2: "tp-convection-solid-1", 3: "tp-radiation-emitter-1" },
    walkthrough: [
      "At night the land loses energy faster than the sea, so the sea stays warmer.",
      "The air above the warmer sea is heated, becomes less dense and rises.",
      "Cooler, denser air flows out from over the land to replace it.",
      "That land-to-sea air is the land breeze."
    ],
    explain: "At night the sea stays warmer than the land, so now the air rises over the sea and cooler denser air flows out from the land to take its place. That land-to-sea air is the land breeze, the reverse of the daytime sea breeze. It is convection, set up by which surface is warmer."
  },
  {
    id: "tp-q-16",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    stem: "How does the Sun's energy travel across empty space to reach the Earth?",
    figure: "fig-09-09-radiation-surfaces.svg",
    options: [
      "By radiation, as electromagnetic waves that need no medium.",
      "By conduction through the particles of space.",
      "By convection currents carrying warm particles across.",
      "It cannot cross a vacuum, so it arrives another way."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-radiation-medium-1", 2: "tp-convection-solid-1", 3: "tp-radiation-medium-1" },
    walkthrough: [
      "Space between the Sun and the Earth is an empty vacuum with no particles.",
      "Conduction and convection both need particles, so neither can cross it.",
      "Radiation travels as electromagnetic waves and needs no medium.",
      "So radiation is the only process that can carry the Sun's energy to us."
    ],
    explain: "The Sun's energy crosses empty space by radiation, as electromagnetic waves that need no particles or medium. Conduction and convection both need particles, so they cannot work across the vacuum. Radiation is exactly the process that can, which is why it reaches us at all."
  },
  {
    id: "tp-q-17",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    stem: "Which objects give off thermal radiation?",
    figure: "fig-09-09-radiation-surfaces.svg",
    options: [
      "Every object above absolute zero, though hotter ones emit at a greater rate.",
      "Only objects hot enough to glow, like a fire or hot metal.",
      "Only dense objects such as metals.",
      "Only shiny surfaces, because they emit radiation best."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-radiation-emitall-1", 2: "tp-conduction-metals-1", 3: "tp-radiation-emitter-1" },
    walkthrough: [
      "Every object above absolute zero emits thermal radiation all the time.",
      "Absolute zero is about minus 273 degrees Celsius.",
      "Even a cool object like your body or an ice cube is radiating.",
      "The hotter the surface, the greater its rate of emission, but cool objects still radiate."
    ],
    explain: "Every object above absolute zero emits radiation, even cool ones like a person or an ice cube. Hotter surfaces just emit at a greater rate. It is not limited to glowing objects, or to metals, and shiny surfaces are actually poor emitters, not the best."
  },
  {
    id: "tp-q-18",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    stem: "Two cans of cold water, one matt black and one shiny white, are left side by side in bright sunshine. Which water warms up faster?",
    figure: "fig-09-12-radiation-flasks.svg",
    options: [
      "The water in the matt black can.",
      "The water in the shiny white can, because shiny surfaces absorb best.",
      "They warm at the same rate, since they hold equal volumes.",
      "The shiny white can, because it emits radiation best."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-radiation-absorb-1", 2: "tp-radiation-area-1", 3: "tp-radiation-emitter-1" },
    walkthrough: [
      "Dark, dull surfaces are the best absorbers of radiation.",
      "The matt black can takes in the Sun's radiation quickly.",
      "The shiny white can reflects most of the radiation away.",
      "So the water in the black can warms up faster."
    ],
    explain: "The matt black can absorbs radiation best, so its water warms fastest, while the shiny white can reflects most of the radiation away. Shiny surfaces are good reflectors, not good absorbers. Equal volume does not make the rates equal, because the surfaces differ."
  },
  {
    id: "tp-q-19",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    stem: "A hot object cools fastest when its surface is which of the following?",
    figure: "fig-09-09-radiation-surfaces.svg",
    options: [
      "Matt black, because a good absorber is also a good emitter.",
      "Shiny silver, because shiny surfaces emit radiation best.",
      "Shiny white, because a good absorber is a poor emitter.",
      "Any colour, since surface colour does not affect emission."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-radiation-emitter-1", 2: "tp-radiation-emitter-1", 3: "tp-radiation-absorb-1" },
    walkthrough: [
      "Absorbing and emitting always go together.",
      "A dark, dull surface is a good absorber, so it is also a good emitter.",
      "A good emitter radiates its energy away quickly.",
      "So a hot object painted matt black cools the fastest."
    ],
    explain: "A good absorber is also a good emitter, so a matt black surface radiates energy away fastest and cools the object quickest. Shiny surfaces are poor emitters, so they cool slowly, and colour and texture certainly do affect the rate of emission."
  },
  {
    id: "tp-q-20",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    stem: "A cube and a long thin bar are made of the same metal and have the same volume of 64 cm^3. Which emits radiation faster?",
    figure: "fig-09-10-radiation-surface-area.svg",
    options: [
      "The long thin bar, because it has the larger surface area.",
      "They emit at the same rate, because their volumes are equal.",
      "The cube, because its packed shape is denser.",
      "Neither, because a cool metal emits no radiation."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-radiation-area-1", 2: "tp-conduction-metals-1", 3: "tp-radiation-emitall-1" },
    walkthrough: [
      "Radiation is given off from the surface of an object.",
      "So the larger the surface area, the greater the rate of emission.",
      "The two shapes have the same volume, but the bar is far more spread out.",
      "The bar has the larger surface area, so it emits radiation faster than the cube."
    ],
    explain: "Radiation comes from the surface, so surface area sets the rate, not volume. The long thin bar has a surface area of 258 square centimetres against the cube's 96, so it emits far faster despite the equal volume. The two have the same density, and both do emit, since any object above absolute zero radiates."
  },
  {
    id: "tp-q-21",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    stem: "The same vacuum flask keeps hot drinks hot and cold drinks cold. How does it do this?",
    figure: "fig-09-11-vacuum-flask.svg",
    options: [
      "It adds no energy, it just slows all three ways energy could move in or out.",
      "It warms hot drinks and cools cold drinks by adding or removing heat.",
      "It sets up convection currents that even out the temperature.",
      "It only works for hot drinks, because it is designed to add heat."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-flask-adds-1", 2: "tp-convection-heatrises-1", 3: "tp-flask-adds-1" },
    walkthrough: [
      "A vacuum flask adds no energy of its own.",
      "It simply slows down conduction, convection and radiation.",
      "Because it only slows transfer, it holds whatever temperature it was given.",
      "So the same flask keeps a hot drink hot and a cold drink cold."
    ],
    explain: "The flask adds no energy, it just slows all three transfer processes. That is why the very same flask keeps a hot drink hot and a cold drink cold, holding whatever temperature it started with for longer. It does not heat or cool anything, and it does not rely on convection to do its job."
  },
  {
    id: "tp-q-22",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    stem: "The stopper of a vacuum flask is fitted mainly to reduce which transfer process?",
    figure: "fig-09-11-vacuum-flask.svg",
    options: [
      "Convection, by sealing the top so warm air cannot circulate out.",
      "Radiation, by reflecting waves back toward the drink.",
      "Conduction, because the stopper is a metal that carries energy.",
      "All three at once, so the other features are not needed."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-silver-conduction-1", 2: "tp-conduction-metals-1", 3: "tp-vacuum-radiation-1" },
    walkthrough: [
      "Warm air could carry energy out of the flask by rising and escaping at the top.",
      "That escape of warm air would be convection.",
      "The stopper seals the top so no convection currents can carry warm air out.",
      "So the stopper mainly reduces convection."
    ],
    explain: "The stopper seals the top so warm air cannot rise and carry energy out, which cuts convection. Radiation is dealt with by the silvered walls, and conduction by the vacuum and trapped air. No single feature stops all three, which is why the flask combines several."
  },
  {
    id: "tp-q-23",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    stem: "Why does a vacuum flask still need silvered walls, even though it has a vacuum between the walls?",
    figure: "fig-09-11-vacuum-flask.svg",
    options: [
      "Radiation crosses the vacuum, so the shiny walls reflect it back to the drink.",
      "The vacuum already stops all three transfers, so the silver is only for looks.",
      "The silver conducts energy back into the drink to keep it warm.",
      "The silver sets up convection currents that warm the drink."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-vacuum-radiation-1", 2: "tp-silver-conduction-1", 3: "tp-convection-heatrises-1" },
    walkthrough: [
      "The vacuum has no particles, so it stops conduction and convection.",
      "But radiation is carried by waves and needs no particles.",
      "So radiation passes straight across the vacuum.",
      "The shiny silvered walls are poor emitters and good reflectors, so they reflect that radiation back to the drink."
    ],
    explain: "The vacuum stops conduction and convection, but radiation crosses it freely because it needs no particles. So the flask adds silvered walls, whose shiny surface is a poor emitter and good reflector, to bounce radiation back to the drink. The silver is not there for conduction or convection."
  },
  {
    id: "tp-q-24",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    stem: "The cooling coils of a fridge are fitted near the top of the cabinet. Why is that a good position?",
    figure: "fig-09-04-convection-beaker.svg",
    options: [
      "Air chilled at the top becomes dense and sinks, setting up a current that cools the whole fridge.",
      "It does not matter where the coils go, the air cools evenly from any position.",
      "Cold air is less dense, so it must be made at the top to rise.",
      "The coils radiate cold down onto the food below."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-convection-heatposition-1", 2: "tp-convection-density-1", 3: "tp-heatflow-1" },
    walkthrough: [
      "Air chilled by the coils becomes cold and dense.",
      "Dense cold air sinks down through the food.",
      "Warmer air lower down is less dense and rises to the coils to be chilled.",
      "This sets up a convection current that cools the whole cabinet evenly."
    ],
    explain: "Chilled air at the top is cold and dense, so it sinks through the food while warmer air rises to be cooled, setting up a convection current that cools the whole fridge. If the coils were at the bottom, the cold air would just stay there. Cold air is denser, not less dense, and coldness is not radiated down."
  },
  {
    id: "tp-q-25",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    stem: "A metal sphere heated to 140 degrees Celsius is placed in a room at 22 degrees Celsius. There is no net transfer of energy between the sphere and the room when the sphere is at what temperature?",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    options: [
      "22 degrees Celsius.",
      "0 degrees Celsius.",
      "118 degrees Celsius.",
      "The transfer never stops, because the sphere holds more energy."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-heatflow-1", 2: "tp-heatflow-2", 3: "tp-heatflow-2" },
    walkthrough: [
      "Energy flows from the hotter sphere to the cooler room while there is a temperature difference.",
      "It keeps flowing until the sphere and the room reach the same temperature.",
      "The room is at 22 degrees Celsius.",
      "So the net transfer stops when the sphere too is at 22 degrees Celsius, in thermal equilibrium."
    ],
    explain: "The sphere cools until it reaches the room's temperature of 22 degrees Celsius, and at that point the two are in thermal equilibrium with no net transfer. Zero degrees and 118 degrees are not the room temperature, and the transfer does stop, because temperature, not the amount of stored energy, decides when it ends."
  },
  {
    id: "tp-q-26",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    stem: "A survival blanket has a shiny, smooth surface. How does it help keep a person warm?",
    figure: "fig-09-12-radiation-flasks.svg",
    options: [
      "Its shiny surface is a poor emitter, so it reflects the body's radiation back.",
      "Its shiny surface is a good absorber, so it soaks up radiation and heats the person.",
      "It generates heat of its own to warm the person.",
      "It conducts the body's energy quickly back to the skin."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "tp-radiation-absorb-1", 2: "tp-insulator-warms-1", 3: "tp-silver-conduction-1" },
    walkthrough: [
      "A shiny, smooth surface is a poor emitter and a good reflector of radiation.",
      "The person's body gives off infrared radiation.",
      "The shiny blanket reflects that radiation back towards the person.",
      "So less radiation escapes and the person stays warmer."
    ],
    explain: "The shiny surface is a poor emitter and a good reflector, so it reflects the body's own infrared radiation back and reduces the energy lost. It is not soaking radiation up, and the blanket makes no heat of its own. Its help comes from reflecting radiation, not from conduction."
  }
];
