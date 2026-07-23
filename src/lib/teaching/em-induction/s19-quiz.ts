import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, whole-topic quiz. Covers KB Chapter 21:
// electromagnetic induction and Faraday's law, Lenz's law, the a.c. generator,
// the transformer, and the transmission of electrical power. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "t19.quiz",
    code: "Quiz",
    title: "Electromagnetic induction topical quiz",
    blurb: "Whole-topic check: induction, Lenz's law, generators, transformers, power transmission",
    kind: "quiz",
    steps: [
      // 1. choice (induction) correct 2
      {
        kind: "choice",
        question: "A bar magnet is near a solenoid joined to a galvanometer. When is an e.m.f. induced in the solenoid?",
        figure: "fig-21-01-magnet-solenoid",
        options: [
          "When the magnet is held still inside the solenoid",
          "Only when the magnet touches the solenoid",
          "While the magnet is moving toward or away from the solenoid",
          "Never, because a magnet cannot affect a coil",
        ],
        correct: 2,
        ask: "An e.m.f. appears only while the magnetic flux through the coil is changing. When is the flux changing here?",
        hints: [
          "A steady, unchanging field induces nothing.",
          "The flux changes only while the magnet is moving relative to the coil.",
        ],
        explain: "An e.m.f. is induced only while the magnet moves, because only then is the flux through the coil changing. A magnet held still gives a steady flux and no induced e.m.f.",
      },
      // 2. choice (induction) correct 0
      {
        kind: "choice",
        question: "A magnet is held motionless inside a coil joined to a galvanometer. Why does the galvanometer read zero?",
        options: [
          "There is no change of flux, so no e.m.f. is induced",
          "The magnet is too weak to be detected",
          "The coil has too few turns",
          "A current is there but too fast to see",
        ],
        correct: 0,
        ask: "Induction needs a changing flux. Is the flux through the coil changing while the magnet stays still?",
        hints: [
          "A stationary magnet gives a constant flux through the coil.",
          "With no change of flux there is no induced e.m.f., so the pointer stays on zero.",
        ],
        explain: "The reading is zero because the flux through the coil is not changing while the magnet is still. Induction needs a changing flux, so a steady magnet induces no e.m.f.",
      },
      // 3. interactive: classify (induction)
      {
        kind: "classify",
        prompt: "Sort each change by whether it increases the size of the induced e.m.f. in a coil.",
        bins: ["Increases the induced e.m.f.", "Does not increase it"],
        items: [
          { text: "winding more turns on the coil", bin: 0 },
          { text: "moving the magnet faster", bin: 0 },
          { text: "using a stronger magnet", bin: 0 },
          { text: "holding the magnet still", bin: 1 },
          { text: "moving the magnet more slowly", bin: 1 },
        ],
        ask: "A larger e.m.f. comes from a faster change of flux or a bigger flux. Tap each change and drop it in the right bin.",
        hints: [
          "More turns, a stronger magnet, or faster motion all raise the induced e.m.f.",
          "Holding the magnet still gives no change of flux, and slower motion gives a smaller e.m.f.",
        ],
        explain: "More turns, a stronger magnet, and faster relative motion all increase the induced e.m.f. Holding the magnet still gives no e.m.f. at all, and slower motion gives a smaller one.",
      },
      // 4. interactive: order (induction chain)
      {
        kind: "order",
        prompt: "Put these stages in order for what happens when a magnet is pushed into a coil connected to a galvanometer.",
        items: [
          "The magnet moves toward the coil",
          "The magnetic flux through the coil changes",
          "An e.m.f. is induced across the coil",
          "A current flows and the galvanometer deflects",
        ],
        ask: "Start with the magnet moving and finish with the pointer moving. What has to change before a current can flow?",
        hints: [
          "Motion of the magnet is what starts the whole process.",
          "The changing flux induces an e.m.f., which drives a current that deflects the galvanometer.",
        ],
        explain: "First the magnet moves toward the coil, which changes the flux through it. The changing flux induces an e.m.f., and that drives a current which deflects the galvanometer.",
      },
      // 5. open (induction)
      {
        kind: "open",
        prompt: "Explain what electromagnetic induction is, and state 3 ways to increase the size of the induced e.m.f. in a coil.",
        figure: "fig-21-01-magnet-solenoid",
        modelAnswer: "Electromagnetic induction is the production of an e.m.f. across a conductor when the magnetic flux through it changes. The faster the flux changes, the larger the induced e.m.f. The e.m.f. can be made larger by using more turns on the coil, by using a stronger magnet, and by moving the magnet or coil faster so the flux changes more quickly.",
        marks: [
          "Induction is an induced e.m.f. caused by a changing magnetic flux.",
          "The e.m.f. depends on the rate of change of flux.",
          "3 valid ways: more turns, a stronger magnet, faster relative motion.",
        ],
        ask: "Say what has to change for an e.m.f. to appear, then list changes that make the flux change faster or larger.",
      },
      // 6. choice (Lenz) correct 3
      {
        kind: "choice",
        question: "According to Lenz's law, the induced current flows in the direction that does what?",
        figure: "fig-21-03-lenz-law",
        options: [
          "Strengthens the change that produces it",
          "Has no link to the change",
          "Always flows clockwise",
          "Opposes the change that produces it",
        ],
        correct: 3,
        ask: "Lenz's law is about the direction of the induced current and how it relates to the change causing it. Which option matches?",
        hints: [
          "The induced current sets up its own magnetic effect.",
          "That magnetic effect always acts to oppose the change producing the current.",
        ],
        explain: "By Lenz's law the induced current always flows so that its magnetic effect opposes the change that produces it. This is a direct result of the conservation of energy.",
      },
      // 7. choice (Lenz) correct 1
      {
        kind: "choice",
        question: "The north pole of a magnet is pushed toward the end of a coil. What does that end of the coil become?",
        options: [
          "An induced south pole, so it attracts the magnet",
          "An induced north pole, so it repels the magnet",
          "No pole forms at that end",
          "Alternately north and south",
        ],
        correct: 1,
        ask: "By Lenz's law the coil opposes the magnet's approach. To push back against an approaching north pole, what pole must face it?",
        hints: [
          "Like poles repel, unlike poles attract.",
          "To oppose the approach, the near end must become a north pole and repel the incoming north pole.",
        ],
        explain: "The near end becomes an induced north pole, which repels the approaching north pole and so opposes the motion. That opposition is Lenz's law in action.",
      },
      // 8. interactive: cloze (Lenz)
      {
        kind: "cloze",
        prompt: "Complete the statement of Lenz's law and its basis.",
        segments: [
          "By Lenz's law the induced current always ",
          " the change that produces it, which follows from the conservation of ",
          ".",
        ],
        bank: ["opposes", "energy", "helps", "momentum"],
        answer: ["opposes", "energy"],
        ask: "Think about the direction the induced current takes relative to the change, and which conservation principle forbids getting energy for free.",
        hints: [
          "The magnetic effect of the induced current fights the change causing it.",
          "This must be so because of the conservation of energy; if it helped the change you would get energy from nothing.",
        ],
        explain: "The induced current always opposes the change that produces it, and this follows from the conservation of energy: work must be done against the opposition to generate the electrical energy.",
      },
      // 9. open (Lenz)
      {
        kind: "open",
        prompt: "State Lenz's law and explain how it is a consequence of the conservation of energy.",
        figure: "fig-21-03-lenz-law",
        modelAnswer: "Lenz's law states that the induced current always flows in the direction whose magnetic effect opposes the change producing it. This must be so to conserve energy: because the induced current opposes the motion, work has to be done against that opposition, and this work is converted into the electrical energy of the induced current. If instead the current helped the motion, energy would be created from nothing, which is impossible.",
        marks: [
          "Lenz's law: the induced current opposes the change producing it.",
          "Work must be done against the opposition to move the magnet.",
          "That work becomes the electrical energy, so energy is conserved; a helping current would create energy from nothing.",
        ],
        ask: "State the direction rule first, then explain where the electrical energy comes from and why the current cannot help the motion.",
      },
      // 10. choice (generator) correct 0
      {
        kind: "choice",
        question: "Why is the output of a simple a.c. generator an alternating, sine-shaped e.m.f.?",
        options: [
          "As the coil spins it cuts field lines at a changing rate and reverses direction each half turn",
          "Because the magnet switches on and off",
          "Because the slip rings reverse the connections twice each turn",
          "Because the coil speeds up and slows down each turn",
        ],
        correct: 0,
        ask: "Think about how fast the coil cuts field lines as it rotates, and what happens to the direction of cutting each half turn.",
        hints: [
          "The rate of cutting field lines rises and falls smoothly as the coil turns.",
          "Each half turn the coil cuts the lines the other way, so the e.m.f. reverses, giving a sine curve.",
        ],
        explain: "As the coil rotates it cuts field lines at a rate that rises and falls smoothly, and the direction of cutting reverses every half turn. This gives a smoothly alternating, sine-shaped e.m.f.",
      },
      // 11. choice (generator) correct 3
      {
        kind: "choice",
        question: "In an a.c. generator, when is the induced e.m.f. at its maximum?",
        options: [
          "When the coil is vertical, cutting no field lines",
          "When the coil has stopped",
          "When the coil is vertical, moving along the field lines",
          "When the coil is horizontal, cutting field lines fastest",
        ],
        correct: 3,
        ask: "The e.m.f. is largest when the coil cuts field lines at the greatest rate. In which position are the coil sides slicing straight across the field?",
        hints: [
          "Cutting no lines gives zero e.m.f.; cutting them fastest gives the peak.",
          "The coil cuts fastest when it lies horizontal, so the e.m.f. peaks there.",
        ],
        explain: "The e.m.f. is maximum when the coil is horizontal, because its sides then cut the field lines at the fastest rate. When the coil is vertical it cuts no lines and the e.m.f. is zero.",
      },
      // 12. interactive: graphpick (generator sine output)
      {
        kind: "graphpick",
        prompt: "Which graph best shows the e.m.f. output of a simple a.c. generator against time as the coil rotates steadily?",
        xLabel: "time / s",
        yLabel: "e.m.f. / V",
        options: [
          { points: [[0, 0], [1, 10], [2, 0], [3, -10], [4, 0]], caption: "Rises and falls, reversing each half turn" },
          { points: [[0, 0], [1, 10], [2, 20], [3, 30], [4, 40]], caption: "Rises as a straight line" },
          { points: [[0, 10], [1, 10], [2, 10], [3, 10], [4, 10]], caption: "Constant and steady" },
          { points: [[0, 10], [1, 7], [2, 5], [3, 3], [4, 2]], caption: "Falls toward zero" },
        ],
        correct: 0,
        ask: "The generator's e.m.f. peaks, drops to zero, then reverses each half turn. Which graph swings above and below zero?",
        hints: [
          "A steady d.c. would be a flat line, but a generator gives alternating output.",
          "The right graph is a sine curve that rises to a peak, falls through zero, and reverses each half turn.",
        ],
        explain: "The output is a sine curve that swings above and below zero, because the e.m.f. peaks when the coil is horizontal, falls to zero when vertical, and reverses every half turn.",
      },
      // 13. interactive: match (mixed)
      {
        kind: "match",
        prompt: "Match each part or idea to its correct description.",
        pairs: [
          { left: "Slip rings", right: "Give sliding contact and stop the leads twisting in a generator" },
          { left: "Step-up transformer", right: "Has more secondary turns and raises the voltage" },
          { left: "Laminated core", right: "Is built in thin layers to reduce wasteful eddy currents" },
          { left: "Lenz's law", right: "The induced current opposes the change producing it" },
        ],
        ask: "Match each item to its description. One is about generator contacts, one raises voltage, one reduces heating losses, and one is about current direction.",
        hints: [
          "Slip rings belong to the generator; a step-up transformer has more turns on the secondary.",
          "A laminated core cuts eddy-current heating, and Lenz's law is about the opposing direction of the induced current.",
        ],
        explain: "Slip rings give sliding contact in a generator, a step-up transformer has more secondary turns to raise the voltage, a laminated core reduces eddy currents, and Lenz's law says the induced current opposes the change producing it.",
      },
      // 14. open (generator)
      {
        kind: "open",
        prompt: "Describe how a simple a.c. generator produces an alternating e.m.f., and explain the job of the slip rings and brushes.",
        figure: "fig-21-06-generator-output",
        modelAnswer: "A coil is rotated in a magnetic field. As it turns, its sides cut through the field lines and an e.m.f. is induced. The e.m.f. is zero when the coil is vertical and cutting no lines, and maximum when it is horizontal and cutting fastest, and it reverses every half turn, giving an alternating sine-shaped output. 2 slip rings, each a complete ring, are joined to the ends of the coil and press against carbon brushes; they give a continuous sliding contact to the outside circuit and stop the leads from twisting as the coil spins.",
        marks: [
          "The coil rotates and cuts field lines, inducing an e.m.f.",
          "The e.m.f. is zero when vertical and maximum when horizontal, reversing each half turn (a.c.).",
          "Slip rings and brushes give continuous sliding contact and stop the leads twisting.",
        ],
        ask: "Explain how the e.m.f. changes as the coil turns, and say what the slip rings and brushes are for.",
      },
      // 15. choice (transformer, conceptual) correct 2
      {
        kind: "choice",
        question: "A transformer only works with an alternating input. Why does a steady d.c. give no output?",
        options: [
          "d.c. is too weak to cross the core",
          "d.c. burns out the secondary coil",
          "A steady d.c. gives an unchanging field, so no e.m.f. is induced in the secondary",
          "The core blocks all direct current",
        ],
        correct: 2,
        ask: "The secondary e.m.f. needs a changing magnetic field. Does a steady direct current in the primary give a changing field?",
        hints: [
          "Induction needs a changing flux linking the secondary coil.",
          "A steady d.c. makes a constant field, so nothing is induced; a.c. keeps the field changing.",
        ],
        explain: "A steady direct current makes a constant magnetic field, so there is no change of flux in the secondary and no e.m.f. is induced. Only an alternating current keeps the field changing, so a transformer needs a.c.",
      },
      // 16. choice (transformer, CALC) correct 1  -> V_s = 12 V
      {
        kind: "choice",
        question: "A transformer has V_p = 240 V, N_p = 1200 turns and N_s = 60 turns. Find the secondary voltage V_s.",
        figure: "fig-21-07-transformer",
        options: ["24 V", "12 V", "48 V", "6 V"],
        correct: 1,
        ask: "Use V_s over V_p equals N_s over N_p, so V_s is 240 times 60 divided by 1200. Which option is that?",
        hints: [
          "Rearrange to V_s equals V_p times N_s divided by N_p.",
          "240 times 60 is 14400, divided by 1200 gives 12 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_s = V_p \\times \\dfrac{N_s}{N_p}" },
          { label: "Substitute", latex: "V_s = 240 \\times \\dfrac{60}{1200}" },
          { label: "Answer", latex: "V_s = 12\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 12 volts, because 240 volts times 60 divided by 1200 is 12 volts. Fewer secondary turns make this a step-down transformer.",
      },
      // 17. interactive: spoterror (transformer)
      {
        kind: "spoterror",
        prompt: "Here are 4 statements a student wrote about transformers. Tap the line that is wrong.",
        lines: [
          "A transformer changes an alternating voltage",
          "It has a primary coil and a secondary coil",
          "It works just as well on a steady d.c.",
          "The core is laminated to reduce eddy currents",
        ],
        errorLine: 2,
        ask: "Check each statement against how a transformer induces its output. Which one could not be true given that induction needs a changing field?",
        hints: [
          "A transformer relies on a changing magnetic flux linking the 2 coils.",
          "The wrong line says it works on steady d.c.; a steady current gives no change of flux, so no output.",
        ],
        explain: "The wrong line is the one saying a transformer works on a steady d.c. A steady current makes an unchanging field, so nothing is induced in the secondary; a transformer needs a.c.",
      },
      // 18. interactive: slider (transformer CALC) -> V_s = 60 V
      {
        kind: "slider",
        prompt: "A transformer has V_p = 240 V, N_p = 800 turns and N_s = 200 turns. Set the slider to the secondary voltage V_s, in volts.",
        min: 0,
        max: 120,
        step: 1,
        unit: "V",
        start: 0,
        targetMin: 59,
        targetMax: 61,
        ask: "Use V_s over V_p equals N_s over N_p, so V_s is 240 times 200 divided by 800.",
        hints: [
          "Rearrange to V_s equals V_p times N_s divided by N_p.",
          "240 times 200 is 48000, divided by 800 gives 60 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_s = V_p \\times \\dfrac{N_s}{N_p}" },
          { label: "Substitute", latex: "V_s = 240 \\times \\dfrac{200}{800}" },
          { label: "Answer", latex: "V_s = 60\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 60 volts, because 240 volts times 200 divided by 800 is 60 volts. It is a step-down transformer because it has fewer secondary turns.",
      },
      // 19. interactive: tiles (transformer CALC) -> I_s = 6.0 A
      {
        kind: "tiles",
        prompt: "An ideal step-down transformer runs at V_p = 230 V with a primary current I_p = 1.2 A and gives V_s = 46 V. Build the working line for the secondary current I_s.",
        tiles: ["I_s =", "230", "\\times", "1.2", "\\div", "46", "=", "6.0", "A", "V"],
        answer: ["I_s =", "230", "\\times", "1.2", "\\div", "46", "=", "6.0", "A"],
        ask: "For an ideal transformer V_p times I_p equals V_s times I_s, so I_s is 230 times 1.2 divided by 46.",
        hints: [
          "Rearrange to I_s equals V_p times I_p divided by V_s.",
          "230 times 1.2 is 276, divided by 46 gives 6.0 amperes.",
        ],
        working: [
          { label: "Formula", latex: "V_p I_p = V_s I_s" },
          { label: "Substitute", latex: "I_s = \\dfrac{230 \\times 1.2}{46}" },
          { label: "Answer", latex: "I_s = 6.0\\ \\text{A}" },
        ],
        explain: "The secondary current is 6.0 amperes, because 230 times 1.2 is 276, and 276 divided by 46 is 6.0 amperes. A step-down transformer gives a larger current at a lower voltage.",
      },
      // 20. interactive: slider (transformer CALC) -> V_s = 2400 V
      {
        kind: "slider",
        prompt: "A step-up transformer has V_p = 120 V with I_p = 0.30 A and a secondary current I_s = 0.015 A. Set the slider to the secondary voltage V_s, in volts.",
        min: 0,
        max: 3000,
        step: 10,
        unit: "V",
        start: 0,
        targetMin: 2390,
        targetMax: 2410,
        ask: "For an ideal transformer V_p times I_p equals V_s times I_s, so V_s is 120 times 0.30 divided by 0.015.",
        hints: [
          "Rearrange to V_s equals V_p times I_p divided by I_s.",
          "120 times 0.30 is 36, divided by 0.015 gives 2400 volts.",
        ],
        working: [
          { label: "Formula", latex: "V_p I_p = V_s I_s" },
          { label: "Substitute", latex: "V_s = \\dfrac{120 \\times 0.30}{0.015}" },
          { label: "Answer", latex: "V_s = 2400\\ \\text{V}" },
        ],
        explain: "The secondary voltage is 2400 volts, because 120 times 0.30 is 36, and 36 divided by 0.015 is 2400 volts. The small secondary current goes with a large step-up in voltage.",
      },
      // 21. open (transformer)
      {
        kind: "open",
        prompt: "Explain how a transformer changes an alternating voltage, why it will not work on a steady direct current, and why its core is laminated.",
        figure: "fig-21-07-transformer",
        modelAnswer: "An alternating current in the primary coil produces a changing magnetic field in the soft-iron core. This changing flux links the secondary coil and induces an alternating e.m.f. in it, even though the coils are not connected electrically. The secondary voltage divided by the primary voltage equals the number of secondary turns divided by the number of primary turns. A steady direct current makes a constant field with no change of flux, so no e.m.f. is induced and there is no output. The core is laminated, built from thin insulated layers, to reduce the eddy currents that would otherwise flow in it and waste energy as heat.",
        marks: [
          "a.c. in the primary makes a changing flux in the core that links the secondary and induces an a.c. e.m.f.",
          "V_s / V_p = N_s / N_p stated; no direct connection between the coils.",
          "d.c. gives no changing flux so no output; the core is laminated to reduce eddy-current heating.",
        ],
        ask: "Trace the changing field from the primary to the secondary, then explain the d.c. case and the reason for laminating the core.",
      },
      // 22. choice (power transmission, conceptual) correct 0
      {
        kind: "choice",
        question: "Why is electrical power sent across the country at very high voltage?",
        options: [
          "A higher voltage means a smaller current, so far less power is lost as I^2 R heat",
          "A higher voltage makes the electrons move faster and arrive sooner",
          "A higher voltage stops the cables from breaking",
          "A higher voltage increases the current and so the power delivered",
        ],
        correct: 0,
        ask: "For a fixed power, P equals I times V, so a higher voltage gives a smaller current. Then think about the I squared R loss.",
        hints: [
          "The heat lost in the cables is I squared times R, which grows sharply with current.",
          "Raising the voltage lowers the current, and a smaller current cuts the I squared R loss a lot.",
        ],
        explain: "At high voltage the current needed for a given power is small, and since the heat lost in the cables is I squared times R, a smaller current means far less energy wasted as heat.",
      },
      // 23. choice (power transmission, CALC) correct 2 -> P_loss = 200 W at 400 V
      {
        kind: "choice",
        question: "8 kW is sent along a 0.5 ohm cable at 400 V. Find the power lost as heat in the cable.",
        figure: "fig-21-08-power-transmission",
        options: ["20 W", "40 W", "200 W", "800 W"],
        correct: 2,
        ask: "First find the current from I equals P over V, then use P_loss equals I squared times R with R equal to 0.5 ohms.",
        hints: [
          "I equals 8000 divided by 400, which is 20 amperes.",
          "P_loss equals 20 squared times 0.5, which is 400 times 0.5, giving 200 watts.",
        ],
        working: [
          { label: "Formula", latex: "P_{loss} = I^2 R, \\quad I = \\dfrac{P}{V}" },
          { label: "Substitute", latex: "I = \\dfrac{8000}{400} = 20\\ \\text{A}, \\quad P_{loss} = 20^2 \\times 0.5" },
          { label: "Answer", latex: "P_{loss} = 200\\ \\text{W}" },
        ],
        explain: "The current is 8000 divided by 400, which is 20 amperes, so the loss is 20 squared times 0.5, which is 200 watts. At a higher voltage the current and the loss would be far smaller.",
      },
      // 24. interactive: tiles (power transmission CALC) -> P_loss = 2 W at 4000 V
      {
        kind: "tiles",
        prompt: "The same 8 kW is now sent along the 0.5 ohm cable at 4000 V, giving a current of 2 A. Build the working line for the power lost in the cable.",
        tiles: ["P =", "2^2", "\\times", "0.5", "=", "2", "W", "A"],
        answer: ["P =", "2^2", "\\times", "0.5", "=", "2", "W"],
        ask: "Use P_loss equals I squared times R, with the current equal to 2 amperes and R equal to 0.5 ohms.",
        hints: [
          "Square the current first: 2 squared is 4.",
          "4 times 0.5 is 2, so the loss is 2 watts, far less than at the lower voltage.",
        ],
        working: [
          { label: "Formula", latex: "P_{loss} = I^2 R" },
          { label: "Substitute", latex: "P_{loss} = 2^2 \\times 0.5" },
          { label: "Answer", latex: "P_{loss} = 2\\ \\text{W}" },
        ],
        explain: "The power lost is 2 watts, because 2 squared is 4 and 4 times 0.5 is 2 watts. Raising the voltage from 400 to 4000 volts cuts the loss from 200 watts to just 2 watts.",
      },
      // 25. open (power transmission)
      {
        kind: "open",
        prompt: "Explain why electrical power is transmitted at high voltage, and describe the roles of the step-up and step-down transformers in the grid.",
        figure: "fig-21-08-power-transmission",
        modelAnswer: "The cables have resistance, so power is lost as heat at a rate equal to the current squared times the resistance. For a fixed power, which is the current times the voltage, transmitting at a high voltage means a small current, and because the loss depends on the square of the current, a small current greatly reduces the energy wasted as heat. A step-up transformer at the power station raises the voltage to a very high value for the long transmission cables, keeping the current and the losses low. A step-down transformer near the users then lowers the voltage back to the 240 volts that is safe to use in homes.",
        marks: [
          "Power lost in cables is I^2 R, which falls sharply if the current is small.",
          "For fixed power a high voltage means a small current (P = I V), so less is wasted.",
          "Step-up transformer raises voltage for the cables; step-down transformer lowers it for homes.",
        ],
        ask: "Link the I squared R loss to the current, then say how the 2 transformers set the voltage high for the cables and low for homes.",
      },
    ],
  },
];
