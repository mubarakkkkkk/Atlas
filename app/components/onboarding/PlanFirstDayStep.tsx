"use client";

import {
  ArrowRight,
  CircleX,
  LucideIcon,
  MessageSquareWarning,
  Rocket,
  ShieldCheck,
  SquareChartGantt,
  WandSparkles,
} from "lucide-react";

interface PlanFirstDayData {
  dailyFocus: string;
}

interface TaskPreview {
  id: string;
  title: string;
  timeSlot: string;
  icon: LucideIcon;
  tag: string;
  tagStyle: "primary" | "default";
  isHighlighted?: boolean;
}

interface PlanFirstDayStepProps {
  data: PlanFirstDayData;
  onChange: (data: PlanFirstDayData) => void;
  onContinue: () => void;
}

const DEFAULT_TASKS: TaskPreview[] = [
  {
    id: "1",
    title: "Fix high-priority bug",
    timeSlot: "Morning Session (09:00 - 11:30)",
    icon: CircleX,
    tag: "Deep Work",
    tagStyle: "primary",
    isHighlighted: true,
  },
  {
    id: "2",
    title: "Review PRs & Team Sync",
    timeSlot: "Midday (13:00 - 14:30)",
    icon: MessageSquareWarning,
    tag: "Collab",
    tagStyle: "default",
  },
  {
    id: "3",
    title: "Production Deployment",
    timeSlot: "Evening (16:00 - 17:30)",
    icon: Rocket,
    tag: "Ops",
    tagStyle: "default",
  },
];

export function PlanFirstDayStep({
  data,
  onChange,
  onContinue,
}: PlanFirstDayStepProps) {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
      {/* Hero */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Let&apos;s plan your first day
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Tell your assistant what you&apos;re working on
        </p>
      </div>

      {/* Main Card */}
      <div className="flex flex-col gap-6 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 shadow-sm">
        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Daily Focus
          </label>

          <div className="relative group">
            <textarea
              value={data.dailyFocus}
              onChange={(e) =>
                onChange({ ...data, dailyFocus: e.target.value })
              }
              placeholder="e.g. Today I want to fix a bug, review PRs, and deploy later"
              className="w-full min-h-[140px] resize-none rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />

            <WandSparkles className="absolute bottom-3 right-3 w-5 h-5 text-slate-400 dark:text-slate-600 pointer-events-none" />
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <SquareChartGantt className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Real-time Assistant Preview
            </h3>
          </div>

          <div className="grid gap-3">
            {DEFAULT_TASKS.map((task) => {
              const { icon: Icon } = task;

              return (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 p-3 rounded-lg border transition ${
                    task.isHighlighted
                      ? "border-dashed border-primary/30 bg-primary/5"
                      : "border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-transparent"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      task.isHighlighted ? "text-primary" : "text-slate-400"
                    }`}
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {task.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {task.timeSlot}
                    </p>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                      task.tagStyle === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    {task.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
        >
          Generate My Plan
          <ArrowRight className="text-xl" />
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-500">
        <ShieldCheck className="text-sm" />
        <span>
          Your data is encrypted and used only for schedule optimization.
        </span>
      </div>
    </div>
  );
}
