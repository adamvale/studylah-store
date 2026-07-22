import type { Misconception } from "@/lib/teaching/types";

// energy-misconceptions.ts
// Topic: O-Level Physics, Energy, Work and Power (topicKey "t6-energy-stores-and-transfers")
// The tutor's diagnostic brain: the classic ways students go wrong in this topic,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 07 - Energy, Work and Power.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in plain
// words for reading aloud. On-screen fields (label, belief, microExample) may use _ for
// subscript and ^ for superscript.

export const ENERGY_MISCONCEPTIONS: Misconception[] = [
  {
    id: "en-stores-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-stores-and-pathways",
    label: "Pathways mistaken for energy stores",
    belief: "Heating, waves and electricity are types of energy store.",
    tell: "The student lists heat, light, sound or electricity when asked to name an energy store, instead of the store the energy actually sits in.",
    whyItHappens: "Older lessons talked about heat energy, light energy and electrical energy, so those words feel like stores, when really they describe how energy travels.",
    reteach: "Keep two ideas apart. A store is where energy is held, like the kinetic store of a moving object or the chemical store of a fuel. A pathway is the route the energy takes when it moves, like mechanically, by heating, by waves, or electrically. So heating and electricity are pathways, not stores. When a question asks for the store, name where the energy rests, not how it got there.",
    microExample: "Kinetic and chemical potential are stores. Electrically and by heating are pathways (routes), not stores.",
    figure: "fig-07-02-energy-stores-waterfall.svg",
    check: {
      question: "Is being carried by an electric current a store or a pathway?",
      answer: "It is a pathway. The current is the route that carries the energy. The store would be something like the chemical store of the battery it came from."
    }
  },
  {
    id: "en-stores-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-stores-and-pathways",
    label: "Wrong energy store named for a situation",
    belief: "You name an object's energy store from what it could do next, not what it is doing now.",
    tell: "The student says a book on a high shelf has energy in its kinetic store because it might fall, instead of naming the gravitational potential store.",
    whyItHappens: "Students imagine what will happen next, so an object that is high up gets tagged with the motion it has not started yet.",
    reteach: "Name the store from the state the object is in right now. A book resting on a shelf is not moving, so it has no energy in its kinetic store. It is raised above the ground, so its energy sits in the gravitational potential store. Only once it is actually falling does energy move into the kinetic store. Look at what the object is doing at this moment, not what it might do later.",
    microExample: "A book on a high shelf: energy is in its gravitational potential store, not its kinetic store (it is not moving).",
    figure: null,
    check: {
      question: "A stretched catapult is held still before firing. Which store holds its energy?",
      answer: "The elastic potential store, because it is stretched. It is not moving, so nothing is in its kinetic store yet."
    }
  },
  {
    id: "en-transfer-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-stores-and-pathways",
    label: "Wrong transfer pathway chosen",
    belief: "A falling object transfers its energy by heating.",
    tell: "The student picks heating or waves for a transfer that is really a force moving something through a distance.",
    whyItHappens: "The four pathways are new names, and students reach for a familiar word like heating rather than matching the pathway to what is physically happening.",
    reteach: "Match the pathway to the action. If a force moves an object through a distance, that is the mechanical pathway. A falling stone is pulled down by gravity acting over a distance, so its energy is transferred mechanically. Heating is only for energy flowing because of a temperature difference, waves are for light or sound, and electrically is for a current in a circuit. Ask what is actually moving the energy along.",
    microExample: "A dropped stone transfers energy mechanically (a force acting over a distance), not by heating.",
    figure: "fig-07-04-store-boxes-transfer.svg",
    check: {
      question: "By which pathway does a kicked football receive its energy from your foot?",
      answer: "Mechanically, because your foot pushes the ball with a force over a short distance. It is not heating or waves."
    }
  },
  {
    id: "en-ke-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "kinetic-energy",
    label: "Kinetic energy treated as proportional to speed",
    belief: "If you double the speed of an object, you double the energy in its kinetic store.",
    tell: "The student scales the kinetic energy in step with the speed, so doubling the speed only doubles their answer.",
    whyItHappens: "Most quantities students meet grow in step with each other, so the squared speed in the kinetic energy formula is easy to overlook.",
    reteach: "In the kinetic energy formula the speed is squared, so the energy grows much faster than the speed. Kinetic energy equals one half times mass times speed squared. If you double the speed, you square the two, which is four, so the kinetic store becomes four times larger, not twice. Triple the speed and it becomes nine times larger. Always square the speed before you do anything else.",
    microExample: "Double the speed: E_k = 1/2 m (2v)^2 = 4 x (1/2 m v^2), so the kinetic store becomes 4 times larger, not 2 times.",
    figure: null,
    check: {
      question: "A car speeds up so that its speed triples. How many times larger does the energy in its kinetic store become?",
      answer: "Nine times larger, because you square the three. The speed is squared in the kinetic energy formula."
    }
  },
  {
    id: "en-ke-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "kinetic-energy",
    label: "The one half dropped from the kinetic energy formula",
    belief: "The kinetic store is m v^2, so there is no factor of one half.",
    tell: "The student computes mass times speed squared and forgets to halve it, so every kinetic energy answer comes out twice too big.",
    whyItHappens: "The mass times speed squared part is the memorable bit, and the small one half in front slips away when the formula is recalled quickly.",
    reteach: "The kinetic energy formula has a one half in front that must not be dropped. Kinetic energy equals one half times mass times speed squared. So after you square the speed and multiply by the mass, remember to take half of the result. Leaving out the one half doubles your answer every time. Write the one half down first so you do not lose it.",
    microExample: "m = 2 kg, v = 3 m/s: E_k = 1/2 x 2 x 3^2 = 9 J, not 2 x 3^2 = 18 J.",
    figure: null,
    check: {
      question: "A two kilogram ball moves at three metres per second. What is the energy in its kinetic store?",
      answer: "Nine joules. That is one half times two times three squared. Without the one half you would get eighteen, which is double the real value."
    }
  },
  {
    id: "en-ke-3",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "kinetic-energy",
    label: "Square root forgotten when finding speed from kinetic energy",
    belief: "Once you reach v^2, that number is the speed, so there is no need to take a square root.",
    tell: "The student rearranges to find the speed squared and then writes that value down as the speed itself.",
    whyItHappens: "After the hard rearranging is done, the answer looks finished, and the last step of taking the square root is easy to skip.",
    reteach: "When you use the kinetic energy formula to find a speed, you end up with the speed squared, not the speed. So there is one more step: take the square root at the end. For example, if the speed squared works out to be one hundred, the speed is the square root of one hundred, which is ten. Stopping at one hundred would give an answer that is far too large. Always finish by taking the square root.",
    microExample: "E_k = 25 J, m = 0.5 kg: v^2 = 2 x 25 / 0.5 = 100, so v = 10 m/s (take the square root, do not stop at 100).",
    figure: null,
    check: {
      question: "You work out that the speed squared is thirty six. What is the speed?",
      answer: "Six metres per second, because you take the square root of thirty six. The value thirty six was the speed squared, not the speed."
    }
  },
  {
    id: "en-massweight-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "mass-and-weight",
    label: "Mass and weight used interchangeably",
    belief: "Mass and weight are the same number, so a weight in newtons can be used straight as a mass in kilograms.",
    tell: "The student puts a weight in newtons into a formula that needs a mass in kilograms, without dividing by the gravitational field strength first.",
    whyItHappens: "In everyday life mass and weight are talked about as one thing, so the difference between kilograms and newtons is easy to forget.",
    reteach: "Mass and weight are different. Mass is in kilograms and never changes. Weight is a force in newtons, and it equals mass times the gravitational field strength. So if a question gives you a weight and you need a mass, divide the weight by the gravitational field strength first. For example, a weight of sixty newtons on Earth gives a mass of six kilograms. Check the unit before you substitute.",
    microExample: "A crate of weight 60 N has mass m = W / g = 60 / 10 = 6 kg, not 60 kg.",
    figure: null,
    check: {
      question: "An object weighs fifty newtons. Taking the gravitational field strength as ten newtons per kilogram, what is its mass?",
      answer: "Five kilograms, because mass is weight divided by the gravitational field strength. The fifty was a force in newtons, not a mass."
    }
  },
  {
    id: "en-pe-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "gravitational-potential-energy",
    label: "Slope length used instead of vertical height",
    belief: "The energy in the gravitational potential store uses the distance moved along the slope.",
    tell: "For an object pushed up a ramp, the student multiplies by the slope length rather than the vertical height.",
    whyItHappens: "The slope length is the distance the object actually travels, so it feels like the natural number to use, even though only the rise matters.",
    reteach: "For the gravitational potential store, only the vertical height counts, not the distance travelled along the slope. Gravitational potential energy equals mass times gravitational field strength times the height raised. So even if an object is pushed a long way up a gentle ramp, you use only how far it rose straight up. Find the vertical height first, then use that in the formula.",
    microExample: "Ramp slope 6 m, vertical height 3 m, weight 30 N: E_p = W x h = 30 x 3 = 90 J (use 3 m, not 6 m).",
    figure: "fig-07-06-block-slope-pe.svg",
    check: {
      question: "A box is pushed five metres up a ramp but only rises two metres straight up. Which distance goes into the gravitational potential store calculation?",
      answer: "The two metre vertical rise, not the five metres along the slope. Only the vertical height matters for gravitational potential energy."
    }
  },
  {
    id: "en-pe-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "gravitational-potential-energy",
    label: "The g mishandled in gravitational potential energy",
    belief: "In E_p = mgh you can leave out g, or you can multiply by g even when a weight is already given.",
    tell: "The student either drops the gravitational field strength, or multiplies a weight by it again, so the answer comes out ten times too small or ten times too big.",
    whyItHappens: "The gravitational field strength is a middle term that is easy to skip, and when a weight is given, students are unsure whether the g is already inside it.",
    reteach: "Handle the gravitational field strength carefully. When you start from a mass, gravitational potential energy is mass times gravitational field strength times height, so you must include the field strength once. When you start from a weight, the weight already contains the field strength, so gravitational potential energy is just weight times height. Include the field strength exactly once, never zero times and never twice.",
    microExample: "m = 8 kg, h = 6 m, g = 10 N/kg: E_p = mgh = 8 x 10 x 6 = 480 J (include g once, do not drop it or use it twice).",
    figure: "fig-07-05-lifting-pe.svg",
    check: {
      question: "A block of weight thirty newtons is raised three metres. Do you still multiply by the gravitational field strength?",
      answer: "No. The weight already includes it, so the energy is just weight times height, which is ninety joules. Multiplying by the field strength again would count it twice."
    }
  },
  {
    id: "en-work-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "work-done",
    label: "Work done even when nothing moves",
    belief: "A force always does work, even when the object it pushes does not move.",
    tell: "The student says work is done when someone holds a heavy load still, or pushes on a wall that does not budge.",
    whyItHappens: "Holding a heavy bag feels tiring, so it seems obvious that work is being done, even though the bag does not move.",
    reteach: "Work is done only when the force actually moves the object through a distance. Work done equals force times the distance moved in the direction of the force. If the object does not move, the distance is zero, so the work done is zero, no matter how hard the push feels. Your muscles do get tired holding a load, but in the physics sense no work is done on the load while it stays still.",
    microExample: "Holding a 50 N bag still: distance moved = 0, so W = F x d = 50 x 0 = 0 J.",
    figure: "fig-07-08-work-done-cases.svg",
    check: {
      question: "You push hard against a wall that does not move. How much work do you do on the wall?",
      answer: "Zero, because the wall does not move, so the distance is zero. A force with no movement does no work."
    }
  },
  {
    id: "en-work-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "work-done",
    label: "Wrong distance used for work done",
    belief: "Work done by a force uses any convenient distance, such as the vertical height.",
    tell: "For a force acting along a slope, the student multiplies by the vertical rise or the horizontal base instead of the distance moved along the force.",
    whyItHappens: "There are several distances in a slope problem, and students grab the one that is easiest to read rather than the one that lines up with the force.",
    reteach: "Work done uses the distance moved in the direction of the force. If a force acts along a slope, then the distance is the length moved along that slope, not the vertical rise or the horizontal base. So match the distance to the direction the force points. Only when the force is vertical, like lifting, do you use the vertical height.",
    microExample: "Force 5 N along a 5 m slope: W = 5 x 5 = 25 J (use the 5 m moved along the force, not the 3 m vertical rise).",
    figure: "fig-07-09-box-slope.svg",
    check: {
      question: "A force pushes a box along a ramp. Which distance do you use to find the work done by that force?",
      answer: "The distance moved along the ramp, in the same direction as the force, not the vertical height or the horizontal base."
    }
  },
  {
    id: "en-work-3",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "work-done",
    label: "Work confused with force",
    belief: "Work done is measured in newtons.",
    tell: "The student gives work done a unit of newtons, or reports the force value as the work done.",
    whyItHappens: "Work is found by multiplying a force, so the force and its newton unit stay in mind and get attached to the answer.",
    reteach: "Work done and force are different quantities with different units. Force is measured in newtons. Work done is energy transferred, so it is measured in joules. One joule is one newton times one metre. So after you multiply the force by the distance, the answer is in joules, not newtons. Give work done and energy the same unit, the joule.",
    microExample: "Work is measured in joules (J), where 1 J = 1 N m. The newton on its own is a unit of force.",
    figure: null,
    check: {
      question: "What is the unit of work done, and what is the unit of force?",
      answer: "Work done is in joules, and force is in newtons. Work done is energy transferred, so it shares the joule with energy."
    }
  },
  {
    id: "en-cons-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    label: "Energy destroyed by friction",
    belief: "Friction destroys energy, so the energy in a stopping object is gone for good.",
    tell: "The student says the kinetic energy of a sliding object is lost or used up once friction brings it to rest.",
    whyItHappens: "The object clearly slows and stops, so it looks as if its energy has vanished, rather than moving somewhere less obvious.",
    reteach: "Energy is never destroyed, it only moves. When friction stops a sliding object, its kinetic energy is transferred to the internal stores of the object and the surroundings, so they warm up a little. We call this energy dissipated, meaning spread out and no longer useful, but the same amount of energy is still there. The phrase energy loss means the energy has left the useful part of the system, not that it has been destroyed.",
    microExample: "A box slides to rest: its 40 J of kinetic store is transferred to internal stores, 40 J is still there, just spread out.",
    figure: "fig-07-07-ideal-pendulum.svg",
    check: {
      question: "A sliding book is stopped by friction. Where has the energy in its kinetic store gone?",
      answer: "Into the internal stores of the book and the surroundings, warming them slightly. The energy is dissipated, not destroyed."
    }
  },
  {
    id: "en-cons-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    label: "No energy at the highest point",
    belief: "At its highest point an object is momentarily still, so it has no energy at all there.",
    tell: "At the top of a throw or a swing the student says both the kinetic and the potential stores are empty.",
    whyItHappens: "The object is not moving at the top, and students link having no motion with having no energy of any kind.",
    reteach: "At the highest point the object is only briefly at rest, so its kinetic store is empty, but that is not the whole picture. Because it is at its greatest height, its gravitational potential store is at a maximum. The energy has simply moved from the kinetic store into the gravitational potential store. So the total energy is unchanged, it has just changed which store it sits in.",
    microExample: "Top of a throw: E_k = 0, but E_p is at its maximum, so the total energy is unchanged.",
    figure: "fig-07-17-pendulum-swing-abc.svg",
    check: {
      question: "A ball is momentarily still at the top of its flight. Does it really have no energy there?",
      answer: "No. Its kinetic store is empty, but its gravitational potential store is at a maximum, so it still holds plenty of energy."
    }
  },
  {
    id: "en-cons-3",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    label: "Heavier objects gain more speed falling",
    belief: "A heavier object released from the same height reaches the ground moving faster.",
    tell: "The student says the heavier of two objects dropped from the same height lands at a greater speed, when air resistance is ignored.",
    whyItHappens: "A heavier object really does hold more energy, so it seems it should also arrive moving faster, but the extra mass works both ways.",
    reteach: "With no air resistance, two objects dropped from the same height reach the ground at the same speed, whatever their masses. Using energy ideas, the gravitational potential store, mass times field strength times height, all turns into the kinetic store, one half times mass times speed squared. The mass appears on both sides, so it cancels out. That leaves a speed that depends only on the height and the field strength, not on the mass.",
    microExample: "Same height, no air resistance: mgh = 1/2 m v^2, the mass cancels, so v = sqrt(2gh) is the same for both.",
    figure: null,
    check: {
      question: "With no air resistance, a heavy stone and a light stone are dropped from the same height. Which lands moving faster?",
      answer: "Neither. They reach the ground at the same speed, because the mass cancels out when the potential store turns into the kinetic store."
    }
  },
  {
    id: "en-cons-4",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "conservation-of-energy",
    label: "Speed at the bottom depends on the slope",
    belief: "An object sliding down a steeper or longer slope reaches the bottom moving faster, even for the same drop.",
    tell: "The student says a block on a steeper frictionless slope arrives faster than one on a gentle slope of the same height.",
    whyItHappens: "A steep slope looks more dramatic and a long slope covers more distance, so it seems the speed at the bottom should differ.",
    reteach: "On a frictionless slope, the speed at the bottom depends only on the vertical drop, not on how steep or long the slope is. The gravitational potential store lost is mass times field strength times height, and this all becomes kinetic store. Since only the height appears, two slopes with the same vertical drop give the same final speed. A steeper slope reaches that speed sooner, but the speed at the bottom is the same.",
    microExample: "Steep or gentle, same drop h: 1/2 v^2 = gh, so v depends only on h, not on the slope length.",
    figure: "fig-07-06b-block-slope-QP.svg",
    check: {
      question: "Two frictionless slides have the same height but different steepness. Do objects reach the bottom of both at the same speed?",
      answer: "Yes. The final speed depends only on the vertical drop, so the same height gives the same speed, whatever the steepness."
    }
  },
  {
    id: "en-power-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "power",
    label: "Power confused with work or energy",
    belief: "Power is just the work done or the energy transferred, so the time taken does not matter.",
    tell: "The student reports the work done as the power, or says two machines doing the same work must be equally powerful.",
    whyItHappens: "Power and work are closely linked and both measured from the same job, so the role of time gets left out.",
    reteach: "Power is not the same as work. Power is how quickly work is done, or how quickly energy is transferred. Power equals work done divided by the time taken. So two machines can do exactly the same work, yet the faster one is more powerful because it takes less time. Always divide the work or energy by the time to get the power, and remember power is in watts while work is in joules.",
    microExample: "W = 600 J in t = 120 s: P = W / t = 600 / 120 = 5 W (divide by the time, do not stop at 600).",
    figure: null,
    check: {
      question: "Two cranes lift the same load to the same height, but one is quicker. Are they equally powerful?",
      answer: "No. The quicker crane is more powerful, because power is the work done divided by the time, and it took less time."
    }
  },
  {
    id: "en-power-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "power",
    label: "Time left in minutes in the power formula",
    belief: "You can put a time in minutes straight into the power formula.",
    tell: "The student divides the work by a number of minutes without first changing it into seconds.",
    whyItHappens: "The time is given in minutes in the question, so it feels natural to use it as it stands and forget that the watt is joules per second.",
    reteach: "Power is in watts, and one watt is one joule every second, so the time must be in seconds. Before you divide, change any minutes into seconds by multiplying by sixty. For example, two minutes is one hundred and twenty seconds. If you divide by the number of minutes instead, your power comes out far too large. Convert to seconds first, then divide.",
    microExample: "t = 2 min = 120 s: P = 600 / 120 = 5 W, not 600 / 2 = 300 W.",
    figure: null,
    check: {
      question: "A job takes three minutes. What time do you use in the power formula?",
      answer: "One hundred and eighty seconds, because three minutes is three times sixty. Power uses seconds, not minutes."
    }
  },
  {
    id: "en-eff-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    label: "Efficiency allowed above one hundred percent",
    belief: "A well-made machine can be more than one hundred percent efficient.",
    tell: "The student is happy to write an efficiency above one hundred percent, or says a perfect machine gives out more useful energy than it takes in.",
    whyItHappens: "It sounds like a great machine should give back more than it receives, so an efficiency over one hundred percent does not seem wrong.",
    reteach: "Efficiency can never be more than one hundred percent, because energy is conserved. A device cannot give out more useful energy than the total energy put into it, so the useful output is always less than or equal to the input. In the real world some energy is always dissipated, so the efficiency is always below one hundred percent. If your working gives a number above one hundred, that is a signal to check it.",
    microExample: "Input 500 J, useful output 400 J: efficiency = 400 / 500 x 100% = 80%, which is below 100%.",
    figure: "fig-07-12-sankey-efficiency.svg",
    check: {
      question: "A student calculates an efficiency of one hundred and twenty percent. What does that tell you?",
      answer: "That something has gone wrong, because efficiency cannot go above one hundred percent. A device cannot give out more useful energy than it takes in."
    }
  },
  {
    id: "en-eff-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    label: "Efficiency ratio turned upside down",
    belief: "Efficiency is the total input divided by the useful output.",
    tell: "The student divides the input by the useful output, so the efficiency comes out greater than one.",
    whyItHappens: "The two quantities look similar, and students are unsure which one goes on top, so they sometimes place the larger input on top.",
    reteach: "Efficiency is the useful output divided by the total input, then multiplied by one hundred to make a percentage. The useful output goes on top, and the total input goes on the bottom. This way the answer is always a fraction less than one, or below one hundred percent. If you divide the other way and get a number bigger than one, you have flipped the ratio, so swap them back.",
    microExample: "Input 500 J, useful 400 J: efficiency = useful / input = 400 / 500 = 80%, not 500 / 400 = 125%.",
    figure: "fig-07-12-sankey-efficiency.svg",
    check: {
      question: "Which quantity goes on top in the efficiency calculation, the useful output or the total input?",
      answer: "The useful output goes on top, divided by the total input. That keeps the answer at or below one hundred percent."
    }
  },
  {
    id: "en-eff-3",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "efficiency",
    label: "Useful output confused with wasted energy",
    belief: "The energy dissipated by a device is the same as its useful output.",
    tell: "When asked for the energy dissipated, the student gives the useful output instead, or the other way round.",
    whyItHappens: "Both numbers come out of the same energy split, so students grab whichever one they calculated first without checking which is the wasted part.",
    reteach: "The energy going into a device splits into two parts: the useful output and the dissipated energy that is wasted. They add up to the total input. So to find the dissipated energy, work out the useful output and subtract it from the total input. The useful part and the wasted part are different numbers, so read the question carefully to see which one it wants.",
    microExample: "25% efficient, 800 J in: useful = 200 J, so dissipated = 800 - 200 = 600 J (the wasted part is the larger share here).",
    figure: "fig-07-12-sankey-efficiency.svg",
    check: {
      question: "A device takes in one hundred joules and usefully delivers thirty. How much energy is dissipated?",
      answer: "Seventy joules, because the dissipated energy is the total input take away the useful output. The thirty joules is the useful part, not the wasted part."
    }
  },
  {
    id: "en-res-1",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-resources",
    label: "Renewable and non-renewable resources swapped",
    belief: "Nuclear fuel is renewable because a small amount lasts a long time.",
    tell: "The student labels nuclear fuel or fossil fuels as renewable, or calls wind and tides non-renewable.",
    whyItHappens: "Lasting a long time gets muddled with being replaced, so a fuel that is used slowly is mistaken for one that never runs out.",
    reteach: "A renewable resource is one that is naturally replaced as fast as we use it, like wind, tides, sunlight and hydropower. A non-renewable resource is one that will eventually run out, like coal, oil, gas and nuclear fuel. Nuclear fuel may last a long time, but it is still a fixed supply that is not replaced, so it is non-renewable. Ask whether nature refills it, not how long it lasts.",
    microExample: "Wind and tides are renewable. Coal, gas and nuclear fuel are non-renewable, they will run out.",
    figure: null,
    check: {
      question: "Is nuclear fuel a renewable or a non-renewable resource?",
      answer: "Non-renewable. It is a fixed supply that is not replaced, even though a small amount releases a lot of energy."
    }
  },
  {
    id: "en-res-2",
    topicKey: "t6-energy-stores-and-transfers",
    subtopic: "energy-resources",
    label: "Renewable assumed to mean pollution free",
    belief: "Any renewable resource is completely clean and causes no pollution.",
    tell: "The student says a biofuel produces no pollution simply because it is renewable.",
    whyItHappens: "Renewable and clean are often mentioned together, so students treat the two words as meaning exactly the same thing.",
    reteach: "Renewable and clean are not the same idea. Renewable means the resource is naturally replaced. Clean means it does not pollute. Many renewables like wind and solar are both, but not all are. A biofuel is renewable because we can grow more, yet burning it still releases pollution. So a resource being renewable does not promise that it is free of pollution. Check each property on its own.",
    microExample: "A biofuel is renewable, yet burning it still releases pollution, so renewable does not always mean clean.",
    figure: null,
    check: {
      question: "A biofuel is renewable. Does that mean it causes no pollution when burned?",
      answer: "No. It is renewable because we can grow more, but burning it still releases pollution. Renewable does not always mean clean."
    }
  }
];
