"use client";

import { useMemo, useState } from "react";

import { LabCard } from "@/components/labs/lab-card";
import { SearchFilterBar } from "@/components/shared/search-filter-bar";
import type { Lab, Unit } from "@/types/curriculum";

interface LabsBrowserProps {
  labs: Lab[];
  units: Unit[];
}

export function LabsBrowser({ labs, units }: LabsBrowserProps) {
  const [search, setSearch] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("all");
  const [selectedChip, setSelectedChip] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");

  const chips = useMemo(
    () => Array.from(new Set(labs.flatMap((lab) => lab.chipsNeeded))).sort((a, b) => a.localeCompare(b)),
    [labs],
  );

  const filteredLabs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return labs.filter((lab) => {
      const unit = units.find((item) => item.id === lab.unitId);
      const searchable = [
        lab.title,
        lab.purpose,
        lab.discoveryFocus,
        lab.whatStudentsDiscover,
        unit?.title ?? "",
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = query.length === 0 || searchable.includes(query);
      const matchesUnit = selectedUnit === "all" || lab.unitId === selectedUnit;
      const matchesChip = selectedChip === "all" || lab.chipsNeeded.includes(selectedChip);
      const matchesComplexity = selectedComplexity === "all" || lab.complexity === selectedComplexity;

      return matchesSearch && matchesUnit && matchesChip && matchesComplexity;
    });
  }, [labs, search, selectedChip, selectedComplexity, selectedUnit, units]);

  return (
    <div className="space-y-6">
      <SearchFilterBar
        filters={[
          {
            id: "lab-unit-filter",
            label: "Unit",
            value: selectedUnit,
            onChange: setSelectedUnit,
            options: [
              { label: "All units", value: "all" },
              ...units.map((unit) => ({ label: unit.title, value: unit.id })),
            ],
          },
          {
            id: "lab-chip-filter",
            label: "Chip",
            value: selectedChip,
            onChange: setSelectedChip,
            options: [{ label: "All chips", value: "all" }, ...chips.map((chip) => ({ label: chip, value: chip }))],
          },
          {
            id: "lab-complexity-filter",
            label: "Complexity",
            value: selectedComplexity,
            onChange: setSelectedComplexity,
            options: [
              { label: "All levels", value: "all" },
              { label: "Foundational", value: "Foundational" },
              { label: "Intermediate", value: "Intermediate" },
              { label: "Advanced", value: "Advanced" },
            ],
          },
        ]}
        onSearchChange={setSearch}
        searchPlaceholder="Search labs by title, purpose, discovery focus, or unit"
        searchValue={search}
      />

      <p className="text-sm text-slate-600">Showing {filteredLabs.length} lab(s).</p>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredLabs.map((lab) => (
          <LabCard key={lab.id} lab={lab} unit={units.find((unit) => unit.id === lab.unitId)} />
        ))}
      </div>

      {filteredLabs.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-600">
          No labs match your filters.
        </p>
      ) : null}
    </div>
  );
}
