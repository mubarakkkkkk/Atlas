"use client";

import { CompletedStats as Stats } from "./types";

interface CompletedStatsProps {
  stats: Stats;
}

export function CompletedStats({ stats }: CompletedStatsProps) {
  const statCards = [
    {
      label: "Completed Today",
      value: stats.completedToday.toString(),
      change: `+${stats.completedTodayChange}%`,
      changeColor: "text-emerald-500",
    },
    {
      label: "Completed This Week",
      value: stats.completedThisWeek.toString(),
      change: `avg. ${stats.weeklyAverage}`,
      changeColor: "text-slate-500",
    },
    {
      label: "Avg. Completion Time",
      value: `${stats.avgCompletionTime}m`,
      change: `${stats.avgCompletionTimeChange}%`,
      changeColor: stats.avgCompletionTimeChange < 0 ? "text-emerald-500" : "text-rose-500",
    },
    {
      label: "Total Focus Hours",
      value: `${stats.totalFocusHours}h`,
      change: stats.focusRank,
      changeColor: "text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1"
        >
          <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{stat.value}</span>
            <span className={`text-xs font-bold ${stat.changeColor}`}>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
