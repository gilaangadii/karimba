"use client";

/* ============================================================
   LANGUAGE SWITCHER — sits in the navbar (desktop + mobile)
   Shows the two available languages: ID (default) ⇄ EN.
   ============================================================ */

import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import type { Language } from "@/lib/dictionaries";

const OPTIONS: Language[] = ["id", "en"];

export default function LanguageSwitcher({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const { language, dict, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={dict.lang.switchLabel}
      title={dict.lang.switchLabel}
      className={cn(
        "flex items-center gap-1 rounded-full border border-neutral/20 bg-black/10 py-1 pl-2.5 pr-1 backdrop-blur-sm transition-colors hover:border-neutral/40",
        className
      )}
    >
      <Languages size={14} className="text-neutral/50 shrink-0" aria-hidden="true" />
      {OPTIONS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => {
            setLanguage(code);
            onNavigate?.();
          }}
          aria-pressed={language === code}
          aria-label={dict.lang[code]}
          title={dict.lang[code]}
          className={cn(
            "px-2.5 py-0.5 text-[11px] font-body font-bold tracking-[0.1em] uppercase rounded-full transition-colors duration-300",
            language === code
              ? "bg-accent text-primary shadow-sm"
              : "text-neutral/60 hover:text-accent"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
