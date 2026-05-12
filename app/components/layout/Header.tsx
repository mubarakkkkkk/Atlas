import Image from "next/image";
import { MaterialIcon } from "../ui/MaterialIcon";
import { User } from "lucide-react";

interface HeaderProps {
  searchPlaceholder?: string;
  actionLabel?: string;
  actionIcon?: string;
}

export function Header({
  searchPlaceholder = "Search tasks, insights, or code...",
  actionLabel = "Plan My Day",
  actionIcon = "calendar_today",
}: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-primary/10 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <MaterialIcon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            className="w-full bg-slate-100 dark:bg-primary/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
          <MaterialIcon name={actionIcon} className="text-sm" />
          {actionLabel}
        </button>
        <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 rounded-lg relative">
          <MaterialIcon name="notifications" />
          <span className="absolute top-2 right-2.5 size-2 bg-red-500 border-2 border-white dark:border-background-dark rounded-full" />
        </button>
        <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 rounded-lg relative">
          <User />
        </button>
      </div>
    </header>
  );
}
