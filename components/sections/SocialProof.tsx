import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { socialProof } from "@/lib/content";

export function SocialProof() {
  return (
    <section className="bg-slate py-12">
      <div className="container-page flex flex-col gap-7">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-white/40">
          {socialProof.label}
        </p>
        <LogoMarquee logos={socialProof.logos} />
      </div>
    </section>
  );
}
