import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IssueHero from "@/components/sections/issues/IssueHero";
import IssueCards from "@/components/sections/issues/IssueCards";
import BiggerPicture from "@/components/sections/issues/BiggerPicture";

export const metadata: Metadata = {
  title: "KARIMBA — Issues",
  description:
    "Key issues facing Indonesia's forests: deforestation, forest fires, biodiversity loss, and climate change.",
};

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Navbar />
      <main>
        <IssueHero />
        <IssueCards />
        <BiggerPicture />
      </main>
      <Footer />
    </div>
  );
}
