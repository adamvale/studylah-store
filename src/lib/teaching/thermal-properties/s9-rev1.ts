import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, Revision 1. Checkpoint over KB Chapter 10,
// sections t9.1 to t9.3: internal energy, heat capacity and specific heat
// capacity, and energy conservation with heat capacity. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t9.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: internal energy, heat capacity and energy conservation",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "The internal energy of a body is best described as...",
        figure: "fig-10-01-internal-energy-states",
        options: [
          "only the kinetic energy of its particles",
          "only the potential energy of its particles",
          "the total kinetic plus potential energy of all its particles",
          "the temperature of the body",
        ],
        correct: 2,
        ask: "Internal energy adds up 2 stores for every particle, one from motion and one from the forces between them. Which option includes both?",
        hints: [
          "The kinetic part comes from the particles moving, and the potential part comes from the forces and separation between them.",
          "Temperature is only a measure of the average kinetic energy, not the whole internal energy.",
        ],
        explain: "Internal energy is the total kinetic energy plus the total potential energy of all the particles. Temperature tells you only about the average kinetic energy, so it is not the same as internal energy.",
      },
      {
        kind: "choice",
        question: "2.0 kg of water is warmed from 20 C to 70 C. Take c of water as 4200 J/(kg C). How much energy is supplied?",
        options: [
          "4.2 x 10^5 J",
          "8.4 x 10^4 J",
          "2.1 x 10^5 J",
          "4.2 x 10^4 J",
        ],
        correct: 0,
        ask: "Use Q equals m times c times the temperature change. The change is 70 minus 20, which is 50. Work out 2.0 times 4200 times 50.",
        hints: [
          "The temperature change is 70 minus 20, which is 50 degrees.",
          "2.0 times 4200 times 50 is 420000, which is 4.2 times 10 to the power 5 joules.",
        ],
        working: [
          { label: "Formula", latex: "Q = mc\\,\\Delta\\theta" },
          { label: "Substitute", latex: "Q = 2.0 \\times 4200 \\times 50" },
          { label: "Answer", latex: "Q = 4.2 \\times 10^{5}\\ \\text{J}" },
        ],
        explain: "The energy supplied is 4.2 times 10 to the power 5 joules, because 2.0 kilograms times 4200 times a 50 degree rise is 420000 joules.",
      },
      {
        kind: "choice",
        question: "An electric heater rated 1400 W runs for 60 s, and all its energy heats 1.0 kg of water (c = 4200 J/(kg C)). What is the temperature rise?",
        options: [
          "5 C",
          "10 C",
          "84 C",
          "20 C",
        ],
        correct: 3,
        ask: "First find the energy supplied from E equals power times time, so 1400 times 60. Then use that energy in Q equals m c times the temperature change.",
        hints: [
          "The energy supplied is 1400 times 60, which is 84000 joules.",
          "The temperature change is 84000 divided by 1.0 times 4200, which is 20 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{Pt}{mc}" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{1400 \\times 60}{1.0 \\times 4200}" },
          { label: "Answer", latex: "\\Delta\\theta = 20\\ \\text{C}" },
        ],
        explain: "The temperature rises by 20 degrees, because the heater delivers 84000 joules, and 84000 divided by 1.0 times 4200 is 20.",
      },
      {
        kind: "choice",
        question: "In fig-10-03, two equal masses are cooled the same way. Curve A is gentler (less steep) than curve B. Which body has the higher specific heat capacity?",
        figure: "fig-10-03-cooling-curves-AB",
        options: [
          "Curve B, because it is steeper",
          "Curve A, because it cools more slowly",
          "They must have the same specific heat capacity",
          "Neither, cooling rate does not depend on c",
        ],
        correct: 1,
        ask: "A higher specific heat capacity means more energy is stored per degree, so the body gives out its energy and cools more slowly. Which curve falls more gently?",
        hints: [
          "The gentler curve, A, loses temperature slowly, so it must store more energy per degree.",
          "More energy per degree means a higher specific heat capacity, so curve A has the higher c.",
        ],
        explain: "Curve A has the higher specific heat capacity, because it cools more slowly. A gentler cooling curve means the body stores more energy for each degree, which is exactly what a high c means.",
      },
      {
        kind: "choice",
        question: "0.20 kg of water at 80 C is mixed with 0.20 kg of water at 20 C in an insulated cup. What is the final temperature?",
        options: [
          "20 C",
          "80 C",
          "50 C",
          "100 C",
        ],
        correct: 2,
        ask: "The masses are equal and it is the same material, so the energy lost by the hot water equals the energy gained by the cold water at the halfway temperature. Work out the average of 80 and 20.",
        hints: [
          "With equal masses of the same liquid, the final temperature is just the average of the 2 starting temperatures.",
          "The average of 80 and 20 is 50 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\theta_{f} = \\dfrac{\\theta_{hot} + \\theta_{cold}}{2}" },
          { label: "Substitute", latex: "\\theta_{f} = \\dfrac{80 + 20}{2}" },
          { label: "Answer", latex: "\\theta_{f} = 50\\ \\text{C}" },
        ],
        explain: "The final temperature is 50 degrees. The energy released by the hot water equals the energy absorbed by the cold water, and because the masses and material are equal, they meet exactly halfway between 80 and 20.",
      },
      {
        kind: "classify",
        prompt: "Sort each description by which store of internal energy it belongs to.",
        bins: ["Kinetic energy of particles", "Potential energy of particles"],
        items: [
          { text: "how fast the particles move", bin: 0 },
          { text: "the vibration speed of particles in a solid", bin: 0 },
          { text: "the average energy shown by temperature", bin: 0 },
          { text: "the separation between the particles", bin: 1 },
          { text: "the strength of the forces between particles", bin: 1 },
        ],
        ask: "For each one, ask whether it is about motion of the particles or about the forces and gaps between them. Motion is kinetic; forces and separation are potential.",
        hints: [
          "Anything about speed, motion or vibration is a kinetic energy contribution, and temperature measures the average of that.",
          "Anything about the gaps between particles or the forces holding them is a potential energy contribution.",
        ],
        explain: "Motion, vibration and the average energy behind temperature are all kinetic energy. The separation between particles and the forces between them are potential energy. Together they make up the internal energy.",
      },
      {
        kind: "match",
        prompt: "Match each quantity to the equation or idea that defines it.",
        pairs: [
          { left: "Heat capacity C", right: "C = Q / theta_change" },
          { left: "Specific heat capacity c", right: "Q = m c theta_change" },
          { left: "Energy from an electric heater", right: "E = P t" },
          { left: "Temperature", right: "average kinetic energy of the particles" },
        ],
        ask: "Heat capacity is per whole body, specific heat capacity brings in the mass, the heater relates energy to power and time, and temperature is a measure of average motion.",
        hints: [
          "Heat capacity C uses the whole body and no mass, while specific heat capacity c multiplies by the mass m.",
          "The heater turns power and time into energy, and temperature is the average kinetic energy of the particles.",
        ],
        explain: "Heat capacity is C equals Q divided by the temperature change, specific heat capacity uses Q equals m c times the change, a heater supplies E equals P times t, and temperature measures the average kinetic energy of the particles.",
      },
      {
        kind: "order",
        prompt: "Put these steps for finding the temperature rise from a heater in the correct order.",
        items: [
          "Work out the energy supplied, E = P t",
          "Set that energy equal to Q = m c theta_change",
          "Rearrange to make theta_change the subject",
          "Divide to find the temperature rise in C",
        ],
        ask: "You need to know the energy before you can use it, and you must rearrange the heat equation before you can divide for the answer. Put the steps in that order.",
        hints: [
          "Start by turning the power and time into an amount of energy with E equals P times t.",
          "Then equate that energy to m c times the change, rearrange, and finally divide.",
        ],
        explain: "First find the energy with E equals P times t, then set it equal to m c times the temperature change, rearrange to make the change the subject, and finally divide to get the rise in degrees.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of specific heat capacity.",
        segments: [
          "Specific heat capacity is the energy needed to raise ",
          " of a material by 1 degree. Water has a ",
          " value of 4200, so it heats up ",
          " than most materials.",
        ],
        bank: ["1 kg", "high", "slowly", "1 gram", "low", "quickly"],
        answer: ["1 kg", "high", "slowly"],
        ask: "Recall the mass that specific heat capacity is based on, whether 4200 is a large or small value, and what a large value does to how fast something heats.",
        hints: [
          "Specific heat capacity is always defined per 1 kilogram of material.",
          "4200 is a high value, and a high value means the material heats up slowly.",
        ],
        explain: "Specific heat capacity is the energy to raise 1 kilogram by 1 degree. Water's value of 4200 is high, so water heats up slowly and also cools slowly.",
      },
      {
        kind: "spoterror",
        prompt: "A block absorbs 3000 J and rises by 25 C. Its mass is 0.40 kg. Find its specific heat capacity. One line of this working is wrong.",
        lines: [
          "C = Q / theta_change",
          "C = 3000 / 25",
          "C = 120 J/C",
          "c = C / m",
          "c = 120 x 0.40 = 48 J/(kg C)",
        ],
        errorLine: 4,
        ask: "The first 3 lines find the heat capacity correctly. To get the specific heat capacity you divide the heat capacity by the mass, so check whether the last line divides or multiplies.",
        hints: [
          "Specific heat capacity is c equals C divided by m, so it should be 120 divided by 0.40.",
          "120 divided by 0.40 is 300, not 48. The last line multiplied instead of dividing.",
        ],
        working: [
          { label: "Formula", latex: "c = \\dfrac{C}{m}" },
          { label: "Substitute", latex: "c = \\dfrac{120}{0.40}" },
          { label: "Answer", latex: "c = 300\\ \\text{J/(kg\\,C)}" },
        ],
        explain: "The last line is wrong. It should divide the heat capacity by the mass, so 120 divided by 0.40 is 300 joules per kilogram degree, not multiply to give 48.",
      },
      {
        kind: "open",
        prompt: "Explain what is meant by the internal energy of a substance, and describe how it differs between a solid and a gas of the same material.",
        modelAnswer: "Internal energy is the total kinetic energy plus the total potential energy of all the particles in the substance. The kinetic part comes from the motion of the particles, and the potential part comes from the forces and separation between them. In a solid the particles only vibrate, so the kinetic energy is small, but they are held close by strong forces, giving a large potential energy. In a gas the particles move fast and are far apart with negligible forces, so the kinetic energy is large and the potential energy is very small. Temperature measures the average kinetic energy, so a hotter body has faster particles.",
        marks: [
          "Internal energy is total kinetic plus total potential energy of the particles.",
          "Kinetic energy comes from motion; potential energy from forces and separation.",
          "Solid: small kinetic, large potential; gas: large kinetic, negligible potential.",
        ],
        ask: "Think about the 2 energy stores every particle has, then compare how fast the particles move and how far apart they are in a solid versus a gas.",
      },
      {
        kind: "open",
        prompt: "Explain the difference between heat capacity and specific heat capacity, and say why water is often used in cooling systems.",
        modelAnswer: "Heat capacity C is the energy needed to raise the temperature of a whole body by 1 degree, found from C equals Q divided by the temperature change, in joules per degree. Specific heat capacity c is the energy needed to raise 1 kilogram of a material by 1 degree, found from Q equals m c times the temperature change, in joules per kilogram degree. The specific value depends only on the material, while the heat capacity depends on the mass as well. Water has a high specific heat capacity of 4200, so it can absorb a large amount of energy for only a small temperature rise, which makes it good for carrying heat away in cooling systems.",
        marks: [
          "Heat capacity C = Q / theta_change is per whole body, in J/C.",
          "Specific heat capacity is per 1 kg of material, Q = m c theta_change, in J/(kg C).",
          "Water has a high c, so it absorbs much energy per degree, useful for cooling.",
        ],
        ask: "One quantity is about the whole object and the other brings in the mass. Then think about what a large value of 4200 lets water do with energy.",
      },
    ],
  },
];
