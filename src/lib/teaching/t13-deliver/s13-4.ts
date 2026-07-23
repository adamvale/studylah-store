import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, section 4. Grounded in KB Chapter 15 (Static Electricity) sections 15.6, 15.7.
// Conceptual chapter: no numeric calculations, no working blocks, no formula fields.
// Figure colour key: a positive charge (+ sign / positive object) = red; a negative charge (minus
// sign / negative object) = blue; moving electrons and the earth wire = amber; the net-force arrow
// (fig-15-10) = green; neutral objects, rods and the electroscope body = white.

export const BOXES: Subconcept[] = [
  {
    id: "t13.4",
    code: "T13.4",
    title: "Charging insulators by friction",
    blurb: "How rubbing 2 insulators moves electrons, and how a charged object grabs a neutral one",
    steps: [
      {
        kind: "concept",
        heading: "Charge stays put on an insulator",
        body: "An *insulator* holds its electrons tightly in place, so any charge it picks up cannot flow away. That trapped charge is called *static electricity*, and it only leaves when something carries it off: heating the air so the air *ionises*, or damp, *humid air*, both drain the charge away.",
        say: "An insulator, like plastic or glass, grips its electrons so firmly that they cannot travel through it. So when the insulator becomes charged, that charge just sits there. We call the trapped charge static electricity, static meaning still. It stays until something removes it. Heating the nearby air splits its molecules into charged bits, called ionising, which carry the charge off. Damp or humid air does the same, because a thin film of water lifts the charge away. In cold, dry air the charge lingers much longer.",
      },
      {
        kind: "concept",
        heading: "Rubbing transfers electrons",
        figure: "fig-15-09-friction-charging",
        body: "Rubbing 2 insulators together is *charging by friction*. Only *electrons* move: the material that *gains* electrons becomes negative, and the one that *loses* electrons becomes positive. Which is which is fixed by an electrostatic series.",
        say: "This figure shows a polythene rod being rubbed with a cloth. Friction, the rubbing, drags electrons from one surface to the other. Watch closely: the cloth loses electrons, so it is left short of them and becomes positive, marked with red plus signs. The rod gains those electrons, so it now has too many and becomes negative, marked with blue minus signs. Notice that only the electrons ever move, from the cloth across to the rod. The protons never budge.",
      },
      {
        kind: "concept",
        heading: "A charge attracts a neutral object",
        figure: "fig-15-10-induction-neutral",
        body: "A charged object can attract a *neutral* one by *induction*. The charge pulls opposite charge to the near side and pushes like charge to the far side; because the *unlike* charges on the near side are *closer*, their attraction beats the weaker repulsion from the far side.",
        say: "This figure shows a positive rod, drawn red, held near a neutral white object. The rod's charge rearranges the charges inside the object: blue minus charges are pulled to the near side, and red plus charges are pushed to the far side. This is called induction. Now here is the key. The near-side charges are unlike the rod and sit closer to it, so they are attracted strongly. The far-side charges are like the rod and sit further away, so they are repelled only weakly. The strong pull wins, and a green arrow shows the object drawn towards the rod. That is why a charged rod picks up tiny scraps of neutral paper.",
      },
      {
        kind: "concept",
        heading: "The gold-leaf electroscope",
        figure: "fig-15-11-electroscope",
        body: "A *gold-leaf electroscope* detects charge. When a charged rod is brought near its metal plate, *like charges* are pushed down onto the stem and the thin gold *leaf*; because like charges *repel*, the leaf swings up and away from the stem.",
        say: "This figure shows a gold-leaf electroscope: a metal plate on top, a stem, and a thin gold leaf hanging from the stem, all drawn white. On its own the leaf hangs straight down. Now a negatively charged rod, drawn blue, is held near the plate. Its charge pushes electrons down the stem, so like charges gather on both the stem and the leaf. Like charges repel, so the leaf is pushed away from the stem and rises. The bigger the charge, the higher the leaf lifts, so the rising leaf tells you a charge is present.",
      },
      {
        kind: "choice",
        question: "A polythene rod is rubbed with a dry cloth, and electrons move from the cloth onto the rod. Which object ends up negatively charged, and why?",
        figure: "fig-15-09-friction-charging",
        options: [
          "The cloth, because it loses electrons",
          "Neither, because rubbing cannot charge insulators",
          "The rod, because it gains extra electrons",
          "Both, because friction adds electrons to each",
        ],
        correct: 2,
        ask: "An object is negative when it has too many electrons. Which one received the electrons here?",
        hints: [
          "Gaining electrons makes an object negative; losing them makes it positive.",
          "The electrons move onto the rod, so the rod gains them and becomes negative.",
        ],
        explain: "The rod ends up negative, because it gains the electrons that leave the cloth. Extra electrons mean extra negative charge. The cloth, having lost electrons, is left positive.",
      },
      {
        kind: "spoterror",
        prompt: "A student explains how the polythene rod is charged when it is rubbed with a cloth. Tap the line that contains the mistake.",
        lines: [
          "Rubbing transfers charge between the 2 insulators.",
          "The rod gains extra electrons from the cloth.",
          "The rod also gains protons while it is rubbed.",
          "So the rod is left with an overall negative charge.",
        ],
        errorLine: 2,
        ask: "During any charging, think about which particle is actually free to move. Is it the electron or the proton?",
        hints: [
          "Protons are locked inside the nucleus and never move during charging.",
          "The line saying the rod gains protons is wrong; only electrons are transferred.",
        ],
        explain: "The mistake is the line that says the rod gains protons. Protons stay fixed in the nucleus and never move when an object is charged. Only electrons transfer, so the rod becomes negative simply by gaining electrons.",
      },
      {
        kind: "choice",
        question: "A charged rod is held just above some tiny scraps of neutral paper, and the paper jumps up and sticks to the rod. Why is a neutral object attracted to a charged one?",
        figure: "fig-15-10-induction-neutral",
        options: [
          "The paper was secretly charged the same way as the rod all along",
          "The rod induces opposite charge on the near side, which is closer, so attraction wins",
          "Gravity from the rod pulls the light paper upward",
          "Like charges attract when one object is neutral",
        ],
        correct: 1,
        ask: "The rod rearranges the charges inside the paper. Compare the distance of the near-side charges with the far-side charges.",
        hints: [
          "Opposite charge is induced on the near side and like charge on the far side.",
          "The near-side unlike charges are closer, so their attraction beats the far-side repulsion.",
        ],
        explain: "The rod induces opposite charge on the near side of the paper and like charge on the far side. Because the unlike near-side charges are closer, their attraction is stronger than the far-side repulsion, so the neutral paper is pulled to the rod. This is attraction by induction.",
      },
      {
        kind: "choice",
        question: "A negatively charged rod is brought near the top plate of a gold-leaf electroscope. What happens to the gold leaf?",
        figure: "fig-15-11-electroscope",
        options: [
          "It falls flat, because the charges are neutralised",
          "Nothing happens, because the rod does not touch it",
          "It curls toward the stem, because unlike charges attract",
          "It rises, because like charges pushed onto the stem and leaf repel",
        ],
        correct: 3,
        ask: "The rod pushes like charge down onto the stem and leaf. What do 2 like charges do to each other?",
        hints: [
          "Like charges collect on the stem and the leaf.",
          "Like charges repel, so the leaf is pushed away from the stem and rises.",
        ],
        explain: "The leaf rises. The charged rod pushes like charges down onto the stem and the leaf, and because like charges repel, the leaf is forced away from the stem and lifts. A rising leaf shows that a charge is present.",
      },
      {
        kind: "classify",
        prompt: "Sort each action by whether it would discharge a charged insulator or leave the charge in place.",
        bins: ["Removes the charge", "Leaves the charge"],
        items: [
          { text: "Heat the surrounding air so it ionises", bin: 0 },
          { text: "Breathe on it, wetting it with humid air", bin: 0 },
          { text: "Keep it in cold, very dry air", bin: 1 },
          { text: "Seal it inside more dry insulating plastic", bin: 1 },
        ],
        ask: "Charge leaves an insulator only when something carries it off, either ionised air or moisture. Tap each action and drop it in the right bin.",
        hints: [
          "Heating the air to ionise it, or damp humid air, both carry the charge away.",
          "Cold dry air and extra insulation keep the charge trapped in place.",
        ],
        explain: "Heating the air until it ionises, or using humid air, both carry the static charge away, so they discharge the insulator. Cold dry air or wrapping it in more insulation give the charge no way out, so it stays put.",
      },
      {
        kind: "insight",
        body: "Every step here comes down to one rule: only *electrons* ever move. Rubbing shifts electrons to charge an insulator, a charge rearranges electrons in a neutral object to attract it by *induction*, and a rising electroscope *leaf* is just like charges pushing apart.",
        say: "Here is the single idea that ties this section together. In static electricity the protons never move, only the electrons do. Rubbing 2 insulators simply shifts electrons from one to the other. Holding a charge near a neutral object shifts the electrons inside it, so opposite charge ends up nearer and the object is pulled in by induction. And the gold leaf rising is nothing more than like charges, pushed together onto the leaf, shoving each other apart. Follow the electrons and every one of these effects makes sense.",
      },
    ],
  },
];
