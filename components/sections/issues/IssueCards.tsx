import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { issues } from "@/data/issues";
import { cn } from "@/lib/utils";

export default function IssueCards() {
  return (
    <section id="challenges" className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <AnimatedSection>
          <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            The Main Challenges
          </p>
          <h2 className="max-w-3xl font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-3xl lg:text-4xl">
            Key Issues Facing Indonesia&rsquo;s Forests
          </h2>
          <p className="mt-3 max-w-xl text-xs font-body text-[#F4F0E8]/60 md:text-sm">
            Three systemic pressures altering the integrity of the
            archipelago&rsquo;s forest canopy.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-12 md:gap-6">
          {issues.map((issue, index) => {
            const large = index % 2 === 0;
            return (
              <AnimatedSection
                key={issue.id}
                delay={(index % 2) * 0.1}
                className={cn(large ? "md:col-span-7" : "md:col-span-5")}
              >
                <a
                  href={`/issues/${issue.id}`}
                  aria-label={`Learn more about ${issue.title}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#122217] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(221,234,129,0.35)] focus-visible:outline-2 focus-visible:outline-[#DDEA81]"
                >
                  <div className={cn("relative shrink-0 overflow-hidden", large ? "h-[220px] md:h-[280px]" : "h-[220px] md:h-[240px]")}>
                    <img
                      src={issue.image}
                      alt={issue.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    {index === 0 && (
                      <span className="absolute left-4 top-4 z-10 rounded bg-black/50 px-2 py-1 text-[9px] font-body font-semibold uppercase tracking-[0.2em] text-[#DDEA81] backdrop-blur-sm">
                        Primary Threat
                      </span>
                    )}
                  </div>

                  <div className="flex grow flex-col p-5 md:p-6">
                    <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#DDEA81]/80 md:text-[11px]">
                      {issue.number} {issue.category}
                    </p>
                    <h3
                      className={cn(
                        "mt-2 font-headline font-bold leading-snug text-[#F4F0E8] transition-colors group-hover:text-[#DDEA81]",
                        large ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                      )}
                    >
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
                      {issue.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1.5 pt-4 text-[11px] font-body font-semibold uppercase tracking-[0.15em] text-[#DDEA81]">
                      Learn More
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
