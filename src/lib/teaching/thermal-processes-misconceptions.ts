// thermal-processes-misconceptions.ts
// Topic: O-Level Physics, Thermal Processes (topicKey "t8-thermal-processes")
// The tutor's diagnostic brain: the classic ways students go wrong in Thermal Processes,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 09 - Thermal Processes.md
// Spoken fields (reteach, tell, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const THERMAL_PROCESSES_MISCONCEPTIONS: Misconception[] = [
  {
    id: "tp-heatflow-1",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    label: "Cold treated as a substance that flows",
    belief: "Coldness flows out of a cold object into a warm one and cools it down.",
    tell: "The student describes cold as moving into the warm object, instead of energy moving out of it.",
    whyItHappens: "In everyday speech we say a cold drink makes our hand cold, so cold sounds like a thing that travels, when really it is only the energy leaving that we notice.",
    reteach: "There is only one thing that actually travels here, and that is thermal energy. It always moves from the hotter place to the cooler place. Coldness is not a substance and it does not flow anywhere. When you hold a cold can, energy leaves your warm hand and passes into the can, so your hand feels colder because it has lost energy. Nothing cold flowed into your hand.",
    microExample: "A warm hand on a cold can: energy flows from hand to can. The hand feels colder because it loses energy, not because cold entered it.",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    check: {
      question: "You put an ice cube on a warm plate and the plate cools where the ice sits. What has actually moved?",
      answer: "Thermal energy has moved out of the plate and into the ice. Cold did not flow into the plate, because coldness is not a substance that travels."
    }
  },
  {
    id: "tp-heatflow-2",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    label: "Energy flows from the object with more energy",
    belief: "Thermal energy flows from the object that holds more energy to the one that holds less.",
    tell: "The student decides the direction of transfer by comparing amounts of stored energy rather than temperatures.",
    whyItHappens: "It feels fair that the fuller store should pour into the emptier one, so students compare total energy instead of temperature, which is what really sets the direction.",
    reteach: "The direction of transfer is set by temperature, not by how much energy each object stores. Energy always flows from the higher temperature to the lower temperature. A big warm bath holds far more energy than a tiny spark, yet the spark is hotter, so energy would flow from the spark to the bath, not the other way. So always compare temperatures to see which way the energy goes.",
    microExample: "A small object at 90 degrees Celsius touching a large object at 20 degrees Celsius: energy flows from the small hot one to the large cool one, because temperature decides the direction.",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    check: {
      question: "A large tank of warm water and a tiny very hot nail are touching. Which way does thermal energy flow?",
      answer: "From the nail to the water, because the nail is at the higher temperature. The amount of energy stored does not decide the direction, the temperature does."
    }
  },
  {
    id: "tp-equilibrium-1",
    topicKey: "t8-thermal-processes",
    subtopic: "energy-transfer-by-heating",
    label: "At the same temperature all energy movement stops",
    belief: "Once two objects reach the same temperature, no energy passes between them at all.",
    tell: "The student says the particles stop exchanging energy completely at thermal equilibrium.",
    whyItHappens: "We are told the transfer stops at the same temperature, so students picture everything freezing in place, missing that it is only the net flow that stops.",
    reteach: "At the same temperature the two objects are in thermal equilibrium. Energy still passes both ways between them all the time, but the amount going each way is now equal, so it balances out. That is why there is no net transfer, and neither object heats up or cools down. It is not that everything stops, it is that the two flows cancel each other.",
    microExample: "Two blocks both at 25 degrees Celsius: energy still passes both ways, but the amounts are equal, so the net transfer is zero and neither block changes temperature.",
    figure: "fig-09-01-energy-transfer-arrow.svg",
    check: {
      question: "Two objects sit touching at the same temperature. Is any energy passing between them?",
      answer: "Yes, energy still passes both ways, but in equal amounts, so there is no net transfer. That balance is what we call thermal equilibrium."
    }
  },
  {
    id: "tp-conduction-travel-1",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    label: "Particles travel along the rod during conduction",
    belief: "In conduction the particles themselves move from the hot end to the cold end, carrying the energy.",
    tell: "The student describes the particles of a solid flowing down the rod like a stream, the way a fluid moves.",
    whyItHappens: "It is easy to picture energy being carried by something moving along, and students borrow the moving-particle idea from convection and apply it to a solid.",
    reteach: "In a solid the particles are held in fixed positions by strong forces, so they cannot travel through the material. They only vibrate on the spot. When one end is heated, those particles vibrate harder and bump their neighbours, passing the vibration along from particle to particle. So it is the vibration and the energy that travel down the rod, not the particles themselves. Particles moving from place to place is convection, and that is a different process.",
    microExample: "Heated metal rod: each particle stays in its fixed spot and only vibrates harder, passing energy to the next particle. The particles do not travel along the rod.",
    figure: "fig-09-03-conduction-particles.svg",
    check: {
      question: "When one end of a metal bar is heated, do the particles at that end travel down to the cold end?",
      answer: "No. They stay in their fixed positions and vibrate more strongly, passing the energy along by knocking their neighbours. Only the energy travels, not the particles."
    }
  },
  {
    id: "tp-conduction-metals-1",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    label: "Metals conduct well only because they are dense or heavy",
    belief: "Metals are good conductors mainly because they are heavy and their particles are packed tightly.",
    tell: "The student explains a metal's good conduction by its weight or density, and never mentions free electrons.",
    whyItHappens: "Metals do feel heavy and solid, so students reach for density as the reason, missing the special feature that metals have and other solids do not.",
    reteach: "The real reason metals are the best conductors is that they contain free electrons that can move right through the material. When the metal is heated, these free electrons pick up energy and travel quickly to the cooler end, delivering energy there. Metals also pass energy by particle vibration like any solid, so they conduct by two methods at once. It is the free electrons, not simply being heavy, that make metals stand out.",
    microExample: "Metal conducts by two paths at once: particle vibration (in all solids) plus free electrons moving quickly (only in metals). The free electrons are the extra reason metals win.",
    figure: "fig-09-03-conduction-particles.svg",
    check: {
      question: "What gives metals their extra ability to conduct thermal energy that non-metals like wood do not have?",
      answer: "Metals have free electrons that move through the material and carry energy quickly to the cool end. That is the extra pathway, on top of particle vibration."
    }
  },
  {
    id: "tp-conductor-feel-1",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    label: "A metal object is colder than a wooden one nearby",
    belief: "A metal handle feels colder than a wooden one beside it, so the metal must be at a lower temperature.",
    tell: "The student concludes that touch tells you temperature, and ranks the metal as colder than the wood.",
    whyItHappens: "Our skin reports how fast energy leaves it, not the real temperature, so a fast conductor genuinely feels colder even when the temperatures match.",
    reteach: "Both objects in the same room are actually at the same temperature. What your hand really senses is how quickly energy is leaving it. Metal is a good conductor, so it draws energy away from your skin fast, and that rapid loss is what feels cold. Wood is a poor conductor, so it takes energy from your hand slowly and feels warmer. The metal is not colder, it just carries your body heat away more quickly.",
    microExample: "Metal doorknob and wooden door, same room: both at room temperature. The metal feels colder only because it conducts energy away from your hand faster.",
    figure: "fig-09-02-conduction-rod.svg",
    check: {
      question: "A metal spoon feels colder than a wooden spoon in the same drawer. Is the metal really at a lower temperature?",
      answer: "No, they are at the same temperature. The metal only feels colder because it conducts energy away from your hand more quickly than the wood does."
    }
  },
  {
    id: "tp-liquid-conduction-1",
    topicKey: "t8-thermal-processes",
    subtopic: "conduction",
    label: "Liquids and gases conduct as well as solids",
    belief: "Water and air conduct thermal energy about as well as a solid does.",
    tell: "The student expects a beaker of water or a pocket of air to pass energy quickly by conduction.",
    whyItHappens: "Water clearly gets hot in a pot, so students assume conduction did it, not realising the heat spread mostly by convection while conduction stayed weak.",
    reteach: "Conduction passes energy along through collisions between particles, so the particles need to be close together for it to work well. In a solid the particles are packed tightly, but in a liquid or a gas they are spaced much farther apart, so those energy-passing collisions happen far less often. That is why liquids and gases are poor conductors. Water in a pot heats mainly by convection, with the warm water rising, not by conduction.",
    microExample: "Water heated near the top of a tube still leaves ice frozen at the bottom, because water is a poor conductor: its particles are too far apart to pass energy quickly.",
    figure: "fig-09-13-ice-tube.svg",
    check: {
      question: "Why is water a poor conductor of thermal energy compared with a metal?",
      answer: "Its particles are spaced much farther apart, so the collisions that pass energy along happen far less often. That makes conduction slow in water."
    }
  },
  {
    id: "tp-insulator-warms-1",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    label: "A jumper or blanket makes heat",
    belief: "Warm clothing and blankets give off heat and make you warmer.",
    tell: "The student says the jumper produces or adds warmth, rather than slowing the loss of the body's own energy.",
    whyItHappens: "A blanket feels warm and we feel warmer under it, so it seems to be a source of heat, when really it is just keeping our own energy in.",
    reteach: "A jumper or blanket does not make any energy of its own. It works because it is a poor conductor and it traps pockets of air, which is also a poor conductor. Together these slow down the escape of the energy your body is already producing. So you stay warm because your own heat is kept in, not because the clothing is adding heat. Take your body away and the blanket does not warm anything.",
    microExample: "Wool and down trap air, a poor conductor, forming an insulating layer that slows energy loss from the body. The clothing adds no energy of its own.",
    figure: "fig-09-02-conduction-rod.svg",
    check: {
      question: "Does a woolly jumper warm you by giving off heat?",
      answer: "No. It makes no heat of its own. It is a poor conductor and traps air, so it slows the loss of the energy your body already makes, keeping you warm."
    }
  },
  {
    id: "tp-doubleglazing-1",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    label: "Double glazing works because the glass is thicker",
    belief: "Double-glazed windows keep heat in because two panes of glass are thicker than one.",
    tell: "The student credits the extra glass for the insulation and overlooks the gap between the panes.",
    whyItHappens: "Two panes do look thicker and sturdier, so students point to the glass, missing that the useful part is the air trapped between them.",
    reteach: "The part that really does the insulating is the layer of trapped air between the two panes, not the glass itself. Air is a poor conductor, so that trapped layer slows the flow of energy between the inside and the outside of the building. The glass mainly holds the air gap in place. It is the trapped air, a poor conductor, that makes double glazing so much better than a single pane.",
    microExample: "Double glazing: a layer of trapped air (a poor conductor) sits between the panes and reduces energy transfer. The gap does the work, not the thickness of the glass.",
    figure: null,
    check: {
      question: "In a double-glazed window, what mainly slows the transfer of energy?",
      answer: "The layer of trapped air between the two panes, because air is a poor conductor. The glass mostly just holds that air gap in place."
    }
  },
  {
    id: "tp-convection-solid-1",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    label: "Convection can happen in solids",
    belief: "Convection currents can be set up in a solid just as they are in a liquid or a gas.",
    tell: "The student explains a heated metal bar using rising and sinking convection currents.",
    whyItHappens: "Once students learn convection they sometimes apply it everywhere, forgetting that it needs particles free to move, which a solid does not allow.",
    reteach: "Convection needs the particles themselves to move about and carry their energy with them. That can only happen in a fluid, which is a liquid or a gas, where particles are free to travel. In a solid the particles are locked in fixed positions and can only vibrate, so they cannot flow to form a current. That is why convection never happens in a solid. Energy moves through a solid by conduction instead.",
    microExample: "A heated metal bar cannot use convection, because its particles are fixed and cannot flow. Energy travels through it by conduction only.",
    figure: "fig-09-04-convection-beaker.svg",
    check: {
      question: "Can convection currents form inside a solid metal block?",
      answer: "No. Convection needs particles that are free to move, and in a solid the particles are fixed in place. So a solid transfers energy by conduction, not convection."
    }
  },
  {
    id: "tp-convection-heatrises-1",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    label: "Heat itself rises",
    belief: "Hot air rises because heat naturally travels upward on its own.",
    tell: "The student explains rising warm fluid by saying heat goes up, without mentioning density.",
    whyItHappens: "We often say heat rises, so students take it literally, missing that what really happens is warm fluid floating on cooler fluid because it is less dense.",
    reteach: "Heat does not have a built-in direction. What actually rises is the warm fluid itself. When a fluid is heated it expands, so the same particles now spread over a bigger volume, which makes it less dense. Being less dense, the warm fluid floats up through the denser cooler fluid around it, just as a cork floats up through water. So it is a density difference that lifts the warm fluid, not heat choosing to go up.",
    microExample: "Warm fluid rises because it has expanded and become less dense than the cooler fluid around it, so it floats up. Heat itself has no direction.",
    figure: "fig-09-04-convection-beaker.svg",
    check: {
      question: "Why does the warm air above a heater rise?",
      answer: "Because the warm air has expanded and become less dense than the cooler air around it, so it floats upward. It is the density difference, not heat rising by itself."
    }
  },
  {
    id: "tp-convection-density-1",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    label: "Heating a fluid makes it denser",
    belief: "When a fluid is heated it gains mass or packs tighter, so its density increases.",
    tell: "The student says the warmed fluid becomes denser and therefore sinks.",
    whyItHappens: "Students know heating changes the fluid, but they mix up the direction, thinking added energy makes it heavier rather than making it spread out.",
    reteach: "When a fluid is heated, no particles are added, so its mass stays the same. What changes is that the particles move more and spread further apart, so the fluid expands and takes up more volume. The same mass now fills a larger volume, which means the density decreases, not increases. Lower density is exactly why the warmed fluid rises instead of sinking.",
    microExample: "Heating a fluid: mass stays the same, volume increases, so density decreases. Since density = mass / volume, a bigger volume gives a smaller density.",
    figure: "fig-09-04-convection-beaker.svg",
    check: {
      question: "When a region of water is heated, does its density go up or down, and why?",
      answer: "It goes down. The water expands so the same mass spreads over a larger volume, and density is mass divided by volume, so a bigger volume means a lower density."
    }
  },
  {
    id: "tp-convection-heatposition-1",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    label: "It does not matter where a fluid is heated",
    belief: "You can heat a fluid at the top or the bottom and it will still spread the energy evenly by convection.",
    tell: "The student says a kettle element could sit at the top and still heat all the water by convection.",
    whyItHappens: "Students know convection spreads energy through a fluid, so they assume it works from any position, missing that the current only forms when warm fluid can rise through cooler fluid.",
    reteach: "For a convection current to circulate, the fluid must be heated at the bottom. Then the warm, less dense fluid rises up through the cooler fluid above it, and cooler denser fluid sinks to take its place, so the whole fluid keeps turning over. If you heat at the top instead, the warm fluid is already at the top and simply stays there, because it will not sink. No current forms and the lower fluid stays cool. That is why a kettle element sits at the bottom.",
    microExample: "Kettle element at the bottom: warm water rises, cool water sinks, a current heats all the water. Heat at the top and the warm water just stays there.",
    figure: "fig-09-13-ice-tube.svg",
    check: {
      question: "Why is the heating element of a kettle placed at the bottom rather than the top?",
      answer: "So the warmed water can rise through the cooler water and set up a convection current that heats it all. Heated at the top, the warm water would just stay there and no current would form."
    }
  },
  {
    id: "tp-seabreeze-1",
    topicKey: "t8-thermal-processes",
    subtopic: "convection",
    label: "Daytime sea breeze blows from land to sea",
    belief: "During the day the coastal breeze blows out from the land towards the sea.",
    tell: "The student reverses the daytime breeze, sending air from land to sea instead of sea to land.",
    whyItHappens: "The names and directions are easy to swap, and students do not always link the breeze to which surface heats up faster in the daytime.",
    reteach: "In the daytime the land warms up faster than the sea. The air above the warm land is heated, becomes less dense and rises. Cooler, denser air then flows in from over the sea to take its place, and that incoming air is the sea breeze. So during the day the breeze blows from the sea towards the land. It is named after where it comes from, the sea. At night it reverses, because then the sea stays warmer.",
    microExample: "Daytime: land warms faster, air over land rises, cool air flows in from the sea. This sea-to-land air is the sea breeze.",
    figure: "fig-09-06-sea-breeze.svg",
    check: {
      question: "In the daytime, which way does the sea breeze blow along a coast, and why?",
      answer: "From the sea towards the land. The land warms faster, so the air above it rises and cooler, denser air flows in from the sea to replace it."
    }
  },
  {
    id: "tp-radiation-medium-1",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    label: "Radiation needs particles to travel through",
    belief: "Like conduction and convection, radiation needs a material or particles to travel through.",
    tell: "The student says energy from the Sun could not cross empty space, or that radiation stops in a vacuum.",
    whyItHappens: "The first two processes both rely on particles, so students expect the third to need them as well, missing that radiation is carried by waves rather than particles.",
    reteach: "Radiation is different from the other two. It transfers energy as electromagnetic waves, and those waves do not need any particles or medium to travel. This means radiation can cross an empty vacuum. That is exactly how the Sun's energy reaches us, crossing the empty space between the Sun and the Earth as electromagnetic waves. So radiation is the only one of the three that works through a vacuum.",
    microExample: "The Sun's energy crosses the empty vacuum of space to reach Earth as electromagnetic waves. Conduction and convection cannot do this, because they need particles.",
    figure: "fig-09-09-radiation-surfaces.svg",
    check: {
      question: "How does the Sun's energy reach the Earth across empty space?",
      answer: "By radiation, as electromagnetic waves. Radiation needs no particles or medium, so it can travel through the vacuum of space. Conduction and convection cannot."
    }
  },
  {
    id: "tp-radiation-emitall-1",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    label: "Only very hot glowing objects emit radiation",
    belief: "An object only gives off thermal radiation once it is hot enough to glow.",
    tell: "The student says a cool object like an ice cube or a person emits no radiation at all.",
    whyItHappens: "We notice radiation most from glowing fires and hot metal, so students think emission switches on only at high temperatures.",
    reteach: "Every object gives off thermal radiation all the time, as long as it is above absolute zero, which is about minus 273 degrees Celsius. Even a cool object like your own body or an ice cube is emitting radiation. What changes with temperature is how much: the hotter a surface is compared with its surroundings, the greater its rate of emission. So a glowing fire radiates strongly, but a cool object still radiates, just less.",
    microExample: "Every object above absolute zero (about -273 degrees Celsius) emits radiation. A hotter surface simply emits at a greater rate than a cool one.",
    figure: "fig-09-09-radiation-surfaces.svg",
    check: {
      question: "Does a cool object, like a person at room temperature, give off any thermal radiation?",
      answer: "Yes. Every object above absolute zero emits radiation all the time. A hotter surface just emits more, but cool objects still radiate."
    }
  },
  {
    id: "tp-radiation-absorb-1",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    label: "Shiny light surfaces are the best absorbers",
    belief: "A shiny, light-coloured surface absorbs radiation best, while a dull black one absorbs least.",
    tell: "The student picks the shiny or white surface as the one that heats up fastest in the Sun.",
    whyItHappens: "Shiny surfaces look bright and eye-catching, so students link brightness with taking in energy, when brightness actually means the surface is throwing radiation back.",
    reteach: "It is the other way round. Dark, dull and rough surfaces are the best absorbers of radiation, so they heat up fastest in the Sun. Light-coloured, shiny and smooth surfaces are the best reflectors, so they bounce radiation away and absorb it only poorly. That is why a black car gets hot in the Sun while a white one stays cooler. Bright and shiny means good at reflecting, not good at absorbing.",
    microExample: "In the Sun, a matt black surface absorbs radiation well and heats fastest. A shiny white surface reflects radiation away, so it stays cooler.",
    figure: "fig-09-09-radiation-surfaces.svg",
    check: {
      question: "Two cans of water, one matt black and one shiny white, are left in the Sun. Which water warms up faster?",
      answer: "The water in the matt black can. Dark dull surfaces are the best absorbers of radiation, while the shiny surface reflects most of it away."
    }
  },
  {
    id: "tp-radiation-emitter-1",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    label: "A good absorber is a poor emitter",
    belief: "A black surface absorbs well but a shiny surface is the one that emits radiation best.",
    tell: "The student treats absorbing and emitting as opposite skills, pairing shiny surfaces with good emission.",
    whyItHappens: "It feels like a surface should be good at one job or the other, so students split absorbing and emitting between the two surfaces instead of tying them together.",
    reteach: "Absorbing and emitting go together. A surface that is a good absorber is also a good emitter, and a surface that is a poor absorber is also a poor emitter. So a dark, dull surface is good at both taking in and giving off radiation, while a shiny, light surface is poor at both. That is why a hot object cools fastest if it is painted matt black, and why a shiny flask keeps a drink warm by emitting very little.",
    microExample: "Dark dull surface: good absorber and good emitter. Shiny light surface: poor absorber and poor emitter. The two abilities always match.",
    figure: "fig-09-12-radiation-flasks.svg",
    check: {
      question: "A surface is an excellent absorber of radiation. Is it a good or a poor emitter?",
      answer: "A good emitter. Absorbing and emitting always go together, so a good absorber is also a good emitter, and a poor absorber is also a poor emitter."
    }
  },
  {
    id: "tp-radiation-area-1",
    topicKey: "t8-thermal-processes",
    subtopic: "radiation",
    label: "Equal volumes must radiate at the same rate",
    belief: "Two objects with the same volume always emit radiation at the same rate.",
    tell: "The student compares objects by volume alone and ignores how spread out their surfaces are.",
    whyItHappens: "Volume is the size students think of first, so they assume same size means same radiation, missing that it is the surface area that faces the surroundings.",
    reteach: "What matters for radiation is the surface area, not the volume. Radiation is emitted from the surface, so the larger the surface area, the greater the rate of emission. Two objects can have the same volume but very different surface areas. A long thin bar has far more surface than a compact cube of the same volume, so the bar radiates much faster. So to compare rates of radiation, look at the surface area, not just the volume.",
    microExample: "Same volume of 64 cm^3: a long thin bar (surface area 258 cm^2) radiates far faster than a cube (surface area 96 cm^2), because its surface area is larger.",
    figure: "fig-09-10-radiation-surface-area.svg",
    check: {
      question: "A cube and a long thin bar have the same volume. Which one emits radiation faster?",
      answer: "The long thin bar, because it has the larger surface area. Radiation comes from the surface, so surface area matters, not just the volume."
    }
  },
  {
    id: "tp-flask-adds-1",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    label: "A vacuum flask adds heat to keep a drink warm",
    belief: "A vacuum flask keeps a drink hot by warming it or adding energy to it.",
    tell: "The student says the flask heats the drink, and is surprised that the same flask can keep a cold drink cold.",
    whyItHappens: "A flask keeps a drink warm for hours, so it seems to be doing something active, when really it is only slowing the escape of the drink's own energy.",
    reteach: "A vacuum flask adds no energy at all. It simply slows down all three ways that energy could move in or out. The stopper cuts convection, the trapped air and the vacuum cut conduction, and the silvered walls cut radiation. Because it only slows transfer, the very same flask keeps a hot drink hot and a cold drink cold. It is not heating or cooling anything, just holding the temperature it was given for longer.",
    microExample: "A vacuum flask slows all three transfers, so it keeps a hot drink hot and a cold drink cold. It adds no energy of its own.",
    figure: "fig-09-11-vacuum-flask.svg",
    check: {
      question: "Does a vacuum flask keep a drink warm by adding heat to it?",
      answer: "No. It adds no energy. It just slows all three ways energy could escape, which is why the same flask can also keep a cold drink cold."
    }
  },
  {
    id: "tp-vacuum-radiation-1",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    label: "The vacuum stops all three heat transfers",
    belief: "The vacuum in a flask blocks conduction, convection and radiation all together.",
    tell: "The student credits the vacuum with stopping radiation too, and cannot explain why the walls are silvered.",
    whyItHappens: "The vacuum is such a good barrier that students assume it handles everything, forgetting that radiation does not need particles and so crosses it freely.",
    reteach: "The vacuum stops conduction and convection, because both of those need particles and a vacuum has none. But radiation is carried by waves and needs no particles, so it passes straight across the vacuum. That is why the flask also has silvered walls. The shiny silver is a poor emitter and a good reflector, so it reflects radiation back towards the drink. The vacuum handles two of the three processes, and the silvering deals with the third.",
    microExample: "Vacuum: stops conduction and convection (no particles), but radiation still crosses it. That is why the walls are silvered, to reflect the radiation back.",
    figure: "fig-09-11-vacuum-flask.svg",
    check: {
      question: "Does the vacuum in a flask stop radiation as well as conduction and convection?",
      answer: "No. The vacuum stops conduction and convection, but radiation crosses it freely because it needs no particles. The silvered walls are what cut down the radiation."
    }
  },
  {
    id: "tp-silver-conduction-1",
    topicKey: "t8-thermal-processes",
    subtopic: "reducing-heat-transfer",
    label: "Silvered walls reduce heat loss by conduction",
    belief: "The shiny silver lining of a flask keeps the drink warm by cutting down conduction.",
    tell: "The student names the silvered walls as the feature that reduces conduction, mixing it up with the vacuum.",
    whyItHappens: "Silver is a metal and metals conduct well, so students link the silvering to conduction, missing that its shiny surface is really about radiation.",
    reteach: "The silvered walls deal with radiation, not conduction. A shiny silver surface is a poor emitter and a good reflector, so it gives off very little radiation and reflects radiation back towards the drink. The job of cutting conduction belongs to the vacuum and the trapped air, which have few or no particles to pass energy along. So match the silvering to radiation, and the vacuum to conduction and convection.",
    microExample: "Silvered walls: shiny surface is a poor emitter and good reflector, so it reduces radiation. Conduction is cut by the vacuum and trapped air instead.",
    figure: "fig-09-11-vacuum-flask.svg",
    check: {
      question: "Which process do the silvered walls of a vacuum flask mainly reduce?",
      answer: "Radiation. The shiny silver is a poor emitter and a good reflector, so it reflects radiation back. Conduction and convection are cut by the vacuum instead."
    }
  }
];
