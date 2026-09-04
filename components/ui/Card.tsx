"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "dark";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg overflow-hidden",
          {
            "bg-surface-light border border-neutral/10": variant === "default",
            "glass": variant === "glass",
            "bg-surface border border-neutral/5": variant === "dark",
          },
          hover && "transition-all duration-300 hover:border-secondary/30 hover:translate-y-[-2px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
