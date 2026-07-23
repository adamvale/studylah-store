import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, Revision 1. Checkpoint over KB Chapter 18,
// sections t16.1 to t16.2: electrical power, energy, and the cost of
// electricity (the kilowatt-hour). Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t16.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: electrical power, energy and the cost of electricity",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A device operates at 12 V and carries a current of 3.0 A. What is its electrical power?",
        options: ["12 W", "4 W", "36 W", "15 W"],
        correct: 2,
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
        explain: "The power is 36 watts, because 12 volts times 3.0 amperes is 36 watts. 1 watt is 1 joule transferred each second.",
      },
      {
        kind: "choice",
        question: "A lamp is rated 240 V, 60 W. What current does it draw at its normal voltage?",
        options: ["0.25 A", "4 A", "2.5 A", "15000 A"],
        correct: 0,
        ask: "Rearrange power equals voltage times current to get current, so work out 60 divided by 240. Which option is that?",
        hints: [
          "From P equals V times I, the current is P divided by V.",
          "60 divided by 240 is 0.25, in amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = \\dfrac{P}{V}" },
          { label: "Substitute", latex: "I = \\dfrac{60}{240}" },
          { label: "Answer", latex: "I = 0.25\\ \\text{A}" },
        ],
        explain: "The current is 0.25 amperes, because 60 watts divided by 240 volts is 0.25 amperes.",
      },
      {
        kind: "choice",
        question: "An appliance is rated 240 V, 600 W. What is its resistance?",
        options: ["2.5 ohm", "0.4 ohm", "600 ohm", "96 ohm"],
        correct: 3,
        ask: "Resistance is voltage squared divided by power, so work out 240 squared divided by 600. Which option matches?",
        hints: [
          "Use R equals V squared divided by P.",
          "240 squared is 57600, and 57600 divided by 600 is 96, in ohms.",
        ],
        working: [
          { label: "Formula", latex: "R = \\dfrac{V^2}{P}" },
          { label: "Substitute", latex: "R = \\dfrac{240^2}{600}" },
          { label: "Answer", latex: "R = 96\\ \\Omega" },
        ],
        explain: "The resistance is 96 ohms, because 240 squared is 57600, and 57600 divided by 600 is 96 ohms.",
      },
      {
        kind: "choice",
        question: "A 2 kW heater runs for 4 hours. Electricity costs 0.25 dollars per kWh. What is the cost of running it?",
        options: ["0.50 dollars", "2.00 dollars", "8.00 dollars", "0.25 dollars"],
        correct: 1,
        ask: "First find the energy in kilowatt-hours, 2 times 4, then multiply by the price of 0.25. Which option is that?",
        hints: [
          "Energy in kilowatt-hours is power in kilowatts times time in hours: 2 times 4 is 8 kilowatt-hours.",
          "Cost is 8 times 0.25, which is 2.00 dollars.",
        ],
        working: [
          { label: "Formula", latex: "\\text{cost} = P \\times t \\times \\text{price}" },
          { label: "Substitute", latex: "\\text{cost} = 2 \\times 4 \\times 0.25" },
          { label: "Answer", latex: "\\text{cost} = 2.00\\ \\text{dollars}" },
        ],
        explain: "The heater uses 2 times 4, which is 8 kilowatt-hours, and 8 times 0.25 dollars is 2.00 dollars.",
      },
      {
        kind: "choice",
        question: "Why do electricity suppliers measure energy in kilowatt-hours rather than in joules?",
        options: [
          "The kilowatt-hour is smaller than the joule",
          "Joules cannot measure electrical energy",
          "In joules a household uses awkwardly large numbers",
          "The joule is not an SI unit",
        ],
        correct: 2,
        ask: "Think about how large the number of joules becomes when a home uses electricity for weeks. Which option describes that?",
        hints: [
          "A household transfers millions of joules, so the joule count is huge and hard to handle.",
          "The kilowatt-hour is a much larger unit, so the numbers on a bill stay small and convenient.",
        ],
        explain: "In joules a household uses awkwardly large numbers, so suppliers use the larger kilowatt-hour to keep the figures manageable. One kilowatt-hour equals 3.6 times 10 to the power 6 joules.",
      },
      {
        kind: "slider",
        prompt: "A 2 V, 5 W bulb is switched on for 5 minutes. Set the slider to the energy it transfers, in J.",
        min: 0,
        max: 3000,
        step: 10,
        unit: "J",
        start: 0,
        targetMin: 1490,
        targetMax: 1510,
        ask: "5 minutes is 300 seconds and the power is 5 watts, so work out 5 times 300.",
        hints: [
          "Energy is power times time in seconds, so convert 5 minutes to 300 seconds.",
          "5 times 300 is 1500, in joules.",
        ],
        working: [
          { label: "Formula", latex: "E = Pt" },
          { label: "Substitute", latex: "E = 5 \\times 300" },
          { label: "Answer", latex: "E = 1500\\ \\text{J}" },
        ],
        explain: "The energy is 1500 joules, because 5 watts times 300 seconds is 1500 joules. The 2 volts is not needed once the power is known.",
      },
      {
        kind: "tiles",
        prompt: "A 0.2 kW fan transfers 0.5 kWh of energy. Build the working line that gives the time it runs, in hours.",
        tiles: ["t =", "0.5", "\\div", "0.2", "=", "2.5", "h", "kWh"],
        answer: ["t =", "0.5", "\\div", "0.2", "=", "2.5", "h"],
        ask: "Time is energy divided by power, so set up 0.5 divided by 0.2.",
        hints: [
          "Rearranging E equals P times t gives t equal to E divided by P.",
          "0.5 divided by 0.2 is 2.5, in hours.",
        ],
        working: [
          { label: "Formula", latex: "t = \\dfrac{E}{P}" },
          { label: "Substitute", latex: "t = \\dfrac{0.5}{0.2}" },
          { label: "Answer", latex: "t = 2.5\\ \\text{h}" },
        ],
        explain: "The fan runs for 2.5 hours, because 0.5 kilowatt-hours divided by 0.2 kilowatts is 2.5 hours.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of power and the kilowatt-hour.",
        segments: [
          "The rate of transferring energy is called ",
          ", measured in ",
          ". One kilowatt-hour is the energy a 1 kW appliance uses in one ",
          ".",
        ],
        bank: ["power", "watts", "hour", "energy", "joules", "minute"],
        answer: ["power", "watts", "hour"],
        ask: "Recall the name for how fast energy is transferred, its unit, and the time in the definition of the kilowatt-hour.",
        hints: [
          "The rate of transferring energy is power, measured in watts.",
          "A kilowatt-hour is the energy used by a 1 kilowatt appliance in one hour.",
        ],
        explain: "Power is the rate of transferring energy, measured in watts. One kilowatt-hour is the energy a 1 kilowatt appliance uses in one hour.",
      },
      {
        kind: "classify",
        prompt: "Sort each unit by what it measures.",
        bins: ["Unit of power", "Unit of energy"],
        items: [
          { text: "watt", bin: 0 },
          { text: "kilowatt", bin: 0 },
          { text: "joule", bin: 1 },
          { text: "kilowatt-hour", bin: 1 },
        ],
        ask: "For each unit, ask whether it tells you how fast energy is used (power) or a total amount of energy. Tap each tile and drop it in its bin.",
        hints: [
          "The watt and the kilowatt both measure power, the rate of transferring energy.",
          "The joule and the kilowatt-hour both measure a quantity of energy.",
        ],
        explain: "The watt and the kilowatt are units of power, the rate of transferring energy. The joule and the kilowatt-hour are units of energy, a total amount transferred.",
      },
      {
        kind: "spoterror",
        prompt: "A student finds the energy used by a 2 kW heater running for 3 hours, in kilowatt-hours. Spot the incorrect line.",
        lines: [
          "P = 2 kW, t = 3 h",
          "E = P x t",
          "t = 3 h = 180 min",
          "E = 2 x 180 = 360 kWh",
        ],
        errorLine: 3,
        ask: "For a kilowatt-hour answer the time must stay in hours, not minutes. Check the line where a number is substituted.",
        hints: [
          "Energy in kilowatt-hours needs power in kilowatts and time in hours.",
          "The time should stay as 3 hours, so it should be 2 times 3, not 2 times 180.",
        ],
        working: [
          { label: "Formula", latex: "E = Pt" },
          { label: "Substitute", latex: "E = 2 \\times 3" },
          { label: "Answer", latex: "E = 6\\ \\text{kWh}" },
        ],
        explain: "The last line is wrong: the time was left in minutes. For kilowatt-hours the time must be in hours, so the energy is 2 times 3, which is 6 kilowatt-hours, not 360.",
      },
      {
        kind: "open",
        prompt: "State what is meant by the electrical power of an appliance and name its unit.",
        modelAnswer: "Electrical power is the rate at which the appliance transfers electrical energy into other forms. It is given by P = V I, or P = W/t. Power is measured in watts, where 1 watt is 1 joule transferred each second.",
        marks: [
          "Power is the rate of transferring (electrical) energy.",
          "P = VI or P = W/t stated.",
          "Unit is the watt (1 W = 1 J/s).",
        ],
        ask: "Think about what power tells you each second, the formula linking it to voltage and current, and the unit it is measured in.",
      },
      {
        kind: "open",
        prompt: "Explain why energy at home is billed in kilowatt-hours, and describe how to work out the cost of running an appliance.",
        modelAnswer: "A household transfers so many joules that the numbers become awkwardly large, so suppliers use the larger kilowatt-hour. One kilowatt-hour is the energy a 1 kW appliance uses in 1 hour. To find the cost, keep the power in kilowatts and the time in hours, multiply them to get the energy in kilowatt-hours, then multiply that energy by the price of one unit.",
        marks: [
          "Joules give very large numbers, so the larger kWh is used.",
          "Energy (kWh) = power (kW) x time (h).",
          "Cost = energy in kWh x price per unit.",
        ],
        ask: "Think about the size of the joule numbers for a home, the meaning of one kilowatt-hour, and the 2 steps of energy then cost.",
      },
    ],
  },
];
