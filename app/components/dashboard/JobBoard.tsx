import Image from "next/image";
import { MaterialIcon } from "../ui/MaterialIcon";

interface Task {
  id: string;
  title: string;
  time?: string;
  description?: string;
  progress?: number;
  priority?: "high" | "medium" | "low";
  contributors?: string[];
}

const pendingTasks: Task[] = [
  {
    id: "1",
    title: "Review PRs",
    time: "11:00-12:00",
    contributors: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8c86btdCmonwz6Mrqp4INL61jeh-46eWJumzZJ4S4MyChutfVk9XFlJDeDBA0RUlqs22fv9aZ2q5P9rDpqh2yUD3A_ie5-fqLeftLG6xcKy2B9oxEjIJbZXvEO7wu4WQbGVY8jA1mqTJlhDp_C6DOzSJQ3bbRJWiZdy2ItvNonac-FRhnDrYydiL6jU7CFncBeQmEUCT8-0zHiTHkwf745a-A8f1IUAaDAILLfD7cdgxx44R179mhCG01bXYIvHFtQzLpRyt0hi3r",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsHrppRraGZEEzKFIyUpSiMdGLwh1IlGAq-V6cXto0bgsFkxzAjnaXKvxvdhebSKDYHMCkBTZ-G9PqlQlUAvIBVHmR7htlfeHg5VNmMV7sZAZ-dcJ_J_cC2cYMB6iK6MJjTK_M_zJ8ZqXYRhJvcG0A80KQxGfx8Oz_UD5kcb7Smk3MCm6lYq54ZZ7hXpwKhEBJGiTqNRxG2pTrQsa51UKtfLA2j3Ts4ccAQt7KcNIKCeybAlQPj8p2vpnwoX0rDdIxbZk1ElwgwBQm",
    ],
  },
  {
    id: "2",
    title: "Deploy app",
    time: "16:00-17:00",
    priority: "high",
  },
];

const inProgressTask: Task = {
  id: "3",
  title: "Fix login bug",
  time: "9:00-10:00",
  description: "Investigate token expiry issue in Auth0 callback.",
  progress: 65,
};

const completedTasks = ["Morning standup", "Email triage"];

function PendingTaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
          {task.title}
        </h3>
        <span className="text-[10px] text-slate-400">{task.time}</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {task.contributors && (
          <>
            <div className="flex -space-x-2">
              {task.contributors.map((avatar, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border border-background-dark bg-slate-500 overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt="Team member avatar"
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] text-slate-500">
              {task.contributors.length} Contributors
            </span>
          </>
        )}
        {task.priority === "high" && (
          <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-500 uppercase tracking-tighter">
            High Priority
          </span>
        )}
      </div>
    </div>
  );
}

function InProgressTaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 ring-1 ring-primary/20 shadow-lg shadow-primary/5 cursor-pointer relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
          {task.title}
        </h3>
        <span className="text-[10px] font-bold text-primary">{task.time}</span>
      </div>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
        {task.description}
      </p>
      <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
        <div className="bg-primary h-full" style={{ width: `${task.progress}%` }} />
      </div>
    </div>
  );
}

function CompletedTaskCard({ title }: { title: string }) {
  return (
    <div className="bg-white dark:bg-slate-800/20 p-3 rounded-xl border border-slate-200 dark:border-slate-800 line-through">
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-sm font-medium text-slate-400">{title}</h3>
        <MaterialIcon name="check_circle" className="text-emerald-500 text-sm" />
      </div>
    </div>
  );
}

export function JobBoard() {
  return (
    <section className="w-80 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto custom-scrollbar">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h2 className="font-bold flex items-center gap-2">
          <MaterialIcon name="view_kanban" className="text-primary" />
          Job Board
        </h2>
        <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
          <MaterialIcon name="more_vert" className="text-slate-400" />
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Pending Column */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Pending
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
              {pendingTasks.length}
            </span>
          </div>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <PendingTaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              In Progress
            </span>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              1
            </span>
          </div>
          <InProgressTaskCard task={inProgressTask} />
        </div>

        {/* Completed Column */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              Completed
            </span>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              {completedTasks.length}
            </span>
          </div>
          <div className="space-y-3 opacity-60">
            {completedTasks.map((title) => (
              <CompletedTaskCard key={title} title={title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
