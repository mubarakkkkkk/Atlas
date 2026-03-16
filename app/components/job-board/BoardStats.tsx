"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { Task } from "./types";

interface BoardStatsProps {
  tasks: Task[];
}

export function BoardStats({ tasks }: BoardStatsProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const inProgressTasks = tasks.filter((t) => t.status === "in_progress").length;
  const urgentTasks = tasks.filter((t) => t.priority === "urgent" && t.status !== "completed").length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      label: "Total Tasks",
      value: totalTasks,
      icon: "task",
      color: "text-slate-600 dark:text-slate-300",
      bgColor: "bg-slate-100 dark:bg-slate-800",
      iconColor: "text-slate-500",
    },
    {
      label: "In Progress",
      value: inProgressTasks,
      icon: "pending",
      color: "text-primary",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      label: "Completed",
      value: completedTasks,
      icon: "check_circle",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      label: "Urgent",
      value: urgentTasks,
      icon: "priority_high",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-4"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <MaterialIcon name={stat.icon} className={`${stat.iconColor}`} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Completion Progress */}
      <div className="col-span-2 md:col-span-4 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Overall Progress
          </span>
          <span className="text-sm font-bold text-primary">{completionRate}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          {completedTasks} of {totalTasks} tasks completed this sprint
        </p>
      </div>
    </div>
  );
}
