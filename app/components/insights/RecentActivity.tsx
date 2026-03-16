import { MaterialIcon } from "../ui/MaterialIcon";

const activities = [
  {
    icon: "auto_awesome",
    isAtlas: true,
    title: "Atlas summarized 14 PR comments",
    time: "10 minutes ago",
  },
  {
    icon: "person",
    isAtlas: false,
    title: (
      <>
        You completed <span className="text-primary">#FIX-104 Authentication Layer</span>
      </>
    ),
    time: "1 hour ago",
  },
  {
    icon: "auto_awesome",
    isAtlas: true,
    title: "Atlas blocked social media sites (Focus Mode)",
    time: "3 hours ago",
  },
  {
    icon: "person",
    isAtlas: false,
    title: (
      <>
        You added a new task to <span className="text-primary">Job Board</span>
      </>
    ),
    time: "Yesterday",
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-primary/5 p-6 rounded-xl border border-slate-200 dark:border-primary/10 shadow-sm">
      <h3 className="text-base font-semibold mb-6">Recent Activity</h3>

      <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-primary/10">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4 relative">
            <div
              className={`size-7 rounded-full flex items-center justify-center z-10 ${
                activity.isAtlas
                  ? "bg-primary text-white"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <MaterialIcon name={activity.icon} className="!text-sm" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
