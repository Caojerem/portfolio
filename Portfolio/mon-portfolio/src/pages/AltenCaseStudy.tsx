import { Link, useLocation, useNavigate } from "react-router-dom";

import sim1 from "../assets/alten/simulator.png";
import train1 from "../assets/alten/train-dashboard.png";

function Section({ title, children }: any) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Figure({ src, caption }: any) {
  return (
    <figure className="rounded-2xl overflow-hidden border">
      <img src={src} className="w-full" />
      <figcaption className="text-sm text-gray-600 p-3">{caption}</figcaption>
    </figure>
  );
}

export default function AltenCaseStudy() {
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

      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 py-20">

      <button onClick={handleBack} className="text-sm text-gray-500 hover:text-black">
            ← Retour
      </button>

        <h1 className="text-4xl font-bold mt-4">
          Conception rapide d'IHM industrielles
        </h1>

        <p className="text-gray-600 mt-4 max-w-3xl">
          Dans le cadre de projets internes chez Alten, j'ai conçu deux interfaces
          utilisateur en une semaine chacune pour des clients industriels.
        </p>

        <div className="flex gap-3 mt-6 flex-wrap">
          <span className="border px-3 py-1 rounded-full text-sm">UX/UI</span>
          <span className="border px-3 py-1 rounded-full text-sm">Dashboard</span>
          <span className="border px-3 py-1 rounded-full text-sm">Simulation</span>
        </div>

      </div>

      <main className="max-w-5xl mx-auto px-6 space-y-20 pb-20">

        {/* CONTEXTE */}
        <Section title="Contexte">
          <p>
            Ces deux projets ont été réalisés dans un contexte de conception rapide
            d'interfaces pour des outils d'aide à la décision destinés à des clients
            industriels.  
            L'objectif était de concevoir des IHM simples permettant de piloter
            des algorithmes de simulation à partir de données d'entrée.
          </p>
        </Section>

        {/* PROJET 1 */}
        <Section title="Projet 1 — Simulateur d'accident d'usine">

          <p>
            Cette interface permettait de rentrer des données d'entrée (nombre de postes de travail, variables d'efficacité et de compétence, etc.) pour simuler la performance d'une usine après un incident.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Définition du nombre de postes de travail</li>
            <li>Variables d'efficacité et de compétence</li>
            <li>Import de fichiers de données</li>
            <li>Simulation par algorithme de performance</li>
          </ul>

          <Figure
            src={sim1}
            caption="Interface de simulation permettant d'évaluer la performance de l'usine après un incident."
          />

          <p>
            L'objectif était de permettre une réallocation rapide des ressources
            pour maintenir la production après un incident.
          </p>

        </Section>

        {/* PROJET 2 */}
        <Section title="Projet 2 — Dashboard optimisation de train">

          <p>
            Le second projet consistait à concevoir un dashboard permettant
            d'optimiser la vitesse d'un train sur différentes sections de rails.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Import de fichiers de données</li>
            <li>Paramétrage des variables d'entrée</li>
            <li>Visualisation des valeurs de sortie</li>
            <li>Aide à la décision pour optimiser la vitesse</li>
          </ul>

          <Figure
            src={train1}
            caption="Dashboard permettant d'analyser les vitesses optimales sur différentes sections de rail."
          />

        </Section>

        {/* METHODE */}
        <Section title="Approche UX">

          <p>
            Les deux interfaces ont été conçues avec une approche centrée
            sur la lisibilité et la rapidité d'utilisation.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Séparation claire entre données d'entrée et résultats</li>
            <li>Visualisation simple des paramètres clés</li>
            <li>Interface adaptée à des utilisateurs techniques</li>
          </ul>

        </Section>

        {/* RESULTATS */}
        <Section title="Résultat">

          <p>
            Ces deux interfaces ont permis de transformer des outils
            algorithmiques complexes en applications utilisables par
            des ingénieurs et des analystes industriels.
          </p>
          <br />
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto text-center border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
            >
              Retour à l’accueil
            </Link>
            <Link
              to="/renault"
              className="w-full sm:w-auto text-center bg-black text-white px-6 py-3 rounded-2xl hover:opacity-80 transition"
            >
              Projet suivant (Renault)
            </Link>
          </div>
        </Section>

      </main>

    </div>
  );
}