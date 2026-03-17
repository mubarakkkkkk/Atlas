"use client";

import { TimeBlock, PERIOD_CONFIG } from "./types";

interface CompletionTimelineProps {
  blocks: TimeBlock[];
  progress: number;
}

export function CompletionTimeline({ blocks, progress }: CompletionTimelineProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Completion Timeline</h3>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Progress bar at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-1.5 top-2 bottom-2 w-px border-l border-dashed border-slate-200 dark:border-slate-700" />

          {blocks.map((block) => {
            const config = PERIOD_CONFIG[block.period];
            const isActive = block.isHighVelocity;

            return (
              <div key={block.id} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1 w-3 h-3 rounded-full ${
                    isActive ? "bg-primary ring-4 ring-primary/20" : "bg-slate-400 ring-4 ring-slate-400/20"
                  }`}
                />
                <span className={`text-xs font-bold uppercase ${config.color}`}>
                  {config.label}
                </span>
                <h5 className="text-sm font-semibold mt-1">
                  {block.tasksCompleted} Task{block.tasksCompleted !== 1 ? "s" : ""} Completed
                </h5>
                <p className="text-xs text-slate-500 mt-1">{block.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
