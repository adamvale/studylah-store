// kinematics-misconceptions.ts
// Topic: O-Level Physics, Kinematics (topicKey "t2-kinematics")
// The tutor's diagnostic brain: the classic ways students go wrong in Kinematics,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / 07-Physics-Materials / Physics-Study-Notes / Chapter 02 - Kinematics.md
// Spoken fields (reteach, tell, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

export interface Misconception {
  id: string;
  topicKey: "t2-kinematics";
  subtopic: string;
  label: string;
  belief: string;
  tell: string;
  whyItHappens: string;
  reteach: string;
  microExample: string;
  figure: string | null;
  check: { question: string; answer: string };
}

export const KINEMATICS_MISCONCEPTIONS: Misconception[] = [
  {
    id: "km-distdisp-1",
    topicKey: "t2-kinematics",
    subtopic: "distance-vs-displacement",
    label: "Distance and displacement treated as the same",
    belief: "The distance travelled and the displacement are always equal.",
    tell: "The student uses the total path length whenever the question asks for displacement, and never checks where the object ended up compared to the start.",
    whyItHappens: "In everyday speech distance and displacement mean the same thing, and for a straight one way trip the two numbers really are equal, so students assume that is always true.",
    reteach: "Think of distance as the whole path your feet actually walk, and displacement as the straight arrow from where you started to where you finished. If you walk five steps forward and five steps back, your feet covered ten steps of distance, but your displacement is zero because you ended up right where you began. So always ask two things: how far did it travel in total, and where did it end up compared to the start.",
    microExample: "Walk 5 m east, then 5 m back west. distance = 5 + 5 = 10 m, but displacement = 0 m.",
    figure: "fig-02-01-distance-displacement.svg",
    check: {
      question: "If you jog four hundred metres right round a track and stop exactly where you started, what is your distance, and what is your displacement?",
      answer: "The distance is four hundred metres, and the displacement is zero, because you finished at your starting point."
    }
  },
  {
    id: "km-distdisp-2",
    topicKey: "t2-kinematics",
    subtopic: "distance-vs-displacement",
    label: "Displacement cannot be zero or negative",
    belief: "Displacement is always a positive number and can never be zero.",
    tell: "The student rejects a zero or a negative answer for displacement and flips the sign to make it positive.",
    whyItHappens: "Distance is always positive, and students carry that rule straight over to displacement, forgetting that displacement is a vector that also records direction.",
    reteach: "Displacement carries a direction, so it is allowed to be zero or negative. We usually pick one direction as positive, say east, and then the opposite direction, west, counts as negative. If something ends up back where it started, its displacement is simply zero. A minus sign is not a mistake here, it just tells you the object finished on the other side of the start.",
    microExample: "Start at 0, move to +3 m, then to -2 m. Final displacement = -2 m, that is 2 m on the negative side.",
    figure: "fig-02-04-uturn-journey.svg",
    check: {
      question: "A snail moves twenty centimetres east, then thirty centimetres west. Taking east as positive, what is its displacement?",
      answer: "It is minus ten centimetres, which means ten centimetres to the west of where it started."
    }
  },
  {
    id: "km-speedvel-1",
    topicKey: "t2-kinematics",
    subtopic: "speed-vs-velocity",
    label: "Speed and velocity used interchangeably",
    belief: "Speed and velocity are just two words for the same thing.",
    tell: "The student gives a velocity with no direction, or treats a speed answer as if it were already a velocity.",
    whyItHappens: "Both are measured in metres per second and both describe how fast something moves, so the one real difference, direction, is easy to drop.",
    reteach: "Speed tells you only how fast, while velocity tells you how fast and in which direction. Speed is a scalar, so a plain number is enough. Velocity is a vector, so your answer is not complete until you add the direction, like six metres per second to the east. Whenever a question asks for velocity, remember to state the direction.",
    microExample: "A car at 20 m/s: speed = 20 m/s; velocity = 20 m/s due north (the direction is required).",
    figure: "fig-02-01-distance-displacement.svg",
    check: {
      question: "A plane flies at two hundred and fifty metres per second towards the north. Which part of that is the speed, and which part is the velocity?",
      answer: "The speed is two hundred and fifty metres per second, and the velocity is two hundred and fifty metres per second towards the north, because velocity includes the direction."
    }
  },
  {
    id: "km-speedvel-2",
    topicKey: "t2-kinematics",
    subtopic: "speed-vs-velocity",
    label: "Velocity defined from distance or confused with acceleration",
    belief: "Velocity is the rate of change of distance, or the change of speed per unit time.",
    tell: "The student picks a definition of velocity that says distance instead of displacement, or one that describes how quickly the speed changes.",
    whyItHappens: "The definitions of speed, velocity and acceleration sound alike, and the phrase rate of change gets attached to the wrong quantity.",
    reteach: "Let us keep the three ideas apart. Speed is distance per unit time. Velocity is displacement per unit time, which is speed in a stated direction. Acceleration is the change of velocity per unit time. So velocity is about displacement, not distance, and it is not about how quickly the speed changes, because that last one is acceleration.",
    microExample: "velocity = displacement / time (not distance / time, and not change of speed / time).",
    figure: null,
    check: {
      question: "Velocity is the rate of change of what, per unit time?",
      answer: "It is displacement per unit time. The change of velocity per unit time would be acceleration instead."
    }
  },
  {
    id: "km-avgvel-1",
    topicKey: "t2-kinematics",
    subtopic: "average-speed-vs-average-velocity",
    label: "Average velocity found from total distance",
    belief: "Average velocity is the total distance divided by the total time.",
    tell: "For a trip that doubles back, the student divides the whole path length by the time and calls it the average velocity.",
    whyItHappens: "The formula for average speed is learned first, and average velocity looks almost identical, so students reuse total distance instead of switching to total displacement.",
    reteach: "Average speed uses the total distance, but average velocity uses the total displacement, the straight arrow from start to finish. So for a there and back journey, first find where the object ended up compared to the start, then divide that displacement by the total time. If it came back to the start, the average velocity is zero even though it clearly moved.",
    microExample: "Go 400 m east then 300 m west in 50 s. avg speed = 700 / 50 = 14 m/s; avg velocity = 100 / 50 = 2 m/s east.",
    figure: "fig-02-04-uturn-journey.svg",
    check: {
      question: "You walk sixty metres forward and sixty metres back in one minute. What is your average velocity?",
      answer: "It is zero metres per second, because your displacement is zero. Your average speed, on the other hand, would be two metres per second."
    }
  },
  {
    id: "km-avgspeed-1",
    topicKey: "t2-kinematics",
    subtopic: "average-speed-vs-average-velocity",
    label: "Average speed found by averaging the speeds",
    belief: "To get the average speed, add the two speeds and divide by two.",
    tell: "The student takes the mean of the speed of each leg instead of using total distance over total time.",
    whyItHappens: "The word average pulls students towards averaging the speed values, and that shortcut only happens to work when equal times are spent at each speed, which is rare.",
    reteach: "Average speed is always the total distance divided by the total time, not the average of the speed values. Averaging the two speeds only works by luck, when the object spends equal time at each speed. The safe method is to add up all the distance, add up all the time, and then divide the one by the other.",
    microExample: "20 m/s for 100 m, then 10 m/s for 100 m. Times are 5 s and 10 s. avg speed = 200 / 15 = 13.3 m/s, not (20 + 10) / 2 = 15 m/s.",
    figure: null,
    check: {
      question: "A car covers the first half of a trip quickly and the second half slowly. Can you find the average speed just by averaging the two speeds?",
      answer: "Not usually. You should divide the total distance by the total time. Averaging the speeds only works if equal times were spent at each speed."
    }
  },
  {
    id: "km-accel-1",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    label: "Turning at constant speed counts as no acceleration",
    belief: "If the speed stays the same, there is no acceleration, even when the direction changes.",
    tell: "The student says an object going round a bend at a steady speed has zero acceleration.",
    whyItHappens: "Acceleration is first met as speeding up or slowing down, so the idea that a change of direction on its own is also acceleration comes as a surprise.",
    reteach: "Acceleration is any change in velocity, and velocity includes direction. So there are three ways to accelerate: speed up, slow down, or change direction. A car going round a corner at a steady speed is still accelerating, because its direction, and therefore its velocity, is changing every moment.",
    microExample: "Constant speed 15 m/s around a bend: the speed does not change, but the direction does, so the velocity changes and the acceleration is not zero.",
    figure: "fig-02-07-accel-change-direction.svg",
    check: {
      question: "A ball on a string is whirled in a circle at a steady speed. Is it accelerating?",
      answer: "Yes. Its direction keeps changing, so its velocity keeps changing, which means it is accelerating even though the speed is constant."
    }
  },
  {
    id: "km-accel-2",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    label: "Zero velocity means zero acceleration",
    belief: "When the velocity is momentarily zero, the acceleration must be zero too.",
    tell: "At the top of a throw the student writes that the acceleration is zero because the ball has stopped.",
    whyItHappens: "It feels natural that if something is not moving at that instant then nothing is changing, but acceleration is about how the velocity is changing, not about its value right now.",
    reteach: "Acceleration is about how quickly the velocity is changing, not how big it is at one instant. At the very top of a throw the ball is momentarily still, but gravity is still pulling on it, so its velocity is changing from upward to downward. That is why the acceleration there is still about ten metres per second squared downward, not zero. A velocity of zero for one instant does not mean the acceleration is zero.",
    microExample: "Top of a throw: v = 0 for an instant, but a = 10 m/s^2 downward the whole time.",
    figure: "fig-02-30-ball-thrown.svg",
    check: {
      question: "At the highest point of its flight a thrown ball is momentarily still. What is its acceleration at that instant?",
      answer: "About ten metres per second squared, directed downward. Gravity never switched off, so the acceleration is not zero even though the velocity is."
    }
  },
  {
    id: "km-accel-3",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    label: "Fast means large acceleration",
    belief: "An object moving very fast must have a large acceleration.",
    tell: "The student picks the fastest object as the one with the greatest acceleration, even when it moves at a constant velocity.",
    whyItHappens: "In everyday language fast and accelerating get muddled, so a high speed is taken as a sign of high acceleration.",
    reteach: "Speed and acceleration are different things. Acceleration is only about how quickly the velocity is changing. A train cruising at a steady ninety metres per second is very fast, yet its acceleration is zero because its velocity is not changing at all. A slow car pulling away from rest can have a bigger acceleration than that fast train.",
    microExample: "Train at a steady 90 m/s: a = 0. Car going from 0 to 6 m/s in 3 s: a = 2 m/s^2. The slower car accelerates more.",
    figure: null,
    check: {
      question: "A car moves at a steady one hundred metres per second on a straight road. What is its acceleration?",
      answer: "Zero, because its velocity is not changing. Being fast is not the same as accelerating."
    }
  },
  {
    id: "km-accel-4",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    label: "Negative acceleration always means slowing down",
    belief: "A negative acceleration always means the object is slowing down.",
    tell: "The student sees a minus sign on the acceleration and concludes the object must be decelerating, without checking which way it is moving.",
    whyItHappens: "The first examples of negative acceleration are braking cars, so the minus sign gets tied to slowing down rather than to a direction.",
    reteach: "A negative sign on acceleration just means it points in the negative direction, it does not always mean slowing down. If the object is already moving in the negative direction, a negative acceleration actually speeds it up. Whether something slows down depends on whether the acceleration opposes the motion, not on the sign on its own.",
    microExample: "Moving at -4 m/s with a = -2 m/s^2: the velocity goes to -6 m/s, so it speeds up, not slows down.",
    figure: "fig-02-23-vt-positive-negative.svg",
    check: {
      question: "An object moving in the negative direction has a negative acceleration. Is it speeding up or slowing down?",
      answer: "It is speeding up, because the acceleration points the same way as the motion. A minus sign on its own does not mean slowing down."
    }
  },
  {
    id: "km-dtgraph-1",
    topicKey: "t2-kinematics",
    subtopic: "displacement-time-graphs",
    label: "Reading the height of a displacement-time graph as velocity",
    belief: "On a displacement-time graph, the value of the line tells you the velocity.",
    tell: "The student reads the y value off a displacement-time graph and calls it the velocity, instead of finding the slope.",
    whyItHappens: "On many graphs the y axis is the quantity you want, so students read the height out of habit, forgetting that here the velocity is hidden in the gradient.",
    reteach: "On a displacement-time graph the height tells you how far the object is from the start, but the velocity is the gradient, how steep the line is. To find the velocity, pick two points and work out the change in displacement divided by the change in time. A high flat line means the object is far away but not moving, because a flat line has zero gradient.",
    microExample: "Flat line at d = 8 m: the displacement is 8 m, but the gradient = 0, so the velocity = 0 m/s.",
    figure: "fig-02-13-dt-gradient.svg",
    check: {
      question: "On a displacement-time graph, which feature gives you the velocity, the height of the line or its steepness?",
      answer: "The steepness, that is the gradient. The height only tells you how far from the start the object is."
    }
  },
  {
    id: "km-dtgraph-2",
    topicKey: "t2-kinematics",
    subtopic: "displacement-time-graphs",
    label: "Flat displacement-time line read as constant velocity",
    belief: "A horizontal line on a displacement-time graph means the object moves at a constant velocity.",
    tell: "The student labels a flat section of a displacement-time graph as steady speed instead of at rest.",
    whyItHappens: "A flat line on a velocity-time graph really does mean constant velocity, and students mix up the two graph types.",
    reteach: "Watch which graph you are reading. On a displacement-time graph a flat horizontal line means the displacement is not changing, so the object is standing still, at rest. It is on a velocity-time graph that a flat line means constant velocity. The same shape has a very different meaning, so always check the y axis label first.",
    microExample: "On a d-t graph, a horizontal section means the displacement is constant, so the velocity = 0 (at rest), not constant velocity.",
    figure: "fig-02-16-dt-forward-types.svg",
    check: {
      question: "A displacement-time graph shows a flat horizontal line for five seconds. What is the object doing?",
      answer: "It is at rest. Its displacement is not changing, so its velocity is zero during those five seconds."
    }
  },
  {
    id: "km-dtgraph-3",
    topicKey: "t2-kinematics",
    subtopic: "displacement-time-graphs",
    label: "Steeper displacement-time line read as slower",
    belief: "A steeper line on a displacement-time graph means the object is moving more slowly.",
    tell: "The student ranks a steep line as slow and a gentle line as fast, the wrong way round.",
    whyItHappens: "Some students picture a steep hill as hard to climb and therefore slow, which reverses the real meaning of the gradient.",
    reteach: "On a displacement-time graph the gradient is the velocity, so a steeper line means a faster object, not a slower one. A steep line covers a lot of displacement in a little time, which is exactly what moving fast means. The gentler the slope, the slower the object, and a flat line means it has stopped.",
    microExample: "Line A rises 10 m in 2 s, so 5 m/s. Line B rises 10 m in 5 s, so 2 m/s. The steeper line A is faster.",
    figure: "fig-02-15-dt-steeper.svg",
    check: {
      question: "Two displacement-time lines start together. One is steep and one is gentle. Which object is faster?",
      answer: "The one with the steeper line, because a bigger gradient means a bigger velocity."
    }
  },
  {
    id: "km-vtgraph-1",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    label: "Gradient and area on a velocity-time graph swapped",
    belief: "On a velocity-time graph the gradient gives the displacement and the area gives the acceleration.",
    tell: "The student finds the area to get the acceleration, or the slope to get the displacement, the two swapped.",
    whyItHappens: "Both readings, gradient and area, are learned close together, so it is easy to attach each one to the wrong quantity.",
    reteach: "Here is the reliable pairing for a velocity-time graph. The gradient, how steep the line is, gives the acceleration. The area underneath the line gives the displacement. So if you want acceleration, find the slope, and if you want displacement, find the area. Gradient for acceleration, area for displacement, keep them in that order.",
    microExample: "v-t line from 0 to 30 m/s in 15 s: gradient = 30 / 15 = 2 m/s^2 (the acceleration); area = 0.5 x 15 x 30 = 225 m (the displacement).",
    figure: "fig-02-25-vt-area.svg",
    check: {
      question: "On a velocity-time graph, what does the area under the line tell you?",
      answer: "The displacement. The gradient of the line is what gives you the acceleration."
    }
  },
  {
    id: "km-vtgraph-2",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    label: "Flat velocity-time line read as at rest",
    belief: "A horizontal line on a velocity-time graph means the object is not moving.",
    tell: "The student calls a flat section above the axis at rest, when it is really moving at a constant velocity.",
    whyItHappens: "A flat line on a displacement-time graph does mean at rest, and the two graphs get swapped.",
    reteach: "On a velocity-time graph a flat line above the axis means the velocity is steady, so the object is moving at a constant velocity, not standing still. The object is only at rest when the line sits right on the time axis, where the velocity is zero. A flat line does mean zero acceleration, because the velocity is not changing, but the object can still be moving.",
    microExample: "On a v-t graph, a horizontal line at v = 12 m/s: the acceleration = 0, but the object still moves at 12 m/s.",
    figure: "fig-02-26-vt-accel-types.svg",
    check: {
      question: "A velocity-time graph shows a flat line at twelve metres per second. Is the object at rest?",
      answer: "No. It is moving at a steady twelve metres per second. Its acceleration is zero, but it is definitely still moving."
    }
  },
  {
    id: "km-vtgraph-3",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    label: "Downward slope on a velocity-time graph read as moving backward",
    belief: "A velocity-time line that slopes down means the object is moving backward.",
    tell: "The student sees a line falling towards the axis and says the object has reversed direction.",
    whyItHappens: "Falling looks like going backward, so a downward slope gets read as reverse rather than as slowing down.",
    reteach: "A downward slope on a velocity-time graph means the velocity is decreasing, so the object is slowing down. As long as the line is still above the axis, the object is moving forward. It only moves backward once the line crosses below the time axis into negative velocity. So a line dropping from a high value towards zero is a forward object braking, not one reversing.",
    microExample: "A v-t line falls from 20 m/s to 5 m/s, staying above the axis: still moving forward, just slowing down.",
    figure: "fig-02-27-vt-decel-types.svg",
    check: {
      question: "A velocity-time line slopes downward but stays above the time axis. Is the object moving backward?",
      answer: "No. It is still moving forward, just slowing down. It would only be moving backward if the line went below the axis."
    }
  },
  {
    id: "km-signgraph-1",
    topicKey: "t2-kinematics",
    subtopic: "speed-time-vs-velocity-time",
    label: "Speed-time graph drawn below the axis",
    belief: "A speed-time graph can dip below the time axis into negative values.",
    tell: "The student draws or reads negative values on a speed-time graph.",
    whyItHappens: "Velocity-time graphs can go negative, and students apply the same freedom to speed-time graphs without noticing that speed cannot be negative.",
    reteach: "Speed is a scalar, so it can never be negative, it is always zero or above. That means a speed-time graph stays on or above the time axis at all times. It is the velocity-time graph that is allowed to go below the axis, because velocity has direction and can be negative. So if you see a line dipping below the axis, it must be a velocity graph, not a speed graph.",
    microExample: "Ball thrown up and falling back: the speed-time graph stays positive throughout; the velocity-time graph goes negative on the way down.",
    figure: "fig-02-30-ball-thrown.svg",
    check: {
      question: "Can a speed-time graph ever go below the time axis?",
      answer: "No. Speed cannot be negative, so a speed-time graph never goes below the axis. Only a velocity-time graph can."
    }
  },
  {
    id: "km-signgraph-2",
    topicKey: "t2-kinematics",
    subtopic: "speed-time-vs-velocity-time",
    label: "Velocity of a ball stays positive as it falls back",
    belief: "A ball thrown straight up keeps a positive velocity while it comes back down.",
    tell: "On a velocity-time graph the student keeps the downward part of the motion above the axis.",
    whyItHappens: "Students track the speed, which does stay positive, and forget that on the way down the direction has reversed, so the velocity sign flips.",
    reteach: "Take upward as positive. On the way up the velocity is positive but shrinking, and at the top it is zero. On the way down the ball moves in the opposite direction, so its velocity is now negative, even though its speed is growing again. That is why the velocity-time graph crosses below the axis after the top, while the speed-time graph simply rises again.",
    microExample: "Up at +5 m/s, top at 0, then down at -5 m/s (the speed is 5 m/s but the velocity is negative).",
    figure: "fig-02-30-ball-thrown.svg",
    check: {
      question: "Taking up as positive, what is the sign of the velocity while the ball is falling back down?",
      answer: "It is negative, because the ball is now moving downward. Its speed is positive, but its velocity is negative."
    }
  },
  {
    id: "km-freefall-1",
    topicKey: "t2-kinematics",
    subtopic: "free-fall",
    label: "Heavier objects fall faster",
    belief: "With no air resistance, a heavier object falls faster than a lighter one.",
    tell: "The student says the heavier of two dropped objects reaches the ground first when air resistance is ignored.",
    whyItHappens: "In real life a stone does beat a feather, but that is due to air resistance, and students credit the weight instead.",
    reteach: "When air resistance is negligible, every object falls with the same acceleration, about ten metres per second squared, whatever its mass. Drop a heavy ball and a light ball together with no air in the way and they land at the same time. The reason a feather loses in real life is air resistance, not its small weight. So without air resistance, mass makes no difference to how fast something falls.",
    microExample: "With no air resistance, a 1 kg ball and a 5 kg ball dropped together both reach v = 10 m/s after 1 s and land together.",
    figure: "fig-02-34-freefall-ball.svg",
    check: {
      question: "With no air resistance, you drop a heavy ball and a light ball from the same height at the same moment. Which lands first?",
      answer: "They land together. With no air resistance, both fall with the same acceleration regardless of mass."
    }
  },
  {
    id: "km-freefall-2",
    topicKey: "t2-kinematics",
    subtopic: "free-fall",
    label: "Acceleration points upward while rising",
    belief: "While an object is moving upward, its acceleration also points upward.",
    tell: "The student marks the acceleration as upward during the rising part of a throw.",
    whyItHappens: "Students expect the acceleration to point the way the object is going, so upward motion suggests upward acceleration.",
    reteach: "Near the Earth, gravity always pulls downward, so the acceleration of a thrown object is downward the whole time, going up, at the top, and coming down. On the way up this downward acceleration opposes the motion, which is exactly why the ball slows down. The velocity points up while it is rising, but the acceleration stays pointing down throughout.",
    microExample: "Rising ball: the velocity is upward (positive), but a = 10 m/s^2 downward for the entire flight.",
    figure: "fig-02-30-ball-thrown.svg",
    check: {
      question: "A ball is on its way up after being thrown. Which way does its acceleration point?",
      answer: "Downward, because gravity always acts downward. That downward acceleration is what slows the ball as it rises."
    }
  },
  {
    id: "km-eqm-1",
    topicKey: "t2-kinematics",
    subtopic: "equations-of-motion",
    label: "Wrong equation of motion chosen",
    belief: "Any equation of motion will do as long as I have three numbers to put in.",
    tell: "The student plugs values into an equation that contains a quantity they were never given, or that leaves out the one they actually need.",
    whyItHappens: "The four equations look interchangeable, so students grab the first one they remember instead of matching it to the known and unknown quantities.",
    reteach: "Each equation of motion is built to leave out exactly one of the five quantities: initial velocity, final velocity, acceleration, displacement, and time. The trick is to list what you know and what you want, then pick the equation that contains those and skips the quantity you do not have. For example, if you have no time and you want a final velocity, use v squared equals u squared plus two a d, because that is the one without time in it.",
    microExample: "Known u, a, d; want v; no time: use v^2 = u^2 + 2ad (not v = u + at, which needs t).",
    figure: "fig-02-32-vt-worked-formulae.svg",
    check: {
      question: "You know the initial velocity, the acceleration, and the displacement, and you want the final velocity, but you do not know the time. Which equation fits?",
      answer: "Use v squared equals u squared plus two a d, because it is the equation that does not involve time."
    }
  },
  {
    id: "km-eqm-2",
    topicKey: "t2-kinematics",
    subtopic: "equations-of-motion",
    label: "Sign error when thrown upward",
    belief: "When an object is thrown upward, the initial velocity and gravity take the same sign.",
    tell: "The student makes the initial velocity and g both positive for a throw, so in the working the ball never slows down.",
    whyItHappens: "Students plug in numbers without first setting a direction convention, so they miss that the upward velocity and the downward gravity must have opposite signs.",
    reteach: "Before you calculate, choose one direction as positive and stick with it. If you take upward as positive, then the initial velocity of a ball thrown up is positive, but the acceleration due to gravity is negative, because gravity pulls the other way. Giving them opposite signs is what makes the ball slow, stop, and come back in your working. The same sign for both would mean gravity was helping it speed up, which is wrong.",
    microExample: "Thrown up, up positive: u = +40 m/s, a = -10 m/s^2 (opposite signs), so v = 0 at t = 4 s.",
    figure: "fig-02-35-cliff-throw.svg",
    check: {
      question: "You throw a ball straight up and take upward as positive. What sign does the acceleration due to gravity get?",
      answer: "A negative sign, because gravity acts downward while up is positive. The initial velocity is positive, so the two have opposite signs."
    }
  },
  {
    id: "km-units-1",
    topicKey: "t2-kinematics",
    subtopic: "units-and-conversion",
    label: "Values used without converting units",
    belief: "You can put minutes, hours, or kilometres straight into the equations without converting.",
    tell: "The student substitutes a time in minutes or a distance in kilometres and does not change them to seconds and metres.",
    whyItHappens: "The numbers are right there in the question, so it feels natural to use them as given, and the need to convert to base units is easy to forget.",
    reteach: "The standard equations expect base units: metres for distance, seconds for time, and metres per second for speed. So before you calculate, turn minutes into seconds and kilometres into metres. For example, three minutes is one hundred and eighty seconds, and two kilometres is two thousand metres. Convert first, then substitute, and the answer comes out in the units you expect.",
    microExample: "4 m/s for 3 min: use t = 180 s, so d = 4 x 180 = 720 m (not 4 x 3 = 12).",
    figure: null,
    check: {
      question: "Before using distance equals speed times time, what should you do with a time given in minutes?",
      answer: "Change it into seconds first. For example, three minutes becomes one hundred and eighty seconds before you substitute."
    }
  }
];
