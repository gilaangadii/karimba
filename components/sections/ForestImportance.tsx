"use client";

import { Leaf, Droplets, CloudSun, Users } from "lucide-react";
import { forestImportance } from "@/data/statistics";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  leaf: Leaf,
  droplets: Droplets,
  "cloud-sun": CloudSun,
  users: Users,
};

export default function ForestImportance() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_60%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <AnimatedSection>
            <SectionHeading
              title="HUTAN LEBIH DARI SEKADAR POHON."
              titleClassName="text-2xl md:text-3xl lg:text-4xl"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {forestImportance.map((item, index) => {
              const Icon = iconMap[item.icon] || Leaf;
              return (
                <AnimatedSection key={item.number} delay={index * 0.1}>
                  <div className="group p-5 md:p-6 rounded-lg border border-neutral/5 bg-surface-light/50 hover:border-secondary/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-headline text-lg font-bold text-secondary/60">
                        {item.number}
                      </span>
                      <Icon
                        size={18}
                        className="text-secondary/40 group-hover:text-secondary transition-colors"
                      />
                    </div>
                    <h3 className="font-headline text-base md:text-lg font-bold text-neutral mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm font-body text-neutral/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
