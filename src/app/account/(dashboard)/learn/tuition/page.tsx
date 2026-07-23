import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import { CloseOnWeb } from "@/components/native-only";
import { PageHeading } from "@/components/page-heading";
import { MySubjects, type MySubject } from "@/components/my-subjects";

export const metadata: Metadata = { title: "Tuition" };

// Tuition: every subject, taught topic by topic. Tap a subject to see its
// topics, then a topic to learn it in bite-sized subconcepts before practising.
export default async function TuitionPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const owned = await ownedSubjects(customerId);
  const subjects: MySubject[] = owned.map((s) => ({ level: s.level, slug: s.slug, name: s.name }));

  return (
    <div>
      <CloseOnWeb feature="tuition" />
      <PageHeading description="Your subjects, taught topic by topic. Pick a subject, then a topic, and learn it in small steps before you practise.">
        Tuition
      </PageHeading>
      <MySubjects subjects={subjects} />
    </div>
  );
}
