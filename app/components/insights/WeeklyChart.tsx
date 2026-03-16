"use client";

import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { MaterialIcon } from "../ui/MaterialIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const weeklyData = [
  { day: "Mon", completed: 75, goal: 100 },
  { day: "Tue", completed: 88, goal: 100 },
  { day: "Wed", completed: 50, goal: 100 },
  { day: "Thu", completed: 63, goal: 100 },
  { day: "Fri", completed: 100, goal: 100 },
  { day: "Sat", completed: 38, goal: 100 },
  { day: "Sun", completed: 25, goal: 100 },
];

const completionRate = Math.round(
  weeklyData.reduce((acc, d) => acc + d.completed, 0) / weeklyData.length
);

const bestDay = weeklyData.reduce((best, current) =>
  current.completed > best.completed ? current : best
);

const totalTasks = weeklyData.reduce((acc, d) => acc + Math.round(d.completed / 10), 0);

export function WeeklyChart() {
  const chartRef = useRef<ChartJS<"bar">>(null);
  const [activeFilter, setActiveFilter] = useState<"week" | "month" | "year">("week");

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    gradient.addColorStop(0, "rgba(13, 89, 242, 1)");
    gradient.addColorStop(1, "rgba(13, 89, 242, 0.6)");

    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }, []);

  const data: ChartData<"bar"> = {
    labels: weeklyData.map((d) => d.day),
    datasets: [
      {
        label: "Completed",
        data: weeklyData.map((d) => d.completed),
        backgroundColor: "#0d59f2",
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
        hoverBackgroundColor: "#3b82f6",
      },
      {
        label: "Goal",
        data: weeklyData.map((d) => d.goal),
        backgroundColor: "rgba(13, 89, 242, 0.08)",
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
        hoverBackgroundColor: "rgba(13, 89, 242, 0.15)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        titleColor: "#f8fafc",
        bodyColor: "#cbd5e1",
        titleFont: {
          size: 13,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        padding: 14,
        cornerRadius: 12,
        displayColors: true,
        boxWidth: 8,
        boxHeight: 8,
        boxPadding: 4,
        usePointStyle: true,
        callbacks: {
          title: (items) => {
            const dayIndex = items[0].dataIndex;
            const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            return days[dayIndex];
          },
          label: (context) => {
            const value = context.parsed.y;
            const label = context.dataset.label;
            if (label === "Completed") {
              return ` ${value}% completed`;
            }
            return ` ${value}% target`;
          },
          afterBody: (items) => {
            const completed = items[0].parsed.y;
            const goal = items[1]?.parsed.y || 100;
            const diff = completed - goal;
            if (diff >= 0) {
              return [`\n ✓ Goal achieved!`];
            }
            return [`\n ↓ ${Math.abs(diff)}% below target`];
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748b",
          font: {
            size: 11,
            weight: "medium",
          },
          padding: 8,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.08)",
          lineWidth: 1,
        },
        ticks: {
          color: "#64748b",
          font: {
            size: 10,
          },
          padding: 12,
          stepSize: 25,
          callback: (value) => `${value}%`,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="lg:col-span-2 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Weekly Performance
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Task completion trends
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {(["week", "month", "year"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeFilter === filter
                    ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <MaterialIcon name="percent" className="text-primary text-sm" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  Avg Rate
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {completionRate}%
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <MaterialIcon name="emoji_events" className="text-emerald-500 text-sm" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  Best Day
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {bestDay.day}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <MaterialIcon name="task_alt" className="text-amber-500 text-sm" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  Total Tasks
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {totalTasks}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-6 pb-6">
        <div className="h-56 mt-2">
          <Bar ref={chartRef} data={data} options={options} />
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              Completed Tasks
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/30" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              Daily Goal
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-500">
            <MaterialIcon name="trending_up" className="text-sm" />
            <span className="text-xs font-semibold">+12% vs last week</span>
          </div>
        </div>
      </div>
    </div>
  );
}
