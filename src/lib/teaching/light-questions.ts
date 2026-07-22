// light-questions.ts
// Teaching question bank for O-Level Physics, Light (topicKey "t12-light").
// Every wrong option maps to the misconception it reveals (see
// light-misconceptions.ts), so the tutor can respond to exactly why the
// student erred. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 14 - Light.md
// walkthrough and explain are spoken by Gugu, so they are written in plain
// words, no symbols. stem and options are shown on screen, so they may use
// _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const LIGHT_QUESTIONS: TeachQuestion[] = [
  {
    id: "lig-q-01",
    topicKey: "t12-light",
    subtopic: "reflection",
    stem: "A ray strikes a plane mirror. The angle between the incident ray and the mirror surface is 55 degrees. What is the angle of incidence?",
    figure: "fig-14-04-reflection-angle-method.svg",
    options: ["35 degrees", "55 degrees", "145 degrees", "110 degrees"],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refl-angle-surface", 2: "lig-refl-angle-surface", 3: "lig-refl-angle-surface" },
    walkthrough: [
      "The angle of incidence is always measured from the normal, not from the surface.",
      "The normal is at ninety degrees to the mirror.",
      "So take the fifty five degrees away from ninety.",
      "That leaves thirty five degrees, which is the angle of incidence."
    ],
    explain: "The angle of incidence is measured from the normal, the line at ninety degrees to the mirror. The ray makes fifty five degrees with the surface, so it makes ninety take away fifty five, which is thirty five degrees, with the normal. Using fifty five directly is the tell that the angle was measured from the surface instead of the normal."
  },
  {
    id: "lig-q-02",
    topicKey: "t12-light",
    subtopic: "reflection",
    stem: "Which statement about reflection at a plane mirror is correct?",
    figure: "fig-14-03-laws-reflection.svg",
    options: [
      "The angle of incidence equals the angle of reflection, both measured from the normal.",
      "The two angles are equal, but both are measured from the mirror surface.",
      "The reflected ray always leaves at 90 degrees to the incident ray.",
      "A rough mirror would not obey this law."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refl-angle-surface", 2: "lig-refl-unequal", 3: "lig-refl-diffuse-law" },
    walkthrough: [
      "The first law of reflection says the angle of incidence equals the angle of reflection.",
      "Both of those angles are measured from the normal, not from the surface.",
      "The reflected ray is not fixed at ninety degrees, it depends on how the ray came in.",
      "And every surface, rough or smooth, still obeys this law at each point."
    ],
    explain: "The angle of incidence equals the angle of reflection, and both are measured from the normal. Measuring from the surface is a common slip, the reflected ray is never fixed at ninety degrees to the incident ray, and even a rough surface obeys the law at every point. It just scatters the rays because its facets face different ways."
  },
  {
    id: "lig-q-03",
    topicKey: "t12-light",
    subtopic: "reflection",
    stem: "A rough wall looks dull while a mirror looks shiny, yet both obey the laws of reflection. Why does the wall look dull?",
    figure: "fig-14-02-regular-diffuse.svg",
    options: [
      "Its tiny facets face different ways, so parallel rays scatter in many directions.",
      "A rough surface does not obey the laws of reflection.",
      "Light does not reflect from rough surfaces at all.",
      "On a rough surface the angle of incidence does not equal the angle of reflection."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refl-diffuse-law", 2: "lig-refl-diffuse-law", 3: "lig-refl-diffuse-law" },
    walkthrough: [
      "A rough surface is made of tiny facets tilted in all directions.",
      "At each facet the angle of incidence still equals the angle of reflection.",
      "But because the facets face different ways, the reflected rays head off in many directions.",
      "That scattering is what makes the surface look dull, this is diffuse reflection."
    ],
    explain: "Both surfaces obey the law of reflection at every point. The difference is that a mirror is smooth, so parallel rays stay parallel and form a clear image, while a rough surface has facets tilted every way, so the rays scatter and it looks dull. The law never fails on a rough surface, the rays are simply sent in different directions."
  },
  {
    id: "lig-q-04",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    stem: "Which set correctly describes the image formed in a plane mirror?",
    figure: "fig-14-05-plane-mirror-image.svg",
    options: [
      "Virtual, upright, same size, laterally inverted.",
      "Real, upright, same size.",
      "Virtual, upright, magnified.",
      "Virtual, but turned upside down."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-mirror-real", 2: "lig-mirror-size", 3: "lig-mirror-vertical-invert" },
    walkthrough: [
      "The plane mirror image is virtual, because no real light meets behind the mirror.",
      "It is upright and the same size as the object.",
      "It is laterally inverted, which means left and right are swapped.",
      "It is not real, not magnified, and not turned upside down."
    ],
    explain: "A plane mirror image is virtual, upright, the same size as the object, and laterally inverted. Calling it real forgets that no light actually reaches behind the mirror. It is never magnified, since the size always matches the object, and it is swapped left to right, not flipped top to bottom."
  },
  {
    id: "lig-q-05",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    stem: "A patient stands 2.5 m in front of a plane mirror. An eye chart hangs on the wall 0.4 m behind the patient. How far away does the chart's image appear to the patient?",
    figure: null,
    options: ["5.4 m", "2.9 m", "5.0 m", "5.8 m"],
    correct: 0,
    distractorMisconceptions: { 1: "lig-mirror-distance", 2: "lig-mirror-distance", 3: "lig-mirror-distance" },
    walkthrough: [
      "First find how far the chart is from the mirror.",
      "The chart is two point five plus zero point four, which is two point nine metres from the mirror.",
      "The image is the same distance behind the mirror, so two point nine metres behind.",
      "The patient is two point five metres in front, so the image is two point five plus two point nine, which is five point four metres away."
    ],
    explain: "The chart is two point nine metres from the mirror, so its image is two point nine metres behind the mirror. The patient stands two point five metres in front, so the distance from the patient to the image is two point five plus two point nine, which is five point four metres. Answers like two point nine only count one side of the mirror and forget to add the patient's own distance."
  },
  {
    id: "lig-q-06",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    stem: "As you walk towards a plane mirror, what happens to the size of your image?",
    figure: "fig-14-05-plane-mirror-image.svg",
    options: [
      "It stays the same size as you, because a plane mirror image is always the same size as the object.",
      "It grows larger as you get closer.",
      "It shrinks as you get closer.",
      "It grows larger and also turns upside down."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-mirror-size", 2: "lig-mirror-size", 3: "lig-mirror-vertical-invert" },
    walkthrough: [
      "A plane mirror always gives an image the same size as the object.",
      "As you walk closer, the image walks closer too.",
      "So it fills more of your view, but its true size does not change.",
      "Seeming bigger is just the effect of being nearer, like any object."
    ],
    explain: "The image in a plane mirror is always exactly the same size as you, however near or far you stand. Walking closer makes it take up more of your view, but that is the same reason any nearby object looks large, not real magnification. The mirror never enlarges, and it certainly never turns you upside down."
  },
  {
    id: "lig-q-07",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    stem: "What is meant by a virtual image?",
    figure: null,
    options: [
      "One that cannot be caught on a screen, because no real light rays meet there.",
      "One that cannot be seen by the eye.",
      "One that can be projected onto a screen.",
      "The kind of image formed on a cinema screen."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-virtual-cannot-see", 2: "lig-mirror-real", 3: "lig-mirror-real" },
    walkthrough: [
      "A virtual image is one where no real light rays actually meet.",
      "The rays only appear to come from the image position.",
      "So it cannot be caught on a screen.",
      "But your eye can still see it, just as you see yourself in a mirror."
    ],
    explain: "A virtual image cannot be caught on a screen, because no real light meets at the image position. It is not invisible though, you see one every time you look in a mirror. An image you can project onto a screen, like the one at a cinema, is a real image, which is the opposite of virtual."
  },
  {
    id: "lig-q-08",
    topicKey: "t12-light",
    subtopic: "refraction",
    stem: "What is chiefly responsible for the bending of light during refraction?",
    figure: "fig-14-08-refraction-boundary.svg",
    options: [
      "A change of speed as the light enters a new medium.",
      "A change of colour.",
      "A change of frequency.",
      "A change of energy."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refract-cause", 2: "lig-refract-cause", 3: "lig-refract-cause" },
    walkthrough: [
      "Light bends at a boundary because it changes speed.",
      "Entering a denser medium slows it down, and that swings its direction.",
      "The colour and frequency of the light stay the same as it crosses.",
      "So the change of speed is the real cause of the bending."
    ],
    explain: "Refraction is caused by a change of speed. When light passes into a denser medium it slows down, and that change of speed bends its direction. Its colour, frequency and energy do not change at the boundary, so those are not the cause. Point to the change of speed every time you explain why light bends."
  },
  {
    id: "lig-q-09",
    topicKey: "t12-light",
    subtopic: "refraction",
    stem: "A ray of light passes from air into glass. How does it bend?",
    figure: "fig-14-09-bending-normal.svg",
    options: [
      "Towards the normal, because it slows down.",
      "Away from the normal.",
      "Away from the normal, because it travels faster in glass.",
      "It is not bent, because only the colour changes."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refract-denser-away", 2: "lig-refract-denser-faster", 3: "lig-refract-cause" },
    walkthrough: [
      "Glass is denser than air, so the light slows down as it enters.",
      "When light slows down at a boundary, it bends towards the normal.",
      "So the angle of refraction is smaller than the angle of incidence.",
      "It would only bend away from the normal going the other way, from glass into air."
    ],
    explain: "Going from air into denser glass, the light slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence. Bending away from the normal happens only when light speeds up, going from denser to less dense. Light does not travel faster in glass, and it does bend, so the other options miss both the direction and the cause."
  },
  {
    id: "lig-q-10",
    topicKey: "t12-light",
    subtopic: "refraction",
    stem: "Light of speed 3 x 10^8 m/s in a vacuum enters glass of refractive index 1.5. Which statement is correct?",
    figure: null,
    options: [
      "It slows to 2 x 10^8 m/s, found from c divided by n.",
      "It speeds up to 4.5 x 10^8 m/s, found from c times n.",
      "It speeds up, because glass is denser than air.",
      "Its speed stays 3 x 10^8 m/s, because the refractive index does not affect speed."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-n-speed-inverted", 2: "lig-refract-denser-faster", 3: "lig-refract-denser-faster" },
    walkthrough: [
      "The refractive index is the vacuum speed divided by the speed in the medium.",
      "So the speed in the glass is the vacuum speed divided by the refractive index.",
      "That is three times ten to the eight divided by one point five, which is two times ten to the eight metres per second.",
      "The light slows down, it does not speed up."
    ],
    explain: "The speed in the glass is the vacuum speed divided by the refractive index, three times ten to the eight divided by one point five, which is two times ten to the eight metres per second. Light always slows in a denser medium, so it does not speed up or stay the same. Multiplying by the refractive index gives a speed faster than light in a vacuum, which is impossible."
  },
  {
    id: "lig-q-11",
    topicKey: "t12-light",
    subtopic: "refraction",
    stem: "A ray of light meets a glass boundary exactly along the normal, with an angle of incidence of 0 degrees. What happens?",
    figure: "fig-14-09-bending-normal.svg",
    options: [
      "It passes straight through without bending.",
      "It bends towards the normal.",
      "It bends away from the normal.",
      "It bends and changes direction slightly as it slows down."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refract-normal-bend", 2: "lig-refract-normal-bend", 3: "lig-refract-normal-bend" },
    walkthrough: [
      "The ray arrives along the normal, so its angle of incidence is zero.",
      "That means the angle of refraction is also zero.",
      "With no angle to change, the ray passes straight through.",
      "It does slow down inside the glass, but its direction does not change."
    ],
    explain: "A ray along the normal has an angle of incidence of zero, so the angle of refraction is zero too and it passes straight through undeviated. The light still slows down inside the glass, but because it arrives head on there is no sideways direction to bend. Any answer that bends this ray has forgotten the special case of normal incidence."
  },
  {
    id: "lig-q-12",
    topicKey: "t12-light",
    subtopic: "refraction",
    stem: "Light travels from air into glass of refractive index 1.5. The ray makes 30 degrees with the glass surface. What is the angle of refraction?",
    figure: "fig-14-08-refraction-boundary.svg",
    options: ["35 degrees", "19 degrees", "60 degrees", "30 degrees"],
    correct: 0,
    distractorMisconceptions: { 1: "lig-refract-angle-surface", 2: "lig-refract-angle-surface", 3: "lig-refract-angle-surface" },
    walkthrough: [
      "First find the angle of incidence from the normal.",
      "The ray makes thirty degrees with the surface, so it makes sixty degrees with the normal.",
      "The refractive index is the sine of the angle of incidence divided by the sine of the angle of refraction.",
      "So the sine of the angle of refraction is the sine of sixty divided by one point five, which is about zero point five eight.",
      "That gives an angle of refraction of about thirty five degrees."
    ],
    explain: "The angle of incidence must be measured from the normal, so it is ninety take away thirty, which is sixty degrees. Then the sine of the angle of refraction is the sine of sixty divided by one point five, giving about zero point five eight, so the angle of refraction is about thirty five degrees. Putting the surface angle of thirty straight into the formula gives about nineteen degrees, which is the tell that the normal was skipped."
  },
  {
    id: "lig-q-13",
    topicKey: "t12-light",
    subtopic: "refractive-index",
    stem: "A ray enters medium X from air with an angle of incidence of 60 degrees and an angle of refraction of 36 degrees. What is the refractive index of X?",
    figure: "fig-14-11-semicircular-block.svg",
    options: ["1.47", "0.68", "1.67", "0.60"],
    correct: 0,
    distractorMisconceptions: { 1: "lig-n-inverted-angles", 2: "lig-n-angles-not-sines", 3: "lig-n-angles-not-sines" },
    walkthrough: [
      "The refractive index is the sine of the angle of incidence divided by the sine of the angle of refraction.",
      "The sine of sixty degrees is about zero point eight seven.",
      "The sine of thirty six degrees is about zero point five nine.",
      "Dividing gives about one point four seven."
    ],
    explain: "You take the sine of each angle first, then divide, with the angle of incidence on top. The sine of sixty over the sine of thirty six is zero point eight seven over zero point five nine, which is about one point four seven. Getting zero point six eight means the formula was flipped, and one point six seven means the raw angles were divided without taking their sines."
  },
  {
    id: "lig-q-14",
    topicKey: "t12-light",
    subtopic: "refractive-index",
    stem: "A ray enters a glass block from air at an angle of incidence of 40 degrees. The glass has a refractive index of 1.52. What is the angle of refraction?",
    figure: "fig-14-11-semicircular-block.svg",
    options: ["25 degrees", "78 degrees", "26 degrees", "61 degrees"],
    correct: 0,
    distractorMisconceptions: { 1: "lig-n-inverted-angles", 2: "lig-n-angles-not-sines", 3: "lig-n-angles-not-sines" },
    walkthrough: [
      "The refractive index is the sine of the angle of incidence divided by the sine of the angle of refraction.",
      "So the sine of the angle of refraction is the sine of forty degrees divided by one point five two.",
      "The sine of forty is about zero point six four, and dividing by one point five two gives about zero point four two.",
      "The angle whose sine is zero point four two is about twenty five degrees."
    ],
    explain: "Rearranging the formula, the sine of the angle of refraction is the sine of forty divided by one point five two, which is about zero point four two, so the angle of refraction is about twenty five degrees. Multiplying the sine of forty by one point five two instead gives about seventy eight degrees, the flipped formula, and dividing the plain angle forty by one point five two gives about twenty six degrees, which skips the sines."
  },
  {
    id: "lig-q-15",
    topicKey: "t12-light",
    subtopic: "critical-angle",
    stem: "A glass has a refractive index of 1.52. Which correctly gives its critical angle c?",
    figure: "fig-14-12-critical-angle.svg",
    options: [
      "sin c = 1 / 1.52, so c is about 41 degrees.",
      "sin c = 1.52, so c is about 41 degrees.",
      "c = 1 / 1.52, so c is about 0.66 degrees.",
      "sin c = 1.52 / 1, so c is about 90 degrees."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-critical-formula", 2: "lig-critical-formula", 3: "lig-critical-formula" },
    walkthrough: [
      "The sine of the critical angle equals one divided by the refractive index.",
      "So the sine of the critical angle is one divided by one point five two, which is about zero point six six.",
      "The angle whose sine is zero point six six is about forty one degrees.",
      "Setting the sine equal to one point five two would need a sine bigger than one, which cannot happen."
    ],
    explain: "The sine of the critical angle is one divided by the refractive index, so one over one point five two is about zero point six six, giving a critical angle of about forty one degrees. Setting the sine of the critical angle equal to the refractive index asks for a sine greater than one, which is impossible, and dropping the sine altogether gives a nonsense angle. The one over the refractive index is the key."
  },
  {
    id: "lig-q-16",
    topicKey: "t12-light",
    subtopic: "critical-angle",
    stem: "The critical angle of a glass is 42 degrees. A ray inside the glass meets the surface at an angle of incidence of 30 degrees. What happens?",
    figure: "fig-14-12-critical-angle.svg",
    options: [
      "It refracts and escapes into the air.",
      "It is totally internally reflected back inside.",
      "It is totally internally reflected, because it is inside the denser glass.",
      "It is totally internally reflected at any angle inside glass."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-tir-below-critical", 2: "lig-tir-below-critical", 3: "lig-tir-below-critical" },
    walkthrough: [
      "Total internal reflection needs an angle of incidence greater than the critical angle.",
      "Here the angle of incidence is thirty degrees.",
      "The critical angle is forty two degrees, which is larger.",
      "So the angle is below the critical angle, and the ray refracts and escapes."
    ],
    explain: "The angle of incidence, thirty degrees, is smaller than the critical angle of forty two degrees, so the ray refracts and escapes into the air. Total internal reflection would only happen if the angle were greater than the critical angle. Being inside the denser glass is one condition, but on its own it is not enough, the angle still has to beat the critical angle."
  },
  {
    id: "lig-q-17",
    topicKey: "t12-light",
    subtopic: "total-internal-reflection",
    stem: "Under which condition can total internal reflection occur?",
    figure: "fig-14-13-total-internal-reflection.svg",
    options: [
      "Light travels from glass to air and the angle of incidence is greater than the critical angle.",
      "Light travels from air to glass and the angle of incidence is greater than the critical angle.",
      "Light travels from glass to air at any angle of incidence.",
      "Light travels from glass to air and the angle of incidence is less than the critical angle."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-tir-wrong-direction", 2: "lig-tir-below-critical", 3: "lig-tir-below-critical" },
    walkthrough: [
      "Total internal reflection needs two conditions together.",
      "First, the light must travel from a denser medium to a less dense one, such as glass to air.",
      "Second, the angle of incidence must be greater than the critical angle.",
      "Only the option with both of these is correct."
    ],
    explain: "Both conditions must hold: the light must go from denser to less dense, such as glass to air, and the angle of incidence must be greater than the critical angle. Going from air to glass never gives total internal reflection, whatever the angle, and going glass to air below the critical angle just lets the ray refract out. You need the right direction and a big enough angle."
  },
  {
    id: "lig-q-18",
    topicKey: "t12-light",
    subtopic: "total-internal-reflection",
    stem: "A ray inside a perspex block of refractive index 1.49 meets the surface at an angle of incidence of 45 degrees. The critical angle of perspex is 42 degrees. What happens at the surface?",
    figure: "fig-14-13-total-internal-reflection.svg",
    options: [
      "Total internal reflection: the ray reflects back inside the perspex.",
      "It refracts out into the air, bending away from the normal.",
      "It refracts out, because 45 degrees is less than the critical angle.",
      "Nothing special, because total internal reflection needs light going from air into perspex."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-tir-below-critical", 2: "lig-tir-below-critical", 3: "lig-tir-wrong-direction" },
    walkthrough: [
      "Check the direction first: the ray is inside perspex heading to air, so denser to less dense.",
      "Now compare the angles: the angle of incidence is forty five degrees.",
      "The critical angle is forty two degrees, and forty five is greater than that.",
      "Both conditions are met, so total internal reflection happens and the ray reflects back inside."
    ],
    explain: "The ray is going from denser perspex to less dense air, and its angle of incidence of forty five degrees is greater than the critical angle of forty two degrees. Both conditions hold, so total internal reflection occurs and no ray escapes. Forty five is larger than forty two, not smaller, and the light is leaving the perspex, not entering it, so the other options misread one condition each."
  },
  {
    id: "lig-q-19",
    topicKey: "t12-light",
    subtopic: "lenses",
    stem: "Which correctly describes a converging (convex) lens?",
    figure: "fig-14-15-converging-diverging.svg",
    options: [
      "Thicker in the middle than at the edges, and it brings parallel rays to a focus.",
      "Thinner in the middle than at the edges.",
      "The same thickness throughout.",
      "Thinner in the middle, so it spreads parallel rays out."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-lens-shape", 2: "lig-lens-shape", 3: "lig-lens-shape" },
    walkthrough: [
      "A converging lens is also called a convex lens.",
      "It is thicker in the middle than at its edges.",
      "That fat middle brings parallel rays together to the principal focus.",
      "The lens that is thinner in the middle and spreads rays out is the diverging lens."
    ],
    explain: "A converging lens is thicker in the middle and brings parallel rays together to a focus. A lens that is thinner in the middle is a diverging lens, which spreads parallel rays out instead. Mixing up the two shapes is the classic convex and concave slip, so remember the converging lens bulges outwards in the centre."
  },
  {
    id: "lig-q-20",
    topicKey: "t12-light",
    subtopic: "lenses",
    stem: "What is the focal length of a converging lens?",
    figure: "fig-14-16-lens-focal-point.svg",
    options: [
      "The distance from the optical centre to the principal focus.",
      "The distance from the lens to the image, whatever the object position.",
      "The distance from the object to the lens.",
      "The distance from the object to the image."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-focal-length-def", 2: "lig-focal-length-def", 3: "lig-focal-length-def" },
    walkthrough: [
      "The focal length is a fixed property of the lens.",
      "It is the distance from the optical centre to the principal focus.",
      "The principal focus is where rays parallel to the axis meet after passing through the lens.",
      "The image distance is a different thing, and it changes when the object moves."
    ],
    explain: "The focal length is the fixed distance from the optical centre to the principal focus, where parallel rays converge. It does not change when the object moves. The image distance does change with the object, so calling the image distance the focal length is the mistake. Only for a very distant object do the two happen to match."
  },
  {
    id: "lig-q-21",
    topicKey: "t12-light",
    subtopic: "lenses",
    stem: "An object is placed beyond 2F in front of a converging lens. What is the image like?",
    figure: "fig-14-18-lens-real-image.svg",
    options: [
      "Real, inverted and diminished.",
      "Real, upright and diminished.",
      "Real, upright and enlarged.",
      "Real, inverted and enlarged."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-real-image-upright", 2: "lig-real-image-upright", 3: "lig-lens-always-enlarge" },
    walkthrough: [
      "When the object is beyond twice the focal length, the image forms between the principal focus and twice the focal length on the far side.",
      "A real image from a converging lens is always inverted.",
      "Beyond twice the focal length, the image is smaller than the object.",
      "So the image is real, inverted and diminished."
    ],
    explain: "With the object beyond twice the focal length, the image is real, inverted and diminished, which is how a camera works. A real image is always inverted, so any upright answer is wrong, and beyond twice the focal length the image is smaller, not enlarged. A converging lens does not always magnify, the object position decides the size."
  },
  {
    id: "lig-q-22",
    topicKey: "t12-light",
    subtopic: "lenses",
    stem: "An object is placed exactly at 2F in front of a converging lens. What is the image like?",
    figure: "fig-14-17-lens-construction.svg",
    options: [
      "Real, inverted and the same size as the object.",
      "Real, inverted and enlarged.",
      "Virtual, upright and the same size.",
      "Real, upright and the same size."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-lens-always-enlarge", 2: "lig-real-image-upright", 3: "lig-real-image-upright" },
    walkthrough: [
      "When the object sits at twice the focal length, the image also forms at twice the focal length on the far side.",
      "A real image from a converging lens is inverted.",
      "At exactly twice the focal length, the image is the same size as the object.",
      "So the image is real, inverted and the same size, which is used in a photocopier."
    ],
    explain: "At exactly twice the focal length, the image is real, inverted and the same size as the object. It is not enlarged there, that only happens closer than twice the focal length, and a real image is always inverted, never upright. This same size case is the setting a photocopier uses to copy at full scale."
  },
  {
    id: "lig-q-23",
    topicKey: "t12-light",
    subtopic: "lenses",
    stem: "An object is placed closer to a converging lens than its principal focus, that is inside the focal length. What is the image like?",
    figure: "fig-14-19-lens-virtual-image.svg",
    options: [
      "Virtual, upright and enlarged.",
      "Real, inverted and enlarged.",
      "Real, upright and enlarged.",
      "Real, inverted and diminished."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "lig-magnify-real", 2: "lig-magnify-real", 3: "lig-magnify-real" },
    walkthrough: [
      "When the object is inside the focal length, the lens acts as a magnifying glass.",
      "The image forms on the same side as the object.",
      "It is virtual, so it cannot be caught on a screen.",
      "It is upright and enlarged, which is why small print looks bigger and the right way up."
    ],
    explain: "Inside the focal length, a converging lens works as a magnifying glass and forms a virtual, upright, enlarged image on the same side as the object. It is not real and not inverted, so you could not catch it on a screen and it does not appear upside down. The real, inverted images only appear when the object is beyond the principal focus."
  }
];
