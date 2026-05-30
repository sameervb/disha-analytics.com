export type Language = 'en' | 'fr' | 'de' | 'lb'

export const languageNames: Record<Language, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
  lb: 'LB',
}

export const languageLabels: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  lb: 'Lëtzebuergesch',
}

// ─── Translation Shape ────────────────────────────────────────────────────────

type DeepString<Obj> = {
  [K in keyof Obj]: Obj[K] extends string ? string : DeepString<Obj[K]>
}

export type T = DeepString<typeof en>

// ─── English ─────────────────────────────────────────────────────────────────

export const en = {
  nav: {
    howItWorks: 'How it works',
    whatYouGet: 'What you get',
    pricing: 'Pricing',
    contact: 'Contact',
    cta: 'Get in touch',
  },
  hero: {
    tag: 'AI Restaurant Intelligence Platform',
    headline1: 'Your POS tracks every sale.',
    headline2: 'Disha tells you why some never happen.',
    subheadline:
      'You already have data — a POS, reviews, an accountant. What you don\'t have is synthesis: someone connecting your delivery review patterns to your competitor\'s pricing to your menu margins and telling you exactly what to change. Disha does that automatically. In under 5 minutes.',
    cta1: 'See how it works',
    cta2: 'Get in touch',
    stat1value: '5 min',
    stat1label: 'Full intelligence report',
    stat2value: '8',
    stat2label: 'Public data sources scanned',
    stat3value: '6',
    stat3label: 'AI specialist agents',
  },
  productIntro: {
    label: 'What Disha is',
    headline: 'Decisions, not dashboards.',
    body1:
      'Toast tells you what sold. Lightspeed tells you your covers. Your accountant tells you last quarter\'s numbers. None of them tell you that your nearest competitor cut their lunch pricing last month, that 22% of your delivery reviews mention cold food specifically on weekend evenings, or that your main courses are priced €3 below the market average for your cuisine in this city.',
    body2:
      'Disha reads 8 public sources — reviews across every major platform, competitor menus and pricing, local market signals — runs 6 specialist AI agents, and produces a ranked action plan backed by evidence you can verify. Every recommendation traces to a specific source. Every financial estimate shows its assumptions. You decide what to act on.',
    link: 'See the 4-step process',
    mockupInternalLabel: 'Analyst view',
    mockupOwnerLabel: 'Owner view',
    mockupInternalTitle: 'Internal Intelligence Report',
    mockupOwnerTitle: 'Your Action Plan',
    mockupOwnerSubtitle: '3 things to act on this week',
    mockupAction1: 'Fix delivery packaging — cold food in 22% of delivery reviews is suppressing your Wolt ranking.',
    mockupAction2: 'Review your lunch pricing — mains are €3 below the local market average for your cuisine type.',
    mockupAction3: 'Promote your top-rated dish — it appears in 31% of praised reviews but sits mid-menu.',
  },
  problem: {
    label: 'Where the gap actually is',
    headline1: 'The data exists.',
    headline2: 'It just doesn\'t connect.',
    subheadline:
      'Restaurant operators use more tools than ever. The problem is none of them talk to each other — and none of them read what\'s happening outside your restaurant.',
    card1title: 'Fragmented signals, no synthesis',
    card1body:
      'Your POS shows revenue. Your review platform shows ratings. Your accountant shows costs. Nobody connects them to tell you: delivery revenue is down because two low-rated reviews about cold food are suppressing your Wolt ranking. That synthesis is the missing piece.',
    card2title: 'Internal tools have an external blind spot',
    card2body:
      'Toast and Lightspeed see inside your restaurant. They don\'t know your competitor launched a lunch deal that undercuts yours by €4. They don\'t know your price positioning sits in the bottom quartile for your cuisine category in this city. External market intelligence is not in your POS — and it has to be.',
    card3title: 'By the time you see the problem, it\'s expensive',
    card3body:
      'The signals that predict margin erosion — review patterns, competitive pricing shifts, menu mix changes — are all public and readable months before the P&L reflects the damage. Disha reads them systematically so you don\'t have to wait for the quarterly report to find out.',
  },
  howItWorks: {
    label: 'How it works',
    headline1: 'From restaurant name to ranked action plan',
    headline2: 'in under 5 minutes.',
    step1n: '01',
    step1title: 'Submit your restaurant',
    step1body:
      'Enter the restaurant name and city. That\'s it. No spreadsheets, no integrations, no setup. Disha handles the research from there.',
    step2n: '02',
    step2title: 'Disha scans 8 sources',
    step2body:
      'Google Reviews, TripAdvisor, TheFork, Wolt, your website, competitor menus, local market data, and sector benchmarks — collected and structured automatically.',
    step3n: '03',
    step3title: 'Six specialist agents analyse',
    step3body:
      'Separate agents examine reviews, competitor positioning, menu and pricing, and financial signals independently. A synthesis agent connects their outputs into a coherent diagnosis — with every claim typed by confidence: observed, estimated, inferred, or validated. Upload POS data to convert market estimates into validated financial claims.',
    step4n: '04',
    step4title: 'You receive a ranked action plan',
    step4body:
      'Not a dashboard to interpret. A structured report: what is happening, why, and what to do about it — in order of expected impact. Each action traces to specific evidence. You verify the hypothesis, run the experiment, and track whether it worked.',
  },
  capabilities: {
    label: 'What\'s in the report',
    headline1: 'Six intelligence dimensions.',
    headline2: 'One decision-ready report.',
    subheadline:
      'Every section is designed to produce a specific action — not an observation that requires another layer of interpretation.',
    cap1title: 'Review intelligence',
    cap1body:
      'Systematic analysis of your full review corpus across all platforms. Not sentiment scores — specific operational signals. Spice inconsistency affecting delivery but not dine-in. Weekend service speed complaints at a specific location. Patterns you cannot identify by reading reviews one at a time.',
    cap2title: 'Competitive intelligence',
    cap2body:
      'Your 8 nearest competitors mapped by cuisine, price tier, rating, and review volume. Pricing gaps between you and the market. Positioning spaces your competitors are not occupying. Menu categories where you are under- or over-indexed relative to demand.',
    cap3title: 'Menu and pricing analysis',
    cap3body:
      'Your price positioning relative to market averages for your cuisine type and city. High-demand dishes, margin risk by category, and underpriced items identified against competitor menus. Menu engineering outputs that normally take a consultant two days.',
    cap4title: 'Financial signal intelligence',
    cap4body:
      'Structural profit drivers and loss patterns surfaced from public signals — pricing relative to cost benchmarks, discount behaviour, review-to-revenue correlations. When you add POS or cost data, estimates become validated claims. Every financial hypothesis shows its assumptions explicitly.',
    cap5title: 'Ranked action plan',
    cap5body:
      'Every finding converts into a specific action ranked by expected impact. Each action includes an effort estimate, a time horizon, the evidence behind it, and a definition of success. Not a list of things to consider — a prioritised to-do list grounded in data.',
    cap6title: '30-day experiments',
    cap6body:
      'Low-risk, testable changes designed for in-house execution. Each with a clear hypothesis, success metric, and follow-up mechanism. Run one primary experiment at a time so results are attributable. Disha tracks whether you ran them and whether outcomes changed.',
  },
  pricing: {
    label: 'Pricing',
    headline: 'Built for restaurant margins.',
    subheadline:
      'Our first pilot identified over €200,000 in structural losses accumulated over five years at a restaurant with a 4.6-star Google rating — visible in public data the whole time, missed by their POS, their accountant, and their owner. The Growth plan costs €129 a month.',
    recommended: 'Recommended',
    perMonth: '/mo',
    getStarted: 'Get started',
    tier1name: 'Starter',
    tier1price: '79',
    tier1desc: 'For operators who want a monthly market pulse.',
    tier1f1: 'Monthly intelligence report',
    tier1f2: '4 competitor benchmarks',
    tier1f3: 'PDF download and email delivery',
    tier1f4: 'Review intelligence across major platforms',
    tier2name: 'Growth',
    tier2price: '129',
    tier2desc: 'For operators actively working on margins and positioning.',
    tier2f1: 'Weekly refresh',
    tier2f2: 'Menu pricing alerts',
    tier2f3: 'Action priority list',
    tier2f4: '8 competitors tracked',
    tier2f5: 'Owner walkthrough mode',
    tier3name: 'Multi-Location',
    tier3price: '199',
    tier3desc: 'For groups managing up to 3 locations.',
    tier3f1: 'Up to 3 locations',
    tier3f2: 'Cross-location comparison',
    tier3f3: 'Market share analysis',
    tier3f4: 'POS data integration',
    grantHeadline: 'Want us to run the experiments for you?',
    grantBody:
      'Our complete implementation packages include hands-on consulting, guided owner sessions, and experiment management — not just the software. Standard (€2,999) and Full Intelligence (€4,999) packages qualify for 70–100% SME digitalisation grants via Fit 4 Digital. Most operators pay under €1,500 out of pocket.',
    grantCta: 'Ask about grants',
  },
  contact: {
    label: 'Get in touch',
    headline: 'Start with a conversation.',
    body:
      'We\'re running a pilot with Luxembourg restaurants. If you\'d like an intelligence report run on your restaurant, reach out directly. No form, no wait.',
    callLabel: 'Call',
    emailLabel: 'Email',
    footerNote: 'Typically respond within 24 hours.',
  },
  footer: {
    tagline: 'Restaurant Intelligence · Luxembourg',
    howItWorks: 'How it works',
    whatYouGet: 'What you get',
    pricing: 'Pricing',
    contact: 'Contact',
    partnerships: 'Partnerships',
    copyright: 'Disha Analytics · Luxembourg · All rights reserved',
    builtBy: 'Built by Sameer Bhalerao',
  },
  institutions: {
    label: 'For institutions',
    headline: 'Built for the Luxembourg ecosystem.',
    subheadline:
      'Disha plugs into existing advisory channels rather than competing with them. We turn your referral relationships into measurable digital transformation outcomes for your members.',
    partner1name: 'House of Entrepreneurship',
    partner1role: 'Referral and grant channel',
    partner1body:
      'Refer restaurant owner members to Disha as a certified AI intelligence tool. Grant eligibility is pre-mapped to existing SMB digitalisation programmes.',
    partner2name: 'Chamber of Commerce',
    partner2role: 'Sector intelligence partner',
    partner2body:
      'Co-author aggregated sector intelligence reports across 10–15 Luxembourg restaurants. Published under the Chamber\'s name — valuable content for members and policymakers at zero cost.',
    partner3name: 'Luxinnovation / Ministry of Economy',
    partner3role: 'Policy and digital transformation',
    partner3body:
      'Disha provides concrete, auditable evidence of AI adoption at the SMB level, aligned with Luxembourg\'s digital economy strategy and the Fit 4 Digital programme.',
    askHeadline: 'What we\'re asking for',
    ask1title: 'Access to members',
    ask1body: '5 restaurant pilot participants from your network — any cuisine, any size.',
    ask2title: 'Presentation slot',
    ask2body: '30 minutes at a member event to demonstrate a live report.',
    ask3title: 'Co-branding',
    ask3body: 'Your name on the sector intelligence report. No budget required.',
    ctaLabel: 'Get in touch',
    backToSite: 'Back to Disha',
  },
} as const

