"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/units", label: "Units" },
  { href: "/labs", label: "Labs" },
  { href: "/pacing", label: "Pacing" },
  { href: "/standards", label: "Standards" },
  { href: "/materials", label: "Materials" },
  { href: "/assessment", label: "Assessment" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="no-print border-b border-emerald-900/60 bg-[#08160f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#08160f]/85">
      <div className="container flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">NYC CTE Curriculum Guide</p>
          <h1 className="text-lg font-bold text-slate-900">Introduction to Digital Electronics</h1>
        </div>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-emerald-700 text-emerald-50" : "text-slate-700 hover:bg-slate-100",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
