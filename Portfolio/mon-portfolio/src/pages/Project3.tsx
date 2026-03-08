import { Link, useLocation, useNavigate } from "react-router-dom";

import type { ReactNode } from "react";

// Optionnel : ajoute tes images dans src/assets/isochrone/
// et décommente les imports ci-dessous.
// import cover from "../assets/isochrone/cover.png";
//import mapGraph from "../assets/isochrone/map-graph.png";
import result from "../assets/isochrone/result.gif";

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

/*function Figure({
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
}*/

export default function IsochroneCaseStudy() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
  const y = location.state?.fromScrollY;
  const section = location.state?.fromSection;

  navigate("/", { state: { restoreScrollY: y, scrollTo: section } });
  };
  return (
    <div className="bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            ← Retour
          </button>
          <span className="text-sm text-gray-500">Projet universitaire · Développement</span>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">SIG · Algorithmie · Graphes</p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Créateur d’isochrones tout-terrain
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Projet universitaire centré sur la génération d’<strong>isochrones</strong> (zones
              atteignables depuis un point donné en un temps/effort limité) à partir de données{" "}
              <strong>SIG</strong>. Avec mon groupe, nous avons adapté l’algorithme de <strong>Dijkstra</strong> pour calculer
              l’ensemble des nœuds accessibles et tracer l’enveloppe correspondante.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>SIG</Tag>
              <Tag>Graph theory</Tag>
              <Tag>Dijkstra</Tag>
              <Tag>Isochrones</Tag>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Rôle</p>
                <p className="mt-1 font-medium">Dev / algorithmie</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Focus</p>
                <p className="mt-1 font-medium">Accessibilité spatiale</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Repo</p>
                <a
                  className="mt-1 inline-block font-medium underline underline-offset-4"
                  href="https://github.com/will-afs/WazeTT"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub WazeTT
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/will-afs/WazeTT"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
              >
                Voir le projet sur GitHub
              </a>
              <a
                href="#approach"
                className="rounded-2xl border border-gray-900 px-6 py-3 hover:bg-gray-50 transition"
              >
                Voir l’approche
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Option A : image de cover */}
            {<div className="rounded-3xl overflow-hidden border shadow-sm">
              <img src={result} alt="Aperçu isochrone" className="w-full h-auto" />
            </div>}
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
                <a href="#context" className="block text-sm text-gray-700 hover:text-gray-900">
                  Contexte
                </a>
                <a href="#problem" className="block text-sm text-gray-700 hover:text-gray-900">
                  Problème
                </a>
                <a href="#approach" className="block text-sm text-gray-700 hover:text-gray-900">
                  Approche
                </a>
                <a href="#algo" className="block text-sm text-gray-700 hover:text-gray-900">
                  Dijkstra adapté
                </a>
                <a href="#result" className="block text-sm text-gray-700 hover:text-gray-900">
                  Résultat
                </a>
                <a href="#link" className="block text-sm text-gray-700 hover:text-gray-900">
                  Code
                </a>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            <Section id="context" eyebrow="Contexte" title="Pourquoi les isochrones ?">
              <p>
                Une isochrone représente l’ensemble des points atteignables depuis un point de départ
                sous une contrainte (temps, distance, énergie). Ce type de visualisation est utile
                pour l’<strong>analyse territoriale</strong>, la planification et les scénarios de
                mobilité — particulièrement en <strong>tout-terrain</strong>, où les coûts de
                déplacement dépendent du terrain.
              </p>
            </Section>

            <Section id="problem" eyebrow="Problème" title="Du plus court chemin… à une zone atteignable">
              <p>
                Dijkstra permet de trouver des distances minimales, mais ici l’objectif n’est pas un
                chemin unique : il faut calculer <strong>toutes les cellules/nœuds atteignables</strong>{" "}
                sous un budget de coût, puis en déduire une “frontière” (l’isochrone).
              </p>

              <Callout label="Enjeu" title="Modéliser un coût de déplacement réaliste">
                <p className="text-sm">
                  En tout-terrain, le coût peut varier selon la pente, la nature du sol, ou la
                  traversabilité. Le modèle choisit une règle de coût pour chaque transition entre
                  cellules (ou nœuds).
                </p>
              </Callout>
            </Section>

            <Section id="approach" eyebrow="Approche" title="Modélisation graphe à partir de données SIG">
              <p>
                La carte SIG est interprétée comme un <strong>graphe</strong> : chaque cellule (ou
                point) devient un nœud, et chaque voisinage (4/8 directions, selon ton choix) devient
                une arête pondérée par un coût de déplacement.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Construction du graphe (nœuds + voisins)</li>
                <li>Définition d’un coût (terrain/effort)</li>
                <li>Calcul des distances depuis la source</li>
                <li>Sélection des nœuds dont le coût ≤ budget</li>
              </ul>
            </Section>

            <Section id="algo" eyebrow="Algorithmie" title="Adaptation de Dijkstra pour générer l’isochrone">
              <p>
                La variante utilisée consiste à exécuter Dijkstra depuis la source, puis à conserver
                l’ensemble des nœuds dont la distance cumulée reste sous un seuil (temps/effort). À
                partir de ce set, on peut ensuite produire une enveloppe (contour) et l’afficher sur
                la carte.
              </p>

              <Callout label="Ce que j’ai fait" title="De “shortest path” à “reachable region”">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Propagation des coûts jusqu’à dépassement du budget</li>
                  <li>Marquage des zones atteignables</li>
                  <li>Génération/affichage de l’isochrone à partir des cellules retenues</li>
                </ul>
              </Callout>
            </Section>

            <Section id="result" eyebrow="Résultat" title="Visualiser les zones atteignables">
              <p>
                Le résultat permet de visualiser dynamiquement une zone accessible autour d’un point
                de départ selon un budget choisi, sur un contexte tout-terrain. C’est un bon point
                d’entrée pour des usages SIG (analyse, planification, scénarios).
              </p>
            </Section>

            <Section id="link" eyebrow="Code" title="Accéder au projet">
              <a
                href="https://github.com/will-afs/WazeTT"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
              >
                Ouvrir le repo WazeTT
              </a>
              <p>
                Le projet est disponible sur GitHub. Tu peux y retrouver l’implémentation et la
                structure générale de la solution.
              </p>
              <br></br>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="w-full sm:w-auto text-center border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
                >
                  Retour à l’accueil
                </Link>
                <Link
                  to="/project-1"
                  className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
                >
                  Revoir le premier projet
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}