import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import cover from "../assets/personal/quiz/cover.png";
import grid from "../assets/personal/quiz/grid.png";
import question from "../assets/personal/quiz/question.png";

import flowSystem from "../assets/personal/quiz/quiz-flow-system.png";
import flowInteraction from "../assets/personal/quiz/quiz-flow-interaction.png";
import flowStates from "../assets/personal/quiz/quiz-flow-states.png";

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

export default function PersonalProject2() {
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
            <p className="text-sm font-medium text-gray-500">Unity · Interaction design · Prototype</p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Quiz interactif — du format oral à une expérience UI gamifiée
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Grand amateur de quiz, j’en organisais souvent à l’oral. J’ai voulu transformer ce format
              en une application Unity qui structure le déroulement du jeu : <strong>grille</strong>,
              <strong>phases</strong>, <strong>bonus</strong> et <strong>feedback</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>UX</Tag>
              <Tag>Interaction Design</Tag>
              <Tag>IA de contenu (XML)</Tag>
              <Tag>Prototype</Tag>
              <Tag>Unity</Tag>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Objectif</p>
                <p className="mt-1 font-medium">Animer un quiz sans friction</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Format</p>
                <p className="mt-1 font-medium">Phases + grille + bonus</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">Livrables</p>
                <p className="mt-1 font-medium">Prototype Unity + UI states</p>
              </div>
            </div>
            <br></br>
            <Callout label="Note" title="Usage de l’IA (transparence)">
              <p className="text-sm">
                ChatGPT a servi d’<strong>assistant technique</strong> pour accélérer certaines étapes
                (snippets, debug, structuration), tout en gardant la conception UX/UI et les décisions
                produit sous mon contrôle.
              </p>
            </Callout>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img src={cover} alt="Aperçu du prototype Quiz Unity" className="w-full h-auto" />
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
                <a href="#context" className="block text-sm text-gray-700 hover:text-gray-900">
                  Contexte & problème
                </a>
                <a href="#format" className="block text-sm text-gray-700 hover:text-gray-900">
                  Format du jeu
                </a>
                <a href="#system" className="block text-sm text-gray-700 hover:text-gray-900">
                  Architecture du système
                </a>
                <a href="#flow" className="block text-sm text-gray-700 hover:text-gray-900">
                  Flow d’interaction
                </a>
                <a href="#states" className="block text-sm text-gray-700 hover:text-gray-900">
                  États d’interface
                </a>
                <a href="#screens" className="block text-sm text-gray-700 hover:text-gray-900">
                  Écrans clés
                </a>
                <a href="#result" className="block text-sm text-gray-700 hover:text-gray-900">
                  Résultat & impact
                </a>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            <Section id="context" eyebrow="Contexte" title="Pourquoi passer du quiz oral à une interface">
              <p>
                Lors d’un quiz animé manuellement, plusieurs difficultés reviennent : gestion du tour des équipes,
                suivi des bonus/règles spéciales, manque de support visuel, risques d’erreurs et difficulté à intégrer
                des contenus multimédia.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Callout label="Douleur" title="Charge cognitive animateur">
                  <p>Beaucoup de règles et d’états à suivre en parallèle.</p>
                </Callout>
                <Callout label="Douleur" title="Lisibilité pour les joueurs">
                  <p>Progression et thèmes moins visibles sans support UI.</p>
                </Callout>
                <Callout label="Douleur" title="Rythme & erreurs">
                  <p>Transitions et bonus peuvent casser le flow et créer des incohérences.</p>
                </Callout>
              </div>
            </Section>

            <Section id="format" eyebrow="Format du jeu" title="Une grille, des phases, et des bonus interactifs">
              <p>
                Le quiz est inspiré du “Grand Quiz” / formats télévisés. La grille comporte{" "}
                <strong>4 thèmes</strong> (un par équipe) + <strong>1 thème neutre</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Phase 1 — Burger Quiz :</strong> détermine l’ordre de passage via une séquence de rapidité.</li>
                <li><strong>Phase 2 — Mémorisation :</strong> la grille s’affiche 30s, les équipes mémorisent l’emplacement.</li>
                <li><strong>Phase 3 — Boucle de tours :</strong> une équipe choisit une question ; les autres peuvent activer des bonus.</li>
              </ul>

              <Callout label="Décision UX" title="Pourquoi la grille visible 30s ?">
                <p>
                  Créer un moment de tension stratégique et d’attention collective, tout en renforçant la mémorisation.
                </p>
              </Callout>
            </Section>

            <Section id="system" eyebrow="Architecture" title="Architecture du système de jeu">
              <p>
                J’ai structuré le quiz en phases afin de fluidifier l’expérience et limiter les erreurs de transition.
              </p>

              <Figure
                src={flowSystem}
                alt="Architecture du système de jeu"
                caption="Macro-architecture : setup → Burger Quiz → mémorisation → boucle de jeu → fin."
              />
            </Section>

            <Section id="flow" eyebrow="Interaction" title="Flow d’interaction (tour par tour)">
              <p>
                Chaque tour suit un enchaînement stable : choix d’une case, difficulté, affichage de la question, gestion
                des bonus, validation et mise à jour des scores/états.
              </p>

              <Figure
                src={flowInteraction}
                alt="Flow d’interaction du tour"
                caption="Micro-flow : choisir → question → bonus (si déclenché) → validation → score → équipe suivante."
              />
            </Section>

            <Section id="states" eyebrow="Interface" title="États UI (lisibilité + robustesse)">
              <p>
                L’un des enjeux UX était de rendre visibles les états (cases jouées, équipe active, bonus déclenchés) et
                d’éviter les transitions incohérentes.
              </p>

              <Figure
                src={flowStates}
                alt="États UI"
                caption="États UI : grille / question / bonus / feedback (notifications)."
              />
            </Section>

            <Section id="screens" eyebrow="Prototype" title="Écrans clés du prototype Unity">
              <div className="grid md:grid-cols-2 gap-6">
                <Figure
                  src={grid}
                  alt="Écran grille"
                  caption="Grille : thèmes, état des cases, lisibilité rapide."
                />
                <Figure
                  src={question}
                  alt="Écran question"
                  caption="Question : focus, support multimédia (image/audio/vidéo)."
                />
              </div>

              <Callout label="Bonus" title="Mécaniques de bonus interactifs">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li><strong>Duel :</strong> une équipe challenge l’équipe active (mini UI de buzz + verrouillage visuel).</li>
                  <li><strong>Hold Up :</strong> tentative de vol si l’équipe active échoue (notification + état clair).</li>
                  <li><strong>x2 :</strong> double la valeur d’une question (confirmation visuelle).</li>
                </ul>
              </Callout>

              <Callout label="Feedback UX" title="Notifications dynamiques">
                <p className="text-sm">
                  Pour améliorer la compréhension en temps réel, des notifications rendent visibles les actions : “Équipe 2
                  lance un Duel”, “Hold Up tenté”, “x2 utilisé”, etc.
                </p>
              </Callout>
            </Section>

            <Section id="result" eyebrow="Résultat" title="Résultat & impact">
              <ul className="list-disc pl-5 space-y-2">
                <li>Gestion de plusieurs équipes et phases de jeu</li>
                <li>Grille mémorisable + états clairs (cases jouées)</li>
                <li>Bonus stratégiques et feedbacks en temps réel</li>
                <li>Support multimédia (image/audio/vidéo)</li>
                <li>Questions chargées via fichiers XML (quiz personnalisable)</li>
              </ul>

              <Callout label="Ce que ça démontre" title="Compétences UX / IHM">
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Conception de systèmes interactifs</li>
                  <li>Gestion d’états complexes et robustesse des transitions</li>
                  <li>Design d’interaction pour expérience collective</li>
                  <li>Prototypage rapide et itérations</li>
                </ul>
              </Callout>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="w-full sm:w-auto text-center border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
                >
                  Retour à l’accueil
                </Link>
                <Link
                  to="/project-3"
                  className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
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