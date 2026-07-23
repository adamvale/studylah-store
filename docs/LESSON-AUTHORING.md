# Interactive lesson authoring guide

This is the doorway for **interactive lessons** (the Brilliant-style, hands-on,
Gugu-guided activities). It is a DIFFERENT system from the question/teaching
bank in `CONTENT-AUTHORING.md`:

- Question/teaching bank = markdown in `content/game-bank/`, seeded to the DB.
- **Interactive lessons = typed `LessonStep[]` in TypeScript.** No DB, no seed.
  Add data, it renders through the shared player everywhere.

The whole point: **new lessons are pure content**. You never touch engine code.
The same `LessonStep[]` shape scales to hundreds of lessons.

## Where lessons live

- Practical Lab (sciences): `src/lib/practical-lab.ts` (`PRACTICAL_SUBJECTS`)
- Life Skills: `src/lib/life-skills.ts` (`LIFE_TRACKS`)
- The type contract: `src/lib/lesson-steps.ts` (`LessonStep`)
- The renderer: `src/components/lesson-player.tsx` (do not edit to add content)

A lesson is `{ key, title, minutes, steps: LessonStep[], talkPrompt? }`.
`key` is globally unique. `steps` play one per screen; the student must engage
before Continue unlocks.

## Non-negotiable rules (a live product for minors)

1. **No emojis.** Any glyph comes from `src/components/icons.tsx`, never emoji.
2. **No em dashes or en dashes** in any copy. Use commas, colons, periods.
   Hyphens inside words are fine.
3. **No grade, mark, pass or result promises.** Coach the method. Never the
   words guaranteed, confirmed, leaked, insider, sure win, or "100 percent".
4. **Science/maths notation:** write it so it reads like the exam. `_` marks a
   subscript, `^` a superscript, each taking one character or a `{group}`:
   `H_2O`, `C_xH_8`, `Cu^{2+}`, `SO_4^{2-}`, `x^2`, `10^{-3}`, `cm^3`. Never
   Unicode subscript/superscript characters. The player renders these with
   `<Sci>`, so just write the markers.
5. Keep every string short and plain, for a 13 to 17 year old.

## The step kinds

Every step is one object in the `steps` array. Read-only steps teach; problem
steps make the student DO something before Continue unlocks.

### Reading steps

```ts
{ kind: "concept", heading?: "Short title", body: "One idea, a few sentences." }
{ kind: "insight", body: "A highlighted takeaway. One punchy line." }
{ kind: "reveal", prompt: "A question to think about first.", answer: "The answer, revealed on tap." }
```

### Problem steps (interactive)

All problem steps support Gugu's scripted voice (see next section): add optional
`ask` and `hints`. All carry `explain` (the teaching summary, shown and spoken
when solved or revealed).

```ts
// Multiple choice
{ kind: "choice", question: "...", options: ["A","B","C"], correct: 1, explain: "Why B." }

// Drag a slider into a target band; the reading turns green in range
{ kind: "slider", prompt: "...", min: 0, max: 1, step: 0.01, unit: " mm",
  start: 0.61, targetMin: 0.23, targetMax: 0.25, explain: "..." }

// Put items in the right order (write them ALREADY in correct order)
{ kind: "order", prompt: "...", items: ["First","Second","Third"], explain: "..." }

// Tap a left item then its right partner
{ kind: "match", prompt: "...",
  pairs: [{ left: "Cu^{2+}", right: "Blue precipitate" }, ...], explain: "..." }

// Build an answer from a bank of tiles (bank may include distractors);
// `answer` is the correct ordered sequence, each entry matching a tile string
{ kind: "tiles", prompt: "...", tiles: ["gradient","=","rise","run","÷","×"],
  answer: ["gradient","=","rise","÷","run"], explain: "..." }

// Tap a grid to plot a point; solved within `tolerance` (default 0) of target
{ kind: "plot", prompt: "...", xLabel: "t / s", yLabel: "d / m",
  xMax: 6, yMax: 8, targetX: 3, targetY: 6, explain: "..." }

// Toggle switches; the lamp lights when EXACTLY `needed` are closed
{ kind: "circuit", prompt: "...",
  switches: [{ id: "s1", label: "Switch A" }, { id: "s2", label: "Switch B" }],
  needed: ["s1","s2"], explain: "..." }

// Fill the blanks from a word bank (distractors allowed). N segments = N-1
// blanks, filled left to right; `answer` is the correct word per blank in order.
{ kind: "cloze", prompt: "...",
  segments: ["Distance is a ", " quantity, but displacement is a ", " quantity."],
  bank: ["scalar","vector","negative"], answer: ["scalar","vector"], explain: "..." }

// Tap the ONE line in a worked solution that has the mistake (0-based errorLine).
// The teaching-native step: finding your own slip is how it sticks.
{ kind: "spoterror", prompt: "Find the mistake.",
  lines: ["a = (v - u) / t", "a = (8 - 20) / 6", "a = 12 / 6", "a = 2 m/s^2"],
  errorLine: 2, explain: "..." }

// Sort each item into its correct bin (2 to 3 bins). `bin` is a 0-based index.
{ kind: "classify", prompt: "Scalar or vector?",
  bins: ["Scalar","Vector"],
  items: [{ text: "speed", bin: 0 }, { text: "velocity", bin: 1 }], explain: "..." }

// Pick which graph matches. Each option is a mini line chart from its `points`
// (x,y pairs on a shared 0..max scale). `correct` is the 0-based option index.
{ kind: "graphpick", prompt: "Which shows uniform acceleration from rest?",
  xLabel: "time", yLabel: "velocity",
  options: [{ points: [[0,0],[10,10]] }, { points: [[0,8],[10,8]] }],
  correct: 0, explain: "..." }
```

