import SwipeSteps from "../components/SwipeSteps";
import MobileCoverArtwork from "../components/MobileCoverArtwork";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
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


  const [mobileStep, setMobileStep] = useState(0);
  const mobileSteps = [
    {
      label: t.altenPage.hero.title,
      content: (
        <div className="relative min-h-[calc(100svh-10.5rem)] overflow-hidden rounded-[28px] bg-gray-900">
          <MobileCoverArtwork src={cover} variant="alten" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/75">"ALTEN · Internal projects"</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight">{t.altenPage.hero.title}</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">{t.altenPage.hero.desc}</p>
          </div>
        </div>
      ),
    },
    { label: t.altenPage.context.title, content: (
      <div>
        <p className="text-xs font-semibold tracking-wide text-gray-500">{t.altenPage.context.kicker}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.altenPage.context.title}</h2>
        <p className="mt-4 leading-relaxed text-gray-600">{t.altenPage.context.desc}</p>
        <div className="mt-6 space-y-3">{t.altenPage.context.cards.map((card) => <div key={card.title} className="rounded-2xl border bg-gray-50 p-5"><p className="text-xs text-gray-500">{card.title}</p><p className="mt-1 font-medium">{card.value}</p></div>)}</div>
      </div>
    )},
    { label: t.altenPage.approach.title, content: (
      <div>
        <p className="text-xs font-semibold tracking-wide text-gray-500">{t.altenPage.approach.kicker}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.altenPage.approach.title}</h2>
        <p className="mt-4 text-gray-600">{t.altenPage.approach.desc}</p>
        <div className="mt-6 space-y-3">{t.altenPage.approach.steps.map((step) => <div key={step.number} className="rounded-2xl border p-5"><p className="text-xs text-gray-500">{step.number}</p><h3 className="mt-2 font-semibold">{step.title}</h3><p className="mt-2 text-sm text-gray-600">{step.desc}</p></div>)}</div>
      </div>
    )},
    { label: t.altenPage.project1.title, content: (
      <div>
        <p className="text-xs font-semibold tracking-wide text-gray-500">{t.altenPage.project1.kicker}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.altenPage.project1.title}</h2>
        <p className="mt-4 text-gray-600">{t.altenPage.project1.desc}</p>
        <Figure src={simulator} alt="Industrial simulator" />
        <div className="mt-5 space-y-3">{t.altenPage.project1.cards.map((c)=><div key={c.title} className="rounded-2xl border p-5"><h3 className="font-semibold">{c.title}</h3><p className="mt-2 text-sm text-gray-600">{c.desc}</p></div>)}</div>
      </div>
    )},
    { label: t.altenPage.project2.title, content: (
      <div>
        <p className="text-xs font-semibold tracking-wide text-gray-500">{t.altenPage.project2.kicker}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.altenPage.project2.title}</h2>
        <p className="mt-4 text-gray-600">{t.altenPage.project2.desc}</p>
        <Figure src={dashboard} alt="Train dashboard" />
        <div className="mt-5 space-y-3">{t.altenPage.project2.cards.map((c)=><div key={c.title} className="rounded-2xl border p-5"><h3 className="font-semibold">{c.title}</h3><p className="mt-2 text-sm text-gray-600">{c.desc}</p></div>)}</div>
      </div>
    )},
    { label: t.altenPage.learnings.title, content: (
      <div>
        <p className="text-xs font-semibold tracking-wide text-gray-500">{t.altenPage.learnings.kicker}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.altenPage.learnings.title}</h2>
        <p className="mt-4 text-gray-600">{t.altenPage.learnings.desc}</p>
        <p className="mt-6 leading-relaxed text-gray-700">{t.altenPage.learnings.text}</p>
        <ul className="mt-5 space-y-3 text-gray-700">{t.altenPage.learnings.points.map((p:string)=><li key={p}>• {p}</li>)}</ul>
      </div>
    )},
  ];

  const goMobileStep = (index: number) => {
    setMobileStep(Math.max(0, Math.min(index, mobileSteps.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goMobilePrevious = () => {
    if (mobileStep === 0) {
      handleBack();
      return;
    }
    goMobileStep(mobileStep - 1);
  };
  return (
<>

      <div className="lg:hidden min-h-screen bg-white text-gray-900 pb-20">
        <header className="sticky top-[var(--site-header-height,69px)] z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex min-h-14 items-center justify-between px-4">
            <button
              onClick={handleBack}
              className="inline-flex min-h-11 items-center gap-1 rounded-xl px-2 text-sm text-gray-600 transition active:bg-gray-100"
            >
              ← <span>{t.common.back}</span>
            </button>
            <span className="text-xs font-medium tracking-wide text-gray-500">
              {mobileStep + 1} / {mobileSteps.length}
            </span>
          </div>

          <div className="flex gap-1.5 px-4 pb-3">
            {mobileSteps.map((step, index) => (
              <button
                key={step.label}
                onClick={() => goMobileStep(index)}
                aria-label={step.label}
                className={`h-1 flex-1 rounded-full transition ${
                  index <= mobileStep ? "bg-gray-900" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </header>

        <main className="px-5 py-6">
          <SwipeSteps currentStep={mobileStep} totalSteps={mobileSteps.length} onStepChange={goMobileStep}>
<AnimatePresence mode="wait">
            <motion.div
              key={mobileStep}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.22 }}
              className="mx-auto max-w-xl"
            >
              {mobileSteps[mobileStep].content}
            </motion.div>
          </AnimatePresence>
</SwipeSteps>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3 [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
            <button
              onClick={goMobilePrevious}
              className="inline-flex min-h-11 min-w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-2xl font-bold text-gray-900 shadow-sm transition active:bg-gray-100"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (mobileStep < mobileSteps.length - 1) {
                  goMobileStep(mobileStep + 1);
                } else {
                  navigate(`/${lang}/project-1`);
                }
              }}
              className="inline-flex min-h-11 min-w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-2xl font-bold text-gray-900 shadow-sm transition active:bg-gray-100"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
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
      </div>
    </>
  );
}