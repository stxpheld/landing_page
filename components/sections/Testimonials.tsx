import { Star, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Témoignages"
          title={testimonials.title}
          subtitle={testimonials.note}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col gap-5 rounded-[var(--radius-card)] border border-line bg-white p-7">
                <div className="flex gap-0.5" aria-label={`Note ${t.rating} sur 5`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      size={18}
                      className="fill-signal text-signal"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-ink">
                  « {t.quote} »
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-muted">
                    <User size={18} aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-sm font-bold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
