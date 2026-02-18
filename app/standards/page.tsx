import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { StandardsBrowser } from "@/components/standards/standards-browser";
import { getLabs, getStandards, getUnits } from "@/lib/data";

export default function StandardsPage() {
  const standards = getStandards();
  const units = getUnits();
  const labs = getLabs();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Standards" }]} />
      <section>
        <h2 className="text-3xl font-bold text-slate-900">Standards Alignment</h2>
        <p className="mt-1 text-slate-700">Search standards and see exactly where each code appears across units and labs.</p>
      </section>
      <StandardsBrowser labs={labs} standards={standards} units={units} />
    </div>
  );
}
