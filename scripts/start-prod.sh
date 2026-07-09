#!/usr/bin/env bash
# Container start command. Runs on every boot:
#   1. ensure the volume directories exist (first boot on an empty volume)
#   2. apply database migrations (creates the SQLite DB the first time)
#   3. seed the catalogue + placeholder PDFs (idempotent — skips existing files
#      and rows, so admin-uploaded PDFs and edited prices survive redeploys)
#   4. start the Next.js production server
set -e

: "${PDF_STORAGE_DIR:=/data/pdfs}"
: "${PORT:=3000}"

# --- Persistence guard -------------------------------------------------------
# A relative storage path resolves to ephemeral container disk instead of the
# mounted /data volume. When that happened, every deploy silently wiped the
# database, orders, download tokens and uploaded PDFs, then the seed refilled
# with placeholders — and the app booted looking healthy. Refuse to start on a
# relative path so this fails loudly at deploy time, not after a sale.
case "$PDF_STORAGE_DIR" in
  /*) : ;;
  *)  echo "FATAL: PDF_STORAGE_DIR must be an absolute path, got '$PDF_STORAGE_DIR'." >&2
      echo "       A relative path writes to ephemeral container disk, not the /data volume." >&2
      echo "       Fix the Railway variable, or unset it to use the Dockerfile default (/data/pdfs)." >&2
      exit 1 ;;
esac
case "$DATABASE_URL" in
  file:/*) : ;;                 # sqlite on an absolute path — correct
  "")      echo "FATAL: DATABASE_URL is not set; the app would fall back to a relative sqlite path on ephemeral disk." >&2
           exit 1 ;;
  file:*)  echo "FATAL: DATABASE_URL sqlite path must be absolute (file:/...), got '$DATABASE_URL'." >&2
           echo "       A relative sqlite path lands on ephemeral container disk, not the /data volume." >&2
           exit 1 ;;
  *)       : ;;                 # non-sqlite (e.g. postgres) — not this guard's concern
esac
echo "→ storage OK: db=$DATABASE_URL pdfs=$PDF_STORAGE_DIR"
# ----------------------------------------------------------------------------

mkdir -p /data "$PDF_STORAGE_DIR"

echo "→ applying migrations"
# Prisma prints "Loaded Prisma config" / "schema loaded" to stderr even on
# success, which Railway paints red and reads as a crash. Capture the run: on
# success, drop those two benign lines and show the rest on stdout; on failure,
# dump everything to stderr (red) and stop the boot. Genuine errors stay loud.
if migrate_out=$(npx prisma migrate deploy --schema=prisma/schema.prisma 2>&1); then
  printf '%s\n' "$migrate_out" \
    | grep -vE '^(Loaded Prisma config from|Prisma schema loaded from)|^[[:space:]]*$' || true
else
  status=$?
  printf '%s\n' "$migrate_out" >&2
  echo "FATAL: prisma migrate deploy failed (exit $status)." >&2
  exit "$status"
fi

echo "→ seeding catalogue (idempotent)"
npm run db:seed

echo "→ starting server on port ${PORT}"
exec npm run start -- -p "${PORT}"
