import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, section 4. Grounded in KB Chapter 07 (Energy, Work and Power) section on the
// conservation of energy. Figure colours follow the carry-over colour key: the bob (object) = white,
// the gravitational potential store and weight = pink, motion and the kinetic store = blue,
// height and dimension guides = grey. No new colour is introduced in this section.

export const BOXES: Subconcept[] = [
  {
    id: "t6.4",
    code: "T6.4",
    title: "Conservation of energy",
    blurb: "Energy is never lost, only moved between stores, as a swinging pendulum shows",
    steps: [
      {
        kind: "concept",
        heading: "The principle of conservation of energy",
        body: "The *principle of conservation of energy* says energy cannot be created or destroyed, only *transferred* from one store to another. The total energy of an *isolated system* stays constant.",
        say: "This is one of the biggest ideas in physics. Energy is never made from nothing and never truly disappears. It only moves from one store to another. Add up every store in an isolated system, one that nothing enters or leaves, and the total is always the same before and after any change.",
      },
      {
        kind: "concept",
        heading: "The ideal pendulum",
        figure: "fig-07-07-ideal-pendulum",
        body: "In an *ideal pendulum*, with no friction and no air resistance, the *gravitational potential* store at the top swaps fully for the *kinetic* store at the bottom, so the bob rises to the same *height* each swing.",
        say: "In the picture a white bob swings on a thread between 2 high points, A on one side and C on the other, passing through the lowest point B in the middle. A grey guide marks the height h that the bob drops. At A and at C the bob is momentarily still, so its gravitational potential store is at a maximum and its kinetic store is 0. As it sweeps down, a blue arrow shows it speeding up, until at B it moves fastest, where the kinetic store is at a maximum and the gravitational potential store is at a minimum. With nothing to waste energy, it climbs back to the very same height every time.",
      },
      {
        kind: "concept",
        heading: "Energy loss in the real world",
        body: "A real swing slowly dies away because *friction* and *air resistance* transfer some energy to *internal* stores of the surroundings. The energy is not destroyed, only *dissipated* and spread too thinly to be useful.",
        say: "A real pendulum does not swing forever. Each pass, a little energy is transferred by friction at the pivot and by air resistance to the internal stores of the surroundings, warming them very slightly. So the swings get smaller and finally stop. Notice the energy is not gone. It has been dissipated, spread out into the surroundings where it is too thinly shared to do useful work.",
      },
      {
        kind: "order",
        prompt: "Put the energy changes in order as the ideal pendulum swings from A, down through B, and up to C.",
        items: [
          "At A the bob is at rest, with a maximum gravitational potential store and zero kinetic store",
          "From A to B the gravitational potential store transfers to the kinetic store",
          "At B the bob moves fastest, with a maximum kinetic store and a minimum gravitational potential store",
          "From B to C the kinetic store transfers back to the gravitational potential store",
          "At C the bob is momentarily at rest again, with a maximum gravitational potential store",
        ],
        ask: "Follow the bob from A at the top, down through B at the lowest point, and back up to C. Think about which store is full at each stage.",
        hints: [
          "At the top the bob is still, so the gravitational potential store is full and the kinetic store is 0.",
          "Falling from A to B fills the kinetic store; rising from B to C fills the gravitational potential store again.",
        ],
        explain: "Falling from A to B, the gravitational potential store transfers to the kinetic store, so the bob is fastest at B. Rising from B to C, the kinetic store transfers back, and with no energy wasted the bob reaches the same height at C.",
      },
      {
        kind: "slider",
        prompt: "A mango of mass 0.500 kg falls from a branch 20 m high. Take g = 10 N/kg. All its gravitational potential store transfers to the kinetic store. Set the slider to its speed just before it lands, in metres per second.",
        min: 0,
        max: 40,
        step: 0.5,
        unit: "m/s",
        start: 0,
        targetMin: 19.5,
        targetMax: 20.5,
        ask: "First find the gravitational potential store with m g h, then set that equal to half m v^2 and solve for v.",
        hints: [
          "The gravitational potential store is 0.500 × 10 × 20, which is 100 joules.",
          "Set 100 equal to a half times 0.500 times v^2, so v^2 is 400 and v is 20.",
        ],
        working: [
          { label: "Formula", latex: "mgh = \\tfrac{1}{2} m v^2" },
          { label: "Substitute", latex: "0.500 \\times 10 \\times 20 = \\tfrac{1}{2} \\times 0.500 \\times v^2" },
          { label: "Answer", latex: "v = 20\\ \\text{m/s}" },
        ],
        explain: "The speed is 20 metres per second. The gravitational potential store is 0.500 kilograms times 10 newtons per kilogram times 20 metres, which is 100 joules. All of it becomes kinetic energy, so a half times 0.500 times v^2 is 100, giving v^2 of 400 and v of 20.",
      },
      {
        kind: "choice",
        question: "A cyclist and bicycle of weight 800 N free-wheel from rest down a hill of vertical height 5 m (g = 10 N/kg). Taking the whole gravitational potential store to the kinetic store, find the speed at the foot.",
        options: ["10 m/s", "5 m/s", "20 m/s", "100 m/s"],
        correct: 0,
        ask: "The gravitational potential store is weight times height. The mass is the weight divided by g, which is 80 kilograms. Set the energy equal to half m v^2.",
        hints: [
          "Weight times height is 800 × 5, which is 4000 joules.",
          "The mass is 80 kilograms, so 4000 equals a half times 80 times v^2, giving v^2 of 100 and v of 10.",
        ],
        working: [
          { label: "Formula", latex: "Wh = \\tfrac{1}{2} m v^2" },
          { label: "Substitute", latex: "800 \\times 5 = \\tfrac{1}{2} \\times 80 \\times v^2" },
          { label: "Answer", latex: "v = 10\\ \\text{m/s}" },
        ],
        explain: "The speed is 10 metres per second. The gravitational potential store is 800 newtons times 5 metres, which is 4000 joules. The mass is 800 ÷ 10, which is 80 kilograms, so a half times 80 times v^2 is 4000, giving v^2 of 100 and v of 10.",
      },
      {
        kind: "choice",
        question: "As a real pendulum slows and stops, we say energy is 'lost'. What does that really mean?",
        options: [
          "The energy is dissipated to the surroundings as internal (thermal) energy, not destroyed",
          "The energy is destroyed and no longer exists",
          "The energy disappears the moment the bob stops moving",
          "The energy is turned into extra mass in the bob",
        ],
        correct: 0,
        ask: "Energy is always conserved, so it cannot be destroyed. Think about where friction and air resistance send it.",
        hints: [
          "The total energy is still the same; it has only moved to a different store.",
          "Friction and air resistance warm the surroundings, spreading the energy into internal stores.",
        ],
        explain: "Energy is dissipated to the surroundings as internal energy, not destroyed. Conservation of energy still holds, but the energy is now spread too thinly to be useful.",
      },
      {
        kind: "insight",
        body: "Energy is never truly *lost*: what we call energy loss is energy *dissipated* to the *surroundings*, spread out and less useful, while the total is always *conserved*.",
        say: "Here is the idea to keep. When people say energy is lost, they never mean it vanishes. The total energy is always conserved. Loss just means some has been dissipated to the surroundings as internal energy, spread so thinly that we can no longer put it to use.",
      },
    ],
  },
];
