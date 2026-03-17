"use client";

import { useState } from "react";
import { TaskHistoryCard } from "./TaskHistoryCard";
import { CompletedTask } from "./types";

interface TaskHistoryProps {
  tasks: CompletedTask[];
}

type FilterPeriod = "today" | "yesterday" | "week";

export function TaskHistory({ tasks }: TaskHistoryProps) {
  const [activePeriod, setActivePeriod] = useState<FilterPeriod>("today");

  const filterButtons: { id: FilterPeriod; label: string }[] = [
    { id: "today", label: "Today" },
    { id: "yesterday", label: "Yesterday" },
    { id: "week", label: "This Week" },
  ];

  const filteredTasks = tasks.filter((task) => {
    const taskDate = new Date(task.completedAt);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);

    switch (activePeriod) {
      case "today":
        return taskDate >= today;
      case "yesterday":
        return taskDate >= yesterday && taskDate < today;
      case "week":
        return taskDate >= weekAgo;
      default:
        return true;
    }
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Recent History</h3>
        <div className="flex gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActivePeriod(btn.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                activePeriod === btn.id
                  ? "bg-slate-100 dark:bg-slate-800"
                  : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskHistoryCard key={task.id} task={task} />)
        ) : (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-500 text-sm">No completed tasks for this period</p>
          </div>
        )}
      </div>
    </div>
  );
}
