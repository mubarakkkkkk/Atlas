import { MaterialIcon } from "../ui/MaterialIcon";
import Image from "next/image";

export function ForgotPasswordBranding () {
  return (
    <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden bg-background-dark">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-purple-600/10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-white">
         <Image 
          src='/images/noBg.png'
          alt="Atlas Logo"
          width={200}
          height={80}
        />
        </div>
      </div>
    </div>
  );
}
