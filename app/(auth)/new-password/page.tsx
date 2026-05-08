import { NewPasswordBranding } from "@/app/components/auth/newPassword/newPasswordBranding";
import { NewPasswordForm } from "@/app/components/auth/newPassword/newPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#11131c] text-[#e1e1ee]">
     
      <main className="grow flex flex-col md:flex-row">
        <NewPasswordBranding />
        <NewPasswordForm />
      </main>
      
    </div>
  );
};

export default ResetPasswordPage;