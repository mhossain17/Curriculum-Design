import assessmentJson from "@/data/assessment.json";
import courseJson from "@/data/course.json";
import labsJson from "@/data/labs.json";
import materialsJson from "@/data/materials.json";
import pacingJson from "@/data/pacing.json";
import standardsJson from "@/data/standards.json";
import unitsJson from "@/data/units.json";
import type {
  AssessmentConfig,
  Course,
  Lab,
  Materials,
  PacingWeek,
  Standard,
  StandardFramework,
  Unit,
} from "@/types/curriculum";

const course = courseJson as Course;
const units = unitsJson as Unit[];
const labs = labsJson as Lab[];
const standards = standardsJson as Standard[];
const pacing = pacingJson as PacingWeek[];
const materials = materialsJson as Materials;
const assessment = assessmentJson as AssessmentConfig;

export function getCourse(): Course {
  return course;
}

export function getUnits(): Unit[] {
  return [...units].sort((a, b) => a.unitNumber - b.unitNumber);
}

export function getUnitById(unitId: string): Unit | undefined {
  return units.find((unit) => unit.id === unitId);
}

export function getLabs(): Lab[] {
  return [...labs];
}

export function getLabById(labId: string): Lab | undefined {
  return labs.find((lab) => lab.id === labId);
}

export function getLabsByUnitId(unitId: string): Lab[] {
  return labs.filter((lab) => lab.unitId === unitId);
}

export function getStandards(): Standard[] {
  return [...standards];
}

export function getStandardsForUnit(unitId: string): Standard[] {
  return standards.filter((standard) => standard.alignedUnitIds.includes(unitId));
}

export function getPacing(): PacingWeek[] {
  return [...pacing].sort((a, b) => a.week - b.week);
}

export function getMaterials(): Materials {
  return materials;
}

export function getAssessmentConfig(): AssessmentConfig {
  return assessment;
}

export function getFrameworks(): StandardFramework[] {
  return ["ETA", "CDOS", "NOCTI", "NGLS"];
}

export function getUnitDisplayTitle(unit: Unit): string {
  return unit.unitNumber === 0 ? unit.title : `Unit ${unit.unitNumber}: ${unit.title.replace(/^Unit \d+:\s*/, "")}`;
}

export function getUnitByLabId(labId: string): Unit | undefined {
  const lab = getLabById(labId);
  if (!lab) {
    return undefined;
  }

  return getUnitById(lab.unitId);
}
