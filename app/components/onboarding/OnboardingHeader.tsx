import { AtlasLogo } from "../auth/AtlasLogo";
import { MaterialIcon } from "../ui/MaterialIcon";

interface OnboardingHeaderProps {
  onClose?: () => void;
  showHelp?: boolean;
}

export function OnboardingHeader({ onClose, showHelp }: OnboardingHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 md:px-10">
      <div className="flex items-center gap-3">
        <div className="text-primary">
          <AtlasLogo className="size-8" />
        </div>
        <h2 className="text-xl font-bold tracking-tight">Atlas</h2>
      </div>
      <button
        onClick={onClose}
        className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
      >
        <MaterialIcon
          name={showHelp ? "help" : "close"}
          className="text-slate-700 dark:text-slate-300"
        />
      </button>
    </header>
  );
}
