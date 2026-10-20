"use client";

import { Fragment } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

const PILLAR_IMAGES = [
  "/images/about/education.jpg", //https://id.wikipedia.org/wiki/Pendidikan
  "/images/about/explore.png", //https://id.wikipedia.org/wiki/Hutan_hujan_tropika
  "/images/about/action.png", //https://id.wikipedia.org/wiki/Aktivisme_lingkungan_hidup
];

export default function OurPurpose() {
  const { dict } = useLanguage();
  const text = dict.about.purpose;

  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <AnimatedSection>
          <div>
            <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              {text.eyebrow}
            </p>
            <h2 className="font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-3xl lg:text-4xl">
              {text.titleLines.map((line, index) => (
                <Fragment key={line}>
                  {line}
                  {index < text.titleLines.length - 1 && <br />}
                </Fragment>
              ))}
            </h2>
            <p className="mt-4 max-w-sm text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
              {text.body}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {text.pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[rgba(244,240,232,0.12)] bg-[#122217] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(221,234,129,0.35)]">
                <div className="relative h-[150px] shrink-0 overflow-hidden md:h-[170px]">
                  <img
                    src={PILLAR_IMAGES[index]}
                    alt={pillar.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="flex grow flex-col p-4 md:p-5">
                  <h3 className="font-headline text-base font-bold uppercase tracking-wide text-[#F4F0E8]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                    {pillar.description}
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
