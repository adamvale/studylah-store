# Content authoring guide (questions + studying knowledge)

This is the ONE doorway for injecting new study content into StudyLah. Drop
markdown files into `content/game-bank/`, run the seed, and the content flows
automatically into every surface: Legends battles, gyms, story quests, duels,
the diagnostic, daily three, drills and the Gurus. No game code ever needs to
change for new content.

## Where content lives

- One file per subject: `content/game-bank/<level>__<slug>.md`
  (e.g. `o-level__physics-pure.md`). Adding blocks to an existing file is the
  normal workflow; a brand-new subject gets a new file.
- Seed it: `npm run db:seed` (idempotent; each subject's rows are replaced
  wholesale, so edits and deletions take effect).
- Deploys run the seed automatically at boot, so pushing the markdown is
  enough for production.

## File format

Frontmatter, then any number of fenced ```yaml blocks in two flavours.

```markdown
---
level: o-level
slug: physics-pure
subjectName: Physics (Pure)
family: physics
---

## QUESTIONS
(...question blocks...)

## TEACHING
(...teaching card blocks...)
```

### 1. Question blocks (battles, gyms, quests, diagnostic, daily three)

```yaml
type: mcq                     # or "short" (typed answer)
topic: "P3 Dynamics"          # syllabus-coded topic tag: ASCII codes, see notation rules
stem: "A 2 kg trolley accelerates at 3 m/s². What is the resultant force?"
options:                      # mcq only, 2-6 options
  - "6 N"
  - "1.5 N"
  - "5 N"
  - "0.67 N"
answer: 0                     # index into options (mcq)
# accepted: ["6", "6 N"]     # short only: accepted answers instead of options/answer
marks: 2
difficulty: medium            # easy | medium | hard, or 1..3 (omit to infer)
misconception: force-mass-swap
worked: |
  F = m a = 2 x 3 = 6 N.
  Picking 1.5 N divides instead of multiplying, that is a = F/m rearranged wrongly.
```

### 2. Teaching card blocks (Gurus, drills, definitions, structured answers)

Kinds: `definition`, `precision`, `qa`, `careless`, `sbq`, `poa`.

```yaml
kind: definition
topic: "P1 Physical Quantities"
term: "Scalar quantity"
body: "A quantity that has magnitude only, with no direction."
```

```yaml
kind: precision
topic: "P3 Dynamics"
prompt: "Explain why a passenger lurches forward when a bus brakes suddenly."
model: "The passenger CONTINUES MOVING at the ORIGINAL SPEED because of INERTIA; no resultant force acts on the passenger to decelerate them with the bus."
```

(`precision` model answers put the crediting phrases in CAPS; the structured
trainer scores against them.)

## Hard rules (enforced by the parser, seeding fails loudly)

1. **Never promise grades.** Banned anywhere in copy: guaranteed, sure-win,
   leaked, insider, 100% pass/score.
2. **No em or en dashes** in any copy. Use commas, colons or periods. Hyphens
   inside words and codes are fine. The Unicode minus sign U+2212 in maths is
   fine.
3. **Notation:** `topic:` and `misconception:` are ASCII syllabus codes.
   `stem:`, `options:` and `worked:` use real notation, Unicode molecules
   (H₂O), superscripts (m/s²), the minus sign. Never regex-convert between the
   two.
4. Every mcq `answer:` index must point at the genuinely correct option;
   answers are graded server-side and keys never reach the browser.
5. `worked:` should teach in 2-4 lines: the method first, then why the popular
   wrong answer is wrong.

## How the game consumes it (the content contract)

Game modes request content declaratively via
`drawFromBank(level, slug, { count, difficulty?, minDifficulty?, topicRx?, mcqOnly? })`
(`src/lib/server/question-bank.ts`) or over HTTP via
`/api/account/game/questions?level=..&slug=..&count=8&difficulty=2&topic=P3`.
Story quests scope by `topic` prefix; bosses raise `difficulty`. That means:

- More questions in a topic = deeper quests in that topic, automatically.
- New topics appear in battles/dailies the moment they are seeded.
- Nothing in the client ever holds an answer key.
