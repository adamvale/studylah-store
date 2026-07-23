import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, topical quiz. Whole-topic check across KB Chapter 15:
// charge and the atom, electric fields and their direction, field patterns of two
// charges and plates, charging insulators by friction, charging conductors by
// induction, and the hazards and useful applications of static electricity.
// Conceptual chapter: no calculations, no working, no formula fields.

export const BOXES: Subconcept[] = [
  {
    id: "t13.quiz",
    code: "Quiz",
    title: "Static electricity topical quiz",
    blurb: "Whole-topic check: charge, fields, field patterns, friction, induction, hazards and uses",
    kind: "quiz",
    steps: [
      // 1. choice (atom) correct 2
      {
        kind: "choice",
        question: "Which particle in an atom carries a negative charge?",
        figure: "fig-15-01-atom-structure",
        options: ["A proton", "A neutron", "An electron", "The nucleus"],
        correct: 2,
        ask: "One particle sits in a shell around the nucleus and is the one that moves when an object is charged. Which is it?",
        hints: [
          "Protons are positive and neutrons have no charge.",
          "The electrons in the outer shell carry the negative charge.",
        ],
        explain: "The electron carries the negative charge. Protons in the nucleus are positive, neutrons are neutral, and only electrons move when an object is charged.",
      },
      // 2. choice (atom) correct 0
      {
        kind: "choice",
        question: "An object gains some extra electrons. What is its overall charge now?",
        options: ["Negative", "Positive", "Neutral", "It cannot have any charge"],
        correct: 0,
        ask: "Electrons are negative. If an object collects extra ones, does it gain positive or negative charge?",
        hints: [
          "Charging an object only moves electrons, never protons.",
          "Gaining electrons adds negative charge, so the object becomes negative.",
        ],
        explain: "The object becomes negative. Electrons are negative, so gaining extra electrons gives the object an overall negative charge. Losing electrons would make it positive.",
      },
      // 3. choice (fields) correct 1
      {
        kind: "choice",
        question: "What is an electric field?",
        options: [
          "A region where a magnet feels a force",
          "A region where a charge feels an electric force",
          "A region where only electrons are allowed to exist",
          "The painted surface of a charged object",
        ],
        correct: 1,
        ask: "An electric field is defined by the effect it has on a charge placed in it. What does the charge feel?",
        hints: [
          "A field is a region of space, not a surface or a rule about particles.",
          "In an electric field a charge feels an electric force.",
        ],
        explain: "An electric field is a region where a charge feels an electric force. The field is stronger near the charge that makes it and weaker further away.",
      },
      // 4. choice (fields) correct 3
      {
        kind: "choice",
        question: "In which direction do electric field lines point?",
        options: [
          "Toward a positive charge and away from a negative charge",
          "Always in closed circles around a charge",
          "From the north pole to the south pole",
          "Away from a positive charge and toward a negative charge",
        ],
        correct: 3,
        ask: "The direction is set by the force on a positive test charge. Which way is that pushed near a positive charge?",
        hints: [
          "A positive test charge is repelled by a positive charge and attracted by a negative charge.",
          "So the lines point away from positive charges and toward negative charges.",
        ],
        explain: "Field lines point away from a positive charge and toward a negative charge. This matches the force on a positive test charge, which is pushed away from positive and pulled toward negative.",
      },
      // 5. choice (patterns) correct 1
      {
        kind: "choice",
        question: "What does the electric field between 2 parallel charged plates look like?",
        options: [
          "Curved lines that all meet at a single point",
          "Evenly spaced straight lines giving a uniform field",
          "Lines that spread outward in every direction",
          "Lines that cross over in the middle",
        ],
        correct: 1,
        ask: "A uniform field has the same strength everywhere. What spacing of lines shows that?",
        hints: [
          "Field lines never cross, so options that show crossing lines are wrong.",
          "Evenly spaced, straight, parallel lines mean the field is uniform.",
        ],
        explain: "Between parallel plates the lines run straight across and are evenly spaced, showing a uniform field of the same strength everywhere in the gap.",
      },
      // 6. choice (friction) correct 0
      {
        kind: "choice",
        question: "2 insulators are rubbed together. Which one ends up negatively charged?",
        options: [
          "The one that gains electrons",
          "The one that loses electrons",
          "The one that gains protons",
          "Neither, they both stay neutral",
        ],
        correct: 0,
        ask: "Rubbing only transfers electrons. Which material becomes negative, the one that gains them or loses them?",
        hints: [
          "Protons never move during charging, so options about protons are wrong.",
          "The material that gains electrons has extra negative charge, so it becomes negative.",
        ],
        explain: "The material that gains electrons becomes negative. The other one loses those electrons and is left positive. Only electrons are transferred, never protons.",
      },
      // 7. choice (friction) correct 3
      {
        kind: "choice",
        question: "Why does a charged rod attract small pieces of neutral paper?",
        figure: "fig-15-10-induction-neutral",
        options: [
          "The paper is already charged the opposite way",
          "The rod blows air that pushes the paper across",
          "Gravity pulls the paper up toward the rod",
          "It induces opposite charge on the near side of the paper, which is closer and attracts more strongly",
        ],
        correct: 3,
        ask: "The paper starts neutral. Think about how the rod rearranges the charges inside it and which side ends up closer.",
        hints: [
          "The rod pulls opposite charges to the near side of the paper and pushes like charges to the far side.",
          "The opposite charge on the near side is closer, so its attraction beats the weaker repulsion from the far side.",
        ],
        explain: "The rod induces an opposite charge on the near side of the neutral paper and a like charge on the far side. The near side is closer, so its attraction is stronger than the repulsion, and the paper is pulled to the rod.",
      },
      // 8. choice (conductor) correct 2
      {
        kind: "choice",
        question: "A metal sphere is charged by induction using a negative rod. What charge does the sphere end up with?",
        figure: "fig-15-12-induction-conductor",
        options: [
          "Negative, the same as the rod",
          "It stays neutral",
          "Positive, the opposite of the rod",
          "It depends on the size of the sphere",
        ],
        correct: 2,
        ask: "During induction the sphere is earthed while the rod is near. Think about which charge is driven away to earth and which is left behind.",
        hints: [
          "The negative rod repels electrons in the sphere, and earthing lets those electrons flow away to the ground.",
          "With electrons gone the sphere is left positive, the opposite of the rod.",
        ],
        explain: "The sphere ends up positive, the opposite of the negative rod. The rod repels electrons in the sphere, earthing lets them flow away, and once the earth wire is cut and the rod removed the sphere is left with a positive charge.",
      },
      // 9. choice (conductor) correct 1
      {
        kind: "choice",
        question: "2 touching metal spheres are charged together by induction, then separated while the rod is still near. What are their charges?",
        options: [
          "Both spheres are positive",
          "Equal and opposite",
          "Both spheres are neutral",
          "Both spheres are negative",
        ],
        correct: 1,
        ask: "The rod pushes electrons from one sphere onto the other. When you separate them, how do the 2 charges compare?",
        hints: [
          "One sphere loses electrons and the other gains the same number.",
          "So the spheres carry equal and opposite charges.",
        ],
        explain: "The spheres end up equal and opposite. The rod drives electrons from the near sphere onto the far sphere, so once separated the near sphere is positive and the far sphere is negative by the same amount.",
      },
      // 10. choice (hazards) correct 0
      {
        kind: "choice",
        question: "Why is a fuel tanker connected to the ground with a metal chain while it refuels?",
        figure: "fig-15-15-fuelling-hazard",
        options: [
          "To drain away static charge so no spark can ignite the fuel",
          "To keep the fuel cool as it flows",
          "To measure how much fuel has flowed through the pipe",
          "To stop the tanker from rolling away",
        ],
        correct: 0,
        ask: "Fuel flowing through a pipe charges up by friction. Think about what a build up of charge could cause near fuel.",
        hints: [
          "A large charge can jump as a spark, and a spark near fuel is dangerous.",
          "Earthing the tanker lets the charge leak safely to the ground before it can spark.",
        ],
        explain: "The chain earths the tanker so the static charge that builds up as fuel flows drains safely to the ground. Without it the charge could jump as a spark and ignite the fuel vapour.",
      },

      // ===== INTERACTIVE (10) =====

      // I1. classify (atom): attract vs repel
      {
        kind: "classify",
        prompt: "Sort each pair of charges by whether they attract or repel.",
        bins: ["Attract", "Repel"],
        items: [
          { text: "a positive charge near a negative charge", bin: 0 },
          { text: "2 positive charges", bin: 1 },
          { text: "2 negative charges", bin: 1 },
          { text: "a negative charge near a positive charge", bin: 0 },
          { text: "2 electrons", bin: 1 },
          { text: "a proton near an electron", bin: 0 },
        ],
        ask: "Remember the law of charges: unlike charges pull together and like charges push apart. Tap each pair and drop it in the right bin.",
        hints: [
          "Opposite signs, one positive and one negative, attract.",
          "The same sign, both positive or both negative, repel.",
        ],
        explain: "Unlike charges attract, so a positive with a negative and a proton with an electron go in Attract. Like charges repel, so 2 positives, 2 negatives and 2 electrons go in Repel.",
      },
      // I2. match (atom): particle to charge
      {
        kind: "match",
        prompt: "Match each part of the atom to its charge.",
        pairs: [
          { left: "Proton", right: "Positive charge" },
          { left: "Electron", right: "Negative charge" },
          { left: "Neutron", right: "No charge" },
          { left: "A neutral atom overall", right: "Equal numbers of protons and electrons" },
        ],
        ask: "Recall where each particle sits and what sign it carries. One pairing explains why a whole atom can be neutral.",
        hints: [
          "Protons are positive and electrons are negative, and they are equal in size.",
          "A neutron has no charge, and an atom is neutral when its protons and electrons balance.",
        ],
        explain: "A proton is positive, an electron is negative and a neutron has no charge. An atom is neutral overall when it has equal numbers of protons and electrons, so the charges cancel.",
      },
      // I3. classify (fields): away vs toward
      {
        kind: "classify",
        prompt: "Sort each charged object by the direction of its electric field lines.",
        bins: ["Lines point away", "Lines point toward"],
        items: [
          { text: "an isolated positive charge", bin: 0 },
          { text: "an isolated negative charge", bin: 1 },
          { text: "a positively charged metal sphere", bin: 0 },
          { text: "a negatively charged metal sphere", bin: 1 },
        ],
        ask: "A positive test charge is pushed away from positive and pulled toward negative, and the lines follow that force. Tap each object into its bin.",
        hints: [
          "Field lines leave positive charges, pointing away from them.",
          "Field lines arrive at negative charges, pointing toward them.",
        ],
        explain: "Field lines point away from positive charges and toward negative charges, so the positive charge and positive sphere go in Lines point away, and the negative charge and negative sphere go in Lines point toward.",
      },
      // I4. cloze (fields)
      {
        kind: "cloze",
        prompt: "Complete the sentences about finding the direction of an electric field.",
        segments: [
          "To find the direction of a field we imagine a small positive ",
          " charge and note the force on it. The field lines point ",
          " from a positive charge and ",
          " a negative charge.",
        ],
        bank: ["test", "away", "toward", "negative", "across"],
        answer: ["test", "away", "toward"],
        ask: "Think about the imaginary charge we use to probe a field, then the 2 rules for which way the lines run.",
        hints: [
          "We use a positive test charge to feel out the direction of the force.",
          "Lines run away from a positive charge and toward a negative charge.",
        ],
        explain: "We use a positive test charge to find the field direction. The lines point away from a positive charge and toward a negative charge.",
      },
      // I5. classify (patterns)
      {
        kind: "classify",
        prompt: "Sort each description into the field pattern it belongs to.",
        bins: ["Unlike charges", "Like charges", "Parallel plates"],
        items: [
          { text: "lines run from the + charge across to the - charge", bin: 0 },
          { text: "lines bend away from each other and never join", bin: 1 },
          { text: "evenly spaced straight lines giving a uniform field", bin: 2 },
          { text: "lines are packed tightest in the gap between the charges", bin: 0 },
          { text: "there is a cancellation point midway between the charges", bin: 1 },
          { text: "the field has the same strength everywhere in the gap", bin: 2 },
        ],
        ask: "Picture the 3 field diagrams: unlike charges pulling, like charges pushing apart, and 2 plates. Match each clue to its picture.",
        hints: [
          "Unlike charges give lines that cross the gap and pack tightest between them; like charges give lines that bend away with a cancellation point.",
          "Parallel plates give evenly spaced straight lines and a field of the same strength everywhere.",
        ],
        explain: "Unlike charges: lines cross the gap and pack tightest between them. Like charges: lines bend away, never join, with a cancellation point midway. Parallel plates: evenly spaced straight lines and a uniform field of the same strength everywhere.",
      },
      // I6. tiles (patterns)
      {
        kind: "tiles",
        prompt: "Build the sentence that describes the field lines between 2 parallel charged plates.",
        tiles: ["The", "field", "lines", "are", "evenly", "spaced", "and", "parallel", "curved", "crossing"],
        answer: ["The", "field", "lines", "are", "evenly", "spaced", "and", "parallel"],
        ask: "A uniform field has lines that are the same distance apart everywhere and run in the same direction. Choose the words that say that.",
        hints: [
          "The lines do not curve and never cross, so leave those tiles out.",
          "Use evenly spaced and parallel to describe a uniform field.",
        ],
        explain: "Between parallel plates the field lines are evenly spaced and parallel, which is what makes the field uniform.",
      },
      // I7. spoterror (friction)
      {
        kind: "spoterror",
        prompt: "Here are 4 statements a student wrote about charging a polythene rod by rubbing it with a cloth. Tap the line that is wrong.",
        lines: [
          "Rubbing transfers electrons between the 2 materials",
          "The rod gains extra protons and becomes negative",
          "The material that loses electrons becomes positive",
          "The charge stays put because the rod is an insulator",
        ],
        errorLine: 1,
        ask: "Check which particle actually moves when an object is charged. Can protons move from the cloth to the rod?",
        hints: [
          "Charging by friction only moves electrons; protons stay locked in the nucleus.",
          "The rod becomes negative by gaining electrons, not by gaining protons.",
        ],
        explain: "The wrong line says the rod gains extra protons. Protons never move during charging. The rod becomes negative because it gains electrons from the cloth.",
      },
      // I8. order (conductor induction)
      {
        kind: "order",
        prompt: "Put the steps for charging a metal sphere positive by induction, using a negative rod, in the correct order.",
        items: [
          "Bring the negative rod near the neutral sphere so its charges separate",
          "Earth the far side so electrons are repelled down the earth wire to the ground",
          "Cut the earth wire while the rod is still held near",
          "Remove the rod, leaving the sphere positively charged",
        ],
        ask: "Start by bringing the rod up to the neutral sphere, and finish once the rod is taken away. Order the 4 steps.",
        hints: [
          "The rod must be near first so the charges separate, then you earth the sphere to let electrons escape.",
          "You cut the earth wire before removing the rod, so the leftover positive charge is trapped.",
        ],
        explain: "First bring the rod near so the charges separate. Then earth the sphere so repelled electrons flow away. Cut the earth wire while the rod is still there, then remove the rod, leaving the sphere positive.",
      },
      // I9. match (hazards and uses)
      {
        kind: "match",
        prompt: "Match each situation to the reason static electricity matters there.",
        pairs: [
          { left: "Refuelling an aircraft", right: "A spark could ignite the fuel, so the equipment is earthed" },
          { left: "Spray painting a car panel", right: "Same charged droplets repel into an even mist and coat the earthed panel" },
          { left: "An electrostatic precipitator", right: "Charged dust is attracted to collecting plates so clean gas leaves" },
          { left: "A truck driving in dry air", right: "It charges up, so a discharge strip lets the charge leak away" },
        ],
        ask: "Sort out which situations are hazards to be avoided and which are useful applications, then match the reason.",
        hints: [
          "Refuelling and a charged truck are hazards, cured by draining charge to earth.",
          "Spray painting and the precipitator are useful uses of like charges repelling and opposite charges attracting.",
        ],
        explain: "Refuelling and a truck in dry air are hazards where charge must be earthed to avoid a spark. Spray painting uses like charges that repel into a mist, and a precipitator uses charged dust attracted to opposite plates to clean the gas.",
      },
      // I10. order (precipitator steps, hazards/uses)
      {
        kind: "order",
        prompt: "Put the steps of how an electrostatic precipitator cleans chimney gas in the correct order.",
        items: [
          "Dirty gas carrying dust rises up the chimney",
          "A negative wire grid gives the dust particles a charge",
          "The charged dust is attracted to the large positive collecting plates",
          "The dust sticks to the plates, so clean gas leaves the top",
        ],
        ask: "Follow the gas from the moment it enters at the bottom to the moment clean gas leaves the top. Order the 4 steps.",
        hints: [
          "The dust must be charged by the grid before the plates can attract it.",
          "Opposite charges attract, so the charged dust collects on the positive plates and clean gas escapes.",
        ],
        explain: "Dirty gas rises up the chimney, the negative grid charges the dust, the positive plates attract the charged dust, and it sticks there so only clean gas leaves the top.",
      },

      // ===== OPEN (5) =====

      // O1. open (atom)
      {
        kind: "open",
        prompt: "Explain, in terms of electrons, how a neutral object can become negatively charged.",
        modelAnswer: "A neutral object has equal numbers of protons and electrons, so the charges cancel. When it gains extra electrons from another object, it now has more electrons than protons. The extra negative charge is not balanced, so the object has an overall negative charge. Only the electrons move; the protons stay fixed in the nuclei. Each electron carries a tiny charge of 1.60 × 10 to the power negative 19 coulombs.",
        marks: [
          "A neutral object has equal numbers of protons and electrons.",
          "It becomes negative by gaining extra electrons from elsewhere.",
          "Only electrons move; protons do not, so the extra electrons give an overall negative charge.",
        ],
        ask: "Start from why a neutral object has no overall charge, then say which particle is added and why that makes it negative.",
      },
      // O2. open (fields)
      {
        kind: "open",
        prompt: "Describe the electric field around an isolated positive charge, including the direction of the lines and how the field strength changes with distance.",
        figure: "fig-15-05-field-lines-isolated",
        modelAnswer: "Around an isolated positive charge the field lines point radially outward, away from the charge in all directions, because a positive test charge would be pushed away. The lines are closest together near the charge, where the field is strongest, and spread further apart with distance, where the field is weaker. The lines never cross.",
        marks: [
          "Field lines point radially outward, away from the positive charge.",
          "The field is stronger near the charge, where the lines are closest together.",
          "The field gets weaker with distance as the lines spread apart, and lines never cross.",
        ],
        ask: "Say which way the lines point for a positive charge, and link how close the lines are to how strong the field is.",
      },
      // O3. open (friction, electroscope)
      {
        kind: "open",
        prompt: "A negatively charged rod is brought near the metal cap of a gold-leaf electroscope. Explain what happens to the gold leaf and why.",
        figure: "fig-15-11-electroscope",
        modelAnswer: "The negative rod repels electrons in the electroscope down away from the cap, so extra electrons collect on the stem and the gold leaf. The stem and the leaf now carry the same negative charge. Because like charges repel, the leaf is pushed away from the stem and rises. When the rod is taken away the electrons spread back out and the leaf falls again.",
        marks: [
          "The negative rod repels electrons down onto the stem and the leaf.",
          "The stem and leaf gain the same (negative) charge.",
          "Like charges repel, so the leaf is pushed away from the stem and rises.",
        ],
        ask: "Trace where the electrons in the electroscope move when the negative rod is near, and use the law of charges to explain the leaf.",
      },
      // O4. open (conductor)
      {
        kind: "open",
        prompt: "Describe how a metal sphere on an insulating stand can be given a positive charge by induction, using a negatively charged rod and an earth wire.",
        figure: "fig-15-12-induction-conductor",
        modelAnswer: "Bring the negative rod near the sphere. Its charge repels electrons in the sphere to the far side, so the near side becomes positive and the far side negative. Connect an earth wire to the far side; the repelled electrons flow down the wire to the ground, leaving the sphere short of electrons. Cut the earth wire while the rod is still near, then remove the rod. The sphere is left with an overall positive charge, opposite to the rod, and the sphere never touched the rod.",
        marks: [
          "The near rod separates the charges: electrons are repelled to the far side of the sphere.",
          "Earthing lets the repelled electrons flow away to the ground.",
          "Cut the earth wire before removing the rod, leaving the sphere positive (opposite to the rod).",
        ],
        ask: "Give the steps in order: bring the rod near, earth the sphere, cut the wire, remove the rod, and say what charge is left each time.",
      },
      // O5. open (hazards/uses)
      {
        kind: "open",
        prompt: "Explain how an electrostatic precipitator removes dust from the waste gases going up a chimney.",
        figure: "fig-15-17-precipitator",
        modelAnswer: "As the dirty gas rises, it passes a negatively charged wire grid that gives the dust particles a charge. The charged dust is then attracted to large collecting plates that carry the opposite (positive) charge, because unlike charges attract. The dust sticks to the plates and is collected, so only clean gas leaves the top of the chimney. The plates are shaken from time to time to remove the collected dust.",
        marks: [
          "A charged grid gives the dust particles an electric charge.",
          "The charged dust is attracted to oppositely charged collecting plates (unlike charges attract).",
          "The dust sticks to the plates and is removed, so clean gas leaves the chimney.",
        ],
        ask: "Follow the dust: how does it get charged, why is it pulled to the plates, and what leaves the chimney as a result?",
      },
    ],
  },
];
