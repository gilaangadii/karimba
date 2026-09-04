"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  titleClassName?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  titleClassName,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-12",
        align === "center" && "text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-xs md:text-sm font-body font-medium tracking-[0.2em] uppercase text-secondary mb-3 md:mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-neutral",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
}
