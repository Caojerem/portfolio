import MobileCoverArtwork from "../components/MobileCoverArtwork";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import portfolioCover from "../assets/portfolio/cover.svg";
import PortfolioEvidence from "../components/PortfolioEvidence";


import type { ReactNode } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

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

export default function PortfolioCaseStudy() {
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
      id: "context",
      label: t.portfolioCaseStudy.sections.context.title,
    },
    {
      id: "storytelling",
      label: t.portfolioCaseStudy.sections.storytelling.title,
    },
    {
      id: "journey",
      label: t.portfolioCaseStudy.sections.journey.title,
    },
    {
      id: "design-system",
      label: t.portfolioCaseStudy.sections.designSystem.title,
    },
    {
      id: "mobile",
      label: t.portfolioCaseStudy.sections.mobile.title,
    },
    {
      id: "outcome",
      label: t.portfolioCaseStudy.sections.outcome.title,
    },
  ];


  const [mobileStep, setMobileStep] = useState(0);
  const mobileSteps = [
    {
      label: t.portfolioCaseStudy.hero.title,
      content: (
        <div className="relative min-h-[calc(100svh-10.5rem)] overflow-hidden rounded-[28px] bg-gray-900">
          <MobileCoverArtwork src={portfolioCover} variant="portfolio" />
          <div className="relative flex min-h-[calc(100svh-10.5rem)] flex-col justify-end px-6 pb-6 pt-48 text-white">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/75">{t.portfolioCaseStudy.hero.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight">{t.portfolioCaseStudy.hero.title}</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">{t.portfolioCaseStudy.hero.desc}</p>
          </div>
        </div>
      ),
    },
    { label: t.portfolioCaseStudy.sections.context.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{t.portfolioCaseStudy.sections.context.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{t.portfolioCaseStudy.sections.context.title}</h2><div className="mt-4 space-y-3 text-gray-600">{t.portfolioCaseStudy.sections.context.paragraphs.map((p:string)=><p key={p}>{p}</p>)}</div><div className="mt-6 space-y-3">{t.portfolioCaseStudy.sections.context.cards.map((c)=><Callout key={c.title} label="Focus" title={c.title}>{c.text}</Callout>)}</div><PortfolioEvidence section="context" /></div>
    )},
    { label: t.portfolioCaseStudy.sections.storytelling.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{t.portfolioCaseStudy.sections.storytelling.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{t.portfolioCaseStudy.sections.storytelling.title}</h2><div className="mt-4 space-y-3 text-gray-600">{t.portfolioCaseStudy.sections.storytelling.paragraphs.map((p:string)=><p key={p}>{p}</p>)}</div><div className="mt-6 grid grid-cols-2 gap-3">{t.portfolioCaseStudy.sections.storytelling.steps.map((s:string,i:number)=><div key={s} className="rounded-2xl border p-4"><p className="text-xs text-gray-400">0{i+1}</p><p className="mt-2 text-sm font-medium">{s}</p></div>)}</div><p className="mt-5 text-gray-600">{t.portfolioCaseStudy.sections.storytelling.conclusion}</p><PortfolioEvidence section="storytelling" /></div>
    )},
    { label: t.portfolioCaseStudy.sections.journey.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{t.portfolioCaseStudy.sections.journey.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{t.portfolioCaseStudy.sections.journey.title}</h2><div className="mt-4 space-y-3 text-gray-600">{t.portfolioCaseStudy.sections.journey.paragraphs.map((p:string)=><p key={p}>{p}</p>)}</div><div className="mt-6"><PortfolioEvidence section="journey" /></div></div>
    )},
    { label: t.portfolioCaseStudy.sections.designSystem.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{t.portfolioCaseStudy.sections.designSystem.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{t.portfolioCaseStudy.sections.designSystem.title}</h2><div className="mt-6"><PortfolioEvidence section="designSystem" /></div><div className="mt-6 space-y-4">{t.portfolioCaseStudy.sections.designSystem.items.map((i)=><div key={i.title}><h3 className="font-semibold">{i.title}</h3><p className="mt-1 text-sm text-gray-600">{i.text}</p></div>)}</div></div>
    )},
    { label: t.portfolioCaseStudy.sections.mobile.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{t.portfolioCaseStudy.sections.mobile.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{t.portfolioCaseStudy.sections.mobile.title}</h2><div className="mt-4 space-y-3 text-gray-600">{t.portfolioCaseStudy.sections.mobile.paragraphs.map((p:string)=><p key={p}>{p}</p>)}</div><div className="mt-6"><PortfolioEvidence section="mobile" /></div><div className="mt-5"><Callout label={t.portfolioCaseStudy.sections.mobile.takeawayTitle} title={t.portfolioCaseStudy.sections.mobile.takeaway}><></></Callout></div></div>
    )},
    { label: t.portfolioCaseStudy.sections.outcome.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{t.portfolioCaseStudy.sections.outcome.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{t.portfolioCaseStudy.sections.outcome.title}</h2><div className="mt-6 space-y-3">{t.portfolioCaseStudy.sections.outcome.items.map((i:string)=><div key={i} className="rounded-2xl border p-5 text-gray-700">{i}</div>)}</div></div>
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
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
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
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3 [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
            <button
              onClick={goMobilePrevious}
              className="inline-flex min-h-10 min-w-10 items-center justify-start text-xl font-light text-gray-700 transition active:opacity-50"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (mobileStep < mobileSteps.length - 1) {
                  goMobileStep(mobileStep + 1);
                } else {
                  navigate(`/${lang}`, { state: { scrollTo: "projets-perso" } });
                }
              }}
              className="inline-flex min-h-10 min-w-10 items-center justify-end text-xl font-light text-gray-700 transition active:opacity-50"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
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
              {t.portfolioCaseStudy.hero.kicker}
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {t.portfolioCaseStudy.hero.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {t.portfolioCaseStudy.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.portfolioCaseStudy.hero.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={portfolioCover}
                alt="Portfolio preview"
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
                {lang === "fr" ? "SOMMAIRE" : "CONTENTS"}
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
            {/* CONTEXT */}
            <Section
              id="context"
              eyebrow={t.portfolioCaseStudy.sections.context.eyebrow}
              title={t.portfolioCaseStudy.sections.context.title}
            >
              {t.portfolioCaseStudy.sections.context.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="grid md:grid-cols-3 gap-4">
                {t.portfolioCaseStudy.sections.context.cards.map(
                  (card, index: number) => (
                    <Callout
                      key={index}
                      label="Focus"
                      title={card.title}
                    >
                      {card.text}
                    </Callout>
                  )
                )}
              </div>
            </Section>

            <PortfolioEvidence section="context" />

            {/* STORYTELLING */}
            <Section
              id="storytelling"
              eyebrow={t.portfolioCaseStudy.sections.storytelling.eyebrow}
              title={t.portfolioCaseStudy.sections.storytelling.title}
            >
              {t.portfolioCaseStudy.sections.storytelling.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="rounded-2xl border bg-gray-50 p-8">
                <div className="grid md:grid-cols-5 gap-6 text-center">
                  {t.portfolioCaseStudy.sections.storytelling.steps.map(
                    (step: string, index: number) => (
                      <div key={index}>
                        <div className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center mx-auto text-sm font-medium">
                          0{index + 1}
                        </div>

                        <p className="mt-4 font-medium text-gray-900">
                          {step}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <p>
                {t.portfolioCaseStudy.sections.storytelling.conclusion}
              </p>
              <PortfolioEvidence section="storytelling" />
            </Section>

            {/* JOURNEY */}
            <Section
              id="journey"
              eyebrow={t.portfolioCaseStudy.sections.journey.eyebrow}
              title={t.portfolioCaseStudy.sections.journey.title}
            >
              <div className="space-y-8">
                <div>
                  {t.portfolioCaseStudy.sections.journey.paragraphs.map(
                    (paragraph: string, index: number) => (
                      <p key={index} className={index > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    )
                  )}

                  <div className="mt-8 space-y-4">
                    {t.portfolioCaseStudy.sections.journey.cards.map(
                      (card, index: number) => (
                        <Callout
                          key={index}
                          label="Choice"
                          title={card.title}
                        >
                          {card.text}
                        </Callout>
                      )
                    )}
                  </div>
                </div>

                <PortfolioEvidence section="journey" />
              </div>
            </Section>

            {/* DESIGN SYSTEM */}
            <Section
              id="design-system"
              eyebrow={t.portfolioCaseStudy.sections.designSystem.eyebrow}
              title={t.portfolioCaseStudy.sections.designSystem.title}
            >
              <div className="space-y-8">
                <PortfolioEvidence section="designSystem" />

                <div className="space-y-6">
                  {t.portfolioCaseStudy.sections.designSystem.items.map(
                    (item, index: number) => (
                      <div key={index}>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>

                        <p className="mt-2 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Section>

            {/* MOBILE */}
            <Section
              id="mobile"
              eyebrow={t.portfolioCaseStudy.sections.mobile.eyebrow}
              title={t.portfolioCaseStudy.sections.mobile.title}
            >
              <div className="space-y-8">
                <div>
                  {t.portfolioCaseStudy.sections.mobile.paragraphs.map(
                    (paragraph: string, index: number) => (
                      <p key={index} className={index > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    )
                  )}

                  <div className="mt-8">
                    <Callout
                      label={t.portfolioCaseStudy.sections.mobile.takeawayTitle}
                      title={t.portfolioCaseStudy.sections.mobile.takeaway}
                    >
                      <></>
                    </Callout>
                  </div>
                </div>

                <PortfolioEvidence section="mobile" />
              </div>
            </Section>

            {/* OUTCOME */}
            <Section
              id="outcome"
              eyebrow={t.portfolioCaseStudy.sections.outcome.eyebrow}
              title={t.portfolioCaseStudy.sections.outcome.title}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {t.portfolioCaseStudy.sections.outcome.items.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border p-5 bg-white"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </Section>
          </div>
        </div>

        {/* FOOTER CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24 pt-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <button
            onClick={() => {
              navigate(`/${lang}`, {
                state: {
                  scrollTo: "projets-perso",
                },
              });
            }}
            className="rounded-2xl border border-gray-300 px-6 py-4 hover:bg-gray-50 transition text-center"
          >
            {t.caseStudyCta.back}
          </button>
          </div>
        </section>
      </main>
    </div>
      </div>
    </>
  );
}
