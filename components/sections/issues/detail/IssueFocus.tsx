import { Leaf } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { FocusItem } from "@/data/issueDetails";

interface Props {
  eyebrow: string;
  heading: string;
  intro: string;
  items: FocusItem[];
  footerNote?: string;
  source?: string;
  backdropImage?: string;
}

export default function IssueFocus({
  eyebrow,
  heading,
  intro,
  items,
  footerNote,
  source,
  backdropImage,
}: Props) {
  const max = Math.max(
    1,
    ...items.map((item) => {
      const numeric = item.value ? parseFloat(item.value.replace(/[^0-9.]/g, "")) : 0;
      return Number.isFinite(numeric) ? numeric : 0;
    })
  );

  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      {backdropImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('${backdropImage}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B160F]/70 via-[#0B160F]/85 to-[#0B160F]" aria-hidden="true" />
        </>
      )}

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <AnimatedSection>
          <div>
            <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              {eyebrow}
            </p>
            <h2 className="font-headline text-2xl font-bold leading-tight text-[#F4F0E8] md:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-md text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
              {intro}
            </p>
            {footerNote && (
              <div className="mt-6 flex max-w-md items-start gap-3 rounded-xl border border-[rgba(221,234,129,0.25)] bg-black/25 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(221,234,129,0.4)]">
                  <Leaf size={14} className="text-[#DDEA81]" />
                </span>
                <p className="text-[11px] font-body leading-relaxed text-[#F4F0E8]/70">
                  <span className="font-semibold text-[#DDEA81]">Note. </span>
                  {footerNote}
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => {
            const numeric = item.value
              ? parseFloat(item.value.replace(/[^0-9.]/g, ""))
              : NaN;
            const pct =
              item.value && Number.isFinite(numeric) ? (numeric / max) * 100 : null;
            return (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="rounded-xl border border-[rgba(244,240,232,0.12)] bg-[rgba(11,22,15,0.72)] p-4 backdrop-blur-sm md:p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(221,234,129,0.35)] font-headline text-xs font-bold text-[#DDEA81]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-headline text-sm font-bold text-[#F4F0E8] md:text-base">
                        {item.title}
                      </p>
                      {item.note && (
                        <p className="mt-1 text-[11px] font-body leading-relaxed text-[#F4F0E8]/60 md:text-xs">
                          {item.note}
                        </p>
                      )}
                    </div>
                    {item.value && (
                      <p className="shrink-0 font-headline text-base font-bold text-[#DDEA81] md:text-lg">
                        {item.value}
                      </p>
                    )}
                  </div>
                  {pct !== null && (
                    <div className="ml-13 mt-3 h-1.5 overflow-hidden rounded-full bg-white/10 md:ml-[52px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#577831] to-[#DDEA81]"
                        style={{ width: `${Math.max(pct, 6)}%` }}
                      />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
          {source && (
            <p className="text-right text-[10px] font-body text-[#F4F0E8]/40">
              {source}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
