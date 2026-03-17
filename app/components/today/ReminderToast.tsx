"use client";

import { useState } from "react";
import { MaterialIcon } from "../ui/MaterialIcon";

interface ReminderToastProps {
  title: string;
  message: string;
  onDismiss?: () => void;
}

export function ReminderToast({ title, message, onDismiss }: ReminderToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse">
      <div className="bg-slate-900 text-white p-4 rounded-xl shadow-2xl flex items-center gap-4 border border-slate-800 min-w-[320px]">
        <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
          <MaterialIcon name="notification_important" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
            {title}
          </p>
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-slate-500 hover:text-white transition-colors"
        >
          <MaterialIcon name="close" />
        </button>
      </div>
    </div>
  );
}
