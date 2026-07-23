import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, section 1. Grounded in KB Chapter 01 (Physical Quantities and Units) section 1.1.
// Figure colours follow the T1 apparatus key: the object/value text is white, leader lines and
// scales are grey, no forces are drawn on the measurement-anatomy diagram.

export const BOXES: Subconcept[] = [
  {
    id: "t1.1",
    code: "T1.1",
    title: "Physical quantities and units",
    blurb: "What a measurement really is, and the base and derived quantities behind it",
    steps: [
      {
        kind: "concept",
        heading: "Every measurement has two parts",
        figure: "fig-01-01-measurement-anatomy",
        body: "A *physical quantity* is written as a *numerical magnitude* followed by a *unit*. The number says how much there is, and the unit says the standard it is counted in.",
        say: "A physical quantity always comes in 2 parts. In the picture the text reads mass of copper equals 10 kilograms, with the number 10 picked out in amber and the unit k g in blue. A grey leader line points to the number 10 and labels it the numerical magnitude, another grey line points to the letters k g and labels it the unit, and a third grey line wraps the whole thing and names it the physical quantity. The number tells you how much, and the unit tells you the standard being counted. Drop either part and the measurement loses its meaning.",
      },
      {
        kind: "concept",
        heading: "The five base quantities",
        body: "The SI system rests on 5 *base quantities*, each with its own *base unit*: length in metres, mass in kilograms, time in seconds, electric current in amperes and temperature in kelvin.",
        say: "Everything we measure is built from just 5 base quantities. Length has the base unit metre, mass has the kilogram, time has the second, electric current has the ampere, and temperature has the kelvin. Learn these 5 pairs, because every other unit in physics is assembled from them.",
      },
      {
        kind: "concept",
        heading: "Derived quantities",
        body: "*Derived quantities* are built from base ones by *multiplying* or *dividing* them. Speed, volume and *density* are all derived, so their units come from combining base units.",
        formula: {
          latex: "\\rho = \\dfrac{m}{V}",
          where: [
            { sym: "\\rho", meaning: "density", unit: "kg/m^3" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "V", meaning: "volume", unit: "m^3" },
          ],
        },
        say: "Some quantities are not measured directly but built from the base ones. Speed is distance divided by time, in metres per second. Volume is length times width times height, in cubic metres. Density is mass divided by volume, in kilograms per cubic metre. Each derived unit is just base units multiplied or divided together.",
      },
      {
        kind: "classify",
        prompt: "Sort each quantity into base or derived.",
        bins: ["Base quantity", "Derived quantity"],
        items: [
          { text: "mass", bin: 0 },
          { text: "time", bin: 0 },
          { text: "electric current", bin: 0 },
          { text: "speed", bin: 1 },
          { text: "volume", bin: 1 },
          { text: "density", bin: 1 },
        ],
        ask: "A base quantity is measured directly and has its own base unit. A derived quantity is built by multiplying or dividing base ones. Tap each quantity and drop it in its bin.",
        hints: [
          "Mass, time and electric current are 3 of the 5 base quantities.",
          "Speed, volume and density are each made by combining base quantities, so all 3 are derived.",
        ],
        explain: "Mass, time and electric current are base quantities, each measured directly with its own base unit. Speed, volume and density are derived, because each one is built by multiplying or dividing base quantities.",
      },
      {
        kind: "match",
        prompt: "Match each base quantity to its SI base unit.",
        pairs: [
          { left: "Length", right: "metre (m)" },
          { left: "Mass", right: "kilogram (kg)" },
          { left: "Time", right: "second (s)" },
          { left: "Electric current", right: "ampere (A)" },
          { left: "Temperature", right: "kelvin (K)" },
        ],
        ask: "Recall the 5 base pairs one by one. Start with the units you use most, length and mass, then fill in the rest.",
        hints: [
          "Length is in metres, mass is in kilograms and time is in seconds.",
          "Electric current is in amperes, and temperature is in kelvin.",
        ],
        explain: "Length is measured in metres, mass in kilograms, time in seconds, electric current in amperes and temperature in kelvin. These are the 5 SI base quantities and their base units.",
      },
      {
        kind: "choice",
        question: "A student records a reading as just '4.5'. Why is '4.5' on its own not a physical quantity?",
        options: [
          "It has a numerical magnitude but no unit, so it does not say '4.5 of what'",
          "It is too small a number to be a measurement",
          "A number can never be part of a measurement",
          "It must be rewritten in standard form first",
        ],
        correct: 0,
        ask: "A physical quantity needs 2 parts. Check which of those parts the reading 4.5 is missing.",
        hints: [
          "One part is the numerical magnitude and the other is the unit.",
          "4.5 gives the number but no unit, so it could be 4.5 metres, 4.5 seconds or 4.5 kilograms.",
        ],
        explain: "A physical quantity needs both a numerical magnitude and a unit. On its own 4.5 gives only the number, so it does not say 4.5 of what, and the measurement is incomplete.",
      },
      {
        kind: "insight",
        body: "A reading is only a *physical quantity* when a *numerical magnitude* is paired with a *unit*, so always write both.",
        say: "Hold on to one habit. A reading only counts as a physical quantity when a number and a unit travel together. Write the magnitude and its unit every time, because the number alone never tells the full story.",
      },
    ],
  },
];
