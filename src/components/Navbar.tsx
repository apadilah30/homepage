"use client";

import { useState } from "react";
import { Nav } from "./Nav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center pointer-events-none">
      <div className="pointer-events-auto mx-4 flex w-full max-w-6xl items-center justify-between rounded-xl bg-slate-900/60 px-4 py-2 shadow-lg backdrop-blur-md">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-violet-500 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
            AP
          </span>
          <span className="hidden sm:inline">Agus Padilah</span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <Nav />
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded-md p-2 text-slate-300 hover:bg-white/5"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed left-4 right-4 top-20 z-50 rounded-xl bg-slate-900/95 p-4 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            <Nav />
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
