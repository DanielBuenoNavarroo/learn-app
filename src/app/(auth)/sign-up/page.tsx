import SignUpForm from "@/components/auth/SignUpForm";
import { BrainCircuit } from "lucide-react";

const Page = () => {
  return (
    <div className="relative w-full max-w-md px-6">
      <div className="bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-xl shadow-slate-500/50 dark:shadow-slate-800/50 p-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25 mb-6">
            <BrainCircuit className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-medium tracking-tight mb-2">
            Welcome back
          </h1>
          <p className="text-sm">Sign in to continue</p>
        </div>
        <SignUpForm />
      </div>
      <p className="text-center text-sm text-slate-600 dark:text-stone-300 mt-8">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
};

export default Page;
