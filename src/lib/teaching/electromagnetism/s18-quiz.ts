import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, topical quiz. Whole-topic check across KB Chapter 20:
// the magnetic effect of a current, the circuit breaker, the force on a
// current-carrying conductor, Fleming's left-hand rule, the force on charged
// particles and the turning effect on a coil, and the d.c. motor.
// Conceptual only: no calculations, no working, no formulas.

export const BOXES: Subconcept[] = [
  {
    id: "t18.quiz",
    code: "Quiz",
    title: "Electromagnetism topical quiz",
    blurb: "Whole-topic check: fields of a current, circuit breaker, motor effect, Fleming's rule, motors",
    kind: "quiz",
    steps: [
      // ---- C1 (T18.1) figure ----
      {
        kind: "choice",
        question: "The magnetic field lines around a long straight current-carrying wire have which shape?",
        figure: "fig-20-01-straight-wire-field",
        options: [
          "Straight lines running parallel to the wire",
          "Lines that spread out like a bar magnet's field",
          "Concentric circles centred on the wire",
          "A single loop that passes through the wire once",
        ],
        correct: 2,
        ask: "Picture the field seen end-on, as rings around the wire. Which shape gets weaker as you move away from the wire?",
        hints: [
          "The field forms closed loops around the wire, not lines along it.",
          "The loops are circles sharing the same centre, the wire, and they crowd together close to it.",
        ],
        explain: "The field around a straight wire is a set of concentric circles centred on the wire, strongest close to it and weaker further away.",
      },
      // ---- C2 (T18.1) ----
      {
        kind: "choice",
        question: "Viewed end-on, a wire carries current out of the page. By the right-hand grip rule, which way does its magnetic field point?",
        options: [
          "Anticlockwise around the wire",
          "Clockwise around the wire",
          "Straight up the page",
          "There is no field when current flows toward you",
        ],
        correct: 0,
        ask: "Point your right thumb out of the page along the current. The way your fingers curl is the field direction.",
        hints: [
          "The grip rule: thumb along the current, curled fingers along the circular field.",
          "With the current coming out of the page toward you, the fingers curl anticlockwise.",
        ],
        explain: "Current out of the page gives an anticlockwise field. Point the right thumb out of the page along the current and the curled fingers sweep anticlockwise.",
      },
      // ---- I1 (T18.1) classify ----
      {
        kind: "classify",
        prompt: "Sort each change by whether it makes an electromagnet stronger.",
        bins: ["Makes it stronger", "Does not make it stronger"],
        items: [
          { text: "adding more turns of wire", bin: 0 },
          { text: "using a larger current", bin: 0 },
          { text: "adding a soft-iron core", bin: 0 },
          { text: "reversing the current", bin: 1 },
          { text: "switching the current off", bin: 1 },
          { text: "painting the coil a new colour", bin: 1 },
        ],
        ask: "An electromagnet grows stronger with more current, more turns, or a soft-iron core. Tap each change and drop it in its bin.",
        hints: [
          "More current, more turns, and a soft-iron core all concentrate or add to the field.",
          "Reversing the current only swaps the poles, and switching it off removes the field, so neither makes it stronger.",
        ],
        explain: "More turns, a larger current, and a soft-iron core all strengthen the electromagnet. Reversing the current just swaps the poles, switching it off removes the field, and the colour makes no difference.",
      },
      // ---- I2 (T18.1) cloze ----
      {
        kind: "cloze",
        prompt: "Complete the sentences about the field around a straight wire.",
        segments: [
          "Around a straight wire the field is a set of ",
          " circles. Current out of the page gives an ",
          " field, and current into the page gives a ",
          " field.",
        ],
        bank: ["concentric", "anticlockwise", "clockwise", "straight", "parallel"],
        answer: ["concentric", "anticlockwise", "clockwise"],
        ask: "Recall the field's shape, then use the grip rule for each current direction to fill the 2 direction blanks.",
        hints: [
          "The field lines are circles sharing one centre.",
          "Out of the page gives anticlockwise; into the page gives clockwise.",
        ],
        explain: "The field is made of concentric circles. Current out of the page gives an anticlockwise field, and current into the page gives a clockwise field.",
      },
      // ---- C3 (T18.2) ----
      {
        kind: "choice",
        question: "Why is a circuit breaker often preferred to a fuse?",
        options: [
          "It melts faster than a fuse",
          "It works even with no current",
          "It never switches the circuit off",
          "It can be reset instead of replaced",
        ],
        correct: 3,
        ask: "Think about what you must do to a blown fuse, and what you can do to a tripped breaker instead.",
        hints: [
          "A fuse has to be thrown away and replaced once it has blown.",
          "A breaker does the same protective job but can be switched back on with a reset button.",
        ],
        explain: "A circuit breaker can be reset after it trips, while a blown fuse must be replaced. Both cut the circuit when the current is too large, but the breaker is reusable.",
      },
      // ---- I3 (T18.2) order ----
      {
        kind: "order",
        prompt: "Put these stages of a circuit breaker tripping into the correct order.",
        items: [
          "A fault makes the current rise sharply",
          "The electromagnet becomes strong enough to attract the iron bolt",
          "The bolt moves and releases the catch",
          "The spring pulls the contacts apart",
          "The circuit is broken and the current stops",
        ],
        ask: "Start from the fault that raises the current, and finish when the current stops. Put the stages in order.",
        hints: [
          "The trip begins because a fault makes the current too large.",
          "The strong electromagnet pulls the bolt, which frees the catch so the spring opens the contacts.",
        ],
        explain: "A fault raises the current, so the electromagnet grows strong enough to attract the iron bolt, which releases the catch, the spring pulls the contacts apart, and the circuit is broken.",
      },
      // ---- I4 (T18.2) match ----
      {
        kind: "match",
        prompt: "Match each part of a circuit breaker to its job.",
        pairs: [
          { left: "Electromagnet", right: "Grows strong on a fault and attracts the bolt" },
          { left: "Iron bolt", right: "Is pulled across to release the catch" },
          { left: "Spring", right: "Pulls the contacts apart to break the circuit" },
          { left: "Reset button", right: "Closes the contacts again after a trip" },
        ],
        ask: "One part senses the large current, one is pulled, one opens the contacts, and one restores the circuit. Match each to its job.",
        hints: [
          "The electromagnet responds to the current and pulls the iron bolt.",
          "The spring opens the contacts, and the reset button closes them again later.",
        ],
        explain: "The electromagnet becomes strong on a fault and attracts the iron bolt, which releases the catch. The spring pulls the contacts apart to break the circuit, and the reset button closes them again afterward.",
      },
      // ---- C4 (T18.3) ----
      {
        kind: "choice",
        question: "A current-carrying wire lies in a magnetic field. The force on it is a maximum when the wire is:",
        options: [
          "Parallel to the field",
          "Perpendicular to the field",
          "At 45 degrees to the field",
          "Carrying no current",
        ],
        correct: 1,
        ask: "The force is largest when the wire cuts straight across the field lines, and zero when it lies along them. Which orientation cuts across?",
        hints: [
          "A wire lying along the field feels no force at all.",
          "The force is greatest when the wire is at 90 degrees to the field.",
        ],
        explain: "The force is a maximum when the wire is perpendicular to the field, at 90 degrees to the lines. It falls to zero when the wire lies parallel to the field.",
      },
      // ---- I5 (T18.3) classify ----
      {
        kind: "classify",
        prompt: "Sort each change by whether it increases the force on a current-carrying wire in a magnetic field.",
        bins: ["Increases the force", "Does not increase the force"],
        items: [
          { text: "using a larger current", bin: 0 },
          { text: "using a stronger magnet", bin: 0 },
          { text: "turning the wire perpendicular to the field", bin: 0 },
          { text: "turning the wire parallel to the field", bin: 1 },
          { text: "switching the current off", bin: 1 },
          { text: "making the wire a brighter colour", bin: 1 },
        ],
        ask: "A bigger current, a stronger field, or lining the wire across the field all raise the force. Tap each change into its bin.",
        hints: [
          "A larger current and a stronger magnet both make the 2 fields interact more strongly.",
          "Turning the wire parallel to the field drops the force to zero, and switching off the current removes it.",
        ],
        explain: "A larger current, a stronger magnet, and setting the wire perpendicular to the field all increase the force. Turning it parallel gives zero force, switching off the current removes it, and the colour has no effect.",
      },
      // ---- C5 (T18.4) figure, uses KEY direction result ----
      {
        kind: "choice",
        question: "A straight wire carries current out of the page in a magnetic field pointing to the left. By Fleming's left-hand rule, which way is the force on the wire?",
        figure: "fig-20-08-flemings-lhr",
        options: [
          "To the right",
          "Upward",
          "Downward",
          "Out of the page",
        ],
        correct: 2,
        ask: "On your left hand set the first finger along the field, to the left, and the second finger along the current, out of the page. The thumb then shows the force.",
        hints: [
          "First finger points along the field, second finger along the current, thumb gives the force, all at right angles.",
          "With the field to the left and the current out of the page, the thumb points down.",
        ],
        explain: "The force is downward. With the first finger pointing left along the field and the second finger out of the page along the current, Fleming's left-hand rule sends the thumb, and so the force, downward.",
      },
      // ---- C6 (T18.4) ----
      {
        kind: "choice",
        question: "What happens to the force on a current-carrying wire if you reverse the current only?",
        options: [
          "The force reverses direction",
          "The force stays exactly the same",
          "The force becomes zero",
          "The force doubles in size",
        ],
        correct: 0,
        ask: "Fleming's rule links the force to the current and the field. If you flip just one of them, what happens to the force?",
        hints: [
          "Reversing the current or the field on its own flips the force.",
          "Only reversing both together would leave the force unchanged.",
        ],
        explain: "Reversing the current alone reverses the force. Reversing the current or the field flips the force; reversing both together leaves it unchanged.",
      },
      // ---- I6 (T18.4) match ----
      {
        kind: "match",
        prompt: "Match each part of Fleming's left-hand rule to what it stands for.",
        pairs: [
          { left: "Thumb", right: "The force, or motion, of the wire" },
          { left: "First finger", right: "The field, pointing from north to south" },
          { left: "Second finger", right: "The conventional current" },
          { left: "Left hand", right: "The hand used for the motor effect" },
        ],
        ask: "Remember thumb for Motion, First finger for Field, seCond finger for Current. Match each to its quantity.",
        hints: [
          "The thumb is the force, the first finger the field.",
          "The second finger is the current, and it is the left hand that gives the motor force.",
        ],
        explain: "The thumb shows the force or motion, the first finger the field from north to south, and the second finger the conventional current, all on the left hand for the motor effect.",
      },
      // ---- I7 (T18.4) spoterror ----
      {
        kind: "spoterror",
        prompt: "A student writes about the motor effect. Tap the line with the mistake.",
        lines: [
          "A current-carrying wire in a magnetic field feels a force.",
          "Fleming's right-hand rule gives the direction of this motor force.",
          "The thumb shows the force, the first finger the field, the second finger the current.",
          "Reversing the current alone reverses the force.",
        ],
        errorLine: 1,
        ask: "Check which hand the motor rule uses. Recall that the left hand, not the right, gives the force in a motor.",
        hints: [
          "The rule that gives the force on the wire is the left-hand rule.",
          "The line naming the right-hand rule for the motor force is the wrong one.",
        ],
        explain: "The mistake is the line naming Fleming's right-hand rule. The motor force is found with the left-hand rule; the other lines are all correct.",
      },
      // ---- C7 (T18.5) figure, uses KEY direction result ----
      {
        kind: "choice",
        question: "A magnetic field points into the page. A proton and an electron both move to the right through it. How are they deflected?",
        figure: "fig-20-10-charged-particles",
        options: [
          "Both are deflected upward",
          "Both are deflected downward",
          "The proton downward and the electron upward",
          "The proton upward and the electron downward",
        ],
        correct: 3,
        ask: "The proton's motion is a conventional current to the right; the electron's is a current to the left. Apply the motor rule to each.",
        hints: [
          "For the proton, the current is to the right in a field into the page, so the force is up.",
          "The electron carries current the opposite way, so it is deflected the opposite way, downward.",
        ],
        explain: "The proton is deflected upward and the electron downward. The proton's rightward motion is a current to the right, giving an upward force; the electron's conventional current is to the left, so it deflects the opposite way.",
      },
      // ---- C8 (T18.5) ----
      {
        kind: "choice",
        question: "Why does a current-carrying coil turn when it is placed between magnetic poles?",
        options: [
          "The whole coil is pushed in one direction",
          "Its 2 sides feel opposite forces that make a turning couple",
          "The coil is attracted to the nearest pole",
          "The current heats the coil until it bends",
        ],
        correct: 1,
        ask: "The 2 sides of the coil carry current in opposite directions. Think about the forces on those 2 sides and how they combine.",
        hints: [
          "One side carries current one way and the opposite side carries it the other way.",
          "So one side is pushed up and the other down, and these 2 forces form a couple that rotates the coil.",
        ],
        explain: "The coil turns because its 2 sides carry current in opposite directions, so one is pushed up and the other down. These equal and opposite forces form a couple that rotates the coil.",
      },
      // ---- I8 (T18.5) classify ----
      {
        kind: "classify",
        prompt: "Sort each change by whether it increases the turning effect on a current-carrying coil.",
        bins: ["Increases the turning effect", "Does not increase it"],
        items: [
          { text: "adding more turns to the coil", bin: 0 },
          { text: "using a larger current", bin: 0 },
          { text: "using a stronger magnet", bin: 0 },
          { text: "removing the magnet", bin: 1 },
          { text: "switching off the current", bin: 1 },
          { text: "labelling the coil with a sticker", bin: 1 },
        ],
        ask: "More turns, more current, and a stronger magnet all raise the turning effect. Tap each change into its bin.",
        hints: [
          "The couple grows with the number of turns, the current, and the field strength.",
          "Removing the magnet or switching off the current leaves no couple at all.",
        ],
        explain: "More turns, a larger current, and a stronger magnet all increase the turning effect. Removing the magnet or switching off the current removes the couple, and a sticker changes nothing.",
      },
      // ---- C9 (T18.6) ----
      {
        kind: "choice",
        question: "What is the job of the split-ring commutator in a d.c. motor?",
        options: [
          "To reverse the current in the coil every half-turn",
          "To supply the current from the battery",
          "To hold the coil still",
          "To turn the magnet around",
        ],
        correct: 0,
        ask: "Think about what must happen to the current each half-turn so the coil keeps spinning the same way instead of rocking back.",
        hints: [
          "If the current never changed, the coil would swing back at the halfway point.",
          "The split ring swaps the coil's connections every half-turn, reversing its current.",
        ],
        explain: "The split-ring commutator reverses the current in the coil every half-turn, so the turning force always acts the same way round and the coil keeps spinning in one direction.",
      },
      // ---- C10 (T18.6) figure ----
      {
        kind: "choice",
        question: "As the coil of a d.c. motor reaches the vertical position, the gaps in the split ring meet the brushes. How does the coil keep turning?",
        figure: "fig-20-13-motor-cycle",
        options: [
          "The current rises to a maximum there",
          "The magnet pulls it upright",
          "Its momentum carries it past while the current is briefly cut off",
          "The commutator feeds it extra current at that point",
        ],
        correct: 2,
        ask: "At the vertical position the gaps break the contact, so no current flows for an instant. What keeps the moving coil going through that gap?",
        hints: [
          "When the gaps meet the brushes the circuit is momentarily open, so there is no turning force.",
          "The coil is already moving, so its own momentum carries it past the vertical.",
        ],
        explain: "At the vertical position the gaps in the ring break the circuit, so the current is briefly cut off. The coil's momentum carries it past, and the current then returns to keep it spinning.",
      },
      // ---- I9 (T18.6) order ----
      {
        kind: "order",
        prompt: "Put these stages of one cycle of a d.c. motor into the correct order.",
        items: [
          "The coil lies horizontal and the brushes touch the ring, so current flows",
          "The 2 sides feel opposite forces and the coil turns",
          "At the vertical position the gaps meet the brushes and the current is cut off",
          "The coil's momentum carries it past the vertical",
          "The commutator swaps the contacts, reversing the current so the coil keeps turning the same way",
        ],
        ask: "Start with the coil flat and current flowing, and finish where the commutator reverses the current. Put the stages in order.",
        hints: [
          "Turning happens when current flows and the 2 sides feel opposite forces.",
          "At the vertical the current cuts off, momentum carries it on, and then the commutator swaps the contacts.",
        ],
        explain: "The coil starts horizontal with current flowing, the opposite forces turn it, at the vertical the gaps cut off the current, momentum carries it past, and the commutator then reverses the current so it keeps turning the same way.",
      },
      // ---- I10 (T18.6) match ----
      {
        kind: "match",
        prompt: "Match each part of a d.c. motor to its job.",
        pairs: [
          { left: "Split-ring commutator", right: "Reverses the coil current every half-turn" },
          { left: "Carbon brushes", right: "Carry current to the spinning commutator" },
          { left: "Soft-iron cylinder", right: "Strengthens the magnetic field through the coil" },
          { left: "Rheostat", right: "Sets the current and so the motor's speed" },
        ],
        ask: "One part reverses the current, one carries current in, one strengthens the field, and one sets the speed. Match each to its job.",
        hints: [
          "The commutator reverses the current, and the brushes deliver current to it.",
          "The soft-iron cylinder concentrates the field, and a rheostat controls the current and speed.",
        ],
        explain: "The split-ring commutator reverses the coil current every half-turn, the carbon brushes carry current to the commutator, the soft-iron cylinder strengthens the field, and a rheostat sets the current and so the speed.",
      },
      // ---- O1 (T18.1) open ----
      {
        kind: "open",
        prompt: "Describe 3 ways to make the magnetic field of a solenoid stronger.",
        modelAnswer: "You can increase the current flowing through the solenoid, because a larger current makes a stronger field. You can add more turns of wire, since each turn adds to the field. You can also place a soft-iron core inside the solenoid, which concentrates the field and makes it much stronger.",
        marks: [
          "Increase the current through the solenoid.",
          "Use more turns of wire.",
          "Add a soft-iron core inside the solenoid.",
        ],
        ask: "Think about the current, the number of turns, and what you could put inside the coil.",
      },
      // ---- O2 (T18.3) open, figure ----
      {
        kind: "open",
        prompt: "Explain why a current-carrying wire in a magnetic field experiences a force, and state when this force is a maximum and when it is zero.",
        figure: "fig-20-07-force-orientation",
        modelAnswer: "The wire's own magnetic field and the magnet's field add together on one side, making a strong region, and cancel on the other, leaving a weak region or neutral point. The wire is pushed from the strong side toward the weak side, which is the force. The force is a maximum when the wire is perpendicular to the field and zero when the wire is parallel to the field.",
        marks: [
          "The 2 magnetic fields add on one side and cancel on the other.",
          "The wire is pushed from the strong side toward the weak side.",
          "Force is a maximum when perpendicular to the field and zero when parallel.",
        ],
        ask: "Think about how the wire's field and the magnet's field combine, and how the force depends on the angle between the wire and the field.",
      },
      // ---- O3 (T18.4) open ----
      {
        kind: "open",
        prompt: "State Fleming's left-hand rule, saying what the thumb, the first finger, and the second finger each represent.",
        modelAnswer: "Fleming's left-hand rule uses the left hand with the thumb, first finger, and second finger held at right angles to one another. The first finger points along the field, from north to south. The second finger points along the conventional current. The thumb then shows the direction of the force, or motion, on the wire.",
        marks: [
          "The thumb, first finger, and second finger are held at right angles.",
          "First finger is the field (north to south), second finger the conventional current.",
          "The thumb gives the force or motion.",
        ],
        ask: "Name the quantity for each finger, and remember the fingers must be at right angles to one another.",
      },
      // ---- O4 (T18.5) open ----
      {
        kind: "open",
        prompt: "A positive charge and an electron move in the same direction through the same magnetic field. Explain why they are deflected in opposite directions.",
        modelAnswer: "Conventional current is the direction a positive charge moves, so the positive charge is like a current in its direction of motion. An electron is negative, so its conventional current points the opposite way to its motion. Because the 2 have opposite conventional currents in the same field, Fleming's left-hand rule gives forces in opposite directions, so they are deflected opposite ways.",
        marks: [
          "Conventional current is the direction a positive charge moves.",
          "The electron is negative, so its conventional current is opposite to its motion.",
          "Opposite currents in the same field give opposite forces, so opposite deflections.",
        ],
        ask: "Think about the direction of the conventional current for a positive charge and for an electron moving the same way.",
      },
      // ---- O5 (T18.6) open, figure ----
      {
        kind: "open",
        prompt: "Explain how the split-ring commutator keeps a d.c. motor turning in the same direction.",
        figure: "fig-20-12-dc-motor",
        modelAnswer: "As the coil turns, the split-ring commutator rotates with it and its 2 halves swap which brush they touch every half-turn. This reverses the current in the coil each half-turn. Without it, the coil would turn a half-turn and then feel a force pushing it back. Because the current reverses at the right moment, the turning force always acts the same way round, so the coil keeps spinning in one direction.",
        marks: [
          "The commutator reverses the current in the coil every half-turn.",
          "This keeps the turning force acting the same way round.",
          "Without it the coil would reverse or rock back instead of spinning one way.",
        ],
        ask: "Think about what would happen to the coil after half a turn if the current never changed, and how reversing it fixes that.",
      },
    ],
  },
];
