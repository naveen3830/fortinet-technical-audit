
export enum BragStatus {
  Good = 'Good',
  NeedsAttention = 'Needs Attention',
  Bad = 'Bad',
  Info = 'Info',
}

export interface SummaryMetric {
  label: string;
  value: string;
}

export interface LanguageData {
  name: string;
  pages: number;
}

export interface EvaluationItem {
  parameter: string;
  expectedOutcome: string;
  status: string;
  brag: BragStatus;
  remarks: string;
  remarkLink?: string;
}

export interface EvaluationCategory {
  category: string;
  items: EvaluationItem[];
}

export interface NextStepItem {
  id: number;
  task: string;
  pages: string;
  timeline: string;
  owner: string;
  remarks: string;
}

export interface ReportData {
  title: string;
  source: string;
  overallScore: string;
  summaryMetrics: SummaryMetric[];
  languageDistribution: LanguageData[];
  evaluationCategories: EvaluationCategory[];
  nextSteps: NextStepItem[];
}