import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, Revision 2. Checkpoint over KB Chapter 15,
// sections t13.4 to t13.6: charging insulators by friction, charging
// conductors by induction, and the hazards and uses of static charge.
// Question-only. Conceptual span: no working, no formula.

export const BOXES: Subconcept[] = [
  {
    id: "t13.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: friction, induction, hazards and uses",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "2 insulators are rubbed together. The one that ends up negatively charged is the one that has...",
        figure: "fig-15-09-friction-charging",
        options: ["lost electrons", "gained electrons", "gained protons", "lost protons"],
        correct: 1,
        ask: "A negative charge means a surplus of the negative particle. Which particle is it, and did the material take some in or give some away?",
        hints: [
          "Only electrons are free to move during charging; protons stay locked in the nuclei.",
          "Taking in extra electrons leaves a material with more negative charge than positive, so it becomes negative.",
        ],
        explain: "The material becomes negative because it has gained electrons. Electrons are the only charges that move, so a surplus of them, not a change in protons, is what makes the object negative.",
      },
      {
        kind: "choice",
        question: "A positively charged rod is held near a small scrap of neutral paper, and the paper is pulled towards the rod. The best reason is that...",
        figure: "fig-15-10-induction-neutral",
        options: [
          "the paper is already positively charged",
          "protons inside the paper drift across to the near side",
          "the rod first repels the paper and then pulls it back",
          "charge in the paper is induced, so the unlike charge sits closer to the rod",
        ],
        correct: 3,
        ask: "The rod does not add charge to the paper. It only rearranges the charge already there. Which side of the paper ends up with the unlike charge, and is it nearer or further from the rod?",
        hints: [
          "The rod draws the paper's electrons towards the near side, so that side turns negative and the far side turns positive.",
          "Unlike charges (rod and near side) are closer than the like charges (rod and far side), so the pull beats the weaker push.",
        ],
        explain: "The rod induces charge in the neutral paper: the near side becomes negative and the far side positive. Because the unlike charges are closer together than the like charges, the attraction is stronger than the repulsion and the paper moves in.",
      },
      {
        kind: "choice",
        question: "A metal sphere on an insulating stand is charged by induction using a negative rod and an earth wire. When the process is complete, the sphere is left...",
        figure: "fig-15-12-induction-conductor",
        options: ["positive", "negative", "neutral", "the same charge as the rod"],
        correct: 0,
        ask: "A negative rod pushes the sphere's electrons away. If those electrons are then drained to earth before the rod leaves, what charge is missing from the sphere?",
        hints: [
          "The negative rod repels electrons to the far side; earthing lets them flow away to the ground.",
          "With electrons gone and the rod removed, the sphere is short of electrons, so it is left with the opposite charge to the rod.",
        ],
        explain: "Charging a conductor by induction leaves it with the charge opposite to the rod. The negative rod drives electrons off through the earth wire, so once the wire is cut and the rod removed, the sphere is short of electrons and is positive.",
      },
      {
        kind: "choice",
        question: "A road tanker is connected to the ground with a metal chain while it delivers fuel. This is done to...",
        figure: "fig-15-15-fuelling-hazard",
        options: [
          "make the fuel flow out faster",
          "give the flowing fuel a useful charge",
          "let any charge drain away so no spark can form",
          "keep the fuel cool during the transfer",
        ],
        correct: 2,
        ask: "Fuel rubbing through the pipe builds up static charge. What could a build-up of charge cause near fuel vapour, and how does a path to the ground prevent it?",
        hints: [
          "As fuel flows it charges up by friction, and a large charge can jump as a spark.",
          "A spark near fuel vapour could ignite it, so the chain earths the tanker and lets the charge leak safely to the ground.",
        ],
        explain: "The chain earths the tanker so charge built up by the flowing fuel drains away to the ground. This stops a large charge collecting, so no spark forms to ignite the fuel vapour.",
      },
      {
        kind: "choice",
        question: "In electrostatic spray painting the paint droplets spread out into a fine even mist. This happens because the droplets...",
        figure: "fig-15-16-spray-painting",
        options: [
          "attract one another strongly",
          "carry no charge at all",
          "are heated as they leave the gun",
          "all carry the same charge and so repel one another",
        ],
        correct: 3,
        ask: "The gun gives every droplet the same sign of charge. What do 2 charges of the same sign do to each other, and how does that affect the spray?",
        hints: [
          "Like charges repel, so droplets carrying the same charge push apart.",
          "Pushing apart spreads the droplets into an even mist, and the earthed panel then attracts them for a smooth coat.",
        ],
        explain: "Each droplet is given the same charge, and like charges repel, so the droplets push apart into an even mist. The earthed metal panel then attracts them, giving a smooth, even coat with little waste.",
      },
      {
        kind: "order",
        prompt: "Put the 4 steps for charging a metal sphere by induction into the correct order.",
        items: [
          "Bring the negative rod close to the sphere so its charges separate",
          "Earth the far side so the repelled electrons flow away to the ground",
          "Cut the earth wire while the rod is still held in place",
          "Remove the rod, leaving the sphere positively charged",
        ],
        ask: "Think about what must happen before you can remove the rod. The electrons have to leave and the earth path has to be broken first. Put the steps in order.",
        hints: [
          "You separate the charges first, then drain the far side to earth.",
          "The earth wire must be cut before the rod is taken away, or the electrons would simply flow back.",
        ],
        explain: "First bring the rod near to separate the charges, then earth the far side so the repelled electrons leave. Next cut the earth wire so they cannot return, and finally remove the rod, leaving the sphere positive.",
      },
      {
        kind: "classify",
        prompt: "Sort each situation into a hazard of static charge or a useful application of it.",
        bins: ["Hazard", "Useful application"],
        items: [
          { text: "a spark igniting fuel vapour at a filling station", bin: 0 },
          { text: "grain flowing through a pipe and sparking", bin: 0 },
          { text: "an aircraft building up charge in dry air", bin: 0 },
          { text: "paint droplets coating a car panel evenly", bin: 1 },
          { text: "a precipitator removing dust from a chimney", bin: 1 },
          { text: "a spray gun forming an even mist of paint", bin: 1 },
        ],
        ask: "Ask whether the charge in each case causes danger, such as a spark, or does a helpful job. Drop each one in its bin.",
        hints: [
          "Sparks near fuel, powder or in dry air are dangers, because they can ignite or damage.",
          "Spray painting and the precipitator put static charge to work on purpose.",
        ],
        explain: "Sparks from fuel, grain and aircraft are hazards, because a build-up of charge can ignite vapour or dust. Spray painting and the precipitator are useful applications, because they use charge to spread paint or collect dust.",
      },
      {
        kind: "match",
        prompt: "Match each action or object to its result.",
        pairs: [
          { left: "An object that gains electrons", right: "becomes negatively charged" },
          { left: "An object that loses electrons", right: "becomes positively charged" },
          { left: "A charged rod held near an electroscope", right: "makes the gold leaf rise" },
          { left: "2 spheres charged together by induction", right: "end up equal and opposite" },
          { left: "Earthing a charged conductor", right: "leaves it neutral" },
        ],
        ask: "Work through each one by asking whether electrons are added, removed or drained away, then decide the charge or effect that leaves.",
        hints: [
          "Gaining electrons gives negative charge; losing them gives positive charge.",
          "Like charges reaching the leaf repel and make it rise; earthing lets charge flow to the ground until none is left.",
        ],
        explain: "Gaining electrons makes an object negative and losing them makes it positive. A charged rod pushes like charge onto the electroscope leaf so it rises; 2 induced spheres are equal and opposite; and earthing drains the charge so the conductor ends neutral.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of how objects are charged.",
        segments: [
          "When 2 insulators are rubbed, only ",
          " move from one to the other. The material that gains them becomes ",
          ", and the one that loses them becomes ",
          ". A conductor can instead be charged without contact, a method called ",
          ".",
        ],
        bank: ["electrons", "negative", "positive", "induction", "protons", "neutral"],
        answer: ["electrons", "negative", "positive", "induction"],
        ask: "Recall which particle actually moves, what the gaining and losing materials become, and the name for charging a conductor at a distance.",
        hints: [
          "Protons never move; the transferred particles are electrons, and gaining them gives negative charge.",
          "Charging a conductor without touching it, using a rod and an earth wire, is called induction.",
        ],
        explain: "Only electrons move when insulators are rubbed. The material that gains electrons becomes negative and the one that loses them becomes positive. A conductor charged without contact is charged by induction.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this account of friction charging is wrong. Find it.",
        lines: [
          "When 2 insulators are rubbed together, they become charged.",
          "Positive protons move from one material across to the other.",
          "The material that ends up with a surplus of electrons becomes negative.",
          "The total charge on the pair stays the same, because charge is conserved.",
        ],
        errorLine: 1,
        ask: "Check which particle is claimed to move. During any charging, is it the protons or the electrons that are free to travel?",
        hints: [
          "Protons are locked inside the nuclei and cannot move between materials.",
          "The line about protons moving is the false one; it is electrons that transfer.",
        ],
        explain: "The wrong line is the one saying protons move across. Protons stay fixed in the nuclei, so charging only transfers electrons. The other lines, about becoming charged, gaining electrons and conserving charge, are all correct.",
      },
      {
        kind: "open",
        prompt: "A polythene rod is rubbed with a dry cloth and becomes negatively charged. Explain how the rod gains this charge.",
        modelAnswer: "Rubbing brings the 2 surfaces into close contact, and electrons are transferred from the cloth to the rod. Polythene holds electrons more strongly, so it gains electrons from the cloth. The rod now has more electrons than protons, so it is negatively charged, and the cloth, having lost electrons, is left positively charged. No protons move, and the total charge is unchanged because charge is conserved.",
        marks: [
          "Rubbing transfers electrons (not protons) between the surfaces.",
          "The rod gains electrons from the cloth, so it becomes negative.",
          "The cloth loses electrons and is left positive; total charge is conserved.",
        ],
        ask: "Think about which particle moves, which way it moves between the cloth and the rod, and what surplus that leaves on each.",
      },
      {
        kind: "open",
        prompt: "Describe how an electrostatic precipitator removes dust from the waste gas rising up a chimney.",
        modelAnswer: "A charged metal grid inside the chimney gives the dust particles a charge as the gas passes it. Large collecting plates carry the opposite charge, so they attract the charged dust and it sticks to them. The dust is held on the plates while the cleaned gas passes on and leaves the top of the chimney. The plates are knocked from time to time so the collected dust falls and can be removed.",
        marks: [
          "A charged grid gives the dust particles a charge.",
          "Oppositely charged collecting plates attract and hold the dust.",
          "Clean gas leaves the chimney; dust is later removed from the plates.",
        ],
        ask: "Think about how the dust first gets a charge, why it is then pulled onto the plates, and what leaves the top of the chimney.",
      },
    ],
  },
];
