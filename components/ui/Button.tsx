"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted" | "outlined";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary text-neutral border border-primary hover:bg-primary-light": variant === "primary",
            "bg-secondary text-primary border border-secondary hover:bg-secondary-dark": variant === "secondary",
            "bg-neutral text-primary border border-neutral hover:bg-neutral-dark": variant === "inverted",
            "bg-transparent text-neutral border border-neutral/30 hover:border-secondary hover:text-secondary": variant === "outlined",
          },
          {
            "text-xs px-3 py-1.5 rounded": size === "sm",
            "text-sm px-5 py-2.5 rounded-md": size === "md",
            "text-sm px-6 py-3 rounded-md": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
