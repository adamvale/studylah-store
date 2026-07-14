import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Sign in to your account",
  description:
    "Sign in to re-download your StudyLah purchases. No password, we email you a one-time link.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await getCustomerId()) redirect("/account");
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink">
        Pick up where you left off.
      </h1>
      <p className="mt-2 text-body">
        Sign in to re-download every PDF you&apos;ve bought and, on the Master
        tier, open your StudyLand dashboard, your plan for the run-in to the
        paper. No password, we just email you a one-time link.
      </p>
      <div className="mt-6">
        <LoginForm error={error} />
      </div>
    </div>
  );
}
