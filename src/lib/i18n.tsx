"use client";

import { usePathname } from "next/navigation";
import en from "../locales/en.json";
import id from "../locales/id.json";

const maps: Record<string, any> = { en, id };

export function useLocale() {
  const pathname = usePathname() || "/en";
  // prefer saved preference
  try {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("lang");
      if (saved) return saved;
    }
  } catch (e) {}

  const parts = pathname.split("/").filter(Boolean);
  const lang = parts[0] || "en";
  return lang;
}

export function useT() {
  const lang = useLocale();
  const dict = maps[lang] || maps.en;
  function t(path: string) {
    return path.split(".").reduce((o: any, k: string) => (o ? o[k] : undefined), dict) || path;
  }
  return { t, lang };
}
