"use client";

import { wildlife } from "@/data/wildlife";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WildlifeExplorer() {
  return (
    <section className="section-padding bg-bg-wildlife relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-primary)_0%,_transparent_60%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <AnimatedSection>
            <SectionHeading
              eyebrow="biodiversity is the key to a healthy forest"
              title="WHAT LIVES IN THERE?"
              titleClassName="text-2xl md:text-3xl lg:text-4xl"
              className="mb-0"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-sm font-body text-neutral/50 max-w-xs">
              From every forest, these species maintain the ecological balance.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {wildlife.map((animal, index) => (
            <AnimatedSection key={animal.id} delay={index * 0.08} className="h-full">
              <div className="flex flex-col h-full group overflow-hidden transition-all duration-300 forest-card--glass">
                <div className="relative h-[200px] md:h-[240px] overflow-hidden shrink-0">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-[#DDEA81] bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      {animal.habitat}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow relative z-10 bg-transparent">
                  <h3 className="font-headline text-lg font-bold text-[#F4F0E8] mb-1 group-hover:text-[#DDEA81] transition-colors">
                    {animal.name}
                  </h3>
                  <p className="text-xs font-body text-[#F4F0E8]/70 italic mb-3">
                    {animal.scientificName}
                  </p>
                  <div className="space-y-0.5">
                    <p className="text-[10px] md:text-xs font-body text-[#F4F0E8]/80">
                      <span className="text-[#DDEA81]">Habitat:</span>{" "}
                      {animal.habitat}
                    </p>
                    <p className="text-[10px] md:text-xs font-body text-[#F4F0E8]/80">
                      <span className="text-[#DDEA81]">Role:</span>{" "}
                      {animal.role}
                    </p>
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
