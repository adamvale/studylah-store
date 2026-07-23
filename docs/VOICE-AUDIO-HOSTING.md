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

## Setting it up once

1. Make a bucket (Cloudflare R2 is a good fit: no egress charges) and give it a
   public base URL, ideally on your own domain.
2. **Allow cross-origin GETs from the site.** The mp3 files are played by an
   `<audio>` element and do not need CORS, but `manifest.json` and `active.json`
   are read with `fetch()` and do. Without CORS the manifest comes back empty and
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
