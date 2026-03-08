import { useState } from "react";
import { motion } from "framer-motion";

import formationImg from "../assets/journey/estaca.png";
import formationImgSec from "../assets/journey/centralesupelec.png";
import wavestoneImg from "../assets/journey/wavestone.png";
import wavestoneImgSec from "../assets/journey/figma.png";
import renaultImg from "../assets/journey/renault.jpg";
import renaultImgSec from "../assets/journey/alten.png";
import explorationsImg from "../assets/journey/unity.png";
import explorationsImgSec from "../assets/journey/webflow.png";
import todayImg from "../assets/journey/aujourdhui.png";
import todayImgSec from "../assets/journey/scientifique.png";
//import { i } from "framer-motion/client";

type FloatingCard = {
  label: string;
  value: string;
};

type JourneyStep = {
  id: number;
  period: string;
  title: string;
  description: string;
  accent: string;
  floatingLabel?: string;
  image ? :string
  imageSec ? :string
  cards: FloatingCard[];
  illustrationTitle: string;
  illustrationSubtitle: string;
  imageLabel: string;
};

const steps: JourneyStep[] = [
  {
    id: 0,
    period: "Formation",
    title: "Ingénieur en aérospatial et informatique",
    description:
      "Passionné par les systèmes complexes, j’ai construit une base solide en résolution de problèmes, avec une appétence dans la data et le développement.",
    accent: "from-blue-50 to-white",
    floatingLabel: "Secteur aérospatial · Data · Systèmes d'information · Développement",
    image : formationImg,
    imageSec : formationImgSec,
    illustrationTitle: "Fondations",
    illustrationSubtitle: "Analyse · structure · logique",
    imageLabel: "Schéma / diplôme / base méthodo",
    cards: [
      { label: "Approche", value: "Structurée & logique" },
      { label: "Intérêt", value: "Systèmes complexes" },
      { label: "Enrichissement", value: "Data & IA" },
    ],
  },
  {
    id: 1,
    period: "Wavestone",
    title: "Refonte UX/UI du calculateur carbone GoodPlanet",
    description:
      "Pendant 6 mois, j’ai travaillé sur la refonte du questionnaire du calculateur carbone : ateliers, audit UX, tests utilisateurs et maquettes Figma pour fluidifier le parcours et renforcer la compréhension.",
    accent: "from-fuchsia-50 to-white",
    floatingLabel: "UX research · Figma",
    image : wavestoneImg,
    imageSec : wavestoneImgSec,
    illustrationTitle: "Case study client",
    illustrationSubtitle: "Audit · ateliers · maquettes",
    imageLabel: "Capture Miro / Figma / questionnaire",
    cards: [
      { label: "Client", value: "GoodPlanet" },
      { label: "Méthodes", value: "Audit · Tests · Ateliers" },
      { label: "Livrable", value: "Questionnaire repensé" },
    ],
  },
  {
    id: 2,
    period: "ALTEN · Renault",
    title: "Concevoir des interfaces ergonomiques pour l’automobile",
    description:
      "En mission chez Renault, j’ai travaillé sur des parcours IHM liés à de nombreuses fonctions, parfois dans un contexte d’innovation, en collaboration avec les équipes UX, produit et métiers.",
    accent: "from-yellow-50 to-white",
    floatingLabel: "IHM · Innovation",
    image : renaultImg,
    imageSec : renaultImgSec,
    illustrationTitle: "Innovation véhicule",
    illustrationSubtitle: "Parcours · interactions · scénarios",
    imageLabel: "Concept IHM / flow / mockup",
    cards: [
      { label: "Rôle", value: "Ingénieur UX/UI & IHM" },
      { label: "Focus", value: "Ergonomie et UX design" },
      { label: "Contexte", value: "Innovation automobile" },
    ],
  },
  {
    id: 3,
    period: "Explorations",
    title: "Des projets pour expérimenter, prototyper et apprendre",
    description:
      "Quiz interactif sous Unity, site sous Webflow, génération d’isochrones à partir de cartes SIG : ces projets me permettent d’explorer l’interaction, l’algorithmie et le prototypage sous différents angles.",
    accent: "from-cyan-50 to-white",
    floatingLabel: "Unity · Webflow · SIG · IA",
    image : explorationsImg,
    imageSec : explorationsImgSec,
    illustrationTitle: "Explorations",
    illustrationSubtitle: "Prototype · web · algorithmie",
    imageLabel: "Unity / Webflow / SIG preview",
    cards: [
      { label: "Quiz", value: "Unity · gamification" },
      { label: "Tech", value: "SIG · algorithmie" },
      { label: "Web", value: "Webflow · design web" },
    ],
  },
  {
    id: 4,
    period: "Aujourd’hui",
    title: "Designer d’expériences pour systèmes complexes",
    description:
      "Je cherche à concevoir des interfaces utiles, lisibles et robustes, à la croisée du design, du produit et des environnements techniques.",
    accent: "from-emerald-50 to-white",
    floatingLabel: "UX · Produit · Systèmes",
    image : todayImgSec,
    imageSec : todayImg,
    illustrationTitle: "Vision",
    illustrationSubtitle: "Clarté · robustesse · impact",
    imageLabel: "Direction / ambition / prochaine étape",
    cards: [
      { label: "Ambition", value: "Concevoir utile" },
      { label: "Positionnement", value: "UX + technique" },
      { label: "Recherche", value: "Produit & complexité" },
    ],
  },
];

