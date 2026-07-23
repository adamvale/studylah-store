import type { Subconcept } from "@/lib/teaching/subconcepts";

// T4 Turning Effect of Forces, section 3. Grounded in KB Chapter 05 (Turning Effects of Forces) section 5.2.
// Figure colours follow the carry-over colour key: applied force/effort = yellow, weight/load = pink,
// support/reaction = green, rotation/motion = blue, pivot/dimension/line-of-action guides = grey, beam/object = white.

export const BOXES: Subconcept[] = [
  {
    id: "t4.3",
    code: "T4.3",
    title: "The two conditions for equilibrium",
    blurb: "When a body neither moves off nor spins: forces balance and moments balance",
    steps: [
      {
        kind: "concept",
        heading: "Two conditions, both needed",
        body: "A body is in *equilibrium* when it is at rest and not turning. For that, *two conditions* must both hold at once: there is *no resultant force*, and there is *no resultant moment*.",
        say: "Equilibrium means a body just stays put. It does not drift off in any direction, and it does not spin. For that to happen, 2 separate conditions have to be true at the same time. The forces must cancel out, and the turning effects must cancel out too. Miss either one and the body will not stay still.",
      },
      {
        kind: "concept",
        heading: "First condition: no resultant force",
        figure: "fig-05-08-two-conditions",
        body: "The *upward forces* must balance the *downward forces*, and left must balance right, so the *resultant force* is zero and the body does not move from place to place.",
        formula: {
          latex: "F_{\\text{up}} = F_{\\text{down}}",
          where: [
            { sym: "F_{\\text{up}}", meaning: "total upward force", unit: "N" },
            { sym: "F_{\\text{down}}", meaning: "total downward force", unit: "N" },
          ],
        },
        say: "In the picture a single white beam is held up by 2 supports. 2 green arrows push up on it, 1 of 4 newtons and 1 of 6 newtons, because those are support reactions. A pink arrow of 10 newtons pulls straight down at the middle, and that is the weight. Grey guides mark the distances, 1.2 metres on 1 side and 0.8 metres on the other. Notice the 2 green upward forces, 4 and 6, add up to the 10 newton pink weight, so the up and down forces balance and there is no resultant force.",
      },
      {
        kind: "concept",
        heading: "Second condition: no resultant moment",
        body: "The total *clockwise moment* about any point must equal the total *anticlockwise moment*, so the *resultant moment* is zero and the body does not spin.",
        formula: {
          latex: "\\sum M_{\\text{clockwise}} = \\sum M_{\\text{anticlockwise}}",
        },
        say: "The second condition is about turning. Pick any point, add up all the moments trying to turn the body clockwise, then add up all the moments trying to turn it anticlockwise. If those 2 totals are equal, they cancel, so there is no resultant moment and the body will not rotate. In the beam picture the 10 newton weight sits so that 4 newtons times 1.2 metres balances 6 newtons times 0.8 metres, and both come to 4.8 newton metres.",
      },
      {
        kind: "insight",
        body: "If the *resultant force* is not zero the body *accelerates* that way, and if the *resultant moment* is not zero the body *rotates* that way, so equilibrium needs both to be zero.",
        say: "Think about what goes wrong if a condition fails. Leave a resultant force and the body accelerates off in that direction. Leave a resultant moment and the body starts to spin. Because these are 2 different faults, you must fix both to reach equilibrium. And notice equilibrium is only about cancelling out, so even a very heavy object can be in equilibrium, as long as all its forces add to zero and all its moments add to zero.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement by which equilibrium condition it belongs to.",
        bins: ["No resultant force", "No resultant moment"],
        items: [
          { text: "Upward forces balance downward forces", bin: 0 },
          { text: "The body does not move from place to place", bin: 0 },
          { text: "Total clockwise moment equals total anticlockwise moment", bin: 1 },
          { text: "The body does not spin", bin: 1 },
        ],
        ask: "One condition is about forces cancelling so the body does not shift, the other is about moments cancelling so it does not turn. Tap each statement and drop it in its bin.",
        hints: [
          "Anything about up balancing down, or the body not moving off, is the force condition.",
          "Anything about clockwise balancing anticlockwise, or the body not spinning, is the moment condition.",
        ],
        explain: "Balancing the upward and downward forces, and not moving off, belong to the no resultant force condition. Balancing clockwise against anticlockwise moments, and not spinning, belong to the no resultant moment condition.",
      },
      {
        kind: "order",
        prompt: "Put these steps in order to test whether a loaded beam is in equilibrium.",
        items: [
          "Mark every force acting on the beam with its size and direction",
          "Check that the total upward force equals the total downward force",
          "Take moments about a chosen point",
          "Check that the total clockwise moment equals the total anticlockwise moment",
          "If both checks pass, the beam is in equilibrium",
        ],
        ask: "First get all the forces down, then test the force condition, then work with moments and test the moment condition. Only then can you decide.",
        hints: [
          "You cannot balance forces or moments until you have listed every force first.",
          "Both the force check and the moment check must pass before you can call it equilibrium.",
        ],
        explain: "List the forces, check up equals down, then take moments about a point and check clockwise equals anticlockwise. Only when both conditions hold is the beam in equilibrium.",
      },
      {
        kind: "choice",
        question: "A uniform plank of weight 300 N hangs level from two vertical strings P and Q, 3.0 m apart. A 60 N load hangs 2.0 m from P, and the plank's weight acts at its centre, 1.5 m from P. Taking moments about P, find the tension T_Q in string Q.",
        figure: "fig-05-19-plank-two-strings",
        options: ["190 N", "570 N", "170 N", "360 N"],
        correct: 0,
        ask: "Take moments about P so string P drops out. Balance the anticlockwise moment of T_Q against the clockwise moments of the weight and the load, so work out 300 times 1.5 plus 60 times 2.0, then divide by 3.0.",
        hints: [
          "The clockwise moments are 300 times 1.5 and 60 times 2.0; the anticlockwise moment is T_Q times 3.0.",
          "450 plus 120 is 570, and 570 divided by 3.0 is 190.",
        ],
        working: [
          { label: "Formula", latex: "T_Q \\times 3.0 = (300 \\times 1.5) + (60 \\times 2.0)" },
          { label: "Substitute", latex: "T_Q \\times 3.0 = 450 + 120 = 570" },
          { label: "Answer", latex: "T_Q = \\dfrac{570}{3.0} = 190\\ \\text{N}" },
        ],
        explain: "The tension in string Q is 190 newtons, because the clockwise moments 450 and 120 newton metres add to 570 newton metres, and dividing by the 3.0 metre distance gives 190 newtons.",
      },
      {
        kind: "slider",
        prompt: "For the same plank, the strings must support the full downward load. The weight is 300 N, the load is 60 N, and T_Q is 190 N. Set the slider to the tension T_P in string P, in newtons.",
        min: 0,
        max: 400,
        step: 5,
        unit: "N",
        start: 0,
        targetMin: 168,
        targetMax: 172,
        ask: "The force condition says total up equals total down. The downward forces are 300 plus 60, and T_Q takes 190 of that, so work out 360 minus 190.",
        hints: [
          "Total upward tension T_P plus T_Q must equal 300 plus 60.",
          "360 minus 190 is 170, so slide to 170 newtons.",
        ],
        working: [
          { label: "Formula", latex: "T_P + T_Q = 300 + 60" },
          { label: "Substitute", latex: "T_P = 360 - 190" },
          { label: "Answer", latex: "T_P = 170\\ \\text{N}" },
        ],
        explain: "The tension in string P is 170 newtons, because the total downward force is 360 newtons, and once string Q carries 190 newtons, string P must carry the remaining 170 newtons.",
      },
      {
        kind: "insight",
        body: "Equilibrium is only about *cancelling out*, so a body can be *heavy* or carry a big load and still be in equilibrium, as long as *every force* and *every moment* add up to zero.",
        say: "Here is the idea to keep. Being in equilibrium has nothing to do with how heavy a thing is. A tiny leaf and a loaded plank can both be in equilibrium. All that matters is that the forces cancel so there is no resultant force, and the moments cancel so there is no resultant moment. Get both to zero and the body stays exactly where it is.",
      },
    ],
  },
];
