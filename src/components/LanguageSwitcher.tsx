"use client";

import { useState, useEffect } from "react";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang");
      if (saved) setLang(saved);
      else setLang(null);
    } catch (e) {
      setLang(null);
    }
  }, []);

  function setLanguage(l: string) {
    try {
      window.localStorage.setItem("lang", l);
      setLang(l);
    } catch (e) {}
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`text-sm ${lang === "en" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => setLanguage("id")}
        className={`text-sm ${lang === "id" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
        aria-pressed={lang === "id"}
      >
        ID
      </button>
    </div>
  );
}
