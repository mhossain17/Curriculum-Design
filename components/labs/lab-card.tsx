import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lab, Unit } from "@/types/curriculum";

interface LabCardProps {
  lab: Lab;
  unit?: Unit;
}

export function LabCard({ lab, unit }: LabCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link className="hover:underline" href={`/labs/${lab.id}`}>
            {lab.title}
          </Link>
        </CardTitle>
        <CardDescription>
          {unit?.title ?? "Unassigned Unit"} | {lab.complexity}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p>
          <span className="font-semibold">Purpose:</span> {lab.purpose}
        </p>
        <p>
          <span className="font-semibold">Discovery Focus:</span> {lab.discoveryFocus}
        </p>
        <p>
          <span className="font-semibold">Prerequisite Labs:</span>{" "}
          {lab.prerequisiteLabIds.length ? lab.prerequisiteLabIds.join(", ") : "None"}
        </p>
        <p>
          <span className="font-semibold">Deliverables:</span> {lab.deliverables.join(", ")}
        </p>
        <div className="flex flex-wrap gap-2">
          {lab.chipsNeeded.map((chip) => (
            <Badge className="bg-slate-100 text-slate-800" key={`${lab.id}-${chip}`} variant="secondary">
              {chip}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
