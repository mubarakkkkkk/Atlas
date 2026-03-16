"use client";

import Image from "next/image";

function MaterialIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

function LeftSidebar() {
  const navItems = [
    { icon: "dashboard", label: "Dashboard", active: true },
    { icon: "today", label: "Today", active: false },
    { icon: "work", label: "Job Board", active: false },
    { icon: "check_circle", label: "Completed", active: false },
    { icon: "bar_chart", label: "Insights", active: false },
    { icon: "settings", label: "Settings", active: false },
  ];

  return (
    <aside className="w-72 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-background-light dark:bg-background-dark shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg text-white">
          <MaterialIcon name="terminal" className="text-2xl" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Atlas</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              item.active
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <MaterialIcon name={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">Today&apos;s Summary</span>
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
              3/8 Done
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mb-3">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: "37.5%" }} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <MaterialIcon name="alarm" className="text-sm" />
              <span>Next reminder at 11:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <MaterialIcon name="pending_actions" className="text-sm" />
              <span>5 tasks pending completion</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <MaterialIcon name="bolt" className="text-lg" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium">Assistant Pro</p>
            <p className="text-[10px] text-slate-500">Plan expires in 12 days</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-background-light dark:bg-background-dark shrink-0">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <MaterialIcon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
          />
          <input
            type="text"
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary text-sm transition-all outline-none"
            placeholder="Search tasks, docs, or pull requests..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
          <MaterialIcon name="auto_awesome" className="text-lg" />
          Start Planning Day
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative">
          <MaterialIcon name="notifications" className="text-slate-600 dark:text-slate-300" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark" />
        </button>
        <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden ring-2 ring-slate-200 dark:ring-slate-800">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAttahFi-VQttiCpS7Ry0GJYDvbrz0TbkzBSxVF3iOZPnEINTMY8mOX85aZnlxsduvF24tlRkEslULksQ6l9FvpEa_Olxw3bXnNXDq_irDy8ORnXZp58LkHQVBV-AGvYrZmPfwTzHHkEijwZvqbXUWp_5HICXwOqusM0L9y2NdLKs4-ULrsNPlMKTrfafVsbbvFcvgEuM_L1T4XVgDW398ZchYlUcd2wwg7uBV1jB1lqRrqhVnc67mAoeMXSvtk4xAH2gJirwPZcSwK"
            alt="Developer user profile picture"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

function ChatPanel() {
  return (
    <section className="flex-1 flex flex-col bg-slate-50 dark:bg-[#0d111a] relative border-r border-slate-200 dark:border-slate-800">
      <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
        {/* AI Message */}
        <div className="flex gap-4 max-w-2xl">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <MaterialIcon name="smart_toy" className="text-lg" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">
              Assistant
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
              <p className="text-sm leading-relaxed">
                Good morning! I&apos;m ready to help you optimize your workflow. What&apos;s on
                your plate for today?
              </p>
            </div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
          <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWgCEiY5H9lV266T4IU2Y4H8JLQRV-sGe6Js54V2t2TqXEG8KSXR9hVMsZEb4ZnP302TbldiDavWPaK9yFDHKOehPIJfY9A7IatOJz2ON9R2TmjrPw3SdLpr7LtyqSoVVGq8NREDnw4JUFHV-7fBjIX4zhLCaeQjMYNL15IN1zZXrWX3QGvZGLF8u5XwqpQaHMzKqaeSbtrdsv86gMFVfPceHfE6Ot4Fg4CtSRruVpEU5F2mCIAD6Uh-kzrhCTvAX8Itco-Om-FrFg"
              alt="User avatar thumbnail"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1 text-right">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 uppercase tracking-wider">
              Developer
            </p>
            <div className="bg-primary text-white p-4 rounded-xl rounded-tr-none shadow-lg shadow-primary/10">
              <p className="text-sm leading-relaxed text-left">
                Today I need to fix the login bug, review two pull requests before noon, and
                deploy by 5pm.
              </p>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-4 max-w-2xl">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <MaterialIcon name="smart_toy" className="text-lg" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">
              Assistant
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
              <p className="text-sm leading-relaxed">
                I&apos;ve organized your plan for today and added reminders. I&apos;ve blocked out
                time for the login bug now, your PR reviews at 11:00 AM, and final deployment
                prep starting at 4:00 PM.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-primary font-medium animate-pulse">
                <MaterialIcon name="sync" className="text-sm" />
                <span>Assistant organizing tasks...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Reminder */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
        <div className="glass-panel rounded-xl p-3 flex items-center gap-3 shadow-2xl border-primary/20 ring-1 ring-primary/30">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <MaterialIcon name="schedule" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-primary">Floating Reminder</p>
            <p className="text-xs truncate">Review PRs in 10 mins</p>
          </div>
          <button className="p-1 hover:bg-slate-800 rounded transition-colors">
            <MaterialIcon name="close" className="text-sm text-slate-400" />
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary/50 to-primary/0 rounded-xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000" />
          <div className="relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-end p-2 pr-4">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <MaterialIcon name="add_circle" />
            </button>
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none py-2 placeholder:text-slate-400 outline-none"
              placeholder="Tell me about your day and I'll organize your work."
              rows={1}
            />
            <button className="mb-1 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <MaterialIcon name="send" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobBoard() {
  return (
    <section className="w-80 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto custom-scrollbar">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h2 className="font-bold flex items-center gap-2">
          <MaterialIcon name="view_kanban" className="text-primary" />
          Job Board
        </h2>
        <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
          <MaterialIcon name="more_vert" className="text-slate-400" />
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Pending Column */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Pending
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
              2
            </span>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                  Review PRs
                </h3>
                <span className="text-[10px] text-slate-400">11:00-12:00</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 rounded-full border border-background-dark bg-slate-500 overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8c86btdCmonwz6Mrqp4INL61jeh-46eWJumzZJ4S4MyChutfVk9XFlJDeDBA0RUlqs22fv9aZ2q5P9rDpqh2yUD3A_ie5-fqLeftLG6xcKy2B9oxEjIJbZXvEO7wu4WQbGVY8jA1mqTJlhDp_C6DOzSJQ3bbRJWiZdy2ItvNonac-FRhnDrYydiL6jU7CFncBeQmEUCT8-0zHiTHkwf745a-A8f1IUAaDAILLfD7cdgxx44R179mhCG01bXYIvHFtQzLpRyt0hi3r"
                      alt="Team member avatar"
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-background-dark bg-slate-500 overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsHrppRraGZEEzKFIyUpSiMdGLwh1IlGAq-V6cXto0bgsFkxzAjnaXKvxvdhebSKDYHMCkBTZ-G9PqlQlUAvIBVHmR7htlfeHg5VNmMV7sZAZ-dcJ_J_cC2cYMB6iK6MJjTK_M_zJ8ZqXYRhJvcG0A80KQxGfx8Oz_UD5kcb7Smk3MCm6lYq54ZZ7hXpwKhEBJGiTqNRxG2pTrQsa51UKtfLA2j3Ts4ccAQt7KcNIKCeybAlQPj8p2vpnwoX0rDdIxbZk1ElwgwBQm"
                      alt="Team member avatar"
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[10px] text-slate-500">2 Contributors</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                  Deploy app
                </h3>
                <span className="text-[10px] text-slate-400">16:00-17:00</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-500 uppercase tracking-tighter">
                  High Priority
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              In Progress
            </span>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              1
            </span>
          </div>
          <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 ring-1 ring-primary/20 shadow-lg shadow-primary/5 cursor-pointer relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Fix login bug
              </h3>
              <span className="text-[10px] font-bold text-primary">9:00-10:00</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
              Investigate token expiry issue in Auth0 callback.
            </p>
            <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[65%]" />
            </div>
          </div>
        </div>

        {/* Completed Column */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              Completed
            </span>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              3
            </span>
          </div>
          <div className="space-y-3 opacity-60">
            <div className="bg-white dark:bg-slate-800/20 p-3 rounded-xl border border-slate-200 dark:border-slate-800 line-through">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-sm font-medium text-slate-400">Morning standup</h3>
                <MaterialIcon name="check_circle" className="text-emerald-500 text-sm" />
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800/20 p-3 rounded-xl border border-slate-200 dark:border-slate-800 line-through">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-sm font-medium text-slate-400">Email triage</h3>
                <MaterialIcon name="check_circle" className="text-emerald-500 text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <ChatPanel />
          <JobBoard />
        </div>
      </main>
    </div>
  );
}
