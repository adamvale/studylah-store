import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { RehearsalTimer } from "@/components/rehearsal-timer";
import { PomodoroTimer } from "@/components/pomodoro-timer";

export const metadata: Metadata = { title: "Exam timer" };

export default async function TimerPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-display text-lg font-bold text-ink">
          Sit it like the real thing
        </h2>
        <p className="mt-1 text-sm text-body">
          The Final Rehearsal only counts under exam conditions. Pick your
          paper&apos;s length, start the clock, and don&apos;t stop writing until
          it chimes.
        </p>
        <div className="mt-4">
          <RehearsalTimer />
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-ink">
          Focus timer
        </h2>
        <p className="mt-1 text-sm text-body">
          For everyday revision: short focus blocks with built-in breaks, and a
          weekly tally so you can see the hours add up.
        </p>
        <div className="mt-4">
          <PomodoroTimer />
        </div>
      </section>
    </div>
  );
}
