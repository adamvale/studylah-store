// current-misconceptions.ts
// Topic: O-Level Physics, Current of Electricity (topicKey "t14-current-of-electricity")
// The tutor's diagnostic brain: the classic ways students go wrong in this unit,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 16 - Current of Electricity.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const CURRENT_MISCONCEPTIONS: Misconception[] = [
  {
    id: "cur-current-def",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    label: "Electric current defined as the wrong thing",
    belief: "Electric current is the number of atoms flowing, or the energy carried, or the acceleration of the charges.",
    tell: "The student picks a definition of current that talks about atoms, or energy per charge, or how fast the charges speed up, instead of the rate of flow of charge.",
    whyItHappens: "Several electrical ideas sound alike, so the phrase rate of flow of charge gets swapped for a more familiar sounding one.",
    reteach: "Let us pin it down. Electric current is the rate of flow of electric charge past a point. It is not a count of atoms, it is not the energy each charge carries, and it is not how quickly the charges speed up. It simply measures how much charge flows past a point each second. So whenever you meet the word current, think charge per second.",
    microExample: "current = charge / time, so I = Q / t. It counts charge per second, not atoms or joules.",
    figure: "fig-16-02-electron-flow-wire.svg",
    check: {
      question: "In one plain sentence, what is electric current?",
      answer: "It is the rate of flow of electric charge past a point, which is how much charge passes each second."
    }
  },
  {
    id: "cur-current-usedup",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    label: "Current gets used up in a component",
    belief: "Current is used up as it passes through a lamp, so there is less current after the lamp than before it.",
    tell: "The student says the ammeter after a bulb reads less than the one before it, because the bulb has swallowed some of the current.",
    whyItHappens: "A bulb clearly uses up something to light up, and students assume that something is the current itself rather than energy.",
    reteach: "What a bulb uses up is energy, not current. In a single loop the same current flows all the way round, so an ammeter before the bulb and one after it read exactly the same value. Charge is never destroyed on the way through. The bulb takes energy from each passing charge, which is why it glows, but the charges keep flowing on and the current stays the same everywhere in the loop.",
    microExample: "Series loop: ammeter before lamp = 0.5 A, ammeter after lamp = 0.5 A (same current, energy is what the lamp uses).",
    figure: "fig-16-02-electron-flow-wire.svg",
    check: {
      question: "In a simple series loop, how does the current after a lamp compare with the current before it?",
      answer: "It is the same. The lamp uses up energy, not current, so the current is equal all the way round the loop."
    }
  },
  {
    id: "cur-qit-rearrange",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    label: "Charge equation multiplied or divided the wrong way",
    belief: "To find charge from current and time you divide, and the three quantities can be combined in any order.",
    tell: "The student writes charge as current divided by time, or divides time by current, instead of multiplying current by time.",
    whyItHappens: "The relation between current, charge and time is memorised as a shape rather than understood, so the multiply and divide steps get switched.",
    reteach: "Start from the meaning. Current is charge divided by time, so charge is current multiplied by time, and time is charge divided by current. To get the charge, you multiply the current by the time, you do not divide. A quick check is the size of the answer. Over a long time a steady current should deliver a lot of charge, so charge growing with time tells you the multiply is the right way round.",
    microExample: "I = Q / t rearranges to Q = I t. With I = 4 and t = 180, Q = 4 x 180 = 720, not 4 / 180.",
    figure: null,
    check: {
      question: "You know the current and the time. How do you find the charge that has flowed?",
      answer: "You multiply the current by the time. Charge equals current times time, so a bigger time means more charge."
    }
  },
  {
    id: "cur-charge-current-units",
    topicKey: "t14-current-of-electricity",
    subtopic: "electric-current",
    label: "Charge and current units mixed up",
    belief: "Charge is measured in amperes and current is measured in coulombs.",
    tell: "The student labels a current answer in coulombs, or gives a charge in amperes, and treats a count of electrons as if it were already the charge.",
    whyItHappens: "Charge and current are closely linked and both appear in the same equation, so their units get swapped.",
    reteach: "Keep the pair straight. Charge is measured in coulombs, and current is measured in amperes, where one ampere is one coulomb every second. So a current answer should always end in amperes, and a charge answer should always end in coulombs. Also, a number of electrons is not yet a charge. To turn a count of electrons into a charge in coulombs, you multiply the count by the charge on one electron.",
    microExample: "current in amperes, charge in coulombs. One ampere = one coulomb per second (A = C / s).",
    figure: null,
    check: {
      question: "What is the unit of charge, and what is the unit of current?",
      answer: "Charge is measured in coulombs, and current is measured in amperes, where one ampere is one coulomb every second."
    }
  },
  {
    id: "cur-convention-dir",
    topicKey: "t14-current-of-electricity",
    subtopic: "conventional-current-and-electron-flow",
    label: "Conventional current pointed the same way as the electrons",
    belief: "Conventional current flows from the negative terminal to the positive terminal, the same way as the electrons.",
    tell: "The student draws the conventional current arrow in the same direction as the electron flow, from negative to positive.",
    whyItHappens: "Electrons are the real charge carriers, so students assume the current we draw must follow them, forgetting that convention was fixed before electrons were known.",
    reteach: "There are two directions here and they are opposite. Electron flow is the real movement of electrons, from the negative terminal round to the positive terminal. Conventional current is the agreed direction for circuit work, and it runs the other way, from the positive terminal round to the negative terminal, as if positive charge were moving. So conventional current and electron flow always point in opposite directions.",
    microExample: "Electron flow: negative terminal to positive terminal. Conventional current: positive terminal to negative terminal (opposite).",
    figure: "fig-16-03-conventional-vs-electron.svg",
    check: {
      question: "Which way does conventional current flow around the outside of a circuit, compared with the electrons?",
      answer: "Conventional current flows from the positive terminal to the negative terminal, which is the opposite direction to the electron flow."
    }
  },
  {
    id: "cur-convention-mag",
    topicKey: "t14-current-of-electricity",
    subtopic: "conventional-current-and-electron-flow",
    label: "Electron flow and conventional current thought to differ in size",
    belief: "Electron flow and conventional current are different in the amount of charge or the size of the current they produce.",
    tell: "The student says the two descriptions give different current values, or that they involve different amounts of charge.",
    whyItHappens: "Once students learn there are two pictures of current, they assume the two must disagree about more than just direction.",
    reteach: "The only real difference is direction, plus the type of charge you imagine moving. Conventional current pictures positive charge leaving the positive terminal, while electron flow is negative electrons moving the other way. They describe the very same flow, so the size of the current is exactly the same in both pictures. Direction, and the sign of the charge you picture, are all that change, never the size of the current.",
    microExample: "Same wire: conventional current = 2 A one way, electron flow = 2 A the other way. Same size, opposite direction.",
    figure: "fig-16-03-conventional-vs-electron.svg",
    check: {
      question: "Do electron flow and conventional current give different sizes of current?",
      answer: "No. They are the same size. Only the direction, and the sign of the charge you picture moving, are different."
    }
  },
  {
    id: "cur-emf-def",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force",
    label: "Electromotive force defined as a stored force",
    belief: "The e.m.f. is the energy stored inside a charge, or a force that resists charge moving round a circuit.",
    tell: "The student describes e.m.f. as energy held in the charge, or as a force opposing motion, rather than the energy the source gives to each unit charge.",
    whyItHappens: "The name has the word force in it, so students expect a push or a pull rather than an amount of energy per charge.",
    reteach: "Despite its name, electromotive force is not a force at all, it is an energy per charge. It is the energy the source gives to each unit of charge to drive it all the way around the complete circuit. It is not stored inside the charge, and it does not resist the motion, it is what keeps the charge moving. Measured in volts, it tells you how many joules the source hands to every coulomb.",
    microExample: "E = W / Q. An e.m.f. of 6 V means the source gives 6 J to every coulomb it drives round the whole circuit.",
    figure: "fig-16-04-emf-source.svg",
    check: {
      question: "What does the electromotive force of a source actually measure?",
      answer: "It measures the energy the source gives to each unit of charge to drive it all the way around the complete circuit."
    }
  },
  {
    id: "cur-emfpd-same",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    label: "Electromotive force and potential difference treated as identical",
    belief: "Electromotive force and potential difference are just two names for the same thing.",
    tell: "The student uses e.m.f. and p.d. interchangeably, and cannot say what makes them different.",
    whyItHappens: "Both are measured in volts and both are energy per charge, so the difference in where the energy is delivered is easy to miss.",
    reteach: "They share a unit but they are not the same. Electromotive force is the energy the source gives to each unit charge for the whole trip around the circuit, and it belongs to the source. Potential difference is the energy each unit charge delivers to one component as it passes through. So e.m.f. is about the source pushing charge round everything, while potential difference is about the energy dropped across a single component.",
    microExample: "e.m.f. of a cell = 6 V (energy per charge for the whole loop). p.d. across one bulb = 4 V (energy per charge in that bulb).",
    figure: "fig-16-05-pd-component.svg",
    check: {
      question: "What is the difference between electromotive force and potential difference?",
      answer: "Electromotive force is the energy per charge the source gives for the whole circuit, while potential difference is the energy per charge delivered to one component."
    }
  },
  {
    id: "cur-pd-nocurrent",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    label: "Electromotive force thought to vanish when no current flows",
    belief: "A source only has an e.m.f. when a current is being drawn from it.",
    tell: "The student says a disconnected cell has zero e.m.f. because nothing is flowing.",
    whyItHappens: "Students link the source to the current it pushes, so with no current they assume there is nothing there to measure.",
    reteach: "The electromotive force belongs to the source itself, so it is present even when no current is drawn. A cell sitting on the table with nothing connected still has its full e.m.f., ready to push charge the moment you complete a circuit. This is one way e.m.f. differs from potential difference, because the potential difference across a component is zero when no current flows through it, but the e.m.f. of the source stays put.",
    microExample: "Unconnected 1.5 V cell: current = 0, but e.m.f. = 1.5 V still (it belongs to the source).",
    figure: "fig-16-04-emf-source.svg",
    check: {
      question: "A cell of e.m.f. 1.5 volts is sitting unconnected, so no current flows. What is its e.m.f.?",
      answer: "It is still 1.5 volts. The electromotive force belongs to the source, so it is there even when no current is being drawn."
    }
  },
  {
    id: "cur-resistance-inverted",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance",
    label: "Resistance equation turned upside down",
    belief: "Resistance is the current divided by the potential difference.",
    tell: "The student computes current over voltage, or multiplies voltage by current, when finding resistance.",
    whyItHappens: "The three quantities in the resistance relation get remembered as a loose triangle, so the divide is done the wrong way up.",
    reteach: "Resistance is the potential difference divided by the current, not the other way round. Think of it as how many volts you need for each ampere of current, so more volts for the same current means more resistance. To get resistance, put the voltage on top and the current underneath. Dividing current by voltage, or multiplying the two, both give the wrong quantity.",
    microExample: "R = V / I. With V = 12 and I = 0.5, R = 12 / 0.5 = 24 ohms, not 0.5 / 12.",
    figure: null,
    check: {
      question: "How do you work out resistance from the potential difference and the current?",
      answer: "You divide the potential difference by the current. Resistance equals voltage divided by current, with the voltage on top."
    }
  },
  {
    id: "cur-resistance-changes",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance",
    label: "Resistance of an ohmic conductor thought to rise with voltage",
    belief: "Turning up the potential difference across an ohmic conductor increases its resistance.",
    tell: "The student says that when the voltage across a metal wire is doubled at constant temperature, its resistance doubles too.",
    whyItHappens: "Students see resistance in the same formula as voltage and expect it to move whenever the voltage moves.",
    reteach: "For an ohmic conductor at constant temperature, the resistance stays the same when you change the voltage. That is the whole point of Ohm's law. If you double the potential difference, the current doubles as well, so the ratio of voltage to current, which is the resistance, does not change at all. Resistance is a property of the conductor, not something the voltage sets.",
    microExample: "Ohmic wire: V = 2, I = 0.1, R = 20; double to V = 4, I = 0.2, R still 20 ohms.",
    figure: "fig-16-12-iv-ohmic.svg",
    check: {
      question: "You double the potential difference across a metal wire kept at constant temperature. What happens to its resistance?",
      answer: "It stays the same. The current doubles too, so the ratio of voltage to current, which is the resistance, does not change."
    }
  },
  {
    id: "cur-restemp-dir",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance-and-temperature",
    label: "Metal resistance thought to fall when hot",
    belief: "Heating a metal wire makes its resistance decrease.",
    tell: "The student says a hotter metal conductor has a lower resistance.",
    whyItHappens: "Heat often makes things flow more easily in daily life, so students expect a hot wire to let current through more easily.",
    reteach: "For a metal, resistance increases as the temperature rises. When the metal is hotter, its ions vibrate more strongly about their fixed positions, so the moving electrons collide with them more often. Each extra collision opposes the electrons, and all those extra collisions make it harder for current to pass. So heating a metal wire raises its resistance, it does not lower it.",
    microExample: "Metal wire heated: ions vibrate more, more collisions, so resistance goes up, not down.",
    figure: "fig-16-07-resistance-temperature.svg",
    check: {
      question: "What happens to the resistance of a metal wire when it is heated to a higher temperature?",
      answer: "It increases. The metal ions vibrate more, so the electrons collide with them more often, which raises the resistance."
    }
  },
  {
    id: "cur-restemp-current",
    topicKey: "t14-current-of-electricity",
    subtopic: "resistance-and-temperature",
    label: "Current thought to rise when a wire is heated at constant voltage",
    belief: "If the potential difference is kept the same, heating the wire makes the current increase.",
    tell: "The student keeps the voltage fixed, heats the wire, and predicts a larger current.",
    whyItHappens: "Students expect a hotter wire to carry more, forgetting that heating a metal raises its resistance, which cuts the current.",
    reteach: "Heating a metal raises its resistance, and from current equals voltage divided by resistance, a bigger resistance at the same voltage means a smaller current. So if you hold the potential difference fixed and let the wire get hotter, the current falls, not rises. The extra collisions inside the hot metal are what hold the current back.",
    microExample: "Fixed V = 6: cold wire R = 3 gives I = 2 A; hotter wire R = 6 gives I = 1 A. Current falls.",
    figure: "fig-16-07-resistance-temperature.svg",
    check: {
      question: "The potential difference across a metal wire is held constant while the wire gets hotter. What happens to the current?",
      answer: "It falls. Heating raises the resistance, and with the voltage fixed, a larger resistance means a smaller current."
    }
  },
  {
    id: "cur-series-formula",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    label: "Series and parallel resistance formulas swapped",
    belief: "Series resistors combine by adding reciprocals, and parallel resistors combine by adding directly.",
    tell: "The student adds the reciprocals for a series set, or simply sums the values for a parallel set.",
    whyItHappens: "The two combination rules are learned close together and look similar, so it is easy to attach each to the wrong arrangement.",
    reteach: "Keep the pairing the right way round. For resistors in series you add the resistances straight up, so the total is the sum. For resistors in parallel you add the reciprocals, so the reciprocal of the total is the sum of the reciprocals. A quick sense check helps. Series should give a total bigger than any one resistor, and parallel should give a total smaller than any one resistor.",
    microExample: "Series: R_E = R_1 + R_2 + R_3. Parallel: 1 / R_E = 1 / R_1 + 1 / R_2 + 1 / R_3.",
    figure: "fig-16-10-series-resistors.svg",
    check: {
      question: "How do you combine resistors in series, and how do you combine them in parallel?",
      answer: "In series you add the resistances directly. In parallel you add the reciprocals, then take the reciprocal of that sum."
    }
  },
  {
    id: "cur-parallel-larger",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    label: "Adding a parallel resistor thought to raise total resistance",
    belief: "A parallel combination has a bigger resistance than any single one of its resistors.",
    tell: "The student picks a parallel total that is larger than the largest resistor, expecting more resistors to always mean more resistance.",
    whyItHappens: "It feels natural that adding more resistors adds more resistance, which is true in series but not in parallel.",
    reteach: "In parallel it goes the other way. Adding another resistor in parallel gives the current an extra path to flow through, so the combination is easier to get through than any single resistor. That means a parallel total is always smaller than the smallest resistor in the set. More paths make it easier, not harder, so the resistance goes down.",
    microExample: "Parallel 3, 6 and 6 ohms: 1 / R_E = 1 / 3 + 1 / 6 + 1 / 6 = 4 / 6, so R_E = 1.5 ohms, smaller than every resistor.",
    figure: "fig-16-11-parallel-resistors.svg",
    check: {
      question: "Is the resistance of a parallel combination larger or smaller than the smallest resistor in it?",
      answer: "It is smaller. Each extra parallel path gives the current another route, so the combination is easier to pass through."
    }
  },
  {
    id: "cur-series-current-shared",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    label: "Current thought to split between series resistors",
    belief: "In a series circuit the current divides, so each resistor gets a different share.",
    tell: "The student says the current splits between two series resistors, giving the larger resistor less current.",
    whyItHappens: "Students picture the current being shared out among the parts, mixing up how series and parallel behave.",
    reteach: "In a series circuit there is only one path, so the same current flows through every component, one after the other. Nothing splits, because there is nowhere for the current to divide. The current is the same through a small resistor and a large one in the same series loop. It is in parallel circuits that the current divides between the branches, not in series.",
    microExample: "Series loop with 2 ohms and 6 ohms: the same current, say 1 A, flows through both.",
    figure: "fig-16-10-series-resistors.svg",
    check: {
      question: "In a series circuit with two different resistors, how does the current through each compare?",
      answer: "It is the same through both. A series circuit has one path, so the current does not split."
    }
  },
  {
    id: "cur-parallel-pd-shared",
    topicKey: "t14-current-of-electricity",
    subtopic: "series-and-parallel",
    label: "Potential difference thought to split across parallel branches",
    belief: "The supply voltage divides between resistors that are connected in parallel.",
    tell: "The student shares the supply voltage out between parallel branches instead of giving each branch the full voltage.",
    whyItHappens: "Students carry the series idea, where voltage does divide, straight over to parallel branches.",
    reteach: "Parallel branches are joined across the very same two points, so each branch has the full supply voltage across it. The potential difference does not divide between them, every branch gets the same voltage. It is in a series circuit that the voltage is shared out among the components. So across a parallel pair on a twelve volt supply, each branch has the whole twelve volts.",
    microExample: "Two resistors in parallel on a 12 V supply: each has 12 V across it (the voltage does not split).",
    figure: "fig-16-11-parallel-resistors.svg",
    check: {
      question: "Two resistors are in parallel across a twelve volt supply. What is the potential difference across each one?",
      answer: "Twelve volts across each. Parallel branches share the same two points, so every branch gets the full supply voltage."
    }
  },
  {
    id: "cur-resistivity-area",
    topicKey: "t14-current-of-electricity",
    subtopic: "factors-affecting-resistance",
    label: "Thicker wire thought to have more resistance",
    belief: "A wire with a larger cross-sectional area has a larger resistance, because there is more material.",
    tell: "The student says the thicker of two wires resists more, reasoning that more material opposes the current.",
    whyItHappens: "More material sounds like more obstruction, so students expect a fatter wire to hold the current back more.",
    reteach: "A thicker wire actually has a smaller resistance. The larger cross-sectional area gives the electrons a wider path to move through, so the current passes more easily. Resistance is inversely proportional to the area, which means doubling the area halves the resistance. Length works the other way, a longer wire has more resistance, but a wider wire has less.",
    microExample: "R = rho l / A: doubling the area A halves R, so the thicker wire has the smaller resistance.",
    figure: null,
    check: {
      question: "Two wires are the same material and length, but one is thicker. Which has the greater resistance?",
      answer: "The thinner one. A larger cross-sectional area gives a wider path for the electrons, so the thicker wire has less resistance."
    }
  },
  {
    id: "cur-resistivity-rearrange",
    topicKey: "t14-current-of-electricity",
    subtopic: "factors-affecting-resistance",
    label: "Resistivity relation rearranged incorrectly",
    belief: "In the resistance of a wire, length and area act the same way, and the resistivity formula can be rearranged any way round.",
    tell: "The student multiplies by the area instead of dividing, or treats resistance as inversely proportional to length.",
    whyItHappens: "Length and area sit in the same formula, so students forget that one is on top and the other is underneath.",
    reteach: "Look at where each quantity sits. Resistance equals resistivity times length divided by area, so length is on top and area is underneath. That means resistance grows with length but shrinks with area. To find resistivity, rearrange carefully to resistivity equals resistance times area divided by length. Keeping length on top and area on the bottom stops the mix up.",
    microExample: "R = rho l / A, so rho = R A / l. With R = 2.5, A = 2.5 x 10^-7, l = 5, rho = 1.25 x 10^-7 ohm metres.",
    figure: null,
    check: {
      question: "In the formula for the resistance of a wire, which quantity is on top, the length or the area?",
      answer: "The length is on top and the area is underneath. Resistance grows with length but falls as the area gets larger."
    }
  },
  {
    id: "cur-iv-ohmic",
    topicKey: "t14-current-of-electricity",
    subtopic: "iv-characteristics",
    label: "Filament lamp thought to obey Ohm's law",
    belief: "A filament lamp has a constant resistance and gives a straight line through the origin on an I versus V graph.",
    tell: "The student treats a filament lamp like an ohmic conductor, expecting a straight line and a fixed resistance.",
    whyItHappens: "The first characteristic graph students meet is the straight line of a metal wire, so they expect every component to match it.",
    reteach: "A filament lamp does not obey Ohm's law. As the current rises, the filament heats up, and a hotter metal has a higher resistance, so the ratio of voltage to current keeps growing. That makes the current against voltage graph a curve that bends over, rather than a straight line. Only a conductor at constant temperature, like a metal wire, gives the straight line through the origin.",
    microExample: "Filament lamp: as current rises the filament heats, resistance rises, so the I against V graph curves and flattens.",
    figure: "fig-16-13-iv-filament.svg",
    check: {
      question: "Does a filament lamp obey Ohm's law, and what shape is its current against voltage graph?",
      answer: "No, it does not. As it heats up its resistance rises, so the graph is a curve that bends over, not a straight line."
    }
  },
  {
    id: "cur-iv-gradient",
    topicKey: "t14-current-of-electricity",
    subtopic: "iv-characteristics",
    label: "Steeper line on a current against voltage graph read as more resistance",
    belief: "On a current against voltage graph, a steeper line means a larger resistance.",
    tell: "The student ranks the steeper line as the higher resistance, reading it like a voltage against current graph.",
    whyItHappens: "Students remember that gradient links to resistance but forget which graph is which, so they read the slope the wrong way.",
    reteach: "Check the axes first. On a current against voltage graph, the gradient is the current divided by the voltage, which is one over the resistance. So a steeper line means a smaller resistance, not a larger one. It is on a voltage against current graph that the gradient is the resistance itself, where steeper does mean more. So for a current against voltage graph, steeper means easier to pass, so lower resistance.",
    microExample: "I against V graph: gradient = I / V = 1 / R. Steeper line means smaller R (a better conductor).",
    figure: "fig-16-12-iv-ohmic.svg",
    check: {
      question: "On a current against voltage graph, does a steeper line mean a larger or a smaller resistance?",
      answer: "A smaller resistance. The gradient is current over voltage, which is one over the resistance, so steeper means less resistance."
    }
  },
  {
    id: "cur-iv-diode",
    topicKey: "t14-current-of-electricity",
    subtopic: "iv-characteristics",
    label: "Diode thought to conduct equally both ways",
    belief: "A semiconductor diode lets current flow equally in both directions, like an ordinary resistor.",
    tell: "The student expects the diode graph to be symmetrical, with current flowing the same in the reverse direction as the forward direction.",
    whyItHappens: "Most components students meet earlier work the same both ways, so a one way component is unexpected.",
    reteach: "A diode is different, it lets current through in only one direction. In the forward direction its resistance is very low, so current flows freely. In the reverse direction its resistance is very high, so almost no current flows. That is why its current against voltage graph is not symmetrical and does not pass straight through the origin like an ohmic conductor. A diode is a one way gate for current.",
    microExample: "Diode: forward direction has very low resistance so current flows; reverse direction has very high resistance so almost no current flows.",
    figure: "fig-16-14-iv-diode.svg",
    check: {
      question: "Does a semiconductor diode let current flow equally in both directions?",
      answer: "No. It has very low resistance one way, so current flows, and very high resistance the other way, so almost none flows."
    }
  },
  {
    id: "cur-units",
    topicKey: "t14-current-of-electricity",
    subtopic: "units-and-conversion",
    label: "Values used without converting units",
    belief: "You can put minutes or kilo-ohms straight into the equations without converting to seconds and ohms.",
    tell: "The student substitutes a time in minutes, or a resistance in kilo-ohms, without changing it to base units first.",
    whyItHappens: "The numbers sit right there in the question, so it feels natural to use them as given and skip the conversion.",
    reteach: "The equations expect base units, so time should be in seconds and resistance in ohms before you calculate. Turn minutes into seconds by multiplying by sixty, and turn kilo-ohms into ohms by multiplying by one thousand. For example, three minutes is one hundred and eighty seconds, and half a kilo-ohm is five hundred ohms. Convert first, then substitute, and the answer comes out right.",
    microExample: "4 A for 3 min: use t = 180 s, so Q = 4 x 180 = 720, not 4 x 3 = 12.",
    figure: null,
    check: {
      question: "Before using the charge equation, what should you do with a time given in minutes?",
      answer: "Change it into seconds first by multiplying by sixty. For example, three minutes becomes one hundred and eighty seconds."
    }
  },
  {
    id: "cur-emf-rearrange",
    topicKey: "t14-current-of-electricity",
    subtopic: "electromotive-force-and-pd",
    label: "Energy equation for a source rearranged the wrong way",
    belief: "To find the energy from the e.m.f. and the charge you divide, and the three quantities can be combined any way round.",
    tell: "The student divides charge by e.m.f., or e.m.f. by charge, instead of multiplying them to get the energy.",
    whyItHappens: "The relation between energy, e.m.f. and charge is remembered as a shape, so the multiply and divide steps get switched.",
    reteach: "Start from the meaning. The e.m.f. is the energy per charge, so the energy is the e.m.f. multiplied by the charge. To find the work done, you multiply, you do not divide. The e.m.f. itself is the energy divided by the charge. A quick check is that pushing more charge round should take more energy, so energy growing with charge tells you the multiply is right.",
    microExample: "E = W / Q rearranges to W = E Q. With E = 6 and Q = 40, W = 6 x 40 = 240 joules, not 40 / 6.",
    figure: null,
    check: {
      question: "You know the electromotive force and the charge moved. How do you find the energy the source gives?",
      answer: "You multiply the electromotive force by the charge. The energy equals the electromotive force times the charge."
    }
  }
];
