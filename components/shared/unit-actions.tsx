"use client";

import { Download, Link as LinkIcon, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { unitToMarkdown } from "@/lib/markdown";
import type { Standard, Unit } from "@/types/curriculum";

interface UnitActionsProps {
  unit: Unit;
  standards: Standard[];
}

function downloadBlob(filename: string, content: string, contentType: string) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function UnitActions({ unit, standards }: UnitActionsProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  const handleDownloadJson = () => {
    downloadBlob(`${unit.id}.json`, JSON.stringify(unit, null, 2), "application/json;charset=utf-8");
  };

  const handleDownloadMarkdown = () => {
    const markdown = unitToMarkdown(unit, standards);
    downloadBlob(`${unit.id}.md`, markdown, "text/markdown;charset=utf-8");
  };

  return (
    <div className="no-print flex flex-wrap gap-2">
      <Button onClick={handlePrint} type="button" variant="outline">
        <Printer className="h-4 w-4" />
        Print Unit
      </Button>
      <Button onClick={handleCopyLink} type="button" variant="outline">
        <LinkIcon className="h-4 w-4" />
        Copy Link
      </Button>
      <Button onClick={handleDownloadJson} type="button" variant="secondary">
        <Download className="h-4 w-4" />
        Download JSON
      </Button>
      <Button onClick={handleDownloadMarkdown} type="button" variant="secondary">
        <Download className="h-4 w-4" />
        Download Markdown
      </Button>
    </div>
  );
}
