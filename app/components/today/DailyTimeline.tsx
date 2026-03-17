"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { TimelineEvent, PRIORITY_CONFIG, CATEGORY_CONFIG } from "./types";

interface DailyTimelineProps {
  events: TimelineEvent[];
}

export function DailyTimeline({ events }: DailyTimelineProps) {
  return (
    <section>
      <h3 className="text-base font-bold mb-4 flex items-center gap-2">
        <MaterialIcon name="schedule" className="text-lg" />
        Daily Timeline
      </h3>
      <div className="bg-white dark:bg-slate-800/20 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
        <div className="space-y-0">
          {events.map((event, index) => {
            const isLast = index === events.length - 1;
            const priorityConfig = PRIORITY_CONFIG[event.priority];
            const categoryConfig = CATEGORY_CONFIG[event.category];

            let borderColor = "border-slate-300 dark:border-slate-700";
            if (event.isCompleted) {
              borderColor = "border-emerald-500";
            } else if (event.isCurrent) {
              borderColor = "border-primary";
            }

            return (
              <div key={event.id} className={`relative flex gap-6 ${!isLast ? "pb-6" : ""}`}>
                {/* Timeline line */}
                {!isLast && (
                  <div
                    className={`absolute left-[11px] ${index === 0 ? "top-6" : "top-0"} bottom-0 w-px ${
                      event.isCompleted || event.isCurrent
                        ? "bg-slate-200 dark:bg-slate-800"
                        : "border-l border-dashed border-slate-200 dark:border-slate-800"
                    }`}
                  />
                )}

                {/* Timeline dot */}
                <div
                  className={`relative z-10 size-[23px] rounded-full bg-slate-100 dark:bg-slate-800 border-4 ${borderColor} shrink-0`}
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`font-semibold text-sm ${
                        !event.isCompleted && !event.isCurrent ? "text-slate-500" : ""
                      }`}
                    >
                      {event.title}
                    </h4>
                    <span className={`text-xs ${event.isCurrent ? "text-slate-500" : "text-slate-400"}`}>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded ${priorityConfig.bgColor} ${priorityConfig.textColor} font-bold uppercase`}
                    >
                      {priorityConfig.label}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                      {categoryConfig.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
