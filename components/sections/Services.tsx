import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="offres" className="section-pad scroll-mt-20">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Offres"
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {services.offers.map((offer, i) => (
            <ScrollReveal key={offer.title} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col gap-5 rounded-[var(--radius-card)] border p-6 sm:p-8 ${
                  offer.featured
                    ? "border-indigo/60 bg-[linear-gradient(180deg,rgba(139,123,255,0.14),rgba(139,123,255,0.03))] text-white shadow-[0_40px_90px_-40px_rgba(139,123,255,0.7)] lg:-mt-4 lg:mb-[-1rem]"
                    : "border-line bg-surface"
                }`}
              >
                <Badge tone={offer.featured ? "signal" : "indigo"}>
                  {offer.badge}
                </Badge>

                <h3
                  className={`font-display text-2xl font-bold ${offer.featured ? "text-white" : "text-ink"}`}
                >
                  {offer.title}
                </h3>
                <p className={offer.featured ? "text-white/70" : "text-muted"}>
                  {offer.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {offer.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${offer.featured ? "text-signal" : "text-indigo"}`}
                        aria-hidden="true"
                      />
                      <span className={offer.featured ? "text-white/85" : "text-ink"}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto flex flex-col gap-4 border-t pt-5 ${offer.featured ? "border-white/15" : "border-line"}`}
                >
                  <div>
                    <div
                      className={`font-mono text-xs uppercase tracking-wide ${offer.featured ? "text-white/50" : "text-muted"}`}
                    >
                      Pour : {offer.target}
                    </div>
                    <div
                      className={`mt-1 font-display text-lg font-bold ${offer.featured ? "text-white" : "text-ink"}`}
                    >
                      {offer.price}
                    </div>
                  </div>
                  <ButtonLink
                    href="#contact"
                    variant={offer.featured ? "light" : "secondary"}
                    className="w-full"
                  >
                    {offer.cta}
                    <ArrowRight size={18} />
                  </ButtonLink>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
