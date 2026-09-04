import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ForestStats from "@/components/sections/ForestStats";
import ForestImportance from "@/components/sections/ForestImportance";
import ForestExplorer from "@/components/sections/ForestExplorer";
import WildlifeExplorer from "@/components/sections/WildlifeExplorer";
import ThreatSection from "@/components/sections/ThreatSection";
import DataStory from "@/components/sections/DataStory";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <ForestStats />
        <ForestImportance />
        <ForestExplorer />
        <WildlifeExplorer />
        <ThreatSection />
        <DataStory />
      </main>
      <Footer />
    </div>
  );
}
