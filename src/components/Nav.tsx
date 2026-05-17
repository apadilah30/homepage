"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

export function Nav() {
  const { t, lang } = useT();
  const links = [
    { href: `/${lang}#stack`, label: t("nav.stack") },
    { href: `/${lang}#projects`, label: t("nav.projects") },
    { href: `/${lang}#experience`, label: t("nav.experience") },
  ];

  return (
    <nav className="flex gap-1 rounded-full border border-white/10 bg-slate-900/50 p-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          locale={false}
          className="rounded-full px-4 py-1.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
