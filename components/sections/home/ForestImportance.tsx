"use client";

import { Leaf, Droplets, CloudSun, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ForestImportance() {
  /* === EDITABLE BACKGROUND OVERLAY ===
   * Controls how dark the forest background image appears.
   * Adjust overlayOpacity: "0.0" = fully transparent, "1.0" = fully dark.
   */
  const overlayOpacity = "0.70";

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative flex flex-col justify-between py-10 md:py-14"
        style={{
          backgroundImage: `url('/images/forest-importance.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* === EDITABLE BACKGROUND DARKNESS ===
         * This overlay controls image darkness.
         * Adjust the rgba alpha values below:
         *   First value  = top darkness  (0.0 transparent → 1.0 fully dark)
         *   Second value = bottom darkness
         */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to bottom, rgba(7, 16, 11, ${overlayOpacity}))`
          }}
        />

        {/* CENTER: Main Heading */}
        <AnimatedSection className="max-w-[1440px] mx-auto px-6 text-center z-10">

          {/* === EDITABLE HEADING COLORS ===
           * text-[#F4F0E8] = cream/white color for "FORESTS ARE"
           * text-[#DDEA81] = lime/accent color for "MORE THAN JUST TREES"
           * Change these hex values to customize the two-tone heading.
           */}
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] max-w-3xl mx-auto uppercase">
            <span className="text-[#F4F0E8]">FORESTS ARE MORE </span>

            <span className="text-[#DDEA81]">THAN JUST TREES</span>
          </h2>
        </AnimatedSection>

        {/* BOTTOM: Feature Cards */}
        <div className="max-w-[1440px] mx-auto px-6 w-full z-10 mt-8 md:mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { title: "LIFE", icon: Leaf, desc: "Home to thousands of species." },
              { title: "WATER", icon: Droplets, desc: "Protecting rivers and water sources." },
              { title: "CLIMATE", icon: CloudSun, desc: "Storing carbon and regulating climate." },
              { title: "PEOPLE", icon: Users, desc: "Supporting livelihoods and communities." }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="importance-card--square rounded-5xl p-4 md:p-5 border flex flex-col items-center justify-center text-center h-full min-h-[180px] md:min-h-[200px] group transition-all duration-300">
                  <div className="mb-2 text-[#DDEA81] opacity-100 transition-opacity">
                    <item.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-headline text-sm md:text-base font-bold text-[#F4F0E8] mb-1.5 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="font-body text-[11px] md:text-xs text-[#F4F0E8]/75 leading-relaxed">
                    {item.desc}
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
