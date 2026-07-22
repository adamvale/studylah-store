// turning-effect-misconceptions.ts
// Topic: O-Level Physics, Turning Effects of Forces (topicKey "t4-turning-effect-of-forces").
// The tutor's diagnostic brain: the classic ways students go wrong on moments,
// the principle of moments, centre of gravity and stability, each with the exact
// re-explanation. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 05 - Turning Effects of Forces.md
// Spoken fields (tell, whyItHappens, reteach, check.question, check.answer) are in
// plain words for reading aloud. On-screen fields (label, belief, microExample) may
// use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const TURNING_EFFECT_MISCONCEPTIONS: Misconception[] = [
  {
    id: "turn-moment-force-only",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    label: "Turning effect depends only on the force",
    belief: "The moment of a force depends only on how big the force is, not on where it is applied.",
    tell: "The student compares only the sizes of the forces and ignores how far each one acts from the pivot.",
    whyItHappens: "A bigger push really does feel stronger, so students judge the turning effect by the force alone and forget that the distance from the pivot matters just as much.",
    reteach: "The turning effect, which we call the moment, depends on two things, the size of the force and how far it acts from the pivot. The moment is the force times the perpendicular distance from the pivot. So a small force acting far from the pivot can beat a big force acting close in. Always look at both the force and its distance before you decide which one turns more.",
    microExample: "5 N at 4 m gives a moment of 20 N m, which beats 8 N at 2 m giving only 16 N m.",
    figure: "fig-05-03-moment-distance.svg",
    check: {
      question: "Does a bigger force always produce a bigger turning effect about a pivot?",
      answer: "No. The moment also depends on the distance from the pivot, so a smaller force acting further out can produce a larger turning effect."
    }
  },
  {
    id: "turn-moment-perp",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    label: "Distance measured along the arm, not perpendicular",
    belief: "The distance in a moment is measured along the arm to the force, even when the force is not perpendicular.",
    tell: "The student uses the length of the arm to where the force acts, instead of the perpendicular distance from the pivot to the line of action of the force.",
    whyItHappens: "In most textbook pictures the force is already at right angles to the arm, so the two distances look the same and students never notice which one they should use.",
    reteach: "The distance in the moment must be the perpendicular distance from the pivot to the line of action of the force. When the force acts at right angles to the arm, that is just the length along the arm, which is why it usually looks the same. But when the force acts at an angle, you must use the perpendicular distance, which is shorter, or the moment comes out too big. If the line of action passes right through the pivot, that distance is zero and there is no turning effect at all.",
    microExample: "A force whose line of action passes through the pivot has d = 0, so its moment is 0 N m however big the force.",
    figure: "fig-05-01-moment-basics.svg",
    check: {
      question: "Which distance goes into the moment of a force, the length along the arm or the perpendicular distance from the pivot to the line of action?",
      answer: "The perpendicular distance from the pivot to the line of action of the force. It only equals the arm length when the force acts at right angles to the arm."
    }
  },
  {
    id: "turn-moment-divide",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    label: "Moment found by dividing or adding force and distance",
    belief: "The moment of a force is the force divided by the distance, or the force added to the distance.",
    tell: "The student combines the force and the distance with the wrong operation, dividing or adding them instead of multiplying.",
    whyItHappens: "Many physics formulas are divisions, like speed, so students reach for a division out of habit instead of remembering that a moment is a product.",
    reteach: "A moment is a product, the force times the perpendicular distance, not a division and not a sum. So ten newtons acting at two metres gives twenty newton metres, because you multiply. Dividing would give five and adding would give twelve, and both are wrong. Whenever you find a moment, multiply the force by the distance.",
    microExample: "10 N at 2 m: moment = 10 x 2 = 20 N m, not 10 / 2 = 5 and not 10 + 2 = 12.",
    figure: null,
    check: {
      question: "How do you combine the force and the perpendicular distance to get a moment?",
      answer: "You multiply them. The moment is the force times the perpendicular distance, not the force divided by the distance."
    }
  },
  {
    id: "turn-moment-unit",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    label: "Wrong unit given for a moment",
    belief: "The unit of a moment is the newton, or the newton per metre.",
    tell: "The student writes the moment in newtons, or in newtons per metre, instead of newton metres.",
    whyItHappens: "A moment sits close to force in students' minds, so they keep the newton, and the newtons per metre unit looks familiar from other formulas, so it gets borrowed by mistake.",
    reteach: "A moment is a force times a distance, so its unit is a newton times a metre, which we write and say as the newton metre. It is not just a newton, because a distance has been multiplied in, and it is not newtons per metre, because nothing was divided. So the answer to a moment always carries the unit newton metre.",
    microExample: "M = 10 N x 4 m = 40 N m (newton metres), not 40 N and not 40 N/m.",
    figure: null,
    check: {
      question: "What is the unit of the moment of a force?",
      answer: "The newton metre. It comes from multiplying a force in newtons by a distance in metres."
    }
  },
  {
    id: "turn-moment-closer",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    label: "Force nearer the pivot gives a bigger moment",
    belief: "Applying a force closer to the pivot produces a larger turning effect.",
    tell: "The student chooses the shortest distance from the pivot as the way to get the biggest moment, which is the wrong way round.",
    whyItHappens: "Being close to the action feels powerful, so students expect a force near the pivot to be more effective, which reverses the real rule.",
    reteach: "For a fixed force, the moment gets bigger as the distance from the pivot gets bigger, not smaller. That is why a longer spanner loosens a stiff nut more easily, and why you push a door at the edge far from the hinge. So to increase the turning effect, move the force further from the pivot, not closer to it.",
    microExample: "Same 10 N: at 8 m the moment is 80 N m, but at 4 m it is only 40 N m, so further out turns more.",
    figure: "fig-05-03-moment-distance.svg",
    check: {
      question: "To get a bigger turning effect from the same force, should you apply it closer to the pivot or further away?",
      answer: "Further away. A larger perpendicular distance gives a larger moment for the same force."
    }
  },
  {
    id: "turn-unit-cm",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    label: "Centimetres used without converting to metres",
    belief: "You can put a distance in centimetres straight into the moment without changing it to metres.",
    tell: "The student substitutes a distance in centimetres into the moment and never converts it to metres first.",
    whyItHappens: "The distance is given in centimetres right there in the question, so it feels natural to use that number as it is and skip the conversion step.",
    reteach: "The moment expects the distance in metres, so change any centimetres into metres before you multiply. To do that, divide the number of centimetres by one hundred. For example, two hundred and fifty centimetres is two point five metres. Convert first, then use it with the force, and the moment comes out in newton metres as it should.",
    microExample: "Spanner of 250 cm = 2.50 m: F = 150 / 2.50 = 60 N, not 150 / 250 = 0.6 N.",
    figure: null,
    check: {
      question: "Before working out a moment, what should you do with a distance that is given in centimetres?",
      answer: "Change it into metres first by dividing by one hundred. For example, forty centimetres becomes zero point four metres."
    }
  },
  {
    id: "turn-pom-equal-force",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    label: "Balance means the two forces are equal",
    belief: "A pivoted beam balances when the forces on each side are equal, whatever their distances from the pivot.",
    tell: "The student sets the two forces equal to each other and ignores the distances when deciding whether a beam balances.",
    whyItHappens: "A see-saw with two equal children at equal distances does balance, and students remember the equal part but forget that the distances were equal too.",
    reteach: "A beam balances when the moments are equal, not when the forces are equal. The moment on each side is the force times its distance from the pivot. So a small weight far out can balance a big weight close in. To check for balance, compare force times distance on each side, not the forces on their own.",
    microExample: "30 N at 0.40 m balances 60 N at 0.20 m, because 30 x 0.40 = 60 x 0.20 = 12 N m, even though the forces differ.",
    figure: "fig-05-07-seesaw-balance.svg",
    check: {
      question: "Does a see-saw balance only when the two weights are equal?",
      answer: "No. It balances when the moments are equal. A smaller weight further from the pivot can balance a larger weight closer in."
    }
  },
  {
    id: "turn-pom-swap",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    label: "Each force paired with the wrong distance",
    belief: "When applying the principle of moments, it does not matter which distance you multiply with which force.",
    tell: "The student multiplies a force by the distance belonging to the other side, so the moments are paired up the wrong way.",
    whyItHappens: "With several numbers in the question, students grab a force and a distance without checking that the two belong to the same side of the pivot.",
    reteach: "Each moment must use the force and the distance that belong together, on the same side of the pivot. So on the anticlockwise side, multiply that side's force by that side's distance, and do the same on the clockwise side, then set the two totals equal. Mixing a force from one side with a distance from the other gives a moment that does not really exist.",
    microExample: "30 N at 0.40 m balances W at 0.20 m: use 30 x 0.40 = W x 0.20, giving W = 60 N, not W = 15 N from swapping the distances.",
    figure: "fig-05-07-seesaw-balance.svg",
    check: {
      question: "When you use the principle of moments, which distance do you multiply each force by?",
      answer: "The distance of that same force from the pivot. Each moment uses the force and the distance that belong to the same side."
    }
  },
  {
    id: "turn-pom-missing",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    label: "Only some of the moments counted",
    belief: "When several forces act, you only need to include one moment on each side.",
    tell: "The student adds up only some of the forces on a side and leaves out one of the moments that is acting.",
    whyItHappens: "It is easy to spot the biggest or the first force and stop there, forgetting that every force with a distance from the pivot adds its own moment.",
    reteach: "Every force that acts at a distance from the pivot produces its own moment, and on each side you must add all of them. So if two forces act on the anticlockwise side, work out both moments and add them before you compare with the clockwise side. Leaving one out makes that side's total too small and gives the wrong answer.",
    microExample: "Anticlockwise side: (20 x 0.30) + (12 x 0.20) = 6.0 + 2.4 = 8.4 N m, counting both, not just 6.0.",
    figure: "fig-05-18-uniform-beam-multi.svg",
    check: {
      question: "Two forces act on the same side of a pivot. How many of their moments do you include?",
      answer: "Both of them. Every force acting at a distance from the pivot adds its own moment, so you add all the moments on that side."
    }
  },
  {
    id: "turn-mass-weight",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    label: "Mass in kilograms used as the force",
    belief: "A mass in kilograms can be put straight into a moment as if it were the force.",
    tell: "The student uses the mass number in kilograms in place of the weight, and never multiplies by the gravitational field strength.",
    whyItHappens: "Mass and weight are muddled in everyday talk, and the question often gives a mass in kilograms, so students use it directly instead of first turning it into a weight.",
    reteach: "A moment needs a force in newtons, so a mass must first be turned into a weight. Weight equals mass times the gravitational field strength, which is about ten newtons per kilogram. So a two kilogram mass has a weight of about twenty newtons, and it is that twenty newtons you put into the moment, not the two.",
    microExample: "2.5 kg load: weight = 2.5 x 10 = 25 N, so use 25 N in the moment, not 2.5.",
    figure: "fig-05-24-metre-rule-spring.svg",
    check: {
      question: "A load is given as a mass in kilograms. What must you do before using it in a moment?",
      answer: "Turn it into a weight in newtons by multiplying the mass by about ten newtons per kilogram, then use that weight in the moment."
    }
  },
  {
    id: "turn-forget-beam-weight",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    label: "Weight of the beam itself left out",
    belief: "When taking moments, the weight of a uniform beam or plank can be ignored.",
    tell: "The student includes only the hanging loads and forgets the weight of the beam acting at its centre.",
    whyItHappens: "The beam is the thing doing the balancing, so students think of it as just the stage and forget that it has its own weight pulling down at its middle.",
    reteach: "A uniform beam has weight, and that weight acts at its centre of gravity, the middle of the beam. So when you take moments, include the beam's own weight as a force acting down at its centre, alongside any hanging loads. Leaving it out makes the support forces or the balancing weight come out too small.",
    microExample: "Plank weight 300 N acts at its centre 1.5 m from P, so its moment 300 x 1.5 = 450 N m must be counted.",
    figure: "fig-05-19-plank-two-strings.svg",
    check: {
      question: "When taking moments on a uniform plank, where does the plank's own weight act, and can you ignore it?",
      answer: "It acts at the centre of the plank, and you cannot ignore it. Its moment must be included with the other forces."
    }
  },
  {
    id: "turn-equilibrium-one-condition",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "equilibrium",
    label: "Equilibrium needs only one condition",
    belief: "An object is in equilibrium as long as the moments balance, even if the forces do not.",
    tell: "The student checks only that the moments cancel, and never checks that the upward and downward forces are equal, or the other way round.",
    whyItHappens: "This topic is all about moments, so students focus on the turning condition and forget that a body also must not be pushed off in a straight line.",
    reteach: "Full equilibrium needs two conditions together. First, there is no resultant force, so the upward forces balance the downward forces and the body does not move off. Second, there is no resultant moment, so the clockwise moments balance the anticlockwise moments and the body does not spin. Both must hold at once, so balanced moments on their own are not enough.",
    microExample: "Balanced moments but total up not equal to total down: the object still accelerates, so it is not in equilibrium.",
    figure: "fig-05-08-two-conditions.svg",
    check: {
      question: "Is an object in equilibrium if its moments balance but the upward and downward forces do not?",
      answer: "No. Equilibrium needs both, no resultant force and no resultant moment. Balanced moments on their own are not enough."
    }
  },
  {
    id: "turn-support-equal-share",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "equilibrium",
    label: "Two supports always share the load equally",
    belief: "When a beam rests on two supports, each support carries half of the total weight.",
    tell: "The student splits the total load equally between the two supports instead of using moments to find each one.",
    whyItHappens: "Equal sharing feels fair, and it is correct only when the load sits exactly in the middle, so students treat it as a general rule.",
    reteach: "Two supports share the load equally only when the weight is right in the middle between them. Otherwise the nearer support carries more. To find each support force, take moments about one support to get the other, then use that the two support forces add up to the total downward weight. Do not just halve the load.",
    microExample: "240 N beam plus 300 N load off centre: the supports come out 370 N and 170 N, not 270 N each.",
    figure: "fig-05-25-two-loads-beam.svg",
    check: {
      question: "A beam on two supports carries a load that is not in the middle. Do the two supports carry equal shares?",
      answer: "No. The support nearer the load carries more. You find each one using moments, not by halving the total."
    }
  },
  {
    id: "turn-cg-inside",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    label: "Centre of gravity must be inside the material",
    belief: "The centre of gravity always lies within the solid material of an object.",
    tell: "The student refuses to place the centre of gravity in a hole or gap, and moves it onto the material.",
    whyItHappens: "For simple solid shapes the centre of gravity really is inside the material, so students assume it can never sit in empty space.",
    reteach: "The centre of gravity is the point where all the weight can be taken to act, and for a hollow or irregular object that point can lie in empty space, outside the material. A ring is the clearest case, its centre of gravity is at the empty middle, where there is no metal at all. So the centre of gravity does not have to be on the material itself.",
    microExample: "A ring has its centre of gravity at its hollow middle, where there is no material.",
    figure: "fig-05-09-cg-regular.svg",
    check: {
      question: "Can the centre of gravity of an object lie outside its material, in empty space?",
      answer: "Yes. For a hollow or irregular object it can. A ring has its centre of gravity at its empty centre."
    }
  },
  {
    id: "turn-cg-centre-irregular",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    label: "Centre of gravity always at the geometric middle",
    belief: "Every object has its centre of gravity at its geometric centre, even an irregular one.",
    tell: "The student marks the centre of gravity of an odd shape at the middle of its outline instead of finding it by experiment.",
    whyItHappens: "For regular uniform shapes the centre of gravity is at the geometric centre, and students carry that rule over to shapes where it does not hold.",
    reteach: "The centre of gravity sits at the geometric centre only for a regular shape made of uniform material. For an irregular lamina you cannot just guess the middle, you find it by experiment. Hang it from two different points and use a plumb line to draw a vertical line each time. Where the two lines cross is the centre of gravity.",
    microExample: "Irregular lamina: hang from two holes, draw two plumb lines, and the centre of gravity is where they cross, not at the middle of the outline.",
    figure: "fig-05-12-plumb-experiment.svg",
    check: {
      question: "How do you find the centre of gravity of an irregular flat lamina?",
      answer: "Hang it freely from two different points, draw the vertical plumb line each time, and the centre of gravity is where the two lines cross."
    }
  },
  {
    id: "turn-cg-suspended",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    label: "Hanging object rests with its centre of gravity up or level",
    belief: "A freely hanging object settles with its centre of gravity level with, or above, the point of suspension.",
    tell: "The student expects a suspended object to rest in any position, or with its centre of gravity above the pivot.",
    whyItHappens: "Students do not connect the resting position to moments, so they do not see why the centre of gravity has to end up directly below the pivot.",
    reteach: "A freely hanging object always settles with its centre of gravity directly below the point of suspension. If the centre of gravity is off to one side, its weight has a perpendicular distance from the pivot, so it produces a moment that swings the object round. The turning only stops when the centre of gravity hangs straight below the pivot, where that distance, and so the moment, is zero.",
    microExample: "Displaced lamina: the weight has a distance d from the pivot, so it turns back until the centre of gravity is directly below the pivot.",
    figure: "fig-05-10-cg-suspended.svg",
    check: {
      question: "Where does the centre of gravity settle when an object hangs freely from a pivot?",
      answer: "Directly below the point of suspension. There its weight has no moment about the pivot, so the object stops turning."
    }
  },
  {
    id: "turn-cg-weight-spread",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    label: "Weight spread out rather than acting at a point",
    belief: "An object's weight is spread all over it, or acts at its base, not at a single point.",
    tell: "The student will not treat the weight as a single force at the centre of gravity when taking moments.",
    whyItHappens: "Weight really is shared among all the parts of an object, so the idea that it can be replaced by one force at one point feels like a trick.",
    reteach: "For working out moments, the whole weight of an object can be taken to act at a single point, its centre of gravity. That is what the centre of gravity is for. So instead of many small pulls, you draw one weight force acting down at the centre of gravity, and use that in your moments. It makes the object behave as though all its weight were at that one point.",
    microExample: "A uniform beam's whole weight is drawn as one downward force at its centre, not spread along its length.",
    figure: "fig-05-06-principle-moments.svg",
    check: {
      question: "When taking moments, how do you treat the weight of an object?",
      answer: "As a single downward force acting at its centre of gravity, rather than as weight spread all over the object."
    }
  },
  {
    id: "turn-stability-cg-high",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    label: "A higher centre of gravity is more stable",
    belief: "Raising the centre of gravity makes an object more stable.",
    tell: "The student says a tall object with a high centre of gravity is harder to topple, which is the wrong way round.",
    whyItHappens: "Tall things can look impressive and solid, so students link height with steadiness and miss that a high centre of gravity topples more easily.",
    reteach: "A lower centre of gravity makes an object more stable, not a higher one. When the centre of gravity is low, the object can tilt further before its weight line passes the edge of the base, so it is harder to topple. That is why racing cars are built low, and why adding water to the base of a tall bottle, which lowers the centre of gravity, makes it steadier.",
    microExample: "Adding water to the base of a tall bottle lowers its centre of gravity, so it becomes harder to topple.",
    figure: "fig-05-13-stability-cg.svg",
    check: {
      question: "Does lowering or raising the centre of gravity make an object more stable?",
      answer: "Lowering it. A lower centre of gravity lets the object tilt further before it topples, so it is more stable."
    }
  },
  {
    id: "turn-stability-base-narrow",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    label: "A narrower base is more stable",
    belief: "A smaller base area makes an object more stable.",
    tell: "The student chooses the object with the narrowest base as the steadiest one, which is the wrong way round.",
    whyItHappens: "Students sometimes picture a narrow base as neat and planted, and do not connect a wide base with being harder to tip over.",
    reteach: "A wider base area makes an object more stable, not a narrower one. With a broad base the object can be tilted further before the vertical line through its centre of gravity passes the edge, so it is harder to topple. That is why a shoe with a broad heel is steadier than one with a thin heel, and why wide feet are put on lamps and stands.",
    microExample: "A broad-heeled shoe has a larger base area, so it is more stable than a thin-heeled one.",
    figure: "fig-05-14-stability-base.svg",
    check: {
      question: "Does a wider or a narrower base make an object more stable?",
      answer: "A wider base. It lets the object tilt further before the weight line passes the edge, so it is harder to topple."
    }
  },
  {
    id: "turn-stability-heavier",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    label: "Just being heavier makes an object more stable",
    belief: "Adding weight anywhere always makes an object more stable.",
    tell: "The student credits the extra weight itself for the steadiness, rather than the lowered centre of gravity.",
    whyItHappens: "Heavy things feel hard to push over, so students think the weight alone is what matters and overlook where that weight is placed.",
    reteach: "Extra weight only makes an object more stable if it lowers the centre of gravity, which usually means adding it low down. Sand poured into the base of a bottle helps because it lowers the centre of gravity, not simply because it is heavier. The same weight added high up would raise the centre of gravity and make the object easier to topple. So it is where the weight goes that counts, not just how much you add.",
    microExample: "Sand added to the base of a bottle helps because it lowers the centre of gravity, not just because it adds weight.",
    figure: "fig-05-13-stability-cg.svg",
    check: {
      question: "Adding sand to the bottom of a tall bottle makes it steadier. Is it the extra weight alone that does this?",
      answer: "No. It works because the sand is low down and lowers the centre of gravity. The same weight added high up would make the bottle easier to topple."
    }
  },
  {
    id: "turn-stability-tilt-reversed",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    label: "Line of weight inside the base means it topples",
    belief: "A tilted object topples when the vertical line through its centre of gravity still falls inside the base.",
    tell: "The student says an object topples while the weight line is inside the base, and stays up once it passes the edge, which is the wrong way round.",
    whyItHappens: "The rule about the weight line and the base is easy to remember backwards, so students swap which case topples and which one returns.",
    reteach: "When an object is tilted, look at where the vertical line through its centre of gravity falls. If that line stays inside the base, the weight turns the object back and it returns upright, so it is stable. If the line falls outside the base, the weight turns the object further over and it topples. So a line inside the base means it comes back, not that it topples.",
    microExample: "Weight line inside the base: the object returns upright. Weight line outside the base: it topples over.",
    figure: "fig-05-15-stability-tilt.svg",
    check: {
      question: "A tilted object has the vertical line through its centre of gravity falling inside its base. Does it topple or return upright?",
      answer: "It returns upright. The weight produces a moment that turns it back. It only topples when that line falls outside the base."
    }
  }
];
