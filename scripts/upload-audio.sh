#!/usr/bin/env bash
# Push the generated voice to object storage, so ~900 MB of mp3 never enters git.
#
#   AUDIO_REMOTE=r2:studylah-audio/gugu npm run audio:upload      (rclone)
#   AUDIO_REMOTE=s3://studylah-audio/gugu npm run audio:upload    (aws cli)
#
# Files are named by a content hash, so an mp3 that exists never changes: they
# are uploaded once and cached forever. The two small JSON files DO change every
# time a voice is generated, so they get a short cache and are synced last, after
# the audio they point at is already in place.
set -euo pipefail

LOCAL="public/audio/gugu"
: "${AUDIO_REMOTE:?Set AUDIO_REMOTE, e.g. r2:studylah-audio/gugu or s3://studylah-audio/gugu}"

[ -d "$LOCAL" ] || { echo "No $LOCAL to upload."; exit 1; }
echo "Uploading $(du -sh "$LOCAL" | cut -f1) from $LOCAL -> $AUDIO_REMOTE"

if command -v rclone >/dev/null 2>&1 && [[ "$AUDIO_REMOTE" != s3://* ]]; then
  # mp3s first: immutable, cache hard.
  rclone copy "$LOCAL" "$AUDIO_REMOTE" \
    --include "*.mp3" --transfers 32 --checkers 32 --progress \
    --header-upload "Cache-Control: public, max-age=31536000, immutable"
  # then the pointers, which must never be stale.
  rclone copy "$LOCAL" "$AUDIO_REMOTE" \
    --include "*.json" --transfers 8 --progress \
    --header-upload "Cache-Control: public, max-age=60"
elif command -v aws >/dev/null 2>&1; then
  AWS_ARGS=()
  [ -n "${AWS_ENDPOINT_URL:-}" ] && AWS_ARGS+=(--endpoint-url "$AWS_ENDPOINT_URL")
  aws "${AWS_ARGS[@]}" s3 sync "$LOCAL" "$AUDIO_REMOTE" \
    --exclude "*" --include "*.mp3" --size-only \
    --cache-control "public, max-age=31536000, immutable"
  aws "${AWS_ARGS[@]}" s3 sync "$LOCAL" "$AUDIO_REMOTE" \
    --exclude "*" --include "*.json" \
    --cache-control "public, max-age=60"
else
  echo "Need rclone (any S3-compatible provider, incl. Cloudflare R2) or the aws CLI." >&2
  echo "  brew install rclone   # then: rclone config" >&2
  exit 1
fi

echo
echo "Done. The bucket must allow cross-origin GETs from the site, or the"
echo "manifest fetch will fail and every line falls back to the device voice."
echo "Then set NEXT_PUBLIC_AUDIO_BASE_URL to the public base of $AUDIO_REMOTE."
