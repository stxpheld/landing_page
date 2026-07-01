"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LayoutDashboard, Zap, GitBranch } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dégradé subtil cream → blanc (PRD §4.2) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_0%,rgba(59,59,255,0.06),transparent),radial-gradient(40%_40%_at_100%_30%,rgba(0,229,160,0.07),transparent)]"
      />
      <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:py-28">
        {/* Colonne texte */}
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-xs font-medium text-ink"
          >
            <Sparkles size={14} className="text-indigo" aria-hidden="true" />
            {hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-xl text-lg text-muted"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex flex-wrap items-center gap-3"
          >
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost" size="lg">
              {hero.secondaryCta.label}
              <ArrowRight size={18} />
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
          >
            {hero.socialProof.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Colonne visuel — mockup stylisé (placeholder, PRD §4.2 option A) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
          aria-hidden="true"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

/** Mockup de tableau de bord IA (placeholder visuel — à remplacer par une vraie capture). */
function HeroMockup() {
  return (
    <div className="relative rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-[0_40px_80px_-40px_rgba(26,26,46,0.4)]">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-line" />
        <span className="h-3 w-3 rounded-full bg-line" />
        <span className="h-3 w-3 rounded-full bg-line" />
        <span className="ml-3 font-mono text-xs text-muted">tableau-de-bord-ia</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { Icon: Zap, label: "Tâches auto.", value: "1 248" },
          { Icon: GitBranch, label: "Workflows", value: "17" },
          { Icon: LayoutDashboard, label: "Temps gagné", value: "32 h/sem" },
        ].map(({ Icon, label, value }) => (
          <div key={label} className="rounded-[8px] border border-line bg-cream p-3">
            <Icon size={16} className="text-indigo" />
            <div className="mt-2 font-display text-lg font-bold text-ink">{value}</div>
            <div className="font-mono text-[10px] uppercase text-muted">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-[8px] border border-line bg-cream p-4">
        <div className="mb-3 flex items-end gap-1.5">
          {[40, 65, 50, 80, 72, 95, 88].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[3px] bg-gradient-to-t from-indigo/40 to-indigo"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between font-mono text-[10px] text-muted">
          <span>Productivité</span>
          <span className="text-signal">▲ +63%</span>
        </div>
      </div>

      {/* Pastille flottante */}
      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-[8px] border border-line bg-white px-3 py-2 shadow-lg">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-signal/20">
          <Sparkles size={14} className="text-ink" />
        </span>
        <div className="leading-tight">
          <div className="font-display text-sm font-bold text-ink">Agent IA actif</div>
          <div className="font-mono text-[10px] text-muted">temps réel</div>
        </div>
      </div>
    </div>
  );
}
