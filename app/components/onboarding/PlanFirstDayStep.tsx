"use client";

import { MaterialIcon } from "../ui/MaterialIcon";

interface PlanFirstDayData {
  dailyFocus: string;
}

interface TaskPreview {
  id: string;
  title: string;
  timeSlot: string;
  icon: string;
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
    icon: "check_circle",
    tag: "Deep Work",
    tagStyle: "primary",
    isHighlighted: true,
  },
  {
    id: "2",
    title: "Review PRs & Team Sync",
    timeSlot: "Midday (13:00 - 14:30)",
    icon: "reviews",
    tag: "Collab",
    tagStyle: "default",
  },
  {
    id: "3",
    title: "Production Deployment",
    timeSlot: "Evening (16:00 - 17:30)",
    icon: "rocket_launch",
    tag: "Ops",
    tagStyle: "default",
  },
];

export function PlanFirstDayStep({ data, onChange, onContinue }: PlanFirstDayStepProps) {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
      {/* Hero Text */}
      <div className="text-center space-y-2">
        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">
          Let&apos;s plan your first day
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Tell your assistant what you&apos;re working on
        </p>
      </div>

      {/* Interaction Box */}
      <div className="flex flex-col gap-6 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Daily Focus
          </label>
          <div className="relative group">
            <textarea
              value={data.dailyFocus}
              onChange={(e) => onChange({ ...data, dailyFocus: e.target.value })}
              placeholder="e.g. Today I want to fix a bug, review PRs, and deploy later"
              className="flex w-full min-h-[140px] resize-none rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary p-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all outline-none"
            />
            <div className="absolute bottom-3 right-3 text-slate-400 dark:text-slate-600 pointer-events-none">
              <MaterialIcon name="auto_fix" className="text-xl" />
            </div>
          </div>
        </div>

        {/* Real-time Preview Area */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MaterialIcon name="analytics" className="text-primary text-sm" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Real-time Assistant Preview
            </h3>
          </div>
          <div className="grid gap-3">
            {DEFAULT_TASKS.map((task) => (
              <div
                key={task.id}
                className={`flex items-center gap-4 p-3 rounded-lg border ${
                  task.isHighlighted
                    ? "border-dashed border-primary/30 bg-primary/5"
                    : "border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-transparent"
                }`}
              >
                <MaterialIcon
                  name={task.icon}
                  className={task.isHighlighted ? "text-primary" : "text-slate-400"}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {task.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{task.timeSlot}</p>
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
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          Generate My Plan
          <MaterialIcon name="arrow_forward" className="text-xl" />
        </button>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
        <MaterialIcon name="security" className="text-sm" />
        <span>Your data is encrypted and used only for schedule optimization.</span>
      </div>
    </div>
  );
}
