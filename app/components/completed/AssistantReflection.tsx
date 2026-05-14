"use client";

import { TrendingUp, Lightbulb, Sparkles, BrainCircuit } from "lucide-react";

interface Insight {
  id: string;
  type: "trend" | "insight" | "tip";
  title: string;
  description: string;
}

interface AssistantReflectionProps {
  insights: Insight[];
  onViewDetails?: () => void;
}

const INSIGHT_ICONS: Record<Insight["type"], { icon: React.ReactNode; color: string }> = {
  trend: { icon: <TrendingUp size={18} />, color: "text-emerald-500" },
  insight: { icon: <Lightbulb size={18} />, color: "text-primary" },
  tip: { icon: <Sparkles size={18} />, color: "text-amber-500" },
};

export function AssistantReflection({ insights, onViewDetails }: AssistantReflectionProps) {
  return (
    <div className="bg-primary/5 p-6 rounded-xl border border-primary">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary rounded-lg text-white">
          <BrainCircuit size={20} />
        </div>
        <h3 className="font-bold text-sm">Assistant Reflection</h3>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => {
          const iconConfig = INSIGHT_ICONS[insight.type];
          return (
            <div key={insight.id} className="flex items-start gap-3">
              <span className={`${iconConfig.color} mt-0.5 shrink-0`}>{iconConfig.icon}</span>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="font-bold">{insight.title}:</span> {insight.description}
              </p>
            </div>
          );
        })}
      </div>

      <button
        onClick={onViewDetails}
        className="w-full mt-6 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold py-2 rounded-lg transition-all border border-primary/30"
      >
        View Detailed Analysis
      </button>
    </div>
  );
}