// ─── French ──────────────────────────────────────────────────────────────────

export const fr: T = {
  nav: {
    howItWorks: 'Comment ça marche',
    whatYouGet: 'Ce que vous obtenez',
    pricing: 'Tarifs',
    contact: 'Contact',
    cta: 'Nous contacter',
  },
  hero: {
    tag: 'Plateforme d\'intelligence IA pour restaurants',
    headline1: 'Votre caisse enregistre chaque vente.',
    headline2: 'Disha vous dit pourquoi certaines n\'ont pas lieu.',
    subheadline:
      'Vous avez déjà des données — une caisse, des avis, un comptable. Ce qui vous manque, c\'est la synthèse : quelqu\'un qui relie vos tendances d\'avis de livraison aux tarifs de vos concurrents et à vos marges de menu, pour vous dire exactement quoi changer. Disha le fait automatiquement. En moins de 5 minutes.',
    cta1: 'Voir comment ça marche',
    cta2: 'Nous contacter',
    stat1value: '5 min',
    stat1label: 'Rapport d\'intelligence complet',
    stat2value: '8',
    stat2label: 'Sources publiques analysées',
    stat3value: '6',
    stat3label: 'Agents IA spécialistes',
  },
  productIntro: {
    label: 'Ce qu\'est Disha',
    headline: 'Des décisions, pas des tableaux de bord.',
    body1:
      'Toast vous dit ce qui s\'est vendu. Lightspeed vous indique vos couverts. Votre comptable vous donne les chiffres du trimestre passé. Aucun d\'eux ne vous dit que votre concurrent le plus proche a baissé ses prix du déjeuner le mois dernier, que 22 % de vos avis de livraison mentionnent des plats froids spécifiquement les soirs de week-end, ou que vos plats principaux sont tarifés €3 en dessous de la moyenne du marché pour votre type de cuisine dans cette ville.',
    body2:
      'Disha lit 8 sources publiques — avis sur toutes les grandes plateformes, menus et prix des concurrents, signaux du marché local — fait tourner 6 agents IA spécialisés et produit un plan d\'action classé, étayé par des preuves que vous pouvez vérifier. Chaque recommandation remonte à une source précise. Chaque estimation financière montre ses hypothèses. Vous décidez de ce sur quoi agir.',
    link: 'Voir le processus en 4 étapes',
    mockupInternalLabel: 'Vue analyste',
    mockupOwnerLabel: 'Vue propriétaire',
    mockupInternalTitle: 'Rapport d\'intelligence interne',
    mockupOwnerTitle: 'Votre plan d\'action',
    mockupOwnerSubtitle: '3 actions pour cette semaine',
    mockupAction1: 'Corriger l\'emballage de livraison — les plats froids dans 22 % des avis de livraison pénalisent votre classement Wolt.',
    mockupAction2: 'Revoir vos prix du déjeuner — vos plats principaux sont €3 en dessous de la moyenne du marché local.',
    mockupAction3: 'Mettre en avant votre plat le mieux noté — il apparaît dans 31 % des avis positifs mais est placé au milieu du menu.',
  },
  problem: {
    label: 'Où se situe vraiment le fossé',
    headline1: 'Les données existent.',
    headline2: 'Elles ne communiquent tout simplement pas.',
    subheadline:
      'Les restaurateurs utilisent plus d\'outils que jamais. Le problème, c\'est qu\'aucun ne communique avec les autres — et qu\'aucun ne lit ce qui se passe en dehors de votre restaurant.',
    card1title: 'Des signaux fragmentés, aucune synthèse',
    card1body:
      'Votre caisse montre le chiffre d\'affaires. Votre plateforme d\'avis montre les notes. Votre comptable montre les coûts. Personne ne les relie pour vous dire : les revenus de livraison baissent parce que deux avis négatifs sur les plats froids pénalisent votre classement sur Wolt. Cette synthèse est la pièce manquante.',
    card2title: 'Les outils internes ont un angle mort externe',
    card2body:
      'Toast et Lightspeed voient l\'intérieur de votre restaurant. Ils ne savent pas que votre concurrent a lancé une offre déjeuner qui vous sous-coupe de €4. Ils ne savent pas que votre positionnement tarifaire se situe dans le dernier quartile pour votre catégorie de cuisine dans cette ville. L\'intelligence de marché externe n\'est pas dans votre caisse — et elle doit l\'être.',
    card3title: 'Quand vous voyez le problème, il est déjà coûteux',
    card3body:
      'Les signaux qui prédisent l\'érosion des marges — tendances des avis, évolutions des prix concurrents, changements de mix de menu — sont tous publics et lisibles des mois avant que le compte de résultat s\'en ressente. Disha les lit systématiquement pour que vous n\'ayez pas à attendre le rapport trimestriel.',
  },
  howItWorks: {
    label: 'Comment ça marche',
    headline1: 'Du nom du restaurant à un plan d\'action classé',
    headline2: 'en moins de 5 minutes.',
    step1n: '01',
    step1title: 'Soumettez votre restaurant',
    step1body:
      'Entrez le nom du restaurant et la ville. C\'est tout. Pas de tableurs, pas d\'intégrations, pas de configuration. Disha s\'occupe de la recherche à partir de là.',
    step2n: '02',
    step2title: 'Disha scanne 8 sources',
    step2body:
      'Google Avis, TripAdvisor, TheFork, Wolt, votre site web, les menus des concurrents, les données du marché local et les benchmarks sectoriels — collectés et structurés automatiquement.',
    step3n: '03',
    step3title: 'Six agents spécialistes analysent',
    step3body:
      'Des agents distincts examinent les avis, le positionnement concurrentiel, le menu et les prix, et les signaux financiers de manière indépendante. Un agent de synthèse connecte leurs résultats en un diagnostic cohérent — chaque affirmation étant typée par niveau de confiance : observée, estimée, inférée ou validée. Téléchargez des données de caisse pour convertir les estimations de marché en affirmations validées.',
    step4n: '04',
    step4title: 'Vous recevez un plan d\'action classé',
    step4body:
      'Pas un tableau de bord à interpréter. Un rapport structuré : ce qui se passe, pourquoi, et quoi faire — par ordre d\'impact attendu. Chaque action remonte à des preuves spécifiques. Vous vérifiez l\'hypothèse, menez l\'expérience et suivez si ça a fonctionné.',
  },
  capabilities: {
    label: 'Ce que contient le rapport',
    headline1: 'Six dimensions d\'intelligence.',
    headline2: 'Un rapport prêt à l\'emploi.',
    subheadline:
      'Chaque section est conçue pour produire une action spécifique — et non une observation qui nécessite une autre couche d\'interprétation.',
    cap1title: 'Intelligence des avis',
    cap1body:
      'Analyse systématique de l\'ensemble de vos avis sur toutes les plateformes. Pas des scores de sentiment — des signaux opérationnels précis. Incohérence des épices affectant la livraison mais pas le service en salle. Plaintes sur la vitesse de service le week-end soir. Des tendances impossibles à identifier en lisant les avis un par un.',
    cap2title: 'Intelligence concurrentielle',
    cap2body:
      'Vos 8 concurrents les plus proches mappés par cuisine, niveau de prix, note et volume d\'avis. Écarts de prix entre vous et le marché. Espaces de positionnement que vos concurrents n\'occupent pas. Catégories de menu où vous êtes sous- ou sur-indexé par rapport à la demande.',
    cap3title: 'Analyse du menu et des prix',
    cap3body:
      'Votre positionnement tarifaire par rapport aux moyennes du marché pour votre type de cuisine et votre ville. Plats à forte demande, risque de marge par catégorie et articles sous-tarifés identifiés par rapport aux menus des concurrents. Des résultats d\'ingénierie de menu qui prennent normalement deux jours à un consultant.',
    cap4title: 'Intelligence des signaux financiers',
    cap4body:
      'Moteurs de profit structurels et tendances de perte révélés à partir de signaux publics — tarification par rapport aux benchmarks de coûts, comportement de remise, corrélations avis-chiffre d\'affaires. Quand vous ajoutez des données de caisse ou de coûts, les estimations deviennent des affirmations validées.',
    cap5title: 'Plan d\'action classé',
    cap5body:
      'Chaque constat se convertit en une action spécifique classée par impact attendu. Chaque action comprend une estimation d\'effort, un horizon temporel, les preuves qui la soutiennent et une définition du succès. Pas une liste de choses à considérer — une liste de tâches prioritaires fondée sur des données.',
    cap6title: 'Expériences sur 30 jours',
    cap6body:
      'Des changements à faible risque et testables conçus pour une exécution en interne. Chacun avec une hypothèse claire, une métrique de succès et un mécanisme de suivi. Menez une expérience principale à la fois pour que les résultats soient attribuables.',
  },
  pricing: {
    label: 'Tarifs',
    headline: 'Conçu pour les marges de la restauration.',
    subheadline:
      'Notre premier pilote a identifié plus de €200 000 de pertes structurelles accumulées sur cinq ans dans un restaurant avec une note Google de 4,6 étoiles — visibles dans les données publiques depuis le début, non détectées par leur caisse, leur comptable et leur propriétaire. Le plan Croissance coûte €129 par mois.',
    recommended: 'Recommandé',
    perMonth: '/mois',
    getStarted: 'Commencer',
    tier1name: 'Starter',
    tier1price: '79',
    tier1desc: 'Pour les restaurateurs qui veulent une vue mensuelle du marché.',
    tier1f1: 'Rapport d\'intelligence mensuel',
    tier1f2: '4 benchmarks concurrents',
    tier1f3: 'Téléchargement PDF et livraison par e-mail',
    tier1f4: 'Intelligence des avis sur les grandes plateformes',
    tier2name: 'Croissance',
    tier2price: '129',
    tier2desc: 'Pour les restaurateurs qui travaillent activement sur leurs marges et leur positionnement.',
    tier2f1: 'Actualisation hebdomadaire',
    tier2f2: 'Alertes de prix de menu',
    tier2f3: 'Liste de priorités d\'action',
    tier2f4: '8 concurrents suivis',
    tier2f5: 'Mode présentation propriétaire',
    tier3name: 'Multi-Site',
    tier3price: '199',
    tier3desc: 'Pour les groupes gérant jusqu\'à 3 établissements.',
    tier3f1: 'Jusqu\'à 3 établissements',
    tier3f2: 'Comparaison inter-sites',
    tier3f3: 'Analyse de parts de marché',
    tier3f4: 'Intégration données de caisse',
    grantHeadline: 'Vous voulez que nous gérions les expériences pour vous ?',
    grantBody:
      'Nos forfaits d\'implémentation complets comprennent du conseil en direct, des sessions guidées avec le propriétaire et la gestion des expériences — pas seulement le logiciel. Les forfaits Standard (€2 999) et Intelligence Complète (€4 999) sont éligibles aux subventions de digitalisation PME à hauteur de 70–100 % via Fit 4 Digital. La plupart des restaurateurs paient moins de €1 500 de leur poche.',
    grantCta: 'Renseignez-vous sur les aides',
  },
  contact: {
    label: 'Nous contacter',
    headline: 'Commençons par une conversation.',
    body:
      'Nous menons un pilote avec des restaurants au Luxembourg. Si vous souhaitez qu\'un rapport d\'intelligence soit réalisé pour votre restaurant, contactez-nous directement. Pas de formulaire, pas d\'attente.',
    callLabel: 'Appeler',
    emailLabel: 'E-mail',
    footerNote: 'Réponse habituelle sous 24 heures.',
  },
  footer: {
    tagline: 'Intelligence Restaurant · Luxembourg',
    howItWorks: 'Comment ça marche',
    whatYouGet: 'Ce que vous obtenez',
    pricing: 'Tarifs',
    contact: 'Contact',
    partnerships: 'Partenariats',
    copyright: 'Disha Analytics · Luxembourg · Tous droits réservés',
    builtBy: 'Créé par Sameer Bhalerao',
  },
  institutions: {
    label: 'Pour les institutions',
    headline: 'Conçu pour l\'écosystème luxembourgeois.',
    subheadline:
      'Disha s\'intègre aux canaux consultatifs existants plutôt que de leur faire concurrence. Nous transformons vos relations de référencement en résultats de transformation numérique mesurables pour vos membres.',
    partner1name: 'House of Entrepreneurship',
    partner1role: 'Canal de référencement et de subventions',
    partner1body:
      'Référez vos membres restaurateurs à Disha en tant qu\'outil d\'intelligence IA certifié. L\'éligibilité aux subventions est pré-mappée aux programmes de digitalisation PME existants.',
    partner2name: 'Chambre de Commerce',
    partner2role: 'Partenaire d\'intelligence sectorielle',
    partner2body:
      'Co-rédigez des rapports agrégés d\'intelligence sectorielle sur 10 à 15 restaurants luxembourgeois. Publiés sous le nom de la Chambre — un contenu de valeur pour les membres et les décideurs, sans coût.',
    partner3name: 'Luxinnovation / Ministère de l\'Économie',
    partner3role: 'Politique et transformation numérique',
    partner3body:
      'Disha fournit des preuves concrètes et auditables de l\'adoption de l\'IA au niveau des PME, alignées sur la stratégie d\'économie numérique du Luxembourg et le programme Fit 4 Digital.',
    askHeadline: 'Ce que nous demandons',
    ask1title: 'Accès aux membres',
    ask1body: '5 restaurants participants au pilote de votre réseau — toute cuisine, toute taille.',
    ask2title: 'Créneau de présentation',
    ask2body: '30 minutes lors d\'un événement membre pour démontrer un rapport en direct.',
    ask3title: 'Co-branding',
    ask3body: 'Votre nom sur le rapport d\'intelligence sectorielle. Aucun budget requis.',
    ctaLabel: 'Nous contacter',
    backToSite: 'Retour sur Disha',
  },
}

