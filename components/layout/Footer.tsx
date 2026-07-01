import Link from "next/link";
import type { ComponentType } from "react";
import { Sparkles } from "lucide-react";
import { LinkedinIcon, XIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { nav, footer } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    site.social.linkedin && { Icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
    site.social.twitter && { Icon: XIcon, href: site.social.twitter, label: "Twitter / X" },
    site.social.youtube && { Icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
  ].filter(Boolean) as { Icon: ComponentType<{ size?: number }>; href: string; label: string }[];

  return (
    <footer className="bg-slate text-white">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Colonne 1 — Logo & tagline */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-display text-lg font-bold">
            <Sparkles size={20} className="text-indigo" aria-hidden="true" />
            {nav.brand}
          </span>
          <p className="max-w-xs text-sm text-white/60">{footer.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-signal transition hover:underline"
          >
            {site.email}
          </a>
        </div>

        {/* Colonne 2 — Navigation rapide */}
        <nav aria-label="Navigation du pied de page" className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wide text-white/40">
            Navigation
          </span>
          {[...nav.links, nav.cta].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Colonne 3 — Réseaux sociaux */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wide text-white/40">
            Réseaux
          </span>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 4 — Légal */}
        <nav aria-label="Mentions légales" className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wide text-white/40">
            Légal
          </span>
          {footer.legal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-center text-xs text-white/40">
          © {year} {site.author} · SIRET [XXXXX] · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
