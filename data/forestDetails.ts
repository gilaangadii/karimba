/* ============================================================
   KARIMBA — FOREST DETAIL DATA (centralized)
   ------------------------------------------------------------
   One record per forest, keyed by forest id (= URL slug).
   The ForestDetail template renders ONLY what is present:
   empty arrays / missing fields hide their section automatically.

   ACCURACY RULE: every statement below is either
   (a) drawn from the existing forest dataset, or
   (b) a widely-documented, long-established public fact
       (park location, famous species, famous landforms).
   Precise figures from unverified sources are NOT included.
   Source URLs are intentionally omitted (could not be verified);
   add them only from official publications (KLHK / KSDAE / Balai TN).
   ============================================================ */

export interface ForestFlora {
  name: string;
  scientificName: string;
  habitat: string;
  description: string;
}

export interface ForestImportanceItem {
  title: string;
  description: string;
}

export interface ForestSource {
  organization: string;
  title: string;
  url?: string;
}

export interface ForestQuickStat {
  label: string;
  value: string;
}

export interface ForestTimelineEvent {
  period: string;
  title: string;
  description: string;
}

export interface ForestThreatSpotlight {
  label: string;
  title: string;
  note: string;
}

export interface ForestDetail {
  province: string;
  island: "Sumatra" | "Java" | "Borneo" | "Sulawesi" | "Nusa Tenggara" | "Maluku" | "Papua";
  designation: string;
  elevation?: string;
  profileHeading: string;
  profile: string[];
  ecosystems: string[];
  flora: ForestFlora[];
  importanceSubtitle: string;
  importance: ForestImportanceItem[];
  extraStats: ForestQuickStat[];
  timeline: ForestTimelineEvent[];
  threatSpotlight?: ForestThreatSpotlight;
  threatImage?: string;
  sources: ForestSource[];
}

const KSDAE = "Direktorat Jenderal KSDAE, Kementerian Kehutanan";

const balai = (park: string): ForestSource[] => [
  { organization: KSDAE, title: "Sistem Informasi Kawasan Konservasi" },
  { organization: `Balai Taman Nasional ${park}`, title: "Profil Kawasan" },
];

