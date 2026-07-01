/**
 * SOURCE UNIQUE DE TOUT LE CONTENU ÉDITORIAL (PRD §4).
 * Pour personnaliser la page, modifiez uniquement ce fichier.
 * Les éléments marqués TODO/placeholder sont à remplacer par les vrais contenus.
 */

export const nav = {
  brand: "Stéphane · IA",
  links: [
    { label: "Offres", href: "#offres" },
    { label: "À propos", href: "#apropos" },
    { label: "Processus", href: "#processus" },
    { label: "Résultats", href: "#resultats" },
  ],
  cta: { label: "Réserver un appel", href: "#contact" },
};

export const hero = {
  badge: "✦ Agence IA — Automatisation & Implémentation",
  title:
    "Transformez vos process métier avec l'IA — sans vous perdre dans la technique.",
  subtitle:
    "J'aide les entreprises ambitieuses à identifier, concevoir et déployer des solutions IA concrètes qui font gagner du temps, de l'argent et de la clarté.",
  primaryCta: { label: "Réserver un appel gratuit", href: "#contact" },
  secondaryCta: { label: "Voir les offres", href: "#offres" },
  socialProof: [
    "+30 entreprises accompagnées",
    "95% de satisfaction",
    "Résultats en < 6 semaines",
  ],
};

// Placeholders — remplacer par les vrais logos clients (PNG fond transparent).
export const socialProof = {
  label: "Ils m'ont fait confiance",
  logos: [
    "Northwind",
    "Lumea",
    "Atlas Co",
    "Velora",
    "Cortex",
    "Brightside",
    "Meridian",
    "Kavé",
  ],
};

export const painPoints = {
  title: "Vous avez peut-être déjà pensé…",
  cards: [
    {
      icon: "Clock",
      title: "« Je perds des heures sur des tâches répétitives »",
      text: "Relances, saisies, rapports manuels… votre temps vaut bien plus que ça.",
    },
    {
      icon: "BrainCircuit",
      title: "« Je ne sais pas par où commencer avec l'IA »",
      text: "ChatGPT, Zapier, Make, n8n, LangChain… le maquis technologique vous freine.",
    },
    {
      icon: "Wallet",
      title: "« J'ai peur d'investir sans voir de résultats »",
      text: "Trop d'agences promettent la lune et livrent de la complexité inutile.",
    },
  ],
  transition:
    "C'est exactement pour ça que j'ai créé cette agence. Pas pour vous vendre de la technologie — mais pour vous livrer des résultats.",
};

export const services = {
  title: "Ce que je construis pour vous",
  subtitle:
    "Des solutions sur-mesure, pas des templates vendus à tous vos concurrents.",
  offers: [
    {
      badge: "Point de départ",
      featured: false,
      title: "Audit IA & Feuille de route",
      description:
        "En 1 semaine, j'analyse vos process, identifie les 3 opportunités IA à fort ROI et vous livre une feuille de route priorisée.",
      deliverables: [
        "Cartographie des process",
        "Analyse d'opportunités IA",
        "Plan d'action priorisé",
        "Session de restitution 1h",
      ],
      target: "Dirigeants qui démarrent",
      cta: "Démarrer par un audit",
      price: "À partir de 1 500 €",
    },
    {
      badge: "⭐ Le plus demandé",
      featured: true,
      title: "Déploiement IA sur-mesure",
      description:
        "Je conçois, développe et déploie votre solution IA de A à Z : automatisations, agents, outils internes, intégrations API.",
      deliverables: [
        "Cahier des charges",
        "Développement complet",
        "Tests & validation",
        "Documentation",
        "Formation équipe",
      ],
      target: "Entreprises prêtes à passer à l'action",
      cta: "Lancer mon projet",
      price: "Sur devis — à partir de 5 000 €",
    },
    {
      badge: "Dans la durée",
      featured: false,
      title: "Conseil & Montée en compétences",
      description:
        "Formation de vos équipes, coaching mensuel, veille IA active. Je deviens votre référent IA sans que vous ayez à embaucher.",
      deliverables: [
        "Sessions mensuelles",
        "Ateliers pratiques",
        "Accès à ma veille",
        "Support Slack",
      ],
      target: "Équipes qui veulent l'autonomie",
      cta: "En savoir plus",
      price: "Forfait mensuel à partir de 2 000 €/mois",
    },
  ],
};

