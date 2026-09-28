"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExploreHero() {
  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-explore.png')" }}
        role="img"
        aria-label="Misty tropical forest mountains of Indonesia"
      />
      {/* Cinematic overlays: dark + green tint + readability gradient */}
      <div className="absolute inset-0 bg-[#0B160F]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,52,32,0.35)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B160F]/60 via-transparent to-[#0B160F]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-28 pb-20 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mb-5 text-xs font-body font-semibold uppercase tracking-[0.35em] text-[#F4F0E8]/80 md:text-sm"
        >
          Let's explore Indonesian forests
        </motion.p>

        <h1 className="font-headline font-bold uppercase leading-[1.02]">
          <motion.span
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="block text-4xl text-[#F4F0E8] md:text-7xl lg:text-8xl"
          >
            Discover the Forest
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="block text-4xl font-medium normal-case italic text-[#DDEA81] md:text-7xl lg:text-8xl"
          >
            of Indonesia
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="mx-auto mt-6 max-w-xl text-sm font-body text-[#F4F0E8]/75 md:text-base"
        >
          Explore the ecosystems, wildlife, and stories behind Indonesia&rsquo;s forests.
        </motion.p>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease }}
        href="#intro"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-[#F4F0E8]/60">
          Scroll to explore
        </span>
        <ArrowDown size={14} className="animate-bounce text-[#F4F0E8]/60" />
      </motion.a>
    </section>
  );
}
