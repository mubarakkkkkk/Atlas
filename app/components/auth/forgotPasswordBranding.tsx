import Image from "next/image";

export function ForgotPasswordBranding () {
  return (
    <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden bg-background-dark">
     
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/20 via-transparent to-purple-600/10 pointer-events-none" />
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
        <div className="text-white p-4 justify-center items-center flex-col">
          <h1 className="text-6xl font-bold">
            Forgot your password? <br />
            No problem.
          </h1>
          <h2 className="text-xl p-2 text-gray-400">
            Your assistant is here to help you get back to work.
          </h2>
        </div>
      </div>
    </div>
  );
}
