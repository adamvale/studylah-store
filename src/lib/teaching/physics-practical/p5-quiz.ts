import type { Subconcept } from "@/lib/teaching/subconcepts";

// TP5 Waves, topical quiz. Whole-topic check across Practical Chapter 05 (Waves and
// optics): wave properties and the wave equation, the law of reflection, refraction and
// Snell's law, critical angle and total internal reflection, the converging lens and the
// lens equation, and measuring focal length. Question-only; no formula fields.

export const BOXES: Subconcept[] = [
  {
    id: "tp5.quiz",
    code: "Quiz",
    title: "Waves and optics topical quiz",
    blurb: "Whole-topic check: waves, reflection, refraction, critical angle, lenses",
    kind: "quiz",
    steps: [
      // 1. choice, conceptual (correct 2)
      {
        kind: "choice",
        question: "A wave travels along a rope. What does the wave do?",
        options: [
          "It carries the medium along with it",
          "It transfers matter from place to place",
          "It transfers energy without moving the medium along",
          "Nothing travels along a wave",
        ],
        correct: 2,
        ask: "A wave moves energy, but think about what happens to the rope itself. Does any part of the rope travel the whole length?",
        hints: [
          "Each part of the rope only vibrates about a fixed point.",
          "Only energy travels along the wave; the medium stays where it is.",
        ],
        explain: "A wave transfers energy without moving the medium along. Each part of the rope only vibrates about a fixed point, so nothing but energy travels the length of the rope.",
      },
      // 2. choice, calc v = f lambda = 30 m/s (correct 0)
      {
        kind: "choice",
        question: "A wave has frequency 25 Hz and wavelength 1.2 m. Find its speed v.",
        options: ["30 m/s", "20.8 m/s", "26.2 m/s", "2.4 m/s"],
        correct: 0,
        ask: "The wave speed is frequency times wavelength, so work out 25 × 1.2. Which option is that?",
        hints: [
          "Use v = f lambda.",
          "25 × 1.2 is 30, in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 25 \\times 1.2" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "The speed is 30 metres per second, because 25 hertz times 1.2 metres is 30 metres per second.",
      },
      // 3. choice, conceptual, law of reflection (correct 3), figure
      {
        kind: "choice",
        question: "Which statement correctly gives the law of reflection at a plane mirror?",
        figure: "fig-pr5-03",
        options: [
          "The angle of incidence is twice the angle of reflection",
          "The reflected ray bends towards the normal",
          "The angle of incidence is measured from the mirror surface",
          "The angle of incidence equals the angle of reflection, both measured from the normal",
        ],
        correct: 3,
        ask: "The law compares 2 angles, and both are measured from the same line. Which line are they measured from, and how do the angles compare?",
        hints: [
          "Both angles are measured from the normal, not from the mirror surface.",
          "The angle of incidence equals the angle of reflection.",
        ],
        explain: "The angle of incidence equals the angle of reflection, and both are measured from the normal. The incident ray, the reflected ray and the normal all lie in one plane.",
      },
      // 4. choice, calc Snell n = 1.5 (correct 1)
      {
        kind: "choice",
        question: "Light enters glass with an angle of incidence of 45 degrees and an angle of refraction of 28 degrees (sin 45 = 0.707, sin 28 = 0.469). Find the refractive index n.",
        options: ["0.67", "1.5", "2.1", "1.0"],
        correct: 1,
        ask: "The refractive index is sin i divided by sin r, so divide 0.707 by 0.469. Which option is that?",
        hints: [
          "Use n = sin i / sin r.",
          "0.707 ÷ 0.469 is about 1.5.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 45^{\\circ}}{\\sin 28^{\\circ}} = \\dfrac{0.707}{0.469}" },
          { label: "Answer", latex: "n = 1.5" },
        ],
        explain: "The refractive index is 1.5, because 0.707 ÷ 0.469 is about 1.5. The refractive index has no units.",
      },
      // 5. choice, conceptual refraction (correct 2), figure
      {
        kind: "choice",
        question: "A ray of light passes from air into a denser glass block. What happens to it?",
        figure: "fig-pr5-04",
        options: [
          "Light speeds up and bends away from the normal",
          "Light keeps the same speed and direction",
          "Light slows down and bends towards the normal",
          "Light stops at the boundary",
        ],
        correct: 2,
        ask: "Glass is optically denser than air. Think about what happens to the speed of light, and which way it then bends.",
        hints: [
          "Entering a denser medium, light slows down.",
          "As it slows, it bends towards the normal, so the angle of refraction is smaller than the angle of incidence.",
        ],
        explain: "Entering the denser glass the light slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence.",
      },
      // 6. choice, calc critical angle c = 42 degrees (correct 0), figure
      {
        kind: "choice",
        question: "A glass has a refractive index of 1.5. Find its critical angle c.",
        figure: "fig-pr5-06",
        options: ["42 degrees", "48 degrees", "28 degrees", "62 degrees"],
        correct: 0,
        ask: "The sine of the critical angle is 1 divided by n, so work out 1 ÷ 1.5, then take the inverse sine.",
        hints: [
          "Use sin c = 1/n, so sin c = 1 ÷ 1.5, which is 0.667.",
          "The angle whose sine is 0.667 is about 42 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.5} = 0.667" },
          { label: "Answer", latex: "c = 42^{\\circ}" },
        ],
        explain: "The critical angle is 42 degrees, because 1 ÷ 1.5 is 0.667, and the angle whose sine is 0.667 is about 42 degrees.",
      },
      // 7. choice, conceptual TIR conditions (correct 3)
      {
        kind: "choice",
        question: "Which conditions are both needed for total internal reflection to happen?",
        options: [
          "The ray goes from a less dense to a denser medium",
          "Any angle of incidence will do, in either direction",
          "The ray goes from air into glass at a small angle",
          "The ray goes from a denser to a less dense medium and the angle of incidence is greater than the critical angle",
        ],
        correct: 3,
        ask: "Total internal reflection needs 2 conditions at once: think about the direction of the ray and the size of the angle of incidence.",
        hints: [
          "The ray must travel from a denser medium into a less dense one.",
          "The angle of incidence must also be greater than the critical angle.",
        ],
        explain: "Total internal reflection needs the ray to go from a denser to a less dense medium and the angle of incidence to be greater than the critical angle. If both hold, all the light is reflected back in.",
      },
      // 8. choice, calc lens f = 20.0 cm (correct 1)
      {
        kind: "choice",
        question: "An object at u = 30 cm forms a sharp image at v = 60 cm through a converging lens. Find the focal length f.",
        options: ["10.0 cm", "20.0 cm", "90.0 cm", "45.0 cm"],
        correct: 1,
        ask: "Add 1 divided by u and 1 divided by v to get 1 divided by f, then invert. Work out 1 over 30 + 1 over 60 first.",
        hints: [
          "Use 1/f = 1/u + 1/v, so 1/f = 1/30 + 1/60 = 0.0500 cm^-1.",
          "The focal length is 1 ÷ 0.0500, which is 20.0 cm.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}" },
          { label: "Substitute", latex: "\\dfrac{1}{f} = \\dfrac{1}{30} + \\dfrac{1}{60} = 0.0500\\ \\text{cm}^{-1}" },
          { label: "Answer", latex: "f = 20.0\\ \\text{cm}" },
        ],
        explain: "The focal length is 20.0 centimetres. 1 over 30 + 1 over 60 is 0.0500 per centimetre, and 1 ÷ 0.0500 is 20.0 centimetres.",
      },
      // 9. choice, conceptual lens (correct 0), figure
      {
        kind: "choice",
        question: "Which statement about a converging (convex) lens is correct?",
        figure: "fig-pr5-07",
        options: [
          "It brings parallel rays to the principal focus, a focal length f away",
          "It spreads parallel rays apart",
          "The focal length is the distance between the object and the image",
          "A real image from it is always upright",
        ],
        correct: 0,
        ask: "Think about what a converging lens does to rays that arrive parallel to the axis, and where they meet.",
        hints: [
          "A converging lens brings parallel rays together, not apart.",
          "They meet at the principal focus, which is a focal length f from the lens.",
        ],
        explain: "A converging lens brings parallel rays to the principal focus, a focal length f from the lens. A real image formed by it is inverted, not upright.",
      },
      // 10. choice, calc period T = 0.04 s (correct 2)
      {
        kind: "choice",
        question: "A wave has a frequency of 25 Hz. Find its period T.",
        options: ["25 s", "2.5 s", "0.04 s", "0.4 s"],
        correct: 2,
        ask: "The period is 1 divided by the frequency, so work out 1 ÷ 25. Which option is that?",
        hints: [
          "Use T = 1/f.",
          "1 ÷ 25 is 0.04, in seconds.",
        ],
        working: [
          { label: "Formula", latex: "T = \\dfrac{1}{f}" },
          { label: "Substitute", latex: "T = \\dfrac{1}{25}" },
          { label: "Answer", latex: "T = 0.04\\ \\text{s}" },
        ],
        explain: "The period is 0.04 seconds, because 1 ÷ 25 hertz is 0.04 seconds.",
      },
      // 11. interactive: classify refraction vs TIR
      {
        kind: "classify",
        prompt: "Sort each case by what happens to the ray at the boundary.",
        bins: ["Refraction (ray passes through)", "Total internal reflection"],
        items: [
          { text: "light going from air into glass at 30 degrees", bin: 0 },
          { text: "light going from air into water", bin: 0 },
          { text: "a ray in glass meeting the surface at 20 degrees, below the critical angle of 42 degrees", bin: 0 },
          { text: "a ray in glass meeting the surface at 50 degrees, above the critical angle of 42 degrees", bin: 1 },
          { text: "a ray inside a glass fibre striking the wall at 80 degrees", bin: 1 },
          { text: "a ray in water meeting the surface at 60 degrees, above the critical angle of 49 degrees", bin: 1 },
        ],
        ask: "Total internal reflection needs the ray to go from a denser to a less dense medium and the angle of incidence to be greater than the critical angle. Otherwise the ray refracts through. Sort each case.",
        hints: [
          "Light entering a denser medium, or meeting a boundary below the critical angle, refracts through.",
          "A ray inside the denser medium meeting the boundary above the critical angle is totally internally reflected.",
        ],
        explain: "Light entering glass or water, and a ray below the critical angle, all refract through the boundary. A ray inside the denser medium meeting the boundary above the critical angle, like 50 degrees in glass, 80 degrees in a fibre, or 60 degrees in water, is totally internally reflected.",
      },
      // 12. interactive: match quantity to symbol/unit
      {
        kind: "match",
        prompt: "Match each quantity to how it is written or measured.",
        pairs: [
          { left: "Frequency", right: "measured in hertz (Hz)" },
          { left: "Wavelength", right: "the symbol lambda, measured in metres" },
          { left: "Refractive index", right: "n = sin i / sin r, no units" },
          { left: "Focal length", right: "the distance f from the lens to the focus, in cm" },
        ],
        ask: "Match each quantity to its symbol or unit. One is in hertz, one uses the symbol lambda, one has no units, and one is a distance in centimetres.",
        hints: [
          "Frequency is in hertz and wavelength uses the symbol lambda in metres.",
          "The refractive index n is a ratio with no units, and the focal length f is a distance in centimetres.",
        ],
        explain: "Frequency is measured in hertz, wavelength uses the symbol lambda in metres, the refractive index n = sin i / sin r has no units, and the focal length f is the distance from the lens to the focus in centimetres.",
      },
      // 13. interactive: order the optical-pins method
      {
        kind: "order",
        prompt: "Put these steps of the optical-pins method for the law of reflection in the correct order.",
        items: [
          "Draw the mirror line and the normal at the point O",
          "Shine a ray at O and mark it with 2 pins at least 5.0 cm apart",
          "Look along the reflected ray and place 2 more pins in line with it",
          "Remove the pins and draw the incident and reflected rays",
          "Measure the angle of incidence and the angle of reflection from the normal",
        ],
        ask: "Start by setting up the mirror and normal, and finish by measuring the 2 angles. Put the steps in order.",
        hints: [
          "You must draw the mirror and normal before you can send a ray in.",
          "Sight the reflected ray with pins, draw both rays, then measure the angles from the normal.",
        ],
        explain: "First draw the mirror and the normal at O. Send a ray in and mark it with 2 pins at least 5.0 centimetres apart. Sight the reflected ray with 2 more pins, then remove the pins, draw both rays, and measure the angles of incidence and reflection from the normal.",
      },
      // 14. interactive slider: critical angle c = 49 degrees (n = 1.33), calc
      {
        kind: "slider",
        prompt: "Water has a refractive index of 1.33. Set the slider to its critical angle c, in degrees.",
        min: 0,
        max: 90,
        step: 1,
        unit: "degrees",
        start: 0,
        targetMin: 48,
        targetMax: 50,
        ask: "The sine of the critical angle is 1 divided by n. Work out 1 ÷ 1.33, then take the inverse sine.",
        hints: [
          "Use sin c = 1/n, so sin c = 1 ÷ 1.33, which is 0.752.",
          "The angle whose sine is 0.752 is about 49 degrees, so slide to 49.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.33} = 0.752" },
          { label: "Answer", latex: "c = 49^{\\circ}" },
        ],
        explain: "The critical angle is 49 degrees, because 1 ÷ 1.33 is 0.752, and the angle whose sine is 0.752 is about 49 degrees.",
      },
      // 15. interactive cloze: refraction sentence
      {
        kind: "cloze",
        prompt: "Complete the sentence about a ray passing into a denser medium.",
        segments: [
          "When light passes into a denser medium it ",
          " down and bends ",
          " the normal, so the angle of refraction is ",
          " than the angle of incidence.",
        ],
        bank: ["slows", "towards", "smaller", "away", "larger"],
        answer: ["slows", "towards", "smaller"],
        ask: "Think about what happens to the speed in a denser medium, which way the ray bends, and how the 2 angles compare.",
        hints: [
          "In a denser medium light slows down and bends towards the normal.",
          "Bending towards the normal makes the angle of refraction smaller than the angle of incidence.",
        ],
        explain: "In a denser medium light slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence.",
      },
      // 16. interactive spoterror: reflection measured from surface
      {
        kind: "spoterror",
        prompt: "Here is a student's account of the law of reflection. Tap the line with the mistake.",
        lines: [
          "Light reflecting off a plane mirror obeys the law of reflection.",
          "The incident ray, the reflected ray and the normal lie in one plane.",
          "The angle of incidence is measured from the mirror surface.",
          "The angle of incidence equals the angle of reflection.",
        ],
        errorLine: 2,
        ask: "Check which line the 2 angles are measured from. Are they measured from the mirror surface or from the normal?",
        hints: [
          "The angles in reflection are always measured from the normal, not from the mirror surface.",
          "The wrong line says the angle of incidence is measured from the mirror surface.",
        ],
        explain: "The mistake is the line that says the angle of incidence is measured from the mirror surface. It is measured from the normal, the line at right angles to the mirror.",
      },
      // 17. interactive graphpick: sin i vs sin r straight line through origin
      {
        kind: "graphpick",
        prompt: "In an experiment sin i is plotted against sin r for a glass block. Which graph do you expect?",
        xLabel: "sin r",
        yLabel: "sin i",
        options: [
          { points: [[0, 0], [0.1, 0.15], [0.3, 0.45], [0.5, 0.75], [0.6, 0.9]], caption: "A straight line through the origin" },
          { points: [[0, 0.3], [0.2, 0.45], [0.4, 0.6], [0.6, 0.75]], caption: "A straight line that starts above the origin" },
          { points: [[0, 0], [0.2, 0.1], [0.4, 0.28], [0.6, 0.6]], caption: "A curve that steepens" },
          { points: [[0, 0.5], [0.2, 0.5], [0.4, 0.5], [0.6, 0.5]], caption: "A horizontal line" },
        ],
        correct: 0,
        ask: "Snell's law makes sin i proportional to sin r, with n as the gradient. What does a proportional relationship look like on a graph?",
        hints: [
          "sin i = n times sin r, so the 2 quantities are directly proportional.",
          "A directly proportional graph is a straight line that passes through the origin.",
        ],
        explain: "Because sin i = n times sin r, the graph is a straight line through the origin, and its gradient is the refractive index n, here about 1.5.",
      },
      // 18. interactive tiles: v = f lambda = 30 m/s, calc
      {
        kind: "tiles",
        prompt: "A wave has frequency 25 Hz and wavelength 1.2 m. Build the working line for its speed v.",
        tiles: ["v =", "25", "\\times", "1.2", "=", "30", "m/s", "Hz"],
        answer: ["v =", "25", "\\times", "1.2", "=", "30", "m/s"],
        ask: "The wave speed is frequency times wavelength, so set up 25 × 1.2.",
        hints: [
          "Use v = f lambda.",
          "25 × 1.2 is 30, and speed is measured in metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = f\\lambda" },
          { label: "Substitute", latex: "v = 25 \\times 1.2" },
          { label: "Answer", latex: "v = 30\\ \\text{m/s}" },
        ],
        explain: "The speed is 30 metres per second, because 25 hertz times 1.2 metres is 30 metres per second.",
      },
      // 19. interactive slider: focal length f = 18.8 cm (u = 25, v = 75), calc
      {
        kind: "slider",
        prompt: "An object at u = 25.0 cm gives a sharp image at v = 75.0 cm. Set the slider to the focal length f, in cm.",
        min: 0,
        max: 40,
        step: 0.1,
        unit: "cm",
        start: 0,
        targetMin: 18.6,
        targetMax: 19.0,
        ask: "Add 1 divided by u and 1 divided by v to get 1 divided by f, then invert. Work out 1 over 25.0 + 1 over 75.0 first.",
        hints: [
          "Use 1/f = 1/u + 1/v, so 1/f = 1/25.0 + 1/75.0 = 0.0533 cm^-1.",
          "The focal length is 1 ÷ 0.0533, which is 18.8 cm, so slide to 18.8.",
        ],
        working: [
          { label: "Formula", latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}" },
          { label: "Substitute", latex: "\\dfrac{1}{f} = \\dfrac{1}{25.0} + \\dfrac{1}{75.0} = 0.0533\\ \\text{cm}^{-1}" },
          { label: "Answer", latex: "f = 18.8\\ \\text{cm}" },
        ],
        explain: "The focal length is 18.8 centimetres. 1 over 25.0 + 1 over 75.0 is 0.0533 per centimetre, and 1 ÷ 0.0533 is 18.8 centimetres.",
      },
      // 20. interactive spoterror: TIR direction
      {
        kind: "spoterror",
        prompt: "Here is a student's account of total internal reflection. Tap the line with the mistake.",
        lines: [
          "Total internal reflection sends all the light back into the medium.",
          "Total internal reflection happens going from air into glass.",
          "It needs the angle of incidence to be greater than the critical angle.",
          "The critical angle is given by sin c = 1/n.",
        ],
        errorLine: 1,
        ask: "Check the direction of the ray. Does total internal reflection happen going into a denser medium or out of it?",
        hints: [
          "Total internal reflection needs the ray to go from a denser medium to a less dense one.",
          "The wrong line says it happens going from air into glass, but that is denser, so the ray refracts in instead.",
        ],
        explain: "The mistake is the line that says total internal reflection happens going from air into glass. It happens the other way, from the denser glass into the less dense air, when the angle of incidence is greater than the critical angle.",
      },
      // 21. open: measuring wavelength across several waves
      {
        kind: "open",
        prompt: "In a ripple tank a student wants to measure the wavelength. Explain why it is better to measure across several waves and divide, rather than measuring a single wavelength.",
        modelAnswer: "A single wavelength is short, so any error in reading the ruler is a large fraction of it. By measuring the total length of several waves and dividing by the number of waves, the same reading error is spread over a longer distance, so the percentage error is much smaller and the wavelength is more accurate.",
        marks: [
          "A single wavelength is small, so the measuring error is a large fraction of it.",
          "Measuring across several waves gives a longer distance to measure.",
          "Dividing by the number of waves reduces the percentage error, giving a more accurate wavelength.",
        ],
        ask: "Think about how big the measuring error is compared with 1 wavelength, and how measuring a longer distance changes that.",
      },
      // 22. open: refraction in terms of speed
      {
        kind: "open",
        prompt: "Explain, in terms of speed, why a ray of light changes direction as it passes from air into glass.",
        modelAnswer: "Light travels more slowly in glass than in air because glass is optically denser. When the ray meets the boundary at an angle, one side of the wavefront enters the glass and slows down before the other side, so the wave changes direction and bends towards the normal. If the speed did not change, the ray would carry straight on.",
        marks: [
          "Light travels more slowly in the denser glass than in air.",
          "The change in speed at the boundary causes the ray to change direction.",
          "The ray bends towards the normal on entering the glass.",
        ],
        ask: "Compare the speed of light in air and in glass, and link the change of speed at the boundary to the change of direction.",
      },
      // 23. open: 2 conditions for TIR
      {
        kind: "open",
        prompt: "State the 2 conditions that are both needed for total internal reflection to take place, and say what happens to the light when they are met.",
        modelAnswer: "First, the light must be travelling from a denser medium into a less dense medium, for example from glass into air. Second, the angle of incidence must be greater than the critical angle for that boundary. When both conditions are met, none of the light passes out; all of it is reflected back into the denser medium.",
        marks: [
          "The ray must go from a denser to a less dense medium.",
          "The angle of incidence must be greater than the critical angle.",
          "When both hold, all the light is reflected back into the denser medium.",
        ],
        ask: "Give the condition about the direction of the ray and the condition about the size of the angle of incidence.",
      },
      // 24. open: why a graph method beats a single reading (from p5-6)
      {
        kind: "open",
        prompt: "To find the focal length of a lens, one student takes a single pair of readings of u and v, while another plots a graph of many readings and uses the gradient. Explain why the graph method gives a better value of the focal length.",
        modelAnswer: "A single pair of readings can be thrown off by a random error in judging the sharpest image or in reading the scale, and that error passes straight into the answer. Plotting many readings and drawing a best-fit line averages out the random errors, because the line follows the trend of all the points. The gradient of that line then gives a more reliable focal length, and any anomalous point can be spotted and ignored.",
        marks: [
          "A single reading carries its full random error into the answer.",
          "A graph of many readings averages out random errors through the best-fit line.",
          "The gradient gives a more reliable focal length, and anomalies can be spotted.",
        ],
        ask: "Think about random errors in a single reading, and how a best-fit line through many points treats those errors.",
      },
      // 25. open: measuring focal length with object and screen, figure
      {
        kind: "open",
        prompt: "Describe how you would measure the focal length of a converging lens using a lit object and a screen on an optical bench.",
        figure: "fig-pr5-08",
        modelAnswer: "Set up a lit cross-wire object, the lens in a holder, and a screen on an optical bench. Move the screen until a sharp, inverted image of the object forms on it. Measure the object distance u from the object to the lens and the image distance v from the lens to the screen, using the metre rule. Then use 1/f = 1/u + 1/v to work out the focal length f. Repeat for several object distances and average, approaching the sharp image from both sides to reduce error.",
        marks: [
          "Set up a lit object, the lens and a screen, and move the screen until the image is sharp.",
          "Measure the object distance u and the image distance v with a metre rule.",
          "Use 1/f = 1/u + 1/v to find f, repeating and averaging for reliability.",
        ],
        ask: "Say how you get a sharp image, which 2 distances you measure, and which equation gives the focal length.",
      },
    ],
  },
];
