import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

const Button = ({
  isLoading = false,
  loadingText = "Loading...",
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
