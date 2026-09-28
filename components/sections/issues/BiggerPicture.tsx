import AnimatedSection from "@/components/ui/AnimatedSection";
import { impactLenses } from "@/data/issues";

export default function BiggerPicture() {
  return (
    <section className="section-padding bg-bg-forest relative overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <AnimatedSection>
          <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            Understanding the Bigger Picture
          </p>
          <h2 className="max-w-2xl font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-3xl lg:text-4xl">
            When the Forest Changes, Life Changes Too
          </h2>
          <span aria-hidden="true" className="mt-5 block h-px w-16 bg-[#DDEA81]/70" />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {impactLenses.map((lens, index) => (
            <AnimatedSection key={lens.title} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#122217] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(221,234,129,0.35)]">
                <div className="relative h-[150px] shrink-0 overflow-hidden">
                  <img
                    src={lens.image}
                    alt={lens.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 font-headline text-sm font-bold text-[#F4F0E8]/90">
                    {lens.number}
                  </span>
                </div>
                <div className="flex grow flex-col p-4 md:p-5">
                  <h3 className="font-headline text-base font-bold uppercase tracking-wide text-[#F4F0E8]">
                    {lens.title}
                  </h3>
                  <p className="mb-4 mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                    {lens.description}
                  </p>
                  <p className="mt-auto border-t border-[rgba(244,240,232,0.1)] pt-3 text-[9px] font-body font-semibold uppercase tracking-[0.18em] text-[#DDEA81]/70">
                    {lens.label}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
