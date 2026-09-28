"use client";

import { useState } from "react";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  heading: string;
  body: string[];
  video?: string;
  videoSourceUrl?: string;
  videoSourceLabel?: string;
  stats?: { value: string; unit?: string; label: string }[];
  statsSource?: string;
}

export default function IssueOverview({ heading, body, video, videoSourceUrl, videoSourceLabel, stats, statsSource }: Props) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="overview" className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr_.8fr] lg:gap-8">
        <AnimatedSection>
          <div>
            <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              Overview
            </p>
            <h2 className="font-headline text-2xl font-bold leading-tight text-[#F4F0E8] md:text-4xl">
              {heading}
            </h2>
            {body.map((paragraph, i) => (
              <p
                key={i}
                className="mt-4 text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {video && !videoFailed ? (
            <div>
              <video
                src={video}
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoFailed(true)}
                aria-label={`${heading} — explanatory video`}
                className="aspect-video w-full rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#101A12] object-cover [color-scheme:dark]"
              />
              {videoSourceUrl && (
                <p className="mt-2 text-right text-[10px] font-body text-[#F4F0E8]/45">
                  Video source:{" "}
                  <a
                    href={videoSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#DDEA81] hover:text-[#F8EB8C]"
                  >
                    {videoSourceLabel ?? "YouTube"}
                    <ArrowUpRight size={11} />
                  </a>
                </p>
              )}
            </div>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#101A12]">
              <Clapperboard size={26} className="text-[#DDEA81]/40" />
              <span className="text-[10px] font-body uppercase tracking-[0.3em] text-[#F4F0E8]/45">
                {video ? "Video unavailable" : "Video Coming Soon"}
              </span>
            </div>
          )}
        </AnimatedSection>

        {stats && stats.length > 0 && (
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.12 + i * 0.08}>
                <div className="rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#122217] p-5 text-center">
                  <p className="font-headline text-3xl font-bold text-[#F4F0E8] md:text-4xl">
                    {stat.value}
                    {stat.unit && (
                      <span className="ml-1.5 text-xl font-bold text-[#DDEA81] md:text-2xl">
                        {stat.unit}
                      </span>
                    )}
                  </p>
                  <p className="mx-auto mt-2 max-w-[180px] text-[10px] font-body font-medium leading-snug text-[#F4F0E8]/60 md:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
            {statsSource && (
              <p className="text-[10px] font-body leading-relaxed text-[#F4F0E8]/40">
                {statsSource}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
