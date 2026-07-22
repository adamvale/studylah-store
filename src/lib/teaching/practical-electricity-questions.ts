// practical-electricity-questions.ts
// Teaching question bank for O-Level Physics, Practical Electricity (topicKey "t16-practical-electricity").
// Every wrong option maps to the misconception it reveals (see practical-electricity-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ physics notes, Chapter 18 - Practical Electricity.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const PRACTICAL_ELEC_QUESTIONS: TeachQuestion[] = [
  {
    id: "pel-q-01",
    topicKey: "t16-practical-electricity",
    subtopic: "electrical-power",
    stem: "A current of 3.0 A flows through a resistor connected to a 12 V supply. What is the power dissipated in the resistor?",
    figure: null,
    options: ["36 W", "36 J", "4.0 W", "0.25 W"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-power-1", 2: "pel-power-2", 3: "pel-power-2" },
    walkthrough: [
      "Power equals voltage times current.",
      "So multiply twelve volts by three amperes.",
      "That gives thirty six.",
      "Power is a rate, so the unit is watts, giving thirty six watts."
    ],
    explain: "Power equals voltage times current, so twelve times three is thirty six watts. The unit is watts because power is a rate of energy transfer, not joules, which would be an amount of energy. Dividing twelve by three, or three by twelve, would come from rearranging the formula the wrong way."
  },
  {
    id: "pel-q-02",
    topicKey: "t16-practical-electricity",
    subtopic: "electrical-power",
    stem: "A lamp is marked \"240 V 60 W\". What current does it draw in normal use?",
    figure: null,
    options: ["0.25 A", "4.0 A", "14 400 A", "60 A"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-power-2", 2: "pel-power-2", 3: "pel-power-2" },
    walkthrough: [
      "Start from power equals voltage times current.",
      "To find the current, divide the power by the voltage.",
      "So sixty watts divided by two hundred and forty volts.",
      "That gives nought point two five amperes."
    ],
    explain: "Rearranging power equals voltage times current gives current equals power divided by voltage, so sixty divided by two hundred and forty is nought point two five amperes. Dividing the other way gives four, and multiplying gives fourteen thousand four hundred, both of which are the formula rearranged wrongly."
  },
  {
    id: "pel-q-03",
    topicKey: "t16-practical-electricity",
    subtopic: "heating-effect",
    stem: "Which property makes a metal suitable for the heating element of a kettle or toaster?",
    figure: "fig-18-01-resistance-scale.svg",
    options: [
      "High resistance and a high melting point.",
      "Low resistance and a low melting point.",
      "Low resistance and a high melting point.",
      "High resistance and a low melting point."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-heating-element-1", 2: "pel-heating-element-1", 3: "pel-heating-element-1" },
    walkthrough: [
      "A heating element needs to make plenty of heat, which means a high resistance.",
      "More resistance means more collisions, so more heat for a given current.",
      "It must also survive glowing red hot, which needs a high melting point.",
      "So the metal needs both a high resistance and a high melting point, like nichrome."
    ],
    explain: "A good heating element combines high resistance, to release plenty of heat, with a high melting point, so it does not melt while red hot. Nichrome satisfies both. A low resistance would give little heat, and a low melting point would let the element melt, so any option with those is wrong."
  },
  {
    id: "pel-q-04",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    stem: "A resistor carries 3.0 A from a 12 V supply for 8 minutes. How much energy is dissipated?",
    figure: null,
    options: ["17 280 J", "17 280 W", "288 J", "36 J"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-power-1", 2: "pel-time-units-1", 3: "pel-energy-notime" },
    walkthrough: [
      "Energy equals voltage times current times time.",
      "The time must be in seconds, so eight minutes is four hundred and eighty seconds.",
      "Multiply twelve volts by three amperes to get thirty six watts.",
      "Then multiply by four hundred and eighty seconds, giving seventeen thousand two hundred and eighty joules."
    ],
    explain: "Energy equals voltage times current times time. Twelve times three is thirty six watts, and eight minutes is four hundred and eighty seconds, so thirty six times four hundred and eighty is seventeen thousand two hundred and eighty joules. Using eight instead of four hundred and eighty leaves the minutes unconverted, and stopping at thirty six gives only the power. Energy is measured in joules, not watts."
  },
  {
    id: "pel-q-05",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    stem: "Which unit does an electricity supplier use to measure the energy a household consumes?",
    figure: null,
    options: ["kWh", "kW", "J/s", "W"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-kwh-1", 2: "pel-kwh-1", 3: "pel-kwh-1" },
    walkthrough: [
      "A bill measures energy used, not power.",
      "The kilowatt hour is a power of one kilowatt kept up for one hour.",
      "That built in time makes it a unit of energy.",
      "So household energy is measured in kilowatt hours."
    ],
    explain: "The kilowatt hour is a unit of energy, equal to one kilowatt kept up for one hour. The kilowatt, the joule per second and the watt are all units of power, which is a rate, not a total. Only the kilowatt hour measures the energy that appears on a bill."
  },
  {
    id: "pel-q-06",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    stem: "A 2000 W heater is switched on for 4 hours. One unit of energy costs 25 cents. What is the total cost?",
    figure: null,
    options: ["$2.00", "$2000", "$0.50", "$200"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-kwh-2", 2: "pel-cost-notime", 3: "pel-cost-units" },
    walkthrough: [
      "First find the energy in kilowatt hours, keeping power in kilowatts and time in hours.",
      "Two thousand watts is two kilowatts, over four hours, so two times four is eight kilowatt hours.",
      "The price is twenty five cents, which is nought point two five dollars.",
      "Cost is eight times nought point two five dollars, which is two dollars."
    ],
    explain: "Keep the power in kilowatts, so two kilowatts times four hours is eight kilowatt hours. Twenty five cents is nought point two five dollars, so the cost is eight times nought point two five, which is two dollars. Leaving the power in watts gives two thousand, dropping the time gives fifty cents, and multiplying by twenty five in cents leaves the answer a hundred times too big."
  },
  {
    id: "pel-q-07",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    stem: "An air-conditioning unit rated 2400 W runs for 5 hours. Electricity costs 28 cents per kWh. What is the cost of the energy it uses?",
    figure: null,
    options: ["$3.36", "$3360", "$0.67", "$336"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-kwh-2", 2: "pel-cost-notime", 3: "pel-cost-units" },
    walkthrough: [
      "Change the power to kilowatts, so two thousand four hundred watts is two point four kilowatts.",
      "Energy is power times time, so two point four times five is twelve kilowatt hours.",
      "The price is twenty eight cents, which is nought point two eight dollars.",
      "Cost is twelve times nought point two eight dollars, which is three dollars thirty six."
    ],
    explain: "Two point four kilowatts times five hours is twelve kilowatt hours, and at nought point two eight dollars a unit that is three dollars thirty six. Leaving the power in watts gives three thousand three hundred and sixty, using power without the time gives sixty seven cents, and multiplying by twenty eight in cents leaves the answer a hundred times too large."
  },
  {
    id: "pel-q-08",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    stem: "An appliance uses 12 kWh of energy in 30 minutes. What is its power?",
    figure: null,
    options: ["24 kW", "24 W", "6 kW", "0.4 kW"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-kwh-1", 2: "pel-power-2", 3: "pel-kwh-2" },
    walkthrough: [
      "Power is energy divided by time.",
      "The energy is in kilowatt hours, so keep the time in hours.",
      "Thirty minutes is nought point five hours.",
      "Twelve divided by nought point five is twenty four kilowatts."
    ],
    explain: "Power is energy divided by time, so with energy in kilowatt hours the time must be in hours. Thirty minutes is half an hour, so twelve divided by nought point five is twenty four kilowatts. Multiplying instead gives six, using thirty minutes gives nought point four, and calling the answer watts confuses the kilowatt hour with a power unit."
  },
  {
    id: "pel-q-09",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    stem: "A bulb marked \"2 V 5 W\" is switched on for 5 minutes. How much energy does it dissipate?",
    figure: null,
    options: ["1500 J", "25 J", "5 J", "1500 W"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-time-units-1", 2: "pel-energy-notime", 3: "pel-power-1" },
    walkthrough: [
      "Energy equals power times time.",
      "The power is five watts, and the time must be in seconds.",
      "Five minutes is three hundred seconds.",
      "Five times three hundred is one thousand five hundred joules."
    ],
    explain: "Energy equals power times time, with the time in seconds. Five minutes is three hundred seconds, so five watts times three hundred seconds is one thousand five hundred joules. Using five minutes directly gives twenty five, dropping the time gives five, and energy is measured in joules, not watts."
  },
  {
    id: "pel-q-10",
    topicKey: "t16-practical-electricity",
    subtopic: "electrical-power",
    stem: "An electric heater draws a current of 8.0 A and has a power rating of 2000 W. What is the potential difference of the supply?",
    figure: null,
    options: ["250 V", "16 000 V", "0.004 V", "250 W"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-power-2", 2: "pel-power-2", 3: "pel-power-1" },
    walkthrough: [
      "Start from power equals voltage times current.",
      "To find the voltage, divide the power by the current.",
      "So two thousand watts divided by eight amperes.",
      "That gives two hundred and fifty volts."
    ],
    explain: "Voltage equals power divided by current, so two thousand divided by eight is two hundred and fifty volts. Multiplying gives sixteen thousand and dividing the wrong way gives nought point zero zero four, both from rearranging the formula wrongly. The answer is a voltage, so the unit is volts, not watts."
  },
  {
    id: "pel-q-11",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    stem: "A heating element has a power rating of 2000 W at 250 V. What is its resistance?",
    figure: null,
    options: ["31.25 ohm", "0.032 ohm", "2000 ohm", "250 ohm"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-power-resistance", 2: "pel-power-2", 3: "pel-power-2" },
    walkthrough: [
      "Use power equals voltage squared divided by resistance.",
      "Rearranged, resistance equals voltage squared divided by power.",
      "Two hundred and fifty squared is sixty two thousand five hundred.",
      "Divide that by two thousand to get thirty one point two five ohms."
    ],
    explain: "From power equals voltage squared divided by resistance, the resistance is voltage squared divided by power, so sixty two thousand five hundred divided by two thousand is thirty one point two five ohms. Treating the formula as voltage squared times resistance gives nought point zero three two, while multiplying or dividing power and voltage carelessly gives two thousand or two hundred and fifty."
  },
  {
    id: "pel-q-12",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    stem: "A connecting cable of resistance 5.0 ohm carries a current of 30 A. What is the power dissipated in the cable?",
    figure: null,
    options: ["4500 W", "150 W", "900 W", "750 W"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-power-resistance", 2: "pel-power-resistance", 3: "pel-power-resistance" },
    walkthrough: [
      "Use power equals current squared times resistance.",
      "Square the current first, so thirty squared is nine hundred.",
      "Then multiply by the resistance of five ohms.",
      "Nine hundred times five is four thousand five hundred watts."
    ],
    explain: "Power equals current squared times resistance, so square the thirty to get nine hundred, then multiply by five for four thousand five hundred watts. Forgetting the square gives thirty times five, which is one hundred and fifty, leaving out the resistance gives nine hundred, and squaring the resistance instead gives seven hundred and fifty. The square belongs on the current."
  },
  {
    id: "pel-q-13",
    topicKey: "t16-practical-electricity",
    subtopic: "mains-wiring",
    stem: "In a three-pin plug, what is the colour of the live wire?",
    figure: "fig-18-04-three-pin-plug.svg",
    options: ["Brown", "Blue", "Green and yellow", "Green"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-wire-colour-1", 2: "pel-wire-colour-1", 3: "pel-wire-colour-1" },
    walkthrough: [
      "The three wires each have a fixed standard colour.",
      "The live wire is brown.",
      "The neutral wire is blue.",
      "The earth wire is the striped one, green and yellow together."
    ],
    explain: "The live wire is brown, the neutral wire is blue, and the earth wire is green and yellow together. Blue is the neutral, and green and yellow is the earth, so choosing those for the live wire swaps the standard colours."
  },
  {
    id: "pel-q-14",
    topicKey: "t16-practical-electricity",
    subtopic: "mains-wiring",
    stem: "Which statement about the neutral wire is correct?",
    figure: null,
    options: [
      "It is at a low potential, near zero volts.",
      "It is at a high potential, like the live wire.",
      "It carries no current in normal use.",
      "It is coloured green and yellow."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-neutral-danger-1", 2: "pel-earth-current-1", 3: "pel-wire-colour-1" },
    walkthrough: [
      "The neutral wire sits near zero volts, close to earth potential.",
      "It carries the returning current in normal use, so current is present.",
      "The high potential is on the live wire, not the neutral.",
      "The neutral wire is coloured blue, not green and yellow."
    ],
    explain: "The neutral wire is at a low potential, near zero volts, and it carries the returning current in normal use. The high potential belongs to the live wire, the wire that carries no current normally is the earth wire, and the green and yellow wire is the earth. So only the low potential statement is correct."
  },
  {
    id: "pel-q-15",
    topicKey: "t16-practical-electricity",
    subtopic: "mains-wiring",
    stem: "During normal operation, which wire of a three-pin plug carries no current?",
    figure: "fig-18-04-three-pin-plug.svg",
    options: ["The earth wire", "The live wire", "The neutral wire", "Both the live and neutral wires"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-earth-current-1", 2: "pel-earth-current-1", 3: "pel-earth-current-1" },
    walkthrough: [
      "In normal use the live and neutral wires form the working circuit.",
      "Current flows in through the live and back through the neutral.",
      "The earth wire is only a safety path.",
      "So in normal operation the earth wire carries no current."
    ],
    explain: "In normal use the live and neutral wires carry the current and complete the working circuit. The earth wire is a safety path that only conducts if a fault makes the casing live, so it is the wire carrying no current in normal operation. Naming the live or neutral wire as current free reveals the idea that the earth wire is always carrying current, which it is not."
  },
  {
    id: "pel-q-16",
    topicKey: "t16-practical-electricity",
    subtopic: "earthing",
    stem: "Why is the metal casing of an appliance connected to the earth wire?",
    figure: "fig-18-03-earthing-comparison.svg",
    options: [
      "If a fault makes the casing live, the low-resistance earth wire carries the current safely to the ground.",
      "The earth wire completes the working circuit so the appliance can run.",
      "The earth wire blocks the current because it has a very high resistance.",
      "The casing needs the earth wire to carry current during normal use."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-earthing-func-complete", 2: "pel-earthing-func-resistance", 3: "pel-earth-current-1" },
    walkthrough: [
      "If a fault makes the live wire touch the casing, the casing becomes live.",
      "The earth wire has a very low resistance, giving an easy path to the ground.",
      "Almost all the fault current flows down that path instead of through a person.",
      "So earthing the casing protects the user from a shock."
    ],
    explain: "Earthing gives fault current a low resistance path to the ground. If the live wire touches the casing, the earth wire carries that current safely away instead of through a person, preventing a shock. The working circuit is completed by live and neutral, the earth wire protects by low resistance not high, and it carries no current in normal use."
  },
  {
    id: "pel-q-17",
    topicKey: "t16-practical-electricity",
    subtopic: "earthing",
    stem: "The earth wire keeps a user safe because it has:",
    figure: "fig-18-03-earthing-comparison.svg",
    options: [
      "a very low resistance, an easy path to the ground.",
      "a very high resistance that blocks the current.",
      "a resistance higher than the person's body.",
      "current flowing in it all the time to keep the casing charged."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-earthing-func-resistance", 2: "pel-earthing-func-resistance", 3: "pel-earth-current-1" },
    walkthrough: [
      "The earth wire is designed to have a very low resistance.",
      "That gives fault current an easy path straight to the ground.",
      "A person's body has a much higher resistance than the earth wire.",
      "So almost all the current flows down the earth wire, not through the person."
    ],
    explain: "The earth wire protects by having a very low resistance, far lower than a person's body, so fault current flows down it instead of through anyone. A high resistance would not carry the current away, and the earth wire carries no current at all in normal use, so it is not kept charged."
  },
  {
    id: "pel-q-18",
    topicKey: "t16-practical-electricity",
    subtopic: "fuses",
    stem: "Which statement best describes the job of a fuse?",
    figure: null,
    options: [
      "It melts to break the circuit when the current gets too large.",
      "It saves energy so that the electricity bill stays low.",
      "It is a source of e.m.f. that drives charge around the circuit.",
      "It cuts off the current in the neutral wire during normal use."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-fuse-purpose", 2: "pel-fuse-purpose", 3: "pel-safety-placement-1" },
    walkthrough: [
      "A fuse is a short, thin piece of wire.",
      "When the current gets too large, the fuse wire melts.",
      "Melting breaks the circuit and stops the current.",
      "That protects the wiring and appliance from overheating."
    ],
    explain: "A fuse is a thin wire that melts when the current gets too large, breaking the circuit to protect against overheating and fire. It does not save energy, and it is not a source of electromotive force. A fuse also belongs in the live wire, not the neutral, so cutting the neutral is the wrong idea too."
  },
  {
    id: "pel-q-19",
    topicKey: "t16-practical-electricity",
    subtopic: "fuses",
    stem: "An appliance draws a normal current of 3.8 A. Fuses are available rated 1 A, 2 A, 5 A, 10 A and 13 A. Which fuse is most suitable?",
    figure: "fig-18-08-fuse-circuit-pqr.svg",
    options: ["5 A", "2 A", "1 A", "13 A"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-fuse-rating", 2: "pel-fuse-rating", 3: "pel-fuse-rating" },
    walkthrough: [
      "The fuse rating should sit a little above the normal working current.",
      "The working current is three point eight amperes.",
      "The next standard rating above that is five amperes.",
      "So a five ampere fuse lets the appliance run but blows if a fault raises the current."
    ],
    explain: "The best fuse is just above the normal working current, so for three point eight amperes the five ampere fuse fits. A two ampere or one ampere fuse is below the working current and would blow at once even with no fault, while a thirteen ampere fuse is far too high to blow in time to protect the appliance."
  },
  {
    id: "pel-q-20",
    topicKey: "t16-practical-electricity",
    subtopic: "circuit-breakers",
    stem: "After a fault has been cleared, which safety device can be reset and used again rather than replaced?",
    figure: "fig-18-02-circuit-breaker-box.svg",
    options: ["A circuit breaker", "A fuse", "Both a fuse and a circuit breaker", "Neither, both must be replaced"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-fuse-vs-breaker", 2: "pel-fuse-vs-breaker", 3: "pel-fuse-vs-breaker" },
    walkthrough: [
      "A circuit breaker is a switch that trips during a fault.",
      "Once the fault is cleared, you can simply reset it.",
      "A fuse is different, because it melts when it blows.",
      "A melted fuse must be replaced, so only the circuit breaker is reset and reused."
    ],
    explain: "A circuit breaker is a switch, so after it trips it can be reset and reused once the fault is cleared. A fuse melts when it blows, so it is destroyed and must be replaced with a new one. Saying a fuse can be reset, or that a breaker must be replaced, mixes up how the two devices recover."
  },
  {
    id: "pel-q-21",
    topicKey: "t16-practical-electricity",
    subtopic: "circuit-breakers",
    stem: "Where is a circuit breaker fitted in a home?",
    figure: "fig-18-02-circuit-breaker-box.svg",
    options: [
      "In the fixed house wiring, inside the consumer unit.",
      "Inside each appliance's three-pin plug.",
      "In the neutral wire of the appliance.",
      "In the earth wire of the appliance."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-breaker-location", 2: "pel-safety-placement-1", 3: "pel-safety-placement-1" },
    walkthrough: [
      "A circuit breaker is not part of an appliance.",
      "It forms part of the fixed wiring of the house.",
      "The breakers are grouped together in the consumer unit.",
      "From there each one protects a whole part of the house."
    ],
    explain: "A circuit breaker sits in the fixed house wiring, inside the consumer unit, not inside an appliance's plug, where only a fuse can go. Safety devices are also wired into the live wire, never the neutral or the earth, so placing a breaker in those wires is wrong."
  },
  {
    id: "pel-q-22",
    topicKey: "t16-practical-electricity",
    subtopic: "double-insulation",
    stem: "Which statement about a double-insulated appliance is correct?",
    figure: null,
    options: [
      "It does not need an earth wire and uses a two-pin plug.",
      "It still needs an earth wire connected to its casing.",
      "Its metal casing must be earthed for safety.",
      "It needs a fuse fitted in the neutral wire."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-double-insulation-1", 2: "pel-double-insulation-1", 3: "pel-safety-placement-1" },
    walkthrough: [
      "Double insulation means two separate layers of insulation.",
      "The first covers the live parts, and the second is the outer plastic casing.",
      "No exposed metal part can ever become live.",
      "So there is nothing to earth, and the appliance uses a two-pin plug."
    ],
    explain: "A double-insulated appliance has two layers of insulation, so no exposed metal can become live, which means it needs no earth wire and uses a two-pin plug. Insisting it still needs an earthed casing misses the point of double insulation, and any fuse it does have would go in the live wire, not the neutral."
  },
  {
    id: "pel-q-23",
    topicKey: "t16-practical-electricity",
    subtopic: "safety-device-placement",
    stem: "In which wire must a fuse or switch be connected so that an appliance is safe?",
    figure: "fig-18-05-safety-live-vs-neutral.svg",
    options: ["The live wire", "The neutral wire", "The earth wire", "It makes no difference which wire"],
    correct: 0,
    distractorMisconceptions: { 1: "pel-safety-placement-1", 2: "pel-safety-placement-1", 3: "pel-safety-placement-1" },
    walkthrough: [
      "The live wire is the one carrying the high voltage.",
      "Breaking the live wire cuts the appliance off from that high voltage.",
      "If the switch is in the neutral, the appliance stays joined to the live wire.",
      "So a fuse or switch must be placed in the live wire to keep the user safe."
    ],
    explain: "Fuses and switches go in the live wire, because it carries the high voltage, so breaking it disconnects the appliance from the danger. If the device is in the neutral wire instead, the casing can stay at a high potential even after it opens, and a person can still be shocked. The earth wire is never switched or fused."
  },
  {
    id: "pel-q-24",
    topicKey: "t16-practical-electricity",
    subtopic: "dangers-of-electricity",
    stem: "Why do damp conditions make electricity more dangerous?",
    figure: null,
    options: [
      "Water with dissolved salts and impurities conducts through its ions, so current can flow through wet skin.",
      "Pure water by itself is an excellent conductor of electricity.",
      "The real danger is the colour of the cable, not the moisture.",
      "Being wet has no effect, so damp conditions are always safe."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-damp-water", 2: "pel-danger-cablecolour", 3: "pel-damp-water" },
    walkthrough: [
      "Pure water on its own is actually a poor conductor.",
      "Ordinary water carries dissolved salts and impurities.",
      "These conduct through their ions, giving current an easy path.",
      "So wet hands or damp surroundings make an electric shock more likely."
    ],
    explain: "Damp conditions are dangerous because ordinary water carries dissolved salts and impurities that conduct through their ions, giving current a path through wet skin. Pure water alone is a poor conductor, the colour of a cable is only a label and not a hazard, and being wet certainly does raise the danger rather than remove it."
  },
  {
    id: "pel-q-25",
    topicKey: "t16-practical-electricity",
    subtopic: "dangers-of-electricity",
    stem: "When does a person receive an electric shock?",
    figure: null,
    options: [
      "When their body becomes part of a complete circuit between a live conductor and the ground.",
      "As soon as they touch a live wire, even while perfectly insulated from the ground.",
      "Whenever they touch the neutral wire during normal use.",
      "Whenever they touch the earth wire of an appliance."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-shock-circuit", 2: "pel-neutral-danger-1", 3: "pel-earth-current-1" },
    walkthrough: [
      "A shock needs current to flow through the body.",
      "For current to flow, there must be a complete circuit.",
      "That circuit runs from a live conductor, through the person, to the ground.",
      "So a shock happens when the body completes a path from live to earth."
    ],
    explain: "A shock happens only when the body completes a circuit between a live conductor and the ground. Touching a live wire while well insulated from the ground gives the current no path, so no current flows. The neutral wire is near zero volts, and the earth wire carries no current in normal use, so touching those alone does not shock you."
  },
  {
    id: "pel-q-26",
    topicKey: "t16-practical-electricity",
    subtopic: "heating-effect",
    stem: "Why does a wire become hot when a current flows through it?",
    figure: null,
    options: [
      "The drifting charges collide with the metal atoms, making them vibrate more strongly.",
      "The electric current is itself hot and deposits that heat in the wire.",
      "A low resistance in the wire creates heat out of nothing.",
      "Heat is stored in the battery and pushed along the wire by the current."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pel-heating-cause", 2: "pel-heating-element-1", 3: "pel-heating-cause" },
    walkthrough: [
      "As current flows, the free charges drift through the metal.",
      "They repeatedly collide with the atoms of the metal lattice.",
      "Each collision makes those atoms vibrate more strongly.",
      "Stronger vibration means a higher temperature, so the wire heats up."
    ],
    explain: "The heat is made inside the wire by collisions. As the free charges drift along, they keep bumping into the metal atoms, making them vibrate more, which raises the temperature. The current does not arrive already hot, heat is not carried from the battery, and it is a high resistance, not a low one, that produces more heat."
  }
];
