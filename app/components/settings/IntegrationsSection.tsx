"use client";

export interface Integration {
  id: string;
  name: string;
  connected: boolean;
  icon: "github" | "slack" | "google" | "gitlab";
}

interface IntegrationsSectionProps {
  integrations: Integration[];
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zM17.687 8.834a2.527 2.527 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.166 18.958a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zM15.166 17.688a2.527 2.527 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z"
        fill="#4A154B"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GitLabIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0L16.425 9.452H7.575L4.91 1.263c-.135-.417-.724-.417-.859 0L1.387 9.452.045 13.587c-.114.352.011.737.311.955l11.644 8.448 11.644-8.448c.3-.218.425-.603.311-.955" />
    </svg>
  );
}

function IntegrationIcon({ icon }: { icon: Integration["icon"] }) {
  const iconMap = {
    github: { component: <GitHubIcon />, bg: "bg-black text-white" },
    slack: { component: <SlackIcon />, bg: "bg-white shadow-sm" },
    google: { component: <GoogleIcon />, bg: "bg-white shadow-sm" },
    gitlab: { component: <GitLabIcon />, bg: "bg-orange-500 text-white" },
  };

  const { component, bg } = iconMap[icon];

  return (
    <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center`}>
      {component}
    </div>
  );
}

export function IntegrationsSection({
  integrations,
  onConnect,
  onDisconnect,
}: IntegrationsSectionProps) {
  return (
    <section
      id="integrations"
      className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
    >
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">Integrations</h3>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/30"
          >
            <div className="flex items-center gap-4">
              <IntegrationIcon icon={integration.icon} />
              <div>
                <p className="text-sm font-bold">{integration.name}</p>
                {integration.connected ? (
                  <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Connected
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 font-medium">Not connected</p>
                )}
              </div>
            </div>
            {integration.connected ? (
              <button
                onClick={() => onDisconnect(integration.id)}
                className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors"
              >
                Disconnect
              </button>
            ) : (
              <button
                onClick={() => onConnect(integration.id)}
                className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
