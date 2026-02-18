import { StandardsTag } from "@/components/shared/standards-tag";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Standard, Unit } from "@/types/curriculum";

interface QuickViewPanelProps {
  unit: Unit;
  standards: Standard[];
  majorLabTitle?: string;
}

export function QuickViewPanel({ unit, standards, majorLabTitle }: QuickViewPanelProps) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Quick View</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <p className="mb-1 font-semibold text-slate-900">Chips</p>
          <div className="flex flex-wrap gap-2">
            {unit.chipsUsed.map((chip) => (
              <Badge className="bg-slate-100 text-slate-800" key={`${unit.id}-quick-chip-${chip}`} variant="secondary">
                {chip}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 font-semibold text-slate-900">Key Vocabulary</p>
          <p className="text-slate-700">{unit.keyVocabulary.join(", ")}</p>
        </div>

        <div>
          <p className="mb-1 font-semibold text-slate-900">Major Lab</p>
          <p className="text-slate-700">{majorLabTitle ?? unit.majorLabId}</p>
        </div>

        <div>
          <p className="mb-1 font-semibold text-slate-900">Standards Tags</p>
          <div className="flex flex-wrap gap-2">
            {standards.map((standard) => (
              <StandardsTag code={standard.code} framework={standard.framework} key={`${unit.id}-${standard.code}`} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
