"use client";

import { ArrowRight } from "lucide-react";
import { threats } from "@/data/threats";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* Maps home threat entries to their issue detail pages. */
const threatSlugs: Record<string, string> = {
  deforestasi: "deforestation",
  kebakaran: "forest-fires",
  "kehilangan-biodiversitas": "biodiversity-loss",
};

export default function ThreatSection() {
  return (
    <section id="issues" className="section-padding relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/disaster-background.png')" }}
      />
      <div className="absolute inset-0 bg-bg-hero/85 z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
          <AnimatedSection>
            <h2 className="font-headline text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md uppercase">
              BUT OUR FORESTS ARE <span className="text-[#DDEA81]">CHANGING</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-body font-medium text-white drop-shadow-md">
              Growing pressures are threatening Indonesia's forest ecosystems
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {threats.map((threat, index) => (
            <AnimatedSection key={threat.id} delay={index * 0.12} className="h-full">
              <div className="flex flex-col h-full group overflow-hidden transition-all duration-300 forest-card--glass">
                <div className="relative h-[200px] md:h-[240px] overflow-hidden shrink-0">
                  <img
                    src={threat.image}
                    alt={threat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-[#DDEA81] bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      THREAT
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow relative z-10 bg-transparent">
                  <h3 className="font-headline text-lg font-bold text-[#F4F0E8] mb-1 group-hover:text-[#DDEA81] transition-colors">
                    {threat.title}
                  </h3>
                  <p className="text-xs font-body text-[#F4F0E8]/75 leading-relaxed mb-3">
                    {threat.description}
                  </p>
                  
                  <div className="mt-auto pt-2">
                    <a
                      href={`/issues/${threatSlugs[threat.id] ?? threat.id}`}
                      aria-label={`Learn more about ${threat.title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[#DDEA81] hover:text-[#F8EB8C] transition-colors"
                    >
                      Learn more
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
