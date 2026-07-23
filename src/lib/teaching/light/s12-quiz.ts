import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, topical quiz. Whole-topic check across KB Chapter 14: properties of light and
// reflection, the image in a plane mirror, refraction and refractive index, critical angle and
// total internal reflection, converging and diverging lenses, and lens images by object position.

export const BOXES: Subconcept[] = [
  {
    id: "t12.quiz",
    code: "Quiz",
    title: "Light topical quiz",
    blurb: "Whole-topic check: reflection, plane mirrors, refraction, TIR, lenses and images",
    kind: "quiz",
    steps: [
      // 1 - CHOICE - S1 properties/reflection (conceptual) - correct 3
      {
        kind: "choice",
        question: "Which statement is one of the laws of reflection?",
        options: [
          "The reflected ray always bends toward the normal",
          "The angle of incidence is always 90 degrees",
          "Light slows down when it reflects off a mirror",
          "The angle of incidence equals the angle of reflection",
        ],
        correct: 3,
        ask: "One law compares the incoming angle with the outgoing angle, both measured from the normal. Which option states that?",
        hints: [
          "Both angles are always measured from the normal, not from the surface.",
          "The law of reflection says the angle of incidence and the angle of reflection are equal.",
        ],
        explain: "A law of reflection is that the angle of incidence equals the angle of reflection, with both angles measured from the normal. Reflection does not change the speed of the light.",
      },
      // 2 - CHOICE - S1 CALCULATION angle from normal 55 -> 35 - correct 1
      {
        kind: "choice",
        question: "A ray strikes a mirror at 55 degrees to the surface. What is the angle of incidence, measured from the normal?",
        options: ["55 degrees", "35 degrees", "90 degrees", "125 degrees"],
        correct: 1,
        ask: "Angles are always measured from the normal, which is at 90 degrees to the surface. Subtract the 55 degrees from 90.",
        hints: [
          "The normal is at 90 degrees to the surface, so the angle from the normal is 90 minus the angle to the surface.",
          "90 - 55 is 35 degrees.",
        ],
        working: [
          { label: "Formula", latex: "i = 90^\\circ - \\theta_{\\text{surface}}" },
          { label: "Substitute", latex: "i = 90^\\circ - 55^\\circ" },
          { label: "Answer", latex: "i = 35^\\circ" },
        ],
        explain: "The angle of incidence is 35 degrees, because it is measured from the normal, and 90 - 55 is 35 degrees.",
      },
      // 3 - CHOICE - S2 plane mirror virtual vs real (conceptual) - correct 0
      {
        kind: "choice",
        question: "Why is the image in a plane mirror described as virtual?",
        options: [
          "It cannot be formed on a screen",
          "It is always larger than the object",
          "It is turned upside down",
          "It is formed in front of the mirror",
        ],
        correct: 0,
        ask: "A virtual image is one that only appears to be there; light does not actually meet at it. What does that mean about catching it on a screen?",
        hints: [
          "A real image can be caught on a screen because light rays actually cross there.",
          "The mirror image is virtual, so no light reaches it and it cannot be shown on a screen.",
        ],
        explain: "The image is virtual because no light actually passes through it, so it cannot be formed on a screen. It only appears to be behind the mirror where the rays seem to come from.",
      },
      // 4 - CHOICE - S3 refraction direction (conceptual) - correct 2 - figure
      {
        kind: "choice",
        question: "A ray of light passes from air into a glass block. How does it bend at the surface?",
        figure: "fig-14-09-bending-normal",
        options: [
          "It bends away from the normal because glass is less dense",
          "It does not bend at all",
          "It bends toward the normal because glass is denser and slows the light",
          "It reflects straight back into the air",
        ],
        correct: 2,
        ask: "Glass is optically denser than air, so the light slows down as it enters. Does a slowing ray bend toward or away from the normal?",
        hints: [
          "Entering a denser medium, light slows down and bends toward the normal, so the angle of refraction is smaller than the angle of incidence.",
          "Air to glass is less dense to denser, so the ray bends toward the normal.",
        ],
        explain: "The ray bends toward the normal, because glass is denser than air and the light slows down when it enters. So the angle of refraction is smaller than the angle of incidence.",
      },
      // 5 - CHOICE - S3 CALCULATION i=40 n=1.52 -> r=25 - correct 1 - figure
      {
        kind: "choice",
        question: "A ray enters glass from air at an angle of incidence of 40 degrees. The glass has a refractive index of 1.52. Find the angle of refraction.",
        figure: "fig-14-11-semicircular-block",
        options: ["40 degrees", "25 degrees", "61 degrees", "15 degrees"],
        correct: 1,
        ask: "Rearrange n = sin i / sin r to sin r = sin i / n, work out sin of 40 ÷ 1.52, then take the inverse sine.",
        hints: [
          "Use sin r equals sin i divided by n.",
          "sin of 40 ÷ 1.52 gives a sine whose angle is 25 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin r = \\dfrac{\\sin i}{n}" },
          { label: "Substitute", latex: "\\sin r = \\dfrac{\\sin 40^\\circ}{1.52}" },
          { label: "Answer", latex: "r = 25^\\circ" },
        ],
        explain: "The angle of refraction is 25 degrees, because sin r is sin of 40 ÷ 1.52, and the angle with that sine is 25 degrees. The ray bends toward the normal on entering the denser glass.",
      },
      // 6 - CHOICE - S3 CALCULATION n=1.5 -> v=2.0e8 - correct 3
      {
        kind: "choice",
        question: "Light travels at 3.0 x 10^8 m/s in a vacuum. Find its speed in glass of refractive index 1.5.",
        options: ["4.5 x 10^8 m/s", "3.0 x 10^8 m/s", "1.5 x 10^8 m/s", "2.0 x 10^8 m/s"],
        correct: 3,
        ask: "Refractive index is n = c / v, so the speed in the glass is v = c / n. Divide 3.0 × 10 to the power 8 by 1.5.",
        hints: [
          "Rearrange n equals c divided by v into v equals c divided by n.",
          "3.0 × 10 to the power 8 ÷ 1.5 is 2.0 × 10 to the power 8 metres per second.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{c}{n}" },
          { label: "Substitute", latex: "v = \\dfrac{3.0 \\times 10^8}{1.5}" },
          { label: "Answer", latex: "v = 2.0 \\times 10^8\\ \\text{m/s}" },
        ],
        explain: "The speed in the glass is 2.0 × 10 to the power 8 metres per second, because 3.0 × 10 to the power 8 ÷ 1.5 is 2.0 × 10 to the power 8. Light is slower in the denser medium.",
      },
      // 7 - CHOICE - S4 CALCULATION n=1.52 -> c=41 - correct 0
      {
        kind: "choice",
        question: "A glass block has a refractive index of 1.52. Find its critical angle.",
        options: ["41 degrees", "52 degrees", "90 degrees", "25 degrees"],
        correct: 0,
        ask: "The critical angle comes from sin c = 1 / n. Work out 1 ÷ 1.52, then take the inverse sine.",
        hints: [
          "Use sin c equals 1 divided by n.",
          "1 ÷ 1.52 gives a sine whose angle is 41 degrees.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.52}" },
          { label: "Answer", latex: "c = 41^\\circ" },
        ],
        explain: "The critical angle is 41 degrees, because sin c is 1 ÷ 1.52, and the angle with that sine is 41 degrees.",
      },
      // 8 - CHOICE - S4 TIR decision (conceptual) - correct 2 - figure
      {
        kind: "choice",
        question: "Inside a glass block the critical angle is 41 degrees. A ray travelling in the glass meets the surface with the air at 50 degrees. What happens?",
        figure: "fig-14-13-total-internal-reflection",
        options: [
          "The ray passes straight out into the air without bending",
          "The ray refracts and bends toward the normal",
          "Total internal reflection occurs and the ray reflects back into the glass",
          "The ray splits equally into a reflected and a refracted ray",
        ],
        correct: 2,
        ask: "Compare the angle of incidence with the critical angle, and remember the light is going from denser glass to less dense air. What happens when the angle is bigger than the critical angle?",
        hints: [
          "Both conditions for total internal reflection are met: denser to less dense, and the angle is greater than the critical angle.",
          "Since 50 degrees is greater than the 41 degree critical angle, no light escapes and it all reflects back.",
        ],
        explain: "Total internal reflection occurs, because the light is going from denser glass to less dense air and the 50 degree angle of incidence is greater than the 41 degree critical angle. All the light reflects back into the glass.",
      },
      // 9 - CHOICE - S5 converging vs diverging (conceptual) - correct 1
      {
        kind: "choice",
        question: "What does a converging (convex) lens do to a beam of light travelling parallel to its principal axis?",
        options: [
          "It spreads the rays out as if they came from a point behind the lens",
          "It brings the rays together at the principal focus",
          "It lets the rays pass straight through unchanged",
          "It reflects the rays back the way they came",
        ],
        correct: 1,
        ask: "A converging lens is thicker in the middle and bends parallel rays inward. Where do those rays meet?",
        hints: [
          "A diverging lens spreads rays out; a converging lens does the opposite.",
          "A converging lens brings parallel rays together at the principal focus F.",
        ],
        explain: "A converging lens brings parallel rays together at the principal focus F. A diverging lens is the one that spreads rays out as if from a virtual focus behind it.",
      },
      // 10 - CHOICE - S6 magnifying glass (conceptual) - correct 3 - figure
      {
        kind: "choice",
        question: "A small object is placed between a converging lens and its principal focus F, as in a magnifying glass. What is the image like?",
        figure: "fig-14-19-lens-virtual-image",
        options: [
          "Real, inverted and diminished",
          "Real, upright and the same size",
          "Real, inverted and enlarged",
          "Virtual, upright and enlarged",
        ],
        correct: 3,
        ask: "When the object is inside the focal length the rays do not actually cross, so the image is virtual. Is a virtual image upright or inverted, and does a magnifying glass make things bigger or smaller?",
        hints: [
          "An object inside F gives an image on the same side as the object, which is virtual.",
          "A magnifying glass gives a virtual, upright and enlarged image.",
        ],
        explain: "With the object between the lens and F the image is virtual, upright and enlarged. That is exactly how a magnifying glass makes small print look bigger.",
      },
      // 11 - INTERACTIVE classify - S1 regular vs diffuse
      {
        kind: "classify",
        prompt: "Sort each surface by the kind of reflection it mainly gives.",
        bins: ["Regular reflection", "Diffuse reflection"],
        items: [
          { text: "a flat bathroom mirror", bin: 0 },
          { text: "the still surface of a pond", bin: 0 },
          { text: "a polished metal sheet", bin: 0 },
          { text: "a sheet of white paper", bin: 1 },
          { text: "a rough concrete wall", bin: 1 },
          { text: "a woollen jumper", bin: 1 },
        ],
        ask: "Smooth surfaces keep parallel rays parallel, giving a clear reflection; rough surfaces scatter the rays. Tap each surface and drop it in the matching bin.",
        hints: [
          "Regular reflection happens on smooth, shiny surfaces where parallel rays stay parallel.",
          "Diffuse reflection happens on rough or dull surfaces, where the rays scatter in many directions.",
        ],
        explain: "Smooth surfaces such as a mirror, a still pond and polished metal give regular reflection, keeping the rays parallel. Rough surfaces such as paper, a concrete wall and wool scatter the rays, giving diffuse reflection.",
      },
      // 12 - INTERACTIVE spoterror - S4 TIR conditions (conceptual, no working)
      {
        kind: "spoterror",
        prompt: "A student lists the rules for total internal reflection. Tap the line that is wrong.",
        lines: [
          "Light must travel from a denser medium to a less dense medium.",
          "The angle of incidence must be greater than the critical angle.",
          "At the critical angle the refracted ray runs along the boundary.",
          "It can happen when light goes from air into glass.",
        ],
        errorLine: 3,
        ask: "Check the direction the light must travel. Total internal reflection only happens going one way between the 2 media.",
        hints: [
          "One condition is that the light must be inside the denser medium heading toward the less dense one.",
          "Air into glass is less dense to denser, which is the wrong direction, so that line is the mistake.",
        ],
        explain: "The wrong line says it can happen going from air into glass. That is less dense to denser, the wrong direction. Total internal reflection needs the light to go from the denser medium toward the less dense one, at an angle greater than the critical angle.",
      },
      // 13 - INTERACTIVE cloze - S2 plane mirror image characteristics
      {
        kind: "cloze",
        prompt: "Complete the description of the image in a plane mirror.",
        segments: [
          "The image in a plane mirror is ",
          " and the same size as the object, and it lies ",
          " behind the mirror as the object is in front. Because no light reaches it, the image is ",
          ".",
        ],
        bank: ["upright", "as far", "virtual", "real", "inverted", "twice as far"],
        answer: ["upright", "as far", "virtual"],
        ask: "Recall the 5 features of a plane mirror image: which describes its orientation, its distance behind the mirror, and whether it can be caught on a screen?",
        hints: [
          "A plane mirror image is the right way up and the same size as the object.",
          "It sits the same distance behind the mirror as the object is in front, and it is virtual.",
        ],
        explain: "The image is upright and the same size, it lies as far behind the mirror as the object is in front, and it is virtual because no light actually reaches it.",
      },
      // 14 - INTERACTIVE slider - S3 CALCULATION i=60 r=36 -> n=1.47
      {
        kind: "slider",
        prompt: "A ray enters medium X from air. The angle of incidence is 60 degrees and the angle of refraction is 36 degrees. Set the slider to the refractive index of X.",
        min: 1,
        max: 2,
        step: 0.01,
        start: 1,
        targetMin: 1.46,
        targetMax: 1.48,
        ask: "Refractive index is n = sin i / sin r. Work out sin of 60 divided by sin of 36.",
        hints: [
          "Use n equals sin i divided by sin r, with the angles measured from the normal.",
          "sin of 60 divided by sin of 36 is 1.47, so slide to 1.47.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin i}{\\sin r}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 60^\\circ}{\\sin 36^\\circ}" },
          { label: "Answer", latex: "n = 1.47" },
        ],
        explain: "The refractive index is 1.47, because sin of 60 divided by sin of 36 is 1.47. Refractive index has no unit.",
      },
      // 15 - INTERACTIVE tiles - S3 CALCULATION liquid-to-air 41/30 -> n=1.31
      {
        kind: "tiles",
        prompt: "Light leaves a liquid and enters the air. The angle in the air is 41 degrees and the angle in the liquid is 30 degrees. Build the working line for the refractive index n of the liquid.",
        tiles: ["n =", "sin 41", "\\div", "sin 30", "=", "1.31", "\\times", "1.13"],
        answer: ["n =", "sin 41", "\\div", "sin 30", "=", "1.31"],
        ask: "The refractive index compares the angle in air with the angle in the liquid: n = sin(angle in air) / sin(angle in liquid). Set up sin 41 divided by sin 30.",
        hints: [
          "Put the air angle on top: n equals sin 41 divided by sin 30.",
          "sin of 41 divided by sin of 30 is 1.31.",
        ],
        working: [
          { label: "Formula", latex: "n = \\dfrac{\\sin(\\text{angle in air})}{\\sin(\\text{angle in liquid})}" },
          { label: "Substitute", latex: "n = \\dfrac{\\sin 41^\\circ}{\\sin 30^\\circ}" },
          { label: "Answer", latex: "n = 1.31" },
        ],
        explain: "The refractive index of the liquid is 1.31, because sin of 41 divided by sin of 30 is 1.31.",
      },
      // 16 - INTERACTIVE slider - S4 CALCULATION perspex n=1.49 -> c=42
      {
        kind: "slider",
        prompt: "Perspex has a refractive index of 1.49. Set the slider to its critical angle, in degrees.",
        min: 0,
        max: 90,
        step: 1,
        unit: "degrees",
        start: 0,
        targetMin: 41,
        targetMax: 43,
        ask: "The critical angle comes from sin c = 1 / n. Work out 1 ÷ 1.49, then take the inverse sine.",
        hints: [
          "Use sin c equals 1 divided by n.",
          "1 ÷ 1.49 gives a sine whose angle is 42 degrees, so slide to 42.",
        ],
        working: [
          { label: "Formula", latex: "\\sin c = \\dfrac{1}{n}" },
          { label: "Substitute", latex: "\\sin c = \\dfrac{1}{1.49}" },
          { label: "Answer", latex: "c = 42^\\circ" },
        ],
        explain: "The critical angle of perspex is 42 degrees, because sin c is 1 ÷ 1.49, and the angle with that sine is 42 degrees.",
      },
      // 17 - INTERACTIVE match - S5 lens terms
      {
        kind: "match",
        prompt: "Match each lens term to its meaning.",
        pairs: [
          { left: "Principal axis", right: "the straight line through the centre of the lens at 90 degrees to it" },
          { left: "Optical centre", right: "the point at the middle of the lens; rays through it are not bent" },
          { left: "Principal focus", right: "the point where rays parallel to the axis meet after passing through" },
          { left: "Focal length", right: "the distance from the optical centre to the principal focus" },
        ],
        ask: "Match each item to its meaning. One is a line, one is a central point, one is where parallel rays meet, and one is a distance.",
        hints: [
          "The principal axis is a line and the optical centre is the middle point where rays pass straight through.",
          "The principal focus is where parallel rays meet, and the focal length is the distance from the centre to that focus.",
        ],
        explain: "The principal axis is the line through the centre of the lens at 90 degrees to it, the optical centre is the middle point where rays pass undeviated, the principal focus is where parallel rays meet, and the focal length is the distance from the optical centre to the principal focus.",
      },
      // 18 - INTERACTIVE classify - S6 real vs virtual images
      {
        kind: "classify",
        prompt: "Sort each use of a converging lens by whether it forms a real image or a virtual image.",
        bins: ["Real image", "Virtual image"],
        items: [
          { text: "a camera photographing a distant tree", bin: 0 },
          { text: "a projector showing a slide on a screen", bin: 0 },
          { text: "a photocopier making a same-size copy", bin: 0 },
          { text: "a magnifying glass reading small print", bin: 1 },
          { text: "an eye looking through a magnifier held close", bin: 1 },
          { text: "an image that cannot be caught on a screen", bin: 1 },
        ],
        ask: "A real image forms where the rays actually cross and can be shown on a screen; a virtual image only appears to be there. Tap each case and sort it.",
        hints: [
          "Cameras, projectors and photocopiers form real images on film, a screen or paper.",
          "A magnifying glass forms a virtual image that cannot be caught on a screen.",
        ],
        explain: "Cameras, projectors and photocopiers throw real images onto film, a screen or paper. A magnifying glass forms a virtual image, upright and enlarged, that cannot be shown on a screen.",
      },
      // 19 - INTERACTIVE order - S2 plane mirror construction (conceptual)
      {
        kind: "order",
        prompt: "Put these steps for locating the image in a plane mirror in the correct order.",
        items: [
          "Draw the object in front of the mirror",
          "Mark the image the same distance behind the mirror",
          "Draw dashed virtual rays from the image back to the eye",
          "Draw solid reflected rays from the object to the eye",
          "The eye sees the image where the dashed rays appear to meet",
        ],
        ask: "Start by placing the object, then use the equal-distance rule to find the image, and finish with what the eye sees. Put the steps in order.",
        hints: [
          "The image is always the same distance behind the mirror as the object is in front.",
          "The dashed virtual rays behind the mirror show where the eye thinks the light comes from.",
        ],
        explain: "First draw the object, then mark the image the same distance behind the mirror. Draw the dashed virtual rays from the image and the solid reflected rays to the eye. The eye sees the image where the dashed rays appear to meet.",
      },
      // 20 - INTERACTIVE match - S6 object position to image nature (conceptual)
      {
        kind: "match",
        prompt: "Match each object position for a converging lens to the image it forms.",
        pairs: [
          { left: "Object beyond 2F", right: "real, inverted, diminished" },
          { left: "Object at 2F", right: "real, inverted, same size" },
          { left: "Object between F and 2F", right: "real, inverted, enlarged" },
          { left: "Object between F and the lens", right: "virtual, upright, enlarged" },
        ],
        ask: "As the object moves closer to the lens the image grows. Only when the object is inside F does the image become virtual and upright. Match each position to its image.",
        hints: [
          "Every position outside F gives a real, inverted image; the size grows as the object nears F.",
          "Once the object is inside F the image is virtual, upright and enlarged, like a magnifying glass.",
        ],
        explain: "Beyond 2F the image is real, inverted and diminished; at 2F it is real, inverted and the same size; between F and 2F it is real, inverted and enlarged; and inside F it is virtual, upright and enlarged.",
      },
      // 21 - OPEN - S1 reflection - figure
      {
        kind: "open",
        prompt: "Explain the difference between regular reflection and diffuse reflection, referring to the surfaces involved.",
        figure: "fig-14-02-regular-diffuse",
        modelAnswer: "In regular reflection the surface is smooth, such as a mirror, so parallel rays are reflected as a parallel beam and a clear image is seen. In diffuse reflection the surface is rough, such as paper, so the parallel rays are scattered in many different directions and no clear image forms. In both cases each ray still obeys the law of reflection, with the angle of incidence equal to the angle of reflection.",
        marks: [
          "Regular reflection is off a smooth surface and keeps parallel rays parallel.",
          "Diffuse reflection is off a rough surface and scatters the rays in many directions.",
          "Each ray still obeys the law of reflection in both cases.",
        ],
        ask: "Think about whether each surface is smooth or rough, and what happens to a set of parallel rays that hits it.",
      },
      // 22 - OPEN - S3 refraction and refractive index
      {
        kind: "open",
        prompt: "Explain what refraction is and why light bends when it passes from air into glass. State what a refractive index of 1.5 tells you about the glass.",
        modelAnswer: "Refraction is the bending of light when it crosses from one transparent medium into another and changes speed. Glass is optically denser than air, so the light slows down as it enters, and this change of speed makes the ray bend toward the normal. A refractive index of 1.5 means light travels 1.5 times slower in the glass than in a vacuum, and it also tells you how much the glass bends the light through n = sin i / sin r.",
        marks: [
          "Refraction is the bending of light as it changes speed crossing into a different medium.",
          "Glass is denser, so light slows and bends toward the normal.",
          "A refractive index of 1.5 means light is 1.5 times slower in the glass, and the larger n bends light more.",
        ],
        ask: "Link the bending to a change of speed, say which way the ray bends entering denser glass, and explain what the number 1.5 means.",
      },
      // 23 - OPEN - S4 TIR and optical fibres
      {
        kind: "open",
        prompt: "State the 2 conditions needed for total internal reflection, and explain how it keeps light travelling along an optical fibre.",
        modelAnswer: "Total internal reflection needs 2 conditions: the light must be travelling from a denser medium into a less dense one, and the angle of incidence must be greater than the critical angle. In an optical fibre a core of high refractive index is surrounded by cladding of lower refractive index. Light hits the boundary at an angle greater than the critical angle, so it is totally internally reflected back into the core, and it bounces along the fibre this way with almost no loss.",
        marks: [
          "Condition 1: light goes from a denser medium to a less dense medium.",
          "Condition 2: the angle of incidence is greater than the critical angle.",
          "In a fibre the high-index core reflects light off the lower-index cladding repeatedly, carrying it along with little loss.",
        ],
        ask: "Give both conditions clearly, then describe the core and cladding of a fibre and what happens at their boundary.",
      },
      // 24 - OPEN - S5 converging lens - figure
      {
        kind: "open",
        prompt: "Describe what a converging lens does to rays of light that arrive parallel to its principal axis, and name the point where they meet.",
        figure: "fig-14-16-lens-focal-point",
        modelAnswer: "A converging lens is thicker in the middle, so it refracts the rays inward. Rays that arrive parallel to the principal axis are bent so that they all meet at a single point on the axis called the principal focus F. The distance from the optical centre of the lens to this point is the focal length. A fatter lens has a shorter focal length because it bends the rays more strongly.",
        marks: [
          "A converging lens bends parallel rays inward, so they meet.",
          "They meet at the principal focus F on the principal axis.",
          "The distance from the optical centre to F is the focal length.",
        ],
        ask: "Say which way the lens bends the rays, name the point where they cross, and mention the focal length.",
      },
      // 25 - OPEN - S6 object beyond 2F - figure
      {
        kind: "open",
        prompt: "An object is placed well beyond 2F from a converging lens. Describe the nature of the image formed and give one device that uses this arrangement.",
        figure: "fig-14-18-lens-real-image",
        modelAnswer: "When the object is beyond 2F the converging lens forms a real image, because the rays actually cross and it could be caught on a screen. The image is inverted, meaning turned upside down, and diminished, meaning smaller than the object. It forms between F and 2F on the far side of the lens. A camera uses this arrangement to form a small real image of a distant scene on its film or sensor.",
        marks: [
          "The image is real, so it can be formed on a screen.",
          "It is inverted and diminished (smaller than the object).",
          "A camera is a device that uses an object beyond 2F.",
        ],
        ask: "Decide whether the image is real or virtual, describe its orientation and size, and name a device that works this way.",
      },
    ],
  },
];
