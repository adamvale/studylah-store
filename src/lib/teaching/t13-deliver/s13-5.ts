import type { Subconcept } from "@/lib/teaching/subconcepts";

// T13 Static Electricity, section 5. Grounded in KB Chapter 15 (Static Electricity) section 15.8.
// Conceptual: no numeric calculations, no working, no formula. Figure colour key: positive charge = red,
// negative charge = blue, moving electrons and the earth wire = amber, neutral metal spheres and rods = white.

export const BOXES: Subconcept[] = [
  {
    id: "t13.5",
    code: "T13.5",
    title: "Charging conductors by induction",
    blurb: "How a conductor gains charge without ever being touched by the rod",
    steps: [
      {
        kind: "concept",
        heading: "A conductor lets electrons roam",
        body: "A *conductor* lets its electrons move about freely, so you can charge it *without touching* it with the rod. This is *charging by induction*, and it uses an *earth wire* to let electrons in or out.",
        say: "Unlike an insulator, a conductor lets its electrons wander freely through the metal. That freedom is the whole trick. Bring a charged rod close and the electrons shift, and if you give them an escape route through an earth wire, some can flow right off the conductor or onto it. So a conductor can end up charged even though the rod never once touches it.",
      },
      {
        kind: "concept",
        heading: "Charging a single sphere",
        figure: "fig-15-12-induction-conductor",
        body: "A single sphere charged by induction ends up with the *opposite* charge to the rod. The order is: bring the rod *near*, earth the *far side*, cut the wire, then take the rod away.",
        say: "This figure shows 4 numbered steps to charge a white metal sphere positive using a negative rod. In step 1 the neutral sphere sits on an insulating stand with an amber earth wire attached. In step 2 the blue negative rod comes near, and the charges separate, as the rod pushes electrons to the far side. In step 3 those electrons flow away down the amber earth wire to the ground, and then you cut the wire. In step 4 you take the rod away, and the sphere is left short of electrons, so it is positive, the opposite of the rod.",
      },
      {
        kind: "concept",
        heading: "Two touching spheres",
        figure: "fig-15-13-two-spheres-induction",
        body: "Two touching spheres charged this way end up *equal and opposite*. If they are made to *touch again*, the charges *cancel* and both go *neutral*.",
        say: "Here 2 white metal spheres are touching, side by side. A blue negative rod near the left sphere pushes electrons across into the right sphere. Now separate the 2 spheres, then remove the rod. The near sphere is red and positive because it lost electrons, and the far sphere is blue and negative because it gained them, equal and opposite. But if you let those 2 spheres touch once more, the extra electrons flow back to fill the gap, the charges cancel, and both spheres become neutral again.",
      },
      {
        kind: "concept",
        heading: "Discharging by earthing",
        figure: "fig-15-14-earthing-discharge",
        body: "You *discharge* a charged conductor simply by *earthing* it. Electrons flow between the conductor and the *ground* until it is *neutral*.",
        say: "This figure has 2 panels. On the left a negative conductor is discharged as its extra electrons flow away to Earth through a finger acting as an amber earth wire. On the right a positive conductor is discharged as electrons flow the other way, up from Earth onto it. Either way the electrons move until the conductor has just the right number again, leaving it neutral.",
      },
      {
        kind: "order",
        prompt: "Put the four steps for charging a single sphere by induction into the correct order.",
        items: [
          "Bring the negative rod near the metal sphere",
          "The charges in the sphere separate",
          "Earth the far side so electrons flow away to the ground",
          "Cut the earth wire, then take the rod away",
        ],
        ask: "Think about what must happen first: the rod has to arrive before the charges can move, and you only cut the wire once the electrons have gone.",
        hints: [
          "Nothing moves until the rod is brought near, so that step comes first.",
          "You earth the far side before cutting the wire, and the rod comes off last.",
        ],
        explain: "The rod is brought near first, which makes the charges separate. Then you earth the far side so electrons leave, cut the wire to trap the charge, and finally remove the rod.",
      },
      {
        kind: "choice",
        question: "A metal sphere is charged by induction using a negative rod, earthing the far side while the rod is held near. After the rod is removed, what charge is left on the sphere?",
        options: [
          "Negative, the same as the rod",
          "No charge, it stays neutral",
          "Positive, the opposite of the rod",
          "Half positive and half negative",
        ],
        correct: 2,
        ask: "The negative rod pushes electrons off through the earth wire. If the sphere loses electrons, is it left positive or negative?",
        hints: [
          "Earthing the far side lets electrons escape to the ground while the rod is near.",
          "A sphere that has lost electrons is short of negative charge, so it is positive.",
        ],
        explain: "The sphere is left positive, the opposite of the rod. The negative rod drove electrons out through the earth wire, so the sphere ended up short of electrons.",
      },
      {
        kind: "choice",
        question: "Two identical metal spheres touch each other. A negative rod is held near one sphere, then the spheres are separated and the rod removed. What are the two final charges?",
        options: [
          "Both spheres are negative",
          "One is positive and the other is negative, equal and opposite",
          "Both spheres are positive",
          "Both spheres stay neutral",
        ],
        correct: 1,
        ask: "The rod pushes electrons out of one sphere and into the other. Once you separate them, what does each sphere have too much or too little of?",
        hints: [
          "Electrons leave the near sphere and pile up on the far sphere.",
          "The sphere that lost electrons is positive and the one that gained them is negative.",
        ],
        explain: "The 2 spheres end up equal and opposite: the near sphere is positive because it lost electrons, and the far sphere is negative because it gained them.",
      },
      {
        kind: "choice",
        question: "A charged metal conductor needs to be discharged. What is the simplest way to do it?",
        options: [
          "Warm it gently until it glows",
          "Bring another like charge near it",
          "Paint its surface white",
          "Earth it so electrons flow to or from the ground",
        ],
        correct: 3,
        ask: "Discharging means getting the conductor back to neutral. A conductor lets electrons move, so give them a path to the ground.",
        hints: [
          "You need to let electrons enter or leave until the count is balanced again.",
          "Connecting the conductor to Earth lets electrons flow until it is neutral.",
        ],
        explain: "You earth it, so electrons flow between the conductor and the ground until it is neutral. Warming, a nearby charge or paint would not balance the charge.",
      },
      {
        kind: "classify",
        prompt: "Sort each situation by whether the conductor is left charged or neutral at the end.",
        bins: ["Ends up charged", "Ends up neutral"],
        items: [
          { text: "A single sphere: rod near, earth the far side, cut the wire, then remove the rod", bin: 0 },
          { text: "Two induced spheres that are separated and then made to touch again", bin: 1 },
          { text: "A charged conductor that is connected to Earth", bin: 1 },
          { text: "A rod held near a sphere, then simply taken away without earthing", bin: 1 },
        ],
        ask: "A conductor stays charged only if electrons were let out or in through an earth wire and then trapped. If the charges can just recombine, it ends neutral.",
        hints: [
          "Cutting the earth wire before removing the rod traps a real charge on the sphere.",
          "If the electrons can flow back, by touching again, by earthing, or by never earthing at all, the conductor ends up neutral.",
        ],
        explain: "Only the earthed-then-cut sphere keeps a charge, because electrons were trapped. Spheres that touch again, a conductor earthed to discharge, and a rod removed without earthing all end up neutral.",
      },
      {
        kind: "insight",
        body: "Induction charges a conductor through an *earth wire*, never by touching, and a single sphere always ends up *opposite* to the rod. Reconnecting to Earth or touching again wipes the charge back to *neutral*.",
        say: "Hold on to the pattern. Charging a conductor by induction works through an earth wire, so the rod never touches the metal, and the sphere always ends up with the opposite charge to the rod. The same freedom that lets you charge it lets you undo it: reconnect it to Earth, or let 2 induced spheres touch again, and the electrons flow back until everything is neutral once more.",
      },
    ],
  },
];
