"use client";

import Link from "next/link";
import { useState } from "react";
import { OtpInput } from "@/app/components/auth/verifyEmail/otpInput";
import Button from "@/app/components/layout/button";
import { RefreshCw } from 'lucide-react';

export function VerifyEmailForm() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // handle verify logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleResend = () => {
    // handle resend logic here
    console.log("Resend code");
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative bg-[#11131c]">
      {/* Atmospheric glow */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[448px] z-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Check your email
          </h2>
          <p className="text-[#c3c5d8]">
            We&apos;ve sent a 6-digit verification code to your email address.
          </p>
        </div>

        {/* Glass Card */}
        <div
          className="p-8 rounded-xl"
          style={{
            background: "rgba(30, 41, 59, 0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid #334155",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <OtpInput value={otp} onChange={setOtp} />

            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Verifying..."
              className="bg-primary text-white hover:bg-primary/90"
              style={{ boxShadow: "0 0 20px rgba(13, 89, 242, 0.2)" }}
            >
              Verify Code
            </Button>
          </form>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={handleResend}
              className="text-[#b5c4ff] hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <RefreshCw size={10}/>
              Resend Code
            </button>

            <Link
              href="/login"
              className="text-[#c3c5d8] hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
              Back to Sign In
            </Link>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 flex items-center justify-center">
          <div
            className="w-full h-px opacity-30"
            style={{ background: "linear-gradient(90deg, transparent, #0d59f2, transparent)" }}
          />
        </div>
      </div>
    </div>
  );
}