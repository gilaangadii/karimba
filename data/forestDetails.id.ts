import type { ForestDetail } from "./forestDetails";

/* ============================================================
   KARIMBA — TERJEMAHAN INDONESIA UNTUK DETAIL HUTAN
   ------------------------------------------------------------
   File ini HANYA berisi teks Indonesia. Data bahasa Inggris di
   ./forestDetails.ts tidak diubah sama sekali; setiap field yang
   tidak ada di sini otomatis memakai nilai aslinya.
   ============================================================ */

export interface ForestFloraText {
  name?: string;
  habitat?: string;
  description?: string;
}

export interface ForestDetailText {
  province?: string;
  designation?: string;
  elevation?: string;
  profileHeading?: string;
  profile?: string[];
  ecosystems?: string[];
  flora?: ForestFloraText[];
  importanceSubtitle?: string;
  importance?: { title?: string; description?: string }[];
  extraStats?: { label?: string; value?: string }[];
  timeline?: { period?: string; title?: string; description?: string }[];
  threatSpotlight?: { label?: string; title?: string; note?: string };
}

/** Nama pulau dalam ejaan Indonesia. */
export const islandLabelsId: Record<ForestDetail["island"], string> = {
  Sumatra: "Sumatera",
  Java: "Jawa",
  Borneo: "Kalimantan",
  Sulawesi: "Sulawesi",
  "Nusa Tenggara": "Nusa Tenggara",
  Maluku: "Maluku",
  Papua: "Papua",
};

