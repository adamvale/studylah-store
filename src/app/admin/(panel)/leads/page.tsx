import { SUBJECTS } from "@/lib/catalogue";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

function subjectLabel(level: string | null, slug: string | null): string {
  if (!slug) return ", ";
  const found = SUBJECTS.find((s) => s.level === level && s.slug === slug);
  return found ? found.name : slug;
}

export default async function AdminLeadsPage() {
  const [leads, total] = await Promise.all([
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.lead.count(),
  ]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Email leads</h1>
          <p className="text-sm text-body">
            {total} total · consent timestamp stored for each (PDPA).
          </p>
        </div>
        <a
          href="/api/admin/leads/export"
          className="rounded-lg bg-trust px-4 py-2 text-sm font-medium text-white hover:bg-trust-deep"
        >
          Export CSV
        </a>
      </div>

      {leads.length === 0 ? (
        <p className="mt-8 text-sm text-body">No leads captured yet.</p>
      ) : (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-hairline bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-hairline text-left text-xs text-body">
                <th scope="col" className="px-4 py-3 font-medium">Email</th>
                <th scope="col" className="px-4 py-3 font-medium">Source</th>
                <th scope="col" className="px-4 py-3 font-medium">Subject</th>
                <th scope="col" className="px-4 py-3 font-medium">Consent at</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-hairline last:border-0">
                  <td className="px-4 py-3 text-ink">{lead.email}</td>
                  <td className="px-4 py-3 text-body">{lead.source}</td>
                  <td className="px-4 py-3 text-body">
                    {subjectLabel(lead.level, lead.subjectSlug)}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-body">
                    {lead.consentAt.toISOString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-xs text-body">Showing up to 200 most recent leads.</p>
    </div>
  );
}
