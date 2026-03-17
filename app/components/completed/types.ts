export interface CompletedTask {
  id: string;
  title: string;
  completedAt: string;
  duration: number;
  estimatedDuration: number;
  isAIAssisted: boolean;
}

export interface TimeBlock {
  id: string;
  period: "morning" | "midday" | "afternoon" | "evening";
  tasksCompleted: number;
  description: string;
  isHighVelocity: boolean;
}

export interface CompletedStats {
  completedToday: number;
  completedTodayChange: number;
  completedThisWeek: number;
  weeklyAverage: number;
  avgCompletionTime: number;
  avgCompletionTimeChange: number;
  totalFocusHours: number;
  focusRank: string;
}

export const PERIOD_CONFIG: Record<TimeBlock["period"], { label: string; color: string }> = {
  morning: { label: "Morning", color: "text-primary" },
  midday: { label: "Midday", color: "text-slate-400" },
  afternoon: { label: "Afternoon", color: "text-primary" },
  evening: { label: "Evening", color: "text-purple-500" },
};
