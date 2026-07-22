// current-questions.ts
// Teaching question bank for O-Level Physics, Current of Electricity (topicKey "t14-current-of-electricity").
// Every wrong option maps to the misconception it reveals (see current-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 16 - Current of Electricity.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const CURRENT_QUESTIONS: TeachQuestion[] = [
  {
    id: "cur-q-01",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    stem: "A steady current of 4 A flows through a wire. What total charge passes through it in 3 minutes?",
    figure: null,
    options: ["12 C", "720 C", "0.022 C", "2160 C"],
    correct: 1,
    distractorMisconceptions: { 0: "cur-units", 2: "cur-qit-rearrange", 3: "cur-units" },
    walkthrough: [
      "The current is in amperes, so the time has to be in seconds first.",
      "Three minutes is three times sixty, which is one hundred and eighty seconds.",
      "Charge is current times time, so four times one hundred and eighty.",
      "That gives seven hundred and twenty coulombs."
    ],
    explain: "Charge equals current times time, but the time must be in seconds, so three minutes becomes one hundred and eighty seconds. Four amperes times one hundred and eighty seconds is seven hundred and twenty coulombs. Using the three directly gives only twelve, which is the tell that the minutes were never converted, and dividing instead of multiplying gives the tiny wrong answer."
  },
  {
    id: "cur-q-02",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    stem: "Which statement about electric current is correct?",
    figure: null,
    options: [
      "It is the rate of flow of electric charge.",
      "It is the number of atoms passing a point each second.",
      "It is the energy carried by each unit of charge.",
      "It is the acceleration of the electrons in the wire."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-current-def", 2: "cur-emf-def", 3: "cur-current-def" },
    walkthrough: [
      "Electric current is about how much charge flows past a point each second.",
      "It is not a count of atoms, because it measures charge, not particles.",
      "The energy carried by each charge is a different idea, that one is electromotive force or potential difference.",
      "And it is not how quickly the charges speed up, so acceleration is wrong too."
    ],
    explain: "Current is the rate of flow of electric charge, which is how much charge passes a point each second. Counting atoms misses that current measures charge, the energy per charge describes electromotive force or potential difference, and the acceleration of the electrons is a separate quantity altogether."
  },
  {
    id: "cur-q-03",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    stem: "When a switch is closed, a current of 1.8 A flows through a lamp. What charge passes through it in 6 minutes?",
    figure: null,
    options: ["10.8 C", "648 C", "200 C", "0.3 C"],
    correct: 1,
    distractorMisconceptions: { 0: "cur-units", 2: "cur-qit-rearrange", 3: "cur-qit-rearrange" },
    walkthrough: [
      "First change six minutes into seconds, which is six times sixty, or three hundred and sixty seconds.",
      "Charge is current times time.",
      "So it is one point eight amperes times three hundred and sixty seconds.",
      "That gives six hundred and forty eight coulombs."
    ],
    explain: "Six minutes is three hundred and sixty seconds, and charge equals current times time, so one point eight times three hundred and sixty is six hundred and forty eight coulombs. Using six directly gives ten point eight, which skips the conversion, and dividing instead of multiplying gives the other wrong values."
  },
  {
    id: "cur-q-04",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    stem: "A quantity is measured in coulombs per second. Which quantity and unit is this?",
    figure: null,
    options: ["Current, in amperes.", "Charge, in coulombs.", "Charge, in amperes.", "Current, in coulombs."],
    correct: 0,
    distractorMisconceptions: { 1: "cur-charge-current-units", 2: "cur-charge-current-units", 3: "cur-charge-current-units" },
    walkthrough: [
      "One coulomb per second means one unit of charge passing every second.",
      "Charge per second is exactly what current means.",
      "Current is measured in amperes, where one ampere is one coulomb every second.",
      "So the quantity is current, and its unit is the ampere."
    ],
    explain: "Coulombs per second is charge divided by time, which is current, and current is measured in amperes. Charge itself is measured in coulombs, not amperes, so the answers that swap those two units mix up charge and current."
  },
  {
    id: "cur-q-05",
    topicKey: "t14-current-of-electricity",
    subtopic: "conventional-current-and-electron-flow",
    stem: "Which correctly describes conventional current and electron flow in a circuit?",
    figure: "fig-16-03-conventional-vs-electron.svg",
    options: [
      "Conventional current goes from positive to negative; electrons go from negative to positive.",
      "Both conventional current and electrons go from negative to positive.",
      "Conventional current goes from negative to positive; electrons go from positive to negative.",
      "Both go from positive to negative."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-convention-dir", 2: "cur-convention-dir", 3: "cur-convention-dir" },
    walkthrough: [
      "Electrons are the real charge carriers, and they move from the negative terminal to the positive terminal.",
      "Conventional current was agreed long before electrons were known, as positive charge moving.",
      "It flows the opposite way, from the positive terminal to the negative terminal.",
      "So the two directions are always opposite to each other."
    ],
    explain: "Electron flow runs from the negative terminal to the positive terminal, while conventional current runs the other way, from positive to negative. They always point in opposite directions, so any answer that has them going the same way, or has conventional current following the electrons, is wrong."
  },
  {
    id: "cur-q-06",
    topicKey: "t14-current-of-electricity",
    subtopic: "conventional-current-and-electron-flow",
    stem: "In what way do electron flow and conventional current differ?",
    figure: null,
    options: [
      "Only in the direction taken, and the sign of the charge pictured.",
      "In the size of the current they produce.",
      "In the amount of charge that flows.",
      "In the time the charge takes to go round."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-convention-mag", 2: "cur-convention-mag", 3: "cur-convention-mag" },
    walkthrough: [
      "Both pictures describe the very same flow in the circuit.",
      "Conventional current imagines positive charge one way, electron flow is negative electrons the other way.",
      "So what changes is the direction and the sign of the charge you picture.",
      "The size of the current is exactly the same in both pictures."
    ],
    explain: "The only differences are the direction and the sign of the charge you imagine moving. The size of the current, the amount of charge and the time taken are all the same, because the two are just two ways of describing one flow."
  },
  {
    id: "cur-q-07",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force",
    stem: "Which description of the electromotive force of a source is correct?",
    figure: "fig-16-04-emf-source.svg",
    options: [
      "The energy given to each unit charge to drive it around the whole circuit.",
      "The energy stored inside one unit of charge.",
      "A force that resists a unit charge moving around a circuit.",
      "The work done to move one atom around the circuit each second."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-emf-def", 2: "cur-emf-def", 3: "cur-emf-def" },
    walkthrough: [
      "Electromotive force is not really a force, it is an energy for each unit of charge.",
      "It is the energy the source gives to each charge to drive it all the way round the circuit.",
      "It is not stored inside the charge, and it does not resist the motion.",
      "So the first description is the correct one."
    ],
    explain: "Electromotive force is the energy the source gives to every unit of charge to push it around the whole circuit. It is not energy trapped inside the charge, it is not a force opposing the motion, and it is not about moving atoms, even though its name contains the word force."
  },
  {
    id: "cur-q-08",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    stem: "How do electromotive force and potential difference differ?",
    figure: "fig-16-05-pd-component.svg",
    options: [
      "e.m.f. is the energy per charge from the source for the whole circuit; p.d. is the energy per charge delivered to one component.",
      "They are the same quantity with two different names.",
      "e.m.f. is measured across a component; p.d. is a property of the source.",
      "p.d. exists only in the source, while e.m.f. exists only across components."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-emfpd-same", 2: "cur-emfpd-same", 3: "cur-emfpd-same" },
    walkthrough: [
      "Both are energy per charge and both are measured in volts, but they are not the same.",
      "Electromotive force belongs to the source and covers the whole trip round the circuit.",
      "Potential difference is the energy each charge delivers to one component as it passes through.",
      "So the first statement gets it right."
    ],
    explain: "Electromotive force is the energy per charge the source supplies for the whole circuit, while potential difference is the energy per charge handed to a single component. They share the volt as a unit, but they are not the same, and the source and component roles are not swapped."
  },
  {
    id: "cur-q-09",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    stem: "A cell of e.m.f. 1.5 V is left unconnected, so no current flows. What is its e.m.f.?",
    figure: "fig-16-04-emf-source.svg",
    options: [
      "1.5 V, because e.m.f. is present even when no current is drawn.",
      "0 V, because no current is flowing.",
      "1.5 A, because the charge is not moving.",
      "It cannot be found unless a current flows."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-pd-nocurrent", 2: "cur-charge-current-units", 3: "cur-pd-nocurrent" },
    walkthrough: [
      "Electromotive force belongs to the source itself.",
      "So it is present even when nothing is connected and no current flows.",
      "The cell still has its full one point five volts, ready to push charge when a circuit is completed.",
      "So the electromotive force is one point five volts."
    ],
    explain: "The electromotive force belongs to the source, so it is still one point five volts even with nothing connected. It does not drop to zero just because no current flows, and it is measured in volts, not amperes, so the answer given in amperes has muddled the units of current and electromotive force."
  },
  {
    id: "cur-q-10",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    stem: "A source of e.m.f. 6 V drives 40 C of charge around a complete circuit. How much energy does it give the charge?",
    figure: null,
    options: ["240 J", "6.7 J", "0.15 J", "46 J"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-emf-rearrange", 2: "cur-emf-rearrange", 3: "cur-emf-rearrange" },
    walkthrough: [
      "The electromotive force is the energy given to each unit of charge.",
      "So the total energy is the electromotive force times the charge.",
      "That is six volts times forty coulombs.",
      "Which gives two hundred and forty joules."
    ],
    explain: "Energy equals electromotive force times charge, so six times forty is two hundred and forty joules. Dividing the two, either way round, gives the small wrong answers, and adding them gives forty six, so the key is to multiply."
  },
  {
    id: "cur-q-11",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    stem: "A source does 4.5 J of work driving 1 C of charge around a circuit. What is its e.m.f.?",
    figure: null,
    options: ["4.5 V", "4.5 J", "0.22 V", "9 V"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-charge-current-units", 2: "cur-emf-rearrange", 3: "cur-emf-rearrange" },
    walkthrough: [
      "Electromotive force is the work done divided by the charge.",
      "That is four point five joules divided by one coulomb.",
      "Which is four point five.",
      "The unit of electromotive force is the volt, so it is four point five volts."
    ],
    explain: "Electromotive force equals work done divided by charge, so four point five joules divided by one coulomb is four point five volts. Giving the answer in joules keeps the right number but the wrong unit, and dividing the other way or doubling it gives the other wrong values."
  },
  {
    id: "cur-q-12",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance",
    stem: "A resistor has a potential difference of 12 V across it and a current of 0.5 A through it. What is its resistance?",
    figure: null,
    options: ["24 ohms", "0.042 ohms", "6 ohms", "11.5 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-resistance-inverted", 2: "cur-resistance-inverted", 3: "cur-resistance-inverted" },
    walkthrough: [
      "Resistance is the potential difference divided by the current.",
      "So it is twelve volts divided by nought point five amperes.",
      "Twelve divided by nought point five is twenty four.",
      "So the resistance is twenty four ohms."
    ],
    explain: "Resistance equals voltage divided by current, so twelve divided by nought point five is twenty four ohms. Dividing current by voltage gives the tiny answer, multiplying the two gives six, and subtracting gives eleven and a half, so keep the voltage on top and the current underneath."
  },
  {
    id: "cur-q-13",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance",
    stem: "A metal wire at constant temperature obeys Ohm's law. If the p.d. across it is doubled, what happens to its resistance?",
    figure: "fig-16-12-iv-ohmic.svg",
    options: [
      "It stays the same, because resistance is constant for an ohmic conductor.",
      "It doubles, because the p.d. has doubled.",
      "It halves, because the current has increased.",
      "It becomes zero once current flows."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-resistance-changes", 2: "cur-resistance-changes", 3: "cur-resistance-changes" },
    walkthrough: [
      "For an ohmic conductor at constant temperature, the resistance does not change.",
      "When you double the voltage, the current doubles as well.",
      "So the ratio of voltage to current, which is the resistance, stays the same.",
      "That means the resistance is unchanged."
    ],
    explain: "For an ohmic conductor at constant temperature the resistance is constant, which is the whole point of Ohm's law. Doubling the voltage doubles the current too, so the ratio of voltage to current stays fixed. Resistance is a property of the conductor, not something the voltage sets."
  },
  {
    id: "cur-q-14",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance-and-temperature",
    stem: "A metal wire is heated to a higher temperature. What happens to its resistance?",
    figure: "fig-16-07-resistance-temperature.svg",
    options: ["It increases.", "It decreases.", "It stays the same.", "It falls to zero."],
    correct: 0,
    distractorMisconceptions: { 1: "cur-restemp-dir", 2: "cur-restemp-dir", 3: "cur-restemp-dir" },
    walkthrough: [
      "When a metal gets hotter, its ions vibrate more strongly.",
      "The moving electrons then collide with them more often.",
      "Each extra collision makes it harder for the electrons to pass.",
      "So the resistance of the metal increases."
    ],
    explain: "Heating a metal makes its ions vibrate more, so the electrons collide with them more often, which raises the resistance. So the resistance increases with temperature. It does not fall, stay the same, or drop to zero."
  },
  {
    id: "cur-q-15",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance-and-temperature",
    stem: "The p.d. across a metal filament is kept constant while it gets hotter. What happens to the current through it?",
    figure: "fig-16-07-resistance-temperature.svg",
    options: [
      "It falls, because the resistance rises.",
      "It rises, because the wire is hotter.",
      "It stays the same, because the p.d. is unchanged.",
      "It falls to zero."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-restemp-current", 2: "cur-restemp-current", 3: "cur-restemp-current" },
    walkthrough: [
      "Heating the metal raises its resistance.",
      "Current is the voltage divided by the resistance.",
      "With the voltage held fixed, a bigger resistance means a smaller current.",
      "So the current falls."
    ],
    explain: "Heating the wire raises its resistance, and since current is voltage divided by resistance, a larger resistance at fixed voltage gives a smaller current. So the current falls. It does not rise or stay the same, and it does not drop all the way to zero."
  },
  {
    id: "cur-q-16",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    stem: "Three resistors of 3 ohms, 5 ohms and 2 ohms are connected in series. What is their effective resistance?",
    figure: "fig-16-10-series-resistors.svg",
    options: ["10 ohms", "0.97 ohms", "3.3 ohms", "2 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-series-formula", 2: "cur-series-formula", 3: "cur-parallel-larger" },
    walkthrough: [
      "For resistors in series, you add the resistances directly.",
      "So it is three plus five plus two.",
      "That adds up to ten.",
      "So the effective resistance is ten ohms."
    ],
    explain: "In series you add the resistances straight up, so three plus five plus two is ten ohms. Adding the reciprocals instead, which is the parallel rule, gives the small wrong answers, and a series total should always be bigger than any single resistor, not smaller."
  },
  {
    id: "cur-q-17",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    stem: "Three resistors of 3 ohms, 6 ohms and 6 ohms are connected in parallel. What is their effective resistance?",
    figure: "fig-16-11-parallel-resistors.svg",
    options: ["1.5 ohms", "15 ohms", "6 ohms", "0.67 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-series-formula", 2: "cur-parallel-larger", 3: "cur-series-formula" },
    walkthrough: [
      "For resistors in parallel, add the reciprocals.",
      "One third plus one sixth plus one sixth is four sixths.",
      "So the reciprocal of the total is four sixths.",
      "Turning that over gives six over four, which is one point five ohms."
    ],
    explain: "In parallel you add the reciprocals and then turn the result over, so one third plus one sixth plus one sixth is four sixths, giving one point five ohms. Adding the resistances directly gives fifteen, which is the series rule, and a parallel total must be smaller than the smallest resistor, so six is too big and forgetting to turn the sum over leaves nought point six seven."
  },
  {
    id: "cur-q-18",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    stem: "A 2 ohm and a 6 ohm resistor are connected in series in one loop. How do the currents through them compare?",
    figure: "fig-16-10-series-resistors.svg",
    options: [
      "The current is the same through both.",
      "The 2 ohm resistor carries more current than the 6 ohm.",
      "The current splits, half through each.",
      "The 6 ohm resistor carries more current."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-series-current-shared", 2: "cur-series-current-shared", 3: "cur-series-current-shared" },
    walkthrough: [
      "A series circuit has only one path for the current.",
      "With one path, there is nowhere for the current to divide.",
      "So the same current flows through every component in the loop.",
      "Both resistors carry exactly the same current."
    ],
    explain: "In a series loop there is a single path, so the same current flows through both resistors, whatever their values. The current does not split or favour one resistor. Current only divides in parallel branches, not in a series loop."
  },
  {
    id: "cur-q-19",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    stem: "Two resistors are connected in parallel across a 12 V supply. What is the p.d. across each resistor?",
    figure: "fig-16-11-parallel-resistors.svg",
    options: [
      "12 V across each.",
      "6 V across each.",
      "The 12 V splits in proportion to the resistances.",
      "0 V, because they share the supply."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-parallel-pd-shared", 2: "cur-parallel-pd-shared", 3: "cur-parallel-pd-shared" },
    walkthrough: [
      "Parallel resistors are joined across the same two points.",
      "So each one has the full supply voltage across it.",
      "The voltage does not divide between the branches.",
      "That means every branch has the whole twelve volts."
    ],
    explain: "Parallel branches connect across the same two points, so each has the full twelve volts across it. The supply voltage does not split between the branches, which is what happens in series instead. So each resistor sees the whole twelve volts."
  },
  {
    id: "cur-q-20",
    topicKey: "t14-current-of-electricity",
    subtopic: "factors-affecting-resistance",
    stem: "Two wires are the same material and length, but wire X is thicker than wire Y. Which has the greater resistance?",
    figure: null,
    options: [
      "Wire Y, the thinner one.",
      "Wire X, the thicker one.",
      "They have equal resistance.",
      "Wire X, because more material means more resistance."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-resistivity-area", 2: "cur-resistivity-area", 3: "cur-resistivity-area" },
    walkthrough: [
      "A thicker wire has a larger cross-sectional area.",
      "A larger area gives the electrons a wider path to move through.",
      "A wider path lets the current pass more easily, so the resistance is lower.",
      "So the thinner wire, wire Y, has the greater resistance."
    ],
    explain: "Resistance falls as the cross-sectional area grows, because a wider wire gives the electrons more room to flow. So the thicker wire X has the lower resistance and the thinner wire Y has the greater resistance. More material across the path makes it easier, not harder, for the current."
  },
  {
    id: "cur-q-21",
    topicKey: "t14-current-of-electricity",
    subtopic: "factors-affecting-resistance",
    stem: "A sample has resistance 2.5 ohms, length 5 m and cross-sectional area 2.5 x 10^-7 m^2. What is the resistivity of the material?",
    figure: null,
    options: ["1.25 x 10^-7 ohm metres", "5.0 x 10^7 ohm metres", "1.0 x 10^-6 ohm metres", "6.25 x 10^-8 ohm metres"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-resistivity-rearrange", 2: "cur-resistivity-rearrange", 3: "cur-resistivity-rearrange" },
    walkthrough: [
      "Resistance equals resistivity times length divided by area.",
      "Rearranging for resistivity gives resistance times area divided by length.",
      "So it is two point five times two point five times ten to the minus seven, divided by five.",
      "That works out to one point two five times ten to the minus seven ohm metres."
    ],
    explain: "Rearranging the resistance relation gives resistivity equal to resistance times area divided by length. So two point five times the area, divided by five, gives one point two five times ten to the minus seven ohm metres. Multiplying by the length instead of the area, or dividing the wrong way, gives the other values."
  },
  {
    id: "cur-q-22",
    topicKey: "t14-current-of-electricity",
    subtopic: "factors-affecting-resistance",
    stem: "A wire has resistance 6 ohms. Its cross-sectional area is doubled while its length stays the same. What is the new resistance?",
    figure: null,
    options: ["3 ohms", "12 ohms", "6 ohms", "1.5 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-resistivity-area", 2: "cur-resistivity-area", 3: "cur-resistivity-rearrange" },
    walkthrough: [
      "Resistance is inversely proportional to the cross-sectional area.",
      "So doubling the area halves the resistance.",
      "Half of six ohms is three ohms.",
      "So the new resistance is three ohms."
    ],
    explain: "Resistance is inversely proportional to area, so doubling the area halves the resistance, giving three ohms. Thinking a bigger area raises the resistance gives twelve, thinking nothing changes gives six, and quartering it gives one point five, so the rule is that wider means less resistance."
  },
  {
    id: "cur-q-23",
    topicKey: "t14-current-of-electricity",
    subtopic: "iv-characteristics",
    stem: "Which statement about a filament lamp is correct?",
    figure: "fig-16-13-iv-filament.svg",
    options: [
      "Its resistance rises as it gets hotter, so it does not obey Ohm's law.",
      "It obeys Ohm's law, so its resistance stays constant.",
      "Its I versus V graph is a straight line through the origin.",
      "Its resistance falls as the current increases."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-iv-ohmic", 2: "cur-iv-ohmic", 3: "cur-restemp-dir" },
    walkthrough: [
      "As more current flows through a filament lamp, the filament heats up.",
      "A hotter metal filament has a higher resistance.",
      "So the ratio of voltage to current keeps growing, which means it does not obey Ohm's law.",
      "Its current against voltage graph is a curve, not a straight line."
    ],
    explain: "A filament lamp heats up as the current rises, and a hotter metal has a higher resistance, so it does not obey Ohm's law and its graph curves. It is not a straight line through the origin, and its resistance rises rather than falls as the current grows."
  },
  {
    id: "cur-q-24",
    topicKey: "t14-current-of-electricity",
    subtopic: "iv-characteristics",
    stem: "On an I versus V graph, two ohmic conductors give straight lines. Line P is steeper than line Q. Which has the greater resistance?",
    figure: "fig-16-12-iv-ohmic.svg",
    options: [
      "Q, the less steep line.",
      "P, the steeper line.",
      "They have equal resistance.",
      "P, because a steeper line means more current and more resistance."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-iv-gradient", 2: "cur-iv-gradient", 3: "cur-iv-gradient" },
    walkthrough: [
      "On a current against voltage graph, the gradient is the current divided by the voltage.",
      "That gradient is one over the resistance.",
      "So a steeper line means a smaller resistance, not a bigger one.",
      "The less steep line, Q, has the greater resistance."
    ],
    explain: "On a current against voltage graph the gradient is current over voltage, which is one over the resistance, so a steeper line means less resistance. The gentler line Q therefore has the greater resistance. Reading a steeper line as more resistance mixes this graph up with a voltage against current graph."
  },
  {
    id: "cur-q-25",
    topicKey: "t14-current-of-electricity",
    subtopic: "iv-characteristics",
    stem: "How does a semiconductor diode behave?",
    figure: "fig-16-14-iv-diode.svg",
    options: [
      "It has low resistance one way and very high resistance the other way, so current flows in one direction only.",
      "It lets current flow equally in both directions.",
      "Its I versus V graph is a straight line through the origin.",
      "It has the same low resistance in both directions."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "cur-iv-diode", 2: "cur-iv-ohmic", 3: "cur-iv-diode" },
    walkthrough: [
      "A diode lets current through easily in only one direction.",
      "In the forward direction its resistance is very low, so current flows freely.",
      "In the reverse direction its resistance is very high, so almost no current flows.",
      "So it conducts one way only, not both ways equally."
    ],
    explain: "A diode has a very low resistance in the forward direction and a very high resistance in the reverse direction, so current flows one way only. It does not conduct equally both ways, and its graph is not a straight line through the origin, because that shape belongs to an ohmic conductor."
  },
  {
    id: "cur-q-26",
    topicKey: "t14-current-of-electricity",
    subtopic: "units-and-conversion",
    stem: "A p.d. of 9 V is applied across a 0.6 kilo-ohm resistor. What is the current through it?",
    figure: null,
    options: ["0.015 A", "15 A", "66.7 A", "5400 A"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-units", 2: "cur-resistance-inverted", 3: "cur-units" },
    walkthrough: [
      "First change the resistance into ohms, because nought point six kilo-ohms is six hundred ohms.",
      "Current is the voltage divided by the resistance.",
      "So it is nine volts divided by six hundred ohms.",
      "That gives nought point zero one five amperes."
    ],
    explain: "Nought point six kilo-ohms is six hundred ohms, and current is voltage divided by resistance, so nine divided by six hundred is nought point zero one five amperes. Leaving the resistance as nought point six gives fifteen, dividing resistance by voltage gives sixty six point seven, and multiplying instead of converting gives the huge wrong value."
  },
  {
    id: "cur-q-27",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    stem: "In a single series loop, an ammeter placed before a lamp reads 0.5 A. What does an identical ammeter placed just after the lamp read?",
    figure: "fig-16-02-electron-flow-wire.svg",
    options: ["0.5 A", "0.25 A", "0 A", "0.75 A"],
    correct: 0,
    distractorMisconceptions: { 1: "cur-current-usedup", 2: "cur-current-usedup", 3: "cur-current-usedup" },
    walkthrough: [
      "In a single loop there is only one path, so the same current flows all the way round.",
      "The lamp uses up energy to light, but it does not use up the current.",
      "Charge is not destroyed as it passes through the lamp.",
      "So the ammeter after the lamp reads the same value, nought point five amperes."
    ],
    explain: "The same current flows everywhere in a single series loop, so both ammeters read nought point five amperes. What the lamp uses up is energy, not current, so the reading does not shrink to a quarter or to zero after the lamp, and it certainly does not grow."
  }
];
