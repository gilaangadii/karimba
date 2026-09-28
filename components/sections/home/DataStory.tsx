"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParticipationCTA from "@/components/auth/ParticipationCTA";
import { useAuth } from "@/lib/auth";

/* ============================================================
   DATA STORY → Environmental participation / campaign section
   ------------------------------------------------------------
   Total = preserved base count + unique local participants,
   both from the centralized participation context.
   ============================================================ */

const DIGIT_COUNT = 6;

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const current = useRef(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const from = current.current;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + (target - from) * eased);
      current.current = next;
      setValue(next);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

export default function DataStory() {
  const { totalParticipants } = useAuth();
  const counterRef = useRef<HTMLDivElement>(null);
  const counterInView = useInView(counterRef, { once: true, margin: "-60px" });
  const animatedValue = useCountUp(totalParticipants, counterInView);
  const digits = String(animatedValue).padStart(DIGIT_COUNT, "0").split("");

  return (
    <section
      id="stories"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#0B160F" }}
    >
      {/* Very subtle organic radial light — stays in KARIMBA palette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(87,120,49,0.14)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ---------- CAMPAIGN INTRO ---------- */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-[#F4F0E8]">
              Our Campaign to Protect the Forest
            </h2>
            <p className="mt-3 text-sm md:text-base font-body font-medium text-[#F4F0E8]">
              Every small action can make a difference.
            </p>
            <p className="mt-1 text-xs md:text-sm font-body text-[#F4F0E8]/70">
              Explore simple ways to take part in protecting Indonesia&rsquo;s forests.
            </p>
          </div>
        </AnimatedSection>

        {/* ---------- MAIN ACTION CARD ---------- */}
        <AnimatedSection delay={0.1}>
          <div className="campaign-card mt-10 md:mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="relative min-h-[240px] md:min-h-[320px]">
              <img
                src="/images/image-action.jpg"
                alt="Hands planting a young tree seedling"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="p-7 md:p-10 flex flex-col justify-center">
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase leading-snug text-[#F4F0E8]">
                Grow Something That Matters
              </h3>
              <p className="mt-3 text-sm font-body font-medium text-[#F4F0E8]">
                Take the first step in giving back to nature.
              </p>
              <p className="mt-1 text-xs md:text-sm font-body text-[#F4F0E8]/70 leading-relaxed">
                Plant a virtual tree and become part of KARIMBA&rsquo;s growing forest.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <ParticipationCTA />
                <a
                  href="/about"
                  className="group inline-flex items-center gap-1.5 text-xs font-body font-medium text-[#F4F0E8]/60 transition-colors hover:text-[#DDEA81]"
                >
                  Learn more about the campaign
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ---------- PARTICIPATION ---------- */}
        <AnimatedSection delay={0.15}>
          <div className="text-center max-w-3xl mx-auto mt-12 md:mt-16">
            <h3 className="font-headline text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-tight text-[#F4F0E8]">
              Trees Planted by Karimba Explorers
            </h3>
            <p className="mt-3 text-xs md:text-sm font-body text-[#F4F0E8]/70 leading-relaxed">
              As you can see, our users are awake and actively take part in our global
              initiative by opening our website and caring for the future.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            ref={counterRef}
            className="mt-7 md:mt-8 flex items-center justify-center gap-1.5 max-md:flex-nowrap md:gap-3.5"
            role="status"
            aria-label={`${totalParticipants} trees planted by Karimba explorers`}
          >
            {digits.map((digit, index) => (
              <div key={index} className="participation-tile">
                {digit}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
