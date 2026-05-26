import { motion } from "framer-motion";
import {type ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


import JourneySection from "../components/JourneySection";
import { useLanguage } from "../context/LanguageContext";

import profile from "../assets/profile.jpg";
import goodplanetCover from "../assets/goodplanet/cover.jpg";
import renaultCover from "../assets/renault/cover.jpg";
import altenCover from "../assets/alten/cover.png";

import project1Cover from "../assets/personal/project1.png";
import project2Cover from "../assets/personal/project2.png";
import project3Cover from "../assets/portfolio/cover.svg";

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
      {kicker && (
        <p className="text-xs font-semibold tracking-wide text-gray-500">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-gray-600 text-lg">{desc}</p>}
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
}: any) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex flex-col rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
    >
      <div className="h-44 flex items-center justify-center bg-white border-b">
        <img
          src={cover}
          alt={title}
          className="max-h-40 max-w-[80%] object-contain"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{roleLine}</p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-600 flex-grow">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        <button
          onClick={() =>
            navigate(to, {
              state: {
                fromSection: section,
                fromScrollY: window.scrollY,
              },
            })
          }
          className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:opacity-80 transition"
        >
          {t.projects.ctaview}
        </button>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const location = useLocation();
  const { lang, t } = useLanguage();

  // sécurité anti crash
  if (!t) return null;

  useEffect(() => {
  if (location.state?.scrollTo) {
    const section = location.state.scrollTo;

    setTimeout(() => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, [location]);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <p className="text-sm text-gray-500">
              UX/UI Designer · IHM · Complex systems
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold">
              {t.home.heroTitle}
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              {t.home.heroDesc}
            </p>

            <div className="mt-7 flex gap-2 flex-wrap">
              <Pill>UX</Pill>
              <Pill>UI</Pill>
              <Pill>Interaction</Pill>
              <Pill>Figma</Pill>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#projets"
                className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
              >
                {t.home.ctaProjects}
              </a>

              <a
                href="#contact"
                className="border border-gray-900 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
              >
                {t.home.ctaContact}
              </a>
            </div>
          </div>
          

          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-3xl overflow-hidden border w-[280px] h-[320px]">
              <img src={profile} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
              {t.about.kicker}
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t.about.desc}
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main card */}
            <div className="rounded-[32px] border border-gray-300 p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                {t.about.cardTitle}
              </h3>

              <ul className="mt-5 space-y-4 text-base text-gray-700 leading-relaxed">
                {t.about.points.map((point: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {t.about.cards.map((card: any, index: number) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-gray-300 p-6"
                >
                  <p className="text-sm text-gray-500">
                    {card.label}
                  </p>

                  <p className="mt-3 text-xl font-semibold tracking-tight text-gray-900 leading-snug">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JourneySection />

      {/* PROJECTS */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle
          kicker={t.projects.kicker}
          title={t.projects.title}
          desc={t.projects.desc}
        />

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          {/* Renault */}
          <ProjectCard
            cover={renaultCover}
            title={t.projects.renault.title}
            roleLine={t.projects.renault.role}
            description={t.projects.renault.desc}
            tags={t.projects.renault.tags}
            to={`/${lang}/renault`}
            section="projets"
          />

          <ProjectCard
            cover={goodplanetCover}
            title={t.projects.goodplanet.title}
            roleLine={t.projects.goodplanet.role}
            description={t.projects.goodplanet.desc}
            tags={["UX", "Tests"]}
            to={`/${lang}/carbon-calculator`}
            section="projets"
          />

          <ProjectCard
            cover={altenCover}
            title={t.projects.alten.title}
            roleLine={t.projects.alten.role}
            description={t.projects.alten.desc}
            tags={["Dashboard"]}
            to={`/${lang}/alten`}
            section="projets"
          />
        </div>
      </section>
      
      <section id="projets-perso" className="max-w-6xl mx-auto px-6 pb-16">
        <SectionTitle
          kicker={t.personal.kicker}
          title={t.personal.title}
          desc={t.personal.desc}
        />

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          <ProjectCard
            cover={project1Cover}
            title={t.personal.project1.title}
            roleLine={t.personal.project1.role}
            description={t.personal.project1.desc}
            tags={["UX", "Figma", "Webflow"]}
            to={`/${lang}/project-1`}
            section="projets-perso"
          />

          <ProjectCard
            cover={project2Cover}
            title={t.personal.project2.title}
            roleLine={t.personal.project2.role}
            description={t.personal.project2.desc}
            tags={["Game design", "Unity"]}
            to={`/${lang}/project-2`}
            section="projets-perso"
          />

          <ProjectCard
            cover={project3Cover}
            title={t.personal.portfolio.title}
            roleLine={t.personal.portfolio.role}
            description={t.personal.portfolio.desc}
            tags={["UX strategy", "Storytelling", "Design system"]}
            to={`/${lang}/project-3`}
            section="projets-perso"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          title={t.contact.title}
          desc={t.contact.desc}
        />
      </section>
    </div>
  );
}