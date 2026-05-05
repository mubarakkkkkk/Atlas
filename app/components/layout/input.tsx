import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isErrored?: boolean;    
}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`appearance-none block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${className}`}
      {...props}
    />
  );
};

export default Input;