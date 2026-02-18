import Link from "next/link";

import { StandardsTag } from "@/components/shared/standards-tag";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { StandardFramework, Unit } from "@/types/curriculum";

interface UnitCardProps {
  unit: Unit;
  frameworks: StandardFramework[];
}

export function UnitCard({ unit, frameworks }: UnitCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">
          <Link className="hover:underline" href={`/units/${unit.id}`}>
            {unit.title}
          </Link>
        </CardTitle>
        <CardDescription>{unit.timeFrame}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-slate-800">Key Performance Task</p>
          <p className="text-sm text-slate-700">{unit.keyPerformanceTask}</p>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-slate-800">Chips Used</p>
          <div className="flex flex-wrap gap-2">
            {unit.chipsUsed.map((chip) => (
              <Badge className="bg-slate-100 text-slate-800" key={`${unit.id}-${chip}`} variant="secondary">
                {chip}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-slate-800">Standard Sets</p>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework) => (
              <StandardsTag code={framework} framework={framework} key={`${unit.id}-${framework}`} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-slate-800">Assessment Types</p>
          <div className="flex flex-wrap gap-2">
            {unit.assessmentTypes.map((assessmentType) => (
              <Badge className="bg-emerald-100 text-emerald-800" key={`${unit.id}-${assessmentType}`} variant="secondary">
                {assessmentType}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
