import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, section 1. Grounded in KB Chapter 20 (Electromagnetism) section 20.1.
// Conceptual chapter: no numeric working, no formulas. Figure colours follow the house key:
// current I (and the current dot/cross) = blue, magnetic field lines B = grey, a magnet's
// north pole = red, south pole = blue, wires/coils/soft-iron core = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t18.1",
    code: "T18.1",
    title: "The magnetic effect of a current",
    blurb: "How an electric current makes a magnetic field, and how to control it",
    steps: [
      {
        kind: "concept",
        heading: "A current makes a magnetic field",
        figure: "fig-20-01-straight-wire-field",
        body: "Whenever a *current* flows, it always sets up a *magnetic field* in the space around it. This link between electricity and magnetism is called *electromagnetism*.",
        say: "Every electric current is wrapped in a magnetic field, without exception. This picture shows a straight wire carrying a blue current, and around it are grey field lines. Switch the current on and the field appears, switch it off and the field vanishes. We call this partnership of electricity and magnetism electromagnetism.",
      },
      {
        kind: "concept",
        heading: "The field around a straight wire",
        figure: "fig-20-01-straight-wire-field",
        body: "Around a straight wire the field lines are *concentric circles*, evenly spaced around the wire and *strongest* near it. The *right-hand grip rule* gives the direction: point the thumb along the current and the curled fingers follow the field.",
        say: "The grey field lines around the blue wire are complete circles, one inside the next, all sharing the wire as their centre. They are packed tightest close to the wire, so the field is strongest there and fades as you move away. To find which way the field points, grip the wire with your right hand, thumb along the current, and your curling fingers show the way the field circles round.",
      },
      {
        kind: "concept",
        heading: "A solenoid is an electromagnet",
        figure: "fig-20-03-solenoid-field",
        body: "A coil of many turns is a *solenoid*. Its field looks just like a *bar magnet's*, so a current-carrying solenoid is an *electromagnet* with a north and a south end. Right-hand grip here: curl the fingers round the turns the way the current flows and the thumb points to the *north* pole.",
        say: "Wind the wire into a coil of many turns and you have a solenoid. The grey field lines run straight through the middle and loop round the outside, exactly the pattern of a bar magnet. One end acts as a north pole, drawn red, and the other as a south pole, drawn blue, so the coil is an electromagnet. Curl your right-hand fingers the way the current goes round the turns and your thumb points to the north end. Viewed end on, the end where the current runs anticlockwise is the north pole.",
      },
      {
        kind: "concept",
        heading: "Making the field stronger",
        figure: "fig-20-04-soft-iron-core",
        body: "A *soft-iron core* slipped inside the solenoid concentrates the field and makes it much *stronger*. You also strengthen an electromagnet with more *current* or more turns. Reversing the current reverses the field, so the poles swap over.",
        say: "Here the same coil is wound on a soft-iron core, the grey rod through the middle. The iron gathers the field together so the electromagnet is far stronger. 3 things boost it: a bigger current, more turns of wire, or that soft-iron core. And if you send the current the other way, the whole field flips, so the red north end and the blue south end trade places.",
      },
      {
        kind: "choice",
        question: "A steady current flows in a long straight wire. What shape are the magnetic field lines around it?",
        figure: "fig-20-01-straight-wire-field",
        options: [
          "Straight lines running along the wire",
          "Straight lines pointing away from the wire like spokes",
          "Concentric circles centred on the wire",
          "A single loop from one end of the wire to the other",
        ],
        correct: 2,
        ask: "Picture gripping the wire and letting your fingers wrap right around it. The field follows your fingers.",
        hints: [
          "The field does not run along the wire or point straight out from it.",
          "The lines form closed circles, one inside the next, all sharing the wire as their centre.",
        ],
        explain: "The field lines are concentric circles centred on the wire, packed tightest near the wire where the field is strongest.",
      },
      {
        kind: "choice",
        question: "Looking at the end of a wire, the current is coming straight out of the page towards you. Which way does the magnetic field circle?",
        figure: "fig-20-01-straight-wire-field",
        options: [
          "Anticlockwise",
          "Clockwise",
          "It does not circle, it points straight up",
          "First clockwise, then anticlockwise",
        ],
        correct: 0,
        ask: "Point your right thumb out of the page towards you, along the current, and see which way the fingers curl.",
        hints: [
          "Current out of the page and current into the page give opposite directions.",
          "With the current out of the page, the right-hand grip rule curls the field anticlockwise.",
        ],
        explain: "Current out of the page gives an anticlockwise field. Into the page it would be clockwise, the opposite way.",
      },
      {
        kind: "classify",
        prompt: "Sort each change by whether it makes an electromagnet stronger or does not.",
        bins: ["Makes it stronger", "Does not make it stronger"],
        items: [
          { text: "Increase the current in the coil", bin: 0 },
          { text: "Add more turns of wire", bin: 0 },
          { text: "Slide a soft-iron core into the coil", bin: 0 },
          { text: "Paint the wire a different colour", bin: 1 },
          { text: "Reverse the current direction", bin: 1 },
        ],
        ask: "An electromagnet grows with more current, more turns, or a soft-iron core. Anything that leaves those 3 unchanged does not strengthen it.",
        hints: [
          "More current, more turns and a soft-iron core all concentrate or boost the field.",
          "Reversing the current only swaps the poles, and paint does nothing, so neither makes it stronger.",
        ],
        explain: "More current, more turns and a soft-iron core each make the electromagnet stronger. Painting the wire changes nothing, and reversing the current only swaps the poles without changing the strength.",
      },
      {
        kind: "choice",
        question: "You look end on at a solenoid. At the end nearest you the current runs anticlockwise. Which pole faces you?",
        figure: "fig-20-03-solenoid-field",
        options: [
          "The south pole",
          "Neither, the ends have no poles",
          "It keeps changing between north and south",
          "The north pole",
        ],
        correct: 3,
        ask: "Use the anticlockwise-end rule, or curl your right-hand fingers the way the current goes and read off the thumb.",
        hints: [
          "The end where the current runs anticlockwise, seen end on, is one particular pole.",
          "Anticlockwise means north, clockwise would mean south.",
        ],
        explain: "The anticlockwise end is the north pole. If the current there ran clockwise instead, that end would be the south pole.",
      },
      {
        kind: "insight",
        body: "Every current carries a *magnetic field* with it, and you are in charge of that field: shape it with a *coil*, boost it with a soft-iron *core*, and flip it by *reversing* the current.",
        say: "Here is the idea to keep. There is no such thing as a current without a magnetic field, and that field is yours to command. Wind the wire into a coil to shape the field like a bar magnet, drop in a soft-iron core to strengthen it, and reverse the current to swap the poles. That control is what makes electromagnets so useful.",
      },
    ],
  },
];
