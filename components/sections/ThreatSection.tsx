"use client";

import { ArrowRight } from "lucide-react";
import { threats } from "@/data/threats";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ThreatSection() {
  return (
    <section id="issues" className="section-padding bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Berbagai tekanan mengancam ekosistem"
              title="TETAPI HUTAN KITA SEDANG BERUBAH."
              titleClassName="text-2xl md:text-3xl lg:text-4xl"
              className="mb-0"
            />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {threats.map((threat, index) => (
            <AnimatedSection key={threat.id} delay={index * 0.12}>
              <div className="group relative rounded-lg overflow-hidden bg-surface-light border border-neutral/5 hover:border-tertiary/20 transition-all duration-500 h-full">
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-light z-10" />
                  <div className="absolute inset-0 bg-tertiary/5 group-hover:bg-tertiary/10 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-surface-light" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-headline text-3xl md:text-4xl font-bold text-tertiary/30">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-headline text-lg md:text-xl font-bold text-neutral mb-3">
                    {threat.title}
                  </h3>
                  <p className="text-sm font-body text-neutral/60 leading-relaxed mb-4">
                    {threat.description}
                  </p>
                  <button className="flex items-center gap-1.5 text-xs font-body font-medium text-tertiary/80 hover:text-tertiary transition-colors">
                    Pelajari lebih lanjut
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
