import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { issues } from "@/data/issues";
import { issueDetails } from "@/data/issueDetails";
import IssueDetailHero from "@/components/sections/issues/detail/IssueDetailHero";
import IssueOverview from "@/components/sections/issues/detail/IssueOverview";
import IssueTrend from "@/components/sections/issues/detail/IssueTrend";
import IssueFocus from "@/components/sections/issues/detail/IssueFocus";
import IssueCardGrid from "@/components/sections/issues/detail/IssueCardGrid";

export function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = issues.find((i) => i.id === slug);
  if (!issue) return { title: "Issue Not Found — KARIMBA" };
  return { title: `${issue.title} — KARIMBA`, description: issue.description };
}

export default async function IssueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = issues.find((i) => i.id === slug);
  const detail = issueDetails[slug];
  if (!issue || !detail) notFound();

  return (
    <div className="min-h-screen bg-bg-page">
      <main>
        <IssueDetailHero
          label={`${detail.heroLabel} Forest Issues`}
          title={detail.title}
          subtitle={detail.subtitle}
          description={detail.description}
          image={detail.image}
        />
        <IssueOverview
          heading={detail.overviewHeading}
          body={detail.overviewBody}
          video={detail.video}
          videoSourceUrl={detail.videoSourceUrl}
          videoSourceLabel={`${detail.title} — YouTube`}
          stats={detail.stats}
          statsSource={detail.statsSource}
        />
        <IssueTrend
          eyebrow={detail.trendEyebrow}
          heading={detail.trendHeading}
          intro={detail.trendIntro}
          trend={detail.trend}
        />
        <IssueFocus
          eyebrow={detail.focusEyebrow}
          heading={detail.focusHeading}
          intro={detail.focusIntro}
          items={detail.focusItems}
          footerNote={detail.focusFooterNote}
          source={detail.focusSource}
          backdropImage={detail.image}
        />
        <IssueCardGrid
          eyebrow={`What Drives ${detail.title}?`}
          heading={detail.driversHeading}
          intro={detail.driversIntro}
          cards={detail.drivers}
          dark
        />
        <IssueCardGrid
          eyebrow="Impact"
          heading={detail.impactsHeading}
          intro={detail.impactsIntro}
          cards={detail.impacts}
        />
        <IssueCardGrid
          eyebrow="Take Action"
          heading={detail.actionsHeading}
          intro={detail.actionsIntro}
          cards={detail.actions}
          dark
        />
        <section className="bg-bg-page relative overflow-hidden pb-16 md:pb-20">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <AnimatedSection>
              <a
                href="/issues"
                className="inline-flex items-center gap-2 rounded-md border border-[rgba(244,240,232,0.25)] px-5 py-2.5 text-[11px] font-body font-semibold uppercase tracking-[0.15em] text-[#F4F0E8]/80 transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
              >
                <ArrowLeft size={13} />
                Back to Issues
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
