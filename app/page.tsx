import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourse } from "@/lib/data";

export default function HomePage() {
  const course = getCourse();

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Semester Curriculum Guide</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">{course.title}</h2>
        <p className="mt-2 text-slate-700">{course.description}</p>
        <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <p>
            <span className="font-semibold text-slate-900">Semester:</span> {course.semester}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Dates:</span> {course.semesterDates}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Meeting Pattern:</span> {course.meetingPattern}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Instructional Model</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {course.instructionalModel.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold text-slate-900">Start Here</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {course.startHereCards.map((card) => (
            <Card key={card.href}>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link className="hover:underline" href={card.href}>
                    {card.title}
                  </Link>
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link className="text-sm font-semibold text-slate-900 underline" href={card.href}>
                  Open {card.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
