"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { TodayTask } from "./types";

interface TaskListProps {
  inProgressTasks: TodayTask[];
  upcomingTasks: TodayTask[];
  completedTasks: TodayTask[];
  onTaskClick?: (task: TodayTask) => void;
}

function formatElapsedTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function TaskList({
  inProgressTasks,
  upcomingTasks,
  completedTasks,
  onTaskClick,
}: TaskListProps) {
  return (
    <section className="space-y-6">
      {/* In Progress */}
      {inProgressTasks.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            In Progress
          </h3>
          <div className="space-y-2">
            {inProgressTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => onTaskClick?.(task)}
                className="bg-background-light dark:bg-background-dark/40 rounded-xl border border-primary/20 dark:border-primary/10 p-4 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="size-5 rounded border-2 border-primary flex items-center justify-center">
                  <div className="size-2.5 bg-primary rounded-sm" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{task.title}</h4>
                  {task.project && (
                    <p className="text-xs text-foreground/60">
                      Project: {task.project}
                    </p>
                  )}
                </div>
                {task.elapsedTime !== undefined && (
                  <div className="text-xs font-mono text-primary font-bold">
                    {formatElapsedTime(task.elapsedTime)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming */}
      {upcomingTasks.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-foreground/50 dark:text-foreground/60 uppercase tracking-widest mb-4\">
            Upcoming
          </h3>
          <div className="space-y-2">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => onTaskClick?.(task)}
                className="bg-background-light dark:bg-background-dark/20 rounded-xl border border-primary/20 dark:border-primary/10 p-4 flex items-center gap-4 hover:border-primary/30 dark:hover:border-primary/20 cursor-pointer transition-colors"
              >
                <div className="size-5 rounded border-2 border-foreground/30 dark:border-foreground/30 shrink-0" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{task.title}</h4>
                  <p className="text-xs text-foreground/60">
                    {task.startTime
                      ? `Start by ${task.startTime}`
                      : task.project
                        ? `Project: ${task.project}`
                        : ""}
                  </p>
                </div>
                <MaterialIcon
                  name="chevron_right"
                  className="text-foreground/50 text-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed */}
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-foreground/50 dark:text-foreground/60 uppercase tracking-widest mb-4\">
            Completed Today
          </h3>
          <div className="space-y-2 opacity-60\">
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-primary/5 dark:bg-primary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-4 flex items-center gap-4\"
              >
                <div className="size-5 rounded bg-primary-light flex items-center justify-center text-white shrink-0\">
                  <MaterialIcon name="check" className="text-xs" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold line-through\">
                    {task.title}
                  </h4>
                  <p className="text-xs text-foreground/60\">
                    {task.completedAt
                      ? `Completed at ${task.completedAt}`
                      : "Completed"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
