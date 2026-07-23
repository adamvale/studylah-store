import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 11. Grounded in KB Chapter 04 (Forces) section 4.23 (Friction).

export const BOXES: Subconcept[] = [
  {
    id: "t3.11",
    code: "T3.11",
    title: "Friction",
    blurb: "The contact force that opposes motion, and when it helps or hinders",
    steps: [
      {
        kind: "concept",
        heading: "What friction is",
        figure: "fig-04-23-friction",
        body: "*Friction* is the *contact force* a surface exerts on an object to oppose its motion across it. It acts *parallel* to the surfaces and always *opposite* to the direction of motion.",
        say: "Look at the diagram. The block slides to the right, shown by the grey arrow, and the blue friction arrow points the other way, back to the left, flat along the surface where the 2 meet. That is the key idea. Friction is a contact force, so the surfaces must be touching, and it always pushes back against the motion, never with it.",
      },
      {
        kind: "concept",
        heading: "Why friction happens",
        body: "No surface is perfectly *smooth*. Tiny *irregularities* on the two surfaces catch on one another as they slide, and this dragging is friction. *Rougher* surfaces catch more, so they give more friction.",
        say: "Even a surface that looks smooth is covered in tiny bumps and ridges. When 2 surfaces slide, these little irregularities catch and snag on one another, and that dragging is what we feel as friction. The rougher the surfaces, the more the bumps catch, and the more friction you get.",
      },
      {
        kind: "concept",
        heading: "Friend and foe",
        body: "Friction is *useful*: it lets us walk without slipping, lets tyres grip so a car can turn and brake, and lets us grip objects. It is also a *nuisance*: it wears away moving parts, wastes energy as *heat*, and lowers the *efficiency* of machines.",
        say: "Friction has 2 faces. Without it you could not walk, tyres could not grip the road, and you could not hold anything. But the same force wears away moving parts, turns useful energy into wasted heat, and drags down the efficiency of machines. So sometimes we want more of it, and sometimes we fight to get rid of it.",
      },
      {
        kind: "choice",
        question: "A block is pulled steadily along a bench at constant velocity by a force of 18 N. How large is the friction on it?",
        options: ["18 N", "0 N", "36 N", "9 N"],
        correct: 0,
        ask: "At constant velocity the resultant force is 0, so friction must exactly balance the 18 newton pull. Which option is that?",
        hints: [
          "Constant velocity means no acceleration, so the resultant force is 0.",
          "For the forces to cancel, friction must equal the pull of 18 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F_{\\text{friction}} = F_{\\text{applied}}" },
          { label: "Substitute", latex: "F_{\\text{friction}} = 18\\ \\text{N}" },
          { label: "Answer", latex: "F_{\\text{friction}} = 18\\ \\text{N}" },
        ],
        explain: "The friction is 18 newtons. Because the block moves at constant velocity, the resultant force is 0, so friction must exactly balance the 18 newton pull.",
      },
      {
        kind: "classify",
        prompt: "Sort each effect of friction as useful or a nuisance.",
        bins: ["Useful", "Nuisance"],
        items: [
          { text: "walking without slipping", bin: 0 },
          { text: "tyres gripping to brake", bin: 0 },
          { text: "gripping a cup", bin: 0 },
          { text: "moving parts wearing away", bin: 1 },
          { text: "energy wasted as heat", bin: 1 },
          { text: "lower machine efficiency", bin: 1 },
        ],
        ask: "For each one, ask whether friction is helping you do something or getting in the way. Tap each item and drop it in its bin.",
        hints: [
          "Gripping, walking and braking all depend on friction being there.",
          "Wear, wasted heat and lost efficiency are all costs of unwanted friction.",
        ],
        explain: "Walking, braking and gripping are useful jobs friction does for us. Wearing parts away, wasting energy as heat and lowering efficiency are the ways friction becomes a nuisance.",
      },
      {
        kind: "slider",
        prompt: "A 10 kg block already has 18 N of friction on it. The pull is raised to 58 N. Set the slider to its acceleration, in m/s^2.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "m/s^2",
        start: 0,
        targetMin: 3.9,
        targetMax: 4.1,
        ask: "First find the resultant force, 58 - 18, then divide by the 10 kilogram mass.",
        hints: [
          "The resultant force is 58 - 18, which is 40 newtons.",
          "Acceleration is resultant force divided by mass, so 40 ÷ 10 is 4.",
        ],
        working: [
          { label: "Formula", latex: "a = \\dfrac{F_{\\text{resultant}}}{m}" },
          { label: "Substitute", latex: "a = \\dfrac{58 - 18}{10}" },
          { label: "Answer", latex: "a = 4\\ \\text{m/s}^2" },
        ],
        explain: "The acceleration is 4 metres per second squared. The resultant force is 58 - 18, which is 40 newtons, and 40 divided by the 10 kilogram mass gives 4 metres per second squared.",
      },
      {
        kind: "classify",
        prompt: "Sort each method by whether it reduces or increases friction.",
        bins: ["Reduces friction", "Increases friction"],
        items: [
          { text: "ball bearings", bin: 0 },
          { text: "a lubricant such as oil", bin: 0 },
          { text: "polished surfaces", bin: 0 },
          { text: "chalk on the hands", bin: 1 },
          { text: "deep treads on tyres", bin: 1 },
        ],
        ask: "Ask whether each method smooths the way for sliding or gives the surfaces more grip. Tap each item and drop it in its bin.",
        hints: [
          "Ball bearings, oil and polish all make sliding easier.",
          "Chalk and deep treads are there to grip more strongly.",
        ],
        explain: "Ball bearings, lubricants and polished surfaces reduce unwanted friction so parts slide freely. Chalk on the hands and deep treads on tyres increase wanted friction to improve grip.",
      },
      {
        kind: "match",
        prompt: "Match each situation to the smart friction choice.",
        pairs: [
          { left: "A squeaky bike axle", right: "Add a lubricant" },
          { left: "A gymnast's grip on a bar", right: "Rub on chalk" },
          { left: "A tyre on a wet road", right: "Cut deep treads" },
          { left: "A heavy sliding drawer", right: "Fit ball bearings" },
        ],
        ask: "For each case, decide whether you want less friction to ease sliding or more friction to grip, then pick the matching trick.",
        hints: [
          "A squeaky axle and a stiff drawer both need friction reduced.",
          "A gymnast's hands and a wet tyre both need friction increased for grip.",
        ],
        explain: "A lubricant and ball bearings cut unwanted friction on the axle and the drawer. Chalk and deep treads add wanted friction so the gymnast and the tyre grip firmly.",
      },
      {
        kind: "insight",
        body: "When an object moves at *constant velocity*, the *resultant* force is 0, so friction exactly *equals* the applied force. Raise the pull, and the extra force becomes the *resultant* that accelerates it.",
        say: "Hold on to this link. While something slides at a steady speed, the forces balance, so friction is equal to whatever is pulling it. The moment you pull harder than that, the friction stays behind and the difference becomes a resultant force, and that resultant is what makes the object speed up.",
      },
    ],
  },
];