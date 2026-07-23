import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, section 4. Grounded in KB Chapter 18 (Practical Electricity) section 18.4.
// Mains wire colours follow the standard key drawn by the plug figures: the LIVE wire = brown,
// the NEUTRAL wire = blue, the EARTH wire = green and yellow; the plug body and casing = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t16.4",
    code: "T16.4",
    title: "Wiring a mains plug",
    blurb: "The 3 wires in a plug, their colours and jobs, and where safety devices go",
    steps: [
      {
        kind: "concept",
        heading: "The 3 wires of a plug",
        figure: "fig-18-04-3-pin-plug",
        body: "A 3-pin plug carries 3 wires, each a fixed colour. The *live* wire is brown, the *neutral* wire is blue, and the *earth* wire is green and yellow.",
        say: "The figure shows a 3-pin plug opened up. The brown live wire connects to one pin, the blue neutral wire to another, and the green and yellow earth wire to the top pin. A fuse sits in the brown live wire. At the bottom a cord grip clamps the outer cable sleeve so the wires cannot be tugged loose. Learn the 3 colours: live is brown, neutral is blue, earth is green and yellow.",
      },
      {
        kind: "concept",
        heading: "Working circuit and safety path",
        body: "The *live* and *neutral* wires form the *working circuit* that carries the current round the appliance. The *earth* wire carries no current normally and only conducts if a fault makes the metal casing live.",
        say: "In normal use current flows in through the brown live wire and back out through the blue neutral wire, so those 2 wires are the working circuit. The green and yellow earth wire is a spare safety path. It stays at 0 volts and carries no current until something goes wrong, such as the live wire touching the metal casing, when it whisks the current safely away to the ground.",
      },
      {
        kind: "concept",
        heading: "Safety devices go in the live wire",
        figure: "fig-18-05-safety-live-vs-neutral",
        body: "*Fuses*, switches and circuit breakers must go in the *live* wire, so a fault cuts the appliance off from the high voltage. Placed in the *neutral* wire they would leave the casing still connected to the live wire, so a person could be shocked.",
        say: "The figure compares 2 wirings. On the left the safety device sits in the brown live wire. When it opens, the appliance is cut off from the dangerous high voltage and is safe to touch. On the right the device sits in the blue neutral wire. Even when it opens, the casing is still joined to the live wire at high voltage, so a person can still get a shock. Always put the fuse or switch in the live wire.",
      },
      {
        kind: "concept",
        heading: "Voltages in a 230 volt supply",
        body: "In a 230 V supply the *live* wire sits at a high voltage while the *neutral* and *earth* wires sit near 0 V.",
        say: "Think of the voltages between the 3 wires. Between the live wire and the neutral wire there is the full 230 volts, which drives the current. Between the earth wire and the neutral wire there is 0 volts, because both sit near ground. Between the earth wire and the live wire there is again 230 volts, since the live wire is the high one.",
      },
      {
        kind: "match",
        prompt: "Match each mains wire to its colour and its job.",
        pairs: [
          { left: "Live wire", right: "Brown, brings the current in at high voltage" },
          { left: "Neutral wire", right: "Blue, returns the current at near 0 V" },
          { left: "Earth wire", right: "Green and yellow, a safety path at 0 V" },
        ],
        ask: "Start from the colours you learned: live is brown, neutral is blue, earth is green and yellow. Then think what each one does.",
        hints: [
          "The live wire is the brown one and carries the high voltage in.",
          "The blue neutral wire returns the current, and the green and yellow earth wire is the safety path.",
        ],
        explain: "The live wire is brown and brings the current in at high voltage. The neutral wire is blue and returns the current at near 0 volts. The earth wire is green and yellow and acts as a safety path at 0 volts.",
      },
      {
        kind: "choice",
        question: "In which wire must the fuse and the on-off switch be placed?",
        figure: "fig-18-05-safety-live-vs-neutral",
        options: ["The neutral wire", "The earth wire", "The live wire", "Either the live or the neutral wire"],
        correct: 2,
        ask: "The device must cut the appliance off from the high voltage when it opens. Which wire carries that high voltage?",
        hints: [
          "The high voltage is on the live wire.",
          "If the switch were in the neutral wire, the casing would stay connected to the live wire and could still shock someone.",
        ],
        explain: "The fuse and switch go in the live wire, because opening the live wire cuts the appliance off from the high voltage. In the neutral wire they would leave the casing live and a person could still be shocked.",
      },
      {
        kind: "choice",
        question: "What is the job of the earth wire in a plug?",
        figure: "fig-18-04-3-pin-plug",
        options: [
          "It carries the current back to the mains during normal use",
          "It carries no current normally and only conducts on a fault, giving current a safe path to the ground",
          "It supplies the high voltage that drives the appliance",
          "It stores charge until the appliance is switched on",
        ],
        correct: 1,
        ask: "The earth wire is a safety wire, not part of the everyday circuit. When does it actually carry current?",
        hints: [
          "In normal use the live and neutral wires do all the work.",
          "The earth wire only conducts when a fault makes the casing live, sending that current safely to the ground.",
        ],
        explain: "The earth wire carries no current in normal use. It only conducts if a fault makes the casing live, and then it gives the current a safe low-resistance path to the ground instead of through a person.",
      },
      {
        kind: "cloze",
        prompt: "Fill in the standard colours of the 3 mains wires.",
        segments: ["The live wire is ", ", the neutral wire is ", ", and the earth wire is ", "."],
        bank: ["brown", "blue", "green and yellow", "red", "black"],
        answer: ["brown", "blue", "green and yellow"],
        ask: "Recall the colour key from the plug figure: one wire is brown, one is blue, and one is green and yellow.",
        hints: [
          "The live wire is brown and the neutral wire is blue.",
          "That leaves green and yellow for the earth wire.",
        ],
        explain: "The live wire is brown, the neutral wire is blue, and the earth wire is green and yellow.",
      },
      {
        kind: "choice",
        question: "In a 230 V mains supply, what are the voltages between live and neutral, and between earth and neutral?",
        options: [
          "Live to neutral is 230 V; earth to neutral is 0 V",
          "Live to neutral is 0 V; earth to neutral is 230 V",
          "Live to neutral is 115 V; earth to neutral is 115 V",
          "Live to neutral is 230 V; earth to neutral is 230 V",
        ],
        correct: 0,
        ask: "The live wire is the high one and both the neutral and earth wires sit near 0 volts. Work out each pair from that.",
        hints: [
          "Between the live wire and the neutral wire is the full supply, 230 volts.",
          "The earth and neutral wires are both near 0 volts, so between them is 0 volts.",
        ],
        explain: "Live to neutral is 230 volts, the full supply that drives the current. Earth to neutral is 0 volts, because both wires sit near ground.",
      },
      {
        kind: "insight",
        body: "Name the wire by its *colour*, and remember that only the *live* wire is dangerous, so every fuse and switch belongs there.",
        say: "Here is the idea to keep. Brown is live, blue is neutral, green and yellow is earth. The live wire is the one at high voltage, so it is the dangerous one, and that is exactly why the fuse and switch must sit in the live wire. Break the live wire and you break the danger.",
      },
    ],
  },
];
