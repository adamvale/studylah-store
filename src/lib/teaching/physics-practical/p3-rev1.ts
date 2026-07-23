import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical), Revision 1. Checkpoint over sections tp3.1 to tp3.3:
// forces and Newton's laws, mass/weight/density, Hooke's law. Question-only.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: forces, mass and weight, density, Hooke's law",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which statement is Newton's first law of motion?",
        options: [
          "A resultant force gives an object an acceleration in its direction.",
          "Every action has an equal and opposite reaction.",
          "An object stays at rest or at constant velocity unless a resultant force acts on it.",
          "The force on an object equals its mass times its acceleration.",
        ],
        correct: 2,
        ask: "Newton's first law is about what happens when there is no resultant force. Which option describes that?",
        hints: [
          "The first law is the idea of inertia: no resultant force means no change in motion.",
          "A body already moving keeps a constant velocity, and a body at rest stays at rest, unless a resultant force acts.",
        ],
        explain: "Newton's first law states that an object stays at rest or at constant velocity unless a resultant force acts on it. The other statements describe the second law, F = ma, and the third law.",
      },
      {
        kind: "choice",
        question: "A mass of 0.650 kg hangs from a spring balance where g = 10 N/kg. What does the balance read?",
        figure: "fig-pr3-02-spring-balance",
        options: ["6.50 N", "0.650 N", "65.0 N", "16.5 N"],
        correct: 0,
        ask: "The balance reads weight, which is mass times g. Work out 0.650 times 10. Which option is that?",
        hints: [
          "Use W = m g, with g equal to 10 newtons per kilogram.",
          "0.650 times 10 is 6.50, and weight is measured in newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 0.650 \\times 10" },
          { label: "Answer", latex: "W = 6.50\\ \\text{N}" },
        ],
        explain: "The balance reads 6.50 newtons, because 0.650 kilograms times 10 newtons per kilogram is 6.50 newtons.",
      },
      {
        kind: "choice",
        question: "A block of mass 384 g has a volume of 480 cm^3. What is its density?",
        options: ["1.25 g/cm^3", "8.0 g/cm^3", "0.60 g/cm^3", "0.80 g/cm^3"],
        correct: 3,
        ask: "Density is mass divided by volume. Work out 384 divided by 480. Which option is that?",
        hints: [
          "Use rho = m divided by V.",
          "384 divided by 480 is 0.80, in grams per cubic centimetre.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{384}{480}" },
          { label: "Answer", latex: "\\rho = 0.80\\ \\text{g/cm}^3" },
        ],
        explain: "The density is 0.80 grams per cubic centimetre, because 384 grams divided by 480 cubic centimetres is 0.80. Being less dense than water, at 1.0 grams per cubic centimetre, the block would float.",
      },
      {
        kind: "choice",
        question: "A spring has a natural length L_0 = 4.0 cm. Under a load it stretches to a length of 9.0 cm. What is the extension e?",
        figure: "fig-pr3-05-hookes-law-apparatus",
        options: ["13.0 cm", "5.0 cm", "9.0 cm", "2.25 cm"],
        correct: 1,
        ask: "The extension is how much longer the spring is now, so subtract the natural length from the stretched length. Which option is that?",
        hints: [
          "Use e = L minus L_0.",
          "9.0 minus 4.0 is 5.0 centimetres.",
        ],
        working: [
          { label: "Formula", latex: "e = L - L_0" },
          { label: "Substitute", latex: "e = 9.0 - 4.0" },
          { label: "Answer", latex: "e = 5.0\\ \\text{cm}" },
        ],
        explain: "The extension is 5.0 centimetres, because the stretched length of 9.0 centimetres minus the natural length of 4.0 centimetres is 5.0 centimetres.",
      },
      {
        kind: "choice",
        question: "Up to what point does Hooke's law, F = ke, hold for a spring?",
        options: [
          "It holds for any load, however large.",
          "It holds only after the spring is fully stretched.",
          "It holds up to the limit of proportionality.",
          "It holds only for springs made of steel.",
        ],
        correct: 2,
        ask: "Hooke's law is the straight-line part of a spring's behaviour. What is the name of the point where that straight line ends?",
        hints: [
          "Extension is proportional to load only while the load is not too large.",
          "Beyond a certain point, called the limit of proportionality, the line stops being straight and the law fails.",
        ],
        explain: "Hooke's law holds up to the limit of proportionality. Past that point extension is no longer proportional to load, so you must not over-stretch the spring.",
      },
      {
        kind: "classify",
        prompt: "Sort each force into the correct family.",
        bins: ["Contact", "Non-contact"],
        items: [
          { text: "friction", bin: 0 },
          { text: "tension", bin: 0 },
          { text: "normal reaction", bin: 0 },
          { text: "gravitational force", bin: 1 },
          { text: "magnetic force", bin: 1 },
          { text: "electrostatic force", bin: 1 },
        ],
        ask: "For each force, ask whether the 2 objects must be touching for it to act. If they must touch, it is a contact force. Tap each one and drop it in its bin.",
        hints: [
          "Friction, tension and the normal reaction all rely on surfaces meeting.",
          "The gravitational, magnetic and electrostatic forces each act across an empty gap.",
        ],
        explain: "Friction, tension and the normal reaction are contact forces, because they only act where surfaces touch. The gravitational, magnetic and electrostatic forces are non-contact forces, because each acts across empty space.",
      },
      {
        kind: "match",
        prompt: "Match each force to the direction in which it acts.",
        pairs: [
          { left: "Weight", right: "vertically downwards" },
          { left: "Normal reaction", right: "perpendicular to the surface" },
          { left: "Tension", right: "along the string, away from the object" },
          { left: "Friction", right: "opposing the relative sliding" },
        ],
        ask: "Picture a block being pulled along a bench. Think about which way each of these forces points, then join each force to its direction.",
        hints: [
          "Weight always pulls straight down, and the normal reaction pushes out at a right angle to the surface.",
          "Tension pulls along the string away from the object, while friction always opposes the sliding.",
        ],
        explain: "Weight acts vertically downwards, the normal reaction acts perpendicular to the surface, tension acts along the string away from the object, and friction acts to oppose the relative sliding.",
      },
      {
        kind: "graphpick",
        prompt: "In a Hooke's law experiment, load W is plotted against extension e. Which graph shows a spring obeying Hooke's law?",
        xLabel: "extension e (cm)",
        yLabel: "load W (N)",
        options: [
          { points: [[0, 2], [2, 3], [4, 4], [6, 5]], caption: "straight line, not through the origin" },
          { points: [[0, 0], [2, 1], [4, 2], [6, 3]], caption: "straight line through the origin" },
          { points: [[0, 0], [2, 0.5], [4, 2], [6, 4.5]], caption: "curve, steepening" },
          { points: [[0, 3], [2, 3], [4, 3], [6, 3]], caption: "horizontal line" },
        ],
        correct: 1,
        ask: "For Hooke's law, extension is proportional to load, so zero load must give zero extension. Which line is straight and passes through the origin?",
        hints: [
          "Proportional means a straight line that goes through the point where both are zero.",
          "The curve and the offset line both fail; look for the straight line starting at the origin.",
        ],
        explain: "The straight line through the origin is correct, because Hooke's law makes load proportional to extension, so zero load gives zero extension and the gradient is the spring constant k.",
      },
      {
        kind: "tiles",
        prompt: "A spring extends by 0.050 m under a load of 2.0 N. Build the working line that gives the spring constant k.",
        tiles: ["k =", "2.0", "\\div", "0.050", "=", "40", "N/m", "N"],
        answer: ["k =", "2.0", "\\div", "0.050", "=", "40", "N/m"],
        ask: "The spring constant is the load divided by the extension, so set up 2.0 divided by 0.050.",
        hints: [
          "Rearranging F = ke gives k equal to F divided by e.",
          "2.0 divided by 0.050 is 40, in newtons per metre.",
        ],
        working: [
          { label: "Formula", latex: "k = \\dfrac{F}{e}" },
          { label: "Substitute", latex: "k = \\dfrac{2.0}{0.050}" },
          { label: "Answer", latex: "k = 40\\ \\text{N/m}" },
        ],
        explain: "The spring constant is 40 newtons per metre, because 2.0 newtons divided by 0.050 metres is 40 newtons per metre.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this summary of Hooke's law is wrong. Find it.",
        lines: [
          "A spring balance reads a force because a spring's extension is proportional to the load.",
          "Hooke's law is written F = ke, where e is the extension.",
          "The spring constant k stays valid no matter how far you stretch the spring.",
          "A stiffer spring has a larger value of k.",
        ],
        errorLine: 2,
        ask: "Think about whether a spring keeps obeying Hooke's law when you pull it very hard. Which line ignores that limit?",
        hints: [
          "Hooke's law only holds up to the limit of proportionality.",
          "Once you stretch past that limit, extension is no longer proportional to load, so the spring constant no longer applies.",
        ],
        explain: "The wrong line says the spring constant stays valid however far you stretch the spring. In fact Hooke's law, and the value of k, only hold up to the limit of proportionality; beyond it the spring no longer obeys the law.",
      },
      {
        kind: "open",
        prompt: "Explain 2 ways in which the mass of an object differs from its weight.",
        modelAnswer: "Mass is the amount of matter in a body. It is a scalar measured in kilograms and it stays the same everywhere. Weight is the gravitational force on that mass. It is a vector measured in newtons, given by W = mg, so it changes when g changes, for example on the Moon.",
        marks: [
          "Mass is a scalar in kg; weight is a force (vector) in N.",
          "Mass is constant everywhere; weight depends on g.",
          "Weight is given by W = mg.",
        ],
        ask: "Think about what each quantity measures, its unit, and whether it changes when the object is carried to the Moon.",
      },
      {
        kind: "open",
        prompt: "A block has a density of 0.80 g/cm^3. State whether it floats or sinks in water, and explain your answer using density.",
        modelAnswer: "The block floats. Water has a density of 1.0 grams per cubic centimetre. The block's density, 0.80 grams per cubic centimetre, is less than that of water. An object that is less dense than water floats, while one that is denser sinks, so this block floats.",
        marks: [
          "States the block floats.",
          "Water has a density of about 1.0 g/cm^3.",
          "Density 0.80 g/cm^3 is less than water, and less dense floats.",
        ],
        ask: "Compare the block's density with the density of water, and recall the rule for whether something floats or sinks.",
      },
    ],
  },
];
