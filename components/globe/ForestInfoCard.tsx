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
    <div className="globe-info-card p-5 md:p-6 w-full max-w-sm animate-scale-in">
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] font-body font-medium tracking-[0.2em] uppercase text-[#DDEA81] mb-1">
            {forest.ecosystem}
          </p>
          <h3 className="font-headline text-xl md:text-2xl font-bold text-[#F4F0E8] leading-tight">
            {forest.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="text-[#F4F0E8]/50 hover:text-[#F4F0E8] transition-colors p-1"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex items-center gap-2 text-xs font-body text-[#F4F0E8]/75 mb-4">
        <MapPin size={12} className="text-[#DDEA81] shrink-0" />
        <span>{forest.location}</span>
        <span className="text-[#F4F0E8]/25">·</span>
        <TreePine size={12} className="text-[#DDEA81] shrink-0" />
        <span>{forest.area}</span>
      </div>

      <p className="relative z-10 text-sm font-body text-[#F4F0E8]/80 leading-relaxed mb-4">
        {forest.description}
      </p>

      <div className="relative z-10 mb-4">
        <p className="text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-[#F4F0E8]/50 mb-2">
          Biodiversity Highlights
        </p>
        <div className="flex flex-wrap gap-1.5">
          {forest.biodiversity.map((item) => (
            <span
              key={item.name}
              className="text-[11px] font-body px-2 py-1 rounded text-[#F4F0E8] bg-white/5 border border-[rgba(244,240,232,0.14)]"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mb-5">
        <p className="text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-[#F4F0E8]/50 mb-2">
          Major Threat
        </p>
        <div className="flex flex-wrap gap-1.5">
          {forest.threats.map((threat) => (
            <span
              key={threat}
              className="text-[11px] font-body px-2 py-1 rounded text-[#F8EB8C] bg-[rgba(247,175,54,0.12)] border border-[rgba(247,175,54,0.25)]"
            >
              {threat}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onExplore}
        className="relative z-10 w-full flex items-center justify-center gap-2 text-sm font-body font-bold text-[#1E3420] bg-[#C5D182] hover:bg-[#DDEA81] transition-colors py-2.5 rounded-md"
      >
        Explore
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
