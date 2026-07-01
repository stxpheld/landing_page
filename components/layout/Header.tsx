"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Verrouille le scroll quand le drawer mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(26,26,46,0.4)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[60px] items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold text-ink"
        >
          <Sparkles size={20} className="text-indigo" aria-hidden="true" />
          {nav.brand}
        </Link>

        <nav
          aria-label="Navigation principale"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        >
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={nav.cta.href} aria-label={nav.cta.label}>
            {nav.cta.label}
          </ButtonLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] text-ink md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Drawer mobile plein écran */}
      {open && (
        <div className="fixed inset-0 top-[60px] z-40 flex flex-col gap-2 bg-cream px-6 py-8 md:hidden">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl font-semibold text-ink"
            >
              {l.label}
            </a>
          ))}
          <ButtonLink
            href={nav.cta.href}
            size="lg"
            className="mt-6"
            onClick={() => setOpen(false)}
          >
            {nav.cta.label}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
