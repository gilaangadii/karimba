import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExploreHero from "@/components/sections/explore/ExploreHero";
import RegionExplorer from "@/components/sections/explore/RegionExplorer";
import ExploreCTA from "@/components/sections/explore/ExploreCTA";

export const metadata: Metadata = {
  title: "KARIMBA — Explore",
  description:
    "Find a forest to explore: choose a region of Indonesia and discover extraordinary forests.",
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Navbar />
      <main>
        <ExploreHero />
        <RegionExplorer />
        <ExploreCTA />
      </main>
      <Footer />
    </div>
  );
}
