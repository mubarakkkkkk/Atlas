"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PasswordStrengthIndicator } from "@/app/components/auth/newPassword/passwordStrengthIndicator";
import Button from "@/app/components/layout/button";
import Input from "@/app/components/layout/input";

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
              <Input
                id="new-password"
                type={showNew ? "text" : "password"}
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full bg-[#1e293b] border border-[#434655] rounded-lg px-4 py-3 pr-12 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                aria-label={showNew ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showNew ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
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
              <Input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-[#1e293b] border border-[#434655] rounded-lg px-4 py-3 pr-12 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showConfirm ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="text-xs text-red-400 mt-1">Passwords do not match.</p>
            )}
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            loadingText="Updating..."
            className="bg-primary text-white hover:bg-blue-700 flex items-center justify-center gap-2"
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