"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ForestGlobe from "@/components/globe/ForestGlobe";
import ForestInfoCard from "@/components/globe/ForestInfoCard";
import { Forest } from "@/types";

export default function Hero() {
  const [selectedForest, setSelectedForest] = useState<Forest | null>(null);
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-bg-hero/55 z-10" />

      <div className="absolute inset-0 opacity-40 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_80%)]" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 max-md:pt-28 max-md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-4 items-center min-h-[calc(100vh-8rem)]">
          <div className="order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs md:text-sm font-body font-semibold tracking-[0.25em] uppercase text-neutral-light/80 mb-4 md:mb-6"
            >
              Indonesia&apos;s Forests
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
    font-headline
    font-bold
    text-4xl
    md:text-6xl
    lg:text-7xl
    xl:text-[77px]
    leading-none
    tracking-normal
    max-w-[900px]
  "
            >
              <span
                className="
    bg-gradient-to-r
    from-[#67A177]
    via-[#A8C8AE]
    to-[#FFFFFF]
    bg-clip-text
    text-transparent
  "
              >
                THE WILD SIDE
                <br />
                OF INDONESIA.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 text-sm md:text-base font-body font-semibold text-neutral-light/60 leading-relaxed max-w-md mb-8 md:mb-10"
            >
              Explore the beauty of Indonesia’s forests and discover the life
              within.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-3 text-xs font-body font-semibold text-neutral/40"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                Spin the globe
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                Pick a spot
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                Discover the forest
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 relative w-full max-md:mx-auto max-md:max-w-[440px] md:max-lg:mx-auto md:max-lg:max-w-[560px]"
          >
            <div
              className="relative w-full mx-auto lg:max-w-none"
              style={{
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_65%)] opacity-10 pointer-events-none z-0" />
              <div
                className="absolute inset-0 w-full h-full scale-[1.15] lg:scale-[1.3] lg:translate-x-[8%] z-10"
                style={{
                  transformOrigin: "center center",
                }}
              >
                <ForestGlobe
                  selectedForest={selectedForest}
                  onSelectForest={setSelectedForest}
                  className="w-full h-full"
                />
              </div>
            </div>

            {selectedForest && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-0 md:top-8 md:right-[-20px] z-30 w-[calc(100%-2rem)] max-w-sm max-lg:static max-lg:mt-4 max-lg:w-full max-lg:max-w-none"
              >
                <ForestInfoCard
                  forest={selectedForest}
                  onClose={() => setSelectedForest(null)}
                  onExplore={() => router.push(`/explore/${selectedForest.id}`)}
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-neutral/30">
          Scroll
        </span>
        <ChevronDown size={16} className="text-neutral/30" />
      </motion.div>
    </section>
  );
}
