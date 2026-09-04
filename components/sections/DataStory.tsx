"use client";

import { dataStory } from "@/data/statistics";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function DataStory() {
  return (
    <section id="stories" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-secondary)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Data membantu kita memahami kondisi"
            title="ANGKA MENCERITAKAN SEBUAH CERITA."
            titleClassName="text-2xl md:text-3xl lg:text-4xl"
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
          {dataStory.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.1}>
              <div
                className={`text-center p-6 rounded-lg border border-neutral/5 bg-surface-light/30 h-full ${
                  index < dataStory.length - 1
                    ? "lg:border-r lg:border-neutral/5"
                    : ""
                }`}
              >
                <p className="text-[10px] md:text-xs font-body font-semibold tracking-[0.15em] uppercase text-neutral/40 mb-4">
                  {item.label}
                </p>

                <p className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">
                  {item.value}
                </p>

                <p className="text-sm font-body text-neutral/60">
                  {item.description}
                </p>

                {item.source && (
                  <p className="text-[10px] font-body text-neutral/30 mt-4">
                    {item.source}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-sm font-body text-neutral/50 mb-6">
              Data membantu kita memahami kondisi dan masa depan hutan Indonesia.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <p className="font-headline text-xl md:text-2xl font-bold text-neutral">
                MENGETAHUI ADALAH LANGKAH PERTAMA.
              </p>
              <button className="flex items-center gap-2 text-sm font-body font-medium text-primary bg-secondary hover:bg-secondary-dark transition-colors px-5 py-2.5 rounded-md whitespace-nowrap">
                Mulai Menjelajah
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
