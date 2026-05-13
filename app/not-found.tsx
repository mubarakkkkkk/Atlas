import Link from "next/link";
import { Rocket, Compass } from "lucide-react";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-[#11131c] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <nav className="w-full sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex justify-between items-center px-6 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <Image
              src="/images/cropedNoBg.png"
              alt="logo"
              width={100}
              height={20}
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {["Docs", "Support", "Status"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-200 h-200 bg-linear-to-r from-blue-600/30 to-transparent rounded-full blur-[120px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-125 h-125 border border-slate-800/40 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-75 h-75 border border-slate-700/30 rounded-full flex items-center justify-center">
                <div className="w-25 h-25 border border-slate-600/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-lg w-full text-center py-20">
          {/* Error badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl mb-8 bg-slate-800/40 backdrop-blur-md border border-slate-700/50">
            <span className="font-mono text-blue-400 text-2xl font-bold tracking-widest">
              ERROR 404
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-none tracking-tight">
            Lost in the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-sky-400">
              Void.
            </span>
          </h1>
          <p className="text-lg font-medium text-slate-400 mb-2">
            The page you&apos;re looking for has drifted off-course.
          </p>
          <p className="text-sm text-slate-500 italic mb-10 max-w-md mx-auto">
            Don&apos;t worry, I can help you find your way back to the command
            center.
          </p>
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48">
              {/* Background compass */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Compass
                  size={120}
                  className="text-blue-500/20 blur-[1px]"
                  strokeWidth={0.5}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-5 rounded-full bg-blue-600/10 shadow-[0_0_30px_rgba(13,89,242,0.3)]">
                  <Rocket
                    size={52}
                    className="text-blue-400"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <div className="absolute bottom-8 right-1 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pages/dashboard"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(13,89,242,0.3)] hover:brightness-110 active:scale-95 transition-all text-center"
            >
              Go to Dashboard
            </Link>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="#"
                className="flex-1 sm:flex-none px-6 py-3 bg-slate-800 text-slate-200 font-semibold border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors text-center text-sm"
              >
                View Documentation
              </Link>
              <Link
                href="#"
                className="flex-1 sm:flex-none px-6 py-3 text-slate-400 font-semibold hover:text-white transition-colors text-center text-sm"
              >
                Contact Support
              </Link>
            </div>
          </div>
          <div className="mt-16 p-4 rounded-lg bg-black/30 border border-slate-800/50 inline-block text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[10px] text-slate-500 ml-2">
                atlas_system.log
              </span>
            </div>
            <p className="font-mono text-xs text-left leading-6">
              <span className="text-blue-400">GET</span>
              <span className="text-slate-400"> /requested_resource </span>
              <span className="text-red-400">HTTP/1.1 404 Not Found</span>
              <br />
              <span className="text-slate-600">
                Trace: adrift_in_aurora_nebula_0x992
              </span>
            </p>
          </div>
        </div>
      </main>
      <footer className="w-full py-4 bg-background-dark border-t border-slate-800/50">
  <div className="flex items-center justify-center gap-8">
    {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
      <Link
        key={item}
        href="#"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        {item}
      </Link>
    ))}
  </div>
</footer>
    </div>
  );
};

export default NotFoundPage;
