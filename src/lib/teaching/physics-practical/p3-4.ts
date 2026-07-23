import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical Chapter 3), section 4. Source: Practical Chapter 03 - Dynamics.md (moments).
// Figure colours (house dark theme): force arrows = blue, turning arcs = amber, rule and knife-edge
// pivot = white/grey, labels = white/grey. Take g = 10 N/kg.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.4",
    code: "TP3.4",
    title: "Moments and the principle of moments",
    blurb: "Turning effects, the balance rule, and finding an unknown weight",
    steps: [
      {
        kind: "concept",
        heading: "The moment of a force",
        figure: "fig-pr3-04-principle-of-moments",
        body: "The *moment*, or *turning effect*, of a force equals the force multiplied by the *perpendicular distance* from the pivot. Its unit is the *newton metre*.",
        formula: {
          latex: "\\text{moment} = F \\times d",
          where: [
            { sym: "F", meaning: "force", unit: "N" },
            { sym: "d", meaning: "perpendicular distance from the pivot", unit: "m" },
          ],
        },
        say: "The moment of a force measures how strongly it turns something about a pivot. In the picture a white metre rule rests on a grey knife-edge pivot. 2 blue force arrows, F1 and F2, point down at distances d1 and d2 along the rule. Multiply a force by its perpendicular distance from the pivot and you get its moment, measured in newton metres.",
      },
      {
        kind: "concept",
        heading: "Clockwise or anticlockwise",
        figure: "fig-pr3-04-principle-of-moments",
        body: "Every moment has a *direction*: it turns the rule either *clockwise* or *anticlockwise* about the pivot. Forces on *opposite sides* of the pivot turn it opposite ways.",
        say: "A turning effect has a direction, just like the hands of a clock. In the figure an amber arc on one side shows the rule turning clockwise, and an amber arc on the other side shows it turning anticlockwise. A force pushing down to the left of the grey pivot turns the rule one way, and a force to the right turns it the other way.",
      },
      {
        kind: "concept",
        heading: "The principle of moments",
        body: "For an object in *equilibrium*, the *sum of clockwise moments equals the sum of anticlockwise moments* about any pivot, and the *resultant force* is also *zero*.",
        formula: {
          latex: "\\sum M_{\\text{clockwise}} = \\sum M_{\\text{anticlockwise}}",
          where: [
            { sym: "M", meaning: "moment of a force about the pivot", unit: "N m" },
          ],
        },
        say: "The principle of moments says that when a rule balances, the total clockwise turning effect exactly equals the total anticlockwise turning effect about the pivot. That is one condition. The second is that the resultant force is zero, so the upward push from the knife-edge balances all the downward weights. Both must be true for equilibrium.",
      },
      {
        kind: "insight",
        figure: "fig-pr3-04-principle-of-moments",
        body: "A weight acting at the *centre of gravity* directly *above the pivot* has *zero perpendicular distance*, so it gives *no moment*. That is why a uniform rule balances on a knife-edge under its centre.",
        say: "Here is a neat idea. If a weight acts straight through the pivot, its perpendicular distance is zero, so its moment is zero, because anything times zero is zero. That is why you can rest a uniform rule on a knife-edge placed under its centre of gravity and it sits level. When the pivot is somewhere else, the rule's whole weight acts at the centre of gravity a real distance away, and that moment must be balanced by the other forces.",
      },
      {
        kind: "choice",
        question: "A metre rule stays balanced and level on a knife-edge. Which pair of conditions must BOTH hold for it to be in equilibrium?",
        figure: "fig-pr3-04-principle-of-moments",
        options: [
          "The clockwise moments are bigger than the anticlockwise moments.",
          "Only the resultant force on the rule is zero.",
          "The sum of clockwise moments equals the sum of anticlockwise moments, and the resultant force is zero.",
          "Only the total moment about the pivot is zero.",
        ],
        correct: 2,
        ask: "Equilibrium needs 2 separate conditions at once, one about turning and one about the resultant force.",
        hints: [
          "The turning condition is that clockwise moments balance anticlockwise moments.",
          "On its own the moment condition is not enough. The resultant force must also be zero.",
        ],
        explain: "For equilibrium both conditions hold together: the clockwise moments equal the anticlockwise moments about the pivot, and the resultant force is zero.",
      },
      {
        kind: "choice",
        question: "A uniform metre rule balances on a knife-edge at the 40 cm mark. A weight of 2.0 N hangs at the 20 cm mark. The rule's centre of gravity is at the 50 cm mark. Find the weight W of the rule.",
        options: ["1.0 N", "2.0 N", "8.0 N", "4.0 N"],
        correct: 3,
        ask: "Take moments about the pivot at 40 cm. The 2.0 N weight acts 40 minus 20 from the pivot; the rule's weight acts 50 minus 40 from it. Set clockwise equal to anticlockwise.",
        hints: [
          "The 2.0 N weight is 20 cm from the pivot; the rule's weight is 10 cm from the pivot.",
          "2.0 times 20 equals W times 10, so 40 equals 10 times W.",
        ],
        working: [
          { label: "Formula", latex: "F_1 \\, d_1 = W \\, d_2" },
          { label: "Substitute", latex: "2.0 \\times (40-20) = W \\times (50-40)" },
          { label: "Answer", latex: "W = \\dfrac{40}{10} = 4.0\\ \\text{N}" },
        ],
        explain: "The rule's weight is 4.0 newtons. The 2.0 newton weight gives an anticlockwise moment of 2.0 times 20, which is 40, and this balances W times 10, so W is 40 divided by 10, which is 4.0 newtons.",
      },
      {
        kind: "choice",
        question: "A uniform rule balances on a knife-edge placed exactly under its centre of gravity. What is the moment of the rule's own weight about that pivot?",
        figure: "fig-pr3-04-principle-of-moments",
        options: [
          "Zero, because the perpendicular distance from the pivot is zero.",
          "Equal to the weight times half the rule's length.",
          "Very large, because the whole weight acts at that point.",
          "Clockwise and equal to the weight in newtons.",
        ],
        correct: 0,
        ask: "The weight acts at the centre of gravity. How far is that point from the pivot here?",
        hints: [
          "The pivot is directly under the centre of gravity, so the perpendicular distance is zero.",
          "Moment is force times distance, and any force times zero distance is zero.",
        ],
        explain: "The moment is zero. The weight acts through the pivot, so its perpendicular distance is zero, and force times zero distance is zero. That is why the rule balances there.",
      },
      {
        kind: "choice",
        question: "A rule is pivoted at its centre. A single downward force is applied at the right-hand end. Which way does the rule turn?",
        figure: "fig-pr3-04-principle-of-moments",
        options: ["Anticlockwise", "Clockwise", "It does not turn at all", "Both ways at the same time"],
        correct: 1,
        ask: "Picture pushing down on the right end of a see-saw. Which way does that end go, and which way does the rule rotate?",
        hints: [
          "A downward push on the right lowers the right end.",
          "Lowering the right end while the left rises is a clockwise turn.",
        ],
        explain: "The rule turns clockwise. A downward force on the right-hand side of the pivot lowers that end and raises the other, which is a clockwise rotation.",
      },
      {
        kind: "order",
        prompt: "Put the steps in order to balance a rule on a knife-edge and find an unknown mass.",
        items: [
          "Rest the metre rule on the knife-edge and slide it until it balances on its own",
          "Note that balance point as the centre of gravity of the rule",
          "Hang the known mass and the unknown mass on opposite sides of the pivot",
          "Adjust their positions until the rule is horizontal and balanced again",
          "Measure the perpendicular distance of each mass from the pivot",
          "Apply the principle of moments to calculate the unknown mass",
        ],
        ask: "Start by finding where the bare rule balances, then load it and use the moments to solve for the unknown.",
        hints: [
          "First locate the rule's own balance point before hanging anything on it.",
          "You can only apply the principle of moments after you have measured both distances.",
        ],
        explain: "You first balance the bare rule to find its centre of gravity, then hang the known and unknown masses on opposite sides, adjust until level, measure both distances, and finally apply the principle of moments to find the unknown mass.",
      },
    ],
  },
];
