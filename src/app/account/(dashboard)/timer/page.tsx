import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { RehearsalTimer } from "@/components/rehearsal-timer";

export const metadata: Metadata = { title: "Exam timer" };

export default async function TimerPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  return (
    <div>
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
    </div>
  );
}
