/* ============================================================
   INDONESIAN DICTIONARY — bahasa utama website
   ------------------------------------------------------------
   Typed as `Dictionary` (derived from ./en.ts): TypeScript will
   fail the build if a key from the English shape is missing here
   or spelled differently.

   `vocab` keys are LOWERCASED source (English) strings — the
   lookup helper lowercases the queried value before matching.
   ============================================================ */

import type { Dictionary } from "./en";

export const id: Dictionary = {
  /* ---------- Pemilih bahasa ---------- */
  lang: {
    switchLabel: "Ganti bahasa",
    id: "Bahasa Indonesia",
    en: "English",
  },

  /* ---------- Navbar (dipakai juga navigasi footer) ---------- */
  nav: {
    home: "Beranda",
    explore: "Jelajah",
    issues: "Masalah",
    about: "Tentang",
    login: "Masuk",
    register: "Daftar",
    myProfile: "Profil Saya",
    logout: "Keluar",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
  },

  /* ---------- Navbar ringkas untuk halaman detail ---------- */
  detailNav: {
    label: "Navigasi halaman detail",
    back: "Kembali",
    backToExplore: "Kembali ke Jelajah",
    backToIssues: "Kembali ke Masalah",
  },

  /* ---------- Footer ---------- */
  footer: {
    tagline:
      "Menjelajahi kekayaan alam dan biodiversitas tersembunyi di dalam hutan hujan Indonesia.",
    navigation: "Navigasi",
    dataSources: "Sumber Data",
    followUs: "Ikuti Kami",
    social: {
      website: "Situs Web",
      chat: "Obrolan",
      share: "Bagikan",
      email: "Email",
    },
    rights: "© 2026 KARIMBA. Seluruh hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
  },

  /* ---------- Halaman Beranda ---------- */
  home: {
    hero: {
      eyebrow: "Hutan Indonesia",
      titleLead: "SISI LAIN",
      titleHighlight: "INDONESIA",
      subtitle:
        "Jelajahi keindahan hutan Indonesia dan temukan kehidupan di dalamnya",
      hintSpin: "Putar globenya",
      hintPick: "Pilih sebuah titik",
      hintDiscover: "Temukan hutannya",
      scroll: "Gulir",
    },

    stats: {
      hectares: "HEKTARE HUTAN",
      islands: "PULAU",
      species: "SPESIES TERIDENTIFIKASI",
      ecosystems: "EKOSISTEM UTAMA",
      eyebrow: "MASIH BANYAK DI INDONESIA",
      titleLead: "YANG LEBIH DARI SEKADAR ",
      titleHighlight: "TERLIHAT.",
    },

    importance: {
      titleLead: "HUTAN LEBIH DARI ",
      titleHighlight: "SEKADAR POHON",
      items: {
        life: { title: "KEHIDUPAN", desc: "Rumah bagi ribuan spesies." },
        water: {
          title: "AIR",
          desc: "Melindungi sungai dan sumber air.",
        },
        climate: {
          title: "IKLIM",
          desc: "Menyimpan karbon dan mengatur iklim.",
        },
        people: {
          title: "MASYARAKAT",
          desc: "Menopang penghidupan dan komunitas.",
        },
      },
    },

    explorer: {
      titleLead: "KENALI LEBIH DEKAT ",
      titleHighlight: "HUTAN",
      subtitle:
        "Setiap hutan punya ekosistem, satwa, dan cerita tersendiri untuk diceritakan.",
      explore: "Jelajahi",
      scrollLeft: "Geser ke kiri",
      scrollRight: "Geser ke kanan",
    },

    wildlife: {
      eyebrow: "keanekaragaman hayati adalah kunci hutan yang sehat",
      title: "APA YANG HIDUP DI DALAMNYA?",
      subtitle:
        "Dari setiap hutan, spesies-spesies ini menjaga keseimbangan ekologi.",
      habitat: "Habitat:",
      role: "Peran:",
    },

    threat: {
      titleLead: "NAMUN HUTAN KITA SEDANG ",
      titleHighlight: "BERUBAH",
      subtitle:
        "Tekanan yang semakin besar mengancam ekosistem hutan Indonesia",
      badge: "ANCAMAN",
      learnMore: "Pelajari lebih lanjut",
    },

    story: {
      title: "Kampanye Kami untuk Melindungi Hutan",
      subtitle: "Setiap tindakan kecil bisa membuat perbedaan.",
      intro:
        "Temukan cara sederhana untuk ikut serta melindungi hutan Indonesia.",
      ctaTitle: "Tumbuhkan Sesuatu yang Berarti",
      ctaSubtitle: "Ambil langkah pertama untuk membalas kebaikan alam.",
      ctaText:
        "Tanam pohon virtual dan jadilah bagian dari hutan KARIMBA yang terus tumbuh.",
      learnMore: "Pelajari lebih lanjut tentang kampanye ini",
      treesTitle: "Pohon yang Ditanam oleh Penjelajah Karimba",
      treesText:
        "Seperti yang bisa Anda lihat, pengguna kami sadar dan secara aktif ambil bagian dalam inisiatif global kami dengan mengunjungi situs ini dan peduli pada masa depan.",
      counterAria: "pohon ditanam oleh penjelajah Karimba",
      imageAlt: "Tangan yang menanam bibit pohon muda",
    },

    cta: {
      join: "Bergabung dalam Gerakan Ini",
      planted: "Pohon Ditanam",
      plantedAria: "Anda sudah menanam pohon Anda",
    },

    globe: {
      hint: "Seret untuk memutar · Gulir untuk memperbesar",
      close: "Tutup",
      highlights: "Sorotan Biodiversitas",
      majorThreat: "Ancaman Utama",
      explore: "Jelajahi",
    },
  },

  /* ---------- Halaman Jelajah (daftar + detail) ---------- */
  explore: {
    hero: {
      eyebrow: "Mari jelajahi hutan Indonesia",
      titleLead: "Temukan Hutan",
      titleHighlight: "di Indonesia",
      subtitle:
        "Kenali ekosistem, satwa liar, dan cerita di balik hutan-hutan Indonesia.",
      scroll: "Gulir untuk menjelajah",
      backgroundAlt: "Pegunungan hutan tropis Indonesia yang diselimuti kabut",
    },

    explorer: {
      eyebrow: "Jelajahi per Wilayah",
      titleLead: "Temukan Hutan",
      titleHighlight: "untuk Dijelajahi",
      description:
        "Setiap wilayah di Indonesia memiliki hutan, lanskap, dan satwa liar yang khas. Pilih satu wilayah untuk menemukan hutan-hutan di dalamnya.",
      regions: {
        "All Regions": "Semua Wilayah",
        Sumatra: "Sumatera",
        Java: "Jawa",
        Kalimantan: "Kalimantan",
        Sulawesi: "Sulawesi",
        "Nusa Tenggara": "Nusa Tenggara",
        Maluku: "Maluku",
        Papua: "Papua",
      },
      searchPlaceholder:
        "Cari hutan, spesies, atau tempat… mis. orangutan, Komodo, gambut",
      searchAria: "Cari hutan",
      clearSearch: "Hapus pencarian",
      resultSearch: (count: number, region: string | null) =>
        `${count} hutan ditemukan${
          region ? ` di ${region}` : " di seluruh Indonesia"
        }`,
      resultBrowse: (count: number, region: string | null) =>
        `Menampilkan ${count} hutan istimewa${region ? ` di ${region}` : ""}`,
      emptySearchTitle: (query: string) =>
        `Tidak ada hutan yang cocok dengan "${query}"`,
      emptySearchBody:
        "Coba kata kunci lain, atau hapus pencarian untuk melihat semua hutan.",
      emptyRegionTitle: "Belum ada hutan yang terdaftar untuk wilayah ini",
      emptyRegionBody:
        "Arsip KARIMBA masih terus berkembang. Coba wilayah lain untuk melanjutkan penjelajahan.",
      featuredEyebrow: "Sorotan Hutan",
      featuredTitle: "Hutan-Hutan Luar Biasa",
      viewDetails: (name: string) => `Lihat detail ${name}`,
      goTo: (name: string) => `Menuju ${name}`,
    },

    cta: {
      eyebrow: "Hutan dalam Angka",
      title: "Melihat Lebih Dekat",
      description:
        "Telusuri data terverifikasi tentang hutan Indonesia, keanekaragaman hayati, dan ekosistem yang ditopangnya.",
      stats: {
        cover: "Tutupan Hutan dari Luas Daratan 2024",
        plants: "Spesies Tumbuhan Tercatat 2024",
        deforestation: "Deforestasi Neto 2024",
        area: "Luas Hutan 2024",
      },
    },

    detail: {
      hero: {
        forestType: "Tipe Hutan",
        area: "Luas",
        keySpecies: "Spesies Kunci",
        imageComingSoon: "Gambar segera hadir",
        imageAlt: "Gambar hutan segera hadir",
      },
      profile: {
        eyebrow: "Profil Hutan",
      },
      glance: {
        eyebrow: "Metadata Geografis & Biologis",
        title: "Sekilas",
        location: "Lokasi",
        region: "Wilayah",
        forestType: "Tipe Hutan",
        protectionStatus: "Status Perlindungan",
        totalArea: "Luas Total",
        elevation: "Ketinggian",
      },
      ecosystem: {
        eyebrow: "Dinamika Kanopi & Spesies Kunci",
        title: "Ekosistem & Kehidupan di Dalam Hutan",
        subtitle:
          "Kenali keterkaitan rumit antara satwa liar, tumbuhan, dan sistem alami yang menopang kehidupan di dalam hutan.",
        keySpecies: "Spesies Indikator Kunci",
        livingLandscape: "Lanskap yang Hidup",
        documentedResident: "Spesies yang terdokumentasi di hutan ini.",
        keystoneFauna: "Fauna Kunci",
        documentedWildlife: "Satwa Liar Terdokumentasi",
        floraArchitecture: "Flora & Arsitektur Hutan",
        canopyArchitecture: "Arsitektur Kanopi",
        floraPending:
          "Dokumentasi flora untuk hutan ini masih disusun oleh KARIMBA.",
        ecosystem: "Ekosistem",
        ecosystemFallback:
          "Sistem kehidupan di hutan ini yang menopang satwa liar, air, dan iklimnya.",
        imageComingSoon: "Gambar segera hadir",
        previousImage: "Gambar sorotan sebelumnya",
        nextImage: "Gambar sorotan berikutnya",
      },
      threats: {
        eyebrow: "Gangguan & Lintasan Ekologis",
        title: "Ketika Hutan Menanggung Tekanan",
        subtitle:
          "Kronologi tekanan yang terdokumentasi — beserta pemulihan yang menyusul — di hutan ini.",
        spotlightLabel: "Catatan Tekanan Terdokumentasi",
        spotlightNote:
          "Tekanan yang terdokumentasi pada lanskap hutan ini.",
        imageComingSoon: "Gambar segera hadir",
        imageAlt: (title: string, forestName: string) =>
          `${title} — tekanan terdokumentasi di ${forestName}`,
      },
      importance: {
        eyebrow: "Fungsi Biosfer yang Kritis",
        title: "Mengapa Hutan Ini Penting",
      },
      sources: {
        eyebrow: "Sumber Data",
        viewSource: "Lihat sumber",
      },
      cta: {
        quote:
          "“Setiap hutan menyimpan cerita yang berbeda, tertulis di tanah yang dalam dan kanopi yang hidup.”",
        description:
          "Lanjutkan penjelajahan hutan Indonesia dan temukan ekosistem, spesies, serta kisah yang membuatnya layak dilindungi.",
        back: "Kembali ke Daftar Jelajah",
      },
    },
  },

  /* ---------- Halaman Masalah (daftar + detail) ---------- */
  issues: {
    hero: {
      eyebrow: "Masalah Hutan Indonesia",
      titleLead: "Ketika Hutan",
      titleHighlight: "Mulai Berubah",
      description:
        "Hutan hujan tropis Indonesia menopang keanekaragaman hayati global yang luar biasa, namun menghadapi tekanan yang saling terkait: alih fungsi lahan, anomali iklim, dan fragmentasi habitat.",
      scroll: "Gulir untuk menjelajah",
      backgroundAlt:
        "Asap kebakaran hutan membubung di atas hutan tropis Indonesia",
    },

    cards: {
      eyebrow: "Tantangan Utama",
      title: "Masalah Utama yang Dihadapi Hutan Indonesia",
      description:
        "Empat tekanan sistemik yang mengubah integritas kanopi hutan Nusantara.",
      primaryThreat: "Ancaman Utama",
      learnMore: "Pelajari Lebih Lanjut",
      learnMoreAria: (title: string) => `Pelajari lebih lanjut tentang ${title}`,
    },

    picture: {
      eyebrow: "Memahami Gambaran Besar",
      title: "Ketika Hutan Berubah, Kehidupan Ikut Berubah",
    },

    detail: {
      heroLabelSuffix: "Masalah Hutan",
      heroLabelPrefix: "Masalah Hutan",
      scroll: "Gulir untuk menjelajah",
      overview: {
        eyebrow: "Ringkasan",
        videoSource: "Sumber video",
        videoUnavailable: "Video tidak tersedia",
        videoComingSoon: "Video segera hadir",
        videoAria: (heading: string) => `${heading} — video penjelasan`,
      },
      trend: {
        metric: "Metrik:",
        period: "Periode:",
        scope: "Cakupan:",
        source: "Sumber:",
        emptyTitle: "Data belum tersedia",
        emptyBody:
          "Nilai tahunan terverifikasi akan muncul di sini setelah diterbitkan oleh sumber di bawah.",
      },
      focus: {
        note: "Catatan. ",
      },
      cards: {
        imageComingSoon: "Gambar segera hadir",
      },
      driversEyebrow: (title: string) => `Apa yang Mendorong ${title}?`,
      impactEyebrow: "Dampak",
      actionEyebrow: "Ambil Tindakan",
      back: "Kembali ke Masalah",
    },
  },

  /* ---------- Halaman Tentang ---------- */
  about: {
    hero: {
      eyebrow: "Sisi KARIMBA",
      titleLead: "Lebih dari Sekadar",
      titleHighlight: "Situs Web Hutan",
      descriptionLead:
        "KARIMBA adalah ruang digital untuk menjelajahi, mempelajari, dan bertindak bagi hutan Indonesia karena ",
      descriptionHighlight:
        "setiap pengguna dapat menumbuhkan masa depan yang lebih cerah",
      descriptionTail: ".",
      scroll: "Gulir untuk menjelajah",
      backgroundAlt:
        "Hutan hujan Indonesia yang lebat dengan sungai berkelok",
    },

    coreIdea: {
      eyebrow: "Gagasan Inti Kami",
      titleLead: "1 Klik, 1 Bibit untuk ",
      titleHighlight: "Indonesia yang Lebih Hijau",
      body:
        "Setiap klik di KARIMBA berarti satu bibit ditanam di dunia nyata. Tindakan ini sederhana, tetapi bersama-sama kita membentuk komunitas yang tumbuh dan peduli terhadap hutan Indonesia.",
      stats: {
        seeds: "Bibit yang Ditanam Pengguna",
        coverage: "Potensi Cakupan Reboisasi",
        people: "Orang yang Bergabung dalam Gerakan",
      },
      disclaimer:
        "* Perkiraan berdasarkan jarak tanam standar dan rata-rata area reboisasi per pohon.",
      videoAria: "Bibit muda yang tumbuh dari tanah",
    },

    howItWorks: {
      eyebrow: "Cara Kerjanya",
      title: "Dari Pengguna Menjadi Hutan yang Tumbuh",
      intro:
        "Perjalanan sederhana dengan dampak yang bertahan lama. Setiap pengguna berarti, dan bersama-sama kita menumbuhkan hutan kesadaran, pengetahuan, dan tindakan.",
      steps: [
        {
          title: "Anda Masuk dan Mendaftar Akun",
          description:
            "Saat Anda masuk ke KARIMBA dan mendaftarkan akun, Anda menanam satu bibit virtual.",
        },
        {
          title: "Satu Bibit Ditanam",
          description:
            "Pendaftaran Anda turut menumbuhkan hutan perubahan kita.",
        },
        {
          title: "Komunitas Semakin Besar",
          description:
            "Semakin banyak orang, semakin banyak bibit dan semakin besar dampaknya.",
        },
        {
          title: "Masa Depan yang Lebih Hijau",
          description:
            "Bersama-sama, kita membantu membangun masa depan tempat hutan Indonesia dapat tumbuh subur.",
        },
      ],
    },

    purpose: {
      eyebrow: "Tujuan Kami",
      titleLines: ["Eksplorasi,", "Edukasi,", "dan Aksi"],
      body:
        "KARIMBA dirancang untuk membuat informasi hutan lebih mudah diakses, visual, dan menarik, sekaligus mendorong kesadaran nyata dan partisipasi dalam konservasi hutan.",
      pillars: [
        {
          alt: "Pegunungan hutan yang diselimuti kabut",
          title: "Edukasi",
          description:
            "Memahami hutan Indonesia, ekosistem, keanekaragaman hayati, dan tantangannya.",
        },
        {
          alt: "Peta kepulauan Indonesia",
          title: "Eksplorasi",
          description:
            "Temukan hutan di seluruh Indonesia melalui pengalaman interaktif dan imersif.",
        },
        {
          alt: "Tangan menanam bibit di tanah gelap",
          title: "Aksi",
          description:
            "Jadilah bagian dari gerakan. Setiap klik menanam satu bibit dan menyebarkan kesadaran untuk masa depan yang lebih hijau.",
        },
      ],
    },

    cta: {
      titleLead: "Indonesia yang Lebih Hijau Dimulai dari ",
      titleHighlight: "Anda",
      body:
        "Setiap klik adalah langkah kecil, tetapi bersama-sama kita dapat menciptakan dampak yang jauh lebih besar bagi hutan Indonesia dan generasi mendatang.",
      backgroundAlt: "Kanopi hutan hujan Indonesia yang lebat dan hijau",
    },
  },

  /* ---------- Kosakata bersama (kunci = teks sumber huruf kecil) ---------- */
  vocab: {
    species: {
      "sumatran orangutan": "Orangutan Sumatera",
      "sumatran tiger": "Harimau Sumatera",
      "sumatran elephant": "Gajah Sumatera",
      "sumatran rhinoceros": "Badak Sumatera",
      "sumatran striped rabbit": "Kelinci Berbintik Sumatera",
      "asian tapir": "Tapir Asia",
      "bornean orangutan": "Orangutan Kalimantan",
      "storm's stork": "Bangau Storm",
      "false gharial": "Senyulong",
      "bornean bear": "Beruang Madu",
      "agile gibbon": "Owa Ungko",
      "rhinoceros hornbill": "Rangkong Badak",
      "doria's tree-kangaroo": "Kanguru Pohon Doria",
      "southern cassowary": "Kasuari Gelambir Ganda",
      "javan rhinoceros": "Badak Jawa",
      "white-winged duck": "Mentok Rimba",
      "javan gibbon": "Owa Jawa",
      "javan leopard": "Macan Tutul Jawa",
      "javan hawk-eagle": "Elang Jawa",
      "long-tailed macaque": "Monyet Ekor Panjang",
      "javan surili": "Surili Jawa",
      "javan trogon": "Luntur Jawa",
      "green peafowl": "Merak Hijau",
      dhole: "Ajak",
      "sunda clouded leopard": "Macan Dahan Sunda",
      "helmeted hornbill": "Enggang Gading",
      "maroon langur": "Lutung Merah",
      "müller's bornean gibbon": "Owa Kalawat",
      "spectral tarsier": "Tarsius Spektral",
      "celebes crested macaque": "Yaki",
      "lowland anoa": "Anoa Dataran Rendah",
      "sulawesi bear cuscus": "Bubutu",
      "blume's peacock swallowtail": "Kupu-Kupu Sayap Merak Blume",
      "moor macaque": "Monyet Darre",
      "knobbed hornbill": "Julang Sulawesi",
      "estuarine crocodile": "Buaya Muara",
      "komodo dragon": "Komodo",
      "timor rusa deer": "Rusa Timor",
      "yellow-crested cockatoo": "Kakatua Kecil Jambul-Kuning",
      "orange-footed scrubfowl": "Gosong Kaki-Merah",
      "flores hawk-eagle": "Elang Flores",
      "flores monarch": "Kehicap Flores",
      "chestnut-backed thrush": "Anis Nusa Tenggara",
      "rinjani scops owl": "Celepuk Rinjani",
      "ebony leaf monkey": "Lutung Budeng",
      "sumba hornbill": "Julang Sumba",
      "apricot-breasted sunbird": "Burung Madu Sumba",
      "salmon-crested cockatoo": "Kakatua Maluku",
      "seram bandicoot": "Mabaya Seram",
      "moluccan king parrot": "Nuri Raja Ambon",
      "seram friarbird": "Cikukua Seram",
      "wallace's standardwing": "Weka-Weka",
      "dusky scrubfowl": "Gosong Kelam",
      "halmahera paradise-crow": "Cenderawasih Gagak Halmahera",
      "invisible rail": "Mandar Gendang",
      "agile wallaby": "Walabi Saham",
      "magpie goose": "Soang Cawai",
    },
    ecosystems: {
      "tropical rainforest": "Hutan Hujan Tropis",
      "peat swamp & mangrove": "Rawa Gambut & Mangrove",
      "peat swamp": "Rawa Gambut",
      "mountainous & tropical forests": "Hutan Pegunungan & Tropis",
      "volcanic & montane forest": "Hutan Vulkanik & Pegunungan",
      "savanna & monsoon forest": "Sabana & Hutan Musim",
      "montane rainforest": "Hutan Hujan Pegunungan",
      "karst & tropical forest": "Karst & Hutan Tropis",
      "savanna & peat swamp": "Sabana & Rawa Gambut",
      "savanna & dry forest": "Sabana & Hutan Kering",
      "montane forest": "Hutan Pegunungan",
      "monsoon & montane forest": "Hutan Musim & Pegunungan",
      "montane & volcanic forest": "Hutan Pegunungan & Vulkanik",
      "savanna & wetlands": "Sabana & Lahan Basah",
    },
    habitats: {
      "tropical rainforest": "Hutan Hujan Tropis",
      "mangrove forest": "Hutan Mangrove",
      "tropical forest": "Hutan Tropis",
      "peat swamp": "Rawa Gambut",
      "montane rainforest": "Hutan Hujan Pegunungan",
      "mountainous forest": "Hutan Pegunungan",
      "freshwater swamp": "Rawa Air Tawar",
      "montane forest": "Hutan Pegunungan",
      savanna: "Sabana",
      wetlands: "Lahan Basah",
      "monsoon forest": "Hutan Musim",
    },
    roles: {
      "ecosystem engineer": "Perancang Ekosistem",
      "forest engineer": "Perancang Hutan",
      "top predator": "Predator Puncak",
      "seed disperser": "Penyebar Benih",
      "forest guardian": "Penjaga Hutan",
      "grazing herbivore": "Herbivora Penggembala",
      "wetland hunter": "Pemburu Kawasan Basah",
      "wetland forager": "Pencari Makan Kawasan Basah",
      "pest controller": "Pengendali Hama",
      pollinator: "Penyerbuk",
      "canopy browser": "Pemakan Pucuk Kanopi",
      "ecosystem controller": "Pengendali Ekosistem",
    },
    threats: {
      deforestation: "Deforestasi",
      poaching: "Perburuan",
      "habitat loss": "Kehilangan habitat",
      "illegal logging": "Penebangan liar",
      "climate change": "Perubahan iklim",
      mining: "Pertambangan",
      "forest fires": "Kebakaran hutan",
      drainage: "Pengeringan",
      "agricultural expansion": "Ekspansi pertanian",
      "human-elephant conflict": "Konflik manusia-gajah",
      "natural disasters": "Bencana alam",
      "tourism pressure": "Tekanan pariwisata",
      "invasive species": "Spesies invasif",
      "peat fires": "Kebakaran gambut",
    },
    units: {
      "million hectares": "juta hektare",
      hectares: "hektare",
    },
  },

  /* ---------- Data konten yang dipakai halaman beranda ---------- */
  data: {
    forests: {
      leuser: {
        name: "Ekosistem Leuser",
        location: "Aceh, Sumatera",
        description:
          "Salah satu hutan hujan tropis terakhir yang tersisa di Asia, rumah bagi spesies yang terancam kritis sekaligus penyerap karbon yang sangat penting.",
      },
      "kerinci-seblat": {
        name: "Taman Nasional Kerinci Seblat",
        location: "Sumatera",
        description:
          "Taman nasional terbesar di Sumatera dengan ekosistem pegunungan dan hutan hujan tropis yang masih alami.",
      },
      "tanjung-puting": {
        name: "Taman Nasional Tanjung Puting",
        location: "Kalimantan Tengah",
        description:
          "Salah satu habitat orangutan paling terkenal di dunia. Ekosistem rawa gambut yang unik dan kritis bagi keseimbangan iklim global.",
      },
      sebangau: {
        name: "Taman Nasional Sebangau",
        location: "Kalimantan Tengah",
        description:
          "Hutan rawa gambut terbesar di dunia yang menyimpan karbon dalam jumlah sangat besar. Sangat penting untuk mitigasi perubahan iklim.",
      },
      lorentz: {
        name: "Taman Nasional Lorentz",
        location: "Papua",
        description:
          "Situs Warisan Dunia UNESCO dengan ekosistem yang membentang dari pesisir hingga puncak bersalju. Salah satu kawasan konservasi terbesar di Asia Tenggara.",
      },
      "way-kambas": {
        name: "Taman Nasional Way Kambas",
        location: "Lampung, Sumatera",
        description:
          "Habitat kritis bagi badak dan gajah Sumatera yang terancam punah. Terkenal dengan program konservasi serta upaya rehabilitasi satwa liar.",
      },
      "gunung-leuser": {
        name: "Taman Nasional Gunung Leuser",
        location: "Aceh & Sumatera Utara",
        description:
          "Bagian dari Ekosistem Leuser, taman nasional ini menjadi pusat keanekaragaman hayati dan habitat kritis bagi banyak spesies terancam punah, termasuk orangutan dan harimau Sumatera.",
      },
      "ujung-kulon": {
        name: "Taman Nasional Ujung Kulon",
        location: "Banten, Jawa",
        description:
          "Tempat perlindungan terakhir bagi badak Jawa yang terancam kritis. Situs Warisan Dunia UNESCO yang melindungi hutan hujan dataran rendah di ujung barat Pulau Jawa.",
      },
      "bromo-tengger-semeru": {
        name: "Taman Nasional Bromo Tengger Semeru",
        location: "Jawa Timur",
        description:
          "Lanskap vulkanik dramatis dari kawah aktif Semeru dan Bromo yang dibalut hutan pegunungan serta dataran tinggi budaya Tengger.",
      },
      baluran: {
        name: "Taman Nasional Baluran",
        location: "Jawa Timur",
        description:
          "Dikenal sebagai Afrika van Java, ekosistem sabana yang langka dengan kawanan banteng, hutan musim, dan mangrove pesisir.",
      },
      "gede-pangrango": {
        name: "Taman Nasional Gunung Gede Pangrango",
        location: "Jawa Barat",
        description:
          "Gunung kembar berselimut hutan hujan pegunungan berlumut dan merupakan Cagar Biosfer UNESCO yang kaya akan primata dan burung endemik Jawa.",
      },
      "betung-kerihun": {
        name: "Taman Nasional Betung Kerihun",
        location: "Kalimantan Barat",
        description:
          "Salah satu hutan hujan terlindungi terbesar di Kalimantan dan bagian dari Heart of Borneo, yang menjadi perlindungan orangutan dan macan dahan.",
      },
      "kayan-mentarang": {
        name: "Taman Nasional Kayan Mentarang",
        location: "Kalimantan Utara",
        description:
          "Kawasan terlindungi terbesar di Kalimantan, hutan hujan luas tanpa jalan yang menjadi rumah bagi komunitas Dayak, orangutan, dan rangkong.",
      },
      "lore-lindu": {
        name: "Taman Nasional Lore Lindu",
        location: "Sulawesi Tengah",
        description:
          "Pusat keanekaragaman hayati Wallacea dengan hutan hujan pegunungan berkabut, megalitik kuno, dan spesies yang tidak ditemukan di tempat lain di bumi.",
      },
      "bogani-nani-wartabone": {
        name: "Taman Nasional Bogani Nani Wartabone",
        location: "Sulawesi Utara & Gorontalo",
        description:
          "Hutan hujan terlindungi terbesar di Sulawesi, benteng bagi burung maleo dan monyet berkubah di antara dataran tinggi vulkanik.",
      },
      bantimurung: {
        name: "Taman Nasional Bantimurung-Bulusaraung",
        location: "Sulawesi Selatan",
        description:
          "Kerajaan Kupu-Kupu, di mana menara karst dramatis bertemu hutan tropis yang penuh kupu-kupu endemik dan kuskus.",
      },
      "rawa-aopa": {
        name: "Taman Nasional Rawa Aopa Watumohai",
        location: "Sulawesi Tenggara",
        description:
          "Mozaik sabana, rawa gambut, dan mangrove yang menopang kawanan anoa sekaligus lokasi peneluran maleo di Sulawesi Tenggara.",
      },
      komodo: {
        name: "Taman Nasional Komodo",
        location: "Nusa Tenggara Timur",
        description:
          "Satu-satunya rumah bagi komodo. Situs Warisan Dunia UNESCO berisi bukit sabana, hutan kering, dan laut yang kaya terumbu karang.",
      },
      kelimutu: {
        name: "Taman Nasional Kelimutu",
        location: "Flores, Nusa Tenggara Timur",
        description:
          "Terkenal dengan danau kawah tiga warna, dikelilingi hutan pegunungan yang menjadi perlindungan bagi burung pemangsa endemik Flores.",
      },
      rinjani: {
        name: "Taman Nasional Gunung Rinjani",
        location: "Lombok, Nusa Tenggara Barat",
        description:
          "Gunung berapi tertinggi kedua di Indonesia dengan danau kawah Segara Anak, dibalut hutan pegunungan yang penuh burung hantu endemik.",
      },
      "laiwangi-wanggameti": {
        name: "Taman Nasional Laiwangi Wanggameti",
        location: "Sumba, Nusa Tenggara Timur",
        description:
          "Sisa hutan terbesar Sumba, tempat perlindungan bagi julang dan kakatua endemik pulau ini di tengah hutan musim.",
      },
      manusela: {
        name: "Taman Nasional Manusela",
        location: "Seram, Maluku",
        description:
          "Hutan hujan pegunungan yang terjal di Pulau Seram, rumah bagi kakatua jambul-salmon dan mamalia yang hanya hidup di sini.",
      },
      "aketajawe-lolobata": {
        name: "Taman Nasional Aketajawe-Lolobata",
        location: "Halmahera, Maluku Utara",
        description:
          "Hutan hujan dataran rendah yang luas di Halmahera, panggung tarian pacaran weka-weka Wallace dan beragam burung endemik.",
      },
      wasur: {
        name: "Taman Nasional Wasur",
        location: "Papua Selatan",
        description:
          "Serengeti Papua, berupa sabana dan lahan basah yang luas dengan walabi, kasuari, dan burung air bermigrasi.",
      },
    },
    threats: {
      deforestasi: {
        title: "Deforestasi",
        description:
          "Kehilangan hutan dalam skala besar akibat penebangan, alih fungsi lahan, dan aktivitas manusia lainnya.",
      },
      kebakaran: {
        title: "Kebakaran Hutan",
        description:
          "Kebakaran hutan dan lahan yang terjadi setiap tahun, terutama di kawasan lahan gambut.",
      },
      "kehilangan-biodiversitas": {
        title: "Kehilangan Biodiversitas",
        description:
          "Spesies yang terancam punah akibat kehilangan habitat dan perburuan liar.",
      },
    },
    issues: {
      deforestation: {
        category: "Deforestasi",
        title:
          "Perambahan Industri dan Kehilangan Tanah yang Tak Terkendali",
        description:
          "Kawasan hutan berubah dengan cepat akibat konversi lahan industri, pembalakan liar, dan perluasan pertanian ke dalam tegakan dipterokarpa purba.",
        impact:
          "Pembukaan lahan berskala besar memecah habitat, membuka tanah terhadap erosi, dan melepaskan karbon yang tersimpan lama ke atmosfer.",
      },
      "forest-fires": {
        category: "Kebakaran Hutan",
        title: "Kubah Gambut yang Mengering dan Kabut Asap",
        description:
          "Lahan gambut yang dikeringkan menjadi sangat mudah terbakar, melepaskan gas rumah kaca dan menimbulkan kabut asap regional.",
        impact:
          "Kebakaran yang berulang merusak ekosistem, mengancam kesehatan masyarakat di seluruh kawasan, dan melepaskan lonjakan karbon dalam jumlah besar.",
      },
      "biodiversity-loss": {
        category: "Hilangnya Keanekaragaman Hayati",
        title: "Koridor yang Terputus dan Kepunahan Spesies",
        description:
          "Kerusakan kanopi dan fragmentasi habitat memutus koridor ekologis, mengancam populasi satwa liar dan ketahanan ekosistem.",
        impact:
          "Populasi spesies endemik yang terisolasi menghadapi kepunahan seiring menyusutnya kumpulan gen dan peran ekologis yang tidak lagi terisi.",
      },
      "climate-change": {
        category: "Perubahan Iklim",
        title: "Iklim yang Berubah, Hutan yang Rentan",
        description:
          "Suhu yang meningkat, pola hujan yang bergeser, dan cuaca ekstrem mengubah ekosistem hutan, keanekaragaman hayati, sistem air, dan masyarakat.",
        impact:
          "Tekanan iklim melemahkan ketahanan hutan, mengganggu siklus air, dan memperbesar setiap tekanan lain pada lanskap.",
      },
    },
    impactLenses: {
      biodiversity: {
        title: "Keanekaragaman Hayati",
        description:
          "Spesies kunci seperti harimau Sumatera dan orangutan Kalimantan bergantung pada koridor hutan yang utuh dan keseimbangan ekologis.",
        label: "Gangguan Ekosistem",
      },
      climate: {
        title: "Iklim",
        description:
          "Hutan tropis mengatur iklim, menyimpan cadangan karbon dalam jumlah besar, dan memengaruhi sistem hujan di seluruh kawasan.",
        label: "Dampak Atmosfer Global",
      },
      people: {
        title: "Masyarakat",
        description:
          "Jutaan orang bergantung secara langsung maupun tidak langsung pada sumber daya hutan, jasa ekosistem, dan lanskap yang berkelanjutan.",
        label: "Ketahanan Sosial-Budaya",
      },
      ecosystems: {
        title: "Ekosistem",
        description:
          "Ekosistem hutan mengatur air, tanah, habitat, dan konektivitas ekologis di seluruh Nusantara.",
        label: "Konektivitas Lanskap",
      },
    },
  },
};
