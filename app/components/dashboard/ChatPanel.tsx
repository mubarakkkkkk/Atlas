"use client";

import Image from "next/image";
import { MaterialIcon } from "../ui/MaterialIcon";

interface Message {
  role: "assistant" | "user";
  content: string;
  isLoading?: boolean;
}

const messages: Message[] = [
  {
    role: "assistant",
    content:
      "Good morning! I'm ready to help you optimize your workflow. What's on your plate for today?",
  },
  {
    role: "user",
    content:
      "Today I need to fix the login bug, review two pull requests before noon, and deploy by 5pm.",
  },
  {
    role: "assistant",
    content:
      "I've organized your plan for today and added reminders. I've blocked out time for the login bug now, your PR reviews at 11:00 AM, and final deployment prep starting at 4:00 PM.",
    isLoading: true,
  },
];

function AssistantMessage({ content, isLoading }: { content: string; isLoading?: boolean }) {
  return (
    <div className="flex gap-4 max-w-2xl">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <MaterialIcon name="smart_toy" className="text-lg" />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">
          Assistant
        </p>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
          <p className="text-sm leading-relaxed">{content}</p>
          {isLoading && (
            <div className="mt-3 flex items-center gap-2 text-xs text-primary font-medium animate-pulse">
              <MaterialIcon name="sync" className="text-sm" />
              <span>Assistant organizing tasks...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
      <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWgCEiY5H9lV266T4IU2Y4H8JLQRV-sGe6Js54V2t2TqXEG8KSXR9hVMsZEb4ZnP302TbldiDavWPaK9yFDHKOehPIJfY9A7IatOJz2ON9R2TmjrPw3SdLpr7LtyqSoVVGq8NREDnw4JUFHV-7fBjIX4zhLCaeQjMYNL15IN1zZXrWX3QGvZGLF8u5XwqpQaHMzKqaeSbtrdsv86gMFVfPceHfE6Ot4Fg4CtSRruVpEU5F2mCIAD6Uh-kzrhCTvAX8Itco-Om-FrFg"
          alt="User avatar"
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
          <p className="text-sm leading-relaxed text-left">{content}</p>
        </div>
      </div>
    </div>
  );
}

export function ChatPanel() {
  return (
    <section className="flex-1 flex flex-col bg-slate-50 dark:bg-[#0d111a] relative border-r border-slate-200 dark:border-slate-800">
      <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
        {messages.map((message, index) =>
          message.role === "assistant" ? (
            <AssistantMessage
              key={index}
              content={message.content}
              isLoading={message.isLoading}
            />
          ) : (
            <UserMessage key={index} content={message.content} />
          )
        )}
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
