import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import cover from "../assets/personal/wedding/cover.png";
import moodboard from "../assets/personal/wedding/figma-moodboard.png";
import navVariants from "../assets/personal/wedding/navbar-variants.png";
import finalWebflow from "../assets/personal/wedding/final-webflow.png";

function Tag({ children }: { children: React.ReactNode }) {
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
  children: React.ReactNode;
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

export default function PersonalProject1() {
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
          <span className="text-sm text-gray-500">Projet personnel</span>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">Web · One-page · Webflow</p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Site de mariage — conception UX/UI & réalisation Webflow
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Objectif : créer un site simple, élégant et accessible, regroupant toutes
              les informations essentielles (lieu, date, planning, infos pratiques) sur une seule page.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>Direction artistique</Tag>
              <Tag>UI Design</Tag>
              <Tag>Workshops</Tag>
              <Tag>Figma</Tag>
              <Tag>Webflow</Tag>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Rôle</p>
                <p className="mt-1 font-medium">UX/UI Designer</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Format</p>
                <p className="mt-1 font-medium">One-page</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Livrables</p>
                <p className="mt-1 font-medium">Maquettes + site Webflow</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img src={cover} alt="Aperçu du site de mariage" className="w-full h-auto" />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Aperçu du site (cover). Remplace par ton meilleur visuel.
            </p>
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
                <a href="#da" className="block text-sm text-gray-700 hover:text-gray-900">
                  Direction artistique
                </a>
                <a href="#co-design" className="block text-sm text-gray-700 hover:text-gray-900">
                  Co-design & contenus
                </a>
                <a href="#nav" className="block text-sm text-gray-700 hover:text-gray-900">
                  Variantes de navigation
                </a>
                <a href="#build" className="block text-sm text-gray-700 hover:text-gray-900">
                  Réalisation Webflow
                </a>
                <a href="#result" className="block text-sm text-gray-700 hover:text-gray-900">
                  Résultat
                </a>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            <Section id="context" eyebrow="Contexte" title="Un site simple, utile, sans friction">
              <p>
                Le couple voulait un support unique pour partager rapidement les informations
                clés du mariage. Le choix “one-page” permettait une lecture fluide, sans perdre
                les invités dans une navigation complexe.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border bg-gray-50 p-6">
                  <p className="text-xs font-semibold text-gray-500">Objectif</p>
                  <p className="mt-2 font-semibold">Centraliser les infos</p>
                  <p className="mt-2 text-gray-700">Lieu, date, planning, détails pratiques.</p>
                </div>
                <div className="rounded-2xl border bg-gray-50 p-6">
                  <p className="text-xs font-semibold text-gray-500">Contrainte</p>
                  <p className="mt-2 font-semibold">Ultra simple</p>
                  <p className="mt-2 text-gray-700">Accessible à tous, mobile-first.</p>
                </div>
                <div className="rounded-2xl border bg-gray-50 p-6">
                  <p className="text-xs font-semibold text-gray-500">Approche</p>
                  <p className="mt-2 font-semibold">Co-design</p>
                  <p className="mt-2 text-gray-700">Ateliers et itérations avec le couple.</p>
                </div>
              </div>
            </Section>

            <Section id="da" eyebrow="Design" title="Direction artistique à partir d’une photo">
              <p>
                J’ai construit la palette couleurs et la DA à partir d’une photo principale
                (référence d’ambiance), puis décliné typographies, composants et hiérarchie visuelle.
              </p>

              <Figure
                src={moodboard}
                alt="Moodboard et palette de couleurs"
                caption="Moodboard Figma : palette, typographies, composants."
              />
            </Section>

            <Section id="co-design" eyebrow="Workshops" title="Ateliers de brainstorming avec le couple">
              <p>
                Plusieurs ateliers ont permis d’affiner le contenu : quelles informations sont
                vraiment utiles ? dans quel ordre ? quel ton éditorial ? L’objectif était de
                réduire la charge cognitive et d’aller droit au but.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Définition des sections essentielles (infos pratiques)</li>
                <li>Priorisation du contenu (ce qui doit être vu en premier)</li>
                <li>Microcopy : titres courts, infos scannables</li>
              </ul>
            </Section>

            <Section id="nav" eyebrow="Itérations" title="Deux variantes de navbar pour obtenir des retours">
              <p>
                J’ai proposé deux idées : une navbar horizontale (classique) et une verticale
                (plus originale), puis j’ai recueilli des retours dans un cercle élargi afin
                de choisir l’option la plus claire.
              </p>

              <Figure
                src={navVariants}
                alt="Variantes de navigation"
                caption="Comparaison : navbar horizontale vs verticale."
              />

              <div className="rounded-2xl border bg-gray-50 p-6">
                <p className="text-xs font-semibold text-gray-500">Décision</p>
                <p className="mt-2 font-semibold">Choisir la navigation la plus évidente</p>
                <p className="mt-2 text-gray-700">
                  Le critère principal était la lisibilité sur mobile et la compréhension immédiate.
                </p>
              </div>
            </Section>

            <Section id="build" eyebrow="Build" title="Déploiement rapide avec Webflow">
              <p>
                Une fois le design et le contenu figés, j’ai réalisé le site sur Webflow afin
                d’obtenir un rendu fidèle, responsive et facile à mettre à jour.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Intégration responsive (mobile-first)</li>
                <li>Composants simples et cohérents</li>
                <li>Mise en ligne rapide</li>
              </ul>

              <Figure
                src={finalWebflow}
                alt="Site final sur Webflow"
                caption="Rendu final (Webflow)."
              />
            </Section>

            <Section id="result" eyebrow="Résultat" title="Un site clair, élégant, accessible">

              <p>
                Le résultat : une page unique, scannable, avec une hiérarchie claire, qui permet
                aux invités de trouver l’information en quelques secondes.
              </p>

              
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Optionnel : lien vers le site si tu veux */}
                {<a
                  href="https://rodolphe-et-alice-mariage.webflow.io/#Home_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
                >
                  Voir le site en ligne
                </a>}
                <Link
                  to="/project-2"
                  className="w-full sm:w-auto text-center border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
                >
                  Voir le projet suivant
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}