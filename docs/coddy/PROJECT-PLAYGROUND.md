# Project Playground — Coddy content backlog

**Initiative name: Project Playground.** Author interactive, hands-on,
Gugu-guided lessons at volume so StudyLand teaches like Brilliant. Claude Code
built the engine; Coddy fills it with content. We run in parallel.

## Division of labour (so we never touch the same thing)

- **Claude Code (engine):** the lesson player, the step kinds (concept, choice,
  reveal, insight, slider, order, match, tiles, plot, circuit), Gugu's scripted
  voice + hint ladder, and wiring new content into the app. Do NOT write these.
- **Coddy (content, this doc):** author lessons as data, following
  `docs/LESSON-AUTHORING.md` to the letter.

Coddy's Drive connector is create-only and cannot edit the app's source in
place. So **Coddy CREATES drop-in files; Claude Code wires them in.** No merge
collisions: Coddy never edits `practical-lab.ts` or `life-skills.ts`.

## Deliverable format

Create files in a Drive folder named `2026-07-22-project-playground/`. One file
per lesson, named `<key>.ts`, each exporting a single `PracticalLesson` (for
sciences) or a Life Skills lesson object, exactly matching the shapes in
`docs/LESSON-AUTHORING.md`. Example file `chem-gas-1.ts`:

```ts
export const lesson = {
  key: "chem-gas-1",
  title: "Testing for gases",
  minutes: 5,
  steps: [ /* ...LessonStep[] per the authoring guide... */ ],
  talkPrompt: "Quiz me on the gas tests, one at a time.",
};
```

Claude Code drops each `lesson` into the right subject/track array and runs the
checks. Keep keys globally unique and prefixed by subject: `chem-*`, `phys-*`,
`bio-*`, `life-*`.

## The rules (from LESSON-AUTHORING.md, do not break)

- No emojis. No em/en dashes. No grade/mark/pass promises or the banned words.
- Notation with `_` (subscript) and `^` (superscript): `H_2O`, `Cu^{2+}`,
  `cm^3`, `x^2`. Never Unicode sub/superscripts.
- Short, plain language for a 13 to 17 year old.
- Every problem step gets `ask` (Gugu's opening line), 2 to 3 escalating
  `hints`, and a teaching `explain`. Write `ask`/`hints` as speech (say "0.24
  millimetres", not "0.24 mm").
- 4 to 6 steps per lesson: open with `concept`, close with `insight`, at least
  one (ideally two) problem steps of different kinds.

## Backlog — round 1 (author these, in order)

Each row: the lesson key, topic, and the problem-step kinds to include. Vary the
kinds; do not make every lesson a `match`.

### Chemistry (`chem-*`)
1. `chem-gas-1` Testing for gases — match (gas to test) + choice
2. `chem-mole-1` Moles and formula mass — tiles (build n = m ÷ M) + slider (set a mass)
3. `chem-rate-1` Rate of reaction graphs — plot (a point on a rate curve) + choice
4. `chem-electro-1` Electrolysis products — match (electrode to product) + order (the steps)
5. `chem-acidbase-1` Acids, bases, salts — order (preparation of a salt) + choice
6. `chem-bonding-1` Ionic vs covalent — match (property to bonding) + tiles (build a dot-and-cross rule)

### Physics (`phys-*`)
7. `phys-forces-1` Resultant force — plot (net force point) + tiles (build F = m × a)
8. `phys-moments-1` Moments and balance — slider (move a pivot to balance) + choice
9. `phys-energy-1` Energy stores and transfers — match (store to example) + order
10. `phys-waves-1` Wave properties — tiles (build v = f × λ) + slider (set a wavelength)
11. `phys-circuit-2` Series vs parallel — circuit (light the lamp in parallel) + choice

### Biology (`bio-*`)
12. `bio-cell-1` Cell structures — match (organelle to job) + choice
13. `bio-enzyme-1` Enzymes and temperature — plot (rate vs temperature point) + order (a fair test)
14. `bio-transport-1` Diffusion and osmosis — match (term to definition) + slider (set a concentration)
15. `bio-genetics-1` Monohybrid crosses — tiles (build a Punnett prediction) + choice

### Life Skills (`life-*`) — see LIFE_TRACKS for existing tracks and tone
16. `life-money-2` Needs vs wants — match + order (build a simple budget)
17. `life-calm-2` Beating exam nerves — order (a calming routine) + choice
18. `life-time-2` Planning a study week — order + tiles (build a daily plan)

## Hand-back

Drop the files into the Drive folder and note in the morning brief which keys
are ready. Claude Code wires them in, runs `npx tsc --noEmit` and `npm test`,
verifies one in the app, and commits. Then we start round 2.
