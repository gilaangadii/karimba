"use client";

import { statistics } from "@/data/statistics";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ForestStats() {
  return (
    <section id="discover" className="section-padding bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Seberapa kenal kamu"
              title="DENGAN HUTAN INDONESIA?"
              titleClassName="text-2xl md:text-3xl lg:text-4xl"
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div
                  className={`${
                    index < statistics.length - 1
                      ? "md:border-r md:border-neutral/10 md:pr-8"
                      : ""
                  }`}
                >
                  <p className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs font-body font-semibold tracking-[0.15em] uppercase text-neutral/50">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
