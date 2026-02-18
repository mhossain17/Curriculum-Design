import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MaterialsCalculator } from "@/components/materials/materials-calculator";
import { getMaterials } from "@/lib/data";

export default function MaterialsPage() {
  const materials = getMaterials();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Materials" }]} />
      <section>
        <h2 className="text-3xl font-bold text-slate-900">Materials and Shopping</h2>
        <p className="mt-1 text-slate-700">
          Per-student kit breakdown with class total calculator and printable shopping guidance.
        </p>
      </section>
      <MaterialsCalculator materials={materials} />
    </div>
  );
}
