import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import cover from "../assets/renault/cover.jpg";
import workshop from "../assets/renault/workshop.png";
import flow from "../assets/renault/flow.png";
import concept1 from "../assets/renault/concept-1.png";
import concept2 from "../assets/renault/concept-2.png";
import concept3 from "../assets/renault/concept-3.png";
import before1 from "../assets/renault/before-1.png";
import after1 from "../assets/renault/after-1.png";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-gray-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Callout({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-gray-50 p-6">
      <p className="text-xs font-semibold tracking-wide text-gray-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-gray-900">{title}</p>
      <div className="mt-3 text-gray-700">{children}</div>
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="rounded-2xl overflow-hidden border bg-white">
      <img src={src} alt={alt} className="w-full h-auto" />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export default function RenaultCaseStudy() {
  const toc = [
    { id: "overview", label: "Aperçu" },
    { id: "context", label: "Contexte" },
    { id: "challenge", label: "Défis" },
    { id: "workshops", label: "Ateliers" },
    { id: "experience", label: "Parcours" },
    { id: "interaction", label: "Modèle d’interaction" },
    { id: "concepts", label: "Concepts UI" },
    { id: "before-after", label: "Avant / Après" },
    { id: "outcome", label: "Résultats" },
    { id: "learnings", label: "Apprentissages" },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
  const fromScrollY = location.state?.fromScrollY;
    navigate("/", {
      state: {
        restoreScrollY: typeof fromScrollY === "number" ? fromScrollY : null,
      },
    });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

          <button onClick={handleBack} className="text-sm text-gray-500 hover:text-black">
            ← Retour
          </button>
          <div className="flex items-center gap-2">
            <a href="#overview" className="text-sm text-gray-700 hover:text-gray-900">
              Case study
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">
              Mission · Renault · Prestataire ALTEN
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Modes immersifs à l’arrêt — Conception UX/UI IHM (Innovation)
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Dans le cadre d’un projet d’innovation sur les modes de conduite, j’ai conçu de bout en bout
              un parcours utilisateur de <strong>modes immersifs à l’arrêt</strong> (divertissement,
              relax/sieste, travail). L’enjeu : proposer une expérience intégrée au{" "}
              <strong>système design existant</strong> tout en introduisant un{" "}
              <strong>nouveau modèle d’interaction</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>UX Strategy</Tag>
              <Tag>User Flows</Tag>
              <Tag>Interaction Model</Tag>
              <Tag>UI / System Design</Tag>
              <Tag>Workshops</Tag>
              <Tag>Figma</Tag>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Poste</p>
                <p className="mt-1 font-medium">Ingénieur UX/UI IHM</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Contexte</p>
                <p className="mt-1 font-medium">Innovation · Modes à l’arrêt</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Livrables</p>
                <p className="mt-1 font-medium">Parcours · Concepts · UI</p>
              </div>
            </div>

            <div className="lg:col-span-12 flex justify-center mt-8">
              <div className="w-full max-w-3xl">
                <Callout label="Note" title="Confidentialité">
                  <p className="mt-2 text-sm text-gray-700">
                    Les visuels et exemples présentés sont <strong>généralisés</strong> /{" "}
                    <strong>anonymisés</strong> (concepts, schémas, écrans non sensibles).
                  </p>
                </Callout>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={cover}
                alt="Aperçu concept modes immersifs à l’arrêt"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-20">
              <p className="text-xs font-semibold tracking-wide text-gray-500">SOMMAIRE</p>
              <nav className="mt-4 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            <Section id="overview" eyebrow="Aperçu" title="Objectif produit">
              <p>
                Imaginer une expérience “à l’arrêt” comparable aux meilleures pratiques du marché,
                tout en restant cohérent avec le système design et les contraintes IHM automobile.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Callout label="Objectif 1" title="Valeur utilisateur">
                  Proposer des modes utiles et crédibles : <strong>Divertissement</strong>,{" "}
                  <strong>Relax / Sieste</strong>, <strong>Travail</strong>.
                </Callout>
                <Callout label="Objectif 2" title="Intégration système">
                  S’intégrer au système design existant sans casser la cohérence visuelle et interactionnelle.
                </Callout>
                <Callout label="Objectif 3" title="Modèle d’interaction">
                  S'adapter au nouveau modèle d'intérection qui arrivera sur le prochain véhicule.
                </Callout>
              </div>
            </Section>

            <Section id="context" eyebrow="Contexte" title="Rôle et collaboration">
              <p>
                Mission Renault en tant que prestataire ALTEN, poste d’ingénieur UX/UI IHM.
                Travail en collaboration avec le leader produit véhicule, le leader produit UX,
                des référents métiers (contributeurs mécaniques) et des équipes UX/innovation.
              </p>
              <Callout label="Mon rôle" title="De bout en bout">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Conception du parcours utilisateur (end-to-end)</li>
                  <li>Contribution aux ateliers de brainstorming</li>
                  <li>Formalisation des étapes de comportement du véhicule</li>
                  <li>Concepts UI et intégration au système design</li>
                </ul>
              </Callout>
            </Section>

            <Section id="challenge" eyebrow="Défis" title="Ce qu’il fallait résoudre">
              <ul className="list-disc pl-5 space-y-2">
                <li>Mettre à profit le <strong>nouveau modèle d’interaction</strong> sans perturber l’existant.</li>
                <li>Définir une expérience cohérente pour des modes à l'arrêt pour l'instant inconnu chez Renault.</li>
                <li>Aligner des parties prenantes multi-métiers (UX, produit, véhicule, technique).</li>
                <li>Concevoir des étapes de “comportement du véhicule” qui rendent le mode crédible.</li>
              </ul>
            </Section>

            <Section id="workshops" eyebrow="Ateliers" title="Brainstorming et convergence">
              <p>
                Plusieurs ateliers ont permis de construire progressivement le parcours et les attentes
                associées à chaque mode. L’objectif était de clarifier :{" "}
                <strong>quand</strong> le mode démarre, <strong>ce que fait la voiture</strong>,
                <strong> ce que perçoit l’utilisateur</strong>, et <strong>comment il contrôle</strong>.
              </p>

              <Figure
                src={workshop}
                alt="Atelier brainstorming (anonymisé)"
                caption="Ateliers : les états des contributeurs véhicules à chaque étape."
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Callout label="Sortie atelier" title="Définition des étapes">
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Préconditions (sécurité / disponibilité)</li>
                    <li>Onboarding et choix du mode</li>
                    <li>Activation / préparation du véhicule</li>
                    <li>Contrôle pendant le mode</li>
                    <li>Sortie du mode / reprise</li>
                  </ul>
                </Callout>
                <Callout label="Sortie atelier" title="Critères UX">
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Clarté et guidance</li>
                    <li>Mise en valeur des modes</li>
                    <li>Effet “waouh” maîtrisé</li>
                    <li>Contrôle et réversibilité</li>
                    <li>Cohérence avec le système design</li>
                  </ul>
                </Callout>
              </div>
            </Section>

            <Section id="experience" eyebrow="UX" title="Parcours utilisateur (end-to-end)">
              <p>
                J’ai formalisé le parcours en étapes, avec des points de décision et des feedbacks clairs
                pour que l’utilisateur comprenne ce qui se passe (et garde le contrôle).
              </p>

              <Figure
                src={flow}
                alt="User flow modes à l’arrêt"
                caption="Flow : entrée → sélection mode → préparation → expérience → sortie."
              />

              <Callout label="Principe" title="Guidance progressive">
                <p className="mt-2">
                  L’utilisateur est guidé étape par étape (progression + états), sans surcharge.
                  Chaque étape a une intention : <strong>rassurer</strong>, <strong>expliquer</strong>,
                  <strong>donner la main</strong>.
                </p>
              </Callout>
            </Section>

            <Section id="interaction" eyebrow="Interaction" title="Nouveau modèle d’interaction">
              <p>
                L’innovation imposait un modèle d’interaction adapté : accès rapide, états clairs,
                contrôles essentiels, et intégration au système design.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Callout label="Décision" title="États lisibles">
                  Un système d’états (prêt / en cours / pause / sortie) pour réduire l’incertitude.
                </Callout>
                <Callout label="Décision" title="Contrôles essentiels">
                  Peu d’actions, mais les bonnes : pause, reprendre, quitter, réglages clés.
                </Callout>
                <Callout label="Décision" title="Cohérence">
                  Composants alignés avec le système design existant pour une adoption fluide.
                </Callout>
              </div>
            </Section>

            <Section id="concepts" eyebrow="UI" title="Concepts et écrans clés">
              <p>
                Ci-dessous, une sélection d’écrans clés (concept) couvrant les 3 modes : divertissement,
                relax/sieste et travail. Remplace par tes captures Figma les plus parlantes.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Figure src={concept1} alt="Concept - Choisir un mode" caption="Ecran de choix des modes." />
                <Figure src={concept2} alt="Concept - Mode divertissement" caption="Mode divertissement : choix des applications." />
                <Figure src={concept3} alt="Concept - Application" caption="Mode divertissement : Netflix." />
              </div>

              <Callout label="Design system" title="Intégration">
                <p className="mt-2">
                  L’objectif était d’<strong>étendre</strong> le système design existant (sans le casser) :
                  mêmes patterns, mêmes règles, mais adaptés à un contexte “immersion à l’arrêt”.
                </p>
              </Callout>
            </Section>

            <Section id="before-after" eyebrow="Comparaison" title="Avant / Après (ou Ancien vs Nouveau)">
              <p>
                Dans le cadre d'un choix sécuritaire, le mode à l'arrêt devait afficher une IHM pour arrêter le siège en cas de danger. Suite à un atelier, on a décidé de modifier la stratégie de démarrage.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Figure src={before1} alt="Avant / référence" caption="Avant : le siège se lance quand on lance le film." />
                <Figure src={after1} alt="Après / concept" caption="Après : l'utilisateur décide de lancer le siège." />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Callout label="Avant" title="Génant">
                  Automatisme → le siège part même si l'utilisateur n'a pas fini de configurer son film.
                </Callout>
                <Callout label="Après" title="Clarté">
                  Progression + états → compréhension et confiance.
                </Callout>
                <Callout label="Après" title="Décision">
                  Scénarisation + interactions essentielles → l'utilisateur décide de quand il veut profiter de son expérience.
                </Callout>
              </div>
            </Section>

            <Section id="outcome" eyebrow="Résultats" title="Ce qui a été produit">
              <ul className="list-disc pl-5 space-y-2">
                <li>Parcours complet des modes à l’arrêt (end-to-end)</li>
                <li>Définition des étapes de comportement du véhicule</li>
                <li>Concepts UI et recommandations d’intégration au système design</li>
                <li>Alignement multi-parties prenantes via ateliers</li>
              </ul>

              <Callout label="Ce que tu peux dire en entretien" title="Impact attendu (sans chiffres sensibles)">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Expérience plus cohérente et compréhensible (guidance + états)</li>
                  <li>Meilleure valorisation des usages “à l’arrêt”</li>
                  <li>Base solide pour prototypage et itérations futures</li>
                </ul>
              </Callout>
            </Section>

            <Section id="learnings" eyebrow="Conclusion" title="Apprentissages">
              <ul className="list-disc pl-5 space-y-2">
                <li>Concevoir un modèle d’interaction nouveau sans casser l’écosystème existant.</li>
                <li>Traduire des contraintes véhicule/métiers en étapes UX compréhensibles.</li>
                <li>Faire converger des acteurs multi-disciplines autour d’un flow commun.</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="w-full sm:w-auto text-center border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
                >
                  Retour à l’accueil
                </Link>
                <Link
                  to="/goodplanet"
                  className="w-full sm:w-auto text-center bg-black text-white px-6 py-3 rounded-2xl hover:opacity-80 transition"
                >
                  Projet suivant (GoodPlanet)
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}