import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  Terminal,
  Database,
  ShieldCheck,
} from "lucide-react";
import { BsGearWideConnected } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col">
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-5 shrink-0">
        <div className="flex items-center gap-3">
          <Image
            src="/images/cropedNoBg.png"
            alt="Icon"
            width={200}
            height={10}
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:block">
            Contact Us
          </span>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Animated Graphic */}
          <div className="relative group flex flex-col items-center order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl opacity-25 transition-opacity group-hover:opacity-40" />

            <div className="relative w-full max-w-sm aspect-square">
              {/* Glass panel */}
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                {/* Radial glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(13,89,242,0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Floating icon cards */}
                <div className="absolute top-7 left-7 rounded-xl bg-white/10 border border-white/10 p-3 shadow-2xl backdrop-blur-sm">
                  <Terminal className="text-primary" size={20} />
                </div>
                <div className="absolute bottom-10 right-8 rounded-xl bg-white/10 border border-white/10 p-3 shadow-2xl backdrop-blur-sm">
                  <GiStarsStack className="text-emerald-400" size={22} />
                </div>
                <div className="absolute top-1/4 right-5 rounded-lg bg-white/10 border border-white/10 p-2 shadow-xl opacity-60 backdrop-blur-sm">
                  <Database className="text-sky-300" size={18} />
                </div>

                {/* Centre orb */}
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="relative h-48 w-48 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 rounded-full border border-primary/40" />
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-[0_0_50px_rgba(13,89,242,0.55)] text-white">
                      <BsGearWideConnected size={40} />
                    </div>
                  </div>
                  {/* Pulse dots */}
                  <div className="flex gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse [animation-delay:0.2s]" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Badges below graphic */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Neural Engine Active
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                V 2.0.4-Beta
              </span>
            </div>
          </div>

          {/* RIGHT — Copy & CTA */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            {/* Step pill */}
            <span className="w-fit rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Step 1 of 4
            </span>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white">
                Welcome to <span className="text-primary">Atlas</span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Let&apos;s set up your assistant to match your workflow. Boost
                your productivity with context-aware AI built for developers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/signup">
                <button className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-xl">
                  <span>Get Started</span>
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </button>
              </Link>
             <Link
             href="/signin"
             >
              <button className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-8 text-base font-bold text-slate-900 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-slate-700">
                I&apos;ve used Atlas before
              </button></Link>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-slate-900 bg-slate-700"
                    >
                      <img
                        src={src}
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900 dark:text-slate-200">
                    Join 10k+ engineers
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    Integrating Atlas into their daily dev cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="shrink-0 border-t border-slate-200 dark:border-slate-800 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs uppercase tracking-widest">
        <div className="flex gap-6">
          <Link href="#" className="transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          <span>End-to-End Encrypted Workflow</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
