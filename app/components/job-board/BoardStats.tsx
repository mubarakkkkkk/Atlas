"use client";

import {
  LucideIcon,
  ListTodo,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Task } from "./types";

interface BoardStatsProps {
  tasks: Task[];
}

interface StatItem {
  label: string;
  value: number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  iconColor: string;
}

export function BoardStats({ tasks }: BoardStatsProps) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (t) => t.status === "completed"
  ).length;

  const inProgressTasks = tasks.filter(
    (t) => t.status === "in_progress"
  ).length;

  const urgentTasks = tasks.filter(
    (t) => t.priority === "urgent" && t.status !== "completed"
  ).length;

  const completionRate =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

  const stats: StatItem[] = [
    {
      label: "Total Tasks",
      value: totalTasks,
      icon: ListTodo,
      color: "text-foreground/70",
      bgColor: "bg-primary/5",
      iconColor: "text-foreground/60",
    },
    {
      label: "In Progress",
      value: inProgressTasks,
      icon: Loader2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      label: "Completed",
      value: completedTasks,
      icon: CheckCircle,
      color: "text-primary-light",
      bgColor: "bg-primary-light/10",
      iconColor: "text-primary-light",
    },
    {
      label: "Urgent",
      value: urgentTasks,
      icon: AlertTriangle,
      color: "text-primary-dark",
      bgColor: "bg-primary-dark/10",
      iconColor: "text-primary-dark",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="bg-background-light dark:bg-background-dark/30 rounded-xl border border-primary/20 p-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}
              >
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider font-medium text-foreground/60">
                  {stat.label}
                </p>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Progress */}
      <div className="col-span-2 md:col-span-4 bg-background-light dark:bg-background-dark/30 rounded-xl border border-primary/20 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">
            Overall Progress
          </span>
          <span className="text-sm font-bold text-primary">
            {completionRate}%
          </span>
        </div>

        <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          />
        </div>

        <p className="text-xs text-foreground/60 mt-2">
          {completedTasks} of {totalTasks} tasks completed this sprint
        </p>
      </div>
    </div>
  );
}