"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { TrendData } from "@/data/issueDetails";

interface Props {
  eyebrow: string;
  heading: string;
  intro: string;
  trend: TrendData;
}

export default function IssueTrend({ eyebrow, heading, intro, trend }: Props) {
  const max = Math.max(1, ...trend.rows.map((r) => r.value ?? 0));

  return (
    <section className="section-padding bg-bg-forest relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimatedSection>
          <div>
            <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              {eyebrow}
            </p>
            <h2 className="font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-lg text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
              {intro}
            </p>
            <dl className="mt-6 space-y-2 text-[11px] font-body text-[#F4F0E8]/55">
              <div className="flex gap-2">
                <dt className="font-semibold uppercase tracking-[0.15em]">Metric:</dt>
                <dd>{trend.metric} ({trend.unit})</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold uppercase tracking-[0.15em]">Period:</dt>
                <dd>{trend.period}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold uppercase tracking-[0.15em]">Scope:</dt>
                <dd>{trend.scope}</dd>
              </div>
            </dl>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <div>
            {trend.rows.length === 0 ? (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[rgba(244,240,232,0.2)] bg-black/20 p-8 text-center">
                <Database size={24} className="text-[#DDEA81]/50" />
                <p className="font-headline text-base font-bold text-[#F4F0E8]">
                  Data not yet available
                </p>
                <p className="max-w-sm text-xs font-body leading-relaxed text-[#F4F0E8]/60">
                  {trend.note ??
                    "Verified yearly values will appear here once published by the source below."}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {trend.rows.map((row, i) => (
                  <div key={row.label}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-3">
                      <p className="text-xs font-body font-medium text-[#F4F0E8]/75">
                        <span className="mr-2 font-headline font-bold text-[#DDEA81]/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {row.label}
                      </p>
                      <p className="shrink-0 font-headline text-sm font-bold text-[#F4F0E8] md:text-base">
                        {row.display}
                      </p>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((row.value ?? 0) / max) * 100}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-[#577831] to-[#DDEA81]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <p className="mt-5 text-[10px] font-body leading-relaxed text-[#F4F0E8]/40">
              Source: {trend.source}
              {trend.note && trend.rows.length > 0 && (
                <span className="mt-1 block">{trend.note}</span>
              )}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
