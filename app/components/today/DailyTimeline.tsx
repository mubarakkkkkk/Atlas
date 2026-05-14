"use client";

import { Clock4 } from "lucide-react";
import { TimelineEvent, PRIORITY_CONFIG, CATEGORY_CONFIG } from "./types";

interface DailyTimelineProps {
  events: TimelineEvent[];
}

export function DailyTimeline({ events }: DailyTimelineProps) {
  return (
    <section>
      <h3 className="text-base font-bold mb-4 flex items-center gap-2">
        <Clock4 className="text-lg" />
        Daily Timeline
      </h3>
      <div className="bg-background-light dark:bg-background-dark/20 rounded-xl p-6 border border-border/20 dark:border-border/10\">
        <div className="space-y-0">
          {events.map((event, index) => {
            const isLast = index === events.length - 1;
            const priorityConfig = PRIORITY_CONFIG[event.priority];
            const categoryConfig = CATEGORY_CONFIG[event.category];

            let borderColor = "border-border/30 dark:border-border/20";
            if (event.isCompleted) {
              borderColor = "border-border-light";
            } else if (event.isCurrent) {
              borderColor = "border-border";
            }

            return (
              <div
                key={event.id}
                className={`relative flex gap-6 ${!isLast ? "pb-6" : ""}`}
              >
                {/* Timeline line */}
                {!isLast && (
                  <div
                    className={`absolute left-[11px] ${index === 0 ? "top-6" : "top-0"} bottom-0 w-px ${
                      event.isCompleted || event.isCurrent
                        ? "bg-primary/20 dark:bg-primary/20"
                        : "border-l border-dashed border-border/20 dark:border-border/10"
                    }`}
                  />
                )}

                {/* Timeline dot */}
                <div
                  className={`relative z-10 size-[23px] rounded-full bg-primary/10 dark:bg-primary/10 border-4 ${borderColor} shrink-0`}
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`font-semibold text-sm ${
                        !event.isCompleted && !event.isCurrent
                          ? "text-foreground/60"
                          : ""
                      }`}
                    >
                      {event.title}
                    </h4>
                    <span
                      className={`text-xs ${event.isCurrent ? "text-foreground/60" : "text-foreground/50"}`}
                    >
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded ${priorityConfig.bgColor} ${priorityConfig.textColor} font-bold uppercase`}
                    >
                      {priorityConfig.label}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 dark:bg-primary/10 text-foreground/60 dark:text-foreground/60 font-medium\">
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
