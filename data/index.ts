import {MultiLang, Project, ServiceKey} from "@/types";

const createConceptProject = ({
  id,
  slug,
  industry,
  title,
  img,
  imgs,
  services,
  domain,
  productFocus,
  coreWorkflows,
  technicalFocus,
  stacks,
}: {
  id: number;
  slug: string;
  industry: MultiLang;
  title: string;
  img: string;
  imgs: string[];
  services: ServiceKey[];
  domain: MultiLang;
  productFocus: MultiLang;
  coreWorkflows: MultiLang;
  technicalFocus: MultiLang;
  stacks: string[];
}): Project => {
  const name = title.split(" - ")[0];

  return {
    id,
    kind: "concept",
    industry,
    services,
    title,
    img,
    route: `/projects/${slug}`,
    link: "",
    desc: {
      en: `${name} is a ${domain.en} product concept built around ${productFocus.en}. We designed and prototyped it in-house to explore how domain knowledge turns into practical product flows, polished interface states and responsive experiences.`,
      fr: `${name} est un concept de produit ${domain.fr} centré sur ${productFocus.fr}. Nous l'avons conçu et prototypé en interne pour explorer comment la connaissance métier se traduit en parcours produit concrets, états d'interface soignés et expériences responsives.`,
    },
    stacks,
    imgs,
    challenge: {
      en: `The brief: design an end-to-end experience around ${coreWorkflows.en}. The difficulty was balancing domain-specific complexity with a simple interface — making key decisions visible, removing friction from critical steps and keeping the product approachable for first-time and returning users.`,
      fr: `Le brief : concevoir une expérience complète autour de ${coreWorkflows.fr}. La difficulté était d'équilibrer la complexité métier avec une interface simple — rendre les décisions clés visibles, supprimer la friction dans les étapes critiques et garder le produit accessible aux nouveaux comme aux utilisateurs réguliers.`,
    },
    solution: {
      en: `We built the concept with modular React components, typed domain models, reusable form patterns and responsive layouts, with a technical focus on ${technicalFocus.en}. Empty, loading, error and success states were designed as part of the core experience, not as an afterthought.`,
      fr: `Nous avons construit le concept avec des composants React modulaires, des modèles métier typés, des patterns de formulaires réutilisables et des layouts responsives, avec un accent technique sur ${technicalFocus.fr}. Les états vide, chargement, erreur et succès ont été conçus comme une partie centrale de l'expérience, pas comme un détail de dernière minute.`,
    },
    results: {
      en: `A production-style prototype that validates the main user journeys and gives a clear starting point for a real build: a reusable component foundation, defined data models and a complete set of responsive flows. It shows how we approach a new ${domain.en} product, from first idea to working interface.`,
      fr: `Un prototype de qualité production qui valide les principaux parcours utilisateurs et offre un point de départ clair pour une vraie réalisation : une base de composants réutilisables, des modèles de données définis et un ensemble complet de parcours responsives. Il illustre notre approche d'un nouveau produit ${domain.fr}, de l'idée initiale à l'interface fonctionnelle.`,
    },
    stackImg: imgs[1] ?? img,
  };
};

const conceptImages = (slug: string) => [
  `/project-assets/${slug}/cover-retina.webp`,
  `/project-assets/${slug}/detail-1-retina.webp`,
  `/project-assets/${slug}/detail-2-retina.webp`,
  `/project-assets/${slug}/detail-3-retina.webp`,
];

