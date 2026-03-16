"use client";

export interface WorkPreferencesData {
  coreHoursStart: string;
  coreHoursEnd: string;
  reminderFrequency: string;
  focusHoursGoal: number;
}

interface WorkPreferencesSectionProps {
  data: WorkPreferencesData;
  onChange: (data: WorkPreferencesData) => void;
}

const reminderOptions = [
  { value: "30min", label: "Every 30 minutes" },
  { value: "hourly", label: "Hourly" },
  { value: "twice-daily", label: "Twice daily" },
  { value: "urgent-only", label: "Minimalist (Urgent only)" },
];

export function WorkPreferencesSection({ data, onChange }: WorkPreferencesSectionProps) {
  const handleChange = (field: keyof WorkPreferencesData, value: string | number) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section
      id="preferences"
      className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
    >
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">Work Preferences</h3>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Core Working Hours
            </label>
            <div className="flex items-center gap-3">
              <input
                type="time"
                value={data.coreHoursStart}
                onChange={(e) => handleChange("coreHoursStart", e.target.value)}
                className="flex-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
              />
              <span className="text-slate-400">to</span>
              <input
                type="time"
                value={data.coreHoursEnd}
                onChange={(e) => handleChange("coreHoursEnd", e.target.value)}
                className="flex-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Reminder Frequency
            </label>
            <select
              value={data.reminderFrequency}
              onChange={(e) => handleChange("reminderFrequency", e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
            >
              {reminderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Focus Hours Goal
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="8"
                value={data.focusHoursGoal}
                onChange={(e) => handleChange("focusHoursGoal", parseInt(e.target.value))}
                className="flex-1 accent-primary"
              />
              <span className="text-sm font-bold w-12 text-center text-primary">
                {data.focusHoursGoal}h/day
              </span>
            </div>
            <p className="text-[10px] text-slate-500 italic">
              Atlas will help block this time on your calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
