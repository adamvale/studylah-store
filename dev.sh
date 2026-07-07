#!/bin/bash
# Dev-server wrapper: puts the user-local Node install on PATH (no system
# Node exists on this machine), then starts Next.
export PATH="$HOME/.local/node/bin:$PATH"
cd "$(dirname "$0")"
exec npm run dev
