"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Forest } from "@/types";
import type { ForestDetail } from "@/data/forestDetails";
import { speciesDescriptions } from "@/data/forestDetails";

/* ---------------- Forest Profile ---------------- */

export function ForestProfile({ detail }: { detail: ForestDetail }) {
  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="mb-2 flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            <span className="h-px w-6 bg-[#DDEA81]/60" />
            Forest Profile
          </p>
          <h2 className="max-w-2xl font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl">
            {detail.profileHeading}
          </h2>
        </AnimatedSection>
        <div className="mt-6 grid max-w-4xl gap-4 md:grid-cols-2 md:gap-8">
          {detail.profile.slice(0, 2).map((paragraph, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
              <p className="text-sm font-body leading-relaxed text-[#F4F0E8]/75">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>
        {detail.profile.slice(2).map((paragraph, i) => (
          <AnimatedSection key={`extra-${i}`} delay={0.25}>
            <p className="mt-4 max-w-3xl text-sm font-body leading-relaxed text-[#F4F0E8]/75">
              {paragraph}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

/* ---------------- At a Glance ---------------- */

export function ForestGlance({
  forest,
  detail,
}: {
  forest: Forest;
  detail: ForestDetail;
}) {
  const items = [
    { label: "Location", value: forest.location },
    { label: "Region", value: `${detail.province} · ${detail.island}` },
    { label: "Forest Type", value: forest.ecosystem },
    { label: "Protection Status", value: detail.designation },
    { label: "Total Area", value: forest.area },
    ...(detail.elevation
      ? [{ label: "Elevation", value: `${detail.elevation} ASL` }]
      : []),
  ];

  return (
    <section className="section-padding bg-bg-forest relative overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            Geographic &amp; Biological Metadata
          </p>
          <h2 className="font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl">
            At a Glance
          </h2>
        </AnimatedSection>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-3">
          {items.map((item, i) => (
            <AnimatedSection key={item.label} delay={(i % 3) * 0.08}>
              <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#F4F0E8]/45 md:text-[11px]">
                {item.label}
              </p>
              <p className="mt-1.5 font-headline text-sm font-bold leading-snug text-[#F4F0E8] md:text-base">
                {item.value}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Short, general descriptions per ecosystem type (shared across forests). */

const ecosystemDescriptions: Record<string, string> = {
  "Lowland Rainforest":
    "Dense evergreen forest of the plains, the most species-rich layer where dipterocarp giants tower over a dark, humid understory.",
  "Montane Rainforest":
    "Moss-draped cloud forest of the high slopes — cooler, wetter, and rich in orchids, tree ferns, and endemic birds.",
  "Montane Forest":
    "Mossy highland forest where clouds linger, rich in orchids, tree ferns, and endemic birds.",
  "Tropical Rainforest":
    "Ever-wet equatorial forest with layered canopies sheltering the greatest concentration of life on land.",
  "Peat Swamp Forest":
    "Waterlogged forest growing on meters of accumulated peat, storing vast ancient carbon beneath orangutan habitat.",
  "Tropical Peat Swamp Forest":
    "Rain-fed peat domes forming a spongy, acidic world found almost nowhere else on Earth.",
  "Mangrove Forest":
    "Salt-tolerant tidal forest nursing fish, crabs, and proboscis monkeys where land meets sea.",
  "Volcanic Highlands":
    "Ash slopes and crater rims where edelweiss and casuarina colonize fresh volcanic ground above the clouds.",
  Savanna:
    "Open grasslands dotted with palms, grazed by deer, banteng, and wallabies beneath wide island skies.",
  "Monsoon Forest":
    "Seasonal forest that sheds its leaves through the long dry months, shaped by fire and drought.",
  "Tropical Monsoon Forest":
    "Seasonal forest that sheds its leaves through the long dry months, shaped by fire and drought.",
  "Dry Monsoon Forest":
    "Drought-hardy forest of thin soils and long dry seasons, home to deer and cockatoos.",
  "Karst Forest":
    "Forest rooted in limestone towers and caves, hiding swiftlets, butterflies, and underground rivers.",
  "Karst & Tropical Forest":
    "Forest rooted in limestone towers and caves, hiding swiftlets, butterflies, and underground rivers.",
  "Freshwater Swamp":
    "Seasonally flooded forest fringing lakes and rivers — a nursery for fish, elephants, and waterbirds.",
  Grasslands:
    "Open grazing grounds held open by wildlife and fire, vital for herds and ground-nesting birds.",
  "Subalpine Meadows":
    "High meadows above the treeline where silver edelweiss blooms among tussock grasses.",
  "Alpine Grasslands":
    "Equatorial alpine meadows beneath the glaciers, roamed by tree-kangaroos and birds of paradise.",
  Wetlands:
    "Floodplains, lakes, and marshes pulsing with the seasons, crowded with waterbirds and wallabies.",
  "Peat Swamp":
    "Waterlogged forest growing on meters of accumulated peat, storing vast ancient carbon.",
};

interface StoryBlock {
  eyebrow: string;
  title: string;
  body: string;
}

/* ---------------- Ecosystem & Life ---------------- */

export function EcosystemLife({
  forest,
  detail,
}: {
  forest: Forest;
  detail: ForestDetail;
}) {
  const slides = useMemo(() => {
    const list: { image: string; label: string; title: string; note: string }[] = [];
    /* Every documented species gets a card; species without photos
       render an elegant empty card instead of being skipped. */
    forest.biodiversity.forEach((b) =>
      list.push({
        image: b.image,
        label: "Key Indicator Species",
        title: `${b.name} (${b.scientificName})`,
        note:
          speciesDescriptions[b.name] ?? "A documented resident of this forest.",
      })
    );
    if (forest.image) {
      list.push({
        image: forest.image,
        label: "The Living Landscape",
        title: forest.name,
        note: forest.ecosystem,
      });
    }
    return list;
  }, [forest]);

  const blocks: StoryBlock[] = useMemo(() => {
    const faunaBody = forest.biodiversity
      .slice(0, 2)
      .map((b) => speciesDescriptions[b.name] ?? "A documented resident of this forest.")
      .join(" ");
    const result: StoryBlock[] = [
      {
        eyebrow: "Keystone Fauna",
        title:
          forest.biodiversity
            .slice(0, 3)
            .map((b) => b.name)
            .join(" · ") || "Documented Wildlife",
        body: faunaBody,
      },
      {
        eyebrow: "Flora & Forest Architecture",
        title:
          detail.flora.length > 0
            ? detail.flora
                .slice(0, 3)
                .map((f) => f.name)
                .join(" · ")
            : "Canopy Architecture",
        body:
          detail.flora.length > 0
            ? detail.flora
                .slice(0, 2)
                .map((f) => f.description)
                .join(" ")
            : "Flora documentation for this forest is still being compiled by KARIMBA.",
      },
      {
        eyebrow: "Ecosystem",
        title: detail.ecosystems.join(" · "),
        body: detail.ecosystems
          .map(
            (eco) =>
              ecosystemDescriptions[eco] ??
              "A living system of this forest, sustaining its wildlife, water, and climate."
          )
          .join(" "),
      },
    ];
    return result;
  }, [forest, detail]);

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    const el = trackRef.current;
    if (!el || slides.length === 0) return;
    const next = Math.min(index + 1, slides.length - 1);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const goPrev = () => {
    const el = trackRef.current;
    if (!el || slides.length === 0) return;
    const prev = Math.max(index - 1, 0);
    el.scrollTo({ left: prev * el.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || slides.length === 0) return;
    setIndex(Math.min(slides.length - 1, Math.round(el.scrollLeft / el.clientWidth)));
  };

  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
            Canopy Dynamics &amp; Keystone Species
          </p>
          <h2 className="max-w-3xl font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl">
            Ecosystem &amp; Life Within the Forest
          </h2>
          <p className="mt-3 max-w-2xl text-xs font-body text-[#F4F0E8]/60 md:text-sm">
            Discover the intricate connections between wildlife, vegetation, and
            the natural systems that sustain life within the forest.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Keystone species showcase */}
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div
                ref={trackRef}
                onScroll={handleScroll}
                className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto rounded-lg border border-[rgba(244,240,232,0.12)]"
              >
                {slides.map((slide) => (
                  <div
                    key={slide.title}
                    className="relative h-[340px] w-full shrink-0 snap-center md:h-[460px]"
                  >
                    {slide.image ? (
                      <img
                        src={slide.image}
                        alt={slide.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1E3420] via-[#2A1D12] to-[#101A12]">
                        <Leaf size={30} className="text-[#DDEA81]/40" />
                        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-[#F4F0E8]/45">
                          Image coming soon
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <p className="text-[9px] font-body font-semibold uppercase tracking-[0.22em] text-[#DDEA81] md:text-[10px]">
                        {slide.label}
                      </p>
                      <p className="mt-1 font-headline text-base font-bold leading-snug text-[#F4F0E8] md:text-lg">
                        {slide.title}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-[11px] font-body text-[#F4F0E8]/70 md:text-xs">
                        {slide.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* No buttons on a single slide; prev hidden on first, next hidden on last */}
              {slides.length > 1 && index > 0 && (
                <button
                  onClick={goPrev}
                  aria-label="Previous showcase image"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(244,240,232,0.35)] bg-black/45 text-[#F4F0E8] backdrop-blur-sm transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
                >
                  <ArrowLeft size={16} />
                </button>
              )}
              {slides.length > 1 && index < slides.length - 1 && (
                <button
                  onClick={goNext}
                  aria-label="Next showcase image"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(244,240,232,0.35)] bg-black/45 text-[#F4F0E8] backdrop-blur-sm transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
                >
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </AnimatedSection>

          {/* Story blocks */}
          <div className="flex flex-col gap-7">
            {blocks.map((block, i) => (
              <AnimatedSection key={block.title} delay={0.12 + i * 0.08}>
                <div className="border-l border-[rgba(244,240,232,0.15)] pl-5">
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#DDEA81] md:text-[11px]">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-1 font-headline text-lg font-bold text-[#F4F0E8] md:text-xl">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
                    {block.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
