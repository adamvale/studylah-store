import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, Revision 2. Checkpoint over KB Chapter 18,
// sections t16.3 to t16.5: safety devices, wiring a mains plug, and the
// dangers of electricity. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t16.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: safety devices, plug wiring and dangers",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "What does a fuse do when the current through it rises above its rating?",
        options: [
          "It stores charge to release later",
          "Its thin wire melts and breaks the circuit",
          "It raises the supply voltage",
          "It cools the cable down",
        ],
        correct: 1,
        ask: "A fuse is a deliberately thin piece of wire. Ask what happens to it when too much current heats it up. Which option is that?",
        hints: [
          "Too large a current heats the thin fuse wire strongly.",
          "The fuse wire melts and creates a gap, so the circuit is broken before the cables overheat.",
        ],
        explain: "The thin fuse wire melts and breaks the circuit, because a current above its rating heats it until it melts. This cuts off the supply before the cables can overheat and start a fire.",
      },
      {
        kind: "choice",
        question: "How does earthing protect a person who touches an appliance with a metal casing?",
        figure: "fig-18-03-earthing-comparison",
        options: [
          "It makes the casing store less charge",
          "It raises the resistance of the casing",
          "It doubles the supply voltage",
          "It gives a fault current a low-resistance path to the ground",
        ],
        correct: 3,
        ask: "The earth wire joins the metal casing to the ground. Ask which way a fault current would rather flow: through a low-resistance wire or through a person. Which option is that?",
        hints: [
          "The earth wire has a very low resistance compared with a human body.",
          "If the live wire touches the casing, the fault current flows down the earth wire to the ground instead of through a person.",
        ],
        explain: "Earthing gives a fault current a low-resistance path to the ground. If the live wire touches the casing, the current flows safely down the earth wire instead of through the person, and the large current also blows the fuse.",
      },
      {
        kind: "choice",
        question: "In a correctly wired mains plug, which wire contains the fuse?",
        figure: "fig-18-04-three-pin-plug",
        options: [
          "The live wire",
          "The neutral wire",
          "The earth wire",
          "Any of the 3 wires",
        ],
        correct: 0,
        ask: "The fuse must cut the appliance off from the high voltage when it blows. Ask which wire carries that high voltage from the mains. Which option is that?",
        hints: [
          "The live wire is the one that carries the high voltage in from the mains.",
          "Placing the fuse in the live wire means that when it blows the appliance is disconnected from the high voltage.",
        ],
        explain: "The fuse goes in the live wire, because that is the wire carrying the high voltage from the mains. When the fuse blows it disconnects the appliance from the live supply, so the casing cannot stay live.",
      },
      {
        kind: "choice",
        question: "Why is it dangerous to touch an electrical switch with wet hands?",
        options: [
          "Water cools the wires too quickly",
          "Pure water is a very strong conductor",
          "Water with dissolved salts conducts through its ions",
          "Water blocks the current completely",
        ],
        correct: 2,
        ask: "Tap water is not pure. Ask what dissolved substances add to the water that let it carry a current. Which option is that?",
        hints: [
          "Everyday water contains dissolved salts, not just pure water molecules.",
          "The dissolved salts provide ions, which are charged and let the water conduct, so a shock is far more likely.",
        ],
        explain: "Water with dissolved salts conducts through its ions. The dissolved salts release charged ions, so wet skin lets current pass easily and makes a shock much more likely. Keeping hands dry breaks this path.",
      },
      {
        kind: "choice",
        question: "A person receives an electric shock when they...",
        options: [
          "stand on a dry rubber mat near a socket",
          "wear rubber gloves to handle a wire",
          "touch an earth wire that carries no current",
          "complete a circuit between a live conductor and the ground",
        ],
        correct: 3,
        ask: "A current only flows through a person if there is a complete loop. Ask between which 2 points that loop must form. Which option is that?",
        hints: [
          "Rubber is an insulator, so standing on rubber or wearing rubber gloves breaks the path to earth.",
          "A shock needs a complete circuit, so current flows in through a live conductor and out to the ground through the body.",
        ],
        explain: "A shock happens when a person completes a circuit between a live conductor and the ground, so current passes through the body to earth. Rubber mats and gloves are insulators that break this path, so they prevent a shock.",
      },
      {
        kind: "match",
        prompt: "Match each safety feature to the way it protects the user.",
        pairs: [
          { left: "Fuse", right: "melts to break the circuit when the current is too large" },
          { left: "Circuit breaker", right: "trips off on a large current and can be reset afterwards" },
          { left: "Earthing", right: "gives a fault current a low-resistance path to the ground" },
          { left: "Double insulation", right: "a plastic outer casing so no metal part can become live" },
        ],
        ask: "For each feature, ask what physically happens during a fault: does something melt, switch off, divert current, or cover the metal? Then join the pairs.",
        hints: [
          "One device is a thin wire that melts, and another is a switch that trips and can be switched back on.",
          "Earthing is about diverting current to the ground, while double insulation is about having no exposed metal at all.",
        ],
        explain: "A fuse melts to break the circuit, a circuit breaker trips and can be reset, earthing diverts a fault current to the ground along a low-resistance wire, and double insulation surrounds the appliance in plastic so no metal can become live.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement under the device it describes.",
        bins: ["Fuse", "Circuit breaker"],
        items: [
          { text: "melts when the current is too large", bin: 0 },
          { text: "must be replaced after it operates", bin: 0 },
          { text: "is a thin wire in the live line", bin: 0 },
          { text: "trips and switches the circuit off", bin: 1 },
          { text: "can be reset and used again", bin: 1 },
          { text: "sits in the consumer unit", bin: 1 },
        ],
        ask: "For each statement ask whether it describes something that melts once and is thrown away, or a switch that can be reset. Drop each one in its bin.",
        hints: [
          "A fuse is a thin wire that melts, so once it has operated it has to be replaced.",
          "A circuit breaker is a switch that trips, so after a fault it can simply be reset and used again.",
        ],
        explain: "A fuse melts when the current is too large, has to be replaced, and is a thin wire in the live line. A circuit breaker trips off, can be reset and reused, and sits in the consumer unit.",
      },
      {
        kind: "cloze",
        prompt: "Complete the description of the wires in a mains plug.",
        segments: [
          "The live wire is coloured ",
          ", the neutral wire is coloured ",
          ", and the earth wire is coloured ",
          ". The fuse is always fitted in the ",
          " wire.",
        ],
        bank: ["brown", "blue", "green and yellow", "live", "neutral", "red"],
        answer: ["brown", "blue", "green and yellow", "live"],
        ask: "Recall the standard colour of each of the 3 wires, and remember which single wire holds the fuse.",
        hints: [
          "The live wire is brown, the neutral wire is blue, and the earth wire is green and yellow.",
          "The fuse guards the wire that carries the high voltage in, which is the live wire.",
        ],
        explain: "The live wire is brown, the neutral wire is blue and the earth wire is green and yellow. The fuse is fitted in the live wire so that when it blows the appliance is cut off from the high voltage.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this summary of plug wiring is wrong. Find it.",
        lines: [
          "A 3-pin plug has a live wire, a neutral wire and an earth wire.",
          "The fuse is fitted in the neutral wire.",
          "Earthing gives a fault current a low-resistance path to the ground.",
          "A circuit breaker can be reset after it trips.",
        ],
        errorLine: 1,
        ask: "Check the line about the fuse. Ask which wire must be broken so the appliance is cut off from the high voltage.",
        hints: [
          "The fuse and switch must disconnect the appliance from the high voltage during a fault.",
          "The high voltage is on the live wire, so the fuse belongs in the live wire, not the neutral wire.",
        ],
        explain: "The wrong line says the fuse is fitted in the neutral wire. The fuse must go in the live wire, so that when it blows the appliance is disconnected from the high voltage and the casing cannot stay live.",
      },
      {
        kind: "tiles",
        prompt: "3 appliances on one plug draw 3 A, 3 A and 5 A. Build the line that gives the total current the fuse must carry.",
        tiles: ["I =", "3", "+", "3", "+", "5", "=", "11", "A", "13", "10"],
        answer: ["I =", "3", "+", "3", "+", "5", "=", "11", "A"],
        ask: "Add the 3 currents to find the total the plug carries. Set up 3 + 3 + 5.",
        hints: [
          "The total current is the sum of the 3 appliance currents.",
          "3 + 3 + 5 is 11, so the plug carries 11 amperes.",
        ],
        working: [
          { label: "Formula", latex: "I = I_1 + I_2 + I_3" },
          { label: "Substitute", latex: "I = 3 + 3 + 5" },
          { label: "Answer", latex: "I = 11\\ \\text{A}" },
        ],
        explain: "The plug carries 11 amperes, because 3 + 3 + 5 is 11. A fuse must be rated just above this, so from the standard ratings of 1, 2, 5, 10 and 13 amperes the 13 ampere fuse is chosen.",
      },
      {
        kind: "open",
        prompt: "A metal kettle develops a fault so that the live wire touches the metal casing. Explain how the earth wire and the fuse work together to keep the user safe.",
        modelAnswer: "The earth wire is connected to the metal casing and provides a low-resistance path to the ground. When the live wire touches the casing, a large current flows through the earth wire to earth instead of through a person who touches the kettle. This large current is well above the fuse rating, so the fuse wire melts and breaks the live wire. The appliance is then disconnected from the supply and the casing is no longer live.",
        marks: [
          "The earth wire gives the casing a low-resistance path to the ground.",
          "A large fault current flows to earth rather than through the person.",
          "The large current melts the fuse, which breaks the live wire and cuts off the supply.",
        ],
        ask: "Follow the fault current. Ask where it goes because of the earth wire, and what that large current then does to the fuse in the live wire.",
      },
      {
        kind: "open",
        prompt: "Describe 3 hazards in the home that can lead to an electric shock or a fire, and state how each one can be avoided.",
        modelAnswer: "Damaged insulation can let bare wires touch, causing a short circuit or making a casing live, so worn or frayed cables should be replaced. Overheated or overloaded cables carry more current than they are designed for and can start a fire, so too many appliances should not be run from one socket. Damp conditions let water conduct through its dissolved ions, making shocks more likely, so hands and floors should be kept dry and insulators such as rubber gloves used near electricity.",
        marks: [
          "Damaged insulation causes short circuits or a live casing; replace worn cables.",
          "Overheated or overloaded cables can cause fires; do not draw too much current from one socket.",
          "Damp lets water conduct through ions; keep dry and use insulators.",
        ],
        ask: "Think about 3 separate causes: bare wires, cables carrying too much current, and water. For each, name the danger and one sensible way to avoid it.",
      },
    ],
  },
];
