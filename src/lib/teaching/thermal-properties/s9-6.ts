import type { Subconcept } from "@/lib/teaching/subconcepts";

// T9 Thermal Properties of Matter, section 6. Grounded in KB Chapter 10 (Thermal Properties) section 10.7.
// Conceptual only (no calculation). Figure colour key: liquid = blue, the fast escaping particles = green,
// container outlines = grey/white.

export const BOXES: Subconcept[] = [
  {
    id: "t9.6",
    code: "T9.6",
    title: "Boiling and evaporation",
    blurb: "Two ways a liquid turns into a gas, and why one of them cools",
    steps: [
      {
        kind: "concept",
        heading: "Two ways to become a gas",
        body: "A liquid can turn into a gas by *boiling* or by *evaporation*. Both make vapour, but they happen at different *temperatures* and in different *places*.",
        say: "There are 2 different ways a liquid can turn into a gas. One is boiling, the other is evaporation. They both end with vapour in the air, but they do not happen at the same temperature, and they do not happen in the same part of the liquid. The rest of this box is about telling them apart.",
      },
      {
        kind: "concept",
        heading: "Boiling",
        body: "*Boiling* happens only at the fixed *boiling point*, all the way *throughout* the whole liquid, at a *constant* temperature, and it is fast. Bubbles of vapour form deep inside the liquid, not just at the top.",
        say: "Boiling only starts once the liquid reaches its boiling point, a fixed temperature for each liquid. Once it does, the change happens throughout the whole body of the liquid, which is why you see bubbles forming right down at the bottom of the pan. The temperature stays constant while it boils, and boiling is fast.",
      },
      {
        kind: "concept",
        heading: "Evaporation",
        figure: "fig-10-09-evaporation",
        body: "*Evaporation* happens at any temperature *below* the boiling point, only at the *surface* of the liquid, and it is slow. It also produces a *cooling effect* on the liquid left behind.",
        say: "Evaporation is different. It goes on at any temperature below the boiling point, so a puddle can dry up on a cool day without ever boiling. In the picture a body of blue liquid sits with air above it, and only the fastest particles at the very top surface, drawn in green, break free and escape into the air. It happens only at the surface, it is slow, and it leaves the liquid a little cooler than before.",
      },
      {
        kind: "concept",
        heading: "Why evaporation cools",
        body: "During evaporation the *fastest* surface particles, the ones with the *highest kinetic energy*, escape. So the *average* kinetic energy of the particles left behind falls, and a lower average kinetic energy means a lower *temperature*.",
        say: "Here is the reason evaporation cools. Only the fastest particles, the ones with the most kinetic energy, have enough energy to break free at the surface. When those quick ones leave, the slower ones are all that remain, so the average kinetic energy of the liquid drops. Temperature is just a measure of that average kinetic energy, so the liquid cools down. This is why sweat cools you and why you feel cold stepping out of a pool.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement under the process it describes.",
        bins: ["Boiling", "Evaporation"],
        items: [
          { text: "Happens only at the fixed boiling point", bin: 0 },
          { text: "Takes place throughout the whole liquid", bin: 0 },
          { text: "A fast process", bin: 0 },
          { text: "Happens at any temperature below the boiling point", bin: 1 },
          { text: "Takes place only at the surface", bin: 1 },
          { text: "A slow process that cools the liquid", bin: 1 },
        ],
        ask: "For each statement ask 2 things: does it need the fixed boiling point, and does it happen throughout the liquid or only at the surface. Tap each one and drop it in its bin.",
        hints: [
          "Boiling needs the boiling point, works throughout the liquid, and is fast.",
          "Evaporation works below the boiling point, only at the surface, is slow, and cools the liquid.",
        ],
        explain: "Boiling happens only at the fixed boiling point, throughout the whole liquid, and is fast. Evaporation happens below the boiling point, only at the surface, is slow, and leaves the liquid cooler.",
      },
      {
        kind: "choice",
        question: "Why does evaporation produce a cooling effect on the liquid left behind?",
        options: [
          "The liquid gives out light as particles leave",
          "Cold air sinks down into the liquid from above",
          "The fastest particles escape, so the average kinetic energy of those left falls",
          "Evaporation adds kinetic energy to the particles that stay",
        ],
        correct: 2,
        ask: "Think about which particles have enough energy to escape at the surface, and what that leaves behind for the average.",
        hints: [
          "Only the particles with the highest kinetic energy can break free at the surface.",
          "If the fastest ones leave, the average kinetic energy of the rest goes down, and temperature measures that average.",
        ],
        explain: "The fastest, highest kinetic energy particles escape at the surface. That lowers the average kinetic energy of the particles left behind, and a lower average kinetic energy means a lower temperature, so the liquid cools.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by its effect on how fast a liquid evaporates.",
        bins: ["Speeds up evaporation", "Slows down evaporation"],
        items: [
          { text: "Warming the liquid", bin: 0 },
          { text: "Blowing a draught of air across the surface", bin: 0 },
          { text: "Spreading the liquid into a wide, shallow puddle", bin: 0 },
          { text: "Very humid air just above the liquid", bin: 1 },
          { text: "Sealing the liquid under higher pressure", bin: 1 },
          { text: "Still, damp air on a cold day", bin: 1 },
        ],
        ask: "Evaporation is faster with a higher temperature, more wind, a larger surface area, lower humidity, and lower pressure. Tap each change and drop it in its bin.",
        hints: [
          "Warmth, wind and a wider surface all help the fast particles escape.",
          "Humid air and higher pressure make it harder for particles to leave, so they slow evaporation.",
        ],
        explain: "Warming the liquid, blowing air across it, and spreading it over a larger surface all speed evaporation up. Humid air, higher pressure and still, damp cold air all slow it down.",
      },
      {
        kind: "choice",
        question: "Which statement gives a true difference between boiling and evaporation?",
        options: [
          "Boiling happens only at the surface; evaporation happens throughout the liquid",
          "Boiling happens only at the fixed boiling point; evaporation happens at any temperature below it",
          "Boiling is slow; evaporation is fast",
          "Boiling cools the liquid; evaporation heats it up",
        ],
        correct: 1,
        ask: "Check each claim against what you know: where each process happens, at what temperature, and how fast.",
        hints: [
          "Boiling is throughout the liquid and fast; evaporation is at the surface and slow, so options about those are the wrong way round.",
          "The clean difference is the temperature: boiling needs the boiling point, evaporation works below it.",
        ],
        explain: "Boiling only happens at the fixed boiling point, while evaporation happens at any temperature below it. The other options swap round where each occurs, how fast they are, or which one cools.",
      },
      {
        kind: "choice",
        question: "At what temperature can evaporation take place?",
        options: [
          "Only at the boiling point",
          "Only above the boiling point",
          "Only at 0 degrees Celsius",
          "At any temperature below the boiling point",
        ],
        correct: 3,
        ask: "Remember that a wet puddle can dry up on an ordinary cool day, long before anything boils.",
        hints: [
          "Boiling is the process fixed to the boiling point, not evaporation.",
          "Evaporation goes on at ordinary temperatures, anywhere below the boiling point.",
        ],
        explain: "Evaporation can happen at any temperature below the boiling point. That is why washing dries and puddles disappear without ever reaching the boiling point.",
      },
      {
        kind: "open",
        prompt: "Compare boiling and evaporation, giving three ways in which they differ.",
        modelAnswer: "Boiling happens only at the fixed boiling point, while evaporation happens at any temperature below the boiling point. Boiling takes place throughout the whole liquid, with bubbles forming inside it, while evaporation takes place only at the surface. Boiling is fast, while evaporation is slow and produces a cooling effect on the liquid because its fastest particles escape and lower the average kinetic energy of those left behind.",
        marks: [
          "Boiling occurs at the fixed boiling point; evaporation occurs at any temperature below it.",
          "Boiling occurs throughout the liquid; evaporation occurs only at the surface.",
          "Boiling is fast; evaporation is slow and cools the liquid.",
        ],
        ask: "For each of the 3 differences, contrast the temperature, the place it happens, and the speed or cooling effect.",
      },
      {
        kind: "insight",
        body: "Both *boiling* and *evaporation* turn liquid into gas, but boiling is fixed to the boiling point and works throughout, while evaporation works at the *surface* at any lower temperature and leaves the liquid cooler.",
        say: "Hold on to this. Boiling and evaporation both make vapour, but boiling is locked to the boiling point and bubbles up throughout the liquid, whereas evaporation quietly works at the surface at any lower temperature. And because evaporation lets the fastest particles escape, it always leaves the liquid behind a little cooler.",
      },
    ],
  },
];
