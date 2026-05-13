import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isErrored?: boolean;
}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`appearance-none block w-full px-4 py-3 border border-primary/20 dark:border-primary/20 bg-background-light dark:bg-background-dark text-foreground dark:text-foreground rounded-lg placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${className}`}
      {...props}
    />
  );
};

export default Input;
