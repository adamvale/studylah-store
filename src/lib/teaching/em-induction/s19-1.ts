import type { Subconcept } from "@/lib/teaching/subconcepts";

// T19 Electromagnetic Induction, section 1. Grounded in KB Chapter 21 (Electromagnetic Induction) section 21.1.
// Figure colours follow the house palette: induced current = blue, magnetic field lines = grey,
// a magnet's north pole = red, south pole = blue, coils/wires/galvanometer = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t19.1",
    code: "T19.1",
    title: "Electromagnetic induction and Faraday's law",
    blurb: "How a changing magnetic field makes an electromotive force appear in a conductor",
    steps: [
      {
        kind: "concept",
        heading: "A changing field makes an e.m.f.",
        figure: "fig-21-01-magnet-solenoid",
        body: "When the *magnetic field* through a conductor *changes*, an *electromotive force* is set up in it. This is *electromagnetic induction*, first shown by Faraday.",
        say: "In the picture a bar magnet sits beside a white coil, or solenoid, whose ends run to a galvanometer labelled G. The magnet's north pole is red and its south pole is blue, and grey field lines spread out from it. When you push the magnet toward the coil the grey pointer on the galvanometer swings one way, and when you pull it back out the pointer swings the other way. That swing means an electromotive force, an e.m.f., has been induced. The one rule behind it all is that the magnetic field through the coil must be changing.",
      },
      {
        kind: "concept",
        heading: "No change means no deflection",
        figure: "fig-21-01-magnet-solenoid",
        body: "The galvanometer only deflects *while* the magnet is *moving*. Hold the magnet *still* and it reads *zero*, because nothing is changing.",
        say: "Look again at the same coil and galvanometer G. While the magnet moves in or out, the pointer deflects. But the instant you stop and hold the magnet steady, even right inside the coil, the pointer falls back to 0. A stationary magnet still has a field threading the coil, yet that field is no longer changing, so no e.m.f. is induced. Movement, or more precisely change, is what matters.",
      },
      {
        kind: "concept",
        heading: "Magnetic flux",
        figure: "fig-21-02-flux-change",
        body: "*Magnetic flux* is a measure of the number of *field lines* passing through an area. Moving the magnet nearer *increases* the flux; moving it away *decreases* it.",
        say: "This figure shows the grey field lines threading through the loop of a coil. When the magnet is far away only a few grey lines pass through the area, so the flux is small. As the magnet approaches, more and more lines crowd through and the flux rises. As it retreats, the flux falls again. Magnetic flux is just our count of how many field lines pierce the area, and it is the changing of this flux that drives the induced e.m.f.",
      },
      {
        kind: "concept",
        heading: "Faraday's law",
        figure: "fig-21-09-wire-between-magnets",
        body: "*Faraday's law* says the induced e.m.f. is proportional to the *rate of change of flux linkage*. So the e.m.f. is *larger* with more turns, a stronger magnet, or faster motion.",
        say: "Here a copper wire is pushed straight down between the poles of 2 magnets. The north pole is red, the south pole is blue, and grey field lines run across the gap between them. As the wire moves down it slices through those grey lines, and the induced current shown in blue deflects a galvanometer. Cutting the lines faster, using a stronger magnet, or winding the wire into more turns all raise how quickly the flux linkage changes, and Faraday's law tells us the induced e.m.f. grows in step with that rate.",
      },
      {
        kind: "choice",
        question: "Which of these sets up an induced e.m.f. in a coil?",
        figure: "fig-21-01-magnet-solenoid",
        options: [
          "A magnet held completely still inside the coil",
          "A steady, unchanging magnetic field through the coil",
          "A magnet being moved toward or away from the coil",
          "A coil with no magnet anywhere near it",
        ],
        correct: 2,
        ask: "An e.m.f. appears only when the magnetic field through the coil is changing. Which option involves a change?",
        hints: [
          "A field that never changes induces nothing.",
          "Moving the magnet toward or away makes the field through the coil change from moment to moment.",
        ],
        explain: "Moving the magnet toward or away induces an e.m.f., because that is what makes the magnetic field through the coil change. A still magnet or a steady field does not change, so it induces nothing.",
      },
      {
        kind: "choice",
        question: "A magnet is held motionless deep inside a coil connected to a galvanometer. The galvanometer reads zero. Why?",
        figure: "fig-21-02-flux-change",
        options: [
          "The flux through the coil is not changing",
          "The magnet has no field when it is still",
          "The coil is broken and carries no current",
          "The magnet is too weak to reach the coil",
        ],
        correct: 0,
        ask: "The reading depends on whether the flux is changing, not on how much flux there is. Is anything changing here?",
        hints: [
          "A still magnet still has a field threading the coil.",
          "That flux is steady, and it is only a change of flux that induces an e.m.f.",
        ],
        explain: "The reading is zero because the flux through the coil is not changing. The magnet still has a field, but a steady flux induces no e.m.f.; only a changing flux does.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it makes the induced e.m.f. larger or leaves it unchanged.",
        bins: ["Increases the induced e.m.f.", "Does not increase it"],
        items: [
          { text: "Wind more turns onto the coil", bin: 0 },
          { text: "Use a stronger magnet", bin: 0 },
          { text: "Move the magnet faster", bin: 0 },
          { text: "Hold the magnet still near the coil", bin: 1 },
          { text: "Paint the magnet a different colour", bin: 1 },
        ],
        ask: "The e.m.f. grows with the rate of change of flux linkage, so more turns, a stronger magnet, or faster motion all raise it. Tap each change and drop it in the right bin.",
        hints: [
          "More turns, a stronger magnet, and quicker movement each increase the induced e.m.f.",
          "Holding the magnet still gives no change of flux, and the colour of the magnet has no effect at all.",
        ],
        explain: "More turns, a stronger magnet, and faster motion all raise the rate of change of flux linkage, so they increase the e.m.f. Holding the magnet still gives no change, and its colour is irrelevant.",
      },
      {
        kind: "choice",
        question: "A straight wire is moved between the poles of a magnet so that it cuts across the field lines. What happens?",
        figure: "fig-21-09-wire-between-magnets",
        options: [
          "Nothing, because the wire is not part of a magnet",
          "The wire becomes permanently magnetised",
          "The field lines are pushed out of the gap",
          "An e.m.f. is induced in the wire",
        ],
        correct: 3,
        ask: "Cutting field lines changes the flux linked with the wire. What does a change of flux produce?",
        hints: [
          "Slicing through the grey field lines changes the flux through the circuit.",
          "A changing flux induces an e.m.f., which drives a current the galvanometer can show.",
        ],
        explain: "An e.m.f. is induced in the wire, because moving it across the field lines changes the flux linked with the circuit, and a changing flux always induces an e.m.f.",
      },
      {
        kind: "insight",
        body: "Electromagnetic induction is about *change*: a steady field does nothing, but a *changing flux* through a conductor always drives an *e.m.f.*, and the *faster* that flux changes, the larger the e.m.f.",
        say: "Here is the idea to carry forward. It is never the presence of a magnetic field that induces an e.m.f., only the changing of it. Keep the flux steady and the galvanometer reads 0; make the flux change, by moving the magnet, adding turns, or using a stronger magnet, and an e.m.f. appears. The quicker the change, the bigger the e.m.f. That single principle sits behind generators, transformers, and the whole electrical grid.",
      },
    ],
  },
];
