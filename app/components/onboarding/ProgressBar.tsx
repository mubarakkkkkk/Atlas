interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
  stepLabel?: string;
}

export function ProgressBar({ currentStep, totalSteps, progress, stepLabel }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Step {currentStep} of {totalSteps}
          </span>
          {stepLabel && (
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {stepLabel}
            </span>
          )}
        </div>
        <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">{progress}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
