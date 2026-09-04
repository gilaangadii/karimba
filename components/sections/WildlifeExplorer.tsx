"use client";

import { wildlife } from "@/data/wildlife";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WildlifeExplorer() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-primary)_0%,_transparent_60%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Keanekaragaman hayati adalah jantung"
              title="APA YANG HIDUP DI DALAMNYA?"
              titleClassName="text-2xl md:text-3xl lg:text-4xl"
              className="mb-0"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-sm font-body text-neutral/50 max-w-xs">
              Dari setiap hutan, spesies-spesies ini menjaga keseimbangan
              ekosistem.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {wildlife.map((animal, index) => (
            <AnimatedSection key={animal.id} delay={index * 0.08}>
              <div className="group relative rounded-lg overflow-hidden cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface z-10" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-surface-light" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="font-headline text-base md:text-lg font-bold text-neutral mb-0.5">
                      {animal.name}
                    </h3>
                    <p className="text-[10px] md:text-xs font-body text-neutral/50 italic mb-2">
                      {animal.scientificName}
                    </p>
                    <div className="space-y-0.5">
                      <p className="text-[10px] md:text-xs font-body text-neutral/60">
                        <span className="text-secondary/60">Habitat:</span>{" "}
                        {animal.habitat}
                      </p>
                      <p className="text-[10px] md:text-xs font-body text-neutral/60">
                        <span className="text-secondary/60">Peran:</span>{" "}
                        {animal.role}
                      </p>
                    </div>
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
