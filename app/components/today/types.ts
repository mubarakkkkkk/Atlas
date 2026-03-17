export type TaskPriority = "high" | "medium" | "low";
export type TaskStatus = "completed" | "in_progress" | "upcoming";
export type TaskCategory = "bug" | "feature" | "review" | "meeting" | "documentation";

export interface TodayTask {
  id: string;
  title: string;
  project?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  category?: TaskCategory;
  startTime?: string;
  endTime?: string;
  completedAt?: string;
  elapsedTime?: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  priority: TaskPriority;
  category: TaskCategory;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface TodayStats {
  tasksCompleted: number;
  totalTasks: number;
  tasksRemaining: number;
  estimatedTimeRemaining: string;
  nextTask: string;
  nextTaskStartsIn: string;
  focusTime: string;
  focusGoal: string;
}

export interface Insight {
  id: string;
  type: "suggestion" | "info" | "warning";
  message: string;
  highlight?: string;
}

export interface ContextInfo {
  branch: string;
  lastDeploy: string;
  lastDeployStatus: "success" | "failed" | "pending";
}

export const PRIORITY_CONFIG: Record<TaskPriority, { label: string; bgColor: string; textColor: string }> = {
  high: { label: "High", bgColor: "bg-red-100 dark:bg-red-900/30", textColor: "text-red-600 dark:text-red-400" },
  medium: { label: "Medium", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-600 dark:text-blue-400" },
  low: { label: "Low", bgColor: "bg-slate-100 dark:bg-slate-800", textColor: "text-slate-600 dark:text-slate-400" },
};

export const CATEGORY_CONFIG: Record<TaskCategory, { label: string }> = {
  bug: { label: "Bug" },
  feature: { label: "Feature" },
  review: { label: "Review" },
  meeting: { label: "Meeting" },
  documentation: { label: "Docs" },
};
