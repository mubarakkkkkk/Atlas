import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import { StatCard } from "../components/insights/StatCard";
import { WeeklyChart } from "../components/insights/WeeklyChart";
import { TaskDistribution } from "../components/insights/TaskDistribution";
import { RecentActivity } from "../components/insights/RecentActivity";
import { AssistantSuggestions } from "../components/insights/AssistantSuggestions";

const statsData = [
  { label: "Tasks Completed Today", value: "12", trend: 15, trendDirection: "up" as const },
  { label: "Tasks Pending", value: "5", trend: 2, trendDirection: "down" as const },
  { label: "Focus Time Logged", value: "6h 20m", trend: 10, trendDirection: "up" as const },
  { label: "Upcoming Tasks", value: "8", trend: 5, trendDirection: "up" as const },
];

export default function InsightsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Header
          searchPlaceholder="Search tasks, insights, or code..."
          actionLabel="Plan My Day"
          actionIcon="calendar_today"
        />

        <div className="p-8 space-y-8">
          {/* Overview Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                trend={stat.trend}
                trendDirection={stat.trendDirection}
              />
            ))}
          </div>

          {/* Middle Section: Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <WeeklyChart />
            <TaskDistribution />
          </div>

          {/* Bottom Section: Activities and Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            <AssistantSuggestions />
          </div>
        </div>
      </main>
    </div>
  );
}