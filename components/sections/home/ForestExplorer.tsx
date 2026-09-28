"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, TreePine } from "lucide-react";
import { forests } from "@/data/forests";
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
    <section id="explore" className="section-padding bg-bg-explorer">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
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

          <AnimatedSection>
            <div className="text-left md:text-right">
              <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-neutral leading-tight uppercase">
                GET TO KNOW <span className="text-[#DDEA81]">THE FOREST</span>
              </h2>
              <p className="text-xs md:text-sm font-body text-neutral/50 mt-2">
                Every forest has its own ecosystem, wildlife, and story to tell.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {forests.map((forest) => {
              // Unified styling: all explorer cards share the same elegant dark glass treatment.
              // Content (image, name, location, tags, Explore) is untouched — only the card
              // container finish is consistent.
              const cardContainerClasses = "flex-none w-[280px] md:w-[320px] snap-start group overflow-hidden transition-all duration-300 forest-card--glass";
              const cardImageContainerClasses = "relative overflow-hidden h-[200px] md:h-[240px]";
              const cardContentClasses = "p-5 relative z-10 bg-transparent";
              const titleColorClass = "text-[#F4F0E8] group-hover:text-[#DDEA81]";
              const locationColorClass = "text-[#F4F0E8]/72";
              const tagColorClasses = "text-[#DDEA81] bg-black/40 backdrop-blur-sm";
              const exploreBtnClasses = "text-[#DDEA81] hover:text-[#F8EB8C]";

              return (
                <div
                  key={forest.id}
                  className={cardContainerClasses}
                >
                  <div className={cardImageContainerClasses}>
                    {forest.image ? (
                      <img
                        src={forest.image}
                        alt={forest.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E3420] via-[#3A2D19] to-[#101A12]">
                        <TreePine size={40} className="text-[#DDEA81]/40" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/35 z-10" />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />

                    <div className="absolute bottom-4 left-4 z-20">
                      <span className={`text-[10px] font-body font-medium tracking-[0.15em] uppercase px-2 py-1 rounded ${tagColorClasses}`}>
                        {forest.ecosystem}
                      </span>
                    </div>
                  </div>

                  <div className={cardContentClasses}>
                    <h3 className={`font-headline text-lg font-bold mb-1 transition-colors ${titleColorClass}`}>
                      {forest.name}
                    </h3>
                    <p className={`text-xs font-body mb-3 ${locationColorClass}`}>
                      {forest.location}
                    </p>
                    <a
                      href={`/explore/${forest.id}`}
                      aria-label={`Explore ${forest.name}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-body font-medium transition-colors ${exploreBtnClasses}`}
                    >
                      Explore
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
