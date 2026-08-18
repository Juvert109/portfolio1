import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#D62828] text-white hover:bg-[#b02020] shadow-sm hover:shadow-md",

    secondary:
      "bg-[#003049] text-white hover:bg-[#002133] border border-[#003049]",

    tertiary:
      "bg-transparent text-[#F77F00] hover:text-[#D62828] hover:underline px-0 py-0 rounded-none",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:ring-offset-2 px-5 py-2 rounded-lg text-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}