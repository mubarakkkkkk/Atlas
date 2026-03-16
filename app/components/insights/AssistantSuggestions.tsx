import { MaterialIcon } from "../ui/MaterialIcon";

const suggestions = [
  {
    title: "Peak Productivity",
    description:
      "Based on your activity, you are most productive between 9am and 11am. Consider scheduling deep work during this block.",
    color: "primary",
    bgColor: "bg-primary/5 dark:bg-primary/10",
    borderColor: "border-primary",
    titleColor: "text-primary",
  },
  {
    title: "Focus Mode Tip",
    description:
      "Turning on 'No Distractions' mode during Code Reviews could save you up to 30 minutes daily.",
    color: "emerald",
    bgColor: "bg-emerald-500/5 dark:bg-emerald-500/10",
    borderColor: "border-emerald-500",
    titleColor: "text-emerald-500",
  },
  {
    title: "Backlog Growth",
    description:
      "Pending tasks are increasing by 2% week-over-week. We should prioritize some quick wins tomorrow.",
    color: "amber",
    bgColor: "bg-amber-500/5 dark:bg-amber-500/10",
    borderColor: "border-amber-500",
    titleColor: "text-amber-500",
  },
];

export function AssistantSuggestions() {
  return (
    <div className="bg-white dark:bg-primary/5 p-6 rounded-xl border border-slate-200 dark:border-primary/10 shadow-sm flex flex-col">
      <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
        <MaterialIcon name="tips_and_updates" className="text-primary" />
        Assistant Suggestions
      </h3>

      <div className="grid grid-cols-1 gap-4 flex-1">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.title}
            className={`${suggestion.bgColor} p-4 rounded-lg border-l-4 ${suggestion.borderColor}`}
          >
            <h4 className={`text-sm font-bold ${suggestion.titleColor} mb-1`}>
              {suggestion.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {suggestion.description}
            </p>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 border border-primary/20 hover:bg-primary/5 rounded-lg text-xs font-semibold text-primary transition-colors uppercase tracking-wider">
        Explore Detailed Analytics
      </button>
    </div>
  );
}
