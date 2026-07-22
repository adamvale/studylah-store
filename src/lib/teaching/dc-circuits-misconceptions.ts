// dc-circuits-misconceptions.ts
// Topic: O-Level Physics, D.C. Circuits (topicKey "t15-d-c-circuits").
// The tutor's diagnostic brain: the classic ways students go wrong in D.C. circuits,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 17 - DC Circuits.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.
import type { Misconception } from "@/lib/teaching/types";

export const DC_CIRCUITS_MISCONCEPTIONS: Misconception[] = [
  {
    id: "dcc-series-current-used",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-current",
    label: "Current is used up along a series circuit",
    belief: "The current gets smaller after each component in a series circuit, because the components use it up.",
    tell: "The student expects the ammeter after a lamp or resistor to read less than the one before it, as if charge were being spent on the way round.",
    whyItHappens: "It feels like energy and current are the same thing, and since components clearly use up energy, students imagine the current is being used up too.",
    reteach: "In a series circuit there is only one path, so the very same charges pass through every component one after another. Nothing removes charge along the way, so the current is exactly the same at every point, before and after each component. What the components use up is energy, not current. So an ammeter reads the same value wherever you place it in a single loop.",
    microExample: "Single loop with two lamps: the ammeter reads the same value before the first lamp, between the lamps, and after the second lamp.",
    figure: "fig-17-01-series-current.svg",
    check: {
      question: "In a series circuit an ammeter before a resistor reads two amperes. What will an ammeter placed just after the same resistor read?",
      answer: "Two amperes, exactly the same, because the current is the same at every point in a series circuit."
    }
  },
  {
    id: "dcc-series-pd-equal",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-voltage",
    label: "Same p.d. across every series component",
    belief: "In a series circuit the potential difference is the same across every component.",
    tell: "The student gives each component the same voltage reading, or copies the source voltage onto every resistor in the loop.",
    whyItHappens: "The rule that the voltage is the same across each branch belongs to parallel circuits, and it gets carried over to series circuits by mistake.",
    reteach: "In a series circuit it is the current that stays the same everywhere, not the voltage. The source voltage is shared out among the components, so their separate voltages add up to the source voltage. The same voltage across every component is a parallel rule, so first check whether the parts are in one loop or on separate branches.",
    microExample: "12 V supply, two series resistors reading 3 V and 9 V: 3 + 9 = 12, the voltages add, they are not both 12 V.",
    figure: "fig-17-02-series-pd.svg",
    check: {
      question: "In a series circuit with a twelve volt supply, one resistor has three volts across it. Can a second resistor in the same loop also have twelve volts across it?",
      answer: "No. The separate voltages must add up to twelve volts, so if one is three volts the other is nine volts."
    }
  },
  {
    id: "dcc-series-pd-share",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-voltage",
    label: "Series voltage always splits equally",
    belief: "Each component in a series circuit takes an equal share of the source voltage, whatever its resistance.",
    tell: "The student divides the source voltage by the number of components and gives every one the same share, even when the resistances differ.",
    whyItHappens: "Worked examples often use identical resistors that really do share equally, so students turn a special case into a general rule.",
    reteach: "The voltages in a series circuit add up to the source voltage, but they only split equally when the resistances are equal. Since the current is the same through each component, a bigger resistance takes a bigger voltage, following voltage equals current times resistance. So work the share out from the resistances, and only expect an equal split when the resistors are the same.",
    microExample: "5 ohm and 10 ohm in series, same current: the 10 ohm takes twice the voltage of the 5 ohm, not an equal half each.",
    figure: "fig-17-02-series-pd.svg",
    check: {
      question: "Two resistors in series have different resistances. Do they always share the source voltage equally?",
      answer: "No. They share equally only when their resistances are equal. Otherwise the larger resistance takes the larger share."
    }
  },
  {
    id: "dcc-series-res",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-resistance",
    label: "Series resistance found without adding",
    belief: "The combined resistance of resistors in series is found by averaging them or by the parallel method, not by adding.",
    tell: "The student averages the series resistors, picks the largest one, or uses the reciprocal method meant for parallel.",
    whyItHappens: "The two combination rules look similar and get swapped, and averaging feels like a safe middle answer.",
    reteach: "Resistors in series sit one after another on a single path, so the path just gets longer and the resistances simply add together. The combined value is always larger than any one of them. Averaging or using the reciprocal method belongs to parallel circuits, so keep adding for series and save the reciprocal for parallel.",
    microExample: "3 ohm and 9 ohm in series: R_eff = 3 + 9 = 12 ohms, larger than either, not the average of 6 ohms.",
    figure: "fig-17-08-summary.svg",
    check: {
      question: "You have a three ohm and a nine ohm resistor in series. What is their combined resistance?",
      answer: "Twelve ohms, because series resistances add. It is larger than either resistor, not their average."
    }
  },
  {
    id: "dcc-parallel-current-equal",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-current",
    label: "Same current in every parallel branch",
    belief: "The current is the same in every branch of a parallel circuit, just as it is in a series circuit.",
    tell: "The student gives each branch the full source current, or splits it equally even when the branch resistances differ.",
    whyItHappens: "The series rule that the current is the same everywhere gets applied to parallel branches, where it does not hold.",
    reteach: "At a junction the current from the source splits between the branches, so the branch currents add up to the source current. They are only equal when the branches have equal resistance. Otherwise each branch takes its own share, worked out from the voltage across it and its resistance. So the source current is shared, not copied, onto every branch.",
    microExample: "Source current 3 A into two branches carrying 1 A and 2 A: 1 + 2 = 3, they add, they are not each 3 A.",
    figure: "fig-17-04-parallel-current.svg",
    check: {
      question: "A source delivers three amperes into two parallel branches of different resistance. Does each branch carry three amperes?",
      answer: "No. The branch currents add up to three amperes, so each branch carries only part of it."
    }
  },
  {
    id: "dcc-parallel-current-bigR",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-current",
    label: "Bigger resistance takes more current",
    belief: "In parallel, the branch with the larger resistance carries the larger current.",
    tell: "The student sends more current down the higher resistance branch, as if a bigger resistance pulls more current.",
    whyItHappens: "Bigger sounds like more, so a larger resistance is imagined to take a larger share of the current.",
    reteach: "Every parallel branch has the same voltage across it, so the current in a branch is that voltage divided by the branch resistance. A larger resistance divides the same voltage into a smaller current, so the branch of lower resistance actually carries more current. Think of it as the easier path taking the bigger flow.",
    microExample: "Same 6 V across a 3 ohm and a 6 ohm branch: 6/3 = 2 A in the 3 ohm, 6/6 = 1 A in the 6 ohm, so the smaller resistance carries more.",
    figure: "fig-17-04-parallel-current.svg",
    check: {
      question: "Two parallel branches share the same voltage. One is three ohms, the other is six ohms. Which carries the larger current?",
      answer: "The three ohm branch, because the lower resistance lets more current through for the same voltage."
    }
  },
  {
    id: "dcc-parallel-pd-divide",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-voltage",
    label: "Source voltage divides across parallel branches",
    belief: "The source voltage is shared out among the parallel branches, so each branch gets only a part of it.",
    tell: "The student splits the supply voltage between the branches, or shares it in proportion to their resistances.",
    whyItHappens: "The series rule that voltages divide and add gets carried over to parallel branches, where every branch instead has the full voltage.",
    reteach: "Each parallel branch is joined across the same two points, so every branch has the same voltage across it, and that voltage equals the source voltage. Nothing is shared out here. It is a series circuit where the voltages divide and add. So for parallel, put the full supply voltage across each branch.",
    microExample: "12 V supply with two parallel branches: each branch has the full 12 V across it, not 6 V each.",
    figure: "fig-17-05-parallel-pd.svg",
    check: {
      question: "A twelve volt supply drives two parallel branches. What is the voltage across each branch?",
      answer: "Twelve volts across each, because parallel branches all share the same voltage, equal to the supply."
    }
  },
  {
    id: "dcc-parallel-res-add",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-resistance",
    label: "Parallel resistances added like series",
    belief: "The combined resistance of parallel resistors is found by adding them, the same way as series.",
    tell: "The student writes the parallel combined resistance as the simple sum of the branch resistances.",
    whyItHappens: "Adding is the first combination rule learned, so it gets used for parallel too, before the reciprocal method is firm.",
    reteach: "Adding a parallel branch gives the current an extra path, which makes it easier for current to flow, so the combined resistance goes down, not up. That is why parallel uses the reciprocal method, where you add one over each resistance and then turn the answer over. Simple adding is only for series, where the path gets longer.",
    microExample: "4 ohm and 12 ohm in parallel: 1/R = 1/4 + 1/12 = 4/12, so R = 3 ohms, not 4 + 12 = 16 ohms.",
    figure: "fig-17-08-summary.svg",
    check: {
      question: "Two resistors of four ohms and twelve ohms are joined in parallel. Is their combined resistance sixteen ohms?",
      answer: "No. Adding is for series. In parallel the combined resistance is three ohms, smaller than either branch."
    }
  },
  {
    id: "dcc-parallel-res-noinvert",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-resistance",
    label: "Forgetting to invert in the parallel formula",
    belief: "The combined resistance equals one over the first resistance plus one over the second, with no final step.",
    tell: "The student adds the reciprocals correctly but stops there, reporting that sum as the resistance instead of turning it over.",
    whyItHappens: "The reciprocal formula has an extra step at the end that is easy to drop once the addition is done.",
    reteach: "The parallel formula gives you one over the combined resistance, not the combined resistance itself. So after you add one over each resistance, you must turn that answer over to get the resistance. Miss that last flip and your value comes out far too small. Add the reciprocals, then invert, every time.",
    microExample: "4 ohm and 12 ohm: 1/R = 1/3, so R = 3 ohms after inverting, not 1/3 of an ohm.",
    figure: "fig-17-06-parallel-we1.svg",
    check: {
      question: "You work out that one over the combined resistance is one third. What is the combined resistance?",
      answer: "Three ohms, because you must turn the one third over. The one third was one over the resistance, not the resistance itself."
    }
  },
  {
    id: "dcc-parallel-res-bigger",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-resistance",
    label: "Parallel resistance sits between the branches",
    belief: "The combined resistance of parallel resistors lies between the branch values, like an average.",
    tell: "The student gives a parallel combined resistance somewhere between the two branch resistances rather than below the smaller one.",
    whyItHappens: "An average feels like a sensible middle value, so students expect the combined resistance to land between the parts.",
    reteach: "A parallel combination always has a combined resistance smaller than its smallest branch, because every extra branch gives current one more way through. So the answer is below the smallest resistor, never between them and never above. If your parallel answer comes out between the two values, that is a sign to check the working.",
    microExample: "6 ohm and 12 ohm in parallel: R = 4 ohms, below the smaller 6 ohm, not between 6 and 12.",
    figure: "fig-17-08-summary.svg",
    check: {
      question: "Two resistors of six ohms and twelve ohms are in parallel. Is their combined resistance between six and twelve ohms?",
      answer: "No. A parallel combination is always smaller than the smallest branch, so it is below six ohms."
    }
  },
  {
    id: "dcc-combined-alladd",
    topicKey: "t15-d-c-circuits",
    subtopic: "combined-circuits",
    label: "Combined circuit treated as all one kind",
    belief: "In a mixed circuit you can add every resistor together, or lump them all as one parallel group, without sorting the structure.",
    tell: "The student adds every resistor in a combined circuit as if all in series, or treats them all as parallel, skipping the stage by stage reduction.",
    whyItHappens: "A mixed circuit looks busy, so students reach for a single rule instead of separating the series and parallel parts.",
    reteach: "A combined circuit has to be reduced in stages. First replace each parallel group with its single combined resistance, then add that along the series parts. Treating the whole thing as all series or all parallel ignores how the components are actually joined. So find the parallel groups first, simplify them, and only then add up the series line.",
    microExample: "2 ohm in series with a parallel pair of 6 ohm and 3 ohm: parallel gives 2 ohms, then 2 + 2 = 4 ohms, not 2 + 6 + 3 = 11 ohms.",
    figure: "fig-17-07-combined-we.svg",
    check: {
      question: "A two ohm resistor is in series with a parallel pair that combines to two ohms. What is the overall resistance?",
      answer: "Four ohms. You reduce the parallel pair first, then add it to the series resistor, rather than adding everything at once."
    }
  },
  {
    id: "dcc-combined-pd",
    topicKey: "t15-d-c-circuits",
    subtopic: "combined-circuits",
    label: "Parallel section gets the whole supply",
    belief: "In a combined circuit the parallel section has the full supply voltage across it, ignoring the series resistor.",
    tell: "The student puts the entire supply voltage across the parallel group and forgets the voltage used up by the series resistor.",
    whyItHappens: "Students remember that parallel branches get the full voltage, but overlook that in a combined circuit a series resistor takes its own share first.",
    reteach: "When a series resistor sits in front of a parallel section, the supply voltage is shared between them. The series resistor takes its share, and only the rest is left across the parallel section. So first find the voltage across the series resistor, then take it away from the supply to get the voltage across the parallel group. The parallel branches share that leftover voltage, not the whole supply.",
    microExample: "12 V supply, series resistor drops 8 V, so the parallel section has 12 - 8 = 4 V across it, not the full 12 V.",
    figure: "fig-17-07-combined-we.svg",
    check: {
      question: "A supply gives twelve volts. A series resistor in front of a parallel section uses eight volts. What voltage is left across the parallel section?",
      answer: "Four volts, because the series resistor takes its share first and only the rest reaches the parallel section."
    }
  },
  {
    id: "dcc-divider-upsidedown",
    topicKey: "t15-d-c-circuits",
    subtopic: "potential-divider",
    label: "Potential divider fraction upside down",
    belief: "The output of a potential divider uses the other resistor on top of the fraction.",
    tell: "The student puts the resistance the output is not taken across into the top of the divider fraction.",
    whyItHappens: "The divider formula has two resistors and it is easy to lose track of which one belongs on top.",
    reteach: "In a potential divider the output voltage is the resistance you take the output across, divided by the total resistance, all times the input voltage. So the resistor you are measuring across goes on top. Put the other resistor on top and you get the share belonging to the wrong resistor. Always match the top of the fraction to the resistor your output is measured across.",
    microExample: "Output across R_2: V_out = R_2 / (R_1 + R_2) x V_in, so with R_1 = 9 ohm, R_2 = 3 ohm, 12 V input gives 3/12 x 12 = 3 V, not 9/12 x 12 = 9 V.",
    figure: "fig-17-09-potential-divider.svg",
    check: {
      question: "A divider has nine ohms on top and three ohms on the bottom, with the output taken across the bottom resistor. Which resistance goes on top of the fraction?",
      answer: "The three ohm bottom resistor, because the output is taken across it. The top of the fraction matches the resistor you measure across."
    }
  },
  {
    id: "dcc-divider-half",
    topicKey: "t15-d-c-circuits",
    subtopic: "potential-divider",
    label: "Divider output is always half",
    belief: "A potential divider always gives out half the input voltage.",
    tell: "The student halves the input voltage no matter what the two resistances are.",
    whyItHappens: "A divider with two equal resistors does give half, and that neat case gets remembered as the general rule.",
    reteach: "A potential divider only gives half the input when the two resistances are equal. When they differ, the output follows the resistances: the resistor you measure across takes its share of the input in proportion to its resistance. So work the fraction out from the actual resistances rather than assuming a half every time.",
    microExample: "Input 20 V, output across a 300 ohm with a 2000 ohm partner: 300/2300 x 20 = 2.6 V, nowhere near half of 20 V.",
    figure: "fig-17-09-potential-divider.svg",
    check: {
      question: "Does a potential divider always give out half the input voltage?",
      answer: "No. It gives half only when the two resistances are equal. Otherwise the output depends on the resistances."
    }
  },
  {
    id: "dcc-divider-bigsmall",
    topicKey: "t15-d-c-circuits",
    subtopic: "potential-divider",
    label: "Bigger resistance takes the smaller voltage",
    belief: "The larger resistor in a series pair takes the smaller share of the voltage.",
    tell: "The student gives the bigger resistance the smaller voltage, as if a large resistance blocks the voltage from building across it.",
    whyItHappens: "Students picture a large resistance holding current back and wrongly extend that to holding the voltage down as well.",
    reteach: "Because the current is the same through both resistors in series, the voltage across each follows its resistance, from voltage equals current times resistance. So the larger resistance takes the larger voltage, not the smaller. A big resistance means a big voltage share, not a small one.",
    microExample: "Same current through 9 ohm and 3 ohm: the 9 ohm takes three times the voltage of the 3 ohm, so the bigger resistor gets the bigger share.",
    figure: "fig-17-09-potential-divider.svg",
    check: {
      question: "Two resistors in series carry the same current. Which takes the larger voltage, the bigger resistance or the smaller?",
      answer: "The bigger resistance, because voltage is current times resistance and the current is the same through both."
    }
  },
  {
    id: "dcc-thermistor-direction",
    topicKey: "t15-d-c-circuits",
    subtopic: "thermistors",
    label: "Thermistor resistance rises with heat",
    belief: "The resistance of a thermistor increases as it gets hotter.",
    tell: "The student says a warmer thermistor has a higher resistance, the wrong way round for the common type.",
    whyItHappens: "Most conductors do gain resistance when heated, so students expect a thermistor to behave the same way.",
    reteach: "For the common thermistor the resistance falls as the temperature rises, and climbs again as it cools. That is the opposite of an ordinary wire, and it is exactly what makes a thermistor useful as a temperature sensor. So hotter means lower resistance for a thermistor, and cooler means higher.",
    microExample: "Thermistor warmed up: its resistance drops, for example from a high value in the cold to a much lower value when hot.",
    figure: "fig-17-12-thermistor-graph.svg",
    check: {
      question: "A thermistor is heated. What happens to its resistance?",
      answer: "It decreases. For the common thermistor, a rise in temperature brings its resistance down."
    }
  },
  {
    id: "dcc-ldr-direction",
    topicKey: "t15-d-c-circuits",
    subtopic: "light-dependent-resistors",
    label: "LDR resistance rises with light",
    belief: "The resistance of a light dependent resistor increases as the light gets brighter.",
    tell: "The student says more light gives a higher resistance, the wrong way round.",
    whyItHappens: "Without the rule in mind, students guess, and brighter light feeling like more can suggest more resistance.",
    reteach: "A light dependent resistor has a resistance that falls as the light on it gets brighter, and rises in the dark. That is what lets it sense light, switching circuits as day turns to night. So bright light means low resistance, and darkness means high resistance.",
    microExample: "LDR in daylight has a low resistance, for example a few hundred ohms, but in the dark it climbs to thousands of ohms.",
    figure: "fig-17-11-ldr-divider.svg",
    check: {
      question: "The light falling on a light dependent resistor gets brighter. What happens to its resistance?",
      answer: "It decreases. Brighter light lowers the resistance of a light dependent resistor, while darkness raises it."
    }
  },
  {
    id: "dcc-transducer-output",
    topicKey: "t15-d-c-circuits",
    subtopic: "input-transducers",
    label: "Sensor output voltage goes the wrong way",
    belief: "When a sensor's resistance falls, the voltage across the other resistor in the divider also falls.",
    tell: "The student moves the output voltage the same way as the sensor's resistance, instead of the opposite way.",
    whyItHappens: "It is hard to track two things at once, so students let the output follow the sensor's resistance rather than working through the sharing.",
    reteach: "In a sensor divider the sensor and a fixed resistor share the supply voltage. When the sensor's resistance falls, it takes a smaller share, so more voltage is left for the fixed resistor, and the output across that fixed resistor rises. So the output across the partner resistor moves opposite to the sensor's resistance. Work through which one takes more and which takes less each time.",
    microExample: "Thermistor heated so its resistance drops: it keeps less of the supply voltage, so the fixed resistor's share, the output, rises.",
    figure: "fig-17-10-thermistor-divider.svg",
    check: {
      question: "In a divider, a sensor's resistance falls while a fixed resistor stays the same. What happens to the voltage across the fixed resistor?",
      answer: "It rises. The sensor takes a smaller share, so more of the supply voltage is left across the fixed resistor."
    }
  },
  {
    id: "dcc-ohms-rearrange",
    topicKey: "t15-d-c-circuits",
    subtopic: "ohms-law",
    label: "Ohm's law rearranged wrongly",
    belief: "You can combine voltage, current and resistance in any order, such as resistance equals current divided by voltage.",
    tell: "The student multiplies when they should divide, or flips a division, ending with resistance as current over voltage or as voltage times current.",
    whyItHappens: "The three quantities appear in one relationship and, without care, students recombine them in the wrong arrangement.",
    reteach: "Start from voltage equals current times resistance. To find the resistance, divide the voltage by the current. To find the current, divide the voltage by the resistance. Keep the voltage on top when you rearrange, since it is the product. Mixing the order gives answers that are far too big or far too small, so anchor everything to voltage equals current times resistance.",
    microExample: "6 V across a resistor carrying 2 A: R = 6 / 2 = 3 ohms, not 2 / 6 or 6 x 2.",
    figure: null,
    check: {
      question: "A resistor has six volts across it and carries two amperes. What is its resistance?",
      answer: "Three ohms, found by dividing the voltage by the current. Dividing the current by the voltage would be the wrong way round."
    }
  },
  {
    id: "dcc-voltmeter",
    topicKey: "t15-d-c-circuits",
    subtopic: "measurement",
    label: "Confusing what a voltmeter reads",
    belief: "A voltmeter across a resistor tells you the current, the resistance, or the charge.",
    tell: "The student reads a voltmeter as if it gave a current or a resistance rather than a voltage.",
    whyItHappens: "Several meters look alike, and the different quantities they measure are easy to mix up early on.",
    reteach: "A voltmeter measures potential difference, the energy given up by each unit of charge as it passes across the resistor. It does not read current, resistance, or total charge. Current is what an ammeter reads, in the line rather than across a component. So a voltmeter connected across a resistor is telling you volts, the energy per unit charge.",
    microExample: "Voltmeter across a resistor reading 6 V: that is six joules given up per unit of charge passing through, not a current or a resistance.",
    figure: null,
    check: {
      question: "A voltmeter is connected across a resistor. What does its reading tell you?",
      answer: "The potential difference, which is the energy given up by each unit of charge crossing the resistor. It is not the current or the resistance."
    }
  },
  {
    id: "dcc-fault-parallel",
    topicKey: "t15-d-c-circuits",
    subtopic: "faults-and-switches",
    label: "A fault in one branch stops a parallel circuit",
    belief: "A break in one branch of a parallel circuit stops the current in all the other branches too.",
    tell: "The student says every component goes off when a single parallel branch is broken.",
    whyItHappens: "In a series circuit one break does stop everything, and that memory gets applied to parallel circuits as well.",
    reteach: "A parallel circuit gives the current more than one path, so a break in one branch only stops that branch. The other branches still have a complete path and keep working. That is why house lamps are wired in parallel, so switching off or losing one does not take out the rest. Only a break in the shared main line would stop them all.",
    microExample: "Three parallel branches, one broken: the two unbroken branches still carry current and their lamps stay on.",
    figure: "fig-17-08-summary.svg",
    check: {
      question: "One branch of a parallel circuit is broken. What happens to the components on the other branches?",
      answer: "They keep working, because each branch has its own complete path. Only the broken branch loses its current."
    }
  },
  {
    id: "dcc-junction",
    topicKey: "t15-d-c-circuits",
    subtopic: "conservation-of-charge",
    label: "Currents at a junction need not balance",
    belief: "The currents at a junction do not have to add up, so you can just total all the wires.",
    tell: "The student adds every current at a junction regardless of direction, or ignores which currents flow in and which flow out.",
    whyItHappens: "The idea that charge is conserved at a junction is easy to overlook, so students treat the currents as loose numbers to add.",
    reteach: "Charge is conserved at a junction, so the total current flowing in equals the total current flowing out. To find a missing current, add up what goes in, add up what goes out, and make the two balance. Direction matters, so keep the currents entering separate from those leaving rather than adding them all together.",
    microExample: "Into a junction: 5 A and 4 A, so 9 A in total. Out: 6 A along one wire, so the last wire carries 9 - 6 = 3 A out.",
    figure: "fig-17-13-junction.svg",
    check: {
      question: "Five amperes and four amperes flow into a junction, and six amperes flow out along one wire. What must the only other wire carry?",
      answer: "Three amperes flowing out, because the current in must equal the current out, so nine in means nine out."
    }
  }
];
