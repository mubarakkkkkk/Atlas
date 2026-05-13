const distributionData = [
  { label: "Bug Fixes", percentage: 32, color: "bg-primary-dark" },
  { label: "Code Reviews", percentage: 24, color: "bg-accent" },
  { label: "Development", percentage: 44, color: "bg-primary" },
  { label: "Documentation", percentage: 10, color: "bg-primary-light" },
];

export function TaskDistribution() {
  return (
    <div className="bg-background-light dark:bg-primary/5 p-6 rounded-xl border border-primary/20 dark:border-primary/10 shadow-sm">
      <h3 className="text-base font-semibold mb-6">Task Distribution</h3>

      <div className="space-y-5">
        {distributionData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span>{item.label}</span>
              <span className="text-foreground/50">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-primary/10 dark:bg-primary/20 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-primary/20 dark:border-primary/10">
        <p className="text-[11px] text-foreground/60 dark:text-foreground/70 italic">
          &quot;You spent 4 hours more on Development this week compared to
          last.&quot;
        </p>
      </div>
    </div>
  );
}
