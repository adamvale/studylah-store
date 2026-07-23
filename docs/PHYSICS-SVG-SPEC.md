# Physics diagram (SVG) production spec

The single source of truth for every physics/chemistry/biology diagram that
renders inside a lesson. Diagrams live in `public/physics/images/fig-*.svg` and
are shown by `<Figure>` in `src/components/lesson-player.tsx`: **bare on the dark
app background, full width, no card or frame.** They are also referenced by the
teaching packs. Get them right the FIRST time using this spec plus the two
validators below.

The 17 Kinematics figures (`fig-02-*`) are the gold-standard reference. Match
their look and rigour.

## Non-negotiable correctness (a wrong diagram teaches the wrong physics)

1. **Every label points at, or sits unambiguously beside, the exact element it
   names.** Prefer a colour-matched label placed directly with its element over
   a leader line. If a leader is unavoidable it must land on the right token and
   must not cross another leader. (Real bug we shipped: a "distance" label whose
   leader pointed at the displacement arrow.)
2. **Every number is internally consistent** with the notes AND with every other
   number in the same figure. (Real bug: a ball labelled 6 m/s beside graphs
   drawn at 5 m/s.)
3. **Arrows point the physically correct way** (velocity, force, current,
   field, ray, deflection). Field lines run N to S outside a magnet. Conventional
   current flows + to -. Fleming: First finger Field, seCond finger Current,
   thuMb Motion.
4. **Graph shapes match the physics**: gradient signs, curvature (increasing vs
   decreasing rate), areas, intercepts. (Real bug: increasing- and
   decreasing-deceleration curves were swapped.)
5. **The figure shows ONLY the idea its card teaches.** One micro-concept, one
   diagram. Distance card = distance-only art; the combined distance-plus-
   displacement art belongs on the card that compares them.

## Every graph MUST label both axes

Any figure with x and y axes labels BOTH: the y-axis name at the top of the
vertical axis, the x-axis name at the right foot of the horizontal axis, each
with its quantity and (where used) unit, e.g. `velocity / (m/s)` and `time / s`,
or `displacement` and `time`. Never ship an axis with no name. Tick values
(0, v, u, t1, t2) are in addition to, not instead of, the axis name.

## Mobile-dark rendering spec

- **Transparent background**, drawn FOR a dark screen. No `<rect>` fill behind
  the art, no frame, no white box.
- **Palette** (light on dark): text/axes `#EAEAEA`; primary/data blue `#6FB7E0`;
  accent/secondary yellow `#F5C542` (or `#E8B65A`); negative/danger pink
  `#E58F8F`; positive/accel green `#86C98B`; faint guides `#9AA0A6`. Opacity for
  shaded areas ~0.28. Do not introduce other hues.
- **Legible at ~340px wide.** Base label font >= 14px relative to a ~420-520
  unit viewBox (so it is not sub-11px on the phone). Fewer, larger labels beat
  many tiny ones.
- **Portrait or square, never wide landscape.** A multi-panel figure (e.g. four
  motion-graph shapes, or up-then-down ball panels) is STACKED VERTICALLY or in
  a 2x2 grid, not a wide side-by-side strip.
- **No emojis. No em/en dash characters** (`-` hyphen is fine; write "velocity-time").
  Prefer plain words over Unicode arrows in labels where possible.
- **Keep the same `fig-NN-xx-name.svg` filename** when replacing an existing one.

## One diagram per micro-concept + a spoken description

Each `concept` card that benefits gets its OWN focused diagram (naming:
`fig-NN-xx-short-name.svg`). Deliver, alongside the SVGs, a `svg-manifest.md`
mapping each file to: the lesson card it belongs to, what it must show, and a
one or two sentence SPOKEN description in colour/shape language (e.g. "The blue
wavy line is the walk from A to B; every bend is counted."). That description is
woven into Gugu's `say` so her voice walks the student through the picture.

## The two validators (run BEFORE delivering)

1. **Layout lint** (`node scripts/check-svg-overlaps.mjs [prefix]`): flags text
   overlapping text or shapes, text outside the viewBox, sub-12px fonts on wide
   art, and graphs missing an axis label. Iterate until your files show zero
   genuine flags. (It is heuristic: a label deliberately inside a translucent
   shape it names is an acceptable false positive; note those.)
2. **Visual render** (`node scripts/render-svgs.mjs [prefix]`, needs
   `npm i -D sharp`): rasterises each SVG at 340px on the dark app background into
   `scratch/svg-previews/`. Look at every PNG and check it against the notes for
   the five correctness rules above. This is what catches swapped labels and
   wrong curves; the lint cannot.

Delivery = SVGs + `svg-manifest.md`, lint-clean, and every preview eyeballed.
