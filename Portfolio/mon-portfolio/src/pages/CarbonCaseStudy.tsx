import MobileCoverArtwork from "../components/MobileCoverArtwork";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
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

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function MobileTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
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

      <p className="mt-2 text-lg font-semibold text-gray-900">{title}</p>

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
    <figure className="overflow-hidden rounded-2xl border bg-white">
      <img src={src} alt={alt} className="w-full h-auto" />

      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type MobileStep = {
  id: string;
  label: string;
  render: () => ReactNode;
};

export default function CarbonCaseStudy() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileStep, setMobileStep] = useState(0);

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

  const mobileSteps: MobileStep[] = [
    {
      id: "intro",
      label: "Intro",
      render: () => (
        <div className="relative min-h-full overflow-hidden rounded-[28px] bg-black text-white">
          <MobileCoverArtwork src={cover} variant="goodplanet" />

          <div className="relative flex min-h-[calc(100svh-150px)] flex-col justify-between p-5 sm:p-6">
            <div className="flex items-center">
              <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
                GoodPlanet
              </span>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                {t.goodplanetPage.hero.kicker}
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                {t.goodplanetPage.hero.title}
              </h1>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                {t.goodplanetPage.hero.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.goodplanetPage.hero.tags.map((tag: string) => (
                  <MobileTag key={tag}>{tag}</MobileTag>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "context",
      label: t.goodplanetPage.toc.overview,
      render: () => (
        <div className="flex min-h-full flex-col">
          <div className="flex-1 overflow-y-auto pr-1">

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {t.goodplanetPage.overview.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {t.goodplanetPage.overview.desc}
            </p>

            <div className="mt-6 space-y-3">
              {t.goodplanetPage.overview.objectives.map(
                (objective, index: number) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                      {objective.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {objective.title}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {objective.desc}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {t.goodplanetPage.problem.calloutLabel}
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {t.goodplanetPage.problem.calloutTitle}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {t.goodplanetPage.problem.calloutDesc}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "process",
      label: `${t.goodplanetPage.toc.workshop} · ${t.goodplanetPage.toc.research}`,
      render: () => (
        <div className="flex min-h-full flex-col">
          <div className="flex-1 overflow-y-auto pr-1">

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {t.goodplanetPage.workshop.title}
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
              <p>{t.goodplanetPage.workshop.desc1}</p>
              <p>{t.goodplanetPage.workshop.desc2}</p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                {t.goodplanetPage.research.eyebrow}
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {t.goodplanetPage.research.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {t.goodplanetPage.research.desc}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                  {t.goodplanetPage.research.methodsLabel}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {t.goodplanetPage.research.methodsTitle}
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                  {t.goodplanetPage.research.methods.map(
                    (method: string, index: number) => (
                      <li key={index} className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>{method}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                  {t.goodplanetPage.research.outputLabel}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {t.goodplanetPage.research.outputTitle}
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                  {t.goodplanetPage.research.outputs.map(
                    (output: string, index: number) => (
                      <li key={index} className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>{output}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Figure
                src={flow}
                alt="Flow"
                caption={t.goodplanetPage.research.caption}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "solution",
      label: t.goodplanetPage.toc.solution,
      render: () => (
        <div className="flex min-h-full flex-col">
          <div className="flex-1 overflow-y-auto pr-1">

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {t.goodplanetPage.solution.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {t.goodplanetPage.solution.desc}
            </p>

            <div className="mt-6 grid gap-4">
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

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {t.goodplanetPage.solution.calloutLabel}
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {t.goodplanetPage.solution.calloutTitle}
              </p>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                {t.goodplanetPage.solution.principles.map(
                  (principle: string, index: number) => (
                    <li key={index} className="flex gap-2">
                      <span className="shrink-0">•</span>
                      <span>{principle}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "before-after",
      label: t.goodplanetPage.toc.beforeAfter,
      render: () => (
        <div className="flex min-h-full flex-col">
          <div className="flex-1 overflow-y-auto pr-1">

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {t.goodplanetPage.beforeAfter.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {t.goodplanetPage.beforeAfter.desc}
            </p>

            <div className="mt-6 grid gap-4">
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

            <div className="mt-6 space-y-3">
              {t.goodplanetPage.beforeAfter.cards.map(
                (card, index: number) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                      {card.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {card.title}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "result",
      label: t.goodplanetPage.toc.result,
      render: () => (
        <div className="flex min-h-full flex-col">
          <div className="flex-1 overflow-y-auto pr-1">

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {t.goodplanetPage.result.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {t.goodplanetPage.result.desc}
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {t.goodplanetPage.result.calloutLabel}
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {t.goodplanetPage.result.calloutTitle}
              </p>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                {t.goodplanetPage.result.points.map(
                  (point: string, index: number) => (
                    <li key={index} className="flex gap-2">
                      <span className="shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <a
              href="https://www.goodplanet.org/fr/calculateurs-carbone/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-80"
            >
              {t.goodplanetPage.result.cta}
            </a>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                {t.goodplanetPage.learnings.eyebrow}
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {t.goodplanetPage.learnings.title}
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                {t.goodplanetPage.learnings.points.map(
                  (point: string, index: number) => (
                    <li key={index} className="flex gap-2">
                      <span className="shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentMobileStep = mobileSteps[mobileStep];

  const goToStep = (index: number) => {
    setMobileStep(Math.max(0, Math.min(index, mobileSteps.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    if (mobileStep < mobileSteps.length - 1) {
      goToStep(mobileStep + 1);
    } else {
      navigate(`/${lang}/alten`);
    }
  };

  const goPrevious = () => {
    if (mobileStep > 0) {
      goToStep(mobileStep - 1);
    } else {
      handleBack();
    }
  };

  return (
    <div className="bg-white text-gray-900">

      {/* =========================================================
          DESKTOP / TABLET
          On conserve ici la structure actuelle de ton case study.
      ========================================================= */}
      <div className="hidden lg:block">
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <button
              onClick={handleBack}
              className="text-sm text-gray-500 transition hover:text-black"
            >
              ← {t.common.back}
            </button>

            <ProjectDropdown />
          </div>
        </header>

        {/* HERO */}
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-10">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-gray-500">
                {t.goodplanetPage.hero.kicker}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {t.goodplanetPage.hero.title}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                {t.goodplanetPage.hero.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.goodplanetPage.hero.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
              <div className="overflow-hidden rounded-3xl border shadow-sm">
                <img
                  src={cover}
                  alt="GoodPlanet"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <main className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-10 lg:grid-cols-12">

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
                      className="block text-sm text-gray-700 transition hover:text-gray-900"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* BODY */}
            <div className="space-y-16 lg:col-span-9">
              <Section
                id="overview"
                eyebrow={t.goodplanetPage.overview.eyebrow}
                title={t.goodplanetPage.overview.title}
              >
                <p>{t.goodplanetPage.overview.desc}</p>

                <div className="grid gap-4 md:grid-cols-3">
                  {t.goodplanetPage.overview.objectives.map(
                    (objective, index: number) => (
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
                <ul className="list-disc space-y-2 pl-5">
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

                <div className="grid gap-6 md:grid-cols-2">
                  <Callout
                    label={t.goodplanetPage.research.methodsLabel}
                    title={t.goodplanetPage.research.methodsTitle}
                  >
                    <ul className="mt-2 list-disc space-y-1 pl-5">
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
                    <ul className="mt-2 list-disc space-y-1 pl-5">
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

                <div className="grid gap-6 md:grid-cols-3">
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
                  <ul className="mt-2 list-disc space-y-1 pl-5">
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

                <div className="grid gap-6 md:grid-cols-2">
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

                <div className="grid gap-4 md:grid-cols-3">
                  {t.goodplanetPage.beforeAfter.cards.map(
                    (card, index: number) => (
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
                  <ul className="mt-2 list-disc space-y-1 pl-5">
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
                    className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-80"
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
                <ul className="list-disc space-y-2 pl-5">
                  {t.goodplanetPage.learnings.points.map(
                    (point: string, index: number) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              </Section>
            </div>
          </div>

          {/* CTA */}
          <section className="mx-auto max-w-6xl pb-24 pt-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <button
                onClick={() =>
                  navigate(`/${lang}`, {
                    state: {
                      scrollTo: "projets",
                    },
                  })
                }
                className="rounded-2xl border border-gray-300 px-6 py-4 text-center transition hover:bg-gray-50"
              >
                {t.caseStudyCta.back}
              </button>

              <a
                href={`/${lang}/alten`}
                className="rounded-2xl bg-black px-6 py-4 text-center text-white transition hover:opacity-80"
              >
                {t.caseStudyCta.next}
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* =========================================================
          MOBILE
          UX dédiée : 1 étape visible, navigation précédent/suivant,
          étapes accessibles depuis la progression en haut et scroll interne dans les écrans longs.
      ========================================================= */}
      <div className="lg:hidden">
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex min-h-14 max-w-xl items-center justify-between px-4">
            <button
              onClick={handleBack}
              className="inline-flex min-h-11 items-center gap-1 rounded-xl px-2 text-sm text-gray-600 transition active:bg-gray-100"
              aria-label={t.common.back}
            >
              ←
              <span>{t.common.back}</span>
            </button>

            <span className="text-xs font-medium tracking-wide text-gray-500">
              {mobileStep + 1} / {mobileSteps.length}
            </span>
          </div>

          {/* Progression séparée du contenu pour éviter tout chevauchement */}
          <div className="mx-auto flex max-w-xl gap-1.5 px-4 pb-3">
            {mobileSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200"
                aria-label={`${index + 1}. ${step.label}`}
              >
                <span
                  className={`block h-full rounded-full transition-all ${
                    index <= mobileStep ? "bg-black" : "bg-gray-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </header>

        <main className="mx-auto max-w-xl px-3 pb-24 pt-3">
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
            <div className="min-h-[calc(100svh-150px)] px-1 pb-2 pt-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMobileStep.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full min-h-[calc(100svh-150px)] p-3"
                >
                  {currentMobileStep.render()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3 [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
              <button
                onClick={goPrevious}
                className="inline-flex min-h-10 min-w-10 items-center justify-start text-xl font-light text-gray-700 transition active:opacity-50"
                aria-label={mobileStep === 0 ? t.common.back : "Previous"}
              >
                ←
              </button>

              <button
                onClick={goNext}
                className="inline-flex min-h-10 min-w-10 items-center justify-end text-xl font-light text-gray-700 transition active:opacity-50"
                aria-label={
                  mobileStep === mobileSteps.length - 1
                    ? t.caseStudyCta.next
                    : "Next"
                }
              >
                →
              </button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
