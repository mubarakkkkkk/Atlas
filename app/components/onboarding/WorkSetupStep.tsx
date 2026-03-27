"use client";

import { MaterialIcon } from "../ui/MaterialIcon";

interface WorkSetupData {
  startTime: string;
  endTime: string;
  focusHours: string[];
  defaultTaskDuration: string;
  smartReminders: boolean;
  scheduleOptimization: boolean;
}

interface WorkSetupStepProps {
  data: WorkSetupData;
  onChange: (data: WorkSetupData) => void;
  onContinue: () => void;
}

const FOCUS_HOURS = [
  "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM",
  "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"
];

const TASK_DURATIONS = ["30m", "1h", "2h"];

export function WorkSetupStep({ data, onChange, onContinue }: WorkSetupStepProps) {
  const toggleFocusHour = (hour: string) => {
    const newFocusHours = data.focusHours.includes(hour)
      ? data.focusHours.filter((h) => h !== hour)
      : [...data.focusHours, hour];
    onChange({ ...data, focusHours: newFocusHours });
  };

  return (
    <div className="w-full max-w-[560px] mx-auto">
      {/* Intro Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Set up your work style</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Help your assistant understand how you work best so it can support your productivity.
        </p>
      </div>

      {/* Form Content */}
      <div className="space-y-8">
        {/* Work Hours Section */}
        <section>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MaterialIcon name="schedule" className="text-primary" />
            Work Hours
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-500">Start Time</label>
              <input
                type="time"
                value={data.startTime}
                onChange={(e) => onChange({ ...data, startTime: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-500">End Time</label>
              <input
                type="time"
                value={data.endTime}
                onChange={(e) => onChange({ ...data, endTime: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
        </section>

        {/* Focus Hours Section */}
        <section>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MaterialIcon name="potted_plant" className="text-primary" />
            Focus Hours
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Select the times you prefer to do deep work without interruptions.
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {FOCUS_HOURS.map((hour) => {
              const isSelected = data.focusHours.includes(hour);
              return (
                <button
                  key={hour}
                  type="button"
                  onClick={() => toggleFocusHour(hour)}
                  className={`py-2 text-xs font-medium rounded-lg transition-colors ${
                    isSelected
                      ? "border-2 border-primary bg-primary/10 text-primary"
                      : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary"
                  }`}
                >
                  {hour}
                </button>
              );
            })}
          </div>
        </section>

        {/* Default Task Duration */}
        <section>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MaterialIcon name="timer" className="text-primary" />
            Default Task Duration
          </h3>
          <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            {TASK_DURATIONS.map((duration) => {
              const isSelected = data.defaultTaskDuration === duration;
              return (
                <button
                  key={duration}
                  type="button"
                  onClick={() => onChange({ ...data, defaultTaskDuration: duration })}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isSelected
                      ? "bg-white dark:bg-slate-700 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {duration}
                </button>
              );
            })}
          </div>
        </section>

        {/* Toggles Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
            <div className="flex flex-col">
              <span className="font-bold">Enable smart reminders</span>
              <span className="text-xs text-slate-500">Get nudged when you&apos;re off track</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={data.smartReminders}
                onChange={(e) => onChange({ ...data, smartReminders: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
            <div className="flex flex-col">
              <span className="font-bold">Allow schedule optimization</span>
              <span className="text-xs text-slate-500">Atlas will auto-adjust tasks for efficiency</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={data.scheduleOptimization}
                onChange={(e) => onChange({ ...data, scheduleOptimization: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
        </section>

        {/* CTA Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={onContinue}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
          >
            Continue
            <MaterialIcon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
