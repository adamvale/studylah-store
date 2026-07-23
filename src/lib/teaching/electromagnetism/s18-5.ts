import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, section 5. Grounded in KB Chapter 20 (sections 20.5 and 20.6).
// CONCEPTUAL: no calculations, no working, no formula. Colour key: force/thrust arrow = yellow,
// magnetic field = grey, magnet N pole = red, S pole = blue, current and any moving charge/beam = blue.

export const BOXES: Subconcept[] = [
  {
    id: "t18.5",
    code: "T18.5",
    title: "Force on charged particles; the turning effect on a coil",
    blurb: "How a magnetic field bends a moving charge, and how it twists a current-carrying coil",
    steps: [
      {
        kind: "concept",
        heading: "A moving charge is a tiny current",
        figure: "fig-20-10-charged-particles",
        body: "A *moving charge* is really a tiny *current*, so a *beam of charged particles* is deflected by a magnetic field. The force is always at 90 degrees to the motion, so it bends the beam into a circle.",
        say: "A single charge on the move counts as a small current, and a magnetic field pushes on any current. So a beam of charged particles gets bent aside as it flies through the field. In this figure the field points into the page, drawn with grey crosses. A blue charge moving across it feels a yellow force, and that force always acts at 90 degrees to the direction of travel. Because the push stays sideways as the charge turns, it curves the beam round into a circle.",
      },
      {
        kind: "concept",
        heading: "Opposite charges deflect opposite ways",
        figure: "fig-20-10-charged-particles",
        body: "Conventional *current* is the way a *positive* charge moves, but the *opposite* way for an electron. So a positive charge and an electron travelling the same way deflect in opposite directions; a stronger field gives a bigger deflection.",
        say: "Conventional current points the way a positive charge moves. An electron is negative, so its conventional current points the opposite way, backwards along its path. That flips the direction of the force on it. In this figure a blue positive charge and a blue electron move the same way through the grey field into the page, yet the yellow forces on them point opposite ways, so one bends up and the other bends down. Make the field stronger and every deflection gets bigger.",
      },
      {
        kind: "concept",
        heading: "A coil feels a couple",
        figure: "fig-20-11-turning-coil",
        body: "A rectangular *coil* has its 2 sides carrying *current* in *opposite* directions, so one side is pushed up and the other down. These 2 equal and opposite forces form a couple that makes the coil rotate.",
        say: "Look at a rectangular coil sitting between a red north pole and a blue south pole, with the grey field running across it. Current runs up one side of the coil and back down the other, so the 2 sides carry current in opposite directions. On the side where the current comes out of the page a yellow force pushes up; on the side where the current goes into the page a yellow force pushes down. 2 equal forces acting in opposite directions like this are called a couple, and a couple twists the coil round. You get a bigger turning effect with more turns, more current, or a stronger magnet.",
      },
      {
        kind: "choice",
        question: "A beam of particles travels to the right through a magnetic field pointing into the page. Which way do a proton and an electron in the beam deflect?",
        figure: "fig-20-10-charged-particles",
        options: [
          "Both deflect upward",
          "The proton deflects down and the electron up",
          "The proton deflects up and the electron down",
          "Both deflect downward",
        ],
        correct: 2,
        ask: "The proton is positive, so its conventional current is to the right. Use Fleming's left-hand rule for the proton, then remember the electron does the opposite.",
        hints: [
          "For the positive proton moving right in a field into the page, the force is upward.",
          "The electron carries the opposite conventional current, so it deflects the opposite way, downward.",
        ],
        explain: "The proton deflects up and the electron down. The proton's conventional current is to the right, giving an upward force in a field into the page; the electron's conventional current is to the left, so its force, and its deflection, are reversed.",
      },
      {
        kind: "choice",
        question: "A positive charge and an electron move the same way through the same field. Why do they deflect in opposite directions?",
        options: [
          "The electron has much more mass than the proton",
          "Their conventional currents point in opposite directions",
          "The magnetic field only acts on positive charges",
          "The electron moves faster than the positive charge",
        ],
        correct: 1,
        ask: "Think about what conventional current means for a positive charge and for a negative one moving the same way.",
        hints: [
          "Conventional current is the direction a positive charge moves, and the opposite direction for an electron.",
          "Opposite conventional currents in the same field give opposite forces.",
        ],
        explain: "Their conventional currents point in opposite directions. The electron is negative, so its conventional current runs backward along its path, which reverses the magnetic force and sends it the opposite way.",
      },
      {
        kind: "choice",
        question: "A rectangular coil carrying a current sits in a magnetic field. Why does the coil turn?",
        options: [
          "The field pushes the whole coil sideways",
          "One side feels a force and the other feels no force",
          "Both sides of the coil are pushed the same way",
          "Its 2 sides feel equal and opposite forces that form a couple",
        ],
        correct: 3,
        ask: "The 2 sides of the coil carry current in opposite directions. Think about the direction of the force on each side.",
        hints: [
          "One side is pushed up and the other is pushed down.",
          "2 equal forces acting in opposite directions form a couple, which is a turning effect.",
        ],
        explain: "Its 2 sides feel equal and opposite forces that form a couple. The sides carry current in opposite directions, so one is pushed up and the other down, and that couple rotates the coil.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by its effect on the turning effect of a current-carrying coil in a magnetic field.",
        bins: ["Increases the turning effect", "Does not increase it"],
        items: [
          { text: "Wind more turns onto the coil", bin: 0 },
          { text: "Increase the current in the coil", bin: 0 },
          { text: "Use a stronger magnet", bin: 0 },
          { text: "Take turns off the coil", bin: 1 },
          { text: "Use a weaker magnet", bin: 1 },
        ],
        ask: "The couple grows with more turns, more current, or a stronger field. Tap each change and drop it into its bin.",
        hints: [
          "More turns, more current, and a stronger magnet all make the couple bigger.",
          "Fewer turns or a weaker magnet make a smaller turning effect, not a bigger one.",
        ],
        explain: "More turns, a larger current, and a stronger magnet all increase the turning effect. Removing turns or using a weaker magnet reduces it.",
      },
      {
        kind: "insight",
        body: "A *magnetic field* pushes on anything that carries *current*, whether that is a free *charge* bent into a circle or the 2 sides of a coil twisted by a couple.",
        say: "Here is the thread that ties it together. A magnetic field pushes on moving charge, always at 90 degrees to the motion. On a single free charge that sideways push curves it into a circle. On a coil the same push acts up on one side and down on the other, and that couple spins the coil. Same rule, 2 useful outcomes.",
      },
    ],
  },
];
