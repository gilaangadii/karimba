"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search, TreePine, X } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { forests } from "@/data/forests";
import { cn } from "@/lib/utils";

type Region =
  | "All Regions"
  | "Sumatra"
  | "Java"
  | "Kalimantan"
  | "Sulawesi"
  | "Nusa Tenggara"
  | "Maluku"
  | "Papua";

const regions: Region[] = [
  "All Regions",
  "Sumatra",
  "Java",
  "Kalimantan",
  "Sulawesi",
  "Nusa Tenggara",
  "Maluku",
  "Papua",
];

/* Forest → region mapping (derived from existing location data). */
const forestRegion: Record<string, Exclude<Region, "All Regions">> = {
  leuser: "Sumatra",
  "kerinci-seblat": "Sumatra",
  "tanjung-puting": "Kalimantan",
  sebangau: "Kalimantan",
  lorentz: "Papua",
  "way-kambas": "Sumatra",
  "gunung-leuser": "Sumatra",
  "ujung-kulon": "Java",
  "bromo-tengger-semeru": "Java",
  baluran: "Java",
  "gede-pangrango": "Java",
  "betung-kerihun": "Kalimantan",
  "kayan-mentarang": "Kalimantan",
  "lore-lindu": "Sulawesi",
  "bogani-nani-wartabone": "Sulawesi",
  bantimurung: "Sulawesi",
  "rawa-aopa": "Sulawesi",
  komodo: "Nusa Tenggara",
  kelimutu: "Nusa Tenggara",
  rinjani: "Nusa Tenggara",
  "laiwangi-wanggameti": "Nusa Tenggara",
  manusela: "Maluku",
  "aketajawe-lolobata": "Maluku",
  wasur: "Papua",
};

/* Region map icons from public/images/maps-icon/. */
const regionIconSrc: Record<Region, string> = {
  "All Regions": "/images/maps-icon/indonesia.png",
  Sumatra: "/images/maps-icon/sumatra.png",
  Java: "/images/maps-icon/jawa.png",
  Kalimantan: "/images/maps-icon/kalimantan.png",
  Sulawesi: "/images/maps-icon/sulawesi.png",
  "Nusa Tenggara": "/images/maps-icon/nusa_tenggara.png",
  Maluku: "/images/maps-icon/maluku.png",
  Papua: "/images/maps-icon/papua.png",
};

function RegionIcon({ region }: { region: Region }) {
  return (
    <img
      src={regionIconSrc[region]}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="h-7 w-11 object-contain md:h-8 md:w-12"
    />
  );
}

