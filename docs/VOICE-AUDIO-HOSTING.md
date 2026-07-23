# Gugu's voice: where the audio lives

The generated voice is large and grows with every topic: about **900 MB across
~7,000 mp3 files** at the time of writing (Amy ~795 MB, Jay ~97 MB). That is far
too much to keep in git, because git stores every binary forever: once pushed,
the repo carries that weight permanently and it cannot be slimmed later without
rewriting history.

So the audio is served from object storage, and `public/audio/gugu` is git-ignored.

## How the app finds it

`src/lib/speak.ts` reads one environment variable:

```
NEXT_PUBLIC_AUDIO_BASE_URL=https://audio.studylah.education/gugu
```

Unset, it falls back to `/audio/gugu`, i.e. the files under `public/`. That means
local development works with no setup at all, and nothing breaks if the variable
is missing in an environment.

From that base it fetches three things:

```
<base>/active.json              which voice is live: { "voice": "<id>" }
<base>/<voice>/manifest.json    the hashes that have audio
<base>/<voice>/<hash>.mp3       one line of speech
```

## Current state (read this first)

The switch is **wired but not thrown**. `NEXT_PUBLIC_AUDIO_BASE_URL`, the upload
script and this document are all in place, but `public/audio/gugu` is still
tracked and still served from the repo, so nothing has changed for production yet.

That is deliberate. Untracking the folder also removes it from the deployed tree,
so doing it before the bucket is live would leave the site with no audio and every
line falling back to the device voice, which reads like a broken voice rather than
a missing bucket.

Note the ~900 MB already in the repo is also already on GitHub, and this change
cannot remove it: git keeps binaries forever. What it does is stop the repo
growing. Coddy has roughly ten more Physics topics to deliver, then Chemistry and
Biology; at today's rate (10 topics produced about 6,000 files and 795 MB) the
repo would otherwise run into GitHub's hard limits.

## Cutover, in this order

Doing these out of order is what breaks production.

1. Create the bucket, allow cross-origin GETs, and upload:
   ```bash
   AUDIO_REMOTE=r2:studylah-audio/gugu npm run audio:upload
   ```
2. Set `NEXT_PUBLIC_AUDIO_BASE_URL` in the deploy environment and **redeploy**.
   Confirm on the live site that a lesson still speaks in Amy's voice: that
   proves the bucket, the CORS headers and the variable are all right.
3. Only then untrack the folder, by uncommenting the `public/audio/gugu/` line in
   `.gitignore` and running:
   ```bash
   git rm -r --cached public/audio/gugu && git commit -m "Serve voice from the bucket"
   ```

## Setting it up once

1. Make a bucket (Cloudflare R2 is a good fit: no egress charges) and give it a
   public base URL, ideally on your own domain.
2. **Allow cross-origin GETs from the site.** `manifest.json` and `active.json`
   are read with `fetch()`, and the mp3s are now read through the Web Audio graph
   to drive the tutor head's mouth, so BOTH need CORS. Without it the graph reads
   silence and the head falls back to running its clip continuously. Without CORS the manifest comes back empty and
   *every* line silently falls back to the device voice, which is easy to
   misread as "the premium voice broke".
3. Upload:
   ```bash
   AUDIO_REMOTE=r2:studylah-audio/gugu npm run audio:upload
   ```
4. Set `NEXT_PUBLIC_AUDIO_BASE_URL` in the deploy environment and redeploy. It is
   inlined at build time, so it must be present when the app is BUILT, not just
   at runtime.

## After generating new lines

`npm run gugu:tts` only ever writes locally. Upload afterwards:

```bash
npm run gugu:tts
AUDIO_REMOTE=r2:studylah-audio/gugu npm run audio:upload
```

The upload sends mp3s first and the two JSON files last, so the manifest never
points at audio that has not landed yet. mp3 names are content hashes and never
change, so they are cached for a year; the JSON files are cached for a minute.

## Keeping a local copy

`public/audio/gugu` stays on disk and is ignored by git, so local development
still plays the real voice. If you need it on a fresh machine, pull it back down
rather than regenerating (regenerating costs ElevenLabs credits):

```bash
rclone copy r2:studylah-audio/gugu public/audio/gugu --progress
```

## Making new lines lighter

ElevenLabs takes the bitrate as a **query parameter**, not a body field, which is
easy to miss. `scripts/gugu-tts.ts` now sends it and it is configurable:

```
ELEVENLABS_OUTPUT_FORMAT=mp3_44100_64    # the default now
```

The first ~6,000 lines were generated at the API default of `mp3_44100_128`,
which is why they average 136 KB. At 64 kbps the same line is exactly half the
size (measured: 367 KB against 185 KB) and, for a speaking voice on a phone
speaker, very hard to tell apart. `mp3_22050_32` halves it again but starts to
sound thin.

Values: `mp3_22050_32`, `mp3_44100_32`, `mp3_44100_64`, `mp3_44100_96`,
`mp3_44100_128`, `mp3_44100_192` (paid tiers only).

**This only affects lines that have never been generated.** A line's file is named
by a hash of its text, so changing the bitrate does not change the name, and the
generator skips any file that already exists. Shrinking the existing 795 MB would
mean deleting those mp3s and paying to generate all ~740,000 characters again.
Not worth it: the win is in what comes next, and roughly ten more Physics topics
plus Chemistry and Biology are still to be authored.
