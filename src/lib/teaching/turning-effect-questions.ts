// turning-effect-questions.ts
// Teaching question bank for O-Level Physics, Turning Effects of Forces
// (topicKey "t4-turning-effect-of-forces"). Every wrong option maps to the
// misconception it reveals (see turning-effect-misconceptions.ts), so the tutor
// can respond to exactly why the student erred. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 05 - Turning Effects of Forces.md
// walkthrough and explain are spoken by Gugu, so they are in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const TURNING_EFFECT_QUESTIONS: TeachQuestion[] = [
  {
    id: "turn-q-01",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    stem: "Which expression correctly gives the moment of a force about a pivot?",
    figure: "fig-05-01-moment-basics.svg",
    options: [
      "Force x perpendicular distance from the pivot",
      "Force / perpendicular distance from the pivot",
      "Force + perpendicular distance from the pivot",
      "The size of the force on its own"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-moment-divide", 2: "turn-moment-divide", 3: "turn-moment-force-only" },
    walkthrough: [
      "The moment measures the turning effect of a force about a pivot.",
      "It depends on two things, the force and its perpendicular distance from the pivot.",
      "You combine them by multiplying, so the moment is force times perpendicular distance.",
      "Dividing, adding, or using the force on its own all leave out how multiplying works here."
    ],
    explain: "The moment of a force is the force multiplied by the perpendicular distance from the pivot to the line of action of the force. It is a product, so dividing or adding the two quantities is wrong, and using the force on its own ignores the distance, which matters just as much as the force."
  },
  {
    id: "turn-q-02",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    stem: "What is the SI unit of the moment of a force?",
    figure: null,
    options: ["N", "N/m", "N m", "N/kg"],
    correct: 2,
    distractorMisconceptions: { 0: "turn-moment-unit", 1: "turn-moment-unit", 3: "turn-moment-unit" },
    walkthrough: [
      "A moment is a force times a distance.",
      "The force is in newtons and the distance is in metres.",
      "Multiplying the two units gives newtons times metres, the newton metre.",
      "It is not just a newton, and it is not newtons per metre, because nothing was divided."
    ],
    explain: "Since a moment is a force in newtons multiplied by a distance in metres, its unit is the newton metre. A plain newton would be just a force, newtons per metre would mean a division that never happened, and newtons per kilogram is the unit of gravitational field strength, not of a moment."
  },
  {
    id: "turn-q-03",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    stem: "Which change would increase the moment produced by a force about a pivot?",
    figure: "fig-05-03-moment-distance.svg",
    options: [
      "Apply the force at a larger perpendicular distance from the pivot",
      "Apply the force at a smaller perpendicular distance from the pivot",
      "Apply the force so its line of action passes through the pivot",
      "Make no change, since only the size of the force matters"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-moment-closer", 2: "turn-moment-perp", 3: "turn-moment-force-only" },
    walkthrough: [
      "The moment is the force times the perpendicular distance from the pivot.",
      "For a fixed force, a larger distance makes a larger moment.",
      "Moving the force closer would make the moment smaller, not larger.",
      "A force whose line passes through the pivot has zero distance, so it makes no moment at all."
    ],
    explain: "For the same force, increasing the perpendicular distance from the pivot increases the moment, which is why a longer spanner turns a nut more easily. Moving the force closer reduces the moment, a line of action through the pivot gives zero distance and no turning effect, and the distance always matters, so it is not just the size of the force."
  },
  {
    id: "turn-q-04",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    stem: "A force of 10 N acts at a perpendicular distance of 8 m from a pivot. What is the moment of the force about the pivot?",
    figure: "fig-05-01-moment-basics.svg",
    options: ["1.25 N m", "80 N m", "18 N m", "0.8 N m"],
    correct: 1,
    distractorMisconceptions: { 0: "turn-moment-divide", 2: "turn-moment-divide", 3: "turn-moment-divide" },
    walkthrough: [
      "The moment is the force times the perpendicular distance.",
      "The force is ten newtons and the distance is eight metres.",
      "Multiply them, ten times eight, which is eighty.",
      "So the moment is eighty newton metres."
    ],
    explain: "The moment is force times perpendicular distance, so ten newtons times eight metres is eighty newton metres. Dividing gives one point two five or zero point eight, and adding gives eighteen, but all of those use the wrong operation. A moment is always a product."
  },
  {
    id: "turn-q-05",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    stem: "A spanner of length 250 cm produces a moment of 150 N m on a bolt. What force is applied at the end of the spanner?",
    figure: null,
    options: ["60 N", "0.6 N", "375 N", "150 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-unit-cm", 2: "turn-moment-divide", 3: "turn-moment-force-only" },
    walkthrough: [
      "First change the length into metres, because moments use metres.",
      "Two hundred and fifty centimetres is two point five metres.",
      "The moment is force times distance, so the force is the moment divided by the distance.",
      "That is one hundred and fifty divided by two point five, which is sixty newtons."
    ],
    explain: "Convert the length first, two hundred and fifty centimetres is two point five metres, then divide the moment by the distance to get sixty newtons. Using the centimetres directly gives zero point six, multiplying instead of dividing gives three hundred and seventy five, and reading the force as the moment value gives one hundred and fifty, which ignores the distance."
  },
  {
    id: "turn-q-06",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "moment-of-a-force",
    stem: "A door needs a moment of 36 N m to open. A person pushes with a force of 30 N. How far from the hinge must the push be applied?",
    figure: "fig-05-05-door-hinge.svg",
    options: ["1.2 m", "0.83 m", "1080 m", "6 m"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-moment-divide", 2: "turn-moment-divide", 3: "turn-moment-divide" },
    walkthrough: [
      "The moment is the force times the distance from the hinge.",
      "So the distance is the moment divided by the force.",
      "That is thirty six divided by thirty.",
      "Thirty six divided by thirty is one point two metres."
    ],
    explain: "Rearranging the moment, the distance is the moment divided by the force, so thirty six divided by thirty is one point two metres. Dividing the wrong way round gives zero point eight three, multiplying gives one thousand and eighty, and subtracting gives six, all of which use the wrong operation for a moment."
  },
  {
    id: "turn-q-07",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A beam balances about a pivot. On the anticlockwise side a 20 N force acts 0.30 m from the pivot and a 12 N force acts 0.20 m from the pivot. A single weight W on the clockwise side acts 0.10 m from the pivot. What is W?",
    figure: "fig-05-18-uniform-beam-multi.svg",
    options: ["84 N", "60 N", "32 N", "8.4 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-pom-missing", 2: "turn-moment-force-only", 3: "turn-moment-force-only" },
    walkthrough: [
      "Add up both anticlockwise moments first.",
      "Twenty times zero point three is six, and twelve times zero point two is two point four.",
      "Together that is eight point four newton metres on the anticlockwise side.",
      "Set that equal to W times zero point one, so W is eight point four divided by zero point one.",
      "That gives eighty four newtons."
    ],
    explain: "Both forces on the anticlockwise side make a moment, so add them, six plus two point four gives eight point four newton metres. Then W times zero point one equals eight point four, so W is eighty four newtons. Counting only the first force gives sixty, and treating the added forces or the total moment as the weight ignores the distances."
  },
  {
    id: "turn-q-08",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A see-saw balances with a child on each side. Which statement must be true?",
    figure: "fig-05-07-seesaw-balance.svg",
    options: [
      "The moment on each side about the pivot is the same.",
      "The two children have equal weights.",
      "The heavier child sits further from the pivot than the lighter child.",
      "The turning effect does not depend on where they sit."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-pom-equal-force", 2: "turn-pom-swap", 3: "turn-moment-force-only" },
    walkthrough: [
      "A see-saw balances when the moments on the two sides are equal.",
      "The moment on each side is the child's weight times the distance from the pivot.",
      "The children do not need equal weights, a lighter child can sit further out.",
      "In fact the heavier child sits closer to the pivot, not further away."
    ],
    explain: "Balance means the moments match, so the weight times distance is the same on each side. The children need not weigh the same, and the heavier child actually sits closer to the pivot so that its larger weight is matched by a smaller distance. The position always matters, so the turning effect certainly depends on where they sit."
  },
  {
    id: "turn-q-09",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A force of 30 N acts 0.40 m from the pivot of a beam. What weight W must hang 0.20 m from the pivot on the other side to balance the beam?",
    figure: "fig-05-07-seesaw-balance.svg",
    options: ["15 N", "30 N", "60 N", "2.4 N"],
    correct: 2,
    distractorMisconceptions: { 0: "turn-pom-swap", 1: "turn-pom-equal-force", 3: "turn-moment-divide" },
    walkthrough: [
      "For balance the anticlockwise moment equals the clockwise moment.",
      "The known moment is thirty times zero point four, which is twelve newton metres.",
      "Set that equal to W times zero point two.",
      "So W is twelve divided by zero point two, which is sixty newtons."
    ],
    explain: "The known side gives thirty times zero point four, which is twelve newton metres, and that equals W times zero point two, so W is sixty newtons. Swapping the distances gives fifteen, assuming equal forces gives thirty, and multiplying instead of dividing gives two point four, so only sixty balances the moments correctly."
  },
  {
    id: "turn-q-10",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A barrier balances about a pivot. A load of 400 N acts 1.50 m from the pivot. A counterweight acts 0.40 m from the pivot on the other side. What force P does the counterweight provide?",
    figure: "fig-05-16-barrier.svg",
    options: ["1500 N", "106.7 N", "160 N", "600 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-pom-swap", 2: "turn-pom-swap", 3: "turn-moment-force-only" },
    walkthrough: [
      "For balance the two moments about the pivot are equal.",
      "The load makes a moment of four hundred times one point five, which is six hundred newton metres.",
      "Set that equal to P times zero point four.",
      "So P is six hundred divided by zero point four, which is one thousand five hundred newtons."
    ],
    explain: "The load's moment is four hundred times one point five, which is six hundred newton metres, and that equals P times zero point four, so P is one thousand five hundred newtons. Pairing the load with the counterweight's distance gives one hundred and six or one hundred and sixty, and reading the moment as the force gives six hundred, none of which balance the barrier."
  },
  {
    id: "turn-q-11",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A uniform board of negligible weight is hinged at M. A vertical string at N, which is 2.5 m from M, holds it up. A load of 500 N hangs at the far end, 6.0 m from M. What is the tension T in the string?",
    figure: "fig-05-17-hinged-board.svg",
    options: ["1200 N", "208 N", "3000 N", "500 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-pom-swap", 2: "turn-moment-force-only", 3: "turn-pom-equal-force" },
    walkthrough: [
      "Take moments about the hinge at M, so the hinge force has no moment.",
      "The load makes a moment of five hundred times six, which is three thousand newton metres.",
      "The string makes a moment of T times two point five.",
      "Set them equal, so T is three thousand divided by two point five, which is one thousand two hundred newtons."
    ],
    explain: "Taking moments about the hinge, the load gives five hundred times six, which is three thousand newton metres, and that equals T times two point five, so T is one thousand two hundred newtons. Swapping the distances gives two hundred and eight, reading the moment as the tension gives three thousand, and assuming the tension equals the load gives five hundred."
  },
  {
    id: "turn-q-12",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A uniform plank of weight 300 N hangs from two vertical strings, P and Q. Taking moments about P: string Q is 3.0 m from P, the plank's weight acts at its centre 1.5 m from P, and a 60 N load acts 2.0 m from P. What is the tension in string Q?",
    figure: "fig-05-19-plank-two-strings.svg",
    options: ["190 N", "40 N", "150 N", "180 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-forget-beam-weight", 2: "turn-pom-missing", 3: "turn-support-equal-share" },
    walkthrough: [
      "Take moments about P, so the tension in P has no moment.",
      "The plank's weight gives three hundred times one point five, which is four hundred and fifty newton metres.",
      "The load gives sixty times two, which is one hundred and twenty newton metres.",
      "Add them to get five hundred and seventy, and set that equal to the tension in Q times three.",
      "So the tension in Q is five hundred and seventy divided by three, which is one hundred and ninety newtons."
    ],
    explain: "Taking moments about P, count both the plank's own weight, four hundred and fifty newton metres, and the load, one hundred and twenty newton metres, giving five hundred and seventy in total. Dividing by three metres gives one hundred and ninety newtons. Forgetting the plank's weight gives forty, forgetting the load gives one hundred and fifty, and simply halving the total downward force gives one hundred and eighty."
  },
  {
    id: "turn-q-13",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "equilibrium",
    stem: "For a body to be in equilibrium, which conditions must both hold?",
    figure: "fig-05-08-two-conditions.svg",
    options: [
      "There is no resultant moment, even if a resultant force acts.",
      "There is no resultant force and no resultant moment.",
      "The upward and downward forces balance, and nothing else is needed.",
      "The clockwise and anticlockwise moments balance, and nothing else is needed."
    ],
    correct: 1,
    distractorMisconceptions: { 0: "turn-equilibrium-one-condition", 2: "turn-equilibrium-one-condition", 3: "turn-equilibrium-one-condition" },
    walkthrough: [
      "Equilibrium means the body neither moves off nor spins.",
      "For no moving off, there must be no resultant force, so the forces balance.",
      "For no spinning, there must be no resultant moment, so the moments balance.",
      "Both conditions have to hold together, not just one of them."
    ],
    explain: "A body is in equilibrium only when there is no resultant force and no resultant moment at the same time. Balanced forces alone still allow it to spin, and balanced moments alone still allow it to be pushed off in a straight line, so either condition on its own is not enough."
  },
  {
    id: "turn-q-14",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "equilibrium",
    stem: "A uniform beam of weight 240 N rests on two supports X and Y that are 3.0 m apart. The beam's weight acts 1.5 m from X, and a 300 N load acts 0.5 m from X. What is the upward force at support X?",
    figure: null,
    options: ["370 N", "270 N", "250 N", "510 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-support-equal-share", 2: "turn-forget-beam-weight", 3: "turn-moment-force-only" },
    walkthrough: [
      "First take moments about X to find the force at Y.",
      "The beam gives two hundred and forty times one point five, which is three hundred and sixty newton metres.",
      "The load gives three hundred times zero point five, which is one hundred and fifty newton metres.",
      "Add them to get five hundred and ten, and divide by three to get one hundred and seventy newtons at Y.",
      "The two supports carry the total down, five hundred and forty, so X is five hundred and forty take away one hundred and seventy, which is three hundred and seventy newtons."
    ],
    explain: "Taking moments about X, the beam and load give three hundred and sixty plus one hundred and fifty, which is five hundred and ten newton metres, so Y carries one hundred and seventy newtons. The total downward weight is five hundred and forty newtons, so X carries three hundred and seventy. Halving the load gives two hundred and seventy, ignoring the beam's weight gives two hundred and fifty, and reading the moment as a force gives five hundred and ten."
  },
  {
    id: "turn-q-15",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A uniform metre rule is pivoted at its centre. A mass of 2.5 kg hangs 0.30 m from the pivot. A load L hangs 0.25 m from the pivot on the other side to keep the rule level. Taking g as 10 N/kg, what is the weight of L?",
    figure: "fig-05-24-metre-rule-spring.svg",
    options: ["30 N", "3.0 N", "25 N", "7.5 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-mass-weight", 2: "turn-pom-equal-force", 3: "turn-moment-force-only" },
    walkthrough: [
      "First turn the mass into a weight, two point five kilograms times ten is twenty five newtons.",
      "That weight makes a moment of twenty five times zero point three, which is seven point five newton metres.",
      "Set that equal to L times zero point two five.",
      "So L is seven point five divided by zero point two five, which is thirty newtons."
    ],
    explain: "Change the mass to a weight first, two point five kilograms is twenty five newtons, then its moment is seven point five newton metres, and L is that divided by zero point two five, which is thirty newtons. Using the mass of two point five directly gives three, assuming L equals the other weight gives twenty five, and reading the moment as the load gives seven point five."
  },
  {
    id: "turn-q-16",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "principle-of-moments",
    stem: "A metre rule is pivoted at one end. A block of weight 80 N hangs 75 cm from the pivot. A spring balance attached 100 cm from the pivot holds the rule horizontal. What does the spring balance read?",
    figure: "fig-05-24-metre-rule-spring.svg",
    options: ["60 N", "80 N", "106.7 N", "6000 N"],
    correct: 0,
    distractorMisconceptions: { 1: "turn-pom-equal-force", 2: "turn-pom-swap", 3: "turn-moment-force-only" },
    walkthrough: [
      "The block and the spring balance turn the rule opposite ways about the pivot.",
      "The block makes a moment of eighty times seventy five, which is six thousand in centimetre units.",
      "The spring makes a moment of its reading times one hundred.",
      "Set them equal, so the reading is six thousand divided by one hundred, which is sixty newtons."
    ],
    explain: "For balance, the block's moment equals the spring's moment, so eighty times seventy five equals the reading times one hundred, giving sixty newtons once you divide. Assuming the reading equals the block gives eighty, pairing the block with the spring's distance gives one hundred and six, and reading the moment as the force gives six thousand."
  },
  {
    id: "turn-q-17",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    stem: "What is meant by the centre of gravity of an object?",
    figure: "fig-05-06-principle-moments.svg",
    options: [
      "The single point at which the whole weight of the object may be taken to act.",
      "The point at the exact geometric middle of any object.",
      "A point that must always lie on the material of the object.",
      "The point where the weight is spread evenly across the object."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-cg-centre-irregular", 2: "turn-cg-inside", 3: "turn-cg-weight-spread" },
    walkthrough: [
      "The centre of gravity is a single point that stands in for the whole weight.",
      "At that point the entire weight of the object can be taken to act.",
      "For an irregular object it is not simply the geometric middle.",
      "It can even lie in empty space, so it need not be on the material."
    ],
    explain: "The centre of gravity is the one point at which the whole weight of an object may be taken to act. It is at the geometric centre only for a regular uniform shape, it can lie outside the material for a hollow or irregular object, and its whole purpose is to replace the spread out weight with a single force at one point."
  },
  {
    id: "turn-q-18",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    stem: "Where is the centre of gravity of a uniform circular ring?",
    figure: "fig-05-09-cg-regular.svg",
    options: [
      "On the metal of the ring itself.",
      "Spread evenly all around the ring.",
      "At the empty centre of the ring, where there is no material.",
      "At the top of the ring."
    ],
    correct: 2,
    distractorMisconceptions: { 0: "turn-cg-inside", 1: "turn-cg-weight-spread", 3: "turn-cg-inside" },
    walkthrough: [
      "The centre of gravity is the point where the whole weight can be taken to act.",
      "For a ring, that point is right at the middle of the circle.",
      "The middle of a ring is empty, with no metal there.",
      "So the centre of gravity lies in empty space, at the hollow centre."
    ],
    explain: "The centre of gravity of a uniform ring is at its geometric centre, which is the empty middle where there is no material at all. This shows that the centre of gravity need not lie on the object, and that the weight is treated as acting at that single point rather than being spread around the ring."
  },
  {
    id: "turn-q-19",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    stem: "A lamina hangs freely from a pin and is allowed to settle. Where does its centre of gravity come to rest?",
    figure: "fig-05-10-cg-suspended.svg",
    options: [
      "Vertically below the pin.",
      "Vertically above the pin.",
      "Level with the pin, off to one side.",
      "Wherever it happens to stop, since any position rests equally."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-cg-suspended", 2: "turn-cg-suspended", 3: "turn-cg-suspended" },
    walkthrough: [
      "If the centre of gravity is off to one side, its weight has a distance from the pin.",
      "That distance gives the weight a moment, which turns the lamina.",
      "The lamina keeps turning until that moment becomes zero.",
      "That happens only when the centre of gravity hangs directly below the pin."
    ],
    explain: "A freely hanging object settles with its centre of gravity vertically below the point of suspension. In any other position the weight has a perpendicular distance from the pin, so it produces a moment that swings the object round until the centre of gravity is directly below the pin and the moment is zero."
  },
  {
    id: "turn-q-20",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "centre-of-gravity",
    stem: "How do you find the centre of gravity of an irregular flat lamina by experiment?",
    figure: "fig-05-12-plumb-experiment.svg",
    options: [
      "Hang it from two different holes, draw a plumb line each time, and take the point where the lines cross.",
      "Measure the outline and mark the middle of the shape.",
      "Hang it from just one hole and take the middle of that single plumb line.",
      "Balance it and mark the point that feels heaviest."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-cg-centre-irregular", 2: "turn-cg-centre-irregular", 3: "turn-cg-weight-spread" },
    walkthrough: [
      "Hang the lamina freely from a small hole near its edge and let it settle.",
      "Hang a plumb line from the same hole and mark the vertical line it makes.",
      "Repeat from a second hole to get a second vertical line.",
      "The centre of gravity is the point where the two lines cross."
    ],
    explain: "You hang the lamina from two different points and mark the vertical plumb line each time, then the centre of gravity is where the two lines cross. Just measuring the middle of the outline fails because an irregular shape is not centred there, one line alone is not enough to fix a point, and the weight is not concentrated at one heaviest spot."
  },
  {
    id: "turn-q-21",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    stem: "Which change makes an object more stable?",
    figure: "fig-05-13-stability-cg.svg",
    options: [
      "Raising its centre of gravity.",
      "Making its base narrower.",
      "Making it heavier at the top.",
      "Lowering its centre of gravity."
    ],
    correct: 3,
    distractorMisconceptions: { 0: "turn-stability-cg-high", 1: "turn-stability-base-narrow", 2: "turn-stability-heavier" },
    walkthrough: [
      "Stability depends on how far an object can tilt before it topples.",
      "A lower centre of gravity lets it tilt further before the weight line passes the edge.",
      "A wider base also lets it tilt further, so a narrow base is worse.",
      "Adding weight high up raises the centre of gravity, which makes it easier to topple."
    ],
    explain: "Lowering the centre of gravity makes an object more stable, because it can then tilt further before the vertical line through its centre of gravity passes the edge of its base. Raising the centre of gravity, narrowing the base, or adding weight high up all make an object easier to topple, not harder."
  },
  {
    id: "turn-q-22",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    stem: "An empty tall bottle topples over easily. Adding sand to the bottom makes it steadier mainly because this",
    figure: "fig-05-13-stability-cg.svg",
    options: [
      "increases its weight only.",
      "lowers its centre of gravity.",
      "raises its centre of gravity.",
      "reduces its base area."
    ],
    correct: 1,
    distractorMisconceptions: { 0: "turn-stability-heavier", 2: "turn-stability-cg-high", 3: "turn-stability-base-narrow" },
    walkthrough: [
      "The sand settles at the very bottom of the bottle.",
      "Putting mass low down brings the centre of gravity nearer the base.",
      "A lower centre of gravity lets the bottle tilt further before it topples.",
      "So the bottle becomes steadier because its centre of gravity has dropped."
    ],
    explain: "The sand sits low in the bottle, so it lowers the centre of gravity, and a lower centre of gravity is what makes the bottle harder to topple. It is not the extra weight on its own, since the same weight added high up would raise the centre of gravity and make things worse, and the base area is unchanged."
  },
  {
    id: "turn-q-23",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    stem: "A tilted object returns upright rather than toppling when the vertical line through its centre of gravity",
    figure: "fig-05-15-stability-tilt.svg",
    options: [
      "falls inside its base.",
      "falls outside its base.",
      "moves further away from the base.",
      "reaches the top of the object."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-stability-tilt-reversed", 2: "turn-stability-tilt-reversed", 3: "turn-stability-tilt-reversed" },
    walkthrough: [
      "When an object is tilted, its lowest edge acts as the pivot.",
      "Look at the vertical line through the centre of gravity.",
      "If that line falls inside the base, the weight turns the object back upright.",
      "If it falls outside the base, the weight turns it further over and it topples."
    ],
    explain: "A tilted object returns upright when the vertical line through its centre of gravity still falls inside its base, because then the weight produces a moment that turns it back. If that line falls outside the base, the weight turns the object further over and it topples, so inside means stable and outside means toppling."
  },
  {
    id: "turn-q-24",
    topicKey: "t4-turning-effect-of-forces",
    subtopic: "stability",
    stem: "A bus is leaned over further and further. At what point does it finally topple?",
    figure: "fig-05-15-stability-tilt.svg",
    options: [
      "When the vertical line through its centre of gravity passes outside the edge of its wheels.",
      "As soon as it is tilted even slightly.",
      "When its centre of gravity rises above its starting height.",
      "While the line through its centre of gravity is still inside its base."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "turn-stability-tilt-reversed", 2: "turn-stability-cg-high", 3: "turn-stability-tilt-reversed" },
    walkthrough: [
      "As the bus leans, the vertical line through its centre of gravity moves towards the edge of its base.",
      "The base is the ground between the wheels, and the lowest wheels act as the pivot.",
      "While that line stays inside the wheels, the weight turns the bus back upright.",
      "Only when the line passes outside the wheels does the weight turn it further over, so it topples."
    ],
    explain: "The bus topples only once the vertical line through its centre of gravity passes beyond the edge of its wheels, because then the weight turns it further over instead of back. A slight tilt is safe while that line stays inside the base, and although the centre of gravity does rise a little on the way, it is the line passing the edge, not the small rise, that decides toppling."
  }
];
