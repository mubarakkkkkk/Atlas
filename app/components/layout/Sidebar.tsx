"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  CalendarDays,
  Briefcase,
  CheckCircle,
  BarChart3,
  Settings,
  Bot,
  Send,
  LucideIcon,
} from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/pages/dashboard" },
  { icon: CalendarDays, label: "Today", href: "/pages/today" },
  { icon: Briefcase, label: "Job Board", href: "/pages/job-board" },
  { icon: CheckCircle, label: "Completed Tasks", href: "/pages/completed" },
  { icon: BarChart3, label: "Analytics", href: "/pages/analytics" },
  { icon: Settings, label: "Settings", href: "/pages/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex flex-col border-r border-border bg-background-light dark:bg-background-dark/50 shrink-0">
      {/* Logo */}
      <div className="p-2">
        <Image
          src="/images/noBg.png"
          alt="Atlas Logo"
          width={150}
          height={50}
        />
      </div>

      {/* Navigation */}
      <div className="p-6 flex flex-col gap-5 h-full">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground/70 hover:bg-primary/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Widget */}
      <div className="mt-auto p-4 border-t border-border/20">
        <div className="bg-primary/5 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <Bot className="w-4 h-4" />
            </div>

            <p className="text-[11px] leading-relaxed text-foreground/70">
              Analysis complete. Your focus time has increased by 12% this week.
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-full bg-background-light dark:bg-background-dark border border-border/20 rounded-lg py-1.5 pl-3 pr-8 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="Ask Atlas..."
            />

            <Send className="absolute right-2 top-1.5 w-4 h-4 text-foreground/50" />
          </div>
        </div>
      </div>
    </aside>
  );
}