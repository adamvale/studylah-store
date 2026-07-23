Tutor footage for the FaceTime-style window (src/components/tutor-head.tsx).

Put two short, SILENT, looping clips here:

  amy-idle.mp4      a few seconds, tutor still and attentive, mouth closed
  amy-talking.mp4   a few seconds, tutor mid-speech, natural mouth movement

Both are muted on purpose: the voice always comes from Gugu's generated audio,
so the clips only have to look right, not match any particular words.

Format:
  - 3:4 PORTRAIT, to match the window. 360x480 is plenty. Do not send square or
    landscape: the window is portrait and would crop the face.
  - Head and shoulders, centred, framed to read at about 104 px wide.
  - Under about 3 seconds, looping cleanly (start and end on the same pose) so
    the repeat is not obvious.
  - H.264, a couple of hundred KB each. These ship in the app bundle.
  - Same person, same lighting, same framing in both clips. Generate one
    character still first and use it as the reference for BOTH, or the swap
    between idle and talking will visibly change person.

Until these files exist the window hides itself, so nothing breaks.
