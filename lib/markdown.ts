import type { Standard, Unit } from "@/types/curriculum";

function renderList(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

function renderRubric(unit: Unit): string {
  const header = "| Criterion | 4 | 3 | 2 | 1 |\n|---|---|---|---|---|";
  const rows = unit.rubric.rows
    .map(
      (row) =>
        `| ${row.criterion} | ${row.levels["4"]} | ${row.levels["3"]} | ${row.levels["2"]} | ${row.levels["1"]} |`,
    )
    .join("\n");

  return `${header}\n${rows}`;
}

export function unitToMarkdown(unit: Unit, standards: Standard[]): string {
  const unitStandards = standards.filter((standard) => standard.alignedUnitIds.includes(unit.id));
  const grouped = {
    ETA: unitStandards.filter((s) => s.framework === "ETA"),
    CDOS: unitStandards.filter((s) => s.framework === "CDOS"),
    NOCTI: unitStandards.filter((s) => s.framework === "NOCTI"),
    NGLS: unitStandards.filter((s) => s.framework === "NGLS"),
  };

  return `# ${unit.title}

## Time Frame
${unit.timeFrame}

## Established Goals
${renderList(unit.establishedGoals)}

## Content Knowledge
${renderList(unit.contentKnowledge)}

## Skills and Process (SWBAT)
${renderList(unit.skillsProcess)}

## Essential Questions
${renderList(unit.essentialQuestions)}

## Enduring Understandings
${renderList(unit.enduringUnderstandings)}

## Real World Applications
${renderList(unit.realWorldApplications)}

## Culturally Relevant Connections
${renderList(unit.culturallyRelevantConnections)}

## Standards Alignment
### ETA
${renderList(grouped.ETA.map((s) => `${s.code}: ${s.description}`)) || "- None listed"}

### CDOS
${renderList(grouped.CDOS.map((s) => `${s.code}: ${s.description}`)) || "- None listed"}

### NOCTI
${renderList(grouped.NOCTI.map((s) => `${s.code}: ${s.description}`)) || "- None listed"}

### NGLS
${renderList(grouped.NGLS.map((s) => `${s.code}: ${s.description}`)) || "- None listed"}

### Lab Alignment
${unit.standardsAlignment.labAlignmentExplanation}

## Materials and Digital Tools
${renderList(unit.materialsAndTools)}

## Learning Activities
### Engage
${renderList(unit.learningActivities.engage)}

### Explore
${renderList(unit.learningActivities.explore)}

### Formalize
${renderList(unit.learningActivities.formalize)}

### Apply
${renderList(unit.learningActivities.apply)}

### Reflect
${renderList(unit.learningActivities.reflect)}

## Common Scaffolds
${renderList(unit.commonScaffolds)}

## Universal Design Strategies
${renderList(unit.universalDesignStrategies)}

## Differentiation
${renderList(unit.differentiation)}

## MTSS Supports
### Tier 1
${renderList(unit.mtssSupports.tier1)}

### Tier 2
${renderList(unit.mtssSupports.tier2)}

### Tier 3
${renderList(unit.mtssSupports.tier3)}

## Formative Assessment Methods
${renderList(unit.formativeAssessmentMethods)}

## Summative Performance Task
**${unit.summativeTask.title}**

${unit.summativeTask.description}

### Deliverables
${renderList(unit.summativeTask.deliverables)}

### Success Criteria
${renderList(unit.summativeTask.successCriteria)}

## Lab Structure and Rubric
${renderRubric(unit)}

## Teacher Implementation Notes
${renderList(unit.teacherImplementationNotes)}
`;
}
