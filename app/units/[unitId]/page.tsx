import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CollapsibleSection } from "@/components/shared/collapsible-section";
import { RubricTable } from "@/components/shared/rubric-table";
import { StandardsTag } from "@/components/shared/standards-tag";
import { UnitActions } from "@/components/shared/unit-actions";
import { QuickViewPanel } from "@/components/units/quick-view-panel";
import { Badge } from "@/components/ui/badge";
import { getLabById, getLabsByUnitId, getStandards, getStandardsForUnit, getUnitById, getUnits } from "@/lib/data";

interface UnitDetailPageProps {
  params: Promise<{ unitId: string }>;
}

export function generateStaticParams() {
  return getUnits().map((unit) => ({ unitId: unit.id }));
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function UnitDetailPage({ params }: UnitDetailPageProps) {
  const { unitId } = await params;
  const unit = getUnitById(unitId);

  if (!unit) {
    notFound();
  }

  const allStandards = getStandards();
  const unitStandards = getStandardsForUnit(unit.id);
  const labs = getLabsByUnitId(unit.id);
  const majorLab = getLabById(unit.majorLabId);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Units", href: "/units" },
          { label: unit.title },
        ]}
      />

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Unit Plan</p>
            <h2 className="text-3xl font-bold text-slate-900">{unit.title}</h2>
            <p className="mt-1 text-slate-700">{unit.timeFrame}</p>
          </div>
          <UnitActions standards={allStandards} unit={unit} />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <CollapsibleSection title="Established Goals">
            <List items={unit.establishedGoals} />
          </CollapsibleSection>

          <CollapsibleSection title="Content Knowledge">
            <List items={unit.contentKnowledge} />
          </CollapsibleSection>

          <CollapsibleSection title="Skills and Process (SWBAT)">
            <List items={unit.skillsProcess} />
          </CollapsibleSection>

          <CollapsibleSection title="Essential Questions">
            <List items={unit.essentialQuestions} />
          </CollapsibleSection>

          <CollapsibleSection title="Enduring Understandings">
            <List items={unit.enduringUnderstandings} />
          </CollapsibleSection>

          <CollapsibleSection title="Real World Applications">
            <List items={unit.realWorldApplications} />
          </CollapsibleSection>

          <CollapsibleSection title="Culturally Relevant Connections">
            <List items={unit.culturallyRelevantConnections} />
          </CollapsibleSection>

          <CollapsibleSection title="Standards Alignment">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-900">Tags</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {unitStandards.map((standard) => (
                    <StandardsTag code={standard.code} framework={standard.framework} key={standard.code} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Lab Alignment Explanation</p>
                <p>{unit.standardsAlignment.labAlignmentExplanation}</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials and Digital Tools">
            <List items={unit.materialsAndTools} />
          </CollapsibleSection>

          <CollapsibleSection title="Learning Activities (Engage -> Explore -> Formalize -> Apply -> Reflect)">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-900">Engage</p>
                <List items={unit.learningActivities.engage} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Explore</p>
                <List items={unit.learningActivities.explore} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Formalize</p>
                <List items={unit.learningActivities.formalize} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Apply</p>
                <List items={unit.learningActivities.apply} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Reflect</p>
                <List items={unit.learningActivities.reflect} />
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Common Scaffolds">
            <List items={unit.commonScaffolds} />
          </CollapsibleSection>

          <CollapsibleSection title="Universal Design Strategies">
            <List items={unit.universalDesignStrategies} />
          </CollapsibleSection>

          <CollapsibleSection title="Differentiation">
            <List items={unit.differentiation} />
          </CollapsibleSection>

          <CollapsibleSection title="MTSS Supports">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-900">Tier 1</p>
                <List items={unit.mtssSupports.tier1} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tier 2</p>
                <List items={unit.mtssSupports.tier2} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tier 3</p>
                <List items={unit.mtssSupports.tier3} />
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Formative Assessment Methods">
            <List items={unit.formativeAssessmentMethods} />
          </CollapsibleSection>

          <CollapsibleSection title="Summative Performance Task">
            <p className="font-semibold text-slate-900">{unit.summativeTask.title}</p>
            <p>{unit.summativeTask.description}</p>
            <div>
              <p className="font-semibold text-slate-900">Deliverables</p>
              <List items={unit.summativeTask.deliverables} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Success Criteria</p>
              <List items={unit.summativeTask.successCriteria} />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Lab Structure and Rubric">
            <div className="space-y-3">
              <p className="text-sm text-slate-700">
                Linked labs: {labs.length > 0 ? "" : "None"}
                {labs.map((lab, index) => (
                  <span key={lab.id}>
                    <Link className="underline" href={`/labs/${lab.id}`}>
                      {lab.title}
                    </Link>
                    {index < labs.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <RubricTable rubric={unit.rubric} />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Teacher Implementation Notes">
            <List items={unit.teacherImplementationNotes} />
          </CollapsibleSection>
        </div>

        <aside className="space-y-4">
          <QuickViewPanel majorLabTitle={majorLab?.title} standards={unitStandards} unit={unit} />

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-900">Linked Labs</h3>
            <ul className="space-y-2 text-sm">
              {labs.map((lab) => (
                <li key={`aside-${lab.id}`}>
                  <Link className="underline" href={`/labs/${lab.id}`}>
                    {lab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-900">Assessment Types</h3>
            <div className="flex flex-wrap gap-2">
              {unit.assessmentTypes.map((assessmentType) => (
                <Badge className="bg-emerald-100 text-emerald-800" key={`${unit.id}-${assessmentType}`} variant="secondary">
                  {assessmentType}
                </Badge>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
