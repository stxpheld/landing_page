import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { ContactForm } from "@/components/ui/ContactForm";
import { finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section id="contact" className="bg-slate text-white scroll-mt-20">
      <div className="container-page flex flex-col gap-12 py-20 md:py-28">
        <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal">
            Contact
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[44px]">
            {finalCta.title}
          </h2>
          <p className="text-lg text-white/70">{finalCta.subtitle}</p>
          <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {finalCta.reassurance.map((r) => (
              <li key={r} className="flex items-center gap-1.5 text-white/80">
                <Check size={16} className="text-signal" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Réservation directe (Cal.com) */}
          <ScrollReveal className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-semibold text-white">
              Réservez directement votre créneau
            </h3>
            <CalEmbed />
          </ScrollReveal>

          {/* Formulaire de contact (secours) */}
          <ScrollReveal delay={0.1} className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-semibold text-white">
              …ou écrivez-moi quelques lignes
            </h3>
            <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
