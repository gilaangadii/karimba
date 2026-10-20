"use client";

/* ============================================================
   KARIMBA — LANGUAGE CONTEXT (Indonesian ⇄ English)
   ------------------------------------------------------------
   Bahasa utama = Indonesia ("id"), dipakai sebagai default.
   Pilihan bahasa disimpan di localStorage dan dipakai ulang pada
   kunjungan berikutnya (sinkron antar-tab lewat event "storage").

   The active language is read through useSyncExternalStore, so the
   server/hydration render always uses the default language and no
   hydration mismatch occurs.
   ============================================================ */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  DEFAULT_LANGUAGE,
  dictionaries,
  type Dictionary,
  type Language,
} from "@/lib/dictionaries";

const STORAGE_KEY = "karimba_language";

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch {
    /* storage unavailable — use the default */
  }
  return DEFAULT_LANGUAGE;
}

function getServerLanguage(): Language {
  return DEFAULT_LANGUAGE;
}

function writeLanguage(next: Language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable — language still applies for this session */
  }
  listeners.forEach((listener) => listener());
}

interface LanguageContextValue {
  language: Language;
  dict: Dictionary;
  setLanguage: (language: Language) => void;
  /** Switches between Indonesian and English. */
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    readStoredLanguage,
    getServerLanguage
  );

  /* Keep <html lang> in sync for accessibility and search engines. */
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    writeLanguage(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    writeLanguage(language === "id" ? "en" : "id");
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      dict: dictionaries[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within <LanguageProvider>");
  return ctx;
}
