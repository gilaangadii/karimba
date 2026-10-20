import { Forest } from "@/types";
import type { Dictionary } from "@/lib/dictionaries";

/* ============================================================
   PURE TRANSLATION HELPERS
   ------------------------------------------------------------
   Every helper falls back to the original English value found in
   /data, so a missing key never breaks the layout — it simply
   shows the source text.
   ============================================================ */

/** Look up `value` in a vocabulary map (keys are stored lowercase). */
export function tr(map: Record<string, string>, value: string): string {
  if (!map) return value;
  return map[value.toLowerCase()] ?? value;
}

/** Localize area strings, e.g. "2,6 million hectares" → "2,6 juta hektare". */
export function localizeArea(dict: Dictionary, area: string): string {
  const entries = Object.entries(dict.vocab.units).sort(
    (a, b) => b[0].length - a[0].length
  );
  const localized = entries.reduce(
    (text, [from, to]) => text.split(from).join(to),
    area
  );
  /* Indonesian uses "." for thousands and "," for decimals. Only
     apply this to the Indonesian dictionary; English stays as-is. */
  if (!dict.vocab.units.hectares) return localized;
  return localized.replace(/,(\d{3})(?=,|\D|$)/g, ".$1");
}

/** Return a copy of a forest with every user-facing field translated. */
export function translateForest(dict: Dictionary, forest: Forest): Forest {
  const text = dict.data.forests[forest.id];

  return {
    ...forest,
    name: text?.name ?? forest.name,
    location: text?.location ?? forest.location,
    ecosystem: tr(dict.vocab.ecosystems, forest.ecosystem),
    description: text?.description ?? forest.description,
    area: localizeArea(dict, forest.area),
    threats: forest.threats.map((threat) => tr(dict.vocab.threats, threat)),
    biodiversity: forest.biodiversity.map((item) => ({
      ...item,
      name: tr(dict.vocab.species, item.name),
      habitat: tr(dict.vocab.habitats, item.habitat),
      role: tr(dict.vocab.roles, item.role),
    })),
  };
}

/** Translate a wildlife/animal entry. */
export function translateAnimal<T extends {
  name: string;
  habitat: string;
  role: string;
}>(dict: Dictionary, animal: T): T {
  return {
    ...animal,
    name: tr(dict.vocab.species, animal.name),
    habitat: tr(dict.vocab.habitats, animal.habitat),
    role: tr(dict.vocab.roles, animal.role),
  };
}
