"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { TaskPriority, TaskLabel, PRIORITY_CONFIG, LABEL_CONFIG } from "./types";

interface BoardFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedPriority: TaskPriority | "all";
  onPriorityChange: (priority: TaskPriority | "all") => void;
  selectedLabel: TaskLabel | "all";
  onLabelChange: (label: TaskLabel | "all") => void;
  view: "board" | "list";
  onViewChange: (view: "board" | "list") => void;
}

export function BoardFilters({
  searchQuery,
  onSearchChange,
  selectedPriority,
  onPriorityChange,
  selectedLabel,
  onLabelChange,
  view,
  onViewChange,
}: BoardFiltersProps) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <MaterialIcon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Priority Filter */}
        <select
          value={selectedPriority}
          onChange={(e) => onPriorityChange(e.target.value as TaskPriority | "all")}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
        >
          <option value="all">All Priorities</option>
          {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>

        {/* Label Filter */}
        <select
          value={selectedLabel}
          onChange={(e) => onLabelChange(e.target.value as TaskLabel | "all")}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
        >
          <option value="all">All Labels</option>
          {Object.entries(LABEL_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>

        {/* View Toggle */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <button
            onClick={() => onViewChange("board")}
            className={`p-2 rounded-md transition-all ${
              view === "board"
                ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <MaterialIcon name="view_kanban" className="text-lg" />
          </button>
          <button
            onClick={() => onViewChange("list")}
            className={`p-2 rounded-md transition-all ${
              view === "list"
                ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <MaterialIcon name="view_list" className="text-lg" />
          </button>
        </div>

        {/* Add Task Button */}
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
          <MaterialIcon name="add" className="text-lg" />
          New Task
        </button>
      </div>
    </div>
  );
}
