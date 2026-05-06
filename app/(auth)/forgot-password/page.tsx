import React from "react";
import { ForgotPasswordBranding } from "@/app/components/auth/forgotPasswordBranding";
import { ArrowLeft, ArrowRight,Mail } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/layout/button";
import Input from "@/app/components/layout/input";

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row overflow-hidden">
      <ForgotPasswordBranding />

      {/* Right panel */}
      <div className="grow md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-[448px] space-y-10">

          {/* Card */}
          <div
            className="rounded-xl p-8 space-y-6"
            style={{
              background: "rgba(30, 41, 59, 0.35)",
              backdropFilter: "blur(12px)",
              border: "1px solid #334155",
            }}
          >
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-on-surface">
                Reset your password
              </h2>
              <p className="text-sm text-on-surface-variant">
                {"Enter your email address and we'll send you a code to reset your password."}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold tracking-widest uppercase text-outline"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg select-none">
                    <Mail size={20} />
                  </span>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="name@company.com"
                    className="pl-12 bg-surface-variant border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container placeholder:text-outline/50"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="bg-primary-container text-on-primary-container hover:brightness-110 active:scale-[0.98]"
                style={{ boxShadow: "0 0 20px rgba(13, 89, 242, 0.15)" }}
              >
                Send Reset Code
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Back link */}
            <div className="pt-4 text-center">
              <Link
                href="./login"
                className="text-on-surface-variant hover:text-primary transition-colors text-sm flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to Sign In
              </Link>
            </div>
          </div>  
         

        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;