export default function RegionExplorer() {
  const [region, setRegion] = useState<Region>("All Regions");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  /* Smart search: match name, location, ecosystem, species, or threats —
     combined with the selected region filter. */
  const normalizedQuery = query.trim().toLowerCase();
  const visible = forests.filter((f) => {
    if (region !== "All Regions" && forestRegion[f.id] !== region) return false;
    if (!normalizedQuery) return true;
    const haystack = [
      f.name,
      f.location,
      f.ecosystem,
      f.area,
      ...f.biodiversity.map((b) => `${b.name} ${b.scientificName}`),
      ...f.threats,
    ]
      .join(" ")
      .toLowerCase();
    return normalizedQuery
      .split(/\s+/)
      .every((word) => haystack.includes(word));
  });

  /* Reset scroll + indicator when the region or search changes. */
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    setActiveIndex(0);
  }, [region, normalizedQuery]);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || visible.length === 0) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    setActiveIndex(Math.min(visible.length - 1, Math.round(el.scrollLeft / step)));
  };

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    el.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* ---------- Heading ---------- */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <AnimatedSection>
            <div>
              <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#F4F0E8]/60 md:text-xs">
                Explore by Region
              </p>
              <h2 className="font-headline text-2xl font-bold uppercase leading-tight md:text-3xl lg:text-4xl">
                <span className="text-[#F4F0E8]">Find a Forest</span>
                <br />
                <span className="text-[#DDEA81]">to Explore</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="max-w-sm text-xs font-body leading-relaxed text-[#F4F0E8]/60 md:text-right md:text-sm">
              Each region in Indonesia has its own unique forests, landscapes,
              and wildlife. Choose a region to discover the forests within it.
            </p>
          </AnimatedSection>
        </div>

        {/* ---------- Region selector ---------- */}
        <AnimatedSection delay={0.15}>
          <div className="scrollbar-hide -mx-6 mt-8 flex gap-3 overflow-x-auto px-6 pb-1 md:mx-0 md:mt-10 md:grid md:grid-cols-8 md:overflow-visible md:px-0">
            {regions.map((r) => {
              const active = r === region;
              return (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  aria-pressed={active}
                  className={cn(
                    "flex w-[104px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border px-2 py-3 transition-all duration-300 md:w-auto",
                    active
                      ? "border-[rgba(221,234,129,0.55)] bg-[rgba(87,120,49,0.25)] text-[#DDEA81]"
                      : "border-[rgba(244,240,232,0.14)] bg-[#101A12] text-[#F4F0E8]/85 hover:border-[rgba(221,234,129,0.4)]"
                  )}
                >
                  <RegionIcon region={r} />
                  <span className="text-center text-[9px] font-body font-semibold uppercase leading-tight tracking-[0.12em] md:text-[10px]">
                    {r}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* ---------- Search ---------- */}
        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-8 max-w-xl md:mt-10">
            <div
              role="search"
              className="flex items-center gap-2 rounded-xl border border-[rgba(244,240,232,0.14)] bg-[#101A12] px-4 py-3 transition-colors focus-within:border-[rgba(221,234,129,0.55)]"
            >
              <Search size={16} className="shrink-0 text-[#F4F0E8]/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search forests, species, places… e.g. orangutan, Komodo, peat"
                aria-label="Search forests"
                className="w-full bg-transparent text-sm font-body text-[#F4F0E8] placeholder:text-[#F4F0E8]/35 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="shrink-0 rounded-full p-1 text-[#F4F0E8]/50 transition-colors hover:text-[#DDEA81]"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <p className="mt-2 text-center text-[11px] font-body text-[#F4F0E8]/50" role="status">
              {normalizedQuery
                ? `${visible.length} forest${visible.length === 1 ? "" : "s"} found${region !== "All Regions" ? ` in ${region}` : " across Indonesia"}`
                : `Showing ${visible.length} extraordinary forests${region !== "All Regions" ? ` in ${region}` : ""}`}
            </p>
          </div>
        </AnimatedSection>

        {/* ---------- Featured forests ---------- */}
        <div className="mt-12 md:mt-16">
          <AnimatedSection>
            <div>
              <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#F4F0E8]/60 md:text-xs">
                Featured Forest
              </p>
              <h2 className="font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-3xl lg:text-4xl">
                Extraordinary Forests
              </h2>
            </div>
          </AnimatedSection>

          {visible.length === 0 ? (
            <div className="mt-8 rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#101A12] p-10 text-center">
              <p className="font-headline text-lg font-bold text-[#F4F0E8]">
                {normalizedQuery
                  ? `No forests match "${query.trim()}"`
                  : "No forests listed for this region yet"}
              </p>
              <p className="mx-auto mt-2 max-w-sm text-xs font-body text-[#F4F0E8]/60">
                {normalizedQuery
                  ? "Try another keyword, or clear the search to browse everything."
                  : "KARIMBA is still growing its archive. Try another region to keep exploring."}
              </p>
              {normalizedQuery && (
                <button
                  onClick={() => setQuery("")}
                  className="mt-4 rounded-md border border-[rgba(221,234,129,0.4)] px-4 py-2 text-xs font-body font-semibold uppercase tracking-[0.12em] text-[#DDEA81] transition-colors hover:bg-[rgba(221,234,129,0.1)]"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <AnimatedSection delay={0.1}>
              <div
                ref={trackRef}
                onScroll={handleScroll}
                className="scrollbar-hide -mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0"
              >
                {visible.map((forest) => (
                  <a
                    key={forest.id}
                    href={`/explore/${forest.id}`}
                    aria-label={`View details of ${forest.name}`}
                    data-card
                    className="group relative block h-[200px] w-[88%] shrink-0 snap-center overflow-hidden rounded-xl border border-[rgba(244,240,232,0.12)] transition-colors focus-visible:outline-2 focus-visible:outline-[#DDEA81] md:h-[240px] md:w-[78%]"
                  >
                    {forest.image ? (
                      <img
                        src={forest.image}
                        alt={forest.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E3420] via-[#3A2D19] to-[#101A12]">
                        <TreePine size={44} className="text-[#DDEA81]/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
                      <h3 className="font-headline text-lg font-bold text-[#F4F0E8] md:text-2xl">
                        {forest.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-body text-[#F4F0E8]/75 md:text-xs">
                        {forest.location}
                      </p>
                      <p className="text-[11px] font-body text-[#DDEA81] md:text-xs">
                        {forest.ecosystem}
                      </p>
                    </div>

                    <span className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(244,240,232,0.25)] text-[#F4F0E8] transition-all duration-300 group-hover:border-[#DDEA81] group-hover:text-[#DDEA81]">
                      <ArrowRight size={16} />
                    </span>
                  </a>
                ))}
              </div>

              {/* Dots */}
              <div className="mt-5 flex items-center justify-center gap-1.5">
                {visible.map((forest, index) => (
                  <button
                    key={forest.id}
                    onClick={() => goTo(index)}
                    aria-label={`Go to ${forest.name}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "w-5 bg-[#DDEA81]"
                        : "w-1.5 bg-[#F4F0E8]/30 hover:bg-[#F4F0E8]/60"
                    )}
                  />
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