export const forestDetails: Record<string, ForestDetail> = {
  leuser: {
    province: "Aceh",
    island: "Sumatra",
    designation: "National Park",
    elevation: "Up to 3,404 m ASL",
    profileHeading: "The Last Great Rainforest of Sumatra",
    profile: [
      "The Leuser Ecosystem is one of the last large expanses of tropical rainforest in Southeast Asia, stretching from lowland jungle to misty montane ridges in Aceh.",
      "It is the only place on Earth where orangutans, tigers, elephants, and rhinoceros still share the same forest, making it a global icon of intact wilderness.",
      "Today, ranger patrols, community forest programs, and long-term research keep watch over Leuser, as Aceh charts a future where the forest stands for water, livelihoods, and pride.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Rainforest"],
    flora: [
      {
        name: "Meranti",
        scientificName: "Shorea spp.",
        habitat: "Lowland Rainforest",
        description:
          "Towering dipterocarp trees that form the high canopy sheltering orangutans and hornbills.",
      },
      {
        name: "Rattan Palms",
        scientificName: "Calamus spp.",
        habitat: "Lowland Rainforest",
        description:
          "Climbing palms weaving the understory; their fruits feed hornbills and mammals.",
      },
    ],
    importanceSubtitle:
      "Four flagship mammals, one unbroken forest — Sumatra's greatest living treasure.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Leuser shelters Sumatran orangutans, tigers, elephants, and rhinos within a single connected landscape — an assemblage found nowhere else on Earth. Gibbons, hornbills, and thousands of lesser-known species fill every layer from forest floor to canopy. Protecting Leuser means protecting the full cast of Sumatra's megafauna at once.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Its vast primary rainforest locks away immense carbon stocks accumulated over centuries of undisturbed growth. The forest breathes moisture back into the sky, seeding rainfall across northern Sumatra. Lose Leuser, and the region loses both a carbon vault and its climate stabilizer.",
      },
      {
        title: "Water Systems",
        description:
          "The Alas and other rivers rise in Leuser's highlands, delivering clean water to farms, towns, and cities downstream. Forested slopes hold soil against floods and landslides during monsoon downpours. Millions of Acehnese and North Sumatrans drink from this forest every day.",
      },
    ],
    extraStats: [{ label: "Elevation", value: "Up to 3,404 m" }],
    timeline: [
      {
        period: "2004",
        title: "World Heritage Inscription",
        description:
          "The Leuser Ecosystem is inscribed as part of the Tropical Rainforest Heritage of Sumatra.",
      },
    ],
    threatImage: "/images/issues/Deforestation.jpg",
    sources: balai("Gunung Leuser"),
  },
  "kerinci-seblat": {
    province: "Jambi · West Sumatra · Bengkulu · South Sumatra",
    island: "Sumatra",
    designation: "National Park",
    elevation: "Up to 3,805 m ASL",
    profileHeading: "Roof of Sumatra",
    profile: [
      "Kerinci Seblat is Sumatra's largest national park, a rugged landscape of volcanic peaks, montane forest, and highland lakes spanning four provinces.",
      "It guards Mount Kerinci, Indonesia's highest volcano, and some of the last strongholds of the Sumatran tiger and rhino.",
      "Together with neighboring parks it forms the Tropical Rainforest Heritage of Sumatra, a UNESCO World Heritage Site, while tiger patrol units walk its ridges to keep it that way.",
    ],
    ecosystems: ["Montane Rainforest", "Volcanic Highlands"],
    flora: [
      {
        name: "Giant Rafflesia",
        scientificName: "Rafflesia arnoldii",
        habitat: "Lowland Rainforest",
        description:
          "Producer of the world's largest single flower, blooming on the forest floor of the park's Bengkulu lowlands.",
      },
      {
        name: "Pitcher Plants",
        scientificName: "Nepenthes spp.",
        habitat: "Montane Rainforest",
        description:
          "Carnivorous plants thriving in the thin, wet soils of the high volcanic slopes.",
      },
    ],
    importanceSubtitle:
      "Sumatra's volcanic spine, guarding tigers, rhinos, and the island's highest peak.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Kerinci Seblat's rugged Barisan forests hold some of the densest tiger populations left in Sumatra, alongside rhinos, tapirs, and clouded leopards. Its slopes stack lowland jungle, montane moss forest, and high volcanic scrub — habitats and endemics piled on top of each other. Few parks on Earth pack so much wildlife into such vertical drama.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Its extensive montane forests store deep carbon while cooling the highlands around them. Cloud forests comb moisture from passing air, feeding springs across four provinces. The park is Sumatra's climatic backbone, standing or falling as one piece.",
      },
      {
        title: "Water Systems",
        description:
          "Great Sumatran rivers begin in these mountains, running steady and clear to rice lands, towns, and coasts. Forest cover keeps that water clean through every dry month and holds back floods in the wet. Four provinces drink from this single green spine.",
      },
    ],
    extraStats: [{ label: "Elevation", value: "Up to 3,805 m" }],
    timeline: [
      {
        period: "2004",
        title: "World Heritage Inscription",
        description:
          "Kerinci Seblat is inscribed as part of the Tropical Rainforest Heritage of Sumatra.",
      },
    ],
    threatImage: "/images/issues/Illegal_Logging.jpg",
    sources: balai("Kerinci Seblat"),
  },
  "tanjung-puting": {
    province: "Central Kalimantan",
    island: "Borneo",
    designation: "National Park",
    profileHeading: "Kingdom of the Orangutan",
    profile: [
      "Tanjung Puting's peat swamps and mangroves along Central Kalimantan's rivers form the world's most famous orangutan habitat.",
      "Its blackwater rivers and flooded forests sustain proboscis monkeys, hornbills, and thriving wild orangutan populations studied for decades.",
      "The historic Camp Leakey research station has anchored orangutan science here for decades, while river-based ecotourism helps fund protection.",
    ],
    ecosystems: ["Peat Swamp Forest", "Mangrove Forest"],
    flora: [
      {
        name: "Ramin",
        scientificName: "Gonystylus bancanus",
        habitat: "Peat Swamp Forest",
        description:
          "A slow-growing peat swamp tree once heavily logged, now a symbol of swamp forest recovery.",
      },
      {
        name: "Jelutung",
        scientificName: "Dyera costulata",
        habitat: "Peat Swamp Forest",
        description:
          "Tall latex-producing tree of the swamps, harvested sustainably by local tappers.",
      },
    ],
    importanceSubtitle:
      "Where blackwater rivers nurse the world's most famous orangutans.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "No forest on Earth is more synonymous with the orangutan, whose wild populations here have taught science most of what it knows. Proboscis monkeys, gibbons, hornbills, and clouded leopards share the same swamp mosaic. It is a living laboratory of peat-swamp ecology.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Beneath the flooded forest lie peat domes holding carbon laid down over thousands of years. Keeping these domes wet keeps that carbon buried — draining them turns vault into wildfire fuel. Tanjung Puting is climate infrastructure wearing a forest's face.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Klotok riverboats, riverside villages, and rehabilitant orangutan camps built an ecotourism economy found nowhere else. Fisheries and rattan from the park's buffers sustain Dayak livelihoods. Here, a living forest demonstrably pays better than a cleared one.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "1971",
        title: "Camp Leakey Founded",
        description:
          "A research station on the Sekonyer river begins decades of orangutan science and protection.",
      },
      {
        period: "2015",
        title: "El Niño Mega-Fires",
        description:
          "Severe drought drives peat and forest fires deep into Central Kalimantan's protected swamps.",
      },
    ],
    threatImage: "/images/issues/Forest_Fire.jpg",
    sources: balai("Tanjung Puting"),
  },
  sebangau: {
    province: "Central Kalimantan",
    island: "Borneo",
    designation: "National Park",
    profileHeading: "An Icon of the Peatland Forest",
    profile: [
      "Sebangau holds one of the last great contiguous tropical peat domes on Earth, a rain-fed sponge of semi-decayed forest matter built over millennia.",
      "Gazetted as a national park in 2004, it shelters the world's largest protected orangutan population and anchors global peatland restoration science.",
      "Canal-blocking dams, community fire teams, and replanting programs now make Sebangau a world reference for tropical peatland restoration.",
    ],
    ecosystems: ["Tropical Peat Swamp Forest", "Lowland Rainforest"],
    flora: [
      {
        name: "Ramin",
        scientificName: "Gonystylus bancanus",
        habitat: "Peat Swamp Forest",
        description:
          "Dense, slow-growing peat swamp hardwood at the heart of replanting programs.",
      },
      {
        name: "Jelutung",
        scientificName: "Dyera costulata",
        habitat: "Peat Swamp Forest",
        description:
          "Swamp latex tree supporting both forest structure and community livelihoods.",
      },
      {
        name: "Belangeran",
        scientificName: "Shorea balangeran",
        habitat: "Peat Swamp Forest",
        description:
          "Flood-tolerant meranti that anchors the peat dome's living canopy.",
      },
    ],
    importanceSubtitle:
      "Sebangau is not an isolated wilderness—it is an indispensable planetary organ.",
    importance: [
      {
        title: "Biodiversity Citadel",
        description:
          "Harbors over 6,000 wild Bornean orangutans — representing more than ten percent of the species' total global population — alongside vulnerable sun bears, agile gibbons, and endemic peat swamp orchids found nowhere else.",
      },
      {
        title: "Continental Carbon Sink",
        description:
          "Intact waterlogged peat functions as a monumental terrestrial vault, locking away around 1.8 gigatons of carbon accumulated over millennia. Preserving Sebangau keeps that vault sealed against fire and oxidation — equivalent to retiring millions of fossil fuel generators.",
      },
      {
        title: "Customary Livelihoods",
        description:
          "Acts as the primary freshwater filtration catchment for downstream Dayak Ngaju communities, sustaining native rattan harvesting, non-destructive beekeeping, and sustainable peat-water artisanal river fisheries.",
      },
    ],
    extraStats: [{ label: "Peat Depth", value: "Up to 10–13 m" }],
    timeline: [
      {
        period: "1990 – 2003",
        title: "Commercial Canals & Systematic Desiccation",
        description:
          "Unregulated logging concessions carve over 4,000 kilometers of drainage canals across the dome, siphoning groundwater and leaving ancient peat dry and hyper-combustible.",
      },
      {
        period: "2015",
        title: "Severe El Niño Mega-Fires",
        description:
          "An unprecedented dry season combined with lowered water tables sparks subterranean peat fires, generating thick transboundary haze and historic pulses of greenhouse gases.",
      },
      {
        period: "2018 – Present",
        title: "Hydrological Rewetting & Community Damming",
        description:
          "Local Dayak communities, park authorities, and conservation groups build over 1,200 timber peat dams, slowing runoff, lifting the water table, and triggering forest regrowth.",
      },
    ],
    threatSpotlight: {
      label: "Archival Telemetry Record",
      title: "Subterranean Peat Fire Dynamics",
      note: "Once drained, dried peat acts as fuel that burns meters below the surface, requiring total saturation efforts to extinguish.",
    },
    threatImage: "/images/issues/Forest_Fire.jpg",
    sources: balai("Sebangau"),
  },
  lorentz: {
    province: "Papua",
    island: "Papua",
    designation: "National Park",
    elevation: "Up to 4,884 m ASL",
    profileHeading: "From Glaciers to Mangroves",
    profile: [
      "Lorentz is a UNESCO World Heritage Site and Southeast Asia's largest protected area, spanning from surf beaches to the equatorial glaciers of Puncak Jaya.",
      "No other park on Earth compresses so many worlds — mangrove, lowland jungle, mossy highlands, alpine meadows — into one boundary.",
      "Joint patrols with Indigenous communities guard a wilderness so vast that new species are still discovered on nearly every expedition.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Forest", "Alpine Grasslands"],
    flora: [
      {
        name: "Southern Beech",
        scientificName: "Nothofagus spp.",
        habitat: "Montane Forest",
        description:
          "Ancient Gondwanan trees dominating the moss-draped highland cloud forest.",
      },
      {
        name: "Tree Ferns",
        scientificName: "Cyathea spp.",
        habitat: "Montane Forest",
        description:
          "Towering ferns forming the green understory of the wet highlands.",
      },
    ],
    importanceSubtitle:
      "From equatorial glaciers to tropical seas, a continent of life in one park.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Birds of paradise display in lowland jungles while tree-kangaroos browse mossy highlands and alpine meadows bloom near the ice. Scientists still describe new species from Lorentz on nearly every expedition. It is the most biologically unexplored large park in Asia-Pacific.",
      },
      {
        title: "Carbon & Climate",
        description:
          "An unbroken transect from mangrove to glacier stores carbon at every altitude and records climate history in ice and peat. Protecting the whole gradient lets species migrate as climates shift. Lorentz is a climate refuge built at continental scale.",
      },
      {
        title: "Water Systems",
        description:
          "Glacial lakes and highland bogs feed mighty rivers running north to the Pacific and south to the Arafura Sea. These waters sustain lowland forests, fisheries, and coastal communities on both coasts of New Guinea. The mountain is the mother of the rivers.",
      },
    ],
    extraStats: [{ label: "Elevation", value: "Up to 4,884 m" }],
    timeline: [
      {
        period: "1999",
        title: "UNESCO World Heritage Listing",
        description:
          "Lorentz is inscribed as Southeast Asia's largest protected area, spanning glaciers to tropical seas.",
      },
    ],
    threatImage: "/images/issues/Climate_change.jpg",
    sources: balai("Lorentz"),
  },
  "way-kambas": {
    province: "Lampung, Sumatra",
    island: "Sumatra",
    designation: "National Park",
    profileHeading: "Sanctuary of the Sumatran Elephant",
    profile: [
      "Way Kambas protects lowland rainforest and freshwater swamps in southern Sumatra, the island's most important elephant landscape.",
      "Its elephant conservation center pioneered human-elephant conflict mitigation, training patrol elephants that guard farms and forests alike.",
      "Its rhino sanctuary and elephant patrols lead Sumatra's fight against poaching, turning a former conflict hotspot into a conservation model.",
    ],
    ecosystems: ["Lowland Rainforest", "Freshwater Swamp"],
    flora: [
      {
        name: "Gelam",
        scientificName: "Melaleuca cajuputi",
        habitat: "Freshwater Swamp",
        description:
          "Paper-barked swamp tree fringing the park's wetlands and seasonal pools.",
      },
      {
        name: "Meranti",
        scientificName: "Shorea spp.",
        habitat: "Lowland Rainforest",
        description:
          "Canopy giants of the remaining Sumatran lowland forest.",
      },
    ],
    importanceSubtitle:
      "Lampung's last great lowland forest, where elephants still walk free.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Way Kambas holds Sumatra's most important elephant herds alongside rhinos, tigers, and tapirs in one lowland landscape. Its swamps shelter otters, storks, and false gharials. For large mammals, it is southern Sumatra's last stand.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Lowland and freshwater-swamp forests bank carbon in both timber and waterlogged soils. The forest belt tempers Lampung's heat and buffers its coasts against storms. Every cleared hectare here is felt in the provincial climate.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Trained patrol elephants deter wild herds from farms, turning conflict into coexistence and jobs. Rhino sanctuary work and elephant tourism employ surrounding villages. Way Kambas proves protection can pay its neighbors.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Way Kambas"),
  },
  "gunung-leuser": {
    province: "Aceh & North Sumatra",
    island: "Sumatra",
    designation: "National Park",
    profileHeading: "Heart of the Leuser Ecosystem",
    profile: [
      "Gunung Leuser National Park forms the mountainous core of the wider Leuser Ecosystem, a UNESCO World Heritage Site.",
      "Its unbroken forests shelter the densest orangutan populations on Earth alongside tigers that still roam the Alas valley.",
      "As part of the Tropical Rainforest Heritage of Sumatra World Heritage Site, its forests are patrolled daily against encroachment and poaching.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Rainforest"],
    flora: [
      {
        name: "Meranti",
        scientificName: "Shorea spp.",
        habitat: "Lowland Rainforest",
        description:
          "Dipterocarp giants forming the layered canopy of the Alas forests.",
      },
    ],
    importanceSubtitle:
      "The beating heart of the Leuser Ecosystem and its densest orangutan forests.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "The Alas valley forests hold the densest orangutan populations ever recorded, with tigers, siamangs, and hornbills alongside. It is the beating heart of the Leuser Ecosystem's wildlife. Nowhere else concentrates so much Sumatran life so visibly.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Unbroken primary forest climbs from lowland plains to high peaks, storing carbon across every elevation. The intact canopy recycles rainfall deep into the dry season. This is Sumatra's most complete forest carbon staircase.",
      },
      {
        title: "Water Systems",
        description:
          "The Alas River and its tributaries water Aceh Tenggara's farms and forests from these slopes. Clean, steady flow depends entirely on the park's forested headwaters. Downstream, whole districts rely on what falls up here.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "2004",
        title: "World Heritage Inscription",
        description:
          "Gunung Leuser National Park is inscribed as part of the Tropical Rainforest Heritage of Sumatra.",
      },
    ],
    threatImage: "/images/issues/Illegal_Logging.jpg",
    sources: balai("Gunung Leuser"),
  },
  "ujung-kulon": {
    province: "Banten, Java",
    island: "Java",
    designation: "National Park",
    profileHeading: "Last Refuge of the Javan Rhino",
    profile: [
      "Ujung Kulon guards lowland rainforest at Java's western tip — the one and only home of the Javan rhinoceros.",
      "Born from the ash of the 1883 Krakatau eruption, its recovering forests are a living lesson in nature's resilience.",
      "A UNESCO World Heritage Site, the peninsula is monitored around the clock — every rhino matters when a species numbers only in the dozens.",
    ],
    ecosystems: ["Lowland Rainforest", "Grasslands"],
    flora: [
      {
        name: "Arenga Palm",
        scientificName: "Arenga obtusifolia",
        habitat: "Lowland Rainforest",
        description:
          "A favorite rhino food plant carpeting the shady forest understory.",
      },
      {
        name: "Meranti",
        scientificName: "Shorea spp.",
        habitat: "Lowland Rainforest",
        description:
          "Canopy hardwoods of Java's finest remaining lowland rainforest.",
      },
    ],
    importanceSubtitle:
      "A peninsula of second chances — for a forest reborn and a rhino on the brink.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Ujung Kulon is the only place the Javan rhino still walks — a few dozen animals carrying their species' entire future. Banteng, leopards, gibbons, and green peafowl share the peninsula. Losing this forest means losing the rhino, full stop.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Java's largest remaining lowland rainforest block stores lowland carbon found almost nowhere else on the crowded island. Its canopy cools the far west and steadies coastal weather. A small park with an outsized climatic footprint.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Buffer villages fish the surrounding seas and guide rhino-track tourism that never disturbs its subject. Offshore reefs and beaches extend protection beyond the trees. The peninsula's fame funds its own guardians.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "1883",
        title: "Krakatau Eruption & Forest Rebirth",
        description:
          "The eruption sterilized the peninsula; the forest that returned became the last refuge of the Javan rhinoceros.",
      },
      {
        period: "1991",
        title: "UNESCO World Heritage Listing",
        description:
          "Ujung Kulon is inscribed for protecting the last viable habitat of the Javan rhino.",
      },
    ],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Ujung Kulon"),
  },
  "bromo-tengger-semeru": {
    province: "East Java",
    island: "Java",
    designation: "National Park",
    elevation: "Up to 3,676 m ASL",
    profileHeading: "Land of Fire and Mist",
    profile: [
      "A sea of volcanic sand ringed by the smoking cone of Bromo and the towering summit of Semeru, Java's highest peak.",
      "Montane forests cloak the caldera rims, sheltering leopards and eagles above the sacred Tengger highlands.",
      "The Tengger people hold annual ceremonies on these slopes, and visitor programs fund the rangers who guard the caldera's fragile highlands.",
    ],
    ecosystems: ["Montane Forest", "Volcanic Highlands"],
    flora: [
      {
        name: "Javan Edelweiss",
        scientificName: "Anaphalis javanica",
        habitat: "Volcanic Highlands",
        description:
          "The eternal flower of Java's high volcanoes, blooming above the clouds.",
      },
      {
        name: "Mountain Casuarina",
        scientificName: "Casuarina junghuhniana",
        habitat: "Montane Forest",
        description:
          "Feathery conifer-like trees colonizing the volcanic ash slopes.",
      },
    ],
    importanceSubtitle:
      "Fire, ash, and faith — Java's most sacred volcanic landscape.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Leopards pad the montane forest rim while Javan hawk-eagles ride thermals above the caldera. Edelweiss meadows host highland birds found only on Java's volcanoes. Life here specializes in ash, mist, and thin air.",
      },
      {
        title: "Water Systems",
        description:
          "Springs on these slopes feed the Brantas, East Java's great working river for farms, cities, and industry. Forest cover regulates that flow between deluge and drought. Millions downstream drink from this volcano.",
      },
      {
        title: "Local Livelihoods",
        description:
          "The Tengger people's annual ceremonies draw pilgrims to Bromo's crater in living Hindu tradition. Jeep, horse, and homestay economies employ whole highland villages. Sacred geography and livelihood are one landscape here.",
      },
    ],
    extraStats: [{ label: "Elevation", value: "Up to 3,676 m" }],
    timeline: [
      {
        period: "2010",
        title: "Eruption Cycle & Ash Recovery",
        description:
          "Months of ash columns close the caldera as Bromo enters one of its periodic eruptive phases.",
      },
    ],
    threatImage: "/images/issues/Tourism_pressure.jpg",
    sources: balai("Bromo Tengger Semeru"),
  },
  baluran: {
    province: "East Java",
    island: "Java",
    designation: "National Park",
    profileHeading: "Africa van Java",
    profile: [
      "Baluran's golden savannas, guarded by Mount Baluran, feel more African than Asian — banteng herds graze beneath acacia trees.",
      "Behind the savanna lie monsoon forests, mangroves, and beaches where turtles nest and peafowl dance.",
      "Rangers battle invasive acacia to hold the savanna open, while turtle nesting beaches and coastal mangroves anchor marine protection.",
    ],
    ecosystems: ["Savanna", "Monsoon Forest", "Mangrove Forest"],
    flora: [
      {
        name: "Gebang Palm",
        scientificName: "Corypha utan",
        habitat: "Savanna",
        description:
          "Fan palms dotting the savanna, flowering once in a spectacular decades-long finale.",
      },
      {
        name: "Acacia",
        scientificName: "Vachellia nilotica",
        habitat: "Savanna",
        description:
          "Introduced thorn trees now battled by rangers to keep the savanna open for banteng.",
      },
    ],
    importanceSubtitle:
      "Savanna seas and monsoon woods at Java's wild eastern tip.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Java's largest banteng herds graze Baluran's savannas beside leopards and dholes of the dusk. Green peafowl dance at forest edges while turtles nest on Bama's beaches. It is Java's most African-feeling wildlife stage.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Savanna grasses, monsoon woods, and mangroves each bank carbon in different soils and rhythms. The mosaic buffers East Java's driest corner against desertification. Diversity of habitat is diversity of climate insurance.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Savanna safaris, Bekol's viewpoints, and Bama's snorkeling reefs employ villages around the park. Seasonal grazing agreements keep traditions alive at the boundary. Baluran's wildness is the region's brand.",
      },
    ],
    extraStats: [],
    timeline: [],
    sources: balai("Baluran"),
  },
  "gede-pangrango": {
    province: "West Java",
    island: "Java",
    designation: "National Park",
    elevation: "Up to 3,019 m ASL",
    profileHeading: "The Mossy Crown of Java",
    profile: [
      "Twin volcanoes draped in mossy montane rainforest, a UNESCO Biosphere Reserve two hours from Jakarta.",
      "Its orchid-rich cloud forests shelter gibbons whose dawn songs echo across the Cibodas valleys.",
      "As Indonesia's oldest national park gateway, Cibodas hosts generations of botanical research in gardens neighboring the wild forest.",
    ],
    ecosystems: ["Montane Rainforest", "Subalpine Meadows"],
    flora: [
      {
        name: "Rasamala",
        scientificName: "Altingia excelsa",
        habitat: "Montane Rainforest",
        description:
          "Towering hardwoods of the lower montane forest, dripping with moss and orchids.",
      },
      {
        name: "Puspa",
        scientificName: "Schima wallichii",
        habitat: "Montane Rainforest",
        description:
          "White-flowered canopy tree lighting up the misty Cibodas slopes.",
      },
      {
        name: "Javan Edelweiss",
        scientificName: "Anaphalis javanica",
        habitat: "Subalpine Meadows",
        description:
          "Blanketing the Surya Kencana meadow in silver-white bloom.",
      },
    ],
    importanceSubtitle:
      "Jakarta's water tower and Java's mossiest mountain sanctuary.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Gibbon song rings through orchid-laden cloud forest holding hundreds of plant species per hillside. Javan hawk-eagles, surilis, and endemic amphibians crowd this compact hotspot. Nowhere in Java packs more montane life per hectare.",
      },
      {
        title: "Water Systems",
        description:
          "These twin volcanoes are the water tower for southern watersheds feeding Jakarta's vast urban region. Forests release that water slowly through every dry month. The capital region drinks from these mossy slopes.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Cibodas draws school groups, researchers, and trekkers to Indonesia's oldest mountain-tourism gateway. Porter, guiding, and homestay work sustains highland villages. Education and recreation fund the forest's future.",
      },
    ],
    extraStats: [{ label: "Elevation", value: "Up to 3,019 m" }],
    timeline: [],
    threatImage: "/images/issues/Tourism_pressure.jpg",
    sources: balai("Gunung Gede Pangrango"),
  },
  "betung-kerihun": {
    province: "West Kalimantan",
    island: "Borneo",
    designation: "National Park",
    profileHeading: "Heart of Borneo",
    profile: [
      "Betung Kerihun anchors the Heart of Borneo, a roadless sweep of dipterocarp forest along the Malaysian frontier.",
      "Orangutans, clouded leopards, and hornbills roam forests that Dayak communities have stewarded for generations.",
      "Transboundary patrols with neighboring Sarawak and Dayak customary guardianship keep this Heart of Borneo forest standing.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Rainforest"],
    flora: [
      {
        name: "Ulin Ironwood",
        scientificName: "Eusideroxylon zwageri",
        habitat: "Lowland Rainforest",
        description:
          "Borneo's legendary iron-hard timber tree, living for centuries.",
      },
      {
        name: "Meranti",
        scientificName: "Shorea spp.",
        habitat: "Lowland Rainforest",
        description:
          "Dipterocarp giants mast-fruiting across the interior hills.",
      },
    ],
    importanceSubtitle:
      "The unbroken green core of the Heart of Borneo.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Orangutans, clouded leopards, and hornbills roam forests ranked among the island's richest. New frogs, gingers, and orchids emerge from surveys year after year. The Heart of Borneo beats strongest here.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Vast intact dipterocarp forest forms one of Borneo's great carbon vaults. Unbroken canopy keeps rainfall recycling deep inland. Its scale is its superpower — size itself is the conservation strategy.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Dayak villages hold customary forests around the park, harvesting rattan, honey, and fish under old-growth canopy. Community mapping and park patrols defend the frontier together. Tradition is the first line of protection.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Illegal_Logging.jpg",
    sources: balai("Betung Kerihun"),
  },
  "kayan-mentarang": {
    province: "North Kalimantan",
    island: "Borneo",
    designation: "National Park",
    profileHeading: "Borneo's Greatest Wilderness",
    profile: [
      "Kayan Mentarang is Borneo's largest protected area — over a million hectares of unbroken rainforest with barely a road.",
      "Its rivers, salt springs, and customary Dayak lands form one of Asia's last true wildernesses.",
      "Co-managed with surrounding Dayak customary lands, the park pairs traditional stewardship with modern forest monitoring.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Rainforest"],
    flora: [
      {
        name: "Ulin Ironwood",
        scientificName: "Eusideroxylon zwageri",
        habitat: "Lowland Rainforest",
        description:
          "Centuries-old ironwood emerging from the deep interior forest.",
      },
      {
        name: "Meranti",
        scientificName: "Shorea spp.",
        habitat: "Lowland Rainforest",
        description:
          "Canopy dipterocarps fruiting in spectacular synchronized masts.",
      },
    ],
    importanceSubtitle:
      "Over a million hectares of roadless wilderness in Borneo's far north.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Orangutans and helmeted hornbills persist in forests so remote that salt licks, not roads, mark the map. Clouded leopards, sun bears, and endemic pheasants complete the interior cast. This is Borneo as it was centuries ago.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Over a million hectares of roadless rainforest — Borneo's largest protected carbon store. Its sheer intactness stabilizes weather far beyond its borders. Wilderness at this scale is now rarer than any species in it.",
      },
      {
        title: "Water Systems",
        description:
          "The Kayan and Mentarang rivers begin here, running clear and cold to North Kalimantan's lowlands. Rapids, waterfalls, and pristine tributaries sustain fisheries downstream. Everything flows from this green roof.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Illegal_Logging.jpg",
    sources: balai("Kayan Mentarang"),
  },
  "lore-lindu": {
    province: "Central Sulawesi",
    island: "Sulawesi",
    designation: "National Park",
    profileHeading: "Megaliths in the Mist",
    profile: [
      "Lore Lindu's mossy highlands hide ancient stone megaliths among forests found nowhere else — a Wallacean world of endemic life.",
      "Anoa, babirusa, and flocks of maleo birds move through valleys where cloud forest meets living tradition.",
      "Community agreements around the park blend shade-grown highland coffee with forest protection, easing pressure on the core wilderness.",
    ],
    ecosystems: ["Montane Rainforest", "Lowland Rainforest"],
    flora: [
      {
        name: "Sulawesi Ebony",
        scientificName: "Diospyros celebica",
        habitat: "Lowland Rainforest",
        description:
          "Striped black-and-gold hardwood prized for centuries, now strictly protected.",
      },
      {
        name: "Fig Trees",
        scientificName: "Ficus spp.",
        habitat: "Lowland Rainforest",
        description:
          "Keystone fruit trees feeding hornbills, macaques, and maleo chicks.",
      },
    ],
    importanceSubtitle:
      "Megaliths, mist, and Wallacean wonders in Sulawesi's highlands.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Anoa, babirusa, and maleo share misty valleys with tarsiers and endemic kingfishers. Wallacean isolation packed this park with species found on no other island. Every trail is a lesson in evolution.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Highland forests cool Central Sulawesi's farms and cities while banking montane carbon. Cloud stripping waters slopes that rain gauges miss. The mountains make their own weather — and share it with the lowlands.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Megalith-dotted valleys draw cultural tourism while shade-grown highland coffee links farmer incomes to standing forest. Village agreements guard the park edge. Heritage and harvest reinforce each other here.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Lore Lindu"),
  },
  "bogani-nani-wartabone": {
    province: "North Sulawesi & Gorontalo",
    island: "Sulawesi",
    designation: "National Park",
    profileHeading: "Sulawesi's Green Fortress",
    profile: [
      "Bogani Nani Wartabone is Sulawesi's largest rainforest block, shielding the island's weird and wonderful endemics.",
      "Crested black macaques troupe through the canopy while maleo birds incubate their giant eggs in sun-warmed sands.",
      "Maleo nesting-ground guardians from nearby villages have become a celebrated model of community conservation.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Rainforest"],
    flora: [
      {
        name: "Sulawesi Ebony",
        scientificName: "Diospyros celebica",
        habitat: "Lowland Rainforest",
        description:
          "The island's famed striped hardwood, guarded in the park's core zone.",
      },
      {
        name: "Fig Trees",
        scientificName: "Ficus spp.",
        habitat: "Lowland Rainforest",
        description:
          "Fruiting giants sustaining macaques, hornbills, and cuscus.",
      },
    ],
    importanceSubtitle:
      "Sulawesi's largest forest fortress for macaques, maleo, and tarsiers.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Crested black macaques — among the world's most endangered primates — troupe through these canopies in their hundreds. Maleo, tarsiers, and cuscus complete Sulawesi's strangest cast. No other forest holds this exact ensemble.",
      },
      {
        title: "Carbon & Climate",
        description:
          "The Minahassa peninsula's green lung banks lowland and montane carbon across a volcanic spine. Forests temper storms rolling in from two seas. The park is the peninsula's climate shield.",
      },
      {
        title: "Water Systems",
        description:
          "Forested watersheds feed Gorontalo's rice lands and Kotamobagu's towns. Springs run clear where canopy stands and muddy where it falls. Water quality maps the forest boundary exactly.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Bogani Nani Wartabone"),
  },
  bantimurung: {
    province: "South Sulawesi",
    island: "Sulawesi",
    designation: "National Park",
    profileHeading: "Kingdom of Butterflies",
    profile: [
      "Bantimurung's limestone towers rise over waterfalls and karst forest swirling with hundreds of butterfly species.",
      "It is a beloved weekend wilderness where South Sulawesi meets one of Earth's great insect spectacles.",
      "Weekend crowds flock to its waterfalls, and butterfly breeding houses channel that love into conservation income.",
    ],
    ecosystems: ["Karst Forest", "Lowland Rainforest"],
    flora: [
      {
        name: "Bitti",
        scientificName: "Vitex cofassus",
        habitat: "Karst Forest",
        description:
          "Prized hardwood tree of Sulawesi's karst forests, standing tall among the limestone towers.",
      },
      {
        name: "Fig Trees",
        scientificName: "Ficus spp.",
        habitat: "Tropical Forest",
        description:
          "Keystone fruit trees feeding hornbills, macaques, and butterflies year-round.",
      },
    ],
    importanceSubtitle:
      "Waterfalls, karst towers, and a blizzard of butterflies.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Hundreds of butterfly species — swallowtails, birdwings, and endemics — swirl over karst streams in globally famous concentrations. Tarsiers and cuscus emerge after dark in the tower karst. It is Indonesia's greatest insect theater.",
      },
      {
        title: "Water Systems",
        description:
          "Karst springs burst from cave mouths into waterfalls feeding Maros farmlands below. Underground rivers store dry-season water in limestone aquifers. The towers are water tanks wearing forest.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Waterfall crowds, butterfly houses, and riverside food stalls employ thousands around the park gates. Weekend love for Bantimurung converts directly into protection budgets. Affection is a conservation strategy.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Deforestation.jpg",
    sources: balai("Bantimurung-Bulusaraung"),
  },
  "rawa-aopa": {
    province: "Southeast Sulawesi",
    island: "Sulawesi",
    designation: "National Park",
    profileHeading: "Savanna, Swamp, and Sea",
    profile: [
      "Rawa Aopa Watumohai stitches savanna, peat swamp, and mangrove into one coastal plain in Southeast Sulawesi.",
      "Anoa graze the open grasslands while maleo nest along the forest edge — a Wallacean mosaic in miniature.",
      "Wetland restoration and maleo nest protection bring rangers and coastal villages together around the plain.",
    ],
    ecosystems: ["Savanna", "Peat Swamp", "Mangrove Forest"],
    flora: [
      {
        name: "Bakau Mangrove",
        scientificName: "Rhizophora spp.",
        habitat: "Mangrove Forest",
        description:
          "Stilt-rooted mangroves nursing fish and crabs along the sheltered coast.",
      },
      {
        name: "Gelam",
        scientificName: "Melaleuca cajuputi",
        habitat: "Peat Swamp",
        description:
          "Paper-barked swamp tree fringing the peat pools and wet savanna edges.",
      },
    ],
    importanceSubtitle:
      "Savanna, swamp, and mangrove woven into one coastal plain.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Anoa herds wade the savanna while maleo call from the forest edge and crocodiles patrol the mangroves. Three ecosystems triple the wildlife menu in one plain. Nowhere else in Sulawesi compresses so much into so little.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Peat soils, mangrove mud, and savanna roots bank blue and green carbon side by side. The mosaic stores more, per hectare, than any single habitat could. Small park, dense vault.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Coastal fishers work mangrove nurseries that the park's rivers sustain. Savanna edges host traditional grazing under ranger agreements. Protection and production share the plain.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Rawa Aopa Watumohai"),
  },
  komodo: {
    province: "East Nusa Tenggara",
    island: "Nusa Tenggara",
    designation: "National Park",
    profileHeading: "Realm of the Dragon",
    profile: [
      "Komodo is the only place on Earth where giant monitor lizards still rule — the legendary Komodo dragon.",
      "Savanna hills, dry monsoon forest, and coral seas make this UNESCO site one of the planet's most storied landscapes.",
      "Ranger stations across the islands monitor dragons and dive sites, balancing world fame with a fragile dry ecosystem.",
    ],
    ecosystems: ["Savanna", "Dry Monsoon Forest"],
    flora: [
      {
        name: "Lontar Palm",
        scientificName: "Borassus flabellifer",
        habitat: "Savanna",
        description:
          "Fan palms silhouetting the dragon's savanna hunting grounds.",
      },
      {
        name: "Sepang",
        scientificName: "Caesalpinia sappan",
        habitat: "Dry Monsoon Forest",
        description:
          "Redwood tree of the dry forest, long valued for dye and medicine.",
      },
    ],
    importanceSubtitle:
      "Dragons, savannas, and coral seas — nature's most storied islands.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Komodo dragons — giant monitor lizards found nowhere else — rule deer, boar, and megapode prey across these islands. Reefs below hold manta rays, turtles, and coral gardens of global rank. Land and sea compete for superlatives here.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Dry monsoon forest and savanna bank carbon in one of Indonesia's harshest climates, while seagrass meadows store blue carbon offshore. The park proves even dry landscapes punch above their weight. Aridity is no excuse for emptiness.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Dragon trekking employs rangers, guides, and boat crews across Komodo's villages, funding protection from fame itself. Handicraft and homestay economies spread the benefit. The dragon pays its own guards.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "1991",
        title: "UNESCO World Heritage Listing",
        description:
          "Komodo is inscribed for the dragon and the exceptional marine and terrestrial life around it.",
      },
    ],
    threatImage: "/images/issues/Tourism_pressure.jpg",
    sources: balai("Komodo"),
  },
  kelimutu: {
    province: "Flores, East Nusa Tenggara",
    island: "Nusa Tenggara",
    designation: "National Park",
    profileHeading: "Lakes of Three Colors",
    profile: [
      "Kelimutu's three crater lakes shift between turquoise, green, and black — sacred waters in Flores cosmology.",
      "Montane forest rings the craters, sheltering hawk-eagles above villages woven into the volcano's story.",
      "Lake guardians from nearby villages help watch the craters, where custom and conservation share the same mountain.",
    ],
    ecosystems: ["Montane Forest"],
    flora: [
      {
        name: "Mountain Casuarina",
        scientificName: "Casuarina junghuhniana",
        habitat: "Montane Forest",
        description:
          "Feathery highland trees ringing the crater rims above the colored lakes.",
      },
      {
        name: "Tree Ferns",
        scientificName: "Cyathea spp.",
        habitat: "Montane Forest",
        description:
          "Towering ferns forming the green understory of the mossy crater forest.",
      },
    ],
    importanceSubtitle:
      "Three crater lakes, one sacred mountain, endless mist.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Flores hawk-eagles circle crater rims while endemic rats, shrews, and orchids hide in the montane moss. Isolation has seasoned a distinct highland community found on no neighboring island. Small park, sharp endemism.",
      },
      {
        title: "Water Systems",
        description:
          "Volcanic slopes catch clouds that feed Ende's farms and towns below. Forested catchments keep that water clean and constant through the dry east monsoon. The mountain is the regency's reservoir.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Crater-lake pilgrims and sunrise trekkers sustain Moni's guesthouses and guides. Coffee gardens in the buffer link flavor to forest cover. Sacred waters fund their own protection.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Deforestation.jpg",
    sources: balai("Kelimutu"),
  },
  rinjani: {
    province: "Lombok, West Nusa Tenggara",
    island: "Nusa Tenggara",
    designation: "National Park",
    elevation: "Up to 3,726 m ASL",
    profileHeading: "Throne of the Wind",
    profile: [
      "Rinjani rises 3,726 meters above Lombok, crowned by the turquoise crater lake Segara Anak.",
      "Its slopes climb from lowland forest through edelweiss meadows to a summit revered in Sasak and Balinese spiritual life.",
      "Community porter cooperatives and mountain clean-up programs carry Rinjani's trekking fame while replanting its slopes.",
    ],
    ecosystems: ["Montane Forest", "Volcanic Highlands"],
    flora: [
      {
        name: "Edelweiss",
        scientificName: "Anaphalis spp.",
        habitat: "Volcanic Highlands",
        description:
          "Silver everlasting flowers carpeting the high volcanic meadows.",
      },
      {
        name: "Mountain Casuarina",
        scientificName: "Casuarina junghuhniana",
        habitat: "Montane Forest",
        description:
          "Needle-leafed trees stabilizing the volcano's ash slopes.",
      },
    ],
    importanceSubtitle:
      "Lombok's towering volcano and the lake that crowns it.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "The endemic Rinjani scops owl calls from cloud forest where ebony leaf monkeys leap and orchids crowd the branches. Altitude zones stack distinct communities from lowland to summit. A mountain of stacked worlds.",
      },
      {
        title: "Water Systems",
        description:
          "Segara Anak's crater lake and forested slopes water all of Lombok — rice fields, towns, and taps alike. The volcano is the island's only great reservoir. Every Lombok harvest begins on Rinjani.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Porter cooperatives, trek organizers, and Sembalun's lodges built Indonesia's model mountain-tourism economy. Clean-up programs and replanting keep the summit worthy of the climb. The mountain employs its own keepers.",
      },
    ],
    extraStats: [{ label: "Elevation", value: "Up to 3,726 m" }],
    timeline: [
      {
        period: "2018",
        title: "Lombok Earthquakes & Recovery",
        description:
          "Major earthquakes trigger landslides across the volcano, closing trekking routes through a long recovery.",
      },
    ],
    threatImage: "/images/issues/Tourism_pressure.jpg",
    sources: balai("Gunung Rinjani"),
  },
  "laiwangi-wanggameti": {
    province: "Sumba, East Nusa Tenggara",
    island: "Nusa Tenggara",
    designation: "National Park",
    profileHeading: "Sumba's Green Refuge",
    profile: [
      "Patches of monsoon forest in Sumba's dry hills — Laiwangi Wanggameti guards the island's last great woods.",
      "Hornbills cross the canopy while sandalwood seedlings take root in one of Indonesia's driest forest landscapes.",
      "Sandalwood nurseries and village forest agreements slowly return green to Sumba's dry hills.",
    ],
    ecosystems: ["Tropical Monsoon Forest"],
    flora: [
      {
        name: "Sandalwood",
        scientificName: "Santalum album",
        habitat: "Monsoon Forest",
        description:
          "Sumba's famed fragrant tree, the focus of patient replanting efforts.",
      },
      {
        name: "Lontar Palm",
        scientificName: "Borassus flabellifer",
        habitat: "Savanna",
        description:
          "Sugar palms of the surrounding savanna, tapped daily by Sumbanese farmers.",
      },
    ],
    importanceSubtitle:
      "Sumba's dryland refuge for hornbills, sandalwood, and cockatoos.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Sumba hornbills flap between the last great forest blocks while yellow-crested cockatoos flash over monsoon canopy. Endemic parrots and pigeons persist only where woods remain. On dry Sumba, this forest is an ark.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Monsoon forest banks carbon in a landscape where few trees survive the long dry season. Standing woods cool valleys and hold soil against erosion. Green islands in a brown sea.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Sandalwood replanting revives Sumba's fragrant heritage while lontar sugar sustains dryland farmers. Village forest agreements extend the park's ethic outward. Culture and canopy recover together.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Laiwangi Wanggameti"),
  },
  manusela: {
    province: "Seram, Maluku",
    island: "Maluku",
    designation: "National Park",
    profileHeading: "Spice Islands' Mountain Heart",
    profile: [
      "Manusela's karst ridges and montane rainforest form the wild heart of Seram in the Maluku islands.",
      "Salmon-crested cockatoos flash over valleys where clove-scented forests have perfumed global history.",
      "Mountain villages pair clove harvests with forest watch, keeping Seram's ridges among Maluku's wildest.",
    ],
    ecosystems: ["Lowland Rainforest", "Montane Rainforest"],
    flora: [
      {
        name: "Clove",
        scientificName: "Syzygium aromaticum",
        habitat: "Lowland Rainforest",
        description:
          "The spice that drew the world to Maluku, wild in Seram's forests.",
      },
      {
        name: "Kayu Putih",
        scientificName: "Melaleuca cajuputi",
        habitat: "Lowland Rainforest",
        description:
          "Cajuput trees yielding the medicinal oil Maluku is famous for.",
      },
    ],
    importanceSubtitle:
      "Seram's mountain heart, perfumed with clove and cockatoo calls.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Salmon-crested cockatoos, bandicoots, and Seram honeyeaters occur on no other island — evolution in mountain isolation. Cassowaries boom through lowland alluvial forest. Seram is Maluku's species factory.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Montane forests steady one of Indonesia's wettest island climates, banking carbon from coast to high peaks. Cloud forests squeeze water from passing mist. The mountain manufactures weather.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Clove gardens and cajuput oil distilleries carry centuries of spice-island craft into the buffer villages. Mountain guides lead birders to endemic after endemic. The spice trade now funds the forest.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Illegal_Logging.jpg",
    sources: balai("Manusela"),
  },
  "aketajawe-lolobata": {
    province: "Halmahera, North Maluku",
    island: "Maluku",
    designation: "National Park",
    profileHeading: "Stage of the Standardwing",
    profile: [
      "Aketajawe-Lolobata protects Halmahera's vast lowland rainforest, where male standardwings parachute through dawn leks.",
      "It is Wallacea in full voice — parrots, scrubfowl, and cuscus in forests Alfred Wallace himself once walked.",
      "Birdwatching trails for the standardwing bring new income to Halmahera's forest-edge villages.",
    ],
    ecosystems: ["Lowland Rainforest"],
    flora: [
      {
        name: "Nutmeg",
        scientificName: "Myristica fragrans",
        habitat: "Lowland Rainforest",
        description:
          "Wild nutmeg kin of the spice that shaped Maluku's destiny.",
      },
      {
        name: "Clove",
        scientificName: "Syzygium aromaticum",
        habitat: "Lowland Rainforest",
        description:
          "Aromatic clove trees threading the Halmahera lowlands.",
      },
    ],
    importanceSubtitle:
      "Halmahera's lowland stage for Wallace's most theatrical bird.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Wallace's standardwings parachute through dawn leks while parrots, scrubfowl, and cuscus fill the lowland chorus. Halmahera holds more endemic birds than any island its size. Every dawn is a premiere.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Halmahera's largest lowland forest is also its largest lowland carbon store — standing directly in mining country. Keeping it intact is a climate decision made daily. Protection is the policy; the trees are the vault.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Tobelo and Togutil customary lands interleave with the park, pairing tradition with patrols. Standardwing tourism brings new income to forest-edge villages. Birds pay better alive than forests do cleared.",
      },
    ],
    extraStats: [],
    timeline: [],
    sources: balai("Aketajawe-Lolobata"),
  },
  wasur: {
    province: "South Papua",
    island: "Papua",
    designation: "National Park",
    profileHeading: "Serengeti of Papua",
    profile: [
      "Wasur's floodplains, savannas, and melaleuca woodlands earn it the name Serengeti of Papua.",
      "Wallabies graze beside magpie geese while cassowaries patrol the monsoon forest edge near Merauke.",
      "Marind rangers combine customary hunting calendars with wetland patrols across the floodplain.",
    ],
    ecosystems: ["Savanna", "Wetlands", "Monsoon Forest"],
    flora: [
      {
        name: "Kayu Putih",
        scientificName: "Melaleuca spp.",
        habitat: "Wetlands",
        description:
          "Paperbark woodlands fringing the seasonal floodplains.",
      },
      {
        name: "Screw Pine",
        scientificName: "Pandanus spp.",
        habitat: "Wetlands",
        description:
          "Stilt-rooted pandans lining the swamp channels and lake edges.",
      },
    ],
    importanceSubtitle:
      "Papua's great floodplain, where wallabies graze beside the wetlands.",
    importance: [
      {
        title: "Biodiversity",
        description:
          "Agile wallabies, cassowaries, and magpie geese gather on floodplains in some of New Guinea's greatest wildlife spectacles. Brolgas dance beside pelicans while crocodiles patrol the channels. The Trans-Fly at full chorus.",
      },
      {
        title: "Carbon & Climate",
        description:
          "Wetland soils, melaleuca woodlands, and savanna roots bank carbon across a pulsing floodplain. Seasonal fires and floods have tuned this system for millennia. It is a working wilderness, not an empty one.",
      },
      {
        title: "Local Livelihoods",
        description:
          "Marind customary hunting calendars and sago traditions govern the floodplain alongside ranger patrols. Seasonal harvests of fish and game sustain riverside villages. Customary law is the oldest management plan here.",
      },
    ],
    extraStats: [],
    timeline: [],
    threatImage: "/images/issues/Poaching.jpg",
    sources: balai("Wasur"),
  },
};

