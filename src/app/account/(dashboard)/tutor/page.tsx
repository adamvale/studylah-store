import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import { TutorHub } from "@/components/tutor-hub";

export const metadata: Metadata = { title: "Guru Tutor" };

// The conversational Guru tutor. Owners only; native-app-gated inside TutorHub.
export default async function TutorPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);
  const owned = await ownedSubjects(customerId);
  const subjects = owned.map((s) => ({
    slug: s.slug,
    name: s.name,
    level: (s.level === "na-level" ? "na-level" : "o-level") as "o-level" | "na-level",
  }));

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
        Guru <span className="sl-grad-text">Tutor</span>
      </h1>
      <p className="mt-1 max-w-md text-sm text-body">
        A patient one-to-one tutor. Guru teaches, sets practice, marks your work, and can hold a
        standing weekly session, like tuition, in your pocket.
      </p>
      <TutorHub subjects={subjects} />
    </div>
  );
}
