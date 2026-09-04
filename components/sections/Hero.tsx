"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ForestGlobe from "@/components/globe/ForestGlobe";
import ForestInfoCard from "@/components/globe/ForestInfoCard";
import { Forest } from "@/types";

export default function Hero() {
  const [selectedForest, setSelectedForest] = useState<Forest | null>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-secondary/80 to-secondary z-10" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-4 items-center min-h-[calc(100vh-8rem)]">
          <div className="order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs md:text-sm font-body font-medium tracking-[0.25em] uppercase text-secondary/80 mb-4 md:mb-6"
            >
              Indonesia&apos;s Forests
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-headline text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-neutral mb-6 md:mb-8"
            >
              KENALI
              <br />
              <span className="text-secondary">HUTANMU.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm md:text-base font-body text-neutral/60 leading-relaxed max-w-md mb-8 md:mb-10"
            >
              Jelajahi hutan Indonesia dan temukan kehidupan, kekayaan, serta
              cerita yang tersembunyi di dalamnya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-3 text-xs font-body text-neutral/40"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                Putar bumi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                Pilih titik
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                Temukan hutan
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-2 relative"
          >
            <div
              className="relative w-full mx-auto lg:max-w-none"
              style={{
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute inset-0 w-full h-full scale-[1.15] lg:scale-[1.3] lg:translate-x-[8%]"
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
                className="absolute top-4 right-0 md:top-8 md:right-[-20px] z-30 w-[calc(100%-2rem)] max-w-sm"
              >
                <ForestInfoCard
                  forest={selectedForest}
                  onClose={() => setSelectedForest(null)}
                  onExplore={() => {}}
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
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
