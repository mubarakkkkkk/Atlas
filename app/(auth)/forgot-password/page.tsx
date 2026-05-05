import React from "react";
import { ForgotPasswordBranding } from "@/app/components/auth/forgotPasswordBranding";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row overflow-hidden">
      <ForgotPasswordBranding />

      {/* Right panel */}
      <div className="grow md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">

        {/* Card */}
        <div className="w-full max-w-md border border-gray-600 rounded-xl shadow-sm p-8 flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-gray-100">
              Reset your password
            </h1>
            <p className="text-sm text-gray-500">
              {"Enter your email address and we'll send you a code to reset your password."}
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full border-none bg-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />

            <button className="w-full bg-primary text-white py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition">
              Send Reset Code
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Back link */}
          <Link
            href="./login"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition w-fit"
          >
            <ArrowLeft size={15} />
            Back to Sign In
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;