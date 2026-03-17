import { AtlasLogo } from "./AtlasLogo";
import { MaterialIcon } from "../ui/MaterialIcon";

export function AuthBranding() {
  return (
    <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden bg-background-dark">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-purple-600/10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-white">
          <AtlasLogo className="size-8 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Atlas</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-lg">
        <h1 className="text-5xl font-black leading-tight tracking-tight text-white mb-6">
          Plan your day in seconds.
        </h1>
        <p className="text-xl text-slate-400 font-medium">
          Let your assistant handle the rest. Automate your workflow, manage tasks, and stay
          focused on what matters.
        </p>

        {/* Visual Preview: Chat to Task */}
        <div className="mt-12 p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-6">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center">
              <MaterialIcon name="person" className="text-white text-sm" />
            </div>
            <div className="bg-slate-700/50 p-3 rounded-lg rounded-tl-none">
              <p className="text-sm text-slate-200">
                &quot;Schedule a code review for tomorrow at 10am and notify the team.&quot;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <MaterialIcon name="auto_fix_high" className="text-primary" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 p-4 rounded-lg">
            <MaterialIcon name="calendar_today" className="text-primary" />
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider">
                New Task Created
              </p>
              <p className="text-sm font-semibold text-white">Code Review Session</p>
              <p className="text-xs text-slate-400">Tomorrow, 10:00 AM • Notifications Sent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex gap-6 text-sm text-slate-500">
        <span>© 2024 Atlas AI</span>
        <a className="hover:text-primary transition-colors" href="#">
          Privacy
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Terms
        </a>
      </div>
    </div>
  );
}
