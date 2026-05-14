"use client";

import { Bot, Lightbulb, GitBranch } from "lucide-react";
import { Insight } from "./types";

interface AtlasInsightsProps {
  insights: Insight[];
  onReorganize?: () => void;
  onDismiss?: () => void;
}

const INSIGHT_ICONS: Record<Insight["type"], { icon: string; color: string }> =
  {
    suggestion: { icon: "lightbulb", color: "text-primary" },
    info: { icon: "info", color: "text-primary-light" },
    warning: { icon: "warning", color: "text-primary-dark" },
  };

export function AtlasInsights({
  insights,
  onReorganize,
  onDismiss,
}: AtlasInsightsProps) {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-border/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
          <Bot />
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
              <Lightbulb className={`${iconConfig.color} shrink-0`} />
              <div>
                <p className="text-sm font-medium leading-relaxed">
                  {insight.highlight ? (
                    <>
                      {insight.message.split(insight.highlight)[0]}
                      <span className="text-primary font-bold">
                        {insight.highlight}
                      </span>
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
          <GitBranch className="text-sm" />
          Ask Assistant to Reorganize
        </button>
        <button
          onClick={onDismiss}
          className="w-full py-2.5 bg-background-light dark:bg-background-dark text-foreground dark:text-foreground border border-border/20 dark:border-border/10 rounded-xl text-sm font-bold hover:bg-primary/5 dark:hover:bg-primary/5 transition-all\"
        >
          Ignore Suggestions
        </button>
      </div>
    </section>
  );
}
