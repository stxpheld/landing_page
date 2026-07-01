import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <LegalShell title="Mentions légales">
      <p className="rounded-[var(--radius-btn)] border border-line bg-surface p-4 text-sm">
        ⚠️ Contenu à compléter avec vos informations réelles (raison sociale,
        SIRET, hébergeur, etc.).
      </p>
      <h2>Éditeur du site</h2>
      <p>
        Stéphane [Nom], entreprise individuelle. SIRET : [XXXXX]. Adresse :
        [adresse]. Email : [email].
      </p>
      <h2>Hébergement</h2>
      <p>
        Site hébergé par [Vercel Inc. / hébergeur], [adresse de l&apos;hébergeur].
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site est protégé. Toute reproduction
        sans autorisation est interdite.
      </p>
    </LegalShell>
  );
}
