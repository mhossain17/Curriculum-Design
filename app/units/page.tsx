import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { UnitsBrowser } from "@/components/units/units-browser";
import { getStandards, getUnits } from "@/lib/data";

export default function UnitsPage() {
  const units = getUnits();
  const standards = getStandards();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Units" }]} />
      <section>
        <h2 className="text-3xl font-bold text-slate-900">Units</h2>
        <p className="mt-1 text-slate-700">Browse all semester units, then filter by chip, standards set, and assessment type.</p>
      </section>
      <UnitsBrowser standards={standards} units={units} />
    </div>
  );
}
