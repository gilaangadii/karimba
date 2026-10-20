import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import DetailNavbar from "@/components/layout/DetailNavbar";
import { issues } from "@/data/issues";
import { issueDetails } from "@/data/issueDetails";
import IssueDetailContent from "@/components/sections/issues/detail/IssueDetailContent";

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
      <DetailNavbar backHref="/issues" context="issues" />
      <main>
        <IssueDetailContent issue={issue} detail={detail} />
      </main>
      <Footer />
    </div>
  );
}
