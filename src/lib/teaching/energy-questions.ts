import type { TeachQuestion } from "@/lib/teaching/types";

// energy-questions.ts
// Teaching question bank for O-Level Physics, Energy, Work and Power
// (topicKey "t6-energy-stores-and-transfers").
// Every wrong option maps to the misconception it reveals (see energy-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 07 - Energy, Work and Power.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

export const ENERGY_QUESTIONS: TeachQuestion[] = [
  {
    id: "en-q-01",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-stores-and-pathways",
    stem: "Which of these is an energy store rather than a pathway?",
    figure: "fig-07-02-energy-stores-waterfall.svg",
    options: ["The chemical potential store", "Electrically", "By heating", "By waves"],
    correct: 0,
    distractorMisconceptions: { 1: "en-stores-1", 2: "en-stores-1", 3: "en-stores-1" },
    walkthrough: [
      "A store is where energy is held, like the chemical store of a fuel or battery.",
      "A pathway is the route energy takes when it moves from one store to another.",
      "Electrically, by heating, and by waves are all pathways, not stores.",
      "So the chemical potential store is the only store in the list."
    ],
    explain: "An energy store is where energy rests, such as the chemical potential store of a battery. Electrically, by heating, and by waves describe how energy travels, so they are pathways, not stores. Naming a pathway when a store is asked for is the classic mix up between the two ideas."
  },
  {
    id: "en-q-02",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-stores-and-pathways",
    stem: "A stone is dropped from a bridge. By which pathway is energy transferred as it falls?",
    figure: "fig-07-04-store-boxes-transfer.svg",
    options: ["Mechanically", "By heating", "By waves", "Electrically"],
    correct: 0,
    distractorMisconceptions: { 1: "en-transfer-1", 2: "en-transfer-1", 3: "en-transfer-1" },
    walkthrough: [
      "As the stone falls, gravity pulls it down with a force.",
      "That force acts over the distance the stone drops.",
      "A force moving an object through a distance is the mechanical pathway.",
      "So the energy is transferred mechanically, from the gravitational potential store to the kinetic store."
    ],
    explain: "A falling stone is pulled down by gravity, a force acting over a distance, which is the mechanical pathway. Heating needs a temperature difference, waves carry light or sound, and electrically needs a current, so none of those fit a simple fall. The energy moves mechanically from the gravitational potential store to the kinetic store."
  },
  {
    id: "en-q-03",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-stores-and-pathways",
    stem: "A book rests on a high shelf. Which store holds most of its energy?",
    figure: null,
    options: [
      "The gravitational potential store",
      "The kinetic store",
      "The elastic potential store",
      "The chemical potential store"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-stores-2", 2: "en-stores-2", 3: "en-stores-2" },
    walkthrough: [
      "Look at what the book is doing right now, not what it might do next.",
      "The book is not moving, so nothing is in its kinetic store.",
      "It is raised above the ground, so energy sits in its gravitational potential store.",
      "Only if it started to fall would energy move into the kinetic store."
    ],
    explain: "Name the store from the book's state right now. It is raised up but still, so its energy is in the gravitational potential store. It is not moving, so the kinetic store is empty, and it is not stretched or a fuel, so the elastic and chemical stores do not apply. Imagining the fall that has not happened yet is what leads to the wrong store."
  },
  {
    id: "en-q-04",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "kinetic-energy",
    stem: "A ball of mass 2 kg moves at 3 m/s. What is the energy in its kinetic store?",
    figure: null,
    options: ["9 J", "18 J", "3 J", "6 J"],
    correct: 0,
    distractorMisconceptions: { 1: "en-ke-2", 2: "en-ke-1", 3: "en-ke-1" },
    walkthrough: [
      "Kinetic energy is one half times mass times speed squared.",
      "First square the speed: three squared is nine.",
      "Multiply by the mass: nine times two is eighteen.",
      "Then take one half of that: half of eighteen is nine joules."
    ],
    explain: "Square the speed first to get nine, multiply by the mass of two to get eighteen, then halve it to reach nine joules. Answering eighteen means the one half was dropped, and answering three or six means the speed was not squared, so it was treated as if the energy grew in step with the speed."
  },
  {
    id: "en-q-05",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "kinetic-energy",
    stem: "A car's speed doubles. The energy in its kinetic store becomes",
    figure: null,
    options: ["four times as large", "twice as large", "half as large", "eight times as large"],
    correct: 0,
    distractorMisconceptions: { 1: "en-ke-1", 2: "en-ke-1", 3: "en-ke-1" },
    walkthrough: [
      "In the kinetic energy formula, the speed is squared.",
      "Doubling the speed means squaring the two, which is four.",
      "So the kinetic store becomes four times larger.",
      "It does not simply double, because the speed is not just multiplied, it is squared."
    ],
    explain: "The speed is squared in the kinetic energy formula, so doubling the speed makes the energy four times larger, not twice. Answering twice as large treats the energy as if it grows in step with the speed, which forgets the squaring. That is why a small rise in speed causes a much larger rise in kinetic energy."
  },
  {
    id: "en-q-06",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "kinetic-energy",
    stem: "A ball of weight 5.0 N has 25 J of energy in its kinetic store. Taking g as 10 N/kg, what is its speed?",
    figure: null,
    options: ["10 m/s", "3.16 m/s", "100 m/s", "7.07 m/s"],
    correct: 0,
    distractorMisconceptions: { 1: "en-massweight-1", 2: "en-ke-3", 3: "en-ke-2" },
    walkthrough: [
      "First change the weight into a mass, because the formula needs mass in kilograms.",
      "Mass is weight divided by the field strength, so five divided by ten is nought point five kilograms.",
      "Kinetic energy is one half times mass times speed squared, so twenty five equals one half times nought point five times speed squared.",
      "That gives the speed squared as one hundred, and the square root of one hundred is ten metres per second."
    ],
    explain: "Turn the weight of five newtons into a mass of nought point five kilograms first, then use the kinetic energy formula to get the speed squared as one hundred, and take the square root to reach ten metres per second. Using five as the mass gives three point one six, stopping at one hundred forgets the square root, and dropping the factor of two gives seven point zero seven."
  },
  {
    id: "en-q-07",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "gravitational-potential-energy",
    stem: "A crate of mass 8 kg is dragged up a ramp of slope length 10 m to a vertical height of 6 m. Take g = 10 N/kg. Find the gain in its gravitational potential store.",
    figure: "fig-07-06-block-slope-pe.svg",
    options: ["480 J", "800 J", "48 J", "4800 J"],
    correct: 0,
    distractorMisconceptions: { 1: "en-pe-1", 2: "en-pe-2", 3: "en-pe-2" },
    walkthrough: [
      "Gravitational potential energy is mass times field strength times the vertical height.",
      "Only the vertical height of six metres matters, not the ten metres along the slope.",
      "So multiply eight by ten by six.",
      "That gives four hundred and eighty joules."
    ],
    explain: "Use the vertical height of six metres, not the slope length, and include the field strength exactly once, so the answer is eight times ten times six, which is four hundred and eighty joules. Using the slope length of ten gives eight hundred, dropping the field strength gives forty eight, and multiplying by it twice gives four thousand eight hundred."
  },
  {
    id: "en-q-08",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "work-done",
    stem: "A person holds a heavy suitcase still at their side for 30 s. How much work do they do on the suitcase?",
    figure: "fig-07-08-work-done-cases.svg",
    options: [
      "Zero, because the suitcase does not move",
      "The weight of the suitcase times 30",
      "The weight of the suitcase times the time held",
      "The weight of the suitcase times the height it is held at"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-work-1", 2: "en-work-1", 3: "en-work-1" },
    walkthrough: [
      "Work done is force times the distance moved in the direction of the force.",
      "While the suitcase is simply held still, it does not move.",
      "So the distance moved is zero.",
      "Force times zero distance is zero, so no work is done on the suitcase."
    ],
    explain: "Work is done only when the force moves the object through a distance. The held suitcase does not move, so the distance is zero and the work done is zero, however tiring it feels. Multiplying the weight by a time or a height brings in a distance that the suitcase never actually travelled."
  },
  {
    id: "en-q-09",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "work-done",
    stem: "A child pushes a box of mass 0.80 kg up a ramp with a force of 5.0 N acting along the slope. The slope is 5.0 m long, its base is 4.0 m and it rises 3.0 m. Take g = 10 N/kg. How much work does the pushing force do?",
    figure: "fig-07-09-box-slope.svg",
    options: ["25 J", "15 J", "20 J", "24 J"],
    correct: 0,
    distractorMisconceptions: { 1: "en-work-2", 2: "en-work-2", 3: "en-cons-1" },
    walkthrough: [
      "Work done is force times the distance moved in the direction of the force.",
      "The force acts along the slope, so use the slope length of five metres.",
      "Multiply the force of five newtons by five metres.",
      "That gives twenty five joules."
    ],
    explain: "The pushing force acts along the slope, so the distance to use is the five metre slope length, giving five times five, which is twenty five joules. Using the three metre vertical rise gives fifteen and using the four metre base gives twenty, both wrong distances. Answering twenty four is the gravitational potential store gained, which assumes no energy is dissipated to friction."
  },
  {
    id: "en-q-10",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "work-done",
    stem: "What is the SI unit of work done?",
    figure: null,
    options: ["Joule (J)", "Newton (N)", "Watt (W)", "Newton per metre (N/m)"],
    correct: 0,
    distractorMisconceptions: { 1: "en-work-3", 2: "en-power-1", 3: "en-work-3" },
    walkthrough: [
      "Work done is the energy transferred by a force.",
      "Energy is measured in joules.",
      "One joule is one newton times one metre.",
      "So the unit of work done is the joule, the same as for energy."
    ],
    explain: "Work done is energy transferred, so it shares the joule with energy. The newton is a unit of force, not work, and the newton per metre is not right either. The watt is the unit of power, which is how quickly work is done, so choosing it confuses work with power."
  },
  {
    id: "en-q-11",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    stem: "A moving box slides across a floor and is brought to rest by friction. What happens to the energy that was in its kinetic store?",
    figure: null,
    options: [
      "It is transferred to the internal stores of the box and surroundings",
      "It is destroyed by the friction",
      "It disappears once the box stops",
      "It is used up and no longer exists"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-cons-1", 2: "en-cons-1", 3: "en-cons-1" },
    walkthrough: [
      "Energy is never created or destroyed, it only moves between stores.",
      "As friction acts, the box and floor warm up slightly.",
      "The kinetic energy is transferred to the internal stores of the box and the surroundings.",
      "So the energy is dissipated, spread out and no longer useful, but it still exists."
    ],
    explain: "Friction does not destroy energy. It transfers the kinetic energy into the internal stores of the box and the surroundings, warming them a little. We call this dissipated energy, meaning spread out and hard to use, but the total amount is unchanged. Saying it is destroyed or disappears breaks the principle of conservation of energy."
  },
  {
    id: "en-q-12",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    stem: "A pendulum bob is momentarily at rest at its highest point A. What is true about its energy there?",
    figure: "fig-07-17-pendulum-swing-abc.svg",
    options: [
      "Its kinetic store is zero and its gravitational potential store is greatest",
      "It has no energy at all, because it is not moving",
      "Both its kinetic and gravitational potential stores are zero",
      "Its kinetic store is greatest there"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-cons-2", 2: "en-cons-2", 3: "en-cons-2" },
    walkthrough: [
      "At the highest point the bob is briefly at rest, so its kinetic store is zero.",
      "But it is also at its greatest height above the lowest point.",
      "So its gravitational potential store is at a maximum there.",
      "The energy has simply moved from the kinetic store into the gravitational potential store."
    ],
    explain: "At the top the bob is only momentarily still, so its kinetic store is empty, but it is at its highest, so its gravitational potential store is greatest. The total energy is unchanged, it has just shifted stores. Saying it has no energy at all wrongly links having no motion with having no energy of any kind."
  },
  {
    id: "en-q-13",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    stem: "With no air resistance, a heavy ball and a light ball are released from the same height. Using energy ideas, which reaches the ground moving faster?",
    figure: null,
    options: [
      "They reach the ground at the same speed",
      "The heavy ball",
      "The light ball",
      "The heavy ball, because it holds more energy"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-cons-3", 2: "en-cons-3", 3: "en-cons-3" },
    walkthrough: [
      "The gravitational potential store lost is mass times field strength times height.",
      "This all turns into the kinetic store, one half times mass times speed squared.",
      "The mass appears on both sides, so it cancels out.",
      "That leaves a speed that depends only on the height, so both balls arrive at the same speed."
    ],
    explain: "When the potential store becomes the kinetic store, the mass cancels from both sides, so the final speed depends only on the height and the field strength. Both balls therefore reach the ground at the same speed. The heavy ball does hold more energy, but it also needs more energy to reach a given speed, so the two effects balance out."
  },
  {
    id: "en-q-14",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    stem: "Two identical blocks slide from rest down two frictionless slopes that have the same vertical drop. One slope is steep, the other is gentle. How do their speeds at the bottom compare?",
    figure: "fig-07-06b-block-slope-QP.svg",
    options: [
      "They arrive at the same speed",
      "The steep slope gives the greater speed",
      "The gentle slope gives the greater speed",
      "The longer slope gives the greater speed, because of the extra distance"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-cons-4", 2: "en-cons-4", 3: "en-cons-4" },
    walkthrough: [
      "On a frictionless slope, the gravitational potential store lost all becomes kinetic store.",
      "The potential store lost depends only on the vertical drop.",
      "The two slopes have the same vertical drop.",
      "So the kinetic store at the bottom is the same, which means the same speed."
    ],
    explain: "The final speed depends only on the vertical drop, not on how steep or long the slope is, because only the height appears when the potential store turns into the kinetic store. Both slopes drop by the same height, so both blocks reach the bottom at the same speed. The steep slope simply gets there sooner."
  },
  {
    id: "en-q-15",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    stem: "A mango of mass 0.50 kg falls from rest from a height of 20 m. Ignoring air resistance and taking g = 10 N/kg, find its speed just before it lands.",
    figure: null,
    options: ["20 m/s", "400 m/s", "14.1 m/s", "200 m/s"],
    correct: 0,
    distractorMisconceptions: { 1: "en-ke-3", 2: "en-ke-2", 3: "en-ke-3" },
    walkthrough: [
      "The gravitational potential store is mass times field strength times height, which is nought point five times ten times twenty, giving one hundred joules.",
      "All of this becomes the kinetic store, so one hundred equals one half times nought point five times speed squared.",
      "That gives the speed squared as four hundred.",
      "The square root of four hundred is twenty metres per second."
    ],
    explain: "The potential store of one hundred joules all becomes kinetic store, which gives the speed squared as four hundred, and the square root is twenty metres per second. Stopping at four hundred forgets the square root, dropping the factor of two gives fourteen point one, and using two hundred also skips the final square root."
  },
  {
    id: "en-q-16",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "power",
    stem: "A motor raises a load of mass 20 kg through a vertical height of 3.0 m in 2.0 minutes. Take g = 10 N/kg. Find the power developed.",
    figure: null,
    options: ["5 W", "300 W", "600 W", "10 W"],
    correct: 0,
    distractorMisconceptions: { 1: "en-power-2", 2: "en-power-1", 3: "en-power-2" },
    walkthrough: [
      "First find the work done, which is mass times field strength times height.",
      "That is twenty times ten times three, which is six hundred joules.",
      "Change the time into seconds: two minutes is one hundred and twenty seconds.",
      "Power is work divided by time, so six hundred divided by one hundred and twenty is five watts."
    ],
    explain: "The work done is six hundred joules, and the time is two minutes, which is one hundred and twenty seconds, so the power is six hundred divided by one hundred and twenty, which is five watts. Dividing by two minutes directly gives three hundred, forgetting the time altogether gives six hundred, and treating two minutes as sixty seconds gives ten."
  },
  {
    id: "en-q-17",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "power",
    stem: "A crane lifts a load of mass 800 kg from X to Y, a vertical height of 6 m, in 10 minutes. Take g = 10 N/kg. Find the power of the crane.",
    figure: "fig-07-18-crane-xy.svg",
    options: ["80 W", "4800 W", "48000 W", "800 W"],
    correct: 0,
    distractorMisconceptions: { 1: "en-power-2", 2: "en-power-1", 3: "en-power-2" },
    walkthrough: [
      "The work done is mass times field strength times height, which is eight hundred times ten times six.",
      "That gives forty eight thousand joules.",
      "Ten minutes is ten times sixty, which is six hundred seconds.",
      "Power is forty eight thousand divided by six hundred, which is eighty watts."
    ],
    explain: "The work done is forty eight thousand joules, and ten minutes is six hundred seconds, so the power is forty eight thousand divided by six hundred, which is eighty watts. Dividing by ten minutes directly gives four thousand eight hundred, forgetting the time gives forty eight thousand, and using sixty seconds for the whole ten minutes gives eight hundred."
  },
  {
    id: "en-q-18",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "power",
    stem: "Two cranes lift identical loads to the same height. Crane X takes 10 s and crane Y takes 20 s. Which crane is more powerful?",
    figure: null,
    options: [
      "Crane X, because it does the work in less time",
      "Crane Y, because it takes longer",
      "They are equally powerful, because they do the same work",
      "Neither, because power does not depend on time"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-power-1", 2: "en-power-1", 3: "en-power-1" },
    walkthrough: [
      "Both cranes do the same work, lifting the same load to the same height.",
      "Power is the work done divided by the time taken.",
      "Crane X does that work in less time, so it divides by a smaller number.",
      "So crane X develops the greater power."
    ],
    explain: "Power is how quickly work is done, so it is the work divided by the time. Both cranes do the same work, but crane X does it in less time, so it is more powerful. Thinking they are equally powerful, or that time does not matter, treats power as if it were just the work done."
  },
  {
    id: "en-q-19",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    stem: "An appliance that is 80% efficient is supplied with 500 J of energy. How much useful energy does it deliver?",
    figure: "fig-07-12-sankey-efficiency.svg",
    options: ["400 J", "625 J", "500 J", "100 J"],
    correct: 0,
    distractorMisconceptions: { 1: "en-eff-2", 2: "en-eff-1", 3: "en-eff-3" },
    walkthrough: [
      "Efficiency is the useful output divided by the total input.",
      "So the useful output is the efficiency as a fraction times the input.",
      "Eighty percent as a fraction is nought point eight.",
      "Nought point eight times five hundred is four hundred joules."
    ],
    explain: "The useful output is the efficiency times the input, so nought point eight times five hundred, which is four hundred joules. Dividing five hundred by nought point eight gives six hundred and twenty five, which flips the ratio. Answering five hundred assumes no energy is wasted, and one hundred is the wasted part, not the useful output."
  },
  {
    id: "en-q-20",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    stem: "A blender takes in 450 J and delivers 342 J of useful output. Find its efficiency.",
    figure: null,
    options: ["76%", "132%", "24%", "100%"],
    correct: 0,
    distractorMisconceptions: { 1: "en-eff-2", 2: "en-eff-3", 3: "en-eff-1" },
    walkthrough: [
      "Efficiency is the useful output divided by the total input, times one hundred.",
      "The useful output is three hundred and forty two joules and the input is four hundred and fifty joules.",
      "Three hundred and forty two divided by four hundred and fifty is nought point seven six.",
      "Times one hundred, that is seventy six percent."
    ],
    explain: "Divide the useful output of three hundred and forty two by the input of four hundred and fifty and multiply by one hundred to get seventy six percent. Dividing the other way gives one hundred and thirty two percent, which flips the ratio. Twenty four percent is the wasted fraction, and one hundred percent wrongly assumes nothing is dissipated."
  },
  {
    id: "en-q-21",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    stem: "A wind turbine is 25% efficient. If 800 J of energy in the wind arrives at the turbine, how much energy is dissipated?",
    figure: null,
    options: ["600 J", "200 J", "800 J", "3200 J"],
    correct: 0,
    distractorMisconceptions: { 1: "en-eff-3", 2: "en-eff-3", 3: "en-eff-2" },
    walkthrough: [
      "First find the useful output, which is twenty five percent of eight hundred joules.",
      "That is nought point two five times eight hundred, which is two hundred joules.",
      "The dissipated energy is the total input take away the useful output.",
      "Eight hundred take away two hundred is six hundred joules dissipated."
    ],
    explain: "The useful output is two hundred joules, so the dissipated energy is the input of eight hundred take away two hundred, which is six hundred joules. Answering two hundred gives the useful output instead of the wasted part, eight hundred assumes all of it is wasted, and three thousand two hundred comes from flipping the efficiency ratio."
  },
  {
    id: "en-q-22",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    stem: "Which statement about the efficiency of a real machine is correct?",
    figure: "fig-07-12-sankey-efficiency.svg",
    options: [
      "It is always less than 100%, because some energy is dissipated",
      "A well-built machine can be more than 100% efficient",
      "Efficiency is the total input divided by the useful output",
      "A perfect machine could create extra useful energy"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-eff-1", 2: "en-eff-2", 3: "en-eff-1" },
    walkthrough: [
      "Energy is conserved, so a machine cannot give out more useful energy than it takes in.",
      "In the real world some energy is always dissipated to the surroundings.",
      "So the useful output is always less than the total input.",
      "That means the efficiency of a real machine is always below one hundred percent."
    ],
    explain: "A real machine always dissipates some energy, so its useful output is less than the input and its efficiency is below one hundred percent. Efficiency cannot go above one hundred percent, and a machine cannot create extra useful energy, because that would break conservation of energy. Efficiency is useful output over total input, not the other way round."
  },
  {
    id: "en-q-23",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-resources",
    stem: "Which of these is a renewable energy resource?",
    figure: null,
    options: ["Wind", "Coal", "Natural gas", "Nuclear fuel"],
    correct: 0,
    distractorMisconceptions: { 1: "en-res-1", 2: "en-res-1", 3: "en-res-1" },
    walkthrough: [
      "A renewable resource is one that nature replaces as fast as we use it.",
      "Wind keeps blowing, so it is naturally replaced and is renewable.",
      "Coal, natural gas and nuclear fuel are fixed supplies that will eventually run out.",
      "So wind is the only renewable resource in the list."
    ],
    explain: "Wind is renewable because it is naturally replaced and does not run out. Coal, natural gas and nuclear fuel are all non-renewable, since they are fixed supplies that are used up. Nuclear fuel lasts a long time, but lasting long is not the same as being replaced, so it is still non-renewable."
  },
  {
    id: "en-q-24",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-resources",
    stem: "A biofuel such as ethanol is renewable. Which statement about it is correct?",
    figure: null,
    options: [
      "It is renewable but still releases pollution when it is burned",
      "Because it is renewable, it produces no pollution at all",
      "It is non-renewable, because it comes from plants",
      "It is completely clean, so it adds nothing to global warming"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-res-2", 2: "en-res-1", 3: "en-res-2" },
    walkthrough: [
      "Renewable means the resource is naturally replaced, and we can grow more crops for biofuel.",
      "Clean means it does not pollute, which is a separate property.",
      "Burning a biofuel still releases pollution into the air.",
      "So a biofuel is renewable, yet it is not completely clean."
    ],
    explain: "A biofuel is renewable because we can grow more of it, but burning it still releases pollution, so renewable does not always mean clean. It is not non-renewable, since the crops are replaced, and it is not pollution free. Renewable and clean are two different properties that need to be checked separately."
  },
  {
    id: "en-q-25",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-resources",
    stem: "Which energy store does a hydroelectric power station draw its energy from?",
    figure: null,
    options: [
      "The gravitational potential store of the stored water",
      "The kinetic store of the still water in the reservoir",
      "The chemical potential store of the water",
      "The internal store of the water"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "en-stores-2", 2: "en-stores-2", 3: "en-stores-2" },
    walkthrough: [
      "A hydroelectric station holds water high up behind a dam.",
      "Water raised above the ground has energy in its gravitational potential store.",
      "As it falls, that store is transferred to the kinetic store and then to electricity.",
      "So the resource draws from the gravitational potential store of the stored water."
    ],
    explain: "The water is held high up behind the dam, so its energy sits in the gravitational potential store. The still water in the reservoir is not moving, so its kinetic store is empty until it falls, and water is not a fuel or a hot object, so the chemical and internal stores do not apply. Naming the store from the raised position is the key."
  }
];
