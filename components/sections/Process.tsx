import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="processus" className="section-pad scroll-mt-20">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Processus"
          title={process.title}
          subtitle={process.subtitle}
        />

        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
          {/* Ligne de progression (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block"
          />
          {process.steps.map((step, i) => (
            <ScrollReveal
              key={step.num}
              as="li"
              delay={i * 0.08}
              className="relative flex gap-4 md:flex-col md:gap-4"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-display text-sm font-bold text-indigo">
                {step.num}
              </span>
              <div className="flex flex-col gap-2 pt-1 md:pt-0">
                <Badge tone="neutral">{step.when}</Badge>
                <h3 className="font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
