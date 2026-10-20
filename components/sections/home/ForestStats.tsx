"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

export default function ForestStats() {
  const { dict } = useLanguage();

  return (
    <section id="discover" className="bg-[#101c12] border-b border-white/5 py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
        {/* LEFT: Statistics */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-10 lg:gap-14">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-8 md:gap-10 lg:gap-14">
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#F4F0E8] font-bold leading-none mb-2">
                  124,97M
                </span>
                <span className="font-body text-[10px] md:text-xs text-[#F4F0E8]/40 uppercase tracking-[0.2em] font-bold leading-tight">
                  {dict.home.stats.hectares}
                </span>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/10" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-8 md:gap-10 lg:gap-14">
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#F4F0E8] font-bold leading-none mb-2">
                  17.380
                </span>
                <span className="font-body text-[10px] md:text-xs text-[#F4F0E8]/40 uppercase tracking-[0.2em] font-bold leading-tight">
                  {dict.home.stats.islands}
                </span>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/10" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-8 md:gap-10 lg:gap-14">
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#F4F0E8] font-bold leading-none mb-2">
                  775.750
                </span>
                <span className="font-body text-[10px] md:text-xs text-[#F4F0E8]/40 uppercase tracking-[0.2em] font-bold leading-tight">
                  {dict.home.stats.species}
                </span>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/10" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col">
              <span className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#F4F0E8] font-bold leading-none mb-2">
                4
              </span>
              <span className="font-body text-[10px] md:text-xs text-[#F4F0E8]/40 uppercase tracking-[0.2em] font-bold leading-tight">
                {dict.home.stats.ecosystems}
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT: Editorial Headline */}
        <AnimatedSection delay={0.2}>
          <div className="lg:max-w-sm text-left lg:text-right shrink-0">
            <span className="font-body text-[10px] md:text-xs text-[#DDEA81] uppercase tracking-[0.2em] font-bold block mb-2 opacity-60">
              {dict.home.stats.eyebrow}
            </span>
            {/* === EDITABLE TEXT COLORS ===
             * text-[#F4F0E8] = cream/white color for main text
             * text-[#DDEA81] = lime/accent color for highlighted text
             */}
            <h2 className="font-headline text-2xl md:text-4xl lg:text-4xl font-bold leading-tight uppercase">
              <span className="text-[#F4F0E8]">{dict.home.stats.titleLead}</span>
              <br className="hidden lg:block" />
              {" "}<span className="text-[#DDEA81]">{dict.home.stats.titleHighlight}</span>
            </h2>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
