const distributionData = [
  { label: "Bug Fixes", percentage: 32, color: "bg-rose-500" },
  { label: "Code Reviews", percentage: 24, color: "bg-amber-500" },
  { label: "Development", percentage: 44, color: "bg-primary" },
  { label: "Documentation", percentage: 10, color: "bg-emerald-500" },
];

export function TaskDistribution() {
  return (
    <div className="bg-white dark:bg-primary/5 p-6 rounded-xl border border-slate-200 dark:border-primary/10 shadow-sm">
      <h3 className="text-base font-semibold mb-6">Task Distribution</h3>

      <div className="space-y-5">
        {distributionData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span>{item.label}</span>
              <span className="text-slate-400">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-primary/10">
        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
          &quot;You spent 4 hours more on Development this week compared to last.&quot;
        </p>
      </div>
    </div>
  );
}
