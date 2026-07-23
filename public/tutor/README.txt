Tutor footage for the talking-head window (src/components/tutor-head.tsx).

Put two short, SILENT, looping clips here:

  amy-idle.mp4      a few seconds, tutor still and attentive, mouth closed
  amy-talking.mp4   a few seconds, tutor mid-speech, natural mouth movement

Both are muted on purpose: the voice always comes from Gugu's generated audio,
so the clips only have to look right, not match any particular words.

Guidance:
  - Square crop, head and shoulders, framed for a small window (about 96 px).
  - Keep each clip under about 3 seconds and loop cleanly (start and end on the
    same pose) so the repeat is not obvious.
  - Export small: H.264, roughly 480x480, a couple of hundred KB each. These
    ship in the app bundle.
  - Use footage you have the right to use. If it is a real person, get their
    permission for use in a student-facing product.

Until these files exist the window hides itself, so nothing breaks.
