import { User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatBox } from "@/components/ui/StatBox";
import { Badge } from "@/components/ui/Badge";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="apropos" className="bg-slate text-white scroll-mt-20">
      <div className="container-page grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-28">
        {/* Photo (placeholder — remplacer par un vrai portrait HD) */}
        <ScrollReveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
            <div className="flex h-full flex-col items-center justify-center gap-3 text-white/40">
              <User size={48} aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wide">
                Photo de Stéphane
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-[8px] border border-white/10 bg-slate/80 px-4 py-3 backdrop-blur">
              <div className="font-display text-base font-bold">Stéphane</div>
              <div className="font-mono text-xs text-white/50">
                Consultant IA indépendant
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Texte */}
        <div className="flex flex-col gap-7">
          <ScrollReveal className="flex flex-col gap-5">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal">
              À propos
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] sm:text-4xl">
              {about.title}
            </h2>
            <div className="flex flex-col gap-4 text-white/70">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="grid grid-cols-3 gap-6 border-y border-white/10 py-7"
          >
            {about.stats.map((s) => (
              <StatBox key={s.label} value={s.value} label={s.label} dark />
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wide text-white/40">
              Stack maîtrisée
            </span>
            <div className="flex flex-wrap gap-2">
              {about.stack.map((tool) => (
                <Badge key={tool} tone="dark">
                  {tool}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
