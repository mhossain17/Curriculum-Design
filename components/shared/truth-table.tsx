import type { TruthTable as TruthTableType } from "@/types/curriculum";

interface TruthTableProps {
  table: TruthTableType;
}

export function TruthTable({ table }: TruthTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full border-collapse text-sm">
        <caption className="bg-slate-50 px-3 py-2 text-left text-sm font-semibold text-slate-900">{table.title}</caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th className="border bg-slate-100 px-3 py-2 text-left" key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${table.title}-${rowIndex}`}>
              {row.map((value, cellIndex) => (
                <td className="border px-3 py-2" key={`${table.title}-${rowIndex}-${cellIndex}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
