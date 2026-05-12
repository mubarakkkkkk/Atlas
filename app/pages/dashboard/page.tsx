import React from "react";
import { ChatPanel } from "@/app/components/dashboard";
import { JobBoard } from "@/app/components/dashboard";
import { Sidebar } from "@/app/components/layout/Sidebar";

const page = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <ChatPanel />
      <JobBoard />
    </div>
  );
};

export default page;
