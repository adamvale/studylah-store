import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP6 Electricity and Magnetism (Practical Chapter 6), section 6.
// Grounded in the Practical Chapter 06 magnetism material. Conceptual box: no formula, no working.

export const BOXES: Subconcept[] = [
  {
    id: "tp6.6",
    code: "TP6.6",
    title: "The magnetic effect of a current and induction",
    blurb: "Field round a wire, the solenoid, the motor effect and electromagnetic induction",
    steps: [
      {
        kind: "concept",
        heading: "A current makes a field",
        figure: "fig-pr6-07-straight-wire-field",
        body: "A *current* in a wire sets up a *magnetic field* around it. The field lines are *concentric circles* wrapped round the wire, not straight lines.",
        say: "Whenever a current flows in a wire, it makes a magnetic field around that wire. In the picture the current wire is amber, and the blue dashed lines are the field. Notice they are complete circles wrapped round the wire, closer together near the wire where the field is stronger. The field forms rings, never straight lines.",
      },
      {
        kind: "concept",
        heading: "The right-hand grip rule",
        figure: "fig-pr6-07-straight-wire-field",
        body: "The *right-hand grip rule* gives the field direction: point the *thumb* along the current, and the curled fingers follow the field. Current *out of the page* gives an *anticlockwise* field; into the page gives a clockwise one.",
        say: "To find which way the field points, use the right-hand grip rule. Imagine gripping the wire with your right hand, thumb pointing along the current. Your curled fingers then show the way the field circles round. In the diagram the amber dot means current coming out of the page toward you, and the blue field circles run anticlockwise. A cross, meaning current into the page, would give a clockwise field.",
      },
      {
        kind: "concept",
        heading: "The solenoid",
        figure: "fig-pr6-08-solenoid",
        body: "A *coil*, or *solenoid*, makes a field just like a *bar magnet*. The end where the current looks anticlockwise to you is the *north* pole.",
        say: "Wind the wire into a coil, called a solenoid, and the separate rings add together into a field shaped just like a bar magnet's. Here the amber coil carries the current and the blue lines run from the north pole, marked N in white, round to the south pole marked S. The trick for the poles: look at one end of the coil, and if the current there runs anticlockwise, that end is the north pole.",
      },
      {
        kind: "concept",
        heading: "A stronger electromagnet",
        body: "You strengthen a *solenoid's* field in 3 ways: more *current*, more *turns* on the coil, or slide a *soft-iron core* inside it.",
        say: "A coil like this is an electromagnet, and there are 3 ways to make it stronger. Increase the current through it, add more turns of wire, or push a soft-iron core into the middle. Soft iron is used because it magnetises strongly while the current flows but loses its magnetism cleanly when you switch off.",
      },
      {
        kind: "concept",
        heading: "The motor effect",
        body: "A current in a *magnetic field* feels a *force*: this is the *motor effect*. *Fleming's left-hand rule* gives its direction: thumb force, first finger field, second finger current.",
        say: "Put a current-carrying wire into a magnetic field and it is pushed sideways. That push is the motor effect, and it is what turns an electric motor. To find the direction, hold out your left hand with thumb, first finger and second finger at right angles. The thumb is the motion or force, the first finger is the field pointing from north to south, and the second finger is the current. Left hand for the force.",
      },
      {
        kind: "concept",
        heading: "Electromagnetic induction",
        body: "Move a conductor through a field and a voltage is *induced*. *Faraday*: the e.m.f. is proportional to the *rate of change* of flux. *Lenz*: the induced current opposes the change that makes it.",
        say: "The motor effect works in reverse too. Move a conductor across a magnetic field, or change the field through a coil, and a voltage is induced. Faraday's law says the induced e.m.f. is bigger the faster the flux changes, so a quicker movement gives more voltage. Lenz's law tells you the direction: the induced current always flows so as to oppose the very change that is producing it.",
      },
      {
        kind: "insight",
        body: "This induction is how an *a.c. generator* works. There the *right-hand* rule gives the induced-current direction, so remember: *left* hand for the motor force, *right* hand for the generator.",
        say: "This induced voltage is the whole basis of the a.c. generator: spin a coil in a field and it produces alternating current. For the generator you switch to Fleming's right-hand rule to get the direction of the induced current. So keep the pair straight: left hand for the force on a motor, right hand for the current from a generator.",
      },
      {
        kind: "choice",
        question: "A current flows out of the page in a straight wire. Which way does its magnetic field circle?",
        figure: "fig-pr6-07-straight-wire-field",
        options: ["Clockwise", "Anticlockwise", "Straight out from the wire", "There is no field"],
        correct: 1,
        ask: "Grip the wire with your right hand, thumb pointing out of the page toward you. Which way do your fingers curl?",
        hints: [
          "Current out of the page is drawn as a dot; into the page is a cross.",
          "With the thumb pointing out toward you, the fingers curl anticlockwise.",
        ],
        explain: "The field circles anticlockwise. By the right-hand grip rule, current out of the page gives an anticlockwise field; current into the page would give a clockwise one.",
      },
      {
        kind: "choice",
        question: "Looking end-on at a solenoid, the current at that end runs anticlockwise. Which pole faces you?",
        figure: "fig-pr6-08-solenoid",
        options: ["A south pole", "No pole forms at the end", "A north pole", "It depends on the core material"],
        correct: 2,
        ask: "Use the coil rule: the end where the current looks anticlockwise is one particular pole.",
        hints: [
          "Anticlockwise current viewed end-on marks the north pole.",
          "The other end, where the current looks clockwise, is the south pole.",
        ],
        explain: "A north pole faces you. When you look end-on and the current runs anticlockwise, that end of the solenoid is the north pole.",
      },
      {
        kind: "choice",
        question: "Which rule gives the direction of the force on a current-carrying wire in a magnetic field?",
        options: ["Fleming's left-hand rule", "Fleming's right-hand rule", "The right-hand grip rule", "Lenz's law"],
        correct: 0,
        ask: "The force on a current is the motor effect. Which hand do you use for the motor effect?",
        hints: [
          "The grip rule is for the field round a wire; the right-hand rule is for a generator's induced current.",
          "For the force in a motor, thumb force, first finger field, second finger current, use the left hand.",
        ],
        explain: "Fleming's left-hand rule gives the force, because that force is the motor effect. The right-hand rule is for the induced current in a generator, and the grip rule is for the field round a straight wire.",
      },
      {
        kind: "choice",
        question: "Which change would NOT make a solenoid's magnetic field stronger?",
        options: ["Increasing the current", "Adding more turns to the coil", "Inserting a soft-iron core", "Reversing the current direction"],
        correct: 3,
        ask: "3 of these increase the field strength. One only changes which end is north, not how strong the field is.",
        hints: [
          "More current, more turns and a soft-iron core all strengthen the field.",
          "Reversing the current swaps the north and south poles but keeps the same strength.",
        ],
        explain: "Reversing the current does not make the field stronger; it only swaps the north and south poles. More current, more turns, or a soft-iron core are the 3 ways to increase the strength.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement under the law it describes.",
        bins: ["Faraday's law", "Lenz's law"],
        items: [
          { text: "the induced e.m.f. is proportional to the rate of change of flux", bin: 0 },
          { text: "a faster movement of the magnet gives a bigger induced e.m.f.", bin: 0 },
          { text: "more turns on the coil give a bigger induced e.m.f.", bin: 0 },
          { text: "the induced current opposes the change that produces it", bin: 1 },
          { text: "the induced current flows so as to resist the magnet's motion", bin: 1 },
        ],
        ask: "Faraday's law is about the size of the induced e.m.f.; Lenz's law is about its direction. Tap each statement and drop it in the right bin.",
        hints: [
          "Anything about how big the e.m.f. is, or what makes it bigger, belongs to Faraday.",
          "Anything about opposing or resisting the change belongs to Lenz.",
        ],
        explain: "Faraday's law fixes the size of the induced e.m.f., proportional to the rate of change of flux, so more speed or more turns means more voltage. Lenz's law fixes the direction: the induced current always opposes the change producing it.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this summary of the magnetic rules is wrong. Find it.",
        lines: [
          "A current in a wire sets up a magnetic field of concentric circles around it.",
          "The right-hand grip rule gives the direction of that field.",
          "Fleming's right-hand rule gives the motor force on a current in a field.",
          "Moving a conductor through a field induces a voltage in it.",
        ],
        errorLine: 2,
        ask: "Check which hand belongs to the force in a motor. One rule is for the motor force, the other for a generator's induced current.",
        hints: [
          "The field round a wire really is concentric circles, so line 0 is fine.",
          "The motor force uses the LEFT hand; the right hand is for the induced current in a generator.",
        ],
        explain: "The wrong line says Fleming's right-hand rule gives the motor force. It is the left-hand rule that gives the force on a current in a field; the right-hand rule gives the induced current in a generator.",
      },
    ],
  },
];