/* One-line, general-knowledge descriptions for documented species.
   Shown on wildlife cards; keyed by common name. */
export const speciesDescriptions: Record<string, string> = {
  "Sumatran Orangutan": "Red-haired great ape swinging through the canopy, found only in northern Sumatra.",
  "Sumatran Tiger": "The last island tiger on Earth, stalking the Barisan forests of Sumatra.",
  "Sumatran Elephant": "Island giant engineering the forest by dispersing seeds along ancient trails.",
  "Sumatran Rhinoceros": "The world's smallest and hairiest rhino, hiding in Sumatra's densest forests.",
  "Bornean Orangutan": "Borneo's red ape, building nightly nests high in the peat swamp canopy.",
  "Javan Rhinoceros": "One of Earth's rarest mammals, surviving only in Ujung Kulon.",
  Bekantan: "Long-nosed monkey of the mangroves, leaping between riverside trees.",
  "Bornean Bear": "The world's smallest bear, climbing for honey in Borneo's forests.",
  Cenderawasih: "Bird of paradise whose courtship dance lights up Papua's canopy.",
  "Doria's tree-kangaroo": "Highland marsupial browsing leaves in Papua's mossy forests.",
  "Javan Gibbon": "Silvery singing ape swinging through Java's remaining rainforests.",
  "Javan Leopard": "Java's elusive top predator, haunting misty highland forests.",
  "Javan Hawk-Eagle": "Indonesia's national bird, soaring over Java's volcanoes.",
  Banteng: "Wild forest cattle grazing the savannas in herds.",
  "Green Peafowl": "Emerald peacock dancing on the open savanna at dawn.",
  "Sunda Clouded Leopard": "Cloud-patterned cat ruling Borneo's rainforest night.",
  "Helmeted Hornbill": "The 'flying ivory' hornbill, booming across Borneo's canopy.",
  Anoa: "Dwarf forest buffalo of Sulawesi, shy browser of the understory.",
  Maleo: "Megapode burying giant eggs in sun-warmed sands to hatch alone.",
  "Celebes Crested Macaque": "Black-crested macaque trooping noisily through North Sulawesi.",
  "Blume's Peacock Swallowtail": "Iridescent swallowtail glittering over karst streams.",
  "Sulawesi Bear Cuscus": "Slow-moving marsupial dozing in Sulawesi's canopy.",
  "Komodo Dragon": "The world's largest lizard, ruling Komodo's savanna hills.",
  "Timor Rusa Deer": "Island deer grazing the dry savannas of Nusa Tenggara.",
  "Flores Hawk-Eagle": "Rare raptor circling the crater rims of Flores.",
  "Rinjani Scops Owl": "Tiny owl found only on the slopes of Mount Rinjani.",
  "Ebony Leaf Monkey": "Black-leafed monkey with orange infants, leaping through montane forest.",
  "Sumba Hornbill": "Great hornbill found only on the island of Sumba.",
  "Yellow-crested Cockatoo": "Critically endangered white cockatoo of the eastern islands.",
  "Salmon-crested Cockatoo": "Pink-crested cockatoo endemic to the Seram archipelago.",
  "Seram Bandicoot": "Rare forest bandicoot found only on Seram island.",
  "Wallace's Standardwing": "Bird of paradise whose males parachute with long white plumes.",
  "Dusky Scrubfowl": "Mound-building bird incubating eggs in warm volcanic sand.",
  "Agile Wallaby": "Grazing wallaby bounding across the Trans-Fly savannas.",
  "Southern Cassowary": "Towering flightless bird dispersing giant rainforest seeds.",
  Siamang: "Black singing ape whose dawn duets echo across Sumatra's canopy.",
  "Sumatran Striped Rabbit": "Tiny striped rabbit found only in the Barisan highlands of Sumatra.",
  "Asian Tapir": "Gentle forest gardener dispersing large seeds through Sumatra's lowlands.",
  "Storm's Stork": "Rare stork stalking fish in the blackwater peat swamps.",
  "False Gharial": "Slender-snouted crocodilian gliding through peat swamp rivers.",
  "Agile Gibbon": "Swift small ape singing in duets through the peat swamp canopy.",
  "Rhinoceros Hornbill": "Hornbill with a blazing casque, planting figs across Borneo.",
  Dingiso: "Highland tree-kangaroo found only in the Sudirman mountains of Papua.",
  "White-winged Duck": "Shadowy duck of forest pools, one of the world's rarest waterbirds.",
  "Long-tailed Macaque": "Adaptable monkey trooping from coasts to volcanic highlands.",
  Dhole: "Whistling wild dog hunting in packs across the savanna.",
  "Javan Surili": "Orange-crested leaf monkey found only in Java's western forests.",
  "Javan Trogon": "Crimson-bellied bird of the mossy montane forest.",
  "Maroon Langur": "Reddish leaf monkey of Borneo's lowland rainforest.",
  "Müller's Bornean Gibbon": "Gray singing gibbon of Borneo's northern forests.",
  Babirusa: "Tusked forest pig found only on Sulawesi and nearby islands.",
  "Spectral Tarsier": "Huge-eyed nocturnal hunter leaping through Sulawesi's night forest.",
  "Lowland Anoa": "Smallest wild buffalo on Earth, browsing Sulawesi's lowlands.",
  "Moor Macaque": "Stocky macaque of South Sulawesi's karst and lowland forests.",
  "Knobbed Hornbill": "Red-knobbed hornbill, Sulawesi's most spectacular flying frugivore.",
  "Estuarine Crocodile": "Giant saltwater crocodile ruling mangroves and river mouths.",
  "Orange-footed Scrubfowl": "Mound-building bird of the dry eastern islands.",
  "Flores Monarch": "Black-and-white flycatcher found only in Flores forests.",
  "Chestnut-backed Thrush": "Endemic songbird of Flores's mossy highlands.",
  "Apricot-breasted Sunbird": "Tiny sunbird found only on the island of Sumba.",
  "Moluccan King Parrot": "Crimson-and-green parrot of Maluku's forests.",
  "Seram Friarbird": "Noisy honeyeater found only on Seram island.",
  "Halmahera Paradise-crow": "Glossy crow performing parachute displays over Halmahera.",
  "Invisible Rail": "Elusive flightless rail found only on Halmahera.",
  "Magpie Goose": "Flocking goose grazing the floodplains of the Trans-Fly.",
  Brolga: "Elegant crane dancing on the wetlands of southern Papua.",
};

