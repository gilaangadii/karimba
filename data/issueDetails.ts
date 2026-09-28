/* ============================================================
   KARIMBA — ISSUE DETAIL DATA (centralized, reusable template)
   ------------------------------------------------------------
   ONE template renders all four issues; only this file changes
   per issue. DATA INTEGRITY RULES:
   - Only verified figures are listed. Unverified years show
     value: null and render as "Data not yet available".
   - Never mix datasets without labeling them.
   ============================================================ */

export interface TrendRow {
  label: string;
  value: number | null;
  display: string;
}

export interface TrendData {
  metric: string;
  unit: string;
  period: string;
  scope: string;
  source: string;
  note?: string;
  rows: TrendRow[];
}

export interface FocusItem {
  title: string;
  value?: string;
  note?: string;
}

export interface IssueCard {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface IssueDetail {
  heroLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  overviewHeading: string;
  overviewBody: string[];
  video?: string;
  videoSourceUrl?: string;
  stats?: { value: string; unit?: string; label: string }[];
  statsSource?: string;
  trendEyebrow: string;
  trendHeading: string;
  trendIntro: string;
  trend: TrendData;
  focusEyebrow: string;
  focusHeading: string;
  focusIntro: string;
  focusItems: FocusItem[];
  focusFooterNote?: string;
  focusSource?: string;
  driversHeading: string;
  driversIntro: string;
  drivers: IssueCard[];
  impactsHeading: string;
  impactsIntro: string;
  impacts: IssueCard[];
  actionsHeading: string;
  actionsIntro: string;
  actions: IssueCard[];
}

export const issueDetails: Record<string, IssueDetail> = {
  deforestation: {
    heroLabel: "Deforestation Forest Issue",
    title: "Deforestation",
    subtitle: "Vanishing Forests, Uncertain Tomorrows",
    description:
      "Loss of forest cover due to land conversion, logging, mining, infrastructure development and other pressures continues to affect Indonesia's forests and ecosystems.",
    image: "/images/issues/Deforestation.jpg",
    overviewHeading: "What is Deforestation?",
    video: "/images/issues/Deforestation.mp4",
    videoSourceUrl: "https://youtu.be/Ic-J6hcSKa8?si=Aj_aFXGlNIvu_hed",
    overviewBody: [
      "Deforestation is the permanent removal or loss of forest cover, usually caused by changes in land use such as agriculture, logging, mining, and infrastructure development.",
      "In Indonesia, forest loss is monitored through official observation periods. Understanding how, where, and how fast forests change is the first step toward keeping them standing.",
    ],
    stats: [
      { value: "175.4K", unit: "ha", label: "Net deforestation in Indonesia (2024)" },
      { value: "216.2K", unit: "ha", label: "Gross deforestation in Indonesia (2024)" },
    ],
    statsSource: "Source: Ministry of Forestry of the Republic of Indonesia, 2024",
    trendEyebrow: "National Trend",
    trendHeading: "Forest Loss by Observation Period",
    trendIntro:
      "KLHK measures deforestation through specific observation periods. The latest fully documented period is presented here using its original reporting — net loss accounts for reforestation within the same period.",
    trend: {
      metric: "Deforestation",
      unit: "ha",
      period: "2021–2022",
      scope: "Indonesia",
      source: "Ministry of Forestry / KLHK",
      note:
        "KLHK reports deforestation using observation periods; this dataset is not equivalent to annual calendar-year measurements.",
      rows: [
        { label: "Net deforestation", value: 104032.9, display: "104,032.9 ha" },
        { label: "Gross deforestation", value: 119449.1, display: "119,449.1 ha" },
        { label: "Reforestation", value: 15416.2, display: "15,416.2 ha" },
      ],
    },
    focusEyebrow: "A Closer Look",
    focusHeading: "Where Is Forest Loss Concentrated?",
    focusIntro:
      "Forest loss in Indonesia is not evenly distributed. These five provinces recorded the highest deforestation during 2021–2022, showing where pressure on forests is most severe.",
    focusItems: [
      { title: "Kalimantan Timur dan Kalimantan Utara", value: "13,758.8 ha" },
      { title: "Kalimantan Tengah", value: "11,564.4 ha" },
      { title: "Riau", value: "9,254.8 ha" },
      { title: "Kalimantan Barat", value: "7,845.7 ha" },
      { title: "Nusa Tenggara Barat", value: "6,411.2 ha" },
    ],
    focusFooterNote:
      "The provincial data shown here is from 2021–2022, while the national figures above are from 2024.",
    focusSource: "Source: BPS, Angka Deforestasi Indonesia 2013–2022; KLHK.",
    driversHeading: "Main Drivers of Forest Loss",
    driversIntro:
      "Forest loss in Indonesia is driven by various human activities, including agricultural expansion, logging, mining, and infrastructure development.",
    drivers: [
      {
        icon: "sprout",
        image: "/images/issues/Agricultural_Expansion.jpg",
        title: "Agricultural Expansion",
        description:
          "Conversion of forests into plantations such as oil palm, acacia, and other crops.",
      },
      {
        icon: "axe",
        image: "/images/issues/Illegal_Logging.jpg",
        title: "Logging",
        description:
          "Legal and illegal logging continue to reduce forest cover.",
      },
      {
        icon: "pickaxe",
        image: "/images/issues/Mining.jpg",
        title: "Mining",
        description:
          "Extraction of minerals leads to large-scale forest clearing and habitat loss.",
      },
      {
        icon: "construction",
        image: "/images/issues/Infrastructure_Development.jpg",
        title: "Infrastructure Development",
        description:
          "Roads, settlements, and other infrastructure open access to forest areas.",
      },
    ],
    impactsHeading: "Why Does It Matter?",
    impactsIntro:
      "When forests fall, the consequences reach far beyond the cleared land itself.",
    impacts: [
      {
        icon: "bird",
        image: "/images/issues/biodiversity.png",
        title: "Biodiversity",
        description:
          "Habitat loss pushes endemic wildlife toward smaller, isolated populations.",
      },
      {
        icon: "cloud-sun",
        image: "/images/issues/Climate.jpg",
        title: "Climate",
        description:
          "Cleared forests release stored carbon and weaken regional climate stability.",
      },
      {
        icon: "tree",
        image: "/images/issues/Ecosystem.jpg",
        title: "Ecosystems",
        description:
          "Broken canopies disrupt water cycles, soils, and forest regeneration.",
      },
      {
        icon: "users",
        image: "/images/issues/Communities.jpg",
        title: "Communities",
        description:
          "Forest-dependent livelihoods lose resources, protection, and heritage.",
      },
    ],
    actionsHeading: "How Can We Prevent It?",
    actionsIntro:
      "Protecting forests starts with prevention, responsible choices, and collective action. Here are some ways we can make a difference.",
    actions: [
      {
        icon: "shield",
        image: "/images/issues/Protect_Existing_Forests.jpg",
        title: "Protect Existing Forests",
        description:
          "Strengthen forest protection and prevent illegal logging, land conversion, and other harmful activities.",
      },
      {
        icon: "sprout",
        image: "/images/issues/Restore_Degraded_Land.jpg",
        title: "Restore Degraded Land",
        description:
          "Reforest damaged areas and rehabilitate ecosystems with native vegetation.",
      },
      {
        icon: "recycle",
        image: "/images/issues/Use_Resources_Responsibly.jpg",
        title: "Use Resources Responsibly",
        description:
          "Reduce unnecessary consumption and choose products that support sustainable practices.",
      },
      {
        icon: "users",
        image: "/images/issues/Take_Part_&_Speak%20Up.jpg",
        title: "Take Part & Speak Up",
        description:
          "Support conservation initiatives, share reliable information, and encourage action in your community.",
      },
    ],
  },

  "forest-fires": {
    heroLabel: "Forest Fires Forest Issue",
    title: "Forest Fires",
    subtitle: "When Forests Burn, Life Pays the Price",
    description:
      "Recurring forest and land fires — especially on drained peatlands — damage ecosystems, threaten health, and release vast carbon into the atmosphere.",
    image: "/images/issues/Kebakaran_Hutan.jpg",
    overviewHeading: "What Are Forest Fires?",
    video: "/images/issues/Forest_Fire.mp4",
    videoSourceUrl: "https://youtu.be/5hghT1W33cY?si=4JcVKP2rtWP1oqts",
    overviewBody: [
      "Forest and land fires ignite almost every dry season in Indonesia, most severely where peatlands have been drained for plantations and development.",
      "Once alight, peat can smoulder underground for weeks. The resulting haze crosses provincial and national borders, turning a land problem into a regional crisis.",
    ],
    trendEyebrow: "National Trend",
    trendHeading: "Burned Area Over Time",
    trendIntro:
      "The official indicator is burned area, compiled from KLHK and SIPONGI records. Burned area must never be confused with hotspot counts or fire-event numbers.",
    trend: {
      metric: "Burned Area",
      unit: "ha",
      period: "Pending official annual series",
      scope: "Indonesia",
      source: "KLHK / SIPONGI (official series)",
      note: "Annual values will appear here once verified from official releases. No estimates are displayed.",
      rows: [],
    },
    focusEyebrow: "A Closer Look",
    focusHeading: "Where Are Forest Fires Most Severe?",
    focusIntro:
      "Fire follows drainage. Peat domes of Sumatra and Kalimantan and the dry lowlands of the east face the most recurrent burning.",
    focusItems: [
      {
        title: "Peatlands of Sumatra & Kalimantan",
        note: "Drained peat domes ignite easily and burn underground for weeks.",
      },
      {
        title: "Dry Lowlands of Nusa Tenggara",
        note: "Long dry seasons turn savanna and monsoon forest highly flammable.",
      },
    ],
    focusFooterNote: "Provincial ranking pending a verified annual burned-area series.",
    focusSource: "Source: KLHK / SIPONGI (official series).",
    driversHeading: "What Starts the Fires?",
    driversIntro:
      "Almost all forest fires in Indonesia are linked to human activity interacting with drained, flammable landscapes.",
    drivers: [
      {
        icon: "flame",
        image: "/images/issues/Land_Clearing.jpg",
        title: "Land Clearing",
        description:
          "Fire is still used to clear land cheaply, often escaping into surrounding forest.",
      },
      {
        icon: "droplets",
        image: "/images/issues/Peatland_Drying.jpg",
        title: "Peatland Drying",
        description:
          "Drainage canals dry peat domes, turning wet carbon vaults into fuel beds.",
      },
      {
        icon: "sun",
        image: "/images/issues/Prolonged_Dry_Conditions.jpg",
        title: "Prolonged Dry Conditions",
        description:
          "Extended dry seasons and drought years make ignition far more likely.",
      },
      {
        icon: "alert",
        image: "/images/issues/Human_Ignition_&_Accidental_Fires.jpg",
        title: "Human Ignition & Accidental Fires",
        description:
          "Discarded cigarettes, campfires, and sparks ignite tinder-dry landscapes.",
      },
    ],
    impactsHeading: "Why Does It Matter?",
    impactsIntro:
      "A single fire season can undo decades of forest growth and community health.",
    impacts: [
      {
        icon: "tree",
        image: "/images/issues/Habitat_Damage.jpg",
        title: "Habitat Damage",
        description:
          "Burned forests lose canopy, nesting sites, and food sources for years.",
      },
      {
        icon: "wind",
        image: "/images/issues/Air_Quality.jpg",
        title: "Air Quality",
        description:
          "Thick haze disrupts daily life, transport, and schools across the region.",
      },
      {
        icon: "factory",
        image: "/images/issues/Carbon_Emissions.jpg",
        title: "Carbon Emissions",
        description:
          "Burning peat releases carbon stored over millennia in a matter of weeks.",
      },
      {
        icon: "users",
        image: "/images/issues/Community_Health.jpg",
        title: "Community Health",
        description:
          "Smoke exposure harms respiratory health, especially in children and the elderly.",
      },
    ],
    actionsHeading: "How Can We Prevent It?",
    actionsIntro:
      "Fire prevention begins long before the dry season — with wet peat, watchful communities, and fast response.",
    actions: [
      {
        icon: "shield",
        title: "Prevent Open Burning",
        description:
          "Enforce zero-burning rules and promote fire-free land preparation.",
      },
      {
        icon: "droplets",
        image: "/images/issues/Keep_Peatlands_Wet.jpg",
        title: "Keep Peatlands Wet",
        description:
          "Block drainage canals and rewet peat domes so they cannot ignite.",
      },
      {
        icon: "bell",
        image: "/images/issues/Early_Detection.jpg",
        title: "Early Detection",
        description:
          "Monitor hotspots and dryness indicators to catch fires before they spread.",
      },
      {
        icon: "users",
        image: "/images/issues/Community_Response.jpg",
        title: "Community Response",
        description:
          "Train and equip village fire brigades as the first line of defense.",
      },
    ],
  },

  "biodiversity-loss": {
    heroLabel: "Biodiversity Loss Forest Issue",
    title: "Biodiversity Loss",
    subtitle: "When Forests Disappear, Species Follow",
    description:
      "Habitat loss and fragmentation push Indonesia's endemic wildlife toward extinction, unraveling ecosystems built over millions of years.",
    image: "/images/issues/Kehilangan_Keanekaragaman_Hayati.jpg",
    overviewHeading: "What Is Biodiversity Loss?",
    video: "/images/issues/Biodiversity_loss.mp4",
    videoSourceUrl: "https://youtu.be/lcNh_ZS3u-k?si=UaQrX5-6agBen-rz",
    overviewBody: [
      "Biodiversity loss is the decline and disappearance of species, driven in Indonesia mainly by shrinking and fragmenting forest habitat.",
      "Because so many Indonesian species live nowhere else, losing a single forest can mean losing species the world will never see again.",
    ],
    trendEyebrow: "National Trend",
    trendHeading: "Species at Risk",
    trendIntro:
      "There is no single official yearly 'biodiversity loss' number. The meaningful indicator is how many assessed species face extinction — not invented species-lost-per-year figures.",
    trend: {
      metric: "Species assessed as threatened",
      unit: "species (IUCN Red List)",
      period: "Latest assessment",
      scope: "Indonesia",
      source: "IUCN Red List",
      note: "Counts change as assessments are updated. Annual values will appear here once a verified yearly series exists.",
      rows: [],
    },
    focusEyebrow: "A Closer Look",
    focusHeading: "Which Species Are Most at Risk?",
    focusIntro:
      "These flagship species, all documented residents of Indonesia's forests, face the highest extinction-risk categories.",
    focusItems: [
      { title: "Sumatran Tiger", value: "Critically Endangered" },
      { title: "Bornean Orangutan", value: "Critically Endangered" },
      { title: "Javan Rhinoceros", value: "Critically Endangered" },
      { title: "Maleo", value: "Endangered" },
      { title: "Komodo Dragon", value: "Endangered" },
    ],
    focusSource: "Source: IUCN Red List categories.",
    driversHeading: "What Drives the Loss?",
    driversIntro:
      "Species vanish when the conditions they evolved with disappear faster than they can adapt.",
    drivers: [
      {
        icon: "axe",
        image: "/images/issues/Habitat_Loss.jpg",
        title: "Habitat Loss",
        description:
          "Cleared forests remove the food, shelter, and breeding grounds species need.",
      },
      {
        icon: "alert",
        image: "/images/issues/Habitat_Fragmentation.jpg",
        title: "Habitat Fragmentation",
        description:
          "Broken corridors isolate populations, shrinking gene pools over generations.",
      },
      {
        icon: "gavel",
        image: "/images/issues/Illegal_Wildlife_Trade.jpeg",
        title: "Illegal Wildlife Trade",
        description:
          "Poaching and trafficking target rare species for illegal markets.",
      },
      {
        icon: "cloud-rain",
        image: "/images/issues/Climate_and_Environmental_Change.jpg",
        title: "Climate and Environmental Change",
        description:
          "Shifting seasons and stressed habitats push vulnerable species further.",
      },
    ],
    impactsHeading: "Why Does It Matter?",
    impactsIntro:
      "Every lost species weakens the web that forests — and people — depend on.",
    impacts: [
      {
        icon: "mountain",
        image: "/images/issues/Ecosystem_Stability.jpg",
        title: "Ecosystem Stability",
        description:
          "Fewer species means fragile forests less able to recover from shocks.",
      },
      {
        icon: "fish",
        image: "/images/issues/Food_Webs.jpg",
        title: "Food Webs",
        description:
          "Missing predators and pollinators cascade through entire food chains.",
      },
      {
        icon: "leaf",
        image: "/images/issues/Genetic_Diversity.jpg",
        title: "Genetic Diversity",
        description:
          "Lost populations erase genetic heritage that took millennia to evolve.",
      },
      {
        icon: "users",
        image: "/images/issues/Communities.jpg",
        title: "Communities",
        description:
          "Local cultures and livelihoods tied to wildlife lose part of their identity.",
      },
    ],
    actionsHeading: "How Can We Help?",
    actionsIntro:
      "Protecting species means protecting the places and connections they live by.",
    actions: [
      {
        icon: "shield",
        image: "/images/issues/Protect_Key_Habitats.jpg",
        title: "Protect Key Habitats",
        description:
          "Keep strongholds like national parks intact, patrolled, and connected.",
      },
      {
        icon: "tree",
        image: "/images/issues/Restore_Wildlife_Corridors.jpg",
        title: "Restore Wildlife Corridors",
        description:
          "Reconnect fragments so isolated populations can meet and breed.",
      },
      {
        icon: "gavel",
        image: "/images/issues/Reject_Illegal_Wildlife_Products.jpg",
        title: "Reject Illegal Wildlife Products",
        description:
          "Refuse to buy trafficked animals and report wildlife crime.",
      },
      {
        icon: "book",
        image: "/images/issues/Support_Field_Research.jpg",
        title: "Support Field Research",
        description:
          "Ranger patrols and scientific monitoring turn data into protection.",
      },
    ],
  },

  "climate-change": {
    heroLabel: "Climate Change Forest Issue",
    title: "Climate Change",
    subtitle: "A Changing Climate, A Vulnerable Forest",
    description:
      "Rising temperatures, shifting rainfall, and extreme weather are reshaping Indonesia's forests — and the forests shape the climate in return.",
    image: "/images/issues/Climate_change.jpg",
    overviewHeading: "What Is Climate Change?",
    video: "/images/issues/Climate_Change.mp4",
    videoSourceUrl: "https://youtu.be/G4H1N_yXBiA?si=VUgqndzs1OlsNhK9",
    overviewBody: [
      "Climate change is the long-term shift in temperatures and weather patterns, driven by rising greenhouse gases in the atmosphere.",
      "Indonesia's forests both suffer from and influence this change: stressed by heat and extremes, yet vital as carbon vaults and rainfall makers.",
    ],
    trendEyebrow: "National Trend",
    trendHeading: "Temperature Anomaly Over Time",
    trendIntro:
      "BMKG reports annual temperature anomalies against the 1991–2020 normal period. An anomaly must always be labeled as such — never presented as plain temperature.",
    trend: {
      metric: "Annual mean temperature anomaly",
      unit: "°C vs 1991–2020 normal",
      period: "Pending official annual series",
      scope: "Indonesia",
      source: "BMKG, Climate Information",
      note: "Yearly values will appear here once verified from BMKG releases. Incomplete years are labeled YTD, never as full-year values.",
      rows: [],
    },
    focusEyebrow: "A Closer Look",
    focusHeading: "How Is Climate Change Affecting Forests?",
    focusIntro:
      "Three linked pathways connect a warming climate to weakening forests.",
    focusItems: [
      {
        title: "Rising Mean Temperatures",
        note: "Heat stress weakens trees, shifts flowering seasons, and strains montane species with nowhere higher to go.",
      },
      {
        title: "Shifting Rainfall Seasons",
        note: "Longer dry spells and heavier downpours disrupt growth cycles, fruiting, and freshwater supply.",
      },
      {
        title: "Stronger Extremes",
        note: "Drought–flood swings amplify fires, landslides, and pest outbreaks across forest landscapes.",
      },
    ],
    focusSource: "Source: BMKG, Climate Information.",
    driversHeading: "What Drives the Change?",
    driversIntro:
      "Greenhouse gases from human activity trap heat, and deforestation removes the sinks that would absorb it.",
    drivers: [
      {
        icon: "thermometer",
        image: "/images/issues/Rising_Temperature.jpg",
        title: "Rising Temperature",
        description:
          "Steadily climbing average temperatures stress heat-sensitive forest life.",
      },
      {
        icon: "cloud-rain",
        image: "/images/issues/Changing_Rainfall.jpg",
        title: "Changing Rainfall",
        description:
          "Wetter wet seasons and drier dry seasons destabilize forest rhythms.",
      },
      {
        icon: "wind",
        image: "/images/issues/Extreme_Weather.jpg",
        title: "Extreme Weather",
        description:
          "Stronger storms, floods, and droughts strike forests more often.",
      },
      {
        icon: "alert",
        image: "/images/issues/Ecosystem_Stress.jpg",
        title: "Ecosystem Stress",
        description:
          "Stressed forests grow slower, burn easier, and recover harder.",
      },
    ],
    impactsHeading: "Why Does It Matter?",
    impactsIntro:
      "A changing climate touches every layer of the forest, from soil to canopy.",
    impacts: [
      {
        icon: "tree",
        image: "/images/issues/Ecosystem_Changes.jpg",
        title: "Ecosystem Changes",
        description:
          "Species ranges shift and forest composition slowly transforms.",
      },
      {
        icon: "waves",
        image: "/images/issues/Water_Systems.jpg",
        title: "Water Systems",
        description:
          "Unreliable rains threaten rivers, wetlands, and downstream communities.",
      },
      {
        icon: "bird",
        image: "/images/issues/Species_Survival.jpg",
        title: "Species Survival",
        description:
          "Endemic wildlife with narrow ranges faces shrinking safe habitat.",
      },
      {
        icon: "users",
        image: "/images/issues/Communities.jpg",
        title: "Communities",
        description:
          "Farmers and forest communities bear failed harvests and floods.",
      },
    ],
    actionsHeading: "How Can We Respond?",
    actionsIntro:
      "Cutting emissions and protecting carbon-rich forests are two sides of the same response.",
    actions: [
      {
        icon: "factory",
        image: "/images/issues/Cut_Emissions.jpg",
        title: "Cut Emissions",
        description:
          "Reduce fossil fuel use and stop burning forests and peatlands.",
      },
      {
        icon: "tree",
        image: "/images/issues/Protect_Carbon_Forests.jpg",
        title: "Protect Carbon Forests",
        description:
          "Keep peat swamps and old-growth forests standing as carbon vaults.",
      },
      {
        icon: "sun",
        image: "/images/issues/Climate-Smart_Villages.jpg",
        title: "Climate-Smart Villages",
        description:
          "Support livelihoods adapted to new climate realities.",
      },
      {
        icon: "book",
        image: "/images/issues/Share_Knowledge.png",
        title: "Share Knowledge",
        description:
          "Spread reliable climate information within your community.",
      },
    ],
  },
};
