"use client";

import Link from "next/link";
import { useState } from "react";
import { PasswordStrengthIndicator } from "@/app/components/auth/newPassword/passwordStrengthIndicator";
import Button from "@/app/components/layout/button";

export function NewPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) return;
    setIsLoading(true);
    // handle reset logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <section className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-[#11131c]">
      <div
        className="w-full max-w-[448px] p-8 md:p-10 rounded-xl shadow-2xl"
        style={{
          background: "rgba(30, 41, 59, 0.4)",
          backdropFilter: "blur(12px)",
          border: "1px solid #334155",
        }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Set new password
          </h2>
          <p className="text-sm text-[#c3c5d8]">
            Choose a strong password for your Atlas account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div className="space-y-2">
            <label
              htmlFor="new-password"
              className="block text-xs font-semibold tracking-wider text-[#c3c5d8]"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNew ? "text" : "password"}
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full bg-[#1e293b] border border-[#434655] rounded-lg px-4 py-3 pr-12 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#0d59f2] focus:border-transparent transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showNew ? (
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                ) : (
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Strength Indicator */}
          <PasswordStrengthIndicator password={newPassword} />

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="block text-xs font-semibold tracking-wider text-[#c3c5d8]"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-[#1e293b] border border-[#434655] rounded-lg px-4 py-3 pr-12 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#0d59f2] focus:border-transparent transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showConfirm ? (
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                ) : (
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                  </svg>
                )}
              </button>
            </div>
            {/* Mismatch error */}
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="text-xs text-red-400 mt-1">Passwords do not match.</p>
            )}
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            loadingText="Updating..."
            className="bg-[#0d59f2] text-white hover:bg-blue-700 flex items-center justify-center gap-2"
            style={{ boxShadow: "0 0 20px rgba(13, 89, 242, 0.2)" }}
          >
            Update Password
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Button>

          <div className="text-center">
            <Link
              href="/login"
              className="text-[#b5c4ff] text-xs font-semibold tracking-wider hover:underline inline-flex items-center gap-1"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
              </svg>
              Return to login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}