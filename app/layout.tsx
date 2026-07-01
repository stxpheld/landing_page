import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Manrope — police unique (display + corps + labels)
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.author} — Agence IA | Automatisation & Implémentation`,
    template: `%s — ${site.author}`,
  },
  description:
    "Transformez vos process métier avec l'IA. Stéphane vous accompagne de l'audit à la mise en production. Résultats concrets en moins de 6 semaines.",
  keywords: [
    "agence ia france",
    "consultant ia",
    "automatisation ia entreprise",
    "implémentation ia sur-mesure",
    "agent ia entreprise",
  ],
  authors: [{ name: site.author }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: `${site.author} · Agence IA`,
    title: `${site.author} — Agence IA | Automatisation & Implémentation`,
    description:
      "Des solutions IA concrètes qui font gagner du temps, de l'argent et de la clarté. De l'audit à la mise en production.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${site.author} — Agence IA` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.author} — Agence IA`,
    description:
      "Des solutions IA concrètes, de l'audit à la mise en production. Résultats en moins de 6 semaines.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}#business`,
      name: `${site.author} · Agence IA`,
      description:
        "Agence IA — audit, automatisation et implémentation de solutions IA sur-mesure pour les entreprises.",
      url: site.url,
      email: site.email,
      areaServed: ["France", "Belgique", "Suisse", "Canada"],
      priceRange: "€€",
    },
    {
      "@type": "Person",
      "@id": `${site.url}#person`,
      name: site.author,
      jobTitle: "Consultant IA indépendant",
      worksFor: { "@id": `${site.url}#business` },
      url: site.url,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {site.plausibleDomain && (
          <script
            defer
            data-domain={site.plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
