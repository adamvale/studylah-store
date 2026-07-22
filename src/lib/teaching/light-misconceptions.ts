// light-misconceptions.ts
// Topic: O-Level Physics, Light (topicKey "t12-light")
// The tutor's diagnostic brain: the classic ways students go wrong in Light
// (reflection, refraction, refractive index, total internal reflection,
// critical angle, and thin converging lenses), with the exact re-explanation
// for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 14 - Light.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are
// in plain words for reading aloud. On-screen fields (label, belief,
// microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const LIGHT_MISCONCEPTIONS: Misconception[] = [
  {
    id: "lig-refl-angle-surface",
    topicKey: "t12-light",
    subtopic: "reflection",
    label: "Angles measured from the surface, not the normal",
    belief: "The angle of incidence and angle of reflection are measured from the mirror surface.",
    tell: "When the ray makes fifty five degrees with the surface, the student writes the angle of incidence as fifty five instead of thirty five.",
    whyItHappens: "The surface is the obvious line to measure against, so students line their protractor up with the mirror rather than with the normal, which they have to draw in themselves.",
    reteach: "Both the angle of incidence and the angle of reflection are always measured from the normal, that is the line drawn at ninety degrees to the surface, never from the surface itself. So if a ray makes fifty five degrees with the mirror surface, first take that away from ninety to get thirty five degrees, and that thirty five is the angle of incidence. Draw the normal first every time, then measure from it.",
    microExample: "Ray at 55 degrees to the surface: angle of incidence = 90 - 55 = 35 degrees (not 55).",
    figure: "fig-14-04-reflection-angle-method.svg",
    check: {
      question: "A ray makes twenty degrees with a mirror surface. What is the angle of incidence?",
      answer: "It is seventy degrees, because you measure from the normal, so you take twenty away from ninety."
    }
  },
  {
    id: "lig-refl-unequal",
    topicKey: "t12-light",
    subtopic: "reflection",
    label: "Angle of reflection not equal to angle of incidence",
    belief: "The reflected ray leaves at a fixed angle, such as ninety degrees to the incident ray, whatever the angle of incidence.",
    tell: "The student gives a reflected angle that does not match the incident angle, or assumes the ray always bounces off square to the mirror.",
    whyItHappens: "Everyday bouncing, like a ball hitting a wall head on, makes students expect one set bounce angle rather than a mirror rule that depends on how the ray came in.",
    reteach: "The first law of reflection says the angle of incidence equals the angle of reflection, both measured from the normal. So the reflected ray is not fixed, it always matches the incident ray. If light comes in at thirty degrees from the normal, it leaves at thirty degrees from the normal on the other side. Change the incoming angle and the outgoing angle changes with it, always staying equal.",
    microExample: "Angle of incidence = 30 degrees, so angle of reflection = 30 degrees (i = r, both from the normal).",
    figure: "fig-14-03-laws-reflection.svg",
    check: {
      question: "Light hits a plane mirror at an angle of incidence of forty degrees. What is the angle of reflection?",
      answer: "Forty degrees, because the angle of reflection always equals the angle of incidence."
    }
  },
  {
    id: "lig-refl-diffuse-law",
    topicKey: "t12-light",
    subtopic: "reflection",
    label: "Rough surfaces break the law of reflection",
    belief: "A rough surface does not obey the laws of reflection, which is why it looks dull.",
    tell: "The student explains diffuse reflection by saying the law fails on rough surfaces, or that rough surfaces do not really reflect.",
    whyItHappens: "A dull wall looks so different from a mirror that students assume different physics is at work, rather than the same law acting on tiny tilted facets.",
    reteach: "Every point on a rough surface still obeys the law of reflection, with the angle of incidence equal to the angle of reflection. The difference is that a rough surface is made of tiny facets tilted in all directions, so each reflected ray heads off a different way and the parallel beam is scattered. A mirror is smooth, so the rays stay parallel and you get a clear image. Same law, just different surface shapes.",
    microExample: "Rough surface: at each facet i = r still holds, but the facets face different ways, so parallel rays scatter (diffuse reflection).",
    figure: "fig-14-02-regular-diffuse.svg",
    check: {
      question: "Does a rough, dull wall obey the law of reflection?",
      answer: "Yes. Every point still has the angle of incidence equal to the angle of reflection. The rays just scatter because the surface faces many directions."
    }
  },
  {
    id: "lig-mirror-real",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    label: "Plane mirror image treated as real",
    belief: "The image in a plane mirror is real and could be caught on a screen placed behind the mirror.",
    tell: "The student calls the plane mirror image real, or says you could project it onto a screen.",
    whyItHappens: "The image looks solid and convincing, so students assume real light is arriving there, forgetting that no light actually passes behind the mirror.",
    reteach: "The image in a plane mirror is virtual, which means no real light rays actually meet at the image position. Your brain traces the reflected rays straight back and thinks they came from behind the mirror, but no light is really there, so you could never catch it on a screen. A real image, like the one on a cinema screen or on the retina of your eye, is where light rays truly cross. The mirror image only seems to be behind the glass.",
    microExample: "Plane mirror: rays only appear to come from behind the glass, so the image is virtual, not real (nothing lands on a screen there).",
    figure: "fig-14-05-plane-mirror-image.svg",
    check: {
      question: "Could you catch the image from a plane mirror on a screen placed behind it?",
      answer: "No. The image is virtual, so no real light reaches behind the mirror, and there is nothing for a screen to catch."
    }
  },
  {
    id: "lig-mirror-vertical-invert",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    label: "Plane mirror flips top and bottom",
    belief: "A plane mirror turns the image upside down, swapping top and bottom.",
    tell: "The student describes the mirror image as inverted top to bottom rather than as laterally inverted.",
    whyItHappens: "The word inverted is remembered without the word laterally, so students picture the vertical flip they know from lenses instead of the left to right swap of a mirror.",
    reteach: "A plane mirror image is upright, it keeps the same way up as you. What it swaps is left and right, and we call that laterally inverted. Your right hand looks like the image's left hand, but your head still stays at the top. It does not turn you upside down. So describe a mirror image as upright and laterally inverted, never as flipped top to bottom.",
    microExample: "Plane mirror: image is upright but laterally inverted (left and right swapped, top and bottom unchanged).",
    figure: "fig-14-05-plane-mirror-image.svg",
    check: {
      question: "You wave your right hand at a plane mirror. Is the image upside down?",
      answer: "No. It stays upright. Only left and right are swapped, so it looks like the image is waving its left hand."
    }
  },
  {
    id: "lig-mirror-size",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    label: "Plane mirror image changes size with distance",
    belief: "The image in a plane mirror grows bigger as you walk towards the mirror and smaller as you walk away.",
    tell: "The student says the mirror image magnifies or shrinks depending on how close you stand.",
    whyItHappens: "As you approach, the image does fill more of your view, so students confuse looking bigger with actually being bigger, the way a distant car seems small.",
    reteach: "A plane mirror always gives an image exactly the same size as the object, no matter how near or far you stand. When you walk closer the image also comes closer, so it takes up more of your view, but its true size never changes. Getting closer to any object makes it seem larger, and that is all that is happening here. The mirror itself never magnifies.",
    microExample: "Plane mirror: image height = object height always (magnification = 1), whatever the distance.",
    figure: "fig-14-05-plane-mirror-image.svg",
    check: {
      question: "As you walk towards a plane mirror, does your image actually get bigger?",
      answer: "No. It stays the same size as you. It only seems larger because it is getting closer, just like any object does."
    }
  },
  {
    id: "lig-mirror-distance",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    label: "Image distance behind the mirror measured wrongly",
    belief: "The image sits at the mirror, or the distance from the object to the image is just the object to mirror distance.",
    tell: "The student places the image on the mirror surface, or forgets to add the object side when finding the total distance from object to image.",
    whyItHappens: "The rule that the image is as far behind as the object is in front is easy to state but easy to half apply, so students count one side and stop.",
    reteach: "The image in a plane mirror lies as far behind the mirror as the object is in front of it. So if an object is three metres in front, the image is three metres behind, and the distance from the object to its own image is three plus three, which is six metres. When something is behind you, add its distance to the mirror onto your own distance to the mirror to find how far away its image looks. Always count both sides of the mirror.",
    microExample: "Object 3 m in front: image 3 m behind, so object to image distance = 3 + 3 = 6 m.",
    figure: "fig-14-06-mirror-construction.svg",
    check: {
      question: "An object is two metres in front of a plane mirror. How far is the image from the object?",
      answer: "Four metres. The image is two metres behind the mirror, and you add the two metres in front to get four."
    }
  },
  {
    id: "lig-virtual-cannot-see",
    topicKey: "t12-light",
    subtopic: "plane-mirror-image",
    label: "Virtual image confused with invisible",
    belief: "A virtual image is one that cannot be seen by the eye.",
    tell: "The student defines virtual as invisible, and is puzzled that we can plainly see a mirror image.",
    whyItHappens: "The word virtual sounds like not real, so students slide from cannot be caught on a screen to cannot be seen at all.",
    reteach: "Virtual does not mean invisible. A virtual image is simply one that cannot be caught on a screen, because no real light rays meet there. Your eye can still see it perfectly well, because the rays entering your eye look as though they came from the image position. You see a virtual image every time you look in a mirror. The only thing you cannot do is project it onto a screen.",
    microExample: "Mirror image: virtual (cannot land on a screen) yet clearly visible to the eye. Virtual is not the same as invisible.",
    figure: "fig-14-05-plane-mirror-image.svg",
    check: {
      question: "Can your eye see a virtual image?",
      answer: "Yes. You see one whenever you look in a mirror. Virtual only means it cannot be caught on a screen, not that it is invisible."
    }
  },
  {
    id: "lig-refract-cause",
    topicKey: "t12-light",
    subtopic: "refraction",
    label: "Bending blamed on colour or frequency",
    belief: "Light bends during refraction because its colour, frequency or energy changes.",
    tell: "The student says the ray bends because the light changes colour or frequency at the boundary.",
    whyItHappens: "Refraction is often first met alongside a prism splitting colours, so students tie the bending to colour rather than to the change of speed.",
    reteach: "Light bends at a boundary because it changes speed, not because it changes colour, frequency or energy. When light passes into a denser medium it slows down, and that change of speed is what swings its direction. The frequency and colour of the light actually stay the same as it crosses the boundary. So whenever you explain refraction, point to the change of speed as the real cause.",
    microExample: "Air into glass: the speed drops from 3 x 10^8 m/s to about 2 x 10^8 m/s, and that speed change bends the ray (colour stays the same).",
    figure: "fig-14-08-refraction-boundary.svg",
    check: {
      question: "What is the real reason light bends when it enters glass?",
      answer: "It changes speed. Slowing down at the boundary is what changes its direction, not any change of colour or frequency."
    }
  },
  {
    id: "lig-refract-denser-away",
    topicKey: "t12-light",
    subtopic: "refraction",
    label: "Bending direction reversed entering a denser medium",
    belief: "Light entering a denser medium bends away from the normal.",
    tell: "The student draws the ray bending away from the normal as it enters glass or water from air.",
    whyItHappens: "The two cases, entering and leaving a denser medium, are mirror images of each other, so students remember the shape but attach it to the wrong direction of travel.",
    reteach: "When light goes from a less dense medium into a denser one, such as air into glass, it slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence. It only bends away from the normal when it goes the other way, from denser to less dense. A good memory hook is that light bends towards the normal when it slows down, and away from the normal when it speeds up.",
    microExample: "Air into glass (less dense to denser): bends towards the normal, so i > r (for example i = 60 degrees, r = 35 degrees).",
    figure: "fig-14-09-bending-normal.svg",
    check: {
      question: "A ray goes from air into water. Which way does it bend?",
      answer: "Towards the normal, because water is denser than air and the light slows down as it enters."
    }
  },
  {
    id: "lig-refract-denser-faster",
    topicKey: "t12-light",
    subtopic: "refraction",
    label: "Light travels faster in a denser medium",
    belief: "Light speeds up when it enters a denser medium such as glass or water.",
    tell: "The student says light moves faster in glass than in air, or that the speed does not change at all.",
    whyItHappens: "Denser sounds like it should let things move more easily to some students, and the idea that light ever slows down feels surprising when it is the fastest thing they know.",
    reteach: "Light actually travels slower in a denser medium, not faster. It moves fastest in a vacuum or air, and something like glass or water slows it down. That is exactly why the refractive index, which is the speed in a vacuum divided by the speed in the medium, is always bigger than one. The larger the refractive index, the more the medium slows the light and the more it bends the ray.",
    microExample: "Glass, refractive index 1.5: speed = 3 x 10^8 / 1.5 = 2 x 10^8 m/s, which is slower than in air, not faster.",
    figure: null,
    check: {
      question: "Does light travel faster or slower in glass than in air?",
      answer: "Slower. Glass is denser, so it slows the light down, which is why the refractive index is greater than one."
    }
  },
  {
    id: "lig-refract-normal-bend",
    topicKey: "t12-light",
    subtopic: "refraction",
    label: "Ray along the normal still bends",
    belief: "A ray hitting a boundary along the normal, with an angle of incidence of zero, is still bent.",
    tell: "The student draws a kink in a ray that enters exactly along the normal, or gives it a non zero angle of refraction.",
    whyItHappens: "Students learn that refraction happens whenever light changes medium, and forget the special case where there is no angle to bend.",
    reteach: "When a ray meets the boundary exactly along the normal, its angle of incidence is zero, so its angle of refraction is also zero and it passes straight through without bending. The light does still slow down inside the denser medium, but because it arrives head on there is no sideways direction to change. So a ray along the normal goes straight through, undeviated, every time.",
    microExample: "Angle of incidence = 0 degrees, so angle of refraction = 0 degrees: the ray passes straight through, no bending.",
    figure: "fig-14-09-bending-normal.svg",
    check: {
      question: "A ray enters glass exactly along the normal. Does it bend?",
      answer: "No. Its angle of incidence is zero, so the angle of refraction is zero too, and it passes straight through."
    }
  },
  {
    id: "lig-refract-angle-surface",
    topicKey: "t12-light",
    subtopic: "refraction",
    label: "Refraction angles measured from the surface",
    belief: "The angle of incidence and angle of refraction are measured from the boundary surface.",
    tell: "Given the angle a ray makes with the surface, the student puts that number straight into the refraction formula instead of measuring from the normal.",
    whyItHappens: "Just as with reflection, the surface is the visible line, so students measure against it rather than against the normal they must draw for themselves.",
    reteach: "In refraction too, the angle of incidence and the angle of refraction are always measured from the normal, not from the surface. If a ray makes thirty degrees with the surface, its angle of incidence is ninety take away thirty, which is sixty degrees, and that sixty is the value you put into the formula. Draw the normal at ninety degrees to the boundary first, then measure both angles from it.",
    microExample: "Ray at 30 degrees to the surface: angle of incidence = 90 - 30 = 60 degrees (use 60 in n = sin i / sin r, not 30).",
    figure: "fig-14-08-refraction-boundary.svg",
    check: {
      question: "A ray makes twenty five degrees with a glass surface. What angle of incidence do you use?",
      answer: "Sixty five degrees, because you measure from the normal, so you take twenty five away from ninety."
    }
  },
  {
    id: "lig-n-inverted-angles",
    topicKey: "t12-light",
    subtopic: "refractive-index",
    label: "Refractive index formula turned upside down",
    belief: "The refractive index is the sine of the angle of refraction divided by the sine of the angle of incidence.",
    tell: "The student writes the sine of the angle of refraction on top, giving a refractive index less than one, or an angle of refraction bigger than the angle of incidence entering glass.",
    whyItHappens: "The two angles are easy to swap, and students do not always check whether their answer makes sense, so an index below one slips through.",
    reteach: "For light entering a medium from air, the refractive index is the sine of the angle of incidence divided by the sine of the angle of refraction, with the incidence angle on top. That keeps the value above one, as it must be. A quick check is that the refractive index of any solid or liquid is always greater than one, so if you ever get an answer below one, you have flipped the formula and should turn it the right way up.",
    microExample: "n = sin i / sin r; with i = 60 degrees, r = 36 degrees, n = 0.866 / 0.588 = 1.47 (not 0.588 / 0.866 = 0.68).",
    figure: "fig-14-11-semicircular-block.svg",
    check: {
      question: "You work out a refractive index and get zero point six eight. What has gone wrong?",
      answer: "The formula is upside down. A refractive index is always greater than one, so the sine of the angle of incidence should be on top."
    }
  },
  {
    id: "lig-n-angles-not-sines",
    topicKey: "t12-light",
    subtopic: "refractive-index",
    label: "Angles used instead of their sines",
    belief: "The refractive index is the angle of incidence divided by the angle of refraction, without taking sines.",
    tell: "The student divides the two angles directly, for example sixty divided by thirty six, instead of dividing their sines.",
    whyItHappens: "The formula has the two angles in it, so students plug the angle numbers straight in and forget the sine is part of the rule.",
    reteach: "The refractive index uses the sine of each angle, not the angle itself. So you take the sine of the angle of incidence, take the sine of the angle of refraction, and then divide. Dividing the raw angles gives the wrong answer, because the sine of an angle is not proportional to the angle. Always press the sine button on each angle first, then divide the two results.",
    microExample: "n = sin 60 degrees / sin 36 degrees = 0.866 / 0.588 = 1.47 (not 60 / 36 = 1.67).",
    figure: null,
    check: {
      question: "To find the refractive index from two angles, what must you do to each angle first?",
      answer: "Take its sine. You divide the sine of the angle of incidence by the sine of the angle of refraction, not the plain angles."
    }
  },
  {
    id: "lig-n-speed-inverted",
    topicKey: "t12-light",
    subtopic: "refractive-index",
    label: "Speed form of refractive index turned upside down",
    belief: "The refractive index is the speed of light in the medium divided by the speed in a vacuum.",
    tell: "The student writes the medium speed on top, or finds a speed in glass that is faster than in a vacuum.",
    whyItHappens: "The two speeds are easy to swap, and students do not always sense that the medium speed must be the smaller one.",
    reteach: "The refractive index is the speed of light in a vacuum divided by the speed in the medium, with the vacuum speed on top. So to find the speed in the medium you divide the vacuum speed by the refractive index, which makes it smaller. If you ever calculate a speed in glass that is bigger than the speed in a vacuum, you have flipped the formula, because nothing travels faster than light in a vacuum.",
    microExample: "n = c / v, so v = c / n = 3 x 10^8 / 1.5 = 2 x 10^8 m/s (not c x n = 4.5 x 10^8 m/s, which is impossible).",
    figure: null,
    check: {
      question: "Light in a vacuum travels at three times ten to the eight metres per second. In glass of refractive index one point five, is its speed bigger or smaller?",
      answer: "Smaller. You divide by the refractive index, giving two times ten to the eight metres per second, because nothing beats light in a vacuum."
    }
  },
  {
    id: "lig-critical-formula",
    topicKey: "t12-light",
    subtopic: "critical-angle",
    label: "Critical angle formula muddled",
    belief: "The sine of the critical angle equals the refractive index.",
    tell: "The student writes the sine of the critical angle as the refractive index itself, which asks for the sine of an angle to be bigger than one.",
    whyItHappens: "The refractive index is the number in the question, so students reach for it directly and forget the critical angle formula uses one over that number.",
    reteach: "The sine of the critical angle equals one divided by the refractive index, not the refractive index itself. So for glass with a refractive index of one point five two, the sine of the critical angle is one over one point five two, which is about zero point six six, giving a critical angle of about forty one degrees. Setting the sine equal to the refractive index would need a sine bigger than one, which is impossible, so remember the one over.",
    microExample: "sin c = 1 / n = 1 / 1.52 = 0.658, so c = 41 degrees (not sin c = 1.52, which has no solution).",
    figure: "fig-14-12-critical-angle.svg",
    check: {
      question: "For a medium of refractive index two, what is the sine of the critical angle?",
      answer: "One divided by two, which is zero point five, so the critical angle is thirty degrees. It is one over the refractive index, not the refractive index."
    }
  },
  {
    id: "lig-tir-wrong-direction",
    topicKey: "t12-light",
    subtopic: "total-internal-reflection",
    label: "Total internal reflection in the wrong direction",
    belief: "Total internal reflection can happen when light goes from a less dense medium into a denser one, such as air into glass.",
    tell: "The student allows total internal reflection for a ray entering glass from air, or ignores which medium is denser.",
    whyItHappens: "Students focus on the angle being large and forget the equally important condition about which way the light is travelling between the media.",
    reteach: "Total internal reflection can only happen when light is travelling from a denser medium into a less dense one, for example from glass into air, and trying to escape. Going the other way, from air into glass, the light can always get in, so there is no total internal reflection. Both conditions must hold together: denser to less dense, and an angle of incidence greater than the critical angle. Check the direction of travel first.",
    microExample: "Glass to air can give total internal reflection; air to glass never does, whatever the angle.",
    figure: "fig-14-13-total-internal-reflection.svg",
    check: {
      question: "Can total internal reflection happen for light going from air into glass?",
      answer: "No. It only happens going from a denser medium to a less dense one, such as glass into air. Air into glass never does."
    }
  },
  {
    id: "lig-tir-below-critical",
    topicKey: "t12-light",
    subtopic: "total-internal-reflection",
    label: "Total internal reflection at any angle",
    belief: "Total internal reflection happens at any angle of incidence, or light still escapes when the angle is beyond the critical angle.",
    tell: "The student reports total internal reflection below the critical angle, or expects a refracted ray to escape when the angle is greater than the critical angle.",
    whyItHappens: "The idea that a specific threshold angle switches the behaviour over is easy to lose, so students treat all angles the same.",
    reteach: "Total internal reflection only happens when the angle of incidence is greater than the critical angle. Below the critical angle the light refracts and escapes as normal. Once the angle passes the critical angle, no light can get out and all of it reflects back inside. So you must compare the angle of incidence with the critical angle every time: larger means total internal reflection, smaller means the ray escapes.",
    microExample: "Critical angle 42 degrees: at 45 degrees (greater) total internal reflection occurs; at 30 degrees (smaller) the ray refracts out.",
    figure: "fig-14-13-total-internal-reflection.svg",
    check: {
      question: "The critical angle of a glass is forty two degrees. A ray inside hits the surface at thirty degrees. Does total internal reflection happen?",
      answer: "No. Thirty degrees is smaller than the critical angle, so the ray refracts and escapes. It needs an angle greater than forty two degrees."
    }
  },
  {
    id: "lig-lens-shape",
    topicKey: "t12-light",
    subtopic: "lenses",
    label: "Converging lens shape confused with diverging",
    belief: "A converging lens is thinner in the middle than at its edges.",
    tell: "The student describes a converging lens as thin in the middle, or mixes up which shape brings rays to a focus.",
    whyItHappens: "The words convex and concave sound alike and both start similarly, so students attach the wrong cross section to the wrong lens.",
    reteach: "A converging lens, also called convex, is thicker in the middle than at its edges, and it brings parallel rays together to a focus. A diverging lens, also called concave, is thinner in the middle and spreads parallel rays out. A simple memory aid is that a converging lens bulges outwards like a lentil, and that fat middle is what pulls the rays inwards to a point.",
    microExample: "Converging (convex) lens: thicker in the middle, so parallel rays converge to the principal focus F.",
    figure: "fig-14-15-converging-diverging.svg",
    check: {
      question: "Is a converging lens thicker or thinner in the middle?",
      answer: "Thicker in the middle. That fat centre is what brings parallel rays together to a focus."
    }
  },
  {
    id: "lig-focal-length-def",
    topicKey: "t12-light",
    subtopic: "lenses",
    label: "Focal length confused with image distance",
    belief: "The focal length is the distance from the lens to the image, whatever the object position.",
    tell: "The student calls whatever image distance they measure the focal length, so their focal length changes from question to question.",
    whyItHappens: "Both are distances measured out from the lens, so students blur the fixed focal length together with the image distance that shifts as the object moves.",
    reteach: "The focal length is a fixed property of the lens: it is the distance from the optical centre to the principal focus, where rays that came in parallel to the axis meet. It does not change when you move the object. The image distance is different and does depend on where the object sits. Only when the object is very far away, effectively at infinity, does the image land right at the principal focus, so image distance equals focal length just in that one case.",
    microExample: "Focal length f = optical centre to principal focus F (a fixed number). Image distance v changes with object distance u.",
    figure: "fig-14-16-lens-focal-point.svg",
    check: {
      question: "Does the focal length of a lens change when you move the object closer?",
      answer: "No. The focal length is fixed, from the optical centre to the principal focus. It is the image distance that changes when the object moves."
    }
  },
  {
    id: "lig-real-image-upright",
    topicKey: "t12-light",
    subtopic: "lenses",
    label: "Real image thought to be upright",
    belief: "A real image from a converging lens is upright.",
    tell: "The student describes a real image, such as one on a screen, as upright rather than inverted.",
    whyItHappens: "Students picture the object the right way up and expect its image to match, not realising the crossing rays flip a real image over.",
    reteach: "With a converging lens, a real image is always inverted, that is upside down compared with the object. This is because the rays cross over before they meet to form the image. A real image is also the kind you can catch on a screen. It is only the virtual image, formed when the object is inside the focal length, that comes out upright. So real goes with inverted, and virtual goes with upright.",
    microExample: "Object beyond F with a converging lens: real image, always inverted (upright only when the image is virtual).",
    figure: "fig-14-18-lens-real-image.svg",
    check: {
      question: "A converging lens forms a real image on a screen. Is it upright or inverted?",
      answer: "Inverted. A real image from a converging lens is always upside down, because the rays cross before they meet."
    }
  },
  {
    id: "lig-lens-always-enlarge",
    topicKey: "t12-light",
    subtopic: "lenses",
    label: "Converging lens thought to always enlarge",
    belief: "A converging lens always makes the image bigger than the object, wherever the object is placed.",
    tell: "The student calls every converging lens image enlarged, even for an object far beyond twice the focal length.",
    whyItHappens: "The magnifying glass is the lens students meet first, so they generalise its enlarging behaviour to every object position.",
    reteach: "A converging lens does not always enlarge. The size of the image depends on where the object sits. Beyond twice the focal length the image is smaller than the object, at exactly twice the focal length it is the same size, and only closer than twice the focal length does it become larger. So before deciding the image is enlarged, check the object distance against the focal length. The magnifying glass enlarges only because the object is inside the focal length.",
    microExample: "Object beyond 2f: real, inverted, diminished (smaller). Object at 2f: same size. Only inside 2f does it enlarge.",
    figure: "fig-14-17-lens-construction.svg",
    check: {
      question: "An object is placed far beyond twice the focal length of a converging lens. Is the image bigger or smaller than the object?",
      answer: "Smaller. Beyond twice the focal length the image is diminished. A converging lens does not always enlarge."
    }
  },
  {
    id: "lig-magnify-real",
    topicKey: "t12-light",
    subtopic: "lenses",
    label: "Magnifying glass image thought to be real",
    belief: "When the object is inside the focal length, the converging lens forms a real, inverted image.",
    tell: "The student describes the magnifying glass image as real and inverted, or expects to catch it on a screen.",
    whyItHappens: "Students remember that converging lenses form real inverted images and apply that to every case, missing that an object inside the focal length is the exception.",
    reteach: "When the object is closer to the lens than the principal focus, that is inside the focal length, the converging lens acts as a magnifying glass and forms a virtual, upright, enlarged image on the same side as the object. It is not real, so you cannot catch it on a screen, and it is not inverted, it stays the right way up. The real, inverted images only appear when the object is beyond the principal focus.",
    microExample: "Object inside f (magnifying glass): virtual, upright, enlarged (not real, not inverted).",
    figure: "fig-14-19-lens-virtual-image.svg",
    check: {
      question: "You look at small print through a magnifying glass. Is the image real and inverted?",
      answer: "No. It is virtual, upright and enlarged, on the same side as the print, so you could not catch it on a screen."
    }
  }
];
