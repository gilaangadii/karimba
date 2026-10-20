"use client";

/* ============================================================
   DETAIL NAVBAR — minimal top bar for detail pages
   ------------------------------------------------------------
   Only two controls: a back link to the parent list and the
   language switcher. The main site navigation stays on the
   list pages so detail pages remain focused.
   ============================================================ */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

type DetailNavbarProps = {
  backHref: string;
  context: "explore" | "issues";
};

export default function DetailNavbar({
  backHref,
  context,
}: DetailNavbarProps) {
  const { dict } = useLanguage();
  const text = dict.detailNav;
  const backLabel =
    context === "explore" ? text.backToExplore : text.backToIssues;

  return (
    <nav
      aria-label={text.label}
      className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-bg-navbar/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 md:h-16 md:px-10">
        <Link
          href={backHref}
          aria-label={backLabel}
          className="group inline-flex items-center gap-2 rounded-full border border-neutral/20 bg-black/10 px-3 py-1.5 text-[10px] font-body font-semibold uppercase tracking-[0.16em] text-neutral/75 backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent md:px-4 md:text-[11px]"
        >
          <ArrowLeft
            size={13}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          {text.back}
        </Link>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
