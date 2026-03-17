"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { TodayStats as Stats } from "./types";

interface TodayStatsProps {
  stats: Stats;
}

export function TodayStats({ stats }: TodayStatsProps) {
  const completionPercent = Math.round((stats.tasksCompleted / stats.totalTasks) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Tasks Completed */}
      <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Tasks Completed
          </span>
          <MaterialIcon name="check_circle" className="text-emerald-500" />
        </div>
        <div className="text-2xl font-bold">{stats.tasksCompleted}</div>
        <div className="mt-2 h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>

      {/* Tasks Remaining */}
      <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Tasks Remaining
          </span>
          <MaterialIcon name="pending" className="text-amber-500" />
        </div>
        <div className="text-2xl font-bold">{stats.tasksRemaining}</div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Estimate: {stats.estimatedTimeRemaining}
        </p>
      </div>

      {/* Next Task */}
      <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-primary">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Next Task</span>
          <MaterialIcon name="next_plan" className="text-primary" />
        </div>
        <div className="text-xl font-bold truncate">{stats.nextTask}</div>
        <p className="text-xs text-primary mt-2 font-semibold">
          Starting in {stats.nextTaskStartsIn}
        </p>
      </div>

      {/* Focus Time */}
      <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Focus Time</span>
          <MaterialIcon name="timer" className="text-purple-500" />
        </div>
        <div className="text-2xl font-bold">{stats.focusTime}</div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Daily Goal: {stats.focusGoal}
        </p>
      </div>
    </div>
  );
}
