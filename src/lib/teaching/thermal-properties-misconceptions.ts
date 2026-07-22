// thermal-properties-misconceptions.ts
// Topic: O-Level Physics, Thermal Properties of Matter (topicKey "t9-thermal-properties-of-matter").
// The tutor's diagnostic brain: the classic ways students go wrong in this unit,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Chapter 10 - Thermal Properties of Matter.md
// Spoken fields (reteach, tell, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const THERMAL_PROPERTIES_MISCONCEPTIONS: Misconception[] = [
  {
    id: "th-internal-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "internal-energy",
    label: "Internal energy treated as kinetic energy only",
    belief: "The internal energy of a body is just the kinetic energy of its particles.",
    tell: "The student defines internal energy as the movement energy of the particles and leaves out the stored energy in the forces between them.",
    whyItHappens: "Movement is easy to picture, so students remember the kinetic part and forget that the particles also store energy in the attractive forces that hold them near each other.",
    reteach: "Internal energy has two parts, not one. The first part is the kinetic energy, the energy the particles have because they are moving, vibrating or flying about. The second part is the potential energy, the energy stored in the attractive forces between the particles, which depends on how far apart they sit. So the internal energy is the total kinetic energy plus the total potential energy of all the particles, and you must count both.",
    microExample: "internal energy = total KE of particles + total PE of particles (not KE alone).",
    figure: "fig-10-01-internal-energy-states.svg",
    check: {
      question: "Internal energy is made of two kinds of particle energy. What are they?",
      answer: "The kinetic energy from the particles moving, and the potential energy stored in the forces between them. Internal energy is the total of both."
    }
  },
  {
    id: "th-internal-2",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "internal-energy",
    label: "Wrong energy split between solids, liquids and gases",
    belief: "A gas stores a large potential energy, and a solid stores a large kinetic energy.",
    tell: "The student says a gas is mostly potential energy, or that a solid's energy is mostly the fast movement of its particles.",
    whyItHappens: "Gases clearly move fast and feel energetic, so students wrongly credit that to potential energy, and they forget that in a solid the particles are locked in place and can only vibrate slowly.",
    reteach: "Let us match each state to its energy. In a solid the particles are locked in a fixed pattern by strong forces, so they store a large potential energy but only a small kinetic energy. In a gas the particles are far apart with almost no forces between them, so their potential energy is negligible and their energy is almost entirely kinetic. A liquid sits in between. So a gas is nearly all kinetic energy, and a solid holds a large share of potential energy.",
    microExample: "gas: negligible PE, large KE. solid: large PE, small KE. liquid: in between.",
    figure: "fig-10-01-internal-energy-states.svg",
    check: {
      question: "In which state is the internal energy almost entirely kinetic energy?",
      answer: "In a gas, because the particles are so far apart that the forces between them are negligible, so there is almost no potential energy."
    }
  },
  {
    id: "th-temp-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "temperature-vs-heat",
    label: "Temperature read as total energy, so a bigger body is hotter",
    belief: "Temperature measures the total energy of a body, so a bigger body is at a higher temperature.",
    tell: "The student says the larger of two objects made of the same stuff at the same temperature must be hotter, because it holds more energy.",
    whyItHappens: "A larger body really does store more internal energy, so students assume more energy must always mean a higher temperature, missing that temperature is an average, not a total.",
    reteach: "Temperature is not the total energy, it is a measure of the average kinetic energy of the particles. A large jug and a small cup of water at the same temperature have particles with the same average kinetic energy, so they read the same on a thermometer. The jug does store more internal energy overall, simply because it has more particles, but that extra energy is spread over more particles, so the average, and therefore the temperature, is unchanged.",
    microExample: "Jug and cup of water both at 60 C: same temperature (same average KE), but the jug has more total internal energy.",
    figure: "fig-10-02-heat-vs-latent.svg",
    check: {
      question: "A large jug and a small cup of water are both at sixty degrees Celsius. Which is at the higher temperature?",
      answer: "Neither, they are at the same temperature, because temperature is the average kinetic energy of the particles. The jug just holds more total energy because it has more particles."
    }
  },
  {
    id: "th-heat-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "temperature-vs-heat",
    label: "Heat and temperature used as the same thing",
    belief: "Heat and temperature are two words for the same quantity.",
    tell: "The student swaps the words heat and temperature freely, or says a hotter body always contains more heat.",
    whyItHappens: "In everyday talk we say something is full of heat when we mean it is hot, so the two ideas blur together.",
    reteach: "These are two different ideas. Heat is energy that flows from a hotter body to a cooler one because of the temperature difference between them, and it is measured in joules. Temperature tells you how hot a body is, and it is measured in degrees Celsius or kelvin. A body at a higher temperature does not automatically hold more heat energy, because the amount of energy also depends on the mass and the material. So keep the two words apart: heat is energy on the move, temperature is how hot.",
    microExample: "A spark at 1000 C carries little energy; a warm bath at 40 C carries far more, because heat depends on mass too, not temperature alone.",
    figure: "fig-10-02-heat-vs-latent.svg",
    check: {
      question: "Is a body at a higher temperature always holding more heat energy than a cooler one?",
      answer: "No. The energy also depends on the mass and the material, so a small very hot object can hold less energy than a large warm one."
    }
  },
  {
    id: "th-heatcap-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heat-capacity",
    label: "Heat capacity and specific heat capacity confused",
    belief: "Heat capacity and specific heat capacity mean the same thing.",
    tell: "The student defines heat capacity as the energy to warm one kilogram, or uses the specific value where the whole-object value is needed.",
    whyItHappens: "The two names sound almost identical, so the extra word specific, which brings in the one kilogram, is easy to overlook.",
    reteach: "The difference is the one kilogram. Heat capacity describes one particular object, and it is the energy needed to raise that whole object's temperature by one kelvin, measured in joules per kelvin. Specific heat capacity describes a material, and it is the energy needed to raise one kilogram of it by one kelvin, measured in joules per kilogram per kelvin. So a big kettle and a small cup of water share the same specific heat capacity, but the kettle has the larger heat capacity because it holds more water.",
    microExample: "C = Q / dT (per object, J/K). c = Q / (m x dT) (per kilogram, J/(kg K)).",
    figure: null,
    check: {
      question: "Which one is measured for one kilogram of a material, heat capacity or specific heat capacity?",
      answer: "Specific heat capacity, because it is the energy to warm one kilogram by one kelvin. Heat capacity is for the whole object, whatever its mass."
    }
  },
  {
    id: "th-shc-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    label: "Mass left out of the heat equation",
    belief: "You can work out the energy from just the specific heat capacity and the temperature change.",
    tell: "The student writes energy equals specific heat capacity times temperature change and forgets to multiply by the mass.",
    whyItHappens: "The temperature change and the material feel like the whole story, so the mass gets dropped, especially when it is not the last number written in the question.",
    reteach: "The full relationship is energy equals mass times specific heat capacity times the change in temperature. All three factors matter. The specific heat capacity is already for one kilogram, so if you have more than a kilogram you must multiply by the mass to scale it up. Leaving the mass out gives the energy for just one kilogram, which is too small whenever the real mass is bigger. So always include all three: mass, specific heat capacity, and temperature change.",
    microExample: "3.0 kg water, dT = 40: Q = m c dT = 3.0 x 4200 x 40 = 5.04 x 10^5 J (not 4200 x 40).",
    figure: null,
    check: {
      question: "In the equation energy equals m c delta theta, which quantity do students most often forget to include?",
      answer: "The mass. The specific heat capacity is only for one kilogram, so you must multiply by the mass to get the energy for the whole sample."
    }
  },
  {
    id: "th-shc-2",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    label: "Final temperature used instead of the change",
    belief: "You put the final temperature straight into the heat equation.",
    tell: "The student uses the end temperature, or subtracts a negative start temperature wrongly, instead of the true change in temperature.",
    whyItHappens: "The final reading is the number that stands out, so it gets used in place of the change, and negative starting temperatures make the subtraction easy to slip on.",
    reteach: "The equation needs the change in temperature, not the final temperature. The change is the final temperature take away the starting temperature. If a block goes from fifteen to fifty five degrees, the change is forty degrees, not fifty five. And watch negative starts: from minus eight up to forty two degrees, the change is forty two take away minus eight, which is fifty degrees, because subtracting a negative adds. So always find the difference first, then substitute.",
    microExample: "From -8 C to 42 C: dT = 42 - (-8) = 50 (not 42, and not 42 - 8 = 34).",
    figure: null,
    check: {
      question: "A liquid warms from minus eight degrees Celsius to forty two degrees Celsius. What is the temperature change to use in the equation?",
      answer: "Fifty degrees, because forty two take away minus eight is fifty. Subtracting a negative adds it on."
    }
  },
  {
    id: "th-shc-3",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    label: "Higher specific heat capacity thought to heat up faster",
    belief: "A material with a higher specific heat capacity heats up and cools down more quickly.",
    tell: "The student picks the steeper heating or cooling curve as the higher specific heat capacity, or chooses a high specific heat material for a part that needs to warm quickly.",
    whyItHappens: "The word capacity sounds like it should mean quick or powerful, so students link a big value to fast heating, when it actually means the opposite.",
    reteach: "A higher specific heat capacity means the material needs more energy for each kilogram and each degree, so under the same heating it warms up more slowly and its heating curve is gentler, not steeper. The same goes for cooling: it releases more energy per degree, so it cools slowly too. So a gentle curve means a high specific heat capacity, and a steep curve means a low one. For a part that must heat quickly, like a pan base, you want a low specific heat capacity.",
    microExample: "Same heating, equal mass: liquid with higher c has the gentler (less steep) curve and heats slower.",
    figure: "fig-10-03-cooling-curves-AB.svg",
    check: {
      question: "Two equal masses are cooled the same way. One has a gentler cooling curve. Which has the higher specific heat capacity?",
      answer: "The one with the gentler curve, because a higher specific heat capacity means it must lose more energy per degree, so it cools more slowly."
    }
  },
  {
    id: "th-latent-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    label: "Latent heat thought to raise the temperature",
    belief: "The latent heat added during a change of state makes the temperature rise.",
    tell: "The student expects the thermometer to climb while a substance is melting or boiling, since energy is still going in.",
    whyItHappens: "Everywhere else, adding energy raises the temperature, so it feels strange that during a change of state the reading holds still.",
    reteach: "Latent heat is the energy taken in or given out when a substance changes state, and it does not change the temperature at all. The energy goes into pulling the particles further apart, which raises their potential energy, not their kinetic energy. Since temperature depends on the average kinetic energy, and that stays the same, the thermometer holds steady. That is why the energy is called hidden, or latent: it goes in but does not show up as a temperature rise.",
    microExample: "Ice melting at 0 C: energy in, but temperature stays at 0 C the whole time.",
    figure: "fig-10-02-heat-vs-latent.svg",
    check: {
      question: "While a solid is melting, energy keeps flowing in. What happens to its temperature?",
      answer: "It stays constant. The energy raises the particles' potential energy, not their kinetic energy, so the temperature does not change."
    }
  },
  {
    id: "th-latent-2",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    label: "Wrong equation used for a change of state",
    belief: "You use energy equals m c delta theta for melting and boiling too.",
    tell: "The student reaches for m c delta theta during a change of state, and since the temperature change is zero, concludes that no energy is needed.",
    whyItHappens: "The heat equation is met first and used most, so it gets applied everywhere, even where the temperature does not change and it no longer fits.",
    reteach: "For a change of state at constant temperature, use energy equals specific latent heat times mass, not m c delta theta. The equation m c delta theta only works while the temperature is changing. During melting or boiling the temperature change is zero, so m c delta theta would wrongly give zero energy, yet melting ice clearly needs energy. So for the flat, constant temperature parts, switch to latent heat, which is energy equals l times m.",
    microExample: "Melt 4.0 kg ice: use L = l m = 3.36 x 10^5 x 4.0 = 1.34 x 10^6 J (not m c dT, which gives 0).",
    figure: null,
    check: {
      question: "Which equation gives the energy to melt ice at zero degrees Celsius, m c delta theta or l times m?",
      answer: "l times m, the latent heat equation. m c delta theta would give zero because the temperature does not change, which cannot be right."
    }
  },
  {
    id: "th-latent-3",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    label: "Fusion and vaporisation latent heats thought equal",
    belief: "The specific latent heat of fusion is the same as, or larger than, the specific latent heat of vaporisation.",
    tell: "The student treats melting and boiling as needing the same energy, or expects the melting plateau to be the longer one.",
    whyItHappens: "Both are called latent heat and both happen at constant temperature, so students assume the two values must be similar.",
    reteach: "For the same substance, the specific latent heat of vaporisation is much larger than the specific latent heat of fusion. Melting only loosens the particles so they can slide, but boiling has to pull them completely apart, which takes far more energy. For water, fusion is about three hundred and thirty six thousand joules per kilogram, while vaporisation is about two point two six million joules per kilogram. That is also why the boiling plateau on a heating curve is longer than the melting plateau.",
    microExample: "Water: l_f = 3.36 x 10^5 J/kg but l_v = 2.26 x 10^6 J/kg, so vaporisation needs far more energy.",
    figure: "fig-10-06-heating-curve.svg",
    check: {
      question: "For water, which needs more energy per kilogram, melting or boiling?",
      answer: "Boiling, by a lot. Boiling pulls the particles completely apart, so the latent heat of vaporisation is much larger than the latent heat of fusion."
    }
  },
  {
    id: "th-state-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "changes-of-state",
    label: "Temperature thought to keep rising during melting or boiling",
    belief: "While a substance melts or boils, its temperature keeps going up because heating continues.",
    tell: "The student draws the heating curve sloping upward through the change of state instead of flat.",
    whyItHappens: "The heater is still on, so students expect the temperature to keep climbing, missing that the energy is doing a different job during the change of state.",
    reteach: "During melting or boiling the temperature stays constant, even though the heater keeps supplying energy. That energy is used to change the state, by increasing the particles' potential energy as they pull apart, not their kinetic energy. Since temperature follows the average kinetic energy, and that is unchanged, the temperature holds level. On a heating curve this shows up as a flat plateau, and the temperature only starts rising again once the change of state is complete.",
    microExample: "Water boiling at 100 C: heater still on, but the temperature holds at 100 C until all the water has boiled away.",
    figure: "fig-10-06-heating-curve.svg",
    check: {
      question: "Water is boiling steadily on a hot stove. What is happening to its temperature?",
      answer: "It stays constant at the boiling point. The energy is changing the liquid into gas, not raising the temperature, so it holds level until the water has all boiled."
    }
  },
  {
    id: "th-state-2",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "changes-of-state",
    label: "Kinetic energy thought to rise during a change of state",
    belief: "As a substance melts or boils, its particles speed up and gain kinetic energy.",
    tell: "The student says the particles move faster during melting, and links the added energy to more movement rather than to separation.",
    whyItHappens: "Adding energy usually speeds particles up, so students carry that over to a change of state, forgetting that here the energy goes into separating the particles instead.",
    reteach: "During a change of state the particles' kinetic energy stays the same, and it is their potential energy that increases. The energy going in does work against the forces between the particles, pulling them further apart, which raises the potential energy. Their average speed, and so their kinetic energy, does not change, which is exactly why the temperature stays constant. So melting and boiling change the spacing of the particles, not how fast they are moving.",
    microExample: "Ice melting at 0 C: PE of particles increases, KE stays the same, so temperature is constant.",
    figure: "fig-10-08-heating-cooling-regions.svg",
    check: {
      question: "While ice is melting, does the kinetic energy of the particles go up, or their potential energy?",
      answer: "Their potential energy goes up as the particles pull apart. The kinetic energy stays the same, which is why the temperature does not change."
    }
  },
  {
    id: "th-state-3",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "changes-of-state",
    label: "Freezing and condensation thought to absorb energy",
    belief: "Freezing and condensation take in energy, the same way melting and boiling do.",
    tell: "The student marks energy as absorbed when a liquid freezes or a gas condenses.",
    whyItHappens: "Melting and boiling absorb energy, so students assume every change of state absorbs, missing that the reverse changes give energy back out.",
    reteach: "Freezing and condensation release energy, they do not absorb it. They are the reverse of melting and boiling. When a liquid freezes, its particles fall closer together and their potential energy drops, and that lost energy is given out to the surroundings. Condensation works the same way as a gas turns to liquid. So melting and boiling take energy in, while freezing and condensation give energy back out, all at constant temperature.",
    microExample: "Water freezing at 0 C: energy is released to the surroundings (the reverse of melting, which absorbs energy).",
    figure: "fig-10-07-cooling-curve.svg",
    check: {
      question: "When a gas condenses into a liquid, is energy absorbed or released?",
      answer: "Released. Condensation is the reverse of boiling, so the energy that boiling took in is given back out to the surroundings."
    }
  },
  {
    id: "th-curve-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heating-and-cooling-curves",
    label: "Flat plateau read as heating having stopped",
    belief: "A flat plateau on a heating curve means the heating has paused or nothing is happening.",
    tell: "The student says no energy is being supplied during the flat part, or that the substance is just sitting idle.",
    whyItHappens: "A flat line looks like nothing is changing, so students assume the energy supply must have stopped, when it is actually still flowing and doing hidden work.",
    reteach: "A flat plateau does not mean the heating has stopped. Energy is still being supplied steadily the whole time. During the plateau that energy is changing the state of the substance, melting or boiling it, by raising the particles' potential energy. The temperature holds level only because the energy is doing this separating job instead of speeding the particles up. So a plateau is a very busy time, it is where the change of state happens, not a pause.",
    microExample: "Flat part of a heating curve: heater still on, energy still supplied, but it goes into the change of state, so temperature holds.",
    figure: "fig-10-06-heating-curve.svg",
    check: {
      question: "During the flat plateau of a heating curve, has the energy supply stopped?",
      answer: "No, energy is still being supplied. It is changing the state of the substance, which is why the temperature stays constant instead of rising."
    }
  },
  {
    id: "th-curve-2",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heating-and-cooling-curves",
    label: "Change of state placed on the sloping part",
    belief: "The change of state happens on the sloping part of the heating or cooling curve.",
    tell: "The student points to a rising or falling section as the melting or boiling, instead of the flat plateau.",
    whyItHappens: "Students link the change of state to the energy going in, and the sloping part looks like the active bit, so they miss that a change of state must happen at constant temperature.",
    reteach: "On a heating or cooling curve, the sloping parts and the flat plateaus mean different things. On the sloping parts the temperature is changing, so the energy is changing the particles' kinetic energy, and there is no change of state, just warming or cooling linked to the heat capacity. The flat plateaus are where the change of state happens, at constant temperature, and the energy there is the latent heat. So melting and boiling live on the flat plateaus, never on the slopes.",
    microExample: "Sloping = temperature changing, heat capacity, no state change. Flat plateau = change of state, latent heat.",
    figure: "fig-10-08-heating-cooling-regions.svg",
    check: {
      question: "On a heating curve, is the change of state shown by a sloping part or a flat plateau?",
      answer: "A flat plateau, because a change of state happens at constant temperature. The sloping parts are just warming or cooling with no change of state."
    }
  },
  {
    id: "th-boilevap-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    label: "Boiling and evaporation treated as the same process",
    belief: "Boiling and evaporation are the same process under two names.",
    tell: "The student says both happen at the boiling point, or both happen throughout the liquid, treating them as identical.",
    whyItHappens: "Both turn a liquid into a gas, so students see one process, missing that they differ in temperature, place, and effect.",
    reteach: "Boiling and evaporation both turn liquid into gas, but they are not the same. Boiling happens only at one fixed temperature, the boiling point, and it takes place throughout the whole liquid, with bubbles forming inside it. Evaporation happens at any temperature below the boiling point, and only at the surface of the liquid. Boiling keeps the temperature constant, while evaporation cools the liquid down. So the two differ in temperature, where they occur, and their effect on the liquid.",
    microExample: "Boiling: fixed boiling point, throughout the liquid. Evaporation: any lower temperature, surface only, with cooling.",
    figure: "fig-10-09-evaporation.svg",
    check: {
      question: "Name one way boiling is different from evaporation.",
      answer: "Boiling happens only at the boiling point and throughout the liquid, while evaporation happens at any lower temperature and only at the surface."
    }
  },
  {
    id: "th-evap-1",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    label: "Evaporation thought to need the boiling point",
    belief: "Evaporation can only happen at or above the boiling point.",
    tell: "The student says a puddle cannot evaporate in a cool room, or that a liquid must be heated to its boiling point before it evaporates.",
    whyItHappens: "Students tie all liquid to gas changes to boiling, so they assume evaporation also needs that high, fixed temperature.",
    reteach: "Evaporation happens at any temperature below the boiling point, so no heating to the boiling point is needed. At the surface the particles have a range of speeds, and the fastest ones can escape into the air even when the liquid is cool. That is why a puddle slowly dries up in a cold room and wet clothes dry on a line without being boiled. Evaporation is slower when it is cooler, but it still happens.",
    microExample: "A pool of water in a room at 10 C slowly evaporates away, well below water's boiling point of 100 C.",
    figure: "fig-10-15-water-pool-floor.svg",
    check: {
      question: "Can a pool of water evaporate in a cold room that is well below the boiling point?",
      answer: "Yes. Evaporation happens at any temperature below the boiling point, because the fastest surface particles can still escape. It is just slower when it is cold."
    }
  },
  {
    id: "th-evap-2",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    label: "Evaporation thought to occur throughout the liquid",
    belief: "Evaporation takes place throughout the whole body of the liquid.",
    tell: "The student describes bubbles forming inside the liquid during evaporation, treating it like boiling.",
    whyItHappens: "Boiling forms bubbles all through the liquid, and students carry that picture over to evaporation.",
    reteach: "Evaporation takes place only at the surface of the liquid, not throughout it. Only the particles right at the surface are next to the air and free to escape, so no bubbles form inside. Boiling is the one that happens throughout the whole liquid, with bubbles of gas forming deep inside and rising up. So a wider surface speeds up evaporation, because more surface particles are exposed, while what happens deep in the liquid does not matter for evaporation.",
    microExample: "Evaporation: surface particles only, no bubbles inside. Boiling: bubbles form throughout the liquid.",
    figure: "fig-10-09-evaporation.svg",
    check: {
      question: "Does evaporation happen throughout the whole liquid, or only at the surface?",
      answer: "Only at the surface, because just the surface particles are free to escape into the air. Boiling is the one that happens throughout the liquid."
    }
  },
  {
    id: "th-evap-3",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    label: "Evaporation thought to warm the liquid, or have no cooling effect",
    belief: "Evaporation warms the liquid, or has no effect on its temperature.",
    tell: "The student cannot say why sweating cools you, or claims the leftover liquid stays the same temperature.",
    whyItHappens: "Students do not track which particles leave, so they miss that losing the fastest ones lowers the average energy of what remains.",
    reteach: "Evaporation cools the liquid that is left behind. The particles at the surface have a range of speeds, and it is the fastest, highest energy ones that break free and escape. Once they leave, the particles remaining have a lower average kinetic energy, so the temperature of the liquid falls. This is the cooling effect of evaporation, and it is why sweat cools your skin and why you feel cold stepping out of a pool. Evaporation always cools, it never warms.",
    microExample: "Fastest surface particles escape, so the average KE of those left falls, and the liquid's temperature drops (cooling effect).",
    figure: "fig-10-09-evaporation.svg",
    check: {
      question: "Why does evaporation cool the liquid that is left behind?",
      answer: "Because the fastest, highest energy particles escape first. That lowers the average kinetic energy of the particles left, so the temperature falls."
    }
  },
  {
    id: "th-evap-4",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    label: "Higher humidity thought to speed up evaporation",
    belief: "More humid, damper air makes a liquid evaporate faster.",
    tell: "The student says washing dries more quickly on a humid day, or that damp air pulls more vapour off the surface.",
    whyItHappens: "Students focus on the liquid alone and forget that the air has to have room to take in the escaping vapour.",
    reteach: "Higher humidity actually slows evaporation down. Humidity is how much water vapour the air already holds. When the air is damp, it is closer to full, so fewer escaped particles can be carried away, and some drift back into the liquid. Drier air has more room to take in vapour, so more particles can leave and evaporation is faster. That is why washing dries quickly on a dry, breezy day and slowly on a humid one.",
    microExample: "Drier air (low humidity) speeds evaporation up; damp air (high humidity) slows it down.",
    figure: null,
    check: {
      question: "Does washing on a line dry faster in dry air or in humid air?",
      answer: "In dry air. Drier air has more room to take in the vapour, so evaporation is faster. Humid air slows it down."
    }
  }
];
