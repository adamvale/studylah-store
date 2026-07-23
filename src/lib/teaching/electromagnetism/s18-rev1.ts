import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, Revision 1. Checkpoint over KB Chapter 20,
// sections t18.1 to t18.3: the magnetic effect of a current, the circuit
// breaker, and the force on a current-carrying conductor. Question-only.
// Conceptual span: NO working, NO formula.

export const BOXES: Subconcept[] = [
  {
    id: "t18.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: magnetic effect of a current, the circuit breaker, force on a conductor",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "What is the shape of the magnetic field around a long straight wire carrying a current?",
        figure: "fig-20-01-straight-wire-field",
        options: [
          "Straight lines running along the wire",
          "A single loop around one end of the wire",
          "Concentric circles around the wire",
          "A uniform field, the same everywhere in the room",
        ],
        correct: 2,
        ask: "Picture the grey field lines drawn around the wire in the figure. Do they run along the wire or wrap around it? Which option matches?",
        hints: [
          "The field wraps around the wire, and it is strongest close to the wire.",
          "Seen end-on, the field lines are rings, one inside the next, centred on the wire.",
        ],
        explain: "The field is a set of concentric circles around the wire, closest together and strongest near the wire. It is not straight lines and it is not uniform.",
      },
      {
        kind: "choice",
        question: "A straight wire carries current straight out of the page towards you. Using the right-hand grip rule, which way does its magnetic field point?",
        options: [
          "Anticlockwise",
          "Clockwise",
          "Straight up the page",
          "There is no field at all",
        ],
        correct: 0,
        ask: "Point your right thumb out of the page towards yourself and let your fingers curl. Which way round do they go?",
        hints: [
          "The right-hand grip rule: thumb along the current, curled fingers along the field.",
          "For current coming out of the page the fingers curl anticlockwise; into the page they curl clockwise.",
        ],
        explain: "For current out of the page the field is anticlockwise. If the current went into the page instead, the field would be clockwise. Reversing the current reverses the field.",
      },
      {
        kind: "choice",
        question: "Why is a circuit breaker often preferred to a fuse for protecting a circuit?",
        options: [
          "It lets no current through at all",
          "It needs no current to work",
          "It is always cheaper than a length of wire",
          "It can be reset instead of replaced",
        ],
        correct: 3,
        ask: "Both a fuse and a breaker cut off a circuit when the current is too large. Think about what you have to do to each one afterwards to use the circuit again.",
        hints: [
          "A fuse contains a wire that melts, so it is used up and must be replaced.",
          "A circuit breaker trips open but can be switched back on with a reset button.",
        ],
        explain: "A circuit breaker does the same job as a fuse but can be reset, so you press a button rather than fit a new part. A fuse has to be replaced once its wire melts.",
      },
      {
        kind: "choice",
        question: "In a circuit breaker, what pulls the iron bolt across to trip the switch open?",
        figure: "fig-20-05-circuit-breaker",
        options: [
          "The weak field of the normal, safe current",
          "The strong field of a large fault current",
          "The heat given off by the warm wire",
          "A spring that pushes the bolt outwards",
        ],
        correct: 1,
        ask: "Under normal current the bolt is not pulled. Look at the right-hand panel of the figure, where the current is too large. What has become strong enough to attract the bolt?",
        hints: [
          "The breaker contains an electromagnet whose strength depends on the current.",
          "A large fault current makes the electromagnet strong enough to attract the iron bolt.",
        ],
        explain: "A large fault current makes the electromagnet strong enough to attract the iron bolt, which releases the catch so the spring opens the contacts. At the safe current the field is too weak to do this.",
      },
      {
        kind: "choice",
        question: "A current-carrying wire sits in a magnetic field. When is the force on the wire a maximum?",
        figure: "fig-20-07-force-orientation",
        options: [
          "When the wire lies along the field lines",
          "When the current is switched off",
          "When the wire is perpendicular to the field",
          "When the wire is tilted at 45 degrees only",
        ],
        correct: 2,
        ask: "Compare the 2 panels in the figure. In one the wire crosses the field at a right angle; in the other it runs along the field. Which one is labelled with the larger force?",
        hints: [
          "The force is largest when the wire cuts straight across the field lines.",
          "At 90 degrees to the field the force is a maximum; parallel to the field the force is zero.",
        ],
        explain: "The force is a maximum when the wire is perpendicular to the field, at 90 degrees. It falls to zero when the wire lies parallel to the field.",
      },
      {
        kind: "order",
        prompt: "Put the events of a circuit breaker tripping into the correct order.",
        items: [
          "A fault makes the current in the circuit rise",
          "The electromagnet becomes strong enough to attract the iron bolt",
          "The bolt is pulled across and releases the catch",
          "The spring pulls the contacts apart and the circuit breaks",
        ],
        ask: "Start with what goes wrong in the circuit, then follow how the electromagnet responds and what finally opens the switch. Put the steps in order.",
        hints: [
          "Nothing moves until the current, and so the electromagnet, grows too strong.",
          "The bolt is attracted first, and only then does the spring pull the contacts apart.",
        ],
        explain: "First the fault raises the current, then the electromagnet grows strong enough to attract the bolt, the bolt releases the catch, and finally the spring pulls the contacts apart to break the circuit.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it makes an electromagnet stronger.",
        bins: ["Makes it stronger", "Does not make it stronger"],
        items: [
          { text: "increasing the current", bin: 0 },
          { text: "adding more turns to the coil", bin: 0 },
          { text: "putting a soft-iron core inside the coil", bin: 0 },
          { text: "painting the wire a brighter colour", bin: 1 },
          { text: "winding the coil on a wooden rod instead of iron", bin: 1 },
          { text: "switching the current off", bin: 1 },
        ],
        ask: "For each change, ask whether it adds to the magnetic field the coil sets up. More current, more turns or a soft-iron core all help. Tap each one into its bin.",
        hints: [
          "More current, more turns and a soft-iron core all strengthen the field.",
          "Colour, a wooden core and cutting off the current do nothing to help; with no current there is no field at all.",
        ],
        explain: "More current, more turns and a soft-iron core all make the electromagnet stronger. Colour makes no difference, wood does not concentrate the field like iron, and with the current off there is no field at all.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of the solenoid.",
        segments: [
          "A coil of wire carrying a current is called a ",
          ", which acts as an ",
          ". You can make its field stronger by adding a soft-iron ",
          ".",
        ],
        bank: ["solenoid", "electromagnet", "core", "insulator", "resistor", "permanent"],
        answer: ["solenoid", "electromagnet", "core"],
        ask: "Recall the name for a current-carrying coil, what kind of magnet it becomes, and what you slide inside it to concentrate the field.",
        hints: [
          "A coil that behaves like a bar magnet only while current flows is a solenoid acting as an electromagnet.",
          "The piece slid inside to concentrate the field is a soft-iron core.",
        ],
        explain: "A current-carrying coil is a solenoid, which acts as an electromagnet. A soft-iron core placed inside it concentrates the field and makes it stronger.",
      },
      {
        kind: "match",
        prompt: "Match each situation for the motor effect to its result.",
        pairs: [
          { left: "Wire perpendicular to the field", right: "Force is a maximum" },
          { left: "Wire parallel to the field", right: "Force is zero" },
          { left: "A larger current in the wire", right: "A bigger force on the wire" },
          { left: "The catapult effect", right: "The 2 fields add on one side and cancel on the other" },
        ],
        ask: "Think about how the angle of the wire and the size of the current change the push, and what the word catapult tells you about the combined field. Pair each one up.",
        hints: [
          "The force is largest at 90 degrees to the field and zero along it.",
          "The catapult effect comes from the wire's field and the magnet's field adding on one side and cancelling on the other.",
        ],
        explain: "The force is a maximum when the wire is perpendicular to the field and zero when parallel. A larger current gives a bigger force. In the catapult effect the 2 fields add on one side and cancel on the other, pushing the wire towards the weak side.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this description of electromagnets is wrong. Tap the mistaken line.",
        lines: [
          "A current in a wire always sets up a magnetic field around it.",
          "Around a straight wire this field is a set of straight lines running along the wire.",
          "A solenoid carrying a current behaves like a bar magnet.",
          "Adding a soft-iron core makes the electromagnet stronger.",
        ],
        errorLine: 1,
        ask: "3 of these lines are correct facts about electromagnets. Check the one that describes the shape of the field around a straight wire.",
        hints: [
          "A current does make a field, a solenoid does act like a bar magnet, and iron does strengthen it.",
          "The field around a straight wire is not straight lines. Recall what shape the field lines actually take.",
        ],
        explain: "The field around a straight wire is concentric circles, not straight lines running along the wire. The other 3 lines are all correct.",
      },
      {
        kind: "open",
        prompt: "Explain how a solenoid can act as an electromagnet, and how you could reverse its poles.",
        modelAnswer: "A solenoid is a coil of wire. When a current flows through it, it sets up a magnetic field shaped like a bar magnet's, with a north pole at one end and a south pole at the other, so it acts as an electromagnet. The right-hand grip rule, or the rule that the anticlockwise end is north, gives which end is which. Reversing the direction of the current reverses the field, so the north and south poles swap over. Switching the current off removes the field completely.",
        marks: [
          "A current in the coil gives a bar-magnet-like field, so it is an electromagnet.",
          "The poles can be found with the right-hand grip rule (anticlockwise end is north).",
          "Reversing the current reverses the field and swaps the poles.",
        ],
        ask: "Think about what happens when a current flows in the coil, what shape of field it makes, and what changes if that current runs the other way.",
      },
      {
        kind: "open",
        prompt: "A straight wire carrying a current lies between the poles of a magnet. Explain why it feels a force, and say when that force is largest and when it is zero.",
        figure: "fig-20-06-catapult-field",
        modelAnswer: "The wire's own magnetic field and the magnet's field combine. On one side of the wire they point the same way and add to give a strong field; on the other side they oppose and cancel to give a weak region, a neutral point. The wire is pushed from the strong side towards the weak side. This is the motor or catapult effect. The force is a maximum when the wire is perpendicular to the field and zero when the wire lies parallel to the field. A larger current or a stronger magnet gives a bigger force.",
        marks: [
          "The wire's field and the magnet's field add on one side and cancel on the other.",
          "The wire is pushed from the strong side to the weak side (motor or catapult effect).",
          "Force is a maximum when perpendicular to the field and zero when parallel.",
        ],
        ask: "Think about how the 2 magnetic fields combine on each side of the wire, and how the angle between the wire and the field changes the push.",
      },
    ],
  },
];
