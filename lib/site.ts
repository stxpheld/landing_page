/**
 * Configuration globale du site (valeurs dérivées de l'environnement).
 * Remplacez les placeholders par les vraies valeurs dans `.env.local`.
 */
export const site = {
  author: "Stéphane",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agence-ia.fr",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@agence-ia.fr",
  // Lien Cal.com au format "user/event" (ex. "stephane/appel-decouverte")
  calLink: process.env.NEXT_PUBLIC_CALCOM_LINK || "",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  },
};