export const about = {
  title: "Derrière l'agence, il y a Stéphane.",
  // TODO: personnaliser les passages entre [crochets].
  bio: [
    "Je ne suis pas une agence anonyme avec 50 sous-traitants offshore. Je suis Stéphane — consultant IA indépendant, [X années] d'expérience en [secteur], passionné par la façon dont l'intelligence artificielle peut libérer les humains des tâches qui les épuisent.",
    "J'ai travaillé pour [type d'entreprises], construit des outils qui ont économisé [X heures/semaine] à des équipes entières, et je reste convaincu que la meilleure IA est celle qui est comprise et adoptée par ceux qui l'utilisent.",
    "Mon engagement : des livrables concrets, des délais tenus, et une totale transparence sur ce que l'IA peut — et ne peut pas — faire pour vous.",
  ],
  stats: [
    { value: "+30", label: "Projets IA livrés" },
    { value: "6 ans", label: "D'expérience en automatisation" },
    { value: "< 6 sem.", label: "Pour les premiers résultats" },
  ],
  stack: [
    "OpenAI",
    "Anthropic Claude",
    "LangChain",
    "n8n",
    "Make",
    "Zapier",
    "Python",
    "FastAPI",
    "Supabase",
    "Airtable",
    "Notion API",
  ],
};

export const process = {
  title: "Comment on travaille ensemble",
  subtitle: "Un processus rodé, des jalons clairs, zéro surprise.",
  steps: [
    {
      num: "01",
      when: "Jour 1",
      title: "Appel de découverte",
      text: "30 min pour comprendre vos enjeux, votre contexte et vos objectifs. Gratuit, sans engagement.",
    },
    {
      num: "02",
      when: "Sem. 1",
      title: "Analyse & diagnostic",
      text: "Cartographie de vos process, identification des cas d'usage IA prioritaires, estimation des gains potentiels.",
    },
    {
      num: "03",
      when: "Sem. 2-3",
      title: "Conception & prototype",
      text: "Spécifications fonctionnelles, architecture technique, premier prototype fonctionnel pour valider ensemble.",
    },
    {
      num: "04",
      when: "Sem. 4-6",
      title: "Développement & livraison",
      text: "Développement de la solution finale, tests, intégration dans votre environnement, documentation.",
    },
    {
      num: "05",
      when: "Continu",
      title: "Formation & suivi",
      text: "Prise en main par vos équipes, formation adaptée, support post-livraison pour garantir l'adoption.",
    },
  ],
};

// Exemples illustratifs — à remplacer par les vrais projets.
export const caseStudies = {
  title: "Des résultats, pas des promesses",
  note: "Exemples illustratifs — à remplacer par vos projets réels.",
  studies: [
    {
      sector: "Retail / E-commerce",
      title: "Support client automatisé",
      context: "Équipe support de 3 personnes noyée sous les tickets répétitifs.",
      solution:
        "Agent IA de traitement automatique des demandes fréquentes + escalade humaine.",
      results: ["-65% de tickets traités manuellement", "+40% de satisfaction client"],
      stack: ["Claude API", "n8n", "Zendesk"],
    },
    {
      sector: "Immobilier",
      title: "Automatisation administrative",
      context: "Agent immobilier perdant 3h/jour en tâches administratives.",
      solution:
        "Automatisation des comptes-rendus de visite, génération de fiches, relances clients.",
      results: ["3h récupérées par semaine", "+20% de mandats traités"],
      stack: ["OpenAI", "Make", "Notion API"],
    },
    {
      sector: "Consulting",
      title: "Production de rapports accélérée",
      context: "Production de rapports d'analyse prenant 2 jours par mission.",
      solution:
        "Pipeline RAG sur bases documentaires clients + génération de synthèses structurées.",
      results: ["Production réduite à 2h", "Qualité perçue en hausse"],
      stack: ["LangChain", "Supabase", "Python", "GPT-4o"],
    },
  ],
};

