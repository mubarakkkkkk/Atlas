import { VerifyEmailBranding } from "@/app/components/auth/verifyEmail/verifyEmailBranding";
import { VerifyEmailForm } from "@/app/components/auth/verifyEmail/verifyEmailForm";


const VerifyEmailPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#11131c] text-[#e1e1ee]">
     
      <main className="grow flex flex-col md:flex-row">
        <VerifyEmailBranding />
        <VerifyEmailForm />
      </main>
     
    </div>
  );
};

export default VerifyEmailPage;