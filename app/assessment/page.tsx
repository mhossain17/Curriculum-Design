import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAssessmentConfig } from "@/lib/data";

export default function AssessmentPage() {
  const assessment = getAssessmentConfig();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Assessment" }]} />
      <section>
        <h2 className="text-3xl font-bold text-slate-900">Assessment Overview</h2>
        <p className="mt-1 text-slate-700">Grading categories, semester requirements, and reusable rubric templates.</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Semester Assessment System</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
            {assessment.overview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configurable Grading Weights</CardTitle>
          <p className="text-sm text-slate-700">Edit values in <code>data/assessment.json</code>.</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border bg-slate-100 p-2 text-left">Category</th>
                  <th className="border bg-slate-100 p-2 text-left">Weight</th>
                  <th className="border bg-slate-100 p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {assessment.gradingWeights.map((weight) => (
                  <tr key={weight.category}>
                    <td className="border p-2">{weight.category}</td>
                    <td className="border p-2 font-semibold">{weight.percent}%</td>
                    <td className="border p-2">{weight.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assessment.rubricTemplates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle className="text-lg">{template.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                {template.descriptors.map((descriptor) => (
                  <li key={`${template.id}-${descriptor}`}>{descriptor}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
