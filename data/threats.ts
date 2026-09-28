import { Threat } from "@/types";

export const threats: Threat[] = [
  {
    id: "deforestasi",
    title: "Deforestation",
    description:
      "The large-scale loss of forests due to logging, land conversion, and other human activities.",
    impact:
      "Indonesia loses about 1.04 million hectares of forest per year. Impacts include habitat loss for wildlife, soil erosion, and increased carbon emissions.",
    image: "/images/issues/Deforestasi.jpg",
  },
  {
    id: "kebakaran",
    title: "Forest Fires",
    description:
      "Forest and land fires that occur annually, particularly in peatland areas.",
    impact:
      "Fires generate massive air pollution, damage ecosystems, and release millions of tons of carbon into the atmosphere.",
    image: "/images/issues/Kebakaran_Hutan.jpg",
  },
  {
    id: "kehilangan-biodiversitas",
    title: "Loss of Biodiversity",
    description:
      "Species threatened with extinction due to habitat loss and poaching.",
    impact:
      "Many endemic species in Indonesia are on the brink of extinction. The loss of species disrupts the balance of entire ecosystems.",
    image: "/images/issues/Kehilangan_Keanekaragaman_Hayati.jpg",
  },
];
