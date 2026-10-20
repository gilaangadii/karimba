"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

const statsEn = [
  { value: "51.1%", unit: "", key: "cover" as const },
  { value: "31,031", unit: "", key: "plants" as const },
  { value: "175.4K", unit: "ha", key: "deforestation" as const },
  { value: "95.5M", unit: "ha", key: "area" as const },
];

const statsId = [
  { value: "51,1%", unit: "", key: "cover" as const },
  { value: "31.031", unit: "", key: "plants" as const },
  { value: "175,4 ribu", unit: "ha", key: "deforestation" as const },
  { value: "95,5 juta", unit: "ha", key: "area" as const },
];

export default function ExploreCTA() {
  const { dict, language } = useLanguage();
  const text = dict.explore.cta;
  const stats = language === "id" ? statsId : statsEn;

  return (
    <section className="section-padding bg-bg-hero relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <AnimatedSection>
          <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            {text.eyebrow}
          </p>
          <h2 className="font-headline text-3xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl lg:text-5xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-body text-[#F4F0E8]/70 md:text-sm">
            {text.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-y-8 md:mt-12 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className={
                  index > 0 ? "lg:border-l lg:border-[rgba(244,240,232,0.2)]" : ""
                }
              >
                <p className="font-headline text-4xl max-md:text-3xl font-bold text-[#F4F0E8] md:text-5xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1.5 text-2xl font-bold text-[#577831] md:text-3xl">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="mx-auto mt-2 max-w-[170px] text-[11px] font-body font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#F4F0E8]/60 md:text-xs">
                  {text.stats[stat.key]}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