function FloatingInfoCard({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/60 bg-white/75 p-4 shadow-lg backdrop-blur ${className ?? ""}`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}

function StepScene({
  step,
  active,
}: {
  step: JourneyStep;
  active: boolean;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${step.accent}`}
    >
      {/* texture / ambience */}
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-32 w-32 rounded-full bg-white/60 blur-3xl md:h-40 md:w-40" />
        <div className="absolute right-[10%] top-[12%] h-36 w-36 rounded-full bg-black/[0.03] blur-3xl md:h-48 md:w-48" />
        <div className="absolute left-[20%] bottom-[8%] h-44 w-44 rounded-full bg-white/40 blur-3xl md:h-60 md:w-60" />
      </div>

      {/* timeline desktop */}
      <div className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="mx-20 h-[2px] bg-black/10" />
      </div>

      {/* point desktop */}
      <div className="absolute right-[16%] top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <div
          className={`h-6 w-6 rounded-full border-4 border-white shadow-md transition ${
            active ? "scale-110 bg-black" : "bg-black/30"
          }`}
        />
      </div>

      {/* mobile illustration */}
      <div className="absolute left-4 right-4 top-4 z-10 md:hidden">
        <div className="h-36 overflow-hidden rounded-[22px] border border-white/60 bg-white/60 shadow-lg backdrop-blur">
          {step.image ? (
            <img
              src={step.image}
              alt={step.imageLabel}
              className="h-full w-full object-contain bg-white"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
              {step.imageLabel}
            </div>
          )}
        </div>
      </div>

      {/* overlay text block */}
      <div className="absolute left-4 right-4 top-44 z-20 md:left-10 md:right-auto md:top-10 md:max-w-[540px]">
        <div className="rounded-[24px] border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur md:rounded-[28px] md:p-8">
          <p className="text-sm font-medium text-gray-500">{step.period}</p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 md:text-3xl">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:mt-4 md:text-base">
            {step.description}
          </p>

          {step.floatingLabel ? (
            <div className="mt-4 inline-flex rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur md:mt-5">
              {step.floatingLabel}
            </div>
          ) : null}
        </div>
      </div>

      {/* floating cards desktop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active ? 1 : 0.7, y: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute right-6 bottom-16 z-20 hidden w-[260px] gap-6 md:grid rotate-2"
      >
        <FloatingInfoCard
          label={step.cards[0].label}
          value={step.cards[0].value}
        />
        <FloatingInfoCard
          label={step.cards[1].label}
          value={step.cards[1].value}
          className="ml-10"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active ? 1 : 0.7, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="absolute top-10 right-14 z-20 hidden md:block -rotate-2"
      >
        <FloatingInfoCard
          label={step.cards[2].label}
          value={step.cards[2].value}
          className="w-[240px]"
        />
      </motion.div>

      {/* decorative big text - desktop only */}
      <div className="absolute bottom-5 left-6 right-6 md:left-10 md:right-10">
        <p className="hidden font-semibold leading-none tracking-tight text-black/8 md:block md:text-[104px]">
          {step.period}
        </p>
      </div>

      {/* grande illustration desktop */}
      <div className="absolute top-6 right-[24%] hidden md:block">
        <div className="h-[150px] w-[220px] overflow-hidden rounded-[24px] border border-white/60 bg-white/70 shadow-md backdrop-blur -rotate-1">
          {step.image ? (
            <img
              src={step.image}
              alt={step.imageLabel}
              className="h-full w-full object-contain bg-white"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
              {step.imageLabel}
            </div>
          )}
        </div>
      </div>

      {/* petite image secondaire desktop */}
      <div className="absolute bottom-20 right-[28%] hidden md:block">
        <div className="rounded-3xl border border-white/60 bg-white/75 p-3 shadow-lg backdrop-blur rotate-1">
          {step.imageSec ? (
            <img
              src={step.imageSec}
              alt=""
              className="h-28 w-28 rounded-2xl object-cover"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-black/[0.05] text-xs text-gray-500">
              Image secondaire
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function JourneySection() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === steps.length - 1 ? prev : prev + 1));
  };

  return (
    <section id="parcours" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-gray-500">
            PARCOURS
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Une fresque de mon parcours.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Une lecture visuelle de mon évolution, entre approche analytique,
            design d’interaction et expériences produit.
          </p>
        </div>

        {/* main scene */}
        <div className="mt-12 overflow-hidden rounded-[34px] border bg-white shadow-sm">
          <motion.div
            className="flex h-[460px] md:h-[560px]"
            animate={{ x: `-${current * (100 / steps.length)}%` }}
            transition={{ type: "spring", stiffness: 85, damping: 18 }}
            style={{ width: `${steps.length * 100}%` }}
          >
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="w-full shrink-0"
                style={{ width: `${100 / steps.length}%` }}
              >
                <StepScene step={step} active={index === current} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* controls */}
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrent(index)}
                className="group flex items-center gap-3"
              >
                <span
                  className={`h-3 w-3 rounded-full transition ${
                    current === index ? "scale-110 bg-black" : "bg-black/20"
                  }`}
                />
                <span
                  className={`text-sm transition ${
                    current === index ? "font-medium text-black" : "text-gray-500"
                  }`}
                >
                  {step.period}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="rounded-2xl border px-5 py-3 text-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ←
            </button>
            <button
              onClick={goNext}
              disabled={current === steps.length - 1}
              className="rounded-2xl bg-black px-5 py-3 text-sm text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}