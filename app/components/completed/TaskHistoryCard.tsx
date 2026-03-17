"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { CompletedTask } from "./types";

interface TaskHistoryCardProps {
  task: CompletedTask;
}

function formatDurationDiff(actual: number, estimated: number): { text: string; color: string } {
  const diff = actual - estimated;
  if (diff === 0) {
    return { text: "(on time)", color: "text-slate-500" };
  } else if (diff < 0) {
    return { text: `(${Math.abs(diff)}m faster)`, color: "text-emerald-500" };
  } else {
    return { text: `(+${diff}m)`, color: "text-rose-400" };
  }
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  
  if (diffHours < 1) {
    const diffMins = Math.floor(diffMs / (1000 * 60));
    return `Finished ${diffMins}m ago`;
  } else if (diffHours < 24) {
    return `Finished ${diffHours}h ago`;
  } else {
    const diffDays = Math.floor(diffHours / 24);
    return `Finished ${diffDays}d ago`;
  }
}

function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function TaskHistoryCard({ task }: TaskHistoryCardProps) {
  const durationDiff = formatDurationDiff(task.duration, task.estimatedDuration);

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <MaterialIcon name="check" />
        </div>
        <div>
          <h4 className="font-semibold text-sm">{task.title}</h4>
          <p className="text-xs text-slate-500 flex items-center gap-2 mt-1">
            <MaterialIcon name="history" className="text-xs" />
            {formatTimeAgo(task.completedAt)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Duration</p>
          <p className="text-sm font-medium">
            {formatDuration(task.duration)}{" "}
            <span className={`text-[10px] ml-1 ${durationDiff.color}`}>{durationDiff.text}</span>
          </p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <MaterialIcon name={task.isAIAssisted ? "smart_toy" : "person"} className="text-lg" />
        </div>
      </div>
    </div>
  );
}
