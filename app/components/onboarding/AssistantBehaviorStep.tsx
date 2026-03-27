"use client";

import { MaterialIcon } from "../ui/MaterialIcon";
import { OnboardingToggle } from "./OnboardingToggle";

interface AssistantBehaviorData {
  autoCreateTasks: boolean;
  askBeforeScheduling: boolean;
  proactiveSuggestions: boolean;
  endOfDayReflection: boolean;
}

interface AssistantBehaviorStepProps {
  data: AssistantBehaviorData;
  onChange: (data: AssistantBehaviorData) => void;
  onContinue: () => void;
}

export function AssistantBehaviorStep({ data, onChange, onContinue }: AssistantBehaviorStepProps) {
  return (
    <div className="w-full max-w-[640px] mx-auto">
      {/* Main Content Card */}
      <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Customize your assistant</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Control how your assistant helps you manage your day
          </p>
        </div>

        <div className="space-y-6">
          <OnboardingToggle
            label="Auto-create tasks from chat"
            description="Automatically extract and track tasks mentioned in conversations"
            checked={data.autoCreateTasks}
            onChange={(checked) => onChange({ ...data, autoCreateTasks: checked })}
          />
          <OnboardingToggle
            label="Ask before scheduling tasks"
            description="Get a confirmation prompt before the assistant modifies your calendar"
            checked={data.askBeforeScheduling}
            onChange={(checked) => onChange({ ...data, askBeforeScheduling: checked })}
          />
          <OnboardingToggle
            label="Enable proactive suggestions"
            description="Receive smart nudges about deadlines and upcoming meetings"
            checked={data.proactiveSuggestions}
            onChange={(checked) => onChange({ ...data, proactiveSuggestions: checked })}
          />
          <OnboardingToggle
            label="End-of-day reflection prompts"
            description="A brief daily check-in to review what you accomplished"
            checked={data.endOfDayReflection}
            onChange={(checked) => onChange({ ...data, endOfDayReflection: checked })}
          />
        </div>

        {/* Preview Card Section */}
        <div className="mt-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">
            Behavior Preview
          </p>
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <div className="flex flex-col items-end gap-1">
              <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-lg rounded-tr-none px-4 py-2 text-sm max-w-[80%] border border-primary/20">
                I need to fix a bug and deploy by 5
              </div>
              <span className="text-[10px] text-slate-500 font-medium">1:24 PM</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                <MaterialIcon name="smart_toy" className="text-[14px] text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg rounded-tl-none px-4 py-2 text-sm text-slate-700 dark:text-slate-300 max-w-[90%] border border-slate-200 dark:border-slate-800">
                  {data.autoCreateTasks
                    ? "I've created 2 tasks and scheduled them for this afternoon."
                    : "Got it! Let me know if you need help organizing your work."}
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Assistant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10">
          <button
            type="button"
            onClick={onContinue}
            className="w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Continue</span>
            <MaterialIcon name="arrow_forward" className="text-lg" />
          </button>
        </div>
      </div>

      <p className="text-center text-slate-500 text-xs mt-6">
        You can change these settings at any time in the Assistant Preferences.
      </p>
    </div>
  );
}
