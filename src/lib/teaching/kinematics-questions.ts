// kinematics-questions.ts
// Teaching question bank for O-Level Physics, Kinematics (topicKey "t2-kinematics").
// Every wrong option maps to the misconception it reveals (see kinematics-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / 07-Physics-Materials / Physics-Study-Notes / Chapter 02 - Kinematics.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

export interface TeachQuestion {
  id: string;
  topicKey: "t2-kinematics";
  subtopic: string;
  stem: string;
  figure: string | null;
  options: string[];
  correct: number;
  distractorMisconceptions: Record<number, string>;
  walkthrough: string[];
  explain: string;
}

export const KINEMATICS_QUESTIONS: TeachQuestion[] = [
  {
    id: "km-q-01",
    topicKey: "t2-kinematics",
    subtopic: "units-and-conversion",
    stem: "A runner keeps a steady speed of 4 m/s. How far does he travel in 3 minutes?",
    figure: null,
    options: ["12 m", "240 m", "720 m", "2160 m"],
    correct: 2,
    distractorMisconceptions: { 0: "km-units-1", 1: "km-units-1", 3: "km-units-1" },
    walkthrough: [
      "First change the time into seconds, because the speed is in metres per second.",
      "Three minutes is three times sixty, which is one hundred and eighty seconds.",
      "Distance is speed times time, so four times one hundred and eighty.",
      "That gives seven hundred and twenty metres."
    ],
    explain: "The speed is in metres per second, so the time has to be in seconds before you multiply. Three minutes is one hundred and eighty seconds, and four metres per second times one hundred and eighty seconds is seven hundred and twenty metres. If you had used the three directly you would have got only twelve, which is the tell that the minutes were never converted."
  },
  {
    id: "km-q-02",
    topicKey: "t2-kinematics",
    subtopic: "speed-vs-velocity",
    stem: "Which statement correctly describes the difference between speed and velocity?",
    figure: null,
    options: [
      "Velocity is speed in a stated direction.",
      "Velocity is the change of speed per unit time.",
      "Speed and velocity are the same, and both are vectors.",
      "Speed is the gradient of a velocity-time graph."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-speedvel-2", 2: "km-speedvel-1", 3: "km-vtgraph-1" },
    walkthrough: [
      "Speed tells you only how fast something moves.",
      "Velocity tells you how fast and in which direction.",
      "So velocity is just speed with a direction attached.",
      "The change of speed per unit time is a different idea, that one is acceleration."
    ],
    explain: "Speed is a scalar, so it is only a size, while velocity is a vector, so it is a size together with a direction. That is exactly what the first option says. The change of speed per unit time describes acceleration, not velocity, and speed and velocity are not the same, because only velocity carries a direction."
  },
  {
    id: "km-q-03",
    topicKey: "t2-kinematics",
    subtopic: "speed-vs-velocity",
    stem: "Which statement about velocity is correct?",
    figure: null,
    options: [
      "Velocity is the gradient of a displacement-time graph.",
      "Velocity is the height of a displacement-time graph.",
      "Velocity is the area under a velocity-time graph.",
      "Velocity is the change of speed per unit time."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-dtgraph-1", 2: "km-vtgraph-1", 3: "km-speedvel-2" },
    walkthrough: [
      "On a displacement-time graph, the steepness of the line is the velocity.",
      "The height of the line only tells you how far from the start the object is.",
      "The area under a velocity-time graph is the displacement, not the velocity.",
      "And the change of speed per unit time is acceleration."
    ],
    explain: "Velocity is the gradient of a displacement-time graph, because gradient is change in displacement over change in time. The height of that graph is just the distance from the start, the area under a velocity-time graph is the displacement, and the change of speed per unit time is acceleration, so those three are the classic mix ups."
  },
  {
    id: "km-q-04",
    topicKey: "t2-kinematics",
    subtopic: "distance-vs-displacement",
    stem: "A cyclist rides 300 m east, then 200 m west. Taking east as positive, what is his displacement?",
    figure: "fig-02-04-uturn-journey.svg",
    options: ["100 m east", "500 m east", "100 m west", "100 m, with no direction needed"],
    correct: 0,
    distractorMisconceptions: { 1: "km-distdisp-1", 2: "km-distdisp-2", 3: "km-distdisp-1" },
    walkthrough: [
      "Take east as positive, so west is negative.",
      "The east trip is plus three hundred metres, and the west trip is minus two hundred metres.",
      "Add them: plus three hundred plus minus two hundred is plus one hundred metres.",
      "A positive answer means one hundred metres to the east."
    ],
    explain: "Displacement is where you end up compared to where you started, with direction included. Going three hundred east then two hundred back west leaves you one hundred metres east of the start. Five hundred is the total path, which is the distance, not the displacement, and the answer does need a direction, because displacement is a vector."
  },
  {
    id: "km-q-05",
    topicKey: "t2-kinematics",
    subtopic: "average-speed-vs-average-velocity",
    stem: "A jogger runs 400 m east in 20 s, then 300 m west in 30 s. Taking east as positive, what is her average velocity?",
    figure: null,
    options: ["2.0 m/s east", "14 m/s east", "15 m/s east", "2.0 m/s west"],
    correct: 0,
    distractorMisconceptions: { 1: "km-avgvel-1", 2: "km-avgspeed-1", 3: "km-distdisp-2" },
    walkthrough: [
      "Average velocity uses displacement, not distance.",
      "The displacement is four hundred east take away three hundred west, which is one hundred metres east.",
      "The total time is twenty plus thirty, which is fifty seconds.",
      "One hundred metres divided by fifty seconds is two metres per second, towards the east."
    ],
    explain: "Average velocity is total displacement over total time. The displacement is one hundred metres east and the time is fifty seconds, so the answer is two metres per second east. Fourteen comes from using the total distance of seven hundred metres, that is average speed by mistake, and fifteen comes from averaging the two leg speeds, which only works when the times are equal."
  },
  {
    id: "km-q-06",
    topicKey: "t2-kinematics",
    subtopic: "average-speed-vs-average-velocity",
    stem: "A car travels 120 m at 30 m/s, then the next 120 m at 20 m/s. What is its average speed for the whole 240 m?",
    figure: null,
    options: ["24 m/s", "25 m/s", "50 m/s", "20 m/s"],
    correct: 0,
    distractorMisconceptions: { 1: "km-avgspeed-1", 2: "km-avgspeed-1", 3: "km-avgspeed-1" },
    walkthrough: [
      "Average speed is total distance over total time, so first find each time.",
      "The first part takes one hundred and twenty over thirty, which is four seconds.",
      "The second part takes one hundred and twenty over twenty, which is six seconds.",
      "Total distance is two hundred and forty metres and total time is ten seconds.",
      "Two hundred and forty over ten is twenty four metres per second."
    ],
    explain: "You cannot just average thirty and twenty to get twenty five, because the car spends longer at the slower speed. Work out the times, four seconds and six seconds, add the distance to get two hundred and forty metres and the time to get ten seconds, and divide to get twenty four metres per second. Averaging the speeds would only be right if the times were equal."
  },
  {
    id: "km-q-07",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    stem: "A car travels round a bend at a steady speed of 15 m/s. Which statement is correct?",
    figure: "fig-02-07-accel-change-direction.svg",
    options: [
      "It is accelerating, because its direction, and so its velocity, is changing.",
      "It is not accelerating, because its speed is constant.",
      "It is not accelerating, because it is neither speeding up nor slowing down.",
      "It is accelerating only if it also goes faster."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-accel-1", 2: "km-accel-1", 3: "km-accel-1" },
    walkthrough: [
      "Acceleration is any change in velocity.",
      "Velocity includes direction, not just how fast.",
      "Going round a bend changes the direction all the time.",
      "So the velocity is changing, which means the car is accelerating even at a steady speed."
    ],
    explain: "There are three ways to accelerate: speed up, slow down, or change direction. A car on a bend keeps changing direction, so its velocity keeps changing, so it is accelerating. The steady speed does not save it, because a change of direction on its own is already an acceleration."
  },
  {
    id: "km-q-08",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    stem: "A ball is thrown straight up. At the highest point of its path, what is its acceleration? Take g as 10 m/s^2 and ignore air resistance.",
    figure: "fig-02-30-ball-thrown.svg",
    options: ["10 m/s^2 downward", "0 m/s^2", "10 m/s^2 upward", "It has no acceleration until it starts to fall."],
    correct: 0,
    distractorMisconceptions: { 1: "km-accel-2", 2: "km-freefall-2", 3: "km-accel-2" },
    walkthrough: [
      "At the very top the ball is still for just an instant, so its velocity is zero there.",
      "But acceleration is about how the velocity is changing, not its value at that instant.",
      "Gravity is still pulling on the ball the whole time.",
      "So the acceleration is about ten metres per second squared, pointing downward."
    ],
    explain: "A zero velocity for one instant does not mean a zero acceleration. Gravity never switches off, so even at the top the ball is accelerating downward at about ten metres per second squared. That downward pull is what turns the motion from upward to downward, which is why the ball does not hang there."
  },
  {
    id: "km-q-09",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    stem: "Which object has the greatest acceleration?",
    figure: null,
    options: [
      "A sprinter speeding up from 0 to 8 m/s in 2 s.",
      "A train moving at a steady 90 m/s.",
      "A jet flying at a constant 250 m/s.",
      "A car moving at a steady 30 m/s."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-accel-3", 2: "km-accel-3", 3: "km-accel-3" },
    walkthrough: [
      "Acceleration is how quickly the velocity changes, not how fast the object is going.",
      "The train, the jet, and the car all move at a steady speed, so their velocity is not changing at all.",
      "That means their acceleration is zero, however fast they are.",
      "Only the sprinter changes velocity, from zero to eight metres per second in two seconds, so only the sprinter accelerates."
    ],
    explain: "Being fast is not the same as accelerating. The train, jet, and car all travel at constant velocity, so each has zero acceleration no matter how big the speed. The sprinter is the only one whose velocity changes, gaining eight metres per second in two seconds, which is an acceleration of four metres per second squared."
  },
  {
    id: "km-q-10",
    topicKey: "t2-kinematics",
    subtopic: "acceleration",
    stem: "An object is moving in the negative direction, and its acceleration is also negative. What happens to its speed?",
    figure: "fig-02-23-vt-positive-negative.svg",
    options: ["It speeds up.", "It slows down.", "It stays the same.", "It drops to zero at once."],
    correct: 0,
    distractorMisconceptions: { 1: "km-accel-4", 2: "km-accel-4", 3: "km-accel-4" },
    walkthrough: [
      "A negative sign just means the acceleration points in the negative direction.",
      "The object is already moving in that same negative direction.",
      "When the acceleration points the same way as the motion, the object speeds up.",
      "So its speed increases, even though the acceleration is negative."
    ],
    explain: "A minus sign on acceleration does not always mean slowing down, it means the acceleration points in the negative direction. Here the motion is also negative, so the acceleration is helping the motion along and the object speeds up. Slowing down only happens when the acceleration opposes the motion."
  },
  {
    id: "km-q-11",
    topicKey: "t2-kinematics",
    subtopic: "displacement-time-graphs",
    stem: "On a displacement-time graph, how do you find the velocity of the object?",
    figure: "fig-02-13-dt-gradient.svg",
    options: [
      "Find the gradient, that is the steepness of the line.",
      "Read the height of the line off the displacement axis.",
      "Find the area under the line.",
      "Read the largest value on the line."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-dtgraph-1", 2: "km-vtgraph-1", 3: "km-dtgraph-1" },
    walkthrough: [
      "On a displacement-time graph, velocity is the gradient of the line.",
      "Pick two points, then take the change in displacement over the change in time.",
      "The height of the line only tells you how far from the start you are.",
      "Area is not used here, that idea belongs to velocity-time graphs."
    ],
    explain: "Velocity is the gradient of a displacement-time graph, which is change in displacement divided by change in time. Reading the height gives only the distance from the start, and finding an area is what you do under a velocity-time graph, not a displacement-time graph."
  },
  {
    id: "km-q-12",
    topicKey: "t2-kinematics",
    subtopic: "displacement-time-graphs",
    stem: "A displacement-time graph shows a horizontal line for 4 s. What is the object doing during that time?",
    figure: "fig-02-16-dt-forward-types.svg",
    options: ["It is at rest.", "It moves at a constant velocity.", "It is accelerating.", "It is moving back towards the start."],
    correct: 0,
    distractorMisconceptions: { 1: "km-dtgraph-2", 2: "km-dtgraph-2", 3: "km-dtgraph-2" },
    walkthrough: [
      "On a displacement-time graph, a flat line means the displacement is not changing.",
      "If the displacement does not change, the object is not moving.",
      "The gradient of a flat line is zero, so the velocity is zero.",
      "That means the object is at rest during those four seconds."
    ],
    explain: "A flat line on a displacement-time graph means the object stays the same distance from the start, so it is at rest. A flat line meaning constant velocity is true only on a velocity-time graph, so this is the classic case of reading the wrong graph type."
  },
  {
    id: "km-q-13",
    topicKey: "t2-kinematics",
    subtopic: "displacement-time-graphs",
    stem: "Two objects start from the same point. On a displacement-time graph, object P has a steeper line than object Q. Which object is faster?",
    figure: "fig-02-15-dt-steeper.svg",
    options: ["Object P.", "Object Q.", "They move at the same speed.", "Object P is slower, because a steep line is hard to climb."],
    correct: 0,
    distractorMisconceptions: { 1: "km-dtgraph-3", 2: "km-dtgraph-1", 3: "km-dtgraph-3" },
    walkthrough: [
      "On a displacement-time graph, the gradient is the velocity.",
      "A steeper line has a bigger gradient.",
      "A bigger gradient means a bigger velocity.",
      "So object P, with the steeper line, is the faster one."
    ],
    explain: "Steeper means faster on a displacement-time graph, because the gradient is the velocity. Object P covers more displacement in the same time, so it is quicker. The steepness is not about how hard something is to climb, it is simply how much displacement happens per second."
  },
  {
    id: "km-q-14",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    stem: "On a velocity-time graph, which feature gives the acceleration?",
    figure: "fig-02-24-vt-gradient.svg",
    options: [
      "The gradient of the line.",
      "The area under the line.",
      "The height of the line above the time axis.",
      "The point where the line meets the time axis."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-vtgraph-1", 2: "km-vtgraph-1", 3: "km-vtgraph-1" },
    walkthrough: [
      "On a velocity-time graph, the gradient is the acceleration.",
      "Gradient is the change in velocity over the change in time.",
      "The area under the line is the displacement, not the acceleration.",
      "So to get acceleration, you find the slope."
    ],
    explain: "For a velocity-time graph, the gradient gives the acceleration and the area gives the displacement. Reading the height gives you the velocity at that moment, and where the line meets the axis just tells you when the velocity is zero, so the slope is the one that gives acceleration."
  },
  {
    id: "km-q-15",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    stem: "A velocity-time graph is a straight line from 0 to 30 m/s over 15 s. What is the displacement in this time?",
    figure: "fig-02-25-vt-area.svg",
    options: ["225 m", "450 m", "2 m", "30 m"],
    correct: 0,
    distractorMisconceptions: { 1: "km-vtgraph-1", 2: "km-vtgraph-1", 3: "km-vtgraph-1" },
    walkthrough: [
      "Displacement is the area under a velocity-time graph.",
      "The shape here is a triangle, from zero up to thirty metres per second over fifteen seconds.",
      "Area of a triangle is a half times base times height.",
      "That is a half times fifteen times thirty, which is two hundred and twenty five metres."
    ],
    explain: "The displacement is the area under the line. This is a triangle, so it is a half times the base of fifteen seconds times the height of thirty metres per second, giving two hundred and twenty five metres. If you had found the slope instead you would have got two, which is the acceleration, not the displacement."
  },
  {
    id: "km-q-16",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    stem: "A velocity-time graph shows a horizontal line at 12 m/s for 5 s. What is the object doing?",
    figure: "fig-02-26-vt-accel-types.svg",
    options: ["Moving at a constant 12 m/s.", "At rest.", "Accelerating at 12 m/s^2.", "Slowing down."],
    correct: 0,
    distractorMisconceptions: { 1: "km-vtgraph-2", 2: "km-vtgraph-1", 3: "km-vtgraph-2" },
    walkthrough: [
      "On a velocity-time graph, the height of the line is the velocity.",
      "The line sits at twelve metres per second and stays flat.",
      "A flat line means the velocity is not changing, so the acceleration is zero.",
      "But the velocity is twelve, not zero, so the object is moving at a steady twelve metres per second."
    ],
    explain: "A flat line above the axis on a velocity-time graph means constant velocity, so the object moves steadily at twelve metres per second. It is not at rest, because at rest the line would sit on the axis at zero. The acceleration is zero, but zero acceleration is not the same as being still."
  },
  {
    id: "km-q-17",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    stem: "A velocity-time line falls steadily from 20 m/s to 5 m/s, staying above the time axis. What is the object doing?",
    figure: "fig-02-27-vt-decel-types.svg",
    options: ["Slowing down while still moving forward.", "Moving backward.", "Speeding up.", "Standing still."],
    correct: 0,
    distractorMisconceptions: { 1: "km-vtgraph-3", 2: "km-vtgraph-1", 3: "km-vtgraph-3" },
    walkthrough: [
      "The line is going down, so the velocity is decreasing.",
      "A decreasing velocity means the object is slowing down.",
      "But the line is still above the axis, so the velocity is still positive.",
      "A positive velocity means it is still moving forward, just more slowly."
    ],
    explain: "A downward slope means the velocity is dropping, so the object is slowing down. Because the line is still above the axis, the velocity is still positive, so it is moving forward the whole time. It would only be moving backward if the line dipped below the axis into negative velocity."
  },
  {
    id: "km-q-18",
    topicKey: "t2-kinematics",
    subtopic: "speed-time-vs-velocity-time",
    stem: "Which statement about a speed-time graph is correct?",
    figure: null,
    options: [
      "It never goes below the time axis, because speed cannot be negative.",
      "It can go below the axis to show motion in the opposite direction.",
      "It goes below the axis whenever the object slows down.",
      "A line below the axis shows a negative speed."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-signgraph-1", 2: "km-signgraph-1", 3: "km-signgraph-1" },
    walkthrough: [
      "Speed is a scalar, so it is only ever zero or positive.",
      "That means a speed-time graph stays on or above the time axis.",
      "Going below the axis would mean a negative value.",
      "A negative value is allowed for velocity, but never for speed."
    ],
    explain: "Speed can never be negative, so a speed-time graph never dips below the time axis. Only a velocity-time graph can go negative, because velocity carries a direction. Slowing down just brings a speed graph closer to the axis, it does not push it below."
  },
  {
    id: "km-q-19",
    topicKey: "t2-kinematics",
    subtopic: "speed-time-vs-velocity-time",
    stem: "A ball is thrown straight up, then falls back down. Taking upward as positive, what happens to its velocity?",
    figure: "fig-02-30-ball-thrown.svg",
    options: [
      "It is positive going up, zero at the top, then negative coming down.",
      "It stays positive the whole time, going up and coming down.",
      "It is negative going up and positive coming down.",
      "It is positive going up and stays at zero after the top."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "km-signgraph-2", 2: "km-signgraph-2", 3: "km-signgraph-2" },
    walkthrough: [
      "Take upward as positive, so the ball starts with a positive velocity.",
      "As it rises it slows down, and at the top the velocity is zero for an instant.",
      "On the way down the ball moves the opposite way, downward.",
      "So its velocity is now negative, even though its speed is growing again."
    ],
    explain: "With up as positive, the velocity starts positive, falls to zero at the top, then becomes negative on the way down because the direction has reversed. The speed stays positive throughout, but the velocity changes sign, which is why the velocity-time graph crosses below the axis after the top."
  },
  {
    id: "km-q-20",
    topicKey: "t2-kinematics",
    subtopic: "free-fall",
    stem: "With no air resistance, a heavy ball and a light ball are released together from the same height. Which lands first?",
    figure: "fig-02-34-freefall-ball.svg",
    options: ["They land together.", "The heavy ball.", "The light ball.", "The heavy ball, but only by a little."],
    correct: 0,
    distractorMisconceptions: { 1: "km-freefall-1", 2: "km-freefall-1", 3: "km-freefall-1" },
    walkthrough: [
      "With no air resistance, gravity gives every object the same acceleration.",
      "That acceleration is about ten metres per second squared, whatever the mass.",
      "So both balls gain speed at the same rate as they fall.",
      "Starting together from the same height, they reach the ground at the same time."
    ],
    explain: "When air resistance is ignored, mass makes no difference to how fast something falls, because every object has the same downward acceleration of about ten metres per second squared. So the two balls land together. In real life a heavier object can win, but that is because of air resistance, not its weight."
  },
  {
    id: "km-q-21",
    topicKey: "t2-kinematics",
    subtopic: "free-fall",
    stem: "A ball is thrown upward and is still rising. Which way does its acceleration point? Ignore air resistance.",
    figure: "fig-02-30-ball-thrown.svg",
    options: ["Downward.", "Upward.", "There is no acceleration while it rises.", "It points up at first, then down before the top."],
    correct: 0,
    distractorMisconceptions: { 1: "km-freefall-2", 2: "km-freefall-2", 3: "km-freefall-2" },
    walkthrough: [
      "Near the Earth, gravity always pulls downward.",
      "That pull does not switch off just because the ball is going up.",
      "So the acceleration points downward the whole time, even while the ball rises.",
      "This downward acceleration is what slows the rising ball down."
    ],
    explain: "The acceleration due to gravity always points downward, going up, at the top, and coming down. While the ball rises, this downward acceleration opposes the upward motion, which is why the ball slows. The velocity points up during the rise, but the acceleration still points down."
  },
  {
    id: "km-q-22",
    topicKey: "t2-kinematics",
    subtopic: "equations-of-motion",
    stem: "You know the initial velocity u, the acceleration a, and the displacement d. You want the final velocity v, and you are not told the time. Which equation should you use?",
    figure: "fig-02-32-vt-worked-formulae.svg",
    options: ["v^2 = u^2 + 2ad", "v = u + at", "d = ut + (1/2)at^2", "d = (1/2)(u + v)t"],
    correct: 0,
    distractorMisconceptions: { 1: "km-eqm-1", 2: "km-eqm-1", 3: "km-eqm-1" },
    walkthrough: [
      "List what you have: initial velocity, acceleration, and displacement.",
      "You want the final velocity, and you do not know the time.",
      "So choose the equation that has those four quantities and leaves out time.",
      "That is v^2 equals u^2 plus two a d."
    ],
    explain: "Pick the equation that matches your known and unknown quantities and skips the one you do not have. Here time is missing, so you want the equation without time in it, which is v^2 equals u^2 plus two a d. The other three all contain time, so they would need a value you were never given."
  },
  {
    id: "km-q-23",
    topicKey: "t2-kinematics",
    subtopic: "equations-of-motion",
    stem: "A ball is thrown straight up from the ground at 20 m/s. Taking upward as positive and g as 10 m/s^2, what is its velocity after 3 s?",
    figure: "fig-02-35-cliff-throw.svg",
    options: ["10 m/s downward", "50 m/s upward", "10 m/s upward", "30 m/s downward"],
    correct: 0,
    distractorMisconceptions: { 1: "km-eqm-2", 2: "km-signgraph-2", 3: "km-eqm-1" },
    walkthrough: [
      "Take upward as positive, so the initial velocity is plus twenty and gravity is minus ten.",
      "Use v equals u plus a times t.",
      "That is twenty plus, minus ten, times three, which is twenty take away thirty.",
      "The result is minus ten, so the velocity is ten metres per second downward."
    ],
    explain: "With up as positive, the initial velocity is plus twenty metres per second and the acceleration is minus ten metres per second squared, because gravity points down. Using velocity equals u plus a times t gives twenty minus thirty, which is minus ten, so ten metres per second downward. If you had made gravity positive you would have got fifty, and keeping the sign positive gives ten upward, both of which miss that the ball has turned around."
  },
  {
    id: "km-q-24",
    topicKey: "t2-kinematics",
    subtopic: "units-and-conversion",
    stem: "A car travels at 72 km/h. What is this speed in m/s?",
    figure: null,
    options: ["20 m/s", "72 m/s", "1200 m/s", "0.02 m/s"],
    correct: 0,
    distractorMisconceptions: { 1: "km-units-1", 2: "km-units-1", 3: "km-units-1" },
    walkthrough: [
      "To change kilometres per hour into metres per second, work on the kilometres and the hours.",
      "One kilometre is one thousand metres, and one hour is three thousand six hundred seconds.",
      "So multiply seventy two by one thousand, then divide by three thousand six hundred.",
      "That gives twenty metres per second."
    ],
    explain: "Seventy two kilometres per hour is seventy two thousand metres in three thousand six hundred seconds, which works out to twenty metres per second. Leaving the number as seventy two means no conversion was done at all, and the other wrong answers come from converting only the distance or only the time, not both."
  },
  {
    id: "km-q-25",
    topicKey: "t2-kinematics",
    subtopic: "velocity-time-graphs",
    stem: "A velocity-time graph shows an object accelerate from rest to 12 m/s in 4 s, hold 12 m/s for 6 s, then slow to rest in 2 s. What is the total displacement?",
    figure: "fig-02-25-vt-area.svg",
    options: ["108 m", "144 m", "72 m", "96 m"],
    correct: 0,
    distractorMisconceptions: { 1: "km-vtgraph-1", 2: "km-vtgraph-1", 3: "km-vtgraph-1" },
    walkthrough: [
      "Displacement is the whole area under the velocity-time graph.",
      "The first part is a triangle: a half times four times twelve, which is twenty four metres.",
      "The middle part is a rectangle: twelve times six, which is seventy two metres.",
      "The last part is a triangle: a half times two times twelve, which is twelve metres.",
      "Add them: twenty four plus seventy two plus twelve is one hundred and eight metres."
    ],
    explain: "Break the area into a triangle, a rectangle, and a triangle. The triangle at the start is twenty four metres, the rectangle in the middle is seventy two metres, and the triangle at the end is twelve metres, giving one hundred and eight metres in total. Treating the whole thing as one rectangle of twelve by twelve would wrongly give one hundred and forty four."
  }
];
