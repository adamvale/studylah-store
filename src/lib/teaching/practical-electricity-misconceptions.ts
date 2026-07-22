// practical-electricity-misconceptions.ts
// Topic: O-Level Physics, Practical Electricity (topicKey "t16-practical-electricity")
// The tutor's diagnostic brain: the classic ways students go wrong in Practical
// Electricity, with the exact re-explanation for each. Grounded in
// StudyLah-HQ physics notes, Chapter 18 - Practical Electricity.md
// Spoken fields (reteach, tell, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const PRACTICAL_ELEC_MISCONCEPTIONS: Misconception[] = [
  {
    id: "pel-power-1",
    topicKey: "t16-practical-electricity",
    subtopic: "electrical-power",
    label: "Power and energy treated as the same quantity",
    belief: "Power and energy are the same, so a watt and a joule mean the same thing.",
    tell: "The student writes a power answer with the unit joule, or gives an energy answer in watts.",
    whyItHappens: "Both describe electrical effort in loose everyday talk, and the two units are learned close together, so the difference between an amount and a rate gets lost.",
    reteach: "Energy is an amount, measured in joules. Power is how fast that energy is transferred, measured in watts. One watt means one joule is transferred every second. So a watt is a joule per second, not a joule. When your answer is a rate, the unit is watts. When it is a total amount transferred, the unit is joules. Check the unit matches what the question asked for.",
    microExample: "P = VI = 36 gives 36 W (a rate). E = Pt over 480 s gives 17280 J (a total). Same device, different quantities.",
    figure: null,
    check: {
      question: "A lamp transfers energy at a steady rate. Should that rate be given in joules or in watts?",
      answer: "In watts, because a rate of energy transfer is a power. Joules would be the total amount of energy, not the rate."
    }
  },
  {
    id: "pel-power-2",
    topicKey: "t16-practical-electricity",
    subtopic: "electrical-power",
    label: "Power formula rearranged the wrong way",
    belief: "You can multiply or divide power, voltage and current in any order to get what you want.",
    tell: "The student divides when they should multiply, or multiplies when they should divide, for example writing current as power times voltage.",
    whyItHappens: "The three letters in power equals voltage times current can be shuffled without thinking, and students grab whichever order gives a tidy looking number.",
    reteach: "Start from power equals voltage times current, then rearrange carefully. To find current, divide power by voltage. To find voltage, divide power by current. Only power itself comes from multiplying voltage and current. A quick check is the size of the answer. If a small appliance seems to draw thousands of amperes, you have almost certainly multiplied when you should have divided.",
    microExample: "Lamp 240 V, 60 W: I = P / V = 60 / 240 = 0.25 A. Not 240 / 60 = 4 A, and not 240 x 60.",
    figure: null,
    check: {
      question: "An appliance is rated 240 volts and 60 watts. To find the current, do you multiply or divide, and which way round?",
      answer: "You divide the power by the voltage, so sixty divided by two hundred and forty, which is nought point two five amperes."
    }
  },
  {
    id: "pel-power-resistance",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    label: "Resistance power formulas misremembered",
    belief: "Power in a resistor can be found from P = IR, or from P = V^2 R.",
    tell: "The student drops the square in current squared times resistance, or multiplies by resistance instead of dividing in the voltage squared form.",
    whyItHappens: "The forms P = I^2R and P = V^2/R look similar, so the square gets forgotten and the divide gets flipped to a multiply.",
    reteach: "There are two resistance forms and each has a careful shape. Power equals current squared times resistance, so the current is squared first, then multiplied by resistance. Power also equals voltage squared divided by resistance, so here you divide by resistance, you do not multiply. Keep the square on the right quantity, and remember the voltage form divides while the current form multiplies.",
    microExample: "Cable R = 5 ohm, I = 30 A: P = I^2R = 30^2 x 5 = 4500 W. Not 30 x 5 = 150 W, and not 30 x 5^2 = 750 W.",
    figure: null,
    check: {
      question: "A current of thirty amperes flows through a five ohm cable. Using power equals current squared times resistance, what is the power?",
      answer: "You square the thirty to get nine hundred, then multiply by five, giving four thousand five hundred watts."
    }
  },
  {
    id: "pel-energy-notime",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    label: "Time left out of the energy calculation",
    belief: "Electrical energy is just voltage times current, with no need to include the time.",
    tell: "The student stops at voltage times current and calls that the energy, forgetting to multiply by how long it ran.",
    whyItHappens: "Power equals voltage times current is met first and used most, so students reach for it even when the question asks for total energy.",
    reteach: "Voltage times current gives you the power, which is the rate of energy transfer, not the total energy. To get the energy you must multiply the power by the time it runs, so energy equals voltage times current times time. Without the time you have only found how fast energy is being used, not how much was used altogether.",
    microExample: "12 V, 3 A for 480 s: E = VIt = 12 x 3 x 480 = 17280 J. Stopping at VI = 36 gives the power, not the energy.",
    figure: null,
    check: {
      question: "You have worked out voltage times current for an appliance. What must you still do to find the total energy it uses?",
      answer: "Multiply by the time it runs for. Voltage times current only gives the power, so you need the time to reach the total energy."
    }
  },
  {
    id: "pel-time-units-1",
    topicKey: "t16-practical-electricity",
    subtopic: "power-energy-relations",
    label: "Minutes used instead of seconds for energy in joules",
    belief: "You can put a time in minutes straight into the energy equation and still get joules.",
    tell: "The student multiplies power by a number of minutes and reports the result in joules without converting to seconds.",
    whyItHappens: "The time is given in minutes in the question, so it feels natural to use that number directly, and the need for base units is easy to forget.",
    reteach: "When you want energy in joules, the time must be in seconds, because a watt is a joule per second. So change minutes into seconds first by multiplying by sixty. Five minutes is three hundred seconds. Convert the time, then multiply by the power, and the answer comes out correctly in joules.",
    microExample: "5 W for 5 min: use t = 300 s, so E = Pt = 5 x 300 = 1500 J. Using 5 x 5 = 25 J leaves the minutes unconverted.",
    figure: null,
    check: {
      question: "Before finding energy in joules, what should you do with a time given as five minutes?",
      answer: "Change it into seconds first, so five minutes becomes three hundred seconds, because a joule is one watt for one second."
    }
  },
  {
    id: "pel-kwh-1",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    label: "Kilowatt-hour thought to be a unit of power",
    belief: "The kilowatt-hour is a unit of power, like the watt or the kilowatt.",
    tell: "The student labels a power answer in kilowatt hours, or expects the meter reading to be a power.",
    whyItHappens: "The word kilowatt sits inside kilowatt hour, so students read the whole thing as a power and miss the hour that turns it into an energy.",
    reteach: "A kilowatt hour is a unit of energy, not power. It is a power of one kilowatt kept up for one whole hour, so it already has a time built into it. The kilowatt on its own is the power. Multiply that power by a time in hours and you get energy in kilowatt hours. So the meter that measures your bill is measuring energy used, not power.",
    microExample: "1 kWh = 1 kW for 1 h = 1000 W x 3600 s = 3.6 x 10^6 J (an energy). A kilowatt alone is the power.",
    figure: null,
    check: {
      question: "Is the kilowatt-hour a unit of power or a unit of energy?",
      answer: "It is a unit of energy. It is a power of one kilowatt kept going for one hour, so it measures energy used, not power."
    }
  },
  {
    id: "pel-kwh-2",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    label: "Watts and seconds used when finding kilowatt-hours",
    belief: "To find energy in kilowatt-hours, put the power in watts and the time in seconds.",
    tell: "The student leaves the power in watts and gets an energy number that is a thousand times too big for a bill.",
    whyItHappens: "Every earlier energy question was in joules with base units, so students carry the watts and seconds habit into the kilowatt hour, where different units are needed.",
    reteach: "The kilowatt hour has its own two units. Keep the power in kilowatts and the time in hours, then multiply. So a two thousand watt heater is two kilowatts, and four hours stays as four hours, giving eight kilowatt hours. If you leave the power in watts you get a number a thousand times too large, which is the usual warning sign.",
    microExample: "2000 W heater for 4 h: use 2 kW x 4 h = 8 kWh. Using 2000 x 4 = 8000 is a thousand times too big.",
    figure: null,
    check: {
      question: "To work out kilowatt-hours, what units must the power and the time be in?",
      answer: "The power in kilowatts and the time in hours. So a two thousand watt appliance becomes two kilowatts before you multiply."
    }
  },
  {
    id: "pel-cost-notime",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    label: "Cost found from power without the running time",
    belief: "The cost of electricity is the power rating multiplied by the price of one unit.",
    tell: "The student multiplies the power straight by the unit price and skips the energy step, so the running time never appears.",
    whyItHappens: "The cost formula and the power rating are both prominent, and it is tempting to jump straight from power to cost without the energy in between.",
    reteach: "Cost depends on energy used, not on power alone. First find the energy in kilowatt hours by multiplying the power in kilowatts by the time in hours. Then multiply that energy by the price of one unit. A powerful appliance used for a short time can cost less than a weak one left on all day, so the time really does matter.",
    microExample: "2 kW heater, 4 h, 25 cents a unit: E = 2 x 4 = 8 kWh, cost = 8 x $0.25 = $2.00. Not 2 x $0.25 = $0.50.",
    figure: null,
    check: {
      question: "Why can you not find the cost of running an appliance from its power and the unit price alone?",
      answer: "Because cost depends on the energy used, so you also need the running time. Multiply power by time to get the energy first, then by the price."
    }
  },
  {
    id: "pel-cost-units",
    topicKey: "t16-practical-electricity",
    subtopic: "kilowatt-hour-and-cost",
    label: "Cents and dollars not converted in the cost",
    belief: "You can multiply kilowatt-hours by a price in cents and read the answer straight off in dollars.",
    tell: "The student multiplies the energy by a price like twenty five cents and then writes the answer with a dollar sign in front.",
    whyItHappens: "The price is quoted in cents but the answer is expected in dollars, and the change from one to the other is easy to skip.",
    reteach: "Keep the money units consistent. If the price is twenty five cents a unit, that is nought point two five dollars a unit, so change it before you multiply. Otherwise your number is really in cents, and writing a dollar sign in front of it makes it a hundred times too big. Convert cents to dollars first, then multiply by the energy.",
    microExample: "8 kWh at 25 cents: cost = 8 x $0.25 = $2.00. Writing 8 x 25 = $200 keeps the answer in cents by mistake.",
    figure: null,
    check: {
      question: "One unit of energy costs twenty five cents. What should you use as the price before multiplying by the energy in dollars?",
      answer: "Nought point two five dollars, because twenty five cents is a quarter of a dollar. Otherwise the answer stays in cents."
    }
  },
  {
    id: "pel-wire-colour-1",
    topicKey: "t16-practical-electricity",
    subtopic: "mains-wiring",
    label: "Live, neutral and earth colours mixed up",
    belief: "The live wire is blue and the neutral wire is brown.",
    tell: "The student names the wrong colour for a wire, most often swapping live and neutral or giving the earth wire a single colour.",
    whyItHappens: "The three colours are just facts to memorise, with no obvious logic, so they are easily swapped under pressure.",
    reteach: "Hold the three colours firmly. The live wire is brown. The neutral wire is blue. The earth wire is the striped one, green and yellow together. A memory hook is that the earth wire has two colours because it protects both you and the appliance. Live is brown, neutral is blue, earth is green and yellow.",
    microExample: "Live = brown, Neutral = blue, Earth = green and yellow. Swapping brown and blue is the classic slip.",
    figure: "fig-18-04-three-pin-plug.svg",
    check: {
      question: "What colour is the live wire, and what colour is the earth wire?",
      answer: "The live wire is brown, and the earth wire is green and yellow together. The neutral wire is blue."
    }
  },
  {
    id: "pel-earth-current-1",
    topicKey: "t16-practical-electricity",
    subtopic: "mains-wiring",
    label: "Earth wire thought to carry current normally",
    belief: "The earth wire carries current all the time, just like the live and neutral wires.",
    tell: "The student says the earth wire is part of the working circuit and carries current during normal use.",
    whyItHappens: "All three wires run to the appliance, so it looks like all three must carry current, and the special safety role of the earth wire is missed.",
    reteach: "In normal use only the live and neutral wires carry current, and together they form the working circuit. The earth wire carries no current at all when things are fine. It is a safety path that only conducts if a fault makes the metal casing live. Think of the earth wire as a spare escape route that stays empty until there is an emergency.",
    microExample: "Normal operation: current in live and neutral, zero current in earth. Earth only conducts during a fault.",
    figure: "fig-18-03-earthing-comparison.svg",
    check: {
      question: "During normal operation, which wire in a three-pin plug carries no current?",
      answer: "The earth wire. It stays empty in normal use and only carries current if a fault makes the casing live."
    }
  },
  {
    id: "pel-neutral-danger-1",
    topicKey: "t16-practical-electricity",
    subtopic: "mains-wiring",
    label: "Neutral wire thought to be at high voltage",
    belief: "The neutral wire is at a high potential and is as dangerous as the live wire.",
    tell: "The student says touching the neutral wire gives a shock, or that neutral and live are both at high voltage.",
    whyItHappens: "The neutral wire carries current in normal use, so students assume it must also carry the high voltage, treating current and voltage as the same danger.",
    reteach: "The live wire is at a high potential, but the neutral wire sits near zero volts, close to the same potential as earth. The neutral carries the returning current, yet it is at a low voltage, so on its own it is not the dangerous one. The high potential difference is between live and neutral, and between live and earth, because the live wire is the one carrying the high voltage.",
    microExample: "230 V mains: live to neutral = 230 V, but neutral to earth is about 0 V. The neutral sits near earth potential.",
    figure: null,
    check: {
      question: "In a 230 volt mains supply, is the neutral wire at a high potential or near zero volts?",
      answer: "Near zero volts, close to earth potential. The high potential is on the live wire, so live carries the danger."
    }
  },
  {
    id: "pel-earthing-func-complete",
    topicKey: "t16-practical-electricity",
    subtopic: "earthing",
    label: "Earthing thought to complete the working circuit",
    belief: "The earth wire completes the working circuit so that the appliance can run.",
    tell: "The student says an appliance will not switch on without its earth wire, treating earthing as part of normal operation.",
    whyItHappens: "Students know a circuit needs to be complete to work, and mistake the safety earth for the return path that actually does that job.",
    reteach: "The working circuit is completed by the live and neutral wires together, and that is what lets current flow through the appliance. The earth wire plays no part in normal running. Its only job is safety. If the live wire touches the metal casing, the earth wire carries that fault current safely to the ground. Many appliances even work with no earth wire at all, using double insulation instead.",
    microExample: "Appliance runs on live plus neutral. Earth stays idle unless a fault makes the casing live.",
    figure: "fig-18-03-earthing-comparison.svg",
    check: {
      question: "Which two wires complete the working circuit that lets an appliance run?",
      answer: "The live and the neutral wires. The earth wire is only for safety and takes no part in normal running."
    }
  },
  {
    id: "pel-earthing-func-resistance",
    topicKey: "t16-practical-electricity",
    subtopic: "earthing",
    label: "Earth wire thought to protect by high resistance",
    belief: "The earth wire keeps you safe because it has a very high resistance that blocks the current.",
    tell: "The student explains earthing by saying the earth wire resists or blocks the current, rather than carrying it away.",
    whyItHappens: "Safety and blocking sound like they belong together, so students imagine a high resistance stopping the current instead of a low resistance leading it away.",
    reteach: "The earth wire protects you by having a very low resistance, not a high one. If a fault makes the casing live, the earth wire offers an easy, low resistance path straight to the ground. Almost all the current rushes down that easy path instead of through a person, because your body has a much higher resistance. So the earth wire works by carrying current away, not by blocking it.",
    microExample: "Earth wire has low resistance, so fault current flows down it, not through the much higher resistance of a person.",
    figure: "fig-18-03-earthing-comparison.svg",
    check: {
      question: "Does the earth wire keep you safe by having a high resistance or a low resistance?",
      answer: "A low resistance. It gives fault current an easy path to the ground, so almost none flows through the higher resistance of your body."
    }
  },
  {
    id: "pel-fuse-purpose",
    topicKey: "t16-practical-electricity",
    subtopic: "fuses",
    label: "Fuse thought to save or supply energy",
    belief: "A fuse is there to save energy or to supply energy to the circuit.",
    tell: "The student describes a fuse as something that lowers the bill or drives current, instead of a link that breaks on a large current.",
    whyItHappens: "Fuses sit in the circuit near the supply, so students guess they help power the appliance or manage its energy, missing their protective role.",
    reteach: "A fuse does not save or supply any energy. It is a short, thin piece of wire that melts when the current gets too large. Melting breaks the circuit and stops the current, which protects the wiring and the appliance from overheating and catching fire. So the fuse is a safety break that only acts when something goes wrong, not an energy saver or a power source.",
    microExample: "Fault current rises above the rating, the thin fuse wire melts, the circuit opens, and the current stops.",
    figure: null,
    check: {
      question: "What is the actual job of a fuse in a circuit?",
      answer: "To melt and break the circuit when the current gets too large, stopping the wiring from overheating. It does not save or supply energy."
    }
  },
  {
    id: "pel-fuse-rating",
    topicKey: "t16-practical-electricity",
    subtopic: "fuses",
    label: "Fuse rating chosen far above or below the working current",
    belief: "A fuse rated well above or well below the working current protects just as well.",
    tell: "The student picks a fuse far higher than the appliance needs, or one below its normal current, without matching it to the working current.",
    whyItHappens: "The purpose of the rating is unclear, so any nearby value looks fine, and students do not link the choice to the appliance's normal current.",
    reteach: "The fuse rating should sit a little above the appliance's normal working current. It must be high enough to let the appliance run without blowing, but low enough to melt quickly if a fault pushes the current too high. A rating far too high will not blow in time to protect anything, and one below the working current will blow at once even with no fault. So choose the next standard value just above the normal current.",
    microExample: "Appliance draws 3.8 A. From 1, 2, 5, 10, 13 A the best is 5 A, just above 3.8 A. A 2 A fuse blows at once, a 13 A fuse barely protects.",
    figure: "fig-18-08-fuse-circuit-pqr.svg",
    check: {
      question: "An appliance normally draws about four amperes. Should its fuse be rated just above that, far above, or below?",
      answer: "Just above it, so around five amperes. Far above would not protect in time, and below would blow straight away even with no fault."
    }
  },
  {
    id: "pel-fuse-vs-breaker",
    topicKey: "t16-practical-electricity",
    subtopic: "circuit-breakers",
    label: "Blown fuse thought to be resettable",
    belief: "After it blows, a fuse can be reset and reused, the same as a circuit breaker.",
    tell: "The student says a blown fuse just needs flicking back on, or that a tripped circuit breaker must be thrown away.",
    whyItHappens: "Fuses and circuit breakers do the same protective job, so students assume they are used again in the same way after acting.",
    reteach: "A fuse and a circuit breaker act the same way but recover differently. A fuse melts, so once it has blown it is destroyed and must be replaced with a new one. A circuit breaker is a switch, so after it trips you can simply reset it and use it again, once the faulty appliance has been removed. So a blown fuse is replaced, but a tripped breaker is reset.",
    microExample: "Fuse blows, melted, replace it. Circuit breaker trips, still whole, reset it and reuse it.",
    figure: "fig-18-02-circuit-breaker-box.svg",
    check: {
      question: "After a fault, which one can be reset and reused, a blown fuse or a tripped circuit breaker?",
      answer: "The tripped circuit breaker can be reset and reused. A blown fuse has melted, so it must be replaced with a new one."
    }
  },
  {
    id: "pel-breaker-location",
    topicKey: "t16-practical-electricity",
    subtopic: "circuit-breakers",
    label: "Circuit breaker thought to sit inside the plug",
    belief: "A circuit breaker is fitted inside each appliance's three-pin plug, like a fuse.",
    tell: "The student places the circuit breaker in the plug or inside the appliance rather than in the house wiring.",
    whyItHappens: "A fuse does live inside the plug, so students assume the circuit breaker, which does a similar job, sits there too.",
    reteach: "A fuse can sit inside a plug, but a circuit breaker does not. Circuit breakers are part of the fixed wiring of the house, grouped together in the consumer unit, sometimes called the fuse box. From there each breaker protects a whole part of the house. So look for a circuit breaker in the consumer unit on the wall, not inside an appliance's plug.",
    microExample: "Fuse: inside the plug. Circuit breaker: in the consumer unit, part of the fixed house wiring.",
    figure: "fig-18-02-circuit-breaker-box.svg",
    check: {
      question: "Where is a circuit breaker fitted, inside the plug or in the fixed house wiring?",
      answer: "In the fixed house wiring, inside the consumer unit. Only a fuse sits inside an appliance's plug."
    }
  },
  {
    id: "pel-double-insulation-1",
    topicKey: "t16-practical-electricity",
    subtopic: "double-insulation",
    label: "Double-insulated appliance thought to still need earthing",
    belief: "An appliance with double insulation still needs an earth wire to be safe.",
    tell: "The student insists a double-insulated appliance must be earthed, or is puzzled by its two-pin plug.",
    whyItHappens: "Earthing is taught as the main protection, so students assume every appliance needs it and miss that double insulation replaces the need.",
    reteach: "Double insulation means two separate layers of insulation protect the user. The first layer covers the internal live parts, and the second is the outer non metallic casing, usually plastic. Because no exposed metal part can ever become live, there is nothing that needs earthing. So a double insulated appliance needs no earth wire and uses a two pin plug, and it stays safe to touch even with an internal fault.",
    microExample: "Double insulation: inner layer plus plastic outer casing, no exposed metal, so no earth wire and a two-pin plug.",
    figure: null,
    check: {
      question: "Why does a double-insulated appliance not need an earth wire?",
      answer: "Because two layers of insulation mean no exposed metal part can become live, so there is nothing to earth. It uses a two-pin plug."
    }
  },
  {
    id: "pel-safety-placement-1",
    topicKey: "t16-practical-electricity",
    subtopic: "safety-device-placement",
    label: "Fuse or switch placed in the neutral or earth wire",
    belief: "It does not matter whether a fuse or switch goes in the live, neutral or earth wire.",
    tell: "The student puts the fuse or switch in the neutral or earth wire, or says the position makes no difference.",
    whyItHappens: "All the wires look alike in a diagram, so students treat them as interchangeable and miss why the live wire is special.",
    reteach: "Fuses, switches and circuit breakers must all go in the live wire. The live wire carries the high voltage, so breaking it cuts the appliance off from the danger. If you put the fuse or switch in the neutral wire instead, the appliance stays joined to the live wire even after it opens, so the casing can still be at a high potential and a person can still be shocked. The earth wire is never switched or fused. So always break the live wire.",
    microExample: "Switch in live: opening it removes the high voltage, casing is safe. Switch in neutral: still joined to live, casing stays dangerous.",
    figure: "fig-18-05-safety-live-vs-neutral.svg",
    check: {
      question: "In which wire must a fuse or switch be placed, and why?",
      answer: "In the live wire, because it carries the high voltage. Breaking it cuts the appliance off from the danger, which breaking the neutral would not do."
    }
  },
  {
    id: "pel-damp-water",
    topicKey: "t16-practical-electricity",
    subtopic: "dangers-of-electricity",
    label: "Pure water thought to be the conductor in damp dangers",
    belief: "It is the pure water itself that conducts, so any water is equally dangerous near electricity.",
    tell: "The student says pure water is an excellent conductor, or that dampness cannot matter because water insulates.",
    whyItHappens: "Everyday water always seems to conduct, so students credit the water itself rather than the salts and impurities dissolved in it.",
    reteach: "Pure water is actually a poor conductor. What makes damp conditions dangerous is that ordinary water carries dissolved salts and impurities, and these conduct through their ions. Wet hands or damp surroundings therefore give the current an easy path through the body, making an electric shock far more likely. So the danger comes from the dissolved impurities in the water, not from pure water on its own.",
    microExample: "Pure water: poor conductor. Water with dissolved salts: conducts through ions, so wet hands make a shock more likely.",
    figure: null,
    check: {
      question: "Why do damp conditions make an electric shock more likely, if pure water is a poor conductor?",
      answer: "Because ordinary water carries dissolved salts and impurities that conduct through their ions, giving current an easy path through wet skin."
    }
  },
  {
    id: "pel-danger-cablecolour",
    topicKey: "t16-practical-electricity",
    subtopic: "dangers-of-electricity",
    label: "Cable colour treated as a source of danger",
    belief: "The colour of a cable affects how dangerous it is.",
    tell: "The student lists the colour of a cable as one of the hazards of electricity.",
    whyItHappens: "Wire colours are stressed so heavily for wiring a plug that students overextend them into a safety hazard, which they are not.",
    reteach: "The colour of a cable is only a label that tells you which wire is which. It does not change how dangerous the cable is. The real dangers are things like damaged insulation, overheated cables and damp conditions. So when you list hazards, leave out the colour, and focus on bare wires, overheating and moisture, which are the things that actually cause harm.",
    microExample: "Real dangers: damaged insulation, overheated cables, damp conditions. Cable colour is just a label, not a hazard.",
    figure: null,
    check: {
      question: "Is the colour of a cable a genuine electrical danger?",
      answer: "No. The colour only labels the wire. The real dangers are damaged insulation, overheated cables and damp conditions."
    }
  },
  {
    id: "pel-shock-circuit",
    topicKey: "t16-practical-electricity",
    subtopic: "dangers-of-electricity",
    label: "Shock thought to need only touching a live wire",
    belief: "You get an electric shock just by touching a live wire, even when perfectly insulated from the ground.",
    tell: "The student says any touch of a live wire shocks you, ignoring whether a path to earth exists.",
    whyItHappens: "The live wire is the obvious danger, so students focus on the touch itself and forget that current also needs a way back to complete a loop.",
    reteach: "A shock happens only when your body becomes part of a complete circuit, usually between a live conductor and the ground. If you are well insulated from the ground, for example standing on a dry rubber mat, the current has no path to complete, so no current flows through you. That is why insulating materials and dry conditions protect you. The live wire is dangerous, but it needs a path to earth through you to give a shock.",
    microExample: "Live touch plus a path to earth through the body equals a shock. Live touch with no path to earth means no current flows.",
    figure: null,
    check: {
      question: "What has to happen, besides touching a live conductor, for a person to get an electric shock?",
      answer: "Their body must complete a circuit to the ground. With no path to earth, for example on a dry insulating mat, no current flows through them."
    }
  },
  {
    id: "pel-heating-cause",
    topicKey: "t16-practical-electricity",
    subtopic: "heating-effect",
    label: "Heating thought to come from hot current rather than collisions",
    belief: "A wire heats up because the electric current is itself hot and deposits that heat.",
    tell: "The student explains the heating effect by saying the current arrives hot, instead of describing collisions in the wire.",
    whyItHappens: "Heat and electricity are both felt as energy, so students picture the current carrying heat along rather than heat being made inside the wire.",
    reteach: "The current does not arrive hot. As the free charges drift through the metal they keep colliding with the atoms of the lattice. Each collision makes those atoms vibrate more strongly, and stronger vibration means a higher temperature. So the heat is made right there in the wire by these collisions, which is why a higher resistance, with more collisions, produces more heat. That is the heating effect of a current.",
    microExample: "Charges collide with lattice atoms, atoms vibrate more, temperature rises. Heat is made in the wire, not carried in by the current.",
    figure: null,
    check: {
      question: "Where does the heat in a current-carrying wire actually come from?",
      answer: "From the moving charges colliding with the atoms of the metal, making them vibrate more. The heat is made in the wire, not carried in by the current."
    }
  },
  {
    id: "pel-heating-element-1",
    topicKey: "t16-practical-electricity",
    subtopic: "heating-effect",
    label: "Heating element thought to need low resistance",
    belief: "A heating element should be made of a metal with a low resistance.",
    tell: "The student picks a low resistance metal for a heating element, or says low resistance gives more heat.",
    whyItHappens: "Low resistance is linked with letting current through easily, so students assume it must also be the good choice for making heat.",
    reteach: "A heating element wants a high resistance, not a low one, because more resistance means more collisions and so more heat for a given current. It also needs a high melting point so it can glow red hot without melting. That is why a metal like nichrome is used, combining high resistance with a high melting point. So the right element metal resists the current strongly and survives being very hot.",
    microExample: "Good element: high resistance for plenty of heat, plus high melting point to survive it. Nichrome fits both.",
    figure: "fig-18-01-resistance-scale.svg",
    check: {
      question: "Should a heating element be made of a metal with high or low resistance, and why?",
      answer: "High resistance, because more resistance gives more heat for a given current. It also needs a high melting point, which is why nichrome is used."
    }
  }
];
