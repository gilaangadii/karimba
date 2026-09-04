import { Threat } from "@/types";

export const threats: Threat[] = [
  {
    id: "deforestasi",
    title: "Deforestasi",
    description:
      "Hilangnya hutan secara besar-besaran akibat penebangan, konversi lahan, dan aktivitas manusia lainnya.",
    impact:
      "Indonesia kehilangan sekitar 1,04 juta hektar hutan per tahun. Dampak meliputi hilangnya habitat satwa, erosi tanah, dan peningkatan emisi karbon.",
    image: "/images/threats/deforestasi.jpg",
  },
  {
    id: "kebakaran",
    title: "Kebakaran Hutan",
    description:
      "Kebakaran hutan dan lahan yang terjadi setiap tahun, terutama di area gambut.",
    impact:
      "Kebakaran menghasilkan polusi udara yang masif, merusak ekosistem, dan melepaskan jutaan ton karbon ke atmosfer.",
    image: "/images/threats/kebakaran.jpg",
  },
  {
    id: "kehilangan-biodiversitas",
    title: "Kehilangan Keanekaragaman Hayati",
    description:
      "Spesies terancam punah akibat hilangnya habitat dan perburuan liar.",
    impact:
      "Banyak spesies endemik Indonesia berada di ambang kepunahan. Kehilangan spesies mengganggu keseimbangan seluruh ekosistem.",
    image: "/images/threats/biodiversitas.jpg",
  },
];