export const forestDetailsId: Record<string, ForestDetailText> = {
  leuser: {
    province: "Aceh",
    designation: "Taman Nasional",
    elevation: "Hingga 3.404 m dpl",
    profileHeading: "Hutan Hujan Terakhir yang Agung di Sumatera",
    profile: [
      "Ekosistem Leuser merupakan salah satu bentang hutan hujan tropis terluas yang tersisa di Asia Tenggara, membentang dari hutan dataran rendah hingga pegunungan berkabut di Aceh.",
      "Inilah satu-satunya tempat di dunia yang masih menjadi rumah bersama bagi orangutan, harimau, gajah, dan badak dalam satu hamparan hutan, sehingga menjadi ikon kelestarian alam dunia.",
      "Kini, patroli penjaga, program hutan kemasyarakatan, dan riset jangka panjang terus menjaga Leuser, sementara Aceh merancang masa depan yang menjadikan hutan sebagai sumber air, penghidupan, dan kebanggaan.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Hujan Pegunungan"],
    flora: [
      {
        name: "Meranti",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon dipterokarpa menjulang yang membentuk kanopi tinggi, tempat berlindung orangutan dan rangkong.",
      },
      {
        name: "Rotan",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Palem merambat yang membentuk lapisan bawah hutan; buahnya menjadi makanan rangkong dan berbagai mamalia.",
      },
    ],
    importanceSubtitle:
      "Empat mamalia ikonik, satu hutan yang utuh — warisan hidup terbesar Sumatera.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Leuser melindungi orangutan, harimau, gajah, dan badak Sumatera dalam satu lanskap yang saling terhubung — kumpulan satwa yang tidak ditemukan di tempat lain di bumi. Owa, rangkong, dan ribuan spesies lain menghuni setiap lapisan hutan, dari lantai hutan hingga kanopi. Melindungi Leuser berarti melindungi seluruh megafauna Sumatera sekaligus.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan primer yang luas menyimpan cadangan karbon raksasa yang terakumulasi selama berabad-abad tanpa gangguan. Hutan ini mengembalikan kelembapan ke atmosfer dan menaburkan hujan di Sumatera bagian utara. Jika Leuser hilang, kawasan ini kehilangan gudang karbon sekaligus penstabil iklimnya.",
      },
      {
        title: "Sistem Air",
        description:
          "Sungai Alas dan sungai-sungai lain berhulu di dataran tinggi Leuser, mengalirkan air bersih bagi sawah, kota, dan permukiman di hilir. Lereng yang berhutan menahan tanah dari banjir dan longsor saat musim hujan. Jutaan orang Aceh dan Sumatera Utara bergantung pada air dari hutan ini setiap hari.",
      },
    ],
    extraStats: [{ label: "Ketinggian", value: "Hingga 3.404 m" }],
    timeline: [
      {
        period: "2004",
        title: "Penetapan Warisan Dunia",
        description:
          "Ekosistem Leuser ditetapkan sebagai bagian dari Warisan Hutan Hujan Tropis Sumatera.",
      },
    ],
  },

  "kerinci-seblat": {
    province: "Jambi · Sumatera Barat · Bengkulu · Sumatera Selatan",
    designation: "Taman Nasional",
    elevation: "Hingga 3.805 m dpl",
    profileHeading: "Atap Sumatera",
    profile: [
      "Kerinci Seblat adalah taman nasional terbesar di Sumatera, sebuah bentang alam curam berisi puncak-puncak vulkanik, hutan pegunungan, dan danau dataran tinggi yang membentang di empat provinsi.",
      "Kawasan ini menjaga Gunung Kerinci, gunung berapi tertinggi di Indonesia, serta beberapa benteng terakhir harimau dan badak Sumatera.",
      "Bersama taman-taman nasional di sekitarnya, kawasan ini membentuk Warisan Hutan Hujan Tropis Sumatera, sebuah Situs Warisan Dunia UNESCO; unit patroli harimau pun menyusuri punggung bukitnya untuk memastikan kelestariannya.",
    ],
    ecosystems: ["Hutan Hujan Pegunungan", "Dataran Tinggi Vulkanik"],
    flora: [
      {
        name: "Rafflesia Raksasa",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Penghasil bunga tunggal terbesar di dunia, yang mekar di lantai hutan dataran rendah Bengkulu di dalam kawasan taman nasional.",
      },
      {
        name: "Kantong Semar",
        habitat: "Hutan Hujan Pegunungan",
        description:
          "Tumbuhan karnivora yang tumbuh subur di tanah tipis dan lembap pada lereng vulkanik yang tinggi.",
      },
    ],
    importanceSubtitle:
      "Punggung vulkanik Sumatera, penjaga harimau, badak, dan puncak tertinggi pulau ini.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Hutan Pegunungan Barisan di Kerinci Seblat menyimpan salah satu populasi harimau terpadat yang tersisa di Sumatera, bersama badak, tapir, dan macan dahan. Lerengnya menyusun hutan dataran rendah, hutan lumut pegunungan, dan semak vulkanik tinggi — habitat dan spesies endemik bertumpuk dalam satu bentang. Hanya sedikit taman nasional di dunia yang memadukan begitu banyak kehidupan dalam lanskap setegak ini.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan pegunungannya yang luas menyimpan karbon di kedalaman tanah sekaligus menyejukkan dataran tinggi di sekitarnya. Hutan awan menyaring kelembapan dari udara yang melintas dan mengisi mata air di empat provinsi. Taman nasional ini adalah tulang punggung iklim Sumatera yang berdiri atau runtuh sebagai satu kesatuan.",
      },
      {
        title: "Sistem Air",
        description:
          "Sungai-sungai besar Sumatera berawal dari pegunungan ini, mengalir jernih dan stabil menuju sawah, kota, dan pesisir. Tutupan hutan menjaga air tetap bersih sepanjang bulan kering dan menahan banjir di musim hujan. Empat provinsi minum dari satu punggung hijau ini.",
      },
    ],
    extraStats: [{ label: "Ketinggian", value: "Hingga 3.805 m" }],
    timeline: [
      {
        period: "2004",
        title: "Penetapan Warisan Dunia",
        description:
          "Kerinci Seblat ditetapkan sebagai bagian dari Warisan Hutan Hujan Tropis Sumatera.",
      },
    ],
  },

  "tanjung-puting": {
    province: "Kalimantan Tengah",
    designation: "Taman Nasional",
    profileHeading: "Kerajaan Orangutan",
    profile: [
      "Rawa gambut dan mangrove Tanjung Puting di sepanjang sungai Kalimantan Tengah membentuk habitat orangutan paling terkenal di dunia.",
      "Sungai air hitam dan hutan yang tergenang menopang bekantan, rangkong, serta populasi orangutan liar yang telah lama diteliti.",
      "Stasiun riset bersejarah Camp Leakey telah menjadi pusat ilmu orangutan selama puluhan tahun, sementara ekowisata berbasis sungai membantu membiayai perlindungan kawasan.",
    ],
    ecosystems: ["Hutan Rawa Gambut", "Hutan Mangrove"],
    flora: [
      {
        name: "Ramin",
        habitat: "Hutan Rawa Gambut",
        description:
          "Pohon rawa gambut yang tumbuh lambat dan pernah dieksploitasi besar-besaran; kini menjadi simbol pemulihan hutan rawa.",
      },
      {
        name: "Jelutung",
        habitat: "Hutan Rawa Gambut",
        description:
          "Pohon penghasil getah yang menjulang di rawa, dipanen secara lestari oleh penyadap lokal.",
      },
    ],
    importanceSubtitle:
      "Tempat sungai air hitam merawat orangutan paling terkenal di dunia.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Tidak ada hutan di bumi yang lebih identik dengan orangutan; populasi liarnya di sini telah mengajarkan sebagian besar ilmu yang kita ketahui tentang spesies ini. Bekantan, owa, rangkong, dan macan dahan berbagi mozaik rawa yang sama. Kawasan ini adalah laboratorium hidup ekologi rawa gambut.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Di bawah hutan yang tergenang terbentang kubah gambut yang menyimpan karbon selama ribuan tahun. Menjaga kubah itu tetap basah berarti mengubur karbonnya; mengeringkannya mengubah gudang karbon menjadi bahan bakar kebakaran. Tanjung Puting adalah infrastruktur iklim yang berwajah hutan.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Perahu klotok, desa di tepi sungai, dan kamp rehabilitasi orangutan membangun ekonomi ekowisata yang khas. Perikanan dan rotan dari zona penyangga menopang penghidupan masyarakat Dayak. Di sini, hutan yang hidup terbukti lebih menguntungkan daripada hutan yang ditebang.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "1971",
        title: "Camp Leakey Didirikan",
        description:
          "Stasiun riset di Sungai Sekonyer memulai puluhan tahun penelitian dan perlindungan orangutan.",
      },
      {
        period: "2015",
        title: "Kebakaran Besar El Niño",
        description:
          "Kemarau ekstrem memicu kebakaran gambut dan hutan hingga jauh ke dalam rawa lindung Kalimantan Tengah.",
      },
    ],
  },

  sebangau: {
    province: "Kalimantan Tengah",
    designation: "Taman Nasional",
    profileHeading: "Ikon Hutan Gambut",
    profile: [
      "Sebangau menyimpan salah satu kubah gambut tropis terpadu terakhir di bumi, sebuah spons alami dari bahan organik hutan yang terurai sebagian dan terbentuk selama ribuan tahun.",
      "Ditetapkan sebagai taman nasional pada 2004, kawasan ini melindungi populasi orangutan liar terbesar yang tersisa di dunia dan menjadi pusat rujukan ilmu restorasi gambut global.",
      "Bendungan penahan kanal, tim pemadam kebakaran masyarakat, dan program penanaman kembali menjadikan Sebangau rujukan dunia untuk restorasi gambut tropis.",
    ],
    ecosystems: ["Hutan Rawa Gambut Tropis", "Hutan Hujan Dataran Rendah"],
    flora: [
      {
        name: "Ramin",
        habitat: "Hutan Rawa Gambut",
        description:
          "Kayu keras rawa gambut yang tumbuh lambat dan menjadi inti program penanaman kembali.",
      },
      {
        name: "Jelutung",
        habitat: "Hutan Rawa Gambut",
        description:
          "Pohon penghasil getah rawa yang menopang struktur hutan sekaligus penghidupan masyarakat.",
      },
      {
        name: "Belangeran",
        habitat: "Hutan Rawa Gambut",
        description:
          "Meranti toleran genangan yang menopang kanopi hidup kubah gambut.",
      },
    ],
    importanceSubtitle:
      "Sebangau bukan hutan belantara yang terpisah — ia adalah organ planet yang sangat penting.",
    importance: [
      {
        title: "Benteng Keanekaragaman Hayati",
        description:
          "Menampung lebih dari 6.000 orangutan Kalimantan liar — lebih dari sepuluh persen populasi global spesies ini — bersama beruang madu, owa, dan anggrek rawa gambut endemik yang tidak ditemukan di tempat lain.",
      },
      {
        title: "Penyerap Karbon Kontinental",
        description:
          "Gambut yang tetap tergenang berfungsi sebagai gudang karbon darat raksasa, mengunci sekitar 1,8 gigaton karbon yang terakumulasi selama ribuan tahun. Menjaga Sebangau berarti menjaga gudang itu tetap tertutup dari api dan oksidasi — setara dengan menghentikan jutaan pembangkit listrik berbahan bakar fosil.",
      },
      {
        title: "Penghidupan Adat",
        description:
          "Menjadi daerah tangkapan air dan penyaring air tawar utama bagi masyarakat Dayak Ngaju di hilir, sekaligus menopang panen rotan, budidaya lebah yang tidak merusak hutan, dan perikanan sungai tradisional berbasis air gambut.",
      },
    ],
    extraStats: [{ label: "Kedalaman Gambut", value: "Hingga 10–13 m" }],
    timeline: [
      {
        period: "1990 – 2003",
        title: "Kanal Komersial & Pengeringan Sistematis",
        description:
          "Konsesi penebangan yang tidak terkendali membuka lebih dari 4.000 kilometer kanal drainase di atas kubah gambut, menyedot air tanah dan membuat gambut purba kering serta mudah terbakar.",
      },
      {
        period: "2015",
        title: "Kebakaran Besar El Niño",
        description:
          "Musim kering yang belum pernah terjadi sebelumnya, ditambah permukaan air yang turun, memicu kebakaran gambut bawah tanah, menghasilkan kabut asap lintas negara dan lonjakan emisi gas rumah kaca.",
      },
      {
        period: "2018 – Sekarang",
        title: "Pembasahan Hidrologis & Bendungan Masyarakat",
        description:
          "Masyarakat Dayak setempat, pengelola taman nasional, dan kelompok konservasi membangun lebih dari 1.200 bendungan gambut kayu untuk memperlambat aliran, menaikkan muka air, dan memicu pertumbuhan kembali hutan.",
      },
    ],
    threatSpotlight: {
      label: "Catatan Telemetri Arsip",
      title: "Dinamika Kebakaran Gambut Bawah Tanah",
      note: "Gambut yang telah dikeringkan menjadi bahan bakar yang terbakar beberapa meter di bawah permukaan, sehingga pemadaman memerlukan upaya pembasahan total.",
    },
  },

  lorentz: {
    province: "Papua",
    designation: "Taman Nasional",
    elevation: "Hingga 4.884 m dpl",
    profileHeading: "Dari Gletser hingga Mangrove",
    profile: [
      "Lorentz adalah Situs Warisan Dunia UNESCO dan kawasan lindung terbesar di Asia Tenggara, membentang dari pantai berombak hingga gletser khatulistiwa di Puncak Jaya.",
      "Tidak ada taman nasional lain di bumi yang memadukan begitu banyak dunia — mangrove, hutan dataran rendah, dataran tinggi berlumut, dan padang alpin — dalam satu batas kawasan.",
      "Patroli bersama masyarakat adat menjaga hutan belantara yang begitu luas sehingga spesies baru masih ditemukan hampir di setiap ekspedisi.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Pegunungan", "Padang Rumput Alpin"],
    flora: [
      {
        name: "Beech Selatan",
        habitat: "Hutan Pegunungan",
        description:
          "Pohon kuno dari Gondwana yang mendominasi hutan awan dataran tinggi yang diselimuti lumut.",
      },
      {
        name: "Pakis Pohon",
        habitat: "Hutan Pegunungan",
        description:
          "Pakis menjulang yang membentuk lapisan bawah hijau di dataran tinggi yang basah.",
      },
    ],
    importanceSubtitle:
      "Dari gletser khatulistiwa hingga laut tropis, sebuah benua kehidupan dalam satu taman nasional.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Burung cenderawasih menampilkan tariannya di hutan dataran rendah, sementara kanguru pohon merumput di dataran tinggi berlumut dan padang alpin berbunga di dekat es. Para ilmuwan masih mendeskripsikan spesies baru dari Lorentz hampir di setiap ekspedisi. Kawasan ini adalah taman nasional besar di Asia-Pasifik yang paling sedikit dijelajahi secara biologis.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Bentangan utuh dari mangrove hingga gletser menyimpan karbon di setiap ketinggian dan merekam sejarah iklim dalam es serta gambut. Melindungi seluruh gradien memungkinkan spesies bermigrasi saat iklim berubah. Lorentz adalah tempat perlindungan iklim berskala benua.",
      },
      {
        title: "Sistem Air",
        description:
          "Danau glasial dan rawa dataran tinggi mengalirkan sungai-sungai besar ke utara menuju Pasifik dan ke selatan menuju Laut Arafura. Air ini menopang hutan dataran rendah, perikanan, dan masyarakat pesisir di kedua sisi Pulau Papua. Pegunungan adalah ibu dari sungai-sungai.",
      },
    ],
    extraStats: [{ label: "Ketinggian", value: "Hingga 4.884 m" }],
    timeline: [
      {
        period: "1999",
        title: "Penetapan Warisan Dunia UNESCO",
        description:
          "Lorentz ditetapkan sebagai kawasan lindung terbesar di Asia Tenggara, membentang dari gletser hingga laut tropis.",
      },
    ],
  },

  "way-kambas": {
    province: "Lampung, Sumatera",
    designation: "Taman Nasional",
    profileHeading: "Suaka Gajah Sumatera",
    profile: [
      "Way Kambas melindungi hutan hujan dataran rendah dan rawa air tawar di Sumatera bagian selatan, lanskap gajah terpenting di pulau ini.",
      "Pusat konservasi gajahnya merintis upaya mitigasi konflik manusia-gajah, dengan melatih gajah patroli yang menjaga sawah sekaligus hutan.",
      "Suaka badak dan patroli gajahnya memimpin perjuangan Sumatera melawan perburuan liar, mengubah kawasan yang dulu rawan konflik menjadi model konservasi.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Rawa Air Tawar"],
    flora: [
      {
        name: "Gelam",
        habitat: "Rawa Air Tawar",
        description:
          "Pohon rawa berkulit kertas yang tumbuh di tepi lahan basah dan kolam musiman taman nasional.",
      },
      {
        name: "Meranti",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon kanopi raksasa dari sisa hutan dataran rendah Sumatera.",
      },
    ],
    importanceSubtitle:
      "Hutan dataran rendah terbesar terakhir di Lampung, tempat gajah masih berkeliaran bebas.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Way Kambas menampung kawanan gajah terpenting di Sumatera bersama badak, harimau, dan tapir dalam satu lanskap dataran rendah. Rawanya menjadi rumah bagi berang-berang, bangau, dan senyulong. Bagi mamalia besar, kawasan ini adalah benteng terakhir Sumatera bagian selatan.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan dataran rendah dan rawa air tawar menyimpan karbon pada kayu maupun tanah yang tergenang. Sabuk hutan ini meredam panas Lampung dan melindungi pesisir dari badai. Setiap hektare yang dibuka akan terasa dampaknya pada iklim provinsi.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Gajah patroli terlatih menghalau kawanan liar dari sawah, mengubah konflik menjadi hidup berdampingan sekaligus menciptakan lapangan kerja. Kegiatan suaka badak dan wisata gajah memberi penghidupan bagi desa-desa sekitar. Way Kambas membuktikan bahwa perlindungan dapat memberi manfaat bagi tetangganya.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "gunung-leuser": {
    province: "Aceh & Sumatera Utara",
    designation: "Taman Nasional",
    profileHeading: "Jantung Ekosistem Leuser",
    profile: [
      "Taman Nasional Gunung Leuser menjadi inti pegunungan dari Ekosistem Leuser yang lebih luas, sebuah Situs Warisan Dunia UNESCO.",
      "Hutannya yang utuh melindungi populasi orangutan terpadat di bumi, bersama harimau yang masih menjelajah Lembah Alas.",
      "Sebagai bagian dari Warisan Hutan Hujan Tropis Sumatera, hutan di kawasan ini dipatroli setiap hari terhadap perambahan dan perburuan.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Hujan Pegunungan"],
    flora: [
      {
        name: "Meranti",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon dipterokarpa raksasa yang membentuk kanopi berlapis di hutan Lembah Alas.",
      },
    ],
    importanceSubtitle:
      "Jantung yang berdenyut dari Ekosistem Leuser dan hutan orangutan terpadatnya.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Hutan Lembah Alas menyimpan populasi orangutan terpadat yang pernah tercatat, bersama harimau, siamang, dan rangkong. Kawasan ini adalah jantung kehidupan liar Ekosistem Leuser. Tidak ada tempat lain yang memusatkan begitu banyak kehidupan Sumatera secara begitu nyata.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan primer yang utuh menanjak dari dataran rendah hingga puncak tinggi, menyimpan karbon di setiap ketinggian. Kanopi yang masih utuh mendaur ulang curah hujan hingga ke musim kering. Inilah tangga karbon hutan paling lengkap di Sumatera.",
      },
      {
        title: "Sistem Air",
        description:
          "Sungai Alas dan anak-anak sungainya mengairi sawah dan hutan Aceh Tenggara dari lereng-lereng ini. Aliran yang bersih dan stabil sepenuhnya bergantung pada hulu hutan di taman nasional. Di hilir, seluruh kabupaten bergantung pada air yang jatuh di sini.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "2004",
        title: "Penetapan Warisan Dunia",
        description:
          "Taman Nasional Gunung Leuser ditetapkan sebagai bagian dari Warisan Hutan Hujan Tropis Sumatera.",
      },
    ],
  },

  "ujung-kulon": {
    province: "Banten, Jawa",
    designation: "Taman Nasional",
    profileHeading: "Perlindungan Terakhir Badak Jawa",
    profile: [
      "Ujung Kulon menjaga hutan hujan dataran rendah di ujung barat Jawa — satu-satunya rumah badak Jawa.",
      "Lahir dari abu letusan Krakatau pada 1883, hutan yang pulih di sini menjadi pelajaran hidup tentang ketangguhan alam.",
      "Sebagai Situs Warisan Dunia UNESCO, semenanjung ini dipantau sepanjang waktu — setiap badak berarti ketika sebuah spesies hanya tersisa beberapa puluh ekor.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Padang Rumput"],
    flora: [
      {
        name: "Aren",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Tumbuhan pakan favorit badak yang menutupi lantai hutan yang rindang.",
      },
      {
        name: "Meranti",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Kayu keras kanopi dari hutan hujan dataran rendah terbaik yang tersisa di Jawa.",
      },
    ],
    importanceSubtitle:
      "Semenanjung kesempatan kedua — bagi hutan yang lahir kembali dan badak yang berada di ambang kepunahan.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Ujung Kulon adalah satu-satunya tempat badak Jawa masih hidup — beberapa puluh ekor yang memikul seluruh masa depan spesiesnya. Banteng, macan tutul, owa, dan merak hijau berbagi semenanjung ini. Kehilangan hutan ini berarti kehilangan badak Jawa, tanpa syarat.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan hujan dataran rendah terbesar yang tersisa di Jawa menyimpan karbon dataran rendah yang hampir tidak ditemukan lagi di pulau yang padat ini. Kanopinya menyejukkan ujung barat dan menstabilkan cuaca pesisir. Taman yang kecil dengan jejak iklim yang besar.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Desa-desa penyangga menangkap ikan di laut sekitar dan memandu wisata pelacakan badak yang tidak mengganggu satwanya. Terumbu karang dan pantai di lepas pantai memperluas perlindungan melampaui pepohonan. Ketenaran semenanjung ini membiayai penjaganya sendiri.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "1883",
        title: "Letusan Krakatau & Kelahiran Kembali Hutan",
        description:
          "Letusan membuat semenanjung ini steril; hutan yang kembali tumbuh kemudian menjadi perlindungan terakhir badak Jawa.",
      },
      {
        period: "1991",
        title: "Penetapan Warisan Dunia UNESCO",
        description:
          "Ujung Kulon ditetapkan karena melindungi habitat terakhir badak Jawa yang masih layak.",
      },
    ],
  },

  "bromo-tengger-semeru": {
    province: "Jawa Timur",
    designation: "Taman Nasional",
    elevation: "Hingga 3.676 m dpl",
    profileHeading: "Tanah Api dan Kabut",
    profile: [
      "Lautan pasir vulkanik yang dikelilingi kerucut berasap Bromo dan puncak menjulang Semeru, gunung tertinggi di Jawa.",
      "Hutan pegunungan menyelimuti bibir kaldera, menjadi rumah bagi macan tutul dan elang di atas dataran tinggi Tengger yang sakral.",
      "Masyarakat Tengger menggelar upacara tahunan di lereng-lereng ini, dan program kunjungan wisata membiayai para penjaga yang melindungi dataran tinggi kaldera yang rapuh.",
    ],
    ecosystems: ["Hutan Pegunungan", "Dataran Tinggi Vulkanik"],
    flora: [
      {
        name: "Edelweiss Jawa",
        habitat: "Dataran Tinggi Vulkanik",
        description:
          "Bunga abadi gunung-gunung tinggi Jawa, mekar di atas awan.",
      },
      {
        name: "Cemara Gunung",
        habitat: "Hutan Pegunungan",
        description:
          "Pohon berdaun seperti jarum yang menumbuhkan lereng abu vulkanik.",
      },
    ],
    importanceSubtitle:
      "Api, abu, dan keyakinan — lanskap vulkanik paling sakral di Jawa.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Macan tutul menyusuri tepi hutan pegunungan sementara elang jawa menunggangi arus udara di atas kaldera. Padang edelweiss menjadi rumah burung dataran tinggi yang hanya ditemukan di gunung-gunung Jawa. Kehidupan di sini beradaptasi pada abu, kabut, dan udara tipis.",
      },
      {
        title: "Sistem Air",
        description:
          "Mata air di lereng-lereng ini mengaliri Sungai Brantas, sungai utama Jawa Timur bagi pertanian, kota, dan industri. Tutupan hutan mengatur aliran itu di antara banjir dan kekeringan. Jutaan orang di hilir minum dari gunung ini.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Upacara tahunan masyarakat Tengger menarik peziarah ke kawah Bromo dalam tradisi Hindu yang masih hidup. Ekonomi kendaraan wisata, kuda, dan penginapan menghidupi desa-desa dataran tinggi. Geografi sakral dan penghidupan menyatu dalam satu lanskap.",
      },
    ],
    extraStats: [{ label: "Ketinggian", value: "Hingga 3.676 m" }],
    timeline: [
      {
        period: "2010",
        title: "Siklus Letusan & Pemulihan Abu",
        description:
          "Kolom abu selama berbulan-bulan menutup kaldera saat Bromo memasuki salah satu fase letusan periodiknya.",
      },
    ],
  },

  baluran: {
    province: "Jawa Timur",
    designation: "Taman Nasional",
    profileHeading: "Afrika van Java",
    profile: [
      "Sabana keemasan Baluran, dijaga Gunung Baluran, terasa lebih mirip Afrika daripada Asia — kawanan banteng merumput di bawah pohon akasia.",
      "Di balik sabana terbentang hutan musim, mangrove, dan pantai tempat penyu bertelur dan merak menari.",
      "Para penjaga berjuang melawan akasia invasif agar sabana tetap terbuka, sementara pantai peneluran penyu dan mangrove pesisir menjadi landasan perlindungan laut.",
    ],
    ecosystems: ["Sabana", "Hutan Musim", "Hutan Mangrove"],
    flora: [
      {
        name: "Gebang",
        habitat: "Sabana",
        description:
          "Palem kipas yang tersebar di sabana, berbunga sekali dalam akhir hidup yang spektakuler setelah puluhan tahun.",
      },
      {
        name: "Akasia",
        habitat: "Sabana",
        description:
          "Pohon berduri pendatang yang kini dikendalikan penjaga agar sabana tetap terbuka bagi banteng.",
      },
    ],
    importanceSubtitle:
      "Lautan sabana dan hutan musim di ujung timur Jawa yang liar.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Kawanan banteng terbesar di Jawa merumput di sabana Baluran bersama macan tutul dan ajak yang muncul saat senja. Merak hijau menari di tepi hutan sementara penyu bertelur di pantai Bama. Inilah panggung satwa liar di Jawa yang paling terasa Afrika.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Rumput sabana, hutan musim, dan mangrove masing-masing menyimpan karbon di tanah dan ritme yang berbeda. Mozaik ini melindungi sudut terkering Jawa Timur dari penggurunan. Keanekaragaman habitat adalah keanekaragaman asuransi iklim.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Wisata safari sabana, titik pandang Bekol, dan terumbu Bama memberi penghidupan bagi desa-desa sekitar taman nasional. Kesepakatan penggembalaan musiman menjaga tradisi di batas kawasan. Kelestarian Baluran adalah identitas wilayah ini.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "gede-pangrango": {
    province: "Jawa Barat",
    designation: "Taman Nasional",
    elevation: "Hingga 3.019 m dpl",
    profileHeading: "Mahkota Berlumut Pulau Jawa",
    profile: [
      "Dua gunung kembar yang diselimuti hutan hujan pegunungan berlumut, sebuah Cagar Biosfer UNESCO hanya dua jam dari Jakarta.",
      "Hutan awannya yang kaya anggrek menjadi rumah bagi owa yang nyanyian paginya bergema di lembah Cibodas.",
      "Sebagai gerbang taman nasional tertua di Indonesia, Cibodas menjadi tempat penelitian botani lintas generasi di kebun yang berbatasan langsung dengan hutan liar.",
    ],
    ecosystems: ["Hutan Hujan Pegunungan", "Padang Rumput Subalpin"],
    flora: [
      {
        name: "Rasamala",
        habitat: "Hutan Hujan Pegunungan",
        description:
          "Kayu keras menjulang di hutan pegunungan bawah, dipenuhi lumut dan anggrek.",
      },
      {
        name: "Puspa",
        habitat: "Hutan Hujan Pegunungan",
        description:
          "Pohon kanopi berbunga putih yang menghiasi lereng Cibodas yang berkabut.",
      },
      {
        name: "Edelweiss Jawa",
        habitat: "Padang Rumput Subalpin",
        description:
          "Menutupi padang Surya Kencana dengan bunga putih keperakan.",
      },
    ],
    importanceSubtitle:
      "Menara air Jakarta dan suaka pegunungan paling berlumut di Jawa.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Nyanyian owa bergema di hutan awan penuh anggrek yang menyimpan ratusan spesies tumbuhan di setiap lereng. Elang jawa, surili, dan amfibi endemik memadati hotspot mungil ini. Tidak ada tempat di Jawa yang mengemas begitu banyak kehidupan pegunungan per hektare.",
      },
      {
        title: "Sistem Air",
        description:
          "Dua gunung kembar ini adalah menara air bagi daerah aliran sungai selatan yang memasok wilayah urban Jakarta. Hutan melepaskan air itu perlahan sepanjang bulan kering. Wilayah ibu kota minum dari lereng-lereng berlumut ini.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Cibodas menarik rombongan sekolah, peneliti, dan pendaki ke gerbang wisata gunung tertua di Indonesia. Pekerjaan pemandu, porter, dan penginapan menghidupi desa-desa dataran tinggi. Pendidikan dan rekreasi membiayai masa depan hutan.",
      },
    ],
    extraStats: [{ label: "Ketinggian", value: "Hingga 3.019 m" }],
    timeline: [],
  },

  "betung-kerihun": {
    province: "Kalimantan Barat",
    designation: "Taman Nasional",
    profileHeading: "Jantung Kalimantan",
    profile: [
      "Betung Kerihun menjadi penopang Heart of Borneo, hamparan hutan dipterokarpa tanpa jalan di sepanjang perbatasan Malaysia.",
      "Orangutan, macan dahan, dan rangkong menjelajah hutan yang telah dijaga masyarakat Dayak selama beberapa generasi.",
      "Patroli lintas batas bersama Sarawak dan kepemimpinan adat Dayak menjaga hutan Heart of Borneo ini tetap berdiri.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Hujan Pegunungan"],
    flora: [
      {
        name: "Ulin",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon kayu besi legendaris Kalimantan yang dapat hidup berabad-abad.",
      },
      {
        name: "Meranti",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Dipterokarpa raksasa yang berbuah masif secara serempak di perbukitan pedalaman.",
      },
    ],
    importanceSubtitle:
      "Inti hijau yang utuh dari Heart of Borneo.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Orangutan, macan dahan, dan rangkong menjelajah hutan yang termasuk paling kaya di pulau ini. Spesies katak, jahe, dan anggrek baru terus muncul dari survei setiap tahun. Jantung Kalimantan berdenyut paling kuat di sini.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan dipterokarpa utuh yang luas menjadi salah satu gudang karbon terbesar di Kalimantan. Kanopi yang tidak terputus membuat curah hujan terus didaur ulang jauh ke pedalaman. Skalanya adalah kekuatannya — luas itu sendiri adalah strategi konservasi.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Desa-desa Dayak memiliki hutan adat di sekitar taman nasional, memanen rotan, madu, dan ikan di bawah kanopi hutan tua. Pemetaan partisipatif dan patroli taman nasional bersama-sama menjaga perbatasan. Tradisi adalah garis perlindungan pertama.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "kayan-mentarang": {
    province: "Kalimantan Utara",
    designation: "Taman Nasional",
    profileHeading: "Hutan Belantara Terbesar Kalimantan",
    profile: [
      "Kayan Mentarang adalah kawasan lindung terbesar di Kalimantan — lebih dari satu juta hektare hutan hujan utuh yang hampir tanpa jalan.",
      "Sungai, mata air asin, dan tanah adat Dayak membentuk salah satu hutan belantara sejati terakhir di Asia.",
      "Dikelola bersama tanah adat Dayak di sekitarnya, taman nasional ini memadukan pengelolaan tradisional dengan pemantauan hutan modern.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Hujan Pegunungan"],
    flora: [
      {
        name: "Ulin",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Kayu besi berusia berabad-abad yang muncul dari hutan pedalaman yang dalam.",
      },
      {
        name: "Meranti",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Dipterokarpa kanopi yang berbuah melimpah secara serempak dan spektakuler.",
      },
    ],
    importanceSubtitle:
      "Lebih dari satu juta hektare hutan belantara tanpa jalan di ujung utara Kalimantan.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Orangutan dan enggang gading bertahan di hutan yang begitu terpencil sehingga peta ditandai mata air asin, bukan jalan. Macan dahan, beruang madu, dan burung pegar endemik melengkapi penghuni pedalaman. Inilah Kalimantan seperti berabad-abad lalu.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Lebih dari satu juta hektare hutan hujan tanpa jalan — simpanan karbon terlindungi terbesar di Kalimantan. Keutuhannya yang menyeluruh menstabilkan cuaca jauh melampaui batas kawasan. Hutan belantara sebesar ini kini lebih langka daripada spesies apa pun di dalamnya.",
      },
      {
        title: "Sistem Air",
        description:
          "Sungai Kayan dan Mentarang berawal di sini, mengalir jernih dan dingin menuju dataran rendah Kalimantan Utara. Jeram, air terjun, dan anak sungai yang masih murni menopang perikanan di hilir. Semua mengalir dari atap hijau ini.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "lore-lindu": {
    province: "Sulawesi Tengah",
    designation: "Taman Nasional",
    profileHeading: "Megalit di Tengah Kabut",
    profile: [
      "Dataran tinggi berlumut Lore Lindu menyimpan megalit batu kuno di antara hutan yang tidak ditemukan di tempat lain — dunia Wallacea dengan kehidupan endemik.",
      "Anoa, babirusa, dan kawanan burung maleo bergerak melalui lembah tempat hutan awan bertemu tradisi yang masih hidup.",
      "Kesepakatan masyarakat di sekitar taman nasional memadukan kopi dataran tinggi yang ditanam di bawah naungan dengan perlindungan hutan, sehingga mengurangi tekanan pada kawasan inti.",
    ],
    ecosystems: ["Hutan Hujan Pegunungan", "Hutan Hujan Dataran Rendah"],
    flora: [
      {
        name: "Eboni Sulawesi",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Kayu keras bergaris hitam-emas yang dihargai selama berabad-abad dan kini dilindungi secara ketat.",
      },
      {
        name: "Pohon Beringin",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon buah kunci yang memberi makan rangkong, monyet, dan anak maleo.",
      },
    ],
    importanceSubtitle:
      "Megalit, kabut, dan keajaiban Wallacea di dataran tinggi Sulawesi.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Anoa, babirusa, dan maleo berbagi lembah berkabut dengan tarsius dan raja udang endemik. Isolasi Wallacea memenuhi taman ini dengan spesies yang tidak ada di pulau lain. Setiap jalur adalah pelajaran evolusi.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan dataran tinggi menyejukkan sawah dan kota di Sulawesi Tengah sekaligus menyimpan karbon pegunungan. Kabut yang tersaring membasahi lereng yang tidak tercatat oleh alat pengukur hujan. Pegunungan membuat cuacanya sendiri — dan membaginya dengan dataran rendah.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Lembah yang bertabur megalit menarik wisata budaya, sementara kopi arabika yang ditanam di bawah naungan menghubungkan pendapatan petani dengan hutan yang tetap berdiri. Kesepakatan desa menjaga tepi taman nasional. Warisan dan panen saling menguatkan di sini.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "bogani-nani-wartabone": {
    province: "Sulawesi Utara & Gorontalo",
    designation: "Taman Nasional",
    profileHeading: "Benteng Hijau Sulawesi",
    profile: [
      "Bogani Nani Wartabone adalah blok hutan hujan terbesar di Sulawesi, melindungi satwa endemik pulau yang unik dan menakjubkan.",
      "Monyet hitam Sulawesi bergerak dalam kawanan melalui kanopi, sementara burung maleo mengerami telur raksasanya di pasir yang dihangatkan matahari.",
      "Penjaga lokasi peneluran maleo dari desa-desa sekitar telah menjadi model konservasi masyarakat yang diakui.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Hujan Pegunungan"],
    flora: [
      {
        name: "Eboni Sulawesi",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Kayu keras bergaris kebanggaan pulau ini, dijaga di zona inti taman nasional.",
      },
      {
        name: "Pohon Beringin",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon raksasa berbuah yang menopang monyet, rangkong, dan kuskus.",
      },
    ],
    importanceSubtitle:
      "Benteng hutan terbesar Sulawesi bagi monyet, maleo, dan tarsius.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Monyet hitam Sulawesi — salah satu primata paling terancam di dunia — bergerak dalam kawanan berisi ratusan ekor di kanopi ini. Maleo, tarsius, dan kuskus melengkapi deretan satwa teraneh Sulawesi. Tidak ada hutan lain yang menyimpan kumpulan persis seperti ini.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Paru-paru hijau Semenanjung Minahasa menyimpan karbon dataran rendah dan pegunungan di sepanjang punggung vulkanik. Hutan meredam badai yang datang dari dua laut. Taman nasional ini adalah perisai iklim semenanjung.",
      },
      {
        title: "Sistem Air",
        description:
          "Daerah aliran sungai berhutan mengairi sawah Gorontalo dan kota Kotamobagu. Mata air mengalir jernih di tempat kanopi berdiri dan keruh di tempat kanopi hilang. Kualitas air memetakan batas hutan dengan tepat.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  bantimurung: {
    province: "Sulawesi Selatan",
    designation: "Taman Nasional",
    profileHeading: "Kerajaan Kupu-Kupu",
    profile: [
      "Menara karst Bantimurung menjulang di atas air terjun dan hutan karst yang dipenuhi ratusan spesies kupu-kupu.",
      "Kawasan ini menjadi tujuan akhir pekan favorit, tempat Sulawesi Selatan berjumpa dengan salah satu pertunjukan serangga terbesar di bumi.",
      "Kerumunan akhir pekan memadati air terjunnya, dan rumah penangkaran kupu-kupu menyalurkan kecintaan itu menjadi pendapatan konservasi.",
    ],
    ecosystems: ["Hutan Karst", "Hutan Hujan Dataran Rendah"],
    flora: [
      {
        name: "Bitti",
        habitat: "Hutan Karst",
        description:
          "Pohon kayu keras berharga dari hutan karst Sulawesi, berdiri tegak di antara menara batu kapur.",
      },
      {
        name: "Pohon Beringin",
        habitat: "Hutan Tropis",
        description:
          "Pohon buah kunci yang memberi makan rangkong, monyet, dan kupu-kupu sepanjang tahun.",
      },
    ],
    importanceSubtitle:
      "Air terjun, menara karst, dan badai kupu-kupu.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Ratusan spesies kupu-kupu — termasuk kupu-kupu sayap burung dan spesies endemik — beterbangan di atas sungai karst dalam kepadatan yang terkenal di dunia. Tarsius dan kuskus muncul setelah gelap di karst menara. Inilah teater serangga terbesar di Indonesia.",
      },
      {
        title: "Sistem Air",
        description:
          "Mata air karst memancar dari mulut gua menjadi air terjun yang mengairi sawah Maros di bawahnya. Sungai bawah tanah menyimpan air musim kering di akuifer batu kapur. Menara-menara itu adalah tangki air yang berwajah hutan.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Kerumunan wisata air terjun, rumah kupu-kupu, dan warung di tepi sungai memberi penghidupan bagi ribuan orang di sekitar gerbang taman. Kecintaan akhir pekan pada Bantimurung langsung berubah menjadi anggaran perlindungan. Kasih sayang adalah strategi konservasi.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "rawa-aopa": {
    province: "Sulawesi Tenggara",
    designation: "Taman Nasional",
    profileHeading: "Sabana, Rawa, dan Laut",
    profile: [
      "Rawa Aopa Watumohai menyatukan sabana, rawa gambut, dan mangrove menjadi satu dataran pesisir di Sulawesi Tenggara.",
      "Anoa merumput di padang terbuka sementara maleo bersarang di tepi hutan — mozaik Wallacea dalam skala kecil.",
      "Restorasi lahan basah dan perlindungan sarang maleo mempertemukan penjaga taman dengan desa pesisir di sekitar dataran.",
    ],
    ecosystems: ["Sabana", "Rawa Gambut", "Hutan Mangrove"],
    flora: [
      {
        name: "Bakau",
        habitat: "Hutan Mangrove",
        description:
          "Mangrove berakar tunjang yang menjadi tempat pembesaran ikan dan kepiting di pesisir yang terlindung.",
      },
      {
        name: "Gelam",
        habitat: "Rawa Gambut",
        description:
          "Pohon rawa berkulit kertas di tepi kolam gambut dan sabana basah.",
      },
    ],
    importanceSubtitle:
      "Sabana, rawa, dan mangrove yang terjalin dalam satu dataran pesisir.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Kawanan anoa menyusuri sabana, maleo bersuara di tepi hutan, dan buaya berpatroli di mangrove. Tiga ekosistem melipatgandakan ragam satwa dalam satu dataran. Tidak ada tempat lain di Sulawesi yang memadatkan begitu banyak kehidupan di ruang sekecil ini.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Tanah gambut, lumpur mangrove, dan akar sabana menyimpan karbon biru dan hijau secara berdampingan. Mozaik ini menyimpan lebih banyak karbon per hektare daripada habitat tunggal mana pun. Taman kecil, gudang karbon yang padat.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Nelayan pesisir memanfaatkan kawasan asuhan mangrove yang dipasok sungai taman nasional. Tepi sabana menjadi tempat penggembalaan tradisional berdasarkan kesepakatan dengan penjaga. Perlindungan dan produksi berbagi ruang di dataran ini.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  komodo: {
    province: "Nusa Tenggara Timur",
    designation: "Taman Nasional",
    profileHeading: "Alam Sang Naga",
    profile: [
      "Komodo adalah satu-satunya tempat di bumi tempat biawak raksasa masih berkuasa — komodo yang legendaris.",
      "Perbukitan sabana, hutan musim kering, dan laut karang menjadikan situs UNESCO ini salah satu lanskap paling terkenal di planet ini.",
      "Pos-pos penjaga di seluruh pulau memantau komodo dan lokasi penyelaman, menyeimbangkan ketenaran dunia dengan ekosistem kering yang rapuh.",
    ],
    ecosystems: ["Sabana", "Hutan Musim Kering"],
    flora: [
      {
        name: "Lontar",
        habitat: "Sabana",
        description:
          "Palem kipas yang membentuk siluet di kawasan perburuan komodo di sabana.",
      },
      {
        name: "Sepang",
        habitat: "Hutan Musim Kering",
        description:
          "Pohon kayu merah dari hutan kering, lama dihargai sebagai pewarna dan obat.",
      },
    ],
    importanceSubtitle:
      "Komodo, sabana, dan laut karang — pulau-pulau paling legendaris di alam.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Komodo — biawak raksasa yang tidak ditemukan di tempat lain — menguasai rusa, babi hutan, dan satwa mangsa di pulau-pulau ini. Terumbu di bawahnya menyimpan pari manta, penyu, dan taman karang kelas dunia. Darat dan laut saling bersaing dalam keistimewaan di sini.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan musim kering dan sabana menyimpan karbon di salah satu iklim paling keras di Indonesia, sementara padang lamun menyimpan karbon biru di lepas pantai. Taman ini membuktikan bahwa lanskap kering pun dapat memberi manfaat besar. Kekeringan bukan alasan untuk kosong.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Wisata menjelajah habitat komodo memberi pekerjaan bagi penjaga, pemandu, dan awak perahu di desa-desa Komodo, sekaligus membiayai perlindungan dari ketenaran itu sendiri. Ekonomi kerajinan dan penginapan menyebarkan manfaatnya. Komodo membiayai penjaganya sendiri.",
      },
    ],
    extraStats: [],
    timeline: [
      {
        period: "1991",
        title: "Penetapan Warisan Dunia UNESCO",
        description:
          "Komodo ditetapkan karena naga purba serta kehidupan laut dan darat luar biasa di sekitarnya.",
      },
    ],
  },

  kelimutu: {
    province: "Flores, Nusa Tenggara Timur",
    designation: "Taman Nasional",
    profileHeading: "Danau Tiga Warna",
    profile: [
      "Tiga danau kawah Kelimutu berubah warna antara biru kehijauan, hijau, dan hitam — air sakral dalam kosmologi Flores.",
      "Hutan pegunungan mengelilingi kawah, menjadi rumah bagi elang di atas desa-desa yang terjalin dalam kisah gunung ini.",
      "Penjaga danau dari desa-desa sekitar membantu mengawasi kawah, tempat adat dan konservasi berbagi gunung yang sama.",
    ],
    ecosystems: ["Hutan Pegunungan"],
    flora: [
      {
        name: "Cemara Gunung",
        habitat: "Hutan Pegunungan",
        description:
          "Pohon dataran tinggi berdaun seperti bulu yang mengelilingi bibir kawah di atas danau berwarna.",
      },
      {
        name: "Pakis Pohon",
        habitat: "Hutan Pegunungan",
        description:
          "Pakis menjulang yang membentuk lapisan bawah hijau di hutan kawah yang berlumut.",
      },
    ],
    importanceSubtitle:
      "Tiga danau kawah, satu gunung sakral, kabut yang tak berujung.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Elang Flores berputar di bibir kawah sementara tikus, celurut, dan anggrek endemik bersembunyi di lumut pegunungan. Isolasi telah membentuk komunitas dataran tinggi yang khas dan tidak ditemukan di pulau tetangga. Taman kecil dengan endemisme yang tajam.",
      },
      {
        title: "Sistem Air",
        description:
          "Lereng vulkanik menangkap awan yang mengairi sawah dan kota Ende di bawahnya. Daerah tangkapan berhutan menjaga air tetap bersih dan stabil sepanjang musim kering. Gunung ini adalah waduk kabupaten.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Peziarah danau kawah dan pendaki matahari terbit menghidupi penginapan serta pemandu di Moni. Kebun kopi di zona penyangga menghubungkan cita rasa dengan tutupan hutan. Air sakral membiayai perlindungannya sendiri.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  rinjani: {
    province: "Lombok, Nusa Tenggara Barat",
    designation: "Taman Nasional",
    elevation: "Hingga 3.726 m dpl",
    profileHeading: "Singgasana Angin",
    profile: [
      "Rinjani menjulang 3.726 meter di atas Lombok, dimahkotai danau kawah Segara Anak yang berwarna biru kehijauan.",
      "Lerengnya menanjak dari hutan dataran rendah melewati padang edelweiss hingga puncak yang dihormati dalam kehidupan spiritual Sasak dan Bali.",
      "Koperasi porter masyarakat dan program pembersihan gunung menopang ketenaran pendakian Rinjani sambil menanam kembali lerengnya.",
    ],
    ecosystems: ["Hutan Pegunungan", "Dataran Tinggi Vulkanik"],
    flora: [
      {
        name: "Edelweiss",
        habitat: "Dataran Tinggi Vulkanik",
        description:
          "Bunga abadi keperakan yang menutupi padang vulkanik tinggi.",
      },
      {
        name: "Cemara Gunung",
        habitat: "Hutan Pegunungan",
        description:
          "Pohon berdaun jarum yang menstabilkan lereng abu gunung berapi.",
      },
    ],
    importanceSubtitle:
      "Gunung menjulang Lombok dan danau yang memahkotainya.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Celepuk Rinjani endemik bersuara dari hutan awan tempat lutung budeng melompat dan anggrek memenuhi dahan. Zona ketinggian menyusun komunitas yang berbeda dari dataran rendah hingga puncak. Gunung yang menumpuk banyak dunia.",
      },
      {
        title: "Sistem Air",
        description:
          "Danau kawah Segara Anak dan lereng berhutan mengairi seluruh Lombok — sawah, kota, dan keran air. Gunung ini adalah satu-satunya waduk besar pulau. Setiap panen di Lombok berawal dari Rinjani.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Koperasi porter, penyelenggara pendakian, dan penginapan Sembalun membangun ekonomi wisata gunung yang menjadi model di Indonesia. Program pembersihan dan penanaman kembali menjaga puncak tetap layak didaki. Gunung ini memberi pekerjaan bagi penjaganya.",
      },
    ],
    extraStats: [{ label: "Ketinggian", value: "Hingga 3.726 m" }],
    timeline: [
      {
        period: "2018",
        title: "Gempa Lombok & Pemulihan",
        description:
          "Gempa besar memicu longsor di seluruh gunung, menutup jalur pendakian selama masa pemulihan yang panjang.",
      },
    ],
  },

  "laiwangi-wanggameti": {
    province: "Sumba, Nusa Tenggara Timur",
    designation: "Taman Nasional",
    profileHeading: "Suaka Hijau Sumba",
    profile: [
      "Kantong-kantong hutan musim di perbukitan kering Sumba — Laiwangi Wanggameti menjaga hutan besar terakhir di pulau ini.",
      "Rangkong melintasi kanopi sementara bibit cendana mulai berakar di salah satu lanskap hutan terkering di Indonesia.",
      "Pembibitan cendana dan kesepakatan hutan desa perlahan mengembalikan kehijauan ke perbukitan kering Sumba.",
    ],
    ecosystems: ["Hutan Musim Tropis"],
    flora: [
      {
        name: "Cendana",
        habitat: "Hutan Musim",
        description:
          "Pohon harum kebanggaan Sumba, fokus upaya penanaman kembali yang sabar.",
      },
      {
        name: "Lontar",
        habitat: "Sabana",
        description:
          "Palem gula di sabana sekitar, disadap setiap hari oleh petani Sumba.",
      },
    ],
    importanceSubtitle:
      "Suaka lahan kering Sumba bagi rangkong, cendana, dan kakatua.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Julang Sumba mengepakkan sayap di antara blok hutan besar terakhir sementara kakatua kecil jambul-kuning melintas di kanopi hutan musim. Nuri dan merpati endemik hanya bertahan di tempat hutan masih ada. Di Sumba yang kering, hutan ini adalah bahtera.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan musim menyimpan karbon di lanskap yang hanya sedikit pohonnya mampu bertahan melewati musim kering panjang. Hutan yang berdiri menyejukkan lembah dan menahan tanah dari erosi. Pulau-pulau hijau di tengah laut cokelat.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Penanaman kembali cendana menghidupkan warisan harum Sumba, sementara gula lontar menopang petani lahan kering. Kesepakatan hutan desa memperluas etika taman nasional ke luar batas. Budaya dan kanopi pulih bersama.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  manusela: {
    province: "Seram, Maluku",
    designation: "Taman Nasional",
    profileHeading: "Jantung Pegunungan Kepulauan Rempah",
    profile: [
      "Punggung karst dan hutan hujan pegunungan Manusela membentuk jantung liar Pulau Seram di kepulauan Maluku.",
      "Kakatua Maluku melintas di lembah-lembah tempat hutan beraroma cengkih telah mengharumkan sejarah dunia.",
      "Desa-desa pegunungan memadukan panen cengkih dengan pengawasan hutan, menjaga punggung Seram tetap salah satu yang paling liar di Maluku.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah", "Hutan Hujan Pegunungan"],
    flora: [
      {
        name: "Cengkih",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Rempah yang menarik dunia ke Maluku, tumbuh liar di hutan Seram.",
      },
      {
        name: "Kayu Putih",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon kayu putih penghasil minyak obat yang membuat Maluku terkenal.",
      },
    ],
    importanceSubtitle:
      "Jantung pegunungan Seram, beraroma cengkih dan nyanyian kakatua.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Kakatua Maluku, mabaya, dan cikukua Seram tidak ditemukan di pulau lain — evolusi dalam isolasi pegunungan. Kasuari bergema di hutan aluvial dataran rendah. Seram adalah pabrik spesies Maluku.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan pegunungan menstabilkan salah satu iklim pulau terbasah di Indonesia, menyimpan karbon dari pesisir hingga puncak. Hutan awan memeras air dari kabut yang melintas. Gunung ini memproduksi cuaca.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Kebun cengkih dan penyulingan minyak kayu putih membawa keahlian kepulauan rempah berabad-abad ke desa-desa penyangga. Pemandu gunung mengantar pengamat burung dari satu endemik ke endemik berikutnya. Kini perdagangan rempah membiayai hutan.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  "aketajawe-lolobata": {
    province: "Halmahera, Maluku Utara",
    designation: "Taman Nasional",
    profileHeading: "Panggung Weka-Weka",
    profile: [
      "Aketajawe-Lolobata melindungi hutan hujan dataran rendah Halmahera yang luas, tempat weka-weka jantan turun seperti parasut dalam arena pacaran saat fajar.",
      "Inilah Wallacea yang bersuara penuh — nuri, gosong, dan kuskus di hutan yang pernah dijelajahi Alfred Wallace sendiri.",
      "Jalur pengamatan burung untuk weka-weka membawa pendapatan baru bagi desa-desa di tepi hutan Halmahera.",
    ],
    ecosystems: ["Hutan Hujan Dataran Rendah"],
    flora: [
      {
        name: "Pala",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Kerabat liar pala, rempah yang membentuk takdir Maluku.",
      },
      {
        name: "Cengkih",
        habitat: "Hutan Hujan Dataran Rendah",
        description:
          "Pohon cengkih beraroma yang tumbuh di dataran rendah Halmahera.",
      },
    ],
    importanceSubtitle:
      "Panggung dataran rendah Halmahera bagi burung paling teatrikal Wallace.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Weka-weka Wallace turun seperti parasut di arena pacaran fajar sementara nuri, gosong, dan kuskus melengkapi paduan suara dataran rendah. Halmahera memiliki lebih banyak burung endemik daripada pulau mana pun seukurannya. Setiap fajar adalah pertunjukan perdana.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Hutan dataran rendah terluas di Halmahera sekaligus simpanan karbon dataran rendah terbesarnya — berdiri langsung di kawasan pertambangan. Menjaganya utuh adalah keputusan iklim yang diambil setiap hari. Perlindungan adalah kebijakannya; pepohonan adalah gudangnya.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Tanah adat Tobelo dan Togutil berselang-seling dengan taman nasional, memadukan tradisi dengan patroli. Wisata weka-weka membawa pendapatan baru bagi desa di tepi hutan. Burung lebih menguntungkan dalam keadaan hidup daripada hutan yang ditebang.",
      },
    ],
    extraStats: [],
    timeline: [],
  },

  wasur: {
    province: "Papua Selatan",
    designation: "Taman Nasional",
    profileHeading: "Serengeti Papua",
    profile: [
      "Dataran banjir, sabana, dan hutan kayu putih Wasur membuatnya dijuluki Serengeti Papua.",
      "Walabi merumput di samping angsa kura-kura sementara kasuari menyusuri tepi hutan musim dekat Merauke.",
      "Penjaga Marind memadukan kalender berburu adat dengan patroli lahan basah di seluruh dataran banjir.",
    ],
    ecosystems: ["Sabana", "Lahan Basah", "Hutan Musim"],
    flora: [
      {
        name: "Kayu Putih",
        habitat: "Lahan Basah",
        description:
          "Hutan kulit kertas di tepi dataran banjir musiman.",
      },
      {
        name: "Pandan",
        habitat: "Lahan Basah",
        description:
          "Pandan berakar tunjang yang melapisi saluran rawa dan tepi danau.",
      },
    ],
    importanceSubtitle:
      "Dataran banjir besar Papua, tempat walabi merumput di tepi lahan basah.",
    importance: [
      {
        title: "Keanekaragaman Hayati",
        description:
          "Walabi saham, kasuari, dan angsa kura-kura berkumpul di dataran banjir dalam salah satu pertunjukan satwa terbesar di Pulau Papua. Brolga menari di samping pelikan sementara buaya berpatroli di saluran air. Trans-Fly bernyanyi penuh.",
      },
      {
        title: "Karbon & Iklim",
        description:
          "Tanah lahan basah, hutan kayu putih, dan akar sabana menyimpan karbon di seluruh dataran banjir yang berdenyut. Kebakaran dan banjir musiman telah menyetel sistem ini selama ribuan tahun. Ini hutan belantara yang bekerja, bukan yang kosong.",
      },
      {
        title: "Penghidupan Lokal",
        description:
          "Kalender berburu adat Marind dan tradisi sagu mengatur dataran banjir bersama patroli penjaga. Panen ikan dan satwa musiman menopang desa-desa tepi sungai. Hukum adat adalah rencana pengelolaan tertua di sini.",
      },
    ],
    extraStats: [],
    timeline: [],
  },
};

