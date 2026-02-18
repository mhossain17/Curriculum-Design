"use client";

import { useMemo, useState } from "react";

import { SearchFilterBar } from "@/components/shared/search-filter-bar";
import { UnitCard } from "@/components/units/unit-card";
import type { Standard, StandardFramework, Unit } from "@/types/curriculum";

interface UnitsBrowserProps {
  units: Unit[];
  standards: Standard[];
}

function getFrameworksForUnit(unitId: string, standards: Standard[]): StandardFramework[] {
  const set = new Set<StandardFramework>();

  for (const standard of standards) {
    if (standard.alignedUnitIds.includes(unitId)) {
      set.add(standard.framework);
    }
  }

  return Array.from(set);
}

export function UnitsBrowser({ units, standards }: UnitsBrowserProps) {
  const [search, setSearch] = useState("");
  const [selectedChip, setSelectedChip] = useState("all");
  const [selectedFramework, setSelectedFramework] = useState("all");
  const [selectedAssessment, setSelectedAssessment] = useState("all");

  const chips = useMemo(
    () => Array.from(new Set(units.flatMap((unit) => unit.chipsUsed))).sort((a, b) => a.localeCompare(b)),
    [units],
  );

  const assessments = useMemo(
    () => Array.from(new Set(units.flatMap((unit) => unit.assessmentTypes))).sort((a, b) => a.localeCompare(b)),
    [units],
  );

  const filteredUnits = useMemo(() => {
    const query = search.trim().toLowerCase();

    return units.filter((unit) => {
      const frameworks = getFrameworksForUnit(unit.id, standards);
      const matchesChip = selectedChip === "all" || unit.chipsUsed.includes(selectedChip);
      const matchesFramework = selectedFramework === "all" || frameworks.includes(selectedFramework as StandardFramework);
      const matchesAssessment = selectedAssessment === "all" || unit.assessmentTypes.includes(selectedAssessment);
      const searchable = [
        unit.title,
        unit.timeFrame,
        unit.keyPerformanceTask,
        unit.keyVocabulary.join(" "),
        unit.establishedGoals.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = query.length === 0 || searchable.includes(query);

      return matchesChip && matchesFramework && matchesAssessment && matchesSearch;
    });
  }, [search, selectedChip, selectedFramework, selectedAssessment, standards, units]);

  return (
    <div className="space-y-6">
      <SearchFilterBar
        filters={[
          {
            id: "unit-chip-filter",
            label: "Chip",
            value: selectedChip,
            onChange: setSelectedChip,
            options: [{ label: "All chips", value: "all" }, ...chips.map((chip) => ({ label: chip, value: chip }))],
          },
          {
            id: "unit-framework-filter",
            label: "Standard Set",
            value: selectedFramework,
            onChange: setSelectedFramework,
            options: [
              { label: "All sets", value: "all" },
              { label: "ETA", value: "ETA" },
              { label: "CDOS", value: "CDOS" },
              { label: "NOCTI", value: "NOCTI" },
              { label: "NGLS", value: "NGLS" },
            ],
          },
          {
            id: "unit-assessment-filter",
            label: "Assessment Type",
            value: selectedAssessment,
            onChange: setSelectedAssessment,
            options: [{ label: "All types", value: "all" }, ...assessments.map((a) => ({ label: a, value: a }))],
          },
        ]}
        onSearchChange={setSearch}
        searchPlaceholder="Search by unit title, task, vocabulary, or goals"
        searchValue={search}
      />

      <p className="text-sm text-slate-600">Showing {filteredUnits.length} unit(s).</p>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredUnits.map((unit) => (
          <UnitCard frameworks={getFrameworksForUnit(unit.id, standards)} key={unit.id} unit={unit} />
        ))}
      </div>

      {filteredUnits.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-600">
          No units match your filters.
        </p>
      ) : null}
    </div>
  );
}
