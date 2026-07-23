import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, section 3. Grounded in KB Chapter 10 (Thermal Properties of Matter) section 10.4.
// CALCULATION section: heat-capacity problems as energy-conservation problems. Figure-light by design.

export const BOXES: Subconcept[] = [
  {
    id: "t9.3",
    code: "T9.3",
    title: "Energy conservation and heat capacity",
    blurb: "Where the heating energy comes from, and how much a substance warms",
    steps: [
      {
        kind: "concept",
        heading: "Energy in equals energy to warm",
        body: "A heat-capacity problem is really an *energy conservation* problem. Whatever energy a *source* delivers goes into warming the substance, so the energy supplied equals *m c theta_change*.",
        formula: {
          latex: "Q = m c \\,\\Delta\\theta",
          where: [
            { sym: "Q", meaning: "energy supplied to the substance", unit: "J" },
            { sym: "m", meaning: "mass", unit: "kg" },
            { sym: "c", meaning: "specific heat capacity", unit: "J/(kg C)" },
            { sym: "\\Delta\\theta", meaning: "temperature change", unit: "C" },
          ],
        },
        say: "Every heating question is just energy in equals energy stored. Whatever the source hands over, that same amount of energy warms the substance. So the energy supplied equals the mass times the specific heat capacity times the temperature change. Find the energy from the source, then divide by mass times c to get how many degrees it warms.",
      },
      {
        kind: "concept",
        heading: "Source 1: an electric heater",
        body: "An *electric heater* delivers energy at a steady *power*, so the energy it supplies is the *power* times the *time* it runs.",
        formula: {
          latex: "E = P t",
          where: [
            { sym: "E", meaning: "energy supplied", unit: "J" },
            { sym: "P", meaning: "power of the heater", unit: "W" },
            { sym: "t", meaning: "time it runs", unit: "s" },
          ],
        },
        say: "The first kind of source is an electric heater. Power is energy each second, so a heater rated at 1400 watts pours out 1400 joules every second. Multiply the power by the number of seconds it runs and you have the total energy delivered. Then set that energy equal to m c theta_change to find the temperature rise.",
      },
      {
        kind: "concept",
        heading: "Source 2: falling or moving",
        body: "Energy can also come from *motion*. Falling water loses gravitational *potential energy* m g h, and a moving object that stops loses its *kinetic energy* one half m v squared. That lost energy turns into internal energy and warms the substance.",
        formula: {
          latex: "E_p = mgh \\qquad E_k = \\tfrac{1}{2}mv^2",
          where: [
            { sym: "h", meaning: "height fallen", unit: "m" },
            { sym: "v", meaning: "speed before stopping", unit: "m/s" },
            { sym: "g", meaning: "gravitational field strength", unit: "N/kg" },
          ],
        },
        say: "The source need not be electrical. When water falls a height h, it loses gravitational potential energy, mass times g times h, and that energy warms the water at the bottom. When a moving object is brought to rest, it loses its kinetic energy, one half times mass times speed squared, and that heats the object itself. In both cases the lost mechanical energy becomes internal energy, so you set it equal to m c theta_change.",
      },
      {
        kind: "concept",
        heading: "Mixing: hot loses, cold gains",
        body: "When a hot substance meets a cold one, the *energy released* by the hotter equals the *energy absorbed* by the cooler, until both reach the same final temperature, called *thermal equilibrium*. For equal masses of the same material, the final temperature is simply the *average*.",
        say: "When you mix a hot and a cold sample, no energy escapes: the energy the hot one gives out equals the energy the cold one takes in, and they settle at one shared final temperature we call thermal equilibrium. If the 2 samples have equal mass and are the same material, the drops and rises must be equal, so the final temperature is just the average of the 2 starting temperatures.",
      },
      {
        kind: "choice",
        question: "A 1400 W heater runs for 60 s in 1.0 kg of water (c = 4200 J/(kg C)). Find the temperature rise.",
        options: ["40 C", "10 C", "20 C", "84 C"],
        correct: 2,
        ask: "First find the energy: power times time, so 1400 times 60. Then divide that energy by mass times c, which is 1.0 times 4200.",
        hints: [
          "Energy supplied is 1400 times 60, which is 84000 joules.",
          "Temperature change is 84000 divided by 1.0 times 4200, and 84000 divided by 4200 is 20.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{Pt}{mc}" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{1400 \\times 60}{1.0 \\times 4200}" },
          { label: "Answer", latex: "\\Delta\\theta = 20\\ \\text{C}" },
        ],
        explain: "The rise is 20 degrees, because the heater supplies 84000 joules and 84000 divided by 1.0 times 4200 is 20.",
      },
      {
        kind: "choice",
        question: "Water falls h = 210 m down a waterfall (g = 10 N/kg, c = 4200 J/(kg C)). All the lost potential energy warms the water. Find the temperature rise.",
        options: ["2.0 C", "0.5 C", "1.0 C", "0.25 C"],
        correct: 1,
        ask: "Set the lost potential energy m g h equal to m c theta_change. The mass cancels, so the rise is g times h divided by c.",
        hints: [
          "Because m appears on both sides, theta_change is g h over c.",
          "That is 10 times 210 divided by 4200, and 2100 divided by 4200 is 0.5.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{gh}{c}" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{10 \\times 210}{4200}" },
          { label: "Answer", latex: "\\Delta\\theta = 0.5\\ \\text{C}" },
        ],
        explain: "The rise is 0.5 degrees, because the mass cancels and 10 times 210 divided by 4200 is 0.5.",
      },
      {
        kind: "slider",
        prompt: "A moving object hits a wall at v = 20 m/s and stops. All its kinetic energy heats the object (c = 500 J/(kg C)). Set the slider to the temperature rise, in C.",
        min: 0,
        max: 2,
        step: 0.1,
        unit: "C",
        start: 0,
        targetMin: 0.35,
        targetMax: 0.45,
        ask: "Set the lost kinetic energy one half m v squared equal to m c theta_change. The mass cancels, so the rise is one half v squared divided by c.",
        hints: [
          "v squared is 20 times 20, which is 400, and half of that is 200.",
          "Then 200 divided by 500 is 0.4, so slide to 0.4 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\Delta\\theta = \\dfrac{\\frac{1}{2}v^2}{c}" },
          { label: "Substitute", latex: "\\Delta\\theta = \\dfrac{0.5 \\times 400}{500}" },
          { label: "Answer", latex: "\\Delta\\theta = 0.4\\ \\text{C}" },
        ],
        explain: "The rise is 0.4 degrees, because the mass cancels and 0.5 times 400 divided by 500 is 0.4.",
      },
      {
        kind: "choice",
        question: "0.20 kg of water at 80 C is mixed with 0.20 kg of water at 20 C. Find the final temperature at thermal equilibrium.",
        options: ["100 C", "60 C", "30 C", "50 C"],
        correct: 3,
        ask: "The masses are equal and it is the same water, so the energy the hot side gives out equals the energy the cold side takes in with the same m and c. That means the final temperature is the average of the 2 starting temperatures.",
        hints: [
          "Equal masses of the same material settle at the average temperature.",
          "The average of 80 and 20 is 100 divided by 2, which is 50.",
        ],
        working: [
          { label: "Formula", latex: "mc(\\theta_{hot} - \\theta_f) = mc(\\theta_f - \\theta_{cold})" },
          { label: "Substitute", latex: "\\theta_f = \\dfrac{80 + 20}{2}" },
          { label: "Answer", latex: "\\theta_f = 50\\ \\text{C}" },
        ],
        explain: "The final temperature is 50 degrees, because equal masses of the same water share the energy equally, so it settles at the average of 80 and 20.",
      },
      {
        kind: "insight",
        body: "Every heating calculation is *energy conservation*: track where the energy comes from, whether a *heater*, a *fall*, or lost *motion*, then set that energy equal to m c theta_change.",
        say: "Here is the idea to carry away. There is really only one heating equation, m c theta_change, and the whole skill is spotting where the energy comes from. A heater gives power times time, falling water gives m g h, a stopping object gives one half m v squared, and in mixing the hot side simply hands its energy to the cold side. Find the energy, set it equal to m c theta_change, and solve.",
      },
    ],
  },
];
