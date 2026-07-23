import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP3 Dynamics (Practical Chapter 3), topical quiz. Whole-topic check:
// forces and Newton's laws; mass, weight and density; centre of gravity;
// Hooke's law and the spring balance; moments and the principle of moments;
// finding a mass by moments (knife-edge and graphical); density and friction.

export const BOXES: Subconcept[] = [
  {
    id: "tp3.quiz",
    code: "Quiz",
    title: "Dynamics practical topical quiz",
    blurb: "Whole-topic check: forces, weight, density, Hooke's law, moments, friction",
    kind: "quiz",
    steps: [
      // 1) choice, contact vs non-contact (correct 2)
      {
        kind: "choice",
        question: "Which of these forces is a contact force?",
        figure: "fig-pr3-01-contact-forces",
        options: [
          "The gravitational force on the block",
          "A magnetic force",
          "Friction between the block and the bench",
          "An electrostatic force",
        ],
        correct: 2,
        ask: "A contact force only acts while the 2 surfaces are actually touching. Which one needs the surfaces to meet?",
        hints: [
          "Gravitational, magnetic and electrostatic forces all reach across a gap.",
          "Friction acts only where the block and the bench are in contact.",
        ],
        explain: "Friction is a contact force, because it acts only where the 2 surfaces touch. The gravitational, magnetic and electrostatic forces all act across a gap, so they are non-contact forces.",
      },
      // 2) choice, W = mg calc, 0.650 kg -> 6.50 N (correct 0)
      {
        kind: "choice",
        question: "A mass of 0.650 kg hangs from a spring balance (g = 10 N/kg). Find its weight W.",
        options: ["6.50 N", "0.065 N", "65 N", "0.650 N"],
        correct: 0,
        ask: "Weight is mass times g, so work out 0.650 × 10. Which option matches?",
        hints: [
          "Use W equals m times g.",
          "0.650 × 10 is 6.50, and weight is measured in newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 0.650 \\times 10" },
          { label: "Answer", latex: "W = 6.50\\ \\text{N}" },
        ],
        explain: "The weight is 6.50 newtons, because 0.650 kilograms times 10 newtons per kilogram is 6.50 newtons.",
      },
      // 3) choice, scalar vs vector / same everywhere (correct 3)
      {
        kind: "choice",
        question: "Which statement about mass and weight is correct?",
        options: [
          "Weight is a scalar measured in kilograms",
          "Mass is a force that becomes smaller on the Moon",
          "Weight is the same everywhere, but mass depends on g",
          "Mass is a scalar that is the same everywhere; weight is a force in newtons",
        ],
        correct: 3,
        ask: "Think about what each quantity measures, its unit, and whether it changes when g changes.",
        hints: [
          "Mass is the amount of matter, a scalar in kilograms, the same everywhere.",
          "Weight is the gravitational force, a vector in newtons, and it is smaller where g is smaller.",
        ],
        explain: "Mass is a scalar amount of matter in kilograms and is the same everywhere. Weight is the gravitational force on that mass, a vector in newtons, given by W equals m g, so it is smaller on the Moon where g is smaller.",
      },
      // 4) interactive: classify contact vs non-contact
      {
        kind: "classify",
        prompt: "Sort each force by whether it is a contact force or a non-contact force.",
        bins: ["Contact force", "Non-contact force"],
        items: [
          { text: "Normal reaction", bin: 0 },
          { text: "Tension in a string", bin: 0 },
          { text: "Friction", bin: 0 },
          { text: "Gravitational force", bin: 1 },
          { text: "Magnetic force", bin: 1 },
          { text: "Electrostatic force", bin: 1 },
        ],
        ask: "A contact force needs the objects to be touching; a non-contact force acts across a gap. Tap each force and drop it in its bin.",
        hints: [
          "Normal reaction, tension and friction all act where surfaces meet.",
          "Gravitational, magnetic and electrostatic forces all act across a gap.",
        ],
        explain: "Normal reaction, tension and friction are contact forces, because they act only where surfaces touch. The gravitational, magnetic and electrostatic forces are non-contact forces, because they act across a gap.",
      },
      // 5) interactive: match force to direction
      {
        kind: "match",
        prompt: "Match each force to the direction in which it acts.",
        pairs: [
          { left: "Normal reaction", right: "Perpendicular to the surface" },
          { left: "Tension", right: "Along the string, away from the object" },
          { left: "Friction", right: "Opposing the relative sliding" },
          { left: "Weight", right: "Vertically downward" },
        ],
        ask: "Picture a block being pulled along a bench, and think about which way each force arrow points.",
        hints: [
          "The normal reaction is at right angles to the surface, and weight points straight down.",
          "Tension pulls along the string away from the object, while friction opposes the sliding.",
        ],
        explain: "The normal reaction acts perpendicular to the surface, tension acts along the string away from the object, friction opposes the relative sliding, and weight acts vertically downward.",
      },
      // 6) choice, Hooke's law limit of proportionality (correct 1)
      {
        kind: "choice",
        question: "A spring is stretched well beyond its limit of proportionality. What happens?",
        figure: "fig-pr3-05-hookes-law-apparatus",
        options: [
          "The extension stays exactly proportional to the load",
          "The load is no longer proportional to the extension, so Hooke's law no longer holds",
          "The spring constant becomes zero",
          "The spring reads the force more accurately",
        ],
        correct: 1,
        ask: "Hooke's law is only valid up to the limit of proportionality. What breaks down past that point?",
        hints: [
          "Below the limit, load and extension are proportional and the graph is a straight line.",
          "Past the limit the line curves, so the load is no longer proportional to the extension.",
        ],
        explain: "Past the limit of proportionality the load is no longer proportional to the extension, so Hooke's law no longer holds and the load-extension line stops being straight.",
      },
      // 7) interactive: order, steps to balance a rule to find an unknown mass
      {
        kind: "order",
        prompt: "Put these steps to find an unknown mass by balancing a rule on a knife-edge in the correct order.",
        items: [
          "Balance the bare rule on the knife-edge to find its centre of gravity",
          "Hang the known mass on one side of the pivot",
          "Move the unknown mass until the rule balances again",
          "Measure the distance of each mass from the pivot",
          "Take moments about the pivot to find the unknown mass",
        ],
        ask: "Start by finding where the bare rule balances, and finish by using the principle of moments. Put the steps in order.",
        hints: [
          "You must locate the rule's centre of gravity before adding the masses.",
          "Once the rule is balanced, measure the distances, then equate the moments to find the unknown mass.",
        ],
        explain: "First balance the bare rule to find its centre of gravity, then hang the known mass, move the unknown mass until it balances, measure both distances, and finally take moments about the pivot to find the unknown mass.",
      },
      // 8) interactive: slider, W = mg, 2.5 kg -> 25 N
      {
        kind: "slider",
        prompt: "A 2.5 kg mass rests on the bench (g = 10 N/kg). Set the slider to its weight, in newtons.",
        min: 0,
        max: 40,
        step: 0.1,
        unit: "N",
        start: 0,
        targetMin: 24.9,
        targetMax: 25.1,
        ask: "Weight is mass times g, so work out 2.5 × 10.",
        hints: [
          "Use W equals m times g.",
          "2.5 × 10 is 25, so slide to 25 newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = mg" },
          { label: "Substitute", latex: "W = 2.5 \\times 10" },
          { label: "Answer", latex: "W = 25\\ \\text{N}" },
        ],
        explain: "The weight is 25 newtons, because 2.5 kilograms times 10 newtons per kilogram is 25 newtons. The same mass would have this weight anywhere g is 10 newtons per kilogram.",
      },
      // 9) choice, density calc, 384/480 = 0.80 g/cm^3 (correct 2)
      {
        kind: "choice",
        question: "A block has a mass of 384 g and measures 12.0 cm by 8.0 cm by 5.0 cm. Find its density, and say whether it floats on water.",
        options: [
          "1.25 g/cm^3, sinks",
          "0.60 g/cm^3, floats",
          "0.80 g/cm^3, floats",
          "480 g/cm^3, sinks",
        ],
        correct: 2,
        ask: "Density is mass divided by volume. Work out the volume from 12.0 × 8.0 × 5.0, then divide 384 by it. Compare with 1.0 gram per cubic centimetre for water.",
        hints: [
          "The volume is 12.0 × 8.0 × 5.0, which is 480 cubic centimetres.",
          "384 ÷ 480 is 0.80, and 0.80 is less than 1.0, so it floats.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{384}{12.0 \\times 8.0 \\times 5.0} = \\dfrac{384}{480}" },
          { label: "Answer", latex: "\\rho = 0.80\\ \\text{g/cm}^3" },
        ],
        explain: "The volume is 480 cubic centimetres, so the density is 384 ÷ 480, which is 0.80 grams per cubic centimetre. That is less than the 1.0 grams per cubic centimetre of water, so the block floats.",
      },
      // 10) open, centre of gravity of a lamina
      {
        kind: "open",
        prompt: "Describe how to find the centre of gravity of an irregular flat lamina using a plumb line.",
        figure: "fig-pr3-03-centre-of-gravity",
        modelAnswer: "Make a small hole near the edge of the lamina and hang it freely from a pin so it can swing. Hang a plumb line from the same pin and mark the vertical line it makes on the lamina. Repeat by hanging the lamina from 2 or 3 different holes, marking the vertical line each time. The point where the lines cross is the centre of gravity, because the centre of gravity always lies directly below the point of support.",
        marks: [
          "Hang the lamina freely from a hole so it can swing.",
          "Use a plumb line from the same point and mark the vertical line.",
          "Repeat from 2 or 3 holes; the lines cross at the centre of gravity.",
        ],
        ask: "Think about why a hanging object settles with its centre of gravity below the pivot, and how repeating from different holes lets you locate that point.",
      },
      // 11) choice, moments, rule weight 4.0 N (correct 0)
      {
        kind: "choice",
        question: "A uniform metre rule balances on a knife-edge at the 40 cm mark. A 2.0 N weight hangs at the 20 cm mark. The rule's centre of gravity is at the 50 cm mark. Find the weight W of the rule.",
        options: ["4.0 N", "2.0 N", "8.0 N", "1.0 N"],
        correct: 0,
        ask: "At balance the clockwise moment equals the anticlockwise moment about the pivot. The 2.0 N acts 20 cm from the pivot; the rule's weight acts 10 cm from the pivot on the other side.",
        hints: [
          "The 2.0 N is at 40 - 20, which is 20 cm from the pivot; the weight is at 50 - 40, which is 10 cm.",
          "2.0 × 20 equals W times 10, so W is 40 ÷ 10, which is 4.0 newtons.",
        ],
        working: [
          { label: "Formula", latex: "F_1 d_1 = W d_2" },
          { label: "Substitute", latex: "2.0 \\times 20 = W \\times 10" },
          { label: "Answer", latex: "W = 4.0\\ \\text{N}" },
        ],
        explain: "Taking moments about the pivot, 2.0 × 20 equals W times 10, so 40 equals 10 W, giving W equal to 4.0 newtons.",
      },
      // 12) interactive: cloze, Hooke's law / spring balance
      {
        kind: "cloze",
        prompt: "Complete the sentence about how a spring balance works.",
        segments: [
          "A spring balance reads force directly because a spring's ",
          " is proportional to the load. This is ",
          " law, and it holds only up to the limit of ",
          ".",
        ],
        bank: ["extension", "Hooke's", "proportionality", "compression", "weight"],
        answer: ["extension", "Hooke's", "proportionality"],
        ask: "Think about which measurement grows in step with the load, whose law that is, and the point past which the law fails.",
        hints: [
          "The stretch of a spring is called its extension, and it is proportional to the load.",
          "This is Hooke's law, valid only up to the limit of proportionality.",
        ],
        explain: "A spring balance works because a spring's extension is proportional to the load. This is Hooke's law, and it holds only up to the limit of proportionality.",
      },
      // 13) choice, k = F/e = 40 N/m (correct 3)
      {
        kind: "choice",
        question: "A spring has a natural length of 4.0 cm. A load of 2.0 N stretches it to 9.0 cm. Find its spring constant k.",
        options: ["0.40 N/m", "4.0 N/m", "400 N/m", "40 N/m"],
        correct: 3,
        ask: "First find the extension, e equals L minus L nought, in metres. Then k is the load divided by the extension.",
        hints: [
          "The extension is 9.0 - 4.0, which is 5.0 centimetres, or 0.050 metres.",
          "k is 2.0 ÷ 0.050, which is 40 newtons per metre.",
        ],
        working: [
          { label: "Formula", latex: "k = \\dfrac{F}{e},\\quad e = L - L_0" },
          { label: "Substitute", latex: "k = \\dfrac{2.0}{0.050}" },
          { label: "Answer", latex: "k = 40\\ \\text{N/m}" },
        ],
        explain: "The extension is 9.0 - 4.0, which is 5.0 centimetres, or 0.050 metres. The spring constant is 2.0 ÷ 0.050, which is 40 newtons per metre.",
      },
      // 14) interactive: spoterror, weight is a scalar
      {
        kind: "spoterror",
        prompt: "Here are 4 statements about mass and weight. Tap the line that is wrong.",
        lines: [
          "Mass is the amount of matter in an object.",
          "Mass is a scalar measured in kilograms.",
          "Weight is a scalar that is the same everywhere.",
          "Weight is the gravitational force, W = mg, in newtons.",
        ],
        errorLine: 2,
        ask: "Check each statement. Which quantity is a vector that changes where g changes?",
        hints: [
          "Mass is the scalar that is the same everywhere.",
          "Weight is a vector force that is smaller where g is smaller, so calling it a scalar that is the same everywhere is wrong.",
        ],
        explain: "The wrong line says weight is a scalar that is the same everywhere. Weight is really a vector force in newtons, W equals m g, and it is smaller where g is smaller. It is mass that is the scalar that stays the same.",
      },
      // 15) interactive: graphpick, load-extension line through origin
      {
        kind: "graphpick",
        prompt: "In a Hooke's law experiment you plot load W against extension e for a spring below its limit of proportionality. Which graph do you expect?",
        xLabel: "extension e / cm",
        yLabel: "load W / N",
        options: [
          { points: [[0, 0], [1, 0.5], [2, 1.0], [3, 1.5], [4, 2.0]], caption: "Straight line through the origin" },
          { points: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]], caption: "Horizontal line" },
          { points: [[0, 0], [1, 0.2], [2, 0.6], [3, 1.4], [4, 2.6]], caption: "Curve that bends upward" },
          { points: [[0, 1], [1, 1.5], [2, 2.0], [3, 2.5], [4, 3.0]], caption: "Straight line with a positive intercept" },
        ],
        correct: 0,
        ask: "Below the limit the load is proportional to the extension, and no load gives no extension. What does a proportional relationship look like on a graph?",
        hints: [
          "Proportional means doubling the extension doubles the load.",
          "The line is straight and passes through the origin, and its gradient is the spring constant.",
        ],
        explain: "The correct graph is a straight line through the origin, because the load is proportional to the extension below the limit of proportionality. Its gradient is the spring constant k.",
      },
      // 16) interactive: tiles, density working
      {
        kind: "tiles",
        prompt: "A block of mass 384 g has a volume of 480 cm^3. Build the working line for its density rho.",
        tiles: ["rho =", "384", "/", "480", "=", "0.80", "g/cm^3", "1.25"],
        answer: ["rho =", "384", "/", "480", "=", "0.80", "g/cm^3"],
        ask: "Density is mass divided by volume, so set up 384 ÷ 480.",
        hints: [
          "Use rho equals m divided by V.",
          "384 ÷ 480 is 0.80, in grams per cubic centimetre.",
        ],
        working: [
          { label: "Formula", latex: "\\rho = \\dfrac{m}{V}" },
          { label: "Substitute", latex: "\\rho = \\dfrac{384}{480}" },
          { label: "Answer", latex: "\\rho = 0.80\\ \\text{g/cm}^3" },
        ],
        explain: "The density is 0.80 grams per cubic centimetre, because 384 grams divided by 480 cubic centimetres is 0.80 grams per cubic centimetre.",
      },
      // 17) choice, graphical method: gradient / intercept meaning (correct 1)
      {
        kind: "choice",
        question: "In the graphical method for an unknown mass M, a graph of r/p against q/p is a straight line of gradient 0.5. What does its intercept tell you?",
        options: [
          "The gradient of 0.5 gives the unknown mass directly",
          "The intercept equals M/100, so M is 100 times the intercept",
          "The intercept is always zero",
          "The intercept equals the known 50 g mass",
        ],
        correct: 1,
        ask: "The equation is r/p equals 0.5 times q/p plus M over 100. Compare it with a straight line y equals gradient times x plus intercept.",
        hints: [
          "The gradient 0.5 is just the ratio of the 50 gram mass to the 100 gram mass.",
          "The intercept is M divided by 100, so multiply the intercept by 100 to get M.",
        ],
        explain: "The line follows r/p equals 0.5 times q/p plus M over 100, so the intercept equals M divided by 100. The unknown mass M is therefore 100 times the intercept, while the gradient 0.5 is only the 50 to 100 gram ratio.",
      },
      // 18) open, principle of moments
      {
        kind: "open",
        prompt: "State the principle of moments and the 2 conditions for a body to be in equilibrium.",
        figure: "fig-pr3-04-principle-of-moments",
        modelAnswer: "The principle of moments states that when a body is in equilibrium, the sum of the clockwise moments about any pivot equals the sum of the anticlockwise moments about that pivot. A moment is a force times its perpendicular distance from the pivot. For full equilibrium 2 conditions must hold: the resultant force on the body is zero, and the resultant moment about any point is zero.",
        marks: [
          "Sum of clockwise moments equals sum of anticlockwise moments about any pivot.",
          "The resultant force is zero.",
          "The resultant moment (turning effect) about any point is zero.",
        ],
        ask: "Say what the clockwise and anticlockwise moments do at balance, and give the 2 conditions on force and on turning effect.",
      },
      // 19) interactive: slider, friction W = Mg, 0.300 kg -> 3.0 N
      {
        kind: "slider",
        prompt: "A block is pulled at a constant velocity by a string over a pulley to a hanging mass of 0.300 kg (g = 10 N/kg). Set the slider to the pull W, in newtons.",
        min: 0,
        max: 10,
        step: 0.1,
        unit: "N",
        start: 0,
        targetMin: 2.9,
        targetMax: 3.1,
        ask: "The pull equals the weight of the hanging mass, W equals M times g, so work out 0.300 × 10.",
        hints: [
          "Use W equals M times g for the hanging mass.",
          "0.300 × 10 is 3.0, so slide to 3.0 newtons.",
        ],
        working: [
          { label: "Formula", latex: "W = Mg" },
          { label: "Substitute", latex: "W = 0.300 \\times 10" },
          { label: "Answer", latex: "W = 3.0\\ \\text{N}" },
        ],
        explain: "The pull is 3.0 newtons, because the hanging mass of 0.300 kilograms times 10 newtons per kilogram is 3.0 newtons. At constant velocity this pull equals the friction.",
      },
      // 20) choice, friction at constant velocity (correct 0)
      {
        kind: "choice",
        question: "A block is pulled along a bench at a constant velocity. What is true about the pull and the friction?",
        options: [
          "The pull equals the friction, because the resultant force is zero",
          "The pull is greater than the friction",
          "The friction is greater than the pull",
          "There is no friction at a constant velocity",
        ],
        correct: 0,
        ask: "Constant velocity means zero acceleration, so the resultant force is zero. What does that say about the 2 horizontal forces?",
        hints: [
          "Zero acceleration means the horizontal forces are balanced.",
          "So the forward pull is exactly equal to the backward friction.",
        ],
        explain: "At a constant velocity the acceleration is zero, so the resultant force is zero. The forward pull is therefore exactly equal to the backward friction.",
      },
      // 21) interactive: order, steps to find the coefficient of friction
      {
        kind: "order",
        prompt: "Put these steps to find the coefficient of friction of a block in the correct order.",
        items: [
          "Place the block on the bench with a load on top",
          "Pull the block using a string over a pulley to a hanging mass",
          "Adjust the pull until the block slides at a constant velocity",
          "Record the pull, which equals the friction, and the load",
          "Plot pull against load; the gradient is the coefficient of friction",
        ],
        ask: "You change the load, find the steady-velocity pull each time, then plot the results. Put the steps in order.",
        hints: [
          "The block must be sliding at a constant velocity before you take a reading.",
          "Repeat for several loads, then the gradient of pull against load gives the coefficient of friction.",
        ],
        explain: "First set up the block with a load, pull it with a hanging mass, and adjust the pull until it slides at a constant velocity. Then record the pull and load, and finally plot pull against load so the gradient gives the coefficient of friction.",
      },
      // 22) choice, mu = W/(L + mg) = 0.48 (correct 2)
      {
        kind: "choice",
        question: "For a sliding block the friction model is W = mu L + mu m g. The steady-velocity pull is W = 3.0 N with a load L = 2.00 N, and m g = 4.214 N for the block. Find the coefficient of friction mu.",
        options: ["0.62", "1.50", "0.48", "0.31"],
        correct: 2,
        ask: "Rearrange to mu equals W divided by the total, L plus m g. Add 2.00 and 4.214, then divide 3.0 by that.",
        hints: [
          "L plus m g is 2.00 + 4.214, which is 6.214 newtons.",
          "3.0 ÷ 6.214 is about 0.48, and mu has no units.",
        ],
        working: [
          { label: "Formula", latex: "\\mu = \\dfrac{W}{L + mg}" },
          { label: "Substitute", latex: "\\mu = \\dfrac{3.0}{2.00 + 4.214}" },
          { label: "Answer", latex: "\\mu = 0.48" },
        ],
        explain: "The total force term is 2.00 + 4.214, which is 6.214 newtons. So mu is 3.0 ÷ 6.214, which is about 0.48. The coefficient of friction is a ratio of forces, so it has no units.",
      },
      // 23) open, why pull equals friction at constant velocity
      {
        kind: "open",
        prompt: "Explain why the string's pull equals the friction on a block when the block slides at a constant velocity.",
        figure: "fig-pr3-14-friction-apparatus",
        modelAnswer: "At a constant velocity the block's acceleration is zero. By Newton's first law a zero acceleration means the resultant force on the block is zero, so the horizontal forces must balance. The only horizontal forces are the forward pull from the string and the backward friction, so the pull must be equal in size to the friction. This is why you slide the block at a steady speed before taking a reading.",
        marks: [
          "Constant velocity means zero acceleration.",
          "Zero acceleration means the resultant force is zero, so the horizontal forces balance.",
          "The forward pull therefore equals the backward friction.",
        ],
        ask: "Link the constant velocity to the acceleration, the acceleration to the resultant force, and then to the 2 horizontal forces.",
      },
      // 24) open, mass vs weight on the Moon
      {
        kind: "open",
        prompt: "Explain the difference between the mass and the weight of a block, and say whether each one changes when the block is taken from the Earth to the Moon.",
        modelAnswer: "Mass is the amount of matter in the block, a scalar measured in kilograms, and it is the same on the Earth and the Moon. Weight is the gravitational force on that mass, a vector measured in newtons, given by W = mg. On Earth g is about 10 newtons per kilogram, but on the Moon it is smaller, so the weight is smaller on the Moon while the mass stays the same.",
        marks: [
          "Mass is the amount of matter, a scalar in kilograms.",
          "Weight is the gravitational force, a vector in newtons, W = mg.",
          "Mass stays the same; weight is smaller on the Moon because g is smaller.",
        ],
        ask: "For each quantity give what it measures, its unit, and whether it depends on g.",
      },
      // 25) open, density of a block and floating
      {
        kind: "open",
        prompt: "Describe how you would find the density of a small rectangular block, and how you would decide whether it floats on water.",
        modelAnswer: "Measure the length, width and thickness of the block with a ruler or vernier calipers, taking each reading more than once and averaging, and find the volume from length times width times thickness. Measure the mass of the block on a balance. Calculate the density from rho = m divided by V. Compare the density with the 1.0 grams per cubic centimetre of water: if the block's density is less than 1.0 it floats, and if it is greater than 1.0 it sinks.",
        marks: [
          "Measure and average the dimensions and find the volume; measure the mass.",
          "Calculate density from rho = m / V.",
          "Compare with 1.0 g/cm^3 for water: less dense floats, denser sinks.",
        ],
        ask: "Think about which measurements give the volume and the mass, the density formula, and the value you compare the density with.",
      },
    ],
  },
];
