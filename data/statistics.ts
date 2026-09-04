import { Statistic, ForestImportance, DataStoryItem } from "@/types";

export const statistics: Statistic[] = [
  {
    value: "125M+",
    label: "HEKTAR KAWASAN BERHUTAN",
  },
  {
    value: "17K+",
    label: "PULAU DI INDONESIA",
  },
  {
    value: "1,000+",
    label: "SPESIES TERIDENTIFIKASI",
  },
  {
    value: "4",
    label: "TIPE EKOSISTEM UTAMA",
  },
];

export const forestImportance: ForestImportance[] = [
  {
    number: "01",
    title: "KEHIDUPAN",
    description: "Rumah bagi ribuan spesies.",
    icon: "leaf",
  },
  {
    number: "02",
    title: "AIR",
    description: "Menjaga siklus dan sumber air.",
    icon: "droplets",
  },
  {
    number: "03",
    title: "IKLIM",
    description: "Menyimpan karbon dan menjaga keseimbangan iklim.",
    icon: "cloud-sun",
  },
  {
    number: "04",
    title: "MANUSIA",
    description: "Menopang kehidupan dan mata pencaharian masyarakat.",
    icon: "users",
  },
];

export const dataStory: DataStoryItem[] = [
  {
    label: "HUTAN ALAM INDONESIA TERUS BERKURANG",
    value: "-1,04 juta ha/tahun",
    description: "Penurunan luas hutan alam (2019-2023)",
    source: "KLHK, WWF, FAO Data 2019-2023",
  },
  {
    label: "KEANEKARAGAMAN HAYATI TINGGI",
    value: "17.500+",
    description: "Spesies teridentifikasi",
  },
  {
    label: "KARBON TERSIMPAN DI HUTAN",
    value: "57 Gt",
    description: "Karbon tersimpan",
  },
  {
    label: "KAWASAN HUTAN DILINDUNGI",
    value: "27%",
    description: "Dari Total Kawasan Hutan",
  },
];
