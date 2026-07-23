import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, section 3. Grounded in KB Chapter 18 (Practical Electricity) section 18.3.
// Conceptual: fuses, circuit breakers, earthing and double insulation. No formula, no working.
// Mains wire colours follow the standard key: live = brown, neutral = blue, earth = green and yellow;
// casings, the consumer unit and the plug body = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t16.3",
    code: "T16.3",
    title: "Safe use: fuses, circuit breakers, earthing, double insulation",
    blurb: "The four safety features that stop a fault from overheating a cable or shocking a person",
    steps: [
      {
        kind: "concept",
        heading: "The fuse",
        body: "A *fuse* is a thin piece of wire that *melts* when the current goes above its *rating*, breaking the circuit before the cables overheat. The rating is chosen just above the appliance's *normal* current.",
        say: "A fuse is your first line of defence. It is just a thin piece of wire built to melt easily. While the current stays normal it carries it happily, but if a fault sends the current above the fuse's rating, the wire gets so hot it melts and snaps. That breaks the circuit and cuts the power before the thick cables in the wall can overheat and start a fire. You pick a rating a little above the appliance's usual current, so normal running does not blow it but a real fault does.",
      },
      {
        kind: "concept",
        heading: "The circuit breaker",
        figure: "fig-18-02-circuit-breaker-box",
        body: "A *circuit breaker* sits in the consumer unit, in the *live* wire, and *trips* on a large current. Unlike a fuse, it can be *reset and reused* once the fault is fixed.",
        say: "The picture shows the consumer unit, a white and grey box on the wall where the mains comes in. On the left is the main switch that turns everything off. Next to it sit several miniature circuit breakers, the MCBs, one for each circuit, and an earth leakage circuit breaker, the ELCB. Each breaker watches the current in the live wire. If the current gets too large it trips, springing a switch open and cutting the power in an instant. The big advantage over a fuse is that nothing melts. Once you have found and fixed the fault, you simply flick the breaker back on and use it again.",
      },
      {
        kind: "concept",
        heading: "Earthing",
        figure: "fig-18-03-earthing-comparison",
        body: "*Earthing* connects the metal *casing* to the ground through a low-resistance *earth wire*, so if the live wire touches the casing the fault current is *diverted* safely to earth instead of through a person.",
        say: "This figure shows the same appliance twice. On the left there is no earth wire. A fault has let the brown live wire touch the metal casing, so the whole casing is now live. When a person touches it, the current flows through their body to the ground and they get a shock. On the right the metal casing is joined to the green earth wire. Now if the casing goes live, the current rushes down that low-resistance earth wire straight to the ground instead of through the person. The surge of current also blows the fuse or trips the breaker, so the appliance switches off and nobody is shocked.",
      },
      {
        kind: "concept",
        heading: "Double insulation",
        body: "*Double insulation* means 2 layers of insulation and a plastic outer casing, so no exposed metal can ever become live. Because of this no *earth wire* is needed and a *2-pin* plug is used.",
        say: "Some appliances, like many hairdryers and drills, are made so they need no earth wire at all. They use double insulation, which means 2 separate layers of insulating material between the live parts and your hand, wrapped in a plastic outer casing. Because there is no metal on the outside, nothing can ever become live for you to touch. With no metal to make safe, there is no need for an earth wire, so these appliances run on a simple 2-pin plug with only the live and neutral wires.",
      },
      {
        kind: "match",
        prompt: "Match each safety feature to how it protects the user.",
        pairs: [
          { left: "Fuse", right: "Its thin wire melts when the current is too large" },
          { left: "Circuit breaker", right: "Trips on a large current and can be reset" },
          { left: "Earthing", right: "Diverts fault current safely to the ground" },
          { left: "Double insulation", right: "No exposed metal, so nothing can go live" },
        ],
        ask: "Think about what each feature actually does when a fault happens. One melts, one trips and resets, one gives current a path to the ground, and one has no metal to touch.",
        hints: [
          "A fuse melts while a circuit breaker trips and can be switched back on.",
          "Earthing sends fault current to the ground, and double insulation means no exposed metal at all.",
        ],
        explain: "A fuse melts to break the circuit and a circuit breaker trips and can be reset. Earthing diverts fault current to the ground, while double insulation removes any exposed metal so nothing can go live.",
      },
      {
        kind: "choice",
        question: "What happens inside a fuse when the current rises above its rating?",
        options: [
          "It stores the extra charge for later use",
          "It increases the voltage across the appliance",
          "Its thin wire melts and breaks the circuit",
          "It cools the cable to keep it safe",
        ],
        correct: 2,
        ask: "A fuse is a thin wire chosen to be the weakest point. Think about what heat does to a thin wire when too much current flows.",
        hints: [
          "The fuse is designed to fail before the thick cables can overheat.",
          "A thin wire carrying too much current gets hot enough to melt, and that opens the circuit.",
        ],
        explain: "The thin fuse wire melts and breaks the circuit. This cuts off the current before the cables overheat, so a fuse does not store charge or change the voltage.",
      },
      {
        kind: "choice",
        question: "How does earthing protect a person who touches a faulty metal-cased appliance?",
        options: [
          "It adds a high-resistance wire that blocks the current",
          "It gives the fault current a low-resistance path to the ground",
          "It stores the fault current inside the metal casing",
          "It raises the current in the live wire",
        ],
        correct: 1,
        ask: "The earth wire has a very low resistance and is joined to the ground. Think about which path the current would rather take, the wire or the person.",
        hints: [
          "Current prefers the easiest, lowest-resistance route to the ground.",
          "The earth wire offers far less resistance than a person's body, so the current goes down it instead.",
        ],
        explain: "Earthing gives the fault current a low-resistance path to the ground. The current floods down the earth wire instead of through the person, and the surge blows the fuse or trips the breaker.",
      },
      {
        kind: "classify",
        prompt: "Sort each appliance by whether it needs an earth wire.",
        bins: ["Needs an earth wire", "No earth wire needed"],
        items: [
          { text: "A metal-cased electric kettle", bin: 0 },
          { text: "A toaster with exposed metal parts", bin: 0 },
          { text: "A double-insulated hairdryer with a plastic casing", bin: 1 },
          { text: "An appliance with a 2-pin plug and 2 layers of insulation", bin: 1 },
        ],
        ask: "Ask whether the appliance has metal on the outside that could become live. If it does, it needs earthing. If it is double insulated in plastic, it does not.",
        hints: [
          "Anything with an exposed metal casing must be earthed for safety.",
          "A double-insulated appliance has a plastic casing and a 2-pin plug, so it needs no earth wire.",
        ],
        explain: "Appliances with exposed metal casings, like a kettle or a metal toaster, must be earthed. Double-insulated appliances have a plastic casing and 2 layers of insulation, so no metal can go live and no earth wire is needed.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this description of a fuse is wrong. Find it.",
        lines: [
          "A fuse is a thin piece of wire with a low melting point.",
          "A fuse is a source of e.m.f. that drives the current round the circuit.",
          "When the current rises above the rating, the fuse wire melts.",
          "This breaks the circuit before the cables can overheat.",
        ],
        errorLine: 1,
        ask: "A fuse only protects the circuit, it never supplies energy. Check the line that claims the fuse does something a cell or battery would do.",
        hints: [
          "A source of e.m.f. pushes current round a circuit, and that is the job of a cell, not a fuse.",
          "Line 1 wrongly calls the fuse a source of e.m.f., but a fuse is a passive safety device.",
        ],
        explain: "The wrong line says a fuse is a source of e.m.f. A fuse supplies no energy at all. It is a passive safety device, a thin wire that melts to break the circuit when the current is too large.",
      },
      {
        kind: "insight",
        body: "Fuses and circuit breakers cut the *current* when it is too large, earthing gives fault current a safe path to the *ground*, and double insulation removes any *exposed metal*. Together they stop a fault from causing a *fire* or a shock.",
        say: "Keep the whole picture in mind. A fuse or a circuit breaker watches the size of the current and cuts it off if it grows dangerous, one by melting, the other by tripping so you can reset it. Earthing handles the case where a metal casing goes live, giving that fault current an easy path to the ground instead of through you. Double insulation dodges the problem entirely by having no exposed metal at all. Each one guards against overheating cables or a deadly shock in its own way.",
      },
    ],
  },
];
