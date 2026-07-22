import type { Misconception } from "@/lib/teaching/types";

// pressure-misconceptions.ts
// Topic: O-Level Physics, Pressure (topicKey "t5-pressure").
// The tutor's diagnostic brain: the classic ways students go wrong in Pressure,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 06 - Pressure.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

export const PRESSURE_MISCONCEPTIONS: Misconception[] = [
  {
    id: "pres-solid-force",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    label: "Pressure treated as just the force",
    belief: "The bigger the force, the bigger the pressure, no matter the area.",
    tell: "The student compares only the forces or weights and ignores the area of contact when deciding which pressure is greater.",
    whyItHappens: "In everyday talk a big push means a big effect, so students latch onto the force and forget that pressure also cares about how that force is spread out.",
    reteach: "Pressure is not the force on its own, it is the force divided by the area it presses on. So two pushes with exactly the same force can give very different pressures. Spread the force over a large area and the pressure is small, squeeze it onto a tiny area and the pressure is large. Always ask two questions, how big is the force, and how small is the area it acts on.",
    microExample: "Same weight on two faces: P = F/A, so the block on the smaller area has the greater pressure, even though F is equal.",
    figure: "fig-06-01-force-area-blocks.svg",
    check: {
      question: "Two identical bricks have the same weight. One lies on its wide face and one stands on its narrow end. Do they press on the floor with the same pressure?",
      answer: "No. The weight is the same, but the one on the narrow end presses on a smaller area, so it gives a greater pressure."
    }
  },
  {
    id: "pres-solid-area-inverted",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    label: "Larger area read as larger pressure",
    belief: "Spreading a force over a bigger area gives a bigger pressure.",
    tell: "The student multiplies force by area, or picks the object with the largest contact area as the one with the greatest pressure.",
    whyItHappens: "Students remember that force and area both matter, but they attach them the wrong way round and treat a bigger area as helping rather than reducing the pressure.",
    reteach: "Area sits underneath in the formula, because pressure is force divided by area. That means a larger area gives a smaller pressure, not a larger one. This is why snowshoes and wide tractor tyres spread the load and stop you sinking, while a sharp knife or a thin needle concentrates the force onto a tiny area to give a huge pressure. Bigger area means gentler pressure.",
    microExample: "F = 800 N. On A = 0.020 m^2, P = 40000 Pa. On A = 0.10 m^2, P = 8000 Pa. The larger area gives the smaller pressure.",
    figure: "fig-06-01-force-area-blocks.svg",
    check: {
      question: "You press with the same force using the flat of your hand and then using one fingertip. Which gives the greater pressure?",
      answer: "The fingertip, because the same force acts on a much smaller area. A larger area would give a smaller pressure."
    }
  },
  {
    id: "pres-solid-units",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    label: "Area left in square centimetres",
    belief: "You can put an area in square centimetres straight into pressure equals force divided by area.",
    tell: "The student divides a force in newtons by an area still written in square centimetres and reports the answer as if it were in pascals.",
    whyItHappens: "The area is often given in square centimetres in the question, so it feels natural to use it as it is, and the need to change to square metres is easy to forget.",
    reteach: "To get pressure in pascals, the area has to be in square metres first. One square centimetre is only one ten thousandth of a square metre, so the numbers change a lot. Change the area to square metres before you divide, and then force in newtons over area in square metres gives you pressure in pascals. Convert first, then substitute.",
    microExample: "200 cm^2 = 200 x 10^-4 m^2 = 0.020 m^2, so use 0.020, not 200, in P = F/A.",
    figure: null,
    check: {
      question: "Before working out a pressure in pascals, what must you do with an area given in square centimetres?",
      answer: "Change it into square metres first. For example, two hundred square centimetres becomes nought point zero two zero square metres."
    }
  },
  {
    id: "pres-solid-weight",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    label: "Mass used in place of weight",
    belief: "When an object presses down, you can use its mass in kilograms as the force.",
    tell: "The student puts a mass straight into pressure equals force divided by area without first turning it into a weight.",
    whyItHappens: "Mass and weight feel like the same thing in daily life, so the step of multiplying the mass by the gravitational field strength gets skipped.",
    reteach: "The force pressing down is the weight, not the mass. To get the weight you multiply the mass by the gravitational field strength, about ten newtons for every kilogram. So an eighty kilogram object has a weight of about eight hundred newtons, and it is that eight hundred newtons you divide by the area. Find the weight first, then work out the pressure.",
    microExample: "m = 80 kg, so weight W = mg = 80 x 10 = 800 N. Use 800 N in P = F/A, not 80.",
    figure: null,
    check: {
      question: "An object has a mass of fifty kilograms. What force does it press down with, taking gravity as ten newtons per kilogram?",
      answer: "About five hundred newtons, because the weight is the mass times the gravitational field strength. You use that weight, not the fifty, as the force."
    }
  },
  {
    id: "pres-solid-share",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-solids",
    label: "Weight not shared among the contact points",
    belief: "When an object stands on several legs or feet, the whole weight presses through each one.",
    tell: "The student divides the full weight by one small foot's area, or matches the force on a single foot with the area of all the feet.",
    whyItHappens: "Students focus on one contact point and forget that the total weight is shared out between all of the feet touching the ground.",
    reteach: "When the weight rests on several equal feet, each foot carries only its share of the load. So first split the total weight equally between the feet to find the force on one foot, then divide that share by the area of one foot. Keep the pair matched, the force on one foot goes with the area of one foot. Sharing the load is the step that is easy to miss.",
    microExample: "W = 200 N on 4 legs: each carries 200 / 4 = 50 N. One leg area 0.0010 m^2, so P = 50 / 0.0010 = 50000 Pa.",
    figure: null,
    check: {
      question: "A table weighing four hundred newtons stands on four equal legs. What weight presses down through each single leg?",
      answer: "One hundred newtons, because the four hundred newtons is shared equally among the four legs."
    }
  },
  {
    id: "pres-density-size",
    topicKey: "t5-pressure",
    subtopic: "density",
    label: "Bigger piece read as denser",
    belief: "A larger lump of a material has a greater density than a small lump of the same material.",
    tell: "The student says the bigger cube or block is denser just because it has more mass or more volume.",
    whyItHappens: "A bigger piece really does weigh more, so students tie heaviness to density and forget that the volume grows by exactly the same factor.",
    reteach: "Density belongs to the material, not to how much of it you have. A bigger piece has more mass, but it also fills more volume, and the two grow together so the mass for each cubic metre stays the same. A small nail and a huge girder of the same steel have the same density. So cutting a block in half, or gluing two together, does not change the density at all.",
    microExample: "Double a cube's edges: mass x8 and volume x8, so density = m/V is unchanged. The big cube and small cube share one density.",
    figure: "fig-06-14-cubes-scaling.svg",
    check: {
      question: "You have a small marble and a large marble made of exactly the same glass. Which one has the greater density?",
      answer: "Neither. They have the same density, because density depends on the material, not on how big the piece is."
    }
  },
  {
    id: "pres-density-mass",
    topicKey: "t5-pressure",
    subtopic: "density",
    label: "Heavier taken as denser",
    belief: "Whichever object weighs more must be the denser one.",
    tell: "The student picks the heavier object as the denser one without checking the volumes.",
    whyItHappens: "The words heavy and dense get muddled, so students judge density by weight alone and ignore how much space the object takes up.",
    reteach: "Density is mass compared with volume, so weight on its own does not settle it. A huge block of foam can weigh far more than a tiny steel ball, yet the steel is far denser because its mass is packed into a tiny volume. To compare densities fairly, you have to look at the mass for the same amount of volume. Heavier does not always mean denser.",
    microExample: "Foam block: 50 N but large volume. Steel ball: 5 N but tiny volume. The lighter steel ball has the greater density.",
    figure: null,
    check: {
      question: "A large sponge weighs more than a small iron nail. Does that make the sponge the denser one?",
      answer: "No. The sponge is bigger, so it fills much more volume. The iron nail packs its mass into a tiny space, so the nail is denser."
    }
  },
  {
    id: "pres-density-convert",
    topicKey: "t5-pressure",
    subtopic: "density",
    label: "Density unit converted the wrong way",
    belief: "You change grams per cubic centimetre and kilograms per cubic metre by multiplying or dividing by any factor you like.",
    tell: "The student multiplies when they should divide by one thousand, or moves the point the wrong way, so the density is a thousand times too big or too small.",
    whyItHappens: "There are two units in the ratio changing at once, mass and volume, so students are unsure which way the factor of one thousand goes.",
    reteach: "The link to remember is that one gram per cubic centimetre equals one thousand kilograms per cubic metre. So to go from grams per cubic centimetre to kilograms per cubic metre you multiply by one thousand, and to go the other way you divide by one thousand. Water is a handy check, since it is one gram per cubic centimetre and also one thousand kilograms per cubic metre.",
    microExample: "2680 kg/m^3 -> divide by 1000 -> 2.68 g/cm^3. And 0.80 g/cm^3 -> multiply by 1000 -> 800 kg/m^3.",
    figure: null,
    check: {
      question: "Water has a density of one gram per cubic centimetre. What is that in kilograms per cubic metre?",
      answer: "One thousand kilograms per cubic metre, because one gram per cubic centimetre is one thousand kilograms per cubic metre."
    }
  },
  {
    id: "pres-density-float",
    topicKey: "t5-pressure",
    subtopic: "density",
    label: "Floating judged by weight, not density",
    belief: "Heavy things always sink and light things always float.",
    tell: "The student decides whether an object floats by how heavy it feels, rather than by comparing its density with the liquid's.",
    whyItHappens: "Small light things often do float and heavy things often do sink, so weight looks like the rule until you meet a heavy ship or a tiny sinking pebble.",
    reteach: "Whether something floats depends on how its density compares with the liquid, not on its weight. If the object is less dense than the liquid it floats, if it is denser it sinks, and if the densities match it stays at any level. That is why a huge steel ship floats while a small steel bolt sinks, the ship's average density is low because of all the air inside it. Compare densities, not weights.",
    microExample: "Object density 700 kg/m^3 in water of 1000 kg/m^3: 700 < 1000, so it floats, whatever its total weight.",
    figure: "fig-06-02-float-sink.svg",
    check: {
      question: "A block has a density of eight hundred kilograms per cubic metre and is placed in water of one thousand. Does it float or sink?",
      answer: "It floats, because its density is less than the water's. Its actual weight does not decide it, the comparison of densities does."
    }
  },
  {
    id: "pres-density-mixture",
    topicKey: "t5-pressure",
    subtopic: "density",
    label: "Mixture density found by averaging",
    belief: "The density of a mixture is just the average of the two densities.",
    tell: "The student adds the two densities and divides by two, instead of using the total mass over the total volume.",
    whyItHappens: "The word average pulls students towards averaging the density values, and that shortcut only happens to work when equal volumes are mixed, which is rare.",
    reteach: "For a mixture, work out the total mass of all the parts and the total volume of all the parts, then divide the total mass by the total volume. Averaging the two densities only works by luck, when the volumes happen to be equal. The safe way is to find each mass, add them, find each volume, add them, and divide the one total by the other.",
    microExample: "360 g of P (300 cm^3) with 400 g of Q (500 cm^3): density = (360 + 400) / (300 + 500) = 760 / 800 = 0.95 g/cm^3.",
    figure: null,
    check: {
      question: "You mix a little of a dense liquid with a lot of a light liquid. Can you find the mixture's density just by averaging the two densities?",
      answer: "Not usually. You add up the total mass and the total volume and divide. Averaging only works when equal volumes are mixed."
    }
  },
  {
    id: "pres-liquid-shape",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    label: "Liquid pressure tied to the container shape",
    belief: "A wider container, or one holding more liquid, gives a greater pressure at the same depth.",
    tell: "The student says the pressure is greater in the broad part of a vessel, or wherever there is more liquid sitting around.",
    whyItHappens: "More liquid looks like it should push harder, so students expect a fat container or a larger volume to raise the pressure.",
    reteach: "Pressure in a liquid depends only on the depth, the density and gravity, not on the shape or width of the container. At the same depth in the same liquid the pressure is identical, whether the vessel is a thin tube or a wide tank. This is why connected containers of all shapes settle to the same level. Only the vertical height of liquid above the point matters, not how much liquid is beside it.",
    microExample: "Same liquid, same depth h: P = h rho g is equal in a narrow tube and a wide tank, since only h, rho and g appear.",
    figure: "fig-06-05-same-level-pressure.svg",
    check: {
      question: "At the same depth in the same liquid, is the pressure greater in a wide tank than in a narrow tube?",
      answer: "No. The pressure is the same, because it depends only on the depth, the density and gravity, not on the width of the container."
    }
  },
  {
    id: "pres-liquid-direction",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    label: "Liquid pressure thought to act only downward",
    belief: "The pressure in a liquid pushes only downward, because of the weight above.",
    tell: "The student marks the liquid pressure at a point as acting straight down and nowhere else.",
    whyItHappens: "The pressure comes from the weight of liquid above, which pulls down, so students expect the push to point only downward too.",
    reteach: "At any point in a liquid the pressure acts in every direction, not just downward. It pushes down, up and sideways, all with the same strength at that depth. That is why a submarine is squeezed from all sides and why water spurts sideways out of a hole in the side of a can. The weight above sets the size of the pressure, but the pushing itself happens in all directions.",
    microExample: "At depth h the pressure P = h rho g acts up, down and sideways equally, not only downward.",
    figure: "fig-06-04-liquid-depth.svg",
    check: {
      question: "At a point deep in a tank of water, in which directions does the water pressure act?",
      answer: "In all directions equally, up, down and sideways. It is not only downward, even though it comes from the weight of water above."
    }
  },
  {
    id: "pres-liquid-density",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    label: "Depth used but density ignored",
    belief: "At the same depth every liquid gives the same pressure, whatever it is made of.",
    tell: "The student compares only the depths and forgets that a denser liquid gives a greater pressure, or drops the density from pressure equals rho g h.",
    whyItHappens: "Depth is the change students notice most, so they treat it as the whole story and let the density slip out of the calculation.",
    reteach: "Pressure in a liquid is depth times density times gravity, so the density matters just as much as the depth. At the same depth a denser liquid presses harder, because each layer above carries more mass. That is why seawater presses a little harder than fresh water at the same depth, and why mercury, which is very dense, presses far harder than water. Keep the density in, never just depth times gravity.",
    microExample: "At 5 m: seawater P = 5 x 1030 x 10, fresh water P = 5 x 1000 x 10. Same depth, but seawater gives the greater pressure.",
    figure: "fig-06-06-tank-jets.svg",
    check: {
      question: "At the same depth, does seawater or fresh water press harder on a diver?",
      answer: "Seawater, because it is denser. The pressure is depth times density times gravity, so the denser liquid wins at equal depth."
    }
  },
  {
    id: "pres-liquid-units",
    topicKey: "t5-pressure",
    subtopic: "pressure-in-liquids",
    label: "Depth left in centimetres",
    belief: "You can put a depth in centimetres straight into pressure equals rho g h.",
    tell: "The student uses a depth still in centimetres, so the pressure comes out a hundred times too large.",
    whyItHappens: "The depth is often written in centimetres, so it feels ready to use, and the switch to metres before substituting is easy to forget.",
    reteach: "For a pressure in pascals the depth has to be in metres, with the density in kilograms per cubic metre and gravity in newtons per kilogram. So change the depth to metres first. Two hundred and fifty centimetres is two point five metres. Convert the depth, then multiply by the density and by gravity, and the answer lands in pascals.",
    microExample: "250 cm = 2.5 m, so P = 2.5 x 1000 x 10 = 25000 Pa, not 250 x 1000 x 10.",
    figure: null,
    check: {
      question: "Before using pressure equals rho g h, what should you do with a depth given in centimetres?",
      answer: "Change it to metres first. For example, two hundred and fifty centimetres becomes two point five metres before you substitute."
    }
  },
  {
    id: "pres-total-atm",
    topicKey: "t5-pressure",
    subtopic: "total-pressure",
    label: "Atmospheric pressure left out of the total",
    belief: "The total pressure on an object under an open liquid is just the pressure of the liquid, rho g h.",
    tell: "The student gives only the liquid part, or only the atmospheric part, when the question asks for the total pressure.",
    whyItHappens: "In many problems the atmosphere is told to be ignored, so students forget it counts when the question actually asks for the total.",
    reteach: "An object sitting in an open liquid feels two pushes at once, the atmosphere pressing down on the surface, and the liquid column above it. The total pressure is the two added together, atmospheric pressure plus depth times density times gravity. So work out the liquid part with the formula, then add the atmospheric pressure on top. Leave the atmosphere out only when the question tells you to.",
    microExample: "At 6 m in liquid of 750 kg/m^3: liquid part = 6 x 750 x 10 = 45000 Pa. Total = 1.0 x 10^5 + 45000 = 1.45 x 10^5 Pa.",
    figure: "fig-06-07-total-pressure.svg",
    check: {
      question: "An object rests under an open pool of water. What two pressures add together to give the total pressure on it?",
      answer: "The atmospheric pressure pushing on the surface, and the pressure of the water column above, which is depth times density times gravity."
    }
  },
  {
    id: "pres-hydraulic-pressure",
    topicKey: "t5-pressure",
    subtopic: "transmission-and-hydraulics",
    label: "Pressure thought to grow across a hydraulic press",
    belief: "The wide piston in a hydraulic press feels a greater pressure than the narrow one.",
    tell: "The student says the large piston has more pressure because it puts out more force.",
    whyItHappens: "The output force really is larger, so students assume the pressure must be larger there too, mixing up force with pressure.",
    reteach: "In a hydraulic press it is the pressure that is the same everywhere in the liquid, not the force. A small force on the narrow piston sets up a pressure, and that very same pressure acts on the wide piston. The wide piston gives a bigger force only because that equal pressure acts over its bigger area. So the pressure is shared equally, and it is the area that turns a small force into a large one.",
    microExample: "P is equal on both pistons. F_2 = P x A_2, so the larger area gives the larger force, while the pressure stays the same.",
    figure: "fig-06-08-pascal.svg",
    check: {
      question: "In a hydraulic press, is the pressure on the large piston bigger than on the small piston?",
      answer: "No. The pressure is the same on both. The large piston gives a bigger force only because that equal pressure acts on a bigger area."
    }
  },
  {
    id: "pres-hydraulic-ratio",
    topicKey: "t5-pressure",
    subtopic: "transmission-and-hydraulics",
    label: "Hydraulic force ratio used upside down",
    belief: "To find the output force you scale the input force by the small area over the large area.",
    tell: "The student multiplies the input force by the wrong area ratio and gets an output force smaller than the input, or forgets to divide by the small area at all.",
    whyItHappens: "There are two areas and two forces to keep track of, so the ratio gets flipped and the force comes out shrinking instead of growing.",
    reteach: "The rule is that the pressure is equal, so the input force over the input area equals the output force over the output area. To find the output force, first get the pressure by dividing the input force by the small area, then multiply that pressure by the large area. The output force should come out larger, because the large area is bigger. If your answer is smaller than the input force, the ratio has been flipped.",
    microExample: "F_1 = 40 N on A_1 = 5.0 cm^2: P = 40 / 5.0 = 8 N/cm^2. F_2 = P x A_2 = 8 x 200 = 1600 N.",
    figure: "fig-06-09-hydraulic-press.svg",
    check: {
      question: "A force presses on the small piston of a hydraulic press. Should the force on the large piston come out bigger or smaller?",
      answer: "Bigger. You find the pressure from the small piston, then multiply by the larger area, so the output force is larger than the input."
    }
  },
  {
    id: "pres-hydraulic-air",
    topicKey: "t5-pressure",
    subtopic: "transmission-and-hydraulics",
    label: "Trapped air thought not to matter",
    belief: "A little air in the hydraulic liquid makes no difference to how the press works.",
    tell: "The student says the system works just as well with air in it, or treats the air as if it passes the pressure on like the liquid.",
    whyItHappens: "Both air and liquid are fluids that fill the space, so students expect them to behave the same when a force is applied.",
    reteach: "A hydraulic system works because the liquid is almost impossible to squash, so a push is passed straight on. Air is easy to squash, so if air gets in, some of the effort just squeezes the trapped air smaller instead of moving the far piston. That wastes the effort and the output force drops. The liquid must stay free of air for the press to pass the pressure on properly.",
    microExample: "Air is compressible: some applied effort compresses the trapped air instead of being transmitted, so the output force falls.",
    figure: null,
    check: {
      question: "Why does a hydraulic brake work poorly if air leaks into the fluid?",
      answer: "Because air is easily squashed, so some of the effort compresses the trapped air instead of being passed on, and the output force drops."
    }
  },
  {
    id: "pres-baro-width",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    label: "Barometer height tied to tube width",
    belief: "Making the barometer tube wider or narrower changes the height of the mercury column.",
    tell: "The student expects a fatter tube to hold a taller or shorter column, or thinks the width sets the reading.",
    whyItHappens: "A wider tube clearly holds more mercury, so students expect the extra mercury to change the height as well.",
    reteach: "The height of the mercury column is set by the atmospheric pressure and the density of mercury, not by how wide the tube is. A wider tube holds more mercury, but that mercury also presses on a bigger area, and the two effects cancel, so the vertical height stays the same. Only a change in the atmospheric pressure, or in gravity, moves the reading. The width of the tube does not.",
    microExample: "Widen the tube: more mercury, but larger area too, so P = h rho g still balances at the same height h of 76 cm.",
    figure: "fig-06-10-barometer.svg",
    check: {
      question: "A barometer tube is swapped for a wider one. What happens to the vertical height of the mercury column?",
      answer: "It stays the same. The height depends on the atmospheric pressure and the density of mercury, not on the width of the tube."
    }
  },
  {
    id: "pres-baro-tilt",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    label: "Tilting the tube thought to change the reading",
    belief: "Tilting a barometer tube changes the length of mercury it reads.",
    tell: "The student measures the mercury along the slope of a tilted tube instead of taking its vertical height.",
    whyItHappens: "When the tube is tilted the mercury does stretch further along the glass, so students read that longer slope length as the answer.",
    reteach: "What balances the atmosphere is the vertical height of mercury, the straight up and down drop, not the length measured along a slanted tube. When you tilt the tube the mercury runs further along the glass, but its vertical height stays at seventy six centimetres. So the reading does not change when you tilt it. Always measure the vertical height, however the tube is leaning.",
    microExample: "Tube tilted: length along the glass grows, but the vertical height stays 76 cm, so the pressure reading is unchanged.",
    figure: "fig-06-11-tilted-barometer.svg",
    check: {
      question: "A barometer reads seventy six centimetres. You tilt the tube to one side. What vertical height of mercury does it now show?",
      answer: "Still seventy six centimetres. Only the vertical height matters, and tilting does not change that, even though the mercury runs further along the glass."
    }
  },
  {
    id: "pres-baro-altitude",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    label: "Mercury column thought to rise up a mountain",
    belief: "Carrying a barometer up a mountain makes the mercury column rise, or leaves it unchanged.",
    tell: "The student says the column goes up, or stays the same, when the barometer is taken to a high place.",
    whyItHappens: "Students may think there is more atmosphere pressing higher up, or that atmospheric pressure is the same everywhere, so they miss that the air thins with height.",
    reteach: "Higher up a mountain there is less air above you, so the atmospheric pressure is lower. Since it is the atmosphere that holds the mercury up, a lower atmospheric pressure supports a shorter column. So the mercury column falls as you climb, it does not rise and it does not stay the same. Barometers use this to work out altitude.",
    microExample: "Up a mountain: atmospheric pressure is lower, so a shorter column of mercury balances it and the reading drops below 76 cm.",
    figure: null,
    check: {
      question: "A barometer is carried up a tall mountain where the air is thinner. What happens to the height of the mercury column?",
      answer: "It falls, because the atmospheric pressure is lower up there, so a shorter column of mercury is enough to balance it."
    }
  },
  {
    id: "pres-baro-vacuum",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    label: "Top of the barometer thought to hold pressure",
    belief: "The space above the mercury, and the top of the column, are at atmospheric pressure.",
    tell: "The student measures the pressure at a point down from atmospheric rather than from the empty top, so the values come out too high.",
    whyItHappens: "Students expect every part of the tube to feel the atmosphere, and forget that the sealed space above the mercury is an empty vacuum with no pressure.",
    reteach: "The sealed space at the very top of the barometer is a vacuum, so the pressure there is zero. To find the pressure at a point, measure the vertical height of mercury above that point, working down from the top surface of the column. Every centimetre of mercury you go down adds to the pressure, starting from zero at the top. So a point one quarter of the way down has one quarter of the full pressure, not the full atmospheric value.",
    microExample: "Full column = 1.2 x 10^5 Pa. A point at one quarter of the height below the top: P = (1/4) x 1.2 x 10^5 = 3.0 x 10^4 Pa.",
    figure: "fig-06-15-barometer-points.svg",
    check: {
      question: "What is the pressure in the sealed space right at the top of a mercury barometer?",
      answer: "It is zero, because that space is a vacuum. The pressure grows as you go down the mercury from that empty top."
    }
  },
  {
    id: "pres-baro-liquid",
    topicKey: "t5-pressure",
    subtopic: "atmospheric-and-barometer",
    label: "Any liquid thought to give the same column",
    belief: "A water barometer would show the same column height as a mercury one.",
    tell: "The student thinks the choice of liquid does not affect the height, or that water would also stand at seventy six centimetres.",
    whyItHappens: "Students see the column as measuring the atmosphere and forget that a less dense liquid needs a much taller column to press just as hard.",
    reteach: "The column height depends on the density of the liquid, because the liquid must press as hard as the atmosphere. Mercury is very dense, so a short column, about seventy six centimetres, is enough. Water is much less dense, so it would need a column about ten metres tall to balance the same atmosphere, which is far too tall to be practical. That is why barometers use dense mercury and not water.",
    microExample: "Same atmosphere: mercury balances at about 76 cm, but low-density water would need a column about 10 m tall.",
    figure: "fig-06-10-barometer.svg",
    check: {
      question: "Why is mercury used in a barometer instead of water?",
      answer: "Because mercury is very dense, so a short column balances the atmosphere. Water is far less dense and would need a column about ten metres tall."
    }
  },
  {
    id: "pres-mano-atm",
    topicKey: "t5-pressure",
    subtopic: "manometer",
    label: "Atmospheric pressure left out of the manometer reading",
    belief: "The height difference in a manometer is the gas pressure by itself.",
    tell: "The student reports only the height difference as the gas pressure and forgets to combine it with atmospheric pressure.",
    whyItHappens: "The height difference is the number you read off the scale, so students take it as the whole answer and forget the atmosphere pushing on the open side.",
    reteach: "A manometer compares the gas with the atmosphere, so the height difference is only the gap between them, not the gas pressure on its own. To get the actual gas pressure you start from atmospheric pressure and add the height difference when the gas is the stronger side, or subtract it when the gas is the weaker side. The height difference tells you how far above or below atmospheric the gas is, not the full pressure.",
    microExample: "Open side 9 cm higher: gas is above atmospheric, so P_gas = 76 + 9 = 85 cm Hg, not just 9 cm.",
    figure: "fig-06-12-manometer.svg",
    check: {
      question: "A manometer shows a height difference of nine centimetres. Is that nine centimetres the gas pressure by itself?",
      answer: "No. It is only the gap from atmospheric pressure. You add it to, or subtract it from, atmospheric pressure to get the gas pressure."
    }
  },
  {
    id: "pres-mano-direction",
    topicKey: "t5-pressure",
    subtopic: "manometer",
    label: "Manometer add or subtract chosen wrongly",
    belief: "You always add the height difference to atmospheric pressure to get the gas pressure.",
    tell: "The student adds the height when the gas is actually the weaker side, or reads a below atmospheric gas as above it.",
    whyItHappens: "Students learn one manometer example, usually gas above atmospheric, and apply adding every time without checking which liquid level is higher.",
    reteach: "Which way to go depends on which side the liquid is pushed up. If the gas pushes the liquid higher on the open side, the gas is stronger than the atmosphere, so you add the height difference. If the liquid is higher on the gas side instead, the gas is weaker, so you subtract. If the two levels are equal, the gas pressure equals atmospheric. Read which side is higher before you decide to add or subtract.",
    microExample: "Liquid higher on the gas side by h: gas is below atmospheric, so P_gas = P_atm - h rho g, not plus.",
    figure: "fig-06-12-manometer.svg",
    check: {
      question: "On a manometer the liquid stands higher on the gas side than on the open side. Is the gas pressure above or below atmospheric?",
      answer: "Below atmospheric, so you subtract the height difference. You only add it when the liquid is pushed higher on the open side."
    }
  }
];
