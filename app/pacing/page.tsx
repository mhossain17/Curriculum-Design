import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLabById, getPacing, getUnitById } from "@/lib/data";

export default function PacingPage() {
  const pacing = getPacing();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pacing" }]} />
      <section>
        <h2 className="text-3xl font-bold text-slate-900">Pacing Calendar</h2>
        <p className="mt-1 text-slate-700">Week-by-week sequence for focus, key lessons, assessments, and deliverables.</p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {pacing.map((week) => {
          const unit = getUnitById(week.unitId);

          return (
            <Card key={`week-${week.week}`}>
              <CardHeader>
                <CardTitle className="text-lg">Week {week.week}</CardTitle>
                <p className="text-sm text-slate-700">{week.focus}</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Unit</p>
                  {unit ? (
                    <Link className="underline" href={`/units/${unit.id}`}>
                      {unit.title}
                    </Link>
                  ) : (
                    <p>Unassigned</p>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Key Lessons</p>
                  <ul className="list-disc pl-5">
                    {week.keyLessons.map((lesson) => (
                      <li key={`week-${week.week}-lesson-${lesson}`}>{lesson}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Assessments</p>
                  <ul className="list-disc pl-5">
                    {week.assessments.map((assessment) => (
                      <li key={`week-${week.week}-assessment-${assessment}`}>{assessment}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Deliverables</p>
                  <ul className="list-disc pl-5">
                    {week.deliverables.map((deliverable) => (
                      <li key={`week-${week.week}-deliverable-${deliverable}`}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Linked Labs</p>
                  <ul className="list-disc pl-5">
                    {week.labIds.length > 0 ? (
                      week.labIds.map((labId) => {
                        const lab = getLabById(labId);

                        return lab ? (
                          <li key={`week-${week.week}-lab-${lab.id}`}>
                            <Link className="underline" href={`/labs/${lab.id}`}>
                              {lab.title}
                            </Link>
                          </li>
                        ) : (
                          <li key={`week-${week.week}-lab-${labId}`}>{labId}</li>
                        );
                      })
                    ) : (
                      <li>No lab assigned</li>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
