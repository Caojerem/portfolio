import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import cover from "../assets/goodplanet/cover.jpg";
import flow from "../assets/goodplanet/figma-flow.png";
import before1 from "../assets/goodplanet/before-1.png";
import after1 from "../assets/goodplanet/after-1.png";
import ui1 from "../assets/goodplanet/ui-1.png";
import ui2 from "../assets/goodplanet/ui-2.png";
import ui3 from "../assets/goodplanet/ui-3.png";
import type { ReactNode } from "react";

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

export default function CarbonCaseStudy() {
  const toc = [
    { id: "overview", label: "Aperçu" },
    { id: "problem", label: "Problème" },
    { id: "workshop", label: "Atelier Miro" },
    { id: "research", label: "Audit & tests" },
    { id: "solution", label: "Solution UX/UI" },
    { id: "before-after", label: "Avant / Après" },
    { id: "result", label: "Résultat" },
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
            <a
              href="#overview"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
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
              Stage · Wavestone · 6 mois
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Refonte UX/UI d’un calculateur carbone — Fondation GoodPlanet
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Objectif : simplifier le parcours du questionnaire, encourager la complétion,
              renforcer la sensibilisation à l’empreinte carbone et clarifier la logique de
              compensation proposée par GoodPlanet.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>UX Research</Tag>
              <Tag>Audit UX</Tag>
              <Tag>Tests utilisateurs</Tag>
              <Tag>UI Design</Tag>
              <Tag>Figma</Tag>
              <Tag>Miro</Tag>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Rôle</p>
                <p className="mt-1 font-medium">UX/UI Designer (stage)</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Collaboration</p>
                <p className="mt-1 font-medium">1 consultante Wavestone</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Livrables</p>
                <p className="mt-1 font-medium">Audit, parcours, maquettes</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={cover}
                alt="Aperçu du calculateur carbone GoodPlanet"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content with TOC */}
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
            <Section id="overview" eyebrow="Aperçu" title="Contexte et objectifs">
              <p>
                GoodPlanet souhaitait améliorer l’expérience de son questionnaire de calcul
                d’empreinte carbone : le rendre plus simple, plus fluide, et inciter
                l’utilisateur à aller au bout.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Callout label="Objectif 1" title="Sensibiliser">
                  Rendre l’impact carbone compréhensible et concret tout au long du parcours.
                </Callout>
                <Callout label="Objectif 2" title="Fluidifier le questionnaire">
                  Réduire la friction et clarifier les étapes pour augmenter la complétion.
                </Callout>
                <Callout label="Objectif 3" title="Expliquer la compensation">
                  Mieux présenter le “pourquoi” et le “comment” de la compensation GoodPlanet.
                </Callout>
              </div>
            </Section>

            <Section id="problem" eyebrow="Problème" title="Ce qui empêchait la complétion">
              <ul className="list-disc pl-5 space-y-2">
                <li>Parcours perçu comme long / complexe.</li>
                <li>Manque de repères : étapes, progression, objectifs.</li>
                <li>Faible clarté sur la compensation : bénéfices et intention.</li>
              </ul>
              <Callout label="Question clé" title="Comment réduire l’abandon ?">
                En diminuant la charge cognitive (structure, microcopy, feedback) et en
                donnant du sens (sensibilisation + finalité).
              </Callout>
            </Section>

            <Section id="workshop" eyebrow="Atelier" title="Brainstorming sur Miro">
              <p>
                Nous avons organisé un atelier de brainstorming sur Miro en regroupant les
                fonctionnalités par catégories, puis en priorisant celles les plus pertinentes.
              </p>
              <p>
                Trois axes sont ressortis : <strong>sensibiliser</strong>,{" "}
                <strong>fluidifier</strong> et <strong>expliquer la compensation</strong>.
              </p>
            </Section>

            <Section id="research" eyebrow="Research" title="Audit UX & tests utilisateurs">
              <p>
                Pour compléter les retours déjà disponibles, nous avons réalisé des tests sur
                le questionnaire existant et un audit UX afin d’identifier les points de friction.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Callout label="Méthodes" title="Ce qui a été fait">
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Tests d’utilisabilité (sur l’existant)</li>
                    <li>Audit heuristique (clarté, feedback, cohérence)</li>
                    <li>Synthèse des irritants + recommandations</li>
                  </ul>
                </Callout>
                <Callout label="Sortie" title="Insights actionnables">
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Repenser la progression + étapes</li>
                    <li>Optimiser la microcopy (libellés / aides)</li>
                    <li>Mettre en scène la finalité (compensation)</li>
                  </ul>
                </Callout>
              </div>

              <Figure
                src={flow}
                alt="Parcours / flow de questionnaire"
                caption="Exemple : cartographie du parcours (flow) et points de décision."
              />
            </Section>

            <Section id="solution" eyebrow="Design" title="Solution UX/UI sur Figma">
              <p>
                Nous avons conçu une nouvelle maquette sur Figma, présentée d’abord en interne
                (Wavestone) puis côté GoodPlanet. La proposition a été très bien reçue.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Figure src={ui1} alt="Écran UI 1" caption="Écran : Composant card." />
                <Figure src={ui2} alt="Écran UI 2" caption="Écran : Agencement des questions textuelles." />
                <Figure src={ui3} alt="Écran UI 3" caption="Écran : Bilan résultats + compensation." />
              </div>

              <Callout label="Décisions UI" title="Principes appliqués">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Progression claire (étapes + feedback)</li>
                  <li>Réduction de la charge cognitive (mise en page, microcopy)</li>
                  <li>Moments pédagogiques (sensibilisation) intégrés au parcours</li>
                </ul>
              </Callout>
            </Section>

            <Section id="before-after" eyebrow="Comparaison" title="Avant / Après">
              <p>
                Exemple de comparaison sur le bilan final :
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Figure src={before1} alt="Avant" caption="Avant : On affiche de suite la compensation, et les 
                détails de l’empreinte carbone se trouvent en dessous, sans explication sur le but de la compensation." />
                <Figure src={after1} alt="Après" caption="Après : On affiche de suite les graphiques avec des comparaisons 
                parlantes pour aider le client à comprendre son impact carbone. On met la compensation en second plan avec des explications 
                claires de son utilisation." />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Callout label="Avant" title="Friction">
                  Navigation + feedback insuffisants → incertitude → abandon.
                </Callout>
                <Callout label="Après" title="Clarté">
                  Progression + guidance → confiance → continuité.
                </Callout>
                <Callout label="Après" title="Sens">
                  Pédagogie + compensation expliquée → engagement.
                </Callout>
              </div>
            </Section>

            <Section id="result" eyebrow="Résultat" title="Déploiement et impact">
              <p>
                La mission s’est terminée avant le développement par Wavestone, mais GoodPlanet
                a ensuite déployé le nouveau questionnaire sur son site : les choix UX/UI
                conçus durant la mission ont été mis en production.
              </p>

              <Callout label="Impact" title="Résutats attendus (car je n'étais plus là pour mesurer)">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Réduction attendue des abandons grâce à un parcours plus lisible</li>
                  <li>Meilleure compréhension de l’empreinte carbone et de la compensation</li>
                  <li>Solution validée par les équipes client avant mise en ligne</li>
                </ul>
              </Callout>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.goodplanet.org/fr/calculateurs-carbone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
                >
                  Voir le calculateur en ligne
                </a>

              </div>
            </Section>

            <Section id="learnings" eyebrow="Conclusion" title="Ce que j’ai appris">
              <ul className="list-disc pl-5 space-y-2">
                <li>Transformer des retours utilisateurs en décisions UI concrètes.</li>
                <li>Construire un parcours qui donne du sens, pas seulement une interface.</li>
                <li>Gérer la validation multi-parties (interne + client) sur des itérations.</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="w-full sm:w-auto text-center border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
                >
                  Retour à l’accueil
                </Link>
                <Link
                  to="/alten"
                  className="w-full sm:w-auto text-center bg-black text-white px-6 py-3 rounded-2xl hover:opacity-80 transition"
                >
                  Projet suivant (Alten)
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}