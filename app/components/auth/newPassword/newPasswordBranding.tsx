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
            className="w-12 h-12 bg-[#0d59f2] rounded-lg flex items-center justify-center"
            style={{ boxShadow: "0 0 20px rgba(13, 89, 242, 0.2)" }}
          >
            <svg className="size-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.065 3a9 9 0 0 0-9 9v.008l1.696-1.696 1.414 1.414L3 15.9l-3.175-3.174 1.414-1.414L3 13.067V12a11 11 0 0 1 18.78-7.779l-1.42 1.41A9 9 0 0 0 12.065 3zm9.11 5.1 3.175 3.174-1.414 1.414-1.765-1.765V12a11 11 0 0 1-18.78 7.778l1.42-1.41A9 9 0 0 0 21.065 12v-.008l-1.696 1.696-1.414-1.414 3.22-3.174z" />
            </svg>
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
            <svg className="size-6 text-[#b5c4ff] mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Encrypted</div>
            <div className="text-white font-medium">AES-256 Protocol</div>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-[#0c0e16]/50">
            <svg className="size-6 text-[#b5c4ff] mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 19.59V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c.45 0 .85-.15 1.18-.39L20 19.59zM13 9V3.5L18.5 9H13zm-2 8H7v-2h4v2zm4-4H7v-2h8v2z" />
            </svg>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Audit Log</div>
            <div className="text-white font-medium">Full Transparency</div>
          </div>
        </div>
      </div>
    </section>
  );
}