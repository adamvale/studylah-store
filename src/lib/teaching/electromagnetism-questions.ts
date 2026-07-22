// electromagnetism-questions.ts
// Teaching question bank for O-Level Physics, Electromagnetism (topicKey "t18-electromagnetism").
// Every wrong option maps to the misconception it reveals (see electromagnetism-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 20 - Electromagnetism.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const ELECTROMAGNETISM_QUESTIONS: TeachQuestion[] = [
  {
    id: "emag-q-01",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    stem: "What does the magnetic field around a long straight current-carrying wire look like?",
    figure: "fig-20-01-straight-wire-field.svg",
    options: [
      "A set of concentric circles around the wire",
      "Straight lines pointing outward from the wire, like spokes",
      "Straight lines running parallel to the wire",
      "Circles that are widest and strongest far from the wire"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-field-shape", 2: "emag-field-shape", 3: "emag-field-distance" },
    walkthrough: [
      "The field goes round the wire, not straight out from it.",
      "It forms circles, one inside the other, all centred on the wire.",
      "Each circle sits in a plane at right angles to the wire.",
      "The circles are closest together near the wire, where the field is strongest."
    ],
    explain: "The field around a straight wire is a set of circles around it, each in a plane at right angles to the wire. Lines pointing outward like spokes or running along the wire get the shape wrong, and the field is strongest close to the wire, not far away, so the circles bunch up near it."
  },
  {
    id: "emag-q-02",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    stem: "Where is the magnetic field of a straight current-carrying wire strongest?",
    figure: "fig-20-01-straight-wire-field.svg",
    options: [
      "Close to the wire",
      "Far from the wire",
      "It is equally strong everywhere around the wire",
      "Only at the two ends of the wire"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-field-distance", 2: "emag-field-distance", 3: "emag-field-distance" },
    walkthrough: [
      "The field circles are drawn closest together near the wire.",
      "Closely packed lines mean a strong field.",
      "As you move away, the circles spread apart, showing the field getting weaker.",
      "So the field is strongest right next to the wire."
    ],
    explain: "The field is strongest close to the wire and gets weaker as you move away, which is why the circles are packed tightly near the wire and spread out further off. It is not the same everywhere, and it does not grow with distance."
  },
  {
    id: "emag-q-03",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    stem: "In a field diagram, a dot is drawn in the centre of the circles. What does the dot mean?",
    figure: "fig-20-01-straight-wire-field.svg",
    options: [
      "Current coming out of the page, towards you",
      "Current going into the page, away from you",
      "A field line heading into the page",
      "No current flows at that point"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-dot-cross", 2: "emag-dot-cross", 3: "emag-dot-cross" },
    walkthrough: [
      "Picture an arrow standing for the current.",
      "The dot is the sharp tip of an arrow flying towards you.",
      "So the current is coming out of the page, towards you.",
      "A cross would be the tail feathers, meaning the current goes into the page."
    ],
    explain: "The dot is the tip of an arrow coming at you, so it means the current is out of the page, towards you. The cross is the tail feathers, meaning into the page. The dot does show current, so reading it as no current or as going into the page mixes up the two symbols."
  },
  {
    id: "emag-q-04",
    topicKey: "t18-electromagnetism",
    subtopic: "right-hand-grip-rule",
    stem: "Which rule gives the direction of the magnetic field circling a current-carrying wire?",
    figure: "fig-20-02-right-hand-grip.svg",
    options: [
      "The right-hand grip rule",
      "Fleming's left-hand rule",
      "The left-hand grip rule",
      "Fleming's right-hand rule"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-grip-hand", 2: "emag-grip-hand", 3: "emag-grip-hand" },
    walkthrough: [
      "To find the field around a current, use your right hand.",
      "Grip the wire with the thumb pointing along the current.",
      "Your curled fingers then show which way the field circles.",
      "Fleming's rule and the left hand are for the force, a different question."
    ],
    explain: "The field around a current-carrying wire comes from the right-hand grip rule: thumb along the current, curled fingers showing the field. Fleming's rule and anything using the left hand belong to the force on a wire, so they are the wrong tools for finding the field."
  },
  {
    id: "emag-q-05",
    topicKey: "t18-electromagnetism",
    subtopic: "right-hand-grip-rule",
    stem: "A current flows out of the page. Using the right-hand grip rule, which way does its magnetic field circle?",
    figure: "fig-20-02-right-hand-grip.svg",
    options: [
      "Anticlockwise, in complete circles",
      "Clockwise, in complete circles",
      "Straight outward from the wire, in all directions",
      "It has no definite direction"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-grip-direction", 2: "emag-field-shape", 3: "emag-grip-direction" },
    walkthrough: [
      "Point the thumb of your right hand out of the page, towards yourself.",
      "Watch which way your fingers curl.",
      "They curl anticlockwise.",
      "So a current out of the page gives an anticlockwise field."
    ],
    explain: "Pointing your right thumb out of the page curls your fingers anticlockwise, so the field circles anticlockwise. Clockwise would be for a current into the page, the field is not straight outward but circular, and it certainly has a definite direction."
  },
  {
    id: "emag-q-06",
    topicKey: "t18-electromagnetism",
    subtopic: "magnetic-field-of-a-current",
    stem: "The current in a straight wire is reversed in direction, keeping the same size. What happens to its magnetic field?",
    figure: "fig-20-01-straight-wire-field.svg",
    options: [
      "It reverses direction, with the same strength",
      "It stays exactly the same",
      "It disappears completely",
      "It stays fixed and can no longer be changed"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-reverse-field", 2: "emag-reverse-field", 3: "emag-reverse-field" },
    walkthrough: [
      "The direction of the field depends on the direction of the current.",
      "Reverse the current, and every field circle reverses too.",
      "So a field that was anticlockwise becomes clockwise.",
      "The strength is unchanged because the current size is the same."
    ],
    explain: "Reversing the current reverses the field, so the circling arrows swap the way they point, while the strength stays the same because the current size has not changed. The field does not stay the same and does not vanish, it simply flips direction."
  },
  {
    id: "emag-q-07",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    stem: "Where is the magnetic field of a current-carrying solenoid strong and uniform?",
    figure: "fig-20-03-solenoid-field.svg",
    options: [
      "Inside the solenoid, where the lines are straight and close together",
      "Outside the solenoid, where the lines spread out",
      "Only right at the two ends of the solenoid",
      "The field is equally weak everywhere"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-solenoid-field", 2: "emag-solenoid-field", 3: "emag-solenoid-field" },
    walkthrough: [
      "Inside the solenoid the field lines are straight, parallel and packed close together.",
      "Closely packed straight lines mean a strong, even field.",
      "Outside, the lines spread out and curve from pole to pole, so the field is weaker.",
      "So the strong, uniform field is the one inside the coil."
    ],
    explain: "Inside the solenoid the lines are straight, parallel and close together, so the field there is strong and uniform, just like inside a bar magnet. The spreading lines outside show a weaker field, so reading the outside as the strong part gets it backwards."
  },
  {
    id: "emag-q-08",
    topicKey: "t18-electromagnetism",
    subtopic: "right-hand-grip-rule",
    stem: "How do you find the north pole of a solenoid using your right hand?",
    figure: "fig-20-03-solenoid-field.svg",
    options: [
      "Curl your fingers the way the current flows round the turns; your thumb points to the N pole",
      "Point your thumb along the current in the wire; your fingers point to the N pole",
      "Use Fleming's left-hand rule, with the thumb as the N pole",
      "The N pole is always the left-hand end, whatever the current"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-solenoid-pole", 2: "emag-grip-hand", 3: "emag-solenoid-pole" },
    walkthrough: [
      "For a solenoid, your fingers follow the current around the turns.",
      "Curl the fingers of your right hand that way.",
      "Your thumb then points to the north pole.",
      "This is the opposite arrangement to the straight-wire grip rule."
    ],
    explain: "For a solenoid you curl your right fingers along the current in the turns and your thumb points to the north pole. Pointing the thumb along the current is the straight-wire version, Fleming's rule is for the force, and which end is north depends entirely on the current, so it is never fixed at one end."
  },
  {
    id: "emag-q-09",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    stem: "A coil is wound on a soft-iron rod. Looking in at end A, the current on the near side runs upward, so it circulates anticlockwise at that end. Which end is the N pole?",
    figure: "fig-20-14-we-solenoid-rod.svg",
    options: [
      "End A is the N pole",
      "End B is the N pole",
      "Both ends are N poles",
      "Neither end is a pole"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-solenoid-pole", 2: "emag-solenoid-pole", 3: "emag-solenoid-field" },
    walkthrough: [
      "Curl your right fingers the way the current flows at end A, which is anticlockwise.",
      "Your thumb then points out of end A, towards you.",
      "The thumb points to the north pole.",
      "So end A is the N pole, and end B is the S pole."
    ],
    explain: "Looking in at end A the current runs anticlockwise, and by the right-hand grip rule an anticlockwise end is a north pole, so end A is the N pole and end B is the S pole. A solenoid always has one north and one south pole, so both ends the same, or no poles at all, cannot be right."
  },
  {
    id: "emag-q-10",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    stem: "An electromagnet has a soft-iron core. What happens when the current is switched off?",
    figure: "fig-20-04-soft-iron-core.svg",
    options: [
      "It loses almost all of its magnetism",
      "It keeps its magnetism permanently",
      "It stays exactly as strong as before",
      "Its north and south poles swap over"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-electromagnet-permanent", 2: "emag-electromagnet-permanent", 3: "emag-reverse-field" },
    walkthrough: [
      "The core is soft iron, which is easily magnetised.",
      "Soft iron also loses its magnetism easily once the current stops.",
      "So switching off the current removes almost all the magnetism.",
      "That is why an electromagnet can be turned on and off."
    ],
    explain: "Soft iron loses its magnetism almost completely when the current stops, so the electromagnet nearly stops being a magnet, which is exactly what lets us switch it on and off. It does not hold its magnetism or stay as strong, and switching off does not swap the poles, only reversing the current would do that."
  },
  {
    id: "emag-q-11",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    stem: "Which statement about an electromagnet is true?",
    figure: "fig-20-04-soft-iron-core.svg",
    options: [
      "It can be switched on and off",
      "It keeps its magnetism after the current is switched off",
      "Its strength does not depend on the number of turns",
      "A soft-iron core cannot make it any stronger"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-electromagnet-permanent", 2: "emag-strengthen", 3: "emag-strengthen" },
    walkthrough: [
      "An electromagnet is magnetic only while current flows.",
      "Switch the current off and the soft-iron core loses its magnetism.",
      "So you can turn the magnet on and off with the switch.",
      "More turns and a soft-iron core both make it stronger."
    ],
    explain: "The great feature of an electromagnet is that it can be switched on and off, because soft iron does not keep its magnetism. Its strength does depend on the number of turns, and a soft-iron core makes it much stronger, so those statements are false."
  },
  {
    id: "emag-q-12",
    topicKey: "t18-electromagnetism",
    subtopic: "solenoids-and-electromagnets",
    stem: "Which change would make an electromagnet weaker?",
    figure: "fig-20-04-soft-iron-core.svg",
    options: [
      "Removing the soft-iron core",
      "Using more turns of wire",
      "Increasing the current",
      "Winding the turns closer together"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-strengthen", 2: "emag-strengthen", 3: "emag-strengthen" },
    walkthrough: [
      "A soft-iron core concentrates the field and strengthens the magnet.",
      "So taking the core away makes the electromagnet weaker.",
      "More turns, more current and closer turns all make it stronger.",
      "So the one that weakens it is removing the core."
    ],
    explain: "Removing the soft-iron core takes away the part that concentrates the field, so the electromagnet gets weaker. More turns, a larger current and more closely wound turns all strengthen it, so choosing any of those as the weakening change reverses how the factors work."
  },
  {
    id: "emag-q-13",
    topicKey: "t18-electromagnetism",
    subtopic: "flemings-left-hand-rule",
    stem: "Which rule gives the direction of the force on a current-carrying conductor in a magnetic field?",
    figure: "fig-20-08-flemings-lhr.svg",
    options: [
      "Fleming's left-hand rule",
      "Fleming's right-hand rule",
      "The right-hand grip rule",
      "The corkscrew rule"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-flhr-hand", 2: "emag-flhr-hand", 3: "emag-flhr-hand" },
    walkthrough: [
      "The force on a current-carrying wire is the motor effect.",
      "For the motor effect you use Fleming's left-hand rule.",
      "It must be the left hand.",
      "The right hand and the grip rule are for the field around a current instead."
    ],
    explain: "The force on a conductor comes from Fleming's left-hand rule, which is the rule for the motor effect. The right-hand grip rule and any right-hand version find the field around a current, not the force, so using the right hand here would give the wrong direction."
  },
  {
    id: "emag-q-14",
    topicKey: "t18-electromagnetism",
    subtopic: "flemings-left-hand-rule",
    stem: "In Fleming's left-hand rule, what does the first finger stand for?",
    figure: "fig-20-08-flemings-lhr.svg",
    options: [
      "The magnetic field",
      "The current",
      "The force",
      "The speed of the wire"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-flhr-fingers", 2: "emag-flhr-fingers", 3: "emag-flhr-fingers" },
    walkthrough: [
      "Hold the thumb and first two fingers of your left hand at right angles.",
      "The first finger stands for the field.",
      "The second finger stands for the current.",
      "The thumb stands for the force, that is the motion."
    ],
    explain: "The first finger is the field, the second finger is the current, and the thumb is the force or motion. A useful hook is first finger for field, second finger for current, thumb for thrust, so calling the first finger the current or the force mixes the fingers up."
  },
  {
    id: "emag-q-15",
    topicKey: "t18-electromagnetism",
    subtopic: "flemings-left-hand-rule",
    stem: "A conductor carries current out of the page. The field between the poles points to the left, from N to S. Using Fleming's left-hand rule, which way is the force on the conductor?",
    figure: "fig-20-16-conductor-two-pole.svg",
    options: [
      "Downward",
      "Upward",
      "To the right, along the field",
      "Out of the page, along the current"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-flhr-hand", 2: "emag-force-direction", 3: "emag-force-direction" },
    walkthrough: [
      "Use your left hand. Point the first finger, the field, to the left.",
      "Point the second finger, the current, out of the page towards you.",
      "Your thumb then points downward.",
      "So the force pushes the conductor downward."
    ],
    explain: "With the left hand, first finger to the left for the field and second finger out of the page for the current, the thumb points downward, so the conductor is pushed down. Upward is what the wrong right hand would give, and the force never runs along the field or along the current, it is at right angles to both."
  },
  {
    id: "emag-q-16",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    stem: "When is the force on a current-carrying conductor in a magnetic field a maximum?",
    figure: "fig-20-07-force-orientation.svg",
    options: [
      "When the conductor is perpendicular to the field",
      "When the conductor is parallel to the field",
      "When the conductor lies at 45 degrees to the field",
      "The angle makes no difference to the force"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-force-orientation", 2: "emag-force-orientation", 3: "emag-force-orientation" },
    walkthrough: [
      "The force depends on the angle between the conductor and the field.",
      "It is largest when the conductor cuts straight across the field, at right angles.",
      "It shrinks as the wire turns towards the field direction.",
      "So the maximum force is when the conductor is perpendicular to the field."
    ],
    explain: "The force is a maximum when the conductor is perpendicular to the field, cutting straight across the field lines. It falls as the wire lines up with the field and reaches zero when parallel, so parallel or 45 degrees is not the maximum, and the angle certainly does matter."
  },
  {
    id: "emag-q-17",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    stem: "A current-carrying conductor lies parallel to a magnetic field. What is the force on it?",
    figure: "fig-20-07-force-orientation.svg",
    options: [
      "Zero",
      "A maximum",
      "Half of the maximum",
      "The same size but reversed"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-force-orientation", 2: "emag-force-orientation", 3: "emag-force-orientation" },
    walkthrough: [
      "The force is largest when the wire is at right angles to the field.",
      "It gets smaller as the wire turns towards the field direction.",
      "When the wire lies parallel to the field, the two fields do not push it sideways.",
      "So the force is zero."
    ],
    explain: "When the conductor lies parallel to the field the force is zero, because the wire's field and the magnet's field do not interact to push it sideways. The maximum happens at right angles, so parallel giving a maximum, a half, or a reversed force all miss that parallel means no force."
  },
  {
    id: "emag-q-18",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    stem: "A wire carries a current across a magnetic field between two poles. In which direction is it pushed?",
    figure: "fig-20-06-catapult-field.svg",
    options: [
      "At right angles to both the current and the field",
      "Along the field, from the N pole to the S pole",
      "Along the wire, in the direction of the current",
      "Straight towards the nearer magnetic pole"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-force-direction", 2: "emag-force-direction", 3: "emag-force-direction" },
    walkthrough: [
      "The wire's own field and the magnet's field add on one side and cancel on the other.",
      "The strong side pushes the wire towards the weak side.",
      "That push is at right angles to both the current and the field.",
      "So the wire moves sideways, not along the field or the wire."
    ],
    explain: "The force is at right angles to both the current and the field, pushing the wire sideways from the strong-field side to the weak-field side. It does not run along the field lines from N to S, along the wire, or straight towards a pole, so Fleming's left-hand rule is needed to pin down that sideways direction."
  },
  {
    id: "emag-q-19",
    topicKey: "t18-electromagnetism",
    subtopic: "motor-effect",
    stem: "In the motor-effect experiment, both the current and the magnetic field are reversed at the same time. What happens to the force on the conductor?",
    figure: "fig-20-09-motor-effect-experiment.svg",
    options: [
      "It is unchanged, in the same direction as before",
      "It reverses, pointing the opposite way",
      "It doubles in size",
      "It drops to zero"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-reverse-both", 2: "emag-reverse-both", 3: "emag-reverse-both" },
    walkthrough: [
      "Reversing the current on its own flips the force.",
      "Reversing the field on its own also flips the force.",
      "Doing both together means two flips.",
      "Two flips cancel out, so the force is unchanged."
    ],
    explain: "Each reversal on its own flips the force, so reversing both the current and the field together gives two flips that cancel, leaving the force pointing the same way as before. It does not reverse, double, or vanish, it simply stays the same."
  },
  {
    id: "emag-q-20",
    topicKey: "t18-electromagnetism",
    subtopic: "motor-effect",
    stem: "In the motor-effect experiment, only the current is reversed and the field is left unchanged. What happens to the force?",
    figure: "fig-20-09-motor-effect-experiment.svg",
    options: [
      "It reverses direction",
      "It stays the same",
      "It drops to zero",
      "It doubles in size"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-reverse-both", 2: "emag-reverse-both", 3: "emag-reverse-both" },
    walkthrough: [
      "Only one thing is changed here, the current direction.",
      "Reversing the current on its own flips the force.",
      "The field is unchanged, so there is no second flip to cancel it.",
      "So the force reverses direction."
    ],
    explain: "Reversing just the current, with the field unchanged, flips the force to the opposite direction. It only stays the same if both the current and the field are reversed together, so a single reversal here does change the direction, and it does not go to zero or double."
  },
  {
    id: "emag-q-21",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    stem: "A magnetic field points into the page. A proton and an electron each enter it moving to the right at the same speed. How are they deflected?",
    figure: "fig-20-10-charged-particles.svg",
    options: [
      "The proton deflects up and the electron deflects down",
      "Both deflect the same way, upward",
      "Both deflect the same way, downward",
      "The proton deflects down and the electron deflects up"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-charge-conventional", 2: "emag-charge-conventional", 3: "emag-flhr-hand" },
    walkthrough: [
      "For the proton, the current is to the right, the same way it moves.",
      "Left hand: field into the page, current to the right, thumb points up, so the proton deflects up.",
      "For the electron, the current is to the left, opposite to its motion.",
      "Repeating the rule gives a thumb pointing down, so the electron deflects down."
    ],
    explain: "The proton's current is to the right, and Fleming's left-hand rule sends it up. The electron's current is to the left, opposite to its motion, so it deflects down, the opposite way to the proton. Both going the same way misses that an electron's current is reversed, and proton down electron up is what the wrong hand would give."
  },
  {
    id: "emag-q-22",
    topicKey: "t18-electromagnetism",
    subtopic: "force-on-a-conductor",
    stem: "A proton and an electron enter the same magnetic field moving in the same direction. Compared with the proton, the electron is deflected:",
    figure: "fig-20-10-charged-particles.svg",
    options: [
      "In the opposite direction",
      "In the same direction",
      "Not at all",
      "Along the field lines"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-charge-conventional", 2: "emag-charge-conventional", 3: "emag-charge-conventional" },
    walkthrough: [
      "Conventional current is the direction a positive charge moves.",
      "The electron is negative, so its current points opposite to its motion.",
      "The proton and electron therefore have opposite current directions.",
      "So Fleming's rule deflects them in opposite directions."
    ],
    explain: "Because the electron is negative, its current points opposite to the way it moves, so its current is opposite to the proton's even though they move the same way. Fleming's rule then deflects them in opposite directions. The electron is still a moving charge, so it is deflected, not left alone or sent along the field."
  },
  {
    id: "emag-q-23",
    topicKey: "t18-electromagnetism",
    subtopic: "motor-effect",
    stem: "Why does a rectangular current-carrying coil in a magnetic field rotate rather than just slide sideways?",
    figure: "fig-20-11-turning-coil.svg",
    options: [
      "Its two opposite sides carry current in opposite directions, so they feel opposite forces that form a couple",
      "Both sides are pushed the same way, so the whole coil slides across",
      "Only one side of the coil feels any force",
      "The field simply pushes the whole coil towards the S pole"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-coil-slides", 2: "emag-coil-slides", 3: "emag-force-direction" },
    walkthrough: [
      "The two opposite sides of the coil carry current in opposite directions.",
      "In the same field, opposite currents feel opposite forces.",
      "So one side is pushed up while the other is pushed down.",
      "Those two opposite forces twist the coil round, forming a couple."
    ],
    explain: "The opposite sides of the coil carry current in opposite directions, so one is pushed up and the other down. These equal and opposite forces form a couple that turns the coil rather than sliding it. Both sides pushed the same way, or only one side feeling a force, would give a slide, not a rotation."
  },
  {
    id: "emag-q-24",
    topicKey: "t18-electromagnetism",
    subtopic: "motor-effect",
    stem: "Which change would increase the turning effect on a current-carrying coil in a magnetic field?",
    figure: "fig-20-11-turning-coil.svg",
    options: [
      "Increasing the number of turns on the coil",
      "Using fewer turns on the coil",
      "Using a weaker magnet",
      "Reducing the current in the coil"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-strengthen", 2: "emag-strengthen", 3: "emag-strengthen" },
    walkthrough: [
      "The turning effect grows with more turns, more current and a stronger magnet.",
      "So adding more turns increases it.",
      "Fewer turns, a weaker magnet or less current all reduce it.",
      "So the change that increases it is using more turns."
    ],
    explain: "More turns, a larger current and a stronger magnet all increase the turning effect, so using more turns is the right choice. Fewer turns, a weaker magnet or a smaller current all make the turning effect smaller, so they reverse how the factors work."
  },
  {
    id: "emag-q-25",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    stem: "What is the function of the split-ring commutator in a d.c. motor?",
    figure: "fig-20-12-dc-motor.svg",
    options: [
      "To reverse the current in the coil every half-turn",
      "To increase the strength of the magnetic field",
      "To stop the coil from spinning too fast",
      "To store charge for the motor"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-commutator-purpose", 2: "emag-commutator-purpose", 3: "emag-commutator-purpose" },
    walkthrough: [
      "As the coil passes the vertical, the two halves of the ring swap brushes.",
      "That swap reverses the direction of the current in the coil.",
      "It happens once every half-turn.",
      "So the side on top always feels the same push, keeping the coil turning one way."
    ],
    explain: "The split-ring commutator reverses the current in the coil every half-turn, which keeps the coil rotating in one direction instead of turning back. It does not boost the field, slow the coil, or store charge, its whole job is that half-turn current reversal."
  },
  {
    id: "emag-q-26",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    stem: "In a simple d.c. motor, which component is connected to the ends of the coil to keep it rotating in one direction?",
    figure: "fig-20-12-dc-motor.svg",
    options: [
      "A split-ring commutator",
      "A pair of slip rings",
      "A rheostat",
      "A carbon resistor"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-commutator-slipring", 2: "emag-motor-speed", 3: "emag-commutator-slipring" },
    walkthrough: [
      "The coil needs its current reversed every half-turn to keep turning one way.",
      "A split ring can do this because its two halves swap brushes.",
      "Plain slip rings stay connected the same way, so they cannot reverse the current.",
      "So the split-ring commutator is the part that keeps it turning one way."
    ],
    explain: "The split-ring commutator keeps the motor turning one way, because its split lets the connections swap every half-turn to reverse the current. Plain slip rings cannot reverse the current, a rheostat only controls the current size, and a carbon resistor does not switch the connections at all."
  },
  {
    id: "emag-q-27",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    stem: "No current flows when the motor coil is exactly vertical. Why does the coil not stop there?",
    figure: "fig-20-13-motor-cycle.svg",
    options: [
      "Its momentum carries it past the vertical, then the current flows again, now reversed",
      "It does stop there, because no current means no turning force",
      "The current never actually stops at the vertical position",
      "The magnet's field pulls the coil round on its own"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-motor-vertical", 2: "emag-commutator-purpose", 3: "emag-coil-slides" },
    walkthrough: [
      "At the vertical, the gaps in the split ring line up with the brushes, so no current flows.",
      "There is no turning force at that instant, but the coil is already moving.",
      "Its own momentum carries it past the vertical.",
      "Then the brushes touch the ring again, the current flows reversed, and the push returns."
    ],
    explain: "The coil coasts through the vertical on its own momentum, then the brushes touch the ring again and the current flows, now reversed, so the turning force comes back. It does not stop, the current really does cut off briefly at the vertical, and it is the motor effect, not simple magnetic attraction, that drives it round."
  },
  {
    id: "emag-q-28",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    stem: "Why is the coil in a d.c. motor wound on a soft-iron cylinder?",
    figure: "fig-20-12-dc-motor.svg",
    options: [
      "The soft iron concentrates the field, giving a greater turning effect",
      "It adds weight so the coil spins more steadily",
      "It stores the current between half-turns",
      "It turns the coil into a permanent magnet"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-soft-iron-cylinder", 2: "emag-soft-iron-cylinder", 3: "emag-electromagnet-permanent" },
    walkthrough: [
      "Soft iron is easily magnetised and concentrates the magnetic field.",
      "A stronger field on the coil means a bigger turning effect.",
      "So the soft-iron cylinder is there for magnetic reasons.",
      "It is not for weight, and it does not store current."
    ],
    explain: "The soft-iron cylinder concentrates the magnetic field, so the coil feels a greater turning effect. It is not there to add weight or to store current, and it does not become a permanent magnet, because soft iron loses its magnetism once the current stops."
  },
  {
    id: "emag-q-29",
    topicKey: "t18-electromagnetism",
    subtopic: "dc-motor",
    stem: "A rheostat in a d.c. motor circuit is adjusted to a higher resistance. What happens to the motor?",
    figure: "fig-20-12-dc-motor.svg",
    options: [
      "It slows down, because less current gives a smaller turning effect",
      "It speeds up, because more resistance gives more power",
      "It reverses its direction of rotation",
      "It stops completely and cannot restart"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emag-motor-speed", 2: "emag-motor-speed", 3: "emag-motor-speed" },
    walkthrough: [
      "A rheostat controls the motor by changing the current.",
      "More resistance lets less current flow.",
      "Less current gives a smaller turning effect.",
      "A smaller turning effect makes the motor turn more slowly."
    ],
    explain: "More resistance lets less current flow, and less current gives a smaller turning effect, so the motor slows down. It does not speed up, and changing the resistance does not reverse the motor or stop it for good, it just controls how fast it turns."
  }
];
