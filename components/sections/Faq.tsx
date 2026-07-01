import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading eyebrow="FAQ" title={faq.title} />
        <ScrollReveal className="mx-auto w-full max-w-3xl">
          <Accordion items={faq.items} />
        </ScrollReveal>
      </div>
    </section>
  );
}
