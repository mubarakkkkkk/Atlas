"use client";

export interface ProfileData {
  fullName: string;
  email: string;
  timezone: string;
  language: string;
}

interface ProfileSectionProps {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
}

const timezones = [
  { value: "PT", label: "Pacific Time (PT) - UTC-8" },
  { value: "ET", label: "Eastern Time (ET) - UTC-5" },
  { value: "CET", label: "Central European (CET) - UTC+1" },
];

const languages = [
  { value: "en-US", label: "English (US)" },
  { value: "es", label: "Spanish" },
  { value: "de", label: "German" },
];

export function ProfileSection({ data, onChange }: ProfileSectionProps) {
  const handleChange = (field: keyof ProfileData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section
      id="profile"
      className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
    >
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">Profile Details</h3>
        <button className="text-xs font-bold text-primary hover:underline">Edit Avatar</button>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Timezone
          </label>
          <select
            value={data.timezone}
            onChange={(e) => handleChange("timezone", e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
          >
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Language
          </label>
          <select
            value={data.language}
            onChange={(e) => handleChange("language", e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