// ─── German ──────────────────────────────────────────────────────────────────

export const de: T = {
  nav: {
    howItWorks: 'So funktioniert es',
    whatYouGet: 'Was Sie erhalten',
    pricing: 'Preise',
    contact: 'Kontakt',
    cta: 'Kontakt aufnehmen',
  },
  hero: {
    tag: 'KI-gestützte Restaurant-Intelligence-Plattform',
    headline1: 'Ihr Kassensystem erfasst jeden Umsatz.',
    headline2: 'Disha sagt Ihnen, warum manche Umsätze ausbleiben.',
    subheadline:
      'Sie haben bereits Daten — ein Kassensystem, Bewertungen, einen Buchhalter. Was fehlt, ist die Synthese: jemand, der Ihre Lieferbewertungsmuster mit den Preisen Ihrer Konkurrenten und Ihren Menümargen verknüpft und Ihnen genau sagt, was Sie ändern müssen. Disha erledigt das automatisch. In unter 5 Minuten.',
    cta1: 'So funktioniert es',
    cta2: 'Kontakt aufnehmen',
    stat1value: '5 Min.',
    stat1label: 'Vollständiger Intelligence-Bericht',
    stat2value: '8',
    stat2label: 'Öffentliche Datenquellen ausgewertet',
    stat3value: '6',
    stat3label: 'KI-Spezialagenten',
  },
  productIntro: {
    label: 'Was Disha ist',
    headline: 'Entscheidungen, keine Dashboards.',
    body1:
      'Toast sagt Ihnen, was verkauft wurde. Lightspeed zeigt Ihnen Ihre Couverts. Ihr Buchhalter gibt Ihnen die Zahlen des vergangenen Quartals. Keiner davon sagt Ihnen, dass Ihr nächster Konkurrent letzten Monat seine Mittagspreise gesenkt hat, dass 22 % Ihrer Lieferbewertungen Kälteprobleme speziell an Wochenendabenden erwähnen, oder dass Ihre Hauptgerichte €3 unter dem Marktdurchschnitt für Ihre Küche in dieser Stadt liegen.',
    body2:
      'Disha liest 8 öffentliche Quellen — Bewertungen auf allen großen Plattformen, Konkurrenzmenüs und -preise, lokale Marktsignale — betreibt 6 KI-Spezialagenten und erstellt einen priorisierten Aktionsplan, der durch überprüfbare Belege gestützt wird. Jede Empfehlung ist auf eine spezifische Quelle zurückführbar. Jede Finanzschätzung zeigt ihre Annahmen. Sie entscheiden, was Sie umsetzen.',
    link: 'Den 4-Schritte-Prozess ansehen',
    mockupInternalLabel: 'Analysten-Ansicht',
    mockupOwnerLabel: 'Inhaber-Ansicht',
    mockupInternalTitle: 'Interner Intelligence-Bericht',
    mockupOwnerTitle: 'Ihr Aktionsplan',
    mockupOwnerSubtitle: '3 Maßnahmen für diese Woche',
    mockupAction1: 'Lieferverpackung verbessern — Kältebeschwerden in 22 % der Lieferbewertungen beeinträchtigen Ihr Wolt-Ranking.',
    mockupAction2: 'Mittagspreise überprüfen — Ihre Hauptgerichte liegen €3 unter dem lokalen Marktdurchschnitt.',
    mockupAction3: 'Ihr beliebtestes Gericht hervorheben — es erscheint in 31 % der positiven Bewertungen, steht aber in der Mitte der Speisekarte.',
  },
  problem: {
    label: 'Wo die eigentliche Lücke liegt',
    headline1: 'Die Daten existieren.',
    headline2: 'Sie sind nur nicht verbunden.',
    subheadline:
      'Restaurantbetreiber nutzen mehr Werkzeuge als je zuvor. Das Problem: Keines davon kommuniziert mit den anderen — und keines liest, was außerhalb Ihres Restaurants passiert.',
    card1title: 'Fragmentierte Signale, keine Synthese',
    card1body:
      'Ihr Kassensystem zeigt Einnahmen. Ihre Bewertungsplattform zeigt Noten. Ihr Buchhalter zeigt Kosten. Niemand verbindet sie, um Ihnen zu sagen: Die Liefereinnahmen sinken, weil zwei negative Bewertungen über kalte Speisen Ihr Wolt-Ranking belasten. Diese Synthese ist das fehlende Glied.',
    card2title: 'Interne Tools haben einen externen blinden Fleck',
    card2body:
      'Toast und Lightspeed sehen in Ihr Restaurant hinein. Sie wissen nicht, dass Ihr Konkurrent letzten Monat ein Mittagsangebot gestartet hat, das Ihres um €4 unterbietet. Sie wissen nicht, dass Ihr Preispositioning im untersten Quartil für Ihre Küchenkategorie in dieser Stadt liegt. Externe Marktintelligenz ist nicht in Ihrem Kassensystem — und sie muss es sein.',
    card3title: 'Wenn Sie das Problem sehen, ist es bereits teuer',
    card3body:
      'Die Signale, die Margenerosion vorhersagen — Bewertungsmuster, Preisveränderungen bei Konkurrenten, Menümix-Veränderungen — sind alle öffentlich und Monate vor dem Quartalsabschluss lesbar. Disha liest sie systematisch, damit Sie nicht auf den Quartalsbericht warten müssen.',
  },
  howItWorks: {
    label: 'So funktioniert es',
    headline1: 'Vom Restaurantnamen zum priorisierten Aktionsplan',
    headline2: 'in unter 5 Minuten.',
    step1n: '01',
    step1title: 'Restaurant einreichen',
    step1body:
      'Geben Sie den Restaurantnamen und die Stadt ein. Das ist alles. Keine Tabellen, keine Integrationen, keine Einrichtung. Disha übernimmt die Recherche von dort.',
    step2n: '02',
    step2title: 'Disha scannt 8 Quellen',
    step2body:
      'Google Bewertungen, TripAdvisor, TheFork, Wolt, Ihre Website, Konkurrenzmenüs, lokale Marktdaten und Branchen-Benchmarks — automatisch erfasst und strukturiert.',
    step3n: '03',
    step3title: 'Sechs Spezialagenten analysieren',
    step3body:
      'Separate Agenten untersuchen Bewertungen, Wettbewerbspositionierung, Menü und Preise sowie Finanzsignale unabhängig voneinander. Ein Syntheseagent verbindet ihre Erkenntnisse zu einer kohärenten Diagnose — jede Aussage wird nach Vertrauensniveau typisiert: beobachtet, geschätzt, abgeleitet oder validiert. Laden Sie Kassendaten hoch, um Marktschätzungen in validierte Finanzkennzahlen umzuwandeln.',
    step4n: '04',
    step4title: 'Sie erhalten einen priorisierten Aktionsplan',
    step4body:
      'Kein Dashboard zum Interpretieren. Ein strukturierter Bericht: Was passiert, warum und was dagegen tun — in der Reihenfolge des erwarteten Aufwands. Jede Aktion ist auf spezifische Belege zurückführbar. Sie überprüfen die Hypothese, führen das Experiment durch und verfolgen, ob es gewirkt hat.',
  },
  capabilities: {
    label: 'Was im Bericht steckt',
    headline1: 'Sechs Intelligence-Dimensionen.',
    headline2: 'Ein entscheidungsreifer Bericht.',
    subheadline:
      'Jeder Abschnitt ist darauf ausgelegt, eine konkrete Handlung zu erzeugen — keine Beobachtung, die eine weitere Interpretationsebene erfordert.',
    cap1title: 'Bewertungs-Intelligence',
    cap1body:
      'Systematische Analyse Ihres gesamten Bewertungsbestands auf allen Plattformen. Keine Sentiment-Scores — spezifische operative Signale. Gewürz-Inkonsistenz bei der Lieferung, aber nicht im Restaurant. Service-Geschwindigkeitsbeschwerden an Wochenendabenden. Muster, die Sie beim Lesen einzelner Bewertungen nicht erkennen können.',
    cap2title: 'Wettbewerbs-Intelligence',
    cap2body:
      'Ihre 8 nächsten Konkurrenten nach Küche, Preisstufe, Bewertung und Bewertungsvolumen kartiert. Preislücken zwischen Ihnen und dem Markt. Positionierungsräume, die Ihre Konkurrenten nicht besetzen. Menükategorien, bei denen Sie im Verhältnis zur Nachfrage unter- oder überindexiert sind.',
    cap3title: 'Menü- und Preisanalyse',
    cap3body:
      'Ihre Preispositionierung relativ zu Marktdurchschnittswerten für Ihren Küchenstil und Ihre Stadt. Artikel mit hoher Nachfrage, Margenrisiko nach Kategorie und unterbewertete Artikel gegen Konkurrenzmenüs identifiziert. Menü-Engineering-Ergebnisse, für die ein Berater normalerweise zwei Tage braucht.',
    cap4title: 'Finanzsignal-Intelligence',
    cap4body:
      'Strukturelle Gewinnmotoren und Verlusttreiber aus öffentlichen Signalen — Preisgestaltung im Verhältnis zu Kosten-Benchmarks, Rabattverhalten, Bewertungs-zu-Umsatz-Korrelationen. Wenn Sie Kassen- oder Kostendaten hinzufügen, werden Schätzungen zu validierten Aussagen. Jede Finanzhypothese zeigt ihre Annahmen explizit.',
    cap5title: 'Priorisierter Aktionsplan',
    cap5body:
      'Jeder Befund wird in eine konkrete, nach erwartetem Aufwand priorisierte Maßnahme umgewandelt. Jede Aktion enthält eine Aufwandsschätzung, einen Zeithorizont, die dahinterstehenden Belege und eine Erfolgsdefinition. Keine Überlegungsliste — eine datenbasierte Prioritätenliste.',
    cap6title: '30-Tage-Experimente',
    cap6body:
      'Risikoarme, testbare Änderungen für die interne Umsetzung. Jede mit einer klaren Hypothese, Erfolgsmetrik und Nachverfolgungsmechanismus. Führen Sie jeweils ein primäres Experiment durch, damit Ergebnisse zurechenbar sind.',
  },
  pricing: {
    label: 'Preise',
    headline: 'Auf Restaurantmargen ausgelegt.',
    subheadline:
      'Unser erstes Pilotprojekt identifizierte über €200.000 an strukturellen Verlusten, die sich über fünf Jahre in einem Restaurant mit einer 4,6-Sterne-Google-Bewertung angehäuft hatten — in öffentlichen Daten sichtbar, von Kassensystem, Buchhalter und Inhaber unbemerkt. Der Wachstumsplan kostet €129 pro Monat.',
    recommended: 'Empfohlen',
    perMonth: '/Mo.',
    getStarted: 'Loslegen',
    tier1name: 'Starter',
    tier1price: '79',
    tier1desc: 'Für Betreiber, die einen monatlichen Marktüberblick möchten.',
    tier1f1: 'Monatlicher Intelligence-Bericht',
    tier1f2: '4 Wettbewerbs-Benchmarks',
    tier1f3: 'PDF-Download und E-Mail-Lieferung',
    tier1f4: 'Bewertungs-Intelligence auf großen Plattformen',
    tier2name: 'Wachstum',
    tier2price: '129',
    tier2desc: 'Für Betreiber, die aktiv an Margen und Positionierung arbeiten.',
    tier2f1: 'Wöchentliche Aktualisierung',
    tier2f2: 'Menüpreis-Benachrichtigungen',
    tier2f3: 'Aktionsprioritätsliste',
    tier2f4: '8 Konkurrenten verfolgt',
    tier2f5: 'Inhaber-Präsentationsmodus',
    tier3name: 'Multi-Standort',
    tier3price: '199',
    tier3desc: 'Für Gruppen mit bis zu 3 Standorten.',
    tier3f1: 'Bis zu 3 Standorte',
    tier3f2: 'Standortübergreifender Vergleich',
    tier3f3: 'Marktanteilsanalyse',
    tier3f4: 'Kassensystem-Datenintegration',
    grantHeadline: 'Möchten Sie, dass wir die Experimente für Sie durchführen?',
    grantBody:
      'Unsere vollständigen Implementierungspakete umfassen persönliche Beratung, geführte Inhabersitzungen und Experimentmanagement — nicht nur die Software. Standard- (€2.999) und Full-Intelligence-Pakete (€4.999) sind über Fit 4 Digital mit 70–100 % KMU-Digitalisierungsförderung förderfähig. Die meisten Betreiber zahlen weniger als €1.500 aus eigener Tasche.',
    grantCta: 'Über Förderung informieren',
  },
  contact: {
    label: 'Kontakt aufnehmen',
    headline: 'Beginnen wir mit einem Gespräch.',
    body:
      'Wir führen ein Pilotprojekt mit Luxemburger Restaurants durch. Wenn Sie einen Intelligence-Bericht für Ihr Restaurant möchten, kontaktieren Sie uns direkt. Kein Formular, kein Warten.',
    callLabel: 'Anrufen',
    emailLabel: 'E-Mail',
    footerNote: 'Antwort in der Regel innerhalb von 24 Stunden.',
  },
  footer: {
    tagline: 'Restaurant Intelligence · Luxembourg',
    howItWorks: 'So funktioniert es',
    whatYouGet: 'Was Sie erhalten',
    pricing: 'Preise',
    contact: 'Kontakt',
    partnerships: 'Partnerschaften',
    copyright: 'Disha Analytics · Luxembourg · Alle Rechte vorbehalten',
    builtBy: 'Erstellt von Sameer Bhalerao',
  },
  institutions: {
    label: 'Für Institutionen',
    headline: 'Für das Luxemburger Ökosystem gebaut.',
    subheadline:
      'Disha integriert sich in bestehende Beratungskanäle, anstatt mit ihnen zu konkurrieren. Wir verwandeln Ihre Empfehlungsbeziehungen in messbare digitale Transformationsergebnisse für Ihre Mitglieder.',
    partner1name: 'House of Entrepreneurship',
    partner1role: 'Empfehlungs- und Förderkanal',
    partner1body:
      'Empfehlen Sie Ihre Restaurantbetreiber-Mitglieder an Disha als zertifiziertes KI-Intelligence-Tool. Die Förderungsfähigkeit ist auf bestehende KMU-Digitalisierungsprogramme vorgemappt.',
    partner2name: 'Handelskammer',
    partner2role: 'Branchen-Intelligence-Partner',
    partner2body:
      'Ko-Autorenschaft aggregierter Branchen-Intelligence-Berichte für 10–15 Luxemburger Restaurants. Unter dem Namen der Handelskammer veröffentlicht — wertvoller Inhalt für Mitglieder und politische Entscheidungsträger ohne Kosten.',
    partner3name: 'Luxinnovation / Wirtschaftsministerium',
    partner3role: 'Politik und digitale Transformation',
    partner3body:
      'Disha liefert konkrete, prüfbare Belege für die KI-Akzeptanz auf KMU-Ebene, im Einklang mit Luxemburgs Digitalwirtschaftsstrategie und dem Programm Fit 4 Digital.',
    askHeadline: 'Was wir anfordern',
    ask1title: 'Zugang zu Mitgliedern',
    ask1body: '5 Restaurantpilotteilnehmer aus Ihrem Netzwerk — jede Küche, jede Größe.',
    ask2title: 'Präsentationsslot',
    ask2body: '30 Minuten bei einer Mitgliederveranstaltung, um einen Live-Bericht zu demonstrieren.',
    ask3title: 'Co-Branding',
    ask3body: 'Ihr Name auf dem Branchen-Intelligence-Bericht. Kein Budget erforderlich.',
    ctaLabel: 'Kontakt aufnehmen',
    backToSite: 'Zurück zu Disha',
  },
}

