"use client";

import Image from "next/image";
import { MaterialIcon } from "../ui/MaterialIcon";
import { Task, PRIORITY_CONFIG, LABEL_CONFIG } from "./types";

interface TaskCardProps {
  task: Task;
  onClick?: (task: Task) => void;
  isDragging?: boolean;
}

export function TaskCard({ task, onClick, isDragging }: TaskCardProps) {
  const priorityConfig = PRIORITY_CONFIG[task.priority];
  const isInProgress = task.status === "in_progress";
  const isCompleted = task.status === "completed";

  return (
    <div
      onClick={() => onClick?.(task)}
      className={`
        group relative p-4 rounded-xl border transition-all cursor-pointer
        ${isDragging ? "shadow-2xl scale-105 rotate-2" : ""}
        ${isCompleted 
          ? "bg-white/50 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 opacity-70" 
          : isInProgress
            ? "bg-primary/5 border-primary/20 ring-1 ring-primary/20 shadow-lg shadow-primary/5"
            : "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-md"
        }
      `}
    >
      {isInProgress && (
        <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className={`text-sm font-semibold leading-tight ${
          isCompleted 
            ? "text-slate-400 line-through" 
            : "text-slate-900 dark:text-slate-100 group-hover:text-primary"
        } transition-colors`}>
          {task.title}
        </h3>
        {isCompleted && (
          <MaterialIcon name="check_circle" className="text-emerald-500 text-base shrink-0" />
        )}
      </div>

      {/* Description */}
      {task.description && !isCompleted && (
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
          {task.description}
        </p>
      )}

      {/* Labels */}
      {task.labels && task.labels.length > 0 && !isCompleted && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {task.labels.map((label) => {
            const config = LABEL_CONFIG[label];
            return (
              <span
                key={label}
                className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight ${config.color} ${config.bgColor}`}
              >
                {config.label}
              </span>
            );
          })}
        </div>
      )}

      {/* Progress bar for in-progress tasks */}
      {isInProgress && task.progress !== undefined && (
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-slate-500">Progress</span>
            <span className="text-[10px] font-bold text-primary">{task.progress}%</span>
          </div>
          <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-500" 
              style={{ width: `${task.progress}%` }} 
            />
          </div>
        </div>
      )}

      {/* Footer */}
      {!isCompleted && (
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            {/* Priority */}
            <span className={`flex items-center gap-1 text-[10px] font-semibold ${priorityConfig.color}`}>
              <MaterialIcon 
                name={task.priority === "urgent" ? "priority_high" : "flag"} 
                className="text-xs" 
              />
              {priorityConfig.label}
            </span>

            {/* Due date */}
            {task.dueTime && (
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <MaterialIcon name="schedule" className="text-xs" />
                {task.dueTime}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Comments */}
            {task.comments && task.comments > 0 && (
              <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                <MaterialIcon name="chat_bubble" className="text-xs" />
                {task.comments}
              </span>
            )}

            {/* Attachments */}
            {task.attachments && task.attachments > 0 && (
              <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                <MaterialIcon name="attach_file" className="text-xs" />
                {task.attachments}
              </span>
            )}

            {/* Assignees */}
            {task.assignees && task.assignees.length > 0 && (
              <div className="flex -space-x-1.5">
                {task.assignees.slice(0, 3).map((avatar, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300 overflow-hidden"
                  >
                    <Image
                      src={avatar}
                      alt="Assignee"
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {task.assignees.length > 3 && (
                  <div className="w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-slate-500">
                      +{task.assignees.length - 3}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
