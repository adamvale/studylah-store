import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import { TutorHub } from "@/components/tutor-hub";
import { PageHeading } from "@/components/page-heading";

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
      <PageHeading description="A patient one-to-one tutor. Guru teaches, sets practice, marks your work, and can hold a standing weekly session, like tuition, in your pocket.">
        Guru <span className="sl-grad-text">Tutor</span>
      </PageHeading>
      <TutorHub subjects={subjects} />
    </div>
  );
}
