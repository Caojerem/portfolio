import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import profile from "../assets/profile-extented.jpg";
import goodplanetCover from "../assets/goodplanet/cover.jpg";
import renaultCover from "../assets/renault/cover.jpg";
import altenCover from "../assets/alten/cover.png";

import project1Cover from "../assets/personal/project1.png";
import project2Cover from "../assets/personal/project2.png";
import project3Cover from "../assets/portfolio/cover.svg";

// Preserve dismissal during React navigation, but reset on a full page reload.
let introDismissed = false;

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm text-gray-700 whitespace-nowrap">
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
    <div className="max-w-3xl min-w-0">
      {kicker && (
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-gray-500">
          {kicker}
        </p>
      )}

      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight break-words">
        {title}
      </h2>

      {desc && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          {desc}
        </p>
      )}
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
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md"
    >
      {/* COVER */}
      <div className="h-48 sm:h-52 flex items-center justify-center bg-white border-b border-gray-200 px-5">
        <img
          src={cover}
          alt={title}
          className="max-h-40 sm:max-h-44 max-w-[85%] object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 min-w-0 flex-col p-5 sm:p-6">
        <p className="text-sm text-gray-500 leading-relaxed">
          {roleLine}
        </p>

        <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-tight break-words">
          {title}
        </h3>

        <p className="mt-3 text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* TAGS */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">
        <button
          onClick={() =>
            navigate(to, {
              state: {
                fromSection: section,
                fromScrollY: window.scrollY,
              },
            })
          }
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-sm sm:text-base font-medium text-white transition hover:opacity-80 active:scale-[0.99]"
        >
          {t.projects.ctaview}
        </button>
        </div>
      </div>
    </motion.div>
  );
}


type MobileProject = {
  cover: string;
  title: string;
  to: string;
  category: "pro" | "perso";
  section: string;
};

function MobileProjectTile({ project }: { project: MobileProject }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const categoryLabel = project.category === "pro" ? "Pro" : lang === "fr" ? "Perso" : "Personal";

  return (
    <button
      type="button"
      onClick={() =>
        navigate(project.to, {
          state: {
            fromSection: project.section,
            fromScrollY: window.scrollY,
          },
        })
      }
      aria-label={project.title}
      className="flex h-full min-w-0 flex-col cursor-pointer rounded-2xl border border-gray-300 bg-white p-2 text-left shadow-sm transition-colors hover:border-gray-400 active:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-gray-300 bg-gray-100">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 active:scale-[0.98]"
        />
        <span className="absolute right-2 top-2 rounded-full bg-white/95 px-2 py-1 text-[10px] font-semibold leading-none text-gray-900 shadow-sm">
          {categoryLabel}
        </span>
      </div>
      <h3 className="mt-2 line-clamp-3 h-[60px] shrink-0 whitespace-normal break-words px-1 text-sm font-semibold leading-5 tracking-tight">
        {project.title}
      </h3>
    </button>
  );
}

