"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { SearchFilterBar } from "@/components/shared/search-filter-bar";
import { StandardsTag } from "@/components/shared/standards-tag";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lab, Standard, StandardFramework, Unit } from "@/types/curriculum";

const frameworks: StandardFramework[] = ["ETA", "CDOS", "NOCTI", "NGLS"];

interface StandardsBrowserProps {
  standards: Standard[];
  units: Unit[];
  labs: Lab[];
}

export function StandardsBrowser({ standards, units, labs }: StandardsBrowserProps) {
  const [search, setSearch] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("all");
  const [view, setView] = useState<"list" | "crosswalk">("list");

  const filteredStandards = useMemo(() => {
    const query = search.trim().toLowerCase();

    return standards.filter((standard) => {
      const alignedUnitTitles = units
        .filter((unit) => standard.alignedUnitIds.includes(unit.id))
        .map((unit) => unit.title)
        .join(" ")
        .toLowerCase();
      const alignedLabTitles = labs
        .filter((lab) => standard.alignedLabIds.includes(lab.id))
        .map((lab) => lab.title)
        .join(" ")
        .toLowerCase();
      const searchable = `${standard.code} ${standard.description} ${alignedUnitTitles} ${alignedLabTitles}`.toLowerCase();

      const matchesSearch = query.length === 0 || searchable.includes(query);
      const matchesFramework = selectedFramework === "all" || standard.framework === selectedFramework;

      return matchesSearch && matchesFramework;
    });
  }, [labs, search, selectedFramework, standards, units]);

  const groupedStandards = useMemo(() => {
    return frameworks.map((framework) => ({
      framework,
      items: filteredStandards.filter((standard) => standard.framework === framework),
    }));
  }, [filteredStandards]);

  return (
    <div className="space-y-6">
      <div className="no-print flex flex-wrap gap-2">
        <Button onClick={() => setView("list")} type="button" variant={view === "list" ? "default" : "outline"}>
          Standards List
        </Button>
        <Button
          onClick={() => setView("crosswalk")}
          type="button"
          variant={view === "crosswalk" ? "default" : "outline"}
        >
          Standards Crosswalk
        </Button>
      </div>

      <SearchFilterBar
        filters={[
          {
            id: "standards-framework-filter",
            label: "Framework",
            value: selectedFramework,
            onChange: setSelectedFramework,
            options: [
              { label: "All frameworks", value: "all" },
              { label: "ETA", value: "ETA" },
              { label: "CDOS", value: "CDOS" },
              { label: "NOCTI", value: "NOCTI" },
              { label: "NGLS", value: "NGLS" },
            ],
          },
        ]}
        onSearchChange={setSearch}
        searchPlaceholder="Search by code, description, unit, or lab"
        searchValue={search}
      />

      {view === "list" ? (
        <div className="space-y-6">
          {groupedStandards.map(({ framework, items }) => (
            <section key={framework}>
              <h2 className="mb-3 text-xl font-semibold text-slate-900">{framework}</h2>
              <div className="grid gap-3">
                {items.map((standard) => {
                  const alignedUnits = units.filter((unit) => standard.alignedUnitIds.includes(unit.id));
                  const alignedLabs = labs.filter((lab) => standard.alignedLabIds.includes(lab.id));

                  return (
                    <Card key={standard.code}>
                      <CardHeader>
                        <CardTitle className="flex flex-wrap items-center gap-2 text-base">
                          <StandardsTag code={standard.code} framework={standard.framework} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-slate-700">
                        <p>{standard.description}</p>
                        <div>
                          <p className="font-semibold text-slate-800">Appears in Units</p>
                          <ul className="list-disc pl-5">
                            {alignedUnits.map((unit) => (
                              <li key={`${standard.code}-${unit.id}`}>
                                <Link className="text-slate-800 underline" href={`/units/${unit.id}`}>
                                  {unit.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Appears in Labs</p>
                          <ul className="list-disc pl-5">
                            {alignedLabs.map((lab) => (
                              <li key={`${standard.code}-${lab.id}`}>
                                <Link className="text-slate-800 underline" href={`/labs/${lab.id}`}>
                                  {lab.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
                {items.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600">
                    No standards in this framework match current filters.
                  </p>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <section className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Units x Standards Crosswalk</h2>
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border bg-slate-100 p-2 text-left">Unit</th>
                {frameworks.map((framework) => (
                  <th className="border bg-slate-100 p-2 text-left" key={`crosswalk-${framework}`}>
                    {framework}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {units.map((unit) => (
                <tr key={`crosswalk-row-${unit.id}`}>
                  <th className="border bg-slate-50 p-2 text-left align-top" scope="row">
                    <Link className="underline" href={`/units/${unit.id}`}>
                      {unit.title}
                    </Link>
                  </th>
                  {frameworks.map((framework) => {
                    const matches = filteredStandards.filter(
                      (standard) => standard.framework === framework && standard.alignedUnitIds.includes(unit.id),
                    );

                    return (
                      <td className="border p-2 align-top" key={`crosswalk-${unit.id}-${framework}`}>
                        <p className="font-semibold">{matches.length}</p>
                        <p className="text-xs text-slate-600">{matches.map((m) => m.code).join(", ") || "-"}</p>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
