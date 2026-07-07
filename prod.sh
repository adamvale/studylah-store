#!/bin/bash
# Preview wrapper: serves the production build (avoids Turbopack dev-time
# worker spawns, which the preview sandbox blocks). Run `npm run build` first.
export PATH="$HOME/.local/node/bin:$PATH"
cd "$(dirname "$0")"
exec npm run start
