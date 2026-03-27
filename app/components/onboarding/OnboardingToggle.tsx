interface OnboardingToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function OnboardingToggle({
  label,
  description,
  checked,
  onChange,
}: OnboardingToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-slate-900 dark:text-white">{label}</p>
        {description && (
          <p className="text-slate-500 dark:text-slate-400 text-sm">{description}</p>
        )}
      </div>
      <label className="relative flex h-7 w-12 cursor-pointer items-center rounded-full bg-slate-300 dark:bg-slate-700 p-1 transition-colors has-[:checked]:bg-primary">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <div className="h-5 w-5 rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-5" />
      </label>
    </div>
  );
}
