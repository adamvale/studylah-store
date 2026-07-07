import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms of use" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="6 July 2026">
      <h2>What you are buying</h2>
      <p>
        StudyLah products are data-driven probabilistic forecasts and original
        practice materials. They are not actual examination content, and they
        do not guarantee any topic will appear or any grade will be achieved.
        StudyLah is not affiliated with, endorsed by, or connected to the
        Singapore Examinations and Assessment Board (SEAB), the Ministry of
        Education (MOE), or Cambridge (UCLES).
      </p>
      <h2>Licence</h2>
      <p>
        Purchased PDFs are licensed to the buyer for personal study use.
        Files are watermarked with your email address and order ID. Sharing,
        reselling, or republishing them — in whole or in part — is prohibited
        and terminates your licence.
      </p>
      <h2>Downloads</h2>
      <p>
        Download links expire after 7 days or 5 downloads per file, whichever
        comes first. Lost links can be re-sent to the purchase email at any
        time by contacting support.
      </p>
      <h2>Liability</h2>
      <p>
        To the maximum extent permitted by law, StudyLah&apos;s total
        liability for any claim is limited to the amount you paid for the
        product concerned. [Standard limitation and governing-law clauses FOR
        LAWYER REVIEW — governing law: Singapore.]
      </p>
    </LegalPage>
  );
}
