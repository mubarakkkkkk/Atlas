import React from "react";
import { ForgotPasswordBranding } from "@/app/components/auth/forgotPasswordBranding";

const ForgotPasswordPage = () => {
  return <div className="flex min-h-screen flex-col lg:flex-row overflow-hidden">
    <ForgotPasswordBranding />
    <div className="flex-grow md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">

    </div>
  </div>;
};

export default ForgotPasswordPage