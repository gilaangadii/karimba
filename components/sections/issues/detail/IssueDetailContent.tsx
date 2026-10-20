"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IssueDetailHero from "@/components/sections/issues/detail/IssueDetailHero";
import IssueOverview from "@/components/sections/issues/detail/IssueOverview";
import IssueTrend from "@/components/sections/issues/detail/IssueTrend";
import IssueFocus from "@/components/sections/issues/detail/IssueFocus";
import IssueCardGrid from "@/components/sections/issues/detail/IssueCardGrid";
import type { Issue } from "@/data/issues";
import type { IssueDetail } from "@/data/issueDetails";
import { useLanguage } from "@/lib/i18n";
import { translateIssueDetail } from "@/lib/translateIssueDetail";

export default function IssueDetailContent({
  issue,
  detail,
}: {
  issue: Issue;
  detail: IssueDetail;
}) {
  const { dict, language } = useLanguage();
  const text = dict.issues.detail;
  const localizedDetail = translateIssueDetail(issue.id, detail, language);
  const heroLabel =
    language === "id"
      ? `${text.heroLabelPrefix}: ${localizedDetail.heroLabel}`
      : `${detail.heroLabel} ${text.heroLabelSuffix}`;

  return (
    <>
      <IssueDetailHero
        label={heroLabel}
        title={localizedDetail.title}
        subtitle={localizedDetail.subtitle}
        description={localizedDetail.description}
        image={localizedDetail.image}
      />
      <IssueOverview
        heading={localizedDetail.overviewHeading}
        body={localizedDetail.overviewBody}
        video={localizedDetail.video}
        videoSourceUrl={localizedDetail.videoSourceUrl}
        videoSourceLabel={`${localizedDetail.title} — YouTube`}
        stats={localizedDetail.stats}
        statsSource={localizedDetail.statsSource}
      />
      <IssueTrend
        eyebrow={localizedDetail.trendEyebrow}
        heading={localizedDetail.trendHeading}
        intro={localizedDetail.trendIntro}
        trend={localizedDetail.trend}
      />
      <IssueFocus
        eyebrow={localizedDetail.focusEyebrow}
        heading={localizedDetail.focusHeading}
        intro={localizedDetail.focusIntro}
        items={localizedDetail.focusItems}
        footerNote={localizedDetail.focusFooterNote}
        source={localizedDetail.focusSource}
        backdropImage={localizedDetail.image}
      />
      <IssueCardGrid
        eyebrow={text.driversEyebrow(localizedDetail.title)}
        heading={localizedDetail.driversHeading}
        intro={localizedDetail.driversIntro}
        cards={localizedDetail.drivers}
        dark
      />
      <IssueCardGrid
        eyebrow={text.impactEyebrow}
        heading={localizedDetail.impactsHeading}
        intro={localizedDetail.impactsIntro}
        cards={localizedDetail.impacts}
      />
      <IssueCardGrid
        eyebrow={text.actionEyebrow}
        heading={localizedDetail.actionsHeading}
        intro={localizedDetail.actionsIntro}
        cards={localizedDetail.actions}
        dark
      />
      <section className="bg-bg-page relative overflow-hidden pb-16 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <AnimatedSection>
            <Link
              href="/issues"
              className="inline-flex items-center gap-2 rounded-md border border-[rgba(244,240,232,0.25)] px-5 py-2.5 text-[11px] font-body font-semibold uppercase tracking-[0.15em] text-[#F4F0E8]/80 transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
            >
              <ArrowLeft size={13} />
              {text.back}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
