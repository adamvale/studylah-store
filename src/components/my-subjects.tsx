import Link from "next/link";
import { IconBook } from "@/components/icons";

// "My Subjects" on the Today dashboard: a grid of subject squares, two per row,
// name only. Tapping one opens that subject's page, where the full topic list
// lives and each topic leads into practice.

export interface MySubject {
  level: string;
  slug: string;
  name: string;
}

export function MySubjects({ subjects }: { subjects: MySubject[] }) {
  if (subjects.length === 0) return null;

  return (
    <section className="mt-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-display text-sm font-bold text-ink">My Subjects</h3>
        <span className="text-xs text-body">{subjects.length} in your plan</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {subjects.map((s) => (
          <Link
            key={`${s.level}/${s.slug}`}
            href={`/account/subjects/${s.level}/${s.slug}`}
            className="glass flex min-h-[92px] flex-col justify-between bg-gradient-to-br from-white/5 to-transparent p-4 transition-transform hover:-translate-y-0.5"
          >
            <span className="icon-orb text-accent" aria-hidden>
              <IconBook size={18} />
            </span>
            <span className="mt-2 font-display text-sm font-bold leading-snug text-ink">
              {s.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
