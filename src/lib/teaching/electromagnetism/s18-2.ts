import type { Subconcept } from "@/lib/teaching/subconcepts";

// T18 Electromagnetism, section 2. Grounded in KB Chapter 20 (Electromagnetism) section 20.2.
// Conceptual: no calculations, no working, no formula. Figure colours follow the house key:
// coil/soft-iron core and switch parts = white/grey, the current = blue, magnetic field lines = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t18.2",
    code: "T18.2",
    title: "The circuit breaker",
    blurb: "How an electromagnet switches a faulty circuit off by itself, and why it beats a fuse",
    steps: [
      {
        kind: "concept",
        heading: "A switch that trips itself",
        body: "A *circuit breaker* uses an *electromagnet* to switch a circuit off *automatically* whenever the current grows too large. It does the same protective job as a fuse, but unlike a fuse it can be *reset* and used again.",
        say: "A circuit breaker is a safety switch that guards a circuit against too much current. Inside it there is an electromagnet, a coil that only becomes magnetic when current flows through it. If the current climbs too high, the breaker snaps the circuit off by itself, doing the same job as a fuse. The big advantage is that once the fault is fixed you simply reset it, whereas a blown fuse has to be thrown away and replaced.",
      },
      {
        kind: "concept",
        heading: "Normal current: switch stays closed",
        figure: "fig-20-05-circuit-breaker",
        body: "At a *safe* current the electromagnet's field is *too weak* to attract the *iron bolt*, so the catch holds and the contacts stay *closed*. Current flows on as normal.",
        say: "Look at the left panel, the normal case. Blue shows the current flowing round the white coil, which is wound on a grey soft-iron core. Because the current is at its ordinary safe level, the grey magnetic field it makes is weak. It is far too weak to pull on the iron bolt beside it, so the bolt stays put, the catch stays hooked, and the 2 contacts remain touching. The circuit is complete and everything runs as usual.",
      },
      {
        kind: "concept",
        heading: "Fault current: the breaker trips",
        figure: "fig-20-05-circuit-breaker",
        body: "On a *fault* the current rises sharply. Now the electromagnet is *strong enough* to attract the iron bolt, which releases the catch, so the *spring* pulls the contacts apart and *breaks the circuit*. A reset button pushes them back together once the fault is cleared.",
        say: "Now the right panel, the fault case. A fault has let far too much current, shown in blue, pour through the coil, so the grey field is now strong. This strong field yanks the iron bolt across. The bolt trips the catch, and a stretched spring immediately pulls the 2 contacts apart. With the contacts separated the circuit is broken and the current stops, protecting the wiring. Later you press the reset button to close the contacts again.",
      },
      {
        kind: "order",
        prompt: "A fault sends too large a current into a circuit breaker. Put the steps of the trip in order, from the fault to the current stopping.",
        items: [
          "A fault lets too large a current flow",
          "The current through the electromagnet rises",
          "The electromagnet becomes strong enough to attract the iron bolt",
          "The bolt is pulled across, releasing the catch",
          "The spring pulls the contacts apart",
          "The circuit is broken and the current stops",
        ],
        ask: "Start with the fault itself, then follow the current, the electromagnet, the bolt, the spring and finally the contacts.",
        hints: [
          "The chain begins with the current rising and ends with the contacts opening.",
          "A stronger electromagnet pulls the bolt, and only after the catch is released can the spring separate the contacts.",
        ],
        explain: "The current rises first, which strengthens the electromagnet. The strong field then attracts the iron bolt, the released catch lets the spring pull the contacts apart, and the circuit breaks so the current stops.",
      },
      {
        kind: "choice",
        question: "During a fault, what actually pulls the iron bolt across and trips the switch?",
        figure: "fig-20-05-circuit-breaker",
        options: [
          "Heat from the large current melting the bolt",
          "The spring pushing directly on the bolt",
          "The strong magnetic field of the large current",
          "Gravity pulling the bolt downward",
        ],
        correct: 2,
        ask: "The coil is an electromagnet, so ask what its field does when the current suddenly gets large.",
        hints: [
          "A larger current makes the electromagnet's field stronger.",
          "It is the strengthened magnetic field, not heat or the spring, that reaches out and attracts the iron bolt.",
        ],
        explain: "The strong magnetic field of the large current attracts the iron bolt. At a safe current the field is too weak to move the bolt, but a fault current makes the electromagnet strong enough to pull it across.",
      },
      {
        kind: "choice",
        question: "Why is a circuit breaker often chosen instead of a fuse?",
        options: [
          "It lets a larger current flow safely",
          "It can be reset and used again, rather than replaced",
          "It works even when no current flows",
          "It never switches the circuit off",
        ],
        correct: 1,
        ask: "Think about what you have to do to each one after it has done its job and stopped a fault current.",
        hints: [
          "A fuse melts and cannot be used a second time.",
          "A circuit breaker just needs its reset button pressed once the fault is fixed.",
        ],
        explain: "A circuit breaker can be reset and used again, while a blown fuse must be replaced. Both cut off a dangerous current, but the breaker is the more convenient of the 2.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement about a circuit breaker into the correct state.",
        bins: ["Normal current (switch closed)", "Fault current (switch trips open)"],
        items: [
          { text: "The current is at its safe, everyday level", bin: 0 },
          { text: "The electromagnet is too weak to move the bolt", bin: 0 },
          { text: "The contacts stay touching", bin: 0 },
          { text: "The current has risen too high", bin: 1 },
          { text: "The electromagnet attracts the iron bolt", bin: 1 },
          { text: "The spring pulls the contacts apart", bin: 1 },
        ],
        ask: "A weak field leaves the switch closed, and a strong field trips it open. Sort each statement by whether the current is safe or a fault.",
        hints: [
          "A safe current keeps the field weak, the bolt still and the contacts closed.",
          "A fault current makes the field strong, so the bolt is pulled and the spring opens the contacts.",
        ],
        explain: "At a safe current the field stays weak, the bolt is not moved and the contacts stay closed. On a fault the current is too high, so the strong field attracts the bolt and the spring pulls the contacts apart.",
      },
      {
        kind: "insight",
        body: "A circuit breaker is really a *current-triggered switch*: a small safe current leaves its electromagnet too *weak* to act, but a large fault current makes it *strong enough* to trip the switch open, and because nothing is destroyed you can simply *reset* it.",
        say: "Here is the idea to keep. A circuit breaker turns the strength of an electromagnet into a decision. While the current stays safe the field is too weak to do anything, so the switch stays closed. The moment a fault pushes the current too high, the field grows strong enough to pull the bolt and snap the switch open. Nothing melts or breaks, so after fixing the fault you just press reset and the breaker is ready to guard the circuit once more.",
      },
    ],
  },
];
