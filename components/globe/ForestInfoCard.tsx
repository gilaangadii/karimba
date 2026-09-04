"use client";

import { Forest } from "@/types";
import { MapPin, TreePine, ArrowRight, X } from "lucide-react";

interface ForestInfoCardProps {
  forest: Forest;
  onClose: () => void;
  onExplore: () => void;
}

export default function ForestInfoCard({
  forest,
  onClose,
  onExplore,
}: ForestInfoCardProps) {
  return (
    <div className="glass rounded-xl p-5 md:p-6 w-full max-w-sm animate-scale-in">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] font-body font-medium tracking-[0.2em] uppercase text-secondary/80 mb-1">
            {forest.ecosystem}
          </p>
          <h3 className="font-headline text-xl md:text-2xl font-bold text-neutral leading-tight">
            {forest.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="text-neutral/40 hover:text-neutral transition-colors p-1"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-xs font-body text-neutral/60 mb-4">
        <MapPin size={12} className="text-secondary/60" />
        <span>{forest.location}</span>
        <span className="text-neutral/20">·</span>
        <TreePine size={12} className="text-secondary/60" />
        <span>{forest.area}</span>
      </div>

      <p className="text-sm font-body text-neutral/70 leading-relaxed mb-4">
        {forest.description}
      </p>

      <div className="mb-4">
        <p className="text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-neutral/40 mb-2">
          Biodiversitas Unggulan
        </p>
        <div className="flex flex-wrap gap-1.5">
          {forest.biodiversity.map((item) => (
            <span
              key={item.name}
              className="text-[11px] font-body px-2 py-1 rounded bg-primary-light/50 text-neutral/80 border border-neutral/5"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-neutral/40 mb-2">
          Ancaman Utama
        </p>
        <div className="flex flex-wrap gap-1.5">
          {forest.threats.map((threat) => (
            <span
              key={threat}
              className="text-[11px] font-body px-2 py-1 rounded bg-tertiary/10 text-tertiary/80 border border-tertiary/10"
            >
              {threat}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onExplore}
        className="w-full flex items-center justify-center gap-2 text-sm font-body font-medium text-primary bg-secondary hover:bg-secondary-dark transition-colors py-2.5 rounded-md"
      >
        Jelajahi Hutan
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
