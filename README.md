# Introduction to Digital Electronics Curriculum Guide

Next.js (App Router) web app for publishing a full-semester NYC high school CTE curriculum guide for **Introduction to Digital Electronics**.

## Tech Stack

- Next.js + TypeScript
- Tailwind CSS
- shadcn/ui-style components (local component files)
- Local JSON content store (`/data`, no database)

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Routes

- `/` Home overview
- `/units` Units list with search and filters
- `/units/[unitId]` Full unit plan detail with collapsible sections, print/copy/download actions
- `/labs` Labs list with search and filters
- `/labs/[labId]` Student-facing lab directions, truth tables, rubric, teacher notes toggle
- `/pacing` Week-by-week pacing calendar
- `/standards` Searchable standards list + standards crosswalk
- `/materials` Materials calculator and printable shopping list
- `/assessment` Assessment model, grading weights, rubric templates

## Content Editing

All curriculum content is editable in JSON files under `/data`:

- `data/course.json` - course metadata, dates, meeting pattern, start cards
- `data/units.json` - full unit plans
- `data/labs.json` - labs, worksheets, truth tables, rubrics
- `data/standards.json` - standards library and alignments
- `data/pacing.json` - weekly pacing entries
- `data/materials.json` - per-student kit and class shopping data
- `data/assessment.json` - grading weights and rubric templates

## Download/Export

On each unit detail page:

- `Print Unit` uses print CSS for printer/PDF output
- `Download JSON` exports the unit object
- `Download Markdown` exports a printable markdown version of the unit

Markdown export utility: `lib/markdown.ts`.

## Accessibility and UX Notes

- Semantic headings, lists, tables, and labels
- Keyboard-navigable controls
- High-contrast visual hierarchy
- Responsive layouts for desktop/tablet/mobile
- Minimal-click access to rubrics, truth tables, and print actions
