"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "../ui/MaterialIcon";

const navItems = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "today", label: "Today", href: "/today" },
  { icon: "work", label: "Job Board", href: "/job-board" },
  { icon: "check_circle", label: "Completed Tasks", href: "/completed" },
  { icon: "bar_chart", label: "Insights", href: "/analytics" },
  { icon: "settings", label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex flex-col border-r border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark/50 shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <MaterialIcon name="terminal" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">Atlas</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Developer Assistant
            </p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10"
                }`}
              >
                <MaterialIcon name={item.icon} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-slate-200 dark:border-primary/10">
        <div className="bg-slate-100 dark:bg-primary/5 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <MaterialIcon name="smart_toy" className="!text-sm" />
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
              Analysis complete. Your focus time has increased by 12% this week.
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-lg py-1.5 pl-3 pr-8 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="Ask Atlas..."
            />
            <MaterialIcon
              name="send"
              className="absolute right-2 top-1.5 !text-sm text-slate-400"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
