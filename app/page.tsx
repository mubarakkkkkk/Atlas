// import { Sidebar } from "./components/layout/Sidebar";
// import { Header } from "./components/layout/Header";
// import { ChatPanel } from "./components/dashboard/ChatPanel";
// import { JobBoard } from "./components/dashboard/JobBoard";
import HomePage from "./pages/homePage/page";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <HomePage />
    </div>
  );
}
