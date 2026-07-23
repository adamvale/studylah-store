import type { Subconcept } from "@/lib/teaching/subconcepts";

// T12 Light, section 2. Grounded in KB Chapter 14 (Light), section 14.3.
// Figure colour key: light rays = blue; normal and mirror = grey; the object = a white arrow;
// the image = a white dashed (ghost) arrow. Real reflected rays are solid; virtual rays behind the
// mirror are dashed.

export const BOXES: Subconcept[] = [
  {
    id: "t12.2",
    code: "T12.2",
    title: "The image in a plane mirror",
    blurb: "Where the image sits behind a plane mirror, and why it is a virtual image",
    steps: [
      {
        kind: "concept",
        heading: "The image and where it sits",
        figure: "fig-14-05-plane-mirror-image",
        body: "The image in a *plane mirror* is *upright*, exactly the *same size* as the object, and sits the *equal distance* behind the mirror as the object stands in front.",
        say: "In the picture a white arrow stands in front of a grey mirror, and that is the object. A white dashed arrow sits the same distance behind the mirror, and that ghost arrow is the image. Notice the image points the same way up as the object and is exactly the same height, and the grey label d marks the equal distances, one in front and one behind.",
      },
      {
        kind: "concept",
        heading: "Left and right are swapped",
        body: "The image is also *laterally inverted*: left and right are *swapped over*, even though top and bottom stay the same. That is why a word held up to a mirror reads backwards.",
        say: "Hold your right hand up to a mirror and the reflection lifts what looks like its left hand. The image is laterally inverted, which means left and right are exchanged while up and down are not. It is the reason an ambulance prints its name reversed on the bonnet, so that in a driver's mirror the letters read the right way round.",
      },
      {
        kind: "concept",
        heading: "Virtual or real image",
        body: "A plane mirror gives a *virtual* image: the rays only appear to come from behind the mirror, so it *cannot be caught on a screen*. A *real* image, such as the picture on a cinema screen or on your retina, is one that light rays actually reach.",
        say: "There are 2 kinds of image. A virtual image is one the light only seems to come from, so you can never catch it on a screen or a wall. The image behind a plane mirror is virtual. A real image is different, because light rays truly meet there and you can throw it onto a screen, like the picture at the cinema or the image formed on the retina at the back of your eye.",
      },
      {
        kind: "concept",
        heading: "Locating the image by construction",
        figure: "fig-14-06-mirror-construction",
        body: "To find the image, place it the *equal distance* behind the mirror, draw *dashed virtual rays* running back from the image, and draw the *solid reflected rays* that actually travel to the eye.",
        say: "In this diagram the white object arrow sits in front of the grey mirror and the white dashed image arrow sits the same distance behind. Blue solid lines are the real reflected rays bouncing off the mirror into the observer's eye. Blue dashed lines run straight back behind the mirror to the image, showing where the eye thinks the light came from. The image is virtual because only those dashed rays, not real light, reach behind the mirror.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement about the image formed in a plane mirror.",
        bins: ["True for a plane mirror image", "False"],
        items: [
          { text: "It is upright", bin: 0 },
          { text: "It is the same size as the object", bin: 0 },
          { text: "It is laterally inverted", bin: 0 },
          { text: "It is as far behind as the object is in front", bin: 0 },
          { text: "It can be caught on a screen", bin: 1 },
          { text: "It is smaller than the object", bin: 1 },
        ],
        ask: "Recall the 5 characteristics: virtual, upright, laterally inverted, same size, and equal distance behind. Tap each statement and drop it in the correct bin.",
        hints: [
          "The image is upright, same size, laterally inverted, and equal distance behind.",
          "Because the image is virtual it cannot be caught on a screen, and it is never smaller than the object.",
        ],
        explain: "A plane mirror image is upright, the same size, laterally inverted, and the equal distance behind. It is virtual, so it cannot be caught on a screen and is never diminished.",
      },
      {
        kind: "choice",
        question: "Which of these is a real image, one that light rays actually reach and can be caught on a screen?",
        options: [
          "Your face seen in a bathroom mirror",
          "A word seen reversed in a plane mirror",
          "The picture projected onto a cinema screen",
          "The image that appears to sit behind a plane mirror",
        ],
        correct: 2,
        ask: "A real image is one you can catch on a screen; a plane mirror only ever gives a virtual image. Which option is caught on a screen?",
        hints: [
          "Anything seen in a plane mirror is virtual, so rule those out.",
          "The cinema image lands on an actual screen, so real light rays reach it.",
        ],
        explain: "The cinema picture is a real image, because light rays truly meet on the screen. Every image formed by a plane mirror is virtual and cannot be caught on a screen.",
      },
      {
        kind: "choice",
        question: "An object stands 2.5 m in front of a plane mirror. How far apart are the object and its image?",
        options: ["2.5 m", "5.0 m", "1.25 m", "0 m"],
        correct: 1,
        ask: "The image is as far behind the mirror as the object is in front, so add the 2 distances. Work out 2.5 plus 2.5.",
        hints: [
          "The image sits 2.5 metres behind the mirror.",
          "Object to mirror is 2.5 metres and mirror to image is 2.5 metres, and 2.5 plus 2.5 is 5.0.",
        ],
        working: [
          { label: "Formula", latex: "d_{\\text{object to image}} = d_{\\text{in front}} + d_{\\text{behind}}" },
          { label: "Substitute", latex: "d = 2.5 + 2.5" },
          { label: "Answer", latex: "d = 5.0\\ \\text{m}" },
        ],
        explain: "The object and image are 5.0 metres apart, because the image lies 2.5 metres behind the mirror while the object is 2.5 metres in front, and 2.5 plus 2.5 is 5.0 metres.",
      },
      {
        kind: "choice",
        question: "You hold a card reading the word 'AMBULANCE' up to a plane mirror and it looks reversed. Why?",
        options: [
          "The mirror turns the image upside down",
          "The mirror makes the image larger than the card",
          "The image is formed in front of the mirror",
          "The image is laterally inverted, so left and right are swapped",
        ],
        correct: 3,
        ask: "In a plane mirror top and bottom stay put but 1 pair of directions is exchanged. Which pair swaps over?",
        hints: [
          "The image stays upright, so it is not turned upside down.",
          "Left and right are exchanged, which is called lateral inversion.",
        ],
        explain: "The word looks reversed because the image is laterally inverted: left and right are swapped while top and bottom stay the same. The image is still upright and the same size.",
      },
      {
        kind: "insight",
        body: "Every plane mirror image is *virtual*, *upright*, *same size*, and the *equal distance* behind as the object is in front, with left and right laterally inverted.",
        say: "Here is the idea to keep. Whatever you place before a plane mirror, the image is always virtual so it never lands on a screen, always upright, always the same size, and always as far behind the mirror as the object is in front. The only thing that flips is left for right.",
      },
    ],
  },
];
