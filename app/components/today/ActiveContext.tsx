"use client";

import { Network } from "lucide-react";
import { ContextInfo } from "./types";

interface ActiveContextProps {
  context: ContextInfo;
}

export function ActiveContext({ context }: ActiveContextProps) {
  const statusColor =
    context.lastDeployStatus === "success"
      ? "text-emerald-500"
      : context.lastDeployStatus === "failed"
        ? "text-red-500"
        : "text-amber-500";

  return (
    <section className="bg-background-light dark:bg-background-dark/40 rounded-2xl p-6 border border-border/20 dark:border-border/10\">
      <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
        <Network className="text-purple-500 text-lg" />
        Active Context
      </h4>
      <div className="space-y-3">
        <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">
            Branch
          </div>
          <div className="text-xs font-mono">{context.branch}</div>
        </div>
        <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">
            Last Deploy
          </div>
          <div className="text-xs flex items-center gap-2">
            <span className={`capitalize ${statusColor}`}>
              {context.lastDeployStatus}
            </span>
            <span className="text-slate-400">- {context.lastDeploy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
