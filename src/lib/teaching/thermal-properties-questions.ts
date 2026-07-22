// thermal-properties-questions.ts
// Teaching question bank for O-Level Physics, Thermal Properties of Matter
// (topicKey "t9-thermal-properties-of-matter").
// Every wrong option maps to the misconception it reveals (see thermal-properties-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Chapter 10 - Thermal Properties of Matter.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const THERMAL_PROPERTIES_QUESTIONS: TeachQuestion[] = [
  {
    id: "th-q-01",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "internal-energy",
    stem: "What is the internal energy of a body?",
    figure: "fig-10-01-internal-energy-states.svg",
    options: [
      "The total kinetic energy plus the total potential energy of its particles.",
      "Only the total kinetic energy of its particles.",
      "Only the total potential energy of its particles.",
      "The average kinetic energy of its particles."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-internal-1", 2: "th-internal-1", 3: "th-temp-1" },
    walkthrough: [
      "Internal energy has two parts, not one.",
      "The first part is the kinetic energy, from the particles moving about.",
      "The second part is the potential energy, stored in the forces between the particles.",
      "So the internal energy is the total kinetic energy plus the total potential energy of all the particles."
    ],
    explain: "Internal energy is the total kinetic energy plus the total potential energy of all the particles, so you must count both parts. Leaving out the potential energy, or leaving out the kinetic energy, only tells half the story. The average kinetic energy on its own is not internal energy, that quantity is what temperature measures."
  },
  {
    id: "th-q-02",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "internal-energy",
    stem: "In which state of matter is the internal energy almost entirely kinetic energy?",
    figure: "fig-10-01-internal-energy-states.svg",
    options: ["A gas.", "A solid.", "A liquid.", "All three states equally."],
    correct: 0,
    distractorMisconceptions: { 1: "th-internal-2", 2: "th-internal-2", 3: "th-internal-2" },
    walkthrough: [
      "In a gas the particles are far apart with almost no forces between them.",
      "With almost no forces, there is almost no potential energy stored.",
      "So a gas has negligible potential energy and its energy is almost all kinetic.",
      "A solid, by contrast, stores a large potential energy because its particles are held close by strong forces."
    ],
    explain: "In a gas the particles are so far apart that the forces between them are negligible, so there is almost no potential energy and the internal energy is almost entirely kinetic. A solid stores a large potential energy and only a small kinetic energy, and a liquid sits in between, so the three states are not the same."
  },
  {
    id: "th-q-03",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "temperature-vs-heat",
    stem: "The temperature of a body is a measure of what?",
    figure: "fig-10-02-heat-vs-latent.svg",
    options: [
      "The average kinetic energy of its particles.",
      "The total energy of all its particles.",
      "The total kinetic energy of all its particles.",
      "The strength of the forces between its particles."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-temp-1", 2: "th-temp-1", 3: "th-temp-1" },
    walkthrough: [
      "Temperature tells you how hot a body is.",
      "It depends on how fast the particles move on average.",
      "So it is the average kinetic energy of the particles.",
      "It is not a total, because a total would grow just by adding more particles."
    ],
    explain: "Temperature is a measure of the average kinetic energy of the particles, not a total. If it were a total, a bigger body would always read hotter, which is not what a thermometer shows. It also does not measure the forces between particles, which is a separate idea about potential energy."
  },
  {
    id: "th-q-04",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "temperature-vs-heat",
    stem: "A large jug and a small cup of water are both at 60 C. Which statement is correct?",
    figure: "fig-10-02-heat-vs-latent.svg",
    options: [
      "The jug has more internal energy, because it has more particles.",
      "They have the same internal energy, because they are at the same temperature.",
      "The cup holds more heat, because a smaller object keeps heat better.",
      "The jug is at a higher temperature, because it is larger."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-temp-1", 2: "th-heat-1", 3: "th-temp-1" },
    walkthrough: [
      "Both are at the same temperature, so the particles have the same average kinetic energy.",
      "But internal energy is a total, not an average.",
      "The jug holds more water, so it has more particles.",
      "More particles storing energy means the jug has more internal energy, even at the same temperature."
    ],
    explain: "Same temperature means the same average kinetic energy per particle, but internal energy is a total. The jug has more particles, so it holds more internal energy overall. Temperature does not rise just because the body is bigger, and a smaller cup does not hold more heat, so those options mix temperature up with the amount of energy."
  },
  {
    id: "th-q-05",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "temperature-vs-heat",
    stem: "Which statement about heat and temperature is correct?",
    figure: null,
    options: [
      "Heat is energy transferred from a hotter body to a cooler one; temperature tells how hot a body is.",
      "Heat and temperature are two words for the same quantity.",
      "A body at a higher temperature always contains more heat energy.",
      "Temperature is the total heat energy stored in a body."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-heat-1", 2: "th-heat-1", 3: "th-temp-1" },
    walkthrough: [
      "Heat and temperature are two different ideas.",
      "Heat is energy that flows from a hotter body to a cooler one, measured in joules.",
      "Temperature tells you how hot a body is, measured in degrees.",
      "A high temperature does not always mean more heat energy, because that also depends on the mass and material."
    ],
    explain: "Heat is energy on the move, flowing from hot to cold, while temperature just tells you how hot something is. They are not the same word, and a higher temperature does not guarantee more energy, because the energy also depends on the mass and material. Temperature is not a total store of heat, it is a measure of average kinetic energy."
  },
  {
    id: "th-q-06",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heat-capacity",
    stem: "What is the heat capacity of a body?",
    figure: null,
    options: [
      "The energy needed to raise the temperature of the whole body by 1 K.",
      "The energy needed to raise the temperature of 1 kg of it by 1 K.",
      "The energy needed to change its state at constant temperature.",
      "The average kinetic energy of its particles."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-heatcap-1", 2: "th-latent-2", 3: "th-temp-1" },
    walkthrough: [
      "Heat capacity describes one particular whole object.",
      "It is the energy needed to raise that object's temperature by one kelvin.",
      "The version for one kilogram of a material is the specific heat capacity, a different quantity.",
      "So heat capacity is per object, measured in joules per kelvin."
    ],
    explain: "Heat capacity is the energy to raise the whole body's temperature by one kelvin, measured in joules per kelvin. The one kilogram version is the specific heat capacity, so that option describes the wrong quantity. Energy to change state is latent heat, and average kinetic energy is what temperature measures, so those are different ideas again."
  },
  {
    id: "th-q-07",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    stem: "How much energy is needed to heat 3.0 kg of water from 25 C to 65 C? Take c of water as 4200 J/(kg K).",
    figure: null,
    options: ["5.04 x 10^5 J", "8.19 x 10^5 J", "3.15 x 10^5 J", "1.68 x 10^5 J"],
    correct: 0,
    distractorMisconceptions: { 1: "th-shc-2", 2: "th-shc-2", 3: "th-shc-1" },
    walkthrough: [
      "Use energy equals mass times specific heat capacity times the change in temperature.",
      "The change in temperature is sixty five take away twenty five, which is forty degrees.",
      "So it is three point zero times four thousand two hundred times forty.",
      "That gives five hundred and four thousand joules, or five point zero four times ten to the power five joules."
    ],
    explain: "Energy equals m c delta theta. The temperature change is forty degrees, not the final sixty five, so the answer is three times four thousand two hundred times forty, which is about five point zero four times ten to the power five joules. Using sixty five or twenty five instead of the change, or leaving out the mass, gives the other, smaller or larger, wrong values."
  },
  {
    id: "th-q-08",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    stem: "3200 J of energy raises the temperature of 0.40 kg of a substance from 20 C to 140 C. What is its specific heat capacity?",
    figure: null,
    options: ["66.7 J/(kg K)", "26.7 J/(kg K)", "57.1 J/(kg K)", "400 J/(kg K)"],
    correct: 0,
    distractorMisconceptions: { 1: "th-shc-1", 2: "th-shc-2", 3: "th-shc-2" },
    walkthrough: [
      "Rearrange the heat equation: specific heat capacity is energy divided by mass times the temperature change.",
      "The temperature change is one hundred and forty take away twenty, which is one hundred and twenty degrees.",
      "So it is three thousand two hundred divided by zero point four zero times one hundred and twenty.",
      "That is three thousand two hundred divided by forty eight, which is about sixty six point seven joules per kilogram per kelvin."
    ],
    explain: "Specific heat capacity is energy divided by mass times the temperature change. The change is one hundred and twenty degrees, and the mass is zero point four kilograms, so it is three thousand two hundred over forty eight, about sixty six point seven joules per kilogram per kelvin. Forgetting the mass gives twenty six point seven, and using a final temperature instead of the change gives the other wrong values."
  },
  {
    id: "th-q-09",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    stem: "A beaker of 1.5 kg of liquid P is heated from -8 C to 42 C. Take c of liquid P as 3200 J/(kg K). How much energy is transferred?",
    figure: null,
    options: ["2.4 x 10^5 J", "1.63 x 10^5 J", "2.02 x 10^5 J", "1.60 x 10^5 J"],
    correct: 0,
    distractorMisconceptions: { 1: "th-shc-2", 2: "th-shc-2", 3: "th-shc-1" },
    walkthrough: [
      "First find the change in temperature, taking care with the negative start.",
      "It is forty two take away minus eight, and subtracting a negative adds, so that is fifty degrees.",
      "Now use energy equals mass times specific heat capacity times the change.",
      "That is one point five times three thousand two hundred times fifty, which is two hundred and forty thousand joules."
    ],
    explain: "The tricky part is the temperature change: forty two take away minus eight is fifty, not thirty four. Then energy equals m c delta theta gives one point five times three thousand two hundred times fifty, which is two point four times ten to the power five joules. Using thirty four, or the final forty two, or dropping the mass, gives the smaller wrong answers."
  },
  {
    id: "th-q-10",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    stem: "Liquids A and B have the same mass and are cooled under the same conditions. Liquid A shows the gentler cooling curve. Which has the higher specific heat capacity?",
    figure: "fig-10-03-cooling-curves-AB.svg",
    options: [
      "Liquid A, because a gentler curve means it releases more energy per degree.",
      "Liquid B, because its steeper curve means it cools faster.",
      "Liquid B, because a higher specific heat capacity cools faster.",
      "They are equal, because they have the same mass."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-shc-3", 2: "th-shc-3", 3: "th-shc-3" },
    walkthrough: [
      "A higher specific heat capacity means more energy is stored per kilogram per degree.",
      "To cool by one degree, such a liquid must release more energy, so it cools slowly.",
      "Cooling slowly shows up as a gentler, less steep curve.",
      "Liquid A has the gentler curve, so liquid A has the higher specific heat capacity."
    ],
    explain: "A higher specific heat capacity means the liquid must lose more energy for each degree it drops, so it cools slowly and its curve is gentler. Liquid A has the gentler curve, so it has the higher specific heat capacity. Thinking a big specific heat capacity cools quickly gets it backwards, and the equal mass does not settle it, because the materials differ."
  },
  {
    id: "th-q-11",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "specific-heat-capacity",
    stem: "A frying pan base should heat up quickly. The specific heat capacities are aluminium 900, plastic 3000 and copper 387 J/(kg K). Which material is most suitable for the base?",
    figure: "fig-10-04-cooking-pan.svg",
    options: [
      "Copper, because its low specific heat capacity lets it heat up quickly.",
      "Plastic, because its high specific heat capacity lets it heat up quickly.",
      "Aluminium, because its higher specific heat capacity heats faster than copper.",
      "Plastic, because a high specific heat capacity always heats fastest."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-shc-3", 2: "th-shc-3", 3: "th-shc-3" },
    walkthrough: [
      "A low specific heat capacity means less energy is needed per kilogram per degree.",
      "So a material with a low value warms up quickly for the same heating.",
      "Copper has the lowest value here, three hundred and eighty seven.",
      "So copper is the most suitable for a base that must heat up fast."
    ],
    explain: "To heat up quickly you want a low specific heat capacity, because less energy is needed per degree. Copper has the lowest value, so it heats fastest and suits the base. Plastic has the highest value, so it warms slowly, which is why it suits a handle, not a base. Choosing a high value for fast heating gets the idea backwards."
  },
  {
    id: "th-q-12",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    stem: "Which statement about the latent heat of a substance is true?",
    figure: "fig-10-02-heat-vs-latent.svg",
    options: [
      "It is transferred without changing the temperature of the substance.",
      "It is the energy that raises the temperature of the substance.",
      "It is absorbed to make the particles move more vigorously.",
      "It is the energy needed to raise the temperature by 1 K."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-latent-1", 2: "th-state-2", 3: "th-heatcap-1" },
    walkthrough: [
      "Latent heat is transferred when a substance changes state.",
      "That energy goes into the potential energy of the particles as they pull apart.",
      "It does not change the average kinetic energy, so the temperature holds steady.",
      "So latent heat is transferred without any change in temperature."
    ],
    explain: "Latent heat is the energy taken in or given out during a change of state, and it does not change the temperature, because it alters the particles' potential energy, not their kinetic energy. It does not raise the temperature or make the particles move faster, and the energy to raise the temperature by one kelvin is heat capacity, a different idea."
  },
  {
    id: "th-q-13",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    stem: "How much energy is needed to melt 4.0 kg of ice at 0 C? Take l_f of ice as 3.36 x 10^5 J/kg.",
    figure: null,
    options: ["1.34 x 10^6 J", "9.04 x 10^6 J", "3.36 x 10^5 J", "0 J"],
    correct: 0,
    distractorMisconceptions: { 1: "th-latent-3", 2: "th-latent-2", 3: "th-latent-2" },
    walkthrough: [
      "Melting is a change of state, so use energy equals specific latent heat of fusion times mass.",
      "That is three point three six times ten to the power five, times four point zero.",
      "Three point three six times four is thirteen point four four.",
      "So the energy is about one point three four times ten to the power six joules."
    ],
    explain: "Melting is a change of state, so use latent heat: energy equals l times m, which is three point three six times ten to the power five times four, about one point three four times ten to the power six joules. Using the vaporisation value instead gives the far larger figure, leaving out the mass gives too little, and thinking no temperature change means zero energy misses that latent heat is still needed."
  },
  {
    id: "th-q-14",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    stem: "When 600 g of a vapour condenses, it releases 4.2 x 10^4 J. What is the specific latent heat of vaporisation of the vapour?",
    figure: null,
    options: ["7.0 x 10^4 J/kg", "70 J/kg", "2.5 x 10^4 J/kg", "4.2 x 10^4 J/kg"],
    correct: 0,
    distractorMisconceptions: { 1: "th-latent-2", 2: "th-latent-2", 3: "th-latent-2" },
    walkthrough: [
      "Specific latent heat is the energy divided by the mass.",
      "First change six hundred grams into kilograms, which is zero point six zero kilograms.",
      "So it is four point two times ten to the power four, divided by zero point six zero.",
      "That gives seven point zero times ten to the power four joules per kilogram."
    ],
    explain: "Specific latent heat is energy divided by mass, so you first turn six hundred grams into zero point six kilograms, then divide four point two times ten to the power four by zero point six to get seven point zero times ten to the power four joules per kilogram. Leaving the mass in grams, multiplying instead of dividing, or forgetting to divide at all give the other wrong values."
  },
  {
    id: "th-q-15",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "latent-heat",
    stem: "For water, how does the specific latent heat of vaporisation compare with the specific latent heat of fusion?",
    figure: "fig-10-06-heating-curve.svg",
    options: [
      "Vaporisation is much larger, because the particles must be pulled completely apart.",
      "Fusion is larger, because melting needs more energy than boiling.",
      "They are equal, because both happen at constant temperature.",
      "Vaporisation is smaller, because boiling is easier than melting."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-latent-3", 2: "th-latent-3", 3: "th-latent-3" },
    walkthrough: [
      "Melting only loosens the particles so they can slide past each other.",
      "Boiling has to pull the particles completely apart into a gas.",
      "Pulling them fully apart takes far more energy than just loosening them.",
      "So for water the latent heat of vaporisation is much larger than the latent heat of fusion."
    ],
    explain: "Boiling pulls the particles completely apart, while melting only loosens them, so vaporisation needs far more energy. For water, fusion is about three hundred and thirty six thousand joules per kilogram and vaporisation is about two point two six million joules per kilogram. That is also why the boiling plateau on a heating curve is longer than the melting plateau."
  },
  {
    id: "th-q-16",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "changes-of-state",
    stem: "Water is boiling steadily at 100 C while a heater keeps supplying energy. What happens to its temperature?",
    figure: "fig-10-06-heating-curve.svg",
    options: [
      "It stays constant at 100 C until all the water has boiled.",
      "It keeps rising above 100 C because the heater is still on.",
      "It rises steadily, since energy is still being supplied.",
      "It rises because the particles gain kinetic energy."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-state-1", 2: "th-state-1", 3: "th-state-2" },
    walkthrough: [
      "During boiling the energy supplied does a special job.",
      "It pulls the particles apart, raising their potential energy.",
      "It does not raise their average kinetic energy, so the temperature does not climb.",
      "The temperature holds at one hundred degrees until all the water has boiled."
    ],
    explain: "While water boils, the temperature stays constant at the boiling point, even though the heater is still on. The energy goes into changing the liquid to gas by raising the particles' potential energy, not their kinetic energy, so the thermometer holds level until the water has all boiled away rather than climbing."
  },
  {
    id: "th-q-17",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "changes-of-state",
    stem: "As ice melts at 0 C, what happens to the energy of its particles?",
    figure: "fig-10-08-heating-cooling-regions.svg",
    options: [
      "Their potential energy increases while their kinetic energy stays the same.",
      "Their kinetic energy increases while their potential energy stays the same.",
      "Both increase, so the temperature rises.",
      "Their kinetic energy increases, so the particles move faster."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-state-2", 2: "th-state-1", 3: "th-state-2" },
    walkthrough: [
      "Melting is a change of state at constant temperature.",
      "The energy does work against the forces between the particles, pulling them apart.",
      "That raises the potential energy of the particles.",
      "Their kinetic energy stays the same, which is why the temperature does not change."
    ],
    explain: "During melting the particles' potential energy increases as they are pulled apart, while their kinetic energy stays the same. Because temperature follows the average kinetic energy, and that is unchanged, the temperature holds constant. So the particles do not speed up, and the temperature does not rise while the ice is melting."
  },
  {
    id: "th-q-18",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "changes-of-state",
    stem: "Energy is removed from a vapour so that it condenses into a liquid. Is energy absorbed or released?",
    figure: "fig-10-07-cooling-curve.svg",
    options: [
      "Energy is released to the surroundings.",
      "Energy is absorbed to break the forces between particles.",
      "No energy is transferred, because the temperature is constant.",
      "Energy is absorbed, and it raises the temperature."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-state-3", 2: "th-latent-2", 3: "th-state-3" },
    walkthrough: [
      "Condensation is the reverse of boiling.",
      "As the gas turns to liquid, the particles fall closer together.",
      "Their potential energy drops, and that energy is given out.",
      "So energy is released to the surroundings during condensation."
    ],
    explain: "Condensation releases energy, because it is the reverse of boiling. As the particles come closer together their potential energy falls, and that energy is given out to the surroundings. It is not absorbed, and although the temperature stays constant, energy is still transferred, so it is definitely not zero."
  },
  {
    id: "th-q-19",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heating-and-cooling-curves",
    stem: "A substance is heated steadily. On its heating curve there is a flat plateau while the heater stays on. What does the flat plateau show?",
    figure: "fig-10-06-heating-curve.svg",
    options: [
      "A change of state is happening at constant temperature.",
      "The heater has paused, so no energy is being supplied.",
      "Nothing is happening to the substance for a while.",
      "The substance is warming up faster than before."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-curve-1", 2: "th-curve-1", 3: "th-curve-2" },
    walkthrough: [
      "The heater is still supplying energy all through the flat part.",
      "During the plateau that energy changes the state of the substance.",
      "It raises the particles' potential energy instead of their kinetic energy.",
      "So the temperature holds level while the change of state takes place."
    ],
    explain: "A flat plateau is where a change of state happens at constant temperature. The heater is still supplying energy the whole time, but that energy goes into separating the particles rather than speeding them up, so the temperature holds level. The heating has not paused, and the substance is far from idle, it is melting or boiling."
  },
  {
    id: "th-q-20",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heating-and-cooling-curves",
    stem: "On a heating curve, which part involves the latent heat of the substance?",
    figure: "fig-10-08-heating-cooling-regions.svg",
    options: [
      "The flat plateau, where the temperature stays constant.",
      "The sloping part, where the temperature rises.",
      "Both the sloping parts and the flat plateaus equally.",
      "The steepest sloping part of the curve."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-curve-2", 2: "th-curve-2", 3: "th-curve-2" },
    walkthrough: [
      "The latent heat is the energy for a change of state.",
      "A change of state happens at constant temperature.",
      "On the curve, constant temperature is the flat plateau.",
      "So the latent heat belongs to the flat plateau, not the slopes."
    ],
    explain: "Latent heat is the energy for a change of state, which happens at constant temperature, so it belongs to the flat plateau. The sloping parts are where the temperature changes, and that energy is linked to the heat capacity, not the latent heat. So the flat plateau is the one that involves the latent heat."
  },
  {
    id: "th-q-21",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "heating-and-cooling-curves",
    stem: "On the heating curve of water, why is the boiling plateau longer than the melting plateau?",
    figure: "fig-10-06-heating-curve.svg",
    options: [
      "Because the latent heat of vaporisation is much larger than the latent heat of fusion.",
      "Because melting needs more energy than boiling.",
      "Because the substance heats up faster during boiling.",
      "Because boiling happens at a higher temperature than melting."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-latent-3", 2: "th-curve-2", 3: "th-latent-3" },
    walkthrough: [
      "Each plateau lasts as long as the change of state needs energy.",
      "Boiling has to pull the particles completely apart, which takes a lot of energy.",
      "So the latent heat of vaporisation is much larger than the latent heat of fusion.",
      "With steady heating, more energy needed means a longer plateau, so the boiling plateau is longer."
    ],
    explain: "With the heater supplying energy steadily, a plateau lasts as long as its change of state needs energy. Boiling needs far more energy than melting, because its latent heat of vaporisation is much larger than the latent heat of fusion, so the boiling plateau is longer. The higher temperature of boiling is not the reason, and the substance does not heat faster during a plateau, since the temperature holds constant."
  },
  {
    id: "th-q-22",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    stem: "Which statement correctly describes a difference between boiling and evaporation?",
    figure: "fig-10-09-evaporation.svg",
    options: [
      "Boiling happens at a fixed temperature throughout the liquid; evaporation happens at any lower temperature at the surface.",
      "They are the same process with two different names.",
      "Both happen only at the boiling point of the liquid.",
      "Both happen throughout the whole body of the liquid."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-boilevap-1", 2: "th-evap-1", 3: "th-evap-2" },
    walkthrough: [
      "Boiling happens only at one fixed temperature, the boiling point.",
      "Boiling takes place throughout the whole liquid, with bubbles inside.",
      "Evaporation happens at any temperature below the boiling point.",
      "And evaporation takes place only at the surface, so the two are clearly different."
    ],
    explain: "Boiling happens at one fixed temperature, the boiling point, and throughout the whole liquid, while evaporation happens at any lower temperature and only at the surface. So they are not the same process. Evaporation is not limited to the boiling point, and it does not happen throughout the liquid, so those descriptions belong to boiling."
  },
  {
    id: "th-q-23",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    stem: "A pool of water sits on the floor of a cold room at 10 C. Which statement is true?",
    figure: "fig-10-15-water-pool-floor.svg",
    options: [
      "The pool slowly evaporates away, though it takes a long time.",
      "Evaporation cannot happen because the room is below the boiling point.",
      "Evaporation cannot happen until the water is heated to its boiling point.",
      "The pool cannot shrink unless the room is warmer than 100 C."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-evap-1", 2: "th-evap-1", 3: "th-evap-1" },
    walkthrough: [
      "Evaporation happens at any temperature below the boiling point.",
      "At the surface, the fastest particles can escape even in a cool room.",
      "So the pool slowly loses water to the air.",
      "It just happens slowly, because the room is cold, but it does happen."
    ],
    explain: "Evaporation happens at any temperature below the boiling point, because the fastest surface particles can still escape into the air. So the pool slowly dries up even in a cold room, just more slowly than it would when warm. There is no need to reach the boiling point for evaporation to take place."
  },
  {
    id: "th-q-24",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    stem: "Where in a liquid does evaporation take place?",
    figure: "fig-10-09-evaporation.svg",
    options: [
      "Only at the surface of the liquid.",
      "Throughout the whole body of the liquid.",
      "Only at the bottom, where the liquid is warmest.",
      "Everywhere at once, just like boiling."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-evap-2", 2: "th-evap-2", 3: "th-boilevap-1" },
    walkthrough: [
      "Only the particles at the surface are next to the air.",
      "Those surface particles are the ones free to escape.",
      "So evaporation happens only at the surface, with no bubbles inside.",
      "Boiling is the one that happens throughout the liquid, with bubbles forming inside it."
    ],
    explain: "Evaporation happens only at the surface, because just the surface particles are free to escape into the air, and no bubbles form inside. Boiling is the process that happens throughout the whole liquid, with bubbles of gas forming deep inside. That is why a larger surface area speeds evaporation up."
  },
  {
    id: "th-q-25",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    stem: "Why does evaporation cool the liquid that is left behind?",
    figure: "fig-10-09-evaporation.svg",
    options: [
      "The fastest, highest energy particles escape, lowering the average kinetic energy of those left.",
      "Evaporation warms the liquid rather than cooling it.",
      "The slowest particles escape, leaving the faster ones behind.",
      "Evaporation has no effect on the temperature of the liquid."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-evap-3", 2: "th-evap-3", 3: "th-evap-3" },
    walkthrough: [
      "The surface particles have a range of speeds.",
      "The fastest, highest energy ones are the ones that break free and escape.",
      "Once they leave, the particles remaining have a lower average kinetic energy.",
      "A lower average kinetic energy means a lower temperature, so the liquid cools."
    ],
    explain: "It is the fastest, highest energy particles that escape first during evaporation. Losing them lowers the average kinetic energy of the particles left behind, so the temperature of the liquid falls. That is the cooling effect of evaporation, and it is why sweat cools your skin. Evaporation always cools, never warms, the liquid left behind."
  },
  {
    id: "th-q-26",
    topicKey: "t9-thermal-properties-of-matter",
    subtopic: "boiling-vs-evaporation",
    stem: "How does raising the humidity of the surrounding air affect the rate of evaporation of a liquid?",
    figure: null,
    options: [
      "It slows the evaporation down.",
      "It speeds the evaporation up.",
      "It has no effect on the rate.",
      "It stops evaporation completely."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "th-evap-4", 2: "th-evap-4", 3: "th-evap-4" },
    walkthrough: [
      "Humidity is how much water vapour the air already holds.",
      "Damp air is closer to full, so it has little room for more vapour.",
      "Fewer escaped particles can be carried away, and some drift back in.",
      "So higher humidity slows evaporation down."
    ],
    explain: "Higher humidity slows evaporation down, because damp air already holds a lot of vapour and has little room to take in more. Fewer particles can leave and some return to the liquid. Drier air has more room, so evaporation is faster there. That is why washing dries slowly on a humid day and quickly on a dry one."
  }
];
