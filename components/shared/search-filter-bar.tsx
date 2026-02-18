"use client";

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface FilterConfig {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters: FilterConfig[];
}

export function SearchFilterBar({
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  filters,
}: SearchFilterBarProps) {
  return (
    <div className="no-print rounded-lg border border-slate-200 bg-white p-4">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="search-filter">
            Search
          </label>
          <Input
            id="search-filter"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={searchPlaceholder}
            value={searchValue}
          />
        </div>
        {filters.map((filter) => (
          <div key={filter.id}>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor={filter.id}>
              {filter.label}
            </label>
            <Select id={filter.id} onChange={(event) => filter.onChange(event.target.value)} value={filter.value}>
              {filter.options.map((option) => (
                <option key={`${filter.id}-${option.value}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
}
