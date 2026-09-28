"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

interface Props {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function IssueDetailHero({ label, title, subtitle, description, image }: Props) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={title}
      />
      <div className="absolute inset-0 bg-[#0B160F]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B160F]/85 via-[#0B160F]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B160F]/60 via-transparent to-[#0B160F]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-24 pb-20 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mb-4 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="font-headline text-4xl font-bold uppercase leading-[1.05] text-[#F4F0E8] md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="mt-2 font-headline text-2xl font-medium normal-case italic leading-snug md:text-4xl"
        >
          <span className="text-[#F4F0E8]">{subtitle.split(",")[0]}</span>
          {subtitle.includes(",") && (
            <span className="text-[#DDEA81]">,{subtitle.split(",").slice(1).join(",")}</span>
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65, ease }}
          className="mt-5 max-w-xl text-sm font-body leading-relaxed text-[#F4F0E8]/80 md:text-base"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85, ease }}
          className="mt-8"
        >
          <a
            href="#overview"
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