/* Generic, threat-type-level descriptions (no per-forest claims). */
export const threatDescriptions: Record<string, string> = {
  Deforestation: "Large-scale clearing that fragments habitat and releases stored carbon.",
  "Illegal logging": "Unlicensed timber extraction degrading forest structure and canopy.",
  Poaching: "Illegal hunting pressuring rare mammals and birds toward extinction.",
  "Habitat loss": "Shrinking living space isolating wildlife populations.",
  "Illegal Logging": "Unlicensed timber extraction degrading forest structure and canopy.",
  "Climate change": "Shifting rainfall and heat stressing fragile forest systems.",
  "Forest fires": "Recurring blazes destroying habitat and choking the region in haze.",
  Mining: "Extractive concessions carving into protected forest frontiers.",
  "Peat fires": "Smouldering underground fires releasing vast ancient carbon.",
  Drainage: "Canals drying peat domes, making them flammable and subsiding.",
  "Agricultural expansion": "Farmland conversion eating into forest edges year by year.",
  "Human-elephant conflict": "Crop-raiding clashes where farms meet elephant range.",
  "Tourism pressure": "Unmanaged visitor growth straining trails, wildlife, and villages.",
  "Invasive species": "Introduced plants and animals outcompeting native forest life.",
  "Natural disasters": "Tsunamis, eruptions, and storms threatening exposed coasts and slopes.",
};
