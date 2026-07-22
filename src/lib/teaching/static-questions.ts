// static-questions.ts
// Teaching question bank for O-Level Physics, Static Electricity (topicKey "t13-static-electricity").
// Every wrong option maps to the misconception it reveals (see static-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 15 - Static Electricity.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { Misconception, TeachQuestion } from "@/lib/teaching/types";

export const STATIC_QUESTIONS: TeachQuestion[] = [
  {
    id: "stat-q-01",
    topicKey: "t13-static-electricity",
    subtopic: "electric-charge",
    stem: "A plastic rod becomes positively charged when it is rubbed with a cloth. What has happened to the rod?",
    figure: "fig-15-01-atom-structure.svg",
    options: [
      "It has lost some electrons.",
      "It has gained some protons.",
      "It has gained some electrons.",
      "Protons have moved onto it from the cloth."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-atom-1", 2: "stat-atom-2", 3: "stat-atom-1" },
    walkthrough: [
      "Only electrons ever move when something is charged, never protons.",
      "A positive charge means the rod has fewer electrons than protons.",
      "So the rod must have lost some electrons to the cloth.",
      "That leaves its fixed protons unbalanced, which is what makes it positive."
    ],
    explain: "Charging is always about electrons moving. A positive rod is one that has lost electrons, so its protons now outnumber them. It did not gain protons, because protons stay locked in the nucleus, and it did not gain electrons, because gaining electrons would make it negative instead."
  },
  {
    id: "stat-q-02",
    topicKey: "t13-static-electricity",
    subtopic: "electric-charge",
    stem: "An uncharged metal ball is described as neutral. Which statement about it is correct?",
    figure: "fig-15-01-atom-structure.svg",
    options: [
      "It has equal numbers of protons and electrons.",
      "It contains no protons and no electrons.",
      "It has protons but no electrons.",
      "It has more protons than electrons."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-atom-3", 2: "stat-atom-3", 3: "stat-atom-3" },
    walkthrough: [
      "Neutral does not mean empty of charge.",
      "A neutral object is full of protons and electrons.",
      "They are present in equal numbers, so their charges cancel.",
      "With the charges balanced, there is no charge left over."
    ],
    explain: "A neutral object is packed with charged particles, but the protons and electrons are equal in number, so the positive and negative charges cancel out. Having none of them, or more of one than the other, would not be neutral. Neutral means balanced, not empty."
  },
  {
    id: "stat-q-03",
    topicKey: "t13-static-electricity",
    subtopic: "charging-by-friction",
    stem: "A cloth is rubbed on a balloon, and the balloon becomes negatively charged. What is the charge on the cloth?",
    figure: "fig-15-09-friction-charging.svg",
    options: [
      "Positive, and equal in size to the balloon's charge.",
      "Also negative, the same as the balloon.",
      "Neutral, because the charge was made only on the balloon.",
      "Positive, but larger than the balloon's charge."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-friction-2", 2: "stat-friction-1", 3: "stat-friction-1" },
    walkthrough: [
      "Rubbing does not make charge, it only moves electrons from one object to the other.",
      "The balloon became negative, so it gained electrons.",
      "Those electrons came from the cloth, so the cloth lost the same number.",
      "Losing electrons leaves the cloth positive, by exactly the same amount."
    ],
    explain: "The electrons the balloon gained are the very ones the cloth lost, so the two charges are equal in size and opposite in sign. The cloth ends up positive, not negative and not neutral, and it cannot be a different size, because every electron gained by one was lost by the other."
  },
  {
    id: "stat-q-04",
    topicKey: "t13-static-electricity",
    subtopic: "charging-by-friction",
    stem: "A polythene rod is rubbed with a dry cloth. Polythene holds its electrons more tightly than the cloth does. What happens?",
    figure: "fig-15-09-friction-charging.svg",
    options: [
      "Electrons move from the cloth to the rod, so the rod becomes negative.",
      "Electrons move from the rod to the cloth, so the rod becomes positive.",
      "Protons move from the cloth to the rod, so the rod becomes positive.",
      "The rod loses electrons and becomes positive."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-friction-3", 2: "stat-atom-1", 3: "stat-friction-3" },
    walkthrough: [
      "The material that grips its electrons more tightly pulls electrons off the other one.",
      "Polythene grips more tightly than the cloth, so it pulls electrons from the cloth.",
      "So electrons move from the cloth onto the polythene rod.",
      "Gaining electrons makes the rod negative, and the cloth is left positive."
    ],
    explain: "The tighter grip wins the electrons. Polythene holds electrons more tightly, so it strips them from the cloth and becomes negative, while the cloth is left positive. Sending the electrons the other way, or moving protons, gets the signs backwards, because protons never move and the tight gripper gains rather than loses."
  },
  {
    id: "stat-q-05",
    topicKey: "t13-static-electricity",
    subtopic: "law-of-charges",
    stem: "Two balloons each carry a negative charge and hang side by side on threads. What happens?",
    figure: "fig-15-02-charge-interaction.svg",
    options: [
      "They swing apart, because like charges repel.",
      "They swing together, because like charges attract.",
      "They pull together, because all charged objects attract.",
      "One swings towards the other while it stays still."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-law-1", 2: "stat-law-1", 3: "stat-law-1" },
    walkthrough: [
      "Both balloons carry the same sign of charge, both negative.",
      "The law of charges says like charges repel.",
      "So the two balloons push away from each other.",
      "On their threads, that makes them swing apart."
    ],
    explain: "Like charges repel, so two negative balloons push apart and their threads swing outward. They do not attract, because attraction only happens between unlike charges, one positive and one negative. Same sign always means a push, not a pull."
  },
  {
    id: "stat-q-06",
    topicKey: "t13-static-electricity",
    subtopic: "law-of-charges",
    stem: "A charged rod is held near small scraps of paper that carry no overall charge. What happens?",
    figure: "fig-15-10-induction-neutral.svg",
    options: [
      "The scraps are attracted to the rod and jump up to it.",
      "Nothing happens, because the paper has no charge.",
      "The scraps are pushed away from the rod.",
      "The paper must first be charged before it feels any force."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-law-2", 2: "stat-law-2", 3: "stat-law-2" },
    walkthrough: [
      "The charged rod pushes the paper's own charges around.",
      "Unlike charge is pulled to the near side of the paper, and like charge to the far side.",
      "The unlike charge on the near side is closer, so its attraction is stronger.",
      "That stronger pull wins, so the scraps are attracted to the rod."
    ],
    explain: "A charged object can attract a neutral one. The rod pulls the paper's unlike charge to the near side and pushes like charge to the far side. Because the unlike charge is now closer, its attraction beats the weaker repulsion from further away, giving a net pull. So the neutral paper is drawn to the rod."
  },
  {
    id: "stat-q-07",
    topicKey: "t13-static-electricity",
    subtopic: "electric-field",
    stem: "Around which charges is there an electric field?",
    figure: "fig-15-03-electric-field-region.svg",
    options: [
      "Around both positive and negative charges.",
      "Only around positive charges.",
      "Only around negative charges.",
      "Only when two charges are brought near each other."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-field-1", 2: "stat-field-1", 3: "stat-field-1" },
    walkthrough: [
      "An electric field is the region where another charge would feel a force.",
      "Every charge sets up this region around itself.",
      "That is true for a positive charge and for a negative charge alike.",
      "And the field is there on its own, even before a second charge arrives."
    ],
    explain: "Every charge has its own electric field, positive or negative, and it exists whether or not another charge is nearby. A lone positive charge has a field pointing outward and a lone negative charge has one pointing inward. You do not need a pair of charges for a field to be present."
  },
  {
    id: "stat-q-08",
    topicKey: "t13-static-electricity",
    subtopic: "electric-field",
    stem: "How does the electric field around a point charge change as you move away from it?",
    figure: "fig-15-03-electric-field-region.svg",
    options: [
      "It is strongest close to the charge and gets weaker further away.",
      "It is the same strength everywhere around the charge.",
      "It is strongest far from the charge.",
      "It only exists at one fixed distance from the charge."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-field-2", 2: "stat-field-2", 3: "stat-field-2" },
    walkthrough: [
      "Close to the charge, a test charge would feel the biggest force.",
      "So the field is strongest right next to the charge.",
      "As you move away, the force fades, so the field grows weaker.",
      "On a diagram the lines crowd near the charge and spread apart further off."
    ],
    explain: "The field is strongest close to the charge and weakens with distance. It is not the same everywhere and it does not peak far away. You can read this straight off a field diagram, because the lines are packed tightly near the charge, where the field is strong, and spread out further away, where it is weak."
  },
  {
    id: "stat-q-09",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "Which way do the electric field lines point around an isolated negative charge?",
    figure: "fig-15-05-field-lines-isolated.svg",
    options: [
      "Inward, towards the charge.",
      "Outward, away from the charge.",
      "Outward, following where a negative test charge would go.",
      "Outward, because negative charges push everything away."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-1", 2: "stat-fieldlines-4", 3: "stat-fieldlines-1" },
    walkthrough: [
      "To find the direction, imagine a positive test charge in the field.",
      "A positive test charge is attracted towards a negative charge.",
      "So it would move inward, towards the charge.",
      "That means the field lines point inward, towards the negative charge."
    ],
    explain: "Field lines point the way a positive test charge would be pushed. Near a negative charge, a positive test charge is pulled in, so the lines point inward. Using a negative test charge would flip the answer the wrong way, and negative charges attract a positive test charge rather than pushing it away."
  },
  {
    id: "stat-q-10",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "To decide the direction of an electric field, what do we imagine placing in it?",
    figure: "fig-15-04-positive-test-charge.svg",
    options: [
      "A small positive test charge.",
      "A small negative test charge.",
      "A neutron.",
      "A proton fixed in place."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-4", 2: "stat-fieldlines-4", 3: "stat-fieldlines-4" },
    walkthrough: [
      "We use a tiny positive test charge to define the field direction.",
      "We ask which way the field pushes that positive charge.",
      "That push is taken as the direction of the field.",
      "A negative charge would be pushed the opposite way, giving the wrong direction."
    ],
    explain: "The direction of a field is always defined with a positive test charge, by the way it is pushed. A negative test charge would be pushed the opposite way and reverse every arrow, and a neutron feels no electric force at all, so it could not show a direction. The positive test charge is the standard choice."
  },
  {
    id: "stat-q-11",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "Which statement about electric field lines is correct?",
    figure: "fig-15-07-field-like.svg",
    options: [
      "Field lines never cross one another.",
      "Field lines can cross where two fields meet.",
      "Field lines cross wherever the field is strong.",
      "Field lines are further apart where the field is strongest."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-2", 2: "stat-fieldlines-2", 3: "stat-fieldlines-3" },
    walkthrough: [
      "At any point the field pushes a test charge in one single direction.",
      "A field line can only show one direction at each point.",
      "Two lines crossing would mean two directions at once, which cannot happen.",
      "So field lines never cross, and closer lines, not wider ones, mean a stronger field."
    ],
    explain: "Field lines never cross, because a crossing would mean two field directions at one point. They bend around each other instead. Crowded lines mean a strong field and widely spaced lines mean a weak one, so the idea that wider spacing means a stronger field is backwards."
  },
  {
    id: "stat-q-12",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "On a field-line diagram, where is the electric field strongest?",
    figure: "fig-15-05-field-lines-isolated.svg",
    options: [
      "Where the lines are closest together.",
      "Where the lines are furthest apart.",
      "Where two lines cross.",
      "It is equally strong wherever lines are drawn."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-3", 2: "stat-fieldlines-2", 3: "stat-fieldlines-3" },
    walkthrough: [
      "The closer the field lines, the stronger the field there.",
      "So look for the place where the lines are most crowded.",
      "That crowding marks the strongest field and the biggest force.",
      "Widely spaced lines mean a weaker field, not a stronger one."
    ],
    explain: "The field is strongest where the lines are closest together, because crowded lines mean a strong field and a big force. Spread out lines mean a weak field, and lines never cross in the first place, so a crossing point could not be where the field is strongest."
  },
  {
    id: "stat-q-13",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "How do the electric field lines behave between two positive charges placed side by side?",
    figure: "fig-15-07-field-like.svg",
    options: [
      "They bend away from each other and never join up.",
      "They join up in the gap between the charges.",
      "They cross in the middle of the gap.",
      "They run straight from one charge into the other."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-5", 2: "stat-fieldlines-2", 3: "stat-fieldlines-5" },
    walkthrough: [
      "Two positive charges are like charges, so they repel.",
      "Because they repel, their field lines do not link up.",
      "The lines bend away from each other instead.",
      "Midway between them is a point where the two fields cancel."
    ],
    explain: "Like charges repel, so the lines from two positive charges bend away from each other and never join. Only unlike charges have lines that link across the gap. The lines do not cross either, and midway between the two charges there is a point where the fields cancel out."
  },
  {
    id: "stat-q-14",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "Between a positive charge and a negative charge, which way do the field lines run?",
    figure: "fig-15-06-field-unlike.svg",
    options: [
      "From the positive charge across to the negative charge.",
      "From the negative charge across to the positive charge.",
      "They bend away from each other and never meet.",
      "Outward from both charges in all directions."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-1", 2: "stat-fieldlines-5", 3: "stat-fieldlines-1" },
    walkthrough: [
      "Field lines leave a positive charge and arrive at a negative charge.",
      "These two charges are unlike, so they attract.",
      "Their lines link up, curving across the gap between them.",
      "So the lines run from the positive charge over to the negative one."
    ],
    explain: "Lines always leave positive and arrive at negative, so between a positive and a negative charge they run from the positive across to the negative, linking the two. Running them the other way reverses the direction, and unlike charges do link up rather than bending apart the way like charges do."
  },
  {
    id: "stat-q-15",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    stem: "What is the electric field like between two parallel charged plates?",
    figure: "fig-15-08-parallel-plates.svg",
    options: [
      "Uniform, the same strength everywhere between the plates.",
      "Strongest in the middle, weaker near the plates.",
      "Strongest near the plates, weak in the middle.",
      "Zero everywhere between the plates."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-fieldlines-6", 2: "stat-fieldlines-6", 3: "stat-fieldlines-6" },
    walkthrough: [
      "Between parallel plates the field lines run straight across from one plate to the other.",
      "The lines are evenly spaced, with the same gap all the way across.",
      "Evenly spaced lines mean the field has the same strength everywhere.",
      "So the field is uniform, curving only at the very edges."
    ],
    explain: "The field between parallel plates is uniform, the same strength everywhere in the gap, shown by straight, evenly spaced lines running from the positive plate to the negative plate. There is no strong middle and no strong edge inside, and the field is certainly not zero. The lines only fringe right at the outer edges."
  },
  {
    id: "stat-q-16",
    topicKey: "t13-static-electricity",
    subtopic: "conductors-insulators",
    stem: "What makes a material a conductor rather than an insulator?",
    figure: null,
    options: [
      "Its electrons are free to move through it.",
      "It contains electrons, while an insulator has none.",
      "It has no electrons in the way to block the charge.",
      "Its protons are free to move through it."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-conductor-1", 2: "stat-conductor-1", 3: "stat-atom-1" },
    walkthrough: [
      "Both conductors and insulators are full of electrons.",
      "In a conductor, some of those electrons are free to move about.",
      "That is what lets charge flow through it.",
      "In an insulator the electrons are locked in place, so charge cannot flow."
    ],
    explain: "A conductor is a material whose electrons are free to move through it, which is why charge can flow. It is not about having electrons or not, since insulators are full of electrons too, just trapped ones. And protons never move in any material, so a conductor is never defined by moving protons."
  },
  {
    id: "stat-q-17",
    topicKey: "t13-static-electricity",
    subtopic: "conductors-insulators",
    stem: "Why does static charge stay put on a rubbed insulator instead of spreading away?",
    figure: null,
    options: [
      "Because its electrons cannot move freely through it.",
      "Because an insulator contains no electrons to move.",
      "Because the protons in it are stuck in place.",
      "Because charge can never move once it has been made."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-conductor-1", 2: "stat-atom-1", 3: "stat-friction-1" },
    walkthrough: [
      "An insulator is full of electrons, but they are held in place.",
      "Because the electrons cannot move freely, charge placed on it cannot flow away.",
      "So the charge simply stays where it was put.",
      "That trapped charge is what we call static electricity."
    ],
    explain: "Static charge stays put because the electrons in an insulator are locked in place and cannot move freely, so the charge cannot flow away. It is not that the insulator has no electrons, and it is not the protons doing the staying, since protons never move anyway. Charge can certainly move in general, just not freely through an insulator."
  },
  {
    id: "stat-q-18",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    stem: "A metal sphere is charged by induction. Does the charging rod touch the sphere?",
    figure: "fig-15-12-induction-conductor.svg",
    options: [
      "No, the rod is brought near but never touches the sphere.",
      "Yes, the rod must touch the sphere to charge it.",
      "Yes, touching is the only way to move any charge.",
      "It must be pressed on and rubbed against the sphere."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-induction-1", 2: "stat-induction-1", 3: "stat-induction-1" },
    walkthrough: [
      "Charging by induction is the method that needs no touching.",
      "The charged rod is brought near the sphere but never makes contact.",
      "From a distance it moves the sphere's own free electrons around.",
      "An earth wire then lets some electrons flow in or out to leave a charge."
    ],
    explain: "Induction is the no touching method. The rod is held near the sphere but never touches it, and its own charge stays on the rod the whole time. It works from a distance by pushing the sphere's free electrons around, helped by an earth wire. Contact is what happens in charging by friction or by direct contact, not induction."
  },
  {
    id: "stat-q-19",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    stem: "A negatively charged rod is used to charge a metal sphere by induction, using an earth wire. What is the final charge on the sphere?",
    figure: "fig-15-12-induction-conductor.svg",
    options: [
      "Positive, the opposite sign to the rod.",
      "Negative, the same sign as the rod.",
      "Negative, because the rod's electrons jump across onto it.",
      "Neutral, because induction cannot leave a lasting charge."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-induction-2", 2: "stat-induction-2", 3: "stat-induction-3" },
    walkthrough: [
      "The negative rod repels the sphere's free electrons to the far side.",
      "While the rod is held there, those far side electrons are let out down the earth wire.",
      "The earth wire is disconnected, and then the rod is removed.",
      "The sphere is now short of electrons, so it is left positive, opposite to the rod."
    ],
    explain: "Charging by induction leaves the opposite sign to the rod. The negative rod pushes electrons to the far side, they escape to earth, and the sphere is left short of electrons, so it is positive. The rod's own electrons never jump across, since it never touches, and with the earthing step the charge really does last."
  },
  {
    id: "stat-q-20",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    stem: "A charged rod is held near an insulated neutral metal sphere, but the sphere is not earthed. What is the sphere's overall charge?",
    figure: "fig-15-10-induction-neutral.svg",
    options: [
      "Still neutral overall, as its charges have only shifted apart.",
      "Charged with the opposite sign to the rod.",
      "Charged with the same sign as the rod.",
      "It gains extra electrons from the rod."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-induction-3", 2: "stat-induction-3", 3: "stat-induction-1" },
    walkthrough: [
      "The rod pulls one sign of charge to the near side and pushes the other to the far side.",
      "This only separates the charge that was already in the sphere.",
      "The near side and far side charges are equal and opposite.",
      "Added together they still cancel, so the sphere stays neutral overall."
    ],
    explain: "Just holding a rod nearby only separates the sphere's own charge, pulling one sign near and pushing the other far. The two are equal and opposite, so overall the sphere is still neutral. To leave a real net charge you must earth it while the rod is there, and the rod never touches, so no electrons transfer from it."
  },
  {
    id: "stat-q-21",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    stem: "Two touching metal spheres J and K are charged by induction with a negative rod held near J, then separated while the rod is still in place. What are the final charges?",
    figure: "fig-15-13-two-spheres-induction.svg",
    options: [
      "J positive and K negative, equal in size.",
      "Both J and K negative, like the rod.",
      "J negative and K positive.",
      "Both spheres stay neutral."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-induction-2", 2: "stat-induction-2", 3: "stat-induction-3" },
    walkthrough: [
      "The negative rod near J repels the free electrons across to the far sphere K.",
      "So J is left short of electrons and K has a surplus, while the rod is still there.",
      "The spheres are separated first, locking in this split.",
      "Then the rod is removed, leaving J positive and K negative, equal in size."
    ],
    explain: "The negative rod pushes electrons from J across to K. Separating the spheres before removing the rod traps the split, so J is left positive, opposite to the rod, and K is left negative, equal in size. They do not both match the rod, and because they were separated while charged, they do not stay neutral."
  },
  {
    id: "stat-q-22",
    topicKey: "t13-static-electricity",
    subtopic: "discharging",
    stem: "In which conditions are static shocks most common?",
    figure: null,
    options: [
      "Cold, dry weather.",
      "Warm, humid weather.",
      "Rainy, damp weather.",
      "Foggy, moist weather."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-discharge-1", 2: "stat-discharge-1", 3: "stat-discharge-1" },
    walkthrough: [
      "Moisture in the air helps charge leak away from surfaces.",
      "In damp or humid air, water molecules carry the extra charge off.",
      "So charge cannot build up much when the air is moist.",
      "In cold, dry air there is little moisture, so charge stays and builds, giving shocks."
    ],
    explain: "Static shocks are most common in cold, dry weather. When the air is damp or humid, water molecules settle on charged surfaces and carry the charge away before it can build up. Dry air lacks that moisture, so the charge lingers and grows, which is why shocks happen on cold, dry days."
  },
  {
    id: "stat-q-23",
    topicKey: "t13-static-electricity",
    subtopic: "discharging",
    stem: "A negatively charged metal dome is discharged by earthing it. Which way do the electrons flow?",
    figure: "fig-15-14-earthing-discharge.svg",
    options: [
      "Its excess electrons flow from the dome to the ground.",
      "Electrons flow from the ground onto the dome.",
      "Protons flow from the dome to the ground.",
      "Nothing flows, the charge simply disappears."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-discharge-2", 2: "stat-atom-1", 3: "stat-friction-1" },
    walkthrough: [
      "A negative dome has too many electrons.",
      "Earthing gives those extra electrons a path to the ground.",
      "So the excess electrons flow away from the dome to the ground.",
      "Once the surplus has drained, the dome is left neutral."
    ],
    explain: "A negatively charged object has a surplus of electrons, so when it is earthed those extra electrons flow away to the ground, leaving it neutral. Electrons only flow the other way for a positive object. Protons never move, and the charge does not just vanish, the electrons carry it away."
  },
  {
    id: "stat-q-24",
    topicKey: "t13-static-electricity",
    subtopic: "discharging",
    stem: "A positively charged metal sphere is earthed. What happens as it discharges?",
    figure: "fig-15-14-earthing-discharge.svg",
    options: [
      "Electrons flow from the ground onto the sphere until it is neutral.",
      "Electrons flow from the sphere to the ground.",
      "Protons flow from the ground onto the sphere.",
      "Extra positive charge flows onto the sphere."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-discharge-2", 2: "stat-atom-1", 3: "stat-atom-2" },
    walkthrough: [
      "A positive sphere is short of electrons.",
      "Earthing gives electrons a path from the ground up onto it.",
      "So electrons flow from the ground onto the sphere.",
      "They fill the shortage until the sphere is neutral again."
    ],
    explain: "A positive object is short of electrons, so earthing lets electrons flow from the ground onto it to fill the gap, leaving it neutral. Electrons flow out to the ground only for a negative object, so the direction depends on the sign. Protons never move, and you cannot add positive charge, you only move electrons."
  },
  {
    id: "stat-q-25",
    topicKey: "t13-static-electricity",
    subtopic: "hazards-and-uses",
    stem: "Why is a metal chain connected between a fuel tanker and the ground during refuelling?",
    figure: "fig-15-15-fuelling-hazard.svg",
    options: [
      "To let the static charge leak safely away to the ground.",
      "To build up more charge so the fuel flows faster.",
      "To store the charge safely on the tanker.",
      "So that protons can drain down the chain to the ground."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-hazard-1", 2: "stat-hazard-1", 3: "stat-atom-1" },
    walkthrough: [
      "As fuel flows, friction charges up the pipe and the tanker.",
      "If that charge builds up, a spark could jump and ignite the fuel.",
      "The metal chain connects the tanker to the ground.",
      "This drains the charge safely away, so no dangerous build up can spark."
    ],
    explain: "The chain earths the tanker, giving the static charge a safe path to the ground so it leaks away before it can build up and spark near flammable fuel. It is not there to gather or store charge or to help the fuel flow, and it works by moving electrons, never protons. Earthing removes charge, it does not collect it."
  },
  {
    id: "stat-q-26",
    topicKey: "t13-static-electricity",
    subtopic: "hazards-and-uses",
    stem: "In electrostatic spray painting, the paint droplets are all given the same charge. Why does this help?",
    figure: "fig-15-16-spray-painting.svg",
    options: [
      "They repel each other and spread into an even mist.",
      "They attract each other into a single fine stream.",
      "They are given opposite charges so they push apart.",
      "The shared charge makes them stick together in a clump."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-law-1", 2: "stat-uses-1", 3: "stat-law-1" },
    walkthrough: [
      "All the droplets carry the same sign of charge.",
      "Like charges repel, so the droplets push away from each other.",
      "That pushing spreads them out into a fine, even mist.",
      "The earthed object then attracts the charged droplets onto every part of its surface."
    ],
    explain: "Because the droplets share the same charge, they repel one another and spread into an even mist rather than clumping. Giving them opposite charges would attract them together, the opposite of what you want, and like charges push apart rather than sticking together. The earthed object pulls the charged mist onto all its surfaces for an even coat."
  },
  {
    id: "stat-q-27",
    topicKey: "t13-static-electricity",
    subtopic: "hazards-and-uses",
    stem: "In an electrostatic precipitator, the dust particles are given a negative charge. What charge is put on the collecting plates?",
    figure: "fig-15-17-precipitator.svg",
    options: [
      "Positive, so the dust is attracted to them.",
      "Negative, the same as the dust.",
      "Negative, so like charges pull the dust in.",
      "Neutral, so the dust just settles on them."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "stat-uses-2", 2: "stat-uses-2", 3: "stat-law-2" },
    walkthrough: [
      "The dust particles are charged negative as they pass the charged grid.",
      "To collect them, the plates must attract them.",
      "Unlike charges attract, so the plates are made positive.",
      "The negative dust is then pulled onto the positive plates and sticks."
    ],
    explain: "The collecting plates are made positive, the opposite of the negative dust, so unlike charges attract and the dust is pulled onto the plates and sticks. If the plates shared the dust's charge they would push it away and collect nothing, and neutral plates would give no pull at all. Opposite charges are what make the dust cling."
  }
];

// Note: Misconception is imported so the two pack files share one import line.
// The misconception library lives in static-misconceptions.ts.
void (null as unknown as Misconception);