// Placeholders — à remplacer par de vrais témoignages signés (avec accord).
export const testimonials = {
  title: "Ce que disent ceux avec qui j'ai travaillé",
  note: "Témoignages d'exemple — à remplacer par les vrais (avec photo et accord).",
  items: [
    {
      rating: 5,
      quote:
        "En trois semaines, Stéphane a automatisé tout notre traitement de devis. On a gagné une demi-journée par semaine, sans rien casser de notre organisation.",
      name: "Prénom Nom",
      role: "Directrice des opérations · Entreprise",
    },
    {
      rating: 5,
      quote:
        "Enfin quelqu'un qui parle résultats et pas jargon. Le prototype était fonctionnel dès la deuxième semaine. Bluffant.",
      name: "Prénom Nom",
      role: "Fondateur · Startup",
    },
    {
      rating: 5,
      quote:
        "Pédagogue et transparent. Mes équipes ont adopté l'outil sans résistance grâce à la formation incluse.",
      name: "Prénom Nom",
      role: "DSI · PME industrielle",
    },
  ],
};

export const faq = {
  title: "Questions fréquentes",
  items: [
    {
      q: "Est-ce que j'ai besoin de compétences techniques pour travailler avec vous ?",
      a: "Non. Mon rôle est précisément de prendre en charge la complexité technique. Vous exprimez votre besoin métier, je traduis en solution. Vous validez les résultats.",
    },
    {
      q: "Quelle est la différence entre votre agence et ChatGPT ?",
      a: "ChatGPT est un outil. Je construis des systèmes sur-mesure qui intègrent ces outils dans vos process réels, avec vos données, dans votre environnement. C'est la différence entre avoir un marteau et avoir un charpentier.",
    },
    {
      q: "Quels sont vos délais de livraison ?",
      a: "Cela dépend de la complexité du projet. Un audit se fait en 1 semaine. Une implémentation complète prend généralement entre 4 et 8 semaines. Je suis transparent sur les délais dès le devis.",
    },
    {
      q: "Est-ce que mes données sont en sécurité ?",
      a: "Oui. Je travaille uniquement avec des APIs conformes RGPD (Anthropic, OpenAI avec options Enterprise). Toutes les données restent sous votre contrôle. Un accord de confidentialité (NDA) peut être signé avant tout échange.",
    },
    {
      q: "Comment se passe la prise en main par mes équipes ?",
      a: "La formation est incluse dans chaque prestation. Je livre toujours une documentation claire et une session de formation adaptée au niveau de vos équipes.",
    },
    {
      q: "Travaillez-vous uniquement en France ?",
      a: "Je travaille à distance avec des clients en France, Belgique, Suisse et Canada francophone. Les appels se font en visio, les livrables en ligne.",
    },
  ],
};

export const finalCta = {
  title: "Parlons de votre projet IA",
  subtitle:
    "Un appel de 30 minutes suffit pour savoir si je peux vous aider — et comment.",
  reassurance: [
    "Appel 100% gratuit et sans engagement",
    "Réponse garantie sous 24h (jours ouvrés)",
    "Confidentialité assurée",
  ],
  formSectors: [
    "Conseil / Services",
    "E-commerce / Retail",
    "Industrie",
    "Immobilier",
    "Santé",
    "Finance / Assurance",
    "Tech / SaaS",
    "Autre",
  ],
  formSources: [
    "Recherche Google",
    "LinkedIn",
    "Recommandation",
    "Réseaux sociaux",
    "Autre",
  ],
};

export const footer = {
  tagline: "L'IA concrète pour les entreprises qui avancent.",
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Conditions générales de vente", href: "/cgv" },
  ],
};
