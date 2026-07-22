// electromagnetism-misconceptions.ts
// Topic: O-Level Physics, Electromagnetism (topicKey "t18-electromagnetism")
// The tutor's diagnostic brain: the classic ways students go wrong in Electromagnetism,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 20 - Electromagnetism.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in plain
// words for reading aloud, with no symbols or unit abbreviations.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const ELECTROMAGNETISM_MISCONCEPTIONS: Misconception[] = [
  {
    id: "emag-field-shape",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    label: "Straight-wire field drawn as radial lines",
    belief: "The magnetic field around a straight wire points straight outward, like spokes on a wheel.",
    tell: "The student draws the field around a current-carrying wire as straight lines coming out of it, instead of circles going round it.",
    whyItHappens: "Students often picture a magnetic field spreading outward the way light spreads from a bulb, so they draw arrows pointing away from the wire rather than looping around it.",
    reteach: "The field around a straight wire is a set of circles, one inside the other, all sharing the wire as their centre. Each circle sits in a flat plane that cuts across the wire at a right angle. The field goes round the wire, it does not shoot straight out from it. So when you sketch it, draw rings around the wire, not spokes.",
    microExample: "Looking along the wire, the field lines are complete circles around it, closest together near the wire.",
    figure: "fig-20-01-straight-wire-field.svg",
    check: {
      question: "What shape are the magnetic field lines around a long straight current-carrying wire?",
      answer: "They are circles around the wire, one inside the other, each in a plane at right angles to the wire. They do not point straight outward."
    }
  },
  {
    id: "emag-field-distance",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    label: "Field strength treated as the same at every distance",
    belief: "The magnetic field is equally strong everywhere around the wire, or grows stronger further away.",
    tell: "The student draws the field circles evenly spaced, or says the field is strongest far from the wire.",
    whyItHappens: "Field diagrams are often drawn with neat, equally spaced circles for tidiness, so students forget that the spacing itself carries meaning about strength.",
    reteach: "The field is strongest right next to the wire and gets weaker as you move away. That is why the circles are drawn closest together near the wire and spread further apart further out. Closer circles mean a stronger field. So the field falls off with distance, it does not stay the same and it certainly does not grow.",
    microExample: "Circles are tightly packed close to the wire (strong field) and widely spaced far away (weak field).",
    figure: "fig-20-01-straight-wire-field.svg",
    check: {
      question: "Where is the magnetic field of a straight wire strongest, close to the wire or far from it?",
      answer: "Close to the wire. The field gets weaker as you move away, which is shown by the circles spreading further apart."
    }
  },
  {
    id: "emag-dot-cross",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    label: "Dot and cross symbols swapped",
    belief: "The dot means current going into the page and the cross means current coming out.",
    tell: "The student reads a dot as into the page and a cross as out of the page, which is the wrong way round.",
    whyItHappens: "The two symbols look similar and are easy to swap unless you remember what they picture.",
    reteach: "Think of an arrow. The dot is the sharp tip of an arrow flying towards you, so it means the current is coming out of the page, towards you. The cross is the tail feathers of an arrow flying away from you, so it means the current is going into the page, away from you. Tip coming at you is the dot, feathers going away is the cross.",
    microExample: "Dot means current out of the page (towards you); cross means current into the page (away from you).",
    figure: "fig-20-01-straight-wire-field.svg",
    check: {
      question: "A dot is drawn in the middle of a field diagram. Is the current coming out of the page or going into it?",
      answer: "It is coming out of the page, towards you. The dot is the tip of the arrow. A cross would mean going into the page."
    }
  },
  {
    id: "emag-reverse-field",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    label: "Reversing the current leaves the field unchanged",
    belief: "Reversing the direction of the current does not change the magnetic field.",
    tell: "The student keeps the field arrows pointing the same way after the current has been reversed.",
    whyItHappens: "Students often treat the field as a fixed property of the wire, forgetting that its direction is tied directly to the direction of the current.",
    reteach: "The direction of the field depends on the direction of the current. If you reverse the current, every field circle reverses too, so what was going clockwise now goes anticlockwise. The strength stays the same if the current size is the same, but the direction flips. For a solenoid this is why reversing the current swaps the north and south poles.",
    microExample: "Current out of the page gives an anticlockwise field; reverse it to into the page and the field becomes clockwise.",
    figure: "fig-20-02-right-hand-grip.svg",
    check: {
      question: "You reverse the direction of the current in a straight wire. What happens to its magnetic field?",
      answer: "The field reverses direction too, so the circling arrows swap the way they point. Its strength stays the same if the current size is unchanged."
    }
  },
  {
    id: "emag-grip-hand",
    topicKey: "t18-electromagnetism",
    subtopic: "right-hand-grip-rule",
    label: "Wrong hand or rule used for the field around a wire",
    belief: "You find the field around a current using the left hand, or using Fleming's rule.",
    tell: "The student reaches for the left hand, or for Fleming's rule, when asked for the direction of the field circling a wire.",
    whyItHappens: "There are several hand rules in this topic and they blur together, so students grab the wrong one under pressure.",
    reteach: "To find the field around a current-carrying wire, use the right-hand grip rule. Grip the wire in your right hand with your thumb pointing along the current. Your curled fingers then show the way the field circles the wire. The left hand and Fleming's rule are for something different, the force on a wire in a magnet's field, so keep them out of this. Field around a current means right hand.",
    microExample: "Field around a current: right-hand grip. Fleming's left hand is for the force, not the field.",
    figure: "fig-20-02-right-hand-grip.svg",
    check: {
      question: "Which rule tells you the direction of the magnetic field circling a current-carrying wire?",
      answer: "The right-hand grip rule. You grip the wire with your right hand, thumb along the current, and your curled fingers give the field direction."
    }
  },
  {
    id: "emag-grip-direction",
    topicKey: "t18-electromagnetism",
    subtopic: "right-hand-grip-rule",
    label: "Circling direction read the wrong way",
    belief: "Current coming out of the page makes a clockwise field.",
    tell: "The student says a current out of the page circles clockwise, when the grip rule gives anticlockwise.",
    whyItHappens: "Students often guess the circling direction rather than actually pointing the right thumb out of the page and watching which way the fingers curl.",
    reteach: "Point the thumb of your right hand out of the page, towards yourself. Your fingers curl anticlockwise, so a current coming out of the page gives an anticlockwise field. Turn the thumb the other way, into the page, and the fingers now curl clockwise, so a current into the page gives a clockwise field. Out of the page is anticlockwise, into the page is clockwise.",
    microExample: "Current out of the page: field anticlockwise. Current into the page: field clockwise.",
    figure: "fig-20-02-right-hand-grip.svg",
    check: {
      question: "A current flows out of the page. Which way does its magnetic field circle, clockwise or anticlockwise?",
      answer: "Anticlockwise. Point your right thumb out of the page and your fingers curl anticlockwise. A current into the page would circle clockwise."
    }
  },
  {
    id: "emag-solenoid-field",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    label: "Solenoid field thought strongest outside",
    belief: "A solenoid's field is strongest outside the coil, and the inside is weak.",
    tell: "The student marks the strong, uniform region on the outside of the solenoid instead of inside it.",
    whyItHappens: "Students see the field lines spreading out dramatically outside the coil and read that spreading as strength, when it actually shows the field getting weaker.",
    reteach: "Inside the solenoid the field lines are straight, parallel, and packed close together, so the field there is strong and even. Outside, the lines spread out and curve round from the north pole to the south pole, so the field there is weaker and uneven. The tightly packed lines inside are the strong part. A solenoid behaves just like a bar magnet, with the strong uniform field running through the middle.",
    microExample: "Inside a solenoid: straight, close, strong, uniform. Outside: spread out, curved, weak.",
    figure: "fig-20-03-solenoid-field.svg",
    check: {
      question: "Is the magnetic field of a solenoid strongest inside the coil or outside it?",
      answer: "Inside the coil, where the lines are straight, parallel and close together. Outside, the field spreads out and is weaker."
    }
  },
  {
    id: "emag-solenoid-pole",
    topicKey: "t18-electromagnetism",
    subtopic: "right-hand-grip-rule",
    label: "Solenoid poles found with the wrong grip",
    belief: "For a solenoid you point your thumb along the current and your fingers show the north pole, or a pole is always at a fixed end.",
    tell: "The student uses the straight-wire version of the grip rule on a solenoid, or just picks an end without checking the current direction.",
    whyItHappens: "There are two versions of the grip rule, one for a straight wire and one for a solenoid, and students apply the wrong version because they look alike.",
    reteach: "For a solenoid the grip rule is the other way round from the straight wire. Curl the fingers of your right hand the way the current flows around the turns, and your thumb then points to the north pole. So the fingers follow the current and the thumb finds the pole. Which end is north depends entirely on the current direction, so reverse the current and the poles swap over.",
    microExample: "Solenoid: right fingers follow the current round the turns, thumb points to the N pole.",
    figure: "fig-20-03-solenoid-field.svg",
    check: {
      question: "How do you use your right hand to find the north pole of a solenoid?",
      answer: "Curl your fingers the way the current flows around the turns, and your thumb points to the north pole. The poles depend on the current direction."
    }
  },
  {
    id: "emag-electromagnet-permanent",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    label: "Electromagnet thought to stay magnetised",
    belief: "An electromagnet keeps its magnetism after the current is switched off.",
    tell: "The student says the soft-iron core stays a magnet once the current stops, or treats an electromagnet like a permanent magnet.",
    whyItHappens: "A permanent magnet is the first kind of magnet students meet, so they assume every magnet holds on to its magnetism the same way.",
    reteach: "An electromagnet uses a soft-iron core, and soft iron is easily magnetised but also loses its magnetism almost completely once the current is switched off. That is the whole point of it, you can turn the magnet on and off just by switching the current. A steel bar would hold its magnetism and become a permanent magnet, but soft iron does not. So switch off the current and the electromagnet nearly stops being a magnet.",
    microExample: "Current on: strong magnet. Current off: soft-iron core loses almost all its magnetism.",
    figure: "fig-20-04-soft-iron-core.svg",
    check: {
      question: "What happens to an electromagnet with a soft-iron core when you switch the current off?",
      answer: "It loses almost all of its magnetism. Soft iron does not stay magnetised, which is why an electromagnet can be switched on and off."
    }
  },
  {
    id: "emag-strengthen",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    label: "Wrong idea of what strengthens the magnet or the turning effect",
    belief: "Removing the core, using fewer turns, or lowering the current makes an electromagnet or a coil stronger.",
    tell: "The student picks a change that actually weakens the magnet or the turning effect and calls it a way to make it stronger.",
    whyItHappens: "The factors are easy to mix up, and students sometimes reverse the effect, thinking that fewer turns or less current gives a bigger result.",
    reteach: "Three things make an electromagnet stronger: a larger current, more turns of wire, and a soft-iron core to concentrate the field. Take any of these away and it gets weaker, so removing the core or using fewer turns makes it weaker, not stronger. The very same three factors also increase the turning effect on a current-carrying coil, together with a stronger magnet. More current, more turns, a soft-iron core, that is the pattern.",
    microExample: "Stronger electromagnet: more current, more turns, soft-iron core. Removing the core weakens it.",
    figure: "fig-20-04-soft-iron-core.svg",
    check: {
      question: "Name two changes that would make an electromagnet stronger.",
      answer: "Increase the current and add more turns of wire. Adding a soft-iron core also helps. Removing the core would make it weaker."
    }
  },
  {
    id: "emag-flhr-hand",
    topicKey: "t18-electromagnetism",
    subtopic: "flemings-left-hand-rule",
    label: "Right hand used for the motor-effect force",
    belief: "You find the force on a current-carrying conductor using your right hand.",
    tell: "The student uses the right hand, or a grip rule, to find the direction of the force in the motor effect, and gets the opposite direction.",
    whyItHappens: "The right-hand grip rule for fields is learned first, so students carry the right hand over to the force question, not noticing that this rule needs the left hand.",
    reteach: "The force on a current-carrying conductor in a magnetic field is found with Fleming's left-hand rule. It has to be the left hand. The right hand and the grip rule are for finding the field around a current, which is a different job. If you use the right hand here you will get the force pointing the wrong way. So remember, motor effect and force means the left hand.",
    microExample: "Force on a wire in a field: Fleming's left hand. Field around a wire: right-hand grip.",
    figure: "fig-20-08-flemings-lhr.svg",
    check: {
      question: "Which hand do you use for Fleming's rule to find the force on a current-carrying wire?",
      answer: "The left hand. Fleming's left-hand rule gives the force in the motor effect. The right hand is only for the field around a current."
    }
  },
  {
    id: "emag-flhr-fingers",
    topicKey: "t18-electromagnetism",
    subtopic: "flemings-left-hand-rule",
    label: "Fleming's fingers assigned to the wrong quantities",
    belief: "In Fleming's left-hand rule the first finger is the current, or the thumb is the field.",
    tell: "The student mixes up which finger stands for the field, the current, and the force.",
    whyItHappens: "Three fingers each stand for a different quantity, and without a memory hook students swap them around.",
    reteach: "Hold the thumb and first two fingers of your left hand at right angles to each other. The thumb stands for the motion, that is the force. The first finger stands for the field. The second finger stands for the current. A handy hook is thumb for thrust, first finger for field, second finger for current, in that order. Get the field and current fingers pointing the right way and the thumb shows the force.",
    microExample: "Left hand: thumb = force (motion), First finger = Field, seCond finger = Current.",
    figure: "fig-20-08-flemings-lhr.svg",
    check: {
      question: "In Fleming's left-hand rule, what does the first finger stand for?",
      answer: "The magnetic field. The second finger is the current, and the thumb is the force or motion."
    }
  },
  {
    id: "emag-force-orientation",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    label: "Force thought largest when wire is parallel to the field",
    belief: "The force on a conductor is biggest when it lies parallel to the magnetic field.",
    tell: "The student says the force is greatest when the wire runs along the field lines, and small when it crosses them.",
    whyItHappens: "It feels natural that lining the wire up with the field should give the strongest effect, but the motor effect works the opposite way.",
    reteach: "The force is largest when the conductor is at right angles to the field, cutting straight across the field lines. It shrinks as you turn the wire towards the field direction, and it drops to zero when the wire lies parallel to the field, because then the two fields do not interact to push it sideways. So perpendicular gives the maximum force and parallel gives no force at all.",
    microExample: "Wire perpendicular to the field: maximum force. Wire parallel to the field: zero force.",
    figure: "fig-20-07-force-orientation.svg",
    check: {
      question: "A current-carrying wire lies parallel to a magnetic field. How big is the force on it?",
      answer: "It is zero. The force is largest when the wire is at right angles to the field, and zero when it lies parallel to the field."
    }
  },
  {
    id: "emag-force-direction",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    label: "Force thought to act along the field or the current",
    belief: "The wire is pushed along the field from north to south, or along the current, or straight towards a pole.",
    tell: "The student marks the force pointing the same way as the field or the current, instead of at right angles to both.",
    whyItHappens: "Students expect a push to line up with something they can see, like the field lines or the current, so they miss that the force is perpendicular to both.",
    reteach: "The force on the conductor is at right angles to both the current and the field. It does not run along the field lines, and it does not run along the wire. What happens is that the wire's own field and the magnet's field add up on one side and cancel on the other, so the wire is pushed sideways from the strong side towards the weak side. Fleming's left-hand rule gives you that sideways direction.",
    microExample: "Force is perpendicular to both the current and the field, pushing the wire from the strong-field side to the weak-field side.",
    figure: "fig-20-06-catapult-field.svg",
    check: {
      question: "In which direction is a current-carrying wire pushed in a magnetic field?",
      answer: "At right angles to both the current and the field. It is not pushed along the field lines or along the wire, but sideways."
    }
  },
  {
    id: "emag-reverse-both",
    topicKey: "t18-electromagnetism",
    subtopic: "motor-effect",
    label: "Reversing both current and field thought to reverse the force",
    belief: "If you reverse both the current and the field together, the force reverses.",
    tell: "The student flips the force direction after both the current and the field have been reversed, when it should stay the same.",
    whyItHappens: "Students learn that reversing the current flips the force, and that reversing the field flips the force, then forget that doing both cancels out.",
    reteach: "Reversing the current on its own flips the force, and reversing the field on its own also flips the force. But if you reverse both at the same time, the two flips cancel and the force ends up pointing the same way as before, unchanged. So one reversal flips it, two reversals bring it back. Only a single change of direction actually reverses the force.",
    microExample: "Reverse current only: force flips. Reverse field only: force flips. Reverse both: force unchanged.",
    figure: "fig-20-09-motor-effect-experiment.svg",
    check: {
      question: "You reverse both the current and the magnetic field at the same time. What happens to the force?",
      answer: "It stays the same, in the original direction. Each reversal flips the force, so doing both together cancels out and leaves it unchanged."
    }
  },
  {
    id: "emag-charge-conventional",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    label: "Electron motion treated as the current direction",
    belief: "The conventional current points the same way as a moving electron, so a proton and an electron moving together deflect the same way.",
    tell: "The student applies Fleming's rule to an electron using its actual direction of motion, and gets the same deflection as a positive charge.",
    whyItHappens: "Conventional current and electron flow point in opposite directions, and it is easy to forget that when handling a beam of electrons.",
    reteach: "Conventional current is the direction a positive charge moves, and it is the opposite direction to a moving electron. So when you use Fleming's left-hand rule for an electron beam, point your current finger the opposite way to the electron's motion. Because of this, a positive charge and a negative charge moving the same way through the same field are pushed in opposite directions. Same motion, but opposite current, so opposite deflection.",
    microExample: "A proton moving right: current is to the right. An electron moving right: current is to the left, so it deflects the opposite way.",
    figure: "fig-20-10-charged-particles.svg",
    check: {
      question: "A proton and an electron move the same way through the same magnetic field. Are they deflected the same way or opposite ways?",
      answer: "Opposite ways. The electron's current points the opposite way to its motion, so it deflects opposite to the proton."
    }
  },
  {
    id: "emag-coil-slides",
    topicKey: "t18-electromagnetism",
    subtopic: "motor-effect",
    label: "Coil thought to slide sideways instead of rotating",
    belief: "A current-carrying coil in a field is pushed sideways as a whole, rather than turning.",
    tell: "The student says both sides of the coil are pushed the same way, so the coil slides across instead of spinning.",
    whyItHappens: "Students apply the force to the coil as one object and forget that its two sides carry current in opposite directions.",
    reteach: "The two opposite sides of the coil carry current in opposite directions. In the same field, that means one side is pushed up while the other is pushed down. These two equal but opposite forces do not slide the coil across, they twist it, forming what we call a couple that makes the coil rotate. So it spins about its axis rather than sliding sideways, and that turning effect is the basis of the electric motor.",
    microExample: "One side of the coil is forced up, the opposite side is forced down, so the coil rotates.",
    figure: "fig-20-11-turning-coil.svg",
    check: {
      question: "Why does a current-carrying coil in a magnetic field rotate rather than just slide sideways?",
      answer: "Its two sides carry current in opposite directions, so one side is pushed up and the other down. These opposite forces twist the coil round."
    }
  },
  {
    id: "emag-commutator-purpose",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    label: "Split-ring commutator's job misunderstood",
    belief: "The split-ring commutator increases the field, keeps the current steady, or stores charge.",
    tell: "The student describes the commutator as boosting the magnet or holding the current constant, rather than reversing it.",
    whyItHappens: "The commutator is an unfamiliar part, so students guess a general helpful role for it instead of its actual switching job.",
    reteach: "The split-ring commutator reverses the direction of the current in the coil every half-turn. That is its one key job. As the coil passes the vertical, the two halves of the ring swap which brush they touch, so the current in the coil flips. This keeps the side that is on top always feeling a downward push and the side underneath always feeling an upward push, so the coil keeps turning the same way instead of turning back.",
    microExample: "Every half-turn the split ring swaps brushes, so the current in the coil reverses and the rotation stays in one direction.",
    figure: "fig-20-12-dc-motor.svg",
    check: {
      question: "What is the job of the split-ring commutator in a d.c. motor?",
      answer: "It reverses the current in the coil every half-turn, so the coil keeps rotating in the same direction instead of turning back."
    }
  },
  {
    id: "emag-commutator-slipring",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    label: "Slip rings thought to keep a d.c. motor turning one way",
    belief: "A d.c. motor uses plain slip rings to keep the coil rotating in one direction.",
    tell: "The student names slip rings, or some other part, as the thing that keeps the motor spinning the same way.",
    whyItHappens: "Slip rings and a split ring look similar, but a solid slip ring does not swap the connections, so it cannot reverse the current.",
    reteach: "A d.c. motor needs a split-ring commutator, not plain slip rings. The ring is split into two halves exactly so that the connections swap over every half-turn and reverse the current in the coil. Plain slip rings stay connected the same way all the time, so they would not reverse the current, and the coil would just rock back and forth instead of spinning. The split is what makes the motor keep turning one way.",
    microExample: "Split ring: connections swap each half-turn, current reverses, coil spins one way. Plain slip rings would not reverse it.",
    figure: "fig-20-12-dc-motor.svg",
    check: {
      question: "Which component keeps a d.c. motor rotating in one direction, and why not plain slip rings?",
      answer: "A split-ring commutator. Its split lets the connections swap every half-turn to reverse the current, which plain slip rings cannot do."
    }
  },
  {
    id: "emag-motor-vertical",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    label: "Motor thought to stop dead at the vertical",
    belief: "The coil stops at the vertical position because the current is momentarily cut off there.",
    tell: "The student says the motor halts each time the coil reaches vertical, since no current flows at that instant.",
    whyItHappens: "It is true that the current briefly stops at the vertical, so students conclude the motion must stop too, forgetting about momentum.",
    reteach: "At the vertical position the gaps in the split ring line up with the brushes, so for an instant no current flows and there is no turning force. But the coil does not stop, because its own momentum carries it past the vertical. Just after that the brushes touch the ring again, the current flows once more, now reversed, and the turning force comes back to push it on. So it coasts through the dead spot and keeps going.",
    microExample: "At the vertical the current is briefly zero, but momentum carries the coil past, then the reversed current restores the push.",
    figure: "fig-20-13-motor-cycle.svg",
    check: {
      question: "No current flows when the motor coil is vertical. Why does the coil not stop there?",
      answer: "Its own momentum carries it past the vertical. Then the brushes touch the ring again, the current flows reversed, and the push returns."
    }
  },
  {
    id: "emag-soft-iron-cylinder",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    label: "Soft-iron cylinder's purpose misunderstood",
    belief: "The coil is wound on a soft-iron cylinder to add weight or to store the current.",
    tell: "The student explains the soft-iron cylinder as extra mass for steadiness, or as somewhere the current is held.",
    whyItHappens: "Students know the soft iron matters but guess a mechanical reason rather than its magnetic one.",
    reteach: "The coil is wound on a soft-iron cylinder because soft iron concentrates the magnetic field, and a stronger field means a greater turning effect on the coil. It is there for magnetic reasons, not to add weight and not to store current. The same soft iron loses its magnetism easily once the current stops, so it helps while the motor runs without becoming a permanent magnet.",
    microExample: "Soft-iron cylinder concentrates the field, so the coil feels a greater turning effect.",
    figure: "fig-20-12-dc-motor.svg",
    check: {
      question: "Why is the coil in a d.c. motor wound on a soft-iron cylinder?",
      answer: "The soft iron concentrates the magnetic field, which gives the coil a greater turning effect. It is not there to add weight or store current."
    }
  },
  {
    id: "emag-motor-speed",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    label: "Rheostat's effect on motor speed reversed",
    belief: "Increasing the resistance in the circuit makes the motor turn faster.",
    tell: "The student says more resistance speeds the motor up, or that the rheostat reverses or stops it.",
    whyItHappens: "Students link more resistance with more effort and expect that to mean more speed, missing that resistance reduces the current.",
    reteach: "A rheostat controls the motor by changing the current. Adding more resistance lets less current flow, and a smaller current gives a smaller turning effect, so the motor turns more slowly. Less resistance lets more current through, giving a bigger turning effect and a faster motor. So more resistance means a slower motor, not a faster one, and it does not reverse the direction.",
    microExample: "More resistance means less current, a smaller turning effect, and a slower motor.",
    figure: "fig-20-12-dc-motor.svg",
    check: {
      question: "A rheostat in a motor circuit is set to a higher resistance. What happens to the motor?",
      answer: "It slows down. The higher resistance lets less current flow, so the turning effect is smaller. It does not speed up or reverse."
    }
  }
];