/* ============================================================
   DESKRIPSI SPESIES — kunci memakai nama Inggris asli agar
   pencarian tetap stabil saat nama ditampilkan dalam bahasa
   Indonesia.
   ============================================================ */

export const speciesDescriptionsId: Record<string, string> = {
  "Sumatran Orangutan":
    "Kera besar berambut merah yang berayun di kanopi, hanya ditemukan di Sumatera bagian utara.",
  "Sumatran Tiger":
    "Harimau pulau terakhir di bumi, yang menyusuri hutan Barisan di Sumatera.",
  "Sumatran Elephant":
    "Raksasa pulau yang membentuk hutan dengan menyebarkan benih di sepanjang jalur kuno.",
  "Sumatran Rhinoceros":
    "Badak terkecil dan terberbulu di dunia, bersembunyi di hutan terpadat Sumatera.",
  "Bornean Orangutan":
    "Kera merah Kalimantan yang membangun sarang setiap malam di kanopi rawa gambut.",
  "Javan Rhinoceros":
    "Salah satu mamalia paling langka di bumi, hanya bertahan di Ujung Kulon.",
  "Javan rhinoceros":
    "Salah satu mamalia paling langka di bumi, hanya bertahan di Ujung Kulon.",
  Bekantan:
    "Monyet berhidung panjang dari mangrove, melompat di antara pohon tepi sungai.",
  "Bornean Bear":
    "Beruang terkecil di dunia, memanjat mencari madu di hutan Kalimantan.",
  Cenderawasih:
    "Burung surga yang tarian pacarnya menerangi kanopi Papua.",
  "Doria's tree-kangaroo":
    "Kanguru pohon dataran tinggi yang memakan daun di hutan berlumut Papua.",
  "Javan Gibbon":
    "Kera keperakan yang bersuara merdu, berayun di hutan hujan Jawa yang tersisa.",
  "Javan Leopard":
    "Predator puncak Jawa yang sulit ditemui, menghuni hutan pegunungan berkabut.",
  "Javan Hawk-Eagle":
    "Burung nasional Indonesia, membumbung di atas gunung-gunung Jawa.",
  Banteng:
    "Sapi hutan liar yang merumput di sabana dalam kawanan.",
  "Green Peafowl":
    "Merak hijau zamrud yang menari di sabana terbuka saat fajar.",
  "Sunda Clouded Leopard":
    "Kucing bercorak awan yang menguasai malam hutan hujan Kalimantan.",
  "Helmeted Hornbill":
    "Rangkong “gading terbang”, bersuara nyaring di kanopi Kalimantan.",
  Anoa:
    "Kerbau hutan kerdil Sulawesi, pemakan pucuk yang pemalu.",
  Maleo:
    "Megapode yang mengubur telur raksasanya di pasir hangat agar menetas sendiri.",
  "Celebes Crested Macaque":
    "Monyet berjambul hitam yang bergerak berisik di Sulawesi Utara.",
  "Blume's Peacock Swallowtail":
    "Kupu-kupu sayap merak berkilau yang gemerlap di atas sungai karst.",
  "Sulawesi Bear Cuscus":
    "Kuskus beruang yang bergerak lambat, tertidur di kanopi Sulawesi.",
  "Komodo Dragon":
    "Biawak terbesar di dunia, menguasai perbukitan sabana Komodo.",
  "Timor Rusa Deer":
    "Rusa pulau yang merumput di sabana kering Nusa Tenggara.",
  "Flores Hawk-Eagle":
    "Burung pemangsa langka yang berputar di bibir kawah Flores.",
  "Rinjani Scops Owl":
    "Burung hantu mungil yang hanya ditemukan di lereng Gunung Rinjani.",
  "Ebony Leaf Monkey":
    "Lutung berbulu hitam dengan bayi oranye, melompat di hutan pegunungan.",
  "Sumba Hornbill":
    "Julang besar yang hanya ditemukan di Pulau Sumba.",
  "Yellow-crested Cockatoo":
    "Kakatua putih yang terancam kritis dari kepulauan timur.",
  "Salmon-crested Cockatoo":
    "Kakatua berjambul merah muda, endemik kepulauan Seram.",
  "Seram Bandicoot":
    "Mabaya hutan langka yang hanya ditemukan di Pulau Seram.",
  "Wallace's Standardwing":
    "Burung surga yang jantannya turun seperti parasut dengan bulu putih panjang.",
  "Dusky Scrubfowl":
    "Burung gosong pembangun gundukan yang mengerami telur di pasir vulkanik hangat.",
  "Agile Wallaby":
    "Walabi yang melompat di sabana Trans-Fly.",
  "Southern Cassowary":
    "Burung tak terbang menjulang yang menyebarkan benih hutan hujan raksasa.",
  Siamang:
    "Kera hitam yang bersuara merdu; duet fajarnya bergema di kanopi Sumatera.",
  "Sumatran Striped Rabbit":
    "Kelinci kecil berbintik yang hanya ditemukan di dataran tinggi Barisan, Sumatera.",
  "Asian Tapir":
    "Pekebun hutan yang lembut, menyebarkan benih besar di dataran rendah Sumatera.",
  "Storm's Stork":
    "Bangau langka yang memburu ikan di rawa gambut air hitam.",
  "False Gharial":
    "Buaya berparuh ramping yang meluncur di sungai rawa gambut.",
  "Agile Gibbon":
    "Kera kecil lincah yang bersuara duet di kanopi rawa gambut.",
  "Rhinoceros Hornbill":
    "Rangkong bercula menyala, menanam pohon beringin di seluruh Kalimantan.",
  Dingiso:
    "Kanguru pohon dataran tinggi yang hanya ditemukan di Pegunungan Sudirman, Papua.",
  "White-winged Duck":
    "Bebek misterius penghuni kolam hutan, salah satu burung air paling langka di dunia.",
  "Long-tailed Macaque":
    "Monyet yang mudah beradaptasi, bergerak dari pesisir hingga dataran tinggi vulkanik.",
  Dhole:
    "Anjing liar yang bersiul dan berburu dalam kawanan di sabana.",
  "Javan Surili":
    "Lutung berjambul oranye yang hanya ditemukan di hutan barat Jawa.",
  "Javan Trogon":
    "Burung berperut merah tua dari hutan pegunungan berlumut.",
  "Maroon Langur":
    "Lutung kemerahan dari hutan hujan dataran rendah Kalimantan.",
  "Müller's Bornean Gibbon":
    "Owa abu-abu yang bersuara merdu di hutan utara Kalimantan.",
  Babirusa:
    "Babi hutan bertaring yang hanya ditemukan di Sulawesi dan pulau-pulau sekitarnya.",
  "Spectral Tarsier":
    "Pemburu malam bermata besar yang melompat di hutan malam Sulawesi.",
  "Lowland Anoa":
    "Kerbau liar terkecil di dunia, pemakan pucuk di dataran rendah Sulawesi.",
  "Moor Macaque":
    "Monyet kekar dari hutan karst dan dataran rendah Sulawesi Selatan.",
  "Knobbed Hornbill":
    "Rangkong berjambul merah, pemakan buah paling spektakuler di Sulawesi.",
  "Estuarine Crocodile":
    "Buaya air asin raksasa yang menguasai mangrove dan muara sungai.",
  "Orange-footed Scrubfowl":
    "Burung gosong pembangun gundukan dari kepulauan timur yang kering.",
  "Flores Monarch":
    "Kehicap hitam-putih yang hanya ditemukan di hutan Flores.",
  "Chestnut-backed Thrush":
    "Burung penyanyi endemik dari dataran tinggi berlumut Flores.",
  "Apricot-breasted Sunbird":
    "Burung madu mungil yang hanya ditemukan di Pulau Sumba.",
  "Moluccan King Parrot":
    "Nuri merah-hijau dari hutan Maluku.",
  "Seram Friarbird":
    "Cikukua berisik yang hanya ditemukan di Pulau Seram.",
  "Halmahera Paradise-crow":
    "Cenderawasih gagak berkilau yang menampilkan tarian parasut di atas Halmahera.",
  "Invisible Rail":
    "Mandar tak terbang yang sulit ditemui dan hanya ada di Halmahera.",
  "Magpie Goose":
    "Angsa kura-kura yang berkawanan merumput di dataran banjir Trans-Fly.",
  Brolga:
    "Bangau elegan yang menari di lahan basah Papua selatan.",
};

