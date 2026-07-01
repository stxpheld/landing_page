import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  robots: { index: false, follow: true },
};

export default function Cgv() {
  return (
    <LegalShell title="Conditions générales de vente">
      <p className="rounded-[var(--radius-btn)] border border-line bg-surface p-4 text-sm">
        ⚠️ Modèle indicatif à compléter avec vos conditions réelles (devis,
        paiement, livraison, rétractation).
      </p>
      <h2>Objet</h2>
      <p>
        Les présentes CGV encadrent les prestations de conseil, d&apos;audit et de
        développement IA proposées par Stéphane [Nom].
      </p>
      <h2>Devis & commande</h2>
      <p>
        Toute prestation fait l&apos;objet d&apos;un devis préalable. La commande est
        ferme à réception du devis signé.
      </p>
      <h2>Tarifs & paiement</h2>
      <p>
        Les tarifs sont indiqués en euros. Les modalités de paiement sont
        précisées sur chaque devis.
      </p>
      <h2>Confidentialité</h2>
      <p>
        Un accord de confidentialité (NDA) peut être signé avant tout échange
        d&apos;informations sensibles.
      </p>
    </LegalShell>
  );
}
