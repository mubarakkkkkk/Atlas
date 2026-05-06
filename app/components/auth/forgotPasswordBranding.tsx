import Image from "next/image";
export function ForgotPasswordBranding() {
  return (
    <div className="hidden md:flex md:w-1/2 relative overflow-hidden items-center justify-center p-12 bg-[#0c0e16]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-tr from-[#11131c] via-transparent to-primary/20" />
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
     
      {/* Content */}
      <div className="relative z-10 max-w-lg">       
        <h1 className="text-5xl font-black leading-tight tracking-tight text-white mb-6">
          Forgot your password? No problem.
        </h1>
        <p className="text-xl font-medium text-[#c3c5d8] mb-8">
          Your assistant is here to help you get back to work.
        </p>
      </div>
    </div>
  );
}