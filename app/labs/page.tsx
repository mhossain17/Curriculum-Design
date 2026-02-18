import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { LabsBrowser } from "@/components/labs/labs-browser";
import { getLabs, getUnits } from "@/lib/data";

export default function LabsPage() {
  const labs = getLabs();
  const units = getUnits();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Labs" }]} />
      <section>
        <h2 className="text-3xl font-bold text-slate-900">Labs</h2>
        <p className="mt-1 text-slate-700">Explore all labs and worksheets with prerequisite, chip, and complexity filters.</p>
      </section>
      <LabsBrowser labs={labs} units={units} />
    </div>
  );
}
