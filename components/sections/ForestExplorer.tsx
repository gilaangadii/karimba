"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { forests } from "@/data/forests";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ForestExplorer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="explore" className="section-padding bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Setiap hutan memiliki ekosistem"
              title="KENALI HUTANNYA."
              titleClassName="text-2xl md:text-3xl lg:text-4xl"
              className="mb-0"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-neutral/20 flex items-center justify-center text-neutral/60 hover:border-secondary hover:text-secondary transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-neutral/20 flex items-center justify-center text-neutral/60 hover:border-secondary hover:text-secondary transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {forests.map((forest, index) => (
              <div
                key={forest.id}
                className="flex-none w-[280px] md:w-[320px] snap-start group"
              >
                <div className="relative h-[200px] md:h-[240px] rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90 z-10" />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-surface-light" />

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-secondary/80 bg-surface/60 backdrop-blur-sm px-2 py-1 rounded">
                      {forest.ecosystem}
                    </span>
                  </div>
                </div>

                <div className="px-1">
                  <h3 className="font-headline text-lg font-bold text-neutral mb-1 group-hover:text-secondary transition-colors">
                    {forest.name}
                  </h3>
                  <p className="text-xs font-body text-neutral/50 mb-3">
                    {forest.location}
                  </p>
                  <button className="flex items-center gap-1.5 text-xs font-body font-medium text-secondary/80 hover:text-secondary transition-colors">
                    Jelajahi
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
