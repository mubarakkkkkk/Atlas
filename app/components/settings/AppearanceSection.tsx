"use client";

import { MaterialIcon } from "../ui/MaterialIcon";

export interface AppearanceData {
  theme: "dark" | "light";
  uiDensity: "comfortable" | "compact";
}

interface AppearanceSectionProps {
  data: AppearanceData;
  onChange: (data: AppearanceData) => void;
}

export function AppearanceSection({ data, onChange }: AppearanceSectionProps) {
  return (
    <section
      id="appearance"
      className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
    >
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">Appearance</h3>
      </div>
      <div className="p-6 space-y-8">
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Theme Mode
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onChange({ ...data, theme: "dark" })}
              className={`flex flex-col gap-3 p-4 rounded-xl border-2 transition-all ${
                data.theme === "dark"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-500 dark:text-slate-400"
              }`}
            >
              <div className="w-full h-20 rounded bg-slate-900 overflow-hidden border border-slate-800 p-2 flex gap-1">
                <div className="w-4 h-full bg-slate-800 rounded-sm" />
                <div className="flex-1 space-y-1">
                  <div className="w-full h-2 bg-slate-800 rounded-sm" />
                  <div className="w-3/4 h-2 bg-slate-800 rounded-sm" />
                </div>
              </div>
              <span className="text-sm font-bold flex items-center gap-2">
                <MaterialIcon name="dark_mode" className="text-[18px]" /> Dark Mode
              </span>
            </button>
            <button
              onClick={() => onChange({ ...data, theme: "light" })}
              className={`flex flex-col gap-3 p-4 rounded-xl border-2 transition-all ${
                data.theme === "light"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-500 dark:text-slate-400"
              }`}
            >
              <div className="w-full h-20 rounded bg-white overflow-hidden border border-slate-200 p-2 flex gap-1">
                <div className="w-4 h-full bg-slate-100 rounded-sm" />
                <div className="flex-1 space-y-1">
                  <div className="w-full h-2 bg-slate-100 rounded-sm" />
                  <div className="w-3/4 h-2 bg-slate-100 rounded-sm" />
                </div>
              </div>
              <span className="text-sm font-bold flex items-center gap-2">
                <MaterialIcon name="light_mode" className="text-[18px]" /> Light Mode
              </span>
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            UI Density
          </label>
          <div className="flex gap-4 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
            <button
              onClick={() => onChange({ ...data, uiDensity: "comfortable" })}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                data.uiDensity === "comfortable"
                  ? "bg-white dark:bg-slate-700 text-primary dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              Comfortable
            </button>
            <button
              onClick={() => onChange({ ...data, uiDensity: "compact" })}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                data.uiDensity === "compact"
                  ? "bg-white dark:bg-slate-700 text-primary dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              Compact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
