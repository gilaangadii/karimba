import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { forests } from "@/data/forests";
import { forestDetails } from "@/data/forestDetails";
import ForestHero from "@/components/sections/explore/detail/ForestHero";
import {
  ForestProfile,
  ForestGlance,
  EcosystemLife,
} from "@/components/sections/explore/detail/ForestSections";
import {
  ForestThreats,
  ForestImportance,
  ForestSources,
  ForestCTA,
} from "@/components/sections/explore/detail/ForestClosing";

export function generateStaticParams() {
  return forests.map((forest) => ({ slug: forest.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const forest = forests.find((f) => f.id === slug);
  if (!forest) return { title: "Forest Not Found — KARIMBA" };
  return {
    title: `${forest.name} — KARIMBA`,
    description: forest.description,
  };
}

export default async function ForestDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const forest = forests.find((f) => f.id === slug);
  if (!forest) notFound();
  const detail = forestDetails[forest.id];
  if (!detail) notFound();

  return (
    <div className="min-h-screen bg-bg-page">
      <main>
        <ForestHero forest={forest} detail={detail} />
        <ForestProfile detail={detail} />
        <ForestGlance forest={forest} detail={detail} />
        <EcosystemLife forest={forest} detail={detail} />
        <ForestThreats forest={forest} detail={detail} />
        <ForestImportance detail={detail} />
        <ForestSources detail={detail} />
        <ForestCTA />
      </main>
      <Footer />
    </div>
  );
}
