/* ============================================================
   ENGLISH DICTIONARY — source of truth for the translation shape
   ------------------------------------------------------------
   `Dictionary` is derived from this file, so every other language
   file (see ./id.ts) must provide exactly the same keys.
   TypeScript enforces that no string is forgotten.

   `vocab` and `data` intentionally start empty: the English values
   already live in /data, and components fall back to them whenever
   a key is missing. Indonesian fills them with real translations.
   ============================================================ */

export type ForestText = {
  name?: string;
  location?: string;
  description?: string;
};

export type ThreatText = {
  title?: string;
  description?: string;
};

export type IssueText = {
  category?: string;
  title?: string;
  description?: string;
  impact?: string;
};

export type ImpactLensText = {
  title?: string;
  description?: string;
  label?: string;
};

export const en = {
  /* ---------- Language switcher ---------- */
  lang: {
    switchLabel: "Switch language",
    id: "Bahasa Indonesia",
    en: "English",
  },

  /* ---------- Navbar (also used by the footer navigation) ---------- */
  nav: {
    home: "Home",
    explore: "Explore",
    issues: "Issues",
    about: "About",
    login: "Login",
    register: "Register",
    myProfile: "My Profile",
    logout: "Logout",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  /* ---------- Minimal navbar for detail pages ---------- */
  detailNav: {
    label: "Detail page navigation",
    back: "Back",
    backToExplore: "Back to Explore",
    backToIssues: "Back to Issues",
  },

  /* ---------- Footer ---------- */
  footer: {
    tagline:
      "Exploring the natural wealth and hidden biodiversity within Indonesia's rainforests.",
    navigation: "Navigation",
    dataSources: "Data Sources",
    followUs: "Follow Us",
    social: {
      website: "Website",
      chat: "Chat",
      share: "Share",
      email: "Email",
    },
    rights: "© 2026 KARIMBA. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },

  /* ---------- Home page ---------- */
  home: {
    hero: {
      eyebrow: "Indonesia's Forests",
      titleLead: "THE OTHER SIDE",
      titleHighlight: "OF INDONESIA",
      subtitle:
        "Explore the beauty of Indonesia’s forests and discover the life within",
      hintSpin: "Spin the globe",
      hintPick: "Pick a spot",
      hintDiscover: "Discover the forest",
      scroll: "Scroll",
    },

    stats: {
      hectares: "HECTARES OF FOREST",
      islands: "ISLANDS",
      species: "SPECIES IDENTIFIED",
      ecosystems: "MAJOR ECOSYSTEMS",
      eyebrow: "THERE'S MORE TO INDONESIA",
      titleLead: "THAN MEET'S ",
      titleHighlight: "THE EYE.",
    },

    importance: {
      titleLead: "FORESTS ARE MORE ",
      titleHighlight: "THAN JUST TREES",
      items: {
        life: { title: "LIFE", desc: "Home to thousands of species." },
        water: {
          title: "WATER",
          desc: "Protecting rivers and water sources.",
        },
        climate: {
          title: "CLIMATE",
          desc: "Storing carbon and regulating climate.",
        },
        people: {
          title: "PEOPLE",
          desc: "Supporting livelihoods and communities.",
        },
      },
    },

    explorer: {
      titleLead: "GET TO KNOW ",
      titleHighlight: "THE FOREST",
      subtitle: "Every forest has its own ecosystem, wildlife, and story to tell.",
      explore: "Explore",
      scrollLeft: "Scroll left",
      scrollRight: "Scroll right",
    },

    wildlife: {
      eyebrow: "biodiversity is the key to a healthy forest",
      title: "WHAT LIVES IN THERE?",
      subtitle:
        "From every forest, these species maintain the ecological balance.",
      habitat: "Habitat:",
      role: "Role:",
    },

    threat: {
      titleLead: "BUT OUR FORESTS ARE ",
      titleHighlight: "CHANGING",
      subtitle:
        "Growing pressures are threatening Indonesia's forest ecosystems",
      badge: "THREAT",
      learnMore: "Learn more",
    },

    story: {
      title: "Our Campaign to Protect the Forest",
      subtitle: "Every small action can make a difference.",
      intro: "Explore simple ways to take part in protecting Indonesia’s forests.",
      ctaTitle: "Grow Something That Matters",
      ctaSubtitle: "Take the first step in giving back to nature.",
      ctaText:
        "Plant a virtual tree and become part of KARIMBA’s growing forest.",
      learnMore: "Learn more about the campaign",
      treesTitle: "Trees Planted by Karimba Explorers",
      treesText:
        "As you can see, our users are awake and actively take part in our global initiative by opening our website and caring for the future.",
      counterAria: "trees planted by Karimba explorers",
      imageAlt: "Hands planting a young tree seedling",
    },

    cta: {
      join: "Be Part of the Movement",
      planted: "Tree Planted",
      plantedAria: "You have already planted your tree",
    },

    globe: {
      hint: "Drag to rotate · Scroll to zoom",
      close: "Close",
      highlights: "Biodiversity Highlights",
      majorThreat: "Major Threat",
      explore: "Explore",
    },
  },

  /* ---------- Explore page (list + detail) ---------- */
  explore: {
    hero: {
      eyebrow: "Let's explore Indonesian forests",
      titleLead: "Discover the Forest",
      titleHighlight: "of Indonesia",
      subtitle:
        "Explore the ecosystems, wildlife, and stories behind Indonesia’s forests.",
      scroll: "Scroll to explore",
      backgroundAlt: "Misty tropical forest mountains of Indonesia",
    },

    explorer: {
      eyebrow: "Explore by Region",
      titleLead: "Find a Forest",
      titleHighlight: "to Explore",
      description:
        "Each region in Indonesia has its own unique forests, landscapes, and wildlife. Choose a region to discover the forests within it.",
      regions: {
        "All Regions": "All Regions",
        Sumatra: "Sumatra",
        Java: "Java",
        Kalimantan: "Kalimantan",
        Sulawesi: "Sulawesi",
        "Nusa Tenggara": "Nusa Tenggara",
        Maluku: "Maluku",
        Papua: "Papua",
      },
      searchPlaceholder:
        "Search forests, species, places… e.g. orangutan, Komodo, peat",
      searchAria: "Search forests",
      clearSearch: "Clear search",
      resultSearch: (count: number, region: string | null) =>
        `${count} forest${count === 1 ? "" : "s"} found${
          region ? ` in ${region}` : " across Indonesia"
        }`,
      resultBrowse: (count: number, region: string | null) =>
        `Showing ${count} extraordinary forests${region ? ` in ${region}` : ""}`,
      emptySearchTitle: (query: string) => `No forests match "${query}"`,
      emptySearchBody:
        "Try another keyword, or clear the search to browse everything.",
      emptyRegionTitle: "No forests listed for this region yet",
      emptyRegionBody:
        "KARIMBA is still growing its archive. Try another region to keep exploring.",
      featuredEyebrow: "Featured Forest",
      featuredTitle: "Extraordinary Forests",
      viewDetails: (name: string) => `View details of ${name}`,
      goTo: (name: string) => `Go to ${name}`,
    },

    cta: {
      eyebrow: "Forests in Numbers",
      title: "A Closer Look",
      description:
        "Explore verified data about Indonesia’s forests, biodiversity, and the ecosystems they support.",
      stats: {
        cover: "Forest Cover of Land Area 2024",
        plants: "Plant Species Recorded 2024",
        deforestation: "Net Deforestation 2024",
        area: "Forest Area 2024",
      },
    },

    detail: {
      hero: {
        forestType: "Forest Type",
        area: "Area",
        keySpecies: "Key Species",
        imageComingSoon: "Image coming soon",
        imageAlt: "Forest image coming soon",
      },
      profile: {
        eyebrow: "Forest Profile",
      },
      glance: {
        eyebrow: "Geographic & Biological Metadata",
        title: "At a Glance",
        location: "Location",
        region: "Region",
        forestType: "Forest Type",
        protectionStatus: "Protection Status",
        totalArea: "Total Area",
        elevation: "Elevation",
      },
      ecosystem: {
        eyebrow: "Canopy Dynamics & Keystone Species",
        title: "Ecosystem & Life Within the Forest",
        subtitle:
          "Discover the intricate connections between wildlife, vegetation, and the natural systems that sustain life within the forest.",
        keySpecies: "Key Indicator Species",
        livingLandscape: "The Living Landscape",
        documentedResident: "A documented resident of this forest.",
        keystoneFauna: "Keystone Fauna",
        documentedWildlife: "Documented Wildlife",
        floraArchitecture: "Flora & Forest Architecture",
        canopyArchitecture: "Canopy Architecture",
        floraPending:
          "Flora documentation for this forest is still being compiled by KARIMBA.",
        ecosystem: "Ecosystem",
        ecosystemFallback:
          "A living system of this forest, sustaining its wildlife, water, and climate.",
        imageComingSoon: "Image coming soon",
        previousImage: "Previous showcase image",
        nextImage: "Next showcase image",
      },
      threats: {
        eyebrow: "Disturbance & Ecological Trajectory",
        title: "When the Forest Is Under Pressure",
        subtitle:
          "A chronology of documented pressures — and the recovery that follows — in this forest.",
        spotlightLabel: "Documented Pressure Record",
        spotlightNote: "A documented pressure on this forest landscape.",
        imageComingSoon: "Image coming soon",
        imageAlt: (title: string, forestName: string) =>
          `${title} — documented pressure in ${forestName}`,
      },
      importance: {
        eyebrow: "Critical Biosphere Functions",
        title: "Why This Forest Matters",
      },
      sources: {
        eyebrow: "Data Sources",
        viewSource: "View source",
      },
      cta: {
        quote:
          "“Every forest holds a different story, written in deep soil and living canopy.”",
        description:
          "Continue exploring Indonesia’s forests and discover the ecosystems, species, and stories that make them worth protecting.",
        back: "Back to Explore Directory",
      },
    },
  },

  /* ---------- Issues page (list + detail) ---------- */
  issues: {
    hero: {
      eyebrow: "Indonesia’s Forest Issues",
      titleLead: "When the Forest",
      titleHighlight: "Begins to Change",
      description:
        "Indonesian tropical rainforests sustain immense global biodiversity, yet face interconnected pressures of conversion, climate anomalies, and habitat fragmentation.",
      scroll: "Scroll to Explore",
      backgroundAlt:
        "Forest fire smoke rising over Indonesia's tropical forest",
    },

    cards: {
      eyebrow: "The Main Challenges",
      title: "Key Issues Facing Indonesia’s Forests",
      description:
        "Three systemic pressures altering the integrity of the archipelago’s forest canopy.",
      primaryThreat: "Primary Threat",
      learnMore: "Learn More",
      learnMoreAria: (title: string) => `Learn more about ${title}`,
    },

    picture: {
      eyebrow: "Understanding the Bigger Picture",
      title: "When the Forest Changes, Life Changes Too",
    },

    detail: {
      heroLabelSuffix: "Forest Issues",
      heroLabelPrefix: "Forest Issues",
      scroll: "Scroll to Explore",
      overview: {
        eyebrow: "Overview",
        videoSource: "Video source",
        videoUnavailable: "Video unavailable",
        videoComingSoon: "Video Coming Soon",
        videoAria: (heading: string) => `${heading} — explanatory video`,
      },
      trend: {
        metric: "Metric:",
        period: "Period:",
        scope: "Scope:",
        source: "Source:",
        emptyTitle: "Data not yet available",
        emptyBody:
          "Verified yearly values will appear here once published by the source below.",
      },
      focus: {
        note: "Note. ",
      },
      cards: {
        imageComingSoon: "Image coming soon",
      },
      driversEyebrow: (title: string) => `What Drives ${title}?`,
      impactEyebrow: "Impact",
      actionEyebrow: "Take Action",
      back: "Back to Issues",
    },
  },

  /* ---------- About page ---------- */
  about: {
    hero: {
      eyebrow: "Karimba Side",
      titleLead: "More Than a",
      titleHighlight: "Forest Website",
      descriptionLead:
        "KARIMBA is a digital space to explore, learn, and take action for Indonesia’s forests because ",
      descriptionHighlight: "every user can grow a brighter tomorrow",
      descriptionTail: ".",
      scroll: "Scroll to Explore",
      backgroundAlt: "Lush Indonesian rainforest with a winding river",
    },

    coreIdea: {
      eyebrow: "Our Core Idea",
      titleLead: "1 Visit, 1 Seed for a ",
      titleHighlight: "Greener Indonesia",
      body:
        "Every time you visit KARIMBA, we plant one seed in real life. It’s a simple action, but together, it represents a growing community that cares about Indonesia’s forests.",
      stats: {
        seeds: "Seeds Planted by Users",
        coverage: "Potential Reforestation Coverage",
        people: "People Join the Movement",
      },
      disclaimer:
        "* Estimated based on a standard tree spacing and average reforestation area per tree.",
      videoAria: "A young seed growing from the soil",
    },

    howItWorks: {
      eyebrow: "How It Works",
      title: "From a User to a Growing Forest",
      intro:
        "A simple journey with lasting impact. Every user counts, and together we grow a forest of awareness, knowledge, and action.",
      steps: [
        {
          title: "You Visit & Register Account",
          description:
            "When you log in to KARIMBA and register an account, you plant one virtual seed.",
        },
        {
          title: "A Seed is Planted",
          description:
            "Your registration adds to our growing forest of change.",
        },
        {
          title: "The Community Grows",
          description: "More people mean more seeds and greater impact.",
        },
        {
          title: "A Greener Tomorrow",
          description:
            "Together, we help build a future where Indonesia's forest can thrive.",
        },
      ],
    },

    purpose: {
      eyebrow: "Our Purpose",
      titleLines: ["Exploration,", "Education,", "and Action"],
      body:
        "KARIMBA is designed to make forest information more accessible, visual, and engaging, while encouraging real awareness and participation in forest conservation.",
      pillars: [
        {
          alt: "Misty montane forest ridge",
          title: "Education",
          description:
            "Understand Indonesia's forests, ecosystems, biodiversity, and challenges.",
        },
        {
          alt: "Map of the Indonesian archipelago",
          title: "Exploration",
          description:
            "Discover forest across Indonesia through an interactive and immersive experience.",
        },
        {
          alt: "Hands planting a seedling in dark soil",
          title: "Action",
          description:
            "Be part of the movement. Every visit plants a seed and spreads awareness for a greener future.",
        },
      ],
    },

    cta: {
      titleLead: "A Greener Indonesia Starts With ",
      titleHighlight: "You",
      body:
        "Every visit is a small step, but together we can create a much bigger impact for Indonesia’s forests and future generations.",
      backgroundAlt: "Dense green Indonesian rainforest canopy",
    },
  },

  /* ---------- Shared vocabulary (keyed by lowercase source text) ---------- */
  vocab: {
    species: {} as Record<string, string>,
    ecosystems: {} as Record<string, string>,
    habitats: {} as Record<string, string>,
    roles: {} as Record<string, string>,
    threats: {} as Record<string, string>,
    units: {} as Record<string, string>,
  },

  /* ---------- Content data used by the home page ---------- */
  data: {
    forests: {} as Record<string, ForestText>,
    threats: {} as Record<string, ThreatText>,
    issues: {} as Record<string, IssueText>,
    impactLenses: {} as Record<string, ImpactLensText>,
  },
};

export type Dictionary = typeof en;
