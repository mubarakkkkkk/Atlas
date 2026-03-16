"use client";

interface SettingsNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "profile", label: "Profile" },
  { id: "assistant", label: "Assistant Behavior" },
  { id: "preferences", label: "Work Preferences" },
  { id: "notifications", label: "Notifications" },
  { id: "integrations", label: "Integrations" },
  { id: "appearance", label: "Appearance" },
];

export function SettingsNav({ activeSection, onSectionChange }: SettingsNavProps) {
  return (
    <nav className="flex flex-col gap-1">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-colors ${
              isActive
                ? "bg-white dark:bg-slate-800/50 text-primary font-semibold shadow-sm border border-slate-200 dark:border-slate-700"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {section.label}
          </button>
        );
      })}
    </nav>
  );
}
