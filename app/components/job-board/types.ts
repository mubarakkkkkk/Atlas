export type TaskStatus = "backlog" | "pending" | "in_progress" | "review" | "completed";
export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskLabel = "bug" | "feature" | "improvement" | "documentation" | "refactor";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  labels?: TaskLabel[];
  assignees?: string[];
  dueDate?: string;
  dueTime?: string;
  progress?: number;
  createdAt: string;
  updatedAt: string;
  comments?: number;
  attachments?: number;
}

export interface Column {
  id: TaskStatus;
  title: string;
  color: string;
  bgColor: string;
}

export const COLUMNS: Column[] = [
  { id: "backlog", title: "Backlog", color: "text-slate-500", bgColor: "bg-slate-500" },
  { id: "pending", title: "To Do", color: "text-amber-500", bgColor: "bg-amber-500" },
  { id: "in_progress", title: "In Progress", color: "text-primary", bgColor: "bg-primary" },
  { id: "review", title: "In Review", color: "text-purple-500", bgColor: "bg-purple-500" },
  { id: "completed", title: "Completed", color: "text-emerald-500", bgColor: "bg-emerald-500" },
];

export const PRIORITY_CONFIG: Record<TaskPriority, { label: string; color: string; bgColor: string }> = {
  low: { label: "Low", color: "text-slate-500", bgColor: "bg-slate-500/10" },
  medium: { label: "Medium", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  high: { label: "High", color: "text-amber-500", bgColor: "bg-amber-500/10" },
  urgent: { label: "Urgent", color: "text-red-500", bgColor: "bg-red-500/10" },
};

export const LABEL_CONFIG: Record<TaskLabel, { label: string; color: string; bgColor: string }> = {
  bug: { label: "Bug", color: "text-red-500", bgColor: "bg-red-500/10" },
  feature: { label: "Feature", color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  improvement: { label: "Improvement", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  documentation: { label: "Docs", color: "text-purple-500", bgColor: "bg-purple-500/10" },
  refactor: { label: "Refactor", color: "text-amber-500", bgColor: "bg-amber-500/10" },
};
