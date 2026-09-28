import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import ForestStats from "@/components/sections/home/ForestStats";
import ForestImportance from "@/components/sections/home/ForestImportance";
import ForestExplorer from "@/components/sections/home/ForestExplorer";
import WildlifeExplorer from "@/components/sections/home/WildlifeExplorer";
import ThreatSection from "@/components/sections/home/ThreatSection";
import DataStory from "@/components/sections/home/DataStory";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page">
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
