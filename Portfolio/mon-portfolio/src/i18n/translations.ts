export const translations = {
  fr: {
    nav: {
      about: "À propos",
      parcours: "Parcours",
      projects: "Projets",
      personal: "Projets perso",
      contact: "Contact",
    },
    caseStudyCta: {
      back: "← Retour aux projets",
      next: "Projet suivant →",
    },

    common: {
      viewCase: "Voir le case study",
      back: "Retour",
    },

    home: {
      kicker: "EXPERIENCES PROFESSIONNELLES",
      title: "Trois expériences, trois contextes.",
      desc: "Présentation de case studies avec une mise en avant du problème, de la démarche et du résultat.",

      heroTitle: "Je transforme des idées en expériences simples.",
      heroDesc:
        "Je travaille à l’intersection du design d’expérience, de l’interface et de l’interaction, avec une appétence pour les systèmes complexes. Mon objectif : rendre les produits clairs, cohérents et intuitifs.",

      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
    },

    journey: {
      kicker: "Parcours",
      title: "Une fresque de mon parcours",
      subtitle: "Mon évolution entre analyse, UX et systèmes complexes.",

      steps: [
        {
          period: "Formation",
          title: "Un socle analytique, puis l’envie de concevoir",
          description:
            "J’ai construit une base solide en résolution de problèmes, avec un intérêt croissant pour les systèmes complexes, l’ergonomie et la manière dont une interface peut clarifier un usage.",
          floatingLabel: "Base analytique",

          cards: [
            { label: "Approche", value: "Structurée & logique" },
            { label: "Intérêt", value: "Systèmes complexes" },
            { label: "Transition", value: "Vers l’UX/UI" },
          ],
        },

        {
          period: "Wavestone",
          title: "Découvrir l’impact du design",
          description:
            "Première immersion dans un environnement produit et conseil avec des problématiques UX concrètes : audit, recherche utilisateur, simplification de parcours et ateliers.",
          floatingLabel: "UX & stratégie",

          cards: [
            { label: "Mission", value: "Calculateur carbone" },
            { label: "Méthodes", value: "Audit & tests" },
            { label: "Focus", value: "Clarté utilisateur" },
          ],
        },

        {
          period: "Renault",
          title: "Concevoir pour des systèmes embarqués",
          description:
            "Travail sur des interfaces embarquées et problématiques d’ergonomie IHM dans un contexte industriel complexe mêlant innovation, sécurité et cohérence produit.",
          floatingLabel: "UX embarqué",

          cards: [
            { label: "Contexte", value: "Automobile" },
            { label: "Travail", value: "IHM & UX/UI" },
            { label: "Collaboration", value: "Métiers multiples" },
          ],
        },

        {
          period: "Aujourd’hui",
          title: "Créer des expériences simples pour des systèmes complexes",
          description:
            "Je cherche aujourd’hui à rejoindre des équipes produit ou design pour concevoir des expériences utiles, lisibles et cohérentes.",
          floatingLabel: "Product design",

          cards: [
            { label: "Objectif", value: "UX/UI & Produit" },
            { label: "Force", value: "Vision systémique" },
            { label: "Approche", value: "Simple & structurée" },
          ],
        },
      ],
    },

    about: {
      kicker: "À propos",

      title: "Une approche structurée, orientée simplicité.",

      desc:
        "J’aime concevoir des expériences qui guident l’utilisateur simplement, en alignant besoins utilisateur, contraintes techniques et objectifs produit.",

      cardTitle: "Ce que j’apporte",

      points: [
        "Capacité à clarifier un problème (audit, tests, synthèse)",
        "Conception de parcours end-to-end (flows → UI → itérations)",
        "Intégration au design system et cohérence interactionnelle",
        "Communication efficace avec les parties prenantes",
      ],

      cards: [
        {
          label: "Domaine",
          value: "Auto · Spatial · ESG",
        },
        {
          label: "Méthodes",
          value: "Audit · Tests · Ateliers",
        },
        {
          label: "Livrables",
          value: "Flows · UI · Protos",
        },
      ],
    },

    process: {
      kicker: "MA DÉMARCHE",
      title: "De l’insight à l’interface.",
      desc:
        "Chaque projet suit une approche simple : comprendre, clarifier, concevoir et valider.",

      steps: [
        { k: "01", t: "Comprendre", d: "Contexte, contraintes, objectifs." },
        { k: "02", t: "Clarifier", d: "Audit, tests, irritants, insights." },
        { k: "03", t: "Concevoir", d: "Flows, modèle d’interaction, UI." },
        { k: "04", t: "Valider", d: "Feedback, itérations." },
      ],
    },

    projects: {
      ctaview: "Voir l'étude de cas",
      renault: {
        title: "Renault Group — UX/UI & Ergonomie IHM",
        role: "Ingénieur UX/UI IHM · ALTEN (mission Renault)",
        desc:
          "Conception d’interfaces embarquées, cadrage fonctionnel, tests utilisateur, validation sur prototype physique et participation à des projets d’innovation.",
        tags: ["UX/UI", "Ergonomie IHM", "Innovation"],
      },

      goodplanet: {
        title: "GoodPlanet — Calculateur carbone",
        desc:
          "Refonte UX/UI d’un questionnaire pour améliorer la compréhension, la complétion et l’engagement.",
        role: "UX/UI Designer · Wavestone (stage)",
      },

      alten: {
        title: "Alten — Interfaces data-driven",
        desc:
          "Conception rapide de deux interfaces : simulateur industriel et dashboard d’optimisation ferroviaire.",
        role: "UX/UI · Projets internes",
      },
    },

    personal: {
      kicker: "PROJETS PERSONNELS",
      title: "Explorations & prototypes.",
      desc: "Des projets pour tester des idées, expérimenter et apprendre.",

      project1: {
        title: "Wedding website — UX & design",
        desc:
          "Conception d’un site one-page : direction artistique, co-création du contenu et développement sur Webflow.",
      },

      project2: {
        title: "Quiz interactif — Prototype Unity",
        desc:
          "Prototype d’un quiz interactif : design du flow de jeu, gestion des bonus et interface pour animer une partie.",
      },

      project3: {
        title: "Créateur d’isochrones tout-terrain",
        desc:
          "Prototype universitaire utilisant une adaptation de l’algorithme de Dijkstra appliqué aux données SIG.",
      },
      portfolio: {
        title: "Portfolio UX/UI — Concevoir une expérience recruteur",
        role: "Product Designer · Projet personnel",
        desc: "Conception d’un portfolio pensé comme une expérience produit : storytelling, hiérarchisation de l’information, crédibilité visuelle et mise en valeur des projets.",
      },
    },

    contact: {
      kicker: "CONTACT",
      title: "On échange ?",
      desc:
        "Disponible pour des missions UX/UI et design d’interaction. Je réponds rapidement.",

      ctaLinkedin: "LinkedIn",
      ctaBack: "Revoir les projets",
    },
    renaultPage: {
      hero: {
        kicker: "RENAULT GROUP",
        title: "UX/UI & Ergonomie IHM pour systèmes embarqués",
        desc:
          "Mission réalisée chez Renault Group autour de la conception d’interfaces embarquées, de l’ergonomie IHM et de l’innovation produit.",
      },

      intro:
        "Au sein d’équipes pluridisciplinaires, j’ai participé à la conception d’expériences embarquées en collaborant avec les équipes UX, produit et métiers.",

      responsibilitiesTitle: "Mes responsabilités",

      responsibilities: [
        "Analyse et cadrage des besoins client",
        "Rédaction des cahiers des charges fonctionnelles IHM/UI",
        "Création de wireframes et maquettes sur Figma",
        "Participation aux projets d’innovation",
        "UX writing et convergence métier",
        "Benchmark concurrentiel",
        "Tests véhicule sur route",
        "Pilotage de tests utilisateurs",
        "Rédaction de plans de validation",
        "Validation sur prototype physique",
      ],

      approachTitle: "Ma démarche",

      approachCards: [
        {
          title: "Comprendre",
          desc:
            "Analyser les usages, contraintes métier et attentes utilisateur.",
        },
        {
          title: "Structurer",
          desc:
            "Définir des parcours cohérents et des interactions compréhensibles.",
        },
        {
          title: "Concevoir",
          desc:
            "Créer des interfaces ergonomiques adaptées au contexte embarqué.",
        },
        {
          title: "Valider",
          desc:
            "Tester les parcours sur prototype et avec utilisateurs.",
        },
      ],

      confidential: {
        kicker: "CONFIDENTIEL",
        title: "Projet confidentiel",
        desc:
          "Certaines réalisations visuelles et fonctionnalités ne peuvent pas être présentées publiquement.",
        button: "Accéder au projet confidentiel",
        modalTitle: "Projet disponible sur demande",
        modalDesc:
          "Je peux présenter plus en détail les démarches UX, les prototypes et les choix de conception lors d’un échange.",
      },
      heroSkills: [
        "UX Design",
        "Ergonomie IHM",
        "Figma",
        "Wireframing",
        "Validation",
      ],

      contextCards: [
        {
          label: "Contexte",
          value: "Systèmes embarqués automobiles",
        },
        {
          label: "Environnement",
          value: "Produit · UX · Validation",
        },
        {
          label: "Focus",
          value: "Ergonomie · Clarté · Innovation",
        },
      ],

      skillsSection: {
        kicker: "COMPÉTENCES",
        title: "Compétences mobilisées",
      },

      skills: [
        "UX Design",
        "Ergonomie IHM",
        "Figma",
        "Wireframing",
        "UX Writing",
        "User Testing",
        "Benchmark",
        "Validation",
        "Interaction Design",
      ],
    },
    goodplanetPage: {
      summary: "SOMMAIRE",

      toc: {
        overview: "Aperçu",
        problem: "Problème",
        workshop: "Atelier",
        research: "Audit & tests",
        solution: "Solution UX/UI",
        beforeAfter: "Avant / Après",
        result: "Résultat",
        learnings: "Apprentissages",
      },

      hero: {
        kicker: "Stage · Wavestone · 6 mois",

        title:
          "Refonte UX/UI d’un calculateur carbone — Fondation GoodPlanet",

        desc:
          "Objectif : simplifier le parcours du questionnaire, encourager la complétion, renforcer la sensibilisation à l’empreinte carbone et clarifier la logique de compensation proposée par GoodPlanet.",

        tags: [
          "UX Research",
          "Audit UX",
          "Tests utilisateurs",
          "UI Design",
          "Figma",
          "Miro",
        ],

        cards: {
          role: "Rôle",
          roleValue: "UX/UI Designer (stage)",

          collaboration: "Collaboration",
          collaborationValue: "1 consultante Wavestone",

          deliverables: "Livrables",
          deliverablesValue: "Audit, parcours, maquettes",
        },
      },

      overview: {
        eyebrow: "Aperçu",

        title: "Contexte et objectifs",

        desc:
          "GoodPlanet souhaitait améliorer l’expérience de son questionnaire de calcul d’empreinte carbone : le rendre plus simple, plus fluide, et inciter l’utilisateur à aller au bout.",

        objectives: [
          {
            label: "Objectif 1",
            title: "Sensibiliser",
            desc:
              "Rendre l’impact carbone compréhensible et concret tout au long du parcours.",
          },
          {
            label: "Objectif 2",
            title: "Fluidifier le questionnaire",
            desc:
              "Réduire la friction et clarifier les étapes pour augmenter la complétion.",
          },
          {
            label: "Objectif 3",
            title: "Expliquer la compensation",
            desc:
              "Mieux présenter le “pourquoi” et le “comment” de la compensation GoodPlanet.",
          },
        ],
      },

      problem: {
        eyebrow: "Problème",

        title: "Ce qui empêchait la complétion",

        points: [
          "Parcours perçu comme long et complexe.",
          "Manque de repères : étapes, progression, objectifs.",
          "Faible clarté sur la compensation : bénéfices et intention.",
        ],

        calloutLabel: "Question clé",

        calloutTitle: "Comment réduire l’abandon ?",

        calloutDesc:
          "En diminuant la charge cognitive (structure, microcopy, feedback) et en donnant du sens au parcours (sensibilisation + finalité).",
      },

      workshop: {
        eyebrow: "Atelier",

        title: "Brainstorming sur Miro",

        desc1:
          "Nous avons organisé un atelier de brainstorming sur Miro en regroupant les fonctionnalités par catégories, puis en priorisant celles les plus pertinentes.",

        desc2:
          "Trois axes sont ressortis : sensibiliser, fluidifier et expliquer la compensation.",
      },

      research: {
        eyebrow: "Research",

        title: "Audit UX & tests utilisateurs",

        desc:
          "Pour compléter les retours déjà disponibles, nous avons réalisé des tests sur le questionnaire existant et un audit UX afin d’identifier les points de friction.",

        methodsLabel: "Méthodes",

        methodsTitle: "Ce qui a été fait",

        methods: [
          "Tests d’utilisabilité sur l’existant",
          "Audit heuristique (clarté, feedback, cohérence)",
          "Synthèse des irritants et recommandations",
        ],

        outputLabel: "Sortie",

        outputTitle: "Insights actionnables",

        outputs: [
          "Repenser la progression et les étapes",
          "Optimiser la microcopy (libellés et aides)",
          "Mettre en scène la finalité de la compensation",
        ],

        caption:
          "Exemple : cartographie du parcours (flow) et points de décision.",
      },

      solution: {
        eyebrow: "Design",

        title: "Solution UX/UI conçue sur Figma",

        desc:
          "Nous avons conçu une nouvelle maquette sur Figma, présentée d’abord en interne chez Wavestone puis côté GoodPlanet. La proposition a été très bien reçue.",

        figures: [
          "Écran : composant card.",
          "Écran : agencement des questions textuelles.",
          "Écran : bilan résultats et compensation.",
        ],

        calloutLabel: "Décisions UI",

        calloutTitle: "Principes appliqués",

        principles: [
          "Progression claire (étapes et feedback)",
          "Réduction de la charge cognitive (mise en page et microcopy)",
          "Moments pédagogiques intégrés au parcours",
        ],
      },

      beforeAfter: {
        eyebrow: "Comparaison",

        title: "Avant / Après",

        desc:
          "Exemple de comparaison sur le bilan final :",

        beforeCaption:
          "Avant : la compensation était affichée immédiatement tandis que les détails de l’empreinte carbone apparaissaient en dessous, sans réelle explication sur l’objectif de la compensation.",

        afterCaption:
          "Après : des comparaisons visuelles plus parlantes aidaient l’utilisateur à mieux comprendre son impact carbone. La compensation passait au second plan avec des explications plus claires.",

        cards: [
          {
            label: "Avant",
            title: "Friction",
            desc:
              "Navigation et feedback insuffisants créaient de l’incertitude et favorisaient l’abandon.",
          },
          {
            label: "Après",
            title: "Clarté",
            desc:
              "Une progression plus lisible et du guidage renforçaient la confiance et la continuité.",
          },
          {
            label: "Après",
            title: "Sens",
            desc:
              "La pédagogie et l’explication de la compensation augmentaient l’engagement.",
          },
        ],
      },

      result: {
        eyebrow: "Résultat",

        title: "Déploiement et impact",

        desc:
          "La mission s’est terminée avant le développement par Wavestone, mais GoodPlanet a ensuite déployé le nouveau questionnaire sur son site : les choix UX/UI conçus durant la mission ont été mis en production.",

        calloutLabel: "Impact",

        calloutTitle:
          "Résultats attendus (je n’étais plus là pour les mesurer)",

        points: [
          "Réduction attendue des abandons grâce à un parcours plus lisible",
          "Meilleure compréhension de l’empreinte carbone et de la compensation",
          "Solution validée par les équipes client avant mise en ligne",
        ],

        cta: "Voir le calculateur en ligne",
      },

      learnings: {
        eyebrow: "Conclusion",

        title: "Ce que j’ai appris",

        points: [
          "Transformer des retours utilisateurs en décisions UI concrètes.",
          "Construire un parcours qui donne du sens, pas seulement une interface.",
          "Gérer la validation multi-parties sur des itérations.",
        ],
      },
    },
    altenPage: {
      hero: {
        title:
          "Concevoir des interfaces data-driven pour des systèmes complexes",

        desc:
          "Deux projets réalisés chez ALTEN autour de la visualisation de données, de la simulation et de l’aide à la décision.",

        skills: [
          "UX Design",
          "Dashboard",
          "Data visualization",
          "Figma",
          "Interaction Design",
        ],
      },

      context: {
        kicker: "CONTEXTE",

        title:
          "Transformer des données complexes en interfaces lisibles",

        desc:
          "Ces projets internes avaient pour objectif de concevoir rapidement des interfaces capables de structurer des données complexes et faciliter la prise de décision.",

        cards: [
          {
            title: "Contexte",
            value: "Projets internes ALTEN",
          },
          {
            title: "Focus",
            value: "Clarté & visualisation",
          },
          {
            title: "Enjeux",
            value: "Compréhension rapide",
          },
        ],
      },

      approach: {
        kicker: "DÉMARCHE",

        title: "Ma démarche UX",

        desc:
          "Structurer l’information et concevoir des interfaces compréhensibles malgré la complexité métier.",

        steps: [
          {
            number: "01",
            title: "Comprendre",
            desc:
              "Analyser les données, contraintes métier et besoins utilisateur.",
          },
          {
            number: "02",
            title: "Structurer",
            desc:
              "Hiérarchiser les informations et organiser les interactions.",
          },
          {
            number: "03",
            title: "Concevoir",
            desc:
              "Créer des interfaces lisibles et orientées usage.",
          },
          {
            number: "04",
            title: "Clarifier",
            desc:
              "Réduire la charge cognitive et faciliter la prise de décision.",
          },
        ],
      },

      project1: {
        kicker: "PROJET 01",

        title: "Simulateur industriel",

        desc:
          "Conception d’une interface de simulation permettant de manipuler différents paramètres et visualiser rapidement leurs impacts.",

        cards: [
          {
            title: "Problème",
            desc:
              "Présenter une grande quantité d’informations sans surcharger l’utilisateur.",
          },
          {
            title: "Réflexion UX",
            desc:
              "Structurer les inputs et hiérarchiser les données pour faciliter la compréhension.",
          },
          {
            title: "Solution",
            desc:
              "Une interface claire centrée sur les actions principales et la visualisation immédiate des résultats.",
          },
        ],
      },

      project2: {
        kicker: "PROJET 02",

        title: "Dashboard ferroviaire",

        desc:
          "Création d’un dashboard d’optimisation ferroviaire permettant d’analyser rapidement plusieurs indicateurs opérationnels.",

        cards: [
          {
            title: "Enjeu",
            desc:
              "Rendre lisibles des données complexes dans un contexte décisionnel.",
          },
          {
            title: "Approche",
            desc:
              "Créer une hiérarchie visuelle claire pour mettre en avant les informations essentielles.",
          },
          {
            title: "Résultat",
            desc:
              "Un dashboard plus compréhensible et orienté aide à la décision.",
          },
        ],
      },

      learnings: {
        kicker: "APPRENTISSAGES",

        title: "Ce que ces projets m’ont appris",

        desc:
          "Concevoir pour des environnements complexes demande avant tout de clarifier l’information.",

        text:
          "Ces expériences m’ont permis de travailler sur des problématiques orientées données, où la lisibilité et la hiérarchisation des informations jouent un rôle central.",

        points: [
          "Structurer des interfaces métier complexes",
          "Transformer des données en expériences compréhensibles",
          "Concevoir rapidement sous contraintes",
          "Faciliter la prise de décision",
          "Créer des interfaces orientées usage",
        ],
      },
    },
    weddingPage: {
      topbar: {
        back: "← Retour",
        label: "Projet personnel",
      },

      hero: {
        kicker: "Web · One-page · Webflow",
        title: "Site de mariage — conception UX/UI & réalisation Webflow",
        desc:
          "Objectif : créer un site simple, élégant et accessible, regroupant toutes les informations essentielles sur une seule page.",
        tags: [
          "Direction artistique",
          "UI Design",
          "Workshops",
          "Figma",
          "Webflow",
        ],

        cards: {
          role: {
            label: "Rôle",
            value: "UX/UI Designer",
          },
          format: {
            label: "Format",
            value: "One-page",
          },
          deliverables: {
            label: "Livrables",
            value: "Maquettes + site Webflow",
          },
        },

        imageCaption:
          "Aperçu du site (cover). Remplace par ton meilleur visuel.",
      },

      toc: {
        title: "SOMMAIRE",
        context: "Contexte",
        da: "Direction artistique",
        coDesign: "Co-design & contenus",
        nav: "Variantes de navigation",
        build: "Réalisation Webflow",
        result: "Résultat",
      },

      context: {
        eyebrow: "Contexte",
        title: "Un site simple, utile, sans friction",

        desc:
          "Le couple voulait un support unique pour partager rapidement les informations clés du mariage. Le choix “one-page” permettait une lecture fluide, sans perdre les invités dans une navigation complexe.",

        cards: [
          {
            label: "Objectif",
            title: "Centraliser les infos",
            desc: "Lieu, date, planning, détails pratiques.",
          },
          {
            label: "Contrainte",
            title: "Ultra simple",
            desc: "Accessible à tous, mobile-first.",
          },
          {
            label: "Approche",
            title: "Co-design",
            desc: "Ateliers et itérations avec le couple.",
          },
        ],
      },

      artisticDirection: {
        eyebrow: "Design",
        title: "Direction artistique à partir d’une photo",

        desc:
          "J’ai construit la palette couleurs et la direction artistique à partir d’une photo principale, puis décliné typographies, composants et hiérarchie visuelle.",

        figureCaption:
          "Moodboard Figma : palette, typographies, composants.",
      },

      workshops: {
        eyebrow: "Workshops",
        title: "Ateliers de brainstorming avec le couple",

        desc:
          "Plusieurs ateliers ont permis d’affiner le contenu : quelles informations sont vraiment utiles ? dans quel ordre ? quel ton éditorial ?",

        bullets: [
          "Définition des sections essentielles",
          "Priorisation du contenu",
          "Microcopy : titres courts et informations scannables",
        ],
      },

      navigation: {
        eyebrow: "Itérations",
        title: "Deux variantes de navbar pour obtenir des retours",

        desc:
          "J’ai proposé deux idées : une navbar horizontale et une verticale, puis recueilli des retours afin de choisir l’option la plus claire.",

        figureCaption:
          "Comparaison : navbar horizontale vs verticale.",

        decision: {
          label: "Décision",
          title: "Choisir la navigation la plus évidente",
          desc:
            "Le critère principal était la lisibilité mobile et la compréhension immédiate.",
        },
      },

      build: {
        eyebrow: "Build",
        title: "Déploiement rapide avec Webflow",

        desc:
          "Une fois le design et le contenu validés, j’ai réalisé le site sur Webflow afin d’obtenir un rendu fidèle, responsive et facile à maintenir.",

        bullets: [
          "Intégration responsive (mobile-first)",
          "Composants simples et cohérents",
          "Mise en ligne rapide",
        ],

        figureCaption: "Rendu final (Webflow).",
      },

      result: {
        eyebrow: "Résultat",
        title: "Un site clair, élégant, accessible",

        desc:
          "Le résultat : une page unique, scannable, avec une hiérarchie claire permettant aux invités de trouver rapidement l’information.",

        liveCta: "Voir le site en ligne",
        nextProject: "Voir le projet suivant",
      },
    },
    quizProjectPage: {
      topbar: {
        back: "← Retour",
        label: "Projet personnel",
      },

      hero: {
        kicker: "Unity · Interaction design · Prototype",

        title:
          "Quiz interactif — du format oral à une expérience UI gamifiée",

        desc:
          "Grand amateur de quiz, j’en organisais souvent à l’oral. J’ai voulu transformer ce format en une application Unity qui structure le déroulement du jeu : grille, phases, bonus et feedback.",

        tags: [
          "UX",
          "Interaction Design",
          "IA de contenu (XML)",
          "Prototype",
          "Unity",
        ],

        cards: {
          objective: {
            label: "Objectif",
            value: "Animer un quiz sans friction",
          },

          format: {
            label: "Format",
            value: "Phases + grille + bonus",
          },

          deliverables: {
            label: "Livrables",
            value: "Prototype Unity + UI states",
          },
        },

        note: {
          label: "Note",
          title: "Usage de l’IA (transparence)",

          desc:
            "ChatGPT a servi d’assistant technique pour accélérer certaines étapes (snippets, debug, structuration), tout en gardant la conception UX/UI et les décisions produit sous mon contrôle.",
        },
      },

      toc: {
        title: "SOMMAIRE",

        items: {
          context: "Contexte & problème",
          format: "Format du jeu",
          system: "Architecture du système",
          flow: "Flow d’interaction",
          states: "États d’interface",
          screens: "Écrans clés",
          result: "Résultat & impact",
        },
      },

      sections: {
        context: {
          eyebrow: "Contexte",

          title:
            "Pourquoi passer du quiz oral à une interface",

          desc:
            "Lors d’un quiz animé manuellement, plusieurs difficultés reviennent : gestion du tour des équipes, suivi des bonus/règles spéciales, manque de support visuel, risques d’erreurs et difficulté à intégrer des contenus multimédia.",

          callouts: [
            {
              label: "Douleur",
              title: "Charge cognitive animateur",
              desc:
                "Beaucoup de règles et d’états à suivre en parallèle.",
            },

            {
              label: "Douleur",
              title: "Lisibilité pour les joueurs",
              desc:
                "Progression et thèmes moins visibles sans support UI.",
            },

            {
              label: "Douleur",
              title: "Rythme & erreurs",
              desc:
                "Transitions et bonus peuvent casser le flow et créer des incohérences.",
            },
          ],
        },

        format: {
          eyebrow: "Format du jeu",

          title:
            "Une grille, des phases, et des bonus interactifs",

          desc:
            "Le quiz est inspiré du “Grand Quiz” / formats télévisés. La grille comporte 4 thèmes (un par équipe) + 1 thème neutre.",

          bullets: [
            "Phase 1 — Burger Quiz : détermine l’ordre de passage via une séquence de rapidité.",
            "Phase 2 — Mémorisation : la grille s’affiche 30s, les équipes mémorisent l’emplacement.",
            "Phase 3 — Boucle de tours : une équipe choisit une question ; les autres peuvent activer des bonus.",
          ],

          callout: {
            label: "Décision UX",
            title: "Pourquoi la grille visible 30s ?",

            desc:
              "Créer un moment de tension stratégique et d’attention collective, tout en renforçant la mémorisation.",
          },
        },

        system: {
          eyebrow: "Architecture",

          title: "Architecture du système de jeu",

          desc:
            "J’ai structuré le quiz en phases afin de fluidifier l’expérience et limiter les erreurs de transition.",

          figureCaption:
            "Macro-architecture : setup → Burger Quiz → mémorisation → boucle de jeu → fin.",
        },

        flow: {
          eyebrow: "Interaction",

          title: "Flow d’interaction (tour par tour)",

          desc:
            "Chaque tour suit un enchaînement stable : choix d’une case, difficulté, affichage de la question, gestion des bonus, validation et mise à jour des scores/états.",

          figureCaption:
            "Micro-flow : choisir → question → bonus (si déclenché) → validation → score → équipe suivante.",
        },

        states: {
          eyebrow: "Interface",

          title: "États UI (lisibilité + robustesse)",

          desc:
            "L’un des enjeux UX était de rendre visibles les états (cases jouées, équipe active, bonus déclenchés) et d’éviter les transitions incohérentes.",

          figureCaption:
            "États UI : grille / question / bonus / feedback (notifications).",
        },

        screens: {
          eyebrow: "Prototype",

          title: "Écrans clés du prototype Unity",

          figures: {
            grid:
              "Grille : thèmes, état des cases, lisibilité rapide.",

            question:
              "Question : focus, support multimédia (image/audio/vidéo).",
          },

          bonus: {
            label: "Bonus",

            title: "Mécaniques de bonus interactifs",

            items: [
              "Duel : une équipe challenge l’équipe active (mini UI de buzz + verrouillage visuel).",
              "Hold Up : tentative de vol si l’équipe active échoue (notification + état clair).",
              "x2 : double la valeur d’une question (confirmation visuelle).",
            ],
          },

          feedback: {
            label: "Feedback UX",

            title: "Notifications dynamiques",

            desc:
              "Pour améliorer la compréhension en temps réel, des notifications rendent visibles les actions : “Équipe 2 lance un Duel”, “Hold Up tenté”, “x2 utilisé”, etc.",
          },
        },

        result: {
          eyebrow: "Résultat",

          title: "Résultat & impact",

          bullets: [
            "Gestion de plusieurs équipes et phases de jeu",
            "Grille mémorisable + états clairs (cases jouées)",
            "Bonus stratégiques et feedbacks en temps réel",
            "Support multimédia (image/audio/vidéo)",
            "Questions chargées via fichiers XML (quiz personnalisable)",
          ],

          callout: {
            label: "Ce que ça démontre",

            title: "Compétences UX / IHM",

            items: [
              "Conception de systèmes interactifs",
              "Gestion d’états complexes et robustesse des transitions",
              "Design d’interaction pour expérience collective",
              "Prototypage rapide et itérations",
            ],
          },
        },
      },
    },
    portfolioCaseStudy: {
      hero: {
        kicker: "Portfolio · UX/UI · Projet personnel",

        title: "Conception et développement de mon portfolio UX/UI",

        desc:
          "Ce projet consistait à concevoir un portfolio capable de présenter mes projets, mon parcours et ma manière de travailler de façon claire et structurée.",

        tags: [
          "UX/UI",
          "Architecture de l’information",
          "Design system",
          "React",
        ],
      },

      sections: {
        context: {
          eyebrow: "Contexte",

          title: "Créer un portfolio lisible et structuré",

          paragraphs: [
            "L’objectif était de concevoir un portfolio capable de présenter plusieurs projets UX/UI avec différents niveaux de détail.",
            "Je voulais également créer une structure suffisamment flexible pour ajouter de nouveaux projets facilement tout en gardant une cohérence visuelle et éditoriale.",
          ],

          cards: [
            {
              title: "Hiérarchiser l’information",
              text: "Rendre les projets rapidement compréhensibles.",
            },
            {
              title: "Créer une structure réutilisable",
              text: "Faciliter l’ajout de futurs case studies.",
            },
            {
              title: "Assurer la cohérence",
              text: "Uniformiser les composants et les layouts.",
            },
          ],
        },

        storytelling: {
          eyebrow: "Architecture",

          title: "Structurer le portfolio comme un parcours",

          paragraphs: [
            "J’ai organisé le portfolio autour d’une progression simple : introduction, parcours, projets puis contact.",
            "Cette structure permet de guider la lecture et d’éviter une navigation trop fragmentée.",
          ],

          steps: [
            "Introduction",
            "Parcours",
            "Projets",
            "Compétences",
            "Contact",
          ],

          conclusion:
            "Chaque section a été pensée pour introduire progressivement les informations importantes.",
        },

        journey: {
          eyebrow: "Parcours",

          title: "Concevoir une section parcours plus visuelle",

          paragraphs: [
            "Je voulais éviter une timeline classique trop dense visuellement.",
            "La section parcours a donc été conçue avec de grands visuels, des cartes flottantes et une mise en page plus éditoriale.",
          ],

          cards: [
            {
              title: "Cartes flottantes",
              text:
                "Séparer les informations secondaires du contenu principal.",
            },
            {
              title: "Visuels larges",
              text:
                "Donner plus d’importance aux différentes étapes du parcours.",
            },
          ],
        },

        designSystem: {
          eyebrow: "UI System",

          title: "Créer un système visuel cohérent",

          items: [
            {
              title: "Palette simple",
              text:
                "Limiter les couleurs pour garder le focus sur les projets.",
            },
            {
              title: "Espacements",
              text:
                "Créer une lecture plus aérée et plus lisible.",
            },
            {
              title: "Animations discrètes",
              text:
                "Utiliser le motion pour accompagner la navigation.",
            },
            {
              title: "Composants réutilisables",
              text:
                "Uniformiser les cartes, tags et layouts.",
            },
          ],
        },

        mobile: {
          eyebrow: "Responsive",

          title: "Adapter l’expérience au mobile",

          paragraphs: [
            "Certaines interactions pensées pour desktop fonctionnaient moins bien sur mobile.",
            "J’ai simplifié certaines animations et ajusté la hiérarchie pour améliorer la lisibilité.",
            "L’objectif était de conserver une navigation fluide sur tous les formats.",
          ],

          takeawayTitle: "Constat",

          takeaway:
            "Les interactions doivent rester au service de la lisibilité et de la navigation.",
        },

        outcome: {
          eyebrow: "Résultat",

          title: "Ce que ce projet m’a permis de travailler",

          items: [
            "Architecture de l’information",
            "Conception de composants réutilisables",
            "Structuration de case studies",
            "Responsive design",
            "Implémentation front-end avec React",
            "Cohérence UX/UI à l’échelle d’un site complet",
          ],
        },
      },

      footer: {
        kicker: "Fin du case study",

        title:
          "Un projet utilisé comme terrain d’expérimentation UX/UI et front-end.",
      },
    },
  },

  en: {
    nav: {
      about: "About",
      parcours: "Journey",
      projects: "Projects",
      personal: "Side projects",
      contact: "Contact",
    },
    caseStudyCta: {
      back: "← Back to projects",
      next: "Next project →",
    },

    common: {
      viewCase: "View case study",
      back: "Back",
    },

    home: {
      kicker: "PROFESSIONAL EXPERIENCE",
      title: "Three experiences, three contexts.",
      desc:
        "Case studies highlighting the problem, the approach, and the outcome.",

      heroTitle: "I turn ideas into simple experiences.",
      heroDesc:
        "I work at the intersection of UX, UI, and interaction design, with a strong interest in complex systems. My focus: clarity, consistency, and usability.",

      ctaProjects: "View my work",
      ctaContact: "Contact me",
    },
    journey: {
      kicker: "Journey",
      title: "A chronicle of my journey",
      subtitle: "My evolution between analysis, UX and complex systems.",

      steps: [
        {
          period: "Education",
          title: "An analytical foundation with a growing interest in design",
          description:
            "I built a strong problem-solving mindset, with an increasing interest in complex systems, ergonomics and how interfaces can simplify usage.",
          floatingLabel: "Analytical mindset",

          cards: [
            { label: "Approach", value: "Structured & logical" },
            { label: "Interest", value: "Complex systems" },
            { label: "Transition", value: "Toward UX/UI" },
          ],
        },

        {
          period: "Wavestone",
          title: "Discovering the impact of design",
          description:
            "First immersion into product and consulting environments through UX audits, user research, workshops and journey simplification.",
          floatingLabel: "UX & strategy",

          cards: [
            { label: "Project", value: "Carbon calculator" },
            { label: "Methods", value: "Audit & testing" },
            { label: "Focus", value: "User clarity" },
          ],
        },

        {
          period: "Renault",
          title: "Designing for embedded systems",
          description:
            "Worked on embedded interfaces and HMI ergonomics within a complex industrial environment combining innovation, safety and product consistency.",
          floatingLabel: "Embedded UX",

          cards: [
            { label: "Industry", value: "Automotive" },
            { label: "Work", value: "HMI & UX/UI" },
            { label: "Collaboration", value: "Cross-functional teams" },
          ],
        },

        {
          period: "Today",
          title: "Designing simple experiences for complex systems",
          description:
            "I’m now looking to join product or design teams to create useful, clear and coherent experiences.",
          floatingLabel: "Product design",

          cards: [
            { label: "Goal", value: "UX/UI & Product" },
            { label: "Strength", value: "System thinking" },
            { label: "Approach", value: "Simple & structured" },
          ],
        },
      ],
    },

    about: {
      kicker: "About",

      title: "A structured approach focused on simplicity.",

      desc:
        "I enjoy designing experiences that guide users clearly by aligning user needs, technical constraints and product goals.",

      cardTitle: "What I bring",

      points: [
        "Ability to clarify complex problems (audit, testing, synthesis)",
        "End-to-end journey design (flows → UI → iterations)",
        "Design system integration and interaction consistency",
        "Clear communication with stakeholders",
      ],

      cards: [
        {
          label: "Domains",
          value: "Automotive · Space · ESG",
        },
        {
          label: "Methods",
          value: "Audit · Testing · Workshops",
        },
        {
          label: "Deliverables",
          value: "Flows · UI · Prototypes",
        },
      ],
    },

    process: {
      kicker: "MY APPROACH",
      title: "From insight to interface.",
      desc:
        "Each project follows a simple path: understand, clarify, design, validate.",

      steps: [
        { k: "01", t: "Understand", d: "Context, constraints, goals." },
        { k: "02", t: "Clarify", d: "Audit, testing, insights." },
        { k: "03", t: "Design", d: "Flows, interaction model, UI." },
        { k: "04", t: "Validate", d: "Feedback and iterations." },
      ],
    },

    projects: {
      ctaview: "View case study",
      renault: {
        title: "Renault Group — UX/UI & HMI Ergonomics",
        role: "UX/UI & HMI Engineer · ALTEN (Renault mission)",
        desc:
          "Design of in-vehicle interfaces, functional specifications, user testing, physical prototype validation and participation in innovation projects.",
        tags: ["UX/UI", "HMI Ergonomics", "Innovation"],
      },

      goodplanet: {
        title: "GoodPlanet — Carbon calculator",
        desc:
          "UX/UI redesign of a questionnaire to improve clarity, completion rate, and engagement.",
        role: "UX/UI Designer · Wavestone",
      },

      alten: {
        title: "Alten — Data-driven interfaces",
        desc:
          "Rapid design of two interfaces: an industrial simulator and a railway optimization dashboard.",
        role: "UX/UI · Internal projects",
      },
    },

    personal: {
      kicker: "SIDE PROJECTS",
      title: "Explorations & prototypes.",
      desc:
        "Projects to explore ideas, prototype quickly, and continuously learn.",

      project1: {
        title: "Wedding website — UX & design",
        desc:
          "One-page website design: art direction, content co-creation, and development using Webflow.",
      },

      project2: {
        title: "Interactive quiz — Unity prototype",
        desc:
          "Interactive quiz prototype: game flow design, bonus system, and interface for team-based gameplay.",
      },

      project3: {
        title: "Off-road isochrone generator",
        desc:
          "Academic prototype using a Dijkstra-based algorithm adapted for GIS data.",
      },
      portfolio: {
        title: "UX/UI Portfolio — Designing a recruiter experience",
        role: "Product Designer · Personal project",
        desc: "Designing a portfolio as a product experience focused on storytelling, information hierarchy and project presentation.",
      },
    },

    contact: {
      kicker: "CONTACT",
      title: "Let’s talk.",
      desc:
        "Available for UX/UI and interaction design roles. Happy to connect.",

      ctaLinkedin: "LinkedIn",
      ctaBack: "Back to projects",
    },
    renaultPage: {
      hero: {
        kicker: "RENAULT GROUP",
        title: "UX/UI & HMI Ergonomics for Embedded Systems",
        desc:
          "Mission carried out at Renault Group focused on embedded interfaces, HMI ergonomics and product innovation.",
      },

      intro:
        "Within multidisciplinary teams, I contributed to the design of embedded experiences alongside UX, product and engineering teams.",

      responsibilitiesTitle: "My responsibilities",

      responsibilities: [
        "User needs analysis and project framing",
        "Writing HMI/UI functional specifications",
        "Wireframing and interface design in Figma",
        "Participation in innovation projects",
        "UX writing and cross-team convergence",
        "Competitive benchmarking",
        "On-road vehicle testing",
        "User testing management",
        "Validation plan writing",
        "Physical prototype validation",
      ],

      approachTitle: "My approach",

      approachCards: [
        {
          title: "Understand",
          desc:
            "Analyze usage, business constraints and user expectations.",
        },
        {
          title: "Structure",
          desc:
            "Define coherent journeys and understandable interactions.",
        },
        {
          title: "Design",
          desc:
            "Create ergonomic interfaces adapted to embedded environments.",
        },
        {
          title: "Validate",
          desc:
            "Test journeys on prototypes and with users.",
        },
      ],

      confidential: {
        kicker: "CONFIDENTIAL",
        title: "Confidential project",
        desc:
          "Some visual assets and features cannot be publicly displayed.",
        button: "Access confidential project",
        modalTitle: "Project available on request",
        modalDesc:
          "I can present the UX process, prototypes and design decisions during a discussion.",
      },
      heroSkills: [
        "UX Design",
        "HMI Ergonomics",
        "Figma",
        "Wireframing",
        "Validation",
      ],

      contextCards: [
        {
          label: "Context",
          value: "Automotive embedded systems",
        },
        {
          label: "Environment",
          value: "Product · UX · Validation",
        },
        {
          label: "Focus",
          value: "Ergonomics · Clarity · Innovation",
        },
      ],

      skillsSection: {
        kicker: "SKILLS",
        title: "Skills used",
      },

      skills: [
        "UX Design",
        "HMI Ergonomics",
        "Figma",
        "Wireframing",
        "UX Writing",
        "User Testing",
        "Benchmark",
        "Validation",
        "Interaction Design",
      ],
    },
    goodplanetPage: {
      summary: "SUMMARY",

      toc: {
        overview: "Overview",
        problem: "Problem",
        workshop: "Workshop",
        research: "Research & audit",
        solution: "UX/UI solution",
        beforeAfter: "Before / After",
        result: "Results",
        learnings: "Learnings",
      },

      hero: {
        kicker: "Internship · Wavestone · 6 months",

        title:
          "UX/UI redesign of a carbon calculator — GoodPlanet Foundation",

        desc:
          "Goal: simplify the questionnaire journey, encourage completion, raise awareness about carbon footprint, and clarify the compensation logic proposed by GoodPlanet.",

        tags: [
          "UX Research",
          "UX Audit",
          "User testing",
          "UI Design",
          "Figma",
          "Miro",
        ],

        cards: {
          role: "Role",
          roleValue: "UX/UI Designer Intern",

          collaboration: "Collaboration",
          collaborationValue: "1 Wavestone consultant",

          deliverables: "Deliverables",
          deliverablesValue: "Audit, user flows, mockups",
        },
      },

      overview: {
        eyebrow: "Overview",

        title: "Context & objectives",

        desc:
          "GoodPlanet wanted to improve the experience of its carbon footprint questionnaire: make it simpler, smoother, and encourage users to complete it.",

        objectives: [
          {
            label: "Goal 1",
            title: "Raise awareness",
            desc:
              "Make carbon impact understandable and tangible throughout the experience.",
          },
          {
            label: "Goal 2",
            title: "Simplify the questionnaire",
            desc:
              "Reduce friction and clarify the steps to increase completion.",
          },
          {
            label: "Goal 3",
            title: "Explain compensation",
            desc:
              "Better explain the purpose and mechanics of GoodPlanet compensation.",
          },
        ],
      },

      problem: {
        eyebrow: "Problem",

        title: "What prevented users from completing the flow",

        points: [
          "The journey was perceived as long and complex.",
          "Lack of guidance: steps, progression, objectives.",
          "Low clarity around compensation: benefits and intent.",
        ],

        calloutLabel: "Key question",

        calloutTitle: "How could we reduce abandonment?",

        calloutDesc:
          "By reducing cognitive load (structure, microcopy, feedback) and giving meaning to the experience (awareness + purpose).",
      },

      workshop: {
        eyebrow: "Workshop",

        title: "Brainstorming on Miro",

        desc1:
          "We organized a brainstorming workshop on Miro by grouping features into categories and prioritizing the most relevant ones.",

        desc2:
          "Three main directions emerged: raising awareness, simplifying the experience, and explaining compensation.",
      },

      research: {
        eyebrow: "Research",

        title: "UX audit & user testing",

        desc:
          "To complement the available feedback, we conducted usability tests on the existing questionnaire and performed a UX audit to identify friction points.",

        methodsLabel: "Methods",

        methodsTitle: "What we did",

        methods: [
          "Usability testing on the existing flow",
          "Heuristic audit (clarity, feedback, consistency)",
          "Synthesis of friction points and recommendations",
        ],

        outputLabel: "Outcome",

        outputTitle: "Actionable insights",

        outputs: [
          "Rethink progression and steps",
          "Improve microcopy (labels and helper texts)",
          "Highlight the purpose of compensation",
        ],

        caption:
          "Example: mapping the questionnaire flow and decision points.",
      },

      solution: {
        eyebrow: "Design",

        title: "UX/UI solution designed in Figma",

        desc:
          "We designed a new interface in Figma, first presented internally at Wavestone and then to GoodPlanet. The proposal was very well received.",

        figures: [
          "Screen: card component.",
          "Screen: layout of textual questions.",
          "Screen: results summary and compensation.",
        ],

        calloutLabel: "UI decisions",

        calloutTitle: "Design principles",

        principles: [
          "Clear progression (steps and feedback)",
          "Reduced cognitive load (layout and microcopy)",
          "Educational moments integrated into the journey",
        ],
      },

      beforeAfter: {
        eyebrow: "Comparison",

        title: "Before / After",

        desc:
          "Example of a comparison on the final results screen:",

        beforeCaption:
          "Before: compensation was displayed immediately, while carbon footprint details appeared below without clearly explaining the purpose of compensation.",

        afterCaption:
          "After: meaningful visual comparisons helped users better understand their carbon impact. Compensation became secondary and was explained more clearly.",

        cards: [
          {
            label: "Before",
            title: "Friction",
            desc:
              "Limited navigation and feedback created uncertainty and abandonment.",
          },
          {
            label: "After",
            title: "Clarity",
            desc:
              "Clear progression and guidance improved confidence and continuity.",
          },
          {
            label: "After",
            title: "Meaning",
            desc:
              "Educational content and compensation explanations increased engagement.",
          },
        ],
      },

      result: {
        eyebrow: "Results",

        title: "Deployment & impact",

        desc:
          "The mission ended before development by Wavestone, but GoodPlanet later deployed the new questionnaire on its website: the UX/UI decisions designed during the mission were implemented in production.",

        calloutLabel: "Impact",

        calloutTitle:
          "Expected results (I was no longer there to measure them)",

        points: [
          "Expected reduction in abandonment thanks to a clearer journey",
          "Better understanding of carbon footprint and compensation",
          "Solution validated by client teams before launch",
        ],

        cta: "View the live calculator",
      },

      learnings: {
        eyebrow: "Conclusion",

        title: "What I learned",

        points: [
          "Transforming user feedback into concrete UI decisions.",
          "Designing a journey that creates meaning, not just an interface.",
          "Managing multi-stakeholder validation through iterations.",
        ],
      },
    },
    altenPage: {
      hero: {
        title:
          "Designing data-driven interfaces for complex systems",

        desc:
          "Two projects carried out at ALTEN focused on data visualization, simulation and decision-support interfaces.",

        skills: [
          "UX Design",
          "Dashboard",
          "Data visualization",
          "Figma",
          "Interaction Design",
        ],
      },

      context: {
        kicker: "CONTEXT",

        title:
          "Transforming complex data into readable interfaces",

        desc:
          "These internal projects aimed to rapidly design interfaces capable of structuring complex data and supporting decision making.",

        cards: [
          {
            title: "Context",
            value: "ALTEN internal projects",
          },
          {
            title: "Focus",
            value: "Clarity & visualization",
          },
          {
            title: "Challenges",
            value: "Fast understanding",
          },
        ],
      },

      approach: {
        kicker: "APPROACH",

        title: "My UX approach",

        desc:
          "Structuring information and designing understandable interfaces despite business complexity.",

        steps: [
          {
            number: "01",
            title: "Understand",
            desc:
              "Analyze data, business constraints and user needs.",
          },
          {
            number: "02",
            title: "Structure",
            desc:
              "Prioritize information and organize interactions.",
          },
          {
            number: "03",
            title: "Design",
            desc:
              "Create readable and user-oriented interfaces.",
          },
          {
            number: "04",
            title: "Clarify",
            desc:
              "Reduce cognitive load and support decision making.",
          },
        ],
      },

      project1: {
        kicker: "PROJECT 01",

        title: "Industrial simulator",

        desc:
          "Design of a simulation interface allowing users to manipulate parameters and quickly visualize their impacts.",

        cards: [
          {
            title: "Problem",
            desc:
              "Displaying large amounts of information without overwhelming users.",
          },
          {
            title: "UX thinking",
            desc:
              "Structuring inputs and prioritizing data to improve comprehension.",
          },
          {
            title: "Solution",
            desc:
              "A clear interface focused on key actions and immediate result visualization.",
          },
        ],
      },

      project2: {
        kicker: "PROJECT 02",

        title: "Railway dashboard",

        desc:
          "Creation of a railway optimization dashboard designed to quickly analyze operational indicators.",

        cards: [
          {
            title: "Challenge",
            desc:
              "Making complex operational data easy to understand.",
          },
          {
            title: "Approach",
            desc:
              "Building a strong visual hierarchy to highlight key information.",
          },
          {
            title: "Result",
            desc:
              "A more understandable dashboard focused on decision support.",
          },
        ],
      },

      learnings: {
        kicker: "LEARNINGS",

        title: "What I learned from these projects",

        desc:
          "Designing for complex environments is primarily about clarifying information.",

        text:
          "These projects allowed me to work on data-oriented problems where readability and information hierarchy are essential.",

        points: [
          "Structuring complex business interfaces",
          "Transforming data into understandable experiences",
          "Designing quickly under constraints",
          "Supporting decision making",
          "Creating user-oriented interfaces",
        ],
      },
    },
    weddingPage: {
      topbar: {
        back: "← Back",
        label: "Personal project",
      },

      hero: {
        kicker: "Web · One-page · Webflow",
        title: "Wedding website — UX/UI design & Webflow development",
        desc:
          "Goal: create a simple, elegant and accessible website gathering all essential information on a single page.",
        tags: [
          "Art direction",
          "UI Design",
          "Workshops",
          "Figma",
          "Webflow",
        ],

        cards: {
          role: {
            label: "Role",
            value: "UX/UI Designer",
          },
          format: {
            label: "Format",
            value: "One-page",
          },
          deliverables: {
            label: "Deliverables",
            value: "Mockups + Webflow website",
          },
        },

        imageCaption:
          "Website preview (cover). Replace with your best visual.",
      },

      toc: {
        title: "TABLE OF CONTENTS",
        context: "Context",
        da: "Art direction",
        coDesign: "Co-design & content",
        nav: "Navigation variants",
        build: "Webflow implementation",
        result: "Result",
      },

      context: {
        eyebrow: "Context",
        title: "A simple, useful and frictionless website",

        desc:
          "The couple wanted a single place to quickly share key wedding information. The one-page approach enabled smooth reading without overwhelming guests with complex navigation.",

        cards: [
          {
            label: "Goal",
            title: "Centralize information",
            desc: "Location, date, schedule and practical details.",
          },
          {
            label: "Constraint",
            title: "Ultra simple",
            desc: "Accessible to everyone, mobile-first.",
          },
          {
            label: "Approach",
            title: "Co-design",
            desc: "Workshops and iterations with the couple.",
          },
        ],
      },

      artisticDirection: {
        eyebrow: "Design",
        title: "Art direction inspired by a photo",

        desc:
          "I built the color palette and visual direction from a main inspirational photo, then created typography, components and visual hierarchy around it.",

        figureCaption:
          "Figma moodboard: palette, typography and components.",
      },

      workshops: {
        eyebrow: "Workshops",
        title: "Brainstorming workshops with the couple",

        desc:
          "Several workshops helped refine the content: what information is truly useful? In which order? What editorial tone should be used?",

        bullets: [
          "Definition of essential sections",
          "Content prioritization",
          "Microcopy: short titles and scannable information",
        ],
      },

      navigation: {
        eyebrow: "Iterations",
        title: "Two navbar variants to gather feedback",

        desc:
          "I proposed two navigation concepts — horizontal and vertical — then collected feedback to identify the clearest option.",

        figureCaption:
          "Comparison: horizontal vs vertical navbar.",

        decision: {
          label: "Decision",
          title: "Choosing the clearest navigation",
          desc:
            "The main criterion was mobile readability and immediate understanding.",
        },
      },

      build: {
        eyebrow: "Build",
        title: "Fast deployment with Webflow",

        desc:
          "Once the design and content were validated, I built the website in Webflow to achieve a responsive and maintainable result.",

        bullets: [
          "Responsive implementation (mobile-first)",
          "Simple and consistent components",
          "Fast deployment",
        ],

        figureCaption: "Final result (Webflow).",
      },

      result: {
        eyebrow: "Result",
        title: "A clear, elegant and accessible website",

        desc:
          "The final result is a single scannable page with a clear hierarchy allowing guests to quickly find information.",

        liveCta: "View live website",
        nextProject: "View next project",
      },
    },
    quizProjectPage: {
      topbar: {
        back: "← Back",
        label: "Personal project",
      },

      hero: {
        kicker: "Unity · Interaction design · Prototype",

        title:
          "Interactive quiz — from oral format to a gamified UI experience",

        desc:
          "As a quiz enthusiast, I used to host quizzes orally. I wanted to transform this format into a Unity application that structures the game flow: board, phases, bonuses and feedback.",

        tags: [
          "UX",
          "Interaction Design",
          "Content AI (XML)",
          "Prototype",
          "Unity",
        ],

        cards: {
          objective: {
            label: "Objective",
            value: "Run a quiz without friction",
          },

          format: {
            label: "Format",
            value: "Phases + board + bonuses",
          },

          deliverables: {
            label: "Deliverables",
            value: "Unity prototype + UI states",
          },
        },

        note: {
          label: "Note",
          title: "Use of AI (transparency)",

          desc:
            "ChatGPT was used as a technical assistant to speed up certain tasks (snippets, debugging, structuring), while keeping UX/UI design and product decisions under my control.",
        },
      },

      toc: {
        title: "TABLE OF CONTENTS",

        items: {
          context: "Context & problem",
          format: "Game format",
          system: "System architecture",
          flow: "Interaction flow",
          states: "Interface states",
          screens: "Key screens",
          result: "Result & impact",
        },
      },

      sections: {
        context: {
          eyebrow: "Context",

          title:
            "Why move from an oral quiz to an interface",

          desc:
            "During manually hosted quizzes, several issues often appeared: managing team turns, tracking bonuses/special rules, lack of visual support, risk of errors, and difficulty integrating multimedia content.",

          callouts: [
            {
              label: "Pain point",
              title: "Host cognitive load",
              desc:
                "Too many rules and states to manage simultaneously.",
            },

            {
              label: "Pain point",
              title: "Player readability",
              desc:
                "Progression and themes are less visible without UI support.",
            },

            {
              label: "Pain point",
              title: "Rhythm & errors",
              desc:
                "Transitions and bonuses can break the flow and create inconsistencies.",
            },
          ],
        },

        format: {
          eyebrow: "Game format",

          title:
            "A board, multiple phases, and interactive bonuses",

          desc:
            "The quiz is inspired by TV-style quiz formats. The board includes 4 themes (one per team) + 1 neutral theme.",

          bullets: [
            "Phase 1 — Burger Quiz: determines play order through a speed round.",
            "Phase 2 — Memorization: the board is displayed for 30 seconds while teams memorize positions.",
            "Phase 3 — Turn loop: one team selects a question while others can activate bonuses.",
          ],

          callout: {
            label: "UX decision",
            title: "Why show the board for 30 seconds?",

            desc:
              "To create a strategic and collective tension moment while reinforcing memorization.",
          },
        },

        system: {
          eyebrow: "Architecture",

          title: "Game system architecture",

          desc:
            "I structured the quiz into phases to make the experience smoother and reduce transition errors.",

          figureCaption:
            "Macro architecture: setup → Burger Quiz → memorization → gameplay loop → end.",
        },

        flow: {
          eyebrow: "Interaction",

          title: "Turn-by-turn interaction flow",

          desc:
            "Each turn follows a stable sequence: selecting a tile, difficulty, question display, bonus management, validation, and score/state updates.",

          figureCaption:
            "Micro flow: select → question → bonus (if triggered) → validation → score → next team.",
        },

        states: {
          eyebrow: "Interface",

          title: "UI states (readability + robustness)",

          desc:
            "One of the UX challenges was making states visible (played tiles, active team, triggered bonuses) while avoiding inconsistent transitions.",

          figureCaption:
            "UI states: board / question / bonus / feedback (notifications).",
        },

        screens: {
          eyebrow: "Prototype",

          title: "Key Unity prototype screens",

          figures: {
            grid:
              "Board: themes, tile states, quick readability.",

            question:
              "Question: focus, multimedia support (image/audio/video).",
          },

          bonus: {
            label: "Bonuses",

            title: "Interactive bonus mechanics",

            items: [
              "Duel: a team challenges the active team (buzz mini UI + visual lock).",
              "Hold Up: steal attempt if the active team fails (notification + clear state).",
              "x2: doubles the value of a question (visual confirmation).",
            ],
          },

          feedback: {
            label: "UX Feedback",

            title: "Dynamic notifications",

            desc:
              "To improve real-time understanding, notifications make actions visible: “Team 2 launches a Duel”, “Hold Up attempted”, “x2 used”, etc.",
          },
        },

        result: {
          eyebrow: "Result",

          title: "Result & impact",

          bullets: [
            "Management of multiple teams and game phases",
            "Memorizable board + clear states (played tiles)",
            "Strategic bonuses and real-time feedback",
            "Multimedia support (image/audio/video)",
            "Questions loaded via XML files (customizable quiz)",
          ],

          callout: {
            label: "What it demonstrates",

            title: "UX / HMI skills",

            items: [
              "Interactive systems design",
              "Complex state management and robust transitions",
              "Interaction design for collaborative experiences",
              "Rapid prototyping and iterations",
            ],
          },
        },
      },
    },
    portfolioCaseStudy: {
      hero: {
        kicker: "Portfolio · UX/UI · Personal project",

        title: "Designing and building my UX/UI portfolio",

        desc:
          "This project focused on designing a portfolio able to present my projects, background and working approach in a clear and structured way.",

        tags: [
          "UX/UI",
          "Information architecture",
          "Design system",
          "React",
        ],
      },

      sections: {
        context: {
          eyebrow: "Context",

          title: "Creating a clear and structured portfolio",

          paragraphs: [
            "The goal was to design a portfolio able to present several UX/UI projects with different levels of detail.",
            "I also wanted to create a structure flexible enough to add new projects easily while keeping visual and editorial consistency.",
          ],

          cards: [
            {
              title: "Information hierarchy",
              text: "Make projects quickly understandable.",
            },
            {
              title: "Reusable structure",
              text: "Make future case studies easier to add.",
            },
            {
              title: "Consistency",
              text: "Standardize components and layouts.",
            },
          ],
        },

        storytelling: {
          eyebrow: "Architecture",

          title: "Structuring the portfolio as a journey",

          paragraphs: [
            "I structured the portfolio around a simple progression: introduction, background, projects and contact.",
            "This structure helps guide navigation and avoids fragmented browsing.",
          ],

          steps: [
            "Introduction",
            "Background",
            "Projects",
            "Skills",
            "Contact",
          ],

          conclusion:
            "Each section was designed to progressively introduce important information.",
        },

        journey: {
          eyebrow: "Journey",

          title: "Designing a more visual journey section",

          paragraphs: [
            "I wanted to avoid a traditional timeline that felt visually dense.",
            "The journey section was designed with large visuals, floating cards and a more editorial layout.",
          ],

          cards: [
            {
              title: "Floating cards",
              text:
                "Separate secondary information from the main content.",
            },
            {
              title: "Large visuals",
              text:
                "Give more importance to each career step.",
            },
          ],
        },

        designSystem: {
          eyebrow: "UI System",

          title: "Building a coherent visual system",

          items: [
            {
              title: "Simple palette",
              text:
                "Limit colors to keep focus on projects.",
            },
            {
              title: "Spacing",
              text:
                "Create a cleaner and more readable layout.",
            },
            {
              title: "Subtle motion",
              text:
                "Use motion to support navigation.",
            },
            {
              title: "Reusable components",
              text:
                "Standardize cards, tags and layouts.",
            },
          ],
        },

        mobile: {
          eyebrow: "Responsive",

          title: "Adapting the experience for mobile",

          paragraphs: [
            "Some desktop interactions worked less effectively on mobile.",
            "I simplified some animations and adjusted hierarchy to improve readability.",
            "The goal was to keep navigation fluid across devices.",
          ],

          takeawayTitle: "Observation",

          takeaway:
            "Interactions should always support readability and navigation.",
        },

        outcome: {
          eyebrow: "Outcome",

          title: "What this project allowed me to work on",

          items: [
            "Information architecture",
            "Reusable component design",
            "Case study structuring",
            "Responsive design",
            "Front-end implementation with React",
            "UX/UI consistency across a full website",
          ],
        },
      },

      footer: {
        kicker: "End of case study",

        title:
          "A project used as a UX/UI and front-end experimentation playground.",
      },
    },
  },
};