/* Deskripsi umum per tipe ancaman. */
export const threatDescriptionsId: Record<string, string> = {
  Deforestation:
    "Pembukaan hutan berskala besar yang memecah habitat dan melepaskan karbon tersimpan.",
  "Illegal logging":
    "Penebangan kayu tanpa izin yang merusak struktur hutan dan kanopi.",
  Poaching:
    "Perburuan liar yang menekan mamalia dan burung langka menuju kepunahan.",
  "Habitat loss":
    "Ruang hidup yang menyusut dan mengisolasi populasi satwa liar.",
  "Illegal Logging":
    "Penebangan kayu tanpa izin yang merusak struktur hutan dan kanopi.",
  "Climate change":
    "Perubahan pola hujan dan panas yang menekan sistem hutan yang rapuh.",
  "Forest fires":
    "Kebakaran berulang yang menghancurkan habitat dan menyelimuti kawasan dengan asap.",
  Mining:
    "Konsesi tambang yang merambah batas hutan lindung.",
  "Peat fires":
    "Kebakaran bawah tanah yang membara dan melepaskan karbon purba dalam jumlah besar.",
  Drainage:
    "Kanal yang mengeringkan kubah gambut sehingga mudah terbakar dan mengalami penurunan permukaan.",
  "Agricultural expansion":
    "Alih fungsi lahan menjadi pertanian yang terus menggerus tepi hutan setiap tahun.",
  "Human-elephant conflict":
    "Benturan antara sawah dan wilayah jelajah gajah yang memicu perusakan tanaman.",
  "Tourism pressure":
    "Pertumbuhan wisatawan yang tidak terkendali membebani jalur, satwa, dan desa.",
  "Invasive species":
    "Tumbuhan dan hewan pendatang yang mengalahkan kehidupan hutan asli.",
  "Natural disasters":
    "Tsunami, letusan, dan badai yang mengancam pesisir serta lereng yang terbuka.",
};

