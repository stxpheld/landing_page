import { TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section id="resultats" className="section-pad bg-white scroll-mt-20">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Résultats"
          title={caseStudies.title}
          subtitle={caseStudies.note}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.studies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col gap-5 rounded-[var(--radius-card)] border border-line bg-cream p-7 sm:p-8">
                <Badge tone="indigo">{study.sector}</Badge>
                <h3 className="font-display text-xl font-bold text-ink">
                  {study.title}
                </h3>

                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-muted">
                    <span className="font-medium text-ink">Contexte : </span>
                    {study.context}
                  </p>
                  <p className="text-muted">
                    <span className="font-medium text-ink">Solution : </span>
                    {study.solution}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((r) => (
                    <div
                      key={r}
                      className="flex items-start gap-2 rounded-[var(--radius-btn)] border border-line bg-white p-3"
                    >
                      <TrendingUp
                        size={18}
                        className="mt-0.5 shrink-0 text-signal"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-ink">{r}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {study.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[var(--radius-badge)] bg-ink/[0.05] px-2 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
