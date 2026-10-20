"use client";

import { ArrowRight, Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* Shared 1 User 1 Tree CTA — derives its state from the centralized
   participation context. Used by Home and About (same source). */
export default function ParticipationCTA({ className }: { className?: string }) {
  const { user, participated, participate } = useAuth();
  const { dict } = useLanguage();
  const pathname = usePathname();

  if (!user) {
    return (
      <a href={`/login?next=${encodeURIComponent(pathname)}`} className={cn("campaign-cta", className)}>
        {dict.home.cta.join}
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
        aria-label={dict.home.cta.plantedAria}
      >
        {dict.home.cta.planted}
        <Check size={14} />
      </button>
    );
  }

  return (
    <button type="button" onClick={() => participate()} className={cn("campaign-cta", className)}>
      {dict.home.cta.join}
      <ArrowRight size={14} />
    </button>
  );
}
