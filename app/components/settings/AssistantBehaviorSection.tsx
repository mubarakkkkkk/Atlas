"use client";

import { ToggleSwitch } from "./ToggleSwitch";

export interface TaskExtractionSettings {
  autoExtractFromChat: boolean;
  askConfirmation: boolean;
  autoGroupTasks: boolean;
}

export interface ProactivitySettings {
  morningPlanning: boolean;
  middayCheckIn: boolean;
  endOfDayReflection: boolean;
  suggestRescheduling: boolean;
}

export interface SmartSuggestionsSettings {
  suggestTimeBlocks: boolean;
  suggestBreakingTasks: boolean;
  recommendFocusSessions: boolean;
}

export type PersonalityType = "professional" | "friendly" | "minimal";

export interface AssistantBehaviorData {
  taskExtraction: TaskExtractionSettings;
  proactivity: ProactivitySettings;
  smartSuggestions: SmartSuggestionsSettings;
  personality: PersonalityType;
}

interface AssistantBehaviorSectionProps {
  data: AssistantBehaviorData;
  onChange: (data: AssistantBehaviorData) => void;
}

interface ToggleItemProps {
  title: string;
  description?: string;
  checked: boolean;
  onChange: () => void;
}

function ToggleItem({ title, description, checked, onChange }: ToggleItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p>
        {description && <p className="text-xs text-slate-500">{description}</p>}
      </div>
      <ToggleSwitch checked={checked} onChange={onChange} />
    </div>
  );
}

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">{title}</h3>
      </div>
      <div className="p-6 space-y-4">{children}</div>
    </section>
  );
}

export function AssistantBehaviorSection({ data, onChange }: AssistantBehaviorSectionProps) {
  const updateTaskExtraction = (key: keyof TaskExtractionSettings) => {
    onChange({
      ...data,
      taskExtraction: {
        ...data.taskExtraction,
        [key]: !data.taskExtraction[key],
      },
    });
  };

  const updateProactivity = (key: keyof ProactivitySettings) => {
    onChange({
      ...data,
      proactivity: {
        ...data.proactivity,
        [key]: !data.proactivity[key],
      },
    });
  };

  const updateSmartSuggestions = (key: keyof SmartSuggestionsSettings) => {
    onChange({
      ...data,
      smartSuggestions: {
        ...data.smartSuggestions,
        [key]: !data.smartSuggestions[key],
      },
    });
  };

  const updatePersonality = (personality: PersonalityType) => {
    onChange({
      ...data,
      personality,
    });
  };

  return (
    <div id="assistant" className="space-y-8">
      {/* Task Extraction */}
      <SectionCard title="Task Extraction">
        <ToggleItem
          title="Automatically extract tasks from chat messages"
          description="Scan your connected team chats for actionable items."
          checked={data.taskExtraction.autoExtractFromChat}
          onChange={() => updateTaskExtraction("autoExtractFromChat")}
        />
        <ToggleItem
          title="Ask confirmation before creating tasks"
          description="Review extracted tasks before they are added to your board."
          checked={data.taskExtraction.askConfirmation}
          onChange={() => updateTaskExtraction("askConfirmation")}
        />
        <ToggleItem
          title="Automatically group related tasks"
          description="Organize tasks into projects based on context."
          checked={data.taskExtraction.autoGroupTasks}
          onChange={() => updateTaskExtraction("autoGroupTasks")}
        />
      </SectionCard>

      {/* Assistant Proactivity */}
      <SectionCard title="Assistant Proactivity">
        <ToggleItem
          title="Morning planning prompt"
          checked={data.proactivity.morningPlanning}
          onChange={() => updateProactivity("morningPlanning")}
        />
        <ToggleItem
          title="Midday productivity check-in"
          checked={data.proactivity.middayCheckIn}
          onChange={() => updateProactivity("middayCheckIn")}
        />
        <ToggleItem
          title="End-of-day reflection prompt"
          checked={data.proactivity.endOfDayReflection}
          onChange={() => updateProactivity("endOfDayReflection")}
        />
        <ToggleItem
          title="Suggest rescheduling for overdue tasks"
          checked={data.proactivity.suggestRescheduling}
          onChange={() => updateProactivity("suggestRescheduling")}
        />
      </SectionCard>

      {/* Smart Suggestions */}
      <SectionCard title="Smart Suggestions">
        <ToggleItem
          title="Suggest time blocks for tasks"
          checked={data.smartSuggestions.suggestTimeBlocks}
          onChange={() => updateSmartSuggestions("suggestTimeBlocks")}
        />
        <ToggleItem
          title="Suggest breaking large tasks into smaller steps"
          checked={data.smartSuggestions.suggestBreakingTasks}
          onChange={() => updateSmartSuggestions("suggestBreakingTasks")}
        />
        <ToggleItem
          title="Recommend focus sessions"
          checked={data.smartSuggestions.recommendFocusSessions}
          onChange={() => updateSmartSuggestions("recommendFocusSessions")}
        />
      </SectionCard>

      {/* Personality */}
      <section className="space-y-4">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Personality
        </label>
        <div className="flex gap-4 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
          {(["professional", "friendly", "minimal"] as const).map((type) => (
            <button
              key={type}
              onClick={() => updatePersonality(type)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                data.personality === type
                  ? "bg-white dark:bg-slate-700 text-primary dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700/50"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
