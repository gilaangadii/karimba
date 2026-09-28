import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import CoreIdea from "@/components/sections/about/CoreIdea";
import HowItWorks from "@/components/sections/about/HowItWorks";
import OurPurpose from "@/components/sections/about/OurPurpose";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "KARIMBA — About",
  description:
    "KARIMBA is a digital space to explore, learn, and take action for Indonesia's forests. One visit, one seed for a greener Indonesia.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Navbar />
      <main>
        <AboutHero />
        <CoreIdea />
        <HowItWorks />
        <OurPurpose />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
