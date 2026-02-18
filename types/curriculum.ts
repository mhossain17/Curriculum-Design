export type StandardFramework = "ETA" | "CDOS" | "NOCTI" | "NGLS";

export interface Course {
  id: string;
  title: string;
  semester: string;
  semesterDates: string;
  meetingPattern: string;
  description: string;
  instructionalModel: string[];
  startHereCards: Array<{
    title: string;
    description: string;
    href: string;
  }>;
}

export interface RubricLevelSet {
  "4": string;
  "3": string;
  "2": string;
  "1": string;
}

export interface RubricRow {
  criterion: string;
  levels: RubricLevelSet;
}

export interface Rubric {
  title: string;
  rows: RubricRow[];
}

export interface SummativeTask {
  title: string;
  description: string;
  deliverables: string[];
  successCriteria: string[];
}

export interface LearningActivities {
  engage: string[];
  explore: string[];
  formalize: string[];
  apply: string[];
  reflect: string[];
}

export interface StandardsAlignment {
  ngls: string[];
  cdos: string[];
  eta: string[];
  nocti: string[];
  labAlignmentExplanation: string;
}

export interface MTSSSupports {
  tier1: string[];
  tier2: string[];
  tier3: string[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  timeFrame: string;
  keyPerformanceTask: string;
  chipsUsed: string[];
  labIds: string[];
  standardsTags: string[];
  assessmentTypes: string[];
  keyVocabulary: string[];
  majorLabId: string;
  establishedGoals: string[];
  contentKnowledge: string[];
  skillsProcess: string[];
  essentialQuestions: string[];
  enduringUnderstandings: string[];
  realWorldApplications: string[];
  culturallyRelevantConnections: string[];
  standardsAlignment: StandardsAlignment;
  materialsAndTools: string[];
  learningActivities: LearningActivities;
  commonScaffolds: string[];
  universalDesignStrategies: string[];
  differentiation: string[];
  mtssSupports: MTSSSupports;
  formativeAssessmentMethods: string[];
  summativeTask: SummativeTask;
  rubric: Rubric;
  teacherImplementationNotes: string[];
}

export interface TruthTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface Lab {
  id: string;
  unitId: string;
  title: string;
  purpose: string;
  discoveryFocus: string;
  whatStudentsDiscover: string;
  priorKnowledge: string[];
  prerequisiteLabIds: string[];
  chipsNeeded: string[];
  complexity: "Foundational" | "Intermediate" | "Advanced";
  steps: string[];
  deliverables: string[];
  truthTables: TruthTable[];
  rubric: Rubric;
  teacherNotes: string[];
  type: "Lab" | "Worksheet" | "Assessment";
}

export interface Standard {
  framework: StandardFramework;
  code: string;
  description: string;
  alignedUnitIds: string[];
  alignedLabIds: string[];
}

export interface PacingWeek {
  week: number;
  focus: string;
  keyLessons: string[];
  assessments: string[];
  deliverables: string[];
  unitId: string;
  labIds: string[];
}

export interface MaterialItem {
  code: string;
  name: string;
  quantityPerStudent: number;
  notes: string;
}

export interface Materials {
  perStudentKit: MaterialItem[];
  classMaterials: Array<{
    item: string;
    quantity: string;
    notes: string;
  }>;
  printableNotes: string[];
}

export interface AssessmentConfig {
  gradingWeights: Array<{
    category: string;
    percent: number;
    description: string;
  }>;
  overview: string[];
  rubricTemplates: Array<{
    id: string;
    title: string;
    descriptors: string[];
  }>;
}
