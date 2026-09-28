import {
  AlertTriangle,
  Axe,
  Bell,
  Bird,
  BookOpen,
  CloudRain,
  CloudSun,
  Construction,
  Droplets,
  Factory,
  Fish,
  Flame,
  Gavel,
  Leaf,
  Mountain,
  Pickaxe,
  Recycle,
  ShieldCheck,
  Sprout,
  Sun,
  Thermometer,
  TreePine,
  Users,
  Waves,
  Wind,
  ImageOff,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { IssueCard } from "@/data/issueDetails";

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  axe: Axe,
  pickaxe: Pickaxe,
  construction: Construction,
  bird: Bird,
  "cloud-sun": CloudSun,
  tree: TreePine,
  users: Users,
  recycle: Recycle,
  flame: Flame,
  droplets: Droplets,
  sun: Sun,
  alert: AlertTriangle,
  wind: Wind,
  factory: Factory,
  bell: Bell,
  mountain: Mountain,
  fish: Fish,
  leaf: Leaf,
  gavel: Gavel,
  "cloud-rain": CloudRain,
  book: BookOpen,
  shield: ShieldCheck,
  thermometer: Thermometer,
  waves: Waves,
};

interface Props {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: IssueCard[];
  dark?: boolean;
}

export default function IssueCardGrid({ eyebrow, heading, intro, cards, dark }: Props) {
  return (
    <section className={dark ? "section-padding bg-bg-page relative overflow-hidden" : "section-padding bg-bg-forest relative overflow-hidden"}>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <AnimatedSection>
            <div>
              <p className="mb-2 text-[11px] font-body font-semibold uppercase tracking-[0.25em] text-[#DDEA81] md:text-xs">
                {eyebrow}
              </p>
              <h2 className="max-w-xl font-headline text-2xl font-bold leading-tight text-[#F4F0E8] md:text-4xl">
                {heading}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="max-w-sm text-xs font-body leading-relaxed text-[#F4F0E8]/60 md:text-right md:text-sm">
              {intro}
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
          {cards.map((card, i) => {
            const Icon = icons[card.icon] ?? Leaf;
            return (
              <AnimatedSection key={card.title} delay={(i % 4) * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(244,240,232,0.12)] bg-[#122217] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(221,234,129,0.35)]">
                  <div className="relative h-[130px] shrink-0 overflow-hidden">
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1E3420] to-[#101A12]">
                        <ImageOff size={20} className="text-[#DDEA81]/35" />
                        <span className="text-[8px] font-body uppercase tracking-[0.25em] text-[#F4F0E8]/35">
                          Image coming soon
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(221,234,129,0.4)] bg-black/45 font-headline text-[11px] font-bold text-[#DDEA81]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(221,234,129,0.4)] bg-black/45 text-[#DDEA81]">
                      <Icon size={16} />
                    </span>
                  </div>
                  <div className="flex grow flex-col p-4 md:p-5">
                    <h3 className="font-headline text-base font-bold text-[#F4F0E8]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                      {card.description}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