export const projects: { [key: string]: Project } = {
  'immoscout24': {
    id: 1,
    kind: "delivered",
    industry: {en: "Real estate", fr: "Immobilier"},
    services: ["web", "design"],
    title: "Real estate platform in Switzerland to buy and to rent",
    img: "/immo_imgs/immo_banner.webp",
    route: "/projects/immoscout24",
    link: "https://www.immoscout24.ch/en",
    desc: {
      en: "Immoscout24 is a full-stack real estate platform that lets users buy and rent properties across Switzerland. We joined a distributed team of 40+ developers, designers, QA engineers, product owners and managers spread across several European countries, and took ownership of key customer-facing UI built with React and TypeScript.",
      fr: "Immoscout24 est une plateforme immobilière full-stack qui permet d'acheter et de louer des biens partout en Suisse. Nous avons rejoint une équipe distribuée de plus de 40 développeurs, designers, ingénieurs QA, product owners et managers répartis dans plusieurs pays européens, et pris en charge des interfaces clés face aux clients, construites avec React et TypeScript.",
    },
    stacks: ["ReactJs", "Redux", "Styled-Components", "Design System", "Typescript", "Javascript"],
    imgs: ["/immo_imgs/immo_1.webp", "/immo_imgs/immo_2.webp", "/immo_imgs/immo_3.webp", "/immo_imgs/immo_4.webp"],
    challenge: {
      en: "The platform is built by many squads, each owning a domain such as listings, search filters or authentication. The challenge was keeping the experience consistent and scalable across teams sharing one design system, while synchronising complex property-search filters with application state without hurting performance.",
      fr: "La plateforme est construite par de nombreuses squads, chacune responsable d'un domaine comme les annonces, les filtres de recherche ou l'authentification. Le défi était de garder une expérience cohérente et évolutive entre des équipes partageant un même design system, tout en synchronisant des filtres de recherche immobilière complexes avec l'état de l'application sans dégrader les performances.",
    },
    solution: {
      en: "We implemented UI features in ReactJS and TypeScript, translating Figma designs into accessible, responsive components aligned with the shared design system. Redux manages complex state across views and Styled-Components handles styling, on top of NodeJS/ExpressJS APIs and .NET Core (C#) microservices. CI/CD, strict code conventions and regular code reviews kept quality consistent while the product scaled.",
      fr: "Nous avons implémenté des fonctionnalités UI avec ReactJS et TypeScript, en traduisant les designs Figma en composants accessibles et responsifs alignés sur le design system partagé. Redux gère l'état complexe entre les vues et Styled-Components le style, au-dessus d'API NodeJS/ExpressJS et de microservices .NET Core (C#). Le CI/CD, des conventions de code strictes et des revues de code régulières ont maintenu une qualité constante pendant la croissance du produit.",
    },
    results: {
      en: "Reusable, well-typed components that behave consistently across contexts, and responsive search and listing interfaces used by thousands of people. Refactoring shared components and optimising interactive UI gave the squads a more reliable foundation to build on.",
      fr: "Des composants réutilisables et bien typés, au comportement cohérent dans tous les contextes, et des interfaces de recherche et d'annonces responsives utilisées par des milliers de personnes. La refactorisation des composants partagés et l'optimisation de l'UI interactive ont donné aux squads une base plus fiable.",
    },
    stackImg: "/immo_stack.png"
  },
  'prettcf': {
    id: 2,
    kind: "delivered",
    industry: {en: "Education", fr: "Éducation"},
    services: ["web", "design"],
    title: "The platform to practice the French exam: TCF Canada",
    img: "/prettcf_imgs/prettcf_banner.webp",
    route: "/projects/prettcf",
    link: "https://prettcf.com/",
    desc: {
      en: "Prettcf.com is an online platform that helps French learners practise for the TCF Canada exam. We designed and developed it end to end, with a focus on user experience and custom functionality.",
      fr: "Prettcf.com est une plateforme en ligne qui aide les apprenants de français à s'entraîner pour l'examen TCF Canada. Nous l'avons conçue et développée de bout en bout, en mettant l'accent sur l'expérience utilisateur et les fonctionnalités sur mesure.",
    },
    stacks: ["JavaScript", "PHP", "SASS", "Laravel"],
    imgs: ["/prettcf_imgs/prettcf_1.webp", "/prettcf_imgs/prettcf_2.webp", "/prettcf_imgs/prettcf_3.webp", "/prettcf_imgs/prettcf_4.webp"],
    challenge: {
      en: "French learners needed a friendly, accessible way to experience real TCF Canada test formats and track their progress over time. The challenge was balancing performance with a rich interface and dynamic data, while keeping the experience consistent across devices.",
      fr: "Les apprenants de français avaient besoin d'un moyen convivial et accessible de découvrir les vrais formats du TCF Canada et de suivre leur progression. Le défi était de concilier performance, interface riche et données dynamiques, tout en gardant une expérience cohérente sur tous les appareils.",
    },
    solution: {
      en: "We built a fully custom platform with Laravel and PHP, with SASS for clean, scalable styling. Complex interactions and data flows are handled by custom logic, and the interface was tested and optimised across devices for performance, flexibility and a smooth experience.",
      fr: "Nous avons construit une plateforme entièrement sur mesure avec Laravel et PHP, et SASS pour un style propre et évolutif. Les interactions et flux de données complexes reposent sur une logique personnalisée, et l'interface a été testée et optimisée sur tous les appareils pour la performance, la flexibilité et la fluidité.",
    },
    results: {
      en: "A live platform where learners can practise realistic exam formats and follow their progress. The project covered scalable, high-performance interfaces end to end — from UI/UX design through to full-stack implementation.",
      fr: "Une plateforme en ligne où les apprenants s'entraînent sur des formats d'examen réalistes et suivent leur progression. Le projet a couvert des interfaces évolutives et performantes de bout en bout — du design UI/UX à l'implémentation full-stack.",
    },
    stackImg: "/prettcf_stack.png"
  },
  'datvangphuquoc': {
    id: 3,
    kind: "delivered",
    industry: {en: "Real estate", fr: "Immobilier"},
    services: ["web", "design"],
    title: "The real estate e-commerce platform of Phu Quoc island, Vietnam",
    img: "/p2.svg",
    route: "/projects/datvangphuquoc",
    link: "https://datvangphuquoc.com/",
    desc: {
      en: "Datvangphuquoc.com is a real estate e-commerce platform for Phu Quoc island, Vietnam, built with React.js to deliver a fast, user-friendly experience. We designed and developed it independently, focusing on performance, scalability and fully custom features.",
      fr: "Datvangphuquoc.com est une plateforme e-commerce immobilière pour l'île de Phu Quoc, au Vietnam, développée avec React.js pour offrir une expérience rapide et fluide. Nous l'avons conçue et développée de manière indépendante, en mettant l'accent sur la performance, l'évolutivité et des fonctionnalités entièrement sur mesure.",
    },
    stacks: ["ReactJs", "Next.js", "Node.js", "SASS", "Typescript", "Javascript"],
    imgs: ["/p2.svg", "/p2.svg", "/p2.svg", "/p2.svg"],
    challenge: {
      en: "The goal was a modern platform to showcase real estate opportunities in Phu Quoc, where visitors can easily explore properties, view key information and browse listings smoothly. The challenge was delivering rich, custom features while keeping the site fast and consistent across devices.",
      fr: "L'objectif était une plateforme moderne pour présenter les opportunités immobilières de Phu Quoc, où les visiteurs explorent facilement les biens, consultent les informations clés et parcourent les annonces de façon fluide. Le défi était de proposer des fonctionnalités riches et sur mesure tout en gardant un site rapide et cohérent sur tous les appareils.",
    },
    solution: {
      en: "We built the platform with React.js, Next.js and Node.js, with SASS for clean, scalable styling, and structured a clean frontend architecture focused on performance, flexibility and a smooth user experience.",
      fr: "Nous avons développé la plateforme avec React.js, Next.js et Node.js, avec SASS pour un style propre et évolutif, et structuré une architecture frontend claire axée sur la performance, la flexibilité et une expérience utilisateur fluide.",
    },
    results: {
      en: "A fast, scalable platform with a clean frontend architecture and fully custom features, plus a solid foundation for future listings and functionality. Full-stack responsibilities were handled end to end with Node.js.",
      fr: "Une plateforme rapide et évolutive, dotée d'une architecture frontend propre et de fonctionnalités entièrement sur mesure, avec une base solide pour les futures annonces et fonctionnalités. Les responsabilités full-stack ont été assurées de bout en bout avec Node.js.",
    },
    stackImg: "/p2.svg"
  },
  'nestscout': createConceptProject({
    id: 4,
    slug: "nestscout",
    industry: {en: "Real estate", fr: "Immobilier"},
    title: "NestScout - Real estate search and neighborhood intelligence",
    img: conceptImages("nestscout")[0],
    imgs: conceptImages("nestscout"),
    services: ["web", "design"],
    domain: {en: "real estate", fr: "immobilier"},
    productFocus: {
      en: "property discovery, listing comparison, mortgage context, neighborhood research and agent contact flows",
      fr: "la découverte de biens, la comparaison d'annonces, le contexte hypothécaire, la recherche de quartiers et les parcours de contact avec les agents",
    },
    coreWorkflows: {
      en: "searching homes, comparing listings, exploring neighborhoods on a map, saving alerts and contacting an agent",
      fr: "la recherche de logements, la comparaison d'annonces, l'exploration des quartiers sur une carte, les alertes enregistrées et le contact avec un agent",
    },
    technicalFocus: {
      en: "geospatial search, filter synchronization, image-heavy listing performance, saved search state and mobile-first inquiry flows",
      fr: "la recherche géospatiale, la synchronisation des filtres, la performance des annonces riches en images, l'état des recherches enregistrées et les parcours de demande mobile-first",
    },
    stacks: ["Next.js", "React", "TypeScript", "Mapbox", "Tailwind CSS", "Zustand"],
  }),
  'finharbor': createConceptProject({
    id: 5,
    slug: "finharbor",
    industry: {en: "Finance", fr: "Finance"},
    title: "FinHarbor - Banking, investing, and budget planning",
    img: conceptImages("finharbor")[0],
    imgs: conceptImages("finharbor"),
    services: ["web", "design"],
    domain: {en: "finance", fr: "financier"},
    productFocus: {
      en: "personal banking, card controls, budgeting, investment allocation, recurring payments and secure transfer flows",
      fr: "la banque personnelle, le contrôle des cartes, la budgétisation, l'allocation d'investissements, les paiements récurrents et les virements sécurisés",
    },
    coreWorkflows: {
      en: "checking account balances, planning budgets, reviewing portfolio risk, scheduling transfers and confirming payments safely",
      fr: "la consultation des soldes, la planification budgétaire, l'analyse du risque du portefeuille, la planification de virements et la confirmation sécurisée des paiements",
    },
    technicalFocus: {
      en: "secure form handling, transaction state machines, currency formatting, chart interactions and high-trust UI feedback",
      fr: "la gestion sécurisée des formulaires, les machines à états des transactions, le formatage des devises, les graphiques interactifs et un retour d'interface rassurant",
    },
    stacks: ["React", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind CSS", "Node.js"],
  }),
  'roamly': createConceptProject({
    id: 6,
    slug: "roamly",
    industry: {en: "Tourism", fr: "Tourisme"},
    title: "Roamly - Travel planning and local experience booking",
    img: conceptImages("roamly")[0],
    imgs: conceptImages("roamly"),
    services: ["web", "design"],
    domain: {en: "tourism", fr: "touristique"},
    productFocus: {
      en: "destination discovery, itinerary planning, tour booking, travel documents and offline trip assistance",
      fr: "la découverte de destinations, la planification d'itinéraires, la réservation de circuits, les documents de voyage et l'assistance hors ligne",
    },
    coreWorkflows: {
      en: "discovering destinations, building a trip timeline, booking stays and activities and using a mobile travel companion",
      fr: "la découverte de destinations, la construction d'un itinéraire, la réservation d'hébergements et d'activités et l'usage d'un compagnon de voyage mobile",
    },
    technicalFocus: {
      en: "content-rich search, itinerary drag and drop, booking checkout validation, localized recommendations and offline-ready mobile screens",
      fr: "la recherche riche en contenu, le glisser-déposer d'itinéraires, la validation du paiement, les recommandations localisées et des écrans mobiles utilisables hors ligne",
    },
    stacks: ["Next.js", "React", "TypeScript", "ElasticSearch", "Stripe", "Tailwind CSS"],
  }),
  'matchpulse': createConceptProject({
    id: 7,
    slug: "matchpulse",
    industry: {en: "Sports", fr: "Sport"},
    title: "MatchPulse - Sports club, booking, and coaching platform",
    img: conceptImages("matchpulse")[0],
    imgs: conceptImages("matchpulse"),
    services: ["web", "design"],
    domain: {en: "sport", fr: "sportif"},
    productFocus: {
      en: "club schedules, match centers, court booking, athlete training plans, coaching feedback and community engagement",
      fr: "les calendriers de club, les centres de matchs, la réservation de terrains, les plans d'entraînement, les retours des coachs et l'animation de la communauté",
    },
    coreWorkflows: {
      en: "following live matches, booking courts, reviewing player stats, completing training drills and receiving coach feedback",
      fr: "le suivi des matchs en direct, la réservation de terrains, la consultation des statistiques des joueurs, les exercices d'entraînement et les retours des coachs",
    },
    technicalFocus: {
      en: "real-time score updates, booking availability, video-driven training content, wearable data visualization and mobile match interactions",
      fr: "les scores en temps réel, la disponibilité des réservations, les contenus d'entraînement vidéo, la visualisation des données de capteurs portables et les interactions mobiles pendant les matchs",
    },
    stacks: ["React", "TypeScript", "Socket.IO", "Node.js", "Tailwind CSS", "PostgreSQL"],
  }),
  'skillnest': createConceptProject({
    id: 8,
    slug: "skillnest",
    industry: {en: "Education", fr: "Éducation"},
    title: "SkillNest - Course marketplace and interactive learning platform",
    img: conceptImages("skillnest")[0],
    imgs: conceptImages("skillnest"),
    services: ["web", "design"],
    domain: {en: "education", fr: "éducatif"},
    productFocus: {
      en: "course discovery, lesson playback, quizzes, coding exercises, learning streaks and mentor communication",
      fr: "la découverte de cours, la lecture des leçons, les quiz, les exercices de code, les séries d'apprentissage et les échanges avec les mentors",
    },
    coreWorkflows: {
      en: "finding a course, watching lessons, taking notes, submitting exercises, checking progress and messaging mentors",
      fr: "la recherche d'un cours, le visionnage des leçons, la prise de notes, la soumission d'exercices, le suivi de la progression et la messagerie avec les mentors",
    },
    technicalFocus: {
      en: "lesson state persistence, quiz scoring, interactive exercise feedback, progress tracking and accessible media controls",
      fr: "la persistance de l'état des leçons, le calcul des scores de quiz, le retour interactif sur les exercices, le suivi de la progression et des contrôles média accessibles",
    },
    stacks: ["Next.js", "React", "TypeScript", "SASS", "Node.js", "PostgreSQL"],
  }),
  'caretrail': createConceptProject({
    id: 9,
    slug: "caretrail",
    industry: {en: "Healthcare", fr: "Santé"},
    title: "CareTrail - Patient portal and telehealth care companion",
    img: conceptImages("caretrail")[0],
    imgs: conceptImages("caretrail"),
    services: ["web", "design"],
    domain: {en: "healthcare", fr: "de santé"},
    productFocus: {
      en: "appointments, telehealth visits, medication schedules, medical records, lab results and care team communication",
      fr: "les rendez-vous, les consultations en télésanté, les rappels de médicaments, les dossiers médicaux, les résultats de laboratoire et la communication avec l'équipe soignante",
    },
    coreWorkflows: {
      en: "booking appointments, joining a video visit, reviewing records, tracking medication and sharing documents securely",
      fr: "la prise de rendez-vous, la participation à une consultation vidéo, la consultation des dossiers, le suivi des médicaments et le partage sécurisé de documents",
    },
    technicalFocus: {
      en: "privacy-first information architecture, appointment state, secure document access, video call UI and sensitive-data form validation",
      fr: "une architecture de l'information axée sur la confidentialité, l'état des rendez-vous, l'accès sécurisé aux documents, l'interface d'appel vidéo et la validation de formulaires contenant des données sensibles",
    },
    stacks: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind CSS", "Prisma"],
  }),
  'routeforge': createConceptProject({
    id: 10,
    slug: "routeforge",
    industry: {en: "Logistics", fr: "Logistique"},
    title: "RouteForge - Shipment tracking and dispatch operations",
    img: conceptImages("routeforge")[0],
    imgs: conceptImages("routeforge"),
    services: ["web", "consulting"],
    domain: {en: "logistics", fr: "logistique"},
    productFocus: {
      en: "shipment tracking, route optimization, warehouse picking, courier workflows and proof of delivery",
      fr: "le suivi des expéditions, l'optimisation des tournées, la préparation en entrepôt, les parcours des livreurs et la preuve de livraison",
    },
    coreWorkflows: {
      en: "tracking shipments, assigning drivers, resolving route exceptions, picking inventory and capturing delivery confirmation",
      fr: "le suivi des expéditions, l'affectation des chauffeurs, la résolution des exceptions de tournée, la préparation des commandes et la confirmation de livraison",
    },
    technicalFocus: {
      en: "map-heavy operations UI, optimistic updates for status changes, offline courier states, scan flows and exception handling",
      fr: "les interfaces d'exploitation riches en cartes, les mises à jour optimistes des statuts, les états hors ligne des livreurs, les parcours de scan et la gestion des exceptions",
    },
    stacks: ["React", "TypeScript", "Mapbox", "Node.js", "Express", "Tailwind CSS"],
  }),
  'biteway': createConceptProject({
    id: 11,
    slug: "biteway",
    industry: {en: "Food delivery", fr: "Livraison de repas"},
    title: "BiteWay - Restaurant discovery and delivery marketplace",
    img: conceptImages("biteway")[0],
    imgs: conceptImages("biteway"),
    services: ["web", "design"],
    domain: {en: "food delivery", fr: "de livraison de repas"},
    productFocus: {
      en: "restaurant discovery, menu customization, checkout, courier tracking, support chat and partner order management",
      fr: "la découverte de restaurants, la personnalisation des menus, le paiement, le suivi des livreurs, le chat avec le support et la gestion des commandes côté partenaires",
    },
    coreWorkflows: {
      en: "finding food, customizing dishes, placing an order, tracking delivery, contacting support and managing incoming restaurant orders",
      fr: "la recherche de plats, la personnalisation des plats, la commande, le suivi de la livraison, le contact avec le support et la gestion des commandes entrantes côté restaurant",
    },
    technicalFocus: {
      en: "menu option modeling, cart state, real-time order tracking, merchant tablet UI, promotion logic and responsive checkout",
      fr: "la modélisation des options de menu, l'état du panier, le suivi des commandes en temps réel, l'interface tablette pour les marchands, la logique promotionnelle et un paiement responsive",
    },
    stacks: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Stripe", "Socket.IO"],
  }),
  'greengrid': createConceptProject({
    id: 12,
    slug: "greengrid",
    industry: {en: "Energy & sustainability", fr: "Énergie et durabilité"},
    title: "GreenGrid - Home energy and sustainability platform",
    img: conceptImages("greengrid")[0],
    imgs: conceptImages("greengrid"),
    services: ["web", "consulting"],
    domain: {en: "sustainability and energy", fr: "de durabilité et d'énergie"},
    productFocus: {
      en: "solar production, battery state, smart home energy usage, carbon reporting, rebates and a green upgrade marketplace",
      fr: "la production solaire, l'état des batteries, la consommation énergétique du foyer, le reporting carbone, les aides financières et une place de marché de rénovations vertes",
    },
    coreWorkflows: {
      en: "monitoring energy usage, comparing appliance insights, finding rebates, planning upgrades and responding to outage or usage alerts",
      fr: "le suivi de la consommation d'énergie, la comparaison des appareils, la recherche d'aides, la planification des travaux et la réaction aux alertes de panne ou de consommation",
    },
    technicalFocus: {
      en: "time-series energy data, smart-device cards, recommendation flows, geospatial community energy views and alert preferences",
      fr: "les données énergétiques en séries temporelles, les cartes d'appareils connectés, les parcours de recommandation, les vues géospatiales de la communauté énergétique et les préférences d'alerte",
    },
    stacks: ["React", "TypeScript", "D3", "Node.js", "Tailwind CSS", "PostgreSQL"],
  }),
  'studiowave': createConceptProject({
    id: 13,
    slug: "studiowave",
    industry: {en: "Creator media", fr: "Médias créateurs"},
    title: "StudioWave - Podcast, video, and creator publishing studio",
    img: conceptImages("studiowave")[0],
    imgs: conceptImages("studiowave"),
    services: ["web", "design"],
    domain: {en: "creator media", fr: "de médias pour créateurs"},
    productFocus: {
      en: "podcast production, waveform editing, transcripts, publishing queues, memberships, sponsor briefs and audience community",
      fr: "la production de podcasts, l'édition de formes d'onde, les transcriptions, les files de publication, les abonnements, les briefs de sponsors et la communauté d'audience",
    },
    coreWorkflows: {
      en: "recording content, editing audio, creating clips, scheduling publishing, managing community comments and reviewing sponsor tasks",
      fr: "l'enregistrement de contenus, le montage audio, la création d'extraits, la planification des publications, la gestion des commentaires et le suivi des tâches de sponsors",
    },
    technicalFocus: {
      en: "media timeline UI, transcript synchronization, upload status, collaborative content calendars and creator-focused mobile recording flows",
      fr: "l'interface de timeline média, la synchronisation des transcriptions, l'état des téléversements, les calendriers éditoriaux collaboratifs et les parcours d'enregistrement mobile pour les créateurs",
    },
    stacks: ["Next.js", "React", "TypeScript", "Web Audio API", "OpenAI API", "Tailwind CSS"],
  }),
}

export const getProject = (slug: string): Project | undefined =>
  Object.prototype.hasOwnProperty.call(projects, slug) ? projects[slug] : undefined;
