"use client";

import { Link as LinkIcon, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrintActions() {
  return (
    <div className="no-print flex flex-wrap gap-2">
      <Button onClick={() => window.print()} type="button" variant="outline">
        <Printer className="h-4 w-4" />
        Print
      </Button>
      <Button
        onClick={async () => {
          await navigator.clipboard.writeText(window.location.href);
        }}
        type="button"
        variant="outline"
      >
        <LinkIcon className="h-4 w-4" />
        Copy Link
      </Button>
    </div>
  );
}
