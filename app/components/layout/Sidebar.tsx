"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "../ui/MaterialIcon";
import Image from "next/image";

const navItems = [
  { icon: "dashboard", label: "Dashboard", href: "/pages/dashboard" },
  { icon: "today", label: "Today", href: "/pages/today" },
  { icon: "work", label: "Job Board", href: "/pages/job-board" },
  { icon: "check_circle", label: "Completed Tasks", href: "/pages/completed" },
  { icon: "bar_chart", label: "Analytics", href: "/pages/analytics" },
  { icon: "settings", label: "Settings", href: "/pages/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex flex-col border-r border-primary bg-background-light dark:bg-background-dark/50 shrink-0">
      <div className="p-2">
        <Image
          src="/images/noBg.png"
          alt="Atlas Logo"
          width={150}
          height={50}
        />
      </div>
      <div className="p-6">
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
                    : "text-foreground/70 dark:text-foreground/70 hover:bg-primary/10 dark:hover:bg-primary/10"
                }`}
              >
                <MaterialIcon name={item.icon} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-primary/20 dark:border-primary/10">
        <div className="bg-primary/5 dark:bg-primary/5 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <MaterialIcon name="smart_toy" className="text-sm" />
            </div>
            <p className="text-[11px] leading-relaxed text-foreground/70 dark:text-foreground/70">
              Analysis complete. Your focus time has increased by 12% this week.
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-background-light dark:bg-background-dark border border-primary/20 dark:border-primary/20 rounded-lg py-1.5 pl-3 pr-8 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="Ask Atlas..."
            />
            <MaterialIcon
              name="send"
              className="absolute right-2 top-1.5 text-sm text-foreground/50 dark:text-foreground/50"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
