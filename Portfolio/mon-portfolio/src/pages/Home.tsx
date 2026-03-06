import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const isPrivate = import.meta.env.VITE_PORTFOLIO_MODE === "private";

import profile from "../assets/profile.jpg";

import goodplanetCover from "../assets/goodplanet/cover.jpg";
import renaultCover from "../assets/renault/cover.jpg";
import altenCover from "../assets/alten/cover.png";

import project1Cover from "../assets/personal/project1.png";
import project2Cover from "../assets/personal/project2.png";
import project3Cover from "../assets/isochrone/map-graph.png";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="text-xs font-semibold tracking-wide text-gray-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {desc ? <p className="mt-4 text-gray-600 text-lg">{desc}</p> : null}
    </div>
  );
}

function ProjectCard({
  cover,
  title,
  roleLine,
  description,
  tags,
  to,
  section,
}: {
  cover: string;
  title: string;
  roleLine: string;
  description: string;
  tags: string[];
  to: string;
  section: string;
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
    >
      <div className="h-44 flex items-center justify-center bg-white border-b">
        <img
          src={cover}
          alt={title}
          className="max-h-42 max-w-[80%] object-contain"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{roleLine}</p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-600 flex-grow">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
        <button
          onClick={() => {
            navigate(to, {
              state: {
                fromSection: section,
                fromScrollY: window.scrollY,
              },
            });
          }}
          className="mt-6 w-full text-center bg-black text-white py-3 rounded-xl hover:opacity-80 transition"
        >
          Voir le case study
        </button>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [renaultOpen, setRenaultOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const y = location.state?.restoreScrollY;

    if (typeof y === "number") {
      // laisse le temps à la Home de se rendre, puis restaure le scroll
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, left: 0, behavior: "instant" as ScrollBehavior });
      });
    }
  }, [location.key]);

  return (
    <div className="bg-white text-gray-900">
      {/* HERO — Storytelling hook */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">
              UX/UI Designer · IHM · Produit & systèmes complexes
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
              Je transforme des parcours complexes en expériences simples.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
              Je travaille à l’intersection du design d’expérience, de l’interface et de l’interaction, 
              avec une appétence particulière pour les systèmes complexes. J'adore apprendre de nouvelles choses,
              j'ai la chance de part mes expériences de comprendre des domaines variés (automobile, ingénierie système, spatial, programmation, data etc.).
              <br></br>
              Mon focus : clarté, cohérence et ergonomie.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Pill>Research & audit</Pill>
              <Pill>Interaction design</Pill>
              <Pill>Design system</Pill>
              <Pill>Figma</Pill>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#projets"
                className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="border border-gray-900 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden border shadow-sm w-[280px] h-[320px]">
              <img
                src={profile}
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT — crédibilité + angle */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionTitle
              kicker="À PROPOS"
              title="Une approche structurée, orientée impact."
              desc="J’aime concevoir des expériences qui guident l’utilisateur sans friction, en alignant besoins utilisateur, contraintes techniques et objectifs produit."
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed">
            <div className="rounded-2xl border bg-gray-50 p-6">
              <p className="font-medium text-gray-900">Ce que j’apporte</p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Capacité à clarifier un problème (audit, tests, synthèse)</li>
                <li>Conception de parcours end-to-end (flows → UI → itérations)</li>
                <li>Intégration au design system et cohérence interactionnelle</li>
                <li>Communication efficace avec les parties prenantes</li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-5">
                <p className="text-xs text-gray-500">Domaine</p>
                <p className="mt-1 font-medium">Auto · Spatial · ESG</p>
              </div>
              <div className="rounded-2xl border p-5">
                <p className="text-xs text-gray-500">Méthodes</p>
                <p className="mt-1 font-medium">Audit · Tests · Ateliers</p>
              </div>
              <div className="rounded-2xl border p-5">
                <p className="text-xs text-gray-500">Livrables</p>
                <p className="mt-1 font-medium">Flows · UI · Protos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRO STORY — la “narration” */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionTitle
            kicker="MA DÉMARCHE"
            title="De l’insight à l’interface."
            desc="Je structure chaque projet autour d’un fil conducteur simple : comprendre → clarifier → concevoir → valider."
          />

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              { k: "01", t: "Comprendre", d: "Contexte, contraintes, objectifs." },
              { k: "02", t: "Clarifier", d: "Audit, tests, irritants, insights." },
              { k: "03", t: "Concevoir", d: "Flows, modèle d’interaction, UI." },
              { k: "04", t: "Valider", d: "Feedback parties prenantes, itérations." },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border bg-white p-6">
                <p className="text-xs font-semibold text-gray-500">{s.k}</p>
                <p className="mt-2 font-semibold text-lg">{s.t}</p>
                <p className="mt-2 text-gray-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRO PROJECTS */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle
          kicker="EXPERIENCES PROFESSIONNELLES"
          title="Trois projets, trois contextes, un même objectif : la clarté."
          desc="Sélection de case studies avec une mise en avant du problème, de la démarche, et du résultat."
        />

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {isPrivate ? (
            <ProjectCard
              cover={renaultCover}
              title="Renault — Modes immersifs à l’arrêt"
              roleLine="Ingénieur UX/UI IHM · ALTEN (mission)"
              description="Conception end-to-end..."
              tags={["Interaction model", "Workshops", "Design system"]}
              to="/renault"
              section="projets"
            />
          ) : (
            <div className="flex flex-col rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
              <div className="h-44 flex items-center justify-center bg-white border-b">
                <img
                  src={renaultCover}
                  alt="Renault"
                  className="max-h-16 max-w-[70%] object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500">Ingénieur UX/UI IHM · ALTEN (mission)</p>
                  <span className="mt-2 inline-block text-xs font-medium text-gray-500">
                    🔒 Projet confidentiel
                  </span>
                <h3 className="mt-2 text-xl font-semibold">Renault — Projet d'innovation</h3>
                <p className="mt-3 text-gray-600 flex-grow">
                  Conception end-to-end d’une innovation
                </p>

                <button
                  onClick={() => setRenaultOpen(true)}
                  className="mt-6 w-full text-center bg-black text-white py-3 rounded-xl hover:opacity-80 transition"
                >
                  Voir le case study
                </button>
              </div>
            </div>
          )}

          <ProjectCard
          
            cover={goodplanetCover}
            title="GoodPlanet — Calculateur carbone"
            roleLine="UX/UI Designer · Wavestone (stage 6 mois)"
            description="Refonte UX/UI d’un questionnaire : fluidifier le parcours, sensibiliser, clarifier la compensation et encourager la complétion."
            tags={["Audit UX", "Tests", "Figma"]}
            to="/carbon-calculator"
            section="projets"
          />

          <ProjectCard
            cover={altenCover}
            title="Alten — IHM data-driven (2 projets)"
            roleLine="UX/UI · Projets internes (1 semaine chacun)"
            description="Conception rapide de 2 interfaces : simulateur industriel & dashboard d’optimisation ferroviaire, basés sur fichiers de données."
            tags={["Dashboard", "Data input", "Rapid design"]}
            to="/alten"
            section="projets"
          />
        </div>
      </section>

      {/* PERSONAL PROJECTS — à part */}
      <section id="projets-perso" className="max-w-6xl mx-auto px-6 pb-16">
        <SectionTitle
          kicker="PROJETS PERSONNELS"
          title="Explorations & prototypes."
          desc="Trois projets pour tester des idées, prototyper vite et apprendre."
        />

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <ProjectCard
            cover={project1Cover}
            title="Wedding website — UX & design"
            roleLine="UX & UI designer"
            description="Conception d’un site one-page pour un mariage : définition de la direction artistique, co-création du contenu avec les mariés et réalisation sur Webflow."
            tags={["UX design", "Figma", "Webflow"]}
            to="/project-1"
            section="projets-perso"
          />
          <ProjectCard
            cover={project2Cover}
            title="Quiz interactif — Prototype Unity"
            roleLine="Game developer & interaction designer"
            description="Prototype d’un quiz interactif sous Unity : design du flow de jeu, gestion des bonus et création d’une interface claire pour animer une partie entre équipes."
            tags={["Interaction design", "Unity", "Game flow"]}
            to="/project-2"
            section="projets-perso"
          />
          <ProjectCard
            cover={project3Cover}
            title="Créateur d’isochrones tout-terrain"
            roleLine="Développeur · Université"
            description="Prototype universitaire de génération d’isochrones tout-terrain à partir de données SIG via une adaptation de l’algorithme de Dijkstra."
            tags={["Algorithmie", "SIG", "Dijkstra"]}
            to="/project-3"
            section="projets-perso"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24 min-h-[70vh] flex items-center"
      >
        <div className="w-full rounded-3xl border bg-gray-50 p-10">
          <SectionTitle
            kicker="CONTACT"
            title="On échange ?"
            desc="Disponible pour des missions UX/UI, IHM et design d’interaction. Je réponds rapidement."
          />

          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="https://www.linkedin.com/in/jeremy-cao/"
              target="_blank"
              rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
            >
              LinkedIn
            </a>

            <a
              href="#projets"
              className="rounded-xl border border-gray-300 px-6 py-3 hover:bg-white transition"
            >
              Revoir les projets
            </a>
          </div>
        </div>
      </section>

      <footer className="pb-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — Portfolio UX/UI
      </footer>

      <Modal
        open={renaultOpen}
        onClose={() => setRenaultOpen(false)}
        title="Case study Renault — disponible sur demande"
        primaryLabel="Compris"
      >
        <p>
          Ce projet a été réalisé dans un contexte confidentiel.
          <br></br>
          <br></br>
          Je peux présenter les démarches UX,
          les prototypes et les décisions de design
          lors d’un échange.
        </p>
      </Modal>
    </div>
  );
}

