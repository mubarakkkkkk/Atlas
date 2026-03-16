"use client";

import { useState, useMemo } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import {
  KanbanColumn,
  BoardFilters,
  BoardStats,
  Task,
  TaskStatus,
  TaskPriority,
  TaskLabel,
  COLUMNS,
} from "../components/job-board";

const SAMPLE_TASKS: Task[] = [
  {
    id: "1",
    title: "Fix authentication bug",
    description: "Users are getting logged out unexpectedly after 30 minutes of inactivity.",
    status: "in_progress",
    priority: "urgent",
    labels: ["bug"],
    progress: 65,
    dueTime: "2:00 PM",
    assignees: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8c86btdCmonwz6Mrqp4INL61jeh-46eWJumzZJ4S4MyChutfVk9XFlJDeDBA0RUlqs22fv9aZ2q5P9rDpqh2yUD3A_ie5-fqLeftLG6xcKy2B9oxEjIJbZXvEO7wu4WQbGVY8jA1mqTJlhDp_C6DOzSJQ3bbRJWiZdy2ItvNonac-FRhnDrYydiL6jU7CFncBeQmEUCT8-0zHiTHkwf745a-A8f1IUAaDAILLfD7cdgxx44R179mhCG01bXYIvHFtQzLpRyt0hi3r",
    ],
    comments: 5,
    attachments: 2,
    createdAt: "2024-03-15",
    updatedAt: "2024-03-16",
  },
  {
    id: "2",
    title: "Review PR #234",
    description: "Code review for the new dashboard feature implementation.",
    status: "pending",
    priority: "high",
    labels: ["feature"],
    dueTime: "11:00 AM",
    assignees: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsHrppRraGZEEzKFIyUpSiMdGLwh1IlGAq-V6cXto0bgsFkxzAjnaXKvxvdhebSKDYHMCkBTZ-G9PqlQlUAvIBVHmR7htlfeHg5VNmMV7sZAZ-dcJ_J_cC2cYMB6iK6MJjTK_M_zJ8ZqXYRhJvcG0A80KQxGfx8Oz_UD5kcb7Smk3MCm6lYq54ZZ7hXpwKhEBJGiTqNRxG2pTrQsa51UKtfLA2j3Ts4ccAQt7KcNIKCeybAlQPj8p2vpnwoX0rDdIxbZk1ElwgwBQm",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8c86btdCmonwz6Mrqp4INL61jeh-46eWJumzZJ4S4MyChutfVk9XFlJDeDBA0RUlqs22fv9aZ2q5P9rDpqh2yUD3A_ie5-fqLeftLG6xcKy2B9oxEjIJbZXvEO7wu4WQbGVY8jA1mqTJlhDp_C6DOzSJQ3bbRJWiZdy2ItvNonac-FRhnDrYydiL6jU7CFncBeQmEUCT8-0zHiTHkwf745a-A8f1IUAaDAILLfD7cdgxx44R179mhCG01bXYIvHFtQzLpRyt0hi3r",
    ],
    comments: 12,
    createdAt: "2024-03-14",
    updatedAt: "2024-03-16",
  },
  {
    id: "3",
    title: "Deploy to production",
    description: "Final deployment of v2.0 release to production servers.",
    status: "pending",
    priority: "high",
    labels: ["feature"],
    dueTime: "5:00 PM",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-16",
  },
  {
    id: "4",
    title: "Update API documentation",
    description: "Document new endpoints for the payment integration.",
    status: "backlog",
    priority: "medium",
    labels: ["documentation"],
    createdAt: "2024-03-13",
    updatedAt: "2024-03-14",
  },
  {
    id: "5",
    title: "Refactor user service",
    description: "Break down the monolithic user service into smaller microservices.",
    status: "backlog",
    priority: "low",
    labels: ["refactor", "improvement"],
    createdAt: "2024-03-10",
    updatedAt: "2024-03-12",
  },
  {
    id: "6",
    title: "Add dark mode toggle",
    description: "Implement theme switching functionality in the settings page.",
    status: "review",
    priority: "medium",
    labels: ["feature"],
    assignees: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiuOH5OSO-FRD2d_5WjgGI6UpRHZijmgLk6d6Df8iPfVL6nkyUQV1-3wz9AvIlVGE561WGr1DKq0Qn3n1w8fobk1kimJzdeP5ety9kq6bqRFWjMuFOxhxJ-K5Jx0J2VZHYFQxEHIAsyaWkbRwGrWGphFvjW10geoBKg5aFCq0OimCNQYOCmeryeix56I1QO6YorlzYYhfwqfrEf9TUldor9b-Trk6UaXXKszFj47TcxkumFNVWp6Jm71tq-4Vam_vlFMIQ0GUmmzMr",
    ],
    comments: 3,
    createdAt: "2024-03-12",
    updatedAt: "2024-03-16",
  },
  {
    id: "7",
    title: "Morning standup",
    status: "completed",
    priority: "low",
    createdAt: "2024-03-16",
    updatedAt: "2024-03-16",
  },
  {
    id: "8",
    title: "Email triage",
    status: "completed",
    priority: "low",
    createdAt: "2024-03-16",
    updatedAt: "2024-03-16",
  },
  {
    id: "9",
    title: "Sprint planning meeting",
    status: "completed",
    priority: "medium",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-16",
  },
  {
    id: "10",
    title: "Fix pagination bug",
    description: "The pagination component doesn't reset when filters change.",
    status: "in_progress",
    priority: "medium",
    labels: ["bug"],
    progress: 30,
    dueTime: "4:00 PM",
    comments: 2,
    createdAt: "2024-03-15",
    updatedAt: "2024-03-16",
  },
];

