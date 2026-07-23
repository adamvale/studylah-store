import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, topical quiz. Whole-topic check across KB Chapter 18:
// electrical power, the cost of electricity and the kilowatt-hour, safety devices
// (fuses, circuit breakers, earthing, double insulation), wiring a mains plug, and
// the dangers of electricity. Question-only; a real figure only on choice/open.

export const BOXES: Subconcept[] = [
  {
    id: "t16.quiz",
    code: "Quiz",
    title: "Practical electricity topical quiz",
    blurb: "Whole-topic check: power, cost and kWh, safety devices, plug wiring, dangers",
    kind: "quiz",
    steps: [
      // ---------- CHOICE 1 (Power, calc) ----------
      {
        kind: "choice",
        question: "A heater runs at 12 V and draws a current of 3.0 A. Find its power P.",
        options: ["36 W", "4 W", "15 W", "72 W"],
        correct: 0,
        ask: "Power is voltage times current, so work out 12 times 3.0. Which option matches?",
        hints: [
          "Use P equals V times I.",
          "12 times 3.0 is 36, and power is measured in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = VI" },
          { label: "Substitute", latex: "P = 12 \\times 3.0" },
          { label: "Answer", latex: "P = 36\\ \\text{W}" },
        ],
        explain: "The power is 36 watts, because 12 volts times 3.0 amperes is 36 watts.",
      },
      // ---------- CHOICE 2 (Power, calc) ----------
      {
        kind: "choice",
        question: "A lamp is rated 240 V, 60 W. Find the current I it draws.",
        options: ["4 A", "0.25 A", "15 A", "0.3 A"],
        correct: 1,
        ask: "Rearrange P equals V times I into I equals P divided by V, then work out 60 divided by 240.",
        hints: [
          "Current is power divided by voltage, I equals P divided by V.",
          "60 divided by 240 is 0.25, in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{P}{V}" },
          { label: "Substitute", latex: "I = \\dfrac{60}{240}" },
          { label: "Answer", latex: "I = 0.25\\ \\text{A}" },
        ],
        explain: "The current is 0.25 amperes, because 60 watts divided by 240 volts is 0.25 amperes.",
      },
      // ---------- CHOICE 3 (Power, conceptual) ----------
      {
        kind: "choice",
        question: "What does the heating element of an appliance such as a kettle need?",
        options: [
          "A low resistance so that little heat is produced",
          "A large diameter and a low melting point",
          "No resistance at all",
          "A high resistance and a high melting point",
        ],
        correct: 3,
        ask: "The element must get very hot without melting. Think about what resistance produces the heat and what stops the wire failing.",
        hints: [
          "A high resistance turns more electrical energy into heat in the element.",
          "A high melting point, as in nichrome, stops the hot wire from melting away.",
        ],
        explain: "A heating element needs a high resistance so that a lot of heat is produced, and a high melting point so the wire survives the high temperature. Nichrome is used for this reason.",
      },
      // ---------- CHOICE 4 (Cost, calc) ----------
      {
        kind: "choice",
        question: "A 2 kW heater runs for 4 h. Electricity costs 0.25 dollars per kWh. Find the cost.",
        options: ["8.00 dollars", "0.50 dollars", "2.00 dollars", "4.00 dollars"],
        correct: 2,
        ask: "First find the energy in kilowatt-hours, 2 times 4, then multiply by the price of 0.25 dollars.",
        hints: [
          "Energy in kilowatt-hours is power in kilowatts times time in hours, so 2 times 4 is 8 kilowatt-hours.",
          "Cost is 8 times 0.25, which is 2.00 dollars.",
        ],
        working: [
          { label: "Formula", latex: "\\text{cost} = P \\times t \\times \\text{price}" },
          { label: "Substitute", latex: "\\text{cost} = 2 \\times 4 \\times 0.25" },
          { label: "Answer", latex: "\\text{cost} = 2.00\\ \\text{dollars}" },
        ],
        explain: "The heater uses 2 times 4, which is 8 kilowatt-hours, and 8 times 0.25 dollars is 2.00 dollars.",
      },
      // ---------- CHOICE 5 (Cost, conceptual) ----------
      {
        kind: "choice",
        question: "Why do electricity suppliers measure household energy in kilowatt-hours instead of joules?",
        options: [
          "Because the kWh is a unit of power, not of energy",
          "Because joules cannot measure electrical energy",
          "Because the kWh is used only by scientists",
          "Because a joule is so small that the numbers would become huge and awkward",
        ],
        correct: 3,
        ask: "Think about how big a joule is compared with the energy a whole home uses in a month.",
        hints: [
          "A home transfers many millions of joules, so a joule count would be an enormous number.",
          "The kilowatt-hour is a much larger unit, giving small, tidy numbers on a bill.",
        ],
        explain: "A joule is a very small unit, so measuring a home's energy in joules gives huge, awkward numbers. The kilowatt-hour is a far larger unit, so bills use small, convenient values.",
      },
      // ---------- CHOICE 6 (Safety, conceptual) ----------
      {
        kind: "choice",
        question: "How does a fuse protect an electrical circuit?",
        options: [
          "It stores charge for later use",
          "It melts and breaks the circuit when the current gets too high",
          "It increases the current to the appliance",
          "It cools the wires down",
        ],
        correct: 1,
        ask: "A fuse is a thin wire. Think about what a thin wire does when too much current passes through it.",
        hints: [
          "Too large a current heats the thin fuse wire strongly.",
          "The fuse wire melts, which breaks the circuit and stops the current before the cables overheat.",
        ],
        explain: "A fuse is a thin wire that melts when the current rises above its rating. Melting breaks the circuit and stops the current before the cables can overheat.",
      },
      // ---------- CHOICE 7 (Plug wiring, conceptual, figure) ----------
      {
        kind: "choice",
        question: "In a mains plug, which wire should the fuse be fitted in?",
        figure: "fig-18-04-three-pin-plug",
        options: [
          "The neutral wire",
          "The earth wire",
          "The live wire",
          "Any of the 3 wires",
        ],
        correct: 2,
        ask: "The fuse should cut the appliance off from the dangerous high voltage. Which wire carries that high voltage?",
        hints: [
          "The live wire is the one at the high mains voltage.",
          "Putting the fuse in the live wire disconnects the appliance from the high voltage when it blows.",
        ],
        explain: "The fuse goes in the live wire. If it is in the live wire, blowing it disconnects the appliance from the high voltage. In the neutral wire it would leave the appliance still connected to the live side.",
      },
      // ---------- CHOICE 8 (Plug wiring, conceptual, figure) ----------
      {
        kind: "choice",
        question: "What is the job of the earth wire in an appliance with a metal casing?",
        figure: "fig-18-03-earthing-comparison",
        options: [
          "It carries fault current safely to the ground if the casing becomes live",
          "It carries the normal working current to the appliance",
          "It supplies the high voltage to the appliance",
          "It stores the current until it is needed",
        ],
        correct: 0,
        ask: "The earth wire carries no current in normal use. Think about what it does only when a fault makes the metal casing live.",
        hints: [
          "The earth wire is a low-resistance path connected to the metal casing.",
          "If the live wire touches the casing, the current flows to the ground through the earth wire instead of through a person.",
        ],
        explain: "The earth wire connects the metal casing to the ground through a low-resistance path. If a fault makes the casing live, the current is diverted safely to earth instead of passing through a person who touches it.",
      },
      // ---------- CHOICE 9 (Dangers, conceptual) ----------
      {
        kind: "choice",
        question: "Why is it dangerous to touch electrical switches with wet hands?",
        options: [
          "Water cools the wires and cracks them",
          "Water adds extra voltage to the mains",
          "Water with dissolved salts conducts through its ions, making a shock more likely",
          "Dry air conducts electricity better than damp air",
        ],
        correct: 2,
        ask: "Pure water is a poor conductor, but the water on skin is not pure. Think about what dissolved salts add to it.",
        hints: [
          "Everyday water contains dissolved salts, which split into charged ions.",
          "Those ions let the water conduct, so a current can pass through wet hands and give a shock.",
        ],
        explain: "Water on the hands is not pure; it contains dissolved salts that form ions. These ions let the water conduct electricity, so wet hands make an electric shock far more likely.",
      },
      // ---------- CHOICE 10 (Dangers, conceptual, figure) ----------
      {
        kind: "choice",
        question: "What must happen for a person to receive an electric shock?",
        figure: "fig-18-09-fuse-placement",
        options: [
          "Touching only the neutral wire with dry hands",
          "Becoming part of a complete circuit between a live conductor and the ground",
          "Standing near an appliance without touching it",
          "Using an appliance that has an earth wire",
        ],
        correct: 1,
        ask: "A current needs a complete path to flow. Think about the person as one part of that path.",
        hints: [
          "For a current to pass through a person there must be a complete circuit.",
          "A shock occurs when the body links a live conductor to the ground, so current flows through it.",
        ],
        explain: "A shock happens when a person becomes part of a complete circuit between a live conductor and the ground. The current then flows through the body on its way to earth.",
      },
      // ---------- INTERACTIVE 1: slider (Power, calc) ----------
      {
        kind: "slider",
        prompt: "A generator drives a current of 30 A through cables of total resistance 5.0 ohm. Set the slider to the power lost in the cables, in watts.",
        min: 0,
        max: 6000,
        step: 100,
        unit: "W",
        start: 0,
        targetMin: 4400,
        targetMax: 4600,
        ask: "The power lost in a resistance is the current squared times the resistance, so work out 30 squared times 5.0.",
        hints: [
          "Use P equals I squared times R.",
          "30 squared is 900, and 900 times 5.0 is 4500, which is 4.5 times 10 to the power 3 watts.",
        ],
        working: [
          { label: "Formula", latex: "P = I^2 R" },
          { label: "Substitute", latex: "P = 30^2 \\times 5.0" },
          { label: "Answer", latex: "P = 4.5 \\times 10^3\\ \\text{W}" },
        ],
        explain: "The power lost is 4.5 times 10 to the power 3 watts, because 30 squared is 900, and 900 times 5.0 ohms is 4500 watts.",
      },
      // ---------- INTERACTIVE 2: tiles (Energy, calc) ----------
      {
        kind: "tiles",
        prompt: "A 2 V, 5 W bulb is switched on for 300 s. Build the working line for the energy E it transfers, using E = P t.",
        tiles: ["E =", "5", "\\times", "300", "=", "1500", "J", "W"],
        answer: ["E =", "5", "\\times", "300", "=", "1500", "J"],
        ask: "Energy is power times time, so set up 5 times 300 with the correct unit.",
        hints: [
          "Use E equals P times t, with P equal to 5 watts and t equal to 300 seconds.",
          "5 times 300 is 1500, and energy is measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "E = Pt" },
          { label: "Substitute", latex: "E = 5 \\times 300" },
          { label: "Answer", latex: "E = 1500\\ \\text{J}" },
        ],
        explain: "The energy is 1500 joules, because 5 watts times 300 seconds is 1500 joules.",
      },
      // ---------- INTERACTIVE 3: slider (Cost, calc) ----------
      {
        kind: "slider",
        prompt: "An appliance transfers 12 kWh of energy in 0.5 h. Set the slider to its power, in kilowatts.",
        min: 0,
        max: 40,
        step: 1,
        unit: "kW",
        start: 0,
        targetMin: 23,
        targetMax: 25,
        ask: "Power is energy divided by time, so work out 12 divided by 0.5.",
        hints: [
          "Use P equals E divided by t, with the energy in kilowatt-hours and the time in hours.",
          "12 divided by 0.5 is 24, in kilowatts.",
        ],
        working: [
          { label: "Formula", latex: "P = \\dfrac{E}{t}" },
          { label: "Substitute", latex: "P = \\dfrac{12}{0.5}" },
          { label: "Answer", latex: "P = 24\\ \\text{kW}" },
        ],
        explain: "The power is 24 kilowatts, because 12 kilowatt-hours divided by 0.5 hours is 24 kilowatts.",
      },
      // ---------- INTERACTIVE 4: tiles (Fuse rating, calc) ----------
      {
        kind: "tiles",
        prompt: "3 appliances on one plug draw 3 A, 3 A and 5 A. Build the working line for the total current I. A 13 A fuse is then chosen.",
        tiles: ["I =", "3", "+", "3", "+", "5", "=", "11", "A", "13"],
        answer: ["I =", "3", "+", "3", "+", "5", "=", "11", "A"],
        ask: "Add the 3 currents to find the total the plug carries, then keep the correct unit.",
        hints: [
          "The total current is the sum of the 3, so 3 plus 3 plus 5.",
          "3 plus 3 plus 5 is 11, in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = I_1 + I_2 + I_3" },
          { label: "Substitute", latex: "I = 3 + 3 + 5" },
          { label: "Answer", latex: "I = 11\\ \\text{A}" },
        ],
        explain: "The total current is 11 amperes, because 3 plus 3 plus 5 is 11. The fuse chosen is the next standard rating above this, which is the 13 ampere fuse.",
      },
      // ---------- INTERACTIVE 5: match (Safety devices) ----------
      {
        kind: "match",
        prompt: "Match each safety feature to the way it protects.",
        pairs: [
          { left: "Fuse", right: "A thin wire that melts to break the circuit when the current is too high" },
          { left: "Circuit breaker", right: "A switch that trips on a large current and can be reset and reused" },
          { left: "Earthing", right: "A low-resistance wire that carries fault current from the casing to the ground" },
          { left: "Double insulation", right: "A plastic outer casing so no exposed metal can become live, needing no earth wire" },
        ],
        ask: "Match each feature to its action. One melts, one trips and resets, one gives fault current a path to earth, and one removes exposed metal.",
        hints: [
          "A fuse melts and is replaced, while a circuit breaker trips and can be reset and used again.",
          "Earthing gives fault current a safe path to the ground; double insulation means there is no exposed metal to become live.",
        ],
        explain: "A fuse melts to break the circuit; a circuit breaker trips on a large current and can be reset and reused; earthing carries fault current from the casing to the ground; and double insulation encloses the appliance in plastic so no metal can become live.",
      },
      // ---------- INTERACTIVE 6: spoterror (Plug wiring / safety) ----------
      {
        kind: "spoterror",
        prompt: "Here are four statements about safe mains wiring. Tap the line that is wrong.",
        lines: [
          "The live wire is brown and carries the high voltage.",
          "A fuse goes in the neutral wire so that it can break the circuit.",
          "The earth wire is green and yellow and acts as a safety path.",
          "If the current is too large the fuse wire melts and cuts off the supply.",
        ],
        errorLine: 1,
        ask: "Recall which wire must hold the fuse so that a fault cuts the appliance off from the high voltage, then check each line.",
        hints: [
          "A fuse must disconnect the appliance from the high voltage when it blows.",
          "That means the fuse belongs in the live wire, not the neutral wire, so the neutral line is the wrong one.",
        ],
        explain: "The wrong line says the fuse goes in the neutral wire. The fuse must be in the live wire, so that when it blows the appliance is cut off from the high voltage. The other 3 statements are correct.",
      },
      // ---------- INTERACTIVE 7: cloze (Plug wiring) ----------
      {
        kind: "cloze",
        prompt: "Complete the sentence about the colours of the 3 wires in a mains plug.",
        segments: [
          "In a 3-pin plug the live wire is coloured ",
          ", the neutral wire is coloured ",
          ", and the earth wire is coloured ",
          ".",
        ],
        bank: ["brown", "blue", "green and yellow", "red", "black"],
        answer: ["brown", "blue", "green and yellow"],
        ask: "Recall the standard colour code for the 3 wires. Start with the live wire, then the neutral, then the earth.",
        hints: [
          "The live wire is brown and the neutral wire is blue.",
          "The earth wire has 2 colours, green and yellow.",
        ],
        explain: "In a mains plug the live wire is brown, the neutral wire is blue, and the earth wire is green and yellow.",
      },
      // ---------- INTERACTIVE 8: classify (Dangers) ----------
      {
        kind: "classify",
        prompt: "Sort each situation by the main electrical danger it shows.",
        bins: ["Damaged or bare insulation", "Overheated or overloaded cable", "Damp or wet conditions"],
        items: [
          { text: "a frayed cable with the bare copper showing", bin: 0 },
          { text: "many high-power appliances plugged into one socket", bin: 1 },
          { text: "using a hair dryer with wet hands near a sink", bin: 2 },
          { text: "a cracked plug casing exposing a live pin", bin: 0 },
          { text: "a thin extension lead that feels hot to the touch", bin: 1 },
          { text: "a socket splashed with water from a spill", bin: 2 },
        ],
        ask: "Decide whether each situation is mainly about exposed conductors, too much current in a cable, or water. Tap each one and drop it in its bin.",
        hints: [
          "Bare or cracked coverings expose live metal; a hot or overloaded lead is carrying too much current.",
          "Water or wet hands let current pass through a person, so those belong in the damp conditions bin.",
        ],
        explain: "Frayed cables and cracked casings expose live metal, so they are damaged insulation. Overloaded sockets and hot leads carry too much current, so they are overheated cables. Wet hands and splashed sockets add water, so they are damp conditions.",
      },
      // ---------- INTERACTIVE 9: match (Dangers to consequence) ----------
      {
        kind: "match",
        prompt: "Match each electrical danger to its likely consequence.",
        pairs: [
          { left: "Damaged insulation", right: "Bare wires can touch and cause a short circuit or a live casing" },
          { left: "Overloaded cable", right: "Too much current overheats the wire and can start a fire" },
          { left: "Damp conditions", right: "Water conducts through its ions, making an electric shock more likely" },
          { left: "Touching a live wire while earthed", right: "The body completes a circuit to the ground and a shock passes through it" },
        ],
        ask: "Match each danger to what it leads to. Think about short circuits, fire, and current passing through a person.",
        hints: [
          "Damaged insulation lets bare wires touch, while too much current heats a cable enough to start a fire.",
          "Damp conditions and touching a live wire both let current pass through the body, giving a shock.",
        ],
        explain: "Damaged insulation lets bare wires touch, causing a short circuit or a live casing. An overloaded cable overheats and can start a fire. Damp conditions let water conduct and raise the shock risk. Touching a live wire while earthed lets the body complete a circuit to the ground, so a shock passes through it.",
      },
      // ---------- INTERACTIVE 10: order (Safety, how a fuse acts) ----------
      {
        kind: "order",
        prompt: "Put the steps of how a fuse acts when too much current flows into the correct order.",
        items: [
          "The current in the circuit rises above the fuse rating",
          "The thin fuse wire heats up strongly",
          "The fuse wire melts",
          "The circuit is broken and the current stops",
          "The appliance and cables are protected from overheating",
        ],
        ask: "Start from the moment the current becomes too large and finish with the circuit made safe. Put the steps in order.",
        hints: [
          "A fuse only acts once the current climbs past its rating and the thin wire heats up.",
          "The heated wire melts, which breaks the circuit and stops the current, protecting the cables.",
        ],
        explain: "First the current rises above the fuse rating, so the thin fuse wire heats up. It then melts, which breaks the circuit and stops the current, and this protects the appliance and cables from overheating.",
      },
      // ---------- OPEN 1 (Power) ----------
      {
        kind: "open",
        prompt: "Explain the heating effect of an electric current, and say why the heating element of an appliance is made from a wire with a high resistance and a high melting point.",
        modelAnswer: "As a current flows, the moving charges collide with the atoms of the metal lattice and make them vibrate more, so the wire heats up. This is the heating effect of a current. A heating element is made from a wire with a high resistance, such as nichrome, so that a large amount of electrical energy is turned into heat. It also needs a high melting point so that the wire does not melt at the high temperature it reaches.",
        marks: [
          "Moving charges collide with the lattice atoms, making them vibrate more and heat up.",
          "A high resistance turns more electrical energy into heat.",
          "A high melting point stops the hot element wire from melting.",
        ],
        ask: "Describe what the charges do inside the wire, then link the resistance to the heat and the melting point to surviving the temperature.",
      },
      // ---------- OPEN 2 (Cost / kWh) ----------
      {
        kind: "open",
        prompt: "Explain what is meant by one kilowatt-hour, and why electricity suppliers measure energy in kilowatt-hours rather than in joules.",
        modelAnswer: "One kilowatt-hour is the energy transferred by an appliance of power 1 kilowatt working for 1 hour, which is equal to 3.6 times 10 to the power 6 joules. Suppliers use the kilowatt-hour because a joule is a very small unit, so the energy a whole home uses would be an enormous number of joules. The kilowatt-hour is a much larger unit, so bills use small, convenient numbers.",
        marks: [
          "One kilowatt-hour is the energy used by a 1 kilowatt appliance in 1 hour.",
          "It equals 3.6 times 10 to the power 6 joules.",
          "A joule is very small, so kilowatt-hours give tidy numbers instead of huge ones.",
        ],
        ask: "Define the kilowatt-hour from a power and a time, then compare the size of a joule with the energy a home uses.",
      },
      // ---------- OPEN 3 (Safety / earthing) ----------
      {
        kind: "open",
        prompt: "Explain how earthing the metal casing of an appliance protects a person when a fault makes the casing live.",
        modelAnswer: "The earth wire connects the metal casing to the ground through a low-resistance path. If the live wire touches the casing, a large current flows to earth through the earth wire rather than through a person, because the earth wire has a much lower resistance than the body. This large current also blows the fuse or trips the circuit breaker, which disconnects the appliance and makes it safe.",
        marks: [
          "The earth wire connects the casing to the ground through a low-resistance path.",
          "Fault current flows to earth through the earth wire instead of through a person.",
          "The large current blows the fuse or trips the breaker, cutting off the supply.",
        ],
        ask: "Say what the earth wire connects, why the current takes that path rather than the body, and what happens to the fuse.",
      },
      // ---------- OPEN 4 (Plug wiring, figure) ----------
      {
        kind: "open",
        prompt: "Explain why a fuse or switch must be fitted in the live wire of an appliance rather than in the neutral wire.",
        figure: "fig-18-05-safety-live-vs-neutral",
        modelAnswer: "The live wire carries the high mains voltage. If the fuse or switch is in the live wire, then when it blows or is turned off the appliance is disconnected from the high voltage and is safe to touch. If it were in the neutral wire instead, the appliance would still be joined to the live wire, so the casing could stay live and a person could still receive a shock even with the switch off.",
        marks: [
          "The live wire carries the high voltage.",
          "A fuse or switch in the live wire disconnects the appliance from that high voltage.",
          "In the neutral wire the appliance stays connected to the live side and can still give a shock.",
        ],
        ask: "Compare where the high voltage is when the break is in the live wire against when it is in the neutral wire.",
      },
      // ---------- OPEN 5 (Dangers) ----------
      {
        kind: "open",
        prompt: "Describe 2 dangers of using electricity in the home and, for each one, state a precaution that reduces the risk.",
        modelAnswer: "One danger is damaged insulation, where bare wires can touch and cause a short circuit or make a casing live; the precaution is to replace worn or frayed cables before use. A second danger is damp conditions, because water with dissolved ions conducts and makes a shock more likely; the precaution is to keep hands dry and keep electrical devices away from water. Overloading a socket is a further danger, as too much current overheats the cable and can start a fire; the precaution is to avoid plugging too many high-power appliances into one socket.",
        marks: [
          "A named danger such as damaged insulation, damp conditions, or overloading.",
          "A correct reason why that situation is dangerous.",
          "A sensible matching precaution for each danger given.",
        ],
        ask: "Pick 2 clear hazards, say briefly why each is dangerous, and give one practical precaution for each.",
      },
    ],
  },
];