export default function Home() {
  const location = useLocation();
  const { lang, t } = useLanguage();
  const [mobileFilter, setMobileFilter] = useState<"all" | "pro" | "perso">("all");
  const reduceMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(() => !introDismissed && !location.hash);

  useEffect(() => {
    if (location.hash) introDismissed = true;
  }, [location.hash]);

  useEffect(() => {
    if (!showIntro || location.hash) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro, location.hash]);

  const closeIntro = () => {
    introDismissed = true;
    setShowIntro(false);
  };


  const mobileProjects: MobileProject[] = t
    ? [
        {
          cover: renaultCover,
          title: t.projects.renault.title,
          to: `/${lang}/renault`,
          category: "pro",
          section: "projets",
        },
        {
          cover: goodplanetCover,
          title: t.projects.goodplanet.title,
          to: `/${lang}/carbon-calculator`,
          category: "pro",
          section: "projets",
        },
        {
          cover: altenCover,
          title: t.projects.alten.title,
          to: `/${lang}/alten`,
          category: "pro",
          section: "projets",
        },
        {
          cover: project1Cover,
          title: t.personal.project1.title,
          to: `/${lang}/project-1`,
          category: "perso",
          section: "projets-perso",
        },
        {
          cover: project2Cover,
          title: t.personal.project2.title,
          to: `/${lang}/project-2`,
          category: "perso",
          section: "projets-perso",
        },
        {
          cover: project3Cover,
          title: t.personal.portfolio.title,
          to: `/${lang}/project-3`,
          category: "perso",
          section: "projets-perso",
        },
      ]
    : [];

  // Keep all six slots in the grid so filtering never moves the following sections.
  const orderedMobileProjects =
    mobileFilter === "all"
      ? mobileProjects
      : [
          ...mobileProjects.filter((project) => project.category === mobileFilter),
          ...mobileProjects.filter((project) => project.category !== mobileFilter),
        ];

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;

      const timeout = setTimeout(() => {
        const mobile = window.matchMedia("(max-width: 1023px)").matches;
        const target = mobile && (section === "projets" || section === "projets-perso")
          ? "projets-mobile" : section;
        document
          .getElementById(target)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [location]);

  if (!t) return null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">

      {/* Shared introduction, dismissed until the next full page reload. */}
        <AnimatePresence
          onExitComplete={() => {
            if (!location.hash && window.matchMedia("(min-width: 1024px)").matches) {
              document.getElementById("projets")?.scrollIntoView({ block: "start" });
            }
          }}
        >
          {showIntro && !location.hash && (
            <motion.div
              key="home-intro"
              role="dialog"
              aria-modal="true"
              aria-labelledby="home-intro-title"
              onKeyDown={(event) => {
                if (event.key === "Escape") closeIntro();
                // The introduction has one focusable control.
                if (event.key === "Tab") event.preventDefault();
              }}
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : "-8%" }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[100] bg-white p-4 lg:p-6"
            >
              <div className="h-full overflow-y-auto overscroll-contain rounded-[28px] border border-slate-300/80 bg-gray-50 text-gray-900 shadow-sm">
                <div className="relative isolate flex min-h-full flex-col justify-end overflow-hidden lg:justify-center">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_80%_35%,#e4eaf0,transparent_65%)]"
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full border border-slate-300/50 lg:right-[-5%] lg:top-1/2 lg:h-[min(65vw,850px)] lg:w-[min(65vw,850px)] lg:-translate-y-1/2" />
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-96 w-96 rounded-full border border-slate-300/40" />
                  <div className="pointer-events-none relative mx-auto mb-6 mt-6 aspect-square w-[min(56vw,24svh,240px)] shrink-0 overflow-hidden rounded-full bg-white shadow-xl shadow-slate-900/10 ring-1 ring-gray-200 lg:absolute lg:right-[9%] lg:top-1/2 lg:m-0 lg:w-[min(29vw,400px)] lg:-translate-y-1/2">
                    <img
                      src={profile}
                      alt={lang === "fr" ? "Portrait de Jérémy Cao" : "Portrait of Jérémy Cao"}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-0 lg:w-[54%] lg:py-16 lg:pl-[7%] lg:pr-8">
                    <p className="text-sm font-medium text-gray-900">Jérémy Cao</p>
                    <p className="mt-2 text-xs font-semibold leading-relaxed tracking-wide text-gray-600">
                      Product Designer · {lang === "fr" ? "Analyse, technique & usages" : "Analysis, technology & people"}
                    </p>
                    <h1 id="home-intro-title" className="mt-4 max-w-3xl text-[clamp(1.8rem,4.5svh,2.4rem)] font-semibold leading-[1.08] tracking-tight lg:text-5xl xl:text-6xl">
                      {t.home.heroTitle}
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base lg:leading-7">
                      {t.home.heroDesc}
                    </p>
                    <button
                      type="button"
                      autoFocus
                      onClick={closeIntro}
                      className="mt-7 inline-flex min-h-12 items-center gap-5 rounded-xl bg-gray-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                    >
                      {t.home.ctaProjects}
                      <span aria-hidden="true">↓</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      <div className="lg:hidden">
        <section
          id="projets-mobile"
          className="scroll-mt-6 px-4 pb-16 pt-8"
        >
          <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">
            {t.nav.projects}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            {lang === "fr" ? "Mes projets" : "My projects"}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
            {lang === "fr"
              ? "Une sélection de projets professionnels et personnels, pour découvrir mon approche du design."
              : "A selection of professional and personal projects, offering a glimpse into my design approach."}
          </p>

          <div className="mt-6 flex gap-2">
            {[
              { id: "all" as const, label: lang === "fr" ? "Tous" : "All" },
              { id: "pro" as const, label: lang === "fr" ? "Pro" : "Professional" },
              { id: "perso" as const, label: lang === "fr" ? "Perso" : "Personal" },
            ].map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setMobileFilter(filter.id)}
                aria-pressed={mobileFilter === filter.id}
                aria-controls="mobile-project-grid"
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 motion-reduce:transition-none ${
                  mobileFilter === filter.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div
            id="mobile-project-grid"
            className="mt-7 grid auto-rows-fr grid-cols-2 gap-x-3 gap-y-7"
          >
            {orderedMobileProjects.map((project) => {
              const visible = mobileFilter === "all" || project.category === mobileFilter;

              return (
                <motion.div
                  key={project.to}
                  layout={reduceMotion ? false : "position"}
                  initial={false}
                  animate={{ opacity: visible ? 1 : 0 }}
                  transition={{
                    layout: { duration: reduceMotion ? 0 : 0.24, ease: "easeOut" },
                    opacity: { duration: reduceMotion ? 0 : 0.18 },
                  }}
                  aria-hidden={!visible}
                  style={{ visibility: visible ? "visible" : "hidden" }}
                  className="min-w-0 [&>button]:w-full"
                >
                  <MobileProjectTile project={project} />
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="about-mobile" className="px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">
            {t.about.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            {t.about.desc}
          </p>

          <div className="mt-8 border-t border-gray-200">
            {t.about.cards.map((card: { label: string; value: string }, index: number) => (
              <div
                key={index}
                className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-b border-gray-200 py-5"
              >
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="text-sm font-medium leading-relaxed">{card.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact-mobile" className="px-4 pb-24 pt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {t.contact.desc}
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/jeremy-cao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>

      {/* Desktop home */}
      <div className="hidden lg:block">

      {/* =========================================================
          PROFESSIONAL PROJECTS
      ========================================================= */}
      <section
        id="projets"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-14 sm:py-16 lg:py-20"
      >
        <SectionTitle
          title={lang === "fr" ? "Projets professionnels" : "Professional projects"}
          desc={lang === "fr"
            ? "Des projets menés en entreprise, au service des utilisateurs et des enjeux métiers."
            : "Projects developed in professional settings, addressing user needs and business goals."}
        />

        <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
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

          {/* GoodPlanet */}
          <ProjectCard
            cover={goodplanetCover}
            title={t.projects.goodplanet.title}
            roleLine={t.projects.goodplanet.role}
            description={t.projects.goodplanet.desc}
            tags={["UX", "Tests"]}
            to={`/${lang}/carbon-calculator`}
            section="projets"
          />

          {/* Alten */}
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

      {/* =========================================================
          PERSONAL PROJECTS
      ========================================================= */}
      <section
        id="projets-perso"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 pb-14 sm:pb-16 lg:pb-20"
      >
        <SectionTitle
          title={lang === "fr" ? "Projets personnels" : "Personal projects"}
          desc={lang === "fr"
            ? "Des projets menés en autonomie, pour explorer des idées et expérimenter de nouvelles approches."
            : "Self-directed projects, exploring ideas and experimenting with new approaches."}
        />

        <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {/* Wedding */}
          <ProjectCard
            cover={project1Cover}
            title={t.personal.project1.title}
            roleLine={"UX/UI · Webflow"}
            description={t.personal.project1.desc}
            tags={["UX", "Figma", "Webflow"]}
            to={`/${lang}/project-1`}
            section="projets-perso"
          />

          {/* Quiz */}
          <ProjectCard
            cover={project2Cover}
            title={t.personal.project2.title}
            roleLine={"Game design · Unity"}
            description={t.personal.project2.desc}
            tags={["Game design", "Unity"]}
            to={`/${lang}/project-2`}
            section="projets-perso"
          />

          {/* Portfolio */}
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

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
      >
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12">

          {/* LEFT */}
          <div className="min-w-0 lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-500 uppercase">
              {t.about.kicker}
            </p>

            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              {t.about.desc}
            </p>
          </div>

          {/* RIGHT */}
          <div className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7">

            {/* MAIN CARD */}
            <div className="rounded-3xl border border-gray-200 p-5 sm:p-7 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold">
                {t.about.cardTitle}
              </h3>

              <ul className="mt-5 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                {t.about.points.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SMALL CARDS */}
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {t.about.cards.map((card: { label: string; value: string }, index: number) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-200 p-5 sm:p-6"
                >
                  <p className="text-sm text-gray-500">
                    {card.label}
                  </p>

                  <p className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold tracking-tight leading-snug">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
      >
        <SectionTitle
          title={t.contact.title}
          desc={t.contact.desc}
        />

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="https://www.linkedin.com/in/jeremy-cao/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition hover:bg-gray-50"
          >
            LinkedIn
          </a>
        </div>
      </section>
      </div>
    </div>
  );
}




