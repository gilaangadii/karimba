/* ============================================================
   KARIMBA — ISSUES DATA (centralized, editable)
   ------------------------------------------------------------
   Add or edit entries here; the Issues page, cards, and
   detail routes (/issues/[slug]) all render from this file.
   ============================================================ */

export interface Issue {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  image: string;
}

export const issues: Issue[] = [
  {
    id: "deforestation",
    number: "01",
    category: "Deforestation",
    title: "Unchecked Industrial Encroachment & Soil Loss",
    description:
      "Forest areas are changing rapidly through industrial land conversion, illegal logging, and agricultural encroachment into ancient dipterocarp stands.",
    impact:
      "Large-scale clearing fragments habitats, exposes soils to erosion, and releases long-stored carbon into the atmosphere.",
    image: "/images/issues/Deforestation.jpg",
  },
  {
    id: "forest-fires",
    number: "02",
    category: "Forest Fires",
    title: "Peat Dome Desiccation & Haze",
    description:
      "Drained peatlands become highly flammable, releasing greenhouse gases and creating regional haze.",
    impact:
      "Recurring fires damage ecosystems, threaten public health across the region, and release massive carbon pulses.",
    image: "/images/issues/Forest_Fire2.jpg",
  },
  {
    id: "biodiversity-loss",
    number: "03",
    category: "Biodiversity Loss",
    title: "Corridor Severance & Species Extinction",
    description:
      "Canopy breaks and habitat fragmentation sever ecological corridors, threatening wildlife populations and ecosystem resilience.",
    impact:
      "Isolated populations of endemic species face extinction as gene pools shrink and ecological roles go unfilled.",
    image: "/images/issues/Kehilangan_Keanekaragaman_Hayati.jpg",
  },
  {
    id: "climate-change",
    number: "04",
    category: "Climate Change",
    title: "A Changing Climate, A Vulnerable Forest",
    description:
      "Rising temperatures, shifting rainfall patterns, and extreme weather are altering forest ecosystems, biodiversity, water systems, and communities.",
    impact:
      "Climate stress weakens forest resilience, disrupts water cycles, and amplifies every other pressure on the landscape.",
    image: "/images/issues/Climate_change.jpg",
  },
];

export interface ImpactLens {
  number: string;
  title: string;
  description: string;
  label: string;
  image: string;
}

export const impactLenses: ImpactLens[] = [
  {
    number: "01",
    title: "Biodiversity",
    description:
      "Keystone species such as the Sumatran tiger and Bornean orangutan depend on intact forest corridors and ecological balance.",
    label: "Ecosystem Disruption",
    image: "/images/issues/biodiversity.png",
  },
  {
    number: "02",
    title: "Climate",
    description:
      "Tropical forests regulate climate, store vast carbon reserves, and influence rainfall systems across the region.",
    label: "Global Atmospheric Impact",
    image: "/images/issues/Climate.jpg",
  },
  {
    number: "03",
    title: "People",
    description:
      "Millions of people depend directly or indirectly on forest resources, ecosystem services, and sustainable landscapes.",
    label: "Socio-Cultural Resilience",
    image: "/images/issues/people.png",
  },
  {
    number: "04",
    title: "Ecosystems",
    description:
      "Forest ecosystems regulate water, soil, habitat, and ecological connectivity across the archipelago.",
    label: "Landscape Connectivity",
    image: "/images/hero-explore.png",
  },
];
