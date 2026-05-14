import Image from "next/image";
import {
  MessageSquare,
  ArrowRight,
  CircleCheckBig,
  ClipboardList,
  LayoutDashboard,
  Verified
} from "lucide-react";

export function SignupBranding() {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden bg-linear-to-br from-background-dark via-[#0a0f1a] to-primary/20 h-screen">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3">
        <Image
          src="/images/noBg.png"
          alt="Atlas Logo"
          width={200}
          height={80}
        />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-lg">
        <h1 className="text-5xl font-extrabold leading-tight text-white mb-6">
          Turn conversations into{" "}
          <span className="text-primary">structured work.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Stay focused, ship faster. Atlas transforms your developer workflows
          from messy chats to actionable tasks.
        </p>

        {/* Visual Flow Representation */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
            <MessageSquare className="text-primary" />
            <div className="h-2 w-32 bg-white/20 rounded-full" />
            <ArrowRight className="text-slate-500" />
            <CircleCheckBig className="text-primary" />
            <div className="h-2 w-20 bg-white/20 rounded-full" />
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md ml-8">
            <ClipboardList className="text-primary" />
            <div className="h-2 w-40 bg-white/20 rounded-full" />
            <ArrowRight className="text-slate-500" />
            <LayoutDashboard className="text-primary" />
          </div>
        </div>
      </div>

      {/* Footer Badge */}
      <div className="relative z-10 flex items-center gap-2 text-slate-500 text-sm">
        <Verified className="text-xs" />
        Trusted by 10k+ developers worldwide
      </div>
    </div>
  );
}
