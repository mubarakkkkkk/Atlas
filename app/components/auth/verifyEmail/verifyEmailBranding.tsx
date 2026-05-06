
export function VerifyEmailBranding() {
  return (
    <div className="hidden md:flex md:w-1/2 relative overflow-hidden items-center justify-center p-12 bg-[#0c0e16]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-tr from-[#11131c] via-transparent to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <span className="text-[#b5c4ff] text-[10px] font-bold uppercase tracking-widest mb-4 block">
          Security Layer
        </span>
        <h1 className="text-5xl font-black leading-tight tracking-tight text-white mb-6">
          Securing your digital frontier.
        </h1>
        <p className="text-xl font-medium text-[#c3c5d8] mb-8">
          Verification is the final step to ensuring your environment remains
          isolated and protected against unauthorized access.
        </p>

        {/* Glass card */}
        {/* <div
          className="p-6 rounded-xl flex items-start gap-4"
          style={{
            background: "rgba(30, 41, 59, 0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid #334155",
          }}
        >
          <div className="p-3 bg-primary/20 rounded-lg shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm mb-1">Encrypted Tunnel</h3>
            <p className="text-[#c3c5d8] text-sm">
              Every authentication request is wrapped in a layer of AES-256 encryption.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}