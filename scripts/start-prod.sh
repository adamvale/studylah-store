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

mkdir -p /data "$PDF_STORAGE_DIR"

echo "→ applying migrations"
npx prisma migrate deploy --schema=prisma/schema.prisma

echo "→ seeding catalogue (idempotent)"
npm run db:seed

echo "→ starting server on port ${PORT}"
exec npm run start -- -p "${PORT}"
