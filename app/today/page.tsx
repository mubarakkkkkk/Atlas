"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import {
  TodayStats,
  DailyTimeline,
  TaskList,
  AtlasInsights,
  ActiveContext,
  ReminderToast,
  TodayTask,
  TimelineEvent,
  TodayStats as StatsType,
  Insight,
  ContextInfo,
} from "../components/today";

const SAMPLE_STATS: StatsType = {
  tasksCompleted: 12,
  totalTasks: 17,
  tasksRemaining: 5,
  estimatedTimeRemaining: "4.5 hrs",
  nextTask: "Review PRs",
  nextTaskStartsIn: "10m",
  focusTime: "6h 20m",
  focusGoal: "8h",
};

const SAMPLE_TIMELINE: TimelineEvent[] = [
  {
    id: "1",
    title: "Fix Login (High Priority)",
    startTime: "09:00",
    endTime: "10:00",
    priority: "high",
    category: "bug",
    isCompleted: true,
    isCurrent: false,
  },
  {
    id: "2",
    title: "Review PRs (Medium Priority)",
    startTime: "11:00",
    endTime: "12:00",
    priority: "medium",
    category: "review",
    isCompleted: false,
    isCurrent: true,
  },
  {
    id: "3",
    title: "Weekly Sync",
    startTime: "14:00",
    endTime: "15:00",
    priority: "low",
    category: "meeting",
    isCompleted: false,
    isCurrent: false,
  },
];

const SAMPLE_IN_PROGRESS: TodayTask[] = [
  {
    id: "1",
    title: "Refactor Auth Middleware",
    project: "Core API",
    status: "in_progress",
    elapsedTime: 2720,
  },
];

const SAMPLE_UPCOMING: TodayTask[] = [
  {
    id: "2",
    title: "Review PRs",
    status: "upcoming",
    startTime: "11:00 AM",
  },
  {
    id: "3",
    title: "Update Documentation",
    project: "Frontend UI",
    status: "upcoming",
  },
];

const SAMPLE_COMPLETED: TodayTask[] = [
  {
    id: "4",
    title: "Fix Login Bug",
    status: "completed",
    completedAt: "09:54 AM",
  },
];

const SAMPLE_INSIGHTS: Insight[] = [
  {
    id: "1",
    type: "suggestion",
    message: "I noticed a 2-hour focus window available between 14:00 and 16:00. Would you like to schedule deep work for 'Auth Middleware'?",
    highlight: "2-hour focus window",
  },
  {
    id: "2",
    type: "info",
    message: "3 PRs in 'Core API' are pending your review. Estimated time: 45 minutes.",
  },
];

const SAMPLE_CONTEXT: ContextInfo = {
  branch: "feature/auth-refactor",
  lastDeploy: "2h ago",
  lastDeployStatus: "success",
};

export default function TodayPage() {
  const [stats, setStats] = useState(SAMPLE_STATS);
  const [inProgressTasks, setInProgressTasks] = useState(SAMPLE_IN_PROGRESS);
  const [showReminder, setShowReminder] = useState(true);

  // Simulate timer for in-progress tasks
  useEffect(() => {
    const interval = setInterval(() => {
      setInProgressTasks((tasks) =>
        tasks.map((task) =>
          task.elapsedTime !== undefined
            ? { ...task, elapsedTime: task.elapsedTime + 1 }
            : task
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTaskClick = (task: TodayTask) => {
    console.log("Task clicked:", task);
  };

  const handleReorganize = () => {
    console.log("Reorganize requested");
  };

  const handleDismissInsights = () => {
    console.log("Insights dismissed");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          searchPlaceholder="Search tasks or code..."
          actionLabel="Plan My Day"
          actionIcon="bolt"
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          {/* Stats */}
          <div className="mb-8">
            <TodayStats stats={stats} />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Timeline and Tasks */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <DailyTimeline events={SAMPLE_TIMELINE} />

              <TaskList
                inProgressTasks={inProgressTasks}
                upcomingTasks={SAMPLE_UPCOMING}
                completedTasks={SAMPLE_COMPLETED}
                onTaskClick={handleTaskClick}
              />
            </div>

            {/* Right Column: Assistant Panel */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <AtlasInsights
                insights={SAMPLE_INSIGHTS}
                onReorganize={handleReorganize}
                onDismiss={handleDismissInsights}
              />

              <ActiveContext context={SAMPLE_CONTEXT} />
            </div>
          </div>
        </div>

        {/* Floating Reminder Toast */}
        {showReminder && (
          <ReminderToast
            title="Reminder"
            message="Review PRs starts in 10 minutes."
            onDismiss={() => setShowReminder(false)}
          />
        )}
      </main>
    </div>
  );
}