## Gugu's scripted voice (zero cost)

Gugu guides the student through a problem with **scripted** lines. They are the
SAME for every student and read aloud on demand by the device (no AI, no audio
files). Add to any problem step:

- `ask`: Gugu's opening line, shown at the top and spoken. Warm, one or two
  short sentences, ending with a nudge. Example:
  `"This is a titration question. What do you do first? Put the steps in order."`
- `hints`: an array of 2 to 3 escalating nudges. The student taps Help to hear
  them one at a time. Hint 1 is gentle; the last is nearly the answer.
- `explain`: the teaching summary, spoken when the student solves it or reveals
  the answer. State the actual answer here so "reveal" teaches.

Write `ask`/`hints`/`explain` as speech: plain words, no notation the ear can't
parse (say "0.24 millimetres", not "0.24 mm", inside `ask`/`hints`; keep the
`_`/`^` markers for the on-screen `prompt`/`options`).

## Adding a lesson (worked shape)

```ts
{
  key: "chem-gas-1",
  title: "Testing for gases",
  minutes: 5,
  steps: [
    { kind: "concept", heading: "One test, one gas", body: "..." },
    { kind: "match",
      ask: "Match each gas to its test. Which one do you know for certain?",
      hints: ["Start with the gas that relights a glowing splint.", "Carbon dioxide turns limewater milky."],
      prompt: "Match the gas to its test.",
      pairs: [{ left: "Oxygen", right: "Relights a glowing splint" }, ...],
      explain: "Oxygen relights a splint; carbon dioxide turns limewater milky; hydrogen gives a squeaky pop." },
    { kind: "insight", body: "Name the gas AND the positive result. Both earn marks." },
  ],
  talkPrompt: "Quiz me on the gas tests, one at a time.",
}
```

## Quality bar per lesson

- 4 to 6 steps. Open with a `concept`, close with an `insight`.
- At least one problem step (ideally two, of different kinds).
- Every problem step has `ask`, 2 to 3 `hints`, and a teaching `explain`.
- Runs on one screen with no scrolling (keep options/tiles to a handful).

## Checks before you hand it back

- `npx tsc --noEmit` passes (types catch most mistakes).
- `npm test` passes (compliance + uniqueness invariants for lessons).
- No emoji, no dashes, notation uses `_`/`^`.

## The Tuition layer: bite-sized subconcept lessons

Under **Learn > Tuition**, a topic (e.g. "T2 Kinematics") opens into small
**subconcept** boxes (T2.1, T2.2, T2.3 ...). Each box is a mini-lesson that
*teaches a little, then tests it*. This is the "teach before you practise"
layer, so a student never faces a question cold.

- Lives in: `src/lib/teaching/subconcepts.ts` (`SUBCONCEPTS`, keyed by topicKey).
- A subconcept is `{ id, code, title, blurb, steps: LessonStep[] }`.
- `subconceptsFor(topicKey)` is what the subject page reads. Register the same
  array under every topicKey that shares the content (Pure, Science, N-Level).

### Two extra rules for this layer (on top of the non-negotiables above)

6. **One idea per `concept` step.** A teaching card shows exactly ONE piece of
   knowledge. "Distance" and "Displacement" are TWO cards, never one. If a card
   teaches two things, split it. Bodies stay short (2 to 4 sentences).

7. **Every `concept` and `insight` step has a `say`.** `body` is the few words
   shown on screen; `say` is what Gugu *speaks to teach it aloud*. The student
   taps "I understand" before Continue unlocks, and can tap "Please repeat" to
   hear `say` again. So `say` must **supplement** the screen, not read it back:
   add the intuition, the worked aside, the "here is the trap", in warm spoken
   English (write numbers/units as words, like `ask`: "six metres", not "6 m").

### Worked subconcept shape

```ts
{
  id: "t2.1", code: "T2.1", title: "Distance vs displacement",
  blurb: "Path length versus the straight line, with direction",
  steps: [
    { kind: "concept", heading: "Distance",
      body: "Distance is the total path you travel. It is a scalar: size only, no direction.",
      say: "Let us start with distance. It is simply how far you actually travel, adding up every step no matter which way you go. Walk three metres out and three back, and your feet have covered six metres in total." },
    { kind: "concept", heading: "Displacement",
      body: "Displacement is the straight line from start to finish, with a direction. It is a vector.",
      say: "Displacement is different. It only cares where you end up compared to where you began. Walk out and back to the same spot and your displacement is zero, even though the distance was six metres." },
    { kind: "choice", question: "...", options: ["..."], correct: 1,
      ask: "...", hints: ["...", "..."], explain: "..." },
    { kind: "insight",
      body: "Return to your start and displacement is zero, even though distance is not.",
      say: "So the one thing to hold onto: come back to where you started and your displacement is zero, even though you covered a real distance along the way." },
  ],
}
```

### Quality bar per subconcept

- 3 to 5 steps: one or more single-idea `concept` cards, then ONE test
  (a `choice`/`slider`/`classify`/... problem), then an `insight`.
- Every `concept` and `insight` has a `say`. Every problem has `ask`/`hints`/`explain`.
- One idea per teach card. If in doubt, split into more cards.
