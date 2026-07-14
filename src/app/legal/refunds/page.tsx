import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Refund policy" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refund policy" updated="6 July 2026">
      <h2>The guarantee, in plain words</h2>
      <p>
        If fewer than three of the top-five forecast topics in your Exam
        Forecast appear in the corresponding paper, you are entitled to a full
        refund of everything you paid for that subject. Claims are open for 14
        days after the exam date. Email hello@studylah.education with your
        order ID; refunds are processed to the original payment method within
        5 business days.
      </p>
      <h2>What counts as &quot;appeared&quot;</h2>
      <p>
        A forecast topic counts as appeared when a question in Paper 1 or
        Paper 2 primarily assesses that topic, as judged against the published
        syllabus topic list. Our post-sitting scorecard applies the same
        standard in public.
      </p>
      <h2>Digital goods</h2>
      <p>
        Because PDFs are delivered instantly and watermarked to you, we do not
        otherwise offer change-of-mind refunds once a file has been
        downloaded. If you have not downloaded anything, contact us within 7
        days of purchase for a full refund.
      </p>
      <h2>Faulty files</h2>
      <p>
        Broken, corrupted, or wrongly delivered files are replaced or refunded
        in full, whichever you prefer.
      </p>
    </LegalPage>
  );
}
