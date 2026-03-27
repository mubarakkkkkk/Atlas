"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  OnboardingHeader,
  ProgressBar,
  WorkSetupStep,
  AssistantBehaviorStep,
  PlanFirstDayStep,
  OnboardingCompleteStep,
} from "../../components/onboarding";

interface WorkSetupData {
  startTime: string;
  endTime: string;
  focusHours: string[];
  defaultTaskDuration: string;
  smartReminders: boolean;
  scheduleOptimization: boolean;
}

interface AssistantBehaviorData {
  autoCreateTasks: boolean;
  askBeforeScheduling: boolean;
  proactiveSuggestions: boolean;
  endOfDayReflection: boolean;
}

interface PlanFirstDayData {
  dailyFocus: string;
}

const STEP_LABELS = ["Work Setup", "Assistant Behavior", "Plan Your Day", "Complete"];

function calculateStepProgress(
  step: number,
  workSetup: WorkSetupData,
  assistantBehavior: AssistantBehaviorData,
  planFirstDay: PlanFirstDayData
): number {
  const STEP_WEIGHT = 33.33;

  // Calculate Step 1 progress (Work Setup)
  const step1Progress = (() => {
    let filled = 0;
    const totalFields = 4;

    if (workSetup.startTime && workSetup.endTime) filled++;
    if (workSetup.focusHours.length > 0) filled++;
    if (workSetup.defaultTaskDuration) filled++;
    if (workSetup.smartReminders || workSetup.scheduleOptimization) filled++;

    return (filled / totalFields) * STEP_WEIGHT;
  })();

  // Calculate Step 2 progress (Assistant Behavior)
  const step2Progress = (() => {
    let interacted = 0;
    const totalToggles = 4;

    if (assistantBehavior.autoCreateTasks) interacted++;
    if (assistantBehavior.askBeforeScheduling) interacted++;
    if (assistantBehavior.proactiveSuggestions) interacted++;
    if (assistantBehavior.endOfDayReflection) interacted++;

    return (interacted / totalToggles) * STEP_WEIGHT;
  })();

  // Calculate Step 3 progress (Plan First Day)
  const step3Progress = (() => {
    if (!planFirstDay.dailyFocus) return 0;
    const textLength = planFirstDay.dailyFocus.trim().length;
    if (textLength === 0) return 0;
    if (textLength < 10) return STEP_WEIGHT * 0.25;
    if (textLength < 30) return STEP_WEIGHT * 0.5;
    if (textLength < 50) return STEP_WEIGHT * 0.75;
    return STEP_WEIGHT;
  })();

  // Return progress based on current step
  switch (step) {
    case 1:
      return Math.round(step1Progress);
    case 2:
      return Math.round(STEP_WEIGHT + step2Progress);
    case 3:
      return Math.round(STEP_WEIGHT * 2 + step3Progress);
    case 4:
      return 100;
    default:
      return 0;
  }
}

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const [workSetupData, setWorkSetupData] = useState<WorkSetupData>({
    startTime: "09:00",
    endTime: "17:00",
    focusHours: ["9 AM", "10 AM", "11 AM", "3 PM", "4 PM"],
    defaultTaskDuration: "30m",
    smartReminders: true,
    scheduleOptimization: false,
  });

  const [assistantBehaviorData, setAssistantBehaviorData] = useState<AssistantBehaviorData>({
    autoCreateTasks: true,
    askBeforeScheduling: true,
    proactiveSuggestions: false,
    endOfDayReflection: true,
  });

  const [planFirstDayData, setPlanFirstDayData] = useState<PlanFirstDayData>({
    dailyFocus: "",
  });

  const handleClose = () => {
    router.push("/");
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoToDashboard = () => {
    // TODO: Save onboarding data to backend
    console.log("Onboarding complete:", {
      workSetup: workSetupData,
      assistantBehavior: assistantBehaviorData,
      planFirstDay: planFirstDayData,
    });
    router.push("/");
  };

  const handleEditPreferences = () => {
    setCurrentStep(1);
  };

  const preferences = {
    focusMode: "Deep Work",
    notifications: "Priority Only",
    dailyBriefing: `${workSetupData.startTime.replace(":", ":")} AM`,
  };

  // Calculate dynamic progress based on filled fields
  const progress = useMemo(() => {
    return calculateStepProgress(currentStep, workSetupData, assistantBehaviorData, planFirstDayData);
  }, [currentStep, workSetupData, assistantBehaviorData, planFirstDayData]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <WorkSetupStep
            data={workSetupData}
            onChange={setWorkSetupData}
            onContinue={handleContinue}
          />
        );
      case 2:
        return (
          <AssistantBehaviorStep
            data={assistantBehaviorData}
            onChange={setAssistantBehaviorData}
            onContinue={handleContinue}
          />
        );
      case 3:
        return (
          <PlanFirstDayStep
            data={planFirstDayData}
            onChange={setPlanFirstDayData}
            onContinue={handleContinue}
          />
        );
      case 4:
        return (
          <OnboardingCompleteStep
            preferences={preferences}
            onGoToDashboard={handleGoToDashboard}
            onEditPreferences={handleEditPreferences}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="flex h-full grow flex-col">
        <OnboardingHeader onClose={handleClose} showHelp={currentStep === 3} />

        <main className="flex flex-1 justify-center py-12 px-4">
          <div className="flex flex-col w-full max-w-[700px]">
            {/* Progress Section - Hide on complete step */}
            {currentStep < 4 && (
              <div className="mb-10">
                <ProgressBar
                  currentStep={currentStep}
                  totalSteps={3}
                  progress={progress}
                  stepLabel={STEP_LABELS[currentStep - 1]}
                />
              </div>
            )}

            {/* Step Content */}
            {renderStep()}
          </div>
        </main>

        <footer className="py-8 text-center text-xs text-slate-500 dark:text-slate-500">
          {currentStep === 4
            ? "Powered by Atlas Intelligence • Ready to help"
            : "© 2024 Atlas Productivity AI. All rights reserved."}
        </footer>
      </div>
    </div>
  );
}
