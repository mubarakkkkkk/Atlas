"use client";

import { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import { MaterialIcon } from "../components/ui/MaterialIcon";
import {
  CompletedStats,
  TaskHistory,
  CompletionTimeline,
  AssistantReflection,
  CompletedTask,
  TimeBlock,
  CompletedStats as StatsType,
} from "../components/completed";

const SAMPLE_STATS: StatsType = {
  completedToday: 12,
  completedTodayChange: 20,
  completedThisWeek: 45,
  weeklyAverage: 42,
  avgCompletionTime: 45,
  avgCompletionTimeChange: -12,
  totalFocusHours: 32,
  focusRank: "Top 5%",
};

const SAMPLE_TASKS: CompletedTask[] = [
  {
    id: "1",
    title: "Refactor Authentication Middleware",
    completedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    duration: 75,
    estimatedDuration: 90,
    isAIAssisted: true,
  },
  {
    id: "2",
    title: "Implement Webhook Listener for Stripe",
    completedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    duration: 45,
    estimatedDuration: 45,
    isAIAssisted: true,
  },
  {
    id: "3",
    title: "Code Review: Pull Request #442",
    completedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    duration: 35,
    estimatedDuration: 30,
    isAIAssisted: false,
  },
  {
    id: "4",
    title: "Update API Documentation",
    completedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    duration: 25,
    estimatedDuration: 30,
    isAIAssisted: true,
  },
  {
    id: "5",
    title: "Fix pagination bug in user list",
    completedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    duration: 40,
    estimatedDuration: 45,
    isAIAssisted: false,
  },
  {
    id: "6",
    title: "Setup CI/CD pipeline",
    completedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    duration: 120,
    estimatedDuration: 90,
    isAIAssisted: true,
  },
];

const SAMPLE_TIMELINE: TimeBlock[] = [
  {
    id: "1",
    period: "morning",
    tasksCompleted: 4,
    description: "Deep focus block. Velocity: High",
    isHighVelocity: true,
  },
  {
    id: "2",
    period: "midday",
    tasksCompleted: 2,
    description: "Meetings & Administrative tasks.",
    isHighVelocity: false,
  },
  {
    id: "3",
    period: "afternoon",
    tasksCompleted: 6,
    description: "Bug fixing & final polish.",
    isHighVelocity: true,
  },
];

const SAMPLE_INSIGHTS = [
  {
    id: "1",
    type: "trend" as const,
    title: "Peak Velocity",
    description: "You finished tasks 15% faster than usual during the Morning block today.",
  },
  {
    id: "2",
    type: "insight" as const,
    title: "Insight",
    description: 'Batching your "Refactor" tasks resulted in the highest efficiency gain this week.',
  },
];

export default function CompletedTasksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = SAMPLE_TASKS.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-background-light dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight">Completed Tasks</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <MaterialIcon
                name="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64 focus:outline-none"
                placeholder="Search tasks..."
              />
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500">
                <MaterialIcon name="filter_list" />
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500">
                <MaterialIcon name="download" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-8 max-w-6xl mx-auto w-full flex flex-col gap-8">
            {/* Stats */}
            <CompletedStats stats={SAMPLE_STATS} />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Task History - 2 columns */}
              <div className="lg:col-span-2">
                <TaskHistory tasks={filteredTasks} />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <CompletionTimeline blocks={SAMPLE_TIMELINE} progress={66} />
                <AssistantReflection
                  insights={SAMPLE_INSIGHTS}
                  onViewDetails={() => console.log("View details clicked")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-8 right-8">
          <button className="w-14 h-14 bg-primary text-white rounded-full shadow-xl shadow-primary/20 flex items-center justify-center hover:scale-105 transition-transform">
            <MaterialIcon name="chat_bubble" />
          </button>
        </div>
      </main>
    </div>
  );
}
