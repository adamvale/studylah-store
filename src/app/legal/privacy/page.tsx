import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="6 July 2026">
      <h2>Who we are</h2>
      <p>
        StudyLah ([legal entity name], UEN [number]) sells digital
        exam-preparation materials at studylah.education. This policy explains
        how we handle personal data under Singapore&apos;s Personal Data
        Protection Act 2012 (PDPA).
      </p>
      <h2>What we collect and why</h2>
      <p>
        Email address and order details, to deliver your purchases, send
        download links, and honour the guarantee. Free-resource email
        addresses, with your recorded consent, to deliver the resource and
        occasional exam-preparation emails. Payment details are processed by
        Stripe; we never see your card number.
      </p>
      <h2>Consent</h2>
      <p>
        We record the timestamp of every consent you give. You can withdraw
        consent at any time via the unsubscribe link in any email or by
        writing to dpo@studylah.education, and we will stop the related
        processing within [X] days.
      </p>
      <h2>Retention and protection</h2>
      <p>
        Order records are retained for [X] years to meet legal and accounting
        obligations. Marketing lists are retained until you unsubscribe. Data
        is stored on [hosting provider] with access limited to authorised
        staff.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access to or correction of your personal data by
        contacting our Data Protection Officer at dpo@studylah.education.
      </p>
    </LegalPage>
  );
}
