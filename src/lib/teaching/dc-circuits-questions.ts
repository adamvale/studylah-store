// dc-circuits-questions.ts
// Teaching question bank for O-Level Physics, D.C. Circuits (topicKey "t15-d-c-circuits").
// Every wrong option maps to the misconception it reveals (see dc-circuits-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 17 - DC Circuits.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.
import type { TeachQuestion } from "@/lib/teaching/types";

export const DC_CIRCUITS_QUESTIONS: TeachQuestion[] = [
  {
    id: "dcc-q-01",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-current",
    stem: "In a series circuit an ammeter placed before a resistor reads 2 A. What does an ammeter placed just after the same resistor read?",
    figure: "fig-17-01-series-current.svg",
    options: ["2 A", "1 A", "0.5 A", "4 A"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-series-current-used", 2: "dcc-series-current-used", 3: "dcc-series-current-used" },
    walkthrough: [
      "A series circuit has just one path for the charges to follow.",
      "The same charges pass through every part of that path in turn.",
      "Nothing removes any charge along the way, so the current does not change.",
      "So the second ammeter reads the same two amperes as the first."
    ],
    explain: "In a series circuit the current is the same at every point, because there is only one path and no charge is lost. Components use up energy, not current, so the ammeter after the resistor still reads two amperes. Any smaller reading would mean charge had gone missing, which does not happen."
  },
  {
    id: "dcc-q-02",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-voltage",
    stem: "A 12 V supply drives two resistors in series. A voltmeter across the first resistor reads 3 V. What does a voltmeter across the second resistor read?",
    figure: "fig-17-03-series-we1.svg",
    options: ["9 V", "3 V", "6 V", "12 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-series-pd-equal", 2: "dcc-series-pd-share", 3: "dcc-series-pd-equal" },
    walkthrough: [
      "In a series circuit the separate voltages add up to the supply voltage.",
      "The supply is twelve volts and the first resistor takes three volts.",
      "So the second resistor takes what is left, twelve take away three.",
      "That leaves nine volts across the second resistor."
    ],
    explain: "The voltages across series components add up to the source voltage, so with twelve volts supplied and three across the first resistor, the second must take nine volts. Three volts would mean the voltage was the same across each, which is a parallel rule, and six volts would mean an equal split, which happens only when the resistances match."
  },
  {
    id: "dcc-q-03",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-resistance",
    stem: "A 3 ohm resistor and a 9 ohm resistor are joined in series. What is their combined resistance?",
    figure: "fig-17-03-series-we1.svg",
    options: ["12 ohms", "6 ohms", "2.25 ohms", "9 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-series-res", 2: "dcc-series-res", 3: "dcc-series-res" },
    walkthrough: [
      "Resistors in series sit one after another on a single path.",
      "So the resistances simply add together.",
      "Three ohms plus nine ohms is twelve ohms.",
      "The combined value is larger than either resistor, as series always is."
    ],
    explain: "Series resistances add, so three plus nine gives twelve ohms, larger than either part. Six ohms would be their average, and two point two five ohms comes from using the reciprocal method meant for parallel, so both of those mix up the two combination rules."
  },
  {
    id: "dcc-q-04",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-voltage",
    stem: "In a series circuit a 5 ohm resistor P and a 10 ohm resistor Q carry the same current of 0.4 A. What is the p.d. across Q?",
    figure: "fig-17-02-series-pd.svg",
    options: ["4 V", "2 V", "3 V", "0.04 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-divider-bigsmall", 2: "dcc-series-pd-share", 3: "dcc-ohms-rearrange" },
    walkthrough: [
      "The voltage across a resistor is the current times its resistance.",
      "The current is nought point four amperes and Q is ten ohms.",
      "So the voltage is nought point four times ten.",
      "That gives four volts across Q."
    ],
    explain: "Voltage is current times resistance, so nought point four amperes through ten ohms gives four volts. Two volts is the value across the smaller five ohm resistor, chosen if you think a bigger resistance takes less. Three volts is an equal half of the total six volts, and nought point four over ten is the current and resistance combined the wrong way round."
  },
  {
    id: "dcc-q-05",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-voltage",
    stem: "A 12 V supply is connected across two parallel resistors, P (4 ohm) and Q (12 ohm). What is the p.d. across Q?",
    figure: "fig-17-06-parallel-we1.svg",
    options: ["12 V", "6 V", "9 V", "3 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-parallel-pd-divide", 2: "dcc-parallel-pd-divide", 3: "dcc-parallel-pd-divide" },
    walkthrough: [
      "Both resistors are joined across the same two points, the supply terminals.",
      "Parallel branches all have the same voltage across them.",
      "That voltage equals the supply voltage.",
      "So Q has the full twelve volts across it."
    ],
    explain: "Every parallel branch shares the same voltage, equal to the supply, so Q has the full twelve volts across it. Sharing the supply out, as six volts each or in proportion to the resistances, is a series idea. In parallel nothing is divided, and each branch gets the whole supply voltage."
  },
  {
    id: "dcc-q-06",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-current",
    stem: "A 6 V supply drives two parallel branches, P (6 ohm) and Q (3 ohm). What is the total current drawn from the supply?",
    figure: "fig-17-04-parallel-current.svg",
    options: ["3 A", "1 A", "2 A", "0.67 A"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-parallel-current-equal", 2: "dcc-parallel-current-equal", 3: "dcc-parallel-res-add" },
    walkthrough: [
      "Each branch has the full six volts across it.",
      "The current in P is six divided by six, which is one ampere.",
      "The current in Q is six divided by three, which is two amperes.",
      "The branch currents add, so the supply gives one plus two, which is three amperes."
    ],
    explain: "The branch currents add up to the supply current. P carries one ampere and Q carries two amperes, so the supply delivers three amperes. Picking one or two amperes treats a single branch as the whole, and nought point six seven amperes comes from adding the resistances instead of the currents."
  },
  {
    id: "dcc-q-07",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-current",
    stem: "Two branches, one of 3 ohm and one of 6 ohm, are connected in parallel across the same supply. Which branch carries the larger current?",
    figure: "fig-17-04-parallel-current.svg",
    options: ["The 3 ohm branch", "The 6 ohm branch", "They carry equal current", "The 6 ohm branch, but only just"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-parallel-current-bigR", 2: "dcc-parallel-current-equal", 3: "dcc-parallel-current-bigR" },
    walkthrough: [
      "Both branches have the same voltage across them.",
      "The current in a branch is that voltage divided by the branch resistance.",
      "A smaller resistance divides the voltage into a larger current.",
      "So the three ohm branch, with the lower resistance, carries more."
    ],
    explain: "With the same voltage across each branch, the lower resistance carries the larger current, so the three ohm branch wins. Expecting the six ohm branch to carry more treats a bigger resistance as pulling more current, and equal currents would need equal resistances."
  },
  {
    id: "dcc-q-08",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-resistance",
    stem: "A 4 ohm resistor and a 12 ohm resistor are connected in parallel. What is their combined resistance?",
    figure: "fig-17-06-parallel-we1.svg",
    options: ["3 ohms", "16 ohms", "0.33 ohms", "8 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-parallel-res-add", 2: "dcc-parallel-res-noinvert", 3: "dcc-parallel-res-bigger" },
    walkthrough: [
      "For parallel resistors, add one over each resistance.",
      "One over four plus one over twelve is three over twelve plus one over twelve.",
      "That comes to four over twelve, which is one over three.",
      "Turn it over to get the resistance, which is three ohms."
    ],
    explain: "The parallel method gives one over the combined resistance as one third, and turning that over gives three ohms, smaller than either branch. Sixteen ohms comes from adding like series, nought point three three ohms is forgetting to turn the fraction over, and eight ohms is an average, which a parallel combination never gives."
  },
  {
    id: "dcc-q-09",
    topicKey: "t15-d-c-circuits",
    subtopic: "parallel-resistance",
    stem: "Two resistors of 6 ohm and 12 ohm are connected in parallel. Their combined resistance is:",
    figure: "fig-17-08-summary.svg",
    options: ["less than 6 ohms", "between 6 ohms and 12 ohms", "18 ohms", "more than 12 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-parallel-res-bigger", 2: "dcc-parallel-res-add", 3: "dcc-parallel-res-bigger" },
    walkthrough: [
      "Adding a parallel branch gives the current an extra path.",
      "An extra path makes it easier for current to flow, lowering the resistance.",
      "So the combined resistance drops below the smallest branch.",
      "The smallest branch is six ohms, so the answer is less than six ohms."
    ],
    explain: "A parallel combination is always smaller than its smallest branch, so here it is below six ohms, in fact four ohms. A value between the two, or eighteen ohms from adding them, or anything above twelve ohms would all mean the resistance had gone up, which adding a parallel path never does."
  },
  {
    id: "dcc-q-10",
    topicKey: "t15-d-c-circuits",
    subtopic: "combined-circuits",
    stem: "In a combined circuit a 2 ohm resistor P is in series with a parallel pair, Q (6 ohm) and R (3 ohm). What is the effective resistance of the whole circuit?",
    figure: "fig-17-07-combined-we.svg",
    options: ["4 ohms", "11 ohms", "1 ohm", "2 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-combined-alladd", 2: "dcc-combined-alladd", 3: "dcc-combined-alladd" },
    walkthrough: [
      "First reduce the parallel pair, Q and R.",
      "One over six plus one over three is one over six plus two over six, which is three over six.",
      "Turn it over to get two ohms for the parallel pair.",
      "Then add the series resistor P, so two plus two is four ohms."
    ],
    explain: "You reduce the circuit in stages: the parallel pair Q and R combine to two ohms, and adding the series resistor P gives four ohms overall. Eleven ohms comes from adding all three as if in series, one ohm from treating them all as parallel, and two ohms from forgetting the series resistor P."
  },
  {
    id: "dcc-q-11",
    topicKey: "t15-d-c-circuits",
    subtopic: "combined-circuits",
    stem: "A 12 V supply drives a 4 ohm resistor P in series with a parallel section of effective resistance 2 ohm. What is the p.d. across the parallel section?",
    figure: "fig-17-07-combined-we.svg",
    options: ["4 V", "12 V", "6 V", "8 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-combined-pd", 2: "dcc-series-pd-share", 3: "dcc-divider-bigsmall" },
    walkthrough: [
      "The effective resistance is four plus two, which is six ohms.",
      "The current is twelve divided by six, which is two amperes.",
      "The parallel section has resistance two ohms, so its voltage is two times two.",
      "That gives four volts across the parallel section."
    ],
    explain: "The series resistor and the parallel section share the supply. The current is two amperes, so the parallel section takes two amperes through two ohms, which is four volts. Twelve volts would put the whole supply across it, six volts assumes an equal split, and eight volts gives the smaller resistance the larger share, all of which miss the sharing."
  },
  {
    id: "dcc-q-12",
    topicKey: "t15-d-c-circuits",
    subtopic: "combined-circuits",
    stem: "In a combined circuit, 1.5 A flows in the main line into a parallel pair Q (6 ohm) and R (3 ohm), with 3 V across the pair. What is the current in R?",
    figure: "fig-17-07-combined-we.svg",
    options: ["1 A", "1.5 A", "0.75 A", "0.5 A"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-parallel-current-equal", 2: "dcc-parallel-current-equal", 3: "dcc-parallel-current-bigR" },
    walkthrough: [
      "Each branch of the pair has three volts across it.",
      "The current in R is that voltage divided by its resistance.",
      "Three volts divided by three ohms is one ampere.",
      "So R carries one ampere, and the rest of the main current goes through Q."
    ],
    explain: "R has three volts across its three ohms, so it carries one ampere, and Q carries the other nought point five amperes. Giving R the full one point five amperes treats the branch current as the main current, splitting it equally gives nought point seven five amperes, and nought point five amperes is R getting the smaller current, which really belongs to the larger six ohm branch."
  },
  {
    id: "dcc-q-13",
    topicKey: "t15-d-c-circuits",
    subtopic: "potential-divider",
    stem: "A potential divider has R_1 = 9 ohm on top and R_2 = 3 ohm on the bottom, across a 12 V input. The output is taken across R_2. What is the output voltage?",
    figure: "fig-17-09-potential-divider.svg",
    options: ["3 V", "9 V", "6 V", "4 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-divider-upsidedown", 2: "dcc-divider-half", 3: "dcc-ohms-rearrange" },
    walkthrough: [
      "The output is the bottom resistance over the total, times the input.",
      "The bottom resistor is three ohms and the total is twelve ohms.",
      "So the fraction is three over twelve, which is one quarter.",
      "One quarter of twelve volts is three volts."
    ],
    explain: "The output across R two is its resistance over the total, times the input, so three over twelve times twelve gives three volts. Nine volts puts the wrong resistor on top, six volts assumes a fixed half, and four volts comes from dividing the input by the resistance, which misuses the relationship."
  },
  {
    id: "dcc-q-14",
    topicKey: "t15-d-c-circuits",
    subtopic: "potential-divider",
    stem: "A potential divider has a 9 ohm resistor and a 3 ohm resistor in series across a 12 V input. What is the p.d. across the 9 ohm resistor?",
    figure: "fig-17-09-potential-divider.svg",
    options: ["9 V", "3 V", "6 V", "12 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-divider-bigsmall", 2: "dcc-series-pd-share", 3: "dcc-series-pd-equal" },
    walkthrough: [
      "The two resistors carry the same current, since they are in series.",
      "So each takes a voltage in proportion to its resistance.",
      "The nine ohm resistor is nine over twelve of the total.",
      "Nine over twelve of twelve volts is nine volts."
    ],
    explain: "The larger resistance takes the larger share, so the nine ohm resistor gets nine over twelve of the input, which is nine volts. Three volts gives the big resistor the small share, six volts splits it equally, and twelve volts wrongly puts the whole supply across one resistor."
  },
  {
    id: "dcc-q-15",
    topicKey: "t15-d-c-circuits",
    subtopic: "thermistors",
    stem: "The temperature of a thermistor rises. What happens to its resistance?",
    figure: "fig-17-12-thermistor-graph.svg",
    options: ["It decreases", "It increases", "It stays the same", "It rises then falls"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-thermistor-direction", 2: "dcc-thermistor-direction", 3: "dcc-thermistor-direction" },
    walkthrough: [
      "A thermistor responds to changes in temperature.",
      "For the common type, heating it lowers its resistance.",
      "Cooling it raises the resistance again.",
      "So as the temperature rises, the resistance decreases."
    ],
    explain: "For the common thermistor, resistance falls as temperature rises, the opposite of an ordinary wire. That falling resistance is what makes it a useful temperature sensor. Expecting the resistance to rise, or to stay put, misses the behaviour that gives the thermistor its purpose."
  },
  {
    id: "dcc-q-16",
    topicKey: "t15-d-c-circuits",
    subtopic: "input-transducers",
    stem: "A thermistor is in series with a fixed 8 ohm resistor across a 4 V supply, with a voltmeter across the 8 ohm resistor. As the thermistor gets hotter, the voltmeter reading:",
    figure: "fig-17-10-thermistor-divider.svg",
    options: ["increases", "decreases", "stays the same", "drops to zero"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-transducer-output", 2: "dcc-thermistor-direction", 3: "dcc-transducer-output" },
    walkthrough: [
      "As the thermistor heats up, its resistance falls.",
      "With less resistance, the thermistor keeps a smaller share of the supply voltage.",
      "That leaves more voltage across the fixed eight ohm resistor.",
      "So the voltmeter across the fixed resistor reads higher."
    ],
    explain: "Heating drops the thermistor's resistance, so it takes a smaller share of the supply and the fixed resistor takes more, pushing the voltmeter reading up. A falling reading gets the sharing backwards, and an unchanged reading assumes the resistance does not respond to temperature at all."
  },
  {
    id: "dcc-q-17",
    topicKey: "t15-d-c-circuits",
    subtopic: "light-dependent-resistors",
    stem: "The light shining on a light dependent resistor gets brighter. What happens to its resistance?",
    figure: "fig-17-11-ldr-divider.svg",
    options: ["It decreases", "It increases", "It stays the same", "It becomes zero"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-ldr-direction", 2: "dcc-ldr-direction", 3: "dcc-ldr-direction" },
    walkthrough: [
      "A light dependent resistor responds to the light falling on it.",
      "Brighter light lowers its resistance.",
      "In the dark its resistance climbs high again.",
      "So as the light gets brighter, the resistance decreases."
    ],
    explain: "A light dependent resistor has a lower resistance in bright light and a higher resistance in the dark, so more light means less resistance. That is what lets it sense light and switch circuits between day and night. Expecting the resistance to rise with light has the behaviour the wrong way round."
  },
  {
    id: "dcc-q-18",
    topicKey: "t15-d-c-circuits",
    subtopic: "input-transducers",
    stem: "An LDR of resistance 300 ohm in daylight is in series with a fixed 2000 ohm resistor across a 20 V supply. What is the p.d. across the LDR in daylight?",
    figure: "fig-17-11-ldr-divider.svg",
    options: ["2.6 V", "17.4 V", "10 V", "0.26 V"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-transducer-output", 2: "dcc-divider-half", 3: "dcc-ohms-rearrange" },
    walkthrough: [
      "The voltage across the LDR is its resistance over the total, times the supply.",
      "That is three hundred over two thousand three hundred, times twenty.",
      "Three hundred over two thousand three hundred is about nought point one three.",
      "Times twenty volts gives about two point six volts."
    ],
    explain: "The LDR takes its resistance over the total, times the supply, so three hundred over two thousand three hundred times twenty is about two point six volts. Seventeen point four volts is the share across the fixed resistor instead, ten volts assumes a fixed half, and nought point two six volts is a slipped decimal from mishandling the numbers."
  },
  {
    id: "dcc-q-19",
    topicKey: "t15-d-c-circuits",
    subtopic: "ohms-law",
    stem: "A resistor has 6 V across it and carries a current of 2 A. What is its resistance?",
    figure: null,
    options: ["3 ohms", "0.33 ohms", "12 ohms", "8 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-ohms-rearrange", 2: "dcc-ohms-rearrange", 3: "dcc-ohms-rearrange" },
    walkthrough: [
      "Resistance is the voltage divided by the current.",
      "The voltage is six volts and the current is two amperes.",
      "Six divided by two is three.",
      "So the resistance is three ohms."
    ],
    explain: "Resistance is voltage divided by current, so six over two gives three ohms. Nought point three three ohms divides the current by the voltage the wrong way round, twelve ohms multiplies instead of dividing, and eight ohms adds them, so all three come from rearranging the relationship wrongly."
  },
  {
    id: "dcc-q-20",
    topicKey: "t15-d-c-circuits",
    subtopic: "measurement",
    stem: "A voltmeter is connected across a resistor in a circuit. What does its reading tell you?",
    figure: null,
    options: [
      "the energy given up by each unit of charge crossing the resistor",
      "the current through the resistor",
      "the resistance of the resistor",
      "the total charge that has flowed through the resistor"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-voltmeter", 2: "dcc-voltmeter", 3: "dcc-voltmeter" },
    walkthrough: [
      "A voltmeter measures potential difference across a component.",
      "Potential difference is the energy given up by each unit of charge.",
      "It is not the current, which an ammeter reads in the line.",
      "So the voltmeter tells you the energy per unit of charge across the resistor."
    ],
    explain: "A voltmeter reads potential difference, the energy each unit of charge gives up crossing the resistor. Current is what an ammeter measures in the line, resistance is worked out from voltage and current together, and total charge is a different quantity again, so none of those is what a voltmeter shows."
  },
  {
    id: "dcc-q-21",
    topicKey: "t15-d-c-circuits",
    subtopic: "faults-and-switches",
    stem: "Lamp A is in one branch, lamp B in a second branch, and lamps C and D are in series in a third branch, all in parallel across a cell. The wire in the C and D branch breaks. Which lamps go out?",
    figure: null,
    options: ["Only C and D", "All four lamps", "Only A and B", "Only A"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-fault-parallel", 2: "dcc-fault-parallel", 3: "dcc-fault-parallel" },
    walkthrough: [
      "The three branches are in parallel, so each has its own path.",
      "The break is in the branch holding C and D.",
      "That branch loses its current, so C and D go out.",
      "The other branches still have complete paths, so A and B stay lit."
    ],
    explain: "A break only stops the branch it is in, so C and D go out while A and B, on their own branches, keep working. Saying all four go out applies the series rule, where one break stops everything, to a parallel circuit, where the branches are independent."
  },
  {
    id: "dcc-q-22",
    topicKey: "t15-d-c-circuits",
    subtopic: "conservation-of-charge",
    stem: "At a junction P, a current of 5 A and a current of 4 A flow in, and a current of 6 A flows out along one wire. A fourth wire carries current Y. What is Y?",
    figure: "fig-17-13-junction.svg",
    options: ["3 A flowing out of P", "3 A flowing into P", "9 A flowing into P", "15 A flowing out of P"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-junction", 2: "dcc-junction", 3: "dcc-junction" },
    walkthrough: [
      "The current flowing into a junction equals the current flowing out.",
      "The currents in are five and four, which add to nine amperes.",
      "So far only six amperes flow out, along one wire.",
      "The fourth wire must carry the missing three amperes out, so nine in balances nine out."
    ],
    explain: "Charge is conserved, so nine amperes in must be matched by nine amperes out. Six amperes already leave, so the fourth wire carries the remaining three amperes out. Sending it into P unbalances the junction, nine amperes ignores the six already leaving, and fifteen amperes adds every current with no regard to direction."
  },
  {
    id: "dcc-q-23",
    topicKey: "t15-d-c-circuits",
    subtopic: "thermistors",
    stem: "A thermistor is in series with a fixed 8 ohm resistor across a 4 V supply. A voltmeter across the 8 ohm resistor reads 1 V. What is the resistance of the thermistor?",
    figure: "fig-17-10-thermistor-divider.svg",
    options: ["24 ohms", "2.7 ohms", "3 ohms", "0.375 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-divider-upsidedown", 2: "dcc-ohms-rearrange", 3: "dcc-ohms-rearrange" },
    walkthrough: [
      "The eight ohm resistor has one volt across it, so find the current.",
      "The current is one volt divided by eight ohms, which is nought point one two five amperes.",
      "The thermistor has the rest of the supply, four take away one, which is three volts.",
      "Its resistance is three volts divided by nought point one two five amperes, which is twenty four ohms."
    ],
    explain: "The current is one over eight, which is nought point one two five amperes, and the thermistor drops the remaining three volts, so its resistance is three over nought point one two five, or twenty four ohms. Two point seven ohms comes from using the divider fraction upside down, three ohms takes the voltage as the resistance without dividing, and nought point three seven five ohms mixes the numbers the wrong way."
  },
  {
    id: "dcc-q-24",
    topicKey: "t15-d-c-circuits",
    subtopic: "series-resistance",
    stem: "Three resistors of 2 ohm, 4 ohm and 6 ohm are joined in series. What is their effective resistance?",
    figure: "fig-17-08-summary.svg",
    options: ["12 ohms", "4 ohms", "6 ohms", "1.09 ohms"],
    correct: 0,
    distractorMisconceptions: { 1: "dcc-series-res", 2: "dcc-series-res", 3: "dcc-series-res" },
    walkthrough: [
      "Resistors in series add together along the single path.",
      "Two plus four plus six is twelve.",
      "So the effective resistance is twelve ohms.",
      "It is larger than any of the three resistors, as series always is."
    ],
    explain: "Series resistances add, so two plus four plus six gives twelve ohms, larger than any one of them. Four ohms is their average and six ohms is just the largest, while one point zero nine ohms comes from using the reciprocal method meant for parallel, so each of those applies the wrong rule."
  }
];
