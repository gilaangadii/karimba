import { MoveRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "You Visit",
    description: "Every visit to KARIMBA automatically plants one virtual seed.",
  },
  {
    number: "02",
    title: "A Seed is Planted",
    description: "Your visit adds to our growing forest of change.",
  },
  {
    number: "03",
    title: "The Community Grows",
    description: "More people mean more seeds and greater impact.",
  },
  {
    number: "04",
    title: "A Greener Tomorrow",
    description:
      "Together, we help build a future where Indonesia's forest can thrive.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url('/images/about/bg-about2.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0B160F]/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <AnimatedSection>
            <div>
              <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
                How It Works
              </p>
              <h2 className="max-w-md font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-3xl lg:text-4xl">
                From a Visit to a Growing Forest
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="max-w-sm text-xs font-body leading-relaxed text-[#F4F0E8]/60 md:text-right md:text-sm">
              A simple journey with lasting impact. Every visit counts, and
              together we grow a forest of awareness, knowledge, and action.
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:mt-12 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-3">
          {steps.flatMap((step, index) => [
            <AnimatedSection
              key={step.number}
              delay={index * 0.12}
              className="h-full"
            >
              <div className="group flex h-full flex-col rounded-lg border border-[rgba(244,240,232,0.16)] bg-[rgba(30,52,32,0.55)] p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(221,234,129,0.45)] md:p-6">
                <p className="font-headline text-2xl font-bold text-[#F8EB8C] md:text-3xl">
                  {step.number}
                </p>
                <h3 className="mt-2 font-headline text-base font-bold text-[#F4F0E8] md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>,
            ...(index < steps.length - 1
              ? [
                  <span
                    key={`${step.number}-arrow`}
                    aria-hidden="true"
                    className="flex items-center justify-center text-[#F4F0E8]/60"
                  >
                    <MoveRight size={20} className="rotate-90 lg:rotate-0" />
                  </span>,
                ]
              : []),
          ])}
        </div>
      </div>
    </section>
  );
}
