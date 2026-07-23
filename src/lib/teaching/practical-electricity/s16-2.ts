import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, section 2. Grounded in KB Chapter 18 (Practical Electricity) section 18.2.
// CALCULATION box: energy in kilowatt-hours and the cost of electricity. Equations live in `formula`
// fields; every calculation question carries a Formula/Substitute/Answer `working` block, and only the
// pre-checked CALCULATION BANK values are used so each marked answer matches.

export const BOXES: Subconcept[] = [
  {
    id: "t16.2",
    code: "T16.2",
    title: "Cost of electricity and the kilowatt-hour",
    blurb: "Why bills count kilowatt-hours, and how to turn energy used into money",
    steps: [
      {
        kind: "concept",
        heading: "Why bills use the kilowatt-hour",
        body: "A home transfers a huge number of *joules* every day, so those figures grow awkwardly large. Instead, suppliers meter energy in *kilowatt-hours* and charge for each *unit* used.",
        say: "Run a heater or a kettle for an evening and the energy transferred is millions of joules, an awkwardly long number to print on a bill. So electricity suppliers measure energy in a bigger everyday unit, the kilowatt-hour. On your bill 1 unit means 1 kilowatt-hour, and you pay a set price for each one.",
      },
      {
        kind: "concept",
        heading: "One kilowatt-hour",
        body: "*One kilowatt-hour* is the energy an appliance rated at 1 *kilowatt* transfers when it runs for 1 *hour*. It is equal to 3.6 x 10^6 J. Keep power in kilowatts and time in hours, and the energy comes out directly in kilowatt-hours.",
        formula: {
          latex: "E = P\\,t",
          where: [
            { sym: "E", meaning: "energy transferred", unit: "kWh" },
            { sym: "P", meaning: "power", unit: "kW" },
            { sym: "t", meaning: "time", unit: "h" },
          ],
        },
        say: "One kilowatt-hour is the energy a 1 kilowatt appliance uses in 1 hour. In joules that is 3.6 times 10 to the power 6 joules, which is why we prefer the shorter name. The rule is simple: multiply the power in kilowatts by the time in hours, and the answer is already in kilowatt-hours, no unit conversion needed.",
      },
      {
        kind: "concept",
        heading: "Working out the cost",
        body: "Once you know the *energy* used in kilowatt-hours, the *cost* is just that energy multiplied by the *unit price*, the amount charged per kilowatt-hour.",
        formula: {
          latex: "\\text{cost} = E \\times \\text{price}",
          where: [
            { sym: "cost", meaning: "cost of the energy used", unit: "dollars" },
            { sym: "E", meaning: "energy used", unit: "kWh" },
            { sym: "price", meaning: "unit price charged per kilowatt-hour", unit: "dollars/kWh" },
          ],
        },
        say: "To find the money, take the energy in kilowatt-hours and multiply by the unit price, the amount the supplier charges for each kilowatt-hour. So it is a 2 step job: first energy equals power times time, then cost equals energy times price.",
      },
      {
        kind: "choice",
        question: "A 2 kW heater runs for 4 h. Electricity costs 0.25 dollars per kWh. What is the cost of running it?",
        options: ["16.00 dollars", "0.80 dollars", "2.00 dollars", "8.00 dollars"],
        correct: 2,
        ask: "First find the energy: 2 × 4 gives the kilowatt-hours. Then multiply that by 0.25 to get the cost.",
        hints: [
          "Energy equals power times time, so 2 kilowatts times 4 hours is 8 kilowatt-hours.",
          "Cost is energy times price, so 8 × 0.25 is 2.00 dollars.",
        ],
        working: [
          { label: "Formula", latex: "E = P\\,t,\\quad \\text{cost} = E \\times \\text{price}" },
          { label: "Substitute", latex: "E = 2 \\times 4 = 8,\\quad \\text{cost} = 8 \\times 0.25" },
          { label: "Answer", latex: "\\text{cost} = 2.00\\ \\text{dollars}" },
        ],
        explain: "The heater uses 8 kilowatt-hours, because 2 kilowatts times 4 hours is 8, and 8 × 0.25 dollars is 2.00 dollars.",
      },
      {
        kind: "choice",
        question: "A 2.4 kW air conditioner runs for 5 h. Electricity costs 0.28 dollars per kWh. Find the cost.",
        options: ["3.36 dollars", "12.00 dollars", "0.67 dollars", "33.60 dollars"],
        correct: 0,
        ask: "Work out the energy first: 2.4 × 5 in kilowatt-hours. Then multiply by 0.28 for the cost.",
        hints: [
          "Energy is 2.4 kilowatts times 5 hours, which is 12 kilowatt-hours.",
          "Cost is 12 × 0.28, which is 3.36 dollars.",
        ],
        working: [
          { label: "Formula", latex: "E = P\\,t,\\quad \\text{cost} = E \\times \\text{price}" },
          { label: "Substitute", latex: "E = 2.4 \\times 5 = 12,\\quad \\text{cost} = 12 \\times 0.28" },
          { label: "Answer", latex: "\\text{cost} = 3.36\\ \\text{dollars}" },
        ],
        explain: "The air conditioner uses 12 kilowatt-hours, because 2.4 kilowatts times 5 hours is 12, and 12 × 0.28 dollars is 3.36 dollars.",
      },
      {
        kind: "choice",
        question: "An appliance transfers 12 kWh of energy in just 0.5 h. What is its power rating?",
        options: ["6 kW", "24 kW", "12 kW", "0.5 kW"],
        correct: 1,
        ask: "Rearrange energy equals power times time to get power, so divide the energy by the time: 12 ÷ 0.5.",
        hints: [
          "Power equals energy divided by time.",
          "12 ÷ 0.5 is 24, so the power is 24 kilowatts.",
        ],
        working: [
          { label: "Formula", latex: "P = \\dfrac{E}{t}" },
          { label: "Substitute", latex: "P = \\dfrac{12}{0.5}" },
          { label: "Answer", latex: "P = 24\\ \\text{kW}" },
        ],
        explain: "The power is 24 kilowatts, because 12 kilowatt-hours divided by 0.5 hours is 24 kilowatts.",
      },
      {
        kind: "choice",
        question: "A 0.2 kW fan transfers 0.5 kWh of energy. For how long did it run?",
        options: ["0.1 hours", "10 hours", "0.4 hours", "2.5 hours"],
        correct: 3,
        ask: "Rearrange energy equals power times time to get time, so divide the energy by the power: 0.5 ÷ 0.2.",
        hints: [
          "Time equals energy divided by power.",
          "0.5 ÷ 0.2 is 2.5, so the fan ran for 2.5 hours.",
        ],
        working: [
          { label: "Formula", latex: "t = \\dfrac{E}{P}" },
          { label: "Substitute", latex: "t = \\dfrac{0.5}{0.2}" },
          { label: "Answer", latex: "t = 2.5\\ \\text{h}" },
        ],
        explain: "The fan ran for 2.5 hours, because 0.5 kilowatt-hours divided by 0.2 kilowatts is 2.5 hours.",
      },
      {
        kind: "choice",
        question: "Why do electricity suppliers bill energy in kilowatt-hours rather than in joules?",
        options: [
          "The joule is not a real unit of energy",
          "The kilowatt-hour measures power, not energy",
          "In joules the numbers would be awkwardly large",
          "Appliances do not transfer energy in joules",
        ],
        correct: 2,
        ask: "Think about the size of the number. A single evening of use is millions of joules, so which unit keeps the figures short and tidy?",
        hints: [
          "The joule is a perfectly good energy unit, but a very small one for household amounts.",
          "1 kilowatt-hour is 3.6 × 10 to the power 6 joules, so it replaces millions of joules with a small, readable number.",
        ],
        explain: "Household energy in joules runs into millions, so those numbers are awkwardly large. The kilowatt-hour is a much bigger unit, giving short, readable figures on a bill.",
      },
      {
        kind: "insight",
        body: "Costing electricity is always the same *2 steps*: find the *energy* in kilowatt-hours with power times time, then multiply by the *unit price* to get the money.",
        say: "Hold on to this. Every electricity cost problem is 2 steps. First get the energy in kilowatt-hours by multiplying the power in kilowatts by the time in hours. Then multiply that energy by the unit price to get the cost in dollars. Keep power in kilowatts and time in hours and you never have to touch the millions of joules underneath.",
      },
    ],
  },
];