/* Deskripsi umum per tipe ekosistem, dengan kunci Inggris asli. */
export const ecosystemDescriptionsId: Record<string, string> = {
  "Lowland Rainforest":
    "Hutan hijau abadi di dataran rendah, lapisan paling kaya spesies, tempat raksasa dipterokarpa menjulang di atas lantai hutan yang gelap dan lembap.",
  "Montane Rainforest":
    "Hutan awan berlumut di lereng tinggi — lebih sejuk, lebih basah, dan kaya anggrek, pakis pohon, serta burung endemik.",
  "Montane Forest":
    "Hutan dataran tinggi berlumut tempat awan berlama-lama, kaya anggrek, pakis pohon, dan burung endemik.",
  "Tropical Rainforest":
    "Hutan khatulistiwa yang selalu basah dengan kanopi berlapis, tempat konsentrasi kehidupan darat terbesar berlindung.",
  "Peat Swamp Forest":
    "Hutan tergenang yang tumbuh di atas lapisan gambut setebal beberapa meter, menyimpan karbon purba dalam jumlah besar di bawah habitat orangutan.",
  "Tropical Peat Swamp Forest":
    "Kubah gambut yang digenangi hujan, membentuk dunia asam dan kenyal yang hampir tidak ditemukan di tempat lain di bumi.",
  "Mangrove Forest":
    "Hutan pasang surut tahan garam yang menjadi tempat pembesaran ikan, kepiting, dan bekantan di pertemuan darat dan laut.",
  "Volcanic Highlands":
    "Lereng abu dan bibir kawah tempat edelweiss dan cemara gunung tumbuh di tanah vulkanik baru di atas awan.",
  Savanna:
    "Padang rumput terbuka bertabur palem, tempat rusa, banteng, dan walabi merumput di bawah langit pulau yang luas.",
  "Monsoon Forest":
    "Hutan musiman yang menggugurkan daun selama bulan kering panjang, dibentuk oleh api dan kekeringan.",
  "Tropical Monsoon Forest":
    "Hutan musiman yang menggugurkan daun selama bulan kering panjang, dibentuk oleh api dan kekeringan.",
  "Dry Monsoon Forest":
    "Hutan tahan kekeringan dengan tanah tipis dan musim kering panjang, rumah bagi rusa dan kakatua.",
  "Karst Forest":
    "Hutan yang berakar di menara batu kapur dan gua, menyembunyikan walet, kupu-kupu, dan sungai bawah tanah.",
  "Karst & Tropical Forest":
    "Hutan yang berakar di menara batu kapur dan gua, menyembunyikan walet, kupu-kupu, dan sungai bawah tanah.",
  "Freshwater Swamp":
    "Hutan yang tergenang secara musiman di tepi danau dan sungai — tempat pembesaran ikan, gajah, dan burung air.",
  Grasslands:
    "Padang penggembalaan terbuka yang dijaga oleh satwa liar dan api, penting bagi kawanan herbivora dan burung yang bersarang di tanah.",
  "Subalpine Meadows":
    "Padang rumput tinggi di atas batas pohon, tempat edelweiss keperakan berbunga di antara rumput tussock.",
  "Alpine Grasslands":
    "Padang alpin khatulistiwa di bawah gletser, dijelajahi kanguru pohon dan burung cenderawasih.",
  Wetlands:
    "Dataran banjir, danau, dan rawa yang berdenyut mengikuti musim, dipenuhi burung air dan walabi.",
  "Peat Swamp":
    "Hutan tergenang yang tumbuh di atas lapisan gambut setebal beberapa meter, menyimpan karbon purba dalam jumlah besar.",
};
