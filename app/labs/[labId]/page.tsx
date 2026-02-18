import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PrintActions } from "@/components/shared/print-actions";
import { RubricTable } from "@/components/shared/rubric-table";
import { TruthTable } from "@/components/shared/truth-table";
import { Badge } from "@/components/ui/badge";
import { getLabById, getLabs, getUnitById } from "@/lib/data";

interface LabDetailPageProps {
  params: Promise<{ labId: string }>;
}

export function generateStaticParams() {
  return getLabs().map((lab) => ({ labId: lab.id }));
}

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

export default async function LabDetailPage({ params }: LabDetailPageProps) {
  const { labId } = await params;
  const lab = getLabById(labId);

  if (!lab) {
    notFound();
  }

  const unit = getUnitById(lab.unitId);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Labs", href: "/labs" },
          { label: lab.title },
        ]}
      />

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Student-Facing Lab</p>
            <h2 className="text-3xl font-bold text-slate-900">{lab.title}</h2>
            <p className="mt-1 text-sm text-slate-700">
              Unit:{" "}
              {unit ? (
                <Link className="underline" href={`/units/${unit.id}`}>
                  {unit.title}
                </Link>
              ) : (
                "Not assigned"
              )}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge className="bg-slate-100 text-slate-800" variant="secondary">
                {lab.type}
              </Badge>
              <Badge className="bg-amber-100 text-amber-800" variant="secondary">
                {lab.complexity}
              </Badge>
            </div>
          </div>
          <PrintActions />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <article className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-900">Purpose</h3>
            <p className="mt-2 text-sm text-slate-700">{lab.purpose}</p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-900">What Students Discover</h3>
            <p className="mt-2 text-sm text-slate-700">{lab.whatStudentsDiscover}</p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-900">Lab Directions</h3>
            <div className="mt-3">
              <OrderedList items={lab.steps} />
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-900">Truth Tables / Data Tables</h3>
            <div className="mt-3 space-y-4">
              {lab.truthTables.length > 0 ? (
                lab.truthTables.map((table) => <TruthTable key={`${lab.id}-${table.title}`} table={table} />)
              ) : (
                <p className="text-sm text-slate-700">No truth table template required for this lab.</p>
              )}
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-900">Rubric</h3>
            <div className="mt-3">
              <RubricTable rubric={lab.rubric} />
            </div>
          </article>

          <details className="rounded-lg border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-lg font-semibold text-slate-900">Teacher Notes</summary>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {lab.teacherNotes.map((note) => (
                <li key={`${lab.id}-${note}`}>{note}</li>
              ))}
            </ul>
          </details>
        </div>

        <aside className="space-y-4">
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-900">Discovery Focus</h3>
            <p className="text-sm text-slate-700">{lab.discoveryFocus}</p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-900">Prerequisite Labs</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {lab.prerequisiteLabIds.length > 0 ? (
                lab.prerequisiteLabIds.map((id) => {
                  const prerequisite = getLabById(id);

                  return prerequisite ? (
                    <li key={`${lab.id}-pre-${id}`}>
                      <Link className="underline" href={`/labs/${prerequisite.id}`}>
                        {prerequisite.title}
                      </Link>
                    </li>
                  ) : (
                    <li key={`${lab.id}-pre-${id}`}>{id}</li>
                  );
                })
              ) : (
                <li>None</li>
              )}
            </ul>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-900">Chips Needed</h3>
            <div className="flex flex-wrap gap-2">
              {lab.chipsNeeded.map((chip) => (
                <Badge className="bg-slate-100 text-slate-800" key={`${lab.id}-chip-${chip}`} variant="secondary">
                  {chip}
                </Badge>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-900">Deliverables</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {lab.deliverables.map((deliverable) => (
                <li key={`${lab.id}-${deliverable}`}>{deliverable}</li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </div>
  );
}
