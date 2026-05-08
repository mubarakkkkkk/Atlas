import { RefreshCcw, ScrollText, ShieldCheck } from "lucide-react";

export function NewPasswordBranding() {
  return (
    <section className="hidden md:flex md:w-1/2 bg-[#0c0e16] relative overflow-hidden items-center justify-center p-12">
      {/* Atmospheric glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b5c4ff]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#bd3800]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-lg">
        {/* Icon + label */}
        <div className="mb-8 flex items-center gap-3">
          <div
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
            style={{ boxShadow: "0 0 20px rgba(13, 89, 242, 0.2)" }}
          >
            <RefreshCcw size={24} color="white" />
          </div>
          <span className="text-2xl font-bold text-[#e1e1ee]">Security Core</span>
        </div>

        {/* Hero */}
        <h1 className="text-5xl font-black leading-tight tracking-tight text-white mb-6">
          Resetting the{" "}
          <span className="text-[#b5c4ff]">Standard</span> of Trust.
        </h1>
        <p className="text-xl font-medium text-[#c3c5d8] leading-relaxed">
          Atlas Aurora uses end-to-end encryption and multi-factor authentication
          to ensure your high-performance environment remains impenetrable.
        </p>

        {/* Feature grid */}
        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="p-4 border border-slate-800 rounded-lg bg-[#0c0e16]/50">
          <ShieldCheck size={24} color="white" />            
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Encrypted</div>
            <div className="text-white font-medium">AES-256 Protocol</div>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-[#0c0e16]/50">
            <ScrollText size={24} color="white" />
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Audit Log</div>
            <div className="text-white font-medium">Full Transparency</div>
          </div>
        </div>
      </div>
    </section>
  );
}