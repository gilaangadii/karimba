export interface Forest {
  id: string;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  ecosystem: string;
  description: string;
  area: string;
  biodiversity: BiodiversityItem[];
  threats: string[];
  image: string;
}

export interface BiodiversityItem {
  name: string;
  scientificName: string;
  habitat: string;
  role: string;
  image: string;
}

export interface Threat {
  id: string;
  title: string;
  description: string;
  impact: string;
  image: string;
}

export interface Statistic {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Wildlife {
  id: string;
  name: string;
  scientificName: string;
  habitat: string;
  role: string;
  image: string;
}

export interface ForestImportance {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface DataStoryItem {
  label: string;
  value: string;
  description: string;
  source?: string;
}
