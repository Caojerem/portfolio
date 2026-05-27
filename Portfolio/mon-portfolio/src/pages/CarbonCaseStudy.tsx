import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";


import cover from "../assets/goodplanet/cover.jpg";
import flow from "../assets/goodplanet/figma-flow.png";
import before1 from "../assets/goodplanet/before-1.png";
import after1 from "../assets/goodplanet/after-1.png";
import ui1 from "../assets/goodplanet/ui-1.png";
import ui2 from "../assets/goodplanet/ui-2.png";
import ui3 from "../assets/goodplanet/ui-3.png";
import ProjectDropdown from "../components/ProjectDropdown";

import type { ReactNode } from "react";

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
        <p className="text-sm font-medium tracking-wide text-gray-500">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
        {children}
      </div>
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
      <p className="text-xs font-semibold tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-gray-900">
        {title}
      </p>

      <div className="mt-3 text-gray-700">{children}</div>
    </div>
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
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function CarbonCaseStudy() {
  const { lang, t } = useLanguage();

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

  const toc = [
    {
      id: "overview",
      label: t.goodplanetPage.toc.overview,
    },
    {
      id: "problem",
      label: t.goodplanetPage.toc.problem,
    },
    {
      id: "workshop",
      label: t.goodplanetPage.toc.workshop,
    },
    {
      id: "research",
      label: t.goodplanetPage.toc.research,
    },
    {
      id: "solution",
      label: t.goodplanetPage.toc.solution,
    },
    {
      id: "before-after",
      label: t.goodplanetPage.toc.beforeAfter,
    },
    {
      id: "result",
      label: t.goodplanetPage.toc.result,
    },
    {
      id: "learnings",
      label: t.goodplanetPage.toc.learnings,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* TOP BAR */}
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
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">
              {t.goodplanetPage.hero.kicker}
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {t.goodplanetPage.hero.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {t.goodplanetPage.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.goodplanetPage.hero.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {t.goodplanetPage.hero.cards.role}
                </p>

                <p className="mt-1 font-medium">
                  {t.goodplanetPage.hero.cards.roleValue}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {t.goodplanetPage.hero.cards.collaboration}
                </p>

                <p className="mt-1 font-medium">
                  {t.goodplanetPage.hero.cards.collaborationValue}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {t.goodplanetPage.hero.cards.deliverables}
                </p>

                <p className="mt-1 font-medium">
                  {t.goodplanetPage.hero.cards.deliverablesValue}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={cover}
                alt="GoodPlanet"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-20">
              <p className="text-xs font-semibold tracking-wide text-gray-500">
                {t.goodplanetPage.summary}
              </p>

              <nav className="mt-4 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* BODY */}
          <div className="lg:col-span-9 space-y-16">
            <Section
              id="overview"
              eyebrow={t.goodplanetPage.overview.eyebrow}
              title={t.goodplanetPage.overview.title}
            >
              <p>{t.goodplanetPage.overview.desc}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {t.goodplanetPage.overview.objectives.map(
                  (objective: any, index: number) => (
                    <Callout
                      key={index}
                      label={objective.label}
                      title={objective.title}
                    >
                      {objective.desc}
                    </Callout>
                  )
                )}
              </div>
            </Section>

            <Section
              id="problem"
              eyebrow={t.goodplanetPage.problem.eyebrow}
              title={t.goodplanetPage.problem.title}
            >
              <ul className="list-disc pl-5 space-y-2">
                {t.goodplanetPage.problem.points.map(
                  (point: string, index: number) => (
                    <li key={index}>{point}</li>
                  )
                )}
              </ul>

              <Callout
                label={t.goodplanetPage.problem.calloutLabel}
                title={t.goodplanetPage.problem.calloutTitle}
              >
                {t.goodplanetPage.problem.calloutDesc}
              </Callout>
            </Section>

            <Section
              id="workshop"
              eyebrow={t.goodplanetPage.workshop.eyebrow}
              title={t.goodplanetPage.workshop.title}
            >
              <p>{t.goodplanetPage.workshop.desc1}</p>
              <p>{t.goodplanetPage.workshop.desc2}</p>
            </Section>

            <Section
              id="research"
              eyebrow={t.goodplanetPage.research.eyebrow}
              title={t.goodplanetPage.research.title}
            >
              <p>{t.goodplanetPage.research.desc}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <Callout
                  label={t.goodplanetPage.research.methodsLabel}
                  title={t.goodplanetPage.research.methodsTitle}
                >
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {t.goodplanetPage.research.methods.map(
                      (method: string, index: number) => (
                        <li key={index}>{method}</li>
                      )
                    )}
                  </ul>
                </Callout>

                <Callout
                  label={t.goodplanetPage.research.outputLabel}
                  title={t.goodplanetPage.research.outputTitle}
                >
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {t.goodplanetPage.research.outputs.map(
                      (output: string, index: number) => (
                        <li key={index}>{output}</li>
                      )
                    )}
                  </ul>
                </Callout>
              </div>

              <Figure
                src={flow}
                alt="Flow"
                caption={t.goodplanetPage.research.caption}
              />
            </Section>

            <Section
              id="solution"
              eyebrow={t.goodplanetPage.solution.eyebrow}
              title={t.goodplanetPage.solution.title}
            >
              <p>{t.goodplanetPage.solution.desc}</p>

              <div className="grid md:grid-cols-3 gap-6">
                <Figure
                  src={ui1}
                  alt="UI 1"
                  caption={t.goodplanetPage.solution.figures[0]}
                />

                <Figure
                  src={ui2}
                  alt="UI 2"
                  caption={t.goodplanetPage.solution.figures[1]}
                />

                <Figure
                  src={ui3}
                  alt="UI 3"
                  caption={t.goodplanetPage.solution.figures[2]}
                />
              </div>

              <Callout
                label={t.goodplanetPage.solution.calloutLabel}
                title={t.goodplanetPage.solution.calloutTitle}
              >
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {t.goodplanetPage.solution.principles.map(
                    (principle: string, index: number) => (
                      <li key={index}>{principle}</li>
                    )
                  )}
                </ul>
              </Callout>
            </Section>

            <Section
              id="before-after"
              eyebrow={t.goodplanetPage.beforeAfter.eyebrow}
              title={t.goodplanetPage.beforeAfter.title}
            >
              <p>{t.goodplanetPage.beforeAfter.desc}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <Figure
                  src={before1}
                  alt="Before"
                  caption={t.goodplanetPage.beforeAfter.beforeCaption}
                />

                <Figure
                  src={after1}
                  alt="After"
                  caption={t.goodplanetPage.beforeAfter.afterCaption}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {t.goodplanetPage.beforeAfter.cards.map(
                  (card: any, index: number) => (
                    <Callout
                      key={index}
                      label={card.label}
                      title={card.title}
                    >
                      {card.desc}
                    </Callout>
                  )
                )}
              </div>
            </Section>

            <Section
              id="result"
              eyebrow={t.goodplanetPage.result.eyebrow}
              title={t.goodplanetPage.result.title}
            >
              <p>{t.goodplanetPage.result.desc}</p>

              <Callout
                label={t.goodplanetPage.result.calloutLabel}
                title={t.goodplanetPage.result.calloutTitle}
              >
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {t.goodplanetPage.result.points.map(
                    (point: string, index: number) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              </Callout>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.goodplanet.org/fr/calculateurs-carbone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
                >
                  {t.goodplanetPage.result.cta}
                </a>
              </div>
            </Section>

            <Section
              id="learnings"
              eyebrow={t.goodplanetPage.learnings.eyebrow}
              title={t.goodplanetPage.learnings.title}
            >
              <ul className="list-disc pl-5 space-y-2">
                {t.goodplanetPage.learnings.points.map(
                  (point: string, index: number) => (
                    <li key={index}>{point}</li>
                  )
                )}
              </ul>
              </Section>
          </div>
        </div>
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
            href={`/${lang}/alten`}
            className="rounded-2xl bg-black text-white px-6 py-4 hover:opacity-80 transition text-center"
          >
            {t.caseStudyCta.next}
          </a>
        </div>
      </section>
      </main>
    </div>
  );
}