import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <LegalShell title="Politique de confidentialité">
      <p className="rounded-[var(--radius-btn)] border border-line bg-white p-4 text-sm">
        ⚠️ Modèle à adapter à votre situation et à faire valider si nécessaire.
      </p>
      <h2>Données collectées</h2>
      <p>
        Via le formulaire de contact : nom, email, et les informations que vous
        choisissez de transmettre. Ces données servent uniquement à répondre à
        votre demande.
      </p>
      <h2>Conservation & partage</h2>
      <p>
        Vos données ne sont jamais revendues ni partagées avec des tiers à des
        fins commerciales. Elles sont conservées le temps nécessaire au
        traitement de votre demande.
      </p>
      <h2>Mesure d&apos;audience</h2>
      <p>
        L&apos;audience est mesurée avec Plausible Analytics, sans cookie et sans
        suivi individuel, conformément au RGPD.
      </p>
      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification et de
        suppression de vos données. Contact : [email].
      </p>
    </LegalShell>
  );
}
