"use client";

import { useMemo, useState } from "react";

import { PrintActions } from "@/components/shared/print-actions";
import { Input } from "@/components/ui/input";
import type { Materials } from "@/types/curriculum";

interface MaterialsCalculatorProps {
  materials: Materials;
}

export function MaterialsCalculator({ materials }: MaterialsCalculatorProps) {
  const [studentCount, setStudentCount] = useState(30);

  const totals = useMemo(
    () =>
      materials.perStudentKit.map((item) => ({
        ...item,
        classTotal: item.quantityPerStudent * studentCount,
      })),
    [materials.perStudentKit, studentCount],
  );

  return (
    <div className="space-y-6">
      <div className="no-print flex flex-wrap items-end gap-3 rounded-lg border border-slate-200 bg-white p-4">
        <div className="w-full max-w-xs">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="student-count">
            Number of Students
          </label>
          <Input
            id="student-count"
            min={1}
            onChange={(event) => setStudentCount(Number(event.target.value) || 0)}
            type="number"
            value={studentCount}
          />
        </div>
        <PrintActions />
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Per-Student Kit and Class Totals</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border bg-slate-100 p-2 text-left">Code</th>
                <th className="border bg-slate-100 p-2 text-left">Item</th>
                <th className="border bg-slate-100 p-2 text-left">Per Student</th>
                <th className="border bg-slate-100 p-2 text-left">Total for {studentCount}</th>
                <th className="border bg-slate-100 p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {totals.map((item) => (
                <tr key={item.code}>
                  <td className="border p-2 font-semibold">{item.code}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.quantityPerStudent}</td>
                  <td className="border p-2 font-semibold">{item.classTotal}</td>
                  <td className="border p-2">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Classroom Materials and Shopping List</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {materials.classMaterials.map((entry) => (
            <li className="rounded-md border border-slate-200 p-3" key={entry.item}>
              <p className="font-semibold text-slate-900">{entry.item}</p>
              <p>
                <span className="font-medium">Quantity:</span> {entry.quantity}
              </p>
              <p>
                <span className="font-medium">Notes:</span> {entry.notes}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Printable Notes</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {materials.printableNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
