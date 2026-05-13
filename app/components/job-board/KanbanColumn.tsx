"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { TaskCard } from "./TaskCard";
import { Task, Column } from "./types";

interface KanbanColumnProps {
  column: Column;
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
  onAddTask?: (status: Column["id"]) => void;
}

export function KanbanColumn({
  column,
  tasks,
  onTaskClick,
  onAddTask,
}: KanbanColumnProps) {
  return (
    <div className="flex flex-col min-w-[300px] max-w-[300px] bg-primary/5 dark:bg-primary/5 rounded-2xl border border-primary/20 dark:border-primary/10\">
      {/* Column Header */}
      <div className="p-4 border-b border-primary/20 dark:border-primary/10\">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${column.bgColor}`} />
            <h3 className={`text-sm font-bold ${column.color}`}>
              {column.title}
            </h3>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${column.color} ${column.bgColor}/10`}
            >
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onAddTask?.(column.id)}
              className="p-1 hover:bg-primary/10 dark:hover:bg-primary/10 rounded transition-colors"
            >
              <MaterialIcon name="add" className="text-foreground/50 text-sm" />
            </button>
            <button className="p-1 hover:bg-primary/10 dark:hover:bg-primary/10 rounded transition-colors">
              <MaterialIcon
                name="more_horiz"
                className="text-foreground/50 text-sm"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto custom-scrollbar max-h-[calc(100vh-280px)]">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/10 flex items-center justify-center mb-3">
              <MaterialIcon name="inbox" className="text-foreground/50" />
            </div>
            <p className="text-sm text-foreground/50">No tasks yet</p>
            <button
              onClick={() => onAddTask?.(column.id)}
              className="mt-2 text-xs text-primary hover:underline"
            >
              Add a task
            </button>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={onTaskClick} />
          ))
        )}
      </div>

      {/* Add Task Button */}
      {tasks.length > 0 && (
        <div className="p-3 border-t border-primary/20 dark:border-primary/10">
          <button
            onClick={() => onAddTask?.(column.id)}
            className="w-full flex items-center justify-center gap-2 py-2 text-sm text-foreground/60 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 rounded-lg transition-colors"
          >
            <MaterialIcon name="add" className="text-sm" />
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}
