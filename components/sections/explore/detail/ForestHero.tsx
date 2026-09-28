"use client";

import { motion } from "framer-motion";
import { TreePine } from "lucide-react";
import type { Forest } from "@/types";
import type { ForestDetail } from "@/data/forestDetails";

const ease = [0.16, 1, 0.3, 1] as const;

interface Props {
  forest: Forest;
  detail: ForestDetail;
}

export default function ForestHero({ forest, detail }: Props) {
  const stats = [
    { label: "Forest Type", value: forest.ecosystem },
    { label: "Area", value: forest.area },
    ...(forest.biodiversity[0]
      ? [{ label: "Key Species", value: forest.biodiversity[0].name }]
      : []),
    ...detail.extraStats,
  ].slice(0, 5);

  /* Column count follows the actual data — never render empty cells. */
  const gridCols =
    stats.length >= 5
      ? "sm:grid-cols-3 lg:grid-cols-5"
      : stats.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";

  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden">
      {/* Background: image or elegant empty frame */}
      {forest.image ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${forest.image}')` }}
          role="img"
          aria-label={forest.name}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#0B160F] via-[#102419] to-[#0B160F]"
          role="img"
          aria-label="Forest image coming soon"
        >
          <div className="flex flex-col items-center gap-3 rounded-xl border border-[rgba(244,240,232,0.12)] px-8 py-6">
            <TreePine size={28} className="text-[#DDEA81]/50" />
            <span className="text-[10px] font-body uppercase tracking-[0.3em] text-[#F4F0E8]/50">
              Image coming soon
            </span>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-[#0B160F]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B160F]/70 via-transparent to-[#0B160F]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-10 pt-20 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mb-4 flex items-center gap-2 text-[10px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs"
        >
          <span className="h-px w-6 bg-[#DDEA81]/60" />
          Indonesia · {detail.island} · {forest.ecosystem}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease }}
          className="max-w-3xl font-headline text-4xl font-bold uppercase leading-[1.05] text-[#F4F0E8] md:text-6xl"
        >
          {forest.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease }}
          className="mt-3 text-[11px] font-body font-medium uppercase tracking-[0.2em] text-[#F4F0E8]/70 md:text-xs"
        >
          {forest.location} · {forest.area} · {detail.designation}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-4 max-w-2xl text-sm font-body leading-relaxed text-[#F4F0E8]/80 md:text-base"
        >
          {forest.description}
        </motion.p>

        {/* Quick stats bar */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className={`mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[rgba(244,240,232,0.14)] bg-[rgba(244,240,232,0.14)] ${gridCols}`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[rgba(11,22,15,0.82)] px-4 py-4 backdrop-blur-md">
              <dt className="text-[9px] font-body font-semibold uppercase tracking-[0.2em] text-[#DDEA81] md:text-[10px]">
                {stat.label}
              </dt>
              <dd className="mt-1.5 font-headline text-base font-bold leading-snug text-[#F4F0E8] md:text-lg">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
