"use client";

import { ArrowRight, Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

/* Shared 1 User 1 Tree CTA — derives its state from the centralized
   participation context. Used by Home and About (same source). */
export default function ParticipationCTA({ className }: { className?: string }) {
  const { user, participated, participate } = useAuth();
  const pathname = usePathname();

  if (!user) {
    return (
      <a href={`/login?next=${encodeURIComponent(pathname)}`} className={cn("campaign-cta", className)}>
        Be Part of the Movement
        <ArrowRight size={14} />
      </a>
    );
  }

  if (participated) {
    return (
      <button
        type="button"
        onClick={participate}
        className={cn(
          "campaign-cta cursor-default opacity-80 saturate-50",
          className
        )}
        aria-label="You have already planted your tree"
      >
        Tree Planted
        <Check size={14} />
      </button>
    );
  }

  return (
    <button type="button" onClick={() => participate()} className={cn("campaign-cta", className)}>
      Be Part of the Movement
      <ArrowRight size={14} />
    </button>
  );
}
