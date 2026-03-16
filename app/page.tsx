import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { ChatPanel } from "./components/dashboard/ChatPanel";
import { JobBoard } from "./components/dashboard/JobBoard";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <Header
          searchPlaceholder="Search tasks, docs, or pull requests..."
          actionLabel="Start Planning Day"
          actionIcon="auto_awesome"
        />
        <div className="flex-1 flex overflow-hidden">
          <ChatPanel />
          <JobBoard />
        </div>
      </main>
    </div>
  );
}
