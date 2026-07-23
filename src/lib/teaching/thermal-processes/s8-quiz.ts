import type { Subconcept } from "@/lib/teaching/subconcepts";

// T8 Thermal Processes, topical quiz. Whole-topic check across KB Chapter 09:
// energy transfer by heating and thermal equilibrium, conduction, convection,
// radiation, and the three processes in everyday devices.
// Conceptual chapter: no working blocks and no formula fields anywhere.

export const BOXES: Subconcept[] = [
  {
    id: "t8.quiz",
    code: "Quiz",
    title: "Thermal processes topical quiz",
    blurb: "Whole-topic check: heating and equilibrium, conduction, convection, radiation, everyday devices",
    kind: "quiz",
    steps: [
      // ---------- Subconcept 1: heating and thermal equilibrium ----------
      {
        kind: "choice",
        question: "2 objects at different temperatures are placed in contact. In which direction does thermal energy flow?",
        figure: "fig-09-01-energy-transfer-arrow",
        options: [
          "From the object with more mass to the object with less mass",
          "From the cooler object to the hotter object",
          "From the hotter object to the cooler object",
          "Equally both ways, with a large net flow in each direction",
        ],
        correct: 2,
        ask: "Thermal energy has a natural direction between a warm region and a cool one. Which way does it move?",
        hints: [
          "Energy flows because of the temperature difference, not because of mass.",
          "The net flow is always from the warmer object to the cooler object.",
        ],
        explain: "Thermal energy flows from the hotter object to the cooler object. In the figure the red hotter region on the left loses energy to the blue cooler region on the right, along the arrow, until both reach the same temperature.",
      },
      {
        kind: "choice",
        question: "A metal sphere at 140 degrees C is left in a room at 22 degrees C. When is there no net transfer of thermal energy between the sphere and the room?",
        options: [
          "As soon as the sphere is placed in the room",
          "When the sphere has cooled to 22 degrees C",
          "When the sphere reaches 0 degrees C",
          "Never, because the sphere keeps losing energy forever",
        ],
        correct: 1,
        ask: "Net transfer stops only when the 2 temperatures are equal. What temperature must the sphere reach?",
        hints: [
          "The sphere keeps cooling while it is hotter than its surroundings.",
          "There is no net transfer once the sphere and the room are both at 22 degrees C, which is thermal equilibrium.",
        ],
        explain: "There is no net transfer when the sphere has cooled to 22 degrees C, the same temperature as the room. Energy still passes both ways, but the amounts balance, so the sphere and room are in thermal equilibrium.",
      },
      {
        kind: "cloze",
        prompt: "Complete the sentences about how thermal energy moves between regions at different temperatures.",
        segments: [
          "Thermal energy always flows from the ",
          " region to the ",
          " region, and it keeps flowing until both reach the same temperature and are in thermal ",
          ".",
        ],
        bank: ["hotter", "cooler", "equilibrium", "colder", "motion"],
        answer: ["hotter", "cooler", "equilibrium"],
        ask: "Think about which region gives out energy, which one gains it, and the name for the balanced state at the end.",
        hints: [
          "Energy leaves the warmer region and enters the cooler one.",
          "When the temperatures become equal the objects are in thermal equilibrium.",
        ],
        explain: "Thermal energy flows from the hotter region to the cooler region until both reach the same temperature and are in thermal equilibrium, where there is no net transfer.",
      },
      {
        kind: "graphpick",
        prompt: "A metal block at 140 degrees C is left to cool in a room at 22 degrees C. Which temperature-time graph best shows how the block cools?",
        xLabel: "time / min",
        yLabel: "temperature / degrees C",
        options: [
          { points: [[0, 140], [1, 100], [2, 60], [3, 20], [4, 0]], caption: "Falls steadily all the way to 0" },
          { points: [[0, 22], [1, 22], [2, 22], [3, 22], [4, 22]], caption: "Stays constant at room temperature" },
          { points: [[0, 140], [1, 80], [2, 45], [3, 28], [4, 22], [5, 22]], caption: "Falls fast at first, then levels off at 22" },
          { points: [[0, 22], [1, 60], [2, 100], [3, 140]], caption: "Rises steadily" },
        ],
        correct: 2,
        ask: "The block cools quickly while it is much hotter than the room, then slows as the gap shrinks, and stops changing at room temperature. Which graph does that?",
        hints: [
          "The block cannot fall below the room temperature of 22 degrees C.",
          "The right graph drops steeply at first, then flattens out at 22 degrees C when equilibrium is reached.",
        ],
        explain: "The correct graph falls fast at first and then levels off at 22 degrees C. The block cools most quickly when the temperature difference is largest, and it stops cooling once it reaches thermal equilibrium with the room.",
      },
      {
        kind: "open",
        prompt: "Explain what is meant by thermal equilibrium, and describe what happens to a hot drink left in a cool room until it reaches equilibrium.",
        modelAnswer: "Thermal equilibrium is when 2 objects in contact reach the same temperature, so there is no net transfer of thermal energy between them. Energy may still pass both ways, but the amounts balance. A hot drink is warmer than the room, so thermal energy flows from the drink to the surroundings and the drink cools. It keeps cooling until it reaches the room temperature, at which point it is in thermal equilibrium and stops cooling.",
        marks: [
          "Thermal equilibrium is when 2 objects reach the same temperature with no net transfer of energy.",
          "The drink is hotter, so energy flows from the drink to the cooler surroundings and it cools.",
          "Cooling stops once the drink reaches room temperature and is in equilibrium.",
        ],
        ask: "Say what equal temperatures mean for the net transfer, and follow the drink's energy until it stops cooling.",
      },
      // ---------- Subconcept 2: conduction ----------
      {
        kind: "choice",
        question: "Why are most metals the best thermal conductors?",
        options: [
          "They conduct by both particle vibration and free electrons",
          "Their particles are much further apart than in other solids",
          "They contain no particles that can vibrate",
          "They carry energy by convection currents inside the solid",
        ],
        correct: 0,
        ask: "Metals have a second way of passing energy that non-metal solids do not. What are the 2 mechanisms working together?",
        hints: [
          "All solids conduct by particles vibrating and colliding with neighbours.",
          "Metals also have free electrons that carry energy, so they use both mechanisms.",
        ],
        explain: "Metals are the best conductors because they conduct by both particle vibration and free electrons. The vibrating particles pass energy to neighbours, and the free electrons travel quickly from the hot end to the cool end as well.",
      },
      {
        kind: "choice",
        question: "A metal spoon and a wooden spoon have both been sitting in the same 20 degrees C room. Why does the metal spoon feel colder to your hand?",
        options: [
          "The metal spoon is actually at a lower temperature",
          "Wood conducts energy away from your hand faster than metal",
          "The metal reflects your body heat straight back at you",
          "Metal conducts energy away from your hand faster than wood",
        ],
        correct: 3,
        ask: "Both spoons are at the same temperature, so the difference is about how fast each removes energy from your skin. Which is the better conductor?",
        hints: [
          "Both spoons are at 20 degrees C, so temperature is not the reason.",
          "Metal is a good conductor, so it draws heat from your hand quickly and feels colder.",
        ],
        explain: "Metal conducts energy away from your hand faster than wood, so your skin loses heat quickly and the metal feels colder. Both spoons are at 20 degrees C; the wood is an insulator, so it removes heat slowly and feels warmer.",
      },
      {
        kind: "order",
        prompt: "Put these stages of conduction along a heated metal rod in the correct order.",
        items: [
          "The heated end of the rod gains thermal energy",
          "Particles at the hot end vibrate more strongly",
          "These particles collide with their cooler neighbours",
          "Energy is passed on from particle to particle along the rod",
          "The cooler end of the rod warms up",
        ],
        ask: "Start where the burner heats the rod and follow the energy along to the far end. Put the stages in order.",
        hints: [
          "Begin at the hot end, where the particles first gain energy and vibrate harder.",
          "The energy is handed along by collisions until the far, cooler end warms up.",
        ],
        explain: "The heated end gains energy first, so its particles vibrate more strongly, collide with cooler neighbours, and pass energy along from particle to particle, until the cooler end of the rod finally warms up.",
      },
      {
        kind: "spoterror",
        prompt: "Here is a student's explanation of conduction in a metal rod. Tap the one line that is wrong.",
        lines: [
          "Conduction passes thermal energy from particle to particle.",
          "In a metal, free electrons also carry energy to the cooler end.",
          "The particles themselves travel along the rod, carrying the energy with them.",
          "Metals conduct well because they use both of these mechanisms.",
        ],
        errorLine: 2,
        ask: "In conduction the material itself does not move. Which line claims the particles travel along the rod?",
        hints: [
          "Particles moving through the material and carrying energy describes convection, not conduction.",
          "In conduction the particles stay in place and only vibrate; the wrong line says they travel along.",
        ],
        explain: "The wrong line says the particles travel along the rod carrying the energy. In conduction the particles stay put and pass energy on by vibrating and colliding; it is convection, not conduction, where particles actually move.",
      },
      {
        kind: "open",
        prompt: "Explain, in terms of particles and free electrons, why a copper saucepan base is chosen to be a good conductor while its handle is made of plastic.",
        modelAnswer: "Copper is a good conductor because its particles pass on vibrations quickly and, being a metal, it also has free electrons that carry energy rapidly from the hot end to the cooler parts. This lets thermal energy pass from the flame through the base into the food quickly. Plastic is a thermal insulator: its particles are far poorer at passing energy along and it has no free electrons, so it conducts energy slowly. A plastic handle therefore stays cool enough to hold safely.",
        marks: [
          "Copper conducts well by particle vibration and by free electrons carrying energy.",
          "So energy passes quickly from the flame through the base to the food.",
          "Plastic is an insulator with no free electrons, so the handle conducts slowly and stays cool to hold.",
        ],
        ask: "For each material say how well its particles and any free electrons pass energy, and link that to the job it does.",
      },
      // ---------- Subconcept 3: convection ----------
      {
        kind: "choice",
        question: "What causes a convection current to form in a heated fluid?",
        options: [
          "The fluid particles stay fixed and only pass on vibrations",
          "Differences in density as parts of the fluid are heated and cooled",
          "Infrared waves travelling through the fluid",
          "The fluid changing into a solid as it warms",
        ],
        correct: 1,
        ask: "A convection current is driven by warm fluid rising and cool fluid sinking. What property change makes that happen?",
        hints: [
          "When a fluid is heated it expands, so the same mass takes up more space.",
          "That changes its density: warmer fluid is less dense and rises, cooler fluid is denser and sinks.",
        ],
        explain: "Convection currents form because of differences in density. Heated fluid expands, becomes less dense and rises, while cooler, denser fluid sinks to take its place, setting up a circulating current.",
      },
      {
        kind: "choice",
        question: "During the day the land warms faster than the sea. Which way does the sea breeze blow?",
        figure: "fig-09-06-sea-breeze",
        options: [
          "From the land out to the sea",
          "Straight upward over the land only",
          "There is no breeze during the day",
          "From the sea in over the land",
        ],
        correct: 3,
        ask: "Warm air rises over the hotter surface, and cooler air flows in to replace it. Over the day, which surface is hotter?",
        hints: [
          "In the daytime the land on the left is warmer (red) and the sea on the right is cooler (blue).",
          "Warm air rises over the land, so cool air flows in from the sea, giving a sea-to-land breeze.",
        ],
        explain: "The sea breeze blows from the sea in over the land. The warmer land heats the air above it, which rises, and the cooler, denser air from over the sea flows in to replace it.",
      },
      {
        kind: "cloze",
        prompt: "Complete the sentences describing how a convection current circulates.",
        segments: [
          "When a fluid is heated it expands and becomes less ",
          ", so it rises. Cooler, ",
          " fluid then sinks to take its place, setting up a convection ",
          ".",
        ],
        bank: ["dense", "denser", "current", "solid", "lighter"],
        answer: ["dense", "denser", "current"],
        ask: "Follow the warm fluid up and the cool fluid down, and name the circulating flow they create.",
        hints: [
          "Heating lowers the density, so warm fluid is less dense and rises.",
          "The cooler fluid that sinks is denser, and the whole loop is a convection current.",
        ],
        explain: "Heated fluid becomes less dense and rises, cooler and denser fluid sinks to replace it, and this repeating flow is a convection current.",
      },
      {
        kind: "classify",
        prompt: "Convection needs the heater low and the cooler high. Sort each device by where its element is placed.",
        bins: ["Heating element at the bottom", "Cooling unit near the top"],
        items: [
          { text: "a kettle's heating element", bin: 0 },
          { text: "an electric water heater's element low in the tank", bin: 0 },
          { text: "a fridge's freezer compartment", bin: 1 },
          { text: "an air-conditioner mounted high on the wall", bin: 1 },
        ],
        ask: "A heater is placed low so warm fluid rises and heats everything; a cooler is placed high so cold, dense fluid sinks and circulates. Sort each device.",
        hints: [
          "Heaters go at the bottom so the warmed fluid rises through the whole body.",
          "Coolers go near the top so the chilled, denser fluid sinks and sets up a current.",
        ],
        explain: "Kettles and water heaters put their elements at the bottom so warm water rises and heats the whole body. Fridges and air-conditioners put their cooling units near the top so cold, dense air sinks and circulates.",
      },
      {
        kind: "open",
        prompt: "Explain, in terms of density, why a hot-air balloon rises when its burner heats the air inside.",
        modelAnswer: "The burner heats the air inside the balloon, so that air expands and some escapes, leaving fewer particles in the same volume. This makes the air inside less dense than the cooler air outside. Because the balloon and its trapped air are now less dense than the surrounding air, there is an upward push and the balloon rises. If the burner is turned down, the air cools, becomes denser, and the balloon sinks.",
        marks: [
          "Heating the air makes it expand so it becomes less dense.",
          "The air inside is then less dense than the cooler air outside.",
          "Being less dense than the surroundings, the balloon rises (and sinks again if the air cools).",
        ],
        ask: "Follow what heating does to the air's density, then compare it with the air outside to explain the motion.",
      },
      // ---------- Subconcept 4: radiation ----------
      {
        kind: "choice",
        question: "How does the Sun's thermal energy reach the Earth across empty space?",
        options: [
          "By radiation, which needs no medium and can cross a vacuum",
          "By conduction through the air between the Sun and Earth",
          "By convection currents travelling through space",
          "By particles carrying the energy across the vacuum",
        ],
        correct: 0,
        ask: "Between the Sun and Earth there is a vacuum, so any process that needs particles cannot work. Which process is left?",
        hints: [
          "Conduction and convection both need a material medium of particles.",
          "Radiation is carried by electromagnetic (infrared) waves and needs no medium.",
        ],
        explain: "The Sun's energy reaches Earth by radiation, which travels as electromagnetic (infrared) waves and needs no medium. Conduction and convection both need particles, so they cannot cross the vacuum of space.",
      },
      {
        kind: "choice",
        question: "2 identical flasks, one with a black outer surface and one with a white outer surface, are left standing in the sun. Which warms up faster, and why?",
        figure: "fig-09-12-radiation-flasks",
        options: [
          "The white flask, because white surfaces absorb radiation best",
          "Both warm up at exactly the same rate",
          "The black flask, because dark surfaces are the best absorbers of radiation",
          "The white flask, because it reflects the energy inward",
        ],
        correct: 2,
        ask: "Dark, dull surfaces and light, shiny surfaces behave very differently as absorbers. Which one takes in radiation faster?",
        hints: [
          "Light, shiny, white surfaces are poor absorbers and good reflectors.",
          "Dark, dull, black surfaces are the best absorbers, so the black flask warms faster.",
        ],
        explain: "The black flask warms up faster, because dark, dull surfaces are the best absorbers of radiation. The white surface reflects more of the Sun's radiation, so that flask absorbs less and its thermometer rises more slowly.",
      },
      {
        kind: "classify",
        prompt: "Sort each surface by how well it absorbs and emits thermal radiation.",
        bins: ["Good absorber and emitter", "Poor absorber and emitter"],
        items: [
          { text: "a dark, dull, rough surface", bin: 0 },
          { text: "a matt black car roof in the sun", bin: 0 },
          { text: "a shiny silver survival blanket", bin: 1 },
          { text: "a light, smooth, polished surface", bin: 1 },
        ],
        ask: "Dark, dull, rough surfaces sit in one bin and light, shiny, smooth surfaces in the other. Sort each one.",
        hints: [
          "Dark, dull, rough surfaces are the best absorbers and emitters.",
          "Light, shiny, smooth surfaces are poor absorbers and emitters, and good reflectors.",
        ],
        explain: "Dark, dull, rough surfaces, like a matt black roof, are good absorbers and emitters of radiation. Light, shiny, smooth surfaces, like a silver blanket or a polished surface, are poor absorbers and emitters and good reflectors.",
      },
      {
        kind: "match",
        prompt: "Match each radiation term to its meaning.",
        pairs: [
          { left: "Emitter", right: "gives off thermal radiation" },
          { left: "Absorber", right: "takes in thermal radiation" },
          { left: "Reflector", right: "bounces thermal radiation away" },
          { left: "Best absorber", right: "a dark, dull, rough surface" },
        ],
        ask: "3 of these are what a surface does with radiation; 1 describes the kind of surface that absorbs most. Match each.",
        hints: [
          "An emitter gives out, an absorber takes in, and a reflector bounces radiation away.",
          "The best absorber is a dark, dull, rough surface.",
        ],
        explain: "An emitter gives off radiation, an absorber takes it in, and a reflector bounces it away. The best absorber is a dark, dull, rough surface, which is also the best emitter.",
      },
      {
        kind: "open",
        prompt: "Object A is a compact cube and object B is a long thin bar. Both have the same volume and the same temperature. Explain why object B cools faster by radiation.",
        modelAnswer: "The rate at which an object radiates energy depends on its surface area: a larger surface area emits radiation faster. Although the 2 objects have the same volume, the long thin bar has a much larger surface area than the compact cube. With more area exposed, object B emits radiation faster than object A, so it loses energy and cools more quickly even though they start at the same temperature.",
        marks: [
          "The rate of radiation increases with surface area.",
          "For the same volume the long thin bar has the larger surface area.",
          "So object B emits faster and cools more quickly than the cube.",
        ],
        ask: "Link the cooling rate to surface area, then compare the areas of the cube and the bar for the same volume.",
      },
      // ---------- Subconcept 5: everyday devices ----------
      {
        kind: "choice",
        question: "A blackened bulb hangs inside a sealed glass tube from which the air has been pumped out. Which process can still deliver thermal energy to the bulb?",
        options: [
          "Conduction only",
          "Convection only",
          "Conduction and convection together",
          "Radiation only",
        ],
        correct: 3,
        ask: "The tube is a vacuum, so any process needing particles is ruled out. What is left?",
        hints: [
          "With no air there are no particles to conduct or to form convection currents.",
          "Only radiation can cross a vacuum, so only radiation can reach the bulb.",
        ],
        explain: "Only radiation can deliver energy to the bulb, because the vacuum has no particles for conduction or convection. Radiation travels as waves and needs no medium, so it alone can cross the vacuum.",
      },
      {
        kind: "choice",
        question: "In a vacuum flask, what is the main job of the silvered (shiny) walls?",
        options: [
          "They reduce radiation, because shiny surfaces are poor emitters",
          "They reduce conduction by trapping a layer of air",
          "They reduce convection by sealing the top of the flask",
          "They keep the liquid stirred so it heats evenly",
        ],
        correct: 0,
        ask: "Each part of the flask blocks one way energy escapes. Shiny walls act against the process that can cross the vacuum. Which one?",
        hints: [
          "The vacuum already blocks conduction and convection, so the walls target the remaining process.",
          "Shiny, silvered surfaces are poor emitters and good reflectors, so they cut radiation losses.",
        ],
        explain: "The silvered walls reduce radiation. Shiny surfaces are poor emitters and good reflectors, so they cut down the energy the hot liquid loses as radiation across the vacuum.",
      },
      {
        kind: "match",
        prompt: "Match each feature of a vacuum flask to the process it mainly reduces.",
        pairs: [
          { left: "The stopper on top", right: "reduces convection" },
          { left: "The trapped air layer", right: "reduces conduction" },
          { left: "The vacuum between the walls", right: "reduces conduction and convection" },
          { left: "The silvered walls", right: "reduce radiation" },
        ],
        ask: "Each feature blocks a different escape route for energy. Match each to the process it cuts.",
        hints: [
          "The stopper stops warm air rising out, and trapped air is a poor conductor.",
          "The vacuum has no particles, so it blocks both conduction and convection, while the silvered walls tackle radiation.",
        ],
        explain: "The stopper reduces convection, the trapped air layer reduces conduction, the vacuum reduces both conduction and convection because it has no particles, and the silvered walls reduce radiation.",
      },
      {
        kind: "tiles",
        prompt: "Build the sentence that explains what the vacuum in a flask does. (2 tiles are not needed.)",
        tiles: ["The", "vacuum", "stops", "conduction", "and", "convection", "radiation", "boiling"],
        answer: ["The", "vacuum", "stops", "conduction", "and", "convection"],
        ask: "The vacuum has no particles at all. Which 2 particle-based processes does that block?",
        hints: [
          "Conduction and convection both need particles to carry energy.",
          "The vacuum stops those 2, while the silvered walls, not the vacuum, deal with radiation.",
        ],
        explain: "The vacuum stops conduction and convection, because both of those need particles and the vacuum has none. Radiation is cut by the silvered walls instead, so radiation and boiling are the tiles left out.",
      },
      {
        kind: "open",
        prompt: "Explain how a vacuum flask keeps a hot drink hot for a long time, referring to conduction, convection and radiation.",
        figure: "fig-09-11-vacuum-flask",
        modelAnswer: "A vacuum flask reduces all 3 ways energy escapes. The vacuum between the double walls has no particles, so it stops conduction and convection through the gap. The silvered, shiny walls are poor emitters and good reflectors, so they reduce the radiation lost from the hot liquid. The stopper on top traps the warm air and prevents convection currents carrying energy out of the neck, and the trapped air and insulating materials further slow conduction. Together these keep the drink hot for a long time.",
        marks: [
          "The vacuum stops conduction and convection because it has no particles.",
          "The silvered walls are poor emitters and good reflectors, reducing radiation.",
          "The stopper prevents convection out of the top and cuts conduction.",
        ],
        ask: "Go through each feature of the flask and say which of the 3 processes it reduces.",
      },
    ],
  },
];
