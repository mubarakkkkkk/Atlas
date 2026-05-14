"use client";

import { useEffect, useState } from "react";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";
import Select from "react-select";

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

const languages = [
  { value: "en-US", label: "English (US)" },
  { value: "en-GB", label: "English (UK)" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "de", label: "German" },
  { value: "pt", label: "Portuguese" },
  { value: "ar", label: "Arabic" },
  { value: "zh", label: "Chinese (Simplified)" },
  { value: "ja", label: "Japanese" },
  { value: "yo", label: "Yoruba" },
  { value: "ha", label: "Hausa" },
  { value: "ig", label: "Igbo" },
];

const selectStyles = {
  control: (base: object) => ({
    ...base,
    backgroundColor: "transparent",
    borderColor: "rgb(203 213 225)",
    borderRadius: "0.5rem",
    padding: "1px 4px",
    fontSize: "0.875rem",
    boxShadow: "none",
    "&:hover": { borderColor: "var(--color-primary)" },
  }),
  menu: (base: object) => ({
    ...base,
    backgroundColor: "#1e293b",
    borderRadius: "0.5rem",
    border: "1px solid rgb(51 65 85)",
  }),
  option: (base: object, state: { isFocused: boolean }) => ({
    ...base,
    fontSize: "0.875rem",
    backgroundColor: state.isFocused ? "rgba(13,89,242,0.2)" : "transparent",
    color: state.isFocused ? "white" : "#94a3b8",
    cursor: "pointer",
  }),
  singleValue: (base: object) => ({ ...base, color: "inherit" }),
  input: (base: object) => ({ ...base, color: "inherit" }),
  menuPortal: (base: object) => ({ ...base, zIndex: 9999 }),
};

export function ProfileSection({ data, onChange }: ProfileSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (field: keyof ProfileData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section
      id="profile"
      className="bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">
          Profile Details
        </h3>
        <button className="text-xs font-bold text-primary hover:underline">
          Edit Avatar
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
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

        {/* Email */}
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

        {/* Timezone */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Timezone
          </label>
          <TimezoneSelect
            value={data.timezone}
            onChange={(tz: ITimezone) =>
              handleChange(
                "timezone",
                typeof tz === "string" ? tz : tz.value
              )
            }
            menuPortalTarget={mounted ? document.body : null}
            menuPosition="fixed"
            styles={selectStyles}
          />
        </div>

        {/* Language */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Language
          </label>
          <Select
            value={languages.find((l) => l.value === data.language) ?? null}
            onChange={(opt) => handleChange("language", opt?.value ?? "")}
            options={languages}
            menuPortalTarget={mounted ? document.body : null}
            menuPosition="fixed"
            styles={selectStyles}
          />
        </div>
      </div>
    </section>
  );
}