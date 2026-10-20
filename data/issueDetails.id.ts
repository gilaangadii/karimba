/* ============================================================
   KARIMBA — DATA DETAIL MASALAH (bahasa Indonesia)
   ------------------------------------------------------------
   Versi Indonesia dari /data/issueDetails.ts. Struktur dan nilai
   numerik harus sama; hanya teks yang dapat dibaca pengguna yang
   diterjemahkan. Sumber, tautan video, dan nama berkas gambar
   dipertahankan agar tidak ada data yang hilang.
   ============================================================ */

import type { IssueDetail } from "./issueDetails";

export const issueDetailsId: Record<string, IssueDetail> = {
  deforestation: {
    heroLabel: "Deforestasi",
    title: "Deforestasi",
    subtitle: "Hutan yang Hilang, Masa Depan yang Tak Pasti",
    description:
      "Hilangnya tutupan hutan akibat alih fungsi lahan, pembalakan, pertambangan, pembangunan infrastruktur, dan berbagai tekanan lain terus memengaruhi hutan serta ekosistem Indonesia.",
    image: "/images/issues/Deforestation.jpg",
    overviewHeading: "Apa Itu Deforestasi?",
    video: "/images/issues/Deforestation.mp4",
    videoSourceUrl: "https://youtu.be/Ic-J6hcSKa8?si=Aj_aFXGlNIvu_hed",
    overviewBody: [
      "Deforestasi adalah hilangnya tutupan hutan secara permanen, umumnya disebabkan oleh perubahan penggunaan lahan seperti pertanian, pembalakan, pertambangan, dan pembangunan infrastruktur.",
      "Di Indonesia, kehilangan hutan dipantau melalui periode pengamatan resmi. Memahami bagaimana, di mana, dan seberapa cepat hutan berubah adalah langkah pertama untuk menjaganya tetap berdiri.",
    ],
    stats: [
      {
        value: "175,4 ribu",
        unit: "ha",
        label: "Deforestasi neto di Indonesia (2024)",
      },
      {
        value: "216,2 ribu",
        unit: "ha",
        label: "Deforestasi bruto di Indonesia (2024)",
      },
    ],
    statsSource: "Sumber: Kementerian Kehutanan Republik Indonesia, 2024",
    trendEyebrow: "Tren Nasional",
    trendHeading: "Kehilangan Hutan per Periode Pengamatan",
    trendIntro:
      "KLHK mengukur deforestasi melalui periode pengamatan tertentu. Periode terbaru yang terdokumentasi lengkap disajikan di sini menggunakan pelaporan aslinya — kehilangan neto memperhitungkan penghijauan kembali dalam periode yang sama.",
    trend: {
      metric: "Deforestasi",
      unit: "ha",
      period: "2021–2022",
      scope: "Indonesia",
      source: "Kementerian Kehutanan / KLHK",
      note: "KLHK melaporkan deforestasi menggunakan periode pengamatan; kumpulan data ini tidak setara dengan pengukuran tahun kalender.",
      rows: [
        {
          label: "Deforestasi neto",
          value: 104032.9,
          display: "104.032,9 ha",
        },
        {
          label: "Deforestasi bruto",
          value: 119449.1,
          display: "119.449,1 ha",
        },
        {
          label: "Penghijauan kembali",
          value: 15416.2,
          display: "15.416,2 ha",
        },
      ],
    },
    focusEyebrow: "Melihat Lebih Dekat",
    focusHeading: "Di Mana Kehilangan Hutan Terkonsentrasi?",
    focusIntro:
      "Kehilangan hutan di Indonesia tidak tersebar merata. Lima provinsi ini mencatat deforestasi tertinggi selama 2021–2022, menunjukkan lokasi tekanan terhadap hutan paling berat.",
    focusItems: [
      {
        title: "Kalimantan Timur dan Kalimantan Utara",
        value: "13.758,8 ha",
      },
      { title: "Kalimantan Tengah", value: "11.564,4 ha" },
      { title: "Riau", value: "9.254,8 ha" },
      { title: "Kalimantan Barat", value: "7.845,7 ha" },
      { title: "Nusa Tenggara Barat", value: "6.411,2 ha" },
    ],
    focusFooterNote:
      "Data provinsi yang ditampilkan berasal dari 2021–2022, sedangkan angka nasional di atas berasal dari 2024.",
    focusSource: "Sumber: BPS, Angka Deforestasi Indonesia 2013–2022; KLHK.",
    driversHeading: "Pendorong Utama Kehilangan Hutan",
    driversIntro:
      "Kehilangan hutan di Indonesia didorong oleh berbagai aktivitas manusia, termasuk perluasan pertanian, pembalakan, pertambangan, dan pembangunan infrastruktur.",
    drivers: [
      {
        icon: "sprout",
        image: "/images/issues/Agricultural_Expansion.jpg",
        title: "Perluasan Pertanian",
        description:
          "Konversi hutan menjadi perkebunan seperti kelapa sawit, akasia, dan tanaman lainnya.",
      },
      {
        icon: "axe",
        image: "/images/issues/Illegal_Logging.jpg",
        title: "Pembalakan",
        description:
          "Pembalakan legal maupun ilegal terus mengurangi tutupan hutan.",
      },
      {
        icon: "pickaxe",
        image: "/images/issues/Mining.jpg",
        title: "Pertambangan",
        description:
          "Penggalian mineral menyebabkan pembukaan hutan berskala besar dan kehilangan habitat.",
      },
      {
        icon: "construction",
        image: "/images/issues/Infrastructure_Development.jpg",
        title: "Pembangunan Infrastruktur",
        description:
          "Jalan, permukiman, dan infrastruktur lain membuka akses ke kawasan hutan.",
      },
    ],
    impactsHeading: "Mengapa Ini Penting?",
    impactsIntro:
      "Ketika hutan tumbang, dampaknya jauh melampaui lahan yang dibuka.",
    impacts: [
      {
        icon: "bird",
        image: "/images/issues/biodiversity.png",
        title: "Keanekaragaman Hayati",
        description:
          "Kehilangan habitat mendorong satwa liar endemik ke populasi yang lebih kecil dan terisolasi.",
      },
      {
        icon: "cloud-sun",
        image: "/images/issues/Climate.jpg",
        title: "Iklim",
        description:
          "Hutan yang dibuka melepaskan karbon tersimpan dan melemahkan stabilitas iklim regional.",
      },
      {
        icon: "tree",
        image: "/images/issues/Ecosystem.jpg",
        title: "Ekosistem",
        description:
          "Kanopi yang rusak mengganggu siklus air, tanah, dan regenerasi hutan.",
      },
      {
        icon: "users",
        image: "/images/issues/Communities.jpg",
        title: "Masyarakat",
        description:
          "Penghidupan yang bergantung pada hutan kehilangan sumber daya, perlindungan, dan warisan.",
      },
    ],
    actionsHeading: "Bagaimana Kita Mencegahnya?",
    actionsIntro:
      "Melindungi hutan dimulai dari pencegahan, pilihan yang bertanggung jawab, dan tindakan bersama. Berikut beberapa cara kita dapat membuat perbedaan.",
    actions: [
      {
        icon: "shield",
        image: "/images/issues/Protect_Existing_Forests.jpg",
        title: "Lindungi Hutan yang Tersisa",
        description:
          "Perkuat perlindungan hutan dan cegah pembalakan liar, alih fungsi lahan, serta aktivitas merusak lainnya.",
      },
      {
        icon: "sprout",
        image: "/images/issues/Restore_Degraded_Land.jpg",
        title: "Pulihkan Lahan Terdegradasi",
        description:
          "Tanam kembali kawasan yang rusak dan rehabilitasi ekosistem dengan vegetasi asli.",
      },
      {
        icon: "recycle",
        image: "/images/issues/Use_Resources_Responsibly.jpg",
        title: "Gunakan Sumber Daya secara Bijak",
        description:
          "Kurangi konsumsi yang tidak perlu dan pilih produk yang mendukung praktik berkelanjutan.",
      },
      {
        icon: "users",
        image: "/images/issues/Take_Part_&_Speak%20Up.jpg",
        title: "Ikut Terlibat dan Bersuara",
        description:
          "Dukung inisiatif konservasi, bagikan informasi yang tepercaya, dan dorong tindakan di komunitas Anda.",
      },
    ],
  },

  "forest-fires": {
    heroLabel: "Kebakaran Hutan",
    title: "Kebakaran Hutan",
    subtitle: "Ketika Hutan Terbakar, Kehidupan Menanggung Akibatnya",
    description:
      "Kebakaran hutan dan lahan yang berulang — terutama di lahan gambut yang dikeringkan — merusak ekosistem, mengancam kesehatan, dan melepaskan karbon dalam jumlah besar ke atmosfer.",
    image: "/images/issues/Kebakaran_Hutan.jpg",
    overviewHeading: "Apa Itu Kebakaran Hutan?",
    video: "/images/issues/Forest_Fire.mp4",
    videoSourceUrl: "https://youtu.be/5hghT1W33cY?si=4JcVKP2rtWP1oqts",
    stats: [
      {
        value: "1.437",
        unit: "",
        label:
          "Titik panas dengan tingkat keyakinan tinggi secara nasional (14 September 2026)",
      },
      {
        value: "689",
        unit: "",
        label: "Titik panas di Kalimantan Tengah, provinsi tertinggi",
      },
      {
        value: "53",
        unit: "",
        label: "Armada pesawat siaga (34 pengeboman air + 19 patroli)",
      },
    ],
    statsSource:
      "Sumber: SiPongi / Kementerian Kehutanan, 14 September 2026",
    overviewBody: [
      "Kebakaran hutan dan lahan hampir selalu terjadi setiap musim kemarau di Indonesia, paling parah di kawasan gambut yang dikeringkan untuk perkebunan dan pembangunan.",
      "Setelah tersulut, gambut dapat membara di bawah permukaan selama berminggu-minggu. Kabut asap yang dihasilkan melintasi batas provinsi dan negara, mengubah masalah lahan menjadi krisis regional.",
    ],
    trendEyebrow: "Tren Nasional",
    trendHeading: "Lonjakan Titik Panas dalam Dua Hari",
    trendIntro:
      "Satelit SiPongi mendeteksi lonjakan tajam titik panas dengan tingkat keyakinan tinggi dalam semalam. Titik panas menandai anomali suhu permukaan — setiap indikasi diverifikasi di lapangan, karena satu kebakaran dapat menghasilkan beberapa titik panas.",
    trend: {
      metric: "Titik panas dengan tingkat keyakinan tinggi",
      unit: "per hari",
      period: "13–14 September 2026",
      scope: "Indonesia",
      source:
        "SiPongi / Kementerian Kehutanan (NASA Terra/Aqua, SNPP, NOAA-20)",
      rows: [
        {
          label: "13 September 2026",
          value: 592,
          display: "592 titik panas",
        },
        {
          label: "14 September 2026",
          value: 1437,
          display: "1.437 titik panas",
        },
      ],
    },
    focusEyebrow: "Melihat Lebih Dekat",
    focusHeading: "Di Mana Kebakaran Hutan Paling Parah?",
    focusIntro:
      "Enam provinsi prioritas menggerakkan respons nasional. Kalimantan Tengah saja menampung hampir separuh dari seluruh titik panas dengan tingkat keyakinan tinggi.",
    focusItems: [
      { title: "Kalimantan Tengah", value: "689 titik panas" },
      { title: "Kalimantan Barat", value: "203 titik panas" },
      { title: "Sumatera Selatan", value: "116 titik panas" },
      { title: "Kalimantan Selatan", value: "112 titik panas" },
      { title: "Jambi", value: "9 titik panas" },
      { title: "Riau", value: "0 titik panas" },
    ],
    focusFooterNote:
      "Hitungan ini adalah titik panas dengan tingkat keyakinan tinggi pada 14 September 2026 — indikasi anomali, bukan jumlah peristiwa kebakaran.",
    focusSource:
      "Sumber: SiPongi / Kementerian Kehutanan, 14 September 2026.",
    driversHeading: "Apa yang Memicu Kebakaran?",
    driversIntro:
      "Hampir semua kebakaran hutan di Indonesia terkait dengan aktivitas manusia yang berinteraksi dengan lanskap kering dan mudah terbakar.",
    drivers: [
      {
        icon: "flame",
        image: "/images/issues/Land_Clearing.jpg",
        title: "Pembukaan Lahan",
        description:
          "Api masih digunakan untuk membersihkan lahan dengan biaya murah, sering kali merambat ke hutan sekitar.",
      },
      {
        icon: "droplets",
        image: "/images/issues/Peatland_Drying.jpg",
        title: "Pengeringan Gambut",
        description:
          "Kanal drainase mengeringkan kubah gambut, mengubah gudang karbon basah menjadi bahan bakar.",
      },
      {
        icon: "sun",
        image: "/images/issues/Prolonged_Dry_Conditions.jpg",
        title: "Kondisi Kering Berkepanjangan",
        description:
          "Musim kemarau panjang dan tahun-tahun kekeringan membuat penyulutan jauh lebih mungkin terjadi.",
      },
      {
        icon: "alert",
        image: "/images/issues/Human_Ignition_&_Accidental_Fires.jpg",
        title: "Penyulutan Manusia dan Kebakaran Tak Sengaja",
        description:
          "Puntung rokok yang dibuang, api unggun, dan percikan api menyulut lanskap yang sangat kering.",
      },
    ],
    impactsHeading: "Mengapa Ini Penting?",
    impactsIntro:
      "Satu musim kebakaran dapat merusak pertumbuhan hutan dan kesehatan masyarakat selama puluhan tahun.",
    impacts: [
      {
        icon: "tree",
        image: "/images/issues/Habitat_Damage.jpg",
        title: "Kerusakan Habitat",
        description:
          "Hutan yang terbakar kehilangan kanopi, tempat bersarang, dan sumber pakan selama bertahun-tahun.",
      },
      {
        icon: "wind",
        image: "/images/issues/Air_Quality.jpg",
        title: "Kualitas Udara",
        description:
          "Kabut asap tebal mengganggu kehidupan sehari-hari, transportasi, dan sekolah di seluruh kawasan.",
      },
      {
        icon: "factory",
        image: "/images/issues/Carbon_Emissions.jpg",
        title: "Emisi Karbon",
        description:
          "Pembakaran gambut melepaskan karbon yang tersimpan selama ribuan tahun dalam hitungan minggu.",
      },
      {
        icon: "users",
        image: "/images/issues/Community_Health.jpg",
        title: "Kesehatan Masyarakat",
        description:
          "Paparan asap merusak kesehatan pernapasan, terutama pada anak-anak dan lansia.",
      },
    ],
    actionsHeading: "Bagaimana Kita Mencegahnya?",
    actionsIntro:
      "Pencegahan kebakaran dimulai jauh sebelum musim kemarau — dengan gambut yang basah, masyarakat yang waspada, dan respons cepat.",
    actions: [
      {
        icon: "shield",
        image: "/images/issues/Prevent_Open_Burning.jpg",
        title: "Cegah Pembakaran Terbuka",
        description:
          "Tegakkan aturan larangan pembakaran dan dorong penyiapan lahan tanpa api.",
      },
      {
        icon: "droplets",
        image: "/images/issues/Keep_Peatlands_Wet.jpg",
        title: "Jaga Gambut Tetap Basah",
        description:
          "Blokir kanal drainase dan basahi kembali kubah gambut agar tidak tersulut.",
      },
      {
        icon: "bell",
        image: "/images/issues/Early_Detection.jpg",
        title: "Deteksi Dini",
        description:
          "Pantau titik panas dan indikator kekeringan untuk menangkap kebakaran sebelum menyebar.",
      },
      {
        icon: "users",
        image: "/images/issues/Community_Response.jpg",
        title: "Respons Masyarakat",
        description:
          "Latih dan lengkapi tim pemadam kebakaran desa sebagai garda terdepan.",
      },
    ],
  },

  "biodiversity-loss": {
    heroLabel: "Hilangnya Keanekaragaman Hayati",
    title: "Hilangnya Keanekaragaman Hayati",
    subtitle: "Ketika Hutan Hilang, Spesies Ikut Menghilang",
    description:
      "Kehilangan dan fragmentasi habitat mendorong satwa liar endemik Indonesia menuju kepunahan, mengurai ekosistem yang terbentuk selama jutaan tahun.",
    image: "/images/issues/Kehilangan_Keanekaragaman_Hayati.jpg",
    overviewHeading: "Apa Itu Hilangnya Keanekaragaman Hayati?",
    video: "/images/issues/Biodiversity_loss.mp4",
    videoSourceUrl: "https://youtu.be/lcNh_ZS3u-k?si=UaQrX5-6agBen-rz",
    stats: [
      {
        value: ">17%",
        unit: "",
        label:
          "Bagian keanekaragaman hayati dunia yang dimiliki Indonesia",
      },
      {
        value: "0,75",
        unit: "",
        label: "Indeks Daftar Merah 2024 (turun dari 0,77 pada 2018)",
      },
      {
        value: "4",
        unit: "",
        label:
          "Dokumen status biogeografis diluncurkan (Papua, Bali–Nusa Tenggara, Jawa, Maluku)",
      },
    ],
    statsSource: "Sumber: Kementerian Kehutanan, 21 Juli 2026",
    overviewBody: [
      "Hilangnya keanekaragaman hayati adalah penurunan dan hilangnya spesies, yang di Indonesia terutama didorong oleh penyusutan dan fragmentasi habitat hutan.",
      "Karena begitu banyak spesies Indonesia hanya hidup di tempat ini, kehilangan satu hutan dapat berarti kehilangan spesies yang tidak akan pernah dilihat dunia lagi.",
    ],
    trendEyebrow: "Tren Nasional",
    trendHeading: "Indeks Daftar Merah dari Waktu ke Waktu",
    trendIntro:
      "Indeks Daftar Merah (SDG 15.5.1) melacak risiko kepunahan agregat: nilai yang menurun berarti risiko yang meningkat. Indeks Indonesia turun antara 2018 dan 2024, dengan target pemerintah untuk menaikkannya pada 2029.",
    trend: {
      metric: "Indeks Daftar Merah",
      unit: "skala 0–1",
      period: "2018–2024, dengan target 2029",
      scope: "Indonesia",
      source: "Kementerian Kehutanan",
      note: "2029 adalah target resmi pemerintah, bukan nilai teramati.",
      rows: [
        { label: "2018 (teramati)", value: 0.77, display: "0,77" },
        { label: "2024 (teramati)", value: 0.75, display: "0,75" },
        { label: "2029 (target)", value: 0.76, display: "0,76" },
      ],
    },
    focusEyebrow: "Melihat Lebih Dekat",
    focusHeading: "Spesies Mana yang Paling Berisiko?",
    focusIntro:
      "Spesies ikonik ini, yang semuanya terdokumentasi hidup di hutan Indonesia, menghadapi kategori risiko kepunahan tertinggi.",
    focusItems: [
      { title: "Harimau Sumatera", value: "Terancam Kritis" },
      { title: "Orangutan Kalimantan", value: "Terancam Kritis" },
      { title: "Badak Jawa", value: "Terancam Kritis" },
      { title: "Maleo", value: "Terancam" },
      { title: "Komodo", value: "Terancam" },
    ],
    focusSource: "Sumber: Kategori Daftar Merah IUCN.",
    driversHeading: "Apa yang Mendorong Kehilangannya?",
    driversIntro:
      "Spesies menghilang ketika kondisi tempat mereka berevolusi lenyap lebih cepat daripada kemampuan mereka beradaptasi.",
    drivers: [
      {
        icon: "axe",
        image: "/images/issues/Habitat_Loss.jpg",
        title: "Kehilangan Habitat",
        description:
          "Hutan yang dibuka menghilangkan pakan, tempat berlindung, dan lokasi berkembang biak yang dibutuhkan spesies.",
      },
      {
        icon: "alert",
        image: "/images/issues/Habitat_Fragmentation.jpg",
        title: "Fragmentasi Habitat",
        description:
          "Koridor yang terputus mengisolasi populasi dan menyusutkan kumpulan gen selama beberapa generasi.",
      },
      {
        icon: "gavel",
        image: "/images/issues/Illegal_Wildlife_Trade.jpeg",
        title: "Perdagangan Satwa Liar Ilegal",
        description:
          "Perburuan dan perdagangan menyasar spesies langka untuk pasar ilegal.",
      },
      {
        icon: "cloud-rain",
        image: "/images/issues/Climate_and_Environmental_Change.jpg",
        title: "Perubahan Iklim dan Lingkungan",
        description:
          "Pergeseran musim dan habitat yang tertekan mendorong spesies rentan semakin terdesak.",
      },
    ],
    impactsHeading: "Mengapa Ini Penting?",
    impactsIntro:
      "Setiap spesies yang hilang melemahkan jaring kehidupan yang menjadi sandaran hutan — dan manusia.",
    impacts: [
      {
        icon: "mountain",
        image: "/images/issues/Ecosystem_Stability.jpg",
        title: "Stabilitas Ekosistem",
        description:
          "Semakin sedikit spesies, semakin sulit hutan pulih dari guncangan.",
      },
      {
        icon: "fish",
        image: "/images/issues/Food_Webs.jpg",
        title: "Jaring Makanan",
        description:
          "Hilangnya predator dan penyerbuk merambat ke seluruh rantai makanan.",
      },
      {
        icon: "leaf",
        image: "/images/issues/Genetic_Diversity.jpg",
        title: "Keanekaragaman Genetik",
        description:
          "Populasi yang hilang menghapus warisan genetik yang butuh ribuan tahun untuk berevolusi.",
      },
      {
        icon: "users",
        image: "/images/issues/Communities.jpg",
        title: "Masyarakat",
        description:
          "Budaya lokal dan penghidupan yang terikat pada satwa liar kehilangan sebagian identitasnya.",
      },
    ],
    actionsHeading: "Bagaimana Kita Dapat Membantu?",
    actionsIntro:
      "Melindungi spesies berarti melindungi tempat dan keterhubungan yang menopang kehidupan mereka.",
    actions: [
      {
        icon: "shield",
        image: "/images/issues/Protect_Key_Habitats.jpg",
        title: "Lindungi Habitat Kunci",
        description:
          "Jaga kawasan inti seperti taman nasional tetap utuh, terjaga melalui patroli, dan terhubung.",
      },
      {
        icon: "tree",
        image: "/images/issues/Restore_Wildlife_Corridors.jpg",
        title: "Pulihkan Koridor Satwa Liar",
        description:
          "Hubungkan kembali fragmen agar populasi terisolasi dapat bertemu dan berkembang biak.",
      },
      {
        icon: "gavel",
        image: "/images/issues/Reject_Illegal_Wildlife_Products.jpg",
        title: "Tolak Produk Satwa Liar Ilegal",
        description:
          "Jangan membeli satwa hasil perdagangan ilegal dan laporkan kejahatan satwa liar.",
      },
      {
        icon: "book",
        image: "/images/issues/Support_Field_Research.jpg",
        title: "Dukung Penelitian Lapangan",
        description:
          "Patroli penjaga dan pemantauan ilmiah mengubah data menjadi perlindungan.",
      },
    ],
  },

  "climate-change": {
    heroLabel: "Perubahan Iklim",
    title: "Perubahan Iklim",
    subtitle: "Iklim yang Berubah, Hutan yang Rentan",
    description:
      "Suhu yang meningkat, pola hujan yang bergeser, dan cuaca ekstrem membentuk ulang hutan Indonesia — dan hutan turut membentuk iklim.",
    image: "/images/issues/Climate_change.jpg",
    overviewHeading: "Apa Itu Perubahan Iklim?",
    video: "/images/issues/Climate_Change.mp4",
    videoSourceUrl: "https://youtu.be/G4H1N_yXBiA?si=VUgqndzs1OlsNhK9",
    stats: [
      {
        value: "+0,38°C",
        unit: "",
        label:
          "Anomali suhu rata-rata pada 2025 (dibandingkan normal 1991–2020)",
      },
      {
        value: "27,05°C",
        unit: "",
        label: "Suhu rata-rata 2025 dari 115 stasiun BMKG",
      },
      {
        value: "#43",
        unit: "",
        label: "Peringkat CCPI Indonesia — kinerja keseluruhan rendah",
      },
    ],
    statsSource:
      "Sumber: BMKG (2025); Indeks Kinerja Perubahan Iklim (CCPI 2026)",
    overviewBody: [
      "Perubahan iklim adalah pergeseran jangka panjang suhu dan pola cuaca yang didorong oleh meningkatnya gas rumah kaca di atmosfer.",
      "Hutan Indonesia menderita sekaligus memengaruhi perubahan ini: tertekan oleh panas dan cuaca ekstrem, namun tetap vital sebagai penyimpan karbon dan pembentuk hujan.",
    ],
    trendEyebrow: "Tren Nasional",
    trendHeading: "Suhu Rata-Rata: Normal vs 2025",
    trendIntro:
      "BMKG melaporkan anomali suhu tahunan terhadap periode normal 1991–2020 (26,7 °C). Pada 2025, rata-rata nasional mencapai 27,05 °C — anomali +0,38 °C dan tahun terpanas keenam sejak 1981.",
    trend: {
      metric: "Suhu rata-rata tahunan",
      unit: "°C",
      period: "Normal 1991–2020 vs 2025",
      scope: "Indonesia (115 stasiun BMKG)",
      source: "BMKG, Informasi Iklim",
      rows: [
        {
          label: "Normal 1991–2020",
          value: 26.7,
          display: "26,7 °C",
        },
        {
          label: "Rata-rata 2025",
          value: 27.05,
          display: "27,05 °C",
        },
      ],
    },
    focusEyebrow: "Melihat Lebih Dekat",
    focusHeading: "Bagaimana Perubahan Iklim Memengaruhi Hutan?",
    focusIntro:
      "Tiga jalur yang saling terkait menghubungkan iklim yang menghangat dengan hutan yang melemah — bersama posisi Indonesia dalam kinerja iklim global.",
    focusItems: [
      {
        title: "Kenaikan Suhu Rata-Rata",
        note: "Tekanan panas melemahkan pohon, menggeser musim berbunga, dan menekan spesies pegunungan yang tidak lagi punya tempat lebih tinggi untuk dituju.",
      },
      {
        title: "Pergeseran Musim Hujan",
        note: "Masa kering yang lebih panjang dan hujan lebat yang lebih sering mengganggu siklus pertumbuhan, pembuahan, dan pasokan air tawar.",
      },
      {
        title: "Cuaca Ekstrem yang Lebih Kuat",
        note: "Pergantian kekeringan dan banjir memperbesar kebakaran, longsor, dan ledakan hama di seluruh lanskap hutan.",
      },
      {
        title: "Peringkat CCPI #43 — Kinerja Rendah",
        note: "Indonesia berkinerja rendah di semua kategori CCPI: Emisi Gas Rumah Kaca, Energi Terbarukan, Kebijakan Iklim, dan Penggunaan Energi.",
      },
    ],
    focusSource:
      "Sumber: BMKG, Informasi Iklim; Indeks Kinerja Perubahan Iklim (CCPI 2026).",
    driversHeading: "Apa yang Mendorong Perubahan Ini?",
    driversIntro:
      "Gas rumah kaca dari aktivitas manusia memerangkap panas, sementara deforestasi menghilangkan kemampuan hutan untuk menyerapnya.",
    drivers: [
      {
        icon: "thermometer",
        image: "/images/issues/Rising_Temperature.jpg",
        title: "Kenaikan Suhu",
        description:
          "Suhu rata-rata yang terus naik menekan kehidupan hutan yang sensitif terhadap panas.",
      },
      {
        icon: "cloud-rain",
        image: "/images/issues/Changing_Rainfall.jpg",
        title: "Perubahan Pola Hujan",
        description:
          "Musim hujan yang lebih basah dan musim kemarau yang lebih kering mengganggu ritme hutan.",
      },
      {
        icon: "wind",
        image: "/images/issues/Extreme_Weather.jpg",
        title: "Cuaca Ekstrem",
        description:
          "Badai, banjir, dan kekeringan yang lebih kuat semakin sering menghantam hutan.",
      },
      {
        icon: "alert",
        image: "/images/issues/Ecosystem_Stress.jpg",
        title: "Tekanan Ekosistem",
        description:
          "Hutan yang tertekan tumbuh lebih lambat, lebih mudah terbakar, dan lebih sulit pulih.",
      },
    ],
    impactsHeading: "Mengapa Ini Penting?",
    impactsIntro:
      "Iklim yang berubah menyentuh setiap lapisan hutan, dari tanah hingga kanopi.",
    impacts: [
      {
        icon: "tree",
        image: "/images/issues/Ecosystem_Changes.jpg",
        title: "Perubahan Ekosistem",
        description:
          "Wilayah jelajah spesies bergeser dan komposisi hutan perlahan berubah.",
      },
      {
        icon: "waves",
        image: "/images/issues/Water_Systems.jpg",
        title: "Sistem Air",
        description:
          "Hujan yang tidak menentu mengancam sungai, lahan basah, dan masyarakat di hilir.",
      },
      {
        icon: "bird",
        image: "/images/issues/Species_Survival.jpg",
        title: "Kelangsungan Spesies",
        description:
          "Satwa liar endemik dengan wilayah jelajah sempit menghadapi habitat aman yang menyusut.",
      },
      {
        icon: "users",
        image: "/images/issues/Communities.jpg",
        title: "Masyarakat",
        description:
          "Petani dan masyarakat hutan menanggung gagal panen dan banjir.",
      },
    ],
    actionsHeading: "Bagaimana Kita Dapat Merespons?",
    actionsIntro:
      "Menekan emisi dan melindungi hutan kaya karbon adalah dua sisi dari respons yang sama.",
    actions: [
      {
        icon: "factory",
        image: "/images/issues/Cut_Emissions.jpg",
        title: "Kurangi Emisi",
        description:
          "Kurangi penggunaan bahan bakar fosil dan hentikan pembakaran hutan serta lahan gambut.",
      },
      {
        icon: "tree",
        image: "/images/issues/Protect_Carbon_Forests.jpg",
        title: "Lindungi Hutan Karbon",
        description:
          "Jaga rawa gambut dan hutan tua tetap berdiri sebagai penyimpan karbon.",
      },
      {
        icon: "sun",
        image: "/images/issues/Climate-Smart_Villages.jpg",
        title: "Desa Tanggap Iklim",
        description:
          "Dukung penghidupan yang beradaptasi dengan realitas iklim baru.",
      },
      {
        icon: "book",
        image: "/images/issues/Share_Knowledge.png",
        title: "Bagikan Pengetahuan",
        description:
          "Sebarkan informasi iklim yang tepercaya di komunitas Anda.",
      },
    ],
  },
};
