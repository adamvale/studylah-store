import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Referral programme terms" };

export default function ReferralTermsPage() {
  return (
    <LegalPage title="Referral programme terms" updated="10 July 2026">
      <h2>The programme, in plain words</h2>
      <p>
        Every StudyLah customer gets a personal referral code. When a friend
        uses it on their first StudyLah order, the friend gets S$15 off that
        order and the referrer earns a S$15 reward once the order is paid.
      </p>
      <h2>Qualifying referrals</h2>
      <p>
        A referral qualifies when: the friend&apos;s order is their first
        StudyLah order; the order is paid in full; and the code was applied at
        checkout. Using your own code, codes applied to repeat orders, and
        orders later refunded do not qualify. If a friend&apos;s order is
        refunded before the reward is paid out, the reward is cancelled.
      </p>
      <h2>How rewards are paid</h2>
      <p>
        Rewards are paid in cash by PayNow to the payout contact you save in
        your account, processed manually within [X] business days. Rewards are
        not credit, have no expiry once earned, and are not transferable. If
        you are under 18, provide a parent or guardian&apos;s PayNow details, 
        payouts to minors may require a parent or guardian&apos;s consent.
      </p>
      <h2>Fair use</h2>
      <p>
        StudyLah may withhold or reverse rewards from self-referrals, fake or
        fraudulent orders, bulk-posted codes represented as official StudyLah
        promotions, or any activity designed to game the programme. StudyLah
        may change or end the programme at any time; rewards already earned
        are honoured.
      </p>
      <h2>Your data</h2>
      <p>
        Your payout contact is collected solely to send your rewards, is
        visible only to you and StudyLah, and is handled under our privacy
        policy and the PDPA. Referees&apos; email addresses are shown to
        referrers in masked form only.
      </p>
    </LegalPage>
  );
}
