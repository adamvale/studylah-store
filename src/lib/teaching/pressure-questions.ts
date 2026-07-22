import type { TeachQuestion } from "@/lib/teaching/types";

// pressure-questions.ts
// Teaching question bank for O-Level Physics, Pressure (topicKey "t5-pressure").
// Every wrong option maps to the misconception it reveals (see pressure-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 06 - Pressure.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

export const PRESSURE_QUESTIONS: TeachQuestion[] = [
  {
    id: "pres-q-01",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    stem: "A crate of mass 80 kg stands on the floor. Its base has an area of 200 cm^2. Taking g = 10 N/kg, what pressure does it exert on the floor?",
    figure: null,
    options: ["40000 Pa", "4000 Pa", "4.0 Pa", "16 Pa"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-solid-weight", 2: "pres-solid-units", 3: "pres-solid-area-inverted" },
    walkthrough: [
      "First find the force pressing down, which is the weight.",
      "Weight is mass times gravity, so eighty times ten, which is eight hundred newtons.",
      "Change the area to square metres: two hundred square centimetres is nought point zero two zero square metres.",
      "Pressure is force divided by area, so eight hundred divided by nought point zero two zero.",
      "That gives forty thousand pascals."
    ],
    explain: "The force is the weight, eight hundred newtons, and the area must be in square metres, which is nought point zero two zero. Dividing gives forty thousand pascals. If you had used the mass of eighty you would have got four thousand, if you had left the area in square centimetres you would have got four, and multiplying instead of dividing gives sixteen, so each wrong answer points to a different slip."
  },
  {
    id: "pres-q-02",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    stem: "Two identical blocks have the same weight. Block Q rests on a smaller face than block P. Which block exerts the greater pressure on the floor?",
    figure: "fig-06-01-force-area-blocks.svg",
    options: [
      "Block Q, because the same force acts on a smaller area.",
      "Block P, because a larger contact area gives a larger pressure.",
      "Both the same, because the weights are equal.",
      "Block P, because it touches more of the floor."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-solid-area-inverted", 2: "pres-solid-force", 3: "pres-solid-area-inverted" },
    walkthrough: [
      "Pressure is force divided by area, so both the force and the area matter.",
      "The two weights are equal, so the force is the same for each block.",
      "Block Q rests on the smaller area.",
      "The same force on a smaller area gives a greater pressure, so block Q wins."
    ],
    explain: "With equal weights the force is the same, so the pressure is decided by the area. Block Q sits on the smaller face, and a smaller area gives a greater pressure. Thinking a larger area gives more pressure has it upside down, and saying they are equal forgets that pressure depends on the area, not just the force."
  },
  {
    id: "pres-q-03",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    stem: "A cabinet of weight 200 N stands on four equal feet, each of area 0.0010 m^2. What pressure does each foot exert on the floor?",
    figure: null,
    options: ["50000 Pa", "200000 Pa", "12500 Pa", "0.05 Pa"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-solid-share", 2: "pres-solid-share", 3: "pres-solid-area-inverted" },
    walkthrough: [
      "The weight is shared equally between the four feet.",
      "So each foot carries two hundred divided by four, which is fifty newtons.",
      "Each foot has an area of nought point nought nought one zero square metres.",
      "Pressure is force divided by area, so fifty divided by nought point nought nought one zero.",
      "That gives fifty thousand pascals."
    ],
    explain: "First share the two hundred newtons among the four feet to get fifty newtons on each, then divide by one foot's area to get fifty thousand pascals. Putting the whole weight through one foot gives two hundred thousand, and matching one foot's force with all four feet's area gives twelve thousand five hundred, both from mishandling the sharing. Multiplying instead of dividing gives the tiny value."
  },
  {
    id: "pres-q-04",
    topicKey: "t5-pressure",
    subtopic: "density",
    stem: "Two solid cubes are made of the same material. The larger cube has edges twice as long as the smaller cube. What is the ratio of the density of the larger cube to the smaller cube?",
    figure: "fig-06-14-cubes-scaling.svg",
    options: ["1 : 1", "2 : 1", "4 : 1", "8 : 1"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-density-size", 2: "pres-density-size", 3: "pres-density-size" },
    walkthrough: [
      "Density belongs to the material, not to the size of the piece.",
      "Doubling the edges makes the volume eight times bigger.",
      "The mass also becomes eight times bigger, since it is the same material.",
      "Mass divided by volume is unchanged, so the densities are equal, a ratio of one to one."
    ],
    explain: "Both cubes are the same material, so they share one density, giving a ratio of one to one. The bigger cube has eight times the mass, but also eight times the volume, so the two cancel. The other ratios come from thinking a bigger piece is somehow denser, but size never changes the density of a material."
  },
  {
    id: "pres-q-05",
    topicKey: "t5-pressure",
    subtopic: "density",
    stem: "A block of density 700 kg/m^3 is placed in water of density 1000 kg/m^3. What happens?",
    figure: "fig-06-02-float-sink.svg",
    options: [
      "It floats, because it is less dense than the water.",
      "It sinks, because most solid blocks sink in water.",
      "It floats only if it weighs less than the water around it.",
      "It sinks, because it is heavy."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-density-float", 2: "pres-density-float", 3: "pres-density-mass" },
    walkthrough: [
      "Whether an object floats depends on how its density compares with the liquid.",
      "The block's density is seven hundred and the water's is one thousand.",
      "Seven hundred is less than one thousand, so the block is less dense than the water.",
      "An object less dense than the liquid floats, so the block floats."
    ],
    explain: "Floating is decided by comparing densities, not weights. The block is less dense than the water, so it floats, whatever its actual weight. Saying solids just sink, or judging it by how heavy it is, both ignore the real rule, which is the comparison of the object's density with the liquid's density."
  },
  {
    id: "pres-q-06",
    topicKey: "t5-pressure",
    subtopic: "density",
    stem: "300 cm^3 of liquid P of density 1.2 g/cm^3 is mixed with 400 g of liquid Q of density 0.80 g/cm^3. What is the density of the mixture?",
    figure: null,
    options: ["0.95 g/cm^3", "1.0 g/cm^3", "1.9 g/cm^3", "2.53 g/cm^3"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-density-mixture", 2: "pres-density-mixture", 3: "pres-density-mixture" },
    walkthrough: [
      "Find the total mass first. Liquid P has a mass of one point two times three hundred, which is three hundred and sixty grams.",
      "Liquid Q is already given as four hundred grams, so the total mass is seven hundred and sixty grams.",
      "Now the total volume. Liquid Q has a volume of four hundred divided by nought point eight, which is five hundred cubic centimetres.",
      "The total volume is three hundred plus five hundred, which is eight hundred cubic centimetres.",
      "Density is total mass over total volume, so seven hundred and sixty over eight hundred, which is nought point nine five grams per cubic centimetre."
    ],
    explain: "For a mixture you use the total mass over the total volume. The masses add to seven hundred and sixty grams and the volumes add to eight hundred cubic centimetres, giving nought point nine five grams per cubic centimetre. Averaging the two densities gives one point zero, and dividing the total mass by only one of the volumes gives the larger wrong answers, so all the traps come from not using both totals."
  },
  {
    id: "pres-q-07",
    topicKey: "t5-pressure",
    subtopic: "density",
    stem: "A material has a density of 2680 kg/m^3. What is this density in g/cm^3?",
    figure: null,
    options: ["2.68 g/cm^3", "2680000 g/cm^3", "0.00268 g/cm^3", "26.8 g/cm^3"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-density-convert", 2: "pres-density-convert", 3: "pres-density-convert" },
    walkthrough: [
      "One gram per cubic centimetre is the same as one thousand kilograms per cubic metre.",
      "To go from kilograms per cubic metre to grams per cubic centimetre, you divide by one thousand.",
      "So take two thousand six hundred and eighty and divide by one thousand.",
      "That gives two point six eight grams per cubic centimetre."
    ],
    explain: "Since one gram per cubic centimetre equals one thousand kilograms per cubic metre, you divide by one thousand to convert this way. Two thousand six hundred and eighty divided by one thousand is two point six eight. Multiplying instead, or moving the point too far, gives the other answers, which are a thousand or more times out."
  },
  {
    id: "pres-q-08",
    topicKey: "t5-pressure",
    subtopic: "density",
    stem: "A large block of foam weighs 50 N. A small steel ball weighs 5 N. Which has the greater density?",
    figure: null,
    options: [
      "The steel ball, because its mass is packed into a tiny volume.",
      "The foam, because it weighs more.",
      "The foam, because it is bigger.",
      "They are the same, since weight and density mean the same thing."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-density-mass", 2: "pres-density-size", 3: "pres-density-mass" },
    walkthrough: [
      "Density compares mass with volume, so weight on its own does not decide it.",
      "The foam is large, so its mass is spread through a big volume.",
      "The steel ball is tiny, so its mass is squeezed into a very small volume.",
      "Packing mass into a small volume gives a high density, so the steel ball is denser."
    ],
    explain: "Density is about mass for a given volume, not weight on its own. The steel ball is small but packs its mass tightly, so it is far denser than the big airy foam, even though the foam weighs more. Judging by weight, or by size, misses that you must compare mass with the volume it fills."
  },
  {
    id: "pres-q-09",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    stem: "At a depth of 5 m, which liquid exerts the greater pressure on a diver, seawater of density 1030 kg/m^3 or fresh water of density 1000 kg/m^3?",
    figure: "fig-06-06-tank-jets.svg",
    options: [
      "Seawater, because it is denser.",
      "They are the same, because the depth is equal.",
      "Fresh water, because it flows more easily.",
      "It depends on how wide the container is."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-liquid-density", 2: "pres-liquid-density", 3: "pres-liquid-shape" },
    walkthrough: [
      "Pressure in a liquid is depth times density times gravity.",
      "The depth is the same for both, five metres, and gravity is the same.",
      "So the density decides which one presses harder.",
      "Seawater is denser than fresh water, so seawater exerts the greater pressure."
    ],
    explain: "At equal depth the density is what settles it, because pressure is depth times density times gravity. Seawater is denser, so it presses harder than fresh water at the same five metres. Thinking equal depth means equal pressure drops the density, and the width of the container never affects liquid pressure at all."
  },
  {
    id: "pres-q-10",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    stem: "The same liquid fills connected vessels of different shapes. Compare the pressure at points that are at the same depth in a wide vessel and in a narrow vessel.",
    figure: "fig-06-05-same-level-pressure.svg",
    options: [
      "The pressure is the same at both points.",
      "The pressure is greater in the wide vessel, because it holds more liquid.",
      "The pressure is greater in the narrow vessel.",
      "The pressure is greater wherever more liquid sits beside the point."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-liquid-shape", 2: "pres-liquid-shape", 3: "pres-liquid-shape" },
    walkthrough: [
      "Pressure in a liquid depends on the depth, the density and gravity.",
      "It does not depend on the shape or width of the container.",
      "Both points are at the same depth in the same liquid.",
      "So the pressure is the same at both points."
    ],
    explain: "Liquid pressure depends only on depth, density and gravity, so at the same depth in the same liquid the pressure is identical, wide vessel or narrow. This is why connected containers settle to one level. The amount of liquid sitting around a point does not raise the pressure, only the vertical height above it does."
  },
  {
    id: "pres-q-11",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    stem: "At a point deep inside a tank of water, in which direction does the water pressure act?",
    figure: "fig-06-04-liquid-depth.svg",
    options: [
      "In all directions equally.",
      "Only downward, because of the weight of water above.",
      "Only downward and sideways.",
      "Only in the direction the water is flowing."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-liquid-direction", 2: "pres-liquid-direction", 3: "pres-liquid-direction" },
    walkthrough: [
      "The pressure at a point in a liquid comes from the weight of liquid above.",
      "But the pushing itself is not only downward.",
      "At any point the pressure acts up, down and sideways, all with the same strength.",
      "So the water pressure acts in all directions equally."
    ],
    explain: "Although the pressure is caused by the weight of water above, it pushes in every direction equally at that depth, up, down and sideways. That is why water squirts sideways from a hole in the side of a can. Saying it acts only downward mistakes where the pressure comes from for the way it actually pushes."
  },
  {
    id: "pres-q-12",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    stem: "A tank holds water of density 1000 kg/m^3 to a depth of 250 cm. Taking g = 10 N/kg, what is the pressure on the base?",
    figure: null,
    options: ["25000 Pa", "2500000 Pa", "250000 Pa", "25 Pa"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-liquid-units", 2: "pres-liquid-units", 3: "pres-liquid-density" },
    walkthrough: [
      "First change the depth into metres, since the answer should be in pascals.",
      "Two hundred and fifty centimetres is two point five metres.",
      "Pressure is depth times density times gravity.",
      "So two point five times one thousand times ten, which is twenty five thousand pascals."
    ],
    explain: "The depth must be in metres, so two hundred and fifty centimetres becomes two point five metres, and the pressure is two point five times one thousand times ten, which is twenty five thousand pascals. Leaving the depth in centimetres gives values that are a hundred or ten times too big, and dropping the density of one thousand gives the tiny answer of twenty five."
  },
  {
    id: "pres-q-13",
    topicKey: "t5-pressure",
    subtopic: "total-pressure",
    stem: "An object is held at a depth of 6.0 m in an open liquid of density 750 kg/m^3. Atmospheric pressure is 1.0 x 10^5 Pa and g = 10 N/kg. What is the total pressure on the object?",
    figure: "fig-06-07-total-pressure.svg",
    options: ["1.45 x 10^5 Pa", "4.5 x 10^4 Pa", "1.0 x 10^5 Pa", "4.5 x 10^5 Pa"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-total-atm", 2: "pres-total-atm", 3: "pres-liquid-units" },
    walkthrough: [
      "First find the pressure from the liquid column, which is depth times density times gravity.",
      "That is six times seven hundred and fifty times ten, which is forty five thousand pascals.",
      "The object also feels the atmosphere pressing on the surface, one hundred thousand pascals.",
      "The total is the two added together, one hundred thousand plus forty five thousand.",
      "That gives one hundred and forty five thousand pascals."
    ],
    explain: "The total pressure is the atmosphere plus the liquid column. The liquid part is forty five thousand pascals and the atmosphere adds one hundred thousand, giving one hundred and forty five thousand pascals. Giving only the liquid part, or only the atmosphere, forgets that both press at once, and using the wrong depth units gives the ten times larger answer."
  },
  {
    id: "pres-q-14",
    topicKey: "t5-pressure",
    subtopic: "transmission-and-hydraulics",
    stem: "In a hydraulic press a force of 40 N is applied to a small piston of area 5.0 cm^2. The large piston has an area of 200 cm^2. Assuming no friction, what force does the large piston exert?",
    figure: "fig-06-09-hydraulic-press.svg",
    options: ["1600 N", "1.0 N", "40 N", "8000 N"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-hydraulic-ratio", 2: "pres-hydraulic-pressure", 3: "pres-hydraulic-ratio" },
    walkthrough: [
      "First find the pressure from the small piston, which is force divided by area.",
      "That is forty divided by five, which is eight newtons per square centimetre.",
      "The same pressure acts on the large piston.",
      "So the output force is the pressure times the large area, eight times two hundred.",
      "That gives one thousand six hundred newtons."
    ],
    explain: "The pressure is the same on both pistons, so find it from the small side, eight newtons per square centimetre, then multiply by the large area to get one thousand six hundred newtons. Scaling by the areas the wrong way round gives a force smaller than the input, thinking the force is unchanged gives forty, and forgetting to divide by the small area first gives eight thousand."
  },
  {
    id: "pres-q-15",
    topicKey: "t5-pressure",
    subtopic: "transmission-and-hydraulics",
    stem: "In a hydraulic press, how does the pressure on the large piston compare with the pressure on the small piston?",
    figure: "fig-06-08-pascal.svg",
    options: [
      "The pressure is the same on both pistons.",
      "The pressure is greater on the large piston.",
      "The pressure is greater on the large piston, because its force is greater.",
      "The pressure is greater on the small piston."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-hydraulic-pressure", 2: "pres-hydraulic-pressure", 3: "pres-hydraulic-pressure" },
    walkthrough: [
      "A pressure applied to an enclosed liquid is passed on equally to every part.",
      "So the same pressure acts on both pistons.",
      "The large piston does give a bigger force.",
      "That is only because the equal pressure acts on a bigger area, not because the pressure is bigger."
    ],
    explain: "The pressure is shared equally through the liquid, so it is the same on both pistons. The large piston puts out a bigger force purely because that equal pressure acts over its larger area. Mixing up the bigger output force with a bigger pressure is the trap here, force and pressure are not the same thing."
  },
  {
    id: "pres-q-16",
    topicKey: "t5-pressure",
    subtopic: "transmission-and-hydraulics",
    stem: "A hydraulic braking system works poorly when air leaks into the fluid. Why?",
    figure: null,
    options: [
      "Air is easily compressed, so some effort is wasted squashing it instead of being passed on.",
      "Air makes no difference, since the force is transmitted just the same.",
      "Air makes the liquid heavier, so the brakes need more force.",
      "Air cannot be compressed, so it blocks the pressure completely."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-hydraulic-air", 2: "pres-hydraulic-air", 3: "pres-hydraulic-air" },
    walkthrough: [
      "A hydraulic system works because the liquid is almost impossible to squash.",
      "Air, unlike the liquid, is easily squashed.",
      "So when you push, some effort just compresses the trapped air.",
      "That effort is wasted rather than passed on, so the output force drops."
    ],
    explain: "The liquid works because it barely compresses, so a push is passed straight through. Air is very compressible, so some of the effort squashes the trapped air instead of moving the far piston, and the braking force falls. Saying air makes no difference, or that air cannot be compressed, both miss why the trapped air weakens the system."
  },
  {
    id: "pres-q-17",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    stem: "The tube of a mercury barometer is replaced by a wider tube. What happens to the vertical height of the mercury column?",
    figure: "fig-06-10-barometer.svg",
    options: [
      "It stays the same.",
      "It rises.",
      "It falls.",
      "It rises in proportion to the width of the tube."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-baro-width", 2: "pres-baro-width", 3: "pres-baro-width" },
    walkthrough: [
      "The column height is set by the atmospheric pressure and the density of mercury.",
      "A wider tube does hold more mercury.",
      "But that mercury also presses on a bigger area, so the two effects cancel.",
      "So the vertical height stays the same."
    ],
    explain: "The height depends on the atmospheric pressure and the density of mercury, not on the width of the tube. A wider tube holds more mercury, but it also spreads over a bigger area, and these cancel, so the reading does not change. Only a change in atmospheric pressure, or in gravity, moves the column."
  },
  {
    id: "pres-q-18",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    stem: "A mercury barometer reads 76 cm. The tube is then tilted to one side. What vertical height of mercury does it now show?",
    figure: "fig-06-11-tilted-barometer.svg",
    options: [
      "76 cm.",
      "More than 76 cm, because the tube is now longer.",
      "The length of mercury measured along the tilted tube.",
      "Less than 76 cm."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-baro-tilt", 2: "pres-baro-tilt", 3: "pres-baro-tilt" },
    walkthrough: [
      "What balances the atmosphere is the vertical height of mercury.",
      "When the tube is tilted, the mercury runs further along the glass.",
      "But its straight up and down height does not change.",
      "So the barometer still shows seventy six centimetres of vertical height."
    ],
    explain: "Only the vertical height balances the atmosphere, and tilting does not change that, so it still reads seventy six centimetres. The mercury does stretch further along the slanted tube, but that longer slope length is not what you measure. Reading along the tube instead of straight up is the mistake here."
  },
  {
    id: "pres-q-19",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    stem: "A mercury barometer is carried from sea level to the top of a mountain, where the atmospheric pressure is lower. The vertical height of the mercury column will",
    figure: null,
    options: [
      "decrease.",
      "increase.",
      "stay the same, because atmospheric pressure is the same everywhere.",
      "increase, because there is more air higher up."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-baro-altitude", 2: "pres-baro-altitude", 3: "pres-baro-altitude" },
    walkthrough: [
      "Higher up the mountain there is less air above you.",
      "So the atmospheric pressure is lower there.",
      "It is the atmosphere that holds the mercury up.",
      "A lower atmospheric pressure supports a shorter column, so the height decreases."
    ],
    explain: "Up a mountain the air is thinner, so atmospheric pressure is lower, and since the atmosphere is what holds the mercury up, a shorter column balances it. So the column falls. Thinking the pressure is the same everywhere, or that there is more air higher up, both miss that the atmosphere thins as you climb."
  },
  {
    id: "pres-q-20",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    stem: "In a mercury barometer the atmospheric pressure is 76 cm Hg. Point A lies 22 cm below the top surface of the mercury column. What is the pressure at A?",
    figure: "fig-06-15-barometer-points.svg",
    options: ["22 cm Hg", "76 cm Hg", "98 cm Hg", "54 cm Hg"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-baro-vacuum", 2: "pres-baro-vacuum", 3: "pres-baro-vacuum" },
    walkthrough: [
      "The sealed space at the top of the column is a vacuum, so the pressure there is zero.",
      "To find the pressure at a point, measure the mercury above it, working down from the top surface.",
      "Point A is twenty two centimetres below that top surface.",
      "So the mercury above A is twenty two centimetres tall, and the pressure at A is twenty two centimetres of mercury."
    ],
    explain: "The pressure at a point is the vertical height of mercury above it, starting from zero at the empty top. Point A has twenty two centimetres of mercury above it, so the pressure is twenty two centimetres of mercury. Answers like seventy six or ninety eight come from treating the top of the column as atmospheric rather than as an empty vacuum."
  },
  {
    id: "pres-q-21",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    stem: "Why is mercury used in a barometer rather than water?",
    figure: "fig-06-10-barometer.svg",
    options: [
      "Mercury is very dense, so a short column balances the atmosphere; water would need a column about 10 m tall.",
      "Water would give the same 76 cm column as mercury.",
      "Mercury is lighter, so it rises more easily up the tube.",
      "The choice of liquid does not affect the height of the column."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-baro-liquid", 2: "pres-baro-liquid", 3: "pres-baro-liquid" },
    walkthrough: [
      "The liquid column has to press as hard as the atmosphere.",
      "Mercury is very dense, so only a short column, about seventy six centimetres, is needed.",
      "Water is much less dense, so it would have to be much taller to press just as hard.",
      "A water column would be about ten metres tall, which is far too tall to be practical."
    ],
    explain: "The column height depends on the density of the liquid. Mercury is very dense, so a short seventy six centimetre column balances the atmosphere, while low density water would need a column about ten metres tall. Thinking water gives the same height, or that the liquid does not matter, forgets that a less dense liquid needs a far taller column."
  },
  {
    id: "pres-q-22",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    stem: "In a mercury barometer the full column height h corresponds to a pressure of 1.2 x 10^5 Pa. A point X lies a distance h/4 below the top surface of the mercury. What is the pressure at X?",
    figure: "fig-06-15-barometer-points.svg",
    options: ["3.0 x 10^4 Pa", "1.2 x 10^5 Pa", "9.0 x 10^4 Pa", "0 Pa"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-baro-vacuum", 2: "pres-baro-vacuum", 3: "pres-baro-vacuum" },
    walkthrough: [
      "The top of the column is a vacuum, so the pressure there is zero.",
      "The pressure grows in step with the height of mercury below the top.",
      "Point X is one quarter of the full height down from the top.",
      "So the pressure at X is one quarter of the full pressure, which is thirty thousand pascals."
    ],
    explain: "Pressure grows from zero at the vacuum at the top, in proportion to the mercury above the point. At one quarter of the way down, the pressure is one quarter of one hundred and twenty thousand, which is thirty thousand pascals. Reading the full value, or measuring from the bottom instead of the top, comes from forgetting that the top is an empty vacuum at zero pressure."
  },
  {
    id: "pres-q-23",
    topicKey: "t5-pressure",
    subtopic: "manometer",
    stem: "A mercury manometer is connected to a gas supply. The mercury on the open side stands 9.0 cm higher than on the gas side. Atmospheric pressure is 76 cm Hg. What is the gas pressure, in cm Hg?",
    figure: "fig-06-12-manometer.svg",
    options: ["85 cm Hg", "9.0 cm Hg", "67 cm Hg", "76 cm Hg"],
    correct: 0,
    distractorMisconceptions: { 1: "pres-mano-atm", 2: "pres-mano-direction", 3: "pres-mano-direction" },
    walkthrough: [
      "The gas has pushed the mercury higher on the open side.",
      "That means the gas is pressing harder than the atmosphere.",
      "So the gas pressure is atmospheric pressure plus the height difference.",
      "That is seventy six plus nine, which is eighty five centimetres of mercury."
    ],
    explain: "Because the gas pushes the mercury up on the open side, the gas is above atmospheric, so you add the nine centimetres to the seventy six, giving eighty five centimetres of mercury. Reporting just the nine forgets the atmosphere, subtracting to get sixty seven goes the wrong way, and seventy six would only be right if the two levels were equal."
  },
  {
    id: "pres-q-24",
    topicKey: "t5-pressure",
    subtopic: "manometer",
    stem: "A manometer is connected to a gas supply. The liquid on the open side stands 18 cm above the level on the gas side. The gas pressure is",
    figure: "fig-06-12-manometer.svg",
    options: [
      "18 cm of liquid above atmospheric pressure.",
      "18 cm of liquid below atmospheric pressure.",
      "equal to atmospheric pressure.",
      "18 cm of liquid, with atmospheric pressure ignored."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "pres-mano-direction", 2: "pres-mano-direction", 3: "pres-mano-atm" },
    walkthrough: [
      "Look at which side the liquid has been pushed higher.",
      "The liquid is higher on the open side, so the gas has pushed it up there.",
      "That means the gas is pressing harder than the atmosphere.",
      "So the gas pressure is eighteen centimetres of liquid above atmospheric pressure."
    ],
    explain: "The liquid is higher on the open side, so the gas is the stronger side and its pressure is eighteen centimetres of liquid above atmospheric. Reading it as below atmospheric gets the direction backwards, calling it equal ignores the height difference, and giving just the eighteen centimetres forgets that the reading is measured from atmospheric pressure, not from zero."
  }
];
