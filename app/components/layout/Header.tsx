import { User, Search, Bell, Zap } from "lucide-react";

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
    <header className="h-16 border-b border-border bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50"
            size={20}
          />
          <input
            type="text"
            className="w-full bg-primary/5 dark:bg-primary/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Zap className="text-sm" />
          {actionLabel}
        </button>
        <button className="p-2 text-foreground/60 dark:text-foreground/60 hover:bg-primary/10 dark:hover:bg-primary/10 rounded-lg relative">
          <Bell />
          <span className="absolute top-2 right-2.5 size-2 bg-primary-dark border-2 border-background-light dark:border-background-dark rounded-full" />
        </button>
        <button className="p-2 text-foreground/60 dark:text-foreground/60 hover:bg-primary/10 dark:hover:bg-primary/10 rounded-lg relative">
          <User />
        </button>
      </div>
    </header>
  );
}
