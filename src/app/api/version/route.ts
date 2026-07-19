import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// The deploy beacon. Two jobs:
//   1. Railway's healthcheckPath (railway.json): traffic only switches to a
//      new container once this answers, which shrinks the swap gap.
//   2. The UpdateWatcher polls it from StudyLand: a failed poll means "deploy
//      swap in progress", a changed version means "update landed, offer a
//      refresh". Never interrupts whatever the student is doing.
//
// Railway injects the commit sha at runtime; the deployment id changes per
// deploy as a fallback; BOOT covers local dev (changes on every restart).
const BOOT = new Date().toISOString();

export function GET() {
  const v =
    process.env.RAILWAY_GIT_COMMIT_SHA ??
    process.env.RAILWAY_DEPLOYMENT_ID ??
    BOOT;
  return NextResponse.json(
    { v },
    { headers: { "Cache-Control": "no-store" } }
  );
}
