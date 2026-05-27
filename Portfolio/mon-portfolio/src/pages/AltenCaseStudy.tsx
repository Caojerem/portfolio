import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import cover from "../assets/alten/cover.png";
import simulator from "../assets/alten/simulator.png";
import dashboard from "../assets/alten/train-dashboard.png";
import ProjectDropdown from "../components/ProjectDropdown";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 bg-white">
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

      {desc && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border bg-white p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-relaxed">
        {desc}
      </p>
    </motion.div>
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
    <figure className="rounded-3xl overflow-hidden border bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto"
      />

      {caption && (
        <figcaption className="px-5 py-4 text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function AltenCaseStudy() {
  const { t, lang } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const fromScrollY = location.state?.fromScrollY;

    navigate(`/${lang}`, {
      state: {
        restoreScrollY:
          typeof fromScrollY === "number" ? fromScrollY : null,
      },
    });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* TOPBAR */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-black"
          >
            ← {t.common.back}
          </button>

          <ProjectDropdown />
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-medium text-gray-500">
              ALTEN · Internal projects
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
              {t.altenPage.hero.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
              {t.altenPage.hero.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {t.altenPage.hero.skills.map((skill: string) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm bg-gray-50">
              <img
                src={cover}
                alt="ALTEN"
                className="w-full h-[340px] object-contain p-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-[32px] border bg-gray-50 p-8 md:p-10">
          <SectionTitle
            kicker={t.altenPage.context.kicker}
            title={t.altenPage.context.title}
            desc={t.altenPage.context.desc}
          />

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {t.altenPage.context.cards.map(
              (
                card: { title: string; value: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="rounded-2xl border bg-white p-5"
                >
                  <p className="text-xs text-gray-500">
                    {card.title}
                  </p>

                  <p className="mt-1 font-medium">
                    {card.value}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionTitle
            kicker={t.altenPage.approach.kicker}
            title={t.altenPage.approach.title}
            desc={t.altenPage.approach.desc}
          />

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {t.altenPage.approach.steps.map(
              (
                step: {
                  number: string;
                  title: string;
                  desc: string;
                },
                index: number
              ) => (
                <div
                  key={index}
                  className="rounded-3xl border bg-white p-6"
                >
                  <p className="text-xs font-semibold text-gray-500">
                    {step.number}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJECT 1 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Figure
              src={simulator}
              alt="Industrial simulator"
            />
          </div>

          <div className="lg:col-span-6">
            <SectionTitle
              kicker={t.altenPage.project1.kicker}
              title={t.altenPage.project1.title}
              desc={t.altenPage.project1.desc}
            />

            <div className="mt-8 grid gap-5">
              {t.altenPage.project1.cards.map(
                (
                  card: {
                    title: string;
                    desc: string;
                  },
                  index: number
                ) => (
                  <InfoCard
                    key={index}
                    title={card.title}
                    desc={card.desc}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2 */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <SectionTitle
                kicker={t.altenPage.project2.kicker}
                title={t.altenPage.project2.title}
                desc={t.altenPage.project2.desc}
              />

              <div className="mt-8 grid gap-5">
                {t.altenPage.project2.cards.map(
                  (
                    card: {
                      title: string;
                      desc: string;
                    },
                    index: number
                  ) => (
                    <InfoCard
                      key={index}
                      title={card.title}
                      desc={card.desc}
                    />
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Figure
                src={dashboard}
                alt="Train dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          kicker={t.altenPage.learnings.kicker}
          title={t.altenPage.learnings.title}
          desc={t.altenPage.learnings.desc}
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border p-8">
            <p className="text-gray-700 leading-relaxed">
              {t.altenPage.learnings.text}
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <ul className="space-y-4 text-gray-700">
              {t.altenPage.learnings.points.map(
                (point: string, index: number) => (
                  <li key={index}>• {point}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <button
            onClick={() => {
              navigate(`/${lang}`, {
                state: {
                  scrollTo: "projets",
                },
              });
            }}
            className="rounded-2xl border border-gray-300 px-6 py-4 hover:bg-gray-50 transition text-center"
          >
            {t.caseStudyCta.back}
          </button>

          <a
            href={`/${lang}/project-1`}
            className="rounded-2xl bg-black text-white px-6 py-4 hover:opacity-80 transition text-center"
          >
            {t.caseStudyCta.next}
          </a>
        </div>
      </section>
    </div>
  );
}