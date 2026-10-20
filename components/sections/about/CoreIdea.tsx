"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

/* ============================================================
   Demo campaign metrics — replace with backend data later.
   Each entry renders as: value (+ optional unit) + label.
   ============================================================ */
const ABOUT_STATS = [
  { key: "seeds", value: 124563, unit: "", decimals: 0 },
  { key: "coverage", value: 89.4, unit: "ha", decimals: 1 },
  { key: "people", value: 12870, unit: "", decimals: 0 },
] as const;

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatValue({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const animated = useCountUp(value, inView);
  const { language } = useLanguage();
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(language === "id" ? "id-ID" : "en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [language, decimals]
  );
  const formatted = formatter.format(animated);
  return <span ref={ref}>{formatted}</span>;
}

export default function CoreIdea() {
  const { dict } = useLanguage();
  const text = dict.about.coreIdea;

  return (
    <section id="core-idea" className="bg-bg-page relative overflow-hidden">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[560px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={text.videoAria}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/about/movie.mp4" type="video/mp4" /> {/* Source: https://id.wikipedia.org/wiki/Hutan */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B160F]/30 lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:py-20">
          <AnimatedSection>
            <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              {text.eyebrow}
            </p>
            <h2 className="font-headline text-3xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl lg:text-5xl">
              {text.titleLead}
              <span className="italic text-[#DDEA81]">{text.titleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm font-body leading-relaxed text-[#F4F0E8]/70 md:text-base">
              {text.body}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <dl className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.key}
                  className="border-l border-[rgba(244,240,232,0.2)] pl-3 md:pl-4"
                >
                  <dd className="font-headline text-2xl max-md:text-xl font-bold text-[#F4F0E8] md:text-4xl">
                    <StatValue value={stat.value} decimals={stat.decimals} />
                    {stat.unit && (
                      <span className="ml-1.5 text-lg font-bold text-[#577831] md:text-2xl">
                        {stat.unit}
                      </span>
                    )}
                  </dd>
                  <dt className="mt-1.5 text-[10px] font-body font-medium leading-snug text-[#F4F0E8]/60 md:text-xs">
                    {text.stats[stat.key]}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[10px] font-body text-[#F4F0E8]/40 md:text-[11px]">
              {text.disclaimer}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
