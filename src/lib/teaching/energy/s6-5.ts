import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, section 5. Grounded in KB Chapter 07 (Energy, Work and Power) section on work done by a force.
// Figure colours follow the T6 colour key: applied/pushing force = yellow, gravitational potential store/weight = pink,
// motion = blue, box/object = white, slope and dimension/distance guides = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t6.5",
    code: "T6.5",
    title: "Work done by a force",
    blurb: "How a force transfers energy by moving an object, and W = F d",
    steps: [
      {
        kind: "concept",
        heading: "Work done by a force",
        body: "*Work* is done when a *force* moves an object. For a constant force, the work done equals the force times the *distance* moved in the direction of the force, measured in *joules*.",
        formula: {
          latex: "W = Fd",
          where: [
            { sym: "W", meaning: "work done", unit: "J" },
            { sym: "F", meaning: "force", unit: "N" },
            { sym: "d", meaning: "distance moved in the direction of the force", unit: "m" },
          ],
        },
        say: "Work is our way of measuring the energy a force transfers. When a constant force pushes an object along, multiply the force in newtons by the distance the object moves in the direction of that force, in metres, and you get the work done in joules. And 1 newton metre is exactly 1 joule.",
      },
      {
        kind: "concept",
        heading: "When work is done",
        figure: "fig-07-08-work-done-cases",
        body: "Work is done only when the *force* actually *moves* the object. If the object does not move, no *work* is done, however hard you push.",
        say: "This figure has 2 stacked panels. In the top half a yellow force arrow pushes a white box, and a grey guide shows it slides along a distance, so work is done and energy is transferred. In the bottom half the same yellow force pushes on a white box that does not budge, so the distance moved is 0 and no work is done at all.",
      },
      {
        kind: "concept",
        heading: "Work up a rough slope",
        figure: "fig-07-09-box-slope",
        body: "Pushing a box up a rough slope, the *work done* splits 2 ways: part fills the *gravitational potential store* and the rest goes to *overcome friction*.",
        say: "In this picture a white box sits on a grey slope. Grey guides mark the slope as 6 metres long and the vertical height as 3 metres, and a yellow arrow labelled F is the force pushing the box up to the point P. The work you do along the slope is shared out, some of it lifts the box and fills its gravitational potential store, and the rest is spent against friction.",
      },
      {
        kind: "choice",
        question: "A box is pushed up the slope by a force F = 5 N. It moves 6 m along the slope in the direction of the force. How much work is done by the force?",
        figure: "fig-07-09-box-slope",
        options: ["30 J", "11 J", "1.2 J", "18 J"],
        correct: 0,
        ask: "Work done is the force times the distance moved in the direction of the force, so work out 5 × 6.",
        hints: [
          "Use work equals force times distance.",
          "5 × 6 is 30, and work is measured in joules.",
        ],
        working: [
          { label: "Formula", latex: "W = Fd" },
          { label: "Substitute", latex: "W = 5 \\times 6" },
          { label: "Answer", latex: "W = 30\\ \\text{J}" },
        ],
        explain: "The work done is 30 joules, because 5 newtons times 6 metres is 30 joules.",
      },
      {
        kind: "choice",
        question: "In which situation is no work done by the force?",
        figure: "fig-07-08-work-done-cases",
        options: [
          "A person pushes hard against a wall that does not move.",
          "A crane lifts a load 2 m upward.",
          "A horse pulls a cart 10 m along a road.",
          "A force slides a box 6 m across the floor.",
        ],
        correct: 0,
        ask: "Work is done only when the force actually moves the object, so look for the case where the object stays still.",
        hints: [
          "If the distance moved is 0, then the work done is 0.",
          "Pushing a wall that does not move does no work, however hard you push.",
        ],
        explain: "No work is done when pushing a wall that does not move, because the object does not move, so the distance is 0 and 5 × 0 is 0. In the other 3 cases the object moves, so work is done.",
      },
      {
        kind: "slider",
        prompt: "The same box has mass 0.80 kg and is raised a vertical height of 3 m. Take g = 10 N/kg. Set the slider to the gravitational potential energy it gains, in joules.",
        min: 0,
        max: 50,
        step: 0.5,
        unit: "J",
        start: 0,
        targetMin: 23.5,
        targetMax: 24.5,
        ask: "The gain in gravitational potential energy is mass times g times the vertical height, so work out 0.80 × 10 × 3.",
        hints: [
          "Use E_p equals m g h, and use only the vertical height of 3 metres.",
          "0.80 × 10 × 3 is 24, so slide to 24 joules.",
        ],
        working: [
          { label: "Formula", latex: "E_p = mgh" },
          { label: "Substitute", latex: "E_p = 0.80 \\times 10 \\times 3" },
          { label: "Answer", latex: "E_p = 24\\ \\text{J}" },
        ],
        explain: "The box gains 24 joules, because 0.80 kilograms times 10 newtons per kilogram times 3 metres is 24 joules. Only the vertical height of 3 metres counts, not the 6 metres along the slope.",
      },
      {
        kind: "tiles",
        prompt: "Pushing the box up the slope does 30 J of work, but it gains only 24 J of gravitational potential energy. Build the working line that gives the work done against friction.",
        tiles: ["W_f =", "30", "-", "24", "=", "6", "J", "54"],
        answer: ["W_f =", "30", "-", "24", "=", "6", "J"],
        ask: "The work against friction is the total work done minus the energy stored, so work out 30 - 24.",
        hints: [
          "Subtract the gravitational potential energy from the total work done.",
          "30 - 24 is 6, and the answer is in joules.",
        ],
        working: [
          { label: "Formula", latex: "W_f = W - E_p" },
          { label: "Substitute", latex: "W_f = 30 - 24" },
          { label: "Answer", latex: "W_f = 6\\ \\text{J}" },
        ],
        explain: "The work done against friction is 6 joules, because 30 joules of work minus 24 joules stored is 6 joules, and that energy is transferred to the surroundings.",
      },
      {
        kind: "insight",
        body: "*Work* done by a force equals force times distance moved, and it only happens when the object actually *moves*; on a rough slope that work splits between the *potential store* and *friction*.",
        say: "Pull these together. Work done is force times the distance moved in the direction of the force, and it is 0 whenever the object stays put. When you push something up a real slope, the work you do is shared out, part fills the gravitational potential store and the rest is spent against friction, ending up in the surroundings.",
      },
    ],
  },
];
