"use client";
import {
  CircleCheck,
  CircleEllipsis,
  ArrowBigRight,
  Timer,
} from "lucide-react";
import { TodayStats as Stats } from "./types";

interface TodayStatsProps {
  stats: Stats;
}

export function TodayStats({ stats }: TodayStatsProps) {
  const completionPercent = Math.round(
    (stats.tasksCompleted / stats.totalTasks) * 100,
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Tasks Completed */}
      <div className="bg-background-light dark:bg-background-dark/40 p-5 rounded-xl border border-border/20 dark:border-border/10">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-foreground/60 dark:text-foreground/70">
            Tasks Completed
          </span>
          <CircleCheck className="text-primary-light" />
        </div>
        <div className="text-2xl font-bold">{stats.tasksCompleted}</div>
        <div className="mt-2 h-1 w-full bg-primary/10 dark:bg-primary/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-light transition-all duration-500"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>

      {/* Tasks Remaining */}
      <div className="bg-background-light dark:bg-background-dark/40 p-5 rounded-xl border border-border/20 dark:border-border/10">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-foreground/60 dark:text-foreground/70">
            Tasks Remaining
          </span>
          <CircleEllipsis className="text-accent" />
        </div>
        <div className="text-2xl font-bold">{stats.tasksRemaining}</div>
        <p className="text-xs text-foreground/60 dark:text-foreground/70 mt-2">
          Estimate: {stats.estimatedTimeRemaining}
        </p>
      </div>

      {/* Next Task */}
      <div className="bg-background-light dark:bg-background-dark/40 p-5 rounded-xl border border-border/20 dark:border-border/10 border-l-4 border-l-primary">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-foreground/60 dark:text-foreground/70">
            Next Task
          </span>
          <ArrowBigRight className="text-primary" />
        </div>
        <div className="text-xl font-bold truncate">{stats.nextTask}</div>
        <p className="text-xs text-primary mt-2 font-semibold">
          Starting in {stats.nextTaskStartsIn}
        </p>
      </div>

      {/* Focus Time */}
      <div className="bg-background-light dark:bg-background-dark/40 p-5 rounded-xl border border-border/20 dark:border-border/10">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-foreground/60 dark:text-foreground/70">
            Focus Time
          </span>
          <Timer className="text-primary-dark" />
        </div>
        <div className="text-2xl font-bold">{stats.focusTime}</div>
        <p className="text-xs text-foreground/60 dark:text-foreground/70 mt-2">
          Daily Goal: {stats.focusGoal}
        </p>
      </div>
    </div>
  );
}
