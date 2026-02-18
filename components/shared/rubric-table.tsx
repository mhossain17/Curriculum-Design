import type { Rubric } from "@/types/curriculum";

interface RubricTableProps {
  rubric: Rubric;
}

export function RubricTable({ rubric }: RubricTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-left text-sm">
        <caption className="mb-2 text-left text-base font-semibold text-slate-900">{rubric.title}</caption>
        <thead>
          <tr className="bg-slate-100">
            <th className="border p-2">Criterion</th>
            <th className="border p-2">4 - Exceeds</th>
            <th className="border p-2">3 - Meets</th>
            <th className="border p-2">2 - Approaching</th>
            <th className="border p-2">1 - Beginning</th>
          </tr>
        </thead>
        <tbody>
          {rubric.rows.map((row) => (
            <tr key={row.criterion}>
              <th className="border bg-slate-50 p-2 align-top font-semibold" scope="row">
                {row.criterion}
              </th>
              <td className="border p-2 align-top">{row.levels["4"]}</td>
              <td className="border p-2 align-top">{row.levels["3"]}</td>
              <td className="border p-2 align-top">{row.levels["2"]}</td>
              <td className="border p-2 align-top">{row.levels["1"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
