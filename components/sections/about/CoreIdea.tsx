"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ============================================================
   Demo campaign metrics — replace with backend data later.
   Each entry renders as: value (+ optional unit) + label.
   ============================================================ */
const ABOUT_STATS = [
  { value: 124563, unit: "", label: "Seeds Planted by Users", decimals: 0 },
  { value: 89.4, unit: "ha", label: "Potential Reforestation Coverage", decimals: 1 },
  { value: 12870, unit: "", label: "People Join the Movement", decimals: 0 },
];

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
  const formatted =
    decimals > 0
      ? animated.toFixed(decimals)
      : Math.round(animated).toLocaleString("en-US");
  return <span ref={ref}>{formatted}</span>;
}

export default function CoreIdea() {
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
            aria-label="A young seed growing from the soil"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/about/movie.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B160F]/30 lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:py-20">
          <AnimatedSection>
            <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              Our Core Idea
            </p>
            <h2 className="font-headline text-3xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl lg:text-5xl">
              1 Visit, 1 Seed for a{" "}
              <span className="italic text-[#DDEA81]">Greener Indonesia</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm font-body leading-relaxed text-[#F4F0E8]/70 md:text-base">
              Every time you visit KARIMBA, we plant one seed in real life.
              It&rsquo;s a simple action, but together, it represents a growing
              community that cares about Indonesia&rsquo;s forests.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <dl className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l border-[rgba(244,240,232,0.2)] pl-3 md:pl-4"
                >
                  <dd className="font-headline text-2xl font-bold text-[#F4F0E8] md:text-4xl">
                    <StatValue value={stat.value} decimals={stat.decimals} />
                    {stat.unit && (
                      <span className="ml-1.5 text-lg font-bold text-[#577831] md:text-2xl">
                        {stat.unit}
                      </span>
                    )}
                  </dd>
                  <dt className="mt-1.5 text-[10px] font-body font-medium leading-snug text-[#F4F0E8]/60 md:text-xs">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[10px] font-body text-[#F4F0E8]/40 md:text-[11px]">
              * Estimated based on a standard tree spacing and average
              reforestation area per tree.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