export default function JobBoardPage() {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<TaskPriority | "all">("all");
  const [selectedLabel, setSelectedLabel] = useState<TaskLabel | "all">("all");
  const [view, setView] = useState<"board" | "list">("board");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        searchQuery === "" ||
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPriority =
        selectedPriority === "all" || task.priority === selectedPriority;

      const matchesLabel =
        selectedLabel === "all" || task.labels?.includes(selectedLabel);

      return matchesSearch && matchesPriority && matchesLabel;
    });
  }, [tasks, searchQuery, selectedPriority, selectedLabel]);

  const getTasksByStatus = (status: TaskStatus) => {
    return filteredTasks.filter((task) => task.status === status);
  };

  const handleTaskClick = (task: Task) => {
    console.log("Task clicked:", task);
    // TODO: Open task detail modal
  };

  const handleAddTask = (status: TaskStatus) => {
    console.log("Add task to:", status);
    // TODO: Open add task modal
    const newTask: Task = {
      id: `new-${Date.now()}`,
      title: "New Task",
      description: "Click to edit this task",
      status,
      priority: "medium",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        <Header
          searchPlaceholder="Search tasks, projects, or team members..."
          actionLabel="New Task"
          actionIcon="add"
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6 space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Job Board</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Manage and track your tasks across different stages
              </p>
            </div>

            {/* Stats */}
            <BoardStats tasks={tasks} />

            {/* Filters */}
            <BoardFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedPriority={selectedPriority}
              onPriorityChange={setSelectedPriority}
              selectedLabel={selectedLabel}
              onLabelChange={setSelectedLabel}
              view={view}
              onViewChange={setView}
            />

            {/* Kanban Board */}
            <div className="overflow-x-auto pb-4 custom-scrollbar">
              <div className="flex gap-4 min-w-max">
                {COLUMNS.map((column) => (
                  <KanbanColumn
                    key={column.id}
                    column={column}
                    tasks={getTasksByStatus(column.id)}
                    onTaskClick={handleTaskClick}
                    onAddTask={handleAddTask}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
