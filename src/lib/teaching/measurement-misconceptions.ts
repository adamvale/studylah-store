// measurement-misconceptions.ts
// Topic: O-Level Physics, Physical Quantities, Units and Measurement
// (topicKey "t1-physical-quantities-and-measurement").
// The tutor's diagnostic brain: the classic ways students go wrong in this unit,
// with the exact re-explanation for each. Grounded in
// StudyLah study notes / Chapter 01 - Physical Quantities, Units and Measurement.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in
// plain words for reading aloud. On-screen fields (label, belief, microExample) may
// use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const MEASUREMENT_MISCONCEPTIONS: Misconception[] = [
  {
    id: "meas-quantity-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "physical-quantities",
    label: "A number on its own states a physical quantity",
    belief: "A physical quantity is fully stated by its number, like a mass of 4.5.",
    tell: "The student writes a measurement as a bare number and leaves the unit off, treating the value as complete.",
    whyItHappens: "In everyday life we often say a number and let the unit be understood from the situation, so the habit of dropping the unit carries over into physics.",
    reteach: "Every physical quantity has two parts, a number and a unit. The number tells you how much, and the unit tells you the standard being counted. Writing a mass as just four point five is incomplete, because four point five what? Four point five grams and four point five kilograms are wildly different amounts. So always give the number together with its unit, and the measurement is only finished when both are there.",
    microExample: "mass = 4.5 is incomplete; mass = 4.5 kg is complete (number and unit together).",
    figure: "fig-01-01-measurement-anatomy.svg",
    check: {
      question: "A student writes the length of a rod as just seven. Why is that not a complete physical quantity?",
      answer: "Because it has no unit. Seven what? You need the number and a unit together, such as seven centimetres, before the quantity is complete."
    }
  },
  {
    id: "meas-base-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "base-vs-derived",
    label: "A derived quantity mistaken for a base quantity",
    belief: "Quantities like speed, volume and density are base quantities.",
    tell: "The student lists speed or density as a base quantity, because it feels basic or is met early.",
    whyItHappens: "Speed and density feel simple and familiar, so students assume they must be fundamental rather than built from other quantities.",
    reteach: "A base quantity cannot be expressed in terms of any other quantity. At this level there are five, and they are length, mass, time, electric current, and temperature. A derived quantity is built from those by multiplying or dividing. Speed is length divided by time, and density is mass divided by volume, so both are derived, not base. If you can write a quantity as a combination of others, it is derived.",
    microExample: "speed = distance / time and density = mass / volume, so both are derived, not base.",
    figure: null,
    check: {
      question: "Is speed a base quantity or a derived quantity, and how can you tell?",
      answer: "It is derived, because speed is distance divided by time, which is built from two other quantities. Only length, mass, time, current and temperature are the base ones."
    }
  },
  {
    id: "meas-base-2",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "base-vs-derived",
    label: "A base quantity mistaken for a derived quantity",
    belief: "Quantities such as time or temperature can be broken down, so they are derived.",
    tell: "The student labels one of the five base quantities as derived, expecting everything to come from something simpler.",
    whyItHappens: "Once students learn that many quantities are built from others, they overapply the idea and assume nothing is truly fundamental.",
    reteach: "Some quantities really are fundamental and cannot be built from anything simpler. Those are the five base quantities, length, mass, time, electric current, and temperature, each with its own base unit. Time is not made from other quantities, and neither is temperature, so both are base. The test is simple, if a quantity cannot be written as a combination of others, it is a base quantity.",
    microExample: "Base quantities: length, mass, time, current, temperature. Time is not built from others, so it is base.",
    figure: null,
    check: {
      question: "A student says temperature must be a derived quantity. Are they right?",
      answer: "No. Temperature is one of the five base quantities, because it cannot be built out of any other quantities. It is fundamental."
    }
  },
  {
    id: "meas-siunit-mass",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "si-units",
    label: "The SI base unit of mass taken as the gram",
    belief: "The SI base unit of mass is the gram.",
    tell: "The student names the gram, rather than the kilogram, as the base unit of mass.",
    whyItHappens: "The gram feels like the plain, unprefixed unit, and it is odd that the base unit for mass already carries the kilo prefix, so students pick the gram by mistake.",
    reteach: "Mass is unusual, because its SI base unit already has a prefix built in. The base unit of mass is the kilogram, not the gram. So when you list the five base units, you say metre, kilogram, second, ampere, and kelvin. The gram is a smaller unit of mass, but the agreed base unit is the kilogram.",
    microExample: "Base units: length = metre, mass = kilogram (not gram), time = second, current = ampere, temperature = kelvin.",
    figure: null,
    check: {
      question: "What is the SI base unit of mass?",
      answer: "It is the kilogram. The gram is smaller, but the base unit of mass is the kilogram, which is the one that already carries a prefix."
    }
  },
  {
    id: "meas-siunit-length",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "si-units",
    label: "The SI unit of length taken as the kilometre or centimetre",
    belief: "The SI unit of length is the kilometre, or the centimetre.",
    tell: "The student picks the kilometre or centimetre as the SI unit of length instead of the metre.",
    whyItHappens: "Kilometres and centimetres are the units students meet most in daily life, so they feel more standard than the plain metre.",
    reteach: "The SI unit of length is the metre. The kilometre and the centimetre are just the metre with a prefix, a thousand metres and a hundredth of a metre. They are handy sizes, but the base unit itself is the metre. So for length, the answer is always the metre.",
    microExample: "SI unit of length = metre (m). The km and cm are the metre with a prefix, not the base unit.",
    figure: null,
    check: {
      question: "True or false, the SI unit for length is the kilometre.",
      answer: "False. The SI unit for length is the metre. The kilometre is just one thousand metres, a prefixed version of the base unit."
    }
  },
  {
    id: "meas-prefix-dir",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "prefixes",
    label: "Multiplying and dividing by the prefix factor the wrong way round",
    belief: "To change a plain unit into a prefixed unit, you multiply by the prefix's factor.",
    tell: "The student multiplies when they should divide, so a length in metres turns into far too few centimetres, or the other way round.",
    whyItHappens: "The two directions look symmetric, and students grab one operation without thinking about whether the new unit is bigger or smaller, so they pick the wrong one.",
    reteach: "There are two directions and they use opposite operations. Going from a plain unit to a unit with a prefix, you divide by the prefix's factor. Going from a prefixed unit back to a plain unit, you multiply by the factor. A quick check keeps you right, if the new unit is smaller than the old one, the number should get bigger. Turning metres into centimetres should give a larger number, because a centimetre is small, so you divide by the factor of centi.",
    microExample: "0.75 m to cm: divide by 10^-2, so 0.75 / 0.01 = 75 cm (not 0.75 x 0.01 = 0.0075).",
    figure: null,
    check: {
      question: "To change a length in metres into centimetres, do you multiply or divide by the factor of centi, and should the number get bigger or smaller?",
      answer: "You divide by the factor, and the number gets bigger, because a centimetre is smaller than a metre so it takes more of them."
    }
  },
  {
    id: "meas-prefix-value",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "prefixes",
    label: "Prefix factors muddled with one another",
    belief: "Prefixes like centi, milli and micro have the same or swapped factors.",
    tell: "The student uses the factor of milli when the prefix is centi, or treats micro as though it were milli.",
    whyItHappens: "The prefix names sound alike and the powers of ten sit close together, so the exact factor attached to each one is easy to swap.",
    reteach: "Each prefix has its own fixed factor, so it helps to hold the ladder in mind. Deci is a tenth, that is ten to the power minus one. Centi is a hundredth, ten to the power minus two. Milli is a thousandth, ten to the power minus three. Micro is a millionth, ten to the power minus six. Nano is a billionth, ten to the power minus nine. Pick the factor that belongs to the exact prefix in the question, not a neighbour on the ladder.",
    microExample: "centi = 10^-2, milli = 10^-3, micro = 10^-6. So 1 cm = 10^-2 m, not 10^-3 m.",
    figure: null,
    check: {
      question: "What is the factor of centi, and how does it differ from milli?",
      answer: "Centi is ten to the power minus two, a hundredth. Milli is ten to the power minus three, a thousandth. So milli is ten times smaller than centi."
    }
  },
  {
    id: "meas-stdform-coeff",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "standard-form",
    label: "Coefficient in standard form not kept between 1 and 10",
    belief: "Any number times a power of ten counts as standard form, even 0.63 x 10^3 or 47 x 10^6.",
    tell: "The student leaves a coefficient less than one or ten or more, so the number is not in proper standard form.",
    whyItHappens: "The number and the power of ten look like a valid answer on their own, so students forget the extra rule that the front number must sit between one and ten.",
    reteach: "Standard form has a rule about the front number, the coefficient. It must be at least one but less than ten. So a coefficient of nought point six three is too small, and a coefficient of forty seven or twelve point five is too big. Fix it by shifting the decimal point and changing the power of ten to match, until the front number sits between one and ten.",
    microExample: "0.63 x 10^3 and 12.5 x 10^4 are not standard form; 6.3 x 10^2 and 1.25 x 10^5 are.",
    figure: null,
    check: {
      question: "Is nought point six three times ten to the power three written in standard form?",
      answer: "No, because the front number must be between one and ten, and nought point six three is less than one. It should be six point three times ten to the power two."
    }
  },
  {
    id: "meas-stdform-sign",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "standard-form",
    label: "Sign of the power of ten reversed",
    belief: "A small decimal number gives a positive power of ten in standard form.",
    tell: "The student writes a tiny number with a positive index, or a huge number with a negative index, the sign flipped.",
    whyItHappens: "Students count how many places the decimal moves but forget that the direction of the move decides the sign, so they attach the wrong sign.",
    reteach: "The direction the decimal point moves sets the sign of the power. For a small number like nought point nought nought five eight, you move the point to the right to get five point eight, and moving right makes the power negative. For a big number, you move the point to the left, and that makes the power positive. So a small number below one always ends up with a negative power of ten.",
    microExample: "0.00058 s = 5.8 x 10^-4 s (point moves right, power negative), not 5.8 x 10^4 s.",
    figure: null,
    check: {
      question: "When you write a small number like nought point nought nought five eight in standard form, is the power of ten positive or negative?",
      answer: "Negative, because you move the decimal point to the right to reach a number between one and ten, and moving right makes the power negative."
    }
  },
  {
    id: "meas-instrument-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "measuring-length",
    label: "Any length instrument treated as fine for any job",
    belief: "It does not matter which instrument you pick, a metre rule can measure anything.",
    tell: "The student chooses a metre rule for the diameter of a wire, or a micrometer for the girth of a tree, ignoring the size and precision needed.",
    whyItHappens: "Students think of measuring as just reading a scale, so they do not connect the choice of instrument to the size of the object and the precision required.",
    reteach: "The right instrument depends on how big the object is and how fine a reading you need. A measuring tape handles several metres, even around curves, like the girth of a tree. A metre rule suits a few centimetres up to about a metre. Digital calipers measure small objects up to about fifteen centimetres. A micrometer screw gauge measures very small lengths like the diameter of a wire, to the nearest thousandth of a millimetre. Match the instrument to the object.",
    microExample: "Wire diameter needs a micrometer screw gauge (0.001 mm); a metre rule (0.1 cm) is far too coarse.",
    figure: "fig-01-08-micrometer.svg",
    check: {
      question: "Which instrument would you choose to measure the diameter of a thin wire, and why not a metre rule?",
      answer: "A micrometer screw gauge, because it reads to the nearest thousandth of a millimetre. A metre rule is far too coarse for something that small."
    }
  },
  {
    id: "meas-parallax-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    label: "Eye position ignored when reading a scale",
    belief: "It does not matter where your eye is when you read a scale.",
    tell: "The student reads a ruler from the side or at an angle and takes the value as correct.",
    whyItHappens: "The shift from an angled view is small and not obvious, so students do not realise that the eye position changes the reading.",
    reteach: "Where your eye sits really does change the reading, and that is called parallax error. When your eye is off to one side, the mark and the object line up differently and the reading looks shifted. To avoid it, put your line of sight directly above the mark, so you are looking straight down at it, perpendicular to the scale. Reading square on is what gives the true value.",
    microExample: "Read the scale with the eye directly above the mark (perpendicular), not from the side, to avoid parallax error.",
    figure: "fig-01-02-parallax-error.svg",
    check: {
      question: "To avoid parallax error, where should your eye be when you read a ruler?",
      answer: "Directly above the mark, looking straight down at it. Reading from the side shifts the value and gives a parallax error."
    }
  },
  {
    id: "meas-zeroerror-pos",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    label: "Direction of a positive zero error reversed",
    belief: "A positive zero error makes the object read smaller than it really is.",
    tell: "The student sees a positive zero error and expects the reading to be too small, then adjusts the wrong way.",
    whyItHappens: "The word positive suggests the reading should shift one way, but students do not picture where the object's edge actually sits against the scale.",
    reteach: "Picture where the object begins on the scale. With a positive zero error, the starting edge sits after the zero mark, so every reading picks up that extra bit, and the object reads larger than it truly is. With a negative zero error, the edge sits before the zero mark, so the object reads smaller. So a positive zero error makes things read too big, and you would take that error off the reading.",
    microExample: "Positive zero error: edge sits after 0, so the reading is too large; you subtract the error to correct it.",
    figure: "fig-01-04-zero-error.svg",
    check: {
      question: "An instrument has a positive zero error. Does the object read larger or smaller than its true size?",
      answer: "Larger, because the edge starts after the zero mark, so the reading carries that extra amount. You subtract the zero error to correct it."
    }
  },
  {
    id: "meas-zeroerror-2",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    label: "Measurement assumed to always start at the zero mark",
    belief: "You must line the object up with the zero mark, and a zero error can be ignored.",
    tell: "The student always reads from the zero end even when it is worn, and never subtracts a zero error.",
    whyItHappens: "Students are taught early to line objects up with zero, so they treat the zero end as the only valid starting point and forget it can be faulty.",
    reteach: "You do not have to start at the zero mark, and sometimes you should not. If the zero end is worn or the scale has a zero error, line one edge of the object up with a clear mark further along, read both ends, and subtract. That skips the faulty zero completely. And if there is a zero error you cannot avoid, correct for it rather than pretending it is not there.",
    microExample: "Line the block up at 10.0 cm and read 12.4 cm: length = 12.4 - 10.0 = 2.4 cm, avoiding a worn zero.",
    figure: "fig-01-05-offset-measurement.svg",
    check: {
      question: "If the zero end of your ruler is worn, how can you still measure a length correctly?",
      answer: "Line one end up with a clear mark such as ten centimetres, read the other end, and subtract the two readings. That avoids the worn zero."
    }
  },
  {
    id: "meas-enderror-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    label: "Worn ends of a rule treated as harmless",
    belief: "A worn or chipped end of a metre rule makes no difference to the reading.",
    tell: "The student measures from a visibly worn zero end and trusts the reading without a second thought.",
    whyItHappens: "The damage looks tiny and the rest of the scale looks fine, so students assume a worn end cannot matter.",
    reteach: "The ends of a metre rule take the most knocks and wear down over time, and that causes end error. If the zero end is chipped, every reading you start from it is off by that missing bit. So before you measure, check the condition of the ends. If the zero end is damaged, start from a clean mark further along and subtract, so the worn part never enters your reading.",
    microExample: "A chipped 0 end shifts every reading; start from a clean mark and subtract instead.",
    figure: "fig-01-03-end-error.svg",
    check: {
      question: "Why should you check the ends of a metre rule before measuring with it?",
      answer: "Because a worn or chipped end causes an end error, so readings taken from it are wrong. If an end is damaged, measure from a clean mark instead."
    }
  },
  {
    id: "meas-precision-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "precision",
    label: "Precision confused with range or size",
    belief: "The precision of an instrument is how large a length it can measure.",
    tell: "The student says a measuring tape is more precise than a micrometer because it measures a bigger range.",
    whyItHappens: "The words precise and big get blurred, so a larger measuring range is taken as a sign of more precision.",
    reteach: "Precision is not about how much an instrument can measure, it is about how finely it can measure. The precision is the smallest division on the scale. The smaller that division, the more precise the instrument. A micrometer screw gauge reads to a thousandth of a millimetre, so it is far more precise than a metre rule that reads to a millimetre, even though the metre rule covers a much bigger length. Smaller smallest division means more precise.",
    microExample: "Micrometer smallest division 0.001 mm is more precise than a metre rule at 1 mm, though the rule covers more length.",
    figure: "fig-01-09-precision-scale.svg",
    check: {
      question: "What makes one instrument more precise than another, a bigger measuring range or a smaller smallest division?",
      answer: "A smaller smallest division. Precision is the smallest division the instrument can measure, not how large a length it covers."
    }
  },
  {
    id: "meas-precision-reading",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "precision",
    label: "Readings claimed finer than the instrument allows",
    belief: "A metre rule with a precision of 0.1 cm can give an exact reading like 3.46 cm.",
    tell: "The student records extra decimal places that the scale cannot actually show.",
    whyItHappens: "Students want a precise looking answer, so they add digits beyond what the smallest division supports, imagining a finer reading than the scale gives.",
    reteach: "An instrument can only read as finely as its smallest division. A metre rule with a precision of a tenth of a centimetre can be read to the nearest tenth, so you can write three point five centimetres, but not three point four six. That second decimal place is finer than the scale allows, so it is not a real reading. To read to hundredths of a centimetre, you would need a more precise instrument like digital calipers.",
    microExample: "A 0.1 cm rule reads 3.5 cm, not 3.46 cm; the extra decimal is finer than the smallest division.",
    figure: "fig-01-09-precision-scale.svg",
    check: {
      question: "Can a metre rule with a precision of nought point one centimetres give a reading of three point four six centimetres?",
      answer: "No. It can only be read to the nearest tenth of a centimetre, such as three point five. The extra decimal place is finer than the scale allows."
    }
  },
  {
    id: "meas-period-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    label: "Period taken as a half swing",
    belief: "The period of a pendulum is the time to swing from one side across to the other.",
    tell: "The student times a one way swing and calls it the period, or counts each one way swing as a full oscillation.",
    whyItHappens: "A single sweep from one side to the other looks like one complete motion, so students stop counting at the far side instead of waiting for the bob to return.",
    reteach: "One complete oscillation is a full round trip, not just half of it. The bob swings from its starting point, across to the other side, and all the way back to where it began. That whole there and back journey is one period. A single sweep from one side to the other is only half an oscillation, so timing that alone gives you half the period.",
    microExample: "One oscillation = from P, across to Q, back to P. P to Q alone is only half an oscillation.",
    figure: "fig-01-11-pendulum-swing.svg",
    check: {
      question: "Is one swing from the left side across to the right side a full oscillation of a pendulum?",
      answer: "No, that is only half an oscillation. A full oscillation is there and back, from the start across to the other side and all the way back again."
    }
  },
  {
    id: "meas-period-calc",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    label: "Period not found by dividing the total time by the number of swings",
    belief: "The period is just the total time you measured, or the number of swings divided by the time.",
    tell: "The student reports the whole stopwatch time as the period, or divides the count by the time instead of the time by the count.",
    whyItHappens: "Students record the total time and stop there, or they set up the division upside down because they are unsure which number goes on top.",
    reteach: "The period is the time for just one oscillation, so you share the total time out over all the swings you counted. That means period equals total time divided by the number of oscillations, with the time on top. If you timed twenty swings, you divide the total time by twenty. Reporting the whole time as the period, or dividing the count by the time, both give the wrong size, so keep it as time divided by number of swings.",
    microExample: "25 oscillations in 40.0 s: period = 40.0 / 25 = 1.6 s (time over count, not 25 / 40).",
    figure: "fig-01-10-pendulum-setup.svg",
    check: {
      question: "A pendulum makes twenty swings in thirty seconds. How do you find the period?",
      answer: "Divide the total time by the number of swings, so thirty divided by twenty, which is one point five seconds. The time goes on top, not the count."
    }
  },
  {
    id: "meas-timing-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    label: "Timing one oscillation thought as good as timing many",
    belief: "You get just as accurate a period by timing a single oscillation.",
    tell: "The student times one swing and divides by nothing, and does not see why twenty swings would help.",
    whyItHappens: "If the stopwatch itself is accurate, students assume one reading is enough and do not think about their own reaction time.",
    reteach: "The problem is not the stopwatch, it is your reaction time when you start and stop it. That small delay is about the same whether you time one swing or twenty. If you time just one swing, the delay is a big share of a short time. If you time twenty swings and then divide by twenty, that same delay is spread out and becomes tiny per swing. So timing many oscillations makes each period far more accurate.",
    microExample: "A 0.2 s reaction slip on one swing is huge; spread over 20 swings it is about 0.01 s per swing.",
    figure: "fig-01-10-pendulum-setup.svg",
    check: {
      question: "Why is timing twenty oscillations better than timing just one?",
      answer: "Because your reaction time is about the same either way. Spread over twenty swings and then divided, it becomes a tiny error per swing, so the period is more accurate."
    }
  },
  {
    id: "meas-reaction-1",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "errors",
    label: "Reaction time misjudged as a fixed or unfixable error",
    belief: "Human reaction time is a fixed error, or one that cannot be reduced.",
    tell: "The student calls reaction time a zero error, or says nothing can be done about it.",
    whyItHappens: "Any error can feel permanent, and students may not know that spreading out and averaging repeats can shrink an error that varies each time.",
    reteach: "Human reaction time is a random error, not a fixed one. Each time you start and stop a stopwatch you are a little early or a little late, and it varies from go to go. Because it varies, you can reduce its effect. Take several readings and use the average, and time many swings at once rather than one. Those steps make the random error smaller. It is not a zero error, which would shift every reading the same way.",
    microExample: "Reaction time varies each go, so it is a random error; averaging repeats reduces it.",
    figure: null,
    check: {
      question: "Is the delay from human reaction time a random error or a fixed one, and can it be reduced?",
      answer: "It is a random error, because it varies each time. You can reduce its effect by taking several readings and using the average, and by timing many swings at once."
    }
  },
  {
    id: "meas-pendulum-factors",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    label: "Period thought to depend on the bob mass or the swing angle",
    belief: "A heavier bob or a wider swing changes the period of a pendulum.",
    tell: "The student expects a bigger swing or a heavier bob to give a longer period.",
    whyItHappens: "It feels natural that a heavier weight or a larger swing should take longer, since heavier and bigger usually mean slower in daily life.",
    reteach: "For a simple pendulum, the period does not depend on the mass of the bob or on the amplitude, which is the angle of swing. Swap in a heavier bob or start from a wider angle, and the period stays the same. What does change the period is the length of the pendulum. So neither the weight nor the size of the swing matters here, only the length does.",
    microExample: "Same length pendulum: doubling the bob mass or the swing angle leaves the period unchanged.",
    figure: "fig-01-11-pendulum-swing.svg",
    check: {
      question: "Does using a heavier bob or a wider swing change the period of a simple pendulum?",
      answer: "No, neither one changes the period. The period depends only on the length of the pendulum, not on the mass of the bob or the angle of swing."
    }
  },
  {
    id: "meas-pendulum-length",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    label: "Length thought to have no effect on the period",
    belief: "The length of a pendulum has no effect on its period.",
    tell: "The student changes the bob or the swing to alter the period and leaves the length alone, thinking length does not matter.",
    whyItHappens: "Once students learn that mass and amplitude do not matter, they may overshoot and assume length does not matter either.",
    reteach: "Length is the one thing that does change the period of a simple pendulum. A longer pendulum has a longer period, so it takes more time per swing, and a shorter pendulum has a shorter period. So if you want to change how long each swing takes, change the length of the string. The mass of the bob and the angle of swing leave the period alone, but the length is what controls it.",
    microExample: "Longer string gives a longer period; shorter string gives a shorter period (mass and angle do nothing).",
    figure: "fig-01-10-pendulum-setup.svg",
    check: {
      question: "Which change actually lengthens the period of a simple pendulum, a heavier bob or a longer string?",
      answer: "A longer string. Length is the one factor that changes the period, while the mass of the bob and the angle of swing do not."
    }
  }
];
