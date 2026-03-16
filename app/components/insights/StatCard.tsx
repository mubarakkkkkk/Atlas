import { MaterialIcon } from "../ui/MaterialIcon";

interface StatCardProps {
  label: string;
  value: string;
  trend: number;
  trendDirection: "up" | "down";
}

export function StatCard({ label, value, trend, trendDirection }: StatCardProps) {
  const isPositive = trendDirection === "up";
  const trendColor = isPositive ? "text-emerald-500" : "text-rose-500";
  const trendIcon = isPositive ? "trending_up" : "trending_down";

  return (
    <div className="bg-white dark:bg-primary/5 p-6 rounded-xl border border-slate-200 dark:border-primary/10 shadow-sm">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <div className="flex items-end justify-between mt-2">
        <h3 className="text-3xl font-bold">{value}</h3>
        <span className={`${trendColor} text-sm font-medium flex items-center gap-0.5`}>
          <MaterialIcon name={trendIcon} className="!text-sm" /> {trend}%
        </span>
      </div>
    </div>
  );
}