// ─── Luxembourgish ───────────────────────────────────────────────────────────

export const lb: T = {
  nav: {
    howItWorks: 'Wéi et funktionéiert',
    whatYouGet: 'Wat Dir kritt',
    pricing: 'Präisser',
    contact: 'Kontakt',
    cta: 'Kontakt ophuelen',
  },
  hero: {
    tag: 'KI Restaurant Intelligence Plattform',
    headline1: 'Är Kass hält all Vente fest.',
    headline2: 'Disha seet Iech, firwat e puer ni geschéien.',
    subheadline:
      'Dir hutt schonn Donnéeën — eng Kass, Bewäertungen, e Comptable. Wat feelt, ass d\'Synthèse: iergendeen, deen Är Liwwer-Bewäertungsmuster mat de Präisser vun Äre Konkurrenten a Wären Menümargen verbënnt an Iech seet, wat Dir genee ännere musst. Disha mécht dat automatesch. A manner wéi 5 Minutten.',
    cta1: 'Kuckt wéi et funktionéiert',
    cta2: 'Kontakt ophuelen',
    stat1value: '5 Min.',
    stat1label: 'Vollstännege Intelligence-Rapport',
    stat2value: '8',
    stat2label: 'Ëffentlech Quellen analyséiert',
    stat3value: '6',
    stat3label: 'KI-Spezialagenten',
  },
  productIntro: {
    label: 'Wat Disha ass',
    headline: 'Entscheedungen, keng Dashboards.',
    body1:
      'Toast seet Iech, wat verkaf gouf. Lightspeed weist Iech Är Couverts. Äre Comptable gëtt Iech d\'Zuelen vum leschte Quartal. Keen dovunner seet Iech, datt Äre nooste Konkurrent säi Mëttegspräis e Méint erof gesat huet, datt 22 % vun Äre Liwwer-Bewäertungen kal Iessen speziell e Weekend-Owend ernimmen, oder datt Är Haaptgeriichter €3 ënner dem Marchtsduerchschnëtt fir Är Kichenaart an dëser Stad leien.',
    body2:
      'Disha liest 8 ëffentlech Quellen — Bewäertungen op alle grousse Plattformen, Konkurrenzmenüen a Präisser, lokal Marktsignaler — leet 6 KI-Spezialagenten un a produzéiert e priorisierte Aktiounsplang, deen duerch iwwerpréifbar Beweiser gestëtzt gëtt. All Empfehlung ass op eng spezifesch Quell zréckzeféieren. All Finanzschätzung weist seng Annahmen. Dir decidéiert, wat Dir ëmsetze wëllt.',
    link: 'Den 4-Schrëtt-Prozess kucken',
    mockupInternalLabel: 'Analysten-Siicht',
    mockupOwnerLabel: 'Patron-Siicht',
    mockupInternalTitle: 'Interner Intelligence-Rapport',
    mockupOwnerTitle: 'Äre Aktiounsplang',
    mockupOwnerSubtitle: '3 Moossnamen fir dës Woch',
    mockupAction1: 'Liwwerverpackung verbesseren — kal Iessen a 22 % vun de Liwwer-Bewäertunge belaascht Äre Wolt-Ranking.',
    mockupAction2: 'Mëttegspräisser iwwerpréifen — Är Haaptgeriichter leien €3 ënner dem lokalen Marchtsduerchschnëtt.',
    mockupAction3: 'Äre beleebtste Plat ervirhiewen — et erschéngt a 31 % vun de positiven Bewäertungen, steet awer an der Mëtt vum Menü.',
  },
  problem: {
    label: 'Wou d\'Lück wierklech läit',
    headline1: 'D\'Donnéeën existéieren.',
    headline2: 'Si sinn einfach net verbonnen.',
    subheadline:
      'Restaurantsbetreiber benotzen méi Tools wéi jee. De Problem: keen dovunner kommunizéiert mat den aneren — a keen liese wat ausserhalb vun Ärem Restaurant geschitt.',
    card1title: 'Fragmentéiert Signaler, keng Synthèse',
    card1body:
      'Är Kass weist d\'Recetten. Är Bewäertungsplattform weist d\'Noten. Äre Comptable weist d\'Käschten. Keen verbënnt se fir Iech ze soen: D\'Liwwerrecetten ginn erof well zwou negativ Bewäertungen iwwer kal Iessen Äre Wolt-Ranking belaascht. Dës Synthèse ass déi fehlend Pièce.',
    card2title: 'Intern Tools hunn e externe blennen Fleck',
    card2body:
      'Toast a Lightspeed kucken an Äre Restaurant eran. Si wëssen net, datt Äre Konkurrent e Mëttegsdeel gestart huet, deen Äre Präis ëm €4 ënnerbietet. Si wëssen net, datt Äre Präispositioning am leschten Quartil fir Är Kichenkategorie an dëser Stad läit. Extern Marktintelligenz ass net an Ärer Kass — a si muss et sinn.',
    card3title: 'Wa Dir de Problem gesitt, ass et scho deier',
    card3body:
      'D\'Signaler déi Margerosion viraussoe — Bewäertungsmuster, Konkurrenzpräisännerungen, Menümixverännerungen — si all ëffentlech a Méint viru dem Quartalsofschloss liebar. Disha liest se systematesch, soudatt Dir net op de Quartalsbericht waarde musst.',
  },
  howItWorks: {
    label: 'Wéi et funktionéiert',
    headline1: 'Vum Restaurantnumm zum priorisierte Aktiounsplang',
    headline2: 'a manner wéi 5 Minutten.',
    step1n: '01',
    step1title: 'Äre Restaurant aschécken',
    step1body:
      'Gitt den Restaurantnumm an d\'Stad an. Dat ass alles. Keng Tabellen, keng Integratiounen, keng Astellung. Disha iwwerhëlt d\'Recherche vun do un.',
    step2n: '02',
    step2title: 'Disha scannt 8 Quellen',
    step2body:
      'Google Bewäertungen, TripAdvisor, TheFork, Wolt, Är Websäit, Konkurrenzmenüen, lokal Marktdaten a Branche-Benchmarks — automatesch gesammelt a strukturéiert.',
    step3n: '03',
    step3title: 'Sechs Spezialagenten analyséieren',
    step3body:
      'Separat Agenten ënnersichen Bewäertungen, Wettbewerbspositioning, Menü a Präisser, a Finanzsignaler onofhängeg. En Synthèseagent verbënnt hier Erkenntnisser zu enger kohärenter Diagnos — mat all Ausso typesch no Vertrauen: observéiert, geschat, ofgeleet oder validéiert. Luet Kassendaten erop fir Marktschätzunge a validéiert Finanzkennzuelen ëmzewandelen.',
    step4n: '04',
    step4title: 'Dir kritt e priorisierte Aktiounsplang',
    step4body:
      'Keen Dashboard fir z\'interpretéieren. E strukturéierte Rapport: wat geschitt, firwat, a wat dagéint ze maachen — an der Rei vum erwaarten Impakt. All Aktioun ass op spezifesch Beweiser zréckzeféieren. Dir iwwerpréift d\'Hypothès, féiert d\'Experiment duerch a verfolgt ob et fonctionéiert huet.',
  },
  capabilities: {
    label: 'Wat am Rapport steet',
    headline1: 'Sechs Intelligence-Dimensiounen.',
    headline2: 'Een entscheedungsreife Rapport.',
    subheadline:
      'All Kapitel ass dorops ausgeluecht, eng spezifesch Aktioun ze produzéieren — keng Observatioun déi nach eng weider Interpretatiounsschicht erfuerdert.',
    cap1title: 'Bewäertungs-Intelligence',
    cap1body:
      'Systematesch Analyse vun Ären Bewäertungen op alle Plattformen. Keng Sentiment-Scores — spezifesch operativ Signaler. Gewierz-Inkonsistenz bei der Liwwerung awer net am Restaurant. Service-Vitess-Klagen e Weekend-Owend. Muster déi Dir beim eenzelne Liese vun Bewäertunge net erkenne kanns.',
    cap2title: 'Wettbewerbs-Intelligence',
    cap2body:
      'Är 8 nooste Konkurrenten kartéiert no Kichen, Präisniveau, Note a Bewäertungsvolumen. Präislücken tëschent Iech an dem Marché. Positiounerungsplazen déi Är Konkurrenten net besetzen. Menükategorien wou Dir am Verhältnis zur Demande ënner- oder iwwer-indexéiert sidd.',
    cap3title: 'Menü- a Präisanalyse',
    cap3body:
      'Äre Präispositioning am Verhältnis zu Marchtsduerchschnëtter fir Är Kichenaart a Stad. Artikel mat héiger Demande, Margenrisiko no Kategorie, a mannerpräiséiert Artikel géint Konkurrenzmenüen identifizéiert. Menü-Engineering-Resultater déi e Conseillant normalerweis zwee Deeg brauch.',
    cap4title: 'Finanzsignal-Intelligence',
    cap4body:
      'Strukturell Gewënnmotoren a Verlosttreiber aus ëffentleche Signaler — Präisgestaltung am Verhältnis zu Käschten-Benchmarks, Rabattverhalten, Bewäertungs-zu-Recette-Korrelatiounen. Wa Dir Kassen- oder Käschtendaten dobäisetze, ginn Schätzungen zu validéierte Aussoen.',
    cap5title: 'Priorisierte Aktiounsplang',
    cap5body:
      'All Befund gëtt an eng konkret, no erwaarten Impakt prioriséiert Moossnhem ëmgewandelt. All Aktioun enthält eng Aufwandsschätzung, en Zeithorizont, d\'Beweiser dobäi an eng Definitioun vum Succès. Keng Iwwerleeungslëscht — eng datenbaséiert Prioritéitslëscht.',
    cap6title: '30-Dag-Experimenter',
    cap6body:
      'Aarmerisikoarm, testbar Ännerungen fir intern Ëmsetzung. Jiddwer eng mat klorer Hypothès, Succèsmetrik a Verfolgungsmechanismus. Féiert ee primäert Experiment gläichzäiteg duerch soudatt Resultater zourechenbaa sinn.',
  },
  pricing: {
    label: 'Präisser',
    headline: 'Ausgeluecht fir Restaurantmargen.',
    subheadline:
      'Eise éischte Pilot huet iwwer €200.000 u strukturelle Verloschter entdeckt, déi sech iwwer fënnef Joer an engem Restaurant mat enger 4,6-Stären Google-Bewäertung ugesammelt haten — a ëffentleche Daten siichtbar, vun der Kass, dem Comptable an dem Patron onbenotzt gelooss. De Wuesstumsplang kascht €129 de Mount.',
    recommended: 'Recommandéiert',
    perMonth: '/Monat',
    getStarted: 'Ufänken',
    tier1name: 'Starter',
    tier1price: '79',
    tier1desc: 'Fir Betreiber déi en montléchen Marktiwwerbléck wëllen.',
    tier1f1: 'Monatlecht Intelligence-Rapport',
    tier1f2: '4 Wettbewerbs-Benchmarks',
    tier1f3: 'PDF-Download an E-Mail-Liwwerung',
    tier1f4: 'Bewäertungs-Intelligence op groussen Plattformen',
    tier2name: 'Wuesstem',
    tier2price: '129',
    tier2desc: 'Fir Betreiber déi aktiv un hire Margen a Positiounéierung schaffen.',
    tier2f1: 'Wëchentlech Aktualiséierung',
    tier2f2: 'Menüpräis-Notifikatiounen',
    tier2f3: 'Aktiounsprioritéitslëscht',
    tier2f4: '8 Konkurrenten verfollegt',
    tier2f5: 'Patron-Presentatiounsmodus',
    tier3name: 'Multi-Standuert',
    tier3price: '199',
    tier3desc: 'Fir Gruppe déi bis zu 3 Standuert verwalten.',
    tier3f1: 'Bis zu 3 Standuert',
    tier3f2: 'Standuert-iwwergräifende Verglach',
    tier3f3: 'Marchtundeelaanalyse',
    tier3f4: 'Kassendaten-Integratioun',
    grantHeadline: 'Wëllt Dir datt mir d\'Experimenter fir Iech féieren?',
    grantBody:
      'Eis komplett Implementéierungspakete ëmfaassen perséinlech Berodung, geféiert Patron-Sessiounen a Experiment-Management — net nëmme Software. Standard- (€2.999) a Full-Intelligence-Pakete (€4.999) si mat 70–100 % KMU-Digitalisatiounsförderung iwwer Fit 4 Digital förderfähig. Déi meescht Betreiber bezuelen manner wéi €1.500 aus eegener Täsch.',
    grantCta: 'Iwwer Förderung informéieren',
  },
  contact: {
    label: 'Kontakt ophuelen',
    headline: 'Fänkt mat engem Gespréich un.',
    body:
      'Mir féieren en Pilot mat Lëtzebuerger Restauranten duerch. Wann Dir e Intelligence-Rapport fir Äre Restaurant wëllt, kontaktéiert eis direkt. Keen Formulaire, keen Waarden.',
    callLabel: 'Urengen',
    emailLabel: 'E-Mail',
    footerNote: 'Typesch Äntwert bannent 24 Stonnen.',
  },
  footer: {
    tagline: 'Restaurant Intelligence · Lëtzebuerg',
    howItWorks: 'Wéi et funktionéiert',
    whatYouGet: 'Wat Dir kritt',
    pricing: 'Präisser',
    contact: 'Kontakt',
    partnerships: 'Partnerschaftten',
    copyright: 'Disha Analytics · Lëtzebuerg · All Rechter reservéiert',
    builtBy: 'Erstellt vun Sameer Bhalerao',
  },
  institutions: {
    label: 'Fir Institutiounen',
    headline: 'Fir den Lëtzebuerger Ökosystem gebaut.',
    subheadline:
      'Disha integréiert sech an bestehend Berodungskanäl anstatt mat hinnen ze konkurrieren. Mir verwandelen Är Empfehlungsrelatiounen a moossbarer digitaler Transformatiounsresultater fir Är Memberen.',
    partner1name: 'House of Entrepreneurship',
    partner1role: 'Empfehlungs- a Subventiounskanal',
    partner1body:
      'Empfehlt Är Restaurantbetreiber-Membere u Disha als zertifizéiert KI-Intelligence-Tool. D\'Förderfähegkeet ass op bestehend KMU-Digitaliséierungsprogrammer virgemappt.',
    partner2name: 'Chambre de Commerce',
    partner2role: 'Branche-Intelligence-Partner',
    partner2body:
      'Ko-Autorenschaft vun aggregéierte Branche-Intelligence-Rapporter fir 10–15 Lëtzebuerger Restauranten. Ënnert dem Numm vun der Chambre publizéiert — wäertvollen Inhalt fir Memberen a politesch Entscheedungsträger ouni Käschten.',
    partner3name: 'Luxinnovation / Wirtschaftsministère',
    partner3role: 'Politik a digital Transformatioun',
    partner3body:
      'Disha liwwert konkret, iwwerpréifbar Beweiser fir KI-Adoptioun op KMU-Niveau, ofgestëmmt op Lëtzebuerg seng Digitalwirtschaftsstrategie an de Programm Fit 4 Digital.',
    askHeadline: 'Wat mir umfroe',
    ask1title: 'Zougang zu Memberen',
    ask1body: '5 Restaurant-Pilotteilnehmer aus Ärem Netzwierk — all Kichen, all Gréisst.',
    ask2title: 'Presentatiounsslot',
    ask2body: '30 Minutten bei enger Membersveranstaltung fir e Live-Rapport ze demonstréieren.',
    ask3title: 'Co-Branding',
    ask3body: 'Äre Numm um Branche-Intelligence-Rapport. Kee Budget erfuerderlech.',
    ctaLabel: 'Kontakt ophuelen',
    backToSite: 'Zréck zu Disha',
  },
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export const translations: Record<Language, T> = { en, fr, de, lb }
