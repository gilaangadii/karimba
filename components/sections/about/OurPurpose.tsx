import AnimatedSection from "@/components/ui/AnimatedSection";

const pillars = [
  {
    image: "/images/about/education.jpg",
    alt: "Misty montane forest ridge",
    title: "Education",
    description:
      "Understand Indonesia's forests, ecosystems, biodiversity, and challenges.",
  },
  {
    image: "/images/about/explore.png",
    alt: "Map of the Indonesian archipelago",
    title: "Exploration",
    description:
      "Discover forest across Indonesia through an interactive and immersive experience.",
  },
  {
    image: "/images/about/action.png",
    alt: "Hands planting a seedling in dark soil",
    title: "Action",
    description:
      "Be part of the movement. Every visit plants a seed and spreads awareness for a greener future.",
  },
];

export default function OurPurpose() {
  return (
    <section className="section-padding bg-bg-page relative overflow-hidden">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <AnimatedSection>
          <div>
            <p className="mb-3 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
              Our Purpose
            </p>
            <h2 className="font-headline text-2xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-3xl lg:text-4xl">
              Exploration,
              <br />
              Education,
              <br />
              and Action
            </h2>
            <p className="mt-4 max-w-sm text-xs font-body leading-relaxed text-[#F4F0E8]/65 md:text-sm">
              KARIMBA is designed to make forest information more accessible,
              visual, and engaging, while encouraging real awareness and
              participation in forest conservation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[rgba(244,240,232,0.12)] bg-[#122217] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(221,234,129,0.35)]">
                <div className="relative h-[150px] shrink-0 overflow-hidden md:h-[170px]">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="flex grow flex-col p-4 md:p-5">
                  <h3 className="font-headline text-base font-bold uppercase tracking-wide text-[#F4F0E8]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                    {pillar.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
