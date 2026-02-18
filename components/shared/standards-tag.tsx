import { Badge } from "@/components/ui/badge";
import type { StandardFramework } from "@/types/curriculum";

const frameworkStyles: Record<StandardFramework, string> = {
  ETA: "bg-blue-100 text-blue-800",
  CDOS: "bg-emerald-100 text-emerald-800",
  NOCTI: "bg-amber-100 text-amber-800",
  NGLS: "bg-rose-100 text-rose-800",
};

interface StandardsTagProps {
  framework: StandardFramework;
  code: string;
}

export function StandardsTag({ framework, code }: StandardsTagProps) {
  return (
    <Badge className={frameworkStyles[framework]} variant="secondary">
      {framework}: {code}
    </Badge>
  );
}
