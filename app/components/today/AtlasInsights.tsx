"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { Insight } from "./types";

interface AtlasInsightsProps {
  insights: Insight[];
  onReorganize?: () => void;
  onDismiss?: () => void;
}

const INSIGHT_ICONS: Record<Insight["type"], { icon: string; color: string }> = {
  suggestion: { icon: "lightbulb", color: "text-amber-500" },
  info: { icon: "info", color: "text-blue-500" },
  warning: { icon: "warning", color: "text-red-500" },
};

export function AtlasInsights({ insights, onReorganize, onDismiss }: AtlasInsightsProps) {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
          <MaterialIcon name="smart_toy" />
        </div>
        <div>
          <h3 className="text-base font-bold">Atlas Insights</h3>
          <p className="text-xs text-primary font-medium">Proactive Analysis</p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const iconConfig = INSIGHT_ICONS[insight.type];
          return (
            <div key={insight.id} className="flex gap-4">
              <MaterialIcon name={iconConfig.icon} className={`${iconConfig.color} shrink-0`} />
              <div>
                <p className="text-sm font-medium leading-relaxed">
                  {insight.highlight ? (
                    <>
                      {insight.message.split(insight.highlight)[0]}
                      <span className="text-primary font-bold">{insight.highlight}</span>
                      {insight.message.split(insight.highlight)[1]}
                    </>
                  ) : (
                    insight.message
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={onReorganize}
          className="w-full py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
        >
          <MaterialIcon name="rebase_edit" className="text-sm" />
          Ask Assistant to Reorganize
        </button>
        <button
          onClick={onDismiss}
          className="w-full py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
        >
          Ignore Suggestions
        </button>
      </div>
    </section>
  );
}
