import { en, type Dictionary } from "./en";
import { id } from "./id";

export type { Dictionary, ForestText, ThreatText } from "./en";

/** Supported interface languages. "id" (Indonesian) is the default. */
export type Language = "id" | "en";

export const DEFAULT_LANGUAGE: Language = "id";

export const dictionaries: Record<Language, Dictionary> = {
  id,
  en,
};
