"use client";

import { ArrowLeft, ArrowUpRight, ImageOff } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Forest } from "@/types";
import type { ForestDetail } from "@/data/forestDetails";
import { threatDescriptions } from "@/data/forestDetails";
import { threatDescriptionsId } from "@/data/forestDetails.id";
import { useLanguage } from "@/lib/i18n";
import { translateForest } from "@/lib/translate";
import { translateForestDetail } from "@/lib/translateDetail";

/* ---------------- Threats ---------------- */

export function ForestThreats({
  forest,
  detail,
}: {
  forest: Forest;
  detail: ForestDetail;
}) {
  const { dict, language } = useLanguage();
  const text = dict.explore.detail.threats;
  const localizedForest = translateForest(dict, forest);
  const localizedDetail = translateForestDetail(
    forest.id,
    detail,
    language
  );
  const threatText =
    language === "id" ? threatDescriptionsId : threatDescriptions;

  if (forest.threats.length === 0) return null;

  const spotlight = localizedDetail.threatSpotlight ?? {
    label: text.spotlightLabel,
    title: localizedForest.threats[0],
    note:
      threatText[forest.threats[0]] ??
      text.spotlightNote,
  };

  return (
    <section className="section-padding bg-bg-forest relative overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="mb-2 text-center text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            {text.eyebrow}
          </p>
          <h2 className="mx-auto max-w-3xl text-center font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs font-body text-[#F4F0E8]/60 md:text-sm">
            {text.subtitle}
          </p>
        </AnimatedSection>

        {localizedDetail.timeline.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Timeline of documented events */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-[5px] top-2 w-px bg-[rgba(244,240,232,0.15)]"
              />
              <div className="flex flex-col gap-10">
                {localizedDetail.timeline.map((event, i) => {
                  const isLast = i === localizedDetail.timeline.length - 1;
                  return (
                    <AnimatedSection key={`${event.period}-${event.title}`} delay={i * 0.08}>
                      <div className="relative pl-8">
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${
                            isLast ? "bg-[#DDEA81]" : "bg-[#F4F0E8]/40"
                          }`}
                        />
                        <p
                          className={`text-[11px] font-body font-semibold tracking-[0.2em] md:text-xs ${
                            isLast ? "text-[#DDEA81]" : "text-[#F4F0E8]/70"
                          }`}
                        >
                          {event.period}
                        </p>
                        <h3 className="mt-1 font-headline text-lg font-bold text-[#F4F0E8] md:text-xl">
                          {event.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
                          {event.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            {/* Archival record panel (image reserved) */}
            <AnimatedSection delay={0.15}>
              <div className="overflow-hidden rounded-lg border border-[rgba(244,240,232,0.12)] lg:sticky lg:top-24">
                <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1E3420] via-[#2A1D12] to-[#101A12] sm:aspect-[16/10] lg:aspect-[4/5]">
                  {detail.threatImage ? (
                    <img
                      src={detail.threatImage}
                      alt={text.imageAlt(
                        spotlight.title,
                        localizedForest.name
                      )}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <ImageOff size={28} className="text-[#DDEA81]/40" />
                      <span className="text-[10px] font-body uppercase tracking-[0.3em] text-[#F4F0E8]/45">
                        {text.imageComingSoon}
                      </span>
                    </>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-10 md:p-6 md:pt-12">
                    <p className="text-[9px] font-body font-semibold uppercase tracking-[0.22em] text-[#DDEA81] md:text-[10px]">
                      {spotlight.label}
                    </p>
                    <p className="mt-1 font-headline text-base font-bold leading-snug text-[#F4F0E8] md:text-lg">
                      {spotlight.title}
                    </p>
                    <p className="mt-1 text-[11px] font-body leading-relaxed text-[#F4F0E8]/70 md:text-xs">
                      {spotlight.note}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localizedForest.threats.map((threat, i) => (
              <AnimatedSection key={`${threat}-${i}`} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-lg border border-[rgba(247,175,54,0.22)] bg-[rgba(247,175,54,0.06)] p-5">
                  <p className="font-headline text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8EB8C]/60">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-headline text-base font-bold text-[#F4F0E8]">
                    {threat}
                  </h3>
                  {threatText[forest.threats[i]] && (
                    <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                      {threatText[forest.threats[i]]}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Why This Forest Matters ---------------- */

export function ForestImportance({
  forestId,
  detail,
}: {
  forestId: string;
  detail: ForestDetail;
}) {
  const { dict, language } = useLanguage();
  const text = dict.explore.detail.importance;
  const localizedDetail = translateForestDetail(
    forestId,
    detail,
    language
  );

  if (detail.importance.length === 0) return null;
  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] text-center">
        <AnimatedSection>
          <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            {text.eyebrow}
          </p>
          <h2 className="font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-body text-[#F4F0E8]/60 md:text-sm">
            {localizedDetail.importanceSubtitle}
          </p>
        </AnimatedSection>
        <div className="mt-8 grid grid-cols-1 gap-8 text-left sm:grid-cols-3 md:mt-10">
          {localizedDetail.importance.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <p className="font-headline text-base font-bold text-[#DDEA81] md:text-lg">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-headline text-lg font-bold text-[#F4F0E8]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sources ---------------- */

export function ForestSources({ detail }: { detail: ForestDetail }) {
  const { dict } = useLanguage();
  const text = dict.explore.detail.sources;

  if (detail.sources.length === 0) return null;
  return (
    <section className="bg-bg-page relative overflow-hidden pb-4">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimatedSection>
          <div className="rounded-lg border border-[rgba(244,240,232,0.12)] bg-[#101A12] p-5 md:p-6">
            <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#F4F0E8]/45">
              {text.eyebrow}
            </p>
            <ul className="mt-3 space-y-2">
              {detail.sources.map((source) => (
                <li
                  key={`${source.organization}-${source.title}`}
                  className="flex flex-wrap items-center gap-x-2 text-xs font-body text-[#F4F0E8]/70"
                >
                  <span>{source.title} — {source.organization}</span>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#DDEA81] hover:text-[#F8EB8C]"
                    >
                      {text.viewSource}
                      <ArrowUpRight size={12} />
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function ForestCTA() {
  const { dict } = useLanguage();
  const text = dict.explore.detail.cta;

  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <div className="rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#1E3420] px-6 py-10 md:px-12 md:py-12">
            <p className="mx-auto max-w-xl font-headline text-xl font-medium italic leading-relaxed text-[#F4F0E8] md:text-2xl">
              {text.quote}
            </p>
            <p className="mx-auto mt-3 max-w-md text-xs font-body text-[#F4F0E8]/65">
              {text.description}
            </p>
            <div className="mt-7 flex items-center justify-center">
              <a href="/explore" className="campaign-cta">
                <ArrowLeft size={14} />
                {text.back}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
