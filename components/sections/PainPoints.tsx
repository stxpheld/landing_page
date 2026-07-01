import { Clock, BrainCircuit, Wallet, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { painPoints } from "@/lib/content";

const icons = { Clock, BrainCircuit, Wallet } as const;

export function PainPoints() {
  return (
    <section className="section-pad">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading eyebrow="Le constat" title={painPoints.title} />

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.cards.map((card, i) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-btn)] bg-indigo/10">
                    <Icon size={24} className="text-indigo" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {card.title}
                  </h3>
                  <p className="text-muted">{card.text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mx-auto max-w-3xl">
          <figure className="relative rounded-[var(--radius-card)] border border-indigo/20 bg-indigo/[0.04] p-8 text-center sm:p-10">
            <Quote
              size={32}
              className="mx-auto mb-4 text-indigo"
              aria-hidden="true"
            />
            <blockquote className="font-display text-xl font-medium text-ink sm:text-2xl">
              {painPoints.transition}
            </blockquote>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
