import type { ReactNode } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function CollapsibleSection({ title, children, defaultOpen = true }: CollapsibleSectionProps) {
  return (
    <details className="rounded-lg border border-slate-200 bg-white p-4" open={defaultOpen}>
      <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="text-slate-500">
            ▾
          </span>
          {title}
        </span>
      </summary>
      <div className="mt-4 space-y-3 text-sm text-slate-700">{children}</div>
    </details>
  );
}
