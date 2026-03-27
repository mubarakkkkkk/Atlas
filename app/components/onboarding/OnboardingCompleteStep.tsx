"use client";

import { MaterialIcon } from "../ui/MaterialIcon";

interface OnboardingCompleteStepProps {
  preferences: {
    focusMode: string;
    notifications: string;
    dailyBriefing: string;
  };
  onGoToDashboard: () => void;
  onEditPreferences: () => void;
}

interface ScheduledTask {
  id: string;
  title: string;
  time: string;
  tag: string;
  tagStyle: "primary" | "default";
}

const SCHEDULED_TASKS: ScheduledTask[] = [
  {
    id: "1",
    title: "Review Q3 Project Proposal",
    time: "09:30 AM - 10:30 AM",
    tag: "Deep Work",
    tagStyle: "primary",
  },
  {
    id: "2",
    title: "Team Sync Meeting",
    time: "11:00 AM - 11:30 AM",
    tag: "Meeting",
    tagStyle: "default",
  },
  {
    id: "3",
    title: "Email & Correspondence",
    time: "02:00 PM - 03:00 PM",
    tag: "Admin",
    tagStyle: "default",
  },
];

export function OnboardingCompleteStep({
  preferences,
  onGoToDashboard,
  onEditPreferences,
}: OnboardingCompleteStepProps) {
  return (
    <div className="w-full max-w-[600px] mx-auto flex flex-col">
      {/* Success Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MaterialIcon name="check_circle" className="text-5xl" />
        </div>
        <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-3">
          You&apos;re all set!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-md">
          Your assistant is ready to help you stay organized and focused
        </p>
      </div>

      <div className="space-y-6">
        {/* Summary Card */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-4 flex items-center gap-2">
            <MaterialIcon name="tune" className="text-primary text-xl" />
            Summary of Preferences
          </h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <div className="flex justify-between py-3">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Focus Mode</p>
              <p className="text-slate-900 dark:text-white text-sm font-medium">
                {preferences.focusMode}
              </p>
            </div>
            <div className="flex justify-between py-3">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Notifications</p>
              <p className="text-slate-900 dark:text-white text-sm font-medium">
                {preferences.notifications}
              </p>
            </div>
            <div className="flex justify-between py-3">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Daily Briefing</p>
              <p className="text-slate-900 dark:text-white text-sm font-medium">
                {preferences.dailyBriefing}
              </p>
            </div>
          </div>
        </div>

        {/* Tasks Card */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-4 flex items-center gap-2">
            <MaterialIcon name="event_note" className="text-primary text-xl" />
            Today&apos;s Tasks
          </h3>
          <div className="space-y-3">
            {SCHEDULED_TASKS.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40"
              >
                <div className="h-5 w-5 rounded border-2 border-primary/40 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{task.title}</p>
                  <p className="text-xs text-slate-500">{task.time}</p>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    task.tagStyle === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {task.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight Card */}
        <div className="rounded-xl bg-linear-to-r from-primary/20 to-primary/5 border border-primary/20 p-5">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary text-white">
              <MaterialIcon name="lightbulb" />
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-semibold text-sm mb-1">
                Assistant Insight
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                You have 3 tasks planned today with 2 focus hours available. Your energy peak is
                usually at 10 AM, so we&apos;ve slotted your &quot;Deep Work&quot; task then.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-10">
        <button
          type="button"
          onClick={onGoToDashboard}
          className="w-full h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all"
        >
          Go to Dashboard
        </button>
        <button
          type="button"
          onClick={onEditPreferences}
          className="w-full h-12 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
        >
          Edit Preferences
        </button>
      </div>
    </div>
  );
}
