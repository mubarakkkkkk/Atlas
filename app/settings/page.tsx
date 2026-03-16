"use client";

import { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import {
  SettingsNav,
  ProfileSection,
  AssistantBehaviorSection,
  WorkPreferencesSection,
  IntegrationsSection,
  AppearanceSection,
  ProfileData,
  AssistantBehaviorData,
  WorkPreferencesData,
  Integration,
  AppearanceData,
} from "../components/settings";

const initialProfileData: ProfileData = {
  fullName: "Alex Rivera",
  email: "alex.rivera@atlas.dev",
  timezone: "ET",
  language: "en-US",
};

const initialAssistantBehavior: AssistantBehaviorData = {
  taskExtraction: {
    autoExtractFromChat: true,
    askConfirmation: true,
    autoGroupTasks: false,
  },
  proactivity: {
    morningPlanning: true,
    middayCheckIn: false,
    endOfDayReflection: true,
    suggestRescheduling: true,
  },
  smartSuggestions: {
    suggestTimeBlocks: true,
    suggestBreakingTasks: true,
    recommendFocusSessions: true,
  },
  personality: "professional",
};

const initialWorkPreferences: WorkPreferencesData = {
  coreHoursStart: "09:00",
  coreHoursEnd: "18:00",
  reminderFrequency: "hourly",
  focusHoursGoal: 4,
};

const initialIntegrations: Integration[] = [
  { id: "github", name: "GitHub", connected: true, icon: "github" },
  { id: "slack", name: "Slack", connected: false, icon: "slack" },
  { id: "google-calendar", name: "Google Calendar", connected: true, icon: "google" },
  { id: "gitlab", name: "GitLab", connected: false, icon: "gitlab" },
];

const initialAppearance: AppearanceData = {
  theme: "dark",
  uiDensity: "compact",
};

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [hasChanges, setHasChanges] = useState(false);

  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [assistantBehavior, setAssistantBehavior] = useState<AssistantBehaviorData>(
    initialAssistantBehavior
  );
  const [workPreferences, setWorkPreferences] =
    useState<WorkPreferencesData>(initialWorkPreferences);
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);
  const [appearance, setAppearance] = useState<AppearanceData>(initialAppearance);

  const handleProfileChange = (data: ProfileData) => {
    setProfile(data);
    setHasChanges(true);
  };

  const handleAssistantBehaviorChange = (data: AssistantBehaviorData) => {
    setAssistantBehavior(data);
    setHasChanges(true);
  };

  const handleWorkPreferencesChange = (data: WorkPreferencesData) => {
    setWorkPreferences(data);
    setHasChanges(true);
  };

  const handleConnect = (id: string) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, connected: true } : i))
    );
    setHasChanges(true);
  };

  const handleDisconnect = (id: string) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, connected: false } : i))
    );
    setHasChanges(true);
  };

  const handleAppearanceChange = (data: AppearanceData) => {
    setAppearance(data);
    setHasChanges(true);
  };

  const handleSave = async () => {
    // TODO: Implement API call to save settings
    console.log("Saving settings:", {
      profile,
      assistantBehavior,
      workPreferences,
      integrations,
      appearance,
    });
    setHasChanges(false);
    alert("Settings saved successfully!");
  };

  const handleReset = () => {
    setProfile(initialProfileData);
    setAssistantBehavior(initialAssistantBehavior);
    setWorkPreferences(initialWorkPreferences);
    setIntegrations(initialIntegrations);
    setAppearance(initialAppearance);
    setHasChanges(false);
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case "profile":
        return { title: "Profile", description: "Manage your personal information and preferences." };
      case "assistant":
        return { title: "Assistant Behavior", description: "Customize how your assistant plans tasks, sends reminders, and interacts with you." };
      case "preferences":
        return { title: "Work Preferences", description: "Set your working hours and productivity preferences." };
      case "notifications":
        return { title: "Notifications", description: "Control how and when you receive notifications." };
      case "integrations":
        return { title: "Integrations", description: "Connect your favorite tools and services." };
      case "appearance":
        return { title: "Appearance", description: "Customize the look and feel of your workspace." };
      default:
        return { title: "Settings", description: "Manage your assistant behavior and developer environment." };
    }
  };

  const { title, description } = getSectionTitle();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        <Header
          searchPlaceholder="Search settings, tasks, or documentation..."
          actionLabel="Plan My Day"
          actionIcon="calendar_today"
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <SettingsNav
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />

              <div className="md:col-span-3 space-y-8">
                {activeSection === "profile" && (
                  <ProfileSection data={profile} onChange={handleProfileChange} />
                )}

                {activeSection === "assistant" && (
                  <AssistantBehaviorSection
                    data={assistantBehavior}
                    onChange={handleAssistantBehaviorChange}
                  />
                )}

                {activeSection === "preferences" && (
                  <WorkPreferencesSection
                    data={workPreferences}
                    onChange={handleWorkPreferencesChange}
                  />
                )}

                {activeSection === "notifications" && (
                  <NotificationsSection />
                )}

                {activeSection === "integrations" && (
                  <IntegrationsSection
                    integrations={integrations}
                    onConnect={handleConnect}
                    onDisconnect={handleDisconnect}
                  />
                )}

                {activeSection === "appearance" && (
                  <AppearanceSection data={appearance} onChange={handleAppearanceChange} />
                )}
              </div>
            </div>

            <div className="mt-12 flex items-center justify-end gap-4 pb-12">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Reset to Default
              </button>
              <button
                onClick={handleSave}
                disabled={!hasChanges}
                className="px-8 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NotificationsSection() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    taskReminders: true,
    weeklyDigest: false,
    mentionAlerts: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">Notification Preferences</h3>
      </div>
      <div className="p-6 space-y-4">
        {[
          { key: "emailNotifications" as const, title: "Email notifications", description: "Receive task updates and reminders via email." },
          { key: "pushNotifications" as const, title: "Push notifications", description: "Get instant alerts on your device." },
          { key: "taskReminders" as const, title: "Task reminders", description: "Remind me before task deadlines." },
          { key: "weeklyDigest" as const, title: "Weekly digest", description: "Receive a summary of your week every Sunday." },
          { key: "mentionAlerts" as const, title: "Mention alerts", description: "Notify me when someone mentions me." },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
              <p className="text-xs text-slate-500">{item.description}</p>
            </div>
            <button
              onClick={() => toggleSetting(item.key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings[item.key] ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings[item.key] ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
