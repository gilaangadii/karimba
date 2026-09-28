"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function IssueHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-issues.jpg')" }}
        role="img"
        aria-label="Forest fire smoke rising over Indonesia's tropical forest"
      />
      <div className="absolute inset-0 bg-[#0B160F]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B160F]/85 via-[#0B160F]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B160F]/60 via-transparent to-[#0B160F]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-28 pb-20 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mb-5 flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#DDEA81]" />
          Indonesia&rsquo;s Forest Issues
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="max-w-3xl font-headline text-4xl font-bold uppercase leading-[1.05] md:text-6xl lg:text-7xl"
        >
          <span className="block text-[#F4F0E8]">When the Forest</span>
          <span className="block text-[#DDEA81]">Begins to Change</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mt-6 max-w-xl border-l border-[rgba(221,234,129,0.4)] pl-4 text-sm font-body leading-relaxed text-[#F4F0E8]/80 md:text-base"
        >
          Indonesian tropical rainforests sustain immense global biodiversity,
          yet face interconnected pressures of conversion, climate anomalies,
          and habitat fragmentation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="mt-8"
        >
          <a
            href="#challenges"
            className="inline-flex items-center gap-2 rounded-md border border-[rgba(244,240,232,0.25)] px-4 py-2.5 text-[11px] font-body font-semibold uppercase tracking-[0.2em] text-[#F4F0E8]/80 transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
          >
            Scroll to Explore
            <ArrowDown size={13} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
